# Changed — Bundle Modifications Report (Part 010 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `10 / 58` (**299** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 009](part-009.md) · [Part 011 →](part-011.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/214.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/214.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25)

#### 13. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L497-L498` → after: `L159-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L159-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L159-L166) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L497-L498)

```diff
-       return function(uz) {
-         return Math.max(0, Math.min(zz, uz))
+       let Eq = !1;
+       for (let gq = 0; gq < qq.touches.length; ++gq)
+         if (qq.touches[gq].identifier === Wq) {
+           Eq = !0;
+           break
+         } if (!Eq) {
+         const Eq = qq.changedTouches[0];
+         uq = Eq.clientX, Bq = Eq.clientY, Wq = Eq.identifier
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L503-L504` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L171) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L503-L504)

```diff
-       for (let bz = 0; bz < uz; bz++) "number" !== typeof zz[bz] && (zz[bz] = 0);
-       return zz
+       for (var gq = Eq.changedTouches, Yq = 0; Yq < gq.length; ++Yq) gq[Yq].identifier === Wq && (Wq = null)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L506-L571` → after: `L173-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L173-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L173-L178) · [Before (L506-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L506-L571)

```diff
-     zz.exports = tz
-   },
-   36143: (zz, uz, bz) => {
-     const Ez = bz(36152),
-       nz = {};
-     for (const lz of Object.keys(Ez)) nz[Ez[lz]] = lz;
-     const iz = {
-       rgb: {
-         channels: 3,
-         labels: "rgb"
-       },
-       hsl: {
-         channels: 3,
-         labels: "hsl"
-       },
-       hsv: {
- ... (50 more removed lines; see GitHub link above)
+ 
+     function dq(qq, Eq, gq) {
+       if (!qq.ignoreEvent(gq)) try {
+         rq(qq, gq), Eq && gq.isTrusted && !gq.repeat && qq._keyStates[gq.code] && vq(qq, gq.code)
+       } finally {
+         hq(gq.code, Eq, qq, gq)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L589-L631` → after: `L181-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L181-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L181-L196) · [Before (L589-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L589-L631)

```diff
-     iz.rgb.hsl = function(zz) {
-       const uz = zz[0] / 255,
-         bz = zz[1] / 255,
-         Ez = zz[2] / 255,
-         nz = Math.min(uz, bz, Ez),
-         iz = Math.max(uz, bz, Ez),
-         lz = iz - nz;
-       let Mz, tz;
-       iz === nz ? Mz = 0 : uz === iz ? Mz = (bz - Ez) / lz : bz === iz ? Mz = 2 + (Ez - uz) / lz : Ez === iz && (Mz = 4 + (uz - bz) / lz), Mz = Math.min(60 * Mz, 360), Mz < 0 && (Mz += 360);
-       const Hz = (nz + iz) / 2;
-       return tz = iz === nz ? 0 : Hz <= .5 ? lz / (iz + nz) : lz / (2 - iz - nz), [Mz, 100 * tz, 100 * Hz]
-     }, iz.rgb.hsv = function(zz) {
-       let uz, bz, Ez, nz, iz;
-       const lz = zz[0] / 255,
-         Mz = zz[1] / 255,
-         tz = zz[2] / 255,
- ... (27 more removed lines; see GitHub link above)
+ 
+     function jq(qq, Eq, gq) {
+       if (!qq.ignoreEvent(gq)) try {
+         rq(qq, gq)
+       } finally {
+         ! function(qq, Eq, gq) {
+           if ("pointerId" in gq)
+             if (Eq) {
+               if (null !== qq._touches.currID) return;
+               qq._touches.currID = gq.pointerId
+             } else {
+               if (qq._touches.currID !== gq.pointerId) return;
+               qq._touches.currID = null
+             } var Yq = "button" in gq ? gq.button + 1 : 1;
+           hq("Mouse" + Yq, Eq, qq, gq)
+         }(qq, Eq, gq)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L633-L690` → after: `L198-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L198-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L198-L213) · [Before (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L633-L690)

```diff
-       var lz, Mz;
-       return bz
-     }, iz.keyword.rgb = function(zz) {
-       return Ez[zz]
-     }, iz.rgb.xyz = function(zz) {
-       let uz = zz[0] / 255,
-         bz = zz[1] / 255,
-         Ez = zz[2] / 255;
-       uz = uz > .04045 ? ((uz + .055) / 1.055) ** 2.4 : uz / 12.92, bz = bz > .04045 ? ((bz + .055) / 1.055) ** 2.4 : bz / 12.92, Ez = Ez > .04045 ? ((Ez + .055) / 1.055) ** 2.4 : Ez / 12.92;
-       return [100 * (.4124 * uz + .3576 * bz + .1805 * Ez), 100 * (.2126 * uz + .7152 * bz + .0722 * Ez), 100 * (.0193 * uz + .1192 * bz + .9505 * Ez)]
-     }, iz.rgb.lab = function(zz) {
-       const uz = iz.rgb.xyz(zz);
-       let bz = uz[0],
-         Ez = uz[1],
-         nz = uz[2];
-       bz /= 95.047, Ez /= 100, nz /= 108.883, bz = bz > .008856 ? bz ** (1 / 3) : 7.787 * bz + 16 / 116, Ez = Ez > .008856 ? Ez ** (1 / 3) : 7.787 * Ez + 16 / 116, nz = nz > .008856 ? nz ** (1 / 3) : 7.787 * nz + 16 / 116;
- ... (42 more removed lines; see GitHub link above)
+     }
+ 
+     function Hq(qq, Eq) {
+       var gq = Eq.movementX || Eq.mozMovementX || 0,
+         Yq = Eq.movementY || Eq.mozMovementY || 0;
+       if (Eq.touches && 0 === (gq | Yq)) {
+         var lq = function(qq) {
+           aq(qq);
+           for (let Eq = 0; Eq < qq.changedTouches.length; ++Eq)
+             if (qq.changedTouches[Eq].identifier == Wq) {
+               const gq = qq.changedTouches[Eq],
+                 Yq = [gq.clientX - uq, gq.clientY - Bq];
+               return uq = gq.clientX, Bq = gq.clientY, Yq
+             } return console.error(`Did not find touch id ${Wq}`), [0, 0]
+         }(Eq);
+         gq = lq[0], Yq = lq[1]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L692-L715` → after: `L215-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L215-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L215-L221) · [Before (L692-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L692-L715)

```diff
-     }, iz.hsv.hsl = function(zz) {
-       const uz = zz[0],
-         bz = zz[1] / 100,
-         Ez = zz[2] / 100,
-         nz = Math.max(Ez, .01);
-       let iz, lz;
-       lz = (2 - bz) * Ez;
-       const Mz = (2 - bz) * nz;
-       return iz = bz * nz, iz /= Mz <= 1 ? Mz : 2 - Mz, iz = iz || 0, lz /= 2, [uz, 100 * iz, 100 * lz]
-     }, iz.hwb.rgb = function(zz) {
-       const uz = zz[0] / 360;
-       let bz = zz[1] / 100,
-         Ez = zz[2] / 100;
-       const nz = bz + Ez;
-       let iz;
-       nz > 1 && (bz /= nz, Ez /= nz);
- ... (8 more removed lines; see GitHub link above)
+       qq.lC.dx += gq, qq.lC.dy += Yq
+     }
+ 
+     function oq(qq, Eq) {
+       rq(qq, Eq);
+       var gq = 1;
+       switch (Eq.deltaMode) {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L717` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L223) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L717)

```diff
-           Hz = Mz, Oz = tz, pz = bz;
+           gq = 1;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L720` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L226) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L720)

```diff
-           Hz = tz, Oz = Mz, pz = bz;
+           gq = 12;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L723-L795` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L229) · [Before (L723-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L723-L795)

```diff
-           Hz = bz, Oz = Mz, pz = tz;
-           break;
-         case 3:
-           Hz = bz, Oz = tz, pz = Mz;
-           break;
-         case 4:
-           Hz = tz, Oz = bz, pz = Mz;
-           break;
-         case 5:
-           Hz = Mz, Oz = bz, pz = tz
-       }
-       return [255 * Hz, 255 * Oz, 255 * pz]
-     }, iz.cmyk.rgb = function(zz) {
-       const uz = zz[0] / 100,
-         bz = zz[1] / 100,
-         Ez = zz[2] / 100,
- ... (57 more removed lines; see GitHub link above)
+           gq = qq.element.clientHeight || window.innerHeight
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L797-L858` → after: `L231-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L231-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L231-L283) · [Before (L797-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L797-L858)

```diff
-       let uz;
-       zz -= 16;
-       return [Math.floor(zz / 36) / 5 * 255, Math.floor((uz = zz % 36) / 6) / 5 * 255, uz % 6 / 5 * 255]
-     }, iz.rgb.hex = function(zz) {
-       const uz = (((255 & Math.round(zz[0])) << 16) + ((255 & Math.round(zz[1])) << 8) + (255 & Math.round(zz[2]))).toString(16).toUpperCase();
-       return "000000".substring(uz.length) + uz
-     }, iz.hex.rgb = function(zz) {
-       const uz = zz.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
-       if (!uz) return [0, 0, 0];
-       let bz = uz[0];
-       3 === uz[0].length && (bz = bz.split("").map((zz => zz + zz)).join(""));
-       const Ez = parseInt(bz, 16);
-       return [Ez >> 16 & 255, Ez >> 8 & 255, 255 & Ez]
-     }, iz.rgb.hcg = function(zz) {
-       const uz = zz[0] / 255,
-         bz = zz[1] / 255,
- ... (46 more removed lines; see GitHub link above)
+       qq.lC.hEq += (Eq.deltaX || 0) * gq, qq.lC.nEq += (Eq.deltaY || 0) * gq, qq.lC.bEq += (Eq.deltaZ || 0) * gq
+     }
+ 
+     function Pq(qq, Eq) {
+       if (!qq.gC) return Eq.preventDefault(), !1
+     }
+     var Qq = {
+       AltLeft: "altKey",
+       AltRight: "altKey",
+       ControlLeft: "ctrlKey",
+       ControlRight: "ctrlKey",
+       ShiftLeft: "shiftKey",
+       ShiftRight: "shiftKey",
+       MetaLeft: "metaKey",
+       MetaRight: "metaKey"
+     };
+ ... (37 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L860-L900` → after: `L285-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L285-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L285-L307) · [Before (L860-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L860-L900)

```diff
-       return tz = (1 - bz) * Ez, [255 * (bz * nz[0] + tz), 255 * (bz * nz[1] + tz), 255 * (bz * nz[2] + tz)]
-     }, iz.hcg.hsv = function(zz) {
-       const uz = zz[1] / 100,
-         bz = uz + zz[2] / 100 * (1 - uz);
-       let Ez = 0;
-       return bz > 0 && (Ez = uz / bz), [zz[0], 100 * Ez, 100 * bz]
-     }, iz.hcg.hsl = function(zz) {
-       const uz = zz[1] / 100,
-         bz = zz[2] / 100 * (1 - uz) + .5 * uz;
-       let Ez = 0;
-       return bz > 0 && bz < .5 ? Ez = uz / (2 * bz) : bz >= .5 && bz < 1 && (Ez = uz / (2 * (1 - bz))), [zz[0], 100 * Ez, 100 * bz]
-     }, iz.hcg.hwb = function(zz) {
-       const uz = zz[1] / 100,
-         bz = uz + zz[2] / 100 * (1 - uz);
-       return [zz[0], 100 * (bz - uz), 100 * (1 - bz)]
-     }, iz.hwb.hcg = function(zz) {
- ... (25 more removed lines; see GitHub link above)
+     }
+ 
+     function hq(qq, Eq, gq, Yq) {
+       var lq = gq._keyBindmap[qq];
+       lq && (nq(gq._keyStates[qq], Eq) && (gq._keyStates[qq] = Eq, lq.forEach((qq => {
+         (!gq.filterEvents || gq.filterEvents(Yq, qq)) && function(qq, Eq, gq, Yq) {
+           var lq = Eq ? gq.pressCount : gq.releaseCount;
+           lq[qq] = (lq[qq] || 0) + 1;
+           var Oq = gq._bindPressCount[qq] || 0;
+           (Oq += Eq ? 1 : -1) < 0 && (Oq = 0);
+           gq._bindPressCount[qq] = Oq;
+           var mq = gq.state[qq];
+           if (nq(mq, Oq)) {
+             gq.state[qq] = Oq > 0;
+             var xq = Eq ? gq.down : gq.up;
+             gq.disabled || xq.emit(qq, Yq)
+ ... (7 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L903-L937` → after: `L310-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L310-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L310-L405) · [Before (L903-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L903-L937)

```diff
-   36136: (zz, uz, bz) => {
-     const Ez = bz(36143),
-       nz = bz(36154),
-       iz = {};
-     Object.keys(Ez).forEach((zz => {
-       iz[zz] = {}, Object.defineProperty(iz[zz], "channels", {
-         value: Ez[zz].channels
-       }), Object.defineProperty(iz[zz], "labels", {
-         value: Ez[zz].labels
-       });
-       const uz = nz(zz);
-       Object.keys(uz).forEach((bz => {
-         const Ez = uz[bz];
-         iz[zz][bz] = function(zz) {
-           const uz = function() {
-             for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
- ... (19 more removed lines; see GitHub link above)
+   36586: (qq, Eq) => {
+     function gq(qq) {
+       if (qq && "object" === typeof qq) {
+         var Eq = qq.which || qq.keyCode || qq.charCode;
+         Eq && (qq = Eq)
+       }
+       if ("number" === typeof qq) return mq[qq];
+       var gq, Oq = String(qq);
+       return (gq = Yq[Oq.toLowerCase()]) ? gq : (gq = lq[Oq.toLowerCase()]) || (1 === Oq.length ? Oq.charCodeAt(0) : void 0)
+     }
+     gq.isEventKey = function(qq, Eq) {
+       if (qq && "object" === typeof qq) {
+         var gq = qq.which || qq.keyCode || qq.charCode;
+         if (null === gq || void 0 === gq) return !1;
+         if ("string" === typeof Eq) {
+           var Oq;
+ ... (80 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L939-L940` → after: `L407-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L407-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L407-L489) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L939-L940)

```diff
-   36154: (zz, uz, bz) => {
-     const Ez = bz(36143);
+   39461: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => Yq
+     });
+     class Yq {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
+         this.vU = !1, this.hU = !1, this.bJ = 30, this.aU = 0, this.pU = 100, this.rd = !1, this.fullscreen = !1, this.Wy = function(qq) {}, this.kU = function(qq, Eq, gq) {}, this.YF = function() {}, this.EQ = function() {}, this.KU = function() {}, this.onFullscreenChanged = fu … [truncated]
+           function(qq) {
+             if ("loading" === document.readyState) {
+               var Eq = () => {
+                 document.removeEventListener("readystatechange", Eq), qq()
+               };
+               document.addEventListener("readystatechange", Eq)
+             } else setTimeout(qq, 0)
+ ... (67 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L943-L949` → after: `L492-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L492-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L492-L682) · [Before (L943-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L943-L949)

```diff
-       const uz = function() {
-           const zz = {},
-             uz = Object.keys(Ez);
-           for (let bz = uz.length, Ez = 0; Ez < bz; Ez++) zz[uz[Ez]] = {
-             distance: -1,
-             parent: null
-           };
+       for (var Eq = qq._data, gq = 1e3 / qq.bJ, Yq = Eq.nowObject.now() + mq, lq = 0; Eq.nowObject.now() >= Eq.lastTickStarted + gq && Eq.nowObject.now() < Yq && ++lq <= Oq;) qq.Wy(gq), Eq.lastTickStarted += gq;
+       var xq = 5 * (gq + 5),
+         Aq = Eq.nowObject.now();
+       if (Aq - Eq.lastTickStarted > xq)
+         for (; Aq >= Eq.lastTickStarted + gq;) Eq.lastTickStarted += gq
+     }
+   },
+   36744: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
+     });
+     var Yq = gq(57);
+     const lq = Yq.useLayoutEffect;
+     const Oq = function(qq) {
+       var Eq = (0, Yq.useRef)(qq);
+       return lq((function() {
+ ... (175 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L951-L956` → after: `L684-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L684-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L684-L688) · [Before (L951-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L951-L956)

```diff
-         }(),
-         bz = [zz];
-       for (uz[zz].distance = 0; bz.length;) {
-         const zz = bz.pop(),
-           nz = Object.keys(Ez[zz]);
-         for (let Ez = nz.length, iz = 0; iz < Ez; iz++) {
+         }(qq);
+         for (const cq of xq) {
+           if ("_" === cq[0] && (!Oq || -1 === Oq.indexOf(cq))) continue;
+           if (cq.endsWith("Observable")) continue;
+           if (gq && -1 !== gq.indexOf(cq)) continue;
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L958` → after: `L690-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L690-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L690-L704) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L958)

```diff
-             lz = uz[Ez]; - 1 === lz.distance && (lz.distance = uz[zz].distance + 1, lz.parent = zz, bz.unshift(Ez))
+             uq = typeof xq;
+           if ("function" !== uq) try {
+             if ("object" === uq)
+               if (xq instanceof Uint8Array) Eq[cq] = Uint8Array.from(xq);
+               else if (xq instanceof Array) {
+               if (Eq[cq] = [], xq.length > 0)
+                 if ("object" == typeof xq[0])
+                   for (let qq = 0; qq < xq.length; qq++) {
+                     const gq = lq(xq[qq], Eq, mq); - 1 === Eq[cq].indexOf(gq) && Eq[cq].push(gq)
+                   } else Eq[cq] = xq.slice(0)
+             } else Eq[cq] = lq(xq, Eq, mq);
+             else Eq[cq] = xq
+           } catch (Aq) {
+             Yq.b.Warn(Aq.message)
+           }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L963-L966` → after: `L708-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L708-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L708-L722) · [Before (L963-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L963-L966)

```diff
- 
-     function iz(zz, uz) {
-       return function(bz) {
-         return uz(zz(bz))
+   },
+   38677: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => lq,
+       h: () => Oq,
+       i: () => mq,
+       k: () => xq
+     });
+     var Yq = gq(37289);
+     class lq {
+       constructor(qq, Eq, gq) {
+         this.gradient = qq, this.color1 = Eq, this.color2 = gq
+       }
+       getColorToRef(qq) {
+         this.color2 ? Yq.g.LerpToRef(this.color1, this.color2, Math.random(), qq) : qq.WG(this.color1)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L969-L975` → after: `L725-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L725-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L725-L736) · [Before (L969-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L969-L975)

```diff
- 
-     function lz(zz, uz) {
-       const bz = [uz[zz].parent, zz];
-       let nz = Ez[uz[zz].parent][zz],
-         lz = uz[zz].parent;
-       for (; uz[lz].parent;) bz.unshift(uz[lz].parent), nz = iz(Ez[uz[lz].parent][lz], nz), lz = uz[lz].parent;
-       return nz.conversion = bz, nz
+     class Oq {
+       constructor(qq, Eq) {
+         this.gradient = qq, this.color = Eq
+       }
+     }
+     class mq {
+       constructor(qq, Eq, gq) {
+         this.gradient = qq, this.factor1 = Eq, this.factor2 = gq
+       }
+       getFactor() {
+         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L977-L983` → after: `L738-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L738-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L738-L749) · [Before (L977-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L977-L983)

```diff
-     zz.exports = function(zz) {
-       const uz = nz(zz),
-         bz = {},
-         Ez = Object.keys(uz);
-       for (let nz = Ez.length, iz = 0; iz < nz; iz++) {
-         const zz = Ez[iz];
-         null !== uz[zz].parent && (bz[zz] = lz(zz, uz))
+     class xq {
+       static GetCurrentGradient(qq, Eq, gq) {
+         if (Eq[0].gradient > qq) return void gq(Eq[0], Eq[0], 1);
+         for (let lq = 0; lq < Eq.length - 1; lq++) {
+           const Yq = Eq[lq],
+             Oq = Eq[lq + 1];
+           if (qq >= Yq.gradient && qq <= Oq.gradient) {
+             return void gq(Yq, Oq, (qq - Yq.gradient) / (Oq.gradient - Yq.gradient))
+           }
+         }
+         const Yq = Eq.length - 1;
+         gq(Eq[Yq], Eq[Yq], 1)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L988-L1137` → after: `L753-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L753-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L753-L808) · [Before (L988-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L988-L1137)

```diff
-   36152: zz => {
-     zz.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (134 more removed lines; see GitHub link above)
+   38653: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq
+     });
+     class Yq {
+       static _CheckLimit(qq, Eq) {
+         let gq = Yq._LogLimitOutputs[qq];
+         return gq ? gq.current++ : (gq = {
+           limit: Eq,
+           current: 1
+         }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
+       }
+       static _GenerateLimitMessage(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const gq = Yq._LogLimitOutputs[qq];
+         if (!gq || !Yq.MessageLimitReached) return;
+ ... (40 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L1140-L1153` → after: `L824-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L824-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L824-L870) · [Before (L1140-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L1140-L1153)

```diff
-   36125: (zz, uz, bz) => {
-     var Ez = bz(36132),
-       nz = Array.prototype.concat,
-       iz = Array.prototype.slice,
-       lz = zz.exports = function(zz) {
-         for (var uz = [], bz = 0, lz = zz.length; bz < lz; bz++) {
-           var Mz = zz[bz];
-           Ez(Mz) ? uz = nz.call(uz, iz.call(Mz)) : uz.push(Mz)
-         }
-         return uz
-       };
-     lz.wrap = function(zz) {
-       return function() {
-         return zz(lz(arguments))
+   38679: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
+     });
+     var Yq = gq(37139),
+       lq = gq(37158),
+       Oq = gq(38649);
+     class mq {
+       constructor() {
+         this.direction1 = new Yq.q(0, 1, 0), this.direction2 = new Yq.q(0, 1, 0), this.minEmitBox = new Yq.q(-.5, -.5, -.5), this.maxEmitBox = new Yq.q(.5, .5, .5)
+       }
+       startDirectionFunction(qq, Eq, gq, Oq) {
+         const mq = (0, lq.RandomRange)(this.direction1.x, this.direction2.x),
+           xq = (0, lq.RandomRange)(this.direction1.y, this.direction2.y),
+           Aq = (0, lq.RandomRange)(this.direction1.z, this.direction2.z);
+         if (Oq) return Eq.x = mq, Eq.y = xq, void(Eq.z = Aq);
+ ... (31 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L1157-L1159` → after: `L874-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L874-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/214.js#L874-L1191) · [Before (L1157-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/214.js#L1157-L1159)

```diff
-   36132: zz => {
-     zz.exports = function(zz) {
-       return !(!zz || "string" === typeof zz) && (zz instanceof Array || Array.isArray(zz) || zz.length >= 0 && (zz.splice instanceof Function || Object.getOwnPropertyDescriptor(zz, zz.length - 1) && "String" !== zz.constructor.name))
+   38646: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => xq,
+       e: () => mq
+     });
+     var Yq = gq(37139),
+       lq = gq(37158),
+       Oq = gq(38649);
+     class mq {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.radius = qq, this.height = Eq, this.radiusRange = gq, this.directionRandomizer = lq, this._tempVector = Yq.q.Zero()
+       }
+ ... (302 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/215.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/215.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166)

#### 1. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L4` → after: `L4-L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L4-L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/215.js#L4-L1589) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/215.js#L4)

```diff
-   36191: (zz, uz, bz) => {
+   40821: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       LobbyManageView: () => PE
+     });
+     var Yq = gq(57),
+       lq = gq(1448),
+       Oq = gq(2383),
+       mq = gq(2402),
+       xq = gq(2411),
+       Aq = gq(36612);
+ 
+     function cq() {
+       const [qq, Eq] = (0, Yq.useState)(new Map);
+       return {
+         get: Eq => qq.get(Eq),
+         hold: (0, Yq.useCallback)(((qq, gq, Yq) => {
+ ... (1570 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L8-L9` → after: `L1592-L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1592-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/215.js#L1592-L1797) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/215.js#L8-L9)

```diff
-       f: () => Gz,
-       i: () => az
+       g: () => Aq
+     });
+     var Yq = gq(1448),
+       lq = gq(1926),
+       Oq = gq(1904);
+     const mq = 1e4;
+     let xq = 0;
+ 
+     function Aq(qq) {
+       const Eq = ++xq;
+       return new Promise((gq => {
+         const xq = Eq => {
+             Aq(), clearTimeout(cq), !1 === (null === Eq || void 0 === Eq ? void 0 : Eq.ok) && (0, Yq.reportAnalyticsClick)({
+               id: "lobby_manage.refused",
+               value: qq.type
+             }), gq(Eq)
+ ... (190 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L11-L34` → after: `L1799-L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1799-L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/215.js#L1799-L1804) · [Before (L11-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/215.js#L11-L34)

```diff
-     const Ez = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
-       nz = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
-       iz = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
-       lz = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
-       Mz = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
-       tz = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
-       Hz = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
-       Oz = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
-       pz = JSON.parse('{"src":["/sounds/generatedSprites/random.865e6504e8.ogg","/sounds/generatedSprites/random.30bfb92551.m4a","/sounds/generatedSprites/random.baec75fd79.mp3","/sounds/generatedSprites/random.80db3a1c09.ac3"],"sprite":{"beep":[0,2455.5102040816328],"bow":[2556. … [truncated]
-       dz = JSON.parse('{"src":["/sounds/generatedSprites/mob.c1d17fb6a5.ogg","/sounds/generatedSprites/mob.91d06491e6.m4a","/sounds/generatedSprites/mob.9077a319db.mp3","/sounds/generatedSprites/mob.c45a2fe399.ac3"],"sprite":{"bearRoar1":[0,1011.1791383219954],"bearRoar2":[1113.3 … [truncated]
-       Fz = JSON.parse('{"src":["/sounds/generatedSprites/note.55b41d5148.ogg","/sounds/generatedSprites/note.9d434eddc4.m4a","/sounds/generatedSprites/note.96cf50a66e.mp3","/sounds/generatedSprites/note.85cfed63f9.ac3"],"sprite":{"bass":[0,500],"bassattack":[600,500],"bd":[1200,5 … [truncated]
-       Zz = JSON.parse('{"src":["/sounds/generatedSprites/fishing.ff9694e93b.ogg","/sounds/generatedSprites/fishing.20b18e3c80.m4a","/sounds/generatedSprites/fishing.4388bd71de.mp3","/sounds/generatedSprites/fishing.09b8e92f3c.ac3"],"sprite":{"caughtFish":[0,1976.7573696145125],"r … [truncated]
-       Rz = JSON.parse('{"src":["/sounds/generatedSprites/gameStart.dcb4ad7e5f.ogg","/sounds/generatedSprites/gameStart.04192cc8d1.m4a","/sounds/generatedSprites/gameStart.203520cd23.mp3","/sounds/generatedSprites/gameStart.95d1462a45.ac3"],"sprite":{"game_start_countdown_01":[0,1 … [truncated]
-       Kz = JSON.parse('{"src":["/sounds/generatedSprites/customGame_horror.89bd01b3f6.ogg","/sounds/generatedSprites/customGame_horror.58571ce79e.m4a","/sounds/generatedSprites/customGame_horror.809f261ceb.mp3","/sounds/generatedSprites/customGame_horror.0a4350133e.ac3"],"sprite" … [truncated]
-       wz = JSON.parse('{"src":["/sounds/generatedSprites/crowd.842a12bd70.ogg","/sounds/generatedSprites/crowd.eb817b0986.m4a","/sounds/generatedSprites/crowd.718908450e.mp3","/sounds/generatedSprites/crowd.b61523a08f.ac3"],"sprite":{"crowdAmbience":[0,54935.51020408163],"crowdCh … [truncated]
-       Xz = JSON.parse('{"src":["/sounds/generatedSprites/survivalFactory.83edaf137d.ogg","/sounds/generatedSprites/survivalFactory.39e38bf296.m4a","/sounds/generatedSprites/survivalFactory.e3538de2e7.mp3","/sounds/generatedSprites/survivalFactory.a8fc293f73.ac3"],"sprite":{"rocke … [truncated]
- ... (8 more removed lines; see GitHub link above)
+     var Yq = gq(57),
+       lq = gq(1018),
+       Oq = gq.n(lq),
+       mq = gq(1183),
+       xq = gq(1025),
+       Aq = gq(1070);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L36-L58` → after: `L1806-L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1806-L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/215.js#L1806-L1809) · [Before (L36-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/215.js#L36-L58)

```diff
-         gunSemiAutomatic: Ez,
-         gunSubmachineGun: nz,
-         gunShotgun: tz,
-         gunRifle: lz,
-         gunPistol: iz,
-         gunMisc: Mz,
-         dig: Hz,
-         step: Oz,
-         random: pz,
-         mob: dz,
-         note: Fz,
-         fishing: Zz,
-         gameStart: Rz,
-         customGame_horror: Kz,
-         crowd: wz,
-         survivalFactory: Xz,
- ... (7 more removed lines; see GitHub link above)
+         unlisted: "link",
+         public: "globe",
+         whitelist: "user-check",
+         private: "lock"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L60-L65` → after: `L1811-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L1811-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/215.js#L1811-L2018) · [Before (L60-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/215.js#L60-L65)

```diff
-       Tz = {};
-     for (const qz in Az) {
-       const zz = Az[qz];
-       for (const uz in zz.sprite) {
-         if (Tz[uz]) throw new Error(`duplicate sound name ${uz} in ${Tz[uz]} and ${qz}`);
-         Tz[uz] = qz
+       uq = ["unlisted", "public", "whitelist", "private"];
+ 
+     function Bq(qq) {
+       let {
+         visibility: Eq,
+         onPick: gq
+       } = qq;
+       const {
+         t: lq
+       } = (0, mq.v)(), Bq = (0, Yq.useRef)([]);
+       return (0, Aq.jsx)("div", {
+         className: "WorldSocialTiles",
+         role: "group",
+         "aria-label": lq("worldSocial:whoCanJoin"),
+         children: uq.map(((qq, Yq) => {
+           const mq = qq === Eq;
+ ... (192 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L68-L70` → after: `L2021-L2115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L2021-L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/215.js#L2021-L2115) · [Before (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/215.js#L68-L70)

```diff
-     for (const qz in Az) {
-       const zz = Az[qz];
-       for (let uz = 0; uz < zz.src.length; uz++) zz.src[uz] = Jz.clientSideServerUrls.staticUrl + zz.src[uz]
+ 
+     function Wq(qq) {
+       let {
+         player: Eq,
+         isFriend: gq = !1,
+         status: Yq,
+         showLocation: Aq = void 0 === Yq,
+         SB: Bq,
+         onSendFriendRequest: Wq,
+         actions: Nq,
+         zIndex: aq
+       } = qq;
+       const {
+         t: Vq
+       } = (0, lq.v)();
+       let dq = Yq;
+ ... (79 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L72` → after: `L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R2117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/215.js#L2117) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/215.js#L72)

```diff
-     const Lz = {};
+     const xq = new Map;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L75-L85` → after: `L2120-L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R2120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L2120-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/215.js#L2120-L2182) · [Before (L75-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/215.js#L75-L85)

```diff
-       if (Lz[zz]) return mz(Lz[zz]);
-       {
-         const uz = [];
-         let bz = null;
-         for (const Ez in Az) {
-           const nz = Az[Ez];
-           for (const iz in nz.sprite)
-             if (iz.startsWith(zz)) {
-               if (uz.push(iz), bz && bz !== Ez) throw new Error(`Sound prefix ${zz} is in multiple sprite sheets: ${bz} and ${Ez}`);
-               bz = Ez
-             }
+       xq.set(qq.lobbyName, qq)
+     }
+ 
+     function cq(qq) {
+       const [Eq] = (0, Yq.useState)((() => function(qq) {
+         var Eq;
+         const gq = null !== (Eq = xq.get(qq)) && void 0 !== Eq ? Eq : null;
+         return null !== gq && void 0 !== gq && gq.answer && "error" in gq.answer ? null : gq
+       }(qq))), [gq, mq] = (0, Yq.useState)((() => null !== Eq && void 0 !== Eq && Eq.answer && "settings" in Eq.answer ? Eq.answer.settings : null)), [Aq, cq] = (0, Yq.useState)(!0), [uq, Bq] = (0, Yq.useState)(null !== gq), Wq = (0, Yq.useRef)(gq);
+       Wq.current = gq;
+       const Nq = (0, Yq.useRef)(0),
+         aq = (0, Yq.useRef)(0),
+         Vq = (0, Yq.useRef)(!1),
+         dq = (0, Yq.useRef)(!0),
+         jq = (0, Yq.useCallback)((async Eq => {
+           const gq = ++Nq.current,
+ ... (47 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L92-L93` → after: `L2202-L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L2202-L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/215.js#L2202-L2237) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/215.js#L92-L93)

```diff
-       const uz = Tz[zz];
-       if (void 0 === uz) throw new Error(`Invalid sound name ${zz} (not in any sprite sheet)`);
+       const Eq = lq.get(qq);
+       if (!Eq) return [];
+       const gq = Date.now();
+       for (const [lq, Oq] of Eq) gq - Oq >= Yq.j && Eq.delete(lq);
+       return [...Eq.keys()]
+     }
+   },
+   36753: (qq, Eq, gq) => {
+     function Yq(qq, Eq) {
+       const gq = Eq.toLowerCase();
+       for (const Yq of qq)
+         if (Yq.toLowerCase() === gq) return !0;
+       return !1
+     }
+ 
+     function lq(qq, Eq, gq) {
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L98-L99` → after: `L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/215.js#L2242) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/215.js#L98-L99)

```diff
-       if (!(zz in Az)) throw new Error("Invalid spriteTrack name");
-       return uz in Az[zz].sprite
+       return null === qq || void 0 === qq || !qq.canManage || Yq(qq.whitelist, Eq) ? "none" : "whitelist" === qq.visibility ? "required" : "quiet"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L103-L104` → after: `L2246-L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L2246-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/215.js#L2246-L2250) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/215.js#L103-L104)

```diff
-       if (!(zz in Az)) throw new Error("Invalid spritesheet name");
-       return Az[zz]
+       if (null === qq) return !0;
+       const {
+         visibility: Eq
+       } = qq;
+       return "public" === Eq || "unlisted" === Eq || "whitelist" === Eq && qq.canManage
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L107-L108` → after: `L2253-L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R2253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L2253-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/215.js#L2253-L2264) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/215.js#L107-L108)

```diff
-     function mz(zz) {
-       return zz[Math.floor(Math.random() * zz.length)]
+     function Aq(qq, Eq, gq) {
+       if (gq) {
+         const gq = Eq.filter((Eq => !Yq(qq.whitelist, Eq)));
+         return {
+           ...qq,
+           whitelist: [...qq.whitelist, ...gq]
+         }
+       }
+       return {
+         ...qq,
+         whitelist: qq.whitelist.filter((qq => !Yq(Eq, qq)))
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/216.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/216.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800)

#### 1. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L4-L24` → after: `L4-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L4-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L4-L153) · [Before (L4-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L4-L24)

```diff
-   38974: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => Ez,
-       h: () => nz
-     });
-     const Ez = "The world isn't loaded, so no blocks can be seen.",
-       nz = "The world isn't loaded, so nothing in it can be seen."
-   },
-   36237: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => iz,
-       e: () => nz
-     });
-     let Ez = () => null;
- 
-     function nz(zz) {
- ... (5 more removed lines; see GitHub link above)
+   36701: qq => {
+     qq.exports = {
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
+       cadetblue: [95, 158, 160],
+ ... (134 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L27-L40` → after: `L156-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L156-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L156-L165) · [Before (L27-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L27-L40)

```diff
-   39765: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Rz,
-       e: () => fz,
-       h: () => Xz,
-       l: () => Kz
-     });
-     var Ez = bz(22),
-       nz = bz(39769),
-       iz = bz(39750),
-       lz = bz(39776),
-       Mz = bz(39758),
-       tz = bz(39779),
-       Hz = bz(39798);
+   36692: (qq, Eq, gq) => {
+     var Yq = gq(36701),
+       lq = gq(36704),
+       Oq = Object.hasOwnProperty,
+       mq = Object.create(null);
+     for (var xq in Yq) Oq.call(Yq, xq) && (mq[Yq[xq]] = xq);
+     var Aq = qq.exports = {
+       to: {},
+       get: {}
+     };
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L42-L45` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L167-L168) · [Before (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L42-L45)

```diff
-     function Oz(zz) {
-       var uz, bz;
-       const Ez = (0, iz.j)();
-       return Ez ? null === (uz = (0, nz.b)(Ez.api, zz[0], zz[1], zz[2])) || void 0 === uz || null === (bz = uz.persisted) || void 0 === bz ? void 0 : bz.shared : void 0
+     function cq(qq, Eq, gq) {
+       return Math.min(Math.max(Eq, qq), gq)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L49` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L172-L173) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L49)

```diff
-       return `${zz[0]},${zz[1]},${zz[2]}`
+       var Eq = Math.round(qq).toString(16).toUpperCase();
+       return Eq.length < 2 ? "0" + Eq : Eq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L51-L70` → after: `L175-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L175-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L175-L197) · [Before (L51-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L51-L70)

```diff
-     const dz = new Map;
-     let Fz = null,
-       Zz = 0;
- 
-     function Rz() {
-       return Zz
-     }
- 
-     function Kz(zz) {
-       const uz = null !== Fz && Fz.key === pz(zz.pos) ? Fz.type : null;
-       if (null === uz) return zz;
-       let bz = null;
-       if ("Iron" === uz) {
-         const {
-           cachedPasskey: uz,
-           ...Ez
- ... (4 more removed lines; see GitHub link above)
+     Aq.get = function(qq) {
+       var Eq, gq;
+       switch (qq.substring(0, 3).toLowerCase()) {
+         case "hsl":
+           Eq = Aq.get.hsl(qq), gq = "hsl";
+           break;
+         case "hwb":
+           Eq = Aq.get.hwb(qq), gq = "hwb";
+           break;
+         default:
+           Eq = Aq.get.rgb(qq), gq = "rgb"
+       }
+       return Eq ? {
+         model: gq,
+         value: Eq
+       } : null
+ ... (7 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L73-L76` → after: `L220-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L220-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L220-L226) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L73-L76)

```diff
-       return {
-         ...zz,
-         type: uz,
-         ironChest: bz
+       return null
+     }, Aq.get.hwb = function(qq) {
+       if (!qq) return null;
+       var Eq = qq.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
+       if (Eq) {
+         var gq = parseFloat(Eq[4]);
+         return [(parseFloat(Eq[1]) % 360 + 360) % 360, cq(parseFloat(Eq[2]), 0, 100), cq(parseFloat(Eq[3]), 0, 100), cq(isNaN(gq) ? 1 : gq, 0, 1)]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L80-L94` → after: `L260-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L260-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L260-L286) · [Before (L80-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L80-L94)

```diff
-     function wz(zz) {
-       const uz = Oz(zz),
-         bz = null === uz || void 0 === uz ? void 0 : uz.ownerDbId,
-         Ez = function(zz) {
-           var uz;
-           let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oz(zz);
-           const Ez = pz(zz),
-             nz = dz.get(Ez);
-           return nz ? nz.lastOpened < (null !== (uz = null === bz || void 0 === bz ? void 0 : bz.passkeyLastUpdated) && void 0 !== uz ? uz : 0) ? (dz.delete(Ez), null) : [...nz.jH] : null
-         }(zz, uz);
-       return void 0 === bz ? {
-         cachedPasskey: Ez
-       } : {
-         ownerDbId: bz,
-         cachedPasskey: Ez
+     function Aq(qq, Eq) {
+       if (!(this instanceof Aq)) return new Aq(qq, Eq);
+       if (Eq && Eq in Oq && (Eq = null), Eq && !(Eq in lq)) throw new Error("Unknown model: " + Eq);
+       let gq, cq;
+       if (null == qq) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
+       else if (qq instanceof Aq) this.model = qq.model, this.color = [...qq.color], this.valpha = qq.valpha;
+       else if ("string" === typeof qq) {
+         const Eq = Yq.get(qq);
+         if (null === Eq) throw new Error("Unable to parse color from string: " + qq);
+         this.model = Eq.model, cq = lq[this.model].channels, this.color = Eq.value.slice(0, cq), this.valpha = "number" === typeof Eq.value[cq] ? Eq.value[cq] : 1
+       } else if (qq.length > 0) {
+         this.model = Eq || "rgb", cq = lq[this.model].channels;
+         const gq = Array.prototype.slice.call(qq, 0, cq);
+         this.color = Wq(gq, cq), this.valpha = "number" === typeof qq[cq] ? qq[cq] : 1
+       } else if ("number" === typeof qq) this.model = "rgb", this.color = [qq >> 16 & 255, qq >> 8 & 255, 255 & qq], this.valpha = 1;
+       else {
+ ... (11 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L96-L136` → after: `L288-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L288-L291) · [Before (L96-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L96-L136)

```diff
-     }(0, Hz.i)(lz.e, (zz => {
-       const uz = (0, tz.i)(lz.e, zz);
-       if (!(0, tz.e)(uz) || uz.Fl) return;
-       if (Zz++, !uz.tl || null === uz.pl) return void(Fz = null);
-       const bz = pz(uz.pl);
-       Fz = {
-         key: bz,
-         type: uz.Ol
-       }, null !== uz.dl && dz.set(bz, {
-         jH: [...uz.dl],
-         lastOpened: Date.now()
-       })
-     })), (0, Hz.d)((() => {
-       dz.clear(), Fz = null, Zz++
-     })), (0, Hz.h)((() => {
-       null !== Fz && (Fz = null, Zz++, Ez.k.sK("chestToggleFromServer", !1, !0))
- ... (25 more removed lines; see GitHub link above)
+       if (xq[this.model])
+         for (cq = lq[this.model].channels, gq = 0; gq < cq; gq++) {
+           const qq = xq[this.model][gq];
+           qq && (this.color[gq] = qq(this.color[gq]))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L139-L180` → after: `L316-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L316-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L316-L384) · [Before (L139-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L139-L180)

```diff
-       fz = {
-         writeOnBoard(zz) {
-           var uz;
-           let {
-             pos: bz,
-             text: Ez,
-             textSize: nz
-           } = zz;
-           null === (uz = (0, iz.j)()) || void 0 === uz || uz.send(Mz.d.UpdateBoard, (0, Mz.S)({
-             ql: bz,
-             hl: Ez,
-             Ul: nz
-           }))
-         },
-         writeBook(zz) {
-           var uz;
- ... (26 more removed lines; see GitHub link above)
+       object() {
+         const qq = {},
+           {
+             channels: Eq
+           } = lq[this.model],
+           {
+             labels: gq
+           } = lq[this.model];
+         for (let Yq = 0; Yq < Eq; Yq++) qq[gq[Yq]] = this.color[Yq];
+         return 1 !== this.valpha && (qq.alpha = this.valpha), qq
+       },
+       unitArray() {
+         const qq = this.rgb().color;
+         return qq[0] /= 255, qq[1] /= 255, qq[2] /= 255, 1 !== this.valpha && qq.push(this.valpha), qq
+       },
+       unitObject() {
+ ... (53 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L201-L210` → after: `L479-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L479-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L479-L482) · [Before (L201-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L201-L210)

```diff
-       const uz = (0, iz.j)();
-       if (null !== uz) return zz(uz);
-       let bz = null;
-       const Ez = (0, nz.w)((() => {
-         const uz = (0, iz.j)();
-         null !== uz && null === bz && (Ez(), bz = zz(uz))
-       }));
-       return () => {
-         var zz;
-         Ez(), null === (zz = bz) || void 0 === zz || zz()
+       return function(Eq) {
+         return function(qq, Eq) {
+           return Number(qq.toFixed(Eq))
+         }(Eq, qq)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L215-L241` → after: `L487-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L487-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L487-L493) · [Before (L215-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L215-L241)

```diff
-       return {
-         current: () => {
-           const bz = (0, iz.j)();
-           return null === bz ? uz : zz(bz)()
-         },
-         watch: uz => Mz((Ez => {
-           const nz = zz(Ez);
-           let iz = nz();
-           return uz(iz), bz((() => {
-             const zz = nz();
-             zz !== iz && (iz = zz, uz(zz))
-           }))
-         }))
-       }
-     }
-   },
- ... (11 more removed lines; see GitHub link above)
+       qq = Array.isArray(qq) ? qq : [qq];
+       for (const Yq of qq)(xq[Yq] || (xq[Yq] = []))[Eq] = gq;
+       return qq = qq[0],
+         function(Yq) {
+           let lq;
+           return void 0 !== Yq ? (gq && (Yq = gq(Yq)), lq = this[qq](), lq.color[Eq] = Yq, lq) : (lq = this[qq]().color[Eq], gq && (lq = gq(lq)), lq)
+         }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L245-L250` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L497-L498) · [Before (L245-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L245-L250)

```diff
-       return {
-         current: () => lz().states[zz].current(),
-         watch: uz => (0, nz.k)((bz => {
-           const Ez = bz.itemBridgeSources.states[zz];
-           return uz(Ez.current()), Ez.watch(uz)
-         }))
+       return function(Eq) {
+         return Math.max(0, Math.min(qq, Eq))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L254-L257` → after: `L502-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L502-L504) · [Before (L254-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L254-L257)

```diff
-     function tz(zz) {
-       return {
-         watch: uz => (0, nz.k)((bz => bz.itemBridgeSources.events[zz].watch(uz)))
-       }
+     function Wq(qq, Eq) {
+       for (let gq = 0; gq < Eq; gq++) "number" !== typeof qq[gq] && (qq[gq] = 0);
+       return qq
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L260-L289` → after: `L513-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L513-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L513-L571) · [Before (L260-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L260-L289)

```diff
-       states: {
-         inventory: Mz("inventory"),
-         hotbar: Mz("hotbar"),
-         crafting: Mz("crafting"),
-         heldItemAim: Mz("heldItemAim")
-       },
-       events: {
-         hotbarSlotRequested: tz("hotbarSlotRequested"),
-         hotbarScrolled: tz("hotbarScrolled"),
-         numberKeyPressed: tz("numberKeyPressed"),
-         inventoryDropRequested: tz("inventoryDropRequested"),
-         chestToggled: tz("chestToggled"),
-         chestRefreshed: tz("chestRefreshed"),
-         inventorySynced: tz("inventorySynced"),
-         enchantingTableOpened: tz("enchantingTableOpened")
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

#### 15. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L292-L302` → after: `L589-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L589-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L589-L631) · [Before (L292-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L292-L302)

```diff
-   },
-   39823: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => Mz
-     });
-     var Ez = bz(38974);
- 
-     function nz(zz) {
-       return {
-         current: () => zz,
-         watch: () => () => {}
+     Oq.rgb.hsl = function(qq) {
+       const Eq = qq[0] / 255,
+         gq = qq[1] / 255,
+         Yq = qq[2] / 255,
+         lq = Math.min(Eq, gq, Yq),
+         Oq = Math.max(Eq, gq, Yq),
+         mq = Oq - lq;
+       let xq, Aq;
+       Oq === lq ? xq = 0 : Eq === Oq ? xq = (gq - Yq) / mq : gq === Oq ? xq = 2 + (Yq - Eq) / mq : Yq === Oq && (xq = 4 + (Eq - gq) / mq), xq = Math.min(60 * xq, 360), xq < 0 && (xq += 360);
+       const cq = (lq + Oq) / 2;
+       return Aq = Oq === lq ? 0 : cq <= .5 ? mq / (Oq + lq) : mq / (2 - Oq - lq), [xq, 100 * Aq, 100 * cq]
+     }, Oq.rgb.hsv = function(qq) {
+       let Eq, gq, Yq, lq, Oq;
+       const mq = qq[0] / 255,
+         xq = qq[1] / 255,
+         Aq = qq[2] / 255,
+ ... (27 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L304-L536` → after: `L633-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L633-L690) · [Before (L304-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L304-L536)

```diff
-     }
- 
-     function iz() {}
-     const lz = Object.freeze([0, 0, 0]),
-       Mz = {
-         states: {
-           health: nz({
-             health: null,
-             maxHealth: null,
-             shield: null,
-             maxShield: null
-           }),
-           inventory: nz({
-             player: [],
-             chestOrCreative: [],
-             chest: null,
- ... (217 more removed lines; see GitHub link above)
+       var mq, xq;
+       return gq
+     }, Oq.keyword.rgb = function(qq) {
+       return Yq[qq]
+     }, Oq.rgb.xyz = function(qq) {
+       let Eq = qq[0] / 255,
+         gq = qq[1] / 255,
+         Yq = qq[2] / 255;
+       Eq = Eq > .04045 ? ((Eq + .055) / 1.055) ** 2.4 : Eq / 12.92, gq = gq > .04045 ? ((gq + .055) / 1.055) ** 2.4 : gq / 12.92, Yq = Yq > .04045 ? ((Yq + .055) / 1.055) ** 2.4 : Yq / 12.92;
+       return [100 * (.4124 * Eq + .3576 * gq + .1805 * Yq), 100 * (.2126 * Eq + .7152 * gq + .0722 * Yq), 100 * (.0193 * Eq + .1192 * gq + .9505 * Yq)]
+     }, Oq.rgb.lab = function(qq) {
+       const Eq = Oq.rgb.xyz(qq);
+       let gq = Eq[0],
+         Yq = Eq[1],
+         lq = Eq[2];
+       gq /= 95.047, Yq /= 100, lq /= 108.883, gq = gq > .008856 ? gq ** (1 / 3) : 7.787 * gq + 16 / 116, Yq = Yq > .008856 ? Yq ** (1 / 3) : 7.787 * Yq + 16 / 116, lq = lq > .008856 ? lq ** (1 / 3) : 7.787 * lq + 16 / 116;
+ ... (42 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L538-L577` → after: `L692-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L692-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L692-L900) · [Before (L538-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L538-L577)

```diff
-   },
-   39742: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => xz,
-       c: () => vz,
-       d: () => Jz,
-       e: () => Nz,
-       g: () => rz
-     });
-     var Ez = bz(38584),
-       nz = bz(1212),
-       iz = bz(1892),
-       lz = bz(1909),
-       Mz = bz(3043),
-       tz = bz(36237),
-       Hz = bz(1296),
- ... (24 more removed lines; see GitHub link above)
+     }, Oq.hsv.hsl = function(qq) {
+       const Eq = qq[0],
+         gq = qq[1] / 100,
+         Yq = qq[2] / 100,
+         lq = Math.max(Yq, .01);
+       let Oq, mq;
+       mq = (2 - gq) * Yq;
+       const xq = (2 - gq) * lq;
+       return Oq = gq * lq, Oq /= xq <= 1 ? xq : 2 - xq, Oq = Oq || 0, mq /= 2, [Eq, 100 * Oq, 100 * mq]
+     }, Oq.hwb.rgb = function(qq) {
+       const Eq = qq[0] / 360;
+       let gq = qq[1] / 100,
+         Yq = qq[2] / 100;
+       const lq = gq + Yq;
+       let Oq;
+       lq > 1 && (gq /= lq, Yq /= lq);
+ ... (193 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L581-L617` → after: `L943-L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L943-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L943-L948) · [Before (L581-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L581-L617)

```diff
-       var uz;
-       const bz = null === (uz = (0, Oz.j)()) || void 0 === uz ? void 0 : uz.tables;
-       if (void 0 === bz || !Xz(zz)) return;
-       const Ez = {
-           displayName: bz.getDisplayName(zz)
-         },
-         nz = bz.getItemStat(zz, "description");
-       void 0 !== nz && null !== nz && (Ez.description = nz);
-       const {
-         rootName: iz
-       } = bz.getMetaInfo(zz);
-       iz !== zz && (Ez.rootName = iz);
-       const lz = bz.getItemStat(zz, "armourReduction");
-       return void 0 !== lz && null !== lz && (Ez.armourReduction = lz), Ez
-     }(0, Oz.s)((zz => {
-       Kz = zz
- ... (21 more removed lines; see GitHub link above)
+       const Eq = function() {
+           const qq = {},
+             Eq = Object.keys(Yq);
+           for (let gq = Eq.length, Yq = 0; Yq < gq; Yq++) qq[Eq[Yq]] = {
+             distance: -1,
+             parent: null
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L619-L624` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L950) · [Before (L619-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L619-L624)

```diff
-           return {
-             current: () => bz(zz.current()),
-             watch: uz => zz.watch((zz => {
-               uz(bz(zz))
-             }))
-           }
+           return qq
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L626-L715` → after: `L952-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L952-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L952-L958) · [Before (L626-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L626-L715)

```diff
-         crafting: Rz.b.states.crafting,
-         stationItems: {
-           current() {
-             var zz;
-             return (null === (zz = oz) || void 0 === zz ? void 0 : zz.namesVersion) !== (0, Mz.k)() && (oz = {
-               namesVersion: (0, Mz.k)(),
-               items: {
-                 enchantable: wz((zz => {
-                   const uz = (0, Mz.e)(zz);
-                   return void 0 !== uz && null !== Kz && Kz.enchantmentPerksOf(uz).length > 0 || void 0
-                 })),
-                 salvageable: wz((zz => !(!Xz(zz) || null === (0, tz.c)(zz)) || void 0))
-               }
-             }), oz.items
-           },
-           watch: () => () => {}
- ... (74 more removed lines; see GitHub link above)
+         gq = [qq];
+       for (Eq[qq].distance = 0; gq.length;) {
+         const qq = gq.pop(),
+           lq = Object.keys(Yq[qq]);
+         for (let Yq = lq.length, Oq = 0; Oq < Yq; Oq++) {
+           const Yq = lq[Oq],
+             mq = Eq[Yq]; - 1 === mq.distance && (mq.distance = Eq[qq].distance + 1, mq.parent = qq, gq.unshift(Yq))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L736-L749` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L961) · [Before (L736-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L736-L749)

```diff
-     }
- 
-     function nz(zz) {
-       return zz instanceof RangeError && /call stack/i.test(zz.message) || zz instanceof Error && "InternalError" === zz.name && /recursion/i.test(zz.message)
-     }
- 
-     function iz(zz) {
-       return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(zz))
-     }
-     const lz = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
- 
-     function Mz(zz) {
-       var uz;
-       return zz instanceof WebAssembly.RuntimeError || zz instanceof Ez || nz(zz) && lz.test(null !== (uz = zz.stack) && void 0 !== uz ? uz : "")
+       return Eq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L753-L785` → after: `L965-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L965-L966) · [Before (L753-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L753-L785)

```diff
-       if (Mz(zz)) throw zz;
-       console.error(uz, zz)
-     }
- 
-     function Hz(zz, uz, bz, nz, iz) {
-       if (uz % nz !== 0 || uz + bz > zz.byteLength) throw new Ez(`${iz}: ${bz} bytes at ${uz}, ${nz}-aligned, outside ${zz.byteLength} bytes of memory`)
-     }
- 
-     function Oz(zz, uz, bz, Ez, nz) {
-       return 0 === bz ? null : (Hz(uz, bz, Ez * zz.BYTES_PER_ELEMENT, zz.BYTES_PER_ELEMENT, nz), new zz(uz, bz, Ez))
-     }
- 
-     function pz(zz, uz, bz, Ez, nz) {
-       return 0 === uz ? null : (Hz(zz, uz, bz, Ez, nz), new DataView(zz, uz, bz))
-     }
-   },
- ... (17 more removed lines; see GitHub link above)
+       return function(gq) {
+         return Eq(qq(gq))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L795-L799` → after: `L971-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L971-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L971-L975) · [Before (L795-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L795-L799)

```diff
-       try {
-         zz(uz)
-       } catch (bz) {
-         console.error("[bloxd-wasm-client] the game chunk's listener failed", bz)
-       }
+       const gq = [Eq[qq].parent, qq];
+       let lq = Yq[Eq[qq].parent][qq],
+         mq = Eq[qq].parent;
+       for (; Eq[mq].parent;) gq.unshift(Eq[mq].parent), lq = Oq(Yq[Eq[mq].parent][mq], lq), mq = Eq[mq].parent;
+       return lq.conversion = gq, lq
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L801-L802` → after: `L977-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L977-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L977-L984) · [Before (L801-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L801-L802)

```diff
- 
-     function Oz() {
+     qq.exports = function(qq) {
+       const Eq = lq(qq),
+         gq = {},
+         Yq = Object.keys(Eq);
+       for (let lq = Yq.length, Oq = 0; Oq < lq; Oq++) {
+         const qq = Yq[Oq];
+         null !== Eq[qq].parent && (gq[qq] = mq(qq, Eq))
+       }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L805-L807` → after: `L987-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L987-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L987-L1137) · [Before (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L805-L807)

```diff
- 
-     function pz(zz) {
-       Mz.push(zz), null !== tz && Hz(zz, tz)
+   },
+   36723: qq => {
+     qq.exports = {
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

#### 26. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L809-L813` → after: `L1139-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L1139-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L1139-L1148) · [Before (L809-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L809-L813)

```diff
- 
-     function dz(zz) {
-       return nz ??= Promise.all([bz.e(69), bz.e(94), bz.e(214), bz.e(74), bz.e(215), bz.e(189), bz.e(93), bz.e(259), bz.e(187), bz.e(262), bz.e(199), bz.e(186), bz.e(200), bz.e(136), bz.e(85), bz.e(114), bz.e(237), bz.e(53)]).then((() => bz(41801))).then((uz => {
-         uz.loadAudio(zz), tz = uz;
-         for (const zz of Mz) Hz(zz, uz);
+   },
+   36704: (qq, Eq, gq) => {
+     var Yq = gq(36706),
+       lq = Array.prototype.concat,
+       Oq = Array.prototype.slice,
+       mq = qq.exports = function(qq) {
+         for (var Eq = [], gq = 0, mq = qq.length; gq < mq; gq++) {
+           var xq = qq[gq];
+           Yq(xq) ? Eq = lq.call(Eq, Oq.call(xq)) : Eq.push(xq)
+         }
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L815-L831` → after: `L1150-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L1150-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L1150-L1153) · [Before (L815-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L815-L831)

```diff
-       })).catch((zz => {
-         throw nz = null, zz
-       })), nz
-     }
-     async function Fz(zz, uz) {
-       try {
-         const bz = await dz(zz);
-         await bz.loadClientGame(uz)
-       } catch (bz) {
-         throw new Ez(bz)
-       }
-     }
- 
-     function Zz(zz, uz) {
-       iz = {
-         running: zz,
- ... (1 more removed lines; see GitHub link above)
+       };
+     mq.wrap = function(qq) {
+       return function() {
+         return qq(mq(arguments))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L834-L851` → after: `L1156-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L1156-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/216.js#L1156-L1159) · [Before (L834-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/216.js#L834-L851)

```diff
- 
-     function Rz() {
-       return lz
-     }
-     async function Kz(zz) {
-       const uz = iz;
-       if ((null === uz || void 0 === uz ? void 0 : uz.running) !== zz) throw new Error("the core's session has ended");
-       const bz = await dz(uz.shell.audio).catch((zz => {
-         throw new Ez(zz)
-       }));
-       if (null !== lz) return lz;
-       if (iz !== uz || zz.isStopped) throw new Error("the core stopped while the game code loaded");
-       if (lz = bz.startGameHost(zz, uz.shell), null === lz) throw new Error("the core's shared tables didn't read, so the game can't start");
-       return lz
-     }
- 
- ... (2 more removed lines; see GitHub link above)
+   },
+   36706: qq => {
+     qq.exports = function(qq) {
+       return !(!qq || "string" === typeof qq) && (qq instanceof Array || Array.isArray(qq) || qq.length >= 0 && (qq.splice instanceof Function || Object.getOwnPropertyDescriptor(qq, qq.length - 1) && "String" !== qq.constructor.name))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/217.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/217.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/217.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/217.js#L4)

```diff
-   36361: (zz, uz, bz) => {
+   36796: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L7` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/217.js#L8-L10) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/217.js#L7)

```diff
-       g: () => sz
+       g: () => BE,
+       k: () => cE,
+       o: () => uE
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L9-L35` → after: `L12-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L12-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/217.js#L12-L128) · [Before (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/217.js#L9-L35)

```diff
-     var Ez = bz(4055),
-       nz = bz(1417),
-       iz = bz(56),
-       lz = bz(6204),
-       Mz = bz(4041),
-       tz = bz(1269),
-       Hz = bz(1871),
-       Oz = bz(1846),
-       pz = bz(1419),
-       dz = bz(1181),
-       Fz = bz(36363),
-       Zz = bz(1038),
-       Rz = bz.n(Zz),
-       Kz = bz(1283),
-       wz = bz(1047),
-       Xz = bz(1266),
- ... (11 more removed lines; see GitHub link above)
+     const Yq = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
+       lq = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
+       Oq = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
+       mq = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
+       xq = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
+       Aq = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
+       cq = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
+       uq = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
+       Bq = JSON.parse('{"src":["/sounds/generatedSprites/randomBeep.7b90315654.ogg","/sounds/generatedSprites/randomBeep.0e88f6aa33.m4a","/sounds/generatedSprites/randomBeep.47ff5e799a.mp3","/sounds/generatedSprites/randomBeep.444034b8b7.ac3"],"sprite":{"beep":[100,2455.510204081 … [truncated]
+       Wq = JSON.parse('{"src":["/sounds/generatedSprites/randomCannon.f9d64818ea.ogg","/sounds/generatedSprites/randomCannon.52f7576d74.m4a","/sounds/generatedSprites/randomCannon.bde162aee8.mp3","/sounds/generatedSprites/randomCannon.4877805969.ac3"],"sprite":{"cannonFire1":[100 … [truncated]
+       Nq = JSON.parse('{"src":["/sounds/generatedSprites/randomCash.8ff82dcd92.ogg","/sounds/generatedSprites/randomCash.a86426509f.m4a","/sounds/generatedSprites/randomCash.48929d75f1.mp3","/sounds/generatedSprites/randomCash.f687b943c4.ac3"],"sprite":{"cashRegister":[100,3819.6 … [truncated]
+       aq = JSON.parse('{"src":["/sounds/generatedSprites/randomExp.fa5a4c9798.ogg","/sounds/generatedSprites/randomExp.a7e2faf290.m4a","/sounds/generatedSprites/randomExp.b4baff1a37.mp3","/sounds/generatedSprites/randomExp.4974715bbd.ac3"],"sprite":{"exp_collect":[100,1009.206349 … [truncated]
+       Vq = JSON.parse('{"src":["/sounds/generatedSprites/randomFallsmall.e0ec9ce0a7.ogg","/sounds/generatedSprites/randomFallsmall.a1f24b70c2.m4a","/sounds/generatedSprites/randomFallsmall.bcbd5fef60.mp3","/sounds/generatedSprites/randomFallsmall.a3b7d06594.ac3"],"sprite":{"falls … [truncated]
+       dq = JSON.parse('{"src":["/sounds/generatedSprites/randomItems.380c31a312.ogg","/sounds/generatedSprites/randomItems.6ae69434b9.m4a","/sounds/generatedSprites/randomItems.85b5c2f034.mp3","/sounds/generatedSprites/randomItems.cdadb8aa52.ac3"],"sprite":{"bow":[100,500],"bucke … [truncated]
+       jq = JSON.parse('{"src":["/sounds/generatedSprites/randomFire.06f418fc54.ogg","/sounds/generatedSprites/randomFire.7c5564dd14.m4a","/sounds/generatedSprites/randomFire.f61e3ab1f3.mp3","/sounds/generatedSprites/randomFire.5869bbefc8.ac3"],"sprite":{"fireBurn":[100,2827.39229 … [truncated]
+       Hq = JSON.parse('{"src":["/sounds/generatedSprites/randomFirecracker.ddc99cbc73.ogg","/sounds/generatedSprites/randomFirecracker.128308b436.m4a","/sounds/generatedSprites/randomFirecracker.d5635f7e7d.mp3","/sounds/generatedSprites/randomFirecracker.e5afa15901.ac3"],"sprite" … [truncated]
+ ... (101 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L38-L39` → after: `L137-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L137-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/217.js#L137-L143) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/217.js#L38-L39)

```diff
-       function qz() {
-         return !xz && (mz(), !0)
+     function AE(qq) {
+       if (xE[qq]) return WE(xE[qq]);
+       {
+         const Eq = [];
+         for (const gq in lE)
+           for (const Yq in lE[gq].sprite) Yq.startsWith(qq) && Eq.push(Yq);
+         return xE[qq] = Eq, WE(Eq)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L141-L196` → after: `L146-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L146-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/217.js#L146-L150) · [Before (L141-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/217.js#L141-L196)

```diff
-     const oz = (0, iz.memo)((function(zz) {
-       let {
-         children: uz,
-         restedEffect: bz,
-         qM: Ez,
-         setChosenRestedEffect: nz
-       } = zz;
-       return bz === Ez ? (0, fz.jsx)(pz.q, {
-         onClick: zz => {
-           zz.stopPropagation()
-         },
-         children: uz
-       }) : (0, fz.jsx)(pz.j, {
-         onClick: zz => {
-           nz(bz), zz.stopPropagation()
-         },
- ... (40 more removed lines; see GitHub link above)
+ 
+     function cE(qq) {
+       const Eq = mE[qq];
+       if (void 0 === Eq) throw new Error(`Invalid sound name ${qq} (not in any sprite sheet)`);
+       return Eq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L198-L218` → after: `L152-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/217.js#L152-L155) · [Before (L198-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/217.js#L198-L218)

```diff
-     class Jz {
-       constructor(zz, uz) {
-         this.press = zz, this.release = uz, this.downAtMs = null, this.token = null, this.latched = !1
-       }
-       update(zz, uz, bz, Ez) {
-         if (zz && null === this.downAtMs) return this.downAtMs = bz, this.latched = Ez, void(this.token = this.press());
-         null !== this.downAtMs && (this.latched ? zz && this.end() : !uz && bz - this.downAtMs >= 40 && this.end())
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
+     function uE(qq, Eq) {
+       if (!(qq in lE)) throw new Error("Invalid spriteTrack name");
+       return Eq in lE[qq].sprite
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L220-L549` → after: `L157-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L157-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/217.js#L157-L160) · [Before (L220-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/217.js#L220-L549)

```diff
-     const Az = {
-         kind: "specialAction",
-         action: "SpecialAction2"
-       },
-       Tz = zz => {
-         let uz = null;
-         const bz = new vz.d,
-           Ez = () => {
-             uz && (((zz, uz, bz) => {
-               switch (bz.kind) {
-                 case "reload":
-                   return void uz.specialActionUp("SpecialAction1");
-                 case "specialAction":
-                   return void uz.specialActionUp(bz.action);
-                 case "customButton":
-                   return void sz.gameBridge.send("pressCustomButton", {
- ... (314 more removed lines; see GitHub link above)
+ 
+     function BE(qq) {
+       if (!(qq in lE)) throw new Error("Invalid spritesheet name");
+       return lE[qq]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L551-L678` → after: `L162-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L162-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/217.js#L162-L164) · [Before (L551-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/217.js#L551-L678)

```diff
-     const iz = (zz, uz, bz, nz, iz) => {
-         let lz = 1;
-         return "boost" === bz.lookCurve ? lz = zz.update(uz, bz, iz) : zz.reset(),
-           function(zz, uz) {
-             let {
-               yawBoost: bz = 1,
-               aiming: nz = !1
-             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-             const iz = (0, Ez.i)((0, Ez.m)(zz, uz.lookDeadzone), uz.lookCurve),
-               lz = 220 * Math.PI / 180,
-               Mz = nz ? uz.aimLookSensitivity / 100 : 1,
-               tz = uz.lookSensitivityX / 100 * Mz,
-               Hz = uz.lookSensitivityY / 100 * Mz;
-             return {
-               yawRadPerSec: iz.x * lz * tz * bz * (uz.invertLookX ? -1 : 1),
-               pitchRadPerSec: iz.y * lz * .7 * Hz * (uz.invertLookY ? -1 : 1)
- ... (112 more removed lines; see GitHub link above)
+ 
+     function WE(qq) {
+       return qq[Math.floor(Math.random() * qq.length)]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/218.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/218.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82)

#### 1. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L4)

```diff
-   36402: (zz, uz, bz) => {
+   39535: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L7)

```diff
-       ungzip: () => FE
+       d: () => lq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L9` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L9-L12) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L9)

```diff
- 
+     const Yq = "The world isn't loaded, so no blocks can be seen.",
+       lq = "The world isn't loaded, so nothing in it can be seen."
+   },
+   39056: (qq, Eq, gq) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L11-L12` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L14) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L11-L12)

```diff
-       let uz = zz.length;
-       for (; --uz >= 0;) zz[uz] = 0
+       return !(!qq.lobbyLeaderboardInfo && !qq.lobbyManage)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L14-L32` → after: `L16-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L16-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L16-L25) · [Before (L14-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L14-L32)

```diff
-     const nz = 256,
-       iz = 286,
-       lz = 30,
-       Mz = 15,
-       tz = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
-       Hz = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
-       Oz = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
-       pz = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
-       dz = new Array(576);
-     Ez(dz);
-     const Fz = new Array(60);
-     Ez(Fz);
-     const Zz = new Array(512);
-     Ez(Zz);
-     const Rz = new Array(256);
-     Ez(Rz);
- ... (3 more removed lines; see GitHub link above)
+     gq.d(Eq, {
+       d: () => Yq
+     })
+   },
+   36851: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Oq,
+       c: () => lq
+     });
+     let Yq = () => null;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L34-L35` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L27-L28) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L34-L35)

```diff
-     function Xz(zz, uz, bz, Ez, nz) {
-       this.static_tree = zz, this.extra_bits = uz, this.extra_base = bz, this.elems = Ez, this.max_length = nz, this.has_stree = zz && zz.length
+     function lq(qq) {
+       Yq = qq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L40` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L32) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L40)

```diff
-       this.dyn_tree = zz, this.max_code = 0, this.stat_desc = uz
+       return Yq(qq, Eq)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L42-L208` → after: `L34-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L34-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L34-L78) · [Before (L42-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L42-L208)

```diff
-     Ez(wz);
-     const Nz = zz => zz < 256 ? Zz[zz] : Zz[256 + (zz >>> 7)],
-       vz = (zz, uz) => {
-         zz.pending_buf[zz.pending++] = 255 & uz, zz.pending_buf[zz.pending++] = uz >>> 8 & 255
-       },
-       xz = (zz, uz, bz) => {
-         zz.bi_valid > 16 - bz ? (zz.bi_buf |= uz << zz.bi_valid & 65535, vz(zz, zz.bi_buf), zz.bi_buf = uz >> 16 - zz.bi_valid, zz.bi_valid += bz - 16) : (zz.bi_buf |= uz << zz.bi_valid & 65535, zz.bi_valid += bz)
-       },
-       Jz = (zz, uz, bz) => {
-         xz(zz, bz[2 * uz], bz[2 * uz + 1])
-       },
-       Az = (zz, uz) => {
-         let bz = 0;
-         do {
-           bz |= 1 & zz, zz >>>= 1, bz <<= 1
-         } while (--uz > 0);
- ... (151 more removed lines; see GitHub link above)
+   },
+   40331: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => Vq,
+       e: () => oq,
+       i: () => Hq,
+       j: () => dq
+     });
+     var Yq = gq(31),
+       lq = gq(40334),
+       Oq = gq(40325),
+       mq = gq(40343),
+       xq = gq(40329),
+       Aq = gq(40350),
+       cq = gq(40366);
+ 
+ ... (29 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L222-L229` → after: `L81-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L81-L84) · [Before (L222-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L222-L229)

```diff
-       return nz | iz << 16
-     };
-     const Dz = new Uint32Array((() => {
-       let zz, uz = [];
-       for (var bz = 0; bz < 256; bz++) {
-         zz = bz;
-         for (var Ez = 0; Ez < 8; Ez++) zz = 1 & zz ? 3988292384 ^ zz >>> 1 : zz >>> 1;
-         uz[bz] = zz
+       return {
+         ...qq,
+         type: Eq,
+         ironChest: gq
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L231-L250` → after: `L86-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L86-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L86-L108) · [Before (L231-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L231-L250)

```diff
-       return uz
-     })());
-     var Qz = (zz, uz, bz, Ez) => {
-         const nz = Dz,
-           iz = Ez + bz;
-         zz ^= -1;
-         for (let lz = Ez; lz < iz; lz++) zz = zz >>> 8 ^ nz[255 & (zz ^ uz[lz])];
-         return ~zz
-       },
-       Wz = {
-         2: "need dictionary",
-         1: "stream end",
-         0: "",
-         "-1": "file error",
-         "-2": "stream error",
-         "-3": "data error",
- ... (4 more removed lines; see GitHub link above)
+     }
+ 
+     function jq(qq) {
+       const Eq = uq(qq),
+         gq = null === Eq || void 0 === Eq ? void 0 : Eq.ownerDbId,
+         Yq = function(qq) {
+           var Eq;
+           let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uq(qq);
+           const Yq = Bq(qq),
+             lq = Wq.get(Yq);
+           return lq ? lq.lastOpened < (null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.passkeyLastUpdated) && void 0 !== Eq ? Eq : 0) ? (Wq.delete(Yq), null) : [...lq.Nu] : null
+         }(qq, Eq);
+       return void 0 === gq ? {
+         cachedPasskey: Yq
+       } : {
+         ownerDbId: gq,
+ ... (7 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L252-L390` → after: `L110-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L110-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L110-L144) · [Before (L252-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L252-L390)

```diff
-         Z_NO_FLUSH: 0,
-         Z_PARTIAL_FLUSH: 1,
-         Z_SYNC_FLUSH: 2,
-         Z_FULL_FLUSH: 3,
-         Z_FINISH: 4,
-         Z_BLOCK: 5,
-         Z_TREES: 6,
-         Z_OK: 0,
-         Z_STREAM_END: 1,
-         Z_NEED_DICT: 2,
-         Z_ERRNO: -1,
-         Z_STREAM_ERROR: -2,
-         Z_DATA_ERROR: -3,
-         Z_MEM_ERROR: -4,
-         Z_BUF_ERROR: -5,
-         Z_NO_COMPRESSION: 0,
- ... (123 more removed lines; see GitHub link above)
+         key: gq,
+         type: Eq.Rq
+       }, null !== Eq.Fq && Wq.set(gq, {
+         Nu: [...Eq.Fq],
+         lastOpened: Date.now()
+       })
+     })), (0, cq.d)((() => {
+       Wq.clear(), Nq = null, aq++
+     })), (0, cq.h)((() => {
+       null !== Nq && (Nq = null, aq++, Yq.i.TV("chestToggleFromServer", !1, !0))
+     }));
+     const Hq = {
+         boardEditRequested: {
+           watch: qq => (0, Yq.k)("EditBoard", (Eq => {
+             let {
+               pos: gq
+ ... (19 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L394-L409` → after: `L147-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L147-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L147-L188) · [Before (L394-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L394-L409)

```diff
-       mu = (zz, uz) => {
-         let bz, Ez, nz;
-         for (;;) {
-           if (zz.lookahead < Xu) {
-             if (au(zz), zz.lookahead < Xu && uz === kz) return 1;
-             if (0 === zz.lookahead) break
-           }
-           if (bz = 0, zz.lookahead >= 3 && (zz.ins_h = xu(zz, zz.ins_h, zz.window[zz.strstart + 3 - 1]), bz = zz.prev[zz.strstart & zz.w_mask] = zz.head[zz.ins_h], zz.head[zz.ins_h] = zz.strstart), zz.prev_length = zz.match_length, zz.prev_match = zz.match_start, zz.match_length  … [truncated]
-             nz = zz.strstart + zz.lookahead - 3, Ez = Cz(zz, zz.strstart - 1 - zz.prev_match, zz.prev_length - 3), zz.lookahead -= zz.prev_length - 1, zz.prev_length -= 2;
-             do {
-               ++zz.strstart <= nz && (zz.ins_h = xu(zz, zz.ins_h, zz.window[zz.strstart + 3 - 1]), bz = zz.prev[zz.strstart & zz.w_mask] = zz.head[zz.ins_h], zz.head[zz.ins_h] = zz.strstart)
-             } while (0 !== --zz.prev_length);
-             if (zz.match_available = 0, zz.match_length = 2, zz.strstart++, Ez && (Au(zz, !1), 0 === zz.strm.avail_out)) return 1
-           } else if (zz.match_available) {
-             if (Ez = Cz(zz, 0, zz.window[zz.strstart - 1]), Ez && Au(zz, !1), zz.strstart++, zz.lookahead--, 0 === zz.strm.avail_out) return 1
-           } else zz.match_available = 1, zz.strstart++, zz.lookahead--
+       oq = {
+         writeOnBoard(qq) {
+           var Eq;
+           let {
+             pos: gq,
+             text: Yq,
+             textSize: lq
+           } = qq;
+           null === (Eq = (0, Oq.e)()) || void 0 === Eq || Eq.send(xq.b.UpdateBoard, (0, xq.Z)({
+             Au: gq,
+             cu: Yq,
+             uu: lq
+           }))
+         },
+         writeBook(qq) {
+           var Eq;
+ ... (26 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L411-L412` → after: `L190-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L190-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L190-L200) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L411-L412)

```diff
-         return zz.match_available && (Ez = Cz(zz, 0, zz.window[zz.strstart - 1]), zz.match_available = 0), zz.insert = zz.strstart < 2 ? zz.strstart : 2, uz === bu ? (Au(zz, !0), 0 === zz.strm.avail_out ? 3 : 4) : zz.last_lit && (Au(zz, !1), 0 === zz.strm.avail_out) ? 1 : 2
-       };
+       }
+   },
+   40377: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Aq,
+       f: () => mq,
+       h: () => xq
+     });
+     var Yq = gq(40318),
+       lq = gq(4608),
+       Oq = gq(40325);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L414-L415` → after: `L202-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L202-L205) · [Before (L414-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L414-L415)

```diff
-     function qu(zz, uz, bz, Ez, nz) {
-       this.good_length = zz, this.max_lazy = uz, this.nice_length = bz, this.max_chain = Ez, this.func = nz
+     function mq() {
+       var qq;
+       const Eq = null === (qq = (0, Oq.e)()) || void 0 === qq ? void 0 : qq.api.localId;
+       return void 0 === Eq || Eq === Yq.gd ? null : String(Eq)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L417-L427` → after: `L207-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L207-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L207-L218) · [Before (L417-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L417-L427)

```diff
-     const hu = [new qu(0, 0, 0, 0, ((zz, uz) => {
-       let bz = 65535;
-       for (bz > zz.pending_buf_size - 5 && (bz = zz.pending_buf_size - 5);;) {
-         if (zz.lookahead <= 1) {
-           if (au(zz), 0 === zz.lookahead && uz === kz) return 1;
-           if (0 === zz.lookahead) break
-         }
-         zz.strstart += zz.lookahead, zz.lookahead = 0;
-         const Ez = zz.block_start + bz;
-         if ((0 === zz.strstart || zz.strstart >= Ez) && (zz.lookahead = zz.strstart - Ez, zz.strstart = Ez, Au(zz, !1), 0 === zz.strm.avail_out)) return 1;
-         if (zz.strstart - zz.block_start >= zz.w_size - Xu && (Au(zz, !1), 0 === zz.strm.avail_out)) return 1
+ 
+     function xq(qq) {
+       const Eq = (0, Oq.e)();
+       if (null !== Eq) return qq(Eq);
+       let gq = null;
+       const Yq = (0, lq.w)((() => {
+         const Eq = (0, Oq.e)();
+         null !== Eq && null === gq && (Yq(), gq = qq(Eq))
+       }));
+       return () => {
+         var qq;
+         Yq(), null === (qq = gq) || void 0 === qq || qq()
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L429-L430` → after: `L220-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L220-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L220-L245) · [Before (L429-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L429-L430)

```diff
-       return zz.insert = 0, uz === bu ? (Au(zz, !0), 0 === zz.strm.avail_out ? 3 : 4) : (zz.strstart > zz.block_start && (Au(zz, !1), zz.strm.avail_out), 1)
-     })), new qu(4, 4, 8, 4, Vu), new qu(4, 5, 16, 8, Vu), new qu(4, 6, 32, 32, Vu), new qu(4, 4, 16, 16, mu), new qu(8, 16, 32, 32, mu), new qu(8, 16, 128, 128, mu), new qu(8, 32, 128, 256, mu), new qu(32, 128, 258, 1024, mu), new qu(32, 258, 258, 4096, mu)];
+     }
+ 
+     function Aq(qq, Eq, gq) {
+       return {
+         current: () => {
+           const gq = (0, Oq.e)();
+           return null === gq ? Eq : qq(gq)()
+         },
+         watch: Eq => xq((Yq => {
+           const lq = qq(Yq);
+           let Oq = lq();
+           return Eq(Oq), gq((() => {
+             const qq = lq();
+             qq !== Oq && (Oq = qq, Eq(qq))
+           }))
+         }))
+ ... (10 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L433` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L248-L249) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L433)

```diff
-       this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Ku, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, thi … [truncated]
+       var qq, Eq;
+       return null !== (qq = null === (Eq = (0, Yq.e)()) || void 0 === Eq ? void 0 : Eq.itemBridgeSources) && void 0 !== qq ? qq : Oq.b
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L435-L596` → after: `L251-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L251-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L251-L259) · [Before (L435-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L435-L596)

```diff
-     const cu = zz => {
-         if (!zz || !zz.state) return ou(zz, lu);
-         zz.total_in = zz.total_out = 0, zz.data_type = Ru;
-         const uz = zz.state;
-         return uz.pending = 0, uz.pending_out = 0, uz.wrap < 0 && (uz.wrap = -uz.wrap), uz.status = uz.wrap ? 42 : su, zz.adler = 2 === uz.wrap ? 0 : 1, uz.last_flush = kz, jz(uz), nu
-       },
-       gu = zz => {
-         const uz = cu(zz);
-         var bz;
-         return uz === nu && ((bz = zz.state).window_size = 2 * bz.w_size, vu(bz.head), bz.max_lazy_match = hu[bz.level].max_lazy, bz.good_match = hu[bz.level].good_length, bz.nice_match = hu[bz.level].nice_length, bz.max_chain_length = hu[bz.level].max_chain, bz.strstart = 0, bz. … [truncated]
-       },
-       Su = (zz, uz, bz, Ez, nz, iz) => {
-         if (!zz) return lu;
-         let lz = 1;
-         if (uz === Hu && (uz = 6), Ez < 0 ? (lz = 0, Ez = -Ez) : Ez > 15 && (lz = 2, Ez -= 16), nz < 1 || nz > 9 || bz !== Ku || Ez < 8 || Ez > 15 || uz < 0 || uz > 9 || iz < 0 || iz > Fu) return ou(zz, lu);
-         8 === Ez && (Ez = 9);
- ... (146 more removed lines; see GitHub link above)
+ 
+     function xq(qq) {
+       return {
+         current: () => mq().states[qq].current(),
+         watch: Eq => (0, lq.h)((gq => {
+           const Yq = gq.itemBridgeSources.states[qq];
+           return Eq(Yq.current()), Yq.watch(Eq)
+         }))
+       }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L657-L672` → after: `L263-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L263-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L263-L297) · [Before (L657-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L657-L672)

```diff
-       this.options = Qu({
-         level: lb,
-         method: tb,
-         IZ: 16384,
-         windowBits: 15,
-         memLevel: 8,
-         strategy: Mb
-       }, zz || {});
-       let uz = this.options;
-       uz.raw && uz.windowBits > 0 ? uz.windowBits = -uz.windowBits : uz.gzip && uz.windowBits > 0 && uz.windowBits < 16 && (uz.windowBits += 16), this.err = 0, this.zM = "", this.ended = !1, this.chunks = [], this.strm = new Yu, this.strm.avail_out = 0;
-       let bz = yu.deflateInit2(this.strm, uz.level, uz.method, uz.windowBits, uz.memLevel, uz.strategy);
-       if (bz !== nb) throw new Error(Wz[bz]);
-       if (uz.header && yu.deflateSetHeader(this.strm, uz.header), uz.dictionary) {
-         let zz;
-         if (zz = "string" === typeof uz.dictionary ? Iu(uz.dictionary) : "[object ArrayBuffer]" === ku.call(uz.dictionary) ? new Uint8Array(uz.dictionary) : uz.dictionary, bz = yu.deflateSetDictionary(this.strm, zz), bz !== nb) throw new Error(Wz[bz]);
-         this._dict_set = !0
+       return {
+         watch: Eq => (0, lq.h)((gq => gq.itemBridgeSources.events[qq].watch(Eq)))
+       }
+     }
+     const cq = {
+       states: {
+         inventory: xq("inventory"),
+         hotbar: xq("hotbar"),
+         crafting: xq("crafting"),
+         heldItemAim: xq("heldItemAim")
+       },
+       events: {
+         hotbarSlotRequested: Aq("hotbarSlotRequested"),
+         hotbarScrolled: Aq("hotbarScrolled"),
+         numberKeyPressed: Aq("numberKeyPressed"),
+         inventoryDropRequested: Aq("inventoryDropRequested"),
+ ... (19 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L676-L679` → after: `L307-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L307-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L307-L311) · [Before (L676-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L676-L679)

```diff
-     function Ob(zz, uz) {
-       const bz = new Hb(uz);
-       if (bz.push(zz, !0), bz.err) throw bz.zM || Wz[bz.err];
-       return bz.result
+     function lq(qq) {
+       return {
+         current: () => qq,
+         watch: () => () => {}
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L681-L790` → after: `L313-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L313-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L313-L446) · [Before (L681-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L681-L790)

```diff
-     Hb.prototype.push = function(zz, uz) {
-       const bz = this.strm,
-         Ez = this.options.IZ;
-       let nz, iz;
-       if (this.ended) return !1;
-       for (iz = uz === ~~uz ? uz : !0 === uz ? Eb : zb, "string" === typeof zz ? bz.input = Iu(zz) : "[object ArrayBuffer]" === ku.call(zz) ? bz.input = new Uint8Array(zz) : bz.input = zz, bz.next_in = 0, bz.avail_in = bz.input.length;;)
-         if (0 === bz.avail_out && (bz.output = new Uint8Array(Ez), bz.next_out = 0, bz.avail_out = Ez), (iz === ub || iz === bb) && bz.avail_out <= 6) this.onData(bz.output.subarray(0, bz.next_out)), bz.avail_out = 0;
-         else {
-           if (nz = yu.deflate(bz, iz), nz === ib) return bz.next_out > 0 && this.onData(bz.output.subarray(0, bz.next_out)), nz = yu.deflateEnd(this.strm), this.onEnd(nz), this.ended = !0, nz === nb;
-           if (0 !== bz.avail_out) {
-             if (iz > 0 && bz.next_out > 0) this.onData(bz.output.subarray(0, bz.next_out)), bz.avail_out = 0;
-             else if (0 === bz.avail_in) break
-           } else this.onData(bz.output)
-         } return !0
-     }, Hb.prototype.onData = function(zz) {
-       this.chunks.push(zz)
- ... (94 more removed lines; see GitHub link above)
+ 
+     function Oq() {}
+     const mq = Object.freeze([0, 0, 0]),
+       xq = {
+         states: {
+           health: lq({
+             health: null,
+             maxHealth: null,
+             shield: null,
+             maxShield: null
+           }),
+           inventory: lq({
+             player: [],
+             chestOrCreative: [],
+             chest: null,
+             creative: !1,
+ ... (118 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L792-L844` → after: `L448-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L448-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L448-L544) · [Before (L792-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L792-L844)

```diff
-           break
-         }
-       } while (bz < Ez && nz < lz);
-       sz = Fz >> 3, bz -= sz, Fz -= sz << 3, dz &= (1 << Fz) - 1, zz.next_in = bz, zz.next_out = nz, zz.avail_in = bz < Ez ? Ez - bz + 5 : 5 - (bz - Ez), zz.avail_out = nz < lz ? lz - nz + 257 : 257 - (nz - lz), Jz.hold = dz, Jz.bits = Fz
-     };
-     const Fb = 15,
-       Zb = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
-       Rb = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
-       Kb = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
-       wb = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
-     var Xb = (zz, uz, bz, Ez, nz, iz, lz, Mz) => {
-       const tz = Mz.bits;
-       let Hz, Oz, pz, dz, Fz, Zz, Rz = 0,
-         Kz = 0,
-         wz = 0,
-         Xz = 0,
- ... (37 more removed lines; see GitHub link above)
+         },
+         commands: {
+           selectHotbarSlot: Oq,
+           removeInventoryItem: () => !1,
+           swapInventorySlots: () => !1,
+           moveInventoryItem: () => !1,
+           quickMoveInventoryItem: () => null,
+           closeChest: Oq,
+           setInventoryOpen: Oq,
+           changeIronChestPasskey: Oq,
+           dragReplayCamera: Oq,
+           applyTemporaryThirdPerson: Oq,
+           holdEmoteWheel: Oq,
+           recordFlyingMiddleText: Oq,
+           focusCrafting: Oq,
+           craftRecipe: () => ({
+ ... (81 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L847-L861` → after: `L547-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L547-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L547-L607) · [Before (L847-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L847-L861)

```diff
-       return 0 !== vz && (nz[Fz + vz] = Rz - rz << 24 | 64 << 16), Mz.bits = fz, 0
-     };
-     const {
-       Z_FINISH: fb,
-       Z_BLOCK: sb,
-       Z_TREES: rb,
-       Z_OK: ob,
-       Z_STREAM_END: Nb,
-       Z_NEED_DICT: vb,
-       Z_STREAM_ERROR: xb,
-       Z_DATA_ERROR: Jb,
-       Z_MEM_ERROR: Ab,
-       Z_BUF_ERROR: Tb,
-       Z_DEFLATED: Lb
-     } = ez, Pb = 12, Gb = 30, ab = zz => (zz >>> 24 & 255) + (zz >>> 8 & 65280) + ((65280 & zz) << 8) + ((255 & zz) << 24);
+   },
+   40320: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => vq,
+       e: () => rq,
+       g: () => hq,
+       i: () => tq,
+       j: () => Qq
+     });
+     var Yq = gq(39174),
+       lq = gq(1214),
+       Oq = gq(1926),
+       mq = gq(1933),
+       xq = gq(3166),
+       Aq = gq(36851),
+       cq = gq(1308),
+ ... (45 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L864` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L610) · [Before (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L864)

```diff
-       this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = … [truncated]
+       return Boolean(Oq.c.get("useInventory") && Oq.c.get("useFullInventory"))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L866-L1259` → after: `L612-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L612-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L612-L624) · [Before (L866-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L866-L1259)

```diff
-     const mb = zz => {
-         if (!zz || !zz.state) return xb;
-         const uz = zz.state;
-         return zz.total_in = zz.total_out = uz.total = 0, zz.zM = "", uz.wrap && (zz.adler = 1 & uz.wrap), uz.mode = 1, uz.last = 0, uz.havedict = 0, uz.dmax = 32768, uz.head = null, uz.hold = 0, uz.bits = 0, uz.lencode = uz.lendyn = new Int32Array(852), uz.distcode = uz.distdyn  … [truncated]
-       },
-       qb = zz => {
-         if (!zz || !zz.state) return xb;
-         const uz = zz.state;
-         return uz.wsize = 0, uz.whave = 0, uz.wnext = 0, mb(zz)
-       },
-       hb = (zz, uz) => {
-         let bz;
-         if (!zz || !zz.state) return xb;
-         const Ez = zz.state;
-         return uz < 0 ? (bz = 0, uz = -uz) : (bz = 1 + (uz >> 4), uz < 48 && (uz &= 15)), uz && (uz < 8 || uz > 15) ? xb : (null !== Ez.window && Ez.wbits !== uz && (Ez.window = null), Ez.wrap = bz, Ez.wbits = uz, qb(zz))
-       },
- ... (378 more removed lines; see GitHub link above)
+     let yq = null;
+     const tq = {
+         inventory: function() {
+           const qq = Vq.c.states.inventory;
+           let Eq = null;
+           const gq = qq => {
+             var gq;
+             return null === qq.chest ? qq : ((null === (gq = Eq) || void 0 === gq ? void 0 : gq.from) === qq && Eq.chestVersion === (0, aq.d)() || (Eq = {
+               from: qq,
+               chestVersion: (0, aq.d)(),
+               view: {
+                 ...qq,
+                 chest: (0, aq.j)(qq.chest)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L1261-L1276` → after: `L626-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L626-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L626-L646) · [Before (L1261-L1276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L1261-L1276)

```diff
-               if (dz -= tz, zz.total_out += dz, bz.total += dz, dz && (zz.adler = bz.check = bz.flags ? Qz(bz.check, nz, dz, lz - dz) : yz(bz.check, nz, dz, lz - dz)), dz = tz, (bz.flags ? Hz : ab(Hz)) !== bz.check) {
-                 zz.zM = "incorrect data check", bz.mode = Gb;
-                 break
-               }
-               Hz = 0, Oz = 0
-             }
-             bz.mode = 28;
-           case 28:
-             if (bz.wrap && bz.flags) {
-               for (; Oz < 32;) {
-                 if (0 === Mz) break zz;
-                 Mz--, Hz += Ez[iz++] << Oz, Oz += 8
-               }
-               if (Hz !== (4294967295 & bz.total)) {
-                 zz.zM = "incorrect length check", bz.mode = Gb;
-                 break
+             }), Eq.view)
+           };
+           return {
+             current: () => gq(qq.current()),
+             watch: Eq => qq.watch((qq => {
+               Eq(gq(qq))
+             }))
+           }
+         }(),
+         crafting: Vq.c.states.crafting,
+         stationItems: {
+           current() {
+             var qq;
+             return (null === (qq = yq) || void 0 === qq ? void 0 : qq.namesVersion) !== (0, xq.k)() && (yq = {
+               namesVersion: (0, xq.k)(),
+               items: {
+ ... (5 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L1278-L1297` → after: `L648-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L648-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L648-L682) · [Before (L1278-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L1278-L1297)

```diff
-               Hz = 0, Oz = 0
-             }
-             bz.mode = 29;
-           case 29:
-             Nz = Nb;
-             break zz;
-           case Gb:
-             Nz = Jb;
-             break zz;
-           case 31:
-             return Ab;
-           default:
-             return xb
-         }
-         return zz.next_out = lz, zz.avail_out = tz, zz.next_in = iz, zz.avail_in = Mz, bz.hold = Hz, bz.bits = Oz, (bz.wsize || dz !== zz.avail_out && bz.mode < Gb && (bz.mode < 27 || uz !== fb)) && Db(zz, zz.output, zz.next_out, dz - zz.avail_out), pz -= zz.avail_in, dz -= zz.av … [truncated]
-       },
- ... (4 more removed lines; see GitHub link above)
+             }), yq.items
+           },
+           watch: () => () => {}
+         },
+         itemInfo: function() {
+           let qq = null;
+           const Eq = () => {
+             var Eq;
+             return (null === (Eq = qq) || void 0 === Eq ? void 0 : Eq.namesVersion) !== (0, xq.k)() && (qq = {
+               namesVersion: (0, xq.k)(),
+               infos: jq(oq)
+             }), qq.infos
+           };
+           return {
+             current: Eq,
+             watch: gq => (0, mq.o)((Yq => {
+ ... (19 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L1299-L1302` → after: `L684-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L684-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L684-L689) · [Before (L1299-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L1299-L1302)

```diff
-       inflateGetHeader: (zz, uz) => {
-         if (!zz || !zz.state) return xb;
-         const bz = zz.state;
-         return 0 === (2 & bz.wrap) ? xb : (bz.head = uz, uz.done = !1, ob)
+       rq = {
+         inventoryDropRequested: Vq.c.events.inventoryDropRequested,
+         chestToggled: Vq.c.events.chestToggled,
+         chestRefreshed: Vq.c.events.chestRefreshed,
+         inventorySynced: Vq.c.events.inventorySynced,
+         enchantingTableOpened: Vq.c.events.enchantingTableOpened
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L1304-L1307` → after: `L691-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L691-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L691-L725) · [Before (L1304-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L1304-L1307)

```diff
-       inflateSetDictionary: (zz, uz) => {
-         const bz = uz.length;
-         let Ez, nz, iz;
-         return zz && zz.state ? (Ez = zz.state, 0 !== Ez.wrap && 11 !== Ez.mode ? xb : 11 === Ez.mode && (nz = 1, nz = yz(nz, uz, bz, 0), nz !== Ez.check) ? Jb : (iz = Db(zz, uz, bz, bz), iz ? (Ez.mode = 31, Ab) : (Ez.havedict = 1, ob))) : xb
+       vq = {
+         removeInventoryItem: Vq.c.commands.removeInventoryItem,
+         swapInventorySlots: Vq.c.commands.swapInventorySlots,
+         moveInventoryItem: Vq.c.commands.moveInventoryItem,
+         quickMoveInventoryItem: Vq.c.commands.quickMoveInventoryItem,
+         closeChest: Vq.c.commands.closeChest,
+         setInventoryOpen(qq) {
+           (0, Bq.k)(Wq.C.InventoryOpen, qq ? Wq.C.InventoryOpen : 0)
+         },
+         focusCrafting: Vq.c.commands.focusCrafting,
+         craftRecipe: Vq.c.commands.craftRecipe,
+         salvageItem: Vq.c.commands.salvageItem,
+         enchantItem: Vq.c.commands.enchantItem,
+         changeIronChestPasskey(qq) {
+           var Eq;
+           let {
+ ... (19 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L1309-L1324` → after: `L727-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L727-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L727-L745) · [Before (L1309-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L1309-L1324)

```diff
-       inflateInfo: "pako inflate (from Nodeca project)"
-     };
-     var Wb = function() {
-       this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
-     };
-     const eb = Object.prototype.toString,
-       {
-         Z_NO_FLUSH: jb,
-         Z_FINISH: Ib,
-         Z_OK: Bb,
-         Z_STREAM_END: Cb,
-         Z_NEED_DICT: Yb,
-         Z_STREAM_ERROR: kb,
-         Z_DATA_ERROR: zE,
-         Z_MEM_ERROR: uE
-       } = ez;
+       hq = {
+         enchantingOffer: Vq.c.queries.enchantingOffer
+       }
+   },
+   40369: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => Yq,
+       g: () => Bq,
+       k: () => xq,
+       l: () => Oq,
+       o: () => lq,
+       r: () => Aq,
+       v: () => uq
+     });
+     class Yq extends Error {
+       constructor() {
+ ... (3 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L1327-L1336` → after: `L748-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L748-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L748-L758) · [Before (L1327-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L1327-L1336)

```diff
-       this.options = Qu({
-         IZ: 65536,
-         windowBits: 15,
-         to: ""
-       }, zz || {});
-       const uz = this.options;
-       uz.raw && uz.windowBits >= 0 && uz.windowBits < 16 && (uz.windowBits = -uz.windowBits, 0 === uz.windowBits && (uz.windowBits = -15)), !(uz.windowBits >= 0 && uz.windowBits < 16) || zz && zz.windowBits || (uz.windowBits += 32), uz.windowBits > 15 && uz.windowBits < 48 && 0 = … [truncated]
-       let bz = Qb.inflateInit2(this.strm, uz.windowBits);
-       if (bz !== Bb) throw new Error(Wz[bz]);
-       if (this.header = new Wb, Qb.inflateGetHeader(this.strm, this.header), uz.dictionary && ("string" === typeof uz.dictionary ? uz.dictionary = Iu(uz.dictionary) : "[object ArrayBuffer]" === eb.call(uz.dictionary) && (uz.dictionary = new Uint8Array(uz.dictionary)), uz.raw && ( … [truncated]
+       return qq instanceof RangeError && /call stack/i.test(qq.message) || qq instanceof Error && "InternalError" === qq.name && /recursion/i.test(qq.message)
+     }
+ 
+     function Oq(qq) {
+       return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(qq))
+     }
+     const mq = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
+ 
+     function xq(qq) {
+       var Eq;
+       return qq instanceof WebAssembly.RuntimeError || qq instanceof Yq || lq(qq) && mq.test(null !== (Eq = qq.stack) && void 0 !== Eq ? Eq : "")
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L1340-L1342` → after: `L762-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L762-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L762-L763) · [Before (L1340-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L1340-L1342)

```diff
-       const bz = new bE(uz);
-       if (bz.push(zz), bz.err) throw bz.zM || Wz[bz.err];
-       return bz.result
+       if (xq(qq)) throw qq;
+       console.error(Eq, qq)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L1344-L1369` → after: `L765-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L765-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L765-L794) · [Before (L1344-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L1344-L1369)

```diff
-     bE.prototype.push = function(zz, uz) {
-       const bz = this.strm,
-         Ez = this.options.IZ,
-         nz = this.options.dictionary;
-       let iz, lz, Mz;
-       if (this.ended) return !1;
-       for (lz = uz === ~~uz ? uz : !0 === uz ? Ib : jb, "[object ArrayBuffer]" === eb.call(zz) ? bz.input = new Uint8Array(zz) : bz.input = zz, bz.next_in = 0, bz.avail_in = bz.input.length;;) {
-         for (0 === bz.avail_out && (bz.output = new Uint8Array(Ez), bz.next_out = 0, bz.avail_out = Ez), iz = Qb.inflate(bz, lz), iz === Yb && nz && (iz = Qb.inflateSetDictionary(bz, nz), iz === Bb ? iz = Qb.inflate(bz, lz) : iz === zE && (iz = Yb)); bz.avail_in > 0 && iz === Cb  … [truncated]
-         switch (iz) {
-           case kb:
-           case zE:
-           case Yb:
-           case uE:
-             return this.onEnd(iz), this.ended = !0, !1
-         }
-         if (Mz = bz.avail_out, bz.next_out && (0 === bz.avail_out || iz === Cb))
- ... (10 more removed lines; see GitHub link above)
+ 
+     function cq(qq, Eq, gq, lq, Oq) {
+       if (Eq % lq !== 0 || Eq + gq > qq.byteLength) throw new Yq(`${Oq}: ${gq} bytes at ${Eq}, ${lq}-aligned, outside ${qq.byteLength} bytes of memory`)
+     }
+ 
+     function uq(qq, Eq, gq, Yq, lq) {
+       return 0 === gq ? null : (cq(Eq, gq, Yq * qq.BYTES_PER_ELEMENT, qq.BYTES_PER_ELEMENT, lq), new qq(Eq, gq, Yq))
+     }
+ 
+     function Bq(qq, Eq, gq, Yq, lq) {
+       return 0 === Eq ? null : (cq(qq, Eq, gq, Yq, lq), new DataView(qq, Eq, gq))
+     }
+   },
+   40325: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq,
+ ... (14 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L1371-L1397` → after: `L796-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L796-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L796-L837) · [Before (L1371-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L1371-L1397)

```diff
-       return !0
-     }, bE.prototype.onData = function(zz) {
-       this.chunks.push(zz)
-     }, bE.prototype.onEnd = function(zz) {
-       zz === Bb && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Wu(this.chunks)), this.chunks = [], this.err = zz, this.zM = this.strm.zM
-     };
-     var nE = {
-       Inflate: bE,
-       inflate: EE,
-       inflateRaw: function(zz, uz) {
-         return (uz = uz || {}).raw = !0, EE(zz, uz)
-       },
-       ungzip: EE,
-       constants: ez
-     };
-     const {
- ... (11 more removed lines; see GitHub link above)
+     }
+     let lq = null,
+       Oq = null,
+       mq = null;
+     const xq = [];
+     let Aq = null;
+ 
+     function cq(qq, Eq) {
+       try {
+         qq(Eq)
+       } catch (gq) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", gq)
+       }
+     }
+ 
+     function uq() {
+ ... (26 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L1399-L1407` → after: `L839-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L839-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/218.js#L839-L840) · [Before (L1399-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/218.js#L1399-L1407)

```diff
-         Deflate: iE,
-         deflate: lE,
-         deflateRaw: ME,
-         gzip: tE,
-         Inflate: HE,
-         inflate: OE,
-         inflateRaw: pE,
-         ungzip: dE,
-         constants: ez
+         running: qq,
+         shell: Eq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/219.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/219.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L4` → after: `L4-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L4-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L4-L161) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L4)

```diff
-   37859: (zz, uz, bz) => {
+   36974: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Qq,
+       g: () => Pq
+     });
+     var Yq = gq(4111),
+       lq = gq(1416),
+       Oq = gq(57),
+       mq = gq(6348),
+       xq = gq(4098),
+       Aq = gq(1274),
+       cq = gq(1904),
+       uq = gq(1876),
+       Bq = gq(1422),
+       Wq = gq(1183),
+       Nq = gq(36979),
+ ... (142 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L8-L94` → after: `L165-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L165-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L165-L222) · [Before (L8-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L8-L94)

```diff
-     var Ez = bz(195),
-       nz = bz(37105);
-     const iz = 1.2,
-       lz = {
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
-         RM: .5,
- ... (71 more removed lines; see GitHub link above)
+     var Yq = gq(24),
+       lq = gq(31),
+       Oq = gq(4135),
+       mq = gq(296),
+       xq = gq(1622),
+       Aq = gq(8073),
+       cq = gq(4144),
+       uq = gq(8646),
+       Bq = gq(8118),
+       Wq = gq(8090),
+       Nq = gq(8120),
+       aq = gq(1668),
+       Vq = gq(8123),
+       dq = gq(8594),
+       jq = gq(8773),
+       Hq = gq(8662),
+ ... (42 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L97-L108` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L318-L319) · [Before (L97-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L97-L108)

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
-         RM: .5,
-         czz: !1
+         running: !1,
+         latchedAtMs: -1 / 0
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L110-L605` → after: `L321-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L321-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L321-L486) · [Before (L110-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L110-L605)

```diff
-       Fz = {
-         Player: {
-           defaultName: "Player",
-           physicsBodyDimensions: {
-             width: Ez.e.Gw,
-             height: Ez.e.mw
-           },
-           hitBoxDimensions: {
-             width: Ez.e.Gw + .4,
-             height: Ez.e.mw + .6
-           },
-           eyeHeight: Ez.e.mw * Ez.e.playerEyeToHeightRatio,
-           rideHeight: Ez.e.mw - .1,
-           RM: nz.f.RM,
-           czz: !0
-         },
- ... (480 more removed lines; see GitHub link above)
+       wq = qq => {
+         const Eq = {
+           x: 0,
+           y: 0,
+           magnitude: 0,
+           headingOffset: 0,
+           jumpHeld: !1,
+           jumpPressed: !1,
+           running: !1,
+           sprintHeld: !1
+         };
+         let gq = Xq;
+         const uq = new pq.b,
+           Pq = lq.i.subscribe("appManagerUpdated|activeInputDevice", (Eq => {
+             qq.deviceChanged(Eq)
+           }));
+ ... (150 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L607-L611` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L488) · [Before (L607-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L607-L611)

```diff
-       };
- 
-     function Zz(zz) {
-       return Fz[zz]
-     }
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L613` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L490) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L613)

```diff
-   36491: (zz, uz, bz) => {
+   40304: (qq, Eq, gq) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L615` → after: `L492-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L492-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L492-L494) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L615)

```diff
-       b: () => Ez
+       b: () => aq,
+       c: () => dq,
+       d: () => Nq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L618-L651` → after: `L506-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L506-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L506-L508) · [Before (L618-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L618-L651)

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
- ... (18 more removed lines; see GitHub link above)
+         emoteWheel: Oq.e,
+         quickChatWheel: uq.d,
+         actionWheel: Bq.r
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L653-L707` → after: `L510-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L510-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L510-L571) · [Before (L653-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L653-L707)

```diff
-       "skyblock:forged:magmasteel-astral-sanguine": {
-         name: "Comet's Wake",
-         lore: "It leaves a trail of fire through the air, like something falling from very far up.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "starfall"
-       },
-       "skyblock:forged:magmasteel-sanguine-astral": {
-         name: "Vulcan's Ruin",
-         lore: "The Forge Mother made only one, then sat down for a long while.",
-         damageMultiplier: 1.6,
-         cooldownMultiplier: .83,
-         ability: "warcry"
-       },
-       "skyblock:forged:magmasteel-iron-stone": {
-         name: "Forgehand",
- ... (39 more removed lines; see GitHub link above)
+       Nq = Object.keys(Wq),
+       aq = "dead",
+       Vq = qq => (0, Yq.i)().includes(qq),
+       dq = qq => {
+         const Eq = [(0, cq.i)(aq, (() => qq.hasPlayer() && qq.isPlayerDead())), (0, cq.i)("sleeping", (() => Vq(mq.g))), (0, cq.i)("turnstile", (() => Vq(Aq.e))), (0, cq.i)("videoAd", xq.d), (0, cq.i)("replay", (() => (0, lq.i)() || qq.isReplayMode())), (0, cq.i)("freeCamera", (( … [truncated]
+           let [Eq, gq] = qq;
+           return (0, cq.i)(Eq, gq)
+         }))];
+         return () => {
+           for (const qq of Eq) qq()
+         }
+       }
+   },
+   40301: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => lq,
+ ... (46 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L709-L716` → after: `L573-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L573-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L573-L577) · [Before (L709-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L709-L716)

```diff
-       "skyblock:forged:diamond-diamond-diamond": {
-         name: "Prism Fang",
-         lore: "Every facet catches a different light, and every strike finds a different weakness.",
-         damageMultiplier: 1.29,
-         cooldownMultiplier: .88,
-         ability: "gildedEdge",
-         traits: {
-           crit: 1.8
+       mq = (qq, Eq) => {
+         const gq = Math.max(0, Math.min(250, Eq)) / 1e3;
+         return {
+           VJ: qq.yawRadPerSec * gq,
+           dJ: qq.pitchRadPerSec * gq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L719-L724` → after: `L580-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L580-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L580-L585) · [Before (L719-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L719-L724)

```diff
-       "skyblock:forged:diamond-moonstone-gold": {
-         name: "Jeweller's Pride",
-         lore: "Too pretty to fight with. Fight with it anyway.",
-         damageMultiplier: 1.24,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge"
+       xq = (qq, Eq) => Eq ? {
+         move: qq.rightStick,
+         look: qq.leftStick
+       } : {
+         move: qq.leftStick,
+         look: qq.rightStick
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L726-L733` → after: `L587-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L587-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L587-L595) · [Before (L726-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L726-L733)

```diff
-       "skyblock:forged:gold-gold-gold": {
-         name: "King's Ransom",
-         lore: "Worth more than the treasure it guards.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2.5
+       Aq = (qq, Eq) => {
+         const gq = (0, Yq.j)(qq, Eq),
+           lq = Math.min(1, Math.hypot(gq.x, gq.y));
+         return {
+           magnitude: lq,
+           speed: Math.min(1, lq / .8),
+           headingOffset: 0 === lq ? 0 : Math.atan2(gq.x, -gq.y),
+           x: gq.x,
+           y: gq.y
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L736-L744` → after: `L598-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L598-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L598-L622) · [Before (L736-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L736-L744)

```diff
-       "skyblock:forged:gold-moonstone-gold": {
-         name: "Midas Moon",
-         lore: "Mobs it fells seem to rattle with coins.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .92,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2,
-           bossBane: .6
+       cq = (qq, Eq) => {
+         let {
+           sprintPressed: gq,
+           magnitude: Yq,
+           autoSprint: lq,
+           nowMs: Oq
+         } = Eq;
+         const mq = gq ? Oq : qq.latchedAtMs,
+           xq = (qq => {
+             let {
+               running: Eq,
+               magnitude: gq,
+               sprintPressed: Yq,
+               autoSprint: lq
+             } = qq;
+             return !(gq < .5) && (!!Yq || !!(lq && gq >= .9) || Eq)
+ ... (9 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L747-L775` → after: `L625-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L625-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L625-L632) · [Before (L747-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L747-L775)

```diff
-       "skyblock:forged:iron-iron-iron": {
-         name: "Old Faithful",
-         lore: "It has never let anyone down. It never will.",
-         damageMultiplier: 1.15,
-         cooldownMultiplier: .94,
-         ability: "warcry"
-       },
-       "skyblock:forged:iron-wood-wood": {
-         name: "Militia Blade",
-         lore: "Handed out at the outpost gate when the rift first opened.",
-         damageMultiplier: 1.09,
-         cooldownMultiplier: .97,
-         ability: "warcry"
-       },
-       "skyblock:forged:stone-stone-stone": {
-         name: "Quarryman's Cleaver",
- ... (13 more removed lines; see GitHub link above)
+       uq = (qq, Eq, gq) => gq && qq.gyroAiming && "button" === qq.gyroActivation && qq.gyroButton !== Eq ? qq.gyroButton : null,
+       Bq = (qq, Eq) => Eq ? {
+         ...qq,
+         isHeld: gq => gq !== Eq && qq.isHeld(gq),
+         wasPressed: gq => gq !== Eq && qq.wasPressed(gq),
+         wasReleased: gq => gq !== Eq && qq.wasReleased(gq),
+         value: gq => gq === Eq ? 0 : qq.value(gq)
+       } : qq
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L777` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L634) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L777)

```diff
-   37111: (zz, uz, bz) => {
+   40314: (qq, Eq, gq) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L781-L881` → after: `L639-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L639-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L639-L660) · [Before (L781-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L781-L881)

```diff
-     var Ez = bz(332),
-       nz = bz.n(Ez),
-       iz = bz(1840);
-     let lz;
-     var Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz;
-     const Kz = [0, 1, 8, 255, "length", 48, 3, "a", 4, "undefined", void 0, "c", 169, 209, 220, 63, 6, "fromCodePoint", 7, 12, "push", 56, 186, 126, 91, 121, 177, "e", 8191, 88, 13, 14, 2, 50, 9, 103, 131, 216, "i", "j", "f", 111, 104, 16, "b", 119, "X", 512, 127, 74, 130, 29, "g … [truncated]
- 
-     function wz(...zz) {
-       return zz[Kz[4]] = Kz[1], typeof Mz[zz[Kz[0]]] === Kz[9] ? Mz[zz[Kz[0]]] = function(zz) {
-         var uz, bz, Ez, nz, iz, lz, Mz;
-         for (Tz(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = Kz[0], iz = Kz[0], lz = -Kz[1]), Mz = Kz[0]; Mz < bz; Mz++) {
-           var tz = '"7!u><=%z1,OIRx+&X[Sb`edo#aZs_UVrpwc8t~HLl:j.4fY0?/9@;^DhT{)NM6BFkK5vq2|i]A3QJ(Pny*CEm}$gWG'.indexOf(uz[Mz]);
-           if (tz !== -Kz[1])
-             if (lz < Kz[0]) lz = tz;
-             else {
-               Tz(lz += tz * Kz[24], nz |= lz << iz, iz += (lz & Kz[28]) > Kz[29] ? Kz[30] : Kz[31]);
- ... (85 more removed lines; see GitHub link above)
+     const Yq = qq => {
+       let {
+         mode: Eq,
+         sneakHeld: gq,
+         sneakPressed: Yq,
+         sneakTogglePressed: lq,
+         descending: Oq,
+         canCrouch: mq,
+         toggled: xq
+       } = qq;
+       return mq ? Oq ? {
+         crouchHeld: gq,
+         toggled: !1
+       } : "hold" === Eq ? {
+         crouchHeld: gq,
+         toggled: lq ? !xq : xq
+ ... (6 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L883-L944` → after: `L662-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L662-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L662-L665) · [Before (L883-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L883-L944)

```diff
-       zz[Kz[4]] = Kz[2];
-       const bz = zz[Kz[0]][uz(Kz[67])][uz(109) + uz(110) + uz(Kz[41])](zz[Kz[1]]);
-       zz[Kz[7]] = zz[Kz[0]][uz(Kz[67])][uz(Kz[88]) + uz(Kz[89]) + uz(Kz[77]) + uz(Kz[90])](bz);
-       const Ez = zz[Kz[7]] === Kz[83] ? zz[Kz[0]][uz(Kz[67])][uz(Kz[84]) + uz(Kz[85]) + uz(Kz[59]) + uz(Kz[45])](zz[Kz[1]], uz(Kz[81]) + uz(Kz[25]) + uz(Kz[82]) + Kz[27]) : zz[Kz[7]][uz(Kz[81]) + uz(Kz[25]) + uz(Kz[82]) + Kz[27]],
-         lz = zz[Kz[7]] === Kz[83] ? zz[Kz[0]][uz(Kz[67])][uz(Kz[84]) + uz(Kz[85]) + uz(Kz[59]) + uz(Kz[45])](zz[Kz[1]], uz(Kz[62]) + uz(Kz[86]) + uz(Kz[87])) : zz[Kz[7]][uz(Kz[62]) + uz(Kz[86]) + uz(Kz[87])];
-       Tz(nz()[uz(Kz[23])](sz, Kz[0], Kz[0], zz[Kz[56]]), nz().rb(sz, sz, nz()[uz(Kz[48])], zz[Kz[6]].heading), nz()[uz(Kz[65])](Jz, zz[Kz[8]].ht), Jz[Kz[1]] = Kz[0]);
-       const Hz = zz[Kz[32]][uz(129) + uz(Kz[50])]();
-       if (Tz(zz[Kz[7]] = zz[Kz[0]][uz(Kz[67])][uz(Kz[88]) + uz(Kz[89]) + uz(Kz[77]) + uz(Kz[90])](bz), zz[-Kz[88]] = zz[Kz[7]] === Kz[83] ? zz[Kz[0]][uz(Kz[67])][uz(Kz[84]) + uz(Kz[85]) + uz(Kz[59]) + uz(Kz[45])](zz[Kz[1]], uz(Kz[36]) + uz(Kz[91])) : zz[Kz[7]][uz(Kz[36]) + uz(Kz[ … [truncated]
-         function Zz(...zz) {
-           for (Tz(zz[Kz[4]] = Kz[1], zz[Kz[7]] = '!TRdKofQAp5FYtB&U)9P}0,+niLcDmSh4(3bVzHs]I=8k|aZ6W17g<G{Cxe@>[*$rqlE^~J_wuj"v2X%;.?O`yM/#:N', zz[Kz[92]] = "" + (zz[Kz[0]] || ""), zz[Kz[6]] = zz[Kz[92]].length, zz[-Kz[93]] = [], zz[Kz[27]] = Kz[0], zz[Kz[16]] = Kz[0], zz[Kz[18]] … [truncated]
-             if (zz[Kz[38]] = zz[Kz[7]].indexOf(zz[Kz[92]][zz[Kz[94]]]), zz[Kz[38]] !== -Kz[1])
-               if (zz[Kz[18]] < Kz[0]) zz[Kz[18]] = zz[Kz[38]];
-               else {
-                 Tz(zz[Kz[18]] += zz[Kz[38]] * Kz[24], zz[Kz[27]] |= zz[Kz[18]] << zz[Kz[16]], zz[Kz[16]] += (zz[Kz[18]] & Kz[28]) > Kz[29] ? Kz[30] : Kz[31]);
-                 do {
-                   Tz(zz[-Kz[93]].push(zz[Kz[27]] & Kz[3]), zz[Kz[27]] >>= Kz[2], zz[Kz[16]] -= Kz[2])
- ... (46 more removed lines; see GitHub link above)
+     };
+     class lq {
+       constructor() {
+         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L946-L974` → after: `L667-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L667-L668) · [Before (L946-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L946-L974)

```diff
-       const Oz = vz;
-       if (Tz(nz()[uz(148)](Oz, sz, Jz), Oz[Kz[1]] = Kz[0], zz[Kz[11]] = nz()[uz(Kz[68])](Oz)), !Hz) {
-         function Vz(...zz) {
-           for (Tz(zz[Kz[4]] = Kz[1], zz[Kz[1]] = 'G)DqpLNlZRmHS!P_rCB&5Y*Qf70x`wEKJMW@IagT:An(iXh+o#[e;1"|tV3=6j.c{/^92Ob]UkFds4>}<v?%uy$z8,~', zz[Kz[44]] = "" + (zz[Kz[0]] || ""), zz[Kz[11]] = zz[Kz[44]].length, zz[Kz[53]] = [], zz[Kz[27]] = Kz[0], zz[Kz[40]] = Kz[0], zz[Kz[98]] … [truncated]
-             if (zz[Kz[34]] = zz[Kz[1]].indexOf(zz[Kz[44]][zz[Kz[2]]]), zz[Kz[34]] !== -Kz[1])
-               if (zz[Kz[98]] < Kz[0]) zz[Kz[98]] = zz[Kz[34]];
-               else {
-                 Tz(zz[Kz[98]] += zz[Kz[34]] * Kz[24], zz[Kz[27]] |= zz[Kz[98]] << zz[Kz[40]], zz[Kz[40]] += (zz[Kz[98]] & Kz[28]) > Kz[29] ? Kz[30] : Kz[31]);
-                 do {
-                   Tz(zz[Kz[53]].push(zz[Kz[27]] & Kz[3]), zz[Kz[27]] >>= Kz[2], zz[Kz[40]] -= Kz[2])
-                 } while (zz[Kz[40]] > Kz[18]);
-                 zz[Kz[98]] = -Kz[1]
-               } return zz[Kz[98]] > -Kz[1] && zz[Kz[53]].push((zz[Kz[27]] | zz[Kz[98]] << zz[Kz[40]]) & Kz[3]), Xz(zz[Kz[53]])
-         }
- 
-         function mz(...zz) {
- ... (13 more removed lines; see GitHub link above)
+       lostToPadScreen() {
+         this.regainPending = !0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L976-L1042` → after: `L670-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L670-L676) · [Before (L976-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L976-L1042)

```diff
-       const pz = zz[Kz[16]][uz(151) + uz(152) + uz(153)],
-         dz = pz ? Math[uz(154)](pz, zz[Kz[11]]) : zz[Kz[11]];
-       nz()[uz(155) + uz(156)](Oz, Oz);
-       const Fz = zz[Kz[18]] !== Kz[83] && void 0 !== zz[Kz[18]] ? zz[Kz[18]] : zz[Kz[16]][uz(157) + uz(158) + uz(159) + uz(Kz[104])];
-       if (dz > Kz[0]) {
-         function hz(...zz) {
-           for (Tz(zz[Kz[4]] = Kz[1], zz[Kz[1]] = 'ZyVxC~]@Odq`RiAK:F%u!3WBvYL*9acl8$z.)ME2>GwHD(UjN5{Jo}Q1[;T4^ImXsf_/"e+6#,h&r=?Pp0<|7Skbngt', zz[Kz[44]] = "" + (zz[Kz[0]] || ""), zz[Kz[6]] = zz[Kz[44]].length, zz[-Kz[101]] = [], zz[Kz[105]] = Kz[0], zz[Kz[102]] = Kz[0], zz[-Kz[ … [truncated]
-             if (zz[-Kz[104]] = zz[Kz[1]].indexOf(zz[Kz[44]][zz[Kz[2]]]), zz[-Kz[104]] !== -Kz[1])
-               if (zz[-Kz[103]] < Kz[0]) zz[-Kz[103]] = zz[-Kz[104]];
-               else {
-                 Tz(zz[-Kz[103]] += zz[-Kz[104]] * Kz[24], zz[Kz[105]] |= zz[-Kz[103]] << zz[Kz[102]], zz[Kz[102]] += (zz[-Kz[103]] & Kz[28]) > Kz[29] ? Kz[30] : Kz[31]);
-                 do {
-                   Tz(zz[-Kz[101]].push(zz[Kz[105]] & Kz[3]), zz[Kz[105]] >>= Kz[2], zz[Kz[102]] -= Kz[2])
-                 } while (zz[Kz[102]] > Kz[18]);
-                 zz[-Kz[103]] = -Kz[1]
-               } return zz[-Kz[103]] > -Kz[1] && zz[-Kz[101]].push((zz[Kz[105]] | zz[-Kz[103]] << zz[Kz[102]]) & Kz[3]), Xz(zz[-Kz[101]])
- ... (51 more removed lines; see GitHub link above)
+       filter(qq, Eq) {
+         this.regainPending && (this.regainPending = !1, this.regainedAtMs = Eq, this.graceEndsMs = Eq + 500);
+         const gq = Eq < this.graceEndsMs;
+         return gq && (qq.sneakPressed || qq.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, Eq + 300))), qq.sneakHeld ? gq && qq.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
+           sneakHeld: qq.sneakHeld && !this.ignoringHeld,
+           sneakPressed: qq.sneakPressed && !this.ignoringHeld,
+           sneakTogglePressed: qq.sneakTogglePressed && !gq
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L1049` → after: `L681-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L681-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L681-L684) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L1049)

```diff
-   37105: (zz, uz, bz) => {
+   40293: (qq, Eq, gq) => {
+     gq(8826)
+   },
+   40295: (qq, Eq, gq) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L1051-L1052` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L686) · [Before (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L1051-L1052)

```diff
-       c: () => tz,
-       f: () => Mz
+       e: () => oq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L1054-L1109` → after: `L688-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L688-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/219.js#L688-L775) · [Before (L1054-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/219.js#L1054-L1109)

```diff
-     var Ez = bz(37111),
-       nz = bz(1840);
-     const iz = 2,
-       lz = 1,
-       Mz = {
-         RM: 1,
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
- ... (40 more removed lines; see GitHub link above)
+     var Yq = gq(31),
+       lq = gq(8750),
+       Oq = gq(8764),
+       mq = gq(8073),
+       xq = gq(8118),
+       Aq = gq(8090),
+       cq = gq(40301),
+       uq = gq(40304),
+       Bq = gq(8123),
+       Wq = gq(8061),
+       Nq = gq(8662),
+       aq = gq(8780);
+     const Vq = [{
+         isOpen: lq.i,
+         openButton: () => (0, mq.i)("emoteWheel"),
+         aim: qq => {
+ ... (72 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/220.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/220.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557)

#### 1. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L4-L10` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/220.js#L4-L6) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/220.js#L4-L10)

```diff
-   38983: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       getBlockFaces: () => dz,
-       getIngameIconUrl: () => Rz,
-       getItemIconUrl: () => Zz,
-       getItemTextureUrl: () => Fz,
-       getParticleTextureUrl: () => Kz
+   38455: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => aq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L12-L65` → after: `L8-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L8-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/220.js#L8-L607) · [Before (L12-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/220.js#L12-L65)

```diff
-     var Ez = bz(4238),
-       nz = bz(36465),
-       iz = bz(9076),
-       lz = bz(2907);
-     const Mz = new Set,
-       tz = new Set;
-     let Hz = null;
- 
-     function Oz(zz) {
-       Mz.has(zz) || (Mz.add(zz), tz.add(zz), Hz ??= setTimeout((() => {
-         console.warn(`Docs gallery: no default texture for ${tz.size} names`, [...tz]), tz.clear(), Hz = null
-       }), 1e3))
-     }
- 
-     function pz(zz, uz) {
-       try {
- ... (38 more removed lines; see GitHub link above)
+     var Yq = gq(190),
+       lq = gq(37656);
+     const Oq = 1.2,
+       mq = {
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
+         Am: .5,
+ ... (584 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L68-L72` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/220.js#L610) · [Before (L68-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/220.js#L68-L72)

```diff
-       try {
-         return bz(3084)(`./${zz}.png`)
-       } catch {
-         return Oz(zz), null
-       }
+       return Nq[qq]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L75` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/220.js#L613) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/220.js#L75)

```diff
-   36491: (zz, uz, bz) => {
+   37111: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L77` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/220.js#L615) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/220.js#L77)

```diff
-       b: () => Ez
+       d: () => Yq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/221.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/221.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L4` → after: `L4-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L4-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/221.js#L4-L75) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/221.js#L4)

```diff
-   36526: (zz, uz, bz) => {
+   39563: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       getBlockFaces: () => Wq,
+       getIngameIconUrl: () => Vq,
+       getItemIconUrl: () => aq,
+       getItemTextureUrl: () => Nq,
+       getParticleTextureUrl: () => dq
+     });
+     var Yq = gq(4283),
+       lq = gq(37086),
+       Oq = gq(9371),
+       mq = gq(3059);
+     const xq = new Set,
+       Aq = new Set;
+     let cq = null;
+ 
+ ... (56 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L6-L8` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/221.js#L77) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/221.js#L6-L8)

```diff
-       b: () => iz,
-       f: () => Ez,
-       i: () => nz
+       d: () => Yq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L10-L207` → after: `L79-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L79-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/221.js#L79-L178) · [Before (L10-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/221.js#L10-L207)

```diff
-     const Ez = 1 / 2.2,
-       nz = 2.2;
-     Math.sqrt(5);
-     let iz = .001
-   },
-   36553: (zz, uz, bz) => {
-     function Ez(zz) {
-       return parseInt(zz.toString().replace(/\W/g, ""))
-     }
- 
-     function nz(zz, uz) {
-       let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(zz - uz) <= bz
-     }
- 
-     function iz(zz, uz, bz) {
- ... (182 more removed lines; see GitHub link above)
+     const Yq = {
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

#### 4. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L209-L211` → after: `L180-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L180-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/221.js#L180-L235) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/221.js#L209-L211)

```diff
-       }(zz, bz, uz)));
-       return () => {
-         for (const zz of bz) zz?.()
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
+ ... (40 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/222.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/222.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L3)

```diff
- export const ids = [222, 229];
+ export const ids = [222];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L5-L25` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L4-L8) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L5-L25)

```diff
-   37703: zz => {
-     zz.exports = function(zz) {
-       return null != zz && null != zz.constructor && "function" === typeof zz.constructor.isBuffer && zz.constructor.isBuffer(zz)
-     }
-   },
-   37684: (zz, uz, bz) => {
-     var Ez = bz(37692),
-       nz = bz(37695),
-       iz = bz(37703);
-     bz.g.__TYPEDARRAY_POOL || (bz.g.__TYPEDARRAY_POOL = {
-       UINT8: nz([32, 0]),
-       UINT16: nz([32, 0]),
-       UINT32: nz([32, 0]),
-       INT8: nz([32, 0]),
-       INT16: nz([32, 0]),
-       INT32: nz([32, 0]),
- ... (5 more removed lines; see GitHub link above)
+   37145: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Oq,
+       e: () => Yq,
+       h: () => lq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L27-L133` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L10-L13) · [Before (L27-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L27-L133)

```diff
-     var lz = "undefined" !== typeof Uint8ClampedArray,
-       Mz = bz.g.__TYPEDARRAY_POOL;
-     Mz.UINT8C || (Mz.UINT8C = nz([32, 0])), Mz.BUFFER || (Mz.BUFFER = nz([32, 0]));
-     var tz = Mz.DATA,
-       Hz = Mz.BUFFER;
- 
-     function Oz(zz) {
-       if (zz) {
-         var uz = zz.length || zz.byteLength,
-           bz = Ez.log2(uz);
-         tz[bz].push(zz)
-       }
-     }
- 
-     function pz(zz) {
-       zz = Ez.nextPow2(zz);
- ... (91 more removed lines; see GitHub link above)
+     const Yq = 1 / 2.2,
+       lq = 2.2;
+     Math.sqrt(5);
+     let Oq = .001
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L135` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L15) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L135)

```diff
-   37692: (zz, uz) => {
+   37158: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L137-L186` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L17) · [Before (L137-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L137-L186)

```diff
-       var uz = 32;
-       return (zz &= -zz) && uz--, 65535 & zz && (uz -= 16), 16711935 & zz && (uz -= 8), 252645135 & zz && (uz -= 4), 858993459 & zz && (uz -= 2), 1431655765 & zz && (uz -= 1), uz
-     }
-     uz.INT_BITS = 32, uz.INT_MAX = 2147483647, uz.INT_MIN = -1 << 31, uz.sign = function(zz) {
-       return (zz > 0) - (zz < 0)
-     }, uz.abs = function(zz) {
-       var uz = zz >> 31;
-       return (zz ^ uz) - uz
-     }, uz.min = function(zz, uz) {
-       return uz ^ (zz ^ uz) & -(zz < uz)
-     }, uz.max = function(zz, uz) {
-       return zz ^ (zz ^ uz) & -(zz < uz)
-     }, uz.isPow2 = function(zz) {
-       return !(zz & zz - 1) && !!zz
-     }, uz.log2 = function(zz) {
-       var uz, bz;
- ... (34 more removed lines; see GitHub link above)
+       return parseInt(qq.toString().replace(/\W/g, ""))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L210-L223` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L21-L22) · [Before (L210-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L210-L223)

```diff
-       for (var bz = 0; bz < zz; ++bz)
-         if (!(uz[bz] <= uz[bz + zz])) return !0;
-       return !1
-     }
- 
-     function tz(zz, uz, bz, Ez) {
-       for (var nz = 0, iz = 0, lz = 0, tz = zz.length; lz < tz; ++lz) {
-         var Hz = zz[lz];
-         if (!Mz(uz, Hz)) {
-           for (var Oz = 0; Oz < 2 * uz; ++Oz) bz[nz++] = Hz[Oz];
-           Ez[iz++] = lz
-         }
-       }
-       return iz
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(qq - Eq) <= gq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L226-L245` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L25-L27) · [Before (L226-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L226-L245)

```diff
-     function Hz(zz, uz, bz, Ez) {
-       var Mz = zz.length,
-         Hz = uz.length;
-       if (!(Mz <= 0 || Hz <= 0)) {
-         var Oz = zz[0].length >>> 1;
-         if (!(Oz <= 0)) {
-           var pz, dz = nz.mallocDouble(2 * Oz * Mz),
-             Fz = nz.mallocInt32(Mz);
-           if ((Mz = tz(zz, Oz, dz, Fz)) > 0) {
-             if (1 === Oz && Ez) iz.init(Mz), pz = iz.sweepComplete(Oz, bz, 0, Mz, dz, Fz, 0, Mz, dz, Fz);
-             else {
-               var Zz = nz.mallocDouble(2 * Oz * Hz),
-                 Rz = nz.mallocInt32(Hz);
-               (Hz = tz(uz, Oz, Zz, Rz)) > 0 && (iz.init(Mz + Hz), pz = 1 === Oz ? iz.sweepBipartite(Oz, bz, 0, Mz, dz, Fz, 0, Hz, Zz, Rz) : lz(Oz, bz, Ez, Mz, dz, Fz, Hz, Zz, Rz), nz.free(Zz), nz.free(Rz))
-             }
-             nz.free(dz), nz.free(Fz)
- ... (4 more removed lines; see GitHub link above)
+     function Oq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return qq < Eq - Yq || qq > gq + Yq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L249` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L31) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L249)

```diff
-       Ez.push([zz, uz])
+       return qq === Eq ? qq : Math.random() * (Eq - qq) + qq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L513-L522` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L35) · [Before (L513-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L513-L522)

```diff
-       for (var Ez = 2 * (zz + 1), nz = zz + 1; nz <= uz; ++nz) {
-         for (var iz = bz[Ez++], lz = bz[Ez++], Mz = nz, tz = Ez - 2; Mz-- > zz;) {
-           var Hz = bz[tz - 2],
-             Oz = bz[tz - 1];
-           if (Hz < iz) break;
-           if (Hz === iz && Oz < lz) break;
-           bz[tz] = Hz, bz[tz + 1] = Oz, tz -= 2
-         }
-         bz[tz] = iz, bz[tz + 1] = lz
-       }
+       return qq + (Eq - qq) * gq
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L526-L529` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L39-L40) · [Before (L526-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L526-L529)

```diff
-       uz *= 2;
-       var Ez = bz[zz *= 2],
-         nz = bz[zz + 1];
-       bz[zz] = bz[uz], bz[zz + 1] = bz[uz + 1], bz[uz] = Ez, bz[uz + 1] = nz
+       let Yq = dq(Eq - qq, 360);
+       return Yq > 180 && (Yq -= 360), qq + Yq * Wq(gq)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L533-L540` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L44-L45) · [Before (L533-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L533-L540)

```diff
-       uz *= 2, bz[zz *= 2] = bz[uz], bz[zz + 1] = bz[uz + 1]
-     }
- 
-     function iz(zz, uz, bz, Ez) {
-       uz *= 2, bz *= 2;
-       var nz = Ez[zz *= 2],
-         iz = Ez[zz + 1];
-       Ez[zz] = Ez[uz], Ez[zz + 1] = Ez[uz + 1], Ez[uz] = Ez[bz], Ez[uz + 1] = Ez[bz + 1], Ez[bz] = nz, Ez[bz + 1] = iz
+       let Yq;
+       return Yq = qq != Eq ? Wq((gq - qq) / (Eq - qq)) : 0, Yq
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L544-L1115` → after: `L49-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L49-L51) · [Before (L544-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L544-L1115)

```diff
-       uz *= 2, nz[zz *= 2] = nz[uz], nz[uz] = bz, nz[zz + 1] = nz[uz + 1], nz[uz + 1] = Ez
-     }
- 
-     function Mz(zz, uz, bz) {
-       uz *= 2;
-       var Ez = bz[zz *= 2],
-         nz = bz[uz];
-       return !(Ez < nz) && (Ez !== nz || bz[zz + 1] > bz[uz + 1])
-     }
- 
-     function tz(zz, uz, bz, Ez) {
-       var nz = Ez[zz *= 2];
-       return nz < uz || nz === uz && Ez[zz + 1] < bz
-     }
- 
-     function Hz(zz, Oz, pz) {
- ... (556 more removed lines; see GitHub link above)
+       const Oq = lq * lq,
+         mq = lq * Oq;
+       return qq * (2 * mq - 3 * Oq + 1) + gq * (-2 * mq + 3 * Oq) + Eq * (mq - 2 * Oq + lq) + Yq * (mq - Oq)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1118-L1129` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L54-L56) · [Before (L1118-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1118-L1129)

```diff
-     function ez(zz, uz) {
-       return function(bz) {
-         return zz(uz(bz))
-       }
-     }
- 
-     function jz(zz) {
-       var uz = -1,
-         bz = Array(zz.size);
-       return zz.forEach((function(zz) {
-         bz[++uz] = zz
-       })), bz
+     function Bq(qq, Eq, gq, Yq, lq) {
+       const Oq = lq * lq;
+       return 6 * (Oq - lq) * qq + (3 * Oq - 4 * lq + 1) * Eq + 6 * (-Oq + lq) * gq + (3 * Oq - 2 * lq) * Yq
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1168-L1173` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L60-L62) · [Before (L1168-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1168-L1173)

```diff
-       var uz = -1,
-         bz = zz ? zz.length : 0;
-       for (this.clear(); ++uz < bz;) {
-         var Ez = zz[uz];
-         this.set(Ez[0], Ez[1])
-       }
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       return Math.min(gq, Math.max(Eq, qq))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1177-L1182` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L66) · [Before (L1177-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1177-L1182)

```diff
-       var uz = -1,
-         bz = zz ? zz.length : 0;
-       for (this.clear(); ++uz < bz;) {
-         var Ez = zz[uz];
-         this.set(Ez[0], Ez[1])
-       }
+       return qq -= 2 * Math.PI * Math.floor((qq + Math.PI) / (2 * Math.PI))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1186-L1191` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L70-L71) · [Before (L1186-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1186-L1191)

```diff
-       var uz = -1,
-         bz = zz ? zz.length : 0;
-       for (this.clear(); ++uz < bz;) {
-         var Ez = zz[uz];
-         this.set(Ez[0], Ez[1])
-       }
+       const Eq = qq.toString(16);
+       return qq <= 15 ? ("0" + Eq).toUpperCase() : Eq.toUpperCase()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1195-L1211` → after: `L75-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L75-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L75-L83) · [Before (L1195-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1195-L1211)

```diff
-       this.__data__ = new Tu(zz)
-     }
- 
-     function Gu(zz, uz) {
-       var bz = ju(zz) || function(zz) {
-           return function(zz) {
-             return function(zz) {
-               return !!zz && "object" == typeof zz
-             }(zz) && Iu(zz)
-           }(zz) && uu.call(zz, "callee") && (!Hu.call(zz, "callee") || bu.call(zz) == iz)
-         }(zz) ? function(zz, uz) {
-           for (var bz = -1, Ez = Array(zz); ++bz < zz;) Ez[bz] = uz(bz);
-           return Ez
-         }(zz.length, String) : [],
-         Ez = bz.length,
-         nz = !!Ez;
- ... (1 more removed lines; see GitHub link above)
+       if (Math.log2) return Math.floor(Math.log2(qq));
+       if (qq < 0) return NaN;
+       if (0 === qq) return -1 / 0;
+       let Eq = 0;
+       if (qq < 1) {
+         for (; qq < 1;) Eq++, qq *= 2;
+         Eq = -Eq
+       } else if (qq > 1)
+         for (; qq > 1;) Eq++, qq = Math.floor(qq / 2);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1221-L1341` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L88) · [Before (L1221-L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1221-L1341)

```diff
-       for (var bz = zz.length; bz--;)
-         if (eu(zz[bz][0], uz)) return bz;
-       return -1
-     }
- 
-     function mu(zz, uz, bz, Ez, nz, Fz, Xz) {
-       var Gz;
-       if (Ez && (Gz = Fz ? Ez(zz, nz, Fz, Xz) : Ez(zz)), void 0 !== Gz) return Gz;
-       if (!Yu(zz)) return zz;
-       var az = ju(zz);
-       if (az) {
-         if (Gz = function(zz) {
-             var uz = zz.length,
-               bz = zz.constructor(uz);
-             uz && "string" == typeof zz[0] && uu.call(zz, "index") && (bz.index = zz.index, bz.input = zz.input);
-             return bz
- ... (105 more removed lines; see GitHub link above)
+       return qq - Math.floor(qq / Eq) * Eq
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1344-L1351` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L91-L92) · [Before (L1344-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1344-L1351)

```diff
-     function Uu(zz, uz, bz, Ez) {
-       bz || (bz = {});
-       for (var nz = -1, iz = uz.length; ++nz < iz;) {
-         var lz = uz[nz],
-           Mz = Ez ? Ez(bz[lz], zz[lz], lz, bz, zz) : void 0;
-         au(bz, lz, void 0 === Mz ? zz[lz] : Mz)
-       }
-       return bz
+     function jq(qq, Eq, gq) {
+       return (qq - Eq) / (gq - Eq)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1354-L1359` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L95-L96) · [Before (L1354-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1354-L1359)

```diff
-     function cu(zz, uz) {
-       var bz = zz.__data__;
-       return function(zz) {
-         var uz = typeof zz;
-         return "string" == uz || "number" == uz || "symbol" == uz || "boolean" == uz ? "__proto__" !== zz : null === zz
-       }(uz) ? bz["string" == typeof uz ? "string" : "hash"] : bz.map
+     function Hq(qq, Eq, gq) {
+       return qq * (gq - Eq) + Eq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1363-L1366` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L100-L101) · [Before (L1363-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1363-L1366)

```diff
-       var bz = function(zz, uz) {
-         return null == zz ? void 0 : zz[uz]
-       }(zz, uz);
-       return qu(bz) ? bz : void 0
+       let gq = dq(Eq - qq, 360);
+       return gq > 180 && (gq -= 360), gq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1439` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L105-L106) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1439)

```diff
-       return !!(uz = null == uz ? nz : uz) && ("number" == typeof zz || az.test(zz)) && zz > -1 && zz % 1 == 0 && zz < uz
+       const gq = dq(qq, 2 * Eq);
+       return Eq - Math.abs(gq - Eq)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1442-L1444` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L109-L111) · [Before (L1442-L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1442-L1444)

```diff
-     function Qu(zz) {
-       var uz = zz && zz.constructor;
-       return zz === ("function" == typeof uz && uz.prototype || Cz)
+     function Qq(qq, Eq, gq) {
+       let Yq = Wq(gq);
+       return Yq = -2 * Yq * Yq * Yq + 3 * Yq * Yq, Eq * Yq + qq * (1 - Yq)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1447-L1456` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L114-L116) · [Before (L1447-L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1447-L1456)

```diff
-     function Wu(zz) {
-       if (null != zz) {
-         try {
-           return zu.call(zz)
-         } catch (uz) {}
-         try {
-           return zz + ""
-         } catch (uz) {}
-       }
-       return ""
+     function yq(qq, Eq, gq) {
+       let Yq;
+       return Yq = Math.abs(Eq - qq) <= gq ? Eq : qq + Math.sign(Eq - qq) * gq, Yq
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1459-L1484` → after: `L119-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L119-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L119-L122) · [Before (L1459-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1459-L1484)

```diff
-     function eu(zz, uz) {
-       return zz === uz || zz !== zz && uz !== uz
-     }(Zu && yu(new Zu(new ArrayBuffer(1))) != sz || Ru && yu(new Ru) != Oz || Ku && yu(Ku.resolve()) != Fz || wu && yu(new wu) != Rz || Xu && yu(new Xu) != Xz) && (yu = function(zz) {
-       var uz = bu.call(zz),
-         bz = uz == dz ? zz.constructor : void 0,
-         Ez = bz ? Wu(bz) : void 0;
-       if (Ez) switch (Ez) {
-         case su:
-           return sz;
-         case ru:
-           return Oz;
-         case ou:
-           return Fz;
-         case Nu:
-           return Rz;
-         case vu:
- ... (10 more removed lines; see GitHub link above)
+     function tq(qq, Eq, gq) {
+       const Yq = oq(qq, Eq);
+       let lq;
+       return lq = -gq < Yq && Yq < gq ? Eq : yq(qq, Eq = qq + Yq, gq), lq
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1490-L1492` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L125-L126) · [Before (L1490-L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1490-L1492)

```diff
-     function Cu(zz) {
-       var uz = Yu(zz) ? bu.call(zz) : "";
-       return uz == tz || uz == Hz
+     function rq(qq, Eq, gq) {
+       return (qq - Eq) / (gq - Eq)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1495-L1497` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L129-L130) · [Before (L1495-L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1495-L1497)

```diff
-     function Yu(zz) {
-       var uz = typeof zz;
-       return !!zz && ("object" == uz || "function" == uz)
+     function vq(qq, Eq, gq) {
+       return (gq - Eq) * qq + Eq
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1500-L1509` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L133-L135) · [Before (L1500-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1500-L1509)

```diff
-     function ku(zz) {
-       return Iu(zz) ? Gu(zz) : function(zz) {
-         if (!Qu(zz)) return Fu(zz);
-         var uz = [];
-         for (var bz in Object(zz)) uu.call(zz, bz) && "constructor" != bz && uz.push(bz);
-         return uz
-       }(zz)
-     }
-     zz.exports = function(zz) {
-       return mu(zz, !0, !0)
+     function hq(qq, Eq) {
+       const gq = qq % Eq;
+       return 0 === gq ? Eq : hq(Eq, gq)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1512-L1516` → after: `L164-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L164-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L164-L177) · [Before (L1512-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1512-L1516)

```diff
-   37182: (zz, uz, bz) => {
-     var Ez = bz(37190),
-       nz = bz(37194),
-       iz = "undefined" !== typeof Float64Array;
- 
+   37131: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       Matrix: () => Yq.e,
+       Quaternion: () => Yq.h,
+       RegisterMathVector: () => Yq.l,
+       TmpVectors: () => Yq.o,
+       Vector2: () => Yq.p,
+       Na: () => Yq.q,
+       Vector4: () => Yq.r
+     });
+     var Yq = gq(37139);
+     (0, Yq.l)()
+   },
+   37149: (qq, Eq, gq) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1518-L1527` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L179-L180) · [Before (L1518-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1518-L1527)

```diff
-       return zz[0] - uz[0]
-     }
- 
-     function Mz() {
-       var zz, uz = this.stride,
-         bz = new Array(uz.length);
-       for (zz = 0; zz < bz.length; ++zz) bz[zz] = [Math.abs(uz[zz]), zz];
-       bz.sort(lz);
-       var Ez = new Array(bz.length);
-       for (zz = 0; zz < Ez.length; ++zz) Ez[zz] = bz[zz][1];
+       const gq = [];
+       for (let Yq = 0; Yq < qq; ++Yq) gq.push(Eq());
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1532-L1598` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L185) · [Before (L1532-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1532-L1598)

```diff
-       var bz = ["View", uz, "d", zz].join("");
-       uz < 0 && (bz = "View_Nil" + zz);
-       var nz = "generic" === zz;
-       if (-1 === uz) {
-         var iz = "function " + bz + "(a){this.data=a;};var proto=" + bz + ".prototype;proto.dtype='" + zz + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return  … [truncated]
-         return new Function(iz)()
-       }
-       if (0 === uz) {
-         iz = "function " + bz + "(a,d) {this.data = a;this.offset = d};var proto=" + bz + ".prototype;proto.dtype='" + zz + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto … [truncated]
-         return new Function("TrivialArray", iz)(Hz[zz][0])
-       }
-       iz = ["'use strict'"];
-       var lz = Ez(uz),
-         tz = lz.map((function(zz) {
-           return "i" + zz
-         })),
- ... (51 more removed lines; see GitHub link above)
+       return Yq(qq, Eq)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1825` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L188-L190) · [Before (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1825)

```diff
-       b: () => nz
+       e: () => Yq,
+       h: () => lq,
+       k: () => mq
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1827-L1903` → after: `L192-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L192-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L192-L211) · [Before (L1827-L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1827-L1903)

```diff
-     var Ez = bz(36519);
-     class nz {
-       constructor(zz, uz, bz, nz) {
-         this.normal = new Ez.n(zz, uz, bz), this.d = nz
-       }
-       obz() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new nz(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let zz = this.normal.getHashCode();
- ... (61 more removed lines; see GitHub link above)
+     const Oq = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function mq(qq, Eq) {
+       const gq = Oq.map((gq => function(qq, Eq, gq) {
+         const Yq = qq[Eq];
+         if ("function" !== typeof Yq) return null;
+         const lq = function() {
+           const Yq = qq.length,
+             Oq = lq.previous.apply(qq, arguments);
+           return gq(Eq, Yq), Oq
+         };
+         return Yq.next = lq, lq.previous = Yq, qq[Eq] = lq, () => {
+           const gq = lq.previous;
+           if (!gq) return;
+           const Yq = lq.next;
+           Yq ? (gq.next = Yq, Yq.previous = gq) : (gq.next = void 0, qq[Eq] = gq), lq.next = void 0, lq.previous = void 0
+ ... (4 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1921` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L215) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1921)

```diff
-   37519: (zz, uz, bz) => {
+   37171: (qq, Eq, gq) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1923` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L217-L218) · [Before (L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1923)

```diff
-       d: () => Ez
+       e: () => Oq,
+       g: () => lq
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1925-L1937` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L220-L223) · [Before (L1925-L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1925-L1937)

```diff
-     class Ez {
-       constructor(zz, uz, bz, Ez) {
-         this.x = zz, this.y = uz, this.width = bz, this.height = Ez
-       }
-       toGlobal(zz, uz) {
-         return new Ez(this.x * zz, this.y * uz, this.width * zz, this.height * uz)
-       }
-       toGlobalToRef(zz, uz, bz) {
-         return bz.x = this.x * zz, bz.y = this.y * uz, bz.width = this.width * zz, bz.height = this.height * uz, this
-       }
-       clone() {
-         return new Ez(this.x, this.y, this.width, this.height)
-       }
+     const Yq = {};
+ 
+     function lq(qq, Eq) {
+       Yq[qq] = Eq
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L1939-L1945` → after: `L225-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/222.js#L225-L227) · [Before (L1939-L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/222.js#L1939-L1945)

```diff
-   },
-   37335: (zz, uz, bz) => {
-     function Ez() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
-         const uz = 16 * Math.random() | 0;
-         return ("x" === zz ? uz : 3 & uz | 8).toString(16)
-       }))
+ 
+     function Oq(qq) {
+       return Yq[qq]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/223.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/223.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L2)

```diff
- export const ids = [223, 229, 232];
+ export const ids = [223, 230];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L4-L7` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L5-L25) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L4-L7)

```diff
-   39402: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => lz,
-       i: () => Mz
+   38280: qq => {
+     qq.exports = function(qq) {
+       return null != qq && null != qq.constructor && "function" === typeof qq.constructor.isBuffer && qq.constructor.isBuffer(qq)
+     }
+   },
+   38264: (qq, Eq, gq) => {
+     var Yq = gq(38267),
+       lq = gq(38273),
+       Oq = gq(38280);
+     gq.g.__TYPEDARRAY_POOL || (gq.g.__TYPEDARRAY_POOL = {
+       UINT8: lq([32, 0]),
+       UINT16: lq([32, 0]),
+       UINT32: lq([32, 0]),
+       INT8: lq([32, 0]),
+       INT16: lq([32, 0]),
+       INT32: lq([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L9-L19` → after: `L27-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L27-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L27-L37) · [Before (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L9-L19)

```diff
-     var Ez = bz(38060),
-       nz = bz(39182),
-       iz = bz(39376),
-       lz = {};
-     class Mz {
-       constructor(zz) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = zz, this.checkInputs = () => {}
-       }
-       add(zz) {
-         const uz = zz.getSimpleName();
-         this.attached[uz] ? Ez.e.Warn("camera input of type " + uz + " already exists on camera") : (this.attached[uz] = zz, zz.camera = this.camera, zz.checkInputs && (this.checkInputs = this._addCheckInputs(zz.checkInputs.bind(zz))), this.attachedToElement && zz.attachControl(t … [truncated]
+     var mq = "undefined" !== typeof Uint8ClampedArray,
+       xq = gq.g.__TYPEDARRAY_POOL;
+     xq.UINT8C || (xq.UINT8C = lq([32, 0])), xq.BUFFER || (xq.BUFFER = lq([32, 0]));
+     var Aq = xq.DATA,
+       cq = xq.BUFFER;
+ 
+     function uq(qq) {
+       if (qq) {
+         var Eq = qq.length || qq.byteLength,
+           gq = Yq.log2(Eq);
+         Aq[gq].push(qq)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L21-L24` → after: `L39-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L39-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L39-L220) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L21-L24)

```diff
-       remove(zz) {
-         for (const uz in this.attached) {
-           const bz = this.attached[uz];
-           if (bz === zz) return bz.detachControl(), bz.camera = null, delete this.attached[uz], void this.rebuildInputCheck()
+     }
+ 
+     function Bq(qq) {
+       qq = Yq.nextPow2(qq);
+       var Eq = Yq.log2(qq),
+         gq = Aq[Eq];
+       return gq.length > 0 ? gq.pop() : new ArrayBuffer(qq)
+     }
+ 
+     function Wq(qq) {
+       return new Uint8Array(Bq(qq), 0, qq)
+     }
+ 
+     function Nq(qq) {
+       return new Uint16Array(Bq(2 * qq), 0, qq)
+     }
+ ... (166 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L27-L30` → after: `L223-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L223-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L223-L243) · [Before (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L27-L30)

```diff
-       removeByType(zz) {
-         for (const uz in this.attached) {
-           const bz = this.attached[uz];
-           bz.getClassName() === zz && (bz.detachControl(), bz.camera = null, delete this.attached[uz], this.rebuildInputCheck())
+       return Oq
+     }
+ 
+     function cq(qq, Eq, gq, Yq) {
+       var xq = qq.length,
+         cq = Eq.length;
+       if (!(xq <= 0 || cq <= 0)) {
+         var uq = qq[0].length >>> 1;
+         if (!(uq <= 0)) {
+           var Bq, Wq = lq.mallocDouble(2 * uq * xq),
+             Nq = lq.mallocInt32(xq);
+           if ((xq = Aq(qq, uq, Wq, Nq)) > 0) {
+             if (1 === uq && Yq) Oq.init(xq), Bq = Oq.sweepComplete(uq, gq, 0, xq, Wq, Nq, 0, xq, Wq, Nq);
+             else {
+               var aq = lq.mallocDouble(2 * uq * cq),
+                 Vq = lq.mallocInt32(cq);
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L33-L37` → after: `L246-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L246-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L246-L283) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L33-L37)

```diff
-       _addCheckInputs(zz) {
-         const uz = this.checkInputs;
-         return () => {
-           uz(), zz()
-         }
+     }
+ 
+     function uq(qq, Eq) {
+       Yq.push([qq, Eq])
+     }
+   },
+   38309: (qq, Eq) => {
+     var gq = "d",
+       Yq = "ax",
+       lq = "fp",
+       Oq = "es",
+       mq = "rs",
+       xq = "re",
+       Aq = "rb",
+       cq = "bs",
+       uq = "be",
+ ... (22 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L39-L40` → after: `L285-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L285-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L285-L364) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L39-L40)

```diff
-       attachInput(zz) {
-         this.attachedToElement && zz.attachControl(this.noPreventDefault)
+       xq.push("if(re-rs>be-bs){"), qq ? (Aq(!0, !1), xq.push("}else{"), Aq(!1, !1)) : (xq.push("if(fp){"), Aq(!0, !0), xq.push("}else{"), Aq(!0, !1), xq.push("}}else{if(fp){"), Aq(!1, !0), xq.push("}else{"), Aq(!1, !1), xq.push("}")), xq.push("}}return " + Eq);
+       var cq = Yq.join("") + xq.join("");
+       return new Function(cq)()
+     }
+     Eq.partial = Nq(!1), Eq.full = Nq(!0)
+   },
+   38302: (qq, Eq, gq) => {
+     qq.exports = function(qq, Eq, gq, Oq, uq, nq, bq, iq, Zq) {
+       ! function(qq, Eq) {
+         var gq = 8 * lq.log2(Eq + 1) * (qq + 1) | 0,
+           Oq = lq.nextPow2(Pq * gq);
+         yq.length < Oq && (Yq.free(yq), yq = Yq.mallocInt32(Oq));
+         var mq = lq.nextPow2(Qq * gq);
+         tq.length < mq && (Yq.free(tq), tq = Yq.mallocDouble(mq))
+       }(qq, Oq + bq);
+       var fq, Mq = 0,
+ ... (64 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L42-L46` → after: `L366-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L366-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L366-L410) · [Before (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L42-L46)

```diff
-       attachElement() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (!this.attachedToElement) {
-           zz = !iz.d.ForceAttachControlToAlwaysPreventDefault && zz, this.attachedToElement = !0, this.noPreventDefault = zz;
-           for (const uz in this.attached) this.attached[uz].attachControl(zz)
+     };
+     var Yq = gq(38264),
+       lq = gq(38267),
+       Oq = gq(38309),
+       mq = Oq.partial,
+       xq = Oq.full,
+       Aq = gq(38284),
+       cq = gq(38317),
+       uq = gq(38319),
+       Bq = 128,
+       Wq = 1 << 22,
+       Nq = 1 << 22,
+       aq = uq("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
+       Vq = uq("lo===p0", ["p0"]),
+       dq = uq("lo<p0", ["p0"]),
+       jq = uq("hi<=p0", ["p0"]),
+ ... (29 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L49-L52` → after: `L413-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L413-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L413-L434) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L49-L52)

```diff
-       detachElement() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         for (const uz in this.attached) this.attached[uz].detachControl(), zz && (this.attached[uz].camera = null);
-         this.attachedToElement = !1
+     }
+ 
+     function hq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
+       var uq = 2 * qq,
+         Bq = xq * uq,
+         Wq = Aq[Bq + Eq];
+       qq: for (var Nq = Yq, aq = Yq * uq; Nq < lq; ++Nq, aq += uq) {
+         var Vq = mq[Nq];
+         if (Vq !== cq) {
+           var dq = Oq[aq + Eq],
+             jq = Oq[aq + Eq + qq];
+           if (!(Wq < dq || jq < Wq)) {
+             for (var Hq = Eq + 1; Hq < qq; ++Hq) {
+               dq = Oq[aq + Hq], jq = Oq[aq + Hq + qq];
+               var oq = Aq[Bq + Hq],
+                 Pq = Aq[Bq + Hq + qq];
+ ... (6 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L54-L58` → after: `L436-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L436-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L436-L476) · [Before (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L54-L58)

```diff
-       rebuildInputCheck() {
-         this.checkInputs = () => {};
-         for (const zz in this.attached) {
-           const uz = this.attached[zz];
-           uz.checkInputs && (this.checkInputs = this._addCheckInputs(uz.checkInputs.bind(uz)))
+     }
+   },
+   38317: (qq, Eq, gq) => {
+     qq.exports = function(qq, Eq, gq, mq, xq, Aq) {
+       if (mq <= gq + 1) return gq;
+       var cq = gq,
+         uq = mq,
+         Bq = mq + gq >>> 1,
+         Wq = 2 * qq,
+         Nq = Bq,
+         aq = xq[Wq * Bq + Eq];
+       for (; cq < uq;) {
+         if (uq - cq < lq) {
+           Oq(qq, Eq, cq, uq, xq, Aq), aq = xq[Wq * Bq + Eq];
+           break
+         }
+ ... (25 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L61-L62` → after: `L479-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L479-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L479-L521) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L61-L62)

```diff
-       clear() {
-         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       return Yq(qq, Eq, gq, Bq, xq, Aq, xq[Wq * Bq + Eq])
+     };
+     var Yq = gq(38319)("lo<p0", ["p0"]),
+       lq = 8;
+ 
+     function Oq(qq, Eq, gq, Yq, lq, Oq) {
+       for (var mq = 2 * qq, xq = mq * (gq + 1) + Eq, Aq = gq + 1; Aq < Yq; ++Aq, xq += mq)
+         for (var cq = lq[xq], uq = Aq, Bq = mq * (Aq - 1); uq > gq && lq[Bq + Eq] > cq; --uq, Bq -= mq) {
+           for (var Wq = Bq, Nq = Bq + mq, aq = 0; aq < mq; ++aq, ++Wq, ++Nq) {
+             var Vq = lq[Wq];
+             lq[Wq] = lq[Nq], lq[Nq] = Vq
+           }
+           var dq = Oq[uq];
+           Oq[uq] = Oq[uq - 1], Oq[uq - 1] = dq
+         }
+     }
+ ... (27 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L64-L69` → after: `L523-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L523-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L523-L590) · [Before (L64-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L64-L69)

```diff
-       serialize(zz) {
-         const uz = {};
-         for (const bz in this.attached) {
-           const zz = this.attached[bz],
-             Ez = nz.e.Serialize(zz);
-           uz[zz.getClassName()] = Ez
+     }
+ 
+     function Yq(qq, Eq, gq) {
+       Eq *= 2;
+       var Yq = gq[qq *= 2],
+         lq = gq[qq + 1];
+       gq[qq] = gq[Eq], gq[qq + 1] = gq[Eq + 1], gq[Eq] = Yq, gq[Eq + 1] = lq
+     }
+ 
+     function lq(qq, Eq, gq) {
+       Eq *= 2, gq[qq *= 2] = gq[Eq], gq[qq + 1] = gq[Eq + 1]
+     }
+ 
+     function Oq(qq, Eq, gq, Yq) {
+       Eq *= 2, gq *= 2;
+       var lq = Yq[qq *= 2],
+ ... (52 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L71-L82` → after: `L592-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L592-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L592-L637) · [Before (L71-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L71-L82)

```diff
-         zz.inputsmgr = uz
-       }
-       parse(zz) {
-         const uz = zz.inputsmgr;
-         if (uz) {
-           this.clear();
-           for (const zz in uz) {
-             const bz = lz[zz];
-             if (bz) {
-               const Ez = uz[zz],
-                 iz = nz.e.Parse((() => new bz), Ez, null);
-               this.add(iz)
+       mq(qq, tq - 1, hq, nq, Bq), mq(uq, rq + 1, bq, iq, Bq), tq - 2 - qq <= Eq ? gq(qq, tq - 2, Bq) : cq(qq, tq - 2, Bq), uq - (rq + 2) <= Eq ? gq(rq + 2, uq, Bq) : cq(rq + 2, uq, Bq), rq - tq <= Eq ? gq(tq, rq, Bq) : cq(tq, rq, Bq)
+     }
+   },
+   38284: (qq, Eq, gq) => {
+     qq.exports = {
+       init: function(qq) {
+         var Eq = lq.nextPow2(qq);
+         Aq.length < Eq && (Yq.free(Aq), Aq = Yq.mallocInt32(Eq));
+         cq.length < Eq && (Yq.free(cq), cq = Yq.mallocInt32(Eq));
+         uq.length < Eq && (Yq.free(uq), uq = Yq.mallocInt32(Eq));
+         Bq.length < Eq && (Yq.free(Bq), Bq = Yq.mallocInt32(Eq));
+         Wq.length < Eq && (Yq.free(Wq), Wq = Yq.mallocInt32(Eq));
+         Nq.length < Eq && (Yq.free(Nq), Nq = Yq.mallocInt32(Eq));
+         var gq = 8 * Eq;
+         aq.length < gq && (Yq.free(aq), aq = Yq.mallocDouble(gq))
+       },
+ ... (30 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L85-L90` → after: `L641-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L641-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L641-L761) · [Before (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L85-L90)

```diff
-         } else
-           for (const bz in this.attached) {
-             const uz = lz[this.attached[bz].getClassName()];
-             if (uz) {
-               const Ez = nz.e.Parse((() => new uz), zz, null);
-               this.remove(this.attached[bz]), this.add(Ez)
+         }
+       },
+       sweepComplete: function(qq, Eq, gq, Yq, lq, mq, xq, jq, Hq, oq) {
+         for (var Pq = 0, Qq = 2 * qq, yq = qq - 1, tq = Qq - 1, rq = gq; rq < Yq; ++rq) {
+           var vq = mq[rq] + 1 << 1,
+             hq = Qq * rq;
+           aq[Pq++] = lq[hq + yq], aq[Pq++] = -vq, aq[Pq++] = lq[hq + tq], aq[Pq++] = vq
+         }
+         for (rq = xq; rq < jq; ++rq) {
+           vq = oq[rq] + 1 << 1;
+           var nq = Qq * rq;
+           aq[Pq++] = Hq[nq + yq], aq[Pq++] = 1 | -vq, aq[Pq++] = Hq[nq + tq], aq[Pq++] = 1 | vq
+         }
+         var bq = Pq >>> 1;
+         Oq(aq, bq);
+         var iq = 0,
+ ... (105 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L96-L101` → after: `L796-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L796-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L796-L820) · [Before (L96-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L96-L101)

```diff
-   39406: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => Ez.c
-     });
-     var Ez = bz(39412);
-     (0, Ez.e)()
+   38273: qq => {
+     function Eq(qq, gq, Yq) {
+       var lq = 0 | qq[Yq];
+       if (lq <= 0) return [];
+       var Oq, mq = new Array(lq);
+       if (Yq === qq.length - 1)
+         for (Oq = 0; Oq < lq; ++Oq) mq[Oq] = gq;
+       else
+         for (Oq = 0; Oq < lq; ++Oq) mq[Oq] = Eq(qq, gq, Yq + 1);
+       return mq
+     }
+     qq.exports = function(qq, gq) {
+       switch ("undefined" === typeof gq && (gq = 0), typeof qq) {
+         case "number":
+           if (qq > 0) return function(qq, Eq) {
+             var gq, Yq;
+ ... (9 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L103-L147` → after: `L822-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L822-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L822-L864) · [Before (L103-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L103-L147)

```diff
-   39412: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => Oz,
-       e: () => dz
-     });
-     var Ez = bz(39170),
-       nz = bz(39172),
-       iz = bz(36519),
-       lz = bz(36715),
-       Mz = bz(39421),
-       tz = bz(39384),
-       Hz = bz(36564);
-     let Oz = (() => {
-         var zz;
-         let uz, bz, tz = Mz.b,
-           Hz = [],
- ... (29 more removed lines; see GitHub link above)
+   38224: (qq, Eq, gq) => {
+     qq.exports = function() {
+       var qq = this;
+       this.components = {}, this.comps = this.components;
+       var Eq = this.components,
+         gq = 1,
+         lq = {},
+         Oq = [],
+         mq = [],
+         xq = {
+           timeout: !1,
+           removals: [],
+           multiComps: []
+         };
+ 
+       function Aq(qq, gq) {
+ ... (27 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L149-L150` → after: `L866-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L866-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L866-L869) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L149-L150)

```diff
-           getTypeID() {
-             return Mz.b.LIGHTTYPEID_HEMISPHERICLIGHT
+           qq.length = 0
+         }(xq.multiComps), xq.removals.length && function(qq) {
+           for (var Eq = 0; Eq < qq.length; Eq++) {
+             qq[Eq].flush()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L152-L153` → after: `L871-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L871-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L871-L986) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L152-L153)

```diff
-           prepareLightSpecificDefines(zz, uz) {
-             zz["HEMILIGHT" + uz] = !0
+           qq.length = 0
+         }(xq.removals)
+       }
+       this.qV = lq, this._systems = Oq, this._renderSystems = mq, this.eC = function(Eq) {
+         var Yq = gq++;
+         return Array.isArray(Eq) && Eq.forEach((Eq => qq.zk(Yq, Eq))), Yq
+       }, this.deleteEntity = function(Eq) {
+         return Object.keys(lq).forEach((qq => {
+           lq[qq].hash[Eq] && Aq(Eq, qq)
+         })), qq
+       }, this.ugq = function(qq) {
+         if (!qq) throw new Error("Missing component definition");
+         var gq = qq.name;
+         if (!gq) throw new Error("Component definition must have a name property.");
+         if ("string" !== typeof gq) throw new Error("Component name must be a string.");
+         if ("" === gq) throw new Error("Component name must be a non-empty string.");
+ ... (100 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L155-L191` → after: `L988-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L988-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L988-L1069) · [Before (L155-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L155-L191)

```diff
-         }, (() => {
-           const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(tz[Symbol.metadata] ?? null) : void 0;
-           uz = [(0, nz.q)()], bz = [(0, nz.D)()], (0, Ez.h)(null, null, uz, {
-             kind: "field",
-             name: "groundColor",
-             static: !1,
-             private: !1,
-             access: {
-               has: zz => "groundColor" in zz,
-               get: zz => zz.groundColor,
-               set: (zz, uz) => {
-                 zz.groundColor = uz
-               }
-             },
-             metadata: iz
-           }, Hz, Oz), (0, Ez.h)(null, null, bz, {
- ... (21 more removed lines; see GitHub link above)
+         }(gq, mq, Aq, Oq), qq
+       }
+     };
+     var Yq = gq(38231)
+   },
+   38231: qq => {
+     function Eq(qq, Eq) {
+       var gq = qq._map[Eq];
+       if (delete qq.hash[Eq], delete qq._map[Eq], gq === qq.list.length - 1) qq.list.pop(), qq._idList.pop();
+       else {
+         var Yq = qq.list.pop();
+         qq.list[gq] = Yq;
+         var lq = qq._idList.pop();
+         qq._idList[gq] = lq, qq._map[lq] = gq
+       }
+     }
+ ... (66 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L193-L194` → after: `L1071-L1604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1071-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1071-L1604) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L193-L194)

```diff
-     function dz() {
-       pz || (pz = !0, tz.c.AddNodeConstructor("Light_Type_3", ((zz, uz) => () => new Oz(zz, iz.n.Zero(), uz))), (0, Hz.c)("BABYLON.HemisphericLight", Oz))
+     function kq(qq, Eq) {
+       return qq.set(Eq[0], Eq[1]), qq
+     }
+ 
+     function Rq(qq, Eq) {
+       return qq.add(Eq), qq
+     }
+ 
+     function Uq(qq, Eq, gq, Yq) {
+       var lq = -1,
+         Oq = qq ? qq.length : 0;
+       for (Yq && Oq && (gq = qq[++lq]); ++lq < Oq;) gq = Eq(gq, qq[lq], lq, qq);
+       return gq
+     }
+ 
+     function Fq(qq) {
+ ... (518 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L197` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1607) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L197)

```diff
-   36709: (zz, uz, bz) => {
+   37286: (qq, Eq, gq) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L199-L200` → after: `L1609-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1609-L1610) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L199-L200)

```diff
-       Color3: () => Ez.c,
-       d: () => Ez.g
+       Color3: () => Yq.d,
+       e: () => Yq.g
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L202-L203` → after: `L1612-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1612-L1613) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L202-L203)

```diff
-     var Ez = bz(36715);
-     (0, Ez.j)()
+     var Yq = gq(37289);
+     (0, Yq.h)()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L205` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1615) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L205)

```diff
-   37235: (zz, uz, bz) => {
+   37758: (qq, Eq, gq) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L207` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1617) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L207)

```diff
-       e: () => nz
+       c: () => lq
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L209` → after: `L1619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1619) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L209)

```diff
-     var Ez = bz(37239);
+     var Yq = gq(37767);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L213` → after: `L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1623) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L213)

```diff
-         for (let bz = 0; bz < 6; bz++) uz.push(new Ez.b(0, 0, 0, 0));
+         for (let gq = 0; gq < 6; gq++) Eq.push(new Yq.d(0, 0, 0, 0));
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L250` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1660) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L250)

```diff
-   37239: (zz, uz, bz) => {
+   37767: (qq, Eq, gq) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L252` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1662) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L252)

```diff
-       b: () => nz
+       d: () => lq
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L254` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1664) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L254)

```diff
-     var Ez = bz(36519);
+     var Yq = gq(37139);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L257` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1667) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L257)

```diff
-         this.normal = new Ez.n(zz, uz, bz), this.d = nz
+         this.normal = new Yq.q(qq, Eq, gq), this.d = lq
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L259` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1669) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L259)

```diff
-       obz() {
+       bYq() {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L306` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1716) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L306)

```diff
-         return Fz = 0 !== dz ? 1 / dz : 0, this.normal.x = Hz * Fz, this.normal.y = Oz * Fz, this.normal.z = pz * Fz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
+         return Nq = 0 !== Wq ? 1 / Wq : 0, this.normal.x = cq * Nq, this.normal.y = uq * Nq, this.normal.z = Bq * Nq, this.d = -(this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z), this
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L309` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1719) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L309)

```diff
-         return Ez.n.Dot(this.normal, zz) <= uz
+         return Yq.q.Dot(this.normal, qq) <= Eq
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L312` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1722) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L312)

```diff
-         return Ez.n.Dot(zz, this.normal) + this.d
+         return Yq.q.Dot(qq, this.normal) + this.d
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L326` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1736) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L326)

```diff
-         return bz.normal.euz(uz), bz.normal.normalize(), bz.d = -zz.dot(bz.normal), bz
+         return gq.normal.WG(Eq), gq.normal.normalize(), gq.d = -qq.dot(gq.normal), gq
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L330` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1740) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L330)

```diff
-         return Ez.n.Dot(bz, uz) + nz
+         return Yq.q.Dot(gq, Eq) + lq
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L333` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1743) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L333)

```diff
-     nz._TmpMatrix = Ez.d.Identity()
+     lq._TmpMatrix = Yq.e.Identity()
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L335` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1745) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L335)

```diff
-   36514: (zz, uz, bz) => {
+   37131: (qq, Eq, gq) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L337` → after: `L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1747) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L337)

```diff
-       Matrix: () => Ez.d,
+       Matrix: () => Yq.e,
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L339-L342` → after: `L1749-L1752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1749-L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1749-L1752) · [Before (L339-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L339-L342)

```diff
-       RegisterMathVector: () => Ez.j,
-       TmpVectors: () => Ez.l,
-       Vector2: () => Ez.m,
-       ER: () => Ez.n,
+       RegisterMathVector: () => Yq.l,
+       TmpVectors: () => Yq.o,
+       Vector2: () => Yq.p,
+       Na: () => Yq.q,
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L345-L346` → after: `L1755-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1755-L1756) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L345-L346)

```diff
-     var Ez = bz(36519);
-     (0, Ez.j)()
+     var Yq = gq(37139);
+     (0, Yq.l)()
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L348` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1758) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L348)

```diff
-   37519: (zz, uz, bz) => {
+   38065: (qq, Eq, gq) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L350` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1760) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L350)

```diff
-       d: () => Ez
+       c: () => Yq
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L367-L751` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1777) · [Before (L367-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L367-L751)

```diff
-   39582: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Hz
-     });
-     var Ez = bz(36519),
-       nz = bz(36715),
-       iz = bz(39584),
-       lz = bz(39596),
-       Mz = bz(39609);
- 
-     function tz(zz) {
-       let uz = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
-       const bz = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
-         iz = [],
-         tz = zz.width || zz.size || 1,
-         Hz = zz.height || zz.size || 1,
- ... (369 more removed lines; see GitHub link above)
+   37872: (qq, Eq, gq) => {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L755` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1781) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L755)

```diff
-         return ("x" === zz ? uz : 3 & uz | 8).toString(16)
+         return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L759` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/223.js#L1785) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/223.js#L759)

```diff
-       c: () => Ez
+       d: () => Yq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/224.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/224.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L2)

```diff
- export const ids = [224, 229];
+ export const ids = [224, 230, 233];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L4)

```diff
-   41037: (zz, uz, bz) => {
+   39980: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L6)

```diff
-       b: () => lz
+       d: () => mq,
+       f: () => xq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L8-L21` → after: `L9-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L9-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L9-L83) · [Before (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L8-L21)

```diff
-     var Ez = bz(40972),
-       nz = bz(39167);
-     let iz = !1;
- 
-     function lz() {
-       iz || (iz = !0, nz.b.prototype._sphericalPolynomialTargetSize = 0, nz.b.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(nz.b.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Ez.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = zz, this._texture._sphericalPolynomialComputed = !0
-             }))), null
+     var Yq = gq(38653),
+       lq = gq(39779),
+       Oq = gq(39951),
+       mq = {};
+     class xq {
+       constructor(qq) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = qq, this.checkInputs = () => {}
+       }
+       add(qq) {
+         const Eq = qq.getSimpleName();
+         this.attached[Eq] ? Yq.b.Warn("camera input of type " + Eq + " already exists on camera") : (this.attached[Eq] = qq, qq.camera = this.camera, qq.checkInputs && (this.checkInputs = this._addCheckInputs(qq.checkInputs.bind(qq))), this.attachedToElement && qq.attachControl(t … [truncated]
+       }
+       remove(qq) {
+         for (const Eq in this.attached) {
+           const gq = this.attached[Eq];
+           if (gq === qq) return gq.detachControl(), gq.camera = null, delete this.attached[Eq], void this.rebuildInputCheck()
+ ... (59 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L23-L30` → after: `L85-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L85-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L85-L93) · [Before (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L23-L30)

```diff
-           return null
-         },
-         set: function(zz) {
-           this._texture && (this._texture._sphericalPolynomial = zz)
-         },
-         enumerable: !0,
-         configurable: !0
-       }))
+         } else
+           for (const gq in this.attached) {
+             const Eq = mq[this.attached[gq].getClassName()];
+             if (Eq) {
+               const Yq = lq.d.Parse((() => new Eq), qq, null);
+               this.remove(this.attached[gq]), this.add(Yq)
+             }
+           }
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L33` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L96) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L33)

```diff
-   36709: (zz, uz, bz) => {
+   39988: (qq, Eq, gq) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L35-L36` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L98) · [Before (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L35-L36)

```diff
-       Color3: () => Ez.c,
-       d: () => Ez.g
+       d: () => Yq.d
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L38-L39` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L100-L101) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L38-L39)

```diff
-     var Ez = bz(36715);
-     (0, Ez.j)()
+     var Yq = gq(39993);
+     (0, Yq.e)()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L41` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L103) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L41)

```diff
-   37235: (zz, uz, bz) => {
+   39993: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L45` → after: `L108-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L108-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L108-L209) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L45)

```diff
-     var Ez = bz(37239);
+     var Yq = gq(39757),
+       lq = gq(39759),
+       Oq = gq(37139),
+       mq = gq(37289),
+       xq = gq(39995),
+       Aq = gq(39960),
+       cq = gq(37171);
+     let uq = (() => {
+         var qq;
+         let Eq, gq, Aq = xq.c,
+           cq = [],
+           uq = [],
+           Bq = [],
+           Wq = [];
+         return qq = class extends Aq {
+           constructor(qq, Eq, gq, lq) {
+ ... (86 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L49` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L213) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L49)

```diff
-         for (let bz = 0; bz < 6; bz++) uz.push(new Ez.b(0, 0, 0, 0));
+         for (let gq = 0; gq < 6; gq++) Eq.push(new Yq.d(0, 0, 0, 0));
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L86` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L250) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L86)

```diff
-   37239: (zz, uz, bz) => {
+   37767: (qq, Eq, gq) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L88` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L252) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L88)

```diff
-       b: () => nz
+       d: () => lq
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L90` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L254) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L90)

```diff
-     var Ez = bz(36519);
+     var Yq = gq(37139);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L93` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L257) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L93)

```diff
-         this.normal = new Ez.n(zz, uz, bz), this.d = nz
+         this.normal = new Yq.q(qq, Eq, gq), this.d = lq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L95` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L259) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L95)

```diff
-       obz() {
+       bYq() {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L142` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L306) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L142)

```diff
-         return Fz = 0 !== dz ? 1 / dz : 0, this.normal.x = Hz * Fz, this.normal.y = Oz * Fz, this.normal.z = pz * Fz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
+         return Nq = 0 !== Wq ? 1 / Wq : 0, this.normal.x = cq * Nq, this.normal.y = uq * Nq, this.normal.z = Bq * Nq, this.d = -(this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z), this
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L145` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L309) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L145)

```diff
-         return Ez.n.Dot(this.normal, zz) <= uz
+         return Yq.q.Dot(this.normal, qq) <= Eq
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L148` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L312) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L148)

```diff
-         return Ez.n.Dot(zz, this.normal) + this.d
+         return Yq.q.Dot(qq, this.normal) + this.d
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L162` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L326) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L162)

```diff
-         return bz.normal.euz(uz), bz.normal.normalize(), bz.d = -zz.dot(bz.normal), bz
+         return gq.normal.WG(Eq), gq.normal.normalize(), gq.d = -qq.dot(gq.normal), gq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L166` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L330) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L166)

```diff
-         return Ez.n.Dot(bz, uz) + nz
+         return Yq.q.Dot(gq, Eq) + lq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L169` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L333) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L169)

```diff
-     nz._TmpMatrix = Ez.d.Identity()
+     lq._TmpMatrix = Yq.e.Identity()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L171` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L335) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L171)

```diff
-   36514: (zz, uz, bz) => {
+   37131: (qq, Eq, gq) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L173` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L337) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L173)

```diff
-       Matrix: () => Ez.d,
+       Matrix: () => Yq.e,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L175-L178` → after: `L339-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L339-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L339-L342) · [Before (L175-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L175-L178)

```diff
-       RegisterMathVector: () => Ez.j,
-       TmpVectors: () => Ez.l,
-       Vector2: () => Ez.m,
-       ER: () => Ez.n,
+       RegisterMathVector: () => Yq.l,
+       TmpVectors: () => Yq.o,
+       Vector2: () => Yq.p,
+       Na: () => Yq.q,
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L181-L182` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L345-L346) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L181-L182)

```diff
-     var Ez = bz(36519);
-     (0, Ez.j)()
+     var Yq = gq(37139);
+     (0, Yq.l)()
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L184` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L348) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L184)

```diff
-   37519: (zz, uz, bz) => {
+   38065: (qq, Eq, gq) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L186` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L350) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L186)

```diff
-       d: () => Ez
+       c: () => Yq
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L203` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L367) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L203)

```diff
-   40972: (zz, uz, bz) => {
+   40155: (qq, Eq, gq) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L207-L214` → after: `L371-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L371-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L371-L425) · [Before (L207-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L207-L214)

```diff
-     var Ez = bz(36519),
-       nz = bz(36553),
-       iz = bz(39164),
-       lz = bz(36526),
-       Mz = bz(36715);
-     class tz {
-       constructor(zz, uz, bz, Ez) {
-         this.name = zz, this.worldAxisForNormal = uz, this.worldAxisForFileX = bz, this.worldAxisForFileY = Ez
+     var Yq = gq(37139),
+       lq = gq(37289),
+       Oq = gq(40163),
+       mq = gq(40176),
+       xq = gq(40190);
+ 
+     function Aq(qq) {
+       let Eq = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const gq = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         Oq = [],
+         Aq = qq.width || qq.size || 1,
+         cq = qq.height || qq.size || 1,
+         uq = qq.depth || qq.size || 1,
+         Bq = qq.wrap || !1;
+       let Wq = void 0 === qq.topBaseAt ? 1 : qq.topBaseAt,
+         Nq = void 0 === qq.bottomBaseAt ? 0 : qq.bottomBaseAt;
+ ... (39 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L217-L283` → after: `L429-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L429-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L429-L480) · [Before (L217-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L217-L283)

```diff
-     class Hz {
-       static _NearestPow2Floor(zz) {
-         return zz <= 1 ? 1 : 1 << Math.floor(Math.log2(zz))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(zz) {
-         if (!zz.isCube) return null;
-         zz.XT()?.uR().flushFramebuffer();
-         const uz = zz.getSize().width,
-           bz = zz._sphericalPolynomialTargetSize,
-           Ez = bz > 0 ? this._NearestPow2Floor(bz) : 0,
-           nz = !zz.noMipmap && !0 === zz._texture?.generateMipMaps,
-           iz = Ez > 0 && Ez < uz && nz,
-           lz = iz ? Math.max(0, Math.round(Math.log2(uz / Ez))) : 0,
-           Mz = iz ? Math.max(1, Math.floor(uz / Math.pow(2, lz))) : uz,
-           tz = zz.readPixels(0, lz, void 0, !1),
-           Hz = zz.readPixels(1, lz, void 0, !1);
- ... (51 more removed lines; see GitHub link above)
+ 
+     function cq(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Yq = new Oq.e(qq, gq);
+       Eq.sideOrientation = Oq.e._GetDefaultSideOrientation(Eq.sideOrientation), Yq._originalBuilderSideOrientation = Eq.sideOrientation;
+       return Aq(Eq).applyToMesh(Yq, Eq.updatable), Yq
+     }
+     let uq = !1;
+     uq || (uq = !0, mq.d.CreateBox = Aq, Oq.e.CreateBox = function(qq, Eq) {
+       return cq(qq, {
+         size: Eq,
+         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
+         updatable: arguments.length > 3 ? arguments[3] : void 0
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     })
+ ... (36 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L291-L338` → after: `L485-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L485-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L485-L523) · [Before (L291-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L291-L338)

```diff
-       static ConvertCubeMapToSphericalPolynomial(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const bz = uz > 0 ? this._NearestPow2Floor(uz) : 0;
-         if (bz > 0 && zz.size > bz) {
-           const uz = 5 === zz.format ? 4 : 3,
-             Ez = ["right", "left", "up", "down", "front", "back"],
-             nz = {};
-           for (const iz of Ez) nz[iz] = this._DownsampleFace(zz[iz], zz.size, bz, uz);
-           zz = {
-             ...zz,
-             ...nz,
-             size: bz
-           }
-         }
-         const Ez = new iz.c;
-         let tz = 0;
- ... (32 more removed lines; see GitHub link above)
+       const Aq = new Oq.d;
+       return Aq.indices = Eq, Aq.positions = gq, lq && (Aq.colors = mq), Aq
+     }
+ 
+     function uq(qq) {
+       const Eq = qq.dashSize || 3,
+         gq = qq.gapSize || 1,
+         lq = qq.dashNb || 200,
+         mq = qq.points,
+         xq = [],
+         Aq = [],
+         cq = Yq.q.Zero();
+       let uq, Bq, Wq, Nq = 0,
+         aq = 0;
+       for (Wq = 0; Wq < mq.length - 1; Wq++) mq[Wq + 1].subtractToRef(mq[Wq], cq), Nq += cq.length();
+       const Vq = Nq / lq,
+ ... (23 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L340-L341` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L525) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L340-L341)

```diff
-         const Fz = 6 * (4 * Math.PI) / 6 / tz;
-         return Ez.scaleInPlace(Fz), Ez.convertIncidentRadianceToIrradiance(), Ez.convertIrradianceToLambertianRadiance(), iz.g.FromHarmonics(Ez)
+         return Yq.updateVerticesData(xq.g.PositionKind, qq, !1, !1), Oq && Eq && Yq.updateVerticesData(xq.g.ColorKind, Eq, !1, !1), Yq.refreshBoundingInfo(), Yq
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L344-L359` → after: `L531-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L531-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L531-L542) · [Before (L344-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L344-L359)

```diff
-     Hz._FileFaces = [new tz("right", new Ez.n(1, 0, 0), new Ez.n(0, 0, -1), new Ez.n(0, -1, 0)), new tz("left", new Ez.n(-1, 0, 0), new Ez.n(0, 0, 1), new Ez.n(0, -1, 0)), new tz("up", new Ez.n(0, 1, 0), new Ez.n(1, 0, 0), new Ez.n(0, 0, 1)), new tz("down", new Ez.n(0, -1, 0), ne … [truncated]
-   },
-   40763: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Ez.j,
-       g: () => Ez.t
-     });
-     var Ez = bz(39202);
-     (0, Ez.z)()
-   },
-   37335: (zz, uz, bz) => {
-     function Ez() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
-         const uz = 16 * Math.random() | 0;
-         return ("x" === zz ? uz : 3 & uz | 8).toString(16)
-       }))
+ 
+     function Wq(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Yq = Eq.colors ? [Eq.colors] : null;
+       return Bq(qq, {
+         lines: [Eq.points],
+         updatable: Eq.updatable,
+         instance: Eq.instance,
+         colors: Yq,
+         useVertexAlpha: Eq.useVertexAlpha,
+         material: Eq.material
+       }, gq)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L361-L400` → after: `L544-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L544-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L544-L563) · [Before (L361-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L361-L400)

```diff
-     bz.d(uz, {
-       c: () => Ez
-     })
-   },
-   41012: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => iz
-     });
-     var Ez = bz(41e3),
-       nz = bz(41014);
-     class iz {
-       static ExpandRGBDTexture(zz) {
-         const uz = zz._texture;
-         if (!uz || !zz.isRGBD) return;
-         const nz = uz.uR(),
-           iz = nz.getCaps(),
- ... (24 more removed lines; see GitHub link above)
+ 
+     function Nq(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Oq = Eq.points,
+         xq = Eq.instance,
+         cq = Eq.gapSize || 1,
+         Bq = Eq.dashSize || 3;
+       if (xq) {
+         const qq = qq => {
+           const Eq = Yq.q.Zero(),
+             gq = qq.length / 6;
+           let lq, mq, Aq, cq, uq = 0,
+             Bq = 0;
+           for (Aq = 0; Aq < Oq.length - 1; Aq++) Oq[Aq + 1].subtractToRef(Oq[Aq], Eq), uq += Eq.length();
+           const Wq = uq / gq,
+             Nq = xq._creationDataStorage.dashSize,
+ ... (4 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L402-L406` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L565) · [Before (L402-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L402-L406)

```diff
-         Mz && (lz ? tz() : zz.onLoadObservable.addOnce(tz))
-       }
-       static async EncodeTextureToRGBD(zz, uz) {
-         let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return uz.uR().isWebGPU ? await bz.e(333).then((() => bz(60551))) : await bz.e(315).then((() => bz(60546))), await (0, nz.c)("rgbdEncode", zz, uz, Ez, 1, 5)
+         return (Eq.dashNb || Eq.dashSize || Eq.gapSize || Eq.useVertexAlpha || Eq.material) && Aq.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), xq.updateMeshPositions(qq, !1), xq
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L410-L420` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L588) · [Before (L410-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L410-L420)

```diff
-   60309: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       AsyncLoop: () => Ez.e,
-       RegisterTools: () => Ez.g,
-       Tools: () => Ez.h,
-       className: () => Ez.k
-     });
-     var Ez = bz(39258);
-     (0, Ez.g)()
-   },
-   41057: (zz, uz, bz) => {
+   40213: (qq, Eq, gq) => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L422` → after: `L590-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L590-L591) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L422)

```diff
-       d: () => nz
+       b: () => Wq,
+       c: () => Vq
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L424` → after: `L593-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L593-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L593-L603) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L424)

```diff
-     class Ez {
+     var Yq, lq, Oq = gq(37289),
+       mq = gq(39879),
+       xq = gq(40163),
+       Aq = gq(40221),
+       cq = gq(40037),
+       uq = gq(40225),
+       Bq = gq(39636);
+     class Wq extends xq.e {
+       _isShaderMaterial(qq) {
+         return !!qq && "ShaderMaterial" === qq.getClassName()
+       }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L426-L429` → after: `L605-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L605-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L605-L625) · [Before (L426-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L426-L429)

```diff
-         this._pendingActions = new Array, this._workerInfos = zz.map((zz => ({
-           workerPromise: Promise.resolve(zz),
-           idle: !0
-         })))
+         let Eq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           Yq = arguments.length > 5 ? arguments[5] : void 0,
+           lq = arguments.length > 6 ? arguments[6] : void 0,
+           xq = arguments.length > 7 ? arguments[7] : void 0;
+         super(qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Eq, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Yq, this.useVertexAlpha = lq, this.color = new  … [truncated]
+         const Aq = {
+           attributes: [mq.g.PositionKind],
+           uniforms: ["world", "viewProjection"],
+           needAlphaBlending: !0,
+           defines: [],
+           useClipPlane: null,
+           shaderLanguage: 0
+         };
+         if (this.useVertexAlpha ? Aq.defines.push("#define VERTEXALPHA") : Aq.needAlphaBlending = !1, this.useVertexColor ? (Aq.defines.push("#define VERTEXCOLOR"), Aq.attributes.push(mq.g.ColorKind)) : (Aq.uniforms.push("color"), this._color4 = new Oq.g), xq) this.material = xq;
+         else {
+           this.ZJ().Ba().isWebGPU && !Wq.ForceGLSL && (this._shaderLanguage = 1), Aq.shaderLanguage = this._shaderLanguage, Aq.extraInitializationsAsync = async () => {
+ ... (5 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L431-L435` → after: `L627-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L627-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L627-L631) · [Before (L431-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L431-L435)

```diff
-       dispose() {
-         for (const zz of this._workerInfos) zz.workerPromise.then((zz => {
-           zz.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
+       getClassName() {
+         return "LinesMesh"
+       }
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L437-L438` → after: `L633-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L633-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L633-L637) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L437-L438)

```diff
-       push(zz) {
-         this._executeOnIdleWorker(zz) || this._pendingActions.push(zz)
+       set material(qq) {
+         const Eq = this.material;
+         if (Eq === qq) return;
+         const gq = Eq && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(qq), gq && Eq?.dispose()
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L440-L442` → after: `L639-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L639-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L639-L642) · [Before (L440-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L440-L442)

```diff
-       _executeOnIdleWorker(zz) {
-         for (const uz of this._workerInfos)
-           if (uz.idle) return this._execute(uz, zz), !0;
+       _setInternalMaterial(qq) {
+         this._setMaterial(qq), this.material && (this.material.fillMode = cq.e.LineListDrawMode, this.material.disableLighting = !0)
+       }
+       get checkCollisions() {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L445-L451` → after: `L645-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L645-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L645-L662) · [Before (L445-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L445-L451)

```diff
-       _execute(zz, uz) {
-         zz.idle = !1, zz.workerPromise.then((bz => {
-           uz(bz, (() => {
-             const uz = this._pendingActions.shift();
-             uz ? this._execute(zz, uz) : zz.idle = !0
-           }))
-         }))
+       set checkCollisions(qq) {}
+       _bind(qq, Eq) {
+         if (!this._geometry) return this;
+         const gq = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
+         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Eq, gq) : this._geometry._bind(Eq, gq, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
+           const {
+             r: qq,
+             g: Eq,
+             b: gq
+           } = this.color;
+           this._color4.set(qq, Eq, gq, this.alpha), this.material.setColor4("color", this._color4)
+         }
+         return this
+       }
+       _draw(qq, Eq, gq) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+ ... (2 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L453-L457` → after: `L664-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L664-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L664-L683) · [Before (L453-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L453-L457)

```diff
-     }
-     class nz extends Ez {
-       constructor(zz, uz) {
-         let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nz.DefaultOptions;
-         super([]), this._maxWorkers = zz, this._createWorkerAsync = uz, this._options = bz
+       dispose(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Eq) && this.material?.dispose(!1, !1, !0), super.dispose(qq)
+       }
+       clone(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           gq = arguments.length > 2 ? arguments[2] : void 0;
+         if (Eq && void 0 === Eq._addToSceneRootNodes) {
+           const gq = Eq;
+           return gq.source = this, new Wq(qq, this.ZJ(), gq.parent, gq.source, gq.doNotCloneChildren)
+         }
+         return new Wq(qq, this.ZJ(), Eq, this, gq)
+       }
+       createInstance(qq) {
+         const Eq = new Nq(qq, this);
+         if (this.uR) {
+ ... (4 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L459-L467` → after: `L685-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L685-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L685-L686) · [Before (L459-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L459-L467)

```diff
-       push(zz) {
-         if (!this._executeOnIdleWorker(zz))
-           if (this._workerInfos.length < this._maxWorkers) {
-             const uz = {
-               workerPromise: this._createWorkerAsync(),
-               idle: !1
-             };
-             this._workerInfos.push(uz), this._execute(uz, zz)
-           } else this._pendingActions.push(zz)
+       serialize(qq) {
+         super.serialize(qq), qq.color = this.color.bYq(), qq.alpha = this.alpha
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L469-L479` → after: `L688-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L688-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L688-L690) · [Before (L469-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L469-L479)

```diff
-       _execute(zz, uz) {
-         zz.timeoutId && (clearTimeout(zz.timeoutId), delete zz.timeoutId), super._execute(zz, ((bz, Ez) => {
-           uz(bz, (() => {
-             Ez(), zz.idle && (zz.timeoutId = setTimeout((() => {
-               zz.workerPromise.then((zz => {
-                 zz.terminate()
-               }));
-               const uz = this._workerInfos.indexOf(zz); - 1 !== uz && this._workerInfos.splice(uz, 1)
-             }), this._options.idleTimeElapsedBeforeRelease))
-           }))
-         }))
+       static Parse(qq, Eq) {
+         const gq = new Wq(qq.name, Eq);
+         return gq.color = Oq.d.FromArray(qq.color), gq.alpha = qq.alpha, gq
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L482-L483` → after: `L693-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L693-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L693-L700) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L482-L483)

```diff
-     nz.DefaultOptions = {
-       idleTimeElapsedBeforeRelease: 1e3
+     Wq.ForceGLSL = !1;
+     class Nq extends Aq.b {
+       constructor(qq, Eq) {
+         super(qq, Eq), this.intersectionThreshold = Eq.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L486-L613` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L708-L710) · [Before (L486-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L486-L613)

```diff
-   60343: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       AbstractThreeMfSerializer: () => CM,
-       BVHExporter: () => Pl,
-       ContentTypeFileName: () => XM,
-       DefaultXmlSerializerFormatOptions: () => el,
-       DefaultXmlSerializerNumberOptions: () => Wl,
-       EXT_lights_area: () => Xn,
-       EXT_mesh_gpu_instancing: () => UE,
-       EXT_texture_avif: () => Hl,
-       EXT_texture_webp: () => il,
-       GLTF2Export: () => mE,
-       GLTFData: () => Hz,
-       GetXmlFieldMeta: () => gl,
-       GetXmlName: () => Sl,
-       IsQualifiedName: () => Gl,
- ... (112 more removed lines; see GitHub link above)
+   38649: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Oq
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L615-L617` → after: `L712-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L712-L715) · [Before (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L615-L617)

```diff
-     var Ez = bz(36514),
-       nz = bz(60309),
-       iz = bz(39451);
+     var Yq = gq(38653);
+     const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
+       ...qq
+     } : null : qq.clone(Eq) : null;
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L619-L624` → after: `L717-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L717-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L717-L730) · [Before (L619-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L619-L624)

```diff
-       static OBJ(zz, uz, bz, lz) {
-         const Mz = [];
-         let tz = 1,
-           Hz = 1;
-         uz && (bz || (bz = "mat"), Mz.push("mtllib " + bz + ".mtl"));
-         for (let Oz = 0; Oz < zz.length; Oz++) {
+       static DeepCopy(qq, Eq, gq, Oq) {
+         let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const xq = function(qq) {
+           const Eq = [];
+           do {
+             const gq = Object.getOwnPropertyNames(qq);
+             for (const qq of gq) - 1 === Eq.indexOf(qq) && Eq.push(qq)
+           } while (qq = Object.getPrototypeOf(qq));
+           return Eq
+         }(qq);
+         for (const cq of xq) {
+           if ("_" === cq[0] && (!Oq || -1 === Oq.indexOf(cq))) continue;
+           if (cq.endsWith("Observable")) continue;
+           if (gq && -1 !== gq.indexOf(cq)) continue;
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L626-L667` → after: `L732-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L732-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L732-L745) · [Before (L626-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L626-L667)

```diff
-             pz = bz.name || `mesh${Oz}}`;
-           Mz.push(`o ${pz}`);
-           let dz = null;
-           if (lz) {
-             const zz = bz.computeWorldMatrix(!0);
-             dz = new Ez.Matrix, zz.invertToRef(dz), bz.bakeTransformIntoVertices(zz)
-           }
-           if (uz) {
-             const zz = bz.material;
-             zz && Mz.push("usemtl " + zz.id)
-           }
-           const Fz = bz.geometry;
-           if (!Fz) {
-             nz.Tools.Warn("No geometry is present on the mesh");
-             continue
-           }
- ... (26 more removed lines; see GitHub link above)
+             uq = typeof xq;
+           if ("function" !== uq) try {
+             if ("object" === uq)
+               if (xq instanceof Uint8Array) Eq[cq] = Uint8Array.from(xq);
+               else if (xq instanceof Array) {
+               if (Eq[cq] = [], xq.length > 0)
+                 if ("object" == typeof xq[0])
+                   for (let qq = 0; qq < xq.length; qq++) {
+                     const gq = lq(xq[qq], Eq, mq); - 1 === Eq[cq].indexOf(gq) && Eq[cq].push(gq)
+                   } else Eq[cq] = xq.slice(0)
+             } else Eq[cq] = lq(xq, Eq, mq);
+             else Eq[cq] = xq
+           } catch (Aq) {
+             Yq.b.Warn(Aq.message)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L701-L763` → after: `L750-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L750-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L750-L756) · [Before (L701-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L701-L763)

```diff
-     var Oz = bz(40360),
-       pz = bz(40308),
-       dz = bz(40847),
-       Fz = bz(40310),
-       Zz = bz(38998),
-       Rz = bz(36543),
-       Kz = bz(36709),
-       wz = bz(36553);
-     const Xz = wz.HighestCommonFactor,
-       fz = {
-         ...wz,
-         TwoPi: 2 * Math.PI,
-         Sign: Math.sign,
-         Log2: Math.log2,
-         HCF: Xz
-       };
- ... (47 more removed lines; see GitHub link above)
+   },
+   37872: (qq, Eq, gq) => {
+     function Yq() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (qq => {
+         const Eq = 16 * Math.random() | 0;
+         return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
+       }))
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L765-L16076` → after: `L758-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L758-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L758-L765) · [Before (L765-L16076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L765-L16076)

```diff
-     let Dz = (() => {
-       var zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz;
-       let Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz = Sz.e,
-         sz = [],
-         rz = [],
-         oz = [],
-         Nz = [],
-         vz = [],
-         Az = [],
-         Tz = [],
-         Lz = [],
-         Pz = [],
-         Gz = [],
-         az = [],
-         Vz = [],
-         mz = [],
- ... (15296 more removed lines; see GitHub link above)
+     gq.d(Eq, {
+       d: () => Yq
+     })
+   },
+   38653: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq
+     });
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L16078-L16197` → after: `L767-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L767-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/224.js#L767-L838) · [Before (L16078-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/224.js#L16078-L16197)

```diff
-       constructor() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
-           bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-         this._from = zz, this._to = uz, this._step = bz, this._i = zz
-       }
-       next() {
-         if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
-         const zz = this._i;
-         return this._i += this._step, zz
-       }
-       reset() {
-         return this._i = this._from, this
-       }
-     }
-     class ut extends CM {
- ... (104 more removed lines; see GitHub link above)
+       static _CheckLimit(qq, Eq) {
+         let gq = Yq._LogLimitOutputs[qq];
+         return gq ? gq.current++ : (gq = {
+           limit: Eq,
+           current: 1
+         }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
+       }
+       static _GenerateLimitMessage(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const gq = Yq._LogLimitOutputs[qq];
+         if (!gq || !Yq.MessageLimitReached) return;
+         const lq = this._Levels[Eq];
+         gq.current === gq.limit && Yq[lq.name](Yq.MessageLimitReached.replace(/%LIMIT%/g, "" + gq.limit).replace(/%TYPE%/g, lq.name ?? ""))
+       }
+       static _AddLogEntry(qq) {
+         Yq._LogCache = qq + Yq._LogCache, Yq.OnNewCacheEntry && Yq.OnNewCacheEntry(qq)
+ ... (56 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/225.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/225.js` (270 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2)

```diff
- export const ids = [225];
+ export const ids = [225, 230];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L4)

```diff
-   36543: (zz, uz, bz) => {
+   41585: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L6-L21` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L6) · [Before (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L6-L21)

```diff
-       d: () => nz
-     });
-     var Ez = bz(36547);
-     class nz {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
-     }
-     nz.Instances = [], nz.OnEnginesDisposedObservable = new Ez.b, nz._LastCreatedScene = null, nz.UseFallbackTexture = !0, nz.FallbackTexture = ""
-   },
-   36537: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => Ez
+       e: () => mq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L23-L30` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L8-L21) · [Before (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L23-L30)

```diff
-     class Ez {
-       static SetMatrixPrecision(zz) {
-         if (Ez.MatrixTrackPrecisionChange = !1, zz && !Ez.MatrixUse64Bits && Ez.MatrixTrackedMatrices)
-           for (let uz = 0; uz < Ez.MatrixTrackedMatrices.length; ++uz) {
-             const zz = Ez.MatrixTrackedMatrices[uz],
-               bz = zz._m;
-             zz._m = new Array(16);
-             for (let uz = 0; uz < 16; ++uz) zz._m[uz] = bz[uz]
+     var Yq = gq(41519),
+       lq = gq(39748);
+     let Oq = !1;
+ 
+     function mq() {
+       Oq || (Oq = !0, lq.d.prototype._sphericalPolynomialTargetSize = 0, lq.d.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(lq.d.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Yq.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = qq, this._texture._sphericalPolynomialComputed = !0
+             }))), null
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L32-L33` → after: `L23-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L23-L30) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L32-L33)

```diff
-         Ez.MatrixUse64Bits = zz, Ez.MatrixCurrentType = Ez.MatrixUse64Bits ? Array : Float32Array, Ez.MatrixTrackedMatrices = null
-       }
+           return null
+         },
+         set: function(qq) {
+           this._texture && (this._texture._sphericalPolynomial = qq)
+         },
+         enumerable: !0,
+         configurable: !0
+       }))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L37` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L33) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L37)

```diff
-   36560: (zz, uz, bz) => {
+   37286: (qq, Eq, gq) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L39-L44` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L35-L36) · [Before (L39-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L39-L44)

```diff
-       d: () => Mz,
-       h: () => Hz,
-       k: () => tz,
-       o: () => Ez,
-       p: () => iz,
-       r: () => lz
+       Color3: () => Yq.d,
+       e: () => Yq.g
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L46-L164` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L38-L39) · [Before (L46-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L46-L164)

```diff
-     class Ez {}
- 
-     function nz(zz) {
-       zz.updateFlag = Ez._UpdateFlagSeed++
-     }
- 
-     function iz(zz, uz, bz) {
-       let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const nz = zz.obz(),
-         iz = uz.obz(),
-         lz = nz[0],
-         Mz = nz[1],
-         tz = nz[2],
-         Hz = nz[3],
-         Oz = nz[4],
-         pz = nz[5],
- ... (103 more removed lines; see GitHub link above)
+     var Yq = gq(37289);
+     (0, Yq.h)()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L166` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L41) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L166)

```diff
-   36519: (zz, uz, bz) => {
+   37758: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L168-L174` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L43) · [Before (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L168-L174)

```diff
-       d: () => Rz,
-       h: () => Zz,
-       j: () => sz,
-       l: () => wz,
-       m: () => pz,
-       n: () => dz,
-       r: () => Fz
+       c: () => lq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L176-L183` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L45) · [Before (L176-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L176-L183)

```diff
-     var Ez = bz(36526),
-       nz = bz(36528),
-       iz = bz(36537),
-       lz = bz(36543),
-       Mz = bz(36553),
-       tz = bz(36560),
-       Hz = bz(36564);
-     const Oz = zz => parseInt(zz.toString().replace(/\W/g, ""));
+     var Yq = gq(37767);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L185-L448` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L47-L50) · [Before (L185-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L185-L448)

```diff
-       constructor() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this.x = zz, this.y = uz
-       }
-       toString() {
-         return `{X: ${this.x} Y: ${this.y}}`
-       }
-       getClassName() {
-         return "Vector2"
-       }
-       getHashCode() {
-         let zz = Oz(this.x);
-         return zz = 397 * zz ^ Oz(this.y), zz
-       }
-       toArray(zz) {
- ... (248 more removed lines; see GitHub link above)
+       static GetPlanes(qq) {
+         const Eq = [];
+         for (let gq = 0; gq < 6; gq++) Eq.push(new Yq.d(0, 0, 0, 0));
+         return lq.GetPlanesToRef(qq, Eq), Eq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L450-L451` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L52-L54) · [Before (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L450-L451)

```diff
-       static Transform(zz, uz) {
-         return pz.TransformToRef(zz, uz, new pz)
+       static GetNearPlaneToRef(qq, Eq) {
+         const gq = qq.m;
+         Eq.normal.x = gq[3] + gq[2], Eq.normal.y = gq[7] + gq[6], Eq.normal.z = gq[11] + gq[10], Eq.d = gq[15] + gq[14], Eq.normalize()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L453-L457` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L56-L58) · [Before (L453-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L453-L457)

```diff
-       static TransformToRef(zz, uz, bz) {
-         const Ez = uz.m,
-           nz = zz.x * Ez[0] + zz.y * Ez[4] + Ez[12],
-           iz = zz.x * Ez[1] + zz.y * Ez[5] + Ez[13];
-         return bz.x = nz, bz.y = iz, bz
+       static GetFarPlaneToRef(qq, Eq) {
+         const gq = qq.m;
+         Eq.normal.x = gq[3] - gq[2], Eq.normal.y = gq[7] - gq[6], Eq.normal.z = gq[11] - gq[10], Eq.d = gq[15] - gq[14], Eq.normalize()
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L459-L464` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L60-L62) · [Before (L459-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L459-L464)

```diff
-       static PointInTriangle(zz, uz, bz, Ez) {
-         const nz = .5 * (-bz.y * Ez.x + uz.y * (-bz.x + Ez.x) + uz.x * (bz.y - Ez.y) + bz.x * Ez.y),
-           iz = nz < 0 ? -1 : 1,
-           lz = (uz.y * Ez.x - uz.x * Ez.y + (Ez.y - uz.y) * zz.x + (uz.x - Ez.x) * zz.y) * iz,
-           Mz = (uz.x * bz.y - uz.y * bz.x + (uz.y - bz.y) * zz.x + (bz.x - uz.x) * zz.y) * iz;
-         return lz > 0 && Mz > 0 && lz + Mz < 2 * nz * iz
+       static GetLeftPlaneToRef(qq, Eq) {
+         const gq = qq.m;
+         Eq.normal.x = gq[3] + gq[0], Eq.normal.y = gq[7] + gq[4], Eq.normal.z = gq[11] + gq[8], Eq.d = gq[15] + gq[12], Eq.normalize()
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L466-L467` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L64-L66) · [Before (L466-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L466-L467)

```diff
-       static Distance(zz, uz) {
-         return Math.sqrt(pz.DistanceSquared(zz, uz))
+       static GetRightPlaneToRef(qq, Eq) {
+         const gq = qq.m;
+         Eq.normal.x = gq[3] - gq[0], Eq.normal.y = gq[7] - gq[4], Eq.normal.z = gq[11] - gq[8], Eq.d = gq[15] - gq[12], Eq.normalize()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L469-L472` → after: `L68-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L68-L70) · [Before (L469-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L469-L472)

```diff
-       static DistanceSquared(zz, uz) {
-         const bz = zz.x - uz.x,
-           Ez = zz.y - uz.y;
-         return bz * bz + Ez * Ez
+       static GetTopPlaneToRef(qq, Eq) {
+         const gq = qq.m;
+         Eq.normal.x = gq[3] - gq[1], Eq.normal.y = gq[7] - gq[5], Eq.normal.z = gq[11] - gq[9], Eq.d = gq[15] - gq[13], Eq.normalize()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L474-L475` → after: `L72-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L72-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L72-L74) · [Before (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L474-L475)

```diff
-       static Center(zz, uz) {
-         return pz.CenterToRef(zz, uz, new pz)
+       static GetBottomPlaneToRef(qq, Eq) {
+         const gq = qq.m;
+         Eq.normal.x = gq[3] + gq[1], Eq.normal.y = gq[7] + gq[5], Eq.normal.z = gq[11] + gq[9], Eq.d = gq[15] + gq[13], Eq.normalize()
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L477-L478` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L76-L77) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L477-L478)

```diff
-       static CenterToRef(zz, uz, bz) {
-         return bz.P_((zz.x + uz.x) / 2, (zz.y + uz.y) / 2)
+       static GetPlanesToRef(qq, Eq) {
+         lq.GetNearPlaneToRef(qq, Eq[0]), lq.GetFarPlaneToRef(qq, Eq[1]), lq.GetLeftPlaneToRef(qq, Eq[2]), lq.GetRightPlaneToRef(qq, Eq[3]), lq.GetTopPlaneToRef(qq, Eq[4]), lq.GetBottomPlaneToRef(qq, Eq[5])
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L480-L486` → after: `L79-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L79-L82) · [Before (L480-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L480-L486)

```diff
-       static DistanceOfPointFromSegment(zz, uz, bz) {
-         const Ez = pz.DistanceSquared(uz, bz);
-         if (0 === Ez) return pz.Distance(zz, uz);
-         const nz = bz.subtract(uz),
-           iz = Math.max(0, Math.min(1, pz.Dot(zz.subtract(uz), nz) / Ez)),
-           lz = uz.add(nz.multiplyByFloats(iz, iz));
-         return pz.Distance(zz, lz)
+       static IsPointInFrustum(qq, Eq) {
+         for (let gq = 0; gq < 6; gq++)
+           if (Eq[gq].dotCoordinate(qq) < 0) return !1;
+         return !0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L489` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L85-L90) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L489)

```diff
-     pz._V8PerformanceHack = new pz(.5, .5), pz._ZeroReadOnly = pz.Zero();
+   },
+   37767: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => lq
+     });
+     var Yq = gq(37139);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L491-L492` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L92-L93) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L491-L492)

```diff
-       get x() {
-         return this._x
+       constructor(qq, Eq, gq, lq) {
+         this.normal = new Yq.q(qq, Eq, gq), this.d = lq
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L494-L495` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L95-L96) · [Before (L494-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L494-L495)

```diff
-       set x(zz) {
-         this._x = zz, this._isDirty = !0
+       bYq() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L497-L516` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L98-L99) · [Before (L497-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L497-L516)

```diff
-       get y() {
-         return this._y
-       }
-       set y(zz) {
-         this._y = zz, this._isDirty = !0
-       }
-       get z() {
-         return this._z
-       }
-       set z(zz) {
-         this._z = zz, this._isDirty = !0
-       }
-       constructor() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
- ... (4 more removed lines; see GitHub link above)
+       clone() {
+         return new lq(this.normal.x, this.normal.y, this.normal.z, this.d)
```
