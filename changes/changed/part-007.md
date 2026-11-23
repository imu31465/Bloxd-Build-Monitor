# Changed — Bundle Modifications Report (Part 007 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `7 / 50` (**296** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/189.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/189.js` (80 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3)

#### 16. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L130-L145` → after: `L975-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L975-L976) · [Before (L130-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L130-L145)

```diff
-     function Hq(qq, Eq) {
-       var gq = Eq.movementX || Eq.mozMovementX || 0,
-         Yq = Eq.movementY || Eq.mozMovementY || 0;
-       if (Eq.touches && 0 === (gq | Yq)) {
-         var lq = function(qq) {
-           aq(qq);
-           for (let Eq = 0; Eq < qq.changedTouches.length; ++Eq)
-             if (qq.changedTouches[Eq].identifier == Wq) {
-               const gq = qq.changedTouches[Eq],
-                 Yq = [gq.clientX - uq, gq.clientY - Bq];
-               return uq = gq.clientX, Bq = gq.clientY, Yq
-             } return console.error(`Did not find touch id ${Wq}`), [0, 0]
-         }(Eq);
-         gq = lq[0], Yq = lq[1]
-       }
-       qq.lC.dx += gq, qq.lC.dy += Yq
+     function Wz(CC) {
+       return 0 === CC.index(2) ? null : Fz(CC)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L148-L161` → after: `L979-L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L979-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L979-L980) · [Before (L148-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L148-L161)

```diff
-     function oq(qq, Eq) {
-       rq(qq, Eq);
-       var gq = 1;
-       switch (Eq.deltaMode) {
-         case 0:
-           gq = 1;
-           break;
-         case 1:
-           gq = 12;
-           break;
-         case 2:
-           gq = qq.element.clientHeight || window.innerHeight
-       }
-       qq.lC.hEq += (Eq.deltaX || 0) * gq, qq.lC.nEq += (Eq.deltaY || 0) * gq, qq.lC.bEq += (Eq.deltaZ || 0) * gq
+     function Nz(CC) {
+       return 0 === CC.index(2) ? null : UC(CC)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L164-L176` → after: `L983-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L983-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L983-L985) · [Before (L164-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L164-L176)

```diff
-     function Pq(qq, Eq) {
-       if (!qq.gC) return Eq.preventDefault(), !1
-     }
-     var Qq = {
-       AltLeft: "altKey",
-       AltRight: "altKey",
-       ControlLeft: "ctrlKey",
-       ControlRight: "ctrlKey",
-       ShiftLeft: "shiftKey",
-       ShiftRight: "shiftKey",
-       MetaLeft: "metaKey",
-       MetaRight: "metaKey"
-     };
+     function Mz(CC) {
+       return CC.long()
+     }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L178-L179` → after: `L987-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L987-L990) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L178-L179)

```diff
-     function yq(qq, Eq) {
-       return !!qq[Qq[Eq]] || ("AltRight" === Eq || "ControlLeft" === Eq) && "function" === typeof qq.getModifierState && !0 === qq.getModifierState("AltGraph")
+     function gz(CC) {
+       return 0 === CC.index(2) ? null : function(CC) {
+         return CC.Pg(Mz)
+       }(CC)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L182-L188` → after: `L993-L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L993-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L993-L997) · [Before (L182-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L182-L188)

```diff
-     function tq(qq, Eq) {
-       for (var gq in qq._modifiersHeldThroughBlur = {}, Qq) qq._keyStates[gq] && (qq._modifiersHeldThroughBlur[gq] = !0);
-       Eq && Eq.isTrusted && function() {
-         try {
-           return window.self !== window.top
-         } catch (qq) {
-           return !0
+     function Sz(CC) {
+       return 0 === CC.index(2) ? null : function(CC) {
+         return {
+           wQ: CC.str(),
+           FQ: CC.long()
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L190-L193` → after: `L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L999) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L190-L193)

```diff
-       }() && (clearTimeout(qq._blurRelease), qq._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var Eq in qq._modifiersHeldThroughBlur = {}, qq._keyStates) qq._keyStates[Eq] && !/^Mouse\d/.test(Eq) && vq(qq, Eq)
-       }), 0))
+       }(CC)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L196-L199` → after: `L1002-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1002-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1002-L1004) · [Before (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L196-L199)

```diff
-     function rq(qq, Eq) {
-       var gq = qq._modifiersHeldThroughBlur;
-       if (gq && Eq.isTrusted && document.hasFocus())
-         for (var Yq in gq) delete gq[Yq], qq._keyStates[Yq] && Yq !== Eq.code && (yq(Eq, Yq) || vq(qq, Yq))
+     function pz(CC) {
+       const zC = CC.index(3);
+       return 0 === zC ? null : 1 === zC ? CC.str() : HC(CC)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L202-L213` → after: `L1007-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1007-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1007-L1011) · [Before (L202-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L202-L213)

```diff
-     function vq(qq, Eq) {
-       const gq = {
-           code: Eq,
-           preventDefault: () => {},
-           stopPropagation: () => {}
-         },
-         Yq = lq;
-       lq = gq;
-       try {
-         hq(Eq, !1, qq, gq)
-       } finally {
-         lq = Yq
+     function Pz(CC) {
+       return {
+         xQ: CC.str(),
+         JQ: CC.str(),
+         IQ: CC.str()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L217-L233` → after: `L1015-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1015-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1015-L1021) · [Before (L217-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L217-L233)

```diff
-     function hq(qq, Eq, gq, Yq) {
-       var lq = gq._keyBindmap[qq];
-       lq && (nq(gq._keyStates[qq], Eq) && (gq._keyStates[qq] = Eq, lq.forEach((qq => {
-         (!gq.filterEvents || gq.filterEvents(Yq, qq)) && function(qq, Eq, gq, Yq) {
-           var lq = Eq ? gq.pressCount : gq.releaseCount;
-           lq[qq] = (lq[qq] || 0) + 1;
-           var Oq = gq._bindPressCount[qq] || 0;
-           (Oq += Eq ? 1 : -1) < 0 && (Oq = 0);
-           gq._bindPressCount[qq] = Oq;
-           var mq = gq.state[qq];
-           if (nq(mq, Oq)) {
-             gq.state[qq] = Oq > 0;
-             var xq = Eq ? gq.down : gq.up;
-             gq.disabled || xq.emit(qq, Yq)
-           }
-         }(qq, Eq, gq, Yq)
- ... (1 more removed lines; see GitHub link above)
+     function Gz(CC) {
+       return {
+         kZ: CC.str(),
+         VZ: EC(CC),
+         CQ: EC(CC),
+         zQ: tC(CC)
+       }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L236-L237` → after: `L1024-L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1024-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1024-L1025) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L236-L237)

```diff
-     function nq(qq, Eq) {
-       return qq ? !Eq : Eq
+     function Rz(CC) {
+       return CC.Pg(Gz)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L255` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1028) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L255)

```diff
-     function Wq() {
+     function Az(CC) {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L257-L261` → after: `L1030-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1030-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1030-L1033) · [Before (L257-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L257-L261)

```diff
-         source: null,
-         direction: null,
-         mF: null,
-         timeout: void 0,
-         writtenAngle: null
+         QC: CC.str(),
+         x: CC.long(),
+         y: CC.long(),
+         z: CC.long()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L266` → after: `L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1038) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L266)

```diff
-       return Bq.find((Eq => null !== Eq.source && Eq.source === qq))
+       return CC.Pg(Az)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L270-L306` → after: `L1042-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1042-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1042-L1046) · [Before (L270-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L270-L306)

```diff
-       clearTimeout(qq.timeout), qq.source = null, qq.direction = null, qq.writtenAngle = null, qq.mF && (qq.mF.style.rotate = "")
-     }
-     const Vq = (0, Yq.memo)((function() {
-       const [, qq] = (0, Yq.useReducer)((qq => qq + 1), 0);
-       return (0, lq.f)("damagedByOtherPlayer", (Eq => {
-         let {
-           jY: gq,
-           direction: Yq
-         } = Eq;
-         const lq = gq || "nonDirectional",
-           Oq = function(qq) {
-             var Eq;
-             const gq = null !== (Eq = Nq(qq)) && void 0 !== Eq ? Eq : Bq.find((qq => null === qq.source));
-             if (gq) return gq;
-             const Yq = {
-               source: null,
- ... (21 more removed lines; see GitHub link above)
+       return 0 === CC.index(2) ? null : function(CC) {
+         return {
+           vC: CC.float(),
+           eC: CC.long(),
+           hC: CC.long()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L308-L338` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1048) · [Before (L308-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L308-L338)

```diff
-       }), []), (0, uq.jsx)("div", {
-         className: "DirectionalDamage",
-         children: Bq.map(((qq, Eq) => (0, uq.jsx)("div", {
-           ref: Eq => {
-             qq.mF = Eq
-           },
-           className: cq()("DamageIndicator", {
-             DamageIndicatorFullCircle: (0, xq.H)(qq.direction),
-             DamageIndicatorIdle: null === qq.source
-           })
-         }, Eq)))
-       })
-     }));
- 
-     function dq(qq) {
-       for (const Eq of Bq) {
- ... (15 more removed lines; see GitHub link above)
+       }(CC)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L342` → after: `L1052-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1052-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1052-L1061) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L342)

```diff
-       return Yq !== qq && (Yq = qq, !0)
+       return {
+         blockName: CC.str(),
+         pC: CC.bool(),
+         PC: CC.bool(),
+         RC: CC.bool(),
+         AC: CC.float(),
+         xC: CC.float(),
+         JC: CC.long(),
+         IC: Jz(CC)
+       }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L352-L353` → after: `L1064-L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1064-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1064-L1067) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L352-L353)

```diff
-     function lq(qq, Eq) {
-       return qq && !Eq
+     function iz(CC) {
+       return 0 === CC.index(2) ? null : function(CC) {
+         return CC.Pg(Iz)
+       }(CC)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L356-L531` → after: `L1070-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1070-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1070-L1073) · [Before (L356-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L356-L531)

```diff
-     function Oq() {
-       return lq(Yq.b.get("isTouchScreen"), Yq.b.get("clientEscMenuOptions").touchActionButtons)
-     }
-   },
-   40400: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       startPadGameplay: () => Qq
-     });
-     gq(40293);
-     var Yq = gq(40295),
-       lq = gq(3595),
-       Oq = gq(24),
-       mq = gq(39021),
-       xq = gq(3545),
-       Aq = gq(39040),
-       cq = gq(31),
- ... (160 more removed lines; see GitHub link above)
+     function vz(CC) {
+       return {
+         MC: CC.str(),
+         gC: iz(CC)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L553-L557` → after: `L1077-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1077-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1077-L1081) · [Before (L553-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L553-L557)

```diff
-     function xq() {
-       return [...mq.values()].sort(((qq, Eq) => {
-         var gq, Yq;
-         return (null !== (gq = qq.order) && void 0 !== gq ? gq : 0) - (null !== (Yq = Eq.order) && void 0 !== Yq ? Yq : 0)
-       }))
+     function ez(CC) {
+       return {
+         blockName: CC.str(),
+         frequency: CC.float()
+       }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L562` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1085) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L562)

```diff
-       Aq = qq
+       return CC.Pg(ez)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L567-L571` → after: `L1089-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1089-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1089-L1093) · [Before (L567-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L567-L571)

```diff
-       uq = !0;
-       try {
-         qq.onClick()
-       } finally {
-         uq = !1
+       return {
+         dC: CC.str(),
+         mC: CC.str(),
+         frequency: CC.float(),
+         HC: hz(CC)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L576-L577` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1097-L1098) · [Before (L576-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L576-L577)

```diff
-     function Wq() {
-       return uq
+     function Yz(CC) {
+       return CC.Pg(Kz)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L580-L581` → after: `L1101-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1101-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1101-L1109) · [Before (L580-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L580-L581)

```diff
-     function Nq() {
-       return xq().filter((qq => qq.panel && !qq.disabled))
+     function dz(CC) {
+       return {
+         blockName: CC.str(),
+         radius: CC.long(),
+         cC: CC.long(),
+         fC: CC.long(),
+         oC: CC.long(),
+         uC: CC.float()
+       }
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L585-L587` → after: `L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1113) · [Before (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L585-L587)

```diff
-       const Eq = Nq(),
-         gq = Eq.findIndex((qq => qq.id === Aq));
-       return !(gq < 0 || Eq.length < 2) && (Bq(Eq[(gq + qq + Eq.length) % Eq.length]), !0)
+       return CC.Pg(dz)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L590-L591` → after: `L1116-L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1116-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1116-L1125) · [Before (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L590-L591)

```diff
-     function Vq() {
-       return null !== Aq && Nq().length > 1
+     function Hz(CC) {
+       return {
+         fC: CC.long(),
+         oC: CC.long(),
+         qC: CC.long(),
+         FC: CC.bool(),
+         WC: vz(CC),
+         KC: Yz(CC),
+         lC: mz(CC)
+       }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L594-L595` → after: `L1128-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1128-L1129) · [Before (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L594-L595)

```diff
-     function dq() {
-       cq(null)
+     function Ez(CC) {
+       return CC.Pg(Hz)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L598-L599` → after: `L1132-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1132-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1132-L1138) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L598-L599)

```diff
-     function jq() {
-       "inventory" !== Yq.b.get("openInGameMenuName") && cq(null)
+     function lz(CC) {
+       return 0 === CC.index(2) ? null : function(CC) {
+         return {
+           name: CC.str(),
+           aC: EC(CC)
+         }
+       }(CC)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L602-L604` → after: `L1141-L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1141-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1141-L1147) · [Before (L602-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L602-L604)

```diff
-     function Hq() {
-       const qq = Aq;
-       return cq(null), qq
+     function Xz(CC) {
+       return 0 === CC.index(2) ? null : function(CC) {
+         return {
+           terrain: lz(CC),
+           tC: mz(CC)
+         }
+       }(CC)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L608-L610` → after: `L1151-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1151-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1151-L1156) · [Before (L608-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L608-L610)

```diff
-       return mq.set(qq.id, qq), lq.i.TV(Oq, xq(), !0), () => {
-         mq.get(qq.id) === qq && (mq.delete(qq.id), lq.i.TV(Oq, xq()))
-       }
+       return 0 === CC.index(2) ? null : function(CC) {
+         return {
+           layers: Ez(CC),
+           rC: Xz(CC)
+         }
+       }(CC)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L613` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1159) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L613)

```diff
-   36657: (qq, Eq, gq) => {
+   40427: (CC, zC, ZC) => {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L615-L617` → after: `L1161-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1161-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1161-L1173) · [Before (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L615-L617)

```diff
-       c: () => xq,
-       e: () => dq,
-       h: () => jq,
+       $: () => RC,
+       A: () => AC,
+       E: () => xC,
+       H: () => pC,
+       J: () => eC,
+       M: () => mC,
+       Q: () => gC,
+       S: () => EC,
+       V: () => GC,
+       Y: () => PC,
+       b: () => wC,
+       cb: () => JC,
+       f: () => HC,
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L619` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1175) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L619)

```diff
-       l: () => cq,
+       k: () => MC,
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L621-L622` → after: `L1177-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1177-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1177-L1182) · [Before (L621-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L621-L622)

```diff
-       n: () => Nq,
-       r: () => uq
+       o: () => KC,
+       q: () => iC,
+       r: () => hC,
+       s: () => vC,
+       w: () => IC,
+       y: () => YC
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L624-L633` → after: `L1184-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1184-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1184-L1212) · [Before (L624-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L624-L633)

```diff
-     var Yq = gq(24),
-       lq = gq(31),
-       Oq = gq(1274),
-       mq = gq(36662);
-     const xq = "clientGameUiChanged";
-     let Aq = null;
- 
-     function cq() {
-       return Aq
-     }
+     var QC = ZC(2982);
+     const wC = {
+       Chat: 49,
+       UiRequestResponded: 91,
+       CodeCollab: 89,
+       SetCustomLobbyBlock: 60,
+       UpdateBook: 56,
+       UpdateBoard: 33,
+       UpdateMyCosmetic: 45,
+       PlayEmote: 90,
+       ReqDiscordReportKey: 9,
+       UserReport: 11,
+       LobbyReport: 12,
+       CustomGameReport: 13,
+       IgnoreUser: 34,
+       ShopMenuChanged: 26,
+ ... (13 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L636-L647` → after: `L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1215) · [Before (L636-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L636-L647)

```diff
-       const gq = {
-         content: qq,
-         menu: Eq
-       };
-       return Aq = gq, lq.i.TV(xq, Aq, !0), () => {
-         Aq === gq && (Aq = null, aq = !1, dq(), lq.i.TV(xq, null))
-       }
-     }
-     let Bq = null;
- 
-     function Wq() {
-       return Bq
+       return !ArrayBuffer.isView(CC) || CC instanceof DataView ? Array.isArray(CC) ? CC.map((CC => zC(CC))) : CC : Array.from(CC, (CC => zC(CC)))
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L651-L652` → after: `L1219-L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1219-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1219-L1222) · [Before (L651-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L651-L652)

```diff
-       return Bq = qq, () => {
-         Bq === qq && (Bq = null)
+       if ("string" !== typeof CC) return CC;
+       for (let zC = 0; zC < CC.length; zC++) {
+         const ZC = CC.charCodeAt(zC);
+         if (ZC >= 55296 && ZC <= 57343) return oC.decode(fC.encode(CC))
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L655-L667` → after: `L1226-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1226-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1226-L1227) · [Before (L655-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L655-L667)

```diff
-     let aq = !1;
- 
-     function Vq() {
-       const qq = Yq.b.get("openInGameMenuName");
-       "clientGame" !== qq && (aq = "inventory" === qq), (0, mq.l)() || (0, mq.g)(), (0, Oq.m)(Oq.d), Yq.b.set({
-         openInGameMenuName: "clientGame",
-         openEverythingMenuName: null
-       })
-     }
- 
-     function dq() {
-       Hq(!1)
-     }
+     const fC = new TextEncoder,
+       oC = new TextDecoder;
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L669-L670` → after: `L1229-L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1229-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1229-L1230) · [Before (L669-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L669-L670)

```diff
-     function jq() {
-       Hq(aq)
+     function qC(CC) {
+       return CC
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L674-L676` → after: `L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1235) · [Before (L674-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L674-L676)

```diff
-       "clientGame" === Yq.b.get("openInGameMenuName") && Yq.b.set({
-         openInGameMenuName: qq ? "inventory" : null
-       }), qq || (0, mq.g)(), aq = !1
+       return null === CC || "object" !== typeof CC ? CC : [nC(CC.Zq), nC(CC.Qq)]
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L689-L695` → after: `L1238-L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1238-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1238-L1239) · [Before (L689-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L689-L695)

```diff
-     function Aq(qq, Eq) {
-       var gq, Aq, cq;
-       if (!lq.b.get("isKeydownEnabled") || qq.repeat) return;
-       const uq = qq.code;
-       "Escape" === qq.key ? (0, mq.h)(qq) : null !== (gq = xq.u.OpenSettings) && void 0 !== gq && gq.includes(uq) ? (0, mq.u)(qq, Yq.p.SETTINGS) : null !== (Aq = xq.u.OpenCharacterCustomization) && void 0 !== Aq && Aq.includes(uq) ? (0, Oq.e)() || (0, mq.u)(qq, Yq.p.CUSTOMISATION … [truncated]
-         showDebugOverlay: !lq.b.get("showDebugOverlay")
-       })
+     function NC(CC) {
+       return null === CC || "object" !== typeof CC ? CC : [bC(CC.hQ, qC), bC(CC.zn, qC)]
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L717-L719` → after: `L1242-L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1242-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1242-L1244) · [Before (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L717-L719)

```diff
-     function uq() {
-       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k;
-       (0, Oq.f)(qq, xq)
+     function MC(CC) {
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.cq), nC(zC.uq)];
+       var zC
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L722-L723` → after: `L1247-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1247-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1247-L1249) · [Before (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L722-L723)

```diff
-     function Bq() {
-       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).setItem(cq, !0)
+     function gC(CC) {
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [zC.id, zC.hF];
+       var zC
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L726-L751` → after: `L1252-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1252-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1252-L1254) · [Before (L726-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L726-L751)

```diff
-     function Wq() {
-       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k;
-       return (0, Oq.c)(qq, xq)
-     }
- 
-     function Nq(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq.k;
-       const gq = (0, Oq.c)(Eq, xq),
-         uq = function(qq) {
-           const Eq = qq.getItem(Aq);
-           return "string" !== typeof Eq ? null : Eq
-         }(Eq),
-         Bq = function() {
-           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).getItem(cq)
-         }(Eq);
-       let Wq;
- ... (10 more removed lines; see GitHub link above)
+     function SC(CC) {
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [zC.rb, nC(zC.sb), zC.Tb, nC(zC.Db), zC.Ub, zC.Bb, zC.Tn, nC(zC.tn), nC(zC.Dn)];
+       var zC
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L775-L821` → after: `L1257-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1257-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1257-L1259) · [Before (L775-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L775-L821)

```diff
-     function Hq() {
-       var qq, Eq;
-       return [...null !== (qq = navigator.languages) && void 0 !== qq ? qq : [null !== (Eq = navigator.language) && void 0 !== Eq ? Eq : "none"], "EN-gb"]
-     }
- 
-     function oq(qq, Eq, gq, oq, Pq) {
-       const Qq = (0, Yq.j)(Eq) ? (0, Yq.o)(Eq) : null,
-         yq = {
-           cookies: (0, Wq.getAllCookiesForGameNameWithVariation)(Eq),
-           isMobile: (0, uq.isMobile)(),
-           isUsingCustomGameTexturePack: null !== Qq && Pq(Qq),
-           generalCookies: {
-             joinDiscord: !!Vq.i.getItem("DiscordPressed"),
-             newGo: cq.b,
-             ...qq.getMetricsCookies(),
-             trafficCode: oq,
- ... (31 more removed lines; see GitHub link above)
+     function pC(CC) {
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [bC(zC.gF, qC), zC.SF];
+       var zC
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L835` → after: `L1263-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1263-L1264) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L835)

```diff
-       return 2 ** Math.floor(Math.log2(Math.max(1, qq / lq)))
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [bC(zC.eq, (CC => nC(CC))), nC(zC.hq), zC.Kq];
+       var zC
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L839` → after: `L1268-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1268-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1268-L1269) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L839)

```diff
-       return (qq / lq).toFixed(1)
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [bC(zC.cn, qC), nC(zC.rn), zC.sn];
+       var zC
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L858` → after: `L1273-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1273-L1274) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L858)

```diff
-       return Math.floor(lq * qq / Oq)
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.JQ), nC(zC.IQ)];
+       var zC
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L862-L870` → after: `L1278-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1278-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1278-L1279) · [Before (L862-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L862-L870)

```diff
-       const Eq = qq - Math.floor(qq / 6);
-       let gq = Yq.c.maxChunkHorizAddDistance,
-         lq = Yq.c.maxChunkVertAddDistance;
-       if (uq(gq + 1, lq + 1) <= Eq) return null;
-       for (; uq(gq + 1, lq + 1) > Eq && (gq > 0 || lq > 0);) gq > lq ? gq-- : lq--;
-       return {
-         horizontal: gq,
-         vertical: lq
-       }
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.Bn)];
+       var zC
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L873-L879` → after: `L1282-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1282-L1283) · [Before (L873-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L873-L879)

```diff
-     function uq(qq, Eq) {
-       const gq = Math.max(qq, Eq);
-       let Yq = 0;
-       for (let lq = -gq; lq <= gq; lq++)
-         for (let Oq = -gq; Oq <= gq; Oq++)
-           for (let mq = -gq; mq <= gq; mq++) Bq(qq, Eq, lq, Oq, mq) && Yq++;
-       return Yq
+     function xC(CC) {
+       return nC(CC)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L882-L884` → after: `L1286-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1286-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1286-L1288) · [Before (L882-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L882-L884)

```diff
-     function Bq(qq, Eq, gq, Yq, lq) {
-       const Oq = gq * gq + lq * lq;
-       return qq === Eq ? Oq + Yq * Yq <= qq * qq : qq > Eq ? Math.abs(Yq) <= Eq && Oq + Yq * Yq <= qq * qq : Oq <= qq * qq && Oq + Yq * Yq <= Eq * Eq
+     function JC(CC) {
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.ZF), nC(zC.QF), nC(zC.Zq), nC(zC.Qq)];
+       var zC
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L908` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1292) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L908)

```diff
-       return Bq + qq * Wq
+       return WC(CC)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L911-L971` → after: `L1295-L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1295-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1295-L1296) · [Before (L911-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L911-L971)

```diff
-     function jq(qq, Eq, gq) {
-       var lq, mq;
-       let {
-         footprintBytes: xq,
-         basis: cq,
-         namesLimit: jq
-       } = function(qq) {
-         const {
-           os: Eq,
-           deviceMemory: gq
-         } = qq;
-         if ("ios" === Eq) switch ((0, Oq.h)(qq)) {
-           case "ipad_m":
-             return {
-               footprintBytes: dq(Aq.c), basis: "ipad-m", namesLimit: !1
-             };
- ... (45 more removed lines; see GitHub link above)
+     function iC(CC) {
+       return WC(CC)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L975-L980` → after: `L1299-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1299-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1299-L1301) · [Before (L975-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L975-L980)

```diff
-     function oq() {
-       return jq({
-         os: (0, lq.getOperatingSystem)(),
-         deviceMemory: navigator.deviceMemory,
-         ...(0, Oq.k)()
-       }, (0, mq.g)(), (0, xq.D)("wasm").length > 0)
+     function vC(CC) {
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.Cn)];
+       var zC
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L983-L984` → after: `L1304-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1304-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1304-L1305) · [Before (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L983-L984)

```diff
-     function Pq() {
-       return Hq ??= oq(), Hq
+     function eC(CC) {
+       return CC
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L987-L989` → after: `L1308-L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1308-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1308-L1310) · [Before (L987-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L987-L989)

```diff
-     function Qq() {
-       var qq;
-       return (null !== (qq = Hq) && void 0 !== qq ? qq : oq()).basis
+     function hC(CC) {
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.vn), nC(zC.en)];
+       var zC
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L992-L993` → after: `L1313-L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1313-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1313-L1314) · [Before (L992-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L992-L993)

```diff
-     function yq(qq, Eq) {
-       return qq.setChunkCap(Eq.chunkCap)
+     function KC(CC) {
+       return nC(CC)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L1017` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1318) · [Before (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L1017)

```diff
-       return "lobby" === qq.kind ? `lobby:${qq.path}` : `codeBlock:${qq.pos[0]},${qq.pos[1]},${qq.pos[2]}`
+       return NC(CC)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L1021-L1036` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1322) · [Before (L1021-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L1021-L1036)

```diff
-       if ("lobby" === qq) return {
-         kind: "lobby",
-         path: Yq.j
-       };
-       if (qq.startsWith("lobby:")) {
-         const Eq = qq.slice(6);
-         return Bq(Eq) ? {
-           kind: "lobby",
-           path: Eq
-         } : null
-       }
-       const Eq = qq.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
-       return Eq ? {
-         kind: "codeBlock",
-         pos: [parseInt(Eq[1]), parseInt(Eq[2]), parseInt(Eq[3])]
-       } : null
+       return NC(CC)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L1040` → after: `L1326-L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1326-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1326-L1327) · [Before (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L1040)

```diff
-       return qq.endsWith(".d.ts")
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.wF)];
+       var zC
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L1044` → after: `L1331-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1331-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1331-L1334) · [Before (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L1044)

```diff
-       return qq.endsWith(".ts") && !Aq(qq)
+       return (FC ??= (0, QC.e)().map((CC => CC.name)), FC).map((zC => {
+         return "string" === typeof(ZC = CC[zC]) ? nC(ZC) : bC(ZC, qC);
+         var ZC
+       }))
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L1049-L1058` → after: `L1338-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1338-L1339) · [Before (L1049-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L1049-L1058)

```diff
-       if (!qq || qq !== qq.trim()) return !1;
-       if (qq.length > uq) return !1;
-       if (qq.startsWith("/") || qq.includes("\\") || qq.includes("\0")) return !1;
-       if (!Aq(qq) && !cq(qq) && ! function(qq) {
-           return qq.endsWith(".js") && !qq.endsWith(".min.js") && !qq.endsWith(".bundle.js")
-         }(qq)) return !1;
-       const Eq = qq.split("/");
-       for (const gq of Eq)
-         if ("" === gq || "." === gq || ".." === gq) return !1;
-       return !0
+       return null === (zC = CC) || "object" !== typeof zC ? zC : [zC.Lq, zC.Uq, zC.Bq];
+       var zC
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L1062-L1070` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1342) · [Before (L1062-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L1062-L1070)

```diff
-   38974: (qq, Eq, gq) => {
-     function Yq(qq, Eq, gq, Yq, lq) {
-       var Oq = {};
-       return Object.keys(Yq).forEach((function(qq) {
-         Oq[qq] = Yq[qq]
-       })), Oq.enumerable = !!Oq.enumerable, Oq.configurable = !!Oq.configurable, ("value" in Oq || Oq.initializer) && (Oq.writable = !0), Oq = gq.slice().reverse().reduce((function(gq, Yq) {
-         return Yq(qq, Eq, gq) || gq
-       }), Oq), lq && void 0 !== Oq.initializer && (Oq.value = Oq.initializer ? Oq.initializer.call(lq) : void 0, Oq.initializer = void 0), void 0 === Oq.initializer && (Object.defineProperty(qq, Eq, Oq), Oq = null), Oq
-     }
+   9299: (CC, zC, ZC) => {
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L1072-L1073` → after: `L1344-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1344-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1344-L1349) · [Before (L1072-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L1072-L1073)

```diff
-       c: () => Yq
-     })
+       b: () => wC,
+       d: () => bC
+     });
+     var QC = ZC(9239);
+     const wC = "Air",
+       bC = Object.freeze(new QC.e(wC, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L1075-L1083` → after: `L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1351) · [Before (L1075-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L1075-L1083)

```diff
-   38968: (qq, Eq, gq) => {
-     function Yq(qq, Eq, gq, Yq) {
-       gq && Object.defineProperty(qq, Eq, {
-         enumerable: gq.enumerable,
-         configurable: gq.configurable,
-         writable: gq.writable,
-         value: gq.initializer ? gq.initializer.call(Yq) : void 0
-       })
-     }
+   39076: (CC, zC, ZC) => {
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/189.js` (Changed code · before: `L1086` → after: `L1355-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3R1355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-54a34d7462822d22b81481a3a8237b6e83f8e9d60c19a2d8a260b9557825fcf3) · [After (L1355-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/189.js#L1355-L1366) · [Before (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/189.js#L1086)

```diff
-     })
+     });
+     var QC = ZC(326),
+       wC = ZC(4386);
+     const bC = new Set(wC.k),
+       nC = new Map;
+ 
+     function fC(CC, zC) {
+       let ZC = nC.get(zC);
+       void 0 === ZC && (ZC = new Map, nC.set(zC, ZC));
+       let wC = ZC.get(CC);
+       return void 0 === wC && (wC = `${CC}${(0,QC.u)(zC)}`, ZC.set(CC, wC)), wC
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/190.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/190.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L2)

```diff
- export const ids = [190];
+ export const ids = [51, 190];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L4` → after: `L4-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L4-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L4-L184) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L4)

```diff
-   9301: (qq, Eq, gq) => {
+   38381: (CC, zC, ZC) => {
+     var QC = {
+       "./combat_1.png": 38389,
+       "./dungeon_crumbling_crypt.png": 38394,
+       "./dungeon_frozen_hollow.png": 38398,
+       "./dungeon_wildwood_grove.png": 38401,
+       "./dungeons.png": 38403,
+       "./farming_1.png": 38406,
+       "./fishing_1.png": 38413,
+       "./hub.png": 38420,
+       "./island.png": 38428,
+       "./mining_1.png": 38430,
+       "./mining_1_bridge.png": 38435,
+       "./mining_1_gallery.png": 38440,
+       "./mining_1_hollow.png": 38447,
+       "./mining_1_village.png": 38450
+ ... (165 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L6-L29` → after: `L186-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L186-L187) · [Before (L6-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L6-L29)

```diff
-       MAX_BLOCK_ID: () => Yq,
-       armourReductionOf: () => kq,
-       clipSizeOf: () => Jq,
-       creativeAltNames: () => mE,
-       creativeCategoryOf: () => eq,
-       creativeItemCategories: () => xq,
-       creativeItemCategoryIcons: () => Aq,
-       creativeItemIds: () => Iq,
-       descriptionOf: () => pq,
-       displayNameOf: () => Sq,
-       dropsNothing: () => Fq,
-       enchantmentPerksOf: () => Kq,
-       gunTypeOf: () => Uq,
-       harvestsNullLevelOf: () => sq,
-       isDevOnlyItem: () => gE,
-       itemIsDisabled: () => lE,
- ... (8 more removed lines; see GitHub link above)
+       SkyblockEntityFacing: () => fC,
+       needsSkyblockEntityFacing: () => nC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L31-L42` → after: `L189-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L189-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L189-L965) · [Before (L31-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L31-L42)

```diff
-     const Yq = 8558,
-       lq = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
-       Oq = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
-       mq = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
-       xq = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
-       Aq = {
-         building: "Stone Bricks",
-         colours: "Magenta Wool",
-         nature: "Grass Block",
-         decoration: "Lantern",
-         utility: "Workbench",
-         tools: "Iron Pickaxe",
+     var QC = ZC(597),
+       wC = ZC(4179),
+       bC = ZC(38471);
+ 
+     function nC(CC, zC) {
+       if (CC.metaInfo === QC.d || "Iron Guardian" === CC.type || "Gold Guardian" === CC.type) return !0;
+       if ("Pig" === CC.type) return "sitting" === CC.pose;
+       if ("Person" !== CC.meshKind || void 0 === CC.meshOpts) return !1;
+       let ZC = null === zC || void 0 === zC ? void 0 : zC.get(CC.meshOpts);
+       if (void 0 === ZC) {
+         var bC, nC;
+         const QC = (0, wC.g)(CC);
+         ZC = !1, "pig_napoleon" === (null === QC || void 0 === QC || null === (bC = QC.opts.textures) || void 0 === bC ? void 0 : bC.head) ? ZC = !0 : "npc_pig_head" === (null === QC || void 0 === QC || null === (nC = QC.opts.textures) || void 0 === nC ? void 0 : nC.head) && (ZC  … [truncated]
+       }
+       return "sitting" === ZC ? "sitting" === CC.pose : ZC
+     }(0, bC.e)("skyblock", ((CC, zC) => {
+ ... (761 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L44-L47` → after: `L967-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L967-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L967-L978) · [Before (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L44-L47)

```diff
-         food: "Apple",
-         mobs: "Pig Spawn Orb",
-         materials: "Iron Bar",
-         worldTools: "Code Block"
+         mining: "Iron Pickaxe",
+         farming: "Iron Hoe",
+         fishing: "Rusty Rod",
+         exploration: "Compass"
+       },
+       Rz = {
+         foraging: [80, 220, 100],
+         combat: [240, 70, 70],
+         mining: [60, 220, 240],
+         farming: [245, 220, 60],
+         fishing: [70, 120, 245],
+         exploration: [255, 180, 70]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L54-L55` → after: `L982-L6465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L982-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L982-L6465) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L54-L55)

```diff
-       let Eq = null;
-       return gq => {
+       return `rgb(${Rz[CC].join(", ")})`
+     }
+ 
+     function xz(CC, zC, ZC) {
+       if (!ZC) return CC(zC);
+       const QC = {};
+       for (const [wC, bC] of Object.entries(ZC)) QC[wC] = "string" === typeof bC ? bC : CC(bC.translationKey);
+       return CC(zC, QC)
+     }
+     class Jz {
+       constructor(CC, zC) {
+         this.now = CC, this.getJournal = zC, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.vq = !1, this.onShown = () => {}
+       }
+       enqueue(CC) {
+         const zC = Iz(CC);
+         if (zC) this.pending.push(CC);
+ ... (5468 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L57-L58` → after: `L6467-L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR6467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L6467-L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L6467-L6470) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L57-L58)

```diff
-         return Eq ??= (0, uq.A)(qq, 10091), null !== (Yq = Eq[gq]) && void 0 !== Yq ? Yq : 0
-       }
+         const ZC = (0, Kb.e)(CC).poseRig;
+         return null !== (zC = rb[CC]) && void 0 !== zC ? zC : void 0 === ZC ? null : ub[ZC]
+       }(CC);
+       return null === zC ? null : sb[zC]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L61-L67` → after: `L6473-L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR6473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L6473-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L6473-L6475) · [Before (L61-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L61-L67)

```diff
-     function Nq(qq, Eq, gq) {
-       const Yq = Wq(qq);
-       let lq = null,
-         Oq = [];
-       return qq => {
-         const mq = Yq(qq);
-         if (0 !== mq) return null === lq && (lq = Eq.split(uq.v), Oq = new Array(lq.length)), Oq[mq - 1] ??= gq(lq[mq - 1])
+     function ab(CC) {
+       return {
+         "--difficulty-colour": CC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L72` → after: `L6481-L6602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR6481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L6481-L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L6481-L6602) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L72)

```diff
-       return qq
+       var zC, ZC, QC;
+       let {
+         picker: wC,
+         controller: bC
+       } = CC;
+       const {
+         t: nC
+       } = (0, hw.y)(), fC = aw(), {
+         page: oC
+       } = wC;
+       return (0, Yw.jsxs)("section", {
+         className: "SkyblockSkillsPanel SkyblockBossPicker",
+         role: "dialog",
+         "aria-modal": "true",
+         "aria-labelledby": "skyblockBossPickerTitle",
+         tabIndex: -1,
+ ... (106 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L76` → after: `L6606-L6638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR6606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L6606-L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L6606-L6638) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L76)

```diff
-       return qq === uq.f ? null : (0, uq.E)(qq)
+       let {
+         dungeon: zC,
+         select: ZC
+       } = CC;
+       return (0, Yw.jsxs)(sw.g, {
+         className: Aw()("SkyblockDungeonCard", {
+           Selected: zC.selected
+         }),
+         onClick: () => {
+           ZC(zC.id)
+         },
+         children: [(0, Yw.jsxs)("div", {
+           className: "SkyblockDungeonCardTitle",
+           children: [(0, Yw.jsx)("strong", {
+             children: zC.name
+           }), (0, Yw.jsx)("span", {
+ ... (17 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L84-L87` → after: `L6641-L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR6641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L6641-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L6641-L6713) · [Before (L84-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L84-L87)

```diff
-     function Qq(qq, Eq, gq) {
-       Pq !== (0, cq.k)() && (Pq = (0, cq.k)(), Hq.clear(), oq.clear());
-       let Yq = qq.get(Eq);
-       return void 0 === Yq && (Yq = gq(), void 0 !== Yq && qq.set(Eq, Yq)), Yq
+     function yb(CC) {
+       let {
+         controller: zC
+       } = CC;
+       const ZC = (0, Kw.f)(MZ, zC.getSnapshot()),
+         {
+           t: QC
+         } = (0, hw.y)(),
+         wC = aw();
+       return ZC.enabled ? (0, Yw.jsxs)(rw.c, {
+         show: ZC.open,
+         close: zC.dismiss,
+         togglePointerLock: !1,
+         className: "SkyblockSkillsOverlay",
+         children: [ZC.picker && (0, Yw.jsx)(Db, {
+           picker: ZC.picker,
+ ... (57 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L104-L108` → after: `L6717-L6753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR6717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L6717-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L6717-L6753) · [Before (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L104-L108)

```diff
-       const Eq = dq(qq);
-       return null !== Eq ? Eq : Qq(Hq, qq, (() => {
-         const Eq = (0, cq.h)(qq);
-         return void 0 === Eq ? void 0 : (0, uq.G)(Eq)
-       }))
+       let {
+         collection: zC,
+         select: ZC
+       } = CC;
+       return (0, Yw.jsxs)(sw.g, {
+         className: Aw()("SkyblockSkillCard", "SkyblockCollectionCard", {
+           Selected: zC.selected,
+           Locked: zC.locked
+         }),
+         ariaPressed: zC.selected,
+         onClick: () => {
+           ZC(zC.id)
+         },
+         children: [(0, Yw.jsx)("div", {
+           className: "SkyblockSkillIcon",
+           children: (0, Yw.jsx)(iw.e, {
+ ... (21 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L112-L116` → after: `L6757-L6791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR6757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L6757-L6791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L6757-L6791) · [Before (L112-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L112-L116)

```diff
-       const Eq = jq(qq);
-       return null !== Eq ? Eq : Qq(oq, qq, (() => {
-         var Eq;
-         return null !== (Eq = (0, uq.F)(Sq(qq))) && void 0 !== Eq ? Eq : void 0
-       }))
+       let {
+         collection: zC
+       } = CC;
+       const {
+         t: ZC
+       } = (0, hw.y)();
+       return (0, Yw.jsxs)("div", {
+         className: "SkyblockSkillDetail SkyblockCollectionDetail",
+         children: [(0, Yw.jsx)("div", {
+           className: "SkyblockSkillDetailIcon",
+           children: (0, Yw.jsx)(iw.e, {
+             itemName: zC.icon,
+             amount: 0
+           })
+         }), (0, Yw.jsx)("h3", {
+           children: zC.name
+ ... (19 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L120` → after: `L6795-L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR6795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L6795-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L6795-L6870) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L120)

```diff
-       return yq(qq)
+       let {
+         controller: zC
+       } = CC;
+       const ZC = (0, Kw.f)(lZ, zC.getSnapshot()),
+         {
+           t: QC
+         } = (0, hw.y)(),
+         wC = aw();
+       return ZC.enabled ? (0, Yw.jsx)(rw.c, {
+         show: ZC.open,
+         close: zC.dismiss,
+         togglePointerLock: !1,
+         className: "SkyblockSkillsOverlay",
+         children: (0, Yw.jsxs)("section", {
+           className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
+           role: "dialog",
+ ... (60 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L124` → after: `L6876-L7002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L6876-L7002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L6876-L7002) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L124)

```diff
-       return tq(qq)
+       let {
+         controller: zC
+       } = CC;
+       const ZC = (0, Kw.f)(LZ, zC.getSnapshot()),
+         {
+           t: QC
+         } = (0, hw.y)(),
+         wC = aw();
+       return ZC.enabled ? (0, Yw.jsx)(rw.c, {
+         show: ZC.open,
+         close: zC.dismiss,
+         togglePointerLock: !1,
+         className: "SkyblockSkillsOverlay",
+         children: (0, Yw.jsxs)("section", {
+           className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
+           role: "dialog",
+ ... (111 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L128` → after: `L7022-L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR7022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L7022-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L7022-L7042) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L128)

```diff
-       return rq(qq)
+       if (CC.style.removeProperty("--part-size"), null === CC.parentElement || "wrap" === getComputedStyle(CC.parentElement).flexWrap) return;
+       const zC = [...CC.children],
+         ZC = getComputedStyle(CC),
+         QC = parseFloat(ZC.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
+         wC = (CC.clientHeight - parseFloat(ZC.rowGap) * (zC.length - 1)) / zC.length,
+         bC = zC.map((CC => {
+           const zC = getComputedStyle(CC),
+             ZC = CC.querySelector("h3"),
+             bC = CC.querySelector(".SkyblockForgeParts");
+           if (null === ZC || null === bC) return QC;
+           const nC = wC - parseFloat(zC.paddingTop) - parseFloat(zC.paddingBottom) - ZC.offsetHeight - parseFloat(getComputedStyle(ZC).marginBottom),
+             fC = parseFloat(getComputedStyle(bC).columnGap),
+             oC = bC.children.length;
+           let qC = 0;
+           for (let QC = 1; QC <= oC; QC++) {
+             const CC = Math.ceil(oC / QC);
+ ... (5 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L132` → after: `L7046-L7345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR7046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L7046-L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L7046-L7345) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L132)

```diff
-       return vq(qq)
+       var zC, ZC, QC, bC, nC;
+       let {
+         controller: fC
+       } = CC;
+       const oC = (0, Kw.f)(gQ, fC.getSnapshot()),
+         {
+           t: qC
+         } = (0, hw.y)(),
+         FC = aw(),
+         WC = function() {
+           const CC = (0, vC.useRef)(null),
+             zC = (0, vC.useRef)(null);
+           return (0, vC.useLayoutEffect)((() => {
+             null !== CC.current && Qn(CC.current)
+           })), (0, vC.useCallback)((ZC => {
+             var QC;
+ ... (284 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L136` → after: `L7351-L7369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR7351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L7351-L7369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L7351-L7369) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L136)

```diff
-       return hq(qq)
+       let {
+         itemName: zC,
+         amount: ZC,
+         owned: QC
+       } = CC;
+       return (0, Yw.jsxs)("span", {
+         className: Aw()("SkyblockSmugglerPrice", {
+           Short: ZC > QC
+         }),
+         children: [(0, Yw.jsx)("span", {
+           className: "SkyblockSmugglerPriceIcon",
+           children: (0, Yw.jsx)(iw.e, {
+             itemName: zC,
+             amount: 0
+           })
+         }), (0, Yw.jsx)("span", {
+ ... (3 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L140` → after: `L7373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR7373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L7373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L7373) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L140)

```diff
-       return nq(qq)
+       return CC.justBought ? "skyblockGame:smugglerJustBought" : CC.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L144` → after: `L7377-L7430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR7377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L7377-L7430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L7377-L7430) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L144)

```diff
-       return 0 !== iq(qq)
+       let {
+         deal: zC,
+         view: ZC,
+         buy: QC
+       } = CC;
+       const {
+         t: wC
+       } = (0, hw.y)();
+       return (0, Yw.jsxs)("div", {
+         className: Aw()("SkyblockSmugglerPocket", {
+           Bought: zC.justBought,
+           Unaffordable: !zC.affordable,
+           SoldOut: zC.soldOut && !zC.justBought
+         }),
+         children: [(0, Yw.jsx)("span", {
+           className: "SkyblockSmugglerBuckle",
+ ... (38 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L148` → after: `L7434-L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR7434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L7434-L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L7434-L7505) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L148)

```diff
-       return Zq(qq)
+       let {
+         controller: zC
+       } = CC;
+       const ZC = (0, Kw.f)(PQ, zC.getSnapshot()),
+         {
+           t: QC
+         } = (0, hw.y)(),
+         wC = aw();
+       return ZC.enabled ? (0, Yw.jsx)(rw.c, {
+         show: ZC.open,
+         close: zC.dismiss,
+         togglePointerLock: !1,
+         className: "SkyblockSkillsOverlay",
+         children: (0, Yw.jsxs)("section", {
+           className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
+           role: "dialog",
+ ... (56 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L152` → after: `L7509-L7516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L7509-L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L7509-L7516) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L152)

```diff
-       return 0 !== bq(qq)
+       let {
+         phase: zC,
+         className: ZC
+       } = CC;
+       return (0, Yw.jsx)("span", {
+         className: Aw()("SkyblockMoon", `Moon-${zC}`, ZC),
+         "aria-hidden": "true"
+       })
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L156-L159` → after: `L7520-L8226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR7520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L7520-L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L7520-L8226) · [Before (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L156-L159)

```diff
-       const Eq = fq(qq);
-       if (void 0 === Eq || Eq.startsWith(uq.r)) return null === Eq || void 0 === Eq ? void 0 : Eq.slice(uq.r.length);
-       const gq = (0, cq.h)(qq);
-       return void 0 === gq ? void 0 : `${gq}${uq.v}${Eq}`
+       let {
+         controller: zC
+       } = CC;
+       const ZC = (0, Kw.f)(AQ, zC.getSnapshot()),
+         {
+           t: QC
+         } = (0, hw.y)();
+       return ZC.enabled ? (0, Yw.jsx)(Jw.c, {
+         placement: "statBars",
+         children: (0, Yw.jsx)("button", {
+           type: "button",
+           tabIndex: -1,
+           className: Aw()("SkyblockPassageChip", ZC.open && "Open"),
+           "aria-label": QC("skyblockGame:passageChipLabel", {
+             phase: ZC.phaseName
+           }),
+ ... (691 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L164` → after: `L8231-L9011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L8231-L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L8231-L9011) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L164)

```diff
-       return null !== (Eq = Mq(qq)) && void 0 !== Eq ? Eq : Bq
+       let {
+         controller: ZC
+       } = CC;
+       const QC = (0, Kw.f)(Cw, ZC.getSnapshot()),
+         {
+           t: wC
+         } = (0, hw.y)(),
+         bC = aw();
+       if (!QC.enabled) return null;
+       const nC = null !== (zC = QC.islands.find((CC => CC.id === QC.selected))) && void 0 !== zC ? zC : null;
+       return (0, Yw.jsx)(rw.c, {
+         show: QC.open,
+         close: ZC.dismiss,
+         togglePointerLock: !1,
+         className: "SkyblockSkillsOverlay",
+         children: (0, Yw.jsxs)("section", {
+ ... (765 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L166` → after: `L9013-L9056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9013-L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L9013-L9056) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L166)

```diff
-     let Cq = null;
+     const bf = (0, vC.memo)((function(CC) {
+       let {
+         controller: zC
+       } = CC;
+       const {
+         t: ZC
+       } = (0, hw.y)(), QC = (0, Kw.f)(cZ, zC.getSnapshot());
+       if (!QC) return null;
+       const wC = "arrival" === QC.phase;
+       return (0, Yw.jsxs)("div", {
+         className: Aw()("SkyblockPortalTransit", {
+           Departure: !wC,
+           Arrival: wC
+         }),
+         style: {
+           "--portal-rgb": wf(QC.colour),
+ ... (28 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L169-L174` → after: `L9059-L9086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9059-L9086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L9059-L9086) · [Before (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L169-L174)

```diff
-       if (null === Cq) {
-         const qq = [],
-           Eq = new uq.x(lq);
-         let gq = 0;
-         for (; !Eq.done;) gq += (0, uq.J)(Eq.next()), qq.push(gq);
-         Cq = Object.freeze(qq)
+       return window.matchMedia("(prefers-reduced-motion: reduce)").matches
+     }
+ 
+     function ff() {
+       const CC = document.querySelector(".SkyblockHudCoins"),
+         zC = null === CC || void 0 === CC ? void 0 : CC.getBoundingClientRect();
+       return zC && zC.width > 0 ? {
+         x: zC.left + Math.min(zC.width, 24) / 2,
+         y: zC.top + zC.height / 2
+       } : {
+         x: window.innerWidth - 48,
+         y: 48
+       }
+     }
+ 
+     function of(CC) {
+ ... (12 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L180` → after: `L9091-L9116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9091-L9116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L9091-L9116) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L180)

```diff
-       return Tq(qq)
+       let {
+         items: zC,
+         origins: ZC,
+         target: QC
+       } = CC;
+       return (0, Yw.jsx)("div", {
+         className: "SkyblockDailyRewardFlyingItems",
+         children: zC.map(((CC, zC) => {
+           const wC = ZC[zC];
+           return (0, Yw.jsx)("span", {
+             className: "SkyblockDailyRewardFlyingItem",
+             style: {
+               left: `${wC.x}px`,
+               top: `${wC.y}px`,
+               "--item-dx": QC.x - wC.x + "px",
+               "--item-dy": QC.y - wC.y + "px",
+ ... (10 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L184-L185` → after: `L9120-L9158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9120-L9158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L9120-L9158) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L184-L185)

```diff
-       var gq;
-       return 0 !== ((null !== (gq = zq(qq)) && void 0 !== gq ? gq : 0) & Eq)
+       const ZC = -Math.PI / 2 + 1.25 * (CC / (zC - 1) * 2 - 1),
+         QC = 70 + CC % 3 * 22;
+       return {
+         x: Math.cos(ZC) * QC,
+         y: Math.sin(ZC) * QC * .7
+       }
+     }
+ 
+     function Nf(CC) {
+       let {
+         origin: zC,
+         target: ZC,
+         count: QC
+       } = CC;
+       const wC = [];
+       for (let bC = 0; bC < QC; bC++) {
+ ... (23 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L189` → after: `L9162-L9180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9162-L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L9162-L9180) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L189)

```diff
-       return Dq(qq, uq.c.OnlyInSearch)
+       let {
+         day: zC
+       } = CC;
+       const ZC = eC[zC - 1];
+       return (0, Yw.jsxs)(Yw.Fragment, {
+         children: [(0, Yw.jsxs)("span", {
+           className: "SkyblockDailyRewardFooterReward",
+           children: [(0, Yw.jsx)(iw.e, {
+             itemName: "Gold Coin",
+             amount: 0
+           }), (0, ew.e)(ZC.dailyRewardCoins)]
+         }), ZC.dailyRewardItems.map((CC => (0, Yw.jsxs)("span", {
+           className: "SkyblockDailyRewardFooterReward",
+           children: [(0, Yw.jsx)(iw.e, {
+             itemName: CC.dailyRewardItemName,
+             amount: 0
+ ... (3 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L193` → after: `L9184-L9217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9184-L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L9184-L9217) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L193)

```diff
-       return Dq(qq, uq.c.OnlyInCategory)
+       let {
+         day: zC
+       } = CC;
+       const ZC = KC(zC);
+       return (0, Yw.jsx)("ol", {
+         className: "SkyblockDailyRewardStrip",
+         children: eC.map(((CC, QC) => {
+           const wC = QC + 1;
+           return (0, Yw.jsxs)("li", {
+             className: Aw()("SkyblockDailyRewardTile", {
+               Claimed: wC < zC && wC !== ZC,
+               Today: wC === zC,
+               Tomorrow: wC === ZC,
+               Jackpot: wC === hC
+             }),
+             children: [(0, Yw.jsx)("span", {
+ ... (18 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L197` → after: `L9221-L9318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9221-L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L9221-L9318) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L197)

```diff
-       return Dq(qq, uq.c.DevOnly)
+       let {
+         view: zC
+       } = CC;
+       const {
+         t: ZC
+       } = (0, hw.y)(), QC = (0, vC.useRef)(null), wC = (0, vC.useRef)(null), [bC, nC] = (0, vC.useState)(null);
+       (0, vC.useLayoutEffect)((() => {
+         var CC;
+         const zC = null === (CC = QC.current) || void 0 === CC ? void 0 : CC.getBoundingClientRect();
+         if (zC) {
+           var ZC, bC;
+           const CC = Array.from(null !== (ZC = null === (bC = wC.current) || void 0 === bC ? void 0 : bC.children) && void 0 !== ZC ? ZC : [], (CC => of(CC.getBoundingClientRect())));
+           nC({
+             origin: of(zC),
+             target: ff(),
+             itemOrigins: CC,
+ ... (82 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L201` → after: `L9332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L9332) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L201)

```diff
-       return !Dq(qq, uq.c.HiddenByDefault) && void 0
+       return 650 + 220 * CC
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L204` → after: `L9335-L9839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9335-L9839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L9335-L9839) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L204)

```diff
-     function lE(qq, Eq, gq, Yq) {
+     function Rf(CC) {
+       return {
+         "--letter-delay": `${Gf(CC)}ms`,
+         "--letter-land": `${Gf(CC)+300}ms`
+       }
+     }
+ 
+     function Af(CC) {
+       let {
+         letterCount: zC
+       } = CC;
+       return (0, Yw.jsxs)("div", {
+         className: "SkyblockMailboxArt",
+         "aria-hidden": "true",
+         children: [(0, Yw.jsx)("img", {
+           className: "SkyblockMailboxFrame",
+ ... (489 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L206-L207` → after: `L9841-L9899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9841-L9899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L9841-L9899) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L206-L207)

```diff
-       const Oq = null !== (lq = zq(qq)) && void 0 !== lq ? lq : 0;
-       return 0 !== (Oq & uq.c.DisabledInPublicLobbies) && Eq || 0 !== (Oq & uq.c.DisabledInProduction) && !0 || !gq || !Yq && 0 !== (Oq & uq.c.DevOnly)
+       let {
+         controller: ZC
+       } = CC;
+       const {
+         selectedLanguage: QC
+       } = (0, hw.y)(), wC = QC.code;
+       (0, vC.useEffect)((() => {
+         ZC.setTranslator(((CC, zC) => (0, hw.u)(wC, CC, zC)), wC, ((CC, zC) => (0, hw.r)(wC, CC, zC)))
+       }), [ZC, wC]);
+       const bC = (0, Kw.f)(NC, ZC.map.getSnapshot()),
+         {
+           openInGameMenuName: nC
+         } = (0, xw.k)(["openInGameMenuName"]);
+       return (0, Yw.jsxs)(Yw.Fragment, {
+         children: [(0, Yw.jsx)(Qf, {
+           controller: ZC.quests,
+ ... (43 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L211-L221` → after: `L9902-L10062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR9902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L9902-L10062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L9902-L10062) · [Before (L211-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L211-L221)

```diff
-     function mE() {
-       if (null === OE) {
-         const qq = mq.split(uq.v),
-           Eq = new Map,
-           gq = new uq.x(Oq);
-         let Yq = 0,
-           lq = 0;
-         for (; !gq.done;) {
-           Yq += (0, uq.J)(gq.next());
-           const Oq = gq.next();
-           Eq.set(Yq, Object.freeze(qq.slice(lq, lq + Oq))), lq += Oq
+     function Ef(CC) {
+       let {
+         controller: zC
+       } = CC;
+       return (0, Yw.jsxs)(Yw.Fragment, {
+         children: [(0, Yw.jsx)(zb, {
+           controller: zC.map,
+           navigation: zC.navigation
+         }), (0, Yw.jsx)(wb, {
+           controller: zC.skills,
+           surface: "menu"
+         }), (0, Yw.jsx)(Nb, {
+           controller: zC.quests,
+           surface: "menu"
+         }), (0, Yw.jsx)(yb, {
+           controller: zC.dungeons
+ ... (145 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L223` → after: `L10064-L10068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR10064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L10064-L10068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L10064-L10068) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L223)

```diff
-         OE = Eq
+         const wC = ZC + zC;
+         this.settle(CC, wC) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(CC, {
+           untilMs: ZC + 1e3,
+           biteAtMs: wC
+         }))
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/190.js` (Changed code · before: `L225` → after: `L10070-L11132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377bR10070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-88c9ac2e6b822ca418710923791ad8a1c67078c106d12cf89d78d8536e78377b) · [After (L10070-L11132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/190.js#L10070-L11132) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/190.js#L225)

```diff
-       return OE
+       getLocalHook() {
+         var CC, zC;
+         return null !== (CC = null === (zC = this.localHook) || void 0 === zC ? void 0 : zC.hookId) && void 0 !== CC ? CC : null
+       }
+       afterRender() {
+         if (0 === this.pending.size) return;
+         const CC = this.deps.now();
+         for (const [zC, {
+             untilMs: ZC,
+             biteAtMs: QC
+           }] of this.pending)(this.settle(zC, QC) || CC > ZC) && this.pending.delete(zC)
+       }
+       dispose() {
+         this.pending.clear(), this.localHook = null
+       }
+       settle(CC, zC) {
+ ... (1047 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/191.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/191.js` (118 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L2)

```diff
- export const ids = [50, 191];
+ export const ids = [191];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L4-L30` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L4-L31) · [Before (L4-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L4-L30)

```diff
-   38522: (qq, Eq, gq) => {
-     var Yq = {
-       "./combat_1.png": 38526,
-       "./dungeon_crumbling_crypt.png": 38529,
-       "./dungeon_frozen_hollow.png": 38536,
-       "./dungeon_wildwood_grove.png": 38539,
-       "./dungeons.png": 38545,
-       "./farming_1.png": 38554,
-       "./fishing_1.png": 38563,
-       "./hub.png": 38571,
-       "./island.png": 38573,
-       "./mining_1.png": 38581,
-       "./mining_1_bridge.png": 38585,
-       "./mining_1_gallery.png": 38588,
-       "./mining_1_hollow.png": 38594,
-       "./mining_1_village.png": 38602
- ... (11 more removed lines; see GitHub link above)
+   38967: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => QC
+     });
+     class QC {
+       constructor(CC, zC) {
+         this.read = CC, this.apply = zC, this.release = null
+       }
+       turn(CC, zC) {
+         const ZC = null === this.release ? this.read() : this.release.transitionMs;
+         this.stop(!1), this.apply({
+           forcedCameraDirectionTransitionMs: zC,
+           forcedCameraDirection: [CC[0], CC[1], CC[2]]
+         }), this.release = {
+           timer: setTimeout((() => {
+             this.stop(!0)
+ ... (12 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L38` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L35) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L38)

```diff
-   38611: (qq, Eq, gq) => {
+   38471: (CC, zC, ZC) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L40-L41` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L37-L38) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L40-L41)

```diff
-       b: () => lq,
-       f: () => Oq
+       c: () => bC,
+       e: () => wC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L43` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L40) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L43)

```diff
-     const Yq = new WeakMap;
+     const QC = new Map;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L46` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L43) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L46)

```diff
-       return Yq.set(qq, Eq), qq
+       QC.set(CC, zC)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L50-L51` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L47) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L50-L51)

```diff
-       var Eq;
-       return null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : null
+       return CC ? QC.get(CC) : void 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L54` → after: `L50-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L50-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L50-L55) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L54)

```diff
-   38505: (qq, Eq, gq) => {
+   39426: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => wC
+     });
+     var QC = ZC(38042);
+ 
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L56-L71` → after: `L57-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L57-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L57-L68) · [Before (L56-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L56-L71)

```diff
-       var Yq;
-       const {
-         width: lq,
-         height: Oq
-       } = gq, mq = null !== (Yq = qq.text) && void 0 !== Yq ? Yq : qq, xq = (mq.x / 100 - .5) * lq, Aq = (mq.y / 100 - .5) * Oq, cq = lq / 2 - Eq.x;
-       if (null !== qq.text && Math.abs(xq) <= cq && Aq >= Eq.top - Oq / 2 && Aq <= Oq / 2 - Eq.bottom) return {
-         x: mq.x,
-         y: mq.y
-       };
-       const uq = Math.min(0 === xq ? 1 / 0 : cq / Math.abs(xq), Aq > 0 ? (Oq / 2 - Eq.bottom) / Aq : Aq < 0 ? (Eq.top - Oq / 2) / Aq : 1 / 0);
-       return !Number.isFinite(uq) || uq < 0 ? {
-         x: 50,
-         y: 50
-       } : {
-         x: 50 + xq * uq / lq * 100,
-         y: 50 + Aq * uq / Oq * 100
+       var wC, bC, nC, fC, oC, qC, FC;
+       const WC = (0, QC.d)(CC, zC, ZC[0], ZC[1], ZC[2]),
+         NC = WC ? null !== (wC = WC.textCell) && void 0 !== wC ? wC : WC.rect.anchor : ZC,
+         MC = zC(NC[0], NC[1], NC[2]);
+       return {
+         pos: [ZC[0], ZC[1], ZC[2]],
+         noticeboardSpan: WC && {
+           width: WC.rect.width,
+           height: WC.rect.height
+         },
+         text: null !== (bC = null === MC || void 0 === MC || null === (nC = MC.persisted) || void 0 === nC || null === (fC = nC.shared) || void 0 === fC ? void 0 : fC.text) && void 0 !== bC ? bC : "",
+         textSize: null !== (oC = null === MC || void 0 === MC || null === (qC = MC.persisted) || void 0 === qC || null === (FC = qC.shared) || void 0 === FC ? void 0 : FC.textSize) && void 0 !== oC ? oC : null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L78` → after: `L72-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L72-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L72-L82) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L78)

```diff
-   38514: (qq, Eq, gq) => {
+   38334: (CC, zC, ZC) => {
+     function QC(CC) {
+       switch (CC.kind) {
+         case void 0:
+         case "flatEmissive":
+           return !1;
+         case "chevronPath":
+         case "furnaceFire":
+           return !0
+       }
+     }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L80` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L84-L86) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L80)

```diff
-       b: () => mq
+       d: () => wC,
+       g: () => bC,
+       j: () => QC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L83-L147` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L89) · [Before (L83-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L83-L147)

```diff
-       lq = 12e3,
-       Oq = 1e3;
-     class mq {
-       constructor() {
-         let {
-           limit: qq = Yq,
-           windowMs: Eq = lq,
-           spacingMs: gq = Oq,
-           now: mq = Date.now
-         } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = qq, this.windowMs = Eq, this.spacingMs = gq, this.now = mq
-       }
-       isPacing() {
-         return !this.canSendPriority() || this.isPriorityWaiting()
-       }
-       canSendPriority() {
- ... (49 more removed lines; see GitHub link above)
+       bC = 3
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L149` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L91) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L149)

```diff
-   38498: (qq, Eq, gq) => {
+   38986: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L151` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L93-L94) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L151)

```diff
-       c: () => Yq
+       d: () => wC,
+       e: () => bC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L154-L180` → after: `L99-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L99-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L99-L119) · [Before (L154-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L154-L180)

```diff
-       constructor(qq, Eq, gq) {
-         this.TV = qq, this.beforeOpen = Eq, this.afterClose = gq, this.open = !1, this.eN = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
-           this.isEnabled() && !this.eN && (this.open = !0, this.beforeOpen(this), this.emit())
-         }, this.close = () => {
-           this.closePanel(!1)
-         }, this.dismiss = () => {
-           this.closePanel(!0)
-         }
-       }
-       isOpen() {
-         return this.open
-       }
-       showOrRefresh() {
-         this.open ? this.emit() : this.show()
-       }
-       closePanel(qq) {
- ... (11 more removed lines; see GitHub link above)
+       constructor(CC) {
+         this.importGame = CC, this.loads = new Map, this.loaded = new Map
+       }
+       load(CC) {
+         const zC = (0, QC.Cb)(CC);
+         if (!wC.has(zC)) return Promise.resolve(void 0);
+         let ZC = this.loads.get(zC);
+         return ZC || (ZC = this.importGame(zC).then((CC => {
+           const ZC = CC.default;
+           if ("function" !== typeof ZC) throw new Error(`${zC}'s client code has no default-exported factory`);
+           return this.loaded.set(zC, ZC), ZC
+         })).catch((CC => {
+           throw this.loads.delete(zC), CC
+         })), this.loads.set(zC, ZC)), ZC
+       }
+       loadedFactory(CC) {
+ ... (5 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L184-L187` → after: `L123-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L123-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L123-L125) · [Before (L184-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L184-L187)

```diff
-   38619: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       SkyblockEntityFacing: () => xq,
-       needsSkyblockEntityFacing: () => mq
+   39432: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L189-L191` → after: `L127-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L127-L129) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L189-L191)

```diff
-     var Yq = gq(590),
-       lq = gq(4096),
-       Oq = gq(38625);
+     var QC = ZC(9299),
+       wC = ZC(34171),
+       bC = ZC(3276);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L193-L206` → after: `L131-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L131-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L131-L144) · [Before (L193-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L193-L206)

```diff
-     function mq(qq, Eq) {
-       if (qq.metaInfo === Yq.c || "Iron Guardian" === qq.type || "Gold Guardian" === qq.type) return !0;
-       if ("Pig" === qq.type) return "sitting" === qq.pose;
-       if ("Person" !== qq.meshKind || void 0 === qq.meshOpts) return !1;
-       let gq = null === Eq || void 0 === Eq ? void 0 : Eq.get(qq.meshOpts);
-       if (void 0 === gq) {
-         var Oq, mq;
-         const Yq = (0, lq.i)(qq);
-         gq = !1, "pig_napoleon" === (null === Yq || void 0 === Yq || null === (Oq = Yq.opts.textures) || void 0 === Oq ? void 0 : Oq.head) ? gq = !0 : "npc_pig_head" === (null === Yq || void 0 === Yq || null === (mq = Yq.opts.textures) || void 0 === mq ? void 0 : mq.head) && (gq  … [truncated]
-       }
-       return "sitting" === gq ? "sitting" === qq.pose : gq
-     }(0, Oq.g)("skyblock", ((qq, Eq) => {
-       Eq.setFacingTolerance(mq(qq) ? 0 : null)
-     }));
+     function nC(CC) {
+       if (CC === QC.b) return 0;
+       const zC = (0, bC.b)(CC);
+       if (void 0 !== zC && zC <= wC.MAX_BLOCK_ID) return zC;
+       const ZC = (0, bC.b)(CC.split("|")[0]);
+       if (void 0 !== ZC && ZC <= wC.MAX_BLOCK_ID && (0, wC.rootMetaDescOf)(ZC) === CC) return ZC;
+       throw new Error(`Invalid block name. You sent ${CC}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
+     }
+   },
+   39042: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => wC
+     });
+     var QC = ZC(20);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L209-L214` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L147) · [Before (L209-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L209-L214)

```diff
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         this.api = qq, this.alsoVisit = Eq, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = qq => {
-           var Eq;
-           const gq = this.api.getEntityInfo(qq);
-           gq && (mq(gq, this.meshFacingCache) && (this.api.setFacingTolerance(qq, 0), this.nextFacing.add(qq)), null === (Eq = this.alsoVisit) || void 0 === Eq || Eq.call(this, qq, gq))
-         }
+         this.screen = CC, this.hidesHud = !1
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L216-L222` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L149-L150) · [Before (L216-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L216-L222)

```diff
-       SB() {
-         const {
-           api: qq
-         } = this, Eq = this.nextFacing;
-         qq.forEachEntity(this.visit);
-         for (const gq of this.facing) Eq.has(gq) || qq.setFacingTolerance(gq, null);
-         this.facing.clear(), this.nextFacing = this.facing, this.facing = Eq
+       show(CC, zC) {
+         this.screen.setFade(CC.colour, CC.alpha), this.screen.setLetterbox(!0 === zC.letterbox, CC.alpha < 1), this.setHudHidden(!0 === zC.hideHud)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L224-L226` → after: `L152-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L152-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L152-L158) · [Before (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L224-L226)

```diff
-       dispose() {
-         for (const qq of this.facing) this.api.setFacingTolerance(qq, null);
-         this.facing.clear(), this.meshFacingCache.clear()
+       clear() {
+         this.screen.clear(), this.setHudHidden(!1)
+       }
+       setHudHidden(CC) {
+         this.hidesHud !== CC && (this.hidesHud = CC, QC.b.set({
+           isUiHiddenByCamera: CC
+         }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L230-L232` → after: `L162-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L162-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L162-L173) · [Before (L230-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L230-L232)

```diff
-   38492: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       default: () => xA
+   39005: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => QC,
+       c: () => NC,
+       g: () => WC,
+       h: () => nC,
+       j: () => gC,
+       m: () => oC,
+       o: () => SC,
+       s: () => qC,
+       t: () => fC,
+       w: () => FC
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L234-L249` → after: `L175-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L175-L177) · [Before (L234-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L234-L249)

```diff
-     const Yq = "island";
-     var lq = gq(307);
-     const Oq = (0, lq.Kb)([0, 0, -1]),
-       mq = [{
-         name: "S",
-         bearing: (0, lq.Kb)([0, 0, 1])
-       }, {
-         name: "E",
-         bearing: (0, lq.Kb)([-1, 0, 0])
-       }, {
-         name: "N",
-         bearing: Oq
-       }, {
-         name: "W",
-         bearing: (0, lq.Kb)([1, 0, 0])
-       }];
+     const QC = Math.PI / 2 - .001,
+       wC = 2 * Math.PI,
+       bC = 1e-9;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L251-L252` → after: `L179-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L179-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L179-L185) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L251-L252)

```diff
-     function xq(qq, Eq, gq) {
-       return [100 * (gq.mapMaxX - qq) / (gq.mapMaxX - gq.mapMinX), 100 * (Eq - gq.mapMinZ) / (gq.mapMaxZ - gq.mapMinZ)]
+     function nC(CC, zC) {
+       zC.heading = CC.heading, zC.pitch = CC.pitch
+     }
+ 
+     function fC(CC, zC) {
+       const ZC = zC - CC;
+       return ZC - wC * Math.floor((ZC + Math.PI) / wC)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L256-L335` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L189) · [Before (L256-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L256-L335)

```diff
-       const lq = "local" === Eq,
-         Oq = qq.background,
-         mq = Eq => Oq ? xq(Eq[0] - qq.mapOrigin[0], Eq[2] - qq.mapOrigin[2], Oq.bounds) : [50, 50],
-         Aq = (qq.insideDungeon ? [] : qq.landmarks).map((qq => {
-           var Eq, Yq;
-           return {
-             id: qq.id,
-             name: gq(qq.visited && qq.nameKey ? null !== (Eq = qq.mapLabelKey) && void 0 !== Eq ? Eq : qq.nameKey : "skyblockGame:mapUnknown"),
-             icon: qq.visited && null !== (Yq = qq.icon) && void 0 !== Yq ? Yq : "unknown",
-             visited: qq.visited,
-             current: !1,
-             position: mq(qq.position),
-             travelKind: "landmark",
-             travelId: qq.id
-           }
-         })),
- ... (64 more removed lines; see GitHub link above)
+       return CC + fC(CC, zC) * ZC
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L339-L349` → after: `L193-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L193-L195) · [Before (L339-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L339-L349)

```diff
-       const Eq = new Set;
-       return qq.flatMap((gq => gq.connections.flatMap((Yq => {
-         const lq = qq.find((qq => qq.id === Yq)),
-           Oq = [gq.id, Yq].sort().join("|");
-         return !lq || Eq.has(Oq) ? [] : (Eq.add(Oq), [{
-           id: `${gq.id}-${Yq}`,
-           start: gq.position,
-           end: lq.position,
-           explored: gq.visited && lq.visited
-         }])
-       }))))
+       if (!Number.isFinite(CC)) return CC;
+       const zC = CC - wC * Math.floor(CC / wC);
+       return zC < wC ? zC : 0
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L351-L438` → after: `L197-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L197-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L197-L213) · [Before (L351-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L351-L438)

```diff
-     var uq = gq(38498);
-     class Bq extends uq.c {}
-     const Wq = "skyblockMapView";
-     class Nq extends Bq {
-       constructor(qq, Eq, gq) {
-         let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
-           lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
-           Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
-         super(qq, Yq, lq), this.requestTravel = Eq, this.translate = gq, this.now = Oq, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
-           presentation: null,
-           enabled: !1,
-           open: !1,
-           tab: "local",
-           map: null,
-           pending: !1,
-           feedback: ""
- ... (72 more removed lines; see GitHub link above)
+ 
+     function FC(CC, zC) {
+       return CC + fC(CC, zC)
+     }
+ 
+     function WC(CC) {
+       return Math.max(-QC, Math.min(QC, CC))
+     }
+ 
+     function NC(CC, zC, ZC) {
+       const QC = Math.cos(zC);
+       return ZC[0] = QC * Math.sin(CC), ZC[1] = -Math.sin(zC), ZC[2] = QC * Math.cos(CC), ZC
+     }
+ 
+     function MC(CC, zC, ZC, QC) {
+       const wC = Math.sqrt(CC * CC + ZC * ZC);
+ ... (1 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L443-L455` → after: `L217-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L217-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L217-L239) · [Before (L443-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L443-L455)

```diff
-       const gq = Math.abs(qq);
-       if (gq > aq || Eq.trackHalfWidth <= 0) return null;
-       const Yq = Eq.trackHalfWidth,
-         lq = Eq.screenHalfWidth / (Eq.tanHalfFovX * Math.max(.5, Math.cos(Eq.pitch))),
-         Oq = Math.min(Math.atan(.6 * Yq / lq), .75 * aq),
-         mq = lq * Math.tan(Oq);
-       let xq;
-       if (gq <= Oq) xq = lq * Math.tan(gq);
-       else {
-         const qq = aq - Oq,
-           Eq = Math.max(0, lq * qq / (Math.cos(Oq) ** 2 * (Yq - mq)) - 1),
-           Aq = (gq - Oq) / qq;
-         xq = mq + (Yq - mq) * (1 + Eq) * Aq / (1 + Eq * Aq)
+       return MC(CC[0], CC[1], CC[2], zC)
+     }
+ 
+     function SC(CC, zC, ZC) {
+       return MC(zC[0] - CC[0], zC[1] - CC[1], zC[2] - CC[2], ZC)
+     }
+   },
+   39036: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => bC,
+       d: () => wC
+     });
+     var QC = ZC(39005);
+ 
+     function wC(CC) {
+       var zC;
+ ... (7 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L457` → after: `L241-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L241-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L241-L258) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L457)

```diff
-       return 50 + Math.sign(qq) * xq * 50 / Yq
+     }
+ 
+     function bC(CC, zC, ZC, wC, bC, nC) {
+       return nC.VY = 0, nC.Zm = 0, nC.pointedAt = void 0, void 0 !== wC ? bC ? (nC.pointedAt = wC, CC) : (0, QC.s)(wC.heading) : bC ? (nC.VY = zC, nC.Zm = ZC, CC) : (0, QC.s)(CC + zC)
+     }
+   },
+   39015: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => aC
+     });
+     var QC = ZC(39022),
+       wC = ZC(39005),
+       bC = ZC(36864);
+ 
+     function nC(CC, zC, ZC, QC) {
+       if (!(QC > 0)) return zC;
+ ... (2 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L460-L474` → after: `L261-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L261-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L261-L339) · [Before (L460-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L460-L474)

```diff
-       constructor(qq, Eq) {
-         this.map = qq, this.visited = Eq, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = Eq ? "landmarks" : "unknownLandmarks"
-       }
-       getPoints() {
-         const qq = this.map.getSnapshot().map;
-         return !qq || qq.insideDungeon ? [] : qq.landmarks.filter((qq => qq.visited === this.visited)).map((qq => {
-           var Eq, gq;
-           return {
-             id: `landmark:${qq.id}`,
-             position: qq.position,
-             icon: null !== (Eq = qq.icon) && void 0 !== Eq ? Eq : "unknown",
-             nameKey: null !== (gq = qq.nameKey) && void 0 !== gq ? gq : "skyblockGame:compassUnknown",
-             kind: this.visited ? "landmark" : "unknown"
-           }
-         }))
+       constructor() {
+         this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
+           colour: QC.f,
+           alpha: 0
+         }
+       }
+       getScreen() {
+         return this.screen
+       }
+       fadeOut(CC) {
+         !this.isGoingOut() && this.sinceTurnMs < QC.k.minFadeTurnMs ? this.waiting = {
+           turn: "out",
+           transition: CC
+         } : (this.waiting = null, this.startOut(CC))
+       }
+       fadeIn(CC) {
+ ... (63 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L479` → after: `L344-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L344-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L344-L367) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L479)

```diff
-         this.map = qq, this.kind = Eq, this.position = gq, this.alive = Yq, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = Eq, this.range = "enemy" === Eq ? 48 : 64, this.limit = 12
+         var bC, nC, fC, oC, qC;
+         this.settings = CC, this.fN = zC, this.targets = ZC, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Np = [0, 0, 0, 0, 0, 0], this.started = !1, this.a … [truncated]
+           heading: 0,
+           pitch: 0
+         }, this.points = [], this.forward = [0, 0, 0], this.base = {
+           heading: (0, wC.s)((0, FC.j)(null !== (bC = CC.viewHeading) && void 0 !== bC ? bC : 0)),
+           pitch: (0, wC.g)((0, FC.j)(null !== (nC = CC.viewElevation) && void 0 !== nC ? nC : 45))
+         }, this.closestDistance = null !== (fC = CC.closestDistance) && void 0 !== fC ? fC : Math.min(6, null !== (oC = CC.furthestDistance) && void 0 !== oC ? oC : 1 / 0), this.furthestDistance = null !== (qC = CC.furthestDistance) && void 0 !== qC ? qC : Math.max(64, this.close … [truncated]
+         const WC = (0, wC.c)(this.base.heading, this.base.pitch, this.forward),
+           NC = QC.position,
+           MC = this.closestDistance;
+         this.goal = [NC[0] + WC[0] * MC, NC[1] + WC[1] * MC, NC[2] + WC[2] * MC, MC, this.base.heading, this.base.pitch]
+       }
+       update(CC, zC, ZC) {
+         var QC, bC;
+         this.placeGoal(null !== (QC = this.settings.fov) && void 0 !== QC ? QC : this.fN.getBaseFov()), this.goal[4] = (0, wC.w)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
+ ... (8 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L481-L482` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L369-L370) · [Before (L481-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L481-L482)

```diff
-       Py(qq) {
-         if ("enemy" !== this.kind || this.alive(qq.xq)) return this.position(qq.xq)
+       reset() {
+         this.Np.fill(0), this.started = !1
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L484-L498` → after: `L372-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L372-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L372-L390) · [Before (L484-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L484-L498)

```diff
-       getPoints() {
-         const qq = [];
-         for (const Yq of this.map.getEntities()) {
-           if (Yq.kind !== this.kind || "enemy" === this.kind && !this.alive(Yq.compassEntityId)) continue;
-           const lq = this.position(Yq.compassEntityId);
-           var Eq, gq;
-           if (lq) qq.push({
-             id: `${this.kind}:${Yq.compassEntityId}`,
-             xq: Yq.compassEntityId,
-             kind: this.kind,
-             icon: null !== (Eq = Yq.icon) && void 0 !== Eq ? Eq : Yq.npcSkin ? `npc_${Yq.npcSkin}` : this.kind,
-             displayName: Yq.displayName,
-             position: lq,
-             nameKey: null !== (gq = Yq.nameKey) && void 0 !== gq ? gq : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
-           })
+       placeGoal(CC) {
+         var zC;
+         let ZC = 0;
+         for (const FC of this.settings.targets) {
+           const CC = this.targets.currentAimPoint(FC);
+           CC && (0, oC.h)(CC, this.pointAt(ZC++))
+         }
+         if (ZC > 0) this.framedTargets = !0;
+         else if (!this.framedTargets) {
+           const CC = this.targets.aimPoint(this.fN.localPlayerId);
+           CC && (0, oC.h)(CC, this.pointAt(ZC++))
+         }
+         const QC = this.goal;
+         if (0 === ZC) return void(QC[3] = this.withinDistances(QC[3]));
+         for (let oC = 0; oC < 3; oC++) {
+           let CC = 1 / 0,
+ ... (3 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L500` → after: `L392-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L392-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L392-L401) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L500)

```diff
-         return qq
+         let wC = 0;
+         for (let oC = 0; oC < ZC; oC++) {
+           const CC = this.points[oC];
+           wC = Math.max(wC, Math.hypot(CC[0] - QC[0], CC[1] - QC[1], CC[2] - QC[2]))
+         }
+         const bC = Math.tan((0, FC.j)(CC) / 2),
+           nC = Math.atan(bC * (!0 === this.settings.letterbox ? WC.f : 1)),
+           fC = Math.atan(bC * this.fN.getAspectRatio()),
+           qC = (wC + (null !== (zC = this.settings.padding) && void 0 !== zC ? zC : 2)) / Math.sin(Math.min(nC, fC));
+         QC[3] = this.withinDistances(qC)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L502-L505` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L403-L404) · [Before (L502-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L502-L505)

```diff
-     }
-     class Hq {
-       constructor(qq) {
-         this.map = qq, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
+       withinDistances(CC) {
+         return Math.min(this.furthestDistance, Math.max(this.closestDistance, CC))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L507-L519` → after: `L406-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L406-L407) · [Before (L507-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L507-L519)

```diff
-       getPoints() {
-         const qq = this.map.getSnapshot().map;
-         return !qq || qq.insideDungeon ? [] : qq.portals.map((qq => {
-           var Eq;
-           return {
-             id: "portal:" + qq.id,
-             kind: "portal",
-             position: qq.position,
-             nameKey: null !== (Eq = qq.nameKey) && void 0 !== Eq ? Eq : "skyblockGame:compassUnvisitedZone",
-             icon: qq.visited ? "dungeons" === qq.destination ? "portal_orange" : "portal" : "unknown",
-             colour: qq.colour
-           }
-         }))
+       pointAt(CC) {
+         return CC === this.points.length && this.points.push([0, 0, 0]), this.points[CC]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L524-L567` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L412) · [Before (L524-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L524-L567)

```diff
-         this.target = qq, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
-       }
-       getPoints() {
-         const qq = this.target();
-         return qq ? [{
-           id: "quest",
-           kind: "quest",
-           icon: "quest",
-           position: qq.position,
-           nameKey: qq.nameKey
-         }] : []
-       }
-     }
- 
-     function Pq(qq, Eq, gq) {
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq.position;
- ... (28 more removed lines; see GitHub link above)
+         this.limits = CC, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L569-L572` → after: `L414-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L414-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L414-L415) · [Before (L569-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L569-L572)

```diff
-       register(qq) {
-         return this.providers.set(qq.id, qq), this.refreshAt = 0, () => {
-           this.providers.get(qq.id) === qq && (this.providers.delete(qq.id), this.refreshAt = 0)
-         }
+       continueFrom(CC) {
+         this.limits && (this.yawOffset = CC.yawOffset, this.pitchOffset = CC.pitchOffset, this.idleMs = CC.idleMs)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L574-L592` → after: `L417-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L417-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L417-L431) · [Before (L574-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L574-L592)

```diff
-       frame(qq, Eq, gq) {
-         if (gq >= this.refreshAt) {
-           this.refreshAt = gq + 200, this.candidates = [];
-           for (const Eq of this.providers.values()) {
-             if (!Eq.enabled) continue;
-             const gq = Eq.getPoints().map((Eq => {
-               const gq = Eq.position;
-               return {
-                 point: Eq,
-                 distance: Math.hypot(gq[0] - qq[0], gq[1] - qq[1], gq[2] - qq[2])
-               }
-             })).filter((qq => qq.distance <= Eq.range)).sort(((qq, Eq) => qq.distance - Eq.distance)).slice(0, Eq.limit);
-             for (const {
-                 point: qq
-               }
-               of gq) this.candidates.push({
- ... (3 more removed lines; see GitHub link above)
+       update(CC, zC) {
+         const ZC = this.limits;
+         if (!ZC) return;
+         const QC = Number.isFinite(zC.VY) ? zC.VY : 0,
+           wC = Number.isFinite(zC.Zm) ? zC.Zm : 0;
+         if (zC.pointedAt) this.idleMs = 0, this.pointedAt = {
+           heading: zC.pointedAt.heading,
+           pitch: zC.pointedAt.pitch
+         };
+         else if (0 !== QC || 0 !== wC) this.idleMs = 0, this.yawOffset += QC, this.pitchOffset += wC;
+         else {
+           const zC = Math.max(0, this.idleMs + CC - 200) - Math.max(0, this.idleMs - 200);
+           if (this.idleMs += CC, void 0 !== ZC.returnMs && zC > 0) {
+             const CC = ZC.returnMs > 0 ? Math.exp(-3 * zC / ZC.returnMs) : 0;
+             this.yawOffset *= CC, this.pitchOffset *= CC
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L595-L606` → after: `L434-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L434-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L434-L440) · [Before (L595-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L595-L606)

```diff
-         const Yq = [];
-         for (const {
-             point: lq,
-             provider: Oq
-           }
-           of this.candidates) {
-           if (!Oq.enabled) continue;
-           const gq = Oq.Py ? Oq.Py(lq) : lq.position;
-           if (gq) {
-             const Oq = Pq(lq, qq, Eq, gq);
-             Math.abs(Oq.offset) <= aq && Yq.push(Oq)
-           }
+         this.clampOffsets(ZC)
+       }
+       clampOffsets(CC) {
+         if (CC.maxYaw >= 180) this.yawOffset = (0, wC.t)(0, this.yawOffset);
+         else {
+           const zC = (0, FC.j)(CC.maxYaw);
+           this.yawOffset = Math.max(-zC, Math.min(zC, this.yawOffset))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L608` → after: `L442-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L442-L443) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L608)

```diff
-         return Yq
+         const zC = (0, FC.j)(CC.maxPitch);
+         this.pitchOffset = Math.max(-zC, Math.min(zC, this.pitchOffset))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L610-L611` → after: `L445-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L445-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L445-L451) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L610-L611)

```diff
-       dispose() {
-         this.providers.clear(), this.candidates = []
+       apply(CC, zC) {
+         this.pointedAt && this.limits && (this.yawOffset = (0, wC.t)(CC.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - CC.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
+         const ZC = (0, wC.g)(CC.pitch + this.pitchOffset);
+         this.pitchOffset = ZC - CC.pitch, zC.heading = (0, wC.s)(CC.heading + this.yawOffset), zC.pitch = ZC
+       }
+       unapply(CC, zC) {
+         zC.heading = (0, wC.s)(CC.heading - this.yawOffset), zC.pitch = (0, wC.g)(CC.pitch - this.pitchOffset)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L614-L647` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L454) · [Before (L614-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L614-L647)

```diff
-     var rq = gq(36662),
-       vq = gq(57);
-     const hq = [{
-         dailyRewardCoins: 1e3,
-         dailyRewardItems: []
-       }, {
-         dailyRewardCoins: 3e3,
-         dailyRewardItems: []
-       }, {
-         dailyRewardCoins: 4e3,
-         dailyRewardItems: []
-       }, {
-         dailyRewardCoins: 5500,
-         dailyRewardItems: []
-       }, {
-         dailyRewardCoins: 7e3,
- ... (18 more removed lines; see GitHub link above)
+     const PC = 1e-6;
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L650` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L457) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L650)

```diff
-       return qq >= nq ? 1 : qq + 1
+       return Math.sqrt(CC[0] * CC[0] + CC[1] * CC[1] + CC[2] * CC[2])
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L666-L677` → after: `L460-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L460-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L460-L463) · [Before (L666-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L666-L677)

```diff
-     function Mq(qq) {
-       let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       const gq = Math.max(0, Math.floor(qq)),
-         Yq = Math.floor(gq % 1e3 / 100),
-         lq = Math.floor(gq / 1e3),
-         Oq = lq % 60,
-         mq = Math.floor(lq / 60),
-         xq = mq % 60,
-         Aq = Math.floor(mq / 60),
-         cq = qq => qq < 10 ? `0${qq}` : String(qq),
-         uq = Eq ? `.${Yq}` : "";
-       return Aq > 0 ? `${Aq}:${cq(xq)}:${cq(Oq)}${uq}` : `${xq}:${cq(Oq)}${uq}`
+     function RC(CC, zC, ZC, QC, wC) {
+       const bC = wC * wC,
+         nC = bC * wC;
+       return (2 * nC - 3 * bC + 1) * CC + (nC - 2 * bC + wC) * zC + (-2 * nC + 3 * bC) * ZC + (nC - bC) * QC
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L744-L746` → after: `L466-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L466-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L466-L468) · [Before (L744-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L744-L746)

```diff
-     function Uq(qq, Eq) {
-       const gq = Math.floor(5 * qq / (2 * Eq + 1));
-       return Math.min(4, Math.max(0, gq))
+     function AC(CC, zC, ZC, QC, wC) {
+       const bC = wC * wC;
+       return (6 * bC - 6 * wC) * CC + (3 * bC - 4 * wC + 1) * zC + (-6 * bC + 6 * wC) * ZC + (3 * bC - 2 * wC) * QC
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L756-L757` → after: `L471-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L471-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L471-L475) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L756-L757)

```diff
-     function eq(qq) {
-       return Math.max(0, qq)
+     function xC(CC, zC) {
+       const ZC = zC[0] - CC[0],
+         QC = zC[1] - CC[1],
+         wC = zC[2] - CC[2];
+       return Math.sqrt(ZC * ZC + QC * QC + wC * wC)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L760-L761` → after: `L478-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L478-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L478-L486) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L760-L761)

```diff
-     function Dq(qq) {
-       return 1 + .01 * eq(qq)
+     function JC(CC, zC, ZC, QC, wC, bC) {
+       for (let nC = 0; nC < 3; nC++) bC[nC] = wC ? CC[nC] * QC : ZC[nC] - zC[nC];
+       return wC && function(CC, zC) {
+         const ZC = GC(CC);
+         if (ZC > zC) {
+           const QC = zC / ZC;
+           CC[0] *= QC, CC[1] *= QC, CC[2] *= QC
+         }
+       }(bC, 3 * xC(zC, ZC)), bC
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L764-L765` → after: `L489-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L489-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L489-L493) · [Before (L764-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L764-L765)

```diff
-     function qE(qq) {
-       return 1 + .005 * eq(qq)
+     function IC(CC, zC, ZC, QC) {
+       for (let wC = 0; wC < 3; wC++) QC[wC] = 6 * (zC[wC] - CC[wC]) - 2 * ZC[wC];
+       if (GC(QC) < PC)
+         for (let wC = 0; wC < 3; wC++) QC[wC] = zC[wC] - CC[wC];
+       return QC
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L768-L769` → after: `L496-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L496-L497) · [Before (L768-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L768-L769)

```diff
-     function EE(qq) {
-       return 1 + .005 * eq(qq)
+     function iC(CC, zC) {
+       return [2 * zC[0] - CC[0], 2 * zC[1] - CC[1], 2 * zC[2] - CC[2]]
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L772-L773` → after: `L500-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L500-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L500-L511) · [Before (L772-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L772-L773)

```diff
-     function gE(qq) {
-       return .01 * eq(qq)
+     function vC(CC, zC, ZC, QC, wC, bC, nC) {
+       if (!bC && !nC) return 0;
+       const fC = bC ? CC : 2 * zC - ZC,
+         oC = nC ? ZC : 2 * zC - CC,
+         qC = bC ? QC : wC,
+         FC = nC ? wC : QC,
+         WC = (zC - fC) / qC,
+         NC = (oC - zC) / FC;
+       if (WC * NC <= 0) return 0;
+       const MC = (oC - fC) / (qC + FC),
+         gC = 3 * Math.min(Math.abs(WC), Math.abs(NC));
+       return Math.max(-gC, Math.min(gC, MC))
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L776-L777` → after: `L514-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L514-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L514-L520) · [Before (L776-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L776-L777)

```diff
-     function YE(qq) {
-       return 150 / (150 + eq(qq))
+     function eC(CC, zC, ZC, QC, wC, bC, nC) {
+       const {
+         u: fC,
+         segmentMs: oC
+       } = CC;
+       if (!CC.curved) return ZC + (QC - ZC) * fC;
+       return RC(ZC, vC(zC, ZC, QC, CC.beforeMs, oC, bC, !0) * oC, QC, vC(ZC, QC, wC, oC, CC.afterMs, !0, nC) * oC, fC)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L781` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L524) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L781)

```diff
-       return 1 + .002 * eq(qq)
+       return Math.abs(CC.pitch) >= wC.b
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L783-L785` → after: `L526-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L526-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L526-L605) · [Before (L783-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L783-L785)

```diff
- 
-     function OE(qq) {
-       return Math.round(10 * qq) / 10
+     class KC {
+       constructor(CC, zC, ZC, QC, wC) {
+         this.nodes = CC, this.prevNodes = ZC, this.nextNodes = QC, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
+           heading: 0,
+           pitch: 0
+         }, this.fromAngles = {
+           heading: 0,
+           pitch: 0
+         }, this.toAngles = {
+           heading: 0,
+           pitch: 0
+         }, this.afterAngles = {
+           heading: 0,
+           pitch: 0
+         }, this.borrowedAngles = {
+           heading: 0,
+ ... (64 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L789-L790` → after: `L609-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L609-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L609-L636) · [Before (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L789-L790)

```diff
-       switch (qq) {
-         case "foraging":
+       const ZC = CC.lookDirection || zC.lookDirection ? function(CC, zC) {
+         if (!CC || !zC) return CC === zC;
+         const ZC = GC(CC),
+           QC = GC(zC);
+         return Math.hypot(CC[0] / ZC - zC[0] / QC, CC[1] / ZC - zC[1] / QC, CC[2] / ZC - zC[2] / QC) < PC
+       }(CC.lookDirection, zC.lookDirection) : (QC = CC.lookAt, wC = zC.lookAt, "object" !== typeof QC || "object" !== typeof wC ? QC === wC : xC(QC, wC) < PC);
+       var QC, wC;
+       return xC(CC.position, zC.position) < PC && CC.fov === zC.fov && ZC
+     }
+     class dC {
+       constructor(CC, zC, ZC) {
+         if (this.smooth = zC, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
+             index: 0,
+             toIndex: 0,
+             u: 0,
+             segmentMs: 0,
+ ... (12 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L792-L812` → after: `L638-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L638-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L638-L641) · [Before (L792-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L792-L812)

```diff
-             translationKey: "skyblockGame:foragingBenefit", percent: OE(100 * (qE(Eq) - 1))
-           };
-         case "combat":
-           return {
-             translationKey: "skyblockGame:combatBenefit", percent: OE(100 * (Dq(Eq) - 1))
-           };
-         case "mining":
-           return {
-             translationKey: "skyblockGame:miningBenefit", percent: OE(100 * (EE(Eq) - 1))
-           };
-         case "farming":
-           return {
-             translationKey: "skyblockGame:farmingBenefit", percent: OE(100 * gE(Eq))
-           };
-         case "fishing":
-           return {
- ... (5 more removed lines; see GitHub link above)
+             timeMs: CC.timeMs,
+             position: [...CC.position],
+             keyframe: CC,
+             easing: (0, bC.p)(null !== (zC = CC.easing) && void 0 !== zC ? zC : "linear")
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L815-L832` → after: `L673-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L673-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L673-L723) · [Before (L815-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L815-L832)

```diff
-     }
- 
-     function xE(qq) {
-       return "farming" === qq ? 200 : 100
-     }
- 
-     function AE(qq, Eq) {
-       if (!Number.isSafeInteger(qq) || qq < 0) throw new Error("Skill XP must be a non-negative safe integer");
-       const gq = xE(Eq),
-         Yq = qq => function(qq, Eq) {
-           return xE(qq) * Eq * (Eq + 1) / 2
-         }(Eq, qq);
-       let lq = Math.min(Iq, Math.floor((Math.sqrt(8 * qq / gq + 1) - 1) / 2));
-       return lq < Iq && Yq(lq + 1) <= qq ? lq++ : Yq(lq) > qq && lq--, {
-         totalXp: qq,
-         level: lq,
- ... (2 more removed lines; see GitHub link above)
+       sample(CC, zC, ZC, QC) {
+         const wC = this.findSegment(this.pathTime(CC));
+         this.samplePosition(wC, QC.position), this.aim.sample(wC, zC, QC);
+         const {
+           beforeIndex: bC,
+           afterIndex: nC
+         } = wC;
+         QC.fov = eC(wC, bC >= 0 ? this.fovAt(bC, ZC) : 0, this.fovAt(wC.index, ZC), this.fovAt(wC.toIndex, ZC), nC >= 0 ? this.fovAt(nC, ZC) : 0, bC >= 0, nC >= 0)
+       }
+       pathTime(CC) {
+         const zC = this.nodes[0].timeMs;
+         if (this.loopMs <= 0 || CC <= zC) return CC;
+         const ZC = CC - zC;
+         return zC + ZC - this.loopMs * Math.floor(ZC / this.loopMs)
+       }
+       findSegment(CC) {
+ ... (35 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L835-L838` → after: `L726-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L726-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L726-L750) · [Before (L835-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L835-L838)

```diff
-     const cE = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);
- 
-     function uE(qq) {
-       return cE.has(qq)
+     class mC {
+       constructor(CC) {
+         this.fN = CC, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = zC => CC.getEntityPosition(zC), this.readAimPoint = zC => CC.getEntityAimPoint(zC)
+       }
+       aimPoint(CC) {
+         return "string" !== typeof CC ? (0, oC.n)(CC, 3) ? CC : null : this.resolve(CC, this.readAimPoint, this.lastAimPoints)
+       }
+       currentAimPoint(CC) {
+         const zC = "string" === typeof CC ? this.fN.getEntityAimPoint(CC) : CC;
+         return zC && (0, oC.n)(zC, 3) ? zC : null
+       }
+       feetPosition(CC) {
+         return this.resolve(CC, this.readFeet, this.lastFeet)
+       }
+       heading(CC) {
+         const zC = this.fN.getEntityHeading(CC);
+ ... (9 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L843` → after: `L754-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L754-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L754-L757) · [Before (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L843)

```diff
-       return BE.has(qq)
+       return {
+         heading: CC.heading,
+         pitch: CC.pitch
+       }
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L981-L982` → after: `L760-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L760-L761) · [Before (L981-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L981-L982)

```diff
-     function PE(qq) {
-       return `rgb(${oE[qq].join(", ")})`
+     function EC(CC, zC) {
+       Number.isFinite(CC.heading) && Number.isFinite(CC.pitch) || (0, wC.h)(zC, CC)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L985-L989` → after: `L764-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L764-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L764-L767) · [Before (L985-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L985-L989)

```diff
-     function QE(qq, Eq, gq) {
-       if (!gq) return qq(Eq);
-       const Yq = {};
-       for (const [lq, Oq] of Object.entries(gq)) Yq[lq] = "string" === typeof Oq ? Oq : qq(Oq.translationKey);
-       return qq(Eq, Yq)
+     function lC(CC, zC, ZC, QC, bC) {
+       if (zC) return void(0, wC.j)(zC, bC);
+       const nC = QC.aimPoint(ZC);
+       nC && (0, wC.o)(CC, nC, bC)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L992-L1002` → after: `L770-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L770-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L770-L771) · [Before (L992-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L992-L1002)

```diff
-       constructor(qq, Eq) {
-         this.now = qq, this.getJournal = Eq, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Fc = !1, this.onShown = () => {}
-       }
-       enqueue(qq) {
-         const Eq = tE(qq);
-         if (Eq) this.pending.push(qq);
-         else {
-           const Eq = this.pending.findIndex(tE);
-           this.pending.splice(-1 === Eq ? this.pending.length : Eq, 0, qq)
-         }
-         return (null === this.current || null !== this.followUp && !Eq) && (this.advance(), !0)
+       constructor(CC, zC, ZC, QC) {
+         this.settings = CC, this.fN = zC, this.targets = ZC, this.base = void 0, this.base = HC(QC)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1004-L1005` → after: `L773-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L773-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L773-L776) · [Before (L1004-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1004-L1005)

```diff
-       setHeld(qq) {
-         return this.Fc = qq, !qq && null === this.current && this.pending.length > 0 && (this.advance(), !0)
+       update(CC, zC, ZC) {
+         var QC;
+         const wC = this.settings;
+         (0, oC.h)(wC.position, ZC.position), lC(wC.position, wC.lookDirection, null !== (QC = wC.lookAt) && void 0 !== QC ? QC : this.fN.localPlayerId, this.targets, this.base), zC.apply(this.base, ZC), ZC.fov = MC(wC, this.fN)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1007-L1016` → after: `L778-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L778-L779) · [Before (L1007-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1007-L1016)

```diff
-       SB() {
-         const qq = this.getJournal(),
-           Eq = this.followUp;
-         if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === Eq ? this.findFollowUp(this.current) : null), !0;
-         if ("explore" === (null === Eq || void 0 === Eq ? void 0 : Eq.kind) && qq && qq.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
-         if ("step" === (null === Eq || void 0 === Eq ? void 0 : Eq.kind)) {
-           const qq = this.findFollowUp(this.current);
-           if ("step" !== (null === qq || void 0 === qq ? void 0 : qq.kind) || qq.questId !== Eq.questId || qq.step.id !== Eq.step.id) return this.showFollowUp(qq, this.expiresAt), !0
-         }
-         return !1
+       continueFrom(CC) {
+         CC instanceof XC && (0, wC.h)(CC.base, this.base)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1018-L1019` → after: `L781-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L781-L782) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1018-L1019)

```diff
-       clear() {
-         this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
+       reset(CC) {
+         EC(this.base, CC)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1021-L1048` → after: `L784-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L784-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L784-L787) · [Before (L1021-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1021-L1048)

```diff
-       getView(qq, Eq, gq) {
-         var Yq, lq, Oq, mq;
-         if (null === this.current) return null;
-         if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, qq, gq);
-         if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, qq);
-         if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, qq, Eq);
-         const {
-           questCompletionKind: xq,
-           questCompletionNameKey: Aq
-         } = this.current, cq = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, uq = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Bq = "step" === (null === (Yq = this.followUp) || void 0 === Yq … [truncated]
-         let Nq;
-         return Nq = Wq ? qq("skyblockGame:questExploreTitle") : null !== Bq ? "quest" === xq ? qq("skyblockGame:questNextQuestTitle", {
-           quest: qq(Bq.questNameKey)
-         }) : qq("skyblockGame:questNextStepTitle") : qq("started" === xq ? "skyblockGame:questStartedTitle" : "quest" === xq ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
-           token: this.token,
-           kind: null === this.followUp ? xq : "step",
- ... (12 more removed lines; see GitHub link above)
+     }
+     class cC {
+       constructor(CC, zC, ZC, QC) {
+         this.settings = CC, this.fN = zC, this.targets = ZC, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Np = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin =  … [truncated]
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1050-L1056` → after: `L789-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L789-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L789-L816) · [Before (L1050-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1050-L1056)

```diff
-       getSkillLevelView(qq, Eq, gq) {
-         let {
-           skill: Yq,
-           beforeLevel: lq,
-           level: Oq
-         } = qq;
-         const mq = mE(Yq, lq),
+       update(CC, zC, ZC) {
+         var QC, wC, bC;
+         const nC = this.settings,
+           fC = null !== (QC = nC.target) && void 0 !== QC ? QC : this.fN.localPlayerId,
+           qC = this.targets.feetPosition(fC);
+         let FC = !1;
+         qC && (FC = this.foundFeet && xC(this.lastFeet, qC) > 32 + .1 * CC, (0, oC.h)(qC, this.lastFeet), this.foundFeet = !0, this.placeGoal(qC, fC));
+         const WC = null !== (wC = nC.smoothMs) && void 0 !== wC ? wC : 0;
+         !this.started || WC < 1 || FC ? ((0, oC.h)(this.goal, this.smoothed), this.Np.fill(0), this.started = !0) : gC(this.smoothed, this.Np, this.goal, WC, CC), FC && (this.distance = -1), (0, oC.h)(this.smoothed, ZC.position);
+         const NC = !0 === nC.avoidTerrain ? this.pullIn(fC, CC, ZC) : 1;
+         let SC = this.goal;
+         if ("target" === nC.offsetSpace) SC = ZC.position;
+         else if (NC < 1) {
+           SC = this.aimOrigin;
+           for (let CC = 0; CC < 3; CC++) SC[CC] = ZC.position[CC] + (this.goal[CC] - this.smoothed[CC]) * NC
+         }
+ ... (12 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1058-L1075` → after: `L818-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L818-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L818-L842) · [Before (L1058-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1058-L1075)

```diff
-         return {
-           token: this.token,
-           kind: "skillLevel",
-           phase: "completion",
-           title: Eq(`skyblockGame:${Yq}`),
-           name: Eq("skyblockGame:skillLevelUp", {
-             to: Oq.toLocaleString(gq)
-           }),
-           description: mq.percent === xq.percent ? null : Eq(`${xq.translationKey}Change`, {
-             before: mq.percent.toLocaleString(gq),
-             after: xq.percent.toLocaleString(gq)
-           }),
-           reward: null,
-           iconItem: HE[Yq],
-           accent: PE(Yq),
-           durationMs: this.expiresAt - this.shownAt,
- ... (2 more removed lines; see GitHub link above)
+         if (!(bC > 0)) return 1;
+         const nC = this.toCamera;
+         for (let oC = 0; oC < 3; oC++) nC[oC] = (wC[oC] - QC[oC]) / bC;
+         const fC = function(CC, zC, ZC) {
+           return CC < 0 || zC < CC ? zC : zC + (CC - zC) * Math.exp(-ZC / 150)
+         }(this.distance, function(CC, zC, ZC, QC) {
+           const wC = CC.raycastTerrain(zC, ZC, QC);
+           return null !== wC && Number.isFinite(wC) ? Math.min(QC, Math.max(0, wC - .2)) : QC
+         }(this.fN, QC, nC, bC), zC);
+         if (bC - fC < .001) return this.distance = -1, 1;
+         this.distance = fC;
+         for (let oC = 0; oC < 3; oC++) wC[oC] = QC[oC] + nC[oC] * fC;
+         return fC / bC
+       }
+       placeGoal(CC, zC) {
+         const ZC = this.settings.offset;
+ ... (9 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1077-L1093` → after: `L844-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L844-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L844-L848) · [Before (L1077-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1077-L1093)

```diff
-       getLandmarkView(qq, Eq) {
-         let {
-           landmarkNameKey: gq
-         } = qq;
-         return {
-           token: this.token,
-           kind: "landmark",
-           phase: "completion",
-           title: Eq("skyblockGame:landmarkDiscovered"),
-           name: Eq(gq),
-           description: null,
-           reward: null,
-           iconItem: null,
-           accent: null,
-           durationMs: this.expiresAt - this.shownAt,
-           waypointNameKey: null
- ... (1 more removed lines; see GitHub link above)
+     }
+     class uC {
+       constructor(CC, zC, ZC, QC) {
+         var wC, bC;
+         this.settings = CC, this.fN = zC, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = CC.keyframes.length > 0 ? new dC(CC.keyframes, null === (wC = CC.smooth) || void 0 === wC || wC, null !== (bC = CC.loop) && void 0  … [truncated]
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1095-L1119` → after: `L850-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L850-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L850-L856) · [Before (L1095-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1095-L1119)

```diff
-       getNpcNoteView(qq, Eq, gq) {
-         let {
-           titleKey: Yq,
-           textKey: lq,
-           params: Oq = {},
-           nameKeys: mq = {},
-           iconItem: xq = null
-         } = qq;
-         const Aq = {
-           ...Oq
-         };
-         for (const [cq, uq] of Object.entries(mq)) Aq[cq] = Eq(uq);
-         return {
-           token: this.token,
-           kind: "npcNote",
-           phase: "completion",
- ... (9 more removed lines; see GitHub link above)
+       update(CC, zC, ZC) {
+         this.elapsedMs += CC;
+         const QC = MC(this.settings, this.fN);
+         this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, QC, this.base) : this.base.fov = QC, (0, oC.h)(this.base.position, ZC.position), ZC.fov = this.base.fov, zC.apply(this.base, ZC)
+       }
+       continueFrom(CC) {
+         CC instanceof uC && (0, QC.s)(CC.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = CC.elapsedMs, (0, oC.g)(CC.base, this.base))
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1121` → after: `L858-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L858-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L858-L867) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1121)

```diff
-       durationMs() {
+       reset(CC) {
+         EC(this.base, CC), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
+       }
+     }
+ 
+     function rC(CC, zC) {
+       return (0, QC.u)(CC, zC)
+     }
+     class sC {
+       constructor(CC, zC, ZC) {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1123-L1136` → after: `L869-L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L869-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L869-L931) · [Before (L1123-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1123-L1136)

```diff
-         if (null !== this.followUp) return 5600;
-         switch (null === (qq = this.current) || void 0 === qq ? void 0 : qq.questCompletionKind) {
-           case "quest":
-             return 4800;
-           case "started":
-             return 4e3;
-           case "skillLevel":
-             return 3e3;
-           case "landmark":
-             return 3500;
-           case "npcNote":
-             return 8e3;
-           default:
-             return 2400
+         this.settings = CC, this.fN = zC, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
+         const wC = null !== ZC && ZC.settings.mode === CC.mode,
+           bC = wC ? ZC.pose : zC.getDefaultPose();
+         this.pose = (0, oC.g)(bC, (0, oC.k)()), this.lastGoodPose = (0, oC.g)(wC ? ZC.lastGoodPose : bC, (0, oC.k)()), this.look = new pC(CC.playerLook), this.targets = null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.targets) && void 0 !== QC ? QC : new mC(zC);
+         const nC = (0, oC.g)(bC, (0, oC.k)());
+         wC && ZC.look.unapply(nC, nC), this.mode = function(CC, zC, ZC, QC) {
+           switch (CC.mode) {
+             case "fixed":
+               return new XC(CC, zC, ZC, QC);
+             case "follow":
+               return new cC(CC, zC, ZC, QC);
+             case "path":
+               return new uC(CC, zC, ZC, QC);
+             case "frame":
+               return new SC(CC, zC, ZC, QC)
+           }
+ ... (47 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1139-L1140` → after: `L934-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L934-L935) · [Before (L1139-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1139-L1140)

```diff
-       showFollowUp(qq, Eq) {
-         null === qq || this.Fc ? this.advance() : (this.followUp = qq, this.token++, this.shownAt = this.now(), this.expiresAt = null !== Eq && void 0 !== Eq ? Eq : this.shownAt + this.durationMs())
+       getSettings() {
+         return this.settings
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1142-L1158` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L937-L938) · [Before (L1142-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1142-L1158)

```diff
-       findFollowUp(qq) {
-         var Eq;
-         const gq = this.getJournal();
-         if (!gq || this.hasPendingQuestPopup() || tE(qq)) return null;
-         const Yq = "started" === qq.questCompletionKind ? gq.active.some((Eq => Eq.id === qq.questCompletionQuestId)) : "quest" === qq.questCompletionKind ? gq.completed.some((Eq => Eq.id === qq.questCompletionQuestId)) : [...gq.active, ...gq.completed].some((Eq => Eq.id === qq.q … [truncated]
-         if (!Yq) return null;
-         if ("quest" === qq.questCompletionKind && 0 === gq.active.length && !this.hasPendingQuestPopup()) return {
-           kind: "explore"
-         };
-         const lq = gq.active.find((qq => qq.id === gq.trackedQuestId)),
-           Oq = null !== (Eq = null === lq || void 0 === lq ? void 0 : lq.subquests.find((qq => "ready" === qq.status))) && void 0 !== Eq ? Eq : null === lq || void 0 === lq ? void 0 : lq.subquests.find((qq => "active" === qq.status));
-         return Oq ? {
-           kind: "step",
-           questId: lq.id,
-           questNameKey: lq.nameKey,
-           step: Oq
- ... (1 more removed lines; see GitHub link above)
+       getScreenFade() {
+         return this.fade.getScreen()
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1160-L1161` → after: `L940-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L940-L941) · [Before (L1160-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1160-L1161)

```diff
-       hasPendingQuestPopup() {
-         return this.pending.some((qq => !tE(qq)))
+       getLoadingPositions() {
+         return this.loadingPositions
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1163-L1165` → after: `L943-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L943-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L943-L1072) · [Before (L1163-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1163-L1165)

```diff
-       advance() {
-         var qq;
-         this.current = this.Fc ? null : null !== (qq = this.pending.shift()) && void 0 !== qq ? qq : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCo … [truncated]
+       isActive() {
+         return null !== this.shot || null !== this.blend
+       }
+       update(CC, zC) {
+         const ZC = Number.isFinite(CC) && CC > 0 ? CC : 0;
+         if (this.fade.advance(ZC) && null !== this.pending) {
+           const {
+             settings: CC
+           } = this.pending;
+           this.pending = null, this.show(CC, !0)
+         }
+         this.loadingPositions.length = 0;
+         const QC = this.pending;
+         if (null !== QC && void 0 !== QC && QC.shot) {
+           const CC = "path" === QC.settings.mode ? 0 : ZC;
+           this.noteLoadingPosition(QC.shot.update(CC, oC.e).position)
+ ... (114 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1170` → after: `L1078-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1078-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1078-L1081) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1170)

```diff
-       return rE(qq.questCompletionKind)
+       if (!(0, wC.n)(CC, 3)) return;
+       const zC = Math.max(Math.abs(CC[0]), Math.abs(CC[1]), Math.abs(CC[2])),
+         ZC = Math.hypot(CC[0] / zC, CC[1] / zC, CC[2] / zC);
+       return 0 === zC || zC * ZC < QC.k.minDirectionLength ? void 0 : [CC[0] / zC / ZC, CC[1] / zC / ZC, CC[2] / zC / ZC]
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1174` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1085) · [Before (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1174)

```diff
-       return "skillLevel" === qq || "landmark" === qq || "npcNote" === qq
+       if (void 0 !== CC) return "string" === typeof CC ? bC.includes(CC) ? CC : void 0 : (0, wC.n)(CC, 4) ? [fC(CC[0], 0, 1, 0), fC(CC[1], QC.k.minEasingY, QC.k.maxEasingY, 0), fC(CC[2], 0, 1, 1), fC(CC[3], QC.k.minEasingY, QC.k.maxEasingY, 1)] : "linear"
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1281-L1283` → after: `L1088-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1088-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1088-L1093) · [Before (L1281-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1281-L1283)

```diff
-     function FE(qq, Eq) {
-       const gq = document.createElement("img");
-       return gq.className = Eq, gq.src = qq, gq.alt = "", gq.draggable = !1, gq
+     function pC(CC) {
+       if (CC) return {
+         maxYaw: fC(CC.maxYaw, 0, QC.k.maxPlayerLook, 0),
+         maxPitch: fC(CC.maxPitch, 0, QC.k.maxPlayerLook, 0),
+         returnMs: oC(CC.returnMs, 0, QC.k.maxReturnMs)
+       }
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1288-L1293` → after: `L1099-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1099-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1099-L1117) · [Before (L1288-L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1288-L1293)

```diff
-       const gq = null !== (Eq = UE[qq]) && void 0 !== Eq ? Eq : qq.startsWith("npc_") ? iE : pE;
-       if ("portal" !== qq) return FE(gq, "SkyblockMapIcon");
-       const Yq = document.createElement("span");
-       Yq.className = "SkyblockMapIcon Portal";
-       const lq = document.createElement("span");
-       return lq.className = "SkyblockMapIconTint", lq.style.maskImage = lq.style.webkitMaskImage = `url("${TE}")`, Yq.append(FE(gq, "SkyblockMapIconLayer"), lq, FE(TE, "SkyblockMapIconLayer SkyblockMapIconShade")), Yq
+       if ("object" !== typeof CC || null === CC) return;
+       const ZC = QC.k.maxTransitionMs,
+         wC = QC.k.minTransitionFadeMs;
+       return {
+         colour: "string" === typeof CC.colour && PC.test(CC.colour) ? CC.colour : QC.f,
+         outMs: fC(CC.outMs, wC, ZC, wC),
+         holdMs: fC(null !== (zC = CC.holdMs) && void 0 !== zC ? zC : 0, 0, ZC, 0),
+         inMs: fC(CC.inMs, wC, ZC, wC)
+       }
+     }
+ 
+     function RC(CC) {
+       return !0 === CC || void 0
+     }
+ 
+     function AC(CC) {
+ ... (3 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1308-L1321` → after: `L1122-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1122-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1122-L1128) · [Before (L1308-L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1308-L1321)

```diff
-         radius: 45,
-         squareness: 3,
-         wobbles: KE.map((qq => {
-           let {
-             lobes: gq,
-             amount: Yq
-           } = qq;
-           return {
-             lobes: gq[Math.floor(Eq.next() * gq.length)],
-             amount: Yq[0] + Eq.next() * (Yq[1] - Yq[0]),
-             phase: 2 * Eq.next() * Math.PI
-           }
-         })),
-         samples: 160
+         ...CC,
+         timeMs: fC(CC.timeMs, 0, QC.k.maxPathMs, 0),
+         position: qC(CC.position),
+         lookAt: FC(CC.lookAt),
+         lookDirection: gC(CC.lookDirection),
+         fov: oC(CC.fov, QC.k.minFov, QC.k.maxFov),
+         easing: SC(CC.easing)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1333-L1345` → after: `L1134-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1134-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1134-L1138) · [Before (L1333-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1333-L1345)

```diff
-       for (let mq = 0; mq < lq; mq++) {
-         const qq = 2 * Math.PI * mq / lq,
-           xq = Math.cos(qq),
-           Aq = Math.sin(qq),
-           cq = Eq * (Math.abs(xq) ** gq + Math.abs(Aq) ** gq) ** (-1 / gq) * Yq.reduce(((Eq, gq) => {
-             let {
-               lobes: Yq,
-               amount: lq,
-               phase: Oq
-             } = gq;
-             return Eq + lq * Math.sin(Yq * qq + Oq)
-           }), 1);
-         Oq.push(`${(50+cq*xq).toFixed(2)} ${(50+cq*Aq).toFixed(2)}`)
+       if (!Array.isArray(CC)) return zC;
+       for (const ZC of CC.slice(0, QC.k.maxKeyframes)) {
+         if (!AC(ZC)) continue;
+         const CC = xC(ZC);
+         (0 === zC.length || CC.timeMs > zC[zC.length - 1].timeMs) && zC.push(CC)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1347` → after: `L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1140) · [Before (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1347)

```diff
-       return `M${Oq.join("L")}Z`
+       return zC
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1349-L1407` → after: `L1142-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1142-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1142-L1169) · [Before (L1349-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1349-L1407)

```diff
-     const eE = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
-     class DE {
-       constructor() {
-         this.compassSpacing = 1, this.compassSize = {
-           trackHalfWidth: 0,
-           screenHalfWidth: 0
-         }, this.compass = null, this.terrain = null, this.searchAreaPath = {
-           seed: "",
-           d: ""
-         }, this.searchAreas = {
-           minimap: null,
-           map: null
-         }, this.player = null, this.waypoint = null, this.markerIcon = null, this.waypointMarkerSize = {
-           width: 0,
-           height: 0
-         }, this.waypointInset = {
- ... (43 more removed lines; see GitHub link above)
+ 
+     function IC(CC) {
+       if ("object" !== typeof CC || null === CC) return {
+         mode: "default"
+       };
+       const zC = {
+           blendInMs: oC(CC.blendInMs, 0, QC.k.maxBlendInMs),
+           blendEasing: SC(CC.blendEasing),
+           transition: GC(CC.transition),
+           letterbox: RC(CC.letterbox),
+           hideHud: RC(CC.hideHud)
+         },
+         ZC = {
+           mode: "default",
+           ...zC
+         };
+ ... (12 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1409-L1429` → after: `L1171-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1171-L1173) · [Before (L1409-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1409-L1429)

```diff
-           const lq = () => {
-               this.waypointMarkerSize = {
-                 width: Yq.offsetWidth,
-                 height: Yq.offsetHeight
-               }, this.waypointInset = {
-                 x: Yq.offsetWidth / 2 + 8,
-                 top: Yq.offsetHeight + 8,
-                 bottom: 8
-               }
-             },
-             Oq = new ResizeObserver((() => {
-               lq(), this.render(this.frame)
-             }));
-           Oq.observe(Yq, {
-             box: "border-box"
-           });
- ... (5 more removed lines; see GitHub link above)
+         case "follow":
+           return {
+             ...CC, ...bC, target: "string" === typeof CC.target ? CC.target : void 0, lookAt: FC(CC.lookAt), offset: (NC = CC.offset, Array.isArray(NC) ? [fC(NC[0], -QC.k.maxOffset, QC.k.maxOffset, 0), fC(NC[1], -QC.k.maxOffset, QC.k.maxOffset, 0), fC(NC[2], -QC.k.maxOffset, QC.k … [truncated]
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1431-L1452` → after: `L1175-L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1175-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1175-L1231) · [Before (L1431-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1431-L1452)

```diff
-           window.addEventListener("resize", mq), null === (gq = window.visualViewport) || void 0 === gq || gq.addEventListener("resize", mq), this.stopWaypoint = () => {
-             var qq;
-             Oq.disconnect(), window.removeEventListener("resize", mq), null === (qq = window.visualViewport) || void 0 === qq || qq.removeEventListener("resize", mq)
-           }, mq(), lq(), this.render(this.frame)
-         }, this.mountWaypointOrigin = qq => {
-           var Eq;
-           if (null === (Eq = this.stopWaypointOrigin) || void 0 === Eq || Eq.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = qq && !this.eN ? Number(qq.dataset.notificationToken) : null, qq && !this.eN && !window.matchMedia("(pre … [truncated]
-             const Eq = {
-               nameKey: qq.dataset.waypointNameKey,
-               x: 0,
-               y: 0,
-               startedAt: null
-             };
-             this.waypointLaunch = Eq;
-             const gq = () => {
-                 const gq = qq.getBoundingClientRect();
- ... (6 more removed lines; see GitHub link above)
+         case "path":
+           return {
+             ...CC, ...bC, keyframes: JC(CC.keyframes)
+           };
+         case "frame":
+           return {
+             ...CC, ...bC, targets: MC(CC.targets), viewHeading: oC(CC.viewHeading, -QC.k.maxFrameHeading, QC.k.maxFrameHeading), viewElevation: oC(CC.viewElevation, 0, QC.k.maxFrameElevation), padding: oC(CC.padding, 0, QC.k.maxFrameDistance), closestDistance: oC(CC.closestDistan … [truncated]
+           };
+         default:
+           return ZC
+       }
+     }
+   },
+   38487: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => fC
+ ... (41 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1454-L1481` → after: `L1233-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1233-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1233-L1253) · [Before (L1454-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1454-L1481)

```diff
-           this.render(this.frame)
-         }, this.layout = () => {
-           if (!this.compass) return;
-           const qq = this.compass.root,
-             Eq = getComputedStyle(qq),
-             gq = getComputedStyle(document.documentElement),
-             Yq = parseFloat(gq.fontSize),
-             lq = parseFloat(Eq.getPropertyValue("--compass-icon-size")) * Yq,
-             Oq = "1" === Eq.getPropertyValue("--compass-fit-top").trim(),
-             mq = Oq ? 1 : 8,
-             xq = Array.from(document.querySelectorAll(eE), (qq => {
-               var Eq;
-               return (null !== (Eq = qq.querySelector(".MiddleTextTop")) && void 0 !== Eq ? Eq : qq).getBoundingClientRect()
-             })).filter((qq => qq.width > 0 && qq.height > 0));
-           let Aq = (parseFloat(gq.getPropertyValue("--notchTop")) || 0) + mq,
-             cq = "";
- ... (12 more removed lines; see GitHub link above)
+           return null
+         }(CC, [SC, ...pC], MC);
+         GC !== SC && function(CC, zC, QC) {
+           nC || (nC = !0, Promise.resolve().then((() => ZC(1029))).then((ZC => {
+             let {
+               IS: wC
+             } = ZC;
+             wC(new Error("A canvas didn't take canvasTxt's font"), {
+               font: CC,
+               lM: zC,
+               drawnWith: null !== QC && void 0 !== QC ? QC : "the kept font, scaled"
+             })
+           })).catch((() => {})))
+         }(SC, PC, GC);
+         const RC = wC(CC.font);
+         if (null === GC && null !== RC && RC > 0) {
+ ... (5 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1520-L1529` → after: `L1259-L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1259-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1259-L1289) · [Before (L1520-L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1520-L1529)

```diff
-         this.terrain && (qg(this.terrain, !(null !== qq && void 0 !== qq && qq.minimap)), null !== qq && void 0 !== qq && qq.minimap && (this.terrain.style.transform = qq.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", qq.minimap.iconRotation)));
-         const Eq = null === qq || void 0 === qq ? void 0 : qq.searchArea;
-         for (const gq of [this.searchAreas.minimap, this.searchAreas.map])
-           if (gq && (qg(gq, !Eq), Eq)) {
-             if (this.searchAreaPath.seed !== Eq.shapeSeed && (this.searchAreaPath = {
-                 seed: Eq.shapeSeed,
-                 d: IE(CE(Eq.shapeSeed))
-               }), gq.dataset.shapeSeed !== Eq.shapeSeed) {
-               gq.dataset.shapeSeed = Eq.shapeSeed;
-               for (const qq of gq.querySelectorAll("path")) qq.setAttribute("d", this.searchAreaPath.d)
+         return this.drawLines(CC, zC, QC, fC, oC, qC, MC)
+       },
+       drawLines: function(CC, zC, ZC, wC, bC, nC, fC) {
+         const oC = ZC + bC,
+           qC = wC + nC;
+         let FC, WC = wC + nC / 2 + fC / 2;
+         "right" === this.align ? (FC = oC, CC.textAlign = "right") : "left" === this.align ? (FC = ZC, CC.textAlign = "left") : (FC = ZC + bC / 2, CC.textAlign = "center");
+         for (const QC of zC) {
+           CC.measureText(QC).width >= bC && (zC = zC.replace(QC, ""))
+         }
+         zC = (0, QC.bb)(zC);
+         const NC = [],
+           MC = zC.split("\n"),
+           gC = this.justify ? CC.measureText("\u200a").width : 0;
+         MC.forEach((zC => {
+           let ZC = CC.measureText(zC).width;
+ ... (15 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1531-L1568` → after: `L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1291) · [Before (L1531-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1531-L1568)

```diff
-             gq.style.left = `${Eq.left}%`, gq.style.top = `${Eq.top}%`, gq.style.width = `${Eq.width}%`, gq.style.height = `${Eq.height}%`
-           } if (this.player && (qg(this.player, !(null !== qq && void 0 !== qq && qq.player) || qq.player.hidden), null !== qq && void 0 !== qq && qq.player && (this.player.style.left = `${qq.player.left}%`, this.player.style.top = `${qq.player.top}%`, this.player.style.setProper … [truncated]
-           const {
-             root: Eq,
-             marker: gq,
-             clip: Yq,
-             text: lq,
-             label: Oq,
-             distance: mq,
-             hint: xq
-           } = this.waypoint, Aq = !(null !== qq && void 0 !== qq && qq.waypoint) || null !== qq.waypoint.popupToken && qq.waypoint.popupToken !== this.waypointOriginToken;
-           qg(Eq, Aq);
-           let cq = 1;
-           const uq = this.waypointLaunch;
-           if (!Aq && uq && qq.waypoint.nameKey === uq.nameKey) {
-             const qq = performance.now();
- ... (22 more removed lines; see GitHub link above)
+             ZC > 0 && NC.push(QC)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1571-L1577` → after: `L1304-L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1304-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1304-L1327) · [Before (L1571-L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1571-L1577)

```diff
-       }
-       dispose() {
-         var qq, Eq;
-         this.mountWaypointOrigin(null), this.render(null), null === (qq = this.stopLayout) || void 0 === qq || qq.call(this), this.stopLayout = null, null === (Eq = this.stopWaypoint) || void 0 === Eq || Eq.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = … [truncated]
-           minimap: null,
-           map: null
-         }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.eN = !0
+       },
+       getTextHeight: function(CC, zC) {
+         const ZC = CC.textBaseline;
+         CC.textBaseline = "bottom";
+         const {
+           actualBoundingBoxAscent: QC
+         } = CC.measureText(zC);
+         return CC.textBaseline = ZC, QC
+       },
+       justifyLine: function(CC, zC, ZC, QC, wC) {
+         const bC = zC.trim(),
+           nC = CC.measureText(bC).width,
+           fC = bC.split(/\s+/).length - 1,
+           oC = Math.floor((wC - nC) / ZC);
+         if (fC <= 0 || oC <= 0) return bC;
+         const qC = Math.floor(oC / fC);
+ ... (8 more added lines; see GitHub link above)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1580` → after: `L1330-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1330-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1330-L1331) · [Before (L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1580)

```diff
- 
+   },
+   38964: (CC, zC, ZC) => {
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L1582-L9332` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1333) · [Before (L1582-L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L1582-L9332)

```diff
-       qq.hidden !== Eq && (qq.hidden = Eq)
-     }
-     const Eg = .55,
-       gg = .6;
-     const Yg = {
-       talk: "quest_talk",
-       search: "quest_search"
-     };
-     class lg {
-       constructor(qq, Eq, gq, Yq) {
-         this.map = qq, this.quests = Eq, this.compass = gq, this.display = new DE, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.eN = !1, this.snapshot = null, this.texts = new Map, this.translate = Yq
-       }
-       setTranslator(qq, Eq) {
-         this.translate = qq, this.locale = Eq, this.metresFormat = new Intl.NumberFormat(Eq), this.texts.clear()
-       }
-       translateCached(qq, Eq) {
- ... (7735 more removed lines; see GitHub link above)
+       return zC.set(CC), zC
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9335-L9338` → after: `L1357-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1357-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1357-L1363) · [Before (L9335-L9338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9335-L9338)

```diff
-     function dx(qq) {
-       return {
-         "--letter-delay": `${Vx(qq)}ms`,
-         "--letter-land": `${Vx(qq)+300}ms`
+     function FC(CC, zC, ZC) {
+       if ("string" !== typeof CC) return zC;
+       try {
+         const ZC = JSON.parse(CC);
+         return ZC && "object" === typeof ZC ? ZC : zC
+       } catch (QC) {
+         return void 0 !== ZC && console.error(`Couldn't parse ${ZC}`, QC), zC
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9343-L9369` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1368) · [Before (L9343-L9369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9343-L9369)

```diff
-       let {
-         letterCount: Eq
-       } = qq;
-       return (0, il.jsxs)("div", {
-         className: "SkyblockMailboxArt",
-         "aria-hidden": "true",
-         children: [(0, il.jsx)("img", {
-           className: "SkyblockMailboxFrame",
-           src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
-           alt: ""
-         }), (0, il.jsx)("img", {
-           className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
-           src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
-           alt: ""
-         }), (0, il.jsx)("img", {
-           className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
- ... (11 more removed lines; see GitHub link above)
+       return FC(CC, null, "a leaderboard's rows")
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9372-L9410` → after: `L1371-L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1371-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1371-L1376) · [Before (L9372-L9410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9372-L9410)

```diff
-     function Hx(qq) {
-       var Eq, gq, Yq;
-       let {
-         letter: lq,
-         index: Oq
-       } = qq;
-       const {
-         t: mq
-       } = (0, nl.v)(), xq = null !== (Eq = null === (gq = lq.items[0]) || void 0 === gq ? void 0 : gq.itemName) && void 0 !== Eq ? Eq : ax;
-       return (0, il.jsxs)("li", {
-         className: "SkyblockMailboxLetter",
-         style: dx(Oq),
-         children: [(0, il.jsx)("div", {
-           className: "SkyblockMailboxStamp",
-           "aria-hidden": "true",
-           children: (0, il.jsx)(rl.e, {
- ... (23 more removed lines; see GitHub link above)
+     function NC(CC, zC) {
+       var ZC, QC;
+       return null !== zC && void 0 !== zC ? zC : {
+         status: null !== (ZC = CC.status) && void 0 !== ZC ? ZC : "loading",
+         entries: null !== (QC = CC.entries) && void 0 !== QC ? QC : []
+       }
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9413-L9453` → after: `L1379-L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1379-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1379-L1380) · [Before (L9413-L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9413-L9453)

```diff
-     function ox(qq) {
-       let {
-         view: Eq
-       } = qq;
-       const {
-         t: gq
-       } = (0, nl.v)();
-       return (0, il.jsx)("div", {
-         className: "SkyblockMailbox",
-         style: {
-           "--mail-duration": `${Eq.durationMs}ms`,
-           "--flag-up": "300ms",
-           "--door-open": "500ms",
-           "--more-land": `${Vx(Eq.letters.length)+300}ms`
-         },
-         role: "status",
- ... (25 more removed lines; see GitHub link above)
+     function MC(CC, zC) {
+       return "number" === typeof CC && Number.isFinite(CC) && CC > 0 ? CC : zC
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9465-L9530` → after: `L1383-L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1383-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1383-L1397) · [Before (L9465-L9530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9465-L9530)

```diff
-     function Qx(qq) {
-       let {
-         controller: Eq
-       } = qq;
-       const {
-         t: gq
-       } = (0, nl.v)(), Yq = (0, bl.h)(pY, Eq.getSnapshot());
-       if (null === Yq) return null;
-       const lq = Yq.fullSet ? "empty" === Yq.fuelState ? {
-         text: gq("skyblockGame:magmawardHudNoFuel"),
-         tone: "empty"
-       } : null : {
-         text: gq("skyblockGame:magmawardHudFullSet", {
-           worn: String(Yq.wornCount)
-         }),
-         tone: "partial"
- ... (50 more removed lines; see GitHub link above)
+     function gC(CC, zC) {
+       const ZC = MC(CC.size, 1);
+       let QC = MC(CC.width, MC(2.5 * ZC, 2.5)),
+         wC = MC(CC.height, MC(3.75 * ZC, 3.75));
+       Number.isFinite(bC * wC / QC) && Number.isFinite(nC * QC / wC) || (QC = 2.5, wC = 3.75);
+       const fC = wC / QC,
+         oC = Math.max(1, Math.min(bC, zC / fC));
+       return {
+         width: QC,
+         height: wC,
+         layoutWidth: Math.max(bC, nC / fC),
+         layoutHeight: Math.max(nC, bC * fC),
+         pixelWidth: Math.round(oC),
+         pixelHeight: Math.round(Math.max(1, Math.min(zC, oC * fC)))
+       }
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9533-L9568` → after: `L1400-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1400-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1400-L1495) · [Before (L9533-L9568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9533-L9568)

```diff
-     function yx(qq) {
-       let {
-         controller: Eq
-       } = qq;
-       const {
-         t: gq,
-         selectedLanguage: Yq
-       } = (0, nl.v)(), lq = (0, bl.h)(LY, Eq.getSnapshot());
-       return null === lq ? null : (0, il.jsx)(yl.g, {
-         placement: "statBars",
-         children: (0, il.jsxs)("div", {
-           className: Pl()("SkyblockGlowtideChip", {
-             SkyblockGlowtideChipInRange: lq.inRange
-           }),
-           style: {
-             "--glowtide-colour": lq.colour
- ... (20 more removed lines; see GitHub link above)
+     function SC(CC, zC, ZC, nC, FC, WC) {
+       CC.setTransform(1, 0, 0, 1, 0, 0), CC.fillStyle = wC.H.defaultNameTagBackground, CC.fillRect(0, 0, zC, ZC), CC.scale(zC / nC.layoutWidth, ZC / nC.layoutHeight), CC.translate((nC.layoutWidth - bC) / 2, 0),
+         function(CC, zC, ZC, bC) {
+           var nC, FC, WC, NC;
+           const {
+             top: MC,
+             around: gC,
+             showPlayerText: SC,
+             localPlayerDbId: GC
+           } = ZC, {
+             whiteUiText: RC,
+             grayUiText: AC,
+             yellowUiText: xC
+           } = wC.H;
+           CC.textBaseline = "middle";
+           const JC = function(zC, ZC, QC, wC, bC, nC) {
+ ... (80 more added lines; see GitHub link above)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9571-L9617` → after: `L1498-L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1498-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1498-L1499) · [Before (L9571-L9617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9571-L9617)

```diff
-     function tx(qq) {
-       let {
-         controller: Eq
-       } = qq;
-       const {
-         t: gq
-       } = (0, nl.v)(), Yq = (0, bl.h)(kY, Eq.getSnapshot());
-       return null === Yq ? null : (0, il.jsx)(yl.g, {
-         placement: "statBars",
-         children: (0, il.jsxs)("div", {
-           className: Pl()("SkyblockGlowMeter", {
-             SkyblockGlowMeterFull: Yq.full
-           }),
-           "aria-label": gq("skyblockGame:glowMeterLabel", {
-             fill: String(Yq.fill),
-             WB: String(Yq.WB)
- ... (31 more removed lines; see GitHub link above)
+     function pC(CC, zC) {
+       return Array.isArray(CC) ? CC.slice(0, zC).filter((CC => CC && Number.isFinite(CC.rank) && Number.isFinite(CC.value))) : []
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9620-L9671` → after: `L1502-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1502-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1502-L1509) · [Before (L9620-L9671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9620-L9671)

```diff
-     function rx(qq) {
-       let {
-         controller: Eq
-       } = qq;
-       const {
-         t: gq
-       } = (0, nl.v)(), Yq = (0, bl.h)(UY, Eq.getSnapshot());
-       if (null === Yq) return null;
-       const lq = "waiting" === Yq.phase,
-         Oq = {
-           animationDuration: `${Yq.waitMs}ms`,
-           animationDelay: -Yq.elapsedMs + "ms"
-         },
-         mq = lq ? void 0 : {
-           animationDuration: `${Yq.waitMs}ms`
-         };
- ... (36 more removed lines; see GitHub link above)
+     function PC(CC, zC) {
+       const ZC = [];
+       let QC = !1;
+       return CC.forEach(((wC, bC) => {
+         if (null !== zC && wC.value === zC.value) return void ZC.push(zC.rank);
+         const nC = bC > 0 && wC.value === CC[bC - 1].value;
+         nC || (QC = 0 === bC && 1 !== wC.rank), ZC.push(nC && !QC ? ZC[bC - 1] : wC.rank)
+       })), ZC
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9675-L9690` → after: `L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1520) · [Before (L9675-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9675-L9690)

```diff
-       let {
-         chart: Eq,
-         showHere: gq,
-         className: Yq
-       } = qq;
-       return (0, il.jsx)("div", {
-         className: Pl()("SkyblockTideChartGrid", Yq, null !== Eq.pictureName && "Complete"),
-         "aria-hidden": "true",
-         children: Eq.cells.map(((qq, Yq) => {
-           const lq = 0 !== (Eq.pulseCells & 1 << Yq),
-             Oq = Eq.castCell === Yq;
-           return (0, il.jsx)("span", {
-             className: Pl()("SkyblockTideChartCell", `Cell-${qq}`, lq && "Pulse", Oq && "Cast", gq && Eq.hereCell === Yq && "Here")
-           }, `${Yq}:${lq?`p${Eq.pulseToken}`:""}:${Oq?`c${Eq.castToken}`:""}`)
-         }))
-       })
+       return Array.from(CC).length
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9694-L9729` → after: `L1524-L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1524-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1524-L1538) · [Before (L9694-L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9694-L9729)

```diff
-       let {
-         controller: Eq
-       } = qq;
-       const gq = (0, bl.h)(sY, Eq.getSnapshot()),
-         {
-           t: Yq
-         } = (0, nl.v)(),
-         lq = gq.chip;
-       if (!gq.enabled || null === lq) return null;
-       const Oq = Yq("skyblockGame:tideChartsChipLabel", {
-         island: lq.islandName,
-         lit: String(lq.lit),
-         ink: String(lq.ink)
-       });
-       return (0, il.jsx)(yl.g, {
-         placement: "statBars",
- ... (20 more removed lines; see GitHub link above)
+       const zC = [""];
+       let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         wC = "";
+       const bC = () => {
+         zC.push(""), ZC = 0, wC = ""
+       };
+       for (const nC of CC.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
+         if (/^\r?\n$/.test(nC)) bC();
+         else if (/^\s+$/.test(nC)) wC += nC;
+       else if (nC.length > 0) {
+         const CC = Array.from(nC);
+         ZC > 0 && ZC + wC.length + CC.length > QC && bC(), zC[zC.length - 1] += wC, ZC += wC.length, wC = "";
+         for (const wC of CC) ZC >= QC && bC(), zC[zC.length - 1] += wC, ZC++
+       }
+       return zC[zC.length - 1] += wC, zC
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9733-L9836` → after: `L1550-L1556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1550-L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1550-L1556) · [Before (L9733-L9836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9733-L9836)

```diff
-       let {
-         controller: Eq
-       } = qq;
-       const gq = (0, bl.h)(sY, Eq.getSnapshot()),
-         {
-           t: Yq
-         } = (0, nl.v)(),
-         lq = kl(),
-         Oq = gq.card;
-       return gq.enabled && null !== Oq ? (0, il.jsx)(Gl.c, {
-         show: gq.open,
-         close: Eq.dismiss,
-         togglePointerLock: !1,
-         className: "SkyblockSkillsOverlay",
-         children: (0, il.jsxs)("section", {
-           className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
- ... (88 more removed lines; see GitHub link above)
+       if (!CC) return [...bC];
+       try {
+         const [zC, ZC, QC] = wC()(CC).rgb().array();
+         return [zC / 255, ZC / 255, QC / 255]
+       } catch (zC) {
+         return console.warn(`Invalid groundArrowPath colour "${CC}":`, zC), [...bC]
+       }
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9841-L9899` → after: `L1572-L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1572-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1572-L1573) · [Before (L9841-L9899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9841-L9899)

```diff
-       let {
-         controller: gq
-       } = qq;
-       const {
-         selectedLanguage: Yq
-       } = (0, nl.v)(), lq = Yq.code;
-       (0, vq.useEffect)((() => {
-         gq.setTranslator(((qq, Eq) => (0, nl.s)(lq, qq, Eq)), lq, ((qq, Eq) => (0, nl.n)(lq, qq, Eq)))
-       }), [gq, lq]);
-       const Oq = (0, bl.h)(Wq, gq.map.getSnapshot()),
-         {
-           openInGameMenuName: mq
-         } = (0, Ql.j)(["openInGameMenuName"]);
-       return (0, il.jsxs)(il.Fragment, {
-         children: [(0, il.jsx)(qx, {
-           controller: gq.quests,
- ... (43 more removed lines; see GitHub link above)
+       const ZC = Math.min(screen.width, screen.height) * (null !== (zC = (0, QC.c)()) && void 0 !== zC ? zC : (0, wC.m)());
+       return Math.max(window.innerHeight * (0, wC.m)(), ZC) / (0, wC.q)(CC)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9902-L9944` → after: `L1576-L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1576-L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1576-L1577) · [Before (L9902-L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9902-L9944)

```diff
-     function ix(qq) {
-       let {
-         controller: Eq
-       } = qq;
-       return (0, il.jsxs)(il.Fragment, {
-         children: [(0, il.jsx)(qO, {
-           controller: Eq.map,
-           navigation: Eq.navigation
-         }), (0, il.jsx)(YO, {
-           controller: Eq.skills,
-           surface: "menu"
-         }), (0, il.jsx)(BO, {
-           controller: Eq.quests,
-           surface: "menu"
-         }), (0, il.jsx)(sO, {
-           controller: Eq.dungeons
- ... (27 more removed lines; see GitHub link above)
+     function oC(CC, zC, ZC) {
+       return zC / (2 * Math.tan(ZC / 2)) > nC ? CC : qC(CC)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L9949-L10097` → after: `L1580-L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1580-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1580-L1581) · [Before (L9949-L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L9949-L10097)

```diff
-     function Mx(qq, Eq, gq, Yq, lq) {
-       const Oq = [],
-         mq = [],
-         xq = gq => {
-           const Yq = qq.playSound(Eq, gq.sound, gq.volume, gq.rate);
-           Yq && (mq.push(Yq), void 0 !== gq.cutAfter && Oq.push(setTimeout((() => {
-             Yq.fade(Yq.getVolume(), 0, 300)
-           }), gq.cutAfter)))
-         };
-       for (const Aq of function(qq, Eq) {
-           const gq = [{
-             sound: "rpgKnifeSlice1",
-             beat: qY,
-             lead: 260,
-             volume: .5,
-             rate: 1
- ... (133 more removed lines; see GitHub link above)
+     function qC(CC) {
+       return CC.map((CC => CC.replace(bC, "/textures/skyBoxes/$1/1024/$2")))
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L10099` → after: `L1583-L1591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1583-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1583-L1591) · [Before (L10099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L10099)

```diff
-     var zx = gq(4096);
+   },
+   33998: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => bC,
+       e: () => fC,
+       h: () => nC,
+       l: () => wC,
+       m: () => QC
+     });
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L10101-L10110` → after: `L1593-L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1593-L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1593-L1595) · [Before (L10101-L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L10101-L10110)

```diff
-         0: [15],
-         1: [40, 60, 40],
-         2: [40, 60, 40, 60, 60],
-         3: [30, 50, 30, 50, 90]
-       },
-       px = {
-         1: {
-           count: 24,
-           rise: 2.5,
-           colour: [79, 237, 237]
+         default: {
+           type: "earth",
+           vertexTint: [137, 207, 240]
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L10112-L10115` → after: `L1597-L1604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1597-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1597-L1604) · [Before (L10112-L10115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L10112-L10115)

```diff
-         2: {
-           count: 40,
-           rise: 3.5,
-           colour: [245, 209, 66]
+         gloomy: {
+           type: "custom",
+           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
+           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
+           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
+           px: "/textures/skyBoxes/gloomy/_px.jpg",
+           py: "/textures/skyBoxes/gloomy/_py.jpg",
+           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L10117-L10410` → after: `L1606-L1622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1606-L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1606-L1622) · [Before (L10117-L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L10117-L10410)

```diff
-         3: {
-           count: 64,
-           rise: 5,
-           colour: [206, 145, 206]
-         }
-       };
-     class Gx {
-       constructor(qq) {
-         this.deps = qq, this.tell = null
-       }
-       receiveTell(qq) {
-         let {
-           biteTellTier: Eq
-         } = qq;
-         this.tell = {
-           tier: Eq,
- ... (278 more removed lines; see GitHub link above)
+         interstellar: {
+           type: "custom",
+           nx: "/textures/skyBoxes/interstellar/_nx.jpg",
+           ny: "/textures/skyBoxes/interstellar/_ny.jpg",
+           nz: "/textures/skyBoxes/interstellar/_nz.jpg",
+           px: "/textures/skyBoxes/interstellar/_px.jpg",
+           py: "/textures/skyBoxes/interstellar/_py.jpg",
+           pz: "/textures/skyBoxes/interstellar/_pz.jpg"
+         },
+         space_blue: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_blue/_nx.jpg",
+           ny: "/textures/skyBoxes/space_blue/_ny.jpg",
+           nz: "/textures/skyBoxes/space_blue/_nz.jpg",
+           px: "/textures/skyBoxes/space_blue/_px.jpg",
+           py: "/textures/skyBoxes/space_blue/_py.jpg",
+ ... (1 more added lines; see GitHub link above)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L10412-L10414` → after: `L1624-L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1624-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1624-L1676) · [Before (L10412-L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L10412-L10414)

```diff
-         fishing_1: {
-           raises: qq => "Draugr Warper" === qq.type,
-           rise: .4
+         space_lightblue: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_lightblue/_nx.jpg",
+           ny: "/textures/skyBoxes/space_lightblue/_ny.jpg",
+           nz: "/textures/skyBoxes/space_lightblue/_nz.jpg",
+           px: "/textures/skyBoxes/space_lightblue/_px.jpg",
+           py: "/textures/skyBoxes/space_lightblue/_py.jpg",
+           pz: "/textures/skyBoxes/space_lightblue/_pz.jpg"
+         },
+         space_red: {
+           type: "custom",
+           nx: "/textures/skyBoxes/space_red/_nx.jpg",
+           ny: "/textures/skyBoxes/space_red/_ny.jpg",
+           nz: "/textures/skyBoxes/space_red/_nz.jpg",
+           px: "/textures/skyBoxes/space_red/_px.jpg",
+           py: "/textures/skyBoxes/space_red/_py.jpg",
+ ... (37 more added lines; see GitHub link above)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L10417-L10885` → after: `L1679-L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1679-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1679-L1682) · [Before (L10417-L10885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L10417-L10885)

```diff
-       xA = (qq, Eq, gq, Oq) => {
-         let {
-           localPlayerId: mq
-         } = Oq;
-         const xq = new Hl({
-           translate: (qq, Eq) => (0, nl.s)(Lx.h.get().getCurrentLanguageCode(), qq, Eq),
-           translateWithIcons: (qq, Eq) => (0, nl.n)(Lx.h.get().getCurrentLanguageCode(), qq, Eq),
-           setMenuOpen: qq => {
-             qq ? (0, Xq.m)() : (0, Xq.e)()
-           },
-           dismissMenu: Xq.h,
-           publishSkills: qq => {
-             wq.i.TV(Og, qq, !0)
-           },
-           publishQuests: qq => {
-             wq.i.TV(cg, qq, !0)
- ... (453 more removed lines; see GitHub link above)
+       wC = "/textures/dayNight/sun.png",
+       bC = "/textures/dayNight/moon.png",
+       nC = "/textures/dayNight/stars",
+       fC = ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L10887` → after: `L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1684) · [Before (L10887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L10887)

```diff
-   9304: (qq, Eq, gq) => {
+   39022: (CC, zC, ZC) => {
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L10889-L10890` → after: `L1686-L1693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1686-L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1686-L1693) · [Before (L10889-L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L10889-L10890)

```diff
-       c: () => lq,
-       d: () => mq
+       b: () => FC,
+       f: () => WC,
+       g: () => QC,
+       k: () => oC,
+       m: () => wC,
+       o: () => qC,
+       s: () => fC,
+       u: () => nC
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L10892-L11072` → after: `L1695-L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1695-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1695-L1697) · [Before (L10892-L11072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L10892-L11072)

```diff
-     const Yq = [{
-       threshold: 10n ** 180n,
-       suffix: "NoQig"
-     }, {
-       threshold: 10n ** 177n,
-       suffix: "OcQig"
-     }, {
-       threshold: 10n ** 174n,
-       suffix: "SpQig"
-     }, {
-       threshold: 10n ** 171n,
-       suffix: "SQig"
-     }, {
-       threshold: 10n ** 168n,
-       suffix: "QiQig"
-     }, {
- ... (165 more removed lines; see GitHub link above)
+     const QC = ["linear", "easeIn", "easeOut", "easeInOut"],
+       wC = ["movement", "camera", "cursor"],
+       bC = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L11074-L11101` → after: `L1699-L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1699-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1699-L1700) · [Before (L11074-L11101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L11074-L11101)

```diff
-     function lq(qq) {
-       let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
-       if ("number" === typeof qq) {
-         if (!Number.isFinite(qq)) return "0";
-         if (Math.abs(qq) < 100) {
-           const Eq = qq < 0 ? "-" : "",
-             gq = Math.abs(qq);
-           return gq >= 10 ? `${Eq}${gq.toFixed(1).replace(/\.0$/,"")}` : `${Eq}${gq.toFixed(2).replace(/\.?0+$/,"")}`
-         }
-         Eq = BigInt(Math.floor(qq))
-       } else Eq = qq;
-       const lq = Eq < 0n ? -Eq : Eq,
-         Oq = Eq < 0n ? "-" : "",
-         mq = lq.toString();
-       if (mq.length <= gq) return `${Oq}${mq}`;
-       const xq = 3 * Math.floor((mq.length - 1) / 3);
- ... (12 more removed lines; see GitHub link above)
+     function nC(CC, zC) {
+       return fC(CC, zC, bC)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L11119-L11132` → after: `L1703-L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1703-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1703-L1711) · [Before (L11119-L11132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L11119-L11132)

```diff
-     function mq(qq) {
-       const Eq = Math.abs(qq),
-         gq = qq < 0 ? "-" : "";
-       for (const {
-           threshold: Yq,
-           suffix: lq
-         }
-         of Oq)
-         if (Eq >= Yq) {
-           const qq = Eq / Yq;
-           if (qq >= 1e3) return `${gq}${Eq.toExponential(2).replace("e+","e")}`;
-           let Oq;
-           return Oq = qq >= 100 ? Math.floor(qq).toString() : qq >= 10 ? qq.toFixed(1).replace(/\.0$/, "") : qq.toFixed(2).replace(/\.?0+$/, ""), `${gq}${Oq}${lq}`
-         } return `${gq}${Eq}`
+     function fC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+       if (CC === zC || Number.isNaN(CC) && Number.isNaN(zC)) return !0;
+       if ("object" !== typeof CC || "object" !== typeof zC || null === CC || null === zC || Array.isArray(CC) !== Array.isArray(zC)) return !1;
+       const QC = CC,
+         wC = zC;
+       for (const bC of new Set([...Object.keys(QC), ...Object.keys(wC)]))
+         if (!ZC.includes(bC) && !fC(QC[bC], wC[bC])) return !1;
+       return !0
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/191.js` (Changed code · before: `L11134-L11196` → after: `L1713-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ffR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-57c4e26f6f07e4891060bb0ea9431696bc7ec66354ddde3f0e111344489138ff) · [After (L1713-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/191.js#L1713-L1737) · [Before (L11134-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/191.js#L11134-L11196)

```diff
-   },
-   38526: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/combat_1.72ac23641446e4f80923.png"
-   },
-   38529: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
-   },
-   38536: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
-   },
-   38539: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
-   },
-   38545: (qq, Eq, gq) => {
-     qq.exports = gq.p + "static/media/dungeons.6836b40c30687755a545.png"
-   },
- ... (47 more removed lines; see GitHub link above)
+     const oC = {
+         maxBlendInMs: 1e4,
+         minFov: 10,
+         maxFov: 120,
+         maxOffset: 128,
+         maxSmoothMs: 5e3,
+         maxReturnMs: 1e4,
+         maxTransitionMs: 5e3,
+         minTransitionFadeMs: 200,
+         minFadeTurnMs: 333,
+         maxPlayerLook: 180,
+         maxKeyframes: 64,
+         maxPathMs: 6e5,
+         maxFrameTargets: 64,
+         maxFrameDistance: 128,
+         maxFrameHeading: 360,
+ ... (9 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/192.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/192.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07)

#### 1. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L4-L273` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/192.js#L4) · [Before (L4-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/192.js#L4-L273)

```diff
-   41279: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => Oq
-     });
-     var Yq = gq(57),
-       lq = gq(2660);
- 
-     function Oq(qq, Eq, gq) {
-       const Oq = (0, Yq.useRef)(null),
-         {
-           width: mq,
-           height: xq
-         } = (0, lq.e)(qq);
-       (0, Yq.useEffect)((() => {
-         const gq = Eq(qq.current);
-         return Oq.current = gq, () => {
- ... (254 more removed lines; see GitHub link above)
+   34003: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L275-L337` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/192.js#L6-L7) · [Before (L275-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/192.js#L275-L337)

```diff
-       FrontlineMvpLineup: () => Bq
-     });
-     var Yq = gq(57),
-       lq = gq(1018),
-       Oq = gq.n(lq),
-       mq = gq(9313),
-       xq = gq(41285),
-       Aq = gq(41279),
-       cq = gq(1070);
- 
-     function uq(qq) {
-       return mq.i.openMobLineup(qq)
-     }
-     const Bq = (0, Yq.memo)((function(qq) {
-       let {
-         players: Eq,
- ... (47 more removed lines; see GitHub link above)
+       getLatestPublishedUpdateLog: () => fC,
+       updateLogsData: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L339-L612` → after: `L9-L2773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L9-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/192.js#L9-L2773) · [Before (L339-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/192.js#L339-L612)

```diff
-     var Yq = gq(37183),
-       lq = gq(307),
-       Oq = gq(1870);
- 
-     function mq(qq) {
-       if ("aq" in qq) return yq.createAnimationScript(qq);
-       return new cq(qq).createAnimationScript()
-     }
- 
-     function xq(qq, Eq, gq, lq) {
-       const Oq = qq.aq <= 0 ? 1 : Eq + gq * Math.max(0, lq) / qq.aq;
-       return qq.Vq === Yq.l.LoopOnLastFrame ? Oq % 1 : qq.Vq === Yq.l.NoLoop && Oq >= 1 ? null : Math.min(1, Oq)
-     }
-     class Aq {
-       createAnimationScript(qq) {
-         const {
- ... (258 more removed lines; see GitHub link above)
+     var QC = ZC(791),
+       wC = ZC(310);
+     const bC = "\xa0\xa0\xa0\xa0",
+       nC = [{
+         author: ["Oliver", "Harry"],
+         date: new Date("2026-11-17T16:00:00Z"),
+         title: "\u2728Characters are back in the Store!\u2728",
+         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
+         image: "CosmeticPacks.jpg",
+         onClickImage: {
+           type: "openMenu",
+           menu: wC.o.COSMETIC_SHOP
+         },
+         callToAction: {
+           color: "rainbow",
+           label: "Go to Store!",
+ ... (2749 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/192.js` (Changed code · before: `L615` → after: `L2776-L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07R2776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a54cf28871ad021719d9e5d576d96dd9ce2d0581a63ef1467c7b421ec18cd07) · [After (L2776-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/192.js#L2776-L2779) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/192.js#L615)

```diff
-       return lq.c.mod(qq + Math.PI, 2 * Math.PI) - Math.PI
+       const zC = Date.now();
+       let ZC = null;
+       for (const QC of nC) QC.date.getTime() > zC || CC && !CC(QC) || (!ZC || QC.date.getTime() > ZC.date.getTime()) && (ZC = QC);
+       return ZC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/193.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/193.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081)

#### 1. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L4-L107` → after: `L4-L5384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L4-L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/193.js#L4-L5384) · [Before (L4-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/193.js#L4-L107)

```diff
-   41277: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       MobPreview: () => Bq
-     });
-     var Yq = gq(57),
-       lq = gq(1018),
-       Oq = gq.n(lq),
-       mq = gq(41279),
-       xq = gq(9313),
-       Aq = gq(41285),
-       cq = gq(1070);
- 
-     function uq(qq) {
-       return xq.i.openMob(qq)
-     }
-     const Bq = (0, Yq.memo)((function(qq) {
- ... (88 more removed lines; see GitHub link above)
+   34005: function(module, __unused_webpack_exports, __webpack_require__) {
+     var n;
+     this || self, n = function() {
+       return function() {
+         var __webpack_modules__ = {
+             4264: function(CC, zC, ZC) {
+               CC.exports = ZC(7588)
+             },
+             5036: function(CC, zC, ZC) {
+               ZC(1719), ZC(5677), ZC(6394), ZC(5334), ZC(6969), ZC(2021), ZC(8328), ZC(2129);
+               var QC = ZC(1287);
+               CC.exports = QC.Promise
+             },
+             2582: function(CC, zC, ZC) {
+               ZC(1646), ZC(6394), ZC(2004), ZC(462), ZC(8407), ZC(2429), ZC(1172), ZC(8288), ZC(1274), ZC(8201), ZC(6626), ZC(3211), ZC(9952), ZC(15), ZC(9831), ZC(7521), ZC(2972), ZC(6956), ZC(5222), ZC(2257);
+               var QC = ZC(1287);
+ ... (5365 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L109-L110` → after: `L5386-L7989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R5386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L5386-L7989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/193.js#L5386-L7989) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/193.js#L109-L110)

```diff
-           ArmRightMesh: {
-             timeline: Oq(Eq, -gq)
+           __webpack_module_cache__ = {};
+ 
+         function __nested_webpack_require_223763__(CC) {
+           var zC = __webpack_module_cache__[CC];
+           if (void 0 !== zC) return zC.exports;
+           var ZC = __webpack_module_cache__[CC] = {
+             id: CC,
+             exports: {}
+           };
+           return __webpack_modules__[CC](ZC, ZC.exports, __nested_webpack_require_223763__), ZC.exports
+         }
+         __nested_webpack_require_223763__.n = function(CC) {
+           var zC = CC && CC.__esModule ? function() {
+             return CC.default
+           } : function() {
+             return CC
+ ... (2588 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L112-L289` → after: `L7991-L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R7991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L7991-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/193.js#L7991-L11892) · [Before (L112-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/193.js#L112-L289)

```diff
-         }
-       }
-     }
-     const xq = mq([0, 0, 0], [0, 0, 0], .07),
-       Aq = (0, lq.b)((0, Yq.g)(xq), "mobIdle"),
-       cq = mq([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
-       uq = mq([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-       Bq = (0, lq.b)((0, Yq.g)(cq), "gunReady"),
-       Wq = (0, lq.b)((0, Yq.g)(uq), "gunAimed")
-   },
-   9321: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq,
-       d: () => lq,
-       f: () => uq
-     });
- ... (162 more removed lines; see GitHub link above)
+           var wQ = function(CC) {
+               return {
+                 item: 1025 & CC[0]
+               }
+             },
+             bQ = function(CC) {
+               return {
+                 item: CC[0][CC[53].index]
+               }
+             },
+             nQ = function(CC) {
+               return {}
+             },
+             fQ = function(CC) {
+               return {}
+             };
+ ... (3886 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/194.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/194.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67)

#### 1. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L4-L7` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/194.js#L4-L8) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/194.js#L4-L7)

```diff
-   9343: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => lq,
-       e: () => Oq
+   34040: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       ALL_DEV_TOOLS: () => nC,
+       coreDevTools: () => qC,
+       devTools: () => oC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L9-L21` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/194.js#L10-L17) · [Before (L9-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/194.js#L9-L21)

```diff
-     var Yq = gq(3150);
- 
-     function lq() {
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const qq = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const Eq = new BroadcastChannel(Yq.n);
-         Eq.postMessage({
-           stored: qq
-         }), Eq.close()
-       } catch {
-         return null
-       }
+     var QC = ZC(615),
+       wC = ZC(1257),
+       bC = ZC(34046);
+     const nC = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
+     async function fC() {
+       const {
+         noaDevTools: CC
+       } = await ZC.e(236).then((() => ZC(40899)));
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L24-L123` → after: `L20-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L20-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/194.js#L20-L52) · [Before (L24-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/194.js#L24-L123)

```diff
- 
-     function Oq(qq) {
-       const Eq = "object" === typeof qq && null !== qq ? qq.stored : null;
-       return "string" === typeof Eq ? Eq : null
-     }
-   },
-   9336: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq,
-       d: () => lq,
-       g: () => Oq
-     });
-     var Yq = gq(3150);
-     async function lq(qq, Eq, gq) {
-       let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const Oq = mq(await qq.getItem(Yq.g, Eq));
- ... (84 more removed lines; see GitHub link above)
+     const oC = new class {
+         constructor() {
+           this.loadHost = fC, this.tools = nC
+         }
+         setHost(CC) {
+           this.tools = null === CC ? nC : CC.tools, this.loadHost = null === CC ? fC : async () => CC
+         }
+         supports(CC) {
+           return this.tools.has(CC)
+         }
+         async downloadScene(CC, zC) {
+           const ZC = await this.loadHost();
+           await ZC.downloadScene(CC, zC)
+         }
+         async setAmbientLightIntensity(CC) {
+           const zC = await this.loadHost();
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L125-L438` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/194.js#L54-L56) · [Before (L125-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/194.js#L125-L438)

```diff
-       return qq.textureOverrides && (gq.textureOverrides = jq(qq.textureOverrides, Oq, "texture")), qq.modelOverrides && (gq.modelOverrides = jq(qq.modelOverrides, Oq, "model")), qq.skyBoxes && (gq.skyBoxes = jq(qq.skyBoxes, mq, "sky")), qq.customCss && (gq.customCss = function(q … [truncated]
-         const Eq = qq => jq(qq, (qq => "string" === typeof qq && !Nq(qq)), "CSS"),
-           {
-             fontFaces: gq,
-             classStyles: Yq
-           } = dq(qq) ? qq : {},
-           lq = {};
-         for (const [Oq, mq] of Object.entries(dq(Yq) ? Yq : {})) lq[Oq] = Eq(mq);
-         return {
-           fontFaces: (Array.isArray(gq) ? gq : []).map(Eq),
-           classStyles: lq
-         }
-       }(qq.customCss)), gq
-     }
- 
-     function dq(qq) {
- ... (298 more removed lines; see GitHub link above)
+     QC.z && oC.setHost(qC), (0, wC.y)((() => {
+       oC.setHost(qC)
+     }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/195.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/195.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359)

#### 1. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/195.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/195.js#L4)

```diff
-   9348: (qq, Eq, gq) => {
+   36264: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/195.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/195.js#L6-L9)

```diff
-       packDisplayName: () => aq,
-       packModelMessage: () => Vq,
-       packModelSummary: () => jq,
-       refusedPackModels: () => dq
+       showOnboardingPopup: () => lC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L11-L22` → after: `L8-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L8-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/195.js#L8-L265) · [Before (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/195.js#L11-L22)

```diff
-     var Yq = gq(9351),
-       lq = gq(9358);
-     const Oq = "DRACO",
-       mq = 0,
-       xq = 1,
-       Aq = 0,
-       cq = 1,
-       uq = 32768;
- 
-     function Bq(qq) {
-       const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
-       let gq = 0;
+     var QC = ZC(48),
+       wC = ZC(1143),
+       bC = ZC(1307),
+       nC = ZC(1388),
+       fC = ZC(4256),
+       oC = ZC(1501),
+       qC = ZC(1493),
+       FC = ZC(2166),
+       WC = ZC(1002),
+       NC = ZC.n(WC),
+       MC = ZC(1078),
+       gC = ZC(36271),
+       SC = ZC(1013),
+       pC = ZC(2318),
+       PC = ZC(3452),
+       GC = ZC(1076),
+ ... (242 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L24-L25` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/195.js#L267) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/195.js#L24-L25)

```diff
-           if (gq >= qq.byteLength) throw new RangeError("past the stream");
-           return qq[gq++]
+           (0, fC.k)(AC.current), CC()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L27-L30` → after: `L269-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L269-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/195.js#L269-L380) · [Before (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/195.js#L27-L30)

```diff
-         lq = () => {
-           if (gq + 4 > qq.byteLength) throw new RangeError("past the stream");
-           const Yq = Eq.getUint32(gq, !0);
-           return gq += 4, Yq
+         cC = CC => "refused" === CC.outcome ? CC.message : zC((0, dC.e)(CC.failure)),
+         uC = CC => !(CC.length >= KC.l) && (MC({
+           kind: "error",
+           message: zC("homePage:changeNameMinLengthError", {
+             length: KC.l
+           })
+         }), !0),
+         rC = CC => {
+           var QC, wC, bC;
+           CC.toLowerCase() !== (null === (QC = null !== (wC = null === (bC = vC.current) || void 0 === bC ? void 0 : bC.name) && void 0 !== wC ? wC : oC) || void 0 === QC ? void 0 : QC.toLowerCase()) ? uC(CC) || lC((0, dC.b)(ZC, CC), (ZC => {
+             "taken" !== ZC.outcome ? "refused" !== ZC.outcome && "failed" !== ZC.outcome ? ZC.name !== CC ? (AC.current = "suffixed", vC.current = {
+               name: ZC.name,
+               outcome: AC.current
+             }, eC(ZC.name), MC({
+               kind: "suffixed",
+               taken: CC,
+ ... (96 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L32-L36` → after: `L382-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L382-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/195.js#L382-L394) · [Before (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/195.js#L32-L36)

```diff
-         Bq = () => {
-           let qq = 0;
-           for (let Eq = 0; Eq < 35; Eq += 7) {
-             const gq = Yq();
-             if (qq += (127 & gq) * 2 ** Eq, 0 === (128 & gq)) return qq
+         busy: gC,
+         ready: null !== iC
+       }
+     }
+ 
+     function lC() {
+       const CC = {
+         finished: !1
+       };
+       bC.NotificationProvider.showCustomPopup({
+         body: zC => (0, RC.jsx)(XC, {
+           onFinish: () => {
+             (0, fC.e)(), CC.finished = !0, zC()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L38-L76` → after: `L396-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L396-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/195.js#L396-L462) · [Before (L38-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/195.js#L38-L76)

```diff
-           throw new RangeError("varint too long")
-         };
-       try {
-         for (let qq = 0; qq < Oq.length; qq++)
-           if (Yq() !== Oq.charCodeAt(qq)) return null;
-         const Eq = Yq(),
-           Wq = Yq(),
-           Nq = Yq(),
-           aq = Yq(),
-           Vq = Yq() | Yq() << 8;
-         if (2 !== Eq) return null;
-         0 !== (Vq & uq) && function(qq, Eq, gq) {
-           const Yq = () => {
-               Eq(gq())
-             },
-             lq = () => {
- ... (23 more removed lines; see GitHub link above)
+         }),
+         middleScreenPopupClassName: "OnboardingPopup",
+         ignoreBackgroundPress: !0,
+         onClose: () => {
+           CC.finished || (0, fC.d)()
+         }
+       })
+     }
+ 
+     function XC(CC) {
+       let {
+         onFinish: zC
+       } = CC;
+       const {
+         t: ZC
+       } = (0, wC.y)(), bC = EC(zC);
+ ... (51 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L78-L79` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/195.js#L464-L465) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/195.js#L78-L79)

```diff
-             faces: dq(),
-             vertices: dq()
+             JQ: zC,
+             IQ: ZC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L81-L91` → after: `L467-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L467-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/195.js#L467-L508) · [Before (L81-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/195.js#L81-L91)

```diff
-         }
-         if (aq !== cq) return null;
-         Yq(), Wq < 2 && Bq();
-         const jq = Bq();
-         return {
-           faces: Bq(),
-           vertices: jq
-         }
-       } catch {
-         return null
-       }
+         }));
+         this.pending.clear(), this.lastSentAt = Date.now(), wC.d.updateCosmetics(CC, zC).catch((CC => {
+           console.error("Failed to update cosmetics", CC)
+         }))
+       }
+     };
+ 
+     function nC(CC, zC) {
+       for (const [ZC, QC] of zC) CC.setPlayerCosmetics(ZC, QC);
+       if (null === QC.gameBridge.latest("connectedGame").websocketUrl) bC.save(CC, zC);
+       else
+         for (const [ZC, wC] of zC) QC.gameBridge.send("updateMyCosmetic", {
+           JQ: ZC,
+           IQ: wC
+         })
+     }
+ ... (26 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L95-L148` → after: `L512-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L512-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/195.js#L512-L546) · [Before (L95-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/195.js#L95-L148)

```diff
-       var Yq, lq;
-       if (null === (Yq = null === (lq = qq.extensionsUsed) || void 0 === lq ? void 0 : lq.includes("KHR_draco_mesh_compression")) || void 0 === Yq || !Yq) return null;
-       for (const aq of null !== (Oq = qq.meshes) && void 0 !== Oq ? Oq : []) {
-         var Oq;
-         for (const Yq of aq.primitives) {
-           var mq, xq, Aq, cq, uq, Wq;
-           const lq = null === (mq = Yq.extensions) || void 0 === mq ? void 0 : mq.KHR_draco_mesh_compression;
-           if ("object" !== typeof lq || null === lq) continue;
-           const Oq = null === (xq = qq.bufferViews) || void 0 === xq ? void 0 : xq[lq.bufferView];
-           if (null === Eq || void 0 === Oq) return Nq;
-           const aq = null !== (Aq = Oq.byteOffset) && void 0 !== Aq ? Aq : 0,
-             Vq = Bq(Eq.subarray(aq, aq + Oq.byteLength));
-           if (null === Vq && !gq) continue;
-           const dq = null !== (cq = qq.accessors) && void 0 !== cq ? cq : [],
-             jq = null === (uq = dq[Yq.attributes.POSITION]) || void 0 === uq ? void 0 : uq.count,
-             Hq = void 0 === Yq.indices ? 0 : null === (Wq = dq[Yq.indices]) || void 0 === Wq ? void 0 : Wq.count;
- ... (38 more removed lines; see GitHub link above)
+       return (0, nC.postJsonWithMetricsCookiesAndJsonResponse)(`${bC.clientSideServerUrls.indexUrl}${zC}`, ZC, {
+         retries: 3
+       }, CC.getMetricsCookies()).catch((CC => (console.error("Bad response from the server when trying to change name:", zC, CC), {
+         outcome: "failed",
+         failure: FC(CC)
+       })))
+     }
+ 
+     function NC(CC) {
+       return "outcome" in CC && "failed" === CC.outcome
+     }
+ 
+     function MC(CC) {
+       return console.error("Error when trying to get with new name from DB", CC), {
+         outcome: "refused",
+         message: CC
+ ... (19 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L152-L156` → after: `L550-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L550-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/195.js#L550-L566) · [Before (L152-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/195.js#L152-L156)

```diff
-       const gq = Object.keys(Eq);
-       if (0 === gq.length) return null;
-       if (1 === gq.length) return Vq(qq, gq[0], Eq[gq[0]]);
-       const Yq = gq.map((qq => `"${qq}" ${Eq[qq]}`)).join("; ");
-       return `Texture pack "${qq}": ${gq.length} models were not loaded (${Yq}). The default models are used instead.`
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+       const QC = 1 === zC ? 1 : 10 ** (zC - 1),
+         bC = String(QC + Math.floor(ZC() * (10 ** zC - QC)));
+       return `${CC.slice(0,wC.i-zC)}${bC}`
+     }
+     const PC = [1, 2, 3, 4];
+     async function GC(CC, zC) {
+       const ZC = await SC(CC, zC);
+       if ("taken" !== ZC.outcome) return ZC;
+       for (const QC of PC) {
+         const ZC = pC(zC, QC),
+           wC = await SC(CC, ZC);
+         if ("taken" !== wC.outcome) return wC
+       }
+       return {
+         outcome: "taken"
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/196.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/196.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/196.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/196.js#L4)

```diff
-   9351: (qq, Eq, gq) => {
+   34091: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L8` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/196.js#L9-L14) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/196.js#L8)

```diff
-       h: () => iq
+       h: () => xz,
+       l: () => bz,
+       p: () => fz,
+       t: () => qz,
+       u: () => Az,
+       v: () => oz
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L10-L48` → after: `L16-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L16-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/196.js#L16-L385) · [Before (L10-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/196.js#L10-L48)

```diff
-     var Yq = gq(9358);
-     const lq = {
-         fileBytes: 4194304,
-         vertices: 65535,
-         indices: 196608,
-         accessorElements: 196608,
-         primitives: 64,
-         nodes: 128,
-         meshes: 64,
-         materials: 8,
-         images: 8,
-         imageSide: 1024
-       },
-       Oq = {
-         items: 1024,
-         perFile: 1024,
- ... (23 more removed lines; see GitHub link above)
+     var QC = ZC(20),
+       wC = ZC(77),
+       bC = ZC(1557),
+       nC = ZC(4346),
+       fC = ZC(2894),
+       oC = ZC(2903),
+       qC = ZC(38);
+     const {
+       windows: FC,
+       target: WC,
+       stepDown: NC,
+       stepUp: MC,
+       noGain: gC
+     } = oC.d, SC = 1e3 / 60 * 1.08, pC = 1e3 / 55, PC = 1e3 / 45, GC = 1e3 / 30 * .92, RC = 1e3 / 30 * 1.08;
+     class AC {
+       constructor() {
+ ... (354 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L50-L67` → after: `L387-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L387-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/196.js#L387-L450) · [Before (L50-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/196.js#L50-L67)

```diff
-         TEXCOORD_1: Bq,
-         TEXCOORD_2: Bq,
-         TEXCOORD_3: Bq,
-         TEXCOORD_4: Bq,
-         TEXCOORD_5: Bq
-       },
-       Nq = new Set(Yq.h.map((qq => {
-         let [Eq] = qq;
-         return Eq
-       }))),
-       aq = {
-         1: "line",
-         2: "line loop",
-         3: "line strip",
-         5: "triangle strip",
-         6: "triangle fan"
- ... (2 more removed lines; see GitHub link above)
+         ZC = uC();
+       Fz = cC(), VC = new YC({
+           changed: Qz,
+           lM: () => {
+             Mz({
+               heldN: void 0
+             })
+           },
+           vq: CC => {
+             var zC;
+             const ZC = uC()[CC],
+               QC = {
+                 heldN: ZC,
+                 heldAt: Date.now(),
+                 heldTarget: cC()
+               };
+ ... (48 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L70` → after: `L453-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L453-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/196.js#L453-L465) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/196.js#L70)

```diff
-       return qq.toLocaleString("en-US")
+       qC.i.setItem(EC, {
+         ...rC(),
+         ...CC,
+         gpu: zz
+       })
+     }
+     let gz = 0,
+       Sz = 0,
+       pz = 0,
+       Pz = !1;
+ 
+     function Gz() {
+       gz++
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L74-L93` → after: `L469-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L469-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/196.js#L469-L486) · [Before (L74-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/196.js#L74-L93)

```diff
-       return qq > Eq ? `has ${dq(qq)} ${gq} (the limit is ${dq(Eq)})` : null
-     }
- 
-     function Hq(qq, Eq) {
-       return Number.isInteger(qq) && qq >= 0 && qq < (null !== Eq && void 0 !== Eq ? Eq : 0)
-     }
- 
-     function oq(qq) {
-       return Number.isInteger(qq) && qq >= 0
-     }
- 
-     function Pq(qq, Eq) {
-       return void 0 !== qq && (!Array.isArray(qq) || qq.length > Eq)
-     }
- 
-     function Qq(qq, Eq) {
- ... (4 more removed lines; see GitHub link above)
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       Nz(), null !== VC && (CC - pz >= 1e3 && (Pz = gz - Sz > oC.d.sceneChange.meshesPerSecond, Sz = gz, pz = CC), HC.d.isHeld() ? VC.paused(CC) : VC.frame(CC, zC, ZC && !document.hidden && yC(), Pz || QC > 0 || (0, bC.s)()))
+     }
+ 
+     function Az() {
+       if (!Cz) {
+         Cz = !0, null !== VC && (VC = null, Mz({
+           noGain: void 0
+         }));
+         try {
+           Qz()
+         } catch (CC) {
+           console.error("The quality steps' resize to the player's n failed", CC)
+         }
+       }
+     }
+ ... (2 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L95-L117` → after: `L488-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L488-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/196.js#L488-L496) · [Before (L95-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/196.js#L95-L117)

```diff
-       return `${qq.normalized?"normalized ":""}${null!==(Eq=Yq.g[qq.componentType])&&void 0!==Eq?Eq:qq.componentType} ${qq.type}`
-     }
- 
-     function tq(qq) {
-       const Eq = Eq => {
-         var gq;
-         return null !== (gq = qq[Eq]) && void 0 !== gq ? gq : -1
-       };
-       return 255 === Eq(0) && 216 === Eq(1) ? "JPEG" : 82 === Eq(0) && 73 === Eq(1) && 87 === Eq(8) && 69 === Eq(9) ? "WebP" : 171 === Eq(0) && 75 === Eq(1) && 84 === Eq(2) && 88 === Eq(3) ? "KTX2" : "non-PNG"
-     }
- 
-     function rq(qq) {
-       return qq.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((Eq, gq) => qq[gq] === Eq)) && 73 === qq[12] && 72 === qq[13] && 68 === qq[14] && 82 === qq[15]
-     }
- 
-     function vq(qq) {
- ... (7 more removed lines; see GitHub link above)
+       null === (CC = VC) || void 0 === CC || CC.resized(performance.now())
+     }
+   },
+   34100: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => bC
+     });
+     var QC = ZC(77),
+       wC = ZC(107);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L120-L146` → after: `L499-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L499-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/196.js#L499-L502) · [Before (L120-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/196.js#L120-L146)

```diff
-       var Yq, lq;
-       const Oq = null === (Yq = qq.bufferViews) || void 0 === Yq ? void 0 : Yq[gq];
-       if (!Oq || !Eq || 0 !== Oq.buffer) return null;
-       const mq = null !== (lq = Oq.byteOffset) && void 0 !== lq ? lq : 0;
-       return !oq(mq) || !oq(Oq.byteLength) || mq + Oq.byteLength > Eq.byteLength ? null : Eq.subarray(mq, mq + Oq.byteLength)
-     }
- 
-     function bq(qq, Eq) {
-       var gq, lq, Oq;
-       const mq = Yq.m[Eq.type],
-         xq = Yq.c[Eq.componentType];
-       if (!mq || !xq || !Number.isInteger(Eq.count) || Eq.count < 0) return !1;
-       if (void 0 === Eq.bufferView) return !0;
-       const Aq = null === (gq = qq.bufferViews) || void 0 === gq ? void 0 : gq[Eq.bufferView],
-         cq = null !== (lq = Eq.byteOffset) && void 0 !== lq ? lq : 0;
-       if (!Aq || !oq(cq) || cq % xq !== 0) return !1;
- ... (11 more removed lines; see GitHub link above)
+       if ("webgpu" === CC) return ZC ? ((0, QC.seedGpuVendor)(ZC), {
+         vendor: ZC,
+         renderer: ""
+       }) : null;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L148-L212` → after: `L504-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L504-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/196.js#L504-L512) · [Before (L148-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/196.js#L148-L212)

```diff
-         return function(qq, Eq) {
-           var gq, mq, Bq, dq, oq, iq, Zq, fq, Mq, Tq, zq, Sq, pq, Gq, Lq, Jq, kq;
-           const Rq = Array.isArray(qq.extensionsUsed) && qq.extensionsUsed.includes("KHR_draco_mesh_compression");
-           if (function(qq, Eq) {
-               var gq, Yq;
-               const {
-                 items: lq,
-                 perFile: mq,
-                 surfaces: xq,
-                 few: Aq,
-                 bounds: cq,
-                 attributeMembers: uq
-               } = Oq;
-               if (Pq(qq.extensionsRequired, Aq) || Pq(qq.animations, 1 / 0) || Pq(qq.skins, 1 / 0)) return !0;
-               if (null !== (gq = qq.animations) && void 0 !== gq && gq.length || null !== (Yq = qq.skins) && void 0 !== Yq && Yq.length) return !1;
-               if ([
- ... (49 more removed lines; see GitHub link above)
+         const ZC = "webgl" === CC ? zC.getContext("webgl2") : zC.getContext("webgl");
+         "webgl" === CC && ZC && (0, wC.v)(ZC);
+         const bC = null === ZC || void 0 === ZC ? void 0 : ZC.getExtension("WEBGL_debug_renderer_info");
+         if (ZC && bC) {
+           const CC = String(ZC.getParameter(bC.UNMASKED_VENDOR_WEBGL)),
+             zC = String(ZC.getParameter(bC.UNMASKED_RENDERER_WEBGL));
+           return (0, QC.seedGpuVendor)(CC), (0, wC.z)(CC, zC), {
+             vendor: CC,
+             renderer: zC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L214-L554` → after: `L514-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L514-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/196.js#L514-L517) · [Before (L214-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/196.js#L214-L554)

```diff
-           if (null !== (Bq = qq.animations) && void 0 !== Bq && Bq.length) return "has animations";
-           if (null !== (dq = qq.skins) && void 0 !== dq && dq.length) return "uses skins";
-           const Xq = null !== (oq = qq.buffers) && void 0 !== oq ? oq : [];
-           for (const [Yq, lq] of Xq.entries()) {
-             if (void 0 !== lq.uri) return Aq;
-             if (Yq > 0 || !Eq) return xq
-           }
-           for (const [Yq, lq] of(null !== (wq = qq.bufferViews) && void 0 !== wq ? wq : []).entries()) {
-             var wq;
-             if (!nq(qq, Eq, Yq) || !hq(lq)) return xq
-           }
-           const Kq = null !== (iq = qq.accessors) && void 0 !== iq ? iq : [];
-           for (const Yq of Kq) {
-             if (void 0 !== Yq.sparse) return "uses sparse accessors";
-             const Eq = Number.isInteger(Yq.count) ? jq(Yq.count, lq.accessorElements, "elements in an accessor") : null;
-             if (Eq) return Eq;
- ... (325 more removed lines; see GitHub link above)
+         }
+         ZC && (0, wC.z)(String(ZC.getParameter(ZC.VENDOR)), String(ZC.getParameter(ZC.RENDERER)))
+       } catch {}
+       return null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/197.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/197.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/197.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/197.js#L4)

```diff
-   9464: (qq, Eq, gq) => {
+   36690: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L9-L1364` → after: `L538-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L538-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/197.js#L538-L592) · [Before (L9-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/197.js#L9-L1364)

```diff
-     var Yq = gq(9433);
-     const lq = "Air",
-       Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   27551: qq => {
-     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
-   33537: qq => {
-     qq.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
-   },
-   33540: qq => {
-     qq.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
-   },
-   27554: qq => {
-     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
- ... (1340 more removed lines; see GitHub link above)
+     var QC = ZC(1029);
+ 
+     function wC() {
+       var CC, zC;
+       return null !== (CC = null === (zC = screen.orientation) || void 0 === zC ? void 0 : zC.type) && void 0 !== CC ? CC : innerWidth > innerHeight ? "landscape" : "portrait"
+     }
+     const bC = new class {
+       constructor() {
+         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
+           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
+         }
+       }
+       isHeld() {
+         return this.holding && wC() !== this.heldOrientation && (this.holding = !1), this.holding
+       }
+       hold() {
+ ... (39 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L1366-L1367` → after: `L594-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L594-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/197.js#L594-L914) · [Before (L1366-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/197.js#L1366-L1367)

```diff
-   29237: qq => {
-     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAPoAAAD6AG1e1JrAAACMklEQVR4nO2Xu0oDQRSG/97nUcQYjZcttLFJYy1iLBQvEAsVtHFQgkVAQbBRFAVhLLRQUoiQh/EFrFd2NbgZZmZndybjxpziK+ayZ858uwvnYCaYgwFhGoyfmoCiARIQkACQgIAEgAQEJAAkINALKJUrXZdOjvtZQGiK … [truncated]
+   36630: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       A: () => MC,
+       C: () => gC,
+       D: () => SC,
+       F: () => PC,
+       e: () => QC,
+       i: () => wC,
+       j: () => NC,
+       n: () => pC,
+       o: () => FC,
+       s: () => GC,
+       w: () => oC,
+       x: () => qC
+     });
+     const QC = [{
+ ... (305 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/198.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/198.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L4-L5` → after: `L4-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L4-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/198.js#L4-L51) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/198.js#L4-L5)

```diff
-   37725: (qq, Eq, gq) => {
-     var Yq = gq(37734);
+   34171: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       MAX_BLOCK_ID: () => QC,
+       armourReductionOf: () => TC,
+       clipSizeOf: () => sC,
+       creativeAltNames: () => nz,
+       creativeCategoryOf: () => kC,
+       creativeItemCategories: () => fC,
+       creativeItemCategoryIcons: () => oC,
+       creativeItemIds: () => OC,
+       descriptionOf: () => cC,
+       displayNameOf: () => XC,
+       dropsNothing: () => DC,
+       enchantmentPerksOf: () => UC,
+       gunTypeOf: () => tC,
+       harvestsNullLevelOf: () => jC,
+ ... (32 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L8-L10` → after: `L54-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/198.js#L54-L57) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/198.js#L8-L10)

```diff
-       for (var Eq, gq, lq = 0, Oq = qq.length, mq = 0; mq < qq.length;) {
-         for (Eq = qq[mq], gq = 0; mq < Oq && qq[mq] === Eq;) ++mq, ++gq;
-         lq += Yq.log2(gq) / 7 | 0, lq += Yq.log2(Eq >>> 0) / 7 | 0, lq += 2
+       let zC = null;
+       return ZC => {
+         var QC;
+         return zC ??= (0, FC.F)(CC, 10091), null !== (QC = zC[ZC]) && void 0 !== QC ? QC : 0
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L14-L32` → after: `L60-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L60-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/198.js#L60-L67) · [Before (L14-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/198.js#L14-L32)

```diff
-     Eq.size = lq, Eq.encode = function(qq, Eq) {
-       Eq || (Eq = new Uint8Array(lq(qq)));
-       for (var gq, Yq, Oq = 0, mq = Eq.length, xq = 0; xq < qq.length;) {
-         for (gq = qq[xq], Yq = 0; xq < qq.length && qq[xq] === gq;) ++xq, ++Yq;
-         for (; Oq < mq && Yq >= 128;) Eq[Oq++] = 128 + (127 & Yq), Yq >>>= 7;
-         if (Oq >= mq) throw new Error("RLE buffer overflow");
-         for (Eq[Oq++] = Yq, gq >>>= 0; Oq < mq && gq >= 128;) Eq[Oq++] = 128 + (127 & gq), gq >>>= 7;
-         if (Oq >= mq) throw new Error("RLE buffer overflow");
-         Eq[Oq++] = gq
-       }
-       return Eq
-     }, Eq.decode = function(qq, Eq) {
-       for (var gq, Yq, lq, Oq, mq = Eq.length, xq = qq.length, Aq = 0, cq = 0; cq < xq;) {
-         for (gq = 0, Yq = 0; cq < xq && qq[cq] >= 128;) gq += (127 & qq[cq++]) << Yq, Yq += 7;
-         if (gq += qq[cq++] << Yq, cq >= xq) throw new Error("RLE buffer underrun");
-         if (Aq + gq > mq) throw new Error("Chunk buffer overflow");
- ... (3 more removed lines; see GitHub link above)
+ 
+     function MC(CC, zC, ZC) {
+       const QC = NC(CC);
+       let wC = null,
+         bC = [];
+       return CC => {
+         const nC = QC(CC);
+         if (0 !== nC) return null === wC && (wC = zC.split(FC.u), bC = new Array(wC.length)), bC[nC - 1] ??= ZC(wC[nC - 1])
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L36-L37` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/198.js#L74) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/198.js#L36-L37)

```diff
-   },
-   37734: (qq, Eq) => {
+ 
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L39-L40` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/198.js#L76) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/198.js#L39-L40)

```diff
-       var Eq = 32;
-       return (qq &= -qq) && Eq--, 65535 & qq && (Eq -= 16), 16711935 & qq && (Eq -= 8), 252645135 & qq && (Eq -= 4), 858993459 & qq && (Eq -= 2), 1431655765 & qq && (Eq -= 1), Eq
+       return CC === FC.f ? null : (0, FC.G)(CC)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L42-L88` → after: `L78-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L78-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/198.js#L78-L87) · [Before (L42-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/198.js#L42-L88)

```diff
-     Eq.INT_BITS = 32, Eq.INT_MAX = 2147483647, Eq.INT_MIN = -1 << 31, Eq.sign = function(qq) {
-       return (qq > 0) - (qq < 0)
-     }, Eq.abs = function(qq) {
-       var Eq = qq >> 31;
-       return (qq ^ Eq) - Eq
-     }, Eq.min = function(qq, Eq) {
-       return Eq ^ (qq ^ Eq) & -(qq < Eq)
-     }, Eq.max = function(qq, Eq) {
-       return qq ^ (qq ^ Eq) & -(qq < Eq)
-     }, Eq.isPow2 = function(qq) {
-       return !(qq & qq - 1) && !!qq
-     }, Eq.log2 = function(qq) {
-       var Eq, gq;
-       return Eq = (qq > 65535) << 4, Eq |= gq = ((qq >>>= Eq) > 255) << 3, Eq |= gq = ((qq >>>= gq) > 15) << 2, (Eq |= gq = ((qq >>>= gq) > 3) << 1) | (qq >>>= gq) >> 1
-     }, Eq.log10 = function(qq) {
-       return qq >= 1e9 ? 9 : qq >= 1e8 ? 8 : qq >= 1e7 ? 7 : qq >= 1e6 ? 6 : qq >= 1e5 ? 5 : qq >= 1e4 ? 4 : qq >= 1e3 ? 3 : qq >= 100 ? 2 : qq >= 10 ? 1 : 0
- ... (31 more removed lines; see GitHub link above)
+     const pC = MC("T$$#&#$T'#$F$#$$%$B#$>#$##=$$1$.)$*#$(&$)#)$N$#$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$+##$&#$$%$*/$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$T$&$($$$*$(#$$1$$1$$1$$1$$1$$1$$)$$)$$)$$)$$)$*)$N2#$.($$1$$)$T$$$,#$4#$)##$V'#$)#[$$+#$#$($$'#%$&$$N)*$4#$ … [truncated]
+       PC = MC("$J$#$&$$F&$23$$J$$$A$$c$$,^'$&H2$$'$$'$$0$*9$$R$#49$$($$&$$%$$$#,C(##$$#$&U)#$#$$($B+#2R$$1#7$%#+$6#$$)$J$O$#*-$1#M1$$a$$&'#%$&)$$4$.&$(;$*%$$$$$#$$#$,Z/$$T&$&V$$$Z-$###$%/V$O$$&2$*5#X$#$V%.$&2$&#$*&$$5$$E$#c2R1$&$$cc$c]$$$R%$*G=$]/=$2:$J5-$b*#G$$,,#%$+##$#4+#+##$+ … [truncated]
+       GC = new Map,
+       RC = new Map;
+     let AC = -1;
+ 
+     function xC(CC, zC, ZC) {
+       AC !== (0, qC.d)() && (AC = (0, qC.d)(), GC.clear(), RC.clear());
+       let QC = CC.get(zC);
+       return void 0 === QC && (QC = ZC(), void 0 !== QC && CC.set(zC, QC)), QC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L90-L197` → after: `L89-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L89-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/198.js#L89-L124) · [Before (L90-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/198.js#L90-L197)

```diff
-   },
-   39576: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       emptyColumnHeight: () => Pq,
-       loadHeatmapSchematic: () => Qq,
-       readSchematicBlocks: () => yq
-     });
-     var Yq = gq(3600),
-       lq = gq.n(Yq),
-       Oq = gq(3584),
-       mq = gq(37725),
-       xq = gq(190),
-       Aq = gq(9379);
-     const cq = [{
-         name: "x",
-         type: "int"
- ... (92 more removed lines; see GitHub link above)
+     const JC = MC("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$b%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
+       IC = MC("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
+       iC = MC(".W]+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
+       vC = MC("&PO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$bC$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
+       eC = MC(">W]+#%#)$)%9$", "none|sniper", gC),
+       hC = MC("*W]+#%#%#%#%$%#)&%(%%%$%%)$)'%&", "semi_automatic|submachine|rifle|pistol|shotgun", gC),
+       KC = NC("]%LV+#c&M.$4_1$44$44$44$49$4/$4/$4/$"),
+       YC = NC("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$6,$"),
+       dC = MC("$DO+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($U$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (CC => "" === CC ? null : Number(CC))),
+       mC = MC("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$' … [truncated]
+       HC = MC(",QN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($R$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0 … [truncated]
+       EC = MC(",$#0#$-#-$&#%2#%(#$$$$'%B$##%b$&)$$#$#%A&$&#)%,$%#$#%$&%###%:#$$$$##$%)$%%#)$1).)$$#)$))%$#)$%$$&)B%&#)#&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%&$%$$'$&#$$%%$/)$))$))$))$))$))$))$))$))$))$))$))$))$))$))$))&)$#)$%%#$,#%2%%($$$*$$#%#$#)$1)$1)$1)$1)$1)$1)$))$))$) … [truncated]
+       lC = MC("$b&#$R)#$)%$)%$)%$)%$1%$)%$)%$)%$)%$)%$)%$)%$)%$)%$_7%$'%$'%$'%$'%$'%$'%$-%$'%$'%$'%$'%$'%$'%$'%$a$#$T%%$)%$)%$)%$)%$1%$)%$)%$)%$)%$)%$)%$)%$)%$)%$>#B#'$V$&4%'$%'6%'$)#$b%#$%)$G$%$'%$'%$'%$'%$'%$'%$-%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$'%$-%$'%$'%$'%$'%$'%$'%$' … [truncated]
+ 
+     function XC(CC) {
+       const zC = pC(CC);
+ ... (20 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L199` → after: `L126-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L126-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/198.js#L126-L162) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/198.js#L199)

```diff
-     async function yq(qq, Eq) {
+ 
+     function sC(CC) {
+       return iC(CC)
+     }
+ 
+     function TC(CC) {
+       return vC(CC)
+     }
+ 
+     function aC(CC) {
+       return eC(CC)
+     }
+ 
+     function tC(CC) {
+       return hC(CC)
+     }
+ ... (21 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L201-L271` → after: `L164-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L164-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/198.js#L164-L174) · [Before (L201-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/198.js#L201-L271)

```diff
-       if (qq.byteLength < 4) throw new Error("The file is too short to be a schematic.");
-       const Yq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength).getUint32(0, !0);
-       if (Yq > aq) throw new Error("The file isn't a schematic this version of Bloxd can read.");
-       const lq = (Yq >= Nq ? Wq : Bq).decode(Oq.IN.from(qq.subarray(4)), 0).value;
-       if (!lq) throw new Error("The file isn't a schematic.");
-       if (0 === lq.chunkData.length) throw new Error("The schematic has no blocks in it.");
-       const xq = null !== (gq = lq.pasteOffset) && void 0 !== gq ? gq : {
-           x: 0,
-           y: 0,
-           z: 0
-         },
-         Aq = [xq.x, xq.y, xq.z].map((qq => Math.floor(qq / oq))),
-         cq = lq.chunkData.map((qq => ({
-           x: qq.x + Aq[0],
-           y: qq.y + Aq[1],
-           z: qq.z + Aq[2],
- ... (55 more removed lines; see GitHub link above)
+       return null !== (zC = HC(CC)) && void 0 !== zC ? zC : WC
+     }
+     let BC = null;
+ 
+     function OC() {
+       if (null === BC) {
+         const CC = [],
+           zC = new FC.y(wC);
+         let ZC = 0;
+         for (; !zC.done;) ZC += (0, FC.N)(zC.next()), CC.push(ZC);
+         BC = Object.freeze(CC)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L276-L278` → after: `L180-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/198.js#L180-L185) · [Before (L276-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/198.js#L276-L278)

```diff
-       if (0 === qq) return !0;
-       const Eq = Aq.i[qq];
-       return void 0 === Eq || Eq.wW || Eq.transTex || !1 === Eq.solid
+       return EC(CC)
+     }
+ 
+     function VC(CC, zC) {
+       var ZC;
+       return 0 !== ((null !== (ZC = lC(CC)) && void 0 !== ZC ? ZC : 0) & zC)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L282-L326` → after: `L189-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L189-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/198.js#L189-L197) · [Before (L282-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/198.js#L282-L326)

```diff
-       let Eq = 1 / 0,
-         gq = -1 / 0,
-         Yq = 1 / 0,
-         lq = -1 / 0;
-       for (const {
-           chunkX: aq,
-           chunkZ: Vq,
-           heights: dq
-         }
-         of qq) dq.forEach(((qq, Oq) => {
-         if (qq === Pq) return;
-         const mq = aq * oq + Oq % oq,
-           xq = Vq * oq + Math.floor(Oq / oq);
-         Eq = Math.min(Eq, mq), gq = Math.max(gq, mq), Yq = Math.min(Yq, xq), lq = Math.max(lq, xq)
-       }));
-       const Oq = gq - Eq + 1,
- ... (29 more removed lines; see GitHub link above)
+       return VC(CC, FC.c.OnlyInSearch)
+     }
+ 
+     function zz(CC) {
+       return VC(CC, FC.c.OnlyInCategory)
+     }
+ 
+     function Zz(CC) {
+       return VC(CC, FC.c.DevOnly)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L330-L332` → after: `L212-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L212-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/198.js#L212-L225) · [Before (L330-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/198.js#L330-L332)

```diff
-       return new Promise((qq => {
-         setTimeout(qq, 0)
-       }))
+       if (null === bz) {
+         const CC = nC.split(FC.u),
+           zC = new Map,
+           ZC = new FC.y(bC);
+         let QC = 0,
+           wC = 0;
+         for (; !ZC.done;) {
+           QC += (0, FC.N)(ZC.next());
+           const bC = ZC.next();
+           zC.set(QC, Object.freeze(CC.slice(wC, wC + bC))), wC += bC
+         }
+         bz = zC
+       }
+       return bz
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/199.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/199.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df)

#### 1. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L4-L11` → after: `L4-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L4-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/199.js#L4-L27) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/199.js#L4-L11)

```diff
-   40244: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       FORMER_BLOCK_IMAGE_NAMES: () => Yq.c,
-       textureAnimationData: () => lq.x,
-       textureNameToIndex: () => lq.y
-     });
-     var Yq = gq(38689),
-       lq = gq(9379)
+   41330: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => bC
+     });
+     var QC = ZC(48),
+       wC = ZC(2734);
+ 
+     function bC(CC, zC, ZC) {
+       const bC = (0, QC.useRef)(null),
+         {
+           width: nC,
+           height: fC
+         } = (0, wC.e)(CC);
+       (0, QC.useEffect)((() => {
+         const ZC = zC(CC.current);
+         return bC.current = ZC, () => {
+ ... (8 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L13` → after: `L29-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L29-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/199.js#L29-L88) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/199.js#L13)

```diff
-   9464: (qq, Eq, gq) => {
+   41336: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => NC,
+       d: () => WC,
+       e: () => oC
+     });
+     var QC = ZC(37023),
+       wC = ZC(38454);
+ 
+     function bC(CC, zC) {
+       let [ZC, QC, wC] = CC;
+       return [0, .5, 1].map((CC => ({
+         timeFraction: CC,
+         rotation: {
+           nb: "catmull-rom-spline",
+           point: [ZC, QC, wC + (.5 === CC ? zC : 0)]
+ ... (44 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L16-L20` → after: `L91-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L91-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/199.js#L91-L102) · [Before (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/199.js#L16-L20)

```diff
-       d: () => Oq
-     });
-     var Yq = gq(9433);
-     const lq = "Air",
-       Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+       c: () => bC
+     });
+     const QC = new WeakMap;
+ 
+     function wC(CC, zC) {
+       return QC.set(CC, zC), CC
+     }
+ 
+     function bC(CC) {
+       var zC;
+       return null !== (zC = QC.get(CC)) && void 0 !== zC ? zC : null
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L22` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/199.js#L104) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/199.js#L22)

```diff
-   38689: (qq, Eq, gq) => {
+   34194: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L24-L27` → after: `L106-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L106-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/199.js#L106-L110) · [Before (L24-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/199.js#L24-L27)

```diff
-       c: () => Yq,
-       e: () => lq
-     });
-     const Yq = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((qq => [qq, `${qq}_block`])));
+       d: () => nC,
+       g: () => wC,
+       i: () => FC
+     });
+     var QC = ZC(1501);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L31-L32` → after: `L114-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L114-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/199.js#L114-L641) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/199.js#L31-L32)

```diff
-       return null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : qq
-     }
+       return {
+         ...nC.store,
+         yaw: nC.store.yaw + (null !== (zC = QC.b[CC].previewYaw) && void 0 !== zC ? zC : 0)
+       }
+     }
+     const bC = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       nC = {
+         player: bC,
+         store: {
+           ...bC,
+           radius: 33,
+ ... (512 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/200.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/200.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L4-L6` → after: `L4-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L4-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/200.js#L4-L65) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/200.js#L4-L6)

```diff
-   40350: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Aq,
+   41321: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       MobPreview: () => WC
+     });
+     var QC = ZC(48),
+       wC = ZC(1002),
+       bC = ZC.n(wC),
+       nC = ZC(41330),
+       fC = ZC(34185),
+       oC = ZC(41336),
+       qC = ZC(1056);
+ 
+     function FC(CC) {
+       return fC.k.openMob(CC)
+     }
+     const WC = (0, QC.memo)((function(CC) {
+ ... (46 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L10-L12` → after: `L69-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L69-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/200.js#L69-L128) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/200.js#L10-L12)

```diff
-     var Yq = gq(40353),
-       lq = gq(4622),
-       Oq = gq(40359);
+     var QC = ZC(37023),
+       wC = ZC(38454);
+ 
+     function bC(CC, zC) {
+       let [ZC, QC, wC] = CC;
+       return [0, .5, 1].map((CC => ({
+         timeFraction: CC,
+         rotation: {
+           nb: "catmull-rom-spline",
+           point: [ZC, QC, wC + (.5 === CC ? zC : 0)]
+         }
+       })))
+     }
+ 
+     function nC(CC, zC, ZC) {
+       return {
+ ... (44 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L15-L16` → after: `L131-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L131-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/200.js#L131-L150) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/200.js#L15-L16)

```diff
-       return qq.payloadKind === lq.hc.Msgpack ? (0, Yq.e)(qq.payload) : void 0
-     }
+       var zC;
+       return {
+         ...nC.store,
+         yaw: nC.store.yaw + (null !== (zC = QC.b[CC].previewYaw) && void 0 !== zC ? zC : 0)
+       }
+     }
+     const bC = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       nC = {
+         player: bC,
+         store: {
+           ...bC,
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L19-L140` → after: `L153-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/200.js#L153-L155) · [Before (L19-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/200.js#L19-L140)

```diff
-       if (Eq.payloadKind === lq.hc.Bytes || Eq.payloadKind === lq.hc.MsgpackBin) return (0, Oq.e)(qq, Eq.payload)
-     }
- 
-     function Aq(qq) {
-       return null !== qq && "object" === typeof qq
-     }
-   },
-   40366: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Bq,
-       d: () => Wq,
-       h: () => Nq,
-       l: () => uq,
-       o: () => dq
-     });
-     var Yq = gq(4622),
- ... (106 more removed lines; see GitHub link above)
+       CC instanceof Promise ? CC.then(zC).catch((CC => {
+         console.error("Couldn't open the preview", CC)
+       })) : zC(CC)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L144-L307` → after: `L159-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L159-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/200.js#L159-L224) · [Before (L144-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/200.js#L144-L307)

```diff
-         this.bytes = qq, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(qq.buffer, qq.byteOffset, qq.byteLength)
-       }
-       value() {
-         const qq = this.u8();
-         if (qq <= 127) return qq;
-         if (qq >= 224) return qq - 256;
-         if (qq >= 128 && qq <= 143) return this.map(15 & qq);
-         if (qq >= 144 && qq <= 159) return this.array(15 & qq);
-         if (qq >= 160 && qq <= 191) return this.str(31 & qq);
-         switch (qq) {
-           case 192:
-             return null;
-           case 194:
-             return !1;
-           case 195:
-             return !0;
- ... (148 more removed lines; see GitHub link above)
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, fC(CC, (CC => {
+           this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height), null !== this.view && CC.show(this.view))
+         }))
+       }
+       show(CC) {
+         var zC;
+         this.view = CC, null === (zC = this.opened) || void 0 === zC || zC.show(CC)
+       }
+       resize(CC, zC) {
+         var ZC;
+         this.size = {
+           width: CC,
+           height: zC
+         }, null === (ZC = this.opened) || void 0 === ZC || ZC.resize(CC, zC)
+       }
+       close() {
+ ... (50 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L309-L387` → after: `L226-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L226-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/200.js#L226-L261) · [Before (L309-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/200.js#L309-L387)

```diff
-         this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
-       }
-       bytes() {
-         return this.buf.subarray(0, this.at)
-       }
-       value(qq, Eq) {
-         if (Eq > 512) throw new Error("msgpack: nested too deep");
-         switch (typeof qq) {
-           case "undefined":
-             return this.u8(212), this.u8(0), void this.u8(0);
-           case "boolean":
-             return void this.u8(qq ? 195 : 194);
-           case "number":
-             return void this.number(qq);
-           case "bigint":
-             return void this.bigint(qq);
- ... (63 more removed lines; see GitHub link above)
+         this.host = null, this.makeDefault = null
+       }
+       setHost(CC) {
+         this.host = CC
+       }
+       setDefaultHost(CC) {
+         this.makeDefault = CC
+       }
+       current() {
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
+         }
+         return this.host
+       }
+       openMob(CC) {
+ ... (20 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L390-L1353` → after: `L264-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L264-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/200.js#L264-L289) · [Before (L390-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/200.js#L390-L1353)

```diff
-         this.buf = qq, this.at = 0, this.view = null
-       }
-       bool() {
-         return 0 !== this.u8()
-       }
-       long() {
-         let qq = this.u8(),
-           Eq = 127 & qq,
-           gq = 128;
-         for (; 128 & qq;) {
-           if (gq > 2 ** 63) throw new RangeError("avro: varint too long");
-           qq = this.u8(), Eq += (127 & qq) * gq, gq *= 128
-         }
-         return Eq % 2 === 1 ? -(Eq + 1) / 2 : Eq / 2
-       }
-       float() {
- ... (948 more removed lines; see GitHub link above)
+         this.load = CC, this.loaded = null, this.loading = null
+       }
+       run(CC) {
+         return null !== this.loaded ? CC(this.loaded) : (this.loading ??= this.load().then((CC => (this.loaded = CC, CC)), (CC => {
+           throw this.loading = null, CC
+         })), this.loading.then(CC))
+       }
+     }
+     class bC {
+       constructor() {
+         this.mobScene = new wC((() => Promise.all([ZC.e(72), ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(96), ZC.e(255), ZC.e(75), ZC.e(74), ZC.e(252), ZC.e(73), ZC.e(262), ZC.e(256), ZC.e(261), ZC.e(259), ZC.e(251), ZC.e(274), ZC.e(228), ZC.e(244), ZC.e(257), ZC.e(260), ZC.e(77), ZC.e … [truncated]
+       }
+       openMob(CC) {
+         return this.mobScene.run((zC => zC.openMobPreview(CC)))
+       }
+       openPet(CC) {
+ ... (10 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/201.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/201.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L4-L35` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L4) · [Before (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L4-L35)

```diff
-   39082: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Yq
-     });
-     class Yq {
-       constructor(qq, Eq) {
-         this.read = qq, this.apply = Eq, this.release = null
-       }
-       turn(qq, Eq) {
-         const gq = null === this.release ? this.read() : this.release.transitionMs;
-         this.stop(!1), this.apply({
-           forcedCameraDirectionTransitionMs: Eq,
-           forcedCameraDirection: [qq[0], qq[1], qq[2]]
-         }), this.release = {
-           timer: setTimeout((() => {
-             this.stop(!0)
- ... (16 more removed lines; see GitHub link above)
+   34214: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L40` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L9) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L40)

```diff
-     const Yq = new Map;
+     var QC = ZC(3242);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L42-L43` → after: `L11-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L11-L22) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L42-L43)

```diff
-     function lq(qq, Eq) {
-       Yq.set(qq, Eq)
+     function wC() {
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const CC = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       try {
+         const zC = new BroadcastChannel(QC.m);
+         zC.postMessage({
+           stored: CC
+         }), zC.close()
+       } catch {
+         return null
+       }
+       return CC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L47` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L26-L27) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L47)

```diff
-       return qq ? Yq.get(qq) : void 0
+       const zC = "object" === typeof CC && null !== CC ? CC.stored : null;
+       return "string" === typeof zC ? zC : null
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L50` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L30) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L50)

```diff
-   39516: (qq, Eq, gq) => {
+   34210: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L52` → after: `L32-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L32-L34) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L52)

```diff
-       b: () => lq
+       e: () => nC,
+       i: () => wC,
+       k: () => bC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L54-L69` → after: `L36-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L36-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L36-L47) · [Before (L54-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L54-L69)

```diff
-     var Yq = gq(38202);
- 
-     function lq(qq, Eq, gq) {
-       var lq, Oq, mq, xq, Aq, cq, uq;
-       const Bq = (0, Yq.b)(qq, Eq, gq[0], gq[1], gq[2]),
-         Wq = Bq ? null !== (lq = Bq.textCell) && void 0 !== lq ? lq : Bq.rect.anchor : gq,
-         Nq = Eq(Wq[0], Wq[1], Wq[2]);
-       return {
-         pos: [gq[0], gq[1], gq[2]],
-         noticeboardSpan: Bq && {
-           width: Bq.rect.width,
-           height: Bq.rect.height
-         },
-         text: null !== (Oq = null === Nq || void 0 === Nq || null === (mq = Nq.persisted) || void 0 === mq || null === (xq = mq.shared) || void 0 === xq ? void 0 : xq.text) && void 0 !== Oq ? Oq : "",
-         textSize: null !== (Aq = null === Nq || void 0 === Nq || null === (cq = Nq.persisted) || void 0 === cq || null === (uq = cq.shared) || void 0 === uq ? void 0 : uq.textSize) && void 0 !== Aq ? Aq : null
-       }
+     var QC = ZC(3242);
+     async function wC(CC, zC, ZC) {
+       let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
+       const bC = nC(await CC.getItem(QC.f, zC));
+       if (null === bC || wC()) return null;
+       const fC = await CC.getItem(QC.i, zC);
+       return wC() ? null : (await async function(CC) {
+         await Promise.all([CC.removeItem(QC.f), CC.removeItem(QC.i)])
+       }(CC).catch(ZC), {
+         pack: bC,
+         source: "string" === typeof fC ? fC : null
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L71-L72` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L49) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L71-L72)

```diff
-   },
-   38477: (qq, Eq, gq) => {
+ 
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L74-L81` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L51-L53) · [Before (L74-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L74-L81)

```diff
-       switch (qq.kind) {
-         case void 0:
-         case "flatEmissive":
-           return !1;
-         case "chevronPath":
-         case "furnaceFire":
-           return !0
-       }
+       return (0, QC.r)() ? Promise.resolve(null) : wC(CC, !1, (CC => {
+         console.error("Error removing temporary texture pack: ", CC)
+       }), QC.r)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L132-L137` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L57-L59) · [Before (L132-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L132-L137)

```diff
-       if (qq === Yq.b) return 0;
-       const Eq = (0, Oq.e)(qq);
-       if (void 0 !== Eq && Eq <= lq.MAX_BLOCK_ID) return Eq;
-       const gq = (0, Oq.e)(qq.split("|")[0]);
-       if (void 0 !== gq && gq <= lq.MAX_BLOCK_ID && (0, lq.rootMetaDescOf)(gq) === qq) return gq;
-       throw new Error(`Invalid block name. You sent ${qq}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
+       if ("object" !== typeof CC || null === CC) return null;
+       const zC = CC.metaData;
+       return "object" !== typeof zC || null === zC || "string" !== typeof zC.id ? null : CC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L140-L159` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L62-L64) · [Before (L140-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L140-L159)

```diff
-   39155: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => lq
-     });
-     var Yq = gq(24);
-     class lq {
-       constructor(qq) {
-         this.screen = qq, this.hidesHud = !1
-       }
-       show(qq, Eq) {
-         this.screen.setFade(qq.colour, qq.alpha), this.screen.setLetterbox(!0 === Eq.letterbox, qq.alpha < 1), this.setHudHidden(!0 === Eq.hideHud)
-       }
-       clear() {
-         this.screen.clear(), this.setHudHidden(!1)
-       }
-       setHudHidden(qq) {
- ... (4 more removed lines; see GitHub link above)
+   50739: (CC, zC, ZC) => {
+     function QC(CC) {
+       return null === CC.gameSource ? "player" : "customGame"
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L164-L173` → after: `L67-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L67-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L67-L70) · [Before (L164-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L164-L173)

```diff
-       C: () => uq,
-       d: () => Yq,
-       h: () => Wq,
-       k: () => Bq,
-       o: () => mq,
-       p: () => aq,
-       q: () => Aq,
-       s: () => Vq,
-       v: () => cq,
-       z: () => xq
+       b: () => bC,
+       c: () => SC,
+       g: () => gC,
+       i: () => QC
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L175-L177` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L72) · [Before (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L175-L177)

```diff
-     const Yq = Math.PI / 2 - .001,
-       lq = 2 * Math.PI,
-       Oq = 1e-9;
+     const wC = /^data:[\w.+/-]*;base64,[A-Za-z0-9+/]*={0,2}$/;
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L179-L180` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L74-L75) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L179-L180)

```diff
-     function mq(qq, Eq) {
-       Eq.heading = qq.heading, Eq.pitch = qq.pitch
+     function bC(CC) {
+       return "" === CC || "string" === typeof CC && wC.test(CC)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L183-L186` → after: `L78-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L78-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L78-L89) · [Before (L183-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L183-L186)

```diff
-     function xq(qq, Eq) {
-       const gq = Eq - qq;
-       return gq - lq * Math.floor((gq + Math.PI) / lq)
-     }
+     function nC(CC) {
+       return "object" === typeof CC && null !== CC && ("earth" === CC.type || Object.entries(CC).every((CC => {
+         let [zC, ZC] = CC;
+         return "type" === zC || bC(ZC)
+       })))
+     }
+     const fC = /(?:src|image|image-set|cross-fade)\(/i,
+       oC = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
+       qC = /url\(/gi,
+       FC = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
+       WC = new Set([...FC.map((CC => new URL(CC).origin)), "https://fonts.gstatic.com"]),
+       NC = new Set(["https://i.imgur.com/MEcjBFQ.png"]);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L188-L189` → after: `L91-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L91-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/201.js#L91-L110) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/201.js#L188-L189)

```diff
-     function Aq(qq, Eq, gq) {
-       return qq + xq(qq, Eq) * gq
+     function MC(CC) {
+       var zC, ZC;
+       if (CC.includes("\\") || fC.test(CC)) return !0;
+       const QC = [...CC.matchAll(oC)];
+       return QC.length !== (null !== (zC = null === (ZC = CC.match(qC)) || void 0 === ZC ? void 0 : ZC.length) && void 0 !== zC ? zC : 0) || !QC.every((CC => {
+         var zC, ZC, QC;
+         let {
+           groups: wC
+         } = CC;
+         return function(CC) {
+           try {
+             return FC.every((zC => {
+               const ZC = new URL(CC, zC);
+               return "data:" === ZC.protocol || WC.has(ZC.origin) || NC.has(ZC.href)
+             }))
+           } catch {
+ ... (4 more added lines; see GitHub link above)
```
