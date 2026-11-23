# Changed — Bundle Modifications Report (Part 030 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `30 / 104` (**293** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 029](part-029.md) · [Part 031 →](part-031.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/221.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/221.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928)

#### 5. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L59-L78` → after: `L175-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L175-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L175-L197) · [Before (L59-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L59-L78)

```diff
-     const xk = new Map;
-     let nk = null,
-       Uk = 0;
- 
-     function Hk() {
-       return Uk
-     }
- 
-     function wk(kk) {
-       const ek = null !== nk && nk.key === Kk(kk.pos) ? nk.type : null;
-       if (null === ek) return kk;
-       let ik = null;
-       if ("Iron" === ek) {
-         const {
-           cachedPasskey: ek,
-           ...Dk
- ... (4 more removed lines; see GitHub link above)
+     oC.get = function(CC) {
+       var zC, ZC;
+       switch (CC.substring(0, 3).toLowerCase()) {
+         case "hsl":
+           zC = oC.get.hsl(CC), ZC = "hsl";
+           break;
+         case "hwb":
+           zC = oC.get.hwb(CC), ZC = "hwb";
+           break;
+         default:
+           zC = oC.get.rgb(CC), ZC = "rgb"
+       }
+       return zC ? {
+         model: ZC,
+         value: zC
+       } : null
+ ... (7 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L81-L84` → after: `L220-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L220-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L220-L226) · [Before (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L81-L84)

```diff
-       return {
-         ...kk,
-         type: ek,
-         ironChest: ik
+       return null
+     }, oC.get.hwb = function(CC) {
+       if (!CC) return null;
+       var zC = CC.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
+       if (zC) {
+         var ZC = parseFloat(zC[4]);
+         return [(parseFloat(zC[1]) % 360 + 360) % 360, qC(parseFloat(zC[2]), 0, 100), qC(parseFloat(zC[3]), 0, 100), qC(isNaN(ZC) ? 1 : ZC, 0, 1)]
```

#### 7. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L88-L102` → after: `L260-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L260-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L260-L286) · [Before (L88-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L88-L102)

```diff
-     function lk(kk) {
-       const ek = Mk(kk),
-         ik = null === ek || void 0 === ek ? void 0 : ek.ownerDbId,
-         Dk = function(kk) {
-           var ek;
-           let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mk(kk);
-           const Dk = Kk(kk),
-             fk = xk.get(Dk);
-           return fk ? fk.lastOpened < (null !== (ek = null === ik || void 0 === ik ? void 0 : ik.passkeyLastUpdated) && void 0 !== ek ? ek : 0) ? (xk.delete(Dk), null) : [...fk.Gb] : null
-         }(kk, ek);
-       return void 0 === ik ? {
-         cachedPasskey: Dk
-       } : {
-         ownerDbId: ik,
-         cachedPasskey: Dk
+     function oC(CC, zC) {
+       if (!(this instanceof oC)) return new oC(CC, zC);
+       if (zC && zC in bC && (zC = null), zC && !(zC in wC)) throw new Error("Unknown model: " + zC);
+       let ZC, qC;
+       if (null == CC) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
+       else if (CC instanceof oC) this.model = CC.model, this.color = [...CC.color], this.valpha = CC.valpha;
+       else if ("string" === typeof CC) {
+         const zC = QC.get(CC);
+         if (null === zC) throw new Error("Unable to parse color from string: " + CC);
+         this.model = zC.model, qC = wC[this.model].channels, this.color = zC.value.slice(0, qC), this.valpha = "number" === typeof zC.value[qC] ? zC.value[qC] : 1
+       } else if (CC.length > 0) {
+         this.model = zC || "rgb", qC = wC[this.model].channels;
+         const ZC = Array.prototype.slice.call(CC, 0, qC);
+         this.color = NC(ZC, qC), this.valpha = "number" === typeof CC[qC] ? CC[qC] : 1
+       } else if ("number" === typeof CC) this.model = "rgb", this.color = [CC >> 16 & 255, CC >> 8 & 255, 255 & CC], this.valpha = 1;
+       else {
+ ... (11 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L104-L144` → after: `L288-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L288-L291) · [Before (L104-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L104-L144)

```diff
-     }(0, mk.m)(bk.c, (kk => {
-       const ek = (0, Pk.i)(bk.c, kk);
-       if (!(0, Pk.e)(ek) || ek.ye) return;
-       if (Uk++, !ek.ne || null === ek.le) return void(nk = null);
-       const ik = Kk(ek.le);
-       nk = {
-         key: ik,
-         type: ek.He
-       }, null !== ek.pe && xk.set(ik, {
-         Gb: [...ek.pe],
-         lastOpened: Date.now()
-       })
-     })), (0, mk.g)((() => {
-       xk.clear(), nk = null, Uk++
-     })), (0, mk.k)((() => {
-       null !== nk && (nk = null, Uk++, Dk.j.tm("chestToggleFromServer", !1, !0))
- ... (25 more removed lines; see GitHub link above)
+       if (fC[this.model])
+         for (qC = wC[this.model].channels, ZC = 0; ZC < qC; ZC++) {
+           const CC = fC[this.model][ZC];
+           CC && (this.color[ZC] = CC(this.color[ZC]))
```

#### 9. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L147-L188` → after: `L369-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L369-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L369-L384) · [Before (L147-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L147-L188)

```diff
-       yk = {
-         writeOnBoard(kk) {
-           var ek;
-           let {
-             pos: ik,
-             text: Dk,
-             textSize: fk
-           } = kk;
-           null === (ek = (0, Sk.g)()) || void 0 === ek || ek.send(rk.e.UpdateBoard, (0, rk.$)({
-             kK: ik,
-             eK: Dk,
-             iK: fk
-           }))
-         },
-         writeBook(kk) {
-           var ek;
- ... (26 more removed lines; see GitHub link above)
+       hexa(CC) {
+         if (void 0 !== CC) return new oC(CC);
+         const zC = this.rgb().round().color;
+         let ZC = Math.round(255 * this.valpha).toString(16).toUpperCase();
+         return 1 === ZC.length && (ZC = "0" + ZC), QC.to.hex(zC) + ZC
+       },
+       rgbNumber() {
+         const CC = this.rgb().color;
+         return (255 & CC[0]) << 16 | (255 & CC[1]) << 8 | 255 & CC[2]
+       },
+       luminosity() {
+         const CC = this.rgb().color,
+           zC = [];
+         for (const [ZC, QC] of CC.entries()) {
+           const CC = QC / 255;
+           zC[ZC] = CC <= .04045 ? CC / 12.92 : ((CC + .055) / 1.055) ** 2.4
```

#### 10. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L209-L218` → after: `L479-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L479-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L479-L482) · [Before (L209-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L209-L218)

```diff
-       const ek = (0, Sk.g)();
-       if (null !== ek) return kk(ek);
-       let ik = null;
-       const Dk = (0, fk.v)((() => {
-         const ek = (0, Sk.g)();
-         null !== ek && null === ik && (Dk(), ik = kk(ek))
-       }));
-       return () => {
-         var kk;
-         Dk(), null === (kk = ik) || void 0 === kk || kk()
+       return function(zC) {
+         return function(CC, zC) {
+           return Number(CC.toFixed(zC))
+         }(zC, CC)
```

#### 11. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L223-L249` → after: `L487-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L487-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L487-L493) · [Before (L223-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L223-L249)

```diff
-       return {
-         current: () => {
-           const ik = (0, Sk.g)();
-           return null === ik ? ek : kk(ik)()
-         },
-         watch: ek => rk((Dk => {
-           const fk = kk(Dk);
-           let Sk = fk();
-           return ek(Sk), ik((() => {
-             const kk = fk();
-             kk !== Sk && (Sk = kk, ek(kk))
-           }))
-         }))
-       }
-     }
-   },
- ... (11 more removed lines; see GitHub link above)
+       CC = Array.isArray(CC) ? CC : [CC];
+       for (const QC of CC)(fC[QC] || (fC[QC] = []))[zC] = ZC;
+       return CC = CC[0],
+         function(QC) {
+           let wC;
+           return void 0 !== QC ? (ZC && (QC = ZC(QC)), wC = this[CC](), wC.color[zC] = QC, wC) : (wC = this[CC]().color[zC], ZC && (wC = ZC(wC)), wC)
+         }
```

#### 12. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L253-L258` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L497-L498) · [Before (L253-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L253-L258)

```diff
-       return {
-         current: () => bk().states[kk].current(),
-         watch: ek => (0, fk.g)((ik => {
-           const Dk = ik.itemBridgeSources.states[kk];
-           return ek(Dk.current()), Dk.watch(ek)
-         }))
+       return function(zC) {
+         return Math.max(0, Math.min(CC, zC))
```

#### 13. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L262-L265` → after: `L502-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L502-L504) · [Before (L262-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L262-L265)

```diff
-     function Pk(kk) {
-       return {
-         watch: ek => (0, fk.g)((ik => ik.itemBridgeSources.events[kk].watch(ek)))
-       }
+     function NC(CC, zC) {
+       for (let ZC = 0; ZC < zC; ZC++) "number" !== typeof CC[ZC] && (CC[ZC] = 0);
+       return CC
```

#### 14. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L268-L297` → after: `L513-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L513-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L513-L571) · [Before (L268-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L268-L297)

```diff
-       states: {
-         inventory: rk("inventory"),
-         hotbar: rk("hotbar"),
-         crafting: rk("crafting"),
-         heldItemAim: rk("heldItemAim")
-       },
-       events: {
-         hotbarSlotRequested: Pk("hotbarSlotRequested"),
-         hotbarScrolled: Pk("hotbarScrolled"),
-         numberKeyPressed: Pk("numberKeyPressed"),
-         inventoryDropRequested: Pk("inventoryDropRequested"),
-         chestToggled: Pk("chestToggled"),
-         chestRefreshed: Pk("chestRefreshed"),
-         inventorySynced: Pk("inventorySynced"),
-         enchantingTableOpened: Pk("enchantingTableOpened")
-       },
- ... (14 more removed lines; see GitHub link above)
+       rgb: {
+         channels: 3,
+         labels: "rgb"
+       },
+       hsl: {
+         channels: 3,
+         labels: "hsl"
+       },
+       hsv: {
+         channels: 3,
+         labels: "hsv"
+       },
+       hwb: {
+         channels: 3,
+         labels: "hwb"
+       },
+ ... (43 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L300-L310` → after: `L589-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L589-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L589-L631) · [Before (L300-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L300-L310)

```diff
-   },
-   40238: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => rk
-     });
-     var Dk = ik(39200);
- 
-     function fk(kk) {
-       return {
-         current: () => kk,
-         watch: () => () => {}
+     bC.rgb.hsl = function(CC) {
+       const zC = CC[0] / 255,
+         ZC = CC[1] / 255,
+         QC = CC[2] / 255,
+         wC = Math.min(zC, ZC, QC),
+         bC = Math.max(zC, ZC, QC),
+         nC = bC - wC;
+       let fC, oC;
+       bC === wC ? fC = 0 : zC === bC ? fC = (ZC - QC) / nC : ZC === bC ? fC = 2 + (QC - zC) / nC : QC === bC && (fC = 4 + (zC - ZC) / nC), fC = Math.min(60 * fC, 360), fC < 0 && (fC += 360);
+       const qC = (wC + bC) / 2;
+       return oC = bC === wC ? 0 : qC <= .5 ? nC / (bC + wC) : nC / (2 - bC - wC), [fC, 100 * oC, 100 * qC]
+     }, bC.rgb.hsv = function(CC) {
+       let zC, ZC, QC, wC, bC;
+       const nC = CC[0] / 255,
+         fC = CC[1] / 255,
+         oC = CC[2] / 255,
+ ... (27 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L312-L545` → after: `L633-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L633-L690) · [Before (L312-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L312-L545)

```diff
-     }
- 
-     function Sk() {}
-     const bk = Object.freeze([0, 0, 0]),
-       rk = {
-         states: {
-           health: fk({
-             health: null,
-             maxHealth: null,
-             shield: null,
-             maxShield: null
-           }),
-           inventory: fk({
-             player: [],
-             chestOrCreative: [],
-             chest: null,
- ... (218 more removed lines; see GitHub link above)
+       var nC, fC;
+       return ZC
+     }, bC.keyword.rgb = function(CC) {
+       return QC[CC]
+     }, bC.rgb.xyz = function(CC) {
+       let zC = CC[0] / 255,
+         ZC = CC[1] / 255,
+         QC = CC[2] / 255;
+       zC = zC > .04045 ? ((zC + .055) / 1.055) ** 2.4 : zC / 12.92, ZC = ZC > .04045 ? ((ZC + .055) / 1.055) ** 2.4 : ZC / 12.92, QC = QC > .04045 ? ((QC + .055) / 1.055) ** 2.4 : QC / 12.92;
+       return [100 * (.4124 * zC + .3576 * ZC + .1805 * QC), 100 * (.2126 * zC + .7152 * ZC + .0722 * QC), 100 * (.0193 * zC + .1192 * ZC + .9505 * QC)]
+     }, bC.rgb.lab = function(CC) {
+       const zC = bC.rgb.xyz(CC);
+       let ZC = zC[0],
+         QC = zC[1],
+         wC = zC[2];
+       ZC /= 95.047, QC /= 100, wC /= 108.883, ZC = ZC > .008856 ? ZC ** (1 / 3) : 7.787 * ZC + 16 / 116, QC = QC > .008856 ? QC ** (1 / 3) : 7.787 * QC + 16 / 116, wC = wC > .008856 ? wC ** (1 / 3) : 7.787 * wC + 16 / 116;
+ ... (42 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L547-L586` → after: `L692-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L692-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L692-L900) · [Before (L547-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L547-L586)

```diff
-   },
-   40161: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => sk,
-       e: () => jk,
-       f: () => dk,
-       i: () => Ak,
-       k: () => Lk
-     });
-     var Dk = ik(38805),
-       fk = ik(1207),
-       Sk = ik(1911),
-       bk = ik(1920),
-       rk = ik(3261),
-       Pk = ik(36391),
-       mk = ik(1302),
- ... (24 more removed lines; see GitHub link above)
+     }, bC.hsv.hsl = function(CC) {
+       const zC = CC[0],
+         ZC = CC[1] / 100,
+         QC = CC[2] / 100,
+         wC = Math.max(QC, .01);
+       let bC, nC;
+       nC = (2 - ZC) * QC;
+       const fC = (2 - ZC) * wC;
+       return bC = ZC * wC, bC /= fC <= 1 ? fC : 2 - fC, bC = bC || 0, nC /= 2, [zC, 100 * bC, 100 * nC]
+     }, bC.hwb.rgb = function(CC) {
+       const zC = CC[0] / 360;
+       let ZC = CC[1] / 100,
+         QC = CC[2] / 100;
+       const wC = ZC + QC;
+       let bC;
+       wC > 1 && (ZC /= wC, QC /= wC);
+ ... (193 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L590-L659` → after: `L943-L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L943-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L943-L948) · [Before (L590-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L590-L659)

```diff
-       var ek;
-       const ik = null === (ek = (0, Mk.g)()) || void 0 === ek ? void 0 : ek.tables;
-       if (void 0 === ik || !pk(kk)) return;
-       const Dk = {
-           displayName: ik.getDisplayName(kk)
-         },
-         fk = ik.getItemStat(kk, "description");
-       void 0 !== fk && null !== fk && (Dk.description = fk);
-       const {
-         rootName: Sk
-       } = ik.getMetaInfo(kk);
-       Sk !== kk && (Dk.rootName = Sk);
-       const bk = ik.getItemStat(kk, "armourReduction");
-       return void 0 !== bk && null !== bk && (Dk.armourReduction = bk), Dk
-     }(0, Mk.u)((kk => {
-       wk = kk
- ... (54 more removed lines; see GitHub link above)
+       const zC = function() {
+           const CC = {},
+             zC = Object.keys(QC);
+           for (let ZC = zC.length, QC = 0; QC < ZC; QC++) CC[zC[QC]] = {
+             distance: -1,
+             parent: null
```

#### 19. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L661-L666` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L950) · [Before (L661-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L661-L666)

```diff
-           return {
-             current: ek,
-             watch: ik => (0, bk.t)((Dk => {
-               Dk.some(Yk) && (kk = null, ik(ek()))
-             }))
-           }
+           return CC
```

#### 20. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L668-L724` → after: `L952-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L952-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L952-L958) · [Before (L668-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L668-L724)

```diff
-         creativeVisibility: (0, bk.p)((function() {
-           const kk = {};
-           for (const fk of null !== (ek = null === (ik = wk) || void 0 === ik ? void 0 : ik.creativeItemIds()) && void 0 !== ek ? ek : []) {
-             var ek, ik, bk, Pk;
-             const mk = (0, rk.h)(fk);
-             if (void 0 === mk) continue;
-             const Mk = null !== (bk = Sk.c.get((0, Dk.e)(mk, "showInCreativeInven"))) && void 0 !== bk ? bk : null === (Pk = wk) || void 0 === Pk ? void 0 : Pk.showInCreativeInvenOf(fk);
-             "boolean" === typeof Mk && (kk[mk] = Mk)
-           }
-           return {
-             publicLobby: (0, fk.I)((0, mk.c)().lobbyName),
-             shownInGame: kk
-           }
-         }), ["connectedGameChanged"], (0, bk.k)("ShowInCreativeInven")),
-         fullInventory: (0, bk.p)(Lk, [], (0, bk.o)("useInventory", "useFullInventory"))
-       },
- ... (41 more removed lines; see GitHub link above)
+         ZC = [CC];
+       for (zC[CC].distance = 0; ZC.length;) {
+         const CC = ZC.pop(),
+           wC = Object.keys(QC[CC]);
+         for (let QC = wC.length, bC = 0; bC < QC; bC++) {
+           const QC = wC[bC],
+             nC = zC[QC]; - 1 === nC.distance && (nC.distance = zC[CC].distance + 1, nC.parent = CC, ZC.unshift(QC))
```

#### 21. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L744-L753` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L961) · [Before (L744-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L744-L753)

```diff
-     }
- 
-     function fk(kk) {
-       return kk instanceof RangeError && /call stack/i.test(kk.message) || kk instanceof Error && "InternalError" === kk.name && /recursion/i.test(kk.message)
-     }
-     const Sk = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
- 
-     function bk(kk) {
-       var ek;
-       return kk instanceof WebAssembly.RuntimeError || kk instanceof Dk || fk(kk) && Sk.test(null !== (ek = kk.stack) && void 0 !== ek ? ek : "")
+       return zC
```

#### 22. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L757-L789` → after: `L965-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L965-L966) · [Before (L757-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L757-L789)

```diff
-       if (bk(kk)) throw kk;
-       console.error(ek, kk)
-     }
- 
-     function Pk(kk, ek, ik, fk, Sk) {
-       if (ek % fk !== 0 || ek + ik > kk.byteLength) throw new Dk(`${Sk}: ${ik} bytes at ${ek}, ${fk}-aligned, outside ${kk.byteLength} bytes of memory`)
-     }
- 
-     function mk(kk, ek, ik, Dk, fk) {
-       return 0 === ik ? null : (Pk(ek, ik, Dk * kk.BYTES_PER_ELEMENT, kk.BYTES_PER_ELEMENT, fk), new kk(ek, ik, Dk))
-     }
- 
-     function Mk(kk, ek, ik, Dk, fk) {
-       return 0 === ek ? null : (Pk(kk, ek, ik, Dk, fk), new DataView(kk, ek, ik))
-     }
-   },
- ... (17 more removed lines; see GitHub link above)
+       return function(ZC) {
+         return zC(CC(ZC))
```

#### 23. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L799-L803` → after: `L971-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L971-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L971-L975) · [Before (L799-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L799-L803)

```diff
-       try {
-         kk(ek)
-       } catch (ik) {
-         console.error("[bloxd-wasm-client] the game chunk's listener failed", ik)
-       }
+       const ZC = [zC[CC].parent, CC];
+       let wC = QC[zC[CC].parent][CC],
+         nC = zC[CC].parent;
+       for (; zC[nC].parent;) ZC.unshift(zC[nC].parent), wC = bC(QC[zC[nC].parent][nC], wC), nC = zC[nC].parent;
+       return wC.conversion = ZC, wC
```

#### 24. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L805-L806` → after: `L977-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L977-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L977-L984) · [Before (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L805-L806)

```diff
- 
-     function Mk() {
+     CC.exports = function(CC) {
+       const zC = wC(CC),
+         ZC = {},
+         QC = Object.keys(zC);
+       for (let wC = QC.length, bC = 0; bC < wC; bC++) {
+         const CC = QC[bC];
+         null !== zC[CC].parent && (ZC[CC] = nC(CC, zC))
+       }
```

#### 25. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L809-L811` → after: `L987-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L987-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L987-L1137) · [Before (L809-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L809-L811)

```diff
- 
-     function Kk(kk) {
-       rk.push(kk), null !== Pk && mk(kk, Pk)
+   },
+   36545: CC => {
+     CC.exports = {
+       aliceblue: [240, 248, 255],
+       antiquewhite: [250, 235, 215],
+       aqua: [0, 255, 255],
+       aquamarine: [127, 255, 212],
+       azure: [240, 255, 255],
+       beige: [245, 245, 220],
+       bisque: [255, 228, 196],
+       black: [0, 0, 0],
+       blanchedalmond: [255, 235, 205],
+       blue: [0, 0, 255],
+       blueviolet: [138, 43, 226],
+       brown: [165, 42, 42],
+       burlywood: [222, 184, 135],
+ ... (135 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L813-L817` → after: `L1139-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L1139-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L1139-L1148) · [Before (L813-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L813-L817)

```diff
- 
-     function xk(kk) {
-       return fk ??= Promise.all([ik.e(72), ik.e(96), ik.e(219), ik.e(77), ik.e(220), ik.e(200), ik.e(95), ik.e(238), ik.e(265), ik.e(198), ik.e(267), ik.e(191), ik.e(197), ik.e(193), ik.e(141), ik.e(87), ik.e(121), ik.e(243), ik.e(56)]).then((() => ik(42177))).then((ek => {
-         ek.loadAudio(kk), Pk = ek;
-         for (const kk of rk) mk(kk, ek);
+   },
+   36525: (CC, zC, ZC) => {
+     var QC = ZC(36531),
+       wC = Array.prototype.concat,
+       bC = Array.prototype.slice,
+       nC = CC.exports = function(CC) {
+         for (var zC = [], ZC = 0, nC = CC.length; ZC < nC; ZC++) {
+           var fC = CC[ZC];
+           QC(fC) ? zC = wC.call(zC, bC.call(fC)) : zC.push(fC)
+         }
```

#### 27. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L819-L835` → after: `L1150-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L1150-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L1150-L1153) · [Before (L819-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L819-L835)

```diff
-       })).catch((kk => {
-         throw fk = null, kk
-       })), fk
-     }
-     async function nk(kk, ek) {
-       try {
-         const ik = await xk(kk);
-         await ik.loadClientGame(ek)
-       } catch (ik) {
-         throw new Dk(ik)
-       }
-     }
- 
-     function Uk(kk, ek) {
-       Sk = {
-         running: kk,
- ... (1 more removed lines; see GitHub link above)
+       };
+     nC.wrap = function(CC) {
+       return function() {
+         return CC(nC(arguments))
```

#### 28. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L838-L855` → after: `L1156-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L1156-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/221.js#L1156-L1159) · [Before (L838-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/221.js#L838-L855)

```diff
- 
-     function Hk() {
-       return bk
-     }
-     async function wk(kk) {
-       const ek = Sk;
-       if ((null === ek || void 0 === ek ? void 0 : ek.running) !== kk) throw new Error("the core's session has ended");
-       const ik = await xk(ek.shell.audio).catch((kk => {
-         throw new Dk(kk)
-       }));
-       if (null !== bk) return bk;
-       if (Sk !== ek || kk.isStopped) throw new Error("the core stopped while the game code loaded");
-       if (bk = ik.startGameHost(kk, ek.shell), null === bk) throw new Error("the core's shared tables didn't read, so the game can't start");
-       return bk
-     }
- 
- ... (2 more removed lines; see GitHub link above)
+   },
+   36531: CC => {
+     CC.exports = function(CC) {
+       return !(!CC || "string" === typeof CC) && (CC instanceof Array || Array.isArray(CC) || CC.length >= 0 && (CC.splice instanceof Function || Object.getOwnPropertyDescriptor(CC, CC.length - 1) && "String" !== CC.constructor.name))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/222.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/222.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783)

#### 1. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/222.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/222.js#L4)

```diff
-   36523: (kk, ek, ik) => {
+   36641: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L6-L7` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/222.js#L6-L10) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/222.js#L6-L7)

```diff
-       d: () => Lk,
-       e: () => Yk
+       e: () => bz,
+       g: () => oz,
+       j: () => Wz,
+       k: () => qz,
+       m: () => Fz
```

#### 3. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L9-L35` → after: `L12-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L12-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/222.js#L12-L128) · [Before (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/222.js#L9-L35)

```diff
-     var Dk = ik(4210),
-       fk = ik(1406),
-       Sk = ik(60),
-       bk = ik(6328),
-       rk = ik(4197),
-       Pk = ik(1273),
-       mk = ik(1893),
-       Mk = ik(1858),
-       Kk = ik(1410),
-       xk = ik(1172),
-       nk = ik(36528),
-       Uk = ik(1021),
-       Hk = ik.n(Uk),
-       wk = ik(1291),
-       lk = ik(1033),
-       pk = ik(1261),
- ... (11 more removed lines; see GitHub link above)
+     const QC = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
+       wC = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
+       bC = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
+       nC = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
+       fC = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
+       oC = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
+       qC = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
+       FC = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
+       WC = JSON.parse('{"src":["/sounds/generatedSprites/randomBeep.7b90315654.ogg","/sounds/generatedSprites/randomBeep.0e88f6aa33.m4a","/sounds/generatedSprites/randomBeep.47ff5e799a.mp3","/sounds/generatedSprites/randomBeep.444034b8b7.ac3"],"sprite":{"beep":[100,2455.510204081 … [truncated]
+       NC = JSON.parse('{"src":["/sounds/generatedSprites/randomCannon.f9d64818ea.ogg","/sounds/generatedSprites/randomCannon.52f7576d74.m4a","/sounds/generatedSprites/randomCannon.bde162aee8.mp3","/sounds/generatedSprites/randomCannon.4877805969.ac3"],"sprite":{"cannonFire1":[100 … [truncated]
+       MC = JSON.parse('{"src":["/sounds/generatedSprites/randomCash.8ff82dcd92.ogg","/sounds/generatedSprites/randomCash.a86426509f.m4a","/sounds/generatedSprites/randomCash.48929d75f1.mp3","/sounds/generatedSprites/randomCash.f687b943c4.ac3"],"sprite":{"cashRegister":[100,3819.6 … [truncated]
+       gC = JSON.parse('{"src":["/sounds/generatedSprites/randomExp.fa5a4c9798.ogg","/sounds/generatedSprites/randomExp.a7e2faf290.m4a","/sounds/generatedSprites/randomExp.b4baff1a37.mp3","/sounds/generatedSprites/randomExp.4974715bbd.ac3"],"sprite":{"exp_collect":[100,1009.206349 … [truncated]
+       SC = JSON.parse('{"src":["/sounds/generatedSprites/randomFallsmall.e0ec9ce0a7.ogg","/sounds/generatedSprites/randomFallsmall.a1f24b70c2.m4a","/sounds/generatedSprites/randomFallsmall.bcbd5fef60.mp3","/sounds/generatedSprites/randomFallsmall.a3b7d06594.ac3"],"sprite":{"falls … [truncated]
+       pC = JSON.parse('{"src":["/sounds/generatedSprites/randomItems.380c31a312.ogg","/sounds/generatedSprites/randomItems.6ae69434b9.m4a","/sounds/generatedSprites/randomItems.85b5c2f034.mp3","/sounds/generatedSprites/randomItems.cdadb8aa52.ac3"],"sprite":{"bow":[100,500],"bucke … [truncated]
+       PC = JSON.parse('{"src":["/sounds/generatedSprites/randomFire.06f418fc54.ogg","/sounds/generatedSprites/randomFire.7c5564dd14.m4a","/sounds/generatedSprites/randomFire.f61e3ab1f3.mp3","/sounds/generatedSprites/randomFire.5869bbefc8.ac3"],"sprite":{"fireBurn":[100,2827.39229 … [truncated]
+       GC = JSON.parse('{"src":["/sounds/generatedSprites/randomFirecracker.ddc99cbc73.ogg","/sounds/generatedSprites/randomFirecracker.128308b436.m4a","/sounds/generatedSprites/randomFirecracker.d5635f7e7d.mp3","/sounds/generatedSprites/randomFirecracker.e5afa15901.ac3"],"sprite" … [truncated]
+ ... (101 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L38-L39` → after: `L137-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L137-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/222.js#L137-L143) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/222.js#L38-L39)

```diff
-       function Ek() {
-         return !sk && (vk(), !0)
+     function oz(CC) {
+       if (fz[CC]) return Nz(fz[CC]);
+       {
+         const zC = [];
+         for (const ZC in wz)
+           for (const QC in wz[ZC].sprite) QC.startsWith(CC) && zC.push(QC);
+         return fz[CC] = zC, Nz(zC)
```

#### 5. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L141-L196` → after: `L146-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L146-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/222.js#L146-L150) · [Before (L141-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/222.js#L141-L196)

```diff
-     const Ck = (0, Sk.memo)((function(kk) {
-       let {
-         children: ek,
-         restedEffect: ik,
-         SP: Dk,
-         setChosenRestedEffect: fk
-       } = kk;
-       return ik === Dk ? (0, yk.jsx)(Kk.r, {
-         onClick: kk => {
-           kk.stopPropagation()
-         },
-         children: ek
-       }) : (0, yk.jsx)(Kk.j, {
-         onClick: kk => {
-           fk(ik), kk.stopPropagation()
-         },
- ... (40 more removed lines; see GitHub link above)
+ 
+     function qz(CC) {
+       const zC = nz[CC];
+       if (void 0 === zC) throw new Error(`Invalid sound name ${CC} (not in any sprite sheet)`);
+       return zC
```

#### 6. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L198-L218` → after: `L152-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/222.js#L152-L155) · [Before (L198-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/222.js#L198-L218)

```diff
-     class dk {
-       constructor(kk, ek) {
-         this.press = kk, this.release = ek, this.downAtMs = null, this.token = null, this.latched = !1
-       }
-       update(kk, ek, ik, Dk) {
-         if (kk && null === this.downAtMs) return this.downAtMs = ik, this.latched = Dk, void(this.token = this.press());
-         null !== this.downAtMs && (this.latched ? kk && this.end() : !ek && ik - this.downAtMs >= 40 && this.end())
-       }
-       isLatched() {
-         return null !== this.downAtMs && this.latched
-       }
-       unlatch() {
-         this.latched = !1
-       }
-       cancel() {
-         null !== this.downAtMs && this.end()
- ... (5 more removed lines; see GitHub link above)
+ 
+     function Fz(CC, zC) {
+       if (!(CC in wz)) throw new Error("Invalid spriteTrack name");
+       return zC in wz[CC].sprite
```

#### 7. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L220-L549` → after: `L157-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L157-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/222.js#L157-L160) · [Before (L220-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/222.js#L220-L549)

```diff
-     const Vk = {
-         kind: "specialAction",
-         action: "SpecialAction2"
-       },
-       Fk = kk => {
-         let ek = null;
-         const ik = new jk.d,
-           Dk = () => {
-             ek && (((kk, ek, ik) => {
-               switch (ik.kind) {
-                 case "reload":
-                   return void ek.specialActionUp("SpecialAction1");
-                 case "specialAction":
-                   return void ek.specialActionUp(ik.action);
-                 case "customButton":
-                   return void Yk.gameBridge.send("pressCustomButton", {
- ... (314 more removed lines; see GitHub link above)
+ 
+     function Wz(CC) {
+       if (!(CC in wz)) throw new Error("Invalid spritesheet name");
+       return wz[CC]
```

#### 8. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L551-L678` → after: `L162-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L162-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/222.js#L162-L164) · [Before (L551-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/222.js#L551-L678)

```diff
-     const Sk = (kk, ek, ik, fk, Sk) => {
-         let bk = 1;
-         return "boost" === ik.lookCurve ? bk = kk.update(ek, ik, Sk) : kk.reset(),
-           function(kk, ek) {
-             let {
-               yawBoost: ik = 1,
-               aiming: fk = !1
-             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-             const Sk = (0, Dk.h)((0, Dk.j)(kk, ek.lookDeadzone), ek.lookCurve),
-               bk = 220 * Math.PI / 180,
-               rk = fk ? ek.aimLookSensitivity / 100 : 1,
-               Pk = ek.lookSensitivityX / 100 * rk,
-               mk = ek.lookSensitivityY / 100 * rk;
-             return {
-               yawRadPerSec: Sk.x * bk * Pk * ik * (ek.invertLookX ? -1 : 1),
-               pitchRadPerSec: Sk.y * bk * .7 * mk * (ek.invertLookY ? -1 : 1)
- ... (112 more removed lines; see GitHub link above)
+ 
+     function Nz(CC) {
+       return CC[Math.floor(Math.random() * CC.length)]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/223.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/223.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e)

#### 1. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L4)

```diff
-   38057: (kk, ek, ik) => {
+   39457: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L8-L95` → after: `L25-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L25-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L25-L108) · [Before (L8-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L8-L95)

```diff
-     var Dk = ik(189),
-       fk = ik(37253);
-     const Sk = 1.2,
-       bk = {
-         poseRig: "golem",
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 2.2,
-           height: 2.8
-         },
-         eyeHeight: 2.3,
-         rideHeight: 2.3,
-         Or: .5,
- ... (72 more removed lines; see GitHub link above)
+     let QC = () => null;
+ 
+     function wC(CC) {
+       QC = CC
+     }
+ 
+     function bC(CC, zC) {
+       return QC(CC, zC)
+     }
+   },
+   40431: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => SC,
+       g: () => RC,
+       j: () => GC,
+       m: () => pC
+ ... (68 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L97-L108` → after: `L110-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L110-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L110-L145) · [Before (L97-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L97-L108)

```diff
-         physicsBodyDimensions: {
-           width: .5,
-           height: 1.9
-         },
-         hitBoxDimensions: {
-           width: 1.5,
-           height: 2.4
-         },
-         eyeHeight: 2,
-         rideHeight: 1.8,
-         Or: .5,
-         Sek: !1
+         key: ZC,
+         type: zC.eQ
+       }, null !== zC.KQ && NC.set(ZC, {
+         zn: [...zC.KQ],
+         lastOpened: Date.now()
+       })
+     })), (0, qC.i)((() => {
+       NC.clear(), MC = null, gC++
+     })), (0, qC.j)((() => {
+       null !== MC && (MC = null, gC++, QC.o.bp("chestToggleFromServer", !1, !0))
+     }));
+     const GC = {
+         boardEditRequested: {
+           watch: CC => (0, QC.q)("EditBoard", (zC => {
+             let {
+               pos: ZC
+ ... (20 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L111-L605` → after: `L148-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L148-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L148-L188) · [Before (L111-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L111-L605)

```diff
-         Player: {
-           defaultName: "Player",
-           physicsBodyDimensions: {
-             width: Dk.g.zp,
-             height: Dk.g.Qp
-           },
-           hitBoxDimensions: {
-             width: Dk.g.zp + .4,
-             height: Dk.g.Qp + .6
-           },
-           eyeHeight: Dk.g.Qp * Dk.g.playerEyeToHeightRatio,
-           rideHeight: Dk.g.Qp - .1,
-           Or: fk.f.Or,
-           Sek: !0
-         },
-         Pig: {
- ... (479 more removed lines; see GitHub link above)
+         writeOnBoard(CC) {
+           var zC;
+           let {
+             pos: ZC,
+             text: QC,
+             textSize: wC
+           } = CC;
+           null === (zC = (0, bC.k)()) || void 0 === zC || zC.send(fC.b.UpdateBoard, (0, fC.V)({
+             cn: ZC,
+             rn: QC,
+             sn: wC
+           }))
+         },
+         writeBook(CC) {
+           var zC;
+           let {
+ ... (25 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L607` → after: `L190-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L190-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L190-L206) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L607)

```diff
-       };
+       }
+   },
+   40485: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => oC,
+       g: () => nC,
+       k: () => fC
+     });
+     var QC = ZC(40412),
+       wC = ZC(4711),
+       bC = ZC(40423);
+ 
+     function nC() {
+       var CC;
+       const zC = null === (CC = (0, bC.k)()) || void 0 === CC ? void 0 : CC.api.localId;
+       return void 0 === zC || zC === QC.qd ? null : String(zC)
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L610` → after: `L209-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L209-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L209-L236) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L610)

```diff
-       return nk[kk]
+       const zC = (0, bC.k)();
+       if (null !== zC) return CC(zC);
+       let ZC = null;
+       const QC = (0, wC.p)((() => {
+         const zC = (0, bC.k)();
+         null !== zC && null === ZC && (QC(), ZC = CC(zC))
+       }));
+       return () => {
+         var CC;
+         QC(), null === (CC = ZC) || void 0 === CC || CC()
+       }
+     }
+ 
+     function oC(CC, zC, ZC) {
+       return {
+         current: () => {
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L613` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L239) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L613)

```diff
-   36668: (kk, ek, ik) => {
+   40479: (CC, zC, ZC) => {
```

#### 8. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L618-L644` → after: `L268-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L268-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L268-L272) · [Before (L618-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L618-L644)

```diff
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
-         damageMultiplier: 1.7,
-         cooldownMultiplier: .81,
-         ability: "eclipseField"
-       },
-       "skyblock:forged:astral-diamond-moonstone": {
-         name: "Starcutter",
- ... (11 more removed lines; see GitHub link above)
+       states: {
+         inventory: fC("inventory"),
+         hotbar: fC("hotbar"),
+         crafting: fC("crafting"),
+         heldItemAim: fC("heldItemAim")
```

#### 9. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L646-L651` → after: `L274-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L274-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L274-L282) · [Before (L646-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L646-L651)

```diff
-       "skyblock:forged:magmasteel-magmasteel-magmasteel": {
-         name: "Vulcan's Bane",
-         lore: "Forged in the heat of his own rift. It remembers the way down.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "magmaWave"
+       events: {
+         hotbarSlotRequested: oC("hotbarSlotRequested"),
+         hotbarScrolled: oC("hotbarScrolled"),
+         numberKeyPressed: oC("numberKeyPressed"),
+         inventoryDropRequested: oC("inventoryDropRequested"),
+         chestToggled: oC("chestToggled"),
+         chestRefreshed: oC("chestRefreshed"),
+         inventorySynced: oC("inventorySynced"),
+         enchantingTableOpened: oC("enchantingTableOpened")
```

#### 10. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L653-L658` → after: `L284-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L284-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L284-L294) · [Before (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L653-L658)

```diff
-       "skyblock:forged:magmasteel-astral-sanguine": {
-         name: "Comet's Wake",
-         lore: "It leaves a trail of fire through the air, like something falling from very far up.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "starfall"
+       commands: {
+         selectHotbarSlot: CC => nC().commands.selectHotbarSlot(CC),
+         removeInventoryItem: CC => nC().commands.removeInventoryItem(CC),
+         swapInventorySlots: CC => nC().commands.swapInventorySlots(CC),
+         moveInventoryItem: CC => nC().commands.moveInventoryItem(CC),
+         quickMoveInventoryItem: CC => nC().commands.quickMoveInventoryItem(CC),
+         closeChest: CC => nC().commands.closeChest(CC),
+         focusCrafting: CC => nC().commands.focusCrafting(CC),
+         craftRecipe: CC => nC().commands.craftRecipe(CC),
+         salvageItem: CC => nC().commands.salvageItem(CC),
+         enchantItem: CC => nC().commands.enchantItem(CC)
```

#### 11. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L660-L773` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L296-L297) · [Before (L660-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L660-L773)

```diff
-       "skyblock:forged:magmasteel-sanguine-astral": {
-         name: "Vulcan's Ruin",
-         lore: "The Forge Mother made only one, then sat down for a long while.",
-         damageMultiplier: 1.6,
-         cooldownMultiplier: .83,
-         ability: "warcry"
-       },
-       "skyblock:forged:magmasteel-iron-stone": {
-         name: "Forgehand",
-         lore: "A smith's sword: plain to look at, and it hits like a hammer.",
-         damageMultiplier: 1.4,
-         cooldownMultiplier: .9,
-         ability: "quake"
-       },
-       "skyblock:forged:sanguine-sanguine-sanguine": {
-         name: "Crimson Covenant",
- ... (98 more removed lines; see GitHub link above)
+       queries: {
+         enchantingOffer: CC => nC().queries.enchantingOffer(CC)
```

#### 12. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L777` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L301) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L777)

```diff
-   37258: (kk, ek, ik) => {
+   40493: (CC, zC, ZC) => {
```

#### 13. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L779` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L303) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L779)

```diff
-       c: () => bk
+       b: () => fC
```

#### 14. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L781-L801` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L305) · [Before (L781-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L781-L801)

```diff
-     var Dk = ik(330),
-       fk = ik.n(Dk),
-       Sk = ik(1850);
-     let bk;
-     var rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk;
-     const wk = [1, 139, 0, 8, 11, "i", 17, "e", "f", "d", 255, "length", "b", 129, 201, "undefined", void 0, "c", 224, 3, "a", 63, 6, "fromCodePoint", 7, 12, "push", 102, 59, 94, 2, 22, 9, 159, 91, 200, 8191, 88, 13, 14, !1, !0, 203, "g", 4, 60, 210, 103, 115, 116, 117, null, 111 … [truncated]
- 
-     function lk(...kk) {
-       return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(...kk) {
-         for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = 'PRUGCqKyY]t#cI.lmEX:bFw6)hQT7p2i!>r?O}o;NMZe~+{4BnJLsdWD|<=`5&AjVSaf,z3gH08ux"9%_v@(/[^$*1k', kk[-wk[1]] = "" + (kk[wk[2]] || ""), kk[-wk[4]] = kk[-wk[1]].length, kk[wk[9]] = [], kk[wk[7]] = wk[2], kk[wk[8]] = wk[2], kk[wk[6]] = -w … [truncated]
-           if (kk[wk[5]] = kk[wk[0]].indexOf(kk[-wk[1]][kk[wk[3]]]), kk[wk[5]] !== -wk[0])
-             if (kk[wk[6]] < wk[2]) kk[wk[6]] = kk[wk[5]];
-             else {
-               Fk(kk[wk[6]] += kk[wk[5]] * wk[34], kk[wk[7]] |= kk[wk[6]] << kk[wk[8]], kk[wk[8]] += (kk[wk[6]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
-               do {
-                 Fk(kk[wk[9]].push(kk[wk[7]] & wk[10]), kk[wk[7]] >>= wk[3], kk[wk[8]] -= wk[3])
- ... (5 more removed lines; see GitHub link above)
+     var QC = ZC(39457);
```

#### 15. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L803-L804` → after: `L307-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L307-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L307-L311) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L803-L804)

```diff
-     function pk(...kk) {
-       return kk[wk[11]] = wk[0], typeof Mk !== wk[15] && Mk ? (new Mk).decode(new Kk(kk[wk[2]])) : typeof xk !== wk[15] && xk ? xk.from(kk[wk[2]]).toString("utf-8") : Hk(kk[wk[2]])
+     function wC(CC) {
+       return {
+         current: () => CC,
+         watch: () => () => {}
+       }
```

#### 16. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L808-L854` → after: `L315-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L315-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L315-L544) · [Before (L808-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L808-L854)

```diff
-     Fk(rk = {}, Pk = ["G8,8_vk,0Sm2*(K", "M}XL@A0yal!zrh?OjAIiOWkrPXszP", "XQ0L6ouR", "BglK85P", 'XNLY"D%[JWd0J=O)y6+D`ry:L:c,]}U}(0>KF', "1Y(d}n*_jj}rah16aZ)K[(nyij5_P", 's6#"J=^rV]KLm43}u#,pN?AU', "+AqD3O~VL]D3$3>)V6vK8<e?~#vY<C}X_rOt", "l<RWU/72^I13oUrEp56nhgP", "BgW7T4{UBd@l: … [truncated]
-       Fk(kk[wk[11]] = wk[2], kk[wk[14]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], kk[wk[12]] = wk[16], kk[wk[13]] = []);
-       try {
-         Fk(kk[wk[12]] = Object, kk[wk[13]][wk[26]]("".__proto__.constructor.name))
-       } catch (Pk) {}
-       kk: for (kk[wk[9]] = wk[2]; kk[wk[9]] < kk[wk[14]][wk[11]]; kk[wk[9]]++) try {
-         for (kk[wk[12]] = kk[wk[14]][kk[wk[9]]](), kk[wk[7]] = wk[2]; kk[wk[7]] < kk[wk[13]][wk[11]]; kk[wk[7]]++)
-           if (typeof kk[wk[12]][kk[wk[13]][kk[wk[7]]]] === wk[15]) continue kk;
- ... (31 more removed lines; see GitHub link above)
+     const nC = Object.freeze([0, 0, 0]),
+       fC = {
+         states: {
+           health: wC({
+             health: null,
+             maxHealth: null,
+             shield: null,
+             maxShield: null
+           }),
+           inventory: wC({
+             player: [],
+             chestOrCreative: [],
+             chest: null,
+             creative: !1,
+             selectedSlot: 0,
+             freeSlots: 0
+ ... (214 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L856-L873` → after: `L546-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L546-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L546-L607) · [Before (L856-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L856-L873)

```diff
-         kk[wk[11]] = wk[19], ek(95) + "R" in yk && function(...kk) {
-           Fk(kk[wk[11]] = wk[2], kk[-wk[42]] = function(...ek) {
-             return ek[wk[11]] = wk[30], kk[wk[12]]({}, ek[wk[2]], ek[wk[0]])
-           }, kk[wk[12]] = function(ek, ik, Dk) {
-             var fk, Sk, bk, rk = {};
-             if (ek[ik + Dk] !== wk[16]) return ek[ik + Dk];
-             if (ik === Dk) return wk[41];
-             for (fk = wk[2]; fk < ik.length; fk++) rk[ik[fk]] === wk[16] && (rk[ik[fk]] = wk[2]), rk[Dk[fk]] === wk[16] && (rk[Dk[fk]] = wk[2]), Fk(rk[ik[fk]]++, rk[Dk[fk]]--);
-             for (Sk in rk)
-               if (rk[Sk] !== wk[2]) return ek[ik + Dk] = wk[40], wk[40];
-             for (bk = wk[0]; bk < ik.length; bk++)
-               if (kk[wk[12]](ek, ik.substr(wk[2], bk), Dk.substr(wk[2], bk)) && kk[wk[12]](ek, ik.substr(bk), Dk.substr(bk)) || kk[wk[12]](ek, ik.substr(wk[2], bk), Dk.substr(Dk.length - bk)) && kk[wk[12]](ek, ik.substr(bk), Dk.substr(wk[2], Dk.length - bk))) return ek[ik + Dk] = … [truncated]
-             return ek[ik + Dk] = wk[40], wk[40]
-           }, console.log(kk[-wk[42]]))
-         }();
-         const ik = sk;
- ... (2 more removed lines; see GitHub link above)
+       }
+   },
+   40417: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => vC,
+       h: () => iC,
+       j: () => eC,
+       m: () => IC,
+       q: () => xC
+     });
+     var QC = ZC(39076),
+       wC = ZC(1169),
+       bC = ZC(1865),
+       nC = ZC(1872),
+       fC = ZC(3276),
+       oC = ZC(36685),
+ ... (46 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L876` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L610) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L876)

```diff
-       Fk = function() {}
+       return Boolean(bC.e.get("useInventory") && bC.e.get("useFullInventory"))
```

#### 19. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L878-L891` → after: `L612-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L612-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L612-L624) · [Before (L878-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L878-L891)

```diff
-     bk = (...kk) => {
-       function ek(...kk) {
-         return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(kk) {
-           var ek, ik, Dk, fk, Sk, bk, rk;
-           for (Fk(ek = "" + (kk || ""), ik = ek.length, Dk = [], fk = wk[2], Sk = wk[2], bk = -wk[0]), rk = wk[2]; rk < ik; rk++) {
-             var Pk = '~KOfC%u#&N"^z@h1.Xr}s;j?n+`5eEUqa{!/o,lZYvwFxgJdc3Mm7G8)S]*y6LP4QBkb0A$p=T>:HiV_(IW2<9R|[Dt'.indexOf(ek[rk]);
-             if (Pk !== -wk[0])
-               if (bk < wk[2]) bk = Pk;
-               else {
-                 Fk(bk += Pk * wk[34], fk |= bk << Sk, Sk += (bk & wk[36]) > wk[37] ? wk[38] : wk[39]);
-                 do {
-                   Fk(Dk.push(fk & wk[10]), fk >>= wk[3], Sk -= wk[3])
-                 } while (Sk > wk[24]);
-                 bk = -wk[0]
+     let JC = null;
+     const IC = {
+         inventory: function() {
+           const CC = SC.e.states.inventory;
+           let zC = null;
+           const ZC = CC => {
+             var ZC;
+             return null === CC.chest ? CC : ((null === (ZC = zC) || void 0 === ZC ? void 0 : ZC.from) === CC && zC.chestVersion === (0, gC.e)() || (zC = {
+               from: CC,
+               chestVersion: (0, gC.e)(),
+               view: {
+                 ...CC,
+                 chest: (0, gC.m)(CC.chest)
```

#### 20. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L894-L938` → after: `L634-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L634-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L634-L665) · [Before (L894-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L894-L938)

```diff
-           return bk > -wk[0] && Dk.push((fk | bk << Sk) & wk[10]), pk(Dk)
-         }(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
-       }
-       kk[wk[11]] = wk[3], ek(100) in yk && function(...kk) {
-         kk[wk[11]] = wk[2]
-       }();
-       const ik = kk[wk[2]][ek(wk[47])][ek(104) + ek(wk[95]) + ek(106)](kk[wk[0]]);
-       kk[wk[3]] = kk[wk[2]][ek(wk[47])][ek(wk[59]) + ek(wk[60]) + ek(wk[61]) + ek(wk[62])](ik);
-       const Dk = kk[wk[3]] === wk[51] ? kk[wk[2]][ek(wk[47])][ek(wk[52]) + ek(wk[53]) + ek(wk[54]) + ek(wk[55])](kk[wk[0]], ek(wk[48]) + ek(wk[49]) + ek(wk[50]) + wk[7]) : kk[wk[3]][ek(wk[48]) + ek(wk[49]) + ek(wk[50]) + wk[7]],
-         bk = kk[wk[3]] === wk[51] ? kk[wk[2]][ek(wk[47])][ek(wk[52]) + ek(wk[53]) + ek(wk[54]) + ek(wk[55])](kk[wk[0]], ek(wk[56]) + ek(wk[57]) + ek(wk[58])) : kk[wk[3]][ek(wk[56]) + ek(wk[57]) + ek(wk[58])];
-       Fk(fk()[ek(121)](Yk, wk[2], wk[2], kk[wk[73]]), fk().ei(Yk, Yk, fk()[ek(122)], kk[wk[19]].heading), fk()[ek(123)](dk, kk[wk[44]].Cw), dk[wk[0]] = wk[2]);
-       const mk = kk[wk[30]][ek(124) + ek(wk[70])]();
-       if (Fk(kk[wk[3]] = kk[wk[2]][ek(wk[47])][ek(wk[59]) + ek(wk[60]) + ek(wk[61]) + ek(wk[62])](ik), kk[wk[32]] = kk[wk[3]] === wk[51] ? kk[wk[2]][ek(wk[47])][ek(126) + ek(wk[63]) + ek(wk[64])](kk[wk[0]], ek(wk[13]) + ek(wk[65])) : kk[wk[3]][ek(wk[13]) + ek(wk[65])]), !mk && fk … [truncated]
-         function Uk(...kk) {
-           for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = 'Hd3pKN/muYJ^+n)]WZv#wE4BgQ%R`2!ej[h$&GF?VIf(_.zr:L8@l9XPD>xbcqi~U{AsktCMa,T";7S<5=|o0}61y*O', kk[wk[12]] = "" + (kk[wk[2]] || ""), kk[-wk[71]] = kk[wk[12]].length, kk[wk[44]] = [], kk[wk[7]] = wk[2], kk[wk[8]] = wk[2], kk[wk[24]] … [truncated]
-             if (kk[wk[72]] = kk[wk[0]].indexOf(kk[wk[12]][kk[-wk[70]]]), kk[wk[72]] !== -wk[0])
- ... (29 more removed lines; see GitHub link above)
+         }(),
+         crafting: SC.e.states.crafting,
+         stationItems: {
+           current() {
+             var CC;
+             return (null === (CC = JC) || void 0 === CC ? void 0 : CC.namesVersion) !== (0, fC.d)() && (JC = {
+               namesVersion: (0, fC.d)(),
+               items: {
+                 enchantable: PC((CC => {
+                   const zC = (0, fC.b)(CC);
+                   return void 0 !== zC && null !== pC && pC.enchantmentPerksOf(zC).length > 0 || void 0
+                 })),
+                 salvageable: PC((CC => !(!GC(CC) || null === (0, oC.d)(CC)) || void 0))
+               }
+             }), JC.items
+           },
+ ... (16 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L940-L942` → after: `L667-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L667-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L667-L675) · [Before (L940-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L940-L942)

```diff
- 
-           function Ik(kk) {
-             return typeof rk[kk] === wk[15] ? rk[kk] = qk(Pk[kk]) : rk[kk]
+         }(),
+         creativeVisibility: (0, nC.l)((function() {
+           const CC = {};
+           for (const wC of null !== (zC = null === (ZC = pC) || void 0 === ZC ? void 0 : ZC.creativeItemIds()) && void 0 !== zC ? zC : []) {
+             var zC, ZC, nC, oC;
+             const qC = (0, fC.c)(wC);
+             if (void 0 === qC) continue;
+             const FC = null !== (nC = bC.e.get((0, QC.d)(qC, "showInCreativeInven"))) && void 0 !== nC ? nC : null === (oC = pC) || void 0 === oC ? void 0 : oC.showInCreativeInvenOf(wC);
+             "boolean" === typeof FC && (CC[qC] = FC)
```

#### 22. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L944` → after: `L677-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L677-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L677-L724) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L944)

```diff
-           Ik(wk[1]), fk()[Ik(140)](Yk, Yk, Ck, uk)
+           return {
+             publicLobby: (0, wC.U)((0, qC.d)().lobbyName),
+             shownInGame: CC
+           }
+         }), ["connectedGameChanged"], (0, nC.i)("ShowInCreativeInven")),
+         fullInventory: (0, nC.l)(xC, [], (0, nC.j)("useInventory", "useFullInventory"))
+       },
+       iC = {
+         inventoryDropRequested: SC.e.events.inventoryDropRequested,
+         chestToggled: SC.e.events.chestToggled,
+         chestRefreshed: SC.e.events.chestRefreshed,
+         inventorySynced: SC.e.events.inventorySynced,
+         enchantingTableOpened: SC.e.events.enchantingTableOpened
+       },
+       vC = {
+         removeInventoryItem: SC.e.commands.removeInventoryItem,
+ ... (32 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L946` → after: `L726-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L726-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L726-L728) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L946)

```diff
-         Fk(kk[wk[32]] = (0, Sk.v)(kk[wk[32]], 1, Math[Hk(wk[81])](wk[0], Math[Hk(wk[84])](wk[2], -sk, wk[0] - lk / kk[wk[73]]))), fk()[Hk(142)](Yk, Yk, Ak))
+       },
+       eC = {
+         enchantingOffer: SC.e.queries.enchantingOffer
```

#### 24. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L948-L961` → after: `L730-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L730-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L730-L744) · [Before (L948-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L948-L961)

```diff
-       const Mk = jk;
-       if (Fk(fk()[ek(143)](Mk, Yk, dk), Mk[wk[0]] = wk[2], kk[wk[18]] = fk()[ek(144)](Mk)), !mk) {
-         function zk(...kk) {
-           for (Fk(kk[wk[11]] = wk[0], kk[wk[20]] = '1w`/)"#@]~+65430.?LzgTREjhFI|GJYip&}d:DeU$tkv_;bH^9C%c<M!r(snmaZS=q,X[PfBOyWolxN>u8A*7KQ{V2', kk[wk[12]] = "" + (kk[wk[2]] || ""), kk[wk[19]] = kk[wk[12]].length, kk[wk[9]] = [], kk[wk[73]] = wk[2], kk[-wk[82]] = wk[2], kk[wk[24 … [truncated]
-             if (kk[wk[5]] = kk[wk[20]].indexOf(kk[wk[12]][kk[wk[3]]]), kk[wk[5]] !== -wk[0])
-               if (kk[wk[24]] < wk[2]) kk[wk[24]] = kk[wk[5]];
-               else {
-                 Fk(kk[wk[24]] += kk[wk[5]] * wk[34], kk[wk[73]] |= kk[wk[24]] << kk[-wk[82]], kk[-wk[82]] += (kk[wk[24]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
-                 do {
-                   Fk(kk[wk[9]].push(kk[wk[73]] & wk[10]), kk[wk[73]] >>= wk[3], kk[-wk[82]] -= wk[3])
-                 } while (kk[-wk[82]] > wk[24]);
-                 kk[wk[24]] = -wk[0]
-               } return kk[wk[24]] > -wk[0] && kk[wk[9]].push((kk[wk[73]] | kk[wk[24]] << kk[-wk[82]]) & wk[10]), pk(kk[wk[9]])
-         }
+   },
+   40476: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => QC,
+       d: () => FC,
+       e: () => nC,
+       h: () => wC,
+       k: () => fC,
+       m: () => qC
+     });
+     class QC extends Error {
+       constructor() {
+         super(...arguments), this.name = "CoreCorruption"
+       }
+     }
```

#### 25. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L963-L965` → after: `L746-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L746-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L746-L749) · [Before (L963-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L963-L965)

```diff
-         function Qk(...kk) {
-           return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = zk(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
-         }
+     function wC(CC) {
+       return CC instanceof RangeError && /call stack/i.test(CC.message) || CC instanceof Error && "InternalError" === CC.name && /recursion/i.test(CC.message)
+     }
+     const bC = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
```

#### 26. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L967-L1026` → after: `L751-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L751-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L751-L754) · [Before (L967-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L967-L1026)

```diff
-         function vk() {
-           module.exports = async (kk = (...kk) => {
-             throw kk[wk[11]] = wk[2], new Error(function(...kk) {
-               return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(...kk) {
-                 for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = '6;^/2)x{,04#"!}v:AfDYOt[~hEBy|%R9_CZab`Lw.5M=ugcUrNWQSeHjPIVm+s]K(*X?noJ3&F8q$7<T>d1lz@ikpG', kk[wk[12]] = "" + (kk[wk[2]] || ""), kk[wk[83]] = kk[wk[12]].length, kk[wk[9]] = [], kk[wk[73]] = wk[2], kk[wk[22]] = wk[2], kk[w … [truncated]
-                   if (kk[wk[32]] = kk[wk[0]].indexOf(kk[wk[12]][kk[wk[3]]]), kk[wk[32]] !== -wk[0])
-                     if (kk[wk[24]] < wk[2]) kk[wk[24]] = kk[wk[32]];
-                     else {
-                       Fk(kk[wk[24]] += kk[wk[32]] * wk[34], kk[wk[73]] |= kk[wk[24]] << kk[wk[22]], kk[wk[22]] += (kk[wk[24]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
-                       do {
-                         Fk(kk[wk[9]].push(kk[wk[73]] & wk[10]), kk[wk[73]] >>= wk[3], kk[wk[22]] -= wk[3])
-                       } while (kk[wk[22]] > wk[24]);
-                       kk[wk[24]] = -wk[0]
-                     } return kk[wk[24]] > -wk[0] && kk[wk[9]].push((kk[wk[73]] | kk[wk[24]] << kk[wk[22]]) & wk[10]), pk(kk[wk[9]])
-               }(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
-             }(wk[99]))
- ... (44 more removed lines; see GitHub link above)
+     function nC(CC) {
+       var zC;
+       return CC instanceof WebAssembly.RuntimeError || CC instanceof QC || wC(CC) && bC.test(null !== (zC = CC.stack) && void 0 !== zC ? zC : "")
+     }
```

#### 27. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1028-L1101` → after: `L756-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L756-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L756-L759) · [Before (L1028-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L1028-L1101)

```diff
-         function hk(...kk) {
-           return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = Ek(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
-         }
-         hk(161) in yk && (module.exports = async (kk = (...kk) => {
-           throw kk[wk[11]] = wk[2], new Error(function(...kk) {
-             if (kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15]) return rk[kk[wk[2]]] = function(...kk) {
-               for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = ',PDrKBHd01l)<5;t@9%Va4>bv+JEQsW:uLc_FnS2z]"XkAwTYmx7Zi|^=.jIU/*3Ny#&p6{GeC}Oh[f$Mqo!~8`g?R(', kk[wk[30]] = "" + (kk[wk[2]] || ""), kk[wk[17]] = kk[wk[30]].length, kk[wk[44]] = [], kk[wk[90]] = wk[2], kk[wk[22]] = wk[2], kk[wk … [truncated]
-                 if (kk[wk[32]] = kk[wk[0]].indexOf(kk[wk[30]][kk[-wk[89]]]), kk[wk[32]] !== -wk[0])
-                   if (kk[wk[76]] < wk[2]) kk[wk[76]] = kk[wk[32]];
-                   else {
-                     Fk(kk[wk[76]] += kk[wk[32]] * wk[34], kk[wk[90]] |= kk[wk[76]] << kk[wk[22]], kk[wk[22]] += (kk[wk[76]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
-                     do {
-                       Fk(kk[wk[44]].push(kk[wk[90]] & wk[10]), kk[wk[90]] >>= wk[3], kk[wk[22]] -= wk[3])
-                     } while (kk[wk[22]] > wk[24]);
-                     kk[wk[76]] = -wk[0]
-                   } kk[wk[76]] > -wk[0] && kk[wk[44]].push((kk[wk[90]] | kk[wk[76]] << kk[wk[22]]) & wk[10]);
- ... (58 more removed lines; see GitHub link above)
+     function fC(CC, zC) {
+       if (nC(CC)) throw CC;
+       console.error(zC, CC)
+     }
```

#### 28. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1103-L1122` → after: `L761-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L761-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L761-L770) · [Before (L1103-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L1103-L1122)

```diff
-           function Xk(kk) {
-             return typeof rk[kk] === wk[15] ? rk[kk] = tk(Pk[kk]) : rk[kk]
-           }
-           ak *= kk[wk[30]][Xk(169) + Xk(170)]
-         }
-         let Wk = kk[wk[30]][hk(171) + hk(172) + "ss"] * xk;
-         if (xk < .3) {
-           function Bk(...kk) {
-             Fk(kk[wk[11]] = wk[2], kk[wk[12]] = function(kk) {
-               var ek, ik, Dk, fk, Sk = kk.length;
-               for (Fk(ek = [], ik = wk[2]), Dk = wk[2]; Dk < Sk; Dk++) ek.push(Dk !== wk[2] && kk[Dk] > kk[Dk - wk[0]] ? ek[Dk - wk[0]] + wk[0] : wk[0]);
-               for (fk = Sk - wk[0]; fk >= wk[2]; fk--) fk !== Sk - wk[0] && kk[fk] > kk[fk + wk[0]] && (ek[fk] = Math.max(ek[fk], ek[fk + wk[0]] + wk[0])), ik += ek[fk];
-               return ik
-             }, console.log(kk[wk[12]]))
-           }
-           hk(wk[89]) in yk && Bk(), Wk *= xk
- ... (4 more removed lines; see GitHub link above)
+     function oC(CC, zC, ZC, wC, bC) {
+       if (zC % wC !== 0 || zC + ZC > CC.byteLength) throw new QC(`${bC}: ${ZC} bytes at ${zC}, ${wC}-aligned, outside ${CC.byteLength} bytes of memory`)
+     }
+ 
+     function qC(CC, zC, ZC, QC, wC) {
+       return 0 === ZC ? null : (oC(zC, ZC, QC * CC.BYTES_PER_ELEMENT, CC.BYTES_PER_ELEMENT, wC), new CC(zC, ZC, QC))
+     }
+ 
+     function FC(CC, zC, ZC, QC, wC) {
+       return 0 === zC ? null : (oC(CC, zC, ZC, QC, wC), new DataView(CC, zC, ZC))
```

#### 29. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1125` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L773) · [Before (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L1125)

```diff
-   37253: (kk, ek, ik) => {
+   40423: (CC, zC, ZC) => {
```

#### 30. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1127-L1128` → after: `L775-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L775-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L775-L783) · [Before (L1127-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L1127-L1128)

```diff
-       d: () => Pk,
-       f: () => rk
+       B: () => gC,
+       c: () => QC,
+       g: () => PC,
+       k: () => SC,
+       l: () => pC,
+       n: () => NC,
+       r: () => MC,
+       u: () => FC,
+       y: () => WC
```

#### 31. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1130-L1133` → after: `L785-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L785-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L785-L832) · [Before (L1130-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L1130-L1133)

```diff
-     var Dk = ik(37258),
-       fk = ik(1850);
-     const Sk = 2,
-       bk = 1,
+     class QC extends Error {
+       constructor(CC) {
+         super(`the join's code did not load: ${CC instanceof Error?CC.message:String(CC)}`, {
+           cause: CC
+         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === CC || void 0 === CC ? void 0 : CC.request
+       }
+     }
+     let wC = null,
+       bC = null,
+       nC = null;
+     const fC = [];
+     let oC = null;
+ 
+     function qC(CC, zC) {
+       try {
+         CC(zC)
+ ... (32 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1135-L1172` → after: `L834-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L834-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L834-L837) · [Before (L1135-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L1135-L1172)

```diff
-         Or: 1,
-         fluidDrag: -1,
-         fluidDragHorizontal: -1,
-         fluidDragVertical: -1,
-         gravityMultiplier: 2,
-         width: .5,
-         height: 1.8,
-         canRun: !0,
-         jumpMultiplier: 1,
-         upwardImpulseOnUse: 0,
-         canAutoStep: !0,
-         canAutoStepByBlock: {},
-         riderOffset: [0, 0, 0],
-         pose: "standing",
-         effect: null,
-         standingFriction: 5,
- ... (22 more removed lines; see GitHub link above)
+         running: CC,
+         shell: zC
+       }
+     }
```

#### 33. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1174-L1184` → after: `L839-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L839-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/223.js#L839-L855) · [Before (L1174-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/223.js#L1174-L1184)

```diff
-     function Pk(kk, ek, ik, rk, Pk, mk, Mk) {
-       if (Pk.speed) return (0, Dk.c)(ek, ik, rk, Pk, mk, Mk, kk), void(Pk.ticksToReachMaxIdleFriction = Sk);
-       const Kk = rk.isOnGround(),
-         xk = ek.bloxd.getSyncedClientOptions(ek.bloxd.getPlayerReader(ik)),
-         nk = null === xk ? ek.bloxd.getClientPredictedOption(ik, "groundFrictionScale") : xk.groundFrictionScale,
-         Uk = null === xk ? ek.bloxd.getClientPredictedOption(ik, "airFrictionScale") : xk.airFrictionScale,
-         Hk = Kk ? nk : Uk,
-         wk = Math.max(bk, Hk),
-         lk = Pk.ticksToReachMaxIdleFriction / Sk,
-         pk = (0, fk.v)(wk, Hk, lk);
-       mk.friction = kk.standingFriction * ((null === xk ? ek.bloxd.getClientPredictedOption(ik, "airMomentumConservation") : xk.airMomentumConservation) ? pk : Hk), Pk.ticksToReachMaxIdleFriction > 0 && Pk.ticksToReachMaxIdleFriction--
+     function SC() {
+       return nC
+     }
+     async function pC(CC) {
+       const zC = bC;
+       if ((null === zC || void 0 === zC ? void 0 : zC.running) !== CC) throw new Error("the core's session has ended");
+       const ZC = await NC(zC.shell.audio).catch((CC => {
+         throw new QC(CC)
+       }));
+       if (null !== nC) return nC;
+       if (bC !== zC || CC.isStopped) throw new Error("the core stopped while the game code loaded");
+       if (nC = ZC.startGameHost(CC, zC.shell), null === nC) throw new Error("the core's shared tables didn't read, so the game can't start");
+       return nC
+     }
+ 
+     function PC() {
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/224.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/224.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a)

#### 1. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L4-L10` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/224.js#L4-L7) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/224.js#L4-L10)

```diff
-   39356: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       getBlockFaces: () => xk,
-       getIngameIconUrl: () => Hk,
-       getItemIconUrl: () => Uk,
-       getItemTextureUrl: () => nk,
-       getParticleTextureUrl: () => wk
+   36792: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => xC,
+       e: () => AC
```

#### 2. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L12-L18` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/224.js#L9-L26) · [Before (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/224.js#L12-L18)

```diff
-     var Dk = ik(4409),
-       fk = ik(36630),
-       Sk = ik(9011),
-       bk = ik(3128);
-     const rk = new Set,
-       Pk = new Set;
-     let mk = null;
+     var QC = ZC(4198),
+       wC = ZC(1383),
+       bC = ZC(48),
+       nC = ZC(6484),
+       fC = ZC(4185),
+       oC = ZC(1240),
+       qC = ZC(1840),
+       FC = ZC(1811),
+       WC = ZC(1388),
+       NC = ZC(1143),
+       MC = ZC(36794),
+       gC = ZC(1002),
+       SC = ZC.n(gC),
+       pC = ZC(1263),
+       PC = ZC(1013),
+       GC = ZC(1228),
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L20-L23` → after: `L28-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L28-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/224.js#L28-L139) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/224.js#L20-L23)

```diff
-     function Mk(kk) {
-       rk.has(kk) || (rk.add(kk), Pk.add(kk), mk ??= setTimeout((() => {
-         console.warn(`Docs gallery: no default texture for ${Pk.size} names`, [...Pk]), Pk.clear(), mk = null
-       }), 1e3))
+     function xC() {
+       const {
+         t: CC
+       } = (0, NC.y)(), [zC, ZC] = (0, bC.useState)(!1), [gC, xC] = (0, bC.useState)(null), [IC, iC] = (0, bC.useState)(1), [vC, eC] = (0, bC.useState)(!1), [hC, KC] = (0, bC.useState)(!1), YC = (0, bC.useRef)(0), dC = (0, bC.useRef)(!1), mC = (0, bC.useRef)(!1), HC = (0, bC.useRe … [truncated]
+ 
+       function lC() {
+         const CC = null !== gC && void 0 !== gC ? gC : "Rested Speed";
+         qC.gameBridge.send("wakeUp", hC ? CC : null), EC.current = null, ZC(!1), xC(null), iC(1), eC(!1), KC(!1)
+       }
+ 
+       function XC() {
+         return !vC && (lC(), !0)
+       }
+       return (0, wC.c)("PlayerPhysicsTypeUpdate", (CC => {
+         CC !== EC.current && (EC.current = CC, CC === nC.r.SLEEPING ? (mC.current || (YC.current = qC.gameBridge.lookup("cameraZoom", null), mC.current = !0), dC.current = !0, qC.gameBridge.send("setCameraZoom", 3), ZC(!0), iC(function() {
+           for (const CC of qC.gameBridge.lookup("blocksStandingOn", null)) {
+ ... (96 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L25-L30` → after: `L141-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L141-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/224.js#L141-L195) · [Before (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/224.js#L25-L30)

```diff
- 
-     function Kk(kk, ek) {
-       try {
-         return (0, Sk.getDefaultTexture)(kk, ek).url
-       } catch {
-         return Mk(kk), null
+     const JC = (0, bC.memo)((function(CC) {
+       let {
+         children: zC,
+         restedEffect: ZC,
+         wF: QC,
+         setChosenRestedEffect: wC
+       } = CC;
+       return ZC === QC ? (0, RC.jsx)(WC.o, {
+         onClick: CC => {
+           CC.stopPropagation()
+         },
+         children: zC
+       }) : (0, RC.jsx)(WC.i, {
+         onClick: CC => {
+           wC(ZC), CC.stopPropagation()
+         },
+ ... (39 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L33-L49` → after: `L198-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L198-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/224.js#L198-L218) · [Before (L33-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/224.js#L33-L49)

```diff
- 
-     function xk(kk) {
-       var ek, ik;
-       const Sk = fk.q[kk];
-       if (!Sk || Sk.itemTexture || !Sk.textureInfo) return null;
-       const {
-         textureInfo: rk,
-         texturePerSide: Pk
-       } = Sk, mk = kk => {
-         return "string" === typeof(ek = Pk && Array.isArray(rk) ? rk[Pk[kk]] : rk) ? Kk(ek, bk.g.BLOCK) : ek && "object" === typeof ek && "animTextures" in ek ? Kk((0, Dk.n)(ek), bk.g.BLOCK) : null;
-         var ek
-       }, Mk = mk(2);
-       return Mk ? {
-         top: Mk,
-         left: null !== (ek = mk(4)) && void 0 !== ek ? ek : Mk,
-         right: null !== (ik = mk(0)) && void 0 !== ik ? ik : Mk
- ... (1 more removed lines; see GitHub link above)
+     class eC {
+       constructor(CC, zC) {
+         this.press = CC, this.release = zC, this.downAtMs = null, this.token = null, this.latched = !1
+       }
+       update(CC, zC, ZC, QC) {
+         if (CC && null === this.downAtMs) return this.downAtMs = ZC, this.latched = QC, void(this.token = this.press());
+         null !== this.downAtMs && (this.latched ? CC && this.end() : !zC && ZC - this.downAtMs >= 40 && this.end())
+       }
+       isLatched() {
+         return null !== this.downAtMs && this.latched
+       }
+       unlatch() {
+         this.latched = !1
+       }
+       cancel() {
+         null !== this.downAtMs && this.end()
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L51-L55` → after: `L220-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L220-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/224.js#L220-L549) · [Before (L51-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/224.js#L51-L55)

```diff
- 
-     function nk(kk) {
-       var ek;
-       const ik = fk.q[kk];
-       return Kk(null !== (ek = null === ik || void 0 === ik ? void 0 : ik.itemTexture) && void 0 !== ek ? ek : "string" === typeof(null === ik || void 0 === ik ? void 0 : ik.textureInfo) ? ik.textureInfo : kk, bk.g.ITEM)
+     const hC = {
+         kind: "specialAction",
+         action: "SpecialAction2"
+       },
+       KC = CC => {
+         let zC = null;
+         const ZC = new iC.d,
+           QC = () => {
+             zC && (((CC, zC, ZC) => {
+               switch (ZC.kind) {
+                 case "reload":
+                   return void zC.specialActionUp("SpecialAction1");
+                 case "specialAction":
+                   return void zC.specialActionUp(ZC.action);
+                 case "customButton":
+                   return void AC.gameBridge.send("pressCustomButton", {
+ ... (314 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L57-L71` → after: `L551-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L551-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/224.js#L551-L677) · [Before (L57-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/224.js#L57-L71)

```diff
- 
-     function Uk(kk) {
-       var ek, ik;
-       return fk.q[kk] ? null !== (ek = null === (ik = xk(kk)) || void 0 === ik ? void 0 : ik.top) && void 0 !== ek ? ek : nk(kk) : null
-     }
- 
-     function Hk(kk) {
-       return Kk(kk, bk.g.ICON)
-     }
- 
-     function wk(kk) {
-       try {
-         return ik(3288)(`./${kk}.png`)
-       } catch {
-         return Mk(kk), null
+     const bC = (CC, zC, ZC, wC, bC) => {
+         let nC = 1;
+         return "boost" === ZC.lookCurve ? nC = CC.update(zC, ZC, bC) : CC.reset(),
+           function(CC, zC) {
+             let {
+               yawBoost: ZC = 1,
+               aiming: wC = !1
+             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+             const bC = (0, QC.h)((0, QC.i)(CC, zC.lookDeadzone), zC.lookCurve),
+               nC = 220 * Math.PI / 180,
+               fC = wC ? zC.aimLookSensitivity / 100 : 1,
+               oC = zC.lookSensitivityX / 100 * fC,
+               qC = zC.lookSensitivityY / 100 * fC;
+             return {
+               yawRadPerSec: bC.x * nC * oC * ZC * (zC.invertLookX ? -1 : 1),
+               pitchRadPerSec: bC.y * nC * .7 * qC * (zC.invertLookY ? -1 : 1)
+ ... (111 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L75` → after: `L681-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L681-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/224.js#L681-L684) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/224.js#L75)

```diff
-   36668: (kk, ek, ik) => {
+   40381: (CC, zC, ZC) => {
+     ZC(8850)
+   },
+   40389: (CC, zC, ZC) => {
```

#### 9. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L79-L237` → after: `L688-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L688-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/224.js#L688-L775) · [Before (L79-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/224.js#L79-L237)

```diff
-     const Dk = {
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
-         damageMultiplier: 1.7,
-         cooldownMultiplier: .81,
-         ability: "eclipseField"
-       },
-       "skyblock:forged:astral-diamond-moonstone": {
- ... (143 more removed lines; see GitHub link above)
+     var QC = ZC(28),
+       wC = ZC(8799),
+       bC = ZC(8803),
+       nC = ZC(8174),
+       fC = ZC(8208),
+       oC = ZC(8184),
+       qC = ZC(40392),
+       FC = ZC(40396),
+       WC = ZC(8223),
+       NC = ZC(8167),
+       MC = ZC(8729),
+       gC = ZC(8812);
+     const SC = [{
+         isOpen: wC.h,
+         openButton: () => (0, nC.i)("emoteWheel"),
+         aim: CC => {
+ ... (72 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 1. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L4)

```diff
-   36703: (kk, ek, ik) => {
+   38300: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L6-L8)

```diff
-       d: () => Sk,
-       e: () => Dk,
-       i: () => fk
+       e: () => gC
```

#### 3. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L10-L15` → after: `L8-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L8-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L8-L608) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L10-L15)

```diff
-     const Dk = 1 / 2.2,
-       fk = 2.2;
-     Math.sqrt(5);
-     let Sk = .001
-   },
-   36729: (kk, ek, ik) => {
+     var QC = ZC(184),
+       wC = ZC(37496);
+     const bC = 1.2,
+       nC = {
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
+         Mq: .5,
+ ... (585 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L610) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L17)

```diff
-       return parseInt(kk.toString().replace(/\W/g, ""))
+       return MC[CC]
```

#### 5. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L19-L22` → after: `L612-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L612-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L612-L774) · [Before (L19-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L19-L22)

```diff
- 
-     function fk(kk, ek) {
-       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(kk - ek) <= ik
+   },
+   36938: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => QC
+     });
+     const QC = {
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
+ ... (147 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L25-L27` → after: `L788-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L788-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L788-L800) · [Before (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L25-L27)

```diff
-     function Sk(kk, ek, ik) {
-       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
-       return kk < ek - Dk || kk > ik + Dk
+     function PC(...CC) {
+       return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = function(...CC) {
+         for (YC(CC[pC[12]] = pC[2], CC[-pC[5]] = 'C0w}[Do()ex8%fp~/1iVvzgRu<>*SE9=.a{|WPh:Njmtqy2Z`b63!B4JnLd5l$HKkQX7sU^,Yc?&FIM@#A"rT;G_]+O', CC[pC[0]] = "" + (CC[pC[1]] || ""), CC[pC[4]] = CC[pC[0]].length, CC[pC[10]] = [], CC[pC[8]] = pC[1], CC[pC[9]] = pC[1], CC[pC[7]] = -pC … [truncated]
+           if (CC[-pC[6]] = CC[-pC[5]].indexOf(CC[pC[0]][CC[pC[3]]]), CC[-pC[6]] !== -pC[2])
+             if (CC[pC[7]] < pC[1]) CC[pC[7]] = CC[-pC[6]];
+             else {
+               YC(CC[pC[7]] += CC[-pC[6]] * pC[30], CC[pC[8]] |= CC[pC[7]] << CC[pC[9]], CC[pC[9]] += (CC[pC[7]] & pC[32]) > pC[33] ? pC[34] : pC[35]);
+               do {
+                 YC(CC[pC[10]].push(CC[pC[8]] & pC[11]), CC[pC[8]] >>= pC[3], CC[pC[9]] -= pC[3])
+               } while (CC[pC[9]] > pC[24]);
+               CC[pC[7]] = -pC[2]
+             } return CC[pC[7]] > -pC[2] && CC[pC[10]].push((CC[pC[8]] | CC[pC[7]] << CC[pC[9]]) & pC[11]), GC(CC[pC[10]])
+       }(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
```

#### 7. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L30-L31` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L803-L804) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L30-L31)

```diff
-     function bk(kk, ek) {
-       return kk === ek ? kk : Math.random() * (ek - kk) + kk
+     function GC(...CC) {
+       return CC[pC[12]] = pC[2], typeof FC !== pC[16] && FC ? (new FC).decode(new WC(CC[pC[1]])) : typeof NC !== pC[16] && NC ? NC.from(CC[pC[1]]).toString("utf-8") : SC(CC[pC[1]])
```

#### 8. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L34-L35` → after: `L807-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L807-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L807-L821) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L34-L35)

```diff
-     function rk(kk, ek, ik) {
-       return kk + (ek - kk) * ik
+     function RC(...CC) {
+       if (CC[pC[12]] = pC[13], CC[pC[1]] === function(...CC) {
+           return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = function(...CC) {
+             for (YC(CC[pC[12]] = pC[2], CC[pC[2]] = 'E/aMDlR5Wiz#j8uZ}]Sn6=O1.K3@|INTmAUV<pv*JBq(H`ybCwGf_kFgX9[^eQLPs%Ytc?ho)d!x~&+"$0,4>:;7{2r', CC[pC[27]] = "" + (CC[pC[1]] || ""), CC[pC[4]] = CC[pC[27]].length, CC[-pC[36]] = [], CC[-pC[31]] = pC[1], CC[pC[22]] = pC[1], CC[pC[ … [truncated]
+               if (CC[pC[29]] = CC[pC[2]].indexOf(CC[pC[27]][CC[pC[28]]]), CC[pC[29]] !== -pC[2])
+                 if (CC[pC[24]] < pC[1]) CC[pC[24]] = CC[pC[29]];
+                 else {
+                   YC(CC[pC[24]] += CC[pC[29]] * pC[30], CC[-pC[31]] |= CC[pC[24]] << CC[pC[22]], CC[pC[22]] += (CC[pC[24]] & pC[32]) > pC[33] ? pC[34] : pC[35]);
+                   do {
+                     YC(CC[-pC[36]].push(CC[-pC[31]] & pC[11]), CC[-pC[31]] >>= pC[3], CC[pC[22]] -= pC[3])
+                   } while (CC[pC[22]] > pC[24]);
+                   CC[pC[24]] = -pC[2]
+                 } return CC[pC[24]] > -pC[2] && CC[-pC[36]].push((CC[-pC[31]] | CC[pC[24]] << CC[pC[22]]) & pC[11]), GC(CC[-pC[36]])
+           }(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
+         }(81) + pC[96]) return CC[pC[2]] + CC[pC[27]]
```

#### 9. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L38-L41` → after: `L824-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L824-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L824-L878) · [Before (L38-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L38-L41)

```diff
-     function Pk(kk, ek, ik) {
-       let Dk = wk(ek - kk, 360);
-       return Dk > 180 && (Dk -= 360), kk + Dk * xk(ik)
-     }
+     function AC() {}
+     YC(fC = {}, oC = ["?1fxlY70", "&m7B]L1jD", "Gcb*0WcEW4]A,p~>D>d3ph}&mHS(=p]m2o:cXAC", "pL(okdc3Hiy5+uQP:,>&|&w9(k|", "C20&IA~V|4d#fD+|.P!I:4999XfYk5QP*2L._!qw", "o%]b8`6GT438`*p", '}llIPs"#Qeo"|67iM3wYhcs%TV3UW,9u', ">v6Y9!A|l8|FC", "@S*E}@*B|kPSv*k9[[;,CWm9Jfm", '6LZ[msWi&nw … [truncated]
+       YC(CC[pC[12]] = pC[1], CC[pC[14]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], CC[pC[2]] = pC[17], CC[pC[4]] = []);
+       try {
+         YC(CC[pC[2]] = Object, CC[pC[4]][pC[26]]("".__proto__.constructor.name))
+       } catch (oC) {}
+       CC: for (CC[pC[13]] = pC[1]; CC[pC[13]] < CC[pC[14]][pC[12]]; CC[pC[13]]++) try {
+         for (CC[pC[2]] = CC[pC[14]][CC[pC[13]]](), CC[pC[15]] = pC[1]; CC[pC[15]] < CC[pC[4]][pC[12]]; CC[pC[15]]++)
+ ... (39 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L43-L45` → after: `L880-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L880-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L880-L881) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L43-L45)

```diff
-     function mk(kk, ek, ik) {
-       let Dk;
-       return Dk = kk != ek ? xk((ik - kk) / (ek - kk)) : 0, Dk
+     function YC() {
+       YC = function() {}
```

#### 11. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L48-L52` → after: `L921-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L921-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L921-L923) · [Before (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L48-L52)

```diff
-     function Mk(kk, ek, ik, Dk, fk) {
-       const Sk = fk * fk,
-         bk = fk * Sk;
-       return kk * (2 * bk - 3 * Sk + 1) + ik * (-2 * bk + 3 * Sk) + ek * (bk - 2 * Sk + fk) + Dk * (bk - Sk)
-     }
+         function SC(...CC) {
+           return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = gC(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
+         }
```

#### 12. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L54-L57` → after: `L925-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L925-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L925-L956) · [Before (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L54-L57)

```diff
-     function Kk(kk, ek, ik, Dk, fk) {
-       const Sk = fk * fk;
-       return 6 * (Sk - fk) * kk + (3 * Sk - 4 * fk + 1) * ek + 6 * (-Sk + fk) * ik + (3 * Sk - 2 * fk) * Dk
-     }
+         function PC(...CC) {
+           var zC;
+           YC(CC[pC[12]] = pC[1], zC = function(...CC) {
+             YC(CC[pC[12]] = pC[2], this.HW = CC[pC[1]], this.length = pC[1], this.map = {}, this.head = pC[57], this.tail = pC[57])
+           }, zC.prototype.get = function(...CC) {
+             var zC;
+             return YC(CC[pC[12]] = pC[2], zC = this.map[CC[pC[1]]]), zC ? (this.remove(zC), this.insert(zC.key, zC.val), zC.val) : -pC[2]
+           }, zC.prototype.put = function(...CC) {
+             YC(CC[pC[12]] = pC[27], this.map[CC[pC[1]]] ? (this.remove(this.map[CC[pC[1]]]), this.insert(CC[pC[1]], CC[pC[2]])) : this.length === this.HW ? (this.remove(this.head), this.insert(CC[pC[1]], CC[pC[2]])) : (this.insert(CC[pC[1]], CC[pC[2]]), this.length++))
+           }, zC.prototype.remove = function(...CC) {
+             YC(CC[pC[12]] = pC[2], CC[pC[14]] = CC[pC[1]].prev, CC[pC[56]] = CC[pC[1]].next), CC[pC[56]] && (CC[pC[56]].prev = CC[pC[14]]), CC[pC[14]] && (CC[pC[14]].next = CC[pC[56]]), this.head === CC[pC[1]] && (this.head = CC[pC[56]]), this.tail === CC[pC[1]] && (this.tail = C … [truncated]
+           }, zC.prototype.insert = function(...CC) {
+             YC(CC[pC[12]] = pC[27], CC[pC[14]] = new List(CC[pC[1]], CC[pC[2]]), this.tail ? (this.tail.next = CC[pC[14]], CC[pC[14]].prev = this.tail, this.tail = CC[pC[14]]) : (this.tail = CC[pC[14]], this.head = CC[pC[14]]), this.map[CC[pC[1]]] = CC[pC[14]])
+           }, console.log(zC))
+         }
+         zC(129) + "0" in AC && PC(), YC(KC(JC, xC, hC), KC(IC, hC, xC), wC()[SC(pC[75])](iC, hC, IC));
+ ... (16 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L59-L63` → after: `L958-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L958-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L958-L960) · [Before (L59-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L59-L63)

```diff
-     function xk(kk) {
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       return Math.min(ik, Math.max(ek, kk))
-     }
+           function EC(...CC) {
+             return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = HC(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
+           }
```

#### 14. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L65-L67` → after: `L962-L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L962-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L962-L1034) · [Before (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L65-L67)

```diff
-     function nk(kk) {
-       return kk -= 2 * Math.PI * Math.floor((kk + Math.PI) / (2 * Math.PI))
-     }
+           function lC(...CC) {
+             CC[pC[12]] = pC[1];
+             const zC = require("big-integer");
+             YC(CC[pC[14]] = class {
+               static randomPrime(...CC) {
+                 CC[pC[12]] = pC[2];
+                 const ZC = zC.one.shiftLeft(CC[pC[1]] - pC[2]),
+                   QC = zC.one.shiftLeft(CC[pC[1]]).prev();
+                 for (;;) {
+                   let CC = zC.randBetween(ZC, QC);
+                   if (CC.isProbablePrime(pC[98])) return CC
+                 }
+               }
+               static generate(...CC) {
+                 CC[pC[12]] = pC[2];
+                 const ZC = zC(65537);
+ ... (57 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L69-L72` → after: `L1036-L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1036-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1036-L1038) · [Before (L69-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L69-L72)

```diff
-     function Uk(kk) {
-       const ek = kk.toString(16);
-       return kk <= 15 ? ("0" + ek).toUpperCase() : ek.toUpperCase()
-     }
+         function cC(...CC) {
+           return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = XC(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
+         }
```

#### 16. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L74-L85` → after: `L1040-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1040-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1040-L1069) · [Before (L74-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L74-L85)

```diff
-     function Hk(kk) {
-       if (Math.log2) return Math.floor(Math.log2(kk));
-       if (kk < 0) return NaN;
-       if (0 === kk) return -1 / 0;
-       let ek = 0;
-       if (kk < 1) {
-         for (; kk < 1;) ek++, kk *= 2;
-         ek = -ek
-       } else if (kk > 1)
-         for (; kk > 1;) ek++, kk = Math.floor(kk / 2);
-       return ek
-     }
+         function uC(...CC) {
+           YC(CC[pC[12]] = pC[1], CC[pC[87]] = function(...CC) {
+             for (YC(CC[pC[12]] = pC[2], CC[pC[14]] = CC[pC[1]].length, CC[pC[0]] = [], CC[pC[13]] = pC[1], CC[pC[18]] = pC[1], CC[pC[1]].sort(((CC, zC) => CC - zC))), CC[pC[52]] = pC[1]; CC[pC[52]] < CC[pC[14]]; CC[pC[52]]++)
+               if (!(CC[pC[52]] > pC[1] && CC[pC[1]][CC[pC[52]]] === CC[pC[1]][CC[pC[52]] - pC[2]]))
+                 for (YC(CC[pC[13]] = CC[pC[52]] + pC[2], CC[pC[18]] = CC[pC[14]] - pC[2]); CC[pC[13]] < CC[pC[18]];)
+                   if (CC[pC[1]][CC[pC[52]]] + CC[pC[1]][CC[pC[13]]] + CC[pC[1]][CC[pC[18]]] < pC[1]) CC[pC[13]]++;
+                   else if (CC[pC[1]][CC[pC[52]]] + CC[pC[1]][CC[pC[13]]] + CC[pC[1]][CC[pC[18]]] > pC[1]) CC[pC[18]]--;
+             else {
+               for (CC[pC[0]].push([CC[pC[1]][CC[pC[52]]], CC[pC[1]][CC[pC[13]]], CC[pC[1]][CC[pC[18]]]]); CC[pC[13]] < CC[pC[18]] && CC[pC[1]][CC[pC[13]]] === CC[pC[1]][CC[pC[13]] + pC[2]];) CC[pC[13]]++;
+               for (; CC[pC[13]] < CC[pC[18]] && CC[pC[1]][CC[pC[18]]] === CC[pC[1]][CC[pC[18]] - pC[2]];) CC[pC[18]]--;
+               YC(CC[pC[13]]++, CC[pC[18]]--)
+             }
+             return CC[pC[0]]
+           }, console.log(CC[pC[87]]))
+         }
+         cC(pC[101]) + pC[0] in AC && uC();
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L87-L89` → after: `L1071-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1071-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1071-L1073) · [Before (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L87-L89)

```diff
-     function wk(kk, ek) {
-       return kk - Math.floor(kk / ek) * ek
-     }
+           function aC(...CC) {
+             return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = TC(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
+           }
```

#### 18. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L91-L93` → after: `L1075-L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1075-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1075-L1079) · [Before (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L91-L93)

```diff
-     function lk(kk, ek, ik) {
-       return (kk - ek) / (ik - ek)
-     }
+           function tC(...CC) {
+             YC(CC[pC[12]] = pC[1], CC[-pC[93]] = function(...CC) {
+               function zC(...CC) {
+                 return CC[pC[12]] = pC[27], bC(QC(nC(CC[pC[1]]), nC(CC[pC[2]])))
+               }
```

#### 19. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L95-L97` → after: `L1081-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1081-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1081-L1094) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L95-L97)

```diff
-     function pk(kk, ek, ik) {
-       return kk * (ik - ek) + ek
-     }
+               function ZC(...CC) {
+                 return CC[pC[12]] = pC[13],
+                   function(...CC) {
+                     var zC, ZC, QC, wC;
+                     for (YC(CC[pC[12]] = pC[27], CC[pC[14]] = CC[pC[2]].length, CC[-pC[105]] = Array()), CC[pC[104]] = Array(Math.ceil(CC[pC[1]].length / pC[27])), zC = pC[1]; zC < CC[pC[104]].length; zC++) CC[pC[104]][zC] = CC[pC[1]].charCodeAt(zC * pC[27]) << pC[3] | CC[pC[1]]. … [truncated]
+                     for (; CC[pC[104]].length > pC[1];) {
+                       for (YC(wC = Array(), QC = pC[1]), zC = pC[1]; zC < CC[pC[104]].length; zC++) YC(QC = (QC << pC[95]) + CC[pC[104]][zC], ZC = Math.floor(QC / CC[pC[14]]), QC -= ZC * CC[pC[14]]), (wC.length > pC[1] || ZC > pC[1]) && (wC[wC.length] = ZC);
+                       YC(CC[-pC[105]][CC[-pC[105]].length] = QC, CC[pC[104]] = wC)
+                     }
+                     for (CC[pC[106]] = "", zC = CC[-pC[105]].length - pC[2]; zC >= pC[1]; zC--) CC[pC[106]] += CC[pC[2]].charAt(CC[-pC[105]][zC]);
+                     for (CC[pC[31]] = Math.ceil(CC[pC[1]].length * pC[3] / (Math.log(CC[pC[2]].length) / Math.log(pC[27]))), zC = CC[pC[106]].length; zC < CC[pC[31]]; zC++) CC[pC[106]] = CC[pC[2]][pC[1]] + CC[pC[106]];
+                     return CC[pC[106]]
+                   }(QC(nC(CC[pC[1]]), nC(CC[pC[2]])), CC[pC[27]])
+               }
```

#### 20. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L99-L102` → after: `L1096-L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1096-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1096-L1102) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L99-L102)

```diff
-     function yk(kk, ek) {
-       let ik = wk(ek - kk, 360);
-       return ik > 180 && (ik -= 360), ik
-     }
+               function QC(...CC) {
+                 YC(CC[pC[12]] = pC[27], CC[pC[27]] = qC(CC[pC[1]])), CC[pC[27]].length > pC[95] && (CC[pC[27]] = JC(CC[pC[27]], CC[pC[1]].length * pC[3]));
+                 var zC = Array(pC[95]),
+                   ZC = Array(pC[95]);
+                 for (CC[pC[0]] = pC[1]; CC[pC[0]] < pC[95]; CC[pC[0]]++) YC(zC[CC[pC[0]]] = 909522486 ^ CC[pC[27]][CC[pC[0]]], ZC[CC[pC[0]]] = 1549556828 ^ CC[pC[27]][CC[pC[0]]]);
+                 return CC[pC[18]] = JC(zC.concat(qC(CC[pC[2]])), pC[97] + CC[pC[2]].length * pC[3]), FC(JC(ZC.concat(CC[pC[18]]), RC(aC(159) + pC[96], pC[97], pC[98])))
+               }
```

#### 21. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L104-L107` → after: `L1104-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1104-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1104-L1131) · [Before (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L104-L107)

```diff
-     function Yk(kk, ek) {
-       const ik = wk(kk, 2 * ek);
-       return ek - Math.abs(ik - ek)
-     }
+               function wC(...zC) {
+                 function QC(...CC) {
+                   return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = function(CC) {
+                     var zC, ZC, QC, wC, bC, nC, fC;
+                     for (YC(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = pC[1], bC = pC[1], nC = -pC[2]), fC = pC[1]; fC < ZC; fC++) {
+                       var oC = 'PN1IE!0zmbg.s|K_J<h?dLHkyq2Go7cD)@*OT,&]RVXfWFA%n4:`UBjQC"x5ZSipt6[rl#M9+w/^eY3v$(={>u;}~8a'.indexOf(zC[fC]);
+                       if (oC !== -pC[2])
+                         if (nC < pC[1]) nC = oC;
+                         else {
+                           YC(nC += oC * pC[30], wC |= nC << bC, bC += (nC & pC[32]) > pC[33] ? pC[34] : pC[35]);
+                           do {
+                             YC(QC.push(wC & pC[11]), wC >>= pC[3], bC -= pC[3])
+                           } while (bC > pC[24]);
+                           nC = -pC[2]
+                         }
+                     }
+ ... (12 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L109-L112` → after: `L1133-L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1133-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1133-L1157) · [Before (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L109-L112)

```diff
-     function Lk(kk, ek, ik) {
-       let Dk = xk(ik);
-       return Dk = -2 * Dk * Dk * Dk + 3 * Dk * Dk, ek * Dk + kk * (1 - Dk)
-     }
+               function bC(...zC) {
+                 function QC(...CC) {
+                   return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = function(...CC) {
+                     for (YC(CC[pC[12]] = pC[2], CC[pC[2]] = 'o7jsInAFUZTDz]t@WG|y{,)V6/r=xd:_2S>ml?1w`}vc[<0OC^eHB8RkuXY!%Q$3aE*PhiLKf+(q~5p#g4b";JMN9&.', CC[pC[27]] = "" + (CC[pC[1]] || ""), CC[-pC[101]] = CC[pC[27]].length, CC[-pC[90]] = [], CC[pC[52]] = pC[1], CC[pC[102]] = pC … [truncated]
+                       if (CC[pC[29]] = CC[pC[2]].indexOf(CC[pC[27]][CC[pC[3]]]), CC[pC[29]] !== -pC[2])
+                         if (CC[pC[7]] < pC[1]) CC[pC[7]] = CC[pC[29]];
+                         else {
+                           YC(CC[pC[7]] += CC[pC[29]] * pC[30], CC[pC[52]] |= CC[pC[7]] << CC[pC[102]], CC[pC[102]] += (CC[pC[7]] & pC[32]) > pC[33] ? pC[34] : pC[35]);
+                           do {
+                             YC(CC[-pC[90]].push(CC[pC[52]] & pC[11]), CC[pC[52]] >>= pC[3], CC[pC[102]] -= pC[3])
+                           } while (CC[pC[102]] > pC[24]);
+                           CC[pC[7]] = -pC[2]
+                         } return CC[pC[7]] > -pC[2] && CC[-pC[90]].push((CC[pC[52]] | CC[pC[7]] << CC[pC[102]]) & pC[11]), GC(CC[-pC[90]])
+                   }(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
+                 }
+                 zC[pC[12]] = pC[2];
+ ... (9 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L114-L117` → after: `L1159-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1159-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1159-L1163) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L114-L117)

```diff
-     function Ck(kk, ek, ik) {
-       let Dk;
-       return Dk = Math.abs(ek - kk) <= ik ? ek : kk + Math.sign(ek - kk) * ik, Dk
-     }
+               function nC(...CC) {
+                 var zC, ZC;
+                 for (YC(CC[pC[12]] = pC[2], CC[pC[14]] = "", CC[pC[27]] = -pC[2]); ++CC[pC[27]] < CC[pC[1]].length;) YC(zC = CC[pC[1]].charCodeAt(CC[pC[27]]), ZC = CC[pC[27]] + pC[2] < CC[pC[1]].length ? CC[pC[1]].charCodeAt(CC[pC[27]] + pC[2]) : pC[1]), 55296 <= zC && zC <= 5631 … [truncated]
+                 return CC[pC[14]]
+               }
```

#### 24. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L119-L123` → after: `L1165-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1165-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1165-L1169) · [Before (L119-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L119-L123)

```diff
-     function Ak(kk, ek, ik) {
-       const Dk = yk(kk, ek);
-       let fk;
-       return fk = -ik < Dk && Dk < ik ? ek : Ck(kk, ek = kk + Dk, ik), fk
-     }
+               function qC(...CC) {
+                 for (YC(CC[pC[12]] = pC[2], CC[pC[14]] = Array(CC[pC[1]].length >> pC[27])), CC[pC[111]] = pC[1]; CC[pC[111]] < CC[pC[14]].length; CC[pC[111]]++) CC[pC[14]][CC[pC[111]]] = pC[1];
+                 for (CC[pC[111]] = pC[1]; CC[pC[111]] < CC[pC[1]].length * pC[3]; CC[pC[111]] += pC[3]) CC[pC[14]][CC[pC[111]] >> pC[52]] |= (CC[pC[1]].charCodeAt(CC[pC[111]] / pC[3]) & pC[11]) << pC[113] - CC[pC[111]] % pC[112];
+                 return CC[pC[14]]
+               }
```

#### 25. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L125-L127` → after: `L1171-L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1171-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1171-L1174) · [Before (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L125-L127)

```diff
-     function jk(kk, ek, ik) {
-       return (kk - ek) / (ik - ek)
-     }
+               function FC(...CC) {
+                 for (YC(CC[pC[12]] = pC[2], CC[pC[2]] = ""), CC[pC[27]] = pC[1]; CC[pC[27]] < CC[pC[1]].length * pC[112]; CC[pC[27]] += pC[3]) CC[pC[2]] += String.fromCharCode(CC[pC[1]][CC[pC[27]] >> pC[52]] >>> pC[113] - CC[pC[27]] % pC[112] & pC[11]);
+                 return CC[pC[2]]
+               }
```

#### 26. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L129-L131` → after: `L1176-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1176-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1176-L1178) · [Before (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L129-L131)

```diff
-     function sk(kk, ek, ik) {
-       return (ik - ek) * kk + ek
-     }
+               function WC(...CC) {
+                 return CC[pC[12]] = pC[27], CC[pC[1]] >>> CC[pC[2]] | CC[pC[1]] << pC[112] - CC[pC[2]]
+               }
```

#### 27. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L133-L182` → after: `L1180-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1180-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1180-L1182) · [Before (L133-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L133-L182)

```diff
-     function dk(kk, ek) {
-       const ik = kk % ek;
-       return 0 === ik ? ek : dk(ek, ik)
-     }
-     ik.r(ek), ik.d(ek, {
-       Clamp: () => xk,
-       DeltaAngle: () => yk,
-       Denormalize: () => pk,
-       ExtractAsInt: () => Dk,
-       Hermite: () => Mk,
-       Hermite1stDerivative: () => Kk,
-       HighestCommonFactor: () => dk,
-       ILog2: () => Hk,
-       InverseLerp: () => mk,
-       Lerp: () => rk,
-       LerpAngle: () => Pk,
- ... (34 more removed lines; see GitHub link above)
+               function NC(...CC) {
+                 return CC[pC[12]] = pC[27], CC[pC[1]] >>> CC[pC[2]]
+               }
```

#### 28. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L184-L207` → after: `L1184-L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1184-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1184-L1236) · [Before (L184-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L184-L207)

```diff
-     function fk(kk, ek) {
-       return Dk(kk, ek)
-     }
-     ik.d(ek, {
-       c: () => Dk,
-       e: () => fk,
-       h: () => bk
-     });
-     const Sk = ["push", "splice", "pop", "shift", "unshift"];
- 
-     function bk(kk, ek) {
-       const ik = Sk.map((ik => function(kk, ek, ik) {
-         const Dk = kk[ek];
-         if ("function" !== typeof Dk) return null;
-         const fk = function() {
-           const Dk = kk.length,
- ... (8 more removed lines; see GitHub link above)
+               function MC(...CC) {
+                 return CC[pC[12]] = pC[13], CC[pC[1]] & CC[pC[2]] ^ ~CC[pC[1]] & CC[pC[27]]
+               }
+ 
+               function gC(...CC) {
+                 return CC[pC[12]] = pC[13], CC[pC[1]] & CC[pC[2]] ^ CC[pC[1]] & CC[pC[27]] ^ CC[pC[2]] & CC[pC[27]]
+               }
+ 
+               function SC(CC) {
+                 return WC(CC, pC[27]) ^ WC(CC, pC[34]) ^ WC(CC, 22)
+               }
+ 
+               function PC(...CC) {
+                 return CC[pC[12]] = pC[2], WC(CC[pC[1]], pC[22]) ^ WC(CC[pC[1]], 11) ^ WC(CC[pC[1]], 25)
+               }
+ 
+ ... (37 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L209-L211` → after: `L1238-L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1238-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1238-L1239) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L209-L211)

```diff
-       }(kk, ik, ek)));
-       return () => {
-         for (const kk of ik) kk?.()
+         let sC = CC[pC[27]][cC(170) + cC(171) + "ss"] * NC;
+         NC < .3 && (sC *= NC), rC > sC && (rC = sC), YC(wC()[cC(172)](FC, FC, rC), CC[pC[18]][cC(173) + cC(174)](FC))
```

#### 30. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L215` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1244) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L215)

```diff
-   36734: (kk, ek, ik) => {
+   37496: (CC, zC, ZC) => {
```

#### 31. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L218` → after: `L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1247) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L218)

```diff
-       h: () => fk
+       f: () => fC
```

#### 32. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L220` → after: `L1249-L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1249-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1249-L1291) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L220)

```diff
-     const Dk = {};
+     var QC = ZC(37504),
+       wC = ZC(1806);
+     const bC = 2,
+       nC = 1,
+       fC = {
+         Mq: 1,
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

#### 33. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L222-L227` → after: `L1293-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1293-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/225.js#L1293-L1303) · [Before (L222-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/225.js#L222-L227)

```diff
-     function fk(kk, ek) {
-       Dk[kk] = ek
-     }
- 
-     function Sk(kk) {
-       return Dk[kk]
+     function oC(CC, zC, ZC, fC, oC, qC, FC) {
+       if (oC.speed) return (0, QC.d)(zC, ZC, fC, oC, qC, FC, CC), void(oC.ticksToReachMaxIdleFriction = bC);
+       const WC = fC.isOnGround(),
+         NC = zC.bloxd.getSyncedClientOptions(zC.bloxd.getPlayerReader(ZC)),
+         MC = null === NC ? zC.bloxd.getClientPredictedOption(ZC, "groundFrictionScale") : NC.groundFrictionScale,
+         gC = null === NC ? zC.bloxd.getClientPredictedOption(ZC, "airFrictionScale") : NC.airFrictionScale,
+         SC = WC ? MC : gC,
+         pC = Math.max(nC, SC),
+         PC = oC.ticksToReachMaxIdleFriction / bC,
+         GC = (0, wC.s)(pC, SC, PC);
+       qC.friction = CC.standingFriction * ((null === NC ? zC.bloxd.getClientPredictedOption(ZC, "airMomentumConservation") : NC.airMomentumConservation) ? GC : SC), oC.ticksToReachMaxIdleFriction > 0 && oC.ticksToReachMaxIdleFriction--
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/226.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/226.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65)

#### 1. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L3)

```diff
- export const ids = [226, 233];
+ export const ids = [226];
```

#### 2. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L5-L25` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L4-L10) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L5-L25)

```diff
-   37881: kk => {
-     kk.exports = function(kk) {
-       return null != kk && null != kk.constructor && "function" === typeof kk.constructor.isBuffer && kk.constructor.isBuffer(kk)
-     }
-   },
-   37867: (kk, ek, ik) => {
-     var Dk = ik(37871),
-       fk = ik(37877),
-       Sk = ik(37881);
-     ik.g.__TYPEDARRAY_POOL || (ik.g.__TYPEDARRAY_POOL = {
-       UINT8: fk([32, 0]),
-       UINT16: fk([32, 0]),
-       UINT32: fk([32, 0]),
-       INT8: fk([32, 0]),
-       INT16: fk([32, 0]),
-       INT32: fk([32, 0]),
- ... (5 more removed lines; see GitHub link above)
+   39617: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       getBlockFaces: () => NC,
+       getIngameIconUrl: () => SC,
+       getItemIconUrl: () => gC,
+       getItemTextureUrl: () => MC,
+       getParticleTextureUrl: () => pC
```

#### 3. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L27-L66` → after: `L12-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L12-L18) · [Before (L27-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L27-L66)

```diff
-     var bk = "undefined" !== typeof Uint8ClampedArray,
-       rk = ik.g.__TYPEDARRAY_POOL;
-     rk.UINT8C || (rk.UINT8C = fk([32, 0])), rk.BUFFER || (rk.BUFFER = fk([32, 0]));
-     var Pk = rk.DATA,
-       mk = rk.BUFFER;
- 
-     function Mk(kk) {
-       if (kk) {
-         var ek = kk.length || kk.byteLength,
-           ik = Dk.log2(ek);
-         Pk[ik].push(kk)
-       }
-     }
- 
-     function Kk(kk) {
-       kk = Dk.nextPow2(kk);
- ... (24 more removed lines; see GitHub link above)
+     var QC = ZC(4386),
+       wC = ZC(36897),
+       bC = ZC(9188),
+       nC = ZC(3140);
+     const fC = new Set,
+       oC = new Set;
+     let qC = null;
```

#### 4. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L69` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L21-L23) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L69)

```diff
-       return new Int32Array(Kk(4 * kk), 0, kk)
+       fC.has(CC) || (fC.add(CC), oC.add(CC), qC ??= setTimeout((() => {
+         console.warn(`Docs gallery: no default texture for ${oC.size} names`, [...oC]), oC.clear(), qC = null
+       }), 1e3))
```

#### 5. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L72-L73` → after: `L26-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L26-L31) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L72-L73)

```diff
-     function pk(kk) {
-       return new Float32Array(Kk(4 * kk), 0, kk)
+     function WC(CC, zC) {
+       try {
+         return (0, bC.getDefaultTexture)(CC, zC).url
+       } catch {
+         return FC(CC), null
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L77` → after: `L35-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L35-L49) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L77)

```diff
-       return new Float64Array(Kk(8 * kk), 0, kk)
+       var zC, ZC;
+       const bC = wC.m[CC];
+       if (!bC || bC.itemTexture || !bC.textureInfo) return null;
+       const {
+         textureInfo: fC,
+         texturePerSide: oC
+       } = bC, qC = CC => {
+         return "string" === typeof(zC = oC && Array.isArray(fC) ? fC[oC[CC]] : fC) ? WC(zC, nC.j.BLOCK) : zC && "object" === typeof zC && "animTextures" in zC ? WC((0, QC.j)(zC), nC.j.BLOCK) : null;
+         var zC
+       }, FC = qC(2);
+       return FC ? {
+         top: FC,
+         left: null !== (zC = qC(4)) && void 0 !== zC ? zC : FC,
+         right: null !== (ZC = qC(0)) && void 0 !== ZC ? ZC : FC
+       } : null
```

#### 7. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L81` → after: `L53-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L53-L55) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L81)

```diff
-       return bk ? new Uint8ClampedArray(Kk(kk), 0, kk) : xk(kk)
+       var zC;
+       const ZC = wC.m[CC];
+       return WC(null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.itemTexture) && void 0 !== zC ? zC : "string" === typeof(null === ZC || void 0 === ZC ? void 0 : ZC.textureInfo) ? ZC.textureInfo : CC, nC.j.ITEM)
```

#### 8. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L153-L245` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L60) · [Before (L153-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L153-L245)

```diff
-       return ek = (kk > 65535) << 4, ek |= ik = ((kk >>>= ek) > 255) << 3, ek |= ik = ((kk >>>= ik) > 15) << 2, (ek |= ik = ((kk >>>= ik) > 3) << 1) | (kk >>>= ik) >> 1
-     }, ek.log10 = function(kk) {
-       return kk >= 1e9 ? 9 : kk >= 1e8 ? 8 : kk >= 1e7 ? 7 : kk >= 1e6 ? 6 : kk >= 1e5 ? 5 : kk >= 1e4 ? 4 : kk >= 1e3 ? 3 : kk >= 100 ? 2 : kk >= 10 ? 1 : 0
-     }, ek.popCount = function(kk) {
-       return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
-     }, ek.countTrailingZeros = ik, ek.nextPow2 = function(kk) {
-       return kk += 0 === kk, --kk, kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) + 1
-     }, ek.prevPow2 = function(kk) {
-       return kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) - (kk >>> 1)
-     }, ek.parity = function(kk) {
-       return kk ^= kk >>> 16, kk ^= kk >>> 8, kk ^= kk >>> 4, 27030 >>> (kk &= 15) & 1
-     };
-     var Dk = new Array(256);
-     ! function(kk) {
-       for (var ek = 0; ek < 256; ++ek) {
-         var ik = ek,
- ... (77 more removed lines; see GitHub link above)
+       return wC.m[CC] ? null !== (zC = null === (ZC = NC(CC)) || void 0 === ZC ? void 0 : ZC.top) && void 0 !== zC ? zC : MC(CC) : null
```

#### 9. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L266-L551` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L64) · [Before (L266-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L266-L551)

```diff
-       var ek = "bruteForce" + (kk ? "Full" : "Partial"),
-         Dk = [],
-         bk = xk.slice();
-       kk || bk.splice(3, 0, fk);
-       var rk = ["function " + ek + "(" + bk.join() + "){"];
- 
-       function Pk(ek, fk) {
-         var bk = function(kk, ek, Dk) {
-           var fk = "bruteForce" + (kk ? "Red" : "Blue") + (ek ? "Flip" : "") + (Dk ? "Full" : ""),
-             bk = ["function ", fk, "(", xk.join(), "){", "var ", Sk, "=2*", ik, ";"],
-             rk = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
-             Pk = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Dk ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
-           return kk ? bk.push(rk, "Q", ":", Pk) : bk.push(Pk, "Q", ":", rk), Dk ? bk.push("if(y1<x0||x1<y0)continue;") : ek ? bk.push("if(y0<=x0||x1<y0)continue;") : bk.push("if(y0<x0||x1<y0)continue;"), bk.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b … [truncated]
-             name: fk,
-             code: bk.join("")
-           }
- ... (270 more removed lines; see GitHub link above)
+       return WC(CC, nC.j.ICON)
```

#### 10. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L554-L579` → after: `L67-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L67-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L67-L71) · [Before (L554-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L554-L579)

```diff
-     function Pk(kk, ek, ik, Dk) {
-       var fk = Dk[kk *= 2];
-       return fk < ek || fk === ek && Dk[kk + 1] < ik
-     }
- 
-     function mk(kk, Mk, Kk) {
-       var xk = (Mk - kk + 1) / 6 | 0,
-         nk = kk + xk,
-         Uk = Mk - xk,
-         Hk = kk + Mk >> 1,
-         wk = Hk - xk,
-         lk = Hk + xk,
-         pk = nk,
-         yk = wk,
-         Yk = Hk,
-         Lk = lk,
- ... (10 more removed lines; see GitHub link above)
+     function pC(CC) {
+       try {
+         return ZC(3308)(`./${CC}.png`)
+       } catch {
+         return FC(CC), null
```

#### 11. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L595-L606` → after: `L75-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L75-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L75-L85) · [Before (L595-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L595-L606)

```diff
-   37887: (kk, ek, ik) => {
-     kk.exports = {
-       init: function(kk) {
-         var ek = fk.nextPow2(kk);
-         Pk.length < ek && (Dk.free(Pk), Pk = Dk.mallocInt32(ek));
-         mk.length < ek && (Dk.free(mk), mk = Dk.mallocInt32(ek));
-         Mk.length < ek && (Dk.free(Mk), Mk = Dk.mallocInt32(ek));
-         Kk.length < ek && (Dk.free(Kk), Kk = Dk.mallocInt32(ek));
-         xk.length < ek && (Dk.free(xk), xk = Dk.mallocInt32(ek));
-         nk.length < ek && (Dk.free(nk), nk = Dk.mallocInt32(ek));
-         var ik = 8 * ek;
-         Uk.length < ik && (Dk.free(Uk), Uk = Dk.mallocDouble(ik))
+   36938: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => QC
+     });
+     const QC = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
```

#### 12. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L608-L641` → after: `L87-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L87-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L87-L92) · [Before (L608-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L608-L641)

```diff
-       sweepBipartite: function(kk, ek, ik, Dk, fk, rk, xk, nk, lk, pk) {
-         for (var yk = 0, Yk = 2 * kk, Lk = kk - 1, Ck = Yk - 1, Ak = ik; Ak < Dk; ++Ak) {
-           var jk = rk[Ak],
-             sk = Yk * Ak;
-           Uk[yk++] = fk[sk + Lk], Uk[yk++] = -(jk + 1), Uk[yk++] = fk[sk + Ck], Uk[yk++] = jk
-         }
-         for (Ak = xk; Ak < nk; ++Ak) {
-           jk = pk[Ak] + bk;
-           var dk = Yk * Ak;
-           Uk[yk++] = lk[dk + Lk], Uk[yk++] = -jk, Uk[yk++] = lk[dk + Ck], Uk[yk++] = jk
-         }
-         var Vk = yk >>> 1;
-         Sk(Uk, Vk);
-         var Fk = 0,
-           uk = 0;
-         for (Ak = 0; Ak < Vk; ++Ak) {
- ... (18 more removed lines; see GitHub link above)
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
```

#### 13. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L643-L680` → after: `L94-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L94-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L94-L99) · [Before (L643-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L643-L680)

```diff
-       sweepComplete: function(kk, ek, ik, Dk, fk, bk, rk, lk, pk, yk) {
-         for (var Yk = 0, Lk = 2 * kk, Ck = kk - 1, Ak = Lk - 1, jk = ik; jk < Dk; ++jk) {
-           var sk = bk[jk] + 1 << 1,
-             dk = Lk * jk;
-           Uk[Yk++] = fk[dk + Ck], Uk[Yk++] = -sk, Uk[Yk++] = fk[dk + Ak], Uk[Yk++] = sk
-         }
-         for (jk = rk; jk < lk; ++jk) {
-           sk = yk[jk] + 1 << 1;
-           var Vk = Lk * jk;
-           Uk[Yk++] = pk[Vk + Ck], Uk[Yk++] = 1 | -sk, Uk[Yk++] = pk[Vk + Ak], Uk[Yk++] = 1 | sk
-         }
-         var Fk = Yk >>> 1;
-         Sk(Uk, Fk);
-         var uk = 0,
-           qk = 0,
-           Ik = 0;
- ... (22 more removed lines; see GitHub link above)
+       "skyblock:forged:astral-diamond-moonstone": {
+         name: "Starcutter",
+         lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
+         damageMultiplier: 1.65,
+         cooldownMultiplier: .83,
+         ability: "starfall"
```

#### 14. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L682-L725` → after: `L101-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L101-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L101-L106) · [Before (L682-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L682-L725)

```diff
-       scanBipartite: function(kk, ek, ik, Dk, fk, rk, Mk, Kk, xk, nk, lk, pk) {
-         var yk = 0,
-           Yk = 2 * kk,
-           Lk = ek,
-           Ck = ek + kk,
-           Ak = 1,
-           jk = 1;
-         Dk ? jk = bk : Ak = bk;
-         for (var sk = fk; sk < rk; ++sk) {
-           var dk = sk + Ak,
-             Vk = Yk * sk;
-           Uk[yk++] = Mk[Vk + Lk], Uk[yk++] = -dk, Uk[yk++] = Mk[Vk + Ck], Uk[yk++] = dk
-         }
-         for (sk = xk; sk < nk; ++sk) {
-           dk = sk + jk;
-           var Fk = Yk * sk;
- ... (28 more removed lines; see GitHub link above)
+       "skyblock:forged:astral-sanguine-magmasteel": {
+         name: "Triune Flame",
+         lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
+         damageMultiplier: 1.65,
+         cooldownMultiplier: .83,
+         ability: "magmaWave"
```

#### 15. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L727-L1024` → after: `L108-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L108-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L108-L178) · [Before (L727-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L727-L1024)

```diff
-       scanComplete: function(kk, ek, ik, Dk, fk, rk, mk, Mk, Kk, xk, nk) {
-         for (var Hk = 0, wk = 2 * kk, lk = ek, pk = ek + kk, yk = Dk; yk < fk; ++yk) {
-           var Yk = yk + bk,
-             Lk = wk * yk;
-           Uk[Hk++] = rk[Lk + lk], Uk[Hk++] = -Yk, Uk[Hk++] = rk[Lk + pk], Uk[Hk++] = Yk
-         }
-         for (yk = Mk; yk < Kk; ++yk) {
-           Yk = yk + 1;
-           var Ck = wk * yk;
-           Uk[Hk++] = xk[Ck + lk], Uk[Hk++] = -Yk
-         }
-         var Ak = Hk >>> 1;
-         Sk(Uk, Ak);
-         var jk = 0;
-         for (yk = 0; yk < Ak; ++yk) {
-           var sk = 0 | Uk[2 * yk + 1];
- ... (282 more removed lines; see GitHub link above)
+       "skyblock:forged:magmasteel-magmasteel-magmasteel": {
+         name: "Vulcan's Bane",
+         lore: "Forged in the heat of his own rift. It remembers the way down.",
+         damageMultiplier: 1.56,
+         cooldownMultiplier: .83,
+         ability: "magmaWave"
+       },
+       "skyblock:forged:magmasteel-astral-sanguine": {
+         name: "Comet's Wake",
+         lore: "It leaves a trail of fire through the air, like something falling from very far up.",
+         damageMultiplier: 1.56,
+         cooldownMultiplier: .83,
+         ability: "starfall"
+       },
+       "skyblock:forged:magmasteel-sanguine-astral": {
+         name: "Vulcan's Ruin",
+ ... (55 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1026-L1296` → after: `L180-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L180-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L180-L195) · [Before (L1026-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L1026-L1296)

```diff
-         this._pendingRemovals.length = 0
-       }
-     }
-   },
-   37634: (kk, ek, ik) => {
-     kk = ik.nmd(kk);
-     var Dk = "__lodash_hash_undefined__",
-       fk = 9007199254740991,
-       Sk = "[object Arguments]",
-       bk = "[object Boolean]",
-       rk = "[object Date]",
-       Pk = "[object Function]",
-       mk = "[object GeneratorFunction]",
-       Mk = "[object Map]",
-       Kk = "[object Number]",
-       xk = "[object Object]",
- ... (255 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:diamond-moonstone-gold": {
+         name: "Jeweller's Pride",
+         lore: "Too pretty to fight with. Fight with it anyway.",
+         damageMultiplier: 1.24,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge"
+       },
+       "skyblock:forged:gold-gold-gold": {
+         name: "King's Ransom",
+         lore: "Worth more than the treasure it guards.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2.5
```

#### 17. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1418-L1503` → after: `L198-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L198-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L198-L206) · [Before (L1418-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L1418-L1503)

```diff
-       ce = function(kk) {
-         return De.call(kk)
-       };
- 
-     function Te(kk, ek) {
-       return !!(ek = null == ek ? fk : ek) && ("number" == typeof kk || zk.test(kk)) && kk > -1 && kk % 1 == 0 && kk < ek
-     }
- 
-     function oe(kk) {
-       var ek = kk && kk.constructor;
-       return kk === ("function" == typeof ek && ek.prototype || Rk)
-     }
- 
-     function Ze(kk) {
-       if (null != kk) {
-         try {
- ... (70 more removed lines; see GitHub link above)
+       "skyblock:forged:gold-moonstone-gold": {
+         name: "Midas Moon",
+         lore: "Mobs it fells seem to rattle with coins.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .92,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2,
+           bossBane: .6
```

#### 18. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1505-L1773` → after: `L208-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L208-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/226.js#L208-L235) · [Before (L1505-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/226.js#L1505-L1773)

```diff
-         if (Pk < fk || rk > Sk) return 1 / 0;
-         rk > fk && (fk = rk), Pk < Sk && (Sk = Pk)
-       }
-       return fk > Sk ? 1 / 0 : fk
-     }
-     kk.exports = function(kk, ik, Dk, fk) {
-       var Sk = ek(ik, Dk, fk);
-       if (Sk === 1 / 0) kk = null;
-       else {
-         kk = kk || [];
-         for (var bk = 0; bk < ik.length; bk++) kk[bk] = ik[bk] + Dk[bk] * Sk
-       }
-       return kk
-     }, kk.exports.distance = ek
-   },
-   37327: (kk, ek, ik) => {
- ... (253 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:iron-iron-iron": {
+         name: "Old Faithful",
+         lore: "It has never let anyone down. It never will.",
+         damageMultiplier: 1.15,
+         cooldownMultiplier: .94,
+         ability: "warcry"
+       },
+       "skyblock:forged:iron-wood-wood": {
+         name: "Militia Blade",
+         lore: "Handed out at the outpost gate when the rift first opened.",
+         damageMultiplier: 1.09,
+         cooldownMultiplier: .97,
+         ability: "warcry"
+       },
+       "skyblock:forged:stone-stone-stone": {
+ ... (12 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/227.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/227.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c)

#### 1. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/227.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/227.js#L2)

```diff
- export const ids = [227, 233, 236];
+ export const ids = [227];
```

#### 2. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/227.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/227.js#L4)

```diff
-   39804: (kk, ek, ik) => {
+   36968: (CC, zC, ZC) => {
```

#### 3. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L9-L335` → after: `L10-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L10-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/227.js#L10-L164) · [Before (L9-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/227.js#L9-L335)

```diff
-     var Dk = ik(38272),
-       fk = ik(39585),
-       Sk = ik(39782),
-       bk = {};
-     class rk {
-       constructor(kk) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = kk, this.checkInputs = () => {}
-       }
-       add(kk) {
-         const ek = kk.getSimpleName();
-         this.attached[ek] ? Dk.b.Warn("camera input of type " + ek + " already exists on camera") : (this.attached[ek] = kk, kk.camera = this.camera, kk.checkInputs && (this.checkInputs = this._addCheckInputs(kk.checkInputs.bind(kk))), this.attachedToElement && kk.attachControl(t … [truncated]
-       }
-       remove(kk) {
-         for (const ek in this.attached) {
-           const ik = this.attached[ek];
-           if (ik === kk) return ik.detachControl(), ik.camera = null, delete this.attached[ek], void this.rebuildInputCheck()
- ... (311 more removed lines; see GitHub link above)
+     const QC = 1 / 2.2,
+       wC = 2.2;
+     Math.sqrt(5);
+     let bC = .001
+   },
+   36991: (CC, zC, ZC) => {
+     function QC(CC) {
+       return parseInt(CC.toString().replace(/\W/g, ""))
+     }
+ 
+     function wC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(CC - zC) <= ZC
+     }
+ 
+     function bC(CC, zC, ZC) {
+ ... (139 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L338` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/227.js#L167) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/227.js#L338)

```diff
-       Quaternion: () => Dk.c,
+       Quaternion: () => QC.f,
```

#### 5. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L341-L345` → after: `L170-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L170-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/227.js#L170-L174) · [Before (L341-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/227.js#L341-L345)

```diff
-       Vector2: () => Dk.l,
-       eH: () => Dk.o,
-       Vector4: () => Dk.p
-     });
-     var Dk = ik(36698);
+       Vector2: () => QC.n,
+       Eg: () => QC.r,
+       Vector4: () => QC.u
+     });
+     var QC = ZC(36963);
```

#### 6. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L348` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/227.js#L177-L186) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/227.js#L348)

```diff
-   37679: (kk, ek, ik) => {
+   36971: (CC, zC, ZC) => {
+     function QC(CC, zC) {
+       const ZC = [];
+       for (let QC = 0; QC < CC; ++QC) ZC.push(zC());
+       return ZC
+     }
+ 
+     function wC(CC, zC) {
+       return QC(CC, zC)
+     }
```

#### 7. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L350-L354` → after: `L188-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L188-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/227.js#L188-L211) · [Before (L350-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/227.js#L350-L354)

```diff
-       b: () => Dk
-     });
-     class Dk {
-       constructor(kk, ek, ik, Dk) {
-         this.x = kk, this.y = ek, this.width = ik, this.height = Dk
+       d: () => QC,
+       g: () => wC,
+       i: () => nC
+     });
+     const bC = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function nC(CC, zC) {
+       const ZC = bC.map((ZC => function(CC, zC, ZC) {
+         const QC = CC[zC];
+         if ("function" !== typeof QC) return null;
+         const wC = function() {
+           const QC = CC.length,
+             bC = wC.previous.apply(CC, arguments);
+           return ZC(zC, QC), bC
+         };
+         return QC.next = wC, wC.previous = QC, CC[zC] = wC, () => {
+ ... (8 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L356-L367` → after: `L213-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/227.js#L213-L215) · [Before (L356-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/227.js#L356-L367)

```diff
-       toGlobal(kk, ek) {
-         return new Dk(this.x * kk, this.y * ek, this.width * kk, this.height * ek)
-       }
-       toGlobalToRef(kk, ek, ik) {
-         return ik.x = this.x * kk, ik.y = this.y * ek, ik.width = this.width * kk, ik.height = this.height * ek, this
-       }
-       clone() {
-         return new Dk(this.x, this.y, this.width, this.height)
-       }
-     }
-   },
-   39995: (kk, ek, ik) => {
+     }
+   },
+   37002: (CC, zC, ZC) => {
```

#### 9. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L369-L838` → after: `L217-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L217-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/227.js#L217-L228) · [Before (L369-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/227.js#L369-L838)

```diff
-       e: () => mk
-     });
-     var Dk = ik(36698),
-       fk = ik(36874),
-       Sk = ik(39997),
-       bk = ik(40001),
-       rk = ik(40014);
- 
-     function Pk(kk) {
-       let ek = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
-       const ik = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
-         Sk = [],
-         Pk = kk.width || kk.size || 1,
-         mk = kk.height || kk.size || 1,
-         Mk = kk.depth || kk.size || 1,
-         Kk = kk.wrap || !1;
- ... (454 more removed lines; see GitHub link above)
+       c: () => bC,
+       d: () => wC
+     });
+     const QC = {};
+ 
+     function wC(CC, zC) {
+       QC[CC] = zC
+     }
+ 
+     function bC(CC) {
+       return QC[CC]
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/228.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/228.js` (105 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba)

#### 1. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L2)

```diff
- export const ids = [228, 233];
+ export const ids = [228, 235];
```

#### 2. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L4-L13363` → after: `L5-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L5-L7) · [Before (L4-L13363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L4-L13363)

```diff
-   41420: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => bk
-     });
-     var Dk = ik(41347),
-       fk = ik(39564);
-     let Sk = !1;
- 
-     function bk() {
-       Sk || (Sk = !0, fk.b.prototype._sphericalPolynomialTargetSize = 0, fk.b.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(fk.b.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Dk.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
- ... (13344 more removed lines; see GitHub link above)
+   38116: CC => {
+     CC.exports = function(CC) {
+       return null != CC && null != CC.constructor && "function" === typeof CC.constructor.isBuffer && CC.constructor.isBuffer(CC)
```

#### 3. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13365` → after: `L9-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L9-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L9-L31) · [Before (L13365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13365)

```diff
-     let jS = !1;
+   },
+   38096: (CC, zC, ZC) => {
+     var QC = ZC(38105),
+       wC = ZC(38109),
+       bC = ZC(38116);
+     ZC.g.__TYPEDARRAY_POOL || (ZC.g.__TYPEDARRAY_POOL = {
+       UINT8: wC([32, 0]),
+       UINT16: wC([32, 0]),
+       UINT32: wC([32, 0]),
+       INT8: wC([32, 0]),
+       INT16: wC([32, 0]),
+       INT32: wC([32, 0]),
+       FLOAT: wC([32, 0]),
+       DOUBLE: wC([32, 0]),
+       DATA: wC([32, 0]),
+       UINT8C: wC([32, 0]),
+ ... (7 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13367-L13385` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L33-L37) · [Before (L13367-L13385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13367-L13385)

```diff
-     function sS() {
-       jS || (jS = !0, hD.RegisterExtension(CS, (kk => new AS(kk))))
-     }
-     sS();
-     var dS = ik(39833);
-     const VS = "KHR_materials_unlit";
-     class FS {
-       constructor() {
-         this.name = VS, this.enabled = !0, this.required = !1, this._wasUsed = !1
-       }
-       get wasUsed() {
-         return this._wasUsed
-       }
-       dispose() {}
-       postExportMaterialAsync(kk, ek, ik) {
-         return new Promise((kk => {
- ... (3 more removed lines; see GitHub link above)
+     function FC(CC) {
+       if (CC) {
+         var zC = CC.length || CC.byteLength,
+           ZC = QC.log2(zC);
+         oC[ZC].push(CC)
```

#### 5. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13390-L13475` → after: `L41-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L41-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L41-L45) · [Before (L13390-L13475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13390-L13475)

```diff
-     function qS() {
-       uS || (uS = !0, hD.RegisterExtension(VS, (() => new FS)))
-     }
-     qS();
-     const IS = "KHR_materials_volume";
-     class zS {
-       constructor(kk) {
-         this.name = IS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
-       }
-       dispose() {}
-       get wasUsed() {
-         return this._wasUsed
-       }
-       async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
-         const Dk = [];
-         if (ik instanceof Wf) {
- ... (70 more removed lines; see GitHub link above)
+     function WC(CC) {
+       CC = QC.nextPow2(CC);
+       var zC = QC.log2(CC),
+         ZC = oC[zC];
+       return ZC.length > 0 ? ZC.pop() : new ArrayBuffer(CC)
```

#### 6. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13479-L13480` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L48-L49) · [Before (L13479-L13480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13479-L13480)

```diff
-     function vS() {
-       QS || (QS = !0, hD.RegisterExtension(IS, (kk => new zS(kk))))
+     function NC(CC) {
+       return new Uint8Array(WC(CC), 0, CC)
```

#### 7. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13482-L13543` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L51-L53) · [Before (L13482-L13543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13482-L13543)

```diff
-     vS();
-     const ES = "KHR_materials_volume_scatter";
-     class hS {
-       constructor(kk) {
-         this.name = ES, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
-       }
-       dispose() {}
-       get wasUsed() {
-         return this._wasUsed
-       }
-       async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
-         const Dk = [];
-         return ik instanceof Je && (ik.transmissionWeight > 0 && ik.transmissionScatterTexture && Dk.push(ik.transmissionScatterTexture), ik.subsurfaceWeight > 0 && ik.subsurfaceColorTexture && Dk.push(ik.subsurfaceColorTexture)), Dk
-       }
-       _isExtensionEnabled(kk) {
-         if (kk.unlit) return !1;
- ... (46 more removed lines; see GitHub link above)
+ 
+     function MC(CC) {
+       return new Uint16Array(WC(2 * CC), 0, CC)
```

#### 8. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13547-L13548` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L56-L57) · [Before (L13547-L13548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13547-L13548)

```diff
-     function WS() {
-       aS || (aS = !0, hD.RegisterExtension(ES, (kk => new hS(kk)), 101))
+     function gC(CC) {
+       return new Uint32Array(WC(4 * CC), 0, CC)
```

#### 9. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13550-L13579` → after: `L59-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L59-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L59-L61) · [Before (L13550-L13579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13550-L13579)

```diff
-     WS();
-     const tS = "KHR_materials_diffuse_roughness";
-     class XS {
-       constructor(kk) {
-         this.name = tS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
-       }
-       dispose() {}
-       get wasUsed() {
-         return this._wasUsed
-       }
-       async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
-         const Dk = [];
-         if (ik instanceof Ae) {
-           if (ik._baseDiffuseRoughness) return ik._baseDiffuseRoughnessTexture && Dk.push(ik._baseDiffuseRoughnessTexture), Dk
-         } else if (ik instanceof Je && ik.baseDiffuseRoughness) return ik.baseDiffuseRoughnessTexture && Dk.push(ik.baseDiffuseRoughnessTexture), Dk;
-         return []
- ... (14 more removed lines; see GitHub link above)
+ 
+     function SC(CC) {
+       return new Int8Array(WC(CC), 0, CC)
```

#### 10. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13583-L13584` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L64-L65) · [Before (L13583-L13584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13583-L13584)

```diff
-     function cS() {
-       BS || (BS = !0, hD.RegisterExtension(tS, (kk => new XS(kk))))
+     function pC(CC) {
+       return new Int16Array(WC(2 * CC), 0, CC)
```

#### 11. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13586-L13600` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L67-L69) · [Before (L13586-L13600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13586-L13600)

```diff
-     cS();
-     const TS = "KHR_materials_openpbr";
-     class oS {
-       constructor() {
-         this.name = TS, this.enabled = !0, this.required = !1, this._wasUsed = !1
-       }
-       dispose() {}
-       get wasUsed() {
-         return this._wasUsed
-       }
-       postExportMaterialAsync(kk, ek, ik) {
-         return new Promise((kk => {
-           ik instanceof Je && (this._wasUsed = !0, ek.extensions = ek.extensions || {}, ek.extensions[TS] = {}), kk(ek)
-         }))
-       }
+ 
+     function PC(CC) {
+       return new Int32Array(WC(4 * CC), 0, CC)
```

#### 12. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13604-L13605` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L72-L73) · [Before (L13604-L13605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13604-L13605)

```diff
-     function OS() {
-       ZS || (ZS = !0, hD.RegisterExtension(TS, (() => new oS)))
+     function GC(CC) {
+       return new Float32Array(WC(4 * CC), 0, CC)
```

#### 13. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13607-L13640` → after: `L75-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L75-L77) · [Before (L13607-L13640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13607-L13640)

```diff
-     OS();
-     const gS = "KHR_texture_transform";
-     class GS {
-       constructor() {
-         this.name = gS, this.enabled = !0, this.required = !1, this._wasUsed = !1
-       }
-       dispose() {}
-       get wasUsed() {
-         return this._wasUsed
-       }
-       postExportTexture(kk, ek, ik) {
-         if (ik.XF() || se.i.Warn(`${kk}: "scene" is not defined for Babylon texture ${ik.name}!`), (0 !== ik.uAng || 0 !== ik.vAng) && (se.i.Warn(`${kk}: Texture ${ik.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== ik.uRotationCenter || 0 !== ik.vRotatio … [truncated]
-         const Dk = {};
-         let fk = !1;
-         if (0 === ik.uOffset && 0 === ik.vOffset || (Dk.offset = [ik.uOffset, ik.vOffset], fk = !0), 1 === ik.uScale && 1 === ik.vScale || (Dk.scale = [ik.uScale, ik.vScale], fk = !0), 0 !== ik.wAng) {
-           if (0 !== ik.uRotationCenter || 0 !== ik.vRotationCenter) {
- ... (18 more removed lines; see GitHub link above)
+ 
+     function RC(CC) {
+       return new Float64Array(WC(8 * CC), 0, CC)
```

#### 14. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13644-L13645` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L80-L81) · [Before (L13644-L13645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13644-L13645)

```diff
-     function RS() {
-       NS || (NS = !0, hD.RegisterExtension(gS, (() => new GS)))
+     function AC(CC) {
+       return nC ? new Uint8ClampedArray(WC(CC), 0, CC) : NC(CC)
```

#### 15. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13647-L13665` → after: `L83-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L83-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L83-L128) · [Before (L13647-L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13647-L13665)

```diff
-     RS();
-     var JS = ik(39607);
-     const kb = "KHR_texture_basisu";
-     class eb {
-       get wasUsed() {
-         return this._wasUsed
-       }
-       constructor(kk) {
-         this.name = kb, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = kk
-       }
-       dispose() {}
-       postExportTexture(kk, ek) {
-         const ik = this._exporter._textures[ek.index],
-           Dk = ik.source;
-         if (void 0 === Dk) return;
-         const fk = this._exporter._images[Dk];
- ... (3 more removed lines; see GitHub link above)
+ 
+     function xC(CC) {
+       return new DataView(WC(CC), 0, CC)
+     }
+     zC.free = function(CC) {
+       if (bC(CC)) qC[QC.log2(CC.length)].push(CC);
+       else {
+         if ("[object ArrayBuffer]" !== Object.prototype.toString.call(CC) && (CC = CC.buffer), !CC) return;
+         var zC = CC.length || CC.byteLength,
+           ZC = 0 | QC.log2(zC);
+         oC[ZC].push(CC)
+       }
+     }, zC.freeUint8 = zC.freeUint16 = zC.freeUint32 = zC.freeInt8 = zC.freeInt16 = zC.freeInt32 = zC.freeFloat32 = zC.freeFloat = zC.freeFloat64 = zC.freeDouble = zC.freeUint8Clamped = zC.freeDataView = function(CC) {
+       FC(CC.buffer)
+     }, zC.freeArrayBuffer = FC, zC.freeBuffer = function(CC) {
+       qC[QC.log2(CC.length)].push(CC)
+ ... (30 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13668-L13671` → after: `L134-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L134-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L134-L186) · [Before (L13668-L13671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13668-L13671)

```diff
-     let ib = !1;
- 
-     function Db() {
-       ib || (ib = !0, hD.RegisterExtension(kb, (kk => new eb(kk))))
+   },
+   38105: (CC, zC) => {
+     function ZC(CC) {
+       var zC = 32;
+       return (CC &= -CC) && zC--, 65535 & CC && (zC -= 16), 16711935 & CC && (zC -= 8), 252645135 & CC && (zC -= 4), 858993459 & CC && (zC -= 2), 1431655765 & CC && (zC -= 1), zC
+     }
+     zC.INT_BITS = 32, zC.INT_MAX = 2147483647, zC.INT_MIN = -1 << 31, zC.sign = function(CC) {
+       return (CC > 0) - (CC < 0)
+     }, zC.abs = function(CC) {
+       var zC = CC >> 31;
+       return (CC ^ zC) - zC
+     }, zC.min = function(CC, zC) {
+       return zC ^ (CC ^ zC) & -(CC < zC)
+     }, zC.max = function(CC, zC) {
+       return CC ^ (CC ^ zC) & -(CC < zC)
+     }, zC.isPow2 = function(CC) {
+ ... (37 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13673-L13690` → after: `L188-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L188-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L188-L201) · [Before (L13673-L13690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13673-L13690)

```diff
-     Db();
-     const fb = "EXT_texture_webp";
-     class Sb {
-       get wasUsed() {
-         return this._wasUsed
-       }
-       constructor(kk) {
-         this.name = fb, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = kk
-       }
-       dispose() {}
-       postExportTexture(kk, ek) {
-         const ik = this._exporter._textures[ek.index],
-           Dk = ik.source;
-         if (void 0 === Dk) return;
-         const fk = this._exporter._images[Dk];
-         "image/webp" === (fk.mimeType || (0, JS.f)(fk.uri)) && (ik.source = void 0, ik.extensions || (ik.extensions = {}), ik.extensions[fb] = {
- ... (2 more removed lines; see GitHub link above)
+   },
+   38091: (CC, zC, ZC) => {
+     CC.exports = function(CC, zC, ZC) {
+       switch (arguments.length) {
+         case 1:
+           return QC = [], qC(wC = CC, wC, FC, !0), QC;
+         case 2:
+           return "function" === typeof zC ? qC(CC, CC, zC, !0) : function(CC, zC) {
+             return QC = [], qC(CC, zC, FC, !1), QC
+           }(CC, zC);
+         case 3:
+           return qC(CC, zC, ZC, !1);
+         default:
+           throw new Error("box-intersect: Invalid arguments")
```

#### 18. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13692-L13693` → after: `L203-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L203-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L203-L207) · [Before (L13692-L13693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13692-L13693)

```diff
-     }
-     let bb = !1;
+       var wC
+     };
+     var QC, wC = ZC(38096),
+       bC = ZC(38121),
+       nC = ZC(38134);
```

#### 19. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13695-L13696` → after: `L209-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L209-L212) · [Before (L13695-L13696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13695-L13696)

```diff
-     function rb() {
-       bb || (bb = !0, hD.RegisterExtension(fb, (kk => new Sb(kk))))
+     function fC(CC, zC) {
+       for (var ZC = 0; ZC < CC; ++ZC)
+         if (!(zC[ZC] <= zC[ZC + CC])) return !0;
+       return !1
```

#### 20. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13698-L13715` → after: `L214-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L214-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L214-L221) · [Before (L13698-L13715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13698-L13715)

```diff
-     rb();
-     const Pb = "EXT_texture_avif";
-     class mb {
-       get wasUsed() {
-         return this._wasUsed
-       }
-       constructor(kk) {
-         this.name = Pb, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = kk
-       }
-       dispose() {}
-       postExportTexture(kk, ek) {
-         const ik = this._exporter._textures[ek.index],
-           Dk = ik.source;
-         if (void 0 === Dk) return;
-         const fk = this._exporter._images[Dk];
-         "image/avif" === (fk.mimeType || (0, JS.f)(fk.uri)) && (ik.source = void 0, ik.extensions || (ik.extensions = {}), ik.extensions[Pb] = {
- ... (2 more removed lines; see GitHub link above)
+ 
+     function oC(CC, zC, ZC, QC) {
+       for (var wC = 0, bC = 0, nC = 0, oC = CC.length; nC < oC; ++nC) {
+         var qC = CC[nC];
+         if (!fC(zC, qC)) {
+           for (var FC = 0; FC < 2 * zC; ++FC) ZC[wC++] = qC[FC];
+           QC[bC++] = nC
+         }
```

#### 21. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13720-L13758` → after: `L226-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L226-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L226-L239) · [Before (L13720-L13758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13720-L13758)

```diff
-     function Kb() {
-       Mb || (Mb = !0, hD.RegisterExtension(Pb, (kk => new mb(kk))))
-     }
-     Kb();
-     class xb {
-       static CreateSTL(kk) {
-         let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
-           fk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           Sk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           rk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           Pk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-         const mk = function(kk, ek, ik) {
-             const fk = [3 * kk[ik], 3 * kk[ik + 1], 3 * kk[ik + 2]],
-               Sk = [new Dk.eH(ek[fk[0]], ek[fk[0] + 2], ek[fk[0] + 1]), new Dk.eH(ek[fk[1]], ek[fk[1] + 2], ek[fk[1] + 1]), new Dk.eH(ek[fk[2]], ek[fk[2] + 2], ek[fk[2] + 1])],
- ... (23 more removed lines; see GitHub link above)
+     function qC(CC, zC, ZC, QC) {
+       var fC = CC.length,
+         qC = zC.length;
+       if (!(fC <= 0 || qC <= 0)) {
+         var FC = CC[0].length >>> 1;
+         if (!(FC <= 0)) {
+           var WC, NC = wC.mallocDouble(2 * FC * fC),
+             MC = wC.mallocInt32(fC);
+           if ((fC = oC(CC, FC, NC, MC)) > 0) {
+             if (1 === FC && QC) bC.init(fC), WC = bC.sweepComplete(FC, ZC, 0, fC, NC, MC, 0, fC, NC, MC);
+             else {
+               var gC = wC.mallocDouble(2 * FC * qC),
+                 SC = wC.mallocInt32(qC);
+               (qC = oC(zC, FC, gC, SC)) > 0 && (bC.init(fC + qC), WC = 1 === FC ? bC.sweepBipartite(FC, ZC, 0, fC, NC, MC, 0, qC, gC, SC) : nC(FC, ZC, QC, fC, NC, MC, qC, gC, SC), wC.free(gC), wC.free(SC))
```

#### 22. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13760-L13769` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L241) · [Before (L13760-L13769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13760-L13769)

```diff
-             return kk.getVerticesData(Mk.h.PositionKind) || []
-           };
-         rk && (bk = !0);
-         let Hk = "",
-           wk = 0,
-           lk = 0;
-         if (fk) {
-           for (let ik = 0; ik < kk.length; ik++) {
-             const ek = kk[ik].oik();
-             wk += ek ? ek.length / 3 : 0
+             wC.free(NC), wC.free(MC)
```

#### 23. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13771-L13789` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L243) · [Before (L13771-L13789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13771-L13789)

```diff
-           const ek = new ArrayBuffer(84 + 50 * wk);
-           Hk = new DataView(ek), lk += 80, Hk.setUint32(lk, wk, Sk), lk += 4
-         } else Pk || (Hk = "solid stlmesh\r\n");
-         for (let Dk = 0; Dk < kk.length; Dk++) {
-           const ek = kk[Dk];
-           !fk && Pk && (Hk += "solid " + ek.name + "\r\n"), !bk && ek instanceof xD.d && ek.bakeCurrentTransformIntoVertices();
-           const ik = Uk(ek),
-             rk = ek.oik() || [];
-           for (let kk = 0; kk < rk.length; kk += 3) {
-             const ek = mk(rk, ik, kk);
-             fk ? (lk = Kk(Hk, lk, ek.n, Sk), lk = Kk(Hk, lk, ek.v[0], Sk), lk = Kk(Hk, lk, ek.v[1], Sk), lk = Kk(Hk, lk, ek.v[2], Sk), lk += 2) : (Hk += "\tfacet normal " + ek.n.x + " " + ek.n.y + " " + ek.n.z + "\r\n", Hk += "\t\touter loop\r\n", Hk += "\t\t\tvertex " + ek.v[0]. … [truncated]
-           }!fk && Pk && (Hk += "endsolid " + name + "\r\n")
-         }
-         if (fk || Pk || (Hk += "endsolid stlmesh"), ek) {
-           const kk = document.createElement("a"),
-             ek = new Blob([Hk], {
- ... (3 more removed lines; see GitHub link above)
+           return WC
```

#### 24. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13796-L13805` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L249) · [Before (L13796-L13805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13796-L13805)

```diff
-       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
-         Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const fk = [];
-       for (let Sk = 0; Sk < kk.length / ik; Sk++) {
-         const bk = kk[Sk * ik] * (Dk ? -1 : 1),
-           rk = kk[Sk * ik + 1],
-           Pk = kk[Sk * ik + 2];
-         fk.push(`(${bk.toPrecision(ek.precision)}, ${rk.toPrecision(ek.precision)}, ${Pk.toPrecision(ek.precision)})`)
-       }
-       return fk.join(", ")
+       QC.push([CC, zC])
```

#### 25. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13808-L13813` → after: `L265-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L265-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L265-L283) · [Before (L13808-L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13808-L13813)

```diff
-     function Ub(kk, ek) {
-       const ik = [];
-       for (let Dk = 0; Dk < kk.length / 2; Dk++) {
-         const fk = kk[2 * Dk],
-           Sk = kk[2 * Dk + 1];
-         ik.push(`(${fk.toPrecision(ek.precision)}, ${(1-Sk).toPrecision(ek.precision)})`)
+     function MC(CC) {
+       var zC = "bruteForce" + (CC ? "Full" : "Partial"),
+         QC = [],
+         nC = NC.slice();
+       CC || nC.splice(3, 0, wC);
+       var fC = ["function " + zC + "(" + nC.join() + "){"];
+ 
+       function oC(zC, wC) {
+         var nC = function(CC, zC, QC) {
+           var wC = "bruteForce" + (CC ? "Red" : "Blue") + (zC ? "Flip" : "") + (QC ? "Full" : ""),
+             nC = ["function ", wC, "(", NC.join(), "){", "var ", bC, "=2*", ZC, ";"],
+             fC = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
+             oC = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (QC ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
+           return CC ? nC.push(fC, "Q", ":", oC) : nC.push(oC, "Q", ":", fC), QC ? nC.push("if(y1<x0||x1<y0)continue;") : zC ? nC.push("if(y0<=x0||x1<y0)continue;") : nC.push("if(y0<x0||x1<y0)continue;"), nC.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b … [truncated]
+             name: wC,
+             code: nC.join("")
+ ... (3 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13815-L13829` → after: `L285-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L285-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L285-L287) · [Before (L13815-L13829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13815-L13829)

```diff
-       return ik.join(", ")
-     }
- 
-     function Hb(kk, ek, ik, Dk) {
-       const fk = kk.getVerticesData(Mk.h.PositionKind),
-         Sk = kk.getVerticesData(Mk.h.NormalKind);
-       if (fk && Sk) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${ik}"\n\t\tint[] faceVertexCounts = [${function(kk){const ek=kk.oik()?.length?kk.getTotalIndices():kk.getTotalVertices();return Array(ek/3).fill(3).join(", ")}(kk)}]\n\t\tint[] faceVer … [truncated]
-       n\ tcolor3f[] primvars: displayColor = [$ {
-         nb(Dk, ek, Dk.length / kk.getTotalVertices())
-       }](\n\ t\ tinterpolation = "vertex"\
-         n\ t\ t)`),ik}(kk,ek)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
-     }
- 
-     function wb(kk, ek, ik, Dk) {
-       return `\n        def "Geometry"\n        {\n        ${Hb(kk,ek,ik,Dk)}\n        }\n        `
+       fC.push("if(re-rs>be-bs){"), CC ? (oC(!0, !1), fC.push("}else{"), oC(!1, !1)) : (fC.push("if(fp){"), oC(!0, !0), fC.push("}else{"), oC(!0, !1), fC.push("}}else{if(fp){"), oC(!1, !0), fC.push("}else{"), oC(!1, !1), fC.push("}")), fC.push("}}return " + zC);
+       var qC = QC.join("") + fC.join("");
+       return new Function(qC)()
```

#### 27. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13831-L13834` → after: `L289-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L289-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L289-L435) · [Before (L13831-L13834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13831-L13834)

```diff
- 
-     function lb(kk) {
-       let ek = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
-       return ek += kk, fflate.strToU8(ek)
+     zC.partial = MC(!1), zC.full = MC(!0)
+   },
+   38134: (CC, zC, ZC) => {
+     CC.exports = function(CC, zC, ZC, bC, FC, hC, KC, YC, dC) {
+       ! function(CC, zC) {
+         var ZC = 8 * wC.log2(zC + 1) * (CC + 1) | 0,
+           bC = wC.nextPow2(AC * ZC);
+         JC.length < bC && (QC.free(JC), JC = QC.mallocInt32(bC));
+         var nC = wC.nextPow2(xC * ZC);
+         IC.length < nC && (QC.free(IC), IC = QC.mallocDouble(nC))
+       }(CC, bC + KC);
+       var mC, HC = 0,
+         EC = 2 * CC;
+       iC(HC++, 0, 0, bC, 0, KC, ZC ? 16 : 0, -1 / 0, 1 / 0), ZC || iC(HC++, 0, 0, KC, 0, bC, 1, -1 / 0, 1 / 0);
+       for (; HC > 0;) {
+         var lC = (HC -= 1) * AC,
+ ... (131 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13837-L13839` → after: `L484-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L484-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L484-L493) · [Before (L13837-L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13837-L13839)

```diff
-     function pb(kk) {
-       const ek = kk.m;
-       return `( ${yb(ek,0)}, ${yb(ek,4)}, ${yb(ek,8)}, ${yb(ek,12)} )`
+     function bC(CC, zC, ZC, QC, wC, bC) {
+       for (var nC = 2 * CC, fC = nC * (ZC + 1) + zC, oC = ZC + 1; oC < QC; ++oC, fC += nC)
+         for (var qC = wC[fC], FC = oC, WC = nC * (oC - 1); FC > ZC && wC[WC + zC] > qC; --FC, WC -= nC) {
+           for (var NC = WC, MC = WC + nC, gC = 0; gC < nC; ++gC, ++NC, ++MC) {
+             var SC = wC[NC];
+             wC[NC] = wC[MC], wC[MC] = SC
+           }
+           var pC = bC[FC];
+           bC[FC] = bC[FC - 1], bC[FC - 1] = pC
+         }
```

#### 29. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13842-L13843` → after: `L512-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L512-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L512-L522) · [Before (L13842-L13843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13842-L13843)

```diff
-     function yb(kk, ek) {
-       return `(${kk[ek+0]}, ${kk[ek+1]}, ${kk[ek+2]}, ${kk[ek+3]})`
+     function ZC(CC, zC, ZC) {
+       for (var QC = 2 * (CC + 1), wC = CC + 1; wC <= zC; ++wC) {
+         for (var bC = ZC[QC++], nC = ZC[QC++], fC = wC, oC = QC - 2; fC-- > CC;) {
+           var qC = ZC[oC - 2],
+             FC = ZC[oC - 1];
+           if (qC < bC) break;
+           if (qC === bC && FC < nC) break;
+           ZC[oC] = qC, ZC[oC + 1] = FC, oC -= 2
+         }
+         ZC[oC] = bC, ZC[oC + 1] = nC
+       }
```

#### 30. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13846-L13849` → after: `L525-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L525-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L525-L529) · [Before (L13846-L13849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13846-L13849)

```diff
-     function Yb(kk, ek) {
-       const ik = "Object_" + kk.uniqueId,
-         Dk = pb(ek);
-       return `def Xform "${ik}" (\n\tprepend references = @./geometries/Geometry_${kk.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Dk}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    re … [truncated]
+     function QC(CC, zC, ZC) {
+       zC *= 2;
+       var QC = ZC[CC *= 2],
+         wC = ZC[CC + 1];
+       ZC[CC] = ZC[zC], ZC[CC + 1] = ZC[zC + 1], ZC[zC] = QC, ZC[zC + 1] = wC
```

#### 31. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13852-L13861` → after: `L532-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L532-L533) · [Before (L13852-L13861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13852-L13861)

```diff
-     function Lb(kk) {
-       switch (kk) {
-         case Ak.c.TEXTURE_CLAMP_ADDRESSMODE:
-           return "clamp";
-         case Ak.c.TEXTURE_MIRROR_ADDRESSMODE:
-           return "mirror";
-         case Ak.c.TEXTURE_WRAP_ADDRESSMODE:
-         default:
-           return "repeat"
-       }
+     function wC(CC, zC, ZC) {
+       zC *= 2, ZC[CC *= 2] = ZC[zC], ZC[CC + 1] = ZC[zC + 1]
```

#### 32. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13864-L13865` → after: `L536-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L536-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L536-L540) · [Before (L13864-L13865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13864-L13865)

```diff
-     function Cb(kk) {
-       return `(${kk.x}, ${kk.y})`
+     function bC(CC, zC, ZC, QC) {
+       zC *= 2, ZC *= 2;
+       var wC = QC[CC *= 2],
+         bC = QC[CC + 1];
+       QC[CC] = QC[zC], QC[CC + 1] = QC[zC + 1], QC[zC] = QC[ZC], QC[zC + 1] = QC[ZC + 1], QC[ZC] = wC, QC[ZC + 1] = bC
```

#### 33. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13868-L13869` → after: `L543-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L543-L544) · [Before (L13868-L13869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13868-L13869)

```diff
-     function Ab(kk) {
-       return `(${kk.r}, ${kk.g}, ${kk.b})`
+     function nC(CC, zC, ZC, QC, wC) {
+       zC *= 2, wC[CC *= 2] = wC[zC], wC[zC] = ZC, wC[CC + 1] = wC[zC + 1], wC[zC + 1] = QC
```

#### 34. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13872-L13873` → after: `L547-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L547-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L547-L551) · [Before (L13872-L13873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13872-L13873)

```diff
-     function jb(kk) {
-       return "image/jpeg" === kk || "image/png" === kk
+     function fC(CC, zC, ZC) {
+       zC *= 2;
+       var QC = ZC[CC *= 2],
+         wC = ZC[zC];
+       return !(QC < wC) && (QC !== wC || ZC[CC + 1] > ZC[zC + 1])
```

#### 35. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13876-L13892` → after: `L554-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L554-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L554-L556) · [Before (L13876-L13892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13876-L13892)

```diff
-     function sb(kk, ek, ik, fk, Sk, bk) {
-       const rk = kk.getInternalTexture().uniqueId + "_" + kk.invertY,
-         mk = kk.mimeType || (0, Pk.d)(kk.getInternalTexture()?.url ?? ""),
-         Mk = jb(mk) ? mk : "image/png",
-         Kk = "image/jpeg" === Mk ? "jpg" : "png";
-       Sk[rk] = {
-         texture: kk,
-         mimeType: Mk,
-         ext: Kk
-       };
-       const xk = kk.coordinatesIndex > 0 ? "st" + kk.coordinatesIndex : "st",
-         nk = new Dk.Vector2(kk.uScale, kk.vScale),
-         Uk = new Dk.Vector2(kk.uOffset, kk.vOffset),
-         Hk = kk.wAng,
-         wk = Math.sin(Hk),
-         lk = Math.cos(Hk);
- ... (1 more removed lines; see GitHub link above)
+     function oC(CC, zC, ZC, QC) {
+       var wC = QC[CC *= 2];
+       return wC < zC || wC === zC && QC[CC + 1] < ZC
```

#### 36. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13896-L13995` → after: `L560-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L560-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L560-L590) · [Before (L13896-L13995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13896-L13995)

```diff
-       const Dk = "\t\t\t",
-         fk = [],
-         Sk = [],
-         {
-           diffuseMap: bk,
-           diffuse: rk,
-           alphaCutOff: Pk,
-           emissiveMap: mk,
-           emissive: Mk,
-           normalMap: Kk,
-           roughnessMap: xk,
-           roughnessChannel: nk,
-           roughness: Uk,
-           metalnessMap: Hk,
-           metalnessChannel: lk,
-           metalness: pk,
- ... (84 more removed lines; see GitHub link above)
+       var NC = (FC - CC + 1) / 6 | 0,
+         MC = CC + NC,
+         gC = FC - NC,
+         SC = CC + FC >> 1,
+         pC = SC - NC,
+         PC = SC + NC,
+         GC = MC,
+         RC = pC,
+         AC = SC,
+         xC = PC,
+         JC = gC,
+         IC = CC + 1,
+         iC = FC - 1,
+         vC = 0;
+       fC(GC, RC, WC) && (vC = GC, GC = RC, RC = vC), fC(xC, JC, WC) && (vC = xC, xC = JC, JC = vC), fC(GC, AC, WC) && (vC = GC, GC = AC, AC = vC), fC(RC, AC, WC) && (vC = RC, RC = AC, AC = vC), fC(GC, xC, WC) && (vC = GC, GC = xC, xC = vC), fC(AC, xC, WC) && (vC = AC, AC = xC, xC … [truncated]
+       for (var eC = WC[2 * RC], hC = WC[2 * RC + 1], KC = WC[2 * xC], YC = WC[2 * xC + 1], dC = 2 * GC, mC = 2 * AC, HC = 2 * JC, EC = 2 * MC, lC = 2 * SC, XC = 2 * gC, cC = 0; cC < 2; ++cC) {
+ ... (15 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L13997-L14003` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L592) · [Before (L13997-L14003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L13997-L14003)

```diff
-         rk = rk.parent
-       }
-       return ek.determinant() < 0 && fk.Tools.Warn(`Mesh ${kk.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
-         matrix: ek,
-         windingOrder: Dk === Sk.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
-         convertToRightHanded: bk
-       }
+       nC(CC, IC - 1, eC, hC, WC), nC(FC, iC + 1, KC, YC, WC), IC - 2 - CC <= zC ? ZC(CC, IC - 2, WC) : qC(CC, IC - 2, WC), FC - (iC + 2) <= zC ? ZC(iC + 2, FC, WC) : qC(iC + 2, FC, WC), iC - IC <= zC ? ZC(IC, iC, WC) : qC(IC, iC, WC)
```

#### 38. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14005-L14040` → after: `L594-L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L594-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L594-L639) · [Before (L14005-L14040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14005-L14040)

```diff
-     async function Fb(kk, ek, ik) {
-       const Sk = {
-         fflateUrl: "https://unpkg.com/fflate@0.8.2",
-         includeAnchoringProperties: !0,
-         anchoringType: "plane",
-         planeAnchoringAlignment: "horizontal",
-         modelFileName: "model.usda",
-         precision: 5,
-         exportCamera: !1,
-         cameraSensorWidth: 35,
-         ...ek
-       };
-       "undefined" === typeof fflate && await fk.Tools.LoadScriptAsync(Sk.fflateUrl);
-       const bk = {};
-       bk[Sk.modelFileName] = null;
-       let rk = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
- ... (20 more removed lines; see GitHub link above)
+   },
+   38121: (CC, zC, ZC) => {
+     CC.exports = {
+       init: function(CC) {
+         var zC = wC.nextPow2(CC);
+         oC.length < zC && (QC.free(oC), oC = QC.mallocInt32(zC));
+         qC.length < zC && (QC.free(qC), qC = QC.mallocInt32(zC));
+         FC.length < zC && (QC.free(FC), FC = QC.mallocInt32(zC));
+         WC.length < zC && (QC.free(WC), WC = QC.mallocInt32(zC));
+         NC.length < zC && (QC.free(NC), NC = QC.mallocInt32(zC));
+         MC.length < zC && (QC.free(MC), MC = QC.mallocInt32(zC));
+         var ZC = 8 * zC;
+         gC.length < ZC && (QC.free(gC), gC = QC.mallocDouble(ZC))
+       },
+       sweepBipartite: function(CC, zC, ZC, QC, wC, fC, NC, MC, PC, GC) {
+         for (var RC = 0, AC = 2 * CC, xC = CC - 1, JC = AC - 1, IC = ZC; IC < QC; ++IC) {
+ ... (30 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14054-L14060` → after: `L642-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L642-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L642-L679) · [Before (L14054-L14060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14054-L14060)

```diff
-       }(kk.activeCamera, Sk)), rk += "\n            }\n        }";
-       const mk = {};
-       rk += function(kk, ek, ik) {
-         const Dk = [];
-         for (const fk in kk) {
-           const Sk = kk[fk];
-           Dk.push(db(Sk, ek, ik))
+       },
+       sweepComplete: function(CC, zC, ZC, QC, wC, nC, fC, PC, GC, RC) {
+         for (var AC = 0, xC = 2 * CC, JC = CC - 1, IC = xC - 1, iC = ZC; iC < QC; ++iC) {
+           var vC = nC[iC] + 1 << 1,
+             eC = xC * iC;
+           gC[AC++] = wC[eC + JC], gC[AC++] = -vC, gC[AC++] = wC[eC + IC], gC[AC++] = vC
+         }
+         for (iC = fC; iC < PC; ++iC) {
+           vC = RC[iC] + 1 << 1;
+           var hC = xC * iC;
+           gC[AC++] = GC[hC + JC], gC[AC++] = 1 | -vC, gC[AC++] = GC[hC + IC], gC[AC++] = 1 | vC
+         }
+         var KC = AC >>> 1;
+         bC(gC, KC);
+         var YC = 0,
+           dC = 0,
+ ... (22 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14062-L14075` → after: `L681-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L681-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L681-L724) · [Before (L14062-L14075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14062-L14075)

```diff
-         return `\n    def "Materials"\n{\n${Dk.join("")}\n}\n\n`
-       }(Pk, mk, Sk), rk += "\n    }", bk[Sk.modelFileName] = fflate.strToU8(rk);
-       for (const Dk in mk) {
-         const {
-           texture: kk,
-           ext: ek,
-           mimeType: ik
-         } = mk[Dk], fk = await yi(kk);
-         if (fk && jb(fk.mimeType) && fk.mimeType === ik) bk[`textures/Texture_${Dk}.${ek}`] = new Uint8Array(fk.data);
-         else {
-           const fk = kk.getSize(),
-             Sk = await (0, Yk.e)(kk),
-             rk = await jk.DumpTools.DumpDataAsync(fk.width, fk.height, Sk, ik, void 0, !1, !0);
-           bk[`textures/Texture_${Dk}.${ek}`] = new Uint8Array(rk).slice()
+       },
+       scanBipartite: function(CC, zC, ZC, QC, wC, fC, FC, WC, NC, MC, PC, GC) {
+         var RC = 0,
+           AC = 2 * CC,
+           xC = zC,
+           JC = zC + CC,
+           IC = 1,
+           iC = 1;
+         QC ? iC = nC : IC = nC;
+         for (var vC = wC; vC < fC; ++vC) {
+           var eC = vC + IC,
+             hC = AC * vC;
+           gC[RC++] = FC[hC + xC], gC[RC++] = -eC, gC[RC++] = FC[hC + JC], gC[RC++] = eC
+         }
+         for (vC = NC; vC < MC; ++vC) {
+           eC = vC + iC;
+ ... (28 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14077-L14088` → after: `L726-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L726-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L726-L761) · [Before (L14077-L14088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14077-L14088)

```diff
-       }
-       let Mk = 0;
-       for (const Dk in bk) {
-         const kk = bk[Dk];
-         if (!kk) continue;
-         Mk += 34 + Dk.length;
-         const ek = 63 & Mk;
-         if (4 !== ek) {
-           const ik = new Uint8Array(64 - ek);
-           bk[Dk] = [kk, {
-             extra: {
-               12345: ik
+       },
+       scanComplete: function(CC, zC, ZC, QC, wC, fC, qC, FC, WC, NC, MC) {
+         for (var SC = 0, pC = 2 * CC, PC = zC, GC = zC + CC, RC = QC; RC < wC; ++RC) {
+           var AC = RC + nC,
+             xC = pC * RC;
+           gC[SC++] = fC[xC + PC], gC[SC++] = -AC, gC[SC++] = fC[xC + GC], gC[SC++] = AC
+         }
+         for (RC = FC; RC < WC; ++RC) {
+           AC = RC + 1;
+           var JC = pC * RC;
+           gC[SC++] = NC[JC + PC], gC[SC++] = -AC
+         }
+         var IC = SC >>> 1;
+         bC(gC, IC);
+         var iC = 0;
+         for (RC = 0; RC < IC; ++RC) {
+ ... (20 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14090` → after: `L763-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L763-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L763-L769) · [Before (L14090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14090)

```diff
-           }]
+           } else {
+             for (AC = vC - nC, dC = iC - 1; dC >= 0; --dC)
+               if (oC[dC] === AC) {
+                 for (lC = dC + 1; lC < iC; ++lC) oC[lC - 1] = oC[lC];
+                 break
+               }-- iC
+           }
```

#### 43. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14094-L14096` → after: `L772-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L772-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L772-L819) · [Before (L14094-L14096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14094-L14096)

```diff
-       return fflate.zipSync(bk, {
-         level: 0
-       })
+     };
+     var QC = ZC(38096),
+       wC = ZC(38105),
+       bC = ZC(38128),
+       nC = 1 << 28,
+       fC = 1024,
+       oC = QC.mallocInt32(fC),
+       qC = QC.mallocInt32(fC),
+       FC = QC.mallocInt32(fC),
+       WC = QC.mallocInt32(fC),
+       NC = QC.mallocInt32(fC),
+       MC = QC.mallocInt32(fC),
+       gC = QC.mallocDouble(8192);
+ 
+     function SC(CC, zC, ZC, QC) {
+       var wC = zC[QC],
+ ... (32 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14098-L14118` → after: `L821-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L821-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L821-L843) · [Before (L14098-L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14098-L14118)

```diff
-     var ub = ik(40690);
-     class qb {
-       static Export(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
-           ik = arguments.length > 2 ? arguments[2] : void 0;
-         if (!kk || 0 === kk.bones.length) throw new Error("Invalid or empty skeleton provided");
-         let Dk = ek;
-         ek && 0 !== ek.length || (Dk = kk.animations.map((kk => kk.name)));
-         let fk = null;
-         for (const mk of Dk) {
-           const ek = kk.getAnimationRange(mk);
-           ek && (fk = fk ? new ub.b("animation-range", Math.min(fk.from, ek.from), Math.max(fk.to, ek.to)) : ek)
-         }
-         if (!fk && (kk.animations.length > 0 && (fk = kk.getAnimationRange(kk.animations[0].name)), !fk)) throw new Error("No animation range found in skeleton");
-         const Sk = ik || 1 / (kk.animations[0]?.framePerSecond || 30),
-           bk = this._BuildBoneHierarchy(kk, Dk);
- ... (5 more removed lines; see GitHub link above)
+   },
+   38063: (CC, zC, ZC) => {
+     CC.exports = function() {
+       var CC = this;
+       this.components = {}, this.comps = this.components;
+       var zC = this.components,
+         ZC = 1,
+         wC = {},
+         bC = [],
+         nC = [],
+         fC = {
+           timeout: !1,
+           removals: [],
+           multiComps: []
+         };
+ 
+ ... (7 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14120-L14141` → after: `L845-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L845-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L845-L962) · [Before (L14120-L14141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14120-L14141)

```diff
-       static _BuildBoneHierarchy(kk, ek) {
-         const ik = new Map,
-           Dk = [];
-         for (const fk of kk.bones) {
-           const kk = {
-             bone: fk,
-             children: [],
-             hasPositionChannels: !1,
-             hasRotationChannels: !1,
-             positionKeys: [],
-             rotationKeys: []
-           };
-           ik.set(fk, kk)
-         }
-         for (const fk of kk.bones) {
-           const kk = ik.get(fk);
- ... (6 more removed lines; see GitHub link above)
+ 
+       function qC() {
+         fC.timeout || (fC.timeout = !0, setTimeout(FC, 1))
+       }
+ 
+       function FC() {
+         fC.timeout = !1, WC()
+       }
+ 
+       function WC() {
+         fC.multiComps.length && function(CC) {
+           for (var zC = 0; zC < CC.length; zC++) {
+             var {
+               entID: ZC,
+               data: QC
+             } = CC[zC], wC = QC.hash[ZC];
+ ... (102 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14144-L14160` → after: `L965-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L965-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L965-L971) · [Before (L14144-L14160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14144-L14160)

```diff
-       }
-       static _ExportHierarchy(kk, ek) {
-         let ik = "";
-         const Dk = "    ".repeat(ek);
-         for (const fk of kk) {
-           const kk = fk.bone;
-           if (this._IsEndSite(fk)) {
-             ik += `${Dk}End Site\n`, ik += `${Dk}{\n`;
-             const ek = this._GetBoneOffset(kk);
-             ik += `${Dk}    OFFSET ${ek.x.toFixed(6)} ${ek.y.toFixed(6)} ${ek.z.toFixed(6)}\n`, ik += `${Dk}}\n`
-           } else {
-             ik += `${0===ek?"ROOT":`${Dk}JOINT`} ${kk.name}\n`, ik += `${Dk}{\n`;
-             const Sk = this._GetBoneOffset(kk);
-             ik += `${Dk}    OFFSET ${Sk.x.toFixed(6)} ${Sk.y.toFixed(6)} ${Sk.z.toFixed(6)}\n`;
-             const bk = [];
-             fk.hasPositionChannels && bk.push("Xposition", "Yposition", "Zposition"), fk.hasRotationChannels && bk.push("Zrotation", "Xrotation", "Yrotation"), bk.length > 0 && (ik += `${Dk}    CHANNELS ${bk.length} ${bk.join(" ")}\n`), fk.children.length > 0 && (ik += this._Expo … [truncated]
- ... (1 more removed lines; see GitHub link above)
+       }, this.render = function(ZC) {
+         WC();
+         for (var QC = 0; QC < nC.length; QC++) {
+           var bC = nC[QC],
+             fC = zC[bC],
+             oC = wC[bC];
+           fC.vR(ZC, oC.list), WC()
```

#### 47. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14164-L14173` → after: `L990-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L990-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L990-L1001) · [Before (L14164-L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14164-L14173)

```diff
-       static _IsEndSite(kk) {
-         return 0 === kk.children.length
-       }
-       static _GetBoneOffset(kk) {
-         try {
-           if (!kk.getParent()) return kk.getRestMatrix().getTranslation();
-           return kk.getLocalMatrix().getTranslation()
-         } catch (ek) {
-           return Dk.eH.Zero()
-         }
+     };
+     var QC = ZC(38072)
+   },
+   38072: CC => {
+     function zC(CC, zC) {
+       var ZC = CC._map[zC];
+       if (delete CC.hash[zC], delete CC._map[zC], ZC === CC.list.length - 1) CC.list.pop(), CC._idList.pop();
+       else {
+         var QC = CC.list.pop();
+         CC.list[ZC] = QC;
+         var wC = CC._idList.pop();
+         CC._idList[ZC] = wC, CC._map[wC] = ZC
```

#### 48. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14175-L14181` → after: `L1003-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1003-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1003-L1006) · [Before (L14175-L14181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14175-L14181)

```diff
-       static _ExportMotionData(kk, ek, ik, Dk) {
-         let fk = "";
-         for (let Sk = 0; Sk < ek; Sk++) {
-           const ek = [];
-           this._CollectFrameValues(kk, Sk + ik, ek, Dk), fk += ek.map((kk => kk.toFixed(6))).join(" ") + "\n"
-         }
-         return fk
+     }
+     CC.exports = class {
+       constructor() {
+         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
```

#### 49. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14183-L14196` → after: `L1008-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1008-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1008-L1012) · [Before (L14183-L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14183-L14196)

```diff
-       static _CollectFrameValues(kk, ek, ik, Dk) {
-         for (const fk of kk)
-           if (!this._IsEndSite(fk)) {
-             if (fk.hasPositionChannels) {
-               const kk = this._GetPositionAtFrameIndex(fk.positionKeys, ek);
-               ik.push(kk.x, kk.y, kk.z)
-             }
-             if (fk.hasRotationChannels) {
-               const kk = this._GetRotationAtFrameIndex(fk.rotationKeys, ek),
-                 Dk = this._QuaternionToEuler(kk);
-               ik.push(Dk.z, Dk.x, Dk.y)
-             }
-             fk.children.length > 0 && this._CollectFrameValues(fk.children, ek, ik, Dk)
-           }
+       add(CC, zC) {
+         if ("number" === typeof this._map[CC]) {
+           var ZC = this._map[CC];
+           this.hash[CC] = zC, this.list[ZC] = zC, this._idList[ZC] = CC
+         } else this._map[CC] = this.list.length, this.hash[CC] = zC, this.list.push(zC), this._idList.push(CC)
```

#### 50. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14198-L14200` → after: `L1014-L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1014-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1014-L1016) · [Before (L14198-L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14198-L14200)

```diff
-       static _GetPositionAtFrameIndex(kk, ek) {
-         if (0 === kk.length) return Dk.eH.Zero();
-         return kk[Math.max(0, Math.min(ek, kk.length - 1))].value.clone()
+       remove(CC) {
+         var zC = this._map[CC];
+         this.hash[CC] = null, this.list[zC] = null, this._pendingRemovals.push(CC)
```

#### 51. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14202-L14204` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1018-L1019) · [Before (L14202-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14202-L14204)

```diff
-       static _GetRotationAtFrameIndex(kk, ek) {
-         if (0 === kk.length) return Dk.Quaternion.Identity();
-         return kk[Math.max(0, Math.min(ek, kk.length - 1))].value.clone()
+       dispose() {
+         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
```

#### 52. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14206-L14212` → after: `L1021-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1021-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1021-L1026) · [Before (L14206-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14206-L14212)

```diff
-       static _QuaternionToEuler(kk) {
-         const ek = new Dk.Matrix;
-         kk.toRotationMatrix(ek);
-         const ik = ek.m;
-         let Sk, bk, rk;
-         const Pk = Math.sqrt(ik[0] * ik[0] + ik[1] * ik[1]);
-         return Pk > vi.d ? (Sk = Math.atan2(ik[6], ik[10]), bk = Math.atan2(-ik[2], Pk), rk = Math.atan2(ik[1], ik[0])) : (Sk = Math.atan2(-ik[9], ik[5]), bk = Math.atan2(-ik[2], Pk), rk = 0), new Dk.eH(fk.Tools.ToDegrees(Sk), fk.Tools.ToDegrees(bk), fk.Tools.ToDegrees(rk))
+       flush() {
+         for (var CC = 0; CC < this._pendingRemovals.length; CC++) {
+           var ZC = this._pendingRemovals[CC];
+           null === this.hash[ZC] && zC(this, ZC)
+         }
+         this._pendingRemovals.length = 0
```

#### 53. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14215-L14220` → after: `L1029-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1029-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1029-L1069) · [Before (L14215-L14220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14215-L14220)

```diff
- 
-     function Ib(kk) {
-       return "string" === typeof kk?.name
-     }
-     const zb = Symbol("__xml:meta$__"),
-       Qb = Symbol("__xml:name$__");
+   },
+   37892: (CC, zC, ZC) => {
+     CC = ZC.nmd(CC);
+     var QC = "__lodash_hash_undefined__",
+       wC = 9007199254740991,
+       bC = "[object Arguments]",
+       nC = "[object Boolean]",
+       fC = "[object Date]",
+       oC = "[object Function]",
+       qC = "[object GeneratorFunction]",
+       FC = "[object Map]",
+       WC = "[object Number]",
+       NC = "[object Object]",
+       MC = "[object Promise]",
+       gC = "[object RegExp]",
+       SC = "[object Set]",
+ ... (25 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14223` → after: `L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1072) · [Before (L14223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14223)

```diff
-       Object.prototype.hasOwnProperty.call(kk.metadata, zb) || (kk.metadata[zb] = []), kk.metadata[zb].push(ek)
+       return CC.set(zC[0], zC[1]), CC
```

#### 55. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14226-L14253` → after: `L1075-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1075-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1075-L1076) · [Before (L14226-L14253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14226-L14253)

```diff
-     function Eb(kk) {
-       return (ek, ik) => {
-         ek[Qb] = kk
-       }
-     }
- 
-     function hb() {
-       return (kk, ek) => vb(ek, {
-         kind: "none",
-         prop: String(ek.name),
-         ignore: !0
-       })
-     }
- 
-     function ab(kk) {
-       return (ek, ik) => vb(ik, {
- ... (12 more removed lines; see GitHub link above)
+     function aC(CC, zC) {
+       return CC.add(zC), CC
```

#### 56. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14256-L14262` → after: `L1079-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1079-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1079-L1082) · [Before (L14256-L14262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14256-L14262)

```diff
-     function tb(kk) {
-       const ek = "function" === typeof kk ? kk : kk?.constructor,
-         ik = ek?.[Symbol.metadata];
-       if (!ik) return [];
-       const Dk = [];
-       let fk = ik;
-       for (; fk;) Object.prototype.hasOwnProperty.call(fk, zb) && Dk.push(...fk[zb]), fk = Object.getPrototypeOf(fk);
+     function tC(CC, zC, ZC, QC) {
+       var wC = -1,
+         bC = CC ? CC.length : 0;
+       for (QC && bC && (ZC = CC[++wC]); ++wC < bC;) ZC = zC(ZC, CC[wC], wC, CC);
```

#### 57. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14267-L14268` → after: `L1087-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1087-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1087-L1091) · [Before (L14267-L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14267-L14268)

```diff
-       const ek = kk?.constructor?.[Qb];
-       return ek || void 0
+       var zC = !1;
+       if (null != CC && "function" != typeof CC.toString) try {
+         zC = !!(CC + "")
+       } catch (ZC) {}
+       return zC
```

#### 58. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14272` → after: `L1095-L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1095-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1095-L1099) · [Before (L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14272)

```diff
-       return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(kk)
+       var zC = -1,
+         ZC = Array(CC.size);
+       return CC.forEach((function(CC, QC) {
+         ZC[++zC] = [QC, CC]
+       })), ZC
```

#### 59. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14275-L14294` → after: `L1102-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1102-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1102-L1104) · [Before (L14275-L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14275-L14294)

```diff
-     function cb(kk) {
-       if (Ib(kk)) return kk;
-       const ek = (kk ?? "").trim();
-       if (!ek) return {
-         name: ""
-       };
-       const ik = ek.indexOf(":");
-       if (-1 === ik) return {
-         name: ek
-       };
-       if (-1 !== ek.indexOf(":", ik + 1)) return {
-         name: ek
-       };
-       const Dk = ek.slice(0, ik),
-         fk = ek.slice(ik + 1);
-       return Bb(Dk) && Bb(fk) ? {
- ... (4 more removed lines; see GitHub link above)
+     function yC(CC, zC) {
+       return function(ZC) {
+         return CC(zC(ZC))
```

#### 60. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14298-L14310` → after: `L1108-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1108-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1108-L1149) · [Before (L14298-L14310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14298-L14310)

```diff
-     function Tb(kk, ek) {
-       return ek ? `${ek}:${kk}` : kk
-     }
-     const ob = Object.freeze({
-         eps: 1e-6,
-         maxDecimalsCap: 15,
-         trimTrailingZeros: !0,
-         allowScientific: !1,
-         snapNearZero: !0
-       }),
-       Zb = Object.freeze({
-         number: ob
-       });
+     function LC(CC) {
+       var zC = -1,
+         ZC = Array(CC.size);
+       return CC.forEach((function(CC) {
+         ZC[++zC] = CC
+       })), ZC
+     }
+     var UC = Array.prototype,
+       BC = Function.prototype,
+       OC = Object.prototype,
+       kC = cC["__core-js_shared__"],
+       VC = function() {
+         var CC = /[^.]+$/.exec(kC && kC.keys && kC.keys.IE_PROTO || "");
+         return CC ? "Symbol(src)_1." + CC : ""
+       }(),
+       Cz = BC.toString,
+ ... (26 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14313-L14322` → after: `L1152-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1152-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1152-L1156) · [Before (L14313-L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14313-L14322)

```diff
-       const ek = kk?.eps ?? ob.eps;
-       return {
-         eps: ek,
-         maxDecimalsCap: kk?.maxDecimalsCap ?? ob.maxDecimalsCap,
-         trimTrailingZeros: kk?.trimTrailingZeros ?? ob.trimTrailingZeros,
-         fixedDecimals: kk?.fixedDecimals,
-         allowScientific: kk?.allowScientific ?? ob.allowScientific,
-         snapNearZero: kk?.snapNearZero ?? ob.snapNearZero,
-         zeroThreshold: kk?.zeroThreshold ?? ek,
-         perAttributeEps: kk?.perAttributeEps
+       var zC = -1,
+         ZC = CC ? CC.length : 0;
+       for (this.clear(); ++zC < ZC;) {
+         var QC = CC[zC];
+         this.set(QC[0], QC[1])
```

#### 62. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14327-L14350` → after: `L1161-L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1161-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1161-L1165) · [Before (L14327-L14350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14327-L14350)

```diff
-       return {
-         number: Ob(kk?.number)
-       }
-     }
-     class Gb {
-       constructor(kk) {
-         if (this.o = kk, this._o = kk.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
-       }
-       toString(kk) {
-         if (!Number.isFinite(kk)) throw new Error(`Cannot format non-finite number: ${kk}`);
-         const ek = this._o,
-           ik = this._clampInt(ek.maxDecimalsCap ?? 15, 0, 20),
-           Dk = ek.trimTrailingZeros ?? !0,
-           fk = ek.snapNearZero ?? !0,
-           Sk = ek.zeroThreshold ?? ek.eps,
-           bk = 1 / ek.eps;
- ... (8 more removed lines; see GitHub link above)
+       var zC = -1,
+         ZC = CC ? CC.length : 0;
+       for (this.clear(); ++zC < ZC;) {
+         var QC = CC[zC];
+         this.set(QC[0], QC[1])
```

#### 63. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14355` → after: `L1170-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1170-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1170-L1175) · [Before (L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14355)

```diff
-       return kk instanceof Date
+       var zC = -1,
+         ZC = CC ? CC.length : 0;
+       for (this.clear(); ++zC < ZC;) {
+         var QC = CC[zC];
+         this.set(QC[0], QC[1])
+       }
```

#### 64. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14359` → after: `L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1179) · [Before (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14359)

```diff
-       return "string" === typeof kk
+       this.__data__ = new Kz(CC)
```

#### 65. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14362-L14363` → after: `L1182-L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1182-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1182-L1196) · [Before (L14362-L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14362-L14363)

```diff
-     function Jb(kk) {
-       return "string" === typeof kk || "number" === typeof kk || "boolean" === typeof kk || "bigint" === typeof kk || Nb(kk)
+     function mz(CC, zC) {
+       var ZC = Lz(CC) || function(CC) {
+           return function(CC) {
+             return function(CC) {
+               return !!CC && "object" == typeof CC
+             }(CC) && Uz(CC)
+           }(CC) && zz.call(CC, "callee") && (!qz.call(CC, "callee") || Zz.call(CC) == bC)
+         }(CC) ? function(CC, zC) {
+           for (var ZC = -1, QC = Array(CC); ++ZC < CC;) QC[ZC] = zC(ZC);
+           return QC
+         }(CC.length, String) : [],
+         QC = ZC.length,
+         wC = !!QC;
+       for (var nC in CC) !zC && !zz.call(CC, nC) || wC && ("length" == nC || tz(nC, QC)) || ZC.push(nC);
+       return ZC
```

#### 66. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L14366-L15874` → after: `L1199-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1199-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1199-L1297) · [Before (L14366-L15874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L14366-L15874)

```diff
-     function kr(kk) {
-       return "number" === typeof kk || "boolean" === typeof kk || "bigint" === typeof kk || Nb(kk)
-     }
-     class er {
-       constructor(kk, ek) {
-         this._ns = new Map, this._prefixCount = 0, this._builder = kk, this._format = gb(ek), this._nFmt = new Gb(this._format)
-       }
-       withNamespace() {
-         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
-         for (const Dk of ek) this._assignNamespace(Dk);
-         return this
-       }
-       serialize(kk, ek) {
-         if (!(ek = ek ?? Xb(kk))) throw new Error("can not find name for given object");
-         const ik = cb(ek);
-         ik.ns && this._assignNamespace(ik.ns, "xmlns"), this._gatherNamespaces(kk, new WeakSet);
- ... (1493 more removed lines; see GitHub link above)
+     function Hz(CC, zC, ZC) {
+       var QC = CC[zC];
+       zz.call(CC, zC) && yz(QC, ZC) && (void 0 !== ZC || zC in CC) || (CC[zC] = ZC)
+     }
+ 
+     function Ez(CC, zC) {
+       for (var ZC = CC.length; ZC--;)
+         if (yz(CC[ZC][0], zC)) return ZC;
+       return -1
+     }
+ 
+     function lz(CC, zC, ZC, QC, wC, MC, GC) {
+       var mC;
+       if (QC && (mC = MC ? QC(CC, wC, MC, GC) : QC(CC)), void 0 !== mC) return mC;
+       if (!kz(CC)) return CC;
+       var HC = Lz(CC);
+ ... (83 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15876-L15877` → after: `L1299-L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1299-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1299-L1333) · [Before (L15876-L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15876-L15877)

```diff
-       withThumbnail(kk) {
-         return this._object.thumbnail = kk, this
+       GC || (GC = new dz);
+       var cC = GC.get(CC);
+       if (cC) return cC;
+       if (GC.set(CC, mC), !HC) var uC = ZC ? function(CC) {
+         return function(CC, zC, ZC) {
+           var QC = zC(CC);
+           return Lz(CC) ? QC : function(CC, zC) {
+             for (var ZC = -1, QC = zC.length, wC = CC.length; ++ZC < QC;) CC[wC + ZC] = zC[ZC];
+             return CC
+           }(QC, ZC(CC))
+         }(CC, Vz, Tz)
+       }(CC) : Vz(CC);
+       return function(CC, zC) {
+         for (var ZC = -1, QC = CC ? CC.length : 0; ++ZC < QC && !1 !== zC(CC[ZC], ZC, CC););
+       }(uC || CC, (function(wC, bC) {
+         uC && (wC = CC[bC = wC]), Hz(mC, bC, lz(wC, zC, ZC, QC, bC, CC, GC))
+ ... (19 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15879-L15881` → after: `L1335-L1438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1335-L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1335-L1438) · [Before (L15879-L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15879-L15881)

```diff
-       withProperty(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return this._object.pid = kk, this._object.id = ek, this
+       return ZC
+     }
+ 
+     function rz(CC, zC) {
+       var ZC = CC.__data__;
+       return function(CC) {
+         var zC = typeof CC;
+         return "string" == zC || "number" == zC || "symbol" == zC || "boolean" == zC ? "__proto__" !== CC : null === CC
+       }(zC) ? ZC["string" == typeof zC ? "string" : "hash"] : ZC.map
+     }
+ 
+     function sz(CC, zC) {
+       var ZC = function(CC, zC) {
+         return null == CC ? void 0 : CC[zC]
+       }(CC, zC);
+       return Xz(ZC) ? ZC : void 0
+ ... (88 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15883-L15884` → after: `L1440-L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1440-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1440-L1459) · [Before (L15883-L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15883-L15884)

```diff
-       build() {
-         return this._object
+       return ""
+     }
+ 
+     function yz(CC, zC) {
+       return CC === zC || CC !== CC && zC !== zC
+     }(gz && az(new gz(new ArrayBuffer(1))) != AC || Sz && az(new Sz) != FC || pz && az(pz.resolve()) != MC || Pz && az(new Pz) != SC || Gz && az(new Gz) != GC) && (az = function(CC) {
+       var zC = Zz.call(CC),
+         ZC = zC == NC ? CC.constructor : void 0,
+         QC = ZC ? jz(ZC) : void 0;
+       if (QC) switch (QC) {
+         case Az:
+           return AC;
+         case xz:
+           return FC;
+         case Jz:
+           return MC;
+ ... (4 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15886-L15887` → after: `L1461-L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1461-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1461-L1506) · [Before (L15886-L15887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15886-L15887)

```diff
-       reset(kk, ek) {
-         this._object = new Ir(kk, ek)
+       return zC
+     });
+     var Lz = Array.isArray;
+ 
+     function Uz(CC) {
+       return null != CC && function(CC) {
+         return "number" == typeof CC && CC > -1 && CC % 1 == 0 && CC <= wC
+       }(CC.length) && !Oz(CC)
+     }
+     var Bz = Nz || function() {
+       return !1
+     };
+ 
+     function Oz(CC) {
+       var zC = kz(CC) ? Zz.call(CC) : "";
+       return zC == oC || zC == qC
+ ... (30 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15890-L15892` → after: `L1510-L1515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1510-L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1510-L1515) · [Before (L15890-L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15890-L15892)

```diff
-     class or extends Tr {
-       constructor(kk) {
-         super(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mr.model), this._object.content = new ar
+     CC.exports = function(CC, ZC, QC, wC) {
+       var bC = zC(ZC, QC, wC);
+       if (bC === 1 / 0) CC = null;
+       else {
+         CC = CC || [];
+         for (var nC = 0; nC < ZC.length; nC++) CC[nC] = ZC[nC] + QC[nC] * bC
```

#### 72. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15894-L15895` → after: `L1517-L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1517-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1517-L1526) · [Before (L15894-L15895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15894-L15895)

```diff
-       withComponent(kk, ek) {
-         return this._object.content.component.push(new Wr(kk, ek)), this
+       return CC
+     }, CC.exports.distance = zC
+   },
+   37555: (CC, zC, ZC) => {
+     var QC = ZC(37560);
+ 
+     function wC(CC) {
+       for (var zC, ZC, wC = 0, bC = CC.length, nC = 0; nC < CC.length;) {
+         for (zC = CC[nC], ZC = 0; nC < bC && CC[nC] === zC;) ++nC, ++ZC;
+         wC += QC.log2(ZC) / 7 | 0, wC += QC.log2(zC >>> 0) / 7 | 0, wC += 2
```

#### 73. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15898-L15900` → after: `L1530-L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1530-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1530-L1538) · [Before (L15898-L15900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15898-L15900)

```diff
-     class Zr extends Tr {
-       constructor(kk) {
-         super(kk, Mr.model)
+     zC.size = wC, zC.encode = function(CC, zC) {
+       zC || (zC = new Uint8Array(wC(CC)));
+       for (var ZC, QC, bC = 0, nC = zC.length, fC = 0; fC < CC.length;) {
+         for (ZC = CC[fC], QC = 0; fC < CC.length && CC[fC] === ZC;) ++fC, ++QC;
+         for (; bC < nC && QC >= 128;) zC[bC++] = 128 + (127 & QC), QC >>>= 7;
+         if (bC >= nC) throw new Error("RLE buffer overflow");
+         for (zC[bC++] = QC, ZC >>>= 0; bC < nC && ZC >= 128;) zC[bC++] = 128 + (127 & ZC), ZC >>>= 7;
+         if (bC >= nC) throw new Error("RLE buffer overflow");
+         zC[bC++] = ZC
```

#### 74. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15902-L15903` → after: `L1540-L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1540-L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1540-L1548) · [Before (L15902-L15903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15902-L15903)

```diff
-       withPostProcessHandlers(kk, ek) {
-         return this._vh = kk, this._th = ek, this
+       return zC
+     }, zC.decode = function(CC, zC) {
+       for (var ZC, QC, wC, bC, nC = zC.length, fC = CC.length, oC = 0, qC = 0; qC < fC;) {
+         for (ZC = 0, QC = 0; qC < fC && CC[qC] >= 128;) ZC += (127 & CC[qC++]) << QC, QC += 7;
+         if (ZC += CC[qC++] << QC, qC >= fC) throw new Error("RLE buffer underrun");
+         if (oC + ZC > nC) throw new Error("Chunk buffer overflow");
+         for (wC = 0, QC = 0; qC < fC && CC[qC] >= 128;) wC += (127 & CC[qC++]) << QC, QC += 7;
+         if (qC >= fC) throw new Error("RLE buffer underrun");
+         for (wC += CC[qC++] << QC, bC = 0; bC < ZC; ++bC) zC[oC++] = wC
```

#### 75. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15905-L15906` → after: `L1550-L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1550-L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1550-L1624) · [Before (L15905-L15906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15905-L15906)

```diff
-       withData(kk) {
-         return this._object.content = this._buildMesh(kk), this
+       return zC
+     }
+   },
+   37560: (CC, zC) => {
+     function ZC(CC) {
+       var zC = 32;
+       return (CC &= -CC) && zC--, 65535 & CC && (zC -= 16), 16711935 & CC && (zC -= 8), 252645135 & CC && (zC -= 4), 858993459 & CC && (zC -= 2), 1431655765 & CC && (zC -= 1), zC
+     }
+     zC.INT_BITS = 32, zC.INT_MAX = 2147483647, zC.INT_MIN = -1 << 31, zC.sign = function(CC) {
+       return (CC > 0) - (CC < 0)
+     }, zC.abs = function(CC) {
+       var zC = CC >> 31;
+       return (CC ^ zC) - zC
+     }, zC.min = function(CC, zC) {
+       return zC ^ (CC ^ zC) & -(CC < zC)
+     }, zC.max = function(CC, zC) {
+ ... (59 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15908-L15909` → after: `L1626-L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1626-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1626-L1628) · [Before (L15908-L15909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15908-L15909)

```diff
-       withMaterial(kk, ek) {
-         return this._object.pid = kk, this._object.pindex = ek, this
+       static GetNearPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
```

#### 77. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15911-L15914` → after: `L1630-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1630-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1630-L1632) · [Before (L15911-L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15911-L15914)

```diff
-       _buildMesh(kk) {
-         const ek = this._buildVertices(kk.positions),
-           ik = this._buildTriangle(kk.indices);
-         return new zr(ek, ik)
+       static GetFarPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
```

#### 78. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15916-L15926` → after: `L1634-L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1634-L1636) · [Before (L15916-L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15916-L15926)

```diff
-       _buildVertices(kk) {
-         const ek = new Qr;
-         if (kk)
-           for (let ik = 0; ik < kk.length;) {
-             const Dk = kk[ik++],
-               fk = kk[ik++],
-               Sk = kk[ik++];
-             let bk = new vr(Dk, fk, Sk);
-             this._vh && (bk = this._vh(bk)), ek.vertex.push(bk)
-           }
-         return ek
+       static GetLeftPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
```

#### 79. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15928-L15938` → after: `L1638-L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1638-L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1638-L1640) · [Before (L15928-L15938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15928-L15938)

```diff
-       _buildTriangle(kk) {
-         const ek = new Er;
-         if (kk)
-           for (let ik = 0; ik < kk.length;) {
-             const Dk = kk[ik++],
-               fk = kk[ik++],
-               Sk = kk[ik++];
-             let bk = new hr(Dk, fk, Sk);
-             this._th && (bk = this._th(bk)), ek.triangle.push(bk)
-           }
-         return ek
+       static GetRightPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[0], zC.normal.y = ZC[7] - ZC[4], zC.normal.z = ZC[11] - ZC[8], zC.d = ZC[15] - ZC[12], zC.normalize()
```

#### 80. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15940-L15943` → after: `L1642-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1642-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1642-L1644) · [Before (L15940-L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15940-L15943)

```diff
-     }
-     class Or {
-       constructor(kk) {
-         this._m = new tr(kk)
+       static GetTopPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[1], zC.normal.y = ZC[7] - ZC[5], zC.normal.z = ZC[11] - ZC[9], zC.d = ZC[15] - ZC[13], zC.normalize()
```

#### 81. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15945-L15948` → after: `L1646-L1648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1646-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1646-L1648) · [Before (L15945-L15948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15945-L15948)

```diff
-       withColor(kk, ek) {
-         this._m.base = this._m.base ?? [];
-         let ik = this._m.base.find((ek => ek.name.toLowerCase() === kk.toLowerCase()));
-         return ik ? (ik.displaycolor = this._rgbaToHex(ek), this) : (ik = new Xr(kk, this._rgbaToHex(ek)), this._m.base.push(ik), this)
+       static GetBottomPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[1], zC.normal.y = ZC[7] + ZC[5], zC.normal.z = ZC[11] + ZC[9], zC.d = ZC[15] + ZC[13], zC.normalize()
```

#### 82. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15950-L15951` → after: `L1650-L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1650-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1650-L1651) · [Before (L15950-L15951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15950-L15951)

```diff
-       build() {
-         return this._m
+       static GetPlanesToRef(CC, zC) {
+         wC.GetNearPlaneToRef(CC, zC[0]), wC.GetFarPlaneToRef(CC, zC[1]), wC.GetLeftPlaneToRef(CC, zC[2]), wC.GetRightPlaneToRef(CC, zC[3]), wC.GetTopPlaneToRef(CC, zC[4]), wC.GetBottomPlaneToRef(CC, zC[5])
```

#### 83. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15953-L15961` → after: `L1653-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1653-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1653-L1656) · [Before (L15953-L15961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15953-L15961)

```diff
-       _rgbaToHex(kk) {
-         const ek = kk => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(kk, 1 / 2.2)))),
-           ik = ek(kk.r).toString(16).padStart(2, "0").toUpperCase(),
-           Dk = ek(kk.g).toString(16).padStart(2, "0").toUpperCase(),
-           fk = ek(kk.b).toString(16).padStart(2, "0").toUpperCase();
-         if ("number" === typeof kk.a) {
-           return `#${ik}${Dk}${fk}${Math.round(Math.min(255,Math.max(0,255*kk.a))).toString(16).padStart(2,"0").toUpperCase()}`
-         }
-         return `#${ik}${Dk}${fk}`
+       static IsPointInFrustum(CC, zC) {
+         for (let ZC = 0; ZC < 6; ZC++)
+           if (zC[ZC].dotCoordinate(CC) < 0) return !1;
+         return !0
```

#### 84. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15965-L15969` → after: `L1666-L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1666-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1666-L1667) · [Before (L15965-L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15965-L15969)

```diff
-       constructor() {
-         this._model = new Vr, this._objects = new Map
-       }
-       withMetaData(kk, ek, ik, Dk) {
-         return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Fr(kk, ek, ik, Dk)), this
+       constructor(CC, zC, ZC, wC) {
+         this.normal = new QC.r(CC, zC, ZC), this.d = wC
```

#### 85. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15971-L15972` → after: `L1669-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1669-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1669-L1670) · [Before (L15971-L15972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15971-L15972)

```diff
-       withMaterial(kk) {
-         return kk instanceof Or && (kk = kk.build()), kk && (this._model.resources = this._model.resources ?? new qr, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(kk)), this
+       VZC() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 86. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15974-L15975` → after: `L1672-L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1672-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1672-L1673) · [Before (L15974-L15975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15974-L15975)

```diff
-       withMesh(kk) {
-         return kk instanceof Zr && (kk = kk.build()), this._model.resources = this._model.resources ?? new qr, this._model.resources.object.push(kk), this
+       clone() {
+         return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 87. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15977-L15978` → after: `L1675-L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1675-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1675-L1676) · [Before (L15977-L15978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15977-L15978)

```diff
-       withComponents(kk) {
-         return kk instanceof or && (kk = kk.build()), this._model.resources = this._model.resources ?? new qr, this._model.resources.object.push(kk), this
+       getClassName() {
+         return "Plane"
```

#### 88. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15980-L15981` → after: `L1678-L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1678-L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1678-L1680) · [Before (L15980-L15981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15980-L15981)

```diff
-       withBuild(kk, ek, ik) {
-         return this._model.build = this._model.build ?? new Br, this._model.build.item?.push(new cr(kk, ek, ik)), this
+       getHashCode() {
+         let CC = this.normal.getHashCode();
+         return CC = 397 * CC ^ this.d, CC
```

#### 89. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15983-L15984` → after: `L1682-L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1682-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1682-L1685) · [Before (L15983-L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15983-L15984)

```diff
-       withUnit(kk) {
-         return this._model.unit = kk, this
+       normalize() {
+         const CC = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let zC = 0;
+         return 0 !== CC && (zC = 1 / CC), this.normal.x *= zC, this.normal.y *= zC, this.normal.z *= zC, this.d *= zC, this
```

#### 90. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15986-L15987` → after: `L1687-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1687-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1687-L1699) · [Before (L15986-L15987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15986-L15987)

```diff
-       reset() {
-         return this._model = new Vr, this._objects = new Map, this
+       transform(CC) {
+         const zC = wC._TmpMatrix;
+         CC.invertToRef(zC);
+         const ZC = zC.m,
+           QC = this.normal.x,
+           bC = this.normal.y,
+           nC = this.normal.z,
+           fC = this.d,
+           oC = QC * ZC[0] + bC * ZC[1] + nC * ZC[2] + fC * ZC[3],
+           qC = QC * ZC[4] + bC * ZC[5] + nC * ZC[6] + fC * ZC[7],
+           FC = QC * ZC[8] + bC * ZC[9] + nC * ZC[10] + fC * ZC[11],
+           WC = QC * ZC[12] + bC * ZC[13] + nC * ZC[14] + fC * ZC[15];
+         return new wC(oC, qC, FC, WC)
```

#### 91. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15989-L15992` → after: `L1701-L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1701-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1701-L1702) · [Before (L15989-L15992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15989-L15992)

```diff
-       build() {
-         if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
-         if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
-         return this._model
+       dotCoordinate(CC) {
+         return this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z + this.d
```

#### 92. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L15994-L16000` → after: `L1704-L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1704-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1704-L1716) · [Before (L15994-L16000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L15994-L16000)

```diff
-     }
-     gr.KnownMetaSet = new Set(Vr.KnownMeta.map((kk => kk.toLowerCase())));
-     class Gr {
-       withContentType(kk) {
-         this._cts || (this._cts = new Yr);
-         const ek = this._cts.items;
-         return ek.some((ek => ek.ext === kk.ext && ek.ct === kk.ct)) || ek.push(kk), this
+       copyFromPoints(CC, zC, ZC) {
+         const QC = zC.x - CC.x,
+           wC = zC.y - CC.y,
+           bC = zC.z - CC.z,
+           nC = ZC.x - CC.x,
+           fC = ZC.y - CC.y,
+           oC = ZC.z - CC.z,
+           qC = wC * oC - bC * fC,
+           FC = bC * nC - QC * oC,
+           WC = QC * fC - wC * nC,
+           NC = Math.sqrt(qC * qC + FC * FC + WC * WC);
+         let MC;
+         return MC = 0 !== NC ? 1 / NC : 0, this.normal.x = qC * MC, this.normal.y = FC * MC, this.normal.z = WC * MC, this.d = -(this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z), this
```

#### 93. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16002-L16005` → after: `L1718-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1718-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1718-L1719) · [Before (L16002-L16005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16002-L16005)

```diff
-       withRelationship(kk) {
-         this._rs || (this._rs = new Cr);
-         const ek = this._rs.items;
-         return ek.some((ek => ek.id === kk.id)) || ek.push(kk), this.withContentType(new Lr("rels", nr.Relationships)), this
+       isFrontFacingTo(CC, zC) {
+         return QC.r.Dot(this.normal, CC) <= zC
```

#### 94. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16007-L16008` → after: `L1721-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1721-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1721-L1722) · [Before (L16007-L16008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16007-L16008)

```diff
-       withModel(kk) {
-         return kk instanceof gr && (kk = kk.build()), this._m = kk, this.withContentType(new Lr("model", nr.Model)), this
+       signedDistanceTo(CC) {
+         return QC.r.Dot(CC, this.normal) + this.d
```

#### 95. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16010-L16017` → after: `L1724-L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1724-L1725) · [Before (L16010-L16017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16010-L16017)

```diff
-       build() {
-         if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
-         const kk = `${Hr}${wr}`;
-         if (!this._rs) {
-           const ek = `/${kk}`;
-           this.withRelationship(new Ar("rel0", yr.ThreeDimModel, ek))
-         }
-         return new jr(this._cts, this._rs, this._m)
+       static FromArray(CC) {
+         return new wC(CC[0], CC[1], CC[2], CC[3])
```

#### 96. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16019-L16022` → after: `L1727-L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1727-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1727-L1729) · [Before (L16019-L16022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16019-L16022)

```diff
-     }
-     class Nr {
-       constructor(kk) {
-         this._o = kk
+       static FromPoints(CC, zC, ZC) {
+         const QC = new wC(0, 0, 0, 0);
+         return QC.copyFromPoints(CC, zC, ZC), QC
```

#### 97. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16024-L16025` → after: `L1731-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1731-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1731-L1733) · [Before (L16024-L16025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16024-L16025)

```diff
-       get options() {
-         return this._o
+       static FromPositionAndNormal(CC, zC) {
+         const ZC = new wC(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(CC, zC, ZC)
```

#### 98. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16027-L16051` → after: `L1735-L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1735-L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1735-L1736) · [Before (L16027-L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16027-L16051)

```diff
-       async serializeAsync(kk) {
-         const ek = await this.ensureZipLibReadyAsync();
-         if (!ek) return;
-         const ik = ek.Zip,
-           Dk = ek.ZipDeflate;
-         if (!ik || !Dk) throw new Error("fflate Zip / ZipDeflate not available");
-         const fk = function(kk, ek, ik) {
-           const fk = new Dk(ek, {
-             level: 6
-           });
-           kk.add(fk);
-           const Sk = function(kk) {
-               return {
-                 push: (ek, ik) => kk.push(ek, ik)
-               }
-             }(fk),
- ... (9 more removed lines; see GitHub link above)
+       static FromPositionAndNormalToRef(CC, zC, ZC) {
+         return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
```

#### 99. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16053-L16058` → after: `L1738-L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1738-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1738-L1740) · [Before (L16053-L16058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16053-L16058)

```diff
-       toDocument() {
-         const kk = (new gr).withUnit(this._o?.unit ?? mr.millimeter);
-         if (this.options.metadata)
-           for (const fk in this.options.metadata) kk.withMetaData(fk, this.options.metadata[fk]);
-         for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
-         return (new Gr).withModel(this.toModel(kk, ...ik)).build()
+       static SignedDistanceToPlaneFromPositionAndNormal(CC, zC, ZC) {
+         const wC = -(zC.x * CC.x + zC.y * CC.y + zC.z * CC.z);
+         return QC.r.Dot(ZC, zC) + wC
```

#### 100. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16062-L16072` → after: `L1763-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1763-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1763-L1764) · [Before (L16062-L16072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16062-L16072)

```diff
-       static async SerializeToMemoryAsync(kk) {
-         const ek = new Array;
-         let ik = 0;
-         for (var Dk = arguments.length, fk = new Array(Dk > 1 ? Dk - 1 : 0), Sk = 1; Sk < Dk; Sk++) fk[Sk - 1] = arguments[Sk];
-         if (await kk.serializeAsync((function(kk, Dk, fk) {
-             ek.push(Dk), ik += Dk.length
-           }), ...fk), !ik) return;
-         const bk = new Uint8Array(ik);
-         let rk = 0;
-         for (const Pk of ek) bk.set(Pk, rk), rk += Pk.length;
-         return bk
+       constructor(CC, zC, ZC, QC) {
+         this.x = CC, this.y = zC, this.width = ZC, this.height = QC
```

#### 101. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16074-L16082` → after: `L1766-L1767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1766-L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1766-L1767) · [Before (L16074-L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16074-L16082)

```diff
-     }
-     class Jr {}
-     Jr.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
-     class kP {
-       constructor() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-         this._from = kk, this._to = ek, this._step = ik, this._i = kk
+       toGlobal(CC, zC) {
+         return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
```

#### 102. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16084-L16087` → after: `L1769-L1770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1769-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1769-L1770) · [Before (L16084-L16087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16084-L16087)

```diff
-       next() {
-         if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
-         const kk = this._i;
-         return this._i += this._step, kk
+       toGlobalToRef(CC, zC, ZC) {
+         return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
```

#### 103. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16089-L16090` → after: `L1772-L1773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1772-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1772-L1773) · [Before (L16089-L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16089-L16090)

```diff
-       reset() {
-         return this._i = this._from, this
+       clone() {
+         return new QC(this.x, this.y, this.width, this.height)
```

#### 104. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16093-L16192` → after: `L1776-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1776-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1776-L1782) · [Before (L16093-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16093-L16192)

```diff
-     class eP extends Nr {
-       constructor() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         super({
-           ...eP.DefaultOptions,
-           ...kk
-         })
-       }
-       toModel(kk) {
-         for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
-         ik = ik.filter((kk => kk instanceof xD.d || kk instanceof nk.e));
-         const fk = new kP,
-           Sk = kk,
-           bk = new Map,
-           rk = this.options.exportInstances ? [] : null;
-         for (let Pk = 0; Pk < ik.length; Pk++) {
- ... (84 more removed lines; see GitHub link above)
+   },
+   37731: (CC, zC, ZC) => {
+     function QC() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
+         const zC = 16 * Math.random() | 0;
+         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
+       }))
```

#### 105. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L16194-L16197` → after: `L1784-L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L1784-L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/228.js#L1784-L1786) · [Before (L16194-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/228.js#L16194-L16197)

```diff
-     eP.DefaultOptions = {
-       unit: mr.meter,
-       exportInstances: !1
-     }, eP._PositionKind = "position", eP._R_BJS_TO_3MF = ak.b.RotationX(Math.PI / 2).multiply(ak.b.Scaling(1, -1, 1))
+     ZC.d(zC, {
+       b: () => QC
+     })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/229.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/229.js` (70 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0)

#### 1. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2)

```diff
- export const ids = [229];
+ export const ids = [229, 235, 238];
```

#### 2. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L4)

```diff
-   36722: (kk, ek, ik) => {
+   40069: (CC, zC, ZC) => {
```

#### 3. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6-L1633` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L6-L15) · [Before (L6-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L6-L1633)

```diff
-       e: () => fk
-     });
-     var Dk = ik(36726);
-     class fk {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
-     }
-     fk.Instances = [], fk.OnEnginesDisposedObservable = new Dk.c, fk._LastCreatedScene = null, fk.UseFallbackTexture = !0, fk.FallbackTexture = ""
-   },
-   36713: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Dk
- ... (1612 more removed lines; see GitHub link above)
+       e: () => nC,
+       i: () => fC
+     });
+     var QC = ZC(38507),
+       wC = ZC(39842),
+       bC = ZC(40042),
+       nC = {};
+     class fC {
+       constructor(CC) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = CC, this.checkInputs = () => {}
```

#### 4. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1635-L1637` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L17-L19) · [Before (L1635-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1635-L1637)

```diff
-       toEulerAngles() {
-         const kk = xk.Zero();
-         return this.toEulerAnglesToRef(kk), kk
+       add(CC) {
+         const zC = CC.getSimpleName();
+         this.attached[zC] ? QC.c.Warn("camera input of type " + zC + " already exists on camera") : (this.attached[zC] = CC, CC.camera = this.camera, CC.checkInputs && (this.checkInputs = this._addCheckInputs(CC.checkInputs.bind(CC))), this.attachedToElement && CC.attachControl(t … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1639-L1653` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L21-L24) · [Before (L1639-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1639-L1653)

```diff
-       toEulerAnglesToRef(kk) {
-         const ek = this._z,
-           ik = this._x,
-           Dk = this._y,
-           fk = this._w,
-           Sk = Dk * ek - ik * fk,
-           bk = .4999999;
-         if (Sk < -bk) kk._y = 2 * Math.atan2(Dk, fk), kk._x = Math.PI / 2, kk._z = 0, kk._isDirty = !0;
-         else if (Sk > bk) kk._y = 2 * Math.atan2(Dk, fk), kk._x = -Math.PI / 2, kk._z = 0, kk._isDirty = !0;
-         else {
-           const bk = fk * fk,
-             rk = ek * ek,
-             Pk = ik * ik,
-             mk = Dk * Dk;
-           kk._z = Math.atan2(2 * (ik * Dk + ek * fk), -rk - Pk + mk + bk), kk._x = Math.asin(-2 * Sk), kk._y = Math.atan2(2 * (ek * ik + Dk * fk), rk - Pk - mk + bk), kk._isDirty = !0
+       remove(CC) {
+         for (const zC in this.attached) {
+           const ZC = this.attached[zC];
+           if (ZC === CC) return ZC.detachControl(), ZC.camera = null, delete this.attached[zC], void this.rebuildInputCheck()
```

#### 6. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1657-L1684` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L27-L30) · [Before (L1657-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1657-L1684)

```diff
-       toAlphaBetaGammaToRef(kk) {
-         const ek = this._z,
-           ik = this._x,
-           Dk = this._y,
-           fk = this._w,
-           Sk = Math.sqrt(ik * ik + Dk * Dk),
-           bk = Math.sqrt(ek * ek + fk * fk),
-           rk = 2 * Math.atan2(Sk, bk),
-           Pk = 2 * Math.atan2(ek, fk),
-           mk = 2 * Math.atan2(Dk, ik),
-           Mk = (Pk + mk) / 2,
-           Kk = (Pk - mk) / 2;
-         return kk.set(Kk, rk, Mk), kk
-       }
-       toRotationMatrix(kk) {
-         return Hk.FromQuaternionToRef(this, kk), kk
- ... (12 more removed lines; see GitHub link above)
+       removeByType(CC) {
+         for (const zC in this.attached) {
+           const ZC = this.attached[zC];
+           ZC.getClassName() === CC && (ZC.detachControl(), ZC.camera = null, delete this.attached[zC], this.rebuildInputCheck())
```

#### 7. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1687-L1740` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L33-L37) · [Before (L1687-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1687-L1740)

```diff
-       toAxisAngleToRef(kk) {
-         let ek;
-         const ik = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
-           Dk = this._w;
-         return ik > 0 ? (ek = 2 * Math.atan2(ik, Dk), kk.set(this._x / ik, this._y / ik, this._z / ik)) : (ek = 0, kk.set(1, 0, 0)), ek
-       }
-       static FromRotationMatrix(kk) {
-         const ek = new Uk;
-         return Uk.FromRotationMatrixToRef(kk, ek), ek
-       }
-       static FromRotationMatrixToRef(kk, ek) {
-         const ik = kk.m,
-           Dk = ik[0],
-           fk = ik[4],
-           Sk = ik[8],
-           bk = ik[1],
- ... (38 more removed lines; see GitHub link above)
+       _addCheckInputs(CC) {
+         const zC = this.checkInputs;
+         return () => {
+           zC(), CC()
+         }
```

#### 8. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1742-L1745` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L39-L40) · [Before (L1742-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1742-L1745)

```diff
-       static RotationAxisToRef(kk, ek, ik) {
-         ik._w = Math.cos(ek / 2);
-         const Dk = Math.sin(ek / 2) / kk.length();
-         return ik._x = kk._x * Dk, ik._y = kk._y * Dk, ik._z = kk._z * Dk, ik._isDirty = !0, ik
+       attachInput(CC) {
+         this.attachedToElement && CC.attachControl(this.noPreventDefault)
```

#### 9. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1747-L1748` → after: `L42-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L42-L47) · [Before (L1747-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1747-L1748)

```diff
-       static FromArray(kk, ek) {
-         return ek || (ek = 0), new Uk(kk[ek], kk[ek + 1], kk[ek + 2], kk[ek + 3])
+       attachElement() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           CC = !bC.d.ForceAttachControlToAlwaysPreventDefault && CC, this.attachedToElement = !0, this.noPreventDefault = CC;
+           for (const zC in this.attached) this.attached[zC].attachControl(CC)
+         }
```

#### 10. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1750-L1751` → after: `L49-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L49-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L49-L59) · [Before (L1750-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1750-L1751)

```diff
-       static FromArrayToRef(kk, ek, ik) {
-         return ik._x = kk[ek], ik._y = kk[ek + 1], ik._z = kk[ek + 2], ik._w = kk[ek + 3], ik._isDirty = !0, ik
+       detachElement() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const zC in this.attached) this.attached[zC].detachControl(), CC && (this.attached[zC].camera = null);
+         this.attachedToElement = !1
+       }
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const CC in this.attached) {
+           const zC = this.attached[CC];
+           zC.checkInputs && (this.checkInputs = this._addCheckInputs(zC.checkInputs.bind(zC)))
+         }
```

#### 11. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1753-L1754` → after: `L61-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L61-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L61-L71) · [Before (L1753-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1753-L1754)

```diff
-       static FromFloatsToRef(kk, ek, ik, Dk, fk) {
-         return fk.Z6(kk, ek, ik, Dk), fk
+       clear() {
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       }
+       serialize(CC) {
+         const zC = {};
+         for (const ZC in this.attached) {
+           const CC = this.attached[ZC],
+             QC = wC.d.Serialize(CC);
+           zC[CC.getClassName()] = QC
+         }
+         CC.inputsmgr = zC
```

#### 12. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1756-L1758` → after: `L73-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L73-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L73-L92) · [Before (L1756-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1756-L1758)

```diff
-       static FromEulerAngles(kk, ek, ik) {
-         const Dk = new Uk;
-         return Uk.RotationYawPitchRollToRef(ek, kk, ik, Dk), Dk
+       parse(CC) {
+         const zC = CC.inputsmgr;
+         if (zC) {
+           this.clear();
+           for (const CC in zC) {
+             const ZC = nC[CC];
+             if (ZC) {
+               const QC = zC[CC],
+                 bC = wC.d.Parse((() => new ZC), QC, null);
+               this.add(bC)
+             }
+           }
+         } else
+           for (const ZC in this.attached) {
+             const zC = nC[this.attached[ZC].getClassName()];
+             if (zC) {
+ ... (4 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1760-L1761` → after: `L94-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L94-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L94-L214) · [Before (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1760-L1761)

```diff
-       static FromEulerAnglesToRef(kk, ek, ik, Dk) {
-         return Uk.RotationYawPitchRollToRef(ek, kk, ik, Dk), Dk
+     }
+   },
+   40076: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => QC.b
+     });
+     var QC = ZC(40078);
+     (0, QC.e)()
+   },
+   40078: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => FC,
+       e: () => NC
+     });
+     var QC = ZC(39811),
+       wC = ZC(39818),
+ ... (105 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1763-L1765` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L216-L218) · [Before (L1763-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1763-L1765)

```diff
-       static FromEulerVector(kk) {
-         const ek = new Uk;
-         return Uk.RotationYawPitchRollToRef(kk._y, kk._x, kk._z, ek), ek
+       static GetNearPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
```

#### 15. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1767-L1768` → after: `L220-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L220-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L220-L222) · [Before (L1767-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1767-L1768)

```diff
-       static FromEulerVectorToRef(kk, ek) {
-         return Uk.RotationYawPitchRollToRef(kk._y, kk._x, kk._z, ek), ek
+       static GetFarPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
```

#### 16. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1770-L1773` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L224-L226) · [Before (L1770-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1770-L1773)

```diff
-       static FromUnitVectorsToRef(kk, ek, ik) {
-         let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Dk.d;
-         const Sk = xk.Dot(kk, ek) + 1;
-         return Sk < fk ? Math.abs(kk.x) > Math.abs(kk.z) ? ik.set(-kk.y, kk.x, 0, 0) : ik.set(0, -kk.z, kk.y, 0) : (xk.CrossToRef(kk, ek, lk.eH[0]), ik.set(lk.eH[0].x, lk.eH[0].y, lk.eH[0].z, Sk)), ik.normalize()
+       static GetLeftPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
```

#### 17. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1775-L1777` → after: `L228-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L228-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L228-L230) · [Before (L1775-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1775-L1777)

```diff
-       static RotationYawPitchRoll(kk, ek, ik) {
-         const Dk = new Uk;
-         return Uk.RotationYawPitchRollToRef(kk, ek, ik, Dk), Dk
+       static GetRightPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[0], zC.normal.y = ZC[7] - ZC[4], zC.normal.z = ZC[11] - ZC[8], zC.d = ZC[15] - ZC[12], zC.normalize()
```

#### 18. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1779-L1789` → after: `L232-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L232-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L232-L234) · [Before (L1779-L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1779-L1789)

```diff
-       static RotationYawPitchRollToRef(kk, ek, ik, Dk) {
-         const fk = .5 * ik,
-           Sk = .5 * ek,
-           bk = .5 * kk,
-           rk = Math.sin(fk),
-           Pk = Math.cos(fk),
-           mk = Math.sin(Sk),
-           Mk = Math.cos(Sk),
-           Kk = Math.sin(bk),
-           xk = Math.cos(bk);
-         return Dk._x = xk * mk * Pk + Kk * Mk * rk, Dk._y = Kk * Mk * Pk - xk * mk * rk, Dk._z = xk * Mk * rk - Kk * mk * Pk, Dk._w = xk * Mk * Pk + Kk * mk * rk, Dk._isDirty = !0, Dk
+       static GetTopPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[1], zC.normal.y = ZC[7] - ZC[5], zC.normal.z = ZC[11] - ZC[9], zC.d = ZC[15] - ZC[13], zC.normalize()
```

#### 19. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1791-L1793` → after: `L236-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L236-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L236-L238) · [Before (L1791-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1791-L1793)

```diff
-       static RotationAlphaBetaGamma(kk, ek, ik) {
-         const Dk = new Uk;
-         return Uk.RotationAlphaBetaGammaToRef(kk, ek, ik, Dk), Dk
+       static GetBottomPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[1], zC.normal.y = ZC[7] + ZC[5], zC.normal.z = ZC[11] + ZC[9], zC.d = ZC[15] + ZC[13], zC.normalize()
```

#### 20. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1795-L1799` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L240-L241) · [Before (L1795-L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1795-L1799)

```diff
-       static RotationAlphaBetaGammaToRef(kk, ek, ik, Dk) {
-         const fk = .5 * (ik + kk),
-           Sk = .5 * (ik - kk),
-           bk = .5 * ek;
-         return Dk._x = Math.cos(Sk) * Math.sin(bk), Dk._y = Math.sin(Sk) * Math.sin(bk), Dk._z = Math.sin(fk) * Math.cos(bk), Dk._w = Math.cos(fk) * Math.cos(bk), Dk._isDirty = !0, Dk
+       static GetPlanesToRef(CC, zC) {
+         wC.GetNearPlaneToRef(CC, zC[0]), wC.GetFarPlaneToRef(CC, zC[1]), wC.GetLeftPlaneToRef(CC, zC[2]), wC.GetRightPlaneToRef(CC, zC[3]), wC.GetTopPlaneToRef(CC, zC[4]), wC.GetBottomPlaneToRef(CC, zC[5])
```

#### 21. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1801-L1803` → after: `L243-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L243-L246) · [Before (L1801-L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1801-L1803)

```diff
-       static RotationQuaternionFromAxis(kk, ek, ik) {
-         const Dk = new Uk(0, 0, 0, 0);
-         return Uk.RotationQuaternionFromAxisToRef(kk, ek, ik, Dk), Dk
+       static IsPointInFrustum(CC, zC) {
+         for (let ZC = 0; ZC < 6; ZC++)
+           if (zC[ZC].dotCoordinate(CC) < 0) return !1;
+         return !0
```

#### 22. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1805-L1807` → after: `L248-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L248-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L248-L257) · [Before (L1805-L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1805-L1807)

```diff
-       static RotationQuaternionFromAxisToRef(kk, ek, ik, Dk) {
-         const fk = wk.Matrix[0];
-         return kk = kk.normalizeToRef(wk.eH[0]), ek = ek.normalizeToRef(wk.eH[1]), ik = ik.normalizeToRef(wk.eH[2]), Hk.FromXYZAxesToRef(kk, ek, ik, fk), Uk.FromRotationMatrixToRef(fk, Dk), Dk
+     }
+   },
+   37596: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => wC
+     });
+     var QC = ZC(36963);
+     class wC {
+       constructor(CC, zC, ZC, wC) {
+         this.normal = new QC.r(CC, zC, ZC), this.d = wC
```

#### 23. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1809-L1811` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L259-L260) · [Before (L1809-L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1809-L1811)

```diff
-       static FromLookDirectionLH(kk, ek) {
-         const ik = new Uk;
-         return Uk.FromLookDirectionLHToRef(kk, ek, ik), ik
+       VZC() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 24. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1813-L1815` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L262-L263) · [Before (L1813-L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1813-L1815)

```diff
-       static FromLookDirectionLHToRef(kk, ek, ik) {
-         const Dk = wk.Matrix[0];
-         return Hk.LookDirectionLHToRef(kk, ek, Dk), Uk.FromRotationMatrixToRef(Dk, ik), ik
+       clone() {
+         return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 25. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1817-L1819` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L265-L266) · [Before (L1817-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1817-L1819)

```diff
-       static FromLookDirectionRH(kk, ek) {
-         const ik = new Uk;
-         return Uk.FromLookDirectionRHToRef(kk, ek, ik), ik
+       getClassName() {
+         return "Plane"
```

#### 26. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1821-L1823` → after: `L268-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L268-L270) · [Before (L1821-L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1821-L1823)

```diff
-       static FromLookDirectionRHToRef(kk, ek, ik) {
-         const Dk = wk.Matrix[0];
-         return Hk.LookDirectionRHToRef(kk, ek, Dk), Uk.FromRotationMatrixToRef(Dk, ik)
+       getHashCode() {
+         let CC = this.normal.getHashCode();
+         return CC = 397 * CC ^ this.d, CC
```

#### 27. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1825-L1827` → after: `L272-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L272-L275) · [Before (L1825-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1825-L1827)

```diff
-       static Slerp(kk, ek, ik) {
-         const Dk = Uk.Identity();
-         return Uk.SlerpToRef(kk, ek, ik, Dk), Dk
+       normalize() {
+         const CC = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let zC = 0;
+         return 0 !== CC && (zC = 1 / CC), this.normal.x *= zC, this.normal.y *= zC, this.normal.z *= zC, this.d *= zC, this
```

#### 28. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1829-L1850` → after: `L277-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L277-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L277-L288) · [Before (L1829-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1829-L1850)

```diff
-       static SlerpToRef(kk, ek, ik, Dk) {
-         let fk, Sk, bk = kk._x * ek._x + kk._y * ek._y + kk._z * ek._z + kk._w * ek._w,
-           rk = !1;
-         if (bk < 0 && (rk = !0, bk = -bk), bk > .999999) Sk = 1 - ik, fk = rk ? -ik : ik;
-         else {
-           const kk = Math.acos(bk),
-             ek = 1 / Math.sin(kk);
-           Sk = Math.sin((1 - ik) * kk) * ek, fk = rk ? -Math.sin(ik * kk) * ek : Math.sin(ik * kk) * ek
-         }
-         return Dk._x = Sk * kk._x + fk * ek._x, Dk._y = Sk * kk._y + fk * ek._y, Dk._z = Sk * kk._z + fk * ek._z, Dk._w = Sk * kk._w + fk * ek._w, Dk._isDirty = !0, Dk
-       }
-       static Hermite(kk, ek, ik, Dk, fk) {
-         const Sk = fk * fk,
-           bk = fk * Sk,
-           rk = 2 * bk - 3 * Sk + 1,
-           Pk = -2 * bk + 3 * Sk,
- ... (6 more removed lines; see GitHub link above)
+       transform(CC) {
+         const zC = wC._TmpMatrix;
+         CC.invertToRef(zC);
+         const ZC = zC.m,
+           QC = this.normal.x,
+           bC = this.normal.y,
+           nC = this.normal.z,
+           fC = this.d,
+           oC = QC * ZC[0] + bC * ZC[1] + nC * ZC[2] + fC * ZC[3],
+           qC = QC * ZC[4] + bC * ZC[5] + nC * ZC[6] + fC * ZC[7],
+           FC = QC * ZC[8] + bC * ZC[9] + nC * ZC[10] + fC * ZC[11],
+           WC = QC * ZC[12] + bC * ZC[13] + nC * ZC[14] + fC * ZC[15];
```

#### 29. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1853-L1892` → after: `L291-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L291-L292) · [Before (L1853-L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1853-L1892)

```diff
-       static Hermite1stDerivative(kk, ek, ik, Dk, fk) {
-         const Sk = new Uk;
-         return this.Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk), Sk
-       }
-       static Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk) {
-         const bk = fk * fk;
-         return Sk._x = 6 * (bk - fk) * kk._x + (3 * bk - 4 * fk + 1) * ek._x + 6 * (-bk + fk) * ik._x + (3 * bk - 2 * fk) * Dk._x, Sk._y = 6 * (bk - fk) * kk._y + (3 * bk - 4 * fk + 1) * ek._y + 6 * (-bk + fk) * ik._y + (3 * bk - 2 * fk) * Dk._y, Sk._z = 6 * (bk - fk) * kk._z + ( … [truncated]
-       }
-       static Normalize(kk) {
-         const ek = Uk.Zero();
-         return Uk.NormalizeToRef(kk, ek), ek
-       }
-       static NormalizeToRef(kk, ek) {
-         return kk.normalizeToRef(ek), ek
-       }
-       static Clamp(kk, ek, ik) {
- ... (24 more removed lines; see GitHub link above)
+       dotCoordinate(CC) {
+         return this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z + this.d
```

#### 30. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1894` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L294) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1894)

```diff
-       static DistanceSquared(kk, ek) {
+       copyFromPoints(CC, zC, ZC) {
```

#### 31. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1898-L1959` → after: `L298-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L298-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L298-L300) · [Before (L1898-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1898-L1959)

```diff
-           Sk = kk.w - ek.w;
-         return ik * ik + Dk * Dk + fk * fk + Sk * Sk
-       }
-       static Center(kk, ek) {
-         return Uk.CenterToRef(kk, ek, Uk.Zero())
-       }
-       static CenterToRef(kk, ek, ik) {
-         return ik.Z6((kk.x + ek.x) / 2, (kk.y + ek.y) / 2, (kk.z + ek.z) / 2, (kk.w + ek.w) / 2)
-       }
-     }
-     Uk._V8PerformanceHack = new Uk(.5, .5, .5, .5);
-     class Hk {
-       static get Use64Bits() {
-         return Sk.c.MatrixUse64Bits
-       }
-       get m() {
- ... (46 more removed lines; see GitHub link above)
+           nC = ZC.x - CC.x,
+           fC = ZC.y - CC.y,
+           oC = ZC.z - CC.z,
```

#### 32. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1963-L1986` → after: `L304-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L304-L306) · [Before (L1963-L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1963-L1986)

```diff
-           Ck = mk * Uk - nk * Mk;
-         return ek * +(bk * lk - rk * pk + Pk * yk) + ik * -(Sk * lk - rk * Yk + Pk * Lk) + Dk * +(Sk * pk - bk * Yk + Pk * Ck) + fk * -(Sk * yk - bk * Lk + rk * Ck)
-       }
-       toString() {
-         return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
-       }
-       toArray() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         if (!kk) return this._m;
-         const ik = this._m;
-         for (let Dk = 0; Dk < 16; Dk++) kk[ek + Dk] = ik[Dk];
-         return this
-       }
-       Tik() {
-         return this._m
- ... (8 more removed lines; see GitHub link above)
+           NC = Math.sqrt(qC * qC + FC * FC + WC * WC);
+         let MC;
+         return MC = 0 !== NC ? 1 / NC : 0, this.normal.x = qC * MC, this.normal.y = FC * MC, this.normal.z = WC * MC, this.d = -(this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z), this
```

#### 33. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1988-L1991` → after: `L308-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L308-L309) · [Before (L1988-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1988-L1991)

```diff
-       set() {
-         const kk = this._m;
-         for (let ek = 0; ek < 16; ek++) kk[ek] = ek < 0 || arguments.length <= ek ? void 0 : arguments[ek];
-         return this.markAsUpdated(), this
+       isFrontFacingTo(CC, zC) {
+         return QC.r.Dot(this.normal, CC) <= zC
```

#### 34. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1993-L1996` → after: `L311-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L311-L312) · [Before (L1993-L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1993-L1996)

```diff
-       A_(kk) {
-         const ek = this._m;
-         for (let ik = 0; ik < 16; ik++) ek[ik] = kk;
-         return this.markAsUpdated(), this
+       signedDistanceTo(CC) {
+         return QC.r.Dot(CC, this.normal) + this.d
```

#### 35. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L1998-L1999` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L314-L315) · [Before (L1998-L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L1998-L1999)

```diff
-       invert() {
-         return this.invertToRef(this), this
+       static FromArray(CC) {
+         return new wC(CC[0], CC[1], CC[2], CC[3])
```

#### 36. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2001-L2002` → after: `L317-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L317-L319) · [Before (L2001-L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2001-L2002)

```diff
-       reset() {
-         return Hk.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
+       static FromPoints(CC, zC, ZC) {
+         const QC = new wC(0, 0, 0, 0);
+         return QC.copyFromPoints(CC, zC, ZC), QC
```

#### 37. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2004-L2196` → after: `L321-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L321-L323) · [Before (L2004-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2004-L2196)

```diff
-       add(kk) {
-         const ek = new Hk;
-         return this.addToRef(kk, ek), ek
-       }
-       addToRef(kk, ek) {
-         const ik = this._m,
-           Dk = ek._m,
-           fk = kk.m;
-         for (let Sk = 0; Sk < 16; Sk++) Dk[Sk] = ik[Sk] + fk[Sk];
-         return ek.markAsUpdated(), ek
-       }
-       addToSelf(kk) {
-         const ek = this._m,
-           ik = kk.m;
-         return ek[0] += ik[0], ek[1] += ik[1], ek[2] += ik[2], ek[3] += ik[3], ek[4] += ik[4], ek[5] += ik[5], ek[6] += ik[6], ek[7] += ik[7], ek[8] += ik[8], ek[9] += ik[9], ek[10] += ik[10], ek[11] += ik[11], ek[12] += ik[12], ek[13] += ik[13], ek[14] += ik[14], ek[15] += ik[15 … [truncated]
-       }
- ... (177 more removed lines; see GitHub link above)
+       static FromPositionAndNormal(CC, zC) {
+         const ZC = new wC(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(CC, zC, ZC)
```

#### 38. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2198-L2202` → after: `L325-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L325-L326) · [Before (L2198-L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2198-L2202)

```diff
-       Hbk() {
-         const kk = this._m;
-         for (let ek = 0; ek < 16; ek++)
-           if (kk[ek] != (ek < 0 || arguments.length <= ek ? void 0 : arguments[ek])) return !1;
-         return !0
+       static FromPositionAndNormalToRef(CC, zC, ZC) {
+         return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
```

#### 39. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2204-L2205` → after: `L328-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L328-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L328-L330) · [Before (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2204-L2205)

```diff
-       floor() {
-         return this.floorToRef(new Hk)
+       static SignedDistanceToPlaneFromPositionAndNormal(CC, zC, ZC) {
+         const wC = -(zC.x * CC.x + zC.y * CC.y + zC.z * CC.z);
+         return QC.r.Dot(ZC, zC) + wC
```

#### 40. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2207-L2211` → after: `L332-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L332-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L332-L354) · [Before (L2207-L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2207-L2211)

```diff
-       floorToRef(kk) {
-         const ek = this._m,
-           ik = kk._m;
-         for (let Dk = 0; Dk < 16; Dk++) ik[Dk] = Math.floor(ek[Dk]);
-         return kk.markAsUpdated(), kk
+     }
+     wC._TmpMatrix = QC.b.Identity()
+   },
+   36961: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       Matrix: () => QC.b,
+       Quaternion: () => QC.f,
+       RegisterMathVector: () => QC.g,
+       TmpVectors: () => QC.j,
+       Vector2: () => QC.n,
+       Eg: () => QC.r,
+       Vector4: () => QC.u
+     });
+     var QC = ZC(36963);
+     (0, QC.g)()
+   },
+ ... (7 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2213-L2214` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L356-L357) · [Before (L2213-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2213-L2214)

```diff
-       fract() {
-         return this.fractToRef(new Hk)
+       toGlobal(CC, zC) {
+         return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
```

#### 42. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2216-L2220` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L359-L360) · [Before (L2216-L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2216-L2220)

```diff
-       fractToRef(kk) {
-         const ek = this._m,
-           ik = kk._m;
-         for (let Dk = 0; Dk < 16; Dk++) ik[Dk] = ek[Dk] - Math.floor(ek[Dk]);
-         return kk.markAsUpdated(), kk
+       toGlobalToRef(CC, zC, ZC) {
+         return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
```

#### 43. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2223-L2232` → after: `L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L363) · [Before (L2223-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2223-L2232)

```diff
-         const kk = new Hk;
-         return kk.Fs(this), kk
-       }
-       getClassName() {
-         return "Matrix"
-       }
-       getHashCode() {
-         let kk = Mk(this._m[0]);
-         for (let ek = 1; ek < 16; ek++) kk = 397 * kk ^ Mk(this._m[ek]);
-         return kk
+         return new QC(this.x, this.y, this.width, this.height)
```

#### 44. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2234-L2252` → after: `L365-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L365-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L365-L482) · [Before (L2234-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2234-L2252)

```diff
-       decomposeToTransformNode(kk) {
-         return kk.rotationQuaternion = kk.rotationQuaternion || new Uk, this.decompose(kk.wi, kk.rotationQuaternion, kk.position)
-       }
-       decompose(kk, ek, ik, Dk) {
-         let fk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
-         if (this._isIdentity) return ik && ik.A_(0), kk && kk.A_(1), ek && ek.Z6(0, 0, 0, 1), !0;
-         const Sk = this._m;
-         if (ik && ik.Z6(Sk[12], Sk[13], Sk[14]), (kk = kk || wk.eH[0]).x = Math.sqrt(Sk[0] * Sk[0] + Sk[1] * Sk[1] + Sk[2] * Sk[2]), kk.y = Math.sqrt(Sk[4] * Sk[4] + Sk[5] * Sk[5] + Sk[6] * Sk[6]), kk.z = Math.sqrt(Sk[8] * Sk[8] + Sk[9] * Sk[9] + Sk[10] * Sk[10]), Dk) {
-           const ek = (fk ? Dk.absoluteScaling.x : Dk.wi.x) < 0 ? -1 : 1,
-             ik = (fk ? Dk.absoluteScaling.y : Dk.wi.y) < 0 ? -1 : 1,
-             Sk = (fk ? Dk.absoluteScaling.z : Dk.wi.z) < 0 ? -1 : 1;
-           kk.x *= ek, kk.y *= ik, kk.z *= Sk
-         } else this.determinant() <= 0 && (kk.y *= -1);
-         if (0 === kk._x || 0 === kk._y || 0 === kk._z) return ek && ek.Z6(0, 0, 0, 1), !1;
-         if (ek) {
-           const ik = 1 / kk._x,
- ... (3 more removed lines; see GitHub link above)
+     }
+   },
+   40219: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => qC
+     });
+     var QC = ZC(36963),
+       wC = ZC(37142),
+       bC = ZC(40224),
+       nC = ZC(40235),
+       fC = ZC(40256);
+ 
+     function oC(CC) {
+       let zC = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const ZC = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         bC = [],
+ ... (102 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2261-L2264` → after: `L485-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L485-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L485-L523) · [Before (L2261-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2261-L2264)

```diff
-       getRowToRef(kk, ek) {
-         if (kk >= 0 && kk <= 3) {
-           const ik = 4 * kk;
-           ek.x = this._m[ik + 0], ek.y = this._m[ik + 1], ek.z = this._m[ik + 2], ek.w = this._m[ik + 3]
+       const oC = new bC.e;
+       return oC.indices = zC, oC.positions = ZC, wC && (oC.colors = nC), oC
+     }
+ 
+     function FC(CC) {
+       const zC = CC.dashSize || 3,
+         ZC = CC.gapSize || 1,
+         wC = CC.dashNb || 200,
+         nC = CC.points,
+         fC = [],
+         oC = [],
+         qC = QC.r.Zero();
+       let FC, WC, NC, MC = 0,
+         gC = 0;
+       for (NC = 0; NC < nC.length - 1; NC++) nC[NC + 1].subtractToRef(nC[NC], qC), MC += qC.length();
+       const SC = MC / wC,
+ ... (23 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2266-L2273` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L525) · [Before (L2266-L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2266-L2273)

```diff
-         return ek
-       }
-       setRow(kk, ek) {
-         return this.setRowFromFloats(kk, ek.x, ek.y, ek.z, ek.w)
-       }
-       transpose() {
-         const kk = new Hk;
-         return Hk.TransposeToRef(this, kk), kk
+         return QC.updateVerticesData(fC.k.PositionKind, CC, !1, !1), bC && zC && QC.updateVerticesData(fC.k.ColorKind, zC, !1, !1), QC.refreshBoundingInfo(), QC
```

#### 47. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2275-L2276` → after: `L527-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L527-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L527-L565) · [Before (L2275-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2275-L2276)

```diff
-       transposeToRef(kk) {
-         return Hk.TransposeToRef(this, kk), kk
+       const oC = !!bC,
+         FC = new nC.c(CC, ZC, null, void 0, void 0, oC, zC.useVertexAlpha, zC.material);
+       return qC(zC).applyToMesh(FC, zC.updatable), FC
+     }
+ 
+     function NC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const QC = zC.colors ? [zC.colors] : null;
+       return WC(CC, {
+         lines: [zC.points],
+         updatable: zC.updatable,
+         instance: zC.instance,
+         colors: QC,
+         useVertexAlpha: zC.useVertexAlpha,
+         material: zC.material
+       }, ZC)
+ ... (23 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2278-L2281` → after: `L567-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L567-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L567-L602) · [Before (L2278-L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2278-L2281)

```diff
-       setRowFromFloats(kk, ek, ik, Dk, fk) {
-         if (kk < 0 || kk > 3) return this;
-         const Sk = 4 * kk;
-         return this._m[Sk + 0] = ek, this._m[Sk + 1] = ik, this._m[Sk + 2] = Dk, this._m[Sk + 3] = fk, this.markAsUpdated(), this
+       const NC = new nC.c(CC, ZC, null, void 0, void 0, void 0, zC.useVertexAlpha, zC.material);
+       return FC(zC).applyToMesh(NC, zC.updatable), NC._creationDataStorage = new wC.f, NC._creationDataStorage.dashSize = WC, NC._creationDataStorage.gapSize = qC, NC
+     }
+     let gC = !1;
+     gC || (gC = !0, bC.e.CreateLineSystem = qC, bC.e.CreateDashedLines = FC, wC.b.CreateLines = function(CC, zC) {
+       return NC(CC, {
+         points: zC,
+         updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     }, wC.b.CreateDashedLines = function(CC, zC, ZC, QC, wC) {
+       return MC(CC, {
+         points: zC,
+         dashSize: ZC,
+         gapSize: QC,
+         dashNb: wC,
+ ... (20 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2283-L2285` → after: `L604-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L604-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L604-L625) · [Before (L2283-L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2283-L2285)

```diff
-       scale(kk) {
-         const ek = new Hk;
-         return this.scaleToRef(kk, ek), ek
+       constructor(CC) {
+         let zC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           QC = arguments.length > 5 ? arguments[5] : void 0,
+           wC = arguments.length > 6 ? arguments[6] : void 0,
+           fC = arguments.length > 7 ? arguments[7] : void 0;
+         super(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, zC, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = QC, this.useVertexAlpha = wC, this.color = new  … [truncated]
+         const oC = {
+           attributes: [nC.k.PositionKind],
+           uniforms: ["world", "viewProjection"],
+           needAlphaBlending: !0,
+           defines: [],
+           useClipPlane: null,
+           shaderLanguage: 0
+         };
+         if (this.useVertexAlpha ? oC.defines.push("#define VERTEXALPHA") : oC.needAlphaBlending = !1, this.useVertexColor ? (oC.defines.push("#define VERTEXCOLOR"), oC.attributes.push(nC.k.ColorKind)) : (oC.uniforms.push("color"), this._color4 = new bC.g), fC) this.material = fC;
+         else {
+ ... (6 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2287-L2289` → after: `L627-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L627-L628) · [Before (L2287-L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2287-L2289)

```diff
-       scaleToRef(kk, ek) {
-         for (let ik = 0; ik < 16; ik++) ek._m[ik] = this._m[ik] * kk;
-         return ek.markAsUpdated(), ek
+       getClassName() {
+         return "LinesMesh"
```

#### 51. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2291-L2293` → after: `L630-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L630-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L630-L631) · [Before (L2291-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2291-L2293)

```diff
-       scaleAndAddToRef(kk, ek) {
-         for (let ik = 0; ik < 16; ik++) ek._m[ik] += this._m[ik] * kk;
-         return ek.markAsUpdated(), ek
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 52. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2295-L2298` → after: `L633-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L633-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L633-L637) · [Before (L2295-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2295-L2298)

```diff
-       scaleInPlace(kk) {
-         const ek = this._m;
-         for (let ik = 0; ik < 16; ik++) ek[ik] *= kk;
-         return this.markAsUpdated(), this
+       set material(CC) {
+         const zC = this.material;
+         if (zC === CC) return;
+         const ZC = zC && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(CC), ZC && zC?.dispose()
```

#### 53. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2300-L2304` → after: `L639-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L639-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L639-L640) · [Before (L2300-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2300-L2304)

```diff
-       toNormalMatrix(kk) {
-         const ek = wk.Matrix[0];
-         this.invertToRef(ek), ek.transposeToRef(kk);
-         const ik = kk._m;
-         return Hk.FromValuesToRef(ik[0], ik[1], ik[2], 0, ik[4], ik[5], ik[6], 0, ik[8], ik[9], ik[10], 0, 0, 0, 0, 1, kk), kk
+       _setInternalMaterial(CC) {
+         this._setMaterial(CC), this.material && (this.material.fillMode = qC.d.LineListDrawMode, this.material.disableLighting = !0)
```

#### 54. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2306-L2308` → after: `L642-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L642-L643) · [Before (L2306-L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2306-L2308)

```diff
-       getRotationMatrix() {
-         const kk = new Hk;
-         return this.getRotationMatrixToRef(kk), kk
+       get checkCollisions() {
+         return !1
```
