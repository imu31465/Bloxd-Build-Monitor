# Changed — Bundle Modifications Report (Part 063 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `63 / 116` (**310** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 062](part-062.md) · [Part 064 →](part-064.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (4629 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 1561. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11490-L11492` → after: `L11838-L11840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11838-L11840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11838-L11840) · [Before (L11490-L11492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11490-L11492)

```diff
-         const VV = this.heldItemState.zC;
-         this.iv.sF.hxV(VV) || (this._modelLoadedSub = vV.h.subscribe(`lifeformSetupFinished|${VV}`, (() => {
-           this.mwV()
+         const HH = this.heldItemState.pR;
+         this.bG.pT.VLH(HH) || (this._modelLoadedSub = GH.k.subscribe(`lifeformSetupFinished|${HH}`, (() => {
+           this.bEH()
```

#### 1562. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11503` → after: `L11851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11851) · [Before (L11503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11503)

```diff
-         return null === VV || this.iv.gZ.YC.has(VV) ? VV : (this.thirdPersonThinObjectId = null, null)
+         return null === HH || this.bG.mX.bR.has(HH) ? HH : (this.thirdPersonThinObjectId = null, null)
```

#### 1563. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11507-L11510` → after: `L11855-L11858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11855-L11858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11855-L11858) · [Before (L11507-L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11507-L11510)

```diff
-           WZ: eV
-         } = this.thirdPersonPose, xV = eV.x * this.heldPoseScaleY() * eV.z < 0, JV = VV.thinInstMgr.getNodeWorldMatrix(VV.pC, VV.nodeIndex).determinant() < 0, YV = (0, EV.e)(xV, JV);
-         if (this.thirdPersonFlippedWinding === YV && this.thirdPersonAttachedToId === VV.pC && this.thirdPersonAttachedToNode === VV.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
-         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = YV, this.thirdPersonAttachedToId = VV.pC, this.thirdPersonAttachedToNode = VV.nodeIndex;
+           bX: BH
+         } = this.thirdPersonPose, LH = BH.x * this.heldPoseScaleY() * BH.z < 0, AH = HH.thinInstMgr.getNodeWorldMatrix(HH.kR, HH.nodeIndex).determinant() < 0, rH = (0, WH.h)(LH, AH);
+         if (this.thirdPersonFlippedWinding === rH && this.thirdPersonAttachedToId === HH.kR && this.thirdPersonAttachedToNode === HH.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
+         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = rH, this.thirdPersonAttachedToId = HH.kR, this.thirdPersonAttachedToNode = HH.nodeIndex;
```

#### 1564. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11513` → after: `L11861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11861) · [Before (L11513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11513)

```diff
-           hn: !0,
+           LX: !0,
```

#### 1565. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11516-L11517` → after: `L11864-L11865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11864-L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11864-L11865) · [Before (L11516-L11517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11516-L11517)

```diff
-           const xV = this.iv.gZ.YC;
-           UV === this.thirdPersonRequestId && xV.has(VV.pC) ? (this.thirdPersonThinObjectId = eV, xV.attachThinObject(eV, VV.pC, VV.nodeIndex), xV.set(eV, "aOpacity", (0, BV.holderAttachmentOpacity)(this.iv, this.heldItemState.zC)), (0, BV.invalidateAttachmentProximityFade)(this. … [truncated]
+           const LH = this.bG.mX.bR;
+           SH === this.thirdPersonRequestId && LH.has(HH.kR) ? (this.thirdPersonThinObjectId = BH, LH.attachThinObject(BH, HH.kR, HH.nodeIndex), LH.set(BH, "aOpacity", (0, MH.holderAttachmentOpacity)(this.bG, this.heldItemState.pR)), (0, MH.invalidateAttachmentProximityFade)(this. … [truncated]
```

#### 1566. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11521` → after: `L11869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11869) · [Before (L11521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11521)

```diff
-         return EV.d * this.thirdPersonPose.WZ.y
+         return WH.d * this.thirdPersonPose.bX.y
```

#### 1567. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11527` → after: `L11875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11875) · [Before (L11527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11527)

```diff
-         const eV = this.iv.gZ.YC,
+         const BH = this.bG.mX.bR,
```

#### 1568. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11531` → after: `L11879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11879) · [Before (L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11531)

```diff
-             WZ: YV,
+             bX: rH,
```

#### 1569. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11540` → after: `L11888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11888) · [Before (L11540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11540)

```diff
-           } = (0, jV.d)(xV, yV ? UV : JV, pV, this.typeObj.heldModelOffsetY());
+           } = (0, xH.d)(LH, hH ? SH : AH, tH, this.typeObj.heldModelOffsetY());
```

#### 1570. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11546` → after: `L11894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11894) · [Before (L11546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11546)

```diff
-         null !== VV && (this.iv.gZ.YC.delete(VV), this.thirdPersonThinObjectId = null)
+         null !== HH && (this.bG.mX.bR.delete(HH), this.thirdPersonThinObjectId = null)
```

#### 1571. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11550` → after: `L11898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11898) · [Before (L11550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11550)

```diff
-           iv: VV,
+           bG: HH,
```

#### 1572. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11553-L11555` → after: `L11901-L11903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11901-L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11901-L11903) · [Before (L11553-L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11553-L11555)

```diff
-         if (!VV.sF.wxV(eV.zC, "humanoidMesh")) return null;
-         const xV = VV.sF.BJV(eV.zC),
-           JV = VV.gZ.YC,
+         if (!HH.pT.aBH(BH.pR, "humanoidMesh")) return null;
+         const LH = HH.pT.BAH(BH.pR),
+           AH = HH.mX.bR,
```

#### 1573. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11557` → after: `L11905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11905) · [Before (L11557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11557)

```diff
-             pC: YV
+             kR: rH
```

#### 1574. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11564` → after: `L11912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11912) · [Before (L11564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11564)

```diff
-           pC: YV,
+           kR: rH,
```

#### 1575. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11573` → after: `L11921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11921) · [Before (L11573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11573)

```diff
-           pC: VV.pC,
+           kR: HH.kR,
```

#### 1576. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11578` → after: `L11926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11926) · [Before (L11578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11578)

```diff
-           iv: eV,
+           bG: BH,
```

#### 1577. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11581-L11583` → after: `L11929-L11931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11929-L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11929-L11931) · [Before (L11581-L11583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11581-L11583)

```diff
-         if (!eV.sF.wxV(xV.zC, "fourLeggedMesh")) return null;
-         const JV = eV.sF.jJV(xV.zC),
-           YV = eV.gZ.YC,
+         if (!BH.pT.aBH(LH.pR, "fourLeggedMesh")) return null;
+         const AH = BH.pT.LAH(LH.pR),
+           rH = BH.mX.bR,
```

#### 1578. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11585` → after: `L11933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11933) · [Before (L11585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11585)

```diff
-             pC: UV
+             kR: SH
```

#### 1579. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11592` → after: `L11940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11940) · [Before (L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11592)

```diff
-           pC: UV,
+           kR: SH,
```

#### 1580. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11598` → after: `L11946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11946) · [Before (L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11598)

```diff
-         if (!this.iv.gZ.eE) return;
+         if (!this.bG.mX.KQ) return;
```

#### 1581. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11600` → after: `L11948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11948) · [Before (L11600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11600)

```diff
-         if (null !== VV) return void this.iv.gZ.YC.set(VV, "aLightLevels", this.heldItemLightLevels());
+         if (null !== HH) return void this.bG.mX.bR.set(HH, "aLightLevels", this.heldItemLightLevels());
```

#### 1582. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11603-L11605` → after: `L11951-L11953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11951-L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11951-L11953) · [Before (L11603-L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11603-L11605)

```diff
-         if (this.lightTargetsForMesh !== eV && (this.lightTargetsForMesh = eV, this.GQV = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
-           const VV = (0, nV.l)(eV);
-           for (const eV of VV) eV.sC && "aLightLevels" in eV.sC && this.GQV.push(eV);
+         if (this.lightTargetsForMesh !== BH && (this.lightTargetsForMesh = BH, this.XzH = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
+           const HH = (0, CH.k)(BH);
+           for (const BH of HH) BH.kF && "aLightLevels" in BH.kF && this.XzH.push(BH);
```

#### 1583. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11608` → after: `L11956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11956) · [Before (L11608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11608)

```diff
-         if (0 === this.GQV.length) return;
+         if (0 === this.XzH.length) return;
```

#### 1584. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11610` → after: `L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11958) · [Before (L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11610)

```diff
-         for (const JV of this.GQV)(0, nV.p)(JV, xV)
+         for (const AH of this.XzH)(0, CH.p)(AH, LH)
```

#### 1585. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11613` → after: `L11961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11961) · [Before (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11613)

```diff
-         return this.iv.sF.QJV(this.heldItemState.zC)._lightLevels
+         return this.bG.pT.ZLH(this.heldItemState.pR)._lightLevels
```

#### 1586. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11617` → after: `L11965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11965) · [Before (L11617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11617)

```diff
-   39518: (VV, eV, xV) => {
+   39248: (HH, BH, LH) => {
```

#### 1587. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11619` → after: `L11967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11967) · [Before (L11619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11619)

```diff
-       c: () => kV,
+       e: () => uH,
```

#### 1588. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11621` → after: `L11969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11969) · [Before (L11621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11621)

```diff
-       h: () => rV,
+       g: () => YH,
```

#### 1589. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11624-L11626` → after: `L11972-L11974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11972-L11974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11972-L11974) · [Before (L11624-L11626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11624-L11626)

```diff
-     var JV = xV(38263),
-       YV = xV(38667),
-       UV = xV(4952);
+     var AH = LH(37961),
+       rH = LH(38346),
+       SH = LH(4879);
```

#### 1590. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11630-L11632` → after: `L11978-L11980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11978-L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11978-L11980) · [Before (L11630-L11632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11630-L11632)

```diff
-         position: new JV.Ik,
-         rotation: new JV.Ik,
-         WZ: new JV.Ik,
+         position: new AH.lu,
+         rotation: new AH.lu,
+         bX: new AH.lu,
```

#### 1591. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11637-L11639` → after: `L11985-L11987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11985-L11987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L11985-L11987) · [Before (L11637-L11639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11637-L11639)

```diff
-     const pV = new JV.Ik(-.18, -.66, .48),
-       QV = new JV.Ik(.4, 1.25, Math.PI + .9),
-       nV = new JV.Ik(-.12, .12, .12),
+     const tH = new AH.lu(-.18, -.66, .48),
+       zH = new AH.lu(.4, 1.25, Math.PI + .9),
+       CH = new AH.lu(-.12, .12, .12),
```

#### 1592. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11657` → after: `L12005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12005) · [Before (L11657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11657)

```diff
-         WZ: yV
+         bX: hH
```

#### 1593. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11659-L11661` → after: `L12007-L12009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12007-L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12007-L12009) · [Before (L11659-L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11659-L11661)

```diff
-       if (xV.usesQuaternion = !1, "Gun" === VV.type) return JV.iG(pV), YV.iG(QV), void yV.iG(nV);
-       const [wV, ZV, vV] = null !== eV && void 0 !== eV ? eV : [0, 0, 0], rV = (0, UV.b)(VV.type), bV = rV ? 2.25 : 1.35, EV = rV ? 0 : .08;
-       if ("TwoDTool" === VV.type || VV.holdAsAiming) JV.FeV(wV, -.48 + ZV, .24 + vV + EV), yV.FeV(.19 * bV, -.19 * bV, .19 * bV), VV.holdAsAiming ? YV.FeV(.4 + Math.PI, 1.25, Math.PI / 2) : YV.FeV(Math.PI, Math.PI / 2, .35 * Math.PI);
+       if (LH.usesQuaternion = !1, "Gun" === HH.type) return AH.Tm(tH), rH.Tm(zH), void hH.Tm(CH);
+       const [EH, XH, GH] = null !== BH && void 0 !== BH ? BH : [0, 0, 0], YH = (0, SH.b)(HH.type), QH = YH ? 2.25 : 1.35, WH = YH ? 0 : .08;
+       if ("TwoDTool" === HH.type || HH.holdAsAiming) AH.SBH(EH, -.48 + XH, .24 + GH + WH), hH.SBH(.19 * QH, -.19 * QH, .19 * QH), HH.holdAsAiming ? rH.SBH(.4 + Math.PI, 1.25, Math.PI / 2) : rH.SBH(Math.PI, Math.PI / 2, .35 * Math.PI);
```

#### 1594. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11663` → after: `L12011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12011) · [Before (L11663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11663)

```diff
-         JV.FeV(wV, -.72 + ZV, .18 + vV + EV);
+         AH.SBH(EH, -.72 + XH, .18 + GH + WH);
```

#### 1595. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11665` → after: `L12013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12013) · [Before (L11665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11665)

```diff
-         yV.FeV(VV, VV, VV), YV.FeV(rV ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
+         hH.SBH(HH, HH, HH), rH.SBH(YH ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
```

#### 1596. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11670` → after: `L12018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12018) · [Before (L11670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11670)

```diff
-   39516: (VV, eV, xV) => {
+   39246: (HH, BH, LH) => {
```

#### 1597. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11674` → after: `L12022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12022) · [Before (L11674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11674)

```diff
-     var JV = xV(38263);
+     var AH = LH(37961);
```

#### 1598. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11676` → after: `L12024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12024) · [Before (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11676)

```diff
-       UV = new JV.Ik;
+       SH = new AH.lu;
```

#### 1599. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11680` → after: `L12028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12028) · [Before (L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11680)

```diff
-       const pV = eV instanceof JV.Quaternion ? eV : JV.Quaternion.RotationYawPitchRollToRef(eV.y, eV.x, eV.z, YV);
+       const tH = BH instanceof AH.Quaternion ? BH : AH.Quaternion.RotationYawPitchRollToRef(BH.y, BH.x, BH.z, rH);
```

#### 1600. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11684` → after: `L12032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12032) · [Before (L11684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11684)

```diff
-   38254: (VV, eV, xV) => {
+   37945: (HH, BH, LH) => {
```

#### 1601. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11694-L11698` → after: `L12042-L12046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12042-L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12042-L12046) · [Before (L11694-L11698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11694-L11698)

```diff
-     var JV = xV(38256),
-       YV = xV(3093),
-       UV = xV(657),
-       yV = xV(1252),
-       pV = xV(32);
+     var AH = LH(37952),
+       rH = LH(3038),
+       SH = LH(619),
+       hH = LH(1168),
+       tH = LH(18);
```

#### 1602. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11713` → after: `L12061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12061) · [Before (L11713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11713)

```diff
-         if (null !== YV.pC)
+         if (null !== rH.kR)
```

#### 1603. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11722` → after: `L12070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12070) · [Before (L11722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11722)

```diff
-         if (null === YV.pC || null === (JV = YV.hideOnArmourPartsEquip) || void 0 === JV || !JV.length) continue;
+         if (null === rH.kR || null === (AH = rH.hideOnArmourPartsEquip) || void 0 === AH || !AH.length) continue;
```

#### 1604. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11724` → after: `L12072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12072) · [Before (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11724)

```diff
-         VV.setVisibility(YV.pC, !UV)
+         HH.setVisibility(rH.kR, !SH)
```

#### 1605. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11727-L11733` → after: `L12075-L12081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12075-L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12075-L12081) · [Before (L11727-L11733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11727-L11733)

```diff
-     var ZV = xV(38660),
-       vV = xV(375),
-       rV = xV(38363),
-       kV = xV(38477),
-       bV = xV(38698),
-       EV = xV(38750),
-       BV = xV(38758);
+     var XH = LH(38331),
+       GH = LH(317),
+       YH = LH(38041),
+       uH = LH(38169),
+       QH = LH(38378),
+       WH = LH(38444),
+       MH = LH(38450);
```

#### 1606. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11738` → after: `L12086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12086) · [Before (L11738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11738)

```diff
-         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.zC = void 0
+         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.pR = void 0
```

#### 1607. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11746` → after: `L12094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12094) · [Before (L11746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11746)

```diff
-       } = JV, pV = (0, kV.h)(UV, yV);
+       } = AH, tH = (0, uH.i)(SH, hH);
```

#### 1608. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11748-L11749` → after: `L12096-L12097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12096-L12097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12096-L12097) · [Before (L11748-L11749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11748-L11749)

```diff
-       const QV = (0, rV.e)(UV, yV);
-       jV.has(QV) || (jV.add(QV), (0, kV.d)(VV, UV, yV, {
+       const zH = (0, YH.g)(SH, hH);
+       xH.has(zH) || (xH.add(zH), (0, uH.e)(HH, SH, hH, {
```

#### 1609. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11754-L11756` → after: `L12102-L12104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12102-L12104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12102-L12104) · [Before (L11754-L11756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11754-L11756)

```diff
-           const JV = (0, YV.d)(),
-             UV = JV.gZ.YC,
-             yV = JV.sF.tC(JV.sF.names.meshAttachments);
+           const AH = (0, rH.c)(),
+             SH = AH.mX.bR,
+             hH = AH.pT.JR(AH.pT.names.meshAttachments);
```

#### 1610. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11759` → after: `L12107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12107) · [Before (L11759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11759)

```diff
-             const yV = null !== (pV = null === (QV = JV.sF.hxV(YV.zC)) || void 0 === QV ? void 0 : QV.pC) && void 0 !== pV ? pV : null;
+             const hH = null !== (tH = null === (zH = AH.pT.VLH(rH.pR)) || void 0 === zH ? void 0 : zH.kR) && void 0 !== tH ? tH : null;
```

#### 1611. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11761` → after: `L12109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12109) · [Before (L11761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11761)

```diff
-               for (const JV of YV.attachments) JV.modelGlb === eV && JV.texture === xV && null === JV.pC && TV(YV, yV, VV, JV);
+               for (const AH of rH.attachments) AH.modelGlb === BH && AH.texture === LH && null === AH.kR && UH(rH, hH, HH, AH);
```

#### 1612. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11763` → after: `L12111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12111) · [Before (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11763)

```diff
-             } else console.error(`Loaded ${(0,rV.e)(eV,xV)} but theres no thinObjectId ${yV} for parent entity ${YV.zC}`)
+             } else console.error(`Loaded ${(0,YH.g)(BH,LH)} but theres no thinObjectId ${hH} for parent entity ${rH.pR}`)
```

#### 1613. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11767` → after: `L12115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12115) · [Before (L11767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11767)

```diff
-         console.error(`Failed to load ${UV}:`, VV.stack)
+         console.error(`Failed to load ${SH}:`, HH.stack)
```

#### 1614. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11773-L11775` → after: `L12121-L12123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12121-L12123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12121-L12123) · [Before (L11773-L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11773-L11775)

```diff
-       const pV = (0, YV.d)(),
-         QV = pV.gZ.YC,
-         nV = `${(0,rV.e)(JV.modelGlb,JV.texture)}|${JV.modelNode}`;
+       const tH = (0, rH.c)(),
+         zH = tH.mX.bR,
+         CH = `${(0,YH.g)(AH.modelGlb,AH.texture)}|${AH.modelNode}`;
```

#### 1615. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11778` → after: `L12126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12126) · [Before (L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11778)

```diff
-         if (!VV) return void console.error(`Node ${JV.modelNode} not found in container ${JV.modelGlb}`);
+         if (!HH) return void console.error(`Node ${AH.modelNode} not found in container ${AH.modelGlb}`);
```

#### 1616. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11780` → after: `L12128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12128) · [Before (L11780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11780)

```diff
-           Jv: 4,
+           aX: 4,
```

#### 1617. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11789-L11790` → after: `L12137-L12138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12137-L12138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12137-L12138) · [Before (L11789-L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11789-L11790)

```diff
-         }), void 0 !== JV.animation && (0, rV.o)(xV), QV.setPickableForType(nV, !0);
-         for (const eV of [VV, ...VV.getChildMeshes()]) eV.material && pV.gZ.bC(eV)
+         }), void 0 !== AH.animation && (0, YH.n)(LH), zH.setPickableForType(CH, !0);
+         for (const BH of [HH, ...HH.getChildMeshes()]) BH.material && tH.mX.jR(BH)
```

#### 1618. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11796-L11799` → after: `L12144-L12147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12144-L12147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12144-L12147) · [Before (L11796-L11799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11796-L11799)

```diff
-       QV.setEntityId(wV, jV), QV.setPickable(wV, VV.personFullBody && (0, EV.h)(jV)), QV.set(wV, "aOpacity", (0, BV.holderAttachmentOpacity)(pV, jV));
-       const tV = pV.YL[pV.bD][jV];
-       if (QV.setRenderingGroupId(wV, null !== (UV = null === tV || void 0 === tV ? void 0 : tV.zIndex) && void 0 !== UV ? UV : 0), null !== tV && void 0 !== tV && tV.overlayColour) {
-         const [VV, eV, xV] = (0, vV.V)(tV.overlayColour);
+       zH.setEntityId(EH, xH), zH.setPickable(EH, HH.personFullBody && (0, WH.g)(xH)), zH.set(EH, "aOpacity", (0, MH.holderAttachmentOpacity)(tH, xH));
+       const PH = tH.mF[tH.lF][xH];
+       if (zH.setRenderingGroupId(EH, null !== (SH = null === PH || void 0 === PH ? void 0 : PH.zIndex) && void 0 !== SH ? SH : 0), null !== PH && void 0 !== PH && PH.overlayColour) {
+         const [HH, BH, LH] = (0, GH.W)(PH.overlayColour);
```

#### 1619. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11802-L11803` → after: `L12150-L12151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12150-L12151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12150-L12151) · [Before (L11802-L11803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11802-L11803)

```diff
-       const FV = pV.sF.QJV(jV);
-       if (QV.set(wV, "aLightLevels", null !== (yV = null === FV || void 0 === FV ? void 0 : FV._lightLevels) && void 0 !== yV ? yV : ZV.d), JV.overlayColour) {
+       const TH = tH.pT.ZLH(xH);
+       if (zH.set(EH, "aLightLevels", null !== (hH = null === TH || void 0 === TH ? void 0 : TH._lightLevels) && void 0 !== hH ? hH : XH.c), AH.overlayColour) {
```

#### 1620. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11807` → after: `L12155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12155) · [Before (L11807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11807)

```diff
-       if (JV.pC = wV, void 0 !== JV.animation) {
+       if (AH.kR = EH, void 0 !== AH.animation) {
```

#### 1621. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11809` → after: `L12157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12157) · [Before (L11809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11809)

```diff
-         void 0 === eV && (eV = bV.b.fromRests(QV, nV, JV.animation, (0, bV.m)(QV, wV)), qV.set(nV, eV)), JV.clipPose = eV, null !== eV && VV.animatedAttachments.push(JV)
+         void 0 === BH && (BH = QH.d.fromRests(zH, CH, AH.animation, (0, QH.k)(zH, EH)), vH.set(CH, BH)), AH.clipPose = BH, null !== BH && HH.animatedAttachments.push(AH)
```

#### 1622. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11814` → after: `L12162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12162) · [Before (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11814)

```diff
-       const JV = VV.sF.getState(eV, VV.sF.names.meshAttachments);
+       const AH = HH.pT.getState(BH, HH.pT.names.meshAttachments);
```

#### 1623. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11816` → after: `L12164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12164) · [Before (L11816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11816)

```diff
-         for (const YV of JV.attachments) null !== YV.pC && VV.gZ.YC.setPickable(YV.pC, xV)
+         for (const rH of AH.attachments) null !== rH.kR && HH.mX.bR.setPickable(rH.kR, LH)
```

#### 1624. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11824-L11826` → after: `L12172-L12174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12172-L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12172-L12174) · [Before (L11824-L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11824-L11826)

```diff
-         uF: function(eV, xV) {
-           xV.zIndexSub = pV.h.subscribe(`otherEntitySettingsClientifiedEId|${eV}|zIndex`, (eV => {
-             for (const JV of xV.attachments) null !== JV.pC && VV.gZ.YC.setRenderingGroupId(JV.pC, eV)
+         aT: function(BH, LH) {
+           LH.zIndexSub = tH.k.subscribe(`otherEntitySettingsClientifiedEId|${BH}|zIndex`, (BH => {
+             for (const AH of LH.attachments) null !== AH.kR && HH.mX.bR.setRenderingGroupId(AH.kR, BH)
```

#### 1625. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11829-L11831` → after: `L12177-L12179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12177-L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12177-L12179) · [Before (L11829-L11831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11829-L11831)

```diff
-         bR: function(eV, xV) {
-           pV.h.unsubscribe(xV.zIndexSub);
-           const JV = VV.gZ.YC;
+         bq: function(BH, LH) {
+           tH.k.unsubscribe(LH.zIndexSub);
+           const AH = HH.mX.bR;
```

#### 1626. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11833-L11834` → after: `L12181-L12182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12181-L12182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12181-L12182) · [Before (L11833-L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11833-L11834)

```diff
-             if (null !== VV.pC && JV.has(VV.pC)) try {
-               JV.delete(VV.pC)
+             if (null !== HH.kR && AH.has(HH.kR)) try {
+               AH.delete(HH.kR)
```

#### 1627. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11836` → after: `L12184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12184) · [Before (L11836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11836)

```diff
-               console.error(`Failed to cleanup attachment ${VV.pC} of entity ${eV}:`, YV.stack)
+               console.error(`Failed to cleanup attachment ${HH.kR} of entity ${BH}:`, rH.stack)
```

#### 1628. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11840` → after: `L12188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12188) · [Before (L11840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11840)

```diff
-         SF: function(eV, xV) {
+         rU: function(BH, LH) {
```

#### 1629. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11844-L11845` → after: `L12192-L12193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12192-L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12192-L12193) · [Before (L11844-L11845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11844-L11845)

```diff
-             const eV = null !== (YV = null === (UV = VV.sF.hxV(yV.zC)) || void 0 === UV ? void 0 : UV.pC) && void 0 !== YV ? YV : null;
-             null === eV || (0, JV.pausesOutOfView)(VV, yV.zC, eV) || XV(VV, yV)
+             const BH = null !== (rH = null === (SH = HH.pT.VLH(hH.pR)) || void 0 === SH ? void 0 : SH.kR) && void 0 !== rH ? rH : null;
+             null === BH || (0, AH.pausesOutOfView)(HH, hH.pR, BH) || kH(HH, hH)
```

#### 1630. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11852` → after: `L12200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12200) · [Before (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11852)

```diff
-       const xV = VV.sF.getState(eV, VV.sF.names.meshAttachments);
+       const LH = HH.pT.getState(BH, HH.pT.names.meshAttachments);
```

#### 1631. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11857-L11859` → after: `L12205-L12207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12205-L12207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12205-L12207) · [Before (L11857-L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11857-L11859)

```diff
-       const xV = VV.gZ.YC,
-         JV = VV.OW / 1e3;
-       for (const YV of eV.animatedAttachments) YV.clipPose.write(xV, YV.pC, JV)
+       const LH = HH.mX.bR,
+         AH = HH.NK / 1e3;
+       for (const rH of BH.animatedAttachments) rH.clipPose.write(LH, rH.kR, AH)
```

#### 1632. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11863` → after: `L12211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12211) · [Before (L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11863)

```diff
-       const JV = VV.sF.getState(eV, VV.sF.names.meshAttachments);
+       const AH = HH.pT.getState(BH, HH.pT.names.meshAttachments);
```

#### 1633. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11866` → after: `L12214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12214) · [Before (L11866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11866)

```diff
-           if (YV.pC === xV) return !0;
+           if (rH.kR === LH) return !0;
```

#### 1634. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11872` → after: `L12220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12220) · [Before (L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11872)

```diff
-       return WV(VV, eV, null !== (JV = xV.attachments) && void 0 !== JV ? JV : [])
+       return fH(HH, BH, null !== (AH = LH.attachments) && void 0 !== AH ? AH : [])
```

#### 1635. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11881-L11884` → after: `L12229-L12232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12229-L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12229-L12232) · [Before (L11881-L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11881-L11884)

```diff
-       if ((0, UV.J)(VV)) return console.error("Cannot update mesh attachments for invalid eId", VV), JV;
-       const pV = (0, YV.d)(),
-         QV = pV.sF.hxV(VV);
-       if (!QV) return console.error(`Cannot update mesh attachments for entity ${VV} as it has no mesh`), JV;
+       if ((0, SH.M)(HH)) return console.error("Cannot update mesh attachments for invalid eId", HH), AH;
+       const tH = (0, rH.c)(),
+         zH = tH.pT.VLH(HH);
+       if (!zH) return console.error(`Cannot update mesh attachments for entity ${HH} as it has no mesh`), AH;
```

#### 1636. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11886` → after: `L12234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12234) · [Before (L11886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11886)

```diff
-         pC: nV
+         kR: CH
```

#### 1637. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11888-L11891` → after: `L12236-L12239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12236-L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12236-L12239) · [Before (L11888-L11891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11888-L11891)

```diff
-       if (null === nV) return console.error(`Cannot update mesh attachments for entity ${VV} as it has no thinObjectId`), JV;
-       const ZV = pV.sF.getState(VV, pV.sF.names.meshAttachments);
-       if (!ZV) return console.error(`Cannot update mesh attachments for entity ${VV} as it has no meshAttachments component`), JV;
-       for (const YV of ZV.attachments)(0, yV.fb)(YV.owners, eV);
+       if (null === CH) return console.error(`Cannot update mesh attachments for entity ${HH} as it has no thinObjectId`), AH;
+       const XH = tH.pT.getState(HH, tH.pT.names.meshAttachments);
+       if (!XH) return console.error(`Cannot update mesh attachments for entity ${HH} as it has no meshAttachments component`), AH;
+       for (const rH of XH.attachments)(0, hH.kb)(rH.owners, BH);
```

#### 1638. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11898` → after: `L12246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12246) · [Before (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11898)

```diff
-               JV.owners.push(xV), gV(VV, JV.pC, yV.overlayColour), YV = !0;
+               AH.owners.push(LH), KH(HH, AH.kR, hH.overlayColour), rH = !0;
```

#### 1639. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11904` → after: `L12252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12252) · [Before (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11904)

```diff
-             pC: null,
+             kR: null,
```

#### 1640. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11909` → after: `L12257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12257) · [Before (L11909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11909)

```diff
-         return wV(VV.gZ.YC, JV, eV.attachments), UV
+         return EH(HH.mX.bR, AH, BH.attachments), SH
```

#### 1641. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11911` → after: `L12259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12259) · [Before (L11911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11911)

```diff
-       const vV = pV.gZ.YC;
+       const GH = tH.mX.bR;
```

#### 1642. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11914` → after: `L12262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12262) · [Before (L11914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11914)

```diff
-         0 === VV.owners.length && (null !== VV.pC && vV.delete(VV.pC), (0, yV.fb)(ZV.attachments, VV), null !== VV.clipPose && (0, yV.fb)(ZV.animatedAttachments, VV), YV--)
+         0 === HH.owners.length && (null !== HH.kR && GH.delete(HH.kR), (0, hH.kb)(XH.attachments, HH), null !== HH.clipPose && (0, hH.kb)(XH.animatedAttachments, HH), rH--)
```

#### 1643. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11921-L11922` → after: `L12269-L12270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12269-L12270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12269-L12270) · [Before (L11921-L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11921-L11922)

```diff
-       const xV = (0, YV.d)(),
-         JV = xV.sF.getState(VV, xV.sF.names.meshAttachments);
+       const LH = (0, rH.c)(),
+         AH = LH.pT.getState(HH, LH.pT.names.meshAttachments);
```

#### 1644. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11924-L11925` → after: `L12272-L12273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12272-L12273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12272-L12273) · [Before (L11924-L11925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11924-L11925)

```diff
-       const yV = null === (eV = xV.sF.hxV(VV)) || void 0 === eV ? void 0 : eV.pC;
-       (0, UV.J)(yV) || wV(xV.gZ.YC, yV, JV.attachments)
+       const hH = null === (BH = LH.pT.VLH(HH)) || void 0 === BH ? void 0 : BH.kR;
+       (0, SH.M)(hH) || EH(LH.mX.bR, hH, AH.attachments)
```

#### 1645. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11930` → after: `L12278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12278) · [Before (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11930)

```diff
-       const JV = VV.gZ.YC;
+       const AH = HH.mX.bR;
```

#### 1646. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11937` → after: `L12285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12285) · [Before (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11937)

```diff
-   38780: (VV, eV, xV) => {
+   38472: (HH, BH, LH) => {
```

#### 1647. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11945-L11950` → after: `L12293-L12298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12293-L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12293-L12298) · [Before (L11945-L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11945-L11950)

```diff
-     var JV = xV(3093),
-       YV = xV(2014),
-       UV = xV(375),
-       yV = xV(38791),
-       pV = xV(38787),
-       QV = xV(380),
+     var AH = LH(3038),
+       rH = LH(1962),
+       SH = LH(317),
+       hH = LH(38486),
+       tH = LH(38481),
+       zH = LH(330),
```

#### 1648. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11952-L11954` → after: `L12300-L12302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12300-L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12300-L12302) · [Before (L11952-L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11952-L11954)

```diff
-       wV = xV(38765),
-       ZV = xV(38256),
-       vV = xV(38785);
+       EH = LH(38453),
+       XH = LH(37952),
+       GH = LH(38475);
```

#### 1649. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11958` → after: `L12306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12306) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11958)

```diff
-         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
+         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
```

#### 1650. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11967` → after: `L12315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12315) · [Before (L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11967)

```diff
-         uF: function(VV, eV) {
+         aT: function(HH, BH) {
```

#### 1651. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11975-L11976` → after: `L12323-L12324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12323-L12324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12323-L12324) · [Before (L11975-L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11975-L11976)

```diff
-         bR: null,
-         SF: function(eV, xV) {
+         bq: null,
+         rU: function(BH, LH) {
```

#### 1652. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11980` → after: `L12328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12328) · [Before (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11980)

```diff
-             const xV = VV.sF.hxV(UV.zC);
+             const LH = HH.pT.VLH(SH.pR);
```

#### 1653. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11982` → after: `L12330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12330) · [Before (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11982)

```diff
-               UV.DZ = !1;
+               SH.oX = !1;
```

#### 1654. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11986` → after: `L12334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12334) · [Before (L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11986)

```diff
-               VYV: yV
+               NAH: hH
```

#### 1655. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11988-L11989` → after: `L12336-L12337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12336-L12337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12336-L12337) · [Before (L11988-L11989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11988-L11989)

```diff
-             if (!(null !== (JV = null === yV || void 0 === yV ? void 0 : yV.eYV) && void 0 !== JV ? JV : null === (YV = xV.mesh) || void 0 === YV ? void 0 : YV.isEnabled())) {
-               UV.DZ = !1;
+             if (!(null !== (AH = null === hH || void 0 === hH ? void 0 : hH.RAH) && void 0 !== AH ? AH : null === (rH = LH.mesh) || void 0 === rH ? void 0 : rH.isEnabled())) {
+               SH.oX = !1;
```

#### 1656. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11993` → after: `L12341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12341) · [Before (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11993)

```diff
-               pC: pV
+               kR: tH
```

#### 1657. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11995` → after: `L12343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12343) · [Before (L11995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L11995)

```diff
-             yV ? UV._thinObjectId !== pV && tV(UV, pV) : UV._rootMesh !== xV.mesh && FV(UV, xV.mesh), yV && (0, ZV.pausesOutOfView)(VV, UV.zC, pV) ? UV.DZ = !0 : qV(VV, UV)
+             hH ? SH._thinObjectId !== tH && PH(SH, tH) : SH._rootMesh !== LH.mesh && TH(SH, LH.mesh), hH && (0, XH.pausesOutOfView)(HH, SH.pR, tH) ? SH.oX = !0 : vH(HH, SH)
```

#### 1658. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12002` → after: `L12350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12350) · [Before (L12002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12002)

```diff
-       eV.DZ && null !== eV._thinObjectId && VV.gZ.YC.has(eV._thinObjectId) && qV(VV, eV)
+       BH.oX && null !== BH._thinObjectId && HH.mX.bR.has(BH._thinObjectId) && vH(HH, BH)
```

#### 1659. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12006` → after: `L12354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12354) · [Before (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12006)

```diff
-       const xV = eV.isServerControlled ? eV.serverSetRotation[1] : VV.sF.HxV(eV.zC).heading;
+       const LH = BH.isServerControlled ? BH.serverSetRotation[1] : HH.pT.ILH(BH.pR).heading;
```

#### 1660. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12011` → after: `L12359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12359) · [Before (L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12011)

```diff
-       const xV = VV.sF.getState(eV, "meshRotation");
+       const LH = HH.pT.getState(BH, "meshRotation");
```

#### 1661. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12017-L12023` → after: `L12365-L12371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12365-L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12365-L12371) · [Before (L12017-L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12017-L12023)

```diff
-       eV.DZ = !1;
-       const BV = VV.sF.XxV(VV.bD),
-         jV = VV.sF.zJV(eV.zC),
-         qV = eV.zC === VV.bD,
-         tV = (0, vV.d)(VV, eV.zC, jV),
-         FV = VV.sF.HxV(VV.bD),
-         TV = VV.sF.HxV(eV.zC),
+       BH.oX = !1;
+       const MH = HH.pT.ELH(HH.lF),
+         xH = HH.pT.GAH(BH.pR),
+         vH = BH.pR === HH.lF,
+         PH = (0, GH.b)(HH, BH.pR, xH),
+         TH = HH.pT.ILH(HH.lF),
+         UH = HH.pT.ILH(BH.pR),
```

#### 1662. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12026-L12027` → after: `L12374-L12375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12374-L12375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12374-L12375) · [Before (L12026-L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12026-L12027)

```diff
-         const xV = VV.bloxd.getResolvedPhysicsSettings(VV.bD, BV.physicsState);
-         null === xV.fixedHeading && xV.steering && BV._steeringActiveLastTick ? NV[1] = (0, pV.e)(VV, BV) : NV[1] = (0, yV.p)(xV, BV.steeringHeading, eV.baseRenderRotation[1] + wV.e.getPlayerFacingHeading(VV))
+         const LH = HH.bloxd.getResolvedPhysicsSettings(HH.lF, MH.physicsState);
+         null === LH.fixedHeading && LH.steering && MH._steeringActiveLastTick ? bH[1] = (0, tH.k)(HH, MH) : bH[1] = (0, hH.s)(LH, MH.steeringHeading, BH.baseRenderRotation[1] + EH.b.getPlayerFacingHeading(HH))
```

#### 1663. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12030` → after: `L12378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12378) · [Before (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12030)

```diff
-         if ((null === jV || void 0 === jV ? void 0 : jV.GJV) && VV.bloxd.getRiddenVehicleEId(jV.zk) === eV.zC && null === VV.bloxd.getLifeformType(eV.zC)) {
+         if ((null === xH || void 0 === xH ? void 0 : xH.YAH) && HH.bloxd.getRiddenVehicleEId(xH.Xu) === BH.pR && null === HH.bloxd.getLifeformType(BH.pR)) {
```

#### 1664. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12032` → after: `L12380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12380) · [Before (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12032)

```diff
-           NV[1] = eV.renderRotation[1] + UV.b.computeShortestRotation(eV.renderRotation[1], NV[1]) * VV
+           bH[1] = BH.renderRotation[1] + SH.d.computeShortestRotation(BH.renderRotation[1], bH[1]) * HH
```

#### 1665. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12035-L12036` → after: `L12383-L12384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12383-L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12383-L12384) · [Before (L12035-L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12035-L12036)

```diff
-       const XV = tV ? null !== (xV = null === FV || void 0 === FV ? void 0 : FV.speed) && void 0 !== xV ? xV : 0 : null !== (JV = null === TV || void 0 === TV ? void 0 : TV.speed) && void 0 !== JV ? JV : 0,
-         MV = null !== (QV = null === TV || void 0 === TV ? void 0 : TV.pose) && void 0 !== QV ? QV : "standing",
+       const kH = PH ? null !== (LH = null === TH || void 0 === TH ? void 0 : TH.speed) && void 0 !== LH ? LH : 0 : null !== (AH = null === UH || void 0 === UH ? void 0 : UH.speed) && void 0 !== AH ? AH : 0,
+         mH = null !== (zH = null === UH || void 0 === UH ? void 0 : UH.pose) && void 0 !== zH ? zH : "standing",
```

#### 1666. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12041-L12042` → after: `L12389-L12390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12389-L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12389-L12390) · [Before (L12041-L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12041-L12042)

```diff
-         gV = !(tV && !qV) && !0 === (null === (ZV = VV.YL) || void 0 === ZV || null === (kV = ZV[VV.bD]) || void 0 === kV || null === (bV = kV[eV.zC]) || void 0 === bV ? void 0 : bV.lockHeadToBody),
-         DV = null !== (EV = VV.sF.getState(eV.zC, "animator")) && void 0 !== EV ? EV : null;
+         KH = !(PH && !vH) && !0 === (null === (XH = HH.mF) || void 0 === XH || null === (uH = XH[HH.lF]) || void 0 === uH || null === (QH = uH[BH.pR]) || void 0 === QH ? void 0 : QH.lockHeadToBody),
+         cH = null !== (WH = HH.pT.getState(BH.pR, "animator")) && void 0 !== WH ? WH : null;
```

#### 1667. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12051` → after: `L12399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12399) · [Before (L12051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12051)

```diff
-       const UV = (0, JV.d)().gZ.YC.getNodeNames(eV),
+       const SH = (0, AH.c)().mX.bR.getNodeNames(BH),
```

#### 1668. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12095` → after: `L12443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12443) · [Before (L12095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12095)

```diff
-       let NV = vV ? 0 : null !== QV && void 0 !== QV ? QV : 0,
+       let bH = GH ? 0 : null !== zH && void 0 !== zH ? zH : 0,
```

#### 1669. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12103` → after: `L12451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12451) · [Before (L12103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12103)

```diff
-           GV = Math.max(GV, null !== (WV = bV[JV].rotationsPerSecond) && void 0 !== WV ? WV : EV)
+           IH = Math.max(IH, null !== (fH = QH[AH].rotationsPerSecond) && void 0 !== fH ? fH : WH)
```

#### 1670. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12109-L12110` → after: `L12457-L12458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12457-L12458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12457-L12458) · [Before (L12109-L12110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12109-L12110)

```diff
-           xV = vV ? 0 : null !== QV && void 0 !== QV ? QV : VV.softTolerance,
-           yV = vV ? null : null !== wV && void 0 !== wV ? wV : VV.hardTolerance,
+           LH = GH ? 0 : null !== zH && void 0 !== zH ? zH : HH.softTolerance,
+           hH = GH ? null : null !== EH && void 0 !== EH ? EH : HH.hardTolerance,
```

#### 1671. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12114` → after: `L12462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12462) · [Before (L12114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12114)

```diff
-         const ZV = vV ? GV : null !== (RV = VV.rotationsPerSecond) && void 0 !== RV ? RV : EV,
+         const XH = GH ? IH : null !== (lH = HH.rotationsPerSecond) && void 0 !== lH ? lH : WH,
```

#### 1672. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12119-L12120` → after: `L12467-L12468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12467-L12468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12467-L12468) · [Before (L12119-L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12119-L12120)

```diff
-             xV = UV.b.computeShortestRotation(AV[JV], pV[JV]);
-           xV < -NV ? pV[JV] = AV[JV] - NV : xV > NV && (pV[JV] = AV[JV] + NV);
+             LH = SH.d.computeShortestRotation(OH[AH], tH[AH]);
+           LH < -bH ? tH[AH] = OH[AH] - bH : LH > bH && (tH[AH] = OH[AH] + bH);
```

#### 1673. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12123` → after: `L12471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12471) · [Before (L12123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12123)

```diff
-             const VV = UV.b.computeShortestRotation(AV[JV], nV[JV]),
+             const HH = SH.d.computeShortestRotation(OH[AH], CH[AH]),
```

#### 1674. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12127` → after: `L12475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12475) · [Before (L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12127)

```diff
-           YV || (nV[JV] = UV.b.applyRotation(nV[JV], pV[JV], rV)), pV[JV] === VV && nV[JV] === eV || (PV = !0)
+           rH || (CH[AH] = SH.d.applyRotation(CH[AH], tH[AH], YH)), tH[AH] === HH && CH[AH] === BH || (VH = !0)
```

#### 1675. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12132` → after: `L12480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12480) · [Before (L12132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12132)

```diff
-       const gV = (0, JV.d)().gZ.YC,
+       const KH = (0, AH.c)().mX.bR,
```

#### 1676. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12141` → after: `L12489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12489) · [Before (L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12141)

```diff
-         const YV = UV.b.computeShortestRotation(xV[1], AV[1]);
+         const rH = SH.d.computeShortestRotation(LH[1], OH[1]);
```

#### 1677. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12153` → after: `L12501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12501) · [Before (L12153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12153)

```diff
-   38805: (VV, eV, xV) => {
+   38507: (HH, BH, LH) => {
```

#### 1678. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12158-L12161` → after: `L12506-L12509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12506-L12509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12506-L12509) · [Before (L12158-L12161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12158-L12161)

```diff
-     var JV = xV(38835),
-       YV = xV(206),
-       UV = xV(7024),
-       yV = xV(380),
+     var AH = LH(38524),
+       rH = LH(176),
+       SH = LH(7007),
+       hH = LH(330),
```

#### 1679. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12163-L12169` → after: `L12511-L12517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12511-L12517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12511-L12517) · [Before (L12163-L12169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12163-L12169)

```diff
-       QV = xV(38814),
-       nV = xV(9820),
-       wV = xV(38791),
-       ZV = xV(38799),
-       vV = xV(38803);
-     var rV = xV(2014),
-       kV = xV(375);
+       zH = LH(38509),
+       CH = LH(9940),
+       EH = LH(38486),
+       XH = LH(38491),
+       GH = LH(38499);
+     var YH = LH(1962),
+       uH = LH(317);
```

#### 1680. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12174` → after: `L12522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12522) · [Before (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12174)

```diff
-     const tV = [0, 1, 8, 255, "length", 192, 182, "d", "a", "e", "undefined", void 0, "c", 53, 17, "b", 63, 6, "fromCodePoint", 7, 12, "push", 103, 2, "h", 160, 9, "g", 91, 5, "f", 8191, 88, 13, 14, 107, 3, 164, 177, 93, 173, "i", 188, 231, 4, 42, 22, null, 213, 243, "ME", 162, 1 … [truncated]
+     const PH = [0, 1, 8, 255, "length", "undefined", void 0, "d", 203, 2, 34, 63, 6, "fromCodePoint", 7, 12, "push", "b", "c", 191, 27, 182, 91, 5, 8191, 88, 13, 14, "e", 106, 52, 62, "a", !1, 209, 9, !0, 3, 4, 167, 171, "i", 168, "f", "EW", 249, 81, 87, 66, 155, null, 99, "g", " … [truncated]
```

#### 1681. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12177` → after: `L12525-L12544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12525-L12544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12525-L12544) · [Before (L12177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12177)

```diff
-       return VV[tV[4]] = tV[1], typeof aV !== tV[10] && aV ? (new aV).decode(new oV(VV[tV[0]])) : typeof cV !== tV[10] && cV ? cV.from(VV[tV[0]]).toString("utf-8") : LV(VV[tV[0]])
+       return HH[PH[4]] = PH[1], typeof xH[HH[PH[0]]] === PH[5] ? xH[HH[PH[0]]] = function(HH) {
+         var BH, LH, AH, rH, SH, hH, tH;
+         for (OH(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = PH[0], SH = PH[0], hH = -PH[1]), tH = PH[0]; tH < LH; tH++) {
+           var zH = ';HaSXVPNjUT=2"uG6Wrv$_})[>5w{4,8x?#~OokpQFy7dsIRCZcqYMghKA0+`9]@/eb%(|1m3*L&:fD<il.!BtznJE^'.indexOf(BH[tH]);
+           if (zH !== -PH[1])
+             if (hH < PH[0]) hH = zH;
+             else {
+               OH(hH += zH * PH[22], rH |= hH << SH, SH += (hH & PH[24]) > PH[25] ? PH[26] : PH[27]);
+               do {
+                 OH(AH.push(rH & PH[3]), rH >>= PH[2], SH -= PH[2])
+               } while (SH > PH[14]);
+               hH = -PH[1]
+             }
+         }
+         return hH > -PH[1] && AH.push((rH | hH << SH) & PH[3]), UH(AH)
+       }(vH[HH[PH[0]]]) : xH[HH[PH[0]]]
+ ... (4 more added lines; see GitHub link above)
```

#### 1682. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12185-L12186` → after: `L12552-L12553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12552-L12553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12552-L12553) · [Before (L12185-L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12185-L12186)

```diff
-     PV(jV = {}, qV = ["ro7U5.*w!D>v:32Bbnudq2_Yy#66RY[?IM/p00yB[MiD@U", 'IklUq*Tp5e%AO0&CkGoXP#xr6:2v#~5HW;nUv0K*|n"+S', 'cPYp#"b[D#fx6UNP;[qU%0Fa(gg*UAzBtWcWzW<XrJ}7]G$CG+/?YwsDA', "1656B00Qy#H)Y/sz9$OWAq.anxVk@F.[XJU{{hXS6JLn|2M|", "AWyN_h]:4NM[l6b[$IX5xH2a$[%p?Av>;/qU/", "#/t+ … [truncated]
-       PV(VV[tV[4]] = tV[0], VV[tV[8]] = [function() {
+     OH(xH = {}, vH = ["f#=4Cq{,5+VqaVv$]ej?Pc(2i@p{y98,?2F,L]Yi4_c|fZL>+CN,cZS>UT", 'Jj~3ml}j0uY_R1P[+5yxqp=lFW0feZbo3(xwC0D0ub>Wp01o"5a', 'VXJP_m;jCG2$*`vF;U`LKBs~&K%i*[3>|ytN[+"H', 'UI"N;Lq&duZ=D>iwjA){il#[n/E4V`Yw9+0q5:_NI_|x<1H8ZQ1YqIhNzv', "A(Fgsf:PdM5[A3/,x(R*Z&e4lA,WE`O[;A … [truncated]
+       var HH, BH, LH, AH = [function() {
```

#### 1683. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12194` → after: `L12561-L12562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12561-L12562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12561-L12562) · [Before (L12194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12194)

```diff
-       }], VV[tV[5]] = tV[11], VV[tV[6]] = []);
+       }];
+       OH(HH = void 0, BH = []);
```

#### 1684. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12196` → after: `L12564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12564) · [Before (L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12196)

```diff
-         PV(VV[tV[5]] = Object, VV[tV[6]][tV[21]]("".__proto__.constructor.name))
+         OH(HH = Object, BH[PH[16]]("".__proto__.constructor.name))
```

#### 1685. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12198-L12201` → after: `L12566-L12570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12566-L12570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12566-L12570) · [Before (L12198-L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12198-L12201)

```diff
-       VV: for (VV[tV[7]] = tV[0]; VV[tV[7]] < VV[tV[8]][tV[4]]; VV[tV[7]]++) try {
-         for (VV[tV[5]] = VV[tV[8]][VV[tV[7]]](), VV[tV[9]] = tV[0]; VV[tV[9]] < VV[tV[6]][tV[4]]; VV[tV[9]]++)
-           if (typeof VV[tV[5]][VV[tV[6]][VV[tV[9]]]] === tV[10]) continue VV;
-         return VV[tV[5]]
+       HH: for (LH = PH[0]; LH < AH[PH[4]]; LH++) try {
+         var rH;
+         for (HH = AH[LH](), rH = PH[0]; rH < BH[PH[4]]; rH++)
+           if (typeof HH[BH[rH]] === PH[5]) continue HH;
+         return HH
```

#### 1686. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12203-L12205` → after: `L12572-L12574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12572-L12574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12572-L12574) · [Before (L12203-L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12203-L12205)

```diff
-       return VV[tV[5]] || this
-     }() || {}, aV = CV.TextDecoder, oV = CV.Uint8Array, cV = CV.nZ, hV = CV.String || String, lV = CV.Array || Array, LV = function(...VV) {
-       return PV(VV[tV[4]] = tV[0], VV[tV[8]] = new lV(tV[72]), VV[-tV[22]] = hV[tV[18]] || hV.fromCharCode, VV[tV[12]] = []),
+       return HH || this
+     }() || {}, NH = gH.TextDecoder, RH = gH.Uint8Array, jH = gH.rX, nH = gH.String || String, FH = gH.Array || Array, DH = function(...HH) {
+       return OH(HH[PH[4]] = PH[0], HH[PH[17]] = new FH(PH[77]), HH[PH[18]] = nH[PH[13]] || nH.fromCharCode, HH[PH[7]] = []),
```

#### 1687. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12207-L12208` → after: `L12576-L12577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12576-L12577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12576-L12577) · [Before (L12207-L12208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12207-L12208)

```diff
-           for (PV(eV[tV[4]] = tV[1], eV[tV[8]] = tV[11], eV[tV[15]] = tV[11], eV[tV[14]] = eV[tV[0]][tV[4]], VV[tV[12]][tV[4]] = tV[0]), eV[tV[13]] = tV[0]; eV[tV[13]] < eV[tV[14]];) PV(eV[tV[15]] = eV[tV[0]][eV[tV[13]]++], eV[tV[15]] <= tV[71] ? eV[tV[8]] = eV[tV[15]] : eV[tV[15 … [truncated]
-           return VV[tV[12]].join("")
+           for (OH(BH[PH[4]] = PH[1], BH[PH[10]] = PH[6], BH[PH[9]] = PH[6], BH[PH[8]] = BH[PH[0]][PH[4]], HH[PH[7]][PH[4]] = PH[0]), BH[PH[7]] = PH[0]; BH[PH[7]] < BH[PH[8]];) OH(BH[PH[9]] = BH[PH[0]][BH[PH[7]]++], BH[PH[9]] <= PH[76] ? BH[PH[10]] = BH[PH[9]] : BH[PH[9]] <= 223 ? … [truncated]
+           return HH[PH[7]].join("")
```

#### 1688. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12212-L12217` → after: `L12581-L12584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12581-L12584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12581-L12584) · [Before (L12212-L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12212-L12217)

```diff
-         return VV[tV[4]] = tV[1], typeof jV[VV[tV[0]]] === tV[10] ? jV[VV[tV[0]]] = function(VV) {
-           var eV, xV, JV, YV, UV, yV, pV;
-           for (PV(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = tV[0], UV = tV[0], yV = -tV[1]), pV = tV[0]; pV < xV; pV++) {
-             var QV = 'ND,h9fIWl~S2b;x%>nXw48dT3A*FiM_R7g&aZJYLjsrtKcmB(])pH`[:qC@G.#oOV"EQyPekv{u?}+10<5|!$6/z^=U'.indexOf(eV[pV]);
-             if (QV !== -tV[1])
-               if (yV < tV[0]) yV = QV;
+         return HH[PH[4]] = PH[1], typeof xH[HH[PH[0]]] === PH[5] ? xH[HH[PH[0]]] = function(...HH) {
+           for (OH(HH[PH[4]] = PH[1], HH[PH[19]] = '`u/839=vy[w7!@:|z01#ABW"eC?E;DjKo&%i5lG<r+MYI*~>Vd_4{)f2,PL}NZx.pqbmT$QXtR6(JhgHSFUcOn]^ksa', HH[PH[17]] = "" + (HH[PH[0]] || ""), HH[PH[18]] = HH[PH[17]].length, HH[PH[7]] = [], HH[PH[23]] = PH[0], HH[PH[12]] = PH[0], HH[-PH[21] … [truncated]
+             if (HH[-PH[20]] = HH[PH[19]].indexOf(HH[PH[17]][HH[PH[2]]]), HH[-PH[20]] !== -PH[1])
+               if (HH[-PH[21]] < PH[0]) HH[-PH[21]] = HH[-PH[20]];
```

#### 1689. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12219` → after: `L12586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12586) · [Before (L12219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12219)

```diff
-                 PV(yV += QV * tV[28], YV |= yV << UV, UV += (yV & tV[31]) > tV[32] ? tV[33] : tV[34]);
+                 OH(HH[-PH[21]] += HH[-PH[20]] * PH[22], HH[PH[23]] |= HH[-PH[21]] << HH[PH[12]], HH[PH[12]] += (HH[-PH[21]] & PH[24]) > PH[25] ? PH[26] : PH[27]);
```

#### 1690. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12221-L12226` → after: `L12588-L12591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12588-L12591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12588-L12591) · [Before (L12221-L12226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12221-L12226)

```diff
-                   PV(JV.push(YV & tV[3]), YV >>= tV[2], UV -= tV[2])
-                 } while (UV > tV[19]);
-                 yV = -tV[1]
-               }
-           }
-           return yV > -tV[1] && JV.push((YV | yV << UV) & tV[3]), FV(JV)
+                   OH(HH[PH[7]].push(HH[PH[23]] & PH[3]), HH[PH[23]] >>= PH[2], HH[PH[12]] -= PH[2])
+                 } while (HH[PH[12]] > PH[14]);
+                 HH[-PH[21]] = -PH[1]
+               } return HH[-PH[21]] > -PH[1] && HH[PH[7]].push((HH[PH[23]] | HH[-PH[21]] << HH[PH[12]]) & PH[3]), UH(HH[PH[7]])
```

#### 1691. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12229-L12249` → after: `L12594-L12618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12594-L12618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12594-L12618) · [Before (L12229-L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12229-L12249)

```diff
-       VV[tV[4]] = tV[26];
-       const xV = VV[tV[0]][eV(95) + eV(96) + eV(97)];
-       if (xV === tV[47]) return;
-       if ("heading" === xV[eV(98)]) {
-         function wV(VV) {
-           var eV, xV, JV, YV, UV, yV, pV;
-           for (PV(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = tV[0], UV = tV[0], yV = -tV[1]), pV = tV[0]; pV < xV; pV++) {
-             var QV = 'sPQlzuhn"{4![k/%8eavY,icZ$T)<B_y@SVoID]pxC&}X~d`j72b1+qO=L?E;GH>fRU3#M5rwAm0|F*K6(9^g.JWtN:'.indexOf(eV[pV]);
-             if (QV !== -tV[1])
-               if (yV < tV[0]) yV = QV;
-               else {
-                 PV(yV += QV * tV[28], YV |= yV << UV, UV += (yV & tV[31]) > tV[32] ? tV[33] : tV[34]);
-                 do {
-                   PV(JV.push(YV & tV[3]), YV >>= tV[2], UV -= tV[2])
-                 } while (UV > tV[19]);
-                 yV = -tV[1]
- ... (5 more removed lines; see GitHub link above)
+       HH[PH[4]] = PH[35], TH(PH[72]) in VH && function(...HH) {
+         OH(HH[PH[4]] = PH[0], HH[-PH[34]] = function(...BH) {
+           return OH(BH[PH[4]] = PH[1], BH[PH[1]] = []), (BH[PH[0]] === PH[1] || BH[PH[0]] >= PH[38]) && HH[PH[1]](BH[PH[1]], [], BH[PH[0]], PH[0]), BH[PH[1]]
+         }, HH[PH[1]] = function(BH, LH, AH, rH) {
+           var SH;
+           for (SH = rH; SH < AH; SH++) {
+             var hH;
+             if (LH.length !== SH) return;
+             for (hH = PH[0]; hH < AH; hH++) HH[PH[9]](LH, [SH, hH]) && (OH(LH.push([SH, hH]), HH[PH[1]](BH, LH, AH, SH + PH[1])), LH.length === AH && BH.push(HH[PH[28]](LH)), LH.pop())
+           }
+         }, HH[PH[28]] = function(...HH) {
+           for (OH(HH[PH[4]] = PH[1], HH[PH[1]] = [], HH[PH[17]] = HH[PH[0]].length), HH[PH[29]] = PH[0]; HH[PH[29]] < HH[PH[17]]; HH[PH[29]]++)
+             for (HH[PH[1]][HH[PH[29]]] = "", HH[PH[30]] = PH[0]; HH[PH[30]] < HH[PH[17]]; HH[PH[30]]++) HH[PH[1]][HH[PH[29]]] += HH[PH[0]][HH[PH[29]]][PH[1]] === HH[PH[30]] ? "Q" : ".";
+           return HH[PH[1]]
+         }, HH[PH[9]] = function(...HH) {
+           for (OH(HH[PH[4]] = PH[9], HH[PH[32]] = HH[PH[0]].length), HH[PH[31]] = PH[0]; HH[PH[31]] < HH[PH[32]]; HH[PH[31]]++) {
+ ... (9 more added lines; see GitHub link above)
```

#### 1692. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12251` → after: `L12620-L12624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12620-L12624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12620-L12624) · [Before (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12251)

```diff
-           return VV[tV[4]] = tV[1], typeof jV[VV[tV[0]]] === tV[10] ? jV[VV[tV[0]]] = wV(qV[VV[tV[0]]]) : jV[VV[tV[0]]]
+           OH(HH[PH[4]] = PH[0], HH[-PH[35]] = function(BH, LH, AH) {
+             return AH.length !== BH.length + LH.length ? PH[33] : HH[PH[17]](BH, LH, AH, PH[0], PH[0], PH[0], {})
+           }, HH[PH[17]] = function(...BH) {
+             return OH(BH[PH[4]] = PH[14], BH[PH[32]] = PH[33]), BH[PH[23]] >= BH[PH[9]].length ? PH[36] : BH[PH[12]]["" + BH[PH[37]] + BH[PH[38]] + BH[PH[23]]] !== PH[6] ? BH[PH[12]]["" + BH[PH[37]] + BH[PH[38]] + BH[PH[23]]] : (BH[PH[9]][BH[PH[23]]] === BH[PH[0]][BH[PH[37]]] &&  … [truncated]
+           }, console.log(HH[-PH[35]]))
```

#### 1693. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12253-L12261` → after: `L12626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12626) · [Before (L12253-L12261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12253-L12261)

```diff
- 
-         function BV() {
-           console.log((function(...VV) {
-             for (PV(VV[tV[4]] = tV[1], VV[tV[1]] = VV[tV[0]].length, VV[tV[15]] = [], VV[tV[12]] = tV[0]), VV[tV[44]] = tV[0]; VV[tV[44]] < VV[tV[1]]; VV[tV[44]]++) VV[tV[15]].push(VV[tV[44]] !== tV[0] && VV[tV[0]][VV[tV[44]]] > VV[tV[0]][VV[tV[44]] - tV[1]] ? VV[tV[15]][VV[tV[44 … [truncated]
-             for (VV[tV[29]] = VV[tV[1]] - tV[1]; VV[tV[29]] >= tV[0]; VV[tV[29]]--) VV[tV[29]] !== VV[tV[1]] - tV[1] && VV[tV[0]][VV[tV[29]]] > VV[tV[0]][VV[tV[29]] + tV[1]] && (VV[tV[15]][VV[tV[29]]] = Math.max(VV[tV[15]][VV[tV[29]]], VV[tV[15]][VV[tV[29]] + tV[1]] + tV[1])), VV … [truncated]
-             return VV[tV[12]]
-           }))
-         }
-         return eV(99) in TV && BV(), void PV((0, vV[tV[15]])(VV[tV[1]], VV[tV[23]], VV[tV[36]], VV[tV[44]], VV[tV[29]], VV[tV[17]], VV[tV[0]]), function(VV, eV, xV, JV) {
+         return BH(80) in VH && EH(), void OH((PH[0], GH[PH[7]])(HH[PH[1]], HH[PH[9]], HH[PH[37]], HH[PH[38]], HH[PH[23]], HH[PH[12]], HH[PH[0]]), function(HH, BH, LH, AH) {
```

#### 1694. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12263` → after: `L12628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12628) · [Before (L12263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12263)

```diff
-           if (xV.ME[1] < -VV.maxFallSpeed) {
+           if (LH.EW[1] < -HH.maxFallSpeed) {
```

#### 1695. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12265` → after: `L12630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12630) · [Before (L12265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12265)

```diff
-               UV = (rV.b.lerpWeight(YV / VV.slowDownSeconds) * (-VV.maxFallSpeed - xV.ME[1]) - (VV.compensateGravity ? eV.physics.gravity[1] * xV.gravityMultiplier * YV : 0)) * xV.eZ / YV;
+               SH = (YH.b.lerpWeight(rH / HH.slowDownSeconds) * (-HH.maxFallSpeed - LH.EW[1]) - (HH.compensateGravity ? BH.physics.gravity[1] * LH.gravityMultiplier * rH : 0)) * LH.rE / rH;
```

#### 1696. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12268` → after: `L12633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12633) · [Before (L12268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12268)

```diff
-         }(VV[tV[0]][ZV(100) + ZV(101) + ZV(102) + tV[55]], VV[tV[1]], VV[tV[29]], VV[tV[19]]))
+         }(HH[PH[0]][BH(PH[46]) + BH(82) + BH(83) + PH[55]], HH[PH[1]], HH[PH[23]], HH[PH[14]]))
```

#### 1697. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12272-L12274` → after: `L12637-L12639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12637-L12639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12637-L12639) · [Before (L12272-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12272-L12274)

```diff
-           for (PV(VV[tV[4]] = tV[1], VV[tV[8]] = 'U|"WIVR9h,rTbB5twgp[@7d%1^6&LxHOvuiz3*:m+y>!Ae8$ZoG?l}Y_s~<qN4/S#)]jQD;.X=(2{J`k0nEKCcfPFaM', VV[tV[23]] = "" + (VV[tV[0]] || ""), VV[tV[48]] = VV[tV[23]].length, VV[tV[44]] = [], VV[tV[9]] = tV[0], VV[tV[17]] = tV[0], VV[tV[27]]  … [truncated]
-             if (VV[tV[41]] = VV[tV[8]].indexOf(VV[tV[23]][VV[tV[24]]]), VV[tV[41]] !== -tV[1])
-               if (VV[tV[27]] < tV[0]) VV[tV[27]] = VV[tV[41]];
+           for (OH(HH[PH[4]] = PH[1], HH[PH[40]] = '0x"]/[7w*>8AHh3EePTQo&r.4^m9pGD5yIUcRgt?Bqkf@1!:n|vOaW$N,=Zz6YbJj+s%~2C`l}i)d<FK;(X{u_MLVS#', HH[PH[9]] = "" + (HH[PH[0]] || ""), HH[PH[37]] = HH[PH[9]].length, HH[PH[38]] = [], HH[PH[28]] = PH[0], HH[PH[43]] = PH[0], HH[PH[42]]  … [truncated]
+             if (HH[PH[41]] = HH[PH[40]].indexOf(HH[PH[9]][HH[PH[39]]]), HH[PH[41]] !== -PH[1])
+               if (HH[PH[42]] < PH[0]) HH[PH[42]] = HH[PH[41]];
```

#### 1698. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12276` → after: `L12641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12641) · [Before (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12276)

```diff
-                 PV(VV[tV[27]] += VV[tV[41]] * tV[28], VV[tV[9]] |= VV[tV[27]] << VV[tV[17]], VV[tV[17]] += (VV[tV[27]] & tV[31]) > tV[32] ? tV[33] : tV[34]);
+                 OH(HH[PH[42]] += HH[PH[41]] * PH[22], HH[PH[28]] |= HH[PH[42]] << HH[PH[43]], HH[PH[43]] += (HH[PH[42]] & PH[24]) > PH[25] ? PH[26] : PH[27]);
```

#### 1699. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12278-L12285` → after: `L12643-L12646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12643-L12646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12643-L12646) · [Before (L12278-L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12278-L12285)

```diff
-                   PV(VV[tV[44]].push(VV[tV[9]] & tV[3]), VV[tV[9]] >>= tV[2], VV[tV[17]] -= tV[2])
-                 } while (VV[tV[17]] > tV[19]);
-                 VV[tV[27]] = -tV[1]
-               } return VV[tV[27]] > -tV[1] && VV[tV[44]].push((VV[tV[9]] | VV[tV[27]] << VV[tV[17]]) & tV[3]), FV(VV[tV[44]])
-         }
- 
-         function NV(...VV) {
-           return VV[tV[4]] = tV[1], typeof jV[VV[tV[0]]] === tV[10] ? jV[VV[tV[0]]] = AV(qV[VV[tV[0]]]) : jV[VV[tV[0]]]
+                   OH(HH[PH[38]].push(HH[PH[28]] & PH[3]), HH[PH[28]] >>= PH[2], HH[PH[43]] -= PH[2])
+                 } while (HH[PH[43]] > PH[14]);
+                 HH[PH[42]] = -PH[1]
+               } return HH[PH[42]] > -PH[1] && HH[PH[38]].push((HH[PH[28]] | HH[PH[42]] << HH[PH[43]]) & PH[3]), UH(HH[PH[38]])
```

#### 1700. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12289-L12301` → after: `L12650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12650) · [Before (L12289-L12301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12289-L12301)

```diff
-           PV(VV[tV[4]] = tV[0], VV[tV[8]] = function(...VV) {
-             for (PV(VV[tV[4]] = tV[1], VV[tV[8]] = VV[tV[0]].length, VV[tV[23]] = [], VV[tV[36]] = tV[0], VV[-tV[49]] = tV[0], VV[tV[0]].sort(((VV, eV) => VV - eV))), VV[tV[29]] = tV[0]; VV[tV[29]] < VV[tV[8]]; VV[tV[29]]++)
-               if (!(VV[tV[29]] > tV[0] && VV[tV[0]][VV[tV[29]]] === VV[tV[0]][VV[tV[29]] - tV[1]]))
-                 for (PV(VV[tV[36]] = VV[tV[29]] + tV[1], VV[-tV[49]] = VV[tV[8]] - tV[1]); VV[tV[36]] < VV[-tV[49]];)
-                   if (VV[tV[0]][VV[tV[29]]] + VV[tV[0]][VV[tV[36]]] + VV[tV[0]][VV[-tV[49]]] < tV[0]) VV[tV[36]]++;
-                   else if (VV[tV[0]][VV[tV[29]]] + VV[tV[0]][VV[tV[36]]] + VV[tV[0]][VV[-tV[49]]] > tV[0]) VV[-tV[49]]--;
-             else {
-               for (VV[tV[23]].push([VV[tV[0]][VV[tV[29]]], VV[tV[0]][VV[tV[36]]], VV[tV[0]][VV[-tV[49]]]]); VV[tV[36]] < VV[-tV[49]] && VV[tV[0]][VV[tV[36]]] === VV[tV[0]][VV[tV[36]] + tV[1]];) VV[tV[36]]++;
-               for (; VV[tV[36]] < VV[-tV[49]] && VV[tV[0]][VV[-tV[49]]] === VV[tV[0]][VV[-tV[49]] - tV[1]];) VV[-tV[49]]--;
-               PV(VV[tV[36]]++, VV[-tV[49]]--)
-             }
-             return VV[tV[23]]
-           }, console.log(VV[tV[8]]))
+           return HH[PH[4]] = PH[1], typeof xH[HH[PH[0]]] === PH[5] ? xH[HH[PH[0]]] = XH(vH[HH[PH[0]]]) : xH[HH[PH[0]]]
```

#### 1701. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12303` → after: `L12652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12652) · [Before (L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12303)

```diff
-         NV(tV[22]) in TV && XV(), PV(VV[tV[36]][tV[62]] = pV()[NV(104)](VV[tV[29]][tV[50]]), pV()[NV(105)](VV[tV[36]][tV[56]], VV[tV[29]][tV[50]]))
+         OH(HH[PH[37]][PH[63]] = tH()[MH(PH[90])](HH[PH[23]][PH[44]]), tH()[MH(85)](HH[PH[37]][PH[56]], HH[PH[23]][PH[44]]))
```

#### 1702. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12306-L12308` → after: `L12655-L12657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12655-L12657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12655-L12657) · [Before (L12306-L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12306-L12308)

```diff
-           for (PV(VV[tV[4]] = tV[1], VV[tV[8]] = 'vOnUlKfiSDTu^b>kA<(?rLz5E3NRh/8px+B;4.=Me|#wt{2Q[Jg}YFyX_&d!1"G@Pc)HCo6:9am$*ZV]j%WI70q`s~,', VV[-tV[51]] = "" + (VV[tV[0]] || ""), VV[tV[12]] = VV[-tV[51]].length, VV[tV[7]] = [], VV[tV[53]] = tV[0], VV[-tV[54]] = tV[0], VV[tV[52 … [truncated]
-             if (VV[tV[41]] = VV[tV[8]].indexOf(VV[-tV[51]][VV[tV[24]]]), VV[tV[41]] !== -tV[1])
-               if (VV[tV[52]] < tV[0]) VV[tV[52]] = VV[tV[41]];
+           for (OH(HH[PH[4]] = PH[1], HH[PH[32]] = 'LuHvn,?qbNjR<#4WSkc6eQx7mBAJK1Z!.%}$w[`hD3f|]PV"5>taOyE28zs)MC/rU9{g*pG(Y&iF+^0d:T_XIo@=~;l', HH[PH[9]] = "" + (HH[PH[0]] || ""), HH[PH[18]] = HH[PH[9]].length, HH[PH[38]] = [], HH[PH[23]] = PH[0], HH[PH[43]] = PH[0], HH[PH[14]]  … [truncated]
+             if (HH[PH[35]] = HH[PH[32]].indexOf(HH[PH[9]][HH[PH[45]]]), HH[PH[35]] !== -PH[1])
+               if (HH[PH[14]] < PH[0]) HH[PH[14]] = HH[PH[35]];
```

#### 1703. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12310` → after: `L12659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12659) · [Before (L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12310)

```diff
-                 PV(VV[tV[52]] += VV[tV[41]] * tV[28], VV[tV[53]] |= VV[tV[52]] << VV[-tV[54]], VV[-tV[54]] += (VV[tV[52]] & tV[31]) > tV[32] ? tV[33] : tV[34]);
+                 OH(HH[PH[14]] += HH[PH[35]] * PH[22], HH[PH[23]] |= HH[PH[14]] << HH[PH[43]], HH[PH[43]] += (HH[PH[14]] & PH[24]) > PH[25] ? PH[26] : PH[27]);
```

#### 1704. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12312-L12315` → after: `L12661-L12668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12661-L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12661-L12668) · [Before (L12312-L12315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12312-L12315)

```diff
-                   PV(VV[tV[7]].push(VV[tV[53]] & tV[3]), VV[tV[53]] >>= tV[2], VV[-tV[54]] -= tV[2])
-                 } while (VV[-tV[54]] > tV[19]);
-                 VV[tV[52]] = -tV[1]
-               } return VV[tV[52]] > -tV[1] && VV[tV[7]].push((VV[tV[53]] | VV[tV[52]] << VV[-tV[54]]) & tV[3]), FV(VV[tV[7]])
+                   OH(HH[PH[38]].push(HH[PH[23]] & PH[3]), HH[PH[23]] >>= PH[2], HH[PH[43]] -= PH[2])
+                 } while (HH[PH[43]] > PH[14]);
+                 HH[PH[14]] = -PH[1]
+               } return HH[PH[14]] > -PH[1] && HH[PH[38]].push((HH[PH[23]] | HH[PH[14]] << HH[PH[43]]) & PH[3]), UH(HH[PH[38]])
+         }
+ 
+         function kH(HH) {
+           return typeof xH[HH] === PH[5] ? xH[HH] = bH(vH[HH]) : xH[HH]
```

#### 1705. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12319` → after: `L12672-L12679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12672-L12679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12672-L12679) · [Before (L12319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12319)

```diff
-           return VV[tV[4]] = tV[1], typeof jV[VV[tV[0]]] === tV[10] ? jV[VV[tV[0]]] = MV(qV[VV[tV[0]]]) : jV[VV[tV[0]]]
+           OH(HH[PH[4]] = PH[0], HH[-PH[46]] = function(...BH) {
+             return OH(BH[PH[4]] = PH[9], BH[PH[47]] = [], BH[-PH[48]] = BH[PH[0]].length, BH[PH[0]].sort(((HH, BH) => HH - BH)), HH[PH[49]](BH[PH[47]], [], PH[0], BH[-PH[48]], BH[PH[0]], BH[PH[1]])), BH[PH[47]]
+           }, HH[PH[49]] = function(...BH) {
+             if (OH(BH[PH[4]] = PH[12], BH[PH[32]] = PH[50]), !(BH[PH[23]] < PH[0])) {
+               if (BH[PH[23]] === PH[0]) return BH[PH[0]].push(BH[PH[1]]);
+               for (BH[-PH[51]] = BH[PH[9]]; BH[-PH[51]] < BH[PH[37]] && !(BH[PH[38]][BH[-PH[51]]] > BH[PH[23]]); BH[-PH[51]]++) BH[-PH[51]] > BH[PH[9]] && BH[PH[38]][BH[-PH[51]]] === BH[PH[38]][BH[-PH[51]] - PH[1]] || OH(BH[PH[32]] = Array.from(BH[PH[1]]), BH[PH[32]].push(BH[PH[3 … [truncated]
+             }
+           }, console.log(HH[-PH[46]]))
```

#### 1706. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12321-L12327` → after: `L12681-L12686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12681-L12686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12681-L12686) · [Before (L12321-L12327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12321-L12327)

```diff
-         if (!(VV[tV[29]][eV(tV[65]) + tV[27]][tV[0]] !== tV[0] || VV[tV[29]][zV(tV[35]) + tV[27]][tV[1]] !== tV[0] || VV[tV[29]][zV(tV[35]) + tV[27]][tV[23]] !== tV[0])) {
-           function GV(VV) {
-             var eV, xV, JV, YV, UV, yV, pV;
-             for (PV(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = tV[0], UV = tV[0], yV = -tV[1]), pV = tV[0]; pV < xV; pV++) {
-               var QV = '$6vz?~>%#*9/D0WC}TB{PuX+ciw&Np1`b!^jMx,ZlI[5=fdayRr]"QS2At)EhULgFJeOnsV@3_(748Yok:<G.K;|Hqm'.indexOf(eV[pV]);
-               if (QV !== -tV[1])
-                 if (yV < tV[0]) yV = QV;
+         BH(86) + "s" in VH && mH();
+         if (!(HH[PH[23]][kH(PH[47]) + PH[52]][PH[0]] !== PH[0] || HH[PH[23]][kH(PH[47]) + PH[52]][PH[1]] !== PH[0] || HH[PH[23]][kH(PH[47]) + PH[52]][PH[9]] !== PH[0])) {
+           function oH(...HH) {
+             for (OH(HH[PH[4]] = PH[1], HH[PH[1]] = 'yBLKMisalTAbXhJGv$OxICZu9+tdg6QqeH_P{`m,3#!DjVp&Wf.z[|5c;%Y2F~1r8(4o0/):E^w@nU"=}>]kN*7?S<R', HH[PH[9]] = "" + (HH[PH[0]] || ""), HH[PH[37]] = HH[PH[9]].length, HH[PH[7]] = [], HH[PH[28]] = PH[0], HH[PH[12]] = PH[0], HH[PH[8]] = … [truncated]
+               if (HH[PH[41]] = HH[PH[1]].indexOf(HH[PH[9]][HH[PH[2]]]), HH[PH[41]] !== -PH[1])
+                 if (HH[PH[8]] < PH[0]) HH[PH[8]] = HH[PH[41]];
```

#### 1707. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12329` → after: `L12688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12688) · [Before (L12329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12329)

```diff
-                   PV(yV += QV * tV[28], YV |= yV << UV, UV += (yV & tV[31]) > tV[32] ? tV[33] : tV[34]);
+                   OH(HH[PH[8]] += HH[PH[41]] * PH[22], HH[PH[28]] |= HH[PH[8]] << HH[PH[12]], HH[PH[12]] += (HH[PH[8]] & PH[24]) > PH[25] ? PH[26] : PH[27]);
```

#### 1708. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12331-L12336` → after: `L12690-L12693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12690-L12693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12690-L12693) · [Before (L12331-L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12331-L12336)

```diff
-                     PV(JV.push(YV & tV[3]), YV >>= tV[2], UV -= tV[2])
-                   } while (UV > tV[19]);
-                   yV = -tV[1]
-                 }
-             }
-             return yV > -tV[1] && JV.push((YV | yV << UV) & tV[3]), FV(JV)
+                     OH(HH[PH[7]].push(HH[PH[28]] & PH[3]), HH[PH[28]] >>= PH[2], HH[PH[12]] -= PH[2])
+                   } while (HH[PH[12]] > PH[14]);
+                   HH[PH[8]] = -PH[1]
+                 } return HH[PH[8]] > -PH[1] && HH[PH[7]].push((HH[PH[28]] | HH[PH[8]] << HH[PH[12]]) & PH[3]), UH(HH[PH[7]])
```

#### 1709. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12340` → after: `L12697-L12728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12697-L12728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12697-L12728) · [Before (L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12340)

```diff
-             return VV[tV[4]] = tV[1], typeof jV[VV[tV[0]]] === tV[10] ? jV[VV[tV[0]]] = GV(qV[VV[tV[0]]]) : jV[VV[tV[0]]]
+             return HH[PH[4]] = PH[1], typeof xH[HH[PH[0]]] === PH[5] ? xH[HH[PH[0]]] = oH(vH[HH[PH[0]]]) : xH[HH[PH[0]]]
+           }
+ 
+           function fH() {
+             function HH(HH) {
+               return typeof xH[HH] === PH[5] ? xH[HH] = function(...HH) {
+                 for (OH(HH[PH[4]] = PH[1], HH[PH[1]] = '3EDrdaH(.m_FZON^):&7V[tQ"<nX]WiIjqof5~1!u=@sAwl>pBz*g06bTxk+P2K;Lh84e,#Sy?v{/GU}CJ9$RMY%|c`', HH[PH[17]] = "" + (HH[PH[0]] || ""), HH[PH[18]] = HH[PH[17]].length, HH[-PH[39]] = [], HH[-PH[54]] = PH[0], HH[PH[12]] = PH[0], HH … [truncated]
+                   if (HH[PH[41]] = HH[PH[1]].indexOf(HH[PH[17]][HH[PH[53]]]), HH[PH[41]] !== -PH[1])
+                     if (HH[PH[52]] < PH[0]) HH[PH[52]] = HH[PH[41]];
+                     else {
+                       OH(HH[PH[52]] += HH[PH[41]] * PH[22], HH[-PH[54]] |= HH[PH[52]] << HH[PH[12]], HH[PH[12]] += (HH[PH[52]] & PH[24]) > PH[25] ? PH[26] : PH[27]);
+                       do {
+                         OH(HH[-PH[39]].push(HH[-PH[54]] & PH[3]), HH[-PH[54]] >>= PH[2], HH[PH[12]] -= PH[2])
+                       } while (HH[PH[12]] > PH[14]);
+                       HH[PH[52]] = -PH[1]
+                     } return HH[PH[52]] > -PH[1] && HH[-PH[39]].push((HH[-PH[54]] | HH[PH[52]] << HH[PH[12]]) & PH[3]), UH(HH[-PH[39]])
+ ... (16 more added lines; see GitHub link above)
```

#### 1710. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12342-L12343` → after: `L12730-L12732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12730-L12732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12730-L12732) · [Before (L12342-L12343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12342-L12343)

```diff
-           const RV = pV()[WV(108) + tV[55]](VV[tV[29]][tV[50]], VV[tV[36]][tV[56]]);
-           if (RV > tV[44] * xV[WV(tV[57]) + WV(tV[58]) + tV[9]] * xV[WV(tV[57]) + WV(tV[58]) + tV[9]]) {
+           kH(PH[25]) in VH && fH();
+           const lH = tH()[IH(PH[22]) + PH[55]](HH[PH[23]][PH[44]], HH[PH[37]][PH[56]]);
+           if (lH > PH[38] * LH[IH(PH[57]) + IH(PH[58]) + PH[28]] * LH[IH(PH[57]) + IH(PH[58]) + PH[28]]) {
```

#### 1711. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12345-L12347` → after: `L12734-L12736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12734-L12736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12734-L12736) · [Before (L12345-L12347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12345-L12347)

```diff
-               for (PV(VV[tV[4]] = tV[1], VV[tV[1]] = 'H,l98vc#}^CkjZOnW0u[bJpD|s$/2z4KaQ=dxwUPefi*7t;FXNYS]E(R.TAg<6r"@LoB5qIMm+G{~h>)y:!3%_?1`&V', VV[tV[23]] = "" + (VV[tV[0]] || ""), VV[-tV[60]] = VV[tV[23]].length, VV[tV[7]] = [], VV[tV[29]] = tV[0], VV[tV[30]] = tV[0], VV[tV[ … [truncated]
-                 if (VV[-tV[61]] = VV[tV[1]].indexOf(VV[tV[23]][VV[tV[59]]]), VV[-tV[61]] !== -tV[1])
-                   if (VV[tV[27]] < tV[0]) VV[tV[27]] = VV[-tV[61]];
+               for (OH(HH[PH[4]] = PH[1], HH[PH[1]] = ')8DBqXFIJ_Wh:|1by=?SKrzamuvOAfilw%(^k#9dY4Z!3,P*tC/@oeN"}p>0&$LgE7n6+x25H~<.QGcRT][{V`UMj;s', HH[PH[9]] = "" + (HH[PH[0]] || ""), HH[-PH[60]] = HH[PH[9]].length, HH[PH[7]] = [], HH[PH[23]] = PH[0], HH[PH[43]] = PH[0], HH[PH[62 … [truncated]
+                 if (HH[-PH[61]] = HH[PH[1]].indexOf(HH[PH[9]][HH[-PH[59]]]), HH[-PH[61]] !== -PH[1])
+                   if (HH[PH[62]] < PH[0]) HH[PH[62]] = HH[-PH[61]];
```

#### 1712. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12349` → after: `L12738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12738) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12349)

```diff
-                     PV(VV[tV[27]] += VV[-tV[61]] * tV[28], VV[tV[29]] |= VV[tV[27]] << VV[tV[30]], VV[tV[30]] += (VV[tV[27]] & tV[31]) > tV[32] ? tV[33] : tV[34]);
+                     OH(HH[PH[62]] += HH[-PH[61]] * PH[22], HH[PH[23]] |= HH[PH[62]] << HH[PH[43]], HH[PH[43]] += (HH[PH[62]] & PH[24]) > PH[25] ? PH[26] : PH[27]);
```

#### 1713. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12351-L12358` → after: `L12740-L12743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12740-L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12740-L12743) · [Before (L12351-L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12351-L12358)

```diff
-                       PV(VV[tV[7]].push(VV[tV[29]] & tV[3]), VV[tV[29]] >>= tV[2], VV[tV[30]] -= tV[2])
-                     } while (VV[tV[30]] > tV[19]);
-                     VV[tV[27]] = -tV[1]
-                   } return VV[tV[27]] > -tV[1] && VV[tV[7]].push((VV[tV[29]] | VV[tV[27]] << VV[tV[30]]) & tV[3]), FV(VV[tV[7]])
-             }
- 
-             function DV(VV) {
-               return typeof jV[VV] === tV[10] ? jV[VV] = gV(qV[VV]) : jV[VV]
+                       OH(HH[PH[7]].push(HH[PH[23]] & PH[3]), HH[PH[23]] >>= PH[2], HH[PH[43]] -= PH[2])
+                     } while (HH[PH[43]] > PH[14]);
+                     HH[PH[62]] = -PH[1]
+                   } return HH[PH[62]] > -PH[1] && HH[PH[7]].push((HH[PH[23]] | HH[PH[62]] << HH[PH[43]]) & PH[3]), UH(HH[PH[7]])
```

#### 1714. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12362` → after: `L12747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12747) · [Before (L12362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12362)

```diff
-               VV[tV[4]] = tV[0]
+               return HH[PH[4]] = PH[1], typeof xH[HH[PH[0]]] === PH[5] ? xH[HH[PH[0]]] = KH(vH[HH[PH[0]]]) : xH[HH[PH[0]]]
```

#### 1715. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12364` → after: `L12749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12749) · [Before (L12364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12364)

```diff
-             WV(111) in TV && iV(), PV(VV[tV[36]][WV(112)] = tV[0], VV[tV[36]][tV[62]] = Math[DV(113)](RV))
+             cH(94), OH(HH[PH[37]][cH(PH[78])] = PH[0], HH[PH[37]][PH[63]] = Math[cH(96)](lH))
```

#### 1716. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12368` → after: `L12753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12753) · [Before (L12368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12368)

```diff
-       if (VV[tV[8]] = tV[1], VV[tV[36]][tV[62]] > tV[0]) {
+       if (HH[PH[32]] = PH[1], HH[PH[37]][PH[63]] > PH[0]) {
```

#### 1717. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12370-L12372` → after: `L12755-L12757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12755-L12757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12755-L12757) · [Before (L12370-L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12370-L12372)

```diff
-           for (PV(VV[tV[4]] = tV[1], VV[tV[8]] = '=qHMrmVWK7lfxw"zPov&u5n@Ry#(^AD%gIeiLO/:_92]}cBQ.T;Sk46tbU{!XN?`*Gj~8,0<hCZJ$|3)adYEs1>pF[+', VV[-tV[63]] = "" + (VV[tV[0]] || ""), VV[tV[36]] = VV[-tV[63]].length, VV[-tV[66]] = [], VV[tV[9]] = tV[0], VV[tV[30]] = tV[0], VV[tV[27 … [truncated]
-             if (VV[-tV[65]] = VV[tV[8]].indexOf(VV[-tV[63]][VV[-tV[64]]]), VV[-tV[65]] !== -tV[1])
-               if (VV[tV[27]] < tV[0]) VV[tV[27]] = VV[-tV[65]];
+           for (OH(HH[PH[4]] = PH[1], HH[PH[1]] = ')HANTs~#J,B@EvK_+x8yq|>OY1adw&2WuIUk%f.h"7`<jzi*^el(G:p90mbCMRZ;Q45P}S[oDF!g3L]?/$nc6VXtr={', HH[PH[9]] = "" + (HH[PH[0]] || ""), HH[PH[37]] = HH[PH[9]].length, HH[PH[7]] = [], HH[PH[23]] = PH[0], HH[PH[12]] = PH[0], HH[PH[52]] =  … [truncated]
+             if (HH[PH[64]] = HH[PH[1]].indexOf(HH[PH[9]][HH[PH[2]]]), HH[PH[64]] !== -PH[1])
+               if (HH[PH[52]] < PH[0]) HH[PH[52]] = HH[PH[64]];
```

#### 1718. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12374` → after: `L12759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12759) · [Before (L12374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12374)

```diff
-                 PV(VV[tV[27]] += VV[-tV[65]] * tV[28], VV[tV[9]] |= VV[tV[27]] << VV[tV[30]], VV[tV[30]] += (VV[tV[27]] & tV[31]) > tV[32] ? tV[33] : tV[34]);
+                 OH(HH[PH[52]] += HH[PH[64]] * PH[22], HH[PH[23]] |= HH[PH[52]] << HH[PH[12]], HH[PH[12]] += (HH[PH[52]] & PH[24]) > PH[25] ? PH[26] : PH[27]);
```

#### 1719. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12376-L12379` → after: `L12761-L12764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12761-L12764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12761-L12764) · [Before (L12376-L12379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12376-L12379)

```diff
-                   PV(VV[-tV[66]].push(VV[tV[9]] & tV[3]), VV[tV[9]] >>= tV[2], VV[tV[30]] -= tV[2])
-                 } while (VV[tV[30]] > tV[19]);
-                 VV[tV[27]] = -tV[1]
-               } return VV[tV[27]] > -tV[1] && VV[-tV[66]].push((VV[tV[9]] | VV[tV[27]] << VV[tV[30]]) & tV[3]), FV(VV[-tV[66]])
+                   OH(HH[PH[7]].push(HH[PH[23]] & PH[3]), HH[PH[23]] >>= PH[2], HH[PH[12]] -= PH[2])
+                 } while (HH[PH[12]] > PH[14]);
+                 HH[PH[52]] = -PH[1]
+               } return HH[PH[52]] > -PH[1] && HH[PH[7]].push((HH[PH[23]] | HH[PH[52]] << HH[PH[12]]) & PH[3]), UH(HH[PH[7]])
```

#### 1720. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12383` → after: `L12768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12768) · [Before (L12383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12383)

```diff
-           return VV[tV[4]] = tV[1], typeof jV[VV[tV[0]]] === tV[10] ? jV[VV[tV[0]]] = CV(qV[VV[tV[0]]]) : jV[VV[tV[0]]]
+           return HH[PH[4]] = PH[1], typeof xH[HH[PH[0]]] === PH[5] ? xH[HH[PH[0]]] = eH(vH[HH[PH[0]]]) : xH[HH[PH[0]]]
```

#### 1721. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12385-L12393` → after: `L12770-L12813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12770-L12813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12770-L12813) · [Before (L12385-L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12385-L12393)

```diff
-         if (VV[tV[44]][aV(114)] < tV[0]) {
-           function oV() {
-             console.log((function(...VV) {
-               if (PV(VV[tV[4]] = tV[1], VV[-tV[48]] = VV[tV[0]].length), VV[-tV[48]] < tV[23]) return tV[0];
-               if (PV(VV[tV[23]] = Math.max(...VV[tV[0]]), VV[tV[12]] = Math.min(...VV[tV[0]])), VV[tV[23]] === VV[tV[12]]) return tV[0];
-               for (PV(VV[tV[6]] = Array(VV[-tV[48]] - tV[1]).fill(Number.MAX_SAFE_INTEGER), VV[tV[9]] = Array(VV[-tV[48]] - tV[1]).fill(Number.MIN_SAFE_INTEGER), VV[tV[67]] = Math.ceil((VV[tV[23]] - VV[tV[12]]) / (VV[-tV[48]] - tV[1])), VV[tV[27]] = tV[0]), VV[tV[2]] = tV[0]; VV[ … [truncated]
-               for (PV(VV[tV[41]] = Number.MIN_SAFE_INTEGER, VV[tV[69]] = VV[tV[12]]), VV[tV[68]] = tV[0]; VV[tV[68]] < VV[-tV[48]] - tV[1]; VV[tV[68]]++) VV[tV[6]][VV[tV[68]]] === Number.MAX_SAFE_INTEGER && VV[tV[9]][VV[tV[68]]] === Number.MIN_SAFE_INTEGER || PV(VV[tV[41]] = Math … [truncated]
-               return VV[tV[41]] = Math.max(VV[tV[41]], VV[tV[23]] - VV[tV[69]]), VV[tV[41]]
-             }))
+ 
+         function gH(...HH) {
+           function BH(...HH) {
+             return HH[PH[4]] = PH[1], typeof xH[HH[PH[0]]] === PH[5] ? xH[HH[PH[0]]] = function(...HH) {
+               for (OH(HH[PH[4]] = PH[1], HH[PH[32]] = '+JQmVIfTipHPZcGFRO,Md]78&EDl4?u}Yr"[3(Cks@n`hvNz0)U#eWw<2>=*S.|BAxoLKq5{/:X9;ytj^a1!$%6_~gb', HH[PH[17]] = "" + (HH[PH[0]] || ""), HH[PH[37]] = HH[PH[17]].length, HH[PH[7]] = [], HH[PH[23]] = PH[0], HH[PH[12]] = PH[0], HH[PH[ … [truncated]
+                 if (HH[PH[41]] = HH[PH[32]].indexOf(HH[PH[17]][HH[PH[53]]]), HH[PH[41]] !== -PH[1])
+                   if (HH[PH[52]] < PH[0]) HH[PH[52]] = HH[PH[41]];
+                   else {
+                     OH(HH[PH[52]] += HH[PH[41]] * PH[22], HH[PH[23]] |= HH[PH[52]] << HH[PH[12]], HH[PH[12]] += (HH[PH[52]] & PH[24]) > PH[25] ? PH[26] : PH[27]);
+                     do {
+                       OH(HH[PH[7]].push(HH[PH[23]] & PH[3]), HH[PH[23]] >>= PH[2], HH[PH[12]] -= PH[2])
+                     } while (HH[PH[12]] > PH[14]);
+                     HH[PH[52]] = -PH[1]
+                   } return HH[PH[52]] > -PH[1] && HH[PH[7]].push((HH[PH[23]] | HH[PH[52]] << HH[PH[12]]) & PH[3]), UH(HH[PH[7]])
+             }(vH[HH[PH[0]]]) : xH[HH[PH[0]]]
+           }
+ ... (28 more added lines; see GitHub link above)
```

#### 1722. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12397-L12401` → after: `L12816-L12854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12816-L12854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12816-L12854) · [Before (L12397-L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12397-L12401)

```diff
-         VV[tV[36]][tV[62]] -= xV[aV(116) + aV(117) + aV(tV[59])]
-       }
-       const JV = xV[eV(119) + tV[70]] + VV[tV[36]][eV(120)];
-       PV(VV[tV[15]] = pV()[eV(121)](VV[tV[36]][tV[56]]) + VV[tV[44]][eV(122)] * JV * xV[eV(123)] * VV[tV[8]], VV[tV[15]] = kV[tV[15]][eV(124)](VV[tV[15]], xV[eV(125) + tV[70]], JV), VV[tV[36]][eV(tV[73])]++);
-       const UV = VV[tV[19]] / 1e3,
+         if (qH(97) in VH && gH(), HH[PH[38]][qH(101)] < PH[0]) {
+           function NH(...HH) {
+             for (OH(HH[PH[4]] = PH[1], HH[PH[32]] = 'dPAYGaCJuI8jiHF_p(6"~c|@^bq9).5W&!ZVD*n>]<KovX3trfO#E0S4,[$Lzs;w{QTl}e/B`xmy1k+2%hU?g:M7=RN', HH[-PH[65]] = "" + (HH[PH[0]] || ""), HH[PH[66]] = HH[-PH[65]].length, HH[PH[38]] = [], HH[PH[28]] = PH[0], HH[PH[12]] = PH[0], HH[-P … [truncated]
+               if (HH[PH[35]] = HH[PH[32]].indexOf(HH[-PH[65]][HH[PH[53]]]), HH[PH[35]] !== -PH[1])
+                 if (HH[-PH[67]] < PH[0]) HH[-PH[67]] = HH[PH[35]];
+                 else {
+                   OH(HH[-PH[67]] += HH[PH[35]] * PH[22], HH[PH[28]] |= HH[-PH[67]] << HH[PH[12]], HH[PH[12]] += (HH[-PH[67]] & PH[24]) > PH[25] ? PH[26] : PH[27]);
+                   do {
+                     OH(HH[PH[38]].push(HH[PH[28]] & PH[3]), HH[PH[28]] >>= PH[2], HH[PH[12]] -= PH[2])
+                   } while (HH[PH[12]] > PH[14]);
+                   HH[-PH[67]] = -PH[1]
+                 } return HH[-PH[67]] > -PH[1] && HH[PH[38]].push((HH[PH[28]] | HH[-PH[67]] << HH[PH[12]]) & PH[3]), UH(HH[PH[38]])
+           }
+ 
+           function RH(...HH) {
+             return HH[PH[4]] = PH[1], typeof xH[HH[PH[0]]] === PH[5] ? xH[HH[PH[0]]] = NH(vH[HH[PH[0]]]) : xH[HH[PH[0]]]
+ ... (23 more added lines; see GitHub link above)
```

#### 1723. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12403` → after: `L12856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12856) · [Before (L12403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12403)

```diff
-       if (PV(pV()[eV(tV[71])](yV, VV[tV[44]][eV(tV[72])]), pV()[eV(tV[83]) + eV(tV[84])](yV, yV), pV()[eV(tV[82])](yV, yV, VV[tV[15]]), VV[tV[79]] = tV[1]), VV[tV[36]][eV(tV[73])] < xV[eV(tV[85]) + eV(tV[86]) + eV(tV[87])]) {
+       if (OH(tH()[BH(PH[66])](hH, HH[PH[38]][BH(115)]), tH()[BH(PH[85]) + BH(PH[86])](hH, hH), tH()[BH(PH[84])](hH, hH, HH[PH[15]]), HH[PH[75]] = PH[1]), HH[PH[37]][BH(PH[69])] < LH[BH(PH[87]) + BH(PH[88]) + BH(PH[89])]) {
```

#### 1724. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12405-L12407` → after: `L12858-L12860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12858-L12860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12858-L12860) · [Before (L12405-L12407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12405-L12407)

```diff
-           for (PV(VV[tV[4]] = tV[1], VV[tV[52]] = 'PMm8^)+wjplW@!#AI5bok<%"1{?T>B*cLGtxzZ/UCv_~XD6SisuER;gq2V&Y`0aQH3:,dJh|en}7.KrO$Nf=y4][(9F', VV[tV[23]] = "" + (VV[tV[0]] || ""), VV[tV[74]] = VV[tV[23]].length, VV[tV[77]] = [], VV[tV[76]] = tV[0], VV[tV[30]] = tV[0], VV[tV[27] … [truncated]
-             if (VV[-tV[75]] = VV[tV[52]].indexOf(VV[tV[23]][VV[tV[24]]]), VV[-tV[75]] !== -tV[1])
-               if (VV[tV[27]] < tV[0]) VV[tV[27]] = VV[-tV[75]];
+           for (OH(HH[PH[4]] = PH[1], HH[PH[1]] = 'A(eMNP]=|t}Sh4DL!f&,T[vXZ`l76>WGzuajQEOUq*9_1V)0C5%3dr$/snIBx:bJ8iRco2^+{m~#gY;Hk?.pFK@<"wy', HH[PH[9]] = "" + (HH[PH[0]] || ""), HH[PH[37]] = HH[PH[9]].length, HH[PH[71]] = [], HH[PH[70]] = PH[0], HH[PH[12]] = PH[0], HH[PH[14]] = … [truncated]
+             if (HH[PH[41]] = HH[PH[1]].indexOf(HH[PH[9]][HH[PH[53]]]), HH[PH[41]] !== -PH[1])
+               if (HH[PH[14]] < PH[0]) HH[PH[14]] = HH[PH[41]];
```

#### 1725. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12409` → after: `L12862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12862) · [Before (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12409)

```diff
-                 PV(VV[tV[27]] += VV[-tV[75]] * tV[28], VV[tV[76]] |= VV[tV[27]] << VV[tV[30]], VV[tV[30]] += (VV[tV[27]] & tV[31]) > tV[32] ? tV[33] : tV[34]);
+                 OH(HH[PH[14]] += HH[PH[41]] * PH[22], HH[PH[70]] |= HH[PH[14]] << HH[PH[12]], HH[PH[12]] += (HH[PH[14]] & PH[24]) > PH[25] ? PH[26] : PH[27]);
```

#### 1726. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12411-L12414` → after: `L12864-L12867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12864-L12867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12864-L12867) · [Before (L12411-L12414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12411-L12414)

```diff
-                   PV(VV[tV[77]].push(VV[tV[76]] & tV[3]), VV[tV[76]] >>= tV[2], VV[tV[30]] -= tV[2])
-                 } while (VV[tV[30]] > tV[19]);
-                 VV[tV[27]] = -tV[1]
-               } return VV[tV[27]] > -tV[1] && VV[tV[77]].push((VV[tV[76]] | VV[tV[27]] << VV[tV[30]]) & tV[3]), FV(VV[tV[77]])
+                   OH(HH[PH[71]].push(HH[PH[70]] & PH[3]), HH[PH[70]] >>= PH[2], HH[PH[12]] -= PH[2])
+                 } while (HH[PH[12]] > PH[14]);
+                 HH[PH[14]] = -PH[1]
+               } return HH[PH[14]] > -PH[1] && HH[PH[71]].push((HH[PH[70]] | HH[PH[14]] << HH[PH[12]]) & PH[3]), UH(HH[PH[71]])
```

#### 1727. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12418` → after: `L12871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12871) · [Before (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12418)

```diff
-           return VV[tV[4]] = tV[1], typeof jV[VV[tV[0]]] === tV[10] ? jV[VV[tV[0]]] = cV(qV[VV[tV[0]]]) : jV[VV[tV[0]]]
+           return HH[PH[4]] = PH[1], typeof xH[HH[PH[0]]] === PH[5] ? xH[HH[PH[0]]] = nH(vH[HH[PH[0]]]) : xH[HH[PH[0]]]
```

#### 1728. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12422-L12426` → after: `L12875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12875) · [Before (L12422-L12426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12422-L12426)

```diff
-           PV(VV[tV[4]] = tV[0], VV[tV[8]] = function(...VV) {
-             for (PV(VV[tV[4]] = tV[1], VV[tV[1]] = VV[tV[0]].length, VV[tV[23]] = [], VV[tV[78]] = tV[0]), VV[tV[7]] = tV[0]; VV[tV[7]] < VV[tV[1]]; VV[tV[7]]++) VV[tV[23]].push(VV[tV[7]] !== tV[0] && VV[tV[0]][VV[tV[7]]] > VV[tV[0]][VV[tV[7]] - tV[1]] ? VV[tV[23]][VV[tV[7]] - tV … [truncated]
-             for (VV[tV[9]] = VV[tV[1]] - tV[1]; VV[tV[9]] >= tV[0]; VV[tV[9]]--) VV[tV[9]] !== VV[tV[1]] - tV[1] && VV[tV[0]][VV[tV[9]]] > VV[tV[0]][VV[tV[9]] + tV[1]] && (VV[tV[23]][VV[tV[9]]] = Math.max(VV[tV[23]][VV[tV[9]]], VV[tV[23]][VV[tV[9]] + tV[1]] + tV[1])), VV[tV[78]]  … [truncated]
-             return VV[tV[78]]
-           }, console.log(VV[tV[8]]))
+           HH[PH[4]] = PH[0]
```

#### 1729. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12428` → after: `L12877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12877) · [Before (L12428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12428)

```diff
-         if (eV(135) + "H" in TV && lV(), VV[tV[79]] = rV[tV[15]][hV(136) + hV(137)](VV[tV[36]][hV(138)] / YV[tV[30]][hV(139) + hV(140) + hV(tV[78])]), VV[tV[79]] > .8) {
+         if (FH(122) + "Y" in VH && DH(), HH[PH[75]] = YH[PH[17]][FH(125) + FH(126)](HH[PH[37]][FH(PH[76])] / rH[PH[52]][FH(PH[77]) + FH(PH[54]) + FH(130) + "nd"]), HH[PH[75]] > .8) {
```

#### 1730. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12430-L12432` → after: `L12879-L12881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12879-L12881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12879-L12881) · [Before (L12430-L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12430-L12432)

```diff
-             for (PV(VV[tV[4]] = tV[1], VV[tV[1]] = 'jyNa$(Pz<;XWAsR/m0r8B+#dCb4LD:neKkt&lVu>q[3Qo]9EFG}"MT1=HZf{.I)Jc6`v|p2!gYO^@?,5_hw%iUS~7x*', VV[tV[23]] = "" + (VV[tV[0]] || ""), VV[tV[36]] = VV[tV[23]].length, VV[tV[44]] = [], VV[tV[9]] = tV[0], VV[tV[30]] = tV[0], VV[tV[81] … [truncated]
-               if (VV[tV[26]] = VV[tV[1]].indexOf(VV[tV[23]][VV[tV[80]]]), VV[tV[26]] !== -tV[1])
-                 if (VV[tV[81]] < tV[0]) VV[tV[81]] = VV[tV[26]];
+             for (OH(HH[PH[4]] = PH[1], HH[PH[32]] = 'v49!$7DCj@Gzg|%?IKRFY>=/q2atM[d:n]`~fpV;sBo(A&hZ+eH)0l^xu86UO{J5ELT"y1SNbPX3<,cw}mr*Qi#_.kW', HH[PH[9]] = "" + (HH[PH[0]] || ""), HH[-PH[78]] = HH[PH[9]].length, HH[PH[83]] = [], HH[-PH[82]] = PH[0], HH[-PH[38]] = PH[0], HH[PH[ … [truncated]
+               if (HH[-PH[80]] = HH[PH[32]].indexOf(HH[PH[9]][HH[-PH[79]]]), HH[-PH[80]] !== -PH[1])
+                 if (HH[PH[81]] < PH[0]) HH[PH[81]] = HH[-PH[80]];
```

#### 1731. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12434` → after: `L12883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12883) · [Before (L12434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12434)

```diff
-                   PV(VV[tV[81]] += VV[tV[26]] * tV[28], VV[tV[9]] |= VV[tV[81]] << VV[tV[30]], VV[tV[30]] += (VV[tV[81]] & tV[31]) > tV[32] ? tV[33] : tV[34]);
+                   OH(HH[PH[81]] += HH[-PH[80]] * PH[22], HH[-PH[82]] |= HH[PH[81]] << HH[-PH[38]], HH[-PH[38]] += (HH[PH[81]] & PH[24]) > PH[25] ? PH[26] : PH[27]);
```

#### 1732. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12436-L12437` → after: `L12885-L12886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12885-L12886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12885-L12886) · [Before (L12436-L12437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12436-L12437)

```diff
-                     PV(VV[tV[44]].push(VV[tV[9]] & tV[3]), VV[tV[9]] >>= tV[2], VV[tV[30]] -= tV[2])
-                   } while (VV[tV[30]] > tV[19]);
+                     OH(HH[PH[83]].push(HH[-PH[82]] & PH[3]), HH[-PH[82]] >>= PH[2], HH[-PH[38]] -= PH[2])
+                   } while (HH[-PH[38]] > PH[14]);
```

#### 1733. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12439` → after: `L12888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12888) · [Before (L12439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12439)

```diff
-                 } return VV[tV[81]] > -tV[1] && VV[tV[44]].push((VV[tV[9]] | VV[tV[81]] << VV[tV[30]]) & tV[3]), FV(VV[tV[44]])
+                 } return HH[PH[81]] > -PH[1] && HH[PH[83]].push((HH[-PH[82]] | HH[PH[81]] << HH[-PH[38]]) & PH[3]), UH(HH[PH[83]])
```

#### 1734. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12443` → after: `L12892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12892) · [Before (L12443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12443)

```diff
-             return typeof jV[VV] === tV[10] ? jV[VV] = LV(qV[VV]) : jV[VV]
+             return typeof xH[HH] === PH[5] ? xH[HH] = wH(vH[HH]) : xH[HH]
```

#### 1735. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12445` → after: `L12894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12894) · [Before (L12445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12445)

```diff
-           PV(VV[tV[79]] = tV[1], VV[tV[36]][fV(142)] = 1e5)
+           OH(HH[PH[75]] = PH[1], HH[PH[37]][ZH(131)] = 1e5)
```

#### 1736. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12449` → after: `L12898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12898) · [Before (L12449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12449)

```diff
-       PV(pV()[eV(tV[74])](QV, yV, VV[tV[29]][tV[50]]), pV()[eV(tV[82])](QV, QV, VV[tV[29]][tV[88]] * VV[tV[79]] / UV), VV[tV[29]][eV(tV[89]) + eV(tV[52])](QV), pV()[eV(146)](VV[tV[36]][tV[56]], VV[tV[29]][tV[50]], yV, VV[tV[79]]));
+       OH(tH()[BH(132)](zH, hH, HH[PH[23]][PH[44]]), tH()[BH(PH[84])](zH, zH, HH[PH[23]][PH[95]] * HH[PH[75]] / SH), HH[PH[23]][BH(PH[96]) + BH(PH[97])](zH), tH()[BH(135)](HH[PH[37]][PH[56]], HH[PH[23]][PH[44]], hH, HH[PH[75]]));
```

#### 1737. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12451` → after: `L12900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12900) · [Before (L12451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12451)

```diff
-       if (PV(pV()[eV(tV[83]) + eV(tV[84])](nV, VV[tV[36]][tV[56]]), pV()[eV(tV[82])](nV, nV, xV[eV(147) + eV(148) + tV[9]])), VV[tV[36]][eV(tV[73])] > xV[eV(tV[85]) + eV(tV[86]) + eV(tV[87])]) {
+       if (OH(tH()[BH(PH[85]) + BH(PH[86])](CH, HH[PH[37]][PH[56]]), tH()[BH(PH[84])](CH, CH, LH[BH(PH[94]) + BH(137) + PH[28]])), HH[PH[37]][BH(PH[69])] > LH[BH(PH[87]) + BH(PH[88]) + BH(PH[89])]) {
```

#### 1738. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12453-L12455` → after: `L12902-L12904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12902-L12904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12902-L12904) · [Before (L12453-L12455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12453-L12455)

```diff
-           for (PV(VV[tV[4]] = tV[1], VV[tV[1]] = 'glshEkHZNPVpbuI8q=v_n}1od:>XRaYAm3trjLe6iB!%9f;$w^FU".DJ?)[GS5KWCxcOQTy|42@,{<*(+z#]0&7~`M/', VV[tV[23]] = "" + (VV[tV[0]] || ""), VV[tV[12]] = VV[tV[23]].length, VV[tV[44]] = [], VV[tV[9]] = tV[0], VV[tV[17]] = tV[0], VV[tV[19]]  … [truncated]
-             if (VV[tV[41]] = VV[tV[1]].indexOf(VV[tV[23]][VV[tV[24]]]), VV[tV[41]] !== -tV[1])
-               if (VV[tV[19]] < tV[0]) VV[tV[19]] = VV[tV[41]];
+           for (OH(HH[PH[4]] = PH[1], HH[PH[1]] = '<x~u.5%z$#(y07&L}kMZ:)mWqVv_hYO2fD3P?ro|jBT["6dS{JHwcnpgNiR/@]Q`EX9e=8!1bsU>CaFt4Kl,*+;^GAI', HH[PH[90]] = "" + (HH[PH[0]] || ""), HH[PH[76]] = HH[PH[90]].length, HH[PH[48]] = [], HH[PH[28]] = PH[0], HH[-PH[91]] = PH[0], HH[PH[52] … [truncated]
+             if (HH[PH[93]] = HH[PH[1]].indexOf(HH[PH[90]][HH[PH[92]]]), HH[PH[93]] !== -PH[1])
+               if (HH[PH[52]] < PH[0]) HH[PH[52]] = HH[PH[93]];
```

#### 1739. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12457` → after: `L12906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12906) · [Before (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12457)

```diff
-                 PV(VV[tV[19]] += VV[tV[41]] * tV[28], VV[tV[9]] |= VV[tV[19]] << VV[tV[17]], VV[tV[17]] += (VV[tV[19]] & tV[31]) > tV[32] ? tV[33] : tV[34]);
+                 OH(HH[PH[52]] += HH[PH[93]] * PH[22], HH[PH[28]] |= HH[PH[52]] << HH[-PH[91]], HH[-PH[91]] += (HH[PH[52]] & PH[24]) > PH[25] ? PH[26] : PH[27]);
```

#### 1740. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12459-L12462` → after: `L12908-L12911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12908-L12911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12908-L12911) · [Before (L12459-L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12459-L12462)

```diff
-                   PV(VV[tV[44]].push(VV[tV[9]] & tV[3]), VV[tV[9]] >>= tV[2], VV[tV[17]] -= tV[2])
-                 } while (VV[tV[17]] > tV[19]);
-                 VV[tV[19]] = -tV[1]
-               } return VV[tV[19]] > -tV[1] && VV[tV[44]].push((VV[tV[9]] | VV[tV[19]] << VV[tV[17]]) & tV[3]), FV(VV[tV[44]])
+                   OH(HH[PH[48]].push(HH[PH[28]] & PH[3]), HH[PH[28]] >>= PH[2], HH[-PH[91]] -= PH[2])
+                 } while (HH[-PH[91]] > PH[14]);
+                 HH[PH[52]] = -PH[1]
+               } return HH[PH[52]] > -PH[1] && HH[PH[48]].push((HH[PH[28]] | HH[PH[52]] << HH[-PH[91]]) & PH[3]), UH(HH[PH[48]])
```

#### 1741. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12466` → after: `L12915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12915) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12466)

```diff
-           return VV[tV[4]] = tV[1], typeof jV[VV[tV[0]]] === tV[10] ? jV[VV[tV[0]]] = mV(qV[VV[tV[0]]]) : jV[VV[tV[0]]]
+           return HH[PH[4]] = PH[1], typeof xH[HH[PH[0]]] === PH[5] ? xH[HH[PH[0]]] = dH(vH[HH[PH[0]]]) : xH[HH[PH[0]]]
```

#### 1742. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12468-L12487` → after: `L12917-L12919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12917-L12919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12917-L12919) · [Before (L12468-L12487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12468-L12487)

```diff
- 
-         function HV(...VV) {
-           var eV;
-           PV(VV[tV[4]] = tV[0], eV = function(...VV) {
-             PV(VV[tV[4]] = tV[1], this.Jv = VV[tV[0]], this.length = tV[0], this.map = {}, this.head = tV[47], this.tail = tV[47])
-           }, eV.prototype.get = function(...VV) {
-             var eV;
-             return PV(VV[tV[4]] = tV[1], eV = this.map[VV[tV[0]]]), eV ? (this.remove(eV), this.insert(eV.key, eV.val), eV.val) : -tV[1]
-           }, eV.prototype.put = function(...VV) {
-             PV(VV[tV[4]] = tV[23], this.map[VV[tV[0]]] ? (this.remove(this.map[VV[tV[0]]]), this.insert(VV[tV[0]], VV[tV[1]])) : this.length === this.Jv ? (this.remove(this.head), this.insert(VV[tV[0]], VV[tV[1]])) : (this.insert(VV[tV[0]], VV[tV[1]]), this.length++))
-           }, eV.prototype.remove = function(VV) {
-             var eV, xV = VV.prev;
-             (eV = VV.next) && (eV.prev = xV), xV && (xV.next = eV), this.head === VV && (this.head = eV), this.tail === VV && (this.tail = xV), delete this.map[VV.key]
-           }, eV.prototype.insert = function(...VV) {
-             PV(VV[tV[4]] = tV[23], VV[tV[8]] = new List(VV[tV[0]], VV[tV[1]]), this.tail ? (this.tail.next = VV[tV[8]], VV[tV[8]].prev = this.tail, this.tail = VV[tV[8]]) : (this.tail = VV[tV[8]], this.head = VV[tV[8]]), this.map[VV[tV[0]]] = VV[tV[8]])
-           }, console.log(eV))
- ... (4 more removed lines; see GitHub link above)
+         CH[PH[1]] = -LH[BH(PH[94]) + aH(138) + PH[28]]
+       }
+       OH(tH()[BH(PH[84])](CH, CH, HH[PH[23]][PH[95]] / SH), HH[PH[23]][BH(PH[96]) + BH(PH[97])](CH), HH[PH[23]][BH(PH[98]) + PH[99]] = LH[BH(PH[98]) + PH[99]])
```

#### 1743. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12489-L12492` → after: `L12921-L12924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12921-L12924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12921-L12924) · [Before (L12489-L12492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12489-L12492)

```diff
-     var AV = xV(38787),
-       NV = xV(7018),
-       XV = xV(1269),
-       MV = xV(38827);
+     var bH = LH(38481),
+       kH = LH(7005),
+       mH = LH(1182),
+       oH = LH(38520);
```

#### 1744. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12499` → after: `L12931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12931) · [Before (L12499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12499)

```diff
-     const KV = [1, 234, 0, "h", 3, 9, "g", 5, 6, "d", 8, 255, "length", 162, 12, "a", 113, "undefined", void 0, "c", 4, 227, 2, 47, 63, "fromCodePoint", 7, "push", 136, 71, "i", 91, "f", 8191, 88, 13, 14, 10, "e", 23, 123, 67, 209, 79, 122, 233, 147, 111, 183, 130, 158, 220, 32,  … [truncated]
+     const dH = ["b", 0, 1, 8, "c", "a", 95, 7, "e", 39, 4, 255, "length", 230, 203, 164, 222, 121, "undefined", void 0, 3, 153, 63, 6, "fromCodePoint", 12, "push", 13, 9, "g", 91, "f", 8191, 88, 14, 237, 2, 102, 71, 41, "h", 146, 174, 127, "nt", 176, "d", 61, 212, "i", 5, 128, 85 … [truncated]
```

#### 1745. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12502-L12505` → after: `L12934-L12937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12934-L12937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12934-L12937) · [Before (L12502-L12505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12502-L12505)

```diff
-       return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = function(...VV) {
-         for (ye(VV[KV[12]] = KV[0], VV[KV[0]] = 'cx5j"?{2(fv3D<J[doVZrMH>w|g6GpO@ezW`bNI&QTKasyBRqLun]#t+!F%/Y)71l=i04XEP9A,Cm:U.;h}$k*^_~8S', VV[-KV[1]] = "" + (VV[KV[2]] || ""), VV[KV[4]] = VV[-KV[1]].length, VV[KV[9]] = [], VV[KV[7]] = KV[2], VV[KV[8]] = KV[2], VV[KV[6]] = -KV … [truncated]
-           if (VV[KV[5]] = VV[KV[0]].indexOf(VV[-KV[1]][VV[KV[3]]]), VV[KV[5]] !== -KV[0])
-             if (VV[KV[6]] < KV[2]) VV[KV[6]] = VV[KV[5]];
+       return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = function(...HH) {
+         for (zB(HH[dH[12]] = dH[2], HH[dH[5]] = '_ZGODfsKNAhoYFcbWEi14^r[PJ%7dySj8XLH:k3Q@n?VCu}9p#>,<Itvwgze{;T`2m&0R!6|.=$)a(+U~/Ml*"q]x5B', HH[dH[0]] = "" + (HH[dH[1]] || ""), HH[dH[4]] = HH[dH[0]].length, HH[dH[10]] = [], HH[dH[8]] = dH[1], HH[-dH[9]] = dH[1], HH[dH[7]] = -dH … [truncated]
+           if (HH[-dH[6]] = HH[dH[5]].indexOf(HH[dH[0]][HH[dH[3]]]), HH[-dH[6]] !== -dH[2])
+             if (HH[dH[7]] < dH[1]) HH[dH[7]] = HH[-dH[6]];
```

#### 1746. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12507` → after: `L12939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12939) · [Before (L12507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12507)

```diff
-               ye(VV[KV[6]] += VV[KV[5]] * KV[31], VV[KV[7]] |= VV[KV[6]] << VV[KV[8]], VV[KV[8]] += (VV[KV[6]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
+               zB(HH[dH[7]] += HH[-dH[6]] * dH[30], HH[dH[8]] |= HH[dH[7]] << HH[-dH[9]], HH[-dH[9]] += (HH[dH[7]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
```

#### 1747. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12509-L12513` → after: `L12941-L12945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12941-L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12941-L12945) · [Before (L12509-L12513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12509-L12513)

```diff
-                 ye(VV[KV[9]].push(VV[KV[7]] & KV[11]), VV[KV[7]] >>= KV[10], VV[KV[8]] -= KV[10])
-               } while (VV[KV[8]] > KV[26]);
-               VV[KV[6]] = -KV[0]
-             } return VV[KV[6]] > -KV[0] && VV[KV[9]].push((VV[KV[7]] | VV[KV[6]] << VV[KV[8]]) & KV[11]), uV(VV[KV[9]])
-       }(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
+                 zB(HH[dH[10]].push(HH[dH[8]] & dH[11]), HH[dH[8]] >>= dH[3], HH[-dH[9]] -= dH[3])
+               } while (HH[-dH[9]] > dH[7]);
+               HH[dH[7]] = -dH[2]
+             } return HH[dH[7]] > -dH[2] && HH[dH[10]].push((HH[dH[8]] | HH[dH[7]] << HH[-dH[9]]) & dH[11]), sH(HH[dH[10]])
+       }(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
```

#### 1748. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12516-L12517` → after: `L12948-L12949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12948-L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12948-L12949) · [Before (L12516-L12517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12516-L12517)

```diff
-     function uV(...VV) {
-       return VV[KV[12]] = KV[0], typeof aV !== KV[17] && aV ? (new aV).decode(new oV(VV[KV[2]])) : typeof cV !== KV[17] && cV ? cV.from(VV[KV[2]]).toString("utf-8") : LV(VV[KV[2]])
+     function sH(HH) {
+       return typeof NH !== dH[18] && NH ? (new NH).decode(new RH(HH)) : typeof jH !== dH[18] && jH ? jH.from(HH).toString("utf-8") : DH(HH)
```

#### 1749. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12521-L12534` → after: `L12953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12953) · [Before (L12521-L12534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12521-L12534)

```diff
-       if (VV[KV[12]] = KV[4], VV[KV[2]] === function(...VV) {
-           return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = function(...VV) {
-             for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = 'KgQ?2X>FrT,dmo!#i*Ia7.cb6)|OCt1LV;`Hs_Sfn5^wvM8}ejZ<hR+(G4B/[&p%yAPWluEU0q9N:D3~=kY@$x{]"Jz', VV[-KV[28]] = "" + (VV[KV[2]] || ""), VV[-KV[29]] = VV[-KV[28]].length, VV[-KV[37]] = [], VV[KV[7]] = KV[2], VV[KV[32]] = KV[2], VV[ … [truncated]
-               if (VV[KV[30]] = VV[KV[15]].indexOf(VV[-KV[28]][VV[KV[10]]]), VV[KV[30]] !== -KV[0])
-                 if (VV[KV[26]] < KV[2]) VV[KV[26]] = VV[KV[30]];
-                 else {
-                   ye(VV[KV[26]] += VV[KV[30]] * KV[31], VV[KV[7]] |= VV[KV[26]] << VV[KV[32]], VV[KV[32]] += (VV[KV[26]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-                   do {
-                     ye(VV[-KV[37]].push(VV[KV[7]] & KV[11]), VV[KV[7]] >>= KV[10], VV[KV[32]] -= KV[10])
-                   } while (VV[KV[32]] > KV[26]);
-                   VV[KV[26]] = -KV[0]
-                 } return VV[KV[26]] > -KV[0] && VV[-KV[37]].push((VV[KV[7]] | VV[KV[26]] << VV[KV[32]]) & KV[11]), uV(VV[-KV[37]])
-           }(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-         }(KV[43]) + KV[55]) return VV[KV[0]] + VV[KV[22]]
+       if (HH[dH[12]] = dH[20], HH[dH[1]] === aH(115) + dH[70]) return HH[dH[2]] + HH[dH[36]]
```

#### 1750. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12539` → after: `L12958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12958) · [Before (L12539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12539)

```diff
-     function IV(VV, eV, xV, JV = {}, YV, UV, yV, pV) {
+     function pH(HH, BH, LH, AH = {}, rH, SH, hH, tH, zH) {
```

#### 1751. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12541` → after: `L12960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12960) · [Before (L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12541)

```diff
-           return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = YV(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
+           HH[dH[12]] = dH[1]
```

#### 1752. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12543-L12545` → after: `L12962-L12966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12962-L12966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12962-L12966) · [Before (L12543-L12545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12543-L12545)

```diff
-           for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = 'CDLim*f6yPIg$cu2x=WQt{G?T>(<:/YS;q8O]`+oR%N&BVUHsr"jk9!~hv^Zl)}|X_eEKbFnazdJA[1,3p@54#.w7M0', VV[KV[22]] = "" + (VV[KV[2]] || ""), VV[KV[4]] = VV[KV[22]].length, VV[KV[40]] = [], VV[KV[38]] = KV[2], VV[KV[39]] = KV[2], VV[KV[6]] … [truncated]
-             if (VV[KV[30]] = VV[KV[15]].indexOf(VV[KV[22]][VV[KV[3]]]), VV[KV[30]] !== -KV[0])
-               if (VV[KV[6]] < KV[2]) VV[KV[6]] = VV[KV[30]];
+           return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = rH(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
+         }), rH || (rH = function(...HH) {
+           for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = 'm4yte%o30FNfv)V]61aJ2s[g>$|iTwWLAqBl98&d`Y5OkKUMC_SER{n+I"./hcZj<;D=xzQ,H~r}*puXbG!@:7#(?^P', HH[-dH[2]] = "" + (HH[dH[1]] || ""), HH[dH[4]] = HH[-dH[2]].length, HH[dH[35]] = [], HH[dH[8]] = dH[1], HH[dH[31]] = dH[1], HH[dH[29]]  … [truncated]
+             if (HH[dH[28]] = HH[dH[2]].indexOf(HH[-dH[2]][HH[dH[27]]]), HH[dH[28]] !== -dH[2])
+               if (HH[dH[29]] < dH[1]) HH[dH[29]] = HH[dH[28]];
```

#### 1753. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12547` → after: `L12968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12968) · [Before (L12547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12547)

```diff
-                 ye(VV[KV[6]] += VV[KV[30]] * KV[31], VV[KV[38]] |= VV[KV[6]] << VV[KV[39]], VV[KV[39]] += (VV[KV[6]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
+                 zB(HH[dH[29]] += HH[dH[28]] * dH[30], HH[dH[8]] |= HH[dH[29]] << HH[dH[31]], HH[dH[31]] += (HH[dH[29]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
```

#### 1754. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12549-L12554` → after: `L12970-L13032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12970-L13032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L12970-L13032) · [Before (L12549-L12554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12549-L12554)

```diff
-                   ye(VV[KV[40]].push(VV[KV[38]] & KV[11]), VV[KV[38]] >>= KV[10], VV[KV[39]] -= KV[10])
-                 } while (VV[KV[39]] > KV[26]);
-                 VV[KV[6]] = -KV[0]
-               } return VV[KV[6]] > -KV[0] && VV[KV[40]].push((VV[KV[38]] | VV[KV[6]] << VV[KV[39]]) & KV[11]), uV(VV[KV[40]])
-         }), ye(yV = void 0, pV = {
-           [UV(KV[129])]: function(...VV) {
+                   zB(HH[dH[35]].push(HH[dH[8]] & dH[11]), HH[dH[8]] >>= dH[3], HH[dH[31]] -= dH[3])
+                 } while (HH[dH[31]] > dH[7]);
+                 HH[dH[29]] = -dH[2]
+               } return HH[dH[29]] > -dH[2] && HH[dH[35]].push((HH[dH[8]] | HH[dH[29]] << HH[dH[31]]) & dH[11]), sH(HH[dH[35]])
+         }), aH(dH[202]) in iH && hH(), zB(tH = void 0, zH = {
+           [SH(dH[68])]: function(...HH) {
+             function BH(...HH) {
+               return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = function(HH) {
+                 var BH, LH, AH, rH, SH, hH, tH;
+                 for (zB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = dH[1], SH = dH[1], hH = -dH[2]), tH = dH[1]; tH < LH; tH++) {
+                   var zH = 'cGtPmr18;KJ>6}@QyD_`R]~={",YkU<0?^*Iua|sdiqz7p/5C2e3nBxOE9)MhHT.A(v&Z:g$SNfV+#j[X4!wlLboFW%'.indexOf(BH[tH]);
+                   if (zH !== -dH[2])
+                     if (hH < dH[1]) hH = zH;
+                     else {
+                       zB(hH += zH * dH[30], rH |= hH << SH, SH += (hH & dH[32]) > dH[33] ? dH[27] : dH[34]);
+                       do {
+ ... (47 more added lines; see GitHub link above)
```

#### 1755. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12556-L12559` → after: `L13034-L13037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13034-L13037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13034-L13037) · [Before (L12556-L12559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12556-L12559)

```diff
-               return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = function(...VV) {
-                 for (ye(VV[KV[12]] = KV[0], VV[-KV[20]] = 'x{^8?v!y&2~>/%u,76w:|=NnH9d#zr+GFY;PE_10S5.D}gmMoTcl*pIJqL)jCZ@e("s<QbtUWafBO$[X3Vi]AR4h`Kk', VV[KV[22]] = "" + (VV[KV[2]] || ""), VV[KV[19]] = VV[KV[22]].length, VV[KV[42]] = [], VV[KV[38]] = KV[2], VV[KV[8]] = KV[2], VV … [truncated]
-                   if (VV[KV[30]] = VV[-KV[20]].indexOf(VV[KV[22]][VV[KV[10]]]), VV[KV[30]] !== -KV[0])
-                     if (VV[-KV[41]] < KV[2]) VV[-KV[41]] = VV[KV[30]];
+               return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = function(...HH) {
+                 for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = '*2y[(3#GEuzpfo4nKLR}81CiaHMw=Om_AD"B5Tds!?&l)7Xr>kcb9Stj~]Vv/|%eN;`^@qQUPI0<g6Fh.WJxZ{Y+$,:', HH[dH[39]] = "" + (HH[dH[1]] || ""), HH[dH[4]] = HH[dH[39]].length, HH[dH[10]] = [], HH[dH[42]] = dH[1], HH[dH[23]] = dH[1], HH[d … [truncated]
+                   if (HH[dH[41]] = HH[dH[2]].indexOf(HH[dH[39]][HH[dH[40]]]), HH[dH[41]] !== -dH[2])
+                     if (HH[dH[29]] < dH[1]) HH[dH[29]] = HH[dH[41]];
```

#### 1756. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12561` → after: `L13039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13039) · [Before (L12561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12561)

```diff
-                       ye(VV[-KV[41]] += VV[KV[30]] * KV[31], VV[KV[38]] |= VV[-KV[41]] << VV[KV[8]], VV[KV[8]] += (VV[-KV[41]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
+                       zB(HH[dH[29]] += HH[dH[41]] * dH[30], HH[dH[42]] |= HH[dH[29]] << HH[dH[23]], HH[dH[23]] += (HH[dH[29]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
```

#### 1757. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12563-L12567` → after: `L13041-L13045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13041-L13045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13041-L13045) · [Before (L12563-L12567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12563-L12567)

```diff
-                         ye(VV[KV[42]].push(VV[KV[38]] & KV[11]), VV[KV[38]] >>= KV[10], VV[KV[8]] -= KV[10])
-                       } while (VV[KV[8]] > KV[26]);
-                       VV[-KV[41]] = -KV[0]
-                     } return VV[-KV[41]] > -KV[0] && VV[KV[42]].push((VV[KV[38]] | VV[-KV[41]] << VV[KV[8]]) & KV[11]), uV(VV[KV[42]])
-               }(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
+                         zB(HH[dH[10]].push(HH[dH[42]] & dH[11]), HH[dH[42]] >>= dH[3], HH[dH[23]] -= dH[3])
+                       } while (HH[dH[23]] > dH[7]);
+                       HH[dH[29]] = -dH[2]
+                     } return HH[dH[29]] > -dH[2] && HH[dH[10]].push((HH[dH[42]] | HH[dH[29]] << HH[dH[23]]) & dH[11]), sH(HH[dH[10]])
+               }(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
```

#### 1758. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12569` → after: `L13047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13047) · [Before (L12569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12569)

```diff
-               [VV[KV[15]], VV[KV[76]], VV[-KV[26]]], VV[KV[9]]
+               [HH[dH[0]], HH[dH[2]], HH[dH[46]]], HH[dH[20]]
```

#### 1759. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12571-L12572` → after: `L13049-L13050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13049-L13050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13049-L13050) · [Before (L12571-L12572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12571-L12572)

```diff
-             const xV = VV[KV[15]][eV(KV[165])];
-             if (xV[eV(KV[131]) + KV[82]]) xV[eV(107) + eV(KV[59]) + eV(KV[319]) + "es"](VV[KV[76]], VV[-KV[26]]);
+             const LH = HH[dH[0]][BH(dH[196])];
+             if (LH[BH(dH[43]) + dH[44]]) LH[BH(129) + BH(130) + BH(dH[242])](HH[dH[2]], HH[dH[46]]);
```

#### 1760. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12575` → after: `L13053-L13169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13053-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13053-L13169) · [Before (L12575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12575)

```diff
-                 ye(VV[KV[12]] = KV[2], VV[KV[15]] = function(...VV) {
+                 for (zB(HH[dH[12]] = dH[2], HH[dH[48]] = '!HbBdK;&#+Z@w^6eAp`}lo3v2PV"I1*9?7CaGgT5Nm~{.fRkiXzQqDyh0uSO_U8c]|,/ExjF$4rL<M(>J=[n)%sWtY:', HH[-dH[45]] = "" + (HH[dH[1]] || ""), HH[dH[4]] = HH[-dH[45]].length, HH[dH[46]] = [], HH[dH[50]] = dH[1], HH[dH[23]] = dH[1], H … [truncated]
+                   if (HH[dH[49]] = HH[dH[48]].indexOf(HH[-dH[45]][HH[dH[47]]]), HH[dH[49]] !== -dH[2])
+                     if (HH[-dH[23]] < dH[1]) HH[-dH[23]] = HH[dH[49]];
+                     else {
+                       zB(HH[-dH[23]] += HH[dH[49]] * dH[30], HH[dH[50]] |= HH[-dH[23]] << HH[dH[23]], HH[dH[23]] += (HH[-dH[23]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
+                       do {
+                         zB(HH[dH[46]].push(HH[dH[50]] & dH[11]), HH[dH[50]] >>= dH[3], HH[dH[23]] -= dH[3])
+                       } while (HH[dH[23]] > dH[7]);
+                       HH[-dH[23]] = -dH[2]
+                     } return HH[-dH[23]] > -dH[2] && HH[dH[46]].push((HH[dH[50]] | HH[-dH[23]] << HH[dH[23]]) & dH[11]), sH(HH[dH[46]])
+               }
+ 
+               function rH(HH) {
+                 return typeof eH[HH] === dH[18] ? eH[HH] = AH(qH[HH]) : eH[HH]
+               }
+ 
+ ... (101 more added lines; see GitHub link above)
```

#### 1761. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12577` → after: `L13171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13171) · [Before (L12577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12577)

```diff
-                     return VV[KV[12]] = KV[22], yV(YV(pV(VV[KV[2]]), pV(VV[KV[0]])))
+                     return HH[dH[12]] = dH[36], SH(AH(hH(HH[dH[1]]), hH(HH[dH[2]])))
```

#### 1762. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12580-L12591` → after: `L13174-L13186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13174-L13186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13174-L13186) · [Before (L12580-L12591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12580-L12591)

```diff
-                   function JV(VV, eV, xV) {
-                     return function(...VV) {
-                       var eV, xV, JV, YV;
-                       for (ye(VV[KV[12]] = KV[22], VV[-KV[62]] = VV[KV[0]].length, VV[-KV[63]] = Array()), VV[KV[20]] = Array(Math.ceil(VV[KV[2]].length / KV[22])), eV = KV[2]; eV < VV[KV[20]].length; eV++) VV[KV[20]][eV] = VV[KV[2]].charCodeAt(eV * KV[22]) << KV[10] | VV[KV[2]]. … [truncated]
-                       for (; VV[KV[20]].length > KV[2];) {
-                         for (ye(YV = Array(), JV = KV[2]), eV = KV[2]; eV < VV[KV[20]].length; eV++) ye(JV = (JV << KV[53]) + VV[KV[20]][eV], xV = Math.floor(JV / VV[-KV[62]]), JV -= xV * VV[-KV[62]]), (YV.length > KV[2] || xV > KV[2]) && (YV[YV.length] = xV);
-                         ye(VV[-KV[63]][VV[-KV[63]].length] = JV, VV[KV[20]] = YV)
-                       }
-                       for (VV[KV[9]] = "", eV = VV[-KV[63]].length - KV[0]; eV >= KV[2]; eV--) VV[KV[9]] += VV[KV[0]].charAt(VV[-KV[63]][eV]);
-                       for (VV[KV[22]] = Math.ceil(VV[KV[2]].length * KV[10] / (Math.log(VV[KV[0]].length) / Math.log(KV[22]))), eV = VV[KV[9]].length; eV < VV[KV[22]]; eV++) VV[KV[9]] = VV[KV[0]][KV[2]] + VV[KV[9]];
-                       return VV[KV[9]]
-                     }(YV(pV(VV), pV(eV)), xV)
+                   function LH(...HH) {
+                     return HH[dH[12]] = dH[20],
+                       function(...HH) {
+                         var BH, LH, AH, rH;
+                         for (zB(HH[dH[12]] = dH[36], HH[dH[81]] = HH[dH[2]].length, HH[dH[0]] = Array()), HH[dH[10]] = Array(Math.ceil(HH[dH[1]].length / dH[36])), BH = dH[1]; BH < HH[dH[10]].length; BH++) HH[dH[10]][BH] = HH[dH[1]].charCodeAt(BH * dH[36]) << dH[3] | HH[dH[1]].ch … [truncated]
+                         for (; HH[dH[10]].length > dH[1];) {
+                           for (zB(rH = Array(), AH = dH[1]), BH = dH[1]; BH < HH[dH[10]].length; BH++) zB(AH = (AH << dH[67]) + HH[dH[10]][BH], LH = Math.floor(AH / HH[dH[81]]), AH -= LH * HH[dH[81]]), (rH.length > dH[1] || LH > dH[1]) && (rH[rH.length] = LH);
+                           zB(HH[dH[0]][HH[dH[0]].length] = AH, HH[dH[10]] = rH)
+                         }
+                         for (HH[dH[50]] = "", BH = HH[dH[0]].length - dH[2]; BH >= dH[1]; BH--) HH[dH[50]] += HH[dH[2]].charAt(HH[dH[0]][BH]);
+                         for (HH[-dH[82]] = Math.ceil(HH[dH[1]].length * dH[3] / (Math.log(HH[dH[2]].length) / Math.log(dH[36]))), BH = HH[dH[50]].length; BH < HH[-dH[82]]; BH++) HH[dH[50]] = HH[dH[2]][dH[1]] + HH[dH[50]];
+                         return HH[dH[50]]
+                       }(AH(hH(HH[dH[1]]), hH(HH[dH[2]])), HH[dH[36]])
```

#### 1763. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12595-L12612` → after: `L13190-L13194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13190-L13194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13190-L13194) · [Before (L12595-L12612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12595-L12612)

```diff
-                     VV[KV[12]] = KV[22], VV[KV[22]] = QV(VV[KV[2]]), VV[KV[22]].length > KV[53] && (VV[KV[22]] = jV(VV[KV[22]], VV[KV[2]].length * KV[10]));
-                     var eV = Array(KV[53]),
-                       xV = Array(KV[53]);
-                     for (VV[KV[54]] = KV[2]; VV[KV[54]] < KV[53]; VV[KV[54]]++) ye(eV[VV[KV[54]]] = VV[KV[22]][VV[KV[54]]] ^ KV[216], xV[VV[KV[54]]] = VV[KV[22]][VV[KV[54]]] ^ KV[217]);
-                     return VV[-KV[10]] = jV(eV.concat(QV(VV[KV[0]])), KV[56] + VV[KV[0]].length * KV[10]), nV(jV(xV.concat(VV[-KV[10]]), sV(function(...VV) {
-                       return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = function(...VV) {
-                         for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = 'WqM63(&#5@l8iCYTF*1N.;_<g9efhtr^]nID?kzxoj%S)4GBRdQyv"2p[/b~Pu+EX7|OHVsa:`=}w{LJAZ0!UcKm,>$', VV[KV[22]] = "" + (VV[KV[2]] || ""), VV[-KV[50]] = VV[KV[22]].length, VV[KV[9]] = [], VV[-KV[51]] = KV[2], VV[-KV[52]] = … [truncated]
-                           if (VV[KV[5]] = VV[KV[15]].indexOf(VV[KV[22]][VV[KV[49]]]), VV[KV[5]] !== -KV[0])
-                             if (VV[KV[26]] < KV[2]) VV[KV[26]] = VV[KV[5]];
-                             else {
-                               ye(VV[KV[26]] += VV[KV[5]] * KV[31], VV[-KV[51]] |= VV[KV[26]] << VV[-KV[52]], VV[-KV[52]] += (VV[KV[26]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-                               do {
-                                 ye(VV[KV[9]].push(VV[-KV[51]] & KV[11]), VV[-KV[51]] >>= KV[10], VV[-KV[52]] -= KV[10])
-                               } while (VV[-KV[52]] > KV[26]);
-                               VV[KV[26]] = -KV[0]
-                             } return VV[KV[26]] > -KV[0] && VV[KV[9]].push((VV[-KV[51]] | VV[KV[26]] << VV[-KV[52]]) & KV[11]), uV(VV[KV[9]])
- ... (2 more removed lines; see GitHub link above)
+                     zB(HH[dH[12]] = dH[36], HH[dH[66]] = tH(HH[dH[1]])), HH[dH[66]].length > dH[67] && (HH[dH[66]] = xH(HH[dH[66]], HH[dH[1]].length * dH[3]));
+                     var BH = Array(dH[67]),
+                       LH = Array(dH[67]);
+                     for (HH[dH[68]] = dH[1]; HH[dH[68]] < dH[67]; HH[dH[68]]++) zB(BH[HH[dH[68]]] = HH[dH[66]][HH[dH[68]]] ^ dH[97], LH[HH[dH[68]]] = HH[dH[66]][HH[dH[68]]] ^ dH[98]);
+                     return HH[dH[69]] = xH(BH.concat(tH(HH[dH[2]])), dH[71] + HH[dH[2]].length * dH[3]), zH(xH(LH.concat(HH[dH[69]]), JH(CH(145) + dH[70], dH[71], dH[99])))
```

#### 1764. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12617-L12622` → after: `L13199-L13202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13199-L13202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13199-L13202) · [Before (L12617-L12622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12617-L12622)

```diff
-                       return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = function(VV) {
-                         var eV, xV, JV, YV, UV, yV, pV;
-                         for (ye(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = KV[2], UV = KV[2], yV = -KV[0]), pV = KV[2]; pV < xV; pV++) {
-                           var QV = 'Y;Zmx8ocWS$^yu)3?0nHe7(.}P<1*_Ar,fvl:w9Va]>k/~@"O`J2L&b%iQ[6!=GUg#+I45NB|hzj{CDdRMTKqEFtpsX'.indexOf(eV[pV]);
-                           if (QV !== -KV[0])
-                             if (yV < KV[2]) yV = QV;
+                       return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = function(...HH) {
+                         for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = 'FwUs6!h)A@(B.n8PE}*#vY3I1z0]Rt=/c>x{S:o"%;il`52<L7V_O,W&yNrC4d?+j$Hp~[9Z^fGmM|kqbQuKXaegDTJ', HH[dH[36]] = "" + (HH[dH[1]] || ""), HH[dH[4]] = HH[dH[36]].length, HH[-dH[74]] = [], HH[-dH[73]] = dH[1], HH[dH[31]] = d … [truncated]
+                           if (HH[dH[49]] = HH[dH[2]].indexOf(HH[dH[36]][HH[-dH[72]]]), HH[dH[49]] !== -dH[2])
+                             if (HH[-dH[7]] < dH[1]) HH[-dH[7]] = HH[dH[49]];
```

#### 1765. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12624` → after: `L13204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13204) · [Before (L12624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12624)

```diff
-                               ye(yV += QV * KV[31], YV |= yV << UV, UV += (yV & KV[33]) > KV[34] ? KV[35] : KV[36]);
+                               zB(HH[-dH[7]] += HH[dH[49]] * dH[30], HH[-dH[73]] |= HH[-dH[7]] << HH[dH[31]], HH[dH[31]] += (HH[-dH[7]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
```

#### 1766. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12626-L12632` → after: `L13206-L13210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13206-L13210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13206-L13210) · [Before (L12626-L12632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12626-L12632)

```diff
-                                 ye(JV.push(YV & KV[11]), YV >>= KV[10], UV -= KV[10])
-                               } while (UV > KV[26]);
-                               yV = -KV[0]
-                             }
-                         }
-                         return yV > -KV[0] && JV.push((YV | yV << UV) & KV[11]), uV(JV)
-                       }(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
+                                 zB(HH[-dH[74]].push(HH[-dH[73]] & dH[11]), HH[-dH[73]] >>= dH[3], HH[dH[31]] -= dH[3])
+                               } while (HH[dH[31]] > dH[7]);
+                               HH[-dH[7]] = -dH[2]
+                             } return HH[-dH[7]] > -dH[2] && HH[-dH[74]].push((HH[-dH[73]] | HH[-dH[7]] << HH[dH[31]]) & dH[11]), sH(HH[-dH[74]])
+                       }(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
```

#### 1767. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12634` → after: `L13212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13212) · [Before (L12634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12634)

```diff
-                     xV[KV[12]] = KV[0];
+                     BH[dH[12]] = dH[2];
```

#### 1768. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12636` → after: `L13214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13214) · [Before (L12636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12636)

```diff
-                       VV[KV[1]]
+                       HH[dH[46]]
```

#### 1769. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12638` → after: `L13216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13216) · [Before (L12638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12638)

```diff
-                       VV[KV[1]] = KV[2]
+                       HH[dH[46]] = dH[1]
```

#### 1770. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12640-L12641` → after: `L13218-L13219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13218-L13219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13218-L13219) · [Before (L12640-L12641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12640-L12641)

```diff
-                     for (ye(xV[KV[0]] = VV[KV[1]] ? eV(94) + YV(95) + YV(KV[387]) : YV(97) + YV(KV[120]) + YV(99), xV[-KV[52]] = "", xV[KV[4]] = KV[18]), xV[KV[57]] = KV[2]; xV[KV[57]] < xV[KV[2]].length; xV[KV[57]]++) ye(xV[KV[4]] = xV[KV[2]].charCodeAt(xV[KV[57]]), xV[-KV[52]]  … [truncated]
-                     return xV[-KV[52]]
+                     for (zB(BH[dH[5]] = HH[dH[46]] ? AH(dH[41]) + AH(dH[297]) + AH(dH[238]) : AH(dH[41]) + AH(dH[411]) + AH(150), BH[-dH[77]] = "", BH[dH[76]] = dH[19]), BH[dH[75]] = dH[1]; BH[dH[75]] < BH[dH[1]].length; BH[dH[75]]++) zB(BH[dH[76]] = BH[dH[1]].charCodeAt(BH[dH[75 … [truncated]
+                     return BH[-dH[77]]
```

#### 1771. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12646-L12649` → after: `L13224-L13227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13224-L13227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13224-L13227) · [Before (L12646-L12649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12646-L12649)

```diff
-                       return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = function(...VV) {
-                         for (ye(VV[KV[12]] = KV[0], VV[KV[0]] = 'JFWUtNZlSjmp:f67qv0~LTn$HQ;buCMX]?1|z*IPrBGKYg5V(#OD["+Aadk&^y{ei29R@o`c,%!Eh)3w>.}=4_x8/<s', VV[KV[54]] = "" + (VV[KV[2]] || ""), VV[KV[19]] = VV[KV[54]].length, VV[KV[20]] = [], VV[KV[7]] = KV[2], VV[-KV[59]] = KV … [truncated]
-                           if (VV[KV[5]] = VV[KV[0]].indexOf(VV[KV[54]][VV[KV[10]]]), VV[KV[5]] !== -KV[0])
-                             if (VV[KV[6]] < KV[2]) VV[KV[6]] = VV[KV[5]];
+                       return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = function(...HH) {
+                         for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = 'D0btMUrXCFIaRHTwWY_B/8Ol2@LJgep*(G}{3#jnS$!xNQ+AVZfmoys;zE]k,qK)v%h:u96iPd7c|=4^.~`1?5>&<"[', HH[dH[36]] = "" + (HH[dH[1]] || ""), HH[dH[20]] = HH[dH[36]].length, HH[dH[46]] = [], HH[dH[7]] = dH[1], HH[dH[23]] = dH[ … [truncated]
+                           if (HH[dH[28]] = HH[dH[2]].indexOf(HH[dH[36]][HH[dH[79]]]), HH[dH[28]] !== -dH[2])
+                             if (HH[-dH[36]] < dH[1]) HH[-dH[36]] = HH[dH[28]];
```

#### 1772. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12651` → after: `L13229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13229) · [Before (L12651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12651)

```diff
-                               ye(VV[KV[6]] += VV[KV[5]] * KV[31], VV[KV[7]] |= VV[KV[6]] << VV[-KV[59]], VV[-KV[59]] += (VV[KV[6]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
+                               zB(HH[-dH[36]] += HH[dH[28]] * dH[30], HH[dH[7]] |= HH[-dH[36]] << HH[dH[23]], HH[dH[23]] += (HH[-dH[36]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
```

#### 1773. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12653-L12657` → after: `L13231-L13235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13231-L13235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13231-L13235) · [Before (L12653-L12657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12653-L12657)

```diff
-                                 ye(VV[KV[20]].push(VV[KV[7]] & KV[11]), VV[KV[7]] >>= KV[10], VV[-KV[59]] -= KV[10])
-                               } while (VV[-KV[59]] > KV[26]);
-                               VV[KV[6]] = -KV[0]
-                             } return VV[KV[6]] > -KV[0] && VV[KV[20]].push((VV[KV[7]] | VV[KV[6]] << VV[-KV[59]]) & KV[11]), uV(VV[KV[20]])
-                       }(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
+                                 zB(HH[dH[46]].push(HH[dH[7]] & dH[11]), HH[dH[7]] >>= dH[3], HH[dH[23]] -= dH[3])
+                               } while (HH[dH[23]] > dH[7]);
+                               HH[-dH[36]] = -dH[2]
+                             } return HH[-dH[36]] > -dH[2] && HH[dH[46]].push((HH[dH[7]] | HH[-dH[36]] << HH[dH[23]]) & dH[11]), sH(HH[dH[46]])
+                       }(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
```

#### 1774. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12659` → after: `L13237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13237) · [Before (L12659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12659)

```diff
-                     xV[KV[12]] = KV[0];
+                     BH[dH[12]] = dH[2];
```

#### 1775. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12661` → after: `L13239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13239) · [Before (L12661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12661)

```diff
-                       VV[KV[54]]
+                       HH[dH[2]]
```

#### 1776. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12663` → after: `L13241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13241) · [Before (L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12663)

```diff
-                       VV[KV[54]] = ""
+                       HH[dH[2]] = ""
```

#### 1777. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12665-L12667` → after: `L13243-L13245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13243-L13245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13243-L13245) · [Before (L12665-L12667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12665-L12667)

```diff
-                     for (ye(xV[KV[61]] = eV(KV[323]) + YV(KV[69]) + YV(KV[148]) + YV(KV[434]) + YV(KV[203]) + YV(KV[81]) + YV(KV[318]) + KV[219], xV[KV[22]] = "", xV[-KV[60]] = xV[KV[2]].length), xV[KV[20]] = KV[2]; xV[KV[20]] < xV[-KV[60]]; xV[KV[20]] += KV[4])
-                       for (xV[KV[38]] = xV[KV[2]].charCodeAt(xV[KV[20]]) << KV[53] | (xV[KV[20]] + KV[0] < xV[-KV[60]] ? xV[KV[2]].charCodeAt(xV[KV[20]] + KV[0]) << KV[10] : KV[2]) | (xV[KV[20]] + KV[22] < xV[-KV[60]] ? xV[KV[2]].charCodeAt(xV[KV[20]] + KV[22]) : KV[2]), xV[KV[8] … [truncated]
-                     return xV[KV[22]]
+                     for (zB(BH[dH[80]] = AH(dH[372]) + AH(152) + AH(dH[21]) + dH[216], BH[-dH[22]] = "", BH[dH[4]] = BH[dH[1]].length), BH[dH[46]] = dH[1]; BH[dH[46]] < BH[dH[4]]; BH[dH[46]] += dH[20])
+                       for (BH[dH[50]] = BH[dH[1]].charCodeAt(BH[dH[46]]) << dH[67] | (BH[dH[46]] + dH[2] < BH[dH[4]] ? BH[dH[1]].charCodeAt(BH[dH[46]] + dH[2]) << dH[3] : dH[1]) | (BH[dH[46]] + dH[36] < BH[dH[4]] ? BH[dH[1]].charCodeAt(BH[dH[46]] + dH[36]) : dH[1]), BH[dH[23]] =  … [truncated]
+                     return BH[-dH[22]]
```

#### 1778. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12672-L12673` → after: `L13250-L13251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13250-L13251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13250-L13251) · [Before (L12672-L12673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12672-L12673)

```diff
-                     for (ye(VV[KV[12]] = KV[0], VV[KV[0]] = "", VV[KV[54]] = -KV[0]); ++VV[KV[54]] < VV[KV[2]].length;) ye(eV = VV[KV[2]].charCodeAt(VV[KV[54]]), xV = VV[KV[54]] + KV[0] < VV[KV[2]].length ? VV[KV[2]].charCodeAt(VV[KV[54]] + KV[0]) : KV[2]), KV[222] <= eV && eV <= … [truncated]
-                     return VV[KV[0]]
+                     for (zB(HH[dH[12]] = dH[2], HH[dH[5]] = "", HH[dH[36]] = -dH[2]); ++HH[dH[36]] < HH[dH[1]].length;) zB(BH = HH[dH[1]].charCodeAt(HH[dH[36]]), LH = HH[dH[36]] + dH[2] < HH[dH[1]].length ? HH[dH[1]].charCodeAt(HH[dH[36]] + dH[2]) : dH[1]), dH[103] <= BH && BH <= … [truncated]
+                     return HH[dH[5]]
```

#### 1779. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12676-L12679` → after: `L13254-L13258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13254-L13258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13254-L13258) · [Before (L12676-L12679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12676-L12679)

```diff
-                   function QV(...VV) {
-                     for (ye(VV[KV[12]] = KV[0], VV[KV[71]] = Array(VV[KV[2]].length >> KV[22])), VV[KV[22]] = KV[2]; VV[KV[22]] < VV[KV[71]].length; VV[KV[22]]++) VV[KV[71]][VV[KV[22]]] = KV[2];
-                     for (VV[KV[22]] = KV[2]; VV[KV[22]] < VV[KV[2]].length * KV[10]; VV[KV[22]] += KV[10]) VV[KV[71]][VV[KV[22]] >> KV[7]] |= (VV[KV[2]].charCodeAt(VV[KV[22]] / KV[10]) & KV[11]) << KV[61] - VV[KV[22]] % KV[52];
-                     return VV[KV[71]]
+                   function tH(HH) {
+                     var BH, LH = Array(HH.length >> dH[36]);
+                     for (BH = dH[1]; BH < LH.length; BH++) LH[BH] = dH[1];
+                     for (BH = dH[1]; BH < HH.length * dH[3]; BH += dH[3]) LH[BH >> dH[50]] |= (HH.charCodeAt(BH / dH[3]) & dH[11]) << dH[88] - BH % dH[87];
+                     return LH
```

#### 1780. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12684` → after: `L13263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13263) · [Before (L12684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12684)

```diff
-                     for (eV = KV[2]; eV < VV.length * KV[52]; eV += KV[10]) xV += String.fromCharCode(VV[eV >> KV[7]] >>> KV[61] - eV % KV[52] & KV[11]);
+                     for (BH = dH[1]; BH < HH.length * dH[87]; BH += dH[3]) LH += String.fromCharCode(HH[BH >> dH[50]] >>> dH[88] - BH % dH[87] & dH[11]);
```

#### 1781. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12689` → after: `L13268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13268) · [Before (L12689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12689)

```diff
-                     return VV[KV[12]] = KV[22], VV[KV[2]] >>> VV[KV[0]] | VV[KV[2]] << KV[52] - VV[KV[0]]
+                     return HH[dH[12]] = dH[36], HH[dH[1]] >>> HH[dH[2]] | HH[dH[1]] << dH[87] - HH[dH[2]]
```

#### 1782. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12693` → after: `L13272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13272) · [Before (L12693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12693)

```diff
-                     return VV[KV[12]] = KV[22], VV[KV[2]] >>> VV[KV[0]]
+                     return HH[dH[12]] = dH[36], HH[dH[1]] >>> HH[dH[2]]
```

#### 1783. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12697` → after: `L13276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13276) · [Before (L12697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12697)

```diff
-                     return VV[KV[12]] = KV[4], VV[KV[2]] & VV[KV[0]] ^ ~VV[KV[2]] & VV[KV[22]]
+                     return HH[dH[12]] = dH[20], HH[dH[1]] & HH[dH[2]] ^ ~HH[dH[1]] & HH[dH[36]]
```

#### 1784. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12701` → after: `L13280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13280) · [Before (L12701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12701)

```diff
-                     return VV[KV[12]] = KV[4], VV[KV[2]] & VV[KV[0]] ^ VV[KV[2]] & VV[KV[22]] ^ VV[KV[0]] & VV[KV[22]]
+                     return HH[dH[12]] = dH[20], HH[dH[1]] & HH[dH[2]] ^ HH[dH[1]] & HH[dH[36]] ^ HH[dH[2]] & HH[dH[36]]
```

#### 1785. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12704-L12705` → after: `L13283-L13284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13283-L13284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13283-L13284) · [Before (L12704-L12705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12704-L12705)

```diff
-                   function kV(...VV) {
-                     return VV[KV[12]] = KV[0], wV(VV[KV[2]], KV[22]) ^ wV(VV[KV[2]], KV[35]) ^ wV(VV[KV[2]], KV[230])
+                   function uH(HH) {
+                     return EH(HH, dH[36]) ^ EH(HH, dH[27]) ^ EH(HH, dH[114])
```

#### 1786. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12709` → after: `L13288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13288) · [Before (L12709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12709)

```diff
-                     return VV[KV[12]] = KV[0], wV(VV[KV[2]], KV[8]) ^ wV(VV[KV[2]], KV[132]) ^ wV(VV[KV[2]], KV[231])
+                     return HH[dH[12]] = dH[2], EH(HH[dH[1]], dH[23]) ^ EH(HH[dH[1]], dH[115]) ^ EH(HH[dH[1]], dH[72])
```

#### 1787. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12713` → after: `L13292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13292) · [Before (L12713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12713)

```diff
-                     return VV[KV[12]] = KV[0], wV(VV[KV[2]], KV[26]) ^ wV(VV[KV[2]], KV[68]) ^ ZV(VV[KV[2]], KV[4])
+                     return HH[dH[12]] = dH[2], EH(HH[dH[1]], dH[7]) ^ EH(HH[dH[1]], dH[85]) ^ XH(HH[dH[1]], dH[20])
```

#### 1788. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12716-L12717` → after: `L13295-L13296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13295-L13296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13295-L13296) · [Before (L12716-L12717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12716-L12717)

```diff
-                   function BV(...VV) {
-                     return VV[KV[12]] = KV[0], wV(VV[KV[2]], KV[105]) ^ wV(VV[KV[2]], KV[72]) ^ ZV(VV[KV[2]], KV[37])
+                   function MH(HH) {
+                     return EH(HH, dH[116]) ^ EH(HH, dH[66]) ^ XH(HH, dH[61])
```

#### 1789. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12722-L12724` → after: `L13301-L13303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13301-L13303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13301-L13303) · [Before (L12722-L12724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12722-L12724)

```diff
-                     for (ye(eV[KV[12]] = KV[22], eV[KV[22]] = new Array(KV[298], -KV[299], KV[300], -KV[301], KV[302], -KV[303], KV[304], KV[305]), eV[-KV[74]] = new Array(KV[73])), ye(eV[KV[2]][eV[KV[0]] >> KV[7]] |= KV[67] << KV[61] - eV[KV[0]] % KV[52], eV[KV[2]][(eV[KV[0]] +  … [truncated]
-                       for (ye(xV = eV[KV[22]][KV[2]], JV = eV[KV[22]][KV[0]], YV = eV[KV[22]][KV[22]], UV = eV[KV[22]][KV[4]], yV = eV[KV[22]][KV[20]], pV = eV[KV[22]][KV[7]], QV = eV[KV[22]][KV[8]], nV = eV[KV[22]][KV[26]]), ZV = KV[2]; ZV < KV[73]; ZV++) ye(ZV < KV[53] ? eV[-KV … [truncated]
-                       ye(eV[KV[22]][KV[2]] = qV(xV, eV[KV[22]][KV[2]]), eV[KV[22]][KV[0]] = qV(JV, eV[KV[22]][KV[0]]), eV[KV[22]][KV[22]] = qV(YV, eV[KV[22]][KV[22]]), eV[KV[22]][KV[4]] = qV(UV, eV[KV[22]][KV[4]]), eV[KV[22]][KV[20]] = qV(yV, eV[KV[22]][KV[20]]), eV[KV[22]][KV[7] … [truncated]
+                     for (zB(BH[dH[12]] = dH[36], BH[dH[36]] = new Array(dH[182], -dH[183], dH[184], -dH[185], dH[186], -dH[187], dH[188], dH[189]), BH[dH[20]] = new Array(dH[89])), zB(BH[dH[1]][BH[dH[2]] >> dH[50]] |= dH[51] << dH[88] - BH[dH[2]] % dH[87], BH[dH[1]][(BH[dH[2]] +  … [truncated]
+                       for (zB(LH = BH[dH[36]][dH[1]], AH = BH[dH[36]][dH[2]], rH = BH[dH[36]][dH[36]], SH = BH[dH[36]][dH[20]], hH = BH[dH[36]][dH[10]], tH = BH[dH[36]][dH[50]], zH = BH[dH[36]][dH[23]], CH = BH[dH[36]][dH[7]]), XH = dH[1]; XH < dH[89]; XH++) zB(XH < dH[67] ? BH[d … [truncated]
+                       zB(BH[dH[36]][dH[1]] = vH(LH, BH[dH[36]][dH[1]]), BH[dH[36]][dH[2]] = vH(AH, BH[dH[36]][dH[2]]), BH[dH[36]][dH[36]] = vH(rH, BH[dH[36]][dH[36]]), BH[dH[36]][dH[20]] = vH(SH, BH[dH[36]][dH[20]]), BH[dH[36]][dH[10]] = vH(hH, BH[dH[36]][dH[10]]), BH[dH[36]][dH[ … [truncated]
```

#### 1790. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12726` → after: `L13305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13305) · [Before (L12726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12726)

```diff
-                     return eV[KV[22]]
+                     return BH[dH[36]]
```

#### 1791. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12730` → after: `L13309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13309) · [Before (L12730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12730)

```diff
-                     return ye(VV[KV[12]] = KV[22], VV[KV[22]] = (VV[KV[2]] & KV[75]) + (VV[KV[0]] & KV[75]), VV[KV[26]] = (VV[KV[2]] >> KV[53]) + (VV[KV[0]] >> KV[53]) + (VV[KV[22]] >> KV[53])), VV[KV[26]] << KV[53] | VV[KV[22]] & KV[75]
+                     return zB(HH[dH[12]] = dH[36], HH[dH[36]] = (HH[dH[1]] & dH[90]) + (HH[dH[2]] & dH[90]), HH[dH[79]] = (HH[dH[1]] >> dH[67]) + (HH[dH[2]] >> dH[67]) + (HH[dH[36]] >> dH[67])), HH[dH[79]] << dH[67] | HH[dH[36]] & dH[90]
```

#### 1792. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12732` → after: `L13311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13311) · [Before (L12732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12732)

```diff
-                   return ye(VV[KV[12]] = KV[2], VV[KV[1]] = KV[2], VV[KV[54]] = ""), VV[KV[19]] = new Array(KV[234], KV[235], -KV[236], -KV[237], KV[238], KV[239], -KV[240], -KV[241], -KV[242], KV[243], KV[244], KV[245], KV[246], -KV[247], -KV[248], -KV[249], -KV[250], -KV[251],  … [truncated]
+                   return zB(HH[dH[12]] = dH[1], HH[dH[46]] = dH[1], HH[dH[2]] = ""), HH[dH[36]] = new Array(dH[118], dH[119], -dH[120], -dH[121], dH[122], dH[123], -dH[124], -dH[125], -dH[126], dH[127], dH[128], dH[129], dH[130], -dH[131], -dH[132], -dH[133], -dH[134], -dH[135],  … [truncated]
```

#### 1793. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12734-L12736` → after: `L13313-L13315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13313-L13315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13313-L13315) · [Before (L12734-L12736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12734-L12736)

```diff
-                       return VV[KV[12]] = KV[0], UV(function(...VV) {
-                         return VV[KV[12]] = KV[0], nV(jV(QV(VV[KV[2]]), VV[KV[2]].length * KV[10]))
-                       }(pV(VV[KV[2]])))
+                       return HH[dH[12]] = dH[2], rH(function(...HH) {
+                         return HH[dH[12]] = dH[2], zH(xH(tH(HH[dH[1]]), HH[dH[1]].length * dH[3]))
+                       }(hH(HH[dH[1]])))
```

#### 1794. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12741` → after: `L13320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13320) · [Before (L12741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12741)

```diff
-                       return VV[KV[12]] = KV[22], UV(YV(pV(VV[KV[2]]), pV(VV[KV[0]])))
+                       return HH[dH[12]] = dH[36], rH(AH(hH(HH[dH[1]]), hH(HH[dH[2]])))
```

#### 1795. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12746` → after: `L13325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13325) · [Before (L12746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12746)

```diff
-                 }(), console.log(VV[KV[15]]))
+                 }(), console.log(HH[dH[0]]))
```

#### 1796. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12748-L12764` → after: `L13327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13327) · [Before (L12748-L12764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12748-L12764)

```diff
-               eV(84) in SV && JV()
-             }
-           },
-           [UV(KV[133])]: function(...VV) {
-             function eV(...VV) {
-               return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = function(...VV) {
-                 for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = '^02Py(Cf"1GL&#Wx_/B$a5)V8Tm%.`{E;D[9RZgUi|e6w}QvN4Mts3JAX>c@<?,upYS!+=ozkbhIFrj:HOK*dqnl7~]', VV[KV[54]] = "" + (VV[KV[2]] || ""), VV[KV[77]] = VV[KV[54]].length, VV[KV[20]] = [], VV[KV[78]] = KV[2], VV[KV[8]] = KV[2], VV[ … [truncated]
-                   if (VV[KV[5]] = VV[KV[15]].indexOf(VV[KV[54]][VV[KV[3]]]), VV[KV[5]] !== -KV[0])
-                     if (VV[KV[26]] < KV[2]) VV[KV[26]] = VV[KV[5]];
-                     else {
-                       ye(VV[KV[26]] += VV[KV[5]] * KV[31], VV[KV[78]] |= VV[KV[26]] << VV[KV[8]], VV[KV[8]] += (VV[KV[26]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-                       do {
-                         ye(VV[KV[20]].push(VV[KV[78]] & KV[11]), VV[KV[78]] >>= KV[10], VV[KV[8]] -= KV[10])
-                       } while (VV[KV[8]] > KV[26]);
-                       VV[KV[26]] = -KV[0]
-                     } return VV[KV[26]] > -KV[0] && VV[KV[20]].push((VV[KV[78]] | VV[KV[26]] << VV[KV[8]]) & KV[11]), uV(VV[KV[20]])
- ... (1 more removed lines; see GitHub link above)
+               return void(CH(dH[64]) in iH && EH())
```

#### 1797. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12766-L12778` → after: `L13329-L13330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13329-L13330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13329-L13330) · [Before (L12766-L12778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12766-L12778)

```diff
-             eV(KV[47]) + KV[191] in SV && function(...VV) {
-               ye(VV[KV[12]] = KV[2], VV[KV[15]] = function(...VV) {
-                 for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = VV[KV[2]].length, VV[-KV[80]] = [], VV[KV[19]] = KV[2]), VV[-KV[79]] = KV[2]; VV[-KV[79]] < VV[KV[15]]; VV[-KV[79]]++) VV[-KV[80]].push(VV[-KV[79]] !== KV[2] && VV[KV[2]][VV[-KV[79]]] > VV[KV[2]][VV[-KV[79]] - KV[0]] ? VV[- … [truncated]
-                 for (VV[KV[60]] = VV[KV[15]] - KV[0]; VV[KV[60]] >= KV[2]; VV[KV[60]]--) VV[KV[60]] !== VV[KV[15]] - KV[0] && VV[KV[2]][VV[KV[60]]] > VV[KV[2]][VV[KV[60]] + KV[0]] && (VV[-KV[80]][VV[KV[60]]] = Math.max(VV[-KV[80]][VV[KV[60]]], VV[-KV[80]][VV[KV[60]] + KV[0]] + KV … [truncated]
-                 return VV[KV[19]]
-               }, console.log(VV[KV[15]]))
-             }(), [
-               [VV[KV[15]], VV[KV[54]], VV[KV[81]], VV[-KV[76]], VV[-KV[83]]], VV[KV[32]]
-             ] = mV;
-             if (!VV[KV[15]][eV(KV[57])][eV(KV[16]) + KV[82]]) return;
-             if (!VV[KV[81]] || VV[-KV[76]] === KV[2]) return;
-             const xV = Math[eV(KV[144])](VV[-KV[83]]);
-             if (xV <= VV[KV[81]][eV(KV[87]) + KV[88]]) {
+             const LH = Math[BH(dH[214])](HH[dH[64]]);
+             if (LH <= HH[-dH[62]][BH(dH[192]) + dH[193]]) {
```

#### 1798. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12780-L12782` → after: `L13332-L13334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13332-L13334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13332-L13334) · [Before (L12780-L12782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12780-L12782)

```diff
-                 for (ye(VV[KV[12]] = KV[0], VV[KV[0]] = 'YOi<#.lsCx(F}p_&=3SmTKu2w,PL*/>b|^8"Z~V$U7e+d?k4]W1f:y{aB5;Dr[6hEHqGz)0Jo`g9QNvnA!@Ij%McRXt', VV[-KV[84]] = "" + (VV[KV[2]] || ""), VV[KV[19]] = VV[-KV[84]].length, VV[KV[9]] = [], VV[-KV[86]] = KV[2], VV[KV[8]] = KV[2], VV … [truncated]
-                   if (VV[KV[30]] = VV[KV[0]].indexOf(VV[-KV[84]][VV[KV[85]]]), VV[KV[30]] !== -KV[0])
-                     if (VV[KV[26]] < KV[2]) VV[KV[26]] = VV[KV[30]];
+                 for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = 'oRU!j8&yP.SbQdVCI,/B)L^Hx9426D`gZi0@nM(qsYTWOX}?%tka>[K{ep*]m5_wGf+v#~Nl|=$1;3Ar<FJ:hEu"zc7', HH[dH[91]] = "" + (HH[dH[1]] || ""), HH[-dH[92]] = HH[dH[91]].length, HH[dH[46]] = [], HH[dH[8]] = dH[1], HH[dH[23]] = dH[1], HH[ … [truncated]
+                   if (HH[-dH[63]] = HH[dH[2]].indexOf(HH[dH[91]][HH[dH[50]]]), HH[-dH[63]] !== -dH[2])
+                     if (HH[dH[28]] < dH[1]) HH[dH[28]] = HH[-dH[63]];
```

#### 1799. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12784` → after: `L13336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13336) · [Before (L12784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12784)

```diff
-                       ye(VV[KV[26]] += VV[KV[30]] * KV[31], VV[-KV[86]] |= VV[KV[26]] << VV[KV[8]], VV[KV[8]] += (VV[KV[26]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
+                       zB(HH[dH[28]] += HH[-dH[63]] * dH[30], HH[dH[8]] |= HH[dH[28]] << HH[dH[23]], HH[dH[23]] += (HH[dH[28]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
```

#### 1800. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12786-L12793` → after: `L13338-L13341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13338-L13341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13338-L13341) · [Before (L12786-L12793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12786-L12793)

```diff
-                         ye(VV[KV[9]].push(VV[-KV[86]] & KV[11]), VV[-KV[86]] >>= KV[10], VV[KV[8]] -= KV[10])
-                       } while (VV[KV[8]] > KV[26]);
-                       VV[KV[26]] = -KV[0]
-                     } return VV[KV[26]] > -KV[0] && VV[KV[9]].push((VV[-KV[86]] | VV[KV[26]] << VV[KV[8]]) & KV[11]), uV(VV[KV[9]])
-               }
- 
-               function UV(...VV) {
-                 return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = YV(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
+                         zB(HH[dH[46]].push(HH[dH[8]] & dH[11]), HH[dH[8]] >>= dH[3], HH[dH[23]] -= dH[3])
+                       } while (HH[dH[23]] > dH[7]);
+                       HH[dH[28]] = -dH[2]
+                     } return HH[dH[28]] > -dH[2] && HH[dH[46]].push((HH[dH[8]] | HH[dH[28]] << HH[dH[23]]) & dH[11]), sH(HH[dH[46]])
```

#### 1801. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12797-L12882` → after: `L13345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13345) · [Before (L12797-L12882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12797-L12882)

```diff
-                 VV[KV[12]] = KV[2]
-               }
-               return void(UV(KV[137]) in SV && yV())
-             }
-             const JV = Math[eV(117)]((xV - VV[KV[81]][eV(KV[87]) + KV[88]]) * VV[KV[81]][eV(KV[140]) + eV(KV[322]) + eV(120)], VV[KV[81]][eV(KV[333]) + eV(KV[44])]);
-             VV[KV[15]][eV(KV[57])][eV(KV[40])](VV[KV[54]], JV, VV[KV[81]][eV(KV[211]) + eV(125)])
-           },
-           [UV(KV[138])]: function(...VV) {
-             function eV(...VV) {
-               return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = function(...VV) {
-                 for (ye(VV[KV[12]] = KV[0], VV[KV[0]] = '{KMopeUO3`IbP$/;ctYhru)jQaVJ?nEvBW&Ag_q^y<84+,#*Rw}d76i.>lH2D%@[Xz9]Cf5Z~|TNF!=sx0G"1Sk(L:m', VV[KV[22]] = "" + (VV[KV[2]] || ""), VV[KV[4]] = VV[KV[22]].length, VV[KV[20]] = [], VV[-KV[89]] = KV[2], VV[KV[8]] = KV[2], VV[K … [truncated]
-                   if (VV[KV[30]] = VV[KV[0]].indexOf(VV[KV[22]][VV[-KV[8]]]), VV[KV[30]] !== -KV[0])
-                     if (VV[KV[26]] < KV[2]) VV[KV[26]] = VV[KV[30]];
-                     else {
-                       ye(VV[KV[26]] += VV[KV[30]] * KV[31], VV[-KV[89]] |= VV[KV[26]] << VV[KV[8]], VV[KV[8]] += (VV[KV[26]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-                       do {
- ... (70 more removed lines; see GitHub link above)
+                 return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = XH(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
```

#### 1802. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12886-L12887` → after: `L13349-L13352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13349-L13352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13349-L13352) · [Before (L12886-L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12886-L12887)

```diff
-                 return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = YV(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-               }
+                 zB(HH[dH[12]] = dH[1], HH[dH[5]] = function(...HH) {
+                   function BH(...HH) {
+                     return HH[dH[12]] = dH[36], SH(AH(hH(HH[dH[1]]), hH(HH[dH[2]])))
+                   }
```

#### 1803. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12889-L12935` → after: `L13354-L13366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13354-L13366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13354-L13366) · [Before (L12889-L12935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12889-L12935)

```diff
-               function pV(...VV) {
-                 VV[KV[12]] = KV[2]
-               }
-               return yV(KV[13]) + "H" in SV && pV(), JV + KV[0]
-             }
-             return JV
-           }
-         }), eV === UV(KV[91]) + UV(KV[63]) && (mV = []), eV === UV(165) + UV(166)) {
-         function QV(...eV) {
-           var xV;
-           return ye(eV[KV[12]] = KV[2], xV = function(...eV) {
-             return function(...VV) {
-               return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = function(...VV) {
-                 for (ye(VV[KV[12]] = KV[0], VV[KV[118]] = 'DGZOTyR$|XW*AqU6_`xF}7,BkKwv15rzb?+!dNEgMhu0ie;s&Io)SP]Q^4~8.2cfV/aC#3pJ=jL@H>m%[9n:{"t(<Yl', VV[KV[54]] = "" + (VV[KV[2]] || ""), VV[KV[4]] = VV[KV[54]].length, VV[KV[9]] = [], VV[-KV[68]] = KV[2], VV[-KV[119]] = KV[2],  … [truncated]
-                   if (VV[KV[5]] = VV[KV[118]].indexOf(VV[KV[54]][VV[KV[10]]]), VV[KV[5]] !== -KV[0])
-                     if (VV[KV[26]] < KV[2]) VV[KV[26]] = VV[KV[5]];
- ... (31 more removed lines; see GitHub link above)
+                   function LH(HH, BH, LH) {
+                     return function(...HH) {
+                       var BH, LH, AH, rH;
+                       for (zB(HH[dH[12]] = dH[36], HH[dH[36]] = HH[dH[2]].length, HH[dH[20]] = Array()), HH[dH[10]] = Array(Math.ceil(HH[dH[1]].length / dH[36])), BH = dH[1]; BH < HH[dH[10]].length; BH++) HH[dH[10]][BH] = HH[dH[1]].charCodeAt(BH * dH[36]) << dH[3] | HH[dH[1]].cha … [truncated]
+                       for (; HH[dH[10]].length > dH[1];) {
+                         for (zB(rH = Array(), AH = dH[1]), BH = dH[1]; BH < HH[dH[10]].length; BH++) zB(AH = (AH << dH[67]) + HH[dH[10]][BH], LH = Math.floor(AH / HH[dH[36]]), AH -= LH * HH[dH[36]]), (rH.length > dH[1] || LH > dH[1]) && (rH[rH.length] = LH);
+                         zB(HH[dH[20]][HH[dH[20]].length] = AH, HH[dH[10]] = rH)
+                       }
+                       for (HH[-dH[102]] = "", BH = HH[dH[20]].length - dH[2]; BH >= dH[1]; BH--) HH[-dH[102]] += HH[dH[2]].charAt(HH[dH[20]][BH]);
+                       for (HH[dH[23]] = Math.ceil(HH[dH[1]].length * dH[3] / (Math.log(HH[dH[2]].length) / Math.log(dH[36]))), BH = HH[-dH[102]].length; BH < HH[dH[23]]; BH++) HH[-dH[102]] = HH[dH[2]][dH[1]] + HH[-dH[102]];
+                       return HH[-dH[102]]
+                     }(AH(hH(HH), hH(BH)), LH)
+                   }
```

#### 1804. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12937-L12939` → after: `L13368-L13388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13368-L13388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13368-L13388) · [Before (L12937-L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12937-L12939)

```diff
-         function wV(...VV) {
-           return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = nV(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-         }
+                   function AH(HH, BH) {
+                     var LH, AH, rH;
+                     (LH = tH(HH)).length > dH[67] && (LH = MH(LH, HH.length * dH[3]));
+                     var SH = Array(dH[67]),
+                       hH = Array(dH[67]);
+                     for (AH = dH[1]; AH < dH[67]; AH++) zB(SH[AH] = LH[AH] ^ dH[97], hH[AH] = LH[AH] ^ dH[98]);
+                     return rH = MH(SH.concat(tH(BH)), dH[71] + BH.length * dH[3]), zH(MH(hH.concat(rH), JH(function(...HH) {
+                       return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = function(...HH) {
+                         for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = 'D^wKHaEf]i7J,y?>LAN9+8"O&Y4Xzx`M52B.:re)qlt0$po|cbj@vG~=!Td<%#{_3/g;u*1ZQP6U(}h[IRFSmCWnVks', HH[dH[0]] = "" + (HH[dH[1]] || ""), HH[dH[4]] = HH[dH[0]].length, HH[-dH[17]] = [], HH[dH[81]] = dH[1], HH[dH[23]] = dH[1 … [truncated]
+                           if (HH[-dH[96]] = HH[dH[2]].indexOf(HH[dH[0]][HH[dH[95]]]), HH[-dH[96]] !== -dH[2])
+                             if (HH[dH[29]] < dH[1]) HH[dH[29]] = HH[-dH[96]];
+                             else {
+                               zB(HH[dH[29]] += HH[-dH[96]] * dH[30], HH[dH[81]] |= HH[dH[29]] << HH[dH[23]], HH[dH[23]] += (HH[dH[29]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
+                               do {
+                                 zB(HH[-dH[17]].push(HH[dH[81]] & dH[11]), HH[dH[81]] >>= dH[3], HH[dH[23]] -= dH[3])
+                               } while (HH[dH[23]] > dH[7]);
+ ... (5 more added lines; see GitHub link above)
```

#### 1805. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12941-L12958` → after: `L13390-L13391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13390-L13391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13390-L13391) · [Before (L12941-L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12941-L12958)

```diff
-         function ZV(...VV) {
-           VV[KV[12]] = KV[2]
-         }
-         wV(KV[210]) in SV && ZV(), yV = pV[VV]()
-       }
-       if (xV === UV(176) + UV(177)) {
-         function vV(...VV) {
-           for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = 'h"VDZ=x@wMdoR?!b8.*s,AOL$)Ky3+{v0i4#`6u}/I(Glz|CH<~;[&Q2:J9YnrX1W%]5F^m7>gN_jBepEPSqkcafUTt', VV[-KV[129]] = "" + (VV[KV[2]] || ""), VV[KV[4]] = VV[-KV[129]].length, VV[-KV[130]] = [], VV[KV[7]] = KV[2], VV[-KV[131]] = KV[2], VV … [truncated]
-             if (VV[KV[30]] = VV[KV[15]].indexOf(VV[-KV[129]][VV[-KV[133]]]), VV[KV[30]] !== -KV[0])
-               if (VV[KV[132]] < KV[2]) VV[KV[132]] = VV[KV[30]];
-               else {
-                 ye(VV[KV[132]] += VV[KV[30]] * KV[31], VV[KV[7]] |= VV[KV[132]] << VV[-KV[131]], VV[-KV[131]] += (VV[KV[132]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-                 do {
-                   ye(VV[-KV[130]].push(VV[KV[7]] & KV[11]), VV[KV[7]] >>= KV[10], VV[-KV[131]] -= KV[10])
-                 } while (VV[-KV[131]] > KV[26]);
-                 VV[KV[132]] = -KV[0]
- ... (2 more removed lines; see GitHub link above)
+                   function rH(BH) {
+                     var LH, AH, rH, hH;
```

#### 1806. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12960-L13005` → after: `L13393-L13414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13393-L13414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13393-L13414) · [Before (L12960-L13005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L12960-L13005)

```diff
-         function rV(...VV) {
-           return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = vV(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-         }
-         return {
-           [rV(KV[77]) + rV(KV[357])]: yV
-         }
-       } {
-         function kV(...VV) {
-           for (ye(VV[KV[12]] = KV[0], VV[KV[0]] = 'S1MecUaCl~fAz8ViZIR95}YP/j<X3x`_twmG*Ts[F.|O>r]K;h,6$QHo%)du!bWE{LD?=B&0v^JqNk:74@gpny#2(+"', VV[KV[22]] = "" + (VV[KV[2]] || ""), VV[KV[4]] = VV[KV[22]].length, VV[KV[20]] = [], VV[KV[38]] = KV[2], VV[KV[8]] = KV[2], VV[KV[6]] = … [truncated]
-             if (VV[KV[5]] = VV[KV[0]].indexOf(VV[KV[22]][VV[KV[3]]]), VV[KV[5]] !== -KV[0])
-               if (VV[KV[6]] < KV[2]) VV[KV[6]] = VV[KV[5]];
-               else {
-                 ye(VV[KV[6]] += VV[KV[5]] * KV[31], VV[KV[38]] |= VV[KV[6]] << VV[KV[8]], VV[KV[8]] += (VV[KV[6]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-                 do {
-                   ye(VV[KV[20]].push(VV[KV[38]] & KV[11]), VV[KV[38]] >>= KV[10], VV[KV[8]] -= KV[10])
-                 } while (VV[KV[8]] > KV[26]);
- ... (30 more removed lines; see GitHub link above)
+                     function tH(HH) {
+                       return typeof eH[HH] === dH[18] ? eH[HH] = function(...HH) {
+                         for (zB(HH[dH[12]] = dH[2], HH[-dH[100]] = ':$8>6!?1}m)^/v[V+B9aj3{AZSNoMDeu5*x;_4O=wXRyH,p<n|Wl2%7z&U`Ps"fQ.GkiY#FIhrELgqc(b]CJ~KTt@0d', HH[dH[36]] = "" + (HH[dH[1]] || ""), HH[dH[4]] = HH[dH[36]].length, HH[dH[46]] = [], HH[dH[50]] = dH[1], HH[dH[31]] =  … [truncated]
+                           if (HH[dH[49]] = HH[-dH[100]].indexOf(HH[dH[36]][HH[dH[9]]]), HH[dH[49]] !== -dH[2])
+                             if (HH[dH[7]] < dH[1]) HH[dH[7]] = HH[dH[49]];
+                             else {
+                               zB(HH[dH[7]] += HH[dH[49]] * dH[30], HH[dH[50]] |= HH[dH[7]] << HH[dH[31]], HH[dH[31]] += (HH[dH[7]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
+                               do {
+                                 zB(HH[dH[46]].push(HH[dH[50]] & dH[11]), HH[dH[50]] >>= dH[3], HH[dH[31]] -= dH[3])
+                               } while (HH[dH[31]] > dH[7]);
+                               HH[dH[7]] = -dH[2]
+                             } return HH[dH[7]] > -dH[2] && HH[dH[46]].push((HH[dH[50]] | HH[dH[7]] << HH[dH[31]]) & dH[11]), sH(HH[dH[46]])
+                       }(qH[HH]) : eH[HH]
+                     }
+                     try {
+                       HH[dH[4]]
+ ... (6 more added lines; see GitHub link above)
```

#### 1807. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13007-L13024` → after: `L13416-L13440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13416-L13440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13416-L13440) · [Before (L13007-L13024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13007-L13024)

```diff
-     function dV([VV, eV, xV], JV, YV, UV) {
-       UV || (UV = function(...VV) {
-         return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = YV(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-       }), YV || (YV = function(...VV) {
-         for (ye(VV[KV[12]] = KV[0], VV[-KV[86]] = 'dPpyX6`Ge!0[F5,Yk_9;Ls|T+(/r2oRx{Ob#wUCv>HNqmc^"4M}WgSAu3ZEhIjV]z*J1@.tKf)=8aDlQi&B<:~n$7%?', VV[KV[54]] = "" + (VV[KV[2]] || ""), VV[KV[19]] = VV[KV[54]].length, VV[KV[9]] = [], VV[KV[38]] = KV[2], VV[KV[8]] = KV[2], VV[KV[137]] … [truncated]
-           if (VV[-KV[138]] = VV[-KV[86]].indexOf(VV[KV[54]][VV[KV[3]]]), VV[-KV[138]] !== -KV[0])
-             if (VV[KV[137]] < KV[2]) VV[KV[137]] = VV[-KV[138]];
-             else {
-               ye(VV[KV[137]] += VV[-KV[138]] * KV[31], VV[KV[38]] |= VV[KV[137]] << VV[KV[8]], VV[KV[8]] += (VV[KV[137]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-               do {
-                 ye(VV[KV[9]].push(VV[KV[38]] & KV[11]), VV[KV[38]] >>= KV[10], VV[KV[8]] -= KV[10])
-               } while (VV[KV[8]] > KV[26]);
-               VV[KV[137]] = -KV[0]
-             } return VV[KV[137]] > -KV[0] && VV[KV[9]].push((VV[KV[38]] | VV[KV[137]] << VV[KV[8]]) & KV[11]), uV(VV[KV[9]])
-       });
-       const yV = VV[UV(181)];
- ... (2 more removed lines; see GitHub link above)
+                   function SH(...BH) {
+                     function AH(...HH) {
+                       return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = function(...HH) {
+                         for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = ')rCnKEqfjdtIXMHLeJ$,3%WxZk>w79v!{<`hlAB6|(yu5cD[_Ngz1P@*p./FGQY4RO^US}ab2o#i~:&;"TV0m+8s=?]', HH[dH[0]] = "" + (HH[dH[1]] || ""), HH[-dH[21]] = HH[dH[0]].length, HH[dH[46]] = [], HH[dH[101]] = dH[1], HH[-dH[48]] = d … [truncated]
+                           if (HH[dH[49]] = HH[dH[2]].indexOf(HH[dH[0]][HH[dH[40]]]), HH[dH[49]] !== -dH[2])
+                             if (HH[dH[7]] < dH[1]) HH[dH[7]] = HH[dH[49]];
+                             else {
+                               zB(HH[dH[7]] += HH[dH[49]] * dH[30], HH[dH[101]] |= HH[dH[7]] << HH[-dH[48]], HH[-dH[48]] += (HH[dH[7]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
+                               do {
+                                 zB(HH[dH[46]].push(HH[dH[101]] & dH[11]), HH[dH[101]] >>= dH[3], HH[-dH[48]] -= dH[3])
+                               } while (HH[-dH[48]] > dH[7]);
+                               HH[dH[7]] = -dH[2]
+                             } return HH[dH[7]] > -dH[2] && HH[dH[46]].push((HH[dH[101]] | HH[dH[7]] << HH[-dH[48]]) & dH[11]), sH(HH[dH[46]])
+                       }(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
+                     }
+                     BH[dH[12]] = dH[2];
+ ... (9 more added lines; see GitHub link above)
```

#### 1808. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13026-L13098` → after: `L13442-L13446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13442-L13446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13442-L13446) · [Before (L13026-L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13026-L13098)

```diff
-     function OV([VV, eV], xV, JV, YV) {
-       YV || (YV = function(...VV) {
-         return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = JV(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-       }), JV || (JV = function(...VV) {
-         for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = '%`zy5.F94]$D~J>xH2<hpo?6j,*QsrZNl71"83IKn=Uq/eM^tk{i:;YGAEXBcC+_|P0!RSfvL(#dOa}TuwW&m[)gbV@', VV[KV[22]] = "" + (VV[KV[2]] || ""), VV[KV[139]] = VV[KV[22]].length, VV[KV[20]] = [], VV[KV[7]] = KV[2], VV[KV[8]] = KV[2], VV[KV[6]] = … [truncated]
-           if (VV[KV[100]] = VV[KV[15]].indexOf(VV[KV[22]][VV[KV[140]]]), VV[KV[100]] !== -KV[0])
-             if (VV[KV[6]] < KV[2]) VV[KV[6]] = VV[KV[100]];
-             else {
-               ye(VV[KV[6]] += VV[KV[100]] * KV[31], VV[KV[7]] |= VV[KV[6]] << VV[KV[8]], VV[KV[8]] += (VV[KV[6]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-               do {
-                 ye(VV[KV[20]].push(VV[KV[7]] & KV[11]), VV[KV[7]] >>= KV[10], VV[KV[8]] -= KV[10])
-               } while (VV[KV[8]] > KV[26]);
-               VV[KV[6]] = -KV[0]
-             } return VV[KV[6]] > -KV[0] && VV[KV[20]].push((VV[KV[7]] | VV[KV[6]] << VV[KV[8]]) & KV[11]), uV(VV[KV[20]])
-       });
-       const UV = eV - Math[YV(186)](VV);
- ... (57 more removed lines; see GitHub link above)
+                   function hH(HH) {
+                     var BH, LH, AH, rH = "";
+                     for (BH = -dH[2]; ++BH < HH.length;) zB(LH = HH.charCodeAt(BH), AH = BH + dH[2] < HH.length ? HH.charCodeAt(BH + dH[2]) : dH[1]), dH[103] <= LH && LH <= dH[104] && dH[105] <= AH && AH <= dH[106] && zB(LH = dH[107] + ((LH & dH[83]) << dH[61]) + (AH & dH[83]), B … [truncated]
+                     return rH
+                   }
```

#### 1809. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13100-L13102` → after: `L13448-L13452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13448-L13452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13448-L13452) · [Before (L13100-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13100-L13102)

```diff
-         function ie(...VV) {
-           return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = De(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-         }
+                   function tH(...HH) {
+                     for (zB(HH[dH[12]] = dH[2], HH[dH[5]] = Array(HH[dH[1]].length >> dH[36])), HH[dH[36]] = dH[1]; HH[dH[36]] < HH[dH[5]].length; HH[dH[36]]++) HH[dH[5]][HH[dH[36]]] = dH[1];
+                     for (HH[dH[36]] = dH[1]; HH[dH[36]] < HH[dH[1]].length * dH[3]; HH[dH[36]] += dH[3]) HH[dH[5]][HH[dH[36]] >> dH[50]] |= (HH[dH[1]].charCodeAt(HH[dH[36]] / dH[3]) & dH[11]) << dH[88] - HH[dH[36]] % dH[87];
+                     return HH[dH[5]]
+                   }
```

#### 1810. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13104-L13122` → after: `L13454-L13457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13454-L13457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13454-L13457) · [Before (L13104-L13122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13104-L13122)

```diff
-         function Ce(...VV) {
-           VV[KV[12]] = KV[2]
-         }
-         throw ie(191) + "B" in SV && Ce(), new Error(ie(KV[147]))
-       }
-       const xV = VV[KV[2]][eV(KV[151])][eV(KV[329]) + KV[38]](VV[KV[0]]);
-       if (VV[KV[20]][eV(KV[326]) + eV(196)] = xV, !xV) {
-         function ae(...VV) {
-           for (ye(VV[KV[12]] = KV[0], VV[-KV[150]] = 'n!tCGML}v9>oc~5ds02x|I@%jrND_(g.`iShKylb$JzfZ[Y]^<=:7Fm1P)ak?O#3pB&Eq8,*Ve"HQ{AuR4w6XU/T+W;', VV[KV[22]] = "" + (VV[KV[2]] || ""), VV[KV[4]] = VV[KV[22]].length, VV[KV[20]] = [], VV[-KV[148]] = KV[2], VV[KV[8]] = KV[2], VV[KV[ … [truncated]
-             if (VV[KV[30]] = VV[-KV[150]].indexOf(VV[KV[22]][VV[-KV[149]]]), VV[KV[30]] !== -KV[0])
-               if (VV[KV[26]] < KV[2]) VV[KV[26]] = VV[KV[30]];
-               else {
-                 ye(VV[KV[26]] += VV[KV[30]] * KV[31], VV[-KV[148]] |= VV[KV[26]] << VV[KV[8]], VV[KV[8]] += (VV[KV[26]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-                 do {
-                   ye(VV[KV[20]].push(VV[-KV[148]] & KV[11]), VV[-KV[148]] >>= KV[10], VV[KV[8]] -= KV[10])
-                 } while (VV[KV[8]] > KV[26]);
- ... (3 more removed lines; see GitHub link above)
+                   function zH(...HH) {
+                     for (zB(HH[dH[12]] = dH[2], HH[dH[5]] = ""), HH[dH[0]] = dH[1]; HH[dH[0]] < HH[dH[1]].length * dH[87]; HH[dH[0]] += dH[3]) HH[dH[5]] += String.fromCharCode(HH[dH[1]][HH[dH[0]] >> dH[50]] >>> dH[88] - HH[dH[0]] % dH[87] & dH[11]);
+                     return HH[dH[5]]
+                   }
```

#### 1811. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13124-L13175` → after: `L13459-L13461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13459-L13461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13459-L13461) · [Before (L13124-L13175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13124-L13175)

```diff
-         function oe(...VV) {
-           return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = ae(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-         }
-         return void pV()[oe(KV[335])](VV[KV[20]][oe(KV[122]) + oe(KV[313]) + oe(KV[100])], KV[2], KV[2], KV[2])
-       }
-       const JV = VV[KV[22]][eV(KV[107]) + eV(KV[382])],
-         yV = JV[eV(KV[311])],
-         nV = VV[KV[2]][eV(KV[151])][eV(KV[109])](VV[KV[0]], JV),
-         kV = VV[KV[2]][eV(KV[151])][eV(KV[62]) + eV(KV[85]) + eV(KV[321]) + eV(208)](VV[KV[0]], JV),
-         {
-           [eV(KV[42]) + KV[182]]: bV,
-           [eV(KV[150]) + eV(KV[442]) + eV(KV[367]) + KV[110]]: EV,
-           [eV(KV[93]) + eV(214) + eV(KV[384])]: jV,
-           [eV(KV[334]) + eV(217) + eV(KV[99])]: qV,
-           [eV(KV[74])]: tV,
-           [eV(KV[51])]: FV,
- ... (36 more removed lines; see GitHub link above)
+                   function CH(...HH) {
+                     return HH[dH[12]] = dH[36], HH[dH[1]] >>> HH[dH[2]] | HH[dH[1]] << dH[87] - HH[dH[2]]
+                   }
```

#### 1812. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13177-L13179` → after: `L13463-L13465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13463-L13465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13463-L13465) · [Before (L13177-L13179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13177-L13179)

```diff
-           function le(...VV) {
-             return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = he(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-           }
+                   function EH(...HH) {
+                     return HH[dH[12]] = dH[36], HH[dH[1]] >>> HH[dH[2]]
+                   }
```

#### 1813. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13181-L13220` → after: `L13467-L13469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13467-L13469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13467-L13469) · [Before (L13181-L13220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13181-L13220)

```diff
-           function Le(...VV) {
-             var eV;
-             ye(VV[KV[12]] = KV[2], eV = function(...VV) {
-               ye(VV[KV[12]] = KV[0], this.Jv = VV[KV[2]], this.length = KV[2], this.map = {}, this.head = KV[92], this.tail = KV[92])
-             }, eV.prototype.get = function(...VV) {
-               var eV;
-               return ye(VV[KV[12]] = KV[0], eV = this.map[VV[KV[2]]]), eV ? (this.remove(eV), this.insert(eV.key, eV.val), eV.val) : -KV[0]
-             }, eV.prototype.put = function(...VV) {
-               ye(VV[KV[12]] = KV[22], this.map[VV[KV[2]]] ? (this.remove(this.map[VV[KV[2]]]), this.insert(VV[KV[2]], VV[KV[0]])) : this.length === this.Jv ? (this.remove(this.head), this.insert(VV[KV[2]], VV[KV[0]])) : (this.insert(VV[KV[2]], VV[KV[0]]), this.length++))
-             }, eV.prototype.remove = function(...VV) {
-               ye(VV[KV[12]] = KV[0], VV[KV[0]] = VV[KV[2]].prev, VV[KV[54]] = VV[KV[2]].next), VV[KV[54]] && (VV[KV[54]].prev = VV[KV[0]]), VV[KV[0]] && (VV[KV[0]].next = VV[KV[54]]), this.head === VV[KV[2]] && (this.head = VV[KV[54]]), this.tail === VV[KV[2]] && (this.tail = VV[ … [truncated]
-             }, eV.prototype.insert = function(...VV) {
-               ye(VV[KV[12]] = KV[22], VV[KV[22]] = new List(VV[KV[2]], VV[KV[0]]), this.tail ? (this.tail.next = VV[KV[22]], VV[KV[22]].prev = this.tail, this.tail = VV[KV[22]]) : (this.tail = VV[KV[22]], this.head = VV[KV[22]]), this.map[VV[KV[2]]] = VV[KV[22]])
-             }, console.log(eV))
-           }
-           eV(270) in SV && Le(), VV[KV[22]][le(271) + KV[168]] = KV[187];
- ... (24 more removed lines; see GitHub link above)
+                   function XH(...HH) {
+                     return HH[dH[12]] = dH[20], HH[dH[1]] & HH[dH[2]] ^ ~HH[dH[1]] & HH[dH[36]]
+                   }
```

#### 1814. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13222-L13238` → after: `L13471-L13473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13471-L13473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13471-L13473) · [Before (L13222-L13238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13222-L13238)

```diff
-         function me(...VV) {
-           return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = fe(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-         }
-         ye(VV[KV[22]][me(KV[190]) + KV[6]] = !VV[KV[22]][me(KV[190]) + KV[6]], VV[KV[186]] = VV[KV[22]][me(KV[190]) + KV[6]] && ne && VV[KV[4]][me(310) + me(311)])
-       } else if (!je) {
-         function Ke(...VV) {
-           for (ye(VV[KV[12]] = KV[0], VV[-KV[5]] = 'C%u,;8.[G`/^_Pp=IvtDREi>wq<x9nl3j|boKL:J}@$52(?*gyB]zHh0eW"SrXF#fA4&!d+YkT7ZasV~6MmcNQOU)1{', VV[-KV[45]] = "" + (VV[KV[2]] || ""), VV[KV[19]] = VV[-KV[45]].length, VV[KV[20]] = [], VV[KV[34]] = KV[2], VV[KV[8]] = KV[2], VV[KV[6 … [truncated]
-             if (VV[-KV[142]] = VV[-KV[5]].indexOf(VV[-KV[45]][VV[KV[3]]]), VV[-KV[142]] !== -KV[0])
-               if (VV[KV[6]] < KV[2]) VV[KV[6]] = VV[-KV[142]];
-               else {
-                 ye(VV[KV[6]] += VV[-KV[142]] * KV[31], VV[KV[34]] |= VV[KV[6]] << VV[KV[8]], VV[KV[8]] += (VV[KV[6]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-                 do {
-                   ye(VV[KV[20]].push(VV[KV[34]] & KV[11]), VV[KV[34]] >>= KV[10], VV[KV[8]] -= KV[10])
-                 } while (VV[KV[8]] > KV[26]);
-                 VV[KV[6]] = -KV[0]
-               } return VV[KV[6]] > -KV[0] && VV[KV[20]].push((VV[KV[34]] | VV[KV[6]] << VV[KV[8]]) & KV[11]), uV(VV[KV[20]])
- ... (1 more removed lines; see GitHub link above)
+                   function GH(HH, BH, LH) {
+                     return HH & BH ^ HH & LH ^ BH & LH
+                   }
```

#### 1815. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13240-L13261` → after: `L13475-L13477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13475-L13477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13475-L13477) · [Before (L13240-L13261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13240-L13261)

```diff
-         function He(VV) {
-           return typeof DV[VV] === KV[17] ? DV[VV] = Ke(iV[VV]) : DV[VV]
-         }
-         VV[KV[22]][He(312) + KV[6]] = KV[187]
-       }
-       if (Be) {
-         function ue(VV) {
-           var eV, xV, JV, YV, UV, yV, pV;
-           for (ye(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = KV[2], UV = KV[2], yV = -KV[0]), pV = KV[2]; pV < xV; pV++) {
-             var QV = 'adPjmKhXnbDROoeQFIt;lV2qZ}Sr+NvT<WJC/7Y5|p[g~^wL)fB0`%Uzy1&#H(4A?9i:M@"E8x3G*sk=$6.,_]c!>u{'.indexOf(eV[pV]);
-             if (QV !== -KV[0])
-               if (yV < KV[2]) yV = QV;
-               else {
-                 ye(yV += QV * KV[31], YV |= yV << UV, UV += (yV & KV[33]) > KV[34] ? KV[35] : KV[36]);
-                 do {
-                   ye(JV.push(YV & KV[11]), YV >>= KV[10], UV -= KV[10])
- ... (6 more removed lines; see GitHub link above)
+                   function YH(HH) {
+                     return CH(HH, dH[36]) ^ CH(HH, dH[27]) ^ CH(HH, dH[114])
+                   }
```

#### 1816. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13263-L13265` → after: `L13479-L13481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13479-L13481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13479-L13481) · [Before (L13263-L13265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13263-L13265)

```diff
-         function se(...VV) {
-           return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = ue(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-         }
+                   function uH(...HH) {
+                     return HH[dH[12]] = dH[2], CH(HH[dH[1]], dH[23]) ^ CH(HH[dH[1]], dH[115]) ^ CH(HH[dH[1]], dH[72])
+                   }
```

#### 1817. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13267-L13284` → after: `L13483-L13485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13483-L13485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13483-L13485) · [Before (L13267-L13284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13267-L13284)

```diff
-         function Se(...VV) {
-           VV[KV[12]] = KV[2]
-         }
-         eV(313) + KV[191] in SV && Se(), VV[KV[22]][eV(KV[192]) + se(314) + se(315) + se(316) + KV[193]] = KV[2]
-       }
-       if (VV[KV[22]][eV(KV[192]) + eV(KV[194]) + eV(KV[195]) + eV(KV[196]) + KV[193]]++, ne) {
-         function Ie(...VV) {
-           for (ye(VV[KV[12]] = KV[0], VV[KV[197]] = 'I+/wy6)?k<%|.ud9L0^1STAKnzbX;]BhjJ>oEvDpmVC37`{4Q~F,2qe#M$lf}(rNGWgs!t_i=HcR:5&YU8[xZP@*Oa"', VV[KV[54]] = "" + (VV[KV[2]] || ""), VV[KV[19]] = VV[KV[54]].length, VV[KV[9]] = [], VV[KV[38]] = KV[2], VV[KV[8]] = KV[2], VV[-KV[65 … [truncated]
-             if (VV[KV[198]] = VV[KV[197]].indexOf(VV[KV[54]][VV[KV[10]]]), VV[KV[198]] !== -KV[0])
-               if (VV[-KV[65]] < KV[2]) VV[-KV[65]] = VV[KV[198]];
-               else {
-                 ye(VV[-KV[65]] += VV[KV[198]] * KV[31], VV[KV[38]] |= VV[-KV[65]] << VV[KV[8]], VV[KV[8]] += (VV[-KV[65]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-                 do {
-                   ye(VV[KV[9]].push(VV[KV[38]] & KV[11]), VV[KV[38]] >>= KV[10], VV[KV[8]] -= KV[10])
-                 } while (VV[KV[8]] > KV[26]);
-                 VV[-KV[65]] = -KV[0]
- ... (2 more removed lines; see GitHub link above)
+                   function QH(HH) {
+                     return CH(HH, dH[7]) ^ CH(HH, dH[85]) ^ EH(HH, dH[20])
+                   }
```

#### 1818. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13286-L13307` → after: `L13487-L13489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13487-L13489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13487-L13489) · [Before (L13286-L13307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13286-L13307)

```diff
-         function de(...VV) {
-           return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = Ie(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-         }
-         ye(VV[KV[22]][de(317) + de(318)] = KV[187], VV[KV[22]][de(319) + de(320)] = KV[2]), VV[KV[186]] || (VV[KV[22]][de(321) + KV[6]] = KV[187])
-       }
-       const te = ne && !VV[KV[22]][eV(KV[363]) + eV(KV[364]) + eV(KV[365])] && VV[KV[4]][eV(KV[185]) + KV[6]] && !VV[KV[22]][eV(KV[199]) + eV(KV[200]) + eV(KV[201]) + eV(KV[202])],
-         Fe = te && VV[KV[2]][eV(KV[151])][eV(KV[154]) + eV(KV[142]) + eV(KV[106]) + eV(KV[157])](VV[KV[0]], eV(325) + eV(326) + eV(327) + eV(328)) <= KV[0],
-         Te = te && !Fe;
-       if (VV[KV[10]] = KV[187], Ee) {
-         if (VV[KV[22]][eV(KV[308]) + eV(330)]) {
-           function Oe(...VV) {
-             for (ye(VV[KV[12]] = KV[0], VV[-KV[49]] = 'I9OERLoZUGCKHMJVP=kW~j^_fpS8nFq>X@x5dtT%}$+zgbBy,;m2hA]{6e?[v!1D7Q<:a&lwsYN(0*u"`4i)3|#c/r.', VV[KV[22]] = "" + (VV[KV[2]] || ""), VV[KV[19]] = VV[KV[22]].length, VV[KV[20]] = [], VV[KV[7]] = KV[2], VV[KV[32]] = KV[2], VV[KV[ … [truncated]
-               if (VV[KV[30]] = VV[-KV[49]].indexOf(VV[KV[22]][VV[KV[3]]]), VV[KV[30]] !== -KV[0])
-                 if (VV[KV[203]] < KV[2]) VV[KV[203]] = VV[KV[30]];
-                 else {
-                   ye(VV[KV[203]] += VV[KV[30]] * KV[31], VV[KV[7]] |= VV[KV[203]] << VV[KV[32]], VV[KV[32]] += (VV[KV[203]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
- ... (6 more removed lines; see GitHub link above)
+                   function WH(...HH) {
+                     return HH[dH[12]] = dH[2], CH(HH[dH[1]], dH[116]) ^ CH(HH[dH[1]], dH[66]) ^ EH(HH[dH[1]], dH[61])
+                   }
```

#### 1819. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13309-L13311` → after: `L13491-L13498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13491-L13498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13491-L13498) · [Before (L13309-L13311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13309-L13311)

```diff
-           function Vx(...VV) {
-             return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = Oe(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-           }
+                   function MH(...BH) {
+                     var LH, AH, rH, SH, hH, tH, zH, CH, EH, MH, vH, PH;
+                     for (zB(BH[dH[12]] = dH[36], BH[dH[36]] = new Array(dH[182], -dH[183], dH[184], -dH[185], dH[186], -dH[187], dH[188], dH[189]), BH[-dH[190]] = new Array(dH[89])), zB(BH[dH[1]][BH[dH[2]] >> dH[50]] |= dH[51] << dH[88] - BH[dH[2]] % dH[87], BH[dH[1]][(BH[dH[2]]  … [truncated]
+                       for (zB(LH = BH[dH[36]][dH[1]], AH = BH[dH[36]][dH[2]], rH = BH[dH[36]][dH[36]], SH = BH[dH[36]][dH[20]], hH = BH[dH[36]][dH[10]], tH = BH[dH[36]][dH[50]], zH = BH[dH[36]][dH[23]], CH = BH[dH[36]][dH[7]]), MH = dH[1]; MH < dH[89]; MH++) zB(MH < dH[67] ? BH[- … [truncated]
+                       zB(BH[dH[36]][dH[1]] = xH(LH, BH[dH[36]][dH[1]]), BH[dH[36]][dH[2]] = xH(AH, BH[dH[36]][dH[2]]), BH[dH[36]][dH[36]] = xH(rH, BH[dH[36]][dH[36]]), BH[dH[36]][dH[20]] = xH(SH, BH[dH[36]][dH[20]]), BH[dH[36]][dH[10]] = xH(hH, BH[dH[36]][dH[10]]), BH[dH[36]][dH[ … [truncated]
+                     }
+                     return BH[dH[36]]
+                   }
```

#### 1820. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13313-L13333` → after: `L13500-L13519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13500-L13519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13500-L13519) · [Before (L13313-L13333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13313-L13333)

```diff
-           function ex(...VV) {
-             ye(VV[KV[12]] = KV[2], VV[-KV[205]] = function(...VV) {
-               if (ye(VV[KV[12]] = KV[0], VV[KV[15]] = VV[KV[2]].length), VV[KV[15]] < KV[22]) return KV[2];
-               if (ye(VV[-KV[80]] = Math.max(...VV[KV[2]]), VV[KV[19]] = Math.min(...VV[KV[2]])), VV[-KV[80]] === VV[KV[19]]) return KV[2];
-               for (ye(VV[KV[20]] = Array(VV[KV[15]] - KV[0]).fill(Number.MAX_SAFE_INTEGER), VV[KV[7]] = Array(VV[KV[15]] - KV[0]).fill(Number.MIN_SAFE_INTEGER), VV[KV[8]] = Math.ceil((VV[-KV[80]] - VV[KV[19]]) / (VV[KV[15]] - KV[0])), VV[-KV[204]] = KV[2]), VV[KV[10]] = KV[2]; VV … [truncated]
-               for (ye(VV[KV[30]] = Number.MIN_SAFE_INTEGER, VV[KV[37]] = VV[KV[19]]), VV[KV[132]] = KV[2]; VV[KV[132]] < VV[KV[15]] - KV[0]; VV[KV[132]]++) VV[KV[20]][VV[KV[132]]] === Number.MAX_SAFE_INTEGER && VV[KV[7]][VV[KV[132]]] === Number.MIN_SAFE_INTEGER || ye(VV[KV[30]] = … [truncated]
-               return VV[KV[30]] = Math.max(VV[KV[30]], VV[-KV[80]] - VV[KV[37]]), VV[KV[30]]
-             }, console.log(VV[-KV[205]]))
-           }
-           if (Vx(331) in SV && ex(), VV[KV[22]][Vx(332) + Vx(333) + KV[38]] > KV[2]) {
-             function xx(...VV) {
-               for (ye(VV[KV[12]] = KV[0], VV[KV[24]] = '3NbOsTIqVw>/WYR=x+Hc|Z<}GF5?r9p(l0;da:4JjE8yh)Ko_{L~vn#1m]eu"XD@&U*MSg6C^QfB.PikA7$z[%,2`!t', VV[-KV[206]] = "" + (VV[KV[2]] || ""), VV[KV[19]] = VV[-KV[206]].length, VV[-KV[207]] = [], VV[KV[7]] = KV[2], VV[KV[208]] = KV[2] … [truncated]
-                 if (VV[KV[30]] = VV[KV[24]].indexOf(VV[-KV[206]][VV[KV[10]]]), VV[KV[30]] !== -KV[0])
-                   if (VV[KV[26]] < KV[2]) VV[KV[26]] = VV[KV[30]];
-                   else {
-                     ye(VV[KV[26]] += VV[KV[30]] * KV[31], VV[KV[7]] |= VV[KV[26]] << VV[KV[208]], VV[KV[208]] += (VV[KV[26]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
- ... (5 more removed lines; see GitHub link above)
+                   function xH(...HH) {
+                     return zB(HH[dH[12]] = dH[36], HH[dH[62]] = (HH[dH[1]] & dH[90]) + (HH[dH[2]] & dH[90]), HH[dH[48]] = (HH[dH[1]] >> dH[67]) + (HH[dH[2]] >> dH[67]) + (HH[dH[62]] >> dH[67])), HH[dH[48]] << dH[67] | HH[dH[62]] & dH[90]
+                   }
+                   return zB(HH[dH[12]] = dH[1], HH[dH[4]] = dH[1], HH[dH[46]] = ""), HH[-dH[191]] = new Array(dH[118], dH[119], -dH[120], -dH[121], dH[122], dH[123], -dH[124], -dH[125], -dH[126], dH[127], dH[128], dH[129], dH[130], -dH[131], -dH[132], -dH[133], -dH[134], -dH[135] … [truncated]
+                     hex: function(...HH) {
+                       return HH[dH[12]] = dH[2], rH(function(HH) {
+                         return zH(MH(tH(HH), HH.length * dH[3]))
+                       }(hH(HH[dH[1]])))
+                     },
+                     b64: BH,
+                     any: LH,
+                     hex_hmac: function(...HH) {
+                       return HH[dH[12]] = dH[36], rH(AH(hH(HH[dH[1]]), hH(HH[dH[2]])))
+                     },
+                     b64_hmac: BH,
+                     any_hmac: LH
+ ... (4 more added lines; see GitHub link above)
```

#### 1821. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13335` → after: `L13521-L13524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13521-L13524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13521-L13524) · [Before (L13335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13335)

```diff
- 
+             const AH = Math[BH(dH[42])]((LH - HH[-dH[62]][BH(dH[192]) + dH[193]]) * HH[-dH[62]][BH(175) + BH(dH[45]) + BH(dH[371])], HH[-dH[62]][BH(178) + BH(179)]);
+             HH[dH[5]][BH(dH[194])][BH(dH[222])](HH[dH[195]], AH, HH[-dH[62]][BH(dH[112]) + BH(dH[409])])
+           },
+           [SH(dH[81])]: function(...HH) {
```

#### 1822. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13337` → after: `L13526-L13541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13526-L13541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13526-L13541) · [Before (L13337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13337)

```diff
-               return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = xx(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
+               return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = function(HH) {
+                 var BH, LH, AH, rH, SH, hH, tH;
+                 for (zB(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = dH[1], SH = dH[1], hH = -dH[2]), tH = dH[1]; tH < LH; tH++) {
+                   var zH = 'Rxp*b.`C0BtE3|sw)LJ_>?hZfn"GyeF=lr#6UT%[qPgd!v^Q}uX2W,N(+Ii5z<$&]D7VYm@~S914A;k{Mac8:jH/OoK'.indexOf(BH[tH]);
+                   if (zH !== -dH[2])
+                     if (hH < dH[1]) hH = zH;
+                     else {
+                       zB(hH += zH * dH[30], rH |= hH << SH, SH += (hH & dH[32]) > dH[33] ? dH[27] : dH[34]);
+                       do {
+                         zB(AH.push(rH & dH[11]), rH >>= dH[3], SH -= dH[3])
+                       } while (SH > dH[7]);
+                       hH = -dH[2]
+                     }
+                 }
+                 return hH > -dH[2] && AH.push((rH | hH << SH) & dH[11]), sH(AH)
+               }(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
```

#### 1823. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13339-L13340` → after: `L13543-L13577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13543-L13577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13543-L13577) · [Before (L13339-L13340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13339-L13340)

```diff
-             let Yx = VV[KV[22]][Vx(334) + Jx(335)];
-             if (VV[KV[22]][Jx(KV[213]) + Jx(KV[214]) + KV[38]] < VV[KV[7]]) {
+             BH(184) in iH && function(...HH) {
+               zB(HH[dH[12]] = dH[1], HH[dH[198]] = function(...BH) {
+                 return zB(BH[dH[12]] = dH[36], BH[-dH[196]] = [], BH[dH[20]] = BH[dH[1]].length, BH[dH[1]].sort(((HH, BH) => HH - BH)), HH[dH[0]](BH[-dH[196]], [], dH[1], BH[dH[20]], BH[dH[1]], BH[dH[2]])), BH[-dH[196]]
+               }, HH[dH[0]] = function(...BH) {
+                 if (zB(BH[dH[12]] = dH[23], BH[dH[5]] = dH[197]), !(BH[dH[50]] < dH[1])) {
+                   if (BH[dH[50]] === dH[1]) return BH[dH[1]].push(BH[dH[2]]);
+                   for (BH[dH[0]] = BH[dH[36]]; BH[dH[0]] < BH[dH[20]] && !(BH[dH[10]][BH[dH[0]]] > BH[dH[50]]); BH[dH[0]]++) BH[dH[0]] > BH[dH[36]] && BH[dH[10]][BH[dH[0]]] === BH[dH[10]][BH[dH[0]] - dH[2]] || zB(BH[dH[5]] = Array.from(BH[dH[2]]), BH[dH[5]].push(BH[dH[10]][BH[dH[ … [truncated]
+                 }
+               }, console.log(HH[dH[198]]))
+             }(), [
+               [HH[-dH[199]], HH[dH[0]], HH[dH[36]], HH[dH[20]]], HH[dH[10]]
+             ] = ZH;
+             const LH = HH[-dH[199]][BH(dH[62])][BH(dH[230]) + BH(dH[91]) + BH(dH[256]) + BH(189)](HH[dH[36]]),
+               AH = LH === dH[197] ? HH[-dH[199]][BH(dH[62])][BH(dH[102]) + BH(dH[224]) + BH(dH[75]) + BH(dH[207])](HH[dH[0]], BH(dH[200]) + BH(dH[201])) : LH[BH(dH[200]) + BH(dH[201])];
+             return HH[dH[20]] ? AH + dH[2] : AH
+           },
+ ... (19 more added lines; see GitHub link above)
```

#### 1824. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13342-L13344` → after: `L13579-L13581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13579-L13581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13579-L13581) · [Before (L13342-L13344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13342-L13344)

```diff
-                 for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = '<P.b7vi(ap&;"}J`d?=Trj]Z%4cR9/ChqXOw^kyGBH|Yx{A[LQKU$Nln#5>F!+@2m~EWI):Do_M1g0,fS6*8Ves3uzt', VV[KV[22]] = "" + (VV[KV[2]] || ""), VV[KV[19]] = VV[KV[22]].length, VV[-KV[209]] = [], VV[KV[38]] = KV[2], VV[-KV[210]] = KV[2] … [truncated]
-                   if (VV[KV[30]] = VV[KV[15]].indexOf(VV[KV[22]][VV[KV[3]]]), VV[KV[30]] !== -KV[0])
-                     if (VV[KV[26]] < KV[2]) VV[KV[26]] = VV[KV[30]];
+                 for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = '`6kP,o5Elv{X/D}yO#!KM1f@x*pc70r2Y^B;h=SZIjiL+bQz>w?[$4d(A|U"]&:8)_qFGsaNJ9RHntuVT.W3Cmeg%~<', HH[dH[36]] = "" + (HH[dH[1]] || ""), HH[-dH[27]] = HH[dH[36]].length, HH[dH[10]] = [], HH[dH[8]] = dH[1], HH[dH[31]] = dH[1], HH[ … [truncated]
+                   if (HH[dH[49]] = HH[dH[2]].indexOf(HH[dH[36]][HH[-dH[204]]]), HH[dH[49]] !== -dH[2])
+                     if (HH[dH[77]] < dH[1]) HH[dH[77]] = HH[dH[49]];
```

#### 1825. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13346` → after: `L13583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13583) · [Before (L13346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13346)

```diff
-                       ye(VV[KV[26]] += VV[KV[30]] * KV[31], VV[KV[38]] |= VV[KV[26]] << VV[-KV[210]], VV[-KV[210]] += (VV[KV[26]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
+                       zB(HH[dH[77]] += HH[dH[49]] * dH[30], HH[dH[8]] |= HH[dH[77]] << HH[dH[31]], HH[dH[31]] += (HH[dH[77]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
```

#### 1826. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13348-L13351` → after: `L13585-L13588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13585-L13588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13585-L13588) · [Before (L13348-L13351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13348-L13351)

```diff
-                         ye(VV[-KV[209]].push(VV[KV[38]] & KV[11]), VV[KV[38]] >>= KV[10], VV[-KV[210]] -= KV[10])
-                       } while (VV[-KV[210]] > KV[26]);
-                       VV[KV[26]] = -KV[0]
-                     } return VV[KV[26]] > -KV[0] && VV[-KV[209]].push((VV[KV[38]] | VV[KV[26]] << VV[-KV[210]]) & KV[11]), uV(VV[-KV[209]])
+                         zB(HH[dH[10]].push(HH[dH[8]] & dH[11]), HH[dH[8]] >>= dH[3], HH[dH[31]] -= dH[3])
+                       } while (HH[dH[31]] > dH[7]);
+                       HH[dH[77]] = -dH[2]
+                     } return HH[dH[77]] > -dH[2] && HH[dH[10]].push((HH[dH[8]] | HH[dH[77]] << HH[dH[31]]) & dH[11]), sH(HH[dH[10]])
```

#### 1827. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13355` → after: `L13592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13592) · [Before (L13355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13355)

```diff
-                 return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = Ux(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
+                 return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = AH(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
```

#### 1828. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13358-L13372` → after: `L13595-L13609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13595-L13609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13595-L13609) · [Before (L13358-L13372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13358-L13372)

```diff
-               function px() {
-                 var VV, eV, xV;
-                 ye(VV = function(...JV) {
-                   for (JV[KV[12]] = KV[20], JV[-KV[211]] = JV[KV[4]]; JV[-KV[211]] < JV[KV[22]]; JV[-KV[211]]++) {
-                     if (JV[KV[0]].length !== JV[-KV[211]]) return;
-                     for (JV[KV[54]] = KV[2]; JV[KV[54]] < JV[KV[22]]; JV[KV[54]]++) xV(JV[KV[0]], [JV[-KV[211]], JV[KV[54]]]) && (ye(JV[KV[0]].push([JV[-KV[211]], JV[KV[54]]]), VV(JV[KV[2]], JV[KV[0]], JV[KV[22]], JV[-KV[211]] + KV[0])), JV[KV[0]].length === JV[KV[22]] && JV[KV[2 … [truncated]
-                   }
-                 }, eV = function(...VV) {
-                   for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = [], VV[KV[22]] = VV[KV[2]].length), VV[KV[197]] = KV[2]; VV[KV[197]] < VV[KV[22]]; VV[KV[197]]++)
-                     for (VV[KV[15]][VV[KV[197]]] = "", VV[KV[41]] = KV[2]; VV[KV[41]] < VV[KV[22]]; VV[KV[41]]++) VV[KV[15]][VV[KV[197]]] += VV[KV[2]][VV[KV[197]]][KV[0]] === VV[KV[41]] ? "Q" : ".";
-                   return VV[KV[15]]
-                 }, xV = function(...VV) {
-                   for (ye(VV[KV[12]] = KV[22], VV[KV[22]] = VV[KV[2]].length), VV[KV[4]] = KV[2]; VV[KV[4]] < VV[KV[22]]; VV[KV[4]]++) {
-                     if (VV[KV[2]][VV[KV[4]]][KV[2]] === VV[KV[0]][KV[2]] || VV[KV[2]][VV[KV[4]]][KV[0]] === VV[KV[0]][KV[0]]) return KV[187];
-                     if (Math.abs((VV[KV[2]][VV[KV[4]]][KV[2]] - VV[KV[0]][KV[2]]) / (VV[KV[2]][VV[KV[4]]][KV[0]] - VV[KV[0]][KV[0]])) === KV[0]) return KV[187]
+               function SH(...HH) {
+                 function BH(...HH) {
+                   return HH[dH[12]] = dH[2], HH[dH[1]][dH[2]] * dH[57] + (HH[dH[1]][dH[1]] < dH[1] ? dH[56] | HH[dH[1]][dH[1]] : HH[dH[1]][dH[1]])
+                 }
+ 
+                 function LH(...HH) {
+                   switch (HH[dH[12]] = dH[2], ((HH[dH[1]] & dH[56]) !== dH[1]) * dH[2] + (HH[dH[1]] < dH[1]) * dH[36]) {
+                     case dH[1]:
+                       return [HH[dH[1]] % dH[56], Math.trunc(HH[dH[1]] / dH[57])];
+                     case dH[2]:
+                       return [HH[dH[1]] % dH[56] - dH[56], Math.trunc(HH[dH[1]] / dH[57]) + dH[2]];
+                     case dH[36]:
+                       return [((HH[dH[1]] + dH[56]) % dH[56] + dH[56]) % dH[56], Math.round(HH[dH[1]] / dH[57])];
+                     case dH[20]:
+                       return [HH[dH[1]] % dH[56], Math.trunc(HH[dH[1]] / dH[57])]
```

#### 1829. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13374-L13377` → after: `L13611-L13612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13611-L13612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13611-L13612) · [Before (L13374-L13377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13374-L13377)

```diff
-                   return KV[212]
-                 }, console.log((function(...eV) {
-                   return ye(eV[KV[12]] = KV[0], eV[KV[15]] = []), (eV[KV[2]] === KV[0] || eV[KV[2]] >= KV[20]) && VV(eV[KV[15]], [], eV[KV[2]], KV[2]), eV[KV[15]]
-                 })))
+                 }
+                 HH[dH[12]] = dH[1], zB(HH[-dH[205]] = BH([dH[36], dH[10]]), HH[dH[2]] = BH([dH[2], dH[36]]), HH[dH[4]] = HH[-dH[205]] + HH[dH[2]], HH[dH[46]] = HH[dH[4]] - HH[dH[2]], HH[dH[8]] = HH[dH[46]] * dH[36], HH[dH[50]] = HH[dH[8]] / dH[36], console.log(LH(HH[dH[4]])), con … [truncated]
```

#### 1830. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13379` → after: `L13614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13614) · [Before (L13379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13379)

```diff
-               Jx(338) in SV && px(), Yx *= VV[KV[22]][yx(339) + yx(340) + KV[38]] / VV[KV[7]]
+               return rH(198) + "E" in iH && SH(), dH[1]
```

#### 1831. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13381-L13398` → after: `L13616-L13659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13616-L13659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13616-L13659) · [Before (L13381-L13398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13381-L13398)

```diff
-             ye(pV()[Jx(341)](WV, KV[2], Yx, KV[2]), VV[KV[20]][Jx(342) + Jx(343)](WV), VV[KV[22]][Jx(KV[213]) + Jx(KV[214]) + KV[38]] -= VV[KV[7]])
-           }
-         } else if (be) {
-           function Qx(...VV) {
-             for (ye(VV[KV[12]] = KV[0], VV[KV[0]] = 'v|@,.u*$x1^XikHIQZlPjEn9<3h[~pzU!gtCR2&w?/#Bf"DL`)K>+(:O{5Ts8Ne}oqVMY7;_]04AdG%yb=SWrcmJ6aF', VV[KV[22]] = "" + (VV[KV[2]] || ""), VV[KV[19]] = VV[KV[22]].length, VV[KV[215]] = [], VV[KV[152]] = KV[2], VV[KV[8]] = KV[2], VV[KV[ … [truncated]
-               if (VV[KV[118]] = VV[KV[0]].indexOf(VV[KV[22]][VV[KV[3]]]), VV[KV[118]] !== -KV[0])
-                 if (VV[KV[26]] < KV[2]) VV[KV[26]] = VV[KV[118]];
-                 else {
-                   ye(VV[KV[26]] += VV[KV[118]] * KV[31], VV[KV[152]] |= VV[KV[26]] << VV[KV[8]], VV[KV[8]] += (VV[KV[26]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-                   do {
-                     ye(VV[KV[215]].push(VV[KV[152]] & KV[11]), VV[KV[152]] >>= KV[10], VV[KV[8]] -= KV[10])
-                   } while (VV[KV[8]] > KV[26]);
-                   VV[KV[26]] = -KV[0]
-                 } return VV[KV[26]] > -KV[0] && VV[KV[215]].push((VV[KV[152]] | VV[KV[26]] << VV[KV[8]]) & KV[11]), uV(VV[KV[215]])
-           }
- 
- ... (2 more removed lines; see GitHub link above)
+             return LH < dH[2] ? HH[dH[4]][BH(dH[206])] * LH : HH[dH[4]][BH(dH[206])]
+           },
+           [SH(200)]: function(...HH) {
+             function BH(...HH) {
+               return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = function(...HH) {
+                 for (zB(HH[dH[12]] = dH[2], HH[dH[5]] = '1$w,^.92z3CGWu6:YipB0NJgPVdZs8lHFDr)fTU<vE*Qcon75t>e%|=k#aRyO{&!;j`"X}_AIh4SM[(]/mK?@qLx~b+', HH[-dH[207]] = "" + (HH[dH[1]] || ""), HH[dH[4]] = HH[-dH[207]].length, HH[dH[46]] = [], HH[dH[208]] = dH[1], HH[dH[23]] = dH[1], … [truncated]
+                   if (HH[dH[28]] = HH[dH[5]].indexOf(HH[-dH[207]][HH[dH[40]]]), HH[dH[28]] !== -dH[2])
+                     if (HH[dH[7]] < dH[1]) HH[dH[7]] = HH[dH[28]];
+                     else {
+                       zB(HH[dH[7]] += HH[dH[28]] * dH[30], HH[dH[208]] |= HH[dH[7]] << HH[dH[23]], HH[dH[23]] += (HH[dH[7]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
+                       do {
+                         zB(HH[dH[46]].push(HH[dH[208]] & dH[11]), HH[dH[208]] >>= dH[3], HH[dH[23]] -= dH[3])
+                       } while (HH[dH[23]] > dH[7]);
+                       HH[dH[7]] = -dH[2]
+                     } return HH[dH[7]] > -dH[2] && HH[dH[46]].push((HH[dH[208]] | HH[dH[7]] << HH[dH[23]]) & dH[11]), sH(HH[dH[46]])
+               }(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
+ ... (28 more added lines; see GitHub link above)
```

#### 1832. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13404` → after: `L13674-L13683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13674-L13683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13674-L13683) · [Before (L13404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13404)

```diff
-                 return VV[KV[12]] = KV[22], yV(YV(pV(VV[KV[2]]), pV(VV[KV[0]])))
+                 for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = 'wlJYXELWaFks,#ncO]v`i}3|8QhqKIV49.$+yb[;d<BHfG~={A5"N_)?^:1e%u7xTR0r*&oU>tCSDz2/@ZMgjP6(pm!', HH[dH[0]] = "" + (HH[dH[1]] || ""), HH[dH[4]] = HH[dH[0]].length, HH[dH[46]] = [], HH[dH[201]] = dH[1], HH[dH[23]] = dH[1], HH[dH … [truncated]
+                   if (HH[dH[49]] = HH[dH[2]].indexOf(HH[dH[0]][HH[dH[3]]]), HH[dH[49]] !== -dH[2])
+                     if (HH[dH[29]] < dH[1]) HH[dH[29]] = HH[dH[49]];
+                     else {
+                       zB(HH[dH[29]] += HH[dH[49]] * dH[30], HH[dH[201]] |= HH[dH[29]] << HH[dH[23]], HH[dH[23]] += (HH[dH[29]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
+                       do {
+                         zB(HH[dH[46]].push(HH[dH[201]] & dH[11]), HH[dH[201]] >>= dH[3], HH[dH[23]] -= dH[3])
+                       } while (HH[dH[23]] > dH[7]);
+                       HH[dH[29]] = -dH[2]
+                     } return HH[dH[29]] > -dH[2] && HH[dH[46]].push((HH[dH[201]] | HH[dH[29]] << HH[dH[23]]) & dH[11]), sH(HH[dH[46]])
```

#### 1833. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13408-L13419` → after: `L13687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13687) · [Before (L13408-L13419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13408-L13419)

```diff
-                 return VV[KV[12]] = KV[4],
-                   function(...VV) {
-                     var eV, xV, JV, YV;
-                     for (ye(VV[KV[12]] = KV[22], VV[KV[61]] = VV[KV[0]].length, VV[-KV[58]] = Array()), VV[KV[20]] = Array(Math.ceil(VV[KV[2]].length / KV[22])), eV = KV[2]; eV < VV[KV[20]].length; eV++) VV[KV[20]][eV] = VV[KV[2]].charCodeAt(eV * KV[22]) << KV[10] | VV[KV[2]].cha … [truncated]
-                     for (; VV[KV[20]].length > KV[2];) {
-                       for (ye(YV = Array(), JV = KV[2]), eV = KV[2]; eV < VV[KV[20]].length; eV++) ye(JV = (JV << KV[53]) + VV[KV[20]][eV], xV = Math.floor(JV / VV[KV[61]]), JV -= xV * VV[KV[61]]), (YV.length > KV[2] || xV > KV[2]) && (YV[YV.length] = xV);
-                       ye(VV[-KV[58]][VV[-KV[58]].length] = JV, VV[KV[20]] = YV)
-                     }
-                     for (VV[KV[9]] = "", eV = VV[-KV[58]].length - KV[0]; eV >= KV[2]; eV--) VV[KV[9]] += VV[KV[0]].charAt(VV[-KV[58]][eV]);
-                     for (VV[KV[8]] = Math.ceil(VV[KV[2]].length * KV[10] / (Math.log(VV[KV[0]].length) / Math.log(KV[22]))), eV = VV[KV[9]].length; eV < VV[KV[8]]; eV++) VV[KV[9]] = VV[KV[0]][KV[2]] + VV[KV[9]];
-                     return VV[KV[9]]
-                   }(YV(pV(VV[KV[2]]), pV(VV[KV[0]])), VV[KV[22]])
+                 return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = AH(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
```

#### 1834. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13423-L13427` → after: `L13730-L13741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13730-L13741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13730-L13741) · [Before (L13423-L13427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13423-L13427)

```diff
-                 ye(VV[KV[12]] = KV[22], VV[KV[70]] = QV(VV[KV[2]])), VV[KV[70]].length > KV[53] && (VV[KV[70]] = jV(VV[KV[70]], VV[KV[2]].length * KV[10]));
-                 var xV = Array(KV[53]),
-                   JV = Array(KV[53]);
-                 for (VV[KV[4]] = KV[2]; VV[KV[4]] < KV[53]; VV[KV[4]]++) ye(xV[VV[KV[4]]] = VV[KV[70]][VV[KV[4]]] ^ KV[216], JV[VV[KV[4]]] = VV[KV[70]][VV[KV[4]]] ^ KV[217]);
-                 return VV[KV[20]] = jV(xV.concat(QV(VV[KV[0]])), KV[56] + VV[KV[0]].length * KV[10]), nV(jV(JV.concat(VV[KV[20]]), sV(eV(350) + KV[55], KV[56], KV[160])))
+                 return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = function(...HH) {
+                   for (zB(HH[dH[12]] = dH[2], HH[dH[5]] = '01,!(%e:[lZERimIkDaJXdF}z~>4?9Co{@.bxN+`;<w/K2f*YTn_|6POWcLS3B8MHv5VA$rs#"pU=yQ&g^7)t]uGjqh', HH[dH[0]] = "" + (HH[dH[1]] || ""), HH[dH[4]] = HH[dH[0]].length, HH[-dH[226]] = [], HH[dH[78]] = dH[1], HH[dH[227]] = dH[1], H … [truncated]
+                     if (HH[dH[28]] = HH[dH[5]].indexOf(HH[dH[0]][HH[dH[40]]]), HH[dH[28]] !== -dH[2])
+                       if (HH[dH[29]] < dH[1]) HH[dH[29]] = HH[dH[28]];
+                       else {
+                         zB(HH[dH[29]] += HH[dH[28]] * dH[30], HH[dH[78]] |= HH[dH[29]] << HH[dH[227]], HH[dH[227]] += (HH[dH[29]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
+                         do {
+                           zB(HH[-dH[226]].push(HH[dH[78]] & dH[11]), HH[dH[78]] >>= dH[3], HH[dH[227]] -= dH[3])
+                         } while (HH[dH[227]] > dH[7]);
+                         HH[dH[29]] = -dH[2]
+                       } return HH[dH[29]] > -dH[2] && HH[-dH[226]].push((HH[dH[78]] | HH[dH[29]] << HH[dH[227]]) & dH[11]), sH(HH[-dH[226]])
+                 }(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
```

#### 1835. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13432-L13435` → after: `L13778-L13781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13778-L13781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13778-L13781) · [Before (L13432-L13435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13432-L13435)

```diff
-                   return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = function(...VV) {
-                     for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = 'iA9U<1Y&XO!T@y=R[H.B}PGCa$Vu4#)Nrc*z2g;lfv"E_/DQ`jot:p?70~w8Jk{>ZhMn6F,|5]xL(qs3%+SdIbmWKe^', VV[KV[54]] = "" + (VV[KV[2]] || ""), VV[KV[4]] = VV[KV[54]].length, VV[-KV[89]] = [], VV[KV[7]] = KV[2], VV[KV[8]] = KV[2],  … [truncated]
-                       if (VV[-KV[218]] = VV[KV[15]].indexOf(VV[KV[54]][VV[KV[10]]]), VV[-KV[218]] !== -KV[0])
-                         if (VV[KV[26]] < KV[2]) VV[KV[26]] = VV[-KV[218]];
+                   function BH(...HH) {
+                     for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = 'wadNgWe!)h3$j`]4bEFqP*1AnH="~rtvz[{%^2xy7+5,<up6|o(T@BMOimcXLVU>YCK}slf:/0ZG&IS_.;R#Qk?8JD9', HH[-dH[109]] = "" + (HH[dH[1]] || ""), HH[-dH[34]] = HH[-dH[109]].length, HH[dH[10]] = [], HH[dH[50]] = dH[1], HH[dH[31]] = d … [truncated]
+                       if (HH[dH[28]] = HH[dH[2]].indexOf(HH[-dH[109]][HH[dH[3]]]), HH[dH[28]] !== -dH[2])
+                         if (HH[dH[7]] < dH[1]) HH[dH[7]] = HH[dH[28]];
```

#### 1836. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13437` → after: `L13783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13783) · [Before (L13437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13437)

```diff
-                           ye(VV[KV[26]] += VV[-KV[218]] * KV[31], VV[KV[7]] |= VV[KV[26]] << VV[KV[8]], VV[KV[8]] += (VV[KV[26]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
+                           zB(HH[dH[7]] += HH[dH[28]] * dH[30], HH[dH[50]] |= HH[dH[7]] << HH[dH[31]], HH[dH[31]] += (HH[dH[7]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
```

#### 1837. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13439-L13449` → after: `L13785-L13794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13785-L13794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13785-L13794) · [Before (L13439-L13449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13439-L13449)

```diff
-                             ye(VV[-KV[89]].push(VV[KV[7]] & KV[11]), VV[KV[7]] >>= KV[10], VV[KV[8]] -= KV[10])
-                           } while (VV[KV[8]] > KV[26]);
-                           VV[KV[26]] = -KV[0]
-                         } return VV[KV[26]] > -KV[0] && VV[-KV[89]].push((VV[KV[7]] | VV[KV[26]] << VV[KV[8]]) & KV[11]), uV(VV[-KV[89]])
-                   }(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-                 }
-                 xV[KV[12]] = KV[0];
-                 try {
-                   VV[KV[15]]
-                 } catch (JV) {
-                   VV[KV[15]] = KV[2]
+                             zB(HH[dH[10]].push(HH[dH[50]] & dH[11]), HH[dH[50]] >>= dH[3], HH[dH[31]] -= dH[3])
+                           } while (HH[dH[31]] > dH[7]);
+                           HH[dH[7]] = -dH[2]
+                         } return HH[dH[7]] > -dH[2] && HH[dH[10]].push((HH[dH[50]] | HH[dH[7]] << HH[dH[31]]) & dH[11]), sH(HH[dH[10]])
+                   }
+ 
+                   function LH(...HH) {
+                     return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = BH(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
+                   }
+                   HH[dH[12]] = dH[1], zB(HH[dH[37]] = aH(289) + aH(290) + aH(291) + LH(292) + LH(293), HH[-dH[248]] = LH(294) + LH(295) + LH(296) + dH[247], HH[-dH[209]] = LH(297) + LH(298) + LH(299) + LH(300) + LH(301), HH[dH[37]].match(HH[-dH[248]] + HH[-dH[209]]))
```

#### 1838. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13451-L13453` → after: `L13796-L13813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13796-L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13796-L13813) · [Before (L13451-L13453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13451-L13453)

```diff
-                 for (ye(xV[KV[58]] = VV[KV[15]] ? eV(351) + eV(352) + YV(353) : YV(354) + YV(355) + YV(356), xV[KV[22]] = "", xV[KV[4]] = KV[18]), xV[KV[9]] = KV[2]; xV[KV[9]] < xV[KV[2]].length; xV[KV[9]]++) ye(xV[KV[4]] = xV[KV[2]].charCodeAt(xV[KV[9]]), xV[KV[22]] += xV[KV[58] … [truncated]
-                 return xV[KV[22]]
-               }
+               }(LH, BH[dH[5]])
+           }
+           return LH
+         }
+         tH = wH[HH] || (wH[HH] = EH())
+       } else {
+         function XH(...HH) {
+           for (zB(HH[dH[12]] = dH[2], HH[dH[5]] = 'VX1F.2Y]E^k>_irN{*:8+@Ramh/WHw40%Qp}x"DsGK=&5C;zOd)v<e7LJU`tuT[|#$3bly!BjPgn,A?oqZ69(fISMc~', HH[dH[229]] = "" + (HH[dH[1]] || ""), HH[dH[20]] = HH[dH[229]].length, HH[dH[198]] = [], HH[-dH[231]] = dH[1], HH[dH[230]] = dH[1], HH[ … [truncated]
+             if (HH[dH[49]] = HH[dH[5]].indexOf(HH[dH[229]][HH[dH[40]]]), HH[dH[49]] !== -dH[2])
+               if (HH[dH[7]] < dH[1]) HH[dH[7]] = HH[dH[49]];
+               else {
+                 zB(HH[dH[7]] += HH[dH[49]] * dH[30], HH[-dH[231]] |= HH[dH[7]] << HH[dH[230]], HH[dH[230]] += (HH[dH[7]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
+                 do {
+                   zB(HH[dH[198]].push(HH[-dH[231]] & dH[11]), HH[-dH[231]] >>= dH[3], HH[dH[230]] -= dH[3])
+                 } while (HH[dH[230]] > dH[7]);
+                 HH[dH[7]] = -dH[2]
+ ... (2 more added lines; see GitHub link above)
```

#### 1839. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13455-L13460` → after: `L13815-L13861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13815-L13861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13815-L13861) · [Before (L13455-L13460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13455-L13460)

```diff
-               function yV(...xV) {
-                 function YV(...VV) {
-                   return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = function(...VV) {
-                     for (ye(VV[KV[12]] = KV[0], VV[KV[104]] = '`zxu0?(;[=^@do+pI#|63,isH5QF:bUR"9De$Jv%<*XKY{AE}m7>_yB~/NnCtWGq1rTj2OPSah.&k]f8cZ4l!wVM)Lg', VV[KV[54]] = "" + (VV[KV[2]] || ""), VV[KV[19]] = VV[KV[54]].length, VV[KV[9]] = [], VV[KV[90]] = KV[2], VV[KV[8]] = KV[2], … [truncated]
-                       if (VV[KV[91]] = VV[KV[104]].indexOf(VV[KV[54]][VV[KV[3]]]), VV[KV[91]] !== -KV[0])
-                         if (VV[-KV[7]] < KV[2]) VV[-KV[7]] = VV[KV[91]];
+         function GH(...HH) {
+           return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = XH(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
+         }
+ 
+         function YH(...HH) {
+           zB(HH[dH[12]] = dH[1], HH[dH[5]] = function(...BH) {
+             return zB(BH[dH[12]] = dH[36], BH[dH[5]] = [], BH[dH[20]] = BH[dH[1]].length, BH[dH[1]].sort(((HH, BH) => HH - BH)), HH[dH[0]](BH[dH[5]], [], dH[1], BH[dH[20]], BH[dH[1]], BH[dH[2]])), BH[dH[5]]
+           }, HH[dH[0]] = function(...BH) {
+             if (zB(BH[dH[12]] = dH[23], BH[dH[224]] = dH[197]), !(BH[dH[50]] < dH[1])) {
+               if (BH[dH[50]] === dH[1]) return BH[dH[1]].push(BH[dH[2]]);
+               for (BH[dH[7]] = BH[dH[36]]; BH[dH[7]] < BH[dH[20]] && !(BH[dH[10]][BH[dH[7]]] > BH[dH[50]]); BH[dH[7]]++) BH[dH[7]] > BH[dH[36]] && BH[dH[10]][BH[dH[7]]] === BH[dH[10]][BH[dH[7]] - dH[2]] || zB(BH[dH[224]] = Array.from(BH[dH[2]]), BH[dH[224]].push(BH[dH[10]][BH[dH[ … [truncated]
+             }
+           }, console.log(HH[dH[5]]))
+         }
+         GH(251) + dH[232] in iH && YH(), tH = zH[HH]()
+       }
+ ... (31 more added lines; see GitHub link above)
```

#### 1840. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13462` → after: `L13863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13863) · [Before (L13462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13462)

```diff
-                           ye(VV[-KV[7]] += VV[KV[91]] * KV[31], VV[KV[90]] |= VV[-KV[7]] << VV[KV[8]], VV[KV[8]] += (VV[-KV[7]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
+                           zB(hH += CH * dH[30], rH |= hH << SH, SH += (hH & dH[32]) > dH[33] ? dH[27] : dH[34]);
```

#### 1841. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13464-L13479` → after: `L13865-L13871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13865-L13871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13865-L13871) · [Before (L13464-L13479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13464-L13479)

```diff
-                             ye(VV[KV[9]].push(VV[KV[90]] & KV[11]), VV[KV[90]] >>= KV[10], VV[KV[8]] -= KV[10])
-                           } while (VV[KV[8]] > KV[26]);
-                           VV[-KV[7]] = -KV[0]
-                         } return VV[-KV[7]] > -KV[0] && VV[KV[9]].push((VV[KV[90]] | VV[-KV[7]] << VV[KV[8]]) & KV[11]), uV(VV[KV[9]])
-                   }(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-                 }
-                 xV[KV[12]] = KV[0];
-                 try {
-                   VV[KV[54]]
-                 } catch (JV) {
-                   VV[KV[54]] = ""
-                 }
-                 for (ye(xV[KV[15]] = eV(357) + YV(358) + YV(359) + KV[219], xV[KV[54]] = "", xV[KV[4]] = xV[KV[2]].length), xV[KV[220]] = KV[2]; xV[KV[220]] < xV[KV[4]]; xV[KV[220]] += KV[4])
-                   for (xV[KV[7]] = xV[KV[2]].charCodeAt(xV[KV[220]]) << KV[53] | (xV[KV[220]] + KV[0] < xV[KV[4]] ? xV[KV[2]].charCodeAt(xV[KV[220]] + KV[0]) << KV[10] : KV[2]) | (xV[KV[220]] + KV[22] < xV[KV[4]] ? xV[KV[2]].charCodeAt(xV[KV[220]] + KV[22]) : KV[2]), xV[KV[221]]  … [truncated]
-                 return xV[KV[54]]
-               }
+                             zB(AH.push(rH & dH[11]), rH >>= dH[3], SH -= dH[3])
+                           } while (SH > dH[7]);
+                           hH = -dH[2]
+                         }
+                     }
+                     return hH > -dH[2] && AH.push((rH | hH << SH) & dH[11]), sH(AH)
+                   }
```

#### 1842. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13481-L13485` → after: `L13873-L13881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13873-L13881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13873-L13881) · [Before (L13481-L13485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13481-L13485)

```diff
-               function pV(...VV) {
-                 var eV, xV;
-                 for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = "", VV[KV[54]] = -KV[0]); ++VV[KV[54]] < VV[KV[2]].length;) ye(eV = VV[KV[2]].charCodeAt(VV[KV[54]]), xV = VV[KV[54]] + KV[0] < VV[KV[2]].length ? VV[KV[2]].charCodeAt(VV[KV[54]] + KV[0]) : KV[2]), KV[222] <= eV && eV <= KV … [truncated]
-                 return VV[KV[15]]
-               }
+                   function AH(...HH) {
+                     return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = LH(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
+                   }
+                   BH[dH[12]] = dH[2];
+                   for (zB(BH[-dH[235]] = SH(268) + AH(269) + AH(270) + dH[216], BH[dH[36]] = "", BH[dH[20]] = BH[dH[1]].length), BH[dH[46]] = dH[1]; BH[dH[46]] < BH[dH[20]]; BH[dH[46]] += dH[20])
+                     for (BH[dH[8]] = BH[dH[1]].charCodeAt(BH[dH[46]]) << dH[67] | (BH[dH[46]] + dH[2] < BH[dH[20]] ? BH[dH[1]].charCodeAt(BH[dH[46]] + dH[2]) << dH[3] : dH[1]) | (BH[dH[46]] + dH[36] < BH[dH[20]] ? BH[dH[1]].charCodeAt(BH[dH[46]] + dH[36]) : dH[1]), BH[-dH[236]] = … [truncated]
+                   return BH[dH[36]]
+                 }(hH(zH(BH[dH[1]]), zH(BH[dH[2]])))
+             }
```

#### 1843. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13487-L13491` → after: `L13883-L13896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13883-L13896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13883-L13896) · [Before (L13487-L13491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13487-L13491)

```diff
-               function QV(...VV) {
-                 for (ye(VV[KV[12]] = KV[0], VV[KV[0]] = Array(VV[KV[2]].length >> KV[22])), VV[-KV[123]] = KV[2]; VV[-KV[123]] < VV[KV[0]].length; VV[-KV[123]]++) VV[KV[0]][VV[-KV[123]]] = KV[2];
-                 for (VV[-KV[123]] = KV[2]; VV[-KV[123]] < VV[KV[2]].length * KV[10]; VV[-KV[123]] += KV[10]) VV[KV[0]][VV[-KV[123]] >> KV[7]] |= (VV[KV[2]].charCodeAt(VV[-KV[123]] / KV[10]) & KV[11]) << KV[61] - VV[-KV[123]] % KV[52];
-                 return VV[KV[0]]
-               }
+             function rH(...HH) {
+               return HH[dH[12]] = dH[20],
+                 function(...HH) {
+                   var BH, LH, AH, rH;
+                   for (zB(HH[dH[12]] = dH[36], HH[dH[237]] = HH[dH[2]].length, HH[-dH[238]] = Array()), HH[dH[4]] = Array(Math.ceil(HH[dH[1]].length / dH[36])), BH = dH[1]; BH < HH[dH[4]].length; BH++) HH[dH[4]][BH] = HH[dH[1]].charCodeAt(BH * dH[36]) << dH[3] | HH[dH[1]].charCod … [truncated]
+                   for (; HH[dH[4]].length > dH[1];) {
+                     for (zB(rH = Array(), AH = dH[1]), BH = dH[1]; BH < HH[dH[4]].length; BH++) zB(AH = (AH << dH[67]) + HH[dH[4]][BH], LH = Math.floor(AH / HH[dH[237]]), AH -= LH * HH[dH[237]]), (rH.length > dH[1] || LH > dH[1]) && (rH[rH.length] = LH);
+                     zB(HH[-dH[238]][HH[-dH[238]].length] = AH, HH[dH[4]] = rH)
+                   }
+                   for (HH[dH[50]] = "", BH = HH[-dH[238]].length - dH[2]; BH >= dH[1]; BH--) HH[dH[50]] += HH[dH[2]].charAt(HH[-dH[238]][BH]);
+                   for (HH[-dH[22]] = Math.ceil(HH[dH[1]].length * dH[3] / (Math.log(HH[dH[2]].length) / Math.log(dH[36]))), BH = HH[dH[50]].length; BH < HH[-dH[22]]; BH++) HH[dH[50]] = HH[dH[2]][dH[1]] + HH[dH[50]];
+                   return HH[dH[50]]
+                 }(hH(zH(HH[dH[1]]), zH(HH[dH[2]])), HH[dH[36]])
+             }
```

#### 1844. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13493-L13496` → after: `L13898-L13904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13898-L13904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13898-L13904) · [Before (L13493-L13496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13493-L13496)

```diff
-               function nV(...VV) {
-                 for (ye(VV[KV[12]] = KV[0], VV[KV[81]] = ""), VV[KV[54]] = KV[2]; VV[KV[54]] < VV[KV[2]].length * KV[52]; VV[KV[54]] += KV[10]) VV[KV[81]] += String.fromCharCode(VV[KV[2]][VV[KV[54]] >> KV[7]] >>> KV[61] - VV[KV[54]] % KV[52] & KV[11]);
-                 return VV[KV[81]]
-               }
+             function hH(...HH) {
+               zB(HH[dH[12]] = dH[36], HH[dH[36]] = CH(HH[dH[1]])), HH[dH[36]].length > dH[67] && (HH[dH[36]] = vH(HH[dH[36]], HH[dH[1]].length * dH[3]));
+               var BH = Array(dH[67]),
+                 LH = Array(dH[67]);
+               for (HH[dH[20]] = dH[1]; HH[dH[20]] < dH[67]; HH[dH[20]]++) zB(BH[HH[dH[20]]] = HH[dH[36]][HH[dH[20]]] ^ dH[97], LH[HH[dH[20]]] = HH[dH[36]][HH[dH[20]]] ^ dH[98]);
+               return HH[dH[10]] = vH(BH.concat(CH(HH[dH[2]])), dH[71] + HH[dH[2]].length * dH[3]), EH(vH(LH.concat(HH[dH[10]]), JH(SH(261) + dH[70], dH[71], dH[99])))
+             }
```

#### 1845. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13498-L13499` → after: `L13906-L13919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13906-L13919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13906-L13919) · [Before (L13498-L13499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13498-L13499)

```diff
-               function wV(...VV) {
-                 return VV[KV[12]] = KV[22], VV[KV[2]] >>> VV[KV[0]] | VV[KV[2]] << KV[52] - VV[KV[0]]
+             function tH(...HH) {
+               function BH(HH) {
+                 return typeof eH[HH] === dH[18] ? eH[HH] = function(...HH) {
+                   for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = 'xWCUikI"Ne9Shrbd1M^%l5P6qtZH0Y/m[):v]_#O~wFBJXf>7,G3zQyo@(AR`g4a}jL&p;K<Ds?+|T2c8!.=u$nV*E{', HH[dH[36]] = "" + (HH[dH[1]] || ""), HH[dH[4]] = HH[dH[36]].length, HH[-dH[234]] = [], HH[-dH[233]] = dH[1], HH[dH[23]] = dH[1] … [truncated]
+                     if (HH[dH[28]] = HH[dH[2]].indexOf(HH[dH[36]][HH[dH[3]]]), HH[dH[28]] !== -dH[2])
+                       if (HH[dH[52]] < dH[1]) HH[dH[52]] = HH[dH[28]];
+                       else {
+                         zB(HH[dH[52]] += HH[dH[28]] * dH[30], HH[-dH[233]] |= HH[dH[52]] << HH[dH[23]], HH[dH[23]] += (HH[dH[52]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
+                         do {
+                           zB(HH[-dH[234]].push(HH[-dH[233]] & dH[11]), HH[-dH[233]] >>= dH[3], HH[dH[23]] -= dH[3])
+                         } while (HH[dH[23]] > dH[7]);
+                         HH[dH[52]] = -dH[2]
+                       } return HH[dH[52]] > -dH[2] && HH[-dH[234]].push((HH[-dH[233]] | HH[dH[52]] << HH[dH[23]]) & dH[11]), sH(HH[-dH[234]])
+                 }(qH[HH]) : eH[HH]
```

#### 1846. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13502-L13504` → after: `L13925-L13929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13925-L13929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13925-L13929) · [Before (L13502-L13504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13502-L13504)

```diff
-               function ZV(...VV) {
-                 return VV[KV[12]] = KV[22], VV[KV[2]] >>> VV[KV[0]]
-               }
+             function zH(...HH) {
+               var BH, LH;
+               for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = "", HH[dH[36]] = -dH[2]); ++HH[dH[36]] < HH[dH[1]].length;) zB(BH = HH[dH[1]].charCodeAt(HH[dH[36]]), LH = HH[dH[36]] + dH[2] < HH[dH[1]].length ? HH[dH[1]].charCodeAt(HH[dH[36]] + dH[2]) : dH[1]), dH[103] <= BH && BH <= dH[10 … [truncated]
+               return HH[dH[2]]
+             }
```

#### 1847. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13506-L13508` → after: `L13931-L13935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13931-L13935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13931-L13935) · [Before (L13506-L13508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13506-L13508)

```diff
-               function vV(...VV) {
-                 return VV[KV[12]] = KV[4], VV[KV[2]] & VV[KV[0]] ^ ~VV[KV[2]] & VV[KV[22]]
-               }
+             function CH(...HH) {
+               for (zB(HH[dH[12]] = dH[2], HH[dH[5]] = Array(HH[dH[1]].length >> dH[36])), HH[dH[36]] = dH[1]; HH[dH[36]] < HH[dH[5]].length; HH[dH[36]]++) HH[dH[5]][HH[dH[36]]] = dH[1];
+               for (HH[dH[36]] = dH[1]; HH[dH[36]] < HH[dH[1]].length * dH[3]; HH[dH[36]] += dH[3]) HH[dH[5]][HH[dH[36]] >> dH[50]] |= (HH[dH[1]].charCodeAt(HH[dH[36]] / dH[3]) & dH[11]) << dH[88] - HH[dH[36]] % dH[87];
+               return HH[dH[5]]
+             }
```

#### 1848. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13510-L13512` → after: `L13937-L13940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13937-L13940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13937-L13940) · [Before (L13510-L13512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13510-L13512)

```diff
-               function rV(...VV) {
-                 return VV[KV[12]] = KV[4], VV[KV[2]] & VV[KV[0]] ^ VV[KV[2]] & VV[KV[22]] ^ VV[KV[0]] & VV[KV[22]]
-               }
+             function EH(...HH) {
+               for (zB(HH[dH[12]] = dH[2], HH[-dH[240]] = ""), HH[dH[36]] = dH[1]; HH[dH[36]] < HH[dH[1]].length * dH[87]; HH[dH[36]] += dH[3]) HH[-dH[240]] += String.fromCharCode(HH[dH[1]][HH[dH[36]] >> dH[50]] >>> dH[88] - HH[dH[36]] % dH[87] & dH[11]);
+               return HH[-dH[240]]
+             }
```

#### 1849. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13514-L13516` → after: `L13942-L13944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13942-L13944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13942-L13944) · [Before (L13514-L13516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13514-L13516)

```diff
-               function kV(...VV) {
-                 return VV[KV[12]] = KV[0], wV(VV[KV[2]], KV[22]) ^ wV(VV[KV[2]], KV[35]) ^ wV(VV[KV[2]], KV[230])
-               }
+             function XH(...HH) {
+               return HH[dH[12]] = dH[36], HH[dH[1]] >>> HH[dH[2]] | HH[dH[1]] << dH[87] - HH[dH[2]]
+             }
```

#### 1850. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13518-L13520` → after: `L13946-L13948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13946-L13948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13946-L13948) · [Before (L13518-L13520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13518-L13520)

```diff
-               function bV(...VV) {
-                 return VV[KV[12]] = KV[0], wV(VV[KV[2]], KV[8]) ^ wV(VV[KV[2]], KV[132]) ^ wV(VV[KV[2]], KV[231])
-               }
+             function GH(...HH) {
+               return HH[dH[12]] = dH[36], HH[dH[1]] >>> HH[dH[2]]
+             }
```

#### 1851. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13522-L13524` → after: `L13950-L13952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13950-L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13950-L13952) · [Before (L13522-L13524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13522-L13524)

```diff
-               function EV(...VV) {
-                 return VV[KV[12]] = KV[0], wV(VV[KV[2]], KV[26]) ^ wV(VV[KV[2]], KV[68]) ^ ZV(VV[KV[2]], KV[4])
-               }
+             function YH(HH, BH, LH) {
+               return HH & BH ^ ~HH & LH
+             }
```

#### 1852. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13526-L13528` → after: `L13954-L13956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13954-L13956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13954-L13956) · [Before (L13526-L13528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13526-L13528)

```diff
-               function BV(...VV) {
-                 return VV[KV[12]] = KV[0], wV(VV[KV[2]], KV[105]) ^ wV(VV[KV[2]], KV[72]) ^ ZV(VV[KV[2]], KV[37])
-               }
+             function uH(...HH) {
+               return HH[dH[12]] = dH[20], HH[dH[1]] & HH[dH[2]] ^ HH[dH[1]] & HH[dH[36]] ^ HH[dH[2]] & HH[dH[36]]
+             }
```

#### 1853. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13530-L13537` → after: `L13958-L13960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13958-L13960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13958-L13960) · [Before (L13530-L13537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13530-L13537)

```diff
-               function jV(...eV) {
-                 var xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, jV, tV;
-                 for (ye(eV[KV[12]] = KV[22], eV[KV[22]] = new Array(KV[298], -KV[299], KV[300], -KV[301], KV[302], -KV[303], KV[304], KV[305]), eV[KV[4]] = new Array(KV[73])), ye(eV[KV[2]][eV[KV[0]] >> KV[7]] |= KV[67] << KV[61] - eV[KV[0]] % KV[52], eV[KV[2]][(eV[KV[0]] + KV[73] … [truncated]
-                   for (ye(xV = eV[KV[22]][KV[2]], JV = eV[KV[22]][KV[0]], YV = eV[KV[22]][KV[22]], UV = eV[KV[22]][KV[4]], yV = eV[KV[22]][KV[20]], pV = eV[KV[22]][KV[7]], QV = eV[KV[22]][KV[8]], nV = eV[KV[22]][KV[26]]), ZV = KV[2]; ZV < KV[73]; ZV++) ye(ZV < KV[53] ? eV[KV[4]][ … [truncated]
-                   ye(eV[KV[22]][KV[2]] = qV(xV, eV[KV[22]][KV[2]]), eV[KV[22]][KV[0]] = qV(JV, eV[KV[22]][KV[0]]), eV[KV[22]][KV[22]] = qV(YV, eV[KV[22]][KV[22]]), eV[KV[22]][KV[4]] = qV(UV, eV[KV[22]][KV[4]]), eV[KV[22]][KV[20]] = qV(yV, eV[KV[22]][KV[20]]), eV[KV[22]][KV[7]] =  … [truncated]
-                 }
-                 return eV[KV[22]]
-               }
+             function QH(HH) {
+               return XH(HH, dH[36]) ^ XH(HH, dH[27]) ^ XH(HH, dH[114])
+             }
```

#### 1854. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13563-L13575` → after: `L13963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13963) · [Before (L13563-L13575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13563-L13575)

```diff
-               ye(VV[KV[12]] = KV[2], VV[-KV[1]] = function(...VV) {
-                 for (ye(VV[KV[12]] = KV[0], VV[KV[0]] = VV[KV[2]].length, VV[KV[311]] = [], VV[KV[4]] = KV[2], VV[KV[312]] = KV[2], VV[KV[2]].sort(((VV, eV) => VV - eV))), VV[KV[38]] = KV[2]; VV[KV[38]] < VV[KV[0]]; VV[KV[38]]++)
-                   if (!(VV[KV[38]] > KV[2] && VV[KV[2]][VV[KV[38]]] === VV[KV[2]][VV[KV[38]] - KV[0]]))
-                     for (ye(VV[KV[4]] = VV[KV[38]] + KV[0], VV[KV[312]] = VV[KV[0]] - KV[0]); VV[KV[4]] < VV[KV[312]];)
-                       if (VV[KV[2]][VV[KV[38]]] + VV[KV[2]][VV[KV[4]]] + VV[KV[2]][VV[KV[312]]] < KV[2]) VV[KV[4]]++;
-                       else if (VV[KV[2]][VV[KV[38]]] + VV[KV[2]][VV[KV[4]]] + VV[KV[2]][VV[KV[312]]] > KV[2]) VV[KV[312]]--;
-                 else {
-                   for (VV[KV[311]].push([VV[KV[2]][VV[KV[38]]], VV[KV[2]][VV[KV[4]]], VV[KV[2]][VV[KV[312]]]]); VV[KV[4]] < VV[KV[312]] && VV[KV[2]][VV[KV[4]]] === VV[KV[2]][VV[KV[4]] + KV[0]];) VV[KV[4]]++;
-                   for (; VV[KV[4]] < VV[KV[312]] && VV[KV[2]][VV[KV[312]]] === VV[KV[2]][VV[KV[312]] - KV[0]];) VV[KV[312]]--;
-                   ye(VV[KV[4]]++, VV[KV[312]]--)
-                 }
-                 return VV[KV[311]]
-               }, console.log(VV[-KV[1]]))
+               return HH[dH[12]] = dH[2], XH(HH[dH[1]], dH[23]) ^ XH(HH[dH[1]], dH[115]) ^ XH(HH[dH[1]], dH[72])
```

#### 1855. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13577-L13593` → after: `L13965-L13978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13965-L13978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13965-L13978) · [Before (L13577-L13593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13577-L13593)

```diff
-             nx(373) + KV[30] in SV && Zx();
-             const vx = VV[KV[4]][nx(374) + nx(375) + nx(376)];
-             if (te && VV[KV[4]][KV[338]] && !vx) {
-               function rx(...VV) {
-                 var eV;
-                 ye(VV[KV[12]] = KV[2], eV = function(...VV) {
-                   ye(VV[KV[12]] = KV[0], this.Jv = VV[KV[2]], this.length = KV[2], this.map = {}, this.head = KV[92], this.tail = KV[92])
-                 }, eV.prototype.get = function(...VV) {
-                   var eV;
-                   return ye(VV[KV[12]] = KV[0], eV = this.map[VV[KV[2]]]), eV ? (this.remove(eV), this.insert(eV.key, eV.val), eV.val) : -KV[0]
-                 }, eV.prototype.put = function(VV, eV) {
-                   this.map[VV] ? (this.remove(this.map[VV]), this.insert(VV, eV)) : this.length === this.Jv ? (this.remove(this.head), this.insert(VV, eV)) : (this.insert(VV, eV), this.length++)
-                 }, eV.prototype.remove = function(...VV) {
-                   ye(VV[KV[12]] = KV[0], VV[KV[15]] = VV[KV[2]].prev, VV[KV[22]] = VV[KV[2]].next), VV[KV[22]] && (VV[KV[22]].prev = VV[KV[15]]), VV[KV[15]] && (VV[KV[15]].next = VV[KV[22]]), this.head === VV[KV[2]] && (this.head = VV[KV[22]]), this.tail === VV[KV[2]] && (this.ta … [truncated]
-                 }, eV.prototype.insert = function(...VV) {
-                   ye(VV[KV[12]] = KV[22], VV[KV[15]] = new List(VV[KV[2]], VV[KV[0]]), this.tail ? (this.tail.next = VV[KV[15]], VV[KV[15]].prev = this.tail, this.tail = VV[KV[15]]) : (this.tail = VV[KV[15]], this.head = VV[KV[15]]), this.map[VV[KV[2]]] = VV[KV[15]])
- ... (1 more removed lines; see GitHub link above)
+ 
+             function MH(HH) {
+               return XH(HH, dH[7]) ^ XH(HH, dH[85]) ^ GH(HH, dH[20])
+             }
+ 
+             function xH(HH) {
+               return XH(HH, dH[116]) ^ XH(HH, dH[66]) ^ GH(HH, dH[61])
+             }
+ 
+             function vH(HH, LH) {
+               var AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, vH, TH, UH, VH = new Array(dH[182], -dH[183], dH[184], -dH[185], dH[186], -dH[187], dH[188], dH[189]);
+               for (AH = new Array(dH[89]), zB(HH[LH >> dH[50]] |= dH[51] << dH[88] - LH % dH[87], HH[(LH + dH[89] >> dH[28] << dH[10]) + dH[78]] = LH), GH = dH[1]; GH < HH.length; GH += dH[67]) {
+                 for (zB(rH = VH[dH[1]], SH = VH[dH[2]], hH = VH[dH[36]], tH = VH[dH[20]], zH = VH[dH[10]], CH = VH[dH[50]], EH = VH[dH[23]], XH = VH[dH[7]]), vH = dH[1]; vH < dH[89]; vH++) zB(vH < dH[67] ? AH[vH] = HH[vH + GH] : AH[vH] = PH(PH(PH(xH(AH[vH - dH[36]]), AH[vH - dH[7 … [truncated]
+                 zB(VH[dH[1]] = PH(rH, VH[dH[1]]), VH[dH[2]] = PH(SH, VH[dH[2]]), VH[dH[36]] = PH(hH, VH[dH[36]]), VH[dH[20]] = PH(tH, VH[dH[20]]), VH[dH[10]] = PH(zH, VH[dH[10]]), VH[dH[50]] = PH(CH, VH[dH[50]]), VH[dH[23]] = PH(EH, VH[dH[23]]), VH[dH[7]] = PH(XH, VH[dH[7]]))
```

#### 1856. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13595` → after: `L13980-L14015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR13980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L13980-L14015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L13980-L14015) · [Before (L13595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13595)

```diff
-               if (nx(377) in SV && rx(), Fe) {
+               return VH
+             }
+ 
+             function PH(...HH) {
+               return zB(HH[dH[12]] = dH[36], HH[dH[5]] = (HH[dH[1]] & dH[90]) + (HH[dH[2]] & dH[90]), HH[dH[20]] = (HH[dH[1]] >> dH[67]) + (HH[dH[2]] >> dH[67]) + (HH[dH[5]] >> dH[67])), HH[dH[20]] << dH[67] | HH[dH[5]] & dH[90]
+             }
+             return HH = "", BH = new Array(dH[118], dH[119], -dH[120], -dH[121], dH[122], dH[123], -dH[124], -dH[125], -dH[126], dH[127], dH[128], dH[129], dH[130], -dH[131], -dH[132], -dH[133], -dH[134], -dH[135], dH[136], dH[137], dH[138], dH[139], dH[140], dH[141], -dH[142], - … [truncated]
+               hex: function(...HH) {
+                 return HH[dH[12]] = dH[2], tH(function(...HH) {
+                   return HH[dH[12]] = dH[2], EH(vH(CH(HH[dH[1]]), HH[dH[1]].length * dH[3]))
+                 }(zH(HH[dH[1]])))
+               },
+               b64: AH,
+               any: rH,
+               hex_hmac: function(...HH) {
+                 return HH[dH[12]] = dH[36], tH(hH(zH(HH[dH[1]]), zH(HH[dH[2]])))
+ ... (20 more added lines; see GitHub link above)
```

#### 1857. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13597-L13599` → after: `L14017-L14019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14017-L14019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14017-L14019) · [Before (L13597-L13599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13597-L13599)

```diff
-                   for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = '.9{_|x6~jzQ%E,Gq4)3XOTt!8U>=#7w}2$:DZH0ydABYpKWJMRirPbeg?5C(ca[IL@hf"<uFsm/+NV]v`k*no1;&lS^', VV[-KV[313]] = "" + (VV[KV[2]] || ""), VV[-KV[314]] = VV[-KV[313]].length, VV[-KV[144]] = [], VV[KV[38]] = KV[2], VV[KV[8]] =  … [truncated]
-                     if (VV[KV[30]] = VV[KV[15]].indexOf(VV[-KV[313]][VV[KV[316]]]), VV[KV[30]] !== -KV[0])
-                       if (VV[-KV[315]] < KV[2]) VV[-KV[315]] = VV[KV[30]];
+                   for (zB(HH[dH[12]] = dH[2], HH[dH[2]] = '9#)xfI!cV/~>.wKMe<m(d&03,X4RW"QHtn=z8Y6:G@r5v%u[PSsl7jFEDkC1bUya+Tp}$Z]*`Bgo_J|A^iN2{L;hO?q', HH[dH[0]] = "" + (HH[dH[1]] || ""), HH[dH[20]] = HH[dH[0]].length, HH[dH[46]] = [], HH[dH[50]] = dH[1], HH[dH[31]] = dH[1], HH[ … [truncated]
+                     if (HH[dH[28]] = HH[dH[2]].indexOf(HH[dH[0]][HH[-dH[243]]]), HH[dH[28]] !== -dH[2])
+                       if (HH[-dH[84]] < dH[1]) HH[-dH[84]] = HH[dH[28]];
```

#### 1858. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13601` → after: `L14021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14021) · [Before (L13601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13601)

```diff
-                         ye(VV[-KV[315]] += VV[KV[30]] * KV[31], VV[KV[38]] |= VV[-KV[315]] << VV[KV[8]], VV[KV[8]] += (VV[-KV[315]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
+                         zB(HH[-dH[84]] += HH[dH[28]] * dH[30], HH[dH[50]] |= HH[-dH[84]] << HH[dH[31]], HH[dH[31]] += (HH[-dH[84]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
```

#### 1859. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13603-L13606` → after: `L14023-L14026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14023-L14026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14023-L14026) · [Before (L13603-L13606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13603-L13606)

```diff
-                           ye(VV[-KV[144]].push(VV[KV[38]] & KV[11]), VV[KV[38]] >>= KV[10], VV[KV[8]] -= KV[10])
-                         } while (VV[KV[8]] > KV[26]);
-                         VV[-KV[315]] = -KV[0]
-                       } return VV[-KV[315]] > -KV[0] && VV[-KV[144]].push((VV[KV[38]] | VV[-KV[315]] << VV[KV[8]]) & KV[11]), uV(VV[-KV[144]])
+                           zB(HH[dH[46]].push(HH[dH[50]] & dH[11]), HH[dH[50]] >>= dH[3], HH[dH[31]] -= dH[3])
+                         } while (HH[dH[31]] > dH[7]);
+                         HH[-dH[84]] = -dH[2]
+                       } return HH[-dH[84]] > -dH[2] && HH[dH[46]].push((HH[dH[50]] | HH[-dH[84]] << HH[dH[31]]) & dH[11]), sH(HH[dH[46]])
```

#### 1860. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13610` → after: `L14030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14030) · [Before (L13610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13610)

```diff
-                   return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = kx(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
+                   return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = BH(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
```

#### 1861. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13612-L13613` → after: `L14032-L14053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14032-L14053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14032-L14053) · [Before (L13612-L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13612-L13613)

```diff
-                 ye(VV[KV[2]][nx(KV[328])][bx(379) + bx(380) + bx(381)](VV[KV[0]]), VV[KV[2]][bx(382)][bx(383)](VV[KV[0]], VV[KV[4]], VV[KV[22]], KV[2]))
-               } else {
+                 throw Error(SH(273) + SH(274) + SH(275) + HH[dH[1]].toString(dH[67]).toUpperCase() + (SH(276) + SH(277) + LH(278) + LH(279)))
+               }
+             }
+ 
+             function AH(...BH) {
+               return BH[dH[12]] = dH[36], HH[dH[5]](BH[dH[1]] >> BH[dH[2]] & dH[22] | dH[51])
+             }
+ 
+             function rH(BH) {
+               var rH;
+               return (4294967168 & BH) == dH[1] ? HH[dH[5]](BH) : (rH = "", (4294965248 & BH) == dH[1] ? rH = HH[dH[5]](BH >> dH[23] & dH[84] | dH[75]) : (4294901760 & BH) == dH[1] ? zB(LH(BH), rH = HH[dH[5]](BH >> dH[25] & dH[78] | dH[109]), rH += AH(BH, dH[23])) : (4292870144 & … [truncated]
+             }
+ 
+             function hH(...BH) {
+               if (BH[dH[12]] = dH[1], HH[-dH[64]] >= HH[dH[4]]) throw Error(SH(280));
+               if (zB(BH[dH[8]] = HH[dH[10]][HH[-dH[64]]] & dH[11], HH[-dH[64]]++), (BH[dH[8]] & dH[75]) == dH[51]) return BH[dH[8]] & dH[22];
+ ... (6 more added lines; see GitHub link above)
```

#### 1862. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13615-L13617` → after: `L14055-L14057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14055-L14057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14055-L14057) · [Before (L13615-L13617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13615-L13617)

```diff
-                   for (ye(VV[KV[12]] = KV[0], VV[KV[0]] = 'B96*,[40RTpDE/.~_1qM+Lzr"&SF<v`j|>Z7A#%NbgGHuC}Kw5Ja^lo{QIy(;Um@P!n:k?3sWY$]hx8tVOc=)2Xdeif', VV[KV[54]] = "" + (VV[KV[2]] || ""), VV[KV[19]] = VV[KV[54]].length, VV[KV[20]] = [], VV[KV[7]] = KV[2], VV[KV[32]] = KV[2], VV … [truncated]
-                     if (VV[KV[5]] = VV[KV[0]].indexOf(VV[KV[54]][VV[KV[156]]]), VV[KV[5]] !== -KV[0])
-                       if (VV[KV[6]] < KV[2]) VV[KV[6]] = VV[KV[5]];
+                   for (zB(HH[dH[12]] = dH[2], HH[dH[229]] = 'AteBfPZqHpUaCN6,7/Iu}i5".lDG~VsoWj)SY|wL4=?#QM]xzK<E%_O&dcy0JXn!F^2>vTk;R3b+$8grm@*{(91`:[h', HH[dH[36]] = "" + (HH[dH[1]] || ""), HH[dH[4]] = HH[dH[36]].length, HH[-dH[245]] = [], HH[dH[8]] = dH[1], HH[dH[23]] = dH[1], … [truncated]
+                     if (HH[dH[28]] = HH[dH[229]].indexOf(HH[dH[36]][HH[dH[40]]]), HH[dH[28]] !== -dH[2])
+                       if (HH[dH[29]] < dH[1]) HH[dH[29]] = HH[dH[28]];
```

#### 1863. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13619` → after: `L14059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14059) · [Before (L13619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13619)

```diff
-                         ye(VV[KV[6]] += VV[KV[5]] * KV[31], VV[KV[7]] |= VV[KV[6]] << VV[KV[32]], VV[KV[32]] += (VV[KV[6]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
+                         zB(HH[dH[29]] += HH[dH[28]] * dH[30], HH[dH[8]] |= HH[dH[29]] << HH[dH[23]], HH[dH[23]] += (HH[dH[29]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
```

#### 1864. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13621-L13628` → after: `L14061-L14064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14061-L14064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14061-L14064) · [Before (L13621-L13628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13621-L13628)

```diff
-                           ye(VV[KV[20]].push(VV[KV[7]] & KV[11]), VV[KV[7]] >>= KV[10], VV[KV[32]] -= KV[10])
-                         } while (VV[KV[32]] > KV[26]);
-                         VV[KV[6]] = -KV[0]
-                       } return VV[KV[6]] > -KV[0] && VV[KV[20]].push((VV[KV[7]] | VV[KV[6]] << VV[KV[32]]) & KV[11]), uV(VV[KV[20]])
-                 }
- 
-                 function Bx(...VV) {
-                   return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = Ex(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
+                           zB(HH[-dH[245]].push(HH[dH[8]] & dH[11]), HH[dH[8]] >>= dH[3], HH[dH[23]] -= dH[3])
+                         } while (HH[dH[23]] > dH[7]);
+                         HH[dH[29]] = -dH[2]
+                       } return HH[dH[29]] > -dH[2] && HH[-dH[245]].push((HH[dH[8]] | HH[dH[29]] << HH[dH[23]]) & dH[11]), sH(HH[-dH[245]])
```

#### 1865. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13632-L13636` → after: `L14068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14068) · [Before (L13632-L13636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13632-L13636)

```diff
-                   function eV() {}
-                   VV[KV[12]] = KV[2], ye(VV[KV[15]] = function(...VV) {
-                     for (ye(VV[KV[12]] = KV[22], VV[KV[22]] = KV[2], VV[KV[54]] = KV[2], VV[KV[20]] = new eV(KV[2]), VV[KV[7]] = VV[KV[20]], VV[KV[318]] = VV[KV[2]], VV[KV[32]] = VV[KV[0]]); VV[KV[318]] !== KV[92] || VV[KV[32]] !== KV[92];) ye(VV[KV[54]] = (VV[KV[318]] ? VV[KV[31 … [truncated]
-                     return VV[KV[22]] && (VV[KV[7]].next = new eV(VV[KV[22]])), VV[KV[20]].next
-                   }, console.log(VV[KV[15]]))
+                   return HH[dH[12]] = dH[2], typeof eH[HH[dH[1]]] === dH[18] ? eH[HH[dH[1]]] = CH(qH[HH[dH[1]]]) : eH[HH[dH[1]]]
```

#### 1866. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13638-L13651` → after: `L14070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14070) · [Before (L13638-L13651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13638-L13651)

```diff
-                 nx(384) + KV[317] in SV && jx(), ye(VV[KV[2]][Bx(385)][Bx(386)](VV[KV[0]], VV[KV[4]], VV[KV[22]], VV[KV[22]][Bx(387) + Bx(388)] + KV[0]), VV[KV[10]] = KV[212])
-               }
-             } else {
-               function qx(...VV) {
-                 for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = 'C9iqndcNlGIUaPVZmjeJbSDW:t,w=)1FAk4[M"Epv}T.|oBRzQ~r;fh>Y#Hy!&sKg805/3X]LO*(^<`x_+%2@?{$7u6', VV[KV[83]] = "" + (VV[KV[2]] || ""), VV[-KV[66]] = VV[KV[83]].length, VV[KV[20]] = [], VV[KV[204]] = KV[2], VV[KV[8]] = KV[2], V … [truncated]
-                   if (VV[KV[30]] = VV[KV[15]].indexOf(VV[KV[83]][VV[KV[10]]]), VV[KV[30]] !== -KV[0])
-                     if (VV[KV[314]] < KV[2]) VV[KV[314]] = VV[KV[30]];
-                     else {
-                       ye(VV[KV[314]] += VV[KV[30]] * KV[31], VV[KV[204]] |= VV[KV[314]] << VV[KV[8]], VV[KV[8]] += (VV[KV[314]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
-                       do {
-                         ye(VV[KV[20]].push(VV[KV[204]] & KV[11]), VV[KV[204]] >>= KV[10], VV[KV[8]] -= KV[10])
-                       } while (VV[KV[8]] > KV[26]);
-                       VV[KV[314]] = -KV[0]
-                     } return VV[KV[314]] > -KV[0] && VV[KV[20]].push((VV[KV[204]] | VV[KV[314]] << VV[KV[8]]) & KV[11]), uV(VV[KV[20]])
+                 throw Error(EH(282))
```

#### 1867. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13653-L13655` → after: `L14072-L14076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14072-L14076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14072-L14076) · [Before (L13653-L13655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13653-L13655)

```diff
- 
-               function tx(...VV) {
-                 return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = qx(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
+               if (HH[-dH[64]] == HH[dH[4]]) return dH[228];
+               if (zB(BH = HH[dH[10]][HH[-dH[64]]] & dH[11], HH[-dH[64]]++), (BH & dH[51]) == dH[1]) return BH;
+               if ((BH & dH[109]) == dH[75]) {
+                 if (zB(AH = hH(), zH = (BH & dH[84]) << dH[23] | AH), zH >= dH[51]) return zH;
+                 throw Error(SH(dH[246]))
```

#### 1868. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13657-L13663` → after: `L14078-L14084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14078-L14084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14078-L14084) · [Before (L13657-L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13657-L13663)

```diff
- 
-               function Fx(...VV) {
-                 function eV(...VV) {
-                   return VV[KV[12]] = KV[0], typeof DV[VV[KV[2]]] === KV[17] ? DV[VV[KV[2]]] = function(...VV) {
-                     for (ye(VV[KV[12]] = KV[0], VV[-KV[105]] = 'N0[r`wWe+?#D8}.$5u>h,ds/KY9QJ%CH=3q{(zT@"mjb6|l4F_^;&~Vx!pXoR2ASEi1Pty*<OZaGkIn:vUgBL)7]cMf', VV[KV[22]] = "" + (VV[KV[2]] || ""), VV[KV[4]] = VV[KV[22]].length, VV[KV[20]] = [], VV[KV[7]] = KV[2], VV[KV[319]] = KV[2 … [truncated]
-                       if (VV[KV[63]] = VV[-KV[105]].indexOf(VV[KV[22]][VV[-KV[85]]]), VV[KV[63]] !== -KV[0])
-                         if (VV[KV[60]] < KV[2]) VV[KV[60]] = VV[KV[63]];
+               if ((BH & dH[111]) == dH[109]) {
+                 if (zB(AH = hH(), rH = hH(), zH = (BH & dH[78]) << dH[25] | AH << dH[23] | rH), zH >= 2048) return LH(zH), zH;
+                 {
+                   function XH(...HH) {
+                     for (zB(HH[dH[12]] = dH[2], HH[dH[5]] = 'G$;YVgUJ4t^K8mdsaCPIn]3l[c,%v)uHQN~Bk!jZorO70?LbFR@D`*>(Mw{+ih&EA5<fWXx2Sq#|T.p1z:6/}=y9"_e', HH[dH[0]] = "" + (HH[dH[1]] || ""), HH[-dH[30]] = HH[dH[0]].length, HH[dH[10]] = [], HH[dH[8]] = dH[1], HH[-dH[82]] = dH[1],  … [truncated]
+                       if (HH[dH[69]] = HH[dH[5]].indexOf(HH[dH[0]][HH[dH[40]]]), HH[dH[69]] !== -dH[2])
+                         if (HH[dH[29]] < dH[1]) HH[dH[29]] = HH[dH[69]];
```

#### 1869. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13665` → after: `L14086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14086) · [Before (L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13665)

```diff
-                           ye(VV[KV[60]] += VV[KV[63]] * KV[31], VV[KV[7]] |= VV[KV[60]] << VV[KV[319]], VV[KV[319]] += (VV[KV[60]] & KV[33]) > KV[34] ? KV[35] : KV[36]);
+                           zB(HH[dH[29]] += HH[dH[69]] * dH[30], HH[dH[8]] |= HH[dH[29]] << HH[-dH[82]], HH[-dH[82]] += (HH[dH[29]] & dH[32]) > dH[33] ? dH[27] : dH[34]);
```

#### 1870. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L13667-L13708` → after: `L14088-L14092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14088-L14092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/88.js#L14088-L14092) · [Before (L13667-L13708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/88.js#L13667-L13708)

```diff
-                             ye(VV[KV[20]].push(VV[KV[7]] & KV[11]), VV[KV[7]] >>= KV[10], VV[KV[319]] -= KV[10])
-                           } while (VV[KV[319]] > KV[26]);
-                           VV[KV[60]] = -KV[0]
-                         } return VV[KV[60]] > -KV[0] && VV[KV[20]].push((VV[KV[7]] | VV[KV[60]] << VV[KV[319]]) & KV[11]), uV(VV[KV[20]])
-                   }(iV[VV[KV[2]]]) : DV[VV[KV[2]]]
-                 }
-                 VV[KV[12]] = KV[2],
-                   function(...VV) {
-                     function eV(...VV) {
-                       for (ye(VV[KV[12]] = KV[0], VV[KV[15]] = [], VV[KV[22]] = KV[2], VV[KV[90]] = VV[KV[2]].length, VV[KV[9]] = KV[18], VV[KV[38]] = KV[18]); VV[KV[22]] < VV[KV[90]];) ye(VV[KV[9]] = VV[KV[2]].charCodeAt(VV[KV[22]]++), VV[KV[9]] >= KV[222] && VV[KV[9]] <= KV[223 … [truncated]
-                       return VV[KV[15]]
-                     }
- 
-                     function xV(...VV) {
-                       if (VV[KV[12]] = KV[0], VV[KV[2]] >= KV[222] && VV[KV[2]] <= KV[225]) {
-                         function eV(...VV) {
- ... (26 more removed lines; see GitHub link above)
+                             zB(HH[dH[10]].push(HH[dH[8]] & dH[11]), HH[dH[8]] >>= dH[3], HH[-dH[82]] -= dH[3])
+                           } while (HH[-dH[82]] > dH[7]);
+                           HH[dH[29]] = -dH[2]
+                         } return HH[dH[29]] > -dH[2] && HH[dH[10]].push((HH[dH[8]] | HH[dH[29]] << HH[-dH[82]]) & dH[11]), sH(HH[dH[10]])
+                   }
```
