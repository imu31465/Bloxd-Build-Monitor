export const id = 295;
export const ids = [295];
export const modules = {
  41208: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT
    });
    var lT = cT(39741),
      MT = cT(41214);
    class KT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = cT, this.ZcT = [], this._maxBlockCapacity = kT || 64, this._selectionContent = new lT.d(1024), this._creationFunc = TT
      }
      update(TT, kT, cT) {
        MT.d._CreateBlocks(TT, kT, cT, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      rcT(TT) {
        for (let kT = 0; kT < this.blocks.length; kT++) {
          this.blocks[kT].addEntry(TT)
        }
      }
      eJ(TT) {
        for (let kT = 0; kT < this.blocks.length; kT++) {
          this.blocks[kT].removeEntry(TT)
        }
      }
      select(TT, kT) {
        this._selectionContent.reset();
        for (let cT = 0; cT < this.blocks.length; cT++) {
          this.blocks[cT].select(TT, this._selectionContent, kT)
        }
        return kT ? this._selectionContent.concat(this.ZcT) : this._selectionContent.concatWithNoDuplicate(this.ZcT), this._selectionContent
      }
      intersects(TT, kT, cT) {
        this._selectionContent.reset();
        for (let lT = 0; lT < this.blocks.length; lT++) {
          this.blocks[lT].intersects(TT, kT, this._selectionContent, cT)
        }
        return cT ? this._selectionContent.concat(this.ZcT) : this._selectionContent.concatWithNoDuplicate(this.ZcT), this._selectionContent
      }
      intersectsRay(TT) {
        this._selectionContent.reset();
        for (let kT = 0; kT < this.blocks.length; kT++) {
          this.blocks[kT].intersectsRay(TT, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.ZcT), this._selectionContent
      }
    }
    KT.CreationFuncForMeshes = (TT, kT) => {
      const cT = TT.DH();
      !TT.isBlocked && cT.boundingBox.intersectsMinMax(kT.zcT, kT.bcT) && kT.entries.push(TT)
    }, KT.CreationFuncForSubMeshes = (TT, kT) => {
      TT.DH().boundingBox.intersectsMinMax(kT.zcT, kT.bcT) && kT.entries.push(TT)
    }
  },
  41214: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(36892),
      MT = cT(39929);
    class KT {
      constructor(TT, kT, cT, lT, MT, KT) {
        this.entries = [], this.ucT = new Array, this._capacity = cT, this._depth = lT, this._maxDepth = MT, this._creationFunc = KT, this._minPoint = TT, this._maxPoint = kT, this.ucT.push(TT.clone()), this.ucT.push(kT.clone()), this.ucT.push(TT.clone()), this.ucT[2].x = kT.x, this.ucT.push(TT.clone()), this.ucT[3].y = kT.y, this.ucT.push(TT.clone()), this.ucT[4].z = kT.z, this.ucT.push(kT.clone()), this.ucT[5].z = TT.z, this.ucT.push(kT.clone()), this.ucT[6].x = TT.x, this.ucT.push(kT.clone()), this.ucT[7].y = TT.y
      }
      get DA() {
        return this._capacity
      }
      get zcT() {
        return this._minPoint
      }
      get bcT() {
        return this._maxPoint
      }
      addEntry(TT) {
        if (this.blocks)
          for (let kT = 0; kT < this.blocks.length; kT++) {
            this.blocks[kT].addEntry(TT)
          } else this._creationFunc(TT, this), this.entries.length > this.DA && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(TT) {
        if (this.blocks) {
          for (let kT = 0; kT < this.blocks.length; kT++) {
            this.blocks[kT].removeEntry(TT)
          }
          return
        }
        const kT = this.entries.indexOf(TT);
        kT > -1 && this.entries.splice(kT, 1)
      }
      addEntries(TT) {
        for (let kT = 0; kT < TT.length; kT++) {
          const cT = TT[kT];
          this.addEntry(cT)
        }
      }
      select(TT, kT, cT) {
        if (MT.d.IsInFrustum(this.ucT, TT)) {
          if (this.blocks) {
            for (let lT = 0; lT < this.blocks.length; lT++) {
              this.blocks[lT].select(TT, kT, cT)
            }
            return
          }
          cT ? kT.concat(this.entries) : kT.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(TT, kT, cT, lT) {
        if (MT.d.IntersectsSphere(this._minPoint, this._maxPoint, TT, kT)) {
          if (this.blocks) {
            for (let MT = 0; MT < this.blocks.length; MT++) {
              this.blocks[MT].intersects(TT, kT, cT, lT)
            }
            return
          }
          lT ? cT.concat(this.entries) : cT.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(TT, kT) {
        if (TT.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let cT = 0; cT < this.blocks.length; cT++) {
              this.blocks[cT].intersectsRay(TT, kT)
            }
            return
          }
          kT.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        KT._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(TT, kT, cT, MT, OT, yT, fT, xT) {
        fT.blocks = new Array;
        const IT = new lT.m((kT.x - TT.x) / 2, (kT.y - TT.y) / 2, (kT.z - TT.z) / 2);
        for (let lT = 0; lT < 2; lT++)
          for (let kT = 0; kT < 2; kT++)
            for (let AT = 0; AT < 2; AT++) {
              const CT = TT.add(IT.multiplyByFloats(lT, kT, AT)),
                jT = TT.add(IT.multiplyByFloats(lT + 1, kT + 1, AT + 1)),
                vT = new KT(CT, jT, MT, OT + 1, yT, xT);
              vT.addEntries(cT), fT.blocks.push(vT)
            }
      }
    }
  },
  41223: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => IT
    });
    var lT = cT(39720),
      MT = cT(36892),
      KT = cT(40066),
      OT = cT(41156),
      yT = cT(39809),
      fT = cT(36925),
      xT = cT(41208);
    class IT {
      constructor(TT) {
        this.name = yT.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new OT.E(MT.m.Zero(), new MT.m(1, 1, 1)), (TT = TT || fT.d.LastCreatedScene) && (this.et = TT, this.et.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.et.getActiveSubMeshCandidates = TT => this.getActiveSubMeshCandidates(TT), this.et.getCollidingSubMeshCandidates = (TT, kT) => this.getCollidingSubMeshCandidates(TT, kT), this.et.getIntersectingSubMeshCandidates = (TT, kT) => this.getIntersectingSubMeshCandidates(TT, kT))
      }
      register() {
        this.et.onMeshRemovedObservable.add((TT => {
          const kT = this.et.selectionOctree;
          if (void 0 !== kT && null !== kT) {
            const cT = kT.ZcT.indexOf(TT); - 1 !== cT && kT.ZcT.splice(cT, 1)
          }
        })), this.et.onMeshImportedObservable.add((TT => {
          const kT = this.et.selectionOctree;
          void 0 !== kT && null !== kT && kT.rcT(TT)
        }))
      }
      getActiveMeshCandidates() {
        return this.et.YcT?.select(this.et.frustumPlanes) || this.et._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(TT) {
        if (TT._submeshesOctree && TT.useOctreeForRenderingSelection) {
          return TT._submeshesOctree.select(this.et.frustumPlanes)
        }
        return this.et._getDefaultSubMeshCandidates(TT)
      }
      getIntersectingSubMeshCandidates(TT, kT) {
        if (TT._submeshesOctree && TT.useOctreeForPicking) {
          OT.E.TransformToRef(kT, TT.getWorldMatrix(), this._tempRay);
          return TT._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.et._getDefaultSubMeshCandidates(TT)
      }
      getCollidingSubMeshCandidates(TT, kT) {
        if (TT._submeshesOctree && TT.useOctreeForCollisions) {
          const cT = kT._velocityWorldLength + Math.max(kT._radius.x, kT._radius.y, kT._radius.z);
          return TT._submeshesOctree.intersects(kT._basePointWorld, cT)
        }
        return this.et._getDefaultSubMeshCandidates(TT)
      }
      rebuild() {}
      dispose() {}
    }
    let AT = !1;
    AT || (AT = !0, lT.f.prototype.createOrUpdateSelectionOctree = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        cT = this._getComponent(yT.e.NAME_OCTREE);
      cT || (cT = new IT(this), this.ycT(cT)), this.YcT || (this.YcT = new xT.e(xT.e.CreationFuncForMeshes, TT, kT));
      const lT = this.getWorldExtends();
      return this.YcT.update(lT.min, lT.max, this.meshes), this.YcT
    }, Object.defineProperty(lT.f.prototype, "selectionOctree", {
      get: function() {
        return this.YcT
      },
      enumerable: !0,
      configurable: !0
    }), KT.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const cT = this.NJ();
      let lT = cT._getComponent(yT.e.NAME_OCTREE);
      lT || (lT = new IT(cT), cT.ycT(lT)), this._submeshesOctree || (this._submeshesOctree = new xT.e(xT.e.CreationFuncForSubMeshes, TT, kT)), this.computeWorldMatrix(!0);
      const MT = this.DH().boundingBox;
      return this._submeshesOctree.update(MT.minimumWorld, MT.maximumWorld, this.kF), this._submeshesOctree
    })
  },
  41156: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => PT,
      E: () => AT,
      b: () => JT,
      e: () => tT,
      i: () => vT,
      m: () => jT,
      q: () => bT,
      u: () => mT,
      w: () => rT,
      z: () => wT
    });
    var lT = cT(36901),
      MT = cT(36892),
      KT = cT(36910),
      OT = cT(39921),
      yT = cT(39775),
      fT = cT(36925),
      xT = cT(39827);
    const IT = {
      internalPickerForMesh: void 0
    };
    class AT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lT.b;
        this.origin = TT, this.direction = kT, this.length = cT, this.epsilon = MT
      }
      clone() {
        return new AT(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const lT = AT._TmpVector3[0].I5(TT.x - cT, TT.y - cT, TT.z - cT),
          MT = AT._TmpVector3[1].I5(kT.x + cT, kT.y + cT, kT.z + cT);
        let KT, OT, yT, fT, xT = 0,
          IT = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < lT.x || this.origin.x > MT.x) return !1
        } else if (KT = 1 / this.direction.x, OT = (lT.x - this.origin.x) * KT, yT = (MT.x - this.origin.x) * KT, yT === -1 / 0 && (yT = 1 / 0), OT > yT && (fT = OT, OT = yT, yT = fT), xT = Math.max(OT, xT), IT = Math.min(yT, IT), xT > IT) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < lT.y || this.origin.y > MT.y) return !1
        } else if (KT = 1 / this.direction.y, OT = (lT.y - this.origin.y) * KT, yT = (MT.y - this.origin.y) * KT, yT === -1 / 0 && (yT = 1 / 0), OT > yT && (fT = OT, OT = yT, yT = fT), xT = Math.max(OT, xT), IT = Math.min(yT, IT), xT > IT) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < lT.z || this.origin.z > MT.z) return !1
        } else if (KT = 1 / this.direction.z, OT = (lT.z - this.origin.z) * KT, yT = (MT.z - this.origin.z) * KT, yT === -1 / 0 && (yT = 1 / 0), OT > yT && (fT = OT, OT = yT, yT = fT), xT = Math.max(OT, xT), IT = Math.min(yT, IT), xT > IT) return !1;
        return !0
      }
      intersectsBox(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(TT.minimum, TT.maximum, kT)
      }
      intersectsSphere(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cT = TT.center.x - this.origin.x,
          lT = TT.center.y - this.origin.y,
          MT = TT.center.z - this.origin.z,
          KT = cT * cT + lT * lT + MT * MT,
          OT = TT.radius + kT,
          yT = OT * OT;
        if (KT <= yT) return !0;
        const fT = cT * this.direction.x + lT * this.direction.y + MT * this.direction.z;
        if (fT < 0) return !1;
        return KT - fT * fT <= yT
      }
      intersectsTriangle(TT, kT, cT) {
        const lT = AT._TmpVector3[0],
          KT = AT._TmpVector3[1],
          yT = AT._TmpVector3[2],
          fT = AT._TmpVector3[3],
          xT = AT._TmpVector3[4];
        kT.subtractToRef(TT, lT), cT.subtractToRef(TT, KT), MT.m.CrossToRef(this.direction, KT, yT);
        const IT = MT.m.Dot(lT, yT);
        if (0 === IT) return null;
        const CT = 1 / IT;
        this.origin.subtractToRef(TT, fT);
        const jT = MT.m.Dot(fT, yT) * CT;
        if (jT < -this.epsilon || jT > 1 + this.epsilon) return null;
        MT.m.CrossToRef(fT, lT, xT);
        const vT = MT.m.Dot(this.direction, xT) * CT;
        if (vT < -this.epsilon || jT + vT > 1 + this.epsilon) return null;
        const tT = MT.m.Dot(KT, xT) * CT;
        return tT > this.length || tT < 0 ? null : new OT.c(1 - jT - vT, jT, tT)
      }
      intersectsPlane(TT) {
        let kT;
        const cT = MT.m.Dot(TT.normal, this.direction);
        if (Math.abs(cT) < 9.99999997475243e-7) return null;
        {
          const lT = MT.m.Dot(TT.normal, this.origin);
          return kT = (-TT.d - lT) / cT, kT < 0 ? kT < -9.99999997475243e-7 ? null : 0 : kT
        }
      }
      intersectsAxis(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (TT) {
          case "y": {
            const TT = (this.origin.y - kT) / this.direction.y;
            return TT > 0 ? null : new MT.m(this.origin.x + this.direction.x * -TT, kT, this.origin.z + this.direction.z * -TT)
          }
          case "x": {
            const TT = (this.origin.x - kT) / this.direction.x;
            return TT > 0 ? null : new MT.m(kT, this.origin.y + this.direction.y * -TT, this.origin.z + this.direction.z * -TT)
          }
          case "z": {
            const TT = (this.origin.z - kT) / this.direction.z;
            return TT > 0 ? null : new MT.m(this.origin.x + this.direction.x * -TT, this.origin.y + this.direction.y * -TT, kT)
          }
          default:
            return null
        }
      }
      xlT(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          KT = arguments.length > 4 ? arguments[4] : void 0,
          OT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const yT = MT.h.Matrix[0];
        return TT.getWorldMatrix().invertToRef(yT), this._tmpRay ? AT.TransformToRef(this, yT, this._tmpRay) : this._tmpRay = AT.Transform(this, yT), TT.intersects(this._tmpRay, kT, cT, lT, KT, OT)
      }
      intersectsMeshes(TT, kT, cT) {
        cT ? cT.length = 0 : cT = [];
        for (let lT = 0; lT < TT.length; lT++) {
          const MT = this.xlT(TT[lT], kT);
          MT.hit && cT.push(MT)
        }
        return cT.sort(this._comparePickingInfo), cT
      }
      _comparePickingInfo(TT, kT) {
        return TT.distance < kT.distance ? -1 : TT.distance > kT.distance ? 1 : 0
      }
      intersectionSegment(TT, kT, cT) {
        const lT = this.origin,
          KT = MT.h.Fv[0],
          OT = MT.h.Fv[1],
          yT = MT.h.Fv[2],
          fT = MT.h.Fv[3];
        kT.subtractToRef(TT, KT), this.direction.scaleToRef(AT._Rayl, yT), lT.addToRef(yT, OT), TT.subtractToRef(lT, fT);
        const xT = MT.m.Dot(KT, KT),
          IT = MT.m.Dot(KT, yT),
          CT = MT.m.Dot(yT, yT),
          jT = MT.m.Dot(KT, fT),
          vT = MT.m.Dot(yT, fT),
          tT = xT * CT - IT * IT;
        let hT, NT, QT = tT,
          ST = tT;
        tT < AT._Smallnum ? (hT = 0, QT = 1, NT = vT, ST = CT) : (hT = IT * vT - CT * jT, NT = xT * vT - IT * jT, hT < 0 ? (hT = 0, NT = vT, ST = CT) : hT > QT && (hT = QT, NT = vT + IT, ST = CT)), NT < 0 ? (NT = 0, -jT < 0 ? hT = 0 : -jT > xT ? hT = QT : (hT = -jT, QT = xT)) : NT > ST && (NT = ST, -jT + IT < 0 ? hT = 0 : -jT + IT > xT ? hT = QT : (hT = -jT + IT, QT = xT));
        const DT = Math.abs(hT) < AT._Smallnum ? 0 : hT / QT,
          aT = Math.abs(NT) < AT._Smallnum ? 0 : NT / ST,
          FT = MT.h.Fv[4];
        yT.scaleToRef(aT, FT);
        const rT = MT.h.Fv[5];
        KT.scaleToRef(DT, rT), rT.addInPlace(fT);
        const PT = MT.h.Fv[6];
        rT.subtractToRef(FT, PT);
        return aT > 0 && aT <= this.length && PT.lengthSquared() < cT * cT ? rT.length() : -1
      }
      update(TT, kT, cT, lT, KT, OT, yT) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          AT._RayDistant || (AT._RayDistant = AT.Zero()), AT._RayDistant.unprojectRayToRef(TT, kT, cT, lT, MT.d.IdentityReadOnly, OT, yT);
          const fT = MT.h.Matrix[0];
          KT.invertToRef(fT), AT.TransformToRef(AT._RayDistant, fT, this)
        } else this.unprojectRayToRef(TT, kT, cT, lT, KT, OT, yT);
        return this
      }
      static Zero() {
        return new AT(MT.m.Zero(), MT.m.Zero())
      }
      static CreateNew(TT, kT, cT, lT, MT, KT, OT) {
        return AT.Zero().update(TT, kT, cT, lT, MT, KT, OT)
      }
      static CreateNewFromTo(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MT.d.IdentityReadOnly;
        const lT = new AT(new MT.m(0, 0, 0), new MT.m(0, 0, 0));
        return AT.CreateFromToToRef(TT, kT, lT, cT)
      }
      static CreateFromToToRef(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MT.d.IdentityReadOnly;
        cT.origin.UkT(TT);
        const KT = kT.subtractToRef(TT, cT.direction),
          OT = Math.sqrt(KT.x * KT.x + KT.y * KT.y + KT.z * KT.z);
        return cT.length = OT, cT.direction.normalize(), AT.TransformToRef(cT, lT, cT)
      }
      static Transform(TT, kT) {
        const cT = new AT(new MT.m(0, 0, 0), new MT.m(0, 0, 0));
        return AT.TransformToRef(TT, kT, cT), cT
      }
      static TransformToRef(TT, kT, cT) {
        MT.m.TransformCoordinatesToRef(TT.origin, kT, cT.origin), MT.m.TransformNormalToRef(TT.direction, kT, cT.direction), cT.length = TT.length, cT.epsilon = TT.epsilon;
        const lT = cT.direction,
          KT = lT.length();
        if (0 !== KT && 1 !== KT) {
          const TT = 1 / KT;
          lT.x *= TT, lT.y *= TT, lT.z *= TT, cT.length *= KT
        }
        return cT
      }
      unprojectRayToRef(TT, kT, cT, lT, KT, OT, yT) {
        const xT = MT.h.Matrix[0];
        KT.multiplyToRef(OT, xT), xT.multiplyToRef(yT, xT), xT.invert();
        const IT = fT.d.LastCreatedEngine,
          AT = MT.h.Fv[0];
        AT.x = TT / cT * 2 - 1, AT.y = -(kT / lT * 2 - 1), AT.z = IT?.QcT ? 1 : IT?.isNDCHalfZRange ? 0 : -1;
        const CT = MT.h.Fv[1].I5(AT.x, AT.y, 1 - 1e-8),
          jT = MT.h.Fv[2],
          vT = MT.h.Fv[3];
        MT.m.TransformCoordinatesToRef(AT, xT, jT), MT.m.TransformCoordinatesToRef(CT, xT, vT), this.origin.UkT(jT), vT.subtractToRef(jT, this.direction), this.direction.normalize()
      }
    }

    function CT(TT, kT, cT, lT, MT) {
      let KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const OT = AT.Zero();
      return jT(TT, kT, cT, lT, OT, MT, KT), OT
    }

    function jT(TT, kT, cT, lT, KT, OT) {
      let yT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        fT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const xT = TT.Dv();
      if (!OT && !(OT = TT.activeCamera) && !(OT = TT.cameraToUseForPointers)) return TT;
      const IT = OT.viewport,
        AT = xT.getRenderHeight(),
        {
          x: CT,
          y: jT,
          width: vT,
          height: tT
        } = IT.toGlobal(xT.getRenderWidth(), AT),
        hT = 1 / xT.getHardwareScalingLevel();
      return kT = kT * hT - CT, cT = cT * hT - (AT - jT - tT), KT.update(kT, cT, vT, tT, lT || MT.d.IdentityReadOnly, yT ? MT.d.IdentityReadOnly : OT.getViewMatrix(), OT.getProjectionMatrix(), fT), TT
    }

    function vT(TT, kT, cT, lT) {
      const MT = AT.Zero();
      return tT(TT, kT, cT, MT, lT), MT
    }

    function tT(TT, kT, cT, lT, KT) {
      if (!yT.d) return TT;
      const OT = TT.Dv();
      if (!KT && !(KT = TT.activeCamera) && !(KT = TT.cameraToUseForPointers)) throw new Error("Active camera not set");
      const fT = KT.viewport,
        xT = OT.getRenderHeight(),
        {
          x: IT,
          y: AT,
          width: CT,
          height: jT
        } = fT.toGlobal(OT.getRenderWidth(), xT),
        vT = MT.d.Identity(),
        tT = 1 / OT.getHardwareScalingLevel();
      return kT = kT * tT - IT, cT = cT * tT - (xT - AT - jT), lT.update(kT, cT, CT, jT, vT, vT, KT.getProjectionMatrix()), TT
    }

    function hT(TT, kT, cT, lT, MT, KT, OT, yT) {
      return NT(TT, cT, lT, kT(lT, cT.enableDistantPicking), MT, KT, OT, yT)
    }

    function NT(TT, kT, cT, lT, MT, KT, OT, yT) {
      const fT = kT.intersects(lT, MT, OT, KT, cT, yT);
      return fT && fT.hit ? !MT && null != TT && fT.distance >= TT.distance ? null : fT : null
    }

    function QT(TT, kT) {
      return "InstancedLinesMesh" === TT || "LinesMesh" === TT ? kT.intersectionThreshold : 0
    }

    function ST(TT) {
      const kT = TT.getClassName();
      if ("GreasedLineMesh" === kT) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const cT = TT.rawBoundingInfo;
      return {
        rawBoundingInfo: cT,
        intersectionThreshold: cT ? QT(kT, TT) : 0
      }
    }

    function DT(TT, kT, cT, lT, MT) {
      const KT = TT(cT, kT.enableDistantPicking);
      return KT.intersectsSphere(lT.WcT, MT) && KT.intersectsBox(lT.boundingBox, MT) ? KT : null
    }

    function aT(TT, kT, cT, lT, KT, OT) {
      let fT = null;
      const xT = !!(TT.activeCameras && TT.activeCameras.length > 1 && TT.cameraToUseForPointers !== TT.activeCamera),
        AT = TT.cameraToUseForPointers || TT.activeCamera,
        CT = IT.internalPickerForMesh || hT,
        jT = CT === hT;
      for (let yT = 0; yT < TT.meshes.length; yT++) {
        const IT = TT.meshes[yT];
        if (cT) {
          if (!cT(IT, -1)) continue
        } else if (!IT.isEnabled() || !IT.isVisible || !IT.Vt) continue;
        const vT = xT && IT.isWorldMatrixCameraDependent(),
          tT = IT.computeWorldMatrix(vT, AT);
        if (IT.hasThinInstances && IT.XTT) {
          const TT = CT(fT, kT, IT, tT, !0, !0, OT);
          if (TT) {
            if (KT) return TT;
            const {
              rawBoundingInfo: yT,
              intersectionThreshold: xT
            } = ST(IT), AT = IT._thinInstanceDataStorage.matrixData;
            if (AT) {
              const TT = MT.h.Matrix[0],
                vT = MT.h.Matrix[1],
                hT = Math.min(IT.w6, AT.length >> 4);
              for (let QT = 0; QT < hT; QT++) {
                if (cT && !cT(IT, QT)) continue;
                MT.d.FromArrayToRef(AT, QT << 4, TT), TT.multiplyToRef(tT, vT);
                const hT = jT && yT ? DT(kT, IT, vT, yT, xT) : null;
                if (jT && yT && !hT) continue;
                const ST = jT && hT ? NT(fT, IT, vT, hT, lT, KT, OT, !0) : CT(fT, kT, IT, vT, lT, KT, OT, !0);
                if (ST && (fT = ST, fT.thinInstanceIndex = QT, lT)) return fT
              }
            }
          }
        } else {
          const TT = CT(fT, kT, IT, tT, lT, KT, OT);
          if (TT && (fT = TT, lT)) return fT
        }
      }
      return fT || new yT.d
    }

    function FT(TT, kT, cT, lT) {
      if (!yT.d) return null;
      const KT = [],
        OT = !!(TT.activeCameras && TT.activeCameras.length > 1 && TT.cameraToUseForPointers !== TT.activeCamera),
        fT = TT.cameraToUseForPointers || TT.activeCamera,
        xT = IT.internalPickerForMesh || hT,
        AT = xT === hT;
      for (let yT = 0; yT < TT.meshes.length; yT++) {
        const IT = TT.meshes[yT];
        if (cT) {
          if (!cT(IT, -1)) continue
        } else if (!IT.isEnabled() || !IT.isVisible || !IT.Vt) continue;
        const CT = OT && IT.isWorldMatrixCameraDependent(),
          jT = IT.computeWorldMatrix(CT, fT);
        if (IT.hasThinInstances && IT.XTT) {
          if (xT(null, kT, IT, jT, !0, !0, lT)) {
            const {
              rawBoundingInfo: TT,
              intersectionThreshold: OT
            } = ST(IT), yT = IT._thinInstanceDataStorage.matrixData;
            if (yT) {
              const fT = MT.h.Matrix[0],
                CT = MT.h.Matrix[1],
                vT = Math.min(IT.w6, yT.length >> 4);
              for (let tT = 0; tT < vT; tT++) {
                if (cT && !cT(IT, tT)) continue;
                MT.d.FromArrayToRef(yT, tT << 4, fT), fT.multiplyToRef(jT, CT);
                const vT = AT && TT ? DT(kT, IT, CT, TT, OT) : null;
                if (AT && TT && !vT) continue;
                const hT = AT && vT ? NT(null, IT, CT, vT, !1, !1, lT, !0) : xT(null, kT, IT, CT, !1, !1, lT, !0);
                hT && (hT.thinInstanceIndex = tT, KT.push(hT))
              }
            }
          }
        } else {
          const TT = xT(null, kT, IT, jT, !1, !1, lT);
          TT && KT.push(TT)
        }
      }
      return KT
    }

    function rT(TT, kT, cT, lT, KT, OT) {
      if (!yT.d) return null;
      const fT = aT(TT, (lT => (TT._tempPickingRay || (TT._tempPickingRay = AT.Zero()), jT(TT, kT, cT, lT, TT._tempPickingRay, OT || null), TT._tempPickingRay)), lT, KT, !0);
      return fT && (fT.ray = CT(TT, kT, cT, MT.d.Identity(), OT || null)), fT
    }

    function PT(TT, kT, cT, lT, KT, OT, yT) {
      const fT = aT(TT, ((lT, MT) => (TT._tempPickingRay || (TT._tempPickingRay = AT.Zero()), jT(TT, kT, cT, lT, TT._tempPickingRay, OT || null, !1, MT), TT._tempPickingRay)), lT, KT, !1, yT);
      return fT && (fT.ray = CT(TT, kT, cT, MT.d.Identity(), OT || null)), fT
    }

    function wT(TT, kT, cT, lT, KT) {
      const OT = aT(TT, (cT => (TT._pickWithRayInverseMatrix || (TT._pickWithRayInverseMatrix = MT.d.Identity()), cT.invertToRef(TT._pickWithRayInverseMatrix), TT._cachedRayForTransform || (TT._cachedRayForTransform = AT.Zero()), AT.TransformToRef(kT, TT._pickWithRayInverseMatrix, TT._cachedRayForTransform), TT._cachedRayForTransform)), cT, lT, !1, KT);
      return OT && (OT.ray = kT), OT
    }

    function mT(TT, kT, cT, lT, MT, KT) {
      return FT(TT, (lT => CT(TT, kT, cT, lT, MT || null)), lT, KT)
    }

    function bT(TT, kT, cT, lT) {
      return FT(TT, (cT => (TT._pickWithRayInverseMatrix || (TT._pickWithRayInverseMatrix = MT.d.Identity()), cT.invertToRef(TT._pickWithRayInverseMatrix), TT._cachedRayForTransform || (TT._cachedRayForTransform = AT.Zero()), AT.TransformToRef(kT, TT._pickWithRayInverseMatrix, TT._cachedRayForTransform), TT._cachedRayForTransform)), cT, lT)
    }

    function zT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        lT = arguments.length > 3 ? arguments[3] : void 0,
        KT = arguments.length > 4 ? arguments[4] : void 0;
      lT || (lT = TT.getWorldMatrix()), kT.length = cT, KT ? kT.origin.UkT(KT) : kT.origin.UkT(TT.position);
      const OT = MT.h.Fv[2];
      OT.set(0, 0, TT._scene.useRightHandedSystem ? -1 : 1);
      const yT = MT.h.Fv[3];
      return MT.m.TransformNormalToRef(OT, lT, yT), MT.m.NormalizeToRef(yT, kT.direction), kT
    }

    function JT(TT, kT) {
      kT && (kT.prototype.getForwardRay = function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        return zT(this, new AT(MT.m.Zero(), MT.m.Zero(), TT), TT, kT, cT)
      }, kT.prototype.getForwardRayToRef = function(TT) {
        return zT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), TT && (xT.b._IsPickingAvailable = !0, TT.prototype.createPickingRay = function(TT, kT, cT, lT) {
        return CT(this, TT, kT, cT, lT, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    AT._TmpVector3 = (0, KT.e)(6, MT.m.Zero), AT._RayDistant = AT.Zero(), AT._Smallnum = 1e-8, AT._Rayl = 1e9
  },
  41154: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT.E
    });
    var lT = cT(39720),
      MT = cT(39841),
      KT = cT(41156);
    let OT = !1;
    OT || (OT = !0, (0, KT.b)(lT.f, MT.c), lT.f.prototype.createPickingRayToRef = function(TT, kT, cT, lT, MT) {
      let OT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, KT.m)(this, TT, kT, cT, lT, MT, OT, yT)
    }, lT.f.prototype.createPickingRayInCameraSpace = function(TT, kT, cT) {
      return (0, KT.i)(this, TT, kT, cT)
    }, lT.f.prototype.createPickingRayInCameraSpaceToRef = function(TT, kT, cT, lT) {
      return (0, KT.e)(this, TT, kT, cT, lT)
    }, lT.f.prototype.pickWithBoundingInfo = function(TT, kT, cT, lT, MT) {
      return (0, KT.w)(this, TT, kT, cT, lT, MT)
    }, lT.f.prototype.gC = function(TT, kT, cT, lT, MT, OT) {
      let yT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, KT.A)(this, TT, kT, cT, lT, MT, OT, yT)
    }, lT.f.prototype.pickWithRay = function(TT, kT, cT, lT) {
      return (0, KT.z)(this, TT, kT, cT, lT)
    }, lT.f.prototype.multiPick = function(TT, kT, cT, lT, MT) {
      return (0, KT.u)(this, TT, kT, cT, lT, MT)
    }, lT.f.prototype.multiPickWithRay = function(TT, kT, cT) {
      return (0, KT.q)(this, TT, kT, cT)
    })
  },
  41158: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => IT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(36892),
      OT = cT(39883),
      yT = cT(41164),
      fT = cT(39846),
      xT = cT(36949);
    let IT = (() => {
        var TT;
        let kT, cT, fT, xT, IT, AT, CT, jT, vT = yT.c,
          tT = [],
          hT = [],
          NT = [],
          QT = [],
          ST = [],
          DT = [],
          aT = [],
          FT = [],
          rT = [],
          PT = [],
          wT = [],
          mT = [],
          bT = [];
        return TT = class extends vT {
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
          constructor(TT, kT, cT, MT) {
            super(TT, cT, MT), this._shadowFrustumSize = ((0, lT.h)(this, tT), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, lT.h)(this, hT, !0), this.autoCalcShadowZBounds = ((0, lT.h)(this, NT), (0, lT.h)(this, QT, !1)), this._orthoLeft = ((0, lT.h)(this, ST), (0, lT.h)(this, DT, Number.MAX_VALUE)), this._orthoRight = ((0, lT.h)(this, aT), (0, lT.h)(this, FT, Number.MIN_VALUE)), this._orthoTop = ((0, lT.h)(this, rT), (0, lT.h)(this, PT, Number.MIN_VALUE)), this._orthoBottom = ((0, lT.h)(this, wT), (0, lT.h)(this, mT, Number.MAX_VALUE)), (0, lT.h)(this, bT), this.position = kT.scale(-1), this.direction = kT
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return OT.d.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(TT, kT, cT) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(TT) : this._setDefaultAutoExtendShadowProjectionMatrix(TT, kT, cT)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(TT) {
            const kT = this.NJ().activeCamera;
            KT.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : kT ? kT.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : kT ? kT.maxZ : 1e4, TT, this.NJ().Dv().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(TT, kT, cT) {
            const lT = this.NJ().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const TT = KT.m.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let lT = Number.MAX_VALUE,
                MT = -Number.MAX_VALUE;
              for (let OT = 0; OT < cT.length; OT++) {
                const yT = cT[OT];
                if (!yT) continue;
                const fT = yT.DH().boundingBox;
                for (let cT = 0; cT < fT.vectorsWorld.length; cT++) KT.m.TransformCoordinatesToRef(fT.vectorsWorld[cT], kT, TT), TT.x < this._orthoLeft && (this._orthoLeft = TT.x), TT.y < this._orthoBottom && (this._orthoBottom = TT.y), TT.x > this._orthoRight && (this._orthoRight = TT.x), TT.y > this._orthoTop && (this._orthoTop = TT.y), this.autoCalcShadowZBounds && (TT.z < lT && (lT = TT.z), TT.z > MT && (MT = TT.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = lT, this._shadowMaxZ = MT)
            }
            const MT = this._orthoRight - this._orthoLeft,
              OT = this._orthoTop - this._orthoBottom,
              yT = void 0 !== this.shadowMinZ ? this.shadowMinZ : lT?.minZ || 0,
              fT = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : lT?.maxZ || 1e4,
              xT = this.NJ().Dv().QcT;
            KT.d.OrthoOffCenterLHToRef(this._orthoLeft - MT * this.shadowOrthoScale, this._orthoRight + MT * this.shadowOrthoScale, this._orthoBottom - OT * this.shadowOrthoScale, this._orthoTop + OT * this.shadowOrthoScale, xT ? fT : yT, xT ? yT : fT, TT, this.NJ().Dv().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(TT, kT) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, kT), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, kT), this)
          }
          transferToNodeMaterialEffect(TT, kT) {
            return this.computeTransformedInformation() ? (TT.setFloat3(kT, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (TT.setFloat3(kT, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(TT) {
            const kT = this._scene.Dv();
            return !kT.QcT && kT.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(TT) {
            const kT = this._scene.Dv();
            return kT.QcT && kT.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(TT, kT) {
            TT["DIRLIGHT" + kT] = !0
          }
        }, (() => {
          const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(vT[Symbol.metadata] ?? null) : void 0;
          kT = [(0, MT.J)()], cT = [(0, MT.J)()], fT = [(0, MT.J)()], xT = [(0, MT.J)()], IT = [(0, MT.J)("orthoLeft")], AT = [(0, MT.J)("orthoRight")], CT = [(0, MT.J)("orthoTop")], jT = [(0, MT.J)("orthoBottom")], (0, lT.e)(TT, null, kT, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: TT => "shadowFrustumSize" in TT,
              get: TT => TT.shadowFrustumSize
            },
            metadata: KT
          }, null, tT), (0, lT.e)(TT, null, cT, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "shadowOrthoScale" in TT,
              get: TT => TT.shadowOrthoScale
            },
            metadata: KT
          }, null, tT), (0, lT.e)(null, null, fT, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: TT => "autoUpdateExtends" in TT,
              get: TT => TT.autoUpdateExtends,
              set: (TT, kT) => {
                TT.autoUpdateExtends = kT
              }
            },
            metadata: KT
          }, hT, NT), (0, lT.e)(null, null, xT, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: TT => "autoCalcShadowZBounds" in TT,
              get: TT => TT.autoCalcShadowZBounds,
              set: (TT, kT) => {
                TT.autoCalcShadowZBounds = kT
              }
            },
            metadata: KT
          }, QT, ST), (0, lT.e)(null, null, IT, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: TT => "_orthoLeft" in TT,
              get: TT => TT._orthoLeft,
              set: (TT, kT) => {
                TT._orthoLeft = kT
              }
            },
            metadata: KT
          }, DT, aT), (0, lT.e)(null, null, AT, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: TT => "_orthoRight" in TT,
              get: TT => TT._orthoRight,
              set: (TT, kT) => {
                TT._orthoRight = kT
              }
            },
            metadata: KT
          }, FT, rT), (0, lT.e)(null, null, CT, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: TT => "_orthoTop" in TT,
              get: TT => TT._orthoTop,
              set: (TT, kT) => {
                TT._orthoTop = kT
              }
            },
            metadata: KT
          }, PT, wT), (0, lT.e)(null, null, jT, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: TT => "_orthoBottom" in TT,
              get: TT => TT._orthoBottom,
              set: (TT, kT) => {
                TT._orthoBottom = kT
              }
            },
            metadata: KT
          }, mT, bT), KT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KT
          })
        })(), TT
      })(),
      AT = !1;
    AT || (AT = !0, fT.b.AddNodeConstructor("Light_Type_1", ((TT, kT) => () => new IT(TT, KT.m.Zero(), kT))), (0, xT.g)("BABYLON.DirectionalLight", IT))
  },
  41173: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => Bk
    });
    var lT = cT(38546),
      MT = cT(36932),
      KT = cT(36892),
      OT = cT(39782),
      yT = cT(41180),
      fT = cT(36925),
      xT = cT(39900),
      IT = cT(37093),
      AT = cT(38548),
      CT = cT(38507),
      jT = cT(36937);
    class vT {
      constructor() {
        this.direction1 = new KT.m(0, 1, 0), this.direction2 = new KT.m(0, 1, 0)
      }
      startDirectionFunction(TT, kT, cT, lT) {
        const MT = (0, jT.RandomRange)(this.direction1.x, this.direction2.x),
          OT = (0, jT.RandomRange)(this.direction1.y, this.direction2.y),
          yT = (0, jT.RandomRange)(this.direction1.z, this.direction2.z);
        lT ? kT.I5(MT, OT, yT) : KT.m.TransformNormalFromFloatsToRef(MT, OT, yT, TT, kT)
      }
      startPositionFunction(TT, kT, cT, lT) {
        lT ? kT.I5(0, 0, 0) : KT.m.TransformCoordinatesFromFloatsToRef(0, 0, 0, TT, kT)
      }
      clone() {
        const TT = new vT;
        return CT.d.DeepCopy(this, TT), TT
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
        return TT.type = this.getClassName(), TT.direction1 = this.direction1.acT(), TT.direction2 = this.direction2.acT(), TT
      }
      parse(TT) {
        KT.m.FromArrayToRef(TT.direction1, 0, this.direction1), KT.m.FromArrayToRef(TT.direction2, 0, this.direction2)
      }
    }
    class tT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = TT, this.radiusRange = kT, this.directionRandomizer = cT
      }
      startDirectionFunction(TT, kT, cT, lT) {
        const MT = cT.position.subtract(TT.getTranslation()).normalize(),
          OT = (0, jT.RandomRange)(0, this.directionRandomizer),
          yT = (0, jT.RandomRange)(0, this.directionRandomizer),
          fT = (0, jT.RandomRange)(0, this.directionRandomizer);
        MT.x += OT, MT.y += yT, MT.z += fT, MT.normalize(), lT ? kT.UkT(MT) : KT.m.TransformNormalFromFloatsToRef(MT.x, MT.y, MT.z, TT, kT)
      }
      startPositionFunction(TT, kT, cT, lT) {
        const MT = this.radius - (0, jT.RandomRange)(0, this.radius * this.radiusRange),
          OT = (0, jT.RandomRange)(0, 1),
          yT = (0, jT.RandomRange)(0, 2 * Math.PI),
          fT = Math.acos(2 * OT - 1),
          xT = MT * Math.cos(yT) * Math.sin(fT),
          IT = MT * Math.cos(fT),
          AT = MT * Math.sin(yT) * Math.sin(fT);
        lT ? kT.I5(xT, Math.abs(IT), AT) : KT.m.TransformCoordinatesFromFloatsToRef(xT, Math.abs(IT), AT, TT, kT)
      }
      clone() {
        const TT = new tT(this.radius, this.directionRandomizer);
        return CT.d.DeepCopy(this, TT), TT
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
    class hT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = TT, this.radiusRange = kT, this.directionRandomizer = cT
      }
      startDirectionFunction(TT, kT, cT, lT) {
        const MT = cT.position.subtract(TT.getTranslation()).normalize(),
          OT = (0, jT.RandomRange)(0, this.directionRandomizer),
          yT = (0, jT.RandomRange)(0, this.directionRandomizer),
          fT = (0, jT.RandomRange)(0, this.directionRandomizer);
        MT.x += OT, MT.y += yT, MT.z += fT, MT.normalize(), lT ? kT.UkT(MT) : KT.m.TransformNormalFromFloatsToRef(MT.x, MT.y, MT.z, TT, kT)
      }
      startPositionFunction(TT, kT, cT, lT) {
        const MT = this.radius - (0, jT.RandomRange)(0, this.radius * this.radiusRange),
          OT = (0, jT.RandomRange)(0, 1),
          yT = (0, jT.RandomRange)(0, 2 * Math.PI),
          fT = Math.acos(2 * OT - 1),
          xT = MT * Math.cos(yT) * Math.sin(fT),
          IT = MT * Math.cos(fT),
          AT = MT * Math.sin(yT) * Math.sin(fT);
        lT ? kT.I5(xT, IT, AT) : KT.m.TransformCoordinatesFromFloatsToRef(xT, IT, AT, TT, kT)
      }
      clone() {
        const TT = new hT(this.radius, this.directionRandomizer);
        return CT.d.DeepCopy(this, TT), TT
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
    class NT extends hT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new KT.m(0, 1, 0),
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KT.m(0, 1, 0);
        super(TT), this.direction1 = kT, this.direction2 = cT
      }
      startDirectionFunction(TT, kT, cT, lT) {
        const MT = (0, jT.RandomRange)(this.direction1.x, this.direction2.x),
          OT = (0, jT.RandomRange)(this.direction1.y, this.direction2.y),
          yT = (0, jT.RandomRange)(this.direction1.z, this.direction2.z);
        lT ? kT.I5(MT, OT, yT) : KT.m.TransformNormalFromFloatsToRef(MT, OT, yT, TT, kT)
      }
      clone() {
        const TT = new NT(this.radius, this.direction1, this.direction2);
        return CT.d.DeepCopy(this, TT), TT
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
        return TT.direction1 = this.direction1.acT(), TT.direction2 = this.direction2.acT(), TT
      }
      parse(TT) {
        super.parse(TT), KT.m.FromArrayToRef(TT.direction1, 0, this.direction1), KT.m.FromArrayToRef(TT.direction2, 0, this.direction2)
      }
    }
    var QT = cT(38505);
    class ST {
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
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = cT, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = kT, this.radius = TT
      }
      startDirectionFunction(TT, kT, cT, lT) {
        const MT = cT.position.subtract(TT.getTranslation()).normalize(),
          OT = (0, jT.RandomRange)(0, this.directionRandomizer),
          yT = (0, jT.RandomRange)(0, this.directionRandomizer),
          fT = (0, jT.RandomRange)(0, this.directionRandomizer);
        MT.x += OT, MT.y += yT, MT.z += fT, MT.normalize(), lT ? kT.UkT(MT) : KT.m.TransformNormalFromFloatsToRef(MT.x, MT.y, MT.z, TT, kT)
      }
      startPositionFunction(TT, kT, cT, lT) {
        const MT = (0, jT.RandomRange)(0, 2 * Math.PI);
        let OT;
        this.emitFromSpawnPointOnly ? OT = 1e-4 : (OT = (0, jT.RandomRange)(0, this.heightRange), OT = 1 - OT * OT);
        let yT = this._radius - (0, jT.RandomRange)(0, this._radius * this.radiusRange);
        yT *= OT;
        const fT = yT * Math.sin(MT),
          xT = yT * Math.cos(MT),
          IT = OT * this._height;
        if (lT) return kT.x = fT, kT.y = IT, void(kT.z = xT);
        KT.m.TransformCoordinatesFromFloatsToRef(fT, IT, xT, TT, kT)
      }
      clone() {
        const TT = new ST(this._radius, this._angle, this.directionRandomizer);
        return CT.d.DeepCopy(this, TT), TT
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
    class DT extends ST {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KT.m(0, 1, 0),
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new KT.m(0, 1, 0);
        super(TT, kT), this.direction1 = cT, this.direction2 = lT
      }
      startDirectionFunction(TT, kT, cT, lT) {
        const MT = (0, jT.RandomRange)(this.direction1.x, this.direction2.x),
          OT = (0, jT.RandomRange)(this.direction1.y, this.direction2.y),
          yT = (0, jT.RandomRange)(this.direction1.z, this.direction2.z);
        lT ? kT.I5(MT, OT, yT) : KT.m.TransformNormalFromFloatsToRef(MT, OT, yT, TT, kT)
      }
      clone() {
        const TT = new DT(this.radius, this.angle, this.direction1, this.direction2);
        return CT.d.DeepCopy(this, TT), TT
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
        return TT.direction1 = this.direction1.acT(), TT.direction2 = this.direction2.acT(), TT
      }
      parse(TT) {
        super.parse(TT), KT.m.FromArrayToRef(TT.direction1, 0, this.direction1), KT.m.FromArrayToRef(TT.direction2, 0, this.direction2)
      }
    }
    class aT {
      get mesh() {
        return this._mesh
      }
      set mesh(TT) {
        this._mesh !== TT && (this._mesh = TT, TT ? (this._indices = TT.FcT(), this._positions = TT.getVerticesData(OT.l.PositionKind), this._normals = TT.getVerticesData(OT.l.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = KT.m.Zero(), this._mesh = null, this.direction1 = new KT.m(0, 1, 0), this.direction2 = new KT.m(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = TT
      }
      startDirectionFunction(TT, kT, cT, lT) {
        if (this.useMeshNormalsForDirection && this._normals) return void KT.m.TransformNormalToRef(this._storedNormal, TT, kT);
        const MT = (0, jT.RandomRange)(this.direction1.x, this.direction2.x),
          OT = (0, jT.RandomRange)(this.direction1.y, this.direction2.y),
          yT = (0, jT.RandomRange)(this.direction1.z, this.direction2.z);
        lT ? kT.I5(MT, OT, yT) : KT.m.TransformNormalFromFloatsToRef(MT, OT, yT, TT, kT)
      }
      startPositionFunction(TT, kT, cT, lT) {
        if (!this._indices || !this._positions) return;
        const MT = 3 * (Math.random() * (this._indices.length / 3) | 0),
          OT = Math.random(),
          yT = Math.random() * (1 - OT),
          fT = 1 - OT - yT,
          xT = this._indices[MT],
          IT = this._indices[MT + 1],
          AT = this._indices[MT + 2],
          CT = KT.h.Fv[0],
          jT = KT.h.Fv[1],
          vT = KT.h.Fv[2],
          tT = KT.h.Fv[3];
        KT.m.FromArrayToRef(this._positions, 3 * xT, CT), KT.m.FromArrayToRef(this._positions, 3 * IT, jT), KT.m.FromArrayToRef(this._positions, 3 * AT, vT), tT.x = OT * CT.x + yT * jT.x + fT * vT.x, tT.y = OT * CT.y + yT * jT.y + fT * vT.y, tT.z = OT * CT.z + yT * jT.z + fT * vT.z, lT ? kT.I5(tT.x, tT.y, tT.z) : KT.m.TransformCoordinatesFromFloatsToRef(tT.x, tT.y, tT.z, TT, kT), this.useMeshNormalsForDirection && this._normals && (KT.m.FromArrayToRef(this._normals, 3 * xT, CT), KT.m.FromArrayToRef(this._normals, 3 * IT, jT), KT.m.FromArrayToRef(this._normals, 3 * AT, vT), this._storedNormal.x = OT * CT.x + yT * jT.x + fT * vT.x, this._storedNormal.y = OT * CT.y + yT * jT.y + fT * vT.y, this._storedNormal.z = OT * CT.z + yT * jT.z + fT * vT.z)
      }
      clone() {
        const TT = new aT(this.mesh);
        return CT.d.DeepCopy(this, TT), TT
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
        return TT.type = this.getClassName(), TT.direction1 = this.direction1.acT(), TT.direction2 = this.direction2.acT(), TT.meshId = this.mesh?.id, TT.useMeshNormalsForDirection = this.useMeshNormalsForDirection, TT
      }
      parse(TT, kT) {
        KT.m.FromArrayToRef(TT.direction1, 0, this.direction1), KT.m.FromArrayToRef(TT.direction2, 0, this.direction2), TT.meshId && kT && (this.mesh = kT.getLastMeshById(TT.meshId)), this.useMeshNormalsForDirection = TT.useMeshNormalsForDirection
      }
    }
    class FT {
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
        const kT = this._attractors.indexOf(TT); - 1 !== kT && this._attractors.splice(kT, 1)
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
        this._useLogarithmicDepth = TT && this.NJ().Dv().getCaps().fragmentDepthSupported
      }
      NJ() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(TT) {
        switch (TT) {
          case FT.BLENDMODE_MULTIPLYADD:
            return;
          case FT.BLENDMODE_ADD:
            TT = 1;
            break;
          case FT.BLENDMODE_ONEONE:
            TT = 6;
            break;
          case FT.BLENDMODE_STANDARD:
            TT = 2;
            break;
          case FT.BLENDMODE_MULTIPLY:
            TT = 4;
            break;
          case FT.BLENDMODE_SUBTRACT:
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
      addEmitRateGradient(TT, kT, cT) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, TT, kT, cT), this
      }
      removeEmitRateGradient(TT) {
        return this._removeFactorGradient(this._emitRateGradients, TT), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : KT.m.Zero()
      }
      set direction1(TT) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = TT)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : KT.m.Zero()
      }
      set direction2(TT) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = TT)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : KT.m.Zero()
      }
      set minEmitBox(TT) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = TT)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : KT.m.Zero()
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
      _addFactorGradient(TT, kT, cT, MT) {
        const KT = new lT.l(kT, cT, MT);
        TT.push(KT), TT.sort(((TT, kT) => TT.gradient < kT.gradient ? -1 : TT.gradient > kT.gradient ? 1 : 0))
      }
      _removeFactorGradient(TT, kT) {
        if (!TT) return;
        let cT = 0;
        for (const lT of TT) {
          if (lT.gradient === kT) {
            TT.splice(cT, 1);
            break
          }
          cT++
        }
      }
      _removeGradientAndTexture(TT, kT, cT) {
        if (!kT) return this;
        let lT = 0;
        for (const MT of kT) {
          if (MT.gradient === TT) {
            kT.splice(lT, 1);
            break
          }
          lT++
        }
        return cT && cT.dispose(), this
      }
      constructor(TT) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = KT.m.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new KT.m(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = FT.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new KT.i(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new KT.m(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = KT.m.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new IT.g(1, 1, 1, 1), this.color2 = new IT.g(1, 1, 1, 1), this.colorDead = new IT.g(0, 0, 0, 1), this.textureMask = new IT.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new xT.c, this.id = TT, this.name = TT
      }
      createPointEmitter(TT, kT) {
        const cT = function(TT, kT) {
          const cT = new vT;
          return cT.direction1 = TT, cT.direction2 = kT, cT
        }(TT, kT);
        return this.particleEmitterType = cT, cT
      }
      createHemisphericEmitter() {
        const TT = function() {
          return new tT(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = TT, TT
      }
      createSphereEmitter() {
        const TT = function() {
          return new hT(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = TT, TT
      }
      createDirectedSphereEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new KT.m(0, 1, 0),
            cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KT.m(0, 1, 0);
          return new NT(TT, kT, cT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new KT.m(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KT.m(0, 1, 0));
        return this.particleEmitterType = TT, TT
      }
      createCylinderEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new QT.d(TT, kT, cT, lT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = TT, TT
      }
      createDirectedCylinderEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new KT.m(0, 1, 0),
            MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new KT.m(0, 1, 0);
          return new QT.c(TT, kT, cT, lT, MT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new KT.m(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new KT.m(0, 1, 0));
        return this.particleEmitterType = TT, TT
      }
      createConeEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new ST(TT, kT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = TT, TT
      }
      createDirectedConeEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KT.m(0, 1, 0),
            lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new KT.m(0, 1, 0);
          return new DT(TT, kT, cT, lT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new KT.m(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new KT.m(0, 1, 0));
        return this.particleEmitterType = TT, TT
      }
      createBoxEmitter(TT, kT, cT, lT) {
        const MT = new AT.b;
        return this.particleEmitterType = MT, this.direction1 = TT, this.direction2 = kT, this.minEmitBox = cT, this.maxEmitBox = lT, MT
      }
      createMeshEmitter() {
        const TT = function() {
          return new aT(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = TT, TT
      }
    }
    FT.BLENDMODE_ONEONE = 0, FT.BLENDMODE_STANDARD = 1, FT.BLENDMODE_ADD = 2, FT.BLENDMODE_MULTIPLY = 3, FT.BLENDMODE_MULTIPLYADD = 4, FT.BLENDMODE_SUBTRACT = -1;
    class rT {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new IT.g(0, 0, 0, 0), this.currentColor2 = new IT.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = KT.m.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class PT {
      constructor(TT) {
        this.particleSystem = TT, this.position = KT.m.Zero(), this.direction = KT.m.Zero(), this.color = new IT.g(0, 0, 0, 0), this.colorStep = new IT.g(0, 0, 0, 0), this.initialColor = new IT.g(0, 0, 0, 0), this.colorDead = new IT.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new KT.i(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new rT, this.id = PT._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let TT = this.age,
          kT = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === kT ? (kT = 1, TT = this._properties.randomCellOffset) : TT += this._properties.randomCellOffset);
        const cT = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let lT;
        lT = this._properties.initialSpriteCellLoop ? (0, jT.Clamp)(TT * kT % this.lifeTime / this.lifeTime) : (0, jT.Clamp)(TT * kT / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + lT * cT | 0
      }
      _inheritParticleInfoToSubEmitter(TT) {
        if (TT.particleSystem.emitter.position) {
          const kT = TT.particleSystem.emitter;
          if (kT.position.UkT(this.position), TT.inheritDirection) {
            const TT = KT.h.Fv[0];
            this.direction.normalizeToRef(TT), kT.setDirection(TT, 0, Math.PI / 2)
          }
        } else {
          TT.particleSystem.emitter.UkT(this.position)
        }
        this.direction.scaleToRef(TT.inheritedVelocityAmount / 2, KT.h.Fv[0]), TT.particleSystem._inheritedVelocityOffset.UkT(KT.h.Fv[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const TT of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(TT)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = PT._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(TT) {
        TT.position.UkT(this.position), this._properties.initialDirection ? TT._properties.initialDirection ? TT._properties.initialDirection.UkT(this._properties.initialDirection) : TT._properties.initialDirection = this._properties.initialDirection.clone() : TT._properties.initialDirection = null, TT.direction.UkT(this.direction), this._properties.localPosition && (TT._properties.localPosition ? TT._properties.localPosition.UkT(this._properties.localPosition) : TT._properties.localPosition = this._properties.localPosition.clone()), TT.color.UkT(this.color), TT.colorStep.UkT(this.colorStep), TT.initialColor.UkT(this.initialColor), TT.colorDead.UkT(this.colorDead), TT.lifeTime = this.lifeTime, TT.age = this.age, TT._properties.randomCellOffset = this._properties.randomCellOffset, TT.size = this.size, TT.scale.UkT(this.scale), TT.angle = this.angle, TT.angularSpeed = this.angularSpeed, TT.particleSystem = this.particleSystem, TT.cellIndex = this.cellIndex, TT.id = this.id, TT._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (TT._properties.currentColorGradient = this._properties.currentColorGradient, TT._properties.currentColor1.UkT(this._properties.currentColor1), TT._properties.currentColor2.UkT(this._properties.currentColor2)), this._properties.currentSizeGradient && (TT._properties.currentSizeGradient = this._properties.currentSizeGradient, TT._properties.currentSize1 = this._properties.currentSize1, TT._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (TT._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, TT._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, TT._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (TT._properties.currentVelocityGradient = this._properties.currentVelocityGradient, TT._properties.currentVelocity1 = this._properties.currentVelocity1, TT._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (TT._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, TT._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, TT._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (TT._properties.currentDragGradient = this._properties.currentDragGradient, TT._properties.currentDrag1 = this._properties.currentDrag1, TT._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (TT._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, TT._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, TT._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (TT.remapData && this.remapData ? TT.remapData.UkT(this.remapData) : TT.remapData = new KT.o(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (TT._properties.randomNoiseCoordinates1 && TT._properties.randomNoiseCoordinates2 ? (TT._properties.randomNoiseCoordinates1.UkT(this._properties.randomNoiseCoordinates1), TT._properties.randomNoiseCoordinates2.UkT(this._properties.randomNoiseCoordinates2)) : (TT._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), TT._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), TT.metadata = this.metadata
      }
    }
    PT._Count = 0;
    var wT = cT(40709);
    class mT {
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
      constructor(TT, kT, cT, lT) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = kT, this.rY = TT, this._scene = cT, this._host = lT, this._activeTargets = [], kT._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            tM: this._getCorrectLoopMode()
          }, this._animation.dataType === wT.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = KT.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const TT = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, TT)
        }
        if (this.rY instanceof Array) {
          let TT = 0;
          for (const kT of this.rY) this._preparePath(kT, TT), this._getOriginalValues(TT), TT++;
          this._targetIsArray = !0
        } else this._preparePath(this.rY), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const MT = kT.getEvents();
        if (MT && MT.length > 0)
          for (const KT of MT) this._events.push(KT._clone());
        this._enableBlending = TT && TT.animationPropertiesOverride ? TT.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cT = this._animation.targetPropertyPath;
        if (cT.length > 1) {
          let lT = TT;
          for (let TT = 0; TT < cT.length - 1; TT++) {
            const kT = cT[TT];
            if (lT = lT[kT], void 0 === lT) throw new Error(`Invalid property (${kT}) in property path (${cT.join(".")})`)
          }
          this._targetPath = cT[cT.length - 1], this._activeTargets[kT] = lT
        } else this._targetPath = cT[0], this._activeTargets[kT] = TT;
        if (void 0 === this._activeTargets[kT][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${cT.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.rY instanceof Array) {
            let TT = 0;
            for (const kT of this.rY) void 0 !== this._originalValue[TT] && this._setValue(kT, this._activeTargets[TT], this._originalValue[TT], -1, TT), TT++
          } else void 0 !== this._originalValue[0] && this._setValue(this.rY, this._directTarget, this._originalValue[0], -1, 0);
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
      setValue(TT, kT) {
        if (this._targetIsArray)
          for (let cT = 0; cT < this.rY.length; cT++) {
            const lT = this.rY[cT];
            this._setValue(lT, this._activeTargets[cT], TT, kT, cT)
          } else this._setValue(this.rY, this._directTarget, TT, kT, 0)
      }
      _getOriginalValues() {
        let TT, kT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const cT = this._activeTargets[kT];
        if (wT.b.InheritOriginalValueFromActiveAnimations) {
          const TT = this._scene._activeAnimatables;
          for (let lT = 0; lT < TT.length; lT++) {
            const MT = TT[lT]._runtimeAnimations;
            for (let TT = 0; TT < MT.length; TT++) {
              const lT = MT[TT];
              if (lT !== this && lT._targetPath === this._targetPath)
                for (let TT = 0; TT < lT._activeTargets.length; TT++)
                  if (lT._activeTargets[TT] === cT && void 0 !== lT._originalValue[TT]) return void(lT._originalValue[TT] && lT._originalValue[TT].clone ? this._originalValue[kT] = lT._originalValue[TT].clone() : this._originalValue[kT] = lT._originalValue[TT])
            }
          }
        }
        TT = cT.getLocalMatrix && "_matrix" === this._targetPath ? cT.getLocalMatrix() : cT[this._targetPath], TT && TT.clone ? this._originalValue[kT] = TT.clone() : this._originalValue[kT] = TT
      }
      _registerTargetForLateAnimationBinding(TT, kT) {
        const cT = TT.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(cT), cT._lateAnimationHolders || (cT._lateAnimationHolders = {}), cT._lateAnimationHolders[TT.targetPath] || (cT._lateAnimationHolders[TT.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: kT
        }), TT.isAdditive ? (cT._lateAnimationHolders[TT.targetPath].additiveAnimations.push(TT), cT._lateAnimationHolders[TT.targetPath].totalAdditiveWeight += TT.weight) : (cT._lateAnimationHolders[TT.targetPath].animations.push(TT), cT._lateAnimationHolders[TT.targetPath].totalWeight += TT.weight)
      }
      _setValue(TT, kT, cT, lT, MT) {
        const OT = this._scene._animationWrites,
          yT = this._scene._animationWriteCount++;
        let fT = OT[yT];
        if (fT || (fT = OT[yT] = {
            runtimeAnimation: this,
            target: TT,
            weight: lT,
            additive: !1,
            blendingFactor: 1,
            yh: !1
          }), fT.runtimeAnimation = this, fT.target = TT, fT.weight = lT, fT.additive = this.isAdditive, fT.yh = !1, this._currentActiveTarget = kT, this._weight = lT, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const TT = kT[this._targetPath];
            TT.clone ? this._originalBlendValue = TT.clone() : this._originalBlendValue = TT
          }
          this._originalBlendValue.m ? wT.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? KT.d.DecomposeLerpToRef(this._originalBlendValue, cT, this._blendingFactor, this._currentValue) : this._currentValue = KT.d.DecomposeLerp(this._originalBlendValue, cT, this._blendingFactor) : this._currentValue ? KT.d.LerpToRef(this._originalBlendValue, cT, this._blendingFactor, this._currentValue) : this._currentValue = KT.d.Lerp(this._originalBlendValue, cT, this._blendingFactor) : this._currentValue = wT.b._UniversalLerp(this._originalBlendValue, cT, this._blendingFactor);
          const lT = TT && TT.animationPropertiesOverride ? TT.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          fT.blendingFactor = this._blendingFactor, this._blendingFactor += lT
        } else fT.blendingFactor = 1, this._currentValue ? this._currentValue.UkT ? this._currentValue.UkT(cT) : this._currentValue = cT : this._currentValue = cT?.clone ? cT.clone() : cT; - 1 !== lT ? this._registerTargetForLateAnimationBinding(this, this._originalValue[MT]) : this._animationState.tM === wT.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[MT], kT[this._targetPath]) : kT[this._targetPath] = this._originalValue[MT] + this._currentValue : kT[this._targetPath] = this._currentValue, TT.pTT && TT.pTT(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.rY && this.rY.animationPropertiesOverride) {
          return "MorphTarget" === this.rY.getClassName?.() && null == this.rY._animationPropertiesOverride ? this._animation.tM : this.rY.animationPropertiesOverride.tM
        }
        return this._animation.tM
      }
      goToFrame(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const cT = this._animation.getKeys();
        TT < cT[0].frame ? TT = cT[0].frame : TT > cT[cT.length - 1].frame && (TT = cT[cT.length - 1].frame);
        const lT = this._events;
        if (lT.length)
          for (let KT = 0; KT < lT.length; KT++) lT[KT].onlyOnce || (lT[KT].isDone = lT[KT].frame < TT);
        this._currentFrame = TT;
        const MT = this._animation._interpolate(TT, this._animationState);
        this.setValue(MT, kT)
      }
      _prepareForSpeedRatioChange(TT) {
        const kT = this._previousElapsedTime * (this._animation.framePerSecond * TT) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - kT
      }
      animate(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const OT = this._animation,
          yT = OT.targetPropertyPath;
        if (!yT || yT.length < 1) return this._stopped = !0, !1;
        let fT, xT = !0;
        const IT = this._events;
        let AT;
        if (this._coreRuntimeAnimation) AT = cT - kT, fT = this._coreRuntimeAnimation.currentFrame, this._currentFrame = fT, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let KT;
          (kT < this._minFrame || kT > this._maxFrame) && (kT = this._minFrame), (cT < this._minFrame || cT > this._maxFrame) && (cT = this._maxFrame), AT = cT - kT;
          let yT = TT * (OT.framePerSecond * MT) / 1e3 + this._absoluteFrameOffset,
            CT = 0,
            jT = !1;
          const vT = lT && this._animationState.tM === wT.b.ANIMATIONLOOPMODE_YOYO;
          if (vT) {
            const TT = (yT - kT) / AT,
              cT = Math.sin(TT * Math.PI);
            yT = Math.abs(cT) * AT + kT;
            const lT = cT >= 0 ? 1 : -1;
            this._yoyoDirection !== lT && (jT = !0), this._yoyoDirection = lT
          }
          if (this._previousElapsedTime = TT, this._previousAbsoluteFrame = yT, !lT && cT >= kT && (yT >= AT && MT > 0 || yT <= 0 && MT < 0)) xT = !1, CT = OT.evaluate(cT);
          else if (!lT && kT >= cT && (yT <= AT && MT < 0 || yT >= 0 && MT > 0)) xT = !1, CT = OT.evaluate(kT);
          else if (this._animationState.tM !== wT.b.ANIMATIONLOOPMODE_CYCLE) {
            const TT = cT.toString() + kT.toString();
            if (!this._offsetsCache[TT]) {
              this._animationState.repeatCount = 0, this._animationState.tM = wT.b.ANIMATIONLOOPMODE_CYCLE;
              const lT = OT._interpolate(kT, this._animationState),
                MT = OT._interpolate(cT, this._animationState);
              switch (this._animationState.tM = this._getCorrectLoopMode(), OT.dataType) {
                case wT.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[TT] = MT - lT;
                  break;
                case wT.b.ANIMATIONTYPE_QUATERNION:
                case wT.b.ANIMATIONTYPE_VECTOR3:
                case wT.b.ANIMATIONTYPE_VECTOR2:
                case wT.b.ANIMATIONTYPE_SIZE:
                case wT.b.ANIMATIONTYPE_COLOR3:
                case wT.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[TT] = MT.subtract(lT)
              }
              this._highLimitsCache[TT] = MT
            }
            CT = this._highLimitsCache[TT], KT = this._offsetsCache[TT]
          }
          if (void 0 === KT) switch (OT.dataType) {
            case wT.b.ANIMATIONTYPE_FLOAT:
              KT = 0;
              break;
            case wT.b.ANIMATIONTYPE_QUATERNION:
              KT = wT.k;
              break;
            case wT.b.ANIMATIONTYPE_VECTOR3:
              KT = wT.u;
              break;
            case wT.b.ANIMATIONTYPE_VECTOR2:
              KT = wT.q;
              break;
            case wT.b.ANIMATIONTYPE_SIZE:
              KT = wT.m;
              break;
            case wT.b.ANIMATIONTYPE_COLOR3:
              KT = wT.e;
              break;
            case wT.b.ANIMATIONTYPE_COLOR4:
              KT = wT.i
          }
          const tT = this._host ? this._host.syncRoot : null;
          let hT, NT = this._playbackFrames,
            QT = !1;
          if (tT) {
            const TT = tT.toFrame - tT.fromFrame,
              cT = tT.masterFrame,
              lT = (cT - tT.fromFrame) / TT;
            fT = kT + AT * lT;
            const MT = tT.getAnimations()[0];
            if (MT && 0 !== TT) {
              const TT = AT * lT,
                kT = MT._playbackTo - MT._playbackFrom;
              if (0 !== kT && MT._playbackFrom <= tT.fromFrame && MT._playbackTo >= tT.toFrame) {
                NT = AT * Math.round((MT._playbackFrames - (MT._currentFrame - MT._playbackFrom)) / kT) + TT
              } else QT = (cT - this._playbackSyncMasterFrame) * (MT._playbackFrames - this._playbackSyncMasterPlayed) < 0, NT = TT;
              QT = QT || MT._playbackJumped, this._playbackSyncMasterPlayed = MT._playbackFrames, this._playbackSyncMasterFrame = cT
            }
          } else fT = yT > 0 && kT > cT || yT < 0 && kT < cT ? xT && 0 !== AT ? cT + yT % AT : kT : xT && 0 !== AT ? kT + yT % AT : cT;
          if (!vT && (MT > 0 && this.currentFrame > fT || MT < 0 && this.currentFrame < fT) || vT && jT) {
            this._onLoop();
            for (let TT = 0; TT < IT.length; TT++) IT[TT].onlyOnce || (IT[TT].isDone = !1);
            this._animationState.key = MT > 0 ? 0 : OT.getKeys().length - 1
          }
          if (this._currentFrame = fT, this._animationState.repeatCount = 0 === AT ? 0 : yT / AT | 0, this._animationState.highLimitValue = CT, this._animationState.offsetValue = KT, this._playbackFrom = kT, this._playbackTo = cT, this._playbackJumped = QT, this._playbackSyncRoot = tT, tT) hT = NT;
          else if (xT) hT = vT ? fT === kT && yT === cT ? AT : fT - kT : yT;
          else {
            const TT = 0 !== AT ? Math.floor(this._playbackFrames / AT) : 0;
            hT = (fT === cT ? TT + 1 : TT) * AT
          }
          this._playbackFrames = hT, this._playbackProgress = this._animationState.tM === wT.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? AT : hT
        }
        const CT = OT._interpolate(fT, this._animationState);
        if (this.setValue(CT, KT), IT.length)
          for (let jT = 0; jT < IT.length; jT++)
            if (AT >= 0 && fT >= IT[jT].frame && IT[jT].frame >= kT || AT < 0 && fT <= IT[jT].frame && IT[jT].frame <= kT) {
              const TT = IT[jT];
              TT.isDone || (TT.onlyOnce && (IT.splice(jT, 1), jT--), TT.isDone = !0, TT.action(fT))
            } return xT || (this._stopped = !0), xT
      }
    }
    var bT = cT(39521);
    class zT {
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
        for (let kT = 0; kT < this._runtimeAnimations.length; kT++) {
          this._runtimeAnimations[kT]._prepareForSpeedRatioChange(TT)
        }
        this._speedRatio = TT, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          KT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          OT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          yT = arguments.length > 6 ? arguments[6] : void 0,
          fT = arguments.length > 7 ? arguments[7] : void 0,
          xT = arguments.length > 8 ? arguments[8] : void 0,
          IT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          AT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = kT, this.fromFrame = cT, this.toFrame = lT, this.loopAnimation = KT, this.onAnimationEnd = yT, this.onAnimationLoop = xT, this.isAdditive = IT, this.playOrder = AT, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.FQ = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new MT.b, this.onAnimationLoopObservable = new MT.b, this._scene = TT, fT && this.appendAnimations(kT, fT), this._speedRatio = OT, TT._activeAnimatables.push(this)
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
      appendAnimations(TT, kT) {
        for (let cT = 0; cT < kT.length; cT++) {
          const lT = kT[cT],
            MT = new mT(TT, lT, this._scene, this);
          MT._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(MT)
        }
      }
      getAnimationByTargetProperty(TT) {
        const kT = this._runtimeAnimations;
        for (let cT = 0; cT < kT.length; cT++)
          if (kT[cT].animation.targetProperty === TT) return kT[cT].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(TT) {
        const kT = this._runtimeAnimations;
        for (let cT = 0; cT < kT.length; cT++)
          if (kT[cT].animation.targetProperty === TT) return kT[cT];
        return null
      }
      reset() {
        const TT = this._runtimeAnimations;
        for (let kT = 0; kT < TT.length; kT++) TT[kT].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(TT) {
        const kT = this._runtimeAnimations;
        for (let cT = 0; cT < kT.length; cT++) kT[cT].animation.enableBlending = !0, kT[cT].animation.blendingSpeed = TT
      }
      disableBlending() {
        const TT = this._runtimeAnimations;
        for (let kT = 0; kT < TT.length; kT++) TT[kT].animation.enableBlending = !1
      }
      goToFrame(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = this._runtimeAnimations;
        if (cT[0]) {
          const kT = cT[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? cT[0].currentFrame;
          const lT = 0 === this.speedRatio ? 0 : (TT - this._frameToSyncFromJump) / kT * 1e3 / this.speedRatio;
          this._manualJumpDelay = -lT
        }
        for (let lT = 0; lT < cT.length; lT++) cT[lT].goToFrame(TT, kT ? this._weight : -1);
        this._goToFrame = TT
      }
      get paused() {
        return this.FQ
      }
      pause() {
        this.FQ || (this.FQ = !0)
      }
      restart() {
        this.FQ = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (TT || kT) {
          const MT = this._scene._activeAnimatables.indexOf(this);
          if (MT > -1) {
            const KT = this._runtimeAnimations;
            for (let cT = KT.length - 1; cT >= 0; cT--) {
              const lT = KT[cT];
              TT && lT.animation.name != TT || (kT && !kT(lT.target) || (lT.dispose(), KT.splice(cT, 1)))
            }
            0 == KT.length && (cT || this._scene._activeAnimatables.splice(MT, 1), lT || this._raiseOnAnimationEnd())
          }
        } else {
          const TT = this._scene._activeAnimatables.indexOf(this);
          if (TT > -1) {
            cT || this._scene._activeAnimatables.splice(TT, 1);
            const kT = this._runtimeAnimations;
            for (let TT = 0; TT < kT.length; TT++) kT[TT].dispose();
            this._runtimeAnimations.length = 0, lT || this._raiseOnAnimationEnd()
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
        if (this.FQ) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = TT), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = TT, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += TT - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !zT.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let kT = !1;
        const cT = this._runtimeAnimations;
        let lT;
        for (lT = 0; lT < cT.length; lT++) {
          const MT = cT[lT].animate(TT - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          kT = kT || MT
        }
        if (this.animationStarted = kT, !kT) {
          if (this.disposeOnEnd)
            for (lT = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(lT, 1), lT = 0; lT < cT.length; lT++) cT[lT].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return kT
      }
    }

    function JT(TT) {
      if (0 === TT.totalWeight && 0 === TT.totalAdditiveWeight) return TT.originalValue;
      let kT = 1;
      const cT = KT.h.Fv[0],
        lT = KT.h.Fv[1],
        MT = KT.h.Quaternion[0];
      let OT = 0;
      const yT = TT.animations[0],
        fT = TT.originalValue;
      let xT, IT = !1;
      if (TT.totalWeight < 1) xT = 1 - TT.totalWeight, fT.decompose(lT, MT, cT);
      else {
        if (OT = 1, kT = TT.totalWeight, xT = yT.weight / kT, 1 == xT) {
          if (!TT.totalAdditiveWeight) return yT.currentValue;
          IT = !0
        }
        yT.currentValue.decompose(lT, MT, cT)
      }
      if (!IT) {
        lT.scaleInPlace(xT), cT.scaleInPlace(xT), MT.scaleInPlace(xT);
        for (let yT = OT; yT < TT.animations.length; yT++) {
          const OT = TT.animations[yT];
          if (0 === OT.weight) continue;
          xT = OT.weight / kT;
          const fT = KT.h.Fv[2],
            IT = KT.h.Fv[3],
            AT = KT.h.Quaternion[1];
          OT.currentValue.decompose(IT, AT, fT), IT.scaleAndAddToRef(xT, lT), AT.scaleAndAddToRef(KT.f.Dot(MT, AT) > 0 ? xT : -xT, MT), fT.scaleAndAddToRef(xT, cT)
        }
        MT.normalize()
      }
      for (let CT = 0; CT < TT.additiveAnimations.length; CT++) {
        const kT = TT.additiveAnimations[CT];
        if (0 === kT.weight) continue;
        const OT = KT.h.Fv[2],
          yT = KT.h.Fv[3],
          fT = KT.h.Quaternion[1];
        kT.currentValue.decompose(yT, fT, OT), yT.multiplyToRef(lT, yT), KT.m.LerpToRef(lT, yT, kT.weight, lT), MT.multiplyToRef(fT, fT), KT.f.SlerpToRef(MT, fT, kT.weight, MT), OT.scaleAndAddToRef(kT.weight, cT)
      }
      const AT = yT ? yT._animationState.workValue : KT.h.Matrix[0].clone();
      return KT.d.ComposeToRef(lT, MT, cT, AT), AT
    }

    function oT(TT, kT) {
      if (0 === TT.totalWeight && 0 === TT.totalAdditiveWeight) return kT;
      const cT = TT.animations[0],
        lT = TT.originalValue;
      let MT = kT;
      if (0 === TT.totalWeight && TT.totalAdditiveWeight > 0) MT.UkT(lT);
      else if (1 === TT.animations.length) {
        if (KT.f.SlerpToRef(lT, cT.currentValue, Math.min(1, TT.totalWeight), MT), 0 === TT.totalAdditiveWeight) return MT
      } else if (TT.animations.length > 1) {
        let cT, OT, yT = 1;
        if (TT.totalWeight < 1) {
          const kT = 1 - TT.totalWeight;
          cT = [], OT = [], cT.push(lT), OT.push(kT)
        } else {
          if (2 === TT.animations.length && (KT.f.SlerpToRef(TT.animations[0].currentValue, TT.animations[1].currentValue, TT.animations[1].weight / TT.totalWeight, kT), 0 === TT.totalAdditiveWeight)) return kT;
          cT = [], OT = [], yT = TT.totalWeight
        }
        for (let kT = 0; kT < TT.animations.length; kT++) {
          const lT = TT.animations[kT];
          cT.push(lT.currentValue), OT.push(lT.weight / yT)
        }
        let fT = 0;
        for (let TT = 0; TT < cT.length;) TT ? (fT += OT[TT], KT.f.SlerpToRef(MT, cT[TT], OT[TT] / fT, MT), TT++) : (KT.f.SlerpToRef(cT[TT], cT[TT + 1], OT[TT + 1] / (OT[TT] + OT[TT + 1]), kT), MT = kT, fT = OT[TT] + OT[TT + 1], TT += 2)
      }
      for (let OT = 0; OT < TT.additiveAnimations.length; OT++) {
        const kT = TT.additiveAnimations[OT];
        0 !== kT.weight && (MT.multiplyToRef(kT.currentValue, KT.h.Quaternion[0]), KT.f.SlerpToRef(MT, KT.h.Quaternion[0], kT.weight, MT))
      }
      return MT
    }

    function HT(TT, kT) {
      kT && (kT.prototype.copyAnimationRange = function(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new wT.b(this.name, "_matrix", TT.animations[0].framePerSecond, wT.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const KT = TT.animations[0].getRange(kT);
        if (!KT) return !1;
        const OT = KT.from,
          yT = KT.to,
          fT = TT.animations[0].getKeys(),
          xT = TT.length,
          IT = TT.getParent(),
          AT = this.getParent(),
          CT = lT && IT && xT && this.length && xT !== this.length,
          jT = CT && AT && IT ? AT.length / IT.length : 1,
          vT = lT && !AT && MT && (1 !== MT.x || 1 !== MT.y || 1 !== MT.z),
          tT = this.animations[0].getKeys();
        let hT, NT, QT;
        for (let ST = 0, DT = fT.length; ST < DT; ST++) hT = fT[ST], hT.frame >= OT && hT.frame <= yT && (lT ? (QT = hT.value.clone(), CT ? (NT = QT.getTranslation(), QT.setTranslation(NT.scaleInPlace(jT))) : vT && MT ? (NT = QT.getTranslation(), QT.setTranslation(NT.multiplyInPlace(MT))) : QT = hT.value) : QT = hT.value, tT.push({
          frame: hT.frame + cT,
          value: QT
        }));
        return this.animations[0].createRange(kT, OT + cT, yT + cT), !0
      }), TT && (TT.prototype._animate = function(TT) {
        const kT = this._animationWrites,
          cT = this._animationWriteCount;
        let lT = 0;
        for (let KT = this._animationStepWriteCount; KT < cT; KT++) {
          const TT = kT[KT];
          TT.yh && -1 === TT.weight || (TT.yh = !0, kT[KT] = kT[lT], kT[lT] = TT, lT++)
        }
        for (let KT = lT; KT < cT; KT++) {
          const TT = kT[KT];
          TT.runtimeAnimation = null, TT.target = null
        }
        if (this._animationWriteCount = lT, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const MT = bT.d.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = MT
        }
        this.deltaTime = void 0 !== TT ? TT : this.useConstantAnimationDeltaTime ? 16 : (MT - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = MT;
        const OT = this._activeAnimatables;
        if (0 === OT.length) return;
        this._animationTime += this.deltaTime;
        const yT = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let KT = 0; KT < OT.length; KT++) {
          const TT = OT[KT];
          !TT._animate(yT) && TT.disposeOnEnd && KT--
        }! function(TT) {
          if (TT._registeredForLateAnimationBindings.length) {
            for (let kT = 0; kT < TT._registeredForLateAnimationBindings.length; kT++) {
              const cT = TT._registeredForLateAnimationBindings.data[kT];
              for (const TT in cT._lateAnimationHolders) {
                const kT = cT._lateAnimationHolders[TT],
                  lT = kT.animations[0],
                  MT = kT.originalValue;
                if (void 0 === MT || null === MT) continue;
                const OT = wT.b.AllowMatrixDecomposeForInterpolation && MT.m;
                let yT = cT[TT];
                if (OT) yT = JT(kT);
                else if (void 0 !== MT.w) yT = oT(kT, yT || KT.f.Identity());
                else {
                  let TT = 0,
                    cT = 1;
                  const KT = lT && lT._animationState.tM === wT.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (kT.totalWeight < 1) yT = KT ? MT.clone ? MT.clone() : MT : lT && MT.scale ? MT.scale(1 - kT.totalWeight) : lT ? MT * (1 - kT.totalWeight) : MT.clone ? MT.clone() : MT;
                  else if (lT) {
                    cT = kT.totalWeight;
                    const OT = lT.weight / cT;
                    yT = 1 !== OT ? lT.currentValue.scale ? lT.currentValue.scale(OT) : lT.currentValue * OT : (kT.animations.length > 1 || kT.additiveAnimations.length > 0) && lT.currentValue.clone ? lT.currentValue.clone() : lT.currentValue, KT && (yT.addToRef ? yT.addToRef(MT, yT) : yT += MT), TT = 1
                  }
                  for (let lT = TT; lT < kT.animations.length; lT++) {
                    const TT = kT.animations[lT],
                      MT = TT.weight / cT;
                    MT && (TT.currentValue.scaleAndAddToRef ? TT.currentValue.scaleAndAddToRef(MT, yT) : yT += TT.currentValue * MT)
                  }
                  for (let lT = 0; lT < kT.additiveAnimations.length; lT++) {
                    const TT = kT.additiveAnimations[lT],
                      cT = TT.weight;
                    cT && (TT.currentValue.scaleAndAddToRef ? TT.currentValue.scaleAndAddToRef(cT, yT) : yT += TT.currentValue * cT)
                  }
                }
                cT[TT] = yT
              }
              cT._lateAnimationHolders = {}
            }
            TT._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, TT.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((TT, kT) => TT.playOrder - kT.playOrder))
      }, TT.prototype.beginWeightedAnimation = function(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          OT = arguments.length > 6 ? arguments[6] : void 0,
          yT = arguments.length > 7 ? arguments[7] : void 0,
          fT = arguments.length > 8 ? arguments[8] : void 0,
          xT = arguments.length > 9 ? arguments[9] : void 0,
          IT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const AT = this.beginAnimation(TT, kT, cT, MT, KT, OT, yT, !1, fT, xT, IT);
        return AT.weight = lT, AT
      }, TT.prototype.beginAnimation = function(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          KT = arguments.length > 5 ? arguments[5] : void 0,
          OT = arguments.length > 6 ? arguments[6] : void 0,
          yT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          fT = arguments.length > 8 ? arguments[8] : void 0,
          xT = arguments.length > 9 ? arguments[9] : void 0,
          IT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (MT < 0) {
          const TT = kT;
          kT = cT, cT = TT, MT = -MT
        }
        kT > cT && (MT = -MT), yT && this.stopAnimation(TT, void 0, fT), OT || (OT = new zT(this, TT, kT, cT, lT, MT, KT, void 0, xT, IT));
        const AT = !fT || fT(TT);
        if (TT.animations && AT && OT.appendAnimations(TT, TT.animations), TT.getAnimatables) {
          const IT = TT.getAnimatables();
          for (let TT = 0; TT < IT.length; TT++) this.beginAnimation(IT[TT], kT, cT, lT, MT, KT, OT, yT, fT, xT)
        }
        return OT.reset(), OT
      }, TT.prototype.beginHierarchyAnimation = function(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          OT = arguments.length > 6 ? arguments[6] : void 0,
          yT = arguments.length > 7 ? arguments[7] : void 0,
          fT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          xT = arguments.length > 9 ? arguments[9] : void 0,
          IT = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const AT = TT.getDescendants(kT),
          CT = [];
        CT.push(this.beginAnimation(TT, cT, lT, MT, KT, OT, yT, fT, xT, void 0, IT));
        for (const jT of AT) CT.push(this.beginAnimation(jT, cT, lT, MT, KT, OT, yT, fT, xT, void 0, IT));
        return CT
      }, TT.prototype.beginDirectAnimation = function(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (KT < 0) {
          const TT = cT;
          cT = lT, lT = TT, KT = -KT
        }
        cT > lT && (KT = -KT);
        return new zT(this, TT, cT, lT, MT, KT, arguments.length > 6 ? arguments[6] : void 0, kT, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, TT.prototype.beginDirectHierarchyAnimation = function(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        let xT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const IT = TT.getDescendants(kT),
          AT = [];
        AT.push(this.beginDirectAnimation(TT, cT, lT, MT, KT, OT, yT, fT, xT));
        for (const CT of IT) AT.push(this.beginDirectAnimation(CT, cT, lT, MT, KT, OT, yT, fT, xT));
        return AT
      }, TT.prototype.getAnimatableByTarget = function(TT) {
        for (let kT = 0; kT < this._activeAnimatables.length; kT++)
          if (this._activeAnimatables[kT].target === TT) return this._activeAnimatables[kT];
        return null
      }, TT.prototype.getAllAnimatablesByTarget = function(TT) {
        const kT = [];
        for (let cT = 0; cT < this._activeAnimatables.length; cT++) this._activeAnimatables[cT].target === TT && kT.push(this._activeAnimatables[cT]);
        return kT
      }, TT.prototype.stopAnimation = function(TT, kT, cT) {
        const lT = this.getAllAnimatablesByTarget(TT);
        for (const MT of lT) MT.stop(kT, cT)
      }, TT.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let TT = 0; TT < this._activeAnimatables.length; TT++) this._activeAnimatables[TT].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const TT of this.animationGroups) TT.stop()
      })
    }
    zT.ProcessPausedAnimatables = !1;
    var eT, GT = cT(36910),
      VT = cT(39846),
      ET = cT(39500);
    class ZT extends VT.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(TT) {
        (TT.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.UkT(TT), this._markAsDirtyAndDecompose())
      }
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          OT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          yT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(TT, kT.NJ(), !1), this.name = TT, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = kT, this._localMatrix = lT?.clone() ?? KT.d.Identity(), this._restMatrix = MT ?? this._localMatrix.clone(), this._bindMatrix = OT ?? this._localMatrix.clone(), this._index = yT, this._absoluteMatrix = new KT.d, this._absoluteBindMatrix = new KT.d, this._absoluteInverseBindMatrix = new KT.d, this._finalMatrix = new KT.d, kT.bones.push(this), this.setParent(cT, !1), this._updateAbsoluteBindMatrices()
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
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== TT) {
          if (this.parent) {
            const TT = this.parent.children.indexOf(this); - 1 !== TT && this.parent.children.splice(TT, 1)
          }
          this._parentNode = TT, this.parent && this.parent.children.push(this), kT && this._updateAbsoluteBindMatrices(), this.pTT()
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
        this._restMatrix.UkT(TT)
      }
      setRestPose(TT) {
        this.setRestMatrix(TT)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(TT) {
        this.X3(TT)
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
          const TT = KT.h.Fv[0],
            kT = KT.h.Quaternion[0],
            cT = KT.h.Fv[1];
          this.getRestMatrix().decompose(TT, kT, cT), this._linkedTransformNode.position.UkT(cT), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? KT.f.Identity(), this._linkedTransformNode.rotationQuaternion.UkT(kT), this._linkedTransformNode.GA.UkT(TT)
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
        this._decompose(), this.fTT.UkT(TT), this._markAsDirtyAndCompose()
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
      get GA() {
        return this.getScale()
      }
      set GA(TT) {
        this.setScale(TT)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = KT.m.Zero(), this._localRotation = KT.f.Zero(), this.fTT = KT.m.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.fTT))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, KT.d.ComposeToRef(this._localScaling, this._localRotation, this.fTT, this._localMatrix)) : this._needToCompose = !1)
      }
      X3(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.UkT(TT), kT && this._updateAbsoluteBindMatrices(), cT ? this._matrix = TT : this.pTT()
      }
      _updateAbsoluteBindMatrices(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (TT || (TT = this._bindMatrix), this.parent ? TT.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.UkT(TT), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), kT)
          for (let cT = 0; cT < this.children.length; cT++) this.children[cT]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      pTT() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.pTT(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.pTT(), this._needToDecompose = !0
      }
      _updatePosition(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const MT = this.getLocalMatrix();
        if (0 == kT) lT ? (MT.addAtIndex(12, TT.x), MT.addAtIndex(13, TT.y), MT.addAtIndex(14, TT.z)) : MT.setTranslationFromFloats(TT.x, TT.y, TT.z);
        else {
          const kT = ZT._TmpMats[0],
            OT = ZT._TmpVecs[0];
          this.parent ? (kT.UkT(this.parent.getAbsoluteMatrix()), cT && kT.multiplyToRef(cT.getWorldMatrix(), kT)) : KT.d.IdentityToRef(kT), lT && kT.setTranslationFromFloats(0, 0, 0), kT.invert(), KT.m.TransformCoordinatesToRef(TT, kT, OT), lT ? (MT.addAtIndex(12, OT.x), MT.addAtIndex(13, OT.y), MT.addAtIndex(14, OT.z)) : MT.setTranslationFromFloats(OT.x, OT.y, OT.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(TT, kT, cT, !0)
      }
      setPosition(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(TT, kT, cT, !1)
      }
      setAbsolutePosition(TT, kT) {
        this.setPosition(TT, 1, kT)
      }
      scale(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const MT = this.getLocalMatrix(),
          OT = ZT._TmpMats[0];
        KT.d.ScalingToRef(TT, kT, cT, OT), OT.multiplyToRef(MT, MT), OT.invert();
        for (const KT of this.children) {
          const lT = KT.getLocalMatrix();
          lT.multiplyToRef(OT, lT), lT.multiplyAtIndex(12, TT), lT.multiplyAtIndex(13, kT), lT.multiplyAtIndex(14, cT), KT._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), lT)
          for (const KT of this.children) KT.scale(TT, kT, cT, lT)
      }
      setScale(TT) {
        this._decompose(), this._localScaling.UkT(TT), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(TT) {
        this._decompose(), TT.UkT(this._localScaling)
      }
      setYawPitchRoll(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          MT = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === lT) {
          const OT = ZT._TmpQuat;
          return KT.f.RotationYawPitchRollToRef(TT, kT, cT, OT), void this.setRotationQuaternion(OT, lT, MT)
        }
        const OT = ZT._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(OT, MT)) return;
        const yT = ZT._TmpMats[1];
        KT.d.RotationYawPitchRollToRef(TT, kT, cT, yT), OT.multiplyToRef(yT, yT), this._rotateWithMatrix(yT, lT, MT)
      }
      rotate(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 ? arguments[3] : void 0;
        const MT = ZT._TmpMats[0];
        MT.setTranslationFromFloats(0, 0, 0), KT.d.RotationAxisToRef(TT, kT, MT), this._rotateWithMatrix(MT, cT, lT)
      }
      setAxisAngle(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === cT) {
          const MT = ZT._TmpQuat;
          return KT.f.RotationAxisToRef(TT, kT, MT), void this.setRotationQuaternion(MT, cT, lT)
        }
        const MT = ZT._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(MT, lT)) return;
        const OT = ZT._TmpMats[1];
        KT.d.RotationAxisToRef(TT, kT, OT), MT.multiplyToRef(OT, OT), this._rotateWithMatrix(OT, cT, lT)
      }
      setRotation(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(TT.y, TT.x, TT.z, kT, cT)
      }
      setRotationQuaternion(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === kT) return this._decompose(), this._localRotation.UkT(TT), void this._markAsDirtyAndCompose();
        const lT = ZT._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(lT, cT)) return;
        const MT = ZT._TmpMats[1];
        KT.d.FromQuaternionToRef(TT, MT), lT.multiplyToRef(MT, MT), this._rotateWithMatrix(MT, kT, cT)
      }
      setRotationMatrix(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === kT) {
          const lT = ZT._TmpQuat;
          return KT.f.FromRotationMatrixToRef(TT, lT), void this.setRotationQuaternion(lT, kT, cT)
        }
        const lT = ZT._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(lT, cT)) return;
        const MT = ZT._TmpMats[1];
        MT.UkT(TT), lT.multiplyToRef(TT, MT), this._rotateWithMatrix(MT, kT, cT)
      }
      _rotateWithMatrix(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const lT = this.getLocalMatrix(),
          MT = lT.m[12],
          KT = lT.m[13],
          OT = lT.m[14],
          yT = this.getParent(),
          fT = ZT._TmpMats[3],
          xT = ZT._TmpMats[4];
        yT && 1 == kT ? (cT ? (fT.UkT(cT.getWorldMatrix()), yT.getAbsoluteMatrix().multiplyToRef(fT, fT)) : fT.UkT(yT.getAbsoluteMatrix()), xT.UkT(fT), xT.invert(), lT.multiplyToRef(fT, lT), lT.multiplyToRef(TT, lT), lT.multiplyToRef(xT, lT)) : 1 == kT && cT ? (fT.UkT(cT.getWorldMatrix()), xT.UkT(fT), xT.invert(), lT.multiplyToRef(fT, lT), lT.multiplyToRef(TT, lT), lT.multiplyToRef(xT, lT)) : lT.multiplyToRef(TT, lT), lT.setTranslationFromFloats(MT, KT, OT), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(TT, kT) {
        const cT = ZT._TmpMats[2];
        return TT.UkT(this.getAbsoluteMatrix()), kT ? (TT.multiplyToRef(kT.getWorldMatrix(), TT), KT.d.ScalingToRef(kT.GA.x, kT.GA.y, kT.GA.z, cT)) : KT.d.IdentityToRef(cT), TT.invert(), !isNaN(TT.m[0]) && (cT.multiplyAtIndex(0, this._scalingDeterminant), TT.multiplyToRef(cT, TT), !0)
      }
      kN() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cT = KT.m.Zero();
        return this.getPositionToRef(TT, kT, cT), cT
      }
      getPositionToRef() {
        let TT = arguments.length > 1 ? arguments[1] : void 0,
          kT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const TT = this.getLocalMatrix();
          kT.x = TT.m[12], kT.y = TT.m[13], kT.z = TT.m[14]
        } else {
          const cT = ZT._TmpMats[0].UkT(this.getAbsoluteMatrix());
          TT && cT.multiplyToRef(TT.getWorldMatrix(), cT), kT.x = cT.m[12], kT.y = cT.m[13], kT.z = cT.m[14]
        }
      }
      getAbsolutePosition() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const kT = KT.m.Zero();
        return this.getPositionToRef(1, TT, kT), kT
      }
      getAbsolutePositionToRef(TT, kT) {
        this.getPositionToRef(1, TT, kT)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.UkT(this._localMatrix);
          const TT = this._skeleton.getPoseMatrix();
          TT && this._absoluteMatrix.multiplyToRef(TT, this._absoluteMatrix)
        }
        const TT = this.children,
          kT = TT.length;
        for (let cT = 0; cT < kT; cT++) TT[cT].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      rU(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cT = KT.m.Zero();
        return this.getDirectionToRef(TT, kT, cT), cT
      }
      getDirectionToRef(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const lT = ZT._TmpMats[0].UkT(this.getAbsoluteMatrix());
        kT && lT.multiplyToRef(kT.getWorldMatrix(), lT), KT.m.TransformNormalToRef(TT, lT, cT), cT.normalize()
      }
      getRotation() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cT = KT.m.Zero();
        return this.getRotationToRef(TT, kT, cT), cT
      }
      getRotationToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const lT = ZT._TmpQuat;
        this.getRotationQuaternionToRef(TT, kT, lT), lT.toEulerAnglesToRef(cT)
      }
      getRotationQuaternion() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cT = KT.f.Identity();
        return this.getRotationQuaternionToRef(TT, kT, cT), cT
      }
      getRotationQuaternionToRef() {
        let TT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), kT.UkT(this._localRotation);
        else {
          const cT = ZT._TmpMats[0],
            lT = this.getAbsoluteMatrix();
          TT ? lT.multiplyToRef(TT.getWorldMatrix(), cT) : cT.UkT(lT), cT.multiplyAtIndex(0, this._scalingDeterminant), cT.multiplyAtIndex(1, this._scalingDeterminant), cT.multiplyAtIndex(2, this._scalingDeterminant), cT.decompose(void 0, kT, void 0)
        }
      }
      getRotationMatrix() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 ? arguments[1] : void 0;
        const cT = KT.d.Identity();
        return this.getRotationMatrixToRef(TT, kT, cT), cT
      }
      getRotationMatrixToRef() {
        let TT = arguments.length > 1 ? arguments[1] : void 0,
          kT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(kT);
        else {
          const cT = ZT._TmpMats[0],
            lT = this.getAbsoluteMatrix();
          TT ? lT.multiplyToRef(TT.getWorldMatrix(), cT) : cT.UkT(lT), cT.multiplyAtIndex(0, this._scalingDeterminant), cT.multiplyAtIndex(1, this._scalingDeterminant), cT.multiplyAtIndex(2, this._scalingDeterminant), cT.getRotationMatrixToRef(kT)
        }
      }
      getAbsolutePositionFromLocal(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cT = KT.m.Zero();
        return this.getAbsolutePositionFromLocalToRef(TT, kT, cT), cT
      }
      getAbsolutePositionFromLocalToRef(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const lT = ZT._TmpMats[0].UkT(this.getAbsoluteMatrix());
        kT && lT.multiplyToRef(kT.getWorldMatrix(), lT), KT.m.TransformCoordinatesToRef(TT, lT, cT)
      }
      getLocalPositionFromAbsolute(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cT = KT.m.Zero();
        return this.getLocalPositionFromAbsoluteToRef(TT, kT, cT), cT
      }
      getLocalPositionFromAbsoluteToRef(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const lT = ZT._TmpMats[0].UkT(this.getAbsoluteMatrix());
        kT && lT.multiplyToRef(kT.getWorldMatrix(), lT), lT.invert(), KT.m.TransformCoordinatesToRef(TT, lT, cT)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const TT = this._skeleton.bones.indexOf(this);
        if (-1 !== TT && this._skeleton.bones.splice(TT, 1), this._parentNode && this._parentNode.children) {
          const TT = this._parentNode.children,
            kT = TT.indexOf(this); - 1 !== kT && TT.splice(kT, 1)
        }
        super.dispose()
      }
    }
    ZT._TmpVecs = (0, GT.e)(2, KT.m.Zero), ZT._TmpQuat = KT.f.Identity(), ZT._TmpMats = (0, GT.e)(5, KT.d.Identity), (eT = ZT.prototype).copyAnimationRange ?? (eT.copyAnimationRange = (0, ET.f)("Bone", "copyAnimationRange"));
    var uT = cT(39720);
    let XT = !1;
    var dT = cT(39586),
      LT = cT(39936),
      RT = cT(39951),
      gT = cT(39943),
      UT = cT(39764);

    function YT(TT, kT) {
      const cT = (0, jT.RandomRange)(0, 1);
      IT.g.LerpToRef(kT.color1, kT.color2, cT, TT.color)
    }

    function BT(TT, kT) {
      kT.colorDead.subtractToRef(TT.color, kT._colorDiff), kT._colorDiff.scaleToRef(1 / TT.lifeTime, TT.colorStep)
    }

    function WT(TT, kT) {
      TT._properties.currentColorGradient = kT._colorGradients[0], TT._properties.currentColorGradient.getColorToRef(TT.color), TT._properties.currentColor1.UkT(TT.color), kT._colorGradients.length > 1 ? kT._colorGradients[1].getColorToRef(TT._properties.currentColor2) : TT._properties.currentColor2.UkT(TT.color)
    }

    function nT(TT, kT) {
      const cT = kT._colorGradients;
      lT.p.GetCurrentGradient(kT._ratio, cT, ((kT, cT, lT) => {
        kT !== TT._properties.currentColorGradient && (TT._properties.currentColor1.UkT(TT._properties.currentColor2), cT.getColorToRef(TT._properties.currentColor2), TT._properties.currentColorGradient = kT), IT.g.LerpToRef(TT._properties.currentColor1, TT._properties.currentColor2, lT, TT.color), TT.color.a < 0 && (TT.color.a = 0)
      }))
    }

    function pT(TT, kT) {
      TT.colorStep.scaleToRef(kT._scaledUpdateSpeed, kT._scaledColorStep), TT.color.addInPlace(kT._scaledColorStep), TT.color.a < 0 && (TT.color.a = 0)
    }

    function iT(TT, kT) {
      lT.p.GetCurrentGradient(kT._ratio, kT._angularSpeedGradients, ((kT, cT, lT) => {
        kT !== TT._properties.currentAngularSpeedGradient && (TT._properties.currentAngularSpeed1 = TT._properties.currentAngularSpeed2, TT._properties.currentAngularSpeed2 = cT.getFactor(), TT._properties.currentAngularSpeedGradient = kT), TT.angularSpeed = (0, jT.Lerp)(TT._properties.currentAngularSpeed1, TT._properties.currentAngularSpeed2, lT)
      }))
    }

    function qT(TT, kT) {
      TT.angle += TT.angularSpeed * kT._scaledUpdateSpeed
    }

    function sT(TT, kT) {
      kT.particleEmitterType.startDirectionFunction(kT._emitterWorldMatrix, TT.direction, TT, kT.isLocal, kT._emitterInverseWorldMatrix)
    }

    function Tk(TT, kT) {
      kT.startDirectionFunction(kT._emitterWorldMatrix, TT.direction, TT, kT.isLocal)
    }

    function kk(TT, kT) {
      TT._properties.currentVelocityGradient = kT._velocityGradients[0], TT._properties.currentVelocity1 = TT._properties.currentVelocityGradient.getFactor(), kT._velocityGradients.length > 1 ? TT._properties.currentVelocity2 = kT._velocityGradients[1].getFactor() : TT._properties.currentVelocity2 = TT._properties.currentVelocity1
    }

    function ck(TT, kT) {
      TT._properties.currentLimitVelocityGradient = kT._limitVelocityGradients[0], TT._properties.currentLimitVelocity1 = TT._properties.currentLimitVelocityGradient.getFactor(), kT._limitVelocityGradients.length > 1 ? TT._properties.currentLimitVelocity2 = kT._limitVelocityGradients[1].getFactor() : TT._properties.currentLimitVelocity2 = TT._properties.currentLimitVelocity1
    }

    function lk(TT, kT) {
      lT.p.GetCurrentGradient(kT._ratio, kT._velocityGradients, ((kT, cT, lT) => {
        kT !== TT._properties.currentVelocityGradient && (TT._properties.currentVelocity1 = TT._properties.currentVelocity2, TT._properties.currentVelocity2 = cT.getFactor(), TT._properties.currentVelocityGradient = kT), TT._properties.directionScale *= (0, jT.Lerp)(TT._properties.currentVelocity1, TT._properties.currentVelocity2, lT)
      }))
    }

    function Mk(TT, kT) {
      lT.p.GetCurrentGradient(kT._ratio, kT._limitVelocityGradients, ((cT, lT, MT) => {
        cT !== TT._properties.currentLimitVelocityGradient && (TT._properties.currentLimitVelocity1 = TT._properties.currentLimitVelocity2, TT._properties.currentLimitVelocity2 = lT.getFactor(), TT._properties.currentLimitVelocityGradient = cT);
        const KT = (0, jT.Lerp)(TT._properties.currentLimitVelocity1, TT._properties.currentLimitVelocity2, MT);
        TT.direction.length() > KT && TT.direction.scaleInPlace(kT.limitVelocityDamping)
      }))
    }

    function Kk(TT) {
      TT.direction.scaleToRef(TT._properties.directionScale, TT._properties.scaledDirection)
    }

    function Ok(TT, kT) {
      kT.particleEmitterType.startPositionFunction(kT._emitterWorldMatrix, TT.position, TT, kT.isLocal)
    }

    function yk(TT, kT) {
      kT.startPositionFunction(kT._emitterWorldMatrix, TT.position, TT, kT.isLocal)
    }

    function fk(TT, kT) {
      TT._properties.localPosition ? TT._properties.localPosition.UkT(TT.position) : TT._properties.localPosition = TT.position.clone(), KT.m.TransformCoordinatesToRef(TT._properties.localPosition, kT._emitterWorldMatrix, TT.position)
    }

    function xk(TT, kT) {
      kT.isLocal && TT._properties.localPosition ? (TT._properties.localPosition.addInPlace(TT._properties.scaledDirection), KT.m.TransformCoordinatesToRef(TT._properties.localPosition, kT._emitterWorldMatrix, TT.position)) : TT.position.addInPlace(TT._properties.scaledDirection)
    }

    function Ik(TT, kT) {
      TT._properties.currentDragGradient = kT._dragGradients[0], TT._properties.currentDrag1 = TT._properties.currentDragGradient.getFactor(), kT._dragGradients.length > 1 ? TT._properties.currentDrag2 = kT._dragGradients[1].getFactor() : TT._properties.currentDrag2 = TT._properties.currentDrag1
    }

    function Ak(TT, kT) {
      lT.p.GetCurrentGradient(kT._ratio, kT._dragGradients, ((kT, cT, lT) => {
        kT !== TT._properties.currentDragGradient && (TT._properties.currentDrag1 = TT._properties.currentDrag2, TT._properties.currentDrag2 = cT.getFactor(), TT._properties.currentDragGradient = kT);
        const MT = (0, jT.Lerp)(TT._properties.currentDrag1, TT._properties.currentDrag2, lT);
        TT._properties.scaledDirection.scaleInPlace(1 - MT)
      }))
    }

    function Ck(TT, kT) {
      TT._properties.randomNoiseCoordinates1 && TT._properties.randomNoiseCoordinates2 ? (TT._properties.randomNoiseCoordinates1.I5(Math.random(), Math.random(), Math.random()), TT._properties.randomNoiseCoordinates2.I5(Math.random(), Math.random(), Math.random())) : (TT._properties.randomNoiseCoordinates1 = new KT.m(Math.random(), Math.random(), Math.random()), TT._properties.randomNoiseCoordinates2 = new KT.m(Math.random(), Math.random(), Math.random()))
    }

    function jk(TT, kT) {
      const cT = kT._noiseTextureData,
        lT = kT._noiseTextureSize;
      if (cT && lT && TT._properties.randomNoiseCoordinates1 && TT._properties.randomNoiseCoordinates2) {
        const MT = kT._fetchR(TT._properties.randomNoiseCoordinates1.x, TT._properties.randomNoiseCoordinates1.y, lT.width, lT.height, cT),
          OT = kT._fetchR(TT._properties.randomNoiseCoordinates1.z, TT._properties.randomNoiseCoordinates2.x, lT.width, lT.height, cT),
          yT = kT._fetchR(TT._properties.randomNoiseCoordinates2.y, TT._properties.randomNoiseCoordinates2.z, lT.width, lT.height, cT),
          fT = KT.h.Fv[0],
          xT = KT.h.Fv[1];
        fT.I5((2 * MT - 1) * kT.noiseStrength.x, (2 * OT - 1) * kT.noiseStrength.y, (2 * yT - 1) * kT.noiseStrength.z), fT.scaleToRef(kT._tempScaledUpdateSpeed, xT), TT.direction.addInPlace(xT)
      }
    }

    function vk(TT, kT) {
      kT.gravity.scaleToRef(kT._tempScaledUpdateSpeed, kT._scaledGravity), TT.direction.addInPlace(kT._scaledGravity)
    }

    function tk(TT, kT) {
      TT.size = (0, jT.RandomRange)(kT.minSize, kT.maxSize), TT.scale.I5((0, jT.RandomRange)(kT.minScaleX, kT.maxScaleX), (0, jT.RandomRange)(kT.minScaleY, kT.maxScaleY))
    }

    function hk(TT, kT) {
      TT._properties.currentSizeGradient = kT._sizeGradients[0], TT._properties.currentSize1 = TT._properties.currentSizeGradient.getFactor(), TT.size = TT._properties.currentSize1, kT._sizeGradients.length > 1 ? TT._properties.currentSize2 = kT._sizeGradients[1].getFactor() : TT._properties.currentSize2 = TT._properties.currentSize1, TT.scale.I5((0, jT.RandomRange)(kT.minScaleX, kT.maxScaleX), (0, jT.RandomRange)(kT.minScaleY, kT.maxScaleY))
    }

    function Nk(TT, kT) {
      const cT = kT._actualFrame / kT.targetStopDuration;
      lT.p.GetCurrentGradient(cT, kT._startSizeGradients, ((cT, lT, MT) => {
        cT !== kT._currentStartSizeGradient && (kT._currentStartSize1 = kT._currentStartSize2, kT._currentStartSize2 = lT.getFactor(), kT._currentStartSizeGradient = cT);
        const KT = (0, jT.Lerp)(kT._currentStartSize1, kT._currentStartSize2, MT);
        TT.scale.scaleInPlace(KT)
      }))
    }

    function Qk(TT, kT) {
      lT.p.GetCurrentGradient(kT._ratio, kT._sizeGradients, ((kT, cT, lT) => {
        kT !== TT._properties.currentSizeGradient && (TT._properties.currentSize1 = TT._properties.currentSize2, TT._properties.currentSize2 = cT.getFactor(), TT._properties.currentSizeGradient = kT), TT.size = (0, jT.Lerp)(TT._properties.currentSize1, TT._properties.currentSize2, lT)
      }))
    }

    function Sk(TT, kT) {
      TT.remapData = new KT.o(0, 1, 0, 1)
    }

    function Dk(TT, kT) {
      kT._colorRemapGradients && kT._colorRemapGradients.length > 0 && lT.p.GetCurrentGradient(kT._ratio, kT._colorRemapGradients, ((kT, cT, lT) => {
        const MT = (0, jT.Lerp)(kT.factor1, cT.factor1, lT),
          KT = (0, jT.Lerp)(kT.factor2, cT.factor2, lT);
        TT.remapData.x = MT, TT.remapData.y = KT - MT
      })), kT._alphaRemapGradients && kT._alphaRemapGradients.length > 0 && lT.p.GetCurrentGradient(kT._ratio, kT._alphaRemapGradients, ((kT, cT, lT) => {
        const MT = (0, jT.Lerp)(kT.factor1, cT.factor1, lT),
          KT = (0, jT.Lerp)(kT.factor2, cT.factor2, lT);
        TT.remapData.z = MT, TT.remapData.w = KT - MT
      }))
    }

    function ak(TT, kT) {
      const cT = (0, jT.Clamp)(kT._actualFrame / kT.targetStopDuration);
      lT.p.GetCurrentGradient(cT, kT._lifeTimeGradients, ((kT, lT) => {
        const MT = kT,
          KT = lT,
          OT = MT.getFactor(),
          yT = KT.getFactor(),
          fT = (cT - MT.gradient) / (KT.gradient - MT.gradient);
        TT.lifeTime = (0, jT.Lerp)(OT, yT, fT)
      })), kT._emitPower = (0, jT.RandomRange)(kT.minEmitPower, kT.maxEmitPower)
    }

    function Fk(TT, kT) {
      TT.lifeTime = (0, jT.RandomRange)(kT.minLifeTime, kT.maxLifeTime), kT._emitPower = (0, jT.RandomRange)(kT.minEmitPower, kT.maxEmitPower)
    }

    function rk(TT, kT) {
      0 === kT._emitPower ? (TT._properties.initialDirection ? TT._properties.initialDirection.UkT(TT.direction) : TT._properties.initialDirection = TT.direction.clone(), TT.direction.set(0, 0, 0)) : (TT._properties.initialDirection = null, TT.direction.scaleInPlace(kT._emitPower)), TT.direction.addInPlace(kT._inheritedVelocityOffset)
    }

    function Pk(TT, kT) {
      TT.angularSpeed = (0, jT.RandomRange)(kT.minAngularSpeed, kT.maxAngularSpeed), TT.angle = (0, jT.RandomRange)(kT.minInitialRotation, kT.maxInitialRotation)
    }

    function wk(TT, kT) {
      TT._properties.currentAngularSpeedGradient = kT._angularSpeedGradients[0], TT.angularSpeed = TT._properties.currentAngularSpeedGradient.getFactor(), TT._properties.currentAngularSpeed1 = TT.angularSpeed, kT._angularSpeedGradients.length > 1 ? TT._properties.currentAngularSpeed2 = kT._angularSpeedGradients[1].getFactor() : TT._properties.currentAngularSpeed2 = TT._properties.currentAngularSpeed1, TT.angle = (0, jT.RandomRange)(kT.minInitialRotation, kT.maxInitialRotation)
    }

    function mk(TT, kT) {
      TT._properties.initialStartSpriteCellId = kT.startSpriteCellID, TT._properties.initialEndSpriteCellId = kT.endSpriteCellID, TT._properties.initialSpriteCellLoop = kT.spriteCellLoop
    }

    function bk(TT, kT) {
      TT.previousItem = kT.previousItem, TT.nextItem = kT, kT.previousItem && (kT.previousItem.nextItem = TT), kT.previousItem = TT
    }

    function zk(TT, kT) {
      TT.previousItem = kT, TT.nextItem = kT.nextItem, kT.nextItem && (kT.nextItem.previousItem = TT), kT.nextItem = TT
    }

    function Jk(TT) {
      TT.previousItem && (TT.previousItem.nextItem = TT.nextItem), TT.nextItem && (TT.nextItem.previousItem = TT.previousItem)
    }
    var Hk = cT(39997);
    class ek extends FT {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(TT) {
        this._startDirectionFunction !== TT && (this._startDirectionFunction = TT, this._directionCreation.process = TT ? Tk : sT)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(TT) {
        this._startPositionFunction !== TT && (this._startPositionFunction = TT, this._positionCreation.process = TT ? yk : Ok)
      }
      set onDispose(TT) {
        this._onDisposeObserver && this.QJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.QJ.add(TT)
      }
      get VkT() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(TT) {
        this._useRampGradients !== TT && (this._useRampGradients = TT, this._resetEffect(), TT ? (this._rampCreation = {
          process: Sk,
          previousItem: null,
          nextItem: null
        }, zk(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: Dk,
          previousItem: null,
          nextItem: null
        }, zk(this._remapGradientProcessing, this._gravityProcessing))) : (Jk(this._rampCreation), Jk(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(TT) {
        this._isLocal !== TT && (this._isLocal = TT, TT ? (this._isLocalCreation = {
          process: fk,
          previousItem: null,
          nextItem: null
        }, zk(this._isLocalCreation, this._positionCreation)) : Jk(this._isLocalCreation))
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
          process: mk,
          previousItem: null,
          nextItem: null
        }, zk(this._sheetCreation, this._colorDeadCreation)) : Jk(this._sheetCreation), this._reset())
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
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[kT] = new LT.b(this._engine), this._customWrappers[kT].effect = TT, this._customWrappers[kT].drawContext && (this._customWrappers[kT].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new MT.b), this._onBeforeDrawParticlesObservable
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
          if (this._noiseTexture = TT, !TT) return Jk(this._noiseCreation), void Jk(this._noiseProcessing);
          this._noiseCreation = {
            process: Ck,
            previousItem: null,
            nextItem: null
          }, zk(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: jk,
            previousItem: null,
            nextItem: null
          }, zk(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          OT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          yT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          xT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        XT || (XT = !0, HT(uT.f, ZT)), (0, dT.d)(), super(TT), this._emitterInverseWorldMatrix = KT.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new KT.m, this.QJ = new MT.b, this.onStoppedObservable = new MT.b, this.onStartedObservable = new MT.b, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new IT.g(0, 0, 0, 0), this._colorDiff = new IT.g(0, 0, 0, 0), this._scaledGravity = KT.m.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = TT => {}, this.recycleParticle = TT => {
          const kT = this._particles.pop();
          kT !== TT && kT.copyTo(TT), kT.metadata = null, this._stockParticles.push(kT)
        }, this._createParticle = () => {
          let TT;
          return 0 !== this._stockParticles.length ? (TT = this._stockParticles.pop(), TT._reset()) : TT = new PT(this), this._prepareParticle(TT), TT
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = kT, this._epsilon = yT, cT && "Scene" !== cT.getClassName() ? (this._engine = cT, this.defaultProjectionMatrix = KT.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = cT || fT.d.LastCreatedScene, this._engine = this._scene.Dv(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.lF.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: Fk,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Ok,
          previousItem: null,
          nextItem: null
        }, zk(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: sT,
          previousItem: null,
          nextItem: null
        }, zk(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: rk,
          previousItem: null,
          nextItem: null
        }, zk(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: tk,
          previousItem: null,
          nextItem: null
        }, zk(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: Pk,
          previousItem: null,
          nextItem: null
        }, zk(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: YT,
          previousItem: null,
          nextItem: null
        }, zk(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: BT,
          previousItem: null,
          nextItem: null
        }, zk(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, xT || (this._colorProcessing = {
          process: pT,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: qT,
          previousItem: null,
          nextItem: null
        }, zk(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: Kk,
          previousItem: null,
          nextItem: null
        }, zk(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: xk,
          previousItem: null,
          nextItem: null
        }, zk(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: vk,
          previousItem: null,
          nextItem: null
        }, zk(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = OT, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new LT.b(this._engine)
        }, this._customWrappers[0].effect = lT, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new AT.b, this.updateFunction = TT => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((TT => {
            this._noiseTextureData = TT
          })));
          const kT = TT === this._particles;
          for (let cT = 0; cT < TT.length; cT++) {
            const lT = TT[cT];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const MT = lT.age;
            if (lT.age += this._tempScaledUpdateSpeed, lT.age > lT.lifeTime) {
              const TT = lT.age - MT,
                kT = lT.lifeTime - MT;
              this._tempScaledUpdateSpeed = kT * this._tempScaledUpdateSpeed / TT, lT.age = lT.lifeTime
            }
            this._ratio = lT.age / lT.lifeTime, lT._properties.directionScale = this._tempScaledUpdateSpeed;
            let KT = this._updateQueueStart;
            for (; KT;) KT.process(lT, this), KT = KT.nextItem;
            if (this._isAnimationSheetEnabled && !xT && lT.updateCellIndex(), lT._inheritParticleInfoToSubEmitters(), lT.age >= lT.lifeTime) {
              if (this._emitFromParticle(lT), lT._properties.attachedSubEmitters) {
                for (const TT of lT._properties.attachedSubEmitters) TT.particleSystem.disposeOnStop = !0, TT.particleSystem.stop();
                lT._properties.attachedSubEmitters = null
              }
              this.recycleParticle(lT), kT && cT--
            } else;
          }
        }
      }
      serialize(TT) {
        throw new Error("Method not implemented.")
      }
      clone(TT, kT) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = ak : this._lifeTimeCreation.process = Fk
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: Nk,
          previousItem: null,
          nextItem: null
        }, zk(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Jk(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(TT) {
        this.targetStopDuration !== TT && (this._targetStopDuration = TT, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(TT, kT, cT) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, TT, kT, cT), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(TT) {
        return this._removeFactorGradient(this._lifeTimeGradients, TT), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(TT, kT, cT) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = hk, this._sizeGradientProcessing = {
          process: Qk,
          previousItem: null,
          nextItem: null
        }, bk(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, TT, kT, cT), this
      }
      removeSizeGradient(TT) {
        return this._removeFactorGradient(this._sizeGradients, TT), 0 === this._sizeGradients?.length && (Jk(this._sizeGradientProcessing), this._sizeCreation.process = tk), this
      }
      addColorRemapGradient(TT, kT, cT) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, TT, kT, cT), this
      }
      removeColorRemapGradient(TT) {
        return this._removeFactorGradient(this._colorRemapGradients, TT), this
      }
      addAlphaRemapGradient(TT, kT, cT) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, TT, kT, cT), this
      }
      removeAlphaRemapGradient(TT) {
        return this._removeFactorGradient(this._alphaRemapGradients, TT), this
      }
      addAngularSpeedGradient(TT, kT, cT) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = wk, this._angularSpeedGradientProcessing = {
          process: iT,
          previousItem: null,
          nextItem: null
        }, bk(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, TT, kT, cT), this
      }
      removeAngularSpeedGradient(TT) {
        return this._removeFactorGradient(this._angularSpeedGradients, TT), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = Pk, Jk(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(TT, kT, cT) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: kk,
          previousItem: null,
          nextItem: null
        }, zk(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: lk,
          previousItem: null,
          nextItem: null
        }, bk(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, TT, kT, cT), this
      }
      removeVelocityGradient(TT) {
        return this._removeFactorGradient(this._velocityGradients, TT), 0 === this._velocityGradients?.length && (Jk(this._velocityCreation), Jk(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(TT, kT, cT) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: ck,
          previousItem: null,
          nextItem: null
        }, zk(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Mk,
          previousItem: null,
          nextItem: null
        }, zk(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, TT, kT, cT), this
      }
      removeLimitVelocityGradient(TT) {
        return this._removeFactorGradient(this._limitVelocityGradients, TT), 0 === this._limitVelocityGradients?.length && (Jk(this._limitVelocityCreation), Jk(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(TT, kT, cT) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: Ik,
          previousItem: null,
          nextItem: null
        }, bk(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Ak,
          previousItem: null,
          nextItem: null
        }, bk(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, TT, kT, cT), this
      }
      removeDragGradient(TT) {
        return this._removeFactorGradient(this._dragGradients, TT), 0 === this._dragGradients?.length && (Jk(this._dragCreation), Jk(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(TT, kT, cT) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, TT, kT, cT), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(TT) {
        return this._removeFactorGradient(this._startSizeGradients, TT), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const TT = new Uint8Array(4 * this._rawTextureWidth),
          kT = IT.k.Color3[0];
        for (let cT = 0; cT < this._rawTextureWidth; cT++) {
          const MT = cT / this._rawTextureWidth;
          lT.p.GetCurrentGradient(MT, this._rampGradients, ((lT, MT, KT) => {
            IT.c.LerpToRef(lT.color, MT.color, KT, kT), TT[4 * cT] = 255 * kT.r, TT[4 * cT + 1] = 255 * kT.g, TT[4 * cT + 2] = 255 * kT.b, TT[4 * cT + 3] = 255
          }))
        }
        this._rampGradientsTexture = yT.c.CreateRGBATexture(TT, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((TT, kT) => TT.gradient < kT.gradient ? -1 : TT.gradient > kT.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(TT, kT) {
        this._rampGradients || (this._rampGradients = []);
        const cT = new lT.i(TT, kT);
        return this._rampGradients.push(cT), this._syncRampGradientTexture(), this
      }
      removeRampGradient(TT) {
        return this._removeGradientAndTexture(TT, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(TT, kT, cT) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = WT, this._colorProcessing.process = nT);
        const MT = new lT.e(TT, kT, cT);
        return this._colorGradients.push(MT), this._colorGradients.sort(((TT, kT) => TT.gradient < kT.gradient ? -1 : TT.gradient > kT.gradient ? 1 : 0)), this
      }
      removeColorGradient(TT) {
        if (!this._colorGradients) return this;
        let kT = 0;
        for (const cT of this._colorGradients) {
          if (cT.gradient === TT) {
            this._colorGradients.splice(kT, 1);
            break
          }
          kT++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = YT, this._colorProcessing.process = pT), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const TT of this._drawWrappers)
            if (TT)
              for (const kT of TT) kT?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(TT, kT, cT, lT, MT) {
        return MT[4 * (((TT = .5 * Math.abs(TT) + .5) * cT % cT | 0) + ((kT = .5 * Math.abs(kT) + .5) * lT % lT | 0) * cT)] / 255
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
          kT = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * kT), this._vertexBuffer = new OT.d(TT, this._vertexData, !0, kT);
        let cT = 0;
        const lT = this._vertexBuffer.createVertexBuffer(OT.l.PositionKind, cT, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[OT.l.PositionKind] = lT, cT += 3;
        const MT = this._vertexBuffer.createVertexBuffer(OT.l.ColorKind, cT, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[OT.l.ColorKind] = MT, cT += 4;
        const KT = this._vertexBuffer.createVertexBuffer("angle", cT, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = KT, cT += 1;
        const yT = this._vertexBuffer.createVertexBuffer("size", cT, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = yT, cT += 2, this._isAnimationSheetEnabled) {
          const TT = this._vertexBuffer.createVertexBuffer("cellIndex", cT, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = TT, cT += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const TT = this._vertexBuffer.createVertexBuffer("direction", cT, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = TT, cT += 3
        }
        if (this._useRampGradients) {
          const TT = this._vertexBuffer.createVertexBuffer("remapData", cT, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = TT, cT += 4
        }
        let fT;
        if (this._useInstancing) {
          const kT = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new OT.d(TT, kT, !1, 2), fT = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else fT = this._vertexBuffer.createVertexBuffer("offset", cT, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = fT, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const TT = [],
          kT = [];
        let cT = 0;
        for (let lT = 0; lT < this._capacity; lT++) TT.push(cT), TT.push(cT + 1), TT.push(cT + 2), TT.push(cT), TT.push(cT + 2), TT.push(cT + 3), kT.push(cT, cT + 1, cT + 1, cT + 2, cT + 2, cT + 3, cT + 3, cT, cT, cT + 3), cT += 4;
        this._indexBuffer = this._engine.createIndexBuffer(TT), this._linesIndexBuffer = this._engine.createIndexBuffer(kT)
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
              for (let kT = 0; kT < this.preWarmCycles; kT++) this.animate(!0), TT.render()
            }))
          }));
          else
            for (let kT = 0; kT < this.preWarmCycles; kT++) this.animate(!0)
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
      _appendParticleVertex(TT, kT, cT, lT) {
        let MT = TT * this._vertexBufferSize;
        const OT = KT.h.Fv[0].UkT(this._scene?.floatingOriginOffset || KT.m.ZeroReadOnly);
        if (this._vertexData[MT++] = kT.position.x + this.worldOffset.x - OT.x, this._vertexData[MT++] = kT.position.y + this.worldOffset.y - OT.y, this._vertexData[MT++] = kT.position.z + this.worldOffset.z - OT.z, this._vertexData[MT++] = kT.color.r, this._vertexData[MT++] = kT.color.g, this._vertexData[MT++] = kT.color.b, this._vertexData[MT++] = kT.color.a, this._vertexData[MT++] = kT.angle, this._vertexData[MT++] = kT.scale.x * kT.size, this._vertexData[MT++] = kT.scale.y * kT.size, this._isAnimationSheetEnabled && (this._vertexData[MT++] = kT.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[MT++] = kT.direction.x, this._vertexData[MT++] = kT.direction.y, this._vertexData[MT++] = kT.direction.z);
        else if (kT._properties.initialDirection) {
          let TT = kT._properties.initialDirection;
          this.isLocal && (KT.m.TransformNormalToRef(TT, this._emitterWorldMatrix, KT.h.Fv[0]), TT = KT.h.Fv[0]), 0 === TT.x && 0 === TT.z && (TT.x = .001), this._vertexData[MT++] = TT.x, this._vertexData[MT++] = TT.y, this._vertexData[MT++] = TT.z
        } else {
          let TT = kT.direction;
          this.isLocal && (KT.m.TransformNormalToRef(TT, this._emitterWorldMatrix, KT.h.Fv[0]), TT = KT.h.Fv[0]), 0 === TT.x && 0 === TT.z && (TT.x = .001), this._vertexData[MT++] = TT.x, this._vertexData[MT++] = TT.y, this._vertexData[MT++] = TT.z
        }
        this._useRampGradients && kT.remapData && (this._vertexData[MT++] = kT.remapData.x, this._vertexData[MT++] = kT.remapData.y, this._vertexData[MT++] = kT.remapData.z, this._vertexData[MT++] = kT.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === cT ? cT = this._epsilon : 1 === cT && (cT = 1 - this._epsilon), 0 === lT ? lT = this._epsilon : 1 === lT && (lT = 1 - this._epsilon)), this._vertexData[MT++] = cT, this._vertexData[MT] = lT)
      }
      _prepareParticle(TT) {}
      _createNewOnes(TT) {
        let kT;
        for (let cT = 0; cT < TT && this._particles.length !== this._capacity; cT++) {
          kT = this._createParticle(), this._particles.push(kT);
          let TT = this._createQueueStart;
          for (; TT;) TT.process(kT, this), TT = TT.nextItem;
          kT._inheritParticleInfoToSubEmitters()
        }
      }
      _update(TT) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const TT = this.emitter;
          this._emitterWorldMatrix = TT.getWorldMatrix()
        } else {
          const TT = this.emitter;
          this._emitterWorldMatrix = KT.d.Translation(TT.x, TT.y, TT.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(TT)
      }
      static _GetAttributeNamesOrOptions() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const lT = [OT.l.PositionKind, OT.l.ColorKind, "angle", "offset", "size"];
        return TT && lT.push("cellIndex"), kT || lT.push("direction"), cT && lT.push("remapData"), lT
      }
      static _GetEffectCreationOptions() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const lT = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, RT.e)(lT), TT && lT.push("particlesInfos"), kT && lT.push("logarithmicDepthConstant"), cT && (lT.push("vFogInfos"), lT.push("vFogColor")), lT
      }
      fillDefines(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, RT.n)(this, this._scene, TT), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && TT.push("#define FOG")), this._isAnimationSheetEnabled && TT.push("#define ANIMATESHEET"), this.useLogarithmicDepth && TT.push("#define LOGARITHMICDEPTH"), kT === FT.BLENDMODE_MULTIPLY && TT.push("#define BLENDMULTIPLYMODE"), this.isLocal && TT.push("#define LOCAL"), this._useRampGradients && TT.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (TT.push("#define BILLBOARD"), this.billboardMode) {
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
        cT && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), TT.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(TT, kT, cT) {
        kT.push(...ek._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), TT.push(...ek._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), cT.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, UT.e)(TT, this._imageProcessingConfigurationDefines), (0, UT.d)(cT, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(TT) {
        var kT;
        const cT = this._getCustomDrawWrapper(TT);
        if (cT?.effect) return cT;
        const lT = [];
        this.fillDefines(lT, TT);
        const KT = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          OT = Hk.d._PrepareStringDefines(KT, lT),
          yT = OT ? Hk.d.GetConfiguration(KT) : void 0;
        let fT = this._drawWrappers[KT];
        fT || (fT = this._drawWrappers[KT] = [], 0 === KT || this._renderPassObserver || (this._renderPassObserver = ((kT = this._engine)._onReleaseRenderPassObservable ?? (kT._onReleaseRenderPassObservable = new MT.b)).add((TT => {
          const kT = this._drawWrappers[TT];
          if (kT) {
            for (const TT of kT) TT?.dispose();
            delete this._drawWrappers[TT]
          }
        }))));
        let xT = fT[TT];
        xT || (xT = new LT.b(this._engine), xT.drawContext && (xT.drawContext.useInstancing = this._useInstancing), fT[TT] = xT);
        const IT = lT.join("\n");
        if (xT.defines !== IT) {
          const TT = [],
            kT = [],
            cT = [];
          this.fillUniformsAttributesAndSamplerNames(kT, TT, cT), OT && (kT.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== yT?.defines.PREPASS_LOCAL_POSITION_INDEX && kT.push("inverseEmitterWM", "geometryWorldOffset")), xT.setEffect(this._engine.createEffect("particles", {
            attributes: TT,
            uniformsNames: kT,
            samplers: cT,
            defines: IT,
            shaderLanguage: this._shaderLanguage,
            multiTarget: OT,
            indexParameters: OT ? {
              buffersCount: yT?._mrtCount ?? 0
            } : void 0
          }, this._engine), IT)
        }
        return xT
      }
      _bindGeometryRendering(TT) {
        const kT = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          cT = Hk.d.GetConfiguration(kT);
        if (!cT?._defines) return;
        TT.setFloat("objectId", 0), TT.setInt("meshBlendTag", 0);
        const lT = this._scene?.activeCamera;
        if (TT.setFloat2("cameraInfo", lT?.minZ ?? 0, lT?.maxZ ?? 1), this.isLocal && void 0 !== cT.defines.PREPASS_LOCAL_POSITION_INDEX) {
          TT.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const kT = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || KT.m.ZeroReadOnly, KT.h.Fv[0]);
          TT.setVector3("geometryWorldOffset", kT)
        }
      }
      animate() {
        let TT, kT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!kT && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (kT ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) TT = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const kT = this._calculateEmitRate();
            TT = kT * this._scaledUpdateSpeed | 0, this._newPartsExcess += kT * this._scaledUpdateSpeed - TT
          }
          if (this._newPartsExcess > 1 && (TT += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? TT = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(TT), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !kT) {
            let TT = 0;
            for (let kT = 0; kT < this._particles.length; kT++) {
              const cT = this._particles[kT];
              this._appendParticleVertices(TT, cT), TT += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const TT = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  kT = this._particles.length;
                kT < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, kT * TT, this._fixedCapacityHighWaterMark * TT), this._fixedCapacityHighWaterMark = kT, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
          const kT = this._actualFrame / this.targetStopDuration;
          lT.p.GetCurrentGradient(kT, this._emitRateGradients, ((kT, cT, lT) => {
            kT !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = cT.getFactor(), this._currentEmitRateGradient = kT), TT = (0, jT.Lerp)(this._currentEmitRate1, this._currentEmitRate2, lT)
          }))
        }
        return TT
      }
      _appendParticleVertices(TT, kT) {
        this._appendParticleVertex(TT++, kT, 0, 0), this._useInstancing || (this._appendParticleVertex(TT++, kT, 1, 0), this._appendParticleVertex(TT++, kT, 1, 1), this._appendParticleVertex(TT, kT, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !ek.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([cT.e(337).then((() => cT(60587))), cT.e(331).then((() => cT(60589)))])) : await Promise.all([cT.e(320).then((() => cT(60597))), Promise.all([cT.e(313), cT.e(349)]).then((() => cT(60602)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== FT.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(FT.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(FT.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(TT) {
        const kT = this._getWrapper(TT),
          cT = kT.effect,
          lT = this._engine;
        lT.enableEffect(kT);
        const MT = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        cT.setTexture("diffuseSampler", this.particleTexture), cT.setMatrix("view", MT);
        const OT = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (cT.setMatrix("projection", OT), this._isAnimationSheetEnabled && this.particleTexture) {
          const TT = this.particleTexture.getBaseSize();
          cT.setFloat3("particlesInfos", this.spriteCellWidth / TT.width, this.spriteCellHeight / TT.height, this.spriteCellWidth / TT.width)
        }
        if (cT.setVector2("translationPivot", this.translationPivot), cT.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const TT = this._scene.activeCamera;
          cT.setVector3("eyePosition", TT.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), cT.setTexture("rampSampler", this._rampGradientsTexture));
        const yT = cT.defines;
        this._scene && ((0, RT.g)(cT, this, this._scene), this.applyFog && (0, gT.f)(this._scene, void 0, cT)), yT.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (MT.invertToRef(KT.h.Matrix[0]), cT.setMatrix("invView", KT.h.Matrix[0])), cT._multiTarget && this._bindGeometryRendering(cT), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? lT.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, cT) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, cT)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? lT.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, cT) : lT.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, cT), this.useLogarithmicDepth && this._scene && (0, gT.p)(yT, cT, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(cT), this._setEngineBasedOnBlendMode(TT), cT._multiTarget && Hk.d._BindZeroAlphaDiscard(lT, cT);
        let fT = !1;
        try {
          Hk.d._BindAttachmentsForEffect(lT, cT) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(cT), this._useInstancing ? this._scene?.forceWireframe ? lT.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : lT.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? lT.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : lT.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), fT = !0)
        } finally {
          Hk.d._RestoreAttachments(lT)
        }
        return fT ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const TT = this._engine;
        let kT;
        return TT.setState && (TT.setState(!1), this.forceDepthWrite && TT.setDepthWrite(!0)), kT = this.blendMode === FT.BLENDMODE_MULTIPLYADD ? this._render(FT.BLENDMODE_MULTIPLY) + this._render(FT.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), kT
      }
      _onDispose() {}
      dispose() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), TT && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), TT && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(kT, cT), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const TT = this._scene.lF.indexOf(this);
          TT > -1 && this._scene.lF.splice(TT, 1), this._scene._activeParticleSystems.dispose()
        }
        this.QJ.notifyObservers(this), this.QJ.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    ek.ForceGLSL = !1;
    var Gk, Vk = cT(36949);
    ! function(TT) {
      TT[TT.ATTACHED = 0] = "ATTACHED", TT[TT.END = 1] = "END"
    }(Gk || (Gk = {}));
    class Ek {
      constructor(TT) {
        if (this.particleSystem = TT, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !TT.emitter || !TT.emitter.dispose) {
          const kT = (0, Vk.e)("BABYLON.AbstractMesh");
          TT.emitter = new kT("SubemitterSystemEmitter", TT.NJ()), TT._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let TT = this.particleSystem.emitter;
        if (TT) {
          if (TT instanceof KT.m) TT = TT.clone();
          else if (-1 !== TT.getClassName().indexOf("Mesh")) {
            TT = new((0, Vk.e)("BABYLON.Mesh"))("", TT.NJ()), TT.isVisible = !1
          }
        } else TT = new KT.m;
        const kT = new Ek(this.particleSystem.clone(this.particleSystem.name, TT));
        return kT.particleSystem.name += "Clone", kT.type = this.type, kT.inheritDirection = this.inheritDirection, kT.inheritedVelocityAmount = this.inheritedVelocityAmount, kT.particleSystem._disposeEmitterOnDispose = !0, kT.particleSystem.disposeOnStop = !0, kT
      }
      serialize() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const kT = {};
        return kT.type = this.type, kT.inheritDirection = this.inheritDirection, kT.inheritedVelocityAmount = this.inheritedVelocityAmount, kT.particleSystem = this.particleSystem.serialize(TT), kT
      }
      static _ParseParticleSystem(TT, kT, cT) {
        throw (0, ET.i)("ParseParticle")
      }
      static Parse(TT, kT, cT) {
        const lT = TT.particleSystem,
          MT = new Ek(Ek._ParseParticleSystem(lT, kT, cT, !0));
        return MT.type = TT.type, MT.inheritDirection = TT.inheritDirection, MT.inheritedVelocityAmount = TT.inheritedVelocityAmount, MT.particleSystem._isSubEmitter = !0, MT
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Zk = cT(39516),
      uk = cT(39645);
    const Xk = () => {};
    class dk {
      constructor() {
        this.particlePositionGenerator = Xk, this.particleDestinationGenerator = Xk, this.particleDirectionGenerator = Xk
      }
      startDirectionFunction(TT, kT, cT, lT) {
        const MT = KT.h.Fv[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== Xk) this.particleDirectionGenerator(-1, cT, MT);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== Xk) {
          this.particleDestinationGenerator(-1, cT, MT);
          const TT = KT.h.Fv[1];
          MT.subtractToRef(cT.position, TT), TT.scaleToRef(1 / cT.lifeTime, MT)
        } else MT.set(0, 0, 0);
        lT ? kT.UkT(MT) : KT.m.TransformNormalToRef(MT, TT, kT)
      }
      startPositionFunction(TT, kT, cT, lT) {
        const MT = KT.h.Fv[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== Xk ? this.particlePositionGenerator(-1, cT, MT) : MT.set(0, 0, 0), lT ? kT.UkT(MT) : KT.m.TransformCoordinatesToRef(MT, TT, kT)
      }
      clone() {
        const TT = new dk;
        return CT.d.DeepCopy(this, TT), TT
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
    const Lk = KT.m.Zero(),
      Rk = KT.m.Zero(),
      gk = KT.m.Zero();
    class Uk {
      constructor() {
        this.strength = 0, this.position = KT.m.Zero()
      }
      _processParticle(TT, kT) {
        this.position.subtractToRef(TT.position, Lk);
        const cT = Lk.lengthSquared() + 1;
        Lk.normalize().scaleToRef(this.strength / cT, Rk), Rk.scaleToRef(kT._tempScaledUpdateSpeed, gk), TT.direction.addInPlace(gk)
      }
      serialize() {
        return {
          position: this.position.acT(),
          strength: this.strength
        }
      }
    }
    const Yk = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class Bk extends ek {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = TT => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const kT = Math.floor(Math.random() * this._subEmitters.length);
          for (const cT of this._subEmitters[kT])
            if (1 === cT.type) {
              const kT = cT.clone();
              TT._inheritParticleInfoToSubEmitter(kT), kT.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(kT.particleSystem), kT.particleSystem.start()
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
        this._flowMap !== TT && (this._flowMap = TT, this._flowMapUpdate && (Jk(this._flowMapUpdate), this._flowMapUpdate = null), TT && (this._flowMapUpdate = {
          process: TT => {
            const kT = this.NJ()?.getTransformMatrix();
            this._flowMap._processParticle(TT, this.flowMapStrength * this._tempScaledUpdateSpeed, kT)
          },
          previousItem: null,
          nextItem: null
        }, zk(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(TT) {
        super.addAttractor(TT), 1 === this._attractors.length && (this._attractorUpdate = {
          process: TT => {
            for (const kT of this._attractors) kT._processParticle(TT, this)
          },
          previousItem: null,
          nextItem: null
        }, zk(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(TT) {
        super.removeAttractor(TT), 0 === this._attractors.length && this._attractorUpdate && Jk(this._attractorUpdate)
      }
      start() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(TT)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const TT of this.subEmitters) TT instanceof Bk ? this._subEmitters.push([new Ek(TT)]) : TT instanceof Ek ? this._subEmitters.push([TT]) : TT instanceof Array && this._subEmitters.push(TT)
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
          const kT = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          TT._properties.attachedSubEmitters = [];
          for (const cT of kT)
            if (0 === cT.type) {
              const kT = cT.clone();
              TT._properties.attachedSubEmitters.push(kT), kT.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), TT && this.particles)
          for (const cT of this.particles)
            if (cT._properties.attachedSubEmitters)
              for (let TT = cT._properties.attachedSubEmitters.length - 1; TT >= 0; TT -= 1) cT._properties.attachedSubEmitters[TT].dispose();
        if (kT && this.activeSubSystems)
          for (let cT = this.activeSubSystems.length - 1; cT >= 0; cT -= 1) this.activeSubSystems[cT].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let TT = 0; TT < this._subEmitters.length; TT++)
            for (const kT of this._subEmitters[TT]) kT.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(TT, kT, cT, lT) {
        let MT;
        MT = cT instanceof Zk.d ? null : cT;
        const OT = (0, Vk.e)("BABYLON.Texture");
        if (OT && MT)
          if (TT.texture) kT.particleTexture = OT.Parse(TT.texture, MT, lT);
          else if (TT.textureName) {
          const cT = TT.textureSettings;
          if (kT.particleTexture = new OT(lT + TT.textureName, MT, !1, void 0 === TT.invertY || TT.invertY, cT ? cT.samplingMode : void 0), kT.particleTexture.name = TT.textureName, cT) {
            const TT = kT.particleTexture;
            for (const kT of Yk) void 0 !== cT[kT] && (TT[kT] = cT[kT])
          }
        }
        if (TT.emitterId || 0 === TT.emitterId || void 0 !== TT.emitter ? (TT.emitterId || 0 === TT.emitterId) && MT ? (kT.emitter = MT.getLastMeshById(TT.emitterId), kT.emitter || (kT.emitter = KT.m.Zero())) : kT.emitter = KT.m.FromArray(TT.emitter) : kT.emitter = KT.m.Zero(), kT.isLocal = !!TT.isLocal, void 0 !== TT.renderingGroupId && (kT.renderingGroupId = TT.renderingGroupId), void 0 !== TT.isBillboardBased && (kT.isBillboardBased = TT.isBillboardBased), void 0 !== TT.billboardMode && (kT.billboardMode = TT.billboardMode), void 0 !== TT.useLogarithmicDepth && (kT.useLogarithmicDepth = TT.useLogarithmicDepth), TT.animations) {
          for (let cT = 0; cT < TT.animations.length; cT++) {
            const lT = TT.animations[cT],
              MT = (0, Vk.e)("BABYLON.Animation");
            MT && kT.animations.push(MT.Parse(lT))
          }
          kT.beginAnimationOnStart = TT.beginAnimationOnStart, kT.beginAnimationFrom = TT.beginAnimationFrom, kT.beginAnimationTo = TT.beginAnimationTo, kT.beginAnimationLoop = TT.beginAnimationLoop
        }
        if (TT.autoAnimate && MT && MT.beginAnimation(kT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), kT.startDelay = 0 | TT.startDelay, kT.minAngularSpeed = TT.minAngularSpeed, kT.maxAngularSpeed = TT.maxAngularSpeed, kT.minSize = TT.minSize, kT.maxSize = TT.maxSize, TT.minScaleX && (kT.minScaleX = TT.minScaleX, kT.maxScaleX = TT.maxScaleX, kT.minScaleY = TT.minScaleY, kT.maxScaleY = TT.maxScaleY), void 0 !== TT.preWarmCycles && (kT.preWarmCycles = TT.preWarmCycles, kT.preWarmStepOffset = TT.preWarmStepOffset), void 0 !== TT.minInitialRotation && (kT.minInitialRotation = TT.minInitialRotation, kT.maxInitialRotation = TT.maxInitialRotation), kT.minLifeTime = TT.minLifeTime, kT.maxLifeTime = TT.maxLifeTime, kT.minEmitPower = TT.minEmitPower, kT.maxEmitPower = TT.maxEmitPower, kT.emitRate = TT.emitRate, kT.gravity = KT.m.FromArray(TT.gravity), TT.noiseStrength && (kT.noiseStrength = KT.m.FromArray(TT.noiseStrength)), kT.color1 = IT.g.FromArray(TT.color1), kT.color2 = IT.g.FromArray(TT.color2), kT.colorDead = IT.g.FromArray(TT.colorDead), kT.updateSpeed = TT.updateSpeed, kT.targetStopDuration = TT.targetStopDuration, kT.blendMode = TT.blendMode, TT.colorGradients)
          for (const KT of TT.colorGradients) kT.addColorGradient(KT.gradient, IT.g.FromArray(KT.color1), KT.color2 ? IT.g.FromArray(KT.color2) : void 0);
        if (TT.rampGradients) {
          for (const cT of TT.rampGradients) kT.addRampGradient(cT.gradient, IT.c.FromArray(cT.color));
          kT.useRampGradients = TT.useRampGradients
        }
        if (TT.colorRemapGradients)
          for (const KT of TT.colorRemapGradients) kT.addColorRemapGradient(KT.gradient, void 0 !== KT.factor1 ? KT.factor1 : KT.factor, KT.factor2);
        if (TT.alphaRemapGradients)
          for (const KT of TT.alphaRemapGradients) kT.addAlphaRemapGradient(KT.gradient, void 0 !== KT.factor1 ? KT.factor1 : KT.factor, KT.factor2);
        if (TT.sizeGradients)
          for (const KT of TT.sizeGradients) kT.addSizeGradient(KT.gradient, void 0 !== KT.factor1 ? KT.factor1 : KT.factor, KT.factor2);
        if (TT.angularSpeedGradients)
          for (const KT of TT.angularSpeedGradients) kT.addAngularSpeedGradient(KT.gradient, void 0 !== KT.factor1 ? KT.factor1 : KT.factor, KT.factor2);
        if (TT.velocityGradients)
          for (const KT of TT.velocityGradients) kT.addVelocityGradient(KT.gradient, void 0 !== KT.factor1 ? KT.factor1 : KT.factor, KT.factor2);
        if (TT.dragGradients)
          for (const KT of TT.dragGradients) kT.addDragGradient(KT.gradient, void 0 !== KT.factor1 ? KT.factor1 : KT.factor, KT.factor2);
        if (TT.emitRateGradients)
          for (const KT of TT.emitRateGradients) kT.addEmitRateGradient(KT.gradient, void 0 !== KT.factor1 ? KT.factor1 : KT.factor, KT.factor2);
        if (TT.startSizeGradients)
          for (const KT of TT.startSizeGradients) kT.addStartSizeGradient(KT.gradient, void 0 !== KT.factor1 ? KT.factor1 : KT.factor, KT.factor2);
        if (TT.lifeTimeGradients)
          for (const KT of TT.lifeTimeGradients) kT.addLifeTimeGradient(KT.gradient, void 0 !== KT.factor1 ? KT.factor1 : KT.factor, KT.factor2);
        if (TT.limitVelocityGradients) {
          for (const cT of TT.limitVelocityGradients) kT.addLimitVelocityGradient(cT.gradient, void 0 !== cT.factor1 ? cT.factor1 : cT.factor, cT.factor2);
          kT.limitVelocityDamping = TT.limitVelocityDamping
        }
        if (TT.noiseTexture && MT) {
          const cT = (0, Vk.e)("BABYLON.ProceduralTexture");
          kT.noiseTexture = cT.Parse(TT.noiseTexture, MT, lT)
        }
        let yT;
        if (TT.particleEmitterType) {
          switch (TT.particleEmitterType.type) {
            case "SphereParticleEmitter":
              yT = new hT;
              break;
            case "SphereDirectedParticleEmitter":
              yT = new NT;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              yT = new ST;
              break;
            case "ConeDirectedParticleEmitter":
              yT = new DT;
              break;
            case "CylinderParticleEmitter":
              yT = new QT.d;
              break;
            case "CylinderDirectedParticleEmitter":
              yT = new QT.c;
              break;
            case "HemisphericParticleEmitter":
              yT = new tT;
              break;
            case "PointParticleEmitter":
              yT = new vT;
              break;
            case "MeshParticleEmitter":
              yT = new aT;
              break;
            case "CustomParticleEmitter":
              yT = new dk;
              break;
            default:
              yT = new AT.b
          }
          yT.parse(TT.particleEmitterType, MT)
        } else yT = new AT.b, yT.parse(TT, MT);
        kT.particleEmitterType = yT, kT.startSpriteCellID = TT.startSpriteCellID, kT.endSpriteCellID = TT.endSpriteCellID, kT.spriteCellLoop = TT.spriteCellLoop ?? !0, kT.spriteCellWidth = TT.spriteCellWidth, kT.spriteCellHeight = TT.spriteCellHeight, kT.spriteCellChangeSpeed = TT.spriteCellChangeSpeed, kT.spriteRandomStartCell = TT.spriteRandomStartCell, kT.disposeOnStop = TT.disposeOnStop ?? !1, kT.manualEmitCount = TT.manualEmitCount ?? -1
      }
      static Parse(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          MT = arguments.length > 4 ? arguments[4] : void 0;
        const OT = TT.name;
        let yT, fT, xT = null,
          AT = null;
        if (kT instanceof Zk.d ? yT = kT : (fT = kT, yT = fT.Dv()), TT.customShader && (0, ET.c)(yT.createEffectForParticles)) {
          AT = TT.customShader;
          const kT = AT.shaderOptions.defines.length > 0 ? AT.shaderOptions.defines.join("\n") : "";
          xT = yT.createEffectForParticles(AT.shaderPath.fragmentElement, AT.shaderOptions.uniforms, AT.shaderOptions.samplers, kT)
        }
        const CT = new Bk(OT, MT || TT.DA, kT, xT, TT.isAnimationSheetEnabled);
        if (CT.customShader = AT, CT._rootUrl = cT, TT.id && (CT.id = TT.id), TT.subEmitters) {
          CT.subEmitters = [];
          for (const lT of TT.subEmitters) {
            const TT = [];
            for (const MT of lT) TT.push(Ek.Parse(MT, kT, cT));
            CT.subEmitters.push(TT)
          }
        }
        if (TT.attractors)
          for (const IT of TT.attractors) {
            const TT = new Uk;
            TT.position = KT.m.FromArray(IT.position), TT.strength = IT.strength, CT.addAttractor(TT)
          }
        return Bk._Parse(TT, CT, kT, cT), TT.textureMask && (CT.textureMask = IT.g.FromArray(TT.textureMask)), TT.worldOffset && (CT.worldOffset = KT.m.FromArray(TT.worldOffset)), TT.preventAutoStart && (CT.preventAutoStart = TT.preventAutoStart), TT.metadata && (CT.metadata = TT.metadata), lT || CT.preventAutoStart || CT.start(), CT
      }
      serialize() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const kT = {};
        if (Bk._Serialize(kT, this, TT), kT.textureMask = this.textureMask.acT(), kT.customShader = this.customShader, kT.preventAutoStart = this.preventAutoStart, kT.worldOffset = this.worldOffset.acT(), this.metadata && (kT.metadata = this.metadata), this.subEmitters) {
          kT.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const cT of this._subEmitters) {
            const lT = [];
            for (const kT of cT) kT.particleSystem.doNotSerialize || lT.push(kT.serialize(TT));
            kT.subEmitters.push(lT)
          }
        }
        if (this._attractors && this._attractors.length) {
          kT.attractors = [];
          for (const TT of this._attractors) kT.attractors.push(TT.serialize())
        }
        return kT
      }
      static _Serialize(TT, kT, cT) {
        if (TT.name = kT.name, TT.id = kT.id, TT.DA = kT.getCapacity(), TT.disposeOnStop = kT.disposeOnStop, TT.manualEmitCount = kT.manualEmitCount, kT.emitter.position) {
          const cT = kT.emitter;
          TT.emitterId = cT.id
        } else {
          const cT = kT.emitter;
          TT.emitter = cT.acT()
        }
        if (kT.particleEmitterType && (TT.particleEmitterType = kT.particleEmitterType.serialize()), kT.particleTexture)
          if (cT) TT.texture = kT.particleTexture.serialize();
          else {
            const cT = kT.particleTexture;
            TT.textureName = kT.particleTexture.name, TT.invertY = !!cT._invertY;
            const lT = {};
            for (const TT of Yk) lT[TT] = cT[TT];
            lT.samplingMode = cT.samplingMode, TT.textureSettings = lT
          } TT.isLocal = kT.isLocal, uk.d.AppendSerializedAnimations(kT, TT), TT.beginAnimationOnStart = kT.beginAnimationOnStart, TT.beginAnimationFrom = kT.beginAnimationFrom, TT.beginAnimationTo = kT.beginAnimationTo, TT.beginAnimationLoop = kT.beginAnimationLoop, TT.startDelay = kT.startDelay, TT.renderingGroupId = kT.renderingGroupId, TT.isBillboardBased = kT.isBillboardBased, TT.billboardMode = kT.billboardMode, TT.minAngularSpeed = kT.minAngularSpeed, TT.maxAngularSpeed = kT.maxAngularSpeed, TT.minSize = kT.minSize, TT.maxSize = kT.maxSize, TT.minScaleX = kT.minScaleX, TT.maxScaleX = kT.maxScaleX, TT.minScaleY = kT.minScaleY, TT.maxScaleY = kT.maxScaleY, TT.minEmitPower = kT.minEmitPower, TT.maxEmitPower = kT.maxEmitPower, TT.minLifeTime = kT.minLifeTime, TT.maxLifeTime = kT.maxLifeTime, TT.emitRate = kT.emitRate, TT.gravity = kT.gravity.acT(), TT.noiseStrength = kT.noiseStrength.acT(), TT.color1 = kT.color1.acT(), TT.color2 = kT.color2.acT(), TT.colorDead = kT.colorDead.acT(), TT.updateSpeed = kT.updateSpeed, TT.targetStopDuration = kT.targetStopDuration, TT.blendMode = kT.blendMode, TT.preWarmCycles = kT.preWarmCycles, TT.preWarmStepOffset = kT.preWarmStepOffset, TT.minInitialRotation = kT.minInitialRotation, TT.maxInitialRotation = kT.maxInitialRotation, TT.startSpriteCellID = kT.startSpriteCellID, TT.spriteCellLoop = kT.spriteCellLoop, TT.endSpriteCellID = kT.endSpriteCellID, TT.spriteCellChangeSpeed = kT.spriteCellChangeSpeed, TT.spriteCellWidth = kT.spriteCellWidth, TT.spriteCellHeight = kT.spriteCellHeight, TT.spriteRandomStartCell = kT.spriteRandomStartCell, TT.isAnimationSheetEnabled = kT.isAnimationSheetEnabled, TT.useLogarithmicDepth = kT.useLogarithmicDepth;
        const lT = kT.getColorGradients();
        if (lT) {
          TT.colorGradients = [];
          for (const kT of lT) {
            const cT = {
              gradient: kT.gradient,
              color1: kT.color1.acT()
            };
            kT.color2 ? cT.color2 = kT.color2.acT() : cT.color2 = kT.color1.acT(), TT.colorGradients.push(cT)
          }
        }
        const MT = kT.getRampGradients();
        if (MT) {
          TT.rampGradients = [];
          for (const kT of MT) {
            const cT = {
              gradient: kT.gradient,
              color: kT.color.acT()
            };
            TT.rampGradients.push(cT)
          }
          TT.useRampGradients = kT.useRampGradients
        }
        const KT = kT.getColorRemapGradients();
        if (KT) {
          TT.colorRemapGradients = [];
          for (const kT of KT) {
            const cT = {
              gradient: kT.gradient,
              factor1: kT.factor1
            };
            void 0 !== kT.factor2 ? cT.factor2 = kT.factor2 : cT.factor2 = kT.factor1, TT.colorRemapGradients.push(cT)
          }
        }
        const OT = kT.getAlphaRemapGradients();
        if (OT) {
          TT.alphaRemapGradients = [];
          for (const kT of OT) {
            const cT = {
              gradient: kT.gradient,
              factor1: kT.factor1
            };
            void 0 !== kT.factor2 ? cT.factor2 = kT.factor2 : cT.factor2 = kT.factor1, TT.alphaRemapGradients.push(cT)
          }
        }
        const yT = kT.getSizeGradients();
        if (yT) {
          TT.sizeGradients = [];
          for (const kT of yT) {
            const cT = {
              gradient: kT.gradient,
              factor1: kT.factor1
            };
            void 0 !== kT.factor2 ? cT.factor2 = kT.factor2 : cT.factor2 = kT.factor1, TT.sizeGradients.push(cT)
          }
        }
        const fT = kT.getAngularSpeedGradients();
        if (fT) {
          TT.angularSpeedGradients = [];
          for (const kT of fT) {
            const cT = {
              gradient: kT.gradient,
              factor1: kT.factor1
            };
            void 0 !== kT.factor2 ? cT.factor2 = kT.factor2 : cT.factor2 = kT.factor1, TT.angularSpeedGradients.push(cT)
          }
        }
        const xT = kT.getVelocityGradients();
        if (xT) {
          TT.velocityGradients = [];
          for (const kT of xT) {
            const cT = {
              gradient: kT.gradient,
              factor1: kT.factor1
            };
            void 0 !== kT.factor2 ? cT.factor2 = kT.factor2 : cT.factor2 = kT.factor1, TT.velocityGradients.push(cT)
          }
        }
        const IT = kT.getDragGradients();
        if (IT) {
          TT.dragGradients = [];
          for (const kT of IT) {
            const cT = {
              gradient: kT.gradient,
              factor1: kT.factor1
            };
            void 0 !== kT.factor2 ? cT.factor2 = kT.factor2 : cT.factor2 = kT.factor1, TT.dragGradients.push(cT)
          }
        }
        const AT = kT.getEmitRateGradients();
        if (AT) {
          TT.emitRateGradients = [];
          for (const kT of AT) {
            const cT = {
              gradient: kT.gradient,
              factor1: kT.factor1
            };
            void 0 !== kT.factor2 ? cT.factor2 = kT.factor2 : cT.factor2 = kT.factor1, TT.emitRateGradients.push(cT)
          }
        }
        const CT = kT.getStartSizeGradients();
        if (CT) {
          TT.startSizeGradients = [];
          for (const kT of CT) {
            const cT = {
              gradient: kT.gradient,
              factor1: kT.factor1
            };
            void 0 !== kT.factor2 ? cT.factor2 = kT.factor2 : cT.factor2 = kT.factor1, TT.startSizeGradients.push(cT)
          }
        }
        const jT = kT.getLifeTimeGradients();
        if (jT) {
          TT.lifeTimeGradients = [];
          for (const kT of jT) {
            const cT = {
              gradient: kT.gradient,
              factor1: kT.factor1
            };
            void 0 !== kT.factor2 ? cT.factor2 = kT.factor2 : cT.factor2 = kT.factor1, TT.lifeTimeGradients.push(cT)
          }
        }
        const vT = kT.getLimitVelocityGradients();
        if (vT) {
          TT.limitVelocityGradients = [];
          for (const kT of vT) {
            const cT = {
              gradient: kT.gradient,
              factor1: kT.factor1
            };
            void 0 !== kT.factor2 ? cT.factor2 = kT.factor2 : cT.factor2 = kT.factor1, TT.limitVelocityGradients.push(cT)
          }
          TT.limitVelocityDamping = kT.limitVelocityDamping
        }
        kT.noiseTexture && (TT.noiseTexture = kT.noiseTexture.serialize())
      }
      clone(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const lT = {
          ...this._customWrappers
        };
        let MT = null;
        const KT = this._engine;
        if ((0, ET.c)(KT.createEffectForParticles) && null != this.customShader) {
          MT = this.customShader;
          const TT = MT.shaderOptions.defines.length > 0 ? MT.shaderOptions.defines.join("\n") : "",
            kT = KT.createEffectForParticles(MT.shaderPath.fragmentElement, MT.shaderOptions.uniforms, MT.shaderOptions.samplers, TT);
          lT[0] ? lT[0].effect = kT : this.setCustomEffect(kT, 0)
        }
        const OT = this.serialize(cT),
          yT = !1 === cT && this.particleTexture ? this.particleTexture.clone() : null;
        yT && (OT.textureName = void 0);
        const fT = Bk.Parse(OT, this._scene || this._engine, this._rootUrl);
        return fT.name = TT, fT.customShader = MT, fT._customWrappers = lT, yT && (fT.particleTexture = yT), void 0 === kT && (kT = this.emitter), this.noiseTexture && (fT.noiseTexture = this.noiseTexture.clone()), fT.emitter = kT, this.preventAutoStart || fT.start(), fT
      }
    }
    Bk.BILLBOARDMODE_Y = 2, Bk.BILLBOARDMODE_ALL = 7, Bk.BILLBOARDMODE_STRETCHED = 8, Bk.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Wk = !1;
    Wk || (Wk = !0, Ek._ParseParticleSystem = Bk.Parse)
  },
  41227: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      SkyMaterial: () => ST,
      _MaxColorValueForRenderTarget: () => QT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(39645),
      OT = cT(36885),
      yT = cT(39902),
      fT = cT(39967),
      xT = cT(41188),
      IT = cT(40774),
      AT = cT(39716),
      CT = cT(36949),
      jT = cT(39989),
      vT = cT(39970),
      tT = cT(39951),
      hT = cT(39943);
    class NT extends yT.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function QT(TT) {
      switch (TT) {
        case xT.e.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case xT.e.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let ST = (() => {
      var TT;
      let kT, yT, xT, CT, ST, DT, aT, FT, rT, PT, wT, mT, bT, zT, JT, oT = fT.e,
        HT = [],
        eT = [],
        GT = [],
        VT = [],
        ET = [],
        ZT = [],
        uT = [],
        XT = [],
        dT = [],
        LT = [],
        RT = [],
        gT = [],
        UT = [],
        YT = [],
        BT = [],
        WT = [],
        nT = [],
        pT = [],
        iT = [],
        qT = [],
        sT = [],
        Tk = [],
        kk = [],
        ck = [],
        lk = [],
        Mk = [],
        Kk = [],
        Ok = [],
        yk = [],
        fk = [];
      return TT = class extends oT {
        constructor(TT, kT) {
          super(TT, kT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, lT.h)(this, HT, 1), this.turbidity = ((0, lT.h)(this, eT), (0, lT.h)(this, GT, 10)), this.rayleigh = ((0, lT.h)(this, VT), (0, lT.h)(this, ET, 2)), this.mieCoefficient = ((0, lT.h)(this, ZT), (0, lT.h)(this, uT, .005)), this.mieDirectionalG = ((0, lT.h)(this, XT), (0, lT.h)(this, dT, .8)), this.distance = ((0, lT.h)(this, LT), (0, lT.h)(this, RT, 500)), this.inclination = ((0, lT.h)(this, gT), (0, lT.h)(this, UT, .49)), this.azimuth = ((0, lT.h)(this, YT), (0, lT.h)(this, BT, .25)), this.sunPosition = ((0, lT.h)(this, WT), (0, lT.h)(this, nT, new OT.Fv(0, 100, 0))), this.useSunPosition = ((0, lT.h)(this, pT), (0, lT.h)(this, iT, !1)), this.cameraOffset = ((0, lT.h)(this, qT), (0, lT.h)(this, sT, OT.Fv.Zero())), this.up = ((0, lT.h)(this, Tk), (0, lT.h)(this, kk, OT.Fv.Up())), this.dithering = ((0, lT.h)(this, ck), (0, lT.h)(this, lk, !1)), this.rawHdrOutput = ((0, lT.h)(this, Mk), (0, lT.h)(this, Kk, !1)), this.cloudiness = ((0, lT.h)(this, Ok), (0, lT.h)(this, yk, 0)), this._cameraPosition = ((0, lT.h)(this, fk), OT.Fv.Zero()), this._skyOrientation = new OT.Quaternion
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
        isReadyForSubMesh(kT, cT) {
          const lT = cT._drawWrapper;
          if (this.isFrozen && lT.effect && lT._wasPreviouslyReady) return !0;
          cT.materialDefines || (cT.materialDefines = new NT);
          const MT = cT.materialDefines,
            KT = this.NJ();
          if (this._isReadyForSubMesh(cT)) return !0;
          if ((0, hT.X)(kT, KT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, MT, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, hT.N)(kT, MT, !0, !1), MT.IMAGEPROCESSINGPOSTPROCESS !== KT.imageProcessingConfiguration.applyByPostProcess && MT.markAsMiscDirty(), MT.DITHER !== this.dithering && MT.markAsMiscDirty(), MT.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && MT.markAsMiscDirty(), MT.isDirty) {
            MT.markAsProcessed(), KT.resetCachedMaterial();
            const kT = new vT.e;
            MT.FOG && kT.addFallback(1, "FOG"), MT.IMAGEPROCESSINGPOSTPROCESS = KT.imageProcessingConfiguration.applyByPostProcess, MT.DITHER = this.dithering, MT.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const lT = [IT.i.PositionKind];
            MT.VERTEXCOLOR && lT.push(IT.i.ColorKind);
            const OT = "sky",
              yT = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, tT.e)(yT);
            const fT = MT.toString();
            cT.setEffect(KT.Dv().createEffect(OT, {
              attributes: lT,
              uniformsNames: yT,
              uniformBuffersNames: [],
              samplers: [],
              defines: fT,
              fallbacks: kT,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: TT._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, KT.Dv()), MT, this._materialContext)
          }
          return !(!cT.effect || !cT.effect.isReady()) && (MT._renderId = KT.getRenderId(), lT._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(TT, kT, cT) {
          const lT = this.NJ(),
            MT = cT.materialDefines;
          if (!MT) return;
          const KT = cT.effect;
          if (!KT) return;
          this._activeEffect = KT, this.bindOnlyWorldMatrix(TT), this._activeEffect.setMatrix("viewProjection", lT.getTransformMatrix()), this._mustRebind(lT, KT, cT) && ((0, tT.g)(KT, this, lT), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, hT.p)(MT, KT, lT)), lT.fogEnabled && kT.applyFog && lT.fogMode !== AT.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", lT.getViewMatrix()), (0, hT.f)(lT, kT, this._activeEffect, this.rawHdrOutput);
          const yT = lT.activeCamera;
          if (yT) {
            const TT = yT.getWorldMatrix();
            this._cameraPosition.x = TT.m[12], this._cameraPosition.y = TT.m[13], this._cameraPosition.z = TT.m[14], this._activeEffect.setVector3("cameraPosition", OT.TmpVectors.Fv[0].UkT(this._cameraPosition).gcT(lT.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const TT = lT.Dv()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", QT(TT?.texture?.type))
          }
          if (!this.useSunPosition) {
            const TT = Math.PI * (this.inclination - .5),
              kT = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(kT) * Math.cos(TT), this.sunPosition.y = this.distance * Math.sin(-TT), this.sunPosition.z = this.distance * Math.sin(kT) * Math.cos(TT), OT.Quaternion.FromUnitVectorsToRef(OT.Fv.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(kT, this._activeEffect, cT)
        }
        getAnimatables() {
          return []
        }
        dispose(TT) {
          super.dispose(TT)
        }
        clone(kT) {
          return KT.d.Clone((() => new TT(kT, this.NJ())), this)
        }
        serialize() {
          const TT = super.serialize();
          return TT.customType = "BABYLON.SkyMaterial", TT
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(kT, cT, lT) {
          return KT.d.Parse((() => new TT(kT.name, cT)), kT, cT, lT)
        }
      }, (() => {
        const cT = "function" === typeof Symbol && Symbol.metadata ? Object.create(oT[Symbol.metadata] ?? null) : void 0;
        kT = [(0, MT.J)()], yT = [(0, MT.J)()], xT = [(0, MT.J)()], CT = [(0, MT.J)()], ST = [(0, MT.J)()], DT = [(0, MT.J)()], aT = [(0, MT.J)()], FT = [(0, MT.J)()], rT = [(0, MT.F)()], PT = [(0, MT.J)()], wT = [(0, MT.F)()], mT = [(0, MT.F)()], bT = [(0, MT.J)()], zT = [(0, MT.J)()], JT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: TT => "luminance" in TT,
            get: TT => TT.luminance,
            set: (TT, kT) => {
              TT.luminance = kT
            }
          },
          metadata: cT
        }, HT, eT), (0, lT.e)(null, null, yT, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: TT => "turbidity" in TT,
            get: TT => TT.turbidity,
            set: (TT, kT) => {
              TT.turbidity = kT
            }
          },
          metadata: cT
        }, GT, VT), (0, lT.e)(null, null, xT, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: TT => "rayleigh" in TT,
            get: TT => TT.rayleigh,
            set: (TT, kT) => {
              TT.rayleigh = kT
            }
          },
          metadata: cT
        }, ET, ZT), (0, lT.e)(null, null, CT, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: TT => "mieCoefficient" in TT,
            get: TT => TT.mieCoefficient,
            set: (TT, kT) => {
              TT.mieCoefficient = kT
            }
          },
          metadata: cT
        }, uT, XT), (0, lT.e)(null, null, ST, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: TT => "mieDirectionalG" in TT,
            get: TT => TT.mieDirectionalG,
            set: (TT, kT) => {
              TT.mieDirectionalG = kT
            }
          },
          metadata: cT
        }, dT, LT), (0, lT.e)(null, null, DT, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: TT => "distance" in TT,
            get: TT => TT.distance,
            set: (TT, kT) => {
              TT.distance = kT
            }
          },
          metadata: cT
        }, RT, gT), (0, lT.e)(null, null, aT, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: TT => "inclination" in TT,
            get: TT => TT.inclination,
            set: (TT, kT) => {
              TT.inclination = kT
            }
          },
          metadata: cT
        }, UT, YT), (0, lT.e)(null, null, FT, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: TT => "azimuth" in TT,
            get: TT => TT.azimuth,
            set: (TT, kT) => {
              TT.azimuth = kT
            }
          },
          metadata: cT
        }, BT, WT), (0, lT.e)(null, null, rT, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: TT => "sunPosition" in TT,
            get: TT => TT.sunPosition,
            set: (TT, kT) => {
              TT.sunPosition = kT
            }
          },
          metadata: cT
        }, nT, pT), (0, lT.e)(null, null, PT, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSunPosition" in TT,
            get: TT => TT.useSunPosition,
            set: (TT, kT) => {
              TT.useSunPosition = kT
            }
          },
          metadata: cT
        }, iT, qT), (0, lT.e)(null, null, wT, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: TT => "cameraOffset" in TT,
            get: TT => TT.cameraOffset,
            set: (TT, kT) => {
              TT.cameraOffset = kT
            }
          },
          metadata: cT
        }, sT, Tk), (0, lT.e)(null, null, mT, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: TT => "up" in TT,
            get: TT => TT.up,
            set: (TT, kT) => {
              TT.up = kT
            }
          },
          metadata: cT
        }, kk, ck), (0, lT.e)(null, null, bT, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: TT => "dithering" in TT,
            get: TT => TT.dithering,
            set: (TT, kT) => {
              TT.dithering = kT
            }
          },
          metadata: cT
        }, lk, Mk), (0, lT.e)(null, null, zT, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: TT => "rawHdrOutput" in TT,
            get: TT => TT.rawHdrOutput,
            set: (TT, kT) => {
              TT.rawHdrOutput = kT
            }
          },
          metadata: cT
        }, Kk, Ok), (0, lT.e)(null, null, JT, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: TT => "cloudiness" in TT,
            get: TT => TT.cloudiness,
            set: (TT, kT) => {
              TT.cloudiness = kT
            }
          },
          metadata: cT
        }, yk, fk), cT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cT
        })
      })(), TT._ShaderLoader = new jT.e((() => [cT.e(321).then((() => cT(60606))), cT.e(314).then((() => cT(60612)))]), (() => [cT.e(338).then((() => cT(60620))), cT.e(332).then((() => cT(60625)))])), TT
    })();
    (0, CT.g)("BABYLON.SkyMaterial", ST)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);