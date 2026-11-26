export const id = 271;
export const ids = [271];
export const modules = {
  45083: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    var AH = LH(41398),
      rH = LH(45086);
    class SH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = LH, this.lrH = [], this._maxBlockCapacity = BH || 64, this._selectionContent = new AH.e(1024), this._creationFunc = HH
      }
      update(HH, BH, LH) {
        rH.d._CreateBlocks(HH, BH, LH, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      QrH(HH) {
        for (let BH = 0; BH < this.blocks.length; BH++) {
          this.blocks[BH].addEntry(HH)
        }
      }
      gR(HH) {
        for (let BH = 0; BH < this.blocks.length; BH++) {
          this.blocks[BH].removeEntry(HH)
        }
      }
      select(HH, BH) {
        this._selectionContent.reset();
        for (let LH = 0; LH < this.blocks.length; LH++) {
          this.blocks[LH].select(HH, this._selectionContent, BH)
        }
        return BH ? this._selectionContent.concat(this.lrH) : this._selectionContent.concatWithNoDuplicate(this.lrH), this._selectionContent
      }
      intersects(HH, BH, LH) {
        this._selectionContent.reset();
        for (let AH = 0; AH < this.blocks.length; AH++) {
          this.blocks[AH].intersects(HH, BH, this._selectionContent, LH)
        }
        return LH ? this._selectionContent.concat(this.lrH) : this._selectionContent.concatWithNoDuplicate(this.lrH), this._selectionContent
      }
      intersectsRay(HH) {
        this._selectionContent.reset();
        for (let BH = 0; BH < this.blocks.length; BH++) {
          this.blocks[BH].intersectsRay(HH, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.lrH), this._selectionContent
      }
    }
    SH.CreationFuncForMeshes = (HH, BH) => {
      const LH = HH.jF();
      !HH.isBlocked && LH.boundingBox.intersectsMinMax(BH.OrH, BH.VrH) && BH.entries.push(HH)
    }, SH.CreationFuncForSubMeshes = (HH, BH) => {
      HH.jF().boundingBox.intersectsMinMax(BH.OrH, BH.VrH) && BH.entries.push(HH)
    }
  },
  45086: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    var AH = LH(37963),
      rH = LH(41595);
    class SH {
      constructor(HH, BH, LH, AH, rH, SH) {
        this.entries = [], this.KrH = new Array, this._capacity = LH, this._depth = AH, this._maxDepth = rH, this._creationFunc = SH, this._minPoint = HH, this._maxPoint = BH, this.KrH.push(HH.clone()), this.KrH.push(BH.clone()), this.KrH.push(HH.clone()), this.KrH[2].x = BH.x, this.KrH.push(HH.clone()), this.KrH[3].y = BH.y, this.KrH.push(HH.clone()), this.KrH[4].z = BH.z, this.KrH.push(BH.clone()), this.KrH[5].z = HH.z, this.KrH.push(BH.clone()), this.KrH[6].x = HH.x, this.KrH.push(BH.clone()), this.KrH[7].y = HH.y
      }
      get aX() {
        return this._capacity
      }
      get OrH() {
        return this._minPoint
      }
      get VrH() {
        return this._maxPoint
      }
      addEntry(HH) {
        if (this.blocks)
          for (let BH = 0; BH < this.blocks.length; BH++) {
            this.blocks[BH].addEntry(HH)
          } else this._creationFunc(HH, this), this.entries.length > this.aX && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(HH) {
        if (this.blocks) {
          for (let BH = 0; BH < this.blocks.length; BH++) {
            this.blocks[BH].removeEntry(HH)
          }
          return
        }
        const BH = this.entries.indexOf(HH);
        BH > -1 && this.entries.splice(BH, 1)
      }
      addEntries(HH) {
        for (let BH = 0; BH < HH.length; BH++) {
          const LH = HH[BH];
          this.addEntry(LH)
        }
      }
      select(HH, BH, LH) {
        if (rH.b.IsInFrustum(this.KrH, HH)) {
          if (this.blocks) {
            for (let AH = 0; AH < this.blocks.length; AH++) {
              this.blocks[AH].select(HH, BH, LH)
            }
            return
          }
          LH ? BH.concat(this.entries) : BH.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(HH, BH, LH, AH) {
        if (rH.b.IntersectsSphere(this._minPoint, this._maxPoint, HH, BH)) {
          if (this.blocks) {
            for (let rH = 0; rH < this.blocks.length; rH++) {
              this.blocks[rH].intersects(HH, BH, LH, AH)
            }
            return
          }
          AH ? LH.concat(this.entries) : LH.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(HH, BH) {
        if (HH.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let LH = 0; LH < this.blocks.length; LH++) {
              this.blocks[LH].intersectsRay(HH, BH)
            }
            return
          }
          BH.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        SH._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(HH, BH, LH, rH, hH, tH, zH, CH) {
        zH.blocks = new Array;
        const EH = new AH.o((BH.x - HH.x) / 2, (BH.y - HH.y) / 2, (BH.z - HH.z) / 2);
        for (let AH = 0; AH < 2; AH++)
          for (let BH = 0; BH < 2; BH++)
            for (let XH = 0; XH < 2; XH++) {
              const GH = HH.add(EH.multiplyByFloats(AH, BH, XH)),
                YH = HH.add(EH.multiplyByFloats(AH + 1, BH + 1, XH + 1)),
                uH = new SH(GH, YH, rH, hH + 1, tH, CH);
              uH.addEntries(LH), zH.blocks.push(uH)
            }
      }
    }
  },
  45095: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => EH
    });
    var AH = LH(41383),
      rH = LH(37963),
      SH = LH(41730),
      hH = LH(45036),
      tH = LH(41456),
      zH = LH(37989),
      CH = LH(45083);
    class EH {
      constructor(HH) {
        this.name = tH.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new hH.E(rH.o.Zero(), new rH.o(1, 1, 1)), (HH = HH || zH.d.LastCreatedScene) && (this.NQ = HH, this.NQ.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.NQ.getActiveSubMeshCandidates = HH => this.getActiveSubMeshCandidates(HH), this.NQ.getCollidingSubMeshCandidates = (HH, BH) => this.getCollidingSubMeshCandidates(HH, BH), this.NQ.getIntersectingSubMeshCandidates = (HH, BH) => this.getIntersectingSubMeshCandidates(HH, BH))
      }
      register() {
        this.NQ.onMeshRemovedObservable.add((HH => {
          const BH = this.NQ.selectionOctree;
          if (void 0 !== BH && null !== BH) {
            const LH = BH.lrH.indexOf(HH); - 1 !== LH && BH.lrH.splice(LH, 1)
          }
        })), this.NQ.onMeshImportedObservable.add((HH => {
          const BH = this.NQ.selectionOctree;
          void 0 !== BH && null !== BH && BH.QrH(HH)
        }))
      }
      getActiveMeshCandidates() {
        return this.NQ.RrH?.select(this.NQ.frustumPlanes) || this.NQ._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(HH) {
        if (HH._submeshesOctree && HH.useOctreeForRenderingSelection) {
          return HH._submeshesOctree.select(this.NQ.frustumPlanes)
        }
        return this.NQ._getDefaultSubMeshCandidates(HH)
      }
      getIntersectingSubMeshCandidates(HH, BH) {
        if (HH._submeshesOctree && HH.useOctreeForPicking) {
          hH.E.TransformToRef(BH, HH.getWorldMatrix(), this._tempRay);
          return HH._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.NQ._getDefaultSubMeshCandidates(HH)
      }
      getCollidingSubMeshCandidates(HH, BH) {
        if (HH._submeshesOctree && HH.useOctreeForCollisions) {
          const LH = BH._velocityWorldLength + Math.max(BH._radius.x, BH._radius.y, BH._radius.z);
          return HH._submeshesOctree.intersects(BH._basePointWorld, LH)
        }
        return this.NQ._getDefaultSubMeshCandidates(HH)
      }
      rebuild() {}
      dispose() {}
    }
    let XH = !1;
    XH || (XH = !0, AH.d.prototype.createOrUpdateSelectionOctree = function() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        LH = this._getComponent(tH.b.NAME_OCTREE);
      LH || (LH = new EH(this), this.SrH(LH)), this.RrH || (this.RrH = new CH.d(CH.d.CreationFuncForMeshes, HH, BH));
      const AH = this.getWorldExtends();
      return this.RrH.update(AH.min, AH.max, this.meshes), this.RrH
    }, Object.defineProperty(AH.d.prototype, "selectionOctree", {
      get: function() {
        return this.RrH
      },
      enumerable: !0,
      configurable: !0
    }), SH.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const LH = this.yN();
      let AH = LH._getComponent(tH.b.NAME_OCTREE);
      AH || (AH = new EH(LH), LH.SrH(AH)), this._submeshesOctree || (this._submeshesOctree = new CH.d(CH.d.CreationFuncForSubMeshes, HH, BH)), this.computeWorldMatrix(!0);
      const rH = this.jF().boundingBox;
      return this._submeshesOctree.update(rH.minimumWorld, rH.maximumWorld, this.jU), this._submeshesOctree
    })
  },
  45036: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => OH,
      E: () => XH,
      c: () => IH,
      g: () => QH,
      i: () => uH,
      k: () => YH,
      n: () => mH,
      r: () => kH,
      t: () => VH,
      x: () => bH
    });
    var AH = LH(37972),
      rH = LH(37963),
      SH = LH(37974),
      hH = LH(41585),
      tH = LH(41420),
      zH = LH(37989),
      CH = LH(41470);
    const EH = {
      internalPickerForMesh: void 0
    };
    class XH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : AH.d;
        this.origin = HH, this.direction = BH, this.length = LH, this.epsilon = rH
      }
      clone() {
        return new XH(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const AH = XH._TmpVector3[0].SBH(HH.x - LH, HH.y - LH, HH.z - LH),
          rH = XH._TmpVector3[1].SBH(BH.x + LH, BH.y + LH, BH.z + LH);
        let SH, hH, tH, zH, CH = 0,
          EH = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < AH.x || this.origin.x > rH.x) return !1
        } else if (SH = 1 / this.direction.x, hH = (AH.x - this.origin.x) * SH, tH = (rH.x - this.origin.x) * SH, tH === -1 / 0 && (tH = 1 / 0), hH > tH && (zH = hH, hH = tH, tH = zH), CH = Math.max(hH, CH), EH = Math.min(tH, EH), CH > EH) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < AH.y || this.origin.y > rH.y) return !1
        } else if (SH = 1 / this.direction.y, hH = (AH.y - this.origin.y) * SH, tH = (rH.y - this.origin.y) * SH, tH === -1 / 0 && (tH = 1 / 0), hH > tH && (zH = hH, hH = tH, tH = zH), CH = Math.max(hH, CH), EH = Math.min(tH, EH), CH > EH) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < AH.z || this.origin.z > rH.z) return !1
        } else if (SH = 1 / this.direction.z, hH = (AH.z - this.origin.z) * SH, tH = (rH.z - this.origin.z) * SH, tH === -1 / 0 && (tH = 1 / 0), hH > tH && (zH = hH, hH = tH, tH = zH), CH = Math.max(hH, CH), EH = Math.min(tH, EH), CH > EH) return !1;
        return !0
      }
      intersectsBox(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(HH.minimum, HH.maximum, BH)
      }
      intersectsSphere(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const LH = HH.center.x - this.origin.x,
          AH = HH.center.y - this.origin.y,
          rH = HH.center.z - this.origin.z,
          SH = LH * LH + AH * AH + rH * rH,
          hH = HH.radius + BH,
          tH = hH * hH;
        if (SH <= tH) return !0;
        const zH = LH * this.direction.x + AH * this.direction.y + rH * this.direction.z;
        if (zH < 0) return !1;
        return SH - zH * zH <= tH
      }
      intersectsTriangle(HH, BH, LH) {
        const AH = XH._TmpVector3[0],
          SH = XH._TmpVector3[1],
          tH = XH._TmpVector3[2],
          zH = XH._TmpVector3[3],
          CH = XH._TmpVector3[4];
        BH.subtractToRef(HH, AH), LH.subtractToRef(HH, SH), rH.o.CrossToRef(this.direction, SH, tH);
        const EH = rH.o.Dot(AH, tH);
        if (0 === EH) return null;
        const GH = 1 / EH;
        this.origin.subtractToRef(HH, zH);
        const YH = rH.o.Dot(zH, tH) * GH;
        if (YH < -this.epsilon || YH > 1 + this.epsilon) return null;
        rH.o.CrossToRef(zH, AH, CH);
        const uH = rH.o.Dot(this.direction, CH) * GH;
        if (uH < -this.epsilon || YH + uH > 1 + this.epsilon) return null;
        const QH = rH.o.Dot(SH, CH) * GH;
        return QH > this.length || QH < 0 ? null : new hH.b(1 - YH - uH, YH, QH)
      }
      intersectsPlane(HH) {
        let BH;
        const LH = rH.o.Dot(HH.normal, this.direction);
        if (Math.abs(LH) < 9.99999997475243e-7) return null;
        {
          const AH = rH.o.Dot(HH.normal, this.origin);
          return BH = (-HH.d - AH) / LH, BH < 0 ? BH < -9.99999997475243e-7 ? null : 0 : BH
        }
      }
      intersectsAxis(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (HH) {
          case "y": {
            const HH = (this.origin.y - BH) / this.direction.y;
            return HH > 0 ? null : new rH.o(this.origin.x + this.direction.x * -HH, BH, this.origin.z + this.direction.z * -HH)
          }
          case "x": {
            const HH = (this.origin.x - BH) / this.direction.x;
            return HH > 0 ? null : new rH.o(BH, this.origin.y + this.direction.y * -HH, this.origin.z + this.direction.z * -HH)
          }
          case "z": {
            const HH = (this.origin.z - BH) / this.direction.z;
            return HH > 0 ? null : new rH.o(this.origin.x + this.direction.x * -HH, this.origin.y + this.direction.y * -HH, BH)
          }
          default:
            return null
        }
      }
      rSH(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SH = arguments.length > 4 ? arguments[4] : void 0,
          hH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const tH = rH.l.Matrix[0];
        return HH.getWorldMatrix().invertToRef(tH), this._tmpRay ? XH.TransformToRef(this, tH, this._tmpRay) : this._tmpRay = XH.Transform(this, tH), HH.intersects(this._tmpRay, BH, LH, AH, SH, hH)
      }
      intersectsMeshes(HH, BH, LH) {
        LH ? LH.length = 0 : LH = [];
        for (let AH = 0; AH < HH.length; AH++) {
          const rH = this.rSH(HH[AH], BH);
          rH.hit && LH.push(rH)
        }
        return LH.sort(this._comparePickingInfo), LH
      }
      _comparePickingInfo(HH, BH) {
        return HH.distance < BH.distance ? -1 : HH.distance > BH.distance ? 1 : 0
      }
      intersectionSegment(HH, BH, LH) {
        const AH = this.origin,
          SH = rH.l.lu[0],
          hH = rH.l.lu[1],
          tH = rH.l.lu[2],
          zH = rH.l.lu[3];
        BH.subtractToRef(HH, SH), this.direction.scaleToRef(XH._Rayl, tH), AH.addToRef(tH, hH), HH.subtractToRef(AH, zH);
        const CH = rH.o.Dot(SH, SH),
          EH = rH.o.Dot(SH, tH),
          GH = rH.o.Dot(tH, tH),
          YH = rH.o.Dot(SH, zH),
          uH = rH.o.Dot(tH, zH),
          QH = CH * GH - EH * EH;
        let WH, MH, xH = QH,
          vH = QH;
        QH < XH._Smallnum ? (WH = 0, xH = 1, MH = uH, vH = GH) : (WH = EH * uH - GH * YH, MH = CH * uH - EH * YH, WH < 0 ? (WH = 0, MH = uH, vH = GH) : WH > xH && (WH = xH, MH = uH + EH, vH = GH)), MH < 0 ? (MH = 0, -YH < 0 ? WH = 0 : -YH > CH ? WH = xH : (WH = -YH, xH = CH)) : MH > vH && (MH = vH, -YH + EH < 0 ? WH = 0 : -YH + EH > CH ? WH = xH : (WH = -YH + EH, xH = CH));
        const PH = Math.abs(WH) < XH._Smallnum ? 0 : WH / xH,
          TH = Math.abs(MH) < XH._Smallnum ? 0 : MH / vH,
          UH = rH.l.lu[4];
        tH.scaleToRef(TH, UH);
        const VH = rH.l.lu[5];
        SH.scaleToRef(PH, VH), VH.addInPlace(zH);
        const OH = rH.l.lu[6];
        VH.subtractToRef(UH, OH);
        return TH > 0 && TH <= this.length && OH.lengthSquared() < LH * LH ? VH.length() : -1
      }
      update(HH, BH, LH, AH, SH, hH, tH) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          XH._RayDistant || (XH._RayDistant = XH.Zero()), XH._RayDistant.unprojectRayToRef(HH, BH, LH, AH, rH.e.IdentityReadOnly, hH, tH);
          const zH = rH.l.Matrix[0];
          SH.invertToRef(zH), XH.TransformToRef(XH._RayDistant, zH, this)
        } else this.unprojectRayToRef(HH, BH, LH, AH, SH, hH, tH);
        return this
      }
      static Zero() {
        return new XH(rH.o.Zero(), rH.o.Zero())
      }
      static CreateNew(HH, BH, LH, AH, rH, SH, hH) {
        return XH.Zero().update(HH, BH, LH, AH, rH, SH, hH)
      }
      static CreateNewFromTo(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rH.e.IdentityReadOnly;
        const AH = new XH(new rH.o(0, 0, 0), new rH.o(0, 0, 0));
        return XH.CreateFromToToRef(HH, BH, AH, LH)
      }
      static CreateFromToToRef(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rH.e.IdentityReadOnly;
        LH.origin.Tm(HH);
        const SH = BH.subtractToRef(HH, LH.direction),
          hH = Math.sqrt(SH.x * SH.x + SH.y * SH.y + SH.z * SH.z);
        return LH.length = hH, LH.direction.normalize(), XH.TransformToRef(LH, AH, LH)
      }
      static Transform(HH, BH) {
        const LH = new XH(new rH.o(0, 0, 0), new rH.o(0, 0, 0));
        return XH.TransformToRef(HH, BH, LH), LH
      }
      static TransformToRef(HH, BH, LH) {
        rH.o.TransformCoordinatesToRef(HH.origin, BH, LH.origin), rH.o.TransformNormalToRef(HH.direction, BH, LH.direction), LH.length = HH.length, LH.epsilon = HH.epsilon;
        const AH = LH.direction,
          SH = AH.length();
        if (0 !== SH && 1 !== SH) {
          const HH = 1 / SH;
          AH.x *= HH, AH.y *= HH, AH.z *= HH, LH.length *= SH
        }
        return LH
      }
      unprojectRayToRef(HH, BH, LH, AH, SH, hH, tH) {
        const CH = rH.l.Matrix[0];
        SH.multiplyToRef(hH, CH), CH.multiplyToRef(tH, CH), CH.invert();
        const EH = zH.d.LastCreatedEngine,
          XH = rH.l.lu[0];
        XH.x = HH / LH * 2 - 1, XH.y = -(BH / AH * 2 - 1), XH.z = EH?.WrH ? 1 : EH?.isNDCHalfZRange ? 0 : -1;
        const GH = rH.l.lu[1].SBH(XH.x, XH.y, 1 - 1e-8),
          YH = rH.l.lu[2],
          uH = rH.l.lu[3];
        rH.o.TransformCoordinatesToRef(XH, CH, YH), rH.o.TransformCoordinatesToRef(GH, CH, uH), this.origin.Tm(YH), uH.subtractToRef(YH, this.direction), this.direction.normalize()
      }
    }

    function GH(HH, BH, LH, AH, rH) {
      let SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const hH = XH.Zero();
      return YH(HH, BH, LH, AH, hH, rH, SH), hH
    }

    function YH(HH, BH, LH, AH, SH, hH) {
      let tH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        zH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const CH = HH.Iu();
      if (!hH && !(hH = HH.activeCamera) && !(hH = HH.cameraToUseForPointers)) return HH;
      const EH = hH.viewport,
        XH = CH.getRenderHeight(),
        {
          x: GH,
          y: YH,
          width: uH,
          height: QH
        } = EH.toGlobal(CH.getRenderWidth(), XH),
        WH = 1 / CH.getHardwareScalingLevel();
      return BH = BH * WH - GH, LH = LH * WH - (XH - YH - QH), SH.update(BH, LH, uH, QH, AH || rH.e.IdentityReadOnly, tH ? rH.e.IdentityReadOnly : hH.getViewMatrix(), hH.getProjectionMatrix(), zH), HH
    }

    function uH(HH, BH, LH, AH) {
      const rH = XH.Zero();
      return QH(HH, BH, LH, rH, AH), rH
    }

    function QH(HH, BH, LH, AH, SH) {
      if (!tH.b) return HH;
      const hH = HH.Iu();
      if (!SH && !(SH = HH.activeCamera) && !(SH = HH.cameraToUseForPointers)) throw new Error("Active camera not set");
      const zH = SH.viewport,
        CH = hH.getRenderHeight(),
        {
          x: EH,
          y: XH,
          width: GH,
          height: YH
        } = zH.toGlobal(hH.getRenderWidth(), CH),
        uH = rH.e.Identity(),
        QH = 1 / hH.getHardwareScalingLevel();
      return BH = BH * QH - EH, LH = LH * QH - (CH - XH - YH), AH.update(BH, LH, GH, YH, uH, uH, SH.getProjectionMatrix()), HH
    }

    function WH(HH, BH, LH, AH, rH, SH, hH, tH) {
      return MH(HH, LH, AH, BH(AH, LH.enableDistantPicking), rH, SH, hH, tH)
    }

    function MH(HH, BH, LH, AH, rH, SH, hH, tH) {
      const zH = BH.intersects(AH, rH, hH, SH, LH, tH);
      return zH && zH.hit ? !rH && null != HH && zH.distance >= HH.distance ? null : zH : null
    }

    function xH(HH, BH) {
      return "InstancedLinesMesh" === HH || "LinesMesh" === HH ? BH.intersectionThreshold : 0
    }

    function vH(HH) {
      const BH = HH.getClassName();
      if ("GreasedLineMesh" === BH) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const LH = HH.rawBoundingInfo;
      return {
        rawBoundingInfo: LH,
        intersectionThreshold: LH ? xH(BH, HH) : 0
      }
    }

    function PH(HH, BH, LH, AH, rH) {
      const SH = HH(LH, BH.enableDistantPicking);
      return SH.intersectsSphere(AH.nrH, rH) && SH.intersectsBox(AH.boundingBox, rH) ? SH : null
    }

    function TH(HH, BH, LH, AH, SH, hH) {
      let zH = null;
      const CH = !!(HH.activeCameras && HH.activeCameras.length > 1 && HH.cameraToUseForPointers !== HH.activeCamera),
        XH = HH.cameraToUseForPointers || HH.activeCamera,
        GH = EH.internalPickerForMesh || WH,
        YH = GH === WH;
      for (let tH = 0; tH < HH.meshes.length; tH++) {
        const EH = HH.meshes[tH];
        if (LH) {
          if (!LH(EH, -1)) continue
        } else if (!EH.isEnabled() || !EH.isVisible || !EH.jQ) continue;
        const uH = CH && EH.isWorldMatrixCameraDependent(),
          QH = EH.computeWorldMatrix(uH, XH);
        if (EH.hasThinInstances && EH.gLH) {
          const HH = GH(zH, BH, EH, QH, !0, !0, hH);
          if (HH) {
            if (SH) return HH;
            const {
              rawBoundingInfo: tH,
              intersectionThreshold: CH
            } = vH(EH), XH = EH._thinInstanceDataStorage.matrixData;
            if (XH) {
              const HH = rH.l.Matrix[0],
                uH = rH.l.Matrix[1],
                WH = Math.min(EH.gHH, XH.length >> 4);
              for (let xH = 0; xH < WH; xH++) {
                if (LH && !LH(EH, xH)) continue;
                rH.e.FromArrayToRef(XH, xH << 4, HH), HH.multiplyToRef(QH, uH);
                const WH = YH && tH ? PH(BH, EH, uH, tH, CH) : null;
                if (YH && tH && !WH) continue;
                const vH = YH && WH ? MH(zH, EH, uH, WH, AH, SH, hH, !0) : GH(zH, BH, EH, uH, AH, SH, hH, !0);
                if (vH && (zH = vH, zH.thinInstanceIndex = xH, AH)) return zH
              }
            }
          }
        } else {
          const HH = GH(zH, BH, EH, QH, AH, SH, hH);
          if (HH && (zH = HH, AH)) return zH
        }
      }
      return zH || new tH.b
    }

    function UH(HH, BH, LH, AH) {
      if (!tH.b) return null;
      const SH = [],
        hH = !!(HH.activeCameras && HH.activeCameras.length > 1 && HH.cameraToUseForPointers !== HH.activeCamera),
        zH = HH.cameraToUseForPointers || HH.activeCamera,
        CH = EH.internalPickerForMesh || WH,
        XH = CH === WH;
      for (let tH = 0; tH < HH.meshes.length; tH++) {
        const EH = HH.meshes[tH];
        if (LH) {
          if (!LH(EH, -1)) continue
        } else if (!EH.isEnabled() || !EH.isVisible || !EH.jQ) continue;
        const GH = hH && EH.isWorldMatrixCameraDependent(),
          YH = EH.computeWorldMatrix(GH, zH);
        if (EH.hasThinInstances && EH.gLH) {
          if (CH(null, BH, EH, YH, !0, !0, AH)) {
            const {
              rawBoundingInfo: HH,
              intersectionThreshold: hH
            } = vH(EH), tH = EH._thinInstanceDataStorage.matrixData;
            if (tH) {
              const zH = rH.l.Matrix[0],
                GH = rH.l.Matrix[1],
                uH = Math.min(EH.gHH, tH.length >> 4);
              for (let QH = 0; QH < uH; QH++) {
                if (LH && !LH(EH, QH)) continue;
                rH.e.FromArrayToRef(tH, QH << 4, zH), zH.multiplyToRef(YH, GH);
                const uH = XH && HH ? PH(BH, EH, GH, HH, hH) : null;
                if (XH && HH && !uH) continue;
                const WH = XH && uH ? MH(null, EH, GH, uH, !1, !1, AH, !0) : CH(null, BH, EH, GH, !1, !1, AH, !0);
                WH && (WH.thinInstanceIndex = QH, SH.push(WH))
              }
            }
          }
        } else {
          const HH = CH(null, BH, EH, YH, !1, !1, AH);
          HH && SH.push(HH)
        }
      }
      return SH
    }

    function VH(HH, BH, LH, AH, SH, hH) {
      if (!tH.b) return null;
      const zH = TH(HH, (AH => (HH._tempPickingRay || (HH._tempPickingRay = XH.Zero()), YH(HH, BH, LH, AH, HH._tempPickingRay, hH || null), HH._tempPickingRay)), AH, SH, !0);
      return zH && (zH.ray = GH(HH, BH, LH, rH.e.Identity(), hH || null)), zH
    }

    function OH(HH, BH, LH, AH, SH, hH, tH) {
      const zH = TH(HH, ((AH, rH) => (HH._tempPickingRay || (HH._tempPickingRay = XH.Zero()), YH(HH, BH, LH, AH, HH._tempPickingRay, hH || null, !1, rH), HH._tempPickingRay)), AH, SH, !1, tH);
      return zH && (zH.ray = GH(HH, BH, LH, rH.e.Identity(), hH || null)), zH
    }

    function bH(HH, BH, LH, AH, SH) {
      const hH = TH(HH, (LH => (HH._pickWithRayInverseMatrix || (HH._pickWithRayInverseMatrix = rH.e.Identity()), LH.invertToRef(HH._pickWithRayInverseMatrix), HH._cachedRayForTransform || (HH._cachedRayForTransform = XH.Zero()), XH.TransformToRef(BH, HH._pickWithRayInverseMatrix, HH._cachedRayForTransform), HH._cachedRayForTransform)), LH, AH, !1, SH);
      return hH && (hH.ray = BH), hH
    }

    function kH(HH, BH, LH, AH, rH, SH) {
      return UH(HH, (AH => GH(HH, BH, LH, AH, rH || null)), AH, SH)
    }

    function mH(HH, BH, LH, AH) {
      return UH(HH, (LH => (HH._pickWithRayInverseMatrix || (HH._pickWithRayInverseMatrix = rH.e.Identity()), LH.invertToRef(HH._pickWithRayInverseMatrix), HH._cachedRayForTransform || (HH._cachedRayForTransform = XH.Zero()), XH.TransformToRef(BH, HH._pickWithRayInverseMatrix, HH._cachedRayForTransform), HH._cachedRayForTransform)), LH, AH)
    }

    function oH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        AH = arguments.length > 3 ? arguments[3] : void 0,
        SH = arguments.length > 4 ? arguments[4] : void 0;
      AH || (AH = HH.getWorldMatrix()), BH.length = LH, SH ? BH.origin.Tm(SH) : BH.origin.Tm(HH.position);
      const hH = rH.l.lu[2];
      hH.set(0, 0, HH._scene.useRightHandedSystem ? -1 : 1);
      const tH = rH.l.lu[3];
      return rH.o.TransformNormalToRef(hH, AH, tH), rH.o.NormalizeToRef(tH, BH.direction), BH
    }

    function IH(HH, BH) {
      BH && (BH.prototype.getForwardRay = function() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        return oH(this, new XH(rH.o.Zero(), rH.o.Zero(), HH), HH, BH, LH)
      }, BH.prototype.getForwardRayToRef = function(HH) {
        return oH(this, HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), HH && (CH.e._IsPickingAvailable = !0, HH.prototype.createPickingRay = function(HH, BH, LH, AH) {
        return GH(this, HH, BH, LH, AH, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    XH._TmpVector3 = (0, SH.d)(6, rH.o.Zero), XH._RayDistant = XH.Zero(), XH._Smallnum = 1e-8, XH._Rayl = 1e9
  },
  45032: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH.E
    });
    var AH = LH(41383),
      rH = LH(41489),
      SH = LH(45036);
    let hH = !1;
    hH || (hH = !0, (0, SH.c)(AH.d, rH.d), AH.d.prototype.createPickingRayToRef = function(HH, BH, LH, AH, rH) {
      let hH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        tH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, SH.k)(this, HH, BH, LH, AH, rH, hH, tH)
    }, AH.d.prototype.createPickingRayInCameraSpace = function(HH, BH, LH) {
      return (0, SH.i)(this, HH, BH, LH)
    }, AH.d.prototype.createPickingRayInCameraSpaceToRef = function(HH, BH, LH, AH) {
      return (0, SH.g)(this, HH, BH, LH, AH)
    }, AH.d.prototype.pickWithBoundingInfo = function(HH, BH, LH, AH, rH) {
      return (0, SH.t)(this, HH, BH, LH, AH, rH)
    }, AH.d.prototype.XY = function(HH, BH, LH, AH, rH, hH) {
      let tH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, SH.A)(this, HH, BH, LH, AH, rH, hH, tH)
    }, AH.d.prototype.pickWithRay = function(HH, BH, LH, AH) {
      return (0, SH.x)(this, HH, BH, LH, AH)
    }, AH.d.prototype.multiPick = function(HH, BH, LH, AH, rH) {
      return (0, SH.r)(this, HH, BH, LH, AH, rH)
    }, AH.d.prototype.multiPickWithRay = function(HH, BH, LH) {
      return (0, SH.n)(this, HH, BH, LH)
    })
  },
  45039: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(37963),
      hH = LH(41535),
      tH = LH(45047),
      zH = LH(41498),
      CH = LH(38012);
    let EH = (() => {
        var HH;
        let BH, LH, zH, CH, EH, XH, GH, YH, uH = tH.d,
          QH = [],
          WH = [],
          MH = [],
          xH = [],
          vH = [],
          PH = [],
          TH = [],
          UH = [],
          VH = [],
          OH = [],
          bH = [],
          kH = [],
          mH = [];
        return HH = class extends uH {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(HH) {
            this._shadowFrustumSize = HH, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(HH) {
            this._shadowOrthoScale = HH, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(HH) {
            this._orthoLeft = HH
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(HH) {
            this._orthoRight = HH
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(HH) {
            this._orthoTop = HH
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(HH) {
            this._orthoBottom = HH
          }
          constructor(HH, BH, LH, rH) {
            super(HH, LH, rH), this._shadowFrustumSize = ((0, AH.k)(this, QH), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, AH.k)(this, WH, !0), this.autoCalcShadowZBounds = ((0, AH.k)(this, MH), (0, AH.k)(this, xH, !1)), this._orthoLeft = ((0, AH.k)(this, vH), (0, AH.k)(this, PH, Number.MAX_VALUE)), this._orthoRight = ((0, AH.k)(this, TH), (0, AH.k)(this, UH, Number.MIN_VALUE)), this._orthoTop = ((0, AH.k)(this, VH), (0, AH.k)(this, OH, Number.MIN_VALUE)), this._orthoBottom = ((0, AH.k)(this, bH), (0, AH.k)(this, kH, Number.MAX_VALUE)), (0, AH.k)(this, mH), this.position = BH.scale(-1), this.direction = BH
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return hH.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(HH, BH, LH) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(HH) : this._setDefaultAutoExtendShadowProjectionMatrix(HH, BH, LH)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(HH) {
            const BH = this.yN().activeCamera;
            SH.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : BH ? BH.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : BH ? BH.maxZ : 1e4, HH, this.yN().Iu().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(HH, BH, LH) {
            const AH = this.yN().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const HH = SH.o.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let AH = Number.MAX_VALUE,
                rH = -Number.MAX_VALUE;
              for (let hH = 0; hH < LH.length; hH++) {
                const tH = LH[hH];
                if (!tH) continue;
                const zH = tH.jF().boundingBox;
                for (let LH = 0; LH < zH.vectorsWorld.length; LH++) SH.o.TransformCoordinatesToRef(zH.vectorsWorld[LH], BH, HH), HH.x < this._orthoLeft && (this._orthoLeft = HH.x), HH.y < this._orthoBottom && (this._orthoBottom = HH.y), HH.x > this._orthoRight && (this._orthoRight = HH.x), HH.y > this._orthoTop && (this._orthoTop = HH.y), this.autoCalcShadowZBounds && (HH.z < AH && (AH = HH.z), HH.z > rH && (rH = HH.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = AH, this._shadowMaxZ = rH)
            }
            const rH = this._orthoRight - this._orthoLeft,
              hH = this._orthoTop - this._orthoBottom,
              tH = void 0 !== this.shadowMinZ ? this.shadowMinZ : AH?.minZ || 0,
              zH = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : AH?.maxZ || 1e4,
              CH = this.yN().Iu().WrH;
            SH.e.OrthoOffCenterLHToRef(this._orthoLeft - rH * this.shadowOrthoScale, this._orthoRight + rH * this.shadowOrthoScale, this._orthoBottom - hH * this.shadowOrthoScale, this._orthoTop + hH * this.shadowOrthoScale, CH ? zH : tH, CH ? tH : zH, HH, this.yN().Iu().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(HH, BH) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, BH), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, BH), this)
          }
          transferToNodeMaterialEffect(HH, BH) {
            return this.computeTransformedInformation() ? (HH.setFloat3(BH, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (HH.setFloat3(BH, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(HH) {
            const BH = this._scene.Iu();
            return !BH.WrH && BH.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(HH) {
            const BH = this._scene.Iu();
            return BH.WrH && BH.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(HH, BH) {
            HH["DIRLIGHT" + BH] = !0
          }
        }, (() => {
          const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(uH[Symbol.metadata] ?? null) : void 0;
          BH = [(0, rH.H)()], LH = [(0, rH.H)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], EH = [(0, rH.H)("orthoLeft")], XH = [(0, rH.H)("orthoRight")], GH = [(0, rH.H)("orthoTop")], YH = [(0, rH.H)("orthoBottom")], (0, AH.g)(HH, null, BH, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: HH => "shadowFrustumSize" in HH,
              get: HH => HH.shadowFrustumSize
            },
            metadata: SH
          }, null, QH), (0, AH.g)(HH, null, LH, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: HH => "shadowOrthoScale" in HH,
              get: HH => HH.shadowOrthoScale
            },
            metadata: SH
          }, null, QH), (0, AH.g)(null, null, zH, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: HH => "autoUpdateExtends" in HH,
              get: HH => HH.autoUpdateExtends,
              set: (HH, BH) => {
                HH.autoUpdateExtends = BH
              }
            },
            metadata: SH
          }, WH, MH), (0, AH.g)(null, null, CH, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: HH => "autoCalcShadowZBounds" in HH,
              get: HH => HH.autoCalcShadowZBounds,
              set: (HH, BH) => {
                HH.autoCalcShadowZBounds = BH
              }
            },
            metadata: SH
          }, xH, vH), (0, AH.g)(null, null, EH, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: HH => "_orthoLeft" in HH,
              get: HH => HH._orthoLeft,
              set: (HH, BH) => {
                HH._orthoLeft = BH
              }
            },
            metadata: SH
          }, PH, TH), (0, AH.g)(null, null, XH, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: HH => "_orthoRight" in HH,
              get: HH => HH._orthoRight,
              set: (HH, BH) => {
                HH._orthoRight = BH
              }
            },
            metadata: SH
          }, UH, VH), (0, AH.g)(null, null, GH, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: HH => "_orthoTop" in HH,
              get: HH => HH._orthoTop,
              set: (HH, BH) => {
                HH._orthoTop = BH
              }
            },
            metadata: SH
          }, OH, bH), (0, AH.g)(null, null, YH, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: HH => "_orthoBottom" in HH,
              get: HH => HH._orthoBottom,
              set: (HH, BH) => {
                HH._orthoBottom = BH
              }
            },
            metadata: SH
          }, kH, mH), SH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SH
          })
        })(), HH
      })(),
      XH = !1;
    XH || (XH = !0, zH.b.AddNodeConstructor("Light_Type_1", ((HH, BH) => () => new EH(HH, SH.o.Zero(), BH))), (0, CH.f)("BABYLON.DirectionalLight", EH))
  },
  39627: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      i: () => SH,
      m: () => hH,
      o: () => tH
    });
    var AH = LH(38074);
    class rH {
      constructor(HH, BH, LH) {
        this.gradient = HH, this.color1 = BH, this.color2 = LH
      }
      getColorToRef(HH) {
        this.color2 ? AH.g.LerpToRef(this.color1, this.color2, Math.random(), HH) : HH.Tm(this.color1)
      }
    }
    class SH {
      constructor(HH, BH) {
        this.gradient = HH, this.color = BH
      }
    }
    class hH {
      constructor(HH, BH, LH) {
        this.gradient = HH, this.factor1 = BH, this.factor2 = LH
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class tH {
      static GetCurrentGradient(HH, BH, LH) {
        if (BH[0].gradient > HH) return void LH(BH[0], BH[0], 1);
        for (let rH = 0; rH < BH.length - 1; rH++) {
          const AH = BH[rH],
            SH = BH[rH + 1];
          if (HH >= AH.gradient && HH <= SH.gradient) {
            return void LH(AH, SH, (HH - AH.gradient) / (SH.gradient - AH.gradient))
          }
        }
        const AH = BH.length - 1;
        LH(BH[AH], BH[AH], 1)
      }
    }
  },
  39633: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(37963),
      rH = LH(38002),
      SH = LH(39588);
    class hH {
      constructor() {
        this.direction1 = new AH.o(0, 1, 0), this.direction2 = new AH.o(0, 1, 0), this.minEmitBox = new AH.o(-.5, -.5, -.5), this.maxEmitBox = new AH.o(.5, .5, .5)
      }
      startDirectionFunction(HH, BH, LH, SH) {
        const hH = (0, rH.RandomRange)(this.direction1.x, this.direction2.x),
          tH = (0, rH.RandomRange)(this.direction1.y, this.direction2.y),
          zH = (0, rH.RandomRange)(this.direction1.z, this.direction2.z);
        if (SH) return BH.x = hH, BH.y = tH, void(BH.z = zH);
        AH.o.TransformNormalFromFloatsToRef(hH, tH, zH, HH, BH)
      }
      startPositionFunction(HH, BH, LH, SH) {
        const hH = (0, rH.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          tH = (0, rH.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          zH = (0, rH.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (SH) return BH.x = hH, BH.y = tH, void(BH.z = zH);
        AH.o.TransformCoordinatesFromFloatsToRef(hH, tH, zH, HH, BH)
      }
      clone() {
        const HH = new hH;
        return SH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        HH.setVector3("direction1", this.direction1), HH.setVector3("direction2", this.direction2), HH.setVector3("minEmitBox", this.minEmitBox), HH.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(HH) {
        HH.addUniform("direction1", 3), HH.addUniform("direction2", 3), HH.addUniform("minEmitBox", 3), HH.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const HH = {};
        return HH.type = this.getClassName(), HH.direction1 = this.direction1.xrH(), HH.direction2 = this.direction2.xrH(), HH.minEmitBox = this.minEmitBox.xrH(), HH.maxEmitBox = this.maxEmitBox.xrH(), HH
      }
      parse(HH) {
        AH.o.FromArrayToRef(HH.direction1, 0, this.direction1), AH.o.FromArrayToRef(HH.direction2, 0, this.direction2), AH.o.FromArrayToRef(HH.minEmitBox, 0, this.minEmitBox), AH.o.FromArrayToRef(HH.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39580: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      g: () => hH
    });
    var AH = LH(37963),
      rH = LH(38002),
      SH = LH(39588);
    class hH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = HH, this.height = BH, this.radiusRange = LH, this.directionRandomizer = rH, this._tempVector = AH.o.Zero()
      }
      startDirectionFunction(HH, BH, LH, SH, hH) {
        LH.position.subtractToRef(HH.getTranslation(), this._tempVector), this._tempVector.normalize(), AH.o.TransformNormalToRef(this._tempVector, hH, this._tempVector);
        const tH = (0, rH.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let zH = Math.atan2(this._tempVector.x, this._tempVector.z);
        zH += (0, rH.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = tH, this._tempVector.x = Math.sin(zH), this._tempVector.z = Math.cos(zH), this._tempVector.normalize(), SH ? BH.Tm(this._tempVector) : AH.o.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, HH, BH)
      }
      startPositionFunction(HH, BH, LH, SH) {
        const hH = (0, rH.RandomRange)(-this.height / 2, this.height / 2),
          tH = (0, rH.RandomRange)(0, 2 * Math.PI),
          zH = (0, rH.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          CH = Math.sqrt(zH) * this.radius,
          EH = CH * Math.cos(tH),
          XH = CH * Math.sin(tH);
        SH ? BH.SBH(EH, hH, XH) : AH.o.TransformCoordinatesFromFloatsToRef(EH, hH, XH, HH, BH)
      }
      clone() {
        const HH = new hH(this.radius, this.directionRandomizer);
        return SH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        HH.setFloat("radius", this.radius), HH.setFloat("height", this.height), HH.setFloat("radiusRange", this.radiusRange), HH.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(HH) {
        HH.addUniform("radius", 1), HH.addUniform("height", 1), HH.addUniform("radiusRange", 1), HH.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const HH = {};
        return HH.type = this.getClassName(), HH.radius = this.radius, HH.height = this.height, HH.radiusRange = this.radiusRange, HH.directionRandomizer = this.directionRandomizer, HH
      }
      parse(HH) {
        this.radius = HH.radius, this.height = HH.height, this.radiusRange = HH.radiusRange, this.directionRandomizer = HH.directionRandomizer
      }
    }
    class tH extends hH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new AH.o(0, 1, 0),
          SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new AH.o(0, 1, 0);
        super(HH, BH, LH), this.direction1 = rH, this.direction2 = SH
      }
      startDirectionFunction(HH, BH, LH, SH) {
        const hH = (0, rH.RandomRange)(this.direction1.x, this.direction2.x),
          tH = (0, rH.RandomRange)(this.direction1.y, this.direction2.y),
          zH = (0, rH.RandomRange)(this.direction1.z, this.direction2.z);
        SH ? BH.SBH(hH, tH, zH) : AH.o.TransformNormalFromFloatsToRef(hH, tH, zH, HH, BH)
      }
      clone() {
        const HH = new tH(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return SH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        HH.setFloat("radius", this.radius), HH.setFloat("height", this.height), HH.setFloat("radiusRange", this.radiusRange), HH.setVector3("direction1", this.direction1), HH.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(HH) {
        HH.addUniform("radius", 1), HH.addUniform("height", 1), HH.addUniform("radiusRange", 1), HH.addUniform("direction1", 3), HH.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const HH = super.serialize();
        return HH.direction1 = this.direction1.xrH(), HH.direction2 = this.direction2.xrH(), HH
      }
      parse(HH) {
        super.parse(HH), AH.o.FromArrayToRef(HH.direction1, 0, this.direction1), AH.o.FromArrayToRef(HH.direction2, 0, this.direction2)
      }
    }
  },
  45060: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => ZB
    });
    var AH = LH(39627),
      rH = LH(37997),
      SH = LH(37963),
      hH = LH(41427),
      tH = LH(45062),
      zH = LH(37989),
      CH = LH(41561),
      EH = LH(38074),
      XH = LH(39633),
      GH = LH(39588),
      YH = LH(38002);
    class uH {
      constructor() {
        this.direction1 = new SH.o(0, 1, 0), this.direction2 = new SH.o(0, 1, 0)
      }
      startDirectionFunction(HH, BH, LH, AH) {
        const rH = (0, YH.RandomRange)(this.direction1.x, this.direction2.x),
          hH = (0, YH.RandomRange)(this.direction1.y, this.direction2.y),
          tH = (0, YH.RandomRange)(this.direction1.z, this.direction2.z);
        AH ? BH.SBH(rH, hH, tH) : SH.o.TransformNormalFromFloatsToRef(rH, hH, tH, HH, BH)
      }
      startPositionFunction(HH, BH, LH, AH) {
        AH ? BH.SBH(0, 0, 0) : SH.o.TransformCoordinatesFromFloatsToRef(0, 0, 0, HH, BH)
      }
      clone() {
        const HH = new uH;
        return GH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        HH.setVector3("direction1", this.direction1), HH.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(HH) {
        HH.addUniform("direction1", 3), HH.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const HH = {};
        return HH.type = this.getClassName(), HH.direction1 = this.direction1.xrH(), HH.direction2 = this.direction2.xrH(), HH
      }
      parse(HH) {
        SH.o.FromArrayToRef(HH.direction1, 0, this.direction1), SH.o.FromArrayToRef(HH.direction2, 0, this.direction2)
      }
    }
    class QH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = HH, this.radiusRange = BH, this.directionRandomizer = LH
      }
      startDirectionFunction(HH, BH, LH, AH) {
        const rH = LH.position.subtract(HH.getTranslation()).normalize(),
          hH = (0, YH.RandomRange)(0, this.directionRandomizer),
          tH = (0, YH.RandomRange)(0, this.directionRandomizer),
          zH = (0, YH.RandomRange)(0, this.directionRandomizer);
        rH.x += hH, rH.y += tH, rH.z += zH, rH.normalize(), AH ? BH.Tm(rH) : SH.o.TransformNormalFromFloatsToRef(rH.x, rH.y, rH.z, HH, BH)
      }
      startPositionFunction(HH, BH, LH, AH) {
        const rH = this.radius - (0, YH.RandomRange)(0, this.radius * this.radiusRange),
          hH = (0, YH.RandomRange)(0, 1),
          tH = (0, YH.RandomRange)(0, 2 * Math.PI),
          zH = Math.acos(2 * hH - 1),
          CH = rH * Math.cos(tH) * Math.sin(zH),
          EH = rH * Math.cos(zH),
          XH = rH * Math.sin(tH) * Math.sin(zH);
        AH ? BH.SBH(CH, Math.abs(EH), XH) : SH.o.TransformCoordinatesFromFloatsToRef(CH, Math.abs(EH), XH, HH, BH)
      }
      clone() {
        const HH = new QH(this.radius, this.directionRandomizer);
        return GH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        HH.setFloat("radius", this.radius), HH.setFloat("radiusRange", this.radiusRange), HH.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(HH) {
        HH.addUniform("radius", 1), HH.addUniform("radiusRange", 1), HH.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const HH = {};
        return HH.type = this.getClassName(), HH.radius = this.radius, HH.radiusRange = this.radiusRange, HH.directionRandomizer = this.directionRandomizer, HH
      }
      parse(HH) {
        this.radius = HH.radius, this.radiusRange = HH.radiusRange, this.directionRandomizer = HH.directionRandomizer
      }
    }
    class WH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = HH, this.radiusRange = BH, this.directionRandomizer = LH
      }
      startDirectionFunction(HH, BH, LH, AH) {
        const rH = LH.position.subtract(HH.getTranslation()).normalize(),
          hH = (0, YH.RandomRange)(0, this.directionRandomizer),
          tH = (0, YH.RandomRange)(0, this.directionRandomizer),
          zH = (0, YH.RandomRange)(0, this.directionRandomizer);
        rH.x += hH, rH.y += tH, rH.z += zH, rH.normalize(), AH ? BH.Tm(rH) : SH.o.TransformNormalFromFloatsToRef(rH.x, rH.y, rH.z, HH, BH)
      }
      startPositionFunction(HH, BH, LH, AH) {
        const rH = this.radius - (0, YH.RandomRange)(0, this.radius * this.radiusRange),
          hH = (0, YH.RandomRange)(0, 1),
          tH = (0, YH.RandomRange)(0, 2 * Math.PI),
          zH = Math.acos(2 * hH - 1),
          CH = rH * Math.cos(tH) * Math.sin(zH),
          EH = rH * Math.cos(zH),
          XH = rH * Math.sin(tH) * Math.sin(zH);
        AH ? BH.SBH(CH, EH, XH) : SH.o.TransformCoordinatesFromFloatsToRef(CH, EH, XH, HH, BH)
      }
      clone() {
        const HH = new WH(this.radius, this.directionRandomizer);
        return GH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        HH.setFloat("radius", this.radius), HH.setFloat("radiusRange", this.radiusRange), HH.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(HH) {
        HH.addUniform("radius", 1), HH.addUniform("radiusRange", 1), HH.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const HH = {};
        return HH.type = this.getClassName(), HH.radius = this.radius, HH.radiusRange = this.radiusRange, HH.directionRandomizer = this.directionRandomizer, HH
      }
      parse(HH) {
        this.radius = HH.radius, this.radiusRange = HH.radiusRange, this.directionRandomizer = HH.directionRandomizer
      }
    }
    class MH extends WH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new SH.o(0, 1, 0),
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SH.o(0, 1, 0);
        super(HH), this.direction1 = BH, this.direction2 = LH
      }
      startDirectionFunction(HH, BH, LH, AH) {
        const rH = (0, YH.RandomRange)(this.direction1.x, this.direction2.x),
          hH = (0, YH.RandomRange)(this.direction1.y, this.direction2.y),
          tH = (0, YH.RandomRange)(this.direction1.z, this.direction2.z);
        AH ? BH.SBH(rH, hH, tH) : SH.o.TransformNormalFromFloatsToRef(rH, hH, tH, HH, BH)
      }
      clone() {
        const HH = new MH(this.radius, this.direction1, this.direction2);
        return GH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        HH.setFloat("radius", this.radius), HH.setFloat("radiusRange", this.radiusRange), HH.setVector3("direction1", this.direction1), HH.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(HH) {
        HH.addUniform("radius", 1), HH.addUniform("radiusRange", 1), HH.addUniform("direction1", 3), HH.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const HH = super.serialize();
        return HH.direction1 = this.direction1.xrH(), HH.direction2 = this.direction2.xrH(), HH
      }
      parse(HH) {
        super.parse(HH), SH.o.FromArrayToRef(HH.direction1, 0, this.direction1), SH.o.FromArrayToRef(HH.direction2, 0, this.direction2)
      }
    }
    var xH = LH(39580);
    class vH {
      get radius() {
        return this._radius
      }
      set radius(HH) {
        this._radius = HH, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(HH) {
        this._angle = HH, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = LH, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = BH, this.radius = HH
      }
      startDirectionFunction(HH, BH, LH, AH) {
        const rH = LH.position.subtract(HH.getTranslation()).normalize(),
          hH = (0, YH.RandomRange)(0, this.directionRandomizer),
          tH = (0, YH.RandomRange)(0, this.directionRandomizer),
          zH = (0, YH.RandomRange)(0, this.directionRandomizer);
        rH.x += hH, rH.y += tH, rH.z += zH, rH.normalize(), AH ? BH.Tm(rH) : SH.o.TransformNormalFromFloatsToRef(rH.x, rH.y, rH.z, HH, BH)
      }
      startPositionFunction(HH, BH, LH, AH) {
        const rH = (0, YH.RandomRange)(0, 2 * Math.PI);
        let hH;
        this.emitFromSpawnPointOnly ? hH = 1e-4 : (hH = (0, YH.RandomRange)(0, this.heightRange), hH = 1 - hH * hH);
        let tH = this._radius - (0, YH.RandomRange)(0, this._radius * this.radiusRange);
        tH *= hH;
        const zH = tH * Math.sin(rH),
          CH = tH * Math.cos(rH),
          EH = hH * this._height;
        if (AH) return BH.x = zH, BH.y = EH, void(BH.z = CH);
        SH.o.TransformCoordinatesFromFloatsToRef(zH, EH, CH, HH, BH)
      }
      clone() {
        const HH = new vH(this._radius, this._angle, this.directionRandomizer);
        return GH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        HH.setFloat2("radius", this._radius, this.radiusRange), HH.setFloat("coneAngle", this._angle), HH.setFloat2("height", this._height, this.heightRange), HH.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(HH) {
        HH.addUniform("radius", 2), HH.addUniform("coneAngle", 1), HH.addUniform("height", 2), HH.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let HH = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (HH += "\n#define CONEEMITTERSPAWNPOINT"), HH
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const HH = {};
        return HH.type = this.getClassName(), HH.radius = this._radius, HH.angle = this._angle, HH.directionRandomizer = this.directionRandomizer, HH.radiusRange = this.radiusRange, HH.heightRange = this.heightRange, HH.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, HH
      }
      parse(HH) {
        this.radius = HH.radius, this.angle = HH.angle, this.directionRandomizer = HH.directionRandomizer, this.radiusRange = void 0 !== HH.radiusRange ? HH.radiusRange : 1, this.heightRange = void 0 !== HH.heightRange ? HH.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== HH.emitFromSpawnPointOnly && HH.emitFromSpawnPointOnly
      }
    }
    class PH extends vH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SH.o(0, 1, 0),
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new SH.o(0, 1, 0);
        super(HH, BH), this.direction1 = LH, this.direction2 = AH
      }
      startDirectionFunction(HH, BH, LH, AH) {
        const rH = (0, YH.RandomRange)(this.direction1.x, this.direction2.x),
          hH = (0, YH.RandomRange)(this.direction1.y, this.direction2.y),
          tH = (0, YH.RandomRange)(this.direction1.z, this.direction2.z);
        AH ? BH.SBH(rH, hH, tH) : SH.o.TransformNormalFromFloatsToRef(rH, hH, tH, HH, BH)
      }
      clone() {
        const HH = new PH(this.radius, this.angle, this.direction1, this.direction2);
        return GH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        super.applyToShader(HH), HH.setVector3("direction1", this.direction1), HH.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(HH) {
        super.buildUniformLayout(HH), HH.addUniform("direction1", 3), HH.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const HH = super.serialize();
        return HH.direction1 = this.direction1.xrH(), HH.direction2 = this.direction2.xrH(), HH
      }
      parse(HH) {
        super.parse(HH), SH.o.FromArrayToRef(HH.direction1, 0, this.direction1), SH.o.FromArrayToRef(HH.direction2, 0, this.direction2)
      }
    }
    class TH {
      get mesh() {
        return this._mesh
      }
      set mesh(HH) {
        this._mesh !== HH && (this._mesh = HH, HH ? (this._indices = HH.vrH(), this._positions = HH.getVerticesData(hH.i.PositionKind), this._normals = HH.getVerticesData(hH.i.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = SH.o.Zero(), this._mesh = null, this.direction1 = new SH.o(0, 1, 0), this.direction2 = new SH.o(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = HH
      }
      startDirectionFunction(HH, BH, LH, AH) {
        if (this.useMeshNormalsForDirection && this._normals) return void SH.o.TransformNormalToRef(this._storedNormal, HH, BH);
        const rH = (0, YH.RandomRange)(this.direction1.x, this.direction2.x),
          hH = (0, YH.RandomRange)(this.direction1.y, this.direction2.y),
          tH = (0, YH.RandomRange)(this.direction1.z, this.direction2.z);
        AH ? BH.SBH(rH, hH, tH) : SH.o.TransformNormalFromFloatsToRef(rH, hH, tH, HH, BH)
      }
      startPositionFunction(HH, BH, LH, AH) {
        if (!this._indices || !this._positions) return;
        const rH = 3 * (Math.random() * (this._indices.length / 3) | 0),
          hH = Math.random(),
          tH = Math.random() * (1 - hH),
          zH = 1 - hH - tH,
          CH = this._indices[rH],
          EH = this._indices[rH + 1],
          XH = this._indices[rH + 2],
          GH = SH.l.lu[0],
          YH = SH.l.lu[1],
          uH = SH.l.lu[2],
          QH = SH.l.lu[3];
        SH.o.FromArrayToRef(this._positions, 3 * CH, GH), SH.o.FromArrayToRef(this._positions, 3 * EH, YH), SH.o.FromArrayToRef(this._positions, 3 * XH, uH), QH.x = hH * GH.x + tH * YH.x + zH * uH.x, QH.y = hH * GH.y + tH * YH.y + zH * uH.y, QH.z = hH * GH.z + tH * YH.z + zH * uH.z, AH ? BH.SBH(QH.x, QH.y, QH.z) : SH.o.TransformCoordinatesFromFloatsToRef(QH.x, QH.y, QH.z, HH, BH), this.useMeshNormalsForDirection && this._normals && (SH.o.FromArrayToRef(this._normals, 3 * CH, GH), SH.o.FromArrayToRef(this._normals, 3 * EH, YH), SH.o.FromArrayToRef(this._normals, 3 * XH, uH), this._storedNormal.x = hH * GH.x + tH * YH.x + zH * uH.x, this._storedNormal.y = hH * GH.y + tH * YH.y + zH * uH.y, this._storedNormal.z = hH * GH.z + tH * YH.z + zH * uH.z)
      }
      clone() {
        const HH = new TH(this.mesh);
        return GH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        HH.setVector3("direction1", this.direction1), HH.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(HH) {
        HH.addUniform("direction1", 3), HH.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const HH = {};
        return HH.type = this.getClassName(), HH.direction1 = this.direction1.xrH(), HH.direction2 = this.direction2.xrH(), HH.meshId = this.mesh?.id, HH.useMeshNormalsForDirection = this.useMeshNormalsForDirection, HH
      }
      parse(HH, BH) {
        SH.o.FromArrayToRef(HH.direction1, 0, this.direction1), SH.o.FromArrayToRef(HH.direction2, 0, this.direction2), HH.meshId && BH && (this.mesh = BH.getLastMeshById(HH.meshId)), this.useMeshNormalsForDirection = HH.useMeshNormalsForDirection
      }
    }
    class UH {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(HH) {
        this._targetStopDuration !== HH && (this._targetStopDuration = HH)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(HH) {
        this._noiseTexture !== HH && (this._noiseTexture = HH, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(HH) {
        this._attractors.push(HH)
      }
      removeAttractor(HH) {
        const BH = this._attractors.indexOf(HH); - 1 !== BH && this._attractors.splice(BH, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(HH) {
        this._animationSheetEnabled !== HH && (this._animationSheetEnabled = HH)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(HH) {
        this._isAnimationSheetEnabled != HH && (this._isAnimationSheetEnabled = HH, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(HH) {
        this._useLogarithmicDepth = HH && this.yN().Iu().getCaps().fragmentDepthSupported
      }
      yN() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(HH) {
        switch (HH) {
          case UH.BLENDMODE_MULTIPLYADD:
            return;
          case UH.BLENDMODE_ADD:
            HH = 1;
            break;
          case UH.BLENDMODE_ONEONE:
            HH = 6;
            break;
          case UH.BLENDMODE_STANDARD:
            HH = 2;
            break;
          case UH.BLENDMODE_MULTIPLY:
            HH = 4;
            break;
          case UH.BLENDMODE_SUBTRACT:
            HH = 3
        }
        this._engine.setAlphaMode(HH)
      }
      getDragGradients() {
        return this._dragGradients
      }
      getLimitVelocityGradients() {
        return this._limitVelocityGradients
      }
      getColorGradients() {
        return this._colorGradients
      }
      getSizeGradients() {
        return this._sizeGradients
      }
      getColorRemapGradients() {
        return this._colorRemapGradients
      }
      getAlphaRemapGradients() {
        return this._alphaRemapGradients
      }
      getLifeTimeGradients() {
        return this._lifeTimeGradients
      }
      getAngularSpeedGradients() {
        return this._angularSpeedGradients
      }
      getVelocityGradients() {
        return this._velocityGradients
      }
      getStartSizeGradients() {
        return this._startSizeGradients
      }
      getEmitRateGradients() {
        return this._emitRateGradients
      }
      addEmitRateGradient(HH, BH, LH) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, HH, BH, LH), this
      }
      removeEmitRateGradient(HH) {
        return this._removeFactorGradient(this._emitRateGradients, HH), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : SH.o.Zero()
      }
      set direction1(HH) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = HH)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : SH.o.Zero()
      }
      set direction2(HH) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = HH)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : SH.o.Zero()
      }
      set minEmitBox(HH) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = HH)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : SH.o.Zero()
      }
      set maxEmitBox(HH) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = HH)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(HH) {
        this._billboardMode !== HH && (this._billboardMode = HH, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(HH) {
        this._isBillboardBased !== HH && (this._isBillboardBased = HH, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(HH) {
        this._attachImageProcessingConfiguration(HH)
      }
      _attachImageProcessingConfiguration(HH) {
        HH !== this._imageProcessingConfiguration && (!HH && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = HH)
      }
      _reset() {}
      _addFactorGradient(HH, BH, LH, rH) {
        const SH = new AH.m(BH, LH, rH);
        HH.push(SH), HH.sort(((HH, BH) => HH.gradient < BH.gradient ? -1 : HH.gradient > BH.gradient ? 1 : 0))
      }
      _removeFactorGradient(HH, BH) {
        if (!HH) return;
        let LH = 0;
        for (const AH of HH) {
          if (AH.gradient === BH) {
            HH.splice(LH, 1);
            break
          }
          LH++
        }
      }
      _removeGradientAndTexture(HH, BH, LH) {
        if (!BH) return this;
        let AH = 0;
        for (const rH of BH) {
          if (rH.gradient === HH) {
            BH.splice(AH, 1);
            break
          }
          AH++
        }
        return LH && LH.dispose(), this
      }
      constructor(HH) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = SH.o.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new SH.o(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = UH.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new SH.n(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new SH.o(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = SH.o.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new EH.g(1, 1, 1, 1), this.color2 = new EH.g(1, 1, 1, 1), this.colorDead = new EH.g(0, 0, 0, 1), this.textureMask = new EH.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new CH.d, this.id = HH, this.name = HH
      }
      createPointEmitter(HH, BH) {
        const LH = function(HH, BH) {
          const LH = new uH;
          return LH.direction1 = HH, LH.direction2 = BH, LH
        }(HH, BH);
        return this.particleEmitterType = LH, LH
      }
      createHemisphericEmitter() {
        const HH = function() {
          return new QH(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = HH, HH
      }
      createSphereEmitter() {
        const HH = function() {
          return new WH(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = HH, HH
      }
      createDirectedSphereEmitter() {
        const HH = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new SH.o(0, 1, 0),
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SH.o(0, 1, 0);
          return new MH(HH, BH, LH)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new SH.o(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SH.o(0, 1, 0));
        return this.particleEmitterType = HH, HH
      }
      createCylinderEmitter() {
        const HH = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new xH.g(HH, BH, LH, AH)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = HH, HH
      }
      createDirectedCylinderEmitter() {
        const HH = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new SH.o(0, 1, 0),
            rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new SH.o(0, 1, 0);
          return new xH.d(HH, BH, LH, AH, rH)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new SH.o(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new SH.o(0, 1, 0));
        return this.particleEmitterType = HH, HH
      }
      createConeEmitter() {
        const HH = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new vH(HH, BH)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = HH, HH
      }
      createDirectedConeEmitter() {
        const HH = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SH.o(0, 1, 0),
            AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new SH.o(0, 1, 0);
          return new PH(HH, BH, LH, AH)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SH.o(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new SH.o(0, 1, 0));
        return this.particleEmitterType = HH, HH
      }
      createBoxEmitter(HH, BH, LH, AH) {
        const rH = new XH.b;
        return this.particleEmitterType = rH, this.direction1 = HH, this.direction2 = BH, this.minEmitBox = LH, this.maxEmitBox = AH, rH
      }
      createMeshEmitter() {
        const HH = function() {
          return new TH(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = HH, HH
      }
    }
    UH.BLENDMODE_ONEONE = 0, UH.BLENDMODE_STANDARD = 1, UH.BLENDMODE_ADD = 2, UH.BLENDMODE_MULTIPLY = 3, UH.BLENDMODE_MULTIPLYADD = 4, UH.BLENDMODE_SUBTRACT = -1;
    class VH {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new EH.g(0, 0, 0, 0), this.currentColor2 = new EH.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = SH.o.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class OH {
      constructor(HH) {
        this.particleSystem = HH, this.position = SH.o.Zero(), this.direction = SH.o.Zero(), this.color = new EH.g(0, 0, 0, 0), this.colorStep = new EH.g(0, 0, 0, 0), this.initialColor = new EH.g(0, 0, 0, 0), this.colorDead = new EH.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new SH.n(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new VH, this.id = OH._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let HH = this.age,
          BH = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === BH ? (BH = 1, HH = this._properties.randomCellOffset) : HH += this._properties.randomCellOffset);
        const LH = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let AH;
        AH = this._properties.initialSpriteCellLoop ? (0, YH.Clamp)(HH * BH % this.lifeTime / this.lifeTime) : (0, YH.Clamp)(HH * BH / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + AH * LH | 0
      }
      _inheritParticleInfoToSubEmitter(HH) {
        if (HH.particleSystem.emitter.position) {
          const BH = HH.particleSystem.emitter;
          if (BH.position.Tm(this.position), HH.inheritDirection) {
            const HH = SH.l.lu[0];
            this.direction.normalizeToRef(HH), BH.setDirection(HH, 0, Math.PI / 2)
          }
        } else {
          HH.particleSystem.emitter.Tm(this.position)
        }
        this.direction.scaleToRef(HH.inheritedVelocityAmount / 2, SH.l.lu[0]), HH.particleSystem._inheritedVelocityOffset.Tm(SH.l.lu[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const HH of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(HH)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = OH._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(HH) {
        HH.position.Tm(this.position), this._properties.initialDirection ? HH._properties.initialDirection ? HH._properties.initialDirection.Tm(this._properties.initialDirection) : HH._properties.initialDirection = this._properties.initialDirection.clone() : HH._properties.initialDirection = null, HH.direction.Tm(this.direction), this._properties.localPosition && (HH._properties.localPosition ? HH._properties.localPosition.Tm(this._properties.localPosition) : HH._properties.localPosition = this._properties.localPosition.clone()), HH.color.Tm(this.color), HH.colorStep.Tm(this.colorStep), HH.initialColor.Tm(this.initialColor), HH.colorDead.Tm(this.colorDead), HH.lifeTime = this.lifeTime, HH.age = this.age, HH._properties.randomCellOffset = this._properties.randomCellOffset, HH.size = this.size, HH.scale.Tm(this.scale), HH.angle = this.angle, HH.angularSpeed = this.angularSpeed, HH.particleSystem = this.particleSystem, HH.cellIndex = this.cellIndex, HH.id = this.id, HH._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (HH._properties.currentColorGradient = this._properties.currentColorGradient, HH._properties.currentColor1.Tm(this._properties.currentColor1), HH._properties.currentColor2.Tm(this._properties.currentColor2)), this._properties.currentSizeGradient && (HH._properties.currentSizeGradient = this._properties.currentSizeGradient, HH._properties.currentSize1 = this._properties.currentSize1, HH._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (HH._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, HH._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, HH._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (HH._properties.currentVelocityGradient = this._properties.currentVelocityGradient, HH._properties.currentVelocity1 = this._properties.currentVelocity1, HH._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (HH._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, HH._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, HH._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (HH._properties.currentDragGradient = this._properties.currentDragGradient, HH._properties.currentDrag1 = this._properties.currentDrag1, HH._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (HH._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, HH._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, HH._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (HH.remapData && this.remapData ? HH.remapData.Tm(this.remapData) : HH.remapData = new SH.q(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (HH._properties.randomNoiseCoordinates1 && HH._properties.randomNoiseCoordinates2 ? (HH._properties.randomNoiseCoordinates1.Tm(this._properties.randomNoiseCoordinates1), HH._properties.randomNoiseCoordinates2.Tm(this._properties.randomNoiseCoordinates2)) : (HH._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), HH._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), HH.metadata = this.metadata
      }
    }
    OH._Count = 0;
    var bH = LH(42398);
    class kH {
      get currentFrame() {
        return this._currentFrame
      }
      get _evaluatedFrom() {
        return this._playbackFrom
      }
      get _evaluatedTo() {
        return this._playbackTo
      }
      get _evaluatedProgress() {
        return this._playbackProgress
      }
      get _evaluatedSyncRoot() {
        return this._playbackSyncRoot
      }
      get _evaluatedJump() {
        return this._playbackJumped
      }
      get weight() {
        return this._weight
      }
      get currentValue() {
        return this._currentValue
      }
      get targetPath() {
        return this._targetPath
      }
      get target() {
        return this._currentActiveTarget
      }
      get isAdditive() {
        return this._host && this._host.isAdditive
      }
      constructor(HH, BH, LH, AH) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = BH, this.fX = HH, this._scene = LH, this._host = AH, this._activeTargets = [], BH._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            mB: this._getCorrectLoopMode()
          }, this._animation.dataType === bH.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = SH.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const HH = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, HH)
        }
        if (this.fX instanceof Array) {
          let HH = 0;
          for (const BH of this.fX) this._preparePath(BH, HH), this._getOriginalValues(HH), HH++;
          this._targetIsArray = !0
        } else this._preparePath(this.fX), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const rH = BH.getEvents();
        if (rH && rH.length > 0)
          for (const SH of rH) this._events.push(SH._clone());
        this._enableBlending = HH && HH.animationPropertiesOverride ? HH.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const LH = this._animation.targetPropertyPath;
        if (LH.length > 1) {
          let AH = HH;
          for (let HH = 0; HH < LH.length - 1; HH++) {
            const BH = LH[HH];
            if (AH = AH[BH], void 0 === AH) throw new Error(`Invalid property (${BH}) in property path (${LH.join(".")})`)
          }
          this._targetPath = LH[LH.length - 1], this._activeTargets[BH] = AH
        } else this._targetPath = LH[0], this._activeTargets[BH] = HH;
        if (void 0 === this._activeTargets[BH][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${LH.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.fX instanceof Array) {
            let HH = 0;
            for (const BH of this.fX) void 0 !== this._originalValue[HH] && this._setValue(BH, this._activeTargets[HH], this._originalValue[HH], -1, HH), HH++
          } else void 0 !== this._originalValue[0] && this._setValue(this.fX, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let HH = 0; HH < this._events.length; HH++) this._events[HH].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const HH = this._animation.runtimeAnimations.indexOf(this);
        HH > -1 && this._animation.runtimeAnimations.splice(HH, 1)
      }
      setValue(HH, BH) {
        if (this._targetIsArray)
          for (let LH = 0; LH < this.fX.length; LH++) {
            const AH = this.fX[LH];
            this._setValue(AH, this._activeTargets[LH], HH, BH, LH)
          } else this._setValue(this.fX, this._directTarget, HH, BH, 0)
      }
      _getOriginalValues() {
        let HH, BH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const LH = this._activeTargets[BH];
        if (bH.b.InheritOriginalValueFromActiveAnimations) {
          const HH = this._scene._activeAnimatables;
          for (let AH = 0; AH < HH.length; AH++) {
            const rH = HH[AH]._runtimeAnimations;
            for (let HH = 0; HH < rH.length; HH++) {
              const AH = rH[HH];
              if (AH !== this && AH._targetPath === this._targetPath)
                for (let HH = 0; HH < AH._activeTargets.length; HH++)
                  if (AH._activeTargets[HH] === LH && void 0 !== AH._originalValue[HH]) return void(AH._originalValue[HH] && AH._originalValue[HH].clone ? this._originalValue[BH] = AH._originalValue[HH].clone() : this._originalValue[BH] = AH._originalValue[HH])
            }
          }
        }
        HH = LH.getLocalMatrix && "_matrix" === this._targetPath ? LH.getLocalMatrix() : LH[this._targetPath], HH && HH.clone ? this._originalValue[BH] = HH.clone() : this._originalValue[BH] = HH
      }
      _registerTargetForLateAnimationBinding(HH, BH) {
        const LH = HH.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(LH), LH._lateAnimationHolders || (LH._lateAnimationHolders = {}), LH._lateAnimationHolders[HH.targetPath] || (LH._lateAnimationHolders[HH.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: BH
        }), HH.isAdditive ? (LH._lateAnimationHolders[HH.targetPath].additiveAnimations.push(HH), LH._lateAnimationHolders[HH.targetPath].totalAdditiveWeight += HH.weight) : (LH._lateAnimationHolders[HH.targetPath].animations.push(HH), LH._lateAnimationHolders[HH.targetPath].totalWeight += HH.weight)
      }
      _setValue(HH, BH, LH, AH, rH) {
        const hH = this._scene._animationWrites,
          tH = this._scene._animationWriteCount++;
        let zH = hH[tH];
        if (zH || (zH = hH[tH] = {
            runtimeAnimation: this,
            target: HH,
            weight: AH,
            additive: !1,
            blendingFactor: 1,
            XW: !1
          }), zH.runtimeAnimation = this, zH.target = HH, zH.weight = AH, zH.additive = this.isAdditive, zH.XW = !1, this._currentActiveTarget = BH, this._weight = AH, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const HH = BH[this._targetPath];
            HH.clone ? this._originalBlendValue = HH.clone() : this._originalBlendValue = HH
          }
          this._originalBlendValue.m ? bH.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? SH.e.DecomposeLerpToRef(this._originalBlendValue, LH, this._blendingFactor, this._currentValue) : this._currentValue = SH.e.DecomposeLerp(this._originalBlendValue, LH, this._blendingFactor) : this._currentValue ? SH.e.LerpToRef(this._originalBlendValue, LH, this._blendingFactor, this._currentValue) : this._currentValue = SH.e.Lerp(this._originalBlendValue, LH, this._blendingFactor) : this._currentValue = bH.b._UniversalLerp(this._originalBlendValue, LH, this._blendingFactor);
          const AH = HH && HH.animationPropertiesOverride ? HH.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          zH.blendingFactor = this._blendingFactor, this._blendingFactor += AH
        } else zH.blendingFactor = 1, this._currentValue ? this._currentValue.Tm ? this._currentValue.Tm(LH) : this._currentValue = LH : this._currentValue = LH?.clone ? LH.clone() : LH; - 1 !== AH ? this._registerTargetForLateAnimationBinding(this, this._originalValue[rH]) : this._animationState.mB === bH.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[rH], BH[this._targetPath]) : BH[this._targetPath] = this._originalValue[rH] + this._currentValue : BH[this._targetPath] = this._currentValue, HH.dLH && HH.dLH(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.fX && this.fX.animationPropertiesOverride) {
          return "MorphTarget" === this.fX.getClassName?.() && null == this.fX._animationPropertiesOverride ? this._animation.mB : this.fX.animationPropertiesOverride.mB
        }
        return this._animation.mB
      }
      goToFrame(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const LH = this._animation.getKeys();
        HH < LH[0].frame ? HH = LH[0].frame : HH > LH[LH.length - 1].frame && (HH = LH[LH.length - 1].frame);
        const AH = this._events;
        if (AH.length)
          for (let SH = 0; SH < AH.length; SH++) AH[SH].onlyOnce || (AH[SH].isDone = AH[SH].frame < HH);
        this._currentFrame = HH;
        const rH = this._animation._interpolate(HH, this._animationState);
        this.setValue(rH, BH)
      }
      _prepareForSpeedRatioChange(HH) {
        const BH = this._previousElapsedTime * (this._animation.framePerSecond * HH) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - BH
      }
      animate(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const hH = this._animation,
          tH = hH.targetPropertyPath;
        if (!tH || tH.length < 1) return this._stopped = !0, !1;
        let zH, CH = !0;
        const EH = this._events;
        let XH;
        if (this._coreRuntimeAnimation) XH = LH - BH, zH = this._coreRuntimeAnimation.currentFrame, this._currentFrame = zH, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let SH;
          (BH < this._minFrame || BH > this._maxFrame) && (BH = this._minFrame), (LH < this._minFrame || LH > this._maxFrame) && (LH = this._maxFrame), XH = LH - BH;
          let tH = HH * (hH.framePerSecond * rH) / 1e3 + this._absoluteFrameOffset,
            GH = 0,
            YH = !1;
          const uH = AH && this._animationState.mB === bH.b.ANIMATIONLOOPMODE_YOYO;
          if (uH) {
            const HH = (tH - BH) / XH,
              LH = Math.sin(HH * Math.PI);
            tH = Math.abs(LH) * XH + BH;
            const AH = LH >= 0 ? 1 : -1;
            this._yoyoDirection !== AH && (YH = !0), this._yoyoDirection = AH
          }
          if (this._previousElapsedTime = HH, this._previousAbsoluteFrame = tH, !AH && LH >= BH && (tH >= XH && rH > 0 || tH <= 0 && rH < 0)) CH = !1, GH = hH.evaluate(LH);
          else if (!AH && BH >= LH && (tH <= XH && rH < 0 || tH >= 0 && rH > 0)) CH = !1, GH = hH.evaluate(BH);
          else if (this._animationState.mB !== bH.b.ANIMATIONLOOPMODE_CYCLE) {
            const HH = LH.toString() + BH.toString();
            if (!this._offsetsCache[HH]) {
              this._animationState.repeatCount = 0, this._animationState.mB = bH.b.ANIMATIONLOOPMODE_CYCLE;
              const AH = hH._interpolate(BH, this._animationState),
                rH = hH._interpolate(LH, this._animationState);
              switch (this._animationState.mB = this._getCorrectLoopMode(), hH.dataType) {
                case bH.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[HH] = rH - AH;
                  break;
                case bH.b.ANIMATIONTYPE_QUATERNION:
                case bH.b.ANIMATIONTYPE_VECTOR3:
                case bH.b.ANIMATIONTYPE_VECTOR2:
                case bH.b.ANIMATIONTYPE_SIZE:
                case bH.b.ANIMATIONTYPE_COLOR3:
                case bH.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[HH] = rH.subtract(AH)
              }
              this._highLimitsCache[HH] = rH
            }
            GH = this._highLimitsCache[HH], SH = this._offsetsCache[HH]
          }
          if (void 0 === SH) switch (hH.dataType) {
            case bH.b.ANIMATIONTYPE_FLOAT:
              SH = 0;
              break;
            case bH.b.ANIMATIONTYPE_QUATERNION:
              SH = bH.m;
              break;
            case bH.b.ANIMATIONTYPE_VECTOR3:
              SH = bH.w;
              break;
            case bH.b.ANIMATIONTYPE_VECTOR2:
              SH = bH.t;
              break;
            case bH.b.ANIMATIONTYPE_SIZE:
              SH = bH.p;
              break;
            case bH.b.ANIMATIONTYPE_COLOR3:
              SH = bH.g;
              break;
            case bH.b.ANIMATIONTYPE_COLOR4:
              SH = bH.k
          }
          const QH = this._host ? this._host.syncRoot : null;
          let WH, MH = this._playbackFrames,
            xH = !1;
          if (QH) {
            const HH = QH.toFrame - QH.fromFrame,
              LH = QH.masterFrame,
              AH = (LH - QH.fromFrame) / HH;
            zH = BH + XH * AH;
            const rH = QH.getAnimations()[0];
            if (rH && 0 !== HH) {
              const HH = XH * AH,
                BH = rH._playbackTo - rH._playbackFrom;
              if (0 !== BH && rH._playbackFrom <= QH.fromFrame && rH._playbackTo >= QH.toFrame) {
                MH = XH * Math.round((rH._playbackFrames - (rH._currentFrame - rH._playbackFrom)) / BH) + HH
              } else xH = (LH - this._playbackSyncMasterFrame) * (rH._playbackFrames - this._playbackSyncMasterPlayed) < 0, MH = HH;
              xH = xH || rH._playbackJumped, this._playbackSyncMasterPlayed = rH._playbackFrames, this._playbackSyncMasterFrame = LH
            }
          } else zH = tH > 0 && BH > LH || tH < 0 && BH < LH ? CH && 0 !== XH ? LH + tH % XH : BH : CH && 0 !== XH ? BH + tH % XH : LH;
          if (!uH && (rH > 0 && this.currentFrame > zH || rH < 0 && this.currentFrame < zH) || uH && YH) {
            this._onLoop();
            for (let HH = 0; HH < EH.length; HH++) EH[HH].onlyOnce || (EH[HH].isDone = !1);
            this._animationState.key = rH > 0 ? 0 : hH.getKeys().length - 1
          }
          if (this._currentFrame = zH, this._animationState.repeatCount = 0 === XH ? 0 : tH / XH | 0, this._animationState.highLimitValue = GH, this._animationState.offsetValue = SH, this._playbackFrom = BH, this._playbackTo = LH, this._playbackJumped = xH, this._playbackSyncRoot = QH, QH) WH = MH;
          else if (CH) WH = uH ? zH === BH && tH === LH ? XH : zH - BH : tH;
          else {
            const HH = 0 !== XH ? Math.floor(this._playbackFrames / XH) : 0;
            WH = (zH === LH ? HH + 1 : HH) * XH
          }
          this._playbackFrames = WH, this._playbackProgress = this._animationState.mB === bH.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? XH : WH
        }
        const GH = hH._interpolate(zH, this._animationState);
        if (this.setValue(GH, SH), EH.length)
          for (let YH = 0; YH < EH.length; YH++)
            if (XH >= 0 && zH >= EH[YH].frame && EH[YH].frame >= BH || XH < 0 && zH <= EH[YH].frame && EH[YH].frame <= BH) {
              const HH = EH[YH];
              HH.isDone || (HH.onlyOnce && (EH.splice(YH, 1), YH--), HH.isDone = !0, HH.action(zH))
            } return CH || (this._stopped = !0), CH
      }
    }
    var mH = LH(41190);
    class oH {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(HH) {
        this._weight = -1 !== HH ? Math.min(Math.max(HH, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(HH) {
        for (let BH = 0; BH < this._runtimeAnimations.length; BH++) {
          this._runtimeAnimations[BH]._prepareForSpeedRatioChange(HH)
        }
        this._speedRatio = HH, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          SH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          tH = arguments.length > 6 ? arguments[6] : void 0,
          zH = arguments.length > 7 ? arguments[7] : void 0,
          CH = arguments.length > 8 ? arguments[8] : void 0,
          EH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          XH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = BH, this.fromFrame = LH, this.toFrame = AH, this.loopAnimation = SH, this.onAnimationEnd = tH, this.onAnimationLoop = CH, this.isAdditive = EH, this.playOrder = XH, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.oX = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new rH.d, this.onAnimationLoopObservable = new rH.d, this._scene = HH, zH && this.appendAnimations(BH, zH), this._speedRatio = hH, HH._activeAnimatables.push(this)
      }
      syncWith(HH) {
        if (this._syncRoot = HH, HH) {
          const HH = this._scene._activeAnimatables.indexOf(this);
          HH > -1 && (this._scene._activeAnimatables.splice(HH, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(HH, BH) {
        for (let LH = 0; LH < BH.length; LH++) {
          const AH = BH[LH],
            rH = new kH(HH, AH, this._scene, this);
          rH._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(rH)
        }
      }
      getAnimationByTargetProperty(HH) {
        const BH = this._runtimeAnimations;
        for (let LH = 0; LH < BH.length; LH++)
          if (BH[LH].animation.targetProperty === HH) return BH[LH].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(HH) {
        const BH = this._runtimeAnimations;
        for (let LH = 0; LH < BH.length; LH++)
          if (BH[LH].animation.targetProperty === HH) return BH[LH];
        return null
      }
      reset() {
        const HH = this._runtimeAnimations;
        for (let BH = 0; BH < HH.length; BH++) HH[BH].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(HH) {
        const BH = this._runtimeAnimations;
        for (let LH = 0; LH < BH.length; LH++) BH[LH].animation.enableBlending = !0, BH[LH].animation.blendingSpeed = HH
      }
      disableBlending() {
        const HH = this._runtimeAnimations;
        for (let BH = 0; BH < HH.length; BH++) HH[BH].animation.enableBlending = !1
      }
      goToFrame(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = this._runtimeAnimations;
        if (LH[0]) {
          const BH = LH[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? LH[0].currentFrame;
          const AH = 0 === this.speedRatio ? 0 : (HH - this._frameToSyncFromJump) / BH * 1e3 / this.speedRatio;
          this._manualJumpDelay = -AH
        }
        for (let AH = 0; AH < LH.length; AH++) LH[AH].goToFrame(HH, BH ? this._weight : -1);
        this._goToFrame = HH
      }
      get paused() {
        return this.oX
      }
      pause() {
        this.oX || (this.oX = !0)
      }
      restart() {
        this.oX = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (HH || BH) {
          const rH = this._scene._activeAnimatables.indexOf(this);
          if (rH > -1) {
            const SH = this._runtimeAnimations;
            for (let LH = SH.length - 1; LH >= 0; LH--) {
              const AH = SH[LH];
              HH && AH.animation.name != HH || (BH && !BH(AH.target) || (AH.dispose(), SH.splice(LH, 1)))
            }
            0 == SH.length && (LH || this._scene._activeAnimatables.splice(rH, 1), AH || this._raiseOnAnimationEnd())
          }
        } else {
          const HH = this._scene._activeAnimatables.indexOf(this);
          if (HH > -1) {
            LH || this._scene._activeAnimatables.splice(HH, 1);
            const BH = this._runtimeAnimations;
            for (let HH = 0; HH < BH.length; HH++) BH[HH].dispose();
            this._runtimeAnimations.length = 0, AH || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((HH => {
          this.onAnimationEndObservable.add((() => {
            HH(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(HH) {
        if (this.oX) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = HH), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = HH, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += HH - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !oH.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let BH = !1;
        const LH = this._runtimeAnimations;
        let AH;
        for (AH = 0; AH < LH.length; AH++) {
          const rH = LH[AH].animate(HH - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          BH = BH || rH
        }
        if (this.animationStarted = BH, !BH) {
          if (this.disposeOnEnd)
            for (AH = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(AH, 1), AH = 0; AH < LH.length; AH++) LH[AH].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return BH
      }
    }

    function IH(HH) {
      if (0 === HH.totalWeight && 0 === HH.totalAdditiveWeight) return HH.originalValue;
      let BH = 1;
      const LH = SH.l.lu[0],
        AH = SH.l.lu[1],
        rH = SH.l.Quaternion[0];
      let hH = 0;
      const tH = HH.animations[0],
        zH = HH.originalValue;
      let CH, EH = !1;
      if (HH.totalWeight < 1) CH = 1 - HH.totalWeight, zH.decompose(AH, rH, LH);
      else {
        if (hH = 1, BH = HH.totalWeight, CH = tH.weight / BH, 1 == CH) {
          if (!HH.totalAdditiveWeight) return tH.currentValue;
          EH = !0
        }
        tH.currentValue.decompose(AH, rH, LH)
      }
      if (!EH) {
        AH.scaleInPlace(CH), LH.scaleInPlace(CH), rH.scaleInPlace(CH);
        for (let tH = hH; tH < HH.animations.length; tH++) {
          const hH = HH.animations[tH];
          if (0 === hH.weight) continue;
          CH = hH.weight / BH;
          const zH = SH.l.lu[2],
            EH = SH.l.lu[3],
            XH = SH.l.Quaternion[1];
          hH.currentValue.decompose(EH, XH, zH), EH.scaleAndAddToRef(CH, AH), XH.scaleAndAddToRef(SH.f.Dot(rH, XH) > 0 ? CH : -CH, rH), zH.scaleAndAddToRef(CH, LH)
        }
        rH.normalize()
      }
      for (let GH = 0; GH < HH.additiveAnimations.length; GH++) {
        const BH = HH.additiveAnimations[GH];
        if (0 === BH.weight) continue;
        const hH = SH.l.lu[2],
          tH = SH.l.lu[3],
          zH = SH.l.Quaternion[1];
        BH.currentValue.decompose(tH, zH, hH), tH.multiplyToRef(AH, tH), SH.o.LerpToRef(AH, tH, BH.weight, AH), rH.multiplyToRef(zH, zH), SH.f.SlerpToRef(rH, zH, BH.weight, rH), hH.scaleAndAddToRef(BH.weight, LH)
      }
      const XH = tH ? tH._animationState.workValue : SH.l.Matrix[0].clone();
      return SH.e.ComposeToRef(AH, rH, LH, XH), XH
    }

    function fH(HH, BH) {
      if (0 === HH.totalWeight && 0 === HH.totalAdditiveWeight) return BH;
      const LH = HH.animations[0],
        AH = HH.originalValue;
      let rH = BH;
      if (0 === HH.totalWeight && HH.totalAdditiveWeight > 0) rH.Tm(AH);
      else if (1 === HH.animations.length) {
        if (SH.f.SlerpToRef(AH, LH.currentValue, Math.min(1, HH.totalWeight), rH), 0 === HH.totalAdditiveWeight) return rH
      } else if (HH.animations.length > 1) {
        let LH, hH, tH = 1;
        if (HH.totalWeight < 1) {
          const BH = 1 - HH.totalWeight;
          LH = [], hH = [], LH.push(AH), hH.push(BH)
        } else {
          if (2 === HH.animations.length && (SH.f.SlerpToRef(HH.animations[0].currentValue, HH.animations[1].currentValue, HH.animations[1].weight / HH.totalWeight, BH), 0 === HH.totalAdditiveWeight)) return BH;
          LH = [], hH = [], tH = HH.totalWeight
        }
        for (let BH = 0; BH < HH.animations.length; BH++) {
          const AH = HH.animations[BH];
          LH.push(AH.currentValue), hH.push(AH.weight / tH)
        }
        let zH = 0;
        for (let HH = 0; HH < LH.length;) HH ? (zH += hH[HH], SH.f.SlerpToRef(rH, LH[HH], hH[HH] / zH, rH), HH++) : (SH.f.SlerpToRef(LH[HH], LH[HH + 1], hH[HH + 1] / (hH[HH] + hH[HH + 1]), BH), rH = BH, zH = hH[HH] + hH[HH + 1], HH += 2)
      }
      for (let hH = 0; hH < HH.additiveAnimations.length; hH++) {
        const BH = HH.additiveAnimations[hH];
        0 !== BH.weight && (rH.multiplyToRef(BH.currentValue, SH.l.Quaternion[0]), SH.f.SlerpToRef(rH, SH.l.Quaternion[0], BH.weight, rH))
      }
      return rH
    }

    function lH(HH, BH) {
      BH && (BH.prototype.copyAnimationRange = function(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new bH.b(this.name, "_matrix", HH.animations[0].framePerSecond, bH.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const SH = HH.animations[0].getRange(BH);
        if (!SH) return !1;
        const hH = SH.from,
          tH = SH.to,
          zH = HH.animations[0].getKeys(),
          CH = HH.length,
          EH = HH.getParent(),
          XH = this.getParent(),
          GH = AH && EH && CH && this.length && CH !== this.length,
          YH = GH && XH && EH ? XH.length / EH.length : 1,
          uH = AH && !XH && rH && (1 !== rH.x || 1 !== rH.y || 1 !== rH.z),
          QH = this.animations[0].getKeys();
        let WH, MH, xH;
        for (let vH = 0, PH = zH.length; vH < PH; vH++) WH = zH[vH], WH.frame >= hH && WH.frame <= tH && (AH ? (xH = WH.value.clone(), GH ? (MH = xH.getTranslation(), xH.setTranslation(MH.scaleInPlace(YH))) : uH && rH ? (MH = xH.getTranslation(), xH.setTranslation(MH.multiplyInPlace(rH))) : xH = WH.value) : xH = WH.value, QH.push({
          frame: WH.frame + LH,
          value: xH
        }));
        return this.animations[0].createRange(BH, hH + LH, tH + LH), !0
      }), HH && (HH.prototype._animate = function(HH) {
        const BH = this._animationWrites,
          LH = this._animationWriteCount;
        let AH = 0;
        for (let SH = this._animationStepWriteCount; SH < LH; SH++) {
          const HH = BH[SH];
          HH.XW && -1 === HH.weight || (HH.XW = !0, BH[SH] = BH[AH], BH[AH] = HH, AH++)
        }
        for (let SH = AH; SH < LH; SH++) {
          const HH = BH[SH];
          HH.runtimeAnimation = null, HH.target = null
        }
        if (this._animationWriteCount = AH, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const rH = mH.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = rH
        }
        this.deltaTime = void 0 !== HH ? HH : this.useConstantAnimationDeltaTime ? 16 : (rH - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = rH;
        const hH = this._activeAnimatables;
        if (0 === hH.length) return;
        this._animationTime += this.deltaTime;
        const tH = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let SH = 0; SH < hH.length; SH++) {
          const HH = hH[SH];
          !HH._animate(tH) && HH.disposeOnEnd && SH--
        }! function(HH) {
          if (HH._registeredForLateAnimationBindings.length) {
            for (let BH = 0; BH < HH._registeredForLateAnimationBindings.length; BH++) {
              const LH = HH._registeredForLateAnimationBindings.data[BH];
              for (const HH in LH._lateAnimationHolders) {
                const BH = LH._lateAnimationHolders[HH],
                  AH = BH.animations[0],
                  rH = BH.originalValue;
                if (void 0 === rH || null === rH) continue;
                const hH = bH.b.AllowMatrixDecomposeForInterpolation && rH.m;
                let tH = LH[HH];
                if (hH) tH = IH(BH);
                else if (void 0 !== rH.w) tH = fH(BH, tH || SH.f.Identity());
                else {
                  let HH = 0,
                    LH = 1;
                  const SH = AH && AH._animationState.mB === bH.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (BH.totalWeight < 1) tH = SH ? rH.clone ? rH.clone() : rH : AH && rH.scale ? rH.scale(1 - BH.totalWeight) : AH ? rH * (1 - BH.totalWeight) : rH.clone ? rH.clone() : rH;
                  else if (AH) {
                    LH = BH.totalWeight;
                    const hH = AH.weight / LH;
                    tH = 1 !== hH ? AH.currentValue.scale ? AH.currentValue.scale(hH) : AH.currentValue * hH : (BH.animations.length > 1 || BH.additiveAnimations.length > 0) && AH.currentValue.clone ? AH.currentValue.clone() : AH.currentValue, SH && (tH.addToRef ? tH.addToRef(rH, tH) : tH += rH), HH = 1
                  }
                  for (let AH = HH; AH < BH.animations.length; AH++) {
                    const HH = BH.animations[AH],
                      rH = HH.weight / LH;
                    rH && (HH.currentValue.scaleAndAddToRef ? HH.currentValue.scaleAndAddToRef(rH, tH) : tH += HH.currentValue * rH)
                  }
                  for (let AH = 0; AH < BH.additiveAnimations.length; AH++) {
                    const HH = BH.additiveAnimations[AH],
                      LH = HH.weight;
                    LH && (HH.currentValue.scaleAndAddToRef ? HH.currentValue.scaleAndAddToRef(LH, tH) : tH += HH.currentValue * LH)
                  }
                }
                LH[HH] = tH
              }
              LH._lateAnimationHolders = {}
            }
            HH._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, HH.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((HH, BH) => HH.playOrder - BH.playOrder))
      }, HH.prototype.beginWeightedAnimation = function(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          rH = arguments.length > 4 ? arguments[4] : void 0,
          SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          hH = arguments.length > 6 ? arguments[6] : void 0,
          tH = arguments.length > 7 ? arguments[7] : void 0,
          zH = arguments.length > 8 ? arguments[8] : void 0,
          CH = arguments.length > 9 ? arguments[9] : void 0,
          EH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const XH = this.beginAnimation(HH, BH, LH, rH, SH, hH, tH, !1, zH, CH, EH);
        return XH.weight = AH, XH
      }, HH.prototype.beginAnimation = function(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          SH = arguments.length > 5 ? arguments[5] : void 0,
          hH = arguments.length > 6 ? arguments[6] : void 0,
          tH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          zH = arguments.length > 8 ? arguments[8] : void 0,
          CH = arguments.length > 9 ? arguments[9] : void 0,
          EH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (rH < 0) {
          const HH = BH;
          BH = LH, LH = HH, rH = -rH
        }
        BH > LH && (rH = -rH), tH && this.stopAnimation(HH, void 0, zH), hH || (hH = new oH(this, HH, BH, LH, AH, rH, SH, void 0, CH, EH));
        const XH = !zH || zH(HH);
        if (HH.animations && XH && hH.appendAnimations(HH, HH.animations), HH.getAnimatables) {
          const EH = HH.getAnimatables();
          for (let HH = 0; HH < EH.length; HH++) this.beginAnimation(EH[HH], BH, LH, AH, rH, SH, hH, tH, zH, CH)
        }
        return hH.reset(), hH
      }, HH.prototype.beginHierarchyAnimation = function(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          hH = arguments.length > 6 ? arguments[6] : void 0,
          tH = arguments.length > 7 ? arguments[7] : void 0,
          zH = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          CH = arguments.length > 9 ? arguments[9] : void 0,
          EH = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const XH = HH.getDescendants(BH),
          GH = [];
        GH.push(this.beginAnimation(HH, LH, AH, rH, SH, hH, tH, zH, CH, void 0, EH));
        for (const YH of XH) GH.push(this.beginAnimation(YH, LH, AH, rH, SH, hH, tH, zH, CH, void 0, EH));
        return GH
      }, HH.prototype.beginDirectAnimation = function(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (SH < 0) {
          const HH = LH;
          LH = AH, AH = HH, SH = -SH
        }
        LH > AH && (SH = -SH);
        return new oH(this, HH, LH, AH, rH, SH, arguments.length > 6 ? arguments[6] : void 0, BH, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, HH.prototype.beginDirectHierarchyAnimation = function(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        let CH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const EH = HH.getDescendants(BH),
          XH = [];
        XH.push(this.beginDirectAnimation(HH, LH, AH, rH, SH, hH, tH, zH, CH));
        for (const GH of EH) XH.push(this.beginDirectAnimation(GH, LH, AH, rH, SH, hH, tH, zH, CH));
        return XH
      }, HH.prototype.getAnimatableByTarget = function(HH) {
        for (let BH = 0; BH < this._activeAnimatables.length; BH++)
          if (this._activeAnimatables[BH].target === HH) return this._activeAnimatables[BH];
        return null
      }, HH.prototype.getAllAnimatablesByTarget = function(HH) {
        const BH = [];
        for (let LH = 0; LH < this._activeAnimatables.length; LH++) this._activeAnimatables[LH].target === HH && BH.push(this._activeAnimatables[LH]);
        return BH
      }, HH.prototype.stopAnimation = function(HH, BH, LH) {
        const AH = this.getAllAnimatablesByTarget(HH);
        for (const rH of AH) rH.stop(BH, LH)
      }, HH.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let HH = 0; HH < this._activeAnimatables.length; HH++) this._activeAnimatables[HH].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const HH of this.animationGroups) HH.stop()
      })
    }
    oH.ProcessPausedAnimatables = !1;
    var KH, cH = LH(37974),
      eH = LH(41498),
      qH = LH(41169);
    class gH extends eH.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(HH) {
        (HH.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.Tm(HH), this._markAsDirtyAndDecompose())
      }
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          tH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(HH, BH.yN(), !1), this.name = HH, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = BH, this._localMatrix = AH?.clone() ?? SH.e.Identity(), this._restMatrix = rH ?? this._localMatrix.clone(), this._bindMatrix = hH ?? this._localMatrix.clone(), this._index = tH, this._absoluteMatrix = new SH.e, this._absoluteBindMatrix = new SH.e, this._absoluteInverseBindMatrix = new SH.e, this._finalMatrix = new SH.e, BH.bones.push(this), this.setParent(LH, !1), this._updateAbsoluteBindMatrices()
      }
      getClassName() {
        return "Bone"
      }
      getSkeleton() {
        return this._skeleton
      }
      get parent() {
        return this._parentNode
      }
      getParent() {
        return this.parent
      }
      getChildren() {
        return this.children
      }
      getIndex() {
        return null === this._index ? this.getSkeleton().bones.indexOf(this) : this._index
      }
      set parent(HH) {
        this.setParent(HH)
      }
      setParent(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== HH) {
          if (this.parent) {
            const HH = this.parent.children.indexOf(this); - 1 !== HH && this.parent.children.splice(HH, 1)
          }
          this._parentNode = HH, this.parent && this.parent.children.push(this), BH && this._updateAbsoluteBindMatrices(), this.dLH()
        }
      }
      getLocalMatrix() {
        return this._compose(), this._localMatrix
      }
      getBindMatrix() {
        return this._bindMatrix
      }
      getBaseMatrix() {
        return this.getBindMatrix()
      }
      getRestMatrix() {
        return this._restMatrix
      }
      getRestPose() {
        return this.getRestMatrix()
      }
      setRestMatrix(HH) {
        this._restMatrix.Tm(HH)
      }
      setRestPose(HH) {
        this.setRestMatrix(HH)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(HH) {
        this.wHH(HH)
      }
      setBindPose(HH) {
        this.setBindMatrix(HH)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const HH = SH.l.lu[0],
            BH = SH.l.Quaternion[0],
            LH = SH.l.lu[1];
          this.getRestMatrix().decompose(HH, BH, LH), this._linkedTransformNode.position.Tm(LH), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? SH.f.Identity(), this._linkedTransformNode.rotationQuaternion.Tm(BH), this._linkedTransformNode.bX.Tm(HH)
        } else this._matrix = this._restMatrix
      }
      getAbsoluteInverseBindMatrix() {
        return this._absoluteInverseBindMatrix
      }
      getInvertedAbsoluteTransform() {
        return this.getAbsoluteInverseBindMatrix()
      }
      getAbsoluteMatrix() {
        return this._skeleton.computeAbsoluteMatrices(), this._absoluteMatrix
      }
      getAbsoluteTransform() {
        return this.getAbsoluteMatrix()
      }
      linkTransformNode(HH) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = HH, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.zLH
      }
      set position(HH) {
        this._decompose(), this.zLH.Tm(HH), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(HH) {
        this.setRotation(HH)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(HH) {
        this.setRotationQuaternion(HH)
      }
      get bX() {
        return this.getScale()
      }
      set bX(HH) {
        this.setScale(HH)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = SH.o.Zero(), this._localRotation = SH.f.Zero(), this.zLH = SH.o.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.zLH))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, SH.e.ComposeToRef(this._localScaling, this._localRotation, this.zLH, this._localMatrix)) : this._needToCompose = !1)
      }
      wHH(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.Tm(HH), BH && this._updateAbsoluteBindMatrices(), LH ? this._matrix = HH : this.dLH()
      }
      _updateAbsoluteBindMatrices(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (HH || (HH = this._bindMatrix), this.parent ? HH.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.Tm(HH), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), BH)
          for (let LH = 0; LH < this.children.length; LH++) this.children[LH]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      dLH() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.dLH(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.dLH(), this._needToDecompose = !0
      }
      _updatePosition(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const rH = this.getLocalMatrix();
        if (0 == BH) AH ? (rH.addAtIndex(12, HH.x), rH.addAtIndex(13, HH.y), rH.addAtIndex(14, HH.z)) : rH.setTranslationFromFloats(HH.x, HH.y, HH.z);
        else {
          const BH = gH._TmpMats[0],
            hH = gH._TmpVecs[0];
          this.parent ? (BH.Tm(this.parent.getAbsoluteMatrix()), LH && BH.multiplyToRef(LH.getWorldMatrix(), BH)) : SH.e.IdentityToRef(BH), AH && BH.setTranslationFromFloats(0, 0, 0), BH.invert(), SH.o.TransformCoordinatesToRef(HH, BH, hH), AH ? (rH.addAtIndex(12, hH.x), rH.addAtIndex(13, hH.y), rH.addAtIndex(14, hH.z)) : rH.setTranslationFromFloats(hH.x, hH.y, hH.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(HH, BH, LH, !0)
      }
      setPosition(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(HH, BH, LH, !1)
      }
      setAbsolutePosition(HH, BH) {
        this.setPosition(HH, 1, BH)
      }
      scale(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const rH = this.getLocalMatrix(),
          hH = gH._TmpMats[0];
        SH.e.ScalingToRef(HH, BH, LH, hH), hH.multiplyToRef(rH, rH), hH.invert();
        for (const SH of this.children) {
          const AH = SH.getLocalMatrix();
          AH.multiplyToRef(hH, AH), AH.multiplyAtIndex(12, HH), AH.multiplyAtIndex(13, BH), AH.multiplyAtIndex(14, LH), SH._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), AH)
          for (const SH of this.children) SH.scale(HH, BH, LH, AH)
      }
      setScale(HH) {
        this._decompose(), this._localScaling.Tm(HH), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(HH) {
        this._decompose(), HH.Tm(this._localScaling)
      }
      setYawPitchRoll(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          rH = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === AH) {
          const hH = gH._TmpQuat;
          return SH.f.RotationYawPitchRollToRef(HH, BH, LH, hH), void this.setRotationQuaternion(hH, AH, rH)
        }
        const hH = gH._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(hH, rH)) return;
        const tH = gH._TmpMats[1];
        SH.e.RotationYawPitchRollToRef(HH, BH, LH, tH), hH.multiplyToRef(tH, tH), this._rotateWithMatrix(tH, AH, rH)
      }
      rotate(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 ? arguments[3] : void 0;
        const rH = gH._TmpMats[0];
        rH.setTranslationFromFloats(0, 0, 0), SH.e.RotationAxisToRef(HH, BH, rH), this._rotateWithMatrix(rH, LH, AH)
      }
      setAxisAngle(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === LH) {
          const rH = gH._TmpQuat;
          return SH.f.RotationAxisToRef(HH, BH, rH), void this.setRotationQuaternion(rH, LH, AH)
        }
        const rH = gH._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(rH, AH)) return;
        const hH = gH._TmpMats[1];
        SH.e.RotationAxisToRef(HH, BH, hH), rH.multiplyToRef(hH, hH), this._rotateWithMatrix(hH, LH, AH)
      }
      setRotation(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(HH.y, HH.x, HH.z, BH, LH)
      }
      setRotationQuaternion(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === BH) return this._decompose(), this._localRotation.Tm(HH), void this._markAsDirtyAndCompose();
        const AH = gH._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(AH, LH)) return;
        const rH = gH._TmpMats[1];
        SH.e.FromQuaternionToRef(HH, rH), AH.multiplyToRef(rH, rH), this._rotateWithMatrix(rH, BH, LH)
      }
      setRotationMatrix(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === BH) {
          const AH = gH._TmpQuat;
          return SH.f.FromRotationMatrixToRef(HH, AH), void this.setRotationQuaternion(AH, BH, LH)
        }
        const AH = gH._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(AH, LH)) return;
        const rH = gH._TmpMats[1];
        rH.Tm(HH), AH.multiplyToRef(HH, rH), this._rotateWithMatrix(rH, BH, LH)
      }
      _rotateWithMatrix(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const AH = this.getLocalMatrix(),
          rH = AH.m[12],
          SH = AH.m[13],
          hH = AH.m[14],
          tH = this.getParent(),
          zH = gH._TmpMats[3],
          CH = gH._TmpMats[4];
        tH && 1 == BH ? (LH ? (zH.Tm(LH.getWorldMatrix()), tH.getAbsoluteMatrix().multiplyToRef(zH, zH)) : zH.Tm(tH.getAbsoluteMatrix()), CH.Tm(zH), CH.invert(), AH.multiplyToRef(zH, AH), AH.multiplyToRef(HH, AH), AH.multiplyToRef(CH, AH)) : 1 == BH && LH ? (zH.Tm(LH.getWorldMatrix()), CH.Tm(zH), CH.invert(), AH.multiplyToRef(zH, AH), AH.multiplyToRef(HH, AH), AH.multiplyToRef(CH, AH)) : AH.multiplyToRef(HH, AH), AH.setTranslationFromFloats(rH, SH, hH), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(HH, BH) {
        const LH = gH._TmpMats[2];
        return HH.Tm(this.getAbsoluteMatrix()), BH ? (HH.multiplyToRef(BH.getWorldMatrix(), HH), SH.e.ScalingToRef(BH.bX.x, BH.bX.y, BH.bX.z, LH)) : SH.e.IdentityToRef(LH), HH.invert(), !isNaN(HH.m[0]) && (LH.multiplyAtIndex(0, this._scalingDeterminant), HH.multiplyToRef(LH, HH), !0)
      }
      hT() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const LH = SH.o.Zero();
        return this.getPositionToRef(HH, BH, LH), LH
      }
      getPositionToRef() {
        let HH = arguments.length > 1 ? arguments[1] : void 0,
          BH = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const HH = this.getLocalMatrix();
          BH.x = HH.m[12], BH.y = HH.m[13], BH.z = HH.m[14]
        } else {
          const LH = gH._TmpMats[0].Tm(this.getAbsoluteMatrix());
          HH && LH.multiplyToRef(HH.getWorldMatrix(), LH), BH.x = LH.m[12], BH.y = LH.m[13], BH.z = LH.m[14]
        }
      }
      getAbsolutePosition() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const BH = SH.o.Zero();
        return this.getPositionToRef(1, HH, BH), BH
      }
      getAbsolutePositionToRef(HH, BH) {
        this.getPositionToRef(1, HH, BH)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.Tm(this._localMatrix);
          const HH = this._skeleton.getPoseMatrix();
          HH && this._absoluteMatrix.multiplyToRef(HH, this._absoluteMatrix)
        }
        const HH = this.children,
          BH = HH.length;
        for (let LH = 0; LH < BH; LH++) HH[LH].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      T_(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const LH = SH.o.Zero();
        return this.getDirectionToRef(HH, BH, LH), LH
      }
      getDirectionToRef(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const AH = gH._TmpMats[0].Tm(this.getAbsoluteMatrix());
        BH && AH.multiplyToRef(BH.getWorldMatrix(), AH), SH.o.TransformNormalToRef(HH, AH, LH), LH.normalize()
      }
      getRotation() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const LH = SH.o.Zero();
        return this.getRotationToRef(HH, BH, LH), LH
      }
      getRotationToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const AH = gH._TmpQuat;
        this.getRotationQuaternionToRef(HH, BH, AH), AH.toEulerAnglesToRef(LH)
      }
      getRotationQuaternion() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const LH = SH.f.Identity();
        return this.getRotationQuaternionToRef(HH, BH, LH), LH
      }
      getRotationQuaternionToRef() {
        let HH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          BH = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), BH.Tm(this._localRotation);
        else {
          const LH = gH._TmpMats[0],
            AH = this.getAbsoluteMatrix();
          HH ? AH.multiplyToRef(HH.getWorldMatrix(), LH) : LH.Tm(AH), LH.multiplyAtIndex(0, this._scalingDeterminant), LH.multiplyAtIndex(1, this._scalingDeterminant), LH.multiplyAtIndex(2, this._scalingDeterminant), LH.decompose(void 0, BH, void 0)
        }
      }
      getRotationMatrix() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 ? arguments[1] : void 0;
        const LH = SH.e.Identity();
        return this.getRotationMatrixToRef(HH, BH, LH), LH
      }
      getRotationMatrixToRef() {
        let HH = arguments.length > 1 ? arguments[1] : void 0,
          BH = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(BH);
        else {
          const LH = gH._TmpMats[0],
            AH = this.getAbsoluteMatrix();
          HH ? AH.multiplyToRef(HH.getWorldMatrix(), LH) : LH.Tm(AH), LH.multiplyAtIndex(0, this._scalingDeterminant), LH.multiplyAtIndex(1, this._scalingDeterminant), LH.multiplyAtIndex(2, this._scalingDeterminant), LH.getRotationMatrixToRef(BH)
        }
      }
      getAbsolutePositionFromLocal(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const LH = SH.o.Zero();
        return this.getAbsolutePositionFromLocalToRef(HH, BH, LH), LH
      }
      getAbsolutePositionFromLocalToRef(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const AH = gH._TmpMats[0].Tm(this.getAbsoluteMatrix());
        BH && AH.multiplyToRef(BH.getWorldMatrix(), AH), SH.o.TransformCoordinatesToRef(HH, AH, LH)
      }
      getLocalPositionFromAbsolute(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const LH = SH.o.Zero();
        return this.getLocalPositionFromAbsoluteToRef(HH, BH, LH), LH
      }
      getLocalPositionFromAbsoluteToRef(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const AH = gH._TmpMats[0].Tm(this.getAbsoluteMatrix());
        BH && AH.multiplyToRef(BH.getWorldMatrix(), AH), AH.invert(), SH.o.TransformCoordinatesToRef(HH, AH, LH)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const HH = this._skeleton.bones.indexOf(this);
        if (-1 !== HH && this._skeleton.bones.splice(HH, 1), this._parentNode && this._parentNode.children) {
          const HH = this._parentNode.children,
            BH = HH.indexOf(this); - 1 !== BH && HH.splice(BH, 1)
        }
        super.dispose()
      }
    }
    gH._TmpVecs = (0, cH.d)(2, SH.o.Zero), gH._TmpQuat = SH.f.Identity(), gH._TmpMats = (0, cH.d)(5, SH.e.Identity), (KH = gH.prototype).copyAnimationRange ?? (KH.copyAnimationRange = (0, qH.f)("Bone", "copyAnimationRange"));
    var NH = LH(41383);
    let RH = !1;
    var jH = LH(41253),
      nH = LH(41609),
      FH = LH(41623),
      DH = LH(41618),
      wH = LH(41410);

    function ZH(HH, BH) {
      const LH = (0, YH.RandomRange)(0, 1);
      EH.g.LerpToRef(BH.color1, BH.color2, LH, HH.color)
    }

    function dH(HH, BH) {
      BH.colorDead.subtractToRef(HH.color, BH._colorDiff), BH._colorDiff.scaleToRef(1 / HH.lifeTime, HH.colorStep)
    }

    function aH(HH, BH) {
      HH._properties.currentColorGradient = BH._colorGradients[0], HH._properties.currentColorGradient.getColorToRef(HH.color), HH._properties.currentColor1.Tm(HH.color), BH._colorGradients.length > 1 ? BH._colorGradients[1].getColorToRef(HH._properties.currentColor2) : HH._properties.currentColor2.Tm(HH.color)
    }

    function sH(HH, BH) {
      const LH = BH._colorGradients;
      AH.o.GetCurrentGradient(BH._ratio, LH, ((BH, LH, AH) => {
        BH !== HH._properties.currentColorGradient && (HH._properties.currentColor1.Tm(HH._properties.currentColor2), LH.getColorToRef(HH._properties.currentColor2), HH._properties.currentColorGradient = BH), EH.g.LerpToRef(HH._properties.currentColor1, HH._properties.currentColor2, AH, HH.color), HH.color.a < 0 && (HH.color.a = 0)
      }))
    }

    function JH(HH, BH) {
      HH.colorStep.scaleToRef(BH._scaledUpdateSpeed, BH._scaledColorStep), HH.color.addInPlace(BH._scaledColorStep), HH.color.a < 0 && (HH.color.a = 0)
    }

    function iH(HH, BH) {
      AH.o.GetCurrentGradient(BH._ratio, BH._angularSpeedGradients, ((BH, LH, AH) => {
        BH !== HH._properties.currentAngularSpeedGradient && (HH._properties.currentAngularSpeed1 = HH._properties.currentAngularSpeed2, HH._properties.currentAngularSpeed2 = LH.getFactor(), HH._properties.currentAngularSpeedGradient = BH), HH.angularSpeed = (0, YH.Lerp)(HH._properties.currentAngularSpeed1, HH._properties.currentAngularSpeed2, AH)
      }))
    }

    function pH(HH, BH) {
      HH.angle += HH.angularSpeed * BH._scaledUpdateSpeed
    }

    function yH(HH, BH) {
      BH.particleEmitterType.startDirectionFunction(BH._emitterWorldMatrix, HH.direction, HH, BH.isLocal, BH._emitterInverseWorldMatrix)
    }

    function HB(HH, BH) {
      BH.startDirectionFunction(BH._emitterWorldMatrix, HH.direction, HH, BH.isLocal)
    }

    function BB(HH, BH) {
      HH._properties.currentVelocityGradient = BH._velocityGradients[0], HH._properties.currentVelocity1 = HH._properties.currentVelocityGradient.getFactor(), BH._velocityGradients.length > 1 ? HH._properties.currentVelocity2 = BH._velocityGradients[1].getFactor() : HH._properties.currentVelocity2 = HH._properties.currentVelocity1
    }

    function LB(HH, BH) {
      HH._properties.currentLimitVelocityGradient = BH._limitVelocityGradients[0], HH._properties.currentLimitVelocity1 = HH._properties.currentLimitVelocityGradient.getFactor(), BH._limitVelocityGradients.length > 1 ? HH._properties.currentLimitVelocity2 = BH._limitVelocityGradients[1].getFactor() : HH._properties.currentLimitVelocity2 = HH._properties.currentLimitVelocity1
    }

    function AB(HH, BH) {
      AH.o.GetCurrentGradient(BH._ratio, BH._velocityGradients, ((BH, LH, AH) => {
        BH !== HH._properties.currentVelocityGradient && (HH._properties.currentVelocity1 = HH._properties.currentVelocity2, HH._properties.currentVelocity2 = LH.getFactor(), HH._properties.currentVelocityGradient = BH), HH._properties.directionScale *= (0, YH.Lerp)(HH._properties.currentVelocity1, HH._properties.currentVelocity2, AH)
      }))
    }

    function rB(HH, BH) {
      AH.o.GetCurrentGradient(BH._ratio, BH._limitVelocityGradients, ((LH, AH, rH) => {
        LH !== HH._properties.currentLimitVelocityGradient && (HH._properties.currentLimitVelocity1 = HH._properties.currentLimitVelocity2, HH._properties.currentLimitVelocity2 = AH.getFactor(), HH._properties.currentLimitVelocityGradient = LH);
        const SH = (0, YH.Lerp)(HH._properties.currentLimitVelocity1, HH._properties.currentLimitVelocity2, rH);
        HH.direction.length() > SH && HH.direction.scaleInPlace(BH.limitVelocityDamping)
      }))
    }

    function SB(HH) {
      HH.direction.scaleToRef(HH._properties.directionScale, HH._properties.scaledDirection)
    }

    function hB(HH, BH) {
      BH.particleEmitterType.startPositionFunction(BH._emitterWorldMatrix, HH.position, HH, BH.isLocal)
    }

    function tB(HH, BH) {
      BH.startPositionFunction(BH._emitterWorldMatrix, HH.position, HH, BH.isLocal)
    }

    function zB(HH, BH) {
      HH._properties.localPosition ? HH._properties.localPosition.Tm(HH.position) : HH._properties.localPosition = HH.position.clone(), SH.o.TransformCoordinatesToRef(HH._properties.localPosition, BH._emitterWorldMatrix, HH.position)
    }

    function CB(HH, BH) {
      BH.isLocal && HH._properties.localPosition ? (HH._properties.localPosition.addInPlace(HH._properties.scaledDirection), SH.o.TransformCoordinatesToRef(HH._properties.localPosition, BH._emitterWorldMatrix, HH.position)) : HH.position.addInPlace(HH._properties.scaledDirection)
    }

    function EB(HH, BH) {
      HH._properties.currentDragGradient = BH._dragGradients[0], HH._properties.currentDrag1 = HH._properties.currentDragGradient.getFactor(), BH._dragGradients.length > 1 ? HH._properties.currentDrag2 = BH._dragGradients[1].getFactor() : HH._properties.currentDrag2 = HH._properties.currentDrag1
    }

    function XB(HH, BH) {
      AH.o.GetCurrentGradient(BH._ratio, BH._dragGradients, ((BH, LH, AH) => {
        BH !== HH._properties.currentDragGradient && (HH._properties.currentDrag1 = HH._properties.currentDrag2, HH._properties.currentDrag2 = LH.getFactor(), HH._properties.currentDragGradient = BH);
        const rH = (0, YH.Lerp)(HH._properties.currentDrag1, HH._properties.currentDrag2, AH);
        HH._properties.scaledDirection.scaleInPlace(1 - rH)
      }))
    }

    function GB(HH, BH) {
      HH._properties.randomNoiseCoordinates1 && HH._properties.randomNoiseCoordinates2 ? (HH._properties.randomNoiseCoordinates1.SBH(Math.random(), Math.random(), Math.random()), HH._properties.randomNoiseCoordinates2.SBH(Math.random(), Math.random(), Math.random())) : (HH._properties.randomNoiseCoordinates1 = new SH.o(Math.random(), Math.random(), Math.random()), HH._properties.randomNoiseCoordinates2 = new SH.o(Math.random(), Math.random(), Math.random()))
    }

    function YB(HH, BH) {
      const LH = BH._noiseTextureData,
        AH = BH._noiseTextureSize;
      if (LH && AH && HH._properties.randomNoiseCoordinates1 && HH._properties.randomNoiseCoordinates2) {
        const rH = BH._fetchR(HH._properties.randomNoiseCoordinates1.x, HH._properties.randomNoiseCoordinates1.y, AH.width, AH.height, LH),
          hH = BH._fetchR(HH._properties.randomNoiseCoordinates1.z, HH._properties.randomNoiseCoordinates2.x, AH.width, AH.height, LH),
          tH = BH._fetchR(HH._properties.randomNoiseCoordinates2.y, HH._properties.randomNoiseCoordinates2.z, AH.width, AH.height, LH),
          zH = SH.l.lu[0],
          CH = SH.l.lu[1];
        zH.SBH((2 * rH - 1) * BH.noiseStrength.x, (2 * hH - 1) * BH.noiseStrength.y, (2 * tH - 1) * BH.noiseStrength.z), zH.scaleToRef(BH._tempScaledUpdateSpeed, CH), HH.direction.addInPlace(CH)
      }
    }

    function uB(HH, BH) {
      BH.gravity.scaleToRef(BH._tempScaledUpdateSpeed, BH._scaledGravity), HH.direction.addInPlace(BH._scaledGravity)
    }

    function QB(HH, BH) {
      HH.size = (0, YH.RandomRange)(BH.minSize, BH.maxSize), HH.scale.SBH((0, YH.RandomRange)(BH.minScaleX, BH.maxScaleX), (0, YH.RandomRange)(BH.minScaleY, BH.maxScaleY))
    }

    function WB(HH, BH) {
      HH._properties.currentSizeGradient = BH._sizeGradients[0], HH._properties.currentSize1 = HH._properties.currentSizeGradient.getFactor(), HH.size = HH._properties.currentSize1, BH._sizeGradients.length > 1 ? HH._properties.currentSize2 = BH._sizeGradients[1].getFactor() : HH._properties.currentSize2 = HH._properties.currentSize1, HH.scale.SBH((0, YH.RandomRange)(BH.minScaleX, BH.maxScaleX), (0, YH.RandomRange)(BH.minScaleY, BH.maxScaleY))
    }

    function MB(HH, BH) {
      const LH = BH._actualFrame / BH.targetStopDuration;
      AH.o.GetCurrentGradient(LH, BH._startSizeGradients, ((LH, AH, rH) => {
        LH !== BH._currentStartSizeGradient && (BH._currentStartSize1 = BH._currentStartSize2, BH._currentStartSize2 = AH.getFactor(), BH._currentStartSizeGradient = LH);
        const SH = (0, YH.Lerp)(BH._currentStartSize1, BH._currentStartSize2, rH);
        HH.scale.scaleInPlace(SH)
      }))
    }

    function xB(HH, BH) {
      AH.o.GetCurrentGradient(BH._ratio, BH._sizeGradients, ((BH, LH, AH) => {
        BH !== HH._properties.currentSizeGradient && (HH._properties.currentSize1 = HH._properties.currentSize2, HH._properties.currentSize2 = LH.getFactor(), HH._properties.currentSizeGradient = BH), HH.size = (0, YH.Lerp)(HH._properties.currentSize1, HH._properties.currentSize2, AH)
      }))
    }

    function vB(HH, BH) {
      HH.remapData = new SH.q(0, 1, 0, 1)
    }

    function PB(HH, BH) {
      BH._colorRemapGradients && BH._colorRemapGradients.length > 0 && AH.o.GetCurrentGradient(BH._ratio, BH._colorRemapGradients, ((BH, LH, AH) => {
        const rH = (0, YH.Lerp)(BH.factor1, LH.factor1, AH),
          SH = (0, YH.Lerp)(BH.factor2, LH.factor2, AH);
        HH.remapData.x = rH, HH.remapData.y = SH - rH
      })), BH._alphaRemapGradients && BH._alphaRemapGradients.length > 0 && AH.o.GetCurrentGradient(BH._ratio, BH._alphaRemapGradients, ((BH, LH, AH) => {
        const rH = (0, YH.Lerp)(BH.factor1, LH.factor1, AH),
          SH = (0, YH.Lerp)(BH.factor2, LH.factor2, AH);
        HH.remapData.z = rH, HH.remapData.w = SH - rH
      }))
    }

    function TB(HH, BH) {
      const LH = (0, YH.Clamp)(BH._actualFrame / BH.targetStopDuration);
      AH.o.GetCurrentGradient(LH, BH._lifeTimeGradients, ((BH, AH) => {
        const rH = BH,
          SH = AH,
          hH = rH.getFactor(),
          tH = SH.getFactor(),
          zH = (LH - rH.gradient) / (SH.gradient - rH.gradient);
        HH.lifeTime = (0, YH.Lerp)(hH, tH, zH)
      })), BH._emitPower = (0, YH.RandomRange)(BH.minEmitPower, BH.maxEmitPower)
    }

    function UB(HH, BH) {
      HH.lifeTime = (0, YH.RandomRange)(BH.minLifeTime, BH.maxLifeTime), BH._emitPower = (0, YH.RandomRange)(BH.minEmitPower, BH.maxEmitPower)
    }

    function VB(HH, BH) {
      0 === BH._emitPower ? (HH._properties.initialDirection ? HH._properties.initialDirection.Tm(HH.direction) : HH._properties.initialDirection = HH.direction.clone(), HH.direction.set(0, 0, 0)) : (HH._properties.initialDirection = null, HH.direction.scaleInPlace(BH._emitPower)), HH.direction.addInPlace(BH._inheritedVelocityOffset)
    }

    function OB(HH, BH) {
      HH.angularSpeed = (0, YH.RandomRange)(BH.minAngularSpeed, BH.maxAngularSpeed), HH.angle = (0, YH.RandomRange)(BH.minInitialRotation, BH.maxInitialRotation)
    }

    function bB(HH, BH) {
      HH._properties.currentAngularSpeedGradient = BH._angularSpeedGradients[0], HH.angularSpeed = HH._properties.currentAngularSpeedGradient.getFactor(), HH._properties.currentAngularSpeed1 = HH.angularSpeed, BH._angularSpeedGradients.length > 1 ? HH._properties.currentAngularSpeed2 = BH._angularSpeedGradients[1].getFactor() : HH._properties.currentAngularSpeed2 = HH._properties.currentAngularSpeed1, HH.angle = (0, YH.RandomRange)(BH.minInitialRotation, BH.maxInitialRotation)
    }

    function kB(HH, BH) {
      HH._properties.initialStartSpriteCellId = BH.startSpriteCellID, HH._properties.initialEndSpriteCellId = BH.endSpriteCellID, HH._properties.initialSpriteCellLoop = BH.spriteCellLoop
    }

    function mB(HH, BH) {
      HH.previousItem = BH.previousItem, HH.nextItem = BH, BH.previousItem && (BH.previousItem.nextItem = HH), BH.previousItem = HH
    }

    function oB(HH, BH) {
      HH.previousItem = BH, HH.nextItem = BH.nextItem, BH.nextItem && (BH.nextItem.previousItem = HH), BH.nextItem = HH
    }

    function IB(HH) {
      HH.previousItem && (HH.previousItem.nextItem = HH.nextItem), HH.nextItem && (HH.nextItem.previousItem = HH.previousItem)
    }
    var fB = LH(41662);
    class lB extends UH {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(HH) {
        this._startDirectionFunction !== HH && (this._startDirectionFunction = HH, this._directionCreation.process = HH ? HB : yH)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(HH) {
        this._startPositionFunction !== HH && (this._startPositionFunction = HH, this._positionCreation.process = HH ? tB : hB)
      }
      set onDispose(HH) {
        this._onDisposeObserver && this.uR.remove(this._onDisposeObserver), this._onDisposeObserver = this.uR.add(HH)
      }
      get mV() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(HH) {
        this._useRampGradients !== HH && (this._useRampGradients = HH, this._resetEffect(), HH ? (this._rampCreation = {
          process: vB,
          previousItem: null,
          nextItem: null
        }, oB(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: PB,
          previousItem: null,
          nextItem: null
        }, oB(this._remapGradientProcessing, this._gravityProcessing))) : (IB(this._rampCreation), IB(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(HH) {
        this._isLocal !== HH && (this._isLocal = HH, HH ? (this._isLocalCreation = {
          process: zB,
          previousItem: null,
          nextItem: null
        }, oB(this._isLocalCreation, this._positionCreation)) : IB(this._isLocalCreation))
      }
      get particles() {
        return this._particles
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(HH) {
        this._animationSheetEnabled !== HH && (this._animationSheetEnabled = HH, HH ? (this._sheetCreation = {
          process: kB,
          previousItem: null,
          nextItem: null
        }, oB(this._sheetCreation, this._colorDeadCreation)) : IB(this._sheetCreation), this._reset())
      }
      getActiveCount() {
        return this._particles.length
      }
      getClassName() {
        return "ParticleSystem"
      }
      isStopping() {
        return this._stopped && this.isAlive()
      }
      getCustomEffect() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[HH]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[HH] ?? this._customWrappers[0]
      }
      setCustomEffect(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[BH] = new nH.e(this._engine), this._customWrappers[BH].effect = HH, this._customWrappers[BH].drawContext && (this._customWrappers[BH].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new rH.d), this._onBeforeDrawParticlesObservable
      }
      get vertexShaderName() {
        return "particles"
      }
      get vertexBuffers() {
        return this._vertexBuffers
      }
      get indexBuffer() {
        return this._indexBuffer
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(HH) {
        if (this.noiseTexture !== HH) {
          if (this._noiseTexture = HH, !HH) return IB(this._noiseCreation), void IB(this._noiseProcessing);
          this._noiseCreation = {
            process: GB,
            previousItem: null,
            nextItem: null
          }, oB(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: YB,
            previousItem: null,
            nextItem: null
          }, oB(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          tH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          CH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        RH || (RH = !0, lH(NH.d, gH)), (0, jH.c)(), super(HH), this._emitterInverseWorldMatrix = SH.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new SH.o, this.uR = new rH.d, this.onStoppedObservable = new rH.d, this.onStartedObservable = new rH.d, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new EH.g(0, 0, 0, 0), this._colorDiff = new EH.g(0, 0, 0, 0), this._scaledGravity = SH.o.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = HH => {}, this.recycleParticle = HH => {
          const BH = this._particles.pop();
          BH !== HH && BH.copyTo(HH), BH.metadata = null, this._stockParticles.push(BH)
        }, this._createParticle = () => {
          let HH;
          return 0 !== this._stockParticles.length ? (HH = this._stockParticles.pop(), HH._reset()) : HH = new OH(this), this._prepareParticle(HH), HH
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = BH, this._epsilon = tH, LH && "Scene" !== LH.getClassName() ? (this._engine = LH, this.defaultProjectionMatrix = SH.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = LH || zH.d.LastCreatedScene, this._engine = this._scene.Iu(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.dU.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: UB,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: hB,
          previousItem: null,
          nextItem: null
        }, oB(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: yH,
          previousItem: null,
          nextItem: null
        }, oB(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: VB,
          previousItem: null,
          nextItem: null
        }, oB(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: QB,
          previousItem: null,
          nextItem: null
        }, oB(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: OB,
          previousItem: null,
          nextItem: null
        }, oB(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: ZH,
          previousItem: null,
          nextItem: null
        }, oB(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: dH,
          previousItem: null,
          nextItem: null
        }, oB(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, CH || (this._colorProcessing = {
          process: JH,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: pH,
          previousItem: null,
          nextItem: null
        }, oB(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: SB,
          previousItem: null,
          nextItem: null
        }, oB(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: CB,
          previousItem: null,
          nextItem: null
        }, oB(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: uB,
          previousItem: null,
          nextItem: null
        }, oB(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = hH, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new nH.e(this._engine)
        }, this._customWrappers[0].effect = AH, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new XH.b, this.updateFunction = HH => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((HH => {
            this._noiseTextureData = HH
          })));
          const BH = HH === this._particles;
          for (let LH = 0; LH < HH.length; LH++) {
            const AH = HH[LH];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const rH = AH.age;
            if (AH.age += this._tempScaledUpdateSpeed, AH.age > AH.lifeTime) {
              const HH = AH.age - rH,
                BH = AH.lifeTime - rH;
              this._tempScaledUpdateSpeed = BH * this._tempScaledUpdateSpeed / HH, AH.age = AH.lifeTime
            }
            this._ratio = AH.age / AH.lifeTime, AH._properties.directionScale = this._tempScaledUpdateSpeed;
            let SH = this._updateQueueStart;
            for (; SH;) SH.process(AH, this), SH = SH.nextItem;
            if (this._isAnimationSheetEnabled && !CH && AH.updateCellIndex(), AH._inheritParticleInfoToSubEmitters(), AH.age >= AH.lifeTime) {
              if (this._emitFromParticle(AH), AH._properties.attachedSubEmitters) {
                for (const HH of AH._properties.attachedSubEmitters) HH.particleSystem.disposeOnStop = !0, HH.particleSystem.stop();
                AH._properties.attachedSubEmitters = null
              }
              this.recycleParticle(AH), BH && LH--
            } else;
          }
        }
      }
      serialize(HH) {
        throw new Error("Method not implemented.")
      }
      clone(HH, BH) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = TB : this._lifeTimeCreation.process = UB
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: MB,
          previousItem: null,
          nextItem: null
        }, oB(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (IB(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(HH) {
        this.targetStopDuration !== HH && (this._targetStopDuration = HH, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(HH, BH, LH) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, HH, BH, LH), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(HH) {
        return this._removeFactorGradient(this._lifeTimeGradients, HH), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(HH, BH, LH) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = WB, this._sizeGradientProcessing = {
          process: xB,
          previousItem: null,
          nextItem: null
        }, mB(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, HH, BH, LH), this
      }
      removeSizeGradient(HH) {
        return this._removeFactorGradient(this._sizeGradients, HH), 0 === this._sizeGradients?.length && (IB(this._sizeGradientProcessing), this._sizeCreation.process = QB), this
      }
      addColorRemapGradient(HH, BH, LH) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, HH, BH, LH), this
      }
      removeColorRemapGradient(HH) {
        return this._removeFactorGradient(this._colorRemapGradients, HH), this
      }
      addAlphaRemapGradient(HH, BH, LH) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, HH, BH, LH), this
      }
      removeAlphaRemapGradient(HH) {
        return this._removeFactorGradient(this._alphaRemapGradients, HH), this
      }
      addAngularSpeedGradient(HH, BH, LH) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = bB, this._angularSpeedGradientProcessing = {
          process: iH,
          previousItem: null,
          nextItem: null
        }, mB(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, HH, BH, LH), this
      }
      removeAngularSpeedGradient(HH) {
        return this._removeFactorGradient(this._angularSpeedGradients, HH), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = OB, IB(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(HH, BH, LH) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: BB,
          previousItem: null,
          nextItem: null
        }, oB(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: AB,
          previousItem: null,
          nextItem: null
        }, mB(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, HH, BH, LH), this
      }
      removeVelocityGradient(HH) {
        return this._removeFactorGradient(this._velocityGradients, HH), 0 === this._velocityGradients?.length && (IB(this._velocityCreation), IB(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(HH, BH, LH) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: LB,
          previousItem: null,
          nextItem: null
        }, oB(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: rB,
          previousItem: null,
          nextItem: null
        }, oB(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, HH, BH, LH), this
      }
      removeLimitVelocityGradient(HH) {
        return this._removeFactorGradient(this._limitVelocityGradients, HH), 0 === this._limitVelocityGradients?.length && (IB(this._limitVelocityCreation), IB(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(HH, BH, LH) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: EB,
          previousItem: null,
          nextItem: null
        }, mB(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: XB,
          previousItem: null,
          nextItem: null
        }, mB(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, HH, BH, LH), this
      }
      removeDragGradient(HH) {
        return this._removeFactorGradient(this._dragGradients, HH), 0 === this._dragGradients?.length && (IB(this._dragCreation), IB(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(HH, BH, LH) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, HH, BH, LH), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(HH) {
        return this._removeFactorGradient(this._startSizeGradients, HH), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const HH = new Uint8Array(4 * this._rawTextureWidth),
          BH = EH.m.Color3[0];
        for (let LH = 0; LH < this._rawTextureWidth; LH++) {
          const rH = LH / this._rawTextureWidth;
          AH.o.GetCurrentGradient(rH, this._rampGradients, ((AH, rH, SH) => {
            EH.c.LerpToRef(AH.color, rH.color, SH, BH), HH[4 * LH] = 255 * BH.r, HH[4 * LH + 1] = 255 * BH.g, HH[4 * LH + 2] = 255 * BH.b, HH[4 * LH + 3] = 255
          }))
        }
        this._rampGradientsTexture = tH.b.CreateRGBATexture(HH, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((HH, BH) => HH.gradient < BH.gradient ? -1 : HH.gradient > BH.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(HH, BH) {
        this._rampGradients || (this._rampGradients = []);
        const LH = new AH.i(HH, BH);
        return this._rampGradients.push(LH), this._syncRampGradientTexture(), this
      }
      removeRampGradient(HH) {
        return this._removeGradientAndTexture(HH, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(HH, BH, LH) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = aH, this._colorProcessing.process = sH);
        const rH = new AH.e(HH, BH, LH);
        return this._colorGradients.push(rH), this._colorGradients.sort(((HH, BH) => HH.gradient < BH.gradient ? -1 : HH.gradient > BH.gradient ? 1 : 0)), this
      }
      removeColorGradient(HH) {
        if (!this._colorGradients) return this;
        let BH = 0;
        for (const LH of this._colorGradients) {
          if (LH.gradient === HH) {
            this._colorGradients.splice(BH, 1);
            break
          }
          BH++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = ZH, this._colorProcessing.process = JH), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const HH of this._drawWrappers)
            if (HH)
              for (const BH of HH) BH?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(HH, BH, LH, AH, rH) {
        return rH[4 * (((HH = .5 * Math.abs(HH) + .5) * LH % LH | 0) + ((BH = .5 * Math.abs(BH) + .5) * AH % AH | 0) * LH)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const HH = this._engine,
          BH = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * BH), this._vertexBuffer = new hH.b(HH, this._vertexData, !0, BH);
        let LH = 0;
        const AH = this._vertexBuffer.createVertexBuffer(hH.i.PositionKind, LH, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[hH.i.PositionKind] = AH, LH += 3;
        const rH = this._vertexBuffer.createVertexBuffer(hH.i.ColorKind, LH, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[hH.i.ColorKind] = rH, LH += 4;
        const SH = this._vertexBuffer.createVertexBuffer("angle", LH, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = SH, LH += 1;
        const tH = this._vertexBuffer.createVertexBuffer("size", LH, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = tH, LH += 2, this._isAnimationSheetEnabled) {
          const HH = this._vertexBuffer.createVertexBuffer("cellIndex", LH, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = HH, LH += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const HH = this._vertexBuffer.createVertexBuffer("direction", LH, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = HH, LH += 3
        }
        if (this._useRampGradients) {
          const HH = this._vertexBuffer.createVertexBuffer("remapData", LH, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = HH, LH += 4
        }
        let zH;
        if (this._useInstancing) {
          const BH = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new hH.b(HH, BH, !1, 2), zH = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else zH = this._vertexBuffer.createVertexBuffer("offset", LH, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = zH, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const HH = [],
          BH = [];
        let LH = 0;
        for (let AH = 0; AH < this._capacity; AH++) HH.push(LH), HH.push(LH + 1), HH.push(LH + 2), HH.push(LH), HH.push(LH + 2), HH.push(LH + 3), BH.push(LH, LH + 1, LH + 1, LH + 2, LH + 2, LH + 3, LH + 3, LH, LH, LH + 3), LH += 4;
        this._indexBuffer = this._engine.createIndexBuffer(HH), this._linesIndexBuffer = this._engine.createIndexBuffer(BH)
      }
      getCapacity() {
        return this._capacity
      }
      isAlive() {
        return this._alive
      }
      isStarted() {
        return this._started
      }
      _preStart() {}
      start() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (HH) return this.startDelay = HH, void setTimeout((() => {
          this.start(0)
        }), HH);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const HH = this.noiseTexture;
          if (HH && HH.onGeneratedObservable) HH.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let BH = 0; BH < this.preWarmCycles; BH++) this.animate(!0), HH.render()
            }))
          }));
          else
            for (let BH = 0; BH < this.preWarmCycles; BH++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(HH))
      }
      _postStop(HH) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(HH, BH, LH, AH) {
        let rH = HH * this._vertexBufferSize;
        const hH = SH.l.lu[0].Tm(this._scene?.floatingOriginOffset || SH.o.ZeroReadOnly);
        if (this._vertexData[rH++] = BH.position.x + this.worldOffset.x - hH.x, this._vertexData[rH++] = BH.position.y + this.worldOffset.y - hH.y, this._vertexData[rH++] = BH.position.z + this.worldOffset.z - hH.z, this._vertexData[rH++] = BH.color.r, this._vertexData[rH++] = BH.color.g, this._vertexData[rH++] = BH.color.b, this._vertexData[rH++] = BH.color.a, this._vertexData[rH++] = BH.angle, this._vertexData[rH++] = BH.scale.x * BH.size, this._vertexData[rH++] = BH.scale.y * BH.size, this._isAnimationSheetEnabled && (this._vertexData[rH++] = BH.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[rH++] = BH.direction.x, this._vertexData[rH++] = BH.direction.y, this._vertexData[rH++] = BH.direction.z);
        else if (BH._properties.initialDirection) {
          let HH = BH._properties.initialDirection;
          this.isLocal && (SH.o.TransformNormalToRef(HH, this._emitterWorldMatrix, SH.l.lu[0]), HH = SH.l.lu[0]), 0 === HH.x && 0 === HH.z && (HH.x = .001), this._vertexData[rH++] = HH.x, this._vertexData[rH++] = HH.y, this._vertexData[rH++] = HH.z
        } else {
          let HH = BH.direction;
          this.isLocal && (SH.o.TransformNormalToRef(HH, this._emitterWorldMatrix, SH.l.lu[0]), HH = SH.l.lu[0]), 0 === HH.x && 0 === HH.z && (HH.x = .001), this._vertexData[rH++] = HH.x, this._vertexData[rH++] = HH.y, this._vertexData[rH++] = HH.z
        }
        this._useRampGradients && BH.remapData && (this._vertexData[rH++] = BH.remapData.x, this._vertexData[rH++] = BH.remapData.y, this._vertexData[rH++] = BH.remapData.z, this._vertexData[rH++] = BH.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === LH ? LH = this._epsilon : 1 === LH && (LH = 1 - this._epsilon), 0 === AH ? AH = this._epsilon : 1 === AH && (AH = 1 - this._epsilon)), this._vertexData[rH++] = LH, this._vertexData[rH] = AH)
      }
      _prepareParticle(HH) {}
      _createNewOnes(HH) {
        let BH;
        for (let LH = 0; LH < HH && this._particles.length !== this._capacity; LH++) {
          BH = this._createParticle(), this._particles.push(BH);
          let HH = this._createQueueStart;
          for (; HH;) HH.process(BH, this), HH = HH.nextItem;
          BH._inheritParticleInfoToSubEmitters()
        }
      }
      _update(HH) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const HH = this.emitter;
          this._emitterWorldMatrix = HH.getWorldMatrix()
        } else {
          const HH = this.emitter;
          this._emitterWorldMatrix = SH.e.Translation(HH.x, HH.y, HH.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(HH)
      }
      static _GetAttributeNamesOrOptions() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = [hH.i.PositionKind, hH.i.ColorKind, "angle", "offset", "size"];
        return HH && AH.push("cellIndex"), BH || AH.push("direction"), LH && AH.push("remapData"), AH
      }
      static _GetEffectCreationOptions() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, FH.b)(AH), HH && AH.push("particlesInfos"), BH && AH.push("logarithmicDepthConstant"), LH && (AH.push("vFogInfos"), AH.push("vFogColor")), AH
      }
      fillDefines(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, FH.i)(this, this._scene, HH), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && HH.push("#define FOG")), this._isAnimationSheetEnabled && HH.push("#define ANIMATESHEET"), this.useLogarithmicDepth && HH.push("#define LOGARITHMICDEPTH"), BH === UH.BLENDMODE_MULTIPLY && HH.push("#define BLENDMULTIPLYMODE"), this.isLocal && HH.push("#define LOCAL"), this._useRampGradients && HH.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (HH.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            HH.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            HH.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && HH.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            HH.push("#define BILLBOARDMODE_ALL")
        }
        LH && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), HH.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(HH, BH, LH) {
        BH.push(...lB._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), HH.push(...lB._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), LH.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, wH.h)(HH, this._imageProcessingConfigurationDefines), (0, wH.e)(LH, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(HH) {
        var BH;
        const LH = this._getCustomDrawWrapper(HH);
        if (LH?.effect) return LH;
        const AH = [];
        this.fillDefines(AH, HH);
        const SH = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          hH = fB.e._PrepareStringDefines(SH, AH),
          tH = hH ? fB.e.GetConfiguration(SH) : void 0;
        let zH = this._drawWrappers[SH];
        zH || (zH = this._drawWrappers[SH] = [], 0 === SH || this._renderPassObserver || (this._renderPassObserver = ((BH = this._engine)._onReleaseRenderPassObservable ?? (BH._onReleaseRenderPassObservable = new rH.d)).add((HH => {
          const BH = this._drawWrappers[HH];
          if (BH) {
            for (const HH of BH) HH?.dispose();
            delete this._drawWrappers[HH]
          }
        }))));
        let CH = zH[HH];
        CH || (CH = new nH.e(this._engine), CH.drawContext && (CH.drawContext.useInstancing = this._useInstancing), zH[HH] = CH);
        const EH = AH.join("\n");
        if (CH.defines !== EH) {
          const HH = [],
            BH = [],
            LH = [];
          this.fillUniformsAttributesAndSamplerNames(BH, HH, LH), hH && (BH.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== tH?.defines.PREPASS_LOCAL_POSITION_INDEX && BH.push("inverseEmitterWM", "geometryWorldOffset")), CH.setEffect(this._engine.createEffect("particles", {
            attributes: HH,
            uniformsNames: BH,
            samplers: LH,
            defines: EH,
            shaderLanguage: this._shaderLanguage,
            multiTarget: hH,
            indexParameters: hH ? {
              buffersCount: tH?._mrtCount ?? 0
            } : void 0
          }, this._engine), EH)
        }
        return CH
      }
      _bindGeometryRendering(HH) {
        const BH = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          LH = fB.e.GetConfiguration(BH);
        if (!LH?._defines) return;
        HH.setFloat("objectId", 0), HH.setInt("meshBlendTag", 0);
        const AH = this._scene?.activeCamera;
        if (HH.setFloat2("cameraInfo", AH?.minZ ?? 0, AH?.maxZ ?? 1), this.isLocal && void 0 !== LH.defines.PREPASS_LOCAL_POSITION_INDEX) {
          HH.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const BH = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || SH.o.ZeroReadOnly, SH.l.lu[0]);
          HH.setVector3("geometryWorldOffset", BH)
        }
      }
      animate() {
        let HH, BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!BH && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (BH ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) HH = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const BH = this._calculateEmitRate();
            HH = BH * this._scaledUpdateSpeed | 0, this._newPartsExcess += BH * this._scaledUpdateSpeed - HH
          }
          if (this._newPartsExcess > 1 && (HH += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? HH = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(HH), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !BH) {
            let HH = 0;
            for (let BH = 0; BH < this._particles.length; BH++) {
              const LH = this._particles[BH];
              this._appendParticleVertices(HH, LH), HH += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const HH = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  BH = this._particles.length;
                BH < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, BH * HH, this._fixedCapacityHighWaterMark * HH), this._fixedCapacityHighWaterMark = BH, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
              } else this._vertexBuffer.updateDirectly(this._vertexData, 0, this._particles.length)
          }
          0 === this.manualEmitCount && this.disposeOnStop && this.stop()
        }
      }
      _initFixedCapacitySnapshotData() {
        return !this._useFixedCapacityForSnapshot && (this._useFixedCapacityForSnapshot = !0, this._vertexData.fill(0), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer?.updateDirectly(this._vertexData, 0, this._capacity), !0)
      }
      _clearFixedCapacitySnapshotData() {
        if (!this._useFixedCapacityForSnapshot || !this._vertexBuffer || 0 === this._fixedCapacityHighWaterMark) return;
        const HH = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * HH), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let HH = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const BH = this._actualFrame / this.targetStopDuration;
          AH.o.GetCurrentGradient(BH, this._emitRateGradients, ((BH, LH, AH) => {
            BH !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = LH.getFactor(), this._currentEmitRateGradient = BH), HH = (0, YH.Lerp)(this._currentEmitRate1, this._currentEmitRate2, AH)
          }))
        }
        return HH
      }
      _appendParticleVertices(HH, BH) {
        this._appendParticleVertex(HH++, BH, 0, 0), this._useInstancing || (this._appendParticleVertex(HH++, BH, 1, 0), this._appendParticleVertex(HH++, BH, 1, 1), this._appendParticleVertex(HH, BH, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !lB.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([LH.e(655).then((() => LH(64133))), LH.e(649).then((() => LH(64138)))])) : await Promise.all([LH.e(638).then((() => LH(64146))), Promise.all([LH.e(631), LH.e(664)]).then((() => LH(64151)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== UH.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(UH.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(UH.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(HH) {
        const BH = this._getWrapper(HH),
          LH = BH.effect,
          AH = this._engine;
        AH.enableEffect(BH);
        const rH = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        LH.setTexture("diffuseSampler", this.particleTexture), LH.setMatrix("view", rH);
        const hH = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (LH.setMatrix("projection", hH), this._isAnimationSheetEnabled && this.particleTexture) {
          const HH = this.particleTexture.getBaseSize();
          LH.setFloat3("particlesInfos", this.spriteCellWidth / HH.width, this.spriteCellHeight / HH.height, this.spriteCellWidth / HH.width)
        }
        if (LH.setVector2("translationPivot", this.translationPivot), LH.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const HH = this._scene.activeCamera;
          LH.setVector3("eyePosition", HH.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), LH.setTexture("rampSampler", this._rampGradientsTexture));
        const tH = LH.defines;
        this._scene && ((0, FH.d)(LH, this, this._scene), this.applyFog && (0, DH.f)(this._scene, void 0, LH)), tH.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (rH.invertToRef(SH.l.Matrix[0]), LH.setMatrix("invView", SH.l.Matrix[0])), LH._multiTarget && this._bindGeometryRendering(LH), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? AH.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, LH) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, LH)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? AH.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, LH) : AH.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, LH), this.useLogarithmicDepth && this._scene && (0, DH.q)(tH, LH, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(LH), this._setEngineBasedOnBlendMode(HH), LH._multiTarget && fB.e._BindZeroAlphaDiscard(AH, LH);
        let zH = !1;
        try {
          fB.e._BindAttachmentsForEffect(AH, LH) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(LH), this._useInstancing ? this._scene?.forceWireframe ? AH.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : AH.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? AH.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : AH.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), zH = !0)
        } finally {
          fB.e._RestoreAttachments(AH)
        }
        return zH ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const HH = this._engine;
        let BH;
        return HH.setState && (HH.setState(!1), this.forceDepthWrite && HH.setDepthWrite(!0)), BH = this.blendMode === UH.BLENDMODE_MULTIPLYADD ? this._render(UH.BLENDMODE_MULTIPLY) + this._render(UH.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), BH
      }
      _onDispose() {}
      dispose() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), HH && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), HH && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(BH, LH), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const HH = this._scene.dU.indexOf(this);
          HH > -1 && this._scene.dU.splice(HH, 1), this._scene._activeParticleSystems.dispose()
        }
        this.uR.notifyObservers(this), this.uR.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    lB.ForceGLSL = !1;
    var KB, cB = LH(38012);
    ! function(HH) {
      HH[HH.ATTACHED = 0] = "ATTACHED", HH[HH.END = 1] = "END"
    }(KB || (KB = {}));
    class eB {
      constructor(HH) {
        if (this.particleSystem = HH, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !HH.emitter || !HH.emitter.dispose) {
          const BH = (0, cB.b)("BABYLON.AbstractMesh");
          HH.emitter = new BH("SubemitterSystemEmitter", HH.yN()), HH._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let HH = this.particleSystem.emitter;
        if (HH) {
          if (HH instanceof SH.o) HH = HH.clone();
          else if (-1 !== HH.getClassName().indexOf("Mesh")) {
            HH = new((0, cB.b)("BABYLON.Mesh"))("", HH.yN()), HH.isVisible = !1
          }
        } else HH = new SH.o;
        const BH = new eB(this.particleSystem.clone(this.particleSystem.name, HH));
        return BH.particleSystem.name += "Clone", BH.type = this.type, BH.inheritDirection = this.inheritDirection, BH.inheritedVelocityAmount = this.inheritedVelocityAmount, BH.particleSystem._disposeEmitterOnDispose = !0, BH.particleSystem.disposeOnStop = !0, BH
      }
      serialize() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = {};
        return BH.type = this.type, BH.inheritDirection = this.inheritDirection, BH.inheritedVelocityAmount = this.inheritedVelocityAmount, BH.particleSystem = this.particleSystem.serialize(HH), BH
      }
      static _ParseParticleSystem(HH, BH, LH) {
        throw (0, qH.i)("ParseParticle")
      }
      static Parse(HH, BH, LH) {
        const AH = HH.particleSystem,
          rH = new eB(eB._ParseParticleSystem(AH, BH, LH, !0));
        return rH.type = HH.type, rH.inheritDirection = HH.inheritDirection, rH.inheritedVelocityAmount = HH.inheritedVelocityAmount, rH.particleSystem._isSubEmitter = !0, rH
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var qB = LH(41184),
      gB = LH(41319);
    const NB = () => {};
    class RB {
      constructor() {
        this.particlePositionGenerator = NB, this.particleDestinationGenerator = NB, this.particleDirectionGenerator = NB
      }
      startDirectionFunction(HH, BH, LH, AH) {
        const rH = SH.l.lu[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== NB) this.particleDirectionGenerator(-1, LH, rH);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== NB) {
          this.particleDestinationGenerator(-1, LH, rH);
          const HH = SH.l.lu[1];
          rH.subtractToRef(LH.position, HH), HH.scaleToRef(1 / LH.lifeTime, rH)
        } else rH.set(0, 0, 0);
        AH ? BH.Tm(rH) : SH.o.TransformNormalToRef(rH, HH, BH)
      }
      startPositionFunction(HH, BH, LH, AH) {
        const rH = SH.l.lu[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== NB ? this.particlePositionGenerator(-1, LH, rH) : rH.set(0, 0, 0), AH ? BH.Tm(rH) : SH.o.TransformCoordinatesToRef(rH, HH, BH)
      }
      clone() {
        const HH = new RB;
        return GH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {}
      buildUniformLayout(HH) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const HH = {};
        return HH.type = this.getClassName(), HH.particlePositionGenerator = this.particlePositionGenerator, HH.particleDestinationGenerator = this.particleDestinationGenerator, HH
      }
      parse(HH) {
        HH.particlePositionGenerator && (this.particlePositionGenerator = HH.particlePositionGenerator), HH.particleDestinationGenerator && (this.particleDestinationGenerator = HH.particleDestinationGenerator)
      }
    }
    const jB = SH.o.Zero(),
      nB = SH.o.Zero(),
      FB = SH.o.Zero();
    class DB {
      constructor() {
        this.strength = 0, this.position = SH.o.Zero()
      }
      _processParticle(HH, BH) {
        this.position.subtractToRef(HH.position, jB);
        const LH = jB.lengthSquared() + 1;
        jB.normalize().scaleToRef(this.strength / LH, nB), nB.scaleToRef(BH._tempScaledUpdateSpeed, FB), HH.direction.addInPlace(FB)
      }
      serialize() {
        return {
          position: this.position.xrH(),
          strength: this.strength
        }
      }
    }
    const wB = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class ZB extends lB {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = HH => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const BH = Math.floor(Math.random() * this._subEmitters.length);
          for (const LH of this._subEmitters[BH])
            if (1 === LH.type) {
              const BH = LH.clone();
              HH._inheritParticleInfoToSubEmitter(BH), BH.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(BH.particleSystem), BH.particleSystem.start()
            }
        }
      }
      get source() {
        return this._source
      }
      get isNodeGenerated() {
        return null !== this._source
      }
      get flowMap() {
        return this._flowMap
      }
      set flowMap(HH) {
        this._flowMap !== HH && (this._flowMap = HH, this._flowMapUpdate && (IB(this._flowMapUpdate), this._flowMapUpdate = null), HH && (this._flowMapUpdate = {
          process: HH => {
            const BH = this.yN()?.getTransformMatrix();
            this._flowMap._processParticle(HH, this.flowMapStrength * this._tempScaledUpdateSpeed, BH)
          },
          previousItem: null,
          nextItem: null
        }, oB(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(HH) {
        super.addAttractor(HH), 1 === this._attractors.length && (this._attractorUpdate = {
          process: HH => {
            for (const BH of this._attractors) BH._processParticle(HH, this)
          },
          previousItem: null,
          nextItem: null
        }, oB(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(HH) {
        super.removeAttractor(HH), 0 === this._attractors.length && this._attractorUpdate && IB(this._attractorUpdate)
      }
      start() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(HH)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const HH of this.subEmitters) HH instanceof ZB ? this._subEmitters.push([new eB(HH)]) : HH instanceof eB ? this._subEmitters.push([HH]) : HH instanceof Array && this._subEmitters.push(HH)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const HH of this.activeSubSystems) HH.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const HH = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== HH && this._rootParticleSystem.activeSubSystems.splice(HH, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(HH) {
        HH && this._stopSubEmitters()
      }
      _prepareParticle(HH) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const BH = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          HH._properties.attachedSubEmitters = [];
          for (const LH of BH)
            if (0 === LH.type) {
              const BH = LH.clone();
              HH._properties.attachedSubEmitters.push(BH), BH.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), HH && this.particles)
          for (const LH of this.particles)
            if (LH._properties.attachedSubEmitters)
              for (let HH = LH._properties.attachedSubEmitters.length - 1; HH >= 0; HH -= 1) LH._properties.attachedSubEmitters[HH].dispose();
        if (BH && this.activeSubSystems)
          for (let LH = this.activeSubSystems.length - 1; LH >= 0; LH -= 1) this.activeSubSystems[LH].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let HH = 0; HH < this._subEmitters.length; HH++)
            for (const BH of this._subEmitters[HH]) BH.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(HH, BH, LH, AH) {
        let rH;
        rH = LH instanceof qB.c ? null : LH;
        const hH = (0, cB.b)("BABYLON.Texture");
        if (hH && rH)
          if (HH.texture) BH.particleTexture = hH.Parse(HH.texture, rH, AH);
          else if (HH.textureName) {
          const LH = HH.textureSettings;
          if (BH.particleTexture = new hH(AH + HH.textureName, rH, !1, void 0 === HH.invertY || HH.invertY, LH ? LH.samplingMode : void 0), BH.particleTexture.name = HH.textureName, LH) {
            const HH = BH.particleTexture;
            for (const BH of wB) void 0 !== LH[BH] && (HH[BH] = LH[BH])
          }
        }
        if (HH.emitterId || 0 === HH.emitterId || void 0 !== HH.emitter ? (HH.emitterId || 0 === HH.emitterId) && rH ? (BH.emitter = rH.getLastMeshById(HH.emitterId), BH.emitter || (BH.emitter = SH.o.Zero())) : BH.emitter = SH.o.FromArray(HH.emitter) : BH.emitter = SH.o.Zero(), BH.isLocal = !!HH.isLocal, void 0 !== HH.renderingGroupId && (BH.renderingGroupId = HH.renderingGroupId), void 0 !== HH.isBillboardBased && (BH.isBillboardBased = HH.isBillboardBased), void 0 !== HH.billboardMode && (BH.billboardMode = HH.billboardMode), void 0 !== HH.useLogarithmicDepth && (BH.useLogarithmicDepth = HH.useLogarithmicDepth), HH.animations) {
          for (let LH = 0; LH < HH.animations.length; LH++) {
            const AH = HH.animations[LH],
              rH = (0, cB.b)("BABYLON.Animation");
            rH && BH.animations.push(rH.Parse(AH))
          }
          BH.beginAnimationOnStart = HH.beginAnimationOnStart, BH.beginAnimationFrom = HH.beginAnimationFrom, BH.beginAnimationTo = HH.beginAnimationTo, BH.beginAnimationLoop = HH.beginAnimationLoop
        }
        if (HH.autoAnimate && rH && rH.beginAnimation(BH, HH.autoAnimateFrom, HH.autoAnimateTo, HH.autoAnimateLoop, HH.autoAnimateSpeed || 1), BH.startDelay = 0 | HH.startDelay, BH.minAngularSpeed = HH.minAngularSpeed, BH.maxAngularSpeed = HH.maxAngularSpeed, BH.minSize = HH.minSize, BH.maxSize = HH.maxSize, HH.minScaleX && (BH.minScaleX = HH.minScaleX, BH.maxScaleX = HH.maxScaleX, BH.minScaleY = HH.minScaleY, BH.maxScaleY = HH.maxScaleY), void 0 !== HH.preWarmCycles && (BH.preWarmCycles = HH.preWarmCycles, BH.preWarmStepOffset = HH.preWarmStepOffset), void 0 !== HH.minInitialRotation && (BH.minInitialRotation = HH.minInitialRotation, BH.maxInitialRotation = HH.maxInitialRotation), BH.minLifeTime = HH.minLifeTime, BH.maxLifeTime = HH.maxLifeTime, BH.minEmitPower = HH.minEmitPower, BH.maxEmitPower = HH.maxEmitPower, BH.emitRate = HH.emitRate, BH.gravity = SH.o.FromArray(HH.gravity), HH.noiseStrength && (BH.noiseStrength = SH.o.FromArray(HH.noiseStrength)), BH.color1 = EH.g.FromArray(HH.color1), BH.color2 = EH.g.FromArray(HH.color2), BH.colorDead = EH.g.FromArray(HH.colorDead), BH.updateSpeed = HH.updateSpeed, BH.targetStopDuration = HH.targetStopDuration, BH.blendMode = HH.blendMode, HH.colorGradients)
          for (const SH of HH.colorGradients) BH.addColorGradient(SH.gradient, EH.g.FromArray(SH.color1), SH.color2 ? EH.g.FromArray(SH.color2) : void 0);
        if (HH.rampGradients) {
          for (const LH of HH.rampGradients) BH.addRampGradient(LH.gradient, EH.c.FromArray(LH.color));
          BH.useRampGradients = HH.useRampGradients
        }
        if (HH.colorRemapGradients)
          for (const SH of HH.colorRemapGradients) BH.addColorRemapGradient(SH.gradient, void 0 !== SH.factor1 ? SH.factor1 : SH.factor, SH.factor2);
        if (HH.alphaRemapGradients)
          for (const SH of HH.alphaRemapGradients) BH.addAlphaRemapGradient(SH.gradient, void 0 !== SH.factor1 ? SH.factor1 : SH.factor, SH.factor2);
        if (HH.sizeGradients)
          for (const SH of HH.sizeGradients) BH.addSizeGradient(SH.gradient, void 0 !== SH.factor1 ? SH.factor1 : SH.factor, SH.factor2);
        if (HH.angularSpeedGradients)
          for (const SH of HH.angularSpeedGradients) BH.addAngularSpeedGradient(SH.gradient, void 0 !== SH.factor1 ? SH.factor1 : SH.factor, SH.factor2);
        if (HH.velocityGradients)
          for (const SH of HH.velocityGradients) BH.addVelocityGradient(SH.gradient, void 0 !== SH.factor1 ? SH.factor1 : SH.factor, SH.factor2);
        if (HH.dragGradients)
          for (const SH of HH.dragGradients) BH.addDragGradient(SH.gradient, void 0 !== SH.factor1 ? SH.factor1 : SH.factor, SH.factor2);
        if (HH.emitRateGradients)
          for (const SH of HH.emitRateGradients) BH.addEmitRateGradient(SH.gradient, void 0 !== SH.factor1 ? SH.factor1 : SH.factor, SH.factor2);
        if (HH.startSizeGradients)
          for (const SH of HH.startSizeGradients) BH.addStartSizeGradient(SH.gradient, void 0 !== SH.factor1 ? SH.factor1 : SH.factor, SH.factor2);
        if (HH.lifeTimeGradients)
          for (const SH of HH.lifeTimeGradients) BH.addLifeTimeGradient(SH.gradient, void 0 !== SH.factor1 ? SH.factor1 : SH.factor, SH.factor2);
        if (HH.limitVelocityGradients) {
          for (const LH of HH.limitVelocityGradients) BH.addLimitVelocityGradient(LH.gradient, void 0 !== LH.factor1 ? LH.factor1 : LH.factor, LH.factor2);
          BH.limitVelocityDamping = HH.limitVelocityDamping
        }
        if (HH.noiseTexture && rH) {
          const LH = (0, cB.b)("BABYLON.ProceduralTexture");
          BH.noiseTexture = LH.Parse(HH.noiseTexture, rH, AH)
        }
        let tH;
        if (HH.particleEmitterType) {
          switch (HH.particleEmitterType.type) {
            case "SphereParticleEmitter":
              tH = new WH;
              break;
            case "SphereDirectedParticleEmitter":
              tH = new MH;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              tH = new vH;
              break;
            case "ConeDirectedParticleEmitter":
              tH = new PH;
              break;
            case "CylinderParticleEmitter":
              tH = new xH.g;
              break;
            case "CylinderDirectedParticleEmitter":
              tH = new xH.d;
              break;
            case "HemisphericParticleEmitter":
              tH = new QH;
              break;
            case "PointParticleEmitter":
              tH = new uH;
              break;
            case "MeshParticleEmitter":
              tH = new TH;
              break;
            case "CustomParticleEmitter":
              tH = new RB;
              break;
            default:
              tH = new XH.b
          }
          tH.parse(HH.particleEmitterType, rH)
        } else tH = new XH.b, tH.parse(HH, rH);
        BH.particleEmitterType = tH, BH.startSpriteCellID = HH.startSpriteCellID, BH.endSpriteCellID = HH.endSpriteCellID, BH.spriteCellLoop = HH.spriteCellLoop ?? !0, BH.spriteCellWidth = HH.spriteCellWidth, BH.spriteCellHeight = HH.spriteCellHeight, BH.spriteCellChangeSpeed = HH.spriteCellChangeSpeed, BH.spriteRandomStartCell = HH.spriteRandomStartCell, BH.disposeOnStop = HH.disposeOnStop ?? !1, BH.manualEmitCount = HH.manualEmitCount ?? -1
      }
      static Parse(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          rH = arguments.length > 4 ? arguments[4] : void 0;
        const hH = HH.name;
        let tH, zH, CH = null,
          XH = null;
        if (BH instanceof qB.c ? tH = BH : (zH = BH, tH = zH.Iu()), HH.customShader && (0, qH.c)(tH.createEffectForParticles)) {
          XH = HH.customShader;
          const BH = XH.shaderOptions.defines.length > 0 ? XH.shaderOptions.defines.join("\n") : "";
          CH = tH.createEffectForParticles(XH.shaderPath.fragmentElement, XH.shaderOptions.uniforms, XH.shaderOptions.samplers, BH)
        }
        const GH = new ZB(hH, rH || HH.aX, BH, CH, HH.isAnimationSheetEnabled);
        if (GH.customShader = XH, GH._rootUrl = LH, HH.id && (GH.id = HH.id), HH.subEmitters) {
          GH.subEmitters = [];
          for (const AH of HH.subEmitters) {
            const HH = [];
            for (const rH of AH) HH.push(eB.Parse(rH, BH, LH));
            GH.subEmitters.push(HH)
          }
        }
        if (HH.attractors)
          for (const EH of HH.attractors) {
            const HH = new DB;
            HH.position = SH.o.FromArray(EH.position), HH.strength = EH.strength, GH.addAttractor(HH)
          }
        return ZB._Parse(HH, GH, BH, LH), HH.textureMask && (GH.textureMask = EH.g.FromArray(HH.textureMask)), HH.worldOffset && (GH.worldOffset = SH.o.FromArray(HH.worldOffset)), HH.preventAutoStart && (GH.preventAutoStart = HH.preventAutoStart), HH.metadata && (GH.metadata = HH.metadata), AH || GH.preventAutoStart || GH.start(), GH
      }
      serialize() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = {};
        if (ZB._Serialize(BH, this, HH), BH.textureMask = this.textureMask.xrH(), BH.customShader = this.customShader, BH.preventAutoStart = this.preventAutoStart, BH.worldOffset = this.worldOffset.xrH(), this.metadata && (BH.metadata = this.metadata), this.subEmitters) {
          BH.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const LH of this._subEmitters) {
            const AH = [];
            for (const BH of LH) BH.particleSystem.doNotSerialize || AH.push(BH.serialize(HH));
            BH.subEmitters.push(AH)
          }
        }
        if (this._attractors && this._attractors.length) {
          BH.attractors = [];
          for (const HH of this._attractors) BH.attractors.push(HH.serialize())
        }
        return BH
      }
      static _Serialize(HH, BH, LH) {
        if (HH.name = BH.name, HH.id = BH.id, HH.aX = BH.getCapacity(), HH.disposeOnStop = BH.disposeOnStop, HH.manualEmitCount = BH.manualEmitCount, BH.emitter.position) {
          const LH = BH.emitter;
          HH.emitterId = LH.id
        } else {
          const LH = BH.emitter;
          HH.emitter = LH.xrH()
        }
        if (BH.particleEmitterType && (HH.particleEmitterType = BH.particleEmitterType.serialize()), BH.particleTexture)
          if (LH) HH.texture = BH.particleTexture.serialize();
          else {
            const LH = BH.particleTexture;
            HH.textureName = BH.particleTexture.name, HH.invertY = !!LH._invertY;
            const AH = {};
            for (const HH of wB) AH[HH] = LH[HH];
            AH.samplingMode = LH.samplingMode, HH.textureSettings = AH
          } HH.isLocal = BH.isLocal, gB.c.AppendSerializedAnimations(BH, HH), HH.beginAnimationOnStart = BH.beginAnimationOnStart, HH.beginAnimationFrom = BH.beginAnimationFrom, HH.beginAnimationTo = BH.beginAnimationTo, HH.beginAnimationLoop = BH.beginAnimationLoop, HH.startDelay = BH.startDelay, HH.renderingGroupId = BH.renderingGroupId, HH.isBillboardBased = BH.isBillboardBased, HH.billboardMode = BH.billboardMode, HH.minAngularSpeed = BH.minAngularSpeed, HH.maxAngularSpeed = BH.maxAngularSpeed, HH.minSize = BH.minSize, HH.maxSize = BH.maxSize, HH.minScaleX = BH.minScaleX, HH.maxScaleX = BH.maxScaleX, HH.minScaleY = BH.minScaleY, HH.maxScaleY = BH.maxScaleY, HH.minEmitPower = BH.minEmitPower, HH.maxEmitPower = BH.maxEmitPower, HH.minLifeTime = BH.minLifeTime, HH.maxLifeTime = BH.maxLifeTime, HH.emitRate = BH.emitRate, HH.gravity = BH.gravity.xrH(), HH.noiseStrength = BH.noiseStrength.xrH(), HH.color1 = BH.color1.xrH(), HH.color2 = BH.color2.xrH(), HH.colorDead = BH.colorDead.xrH(), HH.updateSpeed = BH.updateSpeed, HH.targetStopDuration = BH.targetStopDuration, HH.blendMode = BH.blendMode, HH.preWarmCycles = BH.preWarmCycles, HH.preWarmStepOffset = BH.preWarmStepOffset, HH.minInitialRotation = BH.minInitialRotation, HH.maxInitialRotation = BH.maxInitialRotation, HH.startSpriteCellID = BH.startSpriteCellID, HH.spriteCellLoop = BH.spriteCellLoop, HH.endSpriteCellID = BH.endSpriteCellID, HH.spriteCellChangeSpeed = BH.spriteCellChangeSpeed, HH.spriteCellWidth = BH.spriteCellWidth, HH.spriteCellHeight = BH.spriteCellHeight, HH.spriteRandomStartCell = BH.spriteRandomStartCell, HH.isAnimationSheetEnabled = BH.isAnimationSheetEnabled, HH.useLogarithmicDepth = BH.useLogarithmicDepth;
        const AH = BH.getColorGradients();
        if (AH) {
          HH.colorGradients = [];
          for (const BH of AH) {
            const LH = {
              gradient: BH.gradient,
              color1: BH.color1.xrH()
            };
            BH.color2 ? LH.color2 = BH.color2.xrH() : LH.color2 = BH.color1.xrH(), HH.colorGradients.push(LH)
          }
        }
        const rH = BH.getRampGradients();
        if (rH) {
          HH.rampGradients = [];
          for (const BH of rH) {
            const LH = {
              gradient: BH.gradient,
              color: BH.color.xrH()
            };
            HH.rampGradients.push(LH)
          }
          HH.useRampGradients = BH.useRampGradients
        }
        const SH = BH.getColorRemapGradients();
        if (SH) {
          HH.colorRemapGradients = [];
          for (const BH of SH) {
            const LH = {
              gradient: BH.gradient,
              factor1: BH.factor1
            };
            void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.colorRemapGradients.push(LH)
          }
        }
        const hH = BH.getAlphaRemapGradients();
        if (hH) {
          HH.alphaRemapGradients = [];
          for (const BH of hH) {
            const LH = {
              gradient: BH.gradient,
              factor1: BH.factor1
            };
            void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.alphaRemapGradients.push(LH)
          }
        }
        const tH = BH.getSizeGradients();
        if (tH) {
          HH.sizeGradients = [];
          for (const BH of tH) {
            const LH = {
              gradient: BH.gradient,
              factor1: BH.factor1
            };
            void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.sizeGradients.push(LH)
          }
        }
        const zH = BH.getAngularSpeedGradients();
        if (zH) {
          HH.angularSpeedGradients = [];
          for (const BH of zH) {
            const LH = {
              gradient: BH.gradient,
              factor1: BH.factor1
            };
            void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.angularSpeedGradients.push(LH)
          }
        }
        const CH = BH.getVelocityGradients();
        if (CH) {
          HH.velocityGradients = [];
          for (const BH of CH) {
            const LH = {
              gradient: BH.gradient,
              factor1: BH.factor1
            };
            void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.velocityGradients.push(LH)
          }
        }
        const EH = BH.getDragGradients();
        if (EH) {
          HH.dragGradients = [];
          for (const BH of EH) {
            const LH = {
              gradient: BH.gradient,
              factor1: BH.factor1
            };
            void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.dragGradients.push(LH)
          }
        }
        const XH = BH.getEmitRateGradients();
        if (XH) {
          HH.emitRateGradients = [];
          for (const BH of XH) {
            const LH = {
              gradient: BH.gradient,
              factor1: BH.factor1
            };
            void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.emitRateGradients.push(LH)
          }
        }
        const GH = BH.getStartSizeGradients();
        if (GH) {
          HH.startSizeGradients = [];
          for (const BH of GH) {
            const LH = {
              gradient: BH.gradient,
              factor1: BH.factor1
            };
            void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.startSizeGradients.push(LH)
          }
        }
        const YH = BH.getLifeTimeGradients();
        if (YH) {
          HH.lifeTimeGradients = [];
          for (const BH of YH) {
            const LH = {
              gradient: BH.gradient,
              factor1: BH.factor1
            };
            void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.lifeTimeGradients.push(LH)
          }
        }
        const uH = BH.getLimitVelocityGradients();
        if (uH) {
          HH.limitVelocityGradients = [];
          for (const BH of uH) {
            const LH = {
              gradient: BH.gradient,
              factor1: BH.factor1
            };
            void 0 !== BH.factor2 ? LH.factor2 = BH.factor2 : LH.factor2 = BH.factor1, HH.limitVelocityGradients.push(LH)
          }
          HH.limitVelocityDamping = BH.limitVelocityDamping
        }
        BH.noiseTexture && (HH.noiseTexture = BH.noiseTexture.serialize())
      }
      clone(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = {
          ...this._customWrappers
        };
        let rH = null;
        const SH = this._engine;
        if ((0, qH.c)(SH.createEffectForParticles) && null != this.customShader) {
          rH = this.customShader;
          const HH = rH.shaderOptions.defines.length > 0 ? rH.shaderOptions.defines.join("\n") : "",
            BH = SH.createEffectForParticles(rH.shaderPath.fragmentElement, rH.shaderOptions.uniforms, rH.shaderOptions.samplers, HH);
          AH[0] ? AH[0].effect = BH : this.setCustomEffect(BH, 0)
        }
        const hH = this.serialize(LH),
          tH = !1 === LH && this.particleTexture ? this.particleTexture.clone() : null;
        tH && (hH.textureName = void 0);
        const zH = ZB.Parse(hH, this._scene || this._engine, this._rootUrl);
        return zH.name = HH, zH.customShader = rH, zH._customWrappers = AH, tH && (zH.particleTexture = tH), void 0 === BH && (BH = this.emitter), this.noiseTexture && (zH.noiseTexture = this.noiseTexture.clone()), zH.emitter = BH, this.preventAutoStart || zH.start(), zH
      }
    }
    ZB.BILLBOARDMODE_Y = 2, ZB.BILLBOARDMODE_ALL = 7, ZB.BILLBOARDMODE_STRETCHED = 8, ZB.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let dB = !1;
    dB || (dB = !0, eB._ParseParticleSystem = ZB.Parse)
  },
  45125: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      SkyMaterial: () => vH,
      _MaxColorValueForRenderTarget: () => xH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(41319),
      hH = LH(37961),
      tH = LH(41564),
      zH = LH(41634),
      CH = LH(45065),
      EH = LH(42455),
      XH = LH(41374),
      GH = LH(38012),
      YH = LH(41657),
      uH = LH(41636),
      QH = LH(41623),
      WH = LH(41618);
    class MH extends tH.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function xH(HH) {
      switch (HH) {
        case CH.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case CH.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let vH = (() => {
      var HH;
      let BH, tH, CH, GH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH, fH = zH.b,
        lH = [],
        KH = [],
        cH = [],
        eH = [],
        qH = [],
        gH = [],
        NH = [],
        RH = [],
        jH = [],
        nH = [],
        FH = [],
        DH = [],
        wH = [],
        ZH = [],
        dH = [],
        aH = [],
        sH = [],
        JH = [],
        iH = [],
        pH = [],
        yH = [],
        HB = [],
        BB = [],
        LB = [],
        AB = [],
        rB = [],
        SB = [],
        hB = [],
        tB = [],
        zB = [];
      return HH = class extends fH {
        constructor(HH, BH) {
          super(HH, BH, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, AH.k)(this, lH, 1), this.turbidity = ((0, AH.k)(this, KH), (0, AH.k)(this, cH, 10)), this.rayleigh = ((0, AH.k)(this, eH), (0, AH.k)(this, qH, 2)), this.mieCoefficient = ((0, AH.k)(this, gH), (0, AH.k)(this, NH, .005)), this.mieDirectionalG = ((0, AH.k)(this, RH), (0, AH.k)(this, jH, .8)), this.distance = ((0, AH.k)(this, nH), (0, AH.k)(this, FH, 500)), this.inclination = ((0, AH.k)(this, DH), (0, AH.k)(this, wH, .49)), this.azimuth = ((0, AH.k)(this, ZH), (0, AH.k)(this, dH, .25)), this.sunPosition = ((0, AH.k)(this, aH), (0, AH.k)(this, sH, new hH.lu(0, 100, 0))), this.useSunPosition = ((0, AH.k)(this, JH), (0, AH.k)(this, iH, !1)), this.cameraOffset = ((0, AH.k)(this, pH), (0, AH.k)(this, yH, hH.lu.Zero())), this.up = ((0, AH.k)(this, HB), (0, AH.k)(this, BB, hH.lu.Up())), this.dithering = ((0, AH.k)(this, LB), (0, AH.k)(this, AB, !1)), this.rawHdrOutput = ((0, AH.k)(this, rB), (0, AH.k)(this, SB, !1)), this.cloudiness = ((0, AH.k)(this, hB), (0, AH.k)(this, tB, 0)), this._cameraPosition = ((0, AH.k)(this, zB), hH.lu.Zero()), this._skyOrientation = new hH.Quaternion
        }
        needAlphaBlending() {
          return this.alpha < 1
        }
        needAlphaTesting() {
          return !1
        }
        getAlphaTestTexture() {
          return null
        }
        isReadyForSubMesh(BH, LH) {
          const AH = LH._drawWrapper;
          if (this.isFrozen && AH.effect && AH._wasPreviouslyReady) return !0;
          LH.materialDefines || (LH.materialDefines = new MH);
          const rH = LH.materialDefines,
            SH = this.yN();
          if (this._isReadyForSubMesh(LH)) return !0;
          if ((0, WH.Z)(BH, SH, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, rH, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, WH.L)(BH, rH, !0, !1), rH.IMAGEPROCESSINGPOSTPROCESS !== SH.imageProcessingConfiguration.applyByPostProcess && rH.markAsMiscDirty(), rH.DITHER !== this.dithering && rH.markAsMiscDirty(), rH.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && rH.markAsMiscDirty(), rH.isDirty) {
            rH.markAsProcessed(), SH.resetCachedMaterial();
            const BH = new uH.b;
            rH.FOG && BH.addFallback(1, "FOG"), rH.IMAGEPROCESSINGPOSTPROCESS = SH.imageProcessingConfiguration.applyByPostProcess, rH.DITHER = this.dithering, rH.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const AH = [EH.e.PositionKind];
            rH.VERTEXCOLOR && AH.push(EH.e.ColorKind);
            const hH = "sky",
              tH = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, QH.b)(tH);
            const zH = rH.toString();
            LH.setEffect(SH.Iu().createEffect(hH, {
              attributes: AH,
              uniformsNames: tH,
              uniformBuffersNames: [],
              samplers: [],
              defines: zH,
              fallbacks: BH,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: HH._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, SH.Iu()), rH, this._materialContext)
          }
          return !(!LH.effect || !LH.effect.isReady()) && (rH._renderId = SH.getRenderId(), AH._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(HH, BH, LH) {
          const AH = this.yN(),
            rH = LH.materialDefines;
          if (!rH) return;
          const SH = LH.effect;
          if (!SH) return;
          this._activeEffect = SH, this.bindOnlyWorldMatrix(HH), this._activeEffect.setMatrix("viewProjection", AH.getTransformMatrix()), this._mustRebind(AH, SH, LH) && ((0, QH.d)(SH, this, AH), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, WH.q)(rH, SH, AH)), AH.fogEnabled && BH.applyFog && AH.fogMode !== XH.e.FOGMODE_NONE && this._activeEffect.setMatrix("view", AH.getViewMatrix()), (0, WH.f)(AH, BH, this._activeEffect, this.rawHdrOutput);
          const tH = AH.activeCamera;
          if (tH) {
            const HH = tH.getWorldMatrix();
            this._cameraPosition.x = HH.m[12], this._cameraPosition.y = HH.m[13], this._cameraPosition.z = HH.m[14], this._activeEffect.setVector3("cameraPosition", hH.TmpVectors.lu[0].Tm(this._cameraPosition).grH(AH.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const HH = AH.Iu()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", xH(HH?.texture?.type))
          }
          if (!this.useSunPosition) {
            const HH = Math.PI * (this.inclination - .5),
              BH = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(BH) * Math.cos(HH), this.sunPosition.y = this.distance * Math.sin(-HH), this.sunPosition.z = this.distance * Math.sin(BH) * Math.cos(HH), hH.Quaternion.FromUnitVectorsToRef(hH.lu.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(BH, this._activeEffect, LH)
        }
        getAnimatables() {
          return []
        }
        dispose(HH) {
          super.dispose(HH)
        }
        clone(BH) {
          return SH.c.Clone((() => new HH(BH, this.yN())), this)
        }
        serialize() {
          const HH = super.serialize();
          return HH.customType = "BABYLON.SkyMaterial", HH
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(BH, LH, AH) {
          return SH.c.Parse((() => new HH(BH.name, LH)), BH, LH, AH)
        }
      }, (() => {
        const LH = "function" === typeof Symbol && Symbol.metadata ? Object.create(fH[Symbol.metadata] ?? null) : void 0;
        BH = [(0, rH.H)()], tH = [(0, rH.H)()], CH = [(0, rH.H)()], GH = [(0, rH.H)()], vH = [(0, rH.H)()], PH = [(0, rH.H)()], TH = [(0, rH.H)()], UH = [(0, rH.H)()], VH = [(0, rH.F)()], OH = [(0, rH.H)()], bH = [(0, rH.F)()], kH = [(0, rH.F)()], mH = [(0, rH.H)()], oH = [(0, rH.H)()], IH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: HH => "luminance" in HH,
            get: HH => HH.luminance,
            set: (HH, BH) => {
              HH.luminance = BH
            }
          },
          metadata: LH
        }, lH, KH), (0, AH.g)(null, null, tH, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: HH => "turbidity" in HH,
            get: HH => HH.turbidity,
            set: (HH, BH) => {
              HH.turbidity = BH
            }
          },
          metadata: LH
        }, cH, eH), (0, AH.g)(null, null, CH, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: HH => "rayleigh" in HH,
            get: HH => HH.rayleigh,
            set: (HH, BH) => {
              HH.rayleigh = BH
            }
          },
          metadata: LH
        }, qH, gH), (0, AH.g)(null, null, GH, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: HH => "mieCoefficient" in HH,
            get: HH => HH.mieCoefficient,
            set: (HH, BH) => {
              HH.mieCoefficient = BH
            }
          },
          metadata: LH
        }, NH, RH), (0, AH.g)(null, null, vH, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: HH => "mieDirectionalG" in HH,
            get: HH => HH.mieDirectionalG,
            set: (HH, BH) => {
              HH.mieDirectionalG = BH
            }
          },
          metadata: LH
        }, jH, nH), (0, AH.g)(null, null, PH, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: HH => "distance" in HH,
            get: HH => HH.distance,
            set: (HH, BH) => {
              HH.distance = BH
            }
          },
          metadata: LH
        }, FH, DH), (0, AH.g)(null, null, TH, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: HH => "inclination" in HH,
            get: HH => HH.inclination,
            set: (HH, BH) => {
              HH.inclination = BH
            }
          },
          metadata: LH
        }, wH, ZH), (0, AH.g)(null, null, UH, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: HH => "azimuth" in HH,
            get: HH => HH.azimuth,
            set: (HH, BH) => {
              HH.azimuth = BH
            }
          },
          metadata: LH
        }, dH, aH), (0, AH.g)(null, null, VH, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: HH => "sunPosition" in HH,
            get: HH => HH.sunPosition,
            set: (HH, BH) => {
              HH.sunPosition = BH
            }
          },
          metadata: LH
        }, sH, JH), (0, AH.g)(null, null, OH, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: HH => "useSunPosition" in HH,
            get: HH => HH.useSunPosition,
            set: (HH, BH) => {
              HH.useSunPosition = BH
            }
          },
          metadata: LH
        }, iH, pH), (0, AH.g)(null, null, bH, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: HH => "cameraOffset" in HH,
            get: HH => HH.cameraOffset,
            set: (HH, BH) => {
              HH.cameraOffset = BH
            }
          },
          metadata: LH
        }, yH, HB), (0, AH.g)(null, null, kH, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: HH => "up" in HH,
            get: HH => HH.up,
            set: (HH, BH) => {
              HH.up = BH
            }
          },
          metadata: LH
        }, BB, LB), (0, AH.g)(null, null, mH, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: HH => "dithering" in HH,
            get: HH => HH.dithering,
            set: (HH, BH) => {
              HH.dithering = BH
            }
          },
          metadata: LH
        }, AB, rB), (0, AH.g)(null, null, oH, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: HH => "rawHdrOutput" in HH,
            get: HH => HH.rawHdrOutput,
            set: (HH, BH) => {
              HH.rawHdrOutput = BH
            }
          },
          metadata: LH
        }, SB, hB), (0, AH.g)(null, null, IH, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: HH => "cloudiness" in HH,
            get: HH => HH.cloudiness,
            set: (HH, BH) => {
              HH.cloudiness = BH
            }
          },
          metadata: LH
        }, tB, zB), LH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: LH
        })
      })(), HH._ShaderLoader = new YH.b((() => [LH.e(639).then((() => LH(64158))), LH.e(632).then((() => LH(64164)))]), (() => [LH.e(656).then((() => LH(64172))), LH.e(650).then((() => LH(64178)))])), HH
    })();
    (0, GH.f)("BABYLON.SkyMaterial", vH)
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);