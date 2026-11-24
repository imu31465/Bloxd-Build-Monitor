# Changed — Bundle Modifications Report (Part 013 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `13 / 65` (**294** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 012](part-012.md) · [Part 014 →](part-014.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/222.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/222.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783)

#### 3. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L12-L128` → after: `L79-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L79-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/222.js#L79-L133) · [Before (L12-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/222.js#L12-L128)

```diff
-     const pD = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
-       sD = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
-       KD = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
-       rD = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
-       LD = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
-       cD = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
-       gD = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
-       RD = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
-       AD = JSON.parse('{"src":["/sounds/generatedSprites/randomBeep.7b90315654.ogg","/sounds/generatedSprites/randomBeep.0e88f6aa33.m4a","/sounds/generatedSprites/randomBeep.47ff5e799a.mp3","/sounds/generatedSprites/randomBeep.444034b8b7.ac3"],"sprite":{"beep":[100,2455.510204081 … [truncated]
-       UD = JSON.parse('{"src":["/sounds/generatedSprites/randomCannon.f9d64818ea.ogg","/sounds/generatedSprites/randomCannon.52f7576d74.m4a","/sounds/generatedSprites/randomCannon.bde162aee8.mp3","/sounds/generatedSprites/randomCannon.4877805969.ac3"],"sprite":{"cannonFire1":[100 … [truncated]
-       fD = JSON.parse('{"src":["/sounds/generatedSprites/randomCash.8ff82dcd92.ogg","/sounds/generatedSprites/randomCash.a86426509f.m4a","/sounds/generatedSprites/randomCash.48929d75f1.mp3","/sounds/generatedSprites/randomCash.f687b943c4.ac3"],"sprite":{"cashRegister":[100,3819.6 … [truncated]
-       ID = JSON.parse('{"src":["/sounds/generatedSprites/randomExp.fa5a4c9798.ogg","/sounds/generatedSprites/randomExp.a7e2faf290.m4a","/sounds/generatedSprites/randomExp.b4baff1a37.mp3","/sounds/generatedSprites/randomExp.4974715bbd.ac3"],"sprite":{"exp_collect":[100,1009.206349 … [truncated]
-       BD = JSON.parse('{"src":["/sounds/generatedSprites/randomFallsmall.e0ec9ce0a7.ogg","/sounds/generatedSprites/randomFallsmall.a1f24b70c2.m4a","/sounds/generatedSprites/randomFallsmall.bcbd5fef60.mp3","/sounds/generatedSprites/randomFallsmall.a3b7d06594.ac3"],"sprite":{"falls … [truncated]
-       GD = JSON.parse('{"src":["/sounds/generatedSprites/randomItems.380c31a312.ogg","/sounds/generatedSprites/randomItems.6ae69434b9.m4a","/sounds/generatedSprites/randomItems.85b5c2f034.mp3","/sounds/generatedSprites/randomItems.cdadb8aa52.ac3"],"sprite":{"bow":[100,500],"bucke … [truncated]
-       hD = JSON.parse('{"src":["/sounds/generatedSprites/randomFire.06f418fc54.ogg","/sounds/generatedSprites/randomFire.7c5564dd14.m4a","/sounds/generatedSprites/randomFire.f61e3ab1f3.mp3","/sounds/generatedSprites/randomFire.5869bbefc8.ac3"],"sprite":{"fireBurn":[100,2827.39229 … [truncated]
-       nD = JSON.parse('{"src":["/sounds/generatedSprites/randomFirecracker.ddc99cbc73.ogg","/sounds/generatedSprites/randomFirecracker.128308b436.m4a","/sounds/generatedSprites/randomFirecracker.d5635f7e7d.mp3","/sounds/generatedSprites/randomFirecracker.e5afa15901.ac3"],"sprite" … [truncated]
- ... (101 more removed lines; see GitHub link above)
+     var Op = cp(4176);
+     let op = null;
+ 
+     function Ip(pp) {
+       return null !== op && pp === op
+     }
+ 
+     function Sp() {
+       this.YG = !1, this.stopPropagation = !1, this.WG = !1, this.disabled = !1
+     }
+     class xp {
+       constructor(pp, ip) {
+         this.version = "0.7.0";
+         var cp = Object.assign({}, new Sp, ip || {});
+         this.element = pp || document, this.YG = !!cp.YG, this.stopPropagation = !!cp.stopPropagation, this.WG = !!cp.WG, this.disabled = !!cp.disabled, this.filterEvents = (pp, ip) => !0, this.ignoreEvent = pp => !1, this.down = new Op.EventEmitter, this.up = new Op.EventEmitter … [truncated]
+           dx: 0,
+ ... (39 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L131-L133` → after: `L136-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/222.js#L136-L138) · [Before (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/222.js#L131-L133)

```diff
-     for (const fz in sz) {
-       const DD = sz[fz];
-       for (let zD = 0; zD < DD.src.length; zD++) DD.src[zD] = pz.clientSideServerUrls.staticUrl + DD.src[zD]
+ 
+     function Lp(pp) {
+       for (var ip in pp) pp[ip] = 0
```

#### 5. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L138-L144` → after: `L142-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L142-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/222.js#L142-L155) · [Before (L138-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/222.js#L138-L144)

```diff
-       if (Lz[DD]) return Uz(Lz[DD]);
-       {
-         const zD = [];
-         for (const wD in sz)
-           for (const pD in sz[wD].sprite) pD.startsWith(DD) && zD.push(pD);
-         return Lz[DD] = zD, Uz(zD)
-       }
+       window.addEventListener("keydown", wp.bind(null, pp, !0), !1), window.addEventListener("keyup", wp.bind(null, pp, !1), !1);
+       var ip = {
+         passive: !0
+       };
+       pp.element.addEventListener("touchstart", Wp.bind(void 0, pp), {
+         passive: !1
+       }), pp.element.addEventListener("touchend", Up.bind(void 0, pp), ip), pp.element.addEventListener("mousedown", vp.bind(null, pp, !0), ip), window.document.addEventListener("mouseup", vp.bind(null, pp, !1), ip), pp.element.addEventListener("touchmove", tp.bind(null, pp), ip) … [truncated]
+     }
+     var Dp = 0,
+       Ap = 0,
+       Pp = null;
+ 
+     function Wp(pp, ip) {
+       ip.preventDefault(), yp(ip)
```

#### 6. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L148-L150` → after: `L159-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L159-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/222.js#L159-L197) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/222.js#L148-L150)

```diff
-       const zD = rz[DD];
-       if (void 0 === zD) throw new Error(`Invalid sound name ${DD} (not in any sprite sheet)`);
-       return zD
+       let ip = !1;
+       for (let cp = 0; cp < pp.touches.length; ++cp)
+         if (pp.touches[cp].identifier === Pp) {
+           ip = !0;
+           break
+         } if (!ip) {
+         const ip = pp.changedTouches[0];
+         Dp = ip.clientX, Ap = ip.clientY, Pp = ip.identifier
+       }
+     }
+ 
+     function Up(pp, ip) {
+       for (var cp = ip.changedTouches, Op = 0; Op < cp.length; ++Op) cp[Op].identifier === Pp && (Pp = null)
+     }
+ 
+     function wp(pp, ip, cp) {
+ ... (23 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L154-L155` → after: `L201-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L201-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/222.js#L201-L231) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/222.js#L154-L155)

```diff
-       if (!(DD in sz)) throw new Error("Invalid spriteTrack name");
-       return zD in sz[DD].sprite
+       var cp = ip.movementX || ip.mozMovementX || 0,
+         Op = ip.movementY || ip.mozMovementY || 0;
+       if (ip.touches && 0 === (cp | Op)) {
+         var op = function(pp) {
+           yp(pp);
+           for (let ip = 0; ip < pp.changedTouches.length; ++ip)
+             if (pp.changedTouches[ip].identifier == Pp) {
+               const cp = pp.changedTouches[ip],
+                 Op = [cp.clientX - Dp, cp.clientY - Ap];
+               return Dp = cp.clientX, Ap = cp.clientY, Op
+             } return console.error(`Did not find touch id ${Pp}`), [0, 0]
+         }(ip);
+         cp = op[0], Op = op[1]
+       }
+       pp.yG.dx += cp, pp.yG.dy += Op
+     }
+ ... (15 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L159-L160` → after: `L312-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L312-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/222.js#L312-L481) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/222.js#L159-L160)

```diff
-       if (!(DD in sz)) throw new Error("Invalid spritesheet name");
-       return sz[DD]
+       if (pp && "object" === typeof pp) {
+         var ip = pp.which || pp.keyCode || pp.charCode;
+         ip && (pp = ip)
+       }
+       if ("number" === typeof pp) return Sp[pp];
+       var cp, Ip = String(pp);
+       return (cp = Op[Ip.toLowerCase()]) ? cp : (cp = op[Ip.toLowerCase()]) || (1 === Ip.length ? Ip.charCodeAt(0) : void 0)
+     }
+     cp.isEventKey = function(pp, ip) {
+       if (pp && "object" === typeof pp) {
+         var cp = pp.which || pp.keyCode || pp.charCode;
+         if (null === cp || void 0 === cp) return !1;
+         if ("string" === typeof ip) {
+           var Ip;
+           if (Ip = Op[ip.toLowerCase()]) return Ip === cp;
+           if (Ip = op[ip.toLowerCase()]) return Ip === cp
+ ... (154 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L164` → after: `L492-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L492-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/222.js#L492-L1191) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/222.js#L164)

```diff
-       return DD[Math.floor(Math.random() * DD.length)]
+       for (var ip = pp._data, cp = 1e3 / pp.Bl, Op = ip.nowObject.now() + Sp, op = 0; ip.nowObject.now() >= ip.lastTickStarted + cp && ip.nowObject.now() < Op && ++op <= Ip;) pp.gH(cp), ip.lastTickStarted += cp;
+       var xp = 5 * (cp + 5),
+         Lp = ip.nowObject.now();
+       if (Lp - ip.lastTickStarted > xp)
+         for (; Lp >= ip.lastTickStarted + cp;) ip.lastTickStarted += cp
+     }
+   },
+   36887: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(62);
+     const op = Op.useLayoutEffect;
+     const Ip = function(pp) {
+       var ip = (0, Op.useRef)(pp);
+       return op((function() {
+ ... (684 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/223.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/223.js` (68 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e)

#### 1. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L4-L7)

```diff
-   39592: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => pD,
-       d: () => sD
+   41292: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       LobbyManageView: () => ki
```

#### 2. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L9-L12` → after: `L8-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L8-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L8-L107) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L9-L12)

```diff
-     const pD = "The world isn't loaded, so no blocks can be seen.",
-       sD = "The world isn't loaded, so nothing in it can be seen."
-   },
-   39079: (DD, zD, wD) => {
+     var Op = cp(62),
+       op = cp(1505),
+       Ip = cp(37227),
+       Sp = cp(2514),
+       xp = cp(2517),
+       Lp = cp(2492),
+       Yp = cp(36761);
+ 
+     function Dp() {
+       const [pp, ip] = (0, Op.useState)(new Map);
+       return {
+         get: ip => pp.get(ip),
+         hold: (0, Op.useCallback)(((pp, cp, Op) => {
+           ip((ip => new Map(ip).set(pp, cp))), Op.then((() => {
+             ip((ip => {
+               const cp = new Map(ip);
+ ... (84 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L14` → after: `L109-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L109-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L109-L119) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L14)

```diff
-       return !(!DD.lobbyLeaderboardInfo && !DD.lobbyManage)
+       let {
+         status: ip
+       } = pp;
+       return (0, Bp.jsx)("span", {
+         className: Pp()("LobbyManageStatus", {
+           LobbyManageStatusRefused: !ip.ok
+         }),
+         children: (0, Bp.jsx)(Qp.e, {
+           text: ip.text
+         })
+       })
```

#### 4. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L28` → after: `L123-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L123-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L123-L159) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L28)

```diff
-       pD = DD
+       let {
+         names: ip,
+         cap: cp,
+         filterFrom: op,
+         moreLabel: Ip,
+         reveal: Sp = null,
+         renderRow: xp
+       } = pp;
+       const {
+         t: Lp
+       } = (0, Wp.H)(), [Yp, Dp] = (0, Op.useState)(!1), [Ap, Pp] = (0, Op.useState)(""), Up = Yp || null !== Sp && ip.indexOf(Sp) >= cp, vp = (Up || ip.length <= cp) && null !== op && ip.length > op, tp = Ap.trim().toLowerCase();
+       let Hp = Up ? ip : ip.slice(0, cp);
+       return vp && "" !== tp && (Hp = Hp.filter((pp => pp.toLowerCase().includes(tp)))), (0, Bp.jsxs)(Bp.Fragment, {
+         children: [vp && (0, Bp.jsx)(Jp.c, {
+           className: "LobbyManageFilter",
+           placeholderText: Lp("lobbyManage:findName"),
+ ... (21 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L31-L32` → after: `L162-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L162-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L162-L209) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L31-L32)

```diff
-     function KD(DD, zD) {
-       return pD(DD, zD)
+     function fp(pp) {
+       let {
+         value: ip,
+         placeholder: cp,
+         ariaLabel: op,
+         maxLength: Ip,
+         wide: Sp = !1,
+         onSave: xp
+       } = pp;
+       const Lp = (0, Op.useRef)(null),
+         [Yp, Dp] = (0, Op.useState)(0),
+         Ap = (0, Op.useRef)(!0),
+         Wp = (0, Op.useRef)(null),
+         yp = (0, Op.useRef)({
+           value: ip,
+           onSave: xp
+ ... (32 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L34-L48` → after: `L211-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L211-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L211-L217) · [Before (L34-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L34-L48)

```diff
-   },
-   40526: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => BD,
-       e: () => MD,
-       h: () => nD,
-       j: () => GD
-     });
-     var pD = wD(25),
-       sD = wD(40529),
-       KD = wD(40516),
-       rD = wD(40535),
-       LD = wD(40522),
-       cD = wD(40540),
-       gD = wD(40558);
+     const bp = ["mod", "coOwner"],
+       hp = {
+         coOwner: "lobbyManage:roleCanCoOwner",
+         mod: "lobbyManage:roleCanMod",
+         coder: "lobbyManage:roleCanCoder",
+         builder: "lobbyManage:roleCanBuilder"
+       };
```

#### 7. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L51-L53` → after: `L220-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L220-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L220-L441) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L51-L53)

```diff
-       var zD, wD;
-       const pD = (0, KD.i)();
-       return pD ? null === (zD = (0, sD.b)(pD.api, DD[0], DD[1], DD[2])) || void 0 === zD || null === (wD = zD.persisted) || void 0 === wD ? void 0 : wD.shared : void 0
+       var ip, cp, Ip;
+       let {
+         name: Sp,
+         place: xp,
+         openedIn: Lp,
+         isYou: Yp,
+         manage: Ap,
+         hiddenNames: Pp,
+         zIndex: Up
+       } = pp;
+       const {
+         t: wp,
+         selectedLanguage: vp
+       } = (0, Wp.H)(), [tp, Hp] = (0, Op.useState)(null), {
+         state: ep
+       } = Ap, jp = `player:${Sp}`, kp = function(pp, ip) {
+ ... (206 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L57` → after: `L445-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L445-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L445-L582) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L57)

```diff
-       return `${DD[0]},${DD[1]},${DD[2]}`
+       var ip, cp, op, Ip;
+       let {
+         manage: Sp,
+         focusRequest: xp,
+         onFocused: Lp
+       } = pp;
+       const {
+         t: Yp
+       } = (0, Wp.H)(), Dp = (0, Hp.g)("players"), Ap = (0, Hp.g)("hiddenPlayerNames"), Pp = (0, Op.useRef)(null), {
+         state: Up
+       } = Sp, vp = null === Dp.localId ? null : null !== (ip = null === (cp = Dp.byId[Dp.localId]) || void 0 === cp ? void 0 : cp.name) && void 0 !== ip ? ip : null, [tp] = (0, Op.useState)((() => jp(Up, vp))), ep = function(pp, ip, cp) {
+         const Op = new Set([...pp.here, ...pp.away, ...pp.banned]),
+           op = jp(ip, cp),
+           Ip = ip => {
+             const cp = op[ip].filter((pp => !Op.has(pp)));
+             for (const pp of cp) Op.add(pp);
+ ... (122 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L59-L61` → after: `L584-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L584-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L584-L592) · [Before (L59-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L59-L61)

```diff
-     const UD = new Map;
-     let fD = null,
-       ID = 0;
+     var Fp = cp(4719),
+       gp = cp(1656),
+       Gp = cp(36892),
+       rp = cp(36903),
+       Zp = cp(36898),
+       zp = cp(36896),
+       sp = cp(36931),
+       Kp = cp(36915),
+       Vp = cp(36924);
```

#### 10. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L63` → after: `L594-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L594-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L594-L596) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L63)

```diff
-     function BD() {
+     function ii(pp) {
+       const ip = new Set;
+       for (const cp of pp) ip.add(cp.toLowerCase());
```

#### 11. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L68-L78` → after: `L601-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L601-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L601-L631) · [Before (L68-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L68-L78)

```diff
-       const zD = null !== fD && fD.key === AD(DD.pos) ? fD.type : null;
-       if (null === zD) return DD;
-       let wD = null;
-       if ("Iron" === zD) {
-         const {
-           cachedPasskey: zD,
-           ...pD
-         } = hD(DD.pos);
-         wD = {
-           Or: null !== zD && void 0 !== zD ? zD : [0, 0, 0, 0],
-           ...pD
+       var ip, cp;
+       let {
+         state: op,
+         lobbyName: Ip,
+         listed: Sp,
+         isListed: xp,
+         gH: Lp,
+         Lk: Yp,
+         statusOf: Dp
+       } = pp;
+       const {
+         t: Ap,
+         selectedLanguage: Pp
+       } = (0, Wp.H)(), yp = (0, gp.o)(), Up = (0, Hp.g)("players"), vp = null === Up.localId ? null : null !== (ip = null === (cp = Up.byId[Up.localId]) || void 0 === cp ? void 0 : cp.name) && void 0 !== ip ? ip : null, tp = (0, Op.useMemo)((() => (0, zp.h)(yp.friends, Ip, op.her … [truncated]
+         let {
+           refused: ip,
+ ... (15 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L80-L85` → after: `L633-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L633-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L633-L711) · [Before (L80-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L80-L85)

```diff
-       }
-       return {
-         ...DD,
-         type: zD,
-         ironChest: wD
-       }
+       }({
+         refused: op.refused.map((pp => pp.name)),
+         listed: Sp,
+         here: op.here.map((pp => pp.name)),
+         friends: tp.flatMap((pp => "here" === pp.place ? [] : [pp.friend.name])),
+         excluded: [...null === vp ? [] : [vp], ...[...op.here, ...op.away].flatMap((pp => "none" === pp.role || (0, zp.l)(Sp, pp.name) ? [] : [pp.name]))]
+       }), [jp] = (0, Op.useState)(ep), [kp, mp] = (0, Op.useState)([]), Rp = function(pp, ip, cp) {
+         const Op = ii(cp),
+           op = ii([...cp, ...pp.refused, ...pp.listed, ...pp.suggested]),
+           Ip = cp => [...pp[cp].filter((pp => !Op.has(pp.toLowerCase()))), ...ip[cp].filter((pp => {
+             const ip = pp.toLowerCase();
+             return !op.has(ip) && (op.add(ip), !0)
+           }))];
+         return {
+           added: [...cp],
+           refused: Ip("refused"),
+ ... (63 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L89-L114` → after: `L715-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L715-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L715-L774) · [Before (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L89-L114)

```diff
-       const zD = RD(DD),
-         wD = null === zD || void 0 === zD ? void 0 : zD.ownerDbId,
-         pD = function(DD) {
-           var zD;
-           let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RD(DD);
-           const pD = AD(DD),
-             sD = UD.get(pD);
-           return sD ? sD.lastOpened < (null !== (zD = null === wD || void 0 === wD ? void 0 : wD.passkeyLastUpdated) && void 0 !== zD ? zD : 0) ? (UD.delete(pD), null) : [...sD.Or] : null
-         }(DD, zD);
-       return void 0 === wD ? {
-         cachedPasskey: pD
-       } : {
-         ownerDbId: wD,
-         cachedPasskey: pD
-       }
-     }(0, gD.l)(rD.d, (DD => {
- ... (10 more removed lines; see GitHub link above)
+       let {
+         manage: ip,
+         listing: cp
+       } = pp;
+       const {
+         t: Op
+       } = (0, Wp.H)(), Ip = (pp, cp) => ((0, op.reportAnalyticsClick)({
+         id: "lobby_manage.set_listing",
+         value: pp
+       }), ip.send({
+         type: "setListing",
+         field: pp,
+         value: cp
+       }, `listing:${pp}`)), Sp = pp => {
+         const cp = ip.statusOf(`listing:${pp}`);
+         return cp && !cp.ok && (0, Bp.jsx)("div", {
+ ... (44 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L116-L131` → after: `L776-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L776-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L776-L815) · [Before (L116-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L116-L131)

```diff
-     })), (0, gD.f)((() => {
-       UD.clear(), fD = null, ID++
-     })), (0, gD.h)((() => {
-       null !== fD && (fD = null, ID++, pD.l.KG("chestToggleFromServer", !1, !0))
-     }));
-     const nD = {
-         boardEditRequested: {
-           watch: DD => (0, pD.o)("EditBoard", (zD => {
-             let {
-               pos: wD
-             } = zD;
-             if (null === wD) return void DD(null);
-             const pD = (0, KD.i)(),
-               sD = (0, KD.t)();
-             pD && sD && DD(sD.readBoardToEdit(pD.api, pD.chunks, wD))
-           }))
+     }
+ 
+     function oi(pp) {
+       let {
+         value: ip,
+         ariaLabel: cp,
+         onSave: op
+       } = pp;
+       const Ip = (0, Op.useRef)(null),
+         Sp = (0, Op.useRef)({
+           value: ip,
+           onSave: op
+         });
+       Sp.current = {
+         value: ip,
+         onSave: op
+ ... (24 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L133-L144` → after: `L817-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L817-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L817-L818) · [Before (L133-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L133-L144)

```diff
-         ironChestOpenRequested: {
-           watch: DD => (0, pD.o)("OpenIronChest", (zD => {
-             let {
-               pos: wD
-             } = zD;
-             DD(function(DD) {
-               return {
-                 pos: DD,
-                 ...hD(DD)
-               }
-             }(wD))
-           }))
+         onBlur: pp => {
+           Yp(pp.currentTarget)
```

#### 16. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L146-L149` → after: `L820-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L820-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L820-L1254) · [Before (L146-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L146-L149)

```diff
-       },
-       MD = {
-         writeOnBoard(DD) {
-           var zD;
+       })
+     }
+ 
+     function Ii(pp) {
+       let {
+         manage: ip
+       } = pp;
+       const {
+         lobbyName: cp,
+         shownLobbyName: Op
+       } = (0, Hp.g)("connectedGame");
+       return ip.state.you.canSetVisibility && null !== cp ? (0, Bp.jsx)(xi, {
+         manage: ip,
+         lobbyName: cp,
+         worldCode: null !== Op && void 0 !== Op ? Op : cp
+       }, cp) : (0, Bp.jsx)(Li, {
+ ... (419 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L151-L153` → after: `L1256-L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1256-L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1256-L1257) · [Before (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L151-L153)

```diff
-             pos: wD,
-             text: pD,
-             textSize: sD
+             rule: ip,
+             children: cp
```

#### 18. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L155-L162` → after: `L1259-L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1259-L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1259-L1317) · [Before (L155-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L155-L162)

```diff
-           null === (zD = (0, KD.i)()) || void 0 === zD || zD.send(LD.d.UpdateBoard, (0, LD.$)({
-             qr: wD,
-             DL: pD,
-             zL: sD
-           }))
-         },
-         writeBook(DD) {
-           var zD;
+           return [ip, ...cp]
+         }))
+       }))
+     }
+ 
+     function vi(pp) {
+       let {
+         manage: ip,
+         rowsShown: cp
+       } = pp;
+       const {
+         t: Ip
+       } = (0, Wp.H)(), Sp = (0, Hp.g)("hiddenPlayerNames"), {
+         rules: xp
+       } = ip.state, Lp = Dp(), Yp = pp => {
+         const ip = Lp.get(pp.key);
+ ... (43 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L164` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1319) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L164)

```diff
-             pages: wD,
+             group: ip,
```

#### 20. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L166` → after: `L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1321) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L166)

```diff
-             published: sD
+             items: op
```

#### 21. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L168-L172` → after: `L1323-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1323-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1323-L1349) · [Before (L168-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L168-L172)

```diff
-           null === (zD = (0, KD.i)()) || void 0 === zD || zD.send(LD.d.UpdateBook, (0, LD.ab)({
-             Xg: wD,
-             Vg: pD,
-             Pg: sD
-           }))
+           const Sp = op.filter((pp => {
+             let {
+               rule: ip
+             } = pp;
+             return Up(ip)
+           }));
+           return 0 === Sp.length ? null : (0, Bp.jsxs)(Op.Fragment, {
+             children: [(0, Bp.jsx)(wp.c, {
+               label: Ip(cp)
+             }), Sp.map((pp => {
+               let {
+                 rule: ip,
+                 children: cp
+               } = pp;
+               return 0 === cp.length ? ep(ip) : (0, Bp.jsxs)("div", {
+                 className: "SettingBoxGroup",
+ ... (11 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L174-L176` → after: `L1351-L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1351-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1351-L1353) · [Before (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L174-L176)

```diff
-         writeNameTag(DD) {
-           var zD;
-           null === (zD = (0, KD.i)()) || void 0 === zD || zD.send(LD.d.UpdateNameTag, DD)
+         joining: {
+           icon: "door-open",
+           title: "lobbyManage:joining"
```

#### 23. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L178-L188` → after: `L1355-L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1355-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1355-L1361) · [Before (L178-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L178-L188)

```diff
-         setCustomLobbyBlock(DD) {
-           let {
-             pos: zD,
-             blockName: wD
-           } = DD;
-           const pD = (0, KD.t)(),
-             sD = (0, KD.i)();
-           pD && sD && sD.send(LD.d.SetCustomLobbyBlock, (0, LD.N)({
-             fR: pD.blockIdOf(wD),
-             UR: zD
-           }))
+         rules: {
+           icon: "list",
+           title: "lobbyManage:rules"
+         },
+         leaderboard: {
+           icon: "trophy",
+           title: "lobbyManage:leaderboard"
```

#### 24. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L190-L200` → after: `L1363-L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1363-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1363-L1390) · [Before (L190-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L190-L200)

```diff
-       }
-   },
-   40573: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => cD,
-       h: () => rD,
-       k: () => LD
-     });
-     var pD = wD(40506),
-       sD = wD(4800),
-       KD = wD(40516);
+       },
+       Hi = 5,
+       di = (0, Op.memo)((function(pp) {
+         let {
+           page: ip,
+           manage: cp,
+           leaderboard: op,
+           focusRequest: Ip,
+           onFocused: Sp,
+           ruleRowsShown: xp
+         } = pp;
+         return "leaderboard" === ip ? (0, Bp.jsx)(Op.Suspense, {
+           fallback: (0, Bp.jsx)("div", {
+             className: "LobbyManageLoading",
+             children: (0, Bp.jsx)(Up.c, {})
+           }),
+ ... (12 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L202-L205` → after: `L1392-L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1392-L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1392-L1406) · [Before (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L202-L205)

```diff
-     function rD() {
-       var DD;
-       const zD = null === (DD = (0, KD.i)()) || void 0 === DD ? void 0 : DD.api.localId;
-       return void 0 === zD || zD === pD.Tc ? null : String(zD)
+     function ei(pp) {
+       let {
+         page: ip
+       } = pp;
+       const {
+         t: cp
+       } = (0, Wp.H)(), Op = ti[ip];
+       return (0, Bp.jsxs)(Bp.Fragment, {
+         children: [(0, Bp.jsx)(yp.d, {
+           name: Op.icon
+         }), " ", (0, Bp.jsx)("span", {
+           className: "LobbyManagePageTitle",
+           children: cp(Op.title)
+         })]
+       })
```

#### 26. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L209-L214` → after: `L1410-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1410-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1410-L1475) · [Before (L209-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L209-L214)

```diff
-       const zD = (0, KD.i)();
-       if (null !== zD) return DD(zD);
-       let wD = null;
-       const pD = (0, sD.t)((() => {
-         const zD = (0, KD.i)();
-         null !== zD && null === wD && (pD(), wD = DD(zD))
+       var ip;
+       const {
+         t: cp
+       } = (0, Wp.H)(), {
+         pages: Ip,
+         landing: Sp
+       } = pp, Lp = (0, Op.useRef)(null), Yp = (0, Op.useRef)(null), Dp = (0, Op.useRef)(null), Ap = (0, Op.useRef)(new Map), [yp, Up] = (0, Op.useState)(null), Hp = (0, Op.useRef)(yp), dp = (0, Op.useRef)(0), [ep, jp] = (0, Op.useState)(Ip[0]), kp = null !== yp && void 0 !== yp ? … [truncated]
+         const ip = wi(Ui(pp.manage.state.rules, (pp => pp.value)));
+         return Math.max(1, Math.ceil(ip.length / Hi))
+       })), Mp = Rp.flatMap((pp => "rules" === pp ? Array(qp).fill(pp) : [pp])), Cp = function(pp, ip) {
+         const [cp, op] = (0, Op.useState)(pp), Ip = cp >= ip;
+         return Ip && cp !== 1 / 0 && op(1 / 0), (0, Op.useLayoutEffect)((() => {
+           if (Ip) return;
+           let pp = !0;
+           return (0, tp.h)().then((() => {
+             pp && op((pp => pp + 1))
+ ... (50 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L216-L226` → after: `L1477-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1477-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1477-L1505) · [Before (L216-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L216-L226)

```diff
-       return () => {
-         var DD;
-         pD(), null === (DD = wD) || void 0 === DD || DD()
-       }
-     }
- 
-     function cD(DD, zD, wD) {
-       return {
-         current: () => {
-           const wD = (0, KD.i)();
-           return null === wD ? zD : DD(wD)()
+       const {
+         onFocused: np
+       } = pp, Fp = (0, Op.useCallback)((pp => {
+         null !== Hp.current && fp(Hp.current), np(pp)
+       }), [np]);
+       (0, Op.useLayoutEffect)((() => {
+         const pp = Hp.current;
+         null !== pp && (!lp || Ip.indexOf(Mp[Cp - 1]) < Ip.indexOf(pp)) && fp(pp)
+       }), [Cp]), (0, Op.useEffect)((() => {
+         const pp = new ResizeObserver((() => {
+           null !== Hp.current ? fp(Hp.current) : Tp()
+         }));
+         return pp.observe(Lp.current), pp.observe(Yp.current), () => {
+           pp.disconnect()
+         }
+       }), []), (0, Op.useLayoutEffect)((() => {
+ ... (13 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L228-L233` → after: `L1507-L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1507-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1507-L1559) · [Before (L228-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L228-L233)

```diff
-         watch: zD => LD((pD => {
-           const sD = DD(pD);
-           let KD = sD();
-           return zD(KD), wD((() => {
-             const DD = sD();
-             DD !== KD && (KD = DD, zD(DD))
+         onFocus: pp => {
+           var ip;
+           const cp = null === Hp.current ? null : Ap.current.get(Hp.current);
+           !cp || cp.contains(pp.target) || null !== (ip = Dp.current) && void 0 !== ip && ip.contains(pp.target) || ap()
+         },
+         children: [Ip.length > 1 && (0, Bp.jsx)("div", {
+           ref: Dp,
+           className: "LobbyManageChips",
+           children: (0, Bp.jsx)(vp.b, {
+             options: Ip.map((pp => ({
+               value: pp,
+               label: (0, Bp.jsx)(ei, {
+                 page: pp
+               }),
+               ariaLabel: cp(ti[pp].title)
+             }))),
+ ... (37 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L235` → after: `L1561-L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1561-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1561-L1568) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L235)

```diff
-         }))
+         })]
+       })
+     }
+ 
+     function ji(pp) {
+       return void 0 === (null === pp || void 0 === pp ? void 0 : pp.page) ? null : {
+         page: pp.page,
+         seq: pp.seq
```

#### 30. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L239` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1629) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L239)

```diff
-   40564: (DD, zD, wD) => {
+   36761: (pp, ip, cp) => {
```

#### 31. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L243-L250` → after: `L1634-L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1634-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1634-L1638) · [Before (L243-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L243-L250)

```diff
-     var pD = wD(40516),
-       sD = wD(40573),
-       KD = wD(40578);
- 
-     function rD() {
-       var DD, zD;
-       return null !== (DD = null === (zD = (0, pD.i)()) || void 0 === zD ? void 0 : zD.itemBridgeSources) && void 0 !== DD ? DD : KD.b
-     }
+     var Op = cp(1505),
+       op = cp(1982),
+       Ip = cp(1956);
+     const Sp = 1e4;
+     let xp = 0;
```

#### 32. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L253-L257` → after: `L1641-L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1641-L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1641-L1689) · [Before (L253-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L253-L257)

```diff
-       return {
-         current: () => rD().states[DD].current(),
-         watch: zD => (0, sD.k)((wD => {
-           const pD = wD.itemBridgeSources.states[DD];
-           return zD(pD.current()), pD.watch(zD)
+       const ip = ++xp;
+       return new Promise((cp => {
+         const xp = ip => {
+             Lp(), clearTimeout(Yp), !1 === (null === ip || void 0 === ip ? void 0 : ip.ok) && (0, Op.reportAnalyticsClick)({
+               id: "lobby_manage.refused",
+               value: pp.type
+             }), cp(ip)
+           },
+           Lp = op.c.subscribe("lobbyManage", (pp => {
+             const cp = function(pp, ip) {
+               var cp;
+               return null !== (cp = null === pp || void 0 === pp ? void 0 : pp.results.find((pp => pp.requestId === ip))) && void 0 !== cp ? cp : null
+             }(pp, ip);
+             null !== cp && xp(cp)
+           })),
+           Yp = setTimeout((() => {
+ ... (33 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L260-L264` → after: `L1692-L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1692-L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1692-L1696) · [Before (L260-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L260-L264)

```diff
-     }
- 
-     function cD(DD) {
-       return {
-         watch: zD => (0, sD.k)((wD => wD.itemBridgeSources.events[DD].watch(zD)))
+       show(pp, ip) {
+         this.statuses.set(pp, {
+           ...ip,
+           until: Date.now() + 4e3
+         }), this.onChange()
```

#### 34. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L266-L297` → after: `L1698-L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1698-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1698-L1717) · [Before (L266-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L266-L297)

```diff
-     }
-     const gD = {
-       states: {
-         inventory: LD("inventory"),
-         hotbar: LD("hotbar"),
-         crafting: LD("crafting"),
-         heldItemAim: LD("heldItemAim")
-       },
-       events: {
-         hotbarSlotRequested: cD("hotbarSlotRequested"),
-         hotbarScrolled: cD("hotbarScrolled"),
-         numberKeyPressed: cD("numberKeyPressed"),
-         inventoryDropRequested: cD("inventoryDropRequested"),
-         chestToggled: cD("chestToggled"),
-         chestRefreshed: cD("chestRefreshed"),
-         inventorySynced: cD("inventorySynced"),
- ... (16 more removed lines; see GitHub link above)
+       expire(pp) {
+         for (const [ip, cp] of this.statuses) cp.until <= pp && this.statuses.delete(ip)
+       }
+       nextDeadline() {
+         let pp = null;
+         for (const cp of this.statuses.values()) {
+           var ip;
+           pp = Math.min(null !== (ip = pp) && void 0 !== ip ? ip : 1 / 0, cp.until)
+         }
+         return pp
+       }
+       statusOf(pp, ip) {
+         const cp = this.statuses.get(pp);
+         return !cp || cp.until <= ip ? null : {
+           ok: cp.ok,
+           text: cp.text
+ ... (4 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L301` → after: `L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1721) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L301)

```diff
-   40578: (DD, zD, wD) => {
+   36751: (pp, ip, cp) => {
```

#### 36. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L303` → after: `L1723-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1723-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1723-L1724) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L303)

```diff
-       b: () => LD
+       e: () => Yp,
+       h: () => Lp
```

#### 37. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L305` → after: `L1726-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1726-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1726-L1730) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L305)

```diff
-     var pD = wD(39592);
+     var Op = cp(620),
+       op = cp(1956),
+       Ip = cp(1656),
+       Sp = cp(104),
+       xp = cp(1276);
```

#### 38. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L307-L311` → after: `L1732-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1732-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1732-L1733) · [Before (L307-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L307-L311)

```diff
-     function sD(DD) {
-       return {
-         current: () => DD,
-         watch: () => () => {}
-       }
+     function Lp(pp, ip, cp) {
+       return Sp.featureFlags.useSocialFeatures && pp && null === (0, xp.c)(ip, cp)
```

#### 39. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L314-L446` → after: `L1736-L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1736-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1736-L1754) · [Before (L314-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L314-L446)

```diff
-     function KD() {}
-     const rD = Object.freeze([0, 0, 0]),
-       LD = {
-         states: {
-           health: sD({
-             health: null,
-             maxHealth: null,
-             shield: null,
-             maxShield: null
-           }),
-           inventory: sD({
-             player: [],
-             chestOrCreative: [],
-             chest: null,
-             creative: !1,
-             selectedSlot: 0,
- ... (117 more removed lines; see GitHub link above)
+     function Yp(pp, ip) {
+       var cp, Sp;
+       const xp = Ip.d.getSocialState().friends.find((pp => pp.name.toLowerCase() === ip.toLowerCase())),
+         Lp = op.gameBridge.latest("players").byId[pp],
+         Yp = void 0 !== Lp && Lp.name === ip,
+         Dp = Yp && null !== (cp = Lp.cosmetics) && void 0 !== cp ? cp : void 0,
+         Ap = xp && Dp ? {
+           ...xp,
+           cosmetics: Dp
+         } : xp;
+       return {
+         playerSocialPreview: null !== Ap && void 0 !== Ap ? Ap : {
+           isError: !1,
+           name: ip,
+           ranks: Yp ? [...Lp.ranks] : [],
+           cosmetics: null !== Dp && void 0 !== Dp ? Dp : {},
+ ... (3 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L449-L545` → after: `L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1757) · [Before (L449-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L449-L545)

```diff
-         commands: {
-           selectHotbarSlot: KD,
-           removeInventoryItem: () => !1,
-           swapInventorySlots: () => !1,
-           moveInventoryItem: () => !1,
-           quickMoveInventoryItem: () => null,
-           closeChest: KD,
-           setInventoryOpen: KD,
-           changeIronChestPasskey: KD,
-           dragReplayCamera: KD,
-           applyTemporaryThirdPerson: KD,
-           holdEmoteWheel: KD,
-           recordFlyingMiddleText: KD,
-           focusCrafting: KD,
-           craftRecipe: () => ({
-             UL: 0,
- ... (81 more removed lines; see GitHub link above)
+         isFriend: void 0 !== xp
```

#### 41. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L548` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1761) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L548)

```diff
-   40512: (DD, zD, wD) => {
+   36924: (pp, ip, cp) => {
```

#### 42. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L550-L554` → after: `L1763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1763) · [Before (L550-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L550-L554)

```diff
-       b: () => VD,
-       f: () => XD,
-       i: () => PD,
-       k: () => QD,
-       l: () => JD
+       e: () => Ap
```

#### 43. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L556-L580` → after: `L1765-L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1765-L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1765-L1831) · [Before (L556-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L556-L580)

```diff
-     var pD = wD(39209),
-       sD = wD(1232),
-       KD = wD(1956),
-       rD = wD(1969),
-       LD = wD(3288),
-       cD = wD(36766),
-       gD = wD(1332),
-       RD = wD(40516),
-       AD = wD(4832),
-       UD = wD(2382),
-       fD = wD(40522),
-       ID = wD(40526),
-       BD = wD(40564);
-     let GD = null;
- 
-     function hD(DD) {
- ... (9 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(1049),
+       Ip = cp.n(op),
+       Sp = cp(1692),
+       xp = cp(1480),
+       Lp = cp(1361),
+       Yp = cp(1060),
+       Dp = cp(1112);
+ 
+     function Ap(pp) {
+       let {
+         label: ip,
+         icon: cp,
+         placeholder: op,
+         onSubmit: Ap
+       } = pp;
+ ... (51 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L585-L586` → after: `L1854-L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1854-L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1854-L1904) · [Before (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L585-L586)

```diff
-       const zD = (0, LD.e)(DD);
-       return void 0 !== zD && (0, LD.g)(zD) === DD
+       let {
+         visibility: ip,
+         onPick: cp
+       } = pp;
+       const {
+         t: op
+       } = (0, Sp.H)(), Ap = (0, Op.useRef)([]);
+       return (0, Lp.jsx)("div", {
+         className: "WorldSocialTiles",
+         role: "group",
+         "aria-label": op("worldSocial:whoCanJoin"),
+         children: Dp.map(((pp, Op) => {
+           const Sp = pp === ip;
+           return (0, Lp.jsxs)("button", {
+             ref: pp => {
+               Ap.current[Op] = pp
+ ... (35 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L590-L597` → after: `L1917-L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1917-L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1917-L1921) · [Before (L590-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L590-L597)

```diff
-       var zD;
-       const wD = null === (zD = (0, RD.i)()) || void 0 === zD ? void 0 : zD.tables;
-       if (void 0 === wD || !nD(DD)) return;
-       const pD = {
-           displayName: wD.getDisplayName(DD)
-         },
-         sD = wD.getItemStat(DD, "description");
-       void 0 !== sD && null !== sD && (pD.description = sD);
+       let {
+         LP: ip,
+         children: cp,
+         ...xp
+       } = pp;
```

#### 46. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L599-L610` → after: `L1923-L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1923-L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1923-L1953) · [Before (L599-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L599-L610)

```diff
-         rootName: KD
-       } = wD.getMetaInfo(DD);
-       KD !== DD && (pD.rootName = KD);
-       const rD = wD.getItemStat(DD, "armourReduction");
-       return void 0 !== rD && null !== rD && (pD.armourReduction = rD), pD
-     }(0, RD.w)((DD => {
-       GD = DD
-     }));
-     const OD = (0, rD.i)("DisplayName", "Description");
- 
-     function JD() {
-       return Boolean(KD.e.get("useInventory") && KD.e.get("useFullInventory"))
+         t: Lp
+       } = (0, Op.H)();
+       return (0, Sp.jsx)("div", {
+         className: "WhitelistTickRow",
+         onClick: () => {
+           ip.onChange(!ip.on)
+         },
+         children: (0, Sp.jsx)(op.h, {
+           ...xp,
+           opensProfileCard: !1,
+           children: (0, Sp.jsxs)("div", {
+             className: "WhitelistTickRowActions",
+             onClick: pp => {
+               pp.stopPropagation()
+             },
+             children: [cp, (0, Sp.jsx)("label", {
+ ... (15 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L612-L632` → after: `L1955-L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1955-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L1955-L2004) · [Before (L612-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L612-L632)

```diff
-     let ED = null;
-     const QD = {
-         inventory: function() {
-           const DD = BD.e.states.inventory;
-           let zD = null;
-           const wD = DD => {
-             var wD;
-             return null === DD.chest ? DD : ((null === (wD = zD) || void 0 === wD ? void 0 : wD.from) === DD && zD.chestVersion === (0, ID.b)() || (zD = {
-               from: DD,
-               chestVersion: (0, ID.b)(),
-               view: {
-                 ...DD,
-                 chest: (0, ID.j)(DD.chest)
-               }
-             }), zD.view)
-           };
- ... (5 more removed lines; see GitHub link above)
+   },
+   36898: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => yp
+     });
+     var Op = cp(62),
+       op = cp(1201),
+       Ip = cp(1880),
+       Sp = cp(104),
+       xp = cp(25),
+       Lp = cp(1505),
+       Yp = cp(2752),
+       Dp = cp(34325),
+       Ap = cp(1480),
+       Pp = cp(1060),
+       Wp = cp(1112);
+ ... (34 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L634-L646` → after: `L2006-L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2006-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2006-L2022) · [Before (L634-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L634-L646)

```diff
-         }(),
-         crafting: BD.e.states.crafting,
-         stationItems: {
-           current() {
-             var DD;
-             return (null === (DD = ED) || void 0 === DD ? void 0 : DD.namesVersion) !== (0, LD.k)() && (ED = {
-               namesVersion: (0, LD.k)(),
-               items: {
-                 enchantable: hD((DD => {
-                   const zD = (0, LD.e)(DD);
-                   return void 0 !== zD && null !== GD && GD.enchantmentPerksOf(zD).length > 0 || void 0
-                 })),
-                 salvageable: hD((DD => !(!nD(DD) || null === (0, cD.c)(DD)) || void 0))
+         }), (0, Wp.jsxs)(Ap.f, {
+           className: "WorldSocialCopy",
+           disabled: null === ep,
+           onClick: () => {
+             null !== ep && (0, Yp.h)(ep, {
+               useShareSheet: jp,
+               onOutcome: pp => {
+                 if ((0, Lp.reportAnalyticsClick)({
+                     id: "world_social.copy_link",
+                     value: "copied" !== pp || wp ? pp : "code"
+                   }), "copied" === pp) Hp();
+                 else if ("failed" === pp) {
+                   var ip;
+                   null === (ip = dp.current) || void 0 === ip || ip.focus(), Ip.i.showMessage({
+                     translationKey: "partyBar:copyFailed"
+                   })
+ ... (1 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L648` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2024) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L648)

```diff
-             }), ED.items
+             })
```

#### 50. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L650-L729` → after: `L2026-L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2026-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2026-L2031) · [Before (L650-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L650-L729)

```diff
-           watch: () => () => {}
-         },
-         itemInfo: function() {
-           let DD = null;
-           const zD = () => {
-             var zD;
-             return (null === (zD = DD) || void 0 === zD ? void 0 : zD.namesVersion) !== (0, LD.k)() && (DD = {
-               namesVersion: (0, LD.k)(),
-               infos: hD(MD)
-             }), DD.infos
-           };
-           return {
-             current: zD,
-             watch: wD => (0, rD.r)((pD => {
-               pD.some(OD) && (DD = null, wD(zD()))
-             }))
- ... (64 more removed lines; see GitHub link above)
+           children: [(0, Wp.jsx)(Pp.d, {
+             name: tp ? "check" : jp ? "up-from-bracket" : "copy"
+           }), " ", yp(tp ? "general:copied" : jp ? "worldSocial:share" : "general:copy")]
+         })]
+       })
+     }
```

#### 51. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L731` → after: `L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2033) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L731)

```diff
-   40562: (DD, zD, wD) => {
+   36908: (pp, ip, cp) => {
```

#### 52. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L737-L738` → after: `L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2037) · [Before (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L737-L738)

```diff
-       k: () => LD,
-       l: () => gD
+       j: () => Ap
```

#### 53. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L740-L742` → after: `L2039-L2058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2039-L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2039-L2058) · [Before (L740-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L740-L742)

```diff
-     class pD extends Error {
-       constructor() {
-         super(...arguments), this.name = "CoreCorruption"
+     var Op = cp(620),
+       op = cp(1201),
+       Ip = cp(1656),
+       Sp = cp(2731),
+       xp = cp(2671),
+       Lp = cp(1480),
+       Yp = cp(36915),
+       Dp = cp(1112);
+ 
+     function Ap(pp, ip) {
+       var cp;
+       return {
+         isError: !1,
+         name: pp,
+         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
+         cosmetics: null !== ip && void 0 !== ip ? ip : {},
+ ... (4 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L747` → after: `L2063-L2105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2063-L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2063-L2105) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L747)

```diff
-       return DD instanceof RangeError && /call stack/i.test(DD.message) || DD instanceof Error && "InternalError" === DD.name && /recursion/i.test(DD.message)
+       let {
+         player: ip,
+         isFriend: cp = !1,
+         status: Op,
+         showLocation: Lp = void 0 === Op,
+         LP: Ap,
+         onSendFriendRequest: Pp,
+         actions: Wp,
+         zIndex: yp
+       } = pp;
+       const {
+         t: Up
+       } = (0, op.H)();
+       let wp = Op;
+       null !== Ap && void 0 !== Ap && Ap.on && (wp = (0, Dp.jsxs)(Dp.Fragment, {
+         children: [null !== Op && void 0 !== Op ? Op : (0, Dp.jsx)(xp.c, {
+ ... (27 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L752-L758` → after: `L2109-L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2109-L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2109-L2134) · [Before (L752-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L752-L758)

```diff
-       var zD;
-       return DD instanceof WebAssembly.RuntimeError || DD instanceof pD || sD(DD) && KD.test(null !== (zD = DD.stack) && void 0 !== zD ? zD : "")
-     }
- 
-     function LD(DD, zD) {
-       if (rD(DD)) throw DD;
-       console.error(zD, DD)
+       let {
+         row: ip,
+         LP: cp,
+         canInvite: Op,
+         invited: Ip,
+         onInvite: Sp,
+         zIndex: xp
+       } = pp;
+       const {
+         t: Yp
+       } = (0, op.H)(), Ap = "online" === ip.place ? Lp.f : Lp.j;
+       return (0, Dp.jsx)(Pp, {
+         player: ip.friend,
+         isFriend: !0,
+         status: "here" === ip.place ? Yp("worldSocial:inThisWorld") : void 0,
+         showLocation: !0,
+ ... (10 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L761-L762` → after: `L2147-L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2147-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2147-L2155) · [Before (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L761-L762)

```diff
-     function cD(DD, zD, wD, sD, KD) {
-       if (zD % sD !== 0 || zD + wD > DD.byteLength) throw new pD(`${KD}: ${wD} bytes at ${zD}, ${sD}-aligned, outside ${DD.byteLength} bytes of memory`)
+     function Sp(pp) {
+       const ip = {
+         lobbyName: pp,
+         answer: null,
+         response: op.b.getSocialSettings(pp)
+       };
+       return ip.response.then((pp => {
+         ip.answer = pp
+       })), ip
```

#### 57. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L765-L766` → after: `L2159-L2160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2159-L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2159-L2160) · [Before (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L765-L766)

```diff
-     function gD(DD, zD, wD, pD, sD) {
-       return 0 === wD ? null : (cD(zD, wD, pD * DD.BYTES_PER_ELEMENT, DD.BYTES_PER_ELEMENT, sD), new DD(zD, wD, pD))
+     function Lp(pp) {
+       xp.set(pp.lobbyName, pp)
```

#### 58. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L769-L770` → after: `L2163-L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2163-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2163-L2224) · [Before (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L769-L770)

```diff
-     function RD(DD, zD, wD, pD, sD) {
-       return 0 === zD ? null : (cD(DD, zD, wD, pD, sD), new DataView(DD, zD, wD))
+     function Yp(pp) {
+       const [ip] = (0, Op.useState)((() => function(pp) {
+         var ip;
+         const cp = null !== (ip = xp.get(pp)) && void 0 !== ip ? ip : null;
+         return null !== cp && void 0 !== cp && cp.answer && "error" in cp.answer ? null : cp
+       }(pp))), [cp, Sp] = (0, Op.useState)((() => null !== ip && void 0 !== ip && ip.answer && "settings" in ip.answer ? ip.answer.settings : null)), [Lp, Yp] = (0, Op.useState)(!0), [Dp, Ap] = (0, Op.useState)(null !== cp), Pp = (0, Op.useRef)(cp);
+       Pp.current = cp;
+       const Wp = (0, Op.useRef)(0),
+         yp = (0, Op.useRef)(0),
+         Up = (0, Op.useRef)(!1),
+         wp = (0, Op.useRef)(!0),
+         vp = (0, Op.useCallback)((async ip => {
+           const cp = ++Wp.current,
+             Op = await (null !== ip && void 0 !== ip ? ip : op.b.getSocialSettings(pp));
+           wp.current && cp === Wp.current && (Ap(!0), Yp(!1), "error" in Op || Sp(Op.settings))
+         }), [pp]),
+ ... (46 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L773` → after: `L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2227) · [Before (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L773)

```diff
-   40516: (DD, zD, wD) => {
+   36931: (pp, ip, cp) => {
```

#### 60. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L775-L783` → after: `L2229-L2230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2229-L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2229-L2230) · [Before (L775-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L775-L783)

```diff
-       c: () => pD,
-       f: () => hD,
-       i: () => BD,
-       k: () => GD,
-       o: () => UD,
-       p: () => fD,
-       t: () => RD,
-       w: () => AD,
-       y: () => ID
+       b: () => Sp,
+       f: () => Ip
```

#### 61. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L785-L790` → after: `L2232-L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2232-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2232-L2238) · [Before (L785-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L785-L790)

```diff
-     class pD extends Error {
-       constructor(DD) {
-         super(`the join's code did not load: ${DD instanceof Error?DD.message:String(DD)}`, {
-           cause: DD
-         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === DD || void 0 === DD ? void 0 : DD.request
-       }
+     var Op = cp(156);
+     const op = new Map;
+ 
+     function Ip(pp, ip) {
+       var cp;
+       const Op = null !== (cp = op.get(pp)) && void 0 !== cp ? cp : new Map;
+       Op.set(ip, Date.now()), op.set(pp, Op)
```

#### 62. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L799-L803` → after: `L2251-L2254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2251-L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2251-L2254) · [Before (L799-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L799-L803)

```diff
-       try {
-         DD(zD)
-       } catch (wD) {
-         console.error("[bloxd-wasm-client] the game chunk's listener failed", wD)
-       }
+       const cp = ip.toLowerCase();
+       for (const Op of pp)
+         if (Op.toLowerCase() === cp) return !0;
+       return !1
```

#### 63. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L806` → after: `L2257-L2277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2257-L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2257-L2277) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L806)

```diff
-     function RD() {
+     function op(pp, ip, cp) {
+       const op = [],
+         Ip = [],
+         Sp = [];
+       for (const xp of pp) !xp.isError && xp.name && ("inGame" === xp.location.status && xp.location.inLobbyName === ip || Op(cp, xp.name) ? Ip.push({
+         friend: xp,
+         place: "here"
+       }) : "offline" === xp.location.status ? Sp.push({
+         friend: xp,
+         place: "offline"
+       }) : op.push({
+         friend: xp,
+         place: "online"
+       }));
+       return [...op, ...Ip, ...Sp]
+     }
+ ... (5 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L810-L811` → after: `L2281-L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2281-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2281-L2282) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L810-L811)

```diff
-     function AD(DD) {
-       LD.push(DD), null !== cD && gD(DD, cD)
+     function Sp(pp, ip) {
+       return null === pp || void 0 === pp || !pp.canManage || Op(pp.whitelist, ip) ? "none" : "whitelist" === pp.visibility ? "required" : "quiet"
```

#### 65. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L815-L829` → after: `L2286-L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2286-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2286-L2290) · [Before (L815-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L815-L829)

```diff
-       return sD ??= Promise.all([wD.e(72), wD.e(96), wD.e(221), wD.e(77), wD.e(222), wD.e(198), wD.e(95), wD.e(240), wD.e(269), wD.e(197), wD.e(210), wD.e(189), wD.e(196), wD.e(191), wD.e(142), wD.e(87), wD.e(121), wD.e(247), wD.e(56)]).then((() => wD(42447))).then((zD => {
-         zD.loadAudio(DD), cD = zD;
-         for (const DD of LD) gD(DD, zD);
-         return zD
-       })).catch((DD => {
-         throw sD = null, DD
-       })), sD
-     }
-     async function fD(DD, zD) {
-       try {
-         const wD = await UD(DD);
-         await wD.loadClientGame(zD)
-       } catch (wD) {
-         throw new pD(wD)
-       }
+       if (null === pp) return !0;
+       const {
+         visibility: ip
+       } = pp;
+       return "public" === ip || "unlisted" === ip || "whitelist" === ip && pp.canManage
```

#### 66. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L832-L835` → after: `L2293-L2303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2293-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2293-L2303) · [Before (L832-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L832-L835)

```diff
-     function ID(DD, zD) {
-       KD = {
-         running: DD,
-         shell: zD
+     function Lp(pp, ip, cp) {
+       if (cp) {
+         const cp = ip.filter((ip => !Op(pp.whitelist, ip)));
+         return {
+           ...pp,
+           whitelist: [...pp.whitelist, ...cp]
+         }
+       }
+       return {
+         ...pp,
+         whitelist: pp.whitelist.filter((pp => !Op(ip, pp)))
```

#### 67. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L839-L850` → after: `L2307-L2309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2307-L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2307-L2309) · [Before (L839-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L839-L850)

```diff
-     function BD() {
-       return rD
-     }
-     async function GD(DD) {
-       const zD = KD;
-       if ((null === zD || void 0 === zD ? void 0 : zD.running) !== DD) throw new Error("the core's session has ended");
-       const wD = await UD(zD.shell.audio).catch((DD => {
-         throw new pD(DD)
-       }));
-       if (null !== rD) return rD;
-       if (KD !== zD || DD.isStopped) throw new Error("the core stopped while the game code loaded");
-       if (rD = wD.startGameHost(DD, zD.shell), null === rD) throw new Error("the core's shared tables didn't read, so the game can't start");
+     function Yp(pp, ip) {
+       const cp = [];
+       for (let Op = 0; Op < pp.length; Op += ip) cp.push(pp.slice(Op, Op + ip));
```

#### 68. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L855` → after: `L2330-L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR2330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L2330-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/223.js#L2330-L2342) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/223.js#L855)

```diff
-       null !== rD && (null !== cD ? cD.endGameHost(rD) : rD.closeGame()), rD = null, KD = null
+       const pp = (0, op.i)("lobbyLeaderboardInfo");
+       return (0, Op.useMemo)((() => function(pp) {
+         if (null === pp) return null;
+         const ip = Object.entries(pp),
+           cp = ip.filter((pp => {
+             let [, ip] = pp;
+             return void 0 !== ip
+           }));
+         if (cp.length === ip.length) return pp;
+         const Op = Object.fromEntries(cp),
+           op = Object.keys(pp).filter((pp => !Object.hasOwn(Op, pp)));
+         return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${op.join(", ")}`), Op
+       }(pp)), [pp])
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/224.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/224.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a)

#### 1. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L4)

```diff
-   36884: (DD, zD, wD) => {
+   37084: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L6-L7` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L6-L9) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L6-L7)

```diff
-       c: () => JD,
-       d: () => OD
+       d: () => mp,
+       h: () => jp,
+       k: () => kp,
+       o: () => yp
```

#### 3. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L9-L20` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L11) · [Before (L9-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L9-L20)

```diff
-     var pD = wD(4272),
-       sD = wD(1442),
-       KD = wD(58),
-       rD = wD(6520),
-       LD = wD(4260),
-       cD = wD(1299),
-       gD = wD(1925),
-       RD = wD(1895),
-       AD = wD(1447),
-       UD = wD(1200),
-       fD = wD(36891),
-       ID = wD(1044),
+     var Op = cp(1049),
```

#### 4. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L22-L28` → after: `L13-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L13-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L13-L75) · [Before (L22-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L22-L28)

```diff
-       GD = wD(1324),
-       hD = wD(1057),
-       nD = wD(1282),
-       MD = wD(1096);
-     const OD = "SleepingOverlay";
- 
-     function JD() {
+       Ip = cp(62),
+       Sp = cp(82),
+       xp = cp(1396),
+       Lp = cp(1480),
+       Yp = cp(1387),
+       Dp = cp(1295),
+       Ap = cp(1201),
+       Pp = cp(37089),
+       Wp = cp(1112);
+ 
+     function yp(pp) {
+       const [ip, cp] = (0, Ip.useState)((() => (0, Pp.k)(pp)));
+       return (0, Ip.useEffect)((() => (cp((0, Pp.k)(pp)), (0, Pp.I)((() => {
+         cp((0, Pp.k)(pp))
+       })))), [pp]), ip
+     }
+ ... (47 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L31-L46` → after: `L78-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L78-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L78-L126) · [Before (L31-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L31-L46)

```diff
-       } = (0, UD.E)(), [zD, wD] = (0, KD.useState)(!1), [ID, JD] = (0, KD.useState)(null), [QD, XD] = (0, KD.useState)(1), [VD, PD] = (0, KD.useState)(!1), [CD, xD] = (0, KD.useState)(!1), TD = (0, KD.useRef)(0), bD = (0, KD.useRef)(!1), jD = (0, KD.useRef)(!1), dD = (0, KD.useRe … [truncated]
- 
-       function iD() {
-         const DD = null !== ID && void 0 !== ID ? ID : "Rested Speed";
-         gD.gameBridge.send("wakeUp", CD ? DD : null), SD.current = null, wD(!1), JD(null), XD(1), PD(!1), xD(!1)
-       }
- 
-       function lD() {
-         return !VD && (iD(), !0)
-       }
-       return (0, sD.g)("PlayerPhysicsTypeUpdate", (DD => {
-         DD !== SD.current && (SD.current = DD, DD === rD.q.SLEEPING ? (jD.current || (TD.current = gD.gameBridge.lookup("cameraZoom", null), jD.current = !0), bD.current = !0, gD.gameBridge.send("setCameraZoom", 3), wD(!0), XD(function() {
-           for (const DD of gD.gameBridge.lookup("blocksStandingOn", null)) {
-             if (fD.b.leafBeds.includes(DD)) return console.log(`Found leaf bed: ${DD}`), 1;
-             if (fD.b.woolBeds.includes(DD)) return console.log(`Found woold bed: ${DD}`), 2;
-             if (fD.b.strongBeds.includes(DD)) return console.log(`Found strong bed ${DD}`), 3
+       } = (0, Ap.H)(), xp = vp(ip, cp);
+       return (0, Wp.jsxs)(Wp.Fragment, {
+         children: [(0, Wp.jsx)("div", {
+           className: "TutorialStepText",
+           children: Op
+         }), (0, Wp.jsxs)("div", {
+           className: "TutorialStepButtons",
+           children: [(0, Pp.t)(ip, cp) && (0, Wp.jsx)(Lp.j, {
+             className: "TutorialStepButton",
+             onClick: () => {
+               null === Ip || void 0 === Ip || Ip(), (0, Pp.r)(ip, cp)
+             },
+             children: Sp("tutorial:back")
+           }), !op && (0, Wp.jsx)(Lp.f, {
+             className: "TutorialStepButton",
+             onClick: () => {
+ ... (33 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L48-L60` → after: `L128-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L128-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L128-L265) · [Before (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L48-L60)

```diff
-           return 1
-         }())) : (jD.current = !1, wD(!1), JD(null), XD(1)))
-       })), (0, KD.useEffect)((() => () => {
-         (0, cD.o)(OD)
-       }), []), (0, KD.useEffect)((() => {
-         zD ? (0, cD.p)(OD) : ((0, cD.o)(OD), bD.current && (gD.gameBridge.send("setCameraZoom", TD.current), bD.current = !1))
-       }), [zD]), (0, nD.u)("overlay", dD, lD, zD), (0, MD.jsx)(pD.b, {
-         className: "SleepingOverlay",
-         "data-camera-keeper": "",
-         in: zD,
-         timeout: 300,
-         nodeRef: dD,
-         unmountOnExit: !0,
+         }), (0, Wp.jsx)("div", {
+           className: "TutorialSpotlightBackdrop",
+           style: {
+             top: op,
+             left: 0,
+             right: 0,
+             bottom: 0
+           }
+         }), (0, Wp.jsx)("div", {
+           className: "TutorialSpotlightBackdrop",
+           style: {
+             top: Op,
+             left: 0,
+             width: Ip,
+             height: op - Op
+           }
+ ... (122 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L63-L136` → after: `L268-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L268-L270) · [Before (L63-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L63-L136)

```diff
-           onClick: DD => {
-             lD() && DD.stopPropagation()
-           },
-           children: (0, MD.jsxs)("div", {
-             className: "SleepingOverlayBody",
-             children: [(0, MD.jsx)("div", {
-               className: "SleepingOverlayPerkList",
-               children: LD.h.map((zD => (0, MD.jsxs)(ED, {
-                 restedEffect: zD,
-                 wR: ID,
-                 setChosenRestedEffect: JD,
-                 children: [(0, MD.jsxs)("div", {
-                   className: "SleepingOverlayPerkTitle",
-                   children: [(0, MD.jsx)(RD.e, {
-                     text: [{
-                       icon: zD
- ... (58 more removed lines; see GitHub link above)
+           className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
+           children: (0, Wp.jsx)(Hp, {
+             ...pp
```

#### 8. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L141-L159` → after: `L405-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L405-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L405-L418) · [Before (L141-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L141-L159)

```diff
-     const ED = (0, KD.memo)((function(DD) {
-       let {
-         children: zD,
-         restedEffect: wD,
-         wR: pD,
-         setChosenRestedEffect: sD
-       } = DD;
-       return wD === pD ? (0, MD.jsx)(AD.o, {
-         onClick: DD => {
-           DD.stopPropagation()
-         },
-         children: zD
-       }) : (0, MD.jsx)(AD.g, {
-         onClick: DD => {
-           sD(wD), DD.stopPropagation()
-         },
- ... (3 more removed lines; see GitHub link above)
+ 
+     function wp() {
+       tp(!1)
+     }
+ 
+     function vp() {
+       tp(yp)
+     }
+ 
+     function tp(pp) {
+       "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
+         openInGameMenuName: pp ? "inventory" : null
+       }), pp || (0, Sp.f)(), yp = !1
+     }
```

#### 9. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L161` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L420) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L161)

```diff
-   40495: (DD, zD, wD) => {
+   37089: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L163` → after: `L422-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L422-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L422-L435) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L163)

```diff
-       e: () => tD
+       C: () => Np,
+       D: () => Tp,
+       H: () => Jp,
+       I: () => fp,
+       b: () => Lp,
+       d: () => Cp,
+       g: () => xp,
+       j: () => Qp,
+       k: () => qp,
+       n: () => jp,
+       r: () => lp,
+       t: () => Xp,
+       u: () => Rp,
+       y: () => Bp
```

#### 11. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L165-L219` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L437) · [Before (L165-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L165-L219)

```diff
-     var pD = wD(20),
-       sD = wD(25),
-       KD = wD(4295),
-       rD = wD(338),
-       LD = wD(1648),
-       cD = wD(8196),
-       gD = wD(4305),
-       RD = wD(8713),
-       AD = wD(8226),
-       UD = wD(8208),
-       fD = wD(8230),
-       ID = wD(1694),
-       BD = wD(8237),
-       GD = wD(8658),
-       hD = wD(8816),
-       nD = wD(8723),
- ... (39 more removed lines; see GitHub link above)
+     var Op = cp(44);
```

#### 12. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L221-L222` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L439-L440) · [Before (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L221-L222)

```diff
-         kind: "specialAction",
-         action: "SpecialAction2"
+         codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
+         worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
```

#### 13. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L224-L287` → after: `L442-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L442-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L442-L454) · [Before (L224-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L224-L287)

```diff
-       xD = DD => {
-         let zD = null;
-         const wD = new XD.d,
-           pD = () => {
-             zD && (((DD, zD, wD) => {
-               switch (wD.kind) {
-                 case "reload":
-                   return void zD.specialActionUp("SpecialAction1");
-                 case "specialAction":
-                   return void zD.specialActionUp(wD.action);
-                 case "customButton":
-                   return void OD.gameBridge.send("pressCustomButton", {
-                     id: wD.id,
-                     down: !1
-                   });
-                 case "touchButton":
- ... (48 more removed lines; see GitHub link above)
+       Ip = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
+       Sp = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
+       xp = Ip.filter((pp => "docsButton" !== pp)),
+       Lp = Sp.filter((pp => "aiHelperButton" !== pp)),
+       Yp = "codeEditorTutorials",
+       Dp = {
+         codeBlockIntro: "codeBlockIntroShown",
+         worldCodeIntro: "worldCodeIntroShown"
+       },
+       Ap = {
+         welcome: "welcomeComplete",
+         docsOverview: "docsOverviewComplete",
+         aiHelperOverview: "aiHelperOverviewComplete"
```

#### 14. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L289-L487` → after: `L456-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L456-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L456-L479) · [Before (L289-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L289-L487)

```diff
-     var TD = wD(8178);
-     var bD = wD(40487),
-       jD = wD(8765),
-       dD = wD(8223),
-       SD = wD(8849);
-     var iD = wD(40483),
-       lD = wD(8855),
-       WD = wD(40499),
-       ND = wD(8833),
-       ZD = wD(8768),
-       yD = wD(8776),
-       kD = wD(8779),
-       mD = wD(8664),
-       eD = wD(8732);
-     const oD = () => mD.d[(0, UD.g)().tapHoldTime].wheelMs,
-       aD = () => ((0, RD.d)(), (0, eD.e)("controllerMenuKey")),
- ... (183 more removed lines; see GitHub link above)
+     let Pp = null,
+       Wp = null;
+     const yp = new Set,
+       Up = new Set;
+     let wp = null;
+     const vp = new Set,
+       tp = new Set;
+ 
+     function Hp() {
+       tp.forEach((pp => {
+         pp()
+       }))
+     }
+ 
+     function dp() {
+       if (!Pp) {
+ ... (8 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L490-L521` → after: `L482-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L482-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L482-L579) · [Before (L490-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L490-L521)

```diff
-   },
-   40487: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => ID,
-       g: () => GD,
-       j: () => fD
-     });
-     var pD = wD(1299),
-       sD = wD(4295),
-       KD = wD(8803),
-       rD = wD(36884),
-       LD = wD(1727),
-       cD = wD(1191),
-       gD = wD(8237),
-       RD = wD(8723),
-       AD = wD(8824);
- ... (16 more removed lines; see GitHub link above)
+       return Pp
+     }
+ 
+     function ep(pp) {
+       const ip = dp();
+       ip[pp] || (Pp = {
+         ...ip,
+         [pp]: !0
+       }, Op.h.setItem(Yp, Pp))
+     }
+ 
+     function jp(pp) {
+       return "docsOverview" === pp ? Ip : "aiHelperOverview" === pp ? Sp : Wp ? op[Wp] : []
+     }
+ 
+     function kp(pp) {
+ ... (82 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L523-L776` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/224.js#L581) · [Before (L523-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/224.js#L523-L776)

```diff
-   },
-   40483: (DD, zD, wD) => {
-     wD.d(zD, {
-       A: () => AD,
-       e: () => sD,
-       i: () => cD,
-       l: () => LD,
-       o: () => RD,
-       r: () => rD,
-       t: () => KD,
-       w: () => gD
-     });
-     var pD = wD(8184);
-     class sD {
-       constructor() {
-         this.fullTiltSinceMs = null
- ... (238 more removed lines; see GitHub link above)
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 1. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4` → after: `L4-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L4-L148) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L4)

```diff
-   38448: (DD, zD, wD) => {
+   36804: (pp, ip, cp) => {
+     cp.d(ip, {
+       A: () => yp,
+       E: () => tp,
+       b: () => Ip,
+       d: () => Up,
+       f: () => wp,
+       j: () => xp,
+       n: () => Pp,
+       q: () => vp,
+       u: () => Ap,
+       w: () => Hp
+     });
+     var Op = cp(25),
+       op = cp(34);
+     const Ip = "clientGameInventoryButtonsChanged",
+ ... (129 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L8-L10` → after: `L152-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L152-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L152-L844) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L8-L10)

```diff
-     var pD = wD(197),
-       sD = wD(37628);
-     const KD = 1.2,
+     var Op = cp(38726);
+     const op = [0, 0, 0];
+     class Ip {
+       constructor(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op;
+         this.pool = pp, this.origin = ip, this.count = 0, this.free = []
+       }
+       take() {
+         var pp;
+         const ip = null !== (pp = this.free.pop()) && void 0 !== pp ? pp : this.count++;
+         return ip >= this.pool.TA && this.pool.grow(Math.max(2 * this.pool.TA, ip + 1)), this.hide(ip), ip
+       }
+       release(pp) {
+         this.hide(pp), this.free.push(pp)
+       }
+       write(pp, ip, cp, op) {
+ ... (677 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L12-L24` → after: `L846-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L846-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L846-L854) · [Before (L12-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L12-L24)

```diff
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
-         Ug: .5,
-         SzD: !1
+         Pig: 1,
+         Cow: 1,
+         Sheep: 1,
+         Deer: 1,
+         Stag: 1,
+         "Draugr Zombie": 2,
+         "Draugr Skeleton": 2,
+         "Cave Golem": 3,
+         "Magma Golem": 3
```

#### 4. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L27-L38` → after: `L858-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L858-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L858-L1045) · [Before (L27-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L27-L38)

```diff
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 1.8,
-           height: 2.6
-         },
-         eyeHeight: 2.3,
-         rideHeight: 2.3,
-         Ug: .5,
-         SzD: !1
+         1: 20,
+         2: 60,
+         3: 120
+       },
+       bp = "baf2farmvoid",
+       hp = "Caged ",
+       ap = " Spawner Block";
+ 
+     function np(pp) {
+       return `lifeform:${(0,Jp.qe)(pp)}`
+     }
+ 
+     function Fp(pp) {
+       if (!pp) return null;
+       if (pp.startsWith(hp)) {
+         const ip = pp.slice(6);
+ ... (172 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L41-L52` → after: `L1049-L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1049-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L1049-L1231) · [Before (L41-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L41-L52)

```diff
-         physicsBodyDimensions: {
-           width: pD.f.mG,
-           height: pD.f.eG
-         },
-         hitBoxDimensions: {
-           width: pD.f.mG + .4,
-           height: pD.f.eG + .6
-         },
-         eyeHeight: pD.f.eG * pD.f.playerEyeToHeightRatio,
-         rideHeight: pD.f.eG - .3,
-         Ug: .5,
-         SzD: !1
+         "Burner Drill": {
+           kind: "Burner Drill",
+           opMs: 4e3,
+           inputSlot: null,
+           fuelSlot: 0,
+           outputSlots: [1, 2, 3],
+           recipes: []
+         },
+         Crusher: {
+           kind: "Crusher",
+           opMs: 4e3,
+           inputSlot: 0,
+           fuelSlot: 1,
+           outputSlots: [2, 3, 4],
+           recipes: [li("Raw Iron", "Iron Grit", 2, 1, {
+             item: "Gold Grit",
+ ... (167 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L55-L66` → after: `L1234-L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1234-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L1234-L1477) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L55-L66)

```diff
-         physicsBodyDimensions: {
-           width: .5,
-           height: .95
-         },
-         hitBoxDimensions: {
-           width: 1.6,
-           height: 1.1
-         },
-         eyeHeight: .9,
-         rideHeight: .5,
-         Ug: .5,
-         SzD: !1
+         Crusher: [li("Spent Pellet", "Glow Dust"), li("Wheat Seeds", "Biomass"), li("Wheat", "Biomass"), li("Dead Bush", "Biomass"), li("Dusk Moss", "Biomass"), li("Rotten Flesh", "Biomass"), li("Bone", "Biomass", 2)],
+         "Shatter Mill": [li("Spent Pellet", "Glow Dust"), li("Wheat Seeds", "Biomass"), li("Wheat", "Biomass"), li("Dead Bush", "Biomass"), li("Dusk Moss", "Biomass"), li("Rotten Flesh", "Biomass"), li("Bone", "Biomass", 2), ...Jp.Ic.map((pp => li(pp, "Biomass")))],
+         Smelter: [li("Biomass", "Fertiliser", 2)],
+         Press: [li("Coal", "Graphite", 1, 4)]
+       },
+       Ti = "Power Coupler",
+       fi = "Advanced Coupler",
+       bi = "Nova Coupler",
+       ai = [{
+         item: Ti,
+         level: 1,
+         divisor: 2,
+         powerPerS: 8
+       }, {
+         item: fi,
+         level: 2,
+ ... (228 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L69-L80` → after: `L1480-L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1480-L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L1480-L1486) · [Before (L69-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L69-L80)

```diff
-         physicsBodyDimensions: {
-           width: .5,
-           height: 1.8
-         },
-         hitBoxDimensions: {
-           width: 1.7,
-           height: 1.9
-         },
-         eyeHeight: 1.3,
-         rideHeight: 1.3,
-         Ug: .5,
-         SzD: !1
+         "Coal Deposit": "Coal",
+         "Iron Deposit": "Raw Iron",
+         "Stone Deposit": "Messy Stone",
+         "Copper Deposit": "Raw Copper",
+         "Gold Deposit": "Raw Gold",
+         "Voltite Deposit": "Raw Voltite",
+         "Uranium Deposit": "Raw Uranium"
```

#### 8. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L83-L94` → after: `L1489-L16695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1489-L16695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L1489-L16695) · [Before (L83-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L83-L94)

```diff
-         physicsBodyDimensions: {
-           width: .5,
-           height: 1.9
-         },
-         hitBoxDimensions: {
-           width: 1.5,
-           height: 2.1
-         },
-         eyeHeight: 1.9,
-         rideHeight: 1,
-         Ug: .5,
-         SzD: !1
+         "Uranium Deposit": 4e3
+       };
+ 
+     function Ac(pp) {
+       var ip;
+       return null !== (ip = Object.keys(Yc).find((ip => Yc[ip] === pp))) && void 0 !== ip ? ip : null
+     }
+ 
+     function Pc(pp) {
+       return Ci.includes(pp)
+     }
+ 
+     function Wc(pp) {
+       return !0 !== pp.nuclear || xp()
+     }
+     var yc = cp(322);
+ ... (15191 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L97-L108` → after: `L16698-L16704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16698-L16704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L16698-L16704) · [Before (L97-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L97-L108)

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
-         Ug: .5,
-         SzD: !1
+         colours: [
+           [120, 255, 150],
+           [200, 255, 120]
+         ],
+         life: [.3, .5],
+         size: [.25, .4],
+         perBlock: 6
```

#### 10. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L111-L212` → after: `L16841-L17335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16841-L17335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L16841-L17335) · [Before (L111-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L111-L212)

```diff
-         Player: {
-           defaultName: "Player",
-           physicsBodyDimensions: {
-             width: pD.f.mG,
-             height: pD.f.eG
-           },
-           hitBoxDimensions: {
-             width: pD.f.mG + .4,
-             height: pD.f.eG + .6
-           },
-           eyeHeight: pD.f.eG * pD.f.playerEyeToHeightRatio,
-           rideHeight: pD.f.eG - .1,
-           Ug: sD.f.Ug,
-           SzD: !0
-         },
-         Pig: {
- ... (86 more removed lines; see GitHub link above)
+         texture: "effect_5",
+         TA: Math.ceil(48),
+         minLifeTime: .35,
+         maxLifeTime: .8,
+         minEmitPower: 1,
+         maxEmitPower: 2,
+         minSize: .2,
+         maxSize: .45,
+         emitRate: 0,
+         gravity: [0, -2, 0],
+         dir1: [-.15, -1, -.15],
+         dir2: [.15, -1, .15],
+         colorGradients: [{
+           timeFraction: 0,
+           minColor: [255, 217, 77, 1],
+           maxColor: [255, 242, 128, 1]
+ ... (479 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L214-L217` → after: `L17337-L17346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17337-L17346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17337-L17346) · [Before (L214-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L214-L217)

```diff
-         "Cave Golem": rD,
-         "Draugr Zombie": {
-           ...cD,
-           defaultPose: "zombie"
+         Pp = new PW,
+         Wp = new vW(Ap),
+         yp = pp => Wp.covers(pp),
+         Up = new NW;
+       let wp;
+       const vp = new nS((pp => {
+           wp.sendCommand(pp)
+         })),
+         tp = () => {
+           vp.send("baf2questbook")
```

#### 12. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L219-L223` → after: `L17348-L17443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17348-L17443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17348-L17443) · [Before (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L219-L223)

```diff
-         "Draugr Skeleton": cD,
-         "Frost Golem": rD,
-         "Frost Zombie": {
-           ...cD,
-           defaultPose: "zombie"
+         Hp = pp => function(pp, ip, cp) {
+           const Op = {};
+           for (const op of cp) {
+             let cp = tt.get(op);
+             void 0 === cp && (cp = pp.getItemStat(ip, op, "displayName"), tt.set(op, cp)), Op[op] = cp
+           }
+           return Op
+         }(wp, Ip, pp),
+         dp = new no(tp),
+         ep = new ZW((() => jo.c.get("loadingOverlayVisible"))),
+         jp = new CD(vp, dp, ep),
+         kp = new py,
+         mp = new Wt(ep),
+         qp = new yt((pp => {
+           ep.show(pp, pp.baf2ToastMs)
+         })),
+ ... (80 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L225-L327` → after: `L17445-L17468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17445-L17468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17445-L17468) · [Before (L225-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L225-L327)

```diff
-         "Frost Skeleton": cD,
-         "Draugr Knight": {
-           physicsBodyDimensions: {
-             width: pD.f.mG,
-             height: pD.f.eG
-           },
-           hitBoxDimensions: {
-             width: pD.f.mG + .4,
-             height: 2.8
-           },
-           eyeHeight: 1.9,
-           rideHeight: 1.8,
-           Ug: .5,
-           SzD: !1
-         },
-         Wolf: gD,
- ... (87 more removed lines; see GitHub link above)
+         ei = [];
+ 
+       function ui(pp) {
+         var ip, cp, Op, op, Ip, Sp, Lp;
+         "core" === (null === (ip = xp.get()) || void 0 === ip ? void 0 : ip.kind) && "core" !== (null === pp || void 0 === pp ? void 0 : pp.kind) && vp.send("baf2coreclose"), "power" === (null === (cp = xp.get()) || void 0 === cp ? void 0 : cp.kind) && "power" !== (null === pp || … [truncated]
+         const Yp = ii.getStatus();
+         "collider" === (null === (Sp = xp.get()) || void 0 === Sp ? void 0 : Sp.kind) && "collider" !== (null === pp || void 0 === pp ? void 0 : pp.kind) && Yp && vp.send(bL(Yp, "close"));
+         const Dp = pp => "reactor" === pp || "battery" === pp;
+         if (Dp(null === (Lp = xp.get()) || void 0 === Lp ? void 0 : Lp.kind) && !Dp(null === pp || void 0 === pp ? void 0 : pp.kind)) {
+           var Ap, Pp, Wp;
+           const pp = "reactor" === (null === (Ap = xp.get()) || void 0 === Ap ? void 0 : Ap.kind) ? null === (Pp = bp.get()) || void 0 === Pp ? void 0 : Pp.status.baf2RxAt : null === (Wp = hp.get()) || void 0 === Wp ? void 0 : Wp.status.baf2BatAt;
+           pp && vp.send(Wi(pp, "close"))
+         }
+         "quests" === (null === pp || void 0 === pp ? void 0 : pp.kind) && tp(), xp.set(pp), null === pp && kp.release()
+       }
+ 
+ ... (8 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L329-L446` → after: `L17470-L17618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17470-L17618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17470-L17618) · [Before (L329-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L329-L446)

```diff
-             height: 2.7
-           },
-           eyeHeight: 2.2,
-           rideHeight: 2.5,
-           Ug: .5,
-           SzD: !1
-         },
-         NPC: {
-           physicsBodyDimensions: {
-             width: pD.f.mG,
-             height: pD.f.eG
-           },
-           hitBoxDimensions: {
-             width: pD.f.mG + .4,
-             height: pD.f.eG + .6
-           },
- ... (102 more removed lines; see GitHub link above)
+             alpha: .5,
+             endAtSolidFace: !0
+           });
+           for (const ip of Ci) {
+             const pp = Bi[ip].inputSlots ? Bx(Sp) : lx(ip, Sp, Ep, vp);
+             ei.push((0, Ho.g)(ip, pp))
+           }
+           ei.push((0, uo.A)((0, Op.createElement)(Op.Fragment, null, (0, Op.createElement)(dW, {
+             controller: Wp
+           }), (0, Op.createElement)(Py, {
+             store: Mp
+           }), (0, Op.createElement)(ev, {
+             store: Ii
+           }), (0, Op.createElement)(GW, {
+             store: dp
+           }), (0, Op.createElement)(KW, {
+ ... (133 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L448-L488` → after: `L17620-L17623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17620-L17623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17620-L17623) · [Before (L448-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L448-L488)

```diff
-         "Glass Gremlin": {
-           physicsBodyDimensions: {
-             width: .6,
-             height: 2.5
-           },
-           hitBoxDimensions: {
-             width: 1,
-             height: 2.6
-           },
-           eyeHeight: 2.2,
-           rideHeight: 2.55,
-           Ug: .5,
-           SzD: !1
-         },
-         "Glass Bro": {
-           physicsBodyDimensions: {
- ... (25 more removed lines; see GitHub link above)
+         onClose: () => {
+           (0, fo.y)([]), cI = null, iI = new Set, It = null, (0, fo.u)(new Map), tt.clear();
+           for (const pp of ei) pp();
+           dp.dispose(), Ii.dispose(), ep.dispose(), kp.dispose(), Si.dispose(), xi.dispose(wp), Tp.dispose(wp), fp.dispose(wp), rp.dispose(wp), sp.dispose(wp), zp.dispose(), Kp.dispose(), Np.dispose(), bp.dispose(), hp.dispose(), Gp.dispose(), Li.dispose(), Yi.dispose(), Ai.dispo … [truncated]
```

#### 16. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L490-L492` → after: `L17625-L17656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17625-L17656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17625-L17656) · [Before (L490-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L490-L492)

```diff
-         Zombie: {
-           ...cD,
-           defaultPose: "zombie"
+         onAfterRender: (pp, ip) => {
+           var cp, Op, op;
+           try {
+             Up.onAfterRender(ip)
+           } catch (Yp) {
+             console.error("Error drawing BAF2 belt items", Yp)
+           }
+           try {
+             Di.onAfterRender(wp, Ip)
+           } catch (Yp) {
+             console.error("Error drawing BAF2 jet flames", Yp)
+           }
+           mi || (mi = !0, vp.send("baf2clientready"));
+           const Sp = wp.getPositionView(Ip);
+           Wp.onAfterRender(ip, Sp, Pp), Mp.onAfterRender(ip, Sp, Pp, yp), Dp.run(Pp), Si.onAfterRender(wp, Sp), xi.onAfterRender(wp, Sp), Cp.onAfterRender(wp, Sp), Tp.onAfterRender(wp, Sp), fp.onAfterRender(wp, Ip, Sp), rp.onAfterRender(wp, Ip, Sp), sp.onAfterRender(wp, Ip), Kp.o … [truncated]
+           const Lp = wp.getTargetedBlock();
+ ... (16 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L494-L497` → after: `L17658-L17666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17658-L17666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17658-L17666) · [Before (L494-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L494-L497)

```diff
-         Skeleton: cD,
-         Mummy: {
-           ...cD,
-           defaultPose: "zombie"
+         onPlayerChangeBlock: (pp, ip, cp, Op, op, Sp) => {
+           pp === Ip && function(pp, ip, cp, Op, op, Ip, Sp) {
+             const xp = hv(Ip, Sp, pp.isPlayerCrouching(ip));
+             if (null === xp) return;
+             if (pp.qE(cp, Op, op, xp), !pp.getClientOption(ip, "canPickUpItems")) return;
+             const Lp = Yc[xp.split("|")[0]];
+             var Yp, Dp, Ap;
+             void 0 !== Lp && (Yp = pp.getInventoryItems(), Dp = Lp, Ap = vy.g.maxItemStackSize, pp.getInventoryFreeSlotCount(ip) > 0 || Yp.some((pp => null !== pp && pp.name === Dp && null !== pp.amount && pp.amount < Ap))) && pp.playSound(ip, (0, At.d)("pickUp"), .5, 1)
+           }(wp, pp, ip, cp, Op, op, Sp)
```

#### 18. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L499-L525` → after: `L17668-L17682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17668-L17682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17668-L17682) · [Before (L499-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L499-L525)

```diff
-         Scorpion: {
-           physicsBodyDimensions: {
-             width: 1,
-             height: .9
-           },
-           hitBoxDimensions: {
-             width: 1.6,
-             height: 1.4
-           },
-           eyeHeight: .6,
-           rideHeight: .9,
-           Ug: .5,
-           SzD: !1
-         },
-         Vulcanite: {
-           physicsBodyDimensions: {
- ... (11 more removed lines; see GitHub link above)
+         onPlayerAltAction: (pp, ip, cp, Op, op) => {
+           var Sp, xp;
+           if (!wp.getClientOption(Ip, "canPickUpItems")) return;
+           const Lp = null !== (Sp = null === (xp = wp.Acp(Ip)) || void 0 === xp ? void 0 : xp.name) && void 0 !== Sp ? Sp : null,
+             Yp = function(pp, ip) {
+               const cp = pp.split("|")[0];
+               return Rp(cp) && ip !== Do && "Sky Pack" !== ip ? cp : null
+             }(op, Lp);
+           if (null !== Yp) return void(yi.tap(Yp, performance.now()) && ot(wp, Ip, Yp, dp));
+           if (!FO(Lp)) return;
+           const Dp = Ui.isNewPress(performance.now()),
+             Ap = function(pp, ip, cp) {
+               return !FO(ip) || cp ? null : po(pp)
+             }(op, Lp, wp.isPlayerCrouching(Ip));
+           null !== Ap && Dp && wp.qE(ip, cp, Op, Ap)
```

#### 19. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L527-L605` → after: `L17684-L17882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17684-L17882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17684-L17882) · [Before (L527-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L527-L605)

```diff
-         "Evil Tome": {
-           physicsBodyDimensions: {
-             width: .6,
-             height: .9
-           },
-           hitBoxDimensions: {
-             width: .9,
-             height: .95
-           },
-           eyeHeight: .6,
-           rideHeight: .95,
-           Ug: .5,
-           SzD: !1
-         },
-         "Magma Toad": {
-           physicsBodyDimensions: {
- ... (63 more removed lines; see GitHub link above)
+         onPlayerAttemptAltAction: (pp, ip, cp, Op, op) => {
+           if (function(pp, ip, cp, Op, op) {
+               "Workbench" === Op.split("|")[0] && pp.getClientOption(cp, "canCraft") && (ct.open("Workbench", op.get(), Ot(pp)), ip.send("baf2station Workbench"))
+             }(wp, vp, Ip, op, dp), Dt(wp, Ip, op)) return "preventAction";
+           mp.onAltAction(wp, Ip, op)
+         },
+         onReceivedMessageFromServer: (pp, ip) => {
+           if ("baf2MachineStatus" === pp) {
+             var cp, Op, op, Yp, Dp, Ap, Pp, yp, tp, jp, mp, Rp, qp, Cp, Xp, Jp;
+             const pp = ip,
+               Ip = pp.baf2MachineTaught;
+             Sp.set(pp.baf2MachinePos, {
+               status: pp.baf2MachineStatus,
+               power: null !== (cp = pp.baf2MachinePower) && void 0 !== cp ? cp : null,
+               opLeftMs: null !== (Op = pp.baf2MachineOpLeftMs) && void 0 !== Op ? Op : null,
+               dug: pp.baf2MachineYield ? {
+ ... (183 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L608-L610` → after: `L17885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17885) · [Before (L608-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L608-L610)

```diff
- 
-     function ID(DD) {
-       return fD[DD]
+       return Ri
```

#### 21. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L613-L773` → after: `L17888-L17920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17888-L17920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17888-L17920) · [Before (L613-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L613-L773)

```diff
-   37045: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => pD
-     });
-     const pD = {
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
- ... (145 more removed lines; see GitHub link above)
+   38729: (pp, ip, cp) => {
+     function Op(pp, ip, cp) {
+       const Op = new Set,
+         op = new ResizeObserver(cp),
+         Ip = () => {
+           const ip = new Set(document.querySelectorAll(pp));
+           let Ip = !1;
+           for (const pp of Op) ip.has(pp) || (op.unobserve(pp), Op.delete(pp), Ip = !0);
+           for (const pp of ip) Op.has(pp) || (op.observe(pp), Sp.observe(pp, {
+             attributes: !0,
+             attributeFilter: ["class", "style"]
+           }), Op.add(pp));
+           Ip && cp()
+         },
+         Sp = new MutationObserver((ip => {
+           ip.some((pp => "attributes" === pp.type)) && cp(), ip.some((ip => function(pp, ip, cp) {
+ ... (17 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L777` → after: `L17927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17927) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L777)

```diff
-   37635: (DD, zD, wD) => {
+   38719: (pp, ip, cp) => {
```

#### 23. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L781-L858` → after: `L17931-L17937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17931-L17937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17931-L17937) · [Before (L781-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L781-L858)

```diff
-     var pD = wD(358),
-       sD = wD.n(pD),
-       KD = wD(1886);
-     let rD;
-     var LD, cD, gD, RD, AD, UD, fD, ID, BD;
-     const GD = ["b", 0, 1, 8, "c", 138, "i", "g", 95, 219, 4, 255, "length", "d", "a", 68, "undefined", void 0, 2, 82, 63, 6, "fromCodePoint", 7, 12, "push", 75, 91, 5, 84, 8191, 88, 13, 14, 15, 208, 235, 3, 129, 222, 195, 69, 19, 58, 157, 81, 9, 136, 183, 87, 99, 100, 101, "e",  … [truncated]
- 
-     function hD(...DD) {
-       return DD[GD[12]] = GD[2], typeof LD[DD[GD[1]]] === GD[16] ? LD[DD[GD[1]]] = function(...DD) {
-         for (xD(DD[GD[12]] = GD[2], DD[-GD[5]] = 'HhtEcgPjsA<3rzQoT^N&{lquVJ_eW,aF5|"[k#i]0.9dXvp(B7/C`R6K1LZ4Syx@>$!n2IDMbwYfUO~%8;=m*):G+?}', DD[GD[0]] = "" + (DD[GD[1]] || ""), DD[GD[4]] = DD[GD[0]].length, DD[GD[10]] = [], DD[GD[8]] = GD[1], DD[-GD[9]] = GD[1], DD[GD[7]] = -G … [truncated]
-           if (DD[GD[6]] = DD[-GD[5]].indexOf(DD[GD[0]][DD[GD[3]]]), DD[GD[6]] !== -GD[2])
-             if (DD[GD[7]] < GD[1]) DD[GD[7]] = DD[GD[6]];
-             else {
-               xD(DD[GD[7]] += DD[GD[6]] * GD[27], DD[GD[8]] |= DD[GD[7]] << DD[-GD[9]], DD[-GD[9]] += (DD[GD[7]] & GD[30]) > GD[31] ? GD[32] : GD[33]);
-               do {
-                 xD(DD[GD[10]].push(DD[GD[8]] & GD[11]), DD[GD[8]] >>= GD[3], DD[-GD[9]] -= GD[3])
- ... (62 more removed lines; see GitHub link above)
+     var Op = cp(38712);
+     const op = 5,
+       Ip = [0, 0, 0],
+       Sp = {
+         x: 0,
+         y: 0,
+         distSq: 0
```

#### 24. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L861-L1010` → after: `L17940-L17946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17940-L17946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17940-L17946) · [Before (L861-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L861-L1010)

```diff
-     function xD() {
-       xD = function() {}
-     }
-     rD = (...DD) => {
-       function zD(...DD) {
-         return DD[GD[12]] = GD[2], typeof LD[DD[GD[1]]] === GD[16] ? LD[DD[GD[1]]] = function(...DD) {
-           for (xD(DD[GD[12]] = GD[2], DD[GD[14]] = '1w|^$@<26}89PRAH?acjks;.3&QJq+B(C/ZKT)r~UWOD4ty0nYmMgIG*5o!f]v_eb,Lhz7X>{E#Fx%=dlpiVu[":`NS', DD[GD[44]] = "" + (DD[GD[1]] || ""), DD[GD[4]] = DD[GD[44]].length, DD[GD[10]] = [], DD[GD[28]] = GD[1], DD[GD[48]] = GD[1], DD[GD[47] … [truncated]
-             if (DD[GD[46]] = DD[GD[14]].indexOf(DD[GD[44]][DD[GD[45]]]), DD[GD[46]] !== -GD[2])
-               if (DD[GD[47]] < GD[1]) DD[GD[47]] = DD[GD[46]];
-               else {
-                 xD(DD[GD[47]] += DD[GD[46]] * GD[27], DD[GD[28]] |= DD[GD[47]] << DD[GD[48]], DD[GD[48]] += (DD[GD[47]] & GD[30]) > GD[31] ? GD[32] : GD[33]);
-                 do {
-                   xD(DD[GD[10]].push(DD[GD[28]] & GD[11]), DD[GD[28]] >>= GD[3], DD[GD[48]] -= GD[3])
-                 } while (DD[GD[48]] > GD[23]);
-                 DD[GD[47]] = -GD[2]
-               } return DD[GD[47]] > -GD[2] && DD[GD[10]].push((DD[GD[28]] | DD[GD[47]] << DD[GD[48]]) & GD[11]), nD(DD[GD[10]])
- ... (134 more removed lines; see GitHub link above)
+     function xp(pp, ip, cp, xp, Lp, Yp) {
+       let [Dp, Ap, Pp] = xp;
+       const Wp = (Dp + .5 - cp[0]) ** 2 + (Ap - cp[1]) ** 2 + (Pp + .5 - cp[2]) ** 2;
+       let yp = null;
+       Wp <= Yp ** 2 && (Ip[0] = Dp + .5, Ip[1] = Ap + Lp, Ip[2] = Pp + .5, yp = ip.projectWorldPosToViewport(Ip));
+       const Up = null !== yp && yp.x > -op && yp.x < 100 + op && yp.y > -op && yp.y < 100 + op;
+       return (0, Op.d)(pp, !Up), Up ? (Sp.x = yp.x, Sp.y = yp.y, Sp.distSq = Wp, Sp) : null
```

#### 25. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1013` → after: `L17949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17949) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L1013)

```diff
-   37628: (DD, zD, wD) => {
+   38712: (pp, ip, cp) => {
```

#### 26. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1015-L1016` → after: `L17951-L17952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17951-L17952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17951-L17952) · [Before (L1015-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L1015-L1016)

```diff
-       c: () => cD,
-       f: () => LD
+       b: () => Sp,
+       d: () => Ip
```

#### 27. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1018-L1060` → after: `L17954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17954) · [Before (L1018-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L1018-L1060)

```diff
-     var pD = wD(37635),
-       sD = wD(1886);
-     const KD = 2,
-       rD = 1,
-       LD = {
-         Ug: 1,
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
- ... (27 more removed lines; see GitHub link above)
+     const Op = new WeakMap;
```

#### 28. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1062-L1072` → after: `L17956-L17972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17956-L17972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/225.js#L17956-L17972) · [Before (L1062-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/225.js#L1062-L1072)

```diff
-     function cD(DD, zD, wD, LD, cD, gD, RD) {
-       if (cD.speed) return (0, pD.e)(zD, wD, LD, cD, gD, RD, DD), void(cD.ticksToReachMaxIdleFriction = KD);
-       const AD = LD.isOnGround(),
-         UD = zD.bloxd.getSyncedClientOptions(zD.bloxd.getPlayerReader(wD)),
-         fD = null === UD ? zD.bloxd.getClientPredictedOption(wD, "groundFrictionScale") : UD.groundFrictionScale,
-         ID = null === UD ? zD.bloxd.getClientPredictedOption(wD, "airFrictionScale") : UD.airFrictionScale,
-         BD = AD ? fD : ID,
-         GD = Math.max(rD, BD),
-         hD = cD.ticksToReachMaxIdleFriction / KD,
-         nD = (0, sD.y)(GD, BD, hD);
-       gD.friction = DD.standingFriction * ((null === UD ? zD.bloxd.getClientPredictedOption(wD, "airMomentumConservation") : UD.airMomentumConservation) ? nD : BD), cD.ticksToReachMaxIdleFriction > 0 && cD.ticksToReachMaxIdleFriction--
+     function op(pp) {
+       let ip = Op.get(pp);
+       return ip || (ip = {
+         hidden: pp.hidden,
+         x: NaN,
+         y: NaN
+       }, Op.set(pp, ip)), ip
+     }
+ 
+     function Ip(pp, ip) {
+       const cp = op(pp);
+       cp.hidden !== ip && (cp.hidden = ip, pp.hidden = ip)
+     }
+ 
+     function Sp(pp, ip, cp) {
+       const Op = op(pp);
+ ... (1 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/226.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/226.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65)

#### 1. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L4-L23` → after: `L4-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L4-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L4-L153) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L4-L23)

```diff
-   39733: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       getBlockFaces: () => UD,
-       getIngameIconUrl: () => BD,
-       getItemIconUrl: () => ID,
-       getItemTextureUrl: () => fD,
-       getParticleTextureUrl: () => GD
-     });
-     var pD = wD(4486),
-       sD = wD(37015),
-       KD = wD(9195),
-       rD = wD(3141);
-     const LD = new Set,
-       cD = new Set;
-     let gD = null;
- 
- ... (4 more removed lines; see GitHub link above)
+   36841: pp => {
+     pp.exports = {
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

#### 2. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L26-L31` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L167-L168) · [Before (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L26-L31)

```diff
-     function AD(DD, zD) {
-       try {
-         return (0, KD.getDefaultTexture)(DD, zD).url
-       } catch {
-         return RD(DD), null
-       }
+     function Yp(pp, ip, cp) {
+       return Math.min(Math.max(ip, pp), cp)
```

#### 3. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L36-L44` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L177-L186) · [Before (L36-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L36-L44)

```diff
-       const KD = sD.m[DD];
-       if (!KD || KD.itemTexture || !KD.textureInfo) return null;
-       const {
-         textureInfo: LD,
-         texturePerSide: cD
-       } = KD, gD = DD => {
-         return "string" === typeof(zD = cD && Array.isArray(LD) ? LD[cD[DD]] : LD) ? AD(zD, rD.i.BLOCK) : zD && "object" === typeof zD && "animTextures" in zD ? AD((0, pD.p)(zD), rD.i.BLOCK) : null;
-         var zD
-       }, RD = gD(2);
+       switch (pp.substring(0, 3).toLowerCase()) {
+         case "hsl":
+           ip = Lp.get.hsl(pp), cp = "hsl";
+           break;
+         case "hwb":
+           ip = Lp.get.hwb(pp), cp = "hwb";
+           break;
+         default:
+           ip = Lp.get.rgb(pp), cp = "rgb"
+       }
```

#### 4. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L46-L48` → after: `L188-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L188-L189) · [Before (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L46-L48)

```diff
-         top: RD,
-         left: null !== (zD = gD(4)) && void 0 !== zD ? zD : RD,
-         right: null !== (wD = gD(0)) && void 0 !== wD ? wD : RD
+         model: cp,
+         value: ip
```

#### 5. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L52-L55` → after: `L260-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L260-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L260-L475) · [Before (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L52-L55)

```diff
-     function fD(DD) {
-       var zD;
-       const wD = sD.m[DD];
-       return AD(null !== (zD = null === wD || void 0 === wD ? void 0 : wD.itemTexture) && void 0 !== zD ? zD : "string" === typeof(null === wD || void 0 === wD ? void 0 : wD.textureInfo) ? wD.textureInfo : DD, rD.i.ITEM)
+     function Lp(pp, ip) {
+       if (!(this instanceof Lp)) return new Lp(pp, ip);
+       if (ip && ip in Ip && (ip = null), ip && !(ip in op)) throw new Error("Unknown model: " + ip);
+       let cp, Yp;
+       if (null == pp) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
+       else if (pp instanceof Lp) this.model = pp.model, this.color = [...pp.color], this.valpha = pp.valpha;
+       else if ("string" === typeof pp) {
+         const ip = Op.get(pp);
+         if (null === ip) throw new Error("Unable to parse color from string: " + pp);
+         this.model = ip.model, Yp = op[this.model].channels, this.color = ip.value.slice(0, Yp), this.valpha = "number" === typeof ip.value[Yp] ? ip.value[Yp] : 1
+       } else if (pp.length > 0) {
+         this.model = ip || "rgb", Yp = op[this.model].channels;
+         const cp = Array.prototype.slice.call(pp, 0, Yp);
+         this.color = Pp(cp, Yp), this.valpha = "number" === typeof pp[Yp] ? pp[Yp] : 1
+       } else if ("number" === typeof pp) this.model = "rgb", this.color = [pp >> 16 & 255, pp >> 8 & 255, 255 & pp], this.valpha = 1;
+       else {
+ ... (200 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L59-L60` → after: `L479-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L479-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L479-L483) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L59-L60)

```diff
-       var zD, wD;
-       return sD.m[DD] ? null !== (zD = null === (wD = UD(DD)) || void 0 === wD ? void 0 : wD.top) && void 0 !== zD ? zD : fD(DD) : null
+       return function(ip) {
+         return function(pp, ip) {
+           return Number(pp.toFixed(ip))
+         }(ip, pp)
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L63-L64` → after: `L486-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L486-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L486-L493) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L63-L64)

```diff
-     function BD(DD) {
-       return AD(DD, rD.i.ICON)
+     function Dp(pp, ip, cp) {
+       pp = Array.isArray(pp) ? pp : [pp];
+       for (const Op of pp)(xp[Op] || (xp[Op] = []))[ip] = cp;
+       return pp = pp[0],
+         function(Op) {
+           let op;
+           return void 0 !== Op ? (cp && (Op = cp(Op)), op = this[pp](), op.color[ip] = Op, op) : (op = this[pp]().color[ip], cp && (op = cp(op)), op)
+         }
```

#### 8. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L68-L71` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L497-L498) · [Before (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L68-L71)

```diff
-       try {
-         return wD(3315)(`./${DD}.png`)
-       } catch {
-         return RD(DD), null
+       return function(ip) {
+         return Math.max(0, Math.min(pp, ip))
```

#### 9. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L75-L78` → after: `L508-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L508-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L508-L511) · [Before (L75-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L75-L78)

```diff
-   37045: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => pD
-     });
+   36859: (pp, ip, cp) => {
+     const Op = cp(36864),
+       op = {};
+     for (const Sp of Object.keys(Op)) op[Op[Sp]] = Sp;
```

#### 10. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L80-L179` → after: `L513-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L513-L515) · [Before (L80-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L80-L179)

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
- ... (84 more removed lines; see GitHub link above)
+       rgb: {
+         channels: 3,
+         labels: "rgb"
```

#### 11. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L181-L196` → after: `L517-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L517-L519) · [Before (L181-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L181-L196)

```diff
-       "skyblock:forged:diamond-moonstone-gold": {
-         name: "Jeweller's Pride",
-         lore: "Too pretty to fight with. Fight with it anyway.",
-         damageMultiplier: 1.24,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge"
-       },
-       "skyblock:forged:gold-gold-gold": {
-         name: "King's Ransom",
-         lore: "Worth more than the treasure it guards.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2.5
-         }
+       hsl: {
+         channels: 3,
+         labels: "hsl"
```

#### 12. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L198-L207` → after: `L521-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L521-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L521-L539) · [Before (L198-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L198-L207)

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
-         }
+       hsv: {
+         channels: 3,
+         labels: "hsv"
+       },
+       hwb: {
+         channels: 3,
+         labels: "hwb"
+       },
+       cmyk: {
+         channels: 4,
+         labels: "cmyk"
+       },
+       xyz: {
+         channels: 3,
+         labels: "xyz"
+       },
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L209-L235` → after: `L541-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L541-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/226.js#L541-L732) · [Before (L209-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/226.js#L209-L235)

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
- ... (11 more removed lines; see GitHub link above)
+       lch: {
+         channels: 3,
+         labels: "lch"
+       },
+       hex: {
+         channels: 1,
+         labels: ["hex"]
+       },
+       keyword: {
+         channels: 1,
+         labels: ["keyword"]
+       },
+       ansi16: {
+         channels: 1,
+         labels: ["ansi16"]
+       },
+ ... (176 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/227.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/227.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c)

#### 1. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/227.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/227.js#L4)

```diff
-   37088: (DD, zD, wD) => {
+   36948: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L7-L8` → after: `L7-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L7-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/227.js#L7-L10) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/227.js#L7-L8)

```diff
-       f: () => pD,
-       g: () => sD
+       d: () => Di,
+       e: () => Wi,
+       i: () => Ai,
+       l: () => Pi
```

#### 3. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L10-L15` → after: `L12-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L12-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/227.js#L12-L136) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/227.js#L10-L15)

```diff
-     const pD = 1 / 2.2,
-       sD = 2.2;
-     Math.sqrt(5);
-     let KD = .001
-   },
-   37125: (DD, zD, wD) => {
+     const Op = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
+       op = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
+       Ip = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
+       Sp = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
+       xp = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
+       Lp = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
+       Yp = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
+       Dp = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
+       Ap = JSON.parse('{"src":["/sounds/generatedSprites/randomBeep.7b90315654.ogg","/sounds/generatedSprites/randomBeep.0e88f6aa33.m4a","/sounds/generatedSprites/randomBeep.47ff5e799a.mp3","/sounds/generatedSprites/randomBeep.444034b8b7.ac3"],"sprite":{"beep":[100,2455.510204081 … [truncated]
+       Pp = JSON.parse('{"src":["/sounds/generatedSprites/randomCannon.f9d64818ea.ogg","/sounds/generatedSprites/randomCannon.52f7576d74.m4a","/sounds/generatedSprites/randomCannon.bde162aee8.mp3","/sounds/generatedSprites/randomCannon.4877805969.ac3"],"sprite":{"cannonFire1":[100 … [truncated]
+       Wp = JSON.parse('{"src":["/sounds/generatedSprites/randomCash.8ff82dcd92.ogg","/sounds/generatedSprites/randomCash.a86426509f.m4a","/sounds/generatedSprites/randomCash.48929d75f1.mp3","/sounds/generatedSprites/randomCash.f687b943c4.ac3"],"sprite":{"cashRegister":[100,3819.6 … [truncated]
+       yp = JSON.parse('{"src":["/sounds/generatedSprites/randomExp.fa5a4c9798.ogg","/sounds/generatedSprites/randomExp.a7e2faf290.m4a","/sounds/generatedSprites/randomExp.b4baff1a37.mp3","/sounds/generatedSprites/randomExp.4974715bbd.ac3"],"sprite":{"exp_collect":[100,1009.206349 … [truncated]
+       Up = JSON.parse('{"src":["/sounds/generatedSprites/randomFallsmall.e0ec9ce0a7.ogg","/sounds/generatedSprites/randomFallsmall.a1f24b70c2.m4a","/sounds/generatedSprites/randomFallsmall.bcbd5fef60.mp3","/sounds/generatedSprites/randomFallsmall.a3b7d06594.ac3"],"sprite":{"falls … [truncated]
+       wp = JSON.parse('{"src":["/sounds/generatedSprites/randomItems.380c31a312.ogg","/sounds/generatedSprites/randomItems.6ae69434b9.m4a","/sounds/generatedSprites/randomItems.85b5c2f034.mp3","/sounds/generatedSprites/randomItems.cdadb8aa52.ac3"],"sprite":{"bow":[100,500],"bucke … [truncated]
+       vp = JSON.parse('{"src":["/sounds/generatedSprites/randomFire.06f418fc54.ogg","/sounds/generatedSprites/randomFire.7c5564dd14.m4a","/sounds/generatedSprites/randomFire.f61e3ab1f3.mp3","/sounds/generatedSprites/randomFire.5869bbefc8.ac3"],"sprite":{"fireBurn":[100,2827.39229 … [truncated]
+       tp = JSON.parse('{"src":["/sounds/generatedSprites/randomFirecracker.ddc99cbc73.ogg","/sounds/generatedSprites/randomFirecracker.128308b436.m4a","/sounds/generatedSprites/randomFirecracker.d5635f7e7d.mp3","/sounds/generatedSprites/randomFirecracker.e5afa15901.ac3"],"sprite" … [truncated]
+ ... (109 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L17-L56` → after: `L138-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L138-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/227.js#L138-L144) · [Before (L17-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/227.js#L17-L56)

```diff
-       return parseInt(DD.toString().replace(/\W/g, ""))
-     }
- 
-     function sD(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(DD - zD) <= wD
-     }
- 
-     function KD(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
-       return DD < zD - pD || DD > wD + pD
-     }
- 
-     function rD(DD, zD) {
-       return DD === zD ? DD : Math.random() * (zD - DD) + DD
-     }
- ... (24 more removed lines; see GitHub link above)
+       if (Yi[pp]) return yi(Yi[pp]);
+       {
+         const ip = [];
+         for (const cp in Si)
+           for (const Op in Si[cp].sprite) Op.startsWith(pp) && ip.push(Op);
+         return Yi[pp] = ip, yi(ip)
+       }
```

#### 5. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L60-L83` → after: `L148-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/227.js#L148-L149) · [Before (L60-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/227.js#L60-L83)

```diff
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       return Math.min(wD, Math.max(zD, DD))
-     }
- 
-     function fD(DD) {
-       return DD -= 2 * Math.PI * Math.floor((DD + Math.PI) / (2 * Math.PI))
-     }
- 
-     function ID(DD) {
-       const zD = DD.toString(16);
-       return DD <= 15 ? ("0" + zD).toUpperCase() : zD.toUpperCase()
-     }
- 
-     function BD(DD) {
-       if (Math.log2) return Math.floor(Math.log2(DD));
- ... (8 more removed lines; see GitHub link above)
+       const ip = Li[pp];
+       if (void 0 === ip) throw new Error(`Invalid sound name ${pp} (not in any sprite sheet)`);
```

#### 6. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L88-L223` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/227.js#L154-L155) · [Before (L88-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/227.js#L88-L223)

```diff
-       return DD - Math.floor(DD / zD) * zD
-     }
- 
-     function hD(DD, zD, wD) {
-       return (DD - zD) / (wD - zD)
-     }
- 
-     function nD(DD, zD, wD) {
-       return DD * (wD - zD) + zD
-     }
- 
-     function MD(DD, zD) {
-       let wD = GD(zD - DD, 360);
-       return wD > 180 && (wD -= 360), wD
-     }
- 
- ... (120 more removed lines; see GitHub link above)
+       if (!(pp in Si)) throw new Error("Invalid spriteTrack name");
+       return ip in Si[pp].sprite
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/228.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/228.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba)

#### 1. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L3)

```diff
- export const ids = [228, 235];
+ export const ids = [228];
```

#### 2. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L5-L25` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L4-L7) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L5-L25)

```diff
-   38265: DD => {
-     DD.exports = function(DD) {
-       return null != DD && null != DD.constructor && "function" === typeof DD.constructor.isBuffer && DD.constructor.isBuffer(DD)
-     }
-   },
-   38252: (DD, zD, wD) => {
-     var pD = wD(38256),
-       sD = wD(38259),
-       KD = wD(38265);
-     wD.g.__TYPEDARRAY_POOL || (wD.g.__TYPEDARRAY_POOL = {
-       UINT8: sD([32, 0]),
-       UINT16: sD([32, 0]),
-       UINT32: sD([32, 0]),
-       INT8: sD([32, 0]),
-       INT16: sD([32, 0]),
-       INT32: sD([32, 0]),
- ... (5 more removed lines; see GitHub link above)
+   39842: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Op,
+       g: () => op
```

#### 3. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L27-L59` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L9-L12) · [Before (L27-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L27-L59)

```diff
-     var rD = "undefined" !== typeof Uint8ClampedArray,
-       LD = wD.g.__TYPEDARRAY_POOL;
-     LD.UINT8C || (LD.UINT8C = sD([32, 0])), LD.BUFFER || (LD.BUFFER = sD([32, 0]));
-     var cD = LD.DATA,
-       gD = LD.BUFFER;
- 
-     function RD(DD) {
-       if (DD) {
-         var zD = DD.length || DD.byteLength,
-           wD = pD.log2(zD);
-         cD[wD].push(DD)
-       }
-     }
- 
-     function AD(DD) {
-       DD = pD.nextPow2(DD);
- ... (17 more removed lines; see GitHub link above)
+     const Op = "The world isn't loaded, so no blocks can be seen.",
+       op = "The world isn't loaded, so nothing in it can be seen."
+   },
+   39281: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L61` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L14) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L61)

```diff
-       return new Int8Array(AD(DD), 0, DD)
+       return !(!pp.lobbyLeaderboardInfo && !pp.lobbyManage)
```

#### 5. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L65` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L28) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L65)

```diff
-       return new Int16Array(AD(2 * DD), 0, DD)
+       Op = pp
```

#### 6. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L68-L69` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L31-L32) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L68-L69)

```diff
-     function hD(DD) {
-       return new Int32Array(AD(4 * DD), 0, DD)
+     function Ip(pp, ip) {
+       return Op(pp, ip)
```

#### 7. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L73` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L51-L53) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L73)

```diff
-       return new Float32Array(AD(4 * DD), 0, DD)
+       var ip, cp;
+       const Op = (0, Ip.k)();
+       return Op ? null === (ip = (0, op.d)(Op.api, pp[0], pp[1], pp[2])) || void 0 === ip || null === (cp = ip.persisted) || void 0 === cp ? void 0 : cp.shared : void 0
```

#### 8. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L77` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L57) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L77)

```diff
-       return new Float64Array(AD(8 * DD), 0, DD)
+       return `${pp[0]},${pp[1]},${pp[2]}`
```

#### 9. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L80-L81` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L63-L64) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L80-L81)

```diff
-     function OD(DD) {
-       return rD ? new Uint8ClampedArray(AD(DD), 0, DD) : UD(DD)
+     function Up() {
+       return yp
```

#### 10. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L85-L93` → after: `L68-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L68-L79) · [Before (L85-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L85-L93)

```diff
-       return new DataView(AD(DD), 0, DD)
-     }
-     zD.free = function(DD) {
-       if (KD(DD)) gD[pD.log2(DD.length)].push(DD);
-       else {
-         if ("[object ArrayBuffer]" !== Object.prototype.toString.call(DD) && (DD = DD.buffer), !DD) return;
-         var zD = DD.length || DD.byteLength,
-           wD = 0 | pD.log2(zD);
-         cD[wD].push(DD)
+       const ip = null !== Wp && Wp.key === Ap(pp.pos) ? Wp.type : null;
+       if (null === ip) return pp;
+       let cp = null;
+       if ("Iron" === ip) {
+         const {
+           cachedPasskey: ip,
+           ...Op
+         } = vp(pp.pos);
+         cp = {
+           Zx: null !== ip && void 0 !== ip ? ip : [0, 0, 0, 0],
+           ...Op
+         }
```

#### 11. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L95-L128` → after: `L81-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L81-L84) · [Before (L95-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L95-L128)

```diff
-     }, zD.freeUint8 = zD.freeUint16 = zD.freeUint32 = zD.freeInt8 = zD.freeInt16 = zD.freeInt32 = zD.freeFloat32 = zD.freeFloat = zD.freeFloat64 = zD.freeDouble = zD.freeUint8Clamped = zD.freeDataView = function(DD) {
-       RD(DD.buffer)
-     }, zD.freeArrayBuffer = RD, zD.freeBuffer = function(DD) {
-       gD[pD.log2(DD.length)].push(DD)
-     }, zD.malloc = function(DD, zD) {
-       if (void 0 === zD || "arraybuffer" === zD) return AD(DD);
-       switch (zD) {
-         case "uint8":
-           return UD(DD);
-         case "uint16":
-           return fD(DD);
-         case "uint32":
-           return ID(DD);
-         case "int8":
-           return BD(DD);
-         case "int16":
- ... (18 more removed lines; see GitHub link above)
+       return {
+         ...pp,
+         type: ip,
+         ironChest: cp
```

#### 12. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L134-L135` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L87) · [Before (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L134-L135)

```diff
-   },
-   38256: (DD, zD) => {
+ 
```

#### 13. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L137-L172` → after: `L89-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L89-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L89-L189) · [Before (L137-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L137-L172)

```diff
-       var zD = 32;
-       return (DD &= -DD) && zD--, 65535 & DD && (zD -= 16), 16711935 & DD && (zD -= 8), 252645135 & DD && (zD -= 4), 858993459 & DD && (zD -= 2), 1431655765 & DD && (zD -= 1), zD
-     }
-     zD.INT_BITS = 32, zD.INT_MAX = 2147483647, zD.INT_MIN = -1 << 31, zD.sign = function(DD) {
-       return (DD > 0) - (DD < 0)
-     }, zD.abs = function(DD) {
-       var zD = DD >> 31;
-       return (DD ^ zD) - zD
-     }, zD.min = function(DD, zD) {
-       return zD ^ (DD ^ zD) & -(DD < zD)
-     }, zD.max = function(DD, zD) {
-       return DD ^ (DD ^ zD) & -(DD < zD)
-     }, zD.isPow2 = function(DD) {
-       return !(DD & DD - 1) && !!DD
-     }, zD.log2 = function(DD) {
-       var zD, wD;
- ... (20 more removed lines; see GitHub link above)
+       const ip = Dp(pp),
+         cp = null === ip || void 0 === ip ? void 0 : ip.ownerDbId,
+         Op = function(pp) {
+           var ip;
+           let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dp(pp);
+           const Op = Ap(pp),
+             op = Pp.get(Op);
+           return op ? op.lastOpened < (null !== (ip = null === cp || void 0 === cp ? void 0 : cp.passkeyLastUpdated) && void 0 !== ip ? ip : 0) ? (Pp.delete(Op), null) : [...op.Zx] : null
+         }(pp, ip);
+       return void 0 === cp ? {
+         cachedPasskey: Op
+       } : {
+         ownerDbId: cp,
+         cachedPasskey: Op
+       }
+     }(0, Yp.h)(Sp.d, (pp => {
+ ... (85 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L189-L207` → after: `L192-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L192-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L192-L200) · [Before (L189-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L189-L207)

```diff
-   38243: (DD, zD, wD) => {
-     DD.exports = function(DD, zD, wD) {
-       switch (arguments.length) {
-         case 1:
-           return pD = [], gD(sD = DD, sD, RD, !0), pD;
-         case 2:
-           return "function" === typeof zD ? gD(DD, DD, zD, !0) : function(DD, zD) {
-             return pD = [], gD(DD, zD, RD, !1), pD
-           }(DD, zD);
-         case 3:
-           return gD(DD, zD, wD, !1);
-         default:
-           throw new Error("box-intersect: Invalid arguments")
-       }
-       var sD
-     };
- ... (3 more removed lines; see GitHub link above)
+   40857: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Lp,
+       f: () => Sp,
+       i: () => xp
+     });
+     var Op = cp(40769),
+       op = cp(4886),
+       Ip = cp(40783);
```

#### 15. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L209-L212` → after: `L202-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L202-L205) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L209-L212)

```diff
-     function LD(DD, zD) {
-       for (var wD = 0; wD < DD; ++wD)
-         if (!(zD[wD] <= zD[wD + DD])) return !0;
-       return !1
+     function Sp() {
+       var pp;
+       const ip = null === (pp = (0, Ip.k)()) || void 0 === pp ? void 0 : pp.api.localId;
+       return void 0 === ip || ip === Op.Nc ? null : String(ip)
```

#### 16. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L215-L221` → after: `L208-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L208-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L208-L218) · [Before (L215-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L215-L221)

```diff
-     function cD(DD, zD, wD, pD) {
-       for (var sD = 0, KD = 0, rD = 0, cD = DD.length; rD < cD; ++rD) {
-         var gD = DD[rD];
-         if (!LD(zD, gD)) {
-           for (var RD = 0; RD < 2 * zD; ++RD) wD[sD++] = gD[RD];
-           pD[KD++] = rD
-         }
+     function xp(pp) {
+       const ip = (0, Ip.k)();
+       if (null !== ip) return pp(ip);
+       let cp = null;
+       const Op = (0, op.p)((() => {
+         const ip = (0, Ip.k)();
+         null !== ip && null === cp && (Op(), cp = pp(ip))
+       }));
+       return () => {
+         var pp;
+         Op(), null === (pp = cp) || void 0 === pp || pp()
```

#### 17. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L226-L244` → after: `L222-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L222-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L222-L235) · [Before (L226-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L226-L244)

```diff
-     function gD(DD, zD, wD, pD) {
-       var LD = DD.length,
-         gD = zD.length;
-       if (!(LD <= 0 || gD <= 0)) {
-         var RD = DD[0].length >>> 1;
-         if (!(RD <= 0)) {
-           var AD, UD = sD.mallocDouble(2 * RD * LD),
-             fD = sD.mallocInt32(LD);
-           if ((LD = cD(DD, RD, UD, fD)) > 0) {
-             if (1 === RD && pD) KD.init(LD), AD = KD.sweepComplete(RD, wD, 0, LD, UD, fD, 0, LD, UD, fD);
-             else {
-               var ID = sD.mallocDouble(2 * RD * gD),
-                 BD = sD.mallocInt32(gD);
-               (gD = cD(zD, RD, ID, BD)) > 0 && (KD.init(LD + gD), AD = 1 === RD ? KD.sweepBipartite(RD, wD, 0, LD, UD, fD, 0, gD, ID, BD) : rD(RD, wD, pD, LD, UD, fD, gD, ID, BD), sD.free(ID), sD.free(BD))
-             }
-             sD.free(UD), sD.free(fD)
- ... (3 more removed lines; see GitHub link above)
+     function Lp(pp, ip, cp) {
+       return {
+         current: () => {
+           const cp = (0, Ip.k)();
+           return null === cp ? ip : pp(cp)()
+         },
+         watch: ip => xp((Op => {
+           const op = pp(Op);
+           let Ip = op();
+           return ip(Ip), cp((() => {
+             const pp = op();
+             pp !== Ip && (Ip = pp, ip(pp))
+           }))
+         }))
```

#### 18. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L248-L249` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L247-L249) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L248-L249)

```diff
-     function RD(DD, zD) {
-       pD.push([DD, zD])
+     function Sp() {
+       var pp, ip;
+       return null !== (pp = null === (ip = (0, Op.k)()) || void 0 === ip ? void 0 : ip.itemBridgeSources) && void 0 !== pp ? pp : Ip.d
```

#### 19. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L266-L283` → after: `L253-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L253-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L253-L258) · [Before (L266-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L266-L283)

```diff
-       var zD = "bruteForce" + (DD ? "Full" : "Partial"),
-         pD = [],
-         rD = UD.slice();
-       DD || rD.splice(3, 0, sD);
-       var LD = ["function " + zD + "(" + rD.join() + "){"];
- 
-       function cD(zD, sD) {
-         var rD = function(DD, zD, pD) {
-           var sD = "bruteForce" + (DD ? "Red" : "Blue") + (zD ? "Flip" : "") + (pD ? "Full" : ""),
-             rD = ["function ", sD, "(", UD.join(), "){", "var ", KD, "=2*", wD, ";"],
-             LD = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
-             cD = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (pD ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
-           return DD ? rD.push(LD, "Q", ":", cD) : rD.push(cD, "Q", ":", LD), pD ? rD.push("if(y1<x0||x1<y0)continue;") : zD ? rD.push("if(y0<=x0||x1<y0)continue;") : rD.push("if(y0<x0||x1<y0)continue;"), rD.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b … [truncated]
-             name: sD,
-             code: rD.join("")
-           }
- ... (2 more removed lines; see GitHub link above)
+       return {
+         current: () => Sp().states[pp].current(),
+         watch: ip => (0, op.i)((cp => {
+           const Op = cp.itemBridgeSources.states[pp];
+           return ip(Op.current()), Op.watch(ip)
+         }))
```

#### 20. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L389-L411` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L262-L264) · [Before (L389-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L389-L411)

```diff
-     function XD(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
-       var gD = OD * DD;
-       ED[gD] = zD, ED[gD + 1] = wD, ED[gD + 2] = pD, ED[gD + 3] = sD, ED[gD + 4] = KD, ED[gD + 5] = rD;
-       var RD = JD * DD;
-       QD[RD] = LD, QD[RD + 1] = cD
-     }
- 
-     function VD(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
-       var AD = 2 * DD,
-         UD = cD * AD,
-         fD = gD[UD + zD];
-       DD: for (var ID = sD, BD = sD * AD; ID < KD; ++ID, BD += AD) {
-         var GD = rD[BD + zD],
-           hD = rD[BD + zD + DD];
-         if (!(fD < GD || hD < fD) && (!pD || fD !== GD)) {
-           for (var nD, MD = LD[ID], OD = zD + 1; OD < DD; ++OD) {
- ... (7 more removed lines; see GitHub link above)
+     function Lp(pp) {
+       return {
+         watch: ip => (0, op.i)((cp => cp.itemBridgeSources.events[pp].watch(ip)))
```

#### 21. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L414-L434` → after: `L267-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L267-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L267-L297) · [Before (L414-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L414-L434)

```diff
- 
-     function PD(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
-       var RD = 2 * DD,
-         AD = LD * RD,
-         UD = cD[AD + zD];
-       DD: for (var fD = pD, ID = pD * RD; fD < sD; ++fD, ID += RD) {
-         var BD = rD[fD];
-         if (BD !== gD) {
-           var GD = KD[ID + zD],
-             hD = KD[ID + zD + DD];
-           if (!(UD < GD || hD < UD)) {
-             for (var nD = zD + 1; nD < DD; ++nD) {
-               GD = KD[ID + nD], hD = KD[ID + nD + DD];
-               var MD = cD[AD + nD],
-                 OD = cD[AD + nD + DD];
-               if (hD < MD || OD < GD) continue DD
- ... (5 more removed lines; see GitHub link above)
+     const Yp = {
+       states: {
+         inventory: xp("inventory"),
+         hotbar: xp("hotbar"),
+         crafting: xp("crafting"),
+         heldItemAim: xp("heldItemAim")
+       },
+       events: {
+         hotbarSlotRequested: Lp("hotbarSlotRequested"),
+         hotbarScrolled: Lp("hotbarScrolled"),
+         numberKeyPressed: Lp("numberKeyPressed"),
+         inventoryDropRequested: Lp("inventoryDropRequested"),
+         chestToggled: Lp("chestToggled"),
+         chestRefreshed: Lp("chestRefreshed"),
+         inventorySynced: Lp("inventorySynced"),
+         enchantingTableOpened: Lp("enchantingTableOpened")
+ ... (15 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L438-L482` → after: `L301-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L301-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L301-L305) · [Before (L438-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L438-L482)

```diff
-   38297: (DD, zD, wD) => {
-     DD.exports = function(DD, zD, wD, rD, LD, cD) {
-       if (rD <= wD + 1) return wD;
-       var gD = wD,
-         RD = rD,
-         AD = rD + wD >>> 1,
-         UD = 2 * DD,
-         fD = AD,
-         ID = LD[UD * AD + zD];
-       for (; gD < RD;) {
-         if (RD - gD < sD) {
-           KD(DD, zD, gD, RD, LD, cD), ID = LD[UD * AD + zD];
-           break
-         }
-         var BD = RD - gD,
-           GD = Math.random() * BD + gD | 0,
- ... (29 more removed lines; see GitHub link above)
+   40865: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => xp
+     });
+     var Op = cp(39842);
```

#### 23. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L484-L489` → after: `L307-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L307-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L307-L446) · [Before (L484-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L484-L489)

```diff
-     function KD(DD, zD, wD, pD, sD, KD) {
-       for (var rD = 2 * DD, LD = rD * (wD + 1) + zD, cD = wD + 1; cD < pD; ++cD, LD += rD)
-         for (var gD = sD[LD], RD = cD, AD = rD * (cD - 1); RD > wD && sD[AD + zD] > gD; --RD, AD -= rD) {
-           for (var UD = AD, fD = AD + rD, ID = 0; ID < rD; ++ID, ++UD, ++fD) {
-             var BD = sD[UD];
-             sD[UD] = sD[fD], sD[fD] = BD
+     function op(pp) {
+       return {
+         current: () => pp,
+         watch: () => () => {}
+       }
+     }
+ 
+     function Ip() {}
+     const Sp = Object.freeze([0, 0, 0]),
+       xp = {
+         states: {
+           health: op({
+             health: null,
+             maxHealth: null,
+             shield: null,
+             maxShield: null
+ ... (124 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L491-L519` → after: `L448-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L448-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L448-L544) · [Before (L491-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L491-L519)

```diff
-           var GD = KD[RD];
-           KD[RD] = KD[RD - 1], KD[RD - 1] = GD
-         }
-     }
-   },
-   38305: DD => {
-     DD.exports = function(DD, wD) {
-       var pD = "abcdef".split("").concat(wD),
-         sD = [];
-       DD.indexOf("lo") >= 0 && sD.push("lo=e[k+n]");
-       DD.indexOf("hi") >= 0 && sD.push("hi=e[k+o]");
-       return pD.push(zD.replace("_", sD.join()).replace("$", DD)), Function.apply(void 0, pD)
-     };
-     var zD = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
-   },
-   38279: DD => {
- ... (13 more removed lines; see GitHub link above)
+         },
+         commands: {
+           selectHotbarSlot: Ip,
+           removeInventoryItem: () => !1,
+           swapInventorySlots: () => !1,
+           moveInventoryItem: () => !1,
+           quickMoveInventoryItem: () => null,
+           closeChest: Ip,
+           setInventoryOpen: Ip,
+           changeIronChestPasskey: Ip,
+           dragReplayCamera: Ip,
+           applyTemporaryThirdPerson: Ip,
+           holdEmoteWheel: Ip,
+           recordFlyingMiddleText: Ip,
+           focusCrafting: Ip,
+           craftRecipe: () => ({
+ ... (81 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L523-L541` → after: `L547-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L547-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L547-L569) · [Before (L523-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L523-L541)

```diff
-     }
- 
-     function pD(DD, zD, wD) {
-       zD *= 2;
-       var pD = wD[DD *= 2],
-         sD = wD[DD + 1];
-       wD[DD] = wD[zD], wD[DD + 1] = wD[zD + 1], wD[zD] = pD, wD[zD + 1] = sD
-     }
- 
-     function sD(DD, zD, wD) {
-       zD *= 2, wD[DD *= 2] = wD[zD], wD[DD + 1] = wD[zD + 1]
-     }
- 
-     function KD(DD, zD, wD, pD) {
-       zD *= 2, wD *= 2;
-       var sD = pD[DD *= 2],
- ... (3 more removed lines; see GitHub link above)
+   },
+   40778: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Rp,
+       g: () => mp,
+       j: () => qp,
+       m: () => kp,
+       o: () => ep
+     });
+     var Op = cp(39425),
+       op = cp(1234),
+       Ip = cp(1982),
+       Sp = cp(1996),
+       xp = cp(3400),
+       Lp = cp(37019),
+       Yp = cp(1349),
+ ... (7 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L543-L544` → after: `L571-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L571-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L571-L581) · [Before (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L543-L544)

```diff
-     function rD(DD, zD, wD, pD, sD) {
-       zD *= 2, sD[DD *= 2] = sD[zD], sD[zD] = wD, sD[DD + 1] = sD[zD + 1], sD[zD + 1] = pD
+     function vp(pp) {
+       const ip = new Map,
+         cp = cp => {
+           if ("string" !== typeof cp) return;
+           let Op = ip.get(cp);
+           return void 0 === Op && (Op = pp(cp), void 0 !== Op && ip.set(cp, Op)), Op
+         };
+       return new Proxy({}, {
+         get: (pp, ip) => cp(ip),
+         has: (pp, ip) => void 0 !== cp(ip)
+       })
```

#### 27. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L547-L551` → after: `L584-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L584-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L584-L586) · [Before (L547-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L547-L551)

```diff
-     function LD(DD, zD, wD) {
-       zD *= 2;
-       var pD = wD[DD *= 2],
-         sD = wD[zD];
-       return !(pD < sD) && (pD !== sD || wD[DD + 1] > wD[zD + 1])
+     function tp(pp) {
+       const ip = (0, xp.c)(pp);
+       return void 0 !== ip && (0, xp.d)(ip) === pp
```

#### 28. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L554-L557` → after: `L589-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L589-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L589-L607) · [Before (L554-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L554-L557)

```diff
-     function cD(DD, zD, wD, pD) {
-       var sD = pD[DD *= 2];
-       return sD < zD || sD === zD && pD[DD + 1] < wD
-     }
+     function Hp(pp) {
+       var ip;
+       const cp = null === (ip = (0, Dp.k)()) || void 0 === ip ? void 0 : ip.tables;
+       if (void 0 === cp || !tp(pp)) return;
+       const Op = {
+           displayName: cp.getDisplayName(pp)
+         },
+         op = cp.getItemStat(pp, "description");
+       void 0 !== op && null !== op && (Op.description = op);
+       const {
+         rootName: Ip
+       } = cp.getMetaInfo(pp);
+       Ip !== pp && (Op.rootName = Ip);
+       const Sp = cp.getItemStat(pp, "armourReduction");
+       return void 0 !== Sp && null !== Sp && (Op.armourReduction = Sp), Op
+     }(0, Dp.y)((pp => {
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L559-L673` → after: `L609-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L609-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L609-L624) · [Before (L559-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L559-L673)

```diff
-     function gD(DD, RD, AD) {
-       var UD = (RD - DD + 1) / 6 | 0,
-         fD = DD + UD,
-         ID = RD - UD,
-         BD = DD + RD >> 1,
-         GD = BD - UD,
-         hD = BD + UD,
-         nD = fD,
-         MD = GD,
-         OD = BD,
-         JD = hD,
-         ED = ID,
-         QD = DD + 1,
-         XD = RD - 1,
-         VD = 0;
-       LD(nD, MD, AD) && (VD = nD, nD = MD, MD = VD), LD(JD, ED, AD) && (VD = JD, JD = ED, ED = VD), LD(nD, OD, AD) && (VD = nD, nD = OD, OD = VD), LD(MD, OD, AD) && (VD = MD, MD = OD, OD = VD), LD(nD, JD, AD) && (VD = nD, nD = JD, JD = VD), LD(OD, JD, AD) && (VD = OD, OD = JD, JD … [truncated]
- ... (99 more removed lines; see GitHub link above)
+     function ep() {
+       return Boolean(Ip.c.get("useInventory") && Ip.c.get("useFullInventory"))
+     }
+     let jp = null;
+     const kp = {
+         inventory: function() {
+           const pp = Up.e.states.inventory;
+           let ip = null;
+           const cp = pp => {
+             var cp;
+             return null === pp.chest ? pp : ((null === (cp = ip) || void 0 === cp ? void 0 : cp.from) === pp && ip.chestVersion === (0, yp.b)() || (ip = {
+               from: pp,
+               chestVersion: (0, yp.b)(),
+               view: {
+                 ...pp,
+                 chest: (0, yp.h)(pp.chest)
```

#### 30. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L675-L678` → after: `L626-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L626-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L626-L632) · [Before (L675-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L675-L678)

```diff
-             0 === SD ? GD(cD, gD, TD++, iD) : 1 === SD ? GD(RD, AD, bD++, iD) : 2 === SD && GD(UD, fD, jD++, iD)
-           } else {
-             iD = (dD >> 1) - 1;
-             0 === SD ? BD(cD, gD, TD--, iD) : 1 === SD ? BD(RD, AD, bD--, iD) : 2 === SD && BD(UD, fD, jD--, iD)
+             }), ip.view)
+           };
+           return {
+             current: () => cp(pp.current()),
+             watch: ip => pp.watch((pp => {
+               ip(cp(pp))
+             }))
```

#### 31. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L680-L760` → after: `L634-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L634-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L634-L646) · [Before (L680-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L680-L760)

```diff
-         }
-       },
-       scanBipartite: function(DD, zD, wD, pD, sD, LD, RD, AD, UD, fD, hD, nD) {
-         var MD = 0,
-           OD = 2 * DD,
-           JD = zD,
-           ED = zD + DD,
-           QD = 1,
-           XD = 1;
-         pD ? XD = rD : QD = rD;
-         for (var VD = sD; VD < LD; ++VD) {
-           var PD = VD + QD,
-             CD = OD * VD;
-           ID[MD++] = RD[CD + JD], ID[MD++] = -PD, ID[MD++] = RD[CD + ED], ID[MD++] = PD
-         }
-         for (VD = UD; VD < fD; ++VD) {
- ... (65 more removed lines; see GitHub link above)
+         }(),
+         crafting: Up.e.states.crafting,
+         stationItems: {
+           current() {
+             var pp;
+             return (null === (pp = jp) || void 0 === pp ? void 0 : pp.namesVersion) !== (0, xp.g)() && (jp = {
+               namesVersion: (0, xp.g)(),
+               items: {
+                 enchantable: vp((pp => {
+                   const ip = (0, xp.c)(pp);
+                   return void 0 !== ip && null !== wp && wp.enchantmentPerksOf(ip).length > 0 || void 0
+                 })),
+                 salvageable: vp((pp => !(!tp(pp) || null === (0, Lp.b)(pp)) || void 0))
```

#### 32. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L762-L768` → after: `L648-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L648-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L648-L665) · [Before (L762-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L762-L768)

```diff
-             }
-           } else {
-             for (OD = VD - rD, bD = XD - 1; bD >= 0; --bD)
-               if (cD[bD] === OD) {
-                 for (iD = bD + 1; iD < XD; ++iD) cD[iD - 1] = cD[iD];
-                 break
-               }-- XD
+             }), jp.items
+           },
+           watch: () => () => {}
+         },
+         itemInfo: function() {
+           let pp = null;
+           const ip = () => {
+             var ip;
+             return (null === (ip = pp) || void 0 === ip ? void 0 : ip.namesVersion) !== (0, xp.g)() && (pp = {
+               namesVersion: (0, xp.g)(),
+               infos: vp(Hp)
+             }), pp.infos
+           };
+           return {
+             current: ip,
+             watch: cp => (0, Sp.v)((Op => {
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L770-L864` → after: `L667-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L667-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L667-L675) · [Before (L770-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L770-L864)

```diff
-         }
-       }
-     };
-     var pD = wD(38252),
-       sD = wD(38256),
-       KD = wD(38279),
-       rD = 1 << 28,
-       LD = 1024,
-       cD = pD.mallocInt32(LD),
-       gD = pD.mallocInt32(LD),
-       RD = pD.mallocInt32(LD),
-       AD = pD.mallocInt32(LD),
-       UD = pD.mallocInt32(LD),
-       fD = pD.mallocInt32(LD),
-       ID = pD.mallocDouble(8192);
- 
- ... (79 more removed lines; see GitHub link above)
+         }(),
+         creativeVisibility: (0, Sp.p)((function() {
+           const pp = {};
+           for (const op of null !== (ip = null === (cp = wp) || void 0 === cp ? void 0 : cp.creativeItemIds()) && void 0 !== ip ? ip : []) {
+             var ip, cp, Sp, Lp;
+             const Yp = (0, xp.d)(op);
+             if (void 0 === Yp) continue;
+             const Dp = null !== (Sp = Ip.c.get((0, Op.d)(Yp, "showInCreativeInven"))) && void 0 !== Sp ? Sp : null === (Lp = wp) || void 0 === Lp ? void 0 : Lp.showInCreativeInvenOf(op);
+             "boolean" === typeof Dp && (pp[Yp] = Dp)
```

#### 34. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L866-L869` → after: `L677-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L677-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L677-L679) · [Before (L866-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L866-L869)

```diff
-           DD.length = 0
-         }(LD.multiComps), LD.removals.length && function(DD) {
-           for (var zD = 0; zD < DD.length; zD++) {
-             DD[zD].flush()
+           return {
+             publicLobby: (0, op.I)((0, Yp.d)().lobbyName),
+             shownInGame: pp
```

#### 35. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L871-L971` → after: `L681-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L681-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L681-L724) · [Before (L871-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L871-L971)

```diff
-           DD.length = 0
-         }(LD.removals)
-       }
-       this.EB = sD, this._systems = KD, this._renderSystems = rD, this.RY = function(zD) {
-         var pD = wD++;
-         return Array.isArray(zD) && zD.forEach((zD => DD.UW(pD, zD))), pD
-       }, this.deleteEntity = function(zD) {
-         return Object.keys(sD).forEach((DD => {
-           sD[DD].hash[zD] && cD(zD, DD)
-         })), DD
-       }, this.YzD = function(DD) {
-         if (!DD) throw new Error("Missing component definition");
-         var wD = DD.name;
-         if (!wD) throw new Error("Component definition must have a name property.");
-         if ("string" !== typeof wD) throw new Error("Component name must be a string.");
-         if ("" === wD) throw new Error("Component name must be a non-empty string.");
- ... (85 more removed lines; see GitHub link above)
+         }), ["connectedGameChanged"], (0, Sp.i)("ShowInCreativeInven")),
+         fullInventory: (0, Sp.p)(ep, [], (0, Sp.l)("useInventory", "useFullInventory"))
+       },
+       mp = {
+         inventoryDropRequested: Up.e.events.inventoryDropRequested,
+         chestToggled: Up.e.events.chestToggled,
+         chestRefreshed: Up.e.events.chestRefreshed,
+         inventorySynced: Up.e.events.inventorySynced,
+         enchantingTableOpened: Up.e.events.enchantingTableOpened
+       },
+       Rp = {
+         removeInventoryItem: Up.e.commands.removeInventoryItem,
+         swapInventorySlots: Up.e.commands.swapInventorySlots,
+         moveInventoryItem: Up.e.commands.moveInventoryItem,
+         quickMoveInventoryItem: Up.e.commands.quickMoveInventoryItem,
+         closeChest: Up.e.commands.closeChest,
+ ... (28 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L973-L988` → after: `L726-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L726-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L726-L728) · [Before (L973-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L973-L988)

```diff
-         return DD
-       }, this.removeMultiComponent = function(wD, pD, KD) {
-         var rD = zD[pD],
-           cD = sD[pD];
-         if (!cD) throw new Error(`Unknown component: ${pD}.`);
-         if (!rD.multi) throw new Error("removeMultiComponent called on non-multi component");
-         return function(DD, zD, wD, pD) {
-           var sD = wD.hash[DD];
-           if (sD) {
-             var KD = sD[pD];
-             KD && (sD[pD] = null, zD.hT && zD.hT(DD, KD), LD.multiComps.push({
-               entID: DD,
-               data: wD
-             }), gD())
-           }
-         }(wD, rD, cD, KD), DD
+       },
+       qp = {
+         enchantingOffer: Up.e.queries.enchantingOffer
```

#### 37. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L993-L1004` → after: `L731-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L731-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L731-L740) · [Before (L993-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L993-L1004)

```diff
-   38211: DD => {
-     function zD(DD, zD) {
-       var wD = DD._map[zD];
-       if (delete DD.hash[zD], delete DD._map[zD], wD === DD.list.length - 1) DD.list.pop(), DD._idList.pop();
-       else {
-         var pD = DD.list.pop();
-         DD.list[wD] = pD;
-         var sD = DD._idList.pop();
-         DD._idList[wD] = sD, DD._map[sD] = wD
-       }
-     }
-     DD.exports = class {
+   40842: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op,
+       d: () => Dp,
+       f: () => Sp,
+       g: () => op,
+       i: () => xp,
+       l: () => Yp
+     });
+     class Op extends Error {
```

#### 38. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1006-L1026` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L742) · [Before (L1006-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1006-L1026)

```diff
-         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
-       }
-       add(DD, zD) {
-         if ("number" === typeof this._map[DD]) {
-           var wD = this._map[DD];
-           this.hash[DD] = zD, this.list[wD] = zD, this._idList[wD] = DD
-         } else this._map[DD] = this.list.length, this.hash[DD] = zD, this.list.push(zD), this._idList.push(DD)
-       }
-       remove(DD) {
-         var zD = this._map[DD];
-         this.hash[DD] = null, this.list[zD] = null, this._pendingRemovals.push(DD)
-       }
-       dispose() {
-         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
-       }
-       flush() {
- ... (5 more removed lines; see GitHub link above)
+         super(...arguments), this.name = "CoreCorruption"
```

#### 39. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1087-L1091` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L747) · [Before (L1087-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1087-L1091)

```diff
-       var zD = !1;
-       if (null != DD && "function" != typeof DD.toString) try {
-         zD = !!(DD + "")
-       } catch (wD) {}
-       return zD
+       return pp instanceof RangeError && /call stack/i.test(pp.message) || pp instanceof Error && "InternalError" === pp.name && /recursion/i.test(pp.message)
```

#### 40. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1095-L1099` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L752-L753) · [Before (L1095-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1095-L1099)

```diff
-       var zD = -1,
-         wD = Array(DD.size);
-       return DD.forEach((function(DD, pD) {
-         wD[++zD] = [pD, DD]
-       })), wD
+       var ip;
+       return pp instanceof WebAssembly.RuntimeError || pp instanceof Op || op(pp) && Ip.test(null !== (ip = pp.stack) && void 0 !== ip ? ip : "")
```

#### 41. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1103-L1105` → after: `L757-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L757-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L757-L758) · [Before (L1103-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1103-L1105)

```diff
-       return function(wD) {
-         return DD(zD(wD))
-       }
+       if (Sp(pp)) throw pp;
+       console.error(ip, pp)
```

#### 42. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1108-L1113` → after: `L761-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L761-L762) · [Before (L1108-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1108-L1113)

```diff
-     function vD(DD) {
-       var zD = -1,
-         wD = Array(DD.size);
-       return DD.forEach((function(DD) {
-         wD[++zD] = DD
-       })), wD
+     function Lp(pp, ip, cp, op, Ip) {
+       if (ip % op !== 0 || ip + cp > pp.byteLength) throw new Op(`${Ip}: ${cp} bytes at ${ip}, ${op}-aligned, outside ${pp.byteLength} bytes of memory`)
```

#### 43. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1151-L1157` → after: `L765-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L765-L766) · [Before (L1151-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1151-L1157)

```diff
-     function Cz(DD) {
-       var zD = -1,
-         wD = DD ? DD.length : 0;
-       for (this.clear(); ++zD < wD;) {
-         var pD = DD[zD];
-         this.set(pD[0], pD[1])
-       }
+     function Yp(pp, ip, cp, Op, op) {
+       return 0 === cp ? null : (Lp(ip, cp, Op * pp.BYTES_PER_ELEMENT, pp.BYTES_PER_ELEMENT, op), new pp(ip, cp, Op))
```

#### 44. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1160-L1166` → after: `L769-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L769-L770) · [Before (L1160-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1160-L1166)

```diff
-     function xz(DD) {
-       var zD = -1,
-         wD = DD ? DD.length : 0;
-       for (this.clear(); ++zD < wD;) {
-         var pD = DD[zD];
-         this.set(pD[0], pD[1])
-       }
+     function Dp(pp, ip, cp, Op, op) {
+       return 0 === ip ? null : (Lp(pp, ip, cp, Op, op), new DataView(pp, ip, cp))
```

#### 45. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1168-L1174` → after: `L772-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L772-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L772-L789) · [Before (L1168-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1168-L1174)

```diff
- 
-     function Tz(DD) {
-       var zD = -1,
-         wD = DD ? DD.length : 0;
-       for (this.clear(); ++zD < wD;) {
-         var pD = DD[zD];
-         this.set(pD[0], pD[1])
+   },
+   40783: (pp, ip, cp) => {
+     cp.d(ip, {
+       C: () => yp,
+       e: () => Op,
+       i: () => vp,
+       k: () => Up,
+       n: () => wp,
+       o: () => Pp,
+       q: () => Wp,
+       u: () => Dp,
+       y: () => Ap
+     });
+     class Op extends Error {
+       constructor(pp) {
+         super(`the join's code did not load: ${pp instanceof Error?pp.message:String(pp)}`, {
+ ... (2 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1177-L1202` → after: `L792-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L792-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L792-L796) · [Before (L1177-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1177-L1202)

```diff
- 
-     function bz(DD) {
-       this.__data__ = new xz(DD)
-     }
- 
-     function jz(DD, zD) {
-       var wD = vz(DD) || function(DD) {
-           return function(DD) {
-             return function(DD) {
-               return !!DD && "object" == typeof DD
-             }(DD) && tz(DD)
-           }(DD) && zz.call(DD, "callee") && (!gz.call(DD, "callee") || wz.call(DD) == KD)
-         }(DD) ? function(DD, zD) {
-           for (var wD = -1, pD = Array(DD); ++wD < DD;) pD[wD] = zD(wD);
-           return pD
-         }(DD.length, String) : [],
- ... (10 more removed lines; see GitHub link above)
+     let op = null,
+       Ip = null,
+       Sp = null;
+     const xp = [];
+     let Lp = null;
```

#### 47. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1205-L1297` → after: `L799-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L799-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L799-L802) · [Before (L1205-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1205-L1297)

```diff
-       for (var wD = DD.length; wD--;)
-         if (uz(DD[wD][0], zD)) return wD;
-       return -1
-     }
- 
-     function iz(DD, zD, wD, pD, sD, fD, nD) {
-       var jD;
-       if (pD && (jD = fD ? pD(DD, sD, fD, nD) : pD(DD)), void 0 !== jD) return jD;
-       if (!Hz(DD)) return DD;
-       var dD = vz(DD);
-       if (dD) {
-         if (jD = function(DD) {
-             var zD = DD.length,
-               wD = DD.constructor(zD);
-             zD && "string" == typeof DD[0] && zz.call(DD, "index") && (wD.index = DD.index, wD.input = DD.input);
-             return wD
- ... (77 more removed lines; see GitHub link above)
+       try {
+         pp(ip)
+       } catch (cp) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", cp)
```

#### 48. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1318-L1334` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L806) · [Before (L1318-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1318-L1334)

```diff
-     function lz(DD) {
-       return !(!Hz(DD) || (zD = DD, qD && qD in zD)) && (Yz(DD) || oD(DD) ? pz : jD).test(az(DD));
-       var zD
-     }
- 
-     function Wz(DD) {
-       var zD = new DD.constructor(DD.byteLength);
-       return new rz(zD).set(new rz(DD)), zD
-     }
- 
-     function Nz(DD, zD, wD, pD) {
-       wD || (wD = {});
-       for (var sD = -1, KD = zD.length; ++sD < KD;) {
-         var rD = zD[sD],
-           LD = pD ? pD(wD[rD], DD[rD], rD, wD, DD) : void 0;
-         dz(wD, rD, void 0 === LD ? DD[rD] : LD)
- ... (1 more removed lines; see GitHub link above)
+     function Dp() {
```

#### 49. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1427-L1428` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L811) · [Before (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1427-L1428)

```diff
-       var zD = DD && DD.constructor;
-       return DD === ("function" == typeof zD && zD.prototype || YD)
+       xp.push(pp), null !== Lp && Yp(pp, Lp)
```

#### 50. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1432-L1440` → after: `L815-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L815-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L815-L821) · [Before (L1432-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1432-L1440)

```diff
-       if (null != DD) {
-         try {
-           return Dz.call(DD)
-         } catch (zD) {}
-         try {
-           return DD + ""
-         } catch (zD) {}
-       }
-       return ""
+       return op ??= Promise.all([cp.e(73), cp.e(98), cp.e(226), cp.e(78), cp.e(227), cp.e(201), cp.e(97), cp.e(246), cp.e(273), cp.e(199), cp.e(214), cp.e(191), cp.e(198), cp.e(193), cp.e(144), cp.e(88), cp.e(122), cp.e(252), cp.e(57)]).then((() => cp(42870))).then((ip => {
+         ip.loadAudio(pp), Lp = ip;
+         for (const pp of xp) Yp(pp, ip);
+         return ip
+       })).catch((pp => {
+         throw op = null, pp
+       })), op
```

#### 51. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1442-L1459` → after: `L823-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L823-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L823-L828) · [Before (L1442-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1442-L1459)

```diff
- 
-     function uz(DD, zD) {
-       return DD === zD || DD !== DD && zD !== zD
-     }(Iz && mz(new Iz(new ArrayBuffer(1))) != OD || Bz && mz(new Bz) != RD || Gz && mz(Gz.resolve()) != fD || hz && mz(new hz) != BD || nz && mz(new nz) != nD) && (mz = function(DD) {
-       var zD = wz.call(DD),
-         wD = zD == UD ? DD.constructor : void 0,
-         pD = wD ? az(wD) : void 0;
-       if (pD) switch (pD) {
-         case Oz:
-           return OD;
-         case Jz:
-           return RD;
-         case Ez:
-           return fD;
-         case Qz:
-           return BD;
- ... (2 more removed lines; see GitHub link above)
+     async function Wp(pp, ip) {
+       try {
+         const cp = await Pp(pp);
+         await cp.loadClientGame(ip)
+       } catch (cp) {
+         throw new Op(cp)
```

#### 52. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1474-L1506` → after: `L832-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L832-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L832-L835) · [Before (L1474-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1474-L1506)

```diff
-     function Yz(DD) {
-       var zD = Hz(DD) ? wz.call(DD) : "";
-       return zD == cD || zD == gD
-     }
- 
-     function Hz(DD) {
-       var zD = typeof DD;
-       return !!DD && ("object" == zD || "function" == zD)
-     }
- 
-     function qz(DD) {
-       return tz(DD) ? jz(DD) : function(DD) {
-         if (!oz(DD)) return fz(DD);
-         var zD = [];
-         for (var wD in Object(DD)) zz.call(DD, wD) && "constructor" != wD && zD.push(wD);
-         return zD
- ... (17 more removed lines; see GitHub link above)
+     function yp(pp, ip) {
+       Ip = {
+         running: pp,
+         shell: ip
```

#### 53. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1523-L1527` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L839) · [Before (L1523-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1523-L1527)

```diff
-     function sD(DD) {
-       for (var zD, wD, sD = 0, KD = DD.length, rD = 0; rD < DD.length;) {
-         for (zD = DD[rD], wD = 0; rD < KD && DD[rD] === zD;) ++rD, ++wD;
-         sD += pD.log2(wD) / 7 | 0, sD += pD.log2(zD >>> 0) / 7 | 0, sD += 2
-       }
+     function Up() {
```

#### 54. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1530-L1539` → after: `L842-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L842-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L842-L850) · [Before (L1530-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1530-L1539)

```diff
-     zD.size = sD, zD.encode = function(DD, zD) {
-       zD || (zD = new Uint8Array(sD(DD)));
-       for (var wD, pD, KD = 0, rD = zD.length, LD = 0; LD < DD.length;) {
-         for (wD = DD[LD], pD = 0; LD < DD.length && DD[LD] === wD;) ++LD, ++pD;
-         for (; KD < rD && pD >= 128;) zD[KD++] = 128 + (127 & pD), pD >>>= 7;
-         if (KD >= rD) throw new Error("RLE buffer overflow");
-         for (zD[KD++] = pD, wD >>>= 0; KD < rD && wD >= 128;) zD[KD++] = 128 + (127 & wD), wD >>>= 7;
-         if (KD >= rD) throw new Error("RLE buffer overflow");
-         zD[KD++] = wD
-       }
+     async function wp(pp) {
+       const ip = Ip;
+       if ((null === ip || void 0 === ip ? void 0 : ip.running) !== pp) throw new Error("the core's session has ended");
+       const cp = await Pp(ip.shell.audio).catch((pp => {
+         throw new Op(pp)
+       }));
+       if (null !== Sp) return Sp;
+       if (Ip !== ip || pp.isStopped) throw new Error("the core stopped while the game code loaded");
+       if (Sp = cp.startGameHost(pp, ip.shell), null === Sp) throw new Error("the core's shared tables didn't read, so the game can't start");
```

#### 55. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1659-L1777` → after: `L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L853) · [Before (L1659-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1659-L1777)

```diff
-   },
-   37754: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => sD
-     });
-     var pD = wD(37079);
-     class sD {
-       constructor(DD, zD, wD, sD) {
-         this.normal = new pD.s(DD, zD, wD), this.d = sD
-       }
-       QpD() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new sD(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
- ... (103 more removed lines; see GitHub link above)
+ 
```

#### 56. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L1779-L1782` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/228.js#L855) · [Before (L1779-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/228.js#L1779-L1782)

```diff
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
-         const zD = 16 * Math.random() | 0;
-         return ("x" === DD ? zD : 3 & zD | 8).toString(16)
-       }))
+       null !== Sp && (null !== Lp ? Lp.endGameHost(Sp) : Sp.closeGame()), Sp = null, Ip = null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/229.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/229.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0)

#### 1. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L2)

```diff
- export const ids = [229, 235, 238];
+ export const ids = [229];
```

#### 2. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4-L103` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L4) · [Before (L4-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L4-L103)

```diff
-   40179: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => rD,
-       h: () => LD
-     });
-     var pD = wD(38662),
-       sD = wD(39939),
-       KD = wD(40148),
-       rD = {};
-     class LD {
-       constructor(DD) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = DD, this.checkInputs = () => {}
-       }
-       add(DD) {
-         const zD = DD.getSimpleName();
-         this.attached[zD] ? pD.d.Warn("camera input of type " + zD + " already exists on camera") : (this.attached[zD] = DD, DD.camera = this.camera, DD.checkInputs && (this.checkInputs = this._addCheckInputs(DD.checkInputs.bind(DD))), this.attachedToElement && DD.attachControl(t … [truncated]
- ... (84 more removed lines; see GitHub link above)
+   37134: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L108-L191` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L9-L26) · [Before (L108-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L108-L191)

```diff
-     var pD = wD(39921),
-       sD = wD(39927),
-       KD = wD(37079),
-       rD = wD(37273),
-       LD = wD(40189),
-       cD = wD(40155),
-       gD = wD(37134);
-     let RD = (() => {
-         var DD;
-         let zD, wD, cD = LD.c,
-           gD = [],
-           RD = [],
-           AD = [],
-           UD = [];
-         return DD = class extends cD {
-           constructor(DD, zD, wD, sD) {
- ... (68 more removed lines; see GitHub link above)
+     var Op = cp(4355),
+       op = cp(1476),
+       Ip = cp(62),
+       Sp = cp(6605),
+       xp = cp(4343),
+       Lp = cp(1308),
+       Yp = cp(1956),
+       Dp = cp(1929),
+       Ap = cp(1480),
+       Pp = cp(1201),
+       Wp = cp(37142),
+       yp = cp(1049),
+       Up = cp.n(yp),
+       wp = cp(1334),
+       vp = cp(1060),
+       tp = cp(1295),
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L194-L246` → after: `L29-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L29-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L29-L35) · [Before (L194-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L194-L246)

```diff
-       AD || (AD = !0, cD.b.AddNodeConstructor("Light_Type_3", ((DD, zD) => () => new RD(DD, KD.s.Zero(), zD))), (0, gD.i)("BABYLON.HemisphericLight", RD))
-     }
-   },
-   37267: (DD, zD, wD) => {
-     wD.d(zD, {
-       Color3: () => pD.d,
-       e: () => pD.h
-     });
-     var pD = wD(37273);
-     (0, pD.i)()
-   },
-   37752: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => sD
-     });
-     var pD = wD(37754);
- ... (37 more removed lines; see GitHub link above)
+       const {
+         t: pp
+       } = (0, Pp.H)(), [ip, cp] = (0, Ip.useState)(!1), [yp, ep] = (0, Ip.useState)(null), [kp, mp] = (0, Ip.useState)(1), [Rp, qp] = (0, Ip.useState)(!1), [Mp, Cp] = (0, Ip.useState)(!1), Ep = (0, Ip.useRef)(0), Xp = (0, Ip.useRef)(!1), lp = (0, Ip.useRef)(!1), Qp = (0, Ip.useRe … [truncated]
+ 
+       function Bp() {
+         const pp = null !== yp && void 0 !== yp ? yp : "Rested Speed";
+         Yp.gameBridge.send("wakeUp", Mp ? pp : null), Jp.current = null, cp(!1), ep(null), mp(1), qp(!1), Cp(!1)
```

#### 5. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L250` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L161) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L250)

```diff
-   37754: (DD, zD, wD) => {
+   40758: (pp, ip, cp) => {
```

#### 6. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L252` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L163) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L252)

```diff
-       e: () => sD
+       d: () => sp
```

#### 7. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L254` → after: `L165-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L165-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L165-L187) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L254)

```diff
-     var pD = wD(37079);
+     var Op = cp(25),
+       op = cp(34),
+       Ip = cp(4371),
+       Sp = cp(322),
+       xp = cp(1650),
+       Lp = cp(8310),
+       Yp = cp(4379),
+       Dp = cp(8835),
+       Ap = cp(8336),
+       Pp = cp(8320),
+       Wp = cp(8338),
+       yp = cp(1419),
+       Up = cp(1698),
+       wp = cp(8346),
+       vp = cp(8793),
+       tp = cp(8919),
+ ... (7 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L256-L315` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L189-L190) · [Before (L256-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L256-L315)

```diff
-       constructor(DD, zD, wD, sD) {
-         this.normal = new pD.s(DD, zD, wD), this.d = sD
-       }
-       QpD() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new sD(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let DD = this.normal.getHashCode();
-         return DD = 397 * DD ^ this.d, DD
-       }
- ... (44 more removed lines; see GitHub link above)
+       constructor() {
+         this.lostAtMs = null
```

#### 9. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L317-L319` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L192-L193) · [Before (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L317-L319)

```diff
-       static FromPoints(DD, zD, wD) {
-         const pD = new sD(0, 0, 0, 0);
-         return pD.copyFromPoints(DD, zD, wD), pD
+       update(pp, ip) {
+         return pp ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= ip, ip - this.lostAtMs >= 250)
```

#### 10. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L321-L330` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L195-L196) · [Before (L321-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L321-L330)

```diff
-       static FromPositionAndNormal(DD, zD) {
-         const wD = new sD(0, 0, 0, 0);
-         return this.FromPositionAndNormalToRef(DD, zD, wD)
-       }
-       static FromPositionAndNormalToRef(DD, zD, wD) {
-         return wD.normal.pC(zD), wD.normal.normalize(), wD.d = -DD.dot(wD.normal), wD
-       }
-       static SignedDistanceToPlaneFromPositionAndNormal(DD, zD, wD) {
-         const sD = -(zD.x * DD.x + zD.y * DD.y + zD.z * DD.z);
-         return pD.s.Dot(wD, zD) + sD
+       reset() {
+         this.lostAtMs = null
```

#### 11. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L353-L354` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L200-L201) · [Before (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L353-L354)

```diff
-       constructor(DD, zD, wD, pD) {
-         this.x = DD, this.y = zD, this.width = wD, this.height = pD
+       constructor(pp, ip) {
+         this.press = pp, this.release = ip, this.downAtMs = null, this.token = null, this.latched = !1
```

#### 12. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L356-L357` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L203-L205) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L356-L357)

```diff
-       toGlobal(DD, zD) {
-         return new pD(this.x * DD, this.y * zD, this.width * DD, this.height * zD)
+       update(pp, ip, cp, Op) {
+         if (pp && null === this.downAtMs) return this.downAtMs = cp, this.latched = Op, void(this.token = this.press(Op));
+         null !== this.downAtMs && (this.latched ? pp && this.end() : !ip && cp - this.downAtMs >= 40 && this.end())
```

#### 13. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L359-L360` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L207-L208) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L359-L360)

```diff
-       toGlobalToRef(DD, zD, wD) {
-         return wD.x = this.x * DD, wD.y = this.y * zD, wD.width = this.width * DD, wD.height = this.height * zD, this
+       isLatched() {
+         return null !== this.downAtMs && this.latched
```

#### 14. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L362-L363` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L210-L211) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L362-L363)

```diff
-       clone() {
-         return new pD(this.x, this.y, this.width, this.height)
+       unlatch() {
+         this.latched = !1
```

#### 15. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L365-L409` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L213-L214) · [Before (L365-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L365-L409)

```diff
-     }
-   },
-   40331: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => gD
-     });
-     var pD = wD(37079),
-       sD = wD(37273),
-       KD = wD(40335),
-       rD = wD(40348),
-       LD = wD(40364);
- 
-     function cD(DD) {
-       let zD = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
-       const wD = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
-         KD = [],
- ... (29 more removed lines; see GitHub link above)
+       cancel() {
+         null !== this.downAtMs && this.end()
```

#### 16. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L411-L425` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L216-L218) · [Before (L411-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L411-L425)

```diff
-       const hD = [cD / 2, gD / 2, RD / 2],
-         nD = GD.reduce(((DD, zD, wD) => DD.concat(zD * hD[wD % 3])), []),
-         MD = 0 === DD.sideOrientation ? 0 : DD.sideOrientation || rD.b.DEFAULTSIDE,
-         OD = DD.faceUV || new Array(6),
-         JD = DD.faceColors,
-         ED = [];
-       for (let rD = 0; rD < 6; rD++) void 0 === OD[rD] && (OD[rD] = new pD.t(0, 0, 1, 1)), JD && void 0 === JD[rD] && (JD[rD] = new sD.h(1, 1, 1, 1));
-       for (let pD = 0; pD < 6; pD++)
-         if (KD.push(OD[pD].z, LD.e ? 1 - OD[pD].w : OD[pD].w), KD.push(OD[pD].x, LD.e ? 1 - OD[pD].w : OD[pD].w), KD.push(OD[pD].x, LD.e ? 1 - OD[pD].y : OD[pD].y), KD.push(OD[pD].z, LD.e ? 1 - OD[pD].y : OD[pD].y), JD)
-           for (let DD = 0; DD < 4; DD++) ED.push(JD[pD].r, JD[pD].g, JD[pD].b, JD[pD].a);
-       rD.b._ComputeSides(MD, nD, zD, wD, KD, DD.frontUVs, DD.backUVs);
-       const QD = new rD.b;
-       if (QD.indices = zD, QD.positions = nD, QD.normals = wD, QD.uvs = KD, JD) {
-         const DD = MD === rD.b.DOUBLESIDE ? ED.concat(ED) : ED;
-         QD.colors = DD
+       end() {
+         const pp = this.token;
+         this.downAtMs = null, this.token = null, this.latched = !1, this.release(pp)
```

#### 17. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L437-L480` → after: `L221-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L221-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L221-L286) · [Before (L437-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L437-L480)

```diff
-     let RD = !1;
-     RD || (RD = !0, rD.b.CreateBox = cD, KD.e.CreateBox = function(DD, zD) {
-       return gD(DD, {
-         size: zD,
-         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
-         updatable: arguments.length > 3 ? arguments[3] : void 0
-       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
-     })
-   },
-   40382: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => AD
-     });
-     var pD = wD(37079),
-       sD = wD(40335),
-       KD = wD(40348),
- ... (28 more removed lines; see GitHub link above)
+     const Cp = {
+         kind: "specialAction",
+         action: "SpecialAction2"
+       },
+       Ep = pp => {
+         let ip = null;
+         const cp = new Rp.e,
+           Op = () => {
+             ip && (((pp, ip, cp) => {
+               switch (cp.kind) {
+                 case "reload":
+                   return void ip.specialActionUp("SpecialAction1");
+                 case "specialAction":
+                   return void ip.specialActionUp(cp.action);
+                 case "customButton":
+                   return void ep.gameBridge.send("pressCustomButton", {
+ ... (50 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L484-L523` → after: `L289-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L289-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L289-L310) · [Before (L484-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L484-L523)

```diff
-       }
-       const cD = new KD.b;
-       return cD.indices = zD, cD.positions = wD, sD && (cD.colors = rD), cD
-     }
- 
-     function RD(DD) {
-       const zD = DD.dashSize || 3,
-         wD = DD.gapSize || 1,
-         sD = DD.dashNb || 200,
-         rD = DD.points,
-         LD = [],
-         cD = [],
-         gD = pD.s.Zero();
-       let RD, AD, UD, fD = 0,
-         ID = 0;
-       for (UD = 0; UD < rD.length - 1; UD++) rD[UD + 1].subtractToRef(rD[UD], gD), fD += gD.length();
- ... (24 more removed lines; see GitHub link above)
+       };
+     var Xp = cp(8290);
+     var lp = cp(40751),
+       Qp = cp(8883),
+       Jp = cp(8334),
+       Bp = cp(8972);
+     var Np = cp(40747),
+       Tp = cp(8979),
+       fp = cp(40763),
+       bp = cp(8952),
+       hp = cp(8885),
+       ap = cp(8887),
+       np = cp(8890),
+       Fp = cp(8801),
+       gp = cp(8858);
+     const Gp = () => Fp.e[(0, Pp.h)().tapHoldTime].wheelMs,
+ ... (6 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L525-L563` → after: `L312-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L312-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L312-L342) · [Before (L525-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L525-L563)

```diff
-         return pD.updateVerticesData(LD.k.PositionKind, DD, !1, !1), KD && zD && pD.updateVerticesData(LD.k.ColorKind, zD, !1, !1), pD.refreshBoundingInfo(), pD
-       }
-       const cD = !!KD,
-         RD = new rD.c(DD, wD, null, void 0, void 0, cD, zD.useVertexAlpha, zD.material);
-       return gD(zD).applyToMesh(RD, zD.updatable), RD
-     }
- 
-     function UD(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const pD = zD.colors ? [zD.colors] : null;
-       return AD(DD, {
-         lines: [zD.points],
-         updatable: zD.updatable,
-         instance: zD.instance,
-         colors: pD,
-         useVertexAlpha: zD.useVertexAlpha,
- ... (23 more removed lines; see GitHub link above)
+       }), (pp => {
+         let {
+           bodies: ip,
+           press: Op
+         } = pp;
+         cp(ip, Op)
+       })),
+       zp = {
+         running: !1,
+         latchedAtMs: -1 / 0
+       },
+       sp = pp => {
+         const ip = {
+           x: 0,
+           y: 0,
+           magnitude: 0,
+ ... (15 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L565` → after: `L344-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L344-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L344-L492) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L565)

```diff
-         return (zD.dashNb || zD.dashSize || zD.gapSize || zD.useVertexAlpha || zD.material) && cD.d.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), LD.updateMeshPositions(DD, !1), LD
+         let Cp = !1;
+         const gp = new qp,
+           sp = pp.look,
+           Kp = new Rp.e,
+           Vp = new Rp.e,
+           ii = Ep(pp),
+           ci = op.m.subscribe(dp.t, (ip => {
+             ii.pressPicked(pp.bodies(), ip)
+           })),
+           Oi = Zp(pp, ((pp, ip) => pp.primaryFireDown(!ip)), ((pp, ip) => {
+             pp.primaryFireUp(ip)
+           })),
+           oi = Zp(pp, (pp => pp.altFireDown()), ((pp, ip) => {
+             pp.altFireUp(ip)
+           }));
+         let Ii = !1,
+ ... (133 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L588` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L495) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L588)

```diff
-   40390: (DD, zD, wD) => {
+   40751: (pp, ip, cp) => {
```

#### 22. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L590-L591` → after: `L497-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L497-L499) · [Before (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L590-L591)

```diff
-       c: () => UD,
-       g: () => BD
+       b: () => yp,
+       e: () => wp,
+       i: () => Wp
```

#### 23. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L593-L624` → after: `L501-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L501-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L501-L524) · [Before (L593-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L593-L624)

```diff
-     var pD, sD, KD = wD(37273),
-       rD = wD(40066),
-       LD = wD(40335),
-       cD = wD(40394),
-       gD = wD(40220),
-       RD = wD(40397),
-       AD = wD(39808);
-     class UD extends LD.e {
-       _isShaderMaterial(DD) {
-         return !!DD && "ShaderMaterial" === DD.getClassName()
-       }
-       constructor(DD) {
-         let zD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           pD = arguments.length > 5 ? arguments[5] : void 0,
-           sD = arguments.length > 6 ? arguments[6] : void 0,
-           LD = arguments.length > 7 ? arguments[7] : void 0;
- ... (16 more removed lines; see GitHub link above)
+     var Op = cp(1308),
+       op = cp(4371),
+       Ip = cp(8900),
+       Sp = cp(37134),
+       xp = cp(1749),
+       Lp = cp(1198),
+       Yp = cp(8346),
+       Dp = cp(8843),
+       Ap = cp(8928);
+     const Pp = {
+         emoteWheel: Ip.f,
+         quickChatWheel: Dp.d,
+         actionWheel: Ap.x
+       },
+       Wp = Object.keys(Pp),
+       yp = "dead",
+ ... (8 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L627-L640` → after: `L527-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L527-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L527-L550) · [Before (L627-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L627-L640)

```diff
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(DD) {
-         const zD = this.material;
-         if (zD === DD) return;
-         const wD = zD && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(DD), wD && zD?.dispose()
-       }
-       _setInternalMaterial(DD) {
-         this._setMaterial(DD), this.material && (this.material.fillMode = gD.b.LineListDrawMode, this.material.disableLighting = !0)
+   },
+   40747: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op,
+       f: () => Lp,
+       h: () => xp,
+       l: () => Dp,
+       m: () => Sp,
+       o: () => Ip,
+       q: () => Yp,
+       t: () => Ap
+     });
+     var Op = cp(8298);
+     class op {
+       constructor() {
+         this.fullTiltSinceMs = null
+ ... (8 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L642-L643` → after: `L552-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L552-L553) · [Before (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L642-L643)

```diff
-       get checkCollisions() {
-         return !1
+       reset() {
+         this.fullTiltSinceMs = null
```

#### 26. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L645-L655` → after: `L555-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L555-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L555-L582) · [Before (L645-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L645-L655)

```diff
-       set checkCollisions(DD) {}
-       _bind(DD, zD) {
-         if (!this._geometry) return this;
-         const wD = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
-         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(zD, wD) : this._geometry._bind(zD, wD, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
-           const {
-             r: DD,
-             g: zD,
-             b: wD
-           } = this.color;
-           this._color4.set(DD, zD, wD, this.alpha), this.material.setColor4("color", this._color4)
+     }
+     const Ip = (pp, ip, cp, op, Ip) => {
+         let Sp = 1;
+         return "boost" === cp.lookCurve ? Sp = pp.update(ip, cp, Ip) : pp.reset(),
+           function(pp, ip) {
+             let {
+               yawBoost: cp = 1,
+               aiming: op = !1
+             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+             const Ip = (0, Op.d)((0, Op.h)(pp, ip.lookDeadzone), ip.lookCurve),
+               Sp = 220 * Math.PI / 180,
+               xp = op ? ip.aimLookSensitivity / 100 : 1,
+               Lp = ip.lookSensitivityX / 100 * xp,
+               Yp = ip.lookSensitivityY / 100 * xp;
+             return {
+               yawRadPerSec: Ip.x * Sp * Lp * cp * (ip.invertLookX ? -1 : 1),
+ ... (12 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L657-L673` → after: `L584-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L584-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L584-L600) · [Before (L657-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L657-L673)

```diff
-         return this
-       }
-       _draw(DD, zD, wD) {
-         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
-         const pD = this.Ul().iI();
-         return this._unIndexed ? pD.drawArraysType(gD.b.LineListDrawMode, DD.verticesStart, DD.verticesCount, wD) : pD.drawElementsType(gD.b.LineListDrawMode, DD.indexStart, DD.indexCount, wD), this
-       }
-       dispose(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || zD) && this.material?.dispose(!1, !1, !0), super.dispose(DD)
-       }
-       clone(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           wD = arguments.length > 2 ? arguments[2] : void 0;
-         if (zD && void 0 === zD._addToSceneRootNodes) {
-           const wD = zD;
- ... (1 more removed lines; see GitHub link above)
+       },
+       xp = (pp, ip) => ip ? {
+         move: pp.rightStick,
+         look: pp.leftStick
+       } : {
+         move: pp.leftStick,
+         look: pp.rightStick
+       },
+       Lp = (pp, ip) => {
+         const cp = (0, Op.h)(pp, ip),
+           op = Math.min(1, Math.hypot(cp.x, cp.y));
+         return {
+           magnitude: op,
+           speed: Math.min(1, op / .8),
+           headingOffset: 0 === op ? 0 : Math.atan2(cp.x, -cp.y),
+           x: cp.x,
+ ... (1 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L675-L681` → after: `L602-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L602-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L602-L627) · [Before (L675-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L675-L681)

```diff
-         return new UD(DD, this.Ul(), zD, this, wD)
-       }
-       createInstance(DD) {
-         const zD = new fD(DD, this);
-         if (this.iW) {
-           zD.iW = {};
-           for (const DD in this.iW) zD.iW[DD] = this.iW[DD]
+       },
+       Yp = (pp, ip) => {
+         let {
+           sprintPressed: cp,
+           magnitude: Op,
+           autoSprint: op,
+           nowMs: Ip
+         } = ip;
+         const Sp = cp ? Ip : pp.latchedAtMs,
+           xp = (pp => {
+             let {
+               running: ip,
+               magnitude: cp,
+               sprintPressed: Op,
+               autoSprint: op
+             } = pp;
+ ... (10 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L683-L706` → after: `L629-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L629-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L629-L637) · [Before (L683-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L683-L706)

```diff
-         return zD
-       }
-       serialize(DD) {
-         super.serialize(DD), DD.color = this.color.QpD(), DD.alpha = this.alpha
-       }
-       static Parse(DD, zD) {
-         const wD = new UD(DD.name, zD);
-         return wD.color = KD.d.FromArray(DD.color), wD.alpha = DD.alpha, wD
-       }
-     }
-     UD.ForceGLSL = !1;
-     class fD extends cD.e {
-       constructor(DD, zD) {
-         super(DD, zD), this.intersectionThreshold = zD.intersectionThreshold
-       }
-       getClassName() {
- ... (8 more removed lines; see GitHub link above)
+       },
+       Dp = (pp, ip, cp) => cp && pp.gyroAiming && "button" === pp.gyroActivation && pp.gyroButton !== ip ? pp.gyroButton : null,
+       Ap = (pp, ip) => ip ? {
+         ...pp,
+         isHeld: cp => cp !== ip && pp.isHeld(cp),
+         wasPressed: cp => cp !== ip && pp.wasPressed(cp),
+         wasReleased: cp => cp !== ip && pp.wasReleased(cp),
+         value: cp => cp === ip ? 0 : pp.value(cp)
+       } : pp
```

#### 30. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L708` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L639) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L708)

```diff
-   38658: (DD, zD, wD) => {
+   40763: (pp, ip, cp) => {
```

#### 31. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L710` → after: `L641-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L641-L642) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L710)

```diff
-       e: () => KD
+       d: () => op,
+       g: () => Op
```

#### 32. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L712-L715` → after: `L644-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L644-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L644-L667) · [Before (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L712-L715)

```diff
-     var pD = wD(38662);
-     const sD = (DD, zD, wD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : wD && "object" === typeof DD ? {
-       ...DD
-     } : null : DD.clone(zD) : null;
+     const Op = pp => {
+       let {
+         mode: ip,
+         sneakHeld: cp,
+         sneakPressed: Op,
+         sneakTogglePressed: op,
+         descending: Ip,
+         canCrouch: Sp,
+         toggled: xp
+       } = pp;
+       return Sp ? Ip ? {
+         crouchHeld: cp,
+         toggled: !1
+       } : "hold" === ip ? {
+         crouchHeld: cp,
+         toggled: op ? !xp : xp
+ ... (8 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L717-L746` → after: `L669-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L669-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L669-L681) · [Before (L717-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L717-L746)

```diff
-       static DeepCopy(DD, zD, wD, KD) {
-         let rD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const LD = function(DD) {
-           const zD = [];
-           do {
-             const wD = Object.getOwnPropertyNames(DD);
-             for (const DD of wD) - 1 === zD.indexOf(DD) && zD.push(DD)
-           } while (DD = Object.getPrototypeOf(DD));
-           return zD
-         }(DD);
-         for (const gD of LD) {
-           if ("_" === gD[0] && (!KD || -1 === KD.indexOf(gD))) continue;
-           if (gD.endsWith("Observable")) continue;
-           if (wD && -1 !== wD.indexOf(gD)) continue;
-           const LD = DD[gD],
-             RD = typeof LD;
- ... (14 more removed lines; see GitHub link above)
+       constructor() {
+         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
+       }
+       lostToPadScreen() {
+         this.regainPending = !0
+       }
+       filter(pp, ip) {
+         this.regainPending && (this.regainPending = !1, this.regainedAtMs = ip, this.graceEndsMs = ip + 500);
+         const cp = ip < this.graceEndsMs;
+         return cp && (pp.sneakPressed || pp.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, ip + 300))), pp.sneakHeld ? cp && pp.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
+           sneakHeld: pp.sneakHeld && !this.ignoringHeld,
+           sneakPressed: pp.sneakPressed && !this.ignoringHeld,
+           sneakTogglePressed: pp.sneakTogglePressed && !cp
```

#### 34. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L751-L760` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L686-L687) · [Before (L751-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L751-L760)

```diff
-   37891: (DD, zD, wD) => {
-     function pD() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
-         const zD = 16 * Math.random() | 0;
-         return ("x" === DD ? zD : 3 & zD | 8).toString(16)
-       }))
-     }
-     wD.d(zD, {
-       c: () => pD
-     })
+   40736: (pp, ip, cp) => {
+     cp(8979)
```

#### 35. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L762` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L689) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L762)

```diff
-   38662: (DD, zD, wD) => {
+   40739: (pp, ip, cp) => {
```

#### 36. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L764` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L691) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L764)

```diff
-       d: () => pD
+       e: () => Hp
```

#### 37. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L766-L815` → after: `L693-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L693-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/229.js#L693-L777) · [Before (L766-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/229.js#L766-L815)

```diff
-     class pD {
-       static _CheckLimit(DD, zD) {
-         let wD = pD._LogLimitOutputs[DD];
-         return wD ? wD.current++ : (wD = {
-           limit: zD,
-           current: 1
-         }, pD._LogLimitOutputs[DD] = wD), wD.current <= wD.limit
-       }
-       static _GenerateLimitMessage(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const wD = pD._LogLimitOutputs[DD];
-         if (!wD || !pD.MessageLimitReached) return;
-         const sD = this._Levels[zD];
-         wD.current === wD.limit && pD[sD.name](pD.MessageLimitReached.replace(/%LIMIT%/g, "" + wD.limit).replace(/%TYPE%/g, sD.name ?? ""))
-       }
-       static _AddLogEntry(DD) {
- ... (34 more removed lines; see GitHub link above)
+     var Op = cp(34),
+       op = cp(8900),
+       Ip = cp(8917),
+       Sp = cp(8310),
+       xp = cp(8336),
+       Lp = cp(8320),
+       Yp = cp(40747),
+       Dp = cp(40751),
+       Ap = cp(8346),
+       Pp = cp(8298),
+       Wp = cp(8843),
+       yp = cp(8928);
+     const Up = [{
+         isOpen: op.h,
+         openButton: () => (0, Sp.g)("emoteWheel"),
+         aim: pp => {
+ ... (69 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/230.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/230.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26)

#### 1. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L2)

```diff
- export const ids = [230, 235];
+ export const ids = [230];
```

#### 2. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L4)

```diff
-   41744: (DD, zD, wD) => {
+   38690: (pp, ip, cp) => {
```

#### 3. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L6)

```diff
-       d: () => rD
+       b: () => yp
```

#### 4. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L8-L23` → after: `L8-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L8-L15) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L8-L23)

```diff
-     var pD = wD(41678),
-       sD = wD(39918);
-     let KD = !1;
- 
-     function rD() {
-       KD || (KD = !0, sD.d.prototype._sphericalPolynomialTargetSize = 0, sD.d.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(sD.d.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = pD.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = DD, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
+     var Op = cp(195),
+       op = cp(37861);
+     const Ip = 1.2,
+       Sp = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
```

#### 5. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L25-L26` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L17-L19) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L25-L26)

```diff
-         set: function(DD) {
-           this._texture && (this._texture._sphericalPolynomial = DD)
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
```

#### 6. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L28-L83` → after: `L21-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L21-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L21-L610) · [Before (L28-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L28-L83)

```diff
-         enumerable: !0,
-         configurable: !0
-       }))
-     }
-   },
-   37267: (DD, zD, wD) => {
-     wD.d(zD, {
-       Color3: () => pD.d,
-       e: () => pD.h
-     });
-     var pD = wD(37273);
-     (0, pD.i)()
-   },
-   37752: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => sD
- ... (40 more removed lines; see GitHub link above)
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         Gx: .5,
+         bip: !1
+       },
+       xp = {
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 1.8,
+           height: 2.6
+         },
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+ ... (574 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L86` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L613) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L86)

```diff
-   37754: (DD, zD, wD) => {
+   37286: (pp, ip, cp) => {
```

#### 8. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L88` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L615) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L88)

```diff
-       e: () => sD
+       b: () => Op
```

#### 9. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L90-L166` → after: `L617-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L617-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L617-L773) · [Before (L90-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L90-L166)

```diff
-     var pD = wD(37079);
-     class sD {
-       constructor(DD, zD, wD, sD) {
-         this.normal = new pD.s(DD, zD, wD), this.d = sD
-       }
-       QpD() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new sD(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let DD = this.normal.getHashCode();
- ... (61 more removed lines; see GitHub link above)
+     const Op = {
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

#### 10. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L171-L184` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L777) · [Before (L171-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L171-L184)

```diff
-   37070: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       Matrix: () => pD.e,
-       Quaternion: () => pD.i,
-       RegisterMathVector: () => pD.k,
-       TmpVectors: () => pD.n,
-       Vector2: () => pD.r,
-       WI: () => pD.s,
-       Vector4: () => pD.t
-     });
-     var pD = wD(37079);
-     (0, pD.k)()
-   },
-   38074: (DD, zD, wD) => {
+   37868: (pp, ip, cp) => {
```

#### 11. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L188-L244` → after: `L781-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L781-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L781-L856) · [Before (L188-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L188-L244)

```diff
-     class pD {
-       constructor(DD, zD, wD, pD) {
-         this.x = DD, this.y = zD, this.width = wD, this.height = pD
-       }
-       toGlobal(DD, zD) {
-         return new pD(this.x * DD, this.y * zD, this.width * DD, this.height * zD)
-       }
-       toGlobalToRef(DD, zD, wD) {
-         return wD.x = this.x * DD, wD.y = this.y * zD, wD.width = this.width * DD, wD.height = this.height * zD, this
-       }
-       clone() {
-         return new pD(this.x, this.y, this.width, this.height)
-       }
-     }
-   },
-   41678: (DD, zD, wD) => {
- ... (41 more removed lines; see GitHub link above)
+     var Op = cp(343),
+       op = cp.n(Op),
+       Ip = cp(1927);
+     let Sp;
+     var xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up;
+     const wp = ["b", 0, 1, 8, "c", 101, 171, "g", 21, "f", 4, 255, "length", 104, 64, "e", "undefined", void 0, 42, 2, "a", 63, 6, "fromCodePoint", 7, 12, "push", 201, 3, 118, 91, 8191, 88, 13, 14, 5, 174, 43, 44, !1, !0, "h", "i", "d", 127, 124, 128, 136, 137, 138, null, 132, 13 … [truncated]
+ 
+     function vp(...pp) {
+       return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = function(...pp) {
+         for (Cp(pp[wp[12]] = wp[2], pp[-wp[5]] = '_}waFeY!JM(@f%R~y/X56mEt9K8dx,N)lBrj+hZ&s^D[{v7;#z.A*4|LIucWQ3Onob2=>:`0"?TGVqPHp]ig1$<USCk', pp[wp[0]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[wp[0]].length, pp[wp[10]] = [], pp[-wp[8]] = wp[1], pp[wp[9]] = wp[1], pp[wp[7]] = -w … [truncated]
+           if (pp[-wp[6]] = pp[-wp[5]].indexOf(pp[wp[0]][pp[wp[3]]]), pp[-wp[6]] !== -wp[2])
+             if (pp[wp[7]] < wp[1]) pp[wp[7]] = pp[-wp[6]];
+             else {
+               Cp(pp[wp[7]] += pp[-wp[6]] * wp[30], pp[-wp[8]] |= pp[wp[7]] << pp[wp[9]], pp[wp[9]] += (pp[wp[7]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
+               do {
+                 Cp(pp[wp[10]].push(pp[-wp[8]] & wp[11]), pp[-wp[8]] >>= wp[3], pp[wp[9]] -= wp[3])
+ ... (60 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L246-L263` → after: `L858-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L858-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L858-L961) · [Before (L246-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L246-L263)

```diff
-             const UD = {
-               size: AD,
-               right: KD,
-               left: sD,
-               up: rD,
-               down: cD,
-               front: gD,
-               back: RD,
-               format: 5,
-               type: sD instanceof Float32Array ? 1 : 0,
-               gammaSpace: ID
-             };
-             DD(this.ConvertCubeMapToSphericalPolynomial(UD))
-           }))
-         }))
-       }
- ... (2 more removed lines; see GitHub link above)
+             return Sp > -wp[2] && Op.push((op | Sp << Ip) & wp[11]), tp(Op)
+           }(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
+         }
+         pp[wp[12]] = wp[28], vp(119) in Hp && function() {
+           var pp, ip, cp, Op = function(...ip) {
+             return Cp(ip[wp[12]] = wp[2], ip[wp[2]] = []), (ip[wp[1]] === wp[2] || ip[wp[1]] >= wp[10]) && pp(ip[wp[2]], [], ip[wp[1]], wp[1]), ip[wp[2]]
+           };
+           Cp(pp = function(...Op) {
+             for (Op[wp[12]] = wp[10], Op[wp[10]] = Op[wp[28]]; Op[wp[10]] < Op[wp[19]]; Op[wp[10]]++) {
+               if (Op[wp[2]].length !== Op[wp[10]]) return;
+               for (Op[wp[35]] = wp[1]; Op[wp[35]] < Op[wp[19]]; Op[wp[35]]++) cp(Op[wp[2]], [Op[wp[10]], Op[wp[35]]]) && (Cp(Op[wp[2]].push([Op[wp[10]], Op[wp[35]]]), pp(Op[wp[1]], Op[wp[2]], Op[wp[19]], Op[wp[10]] + wp[2])), Op[wp[2]].length === Op[wp[19]] && Op[wp[1]].push(ip(O … [truncated]
+             }
+           }, ip = function(...pp) {
+             for (Cp(pp[wp[12]] = wp[2], pp[-wp[37]] = [], pp[wp[19]] = pp[wp[1]].length), pp[-wp[36]] = wp[1]; pp[-wp[36]] < pp[wp[19]]; pp[-wp[36]]++)
+               for (pp[-wp[37]][pp[-wp[36]]] = "", pp[wp[38]] = wp[1]; pp[wp[38]] < pp[wp[19]]; pp[wp[38]]++) pp[-wp[37]][pp[-wp[36]]] += pp[wp[1]][pp[-wp[36]]][wp[2]] === pp[wp[38]] ? "Q" : ".";
+             return pp[-wp[37]]
+ ... (88 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L265-L282` → after: `L963-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L963-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L963-L998) · [Before (L265-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L265-L282)

```diff
-       static _DownsampleFace(DD, zD, wD, pD) {
-         const sD = DD instanceof Float32Array ? DD : Float32Array.from(DD),
-           KD = wD * wD * pD,
-           rD = new Float32Array(KD),
-           LD = zD / wD,
-           cD = 1 / (LD * LD);
-         for (let RD = 0; RD < wD; RD++) {
-           const DD = Math.floor(RD * LD),
-             KD = Math.floor((RD + 1) * LD);
-           for (let gD = 0; gD < wD; gD++) {
-             const AD = Math.floor(gD * LD),
-               UD = Math.floor((gD + 1) * LD),
-               fD = (RD * wD + gD) * pD;
-             for (let wD = 0; wD < pD; wD++) {
-               let LD = 0;
-               for (let rD = DD; rD < KD; rD++)
- ... (2 more removed lines; see GitHub link above)
+       const Xp = mp;
+       Cp(op()[Pp(164)](Xp, dp, qp), Xp[wp[2]] = wp[1]);
+       let lp = op()[Pp(165)](Xp);
+       if (!Rp) {
+         function gp(...pp) {
+           for (Cp(pp[wp[12]] = wp[2], pp[wp[74]] = 'G}u$<_Dn7W36V,:vo9eCM8@YXObhzmi+BZUH!Sl`[EL|{p(J/T;xqF~Ar1t4N&d>%P.?Q=gka2^jcf5#Is*0wR]y"K)', pp[-wp[75]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[-wp[75]].length, pp[wp[43]] = [], pp[wp[78]] = wp[1], pp[wp[9]] = wp[1], pp[wp[77 … [truncated]
+             if (pp[wp[76]] = pp[wp[74]].indexOf(pp[-wp[75]][pp[wp[41]]]), pp[wp[76]] !== -wp[2])
+               if (pp[wp[77]] < wp[1]) pp[wp[77]] = pp[wp[76]];
+               else {
+                 Cp(pp[wp[77]] += pp[wp[76]] * wp[30], pp[wp[78]] |= pp[wp[77]] << pp[wp[9]], pp[wp[9]] += (pp[wp[77]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
+                 do {
+                   Cp(pp[wp[43]].push(pp[wp[78]] & wp[11]), pp[wp[78]] >>= wp[3], pp[wp[9]] -= wp[3])
+                 } while (pp[wp[9]] > wp[24]);
+                 pp[wp[77]] = -wp[2]
+               } return pp[wp[77]] > -wp[2] && pp[wp[43]].push((pp[wp[78]] | pp[wp[77]] << pp[wp[9]]) & wp[11]), tp(pp[wp[43]])
+         }
+ ... (20 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L286-L289` → after: `L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L1003) · [Before (L286-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L286-L289)

```diff
-         if (DD instanceof Float32Array) return rD;
-         const gD = new(0, DD.constructor)(KD);
-         for (let RD = 0; RD < KD; RD++) gD[RD] = rD[RD] + .5 | 0;
-         return gD
+         Gp(166) in Hp && rp(), lp *= Ep
```

#### 15. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L291-L331` → after: `L1005-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1005-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L1005-L1062) · [Before (L291-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L291-L331)

```diff
-       static ConvertCubeMapToSphericalPolynomial(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const wD = zD > 0 ? this._NearestPow2Floor(zD) : 0;
-         if (wD > 0 && DD.size > wD) {
-           const zD = 5 === DD.format ? 4 : 3,
-             pD = ["right", "left", "up", "down", "front", "back"],
-             sD = {};
-           for (const KD of pD) sD[KD] = this._DownsampleFace(DD[KD], DD.size, wD, zD);
-           DD = {
-             ...DD,
-             ...sD,
-             size: wD
-           }
-         }
-         const pD = new KD.c;
-         let cD = 0;
- ... (25 more removed lines; see GitHub link above)
+       const Qp = Dp[Pp(167) + Pp(168) + Pp(wp[70])],
+         Jp = Qp ? Math[Pp(170)](Qp, lp) : lp;
+       op()[Pp(wp[6]) + Pp(172)](Xp, Xp);
+       const Bp = Ap !== wp[50] && void 0 !== Ap ? Ap : Dp[Pp(173) + Pp(wp[36]) + Pp(175) + Pp(176)];
+       if (Jp > wp[1]) {
+         function Zp(...pp) {
+           for (Cp(pp[wp[12]] = wp[2], pp[wp[2]] = 'k6w7RP4<n/d{Z5)W0_s(1urVo[2Nq:em^ST+U;`=hJ&K"8|@pfYgtAi?~x]FQzIMj.y,O}H3%BbG9L!C$>#*lEaXDcv', pp[wp[0]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[wp[0]].length, pp[wp[10]] = [], pp[wp[35]] = wp[1], pp[wp[9]] = wp[1], pp[wp[7]] = - … [truncated]
+             if (pp[wp[76]] = pp[wp[2]].indexOf(pp[wp[0]][pp[-wp[84]]]), pp[wp[76]] !== -wp[2])
+               if (pp[wp[7]] < wp[1]) pp[wp[7]] = pp[wp[76]];
+               else {
+                 Cp(pp[wp[7]] += pp[wp[76]] * wp[30], pp[wp[35]] |= pp[wp[7]] << pp[wp[9]], pp[wp[9]] += (pp[wp[7]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
+                 do {
+                   Cp(pp[wp[10]].push(pp[wp[35]] & wp[11]), pp[wp[35]] >>= wp[3], pp[wp[9]] -= wp[3])
+                 } while (pp[wp[9]] > wp[24]);
+                 pp[wp[7]] = -wp[2]
+               } return pp[wp[7]] > -wp[2] && pp[wp[10]].push((pp[wp[35]] | pp[wp[7]] << pp[wp[9]]) & wp[11]), tp(pp[wp[10]])
+ ... (42 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L333-L335` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L1064-L1065) · [Before (L333-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L333-L335)

```diff
-               } else hD = (0, sD.Clamp)(hD, 0, OD), nD = (0, sD.Clamp)(nD, 0, OD), MD = (0, sD.Clamp)(MD, 0, OD);
-               const JD = new LD.d(hD, nD, MD);
-               pD.addLight(UD, JD, GD), cD += GD, BD += gD
+                 return Sp > -wp[2] && Op.push((op | Sp << Ip) & wp[11]), tp(Op)
+               }(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
```

#### 17. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L337` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L1067) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L337)

```diff
-             fD += RD
+             pp[wp[12]] = wp[1], Cp(pp[wp[20]] = ip(184) + ip(185) + ip(186) + ip(187) + ip(188), pp[-wp[65]] = ip(189) + ip(190) + ip(191) + ip(192) + ip(193) + ip(194) + ip(195), pp[wp[19]] = ip(196) + ip(wp[87]) + ip(198) + ip(199) + ip(200) + ip(wp[27]), pp[wp[20]].match(pp[-w … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L340-L406` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L1071) · [Before (L340-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L340-L406)

```diff
-         const fD = 6 * (4 * Math.PI) / 6 / cD;
-         return pD.scaleInPlace(fD), pD.convertIncidentRadianceToIrradiance(), pD.convertIrradianceToLambertianRadiance(), KD.e.FromHarmonics(pD)
-       }
-     }
-     gD._FileFaces = [new cD("right", new pD.s(1, 0, 0), new pD.s(0, 0, -1), new pD.s(0, -1, 0)), new cD("left", new pD.s(-1, 0, 0), new pD.s(0, 0, 1), new pD.s(0, -1, 0)), new cD("up", new pD.s(0, 1, 0), new pD.s(1, 0, 0), new pD.s(0, 0, 1)), new cD("down", new pD.s(0, -1, 0), ne … [truncated]
-   },
-   41439: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => pD.h,
-       c: () => pD.r
-     });
-     var pD = wD(39960);
-     (0, pD.y)()
-   },
-   37891: (DD, zD, wD) => {
-     function pD() {
- ... (51 more removed lines; see GitHub link above)
+         sp > Kp && (sp = Kp), Cp(op()[zp(wp[64])](Xp, Xp, sp), Sp[zp(203) + zp(204)](Xp))
```

#### 19. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L410-L420` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L1076) · [Before (L410-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L410-L420)

```diff
-   61016: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       AsyncLoop: () => pD.c,
-       RegisterTools: () => pD.g,
-       Tools: () => pD.h,
-       className: () => pD.j
-     });
-     var pD = wD(40027);
-     (0, pD.g)()
-   },
-   41766: (DD, zD, wD) => {
+   37861: (pp, ip, cp) => {
```

#### 20. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L422-L613` → after: `L1078-L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1078-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L1078-L1079) · [Before (L422-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L422-L613)

```diff
-       d: () => sD
-     });
-     class pD {
-       constructor(DD) {
-         this._pendingActions = new Array, this._workerInfos = DD.map((DD => ({
-           workerPromise: Promise.resolve(DD),
-           idle: !0
-         })))
-       }
-       dispose() {
-         for (const DD of this._workerInfos) DD.workerPromise.then((DD => {
-           DD.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
-       }
-       push(DD) {
- ... (176 more removed lines; see GitHub link above)
+       e: () => Lp,
+       f: () => xp
```

#### 21. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L615-L709` → after: `L1081-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1081-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L1081-L1084) · [Before (L615-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L615-L709)

```diff
-     var pD = wD(37070),
-       sD = wD(61016),
-       KD = wD(40220);
-     class rD {
-       static OBJ(DD, zD, wD, rD) {
-         const LD = [];
-         let cD = 1,
-           gD = 1;
-         zD && (wD || (wD = "mat"), LD.push("mtllib " + wD + ".mtl"));
-         for (let RD = 0; RD < DD.length; RD++) {
-           const wD = DD[RD],
-             AD = wD.name || `mesh${RD}}`;
-           LD.push(`o ${AD}`);
-           let UD = null;
-           if (rD) {
-             const DD = wD.computeWorldMatrix(!0);
- ... (79 more removed lines; see GitHub link above)
+     var Op = cp(37868),
+       op = cp(1927);
+     const Ip = 2,
+       Sp = 1,
```

#### 22. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L711-L715` → after: `L1086-L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1086-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L1086-L1122) · [Before (L711-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L711-L715)

```diff
-         ...hD,
-         TwoPi: 2 * Math.PI,
-         Sign: Math.sign,
-         Log2: Math.log2,
-         HCF: nD
+         Gx: 1,
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
+         canAutoStepByBlock: {},
+         riderOffset: [0, 0, 0],
+         pose: "standing",
+         effect: null,
+         standingFriction: 5,
+ ... (21 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L14366-L16192` → after: `L1125-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1125-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/230.js#L1125-L1135) · [Before (L14366-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/230.js#L14366-L16192)

```diff
-     function qr(DD) {
-       return "number" === typeof DD || "boolean" === typeof DD || "bigint" === typeof DD || Fr(DD)
-     }
-     class DL {
-       constructor(DD, zD) {
-         this._ns = new Map, this._prefixCount = 0, this._builder = DD, this._format = vr(zD), this._nFmt = new tr(this._format)
-       }
-       withNamespace() {
-         for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
-         for (const pD of zD) this._assignNamespace(pD);
-         return this
-       }
-       serialize(DD, zD) {
-         if (!(zD = zD ?? yr(DD))) throw new Error("can not find name for given object");
-         const wD = mr(zD);
-         wD.ns && this._assignNamespace(wD.ns, "xmlns"), this._gatherNamespaces(DD, new WeakSet);
- ... (1811 more removed lines; see GitHub link above)
+     function Lp(pp, ip, cp, xp, Lp, Yp, Dp) {
+       if (Lp.speed) return (0, Op.e)(ip, cp, xp, Lp, Yp, Dp, pp), void(Lp.ticksToReachMaxIdleFriction = Ip);
+       const Ap = xp.isOnGround(),
+         Pp = ip.bloxd.getSyncedClientOptions(ip.bloxd.getPlayerReader(cp)),
+         Wp = null === Pp ? ip.bloxd.getClientPredictedOption(cp, "groundFrictionScale") : Pp.groundFrictionScale,
+         yp = null === Pp ? ip.bloxd.getClientPredictedOption(cp, "airFrictionScale") : Pp.airFrictionScale,
+         Up = Ap ? Wp : yp,
+         wp = Math.max(Sp, Up),
+         vp = Lp.ticksToReachMaxIdleFriction / Ip,
+         tp = (0, op.y)(wp, Up, vp);
+       Yp.friction = pp.standingFriction * ((null === Pp ? ip.bloxd.getClientPredictedOption(cp, "airMomentumConservation") : Pp.airMomentumConservation) ? tp : Up), Lp.ticksToReachMaxIdleFriction > 0 && Lp.ticksToReachMaxIdleFriction--
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/231.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/231.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26)

#### 1. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L4-L6` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L4-L10) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L4-L6)

```diff
-   37110: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => sD
+   40001: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       getBlockFaces: () => Pp,
+       getIngameIconUrl: () => Up,
+       getItemIconUrl: () => yp,
+       getItemTextureUrl: () => Wp,
+       getParticleTextureUrl: () => wp
```

#### 2. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L8-L15` → after: `L12-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L12-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L12-L23) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L8-L15)

```diff
-     var pD = wD(37119);
-     class sD {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
+     var Op = cp(4543),
+       op = cp(37246),
+       Ip = cp(9329),
+       Sp = cp(3250);
+     const xp = new Set,
+       Lp = new Set;
+     let Yp = null;
+ 
+     function Dp(pp) {
+       xp.has(pp) || (xp.add(pp), Lp.add(pp), Yp ??= setTimeout((() => {
+         console.warn(`Docs gallery: no default texture for ${Lp.size} names`, [...Lp]), Lp.clear(), Yp = null
+       }), 1e3))
```

#### 3. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L17-L32` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L25-L30) · [Before (L17-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L17-L32)

```diff
-     sD.Instances = [], sD.OnEnginesDisposedObservable = new pD.b, sD._LastCreatedScene = null, sD.UseFallbackTexture = !0, sD.FallbackTexture = ""
-   },
-   37103: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD
-     });
-     class pD {
-       static SetMatrixPrecision(DD) {
-         if (pD.MatrixTrackPrecisionChange = !1, DD && !pD.MatrixUse64Bits && pD.MatrixTrackedMatrices)
-           for (let zD = 0; zD < pD.MatrixTrackedMatrices.length; ++zD) {
-             const DD = pD.MatrixTrackedMatrices[zD],
-               wD = DD._m;
-             DD._m = new Array(16);
-             for (let zD = 0; zD < 16; ++zD) DD._m[zD] = wD[zD]
-           }
-         pD.MatrixUse64Bits = DD, pD.MatrixCurrentType = pD.MatrixUse64Bits ? Array : Float32Array, pD.MatrixTrackedMatrices = null
+ 
+     function Ap(pp, ip) {
+       try {
+         return (0, Ip.getDefaultTexture)(pp, ip).url
+       } catch {
+         return Dp(pp), null
```

#### 4. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L49-L88` → after: `L35-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L35-L49) · [Before (L49-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L49-L88)

```diff
-       DD.updateFlag = pD._UpdateFlagSeed++
-     }
- 
-     function KD(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const sD = DD.QpD(),
-         KD = zD.QpD(),
-         rD = sD[0],
-         LD = sD[1],
-         cD = sD[2],
-         gD = sD[3],
-         RD = sD[4],
-         AD = sD[5],
-         UD = sD[6],
-         fD = sD[7],
-         ID = sD[8],
- ... (24 more removed lines; see GitHub link above)
+       var ip, cp;
+       const Ip = op.m[pp];
+       if (!Ip || Ip.itemTexture || !Ip.textureInfo) return null;
+       const {
+         textureInfo: xp,
+         texturePerSide: Lp
+       } = Ip, Yp = pp => {
+         return "string" === typeof(ip = Lp && Array.isArray(xp) ? xp[Lp[pp]] : xp) ? Ap(ip, Sp.h.BLOCK) : ip && "object" === typeof ip && "animTextures" in ip ? Ap((0, Op.p)(ip), Sp.h.BLOCK) : null;
+         var ip
+       }, Dp = Yp(2);
+       return Dp ? {
+         top: Dp,
+         left: null !== (ip = Yp(4)) && void 0 !== ip ? ip : Dp,
+         right: null !== (cp = Yp(0)) && void 0 !== cp ? cp : Dp
+       } : null
```

#### 5. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L91-L93` → after: `L52-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L52-L55) · [Before (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L91-L93)

```diff
-     function rD(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       KD(DD, zD, wD.QpD(), pD), sD(wD)
+     function Wp(pp) {
+       var ip;
+       const cp = op.m[pp];
+       return Ap(null !== (ip = null === cp || void 0 === cp ? void 0 : cp.itemTexture) && void 0 !== ip ? ip : "string" === typeof(null === cp || void 0 === cp ? void 0 : cp.textureInfo) ? cp.textureInfo : pp, Sp.h.ITEM)
```

#### 6. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L96-L99` → after: `L58-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L58-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L58-L60) · [Before (L96-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L96-L99)

```diff
-     function LD(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const pD = DD.QpD();
-       zD[wD] = pD[0], zD[wD + 1] = pD[1], zD[wD + 2] = pD[2], zD[wD + 3] = pD[3], zD[wD + 4] = pD[4], zD[wD + 5] = pD[5], zD[wD + 6] = pD[6], zD[wD + 7] = pD[7], zD[wD + 8] = pD[8], zD[wD + 9] = pD[9], zD[wD + 10] = pD[10], zD[wD + 11] = pD[11], zD[wD + 12] = pD[12], zD[wD + 13]  … [truncated]
+     function yp(pp) {
+       var ip, cp;
+       return op.m[pp] ? null !== (ip = null === (cp = Pp(pp)) || void 0 === cp ? void 0 : cp.top) && void 0 !== ip ? ip : Wp(pp) : null
```

#### 7. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L102-L104` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L63-L64) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L102-L104)

```diff
-     function cD(DD, zD) {
-       const wD = gD(DD, zD.QpD());
-       return wD && sD(zD), wD
+     function Up(pp) {
+       return Ap(pp, Sp.h.ICON)
```

#### 8. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L107-L162` → after: `L67-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L67-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L67-L72) · [Before (L107-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L107-L162)

```diff
-     function gD(DD, zD) {
-       const wD = DD.QpD(),
-         pD = wD[0],
-         sD = wD[1],
-         KD = wD[2],
-         rD = wD[3],
-         LD = wD[4],
-         cD = wD[5],
-         gD = wD[6],
-         RD = wD[7],
-         AD = wD[8],
-         UD = wD[9],
-         fD = wD[10],
-         ID = wD[11],
-         BD = wD[12],
-         GD = wD[13],
- ... (40 more removed lines; see GitHub link above)
+     function wp(pp) {
+       try {
+         return cp(3432)(`./${pp}.png`)
+       } catch {
+         return Dp(pp), null
+       }
```

#### 9. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L166` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L75) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L166)

```diff
-   37079: (DD, zD, wD) => {
+   37286: (pp, ip, cp) => {
```

#### 10. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L168-L174` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L77) · [Before (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L168-L174)

```diff
-       e: () => BD,
-       i: () => ID,
-       k: () => OD,
-       n: () => hD,
-       r: () => AD,
-       s: () => UD,
-       t: () => fD
+       b: () => Op
```

#### 11. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L176-L629` → after: `L79-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L79-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L79-L178) · [Before (L176-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L176-L629)

```diff
-     var pD = wD(37088),
-       sD = wD(37094),
-       KD = wD(37103),
-       rD = wD(37110),
-       LD = wD(37125),
-       cD = wD(37127),
-       gD = wD(37134);
-     const RD = DD => parseInt(DD.toString().replace(/\W/g, ""));
-     class AD {
-       constructor() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this.x = DD, this.y = zD
-       }
-       toString() {
-         return `{X: ${this.x} Y: ${this.y}}`
- ... (438 more removed lines; see GitHub link above)
+     const Op = {
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

#### 12. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L631-L1653` → after: `L180-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L180-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L180-L195) · [Before (L631-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L631-L1653)

```diff
-         return wD
-       }
-       equals(DD) {
-         return DD && this._x === DD._x && this._y === DD._y && this._z === DD._z
-       }
-       equalsWithEpsilon(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD.b;
-         return DD && (0, LD.WithinEpsilon)(this._x, DD._x, zD) && (0, LD.WithinEpsilon)(this._y, DD._y, zD) && (0, LD.WithinEpsilon)(this._z, DD._z, zD)
-       }
-       sLD(DD, zD, wD) {
-         return this._x === DD && this._y === zD && this._z === wD
-       }
-       multiplyInPlace(DD) {
-         return this._x *= DD._x, this._y *= DD._y, this._z *= DD._z, this._isDirty = !0, this
-       }
-       multiply(DD) {
- ... (1007 more removed lines; see GitHub link above)
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

#### 13. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L1655-L1684` → after: `L197-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L197-L206) · [Before (L1655-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L1655-L1684)

```diff
-         return DD
-       }
-       toAlphaBetaGammaToRef(DD) {
-         const zD = this._z,
-           wD = this._x,
-           pD = this._y,
-           sD = this._w,
-           KD = Math.sqrt(wD * wD + pD * pD),
-           rD = Math.sqrt(zD * zD + sD * sD),
-           LD = 2 * Math.atan2(KD, rD),
-           cD = 2 * Math.atan2(zD, sD),
-           gD = 2 * Math.atan2(pD, wD),
-           RD = (cD + gD) / 2,
-           AD = (cD - gD) / 2;
-         return DD.set(AD, LD, RD), DD
-       }
- ... (14 more removed lines; see GitHub link above)
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

#### 14. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L1686-L2915` → after: `L208-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L208-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/231.js#L208-L235) · [Before (L1686-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/231.js#L1686-L2915)

```diff
-       }
-       toAxisAngleToRef(DD) {
-         let zD;
-         const wD = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
-           pD = this._w;
-         return wD > 0 ? (zD = 2 * Math.atan2(wD, pD), DD.set(this._x / wD, this._y / wD, this._z / wD)) : (zD = 0, DD.set(1, 0, 0)), zD
-       }
-       static FromRotationMatrix(DD) {
-         const zD = new ID;
-         return ID.FromRotationMatrixToRef(DD, zD), zD
-       }
-       static FromRotationMatrixToRef(DD, zD) {
-         const wD = DD.m,
-           pD = wD[0],
-           sD = wD[4],
-           KD = wD[8],
- ... (1214 more removed lines; see GitHub link above)
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

## `bloxd.io` · `bundles/bloxd.io/chunks/js/232.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/232.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608)

#### 1. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L4-L590` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/232.js#L4) · [Before (L4-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/232.js#L4-L590)

```diff
-   37273: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => AD,
-       h: () => UD,
-       i: () => BD,
-       l: () => fD
-     });
-     var pD = wD(37094),
-       sD = wD(37088),
-       KD = wD(37125),
-       rD = wD(37134);
- 
-     function LD(DD) {
-       return Math.pow(DD, sD.g)
-     }
- 
- ... (571 more removed lines; see GitHub link above)
+   37324: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L593` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/232.js#L7) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/232.js#L593)

```diff
-       f: () => pD,
+       d: () => Op,
```

#### 3. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L601` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/232.js#L15) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/232.js#L601)

```diff
-   37125: (DD, zD, wD) => {
+   37356: (pp, ip, cp) => {
```

#### 4. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L617` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/232.js#L31) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/232.js#L617)

```diff
-       return DD === zD ? DD : Math.random() * (zD - DD) + DD
+       return pp === ip ? pp : Math.random() * (ip - pp) + pp
```

#### 5. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L702` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/232.js#L116) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/232.js#L702)

```diff
-       return pD = Math.abs(zD - DD) <= wD ? zD : DD + Math.sign(zD - DD) * wD, pD
+       return Op = Math.abs(ip - pp) <= cp ? ip : pp + Math.sign(ip - pp) * cp, Op
```

#### 6. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L708` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/232.js#L122) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/232.js#L708)

```diff
-       return sD = -wD < pD && pD < wD ? zD : ED(DD, zD = DD + pD, wD), sD
+       return op = -cp < Op && Op < cp ? ip : jp(pp, ip = pp + Op, cp), op
```

#### 7. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L721` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/232.js#L135) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/232.js#L721)

```diff
-       return 0 === wD ? zD : PD(zD, wD)
+       return 0 === cp ? ip : qp(ip, cp)
```

#### 8. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L750` → after: `L164-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L164-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/232.js#L164-L177) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/232.js#L750)

```diff
-   37094: (DD, zD, wD) => {
+   37313: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       Matrix: () => Op.b,
+       Quaternion: () => Op.f,
+       RegisterMathVector: () => Op.h,
+       TmpVectors: () => Op.i,
+       Vector2: () => Op.l,
+       Zy: () => Op.o,
+       Vector4: () => Op.q
+     });
+     var Op = cp(37320);
+     (0, Op.h)()
+   },
+   37329: (pp, ip, cp) => {
```

#### 9. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L761-L763` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/232.js#L188-L190) · [Before (L761-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/232.js#L761-L763)

```diff
-       b: () => pD,
-       e: () => sD,
-       i: () => rD
+       d: () => Op,
+       g: () => op,
+       j: () => Sp
```

#### 10. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L788` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/232.js#L215) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/232.js#L788)

```diff
-   37134: (DD, zD, wD) => {
+   37368: (pp, ip, cp) => {
```

#### 11. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L790-L791` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/232.js#L217-L218) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/232.js#L790-L791)

```diff
-       e: () => KD,
-       i: () => sD
+       d: () => Ip,
+       g: () => op
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/233.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/233.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c)

#### 1. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L2)

```diff
- export const ids = [233];
+ export const ids = [233, 241];
```

#### 2. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L4-L6` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L5-L25) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L4-L6)

```diff
-   37110: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => sD
+   38517: pp => {
+     pp.exports = function(pp) {
+       return null != pp && null != pp.constructor && "function" === typeof pp.constructor.isBuffer && pp.constructor.isBuffer(pp)
+     }
+   },
+   38497: (pp, ip, cp) => {
+     var Op = cp(38502),
+       op = cp(38510),
+       Ip = cp(38517);
+     cp.g.__TYPEDARRAY_POOL || (cp.g.__TYPEDARRAY_POOL = {
+       UINT8: op([32, 0]),
+       UINT16: op([32, 0]),
+       UINT32: op([32, 0]),
+       INT8: op([32, 0]),
+       INT16: op([32, 0]),
+       INT32: op([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L8-L11` → after: `L27-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L27-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L27-L37) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L8-L11)

```diff
-     var pD = wD(37119);
-     class sD {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+     var Sp = "undefined" !== typeof Uint8ClampedArray,
+       xp = cp.g.__TYPEDARRAY_POOL;
+     xp.UINT8C || (xp.UINT8C = op([32, 0])), xp.BUFFER || (xp.BUFFER = op([32, 0]));
+     var Lp = xp.DATA,
+       Yp = xp.BUFFER;
+ 
+     function Dp(pp) {
+       if (pp) {
+         var ip = pp.length || pp.byteLength,
+           cp = Op.log2(ip);
+         Lp[cp].push(pp)
```

#### 4. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L13-L14` → after: `L39-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L39-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L39-L128) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L13-L14)

```diff
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
+     }
+ 
+     function Ap(pp) {
+       pp = Op.nextPow2(pp);
+       var ip = Op.log2(pp),
+         cp = Lp[ip];
+       return cp.length > 0 ? cp.pop() : new ArrayBuffer(pp)
+     }
+ 
+     function Pp(pp) {
+       return new Uint8Array(Ap(pp), 0, pp)
+     }
+ 
+     function Wp(pp) {
+       return new Uint16Array(Ap(2 * pp), 0, pp)
+     }
+ ... (74 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L19-L56` → after: `L135-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L135-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L135-L241) · [Before (L19-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L19-L56)

```diff
-   38658: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => KD
-     });
-     var pD = wD(38662);
-     const sD = (DD, zD, wD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : wD && "object" === typeof DD ? {
-       ...DD
-     } : null : DD.clone(zD) : null;
-     class KD {
-       static DeepCopy(DD, zD, wD, KD) {
-         let rD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const LD = function(DD) {
-           const zD = [];
-           do {
-             const wD = Object.getOwnPropertyNames(DD);
-             for (const DD of wD) - 1 === zD.indexOf(DD) && zD.push(DD)
- ... (22 more removed lines; see GitHub link above)
+   38502: (pp, ip) => {
+     function cp(pp) {
+       var ip = 32;
+       return (pp &= -pp) && ip--, 65535 & pp && (ip -= 16), 16711935 & pp && (ip -= 8), 252645135 & pp && (ip -= 4), 858993459 & pp && (ip -= 2), 1431655765 & pp && (ip -= 1), ip
+     }
+     ip.INT_BITS = 32, ip.INT_MAX = 2147483647, ip.INT_MIN = -1 << 31, ip.sign = function(pp) {
+       return (pp > 0) - (pp < 0)
+     }, ip.abs = function(pp) {
+       var ip = pp >> 31;
+       return (pp ^ ip) - ip
+     }, ip.min = function(pp, ip) {
+       return ip ^ (pp ^ ip) & -(pp < ip)
+     }, ip.max = function(pp, ip) {
+       return pp ^ (pp ^ ip) & -(pp < ip)
+     }, ip.isPow2 = function(pp) {
+       return !(pp & pp - 1) && !!pp
+ ... (91 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L62-L67` → after: `L252-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L252-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L252-L287) · [Before (L62-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L62-L67)

```diff
-   37891: (DD, zD, wD) => {
-     function pD() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
-         const zD = 16 * Math.random() | 0;
-         return ("x" === DD ? zD : 3 & zD | 8).toString(16)
-       }))
+   38533: (pp, ip) => {
+     var cp = "d",
+       Op = "ax",
+       op = "fp",
+       Ip = "es",
+       Sp = "rs",
+       xp = "re",
+       Lp = "rb",
+       Yp = "bs",
+       Dp = "be",
+       Ap = "bb",
+       Pp = [cp, Op, "vv", Sp, xp, Lp, "ri", Yp, Dp, Ap, "bi"];
+ 
+     function Wp(pp) {
+       var ip = "bruteForce" + (pp ? "Full" : "Partial"),
+         Op = [],
+ ... (20 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L69-L71` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L289) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L69-L71)

```diff
-     wD.d(zD, {
-       c: () => pD
-     })
+     ip.partial = Wp(!1), ip.full = Wp(!0)
```

#### 8. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L73-L126` → after: `L291-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L291-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L291-L336) · [Before (L73-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L73-L126)

```diff
-   38662: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD
-     });
-     class pD {
-       static _CheckLimit(DD, zD) {
-         let wD = pD._LogLimitOutputs[DD];
-         return wD ? wD.current++ : (wD = {
-           limit: zD,
-           current: 1
-         }, pD._LogLimitOutputs[DD] = wD), wD.current <= wD.limit
-       }
-       static _GenerateLimitMessage(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const wD = pD._LogLimitOutputs[DD];
-         if (!wD || !pD.MessageLimitReached) return;
- ... (38 more removed lines; see GitHub link above)
+   38531: (pp, ip, cp) => {
+     pp.exports = function(pp, ip, cp, Ip, Dp, Mp, Cp, Ep, Xp) {
+       ! function(pp, ip) {
+         var cp = 8 * op.log2(ip + 1) * (pp + 1) | 0,
+           Ip = op.nextPow2(dp * cp);
+         jp.length < Ip && (Op.free(jp), jp = Op.mallocInt32(Ip));
+         var Sp = op.nextPow2(ep * cp);
+         kp.length < Sp && (Op.free(kp), kp = Op.mallocDouble(Sp))
+       }(pp, Ip + Cp);
+       var lp, Qp = 0,
+         Jp = 2 * pp;
+       mp(Qp++, 0, 0, Ip, 0, Cp, cp ? 16 : 0, -1 / 0, 1 / 0), cp || mp(Qp++, 0, 0, Cp, 0, Ip, 1, -1 / 0, 1 / 0);
+       for (; Qp > 0;) {
+         var Bp = (Qp -= 1) * dp,
+           Np = jp[Bp],
+           Tp = jp[Bp + 1],
+ ... (30 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L144-L154` → after: `L438-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L438-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L438-L477) · [Before (L144-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L144-L154)

```diff
-   37119: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     const pD = "undefined" !== typeof WeakRef;
-     class sD {
-       constructor(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wD = arguments.length > 2 ? arguments[2] : void 0,
-           pD = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(DD, zD, wD, pD)
+   38541: (pp, ip, cp) => {
+     pp.exports = function(pp, ip, cp, Sp, xp, Lp) {
+       if (Sp <= cp + 1) return cp;
+       var Yp = cp,
+         Dp = Sp,
+         Ap = Sp + cp >>> 1,
+         Pp = 2 * pp,
+         Wp = Ap,
+         yp = xp[Pp * Ap + ip];
+       for (; Yp < Dp;) {
+         if (Dp - Yp < op) {
+           Ip(pp, ip, Yp, Dp, xp, Lp), yp = xp[Pp * Ap + ip];
+           break
+         }
+         var Up = Dp - Yp,
+           wp = Math.random() * Up + Yp | 0,
+ ... (24 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L156-L160` → after: `L479-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L479-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L479-L521) · [Before (L156-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L156-L160)

```diff
-       initialize(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wD = arguments.length > 2 ? arguments[2] : void 0,
-           pD = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = DD, this.skipNextObservers = zD, this.target = wD, this.currentTarget = pD, this
+       return Op(pp, ip, cp, Ap, xp, Lp, xp[Pp * Ap + ip])
+     };
+     var Op = cp(38548)("lo<p0", ["p0"]),
+       op = 8;
+ 
+     function Ip(pp, ip, cp, Op, op, Ip) {
+       for (var Sp = 2 * pp, xp = Sp * (cp + 1) + ip, Lp = cp + 1; Lp < Op; ++Lp, xp += Sp)
+         for (var Yp = op[xp], Dp = Lp, Ap = Sp * (Lp - 1); Dp > cp && op[Ap + ip] > Yp; --Dp, Ap -= Sp) {
+           for (var Pp = Ap, Wp = Ap + Sp, yp = 0; yp < Sp; ++yp, ++Pp, ++Wp) {
+             var Up = op[Pp];
+             op[Pp] = op[Wp], op[Wp] = Up
+           }
+           var wp = Ip[Dp];
+           Ip[Dp] = Ip[Dp - 1], Ip[Dp - 1] = wp
+         }
+     }
+ ... (27 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L163-L166` → after: `L524-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L524-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L524-L579) · [Before (L163-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L163-L166)

```diff
-     class KD {
-       constructor(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = DD, this.mask = zD, this.scope = wD, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
+ 
+     function Op(pp, ip, cp) {
+       ip *= 2;
+       var Op = cp[pp *= 2],
+         op = cp[pp + 1];
+       cp[pp] = cp[ip], cp[pp + 1] = cp[ip + 1], cp[ip] = Op, cp[ip + 1] = op
+     }
+ 
+     function op(pp, ip, cp) {
+       ip *= 2, cp[pp *= 2] = cp[ip], cp[pp + 1] = cp[ip + 1]
+     }
+ 
+     function Ip(pp, ip, cp, Op) {
+       ip *= 2, cp *= 2;
+       var op = Op[pp *= 2],
+         Ip = Op[pp + 1];
+ ... (40 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L168-L170` → after: `L581-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L581-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L581-L770) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L168-L170)

```diff
-       remove() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(DD)
+       op(wp, pp, Ap), op(vp, Dp, Ap);
+       for (var ap = kp; ap <= mp; ++ap)
+         if (Lp(ap, qp, Mp, Ap)) ap !== kp && Op(ap, kp, Ap), ++kp;
+         else if (!Lp(ap, Cp, Ep, Ap))
+         for (;;) {
+           if (Lp(mp, Cp, Ep, Ap)) {
+             Lp(mp, qp, Mp, Ap) ? (Ip(ap, kp, mp, Ap), ++kp, --mp) : (Op(ap, mp, Ap), --mp);
+             break
+           }
+           if (--mp < ap) break
+         }
+       Sp(pp, kp - 1, qp, Mp, Ap), Sp(Dp, mp + 1, Cp, Ep, Ap), kp - 2 - pp <= ip ? cp(pp, kp - 2, Ap) : Yp(pp, kp - 2, Ap), Dp - (mp + 2) <= ip ? cp(mp + 2, Dp, Ap) : Yp(mp + 2, Dp, Ap), mp - kp <= ip ? cp(kp, mp, Ap) : Yp(kp, mp, Ap)
+     }
+   },
+   38519: (pp, ip, cp) => {
+     pp.exports = {
+ ... (174 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L173-L181` → after: `L791-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L791-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L791-L851) · [Before (L173-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L173-L181)

```diff
-     class rD {
-       static FromPromise(DD, zD) {
-         const wD = new rD;
-         return DD.then((DD => {
-           wD.notifyObservers(DD)
-         })).catch((DD => {
-           if (!zD) throw DD;
-           zD.notifyObservers(DD)
-         })), wD
+ 
+     function wp(pp, ip, cp, Op) {
+       pp[cp] = Op, ip[Op] = cp
+     }
+   },
+   38510: pp => {
+     function ip(pp, cp, Op) {
+       var op = 0 | pp[Op];
+       if (op <= 0) return [];
+       var Ip, Sp = new Array(op);
+       if (Op === pp.length - 1)
+         for (Ip = 0; Ip < op; ++Ip) Sp[Ip] = cp;
+       else
+         for (Ip = 0; Ip < op; ++Ip) Sp[Ip] = ip(pp, cp, Op + 1);
+       return Sp
+     }
+ ... (45 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L183-L197` → after: `L853-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L853-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L853-L926) · [Before (L183-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L183-L197)

```diff
-       get observers() {
-         return this._observers
-       }
-       constructor(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = zD, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new sD(0), DD && (this._onObserverAdded = DD)
-       }
-       add(DD) {
-         let zD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           wD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if (!DD) return null;
-         const sD = new KD(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
-         sD.unregisterOnNextCall = wD, zD ? this._observers.unshift(sD) : this._observers.push(sD), this._onObserverAdded && this._onObserverAdded(sD), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(sD, this._lastNotifiedValue);
-         const rD = pD ? new WeakRef(this) : {
-           deref: () => this
+ 
+       function Ap() {
+         xp.multiComps.length && function(pp) {
+           for (var ip = 0; ip < pp.length; ip++) {
+             var {
+               entID: cp,
+               data: Op
+             } = pp[ip], op = Op.hash[cp];
+             if (op) {
+               for (var Ip = 0; Ip < op.length; Ip++) op[Ip] || (op.splice(Ip, 1), Ip--);
+               0 === op.length && (Op.remove(cp), xp.removals.push(Op))
+             }
+           }
+           pp.length = 0
+         }(xp.multiComps), xp.removals.length && function(pp) {
+           for (var ip = 0; ip < pp.length; ip++) {
+ ... (58 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L199-L203` → after: `L928-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L928-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/233.js#L928-L1001) · [Before (L199-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/233.js#L199-L203)

```diff
-         return sD._remove = function() {
-           let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           const zD = rD.deref();
-           zD && (DD ? zD.remove(sD) : zD._remove(sD))
-         }, sD
+         if (Ip.yJ = pp, Sp.multi) {
+           var Lp = xp.hash[pp];
+           Lp || (Lp = [], xp.add(pp, Lp)), Lp.push(Ip)
+         } else xp.add(pp, Ip);
+         return Sp.Lk && Sp.Lk(pp, Ip), this
+       }, this.hpp = function(pp, ip) {
+         var cp = op[ip];
+         if (!cp) throw new Error(`Unknown component: ${ip}.`);
+         return !!cp.hash[pp]
+       }, this.HJ = function(ip, cp) {
+         if (!op[cp]) throw new Error(`Unknown component: ${cp}.`);
+         return Lp(ip, cp), pp
+       }, this.getState = function(pp, ip) {
+         var cp = op[ip];
+         if (!cp) throw new Error(`Unknown component: ${ip}.`);
+         return cp.hash[pp]
+ ... (58 more added lines; see GitHub link above)
```
