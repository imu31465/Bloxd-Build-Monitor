export const id = 294;
export const ids = [294];
export const modules = {
  40432: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT
    });
    var iT = IT(38897),
      zT = IT(40434);
    class kT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = IT, this.ziT = [], this._maxBlockCapacity = oT || 64, this._selectionContent = new iT.c(1024), this._creationFunc = TT
      }
      update(TT, oT, IT) {
        zT.e._CreateBlocks(TT, oT, IT, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      tIT(TT) {
        for (let oT = 0; oT < this.blocks.length; oT++) {
          this.blocks[oT].addEntry(TT)
        }
      }
      KJ(TT) {
        for (let oT = 0; oT < this.blocks.length; oT++) {
          this.blocks[oT].removeEntry(TT)
        }
      }
      select(TT, oT) {
        this._selectionContent.reset();
        for (let IT = 0; IT < this.blocks.length; IT++) {
          this.blocks[IT].select(TT, this._selectionContent, oT)
        }
        return oT ? this._selectionContent.concat(this.ziT) : this._selectionContent.concatWithNoDuplicate(this.ziT), this._selectionContent
      }
      intersects(TT, oT, IT) {
        this._selectionContent.reset();
        for (let iT = 0; iT < this.blocks.length; iT++) {
          this.blocks[iT].intersects(TT, oT, this._selectionContent, IT)
        }
        return IT ? this._selectionContent.concat(this.ziT) : this._selectionContent.concatWithNoDuplicate(this.ziT), this._selectionContent
      }
      intersectsRay(TT) {
        this._selectionContent.reset();
        for (let oT = 0; oT < this.blocks.length; oT++) {
          this.blocks[oT].intersectsRay(TT, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.ziT), this._selectionContent
      }
    }
    kT.CreationFuncForMeshes = (TT, oT) => {
      const IT = TT.GJ();
      !TT.isBlocked && IT.boundingBox.intersectsMinMax(oT.NIT, oT.yIT) && oT.entries.push(TT)
    }, kT.CreationFuncForSubMeshes = (TT, oT) => {
      TT.GJ().boundingBox.intersectsMinMax(oT.NIT, oT.yIT) && oT.entries.push(TT)
    }
  },
  40434: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(36118),
      zT = IT(39093);
    class kT {
      constructor(TT, oT, IT, iT, zT, kT) {
        this.entries = [], this.kiT = new Array, this._capacity = IT, this._depth = iT, this._maxDepth = zT, this._creationFunc = kT, this._minPoint = TT, this._maxPoint = oT, this.kiT.push(TT.clone()), this.kiT.push(oT.clone()), this.kiT.push(TT.clone()), this.kiT[2].x = oT.x, this.kiT.push(TT.clone()), this.kiT[3].y = oT.y, this.kiT.push(TT.clone()), this.kiT[4].z = oT.z, this.kiT.push(oT.clone()), this.kiT[5].z = TT.z, this.kiT.push(oT.clone()), this.kiT[6].x = TT.x, this.kiT.push(oT.clone()), this.kiT[7].y = TT.y
      }
      get fD() {
        return this._capacity
      }
      get NIT() {
        return this._minPoint
      }
      get yIT() {
        return this._maxPoint
      }
      addEntry(TT) {
        if (this.blocks)
          for (let oT = 0; oT < this.blocks.length; oT++) {
            this.blocks[oT].addEntry(TT)
          } else this._creationFunc(TT, this), this.entries.length > this.fD && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(TT) {
        if (this.blocks) {
          for (let oT = 0; oT < this.blocks.length; oT++) {
            this.blocks[oT].removeEntry(TT)
          }
          return
        }
        const oT = this.entries.indexOf(TT);
        oT > -1 && this.entries.splice(oT, 1)
      }
      addEntries(TT) {
        for (let oT = 0; oT < TT.length; oT++) {
          const IT = TT[oT];
          this.addEntry(IT)
        }
      }
      select(TT, oT, IT) {
        if (zT.b.IsInFrustum(this.kiT, TT)) {
          if (this.blocks) {
            for (let iT = 0; iT < this.blocks.length; iT++) {
              this.blocks[iT].select(TT, oT, IT)
            }
            return
          }
          IT ? oT.concat(this.entries) : oT.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(TT, oT, IT, iT) {
        if (zT.b.IntersectsSphere(this._minPoint, this._maxPoint, TT, oT)) {
          if (this.blocks) {
            for (let zT = 0; zT < this.blocks.length; zT++) {
              this.blocks[zT].intersects(TT, oT, IT, iT)
            }
            return
          }
          iT ? IT.concat(this.entries) : IT.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(TT, oT) {
        if (TT.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let IT = 0; IT < this.blocks.length; IT++) {
              this.blocks[IT].intersectsRay(TT, oT)
            }
            return
          }
          oT.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        kT._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(TT, oT, IT, zT, WT, XT, BT, FT) {
        BT.blocks = new Array;
        const ST = new iT.m((oT.x - TT.x) / 2, (oT.y - TT.y) / 2, (oT.z - TT.z) / 2);
        for (let iT = 0; iT < 2; iT++)
          for (let oT = 0; oT < 2; oT++)
            for (let DT = 0; DT < 2; DT++) {
              const LT = TT.add(ST.multiplyByFloats(iT, oT, DT)),
                xT = TT.add(ST.multiplyByFloats(iT + 1, oT + 1, DT + 1)),
                cT = new kT(LT, xT, zT, WT + 1, XT, FT);
              cT.addEntries(IT), BT.blocks.push(cT)
            }
      }
    }
  },
  40442: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => ST
    });
    var iT = IT(38882),
      zT = IT(36118),
      kT = IT(39230),
      WT = IT(40384),
      XT = IT(38949),
      BT = IT(36146),
      FT = IT(40432);
    class ST {
      constructor(TT) {
        this.name = XT.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new WT.E(zT.m.Zero(), new zT.m(1, 1, 1)), (TT = TT || BT.d.LastCreatedScene) && (this.NK = TT, this.NK.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.NK.getActiveSubMeshCandidates = TT => this.getActiveSubMeshCandidates(TT), this.NK.getCollidingSubMeshCandidates = (TT, oT) => this.getCollidingSubMeshCandidates(TT, oT), this.NK.getIntersectingSubMeshCandidates = (TT, oT) => this.getIntersectingSubMeshCandidates(TT, oT))
      }
      register() {
        this.NK.onMeshRemovedObservable.add((TT => {
          const oT = this.NK.selectionOctree;
          if (void 0 !== oT && null !== oT) {
            const IT = oT.ziT.indexOf(TT); - 1 !== IT && oT.ziT.splice(IT, 1)
          }
        })), this.NK.onMeshImportedObservable.add((TT => {
          const oT = this.NK.selectionOctree;
          void 0 !== oT && null !== oT && oT.tIT(TT)
        }))
      }
      getActiveMeshCandidates() {
        return this.NK.LiT?.select(this.NK.frustumPlanes) || this.NK._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(TT) {
        if (TT._submeshesOctree && TT.useOctreeForRenderingSelection) {
          return TT._submeshesOctree.select(this.NK.frustumPlanes)
        }
        return this.NK._getDefaultSubMeshCandidates(TT)
      }
      getIntersectingSubMeshCandidates(TT, oT) {
        if (TT._submeshesOctree && TT.useOctreeForPicking) {
          WT.E.TransformToRef(oT, TT.getWorldMatrix(), this._tempRay);
          return TT._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.NK._getDefaultSubMeshCandidates(TT)
      }
      getCollidingSubMeshCandidates(TT, oT) {
        if (TT._submeshesOctree && TT.useOctreeForCollisions) {
          const IT = oT._velocityWorldLength + Math.max(oT._radius.x, oT._radius.y, oT._radius.z);
          return TT._submeshesOctree.intersects(oT._basePointWorld, IT)
        }
        return this.NK._getDefaultSubMeshCandidates(TT)
      }
      rebuild() {}
      dispose() {}
    }
    let DT = !1;
    DT || (DT = !0, iT.d.prototype.createOrUpdateSelectionOctree = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        IT = this._getComponent(XT.d.NAME_OCTREE);
      IT || (IT = new ST(this), this.fIT(IT)), this.LiT || (this.LiT = new FT.b(FT.b.CreationFuncForMeshes, TT, oT));
      const iT = this.getWorldExtends();
      return this.LiT.update(iT.min, iT.max, this.meshes), this.LiT
    }, Object.defineProperty(iT.d.prototype, "selectionOctree", {
      get: function() {
        return this.LiT
      },
      enumerable: !0,
      configurable: !0
    }), kT.e.prototype.createOrUpdateSubmeshesOctree = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const IT = this.pC();
      let iT = IT._getComponent(XT.d.NAME_OCTREE);
      iT || (iT = new ST(IT), IT.fIT(iT)), this._submeshesOctree || (this._submeshesOctree = new FT.b(FT.b.CreationFuncForSubMeshes, TT, oT)), this.computeWorldMatrix(!0);
      const zT = this.GJ().boundingBox;
      return this._submeshesOctree.update(zT.minimumWorld, zT.maximumWorld, this.pR), this._submeshesOctree
    })
  },
  40384: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => RT,
      E: () => DT,
      d: () => CT,
      g: () => KT,
      k: () => cT,
      m: () => xT,
      o: () => ET,
      r: () => vT,
      v: () => eT,
      x: () => uT
    });
    var iT = IT(36125),
      zT = IT(36118),
      kT = IT(36134),
      WT = IT(39082),
      XT = IT(38918),
      BT = IT(36146),
      FT = IT(38974);
    const ST = {
      internalPickerForMesh: void 0
    };
    class DT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iT.d;
        this.origin = TT, this.direction = oT, this.length = IT, this.epsilon = zT
      }
      clone() {
        return new DT(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const iT = DT._TmpVector3[0].S_(TT.x - IT, TT.y - IT, TT.z - IT),
          zT = DT._TmpVector3[1].S_(oT.x + IT, oT.y + IT, oT.z + IT);
        let kT, WT, XT, BT, FT = 0,
          ST = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < iT.x || this.origin.x > zT.x) return !1
        } else if (kT = 1 / this.direction.x, WT = (iT.x - this.origin.x) * kT, XT = (zT.x - this.origin.x) * kT, XT === -1 / 0 && (XT = 1 / 0), WT > XT && (BT = WT, WT = XT, XT = BT), FT = Math.max(WT, FT), ST = Math.min(XT, ST), FT > ST) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < iT.y || this.origin.y > zT.y) return !1
        } else if (kT = 1 / this.direction.y, WT = (iT.y - this.origin.y) * kT, XT = (zT.y - this.origin.y) * kT, XT === -1 / 0 && (XT = 1 / 0), WT > XT && (BT = WT, WT = XT, XT = BT), FT = Math.max(WT, FT), ST = Math.min(XT, ST), FT > ST) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < iT.z || this.origin.z > zT.z) return !1
        } else if (kT = 1 / this.direction.z, WT = (iT.z - this.origin.z) * kT, XT = (zT.z - this.origin.z) * kT, XT === -1 / 0 && (XT = 1 / 0), WT > XT && (BT = WT, WT = XT, XT = BT), FT = Math.max(WT, FT), ST = Math.min(XT, ST), FT > ST) return !1;
        return !0
      }
      intersectsBox(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(TT.minimum, TT.maximum, oT)
      }
      intersectsSphere(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const IT = TT.center.x - this.origin.x,
          iT = TT.center.y - this.origin.y,
          zT = TT.center.z - this.origin.z,
          kT = IT * IT + iT * iT + zT * zT,
          WT = TT.radius + oT,
          XT = WT * WT;
        if (kT <= XT) return !0;
        const BT = IT * this.direction.x + iT * this.direction.y + zT * this.direction.z;
        if (BT < 0) return !1;
        return kT - BT * BT <= XT
      }
      intersectsTriangle(TT, oT, IT) {
        const iT = DT._TmpVector3[0],
          kT = DT._TmpVector3[1],
          XT = DT._TmpVector3[2],
          BT = DT._TmpVector3[3],
          FT = DT._TmpVector3[4];
        oT.subtractToRef(TT, iT), IT.subtractToRef(TT, kT), zT.m.CrossToRef(this.direction, kT, XT);
        const ST = zT.m.Dot(iT, XT);
        if (0 === ST) return null;
        const LT = 1 / ST;
        this.origin.subtractToRef(TT, BT);
        const xT = zT.m.Dot(BT, XT) * LT;
        if (xT < -this.epsilon || xT > 1 + this.epsilon) return null;
        zT.m.CrossToRef(BT, iT, FT);
        const cT = zT.m.Dot(this.direction, FT) * LT;
        if (cT < -this.epsilon || xT + cT > 1 + this.epsilon) return null;
        const KT = zT.m.Dot(kT, FT) * LT;
        return KT > this.length || KT < 0 ? null : new WT.b(1 - xT - cT, xT, KT)
      }
      intersectsPlane(TT) {
        let oT;
        const IT = zT.m.Dot(TT.normal, this.direction);
        if (Math.abs(IT) < 9.99999997475243e-7) return null;
        {
          const iT = zT.m.Dot(TT.normal, this.origin);
          return oT = (-TT.d - iT) / IT, oT < 0 ? oT < -9.99999997475243e-7 ? null : 0 : oT
        }
      }
      intersectsAxis(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (TT) {
          case "y": {
            const TT = (this.origin.y - oT) / this.direction.y;
            return TT > 0 ? null : new zT.m(this.origin.x + this.direction.x * -TT, oT, this.origin.z + this.direction.z * -TT)
          }
          case "x": {
            const TT = (this.origin.x - oT) / this.direction.x;
            return TT > 0 ? null : new zT.m(oT, this.origin.y + this.direction.y * -TT, this.origin.z + this.direction.z * -TT)
          }
          case "z": {
            const TT = (this.origin.z - oT) / this.direction.z;
            return TT > 0 ? null : new zT.m(this.origin.x + this.direction.x * -TT, this.origin.y + this.direction.y * -TT, oT)
          }
          default:
            return null
        }
      }
      jiT(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          kT = arguments.length > 4 ? arguments[4] : void 0,
          WT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const XT = zT.i.Matrix[0];
        return TT.getWorldMatrix().invertToRef(XT), this._tmpRay ? DT.TransformToRef(this, XT, this._tmpRay) : this._tmpRay = DT.Transform(this, XT), TT.intersects(this._tmpRay, oT, IT, iT, kT, WT)
      }
      intersectsMeshes(TT, oT, IT) {
        IT ? IT.length = 0 : IT = [];
        for (let iT = 0; iT < TT.length; iT++) {
          const zT = this.jiT(TT[iT], oT);
          zT.hit && IT.push(zT)
        }
        return IT.sort(this._comparePickingInfo), IT
      }
      _comparePickingInfo(TT, oT) {
        return TT.distance < oT.distance ? -1 : TT.distance > oT.distance ? 1 : 0
      }
      intersectionSegment(TT, oT, IT) {
        const iT = this.origin,
          kT = zT.i.sc[0],
          WT = zT.i.sc[1],
          XT = zT.i.sc[2],
          BT = zT.i.sc[3];
        oT.subtractToRef(TT, kT), this.direction.scaleToRef(DT._Rayl, XT), iT.addToRef(XT, WT), TT.subtractToRef(iT, BT);
        const FT = zT.m.Dot(kT, kT),
          ST = zT.m.Dot(kT, XT),
          LT = zT.m.Dot(XT, XT),
          xT = zT.m.Dot(kT, BT),
          cT = zT.m.Dot(XT, BT),
          KT = FT * LT - ST * ST;
        let MT, rT, AT = KT,
          gT = KT;
        KT < DT._Smallnum ? (MT = 0, AT = 1, rT = cT, gT = LT) : (MT = ST * cT - LT * xT, rT = FT * cT - ST * xT, MT < 0 ? (MT = 0, rT = cT, gT = LT) : MT > AT && (MT = AT, rT = cT + ST, gT = LT)), rT < 0 ? (rT = 0, -xT < 0 ? MT = 0 : -xT > FT ? MT = AT : (MT = -xT, AT = FT)) : rT > gT && (rT = gT, -xT + ST < 0 ? MT = 0 : -xT + ST > FT ? MT = AT : (MT = -xT + ST, AT = FT));
        const hT = Math.abs(MT) < DT._Smallnum ? 0 : MT / AT,
          wT = Math.abs(rT) < DT._Smallnum ? 0 : rT / gT,
          mT = zT.i.sc[4];
        XT.scaleToRef(wT, mT);
        const eT = zT.i.sc[5];
        kT.scaleToRef(hT, eT), eT.addInPlace(BT);
        const RT = zT.i.sc[6];
        eT.subtractToRef(mT, RT);
        return wT > 0 && wT <= this.length && RT.lengthSquared() < IT * IT ? eT.length() : -1
      }
      update(TT, oT, IT, iT, kT, WT, XT) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          DT._RayDistant || (DT._RayDistant = DT.Zero()), DT._RayDistant.unprojectRayToRef(TT, oT, IT, iT, zT.b.IdentityReadOnly, WT, XT);
          const BT = zT.i.Matrix[0];
          kT.invertToRef(BT), DT.TransformToRef(DT._RayDistant, BT, this)
        } else this.unprojectRayToRef(TT, oT, IT, iT, kT, WT, XT);
        return this
      }
      static Zero() {
        return new DT(zT.m.Zero(), zT.m.Zero())
      }
      static CreateNew(TT, oT, IT, iT, zT, kT, WT) {
        return DT.Zero().update(TT, oT, IT, iT, zT, kT, WT)
      }
      static CreateNewFromTo(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.b.IdentityReadOnly;
        const iT = new DT(new zT.m(0, 0, 0), new zT.m(0, 0, 0));
        return DT.CreateFromToToRef(TT, oT, iT, IT)
      }
      static CreateFromToToRef(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zT.b.IdentityReadOnly;
        IT.origin.SIT(TT);
        const kT = oT.subtractToRef(TT, IT.direction),
          WT = Math.sqrt(kT.x * kT.x + kT.y * kT.y + kT.z * kT.z);
        return IT.length = WT, IT.direction.normalize(), DT.TransformToRef(IT, iT, IT)
      }
      static Transform(TT, oT) {
        const IT = new DT(new zT.m(0, 0, 0), new zT.m(0, 0, 0));
        return DT.TransformToRef(TT, oT, IT), IT
      }
      static TransformToRef(TT, oT, IT) {
        zT.m.TransformCoordinatesToRef(TT.origin, oT, IT.origin), zT.m.TransformNormalToRef(TT.direction, oT, IT.direction), IT.length = TT.length, IT.epsilon = TT.epsilon;
        const iT = IT.direction,
          kT = iT.length();
        if (0 !== kT && 1 !== kT) {
          const TT = 1 / kT;
          iT.x *= TT, iT.y *= TT, iT.z *= TT, IT.length *= kT
        }
        return IT
      }
      unprojectRayToRef(TT, oT, IT, iT, kT, WT, XT) {
        const FT = zT.i.Matrix[0];
        kT.multiplyToRef(WT, FT), FT.multiplyToRef(XT, FT), FT.invert();
        const ST = BT.d.LastCreatedEngine,
          DT = zT.i.sc[0];
        DT.x = TT / IT * 2 - 1, DT.y = -(oT / iT * 2 - 1), DT.z = ST?.lIT ? 1 : ST?.isNDCHalfZRange ? 0 : -1;
        const LT = zT.i.sc[1].S_(DT.x, DT.y, 1 - 1e-8),
          xT = zT.i.sc[2],
          cT = zT.i.sc[3];
        zT.m.TransformCoordinatesToRef(DT, FT, xT), zT.m.TransformCoordinatesToRef(LT, FT, cT), this.origin.SIT(xT), cT.subtractToRef(xT, this.direction), this.direction.normalize()
      }
    }

    function LT(TT, oT, IT, iT, zT) {
      let kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const WT = DT.Zero();
      return xT(TT, oT, IT, iT, WT, zT, kT), WT
    }

    function xT(TT, oT, IT, iT, kT, WT) {
      let XT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        BT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const FT = TT.Zc();
      if (!WT && !(WT = TT.activeCamera) && !(WT = TT.cameraToUseForPointers)) return TT;
      const ST = WT.viewport,
        DT = FT.getRenderHeight(),
        {
          x: LT,
          y: xT,
          width: cT,
          height: KT
        } = ST.toGlobal(FT.getRenderWidth(), DT),
        MT = 1 / FT.getHardwareScalingLevel();
      return oT = oT * MT - LT, IT = IT * MT - (DT - xT - KT), kT.update(oT, IT, cT, KT, iT || zT.b.IdentityReadOnly, XT ? zT.b.IdentityReadOnly : WT.getViewMatrix(), WT.getProjectionMatrix(), BT), TT
    }

    function cT(TT, oT, IT, iT) {
      const zT = DT.Zero();
      return KT(TT, oT, IT, zT, iT), zT
    }

    function KT(TT, oT, IT, iT, kT) {
      if (!XT.d) return TT;
      const WT = TT.Zc();
      if (!kT && !(kT = TT.activeCamera) && !(kT = TT.cameraToUseForPointers)) throw new Error("Active camera not set");
      const BT = kT.viewport,
        FT = WT.getRenderHeight(),
        {
          x: ST,
          y: DT,
          width: LT,
          height: xT
        } = BT.toGlobal(WT.getRenderWidth(), FT),
        cT = zT.b.Identity(),
        KT = 1 / WT.getHardwareScalingLevel();
      return oT = oT * KT - ST, IT = IT * KT - (FT - DT - xT), iT.update(oT, IT, LT, xT, cT, cT, kT.getProjectionMatrix()), TT
    }

    function MT(TT, oT, IT, iT, zT, kT, WT, XT) {
      return rT(TT, IT, iT, oT(iT, IT.enableDistantPicking), zT, kT, WT, XT)
    }

    function rT(TT, oT, IT, iT, zT, kT, WT, XT) {
      const BT = oT.intersects(iT, zT, WT, kT, IT, XT);
      return BT && BT.hit ? !zT && null != TT && BT.distance >= TT.distance ? null : BT : null
    }

    function AT(TT, oT) {
      return "InstancedLinesMesh" === TT || "LinesMesh" === TT ? oT.intersectionThreshold : 0
    }

    function gT(TT) {
      const oT = TT.getClassName();
      if ("GreasedLineMesh" === oT) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const IT = TT.rawBoundingInfo;
      return {
        rawBoundingInfo: IT,
        intersectionThreshold: IT ? AT(oT, TT) : 0
      }
    }

    function hT(TT, oT, IT, iT, zT) {
      const kT = TT(IT, oT.enableDistantPicking);
      return kT.intersectsSphere(iT.KiT, zT) && kT.intersectsBox(iT.boundingBox, zT) ? kT : null
    }

    function wT(TT, oT, IT, iT, kT, WT) {
      let BT = null;
      const FT = !!(TT.activeCameras && TT.activeCameras.length > 1 && TT.cameraToUseForPointers !== TT.activeCamera),
        DT = TT.cameraToUseForPointers || TT.activeCamera,
        LT = ST.internalPickerForMesh || MT,
        xT = LT === MT;
      for (let XT = 0; XT < TT.meshes.length; XT++) {
        const ST = TT.meshes[XT];
        if (IT) {
          if (!IT(ST, -1)) continue
        } else if (!ST.isEnabled() || !ST.isVisible || !ST.dK) continue;
        const cT = FT && ST.isWorldMatrixCameraDependent(),
          KT = ST.computeWorldMatrix(cT, DT);
        if (ST.hasThinInstances && ST.XoT) {
          const TT = LT(BT, oT, ST, KT, !0, !0, WT);
          if (TT) {
            if (kT) return TT;
            const {
              rawBoundingInfo: XT,
              intersectionThreshold: FT
            } = gT(ST), DT = ST._thinInstanceDataStorage.matrixData;
            if (DT) {
              const TT = zT.i.Matrix[0],
                cT = zT.i.Matrix[1],
                MT = Math.min(ST.W9, DT.length >> 4);
              for (let AT = 0; AT < MT; AT++) {
                if (IT && !IT(ST, AT)) continue;
                zT.b.FromArrayToRef(DT, AT << 4, TT), TT.multiplyToRef(KT, cT);
                const MT = xT && XT ? hT(oT, ST, cT, XT, FT) : null;
                if (xT && XT && !MT) continue;
                const gT = xT && MT ? rT(BT, ST, cT, MT, iT, kT, WT, !0) : LT(BT, oT, ST, cT, iT, kT, WT, !0);
                if (gT && (BT = gT, BT.thinInstanceIndex = AT, iT)) return BT
              }
            }
          }
        } else {
          const TT = LT(BT, oT, ST, KT, iT, kT, WT);
          if (TT && (BT = TT, iT)) return BT
        }
      }
      return BT || new XT.d
    }

    function mT(TT, oT, IT, iT) {
      if (!XT.d) return null;
      const kT = [],
        WT = !!(TT.activeCameras && TT.activeCameras.length > 1 && TT.cameraToUseForPointers !== TT.activeCamera),
        BT = TT.cameraToUseForPointers || TT.activeCamera,
        FT = ST.internalPickerForMesh || MT,
        DT = FT === MT;
      for (let XT = 0; XT < TT.meshes.length; XT++) {
        const ST = TT.meshes[XT];
        if (IT) {
          if (!IT(ST, -1)) continue
        } else if (!ST.isEnabled() || !ST.isVisible || !ST.dK) continue;
        const LT = WT && ST.isWorldMatrixCameraDependent(),
          xT = ST.computeWorldMatrix(LT, BT);
        if (ST.hasThinInstances && ST.XoT) {
          if (FT(null, oT, ST, xT, !0, !0, iT)) {
            const {
              rawBoundingInfo: TT,
              intersectionThreshold: WT
            } = gT(ST), XT = ST._thinInstanceDataStorage.matrixData;
            if (XT) {
              const BT = zT.i.Matrix[0],
                LT = zT.i.Matrix[1],
                cT = Math.min(ST.W9, XT.length >> 4);
              for (let KT = 0; KT < cT; KT++) {
                if (IT && !IT(ST, KT)) continue;
                zT.b.FromArrayToRef(XT, KT << 4, BT), BT.multiplyToRef(xT, LT);
                const cT = DT && TT ? hT(oT, ST, LT, TT, WT) : null;
                if (DT && TT && !cT) continue;
                const MT = DT && cT ? rT(null, ST, LT, cT, !1, !1, iT, !0) : FT(null, oT, ST, LT, !1, !1, iT, !0);
                MT && (MT.thinInstanceIndex = KT, kT.push(MT))
              }
            }
          }
        } else {
          const TT = FT(null, oT, ST, xT, !1, !1, iT);
          TT && kT.push(TT)
        }
      }
      return kT
    }

    function eT(TT, oT, IT, iT, kT, WT) {
      if (!XT.d) return null;
      const BT = wT(TT, (iT => (TT._tempPickingRay || (TT._tempPickingRay = DT.Zero()), xT(TT, oT, IT, iT, TT._tempPickingRay, WT || null), TT._tempPickingRay)), iT, kT, !0);
      return BT && (BT.ray = LT(TT, oT, IT, zT.b.Identity(), WT || null)), BT
    }

    function RT(TT, oT, IT, iT, kT, WT, XT) {
      const BT = wT(TT, ((iT, zT) => (TT._tempPickingRay || (TT._tempPickingRay = DT.Zero()), xT(TT, oT, IT, iT, TT._tempPickingRay, WT || null, !1, zT), TT._tempPickingRay)), iT, kT, !1, XT);
      return BT && (BT.ray = LT(TT, oT, IT, zT.b.Identity(), WT || null)), BT
    }

    function uT(TT, oT, IT, iT, kT) {
      const WT = wT(TT, (IT => (TT._pickWithRayInverseMatrix || (TT._pickWithRayInverseMatrix = zT.b.Identity()), IT.invertToRef(TT._pickWithRayInverseMatrix), TT._cachedRayForTransform || (TT._cachedRayForTransform = DT.Zero()), DT.TransformToRef(oT, TT._pickWithRayInverseMatrix, TT._cachedRayForTransform), TT._cachedRayForTransform)), IT, iT, !1, kT);
      return WT && (WT.ray = oT), WT
    }

    function vT(TT, oT, IT, iT, zT, kT) {
      return mT(TT, (iT => LT(TT, oT, IT, iT, zT || null)), iT, kT)
    }

    function ET(TT, oT, IT, iT) {
      return mT(TT, (IT => (TT._pickWithRayInverseMatrix || (TT._pickWithRayInverseMatrix = zT.b.Identity()), IT.invertToRef(TT._pickWithRayInverseMatrix), TT._cachedRayForTransform || (TT._cachedRayForTransform = DT.Zero()), DT.TransformToRef(oT, TT._pickWithRayInverseMatrix, TT._cachedRayForTransform), TT._cachedRayForTransform)), IT, iT)
    }

    function fT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        iT = arguments.length > 3 ? arguments[3] : void 0,
        kT = arguments.length > 4 ? arguments[4] : void 0;
      iT || (iT = TT.getWorldMatrix()), oT.length = IT, kT ? oT.origin.SIT(kT) : oT.origin.SIT(TT.position);
      const WT = zT.i.sc[2];
      WT.set(0, 0, TT._scene.useRightHandedSystem ? -1 : 1);
      const XT = zT.i.sc[3];
      return zT.m.TransformNormalToRef(WT, iT, XT), zT.m.NormalizeToRef(XT, oT.direction), oT
    }

    function CT(TT, oT) {
      oT && (oT.prototype.getForwardRay = function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        return fT(this, new DT(zT.m.Zero(), zT.m.Zero(), TT), TT, oT, IT)
      }, oT.prototype.getForwardRayToRef = function(TT) {
        return fT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), TT && (FT.c._IsPickingAvailable = !0, TT.prototype.createPickingRay = function(TT, oT, IT, iT) {
        return LT(this, TT, oT, IT, iT, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    DT._TmpVector3 = (0, kT.d)(6, zT.m.Zero), DT._RayDistant = DT.Zero(), DT._Smallnum = 1e-8, DT._Rayl = 1e9
  },
  40378: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT.E
    });
    var iT = IT(38882),
      zT = IT(38986),
      kT = IT(40384);
    let WT = !1;
    WT || (WT = !0, (0, kT.d)(iT.d, zT.c), iT.d.prototype.createPickingRayToRef = function(TT, oT, IT, iT, zT) {
      let WT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        XT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, kT.m)(this, TT, oT, IT, iT, zT, WT, XT)
    }, iT.d.prototype.createPickingRayInCameraSpace = function(TT, oT, IT) {
      return (0, kT.k)(this, TT, oT, IT)
    }, iT.d.prototype.createPickingRayInCameraSpaceToRef = function(TT, oT, IT, iT) {
      return (0, kT.g)(this, TT, oT, IT, iT)
    }, iT.d.prototype.pickWithBoundingInfo = function(TT, oT, IT, iT, zT) {
      return (0, kT.v)(this, TT, oT, IT, iT, zT)
    }, iT.d.prototype.PL = function(TT, oT, IT, iT, zT, WT) {
      let XT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, kT.A)(this, TT, oT, IT, iT, zT, WT, XT)
    }, iT.d.prototype.pickWithRay = function(TT, oT, IT, iT) {
      return (0, kT.x)(this, TT, oT, IT, iT)
    }, iT.d.prototype.multiPick = function(TT, oT, IT, iT, zT) {
      return (0, kT.r)(this, TT, oT, IT, iT, zT)
    }, iT.d.prototype.multiPickWithRay = function(TT, oT, IT) {
      return (0, kT.o)(this, TT, oT, IT)
    })
  },
  40387: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => ST
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(36118),
      WT = IT(39031),
      XT = IT(40395),
      BT = IT(38994),
      FT = IT(36166);
    let ST = (() => {
        var TT;
        let oT, IT, BT, FT, ST, DT, LT, xT, cT = XT.b,
          KT = [],
          MT = [],
          rT = [],
          AT = [],
          gT = [],
          hT = [],
          wT = [],
          mT = [],
          eT = [],
          RT = [],
          uT = [],
          vT = [],
          ET = [];
        return TT = class extends cT {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(TT) {
            this._shadowFrustumSize = TT, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(TT) {
            this._shadowOrthoScale = TT, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(TT) {
            this._orthoLeft = TT
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(TT) {
            this._orthoRight = TT
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(TT) {
            this._orthoTop = TT
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(TT) {
            this._orthoBottom = TT
          }
          constructor(TT, oT, IT, zT) {
            super(TT, IT, zT), this._shadowFrustumSize = ((0, iT.j)(this, KT), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, iT.j)(this, MT, !0), this.autoCalcShadowZBounds = ((0, iT.j)(this, rT), (0, iT.j)(this, AT, !1)), this._orthoLeft = ((0, iT.j)(this, gT), (0, iT.j)(this, hT, Number.MAX_VALUE)), this._orthoRight = ((0, iT.j)(this, wT), (0, iT.j)(this, mT, Number.MIN_VALUE)), this._orthoTop = ((0, iT.j)(this, eT), (0, iT.j)(this, RT, Number.MIN_VALUE)), this._orthoBottom = ((0, iT.j)(this, uT), (0, iT.j)(this, vT, Number.MAX_VALUE)), (0, iT.j)(this, ET), this.position = oT.scale(-1), this.direction = oT
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return WT.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(TT, oT, IT) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(TT) : this._setDefaultAutoExtendShadowProjectionMatrix(TT, oT, IT)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(TT) {
            const oT = this.pC().activeCamera;
            kT.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : oT ? oT.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : oT ? oT.maxZ : 1e4, TT, this.pC().Zc().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(TT, oT, IT) {
            const iT = this.pC().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const TT = kT.m.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let iT = Number.MAX_VALUE,
                zT = -Number.MAX_VALUE;
              for (let WT = 0; WT < IT.length; WT++) {
                const XT = IT[WT];
                if (!XT) continue;
                const BT = XT.GJ().boundingBox;
                for (let IT = 0; IT < BT.vectorsWorld.length; IT++) kT.m.TransformCoordinatesToRef(BT.vectorsWorld[IT], oT, TT), TT.x < this._orthoLeft && (this._orthoLeft = TT.x), TT.y < this._orthoBottom && (this._orthoBottom = TT.y), TT.x > this._orthoRight && (this._orthoRight = TT.x), TT.y > this._orthoTop && (this._orthoTop = TT.y), this.autoCalcShadowZBounds && (TT.z < iT && (iT = TT.z), TT.z > zT && (zT = TT.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = iT, this._shadowMaxZ = zT)
            }
            const zT = this._orthoRight - this._orthoLeft,
              WT = this._orthoTop - this._orthoBottom,
              XT = void 0 !== this.shadowMinZ ? this.shadowMinZ : iT?.minZ || 0,
              BT = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : iT?.maxZ || 1e4,
              FT = this.pC().Zc().lIT;
            kT.b.OrthoOffCenterLHToRef(this._orthoLeft - zT * this.shadowOrthoScale, this._orthoRight + zT * this.shadowOrthoScale, this._orthoBottom - WT * this.shadowOrthoScale, this._orthoTop + WT * this.shadowOrthoScale, FT ? BT : XT, FT ? XT : BT, TT, this.pC().Zc().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(TT, oT) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, oT), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, oT), this)
          }
          transferToNodeMaterialEffect(TT, oT) {
            return this.computeTransformedInformation() ? (TT.setFloat3(oT, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (TT.setFloat3(oT, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(TT) {
            const oT = this._scene.Zc();
            return !oT.lIT && oT.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(TT) {
            const oT = this._scene.Zc();
            return oT.lIT && oT.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(TT, oT) {
            TT["DIRLIGHT" + oT] = !0
          }
        }, (() => {
          const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(cT[Symbol.metadata] ?? null) : void 0;
          oT = [(0, zT.P)()], IT = [(0, zT.P)()], BT = [(0, zT.P)()], FT = [(0, zT.P)()], ST = [(0, zT.P)("orthoLeft")], DT = [(0, zT.P)("orthoRight")], LT = [(0, zT.P)("orthoTop")], xT = [(0, zT.P)("orthoBottom")], (0, iT.h)(TT, null, oT, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: TT => "shadowFrustumSize" in TT,
              get: TT => TT.shadowFrustumSize
            },
            metadata: kT
          }, null, KT), (0, iT.h)(TT, null, IT, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "shadowOrthoScale" in TT,
              get: TT => TT.shadowOrthoScale
            },
            metadata: kT
          }, null, KT), (0, iT.h)(null, null, BT, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: TT => "autoUpdateExtends" in TT,
              get: TT => TT.autoUpdateExtends,
              set: (TT, oT) => {
                TT.autoUpdateExtends = oT
              }
            },
            metadata: kT
          }, MT, rT), (0, iT.h)(null, null, FT, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: TT => "autoCalcShadowZBounds" in TT,
              get: TT => TT.autoCalcShadowZBounds,
              set: (TT, oT) => {
                TT.autoCalcShadowZBounds = oT
              }
            },
            metadata: kT
          }, AT, gT), (0, iT.h)(null, null, ST, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: TT => "_orthoLeft" in TT,
              get: TT => TT._orthoLeft,
              set: (TT, oT) => {
                TT._orthoLeft = oT
              }
            },
            metadata: kT
          }, hT, wT), (0, iT.h)(null, null, DT, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: TT => "_orthoRight" in TT,
              get: TT => TT._orthoRight,
              set: (TT, oT) => {
                TT._orthoRight = oT
              }
            },
            metadata: kT
          }, mT, eT), (0, iT.h)(null, null, LT, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: TT => "_orthoTop" in TT,
              get: TT => TT._orthoTop,
              set: (TT, oT) => {
                TT._orthoTop = oT
              }
            },
            metadata: kT
          }, RT, uT), (0, iT.h)(null, null, xT, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: TT => "_orthoBottom" in TT,
              get: TT => TT._orthoBottom,
              set: (TT, oT) => {
                TT._orthoBottom = oT
              }
            },
            metadata: kT
          }, vT, ET), kT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kT
          })
        })(), TT
      })(),
      DT = !1;
    DT || (DT = !0, BT.c.AddNodeConstructor("Light_Type_1", ((TT, oT) => () => new ST(TT, kT.m.Zero(), oT))), (0, FT.h)("BABYLON.DirectionalLight", ST))
  },
  40409: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => po
    });
    var iT = IT(37687),
      zT = IT(36149),
      kT = IT(36118),
      WT = IT(38923),
      XT = IT(40411),
      BT = IT(36146),
      FT = IT(39057),
      ST = IT(36177),
      DT = IT(37691),
      LT = IT(37658),
      xT = IT(36156);
    class cT {
      constructor() {
        this.direction1 = new kT.m(0, 1, 0), this.direction2 = new kT.m(0, 1, 0)
      }
      startDirectionFunction(TT, oT, IT, iT) {
        const zT = (0, xT.RandomRange)(this.direction1.x, this.direction2.x),
          WT = (0, xT.RandomRange)(this.direction1.y, this.direction2.y),
          XT = (0, xT.RandomRange)(this.direction1.z, this.direction2.z);
        iT ? oT.S_(zT, WT, XT) : kT.m.TransformNormalFromFloatsToRef(zT, WT, XT, TT, oT)
      }
      startPositionFunction(TT, oT, IT, iT) {
        iT ? oT.S_(0, 0, 0) : kT.m.TransformCoordinatesFromFloatsToRef(0, 0, 0, TT, oT)
      }
      clone() {
        const TT = new cT;
        return LT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        TT.setVector3("direction1", this.direction1), TT.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(TT) {
        TT.addUniform("direction1", 3), TT.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const TT = {};
        return TT.type = this.getClassName(), TT.direction1 = this.direction1.bIT(), TT.direction2 = this.direction2.bIT(), TT
      }
      parse(TT) {
        kT.m.FromArrayToRef(TT.direction1, 0, this.direction1), kT.m.FromArrayToRef(TT.direction2, 0, this.direction2)
      }
    }
    class KT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = TT, this.radiusRange = oT, this.directionRandomizer = IT
      }
      startDirectionFunction(TT, oT, IT, iT) {
        const zT = IT.position.subtract(TT.getTranslation()).normalize(),
          WT = (0, xT.RandomRange)(0, this.directionRandomizer),
          XT = (0, xT.RandomRange)(0, this.directionRandomizer),
          BT = (0, xT.RandomRange)(0, this.directionRandomizer);
        zT.x += WT, zT.y += XT, zT.z += BT, zT.normalize(), iT ? oT.SIT(zT) : kT.m.TransformNormalFromFloatsToRef(zT.x, zT.y, zT.z, TT, oT)
      }
      startPositionFunction(TT, oT, IT, iT) {
        const zT = this.radius - (0, xT.RandomRange)(0, this.radius * this.radiusRange),
          WT = (0, xT.RandomRange)(0, 1),
          XT = (0, xT.RandomRange)(0, 2 * Math.PI),
          BT = Math.acos(2 * WT - 1),
          FT = zT * Math.cos(XT) * Math.sin(BT),
          ST = zT * Math.cos(BT),
          DT = zT * Math.sin(XT) * Math.sin(BT);
        iT ? oT.S_(FT, Math.abs(ST), DT) : kT.m.TransformCoordinatesFromFloatsToRef(FT, Math.abs(ST), DT, TT, oT)
      }
      clone() {
        const TT = new KT(this.radius, this.directionRandomizer);
        return LT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        TT.setFloat("radius", this.radius), TT.setFloat("radiusRange", this.radiusRange), TT.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(TT) {
        TT.addUniform("radius", 1), TT.addUniform("radiusRange", 1), TT.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const TT = {};
        return TT.type = this.getClassName(), TT.radius = this.radius, TT.radiusRange = this.radiusRange, TT.directionRandomizer = this.directionRandomizer, TT
      }
      parse(TT) {
        this.radius = TT.radius, this.radiusRange = TT.radiusRange, this.directionRandomizer = TT.directionRandomizer
      }
    }
    class MT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = TT, this.radiusRange = oT, this.directionRandomizer = IT
      }
      startDirectionFunction(TT, oT, IT, iT) {
        const zT = IT.position.subtract(TT.getTranslation()).normalize(),
          WT = (0, xT.RandomRange)(0, this.directionRandomizer),
          XT = (0, xT.RandomRange)(0, this.directionRandomizer),
          BT = (0, xT.RandomRange)(0, this.directionRandomizer);
        zT.x += WT, zT.y += XT, zT.z += BT, zT.normalize(), iT ? oT.SIT(zT) : kT.m.TransformNormalFromFloatsToRef(zT.x, zT.y, zT.z, TT, oT)
      }
      startPositionFunction(TT, oT, IT, iT) {
        const zT = this.radius - (0, xT.RandomRange)(0, this.radius * this.radiusRange),
          WT = (0, xT.RandomRange)(0, 1),
          XT = (0, xT.RandomRange)(0, 2 * Math.PI),
          BT = Math.acos(2 * WT - 1),
          FT = zT * Math.cos(XT) * Math.sin(BT),
          ST = zT * Math.cos(BT),
          DT = zT * Math.sin(XT) * Math.sin(BT);
        iT ? oT.S_(FT, ST, DT) : kT.m.TransformCoordinatesFromFloatsToRef(FT, ST, DT, TT, oT)
      }
      clone() {
        const TT = new MT(this.radius, this.directionRandomizer);
        return LT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        TT.setFloat("radius", this.radius), TT.setFloat("radiusRange", this.radiusRange), TT.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(TT) {
        TT.addUniform("radius", 1), TT.addUniform("radiusRange", 1), TT.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const TT = {};
        return TT.type = this.getClassName(), TT.radius = this.radius, TT.radiusRange = this.radiusRange, TT.directionRandomizer = this.directionRandomizer, TT
      }
      parse(TT) {
        this.radius = TT.radius, this.radiusRange = TT.radiusRange, this.directionRandomizer = TT.directionRandomizer
      }
    }
    class rT extends MT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new kT.m(0, 1, 0),
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new kT.m(0, 1, 0);
        super(TT), this.direction1 = oT, this.direction2 = IT
      }
      startDirectionFunction(TT, oT, IT, iT) {
        const zT = (0, xT.RandomRange)(this.direction1.x, this.direction2.x),
          WT = (0, xT.RandomRange)(this.direction1.y, this.direction2.y),
          XT = (0, xT.RandomRange)(this.direction1.z, this.direction2.z);
        iT ? oT.S_(zT, WT, XT) : kT.m.TransformNormalFromFloatsToRef(zT, WT, XT, TT, oT)
      }
      clone() {
        const TT = new rT(this.radius, this.direction1, this.direction2);
        return LT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        TT.setFloat("radius", this.radius), TT.setFloat("radiusRange", this.radiusRange), TT.setVector3("direction1", this.direction1), TT.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(TT) {
        TT.addUniform("radius", 1), TT.addUniform("radiusRange", 1), TT.addUniform("direction1", 3), TT.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const TT = super.serialize();
        return TT.direction1 = this.direction1.bIT(), TT.direction2 = this.direction2.bIT(), TT
      }
      parse(TT) {
        super.parse(TT), kT.m.FromArrayToRef(TT.direction1, 0, this.direction1), kT.m.FromArrayToRef(TT.direction2, 0, this.direction2)
      }
    }
    var AT = IT(37656);
    class gT {
      get radius() {
        return this._radius
      }
      set radius(TT) {
        this._radius = TT, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(TT) {
        this._angle = TT, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = IT, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = oT, this.radius = TT
      }
      startDirectionFunction(TT, oT, IT, iT) {
        const zT = IT.position.subtract(TT.getTranslation()).normalize(),
          WT = (0, xT.RandomRange)(0, this.directionRandomizer),
          XT = (0, xT.RandomRange)(0, this.directionRandomizer),
          BT = (0, xT.RandomRange)(0, this.directionRandomizer);
        zT.x += WT, zT.y += XT, zT.z += BT, zT.normalize(), iT ? oT.SIT(zT) : kT.m.TransformNormalFromFloatsToRef(zT.x, zT.y, zT.z, TT, oT)
      }
      startPositionFunction(TT, oT, IT, iT) {
        const zT = (0, xT.RandomRange)(0, 2 * Math.PI);
        let WT;
        this.emitFromSpawnPointOnly ? WT = 1e-4 : (WT = (0, xT.RandomRange)(0, this.heightRange), WT = 1 - WT * WT);
        let XT = this._radius - (0, xT.RandomRange)(0, this._radius * this.radiusRange);
        XT *= WT;
        const BT = XT * Math.sin(zT),
          FT = XT * Math.cos(zT),
          ST = WT * this._height;
        if (iT) return oT.x = BT, oT.y = ST, void(oT.z = FT);
        kT.m.TransformCoordinatesFromFloatsToRef(BT, ST, FT, TT, oT)
      }
      clone() {
        const TT = new gT(this._radius, this._angle, this.directionRandomizer);
        return LT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        TT.setFloat2("radius", this._radius, this.radiusRange), TT.setFloat("coneAngle", this._angle), TT.setFloat2("height", this._height, this.heightRange), TT.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(TT) {
        TT.addUniform("radius", 2), TT.addUniform("coneAngle", 1), TT.addUniform("height", 2), TT.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let TT = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (TT += "\n#define CONEEMITTERSPAWNPOINT"), TT
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const TT = {};
        return TT.type = this.getClassName(), TT.radius = this._radius, TT.angle = this._angle, TT.directionRandomizer = this.directionRandomizer, TT.radiusRange = this.radiusRange, TT.heightRange = this.heightRange, TT.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, TT
      }
      parse(TT) {
        this.radius = TT.radius, this.angle = TT.angle, this.directionRandomizer = TT.directionRandomizer, this.radiusRange = void 0 !== TT.radiusRange ? TT.radiusRange : 1, this.heightRange = void 0 !== TT.heightRange ? TT.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== TT.emitFromSpawnPointOnly && TT.emitFromSpawnPointOnly
      }
    }
    class hT extends gT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new kT.m(0, 1, 0),
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kT.m(0, 1, 0);
        super(TT, oT), this.direction1 = IT, this.direction2 = iT
      }
      startDirectionFunction(TT, oT, IT, iT) {
        const zT = (0, xT.RandomRange)(this.direction1.x, this.direction2.x),
          WT = (0, xT.RandomRange)(this.direction1.y, this.direction2.y),
          XT = (0, xT.RandomRange)(this.direction1.z, this.direction2.z);
        iT ? oT.S_(zT, WT, XT) : kT.m.TransformNormalFromFloatsToRef(zT, WT, XT, TT, oT)
      }
      clone() {
        const TT = new hT(this.radius, this.angle, this.direction1, this.direction2);
        return LT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        super.applyToShader(TT), TT.setVector3("direction1", this.direction1), TT.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(TT) {
        super.buildUniformLayout(TT), TT.addUniform("direction1", 3), TT.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const TT = super.serialize();
        return TT.direction1 = this.direction1.bIT(), TT.direction2 = this.direction2.bIT(), TT
      }
      parse(TT) {
        super.parse(TT), kT.m.FromArrayToRef(TT.direction1, 0, this.direction1), kT.m.FromArrayToRef(TT.direction2, 0, this.direction2)
      }
    }
    class wT {
      get mesh() {
        return this._mesh
      }
      set mesh(TT) {
        this._mesh !== TT && (this._mesh = TT, TT ? (this._indices = TT.hWT(), this._positions = TT.getVerticesData(WT.i.PositionKind), this._normals = TT.getVerticesData(WT.i.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = kT.m.Zero(), this._mesh = null, this.direction1 = new kT.m(0, 1, 0), this.direction2 = new kT.m(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = TT
      }
      startDirectionFunction(TT, oT, IT, iT) {
        if (this.useMeshNormalsForDirection && this._normals) return void kT.m.TransformNormalToRef(this._storedNormal, TT, oT);
        const zT = (0, xT.RandomRange)(this.direction1.x, this.direction2.x),
          WT = (0, xT.RandomRange)(this.direction1.y, this.direction2.y),
          XT = (0, xT.RandomRange)(this.direction1.z, this.direction2.z);
        iT ? oT.S_(zT, WT, XT) : kT.m.TransformNormalFromFloatsToRef(zT, WT, XT, TT, oT)
      }
      startPositionFunction(TT, oT, IT, iT) {
        if (!this._indices || !this._positions) return;
        const zT = 3 * (Math.random() * (this._indices.length / 3) | 0),
          WT = Math.random(),
          XT = Math.random() * (1 - WT),
          BT = 1 - WT - XT,
          FT = this._indices[zT],
          ST = this._indices[zT + 1],
          DT = this._indices[zT + 2],
          LT = kT.i.sc[0],
          xT = kT.i.sc[1],
          cT = kT.i.sc[2],
          KT = kT.i.sc[3];
        kT.m.FromArrayToRef(this._positions, 3 * FT, LT), kT.m.FromArrayToRef(this._positions, 3 * ST, xT), kT.m.FromArrayToRef(this._positions, 3 * DT, cT), KT.x = WT * LT.x + XT * xT.x + BT * cT.x, KT.y = WT * LT.y + XT * xT.y + BT * cT.y, KT.z = WT * LT.z + XT * xT.z + BT * cT.z, iT ? oT.S_(KT.x, KT.y, KT.z) : kT.m.TransformCoordinatesFromFloatsToRef(KT.x, KT.y, KT.z, TT, oT), this.useMeshNormalsForDirection && this._normals && (kT.m.FromArrayToRef(this._normals, 3 * FT, LT), kT.m.FromArrayToRef(this._normals, 3 * ST, xT), kT.m.FromArrayToRef(this._normals, 3 * DT, cT), this._storedNormal.x = WT * LT.x + XT * xT.x + BT * cT.x, this._storedNormal.y = WT * LT.y + XT * xT.y + BT * cT.y, this._storedNormal.z = WT * LT.z + XT * xT.z + BT * cT.z)
      }
      clone() {
        const TT = new wT(this.mesh);
        return LT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        TT.setVector3("direction1", this.direction1), TT.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(TT) {
        TT.addUniform("direction1", 3), TT.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const TT = {};
        return TT.type = this.getClassName(), TT.direction1 = this.direction1.bIT(), TT.direction2 = this.direction2.bIT(), TT.meshId = this.mesh?.id, TT.useMeshNormalsForDirection = this.useMeshNormalsForDirection, TT
      }
      parse(TT, oT) {
        kT.m.FromArrayToRef(TT.direction1, 0, this.direction1), kT.m.FromArrayToRef(TT.direction2, 0, this.direction2), TT.meshId && oT && (this.mesh = oT.getLastMeshById(TT.meshId)), this.useMeshNormalsForDirection = TT.useMeshNormalsForDirection
      }
    }
    class mT {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(TT) {
        this._targetStopDuration !== TT && (this._targetStopDuration = TT)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(TT) {
        this._noiseTexture !== TT && (this._noiseTexture = TT, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(TT) {
        this._attractors.push(TT)
      }
      removeAttractor(TT) {
        const oT = this._attractors.indexOf(TT); - 1 !== oT && this._attractors.splice(oT, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(TT) {
        this._animationSheetEnabled !== TT && (this._animationSheetEnabled = TT)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(TT) {
        this._isAnimationSheetEnabled != TT && (this._isAnimationSheetEnabled = TT, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(TT) {
        this._useLogarithmicDepth = TT && this.pC().Zc().getCaps().fragmentDepthSupported
      }
      pC() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(TT) {
        switch (TT) {
          case mT.BLENDMODE_MULTIPLYADD:
            return;
          case mT.BLENDMODE_ADD:
            TT = 1;
            break;
          case mT.BLENDMODE_ONEONE:
            TT = 6;
            break;
          case mT.BLENDMODE_STANDARD:
            TT = 2;
            break;
          case mT.BLENDMODE_MULTIPLY:
            TT = 4;
            break;
          case mT.BLENDMODE_SUBTRACT:
            TT = 3
        }
        this._engine.setAlphaMode(TT)
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
      addEmitRateGradient(TT, oT, IT) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, TT, oT, IT), this
      }
      removeEmitRateGradient(TT) {
        return this._removeFactorGradient(this._emitRateGradients, TT), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : kT.m.Zero()
      }
      set direction1(TT) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = TT)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : kT.m.Zero()
      }
      set direction2(TT) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = TT)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : kT.m.Zero()
      }
      set minEmitBox(TT) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = TT)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : kT.m.Zero()
      }
      set maxEmitBox(TT) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = TT)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(TT) {
        this._billboardMode !== TT && (this._billboardMode = TT, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(TT) {
        this._isBillboardBased !== TT && (this._isBillboardBased = TT, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(TT) {
        this._attachImageProcessingConfiguration(TT)
      }
      _attachImageProcessingConfiguration(TT) {
        TT !== this._imageProcessingConfiguration && (!TT && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = TT)
      }
      _reset() {}
      _addFactorGradient(TT, oT, IT, zT) {
        const kT = new iT.h(oT, IT, zT);
        TT.push(kT), TT.sort(((TT, oT) => TT.gradient < oT.gradient ? -1 : TT.gradient > oT.gradient ? 1 : 0))
      }
      _removeFactorGradient(TT, oT) {
        if (!TT) return;
        let IT = 0;
        for (const iT of TT) {
          if (iT.gradient === oT) {
            TT.splice(IT, 1);
            break
          }
          IT++
        }
      }
      _removeGradientAndTexture(TT, oT, IT) {
        if (!oT) return this;
        let iT = 0;
        for (const zT of oT) {
          if (zT.gradient === TT) {
            oT.splice(iT, 1);
            break
          }
          iT++
        }
        return IT && IT.dispose(), this
      }
      constructor(TT) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = kT.m.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new kT.m(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = mT.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new kT.j(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new kT.m(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = kT.m.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new ST.i(1, 1, 1, 1), this.color2 = new ST.i(1, 1, 1, 1), this.colorDead = new ST.i(0, 0, 0, 1), this.textureMask = new ST.i(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new FT.d, this.id = TT, this.name = TT
      }
      createPointEmitter(TT, oT) {
        const IT = function(TT, oT) {
          const IT = new cT;
          return IT.direction1 = TT, IT.direction2 = oT, IT
        }(TT, oT);
        return this.particleEmitterType = IT, IT
      }
      createHemisphericEmitter() {
        const TT = function() {
          return new KT(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = TT, TT
      }
      createSphereEmitter() {
        const TT = function() {
          return new MT(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = TT, TT
      }
      createDirectedSphereEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new kT.m(0, 1, 0),
            IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new kT.m(0, 1, 0);
          return new rT(TT, oT, IT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new kT.m(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new kT.m(0, 1, 0));
        return this.particleEmitterType = TT, TT
      }
      createCylinderEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new AT.h(TT, oT, IT, iT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = TT, TT
      }
      createDirectedCylinderEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kT.m(0, 1, 0),
            zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new kT.m(0, 1, 0);
          return new AT.e(TT, oT, IT, iT, zT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kT.m(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new kT.m(0, 1, 0));
        return this.particleEmitterType = TT, TT
      }
      createConeEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new gT(TT, oT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = TT, TT
      }
      createDirectedConeEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new kT.m(0, 1, 0),
            iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kT.m(0, 1, 0);
          return new hT(TT, oT, IT, iT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new kT.m(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kT.m(0, 1, 0));
        return this.particleEmitterType = TT, TT
      }
      createBoxEmitter(TT, oT, IT, iT) {
        const zT = new DT.e;
        return this.particleEmitterType = zT, this.direction1 = TT, this.direction2 = oT, this.minEmitBox = IT, this.maxEmitBox = iT, zT
      }
      createMeshEmitter() {
        const TT = function() {
          return new wT(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = TT, TT
      }
    }
    mT.BLENDMODE_ONEONE = 0, mT.BLENDMODE_STANDARD = 1, mT.BLENDMODE_ADD = 2, mT.BLENDMODE_MULTIPLY = 3, mT.BLENDMODE_MULTIPLYADD = 4, mT.BLENDMODE_SUBTRACT = -1;
    class eT {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new ST.i(0, 0, 0, 0), this.currentColor2 = new ST.i(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = kT.m.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class RT {
      constructor(TT) {
        this.particleSystem = TT, this.position = kT.m.Zero(), this.direction = kT.m.Zero(), this.color = new ST.i(0, 0, 0, 0), this.colorStep = new ST.i(0, 0, 0, 0), this.initialColor = new ST.i(0, 0, 0, 0), this.colorDead = new ST.i(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new kT.j(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new eT, this.id = RT._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let TT = this.age,
          oT = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === oT ? (oT = 1, TT = this._properties.randomCellOffset) : TT += this._properties.randomCellOffset);
        const IT = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let iT;
        iT = this._properties.initialSpriteCellLoop ? (0, xT.Clamp)(TT * oT % this.lifeTime / this.lifeTime) : (0, xT.Clamp)(TT * oT / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + iT * IT | 0
      }
      _inheritParticleInfoToSubEmitter(TT) {
        if (TT.particleSystem.emitter.position) {
          const oT = TT.particleSystem.emitter;
          if (oT.position.SIT(this.position), TT.inheritDirection) {
            const TT = kT.i.sc[0];
            this.direction.normalizeToRef(TT), oT.setDirection(TT, 0, Math.PI / 2)
          }
        } else {
          TT.particleSystem.emitter.SIT(this.position)
        }
        this.direction.scaleToRef(TT.inheritedVelocityAmount / 2, kT.i.sc[0]), TT.particleSystem._inheritedVelocityOffset.SIT(kT.i.sc[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const TT of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(TT)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = RT._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(TT) {
        TT.position.SIT(this.position), this._properties.initialDirection ? TT._properties.initialDirection ? TT._properties.initialDirection.SIT(this._properties.initialDirection) : TT._properties.initialDirection = this._properties.initialDirection.clone() : TT._properties.initialDirection = null, TT.direction.SIT(this.direction), this._properties.localPosition && (TT._properties.localPosition ? TT._properties.localPosition.SIT(this._properties.localPosition) : TT._properties.localPosition = this._properties.localPosition.clone()), TT.color.SIT(this.color), TT.colorStep.SIT(this.colorStep), TT.initialColor.SIT(this.initialColor), TT.colorDead.SIT(this.colorDead), TT.lifeTime = this.lifeTime, TT.age = this.age, TT._properties.randomCellOffset = this._properties.randomCellOffset, TT.size = this.size, TT.scale.SIT(this.scale), TT.angle = this.angle, TT.angularSpeed = this.angularSpeed, TT.particleSystem = this.particleSystem, TT.cellIndex = this.cellIndex, TT.id = this.id, TT._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (TT._properties.currentColorGradient = this._properties.currentColorGradient, TT._properties.currentColor1.SIT(this._properties.currentColor1), TT._properties.currentColor2.SIT(this._properties.currentColor2)), this._properties.currentSizeGradient && (TT._properties.currentSizeGradient = this._properties.currentSizeGradient, TT._properties.currentSize1 = this._properties.currentSize1, TT._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (TT._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, TT._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, TT._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (TT._properties.currentVelocityGradient = this._properties.currentVelocityGradient, TT._properties.currentVelocity1 = this._properties.currentVelocity1, TT._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (TT._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, TT._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, TT._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (TT._properties.currentDragGradient = this._properties.currentDragGradient, TT._properties.currentDrag1 = this._properties.currentDrag1, TT._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (TT._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, TT._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, TT._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (TT.remapData && this.remapData ? TT.remapData.SIT(this.remapData) : TT.remapData = new kT.n(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (TT._properties.randomNoiseCoordinates1 && TT._properties.randomNoiseCoordinates2 ? (TT._properties.randomNoiseCoordinates1.SIT(this._properties.randomNoiseCoordinates1), TT._properties.randomNoiseCoordinates2.SIT(this._properties.randomNoiseCoordinates2)) : (TT._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), TT._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), TT.metadata = this.metadata
      }
    }
    RT._Count = 0;
    var uT = IT(40011);
    class vT {
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
      constructor(TT, oT, IT, iT) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = oT, this.Py = TT, this._scene = IT, this._host = iT, this._activeTargets = [], oT._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Kz: this._getCorrectLoopMode()
          }, this._animation.dataType === uT.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = kT.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const TT = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, TT)
        }
        if (this.Py instanceof Array) {
          let TT = 0;
          for (const oT of this.Py) this._preparePath(oT, TT), this._getOriginalValues(TT), TT++;
          this._targetIsArray = !0
        } else this._preparePath(this.Py), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const zT = oT.getEvents();
        if (zT && zT.length > 0)
          for (const kT of zT) this._events.push(kT._clone());
        this._enableBlending = TT && TT.animationPropertiesOverride ? TT.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const IT = this._animation.targetPropertyPath;
        if (IT.length > 1) {
          let iT = TT;
          for (let TT = 0; TT < IT.length - 1; TT++) {
            const oT = IT[TT];
            if (iT = iT[oT], void 0 === iT) throw new Error(`Invalid property (${oT}) in property path (${IT.join(".")})`)
          }
          this._targetPath = IT[IT.length - 1], this._activeTargets[oT] = iT
        } else this._targetPath = IT[0], this._activeTargets[oT] = TT;
        if (void 0 === this._activeTargets[oT][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${IT.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.Py instanceof Array) {
            let TT = 0;
            for (const oT of this.Py) void 0 !== this._originalValue[TT] && this._setValue(oT, this._activeTargets[TT], this._originalValue[TT], -1, TT), TT++
          } else void 0 !== this._originalValue[0] && this._setValue(this.Py, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let TT = 0; TT < this._events.length; TT++) this._events[TT].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const TT = this._animation.runtimeAnimations.indexOf(this);
        TT > -1 && this._animation.runtimeAnimations.splice(TT, 1)
      }
      setValue(TT, oT) {
        if (this._targetIsArray)
          for (let IT = 0; IT < this.Py.length; IT++) {
            const iT = this.Py[IT];
            this._setValue(iT, this._activeTargets[IT], TT, oT, IT)
          } else this._setValue(this.Py, this._directTarget, TT, oT, 0)
      }
      _getOriginalValues() {
        let TT, oT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const IT = this._activeTargets[oT];
        if (uT.b.InheritOriginalValueFromActiveAnimations) {
          const TT = this._scene._activeAnimatables;
          for (let iT = 0; iT < TT.length; iT++) {
            const zT = TT[iT]._runtimeAnimations;
            for (let TT = 0; TT < zT.length; TT++) {
              const iT = zT[TT];
              if (iT !== this && iT._targetPath === this._targetPath)
                for (let TT = 0; TT < iT._activeTargets.length; TT++)
                  if (iT._activeTargets[TT] === IT && void 0 !== iT._originalValue[TT]) return void(iT._originalValue[TT] && iT._originalValue[TT].clone ? this._originalValue[oT] = iT._originalValue[TT].clone() : this._originalValue[oT] = iT._originalValue[TT])
            }
          }
        }
        TT = IT.getLocalMatrix && "_matrix" === this._targetPath ? IT.getLocalMatrix() : IT[this._targetPath], TT && TT.clone ? this._originalValue[oT] = TT.clone() : this._originalValue[oT] = TT
      }
      _registerTargetForLateAnimationBinding(TT, oT) {
        const IT = TT.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(IT), IT._lateAnimationHolders || (IT._lateAnimationHolders = {}), IT._lateAnimationHolders[TT.targetPath] || (IT._lateAnimationHolders[TT.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: oT
        }), TT.isAdditive ? (IT._lateAnimationHolders[TT.targetPath].additiveAnimations.push(TT), IT._lateAnimationHolders[TT.targetPath].totalAdditiveWeight += TT.weight) : (IT._lateAnimationHolders[TT.targetPath].animations.push(TT), IT._lateAnimationHolders[TT.targetPath].totalWeight += TT.weight)
      }
      _setValue(TT, oT, IT, iT, zT) {
        const WT = this._scene._animationWrites,
          XT = this._scene._animationWriteCount++;
        let BT = WT[XT];
        if (BT || (BT = WT[XT] = {
            runtimeAnimation: this,
            target: TT,
            weight: iT,
            additive: !1,
            blendingFactor: 1,
            xM: !1
          }), BT.runtimeAnimation = this, BT.target = TT, BT.weight = iT, BT.additive = this.isAdditive, BT.xM = !1, this._currentActiveTarget = oT, this._weight = iT, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const TT = oT[this._targetPath];
            TT.clone ? this._originalBlendValue = TT.clone() : this._originalBlendValue = TT
          }
          this._originalBlendValue.m ? uT.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? kT.b.DecomposeLerpToRef(this._originalBlendValue, IT, this._blendingFactor, this._currentValue) : this._currentValue = kT.b.DecomposeLerp(this._originalBlendValue, IT, this._blendingFactor) : this._currentValue ? kT.b.LerpToRef(this._originalBlendValue, IT, this._blendingFactor, this._currentValue) : this._currentValue = kT.b.Lerp(this._originalBlendValue, IT, this._blendingFactor) : this._currentValue = uT.b._UniversalLerp(this._originalBlendValue, IT, this._blendingFactor);
          const iT = TT && TT.animationPropertiesOverride ? TT.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          BT.blendingFactor = this._blendingFactor, this._blendingFactor += iT
        } else BT.blendingFactor = 1, this._currentValue ? this._currentValue.SIT ? this._currentValue.SIT(IT) : this._currentValue = IT : this._currentValue = IT?.clone ? IT.clone() : IT; - 1 !== iT ? this._registerTargetForLateAnimationBinding(this, this._originalValue[zT]) : this._animationState.Kz === uT.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[zT], oT[this._targetPath]) : oT[this._targetPath] = this._originalValue[zT] + this._currentValue : oT[this._targetPath] = this._currentValue, TT.roT && TT.roT(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.Py && this.Py.animationPropertiesOverride) {
          return "MorphTarget" === this.Py.getClassName?.() && null == this.Py._animationPropertiesOverride ? this._animation.Kz : this.Py.animationPropertiesOverride.Kz
        }
        return this._animation.Kz
      }
      goToFrame(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const IT = this._animation.getKeys();
        TT < IT[0].frame ? TT = IT[0].frame : TT > IT[IT.length - 1].frame && (TT = IT[IT.length - 1].frame);
        const iT = this._events;
        if (iT.length)
          for (let kT = 0; kT < iT.length; kT++) iT[kT].onlyOnce || (iT[kT].isDone = iT[kT].frame < TT);
        this._currentFrame = TT;
        const zT = this._animation._interpolate(TT, this._animationState);
        this.setValue(zT, oT)
      }
      _prepareForSpeedRatioChange(TT) {
        const oT = this._previousElapsedTime * (this._animation.framePerSecond * TT) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - oT
      }
      animate(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const WT = this._animation,
          XT = WT.targetPropertyPath;
        if (!XT || XT.length < 1) return this._stopped = !0, !1;
        let BT, FT = !0;
        const ST = this._events;
        let DT;
        if (this._coreRuntimeAnimation) DT = IT - oT, BT = this._coreRuntimeAnimation.currentFrame, this._currentFrame = BT, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let kT;
          (oT < this._minFrame || oT > this._maxFrame) && (oT = this._minFrame), (IT < this._minFrame || IT > this._maxFrame) && (IT = this._maxFrame), DT = IT - oT;
          let XT = TT * (WT.framePerSecond * zT) / 1e3 + this._absoluteFrameOffset,
            LT = 0,
            xT = !1;
          const cT = iT && this._animationState.Kz === uT.b.ANIMATIONLOOPMODE_YOYO;
          if (cT) {
            const TT = (XT - oT) / DT,
              IT = Math.sin(TT * Math.PI);
            XT = Math.abs(IT) * DT + oT;
            const iT = IT >= 0 ? 1 : -1;
            this._yoyoDirection !== iT && (xT = !0), this._yoyoDirection = iT
          }
          if (this._previousElapsedTime = TT, this._previousAbsoluteFrame = XT, !iT && IT >= oT && (XT >= DT && zT > 0 || XT <= 0 && zT < 0)) FT = !1, LT = WT.evaluate(IT);
          else if (!iT && oT >= IT && (XT <= DT && zT < 0 || XT >= 0 && zT > 0)) FT = !1, LT = WT.evaluate(oT);
          else if (this._animationState.Kz !== uT.b.ANIMATIONLOOPMODE_CYCLE) {
            const TT = IT.toString() + oT.toString();
            if (!this._offsetsCache[TT]) {
              this._animationState.repeatCount = 0, this._animationState.Kz = uT.b.ANIMATIONLOOPMODE_CYCLE;
              const iT = WT._interpolate(oT, this._animationState),
                zT = WT._interpolate(IT, this._animationState);
              switch (this._animationState.Kz = this._getCorrectLoopMode(), WT.dataType) {
                case uT.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[TT] = zT - iT;
                  break;
                case uT.b.ANIMATIONTYPE_QUATERNION:
                case uT.b.ANIMATIONTYPE_VECTOR3:
                case uT.b.ANIMATIONTYPE_VECTOR2:
                case uT.b.ANIMATIONTYPE_SIZE:
                case uT.b.ANIMATIONTYPE_COLOR3:
                case uT.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[TT] = zT.subtract(iT)
              }
              this._highLimitsCache[TT] = zT
            }
            LT = this._highLimitsCache[TT], kT = this._offsetsCache[TT]
          }
          if (void 0 === kT) switch (WT.dataType) {
            case uT.b.ANIMATIONTYPE_FLOAT:
              kT = 0;
              break;
            case uT.b.ANIMATIONTYPE_QUATERNION:
              kT = uT.k;
              break;
            case uT.b.ANIMATIONTYPE_VECTOR3:
              kT = uT.s;
              break;
            case uT.b.ANIMATIONTYPE_VECTOR2:
              kT = uT.q;
              break;
            case uT.b.ANIMATIONTYPE_SIZE:
              kT = uT.o;
              break;
            case uT.b.ANIMATIONTYPE_COLOR3:
              kT = uT.i;
              break;
            case uT.b.ANIMATIONTYPE_COLOR4:
              kT = uT.j
          }
          const KT = this._host ? this._host.syncRoot : null;
          let MT, rT = this._playbackFrames,
            AT = !1;
          if (KT) {
            const TT = KT.toFrame - KT.fromFrame,
              IT = KT.masterFrame,
              iT = (IT - KT.fromFrame) / TT;
            BT = oT + DT * iT;
            const zT = KT.getAnimations()[0];
            if (zT && 0 !== TT) {
              const TT = DT * iT,
                oT = zT._playbackTo - zT._playbackFrom;
              if (0 !== oT && zT._playbackFrom <= KT.fromFrame && zT._playbackTo >= KT.toFrame) {
                rT = DT * Math.round((zT._playbackFrames - (zT._currentFrame - zT._playbackFrom)) / oT) + TT
              } else AT = (IT - this._playbackSyncMasterFrame) * (zT._playbackFrames - this._playbackSyncMasterPlayed) < 0, rT = TT;
              AT = AT || zT._playbackJumped, this._playbackSyncMasterPlayed = zT._playbackFrames, this._playbackSyncMasterFrame = IT
            }
          } else BT = XT > 0 && oT > IT || XT < 0 && oT < IT ? FT && 0 !== DT ? IT + XT % DT : oT : FT && 0 !== DT ? oT + XT % DT : IT;
          if (!cT && (zT > 0 && this.currentFrame > BT || zT < 0 && this.currentFrame < BT) || cT && xT) {
            this._onLoop();
            for (let TT = 0; TT < ST.length; TT++) ST[TT].onlyOnce || (ST[TT].isDone = !1);
            this._animationState.key = zT > 0 ? 0 : WT.getKeys().length - 1
          }
          if (this._currentFrame = BT, this._animationState.repeatCount = 0 === DT ? 0 : XT / DT | 0, this._animationState.highLimitValue = LT, this._animationState.offsetValue = kT, this._playbackFrom = oT, this._playbackTo = IT, this._playbackJumped = AT, this._playbackSyncRoot = KT, KT) MT = rT;
          else if (FT) MT = cT ? BT === oT && XT === IT ? DT : BT - oT : XT;
          else {
            const TT = 0 !== DT ? Math.floor(this._playbackFrames / DT) : 0;
            MT = (BT === IT ? TT + 1 : TT) * DT
          }
          this._playbackFrames = MT, this._playbackProgress = this._animationState.Kz === uT.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? DT : MT
        }
        const LT = WT._interpolate(BT, this._animationState);
        if (this.setValue(LT, kT), ST.length)
          for (let xT = 0; xT < ST.length; xT++)
            if (DT >= 0 && BT >= ST[xT].frame && ST[xT].frame >= oT || DT < 0 && BT <= ST[xT].frame && ST[xT].frame <= oT) {
              const TT = ST[xT];
              TT.isDone || (TT.onlyOnce && (ST.splice(xT, 1), xT--), TT.isDone = !0, TT.action(BT))
            } return FT || (this._stopped = !0), FT
      }
    }
    var ET = IT(38667);
    class fT {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(TT) {
        this._weight = -1 !== TT ? Math.min(Math.max(TT, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(TT) {
        for (let oT = 0; oT < this._runtimeAnimations.length; oT++) {
          this._runtimeAnimations[oT]._prepareForSpeedRatioChange(TT)
        }
        this._speedRatio = TT, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          kT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          XT = arguments.length > 6 ? arguments[6] : void 0,
          BT = arguments.length > 7 ? arguments[7] : void 0,
          FT = arguments.length > 8 ? arguments[8] : void 0,
          ST = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          DT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = oT, this.fromFrame = IT, this.toFrame = iT, this.loopAnimation = kT, this.onAnimationEnd = XT, this.onAnimationLoop = FT, this.isAdditive = ST, this.playOrder = DT, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.uR = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new zT.d, this.onAnimationLoopObservable = new zT.d, this._scene = TT, BT && this.appendAnimations(oT, BT), this._speedRatio = WT, TT._activeAnimatables.push(this)
      }
      syncWith(TT) {
        if (this._syncRoot = TT, TT) {
          const TT = this._scene._activeAnimatables.indexOf(this);
          TT > -1 && (this._scene._activeAnimatables.splice(TT, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(TT, oT) {
        for (let IT = 0; IT < oT.length; IT++) {
          const iT = oT[IT],
            zT = new vT(TT, iT, this._scene, this);
          zT._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(zT)
        }
      }
      getAnimationByTargetProperty(TT) {
        const oT = this._runtimeAnimations;
        for (let IT = 0; IT < oT.length; IT++)
          if (oT[IT].animation.targetProperty === TT) return oT[IT].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(TT) {
        const oT = this._runtimeAnimations;
        for (let IT = 0; IT < oT.length; IT++)
          if (oT[IT].animation.targetProperty === TT) return oT[IT];
        return null
      }
      reset() {
        const TT = this._runtimeAnimations;
        for (let oT = 0; oT < TT.length; oT++) TT[oT].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(TT) {
        const oT = this._runtimeAnimations;
        for (let IT = 0; IT < oT.length; IT++) oT[IT].animation.enableBlending = !0, oT[IT].animation.blendingSpeed = TT
      }
      disableBlending() {
        const TT = this._runtimeAnimations;
        for (let oT = 0; oT < TT.length; oT++) TT[oT].animation.enableBlending = !1
      }
      goToFrame(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = this._runtimeAnimations;
        if (IT[0]) {
          const oT = IT[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? IT[0].currentFrame;
          const iT = 0 === this.speedRatio ? 0 : (TT - this._frameToSyncFromJump) / oT * 1e3 / this.speedRatio;
          this._manualJumpDelay = -iT
        }
        for (let iT = 0; iT < IT.length; iT++) IT[iT].goToFrame(TT, oT ? this._weight : -1);
        this._goToFrame = TT
      }
      get paused() {
        return this.uR
      }
      pause() {
        this.uR || (this.uR = !0)
      }
      restart() {
        this.uR = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (TT || oT) {
          const zT = this._scene._activeAnimatables.indexOf(this);
          if (zT > -1) {
            const kT = this._runtimeAnimations;
            for (let IT = kT.length - 1; IT >= 0; IT--) {
              const iT = kT[IT];
              TT && iT.animation.name != TT || (oT && !oT(iT.target) || (iT.dispose(), kT.splice(IT, 1)))
            }
            0 == kT.length && (IT || this._scene._activeAnimatables.splice(zT, 1), iT || this._raiseOnAnimationEnd())
          }
        } else {
          const TT = this._scene._activeAnimatables.indexOf(this);
          if (TT > -1) {
            IT || this._scene._activeAnimatables.splice(TT, 1);
            const oT = this._runtimeAnimations;
            for (let TT = 0; TT < oT.length; TT++) oT[TT].dispose();
            this._runtimeAnimations.length = 0, iT || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((TT => {
          this.onAnimationEndObservable.add((() => {
            TT(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(TT) {
        if (this.uR) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = TT), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = TT, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += TT - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !fT.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let oT = !1;
        const IT = this._runtimeAnimations;
        let iT;
        for (iT = 0; iT < IT.length; iT++) {
          const zT = IT[iT].animate(TT - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          oT = oT || zT
        }
        if (this.animationStarted = oT, !oT) {
          if (this.disposeOnEnd)
            for (iT = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(iT, 1), iT = 0; iT < IT.length; iT++) IT[iT].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return oT
      }
    }

    function CT(TT) {
      if (0 === TT.totalWeight && 0 === TT.totalAdditiveWeight) return TT.originalValue;
      let oT = 1;
      const IT = kT.i.sc[0],
        iT = kT.i.sc[1],
        zT = kT.i.Quaternion[0];
      let WT = 0;
      const XT = TT.animations[0],
        BT = TT.originalValue;
      let FT, ST = !1;
      if (TT.totalWeight < 1) FT = 1 - TT.totalWeight, BT.decompose(iT, zT, IT);
      else {
        if (WT = 1, oT = TT.totalWeight, FT = XT.weight / oT, 1 == FT) {
          if (!TT.totalAdditiveWeight) return XT.currentValue;
          ST = !0
        }
        XT.currentValue.decompose(iT, zT, IT)
      }
      if (!ST) {
        iT.scaleInPlace(FT), IT.scaleInPlace(FT), zT.scaleInPlace(FT);
        for (let XT = WT; XT < TT.animations.length; XT++) {
          const WT = TT.animations[XT];
          if (0 === WT.weight) continue;
          FT = WT.weight / oT;
          const BT = kT.i.sc[2],
            ST = kT.i.sc[3],
            DT = kT.i.Quaternion[1];
          WT.currentValue.decompose(ST, DT, BT), ST.scaleAndAddToRef(FT, iT), DT.scaleAndAddToRef(kT.c.Dot(zT, DT) > 0 ? FT : -FT, zT), BT.scaleAndAddToRef(FT, IT)
        }
        zT.normalize()
      }
      for (let LT = 0; LT < TT.additiveAnimations.length; LT++) {
        const oT = TT.additiveAnimations[LT];
        if (0 === oT.weight) continue;
        const WT = kT.i.sc[2],
          XT = kT.i.sc[3],
          BT = kT.i.Quaternion[1];
        oT.currentValue.decompose(XT, BT, WT), XT.multiplyToRef(iT, XT), kT.m.LerpToRef(iT, XT, oT.weight, iT), zT.multiplyToRef(BT, BT), kT.c.SlerpToRef(zT, BT, oT.weight, zT), WT.scaleAndAddToRef(oT.weight, IT)
      }
      const DT = XT ? XT._animationState.workValue : kT.i.Matrix[0].clone();
      return kT.b.ComposeToRef(iT, zT, IT, DT), DT
    }

    function jT(TT, oT) {
      if (0 === TT.totalWeight && 0 === TT.totalAdditiveWeight) return oT;
      const IT = TT.animations[0],
        iT = TT.originalValue;
      let zT = oT;
      if (0 === TT.totalWeight && TT.totalAdditiveWeight > 0) zT.SIT(iT);
      else if (1 === TT.animations.length) {
        if (kT.c.SlerpToRef(iT, IT.currentValue, Math.min(1, TT.totalWeight), zT), 0 === TT.totalAdditiveWeight) return zT
      } else if (TT.animations.length > 1) {
        let IT, WT, XT = 1;
        if (TT.totalWeight < 1) {
          const oT = 1 - TT.totalWeight;
          IT = [], WT = [], IT.push(iT), WT.push(oT)
        } else {
          if (2 === TT.animations.length && (kT.c.SlerpToRef(TT.animations[0].currentValue, TT.animations[1].currentValue, TT.animations[1].weight / TT.totalWeight, oT), 0 === TT.totalAdditiveWeight)) return oT;
          IT = [], WT = [], XT = TT.totalWeight
        }
        for (let oT = 0; oT < TT.animations.length; oT++) {
          const iT = TT.animations[oT];
          IT.push(iT.currentValue), WT.push(iT.weight / XT)
        }
        let BT = 0;
        for (let TT = 0; TT < IT.length;) TT ? (BT += WT[TT], kT.c.SlerpToRef(zT, IT[TT], WT[TT] / BT, zT), TT++) : (kT.c.SlerpToRef(IT[TT], IT[TT + 1], WT[TT + 1] / (WT[TT] + WT[TT + 1]), oT), zT = oT, BT = WT[TT] + WT[TT + 1], TT += 2)
      }
      for (let WT = 0; WT < TT.additiveAnimations.length; WT++) {
        const oT = TT.additiveAnimations[WT];
        0 !== oT.weight && (zT.multiplyToRef(oT.currentValue, kT.i.Quaternion[0]), kT.c.SlerpToRef(zT, kT.i.Quaternion[0], oT.weight, zT))
      }
      return zT
    }

    function JT(TT, oT) {
      oT && (oT.prototype.copyAnimationRange = function(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new uT.b(this.name, "_matrix", TT.animations[0].framePerSecond, uT.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const kT = TT.animations[0].getRange(oT);
        if (!kT) return !1;
        const WT = kT.from,
          XT = kT.to,
          BT = TT.animations[0].getKeys(),
          FT = TT.length,
          ST = TT.getParent(),
          DT = this.getParent(),
          LT = iT && ST && FT && this.length && FT !== this.length,
          xT = LT && DT && ST ? DT.length / ST.length : 1,
          cT = iT && !DT && zT && (1 !== zT.x || 1 !== zT.y || 1 !== zT.z),
          KT = this.animations[0].getKeys();
        let MT, rT, AT;
        for (let gT = 0, hT = BT.length; gT < hT; gT++) MT = BT[gT], MT.frame >= WT && MT.frame <= XT && (iT ? (AT = MT.value.clone(), LT ? (rT = AT.getTranslation(), AT.setTranslation(rT.scaleInPlace(xT))) : cT && zT ? (rT = AT.getTranslation(), AT.setTranslation(rT.multiplyInPlace(zT))) : AT = MT.value) : AT = MT.value, KT.push({
          frame: MT.frame + IT,
          value: AT
        }));
        return this.animations[0].createRange(oT, WT + IT, XT + IT), !0
      }), TT && (TT.prototype._animate = function(TT) {
        const oT = this._animationWrites,
          IT = this._animationWriteCount;
        let iT = 0;
        for (let kT = this._animationStepWriteCount; kT < IT; kT++) {
          const TT = oT[kT];
          TT.xM && -1 === TT.weight || (TT.xM = !0, oT[kT] = oT[iT], oT[iT] = TT, iT++)
        }
        for (let kT = iT; kT < IT; kT++) {
          const TT = oT[kT];
          TT.runtimeAnimation = null, TT.target = null
        }
        if (this._animationWriteCount = iT, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const zT = ET.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = zT
        }
        this.deltaTime = void 0 !== TT ? TT : this.useConstantAnimationDeltaTime ? 16 : (zT - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = zT;
        const WT = this._activeAnimatables;
        if (0 === WT.length) return;
        this._animationTime += this.deltaTime;
        const XT = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let kT = 0; kT < WT.length; kT++) {
          const TT = WT[kT];
          !TT._animate(XT) && TT.disposeOnEnd && kT--
        }! function(TT) {
          if (TT._registeredForLateAnimationBindings.length) {
            for (let oT = 0; oT < TT._registeredForLateAnimationBindings.length; oT++) {
              const IT = TT._registeredForLateAnimationBindings.data[oT];
              for (const TT in IT._lateAnimationHolders) {
                const oT = IT._lateAnimationHolders[TT],
                  iT = oT.animations[0],
                  zT = oT.originalValue;
                if (void 0 === zT || null === zT) continue;
                const WT = uT.b.AllowMatrixDecomposeForInterpolation && zT.m;
                let XT = IT[TT];
                if (WT) XT = CT(oT);
                else if (void 0 !== zT.w) XT = jT(oT, XT || kT.c.Identity());
                else {
                  let TT = 0,
                    IT = 1;
                  const kT = iT && iT._animationState.Kz === uT.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (oT.totalWeight < 1) XT = kT ? zT.clone ? zT.clone() : zT : iT && zT.scale ? zT.scale(1 - oT.totalWeight) : iT ? zT * (1 - oT.totalWeight) : zT.clone ? zT.clone() : zT;
                  else if (iT) {
                    IT = oT.totalWeight;
                    const WT = iT.weight / IT;
                    XT = 1 !== WT ? iT.currentValue.scale ? iT.currentValue.scale(WT) : iT.currentValue * WT : (oT.animations.length > 1 || oT.additiveAnimations.length > 0) && iT.currentValue.clone ? iT.currentValue.clone() : iT.currentValue, kT && (XT.addToRef ? XT.addToRef(zT, XT) : XT += zT), TT = 1
                  }
                  for (let iT = TT; iT < oT.animations.length; iT++) {
                    const TT = oT.animations[iT],
                      zT = TT.weight / IT;
                    zT && (TT.currentValue.scaleAndAddToRef ? TT.currentValue.scaleAndAddToRef(zT, XT) : XT += TT.currentValue * zT)
                  }
                  for (let iT = 0; iT < oT.additiveAnimations.length; iT++) {
                    const TT = oT.additiveAnimations[iT],
                      IT = TT.weight;
                    IT && (TT.currentValue.scaleAndAddToRef ? TT.currentValue.scaleAndAddToRef(IT, XT) : XT += TT.currentValue * IT)
                  }
                }
                IT[TT] = XT
              }
              IT._lateAnimationHolders = {}
            }
            TT._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, TT.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((TT, oT) => TT.playOrder - oT.playOrder))
      }, TT.prototype.beginWeightedAnimation = function(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          WT = arguments.length > 6 ? arguments[6] : void 0,
          XT = arguments.length > 7 ? arguments[7] : void 0,
          BT = arguments.length > 8 ? arguments[8] : void 0,
          FT = arguments.length > 9 ? arguments[9] : void 0,
          ST = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const DT = this.beginAnimation(TT, oT, IT, zT, kT, WT, XT, !1, BT, FT, ST);
        return DT.weight = iT, DT
      }, TT.prototype.beginAnimation = function(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          kT = arguments.length > 5 ? arguments[5] : void 0,
          WT = arguments.length > 6 ? arguments[6] : void 0,
          XT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          BT = arguments.length > 8 ? arguments[8] : void 0,
          FT = arguments.length > 9 ? arguments[9] : void 0,
          ST = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (zT < 0) {
          const TT = oT;
          oT = IT, IT = TT, zT = -zT
        }
        oT > IT && (zT = -zT), XT && this.stopAnimation(TT, void 0, BT), WT || (WT = new fT(this, TT, oT, IT, iT, zT, kT, void 0, FT, ST));
        const DT = !BT || BT(TT);
        if (TT.animations && DT && WT.appendAnimations(TT, TT.animations), TT.getAnimatables) {
          const ST = TT.getAnimatables();
          for (let TT = 0; TT < ST.length; TT++) this.beginAnimation(ST[TT], oT, IT, iT, zT, kT, WT, XT, BT, FT)
        }
        return WT.reset(), WT
      }, TT.prototype.beginHierarchyAnimation = function(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          WT = arguments.length > 6 ? arguments[6] : void 0,
          XT = arguments.length > 7 ? arguments[7] : void 0,
          BT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          FT = arguments.length > 9 ? arguments[9] : void 0,
          ST = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const DT = TT.getDescendants(oT),
          LT = [];
        LT.push(this.beginAnimation(TT, IT, iT, zT, kT, WT, XT, BT, FT, void 0, ST));
        for (const xT of DT) LT.push(this.beginAnimation(xT, IT, iT, zT, kT, WT, XT, BT, FT, void 0, ST));
        return LT
      }, TT.prototype.beginDirectAnimation = function(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (kT < 0) {
          const TT = IT;
          IT = iT, iT = TT, kT = -kT
        }
        IT > iT && (kT = -kT);
        return new fT(this, TT, IT, iT, zT, kT, arguments.length > 6 ? arguments[6] : void 0, oT, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, TT.prototype.beginDirectHierarchyAnimation = function(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        let FT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const ST = TT.getDescendants(oT),
          DT = [];
        DT.push(this.beginDirectAnimation(TT, IT, iT, zT, kT, WT, XT, BT, FT));
        for (const LT of ST) DT.push(this.beginDirectAnimation(LT, IT, iT, zT, kT, WT, XT, BT, FT));
        return DT
      }, TT.prototype.getAnimatableByTarget = function(TT) {
        for (let oT = 0; oT < this._activeAnimatables.length; oT++)
          if (this._activeAnimatables[oT].target === TT) return this._activeAnimatables[oT];
        return null
      }, TT.prototype.getAllAnimatablesByTarget = function(TT) {
        const oT = [];
        for (let IT = 0; IT < this._activeAnimatables.length; IT++) this._activeAnimatables[IT].target === TT && oT.push(this._activeAnimatables[IT]);
        return oT
      }, TT.prototype.stopAnimation = function(TT, oT, IT) {
        const iT = this.getAllAnimatablesByTarget(TT);
        for (const zT of iT) zT.stop(oT, IT)
      }, TT.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let TT = 0; TT < this._activeAnimatables.length; TT++) this._activeAnimatables[TT].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const TT of this.animationGroups) TT.stop()
      })
    }
    fT.ProcessPausedAnimatables = !1;
    var UT, aT = IT(36134),
      YT = IT(38994),
      QT = IT(38643);
    class OT extends YT.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(TT) {
        (TT.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.SIT(TT), this._markAsDirtyAndDecompose())
      }
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          XT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(TT, oT.pC(), !1), this.name = TT, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = oT, this._localMatrix = iT?.clone() ?? kT.b.Identity(), this._restMatrix = zT ?? this._localMatrix.clone(), this._bindMatrix = WT ?? this._localMatrix.clone(), this._index = XT, this._absoluteMatrix = new kT.b, this._absoluteBindMatrix = new kT.b, this._absoluteInverseBindMatrix = new kT.b, this._finalMatrix = new kT.b, oT.bones.push(this), this.setParent(IT, !1), this._updateAbsoluteBindMatrices()
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
      set parent(TT) {
        this.setParent(TT)
      }
      setParent(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== TT) {
          if (this.parent) {
            const TT = this.parent.children.indexOf(this); - 1 !== TT && this.parent.children.splice(TT, 1)
          }
          this._parentNode = TT, this.parent && this.parent.children.push(this), oT && this._updateAbsoluteBindMatrices(), this.roT()
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
      setRestMatrix(TT) {
        this._restMatrix.SIT(TT)
      }
      setRestPose(TT) {
        this.setRestMatrix(TT)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(TT) {
        this.Y1(TT)
      }
      setBindPose(TT) {
        this.setBindMatrix(TT)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const TT = kT.i.sc[0],
            oT = kT.i.Quaternion[0],
            IT = kT.i.sc[1];
          this.getRestMatrix().decompose(TT, oT, IT), this._linkedTransformNode.position.SIT(IT), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? kT.c.Identity(), this._linkedTransformNode.rotationQuaternion.SIT(oT), this._linkedTransformNode.ti.SIT(TT)
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
      linkTransformNode(TT) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = TT, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.fTT
      }
      set position(TT) {
        this._decompose(), this.fTT.SIT(TT), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(TT) {
        this.setRotation(TT)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(TT) {
        this.setRotationQuaternion(TT)
      }
      get ti() {
        return this.getScale()
      }
      set ti(TT) {
        this.setScale(TT)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = kT.m.Zero(), this._localRotation = kT.c.Zero(), this.fTT = kT.m.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.fTT))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, kT.b.ComposeToRef(this._localScaling, this._localRotation, this.fTT, this._localMatrix)) : this._needToCompose = !1)
      }
      Y1(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.SIT(TT), oT && this._updateAbsoluteBindMatrices(), IT ? this._matrix = TT : this.roT()
      }
      _updateAbsoluteBindMatrices(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (TT || (TT = this._bindMatrix), this.parent ? TT.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.SIT(TT), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), oT)
          for (let IT = 0; IT < this.children.length; IT++) this.children[IT]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      roT() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.roT(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.roT(), this._needToDecompose = !0
      }
      _updatePosition(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const zT = this.getLocalMatrix();
        if (0 == oT) iT ? (zT.addAtIndex(12, TT.x), zT.addAtIndex(13, TT.y), zT.addAtIndex(14, TT.z)) : zT.setTranslationFromFloats(TT.x, TT.y, TT.z);
        else {
          const oT = OT._TmpMats[0],
            WT = OT._TmpVecs[0];
          this.parent ? (oT.SIT(this.parent.getAbsoluteMatrix()), IT && oT.multiplyToRef(IT.getWorldMatrix(), oT)) : kT.b.IdentityToRef(oT), iT && oT.setTranslationFromFloats(0, 0, 0), oT.invert(), kT.m.TransformCoordinatesToRef(TT, oT, WT), iT ? (zT.addAtIndex(12, WT.x), zT.addAtIndex(13, WT.y), zT.addAtIndex(14, WT.z)) : zT.setTranslationFromFloats(WT.x, WT.y, WT.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(TT, oT, IT, !0)
      }
      setPosition(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(TT, oT, IT, !1)
      }
      setAbsolutePosition(TT, oT) {
        this.setPosition(TT, 1, oT)
      }
      scale(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const zT = this.getLocalMatrix(),
          WT = OT._TmpMats[0];
        kT.b.ScalingToRef(TT, oT, IT, WT), WT.multiplyToRef(zT, zT), WT.invert();
        for (const kT of this.children) {
          const iT = kT.getLocalMatrix();
          iT.multiplyToRef(WT, iT), iT.multiplyAtIndex(12, TT), iT.multiplyAtIndex(13, oT), iT.multiplyAtIndex(14, IT), kT._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), iT)
          for (const kT of this.children) kT.scale(TT, oT, IT, iT)
      }
      setScale(TT) {
        this._decompose(), this._localScaling.SIT(TT), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(TT) {
        this._decompose(), TT.SIT(this._localScaling)
      }
      setYawPitchRoll(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === iT) {
          const WT = OT._TmpQuat;
          return kT.c.RotationYawPitchRollToRef(TT, oT, IT, WT), void this.setRotationQuaternion(WT, iT, zT)
        }
        const WT = OT._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(WT, zT)) return;
        const XT = OT._TmpMats[1];
        kT.b.RotationYawPitchRollToRef(TT, oT, IT, XT), WT.multiplyToRef(XT, XT), this._rotateWithMatrix(XT, iT, zT)
      }
      rotate(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 ? arguments[3] : void 0;
        const zT = OT._TmpMats[0];
        zT.setTranslationFromFloats(0, 0, 0), kT.b.RotationAxisToRef(TT, oT, zT), this._rotateWithMatrix(zT, IT, iT)
      }
      setAxisAngle(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === IT) {
          const zT = OT._TmpQuat;
          return kT.c.RotationAxisToRef(TT, oT, zT), void this.setRotationQuaternion(zT, IT, iT)
        }
        const zT = OT._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(zT, iT)) return;
        const WT = OT._TmpMats[1];
        kT.b.RotationAxisToRef(TT, oT, WT), zT.multiplyToRef(WT, WT), this._rotateWithMatrix(WT, IT, iT)
      }
      setRotation(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(TT.y, TT.x, TT.z, oT, IT)
      }
      setRotationQuaternion(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === oT) return this._decompose(), this._localRotation.SIT(TT), void this._markAsDirtyAndCompose();
        const iT = OT._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(iT, IT)) return;
        const zT = OT._TmpMats[1];
        kT.b.FromQuaternionToRef(TT, zT), iT.multiplyToRef(zT, zT), this._rotateWithMatrix(zT, oT, IT)
      }
      setRotationMatrix(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === oT) {
          const iT = OT._TmpQuat;
          return kT.c.FromRotationMatrixToRef(TT, iT), void this.setRotationQuaternion(iT, oT, IT)
        }
        const iT = OT._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(iT, IT)) return;
        const zT = OT._TmpMats[1];
        zT.SIT(TT), iT.multiplyToRef(TT, zT), this._rotateWithMatrix(zT, oT, IT)
      }
      _rotateWithMatrix(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const iT = this.getLocalMatrix(),
          zT = iT.m[12],
          kT = iT.m[13],
          WT = iT.m[14],
          XT = this.getParent(),
          BT = OT._TmpMats[3],
          FT = OT._TmpMats[4];
        XT && 1 == oT ? (IT ? (BT.SIT(IT.getWorldMatrix()), XT.getAbsoluteMatrix().multiplyToRef(BT, BT)) : BT.SIT(XT.getAbsoluteMatrix()), FT.SIT(BT), FT.invert(), iT.multiplyToRef(BT, iT), iT.multiplyToRef(TT, iT), iT.multiplyToRef(FT, iT)) : 1 == oT && IT ? (BT.SIT(IT.getWorldMatrix()), FT.SIT(BT), FT.invert(), iT.multiplyToRef(BT, iT), iT.multiplyToRef(TT, iT), iT.multiplyToRef(FT, iT)) : iT.multiplyToRef(TT, iT), iT.setTranslationFromFloats(zT, kT, WT), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(TT, oT) {
        const IT = OT._TmpMats[2];
        return TT.SIT(this.getAbsoluteMatrix()), oT ? (TT.multiplyToRef(oT.getWorldMatrix(), TT), kT.b.ScalingToRef(oT.ti.x, oT.ti.y, oT.ti.z, IT)) : kT.b.IdentityToRef(IT), TT.invert(), !isNaN(TT.m[0]) && (IT.multiplyAtIndex(0, this._scalingDeterminant), TT.multiplyToRef(IT, TT), !0)
      }
      Wm() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const IT = kT.m.Zero();
        return this.getPositionToRef(TT, oT, IT), IT
      }
      getPositionToRef() {
        let TT = arguments.length > 1 ? arguments[1] : void 0,
          oT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const TT = this.getLocalMatrix();
          oT.x = TT.m[12], oT.y = TT.m[13], oT.z = TT.m[14]
        } else {
          const IT = OT._TmpMats[0].SIT(this.getAbsoluteMatrix());
          TT && IT.multiplyToRef(TT.getWorldMatrix(), IT), oT.x = IT.m[12], oT.y = IT.m[13], oT.z = IT.m[14]
        }
      }
      getAbsolutePosition() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const oT = kT.m.Zero();
        return this.getPositionToRef(1, TT, oT), oT
      }
      getAbsolutePositionToRef(TT, oT) {
        this.getPositionToRef(1, TT, oT)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.SIT(this._localMatrix);
          const TT = this._skeleton.getPoseMatrix();
          TT && this._absoluteMatrix.multiplyToRef(TT, this._absoluteMatrix)
        }
        const TT = this.children,
          oT = TT.length;
        for (let IT = 0; IT < oT; IT++) TT[IT].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      kp(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const IT = kT.m.Zero();
        return this.getDirectionToRef(TT, oT, IT), IT
      }
      getDirectionToRef(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const iT = OT._TmpMats[0].SIT(this.getAbsoluteMatrix());
        oT && iT.multiplyToRef(oT.getWorldMatrix(), iT), kT.m.TransformNormalToRef(TT, iT, IT), IT.normalize()
      }
      getRotation() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const IT = kT.m.Zero();
        return this.getRotationToRef(TT, oT, IT), IT
      }
      getRotationToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const iT = OT._TmpQuat;
        this.getRotationQuaternionToRef(TT, oT, iT), iT.toEulerAnglesToRef(IT)
      }
      getRotationQuaternion() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const IT = kT.c.Identity();
        return this.getRotationQuaternionToRef(TT, oT, IT), IT
      }
      getRotationQuaternionToRef() {
        let TT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          oT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), oT.SIT(this._localRotation);
        else {
          const IT = OT._TmpMats[0],
            iT = this.getAbsoluteMatrix();
          TT ? iT.multiplyToRef(TT.getWorldMatrix(), IT) : IT.SIT(iT), IT.multiplyAtIndex(0, this._scalingDeterminant), IT.multiplyAtIndex(1, this._scalingDeterminant), IT.multiplyAtIndex(2, this._scalingDeterminant), IT.decompose(void 0, oT, void 0)
        }
      }
      getRotationMatrix() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 ? arguments[1] : void 0;
        const IT = kT.b.Identity();
        return this.getRotationMatrixToRef(TT, oT, IT), IT
      }
      getRotationMatrixToRef() {
        let TT = arguments.length > 1 ? arguments[1] : void 0,
          oT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(oT);
        else {
          const IT = OT._TmpMats[0],
            iT = this.getAbsoluteMatrix();
          TT ? iT.multiplyToRef(TT.getWorldMatrix(), IT) : IT.SIT(iT), IT.multiplyAtIndex(0, this._scalingDeterminant), IT.multiplyAtIndex(1, this._scalingDeterminant), IT.multiplyAtIndex(2, this._scalingDeterminant), IT.getRotationMatrixToRef(oT)
        }
      }
      getAbsolutePositionFromLocal(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const IT = kT.m.Zero();
        return this.getAbsolutePositionFromLocalToRef(TT, oT, IT), IT
      }
      getAbsolutePositionFromLocalToRef(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const iT = OT._TmpMats[0].SIT(this.getAbsoluteMatrix());
        oT && iT.multiplyToRef(oT.getWorldMatrix(), iT), kT.m.TransformCoordinatesToRef(TT, iT, IT)
      }
      getLocalPositionFromAbsolute(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const IT = kT.m.Zero();
        return this.getLocalPositionFromAbsoluteToRef(TT, oT, IT), IT
      }
      getLocalPositionFromAbsoluteToRef(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const iT = OT._TmpMats[0].SIT(this.getAbsoluteMatrix());
        oT && iT.multiplyToRef(oT.getWorldMatrix(), iT), iT.invert(), kT.m.TransformCoordinatesToRef(TT, iT, IT)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const TT = this._skeleton.bones.indexOf(this);
        if (-1 !== TT && this._skeleton.bones.splice(TT, 1), this._parentNode && this._parentNode.children) {
          const TT = this._parentNode.children,
            oT = TT.indexOf(this); - 1 !== oT && TT.splice(oT, 1)
        }
        super.dispose()
      }
    }
    OT._TmpVecs = (0, aT.d)(2, kT.m.Zero), OT._TmpQuat = kT.c.Identity(), OT._TmpMats = (0, aT.d)(5, kT.b.Identity), (UT = OT.prototype).copyAnimationRange ?? (UT.copyAnimationRange = (0, QT.i)("Bone", "copyAnimationRange"));
    var HT = IT(38882);
    let nT = !1;
    var qT = IT(38733),
      ZT = IT(39105),
      lT = IT(39117),
      sT = IT(39113),
      tT = IT(38906);

    function GT(TT, oT) {
      const IT = (0, xT.RandomRange)(0, 1);
      ST.i.LerpToRef(oT.color1, oT.color2, IT, TT.color)
    }

    function pT(TT, oT) {
      oT.colorDead.subtractToRef(TT.color, oT._colorDiff), oT._colorDiff.scaleToRef(1 / TT.lifeTime, TT.colorStep)
    }

    function bT(TT, oT) {
      TT._properties.currentColorGradient = oT._colorGradients[0], TT._properties.currentColorGradient.getColorToRef(TT.color), TT._properties.currentColor1.SIT(TT.color), oT._colorGradients.length > 1 ? oT._colorGradients[1].getColorToRef(TT._properties.currentColor2) : TT._properties.currentColor2.SIT(TT.color)
    }

    function yT(TT, oT) {
      const IT = oT._colorGradients;
      iT.i.GetCurrentGradient(oT._ratio, IT, ((oT, IT, iT) => {
        oT !== TT._properties.currentColorGradient && (TT._properties.currentColor1.SIT(TT._properties.currentColor2), IT.getColorToRef(TT._properties.currentColor2), TT._properties.currentColorGradient = oT), ST.i.LerpToRef(TT._properties.currentColor1, TT._properties.currentColor2, iT, TT.color), TT.color.a < 0 && (TT.color.a = 0)
      }))
    }

    function NT(TT, oT) {
      TT.colorStep.scaleToRef(oT._scaledUpdateSpeed, oT._scaledColorStep), TT.color.addInPlace(oT._scaledColorStep), TT.color.a < 0 && (TT.color.a = 0)
    }

    function PT(TT, oT) {
      iT.i.GetCurrentGradient(oT._ratio, oT._angularSpeedGradients, ((oT, IT, iT) => {
        oT !== TT._properties.currentAngularSpeedGradient && (TT._properties.currentAngularSpeed1 = TT._properties.currentAngularSpeed2, TT._properties.currentAngularSpeed2 = IT.getFactor(), TT._properties.currentAngularSpeedGradient = oT), TT.angularSpeed = (0, xT.Lerp)(TT._properties.currentAngularSpeed1, TT._properties.currentAngularSpeed2, iT)
      }))
    }

    function dT(TT, oT) {
      TT.angle += TT.angularSpeed * oT._scaledUpdateSpeed
    }

    function VT(TT, oT) {
      oT.particleEmitterType.startDirectionFunction(oT._emitterWorldMatrix, TT.direction, TT, oT.isLocal, oT._emitterInverseWorldMatrix)
    }

    function To(TT, oT) {
      oT.startDirectionFunction(oT._emitterWorldMatrix, TT.direction, TT, oT.isLocal)
    }

    function oo(TT, oT) {
      TT._properties.currentVelocityGradient = oT._velocityGradients[0], TT._properties.currentVelocity1 = TT._properties.currentVelocityGradient.getFactor(), oT._velocityGradients.length > 1 ? TT._properties.currentVelocity2 = oT._velocityGradients[1].getFactor() : TT._properties.currentVelocity2 = TT._properties.currentVelocity1
    }

    function Io(TT, oT) {
      TT._properties.currentLimitVelocityGradient = oT._limitVelocityGradients[0], TT._properties.currentLimitVelocity1 = TT._properties.currentLimitVelocityGradient.getFactor(), oT._limitVelocityGradients.length > 1 ? TT._properties.currentLimitVelocity2 = oT._limitVelocityGradients[1].getFactor() : TT._properties.currentLimitVelocity2 = TT._properties.currentLimitVelocity1
    }

    function io(TT, oT) {
      iT.i.GetCurrentGradient(oT._ratio, oT._velocityGradients, ((oT, IT, iT) => {
        oT !== TT._properties.currentVelocityGradient && (TT._properties.currentVelocity1 = TT._properties.currentVelocity2, TT._properties.currentVelocity2 = IT.getFactor(), TT._properties.currentVelocityGradient = oT), TT._properties.directionScale *= (0, xT.Lerp)(TT._properties.currentVelocity1, TT._properties.currentVelocity2, iT)
      }))
    }

    function zo(TT, oT) {
      iT.i.GetCurrentGradient(oT._ratio, oT._limitVelocityGradients, ((IT, iT, zT) => {
        IT !== TT._properties.currentLimitVelocityGradient && (TT._properties.currentLimitVelocity1 = TT._properties.currentLimitVelocity2, TT._properties.currentLimitVelocity2 = iT.getFactor(), TT._properties.currentLimitVelocityGradient = IT);
        const kT = (0, xT.Lerp)(TT._properties.currentLimitVelocity1, TT._properties.currentLimitVelocity2, zT);
        TT.direction.length() > kT && TT.direction.scaleInPlace(oT.limitVelocityDamping)
      }))
    }

    function ko(TT) {
      TT.direction.scaleToRef(TT._properties.directionScale, TT._properties.scaledDirection)
    }

    function Wo(TT, oT) {
      oT.particleEmitterType.startPositionFunction(oT._emitterWorldMatrix, TT.position, TT, oT.isLocal)
    }

    function Xo(TT, oT) {
      oT.startPositionFunction(oT._emitterWorldMatrix, TT.position, TT, oT.isLocal)
    }

    function Bo(TT, oT) {
      TT._properties.localPosition ? TT._properties.localPosition.SIT(TT.position) : TT._properties.localPosition = TT.position.clone(), kT.m.TransformCoordinatesToRef(TT._properties.localPosition, oT._emitterWorldMatrix, TT.position)
    }

    function Fo(TT, oT) {
      oT.isLocal && TT._properties.localPosition ? (TT._properties.localPosition.addInPlace(TT._properties.scaledDirection), kT.m.TransformCoordinatesToRef(TT._properties.localPosition, oT._emitterWorldMatrix, TT.position)) : TT.position.addInPlace(TT._properties.scaledDirection)
    }

    function So(TT, oT) {
      TT._properties.currentDragGradient = oT._dragGradients[0], TT._properties.currentDrag1 = TT._properties.currentDragGradient.getFactor(), oT._dragGradients.length > 1 ? TT._properties.currentDrag2 = oT._dragGradients[1].getFactor() : TT._properties.currentDrag2 = TT._properties.currentDrag1
    }

    function Do(TT, oT) {
      iT.i.GetCurrentGradient(oT._ratio, oT._dragGradients, ((oT, IT, iT) => {
        oT !== TT._properties.currentDragGradient && (TT._properties.currentDrag1 = TT._properties.currentDrag2, TT._properties.currentDrag2 = IT.getFactor(), TT._properties.currentDragGradient = oT);
        const zT = (0, xT.Lerp)(TT._properties.currentDrag1, TT._properties.currentDrag2, iT);
        TT._properties.scaledDirection.scaleInPlace(1 - zT)
      }))
    }

    function Lo(TT, oT) {
      TT._properties.randomNoiseCoordinates1 && TT._properties.randomNoiseCoordinates2 ? (TT._properties.randomNoiseCoordinates1.S_(Math.random(), Math.random(), Math.random()), TT._properties.randomNoiseCoordinates2.S_(Math.random(), Math.random(), Math.random())) : (TT._properties.randomNoiseCoordinates1 = new kT.m(Math.random(), Math.random(), Math.random()), TT._properties.randomNoiseCoordinates2 = new kT.m(Math.random(), Math.random(), Math.random()))
    }

    function xo(TT, oT) {
      const IT = oT._noiseTextureData,
        iT = oT._noiseTextureSize;
      if (IT && iT && TT._properties.randomNoiseCoordinates1 && TT._properties.randomNoiseCoordinates2) {
        const zT = oT._fetchR(TT._properties.randomNoiseCoordinates1.x, TT._properties.randomNoiseCoordinates1.y, iT.width, iT.height, IT),
          WT = oT._fetchR(TT._properties.randomNoiseCoordinates1.z, TT._properties.randomNoiseCoordinates2.x, iT.width, iT.height, IT),
          XT = oT._fetchR(TT._properties.randomNoiseCoordinates2.y, TT._properties.randomNoiseCoordinates2.z, iT.width, iT.height, IT),
          BT = kT.i.sc[0],
          FT = kT.i.sc[1];
        BT.S_((2 * zT - 1) * oT.noiseStrength.x, (2 * WT - 1) * oT.noiseStrength.y, (2 * XT - 1) * oT.noiseStrength.z), BT.scaleToRef(oT._tempScaledUpdateSpeed, FT), TT.direction.addInPlace(FT)
      }
    }

    function co(TT, oT) {
      oT.gravity.scaleToRef(oT._tempScaledUpdateSpeed, oT._scaledGravity), TT.direction.addInPlace(oT._scaledGravity)
    }

    function Ko(TT, oT) {
      TT.size = (0, xT.RandomRange)(oT.minSize, oT.maxSize), TT.scale.S_((0, xT.RandomRange)(oT.minScaleX, oT.maxScaleX), (0, xT.RandomRange)(oT.minScaleY, oT.maxScaleY))
    }

    function Mo(TT, oT) {
      TT._properties.currentSizeGradient = oT._sizeGradients[0], TT._properties.currentSize1 = TT._properties.currentSizeGradient.getFactor(), TT.size = TT._properties.currentSize1, oT._sizeGradients.length > 1 ? TT._properties.currentSize2 = oT._sizeGradients[1].getFactor() : TT._properties.currentSize2 = TT._properties.currentSize1, TT.scale.S_((0, xT.RandomRange)(oT.minScaleX, oT.maxScaleX), (0, xT.RandomRange)(oT.minScaleY, oT.maxScaleY))
    }

    function ro(TT, oT) {
      const IT = oT._actualFrame / oT.targetStopDuration;
      iT.i.GetCurrentGradient(IT, oT._startSizeGradients, ((IT, iT, zT) => {
        IT !== oT._currentStartSizeGradient && (oT._currentStartSize1 = oT._currentStartSize2, oT._currentStartSize2 = iT.getFactor(), oT._currentStartSizeGradient = IT);
        const kT = (0, xT.Lerp)(oT._currentStartSize1, oT._currentStartSize2, zT);
        TT.scale.scaleInPlace(kT)
      }))
    }

    function Ao(TT, oT) {
      iT.i.GetCurrentGradient(oT._ratio, oT._sizeGradients, ((oT, IT, iT) => {
        oT !== TT._properties.currentSizeGradient && (TT._properties.currentSize1 = TT._properties.currentSize2, TT._properties.currentSize2 = IT.getFactor(), TT._properties.currentSizeGradient = oT), TT.size = (0, xT.Lerp)(TT._properties.currentSize1, TT._properties.currentSize2, iT)
      }))
    }

    function go(TT, oT) {
      TT.remapData = new kT.n(0, 1, 0, 1)
    }

    function ho(TT, oT) {
      oT._colorRemapGradients && oT._colorRemapGradients.length > 0 && iT.i.GetCurrentGradient(oT._ratio, oT._colorRemapGradients, ((oT, IT, iT) => {
        const zT = (0, xT.Lerp)(oT.factor1, IT.factor1, iT),
          kT = (0, xT.Lerp)(oT.factor2, IT.factor2, iT);
        TT.remapData.x = zT, TT.remapData.y = kT - zT
      })), oT._alphaRemapGradients && oT._alphaRemapGradients.length > 0 && iT.i.GetCurrentGradient(oT._ratio, oT._alphaRemapGradients, ((oT, IT, iT) => {
        const zT = (0, xT.Lerp)(oT.factor1, IT.factor1, iT),
          kT = (0, xT.Lerp)(oT.factor2, IT.factor2, iT);
        TT.remapData.z = zT, TT.remapData.w = kT - zT
      }))
    }

    function wo(TT, oT) {
      const IT = (0, xT.Clamp)(oT._actualFrame / oT.targetStopDuration);
      iT.i.GetCurrentGradient(IT, oT._lifeTimeGradients, ((oT, iT) => {
        const zT = oT,
          kT = iT,
          WT = zT.getFactor(),
          XT = kT.getFactor(),
          BT = (IT - zT.gradient) / (kT.gradient - zT.gradient);
        TT.lifeTime = (0, xT.Lerp)(WT, XT, BT)
      })), oT._emitPower = (0, xT.RandomRange)(oT.minEmitPower, oT.maxEmitPower)
    }

    function mo(TT, oT) {
      TT.lifeTime = (0, xT.RandomRange)(oT.minLifeTime, oT.maxLifeTime), oT._emitPower = (0, xT.RandomRange)(oT.minEmitPower, oT.maxEmitPower)
    }

    function eo(TT, oT) {
      0 === oT._emitPower ? (TT._properties.initialDirection ? TT._properties.initialDirection.SIT(TT.direction) : TT._properties.initialDirection = TT.direction.clone(), TT.direction.set(0, 0, 0)) : (TT._properties.initialDirection = null, TT.direction.scaleInPlace(oT._emitPower)), TT.direction.addInPlace(oT._inheritedVelocityOffset)
    }

    function Ro(TT, oT) {
      TT.angularSpeed = (0, xT.RandomRange)(oT.minAngularSpeed, oT.maxAngularSpeed), TT.angle = (0, xT.RandomRange)(oT.minInitialRotation, oT.maxInitialRotation)
    }

    function uo(TT, oT) {
      TT._properties.currentAngularSpeedGradient = oT._angularSpeedGradients[0], TT.angularSpeed = TT._properties.currentAngularSpeedGradient.getFactor(), TT._properties.currentAngularSpeed1 = TT.angularSpeed, oT._angularSpeedGradients.length > 1 ? TT._properties.currentAngularSpeed2 = oT._angularSpeedGradients[1].getFactor() : TT._properties.currentAngularSpeed2 = TT._properties.currentAngularSpeed1, TT.angle = (0, xT.RandomRange)(oT.minInitialRotation, oT.maxInitialRotation)
    }

    function vo(TT, oT) {
      TT._properties.initialStartSpriteCellId = oT.startSpriteCellID, TT._properties.initialEndSpriteCellId = oT.endSpriteCellID, TT._properties.initialSpriteCellLoop = oT.spriteCellLoop
    }

    function Eo(TT, oT) {
      TT.previousItem = oT.previousItem, TT.nextItem = oT, oT.previousItem && (oT.previousItem.nextItem = TT), oT.previousItem = TT
    }

    function fo(TT, oT) {
      TT.previousItem = oT, TT.nextItem = oT.nextItem, oT.nextItem && (oT.nextItem.previousItem = TT), oT.nextItem = TT
    }

    function Co(TT) {
      TT.previousItem && (TT.previousItem.nextItem = TT.nextItem), TT.nextItem && (TT.nextItem.previousItem = TT.previousItem)
    }
    var jo = IT(39170);
    class Jo extends mT {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(TT) {
        this._startDirectionFunction !== TT && (this._startDirectionFunction = TT, this._directionCreation.process = TT ? To : VT)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(TT) {
        this._startPositionFunction !== TT && (this._startPositionFunction = TT, this._positionCreation.process = TT ? Xo : Wo)
      }
      set onDispose(TT) {
        this._onDisposeObserver && this.bC.remove(this._onDisposeObserver), this._onDisposeObserver = this.bC.add(TT)
      }
      get IIT() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(TT) {
        this._useRampGradients !== TT && (this._useRampGradients = TT, this._resetEffect(), TT ? (this._rampCreation = {
          process: go,
          previousItem: null,
          nextItem: null
        }, fo(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: ho,
          previousItem: null,
          nextItem: null
        }, fo(this._remapGradientProcessing, this._gravityProcessing))) : (Co(this._rampCreation), Co(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(TT) {
        this._isLocal !== TT && (this._isLocal = TT, TT ? (this._isLocalCreation = {
          process: Bo,
          previousItem: null,
          nextItem: null
        }, fo(this._isLocalCreation, this._positionCreation)) : Co(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(TT) {
        this._animationSheetEnabled !== TT && (this._animationSheetEnabled = TT, TT ? (this._sheetCreation = {
          process: vo,
          previousItem: null,
          nextItem: null
        }, fo(this._sheetCreation, this._colorDeadCreation)) : Co(this._sheetCreation), this._reset())
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
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[TT]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[TT] ?? this._customWrappers[0]
      }
      setCustomEffect(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[oT] = new ZT.c(this._engine), this._customWrappers[oT].effect = TT, this._customWrappers[oT].drawContext && (this._customWrappers[oT].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new zT.d), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(TT) {
        if (this.noiseTexture !== TT) {
          if (this._noiseTexture = TT, !TT) return Co(this._noiseCreation), void Co(this._noiseProcessing);
          this._noiseCreation = {
            process: Lo,
            previousItem: null,
            nextItem: null
          }, fo(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: xo,
            previousItem: null,
            nextItem: null
          }, fo(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          WT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          XT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          FT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        nT || (nT = !0, JT(HT.d, OT)), (0, qT.e)(), super(TT), this._emitterInverseWorldMatrix = kT.b.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new kT.m, this.bC = new zT.d, this.onStoppedObservable = new zT.d, this.onStartedObservable = new zT.d, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new ST.i(0, 0, 0, 0), this._colorDiff = new ST.i(0, 0, 0, 0), this._scaledGravity = kT.m.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = TT => {}, this.recycleParticle = TT => {
          const oT = this._particles.pop();
          oT !== TT && oT.copyTo(TT), oT.metadata = null, this._stockParticles.push(oT)
        }, this._createParticle = () => {
          let TT;
          return 0 !== this._stockParticles.length ? (TT = this._stockParticles.pop(), TT._reset()) : TT = new RT(this), this._prepareParticle(TT), TT
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = oT, this._epsilon = XT, IT && "Scene" !== IT.getClassName() ? (this._engine = IT, this.defaultProjectionMatrix = kT.b.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = IT || BT.d.LastCreatedScene, this._engine = this._scene.Zc(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.bR.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: mo,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Wo,
          previousItem: null,
          nextItem: null
        }, fo(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: VT,
          previousItem: null,
          nextItem: null
        }, fo(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: eo,
          previousItem: null,
          nextItem: null
        }, fo(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: Ko,
          previousItem: null,
          nextItem: null
        }, fo(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: Ro,
          previousItem: null,
          nextItem: null
        }, fo(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: GT,
          previousItem: null,
          nextItem: null
        }, fo(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: pT,
          previousItem: null,
          nextItem: null
        }, fo(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, FT || (this._colorProcessing = {
          process: NT,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: dT,
          previousItem: null,
          nextItem: null
        }, fo(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: ko,
          previousItem: null,
          nextItem: null
        }, fo(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Fo,
          previousItem: null,
          nextItem: null
        }, fo(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: co,
          previousItem: null,
          nextItem: null
        }, fo(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = WT, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new ZT.c(this._engine)
        }, this._customWrappers[0].effect = iT, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new DT.e, this.updateFunction = TT => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((TT => {
            this._noiseTextureData = TT
          })));
          const oT = TT === this._particles;
          for (let IT = 0; IT < TT.length; IT++) {
            const iT = TT[IT];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const zT = iT.age;
            if (iT.age += this._tempScaledUpdateSpeed, iT.age > iT.lifeTime) {
              const TT = iT.age - zT,
                oT = iT.lifeTime - zT;
              this._tempScaledUpdateSpeed = oT * this._tempScaledUpdateSpeed / TT, iT.age = iT.lifeTime
            }
            this._ratio = iT.age / iT.lifeTime, iT._properties.directionScale = this._tempScaledUpdateSpeed;
            let kT = this._updateQueueStart;
            for (; kT;) kT.process(iT, this), kT = kT.nextItem;
            if (this._isAnimationSheetEnabled && !FT && iT.updateCellIndex(), iT._inheritParticleInfoToSubEmitters(), iT.age >= iT.lifeTime) {
              if (this._emitFromParticle(iT), iT._properties.attachedSubEmitters) {
                for (const TT of iT._properties.attachedSubEmitters) TT.particleSystem.disposeOnStop = !0, TT.particleSystem.stop();
                iT._properties.attachedSubEmitters = null
              }
              this.recycleParticle(iT), oT && IT--
            } else;
          }
        }
      }
      serialize(TT) {
        throw new Error("Method not implemented.")
      }
      clone(TT, oT) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = wo : this._lifeTimeCreation.process = mo
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: ro,
          previousItem: null,
          nextItem: null
        }, fo(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Co(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(TT) {
        this.targetStopDuration !== TT && (this._targetStopDuration = TT, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(TT, oT, IT) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, TT, oT, IT), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(TT) {
        return this._removeFactorGradient(this._lifeTimeGradients, TT), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(TT, oT, IT) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = Mo, this._sizeGradientProcessing = {
          process: Ao,
          previousItem: null,
          nextItem: null
        }, Eo(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, TT, oT, IT), this
      }
      removeSizeGradient(TT) {
        return this._removeFactorGradient(this._sizeGradients, TT), 0 === this._sizeGradients?.length && (Co(this._sizeGradientProcessing), this._sizeCreation.process = Ko), this
      }
      addColorRemapGradient(TT, oT, IT) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, TT, oT, IT), this
      }
      removeColorRemapGradient(TT) {
        return this._removeFactorGradient(this._colorRemapGradients, TT), this
      }
      addAlphaRemapGradient(TT, oT, IT) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, TT, oT, IT), this
      }
      removeAlphaRemapGradient(TT) {
        return this._removeFactorGradient(this._alphaRemapGradients, TT), this
      }
      addAngularSpeedGradient(TT, oT, IT) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = uo, this._angularSpeedGradientProcessing = {
          process: PT,
          previousItem: null,
          nextItem: null
        }, Eo(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, TT, oT, IT), this
      }
      removeAngularSpeedGradient(TT) {
        return this._removeFactorGradient(this._angularSpeedGradients, TT), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = Ro, Co(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(TT, oT, IT) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: oo,
          previousItem: null,
          nextItem: null
        }, fo(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: io,
          previousItem: null,
          nextItem: null
        }, Eo(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, TT, oT, IT), this
      }
      removeVelocityGradient(TT) {
        return this._removeFactorGradient(this._velocityGradients, TT), 0 === this._velocityGradients?.length && (Co(this._velocityCreation), Co(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(TT, oT, IT) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: Io,
          previousItem: null,
          nextItem: null
        }, fo(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: zo,
          previousItem: null,
          nextItem: null
        }, fo(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, TT, oT, IT), this
      }
      removeLimitVelocityGradient(TT) {
        return this._removeFactorGradient(this._limitVelocityGradients, TT), 0 === this._limitVelocityGradients?.length && (Co(this._limitVelocityCreation), Co(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(TT, oT, IT) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: So,
          previousItem: null,
          nextItem: null
        }, Eo(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Do,
          previousItem: null,
          nextItem: null
        }, Eo(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, TT, oT, IT), this
      }
      removeDragGradient(TT) {
        return this._removeFactorGradient(this._dragGradients, TT), 0 === this._dragGradients?.length && (Co(this._dragCreation), Co(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(TT, oT, IT) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, TT, oT, IT), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(TT) {
        return this._removeFactorGradient(this._startSizeGradients, TT), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const TT = new Uint8Array(4 * this._rawTextureWidth),
          oT = ST.m.Color3[0];
        for (let IT = 0; IT < this._rawTextureWidth; IT++) {
          const zT = IT / this._rawTextureWidth;
          iT.i.GetCurrentGradient(zT, this._rampGradients, ((iT, zT, kT) => {
            ST.e.LerpToRef(iT.color, zT.color, kT, oT), TT[4 * IT] = 255 * oT.r, TT[4 * IT + 1] = 255 * oT.g, TT[4 * IT + 2] = 255 * oT.b, TT[4 * IT + 3] = 255
          }))
        }
        this._rampGradientsTexture = XT.e.CreateRGBATexture(TT, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((TT, oT) => TT.gradient < oT.gradient ? -1 : TT.gradient > oT.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(TT, oT) {
        this._rampGradients || (this._rampGradients = []);
        const IT = new iT.e(TT, oT);
        return this._rampGradients.push(IT), this._syncRampGradientTexture(), this
      }
      removeRampGradient(TT) {
        return this._removeGradientAndTexture(TT, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(TT, oT, IT) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = bT, this._colorProcessing.process = yT);
        const zT = new iT.b(TT, oT, IT);
        return this._colorGradients.push(zT), this._colorGradients.sort(((TT, oT) => TT.gradient < oT.gradient ? -1 : TT.gradient > oT.gradient ? 1 : 0)), this
      }
      removeColorGradient(TT) {
        if (!this._colorGradients) return this;
        let oT = 0;
        for (const IT of this._colorGradients) {
          if (IT.gradient === TT) {
            this._colorGradients.splice(oT, 1);
            break
          }
          oT++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = GT, this._colorProcessing.process = NT), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const TT of this._drawWrappers)
            if (TT)
              for (const oT of TT) oT?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(TT, oT, IT, iT, zT) {
        return zT[4 * (((TT = .5 * Math.abs(TT) + .5) * IT % IT | 0) + ((oT = .5 * Math.abs(oT) + .5) * iT % iT | 0) * IT)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const TT = this._engine,
          oT = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * oT), this._vertexBuffer = new WT.d(TT, this._vertexData, !0, oT);
        let IT = 0;
        const iT = this._vertexBuffer.createVertexBuffer(WT.i.PositionKind, IT, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[WT.i.PositionKind] = iT, IT += 3;
        const zT = this._vertexBuffer.createVertexBuffer(WT.i.ColorKind, IT, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[WT.i.ColorKind] = zT, IT += 4;
        const kT = this._vertexBuffer.createVertexBuffer("angle", IT, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = kT, IT += 1;
        const XT = this._vertexBuffer.createVertexBuffer("size", IT, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = XT, IT += 2, this._isAnimationSheetEnabled) {
          const TT = this._vertexBuffer.createVertexBuffer("cellIndex", IT, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = TT, IT += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const TT = this._vertexBuffer.createVertexBuffer("direction", IT, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = TT, IT += 3
        }
        if (this._useRampGradients) {
          const TT = this._vertexBuffer.createVertexBuffer("remapData", IT, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = TT, IT += 4
        }
        let BT;
        if (this._useInstancing) {
          const oT = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new WT.d(TT, oT, !1, 2), BT = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else BT = this._vertexBuffer.createVertexBuffer("offset", IT, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = BT, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const TT = [],
          oT = [];
        let IT = 0;
        for (let iT = 0; iT < this._capacity; iT++) TT.push(IT), TT.push(IT + 1), TT.push(IT + 2), TT.push(IT), TT.push(IT + 2), TT.push(IT + 3), oT.push(IT, IT + 1, IT + 1, IT + 2, IT + 2, IT + 3, IT + 3, IT, IT, IT + 3), IT += 4;
        this._indexBuffer = this._engine.createIndexBuffer(TT), this._linesIndexBuffer = this._engine.createIndexBuffer(oT)
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
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (TT) return this.startDelay = TT, void setTimeout((() => {
          this.start(0)
        }), TT);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const TT = this.noiseTexture;
          if (TT && TT.onGeneratedObservable) TT.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let oT = 0; oT < this.preWarmCycles; oT++) this.animate(!0), TT.render()
            }))
          }));
          else
            for (let oT = 0; oT < this.preWarmCycles; oT++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(TT))
      }
      _postStop(TT) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(TT, oT, IT, iT) {
        let zT = TT * this._vertexBufferSize;
        const WT = kT.i.sc[0].SIT(this._scene?.floatingOriginOffset || kT.m.ZeroReadOnly);
        if (this._vertexData[zT++] = oT.position.x + this.worldOffset.x - WT.x, this._vertexData[zT++] = oT.position.y + this.worldOffset.y - WT.y, this._vertexData[zT++] = oT.position.z + this.worldOffset.z - WT.z, this._vertexData[zT++] = oT.color.r, this._vertexData[zT++] = oT.color.g, this._vertexData[zT++] = oT.color.b, this._vertexData[zT++] = oT.color.a, this._vertexData[zT++] = oT.angle, this._vertexData[zT++] = oT.scale.x * oT.size, this._vertexData[zT++] = oT.scale.y * oT.size, this._isAnimationSheetEnabled && (this._vertexData[zT++] = oT.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[zT++] = oT.direction.x, this._vertexData[zT++] = oT.direction.y, this._vertexData[zT++] = oT.direction.z);
        else if (oT._properties.initialDirection) {
          let TT = oT._properties.initialDirection;
          this.isLocal && (kT.m.TransformNormalToRef(TT, this._emitterWorldMatrix, kT.i.sc[0]), TT = kT.i.sc[0]), 0 === TT.x && 0 === TT.z && (TT.x = .001), this._vertexData[zT++] = TT.x, this._vertexData[zT++] = TT.y, this._vertexData[zT++] = TT.z
        } else {
          let TT = oT.direction;
          this.isLocal && (kT.m.TransformNormalToRef(TT, this._emitterWorldMatrix, kT.i.sc[0]), TT = kT.i.sc[0]), 0 === TT.x && 0 === TT.z && (TT.x = .001), this._vertexData[zT++] = TT.x, this._vertexData[zT++] = TT.y, this._vertexData[zT++] = TT.z
        }
        this._useRampGradients && oT.remapData && (this._vertexData[zT++] = oT.remapData.x, this._vertexData[zT++] = oT.remapData.y, this._vertexData[zT++] = oT.remapData.z, this._vertexData[zT++] = oT.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === IT ? IT = this._epsilon : 1 === IT && (IT = 1 - this._epsilon), 0 === iT ? iT = this._epsilon : 1 === iT && (iT = 1 - this._epsilon)), this._vertexData[zT++] = IT, this._vertexData[zT] = iT)
      }
      _prepareParticle(TT) {}
      _createNewOnes(TT) {
        let oT;
        for (let IT = 0; IT < TT && this._particles.length !== this._capacity; IT++) {
          oT = this._createParticle(), this._particles.push(oT);
          let TT = this._createQueueStart;
          for (; TT;) TT.process(oT, this), TT = TT.nextItem;
          oT._inheritParticleInfoToSubEmitters()
        }
      }
      _update(TT) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const TT = this.emitter;
          this._emitterWorldMatrix = TT.getWorldMatrix()
        } else {
          const TT = this.emitter;
          this._emitterWorldMatrix = kT.b.Translation(TT.x, TT.y, TT.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(TT)
      }
      static _GetAttributeNamesOrOptions() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const iT = [WT.i.PositionKind, WT.i.ColorKind, "angle", "offset", "size"];
        return TT && iT.push("cellIndex"), oT || iT.push("direction"), IT && iT.push("remapData"), iT
      }
      static _GetEffectCreationOptions() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const iT = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, lT.b)(iT), TT && iT.push("particlesInfos"), oT && iT.push("logarithmicDepthConstant"), IT && (iT.push("vFogInfos"), iT.push("vFogColor")), iT
      }
      fillDefines(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, lT.g)(this, this._scene, TT), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && TT.push("#define FOG")), this._isAnimationSheetEnabled && TT.push("#define ANIMATESHEET"), this.useLogarithmicDepth && TT.push("#define LOGARITHMICDEPTH"), oT === mT.BLENDMODE_MULTIPLY && TT.push("#define BLENDMULTIPLYMODE"), this.isLocal && TT.push("#define LOCAL"), this._useRampGradients && TT.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (TT.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            TT.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            TT.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && TT.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            TT.push("#define BILLBOARDMODE_ALL")
        }
        IT && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), TT.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(TT, oT, IT) {
        oT.push(...Jo._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), TT.push(...Jo._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), IT.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, tT.e)(TT, this._imageProcessingConfigurationDefines), (0, tT.d)(IT, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(TT) {
        var oT;
        const IT = this._getCustomDrawWrapper(TT);
        if (IT?.effect) return IT;
        const iT = [];
        this.fillDefines(iT, TT);
        const kT = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          WT = jo.d._PrepareStringDefines(kT, iT),
          XT = WT ? jo.d.GetConfiguration(kT) : void 0;
        let BT = this._drawWrappers[kT];
        BT || (BT = this._drawWrappers[kT] = [], 0 === kT || this._renderPassObserver || (this._renderPassObserver = ((oT = this._engine)._onReleaseRenderPassObservable ?? (oT._onReleaseRenderPassObservable = new zT.d)).add((TT => {
          const oT = this._drawWrappers[TT];
          if (oT) {
            for (const TT of oT) TT?.dispose();
            delete this._drawWrappers[TT]
          }
        }))));
        let FT = BT[TT];
        FT || (FT = new ZT.c(this._engine), FT.drawContext && (FT.drawContext.useInstancing = this._useInstancing), BT[TT] = FT);
        const ST = iT.join("\n");
        if (FT.defines !== ST) {
          const TT = [],
            oT = [],
            IT = [];
          this.fillUniformsAttributesAndSamplerNames(oT, TT, IT), WT && (oT.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== XT?.defines.PREPASS_LOCAL_POSITION_INDEX && oT.push("inverseEmitterWM", "geometryWorldOffset")), FT.setEffect(this._engine.createEffect("particles", {
            attributes: TT,
            uniformsNames: oT,
            samplers: IT,
            defines: ST,
            shaderLanguage: this._shaderLanguage,
            multiTarget: WT,
            indexParameters: WT ? {
              buffersCount: XT?._mrtCount ?? 0
            } : void 0
          }, this._engine), ST)
        }
        return FT
      }
      _bindGeometryRendering(TT) {
        const oT = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          IT = jo.d.GetConfiguration(oT);
        if (!IT?._defines) return;
        TT.setFloat("objectId", 0), TT.setInt("meshBlendTag", 0);
        const iT = this._scene?.activeCamera;
        if (TT.setFloat2("cameraInfo", iT?.minZ ?? 0, iT?.maxZ ?? 1), this.isLocal && void 0 !== IT.defines.PREPASS_LOCAL_POSITION_INDEX) {
          TT.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const oT = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || kT.m.ZeroReadOnly, kT.i.sc[0]);
          TT.setVector3("geometryWorldOffset", oT)
        }
      }
      animate() {
        let TT, oT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!oT && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (oT ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) TT = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const oT = this._calculateEmitRate();
            TT = oT * this._scaledUpdateSpeed | 0, this._newPartsExcess += oT * this._scaledUpdateSpeed - TT
          }
          if (this._newPartsExcess > 1 && (TT += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? TT = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(TT), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !oT) {
            let TT = 0;
            for (let oT = 0; oT < this._particles.length; oT++) {
              const IT = this._particles[oT];
              this._appendParticleVertices(TT, IT), TT += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const TT = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  oT = this._particles.length;
                oT < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, oT * TT, this._fixedCapacityHighWaterMark * TT), this._fixedCapacityHighWaterMark = oT, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const TT = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * TT), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let TT = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const oT = this._actualFrame / this.targetStopDuration;
          iT.i.GetCurrentGradient(oT, this._emitRateGradients, ((oT, IT, iT) => {
            oT !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = IT.getFactor(), this._currentEmitRateGradient = oT), TT = (0, xT.Lerp)(this._currentEmitRate1, this._currentEmitRate2, iT)
          }))
        }
        return TT
      }
      _appendParticleVertices(TT, oT) {
        this._appendParticleVertex(TT++, oT, 0, 0), this._useInstancing || (this._appendParticleVertex(TT++, oT, 1, 0), this._appendParticleVertex(TT++, oT, 1, 1), this._appendParticleVertex(TT, oT, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Jo.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([IT.e(336).then((() => IT(60041))), IT.e(330).then((() => IT(60044)))])) : await Promise.all([IT.e(319).then((() => IT(60048))), Promise.all([IT.e(312), IT.e(348)]).then((() => IT(60052)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== mT.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(mT.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(mT.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(TT) {
        const oT = this._getWrapper(TT),
          IT = oT.effect,
          iT = this._engine;
        iT.enableEffect(oT);
        const zT = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        IT.setTexture("diffuseSampler", this.particleTexture), IT.setMatrix("view", zT);
        const WT = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (IT.setMatrix("projection", WT), this._isAnimationSheetEnabled && this.particleTexture) {
          const TT = this.particleTexture.getBaseSize();
          IT.setFloat3("particlesInfos", this.spriteCellWidth / TT.width, this.spriteCellHeight / TT.height, this.spriteCellWidth / TT.width)
        }
        if (IT.setVector2("translationPivot", this.translationPivot), IT.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const TT = this._scene.activeCamera;
          IT.setVector3("eyePosition", TT.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), IT.setTexture("rampSampler", this._rampGradientsTexture));
        const XT = IT.defines;
        this._scene && ((0, lT.d)(IT, this, this._scene), this.applyFog && (0, sT.e)(this._scene, void 0, IT)), XT.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (zT.invertToRef(kT.i.Matrix[0]), IT.setMatrix("invView", kT.i.Matrix[0])), IT._multiTarget && this._bindGeometryRendering(IT), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? iT.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, IT) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, IT)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? iT.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, IT) : iT.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, IT), this.useLogarithmicDepth && this._scene && (0, sT.q)(XT, IT, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(IT), this._setEngineBasedOnBlendMode(TT), IT._multiTarget && jo.d._BindZeroAlphaDiscard(iT, IT);
        let BT = !1;
        try {
          jo.d._BindAttachmentsForEffect(iT, IT) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(IT), this._useInstancing ? this._scene?.forceWireframe ? iT.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : iT.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? iT.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : iT.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), BT = !0)
        } finally {
          jo.d._RestoreAttachments(iT)
        }
        return BT ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const TT = this._engine;
        let oT;
        return TT.setState && (TT.setState(!1), this.forceDepthWrite && TT.setDepthWrite(!0)), oT = this.blendMode === mT.BLENDMODE_MULTIPLYADD ? this._render(mT.BLENDMODE_MULTIPLY) + this._render(mT.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), oT
      }
      _onDispose() {}
      dispose() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), TT && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), TT && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(oT, IT), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const TT = this._scene.bR.indexOf(this);
          TT > -1 && this._scene.bR.splice(TT, 1), this._scene._activeParticleSystems.dispose()
        }
        this.bC.notifyObservers(this), this.bC.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Jo.ForceGLSL = !1;
    var Uo, ao = IT(36166);
    ! function(TT) {
      TT[TT.ATTACHED = 0] = "ATTACHED", TT[TT.END = 1] = "END"
    }(Uo || (Uo = {}));
    class Yo {
      constructor(TT) {
        if (this.particleSystem = TT, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !TT.emitter || !TT.emitter.dispose) {
          const oT = (0, ao.d)("BABYLON.AbstractMesh");
          TT.emitter = new oT("SubemitterSystemEmitter", TT.pC()), TT._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let TT = this.particleSystem.emitter;
        if (TT) {
          if (TT instanceof kT.m) TT = TT.clone();
          else if (-1 !== TT.getClassName().indexOf("Mesh")) {
            TT = new((0, ao.d)("BABYLON.Mesh"))("", TT.pC()), TT.isVisible = !1
          }
        } else TT = new kT.m;
        const oT = new Yo(this.particleSystem.clone(this.particleSystem.name, TT));
        return oT.particleSystem.name += "Clone", oT.type = this.type, oT.inheritDirection = this.inheritDirection, oT.inheritedVelocityAmount = this.inheritedVelocityAmount, oT.particleSystem._disposeEmitterOnDispose = !0, oT.particleSystem.disposeOnStop = !0, oT
      }
      serialize() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const oT = {};
        return oT.type = this.type, oT.inheritDirection = this.inheritDirection, oT.inheritedVelocityAmount = this.inheritedVelocityAmount, oT.particleSystem = this.particleSystem.serialize(TT), oT
      }
      static _ParseParticleSystem(TT, oT, IT) {
        throw (0, QT.k)("ParseParticle")
      }
      static Parse(TT, oT, IT) {
        const iT = TT.particleSystem,
          zT = new Yo(Yo._ParseParticleSystem(iT, oT, IT, !0));
        return zT.type = TT.type, zT.inheritDirection = TT.inheritDirection, zT.inheritedVelocityAmount = TT.inheritedVelocityAmount, zT.particleSystem._isSubEmitter = !0, zT
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Qo = IT(38659),
      Oo = IT(38799);
    const Ho = () => {};
    class no {
      constructor() {
        this.particlePositionGenerator = Ho, this.particleDestinationGenerator = Ho, this.particleDirectionGenerator = Ho
      }
      startDirectionFunction(TT, oT, IT, iT) {
        const zT = kT.i.sc[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== Ho) this.particleDirectionGenerator(-1, IT, zT);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== Ho) {
          this.particleDestinationGenerator(-1, IT, zT);
          const TT = kT.i.sc[1];
          zT.subtractToRef(IT.position, TT), TT.scaleToRef(1 / IT.lifeTime, zT)
        } else zT.set(0, 0, 0);
        iT ? oT.SIT(zT) : kT.m.TransformNormalToRef(zT, TT, oT)
      }
      startPositionFunction(TT, oT, IT, iT) {
        const zT = kT.i.sc[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== Ho ? this.particlePositionGenerator(-1, IT, zT) : zT.set(0, 0, 0), iT ? oT.SIT(zT) : kT.m.TransformCoordinatesToRef(zT, TT, oT)
      }
      clone() {
        const TT = new no;
        return LT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {}
      buildUniformLayout(TT) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const TT = {};
        return TT.type = this.getClassName(), TT.particlePositionGenerator = this.particlePositionGenerator, TT.particleDestinationGenerator = this.particleDestinationGenerator, TT
      }
      parse(TT) {
        TT.particlePositionGenerator && (this.particlePositionGenerator = TT.particlePositionGenerator), TT.particleDestinationGenerator && (this.particleDestinationGenerator = TT.particleDestinationGenerator)
      }
    }
    const qo = kT.m.Zero(),
      Zo = kT.m.Zero(),
      so = kT.m.Zero();
    class to {
      constructor() {
        this.strength = 0, this.position = kT.m.Zero()
      }
      _processParticle(TT, oT) {
        this.position.subtractToRef(TT.position, qo);
        const IT = qo.lengthSquared() + 1;
        qo.normalize().scaleToRef(this.strength / IT, Zo), Zo.scaleToRef(oT._tempScaledUpdateSpeed, so), TT.direction.addInPlace(so)
      }
      serialize() {
        return {
          position: this.position.bIT(),
          strength: this.strength
        }
      }
    }
    const Go = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class po extends Jo {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = TT => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const oT = Math.floor(Math.random() * this._subEmitters.length);
          for (const IT of this._subEmitters[oT])
            if (1 === IT.type) {
              const oT = IT.clone();
              TT._inheritParticleInfoToSubEmitter(oT), oT.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(oT.particleSystem), oT.particleSystem.start()
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
      set flowMap(TT) {
        this._flowMap !== TT && (this._flowMap = TT, this._flowMapUpdate && (Co(this._flowMapUpdate), this._flowMapUpdate = null), TT && (this._flowMapUpdate = {
          process: TT => {
            const oT = this.pC()?.getTransformMatrix();
            this._flowMap._processParticle(TT, this.flowMapStrength * this._tempScaledUpdateSpeed, oT)
          },
          previousItem: null,
          nextItem: null
        }, fo(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(TT) {
        super.addAttractor(TT), 1 === this._attractors.length && (this._attractorUpdate = {
          process: TT => {
            for (const oT of this._attractors) oT._processParticle(TT, this)
          },
          previousItem: null,
          nextItem: null
        }, fo(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(TT) {
        super.removeAttractor(TT), 0 === this._attractors.length && this._attractorUpdate && Co(this._attractorUpdate)
      }
      start() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(TT)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const TT of this.subEmitters) TT instanceof po ? this._subEmitters.push([new Yo(TT)]) : TT instanceof Yo ? this._subEmitters.push([TT]) : TT instanceof Array && this._subEmitters.push(TT)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const TT of this.activeSubSystems) TT.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const TT = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== TT && this._rootParticleSystem.activeSubSystems.splice(TT, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(TT) {
        TT && this._stopSubEmitters()
      }
      _prepareParticle(TT) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const oT = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          TT._properties.attachedSubEmitters = [];
          for (const IT of oT)
            if (0 === IT.type) {
              const oT = IT.clone();
              TT._properties.attachedSubEmitters.push(oT), oT.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), TT && this.particles)
          for (const IT of this.particles)
            if (IT._properties.attachedSubEmitters)
              for (let TT = IT._properties.attachedSubEmitters.length - 1; TT >= 0; TT -= 1) IT._properties.attachedSubEmitters[TT].dispose();
        if (oT && this.activeSubSystems)
          for (let IT = this.activeSubSystems.length - 1; IT >= 0; IT -= 1) this.activeSubSystems[IT].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let TT = 0; TT < this._subEmitters.length; TT++)
            for (const oT of this._subEmitters[TT]) oT.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(TT, oT, IT, iT) {
        let zT;
        zT = IT instanceof Qo.b ? null : IT;
        const WT = (0, ao.d)("BABYLON.Texture");
        if (WT && zT)
          if (TT.texture) oT.particleTexture = WT.Parse(TT.texture, zT, iT);
          else if (TT.textureName) {
          const IT = TT.textureSettings;
          if (oT.particleTexture = new WT(iT + TT.textureName, zT, !1, void 0 === TT.invertY || TT.invertY, IT ? IT.samplingMode : void 0), oT.particleTexture.name = TT.textureName, IT) {
            const TT = oT.particleTexture;
            for (const oT of Go) void 0 !== IT[oT] && (TT[oT] = IT[oT])
          }
        }
        if (TT.emitterId || 0 === TT.emitterId || void 0 !== TT.emitter ? (TT.emitterId || 0 === TT.emitterId) && zT ? (oT.emitter = zT.getLastMeshById(TT.emitterId), oT.emitter || (oT.emitter = kT.m.Zero())) : oT.emitter = kT.m.FromArray(TT.emitter) : oT.emitter = kT.m.Zero(), oT.isLocal = !!TT.isLocal, void 0 !== TT.renderingGroupId && (oT.renderingGroupId = TT.renderingGroupId), void 0 !== TT.isBillboardBased && (oT.isBillboardBased = TT.isBillboardBased), void 0 !== TT.billboardMode && (oT.billboardMode = TT.billboardMode), void 0 !== TT.useLogarithmicDepth && (oT.useLogarithmicDepth = TT.useLogarithmicDepth), TT.animations) {
          for (let IT = 0; IT < TT.animations.length; IT++) {
            const iT = TT.animations[IT],
              zT = (0, ao.d)("BABYLON.Animation");
            zT && oT.animations.push(zT.Parse(iT))
          }
          oT.beginAnimationOnStart = TT.beginAnimationOnStart, oT.beginAnimationFrom = TT.beginAnimationFrom, oT.beginAnimationTo = TT.beginAnimationTo, oT.beginAnimationLoop = TT.beginAnimationLoop
        }
        if (TT.autoAnimate && zT && zT.beginAnimation(oT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), oT.startDelay = 0 | TT.startDelay, oT.minAngularSpeed = TT.minAngularSpeed, oT.maxAngularSpeed = TT.maxAngularSpeed, oT.minSize = TT.minSize, oT.maxSize = TT.maxSize, TT.minScaleX && (oT.minScaleX = TT.minScaleX, oT.maxScaleX = TT.maxScaleX, oT.minScaleY = TT.minScaleY, oT.maxScaleY = TT.maxScaleY), void 0 !== TT.preWarmCycles && (oT.preWarmCycles = TT.preWarmCycles, oT.preWarmStepOffset = TT.preWarmStepOffset), void 0 !== TT.minInitialRotation && (oT.minInitialRotation = TT.minInitialRotation, oT.maxInitialRotation = TT.maxInitialRotation), oT.minLifeTime = TT.minLifeTime, oT.maxLifeTime = TT.maxLifeTime, oT.minEmitPower = TT.minEmitPower, oT.maxEmitPower = TT.maxEmitPower, oT.emitRate = TT.emitRate, oT.gravity = kT.m.FromArray(TT.gravity), TT.noiseStrength && (oT.noiseStrength = kT.m.FromArray(TT.noiseStrength)), oT.color1 = ST.i.FromArray(TT.color1), oT.color2 = ST.i.FromArray(TT.color2), oT.colorDead = ST.i.FromArray(TT.colorDead), oT.updateSpeed = TT.updateSpeed, oT.targetStopDuration = TT.targetStopDuration, oT.blendMode = TT.blendMode, TT.colorGradients)
          for (const kT of TT.colorGradients) oT.addColorGradient(kT.gradient, ST.i.FromArray(kT.color1), kT.color2 ? ST.i.FromArray(kT.color2) : void 0);
        if (TT.rampGradients) {
          for (const IT of TT.rampGradients) oT.addRampGradient(IT.gradient, ST.e.FromArray(IT.color));
          oT.useRampGradients = TT.useRampGradients
        }
        if (TT.colorRemapGradients)
          for (const kT of TT.colorRemapGradients) oT.addColorRemapGradient(kT.gradient, void 0 !== kT.factor1 ? kT.factor1 : kT.factor, kT.factor2);
        if (TT.alphaRemapGradients)
          for (const kT of TT.alphaRemapGradients) oT.addAlphaRemapGradient(kT.gradient, void 0 !== kT.factor1 ? kT.factor1 : kT.factor, kT.factor2);
        if (TT.sizeGradients)
          for (const kT of TT.sizeGradients) oT.addSizeGradient(kT.gradient, void 0 !== kT.factor1 ? kT.factor1 : kT.factor, kT.factor2);
        if (TT.angularSpeedGradients)
          for (const kT of TT.angularSpeedGradients) oT.addAngularSpeedGradient(kT.gradient, void 0 !== kT.factor1 ? kT.factor1 : kT.factor, kT.factor2);
        if (TT.velocityGradients)
          for (const kT of TT.velocityGradients) oT.addVelocityGradient(kT.gradient, void 0 !== kT.factor1 ? kT.factor1 : kT.factor, kT.factor2);
        if (TT.dragGradients)
          for (const kT of TT.dragGradients) oT.addDragGradient(kT.gradient, void 0 !== kT.factor1 ? kT.factor1 : kT.factor, kT.factor2);
        if (TT.emitRateGradients)
          for (const kT of TT.emitRateGradients) oT.addEmitRateGradient(kT.gradient, void 0 !== kT.factor1 ? kT.factor1 : kT.factor, kT.factor2);
        if (TT.startSizeGradients)
          for (const kT of TT.startSizeGradients) oT.addStartSizeGradient(kT.gradient, void 0 !== kT.factor1 ? kT.factor1 : kT.factor, kT.factor2);
        if (TT.lifeTimeGradients)
          for (const kT of TT.lifeTimeGradients) oT.addLifeTimeGradient(kT.gradient, void 0 !== kT.factor1 ? kT.factor1 : kT.factor, kT.factor2);
        if (TT.limitVelocityGradients) {
          for (const IT of TT.limitVelocityGradients) oT.addLimitVelocityGradient(IT.gradient, void 0 !== IT.factor1 ? IT.factor1 : IT.factor, IT.factor2);
          oT.limitVelocityDamping = TT.limitVelocityDamping
        }
        if (TT.noiseTexture && zT) {
          const IT = (0, ao.d)("BABYLON.ProceduralTexture");
          oT.noiseTexture = IT.Parse(TT.noiseTexture, zT, iT)
        }
        let XT;
        if (TT.particleEmitterType) {
          switch (TT.particleEmitterType.type) {
            case "SphereParticleEmitter":
              XT = new MT;
              break;
            case "SphereDirectedParticleEmitter":
              XT = new rT;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              XT = new gT;
              break;
            case "ConeDirectedParticleEmitter":
              XT = new hT;
              break;
            case "CylinderParticleEmitter":
              XT = new AT.h;
              break;
            case "CylinderDirectedParticleEmitter":
              XT = new AT.e;
              break;
            case "HemisphericParticleEmitter":
              XT = new KT;
              break;
            case "PointParticleEmitter":
              XT = new cT;
              break;
            case "MeshParticleEmitter":
              XT = new wT;
              break;
            case "CustomParticleEmitter":
              XT = new no;
              break;
            default:
              XT = new DT.e
          }
          XT.parse(TT.particleEmitterType, zT)
        } else XT = new DT.e, XT.parse(TT, zT);
        oT.particleEmitterType = XT, oT.startSpriteCellID = TT.startSpriteCellID, oT.endSpriteCellID = TT.endSpriteCellID, oT.spriteCellLoop = TT.spriteCellLoop ?? !0, oT.spriteCellWidth = TT.spriteCellWidth, oT.spriteCellHeight = TT.spriteCellHeight, oT.spriteCellChangeSpeed = TT.spriteCellChangeSpeed, oT.spriteRandomStartCell = TT.spriteRandomStartCell, oT.disposeOnStop = TT.disposeOnStop ?? !1, oT.manualEmitCount = TT.manualEmitCount ?? -1
      }
      static Parse(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zT = arguments.length > 4 ? arguments[4] : void 0;
        const WT = TT.name;
        let XT, BT, FT = null,
          DT = null;
        if (oT instanceof Qo.b ? XT = oT : (BT = oT, XT = BT.Zc()), TT.customShader && (0, QT.d)(XT.createEffectForParticles)) {
          DT = TT.customShader;
          const oT = DT.shaderOptions.defines.length > 0 ? DT.shaderOptions.defines.join("\n") : "";
          FT = XT.createEffectForParticles(DT.shaderPath.fragmentElement, DT.shaderOptions.uniforms, DT.shaderOptions.samplers, oT)
        }
        const LT = new po(WT, zT || TT.fD, oT, FT, TT.isAnimationSheetEnabled);
        if (LT.customShader = DT, LT._rootUrl = IT, TT.id && (LT.id = TT.id), TT.subEmitters) {
          LT.subEmitters = [];
          for (const iT of TT.subEmitters) {
            const TT = [];
            for (const zT of iT) TT.push(Yo.Parse(zT, oT, IT));
            LT.subEmitters.push(TT)
          }
        }
        if (TT.attractors)
          for (const ST of TT.attractors) {
            const TT = new to;
            TT.position = kT.m.FromArray(ST.position), TT.strength = ST.strength, LT.addAttractor(TT)
          }
        return po._Parse(TT, LT, oT, IT), TT.textureMask && (LT.textureMask = ST.i.FromArray(TT.textureMask)), TT.worldOffset && (LT.worldOffset = kT.m.FromArray(TT.worldOffset)), TT.preventAutoStart && (LT.preventAutoStart = TT.preventAutoStart), TT.metadata && (LT.metadata = TT.metadata), iT || LT.preventAutoStart || LT.start(), LT
      }
      serialize() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const oT = {};
        if (po._Serialize(oT, this, TT), oT.textureMask = this.textureMask.bIT(), oT.customShader = this.customShader, oT.preventAutoStart = this.preventAutoStart, oT.worldOffset = this.worldOffset.bIT(), this.metadata && (oT.metadata = this.metadata), this.subEmitters) {
          oT.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const IT of this._subEmitters) {
            const iT = [];
            for (const oT of IT) oT.particleSystem.doNotSerialize || iT.push(oT.serialize(TT));
            oT.subEmitters.push(iT)
          }
        }
        if (this._attractors && this._attractors.length) {
          oT.attractors = [];
          for (const TT of this._attractors) oT.attractors.push(TT.serialize())
        }
        return oT
      }
      static _Serialize(TT, oT, IT) {
        if (TT.name = oT.name, TT.id = oT.id, TT.fD = oT.getCapacity(), TT.disposeOnStop = oT.disposeOnStop, TT.manualEmitCount = oT.manualEmitCount, oT.emitter.position) {
          const IT = oT.emitter;
          TT.emitterId = IT.id
        } else {
          const IT = oT.emitter;
          TT.emitter = IT.bIT()
        }
        if (oT.particleEmitterType && (TT.particleEmitterType = oT.particleEmitterType.serialize()), oT.particleTexture)
          if (IT) TT.texture = oT.particleTexture.serialize();
          else {
            const IT = oT.particleTexture;
            TT.textureName = oT.particleTexture.name, TT.invertY = !!IT._invertY;
            const iT = {};
            for (const TT of Go) iT[TT] = IT[TT];
            iT.samplingMode = IT.samplingMode, TT.textureSettings = iT
          } TT.isLocal = oT.isLocal, Oo.c.AppendSerializedAnimations(oT, TT), TT.beginAnimationOnStart = oT.beginAnimationOnStart, TT.beginAnimationFrom = oT.beginAnimationFrom, TT.beginAnimationTo = oT.beginAnimationTo, TT.beginAnimationLoop = oT.beginAnimationLoop, TT.startDelay = oT.startDelay, TT.renderingGroupId = oT.renderingGroupId, TT.isBillboardBased = oT.isBillboardBased, TT.billboardMode = oT.billboardMode, TT.minAngularSpeed = oT.minAngularSpeed, TT.maxAngularSpeed = oT.maxAngularSpeed, TT.minSize = oT.minSize, TT.maxSize = oT.maxSize, TT.minScaleX = oT.minScaleX, TT.maxScaleX = oT.maxScaleX, TT.minScaleY = oT.minScaleY, TT.maxScaleY = oT.maxScaleY, TT.minEmitPower = oT.minEmitPower, TT.maxEmitPower = oT.maxEmitPower, TT.minLifeTime = oT.minLifeTime, TT.maxLifeTime = oT.maxLifeTime, TT.emitRate = oT.emitRate, TT.gravity = oT.gravity.bIT(), TT.noiseStrength = oT.noiseStrength.bIT(), TT.color1 = oT.color1.bIT(), TT.color2 = oT.color2.bIT(), TT.colorDead = oT.colorDead.bIT(), TT.updateSpeed = oT.updateSpeed, TT.targetStopDuration = oT.targetStopDuration, TT.blendMode = oT.blendMode, TT.preWarmCycles = oT.preWarmCycles, TT.preWarmStepOffset = oT.preWarmStepOffset, TT.minInitialRotation = oT.minInitialRotation, TT.maxInitialRotation = oT.maxInitialRotation, TT.startSpriteCellID = oT.startSpriteCellID, TT.spriteCellLoop = oT.spriteCellLoop, TT.endSpriteCellID = oT.endSpriteCellID, TT.spriteCellChangeSpeed = oT.spriteCellChangeSpeed, TT.spriteCellWidth = oT.spriteCellWidth, TT.spriteCellHeight = oT.spriteCellHeight, TT.spriteRandomStartCell = oT.spriteRandomStartCell, TT.isAnimationSheetEnabled = oT.isAnimationSheetEnabled, TT.useLogarithmicDepth = oT.useLogarithmicDepth;
        const iT = oT.getColorGradients();
        if (iT) {
          TT.colorGradients = [];
          for (const oT of iT) {
            const IT = {
              gradient: oT.gradient,
              color1: oT.color1.bIT()
            };
            oT.color2 ? IT.color2 = oT.color2.bIT() : IT.color2 = oT.color1.bIT(), TT.colorGradients.push(IT)
          }
        }
        const zT = oT.getRampGradients();
        if (zT) {
          TT.rampGradients = [];
          for (const oT of zT) {
            const IT = {
              gradient: oT.gradient,
              color: oT.color.bIT()
            };
            TT.rampGradients.push(IT)
          }
          TT.useRampGradients = oT.useRampGradients
        }
        const kT = oT.getColorRemapGradients();
        if (kT) {
          TT.colorRemapGradients = [];
          for (const oT of kT) {
            const IT = {
              gradient: oT.gradient,
              factor1: oT.factor1
            };
            void 0 !== oT.factor2 ? IT.factor2 = oT.factor2 : IT.factor2 = oT.factor1, TT.colorRemapGradients.push(IT)
          }
        }
        const WT = oT.getAlphaRemapGradients();
        if (WT) {
          TT.alphaRemapGradients = [];
          for (const oT of WT) {
            const IT = {
              gradient: oT.gradient,
              factor1: oT.factor1
            };
            void 0 !== oT.factor2 ? IT.factor2 = oT.factor2 : IT.factor2 = oT.factor1, TT.alphaRemapGradients.push(IT)
          }
        }
        const XT = oT.getSizeGradients();
        if (XT) {
          TT.sizeGradients = [];
          for (const oT of XT) {
            const IT = {
              gradient: oT.gradient,
              factor1: oT.factor1
            };
            void 0 !== oT.factor2 ? IT.factor2 = oT.factor2 : IT.factor2 = oT.factor1, TT.sizeGradients.push(IT)
          }
        }
        const BT = oT.getAngularSpeedGradients();
        if (BT) {
          TT.angularSpeedGradients = [];
          for (const oT of BT) {
            const IT = {
              gradient: oT.gradient,
              factor1: oT.factor1
            };
            void 0 !== oT.factor2 ? IT.factor2 = oT.factor2 : IT.factor2 = oT.factor1, TT.angularSpeedGradients.push(IT)
          }
        }
        const FT = oT.getVelocityGradients();
        if (FT) {
          TT.velocityGradients = [];
          for (const oT of FT) {
            const IT = {
              gradient: oT.gradient,
              factor1: oT.factor1
            };
            void 0 !== oT.factor2 ? IT.factor2 = oT.factor2 : IT.factor2 = oT.factor1, TT.velocityGradients.push(IT)
          }
        }
        const ST = oT.getDragGradients();
        if (ST) {
          TT.dragGradients = [];
          for (const oT of ST) {
            const IT = {
              gradient: oT.gradient,
              factor1: oT.factor1
            };
            void 0 !== oT.factor2 ? IT.factor2 = oT.factor2 : IT.factor2 = oT.factor1, TT.dragGradients.push(IT)
          }
        }
        const DT = oT.getEmitRateGradients();
        if (DT) {
          TT.emitRateGradients = [];
          for (const oT of DT) {
            const IT = {
              gradient: oT.gradient,
              factor1: oT.factor1
            };
            void 0 !== oT.factor2 ? IT.factor2 = oT.factor2 : IT.factor2 = oT.factor1, TT.emitRateGradients.push(IT)
          }
        }
        const LT = oT.getStartSizeGradients();
        if (LT) {
          TT.startSizeGradients = [];
          for (const oT of LT) {
            const IT = {
              gradient: oT.gradient,
              factor1: oT.factor1
            };
            void 0 !== oT.factor2 ? IT.factor2 = oT.factor2 : IT.factor2 = oT.factor1, TT.startSizeGradients.push(IT)
          }
        }
        const xT = oT.getLifeTimeGradients();
        if (xT) {
          TT.lifeTimeGradients = [];
          for (const oT of xT) {
            const IT = {
              gradient: oT.gradient,
              factor1: oT.factor1
            };
            void 0 !== oT.factor2 ? IT.factor2 = oT.factor2 : IT.factor2 = oT.factor1, TT.lifeTimeGradients.push(IT)
          }
        }
        const cT = oT.getLimitVelocityGradients();
        if (cT) {
          TT.limitVelocityGradients = [];
          for (const oT of cT) {
            const IT = {
              gradient: oT.gradient,
              factor1: oT.factor1
            };
            void 0 !== oT.factor2 ? IT.factor2 = oT.factor2 : IT.factor2 = oT.factor1, TT.limitVelocityGradients.push(IT)
          }
          TT.limitVelocityDamping = oT.limitVelocityDamping
        }
        oT.noiseTexture && (TT.noiseTexture = oT.noiseTexture.serialize())
      }
      clone(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const iT = {
          ...this._customWrappers
        };
        let zT = null;
        const kT = this._engine;
        if ((0, QT.d)(kT.createEffectForParticles) && null != this.customShader) {
          zT = this.customShader;
          const TT = zT.shaderOptions.defines.length > 0 ? zT.shaderOptions.defines.join("\n") : "",
            oT = kT.createEffectForParticles(zT.shaderPath.fragmentElement, zT.shaderOptions.uniforms, zT.shaderOptions.samplers, TT);
          iT[0] ? iT[0].effect = oT : this.setCustomEffect(oT, 0)
        }
        const WT = this.serialize(IT),
          XT = !1 === IT && this.particleTexture ? this.particleTexture.clone() : null;
        XT && (WT.textureName = void 0);
        const BT = po.Parse(WT, this._scene || this._engine, this._rootUrl);
        return BT.name = TT, BT.customShader = zT, BT._customWrappers = iT, XT && (BT.particleTexture = XT), void 0 === oT && (oT = this.emitter), this.noiseTexture && (BT.noiseTexture = this.noiseTexture.clone()), BT.emitter = oT, this.preventAutoStart || BT.start(), BT
      }
    }
    po.BILLBOARDMODE_Y = 2, po.BILLBOARDMODE_ALL = 7, po.BILLBOARDMODE_STRETCHED = 8, po.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let bo = !1;
    bo || (bo = !0, Yo._ParseParticleSystem = po.Parse)
  },
  40459: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      SkyMaterial: () => gT,
      _MaxColorValueForRenderTarget: () => AT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(38799),
      WT = IT(36114),
      XT = IT(39063),
      BT = IT(39131),
      FT = IT(40413),
      ST = IT(40072),
      DT = IT(38874),
      LT = IT(36166),
      xT = IT(39161),
      cT = IT(39135),
      KT = IT(39117),
      MT = IT(39113);
    class rT extends XT.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function AT(TT) {
      switch (TT) {
        case FT.d.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case FT.d.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let gT = (() => {
      var TT;
      let oT, XT, FT, LT, gT, hT, wT, mT, eT, RT, uT, vT, ET, fT, CT, jT = BT.e,
        JT = [],
        UT = [],
        aT = [],
        YT = [],
        QT = [],
        OT = [],
        HT = [],
        nT = [],
        qT = [],
        ZT = [],
        lT = [],
        sT = [],
        tT = [],
        GT = [],
        pT = [],
        bT = [],
        yT = [],
        NT = [],
        PT = [],
        dT = [],
        VT = [],
        To = [],
        oo = [],
        Io = [],
        io = [],
        zo = [],
        ko = [],
        Wo = [],
        Xo = [],
        Bo = [];
      return TT = class extends jT {
        constructor(TT, oT) {
          super(TT, oT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, iT.j)(this, JT, 1), this.turbidity = ((0, iT.j)(this, UT), (0, iT.j)(this, aT, 10)), this.rayleigh = ((0, iT.j)(this, YT), (0, iT.j)(this, QT, 2)), this.mieCoefficient = ((0, iT.j)(this, OT), (0, iT.j)(this, HT, .005)), this.mieDirectionalG = ((0, iT.j)(this, nT), (0, iT.j)(this, qT, .8)), this.distance = ((0, iT.j)(this, ZT), (0, iT.j)(this, lT, 500)), this.inclination = ((0, iT.j)(this, sT), (0, iT.j)(this, tT, .49)), this.azimuth = ((0, iT.j)(this, GT), (0, iT.j)(this, pT, .25)), this.sunPosition = ((0, iT.j)(this, bT), (0, iT.j)(this, yT, new WT.sc(0, 100, 0))), this.useSunPosition = ((0, iT.j)(this, NT), (0, iT.j)(this, PT, !1)), this.cameraOffset = ((0, iT.j)(this, dT), (0, iT.j)(this, VT, WT.sc.Zero())), this.up = ((0, iT.j)(this, To), (0, iT.j)(this, oo, WT.sc.Up())), this.dithering = ((0, iT.j)(this, Io), (0, iT.j)(this, io, !1)), this.rawHdrOutput = ((0, iT.j)(this, zo), (0, iT.j)(this, ko, !1)), this.cloudiness = ((0, iT.j)(this, Wo), (0, iT.j)(this, Xo, 0)), this._cameraPosition = ((0, iT.j)(this, Bo), WT.sc.Zero()), this._skyOrientation = new WT.Quaternion
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
        isReadyForSubMesh(oT, IT) {
          const iT = IT._drawWrapper;
          if (this.isFrozen && iT.effect && iT._wasPreviouslyReady) return !0;
          IT.materialDefines || (IT.materialDefines = new rT);
          const zT = IT.materialDefines,
            kT = this.pC();
          if (this._isReadyForSubMesh(IT)) return !0;
          if ((0, MT.U)(oT, kT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, zT, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, MT.H)(oT, zT, !0, !1), zT.IMAGEPROCESSINGPOSTPROCESS !== kT.imageProcessingConfiguration.applyByPostProcess && zT.markAsMiscDirty(), zT.DITHER !== this.dithering && zT.markAsMiscDirty(), zT.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && zT.markAsMiscDirty(), zT.isDirty) {
            zT.markAsProcessed(), kT.resetCachedMaterial();
            const oT = new cT.e;
            zT.FOG && oT.addFallback(1, "FOG"), zT.IMAGEPROCESSINGPOSTPROCESS = kT.imageProcessingConfiguration.applyByPostProcess, zT.DITHER = this.dithering, zT.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const iT = [ST.d.PositionKind];
            zT.VERTEXCOLOR && iT.push(ST.d.ColorKind);
            const WT = "sky",
              XT = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, KT.b)(XT);
            const BT = zT.toString();
            IT.setEffect(kT.Zc().createEffect(WT, {
              attributes: iT,
              uniformsNames: XT,
              uniformBuffersNames: [],
              samplers: [],
              defines: BT,
              fallbacks: oT,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: TT._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, kT.Zc()), zT, this._materialContext)
          }
          return !(!IT.effect || !IT.effect.isReady()) && (zT._renderId = kT.getRenderId(), iT._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(TT, oT, IT) {
          const iT = this.pC(),
            zT = IT.materialDefines;
          if (!zT) return;
          const kT = IT.effect;
          if (!kT) return;
          this._activeEffect = kT, this.bindOnlyWorldMatrix(TT), this._activeEffect.setMatrix("viewProjection", iT.getTransformMatrix()), this._mustRebind(iT, kT, IT) && ((0, KT.d)(kT, this, iT), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, MT.q)(zT, kT, iT)), iT.fogEnabled && oT.applyFog && iT.fogMode !== DT.d.FOGMODE_NONE && this._activeEffect.setMatrix("view", iT.getViewMatrix()), (0, MT.e)(iT, oT, this._activeEffect, this.rawHdrOutput);
          const XT = iT.activeCamera;
          if (XT) {
            const TT = XT.getWorldMatrix();
            this._cameraPosition.x = TT.m[12], this._cameraPosition.y = TT.m[13], this._cameraPosition.z = TT.m[14], this._activeEffect.setVector3("cameraPosition", WT.TmpVectors.sc[0].SIT(this._cameraPosition).SiT(iT.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const TT = iT.Zc()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", AT(TT?.texture?.type))
          }
          if (!this.useSunPosition) {
            const TT = Math.PI * (this.inclination - .5),
              oT = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(oT) * Math.cos(TT), this.sunPosition.y = this.distance * Math.sin(-TT), this.sunPosition.z = this.distance * Math.sin(oT) * Math.cos(TT), WT.Quaternion.FromUnitVectorsToRef(WT.sc.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(oT, this._activeEffect, IT)
        }
        getAnimatables() {
          return []
        }
        dispose(TT) {
          super.dispose(TT)
        }
        clone(oT) {
          return kT.c.Clone((() => new TT(oT, this.pC())), this)
        }
        serialize() {
          const TT = super.serialize();
          return TT.customType = "BABYLON.SkyMaterial", TT
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(oT, IT, iT) {
          return kT.c.Parse((() => new TT(oT.name, IT)), oT, IT, iT)
        }
      }, (() => {
        const IT = "function" === typeof Symbol && Symbol.metadata ? Object.create(jT[Symbol.metadata] ?? null) : void 0;
        oT = [(0, zT.P)()], XT = [(0, zT.P)()], FT = [(0, zT.P)()], LT = [(0, zT.P)()], gT = [(0, zT.P)()], hT = [(0, zT.P)()], wT = [(0, zT.P)()], mT = [(0, zT.P)()], eT = [(0, zT.M)()], RT = [(0, zT.P)()], uT = [(0, zT.M)()], vT = [(0, zT.M)()], ET = [(0, zT.P)()], fT = [(0, zT.P)()], CT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: TT => "luminance" in TT,
            get: TT => TT.luminance,
            set: (TT, oT) => {
              TT.luminance = oT
            }
          },
          metadata: IT
        }, JT, UT), (0, iT.h)(null, null, XT, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: TT => "turbidity" in TT,
            get: TT => TT.turbidity,
            set: (TT, oT) => {
              TT.turbidity = oT
            }
          },
          metadata: IT
        }, aT, YT), (0, iT.h)(null, null, FT, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: TT => "rayleigh" in TT,
            get: TT => TT.rayleigh,
            set: (TT, oT) => {
              TT.rayleigh = oT
            }
          },
          metadata: IT
        }, QT, OT), (0, iT.h)(null, null, LT, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: TT => "mieCoefficient" in TT,
            get: TT => TT.mieCoefficient,
            set: (TT, oT) => {
              TT.mieCoefficient = oT
            }
          },
          metadata: IT
        }, HT, nT), (0, iT.h)(null, null, gT, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: TT => "mieDirectionalG" in TT,
            get: TT => TT.mieDirectionalG,
            set: (TT, oT) => {
              TT.mieDirectionalG = oT
            }
          },
          metadata: IT
        }, qT, ZT), (0, iT.h)(null, null, hT, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: TT => "distance" in TT,
            get: TT => TT.distance,
            set: (TT, oT) => {
              TT.distance = oT
            }
          },
          metadata: IT
        }, lT, sT), (0, iT.h)(null, null, wT, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: TT => "inclination" in TT,
            get: TT => TT.inclination,
            set: (TT, oT) => {
              TT.inclination = oT
            }
          },
          metadata: IT
        }, tT, GT), (0, iT.h)(null, null, mT, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: TT => "azimuth" in TT,
            get: TT => TT.azimuth,
            set: (TT, oT) => {
              TT.azimuth = oT
            }
          },
          metadata: IT
        }, pT, bT), (0, iT.h)(null, null, eT, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: TT => "sunPosition" in TT,
            get: TT => TT.sunPosition,
            set: (TT, oT) => {
              TT.sunPosition = oT
            }
          },
          metadata: IT
        }, yT, NT), (0, iT.h)(null, null, RT, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSunPosition" in TT,
            get: TT => TT.useSunPosition,
            set: (TT, oT) => {
              TT.useSunPosition = oT
            }
          },
          metadata: IT
        }, PT, dT), (0, iT.h)(null, null, uT, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: TT => "cameraOffset" in TT,
            get: TT => TT.cameraOffset,
            set: (TT, oT) => {
              TT.cameraOffset = oT
            }
          },
          metadata: IT
        }, VT, To), (0, iT.h)(null, null, vT, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: TT => "up" in TT,
            get: TT => TT.up,
            set: (TT, oT) => {
              TT.up = oT
            }
          },
          metadata: IT
        }, oo, Io), (0, iT.h)(null, null, ET, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: TT => "dithering" in TT,
            get: TT => TT.dithering,
            set: (TT, oT) => {
              TT.dithering = oT
            }
          },
          metadata: IT
        }, io, zo), (0, iT.h)(null, null, fT, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: TT => "rawHdrOutput" in TT,
            get: TT => TT.rawHdrOutput,
            set: (TT, oT) => {
              TT.rawHdrOutput = oT
            }
          },
          metadata: IT
        }, ko, Wo), (0, iT.h)(null, null, CT, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: TT => "cloudiness" in TT,
            get: TT => TT.cloudiness,
            set: (TT, oT) => {
              TT.cloudiness = oT
            }
          },
          metadata: IT
        }, Xo, Bo), IT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IT
        })
      })(), TT._ShaderLoader = new xT.c((() => [IT.e(320).then((() => IT(60056))), IT.e(313).then((() => IT(60063)))]), (() => [IT.e(337).then((() => IT(60069))), IT.e(331).then((() => IT(60077)))])), TT
    })();
    (0, LT.h)("BABYLON.SkyMaterial", gT)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);