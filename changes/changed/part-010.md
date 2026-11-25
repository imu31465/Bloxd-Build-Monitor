# Changed — Bundle Modifications Report (Part 010 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `10 / 56` (**287** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 009](part-009.md) · [Part 011 →](part-011.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/231.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/231.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5)

#### 2. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L12-L18` → after: `L12-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L12-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/231.js#L12-L135) · [Before (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/231.js#L12-L18)

```diff
-     var Op = cp(4543),
-       op = cp(37246),
-       Ip = cp(9329),
-       Sp = cp(3250);
-     const xp = new Set,
-       Lp = new Set;
-     let Yp = null;
+     const wQ = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
+       qQ = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
+       TQ = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
+       zQ = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
+       sQ = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
+       FQ = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
+       PQ = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
+       gQ = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
+       JQ = JSON.parse('{"src":["/sounds/generatedSprites/randomBeep.7b90315654.ogg","/sounds/generatedSprites/randomBeep.0e88f6aa33.m4a","/sounds/generatedSprites/randomBeep.47ff5e799a.mp3","/sounds/generatedSprites/randomBeep.444034b8b7.ac3"],"sprite":{"beep":[100,2455.510204081 … [truncated]
+       rQ = JSON.parse('{"src":["/sounds/generatedSprites/randomCannon.f9d64818ea.ogg","/sounds/generatedSprites/randomCannon.52f7576d74.m4a","/sounds/generatedSprites/randomCannon.bde162aee8.mp3","/sounds/generatedSprites/randomCannon.4877805969.ac3"],"sprite":{"cannonFire1":[100 … [truncated]
+       IQ = JSON.parse('{"src":["/sounds/generatedSprites/randomCash.8ff82dcd92.ogg","/sounds/generatedSprites/randomCash.a86426509f.m4a","/sounds/generatedSprites/randomCash.48929d75f1.mp3","/sounds/generatedSprites/randomCash.f687b943c4.ac3"],"sprite":{"cashRegister":[100,3819.6 … [truncated]
+       jQ = JSON.parse('{"src":["/sounds/generatedSprites/randomExp.fa5a4c9798.ogg","/sounds/generatedSprites/randomExp.a7e2faf290.m4a","/sounds/generatedSprites/randomExp.b4baff1a37.mp3","/sounds/generatedSprites/randomExp.4974715bbd.ac3"],"sprite":{"exp_collect":[100,1009.206349 … [truncated]
+       BQ = JSON.parse('{"src":["/sounds/generatedSprites/randomFallsmall.e0ec9ce0a7.ogg","/sounds/generatedSprites/randomFallsmall.a1f24b70c2.m4a","/sounds/generatedSprites/randomFallsmall.bcbd5fef60.mp3","/sounds/generatedSprites/randomFallsmall.a3b7d06594.ac3"],"sprite":{"falls … [truncated]
+       yQ = JSON.parse('{"src":["/sounds/generatedSprites/randomItems.380c31a312.ogg","/sounds/generatedSprites/randomItems.6ae69434b9.m4a","/sounds/generatedSprites/randomItems.85b5c2f034.mp3","/sounds/generatedSprites/randomItems.cdadb8aa52.ac3"],"sprite":{"bow":[100,500],"bucke … [truncated]
+       VQ = JSON.parse('{"src":["/sounds/generatedSprites/randomFire.06f418fc54.ogg","/sounds/generatedSprites/randomFire.7c5564dd14.m4a","/sounds/generatedSprites/randomFire.f61e3ab1f3.mp3","/sounds/generatedSprites/randomFire.5869bbefc8.ac3"],"sprite":{"fireBurn":[100,2827.39229 … [truncated]
+       DQ = JSON.parse('{"src":["/sounds/generatedSprites/randomFirecracker.ddc99cbc73.ogg","/sounds/generatedSprites/randomFirecracker.128308b436.m4a","/sounds/generatedSprites/randomFirecracker.d5635f7e7d.mp3","/sounds/generatedSprites/randomFirecracker.e5afa15901.ac3"],"sprite" … [truncated]
+ ... (108 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L21-L30` → after: `L138-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L138-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/231.js#L138-L143) · [Before (L21-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/231.js#L21-L30)

```diff
-       xp.has(pp) || (xp.add(pp), Lp.add(pp), Yp ??= setTimeout((() => {
-         console.warn(`Docs gallery: no default texture for ${Lp.size} names`, [...Lp]), Lp.clear(), Yp = null
-       }), 1e3))
-     }
- 
-     function Ap(pp, ip) {
-       try {
-         return (0, Ip.getDefaultTexture)(pp, ip).url
-       } catch {
-         return Dp(pp), null
+       if (sW[QQ]) return rW(sW[QQ]);
+       {
+         const WQ = [];
+         for (const XQ in qW)
+           for (const wQ in qW[XQ].sprite) wQ.startsWith(QQ) && WQ.push(wQ);
+         return sW[QQ] = WQ, rW(WQ)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L35-L49` → after: `L148-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L148-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/231.js#L148-L155) · [Before (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/231.js#L35-L49)

```diff
-       var ip, cp;
-       const Ip = op.m[pp];
-       if (!Ip || Ip.itemTexture || !Ip.textureInfo) return null;
-       const {
-         textureInfo: xp,
-         texturePerSide: Lp
-       } = Ip, Yp = pp => {
-         return "string" === typeof(ip = Lp && Array.isArray(xp) ? xp[Lp[pp]] : xp) ? Ap(ip, Sp.h.BLOCK) : ip && "object" === typeof ip && "animTextures" in ip ? Ap((0, Op.p)(ip), Sp.h.BLOCK) : null;
-         var ip
-       }, Dp = Yp(2);
-       return Dp ? {
-         top: Dp,
-         left: null !== (ip = Yp(4)) && void 0 !== ip ? ip : Dp,
-         right: null !== (cp = Yp(0)) && void 0 !== cp ? cp : Dp
-       } : null
+       const WQ = zW[QQ];
+       if (void 0 === WQ) throw new Error(`Invalid sound name ${QQ} (not in any sprite sheet)`);
+       return WQ
+     }
+ 
+     function gW(QQ, WQ) {
+       if (!(QQ in qW)) throw new Error("Invalid spriteTrack name");
+       return WQ in qW[QQ].sprite
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L53-L55` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/231.js#L159-L160) · [Before (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/231.js#L53-L55)

```diff
-       var ip;
-       const cp = op.m[pp];
-       return Ap(null !== (ip = null === cp || void 0 === cp ? void 0 : cp.itemTexture) && void 0 !== ip ? ip : "string" === typeof(null === cp || void 0 === cp ? void 0 : cp.textureInfo) ? cp.textureInfo : pp, Sp.h.ITEM)
+       if (!(QQ in qW)) throw new Error("Invalid spritesheet name");
+       return qW[QQ]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L59-L236` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/231.js#L164) · [Before (L59-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/231.js#L59-L236)

```diff
-       var ip, cp;
-       return op.m[pp] ? null !== (ip = null === (cp = Pp(pp)) || void 0 === cp ? void 0 : cp.top) && void 0 !== ip ? ip : Wp(pp) : null
-     }
- 
-     function Up(pp) {
-       return Ap(pp, Sp.h.ICON)
-     }
- 
-     function wp(pp) {
-       try {
-         return cp(3432)(`./${pp}.png`)
-       } catch {
-         return Dp(pp), null
-       }
-     }
-   },
- ... (162 more removed lines; see GitHub link above)
+       return QQ[Math.floor(Math.random() * QQ.length)]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/232.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/232.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L4-L6` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/232.js#L4-L5) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/232.js#L4-L6)

```diff
-   37324: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Ip,
+   39911: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L8` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/232.js#L7) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/232.js#L8)

```diff
-       g: () => op
+       h: () => qQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L10-L13` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/232.js#L9-L10) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/232.js#L10-L13)

```diff
-     const Op = 1 / 2.2,
-       op = 2.2;
-     Math.sqrt(5);
-     let Ip = .001
+     const wQ = "The world isn't loaded, so no blocks can be seen.",
+       qQ = "The world isn't loaded, so nothing in it can be seen."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L15-L161` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/232.js#L12-L17) · [Before (L15-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/232.js#L15-L161)

```diff
-   37356: (pp, ip, cp) => {
-     function Op(pp) {
-       return parseInt(pp.toString().replace(/\W/g, ""))
-     }
- 
-     function op(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(pp - ip) <= cp
-     }
- 
-     function Ip(pp, ip, cp) {
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
-       return pp < ip - Op || pp > cp + Op
-     }
- 
-     function Sp(pp, ip) {
- ... (131 more removed lines; see GitHub link above)
+   39373: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       return !(!QQ.lobbyLeaderboardInfo && !QQ.lobbyManage)
+     }
+     XQ.d(WQ, {
+       b: () => wQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L164-L172` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/232.js#L20-L23) · [Before (L164-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/232.js#L164-L172)

```diff
-   37313: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       Matrix: () => Op.b,
-       Quaternion: () => Op.f,
-       RegisterMathVector: () => Op.h,
-       TmpVectors: () => Op.i,
-       Vector2: () => Op.l,
-       Zy: () => Op.o,
-       Vector4: () => Op.q
+   37112: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => TQ,
+       f: () => qQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L174-L181` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/232.js#L25-L28) · [Before (L174-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/232.js#L174-L181)

```diff
-     var Op = cp(37320);
-     (0, Op.h)()
-   },
-   37329: (pp, ip, cp) => {
-     function Op(pp, ip) {
-       const cp = [];
-       for (let Op = 0; Op < pp; ++Op) cp.push(ip());
-       return cp
+     let wQ = () => null;
+ 
+     function qQ(QQ) {
+       wQ = QQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L190` → after: `L552-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/232.js#L552-L554) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/232.js#L190)

```diff
-       j: () => Sp
+       i: () => aQ,
+       j: () => vQ,
+       k: () => UQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L192` → after: `L556-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L556-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/232.js#L556-L754) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/232.js#L192)

```diff
-     const Ip = ["push", "splice", "pop", "shift", "unshift"];
+     var wQ = XQ(39527),
+       qQ = XQ(1257),
+       TQ = XQ(2036),
+       zQ = XQ(2048),
+       sQ = XQ(3555),
+       FQ = XQ(37112),
+       PQ = XQ(1376),
+       gQ = XQ(40829),
+       JQ = XQ(5153),
+       rQ = XQ(2506),
+       IQ = XQ(40835),
+       jQ = XQ(40837),
+       BQ = XQ(40871);
+     let yQ = null;
+ 
+     function VQ(QQ) {
+ ... (183 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L195-L212` → after: `L757-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L757-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/232.js#L757-L770) · [Before (L195-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/232.js#L195-L212)

```diff
-       const cp = Ip.map((cp => function(pp, ip, cp) {
-         const Op = pp[ip];
-         if ("function" !== typeof Op) return null;
-         const op = function() {
-           const Op = pp.length,
-             Ip = op.previous.apply(pp, arguments);
-           return cp(ip, Op), Ip
-         };
-         return Op.next = op, op.previous = Op, pp[ip] = op, () => {
-           const cp = op.previous;
-           if (!cp) return;
-           const Op = op.next;
-           Op ? (cp.next = Op, Op.previous = cp) : (cp.next = void 0, pp[ip] = cp), op.next = void 0, op.previous = void 0
-         }
-       }(pp, cp, ip)));
-       return () => {
- ... (2 more removed lines; see GitHub link above)
+       if (zQ(QQ)) throw QQ;
+       console.error(WQ, QQ)
+     }
+ 
+     function FQ(QQ, WQ, XQ, qQ, TQ) {
+       if (WQ % qQ !== 0 || WQ + XQ > QQ.byteLength) throw new wQ(`${TQ}: ${XQ} bytes at ${WQ}, ${qQ}-aligned, outside ${QQ.byteLength} bytes of memory`)
+     }
+ 
+     function PQ(QQ, WQ, XQ, wQ, qQ) {
+       return 0 === XQ ? null : (FQ(WQ, XQ, wQ * QQ.BYTES_PER_ELEMENT, QQ.BYTES_PER_ELEMENT, qQ), new QQ(WQ, XQ, wQ))
+     }
+ 
+     function gQ(QQ, WQ, XQ, wQ, qQ) {
+       return 0 === WQ ? null : (FQ(QQ, WQ, XQ, wQ, qQ), new DataView(QQ, WQ, XQ))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L215-L218` → after: `L773-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L773-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/232.js#L773-L783) · [Before (L215-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/232.js#L215-L218)

```diff
-   37368: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Ip,
-       g: () => op
+   40829: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       B: () => jQ,
+       c: () => wQ,
+       f: () => VQ,
+       j: () => BQ,
+       m: () => yQ,
+       p: () => rQ,
+       t: () => IQ,
+       u: () => gQ,
+       y: () => JQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L220` → after: `L785-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L785-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/232.js#L785-L796) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/232.js#L220)

```diff
-     const Op = {};
+     class wQ extends Error {
+       constructor(QQ) {
+         super(`the join's code did not load: ${QQ instanceof Error?QQ.message:String(QQ)}`, {
+           cause: QQ
+         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === QQ || void 0 === QQ ? void 0 : QQ.request
+       }
+     }
+     let qQ = null,
+       TQ = null,
+       zQ = null;
+     const sQ = [];
+     let FQ = null;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L223-L227` → after: `L799-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L799-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/232.js#L799-L855) · [Before (L223-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/232.js#L223-L227)

```diff
-       Op[pp] = ip
-     }
- 
-     function Ip(pp) {
-       return Op[pp]
+       try {
+         QQ(WQ)
+       } catch (XQ) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", XQ)
+       }
+     }
+ 
+     function gQ() {
+       return FQ
+     }
+ 
+     function JQ(QQ) {
+       sQ.push(QQ), null !== FQ && PQ(QQ, FQ)
+     }
+ 
+     function rQ(QQ) {
+ ... (41 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/233.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/233.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925)

#### 1. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L3)

```diff
- export const ids = [233, 241];
+ export const ids = [233];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L5-L25` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L4-L7) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L5-L25)

```diff
-   38517: pp => {
-     pp.exports = function(pp) {
-       return null != pp && null != pp.constructor && "function" === typeof pp.constructor.isBuffer && pp.constructor.isBuffer(pp)
-     }
-   },
-   38497: (pp, ip, cp) => {
-     var Op = cp(38502),
-       op = cp(38510),
-       Ip = cp(38517);
-     cp.g.__TYPEDARRAY_POOL || (cp.g.__TYPEDARRAY_POOL = {
-       UINT8: op([32, 0]),
-       UINT16: op([32, 0]),
-       UINT32: op([32, 0]),
-       INT8: op([32, 0]),
-       INT16: op([32, 0]),
-       INT32: op([32, 0]),
- ... (5 more removed lines; see GitHub link above)
+   37207: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => UQ,
+       h: () => GQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L27-L39` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L9-L26) · [Before (L27-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L27-L39)

```diff
-     var Sp = "undefined" !== typeof Uint8ClampedArray,
-       xp = cp.g.__TYPEDARRAY_POOL;
-     xp.UINT8C || (xp.UINT8C = op([32, 0])), xp.BUFFER || (xp.BUFFER = op([32, 0]));
-     var Lp = xp.DATA,
-       Yp = xp.BUFFER;
- 
-     function Dp(pp) {
-       if (pp) {
-         var ip = pp.length || pp.byteLength,
-           cp = Op.log2(ip);
-         Lp[cp].push(pp)
-       }
-     }
+     var wQ = XQ(4553),
+       qQ = XQ(1498),
+       TQ = XQ(61),
+       zQ = XQ(6873),
+       sQ = XQ(4541),
+       FQ = XQ(1335),
+       PQ = XQ(2003),
+       gQ = XQ(1975),
+       JQ = XQ(1507),
+       rQ = XQ(1226),
+       IQ = XQ(37212),
+       jQ = XQ(1081),
+       BQ = XQ.n(jQ),
+       yQ = XQ(1360),
+       VQ = XQ(1094),
+       DQ = XQ(1318),
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L41-L213` → after: `L28-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L28-L31) · [Before (L41-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L41-L213)

```diff
-     function Ap(pp) {
-       pp = Op.nextPow2(pp);
-       var ip = Op.log2(pp),
-         cp = Lp[ip];
-       return cp.length > 0 ? cp.pop() : new ArrayBuffer(pp)
-     }
- 
-     function Pp(pp) {
-       return new Uint8Array(Ap(pp), 0, pp)
-     }
- 
-     function Wp(pp) {
-       return new Uint16Array(Ap(2 * pp), 0, pp)
-     }
- 
-     function yp(pp) {
- ... (157 more removed lines; see GitHub link above)
+     function UQ() {
+       const {
+         t: QQ
+       } = (0, rQ.C)(), [WQ, XQ] = (0, TQ.useState)(!1), [jQ, UQ] = (0, TQ.useState)(null), [vQ, dQ] = (0, TQ.useState)(1), [HQ, aQ] = (0, TQ.useState)(!1), [lQ, hQ] = (0, TQ.useState)(!1), iQ = (0, TQ.useRef)(0), cQ = (0, TQ.useRef)(!1), AQ = (0, TQ.useRef)(!1), RQ = (0, TQ.useRe … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L215-L221` → after: `L33-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L33-L35) · [Before (L215-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L215-L221)

```diff
-     function Lp(pp, ip, cp, Op) {
-       for (var op = 0, Ip = 0, Sp = 0, Lp = pp.length; Sp < Lp; ++Sp) {
-         var Yp = pp[Sp];
-         if (!xp(ip, Yp)) {
-           for (var Dp = 0; Dp < 2 * ip; ++Dp) cp[op++] = Yp[Dp];
-           Op[Ip++] = Sp
-         }
+       function CQ() {
+         const QQ = null !== jQ && void 0 !== jQ ? jQ : "Rested Speed";
+         PQ.gameBridge.send("wakeUp", lQ ? QQ : null), EQ.current = null, XQ(!1), UQ(null), dQ(1), aQ(!1), hQ(!1)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L226-L241` → after: `L38-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L38-L46) · [Before (L226-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L226-L241)

```diff
-     function Yp(pp, ip, cp, Op) {
-       var xp = pp.length,
-         Yp = ip.length;
-       if (!(xp <= 0 || Yp <= 0)) {
-         var Dp = pp[0].length >>> 1;
-         if (!(Dp <= 0)) {
-           var Ap, Pp = op.mallocDouble(2 * Dp * xp),
-             Wp = op.mallocInt32(xp);
-           if ((xp = Lp(pp, Dp, Pp, Wp)) > 0) {
-             if (1 === Dp && Op) Ip.init(xp), Ap = Ip.sweepComplete(Dp, cp, 0, xp, Pp, Wp, 0, xp, Pp, Wp);
-             else {
-               var yp = op.mallocDouble(2 * Dp * Yp),
-                 Up = op.mallocInt32(Yp);
-               (Yp = Lp(ip, Dp, yp, Up)) > 0 && (Ip.init(xp + Yp), Ap = 1 === Dp ? Ip.sweepBipartite(Dp, cp, 0, xp, Pp, Wp, 0, Yp, yp, Up) : Sp(Dp, cp, Op, xp, Pp, Wp, Yp, yp, Up), op.free(yp), op.free(Up))
-             }
-             op.free(Pp), op.free(Wp)
+       function uQ() {
+         return !HQ && (CQ(), !0)
+       }
+       return (0, qQ.f)("PlayerPhysicsTypeUpdate", (QQ => {
+         QQ !== EQ.current && (EQ.current = QQ, QQ === zQ.s.SLEEPING ? (AQ.current || (iQ.current = PQ.gameBridge.lookup("cameraZoom", null), AQ.current = !0), cQ.current = !0, PQ.gameBridge.send("setCameraZoom", 3), XQ(!0), dQ(function() {
+           for (const QQ of PQ.gameBridge.lookup("blocksStandingOn", null)) {
+             if (IQ.e.leafBeds.includes(QQ)) return console.log(`Found leaf bed: ${QQ}`), 1;
+             if (IQ.e.woolBeds.includes(QQ)) return console.log(`Found woold bed: ${QQ}`), 2;
+             if (IQ.e.strongBeds.includes(QQ)) return console.log(`Found strong bed ${QQ}`), 3
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L243-L250` → after: `L48-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L48-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L48-L159) · [Before (L243-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L243-L250)

```diff
-           return Ap
-         }
-       }
-     }
- 
-     function Dp(pp, ip) {
-       Op.push([pp, ip])
-     }
+           return 1
+         }())) : (AQ.current = !1, XQ(!1), UQ(null), dQ(1)))
+       })), (0, TQ.useEffect)((() => () => {
+         (0, FQ.y)(GQ)
+       }), []), (0, TQ.useEffect)((() => {
+         WQ ? (0, FQ.z)(GQ) : ((0, FQ.y)(GQ), cQ.current && (PQ.gameBridge.send("setCameraZoom", iQ.current), cQ.current = !1))
+       }), [WQ]), (0, DQ.k)("overlay", RQ, uQ, WQ), (0, pQ.jsx)(wQ.c, {
+         className: "SleepingOverlay",
+         "data-camera-keeper": "",
+         in: WQ,
+         timeout: 300,
+         nodeRef: RQ,
+         unmountOnExit: !0,
+         children: (0, pQ.jsx)("div", {
+           ref: RQ,
+           onClick: QQ => {
+ ... (96 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L252-L283` → after: `L161-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L161-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L161-L190) · [Before (L252-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L252-L283)

```diff
-   38533: (pp, ip) => {
-     var cp = "d",
-       Op = "ax",
-       op = "fp",
-       Ip = "es",
-       Sp = "rs",
-       xp = "re",
-       Lp = "rb",
-       Yp = "bs",
-       Dp = "be",
-       Ap = "bb",
-       Pp = [cp, Op, "vv", Sp, xp, Lp, "ri", Yp, Dp, Ap, "bi"];
- 
-     function Wp(pp) {
-       var ip = "bruteForce" + (pp ? "Full" : "Partial"),
-         Op = [],
- ... (16 more removed lines; see GitHub link above)
+   40802: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => OQ
+     });
+     var wQ = XQ(26),
+       qQ = XQ(31),
+       TQ = XQ(4572),
+       zQ = XQ(382),
+       sQ = XQ(1698),
+       FQ = XQ(8561),
+       PQ = XQ(4582),
+       gQ = XQ(9084),
+       JQ = XQ(8596),
+       rQ = XQ(8572),
+       IQ = XQ(8605),
+       jQ = XQ(1454),
+ ... (14 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L285-L364` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L192-L193) · [Before (L285-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L285-L364)

```diff
-       xp.push("if(re-rs>be-bs){"), pp ? (Lp(!0, !1), xp.push("}else{"), Lp(!1, !1)) : (xp.push("if(fp){"), Lp(!0, !0), xp.push("}else{"), Lp(!0, !1), xp.push("}}else{if(fp){"), Lp(!1, !0), xp.push("}else{"), Lp(!1, !1), xp.push("}")), xp.push("}}return " + ip);
-       var Yp = Op.join("") + xp.join("");
-       return new Function(Yp)()
-     }
-     ip.partial = Wp(!1), ip.full = Wp(!0)
-   },
-   38531: (pp, ip, cp) => {
-     pp.exports = function(pp, ip, cp, Ip, Dp, Mp, Cp, Ep, Xp) {
-       ! function(pp, ip) {
-         var cp = 8 * op.log2(ip + 1) * (pp + 1) | 0,
-           Ip = op.nextPow2(dp * cp);
-         jp.length < Ip && (Op.free(jp), jp = Op.mallocInt32(Ip));
-         var Sp = op.nextPow2(ep * cp);
-         kp.length < Sp && (Op.free(kp), kp = Op.mallocDouble(Sp))
-       }(pp, Ip + Cp);
-       var lp, Qp = 0,
- ... (64 more removed lines; see GitHub link above)
+       update(QQ, WQ) {
+         return QQ ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= WQ, WQ - this.lostAtMs >= 250)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L366-L411` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L195-L196) · [Before (L366-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L366-L411)

```diff
-     };
-     var Op = cp(38497),
-       op = cp(38502),
-       Ip = cp(38533),
-       Sp = Ip.partial,
-       xp = Ip.full,
-       Lp = cp(38519),
-       Yp = cp(38541),
-       Dp = cp(38548),
-       Ap = 128,
-       Pp = 1 << 22,
-       Wp = 1 << 22,
-       yp = Dp("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
-       Up = Dp("lo===p0", ["p0"]),
-       wp = Dp("lo<p0", ["p0"]),
-       vp = Dp("hi<=p0", ["p0"]),
- ... (30 more removed lines; see GitHub link above)
+       reset() {
+         this.lostAtMs = null
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L414-L434` → after: `L199-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L199-L201) · [Before (L414-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L414-L434)

```diff
- 
-     function qp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
-       var Dp = 2 * pp,
-         Ap = xp * Dp,
-         Pp = Lp[Ap + ip];
-       pp: for (var Wp = Op, yp = Op * Dp; Wp < op; ++Wp, yp += Dp) {
-         var Up = Sp[Wp];
-         if (Up !== Yp) {
-           var wp = Ip[yp + ip],
-             vp = Ip[yp + ip + pp];
-           if (!(Pp < wp || vp < Pp)) {
-             for (var tp = ip + 1; tp < pp; ++tp) {
-               wp = Ip[yp + tp], vp = Ip[yp + tp + pp];
-               var Hp = Lp[Ap + tp],
-                 dp = Lp[Ap + tp + pp];
-               if (vp < Hp || dp < wp) continue pp
- ... (5 more removed lines; see GitHub link above)
+     class lQ {
+       constructor(QQ, WQ) {
+         this.press = QQ, this.release = WQ, this.downAtMs = null, this.token = null, this.latched = !1
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L436-L477` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L203-L205) · [Before (L436-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L436-L477)

```diff
-     }
-   },
-   38541: (pp, ip, cp) => {
-     pp.exports = function(pp, ip, cp, Sp, xp, Lp) {
-       if (Sp <= cp + 1) return cp;
-       var Yp = cp,
-         Dp = Sp,
-         Ap = Sp + cp >>> 1,
-         Pp = 2 * pp,
-         Wp = Ap,
-         yp = xp[Pp * Ap + ip];
-       for (; Yp < Dp;) {
-         if (Dp - Yp < op) {
-           Ip(pp, ip, Yp, Dp, xp, Lp), yp = xp[Pp * Ap + ip];
-           break
-         }
- ... (26 more removed lines; see GitHub link above)
+       update(QQ, WQ, XQ, wQ) {
+         if (QQ && null === this.downAtMs) return this.downAtMs = XQ, this.latched = wQ, void(this.token = this.press(wQ));
+         null !== this.downAtMs && (this.latched ? QQ && this.end() : !WQ && XQ - this.downAtMs >= 40 && this.end())
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L479-L521` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L207-L208) · [Before (L479-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L479-L521)

```diff
-       return Op(pp, ip, cp, Ap, xp, Lp, xp[Pp * Ap + ip])
-     };
-     var Op = cp(38548)("lo<p0", ["p0"]),
-       op = 8;
- 
-     function Ip(pp, ip, cp, Op, op, Ip) {
-       for (var Sp = 2 * pp, xp = Sp * (cp + 1) + ip, Lp = cp + 1; Lp < Op; ++Lp, xp += Sp)
-         for (var Yp = op[xp], Dp = Lp, Ap = Sp * (Lp - 1); Dp > cp && op[Ap + ip] > Yp; --Dp, Ap -= Sp) {
-           for (var Pp = Ap, Wp = Ap + Sp, yp = 0; yp < Sp; ++yp, ++Pp, ++Wp) {
-             var Up = op[Pp];
-             op[Pp] = op[Wp], op[Wp] = Up
-           }
-           var wp = Ip[Dp];
-           Ip[Dp] = Ip[Dp - 1], Ip[Dp - 1] = wp
-         }
-     }
- ... (27 more removed lines; see GitHub link above)
+       isLatched() {
+         return null !== this.downAtMs && this.latched
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L523-L579` → after: `L210-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L210-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L210-L218) · [Before (L523-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L523-L579)

```diff
-     }
- 
-     function Op(pp, ip, cp) {
-       ip *= 2;
-       var Op = cp[pp *= 2],
-         op = cp[pp + 1];
-       cp[pp] = cp[ip], cp[pp + 1] = cp[ip + 1], cp[ip] = Op, cp[ip + 1] = op
-     }
- 
-     function op(pp, ip, cp) {
-       ip *= 2, cp[pp *= 2] = cp[ip], cp[pp + 1] = cp[ip + 1]
-     }
- 
-     function Ip(pp, ip, cp, Op) {
-       ip *= 2, cp *= 2;
-       var op = Op[pp *= 2],
- ... (41 more removed lines; see GitHub link above)
+       unlatch() {
+         this.latched = !1
+       }
+       cancel() {
+         null !== this.downAtMs && this.end()
+       }
+       end() {
+         const QQ = this.token;
+         this.downAtMs = null, this.token = null, this.latched = !1, this.release(QQ)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L594-L641` → after: `L221-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L221-L223) · [Before (L594-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L594-L641)

```diff
-   },
-   38519: (pp, ip, cp) => {
-     pp.exports = {
-       init: function(pp) {
-         var ip = op.nextPow2(pp);
-         Lp.length < ip && (Op.free(Lp), Lp = Op.mallocInt32(ip));
-         Yp.length < ip && (Op.free(Yp), Yp = Op.mallocInt32(ip));
-         Dp.length < ip && (Op.free(Dp), Dp = Op.mallocInt32(ip));
-         Ap.length < ip && (Op.free(Ap), Ap = Op.mallocInt32(ip));
-         Pp.length < ip && (Op.free(Pp), Pp = Op.mallocInt32(ip));
-         Wp.length < ip && (Op.free(Wp), Wp = Op.mallocInt32(ip));
-         var cp = 8 * ip;
-         yp.length < cp && (Op.free(yp), yp = Op.mallocDouble(cp))
-       },
-       sweepBipartite: function(pp, ip, cp, Op, op, xp, Pp, Wp, vp, tp) {
-         for (var Hp = 0, dp = 2 * pp, ep = pp - 1, jp = dp - 1, kp = cp; kp < Op; ++kp) {
- ... (32 more removed lines; see GitHub link above)
+     const hQ = {
+         kind: "specialAction",
+         action: "SpecialAction2"
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L643-L668` → after: `L225-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L225-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L225-L241) · [Before (L643-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L643-L668)

```diff
-       sweepComplete: function(pp, ip, cp, Op, op, Sp, xp, vp, tp, Hp) {
-         for (var dp = 0, ep = 2 * pp, jp = pp - 1, kp = ep - 1, mp = cp; mp < Op; ++mp) {
-           var Rp = Sp[mp] + 1 << 1,
-             qp = ep * mp;
-           yp[dp++] = op[qp + jp], yp[dp++] = -Rp, yp[dp++] = op[qp + kp], yp[dp++] = Rp
-         }
-         for (mp = xp; mp < vp; ++mp) {
-           Rp = Hp[mp] + 1 << 1;
-           var Mp = ep * mp;
-           yp[dp++] = tp[Mp + jp], yp[dp++] = 1 | -Rp, yp[dp++] = tp[Mp + kp], yp[dp++] = 1 | Rp
-         }
-         var Cp = dp >>> 1;
-         Ip(yp, Cp);
-         var Ep = 0,
-           Xp = 0,
-           lp = 0;
- ... (10 more removed lines; see GitHub link above)
+       iQ = QQ => {
+         let WQ = null;
+         const XQ = new HQ.d,
+           wQ = () => {
+             WQ && (((QQ, WQ, XQ) => {
+               switch (XQ.kind) {
+                 case "reload":
+                   return void WQ.specialActionUp("SpecialAction1");
+                 case "specialAction":
+                   return void WQ.specialActionUp(XQ.action);
+                 case "customButton":
+                   return void UQ.gameBridge.send("pressCustomButton", {
+                     id: XQ.id,
+                     down: !1
+                   });
+                 case "touchButton":
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L670-L673` → after: `L243-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L243-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L243-L263) · [Before (L670-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L670-L673)

```diff
-             if (1 !== Jp)
-               for (Np = 0; Np < Xp; ++Np) {
-                 var Tp;
-                 if (void 0 !== (Tp = ip(Dp[Np], Bp))) return Tp
+             })(QQ, WQ.bodies, WQ.action), WQ = null)
+           },
+           TQ = (XQ, qQ, TQ, zQ) => {
+             wQ(), WQ = {
+               action: qQ,
+               bodies: XQ,
+               heldBy: TQ,
+               atMs: zQ
+             }, ((QQ, WQ, XQ) => {
+               switch (XQ.kind) {
+                 case "reload":
+                   return WQ.reloadGun(), void WQ.specialActionDown("SpecialAction1");
+                 case "specialAction":
+                   return void WQ.specialActionDown(XQ.action);
+                 case "customButton":
+                   return void UQ.gameBridge.send("pressCustomButton", {
+ ... (5 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L675-L678` → after: `L265-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L265-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L265-L286) · [Before (L675-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L675-L678)

```diff
-             0 === Jp ? wp(Lp, Yp, Ep++, Bp) : 1 === Jp ? wp(Dp, Ap, Xp++, Bp) : 2 === Jp && wp(Pp, Wp, lp++, Bp)
-           } else {
-             Bp = (Qp >> 1) - 1;
-             0 === Jp ? Up(Lp, Yp, Ep--, Bp) : 1 === Jp ? Up(Dp, Ap, Xp--, Bp) : 2 === Jp && Up(Pp, Wp, lp--, Bp)
+             })(QQ, XQ, qQ)
+           };
+         return {
+           update: (zQ, sQ, PQ, gQ) => {
+             var rQ;
+             const IQ = (0, vQ.i)(QQ.contextActionInputs()),
+               jQ = null !== (rQ = IQ[0]) && void 0 !== rQ ? rQ : hQ;
+             (0, dQ.e)((0, vQ.e)(jQ) ? jQ : null);
+             const BQ = (0, vQ.d)(IQ);
+             (0, dQ.i)(BQ);
+             const yQ = (0, FQ.g)("actionButton");
+             if (BQ) {
+               const QQ = XQ.update(sQ.wasPressed(yQ), sQ.isHeld(yQ), PQ, gQ);
+               "tap" === QQ ? TQ(zQ, jQ, [yQ], PQ) : "hold" === QQ && (JQ.b.consumeButton(yQ), qQ.k.mB(GQ.n, IQ))
+             } else XQ.release(), sQ.wasPressed(yQ) && TQ(zQ, jQ, [yQ], PQ);
+             WQ && PQ - WQ.atMs >= 40 && !WQ.heldBy.some((QQ => (0, bQ.O)(sQ.frame.values, QQ))) && wQ()
+ ... (6 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L681-L724` → after: `L289-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L289-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L289-L310) · [Before (L681-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L681-L724)

```diff
-       },
-       scanBipartite: function(pp, ip, cp, Op, op, xp, Dp, Ap, Pp, Wp, vp, tp) {
-         var Hp = 0,
-           dp = 2 * pp,
-           ep = ip,
-           jp = ip + pp,
-           kp = 1,
-           mp = 1;
-         Op ? mp = Sp : kp = Sp;
-         for (var Rp = op; Rp < xp; ++Rp) {
-           var qp = Rp + kp,
-             Mp = dp * Rp;
-           yp[Hp++] = Dp[Mp + ep], yp[Hp++] = -qp, yp[Hp++] = Dp[Mp + jp], yp[Hp++] = qp
-         }
-         for (Rp = Pp; Rp < Wp; ++Rp) {
-           qp = Rp + mp;
- ... (28 more removed lines; see GitHub link above)
+       };
+     var cQ = XQ(8536);
+     var AQ = XQ(40798),
+       RQ = XQ(9128),
+       EQ = XQ(8590),
+       CQ = XQ(9211);
+     var uQ = XQ(40796),
+       LQ = XQ(9220),
+       kQ = XQ(40807),
+       fQ = XQ(9189),
+       SQ = XQ(9130),
+       tQ = XQ(9137),
+       oQ = XQ(9143),
+       eQ = XQ(9043),
+       nQ = XQ(9101);
+     const xQ = () => eQ.b[(0, rQ.g)().tapHoldTime].wheelMs,
+ ... (6 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L727-L760` → after: `L323-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L323-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L323-L449) · [Before (L727-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L727-L760)

```diff
-       scanComplete: function(pp, ip, cp, Op, op, xp, Yp, Dp, Ap, Pp, Wp) {
-         for (var Up = 0, wp = 2 * pp, vp = ip, tp = ip + pp, Hp = Op; Hp < op; ++Hp) {
-           var dp = Hp + Sp,
-             ep = wp * Hp;
-           yp[Up++] = xp[ep + vp], yp[Up++] = -dp, yp[Up++] = xp[ep + tp], yp[Up++] = dp
-         }
-         for (Hp = Dp; Hp < Ap; ++Hp) {
-           dp = Hp + 1;
-           var jp = wp * Hp;
-           yp[Up++] = Pp[jp + vp], yp[Up++] = -dp
-         }
-         var kp = Up >>> 1;
-         Ip(yp, kp);
-         var mp = 0;
-         for (Hp = 0; Hp < kp; ++Hp) {
-           var Rp = 0 | yp[2 * Hp + 1];
- ... (18 more removed lines; see GitHub link above)
+       OQ = QQ => {
+         const WQ = {
+           x: 0,
+           y: 0,
+           magnitude: 0,
+           headingOffset: 0,
+           jumpHeld: !1,
+           jumpPressed: !1,
+           running: !1,
+           sprintHeld: !1
+         };
+         let XQ = ZQ;
+         const gQ = new kQ.d,
+           UQ = qQ.k.subscribe("appManagerUpdated|activeInputDevice", (WQ => {
+             QQ.deviceChanged(WQ)
+           }));
+ ... (111 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L763-L863` → after: `L474-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L474-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L474-L487) · [Before (L763-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L763-L863)

```diff
-           } else {
-             for (dp = Rp - Sp, Xp = mp - 1; Xp >= 0; --Xp)
-               if (Lp[Xp] === dp) {
-                 for (Bp = Xp + 1; Bp < mp; ++Bp) Lp[Bp - 1] = Lp[Bp];
-                 break
-               }-- mp
-           }
-         }
-       }
-     };
-     var Op = cp(38497),
-       op = cp(38502),
-       Ip = cp(38526),
-       Sp = 1 << 28,
-       xp = 1024,
-       Lp = Op.mallocInt32(xp),
- ... (85 more removed lines; see GitHub link above)
+           }),
+           DW = (0, AQ.i)(QQ),
+           pW = (() => {
+             const QQ = qQ.k.subscribe(cQ.e, (QQ => {
+               !QQ && (0, IQ.i)() && "inGame" === wQ.b.get("gameState") && qQ.k.mB("showBottomMessage", {
+                 message: [{
+                   translationKey: "controller:disconnected"
+                 }],
+                 timeoutLength: 3e3,
+                 type: "Warning"
+               })
+             }));
+             return () => {
+               qQ.k.unsubscribe(QQ)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L865-L971` → after: `L489-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L489-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L489-L491) · [Before (L865-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L865-L971)

```diff
-           }
-           pp.length = 0
-         }(xp.multiComps), xp.removals.length && function(pp) {
-           for (var ip = 0; ip < pp.length; ip++) {
-             pp[ip].flush()
-           }
-           pp.length = 0
-         }(xp.removals)
-       }
-       this.XU = op, this._systems = Ip, this._renderSystems = Sp, this.iZ = function(ip) {
-         var Op = cp++;
-         return Array.isArray(ip) && ip.forEach((ip => pp.vJ(Op, ip))), Op
-       }, this.deleteEntity = function(ip) {
-         return Object.keys(op).forEach((pp => {
-           op[pp].hash[ip] && Lp(ip, pp)
-         })), pp
- ... (91 more removed lines; see GitHub link above)
+           })();
+         return () => {
+           JW(), QQ.uninstall(), (0, fQ.g)(!1), (0, oQ.g)(!1), qQ.k.unsubscribe(UQ), qQ.k.unsubscribe(QW), VW(), DW(), pW(), OQ.uninstall()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L993-L1024` → after: `L495-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L495-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L495-L524) · [Before (L993-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L993-L1024)

```diff
-   38458: pp => {
-     function ip(pp, ip) {
-       var cp = pp._map[ip];
-       if (delete pp.hash[ip], delete pp._map[ip], cp === pp.list.length - 1) pp.list.pop(), pp._idList.pop();
-       else {
-         var Op = pp.list.pop();
-         pp.list[cp] = Op;
-         var op = pp._idList.pop();
-         pp._idList[cp] = op, pp._map[op] = cp
-       }
-     }
-     pp.exports = class {
-       constructor() {
-         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
-       }
-       add(pp, ip) {
- ... (16 more removed lines; see GitHub link above)
+   40798: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => jQ,
+       i: () => yQ,
+       m: () => IQ
+     });
+     var wQ = XQ(1335),
+       qQ = XQ(4572),
+       TQ = XQ(9159),
+       zQ = XQ(37207),
+       sQ = XQ(1783),
+       FQ = XQ(1221),
+       PQ = XQ(8608),
+       gQ = XQ(9096),
+       JQ = XQ(9176);
+     const rQ = {
+ ... (14 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1030-L1293` → after: `L528-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L528-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L528-L571) · [Before (L1030-L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1030-L1293)

```diff
-   38272: (pp, ip, cp) => {
-     pp = cp.nmd(pp);
-     var Op = "__lodash_hash_undefined__",
-       op = 9007199254740991,
-       Ip = "[object Arguments]",
-       Sp = "[object Boolean]",
-       xp = "[object Date]",
-       Lp = "[object Function]",
-       Yp = "[object GeneratorFunction]",
-       Dp = "[object Map]",
-       Ap = "[object Number]",
-       Pp = "[object Object]",
-       Wp = "[object Promise]",
-       yp = "[object RegExp]",
-       Up = "[object Set]",
-       wp = "[object String]",
- ... (248 more removed lines; see GitHub link above)
+   40796: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => qQ,
+       f: () => FQ,
+       j: () => sQ,
+       k: () => gQ,
+       o: () => zQ,
+       p: () => TQ,
+       q: () => PQ,
+       t: () => JQ
+     });
+     var wQ = XQ(8545);
+     class qQ {
+       constructor() {
+         this.fullTiltSinceMs = null
+       }
+ ... (28 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1295-L1296` → after: `L573-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L573-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L573-L582) · [Before (L1295-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1295-L1296)

```diff
-             var Ip
-           }(pp, Bp, Ni, ip)
+           }(WQ, XQ, {
+             yawBoost: zQ,
+             aiming: qQ
+           })
+       },
+       zQ = (QQ, WQ) => {
+         const XQ = Math.max(0, Math.min(250, WQ)) / 1e3;
+         return {
+           jR: QQ.yawRadPerSec * XQ,
+           yR: QQ.pitchRadPerSec * XQ
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1418-L1503` → after: `L585-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L585-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L585-L600) · [Before (L1418-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1418-L1503)

```diff
-       gi = function(pp) {
-         return oi.call(pp)
-       };
- 
-     function Gi(pp, ip) {
-       return !!(ip = null == ip ? op : ip) && ("number" == typeof pp || Qp.test(pp)) && pp > -1 && pp % 1 == 0 && pp < ip
-     }
- 
-     function ri(pp) {
-       var ip = pp && pp.constructor;
-       return pp === ("function" == typeof ip && ip.prototype || Kp)
-     }
- 
-     function Zi(pp) {
-       if (null != pp) {
-         try {
- ... (70 more removed lines; see GitHub link above)
+       sQ = (QQ, WQ) => WQ ? {
+         move: QQ.rightStick,
+         look: QQ.leftStick
+       } : {
+         move: QQ.leftStick,
+         look: QQ.rightStick
+       },
+       FQ = (QQ, WQ) => {
+         const XQ = (0, wQ.p)(QQ, WQ),
+           qQ = Math.min(1, Math.hypot(XQ.x, XQ.y));
+         return {
+           magnitude: qQ,
+           speed: Math.min(1, qQ / .8),
+           headingOffset: 0 === qQ ? 0 : Math.atan2(XQ.x, -XQ.y),
+           x: XQ.x,
+           y: XQ.y
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1505-L1613` → after: `L602-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L602-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L602-L637) · [Before (L1505-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1505-L1613)

```diff
-         if (Lp < op || xp > Ip) return 1 / 0;
-         xp > op && (op = xp), Lp < Ip && (Ip = Lp)
-       }
-       return op > Ip ? 1 / 0 : op
-     }
-     pp.exports = function(pp, cp, Op, op) {
-       var Ip = ip(cp, Op, op);
-       if (Ip === 1 / 0) pp = null;
-       else {
-         pp = pp || [];
-         for (var Sp = 0; Sp < cp.length; Sp++) pp[Sp] = cp[Sp] + Op[Sp] * Ip
-       }
-       return pp
-     }, pp.exports.distance = ip
-   },
-   37951: (pp, ip, cp) => {
- ... (93 more removed lines; see GitHub link above)
+       },
+       PQ = (QQ, WQ) => {
+         let {
+           sprintPressed: XQ,
+           magnitude: wQ,
+           autoSprint: qQ,
+           nowMs: TQ
+         } = WQ;
+         const zQ = XQ ? TQ : QQ.latchedAtMs,
+           sQ = (QQ => {
+             let {
+               running: WQ,
+               magnitude: XQ,
+               sprintPressed: wQ,
+               autoSprint: qQ
+             } = QQ;
+ ... (20 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1615` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L639) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1615)

```diff
-   37985: (pp, ip, cp) => {
+   40807: (QQ, WQ, XQ) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1617` → after: `L641-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L641-L642) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1617)

```diff
-       c: () => op
+       d: () => qQ,
+       g: () => wQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1619-L1644` → after: `L644-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L644-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L644-L665) · [Before (L1619-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1619-L1644)

```diff
-     var Op = cp(37989);
-     class op {
-       static GetPlanes(pp) {
-         const ip = [];
-         for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
-         return op.GetPlanesToRef(pp, ip), ip
-       }
-       static GetNearPlaneToRef(pp, ip) {
-         const cp = pp.m;
-         ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
-       }
-       static GetFarPlaneToRef(pp, ip) {
-         const cp = pp.m;
-         ip.normal.x = cp[3] - cp[2], ip.normal.y = cp[7] - cp[6], ip.normal.z = cp[11] - cp[10], ip.d = cp[15] - cp[14], ip.normalize()
-       }
-       static GetLeftPlaneToRef(pp, ip) {
- ... (10 more removed lines; see GitHub link above)
+     const wQ = QQ => {
+       let {
+         mode: WQ,
+         sneakHeld: XQ,
+         sneakPressed: wQ,
+         sneakTogglePressed: qQ,
+         descending: TQ,
+         canCrouch: zQ,
+         toggled: sQ
+       } = QQ;
+       return zQ ? TQ ? {
+         crouchHeld: XQ,
+         toggled: !1
+       } : "hold" === WQ ? {
+         crouchHeld: XQ,
+         toggled: qQ ? !sQ : sQ
+ ... (6 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1646-L1664` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L667) · [Before (L1646-L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1646-L1664)

```diff
-       static GetBottomPlaneToRef(pp, ip) {
-         const cp = pp.m;
-         ip.normal.x = cp[3] + cp[1], ip.normal.y = cp[7] + cp[5], ip.normal.z = cp[11] + cp[9], ip.d = cp[15] + cp[13], ip.normalize()
-       }
-       static GetPlanesToRef(pp, ip) {
-         op.GetNearPlaneToRef(pp, ip[0]), op.GetFarPlaneToRef(pp, ip[1]), op.GetLeftPlaneToRef(pp, ip[2]), op.GetRightPlaneToRef(pp, ip[3]), op.GetTopPlaneToRef(pp, ip[4]), op.GetBottomPlaneToRef(pp, ip[5])
-       }
-       static IsPointInFrustum(pp, ip) {
-         for (let cp = 0; cp < 6; cp++)
-           if (ip[cp].dotCoordinate(pp) < 0) return !1;
-         return !0
-       }
-     }
-   },
-   37989: (pp, ip, cp) => {
-     cp.d(ip, {
- ... (3 more removed lines; see GitHub link above)
+     };
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1666-L1740` → after: `L669-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L669-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L669-L682) · [Before (L1666-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1666-L1740)

```diff
-       constructor(pp, ip, cp, op) {
-         this.normal = new Op.o(pp, ip, cp), this.d = op
-       }
-       BOp() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let pp = this.normal.getHashCode();
-         return pp = 397 * pp ^ this.d, pp
-       }
- ... (59 more removed lines; see GitHub link above)
+       constructor() {
+         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
+       }
+       lostToPadScreen() {
+         this.regainPending = !0
+       }
+       filter(QQ, WQ) {
+         this.regainPending && (this.regainPending = !1, this.regainedAtMs = WQ, this.graceEndsMs = WQ + 500);
+         const XQ = WQ < this.graceEndsMs;
+         return XQ && (QQ.sneakPressed || QQ.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, WQ + 300))), QQ.sneakHeld ? XQ && QQ.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
+           sneakHeld: QQ.sneakHeld && !this.ignoringHeld,
+           sneakPressed: QQ.sneakPressed && !this.ignoringHeld,
+           sneakTogglePressed: QQ.sneakTogglePressed && !XQ
+         }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1745-L1756` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L686-L687) · [Before (L1745-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1745-L1756)

```diff
-   37313: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       Matrix: () => Op.b,
-       Quaternion: () => Op.f,
-       RegisterMathVector: () => Op.h,
-       TmpVectors: () => Op.i,
-       Vector2: () => Op.l,
-       Zy: () => Op.o,
-       Vector4: () => Op.q
-     });
-     var Op = cp(37320);
-     (0, Op.h)()
+   40787: (QQ, WQ, XQ) => {
+     XQ(9220)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1758` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L689) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1758)

```diff
-   38313: (pp, ip, cp) => {
+   40790: (QQ, WQ, XQ) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1760` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L691) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1760)

```diff
-       c: () => Op
+       d: () => pQ
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L1762-L1773` → after: `L693-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L693-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/233.js#L693-L779) · [Before (L1762-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/233.js#L1762-L1773)

```diff
-     class Op {
-       constructor(pp, ip, cp, Op) {
-         this.x = pp, this.y = ip, this.width = cp, this.height = Op
-       }
-       toGlobal(pp, ip) {
-         return new Op(this.x * pp, this.y * ip, this.width * pp, this.height * ip)
-       }
-       toGlobalToRef(pp, ip, cp) {
-         return cp.x = this.x * pp, cp.y = this.y * ip, cp.width = this.width * pp, cp.height = this.height * ip, this
-       }
-       clone() {
-         return new Op(this.x, this.y, this.width, this.height)
+     var wQ = XQ(31),
+       qQ = XQ(9159),
+       TQ = XQ(9170),
+       zQ = XQ(8561),
+       sQ = XQ(8596),
+       FQ = XQ(8572),
+       PQ = XQ(40796),
+       gQ = XQ(40798),
+       JQ = XQ(8608),
+       rQ = XQ(8545),
+       IQ = XQ(9096),
+       jQ = XQ(9176);
+     const BQ = [{
+         isOpen: qQ.g,
+         openButton: () => (0, zQ.g)("emoteWheel"),
+         aim: QQ => {
+ ... (71 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/234.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/234.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89)

#### 1. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L2)

```diff
- export const ids = [234, 241, 244];
+ export const ids = [234];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L4)

```diff
-   40435: (pp, ip, cp) => {
+   38756: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L6-L7)

```diff
-       e: () => Sp,
-       f: () => xp
+       c: () => jQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L9-L58` → after: `L8-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L8-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L8-L605) · [Before (L9-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L9-L58)

```diff
-     var Op = cp(38905),
-       op = cp(40233),
-       Ip = cp(40411),
-       Sp = {};
-     class xp {
-       constructor(pp) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = pp, this.checkInputs = () => {}
-       }
-       add(pp) {
-         const ip = pp.getSimpleName();
-         this.attached[ip] ? Op.e.Warn("camera input of type " + ip + " already exists on camera") : (this.attached[ip] = pp, pp.camera = this.camera, pp.checkInputs && (this.checkInputs = this._addCheckInputs(pp.checkInputs.bind(pp))), this.attachedToElement && pp.attachControl(t … [truncated]
-       }
-       remove(pp) {
-         for (const ip in this.attached) {
-           const cp = this.attached[ip];
-           if (cp === pp) return cp.detachControl(), cp.camera = null, delete this.attached[ip], void this.rebuildInputCheck()
- ... (34 more removed lines; see GitHub link above)
+     var wQ = XQ(231),
+       qQ = XQ(37924);
+     const TQ = 1.2,
+       zQ = {
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
+         Bs: .5,
+ ... (582 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L60-L191` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L607) · [Before (L60-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L60-L191)

```diff
-       }
-       clear() {
-         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
-       }
-       serialize(pp) {
-         const ip = {};
-         for (const cp in this.attached) {
-           const pp = this.attached[cp],
-             Op = op.c.Serialize(pp);
-           ip[pp.getClassName()] = Op
-         }
-         pp.inputsmgr = ip
-       }
-       parse(pp) {
-         const ip = pp.inputsmgr;
-         if (ip) {
- ... (116 more removed lines; see GitHub link above)
+       };
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L193-L247` → after: `L609-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L609-L610) · [Before (L193-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L193-L247)

```diff
-     function Pp() {
-       Ap || (Ap = !0, Lp.b.AddNodeConstructor("Light_Type_3", ((pp, ip) => () => new Dp(pp, Ip.o.Zero(), ip))), (0, Yp.g)("BABYLON.HemisphericLight", Dp))
-     }
-   },
-   37479: (pp, ip, cp) => {
-     cp.d(ip, {
-       Color3: () => Op.d,
-       b: () => Op.h
-     });
-     var Op = cp(37487);
-     (0, Op.i)()
-   },
-   37985: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => op
-     });
- ... (39 more removed lines; see GitHub link above)
+     function jQ(QQ) {
+       return IQ[QQ]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L250` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L613) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L250)

```diff
-   37989: (pp, ip, cp) => {
+   37343: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L252` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L615) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L252)

```diff
-       e: () => op
+       d: () => wQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L254-L330` → after: `L617-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L617-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L617-L773) · [Before (L254-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L254-L330)

```diff
-     var Op = cp(37320);
-     class op {
-       constructor(pp, ip, cp, op) {
-         this.normal = new Op.o(pp, ip, cp), this.d = op
-       }
-       BOp() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let pp = this.normal.getHashCode();
- ... (61 more removed lines; see GitHub link above)
+     const wQ = {
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

#### 10. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L335-L348` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L777) · [Before (L335-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L335-L348)

```diff
-   37313: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       Matrix: () => Op.b,
-       Quaternion: () => Op.f,
-       RegisterMathVector: () => Op.h,
-       TmpVectors: () => Op.i,
-       Vector2: () => Op.l,
-       Zy: () => Op.o,
-       Vector4: () => Op.q
-     });
-     var Op = cp(37320);
-     (0, Op.h)()
-   },
-   38313: (pp, ip, cp) => {
+   37926: (QQ, WQ, XQ) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L350` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L779) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L350)

```diff
-       c: () => Op
+       d: () => zQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L352-L364` → after: `L781-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L781-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L781-L800) · [Before (L352-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L352-L364)

```diff
-     class Op {
-       constructor(pp, ip, cp, Op) {
-         this.x = pp, this.y = ip, this.width = cp, this.height = Op
-       }
-       toGlobal(pp, ip) {
-         return new Op(this.x * pp, this.y * ip, this.width * pp, this.height * ip)
-       }
-       toGlobalToRef(pp, ip, cp) {
-         return cp.x = this.x * pp, cp.y = this.y * ip, cp.width = this.width * pp, cp.height = this.height * ip, this
-       }
-       clone() {
-         return new Op(this.x, this.y, this.width, this.height)
-       }
+     var wQ = XQ(416),
+       qQ = XQ.n(wQ),
+       TQ = XQ(1972);
+     let zQ;
+     var sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ;
+     const yQ = [1, 71, 0, 8, "c", 9, "g", 5, 6, "d", 255, "length", 2, 169, "b", 4, "undefined", void 0, 3, 245, 63, "fromCodePoint", 7, 12, "push", "a", 91, 8191, 88, 13, 14, 38, 174, 103, "f", !1, 20, "h", 146, 112, 227, !0, 155, 127, 125, 213, "e", 128, 131, 195, 196, 236, 121 … [truncated]
+ 
+     function VQ(...QQ) {
+       return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = function(...QQ) {
+         for (iQ(QQ[yQ[11]] = yQ[0], QQ[yQ[0]] = 'eTnQPCsFZVrd<14fjNIg;YcAOLMqH%U*&b@[z8>KS`DR0/"p,o2mi^5]GX3tEhwva|{!lB_Wk$?+96:y)~=u}x(#7.J', QQ[-yQ[1]] = "" + (QQ[yQ[2]] || ""), QQ[yQ[4]] = QQ[-yQ[1]].length, QQ[yQ[9]] = [], QQ[yQ[7]] = yQ[2], QQ[yQ[8]] = yQ[2], QQ[yQ[6]] = -yQ … [truncated]
+           if (QQ[yQ[5]] = QQ[yQ[0]].indexOf(QQ[-yQ[1]][QQ[yQ[3]]]), QQ[yQ[5]] !== -yQ[0])
+             if (QQ[yQ[6]] < yQ[2]) QQ[yQ[6]] = QQ[yQ[5]];
+             else {
+               iQ(QQ[yQ[6]] += QQ[yQ[5]] * yQ[26], QQ[yQ[7]] |= QQ[yQ[6]] << QQ[yQ[8]], QQ[yQ[8]] += (QQ[yQ[6]] & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
+               do {
+                 iQ(QQ[yQ[9]].push(QQ[yQ[7]] & yQ[10]), QQ[yQ[7]] >>= yQ[3], QQ[yQ[8]] -= yQ[3])
+ ... (4 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L378-L427` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L804) · [Before (L378-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L378-L427)

```diff
-       let ip = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
-       const cp = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
-         Ip = [],
-         Lp = pp.width || pp.size || 1,
-         Yp = pp.height || pp.size || 1,
-         Dp = pp.depth || pp.size || 1,
-         Ap = pp.wrap || !1;
-       let Pp = void 0 === pp.topBaseAt ? 1 : pp.topBaseAt,
-         Wp = void 0 === pp.bottomBaseAt ? 0 : pp.bottomBaseAt;
-       Pp = (Pp + 4) % 4, Wp = (Wp + 4) % 4;
-       let yp = [2, 0, 3, 1][Pp],
-         Up = [2, 0, 1, 3][Wp],
-         wp = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
-       if (Ap) {
-         ip = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], wp = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
-         let pp = [
- ... (34 more removed lines; see GitHub link above)
+       return typeof gQ !== yQ[16] && gQ ? (new gQ).decode(new JQ(QQ)) : typeof rQ !== yQ[16] && rQ ? rQ.from(QQ).toString("utf-8") : BQ(QQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L430-L435` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L807-L808) · [Before (L430-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L430-L435)

```diff
-     function Yp(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const Op = new Ip.d(pp, cp);
-       ip.sideOrientation = Ip.d._GetDefaultSideOrientation(ip.sideOrientation), Op._originalBuilderSideOrientation = ip.sideOrientation;
-       return Lp(ip).applyToMesh(Op, ip.updatable), Op
+     function pQ(...QQ) {
+       if (QQ[yQ[11]] = yQ[18], QQ[yQ[2]] === VQ(119) + yQ[95]) return QQ[yQ[0]] + QQ[yQ[12]]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L457-L482` → after: `L811-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L811-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L811-L835) · [Before (L457-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L457-L482)

```diff
-     function Yp(pp) {
-       const ip = [],
-         cp = [],
-         Op = pp.lines,
-         op = pp.colors,
-         Sp = [];
-       let xp = 0;
-       for (let Ip = 0; Ip < Op.length; Ip++) {
-         const pp = Op[Ip];
-         for (let Op = 0; Op < pp.length; Op++) {
-           const {
-             x: Lp,
-             y: Yp,
-             z: Dp
-           } = pp[Op];
-           if (cp.push(Lp, Yp, Dp), op) {
- ... (10 more removed lines; see GitHub link above)
+     function GQ() {}
+     iQ(sQ = {}, FQ = ['/XcV"6^p&f_$iP0>b8%rn^j_n576EEwNgXQ', 'vV^*X"m+UI?GbjfqCRc*,}YFMwCVT', "}KLq4zaUj<]{zq%NeYl6W]%pG;/iOuwz+e", "2mQ2F]jztt%|YjGD~,w$l?vT", "Sl4i:~7ii5[yGEW*?,i^A9GS@VbtEq+g_*fV/Ge", 'OVRk"vN~J4', "yGB9k,4zR;!6T,|*", "bArkW2V^>aEHcCE`[<C]NBS<UY2G>oPIxL;?P@QLYa … [truncated]
+       iQ(QQ[yQ[11]] = yQ[2], QQ[yQ[14]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], QQ[yQ[4]] = yQ[17], QQ[yQ[12]] = []);
+       try {
+         iQ(QQ[yQ[4]] = Object, QQ[yQ[12]][yQ[24]]("".__proto__.constructor.name))
+       } catch (FQ) {}
+       QQ: for (QQ[-yQ[13]] = yQ[2]; QQ[-yQ[13]] < QQ[yQ[14]][yQ[11]]; QQ[-yQ[13]]++) try {
+         for (QQ[yQ[4]] = QQ[yQ[14]][QQ[-yQ[13]]](), QQ[yQ[15]] = yQ[2]; QQ[yQ[15]] < QQ[yQ[12]][yQ[11]]; QQ[yQ[15]]++)
+ ... (9 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L489-L504` → after: `L855-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L855-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L855-L870) · [Before (L489-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L489-L504)

```diff
-     function Dp(pp) {
-       const ip = pp.dashSize || 3,
-         cp = pp.gapSize || 1,
-         op = pp.dashNb || 200,
-         Sp = pp.points,
-         xp = [],
-         Lp = [],
-         Yp = Op.o.Zero();
-       let Dp, Ap, Pp, Wp = 0,
-         yp = 0;
-       for (Pp = 0; Pp < Sp.length - 1; Pp++) Sp[Pp + 1].subtractToRef(Sp[Pp], Yp), Wp += Yp.length();
-       const Up = Wp / op,
-         wp = ip * Up / (ip + cp);
-       for (Pp = 0; Pp < Sp.length - 1; Pp++) {
-         Sp[Pp + 1].subtractToRef(Sp[Pp], Yp), Dp = Math.floor(Yp.length() / Up), Yp.normalize();
-         for (let pp = 0; pp < Dp; pp++) Ap = Up * pp, xp.push(Sp[Pp].x + Ap * Yp.x, Sp[Pp].y + Ap * Yp.y, Sp[Pp].z + Ap * Yp.z), xp.push(Sp[Pp].x + (Ap + wp) * Yp.x, Sp[Pp].y + (Ap + wp) * Yp.y, Sp[Pp].z + (Ap + wp) * Yp.z), Lp.push(yp, yp + 1), yp += 2
+       function XQ(...QQ) {
+         return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = WQ(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
+       }
+       throw QQ[yQ[11]] = yQ[2], new Error(XQ(yQ[52]))
+     }) => {
+       function WQ(...QQ) {
+         for (iQ(QQ[yQ[11]] = yQ[0], QQ[yQ[32]] = ':nZF^uxdJ0}qgp`YzH>UX?S+[I@E5aTV<D#e2QtPCbr1isf8]~_B3N"(7|O9jmv6;&y.AMk=,R/h!)WoKc{w*4%Ll$G', QQ[yQ[12]] = "" + (QQ[yQ[2]] || ""), QQ[yQ[4]] = QQ[yQ[12]].length, QQ[yQ[15]] = [], QQ[yQ[33]] = yQ[2], QQ[yQ[34]] = yQ[2], QQ[yQ[6]] = … [truncated]
+           if (QQ[yQ[5]] = QQ[yQ[32]].indexOf(QQ[yQ[12]][QQ[yQ[31]]]), QQ[yQ[5]] !== -yQ[0])
+             if (QQ[yQ[6]] < yQ[2]) QQ[yQ[6]] = QQ[yQ[5]];
+             else {
+               iQ(QQ[yQ[6]] += QQ[yQ[5]] * yQ[26], QQ[yQ[33]] |= QQ[yQ[6]] << QQ[yQ[34]], QQ[yQ[34]] += (QQ[yQ[6]] & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
+               do {
+                 iQ(QQ[yQ[15]].push(QQ[yQ[33]] & yQ[10]), QQ[yQ[33]] >>= yQ[3], QQ[yQ[34]] -= yQ[3])
+               } while (QQ[yQ[34]] > yQ[22]);
+               QQ[yQ[6]] = -yQ[0]
+             } return QQ[yQ[6]] > -yQ[0] && QQ[yQ[15]].push((QQ[yQ[33]] | QQ[yQ[6]] << QQ[yQ[34]]) & yQ[10]), DQ(QQ[yQ[15]])
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L510-L523` → after: `L873-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L873-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L873-L896) · [Before (L510-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L510-L523)

```diff
-     function Ap(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const Op = ip.instance,
-         op = ip.lines,
-         Ip = ip.colors;
-       if (Op) {
-         const pp = Op.getVerticesData(xp.j.PositionKind);
-         let ip, cp;
-         Ip && (ip = Op.getVerticesData(xp.j.ColorKind));
-         let Sp = 0,
-           Lp = 0;
-         for (let Op = 0; Op < op.length; Op++) {
-           const xp = op[Op];
-           for (let op = 0; op < xp.length; op++) pp[Sp] = xp[op].x, pp[Sp + 1] = xp[op].y, pp[Sp + 2] = xp[op].z, Ip && ip && (cp = Ip[Op], ip[Lp] = cp[op].r, ip[Lp + 1] = cp[op].g, ip[Lp + 2] = cp[op].b, ip[Lp + 3] = cp[op].a, Lp += 4), Sp += 3
+       function XQ(...QQ) {
+         return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = WQ(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
+       }
+       const wQ = new Set(process.argv.slice(yQ[12]));
+       if (!wQ.has(XQ(122))) {
+         if (wQ.size !== yQ[0]) return yQ[35];
+         if (!wQ.has("-v")) return yQ[35]
+       }
+       return await (async (WQ, XQ) => {
+         function wQ(QQ) {
+           var WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ = '{FcT<2/^V96lCUt78Xao~;.B`!&>K,L@i[H|NuP%kJ_vQnmh1pWR35wfYZ)+=e*0Sx:b4]#?qAsdIjGO$Dz}grEy"M(';
+           for (iQ(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = yQ[2], TQ = yQ[2], zQ = -yQ[0]), sQ = yQ[2]; sQ < XQ; sQ++) {
+             var PQ = FQ.indexOf(WQ[sQ]);
+             if (PQ !== -yQ[0])
+               if (zQ < yQ[2]) zQ = PQ;
+               else {
+ ... (8 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L532-L543` → after: `L899-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L899-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L899-L953) · [Before (L532-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L532-L543)

```diff
-     function Pp(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const Op = ip.colors ? [ip.colors] : null;
-       return Ap(pp, {
-         lines: [ip.points],
-         updatable: ip.updatable,
-         instance: ip.instance,
-         colors: Op,
-         useVertexAlpha: ip.useVertexAlpha,
-         material: ip.material
-       }, cp)
-     }
+         function qQ(QQ) {
+           return typeof sQ[QQ] === yQ[16] ? sQ[QQ] = wQ(FQ[QQ]) : sQ[QQ]
+         }
+         return XQ === await QQ() ? qQ(yQ[44]) + "l)" : ""
+       })(), yQ[41]
+     });
+     const UQ = qQ()[VQ(yQ[43])](),
+       bQ = qQ()[VQ(yQ[43])](),
+       vQ = qQ()[VQ(yQ[43])](),
+       dQ = qQ()[VQ(yQ[43])](),
+       HQ = qQ()[VQ(yQ[43])](),
+       aQ = qQ()[VQ(yQ[43])](),
+       lQ = qQ()[VQ(yQ[43])](),
+       hQ = (...QQ) => {
+         function WQ(...QQ) {
+           return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = function(...QQ) {
+ ... (39 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L545-L568` → after: `L955-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L955-L956) · [Before (L545-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L545-L568)

```diff
-     function Wp(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const Ip = ip.points,
-         xp = ip.instance,
-         Yp = ip.gapSize || 1,
-         Ap = ip.dashSize || 3;
-       if (xp) {
-         const pp = pp => {
-           const ip = Op.o.Zero(),
-             cp = pp.length / 6;
-           let op, Sp, Lp, Yp, Dp = 0,
-             Ap = 0;
-           for (Lp = 0; Lp < Ip.length - 1; Lp++) Ip[Lp + 1].subtractToRef(Ip[Lp], ip), Dp += ip.length();
-           const Pp = Dp / cp,
-             Wp = xp._creationDataStorage.dashSize,
-             yp = Wp * Pp / (Wp + xp._creationDataStorage.gapSize);
- ... (8 more removed lines; see GitHub link above)
+     function iQ() {
+       iQ = function() {}
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L570-L624` → after: `L958-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L958-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L958-L1001) · [Before (L570-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L570-L624)

```diff
-     let yp = !1;
-     yp || (yp = !0, Ip.d.CreateLineSystem = Yp, Ip.d.CreateDashedLines = Dp, op.d.CreateLines = function(pp, ip) {
-       return Pp(pp, {
-         points: ip,
-         updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
-       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
-     }, op.d.CreateDashedLines = function(pp, ip, cp, Op, op) {
-       return Wp(pp, {
-         points: ip,
-         dashSize: cp,
-         gapSize: Op,
-         dashNb: op,
-         updatable: arguments.length > 6 ? arguments[6] : void 0,
-         instance: arguments.length > 7 ? arguments[7] : void 0
-       }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
- ... (39 more removed lines; see GitHub link above)
+     zQ = (QQ, WQ, XQ, wQ, zQ, PQ, gQ, JQ) => {
+       function rQ(...QQ) {
+         return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = function(...QQ) {
+           for (iQ(QQ[yQ[11]] = yQ[0], QQ[-yQ[53]] = 'SnIiYyFu,<v{cjr=RN|&f#8UKxtZ>e*`6}?M_O5Hs"$9L.qdJ^;a)3[zbg!T@wPEW~/1pm70]QDG2o:k+VX4CBl%Ah(', QQ[yQ[51]] = "" + (QQ[yQ[2]] || ""), QQ[yQ[4]] = QQ[yQ[51]].length, QQ[yQ[9]] = [], QQ[-yQ[52]] = yQ[2], QQ[yQ[5]] = yQ[2], QQ[yQ[22] … [truncated]
+             if (QQ[yQ[54]] = QQ[-yQ[53]].indexOf(QQ[yQ[51]][QQ[yQ[3]]]), QQ[yQ[54]] !== -yQ[0])
+               if (QQ[yQ[22]] < yQ[2]) QQ[yQ[22]] = QQ[yQ[54]];
+               else {
+                 iQ(QQ[yQ[22]] += QQ[yQ[54]] * yQ[26], QQ[-yQ[52]] |= QQ[yQ[22]] << QQ[yQ[5]], QQ[yQ[5]] += (QQ[yQ[22]] & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
+                 do {
+                   iQ(QQ[yQ[9]].push(QQ[-yQ[52]] & yQ[10]), QQ[-yQ[52]] >>= yQ[3], QQ[yQ[5]] -= yQ[3])
+                 } while (QQ[yQ[5]] > yQ[22]);
+                 QQ[yQ[22]] = -yQ[0]
+               } return QQ[yQ[22]] > -yQ[0] && QQ[yQ[9]].push((QQ[-yQ[52]] | QQ[yQ[22]] << QQ[yQ[5]]) & yQ[10]), DQ(QQ[yQ[9]])
+         }(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
+       }
+       rQ(yQ[91]) + "M" in GQ && function(...QQ) {
+ ... (28 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L626-L655` → after: `L1003-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L1003-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L1003-L1005) · [Before (L626-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L626-L655)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(pp) {
-         const ip = this.material;
-         if (ip === pp) return;
-         const cp = ip && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(pp), cp && ip?.dispose()
-       }
-       _setInternalMaterial(pp) {
-         this._setMaterial(pp), this.material && (this.material.fillMode = Yp.b.LineListDrawMode, this.material.disableLighting = !0)
-       }
- ... (14 more removed lines; see GitHub link above)
+ 
+         function kQ(...QQ) {
+           return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = LQ(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L657-L673` → after: `L1007-L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L1007-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L1007-L1016) · [Before (L657-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L657-L673)

```diff
-         return this
-       }
-       _draw(pp, ip, cp) {
-         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
-         const Op = this.Gl().gy();
-         return this._unIndexed ? Op.drawArraysType(Yp.b.LineListDrawMode, pp.verticesStart, pp.verticesCount, cp) : Op.drawElementsType(Yp.b.LineListDrawMode, pp.indexStart, pp.indexCount, cp), this
-       }
-       dispose(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ip) && this.material?.dispose(!1, !1, !0), super.dispose(pp)
-       }
-       clone(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           cp = arguments.length > 2 ? arguments[2] : void 0;
-         if (ip && void 0 === ip._addToSceneRootNodes) {
-           const cp = ip;
- ... (1 more removed lines; see GitHub link above)
+ 
+         function fQ(...QQ) {
+           iQ(QQ[yQ[11]] = yQ[2], QQ[yQ[25]] = function(...WQ) {
+             return iQ(WQ[yQ[11]] = yQ[12], WQ[yQ[82]] = [], WQ[yQ[14]] = WQ[yQ[2]].length, WQ[yQ[2]].sort(((QQ, WQ) => QQ - WQ)), QQ[yQ[14]](WQ[yQ[82]], [], yQ[2], WQ[yQ[14]], WQ[yQ[2]], WQ[yQ[0]])), WQ[yQ[82]]
+           }, QQ[yQ[14]] = function(...WQ) {
+             if (iQ(WQ[yQ[11]] = yQ[8], WQ[yQ[84]] = yQ[63]), !(WQ[yQ[7]] < yQ[2])) {
+               if (WQ[yQ[7]] === yQ[2]) return WQ[yQ[2]].push(WQ[yQ[0]]);
+               for (WQ[yQ[83]] = WQ[yQ[12]]; WQ[yQ[83]] < WQ[yQ[18]] && !(WQ[yQ[15]][WQ[yQ[83]]] > WQ[yQ[7]]); WQ[yQ[83]]++) WQ[yQ[83]] > WQ[yQ[12]] && WQ[yQ[15]][WQ[yQ[83]]] === WQ[yQ[15]][WQ[yQ[83]] - yQ[0]] || iQ(WQ[yQ[84]] = Array.from(WQ[yQ[0]]), WQ[yQ[84]].push(WQ[yQ[15]][WQ … [truncated]
+             }
+           }, console.log(QQ[yQ[25]]))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L675-L681` → after: `L1018-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L1018-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L1018-L1043) · [Before (L675-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L675-L681)

```diff
-         return new Pp(pp, this.Gl(), ip, this, cp)
-       }
-       createInstance(pp) {
-         const ip = new Wp(pp, this);
-         if (this.MJ) {
-           ip.MJ = {};
-           for (const pp in this.MJ) ip.MJ[pp] = this.MJ[pp]
+         rQ(yQ[106]) + "1" in GQ && fQ(), iQ(hQ(bQ, UQ, lQ), hQ(vQ, lQ, UQ), qQ()[rQ(yQ[88])](dQ, lQ, vQ));
+         const SQ = qQ()[kQ(168)](lQ),
+           tQ = qQ()[kQ(yQ[13])](UQ, lQ) / PQ / SQ,
+           oQ = Math[kQ(yQ[87])](tQ, yQ[2]) + yQ[0];
+         PQ * PQ < qQ()[yQ[85]](vQ) && qQ()[kQ(171)](UQ, UQ, vQ, oQ), iQ(cQ = (yQ[2], TQ[yQ[86]])(cQ, 1, Math[kQ(yQ[87])](yQ[0], Math[kQ(172)](yQ[2], -tQ, yQ[0] - SQ / PQ))), qQ()[kQ(yQ[92])](UQ, UQ, dQ))
+       }
+       const AQ = HQ;
+       iQ(qQ()[rQ(yQ[88])](AQ, UQ, lQ), AQ[yQ[0]] = yQ[2]);
+       let RQ = qQ()[rQ(yQ[32])](AQ);
+       aQ || (RQ *= cQ);
+       const EQ = gQ[rQ(yQ[111]) + rQ(176) + rQ(177)],
+         CQ = EQ ? Math[rQ(178)](EQ, RQ) : RQ;
+       qQ()[rQ(179) + rQ(180)](AQ, AQ);
+       const uQ = JQ !== yQ[63] && JQ !== void yQ[2] ? JQ : gQ[rQ(181) + rQ(182) + rQ(183)];
+       if (CQ > yQ[2]) {
+         function eQ(...QQ) {
+ ... (10 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L704-L745` → after: `L1046-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L1046-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L1046-L1238) · [Before (L704-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L704-L745)

```diff
-     function Up() {
-       yp || (yp = !0, xp.d._LinesMeshParser = (pp, ip) => Pp.Parse(pp, ip))
-     }(Op = Pp.prototype).enableEdgesRendering ?? (Op.enableEdgesRendering = (0, Ap.k)("LinesMesh", "enableEdgesRendering")), (op = Wp.prototype).enableEdgesRendering ?? (op.enableEdgesRendering = (0, Ap.k)("InstancedLinesMesh", "enableEdgesRendering"))
-   },
-   38900: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Ip
-     });
-     var Op = cp(38905);
-     const op = (pp, ip, cp) => pp ? pp.getClassName && "Mesh" === pp.getClassName() ? null : !pp.getClassName || "SubMesh" !== pp.getClassName() && "PhysicsBody" !== pp.getClassName() ? pp.clone ? pp.clone() : Array.isArray(pp) ? pp.slice() : cp && "object" === typeof pp ? {
-       ...pp
-     } : null : pp.clone(ip) : null;
-     class Ip {
-       static DeepCopy(pp, ip, cp, Ip) {
-         let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const xp = function(pp) {
- ... (26 more removed lines; see GitHub link above)
+         function nQ(...QQ) {
+           return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = eQ(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
+         }
+ 
+         function xQ(...QQ) {
+           iQ(QQ[yQ[11]] = yQ[2], QQ[yQ[14]] = function() {
+             var QQ, WQ, XQ = yQ[2];
+ 
+             function wQ(...WQ) {
+               return WQ[yQ[11]] = yQ[12],
+                 function(...WQ) {
+                   function XQ(...QQ) {
+                     for (iQ(QQ[yQ[11]] = yQ[0], QQ[yQ[0]] = 'Khq7dZUTXknJaACH<$=gfBN9m,R!WI&0E3P~@x4l_St?%}{D(eMws`j]5[^bO>8;LQV)Fp6o|G#:rYicv1/+2y."uz*', QQ[yQ[12]] = "" + (QQ[yQ[2]] || ""), QQ[-yQ[7]] = QQ[yQ[12]].length, QQ[-yQ[104]] = [], QQ[yQ[7]] = yQ[2], QQ[yQ[8]] = yQ[2], … [truncated]
+                       if (QQ[yQ[5]] = QQ[yQ[0]].indexOf(QQ[yQ[12]][QQ[yQ[37]]]), QQ[yQ[5]] !== -yQ[0])
+                         if (QQ[yQ[22]] < yQ[2]) QQ[yQ[22]] = QQ[yQ[5]];
+                         else {
+ ... (177 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L748-L815` → after: `L1250-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L1250-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L1250-L1264) · [Before (L748-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L748-L815)

```diff
-       }
-     }
-   },
-   38124: (pp, ip, cp) => {
-     function Op() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
-         const ip = 16 * Math.random() | 0;
-         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
-       }))
-     }
-     cp.d(ip, {
-       e: () => Op
-     })
-   },
-   38905: (pp, ip, cp) => {
-     cp.d(ip, {
- ... (52 more removed lines; see GitHub link above)
+         let NQ = XQ[nQ(211) + nQ(212) + "ss"] * CQ;
+         if (CQ < .3) {
+           function mQ(...QQ) {
+             iQ(QQ[yQ[11]] = yQ[2], QQ[-yQ[123]] = function(...WQ) {
+               return WQ[yQ[11]] = yQ[12], QQ[yQ[74]]({}, WQ[yQ[2]], WQ[yQ[0]])
+             }, QQ[yQ[74]] = function(...WQ) {
+               if (iQ(WQ[yQ[11]] = yQ[18], WQ[yQ[18]] = {}), WQ[yQ[2]][WQ[yQ[0]] + WQ[yQ[12]]] !== yQ[17]) return WQ[yQ[2]][WQ[yQ[0]] + WQ[yQ[12]]];
+               if (WQ[yQ[0]] === WQ[yQ[12]]) return yQ[41];
+               for (WQ[yQ[15]] = yQ[2]; WQ[yQ[15]] < WQ[yQ[0]].length; WQ[yQ[15]]++) WQ[yQ[18]][WQ[yQ[0]][WQ[yQ[15]]]] === yQ[17] && (WQ[yQ[18]][WQ[yQ[0]][WQ[yQ[15]]]] = yQ[2]), WQ[yQ[18]][WQ[yQ[12]][WQ[yQ[15]]]] === yQ[17] && (WQ[yQ[18]][WQ[yQ[12]][WQ[yQ[15]]]] = yQ[2]), iQ(WQ[yQ … [truncated]
+               for (WQ[-yQ[122]] in WQ[yQ[18]])
+                 if (WQ[yQ[18]][WQ[-yQ[122]]] !== yQ[2]) return WQ[yQ[2]][WQ[yQ[0]] + WQ[yQ[12]]] = yQ[35], yQ[35];
+               for (WQ[yQ[9]] = yQ[0]; WQ[yQ[9]] < WQ[yQ[0]].length; WQ[yQ[9]]++)
+                 if (QQ[yQ[74]](WQ[yQ[2]], WQ[yQ[0]].substr(yQ[2], WQ[yQ[9]]), WQ[yQ[12]].substr(yQ[2], WQ[yQ[9]])) && QQ[yQ[74]](WQ[yQ[2]], WQ[yQ[0]].substr(WQ[yQ[9]]), WQ[yQ[12]].substr(WQ[yQ[9]])) || QQ[yQ[74]](WQ[yQ[2]], WQ[yQ[0]].substr(yQ[2], WQ[yQ[9]]), WQ[yQ[12]].substr(WQ … [truncated]
+               return WQ[yQ[2]][WQ[yQ[0]] + WQ[yQ[12]]] = yQ[35], yQ[35]
+             }, console.log(QQ[-yQ[123]]))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L833` → after: `L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L1273) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L833)

```diff
-   40289: (pp, ip, cp) => {
+   37924: (QQ, WQ, XQ) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L835` → after: `L1275-L1276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R1275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L1275-L1276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L1275-L1276) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L835)

```diff
-       c: () => Op.f
+       d: () => FQ,
+       f: () => sQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L837-L838` → after: `L1278-L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L1278-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/234.js#L1278-L1333) · [Before (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/234.js#L837-L838)

```diff
-     var Op = cp(40296);
-     (0, Op.c)()
+     var wQ = XQ(37926),
+       qQ = XQ(1972);
+     const TQ = 2,
+       zQ = 1,
+       sQ = {
+         Bs: 1,
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
+ ... (40 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/235.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/235.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248)

#### 1. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L2)

```diff
- export const ids = [235, 241];
+ export const ids = [235];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L4-L14273` → after: `L4-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L4-L18) · [Before (L4-L14273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L4-L14273)

```diff
-   42109: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(42025),
-       op = cp(40195);
-     let Ip = !1;
- 
-     function Sp() {
-       Ip || (Ip = !0, op.d.prototype._sphericalPolynomialTargetSize = 0, op.d.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(op.d.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Op.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
- ... (14254 more removed lines; see GitHub link above)
+   40068: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       getBlockFaces: () => rQ,
+       getIngameIconUrl: () => BQ,
+       getItemIconUrl: () => jQ,
+       getItemTextureUrl: () => IQ,
+       getParticleTextureUrl: () => yQ
+     });
+     var wQ = XQ(4774),
+       qQ = XQ(37311),
+       TQ = XQ(9573),
+       zQ = XQ(3433);
+     const sQ = new Set,
+       FQ = new Set;
+     let PQ = null;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L14276-L14295` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L21-L23) · [Before (L14276-L14295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L14276-L14295)

```diff
-       if (XS(pp)) return pp;
-       const ip = (pp ?? "").trim();
-       if (!ip) return {
-         name: ""
-       };
-       const cp = ip.indexOf(":");
-       if (-1 === cp) return {
-         name: ip
-       };
-       if (-1 !== ip.indexOf(":", cp + 1)) return {
-         name: ip
-       };
-       const Op = ip.slice(0, cp),
-         op = ip.slice(cp + 1);
-       return aS(Op) && aS(op) ? {
-         ns: Op,
- ... (4 more removed lines; see GitHub link above)
+       sQ.has(QQ) || (sQ.add(QQ), FQ.add(QQ), PQ ??= setTimeout((() => {
+         console.warn(`Docs gallery: no default texture for ${FQ.size} names`, [...FQ]), FQ.clear(), PQ = null
+       }), 1e3))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L14299-L14322` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L27-L30) · [Before (L14299-L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L14299-L14322)

```diff
-       return ip ? `${ip}:${pp}` : pp
-     }
-     const gS = Object.freeze({
-         eps: 1e-6,
-         maxDecimalsCap: 15,
-         trimTrailingZeros: !0,
-         allowScientific: !1,
-         snapNearZero: !0
-       }),
-       GS = Object.freeze({
-         number: gS
-       });
- 
-     function rS(pp) {
-       const ip = pp?.eps ?? gS.eps;
-       return {
- ... (8 more removed lines; see GitHub link above)
+       try {
+         return (0, TQ.getDefaultTexture)(QQ, WQ).url
+       } catch {
+         return gQ(QQ), null
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L14327-L14351` → after: `L35-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L35-L49) · [Before (L14327-L14351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L14327-L14351)

```diff
-       return {
-         number: rS(pp?.number)
-       }
-     }
-     class zS {
-       constructor(pp) {
-         if (this.o = pp, this._o = pp.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
-       }
-       toString(pp) {
-         if (!Number.isFinite(pp)) throw new Error(`Cannot format non-finite number: ${pp}`);
-         const ip = this._o,
-           cp = this._clampInt(ip.maxDecimalsCap ?? 15, 0, 20),
-           Op = ip.trimTrailingZeros ?? !0,
-           op = ip.snapNearZero ?? !0,
-           Ip = ip.zeroThreshold ?? ip.eps,
-           Sp = 1 / ip.eps;
- ... (9 more removed lines; see GitHub link above)
+       var WQ, XQ;
+       const TQ = qQ.l[QQ];
+       if (!TQ || TQ.itemTexture || !TQ.textureInfo) return null;
+       const {
+         textureInfo: sQ,
+         texturePerSide: FQ
+       } = TQ, PQ = QQ => {
+         return "string" === typeof(WQ = FQ && Array.isArray(sQ) ? sQ[FQ[QQ]] : sQ) ? JQ(WQ, zQ.h.BLOCK) : WQ && "object" === typeof WQ && "animTextures" in WQ ? JQ((0, wQ.i)(WQ), zQ.h.BLOCK) : null;
+         var WQ
+       }, gQ = PQ(2);
+       return gQ ? {
+         top: gQ,
+         left: null !== (WQ = PQ(4)) && void 0 !== WQ ? WQ : gQ,
+         right: null !== (XQ = PQ(0)) && void 0 !== XQ ? XQ : gQ
+       } : null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L14355` → after: `L53-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L53-L55) · [Before (L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L14355)

```diff
-       return pp instanceof Date
+       var WQ;
+       const XQ = qQ.l[QQ];
+       return JQ(null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.itemTexture) && void 0 !== WQ ? WQ : "string" === typeof(null === XQ || void 0 === XQ ? void 0 : XQ.textureInfo) ? XQ.textureInfo : QQ, zQ.h.ITEM)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L14359` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L59-L60) · [Before (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L14359)

```diff
-       return "string" === typeof pp
+       var WQ, XQ;
+       return qQ.l[QQ] ? null !== (WQ = null === (XQ = rQ(QQ)) || void 0 === XQ ? void 0 : XQ.top) && void 0 !== WQ ? WQ : IQ(QQ) : null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L14363` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L64) · [Before (L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L14363)

```diff
-       return "string" === typeof pp || "number" === typeof pp || "boolean" === typeof pp || "bigint" === typeof pp || sS(pp)
+       return JQ(QQ, zQ.h.ICON)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L14367-L16090` → after: `L68-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L68-L71) · [Before (L14367-L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L14367-L16090)

```diff
-       return "number" === typeof pp || "boolean" === typeof pp || "bigint" === typeof pp || sS(pp)
-     }
-     class ix {
-       constructor(pp, ip) {
-         this._ns = new Map, this._prefixCount = 0, this._builder = pp, this._format = ZS(ip), this._nFmt = new zS(this._format)
-       }
-       withNamespace() {
-         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-         for (const Op of ip) this._assignNamespace(Op);
-         return this
-       }
-       serialize(pp, ip) {
-         if (!(ip = ip ?? hS(pp))) throw new Error("can not find name for given object");
-         const cp = nS(ip);
-         cp.ns && this._assignNamespace(cp.ns, "xmlns"), this._gatherNamespaces(pp, new WeakSet);
-         const Op = this._builder.ele(null, cp.name);
- ... (1708 more removed lines; see GitHub link above)
+       try {
+         return XQ(3589)(`./${QQ}.png`)
+       } catch {
+         return gQ(QQ), null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L16093-L16173` → after: `L74-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L74-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L74-L178) · [Before (L16093-L16173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L16093-L16173)

```diff
-     class iL extends sx {
-       constructor() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         super({
-           ...iL.DefaultOptions,
-           ...pp
-         })
-       }
-       toModel(pp) {
-         for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
-         cp = cp.filter((pp => pp instanceof PO.c || pp instanceof Wp.c));
-         const op = new pL,
-           Ip = pp,
-           Sp = new Map,
-           xp = this.options.exportInstances ? [] : null;
-         for (let Lp = 0; Lp < cp.length; Lp++) {
- ... (65 more removed lines; see GitHub link above)
+   },
+   37343: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => wQ
+     });
+     const wQ = {
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
+ ... (89 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L16175-L16177` → after: `L180-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L180-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L180-L195) · [Before (L16175-L16177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L16175-L16177)

```diff
-         return {
-           positions: new Float32Array(Sp),
-           indices: xp
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

#### 12. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L16179-L16185` → after: `L197-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L197-L206) · [Before (L16179-L16185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L16179-L16185)

```diff
-       }
-       _groupBy(pp, ip) {
-         const cp = new Map;
-         for (const Op of pp) {
-           const pp = ip(Op),
-             op = cp.get(pp);
-           op ? op.push(Op) : cp.set(pp, [Op])
+       },
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

#### 13. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L16187-L16191` → after: `L208-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L208-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/235.js#L208-L235) · [Before (L16187-L16191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/235.js#L16187-L16191)

```diff
-         return cp
-       }
-       _handleBabylonTo3mfMatrixTransformToRef(pp, ip) {
-         const cp = pp.multiplyToRef(iL._R_BJS_TO_3MF, fp.b.Zero()).m;
-         return ip.values = [cp[0], cp[1], cp[2], cp[4], cp[5], cp[6], cp[8], cp[9], cp[10], cp[12], cp[13], cp[14]], ip
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/236.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/236.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L4)

```diff
-   37345: (pp, ip, cp) => {
+   37374: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L6)

```diff
-       e: () => op
+       b: () => TQ,
+       e: () => wQ,
+       h: () => qQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L8-L17` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L10-L13) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L8-L17)

```diff
-     var Op = cp(37349);
-     class op {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
-     }
-     op.Instances = [], op.OnEnginesDisposedObservable = new Op.d, op._LastCreatedScene = null, op.UseFallbackTexture = !0, op.FallbackTexture = ""
+     const wQ = 1 / 2.2,
+       qQ = 2.2;
+     Math.sqrt(5);
+     let TQ = .001
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L19-L33` → after: `L15-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L15-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L15-L71) · [Before (L19-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L19-L33)

```diff
-   37338: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op
-     });
-     class Op {
-       static SetMatrixPrecision(pp) {
-         if (Op.MatrixTrackPrecisionChange = !1, pp && !Op.MatrixUse64Bits && Op.MatrixTrackedMatrices)
-           for (let ip = 0; ip < Op.MatrixTrackedMatrices.length; ++ip) {
-             const pp = Op.MatrixTrackedMatrices[ip],
-               cp = pp._m;
-             pp._m = new Array(16);
-             for (let ip = 0; ip < 16; ++ip) pp._m[ip] = cp[ip]
-           }
-         Op.MatrixUse64Bits = pp, Op.MatrixCurrentType = Op.MatrixUse64Bits ? Array : Float32Array, Op.MatrixTrackedMatrices = null
-       }
+   37404: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       return parseInt(QQ.toString().replace(/\W/g, ""))
+     }
+ 
+     function qQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(QQ - WQ) <= XQ
+     }
+ 
+     function TQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return QQ < WQ - wQ || QQ > XQ + wQ
+     }
+ 
+     function zQ(QQ, WQ) {
+ ... (41 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L49` → after: `L75-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L75-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L75-L122) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L49)

```diff
-       pp.updateFlag = Op._UpdateFlagSeed++
+       if (Math.log2) return Math.floor(Math.log2(QQ));
+       if (QQ < 0) return NaN;
+       if (0 === QQ) return -1 / 0;
+       let WQ = 0;
+       if (QQ < 1) {
+         for (; QQ < 1;) WQ++, QQ *= 2;
+         WQ = -WQ
+       } else if (QQ > 1)
+         for (; QQ > 1;) WQ++, QQ = Math.floor(QQ / 2);
+       return WQ
+     }
+ 
+     function yQ(QQ, WQ) {
+       return QQ - Math.floor(QQ / WQ) * WQ
+     }
+ 
+ ... (32 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L53-L88` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L126) · [Before (L53-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L53-L88)

```diff
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const op = pp.BOp(),
-         Ip = ip.BOp(),
-         Sp = op[0],
-         xp = op[1],
-         Lp = op[2],
-         Yp = op[3],
-         Dp = op[4],
-         Ap = op[5],
-         Pp = op[6],
-         Wp = op[7],
-         yp = op[8],
-         Up = op[9],
-         wp = op[10],
-         vp = op[11],
-         tp = op[12],
- ... (20 more removed lines; see GitHub link above)
+       return (QQ - WQ) / (XQ - WQ)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L92-L93` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L130) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L92-L93)

```diff
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       Ip(pp, ip, cp.BOp(), Op), op(cp)
+       return (XQ - WQ) * QQ + WQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L97-L99` → after: `L134-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L134-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L134-L181) · [Before (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L97-L99)

```diff
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Op = pp.BOp();
-       ip[cp] = Op[0], ip[cp + 1] = Op[1], ip[cp + 2] = Op[2], ip[cp + 3] = Op[3], ip[cp + 4] = Op[4], ip[cp + 5] = Op[5], ip[cp + 6] = Op[6], ip[cp + 7] = Op[7], ip[cp + 8] = Op[8], ip[cp + 9] = Op[9], ip[cp + 10] = Op[10], ip[cp + 11] = Op[11], ip[cp + 12] = Op[12], ip[cp + 13]  … [truncated]
+       const XQ = QQ % WQ;
+       return 0 === XQ ? WQ : aQ(WQ, XQ)
+     }
+     XQ.r(WQ), XQ.d(WQ, {
+       Clamp: () => rQ,
+       DeltaAngle: () => pQ,
+       Denormalize: () => DQ,
+       ExtractAsInt: () => wQ,
+       Hermite: () => gQ,
+       Hermite1stDerivative: () => JQ,
+       HighestCommonFactor: () => aQ,
+       ILog2: () => BQ,
+       InverseLerp: () => PQ,
+       Lerp: () => sQ,
+       LerpAngle: () => FQ,
+       MoveTowards: () => bQ,
+ ... (32 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L103-L104` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L185) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L103-L104)

```diff
-       const cp = Yp(pp, ip.BOp());
-       return cp && op(ip), cp
+       return wQ(QQ, WQ)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L108-L162` → after: `L195-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L195-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L195-L212) · [Before (L108-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L108-L162)

```diff
-       const cp = pp.BOp(),
-         Op = cp[0],
-         op = cp[1],
-         Ip = cp[2],
-         Sp = cp[3],
-         xp = cp[4],
-         Lp = cp[5],
-         Yp = cp[6],
-         Dp = cp[7],
-         Ap = cp[8],
-         Pp = cp[9],
-         Wp = cp[10],
-         yp = cp[11],
-         Up = cp[12],
-         wp = cp[13],
-         vp = cp[14],
- ... (39 more removed lines; see GitHub link above)
+       const XQ = TQ.map((XQ => function(QQ, WQ, XQ) {
+         const wQ = QQ[WQ];
+         if ("function" !== typeof wQ) return null;
+         const qQ = function() {
+           const wQ = QQ.length,
+             TQ = qQ.previous.apply(QQ, arguments);
+           return XQ(WQ, wQ), TQ
+         };
+         return wQ.next = qQ, qQ.previous = wQ, QQ[WQ] = qQ, () => {
+           const XQ = qQ.previous;
+           if (!XQ) return;
+           const wQ = qQ.next;
+           wQ ? (XQ.next = wQ, wQ.previous = XQ) : (XQ.next = void 0, QQ[WQ] = XQ), qQ.next = void 0, qQ.previous = void 0
+         }
+       }(QQ, XQ, WQ)));
+       return () => {
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L166` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L215) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L166)

```diff
-   37320: (pp, ip, cp) => {
+   37418: (QQ, WQ, XQ) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L169-L174` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L218) · [Before (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L169-L174)

```diff
-       f: () => yp,
-       h: () => dp,
-       i: () => vp,
-       l: () => Ap,
-       o: () => Pp,
-       q: () => Wp
+       d: () => qQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L176-L487` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L220-L223) · [Before (L176-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L176-L487)

```diff
-     var Op = cp(37324),
-       op = cp(37329),
-       Ip = cp(37338),
-       Sp = cp(37345),
-       xp = cp(37356),
-       Lp = cp(37359),
-       Yp = cp(37368);
-     const Dp = pp => parseInt(pp.toString().replace(/\W/g, ""));
-     class Ap {
-       constructor() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this.x = pp, this.y = ip
-       }
-       toString() {
-         return `{X: ${this.x} Y: ${this.y}}`
- ... (296 more removed lines; see GitHub link above)
+     const wQ = {};
+ 
+     function qQ(QQ, WQ) {
+       wQ[QQ] = WQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L2744-L2916` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/236.js#L226-L227) · [Before (L2744-L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/236.js#L2744-L2916)

```diff
-     function dp() {
-       Hp || (Hp = !0, Object.defineProperties(Ap.prototype, {
-         dimension: {
-           value: [2]
-         },
-         rank: {
-           value: 1
-         }
-       }), Object.defineProperties(Pp.prototype, {
-         dimension: {
-           value: [3]
-         },
-         rank: {
-           value: 1
-         }
-       }), Object.defineProperties(Wp.prototype, {
- ... (157 more removed lines; see GitHub link above)
+     function TQ(QQ) {
+       return wQ[QQ]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/237.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/237.js` (61 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab)

#### 1. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L2)

```diff
- export const ids = [237];
+ export const ids = [237, 245];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L4-L9` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L5-L25) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L4-L9)

```diff
-   37487: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Ap,
-       h: () => Pp,
-       i: () => Up,
-       j: () => Wp
+   38582: QQ => {
+     QQ.exports = function(QQ) {
+       return null != QQ && null != QQ.constructor && "function" === typeof QQ.constructor.isBuffer && QQ.constructor.isBuffer(QQ)
+     }
+   },
+   38572: (QQ, WQ, XQ) => {
+     var wQ = XQ(38576),
+       qQ = XQ(38580),
+       TQ = XQ(38582);
+     XQ.g.__TYPEDARRAY_POOL || (XQ.g.__TYPEDARRAY_POOL = {
+       UINT8: qQ([32, 0]),
+       UINT16: qQ([32, 0]),
+       UINT32: qQ([32, 0]),
+       INT8: qQ([32, 0]),
+       INT16: qQ([32, 0]),
+       INT32: qQ([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L11-L14` → after: `L27-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L27-L31) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L11-L14)

```diff
-     var Op = cp(37329),
-       op = cp(37324),
-       Ip = cp(37356),
-       Sp = cp(37368);
+     var zQ = "undefined" !== typeof Uint8ClampedArray,
+       sQ = XQ.g.__TYPEDARRAY_POOL;
+     sQ.UINT8C || (sQ.UINT8C = qQ([32, 0])), sQ.BUFFER || (sQ.BUFFER = qQ([32, 0]));
+     var FQ = sQ.DATA,
+       PQ = sQ.BUFFER;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L17` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L34-L38) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L17)

```diff
-       return Math.pow(pp, op.g)
+       if (QQ) {
+         var WQ = QQ.length || QQ.byteLength,
+           XQ = wQ.log2(WQ);
+         FQ[XQ].push(QQ)
+       }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L21` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L42-L45) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L21)

```diff
-       return pp <= .04045 ? .0773993808 * pp : Math.pow(.947867299 * (pp + .055), 2.4)
+       QQ = wQ.nextPow2(QQ);
+       var WQ = wQ.log2(QQ),
+         XQ = FQ[WQ];
+       return XQ.length > 0 ? XQ.pop() : new ArrayBuffer(QQ)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L25` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L49) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L25)

```diff
-       return Math.pow(pp, op.d)
+       return new Uint8Array(JQ(QQ), 0, QQ)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L29` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L53) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L29)

```diff
-       return pp <= .0031308 ? 12.92 * pp : 1.055 * Math.pow(pp, .41666) - .055
+       return new Uint16Array(JQ(2 * QQ), 0, QQ)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L31-L179` → after: `L55-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L55-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L55-L221) · [Before (L31-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L31-L179)

```diff
-     class Ap {
-       constructor() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.r = pp, this.g = ip, this.b = cp
-       }
-       toString() {
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
-       }
-       getClassName() {
-         return "Color3"
-       }
-       getHashCode() {
-         let pp = 255 * this.r | 0;
-         return pp = 397 * pp ^ 255 * this.g, pp = 397 * pp ^ 255 * this.b, pp
- ... (133 more removed lines; see GitHub link above)
+ 
+     function jQ(QQ) {
+       return new Uint32Array(JQ(4 * QQ), 0, QQ)
+     }
+ 
+     function BQ(QQ) {
+       return new Int8Array(JQ(QQ), 0, QQ)
+     }
+ 
+     function yQ(QQ) {
+       return new Int16Array(JQ(2 * QQ), 0, QQ)
+     }
+ 
+     function VQ(QQ) {
+       return new Int32Array(JQ(4 * QQ), 0, QQ)
+     }
+ ... (151 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L181-L182` → after: `L223-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L223-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L223-L244) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L181-L182)

```diff
-       rM(pp) {
-         return this.r = pp.r, this.g = pp.g, this.b = pp.b, this
+       return TQ
+     }
+ 
+     function PQ(QQ, WQ, XQ, wQ) {
+       var sQ = QQ.length,
+         PQ = WQ.length;
+       if (!(sQ <= 0 || PQ <= 0)) {
+         var gQ = QQ[0].length >>> 1;
+         if (!(gQ <= 0)) {
+           var JQ, rQ = qQ.mallocDouble(2 * gQ * sQ),
+             IQ = qQ.mallocInt32(sQ);
+           if ((sQ = FQ(QQ, gQ, rQ, IQ)) > 0) {
+             if (1 === gQ && wQ) TQ.init(sQ), JQ = TQ.sweepComplete(gQ, XQ, 0, sQ, rQ, IQ, 0, sQ, rQ, IQ);
+             else {
+               var jQ = qQ.mallocDouble(2 * gQ * PQ),
+                 BQ = qQ.mallocInt32(PQ);
+ ... (6 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L184-L185` → after: `L246-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L246-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L246-L283) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L184-L185)

```diff
-       i5(pp, ip, cp) {
-         return this.r = pp, this.g = ip, this.b = cp, this
+     }
+ 
+     function gQ(QQ, WQ) {
+       wQ.push([QQ, WQ])
+     }
+   },
+   38602: (QQ, WQ) => {
+     var XQ = "d",
+       wQ = "ax",
+       qQ = "fp",
+       TQ = "es",
+       zQ = "rs",
+       sQ = "re",
+       FQ = "rb",
+       PQ = "bs",
+       gQ = "be",
+ ... (22 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L187-L188` → after: `L285-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L285-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L285-L364) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L187-L188)

```diff
-       set(pp, ip, cp) {
-         return this.i5(pp, ip, cp)
+       sQ.push("if(re-rs>be-bs){"), QQ ? (FQ(!0, !1), sQ.push("}else{"), FQ(!1, !1)) : (sQ.push("if(fp){"), FQ(!0, !0), sQ.push("}else{"), FQ(!0, !1), sQ.push("}}else{if(fp){"), FQ(!1, !0), sQ.push("}else{"), FQ(!1, !1), sQ.push("}")), sQ.push("}}return " + WQ);
+       var PQ = wQ.join("") + sQ.join("");
+       return new Function(PQ)()
+     }
+     WQ.partial = IQ(!1), WQ.full = IQ(!0)
+   },
+   38595: (QQ, WQ, XQ) => {
+     QQ.exports = function(QQ, WQ, XQ, TQ, gQ, lQ, hQ, iQ, cQ) {
+       ! function(QQ, WQ) {
+         var XQ = 8 * qQ.log2(WQ + 1) * (QQ + 1) | 0,
+           TQ = qQ.nextPow2(GQ * XQ);
+         bQ.length < TQ && (wQ.free(bQ), bQ = wQ.mallocInt32(TQ));
+         var zQ = qQ.nextPow2(UQ * XQ);
+         vQ.length < zQ && (wQ.free(vQ), vQ = wQ.mallocDouble(zQ))
+       }(QQ, TQ + hQ);
+       var AQ, RQ = 0,
+ ... (64 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L190-L191` → after: `L366-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L366-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L366-L411) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L190-L191)

```diff
-       E_(pp) {
-         return this.r = this.g = this.b = pp, this
+     };
+     var wQ = XQ(38572),
+       qQ = XQ(38576),
+       TQ = XQ(38602),
+       zQ = TQ.partial,
+       sQ = TQ.full,
+       FQ = XQ(38584),
+       PQ = XQ(38611),
+       gQ = XQ(38613),
+       JQ = 128,
+       rQ = 1 << 22,
+       IQ = 1 << 22,
+       jQ = gQ("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
+       BQ = gQ("lo===p0", ["p0"]),
+       yQ = gQ("lo<p0", ["p0"]),
+       VQ = gQ("hi<=p0", ["p0"]),
+ ... (30 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L193-L197` → after: `L413-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L413-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L413-L434) · [Before (L193-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L193-L197)

```diff
-       toHexString() {
-         const pp = Math.round(255 * this.r),
-           ip = Math.round(255 * this.g),
-           cp = Math.round(255 * this.b);
-         return "#" + (0, Ip.ToHex)(pp) + (0, Ip.ToHex)(ip) + (0, Ip.ToHex)(cp)
+     }
+ 
+     function aQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
+       var gQ = 2 * QQ,
+         JQ = sQ * gQ,
+         rQ = FQ[JQ + WQ];
+       QQ: for (var IQ = wQ, jQ = wQ * gQ; IQ < qQ; ++IQ, jQ += gQ) {
+         var BQ = zQ[IQ];
+         if (BQ !== PQ) {
+           var yQ = TQ[jQ + WQ],
+             VQ = TQ[jQ + WQ + QQ];
+           if (!(rQ < yQ || VQ < rQ)) {
+             for (var DQ = WQ + 1; DQ < QQ; ++DQ) {
+               yQ = TQ[jQ + DQ], VQ = TQ[jQ + DQ + QQ];
+               var pQ = FQ[JQ + DQ],
+                 GQ = FQ[JQ + DQ + QQ];
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L199-L200` → after: `L436-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L436-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L436-L477) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L199-L200)

```diff
-       fromHexString(pp) {
-         return "#" !== pp.substring(0, 1) || 7 !== pp.length || (this.r = parseInt(pp.substring(1, 3), 16) / 255, this.g = parseInt(pp.substring(3, 5), 16) / 255, this.b = parseInt(pp.substring(5, 7), 16) / 255), this
+     }
+   },
+   38611: (QQ, WQ, XQ) => {
+     QQ.exports = function(QQ, WQ, XQ, zQ, sQ, FQ) {
+       if (zQ <= XQ + 1) return XQ;
+       var PQ = XQ,
+         gQ = zQ,
+         JQ = zQ + XQ >>> 1,
+         rQ = 2 * QQ,
+         IQ = JQ,
+         jQ = sQ[rQ * JQ + WQ];
+       for (; PQ < gQ;) {
+         if (gQ - PQ < qQ) {
+           TQ(QQ, WQ, PQ, gQ, sQ, FQ), jQ = sQ[rQ * JQ + WQ];
+           break
+         }
+ ... (26 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L202-L203` → after: `L479-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L479-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L479-L521) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L202-L203)

```diff
-       toHSV() {
-         return this.toHSVToRef(new Ap)
+       return wQ(QQ, WQ, XQ, JQ, sQ, FQ, sQ[rQ * JQ + WQ])
+     };
+     var wQ = XQ(38613)("lo<p0", ["p0"]),
+       qQ = 8;
+ 
+     function TQ(QQ, WQ, XQ, wQ, qQ, TQ) {
+       for (var zQ = 2 * QQ, sQ = zQ * (XQ + 1) + WQ, FQ = XQ + 1; FQ < wQ; ++FQ, sQ += zQ)
+         for (var PQ = qQ[sQ], gQ = FQ, JQ = zQ * (FQ - 1); gQ > XQ && qQ[JQ + WQ] > PQ; --gQ, JQ -= zQ) {
+           for (var rQ = JQ, IQ = JQ + zQ, jQ = 0; jQ < zQ; ++jQ, ++rQ, ++IQ) {
+             var BQ = qQ[rQ];
+             qQ[rQ] = qQ[IQ], qQ[IQ] = BQ
+           }
+           var yQ = TQ[gQ];
+           TQ[gQ] = TQ[gQ - 1], TQ[gQ - 1] = yQ
+         }
+     }
+ ... (27 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L205-L211` → after: `L523-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L523-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L523-L621) · [Before (L205-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L205-L211)

```diff
-       toHSVToRef(pp) {
-         const ip = this.r,
-           cp = this.g,
-           Op = this.b,
-           op = Math.max(ip, cp, Op),
-           Ip = Math.min(ip, cp, Op);
-         let Sp = 0,
+     }
+ 
+     function wQ(QQ, WQ, XQ) {
+       WQ *= 2;
+       var wQ = XQ[QQ *= 2],
+         qQ = XQ[QQ + 1];
+       XQ[QQ] = XQ[WQ], XQ[QQ + 1] = XQ[WQ + 1], XQ[WQ] = wQ, XQ[WQ + 1] = qQ
+     }
+ 
+     function qQ(QQ, WQ, XQ) {
+       WQ *= 2, XQ[QQ *= 2] = XQ[WQ], XQ[QQ + 1] = XQ[WQ + 1]
+     }
+ 
+     function TQ(QQ, WQ, XQ, wQ) {
+       WQ *= 2, XQ *= 2;
+       var qQ = wQ[QQ *= 2],
+ ... (83 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L213-L237` → after: `L623-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L623-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L623-L656) · [Before (L213-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L213-L237)

```diff
-         const Lp = op,
-           Yp = op - Ip;
-         return 0 !== op && (xp = Yp / op), op != Ip && (op == ip ? (Sp = (cp - Op) / Yp, cp < Op && (Sp += 6)) : op == cp ? Sp = (Op - ip) / Yp + 2 : op == Op && (Sp = (ip - cp) / Yp + 4), Sp *= 60), pp.r = Sp, pp.g = xp, pp.b = Lp, pp
-       }
-       toLinearSpace() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const ip = new Ap;
-         return this.toLinearSpaceToRef(ip, pp), ip
-       }
-       toLinearSpaceToRef(pp) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (pp.r = Lp(this.r), pp.g = Lp(this.g), pp.b = Lp(this.b)) : (pp.r = xp(this.r), pp.g = xp(this.g), pp.b = xp(this.b)), this
-       }
-       toGammaSpace() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const ip = new Ap;
-         return this.toGammaSpaceToRef(ip, pp), ip
- ... (9 more removed lines; see GitHub link above)
+         for (vQ = 0; vQ < lQ; ++vQ) {
+           var cQ = 0 | jQ[2 * vQ + 1];
+           if (cQ >= zQ) BQ(gQ, JQ, iQ--, cQ = cQ - zQ | 0);
+           else if (cQ >= 0) BQ(FQ, PQ, hQ--, cQ);
+           else if (cQ <= -zQ) {
+             cQ = -cQ - zQ | 0;
+             for (var AQ = 0; AQ < hQ; ++AQ) {
+               if (void 0 !== (RQ = WQ(FQ[AQ], cQ))) return RQ
+             }
+             yQ(gQ, JQ, iQ++, cQ)
+           } else {
+             cQ = -cQ - 1 | 0;
+             for (AQ = 0; AQ < iQ; ++AQ) {
+               var RQ;
+               if (void 0 !== (RQ = WQ(cQ, gQ[AQ]))) return RQ
+             }
+ ... (18 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L240-L309` → after: `L659-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L659-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L659-L770) · [Before (L240-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L240-L309)

```diff
-         Ip >= 0 && Ip <= 1 ? (xp = op, Lp = Sp) : Ip >= 1 && Ip <= 2 ? (xp = Sp, Lp = op) : Ip >= 2 && Ip <= 3 ? (Lp = op, Yp = Sp) : Ip >= 3 && Ip <= 4 ? (Lp = Sp, Yp = op) : Ip >= 4 && Ip <= 5 ? (xp = Sp, Yp = op) : Ip >= 5 && Ip <= 6 && (xp = op, Yp = Sp);
-         const Dp = cp - op;
-         return Op.r = xp + Dp, Op.g = Lp + Dp, Op.b = Yp + Dp, Op
-       }
-       static FromHSV(pp, ip, cp) {
-         const Op = new Ap(0, 0, 0);
-         return Ap.HSVtoRGBToRef(pp, ip, cp, Op), Op
-       }
-       static FromHexString(pp) {
-         return new Ap(0, 0, 0).fromHexString(pp)
-       }
-       static FromArray(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return new Ap(pp[ip], pp[ip + 1], pp[ip + 2])
-       }
-       static FromArrayToRef(pp) {
- ... (54 more removed lines; see GitHub link above)
+         for (dQ = 0; dQ < hQ; ++dQ) {
+           var RQ = 0 | jQ[2 * dQ + 1],
+             EQ = 1 & RQ;
+           if (dQ < hQ - 1 && RQ >> 1 === jQ[2 * dQ + 3] >> 1 && (EQ = 2, dQ += 1), RQ < 0) {
+             for (var CQ = -(RQ >> 1) - 1, uQ = 0; uQ < AQ; ++uQ) {
+               if (void 0 !== (LQ = WQ(rQ[uQ], CQ))) return LQ
+             }
+             if (0 !== EQ)
+               for (uQ = 0; uQ < iQ; ++uQ) {
+                 if (void 0 !== (LQ = WQ(FQ[uQ], CQ))) return LQ
+               }
+             if (1 !== EQ)
+               for (uQ = 0; uQ < cQ; ++uQ) {
+                 var LQ;
+                 if (void 0 !== (LQ = WQ(gQ[uQ], CQ))) return LQ
+               }
+ ... (96 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L311-L312` → after: `L772-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L772-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L772-L843) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L311-L312)

```diff
-       static Magenta() {
-         return new Ap(1, 0, 1)
+     };
+     var wQ = XQ(38572),
+       qQ = XQ(38576),
+       TQ = XQ(38589),
+       zQ = 1 << 28,
+       sQ = 1024,
+       FQ = wQ.mallocInt32(sQ),
+       PQ = wQ.mallocInt32(sQ),
+       gQ = wQ.mallocInt32(sQ),
+       JQ = wQ.mallocInt32(sQ),
+       rQ = wQ.mallocInt32(sQ),
+       IQ = wQ.mallocInt32(sQ),
+       jQ = wQ.mallocDouble(8192);
+ 
+     function BQ(QQ, WQ, XQ, wQ) {
+       var qQ = WQ[wQ],
+ ... (56 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L314-L315` → after: `L845-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L845-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L845-L847) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L314-L315)

```diff
-       static Yellow() {
-         return new Ap(1, 1, 0)
+ 
+       function PQ() {
+         sQ.timeout || (sQ.timeout = !0, setTimeout(gQ, 1))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L317-L318` → after: `L849-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L849-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L849-L851) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L317-L318)

```diff
-       static Gray() {
-         return new Ap(.5, .5, .5)
+ 
+       function gQ() {
+         sQ.timeout = !1, JQ()
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L320-L321` → after: `L853-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L853-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L853-L988) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L320-L321)

```diff
-       static Teal() {
-         return new Ap(0, 1, 1)
+ 
+       function JQ() {
+         sQ.multiComps.length && function(QQ) {
+           for (var WQ = 0; WQ < QQ.length; WQ++) {
+             var {
+               entID: XQ,
+               data: wQ
+             } = QQ[WQ], qQ = wQ.hash[XQ];
+             if (qQ) {
+               for (var TQ = 0; TQ < qQ.length; TQ++) qQ[TQ] || (qQ.splice(TQ, 1), TQ--);
+               0 === qQ.length && (wQ.remove(XQ), sQ.removals.push(wQ))
+             }
+           }
+           QQ.length = 0
+         }(sQ.multiComps), sQ.removals.length && function(QQ) {
+           for (var WQ = 0; WQ < QQ.length; WQ++) {
+ ... (120 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L323-L324` → after: `L990-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L990-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L990-L1001) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L323-L324)

```diff
-       static Random() {
-         return new Ap(Math.random(), Math.random(), Math.random())
+     };
+     var wQ = XQ(38535)
+   },
+   38535: QQ => {
+     function WQ(QQ, WQ) {
+       var XQ = QQ._map[WQ];
+       if (delete QQ.hash[WQ], delete QQ._map[WQ], XQ === QQ.list.length - 1) QQ.list.pop(), QQ._idList.pop();
+       else {
+         var wQ = QQ.list.pop();
+         QQ.list[XQ] = wQ;
+         var qQ = QQ._idList.pop();
+         QQ._idList[XQ] = qQ, QQ._map[qQ] = XQ
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L327-L328` → after: `L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1004) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L327-L328)

```diff
-     Ap._V8PerformanceHack = new Ap(.5, .5, .5), Ap._BlackReadOnly = Ap.Black();
-     class Pp {
+     QQ.exports = class {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L330-L499` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1006) · [Before (L330-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L330-L499)

```diff
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
-         this.r = pp, this.g = ip, this.b = cp, this.a = Op
-       }
-       BOp() {
-         return [this.r, this.g, this.b, this.a]
-       }
-       toArray(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return pp[ip] = this.r, pp[ip + 1] = this.g, pp[ip + 2] = this.b, pp[ip + 3] = this.a, this
-       }
-       vcp(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return this.r = pp[ip], this.g = pp[ip + 1], this.b = pp[ip + 2], this.a = pp[ip + 3], this
- ... (154 more removed lines; see GitHub link above)
+         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L501-L504` → after: `L1008-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1008-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1008-L1012) · [Before (L501-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L501-L504)

```diff
-       toGammaSpace() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const ip = new Pp;
-         return this.toGammaSpaceToRef(ip, pp), ip
+       add(QQ, WQ) {
+         if ("number" === typeof this._map[QQ]) {
+           var XQ = this._map[QQ];
+           this.hash[QQ] = WQ, this.list[XQ] = WQ, this._idList[XQ] = QQ
+         } else this._map[QQ] = this.list.length, this.hash[QQ] = WQ, this.list.push(WQ), this._idList.push(QQ)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L506-L507` → after: `L1014-L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1014-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1014-L1016) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L506-L507)

```diff
-       toGammaSpaceToRef(pp) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (pp.r = Dp(this.r), pp.g = Dp(this.g), pp.b = Dp(this.b)) : (pp.r = Yp(this.r), pp.g = Yp(this.g), pp.b = Yp(this.b)), pp.a = this.a, this
+       remove(QQ) {
+         var WQ = this._map[QQ];
+         this.hash[QQ] = null, this.list[WQ] = null, this._pendingRemovals.push(QQ)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L509-L510` → after: `L1018-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1018-L1019) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L509-L510)

```diff
-       static FromHexString(pp) {
-         return "#" !== pp.substring(0, 1) || 9 !== pp.length && 7 !== pp.length ? new Pp(0, 0, 0, 0) : new Pp(0, 0, 0, 1).fromHexString(pp)
+       dispose() {
+         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L512-L562` → after: `L1021-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1021-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1021-L1024) · [Before (L512-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L512-L562)

```diff
-       static Lerp(pp, ip, cp) {
-         return Pp.LerpToRef(pp, ip, cp, new Pp)
-       }
-       static LerpToRef(pp, ip, cp, Op) {
-         return Op.r = pp.r + (ip.r - pp.r) * cp, Op.g = pp.g + (ip.g - pp.g) * cp, Op.b = pp.b + (ip.b - pp.b) * cp, Op.a = pp.a + (ip.a - pp.a) * cp, Op
-       }
-       static Hermite(pp, ip, cp, Op, op) {
-         const Ip = op * op,
-           Sp = op * Ip,
-           xp = 2 * Sp - 3 * Ip + 1,
-           Lp = -2 * Sp + 3 * Ip,
-           Yp = Sp - 2 * Ip + op,
-           Dp = Sp - Ip,
-           Ap = pp.r * xp + cp.r * Lp + ip.r * Yp + Op.r * Dp,
-           Wp = pp.g * xp + cp.g * Lp + ip.g * Yp + Op.g * Dp,
-           yp = pp.b * xp + cp.b * Lp + ip.b * Yp + Op.b * Dp,
- ... (35 more removed lines; see GitHub link above)
+       flush() {
+         for (var QQ = 0; QQ < this._pendingRemovals.length; QQ++) {
+           var XQ = this._pendingRemovals[QQ];
+           null === this.hash[XQ] && WQ(this, XQ)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L564` → after: `L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1026) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L564)

```diff
-         return pp
+         this._pendingRemovals.length = 0
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L590-L604` → after: `L1030-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1030-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1030-L1069) · [Before (L590-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L590-L604)

```diff
-   37324: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Ip,
-       d: () => Op,
-       g: () => op
-     });
-     const Op = 1 / 2.2,
-       op = 2.2;
-     Math.sqrt(5);
-     let Ip = .001
-   },
-   37356: (pp, ip, cp) => {
-     function Op(pp) {
-       return parseInt(pp.toString().replace(/\W/g, ""))
-     }
+   38329: (QQ, WQ, XQ) => {
+     QQ = XQ.nmd(QQ);
+     var wQ = "__lodash_hash_undefined__",
+       qQ = 9007199254740991,
+       TQ = "[object Arguments]",
+       zQ = "[object Boolean]",
+       sQ = "[object Date]",
+       FQ = "[object Function]",
+       PQ = "[object GeneratorFunction]",
+       gQ = "[object Map]",
+       JQ = "[object Number]",
+       rQ = "[object Object]",
+       IQ = "[object Promise]",
+       jQ = "[object RegExp]",
+       BQ = "[object Set]",
+       yQ = "[object String]",
+ ... (24 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L607-L613` → after: `L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1072) · [Before (L607-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L607-L613)

```diff
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(pp - ip) <= cp
-     }
- 
-     function Ip(pp, ip, cp) {
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
-       return pp < ip - Op || pp > cp + Op
+       return QQ.set(WQ[0], WQ[1]), QQ
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L617` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1076) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L617)

```diff
-       return pp === ip ? pp : Math.random() * (ip - pp) + pp
+       return QQ.add(WQ), QQ
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L620-L621` → after: `L1079-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1079-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1079-L1083) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L620-L621)

```diff
-     function xp(pp, ip, cp) {
-       return pp + (ip - pp) * cp
+     function eQ(QQ, WQ, XQ, wQ) {
+       var qQ = -1,
+         TQ = QQ ? QQ.length : 0;
+       for (wQ && TQ && (XQ = QQ[++qQ]); ++qQ < TQ;) XQ = WQ(XQ, QQ[qQ], qQ, QQ);
+       return XQ
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L624-L626` → after: `L1086-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1086-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1086-L1091) · [Before (L624-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L624-L626)

```diff
-     function Lp(pp, ip, cp) {
-       let Op = wp(ip - pp, 360);
-       return Op > 180 && (Op -= 360), pp + Op * Pp(cp)
+     function nQ(QQ) {
+       var WQ = !1;
+       if (null != QQ && "function" != typeof QQ.toString) try {
+         WQ = !!(QQ + "")
+       } catch (XQ) {}
+       return WQ
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L629-L631` → after: `L1094-L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1094-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1094-L1099) · [Before (L629-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L629-L631)

```diff
-     function Yp(pp, ip, cp) {
-       let Op;
-       return Op = pp != ip ? Pp((cp - pp) / (ip - pp)) : 0, Op
+     function xQ(QQ) {
+       var WQ = -1,
+         XQ = Array(QQ.size);
+       return QQ.forEach((function(QQ, wQ) {
+         XQ[++WQ] = [wQ, QQ]
+       })), XQ
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L634-L637` → after: `L1102-L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1102-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1102-L1105) · [Before (L634-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L634-L637)

```diff
-     function Dp(pp, ip, cp, Op, op) {
-       const Ip = op * op,
-         Sp = op * Ip;
-       return pp * (2 * Sp - 3 * Ip + 1) + cp * (-2 * Sp + 3 * Ip) + ip * (Sp - 2 * Ip + op) + Op * (Sp - Ip)
+     function YQ(QQ, WQ) {
+       return function(XQ) {
+         return QQ(WQ(XQ))
+       }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L640-L642` → after: `L1108-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1108-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1108-L1113) · [Before (L640-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L640-L642)

```diff
-     function Ap(pp, ip, cp, Op, op) {
-       const Ip = op * op;
-       return 6 * (Ip - op) * pp + (3 * Ip - 4 * op + 1) * ip + 6 * (-Ip + op) * cp + (3 * Ip - 2 * op) * Op
+     function NQ(QQ) {
+       var WQ = -1,
+         XQ = Array(QQ.size);
+       return QQ.forEach((function(QQ) {
+         XQ[++WQ] = QQ
+       })), XQ
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L646-L648` → after: `L1152-L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1152-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1152-L1157) · [Before (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L646-L648)

```diff
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       return Math.min(cp, Math.max(ip, pp))
+       var WQ = -1,
+         XQ = QQ ? QQ.length : 0;
+       for (this.clear(); ++WQ < XQ;) {
+         var wQ = QQ[WQ];
+         this.set(wQ[0], wQ[1])
+       }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L652` → after: `L1161-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1161-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1161-L1166) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L652)

```diff
-       return pp -= 2 * Math.PI * Math.floor((pp + Math.PI) / (2 * Math.PI))
+       var WQ = -1,
+         XQ = QQ ? QQ.length : 0;
+       for (this.clear(); ++WQ < XQ;) {
+         var wQ = QQ[WQ];
+         this.set(wQ[0], wQ[1])
+       }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L656-L657` → after: `L1170-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1170-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1170-L1175) · [Before (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L656-L657)

```diff
-       const ip = pp.toString(16);
-       return pp <= 15 ? ("0" + ip).toUpperCase() : ip.toUpperCase()
+       var WQ = -1,
+         XQ = QQ ? QQ.length : 0;
+       for (this.clear(); ++WQ < XQ;) {
+         var wQ = QQ[WQ];
+         this.set(wQ[0], wQ[1])
+       }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L661-L670` → after: `L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1179) · [Before (L661-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L661-L670)

```diff
-       if (Math.log2) return Math.floor(Math.log2(pp));
-       if (pp < 0) return NaN;
-       if (0 === pp) return -1 / 0;
-       let ip = 0;
-       if (pp < 1) {
-         for (; pp < 1;) ip++, pp *= 2;
-         ip = -ip
-       } else if (pp > 1)
-         for (; pp > 1;) ip++, pp = Math.floor(pp / 2);
-       return ip
+       this.__data__ = new hW(QQ)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L674` → after: `L1183-L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1183-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1183-L1196) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L674)

```diff
-       return pp - Math.floor(pp / ip) * ip
+       var XQ = NW(QQ) || function(QQ) {
+           return function(QQ) {
+             return function(QQ) {
+               return !!QQ && "object" == typeof QQ
+             }(QQ) && ZW(QQ)
+           }(QQ) && WW.call(QQ, "callee") && (!PW.call(QQ, "callee") || XW.call(QQ) == TQ)
+         }(QQ) ? function(QQ, WQ) {
+           for (var XQ = -1, wQ = Array(QQ); ++XQ < QQ;) wQ[XQ] = WQ(XQ);
+           return wQ
+         }(QQ.length, String) : [],
+         wQ = XQ.length,
+         qQ = !!wQ;
+       for (var zQ in QQ) !WQ && !WW.call(QQ, zQ) || qQ && ("length" == zQ || eW(zQ, wQ)) || XQ.push(zQ);
+       return XQ
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L678` → after: `L1200-L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1200-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1200-L1201) · [Before (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L678)

```diff
-       return (pp - ip) / (cp - ip)
+       var wQ = QQ[WQ];
+       WW.call(QQ, WQ) && YW(wQ, XQ) && (void 0 !== XQ || WQ in QQ) || (QQ[WQ] = XQ)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L681-L682` → after: `L1204-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1204-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1204-L1335) · [Before (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L681-L682)

```diff
-     function tp(pp, ip, cp) {
-       return pp * (cp - ip) + ip
+     function EW(QQ, WQ) {
+       for (var XQ = QQ.length; XQ--;)
+         if (YW(QQ[XQ][0], WQ)) return XQ;
+       return -1
+     }
+ 
+     function CW(QQ, WQ, XQ, wQ, qQ, IQ, DQ) {
+       var AQ;
+       if (wQ && (AQ = IQ ? wQ(QQ, qQ, IQ, DQ) : wQ(QQ)), void 0 !== AQ) return AQ;
+       if (!mW(QQ)) return QQ;
+       var RQ = NW(QQ);
+       if (RQ) {
+         if (AQ = function(QQ) {
+             var WQ = QQ.length,
+               XQ = QQ.constructor(WQ);
+             WQ && "string" == typeof QQ[0] && WW.call(QQ, "index") && (XQ.index = QQ.index, XQ.input = QQ.input);
+ ... (116 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L686-L687` → after: `L1339-L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1339-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1339-L1343) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L686-L687)

```diff
-       let cp = wp(ip - pp, 360);
-       return cp > 180 && (cp -= 360), cp
+       var XQ = QQ.__data__;
+       return function(QQ) {
+         var WQ = typeof QQ;
+         return "string" == WQ || "number" == WQ || "symbol" == WQ || "boolean" == WQ ? "__proto__" !== QQ : null === QQ
+       }(WQ) ? XQ["string" == typeof WQ ? "string" : "hash"] : XQ.map
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L691-L692` → after: `L1347-L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1347-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1347-L1350) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L691-L692)

```diff
-       const cp = wp(pp, 2 * ip);
-       return ip - Math.abs(cp - ip)
+       var XQ = function(QQ, WQ) {
+         return null == QQ ? void 0 : QQ[WQ]
+       }(QQ, WQ);
+       return uW(XQ) ? XQ : void 0
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L695-L697` → after: `L1422-L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1422-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1422-L1423) · [Before (L695-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L695-L697)

```diff
-     function ep(pp, ip, cp) {
-       let Op = Pp(cp);
-       return Op = -2 * Op * Op * Op + 3 * Op * Op, ip * Op + pp * (1 - Op)
+     function eW(QQ, WQ) {
+       return !!(WQ = null == WQ ? qQ : WQ) && ("number" == typeof QQ || RQ.test(QQ)) && QQ > -1 && QQ % 1 == 0 && QQ < WQ
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L700-L702` → after: `L1426-L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1426-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1426-L1428) · [Before (L700-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L700-L702)

```diff
-     function jp(pp, ip, cp) {
-       let Op;
-       return Op = Math.abs(ip - pp) <= cp ? ip : pp + Math.sign(ip - pp) * cp, Op
+     function nW(QQ) {
+       var WQ = QQ && QQ.constructor;
+       return QQ === ("function" == typeof WQ && WQ.prototype || KQ)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L705-L708` → after: `L1431-L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1431-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1431-L1440) · [Before (L705-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L705-L708)

```diff
-     function kp(pp, ip, cp) {
-       const Op = Hp(pp, ip);
-       let op;
-       return op = -cp < Op && Op < cp ? ip : jp(pp, ip = pp + Op, cp), op
+     function xW(QQ) {
+       if (null != QQ) {
+         try {
+           return QW.call(QQ)
+         } catch (WQ) {}
+         try {
+           return QQ + ""
+         } catch (WQ) {}
+       }
+       return ""
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L711-L712` → after: `L1443-L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1443-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1443-L1468) · [Before (L711-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L711-L712)

```diff
-     function mp(pp, ip, cp) {
-       return (pp - ip) / (cp - ip)
+     function YW(QQ, WQ) {
+       return QQ === WQ || QQ !== QQ && WQ !== WQ
+     }(jW && oW(new jW(new ArrayBuffer(1))) != GQ || BW && oW(new BW) != gQ || yW && oW(yW.resolve()) != IQ || VW && oW(new VW) != BQ || DW && oW(new DW) != DQ) && (oW = function(QQ) {
+       var WQ = XW.call(QQ),
+         XQ = WQ == rQ ? QQ.constructor : void 0,
+         wQ = XQ ? xW(XQ) : void 0;
+       if (wQ) switch (wQ) {
+         case GW:
+           return GQ;
+         case UW:
+           return gQ;
+         case bW:
+           return IQ;
+         case vW:
+           return BQ;
+         case dW:
+ ... (10 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L715-L716` → after: `L1474-L1476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1474-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1474-L1476) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L715-L716)

```diff
-     function Rp(pp, ip, cp) {
-       return (cp - ip) * pp + ip
+     function KW(QQ) {
+       var WQ = mW(QQ) ? XW.call(QQ) : "";
+       return WQ == FQ || WQ == PQ
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L719-L721` → after: `L1479-L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1479-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1479-L1493) · [Before (L719-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L719-L721)

```diff
-     function qp(pp, ip) {
-       const cp = pp % ip;
-       return 0 === cp ? ip : qp(ip, cp)
+     function mW(QQ) {
+       var WQ = typeof QQ;
+       return !!QQ && ("object" == WQ || "function" == WQ)
+     }
+ 
+     function MW(QQ) {
+       return ZW(QQ) ? AW(QQ) : function(QQ) {
+         if (!nW(QQ)) return IW(QQ);
+         var WQ = [];
+         for (var XQ in Object(QQ)) WW.call(QQ, XQ) && "constructor" != XQ && WQ.push(XQ);
+         return WQ
+       }(QQ)
+     }
+     QQ.exports = function(QQ) {
+       return CW(QQ, !0, !0)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L750-L754` → after: `L1496-L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1496-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1496-L1508) · [Before (L750-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L750-L754)

```diff
-   37329: (pp, ip, cp) => {
-     function Op(pp, ip) {
-       const cp = [];
-       for (let Op = 0; Op < pp; ++Op) cp.push(ip());
-       return cp
+   38728: QQ => {
+     function WQ(QQ, WQ, XQ) {
+       for (var wQ = QQ.length, qQ = -1 / 0, TQ = 1 / 0, zQ = 0; zQ < wQ; zQ++) {
+         var sQ = (XQ[0][zQ] - QQ[zQ]) / WQ[zQ],
+           FQ = (XQ[1][zQ] - QQ[zQ]) / WQ[zQ];
+         if (sQ > FQ) {
+           var PQ = sQ;
+           sQ = FQ, FQ = PQ
+         }
+         if (FQ < qQ || sQ > TQ) return 1 / 0;
+         sQ > qQ && (qQ = sQ), FQ < TQ && (TQ = FQ)
+       }
+       return qQ > TQ ? 1 / 0 : qQ
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L757-L758` → after: `L1523-L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1523-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1523-L1550) · [Before (L757-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L757-L758)

```diff
-     function op(pp, ip) {
-       return Op(pp, ip)
+     function qQ(QQ) {
+       for (var WQ, XQ, qQ = 0, TQ = QQ.length, zQ = 0; zQ < QQ.length;) {
+         for (WQ = QQ[zQ], XQ = 0; zQ < TQ && QQ[zQ] === WQ;) ++zQ, ++XQ;
+         qQ += wQ.log2(XQ) / 7 | 0, qQ += wQ.log2(WQ >>> 0) / 7 | 0, qQ += 2
+       }
+       return qQ
+     }
+     WQ.size = qQ, WQ.encode = function(QQ, WQ) {
+       WQ || (WQ = new Uint8Array(qQ(QQ)));
+       for (var XQ, wQ, TQ = 0, zQ = WQ.length, sQ = 0; sQ < QQ.length;) {
+         for (XQ = QQ[sQ], wQ = 0; sQ < QQ.length && QQ[sQ] === XQ;) ++sQ, ++wQ;
+         for (; TQ < zQ && wQ >= 128;) WQ[TQ++] = 128 + (127 & wQ), wQ >>>= 7;
+         if (TQ >= zQ) throw new Error("RLE buffer overflow");
+         for (WQ[TQ++] = wQ, XQ >>>= 0; TQ < zQ && XQ >= 128;) WQ[TQ++] = 128 + (127 & XQ), XQ >>>= 7;
+         if (TQ >= zQ) throw new Error("RLE buffer overflow");
+         WQ[TQ++] = XQ
+ ... (12 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L761-L763` → after: `L1609-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1609-L1610) · [Before (L761-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L761-L763)

```diff
-       d: () => Op,
-       g: () => op,
-       j: () => Sp
+       Color3: () => wQ.b,
+       d: () => wQ.d
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L765-L784` → after: `L1612-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1612-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1612-L1656) · [Before (L765-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L765-L784)

```diff
-     const Ip = ["push", "splice", "pop", "shift", "unshift"];
- 
-     function Sp(pp, ip) {
-       const cp = Ip.map((cp => function(pp, ip, cp) {
-         const Op = pp[ip];
-         if ("function" !== typeof Op) return null;
-         const op = function() {
-           const Op = pp.length,
-             Ip = op.previous.apply(pp, arguments);
-           return cp(ip, Op), Ip
-         };
-         return Op.next = op, op.previous = Op, pp[ip] = op, () => {
-           const cp = op.previous;
-           if (!cp) return;
-           const Op = op.next;
-           Op ? (cp.next = Op, Op.previous = cp) : (cp.next = void 0, pp[ip] = cp), op.next = void 0, op.previous = void 0
- ... (4 more removed lines; see GitHub link above)
+     var wQ = XQ(37546);
+     (0, wQ.h)()
+   },
+   38041: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => qQ
+     });
+     var wQ = XQ(38047);
+     class qQ {
+       static GetPlanes(QQ) {
+         const WQ = [];
+         for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
+         return qQ.GetPlanesToRef(QQ, WQ), WQ
+       }
+       static GetNearPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+ ... (29 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L788` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1660) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L788)

```diff
-   37368: (pp, ip, cp) => {
+   38047: (QQ, WQ, XQ) => {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L790-L791` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1662) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L790-L791)

```diff
-       d: () => Ip,
-       g: () => op
+       b: () => qQ
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L793-L796` → after: `L1664-L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1664-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1664-L1741) · [Before (L793-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L793-L796)

```diff
-     const Op = {};
- 
-     function op(pp, ip) {
-       Op[pp] = ip
+     var wQ = XQ(37370);
+     class qQ {
+       constructor(QQ, WQ, XQ, qQ) {
+         this.normal = new wQ.s(QQ, WQ, XQ), this.d = qQ
+       }
+       awQ() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let QQ = this.normal.getHashCode();
+ ... (62 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L798-L800` → after: `L1743-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1743-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/237.js#L1743-L1782) · [Before (L798-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/237.js#L798-L800)

```diff
- 
-     function Ip(pp) {
-       return Op[pp]
+     qQ._TmpMatrix = wQ.e.Identity()
+   },
+   37367: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       Matrix: () => wQ.e,
+       Quaternion: () => wQ.h,
+       RegisterMathVector: () => wQ.l,
+       TmpVectors: () => wQ.m,
+       Vector2: () => wQ.q,
+       vj: () => wQ.s,
+       Vector4: () => wQ.w
+     });
+     var wQ = XQ(37370);
+     (0, wQ.l)()
+   },
+   38377: (QQ, WQ, XQ) => {
+ ... (24 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/238.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/238.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L2)

```diff
- export const ids = [238];
+ export const ids = [238, 245, 248];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L4` → after: `L4-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L4-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L4-L205) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L4)

```diff
-   37345: (pp, ip, cp) => {
+   40515: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ,
+       g: () => sQ
+     });
+     var wQ = XQ(38956),
+       qQ = XQ(40286),
+       TQ = XQ(40487),
+       zQ = {};
+     class sQ {
+       constructor(QQ) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = QQ, this.checkInputs = () => {}
+       }
+       add(QQ) {
+         const WQ = QQ.getSimpleName();
+         this.attached[WQ] ? wQ.b.Warn("camera input of type " + WQ + " already exists on camera") : (this.attached[WQ] = QQ, QQ.camera = this.camera, QQ.checkInputs && (this.checkInputs = this._addCheckInputs(QQ.checkInputs.bind(QQ))), this.attachedToElement && QQ.attachControl(t … [truncated]
+ ... (186 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L8` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L209) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L8)

```diff
-     var Op = cp(37349);
+     var wQ = XQ(38047);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L10-L11` → after: `L211-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L211-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L211-L214) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L10-L11)

```diff
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       static GetPlanes(QQ) {
+         const WQ = [];
+         for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
+         return qQ.GetPlanesToRef(QQ, WQ), WQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L13-L14` → after: `L216-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L216-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L216-L330) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L13-L14)

```diff
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
+       static GetNearPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+         WQ.normal.x = XQ[3] + XQ[2], WQ.normal.y = XQ[7] + XQ[6], WQ.normal.z = XQ[11] + XQ[10], WQ.d = XQ[15] + XQ[14], WQ.normalize()
+       }
+       static GetFarPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+         WQ.normal.x = XQ[3] - XQ[2], WQ.normal.y = XQ[7] - XQ[6], WQ.normal.z = XQ[11] - XQ[10], WQ.d = XQ[15] - XQ[14], WQ.normalize()
+       }
+       static GetLeftPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+         WQ.normal.x = XQ[3] + XQ[0], WQ.normal.y = XQ[7] + XQ[4], WQ.normal.z = XQ[11] + XQ[8], WQ.d = XQ[15] + XQ[12], WQ.normalize()
+       }
+       static GetRightPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+         WQ.normal.x = XQ[3] - XQ[0], WQ.normal.y = XQ[7] - XQ[4], WQ.normal.z = XQ[11] - XQ[8], WQ.d = XQ[15] - XQ[12], WQ.normalize()
+       }
+ ... (99 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L17` → after: `L333-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L333-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L333-L346) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L17)

```diff
-     op.Instances = [], op.OnEnginesDisposedObservable = new Op.d, op._LastCreatedScene = null, op.UseFallbackTexture = !0, op.FallbackTexture = ""
+     qQ._TmpMatrix = wQ.e.Identity()
+   },
+   37367: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       Matrix: () => wQ.e,
+       Quaternion: () => wQ.h,
+       RegisterMathVector: () => wQ.l,
+       TmpVectors: () => wQ.m,
+       Vector2: () => wQ.q,
+       vj: () => wQ.s,
+       Vector4: () => wQ.w
+     });
+     var wQ = XQ(37370);
+     (0, wQ.l)()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L19` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L348) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L19)

```diff
-   38900: (pp, ip, cp) => {
+   38377: (QQ, WQ, XQ) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L23` → after: `L352-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L352-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L352-L712) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L23)

```diff
-     var Op = cp(38905);
+     class wQ {
+       constructor(QQ, WQ, XQ, wQ) {
+         this.x = QQ, this.y = WQ, this.width = XQ, this.height = wQ
+       }
+       toGlobal(QQ, WQ) {
+         return new wQ(this.x * QQ, this.y * WQ, this.width * QQ, this.height * WQ)
+       }
+       toGlobalToRef(QQ, WQ, XQ) {
+         return XQ.x = this.x * QQ, XQ.y = this.y * WQ, XQ.width = this.width * QQ, XQ.height = this.height * WQ, this
+       }
+       clone() {
+         return new wQ(this.x, this.y, this.width, this.height)
+       }
+     }
+   },
+   40643: (QQ, WQ, XQ) => {
+ ... (345 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L56` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L745) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L56)

```diff
-             Op.e.Warn(Lp.message)
+             wQ.b.Warn(FQ.message)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L62` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L751) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L62)

```diff
-   38124: (pp, ip, cp) => {
+   38191: (QQ, WQ, XQ) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L66` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L755) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L66)

```diff
-         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
+         return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L70` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L759) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L70)

```diff
-       e: () => Op
+       d: () => wQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L73` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L762) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L73)

```diff
-   38905: (pp, ip, cp) => {
+   38956: (QQ, WQ, XQ) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L75` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L764) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L75)

```diff
-       e: () => Op
+       b: () => wQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L96` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L785) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L96)

```diff
-         const ip = pp => pp < 10 ? "0" + pp : "" + pp,
+         const WQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L111` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L800) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L111)

```diff
-         const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
+         const FQ = `<div style='color:${zQ.color}'>${TQ}</div><br>`;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L144` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L833) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L144)

```diff
-   37349: (pp, ip, cp) => {
+   40349: (QQ, WQ, XQ) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L146` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L835) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L146)

```diff
-       d: () => Sp
+       c: () => wQ.h
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L148-L303` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/238.js#L837-L838) · [Before (L148-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/238.js#L148-L303)

```diff
-     const Op = "undefined" !== typeof WeakRef;
-     class op {
-       constructor(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           cp = arguments.length > 2 ? arguments[2] : void 0,
-           Op = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(pp, ip, cp, Op)
-       }
-       initialize(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           cp = arguments.length > 2 ? arguments[2] : void 0,
-           Op = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = pp, this.skipNextObservers = ip, this.target = cp, this.currentTarget = Op, this
-       }
-     }
-     class Ip {
- ... (140 more removed lines; see GitHub link above)
+     var wQ = XQ(40355);
+     (0, wQ.e)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/239.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/239.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034)

#### 1. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L2)

```diff
- export const ids = [239];
+ export const ids = [239, 245];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L4)

```diff
-   37399: (pp, ip, cp) => {
+   42083: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L6-L8)

```diff
-       c: () => xp,
-       e: () => Sp,
-       f: () => op
+       b: () => zQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L10-L12` → after: `L8-L13394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L8-L13394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L8-L13394) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L10-L12)

```diff
-     const Op = 1024,
-       op = 16,
-       Ip = 36e4;
+     var wQ = XQ(42014),
+       qQ = XQ(40253);
+     let TQ = !1;
+ 
+     function zQ() {
+       TQ || (TQ = !0, qQ.c.prototype._sphericalPolynomialTargetSize = 0, qQ.c.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(qQ.c.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = wQ.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = QQ, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
+ ... (13371 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L15` → after: `L13397-L13416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R13397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L13397-L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L13397-L13416) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L15)

```diff
-         this.boneCount = pp, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * pp), this.position = new Float64Array(3 * pp), this.scale = new Float64Array(3 * pp).fill(1), this.touched = new Uint8Arra … [truncated]
+         this.name = lT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
+         const wQ = [];
+         if (XQ instanceof uq) {
+           if (this._isExtensionEnabled(XQ)) return XQ.subSurface.thicknessTexture && wQ.push(XQ.subSurface.thicknessTexture), wQ
+         } else XQ instanceof mW && (XQ.transmissionWeight > 0 || XQ.subsurfaceWeight > 0) && XQ.geometryThicknessTexture && wQ.push(XQ.geometryThicknessTexture);
+         return wQ
+       }
+       _isExtensionEnabled(QQ) {
+         if (QQ.unlit) return !1;
+         const WQ = QQ.subSurface;
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L17-L24` → after: `L13418-L13470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R13418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L13418-L13470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L13418-L13470) · [Before (L17-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L17-L24)

```diff
-       clampToLimits() {
-         for (let pp = 0; pp < this.boneCount; pp++)
-           if (0 !== this.touched[pp])
-             for (let ip = 3 * pp; ip < 3 * pp + 3; ip++) {
-               const pp = this.rotation[ip],
-                 cp = this.position[ip],
-                 Sp = this.scale[ip];
-               pp >= -36e4 && pp <= Ip || (this.rotation[ip] = Lp(pp, Ip)), cp >= -1024 && cp <= Op || (this.position[ip] = Lp(cp, Op)), Sp >= -op && Sp <= op || (this.scale[ip] = Lp(Sp, op, 1))
+       postExportMaterialAsync(QQ, WQ, XQ) {
+         return new Promise((QQ => {
+           if (XQ instanceof uq && this._isExtensionEnabled(XQ)) {
+             this._wasUsed = !0;
+             const QQ = XQ.subSurface,
+               wQ = {
+                 thicknessFactor: 0 == QQ.maximumThickness ? void 0 : QQ.maximumThickness,
+                 thicknessTexture: this._exporter._materialExporter.getTextureInfo(QQ.thicknessTexture) ?? void 0,
+                 attenuationDistance: QQ.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : QQ.tintColorAtDistance,
+                 attenuationColor: QQ.tintColor.equalsFloats(1, 1, 1) ? void 0 : QQ.tintColor.awQ()
+               };
+             this._hasTexturesExtension(XQ) && this._exporter._materialNeedsUVsSet.add(XQ), WQ.extensions = WQ.extensions || {}, WQ.extensions[lT] = wQ
+           } else if (XQ instanceof mW) {
+             const QQ = XQ.transmissionWeight > 0 && !XQ.geometryThinWalled,
+               wQ = XQ.subsurfaceWeight > 0 && !XQ.geometryThinWalled;
+             if (QQ || wQ) {
+ ... (37 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L27-L31` → after: `L13476-L13539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R13476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L13476-L13539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L13476-L13539) · [Before (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L27-L31)

```diff
-       reset() {
-         for (let pp = 0; pp < this.boneCount; pp++)
-           if (0 !== this.touched[pp]) {
-             this.touched[pp] = 0;
-             for (let ip = 3 * pp; ip < 3 * pp + 3; ip++) this.rotation[ip] = 0, this.position[ip] = 0, this.scale[ip] = 1
+     }
+     let iT = !1;
+ 
+     function cT() {
+       iT || (iT = !0, Cw.RegisterExtension(lT, (QQ => new hT(QQ))))
+     }
+     cT();
+     const AT = "KHR_materials_volume_scatter";
+     class RT {
+       constructor(QQ) {
+         this.name = AT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (48 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L37` → after: `L13554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R13554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L13554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L13554) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L37)

```diff
-         this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * pp), this.position = new Float64Arra … [truncated]
+         this.name = uT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = QQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L39-L40` → after: `L13556-L13558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R13556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L13556-L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L13556-L13558) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L39-L40)

```diff
-       touch(pp, ip, cp) {
-         0 === this.touched[pp] && (this.touched[pp] = 1, this.touchedBones[this.touchedCount++] = pp), this.boneWeight[pp] += ip, cp && (this.overrides[pp] = 1)
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L42-L49` → after: `L13560-L14153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R13560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L13560-L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L13560-L14153) · [Before (L42-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L42-L49)

```diff
-       applyTo(pp, ip, cp) {
-         let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         for (let op = 0; op < this.touchedCount; op++) {
-           const Ip = this.touchedBones[op],
-             Sp = this.boneWeight[Ip];
-           if (cp || 1 === this.overrides[Ip]) {
-             const cp = ip * Math.min(1, Sp);
-             for (let ip = 3 * Ip; ip < 3 * Ip + 3; ip++) pp.rotation[ip] += (this.rotation[ip] / Sp - pp.rotation[ip]) * cp, pp.position[ip] += (this.position[ip] / Sp - pp.position[ip]) * cp, pp.scale[ip] += (1 + this.scaleDelta[ip] / Sp - pp.scale[ip]) * cp
+       async postExportMaterialAdditionalTexturesAsync(QQ, WQ, XQ) {
+         const wQ = [];
+         if (XQ instanceof bW) {
+           if (XQ._baseDiffuseRoughness) return XQ._baseDiffuseRoughnessTexture && wQ.push(XQ._baseDiffuseRoughnessTexture), wQ
+         } else if (XQ instanceof mW && XQ.baseDiffuseRoughness) return XQ.baseDiffuseRoughnessTexture && wQ.push(XQ.baseDiffuseRoughnessTexture), wQ;
+         return []
+       }
+       postExportMaterialAsync(QQ, WQ, XQ) {
+         return new Promise((QQ => {
+           let wQ = null,
+             qQ = null;
+           if (XQ instanceof bW ? (wQ = XQ._baseDiffuseRoughness, qQ = XQ._baseDiffuseRoughnessTexture) : XQ instanceof mW && (wQ = XQ.baseDiffuseRoughness, qQ = XQ.baseDiffuseRoughnessTexture), !wQ) return void QQ(WQ);
+           this._wasUsed = !0, WQ.extensions = WQ.extensions || {};
+           const TQ = {
+             diffuseRoughnessFactor: wQ,
+             diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(qQ) ?? void 0
+ ... (578 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L51-L52` → after: `L14155-L14159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14155-L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14155-L14159) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L51-L52)

```diff
-             const cp = Op && Sp > 1 ? ip / Sp : ip;
-             for (let ip = 3 * Ip; ip < 3 * Ip + 3; ip++) pp.rotation[ip] += this.rotation[ip] * cp, pp.position[ip] += this.position[ip] * cp, pp.scale[ip] *= 1 + this.scaleDelta[ip] * cp
+             XQ += `${0===WQ?"ROOT":`${wQ}JOINT`} ${QQ.name}\n`, XQ += `${wQ}{\n`;
+             const TQ = this._GetBoneOffset(QQ);
+             XQ += `${wQ}    OFFSET ${TQ.x.toFixed(6)} ${TQ.y.toFixed(6)} ${TQ.z.toFixed(6)}\n`;
+             const zQ = [];
+             qQ.hasPositionChannels && zQ.push("Xposition", "Yposition", "Zposition"), qQ.hasRotationChannels && zQ.push("Zrotation", "Xrotation", "Yrotation"), zQ.length > 0 && (XQ += `${wQ}    CHANNELS ${zQ.length} ${zQ.join(" ")}\n`), qQ.children.length > 0 && (XQ += this._Expo … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L57-L63` → after: `L14335-L14350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14335-L14350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14335-L14350) · [Before (L57-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L57-L63)

```diff
-       clear() {
-         for (let pp = 0; pp < this.touchedCount; pp++) {
-           const ip = this.touchedBones[pp];
-           this.touched[ip] = 0, this.overrides[ip] = 0, this.boneWeight[ip] = 0;
-           for (let pp = 3 * ip; pp < 3 * ip + 3; pp++) this.rotation[pp] = 0, this.position[pp] = 0, this.scaleDelta[pp] = 0
-         }
-         this.touchedCount = 0
+       toString(QQ) {
+         if (!Number.isFinite(QQ)) throw new Error(`Cannot format non-finite number: ${QQ}`);
+         const WQ = this._o,
+           XQ = this._clampInt(WQ.maxDecimalsCap ?? 15, 0, 20),
+           wQ = WQ.trimTrailingZeros ?? !0,
+           qQ = WQ.snapNearZero ?? !0,
+           TQ = WQ.zeroThreshold ?? WQ.eps,
+           zQ = 1 / WQ.eps;
+         let sQ, FQ = Math.round(QQ * zQ) / zQ;
+         if (Object.is(FQ, -0) && (FQ = 0), qQ && Math.abs(FQ) <= TQ && (FQ = 0), sQ = void 0 !== WQ.fixedDecimals ? this._clampInt(WQ.fixedDecimals, 0, XQ) : this._clampInt(Math.ceil(-Math.log10(WQ.eps)), 0, XQ), WQ.allowScientific, 0 === sQ) return String(Math.trunc(FQ));
+         let PQ = FQ.toFixed(sQ);
+         if (wQ && void 0 === WQ.fixedDecimals && (PQ = PQ.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(PQ)) throw new Error(`Scientific notation not allowed in XML output: ${PQ}`);
+         return PQ
+       }
+       _clampInt(QQ, WQ, XQ) {
+         return Number.isFinite(QQ) ? (QQ = Math.trunc(QQ), Math.max(WQ, Math.min(XQ, QQ))) : WQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L67-L69` → after: `L14354-L14355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14354-L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14354-L14355) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L67-L69)

```diff
-     function Lp(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       return Number.isNaN(pp) ? cp : Math.min(ip, Math.max(-ip, pp))
+     function Yz(QQ) {
+       return QQ instanceof Date
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L83-L84` → after: `L14359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14359) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L83-L84)

```diff
-       if ("Lo" in pp) return Rp.createAnimationScript(pp);
-       return new Dp(pp).createAnimationScript()
+       return "string" === typeof QQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L87-L89` → after: `L14362-L14367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14362-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14362-L14367) · [Before (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L87-L89)

```diff
-     function Lp(pp, ip, cp, op) {
-       const Ip = pp.Lo <= 0 ? 1 : ip + cp * Math.max(0, op) / pp.Lo;
-       return pp.Yo === Op.j.LoopOnLastFrame ? Ip % 1 : pp.Yo === Op.j.NoLoop && Ip >= 1 ? null : Math.min(1, Ip)
+     function Zz(QQ) {
+       return "string" === typeof QQ || "number" === typeof QQ || "boolean" === typeof QQ || "bigint" === typeof QQ || Yz(QQ)
+     }
+ 
+     function Oz(QQ) {
+       return "number" === typeof QQ || "boolean" === typeof QQ || "bigint" === typeof QQ || Yz(QQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L92-L101` → after: `L14370-L14390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14370-L14390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14370-L14390) · [Before (L92-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L92-L101)

```diff
-       createAnimationScript(pp) {
-         const {
-           Lo: ip,
-           loop: cp,
-           Do: Op
-         } = pp;
-         return {
-           Lo: Math.round(ip),
-           Yo: this.createLoopMode(null !== cp && void 0 !== cp && cp),
-           Do: this.createNodeSkeletonAnimationScript(null !== Op && void 0 !== Op ? Op : null)
+       constructor(QQ, WQ) {
+         this._ns = new Map, this._prefixCount = 0, this._builder = QQ, this._format = nz(WQ), this._nFmt = new xz(this._format)
+       }
+       withNamespace() {
+         for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
+         for (const wQ of WQ) this._assignNamespace(wQ);
+         return this
+       }
+       serialize(QQ, WQ) {
+         if (!(WQ = WQ ?? Lz(QQ))) throw new Error("can not find name for given object");
+         const XQ = fz(WQ);
+         XQ.ns && this._assignNamespace(XQ.ns, "xmlns"), this._gatherNamespaces(QQ, new WeakSet);
+         const wQ = this._builder.ele(null, XQ.name);
+         for (const [qQ, TQ] of Array.from(this._ns.entries())) wQ.att("xmlns", TQ, qQ);
+         this._writeObjectContent(wQ, QQ, (new WeakSet).add(QQ)), this._builder.end()
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L104-L111` → after: `L14399-L14402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14399-L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14399-L14402) · [Before (L104-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L104-L111)

```diff
-       createLoopMode(pp) {
-         switch (pp) {
-           case !1:
-             return Op.j.NoLoop;
-           case !0:
-             return Op.j.LoopOnLastFrame;
-           case "hold-on-last-frame":
-             return Op.j.HoldOnLastFrame
+       _getPrefix(QQ) {
+         if (QQ.ns) {
+           const WQ = this._ns.get(QQ.ns.toLowerCase());
+           if ("xmlns" !== WQ) return WQ
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L115-L118` → after: `L14405-L14416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14405-L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14405-L14416) · [Before (L115-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L115-L118)

```diff
-       createNodeSkeletonAnimationScript(pp) {
-         if (null === pp) return null;
-         const ip = {};
-         for (const cp in pp) {
+       _writeObjectContent(QQ, WQ, XQ) {
+         const wQ = uz(WQ) ?? [],
+           qQ = new Map;
+         for (const zQ of wQ) {
+           const QQ = qQ.get(zQ.prop) ?? [];
+           QQ.push(zQ), qQ.set(zQ.prop, QQ)
+         }
+         const TQ = Object.keys(WQ).sort(((QQ, WQ) => {
+           const XQ = (qQ.get(QQ) ?? []).some((QQ => "attr" === QQ.kind));
+           return XQ === (qQ.get(WQ) ?? []).some((QQ => "attr" === QQ.kind)) ? 0 : XQ ? -1 : 1
+         }));
+         for (const zQ of TQ) {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L120` → after: `L14418-L14440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14418-L14440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14418-L14440) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L120)

```diff
-           ip[cp] = this.createNodeAnimationScript(Op)
+           if (null === wQ || void 0 === wQ) continue;
+           const TQ = qQ.get(zQ);
+           if (TQ) {
+             if (TQ.some((QQ => !0 === QQ.ignore || "none" === QQ.kind))) continue;
+             for (const WQ of TQ) {
+               const XQ = WQ.name ?? WQ.prop.toLowerCase();
+               if (XQ) switch (WQ.kind) {
+                 case "attr": {
+                   let qQ = null;
+                   if ("number" === typeof wQ && this._nFmt && (qQ = this._nFmt.toString(wQ)), WQ.formatter) {
+                     qQ = new WQ.formatter(this._format).toString(wQ)
+                   }
+                   if (qQ = qQ ?? wQ.toString(), qQ) {
+                     const WQ = fz(XQ),
+                       wQ = this._getPrefix(WQ),
+                       TQ = Sz(WQ.name, wQ);
+ ... (7 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L124-L131` → after: `L14443-L14447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14443-L14447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14443-L14447) · [Before (L124-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L124-L131)

```diff
-       createNodeAnimationScript(pp) {
-         const {
-           timeline: ip
-         } = pp, cp = ip.filter((pp => Number.isFinite(pp.timeFraction)));
-         return cp.sort(((pp, ip) => pp.timeFraction - ip.timeFraction)), {
-           rotation: this.createTimelineFromKeyframes(cp, "rotation", Wp),
-           position: this.createTimelineFromKeyframes(cp, "position", Up),
-           scale: this.createTimelineFromKeyframes(cp, "scale", Up, vp)
+       _gatherNamespaces(QQ, WQ) {
+         if (WQ.has(QQ)) return;
+         if (WQ.add(QQ), Array.isArray(QQ)) {
+           for (const XQ of QQ) Zz(XQ) || this._gatherNamespaces(XQ, WQ);
+           return
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L133-L136` → after: `L14449-L14452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14449-L14452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14449-L14452) · [Before (L133-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L133-L136)

```diff
-       }
-       createTimelineFromKeyframes(pp, ip, cp) {
-         let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp => pp;
-         const op = [];
+         const XQ = Lz(QQ);
+         XQ && this._assignNamespace(XQ);
+         const wQ = uz(QQ) ?? [],
+           qQ = new Map;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L140-L141` → after: `L14463-L14464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14463-L14464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14463-L14464) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L140-L141)

```diff
-             const ip = this.createAnimationFrameWithoutPrecomputes(Yp.timeFraction, pp, Op);
-             Ap(ip) && op.push(ip)
+             if (XQ.some((QQ => !0 === QQ.ignore || "none" === QQ.kind))) continue;
+             for (const QQ of XQ) QQ.name && this._assignNamespace(QQ.name)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L144-L156` → after: `L14468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14468) · [Before (L144-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L144-L156)

```diff
-         const Ip = [];
-         for (let Yp = 0; Yp < op.length; Yp++) {
-           var Sp, xp, Lp;
-           const pp = op[Yp],
-             ip = null !== (Sp = op[Yp - 1]) && void 0 !== Sp ? Sp : pp,
-             Op = null !== (xp = op[Yp + 1]) && void 0 !== xp ? xp : pp,
-             Dp = null !== (Lp = op[Yp + 2]) && void 0 !== Lp ? Lp : Op;
-           Ip.push({
-             ...pp,
-             ...cp(ip.post, ip.timeFraction, pp.post, pp.timeFraction, Op.pre, Op.timeFraction, Dp.pre, Dp.timeFraction)
-           })
-         }
-         return Ip
+         for (const zQ of TQ) Zz(zQ) || this._gatherNamespaces(zQ, WQ)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L158-L170` → after: `L14470-L14477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14470-L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14470-L14477) · [Before (L158-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L158-L170)

```diff
-       createAnimationFrameWithoutPrecomputes(pp, ip, cp) {
-         let Op, op, Ip = null;
-         var Sp;
-         if ("object" === typeof ip && "point" in ip) Ip = null !== (Sp = ip.Wo) && void 0 !== Sp ? Sp : null, Op = ip.point, op = ip.point;
-         else if ("object" === typeof ip && "pre" in ip) {
-           var xp;
-           Ip = null !== (xp = ip.Wo) && void 0 !== xp ? xp : null, Op = ip.pre, op = ip.post
-         } else Op = ip, op = ip;
-         return {
-           timeFraction: pp,
-           Wo: this.createLerpMode(Ip),
-           pre: cp(Op),
-           post: cp(op)
+       _assignNamespace(QQ, WQ) {
+         const XQ = fz(QQ);
+         if (XQ?.ns) {
+           const QQ = XQ.ns.toLowerCase();
+           this._ns.get(QQ) || this._ns.set(QQ, WQ ?? this._buildNsPrefix(QQ))
+         } else if ("xmlns" === WQ) {
+           const QQ = XQ.name.toLowerCase();
+           this._ns.get(QQ) || this._ns.set(QQ, WQ ?? this._buildNsPrefix(QQ))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L173-L174` → after: `L14480-L14490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14480-L14490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14480-L14490) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L173-L174)

```diff
-       createLerpMode(pp) {
-         return null === pp ? Op.f.Linear : Yp.LERP_MODE_SCHEMA_MAPPING[pp]
+       _buildNsPrefix(QQ) {
+         let WQ, XQ = !1;
+         do {
+           WQ = "ns" + this._prefixCount++;
+           for (const QQ of Array.from(this._ns.values()))
+             if (QQ === WQ) {
+               XQ = !0;
+               break
+             }
+         } while (XQ);
+         return WQ
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L177-L180` → after: `L14493-L14498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14493-L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14493-L14498) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L177-L180)

```diff
-     Yp.LERP_MODE_SCHEMA_MAPPING = {
-       linear: Op.f.Linear,
-       "catmull-rom-spline": Op.f.CatmullRomSpline
-     };
+     class mz {}
+     var Mz;
+     mz.OpenTag = "<", mz.CloseTag = ">", mz.Slash = "/", mz.Question = "?", mz.Quote = '"', mz.Equal = "=", mz.Space = " ", mz.Semicolon = ":", mz.Dec = "<?xml", mz.Xml = "xml", mz.Xmlns = "xmlns", mz.Xsi = "xsi", mz.VersionKeyword = "version", mz.EncodingKeyword = "encoding", mz … [truncated]
+       function(QQ) {
+         QQ[QQ.Declaration = 0] = "Declaration", QQ[QQ.Tag = 1] = "Tag", QQ[QQ.Attribute = 2] = "Attribute", QQ[QQ.Text = 3] = "Text"
+       }(Mz || (Mz = {}));
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L183` → after: `L14501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14501) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L183)

```diff
-         this.animationSchema = pp
+         this._ctxStack = [], this._d = 0, this._w = QQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L185-L195` → after: `L14503-L14504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14503-L14504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14503-L14504) · [Before (L185-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L185-L195)

```diff
-       createAnimationScript() {
-         const {
-           animation_length: pp,
-           loop: ip,
-           bones: cp
-         } = this.animationSchema;
-         return {
-           Lo: Math.round(1e3 * pp),
-           Yo: this.createLoopMode(null !== ip && void 0 !== ip && ip),
-           Do: this.createNodeSkeletonAnimationScript(null !== cp && void 0 !== cp ? cp : null)
-         }
+       dec(QQ, WQ, XQ) {
+         return this._w.write(mz.Dec), this._writeAttStr(mz.VersionKeyword, QQ), WQ && this._writeAttStr(mz.EncodingKeyword, WQ), void 0 !== XQ && this._writeAttStr(mz.StandaloneKeyword, XQ ? "yes" : "no"), this._w.write(mz.Question, mz.CloseTag), this
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L197-L204` → after: `L14506-L14517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14506-L14517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14506-L14517) · [Before (L197-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L197-L204)

```diff
-       createLoopMode(pp) {
-         switch (pp) {
-           case !1:
-             return Op.j.NoLoop;
-           case !0:
-             return Op.j.LoopOnLastFrame;
-           case "hold_on_last_frame":
-             return Op.j.HoldOnLastFrame
+       att(QQ, WQ, XQ) {
+         const wQ = this._peekContext();
+         if (!wQ) throw new Error("att() without open element");
+         if (wQ.closed) throw new Error(`att() after start tag closed for <${wQ.name}>`);
+         if (this._isXmlnsDecl(QQ, WQ)) {
+           if (WQ === mz.Xmlns) wQ.defaultNs = XQ, this._registerNamespace(wQ, "", XQ), this._writeAttStr(mz.Xmlns, XQ);
+           else if (QQ) this._registerNamespace(wQ, WQ, XQ), this._writeAttStr(`${QQ}:${WQ}`, XQ);
+           else {
+             const QQ = WQ.slice(6);
+             this._registerNamespace(wQ, QQ, XQ), this._writeAttStr(WQ, XQ)
+           }
+           return wQ.lastToken = Mz.Attribute, this
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L206-L213` → after: `L14519-L14521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14519-L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14519-L14521) · [Before (L206-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L206-L213)

```diff
-         throw new Error(`Invalid Blockbench loop mode schema: ${pp}`)
-       }
-       createNodeSkeletonAnimationScript(pp) {
-         if (null === pp) return null;
-         const ip = {};
-         for (const cp in pp) {
-           const Op = pp[cp];
-           ip[cp] = this.createNodeAnimationScript(Op)
+         let qQ = WQ;
+         if (QQ) {
+           qQ = `${this._ensurePrefixDeclared(wQ,QQ)}:${WQ}`
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L215` → after: `L14523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14523) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L215)

```diff
-         return ip
+         return wQ.lastToken = Mz.Attribute, this._writeAttStr(qQ, XQ), this
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L217-L226` → after: `L14525-L14530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14525-L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14525-L14530) · [Before (L217-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L217-L226)

```diff
-       createNodeAnimationScript(pp) {
-         const {
-           rotation: ip,
-           position: cp,
-           scale: Op
-         } = pp;
-         return {
-           rotation: this.createAnimationTimeline(null !== ip && void 0 !== ip ? ip : null, Hp, Wp, !0),
-           position: this.createAnimationTimeline(null !== cp && void 0 !== cp ? cp : null, ep, Up, !1),
-           scale: this.createAnimationTimeline(null !== Op && void 0 !== Op ? Op : null, wp, Up, !1)
+       ele(QQ, WQ) {
+         const XQ = this._peekContext();
+         XQ && this._closeOpenTagIfNeeded(XQ);
+         let wQ = WQ;
+         if (QQ) {
+           wQ = `${this._lookupPrefix(QQ)??QQ}:${WQ}`
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L229-L265` → after: `L14534-L14537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14534-L14537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14534-L14537) · [Before (L229-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L229-L265)

```diff
-       createAnimationTimeline(pp, ip, cp, Op) {
-         if (null === pp) return [];
-         (Array.isArray(pp) || "number" === typeof pp) && (pp = {
-           "0.0": pp
-         });
-         const op = Object.entries(pp).map((pp => {
-           let [cp, Op] = pp;
-           const op = Number(cp) / this.animationSchema.animation_length;
-           return this.createAnimationFrameWithoutPrecomputes(op, Op, ip)
-         })).filter(Ap);
-         op.sort(((pp, ip) => pp.timeFraction - ip.timeFraction)), Op && function(pp) {
-           for (let ip = 1; ip < pp.length; ip++) {
-             const cp = pp[ip - 1].post,
-               Op = pp[ip],
-               op = jp(Op.pre),
-               Ip = jp(Op.post),
- ... (21 more removed lines; see GitHub link above)
+       text(QQ) {
+         const WQ = this._peekContext();
+         if (!WQ) throw new Error("text() without open element");
+         return this._closeOpenTagIfNeeded(WQ), WQ.lastToken = Mz.Text, this._w.write(this._escText(QQ)), this
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L267-L280` → after: `L14539-L14590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14539-L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14539-L14590) · [Before (L267-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L267-L280)

```diff
-       createAnimationFrameWithoutPrecomputes(pp, ip, cp) {
-         let Op, op, Ip = null;
-         if ("object" === typeof ip && "post" in ip) {
-           var Sp;
-           Ip = null !== (Sp = ip.lerp_mode) && void 0 !== Sp ? Sp : null, op = cp(ip.post), Op = void 0 !== ip.pre ? cp(ip.pre) : op
-         } else {
-           const pp = cp(ip);
-           op = pp, Op = pp
-         }
-         return {
-           timeFraction: pp,
-           Wo: this.createLerpMode(Ip),
-           pre: Op,
-           post: op
+       end() {
+         const QQ = this._popContext();
+         return QQ && (this._d--, QQ.closed ? this._w.write(mz.OpenTag, mz.Slash, QQ.name, mz.CloseTag) : this._w.write(mz.Slash, mz.CloseTag)), this
+       }
+       _pushContext(QQ, WQ) {
+         const XQ = new Qs.Context(QQ, WQ);
+         return this._ctxStack.push(XQ), XQ
+       }
+       _popContext() {
+         return this._ctxStack.pop()
+       }
+       _peekContext() {
+         return this._ctxStack[this._ctxStack.length - 1]
+       }
+       get _contextDepth() {
+         return this._ctxStack.length
+ ... (36 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L283-L284` → after: `L14593-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14593-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14593-L14601) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L283-L284)

```diff
-       createLerpMode(pp) {
-         return null === pp ? Op.f.Linear : Dp.LERP_MODE_SCHEMA_MAPPING[pp]
+       _ensurePrefixDeclared(QQ, WQ) {
+         const XQ = this._lookupPrefix(WQ);
+         if (XQ) return XQ;
+         if (QQ.closed) throw new Error(`can not declare namespace after start tag closed for <${QQ.name}>`);
+         const wQ = this._allocPrefix(QQ);
+         return this._writeAttStr(`${mz.Xmlns}:${wQ}`, WQ), this._registerNamespace(QQ, wQ, WQ), wQ
+       }
+       _closeOpenTagIfNeeded(QQ) {
+         QQ.closed || (this._w.write(mz.CloseTag), QQ.closed = !0)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L287-L289` → after: `L14604-L14624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14604-L14624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14604-L14624) · [Before (L287-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L287-L289)

```diff
- 
-     function Ap(pp) {
-       return Number.isFinite(pp.timeFraction) && Pp(pp.pre) && Pp(pp.post)
+     Qs.Context = class {
+       constructor(QQ, WQ) {
+         this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = QQ, this.depth = WQ
+       }
+     };
+     class Ws {
+       constructor() {
+         this.count = 0, this._chunks = []
+       }
+       write() {
+         for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
+         if (0 === WQ.length) return this;
+         const wQ = WQ.join("");
+         return this._chunks.push(wQ), this.count += wQ.length, this
+       }
+       toString() {
+ ... (5 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L291-L293` → after: `L14626-L14650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14626-L14650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14626-L14650) · [Before (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L291-L293)

```diff
- 
-     function Pp(pp) {
-       return Number.isFinite(pp[0]) && Number.isFinite(pp[1]) && Number.isFinite(pp[2])
+     class Xs {
+       constructor(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         this._sink = QQ, this._opts = WQ, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
+       }
+       write() {
+         for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
+         if (0 === WQ.length) return this;
+         const wQ = WQ.join("");
+         if (0 === wQ.length) return this;
+         this._pending += wQ, this._pendingChars += wQ.length;
+         const qQ = this._opts.flushChars ?? 65536;
+         return this._pendingChars >= qQ && this.flush(), this
+       }
+       flush() {
+         if (0 === this._pendingChars) return this;
+ ... (9 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L295-L304` → after: `L14652-L14677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14652-L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14652-L14677) · [Before (L295-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L295-L304)

```diff
- 
-     function Wp(pp, ip, cp, Op, op, Ip, Sp, xp) {
-       const Lp = Ip - ip,
-         Yp = Ip - Op,
-         Dp = xp - Op,
-         Ap = [null, null, null];
-       for (let Pp = 0; Pp < Ap.length; Pp++) Ap[Pp] = yp(pp[Pp], cp[Pp], op[Pp], Sp[Pp], Lp, Dp);
-       return {
-         yo: Yp,
-         Uo: Ap
+     const ws = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
+       qs = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
+     var Ts, zs;
+     ! function(QQ) {
+       QQ.micron = "micron", QQ.millimeter = "millimeter", QQ.centimeter = "centimeter", QQ.inch = "inch", QQ.foot = "foot", QQ.meter = "meter"
+     }(Ts || (Ts = {})),
+     function(QQ) {
+       QQ.model = "model", QQ.solidsupport = "solidsupport", QQ.support = "support", QQ.surface = "surface", QQ.other = "other"
+     }(zs || (zs = {}));
+     const ss = "http://schemas.openxmlformats.org/package/2006/content-types",
+       Fs = "http://schemas.openxmlformats.org/package/2006/relationships";
+     var Ps;
+     ! function(QQ) {
+       QQ.Relationships = "application/vnd.openxmlformats-package.relationships+xml", QQ.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", QQ.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", QQ.Colors = "application/vnd.ms-package.3dmanufactur … [truncated]
+     }(Ps || (Ps = {}));
+     const gs = "_rels/",
+ ... (10 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L307-L312` → after: `L14680-L14882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14680-L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14680-L14882) · [Before (L307-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L307-L312)

```diff
- 
-     function yp(pp, ip, cp, Op, Ip, Sp) {
-       return {
-         vo: op.d.computeShortestRotation(pp, cp) / Ip,
-         Ho: op.d.computeShortestRotation(ip, Op) / Sp,
-         delta: op.d.computeShortestRotation(ip, cp)
+     Vs.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Vs.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Vs.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Vs.MustPre … [truncated]
+     let Ds = (() => {
+         let QQ, WQ, XQ = [Az({
+             ns: ss,
+             name: "Types"
+           })],
+           wQ = [];
+         WQ = class {
+           constructor() {
+             this.items = []
+           }
+         };
+         return (0, HQ.p)(WQ, "ThreeMfContentTypes"), (() => {
+           const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+           (0, HQ.k)(null, QQ = {
+             value: WQ
+ ... (187 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L315-L328` → after: `L14885-L14893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14885-L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14885-L14893) · [Before (L315-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L315-L328)

```diff
- 
-     function Up(pp, ip, cp, Op, op, Ip, Sp, xp) {
-       const Lp = Ip - ip,
-         Yp = Ip - Op,
-         Dp = xp - Op,
-         Ap = [null, null, null];
-       for (let Pp = 0; Pp < Ap.length; Pp++) Ap[Pp] = {
-         vo: (op[Pp] - pp[Pp]) / Lp,
-         Ho: (Sp[Pp] - cp[Pp]) / Dp,
-         delta: op[Pp] - cp[Pp]
-       };
-       return {
-         yo: Yp,
-         Uo: Ap
+     class vs {
+       static Zero() {
+         return new vs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
+       }
+       constructor(QQ) {
+         this.values = QQ
+       }
+       toString() {
+         return this.values.join(" ")
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L331-L333` → after: `L14896-L14902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14896-L14902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14896-L14902) · [Before (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L331-L333)

```diff
- 
-     function wp(pp) {
-       return vp("number" === typeof pp ? [pp, pp, pp] : pp)
+     class ds {
+       constructor(QQ) {
+         this.o = QQ, this._f = new xz(QQ)
+       }
+       toString(QQ) {
+         return QQ.values.map((QQ => this._f.toString(QQ))).join(" ")
+       }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L335-L337` → after: `L14904-L15888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14904-L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L14904-L15888) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L335-L337)

```diff
- 
-     function vp(pp) {
-       return [tp(pp[0]), tp(pp[1]), tp(pp[2])]
+     let Hs = (() => {
+         let QQ, WQ, XQ, wQ, qQ, TQ = [Az({
+             ns: ws,
+             name: "model"
+           })],
+           zQ = [],
+           sQ = [],
+           FQ = [],
+           PQ = [],
+           gQ = [],
+           JQ = [],
+           rQ = [];
+         WQ = class {
+           constructor() {
+             this.unit = (0, HQ.n)(this, sQ, Ts.millimeter), this.requiredextensions = ((0, HQ.n)(this, FQ), (0, HQ.n)(this, PQ, void 0)), this.recommendedextensions = ((0, HQ.n)(this, gQ), (0, HQ.n)(this, JQ, void 0)), this.metadata = (0, HQ.n)(this, rQ)
+           }
+ ... (969 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L339-L341` → after: `L15890-L15896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R15890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L15890-L15896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L15890-L15896) · [Before (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L339-L341)

```diff
- 
-     function tp(pp) {
-       return Number.isFinite(pp) ? Math.min(Sp.f, Math.max(-Sp.f, pp)) : pp
+     class es extends os {
+       constructor(QQ) {
+         super(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zs.model), this._object.content = new us
+       }
+       withComponent(QQ, WQ) {
+         return this._object.content.component.push(new Ls(QQ, WQ)), this
+       }
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L343-L346` → after: `L15898-L15939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R15898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L15898-L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L15898-L15939) · [Before (L343-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L343-L346)

```diff
- 
-     function Hp(pp) {
-       const [ip, cp, Op] = pp, Sp = -(0, Ip.o)(ip), xp = -(0, Ip.o)(cp), Lp = (0, Ip.o)(Op), Yp = op.d.quaternionFromEulerZYX(Sp, xp, Lp);
-       return op.d.eulerYXZFromQuaternion(Yp)
+     class ns extends os {
+       constructor(QQ) {
+         super(QQ, zs.model)
+       }
+       withPostProcessHandlers(QQ, WQ) {
+         return this._vh = QQ, this._th = WQ, this
+       }
+       withData(QQ) {
+         return this._object.content = this._buildMesh(QQ), this
+       }
+       withMaterial(QQ, WQ) {
+         return this._object.pid = QQ, this._object.pindex = WQ, this
+       }
+       _buildMesh(QQ) {
+         const WQ = this._buildVertices(QQ.positions),
+           XQ = this._buildTriangle(QQ.indices);
+ ... (26 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L348-L355` → after: `L15941-L15962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R15941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L15941-L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L15941-L15962) · [Before (L348-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L348-L355)

```diff
-     Dp.LERP_MODE_SCHEMA_MAPPING = {
-       linear: Op.f.Linear,
-       catmullrom: Op.f.CatmullRomSpline
-     };
-     const dp = 1 / 16;
- 
-     function ep(pp) {
-       return [-pp[0] * dp, pp[1] * dp, pp[2] * dp]
+     class xs {
+       constructor(QQ) {
+         this._m = new ks(QQ)
+       }
+       withColor(QQ, WQ) {
+         this._m.base = this._m.base ?? [];
+         let XQ = this._m.base.find((WQ => WQ.name.toLowerCase() === QQ.toLowerCase()));
+         return XQ ? (XQ.displaycolor = this._rgbaToHex(WQ), this) : (XQ = new fs(QQ, this._rgbaToHex(WQ)), this._m.base.push(XQ), this)
+       }
+       build() {
+         return this._m
+       }
+       _rgbaToHex(QQ) {
+         const WQ = QQ => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(QQ, 1 / 2.2)))),
+           XQ = WQ(QQ.r).toString(16).padStart(2, "0").toUpperCase(),
+           wQ = WQ(QQ.g).toString(16).padStart(2, "0").toUpperCase(),
+ ... (6 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L357-L360` → after: `L15964-L15993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R15964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L15964-L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L15964-L15993) · [Before (L357-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L357-L360)

```diff
- 
-     function jp(pp) {
-       const [ip, cp, Op] = pp;
-       return [ip >= 0 ? Math.PI - ip : -Math.PI - ip, kp(cp + Math.PI), kp(Op + Math.PI)]
+     class Ys {
+       constructor() {
+         this._model = new Hs, this._objects = new Map
+       }
+       withMetaData(QQ, WQ, XQ, wQ) {
+         return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new as(QQ, WQ, XQ, wQ)), this
+       }
+       withMaterial(QQ) {
+         return QQ instanceof xs && (QQ = QQ.build()), QQ && (this._model.resources = this._model.resources ?? new hs, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(QQ)), this
+       }
+       withMesh(QQ) {
+         return QQ instanceof ns && (QQ = QQ.build()), this._model.resources = this._model.resources ?? new hs, this._model.resources.object.push(QQ), this
+       }
+       withComponents(QQ) {
+         return QQ instanceof es && (QQ = QQ.build()), this._model.resources = this._model.resources ?? new hs, this._model.resources.object.push(QQ), this
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L362-L364` → after: `L15995-L16018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R15995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L15995-L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L15995-L16018) · [Before (L362-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L362-L364)

```diff
- 
-     function kp(pp) {
-       return op.d.mod(pp + Math.PI, 2 * Math.PI) - Math.PI
+     Ys.KnownMetaSet = new Set(Hs.KnownMeta.map((QQ => QQ.toLowerCase())));
+     class Ns {
+       withContentType(QQ) {
+         this._cts || (this._cts = new Ds);
+         const WQ = this._cts.items;
+         return WQ.some((WQ => WQ.ext === QQ.ext && WQ.ct === QQ.ct)) || WQ.push(QQ), this
+       }
+       withRelationship(QQ) {
+         this._rs || (this._rs = new Gs);
+         const WQ = this._rs.items;
+         return WQ.some((WQ => WQ.id === QQ.id)) || WQ.push(QQ), this.withContentType(new ps("rels", Ps.Relationships)), this
+       }
+       withModel(QQ) {
+         return QQ instanceof Ys && (QQ = QQ.build()), this._m = QQ, this.withContentType(new ps("model", Ps.Model)), this
+       }
+       build() {
+ ... (8 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L366-L368` → after: `L16020-L16059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L16020-L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L16020-L16059) · [Before (L366-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L366-L368)

```diff
- 
-     function mp(pp, ip) {
-       return Math.abs(op.d.computeShortestRotation(pp[0], ip[0])) + Math.abs(op.d.computeShortestRotation(pp[1], ip[1])) + Math.abs(op.d.computeShortestRotation(pp[2], ip[2]))
+     class Zs {
+       constructor(QQ) {
+         this._o = QQ
+       }
+       get options() {
+         return this._o
+       }
+       async serializeAsync(QQ) {
+         const WQ = await this.ensureZipLibReadyAsync();
+         if (!WQ) return;
+         const XQ = WQ.Zip,
+           wQ = WQ.ZipDeflate;
+         if (!XQ || !wQ) throw new Error("fflate Zip / ZipDeflate not available");
+         const qQ = function(QQ, WQ, XQ) {
+           const qQ = new wQ(WQ, {
+             level: 6
+ ... (24 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L370-L390` → after: `L16061-L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R16061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L16061-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/239.js#L16061-L16197) · [Before (L370-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/239.js#L370-L390)

```diff
-     const Rp = new Yp
-   },
-   37385: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp,
-       e: () => Ip,
-       f: () => Op,
-       j: () => op
-     });
-     let Op = function(pp) {
-         return pp[pp.Linear = 0] = "Linear", pp[pp.CatmullRomSpline = 1] = "CatmullRomSpline", pp
-       }({}),
-       op = function(pp) {
-         return pp[pp.NoLoop = 0] = "NoLoop", pp[pp.LoopOnLastFrame = 1] = "LoopOnLastFrame", pp[pp.HoldOnLastFrame = 2] = "HoldOnLastFrame", pp
-       }({}),
-       Ip = function(pp) {
- ... (5 more removed lines; see GitHub link above)
+     class Os {
+       static async SerializeToMemoryAsync(QQ) {
+         const WQ = new Array;
+         let XQ = 0;
+         for (var wQ = arguments.length, qQ = new Array(wQ > 1 ? wQ - 1 : 0), TQ = 1; TQ < wQ; TQ++) qQ[TQ - 1] = arguments[TQ];
+         if (await QQ.serializeAsync((function(QQ, wQ, qQ) {
+             WQ.push(wQ), XQ += wQ.length
+           }), ...qQ), !XQ) return;
+         const zQ = new Uint8Array(XQ);
+         let sQ = 0;
+         for (const FQ of WQ) zQ.set(FQ, sQ), sQ += FQ.length;
+         return zQ
+       }
+     }
+     class Ks {}
+     Ks.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
+ ... (121 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/240.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/240.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L4-L7)

```diff
-   61395: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       DEVTOOLS_SHADERS: () => Ip,
-       registerDevtoolsShader: () => Sp
+   37392: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => qQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L9-L28` → after: `L8-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L8-L32) · [Before (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L9-L28)

```diff
-     var Op = cp(40062),
-       op = cp(37421);
-     const Ip = {
-       devtoolsNormal: function(pp) {
-         return {
-           vertex: `\n\t\t\t${(0,op.d)(pp,"position","vec3")}\n\t\t\t${(0,op.d)(pp,"normal","vec3")}\n\t\t\t${(0,op.rb)(pp,"worldViewProjection","mat4")}\n\t\t\t${(0,op.rb)(pp,"world","mat4")}\n\t\t\t${(0,op.tb)(pp,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,op.vb)(pp,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,op.tb)(pp,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,op.N)(pp,`\n\t\t\t\t\n\t\t\t\t${(0,op.A)(pp,"vec3","normalColor",`abs(${(0,op.R)(pp,"vNormal")})`)}\n\t\t\t\t${(0,op.I)(pp)} = ${(0,op.j)(pp,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsWhite: function(pp) {
-         return {
-           vertex: `\n\t\t\t${(0,op.d)(pp,"position","vec3")}\n\t\t\t${(0,op.rb)(pp,"worldViewProjection","mat4")}\n\n\t\t\t${(0,op.vb)(pp,`\n\t\t\t\t${(0,op.i)(pp)} = ${(0,op.sb)(pp,"worldViewProjection")} * ${(0,op.j)(pp,"vec4",(0,op.zb)(pp,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,op.N)(pp,`\n\t\t\t\t${(0,op.I)(pp)} = ${(0,op.j)(pp,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsDepth: function(pp) {
- ... (4 more removed lines; see GitHub link above)
+     var wQ = XQ(37399);
+     class qQ {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     qQ.Instances = [], qQ.OnEnginesDisposedObservable = new wQ.b, qQ._LastCreatedScene = null, qQ.UseFallbackTexture = !0, qQ.FallbackTexture = ""
+   },
+   37387: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => wQ
+     });
+     class wQ {
+ ... (9 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L40` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L37) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L40)

```diff
-   37421: (pp, ip, cp) => {
+   37412: (QQ, WQ, XQ) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L42-L57` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L39) · [Before (L42-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L42-L57)

```diff
-       $: () => hp,
-       A: () => Dp,
-       Ab: () => Mp,
-       B: () => mp,
-       D: () => lp,
-       G: () => Ip,
-       I: () => Bp,
-       K: () => Jp,
-       N: () => dp,
-       R: () => Cp,
-       S: () => Xp,
-       V: () => fp,
-       Y: () => op,
-       Z: () => Qp,
-       b: () => Op,
-       cb: () => np,
+       c: () => sQ,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L59-L64` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L41-L42) · [Before (L59-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L59-L64)

```diff
-       db: () => kp,
-       eb: () => jp,
-       g: () => Rp,
-       gb: () => ap,
-       i: () => tp,
-       ib: () => Fp,
+       f: () => FQ,
+       h: () => wQ,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L66-L78` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L44) · [Before (L66-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L66-L78)

```diff
-       jb: () => bp,
-       l: () => Np,
-       mb: () => ep,
-       n: () => Tp,
-       qb: () => Yp,
-       r: () => Pp,
-       rb: () => vp,
-       sb: () => Ep,
-       tb: () => wp,
-       v: () => Wp,
-       vb: () => Hp,
-       w: () => Ap,
-       zb: () => qp
+       l: () => zQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L80-L83` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L46) · [Before (L80-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L80-L83)

```diff
-     const Op = {
-       GLSL: 0,
-       WGSL: 1
-     };
+     class wQ {}
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L86` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L49) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L86)

```diff
-       return pp === Op.WGSL
+       QQ.updateFlag = wQ._UpdateFlagSeed++
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L90-L120` → after: `L53-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L53-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L53-L88) · [Before (L90-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L90-L120)

```diff
-       return op(pp) ? cp : ip
-     }
-     const Sp = new Map([
-       ["int", "i32"],
-       ["float", "f32"],
-       ["vec2", "vec2f"],
-       ["vec3", "vec3f"],
-       ["vec4", "vec4f"],
-       ["mat2", "mat2x2f"],
-       ["mat3", "mat3x3f"],
-       ["mat4", "mat4x4f"]
-     ]);
- 
-     function xp(pp, ip) {
-       if (!op(pp)) return ip;
-       const cp = Sp.get(ip);
- ... (15 more removed lines; see GitHub link above)
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const qQ = QQ.awQ(),
+         TQ = WQ.awQ(),
+         zQ = qQ[0],
+         sQ = qQ[1],
+         FQ = qQ[2],
+         PQ = qQ[3],
+         gQ = qQ[4],
+         JQ = qQ[5],
+         rQ = qQ[6],
+         IQ = qQ[7],
+         jQ = qQ[8],
+         BQ = qQ[9],
+         yQ = qQ[10],
+         VQ = qQ[11],
+         DQ = qQ[12],
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L124-L135` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L92-L93) · [Before (L124-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L124-L135)

```diff
-       return op(pp) ? `var ${cp}: ${xp(pp,ip)};` : `${ip} ${cp};`
-     }
- 
-     function Pp(pp, ip, cp, Op) {
-       return op(pp) ? `const ${cp}: ${xp(pp,ip)} = ${Op};` : `const ${ip} ${cp} = ${Op};`
-     }
- 
-     function Wp(pp, ip, cp, Op, Ip) {
-       if (op(pp)) {
-         return `fn ${cp}(${Op.map((ip=>`${ip.name}: ${xp(pp,ip.type)}`)).join(", ")}) -> ${xp(pp,ip)} {${Ip}}`
-       }
-       return `${ip} ${cp}(${Op.map((pp=>`${pp.type} ${pp.name}`)).join(", ")}) {${Ip}}`
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       TQ(QQ, WQ, XQ.awQ(), wQ), qQ(XQ)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L139-L155` → after: `L97-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L97-L99) · [Before (L139-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L139-L155)

```diff
-       return !ip || op(pp) ? "" : `${ip} `
-     }
- 
-     function Up(pp, ip, cp, Op) {
-       return op(pp) ? `attribute ${ip}: ${xp(pp,cp)};` : `attribute ${yp(pp,Op)}${cp} ${ip};`
-     }
- 
-     function wp(pp, ip, cp, Op) {
-       return op(pp) ? `varying ${ip}: ${xp(pp,cp)};` : `varying ${yp(pp,Op)}${cp} ${ip};`
-     }
- 
-     function vp(pp, ip, cp) {
-       return op(pp) ? `uniform ${ip}: ${xp(pp,cp)};` : `uniform ${cp} ${ip};`
-     }
- 
-     function tp(pp) {
- ... (1 more removed lines; see GitHub link above)
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const wQ = QQ.awQ();
+       WQ[XQ] = wQ[0], WQ[XQ + 1] = wQ[1], WQ[XQ + 2] = wQ[2], WQ[XQ + 3] = wQ[3], WQ[XQ + 4] = wQ[4], WQ[XQ + 5] = wQ[5], WQ[XQ + 6] = wQ[6], WQ[XQ + 7] = wQ[7], WQ[XQ + 8] = wQ[8], WQ[XQ + 9] = wQ[9], WQ[XQ + 10] = wQ[10], WQ[XQ + 11] = wQ[11], WQ[XQ + 12] = wQ[12], WQ[XQ + 13]  … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L159` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L103-L104) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L159)

```diff
-       return op(pp) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${ip}}` : `void main() {${ip}}`
+       const XQ = PQ(QQ, WQ.awQ());
+       return XQ && qQ(WQ), XQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L163` → after: `L108-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L108-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L108-L162) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L163)

```diff
-       return op(pp) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${ip}}` : `void main() {${ip}}`
+       const XQ = QQ.awQ(),
+         wQ = XQ[0],
+         qQ = XQ[1],
+         TQ = XQ[2],
+         zQ = XQ[3],
+         sQ = XQ[4],
+         FQ = XQ[5],
+         PQ = XQ[6],
+         gQ = XQ[7],
+         JQ = XQ[8],
+         rQ = XQ[9],
+         IQ = XQ[10],
+         jQ = XQ[11],
+         BQ = XQ[12],
+         yQ = XQ[13],
+         VQ = XQ[14],
+ ... (39 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L165-L168` → after: `L164-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L164-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L164-L188) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L165-L168)

```diff
- 
-     function ep(pp, ip, cp) {
-       if (op(pp)) {
-         return [`var ${ip}Sampler: sampler;`, `var ${ip}: ${"2dArray"===cp?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+     wQ._UpdateFlagSeed = 0
+   },
+   37370: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => BQ,
+       h: () => jQ,
+       l: () => GQ,
+       m: () => VQ,
+       q: () => JQ,
+       s: () => rQ,
+       w: () => IQ
+     });
+     var wQ = XQ(37374),
+       qQ = XQ(37379),
+       TQ = XQ(37387),
+       zQ = XQ(37392),
+ ... (9 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L170-L179` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L190-L191) · [Before (L170-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L170-L179)

```diff
-       return `uniform highp ${"2dArray"===cp?"sampler2DArray":"sampler2D"} ${ip};`
-     }
- 
-     function jp(pp, ip, cp) {
-       return op(pp) ? `textureSample(${ip}, ${ip}Sampler, ${cp})` : `texture2D(${ip}, ${cp})`
-     }
- 
-     function kp(pp, ip, cp, Op, Ip) {
-       if (op(pp)) {
-         return `${Ip?"textureSampleLevel":"textureSample"}(${ip}, ${ip}Sampler, ${cp}, ${Yp(pp,`round(${Op})`)}${Ip?`, ${Ip}`:""})`
+       toString() {
+         return `{X: ${this.x} Y: ${this.y}}`
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L181-L193` → after: `L193-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L193-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L193-L486) · [Before (L181-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L181-L193)

```diff
-       const Sp = Lp(pp, "vec3", cp, Op);
-       return Ip ? `textureLod(${ip}, ${Sp}, ${Ip})` : `texture(${ip}, ${Sp})`
-     }
- 
-     function mp(pp) {
-       return op(pp) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
-     }
- 
-     function Rp(pp) {
-       return op(pp) ? {
-         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
-       } : {
-         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
+       getClassName() {
+         return "Vector2"
+       }
+       getHashCode() {
+         let QQ = gQ(this.x);
+         return QQ = 397 * QQ ^ gQ(this.y), QQ
+       }
+       toArray(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return QQ[WQ] = this.x, QQ[WQ + 1] = this.y, this
+       }
+       gXQ(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return JQ.FromArrayToRef(QQ, WQ, this), this
+       }
+       awQ() {
+ ... (278 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L196-L268` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L489) · [Before (L196-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L196-L268)

```diff
- 
-     function qp(pp, ip) {
-       return op(pp) ? `vertexInputs.${ip}` : ip
-     }
- 
-     function Mp(pp, ip) {
-       return op(pp) ? `vertexOutputs.${ip}` : ip
-     }
- 
-     function Cp(pp, ip) {
-       return op(pp) ? `fragmentInputs.${ip}` : ip
-     }
- 
-     function Ep(pp, ip) {
-       return op(pp) ? `uniforms.${ip}` : ip
-     }
- ... (57 more removed lines; see GitHub link above)
+     JQ._V8PerformanceHack = new JQ(.5, .5), JQ._ZeroReadOnly = JQ.Zero();
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L270-L271` → after: `L491-L2905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L491-L2905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L491-L2905) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L270-L271)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersRepository : Op.ShadersRepositoryWGSL
+       get x() {
+         return this._x
+       }
+       set x(QQ) {
+         this._x = QQ, this._isDirty = !0
+       }
+       get y() {
+         return this._y
+       }
+       set y(QQ) {
+         this._y = QQ, this._isDirty = !0
+       }
+       get z() {
+         return this._z
+       }
+       set z(QQ) {
+ ... (2399 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L273-L274` → after: `L2907-L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2907-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L2907-L2909) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L273-L274)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersStore : Op.ShadersStoreWGSL
+       clone() {
+         const QQ = new zQ;
+         return QQ._observers = this._observers.slice(0), QQ
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L276-L277` → after: `L2911-L2915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R2911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L2911-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/240.js#L2911-L2915) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/240.js#L276-L277)

```diff
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.IncludesShadersStore : Op.IncludesShadersStoreWGSL
+       hasSpecificMask() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
+         for (const WQ of this._observers)
+           if (WQ.mask & QQ || WQ.mask === QQ) return !0;
+         return !1
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/241.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/241.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774)

#### 1. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/241.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/241.js#L4)

```diff
-   37479: (pp, ip, cp) => {
+   37546: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L6-L7` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/241.js#L6-L9) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/241.js#L6-L7)

```diff
-       Color3: () => Op.d,
-       b: () => Op.h
+       b: () => JQ,
+       d: () => rQ,
+       h: () => BQ,
+       l: () => IQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L9-L10` → after: `L11-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L11-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/241.js#L11-L801) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/241.js#L9-L10)

```diff
-     var Op = cp(37487);
-     (0, Op.i)()
+     var wQ = XQ(37379),
+       qQ = XQ(37374),
+       TQ = XQ(37404),
+       zQ = XQ(37418);
+ 
+     function sQ(QQ) {
+       return Math.pow(QQ, qQ.h)
+     }
+ 
+     function FQ(QQ) {
+       return QQ <= .04045 ? .0773993808 * QQ : Math.pow(.947867299 * (QQ + .055), 2.4)
+     }
+ 
+     function PQ(QQ) {
+       return Math.pow(QQ, qQ.e)
+     }
+ ... (775 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/242.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/242.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L12` → after: `L4-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L299) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L12)

```diff
-   41280: (pp, ip, cp) => {
-     cp.d(ip, {
-       noaDevTools: () => Ap
-     });
-     var Op = cp(37769),
-       op = cp(37760),
-       Ip = cp(2849),
-       Sp = cp(1765),
-       xp = cp(41182);
+   37392: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => qQ
+     });
+     var wQ = XQ(37399);
+     class qQ {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     qQ.Instances = [], qQ.OnEnginesDisposedObservable = new wQ.b, qQ._LastCreatedScene = null, qQ.UseFallbackTexture = !0, qQ.FallbackTexture = ""
+   },
+   38947: (QQ, WQ, XQ) => {
+ ... (280 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L15-L566` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/242.js#L302) · [Before (L15-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/242.js#L15-L566)

```diff
-       const {
-         WU: ip
-       } = pp, cp = ip.engine, Op = {
-         width: cp.getRenderWidth(),
-         height: cp.getRenderHeight()
-       };
-       return {
-         canvas: cp.getRenderingCanvas(),
-         maxTextureSize: cp.getCaps().maxTextureSize,
-         drawing: () => !pp.Fk,
-         resize: (pp, ip) => {
-           cp.setSize(pp, ip)
-         },
-         restoreSize: () => {
-           cp.setSize(Op.width, Op.height), ip.resize()
-         },
- ... (536 more removed lines; see GitHub link above)
+       return wQ[QQ]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/243.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/243.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L2)

```diff
- export const ids = [243, 244];
+ export const ids = [243];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4-L143` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L4) · [Before (L4-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L4-L143)

```diff
-   40445: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Dp,
-       d: () => Pp
-     });
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(37320),
-       Sp = cp(37487),
-       xp = cp(40451),
-       Lp = cp(40415),
-       Yp = cp(37368);
-     let Dp = (() => {
-         var pp;
-         let ip, cp, Lp = xp.d,
-           Yp = [],
- ... (124 more removed lines; see GitHub link above)
+   37446: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L147-L231` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L10-L12) · [Before (L147-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L147-L231)

```diff
-     var Op = cp(37320);
-     class op {
-       constructor(pp, ip, cp, op) {
-         this.normal = new Op.o(pp, ip, cp), this.d = op
-       }
-       BOp() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let pp = this.normal.getHashCode();
- ... (69 more removed lines; see GitHub link above)
+     const wQ = 1024,
+       qQ = 16,
+       TQ = 36e4;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L233-L240` → after: `L14-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L14-L25) · [Before (L233-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L233-L240)

```diff
-       constructor(pp, ip, cp, Op) {
-         this.x = pp, this.y = ip, this.width = cp, this.height = Op
-       }
-       toGlobal(pp, ip) {
-         return new Op(this.x * pp, this.y * ip, this.width * pp, this.height * ip)
-       }
-       toGlobalToRef(pp, ip, cp) {
-         return cp.x = this.x * pp, cp.y = this.y * ip, cp.width = this.width * pp, cp.height = this.height * ip, this
+       constructor(QQ) {
+         this.boneCount = QQ, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * QQ), this.position = new Float64Array(3 * QQ), this.scale = new Float64Array(3 * QQ).fill(1), this.touched = new Uint8Arra … [truncated]
+       }
+       clampToLimits() {
+         for (let QQ = 0; QQ < this.boneCount; QQ++)
+           if (0 !== this.touched[QQ])
+             for (let WQ = 3 * QQ; WQ < 3 * QQ + 3; WQ++) {
+               const QQ = this.rotation[WQ],
+                 XQ = this.position[WQ],
+                 zQ = this.scale[WQ];
+               QQ >= -36e4 && QQ <= TQ || (this.rotation[WQ] = FQ(QQ, TQ)), XQ >= -1024 && XQ <= wQ || (this.position[WQ] = FQ(XQ, wQ)), zQ >= -qQ && zQ <= qQ || (this.scale[WQ] = FQ(zQ, qQ, 1))
+             }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L242-L243` → after: `L27-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L27-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L27-L32) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L242-L243)

```diff
-       clone() {
-         return new Op(this.x, this.y, this.width, this.height)
+       reset() {
+         for (let QQ = 0; QQ < this.boneCount; QQ++)
+           if (0 !== this.touched[QQ]) {
+             this.touched[QQ] = 0;
+             for (let WQ = 3 * QQ; WQ < 3 * QQ + 3; WQ++) this.rotation[WQ] = 0, this.position[WQ] = 0, this.scale[WQ] = 1
+           }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L256-L284` → after: `L36-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L36-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L36-L52) · [Before (L256-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L256-L284)

```diff
-       static DeepCopy(pp, ip, cp, Ip) {
-         let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const xp = function(pp) {
-           const ip = [];
-           do {
-             const cp = Object.getOwnPropertyNames(pp);
-             for (const pp of cp) - 1 === ip.indexOf(pp) && ip.push(pp)
-           } while (pp = Object.getPrototypeOf(pp));
-           return ip
-         }(pp);
-         for (const Yp of xp) {
-           if ("_" === Yp[0] && (!Ip || -1 === Ip.indexOf(Yp))) continue;
-           if (Yp.endsWith("Observable")) continue;
-           if (cp && -1 !== cp.indexOf(Yp)) continue;
-           const xp = pp[Yp],
-             Dp = typeof xp;
- ... (13 more removed lines; see GitHub link above)
+       constructor(QQ) {
+         this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * QQ), this.position = new Float64Arra … [truncated]
+       }
+       touch(QQ, WQ, XQ) {
+         0 === this.touched[QQ] && (this.touched[QQ] = 1, this.touchedBones[this.touchedCount++] = QQ), this.boneWeight[QQ] += WQ, XQ && (this.overrides[QQ] = 1)
+       }
+       applyTo(QQ, WQ, XQ) {
+         let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         for (let qQ = 0; qQ < this.touchedCount; qQ++) {
+           const TQ = this.touchedBones[qQ],
+             zQ = this.boneWeight[TQ];
+           if (XQ || 1 === this.overrides[TQ]) {
+             const XQ = WQ * Math.min(1, zQ);
+             for (let WQ = 3 * TQ; WQ < 3 * TQ + 3; WQ++) QQ.rotation[WQ] += (this.rotation[WQ] / zQ - QQ.rotation[WQ]) * XQ, QQ.position[WQ] += (this.position[WQ] / zQ - QQ.position[WQ]) * XQ, QQ.scale[WQ] += (1 + this.scaleDelta[WQ] / zQ - QQ.scale[WQ]) * XQ
+           } else {
+             const XQ = wQ && zQ > 1 ? WQ / zQ : WQ;
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L289-L295` → after: `L66-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L66-L69) · [Before (L289-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L289-L295)

```diff
-   },
-   38124: (pp, ip, cp) => {
-     function Op() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
-         const ip = 16 * Math.random() | 0;
-         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
-       }))
+ 
+     function FQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       return Number.isNaN(QQ) ? XQ : Math.min(WQ, Math.max(-WQ, QQ))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L301` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L72) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L301)

```diff
-   38905: (pp, ip, cp) => {
+   37437: (QQ, WQ, XQ) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L303-L381` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L74-L75) · [Before (L303-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L303-L381)

```diff
-       e: () => Op
-     });
-     class Op {
-       static _CheckLimit(pp, ip) {
-         let cp = Op._LogLimitOutputs[pp];
-         return cp ? cp.current++ : (cp = {
-           limit: ip,
-           current: 1
-         }, Op._LogLimitOutputs[pp] = cp), cp.current <= cp.limit
-       }
-       static _GenerateLimitMessage(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const cp = Op._LogLimitOutputs[pp];
-         if (!cp || !Op.MessageLimitReached) return;
-         const op = this._Levels[ip];
-         cp.current === cp.limit && Op[op.name](Op.MessageLimitReached.replace(/%LIMIT%/g, "" + cp.limit).replace(/%TYPE%/g, op.name ?? ""))
- ... (63 more removed lines; see GitHub link above)
+       b: () => FQ,
+       f: () => sQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L383-L494` → after: `L77-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L77-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L77-L84) · [Before (L383-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L383-L494)

```diff
-     var Op = cp(40654),
-       op = cp(42087),
-       Ip = cp(42060),
-       Sp = cp(40233),
-       xp = cp(42069),
-       Lp = cp(37345),
-       Yp = cp(37320);
-     class Dp extends xp.f {
-       static _GetDefines(pp) {
-         if (!pp) return null;
-         return pp.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
-       }
-       _gatherImports(pp, ip) {
-         pp ? (this._webGPUReady = !0, ip.push(Promise.all([cp.e(379).then((() => cp(61601))), cp.e(380).then((() => cp(61604)))]))) : ip.push(Promise.all([cp.e(381).then((() => cp(61612))), cp.e(382).then((() => cp(61618)))]))
-       }
-       constructor(pp) {
- ... (96 more removed lines; see GitHub link above)
+     var wQ = XQ(37428),
+       qQ = XQ(402),
+       TQ = XQ(1972),
+       zQ = XQ(37446);
+ 
+     function sQ(QQ) {
+       if ("ew" in QQ) return HQ.createAnimationScript(QQ);
+       return new gQ(QQ).createAnimationScript()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L496-L550` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L86-L89) · [Before (L496-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L496-L550)

```diff
-     class dp extends tp {
-       static IsRenderPass(pp) {
-         return void 0 !== pp.setRenderTarget
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
-       constructor(pp, ip, cp, Op) {
-         super(pp, ip, cp), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Op
-       }
- ... (39 more removed lines; see GitHub link above)
+ 
+     function FQ(QQ, WQ, XQ, qQ) {
+       const TQ = QQ.ew <= 0 ? 1 : WQ + XQ * Math.max(0, qQ) / QQ.ew;
+       return QQ.nw === wQ.n.LoopOnLastFrame ? TQ % 1 : QQ.nw === wQ.n.NoLoop && TQ >= 1 ? null : Math.min(1, TQ)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L554-L631` → after: `L92-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L92-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L92-L101) · [Before (L554-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L554-L631)

```diff
-       get name() {
-         return this._name
-       }
-       set name(pp) {
-         this._name = pp
-       }
-       get disabled() {
-         return this._disabled
-       }
-       set disabled(pp) {
-         this._disabled = pp
-       }
-       get passes() {
-         return this._passes
-       }
-       get passesDisabled() {
- ... (62 more removed lines; see GitHub link above)
+       createAnimationScript(QQ) {
+         const {
+           ew: WQ,
+           loop: XQ,
+           xw: wQ
+         } = QQ;
+         return {
+           ew: Math.round(WQ),
+           nw: this.createLoopMode(null !== XQ && void 0 !== XQ && XQ),
+           xw: this.createNodeSkeletonAnimationScript(null !== wQ && void 0 !== wQ ? wQ : null)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L634-L640` → after: `L104-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L104-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L104-L111) · [Before (L634-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L634-L640)

```diff
-       _execute() {
-         const pp = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
-         this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const ip of pp) ip._execute()
-         } finally {
-           this._frameGraph.engine._debugPopGroup?.()
+       createLoopMode(QQ) {
+         switch (QQ) {
+           case !1:
+             return wQ.n.NoLoop;
+           case !0:
+             return wQ.n.LoopOnLastFrame;
+           case "hold-on-last-frame":
+             return wQ.n.HoldOnLastFrame
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L642-L650` → after: `L113-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L113-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L113-L120) · [Before (L642-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L642-L650)

```diff
-         this.onAfterTaskExecute.notifyObservers(this)
-       }
-       _initializePasses() {
-         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
-         try {
-           for (const pp of this._passes) pp._initialize();
-           for (const pp of this._passesDisabled) pp._initialize()
-         } finally {
-           this._frameGraph.engine._debugPopGroup?.()
+         throw new Error(`Invalid loop mode schema: ${QQ}`)
+       }
+       createNodeSkeletonAnimationScript(QQ) {
+         if (null === QQ) return null;
+         const WQ = {};
+         for (const XQ in QQ) {
+           const wQ = QQ[XQ];
+           WQ[XQ] = this.createNodeAnimationScript(wQ)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L653-L678` → after: `L124-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L124-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L124-L132) · [Before (L653-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L653-L678)

```diff
-       _checkSameRenderTarget(pp, ip) {
-         if (null === pp || null === ip) return pp === ip;
-         if (pp.length !== ip.length) return !1;
-         for (let cp = 0; cp < pp.length; cp++)
-           if (pp[cp] !== ip[cp]) return !1;
-         return !0
-       }
-     }
-     class kp extends jp {
-       get alphaMode() {
-         return this.postProcess.alphaMode
-       }
-       set alphaMode(pp) {
-         this.postProcess.alphaMode = pp
-       }
-       get drawWrapper() {
- ... (10 more removed lines; see GitHub link above)
+       createNodeAnimationScript(QQ) {
+         const {
+           timeline: WQ
+         } = QQ, XQ = WQ.filter((QQ => Number.isFinite(QQ.timeFraction)));
+         return XQ.sort(((QQ, WQ) => QQ.timeFraction - WQ.timeFraction)), {
+           rotation: this.createTimelineFromKeyframes(XQ, "rotation", IQ),
+           position: this.createTimelineFromKeyframes(XQ, "position", BQ),
+           scale: this.createTimelineFromKeyframes(XQ, "scale", BQ, VQ)
+         }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L680-L688` → after: `L134-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L134-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L134-L142) · [Before (L680-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L680-L688)

```diff
-       record() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           ip = arguments.length > 1 ? arguments[1] : void 0,
-           cp = arguments.length > 2 ? arguments[2] : void 0;
-         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
-         const Op = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
-         if (Op && (Op.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Op), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
-           const pp = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Op);
-           this._sourceWidth = pp.width, this._sourceHeight = pp.height
+       createTimelineFromKeyframes(QQ, WQ, XQ) {
+         let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ => QQ;
+         const qQ = [];
+         for (const PQ of QQ) {
+           const QQ = PQ[WQ];
+           if (QQ) {
+             const WQ = this.createAnimationFrameWithoutPrecomputes(PQ.timeFraction, QQ, wQ);
+             JQ(WQ) && qQ.push(WQ)
+           }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L690-L701` → after: `L144-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L144-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L144-L154) · [Before (L690-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L690-L701)

```diff
-         const op = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
-         this._outputWidth = op.size.width, this._outputHeight = op.size.height;
-         const Ip = this._frameGraph.addRenderPass(this.name);
-         if (Ip.depthReadOnly = this.depthReadOnly, Ip.stencilReadOnly = this.stencilReadOnly, Ip.addDependencies(this.sourceTexture), Ip.setRenderTarget(this.outputTexture), Ip.setRenderTargetDepth(this.depthAttachmentTexture), Ip.setExecuteFunc((pp => {
-             pp.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && pp.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), ip?.(pp), this.viewport && pp.setViewport(this.viewport), pp.applyFullScreenEffect(this._postProcessDrawWra … [truncated]
-               void 0 !== this.sourceTexture && pp.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), cp?.(pp), this.postProcess.bind()
-             }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), pp.restoreDefaultFramebuffer(), pp.popDebugGroup()
-           })), !pp) {
-           const pp = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
-           pp.depthReadOnly = this.depthReadOnly, pp.stencilReadOnly = this.stencilReadOnly, pp.addDependencies(this.sourceTexture), pp.setRenderTarget(this.outputTexture), pp.setRenderTargetDepth(this.depthAttachmentTexture), pp.setExecuteFunc((pp => {
-             void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && pp.setViewport(this.viewport), pp.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
-           }))
+         const TQ = [];
+         for (let PQ = 0; PQ < qQ.length; PQ++) {
+           var zQ, sQ, FQ;
+           const QQ = qQ[PQ],
+             WQ = null !== (zQ = qQ[PQ - 1]) && void 0 !== zQ ? zQ : QQ,
+             wQ = null !== (sQ = qQ[PQ + 1]) && void 0 !== sQ ? sQ : QQ,
+             gQ = null !== (FQ = qQ[PQ + 2]) && void 0 !== FQ ? FQ : wQ;
+           TQ.push({
+             ...QQ,
+             ...XQ(WQ.post, WQ.timeFraction, QQ.post, QQ.timeFraction, wQ.pre, wQ.timeFraction, gQ.pre, gQ.timeFraction)
+           })
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L705-L727` → after: `L158-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L158-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L158-L171) · [Before (L705-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L705-L727)

```diff
-       dispose() {
-         this.postProcess.dispose(), super.dispose()
-       }
-     }
-     class mp extends kp {
-       constructor(pp, ip, cp) {
-         super(pp, ip, cp || new Dp(pp, ip.engine))
-       }
-       getClassName() {
-         return "FrameGraphFXAATask"
-       }
-       record() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           ip = arguments.length > 1 ? arguments[1] : void 0,
-           cp = arguments.length > 2 ? arguments[2] : void 0;
-         const Op = super.record(pp, ip, cp);
- ... (7 more removed lines; see GitHub link above)
+       createAnimationFrameWithoutPrecomputes(QQ, WQ, XQ) {
+         let wQ, qQ, TQ = null;
+         var zQ;
+         if ("object" === typeof WQ && "point" in WQ) TQ = null !== (zQ = WQ.Zw) && void 0 !== zQ ? zQ : null, wQ = WQ.point, qQ = WQ.point;
+         else if ("object" === typeof WQ && "pre" in WQ) {
+           var sQ;
+           TQ = null !== (sQ = WQ.Zw) && void 0 !== sQ ? sQ : null, wQ = WQ.pre, qQ = WQ.post
+         } else wQ = WQ, qQ = WQ;
+         return {
+           timeFraction: QQ,
+           Zw: this.createLerpMode(TQ),
+           pre: XQ(wQ),
+           post: XQ(qQ)
+         }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L729-L730` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L173-L174) · [Before (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L729-L730)

```diff
-       getClassName() {
-         return "FrameGraphPassTask"
+       createLerpMode(QQ) {
+         return null === QQ ? wQ.j.Linear : PQ.LERP_MODE_SCHEMA_MAPPING[QQ]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L733-L737` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L177-L180) · [Before (L733-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L733-L737)

```diff
-     var Mp = cp(40296),
-       Cp = cp(40372),
-       Ep = cp(40334),
-       Xp = cp(40445),
-       lp = cp(37487);
+     PQ.LERP_MODE_SCHEMA_MAPPING = {
+       linear: wQ.j.Linear,
+       "catmull-rom-spline": wQ.j.CatmullRomSpline
+     };
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L739-L743` → after: `L182-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L182-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L182-L194) · [Before (L739-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L739-L743)

```diff
-       getRenderCamera(pp) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let ip;
-           return ip = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, pp && ip && ip.isRigCamera ? ip.rigParent : ip
+       constructor(QQ) {
+         this.animationSchema = QQ
+       }
+       createAnimationScript() {
+         const {
+           animation_length: QQ,
+           loop: WQ,
+           bones: XQ
+         } = this.animationSchema;
+         return {
+           ew: Math.round(1e3 * QQ),
+           nw: this.createLoopMode(null !== WQ && void 0 !== WQ && WQ),
+           xw: this.createNodeSkeletonAnimationScript(null !== XQ && void 0 !== XQ ? XQ : null)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L746-L761` → after: `L197-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L197-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L197-L215) · [Before (L746-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L746-L761)

```diff
-       setRenderCamera(pp) {
-         this._renderCamera = pp
-       }
-       _getSharedGizmoLight() {
-         return this._sharedGizmoLight || (this._sharedGizmoLight = new Xp.b("shared gizmo light", new Yp.o(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = lp.d.Gray()), this._sharedGizmoLight
-       }
-       static get DefaultUtilityLayer() {
-         return null == Qp._DefaultUtilityLayer ? Qp._CreateDefaultUtilityLayerFromScene(Lp.e.LastCreatedScene) : Qp._DefaultUtilityLayer
-       }
-       static _CreateDefaultUtilityLayerFromScene(pp) {
-         return Qp._DefaultUtilityLayer = new Qp(pp), Qp._DefaultUtilityLayer.originalScene.Kl.addOnce((() => {
-           Qp._DefaultUtilityLayer = null
-         })), Qp._DefaultUtilityLayer
-       }
-       static get DefaultKeepDepthUtilityLayer() {
-         return null == Qp._DefaultKeepDepthUtilityLayer ? Qp._CreateDefaultKeepUtilityLayerFromScene(Lp.e.LastCreatedScene) : Qp._DefaultKeepDepthUtilityLayer
+       createLoopMode(QQ) {
+         switch (QQ) {
+           case !1:
+             return wQ.n.NoLoop;
+           case !0:
+             return wQ.n.LoopOnLastFrame;
+           case "hold_on_last_frame":
+             return wQ.n.HoldOnLastFrame
+         }
+         throw new Error(`Invalid Blockbench loop mode schema: ${QQ}`)
+       }
+       createNodeSkeletonAnimationScript(QQ) {
+         if (null === QQ) return null;
+         const WQ = {};
+         for (const XQ in QQ) {
+           const wQ = QQ[XQ];
+ ... (3 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L763-L766` → after: `L217-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L217-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L217-L227) · [Before (L763-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L763-L766)

```diff
-       static _CreateDefaultKeepUtilityLayerFromScene(pp) {
-         return Qp._DefaultKeepDepthUtilityLayer = new Qp(pp), Qp._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Qp._DefaultKeepDepthUtilityLayer.originalScene.Kl.addOnce((() => {
-           Qp._DefaultKeepDepthUtilityLayer = null
-         })), Qp._DefaultKeepDepthUtilityLayer
+       createNodeAnimationScript(QQ) {
+         const {
+           rotation: WQ,
+           position: XQ,
+           scale: wQ
+         } = QQ;
+         return {
+           rotation: this.createAnimationTimeline(null !== WQ && void 0 !== WQ ? WQ : null, pQ, IQ, !0),
+           position: this.createAnimationTimeline(null !== XQ && void 0 !== XQ ? XQ : null, UQ, BQ, !1),
+           scale: this.createAnimationTimeline(null !== wQ && void 0 !== wQ ? wQ : null, yQ, BQ, !1)
+         }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L768-L797` → after: `L229-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L229-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L229-L250) · [Before (L768-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L768-L797)

```diff
-       constructor(pp) {
-         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this.originalScene = pp, this.handleEvents = ip, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.process … [truncated]
-           virtual: !0,
-           useFloatingOrigin: pp.floatingOriginMode
-         }), this.utilityLayerScene.useRightHandedSystem = pp.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), ip && (this._originalPointerObserver = pp.onPrePoi … [truncated]
-           if (!this.utilityLayerScene.activeCamera) return;
-           if (!this.pickingEnabled) return;
-           if (!this.processAllEvents && ip.type !== Cp.d.POINTERMOVE && ip.type !== Cp.d.POINTERUP && ip.type !== Cp.d.POINTERDOWN && ip.type !== Cp.d.POINTERDOUBLETAP) return;
-           this.utilityLayerScene.pointerX = pp.pointerX, this.utilityLayerScene.pointerY = pp.pointerY;
-           const cp = ip.event;
-           if (pp.isPointerCaptured(cp.pointerId)) return void(this._pointerCaptures[cp.pointerId] = !1);
-           const Op = cp => {
-               let Op;
-               if (ip.nearInteractionPickingInfo) Op = ip.nearInteractionPickingInfo.pickedMesh.Gl() == cp ? ip.nearInteractionPickingInfo : new Ep.b;
- ... (14 more removed lines; see GitHub link above)
+       createAnimationTimeline(QQ, WQ, XQ, wQ) {
+         if (null === QQ) return [];
+         (Array.isArray(QQ) || "number" === typeof QQ) && (QQ = {
+           "0.0": QQ
+         });
+         const qQ = Object.entries(QQ).map((QQ => {
+           let [XQ, wQ] = QQ;
+           const qQ = Number(XQ) / this.animationSchema.animation_length;
+           return this.createAnimationFrameWithoutPrecomputes(qQ, wQ, WQ)
+         })).filter(JQ);
+         qQ.sort(((QQ, WQ) => QQ.timeFraction - WQ.timeFraction)), wQ && function(QQ) {
+           for (let WQ = 1; WQ < QQ.length; WQ++) {
+             const XQ = QQ[WQ - 1].post,
+               wQ = QQ[WQ],
+               qQ = bQ(wQ.pre),
+               TQ = bQ(wQ.post),
+ ... (6 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L799-L806` → after: `L252-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L252-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L252-L265) · [Before (L799-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L799-L806)

```diff
-         })), this._originalPointerObserver && pp.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, cp || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((pp => {
-           this.shouldRender && pp == this.getRenderCamera() && this.render()
-         }))), this._sceneDisposeObserver = this.originalScene.Kl.add((() => {
-           this.dispose()
-         })), this._updateCamera()
-       }
-       _notifyObservers(pp, ip, cp) {
-         pp.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Cp.i(pp.type, pp.event, ip), pp.type), this._lastPointerEvents[cp.pointerId] = !0)
+         }(qQ);
+         const TQ = [];
+         for (let PQ = 0; PQ < qQ.length; PQ++) {
+           var zQ, sQ, FQ;
+           const QQ = qQ[PQ],
+             WQ = null !== (zQ = qQ[PQ - 1]) && void 0 !== zQ ? zQ : QQ,
+             wQ = null !== (sQ = qQ[PQ + 1]) && void 0 !== sQ ? sQ : QQ,
+             gQ = null !== (FQ = qQ[PQ + 2]) && void 0 !== FQ ? FQ : wQ;
+           TQ.push({
+             ...QQ,
+             ...XQ(WQ.post, WQ.timeFraction, QQ.post, QQ.timeFraction, wQ.pre, wQ.timeFraction, gQ.pre, gQ.timeFraction)
+           })
+         }
+         return TQ
```
