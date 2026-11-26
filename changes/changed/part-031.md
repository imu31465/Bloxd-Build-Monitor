# Changed — Bundle Modifications Report (Part 031 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `31 / 115` (**305** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 030](part-030.md) · [Part 032 →](part-032.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/249.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/249.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b)

#### 4. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L8-L13956` → after: `L16-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L16-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L16-L134) · [Before (L8-L13956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L8-L13956)

```diff
-     var cU = zU(44458),
-       yU = zU(41108);
-     let QU = !1;
- 
-     function AU() {
-       QU || (QU = !0, yU.e.prototype._sphericalPolynomialTargetSize = 0, yU.e.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(yU.e.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = cU.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = UU, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
- ... (13933 more removed lines; see GitHub link above)
+     const AH = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
+       rH = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
+       SH = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
+       hH = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
+       tH = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
+       zH = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
+       CH = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
+       EH = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
+       XH = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
+       GH = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
+       YH = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
+       uH = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
+       QH = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
+       WH = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
+       MH = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
+       xH = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
+ ... (103 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L13958-L14195` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L136) · [Before (L13958-L14195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L13958-L14195)

```diff
-             diffuseMap: UU._albedoTexture,
-             diffuse: UU._albedoColor,
-             alphaCutOff: UU._alphaCutOff,
-             emissiveMap: UU._emissiveTexture,
-             emissive: UU._emissiveColor,
-             normalMap: UU._bumpTexture,
-             roughnessMap: UU._metallicTexture,
-             roughnessChannel: UU._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
-             roughness: UU._roughness ?? 1,
-             metalnessMap: UU._metallicTexture,
-             metalnessChannel: UU._useMetallnessFromMetallicTextureBlue ? "b" : "r",
-             metalness: UU._metallic ?? 0,
-             aoMap: UU._ambientTexture,
-             aoMapChannel: UU._useAmbientInGrayScale ? "r" : "rgb",
-             aoMapIntensity: UU._ambientTextureStrength,
-             alphaMap: UU._opacityTexture,
- ... (222 more removed lines; see GitHub link above)
+             src: AH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L14198-L14246` → after: `L140-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L140-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L140-L143) · [Before (L14198-L14246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L14198-L14246)

```diff
-       static _GetPositionAtFrameIndex(UU, XU) {
-         if (0 === UU.length) return cU.Sp.Zero();
-         return UU[Math.max(0, Math.min(XU, UU.length - 1))].value.clone()
-       }
-       static _GetRotationAtFrameIndex(UU, XU) {
-         if (0 === UU.length) return cU.Quaternion.Identity();
-         return UU[Math.max(0, Math.min(XU, UU.length - 1))].value.clone()
-       }
-       static _QuaternionToEuler(UU) {
-         const XU = new cU.Matrix;
-         UU.toRotationMatrix(XU);
-         const zU = XU.m;
-         let QU, AU, FU;
-         const oU = Math.sqrt(zU[0] * zU[0] + zU[1] * zU[1]);
-         return oU > Sz.c ? (QU = Math.atan2(zU[6], zU[10]), AU = Math.atan2(-zU[2], oU), FU = Math.atan2(zU[1], zU[0])) : (QU = Math.atan2(-zU[9], zU[5]), AU = Math.atan2(-zU[2], oU), FU = 0), new cU.Sp(yU.Tools.ToDegrees(QU), yU.Tools.ToDegrees(AU), yU.Tools.ToDegrees(FU))
-       }
- ... (33 more removed lines; see GitHub link above)
+     const tB = new Map([...rB].map((HH => {
+       const BH = Object.keys(SB).filter((BH => BH.startsWith(HH) && /^[A-Z]/.test(BH.slice(HH.length))));
+       return [HH, BH]
+     })));
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L14249-L14262` → after: `L146-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L146-L147) · [Before (L14249-L14262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L14249-L14262)

```diff
-       return (XU, zU) => wA(zU, {
-         kind: "elem",
-         prop: String(zU.name),
-         ...UU
-       })
-     }
- 
-     function uA(UU) {
-       const XU = "function" === typeof UU ? UU : UU?.constructor,
-         zU = XU?.[Symbol.metadata];
-       if (!zU) return [];
-       const cU = [];
-       let yU = zU;
-       for (; yU;) Object.prototype.hasOwnProperty.call(yU, eA) && cU.push(...yU[eA]), yU = Object.getPrototypeOf(yU);
+       const BH = hB.get(HH);
+       if (void 0 === BH) throw new Error(`Invalid sound name ${HH} (not in any sound group)`);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L14267-L14268` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L152) · [Before (L14267-L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L14267-L14268)

```diff
-       const XU = UU?.constructor?.[CA];
-       return XU || void 0
+       return zB(HH).group
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L14272` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L156) · [Before (L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L14272)

```diff
-       return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(UU)
+       return zB(HH).file
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L14276-L14295` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L160) · [Before (L14276-L14295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L14276-L14295)

```diff
-       if (LA(UU)) return UU;
-       const XU = (UU ?? "").trim();
-       if (!XU) return {
-         name: ""
-       };
-       const zU = XU.indexOf(":");
-       if (-1 === zU) return {
-         name: XU
-       };
-       if (-1 !== XU.indexOf(":", zU + 1)) return {
-         name: XU
-       };
-       const cU = XU.slice(0, zU),
-         yU = XU.slice(zU + 1);
-       return iA(cU) && iA(yU) ? {
-         ns: cU,
- ... (4 more removed lines; see GitHub link above)
+       return hB.has(HH)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L14299-L14323` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L164) · [Before (L14299-L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L14299-L14323)

```diff
-       return XU ? `${XU}:${UU}` : UU
-     }
-     const vA = Object.freeze({
-         eps: 1e-6,
-         maxDecimalsCap: 15,
-         trimTrailingZeros: !0,
-         allowScientific: !1,
-         snapNearZero: !0
-       }),
-       VA = Object.freeze({
-         number: vA
-       });
- 
-     function sA(UU) {
-       const XU = UU?.eps ?? vA.eps;
-       return {
- ... (9 more removed lines; see GitHub link above)
+       return YB(HH).includes(BH)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L14327-L14351` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L168-L169) · [Before (L14327-L14351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L14327-L14351)

```diff
-       return {
-         number: sA(UU?.number)
-       }
-     }
-     class mA {
-       constructor(UU) {
-         if (this.o = UU, this._o = UU.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
-       }
-       toString(UU) {
-         if (!Number.isFinite(UU)) throw new Error(`Cannot format non-finite number: ${UU}`);
-         const XU = this._o,
-           zU = this._clampInt(XU.maxDecimalsCap ?? 15, 0, 20),
-           cU = XU.trimTrailingZeros ?? !0,
-           yU = XU.snapNearZero ?? !0,
-           QU = XU.zeroThreshold ?? XU.eps,
-           AU = 1 / XU.eps;
- ... (9 more removed lines; see GitHub link above)
+       if (!(HH in SB)) throw new Error(`Invalid sound group ${HH}`);
+       return Object.keys(SB[HH].sounds)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L14355` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L174-L175) · [Before (L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L14355)

```diff
-       return UU instanceof Date
+       let BH = uB.get(HH);
+       return void 0 === BH && (BH = [...hB.keys()].filter((BH => BH.startsWith(HH))), uB.set(HH, BH)), BH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L14359` → after: `L181-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L181-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L181-L191) · [Before (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L14359)

```diff
-       return "string" === typeof UU
+       const BH = QB(HH),
+         LH = BH[Math.floor(Math.random() * BH.length)];
+       if (BH.length > 1) {
+         const BH = function(HH, BH) {
+           const LH = `${BH}\n${HH}`;
+           let AH = MB.get(LH);
+           return void 0 === AH && (AH = QB(HH).filter((HH => hB.get(HH).group === BH)), MB.set(LH, AH)), AH
+         }(HH, hB.get(LH).group);
+         BH.length > 1 ? WB.set(LH, BH) : WB.delete(LH)
+       }
+       return LH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L14363` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L195) · [Before (L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L14363)

```diff
-       return "string" === typeof UU || "number" === typeof UU || "boolean" === typeof UU || "bigint" === typeof UU || lA(UU)
+       return WB.get(HH)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L14366-L16185` → after: `L206-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L206-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L206-L212) · [Before (L14366-L16185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L14366-L16185)

```diff
-     function jA(UU) {
-       return "number" === typeof UU || "boolean" === typeof UU || "bigint" === typeof UU || lA(UU)
-     }
-     class KA {
-       constructor(UU, XU) {
-         this._ns = new Map, this._prefixCount = 0, this._builder = UU, this._format = nA(XU), this._nFmt = new mA(this._format)
-       }
-       withNamespace() {
-         for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
-         for (const cU of XU) this._assignNamespace(cU);
-         return this
-       }
-       serialize(UU, XU) {
-         if (!(XU = XU ?? fA(UU))) throw new Error("can not find name for given object");
-         const zU = HA(XU);
-         zU.ns && this._assignNamespace(zU.ns, "xmlns"), this._gatherNamespaces(UU, new WeakSet);
- ... (1804 more removed lines; see GitHub link above)
+     function SH(HH, BH) {
+       const LH = () => {
+         if (function(HH) {
+             return "loaded" === HH.state() && !HH.playing() && !HH._playLock
+           }(HH)) {
+           for (const BH of rH) HH.off(BH, LH);
+           HH.unload(), null === BH || void 0 === BH || BH()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L16187-L16192` → after: `L214-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L214-L216) · [Before (L16187-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L16187-L16192)

```diff
-         return zU
-       }
-       _handleBabylonTo3mfMatrixTransformToRef(UU, XU) {
-         const zU = UU.multiplyToRef(KF._R_BJS_TO_3MF, HU.e.Zero()).m;
-         return XU.values = [zU[0], zU[1], zU[2], zU[4], zU[5], zU[6], zU[8], zU[9], zU[10], zU[12], zU[13], zU[14]], XU
-       }
+       };
+       for (const AH of rH) HH.on(AH, LH);
+       LH()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/250.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/250.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L4)

```diff
-   37841: (UU, XU, zU) => {
+   40687: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L6)

```diff
-       b: () => yU
+       d: () => AH,
+       f: () => rH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L8-L15` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L9-L14) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L8-L15)

```diff
-     var cU = zU(37846);
-     class yU {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
+     const AH = "The world isn't loaded, so no blocks can be seen.",
+       rH = "The world isn't loaded, so nothing in it can be seen."
+   },
+   40035: (HH, BH, LH) => {
+     function AH(HH) {
+       return !(!HH.lobbyLeaderboardInfo && !HH.lobbyManage)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L17` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L16-L18) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L17)

```diff
-     yU.Instances = [], yU.OnEnginesDisposedObservable = new cU.e, yU._LastCreatedScene = null, yU.UseFallbackTexture = !0, yU.FallbackTexture = ""
+     LH.d(BH, {
+       e: () => AH
+     })
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L19` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L20) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L19)

```diff
-   37834: (UU, XU, zU) => {
+   37659: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L21` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L22-L23) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L21)

```diff
-       b: () => cU
+       c: () => rH,
+       d: () => AH
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L23-L32` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L25-L30) · [Before (L23-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L23-L32)

```diff
-     class cU {
-       static SetMatrixPrecision(UU) {
-         if (cU.MatrixTrackPrecisionChange = !1, UU && !cU.MatrixUse64Bits && cU.MatrixTrackedMatrices)
-           for (let XU = 0; XU < cU.MatrixTrackedMatrices.length; ++XU) {
-             const UU = cU.MatrixTrackedMatrices[XU],
-               zU = UU._m;
-             UU._m = new Array(16);
-             for (let XU = 0; XU < 16; ++XU) UU._m[XU] = zU[XU]
-           }
-         cU.MatrixUse64Bits = UU, cU.MatrixCurrentType = cU.MatrixUse64Bits ? Array : Float32Array, cU.MatrixTrackedMatrices = null
+     const AH = 3,
+       rH = {
+         recording: !1,
+         clipping: !1,
+         hasClipBuffer: !1,
+         seconds: 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L37` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L33) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L37)

```diff
-   37861: (UU, XU, zU) => {
+   37667: (HH, BH, LH) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L39-L44` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L35-L36) · [Before (L39-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L39-L44)

```diff
-       c: () => FU,
-       e: () => DU,
-       i: () => oU,
-       m: () => cU,
-       o: () => QU,
-       q: () => AU
+       d: () => SH,
+       g: () => rH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L46` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L38) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L46)

```diff
-     class cU {}
+     let AH = () => null;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L49` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L41) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L49)

```diff
-       UU.updateFlag = cU._UpdateFlagSeed++
+       AH = HH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L52-L88` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L44-L45) · [Before (L52-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L52-L88)

```diff
-     function QU(UU, XU, zU) {
-       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const yU = UU.cyU(),
-         QU = XU.cyU(),
-         AU = yU[0],
-         FU = yU[1],
-         oU = yU[2],
-         DU = yU[3],
-         EU = yU[4],
-         YU = yU[5],
-         NU = yU[6],
-         IU = yU[7],
-         pU = yU[8],
-         aU = yU[9],
-         tU = yU[10],
-         gU = yU[11],
- ... (21 more removed lines; see GitHub link above)
+     function SH(HH, BH) {
+       return AH(HH, BH)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L91-L93` → after: `L63-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L63-L66) · [Before (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L91-L93)

```diff
-     function AU(UU, XU, zU) {
-       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       QU(UU, XU, zU.cyU(), cU), yU(zU)
+     function EH(HH) {
+       var BH, LH;
+       const AH = (0, SH.i)();
+       return AH ? null === (BH = (0, rH.d)(AH.api, HH[0], HH[1], HH[2])) || void 0 === BH || null === (LH = BH.persisted) || void 0 === LH ? void 0 : LH.shared : void 0
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L96-L99` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L69-L70) · [Before (L96-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L96-L99)

```diff
-     function FU(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const cU = UU.cyU();
-       XU[zU] = cU[0], XU[zU + 1] = cU[1], XU[zU + 2] = cU[2], XU[zU + 3] = cU[3], XU[zU + 4] = cU[4], XU[zU + 5] = cU[5], XU[zU + 6] = cU[6], XU[zU + 7] = cU[7], XU[zU + 8] = cU[8], XU[zU + 9] = cU[9], XU[zU + 10] = cU[10], XU[zU + 11] = cU[11], XU[zU + 12] = cU[12], XU[zU + 13]  … [truncated]
+     function XH(HH) {
+       return `${HH[0]},${HH[1]},${HH[2]}`
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L102-L104` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L76-L77) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L102-L104)

```diff
-     function oU(UU, XU) {
-       const zU = DU(UU, XU.cyU());
-       return zU && yU(XU), zU
+     function QH() {
+       return uH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L107-L162` → after: `L80-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L80-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L80-L98) · [Before (L107-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L107-L162)

```diff
-     function DU(UU, XU) {
-       const zU = UU.cyU(),
-         cU = zU[0],
-         yU = zU[1],
-         QU = zU[2],
-         AU = zU[3],
-         FU = zU[4],
-         oU = zU[5],
-         DU = zU[6],
-         EU = zU[7],
-         YU = zU[8],
-         NU = zU[9],
-         IU = zU[10],
-         pU = zU[11],
-         aU = zU[12],
-         tU = zU[13],
- ... (40 more removed lines; see GitHub link above)
+     function WH(HH) {
+       const BH = null !== YH && YH.key === XH(HH.pos) ? YH.type : null;
+       if (null === BH) return HH;
+       let LH = null;
+       if ("Iron" === BH) {
+         const {
+           cachedPasskey: BH,
+           ...AH
+         } = MH(HH.pos);
+         LH = {
+           mh: null !== BH && void 0 !== BH ? BH : [0, 0, 0, 0],
+           ...AH
+         }
+       }
+       return {
+         ...HH,
+ ... (3 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L164` → after: `L100-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L100-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L100-L203) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L164)

```diff
-     cU._UpdateFlagSeed = 0
+ 
+     function MH(HH) {
+       const BH = EH(HH),
+         LH = null === BH || void 0 === BH ? void 0 : BH.ownerDbId,
+         AH = function(HH) {
+           var BH;
+           let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EH(HH);
+           const AH = XH(HH),
+             rH = GH.get(AH);
+           return rH ? rH.lastOpened < (null !== (BH = null === LH || void 0 === LH ? void 0 : LH.passkeyLastUpdated) && void 0 !== BH ? BH : 0) ? (GH.delete(AH), null) : [...rH.mh] : null
+         }(HH, BH);
+       return void 0 === LH ? {
+         cachedPasskey: AH
+       } : {
+         ownerDbId: LH,
+         cachedPasskey: AH
+ ... (88 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L166` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L205) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L166)

```diff
-   37819: (UU, XU, zU) => {
+   41972: (HH, BH, LH) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L168` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L207) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L168)

```diff
-       e: () => aU,
+       c: () => zH,
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L170-L174` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L209) · [Before (L170-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L170-L174)

```diff
-       h: () => BU,
-       l: () => gU,
-       m: () => YU,
-       q: () => NU,
-       t: () => IU
+       i: () => tH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L176-L478` → after: `L211-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L211-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L211-L231) · [Before (L176-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L176-L478)

```diff
-     var cU = zU(37825),
-       yU = zU(37827),
-       QU = zU(37834),
-       AU = zU(37841),
-       FU = zU(37855),
-       oU = zU(37861),
-       DU = zU(37863);
-     const EU = UU => parseInt(UU.toString().replace(/\W/g, ""));
-     class YU {
-       constructor() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this.x = UU, this.y = XU
-       }
-       toString() {
-         return `{X: ${this.x} Y: ${this.y}}`
- ... (287 more removed lines; see GitHub link above)
+     var AH = LH(41898),
+       rH = LH(5255),
+       SH = LH(41911);
+ 
+     function hH() {
+       var HH;
+       const BH = null === (HH = (0, SH.i)()) || void 0 === HH ? void 0 : HH.api.localId;
+       return void 0 === BH || BH === AH.bd ? null : String(BH)
+     }
+ 
+     function tH(HH) {
+       const BH = (0, SH.i)();
+       if (null !== BH) return HH(BH);
+       let LH = null;
+       const AH = (0, rH.r)((() => {
+         const BH = (0, SH.i)();
+ ... (5 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L480-L486` → after: `L233-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L233-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L233-L248) · [Before (L480-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L480-L486)

```diff
-       static DistanceOfPointFromSegment(UU, XU, zU) {
-         const cU = YU.DistanceSquared(XU, zU);
-         if (0 === cU) return YU.Distance(UU, XU);
-         const yU = zU.subtract(XU),
-           QU = Math.max(0, Math.min(1, YU.Dot(UU.subtract(XU), yU) / cU)),
-           AU = XU.add(yU.multiplyByFloats(QU, QU));
-         return YU.Distance(UU, AU)
+     }
+ 
+     function zH(HH, BH, LH) {
+       return {
+         current: () => {
+           const LH = (0, SH.i)();
+           return null === LH ? BH : HH(LH)()
+         },
+         watch: BH => tH((AH => {
+           const rH = HH(AH);
+           let SH = rH();
+           return BH(SH), LH((() => {
+             const HH = rH();
+             HH !== SH && (SH = HH, BH(HH))
+           }))
+         }))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L489-L492` → after: `L251-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L251-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L251-L271) · [Before (L489-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L489-L492)

```diff
-     YU._V8PerformanceHack = new YU(.5, .5), YU._ZeroReadOnly = YU.Zero();
-     class NU {
-       get x() {
-         return this._x
+   },
+   41968: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => CH
+     });
+     var AH = LH(41911),
+       rH = LH(41972),
+       SH = LH(41981);
+ 
+     function hH() {
+       var HH, BH;
+       return null !== (HH = null === (BH = (0, AH.i)()) || void 0 === BH ? void 0 : BH.itemBridgeSources) && void 0 !== HH ? HH : SH.c
+     }
+ 
+     function tH(HH) {
+       return {
+ ... (5 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L494-L495` → after: `L273-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L273-L277) · [Before (L494-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L494-L495)

```diff
-       set x(UU) {
-         this._x = UU, this._isDirty = !0
+     }
+ 
+     function zH(HH) {
+       return {
+         watch: BH => (0, rH.i)((LH => LH.itemBridgeSources.events[HH].watch(BH)))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L497-L498` → after: `L279-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L279-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L279-L310) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L497-L498)

```diff
-       get y() {
-         return this._y
+     }
+     const CH = {
+       states: {
+         inventory: tH("inventory"),
+         hotbar: tH("hotbar"),
+         crafting: tH("crafting"),
+         heldItemAim: tH("heldItemAim")
+       },
+       events: {
+         hotbarSlotRequested: zH("hotbarSlotRequested"),
+         hotbarScrolled: zH("hotbarScrolled"),
+         numberKeyPressed: zH("numberKeyPressed"),
+         inventoryDropRequested: zH("inventoryDropRequested"),
+         chestToggled: zH("chestToggled"),
+         chestRefreshed: zH("chestRefreshed"),
+         inventorySynced: zH("inventorySynced"),
+ ... (16 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L500-L501` → after: `L312-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L312-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L312-L324) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L500-L501)

```diff
-       set y(UU) {
-         this._y = UU, this._isDirty = !0
+     }
+   },
+   41981: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => zH
+     });
+     var AH = LH(40687),
+       rH = LH(37659);
+ 
+     function SH(HH) {
+       return {
+         current: () => HH,
+         watch: () => () => {}
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L503-L504` → after: `L326-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L326-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L326-L557) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L503-L504)

```diff
-       get z() {
-         return this._z
+     }
+ 
+     function hH() {}
+     const tH = Object.freeze([0, 0, 0]),
+       zH = {
+         states: {
+           health: SH({
+             health: null,
+             maxHealth: null,
+             shield: null,
+             maxShield: null
+           }),
+           inventory: SH({
+             player: [],
+             chestOrCreative: [],
+             chest: null,
+ ... (216 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L506-L507` → after: `L559-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L559-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L559-L740) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L506-L507)

```diff
-       set z(UU) {
-         this._z = UU, this._isDirty = !0
+   },
+   41905: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => bH,
+       g: () => OH,
+       h: () => kH,
+       k: () => VH,
+       m: () => TH
+     });
+     var AH = LH(40210),
+       rH = LH(1168),
+       SH = LH(2036),
+       hH = LH(2045),
+       tH = LH(3639),
+       zH = LH(37667),
+       CH = LH(1297),
+ ... (166 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L510-L552` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L754) · [Before (L510-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L510-L552)

```diff
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this._isDirty = !0, this._x = UU, this._y = XU, this._z = zU
-       }
-       toString() {
-         return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
-       }
-       getClassName() {
-         return "Sp"
-       }
-       getHashCode() {
-         let UU = EU(this._x);
-         return UU = 397 * UU ^ EU(this._y), UU = 397 * UU ^ EU(this._z), UU
-       }
-       cyU() {
- ... (27 more removed lines; see GitHub link above)
+         super(...arguments), this.name = "CoreCorruption"
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L554-L579` → after: `L756-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L756-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L756-L801) · [Before (L554-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L554-L579)

```diff
-       subtract(UU) {
-         return new NU(this._x - UU._x, this._y - UU._y, this._z - UU._z)
-       }
-       subtractToRef(UU, XU) {
-         return this.subtractFromFloatsToRef(UU._x, UU._y, UU._z, XU)
-       }
-       subtractFromFloats(UU, XU, zU) {
-         return new NU(this._x - UU, this._y - XU, this._z - zU)
-       }
-       subtractFromFloatsToRef(UU, XU, zU, cU) {
-         return cU._x = this._x - UU, cU._y = this._y - XU, cU._z = this._z - zU, cU._isDirty = !0, cU
-       }
-       fp() {
-         return new NU(-this._x, -this._y, -this._z)
-       }
-       negateInPlace() {
- ... (10 more removed lines; see GitHub link above)
+     }
+ 
+     function rH(HH) {
+       return HH instanceof RangeError && /call stack/i.test(HH.message) || HH instanceof Error && "InternalError" === HH.name && /recursion/i.test(HH.message)
+     }
+     const SH = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
+ 
+     function hH(HH) {
+       var BH;
+       return HH instanceof WebAssembly.RuntimeError || HH instanceof AH || rH(HH) && SH.test(null !== (BH = HH.stack) && void 0 !== BH ? BH : "")
+     }
+ 
+     function tH(HH, BH) {
+       if (hH(HH)) throw HH;
+       console.error(BH, HH)
+     }
+ ... (30 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L581-L582` → after: `L803-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L803-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L803-L814) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L581-L582)

```diff
-       scaleToRef(UU, XU) {
-         return XU._x = this._x * UU, XU._y = this._y * UU, XU._z = this._z * UU, XU._isDirty = !0, XU
+     }
+     let rH = null,
+       SH = null,
+       hH = null;
+     const tH = [];
+     let zH = null;
+ 
+     function CH(HH, BH) {
+       try {
+         HH(BH)
+       } catch (LH) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", LH)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L584-L592` → after: `L816-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L816-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L816-L840) · [Before (L584-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L584-L592)

```diff
-       getNormalToRef(UU) {
-         const XU = this.length();
-         let zU = Math.acos(this._y / XU);
-         const cU = Math.atan2(this._z, this._x);
-         zU > Math.PI / 2 ? zU -= Math.PI / 2 : zU += Math.PI / 2;
-         const yU = XU * Math.sin(zU) * Math.cos(cU),
-           QU = XU * Math.cos(zU),
-           AU = XU * Math.sin(zU) * Math.sin(cU);
-         return UU.set(yU, QU, AU), UU
+     }
+ 
+     function EH() {
+       return zH
+     }
+ 
+     function XH(HH) {
+       tH.push(HH), null !== zH && CH(HH, zH)
+     }
+ 
+     function GH(HH) {
+       return rH ??= Promise.all([LH.e(84), LH.e(111), LH.e(86), LH.e(248), LH.e(89), LH.e(220), LH.e(170), LH.e(249), LH.e(109), LH.e(268), LH.e(238), LH.e(300), LH.e(49), LH.e(217), LH.e(233), LH.e(216), LH.e(207), LH.e(208), LH.e(101), LH.e(134), LH.e(274), LH.e(68)]).then((()  … [truncated]
+         BH.loadAudio(HH), zH = BH;
+         for (const HH of tH) CH(HH, BH);
+         return BH
+       })).catch((HH => {
+ ... (9 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L594-L2733` → after: `L842-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L842-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L842-L847) · [Before (L594-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L594-L2733)

```diff
-       applyRotationQuaternionToRef(UU, XU) {
-         const zU = this._x,
-           cU = this._y,
-           yU = this._z,
-           QU = UU._x,
-           AU = UU._y,
-           FU = UU._z,
-           oU = UU._w,
-           DU = 2 * (AU * yU - FU * cU),
-           EU = 2 * (FU * zU - QU * yU),
-           YU = 2 * (QU * cU - AU * zU);
-         return XU._x = zU + oU * DU + AU * YU - FU * EU, XU._y = cU + oU * EU + FU * DU - QU * YU, XU._z = yU + oU * YU + QU * EU - AU * DU, XU._isDirty = !0, XU
-       }
-       applyRotationQuaternionInPlace(UU) {
-         return this.applyRotationQuaternionToRef(UU, this)
-       }
- ... (2124 more removed lines; see GitHub link above)
+     }
+ 
+     function uH(HH, BH) {
+       SH = {
+         running: HH,
+         shell: BH
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2745-L2800` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L852) · [Before (L2745-L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L2745-L2800)

```diff
-       GU || (GU = !0, Object.defineProperties(YU.prototype, {
-         dimension: {
-           value: [2]
-         },
-         rank: {
-           value: 1
-         }
-       }), Object.defineProperties(NU.prototype, {
-         dimension: {
-           value: [3]
-         },
-         rank: {
-           value: 1
-         }
-       }), Object.defineProperties(IU.prototype, {
-         dimension: {
- ... (40 more removed lines; see GitHub link above)
+       return hH
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2802-L2810` → after: `L854-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L854-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L854-L863) · [Before (L2802-L2810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L2802-L2810)

```diff
-     class QU {
-       constructor(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = UU, this.mask = XU, this.scope = zU, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
-       }
-       remove() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(UU)
-       }
+     async function WH(HH) {
+       const BH = SH;
+       if ((null === BH || void 0 === BH ? void 0 : BH.running) !== HH) throw new Error("the core's session has ended");
+       const LH = await GH(BH.shell.audio).catch((HH => {
+         throw new AH(HH)
+       }));
+       if (null !== hH) return hH;
+       if (SH !== BH || HH.isStopped) throw new Error("the core stopped while the game code loaded");
+       if (hH = LH.startGameHost(HH, BH.shell), null === hH) throw new Error("the core's shared tables didn't read, so the game can't start");
+       return hH
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L2812-L2916` → after: `L865-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L865-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/250.js#L865-L867) · [Before (L2812-L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/250.js#L2812-L2916)

```diff
-     class AU {
-       static FromPromise(UU, XU) {
-         const zU = new AU;
-         return UU.then((UU => {
-           zU.notifyObservers(UU)
-         })).catch((UU => {
-           if (!XU) throw UU;
-           XU.notifyObservers(UU)
-         })), zU
-       }
-       get observers() {
-         return this._observers
-       }
-       constructor(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = XU, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new yU(0), UU && (this._onObserverAdded = UU)
- ... (89 more removed lines; see GitHub link above)
+ 
+     function MH() {
+       null !== hH && (null !== zH ? zH.endGameHost(hH) : hH.closeGame()), hH = null, SH = null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/251.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/251.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L4)

```diff
-   37923: (UU, XU, zU) => {
+   37791: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L8-L9` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L7) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L8-L9)

```diff
-       f: () => aU,
-       i: () => IU
+       f: () => PH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L11-L14` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L9-L26) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L11-L14)

```diff
-     var cU = zU(37827),
-       yU = zU(37825),
-       QU = zU(37855),
-       AU = zU(37863);
+     var AH = LH(4631),
+       rH = LH(1450),
+       SH = LH(45),
+       hH = LH(7007),
+       tH = LH(4624),
+       zH = LH(1241),
+       CH = LH(1998),
+       EH = LH(1967),
+       XH = LH(1455),
+       GH = LH(1123),
+       YH = LH(37793),
+       uH = LH(1038),
+       QH = LH.n(uH),
+       WH = LH(1287),
+       MH = LH(1315),
+       xH = LH(1214),
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L16-L22` → after: `L28-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L28-L31) · [Before (L16-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L16-L22)

```diff
-     function FU(UU) {
-       return Math.pow(UU, yU.h)
-     }
- 
-     function oU(UU) {
-       return UU <= .04045 ? .0773993808 * UU : Math.pow(.947867299 * (UU + .055), 2.4)
-     }
+     function TH() {
+       const {
+         t: HH
+       } = (0, GH.B)(), [BH, LH] = (0, SH.useState)(!1), [uH, TH] = (0, SH.useState)(null), [VH, OH] = (0, SH.useState)(1), [bH, kH] = (0, SH.useState)(!1), [mH, oH] = (0, SH.useState)(!1), IH = (0, SH.useRef)(0), fH = (0, SH.useRef)(!1), lH = (0, SH.useRef)(!1), KH = (0, SH.useRe … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L24-L26` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L33-L36) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L24-L26)

```diff
-     function DU(UU) {
-       return Math.pow(UU, yU.d)
-     }
+       function eH() {
+         const HH = null !== uH && void 0 !== uH ? uH : "Rested Speed";
+         CH.gameBridge.send("wakeUp", mH ? HH : null), cH.current = null, LH(!1), TH(null), OH(1), kH(!1), oH(!1)
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L28-L30` → after: `L38-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L38-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L38-L187) · [Before (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L28-L30)

```diff
-     function EU(UU) {
-       return UU <= .0031308 ? 12.92 * UU : 1.055 * Math.pow(UU, .41666) - .055
-     }
+       function qH() {
+         return !bH && (eH(), !0)
+       }
+       return (0, rH.d)("PlayerPhysicsTypeUpdate", (HH => {
+         HH !== cH.current && (cH.current = HH, HH === hH.o.SLEEPING ? (lH.current || (IH.current = CH.gameBridge.lookup("cameraZoom", null), lH.current = !0), fH.current = !0, CH.gameBridge.send("setCameraZoom", 3), LH(!0), OH(function() {
+           for (const HH of CH.gameBridge.lookup("blocksStandingOn", null)) {
+             if (YH.d.leafBeds.includes(HH)) return console.log(`Found leaf bed: ${HH}`), 1;
+             if (YH.d.woolBeds.includes(HH)) return console.log(`Found woold bed: ${HH}`), 2;
+             if (YH.d.strongBeds.includes(HH)) return console.log(`Found strong bed ${HH}`), 3
+           }
+           return 1
+         }())) : (lH.current = !1, LH(!1), TH(null), OH(1)))
+       })), (0, SH.useEffect)((() => () => {
+         (0, zH.t)(PH)
+       }), []), (0, SH.useEffect)((() => {
+         BH ? (0, zH.x)(PH) : ((0, zH.t)(PH), fH.current && (CH.gameBridge.send("setCameraZoom", IH.current), fH.current = !1))
+ ... (134 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L33-L191` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L190) · [Before (L33-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L33-L191)

```diff
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.r = UU, this.g = XU, this.b = zU
-       }
-       toString() {
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
-       }
-       getClassName() {
-         return "Color3"
-       }
-       getHashCode() {
-         let UU = 255 * this.r | 0;
-         return UU = 397 * UU ^ 255 * this.g, UU = 397 * UU ^ 255 * this.b, UU
-       }
-       toArray(UU) {
- ... (143 more removed lines; see GitHub link above)
+         this.lostAtMs = null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L193-L197` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L192-L193) · [Before (L193-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L193-L197)

```diff
-       toHexString() {
-         const UU = Math.round(255 * this.r),
-           XU = Math.round(255 * this.g),
-           zU = Math.round(255 * this.b);
-         return "#" + (0, QU.ToHex)(UU) + (0, QU.ToHex)(XU) + (0, QU.ToHex)(zU)
+       update(HH, BH) {
+         return HH ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= BH, BH - this.lostAtMs >= 250)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L199-L324` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L195-L196) · [Before (L199-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L199-L324)

```diff
-       fromHexString(UU) {
-         return "#" !== UU.substring(0, 1) || 7 !== UU.length || (this.r = parseInt(UU.substring(1, 3), 16) / 255, this.g = parseInt(UU.substring(3, 5), 16) / 255, this.b = parseInt(UU.substring(5, 7), 16) / 255), this
-       }
-       toHSV() {
-         return this.toHSVToRef(new YU)
-       }
-       toHSVToRef(UU) {
-         const XU = this.r,
-           zU = this.g,
-           cU = this.b,
-           yU = Math.max(XU, zU, cU),
-           QU = Math.min(XU, zU, cU);
-         let AU = 0,
-           FU = 0;
-         const oU = yU,
-           DU = yU - QU;
- ... (110 more removed lines; see GitHub link above)
+       reset() {
+         this.lostAtMs = null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L329-L560` → after: `L200-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L200-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L200-L286) · [Before (L329-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L329-L560)

```diff
-       constructor() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
-         this.r = UU, this.g = XU, this.b = zU, this.a = cU
-       }
-       cyU() {
-         return [this.r, this.g, this.b, this.a]
-       }
-       toArray(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return UU[XU] = this.r, UU[XU + 1] = this.g, UU[XU + 2] = this.b, UU[XU + 3] = this.a, this
-       }
-       zY(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
- ... (216 more removed lines; see GitHub link above)
+       constructor(HH, BH) {
+         this.press = HH, this.release = BH, this.downAtMs = null, this.token = null, this.latched = !1
+       }
+       update(HH, BH, LH, AH) {
+         if (HH && null === this.downAtMs) return this.downAtMs = LH, this.latched = AH, void(this.token = this.press(AH));
+         null !== this.downAtMs && (this.latched ? HH && this.end() : !BH && LH - this.downAtMs >= 40 && this.end())
+       }
+       isLatched() {
+         return null !== this.downAtMs && this.latched
+       }
+       unlatch() {
+         this.latched = !1
+       }
+       cancel() {
+         null !== this.downAtMs && this.end()
+       }
+ ... (71 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L564-L578` → after: `L289-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L289-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L289-L310) · [Before (L564-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L564-L578)

```diff
-         return UU
-       }
-     }
-     NU._V8PerformanceHack = new NU(.5, .5, .5, .5);
-     class IU {}
-     IU.Color3 = (0, cU.d)(3, YU.Black), IU.Color4 = (0, cU.d)(3, (() => new NU(0, 0, 0, 0)));
-     let pU = !1;
- 
-     function aU() {
-       pU || (pU = !0, Object.defineProperties(YU.prototype, {
-         dimension: {
-           value: [3]
-         },
-         rank: {
-           value: 1
+       };
+     var fH = LH(8855);
+     var lH = LH(41875),
+       KH = LH(9450),
+       cH = LH(8897),
+       eH = LH(9540);
+     var qH = LH(41871),
+       gH = LH(9543),
+       NH = LH(41889),
+       RH = LH(9522),
+       jH = LH(9453),
+       nH = LH(9458),
+       FH = LH(9463),
+       DH = LH(9347),
+       wH = LH(9419);
+     const ZH = () => DH.c[(0, GH.g)().tapHoldTime].wheelMs,
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L580-L585` → after: `L312-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L312-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L312-L492) · [Before (L580-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L580-L585)

```diff
-       }), Object.defineProperties(NU.prototype, {
-         dimension: {
-           value: [4]
-         },
-         rank: {
-           value: 1
+       }), (HH => {
+         let {
+           bodies: BH,
+           press: AH
+         } = HH;
+         LH(BH, AH)
+       })),
+       sH = {
+         running: !1,
+         latchedAtMs: -1 / 0
+       },
+       JH = HH => {
+         const BH = {
+           x: 0,
+           y: 0,
+           magnitude: 0,
+ ... (165 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L587-L588` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L494) · [Before (L587-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L587-L588)

```diff
-       }), (0, AU.h)("BABYLON.Color3", YU), (0, AU.h)("BABYLON.Color4", NU))
-     }
+       }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L590` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L496) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L590)

```diff
-   37825: (UU, XU, zU) => {
+   41875: (HH, BH, LH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L592-L593` → after: `L498-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L498-L499) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L592-L593)

```diff
-       c: () => QU,
-       d: () => cU,
+       b: () => uH,
+       e: () => WH,
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L596-L748` → after: `L502-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L502-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L502-L527) · [Before (L596-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L596-L748)

```diff
-     const cU = 1 / 2.2,
-       yU = 2.2;
-     Math.sqrt(5);
-     let QU = .001
-   },
-   37855: (UU, XU, zU) => {
-     function cU(UU) {
-       return parseInt(UU.toString().replace(/\W/g, ""))
-     }
- 
-     function yU(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(UU - XU) <= zU
-     }
- 
-     function QU(UU, XU, zU) {
- ... (137 more removed lines; see GitHub link above)
+     var AH = LH(1241),
+       rH = LH(4657),
+       SH = LH(9484),
+       hH = LH(37791),
+       tH = LH(1757),
+       zH = LH(1115),
+       CH = LH(8913),
+       EH = LH(9407),
+       XH = LH(9509);
+     const GH = {
+         emoteWheel: SH.g,
+         quickChatWheel: EH.e,
+         actionWheel: XH.r
+       },
+       YH = Object.keys(GH),
+       uH = "dead",
+ ... (10 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L750-L759` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L529) · [Before (L750-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L750-L759)

```diff
-   37827: (UU, XU, zU) => {
-     function cU(UU, XU) {
-       const zU = [];
-       for (let cU = 0; cU < UU; ++cU) zU.push(XU());
-       return zU
-     }
- 
-     function yU(UU, XU) {
-       return cU(UU, XU)
-     }
+   41871: (HH, BH, LH) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L761` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L531) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L761)

```diff
-       d: () => cU,
+       b: () => rH,
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L763` → after: `L533-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L533-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L533-L538) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L763)

```diff
-       i: () => AU
+       j: () => tH,
+       m: () => EH,
+       p: () => hH,
+       q: () => SH,
+       s: () => CH,
+       t: () => XH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L765-L780` → after: `L540-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L540-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L540-L682) · [Before (L765-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L765-L780)

```diff
-     const QU = ["push", "splice", "pop", "shift", "unshift"];
- 
-     function AU(UU, XU) {
-       const zU = QU.map((zU => function(UU, XU, zU) {
-         const cU = UU[XU];
-         if ("function" !== typeof cU) return null;
-         const yU = function() {
-           const cU = UU.length,
-             QU = yU.previous.apply(UU, arguments);
-           return zU(XU, cU), QU
-         };
-         return cU.next = yU, yU.previous = cU, UU[XU] = yU, () => {
-           const zU = yU.previous;
-           if (!zU) return;
-           const cU = yU.next;
-           cU ? (zU.next = cU, cU.previous = zU) : (zU.next = void 0, UU[XU] = zU), yU.next = void 0, yU.previous = void 0
+     var AH = LH(8857);
+     class rH {
+       constructor() {
+         this.fullTiltSinceMs = null
+       }
+       update(HH, BH, LH) {
+         const rH = (0, AH.f)(HH, BH.lookDeadzone);
+         if (Math.hypot(rH.x, rH.y) < .9 || Math.abs(rH.x) < Math.abs(rH.y)) return this.fullTiltSinceMs = null, 1;
+         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = LH);
+         const SH = (hH = BH.lookSensitivityX, Math.min(1, 100 / hH));
+         var hH;
+         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (LH - this.fullTiltSinceMs - 250 * SH) / (200 * SH)))
+       }
+       reset() {
+         this.fullTiltSinceMs = null
+       }
+ ... (127 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L788` → after: `L687-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L687-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L687-L690) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L788)

```diff
-   37863: (UU, XU, zU) => {
+   41860: (HH, BH, LH) => {
+     LH(9543)
+   },
+   41864: (HH, BH, LH) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L790-L791` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L692) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L790-L791)

```diff
-       e: () => QU,
-       h: () => yU
+       e: () => vH
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L793-L801` → after: `L694-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L694-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/251.js#L694-L781) · [Before (L793-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/251.js#L793-L801)

```diff
-     const cU = {};
- 
-     function yU(UU, XU) {
-       cU[UU] = XU
-     }
- 
-     function QU(UU) {
-       return cU[UU]
-     }
+     var AH = LH(18),
+       rH = LH(9484),
+       SH = LH(9499),
+       hH = LH(8870),
+       tH = LH(8901),
+       zH = LH(8878),
+       CH = LH(41871),
+       EH = LH(41875),
+       XH = LH(8913),
+       GH = LH(8857),
+       YH = LH(9407),
+       uH = LH(9509);
+     const QH = [{
+         isOpen: rH.i,
+         openButton: () => (0, hH.k)("emoteWheel"),
+         aim: HH => {
+ ... (72 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/252.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/252.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af)

#### 1. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L4)

```diff
-   37841: (UU, XU, zU) => {
+   39342: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L6)

```diff
-       b: () => yU
+       d: () => uH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L8-L15` → after: `L8-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L8-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L8-L610) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L8-L15)

```diff
-     var cU = zU(37846);
-     class yU {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
+     var AH = LH(176),
+       rH = LH(38491);
+     const SH = 1.2,
+       hH = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
+         },
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         rE: .5,
+ ... (587 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L19` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L613) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L19)

```diff
-   39486: (UU, XU, zU) => {
+   37941: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L21` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L615) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L21)

```diff
-       c: () => QU
+       d: () => AH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L23-L57` → after: `L617-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L617-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L617-L716) · [Before (L23-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L23-L57)

```diff
-     var cU = zU(39493);
-     const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
-       ...UU
-     } : null : UU.clone(XU) : null;
-     class QU {
-       static DeepCopy(UU, XU, zU, QU) {
-         let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const FU = function(UU) {
-           const XU = [];
-           do {
-             const zU = Object.getOwnPropertyNames(UU);
-             for (const UU of zU) - 1 === XU.indexOf(UU) && XU.push(UU)
-           } while (UU = Object.getPrototypeOf(UU));
-           return XU
-         }(UU);
-         for (const DU of FU) {
- ... (19 more removed lines; see GitHub link above)
+     const AH = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (84 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L62-L68` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L777) · [Before (L62-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L62-L68)

```diff
-   38649: (UU, XU, zU) => {
-     function cU() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
-         const XU = 16 * Math.random() | 0;
-         return ("x" === UU ? XU : 3 & XU | 8).toString(16)
-       }))
-     }
+   38499: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L77-L128` → after: `L781-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L781-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L781-L800) · [Before (L77-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L77-L128)

```diff
-     class cU {
-       static _CheckLimit(UU, XU) {
-         let zU = cU._LogLimitOutputs[UU];
-         return zU ? zU.current++ : (zU = {
-           limit: XU,
-           current: 1
-         }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
-       }
-       static _GenerateLimitMessage(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const zU = cU._LogLimitOutputs[UU];
-         if (!zU || !cU.MessageLimitReached) return;
-         const yU = this._Levels[XU];
-         zU.current === zU.limit && cU[yU.name](cU.MessageLimitReached.replace(/%LIMIT%/g, "" + zU.limit).replace(/%TYPE%/g, yU.name ?? ""))
-       }
-       static _AddLogEntry(UU) {
- ... (36 more removed lines; see GitHub link above)
+     var AH = LH(330),
+       rH = LH.n(AH),
+       SH = LH(1962);
+     let hH;
+     var tH, zH, CH, EH, XH, GH, YH, uH, QH;
+     const WH = ["b", 0, 1, "h", 3, 179, 9, 7, 48, 6, 4, 8, 255, "length", "undefined", void 0, "d", 2, 63, "fromCodePoint", 12, "push", 91, 8191, 88, 13, 14, 192, 106, 5, "f", 96, 107, 108, "e", null, 103, 104, 105, 109, 110, 111, 121, 122, 127, 128, 89, 138, 58, "bu", "c", 204,  … [truncated]
+ 
+     function MH(...HH) {
+       return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = function(...HH) {
+         for (oH(HH[WH[13]] = WH[2], HH[-WH[5]] = 'JwQzaD(U?:t$%4+Y;R[.SXHu>n"1s3#AjL@VB7TNgx)!9<8p&E=IbhP^}oy~qr`26*Omef/_Zc|C0dvF]MGW{,5liKk', HH[WH[0]] = "" + (HH[WH[1]] || ""), HH[WH[4]] = HH[WH[0]].length, HH[WH[10]] = [], HH[WH[8]] = WH[1], HH[WH[9]] = WH[1], HH[WH[7]] = -WH … [truncated]
+           if (HH[WH[6]] = HH[-WH[5]].indexOf(HH[WH[0]][HH[WH[3]]]), HH[WH[6]] !== -WH[2])
+             if (HH[WH[7]] < WH[1]) HH[WH[7]] = HH[WH[6]];
+             else {
+               oH(HH[WH[7]] += HH[WH[6]] * WH[22], HH[WH[8]] |= HH[WH[7]] << HH[WH[9]], HH[WH[9]] += (HH[WH[7]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
+               do {
+                 oH(HH[WH[10]].push(HH[WH[8]] & WH[12]), HH[WH[8]] >>= WH[11], HH[WH[9]] -= WH[11])
+ ... (4 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L130-L161` → after: `L802-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L802-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L802-L804) · [Before (L130-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L130-L161)

```diff
-     cU.NoneLogLevel = 0, cU.MessageLogLevel = 1, cU.WarningLogLevel = 2, cU.ErrorLogLevel = 4, cU.AllLogLevel = 7, cU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", cU._LogCache = "", cU._LogLimitOutputs = {}, cU._Levels =  … [truncated]
-       color: "white",
-       logFunc: console.log,
-       name: "Log"
-     }, {
-       color: "orange",
-       logFunc: console.warn,
-       name: "Warn"
-     }, {}, {
-       color: "red",
-       logFunc: console.error,
-       name: "Error"
-     }], cU.errorsCount = 0, cU.Log = cU._LogEnabled.bind(cU, cU.MessageLogLevel), cU.Warn = cU._LogEnabled.bind(cU, cU.WarningLogLevel), cU.Error = cU._LogEnabled.bind(cU, cU.ErrorLogLevel)
-   },
-   37846: (UU, XU, zU) => {
-     zU.d(XU, {
- ... (16 more removed lines; see GitHub link above)
+ 
+     function xH(...HH) {
+       return HH[WH[13]] = WH[2], typeof EH !== WH[14] && EH ? (new EH).decode(new XH(HH[WH[1]])) : typeof GH !== WH[14] && GH ? GH.from(HH[WH[1]]).toString("utf-8") : QH(HH[WH[1]])
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L163-L171` → after: `L806-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L806-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L806-L869) · [Before (L163-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L163-L171)

```diff
-     class QU {
-       constructor(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = UU, this.mask = XU, this.scope = zU, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
-       }
-       remove() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(UU)
-       }
+ 
+     function vH() {}
+     oH(tH = {}, zH = ['?"xC%^7.M2X*uGsu7"9d&Cy8nRi|vQ', 'sP"1>be81*(QD;4', ",/kINrQ[pYX(V+v1", "K`St{vE24~Z?oaA3]/z=bZ5%&OF24;Xx^*%A@V9>C}/8[Mcna|et^GsB@q5mJ", "@|;LwBb#&[+yJ1yV>_9t<dJ[=%*E_/MN!Iw", ">jcIY0bb`hmX:{VR/7@I[MtyU^u(S~!.P<_E;", "G<%dS0!V4[:;4;jRq`~?DZ8QUSfc,])n>Y{hT,N … [truncated]
+       var HH, BH, LH, AH = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }];
+       oH(HH = void 0, BH = []);
+       try {
+         oH(HH = Object, BH[WH[21]]("".__proto__.constructor.name))
+       } catch (XH) {}
+ ... (48 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L173-L188` → after: `L871-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L871-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L871-L884) · [Before (L173-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L173-L188)

```diff
-     class AU {
-       static FromPromise(UU, XU) {
-         const zU = new AU;
-         return UU.then((UU => {
-           zU.notifyObservers(UU)
-         })).catch((UU => {
-           if (!XU) throw UU;
-           XU.notifyObservers(UU)
-         })), zU
-       }
-       get observers() {
-         return this._observers
-       }
-       constructor(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = XU, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new yU(0), UU && (this._onObserverAdded = UU)
+     hH = (...HH) => {
+       function BH(...HH) {
+         return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = function(...HH) {
+           for (oH(HH[WH[13]] = WH[2], HH[-WH[28]] = 'dMtkDOX_i=n:{yAz~[l1gT,P}LF>;Yrc"%f7pZ+Vvs`@m!$<(?4h3QSuo^59x&EKU])2e*6J0.N#8RbwB/ICqHjGWa|', HH[-WH[7]] = "" + (HH[WH[1]] || ""), HH[-WH[27]] = HH[-WH[7]].length, HH[WH[16]] = [], HH[WH[29]] = WH[1], HH[WH[30]] = WH[1], HH[WH[ … [truncated]
+             if (HH[WH[6]] = HH[-WH[28]].indexOf(HH[-WH[7]][HH[WH[3]]]), HH[WH[6]] !== -WH[2])
+               if (HH[WH[7]] < WH[1]) HH[WH[7]] = HH[WH[6]];
+               else {
+                 oH(HH[WH[7]] += HH[WH[6]] * WH[22], HH[WH[29]] |= HH[WH[7]] << HH[WH[30]], HH[WH[30]] += (HH[WH[7]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
+                 do {
+                   oH(HH[WH[16]].push(HH[WH[29]] & WH[12]), HH[WH[29]] >>= WH[11], HH[WH[30]] -= WH[11])
+                 } while (HH[WH[30]] > WH[7]);
+                 HH[WH[7]] = -WH[2]
+               } return HH[WH[7]] > -WH[2] && HH[WH[16]].push((HH[WH[29]] | HH[WH[7]] << HH[WH[30]]) & WH[12]), xH(HH[WH[16]])
+         }(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L190-L216` → after: `L886-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L886-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L886-L904) · [Before (L190-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L190-L216)

```diff
-       add(UU) {
-         let XU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           zU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if (!UU) return null;
-         const yU = new QU(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
-         yU.unregisterOnNextCall = zU, XU ? this._observers.unshift(yU) : this._observers.push(yU), this._onObserverAdded && this._onObserverAdded(yU), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(yU, this._lastNotifiedValue);
-         const AU = cU ? new WeakRef(this) : {
-           deref: () => this
-         };
-         return yU._remove = function() {
-           let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           const XU = AU.deref();
-           XU && (UU ? XU.remove(yU) : XU._remove(yU))
-         }, yU
-       }
-       addOnce(UU) {
- ... (11 more removed lines; see GitHub link above)
+       HH[WH[13]] = WH[11];
+       const LH = HH[WH[1]][BH(WH[31])][BH(97) + BH(WH[86]) + BH(99)](HH[WH[2]]);
+       HH[WH[11]] = HH[WH[1]][BH(WH[31])][BH(100) + BH(101) + BH(102) + "s"](LH);
+       const AH = HH[WH[11]] === WH[35] ? HH[WH[1]][BH(WH[31])][BH(WH[36]) + BH(WH[37]) + BH(WH[38])](HH[WH[2]], BH(WH[28]) + BH(WH[32]) + BH(WH[33]) + WH[34]) : HH[WH[11]][BH(WH[28]) + BH(WH[32]) + BH(WH[33]) + WH[34]],
+         hH = HH[WH[11]] === WH[35] ? HH[WH[1]][BH(WH[31])][BH(WH[36]) + BH(WH[37]) + BH(WH[38])](HH[WH[2]], BH(WH[39]) + BH(WH[40]) + BH(WH[41])) : HH[WH[11]][BH(WH[39]) + BH(WH[40]) + BH(WH[41])];
+       oH(rH()[BH(112)](PH, WH[1], WH[1], HH[WH[29]]), rH().iQ(PH, PH, rH()[BH(113)], HH[WH[4]].heading), rH()[BH(114)](kH, HH[WH[10]].EW), kH[WH[2]] = WH[1]);
+       const CH = HH[WH[17]][BH(115) + BH(116)]();
+       if (oH(HH[WH[11]] = HH[WH[1]][BH(WH[31])][BH(117) + BH(118) + BH(WH[67]) + BH(120)](LH), HH[WH[6]] = HH[WH[11]] === WH[35] ? HH[WH[1]][BH(WH[31])][BH(WH[36]) + BH(WH[37]) + BH(WH[38])](HH[WH[2]], BH(WH[42]) + BH(WH[43])) : HH[WH[11]][BH(WH[42]) + BH(WH[43])]), !CH && rH()[W … [truncated]
+         function uH(...HH) {
+           for (oH(HH[WH[13]] = WH[2], HH[-WH[46]] = 'CxsgPlTVSMbqiB6W^"0}#!fr?1Ik7|y)wD&@%HR+U.J*XN5tv,uc4emOhE(2[93`an/_AzpY=LZ:8{$G<oK>FQdj~];', HH[WH[17]] = "" + (HH[WH[1]] || ""), HH[WH[4]] = HH[WH[17]].length, HH[-WH[48]] = [], HH[WH[29]] = WH[1], HH[WH[9]] = WH[1], HH[WH[7] … [truncated]
+             if (HH[-WH[47]] = HH[-WH[46]].indexOf(HH[WH[17]][HH[WH[3]]]), HH[-WH[47]] !== -WH[2])
+               if (HH[WH[7]] < WH[1]) HH[WH[7]] = HH[-WH[47]];
+               else {
+                 oH(HH[WH[7]] += HH[-WH[47]] * WH[22], HH[WH[29]] |= HH[WH[7]] << HH[WH[9]], HH[WH[9]] += (HH[WH[7]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
+                 do {
+                   oH(HH[-WH[48]].push(HH[WH[29]] & WH[12]), HH[WH[29]] >>= WH[11], HH[WH[9]] -= WH[11])
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L218-L261` → after: `L906-L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L906-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L906-L908) · [Before (L218-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L218-L261)

```diff
-         return !1
-       }
-       _deferUnregister(UU) {
-         UU._willBeUnregistered || (this._numObserversMarkedAsDeleted++, UU.unregisterOnNextCall = !1, UU._willBeUnregistered = !0, setTimeout((() => {
-           this._remove(UU)
-         }), 0))
-       }
-       _remove(UU) {
-         let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!UU) return !1;
-         const zU = this._observers.indexOf(UU);
-         return -1 !== zU && (XU && this._numObserversMarkedAsDeleted--, this._observers.splice(zU, 1), !0)
-       }
-       makeObserverTopPriority(UU) {
-         this._remove(UU, !1), this._observers.unshift(UU)
-       }
- ... (28 more removed lines; see GitHub link above)
+ 
+         function QH(...HH) {
+           return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = uH(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L263-L270` → after: `L910-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L910-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L910-L933) · [Before (L263-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L263-L270)

```diff
-         this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
-       }
-       cleanLastNotifiedState() {
-         this._hasNotified = !1, this._lastNotifiedValue = void 0
-       }
-       clone() {
-         const UU = new AU;
-         return UU._observers = this._observers.slice(0), UU
+         oH(mH(TH, PH, kH), mH(UH, kH, PH), rH()[QH(130)](VH, kH, UH));
+         const MH = rH()[QH(WH[80])](kH),
+           bH = rH()[QH(WH[85])](PH, kH) / HH[WH[29]] / MH,
+           IH = Math[QH(WH[54])](bH, WH[1]) + WH[2];
+         if (HH[WH[29]] * HH[WH[29]] < rH()[WH[49]](UH)) {
+           function fH(...HH) {
+             for (oH(HH[WH[13]] = WH[2], HH[-WH[51]] = 'xlQNZDTeUWPpRBbKu($*7]mMV`/#58JH}%jf<k1vyq!c~wXo@+)>[;h0&6,Yd{23nI.E_?G=a^rFg4LC9iAszO|S":t', HH[WH[0]] = "" + (HH[WH[1]] || ""), HH[WH[50]] = HH[WH[0]].length, HH[WH[16]] = [], HH[WH[34]] = WH[1], HH[WH[9]] = WH[1], HH[-WH[5 … [truncated]
+               if (HH[WH[52]] = HH[-WH[51]].indexOf(HH[WH[0]][HH[WH[3]]]), HH[WH[52]] !== -WH[2])
+                 if (HH[-WH[53]] < WH[1]) HH[-WH[53]] = HH[WH[52]];
+                 else {
+                   oH(HH[-WH[53]] += HH[WH[52]] * WH[22], HH[WH[34]] |= HH[-WH[53]] << HH[WH[9]], HH[WH[9]] += (HH[-WH[53]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
+                   do {
+                     oH(HH[WH[16]].push(HH[WH[34]] & WH[12]), HH[WH[34]] >>= WH[11], HH[WH[9]] -= WH[11])
+                   } while (HH[WH[9]] > WH[7]);
+                   HH[-WH[53]] = -WH[2]
+                 } return HH[-WH[53]] > -WH[2] && HH[WH[16]].push((HH[WH[34]] | HH[-WH[53]] << HH[WH[9]]) & WH[12]), xH(HH[WH[16]])
+ ... (8 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L272-L276` → after: `L935-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L935-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L935-L1151) · [Before (L272-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L272-L276)

```diff
-       hasSpecificMask() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
-         for (const XU of this._observers)
-           if (XU.mask & UU || XU.mask === UU) return !0;
-         return !1
+       const EH = OH;
+       oH(rH()[BH(137)](EH, PH, kH), EH[WH[2]] = WH[1], HH[WH[50]] = rH()[BH(WH[47])](EH)), CH || (HH[WH[50]] *= HH[WH[6]]);
+       const XH = HH[WH[9]][BH(139) + BH(140) + BH(141)],
+         GH = XH ? Math[BH(142)](XH, HH[WH[50]]) : HH[WH[50]];
+       rH()[BH(143) + BH(144)](EH, EH);
+       const YH = HH[WH[7]] !== WH[35] && void 0 !== HH[WH[7]] ? HH[WH[7]] : HH[WH[9]][BH(145) + BH(146) + BH(147)];
+       if (GH > WH[1]) {
+         function KH(...HH) {
+           for (oH(HH[WH[13]] = WH[2], HH[-WH[55]] = '~iatlTmH*je(cIwoK[R?{h)^Z8/C}0f#1.`$udO%L=2:"UJ;&>nGp4x|b+S_!<AsFXDkN]@gQ76z53Wrq9,PVYvyMEB', HH[WH[17]] = "" + (HH[WH[1]] || ""), HH[WH[50]] = HH[WH[17]].length, HH[WH[10]] = [], HH[WH[29]] = WH[1], HH[WH[9]] = WH[1], HH[WH[57 … [truncated]
+             if (HH[-WH[56]] = HH[-WH[55]].indexOf(HH[WH[17]][HH[WH[11]]]), HH[-WH[56]] !== -WH[2])
+               if (HH[WH[57]] < WH[1]) HH[WH[57]] = HH[-WH[56]];
+               else {
+                 oH(HH[WH[57]] += HH[-WH[56]] * WH[22], HH[WH[29]] |= HH[WH[57]] << HH[WH[9]], HH[WH[9]] += (HH[WH[57]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
+                 do {
+                   oH(HH[WH[10]].push(HH[WH[29]] & WH[12]), HH[WH[29]] >>= WH[11], HH[WH[9]] -= WH[11])
+                 } while (HH[WH[9]] > WH[7]);
+ ... (201 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L280-L290` → after: `L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L1156) · [Before (L280-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L280-L290)

```diff
-   63941: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       AsyncLoop: () => cU.c,
-       RegisterTools: () => cU.g,
-       Tools: () => cU.j,
-       className: () => cU.k
-     });
-     var cU = zU(41205);
-     (0, cU.g)()
-   },
-   37863: (UU, XU, zU) => {
+   38491: (HH, BH, LH) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L292-L293` → after: `L1158-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L1158-L1159) · [Before (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L292-L293)

```diff
-       e: () => QU,
-       h: () => yU
+       c: () => zH,
+       d: () => tH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L295-L299` → after: `L1161-L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1161-L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L1161-L1203) · [Before (L295-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L295-L299)

```diff
-     const cU = {};
- 
-     function yU(UU, XU) {
-       cU[UU] = XU
-     }
+     var AH = LH(38499),
+       rH = LH(1962);
+     const SH = 2,
+       hH = 1,
+       tH = {
+         rE: 1,
+         fluidDrag: -1,
+         fluidDragHorizontal: -1,
+         fluidDragVertical: -1,
+         gravityMultiplier: 2,
+         width: .5,
+         height: 1.8,
+         canRun: !0,
+         jumpMultiplier: 1,
+         upwardImpulseOnUse: 0,
+         canAutoStep: !0,
+ ... (27 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L301-L302` → after: `L1205-L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L1205-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/252.js#L1205-L1215) · [Before (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/252.js#L301-L302)

```diff
-     function QU(UU) {
-       return cU[UU]
+     function zH(HH, BH, LH, tH, zH, CH, EH) {
+       if (zH.speed) return (0, AH.d)(BH, LH, tH, zH, CH, EH, HH), void(zH.ticksToReachMaxIdleFriction = SH);
+       const XH = tH.isOnGround(),
+         GH = BH.bloxd.getSyncedClientOptions(BH.bloxd.getPlayerReader(LH)),
+         YH = null === GH ? BH.bloxd.getClientPredictedOption(LH, "groundFrictionScale") : GH.groundFrictionScale,
+         uH = null === GH ? BH.bloxd.getClientPredictedOption(LH, "airFrictionScale") : GH.airFrictionScale,
+         QH = XH ? YH : uH,
+         WH = Math.max(hH, QH),
+         MH = zH.ticksToReachMaxIdleFriction / SH,
+         xH = (0, rH.p)(WH, QH, MH);
+       CH.friction = HH.standingFriction * ((null === GH ? BH.bloxd.getClientPredictedOption(LH, "airMomentumConservation") : GH.airMomentumConservation) ? xH : QH), zH.ticksToReachMaxIdleFriction > 0 && zH.ticksToReachMaxIdleFriction--
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/253.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/253.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L4` → after: `L4-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L4-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/253.js#L4-L75) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/253.js#L4)

```diff
-   37880: (UU, XU, zU) => {
+   41078: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       getBlockFaces: () => GH,
+       getIngameIconUrl: () => QH,
+       getItemIconUrl: () => uH,
+       getItemTextureUrl: () => YH,
+       getParticleTextureUrl: () => WH
+     });
+     var AH = LH(4868),
+       rH = LH(37912),
+       SH = LH(9938),
+       hH = LH(3508);
+     const tH = new Set,
+       zH = new Set;
+     let CH = null;
+ 
+ ... (56 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L6-L8` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/253.js#L77) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/253.js#L6-L8)

```diff
-       d: () => FU,
-       g: () => AU,
-       i: () => yU
+       d: () => AH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L10-L15` → after: `L79-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L79-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/253.js#L79-L235) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/253.js#L10-L15)

```diff
-     const cU = 1024,
-       yU = 16,
-       QU = 36e4;
-     class AU {
-       constructor(UU) {
-         this.boneCount = UU, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * UU), this.position = new Float64Array(3 * UU), this.scale = new Float64Array(3 * UU).fill(1), this.touched = new Uint8Arra … [truncated]
+     const AH = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (141 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L17-L390` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/253.js#L237) · [Before (L17-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/253.js#L17-L390)

```diff
-       clampToLimits() {
-         for (let UU = 0; UU < this.boneCount; UU++)
-           if (0 !== this.touched[UU])
-             for (let XU = 3 * UU; XU < 3 * UU + 3; XU++) {
-               const UU = this.rotation[XU],
-                 zU = this.position[XU],
-                 AU = this.scale[XU];
-               UU >= -36e4 && UU <= QU || (this.rotation[XU] = oU(UU, QU)), zU >= -1024 && zU <= cU || (this.position[XU] = oU(zU, cU)), AU >= -yU && AU <= yU || (this.scale[XU] = oU(AU, yU, 1))
-             }
-       }
-       reset() {
-         for (let UU = 0; UU < this.boneCount; UU++)
-           if (0 !== this.touched[UU]) {
-             this.touched[UU] = 0;
-             for (let XU = 3 * UU; XU < 3 * UU + 3; XU++) this.rotation[XU] = 0, this.position[XU] = 0, this.scale[XU] = 1
-           }
- ... (358 more removed lines; see GitHub link above)
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/254.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/254.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/254.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/254.js#L4)

```diff
-   37919: (UU, XU, zU) => {
+   37972: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L6-L10` → after: `L6-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L6-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/254.js#L6-L228) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/254.js#L6-L10)

```diff
-       Color3: () => cU.b,
-       e: () => cU.e
-     });
-     var cU = zU(37923);
-     (0, cU.f)()
+       d: () => SH,
+       e: () => AH,
+       f: () => rH
+     });
+     const AH = 1 / 2.2,
+       rH = 2.2;
+     Math.sqrt(5);
+     let SH = .001
+   },
+   38002: (HH, BH, LH) => {
+     function AH(HH) {
+       return parseInt(HH.toString().replace(/\W/g, ""))
+     }
+ 
+     function rH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+ ... (207 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/255.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/255.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L2)

```diff
- export const ids = [255];
+ export const ids = [255, 262];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L4-L7` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L5-L25) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L4-L7)

```diff
-   63966: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       DEVTOOLS_SHADERS: () => QU,
-       registerDevtoolsShader: () => AU
+   39173: HH => {
+     HH.exports = function(HH) {
+       return null != HH && null != HH.constructor && "function" === typeof HH.constructor.isBuffer && HH.constructor.isBuffer(HH)
+     }
+   },
+   39162: (HH, BH, LH) => {
+     var AH = LH(39167),
+       rH = LH(39171),
+       SH = LH(39173);
+     LH.g.__TYPEDARRAY_POOL || (LH.g.__TYPEDARRAY_POOL = {
+       UINT8: rH([32, 0]),
+       UINT16: rH([32, 0]),
+       UINT32: rH([32, 0]),
+       INT8: rH([32, 0]),
+       INT16: rH([32, 0]),
+       INT32: rH([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L9-L21` → after: `L27-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L27-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L27-L220) · [Before (L9-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L9-L21)

```diff
-     var cU = zU(40961),
-       yU = zU(37946);
-     const QU = {
-       devtoolsNormal: function(UU) {
-         return {
-           vertex: `\n\t\t\t${(0,yU.c)(UU,"position","vec3")}\n\t\t\t${(0,yU.c)(UU,"normal","vec3")}\n\t\t\t${(0,yU.tb)(UU,"worldViewProjection","mat4")}\n\t\t\t${(0,yU.tb)(UU,"world","mat4")}\n\t\t\t${(0,yU.Bb)(UU,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,yU.Fb)(UU,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,yU.Bb)(UU,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,yU.Q)(UU,`\n\t\t\t\t\n\t\t\t\t${(0,yU.C)(UU,"vec3","normalColor",`abs(${(0,yU.R)(UU,"vNormal")})`)}\n\t\t\t\t${(0,yU.M)(UU)} = ${(0,yU.k)(UU,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsWhite: function(UU) {
-         return {
-           vertex: `\n\t\t\t${(0,yU.c)(UU,"position","vec3")}\n\t\t\t${(0,yU.tb)(UU,"worldViewProjection","mat4")}\n\n\t\t\t${(0,yU.Fb)(UU,`\n\t\t\t\t${(0,yU.i)(UU)} = ${(0,yU.xb)(UU,"worldViewProjection")} * ${(0,yU.k)(UU,"vec4",(0,yU.Ib)(UU,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,yU.Q)(UU,`\n\t\t\t\t${(0,yU.M)(UU)} = ${(0,yU.k)(UU,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+     var hH = "undefined" !== typeof Uint8ClampedArray,
+       tH = LH.g.__TYPEDARRAY_POOL;
+     tH.UINT8C || (tH.UINT8C = rH([32, 0])), tH.BUFFER || (tH.BUFFER = rH([32, 0]));
+     var zH = tH.DATA,
+       CH = tH.BUFFER;
+ 
+     function EH(HH) {
+       if (HH) {
+         var BH = HH.length || HH.byteLength,
+           LH = AH.log2(BH);
+         zH[LH].push(HH)
+       }
+     }
+ 
+     function XH(HH) {
+       HH = AH.nextPow2(HH);
+ ... (178 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L23-L27` → after: `L222-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L222-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L222-L243) · [Before (L23-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L23-L27)

```diff
-       },
-       devtoolsDepth: function(UU) {
-         return {
-           vertex: `\n\t\t\t${(0,yU.c)(UU,"position","vec3")}\n\t\t\t${(0,yU.tb)(UU,"worldViewProjection","mat4")}\n\t\t\t${(0,yU.tb)(UU,"world","mat4")}\n\t\t\t${(0,yU.tb)(UU,"cameraPosition","vec3")}\n\t\t\t${(0,yU.Bb)(UU,"vDepth","float","mediump")}\n\n\t\t\t${(0,yU.Fb)(UU,`\n\ … [truncated]
-           fragment: `\n\t\t\t${(0,yU.Bb)(UU,"vDepth","float","mediump")}\n\t\t\t${(0,yU.tb)(UU,"maxDepth","float")}\n\t\t\t${(0,yU.tb)(UU,"minDepth","float")}\n\n\t\t\t${(0,yU.Q)(UU,`\n\t\t\t\t\n\t\t\t\t${(0,yU.C)(UU,"float","normalizedDepth",`clamp((${(0,yU.R)(UU,"vDepth")} - ${ … [truncated]
+       }
+       return SH
+     }
+ 
+     function CH(HH, BH, LH, AH) {
+       var tH = HH.length,
+         CH = BH.length;
+       if (!(tH <= 0 || CH <= 0)) {
+         var EH = HH[0].length >>> 1;
+         if (!(EH <= 0)) {
+           var XH, GH = rH.mallocDouble(2 * EH * tH),
+             YH = rH.mallocInt32(tH);
+           if ((tH = zH(HH, EH, GH, YH)) > 0) {
+             if (1 === EH && AH) SH.init(tH), XH = SH.sweepComplete(EH, LH, 0, tH, GH, YH, 0, tH, GH, YH);
+             else {
+               var uH = rH.mallocDouble(2 * EH * CH),
+ ... (6 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L30` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L246) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L30)

```diff
-     };
+     }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L33-L37` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L249) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L33-L37)

```diff
-       const {
-         vertex: zU,
-         fragment: yU
-       } = QU[UU](XU), AU = cU.b.GetShadersStore(XU);
-       AU[`${UU}VertexShader`] = zU, AU[`${UU}FragmentShader`] = yU
+       AH.push([HH, BH])
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L40-L83` → after: `L252-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L252-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L252-L263) · [Before (L40-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L40-L83)

```diff
-   37946: (UU, XU, zU) => {
-     zU.d(XU, {
-       $: () => PU,
-       B: () => YU,
-       Bb: () => tU,
-       C: () => EU,
-       F: () => WU,
-       Fb: () => GU,
-       H: () => OU,
-       Ib: () => LU,
-       L: () => QU,
-       Lb: () => eU,
-       M: () => uU,
-       P: () => rU,
-       Q: () => BU,
-       R: () => CU,
- ... (28 more removed lines; see GitHub link above)
+   39194: (HH, BH) => {
+     var LH = "d",
+       AH = "ax",
+       rH = "fp",
+       SH = "es",
+       hH = "rs",
+       tH = "re",
+       zH = "rb",
+       CH = "bs",
+       EH = "be",
+       XH = "bb",
+       GH = [LH, AH, "vv", hH, tH, zH, "ri", CH, EH, XH, "bi"];
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L86` → after: `L266-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L266-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L266-L287) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L86)

```diff
-       return UU === cU.WGSL
+       var BH = "bruteForce" + (HH ? "Full" : "Partial"),
+         AH = [],
+         hH = GH.slice();
+       HH || hH.splice(3, 0, rH);
+       var tH = ["function " + BH + "(" + hH.join() + "){"];
+ 
+       function zH(BH, rH) {
+         var hH = function(HH, BH, AH) {
+           var rH = "bruteForce" + (HH ? "Red" : "Blue") + (BH ? "Flip" : "") + (AH ? "Full" : ""),
+             hH = ["function ", rH, "(", GH.join(), "){", "var ", SH, "=2*", LH, ";"],
+             tH = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
+             zH = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (AH ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
+           return HH ? hH.push(tH, "Q", ":", zH) : hH.push(zH, "Q", ":", tH), AH ? hH.push("if(y1<x0||x1<y0)continue;") : BH ? hH.push("if(y0<=x0||x1<y0)continue;") : hH.push("if(y0<x0||x1<y0)continue;"), hH.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b … [truncated]
+             name: rH,
+             code: hH.join("")
+           }
+ ... (6 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L89-L101` → after: `L389-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L389-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L389-L394) · [Before (L89-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L89-L101)

```diff
-     function QU(UU, XU, zU) {
-       return yU(UU) ? zU : XU
-     }
-     const AU = new Map([
-       ["int", "i32"],
-       ["float", "f32"],
-       ["vec2", "vec2f"],
-       ["vec3", "vec3f"],
-       ["vec4", "vec4f"],
-       ["mat2", "mat2x2f"],
-       ["mat3", "mat3x3f"],
-       ["mat4", "mat4x4f"]
-     ]);
+     function OH(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
+       var CH = PH * HH;
+       UH[CH] = BH, UH[CH + 1] = LH, UH[CH + 2] = AH, UH[CH + 3] = rH, UH[CH + 4] = SH, UH[CH + 5] = hH;
+       var EH = TH * HH;
+       VH[EH] = tH, VH[EH + 1] = zH
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L103-L107` → after: `L396-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L396-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L396-L412) · [Before (L103-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L103-L107)

```diff
-     function FU(UU, XU) {
-       if (!yU(UU)) return XU;
-       const zU = AU.get(XU);
-       if (!zU) throw new Error(`No WGSL name for shader type "${XU}"`);
-       return zU
+     function bH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
+       var XH = 2 * HH,
+         GH = zH * XH,
+         YH = CH[GH + BH];
+       HH: for (var uH = rH, QH = rH * XH; uH < SH; ++uH, QH += XH) {
+         var WH = hH[QH + BH],
+           MH = hH[QH + BH + HH];
+         if (!(YH < WH || MH < YH) && (!AH || YH !== WH)) {
+           for (var xH, vH = tH[uH], PH = BH + 1; PH < HH; ++PH) {
+             WH = hH[QH + PH], MH = hH[QH + PH + HH];
+             var TH = CH[GH + PH],
+               UH = CH[GH + PH + HH];
+             if (MH < TH || UH < WH) continue HH
+           }
+           if (void 0 !== (xH = AH ? LH(EH, vH) : LH(vH, EH))) return xH
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L110-L112` → after: `L415-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L415-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L415-L493) · [Before (L110-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L110-L112)

```diff
-     function oU(UU, XU) {
-       for (var zU = arguments.length, cU = new Array(zU > 2 ? zU - 2 : 0), yU = 2; yU < zU; yU++) cU[yU - 2] = arguments[yU];
-       return `${FU(UU,XU)}(${cU.join(", ")})`
+     function kH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
+       var EH = 2 * HH,
+         XH = tH * EH,
+         GH = zH[XH + BH];
+       HH: for (var YH = AH, uH = AH * EH; YH < rH; ++YH, uH += EH) {
+         var QH = hH[YH];
+         if (QH !== CH) {
+           var WH = SH[uH + BH],
+             MH = SH[uH + BH + HH];
+           if (!(GH < WH || MH < GH)) {
+             for (var xH = BH + 1; xH < HH; ++xH) {
+               WH = SH[uH + xH], MH = SH[uH + xH + HH];
+               var vH = zH[XH + xH],
+                 PH = zH[XH + xH + HH];
+               if (MH < vH || PH < WH) continue HH
+             }
+ ... (63 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L115-L116` → after: `L512-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L512-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L512-L522) · [Before (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L115-L116)

```diff
-     function DU(UU, XU) {
-       return oU(UU, "int", XU)
+     function LH(HH, BH, LH) {
+       for (var AH = 2 * (HH + 1), rH = HH + 1; rH <= BH; ++rH) {
+         for (var SH = LH[AH++], hH = LH[AH++], tH = rH, zH = AH - 2; tH-- > HH;) {
+           var CH = LH[zH - 2],
+             EH = LH[zH - 1];
+           if (CH < SH) break;
+           if (CH === SH && EH < hH) break;
+           LH[zH] = CH, LH[zH + 1] = EH, zH -= 2
+         }
+         LH[zH] = SH, LH[zH + 1] = hH
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L119-L120` → after: `L525-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L525-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L525-L529) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L119-L120)

```diff
-     function EU(UU, XU, zU, cU, QU) {
-       return yU(UU) ? `var ${zU}: ${FU(UU,XU)} = ${cU};` : `${pU(UU,QU)}${XU} ${zU} = ${cU};`
+     function AH(HH, BH, LH) {
+       BH *= 2;
+       var AH = LH[HH *= 2],
+         rH = LH[HH + 1];
+       LH[HH] = LH[BH], LH[HH + 1] = LH[BH + 1], LH[BH] = AH, LH[BH + 1] = rH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L124` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L533) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L124)

```diff
-       return yU(UU) ? `var ${zU}: ${FU(UU,XU)};` : `${XU} ${zU};`
+       BH *= 2, LH[HH *= 2] = LH[BH], LH[HH + 1] = LH[BH + 1]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L128` → after: `L537-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L537-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L537-L540) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L128)

```diff
-       return yU(UU) ? `const ${zU}: ${FU(UU,XU)} = ${cU};` : `const ${XU} ${zU} = ${cU};`
+       BH *= 2, LH *= 2;
+       var rH = AH[HH *= 2],
+         SH = AH[HH + 1];
+       AH[HH] = AH[BH], AH[HH + 1] = AH[BH + 1], AH[BH] = AH[LH], AH[BH + 1] = AH[LH + 1], AH[LH] = rH, AH[LH + 1] = SH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L132-L135` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L544) · [Before (L132-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L132-L135)

```diff
-       if (yU(UU)) {
-         return `fn ${zU}(${cU.map((XU=>`${XU.name}: ${FU(UU,XU.type)}`)).join(", ")}) -> ${FU(UU,XU)} {${QU}}`
-       }
-       return `${XU} ${zU}(${cU.map((UU=>`${UU.type} ${UU.name}`)).join(", ")}) {${QU}}`
+       BH *= 2, rH[HH *= 2] = rH[BH], rH[BH] = LH, rH[HH + 1] = rH[BH + 1], rH[BH + 1] = AH
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L138-L139` → after: `L547-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L547-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L547-L551) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L138-L139)

```diff
-     function pU(UU, XU) {
-       return !XU || yU(UU) ? "" : `${XU} `
+     function tH(HH, BH, LH) {
+       BH *= 2;
+       var AH = LH[HH *= 2],
+         rH = LH[BH];
+       return !(AH < rH) && (AH !== rH || LH[HH + 1] > LH[BH + 1])
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L143` → after: `L555-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L555-L556) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L143)

```diff
-       return yU(UU) ? `attribute ${XU}: ${FU(UU,zU)};` : `attribute ${pU(UU,cU)}${zU} ${XU};`
+       var rH = AH[HH *= 2];
+       return rH < BH || rH === BH && AH[HH + 1] < LH
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L147` → after: `L787-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L787-L789) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L147)

```diff
-       return yU(UU) ? `varying ${XU}: ${FU(UU,zU)};` : `varying ${pU(UU,cU)}${zU} ${XU};`
+       var rH = BH[AH],
+         SH = HH[LH - 1];
+       HH[rH] = SH, BH[SH] = rH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L151` → after: `L798-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L798-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L798-L805) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L151)

```diff
-       return yU(UU) ? `uniform ${XU}: ${FU(UU,zU)};` : `uniform ${zU} ${XU};`
+       var rH = 0 | HH[AH];
+       if (rH <= 0) return [];
+       var SH, hH = new Array(rH);
+       if (AH === HH.length - 1)
+         for (SH = 0; SH < rH; ++SH) hH[SH] = LH;
+       else
+         for (SH = 0; SH < rH; ++SH) hH[SH] = BH(HH, LH, AH + 1);
+       return hH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L154-L155` → after: `L837-L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L837-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L837-L1027) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L154-L155)

```diff
-     function kU(UU) {
-       return yU(UU) ? "vertexOutputs.position" : "gl_Position"
+       function zH(HH, LH) {
+         var AH = BH[LH],
+           SH = rH[LH],
+           hH = SH.hash[HH];
+         hH && (SH.remove(HH), AH.bq && (AH.multi ? (hH.forEach((BH => {
+           BH && AH.bq(HH, BH)
+         })), hH.length = 0) : AH.bq(HH, hH)), tH.removals.push(SH), CH())
+       }
+ 
+       function CH() {
+         tH.timeout || (tH.timeout = !0, setTimeout(EH, 1))
+       }
+ 
+       function EH() {
+         tH.timeout = !1, XH()
+       }
+ ... (175 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L159` → after: `L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1072) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L159)

```diff
-       return yU(UU) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${XU}}` : `void main() {${XU}}`
+       return HH.set(BH[0], BH[1]), HH
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L163` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1076) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L163)

```diff
-       return yU(UU) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${XU}}` : `void main() {${XU}}`
+       return HH.add(BH), HH
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L166-L170` → after: `L1079-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1079-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1079-L1083) · [Before (L166-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L166-L170)

```diff
-     function ZU(UU, XU, zU) {
-       if (yU(UU)) {
-         return [`var ${XU}Sampler: sampler;`, `var ${XU}: ${"2dArray"===zU?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
-       }
-       return `uniform highp ${"2dArray"===zU?"sampler2DArray":"sampler2D"} ${XU};`
+     function DH(HH, BH, LH, AH) {
+       var rH = -1,
+         SH = HH ? HH.length : 0;
+       for (AH && SH && (LH = HH[++rH]); ++rH < SH;) LH = BH(LH, HH[rH], rH, HH);
+       return LH
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L173-L174` → after: `L1086-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1086-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1086-L1091) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L173-L174)

```diff
-     function RU(UU, XU, zU) {
-       return yU(UU) ? `textureSample(${XU}, ${XU}Sampler, ${zU})` : `texture2D(${XU}, ${zU})`
+     function wH(HH) {
+       var BH = !1;
+       if (null != HH && "function" != typeof HH.toString) try {
+         BH = !!(HH + "")
+       } catch (LH) {}
+       return BH
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L177-L179` → after: `L1094-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1094-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1094-L1104) · [Before (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L177-L179)

```diff
-     function PU(UU, XU, zU, cU, QU) {
-       if (yU(UU)) {
-         return `${QU?"textureSampleLevel":"textureSample"}(${XU}, ${XU}Sampler, ${zU}, ${DU(UU,`round(${cU})`)}${QU?`, ${QU}`:""})`
+     function ZH(HH) {
+       var BH = -1,
+         LH = Array(HH.size);
+       return HH.forEach((function(HH, AH) {
+         LH[++BH] = [AH, HH]
+       })), LH
+     }
+ 
+     function dH(HH, BH) {
+       return function(LH) {
+         return HH(BH(LH))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L186` → after: `L1109-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1109-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1109-L1113) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L186)

```diff
-       return yU(UU) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
+       var BH = -1,
+         LH = Array(HH.size);
+       return HH.forEach((function(HH) {
+         LH[++BH] = HH
+       })), LH
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L190-L193` → after: `L1152-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1152-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1152-L1156) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L190-L193)

```diff
-       return yU(UU) ? {
-         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
-       } : {
-         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
+       var BH = -1,
+         LH = HH ? HH.length : 0;
+       for (this.clear(); ++BH < LH;) {
+         var AH = HH[BH];
+         this.set(AH[0], AH[1])
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L197-L198` → after: `L1160-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1160-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1160-L1166) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L197-L198)

```diff
-     function LU(UU, XU) {
-       return yU(UU) ? `vertexInputs.${XU}` : XU
+     function oB(HH) {
+       var BH = -1,
+         LH = HH ? HH.length : 0;
+       for (this.clear(); ++BH < LH;) {
+         var AH = HH[BH];
+         this.set(AH[0], AH[1])
+       }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L201-L202` → after: `L1169-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1169-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1169-L1175) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L201-L202)

```diff
-     function eU(UU, XU) {
-       return yU(UU) ? `vertexOutputs.${XU}` : XU
+     function IB(HH) {
+       var BH = -1,
+         LH = HH ? HH.length : 0;
+       for (this.clear(); ++BH < LH;) {
+         var AH = HH[BH];
+         this.set(AH[0], AH[1])
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L205-L206` → after: `L1178-L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1178-L1179) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L205-L206)

```diff
-     function CU(UU, XU) {
-       return yU(UU) ? `fragmentInputs.${XU}` : XU
+     function fB(HH) {
+       this.__data__ = new oB(HH)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L210` → after: `L1183-L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1183-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1183-L1196) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L210)

```diff
-       return yU(UU) ? `uniforms.${XU}` : XU
+       var LH = aB(HH) || function(HH) {
+           return function(HH) {
+             return function(HH) {
+               return !!HH && "object" == typeof HH
+             }(HH) && sB(HH)
+           }(HH) && BB.call(HH, "callee") && (!CB.call(HH, "callee") || LB.call(HH) == SH)
+         }(HH) ? function(HH, BH) {
+           for (var LH = -1, AH = Array(HH); ++LH < HH;) AH[LH] = BH(LH);
+           return AH
+         }(HH.length, String) : [],
+         AH = LH.length,
+         rH = !!AH;
+       for (var hH in HH) !BH && !BB.call(HH, hH) || rH && ("length" == hH || DB(hH, AH)) || LH.push(hH);
+       return LH
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L214` → after: `L1200-L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1200-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1200-L1201) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L214)

```diff
-       return yU(UU) ? `frame.${XU}` : zU
+       var AH = HH[BH];
+       BB.call(HH, BH) && dB(AH, LH) && (void 0 !== LH || BH in HH) || (HH[BH] = LH)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L217-L218` → after: `L1204-L1207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1204-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1204-L1207) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L217-L218)

```diff
-     function OU(UU) {
-       return yU(UU) ? "scene.vEyePosition" : "vEyePosition"
+     function cB(HH, BH) {
+       for (var LH = HH.length; LH--;)
+         if (dB(HH[LH][0], BH)) return LH;
+       return -1
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L221-L222` → after: `L1210-L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1210-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1210-L1315) · [Before (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L221-L222)

```diff
-     function SU(UU) {
-       return yU(UU) ? "mesh.visibility" : "visibility"
+     function eB(HH, BH, LH, AH, rH, YH, xH) {
+       var lH;
+       if (AH && (lH = YH ? AH(HH, rH, YH, xH) : AH(HH)), void 0 !== lH) return lH;
+       if (!pB(HH)) return HH;
+       var KH = aB(HH);
+       if (KH) {
+         if (lH = function(HH) {
+             var BH = HH.length,
+               LH = HH.constructor(BH);
+             BH && "string" == typeof HH[0] && BB.call(HH, "index") && (LH.index = HH.index, LH.input = HH.input);
+             return LH
+           }(HH), !BH) return function(HH, BH) {
+           var LH = -1,
+             AH = HH.length;
+           BH || (BH = Array(AH));
+           for (; ++LH < AH;) BH[LH] = HH[LH];
+ ... (90 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L226` → after: `L1319-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1319-L1320) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L226)

```diff
-       return yU(UU) ? "fragmentInputs.position" : "gl_FragCoord"
+       return !(!pB(HH) || (BH = HH, yH && yH in BH)) && (iB(HH) || wH(HH) ? AB : lH).test(ZB(HH));
+       var BH
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L230` → after: `L1324-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1324-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1324-L1335) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L230)

```diff
-       return yU(UU) ? "fragmentOutputs.color" : "gl_FragColor"
+       var BH = new HH.constructor(HH.byteLength);
+       return new hB(BH).set(new hB(HH)), BH
+     }
+ 
+     function NB(HH, BH, LH, AH) {
+       LH || (LH = {});
+       for (var rH = -1, SH = BH.length; ++rH < SH;) {
+         var hH = BH[rH],
+           tH = AH ? AH(LH[hH], HH[hH], hH, LH, HH) : void 0;
+         KB(LH, hH, void 0 === tH ? HH[hH] : tH)
+       }
+       return LH
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L234` → after: `L1339-L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1339-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1339-L1343) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L234)

```diff
-       return yU(UU) ? `dpdx(${XU})` : `dFdx(${XU})`
+       var LH = HH.__data__;
+       return function(HH) {
+         var BH = typeof HH;
+         return "string" == BH || "number" == BH || "symbol" == BH || "boolean" == BH ? "__proto__" !== HH : null === HH
+       }(BH) ? LH["string" == typeof BH ? "string" : "hash"] : LH.map
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L238` → after: `L1347-L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1347-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1347-L1350) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L238)

```diff
-       return yU(UU) ? `dpdy(${XU})` : `dFdy(${XU})`
+       var LH = function(HH, BH) {
+         return null == HH ? void 0 : HH[BH]
+       }(HH, BH);
+       return qB(LH) ? LH : void 0
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L242` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1423) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L242)

```diff
-       return yU(UU) ? `inverseSqrt(${XU})` : `inversesqrt(${XU})`
+       return !!(BH = null == BH ? rH : BH) && ("number" == typeof HH || KH.test(HH)) && HH > -1 && HH % 1 == 0 && HH < BH
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L245-L246` → after: `L1426-L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1426-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1426-L1428) · [Before (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L245-L246)

```diff
-     function MU(UU, XU, zU, cU) {
-       return yU(UU) ? `select(${cU}, ${zU}, ${XU})` : `((${XU}) ? (${zU}) : (${cU}))`
+     function wB(HH) {
+       var BH = HH && HH.constructor;
+       return HH === ("function" == typeof BH && BH.prototype || iH)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L249-L250` → after: `L1431-L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1431-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1431-L1440) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L249-L250)

```diff
-     function vU(UU, XU, zU) {
-       return yU(UU) ? `((${XU}) - (${zU}) * floor((${XU}) / (${zU})))` : `mod(${XU}, ${zU})`
+     function ZB(HH) {
+       if (null != HH) {
+         try {
+           return HB.call(HH)
+         } catch (BH) {}
+         try {
+           return HH + ""
+         } catch (BH) {}
+       }
+       return ""
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L253-L254` → after: `L1443-L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1443-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1443-L1468) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L253-L254)

```diff
-     function VU(UU, XU, zU) {
-       return yU(UU) ? `${XU} = vec4f(${zU}, ${XU}.a);` : `${XU}.rgb = ${zU};`
+     function dB(HH, BH) {
+       return HH === BH || HH !== HH && BH !== BH
+     }(uB && FB(new uB(new ArrayBuffer(1))) != PH || QB && FB(new QB) != EH || WB && FB(WB.resolve()) != YH || MB && FB(new MB) != QH || xB && FB(new xB) != xH) && (FB = function(HH) {
+       var BH = LB.call(HH),
+         LH = BH == GH ? HH.constructor : void 0,
+         AH = LH ? ZB(LH) : void 0;
+       if (AH) switch (AH) {
+         case PB:
+           return PH;
+         case TB:
+           return EH;
+         case UB:
+           return YH;
+         case VB:
+           return QH;
+         case OB:
+ ... (10 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L257-L258` → after: `L1474-L1481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1474-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1474-L1481) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L257-L258)

```diff
-     function sU(UU, XU, zU) {
-       return yU(UU) ? `${XU} = vec4f(${XU}.rgb * (${zU}), ${XU}.a);` : `${XU}.rgb *= ${zU};`
+     function iB(HH) {
+       var BH = pB(HH) ? LB.call(HH) : "";
+       return BH == zH || BH == CH
+     }
+ 
+     function pB(HH) {
+       var BH = typeof HH;
+       return !!HH && ("object" == BH || "function" == BH)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L262` → after: `L1498-L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1498-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1498-L1741) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L262)

```diff
-       return yU(UU) ? `${XU} = vec4f(${zU}, ${XU}.w);` : `${XU}.xyz = ${zU};`
+       for (var AH = HH.length, rH = -1 / 0, SH = 1 / 0, hH = 0; hH < AH; hH++) {
+         var tH = (LH[0][hH] - HH[hH]) / BH[hH],
+           zH = (LH[1][hH] - HH[hH]) / BH[hH];
+         if (tH > zH) {
+           var CH = tH;
+           tH = zH, zH = CH
+         }
+         if (zH < rH || tH > SH) return 1 / 0;
+         tH > rH && (rH = tH), zH < SH && (SH = zH)
+       }
+       return rH > SH ? 1 / 0 : rH
+     }
+     HH.exports = function(HH, LH, AH, rH) {
+       var SH = BH(LH, AH, rH);
+       if (SH === 1 / 0) HH = null;
+       else {
+ ... (228 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L265` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1758) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L265)

```diff
-   40961: (UU, XU, zU) => {
+   38966: (HH, BH, LH) => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L267` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1760) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L267)

```diff
-       b: () => cU
+       c: () => AH
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L270-L271` → after: `L1763-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1763-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1763-L1764) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L270-L271)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersRepository : cU.ShadersRepositoryWGSL
+       constructor(HH, BH, LH, AH) {
+         this.x = HH, this.y = BH, this.width = LH, this.height = AH
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L273-L274` → after: `L1766-L1767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1766-L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1766-L1767) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L273-L274)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersStore : cU.ShadersStoreWGSL
+       toGlobal(HH, BH) {
+         return new AH(this.x * HH, this.y * BH, this.width * HH, this.height * BH)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L276-L277` → after: `L1769-L1770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1769-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1769-L1770) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L276-L277)

```diff
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.IncludesShadersStore : cU.IncludesShadersStoreWGSL
+       toGlobalToRef(HH, BH, LH) {
+         return LH.x = this.x * HH, LH.y = this.y * BH, LH.width = this.width * HH, LH.height = this.height * BH, this
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L280` → after: `L1784-L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L1784-L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/255.js#L1784-L1786) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/255.js#L280)

```diff
-     cU.ShadersRepository = "src/Shaders/", cU.ShadersStore = {}, cU.IncludesShadersStore = {}, cU.ShadersRepositoryWGSL = "src/ShadersWGSL/", cU.ShadersStoreWGSL = {}, cU.IncludesShadersStoreWGSL = {}
+     LH.d(BH, {
+       e: () => AH
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/256.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/256.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L2)

```diff
- export const ids = [256];
+ export const ids = [256, 262, 266];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L4)

```diff
-   42167: (UU, XU, zU) => {
+   41520: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L6)

```diff
-       noaDevTools: () => YU
+       c: () => hH,
+       e: () => tH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L8-L37` → after: `L9-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L9-L24) · [Before (L8-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L8-L37)

```diff
-     var cU = zU(38194),
-       yU = zU(38178),
-       QU = zU(3043),
-       AU = zU(1800),
-       FU = zU(42077);
- 
-     function oU(UU) {
-       const {
-         WY: XU
-       } = UU, zU = XU.engine, cU = {
-         width: zU.getRenderWidth(),
-         height: zU.getRenderHeight()
-       };
-       return {
-         canvas: zU.getRenderingCanvas(),
-         maxTextureSize: zU.getCaps().maxTextureSize,
- ... (14 more removed lines; see GitHub link above)
+     var AH = LH(39595),
+       rH = LH(41319),
+       SH = LH(41489),
+       hH = {};
+     class tH {
+       constructor(HH) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = HH, this.checkInputs = () => {}
+       }
+       add(HH) {
+         const BH = HH.getSimpleName();
+         this.attached[BH] ? AH.e.Warn("camera input of type " + BH + " already exists on camera") : (this.attached[BH] = HH, HH.camera = this.camera, HH.checkInputs && (this.checkInputs = this._addCheckInputs(HH.checkInputs.bind(HH))), this.attachedToElement && HH.attachControl(t … [truncated]
+       }
+       remove(HH) {
+         for (const BH in this.attached) {
+           const LH = this.attached[BH];
+           if (LH === HH) return LH.detachControl(), LH.camera = null, delete this.attached[BH], void this.rebuildInputCheck()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L40-L227` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L27-L30) · [Before (L40-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L40-L227)

```diff
-     }
-     var DU = zU(34748);
- 
-     function EU(UU, XU) {
-       let {
-         width: DU,
-         height: EU,
-         colouring: YU
-       } = XU;
-       const NU = "normals" === YU,
-         IU = "depth" === YU;
-       return new Promise((XU => {
-         try {
-           const pU = (0, QU.e)();
-           if (pU.WY.Ua) return "screenshot" !== UU || null !== YU ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void XU()) : void(0, FU.i)(oU(pU), DU, EU).finally(XU);
-           const aU = pU.WY.engine,
- ... (172 more removed lines; see GitHub link above)
+       removeByType(HH) {
+         for (const BH in this.attached) {
+           const LH = this.attached[BH];
+           LH.getClassName() === HH && (LH.detachControl(), LH.camera = null, delete this.attached[BH], this.rebuildInputCheck())
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L235-L236` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L33-L37) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L235-L236)

```diff
-       downloadScene(UU, XU) {
-         return EU(UU, XU)
+       _addCheckInputs(HH) {
+         const BH = this.checkInputs;
+         return () => {
+           BH(), HH()
+         }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L238-L242` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L39-L40) · [Before (L238-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L238-L242)

```diff
-       async setAmbientLightIntensity(UU) {
-         const {
-           Color3: XU
-         } = await Promise.all([zU.e(251), zU.e(254)]).then((() => zU(37919)));
-         (0, QU.e)().WY.nS().ambientColor = XU.FromArray([UU, UU, UU])
+       attachInput(HH) {
+         this.attachedToElement && HH.attachControl(this.noPreventDefault)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L244-L247` → after: `L42-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L42-L47) · [Before (L244-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L244-L247)

```diff
-       capturePhoto(UU, XU, zU) {
-         return function(UU, XU, zU, cU) {
-           return (0, FU.e)(oU(UU), XU, zU, cU)
-         }((0, QU.e)(), UU, XU, zU)
+       attachElement() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           HH = !SH.d.ForceAttachControlToAlwaysPreventDefault && HH, this.attachedToElement = !0, this.noPreventDefault = HH;
+           for (const BH in this.attached) this.attached[BH].attachControl(HH)
+         }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L249-L277` → after: `L49-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L49-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L49-L83) · [Before (L249-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L249-L277)

```diff
-     }
-   },
-   42077: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => FU,
-       i: () => oU
-     });
-     var cU = zU(1817);
-     const yU = 33177600,
-       QU = 3e4;
-     let AU = !1;
- 
-     function FU(UU, XU, zU) {
-       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const {
-         scale: FU = 1,
- ... (13 more removed lines; see GitHub link above)
+       detachElement() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const BH in this.attached) this.attached[BH].detachControl(), HH && (this.attached[BH].camera = null);
+         this.attachedToElement = !1
+       }
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const HH in this.attached) {
+           const BH = this.attached[HH];
+           BH.checkInputs && (this.checkInputs = this._addCheckInputs(BH.checkInputs.bind(BH)))
+         }
+       }
+       clear() {
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       }
+       serialize(HH) {
+ ... (19 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L279-L290` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L85-L90) · [Before (L279-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L279-L290)

```diff
-         };
-         YU = setTimeout((() => {
-           pU(), EU(new Error("No frame was drawn to capture"))
-         }), QU);
-         try {
-           const cU = function(UU, XU, zU) {
-             const cU = Math.max(1, UU),
-               QU = Math.max(1, XU),
-               AU = Math.min(1, zU / Math.max(cU, QU), Math.sqrt(yU / (cU * QU)));
-             return {
-               width: Math.max(1, Math.floor(cU * AU)),
-               height: Math.max(1, Math.floor(QU * AU))
+         } else
+           for (const LH in this.attached) {
+             const BH = hH[this.attached[LH].getClassName()];
+             if (BH) {
+               const AH = rH.c.Parse((() => new BH), HH, null);
+               this.remove(this.attached[LH]), this.add(AH)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L329` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L96) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L329)

```diff
-   38194: (UU, XU, zU) => {
+   41525: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L331-L333` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L98) · [Before (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L331-L333)

```diff
-       d: () => DU,
-       h: () => FU,
-       l: () => AU
+       d: () => AH.b
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L335-L344` → after: `L100-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L100-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L100-L191) · [Before (L335-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L335-L344)

```diff
-     var cU = zU(38185),
-       yU = zU(38202);
-     let QU = 0;
- 
-     function AU(UU, XU) {
-       const zU = UU;
-       zU._noaFaceGroups = null !== XU && void 0 !== XU ? XU : null, zU._noaFaceEpoch = -1, zU._noaFaceMask = -1, zU._noaFaceCount = -1, zU._noaFaceMaterial = null;
-       const cU = UU.uB;
-       cU && 1 === cU.length && (cU[0].indexStart = 0, cU[0].indexCount = UU.getTotalIndices())
-     }
+     var AH = LH(41533);
+     (0, AH.c)()
+   },
+   41533: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => EH,
+       c: () => GH
+     });
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(37963),
+       hH = LH(38074),
+       tH = LH(41535),
+       zH = LH(41498),
+       CH = LH(38012);
+     let EH = (() => {
+ ... (76 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L346-L353` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L193-L194) · [Before (L346-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L346-L353)

```diff
-     function FU(UU, XU) {
-       if (XU) {
-         QU++;
-         for (const XU of UU) {
-           const UU = XU._noaFaceGroups;
-           UU && AU(XU, UU)
-         }
-       } else QU = Math.max(0, QU - 1)
+     function GH() {
+       XH || (XH = !0, zH.b.AddNodeConstructor("Light_Type_3", ((HH, BH) => () => new EH(HH, SH.o.Zero(), BH))), (0, CH.f)("BABYLON.HemisphericLight", EH))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L355-L362` → after: `L196-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L196-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L196-L246) · [Before (L355-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L355-L362)

```diff
- 
-     function oU(UU, XU, zU) {
-       let yU = -1,
-         QU = 0;
-       for (let AU = 0; AU < cU.c; AU++) {
-         const zU = UU[AU],
-           FU = UU[AU + 1];
-         FU > zU && XU & 1 << cU.b[AU] && (yU < 0 && (yU = zU), QU = FU)
+   },
+   38071: (HH, BH, LH) => {
+     LH.d(BH, {
+       Color3: () => AH.c,
+       d: () => AH.g
+     });
+     var AH = LH(38074);
+     (0, AH.j)()
+   },
+   38610: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => rH
+     });
+     var AH = LH(38619);
+     class rH {
+       static GetPlanes(HH) {
+ ... (35 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L367-L383` → after: `L256-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L256-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L256-L273) · [Before (L367-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L367-L383)

```diff
-       constructor(UU, XU) {
-         this.aY = UU, this.engine = XU, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
-       }
-       apply(UU, XU) {
-         if (!XU) return;
-         const zU = XU.getProjectionMatrix().m,
-           AU = 0 === QU && 0 === zU[15],
-           FU = XU.globalPosition,
-           {
-             engine: DU
-           } = this,
-           EU = AU ? (0, yU.e)(zU, DU.getRenderWidth(), DU.getRenderHeight()) : 0;
-         FU.x === this.eyeX && FU.y === this.eyeY && FU.z === this.eyeZ && EU === this.focalPx && AU === this.culling || (this.epoch++, this.eyeX = FU.x, this.eyeY = FU.y, this.eyeZ = FU.z, this.focalPx = EU, this.culling = AU);
-         const {
-           epoch: YU,
-           range: NU
- ... (1 more removed lines; see GitHub link above)
+       constructor(HH, BH, LH, rH) {
+         this.normal = new AH.o(HH, BH, LH), this.d = rH
+       }
+       xrH() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let HH = this.normal.getHashCode();
+         return HH = 397 * HH ^ this.d, HH
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L385-L412` → after: `L275-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L275-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L275-L330) · [Before (L385-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L385-L412)

```diff
-         for (let QU = 0; QU < tU; QU++) {
-           const UU = aU[QU],
-             XU = UU._noaFaceGroups;
-           if (XU && (UU._noaFaceEpoch !== YU || UU._noaFaceMaterial !== UU.material)) {
-             UU._noaFaceEpoch = YU, UU._noaFaceMaterial = UU.material;
-             const zU = UU.uB,
-               QU = zU && 1 === zU.length ? zU[0] : null;
-             let DU = -1;
-             if (AU && QU && (0, cU.m)(UU.material)) {
-               const zU = UU.position,
-                 cU = FU.x - zU.x,
-                 QU = FU.y - zU.y,
-                 AU = FU.z - zU.z,
-                 oU = cU - IU,
-                 YU = QU - IU,
-                 NU = AU - IU,
- ... (12 more removed lines; see GitHub link above)
+         return 0 !== HH && (BH = 1 / HH), this.normal.x *= BH, this.normal.y *= BH, this.normal.z *= BH, this.d *= BH, this
+       }
+       transform(HH) {
+         const BH = rH._TmpMatrix;
+         HH.invertToRef(BH);
+         const LH = BH.m,
+           AH = this.normal.x,
+           SH = this.normal.y,
+           hH = this.normal.z,
+           tH = this.d,
+           zH = AH * LH[0] + SH * LH[1] + hH * LH[2] + tH * LH[3],
+           CH = AH * LH[4] + SH * LH[5] + hH * LH[6] + tH * LH[7],
+           EH = AH * LH[8] + SH * LH[9] + hH * LH[10] + tH * LH[11],
+           XH = AH * LH[12] + SH * LH[13] + hH * LH[14] + tH * LH[15];
+         return new rH(zH, CH, EH, XH)
+       }
+ ... (40 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L416` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L348) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L416)

```diff
-   38178: (UU, XU, zU) => {
+   38966: (HH, BH, LH) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L418-L419` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L350) · [Before (L418-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L418-L419)

```diff
-       b: () => oU,
-       e: () => FU
+       c: () => AH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L421-L431` → after: `L352-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L352-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L352-L364) · [Before (L421-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L421-L431)

```diff
-     const cU = new WeakSet;
-     let yU = 0;
-     const QU = new Set;
- 
-     function AU(UU, XU) {
-       UU._data = XU
-     }
- 
-     function FU(UU) {
-       var XU, zU;
-       (null !== (XU = null === (zU = UU.getBuffer()) || void 0 === zU ? void 0 : zU.xY) && void 0 !== XU ? XU : 0) > 0 && (cU.add(UU), 0 === yU ? AU(UU, null) : QU.add(UU))
+     class AH {
+       constructor(HH, BH, LH, AH) {
+         this.x = HH, this.y = BH, this.width = LH, this.height = AH
+       }
+       toGlobal(HH, BH) {
+         return new AH(this.x * HH, this.y * BH, this.width * HH, this.height * BH)
+       }
+       toGlobalToRef(HH, BH, LH) {
+         return LH.x = this.x * HH, LH.y = this.y * BH, LH.width = this.width * HH, LH.height = this.height * BH, this
+       }
+       clone() {
+         return new AH(this.x, this.y, this.width, this.height)
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L435-L453` → after: `L378-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L378-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L378-L409) · [Before (L435-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L435-L453)

```diff
-       yU++;
-       for (const zU of function(UU) {
-           const XU = new Set;
-           for (const yU of UU) {
-             const UU = yU.geometry;
-             for (const yU of Object.values(null !== (zU = null === UU || void 0 === UU ? void 0 : UU.getVertexBuffers()) && void 0 !== zU ? zU : {})) {
-               var zU;
-               const UU = yU.getWrapperBuffer();
-               cU.has(UU) && XU.add(UU)
-             }
-           }
-           return XU
-         }(UU)) zU.getData() || DU(zU), QU.add(zU);
-       let XU = !0;
-       return () => {
-         if (XU && (XU = !1, yU--, 0 === yU)) {
- ... (3 more removed lines; see GitHub link above)
+       let BH = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const LH = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         SH = [],
+         zH = HH.width || HH.size || 1,
+         CH = HH.height || HH.size || 1,
+         EH = HH.depth || HH.size || 1,
+         XH = HH.wrap || !1;
+       let GH = void 0 === HH.topBaseAt ? 1 : HH.topBaseAt,
+         YH = void 0 === HH.bottomBaseAt ? 0 : HH.bottomBaseAt;
+       GH = (GH + 4) % 4, YH = (YH + 4) % 4;
+       let uH = [2, 0, 3, 1][GH],
+         QH = [2, 0, 1, 3][YH],
+         WH = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
+       if (XH) {
+         BH = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], WH = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
+         let HH = [
+ ... (16 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L458-L462` → after: `L431-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L431-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L431-L435) · [Before (L458-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L458-L462)

```diff
-       const XU = UU.getBuffer();
-       if (!XU || !(XU.xY > 0)) return;
-       const zU = UU._engine,
-         cU = new Uint8Array(XU.xY);
-       zU.bindArrayBuffer(XU), zU._gl.getBufferSubData(zU._gl.ARRAY_BUFFER, 0, cU), zU._resetVertexBufferBinding(), AU(UU, cU)
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const AH = new SH.c(HH, LH);
+       BH.sideOrientation = SH.c._GetDefaultSideOrientation(BH.sideOrientation), AH._originalBuilderSideOrientation = BH.sideOrientation;
+       return zH(BH).applyToMesh(AH, BH.updatable), AH
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L465` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L446) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L465)

```diff
-   38185: (UU, XU, zU) => {
+   41749: (HH, BH, LH) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L467-L473` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L448) · [Before (L467-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L467-L473)

```diff
-       b: () => AU,
-       c: () => QU,
-       d: () => oU,
-       h: () => cU,
-       i: () => FU,
-       k: () => yU,
-       m: () => DU
+       e: () => XH
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L475-L486` → after: `L450-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L450-L455) · [Before (L475-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L475-L486)

```diff
-     const cU = 6,
-       yU = [0, 2, 4, 1, 3, 5, 0, 2],
-       QU = 6,
-       AU = [1, 0, 3, 2, 5, 4];
-     for (let EU = QU; EU < yU.length; EU++)
-       if (yU[EU] !== yU[EU - QU]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
-     const FU = yU.length + 1,
-       oU = (() => {
-         const UU = [];
-         for (let XU = 0; XU < QU; XU++) UU[yU[XU]] = XU;
-         return UU
-       })();
+     var AH = LH(37963),
+       rH = LH(41693),
+       SH = LH(41703),
+       hH = LH(41754),
+       tH = LH(41427),
+       zH = LH(39595);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L489` → after: `L458-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L458-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L458-L486) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L489)

```diff
-       return !!UU && UU.backFaceCulling && (0 === UU.transparencyMode || 1 === UU.transparencyMode)
+       const BH = [],
+         LH = [],
+         AH = HH.lines,
+         rH = HH.colors,
+         hH = [];
+       let tH = 0;
+       for (let SH = 0; SH < AH.length; SH++) {
+         const HH = AH[SH];
+         for (let AH = 0; AH < HH.length; AH++) {
+           const {
+             x: zH,
+             y: CH,
+             z: EH
+           } = HH[AH];
+           if (LH.push(zH, CH, EH), rH) {
+             const HH = rH[SH],
+ ... (13 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L506-L507` → after: `L489-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L489-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L489-L507) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L506-L507)

```diff
-     function FU(UU, XU, zU) {
-       return Math.min(Math.abs(UU[0] * XU), Math.abs(UU[5] * zU)) / 2
+     function EH(HH) {
+       const BH = HH.dashSize || 3,
+         LH = HH.gapSize || 1,
+         rH = HH.dashNb || 200,
+         hH = HH.points,
+         tH = [],
+         zH = [],
+         CH = AH.o.Zero();
+       let EH, XH, GH, YH = 0,
+         uH = 0;
+       for (GH = 0; GH < hH.length - 1; GH++) hH[GH + 1].subtractToRef(hH[GH], CH), YH += CH.length();
+       const QH = YH / rH,
+         WH = BH * QH / (BH + LH);
+       for (GH = 0; GH < hH.length - 1; GH++) {
+         hH[GH + 1].subtractToRef(hH[GH], CH), EH = Math.floor(CH.length() / QH), CH.normalize();
+         for (let HH = 0; HH < EH; HH++) XH = QH * HH, tH.push(hH[GH].x + XH * CH.x, hH[GH].y + XH * CH.y, hH[GH].z + XH * CH.z), tH.push(hH[GH].x + (XH + WH) * CH.x, hH[GH].y + (XH + WH) * CH.y, hH[GH].z + (XH + WH) * CH.z), zH.push(uH, uH + 1), uH += 2
+ ... (3 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L511` → after: `L511-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L511-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L511-L529) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L511)

```diff
-       return yU + QU * UU * UU / XU
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const AH = BH.instance,
+         rH = BH.lines,
+         SH = BH.colors;
+       if (AH) {
+         const HH = AH.getVerticesData(tH.i.PositionKind);
+         let BH, LH;
+         SH && (BH = AH.getVerticesData(tH.i.ColorKind));
+         let hH = 0,
+           zH = 0;
+         for (let AH = 0; AH < rH.length; AH++) {
+           const tH = rH[AH];
+           for (let rH = 0; rH < tH.length; rH++) HH[hH] = tH[rH].x, HH[hH + 1] = tH[rH].y, HH[hH + 2] = tH[rH].z, SH && BH && (LH = SH[AH], BH[zH] = LH[rH].r, BH[zH + 1] = LH[rH].g, BH[zH + 2] = LH[rH].b, BH[zH + 3] = LH[rH].a, zH += 4), hH += 3
+         }
+         return AH.updateVerticesData(tH.i.PositionKind, HH, !1, !1), SH && BH && AH.updateVerticesData(tH.i.ColorKind, BH, !1, !1), AH.refreshBoundingInfo(), AH
+       }
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L514-L516` → after: `L532-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L532-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L532-L542) · [Before (L514-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L514-L516)

```diff
-     function DU(UU, XU, zU, yU, QU) {
-       const AU = cU.i;
-       return EU(UU[AU], UU[AU + 1], UU[AU + 2], UU[AU + 3], UU[AU + 4], UU[AU + 5], XU, zU, yU, QU)
+     function GH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const AH = BH.colors ? [BH.colors] : null;
+       return XH(HH, {
+         lines: [BH.points],
+         updatable: BH.updatable,
+         instance: BH.instance,
+         colors: AH,
+         useVertexAlpha: BH.useVertexAlpha,
+         material: BH.material
+       }, LH)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L519-L520` → after: `L545-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L545-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L545-L568) · [Before (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L519-L520)

```diff
-     function EU(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
-       return (AU <= UU - DU ? 0 : 1) | (AU >= XU + DU ? 0 : 2) | (FU <= zU - DU ? 0 : 4) | (FU >= cU + DU ? 0 : 8) | (oU <= yU - DU ? 0 : 16) | (oU >= QU + DU ? 0 : 32)
+     function YH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const SH = BH.points,
+         tH = BH.instance,
+         CH = BH.gapSize || 1,
+         XH = BH.dashSize || 3;
+       if (tH) {
+         const HH = HH => {
+           const BH = AH.o.Zero(),
+             LH = HH.length / 6;
+           let rH, hH, zH, CH, EH = 0,
+             XH = 0;
+           for (zH = 0; zH < SH.length - 1; zH++) SH[zH + 1].subtractToRef(SH[zH], BH), EH += BH.length();
+           const GH = EH / LH,
+             YH = tH._creationDataStorage.dashSize,
+             uH = YH * GH / (YH + tH._creationDataStorage.gapSize);
+ ... (8 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L522-L534` → after: `L570-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L570-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L570-L681) · [Before (L522-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L522-L534)

```diff
-     const YU = (() => {
-         const UU = [];
-         for (let XU = 0; XU < cU.k.length; XU++) {
-           let zU = 0;
-           for (let yU = XU + 1; yU <= cU.k.length; yU++) {
-             const QU = 1 << cU.k[yU - 1];
-             if (zU & QU) break;
-             zU |= QU, UU.push({
-               start: XU,
-               end: yU,
-               rQ: zU
-             })
-           }
+     let uH = !1;
+     uH || (uH = !0, SH.b.CreateLineSystem = CH, SH.b.CreateDashedLines = EH, rH.c.CreateLines = function(HH, BH) {
+       return GH(HH, {
+         points: BH,
+         updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     }, rH.c.CreateDashedLines = function(HH, BH, LH, AH, rH) {
+       return YH(HH, {
+         points: BH,
+         dashSize: LH,
+         gapSize: AH,
+         dashNb: rH,
+         updatable: arguments.length > 6 ? arguments[6] : void 0,
+         instance: arguments.length > 7 ? arguments[7] : void 0
+       }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
+ ... (96 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L537-L542` → after: `L684-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L684-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L684-L691) · [Before (L537-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L537-L542)

```diff
-       })(),
-       NU = [];
- 
-     function IU(UU, XU) {
-       const zU = cU.d[XU];
-       return UU[zU + 1] - UU[zU]
+       }
+       serialize(HH) {
+         super.serialize(HH), HH.color = this.color.xrH(), HH.alpha = this.alpha
+       }
+       static Parse(HH, BH) {
+         const LH = new GH(HH.name, BH);
+         return LH.color = SH.c.FromArray(HH.color), LH.alpha = HH.alpha, LH
+       }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L545-L579` → after: `L704-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L704-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/256.js#L704-L817) · [Before (L545-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/256.js#L545-L579)

```diff
-     function pU(UU, XU, zU) {
-       let yU = 0;
-       for (let AU = 0; AU < cU.h; AU++) IU(UU, AU) > 0 && (yU |= 1 << AU);
-       if (0 === (XU &= yU)) return 0;
-       if (XU === yU) return zU[0] = 0, zU[1] = UU[cU.c], 1;
-       let QU = null,
-         FU = 1 / 0;
-       for (const DU of function(UU) {
-           let XU = NU[UU];
-           if (XU) return XU;
-           const zU = new Map,
-             cU = (UU, XU) => {
-               const cU = 4 * UU + XU.length / 2;
-               zU.has(cU) || zU.set(cU, {
-                 rQ: UU,
-                 windows: XU
- ... (19 more removed lines; see GitHub link above)
+     function QH() {
+       uH || (uH = !0, tH.c._LinesMeshParser = (HH, BH) => GH.Parse(HH, BH))
+     }(AH = GH.prototype).enableEdgesRendering ?? (AH.enableEdgesRendering = (0, XH.f)("LinesMesh", "enableEdgesRendering")), (rH = YH.prototype).enableEdgesRendering ?? (rH.enableEdgesRendering = (0, XH.f)("InstancedLinesMesh", "enableEdgesRendering"))
+   },
+   39588: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => SH
+     });
+     var AH = LH(39595);
+     const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
+       ...HH
+     } : null : HH.clone(BH) : null;
+     class SH {
+       static DeepCopy(HH, BH, LH, SH) {
+         let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const tH = function(HH) {
+ ... (98 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/257.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/257.js` (62 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775)

#### 1. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L2)

```diff
- export const ids = [257, 258];
+ export const ids = [257, 262];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L4)

```diff
-   41340: (UU, XU, zU) => {
+   45301: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L6-L7)

```diff
-       d: () => EU,
-       f: () => NU
+       e: () => hH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L9-L92` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L8-L10) · [Before (L9-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L9-L92)

```diff
-     var cU = zU(41113),
-       yU = zU(41121),
-       QU = zU(37819),
-       AU = zU(37923),
-       FU = zU(41346),
-       oU = zU(41314),
-       DU = zU(37863);
-     let EU = (() => {
-         var UU;
-         let XU, zU, oU = FU.b,
-           DU = [],
-           EU = [],
-           YU = [],
-           NU = [];
-         return UU = class extends oU {
-           constructor(UU, XU, zU, yU) {
- ... (68 more removed lines; see GitHub link above)
+     var AH = LH(45245),
+       rH = LH(41283);
+     let SH = !1;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L95` → after: `L13-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L13-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L13-L30) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L95)

```diff
-       YU || (YU = !0, oU.e.AddNodeConstructor("Light_Type_3", ((UU, XU) => () => new EU(UU, QU.q.Zero(), XU))), (0, DU.h)("BABYLON.HemisphericLight", EU))
+       SH || (SH = !0, rH.e.prototype._sphericalPolynomialTargetSize = 0, rH.e.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(rH.e.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = AH.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = HH, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
+         },
+         set: function(HH) {
+           this._texture && (this._texture._sphericalPolynomial = HH)
+         },
+         enumerable: !0,
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L98` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L33) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L98)

```diff
-   38502: (UU, XU, zU) => {
+   38071: (HH, BH, LH) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L100` → after: `L35-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L35-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L35-L43) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L100)

```diff
-       d: () => yU
+       Color3: () => AH.c,
+       d: () => AH.g
+     });
+     var AH = LH(38074);
+     (0, AH.j)()
+   },
+   38610: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => rH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L102` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L45) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L102)

```diff
-     var cU = zU(38505);
+     var AH = LH(38619);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L143` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L86) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L143)

```diff
-   38505: (UU, XU, zU) => {
+   38619: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L147` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L90) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L147)

```diff
-     var cU = zU(37819);
+     var AH = LH(37963);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L150` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L93) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L150)

```diff
-         this.normal = new cU.q(UU, XU, zU), this.d = yU
+         this.normal = new AH.o(HH, BH, LH), this.d = rH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L152` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L95) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L152)

```diff
-       cyU() {
+       xrH() {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L199` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L142) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L199)

```diff
-         return IU = 0 !== NU ? 1 / NU : 0, this.normal.x = DU * IU, this.normal.y = EU * IU, this.normal.z = YU * IU, this.d = -(this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z), this
+         return YH = 0 !== GH ? 1 / GH : 0, this.normal.x = CH * YH, this.normal.y = EH * YH, this.normal.z = XH * YH, this.d = -(this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z), this
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L202` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L145) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L202)

```diff
-         return cU.q.Dot(this.normal, UU) <= XU
+         return AH.o.Dot(this.normal, HH) <= BH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L205` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L148) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L205)

```diff
-         return cU.q.Dot(UU, this.normal) + this.d
+         return AH.o.Dot(HH, this.normal) + this.d
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L219` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L162) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L219)

```diff
-         return zU.normal.YL(XU), zU.normal.normalize(), zU.d = -UU.dot(zU.normal), zU
+         return LH.normal.Tm(BH), LH.normal.normalize(), LH.d = -HH.dot(LH.normal), LH
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L223` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L166) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L223)

```diff
-         return cU.q.Dot(zU, XU) + yU
+         return AH.o.Dot(LH, BH) + rH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L228` → after: `L171-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L171-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L171-L184) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L228)

```diff
-   38845: (UU, XU, zU) => {
+   37961: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       Matrix: () => AH.e,
+       Quaternion: () => AH.f,
+       RegisterMathVector: () => AH.h,
+       TmpVectors: () => AH.l,
+       Vector2: () => AH.n,
+       lu: () => AH.o,
+       Vector4: () => AH.q
+     });
+     var AH = LH(37963);
+     (0, AH.h)()
+   },
+   38966: (HH, BH, LH) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L230` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L186) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L230)

```diff
-       d: () => cU
+       c: () => AH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L247` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L203) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L247)

```diff
-   39486: (UU, XU, zU) => {
+   45245: (HH, BH, LH) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L249` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L205) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L249)

```diff
-       c: () => QU
+       e: () => CH
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L251-L254` → after: `L207-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L207-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L207-L211) · [Before (L251-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L251-L254)

```diff
-     var cU = zU(39493);
-     const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
-       ...UU
-     } : null : UU.clone(XU) : null;
+     var AH = LH(37963),
+       rH = LH(38002),
+       SH = LH(41275),
+       hH = LH(37972),
+       tH = LH(38074);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L256-L284` → after: `L213-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L213-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L213-L283) · [Before (L256-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L256-L284)

```diff
-       static DeepCopy(UU, XU, zU, QU) {
-         let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const FU = function(UU) {
-           const XU = [];
-           do {
-             const zU = Object.getOwnPropertyNames(UU);
-             for (const UU of zU) - 1 === XU.indexOf(UU) && XU.push(UU)
-           } while (UU = Object.getPrototypeOf(UU));
-           return XU
-         }(UU);
-         for (const DU of FU) {
-           if ("_" === DU[0] && (!QU || -1 === QU.indexOf(DU))) continue;
-           if (DU.endsWith("Observable")) continue;
-           if (zU && -1 !== zU.indexOf(DU)) continue;
-           const FU = UU[DU],
-             EU = typeof FU;
- ... (13 more removed lines; see GitHub link above)
+       constructor(HH, BH, LH, AH) {
+         this.name = HH, this.worldAxisForNormal = BH, this.worldAxisForFileX = LH, this.worldAxisForFileY = AH
+       }
+     }
+     class CH {
+       static _NearestPow2Floor(HH) {
+         return HH <= 1 ? 1 : 1 << Math.floor(Math.log2(HH))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(HH) {
+         if (!HH.isCube) return null;
+         HH.yN()?.Iu().flushFramebuffer();
+         const BH = HH.getSize().width,
+           LH = HH._sphericalPolynomialTargetSize,
+           AH = LH > 0 ? this._NearestPow2Floor(LH) : 0,
+           rH = !HH.noMipmap && !0 === HH._texture?.generateMipMaps,
+           SH = AH > 0 && AH < BH && rH,
+ ... (55 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L290` → after: `L346-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L346-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L346-L354) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L290)

```diff
-   38649: (UU, XU, zU) => {
+   45118: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => AH.i,
+       f: () => AH.m
+     });
+     var AH = LH(41336);
+     (0, AH.q)()
+   },
+   38790: (HH, BH, LH) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L294` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L358) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L294)

```diff
-         return ("x" === UU ? XU : 3 & XU | 8).toString(16)
+         return ("x" === HH ? BH : 3 & BH | 8).toString(16)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L298` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L362) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L298)

```diff
-       d: () => cU
+       e: () => AH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L301` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L365) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L301)

```diff
-   39493: (UU, XU, zU) => {
+   45276: (HH, BH, LH) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L303` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L367) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L303)

```diff
-       b: () => cU
+       c: () => SH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L306-L438` → after: `L372-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L372-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L372-L400) · [Before (L306-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L306-L438)

```diff
-       static _CheckLimit(UU, XU) {
-         let zU = cU._LogLimitOutputs[UU];
-         return zU ? zU.current++ : (zU = {
-           limit: XU,
-           current: 1
-         }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
-       }
-       static _GenerateLimitMessage(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const zU = cU._LogLimitOutputs[UU];
-         if (!zU || !cU.MessageLimitReached) return;
-         const yU = this._Levels[XU];
-         zU.current === zU.limit && cU[yU.name](cU.MessageLimitReached.replace(/%LIMIT%/g, "" + zU.limit).replace(/%TYPE%/g, yU.name ?? ""))
-       }
-       static _AddLogEntry(UU) {
-         cU._LogCache = UU + cU._LogCache, cU.OnNewCacheEntry && cU.OnNewCacheEntry(UU)
- ... (117 more removed lines; see GitHub link above)
+       static ExpandRGBDTexture(HH) {
+         const BH = HH._texture;
+         if (!BH || !HH.isRGBD) return;
+         const rH = BH.Iu(),
+           SH = rH.getCaps(),
+           hH = BH.isReady;
+         let tH = !1;
+         SH.textureHalfFloatRender && SH.textureHalfFloatLinearFiltering ? (tH = !0, BH.type = 2) : SH.textureFloatRender && SH.textureFloatLinearFiltering && (tH = !0, BH.type = 1), tH && (BH.isReady = !1, BH._isRGBD = !1, BH.invertY = !1);
+         const zH = async () => {
+           const SH = rH.isWebGPU,
+             hH = SH ? 1 : 0;
+           BH.isReady = !1, SH ? await LH.e(651).then((() => LH(64229))) : await LH.e(633).then((() => LH(64238)));
+           const tH = new AH.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, rH, !1, void 0, BH.type, void 0, null, !1, void 0, hH);
+           tH.externalTextureSamplerBinding = !0;
+           const zH = rH.createRenderTargetTexture(BH.width, {
+             generateDepthBuffer: !1,
+ ... (13 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L440-L445` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L402) · [Before (L440-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L440-L445)

```diff
-         super(UU, EU.FragmentUrl, {
-           effectWrapper: "number" !== typeof XU && XU.effectWrapper ? void 0 : new EU(UU, QU, oU),
-           ...oU
-         }), this.onApplyObservable.add((UU => {
-           this._effectWrapper.texelSize = this.texelSize
-         }))
+         tH && (hH ? zH() : HH.onLoadObservable.addOnce(zH))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L447-L448` → after: `L404-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L404-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L404-L406) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L447-L448)

```diff
-       static _Parse(UU, XU, zU, cU) {
-         return AU.b.Parse((() => new YU(UU.name, UU.options, XU, UU.renderTargetSamplingMode, zU.qp(), UU.reusable)), UU, zU, cU)
+       static async EncodeTextureToRGBD(HH, BH) {
+         let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         return BH.Iu().isWebGPU ? await LH.e(652).then((() => LH(64248))) : await LH.e(634).then((() => LH(64245))), await (0, rH.d)("rgbdEncode", HH, BH, AH, 1, 5)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L451-L456` → after: `L409-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L409-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L409-L423) · [Before (L451-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L451-L456)

```diff
-     var NU = zU(39493),
-       IU = zU(41205),
-       pU = zU(44529),
-       aU = zU(44509),
-       tU = zU(40999);
-     const gU = 0;
+   },
+   64093: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       AsyncLoop: () => AH.e,
+       RegisterTools: () => AH.f,
+       Tools: () => AH.i,
+       className: () => AH.j
+     });
+     var AH = LH(41387);
+     (0, AH.f)()
+   },
+   45318: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => rH
+     });
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L458-L462` → after: `L425-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L425-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L425-L429) · [Before (L458-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L458-L462)

```diff
-       constructor(UU, XU, zU) {
-         this.name = UU, this._parentTask = XU, this._context = zU, this.disabled = !1
-       }
-       setInitializeFunc(UU) {
-         this._initFunc = UU
+       constructor(HH) {
+         this._pendingActions = new Array, this._workerInfos = HH.map((HH => ({
+           workerPromise: Promise.resolve(HH),
+           idle: !0
+         })))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L464-L465` → after: `L431-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L431-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L431-L435) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L464-L465)

```diff
-       setExecuteFunc(UU) {
-         this._executeFunc = UU
+       dispose() {
+         for (const HH of this._workerInfos) HH.workerPromise.then((HH => {
+           HH.terminate()
+         }));
+         this._workerInfos.length = 0, this._pendingActions.length = 0
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L467-L468` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L437-L438) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L467-L468)

```diff
-       _execute() {
-         this.disabled || this._executeFunc(this._context)
+       push(HH) {
+         this._executeOnIdleWorker(HH) || this._pendingActions.push(HH)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L470-L471` → after: `L440-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L440-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L440-L443) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L470-L471)

```diff
-       _initialize() {
-         this._initFunc?.(this._context)
+       _executeOnIdleWorker(HH) {
+         for (const BH of this._workerInfos)
+           if (BH.idle) return this._execute(BH, HH), !0;
+         return !1
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L473-L474` → after: `L445-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L445-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L445-L451) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L473-L474)

```diff
-       _isValid() {
-         return void 0 !== this._executeFunc ? null : "Execute function is not set (call setExecuteFunc to set it)"
+       _execute(HH, BH) {
+         HH.idle = !1, HH.workerPromise.then((LH => {
+           BH(LH, (() => {
+             const BH = this._pendingActions.shift();
+             BH ? this._execute(HH, BH) : HH.idle = !0
+           }))
+         }))
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L479-L486` → after: `L455-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L455-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L455-L457) · [Before (L479-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L479-L486)

```diff
-       static IsObjectListPass(UU) {
-         return void 0 !== UU.setObjectList
-       }
-       get objectList() {
-         return this._objectList
-       }
-       setObjectList(UU) {
-         this._objectList = UU
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rH.DefaultOptions;
+         super([]), this._maxWorkers = HH, this._createWorkerAsync = BH, this._options = LH
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L488-L489` → after: `L459-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L459-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L459-L467) · [Before (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L488-L489)

```diff
-       constructor(UU, XU, zU, cU) {
-         super(UU, XU, zU), this._engine = cU
+       push(HH) {
+         if (!this._executeOnIdleWorker(HH))
+           if (this._workerInfos.length < this._maxWorkers) {
+             const BH = {
+               workerPromise: this._createWorkerAsync(),
+               idle: !1
+             };
+             this._workerInfos.push(BH), this._execute(BH, HH)
+           } else this._pendingActions.push(HH)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L491-L493` → after: `L469-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L469-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L469-L479) · [Before (L491-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L491-L493)

```diff
-       _isValid() {
-         const UU = super._isValid();
-         return UU || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
+       _execute(HH, BH) {
+         HH.timeoutId && (clearTimeout(HH.timeoutId), delete HH.timeoutId), super._execute(HH, ((LH, AH) => {
+           BH(LH, (() => {
+             AH(), HH.idle && (HH.timeoutId = setTimeout((() => {
+               HH.workerPromise.then((HH => {
+                 HH.terminate()
+               }));
+               const BH = this._workerInfos.indexOf(HH); - 1 !== BH && this._workerInfos.splice(BH, 1)
+             }), this._options.idleTimeElapsedBeforeRelease))
+           }))
+         }))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L496-L550` → after: `L482-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L482-L483) · [Before (L496-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L496-L550)

```diff
-     class BU extends kU {
-       static IsRenderPass(UU) {
-         return void 0 !== UU.setRenderTarget
-       }
-       get renderTarget() {
-         return this._renderTarget
-       }
-       get renderTargetDepth() {
-         return this._renderTargetDepth
-       }
-       get frameGraphRenderTarget() {
-         return this._frameGraphRenderTarget
-       }
-       constructor(UU, XU, zU, cU) {
-         super(UU, XU, zU), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = cU
-       }
- ... (39 more removed lines; see GitHub link above)
+     rH.DefaultOptions = {
+       idleTimeElapsedBeforeRelease: 1e3
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L552` → after: `L485-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L485-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L485-L617) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L552)

```diff
-     var ZU = zU(37846);
+   },
+   64122: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       AbstractThreeMfSerializer: () => Zt,
+       BVHExporter: () => bh,
+       ContentTypeFileName: () => Yt,
+       DefaultXmlSerializerFormatOptions: () => nh,
+       DefaultXmlSerializerNumberOptions: () => jh,
+       EXT_lights_area: () => Wr,
+       EXT_mesh_gpu_instancing: () => NA,
+       EXT_texture_avif: () => rh,
+       EXT_texture_webp: () => Hh,
+       GLTF2Export: () => eA,
+       GLTFData: () => CH,
+       GetXmlFieldMeta: () => eh,
+       GetXmlName: () => qh,
+ ... (117 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L554-L628` → after: `L619-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L619-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L619-L631) · [Before (L554-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L554-L628)

```diff
-       get name() {
-         return this._name
-       }
-       set name(UU) {
-         this._name = UU
-       }
-       get disabled() {
-         return this._disabled
-       }
-       set disabled(UU) {
-         this._disabled = UU
-       }
-       get passes() {
-         return this._passes
-       }
-       get passesDisabled() {
- ... (59 more removed lines; see GitHub link above)
+       static OBJ(HH, BH, LH, hH) {
+         const tH = [];
+         let zH = 1,
+           CH = 1;
+         BH && (LH || (LH = "mat"), tH.push("mtllib " + LH + ".mtl"));
+         for (let EH = 0; EH < HH.length; EH++) {
+           const LH = HH[EH],
+             XH = LH.name || `mesh${EH}}`;
+           tH.push(`o ${XH}`);
+           let GH = null;
+           if (hH) {
+             const HH = LH.computeWorldMatrix(!0);
+             GH = new AH.Matrix, HH.invertToRef(GH), LH.bakeTransformIntoVertices(HH)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L630-L650` → after: `L633-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L633-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L633-L669) · [Before (L630-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L630-L650)

```diff
-           if (zU !== AU && null !== AU) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
-           if (UU !== cU && null !== cU) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
-         }
-       }
-       _execute() {
-         const UU = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
-         this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const XU of UU) XU._execute()
-         } finally {
-           this._frameGraph.engine._debugPopGroup?.()
-         }
-         this.onAfterTaskExecute.notifyObservers(this)
-       }
-       _initializePasses() {
-         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
- ... (5 more removed lines; see GitHub link above)
+           if (BH) {
+             const HH = LH.material;
+             HH && tH.push("usemtl " + HH.id)
+           }
+           const YH = LH.geometry;
+           if (!YH) {
+             rH.Tools.Warn("No geometry is present on the mesh");
+             continue
+           }
+           const uH = YH.getVerticesData("position"),
+             QH = YH.getVerticesData("normal"),
+             WH = YH.getVerticesData("uv"),
+             MH = YH.vrH();
+           let xH = 0,
+             vH = 0;
+           if (!uH || !MH) {
+ ... (21 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L653-L658` → after: `L673-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L673-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L673-L679) · [Before (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L653-L658)

```diff
-       _checkSameRenderTarget(UU, XU) {
-         if (null === UU || null === XU) return UU === XU;
-         if (UU.length !== XU.length) return !1;
-         for (let zU = 0; zU < UU.length; zU++)
-           if (UU[zU] !== XU[zU]) return !1;
-         return !0
+       static MTL(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
+         const LH = [],
+           AH = HH.material;
+         LH.push("newmtl " + BH), LH.push("  Ns " + AH.specularPower.toFixed(4)), LH.push("  Ni 1.5000"), LH.push("  d " + AH.alpha.toFixed(4)), LH.push("  Tr 0.0000"), LH.push("  Tf 1.0000 1.0000 1.0000"), LH.push("  illum 2"), LH.push("  Ka " + AH.ambientColor.r.toFixed(4) + " " … [truncated]
+         AH.ambientTexture && LH.push("  map_Ka " + AH.ambientTexture.name), AH.diffuseTexture && LH.push("  map_Kd " + AH.diffuseTexture.name), AH.specularTexture && LH.push("  map_Ks " + AH.specularTexture.name), AH.bumpTexture && LH.push("  map_bump -imfchan z " + AH.bumpTextur … [truncated]
+         return LH.join("\n")
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L661-L675` → after: `L682-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L682-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L682-L686) · [Before (L661-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L661-L675)

```diff
-     class PU extends RU {
-       get alphaMode() {
-         return this.postProcess.alphaMode
-       }
-       set alphaMode(UU) {
-         this.postProcess.alphaMode = UU
-       }
-       get drawWrapper() {
-         return this._postProcessDrawWrapper
-       }
-       constructor(UU, XU, zU) {
-         super(UU, XU), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = zU, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
-       }
-       isReady() {
-         return this.postProcess.isReady()
+     var tH = 0,
+       zH = LH(45118);
+     class CH {
+       constructor() {
+         this.files = {}
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L677-L678` → after: `L688-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L688-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L688-L689) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L677-L678)

```diff
-       getClassName() {
-         return "FrameGraphPostProcessTask"
+       get glTFFiles() {
+         return this.files
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L680-L701` → after: `L691-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L691-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L691-L697) · [Before (L680-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L680-L701)

```diff
-       record() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           XU = arguments.length > 1 ? arguments[1] : void 0,
-           zU = arguments.length > 2 ? arguments[2] : void 0;
-         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
-         const cU = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
-         if (cU && (cU.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, cU), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
-           const UU = this._frameGraph.textureManager.getTextureAbsoluteDimensions(cU);
-           this._sourceWidth = UU.width, this._sourceHeight = UU.height
-         }
-         const yU = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
-         this._outputWidth = yU.size.width, this._outputHeight = yU.size.height;
-         const QU = this._frameGraph.addRenderPass(this.name);
-         if (QU.depthReadOnly = this.depthReadOnly, QU.stencilReadOnly = this.stencilReadOnly, QU.addDependencies(this.sourceTexture), QU.setRenderTarget(this.outputTexture), QU.setRenderTargetDepth(this.depthAttachmentTexture), QU.setExecuteFunc((UU => {
-             UU.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && UU.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), XU?.(UU), this.viewport && UU.setViewport(this.viewport), UU.applyFullScreenEffect(this._postProcessDrawWra … [truncated]
-               void 0 !== this.sourceTexture && UU.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), zU?.(UU), this.postProcess.bind()
- ... (6 more removed lines; see GitHub link above)
+       downloadFiles() {
+         for (const HH in this.files) {
+           const BH = this.files[HH],
+             LH = new Blob([BH], {
+               type: (0, zH.d)(HH)
+             });
+           rH.Tools.Download(LH, HH)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L724-L730` → after: `L701-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L701-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L701-L762) · [Before (L724-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L724-L730)

```diff
-     var dU = zU(44524);
-     class LU extends PU {
-       constructor(UU, XU, zU) {
-         super(UU, XU, zU || new dU.f(UU, XU.engine))
-       }
-       getClassName() {
-         return "FrameGraphPassTask"
+     var EH = LH(42455),
+       XH = LH(42414),
+       GH = LH(45102),
+       YH = LH(42418),
+       uH = LH(41106),
+       QH = LH(37989),
+       WH = LH(38071),
+       MH = LH(38002);
+     const xH = MH.HighestCommonFactor,
+       vH = {
+         ...MH,
+         TwoPi: 2 * Math.PI,
+         Sign: Math.sign,
+         Log2: Math.log2,
+         HCF: xH
+       };
+ ... (46 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L733-L743` → after: `L765-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L765-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L765-L788) · [Before (L733-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L733-L743)

```diff
-     var eU = zU(41202),
-       CU = zU(41271),
-       wU = zU(41235),
-       qU = zU(41340),
-       OU = zU(37923);
-     class SU {
-       getRenderCamera(UU) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let XU;
-           return XU = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, UU && XU && XU.isRigCamera ? XU.rigParent : XU
+     let DH = (() => {
+       var HH, BH, LH, AH, rH, SH, hH, tH, zH, CH;
+       let EH, XH, GH, YH, uH, QH, WH, MH, xH, vH = nH.b,
+         PH = [],
+         TH = [],
+         UH = [],
+         VH = [],
+         OH = [],
+         mH = [],
+         oH = [],
+         IH = [],
+         fH = [],
+         lH = [],
+         KH = [],
+         cH = [],
+         eH = [],
+ ... (8 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L745-L812` → after: `L790-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L790-L791) · [Before (L745-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L745-L812)

```diff
-       }
-       setRenderCamera(UU) {
-         this._renderCamera = UU
-       }
-       _getSharedGizmoLight() {
-         return this._sharedGizmoLight || (this._sharedGizmoLight = new qU.d("shared gizmo light", new DU.q(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = OU.b.Gray()), this._sharedGizmoLight
-       }
-       static get DefaultUtilityLayer() {
-         return null == SU._DefaultUtilityLayer ? SU._CreateDefaultUtilityLayerFromScene(oU.b.LastCreatedScene) : SU._DefaultUtilityLayer
-       }
-       static _CreateDefaultUtilityLayerFromScene(UU) {
-         return SU._DefaultUtilityLayer = new SU(UU), SU._DefaultUtilityLayer.originalScene.bS.addOnce((() => {
-           SU._DefaultUtilityLayer = null
-         })), SU._DefaultUtilityLayer
-       }
-       static get DefaultKeepDepthUtilityLayer() {
- ... (52 more removed lines; see GitHub link above)
+         set useEnergyConservation(HH) {
+           (0, bH.f)(this, BH, HH, "f")
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L814-L886` → after: `L793-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L793-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L793-L995) · [Before (L814-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L814-L886)

```diff
-       }
-       dispose() {
-         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.bS.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
-       }
-       _updateCamera() {
-         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
-       }
-     }
-     SU._DefaultUtilityLayer = null, SU._DefaultKeepDepthUtilityLayer = null;
-     const rU = {
-       FindMainCamera: function(UU) {
-         return UU.findMainCamera()
-       },
-       FindMainObjectRenderer: function(UU) {
-         return UU.findMainObjectRenderer()
-       },
- ... (57 more removed lines; see GitHub link above)
+         get useSmithVisibilityHeightCorrelated() {
+           return (0, bH.e)(this, LH, "f")
+         }
+         set useSmithVisibilityHeightCorrelated(HH) {
+           (0, bH.f)(this, LH, HH, "f")
+         }
+         get useSphericalHarmonics() {
+           return (0, bH.e)(this, AH, "f")
+         }
+         set useSphericalHarmonics(HH) {
+           (0, bH.f)(this, AH, HH, "f")
+         }
+         get useSpecularGlossinessInputEnergyConservation() {
+           return (0, bH.e)(this, rH, "f")
+         }
+         set useSpecularGlossinessInputEnergyConservation(HH) {
+ ... (187 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L888-L898` → after: `L997-L15888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L997-L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L997-L15888) · [Before (L888-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L888-L898)

```diff
-     async function iU(UU, XU, zU) {
-       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         yU = arguments.length > 4 ? arguments[4] : void 0,
-         QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       return await new Promise(((oU, DU) => {
-         fU(UU, XU, zU, (UU => {
-           "undefined" !== typeof UU ? oU(UU) : DU(new Error("Data is undefined"))
-         }), cU, FU, yU, QU, AU)
-       }))
+     let HB = (() => {
+       var HH, BH, LH, AH, rH, SH, hH, tH, zH, CH;
+       let EH, XH, GH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH = nH.b,
+         mH = [],
+         oH = [],
+         IH = [],
+         fH = [],
+         lH = [],
+         KH = [],
+         cH = [],
+         eH = [],
+         qH = [],
+         gH = [],
+         NH = [],
+         RH = [],
+         jH = [],
+ ... (14876 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L900-L911` → after: `L15890-L15896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R15890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L15890-L15896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L15890-L15896) · [Before (L900-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L900-L911)

```diff
-     async function HU(UU, XU, zU, cU) {
-       let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         QU = arguments.length > 5 ? arguments[5] : void 0,
-         AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return await new Promise((FU => {
-         fU(UU, XU, {
-           width: zU,
-           height: cU
-         }, (() => {
-           FU()
-         }), yU, !0, QU, AU)
-       }))
+     class jt extends Rt {
+       constructor(HH) {
+         super(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : St.model), this._object.content = new Kt
+       }
+       withComponent(HH, BH) {
+         return this._object.content.component.push(new ct(HH, BH)), this
+       }
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L913-L983` → after: `L15898-L15924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R15898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L15898-L15924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L15898-L15924) · [Before (L913-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L913-L983)

```diff
- 
-     function MU(UU, XU, QU, AU) {
-       let FU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         oU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
-         DU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         EU = arguments.length > 7 ? arguments[7] : void 0,
-         IU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         gU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         kU = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
-         GU = arguments.length > 11 ? arguments[11] : void 0,
-         BU = arguments.length > 12 ? arguments[12] : void 0,
-         ZU = arguments.length > 13 ? arguments[13] : void 0,
-         RU = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
-         PU = arguments.length > 15 ? arguments[15] : void 0;
-       const WU = XU.nS();
-       if (WU.frameGraph) return void VU(WU.frameGraph, XU, QU, FU, oU, DU, EU, GU, ZU, !AU).then((UU => {
- ... (55 more removed lines; see GitHub link above)
+     class nt extends Rt {
+       constructor(HH) {
+         super(HH, St.model)
+       }
+       withPostProcessHandlers(HH, BH) {
+         return this._vh = HH, this._th = BH, this
+       }
+       withData(HH) {
+         return this._object.content = this._buildMesh(HH), this
+       }
+       withMaterial(HH, BH) {
+         return this._object.pid = HH, this._object.pindex = BH, this
+       }
+       _buildMesh(HH) {
+         const BH = this._buildVertices(HH.positions),
+           LH = this._buildTriangle(HH.indices);
+ ... (11 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L985-L986` → after: `L15926-L15939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R15926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L15926-L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L15926-L15939) · [Before (L985-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L985-L986)

```diff
-         }))
-       } else uU()
+         return BH
+       }
+       _buildTriangle(HH) {
+         const BH = new ft;
+         if (HH)
+           for (let LH = 0; LH < HH.length;) {
+             const AH = HH[LH++],
+               rH = HH[LH++],
+               SH = HH[LH++];
+             let hH = new lt(AH, rH, SH);
+             this._th && (hH = this._th(hH)), BH.triangle.push(hH)
+           }
+         return BH
+       }
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L988-L1003` → after: `L15941-L15962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R15941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L15941-L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L15941-L15962) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L988-L1003)

```diff
-     async function vU(UU, XU, zU) {
-       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         AU = arguments.length > 6 ? arguments[6] : void 0,
-         FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         oU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         DU = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
-         EU = arguments.length > 10 ? arguments[10] : void 0,
-         YU = arguments.length > 11 ? arguments[11] : void 0,
-         NU = arguments.length > 12 ? arguments[12] : void 0;
-       return await new Promise(((IU, pU) => {
-         MU(UU, XU, zU, (UU => {
-           "undefined" !== typeof UU ? IU(UU) : pU(new Error("Data is undefined"))
-         }), cU, yU, QU, AU, FU, oU, DU, EU, YU, NU)
-       }))
+     class Ft {
+       constructor(HH) {
+         this._m = new et(HH)
+       }
+       withColor(HH, BH) {
+         this._m.base = this._m.base ?? [];
+         let LH = this._m.base.find((BH => BH.name.toLowerCase() === HH.toLowerCase()));
+         return LH ? (LH.displaycolor = this._rgbaToHex(BH), this) : (LH = new qt(HH, this._rgbaToHex(BH)), this._m.base.push(LH), this)
+       }
+       build() {
+         return this._m
+       }
+       _rgbaToHex(HH) {
+         const BH = HH => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(HH, 1 / 2.2)))),
+           LH = BH(HH.r).toString(16).padStart(2, "0").toUpperCase(),
+           AH = BH(HH.g).toString(16).padStart(2, "0").toUpperCase(),
+ ... (6 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L1005-L1059` → after: `L15964-L15966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R15964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L15964-L15966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L15964-L15966) · [Before (L1005-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L1005-L1059)

```diff
-     async function VU(UU, XU, zU) {
-       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         AU = arguments.length > 6 ? arguments[6] : void 0,
-         FU = arguments.length > 7 ? arguments[7] : void 0,
-         oU = arguments.length > 8 ? arguments[8] : void 0,
-         DU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         EU = arguments.length > 10 ? arguments[10] : void 0;
-       const YU = UU.engine,
-         NU = UU.textureManager,
-         {
-           height: IU,
-           width: aU,
-           finalWidth: tU,
-           finalHeight: kU
- ... (39 more removed lines; see GitHub link above)
+     class Dt {
+       constructor() {
+         this._model = new Ut, this._objects = new Map
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L1061-L1077` → after: `L15968-L15992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R15968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L15968-L15992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L15968-L15992) · [Before (L1061-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L1061-L1077)

```diff
-       if (tU !== aU || kU !== IU) {
-         const XU = new LU("pass", UU);
-         XU.sourceTexture = eU, XU.targetTexture = UU.textureManager.createRenderTargetTexture("pass_output", {
-           size: {
-             width: tU,
-             height: kU
-           },
-           options: {
-             createMipMaps: !1,
-             types: [0],
-             formats: [5],
-             samples: 1,
-             labels: ["screenshot_final_texture"],
-             useSRGBBuffers: [!1]
-           },
-           sizeIsPercentage: !1
- ... (1 more removed lines; see GitHub link above)
+       withMetaData(HH, BH, LH, AH) {
+         return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Vt(HH, BH, LH, AH)), this
+       }
+       withMaterial(HH) {
+         return HH instanceof Ft && (HH = HH.build()), HH && (this._model.resources = this._model.resources ?? new bt, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(HH)), this
+       }
+       withMesh(HH) {
+         return HH instanceof nt && (HH = HH.build()), this._model.resources = this._model.resources ?? new bt, this._model.resources.object.push(HH), this
+       }
+       withComponents(HH) {
+         return HH instanceof jt && (HH = HH.build()), this._model.resources = this._model.resources ?? new bt, this._model.resources.object.push(HH), this
+       }
+       withBuild(HH, BH, LH) {
+         return this._model.build = this._model.build ?? new gt, this._model.build.item?.push(new Nt(HH, BH, LH)), this
+       }
+       withUnit(HH) {
+ ... (9 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L1094-L1108` → after: `L15995-L16017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R15995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L15995-L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L15995-L16017) · [Before (L1094-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L1094-L1108)

```diff
- 
-     function sU(UU, XU, zU) {
-       let cU = 0,
-         yU = 0,
-         QU = 0,
-         AU = 0;
-       if ("object" === typeof zU) {
-         const FU = zU.precision ? Math.abs(zU.precision) : 1;
-         zU.width && zU.height ? (cU = zU.height * FU, yU = zU.width * FU) : zU.width && !zU.height ? (yU = zU.width * FU, cU = Math.round(yU / UU.getAspectRatio(XU))) : zU.height && !zU.width ? (cU = zU.height * FU, yU = Math.round(cU * UU.getAspectRatio(XU))) : (yU = Math.round( … [truncated]
-       } else isNaN(zU) || (cU = zU, yU = zU, QU = zU, AU = zU);
-       return yU && (yU = Math.floor(yU)), cU && (cU = Math.floor(cU)), QU && (QU = Math.floor(QU)), AU && (AU = Math.floor(AU)), {
-         height: 0 | cU,
-         width: 0 | yU,
-         finalWidth: 0 | QU,
-         finalHeight: 0 | AU
+     Dt.KnownMetaSet = new Set(Ut.KnownMeta.map((HH => HH.toLowerCase())));
+     class wt {
+       withContentType(HH) {
+         this._cts || (this._cts = new Qt);
+         const BH = this._cts.items;
+         return BH.some((BH => BH.ext === HH.ext && BH.ct === HH.ct)) || BH.push(HH), this
+       }
+       withRelationship(HH) {
+         this._rs || (this._rs = new Mt);
+         const BH = this._rs.items;
+         return BH.some((BH => BH.id === HH.id)) || BH.push(HH), this.withContentType(new Wt("rels", zt.Relationships)), this
+       }
+       withModel(HH) {
+         return HH instanceof Dt && (HH = HH.build()), this._m = HH, this.withContentType(new Wt("model", zt.Model)), this
+       }
+       build() {
+ ... (7 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L1111-L1124` → after: `L16020-L16192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L16020-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L16020-L16192) · [Before (L1111-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L1111-L1124)

```diff
-     const nU = {
-       CreateScreenshot: fU,
-       CreateScreenshotAsync: iU,
-       CreateScreenshotWithResizeAsync: HU,
-       CreateScreenshotUsingRenderTarget: MU,
-       CreateScreenshotUsingRenderTargetAsync: vU,
-       CreateScreenshotForFrameGraphAsync: VU
-     };
-     let mU = !1;
- 
-     function lU() {
-       if (mU) return;
-       mU = !0;
-       IU.j.CreateScreenshot = fU, IU.j.CreateScreenshotAsync = iU, IU.j.CreateScreenshotUsingRenderTarget = MU, IU.j.CreateScreenshotUsingRenderTargetAsync = vU
+     class Zt {
+       constructor(HH) {
+         this._o = HH
+       }
+       get options() {
+         return this._o
+       }
+       async serializeAsync(HH) {
+         const BH = await this.ensureZipLibReadyAsync();
+         if (!BH) return;
+         const LH = BH.Zip,
+           AH = BH.ZipDeflate;
+         if (!LH || !AH) throw new Error("fflate Zip / ZipDeflate not available");
+         const rH = function(HH, BH, LH) {
+           const rH = new AH(BH, {
+             level: 6
+ ... (157 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L1126` → after: `L16194-L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R16194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L16194-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/257.js#L16194-L16197) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/257.js#L1126)

```diff
-     lU()
+     it.DefaultOptions = {
+       unit: rt.meter,
+       exportInstances: !1
+     }, it._PositionKind = "position", it._R_BJS_TO_3MF = NH.e.RotationX(Math.PI / 2).multiply(NH.e.Scaling(1, -1, 1))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/258.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/258.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44)

#### 1. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L4)

```diff
-   38502: (UU, XU, zU) => {
+   37989: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L8)

```diff
-     var cU = zU(38505);
+     var AH = LH(37997);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L10-L13` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L10-L11) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L10-L13)

```diff
-       static GetPlanes(UU) {
-         const XU = [];
-         for (let zU = 0; zU < 6; zU++) XU.push(new cU.d(0, 0, 0, 0));
-         return yU.GetPlanesToRef(UU, XU), XU
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L15` → after: `L13-L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L13-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L13-L1403) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L15)

```diff
-       static GetNearPlaneToRef(UU, XU) {
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     rH.Instances = [], rH.OnEnginesDisposedObservable = new AH.d, rH._LastCreatedScene = null, rH.UseFallbackTexture = !0, rH.FallbackTexture = ""
+   },
+   37982: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => AH
+     });
+     class AH {
+       static SetMatrixPrecision(HH) {
+         if (AH.MatrixTrackPrecisionChange = !1, HH && !AH.MatrixUse64Bits && AH.MatrixTrackedMatrices)
+           for (let BH = 0; BH < AH.MatrixTrackedMatrices.length; ++BH) {
+             const HH = AH.MatrixTrackedMatrices[BH],
+               LH = HH._m;
+ ... (1375 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L17` → after: `L1405-L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1405-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1405-L1691) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L17)

```diff
-         XU.normal.x = zU[3] + zU[2], XU.normal.y = zU[7] + zU[6], XU.normal.z = zU[11] + zU[10], XU.d = zU[15] + zU[14], XU.normalize()
+         return SH.x = HH * hH[0] + BH * hH[4] + LH * hH[8], SH.y = HH * hH[1] + BH * hH[5] + LH * hH[9], SH.z = HH * hH[2] + BH * hH[6] + LH * hH[10], SH.w = AH, SH
+       }
+       static FromVector3(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return new YH(HH._x, HH._y, HH._z, BH)
+       }
+       static Dot(HH, BH) {
+         return HH.x * BH.x + HH.y * BH.y + HH.z * BH.z + HH.w * BH.w
+       }
+     }
+     YH._V8PerformanceHack = new YH(.5, .5, .5, .5), YH._ZeroReadOnly = YH.Zero();
+     class uH {
+       get x() {
+         return this._x
+       }
+       set x(HH) {
+ ... (271 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L19-L21` → after: `L1693-L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1693-L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1693-L1695) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L19-L21)

```diff
-       static GetFarPlaneToRef(UU, XU) {
-         const zU = UU.m;
-         XU.normal.x = zU[3] - zU[2], XU.normal.y = zU[7] - zU[6], XU.normal.z = zU[11] - zU[10], XU.d = zU[15] - zU[14], XU.normalize()
+       static FromRotationMatrix(HH) {
+         const BH = new uH;
+         return uH.FromRotationMatrixToRef(HH, BH), BH
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L23-L25` → after: `L1697-L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1697-L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1697-L1710) · [Before (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L23-L25)

```diff
-       static GetLeftPlaneToRef(UU, XU) {
-         const zU = UU.m;
-         XU.normal.x = zU[3] + zU[0], XU.normal.y = zU[7] + zU[4], XU.normal.z = zU[11] + zU[8], XU.d = zU[15] + zU[12], XU.normalize()
+       static FromRotationMatrixToRef(HH, BH) {
+         const LH = HH.m,
+           AH = LH[0],
+           rH = LH[4],
+           SH = LH[8],
+           hH = LH[1],
+           tH = LH[5],
+           zH = LH[9],
+           CH = LH[2],
+           EH = LH[6],
+           XH = LH[10],
+           GH = AH + tH + XH;
+         let YH;
+         return GH > 0 ? (YH = .5 / Math.sqrt(GH + 1), BH._w = .25 / YH, BH._x = (EH - zH) * YH, BH._y = (SH - CH) * YH, BH._z = (hH - rH) * YH, BH._isDirty = !0) : AH > tH && AH > XH ? (YH = 2 * Math.sqrt(1 + AH - tH - XH), BH._w = (EH - zH) / YH, BH._x = .25 * YH, BH._y = (rH +  … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L27-L29` → after: `L1712-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1712-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1712-L1713) · [Before (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L27-L29)

```diff
-       static GetRightPlaneToRef(UU, XU) {
-         const zU = UU.m;
-         XU.normal.x = zU[3] - zU[0], XU.normal.y = zU[7] - zU[4], XU.normal.z = zU[11] - zU[8], XU.d = zU[15] - zU[12], XU.normalize()
+       static Dot(HH, BH) {
+         return HH._x * BH._x + HH._y * BH._y + HH._z * BH._z + HH._w * BH._w
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L31-L33` → after: `L1715-L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1715-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1715-L1718) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L31-L33)

```diff
-       static GetTopPlaneToRef(UU, XU) {
-         const zU = UU.m;
-         XU.normal.x = zU[3] - zU[1], XU.normal.y = zU[7] - zU[5], XU.normal.z = zU[11] - zU[9], XU.d = zU[15] - zU[13], XU.normalize()
+       static AreClose(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
+         const AH = uH.Dot(HH, BH);
+         return 1 - AH * AH <= LH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L35-L37` → after: `L1720-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1720-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1720-L1722) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L35-L37)

```diff
-       static GetBottomPlaneToRef(UU, XU) {
-         const zU = UU.m;
-         XU.normal.x = zU[3] + zU[1], XU.normal.y = zU[7] + zU[5], XU.normal.z = zU[11] + zU[9], XU.d = zU[15] + zU[13], XU.normalize()
+       static SmoothToRef(HH, BH, LH, AH, rH) {
+         let SH = 0 === AH ? 1 : LH / AH;
+         return SH = (0, tH.Clamp)(SH, 0, 1), uH.SlerpToRef(HH, BH, SH, rH), rH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L39-L40` → after: `L1724-L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1724-L1725) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L39-L40)

```diff
-       static GetPlanesToRef(UU, XU) {
-         yU.GetNearPlaneToRef(UU, XU[0]), yU.GetFarPlaneToRef(UU, XU[1]), yU.GetLeftPlaneToRef(UU, XU[2]), yU.GetRightPlaneToRef(UU, XU[3]), yU.GetTopPlaneToRef(UU, XU[4]), yU.GetBottomPlaneToRef(UU, XU[5])
+       static Zero() {
+         return new uH(0, 0, 0, 0)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L42-L45` → after: `L1727-L1728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1727-L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1727-L1728) · [Before (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L42-L45)

```diff
-       static IsPointInFrustum(UU, XU) {
-         for (let zU = 0; zU < 6; zU++)
-           if (XU[zU].dotCoordinate(UU) < 0) return !1;
-         return !0
+       static Inverse(HH) {
+         return new uH(-HH._x, -HH._y, -HH._z, HH._w)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L47-L56` → after: `L1730-L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1730-L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1730-L1731) · [Before (L47-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L47-L56)

```diff
-     }
-   },
-   38505: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => yU
-     });
-     var cU = zU(37819);
-     class yU {
-       constructor(UU, XU, zU, yU) {
-         this.normal = new cU.q(UU, XU, zU), this.d = yU
+       static InverseToRef(HH, BH) {
+         return BH.set(-HH._x, -HH._y, -HH._z, HH._w), BH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L58-L59` → after: `L1733-L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1733-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1733-L1734) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L58-L59)

```diff
-       cyU() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       static Identity() {
+         return new uH(0, 0, 0, 1)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L61-L62` → after: `L1736-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1736-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1736-L1737) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L61-L62)

```diff
-       clone() {
-         return new yU(this.normal.x, this.normal.y, this.normal.z, this.d)
+       static IsIdentity(HH) {
+         return HH && 0 === HH._x && 0 === HH._y && 0 === HH._z && 1 === HH._w
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L64-L65` → after: `L1739-L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1739-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1739-L1740) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L64-L65)

```diff
-       getClassName() {
-         return "Plane"
+       static RotationAxis(HH, BH) {
+         return uH.RotationAxisToRef(HH, BH, new uH)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L67-L69` → after: `L1742-L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1742-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1742-L1745) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L67-L69)

```diff
-       getHashCode() {
-         let UU = this.normal.getHashCode();
-         return UU = 397 * UU ^ this.d, UU
+       static RotationAxisToRef(HH, BH, LH) {
+         LH._w = Math.cos(BH / 2);
+         const AH = Math.sin(BH / 2) / HH.length();
+         return LH._x = HH._x * AH, LH._y = HH._y * AH, LH._z = HH._z * AH, LH._isDirty = !0, LH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L71-L74` → after: `L1747-L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1747-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1747-L1748) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L71-L74)

```diff
-       normalize() {
-         const UU = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
-         let XU = 0;
-         return 0 !== UU && (XU = 1 / UU), this.normal.x *= XU, this.normal.y *= XU, this.normal.z *= XU, this.d *= XU, this
+       static FromArray(HH, BH) {
+         return BH || (BH = 0), new uH(HH[BH], HH[BH + 1], HH[BH + 2], HH[BH + 3])
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L76-L87` → after: `L1750-L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1750-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1750-L1850) · [Before (L76-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L76-L87)

```diff
-       transform(UU) {
-         const XU = yU._TmpMatrix;
-         UU.invertToRef(XU);
-         const zU = XU.m,
-           cU = this.normal.x,
-           QU = this.normal.y,
-           AU = this.normal.z,
-           FU = this.d,
-           oU = cU * zU[0] + QU * zU[1] + AU * zU[2] + FU * zU[3],
-           DU = cU * zU[4] + QU * zU[5] + AU * zU[6] + FU * zU[7],
-           EU = cU * zU[8] + QU * zU[9] + AU * zU[10] + FU * zU[11],
-           YU = cU * zU[12] + QU * zU[13] + AU * zU[14] + FU * zU[15];
+       static FromArrayToRef(HH, BH, LH) {
+         return LH._x = HH[BH], LH._y = HH[BH + 1], LH._z = HH[BH + 2], LH._w = HH[BH + 3], LH._isDirty = !0, LH
+       }
+       static FromFloatsToRef(HH, BH, LH, AH, rH) {
+         return rH.SBH(HH, BH, LH, AH), rH
+       }
+       static FromEulerAngles(HH, BH, LH) {
+         const AH = new uH;
+         return uH.RotationYawPitchRollToRef(BH, HH, LH, AH), AH
+       }
+       static FromEulerAnglesToRef(HH, BH, LH, AH) {
+         return uH.RotationYawPitchRollToRef(BH, HH, LH, AH), AH
+       }
+       static FromEulerVector(HH) {
+         const BH = new uH;
+         return uH.RotationYawPitchRollToRef(HH._y, HH._x, HH._z, BH), BH
+ ... (85 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L90-L91` → after: `L1853-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1853-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1853-L1886) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L90-L91)

```diff
-       dotCoordinate(UU) {
-         return this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z + this.d
+       static Hermite1stDerivative(HH, BH, LH, AH, rH) {
+         const SH = new uH;
+         return this.Hermite1stDerivativeToRef(HH, BH, LH, AH, rH, SH), SH
+       }
+       static Hermite1stDerivativeToRef(HH, BH, LH, AH, rH, SH) {
+         const hH = rH * rH;
+         return SH._x = 6 * (hH - rH) * HH._x + (3 * hH - 4 * rH + 1) * BH._x + 6 * (-hH + rH) * LH._x + (3 * hH - 2 * rH) * AH._x, SH._y = 6 * (hH - rH) * HH._y + (3 * hH - 4 * rH + 1) * BH._y + 6 * (-hH + rH) * LH._y + (3 * hH - 2 * rH) * AH._y, SH._z = 6 * (hH - rH) * HH._z + ( … [truncated]
+       }
+       static Normalize(HH) {
+         const BH = uH.Zero();
+         return uH.NormalizeToRef(HH, BH), BH
+       }
+       static NormalizeToRef(HH, BH) {
+         return HH.normalizeToRef(BH), BH
+       }
+       static Clamp(HH, BH, LH) {
+ ... (18 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L93` → after: `L1888-L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1888-L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1888-L1894) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L93)

```diff
-       copyFromPoints(UU, XU, zU) {
+       static Maximize() {
+         throw new ReferenceError("Quaternion.Maximize does not make sense")
+       }
+       static Distance(HH, BH) {
+         return Math.sqrt(uH.DistanceSquared(HH, BH))
+       }
+       static DistanceSquared(HH, BH) {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L97-L99` → after: `L1898-L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1898-L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1898-L1957) · [Before (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L97-L99)

```diff
-           AU = zU.x - UU.x,
-           FU = zU.y - UU.y,
-           oU = zU.z - UU.z,
+           SH = HH.w - BH.w;
+         return LH * LH + AH * AH + rH * rH + SH * SH
+       }
+       static Center(HH, BH) {
+         return uH.CenterToRef(HH, BH, uH.Zero())
+       }
+       static CenterToRef(HH, BH, LH) {
+         return LH.SBH((HH.x + BH.x) / 2, (HH.y + BH.y) / 2, (HH.z + BH.z) / 2, (HH.w + BH.w) / 2)
+       }
+     }
+     uH._V8PerformanceHack = new uH(.5, .5, .5, .5);
+     class QH {
+       static get Use64Bits() {
+         return SH.e.MatrixUse64Bits
+       }
+       get m() {
+ ... (44 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L103-L105` → after: `L1961-L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1961-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L1961-L2298) · [Before (L103-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L103-L105)

```diff
-           NU = Math.sqrt(DU * DU + EU * EU + YU * YU);
-         let IU;
-         return IU = 0 !== NU ? 1 / NU : 0, this.normal.x = DU * IU, this.normal.y = EU * IU, this.normal.z = YU * IU, this.d = -(this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z), this
+           PH = CH * WH - YH * GH,
+           TH = CH * QH - XH * YH,
+           UH = CH * uH - YH * EH;
+         return BH * +(hH * MH - tH * xH + zH * vH) + LH * -(SH * MH - tH * PH + zH * TH) + AH * +(SH * xH - hH * PH + zH * UH) + rH * -(SH * vH - hH * TH + tH * UH)
+       }
+       toString() {
+         return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
+       }
+       toArray() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         if (!HH) return this._m;
+         const LH = this._m;
+         for (let AH = 0; AH < 16; AH++) HH[BH + AH] = LH[AH];
+         return this
+       }
+ ... (322 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L107-L108` → after: `L2300-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2300-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2300-L2304) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L107-L108)

```diff
-       isFrontFacingTo(UU, XU) {
-         return cU.q.Dot(this.normal, UU) <= XU
+       toNormalMatrix(HH) {
+         const BH = WH.Matrix[0];
+         this.invertToRef(BH), BH.transposeToRef(HH);
+         const LH = HH._m;
+         return QH.FromValuesToRef(LH[0], LH[1], LH[2], 0, LH[4], LH[5], LH[6], 0, LH[8], LH[9], LH[10], 0, 0, 0, 0, 1, HH), HH
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L110-L111` → after: `L2306-L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2306-L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2306-L2328) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L110-L111)

```diff
-       signedDistanceTo(UU) {
-         return cU.q.Dot(UU, this.normal) + this.d
+       getRotationMatrix() {
+         const HH = new QH;
+         return this.getRotationMatrixToRef(HH), HH
+       }
+       getRotationMatrixToRef(HH) {
+         const BH = WH.lu[0];
+         if (!this.decompose(BH)) return QH.IdentityToRef(HH), HH;
+         const LH = this._m,
+           AH = 1 / BH._x,
+           rH = 1 / BH._y,
+           SH = 1 / BH._z;
+         return QH.FromValuesToRef(LH[0] * AH, LH[1] * AH, LH[2] * AH, 0, LH[4] * rH, LH[5] * rH, LH[6] * rH, 0, LH[8] * SH, LH[9] * SH, LH[10] * SH, 0, 0, 0, 0, 1, HH), HH
+       }
+       toggleModelMatrixHandInPlace() {
+         const HH = this._m;
+         return HH[2] *= -1, HH[6] *= -1, HH[8] *= -1, HH[9] *= -1, HH[14] *= -1, this.markAsUpdated(), this
+ ... (7 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L114` → after: `L2331-L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2331-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2331-L2333) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L114)

```diff
-         return new yU(UU[0], UU[1], UU[2], UU[3])
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const LH = new QH;
+         return QH.FromArrayToRef(HH, BH, LH), LH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L116-L118` → after: `L2335-L2337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2335-L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2335-L2337) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L116-L118)

```diff
-       static FromPoints(UU, XU, zU) {
-         const cU = new yU(0, 0, 0, 0);
-         return cU.copyFromPoints(UU, XU, zU), cU
+       static FromArrayToRef(HH, BH, LH) {
+         for (let AH = 0; AH < 16; AH++) LH._m[AH] = HH[AH + BH];
+         return LH.markAsUpdated(), LH
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L120-L122` → after: `L2339-L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2339-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2339-L2340) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L120-L122)

```diff
-       static FromPositionAndNormal(UU, XU) {
-         const zU = new yU(0, 0, 0, 0);
-         return this.FromPositionAndNormalToRef(UU, XU, zU)
+       static FromFloat32ArrayToRefScaled(HH, BH, LH, AH) {
+         return AH._m[0] = HH[0 + BH] * LH, AH._m[1] = HH[1 + BH] * LH, AH._m[2] = HH[2 + BH] * LH, AH._m[3] = HH[3 + BH] * LH, AH._m[4] = HH[4 + BH] * LH, AH._m[5] = HH[5 + BH] * LH, AH._m[6] = HH[6 + BH] * LH, AH._m[7] = HH[7 + BH] * LH, AH._m[8] = HH[8 + BH] * LH, AH._m[9] = HH … [truncated]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L124-L125` → after: `L2342-L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2342-L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2342-L2343) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L124-L125)

```diff
-       static FromPositionAndNormalToRef(UU, XU, zU) {
-         return zU.normal.YL(XU), zU.normal.normalize(), zU.d = -UU.dot(zU.normal), zU
+       static get IdentityReadOnly() {
+         return QH._IdentityReadOnly
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L127-L129` → after: `L2345-L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2345-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2345-L2347) · [Before (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L127-L129)

```diff
-       static SignedDistanceToPlaneFromPositionAndNormal(UU, XU, zU) {
-         const yU = -(XU.x * UU.x + XU.y * UU.y + XU.z * UU.z);
-         return cU.q.Dot(zU, XU) + yU
+       static FromValuesToRef(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH) {
+         const MH = WH._m;
+         MH[0] = HH, MH[1] = BH, MH[2] = LH, MH[3] = AH, MH[4] = rH, MH[5] = SH, MH[6] = hH, MH[7] = tH, MH[8] = zH, MH[9] = CH, MH[10] = EH, MH[11] = XH, MH[12] = GH, MH[13] = YH, MH[14] = uH, MH[15] = QH, WH.markAsUpdated()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L131-L172` → after: `L2349-L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2349-L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2349-L2443) · [Before (L131-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L131-L172)

```diff
-     }
-     yU._TmpMatrix = cU.e.Identity()
-   },
-   39486: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => QU
-     });
-     var cU = zU(39493);
-     const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
-       ...UU
-     } : null : UU.clone(XU) : null;
-     class QU {
-       static DeepCopy(UU, XU, zU, QU) {
-         let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const FU = function(UU) {
-           const XU = [];
- ... (26 more removed lines; see GitHub link above)
+       static FromValues(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, WH) {
+         const MH = new QH,
+           xH = MH._m;
+         return xH[0] = HH, xH[1] = BH, xH[2] = LH, xH[3] = AH, xH[4] = rH, xH[5] = SH, xH[6] = hH, xH[7] = tH, xH[8] = zH, xH[9] = CH, xH[10] = EH, xH[11] = XH, xH[12] = GH, xH[13] = YH, xH[14] = uH, xH[15] = WH, MH.markAsUpdated(), MH
+       }
+       static Compose(HH, BH, LH) {
+         const AH = new QH;
+         return QH.ComposeToRef(HH, BH, LH, AH), AH
+       }
+       static ComposeToRef(HH, BH, LH, AH) {
+         const rH = AH._m,
+           SH = BH._x,
+           hH = BH._y,
+           tH = BH._z,
+           zH = BH._w,
+           CH = SH + SH,
+ ... (79 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L176-L177` → after: `L2736-L2743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2736-L2743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2736-L2743) · [Before (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L176-L177)

```diff
-   },
-   38649: (UU, XU, zU) => {
+     QH._IdentityReadOnly = QH.Identity();
+     class WH {}
+     WH.lu = (0, rH.g)(11, GH.Zero), WH.Matrix = (0, rH.g)(2, QH.Identity), WH.Quaternion = (0, rH.g)(3, uH.Zero);
+     class MH {}
+     MH.Vector2 = (0, rH.g)(3, XH.Zero), MH.lu = (0, rH.g)(13, GH.Zero), MH.Vector4 = (0, rH.g)(3, YH.Zero), MH.Quaternion = (0, rH.g)(3, uH.Zero), MH.Matrix = (0, rH.g)(8, QH.Identity);
+     const xH = QH.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
+     let vH = !1;
+ 
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L179-L182` → after: `L2745-L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2745-L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2745-L2780) · [Before (L179-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L179-L182)

```diff
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
-         const XU = 16 * Math.random() | 0;
-         return ("x" === UU ? XU : 3 & XU | 8).toString(16)
-       }))
+       vH || (vH = !0, Object.defineProperties(XH.prototype, {
+         dimension: {
+           value: [2]
+         },
+         rank: {
+           value: 1
+         }
+       }), Object.defineProperties(GH.prototype, {
+         dimension: {
+           value: [3]
+         },
+         rank: {
+           value: 1
+         }
+       }), Object.defineProperties(YH.prototype, {
+         dimension: {
+ ... (20 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L188` → after: `L2783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2783) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L188)

```diff
-   39493: (UU, XU, zU) => {
+   37997: (HH, BH, LH) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L190` → after: `L2785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2785) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L190)

```diff
-       b: () => cU
+       d: () => hH
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L193-L242` → after: `L2789-L2915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R2789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L2789-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/258.js#L2789-L2915) · [Before (L193-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/258.js#L193-L242)

```diff
-       static _CheckLimit(UU, XU) {
-         let zU = cU._LogLimitOutputs[UU];
-         return zU ? zU.current++ : (zU = {
-           limit: XU,
-           current: 1
-         }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
-       }
-       static _GenerateLimitMessage(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const zU = cU._LogLimitOutputs[UU];
-         if (!zU || !cU.MessageLimitReached) return;
-         const yU = this._Levels[XU];
-         zU.current === zU.limit && cU[yU.name](cU.MessageLimitReached.replace(/%LIMIT%/g, "" + zU.limit).replace(/%TYPE%/g, yU.name ?? ""))
-       }
-       static _AddLogEntry(UU) {
-         cU._LogCache = UU + cU._LogCache, cU.OnNewCacheEntry && cU.OnNewCacheEntry(UU)
- ... (34 more removed lines; see GitHub link above)
+       constructor(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = arguments.length > 2 ? arguments[2] : void 0,
+           AH = arguments.length > 3 ? arguments[3] : void 0;
+         this.initialize(HH, BH, LH, AH)
+       }
+       initialize(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = arguments.length > 2 ? arguments[2] : void 0,
+           AH = arguments.length > 3 ? arguments[3] : void 0;
+         return this.mask = HH, this.skipNextObservers = BH, this.target = LH, this.currentTarget = AH, this
+       }
+     }
+     class SH {
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+ ... (111 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/259.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/259.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/259.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/259.js#L2)

```diff
- export const ids = [258, 259];
+ export const ids = [259];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/259.js#L4-L722) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/259.js#L4)

```diff
-   63952: (UU, XU, zU) => {
+   38074: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => XH,
+       g: () => GH,
+       j: () => QH,
+       m: () => YH
+     });
+     var AH = LH(37974),
+       rH = LH(37972),
+       SH = LH(38002),
+       hH = LH(38012);
+ 
+     function tH(HH) {
+       return Math.pow(HH, rH.f)
+     }
+ 
+ ... (703 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6-L197` → after: `L724-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L724-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/259.js#L724-L747) · [Before (L6-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/259.js#L6-L197)

```diff
-       RegisterShaderMaterial: () => cU.d,
-       ShaderMaterial: () => cU.o,
-       ShaderMaterialCreateFromSnippetAsync: () => cU.h,
-       ShaderMaterialParse: () => cU.n,
-       ShaderMaterialParseFromFileAsync: () => cU.i,
-       ShaderMaterialParseFromSnippetAsync: () => cU.k
-     });
-     var cU = zU(41549);
-     (0, cU.d)()
-   },
-   38502: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => yU
-     });
-     var cU = zU(38505);
-     class yU {
- ... (176 more removed lines; see GitHub link above)
+       Clamp: () => GH,
+       DeltaAngle: () => vH,
+       Denormalize: () => xH,
+       ExtractAsInt: () => AH,
+       Hermite: () => EH,
+       Hermite1stDerivative: () => XH,
+       HighestCommonFactor: () => kH,
+       ILog2: () => QH,
+       InverseLerp: () => CH,
+       Lerp: () => tH,
+       LerpAngle: () => zH,
+       MoveTowards: () => UH,
+       MoveTowardsAngle: () => VH,
+       Normalize: () => MH,
+       NormalizeRadians: () => YH,
+       OutsideRange: () => SH,
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L200` → after: `L750-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L750-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/259.js#L750-L759) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/259.js#L200)

```diff
-   39493: (UU, XU, zU) => {
+   37974: (HH, BH, LH) => {
+     function AH(HH, BH) {
+       const LH = [];
+       for (let AH = 0; AH < HH; ++AH) LH.push(BH());
+       return LH
+     }
+ 
+     function rH(HH, BH) {
+       return AH(HH, BH)
+     }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L202` → after: `L761-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L761-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/259.js#L761-L763) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/259.js#L202)

```diff
-       b: () => cU
+       d: () => AH,
+       g: () => rH,
+       i: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L204-L269` → after: `L765-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L765-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/259.js#L765-L801) · [Before (L204-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/259.js#L204-L269)

```diff
-     class cU {
-       static _CheckLimit(UU, XU) {
-         let zU = cU._LogLimitOutputs[UU];
-         return zU ? zU.current++ : (zU = {
-           limit: XU,
-           current: 1
-         }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
-       }
-       static _GenerateLimitMessage(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const zU = cU._LogLimitOutputs[UU];
-         if (!zU || !cU.MessageLimitReached) return;
-         const yU = this._Levels[XU];
-         zU.current === zU.limit && cU[yU.name](cU.MessageLimitReached.replace(/%LIMIT%/g, "" + zU.limit).replace(/%TYPE%/g, yU.name ?? ""))
-       }
-       static _AddLogEntry(UU) {
- ... (50 more removed lines; see GitHub link above)
+     const SH = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function hH(HH, BH) {
+       const LH = SH.map((LH => function(HH, BH, LH) {
+         const AH = HH[BH];
+         if ("function" !== typeof AH) return null;
+         const rH = function() {
+           const AH = HH.length,
+             SH = rH.previous.apply(HH, arguments);
+           return LH(BH, AH), SH
+         };
+         return AH.next = rH, rH.previous = AH, HH[BH] = rH, () => {
+           const LH = rH.previous;
+           if (!LH) return;
+           const AH = rH.next;
+           AH ? (LH.next = AH, AH.previous = LH) : (LH.next = void 0, HH[BH] = LH), rH.next = void 0, rH.previous = void 0
+ ... (21 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/260.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/260.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L4)

```diff
-   38557: (UU, XU, zU) => {
+   37989: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L6-L7)

```diff
-       c: () => YU,
-       f: () => AU
+       d: () => rH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L9-L3663` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L8-L11) · [Before (L9-L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L9-L3663)

```diff
-     var cU = zU(9808),
-       yU = zU(9782),
-       QU = zU(344);
-     const AU = {
-       "Maple Door": {
-         positions: [{
-           block: "Maple Door",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Maple Door Top",
-           x: 0,
-           y: 1,
-           z: 0
-         }]
- ... (3639 more removed lines; see GitHub link above)
+     var AH = LH(37997);
+     class rH {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3665-L3742` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L13-L14) · [Before (L3665-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3665-L3742)

```diff
-     }
- 
-     function DU(UU) {
-       const XU = `_${UU} Back`,
-         zU = `_${UU} Dish`;
-       return {
-         [UU]: {
-           positions: [{
-             block: UU,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: XU,
-             x: 0,
-             y: 0,
- ... (62 more removed lines; see GitHub link above)
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3745-L3765` → after: `L17-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L17-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L17-L57) · [Before (L3745-L3765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3745-L3765)

```diff
- 
-     function EU(UU) {
-       const XU = `Small ${UU} Pod`;
-       return {
-         [XU]: {
-           positions: [{
-             block: XU,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_Small ${UU} Pod Mid`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
- ... (5 more removed lines; see GitHub link above)
+     rH.Instances = [], rH.OnEnginesDisposedObservable = new AH.d, rH._LastCreatedScene = null, rH.UseFallbackTexture = !0, rH.FallbackTexture = ""
+   },
+   39588: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => SH
+     });
+     var AH = LH(39595);
+     const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
+       ...HH
+     } : null : HH.clone(BH) : null;
+     class SH {
+       static DeepCopy(HH, BH, LH, SH) {
+         let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const tH = function(HH) {
+           const BH = [];
+           do {
+ ... (25 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3769-L3772` → after: `L61-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L61-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L61-L67) · [Before (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3769-L3772)

```diff
-     for (const NU in AU) {
-       for (const UU of AU[NU].positions)
-         if (UU.id = yU.h[UU.block].id, NU === UU.block && (0 !== UU.x || 0 !== UU.y || 0 !== UU.z)) throw new Error(`Multiblock "${NU}" has main block "${UU.block}" at non-origin position (${UU.x}, ${UU.y}, ${UU.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       AU[yU.h[NU].id] = AU[NU]
+   },
+   38790: (HH, BH, LH) => {
+     function AH() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
+         const BH = 16 * Math.random() | 0;
+         return ("x" === HH ? BH : 3 & BH | 8).toString(16)
+       }))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3774-L3790` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L69-L71) · [Before (L3774-L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3774-L3790)

```diff
-     const YU = {};
-     for (const NU in AU)
-       for (const {
-           block: UU,
-           x: XU,
-           y: zU,
-           z: cU
-         }
-         of AU[NU].positions) {
-         const QU = {
-           mainMultiblock: NU,
-           compX: XU,
-           compY: zU,
-           compZ: cU
-         };
-         YU[UU] = QU, YU[yU.h[UU].id] = QU
- ... (1 more removed lines; see GitHub link above)
+     LH.d(BH, {
+       e: () => AH
+     })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3792` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L73) · [Before (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3792)

```diff
-   38994: (UU, XU, zU) => {
+   39595: (HH, BH, LH) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3794-L3795` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L75) · [Before (L3794-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3794-L3795)

```diff
-       e: () => oU,
-       h: () => FU
+       e: () => AH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3813-L3814` → after: `L78-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L78-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L78-L83) · [Before (L3813-L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3813-L3814)

```diff
-       constructor(UU) {
-         this.model = UU, this.reshapeOffsets = [...AU, [0, -1, 0]]
+       static _CheckLimit(HH, BH) {
+         let LH = AH._LogLimitOutputs[HH];
+         return LH ? LH.current++ : (LH = {
+           limit: BH,
+           current: 1
+         }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3816-L3818` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L85-L90) · [Before (L3816-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3816-L3818)

```diff
-       handles(UU) {
-         const XU = cU.h[UU];
-         return (null === XU || void 0 === XU ? void 0 : XU.model) === this.model && void 0 !== XU.attachedTop
+       static _GenerateLimitMessage(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const LH = AH._LogLimitOutputs[HH];
+         if (!LH || !AH.MessageLimitReached) return;
+         const rH = this._Levels[BH];
+         LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3820-L3821` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L92-L93) · [Before (L3820-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3820-L3821)

```diff
-       affects(UU) {
-         return this.handles(UU) || FU(UU) || (0, QU.u)(cU.h[UU])
+       static _AddLogEntry(HH) {
+         AH._LogCache = HH + AH._LogCache, AH.OnNewCacheEntry && AH.OnNewCacheEntry(HH)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3823-L3835` → after: `L95-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L95-L98) · [Before (L3823-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3823-L3835)

```diff
-       shape(UU, XU, zU, AU, oU) {
-         let DU = this.handles(UU(XU, zU + 1, AU)) ? yU.j : 0;
-         return yU.s.forEach(((oU, EU) => {
-           let {
-             dx: YU,
-             dz: NU
-           } = oU;
-           const IU = UU(XU + YU, zU, AU + NU);
-           (this.handles(IU) || FU(IU) || function(UU, XU) {
-             const zU = cU.h[UU];
-             return (0, QU.u)(zU) && (0, QU.r)(zU.meta.rot) === (0 !== yU.s[XU].dx)
-           }(IU, EU)) && (DU |= 1 << EU)
-         })), (0, cU.j)((0, yU.k)(cU.h[oU].meta.rootName, DU))
+       static _FormatMessage(HH) {
+         const BH = HH => HH < 10 ? "0" + HH : "" + HH,
+           LH = new Date;
+         return "[" + BH(LH.getHours()) + ":" + BH(LH.getMinutes()) + ":" + BH(LH.getSeconds()) + "]: " + HH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3837-L3860` → after: `L100-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L100-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L100-L126) · [Before (L3837-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3837-L3860)

```diff
-     }
-   },
-   38743: (UU, XU, zU) => {
-     function cU(UU, XU) {
-       var zU;
-       XU || (XU = {});
-       const cU = null !== (zU = XU.customAttributes) && void 0 !== zU ? zU : {};
-       var yU, QU, AU;
-       "Gun" === (null === UU || void 0 === UU ? void 0 : UU.type) && (cU.shotsLeft = null !== (yU = null !== (QU = cU.shotsLeft) && void 0 !== QU ? QU : null === (AU = cU.gunStats) || void 0 === AU ? void 0 : AU.clipSize) && void 0 !== yU ? yU : UU.clipSize);
-       if (cU.enchantmentTier && (cU.enchantmentTier = cU.enchantmentTier.toString()), cU.enchantments)
-         for (const YU in cU.enchantments) {
-           const UU = cU.enchantments[YU];
-           if ("number" !== typeof UU) {
-             const XU = parseInt(UU);
-             isNaN(XU) || XU < 0 ? cU.enchantments[YU] = void 0 : cU.enchantments[YU] = XU > 1e9 ? 1e9 : XU
-           }
- ... (8 more removed lines; see GitHub link above)
+       static _LogDisabled(HH, BH) {}
+       static _LogEnabled() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           BH = arguments.length > 1 ? arguments[1] : void 0,
+           LH = arguments.length > 2 ? arguments[2] : void 0;
+         const rH = Array.isArray(BH) ? BH[0] : BH;
+         if (void 0 !== LH && !AH._CheckLimit(rH, LH)) return;
+         const SH = AH._FormatMessage(rH),
+           hH = this._Levels[HH],
+           tH = Array.isArray(BH) ? BH.slice(1) : [];
+         hH.logFunc && hH.logFunc("BJS - " + SH, ...tH);
+         const zH = `<div style='color:${hH.color}'>${SH}</div><br>`;
+         AH._AddLogEntry(zH), AH._GenerateLimitMessage(rH, HH)
+       }
+       static get LogCache() {
+         return AH._LogCache
+ ... (11 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3862-L3868` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L128) · [Before (L3862-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3862-L3868)

```diff
-           const XU = UU.icon,
-             zU = UU.description;
-           var FU, oU, DU, EU;
-           if ("string" !== typeof XU) cU.enchantmentData[YU].icon = null !== (FU = null === XU || void 0 === XU || null === (oU = XU.toString) || void 0 === oU ? void 0 : oU.call(XU)) && void 0 !== FU ? FU : void 0;
-           if ("string" !== typeof zU) cU.enchantmentData[YU].description = null !== (DU = null === zU || void 0 === zU || null === (EU = zU.toString) || void 0 === EU ? void 0 : EU.call(zU)) && void 0 !== DU ? DU : void 0
-         }
-       return XU.customAttributes = cU, XU
+       }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3870-L3872` → after: `L130-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L130-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L130-L142) · [Before (L3870-L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3870-L3872)

```diff
-     zU.d(XU, {
-       e: () => cU
-     })
+     AH.NoneLogLevel = 0, AH.MessageLogLevel = 1, AH.WarningLogLevel = 2, AH.ErrorLogLevel = 4, AH.AllLogLevel = 7, AH.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", AH._LogCache = "", AH._LogLimitOutputs = {}, AH._Levels =  … [truncated]
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
+     }], AH.errorsCount = 0, AH.Log = AH._LogEnabled.bind(AH, AH.MessageLogLevel), AH.Warn = AH._LogEnabled.bind(AH, AH.WarningLogLevel), AH.Error = AH._LogEnabled.bind(AH, AH.ErrorLogLevel)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3874` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L144) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3874)

```diff
-   38989: (UU, XU, zU) => {
+   37997: (HH, BH, LH) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3876-L3880` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L146) · [Before (L3876-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3876-L3880)

```diff
-       c: () => PU,
-       e: () => gU,
-       i: () => oU,
-       j: () => YU,
-       n: () => WU
+       d: () => hH
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3882-L3948` → after: `L148-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L148-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L148-L160) · [Before (L3882-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3882-L3948)

```diff
-     var cU = zU(9782),
-       yU = zU(9821),
-       QU = zU(38994);
-     const AU = (0, cU.j)("Noticeboard"),
-       FU = (0, cU.j)("Standing Noticeboard|meta|rot4|lrud");
- 
-     function oU(UU) {
-       return AU <= UU && UU <= FU
-     }
-     const DU = new Uint8Array(FU - AU + 1);
-     for (let dU = AU; dU <= FU; dU++) DU[dU - AU] = (0, yU.m)(cU.h[dU].meta.metaStr);
-     const EU = 64,
-       YU = EU * EU,
-       [NU, IU, pU, aU] = [0, 1, 2, 3];
- 
-     function tU(UU) {
- ... (51 more removed lines; see GitHub link above)
+     const AH = "undefined" !== typeof WeakRef;
+     class rH {
+       constructor(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = arguments.length > 2 ? arguments[2] : void 0,
+           AH = arguments.length > 3 ? arguments[3] : void 0;
+         this.initialize(HH, BH, LH, AH)
+       }
+       initialize(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = arguments.length > 2 ? arguments[2] : void 0,
+           AH = arguments.length > 3 ? arguments[3] : void 0;
+         return this.mask = HH, this.skipNextObservers = BH, this.target = LH, this.currentTarget = AH, this
```
