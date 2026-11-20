export const id = 294;
export const ids = [294];
export const modules = {
  40991: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU
    });
    var tU = gU(39480),
      pU = gU(40998);
    class EU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = gU, this.lgU = [], this._maxBlockCapacity = RU || 64, this._selectionContent = new tU.d(1024), this._creationFunc = UU
      }
      update(UU, RU, gU) {
        pU.b._CreateBlocks(UU, RU, gU, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      HgU(UU) {
        for (let RU = 0; RU < this.blocks.length; RU++) {
          this.blocks[RU].addEntry(UU)
        }
      }
      TY(UU) {
        for (let RU = 0; RU < this.blocks.length; RU++) {
          this.blocks[RU].removeEntry(UU)
        }
      }
      select(UU, RU) {
        this._selectionContent.reset();
        for (let gU = 0; gU < this.blocks.length; gU++) {
          this.blocks[gU].select(UU, this._selectionContent, RU)
        }
        return RU ? this._selectionContent.concat(this.lgU) : this._selectionContent.concatWithNoDuplicate(this.lgU), this._selectionContent
      }
      intersects(UU, RU, gU) {
        this._selectionContent.reset();
        for (let tU = 0; tU < this.blocks.length; tU++) {
          this.blocks[tU].intersects(UU, RU, this._selectionContent, gU)
        }
        return gU ? this._selectionContent.concat(this.lgU) : this._selectionContent.concatWithNoDuplicate(this.lgU), this._selectionContent
      }
      intersectsRay(UU) {
        this._selectionContent.reset();
        for (let RU = 0; RU < this.blocks.length; RU++) {
          this.blocks[RU].intersectsRay(UU, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.lgU), this._selectionContent
      }
    }
    EU.CreationFuncForMeshes = (UU, RU) => {
      const gU = UU.lY();
      !UU.isBlocked && gU.boundingBox.intersectsMinMax(RU.FgU, RU.kgU) && RU.entries.push(UU)
    }, EU.CreationFuncForSubMeshes = (UU, RU) => {
      UU.lY().boundingBox.intersectsMinMax(RU.FgU, RU.kgU) && RU.entries.push(UU)
    }
  },
  40998: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = gU(36600),
      pU = gU(39701);
    class EU {
      constructor(UU, RU, gU, tU, pU, EU) {
        this.entries = [], this.OgU = new Array, this._capacity = gU, this._depth = tU, this._maxDepth = pU, this._creationFunc = EU, this._minPoint = UU, this._maxPoint = RU, this.OgU.push(UU.clone()), this.OgU.push(RU.clone()), this.OgU.push(UU.clone()), this.OgU[2].x = RU.x, this.OgU.push(UU.clone()), this.OgU[3].y = RU.y, this.OgU.push(UU.clone()), this.OgU[4].z = RU.z, this.OgU.push(RU.clone()), this.OgU[5].z = UU.z, this.OgU.push(RU.clone()), this.OgU[6].x = UU.x, this.OgU.push(RU.clone()), this.OgU[7].y = UU.y
      }
      get hG() {
        return this._capacity
      }
      get FgU() {
        return this._minPoint
      }
      get kgU() {
        return this._maxPoint
      }
      addEntry(UU) {
        if (this.blocks)
          for (let RU = 0; RU < this.blocks.length; RU++) {
            this.blocks[RU].addEntry(UU)
          } else this._creationFunc(UU, this), this.entries.length > this.hG && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(UU) {
        if (this.blocks) {
          for (let RU = 0; RU < this.blocks.length; RU++) {
            this.blocks[RU].removeEntry(UU)
          }
          return
        }
        const RU = this.entries.indexOf(UU);
        RU > -1 && this.entries.splice(RU, 1)
      }
      addEntries(UU) {
        for (let RU = 0; RU < UU.length; RU++) {
          const gU = UU[RU];
          this.addEntry(gU)
        }
      }
      select(UU, RU, gU) {
        if (pU.c.IsInFrustum(this.OgU, UU)) {
          if (this.blocks) {
            for (let tU = 0; tU < this.blocks.length; tU++) {
              this.blocks[tU].select(UU, RU, gU)
            }
            return
          }
          gU ? RU.concat(this.entries) : RU.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(UU, RU, gU, tU) {
        if (pU.c.IntersectsSphere(this._minPoint, this._maxPoint, UU, RU)) {
          if (this.blocks) {
            for (let pU = 0; pU < this.blocks.length; pU++) {
              this.blocks[pU].intersects(UU, RU, gU, tU)
            }
            return
          }
          tU ? gU.concat(this.entries) : gU.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(UU, RU) {
        if (UU.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let gU = 0; gU < this.blocks.length; gU++) {
              this.blocks[gU].intersectsRay(UU, RU)
            }
            return
          }
          RU.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        EU._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(UU, RU, gU, pU, PU, TU, qU, KU) {
        qU.blocks = new Array;
        const cU = new tU.n((RU.x - UU.x) / 2, (RU.y - UU.y) / 2, (RU.z - UU.z) / 2);
        for (let tU = 0; tU < 2; tU++)
          for (let RU = 0; RU < 2; RU++)
            for (let GU = 0; GU < 2; GU++) {
              const jU = UU.add(cU.multiplyByFloats(tU, RU, GU)),
                uU = UU.add(cU.multiplyByFloats(tU + 1, RU + 1, GU + 1)),
                CU = new EU(jU, uU, pU, PU + 1, TU, KU);
              CU.addEntries(gU), qU.blocks.push(CU)
            }
      }
    }
  },
  41005: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => cU
    });
    var tU = gU(39468),
      pU = gU(36600),
      EU = gU(39817),
      PU = gU(40941),
      TU = gU(39547),
      qU = gU(36622),
      KU = gU(40991);
    class cU {
      constructor(UU) {
        this.name = TU.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new PU.E(pU.n.Zero(), new pU.n(1, 1, 1)), (UU = UU || qU.c.LastCreatedScene) && (this.Zh = UU, this.Zh.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Zh.getActiveSubMeshCandidates = UU => this.getActiveSubMeshCandidates(UU), this.Zh.getCollidingSubMeshCandidates = (UU, RU) => this.getCollidingSubMeshCandidates(UU, RU), this.Zh.getIntersectingSubMeshCandidates = (UU, RU) => this.getIntersectingSubMeshCandidates(UU, RU))
      }
      register() {
        this.Zh.onMeshRemovedObservable.add((UU => {
          const RU = this.Zh.selectionOctree;
          if (void 0 !== RU && null !== RU) {
            const gU = RU.lgU.indexOf(UU); - 1 !== gU && RU.lgU.splice(gU, 1)
          }
        })), this.Zh.onMeshImportedObservable.add((UU => {
          const RU = this.Zh.selectionOctree;
          void 0 !== RU && null !== RU && RU.HgU(UU)
        }))
      }
      getActiveMeshCandidates() {
        return this.Zh.PtU?.select(this.Zh.frustumPlanes) || this.Zh._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(UU) {
        if (UU._submeshesOctree && UU.useOctreeForRenderingSelection) {
          return UU._submeshesOctree.select(this.Zh.frustumPlanes)
        }
        return this.Zh._getDefaultSubMeshCandidates(UU)
      }
      getIntersectingSubMeshCandidates(UU, RU) {
        if (UU._submeshesOctree && UU.useOctreeForPicking) {
          PU.E.TransformToRef(RU, UU.getWorldMatrix(), this._tempRay);
          return UU._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Zh._getDefaultSubMeshCandidates(UU)
      }
      getCollidingSubMeshCandidates(UU, RU) {
        if (UU._submeshesOctree && UU.useOctreeForCollisions) {
          const gU = RU._velocityWorldLength + Math.max(RU._radius.x, RU._radius.y, RU._radius.z);
          return UU._submeshesOctree.intersects(RU._basePointWorld, gU)
        }
        return this.Zh._getDefaultSubMeshCandidates(UU)
      }
      rebuild() {}
      dispose() {}
    }
    let GU = !1;
    GU || (GU = !0, tU.f.prototype.createOrUpdateSelectionOctree = function() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        gU = this._getComponent(TU.d.NAME_OCTREE);
      gU || (gU = new cU(this), this.IgU(gU)), this.PtU || (this.PtU = new KU.e(KU.e.CreationFuncForMeshes, UU, RU));
      const tU = this.getWorldExtends();
      return this.PtU.update(tU.min, tU.max, this.meshes), this.PtU
    }, Object.defineProperty(tU.f.prototype, "selectionOctree", {
      get: function() {
        return this.PtU
      },
      enumerable: !0,
      configurable: !0
    }), EU.d.prototype.createOrUpdateSubmeshesOctree = function() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const gU = this.aZ();
      let tU = gU._getComponent(TU.d.NAME_OCTREE);
      tU || (tU = new cU(gU), gU.IgU(tU)), this._submeshesOctree || (this._submeshesOctree = new KU.e(KU.e.CreationFuncForSubMeshes, UU, RU)), this.computeWorldMatrix(!0);
      const pU = this.lY().boundingBox;
      return this._submeshesOctree.update(pU.minimumWorld, pU.maximumWorld, this.ZI), this._submeshesOctree
    })
  },
  40941: (UU, RU, gU) => {
    gU.d(RU, {
      C: () => wU,
      E: () => GU,
      c: () => aU,
      e: () => hU,
      i: () => CU,
      m: () => uU,
      q: () => oU,
      t: () => bU,
      w: () => JU,
      z: () => nU
    });
    var tU = gU(36602),
      pU = gU(36600),
      EU = gU(36610),
      PU = gU(39690),
      TU = gU(39513),
      qU = gU(36622),
      KU = gU(39574);
    const cU = {
      internalPickerForMesh: void 0
    };
    class GU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tU.e;
        this.origin = UU, this.direction = RU, this.length = gU, this.epsilon = pU
      }
      clone() {
        return new GU(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const tU = GU._TmpVector3[0].b_(UU.x - gU, UU.y - gU, UU.z - gU),
          pU = GU._TmpVector3[1].b_(RU.x + gU, RU.y + gU, RU.z + gU);
        let EU, PU, TU, qU, KU = 0,
          cU = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < tU.x || this.origin.x > pU.x) return !1
        } else if (EU = 1 / this.direction.x, PU = (tU.x - this.origin.x) * EU, TU = (pU.x - this.origin.x) * EU, TU === -1 / 0 && (TU = 1 / 0), PU > TU && (qU = PU, PU = TU, TU = qU), KU = Math.max(PU, KU), cU = Math.min(TU, cU), KU > cU) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < tU.y || this.origin.y > pU.y) return !1
        } else if (EU = 1 / this.direction.y, PU = (tU.y - this.origin.y) * EU, TU = (pU.y - this.origin.y) * EU, TU === -1 / 0 && (TU = 1 / 0), PU > TU && (qU = PU, PU = TU, TU = qU), KU = Math.max(PU, KU), cU = Math.min(TU, cU), KU > cU) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < tU.z || this.origin.z > pU.z) return !1
        } else if (EU = 1 / this.direction.z, PU = (tU.z - this.origin.z) * EU, TU = (pU.z - this.origin.z) * EU, TU === -1 / 0 && (TU = 1 / 0), PU > TU && (qU = PU, PU = TU, TU = qU), KU = Math.max(PU, KU), cU = Math.min(TU, cU), KU > cU) return !1;
        return !0
      }
      intersectsBox(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(UU.minimum, UU.maximum, RU)
      }
      intersectsSphere(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gU = UU.center.x - this.origin.x,
          tU = UU.center.y - this.origin.y,
          pU = UU.center.z - this.origin.z,
          EU = gU * gU + tU * tU + pU * pU,
          PU = UU.radius + RU,
          TU = PU * PU;
        if (EU <= TU) return !0;
        const qU = gU * this.direction.x + tU * this.direction.y + pU * this.direction.z;
        if (qU < 0) return !1;
        return EU - qU * qU <= TU
      }
      intersectsTriangle(UU, RU, gU) {
        const tU = GU._TmpVector3[0],
          EU = GU._TmpVector3[1],
          TU = GU._TmpVector3[2],
          qU = GU._TmpVector3[3],
          KU = GU._TmpVector3[4];
        RU.subtractToRef(UU, tU), gU.subtractToRef(UU, EU), pU.n.CrossToRef(this.direction, EU, TU);
        const cU = pU.n.Dot(tU, TU);
        if (0 === cU) return null;
        const jU = 1 / cU;
        this.origin.subtractToRef(UU, qU);
        const uU = pU.n.Dot(qU, TU) * jU;
        if (uU < -this.epsilon || uU > 1 + this.epsilon) return null;
        pU.n.CrossToRef(qU, tU, KU);
        const CU = pU.n.Dot(this.direction, KU) * jU;
        if (CU < -this.epsilon || uU + CU > 1 + this.epsilon) return null;
        const hU = pU.n.Dot(EU, KU) * jU;
        return hU > this.length || hU < 0 ? null : new PU.c(1 - uU - CU, uU, hU)
      }
      intersectsPlane(UU) {
        let RU;
        const gU = pU.n.Dot(UU.normal, this.direction);
        if (Math.abs(gU) < 9.99999997475243e-7) return null;
        {
          const tU = pU.n.Dot(UU.normal, this.origin);
          return RU = (-UU.d - tU) / gU, RU < 0 ? RU < -9.99999997475243e-7 ? null : 0 : RU
        }
      }
      intersectsAxis(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (UU) {
          case "y": {
            const UU = (this.origin.y - RU) / this.direction.y;
            return UU > 0 ? null : new pU.n(this.origin.x + this.direction.x * -UU, RU, this.origin.z + this.direction.z * -UU)
          }
          case "x": {
            const UU = (this.origin.x - RU) / this.direction.x;
            return UU > 0 ? null : new pU.n(RU, this.origin.y + this.direction.y * -UU, this.origin.z + this.direction.z * -UU)
          }
          case "z": {
            const UU = (this.origin.z - RU) / this.direction.z;
            return UU > 0 ? null : new pU.n(this.origin.x + this.direction.x * -UU, this.origin.y + this.direction.y * -UU, RU)
          }
          default:
            return null
        }
      }
      JtU(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          EU = arguments.length > 4 ? arguments[4] : void 0,
          PU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const TU = pU.h.Matrix[0];
        return UU.getWorldMatrix().invertToRef(TU), this._tmpRay ? GU.TransformToRef(this, TU, this._tmpRay) : this._tmpRay = GU.Transform(this, TU), UU.intersects(this._tmpRay, RU, gU, tU, EU, PU)
      }
      intersectsMeshes(UU, RU, gU) {
        gU ? gU.length = 0 : gU = [];
        for (let tU = 0; tU < UU.length; tU++) {
          const pU = this.JtU(UU[tU], RU);
          pU.hit && gU.push(pU)
        }
        return gU.sort(this._comparePickingInfo), gU
      }
      _comparePickingInfo(UU, RU) {
        return UU.distance < RU.distance ? -1 : UU.distance > RU.distance ? 1 : 0
      }
      intersectionSegment(UU, RU, gU) {
        const tU = this.origin,
          EU = pU.h.xC[0],
          PU = pU.h.xC[1],
          TU = pU.h.xC[2],
          qU = pU.h.xC[3];
        RU.subtractToRef(UU, EU), this.direction.scaleToRef(GU._Rayl, TU), tU.addToRef(TU, PU), UU.subtractToRef(tU, qU);
        const KU = pU.n.Dot(EU, EU),
          cU = pU.n.Dot(EU, TU),
          jU = pU.n.Dot(TU, TU),
          uU = pU.n.Dot(EU, qU),
          CU = pU.n.Dot(TU, qU),
          hU = KU * jU - cU * cU;
        let QU, eU, WU = hU,
          fU = hU;
        hU < GU._Smallnum ? (QU = 0, WU = 1, eU = CU, fU = jU) : (QU = cU * CU - jU * uU, eU = KU * CU - cU * uU, QU < 0 ? (QU = 0, eU = CU, fU = jU) : QU > WU && (QU = WU, eU = CU + cU, fU = jU)), eU < 0 ? (eU = 0, -uU < 0 ? QU = 0 : -uU > KU ? QU = WU : (QU = -uU, WU = KU)) : eU > fU && (eU = fU, -uU + cU < 0 ? QU = 0 : -uU + cU > KU ? QU = WU : (QU = -uU + cU, WU = KU));
        const xU = Math.abs(QU) < GU._Smallnum ? 0 : QU / WU,
          mU = Math.abs(eU) < GU._Smallnum ? 0 : eU / fU,
          IU = pU.h.xC[4];
        TU.scaleToRef(mU, IU);
        const JU = pU.h.xC[5];
        EU.scaleToRef(xU, JU), JU.addInPlace(qU);
        const wU = pU.h.xC[6];
        JU.subtractToRef(IU, wU);
        return mU > 0 && mU <= this.length && wU.lengthSquared() < gU * gU ? JU.length() : -1
      }
      update(UU, RU, gU, tU, EU, PU, TU) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          GU._RayDistant || (GU._RayDistant = GU.Zero()), GU._RayDistant.unprojectRayToRef(UU, RU, gU, tU, pU.c.IdentityReadOnly, PU, TU);
          const qU = pU.h.Matrix[0];
          EU.invertToRef(qU), GU.TransformToRef(GU._RayDistant, qU, this)
        } else this.unprojectRayToRef(UU, RU, gU, tU, EU, PU, TU);
        return this
      }
      static Zero() {
        return new GU(pU.n.Zero(), pU.n.Zero())
      }
      static CreateNew(UU, RU, gU, tU, pU, EU, PU) {
        return GU.Zero().update(UU, RU, gU, tU, pU, EU, PU)
      }
      static CreateNewFromTo(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pU.c.IdentityReadOnly;
        const tU = new GU(new pU.n(0, 0, 0), new pU.n(0, 0, 0));
        return GU.CreateFromToToRef(UU, RU, tU, gU)
      }
      static CreateFromToToRef(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pU.c.IdentityReadOnly;
        gU.origin.PgU(UU);
        const EU = RU.subtractToRef(UU, gU.direction),
          PU = Math.sqrt(EU.x * EU.x + EU.y * EU.y + EU.z * EU.z);
        return gU.length = PU, gU.direction.normalize(), GU.TransformToRef(gU, tU, gU)
      }
      static Transform(UU, RU) {
        const gU = new GU(new pU.n(0, 0, 0), new pU.n(0, 0, 0));
        return GU.TransformToRef(UU, RU, gU), gU
      }
      static TransformToRef(UU, RU, gU) {
        pU.n.TransformCoordinatesToRef(UU.origin, RU, gU.origin), pU.n.TransformNormalToRef(UU.direction, RU, gU.direction), gU.length = UU.length, gU.epsilon = UU.epsilon;
        const tU = gU.direction,
          EU = tU.length();
        if (0 !== EU && 1 !== EU) {
          const UU = 1 / EU;
          tU.x *= UU, tU.y *= UU, tU.z *= UU, gU.length *= EU
        }
        return gU
      }
      unprojectRayToRef(UU, RU, gU, tU, EU, PU, TU) {
        const KU = pU.h.Matrix[0];
        EU.multiplyToRef(PU, KU), KU.multiplyToRef(TU, KU), KU.invert();
        const cU = qU.c.LastCreatedEngine,
          GU = pU.h.xC[0];
        GU.x = UU / gU * 2 - 1, GU.y = -(RU / tU * 2 - 1), GU.z = cU?.VgU ? 1 : cU?.isNDCHalfZRange ? 0 : -1;
        const jU = pU.h.xC[1].b_(GU.x, GU.y, 1 - 1e-8),
          uU = pU.h.xC[2],
          CU = pU.h.xC[3];
        pU.n.TransformCoordinatesToRef(GU, KU, uU), pU.n.TransformCoordinatesToRef(jU, KU, CU), this.origin.PgU(uU), CU.subtractToRef(uU, this.direction), this.direction.normalize()
      }
    }

    function jU(UU, RU, gU, tU, pU) {
      let EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const PU = GU.Zero();
      return uU(UU, RU, gU, tU, PU, pU, EU), PU
    }

    function uU(UU, RU, gU, tU, EU, PU) {
      let TU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const KU = UU.WC();
      if (!PU && !(PU = UU.activeCamera) && !(PU = UU.cameraToUseForPointers)) return UU;
      const cU = PU.viewport,
        GU = KU.getRenderHeight(),
        {
          x: jU,
          y: uU,
          width: CU,
          height: hU
        } = cU.toGlobal(KU.getRenderWidth(), GU),
        QU = 1 / KU.getHardwareScalingLevel();
      return RU = RU * QU - jU, gU = gU * QU - (GU - uU - hU), EU.update(RU, gU, CU, hU, tU || pU.c.IdentityReadOnly, TU ? pU.c.IdentityReadOnly : PU.getViewMatrix(), PU.getProjectionMatrix(), qU), UU
    }

    function CU(UU, RU, gU, tU) {
      const pU = GU.Zero();
      return hU(UU, RU, gU, pU, tU), pU
    }

    function hU(UU, RU, gU, tU, EU) {
      if (!TU.b) return UU;
      const PU = UU.WC();
      if (!EU && !(EU = UU.activeCamera) && !(EU = UU.cameraToUseForPointers)) throw new Error("Active camera not set");
      const qU = EU.viewport,
        KU = PU.getRenderHeight(),
        {
          x: cU,
          y: GU,
          width: jU,
          height: uU
        } = qU.toGlobal(PU.getRenderWidth(), KU),
        CU = pU.c.Identity(),
        hU = 1 / PU.getHardwareScalingLevel();
      return RU = RU * hU - cU, gU = gU * hU - (KU - GU - uU), tU.update(RU, gU, jU, uU, CU, CU, EU.getProjectionMatrix()), UU
    }

    function QU(UU, RU, gU, tU, pU, EU, PU, TU) {
      return eU(UU, gU, tU, RU(tU, gU.enableDistantPicking), pU, EU, PU, TU)
    }

    function eU(UU, RU, gU, tU, pU, EU, PU, TU) {
      const qU = RU.intersects(tU, pU, PU, EU, gU, TU);
      return qU && qU.hit ? !pU && null != UU && qU.distance >= UU.distance ? null : qU : null
    }

    function WU(UU, RU) {
      return "InstancedLinesMesh" === UU || "LinesMesh" === UU ? RU.intersectionThreshold : 0
    }

    function fU(UU) {
      const RU = UU.getClassName();
      if ("GreasedLineMesh" === RU) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const gU = UU.rawBoundingInfo;
      return {
        rawBoundingInfo: gU,
        intersectionThreshold: gU ? WU(RU, UU) : 0
      }
    }

    function xU(UU, RU, gU, tU, pU) {
      const EU = UU(gU, RU.enableDistantPicking);
      return EU.intersectsSphere(tU.qtU, pU) && EU.intersectsBox(tU.boundingBox, pU) ? EU : null
    }

    function mU(UU, RU, gU, tU, EU, PU) {
      let qU = null;
      const KU = !!(UU.activeCameras && UU.activeCameras.length > 1 && UU.cameraToUseForPointers !== UU.activeCamera),
        GU = UU.cameraToUseForPointers || UU.activeCamera,
        jU = cU.internalPickerForMesh || QU,
        uU = jU === QU;
      for (let TU = 0; TU < UU.meshes.length; TU++) {
        const cU = UU.meshes[TU];
        if (gU) {
          if (!gU(cU, -1)) continue
        } else if (!cU.isEnabled() || !cU.isVisible || !cU.Yh) continue;
        const CU = KU && cU.isWorldMatrixCameraDependent(),
          hU = cU.computeWorldMatrix(CU, GU);
        if (cU.hasThinInstances && cU.RRU) {
          const UU = jU(qU, RU, cU, hU, !0, !0, PU);
          if (UU) {
            if (EU) return UU;
            const {
              rawBoundingInfo: TU,
              intersectionThreshold: KU
            } = fU(cU), GU = cU._thinInstanceDataStorage.matrixData;
            if (GU) {
              const UU = pU.h.Matrix[0],
                CU = pU.h.Matrix[1],
                QU = Math.min(cU.I6, GU.length >> 4);
              for (let WU = 0; WU < QU; WU++) {
                if (gU && !gU(cU, WU)) continue;
                pU.c.FromArrayToRef(GU, WU << 4, UU), UU.multiplyToRef(hU, CU);
                const QU = uU && TU ? xU(RU, cU, CU, TU, KU) : null;
                if (uU && TU && !QU) continue;
                const fU = uU && QU ? eU(qU, cU, CU, QU, tU, EU, PU, !0) : jU(qU, RU, cU, CU, tU, EU, PU, !0);
                if (fU && (qU = fU, qU.thinInstanceIndex = WU, tU)) return qU
              }
            }
          }
        } else {
          const UU = jU(qU, RU, cU, hU, tU, EU, PU);
          if (UU && (qU = UU, tU)) return qU
        }
      }
      return qU || new TU.b
    }

    function IU(UU, RU, gU, tU) {
      if (!TU.b) return null;
      const EU = [],
        PU = !!(UU.activeCameras && UU.activeCameras.length > 1 && UU.cameraToUseForPointers !== UU.activeCamera),
        qU = UU.cameraToUseForPointers || UU.activeCamera,
        KU = cU.internalPickerForMesh || QU,
        GU = KU === QU;
      for (let TU = 0; TU < UU.meshes.length; TU++) {
        const cU = UU.meshes[TU];
        if (gU) {
          if (!gU(cU, -1)) continue
        } else if (!cU.isEnabled() || !cU.isVisible || !cU.Yh) continue;
        const jU = PU && cU.isWorldMatrixCameraDependent(),
          uU = cU.computeWorldMatrix(jU, qU);
        if (cU.hasThinInstances && cU.RRU) {
          if (KU(null, RU, cU, uU, !0, !0, tU)) {
            const {
              rawBoundingInfo: UU,
              intersectionThreshold: PU
            } = fU(cU), TU = cU._thinInstanceDataStorage.matrixData;
            if (TU) {
              const qU = pU.h.Matrix[0],
                jU = pU.h.Matrix[1],
                CU = Math.min(cU.I6, TU.length >> 4);
              for (let hU = 0; hU < CU; hU++) {
                if (gU && !gU(cU, hU)) continue;
                pU.c.FromArrayToRef(TU, hU << 4, qU), qU.multiplyToRef(uU, jU);
                const CU = GU && UU ? xU(RU, cU, jU, UU, PU) : null;
                if (GU && UU && !CU) continue;
                const QU = GU && CU ? eU(null, cU, jU, CU, !1, !1, tU, !0) : KU(null, RU, cU, jU, !1, !1, tU, !0);
                QU && (QU.thinInstanceIndex = hU, EU.push(QU))
              }
            }
          }
        } else {
          const UU = KU(null, RU, cU, uU, !1, !1, tU);
          UU && EU.push(UU)
        }
      }
      return EU
    }

    function JU(UU, RU, gU, tU, EU, PU) {
      if (!TU.b) return null;
      const qU = mU(UU, (tU => (UU._tempPickingRay || (UU._tempPickingRay = GU.Zero()), uU(UU, RU, gU, tU, UU._tempPickingRay, PU || null), UU._tempPickingRay)), tU, EU, !0);
      return qU && (qU.ray = jU(UU, RU, gU, pU.c.Identity(), PU || null)), qU
    }

    function wU(UU, RU, gU, tU, EU, PU, TU) {
      const qU = mU(UU, ((tU, pU) => (UU._tempPickingRay || (UU._tempPickingRay = GU.Zero()), uU(UU, RU, gU, tU, UU._tempPickingRay, PU || null, !1, pU), UU._tempPickingRay)), tU, EU, !1, TU);
      return qU && (qU.ray = jU(UU, RU, gU, pU.c.Identity(), PU || null)), qU
    }

    function nU(UU, RU, gU, tU, EU) {
      const PU = mU(UU, (gU => (UU._pickWithRayInverseMatrix || (UU._pickWithRayInverseMatrix = pU.c.Identity()), gU.invertToRef(UU._pickWithRayInverseMatrix), UU._cachedRayForTransform || (UU._cachedRayForTransform = GU.Zero()), GU.TransformToRef(RU, UU._pickWithRayInverseMatrix, UU._cachedRayForTransform), UU._cachedRayForTransform)), gU, tU, !1, EU);
      return PU && (PU.ray = RU), PU
    }

    function bU(UU, RU, gU, tU, pU, EU) {
      return IU(UU, (tU => jU(UU, RU, gU, tU, pU || null)), tU, EU)
    }

    function oU(UU, RU, gU, tU) {
      return IU(UU, (gU => (UU._pickWithRayInverseMatrix || (UU._pickWithRayInverseMatrix = pU.c.Identity()), gU.invertToRef(UU._pickWithRayInverseMatrix), UU._cachedRayForTransform || (UU._cachedRayForTransform = GU.Zero()), GU.TransformToRef(RU, UU._pickWithRayInverseMatrix, UU._cachedRayForTransform), UU._cachedRayForTransform)), gU, tU)
    }

    function ZU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        tU = arguments.length > 3 ? arguments[3] : void 0,
        EU = arguments.length > 4 ? arguments[4] : void 0;
      tU || (tU = UU.getWorldMatrix()), RU.length = gU, EU ? RU.origin.PgU(EU) : RU.origin.PgU(UU.position);
      const PU = pU.h.xC[2];
      PU.set(0, 0, UU._scene.useRightHandedSystem ? -1 : 1);
      const TU = pU.h.xC[3];
      return pU.n.TransformNormalToRef(PU, tU, TU), pU.n.NormalizeToRef(TU, RU.direction), RU
    }

    function aU(UU, RU) {
      RU && (RU.prototype.getForwardRay = function() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        return ZU(this, new GU(pU.n.Zero(), pU.n.Zero(), UU), UU, RU, gU)
      }, RU.prototype.getForwardRayToRef = function(UU) {
        return ZU(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), UU && (KU.b._IsPickingAvailable = !0, UU.prototype.createPickingRay = function(UU, RU, gU, tU) {
        return jU(this, UU, RU, gU, tU, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    GU._TmpVector3 = (0, EU.e)(6, pU.n.Zero), GU._RayDistant = GU.Zero(), GU._Smallnum = 1e-8, GU._Rayl = 1e9
  },
  40934: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU.E
    });
    var tU = gU(39468),
      pU = gU(39603),
      EU = gU(40941);
    let PU = !1;
    PU || (PU = !0, (0, EU.c)(tU.f, pU.d), tU.f.prototype.createPickingRayToRef = function(UU, RU, gU, tU, pU) {
      let PU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        TU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, EU.m)(this, UU, RU, gU, tU, pU, PU, TU)
    }, tU.f.prototype.createPickingRayInCameraSpace = function(UU, RU, gU) {
      return (0, EU.i)(this, UU, RU, gU)
    }, tU.f.prototype.createPickingRayInCameraSpaceToRef = function(UU, RU, gU, tU) {
      return (0, EU.e)(this, UU, RU, gU, tU)
    }, tU.f.prototype.pickWithBoundingInfo = function(UU, RU, gU, tU, pU) {
      return (0, EU.w)(this, UU, RU, gU, tU, pU)
    }, tU.f.prototype.Hj = function(UU, RU, gU, tU, pU, PU) {
      let TU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, EU.C)(this, UU, RU, gU, tU, pU, PU, TU)
    }, tU.f.prototype.pickWithRay = function(UU, RU, gU, tU) {
      return (0, EU.z)(this, UU, RU, gU, tU)
    }, tU.f.prototype.multiPick = function(UU, RU, gU, tU, pU) {
      return (0, EU.t)(this, UU, RU, gU, tU, pU)
    }, tU.f.prototype.multiPickWithRay = function(UU, RU, gU) {
      return (0, EU.q)(this, UU, RU, gU)
    })
  },
  40946: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(36600),
      PU = gU(39645),
      TU = gU(40953),
      qU = gU(39610),
      KU = gU(36639);
    let cU = (() => {
        var UU;
        let RU, gU, qU, KU, cU, GU, jU, uU, CU = TU.d,
          hU = [],
          QU = [],
          eU = [],
          WU = [],
          fU = [],
          xU = [],
          mU = [],
          IU = [],
          JU = [],
          wU = [],
          nU = [],
          bU = [],
          oU = [];
        return UU = class extends CU {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(UU) {
            this._shadowFrustumSize = UU, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(UU) {
            this._shadowOrthoScale = UU, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(UU) {
            this._orthoLeft = UU
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(UU) {
            this._orthoRight = UU
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(UU) {
            this._orthoTop = UU
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(UU) {
            this._orthoBottom = UU
          }
          constructor(UU, RU, gU, pU) {
            super(UU, gU, pU), this._shadowFrustumSize = ((0, tU.j)(this, hU), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, tU.j)(this, QU, !0), this.autoCalcShadowZBounds = ((0, tU.j)(this, eU), (0, tU.j)(this, WU, !1)), this._orthoLeft = ((0, tU.j)(this, fU), (0, tU.j)(this, xU, Number.MAX_VALUE)), this._orthoRight = ((0, tU.j)(this, mU), (0, tU.j)(this, IU, Number.MIN_VALUE)), this._orthoTop = ((0, tU.j)(this, JU), (0, tU.j)(this, wU, Number.MIN_VALUE)), this._orthoBottom = ((0, tU.j)(this, nU), (0, tU.j)(this, bU, Number.MAX_VALUE)), (0, tU.j)(this, oU), this.position = RU.scale(-1), this.direction = RU
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return PU.e.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(UU, RU, gU) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(UU) : this._setDefaultAutoExtendShadowProjectionMatrix(UU, RU, gU)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(UU) {
            const RU = this.aZ().activeCamera;
            EU.c.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : RU ? RU.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : RU ? RU.maxZ : 1e4, UU, this.aZ().WC().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(UU, RU, gU) {
            const tU = this.aZ().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const UU = EU.n.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let tU = Number.MAX_VALUE,
                pU = -Number.MAX_VALUE;
              for (let PU = 0; PU < gU.length; PU++) {
                const TU = gU[PU];
                if (!TU) continue;
                const qU = TU.lY().boundingBox;
                for (let gU = 0; gU < qU.vectorsWorld.length; gU++) EU.n.TransformCoordinatesToRef(qU.vectorsWorld[gU], RU, UU), UU.x < this._orthoLeft && (this._orthoLeft = UU.x), UU.y < this._orthoBottom && (this._orthoBottom = UU.y), UU.x > this._orthoRight && (this._orthoRight = UU.x), UU.y > this._orthoTop && (this._orthoTop = UU.y), this.autoCalcShadowZBounds && (UU.z < tU && (tU = UU.z), UU.z > pU && (pU = UU.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = tU, this._shadowMaxZ = pU)
            }
            const pU = this._orthoRight - this._orthoLeft,
              PU = this._orthoTop - this._orthoBottom,
              TU = void 0 !== this.shadowMinZ ? this.shadowMinZ : tU?.minZ || 0,
              qU = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : tU?.maxZ || 1e4,
              KU = this.aZ().WC().VgU;
            EU.c.OrthoOffCenterLHToRef(this._orthoLeft - pU * this.shadowOrthoScale, this._orthoRight + pU * this.shadowOrthoScale, this._orthoBottom - PU * this.shadowOrthoScale, this._orthoTop + PU * this.shadowOrthoScale, KU ? qU : TU, KU ? TU : qU, UU, this.aZ().WC().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(UU, RU) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, RU), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, RU), this)
          }
          transferToNodeMaterialEffect(UU, RU) {
            return this.computeTransformedInformation() ? (UU.setFloat3(RU, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (UU.setFloat3(RU, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(UU) {
            const RU = this._scene.WC();
            return !RU.VgU && RU.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(UU) {
            const RU = this._scene.WC();
            return RU.VgU && RU.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(UU, RU) {
            UU["DIRLIGHT" + RU] = !0
          }
        }, (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(CU[Symbol.metadata] ?? null) : void 0;
          RU = [(0, pU.K)()], gU = [(0, pU.K)()], qU = [(0, pU.K)()], KU = [(0, pU.K)()], cU = [(0, pU.K)("orthoLeft")], GU = [(0, pU.K)("orthoRight")], jU = [(0, pU.K)("orthoTop")], uU = [(0, pU.K)("orthoBottom")], (0, tU.i)(UU, null, RU, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: UU => "shadowFrustumSize" in UU,
              get: UU => UU.shadowFrustumSize
            },
            metadata: EU
          }, null, hU), (0, tU.i)(UU, null, gU, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: UU => "shadowOrthoScale" in UU,
              get: UU => UU.shadowOrthoScale
            },
            metadata: EU
          }, null, hU), (0, tU.i)(null, null, qU, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: UU => "autoUpdateExtends" in UU,
              get: UU => UU.autoUpdateExtends,
              set: (UU, RU) => {
                UU.autoUpdateExtends = RU
              }
            },
            metadata: EU
          }, QU, eU), (0, tU.i)(null, null, KU, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: UU => "autoCalcShadowZBounds" in UU,
              get: UU => UU.autoCalcShadowZBounds,
              set: (UU, RU) => {
                UU.autoCalcShadowZBounds = RU
              }
            },
            metadata: EU
          }, WU, fU), (0, tU.i)(null, null, cU, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: UU => "_orthoLeft" in UU,
              get: UU => UU._orthoLeft,
              set: (UU, RU) => {
                UU._orthoLeft = RU
              }
            },
            metadata: EU
          }, xU, mU), (0, tU.i)(null, null, GU, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: UU => "_orthoRight" in UU,
              get: UU => UU._orthoRight,
              set: (UU, RU) => {
                UU._orthoRight = RU
              }
            },
            metadata: EU
          }, IU, JU), (0, tU.i)(null, null, jU, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: UU => "_orthoTop" in UU,
              get: UU => UU._orthoTop,
              set: (UU, RU) => {
                UU._orthoTop = RU
              }
            },
            metadata: EU
          }, wU, nU), (0, tU.i)(null, null, uU, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: UU => "_orthoBottom" in UU,
              get: UU => UU._orthoBottom,
              set: (UU, RU) => {
                UU._orthoBottom = RU
              }
            },
            metadata: EU
          }, bU, oU), EU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          })
        })(), UU
      })(),
      GU = !1;
    GU || (GU = !0, qU.b.AddNodeConstructor("Light_Type_1", ((UU, RU) => () => new cU(UU, EU.n.Zero(), RU))), (0, KU.g)("BABYLON.DirectionalLight", cU))
  },
  40963: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => AR
    });
    var tU = gU(38260),
      pU = gU(36624),
      EU = gU(36600),
      PU = gU(39517),
      TU = gU(40966),
      qU = gU(36622),
      KU = gU(39665),
      cU = gU(36761),
      GU = gU(38263),
      jU = gU(38234),
      uU = gU(36626);
    class CU {
      constructor() {
        this.direction1 = new EU.n(0, 1, 0), this.direction2 = new EU.n(0, 1, 0)
      }
      startDirectionFunction(UU, RU, gU, tU) {
        const pU = (0, uU.RandomRange)(this.direction1.x, this.direction2.x),
          PU = (0, uU.RandomRange)(this.direction1.y, this.direction2.y),
          TU = (0, uU.RandomRange)(this.direction1.z, this.direction2.z);
        tU ? RU.b_(pU, PU, TU) : EU.n.TransformNormalFromFloatsToRef(pU, PU, TU, UU, RU)
      }
      startPositionFunction(UU, RU, gU, tU) {
        tU ? RU.b_(0, 0, 0) : EU.n.TransformCoordinatesFromFloatsToRef(0, 0, 0, UU, RU)
      }
      clone() {
        const UU = new CU;
        return jU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(UU) {
        UU.addUniform("direction1", 3), UU.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.direction1 = this.direction1.vgU(), UU.direction2 = this.direction2.vgU(), UU
      }
      parse(UU) {
        EU.n.FromArrayToRef(UU.direction1, 0, this.direction1), EU.n.FromArrayToRef(UU.direction2, 0, this.direction2)
      }
    }
    class hU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = UU, this.radiusRange = RU, this.directionRandomizer = gU
      }
      startDirectionFunction(UU, RU, gU, tU) {
        const pU = gU.position.subtract(UU.getTranslation()).normalize(),
          PU = (0, uU.RandomRange)(0, this.directionRandomizer),
          TU = (0, uU.RandomRange)(0, this.directionRandomizer),
          qU = (0, uU.RandomRange)(0, this.directionRandomizer);
        pU.x += PU, pU.y += TU, pU.z += qU, pU.normalize(), tU ? RU.PgU(pU) : EU.n.TransformNormalFromFloatsToRef(pU.x, pU.y, pU.z, UU, RU)
      }
      startPositionFunction(UU, RU, gU, tU) {
        const pU = this.radius - (0, uU.RandomRange)(0, this.radius * this.radiusRange),
          PU = (0, uU.RandomRange)(0, 1),
          TU = (0, uU.RandomRange)(0, 2 * Math.PI),
          qU = Math.acos(2 * PU - 1),
          KU = pU * Math.cos(TU) * Math.sin(qU),
          cU = pU * Math.cos(qU),
          GU = pU * Math.sin(TU) * Math.sin(qU);
        tU ? RU.b_(KU, Math.abs(cU), GU) : EU.n.TransformCoordinatesFromFloatsToRef(KU, Math.abs(cU), GU, UU, RU)
      }
      clone() {
        const UU = new hU(this.radius, this.directionRandomizer);
        return jU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat("radius", this.radius), UU.setFloat("radiusRange", this.radiusRange), UU.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 1), UU.addUniform("radiusRange", 1), UU.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.radius = this.radius, UU.radiusRange = this.radiusRange, UU.directionRandomizer = this.directionRandomizer, UU
      }
      parse(UU) {
        this.radius = UU.radius, this.radiusRange = UU.radiusRange, this.directionRandomizer = UU.directionRandomizer
      }
    }
    class QU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = UU, this.radiusRange = RU, this.directionRandomizer = gU
      }
      startDirectionFunction(UU, RU, gU, tU) {
        const pU = gU.position.subtract(UU.getTranslation()).normalize(),
          PU = (0, uU.RandomRange)(0, this.directionRandomizer),
          TU = (0, uU.RandomRange)(0, this.directionRandomizer),
          qU = (0, uU.RandomRange)(0, this.directionRandomizer);
        pU.x += PU, pU.y += TU, pU.z += qU, pU.normalize(), tU ? RU.PgU(pU) : EU.n.TransformNormalFromFloatsToRef(pU.x, pU.y, pU.z, UU, RU)
      }
      startPositionFunction(UU, RU, gU, tU) {
        const pU = this.radius - (0, uU.RandomRange)(0, this.radius * this.radiusRange),
          PU = (0, uU.RandomRange)(0, 1),
          TU = (0, uU.RandomRange)(0, 2 * Math.PI),
          qU = Math.acos(2 * PU - 1),
          KU = pU * Math.cos(TU) * Math.sin(qU),
          cU = pU * Math.cos(qU),
          GU = pU * Math.sin(TU) * Math.sin(qU);
        tU ? RU.b_(KU, cU, GU) : EU.n.TransformCoordinatesFromFloatsToRef(KU, cU, GU, UU, RU)
      }
      clone() {
        const UU = new QU(this.radius, this.directionRandomizer);
        return jU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat("radius", this.radius), UU.setFloat("radiusRange", this.radiusRange), UU.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 1), UU.addUniform("radiusRange", 1), UU.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.radius = this.radius, UU.radiusRange = this.radiusRange, UU.directionRandomizer = this.directionRandomizer, UU
      }
      parse(UU) {
        this.radius = UU.radius, this.radiusRange = UU.radiusRange, this.directionRandomizer = UU.directionRandomizer
      }
    }
    class eU extends QU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new EU.n(0, 1, 0),
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new EU.n(0, 1, 0);
        super(UU), this.direction1 = RU, this.direction2 = gU
      }
      startDirectionFunction(UU, RU, gU, tU) {
        const pU = (0, uU.RandomRange)(this.direction1.x, this.direction2.x),
          PU = (0, uU.RandomRange)(this.direction1.y, this.direction2.y),
          TU = (0, uU.RandomRange)(this.direction1.z, this.direction2.z);
        tU ? RU.b_(pU, PU, TU) : EU.n.TransformNormalFromFloatsToRef(pU, PU, TU, UU, RU)
      }
      clone() {
        const UU = new eU(this.radius, this.direction1, this.direction2);
        return jU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat("radius", this.radius), UU.setFloat("radiusRange", this.radiusRange), UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 1), UU.addUniform("radiusRange", 1), UU.addUniform("direction1", 3), UU.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const UU = super.serialize();
        return UU.direction1 = this.direction1.vgU(), UU.direction2 = this.direction2.vgU(), UU
      }
      parse(UU) {
        super.parse(UU), EU.n.FromArrayToRef(UU.direction1, 0, this.direction1), EU.n.FromArrayToRef(UU.direction2, 0, this.direction2)
      }
    }
    var WU = gU(38226);
    class fU {
      get radius() {
        return this._radius
      }
      set radius(UU) {
        this._radius = UU, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(UU) {
        this._angle = UU, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = gU, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = RU, this.radius = UU
      }
      startDirectionFunction(UU, RU, gU, tU) {
        const pU = gU.position.subtract(UU.getTranslation()).normalize(),
          PU = (0, uU.RandomRange)(0, this.directionRandomizer),
          TU = (0, uU.RandomRange)(0, this.directionRandomizer),
          qU = (0, uU.RandomRange)(0, this.directionRandomizer);
        pU.x += PU, pU.y += TU, pU.z += qU, pU.normalize(), tU ? RU.PgU(pU) : EU.n.TransformNormalFromFloatsToRef(pU.x, pU.y, pU.z, UU, RU)
      }
      startPositionFunction(UU, RU, gU, tU) {
        const pU = (0, uU.RandomRange)(0, 2 * Math.PI);
        let PU;
        this.emitFromSpawnPointOnly ? PU = 1e-4 : (PU = (0, uU.RandomRange)(0, this.heightRange), PU = 1 - PU * PU);
        let TU = this._radius - (0, uU.RandomRange)(0, this._radius * this.radiusRange);
        TU *= PU;
        const qU = TU * Math.sin(pU),
          KU = TU * Math.cos(pU),
          cU = PU * this._height;
        if (tU) return RU.x = qU, RU.y = cU, void(RU.z = KU);
        EU.n.TransformCoordinatesFromFloatsToRef(qU, cU, KU, UU, RU)
      }
      clone() {
        const UU = new fU(this._radius, this._angle, this.directionRandomizer);
        return jU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat2("radius", this._radius, this.radiusRange), UU.setFloat("coneAngle", this._angle), UU.setFloat2("height", this._height, this.heightRange), UU.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 2), UU.addUniform("coneAngle", 1), UU.addUniform("height", 2), UU.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let UU = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (UU += "\n#define CONEEMITTERSPAWNPOINT"), UU
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.radius = this._radius, UU.angle = this._angle, UU.directionRandomizer = this.directionRandomizer, UU.radiusRange = this.radiusRange, UU.heightRange = this.heightRange, UU.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, UU
      }
      parse(UU) {
        this.radius = UU.radius, this.angle = UU.angle, this.directionRandomizer = UU.directionRandomizer, this.radiusRange = void 0 !== UU.radiusRange ? UU.radiusRange : 1, this.heightRange = void 0 !== UU.heightRange ? UU.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== UU.emitFromSpawnPointOnly && UU.emitFromSpawnPointOnly
      }
    }
    class xU extends fU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new EU.n(0, 1, 0),
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new EU.n(0, 1, 0);
        super(UU, RU), this.direction1 = gU, this.direction2 = tU
      }
      startDirectionFunction(UU, RU, gU, tU) {
        const pU = (0, uU.RandomRange)(this.direction1.x, this.direction2.x),
          PU = (0, uU.RandomRange)(this.direction1.y, this.direction2.y),
          TU = (0, uU.RandomRange)(this.direction1.z, this.direction2.z);
        tU ? RU.b_(pU, PU, TU) : EU.n.TransformNormalFromFloatsToRef(pU, PU, TU, UU, RU)
      }
      clone() {
        const UU = new xU(this.radius, this.angle, this.direction1, this.direction2);
        return jU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        super.applyToShader(UU), UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(UU) {
        super.buildUniformLayout(UU), UU.addUniform("direction1", 3), UU.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const UU = super.serialize();
        return UU.direction1 = this.direction1.vgU(), UU.direction2 = this.direction2.vgU(), UU
      }
      parse(UU) {
        super.parse(UU), EU.n.FromArrayToRef(UU.direction1, 0, this.direction1), EU.n.FromArrayToRef(UU.direction2, 0, this.direction2)
      }
    }
    class mU {
      get mesh() {
        return this._mesh
      }
      set mesh(UU) {
        this._mesh !== UU && (this._mesh = UU, UU ? (this._indices = UU.dgU(), this._positions = UU.getVerticesData(PU.l.PositionKind), this._normals = UU.getVerticesData(PU.l.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = EU.n.Zero(), this._mesh = null, this.direction1 = new EU.n(0, 1, 0), this.direction2 = new EU.n(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = UU
      }
      startDirectionFunction(UU, RU, gU, tU) {
        if (this.useMeshNormalsForDirection && this._normals) return void EU.n.TransformNormalToRef(this._storedNormal, UU, RU);
        const pU = (0, uU.RandomRange)(this.direction1.x, this.direction2.x),
          PU = (0, uU.RandomRange)(this.direction1.y, this.direction2.y),
          TU = (0, uU.RandomRange)(this.direction1.z, this.direction2.z);
        tU ? RU.b_(pU, PU, TU) : EU.n.TransformNormalFromFloatsToRef(pU, PU, TU, UU, RU)
      }
      startPositionFunction(UU, RU, gU, tU) {
        if (!this._indices || !this._positions) return;
        const pU = 3 * (Math.random() * (this._indices.length / 3) | 0),
          PU = Math.random(),
          TU = Math.random() * (1 - PU),
          qU = 1 - PU - TU,
          KU = this._indices[pU],
          cU = this._indices[pU + 1],
          GU = this._indices[pU + 2],
          jU = EU.h.xC[0],
          uU = EU.h.xC[1],
          CU = EU.h.xC[2],
          hU = EU.h.xC[3];
        EU.n.FromArrayToRef(this._positions, 3 * KU, jU), EU.n.FromArrayToRef(this._positions, 3 * cU, uU), EU.n.FromArrayToRef(this._positions, 3 * GU, CU), hU.x = PU * jU.x + TU * uU.x + qU * CU.x, hU.y = PU * jU.y + TU * uU.y + qU * CU.y, hU.z = PU * jU.z + TU * uU.z + qU * CU.z, tU ? RU.b_(hU.x, hU.y, hU.z) : EU.n.TransformCoordinatesFromFloatsToRef(hU.x, hU.y, hU.z, UU, RU), this.useMeshNormalsForDirection && this._normals && (EU.n.FromArrayToRef(this._normals, 3 * KU, jU), EU.n.FromArrayToRef(this._normals, 3 * cU, uU), EU.n.FromArrayToRef(this._normals, 3 * GU, CU), this._storedNormal.x = PU * jU.x + TU * uU.x + qU * CU.x, this._storedNormal.y = PU * jU.y + TU * uU.y + qU * CU.y, this._storedNormal.z = PU * jU.z + TU * uU.z + qU * CU.z)
      }
      clone() {
        const UU = new mU(this.mesh);
        return jU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(UU) {
        UU.addUniform("direction1", 3), UU.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.direction1 = this.direction1.vgU(), UU.direction2 = this.direction2.vgU(), UU.meshId = this.mesh?.id, UU.useMeshNormalsForDirection = this.useMeshNormalsForDirection, UU
      }
      parse(UU, RU) {
        EU.n.FromArrayToRef(UU.direction1, 0, this.direction1), EU.n.FromArrayToRef(UU.direction2, 0, this.direction2), UU.meshId && RU && (this.mesh = RU.getLastMeshById(UU.meshId)), this.useMeshNormalsForDirection = UU.useMeshNormalsForDirection
      }
    }
    class IU {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(UU) {
        this._targetStopDuration !== UU && (this._targetStopDuration = UU)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(UU) {
        this._noiseTexture !== UU && (this._noiseTexture = UU, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(UU) {
        this._attractors.push(UU)
      }
      removeAttractor(UU) {
        const RU = this._attractors.indexOf(UU); - 1 !== RU && this._attractors.splice(RU, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(UU) {
        this._animationSheetEnabled !== UU && (this._animationSheetEnabled = UU)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(UU) {
        this._isAnimationSheetEnabled != UU && (this._isAnimationSheetEnabled = UU, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(UU) {
        this._useLogarithmicDepth = UU && this.aZ().WC().getCaps().fragmentDepthSupported
      }
      aZ() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(UU) {
        switch (UU) {
          case IU.BLENDMODE_MULTIPLYADD:
            return;
          case IU.BLENDMODE_ADD:
            UU = 1;
            break;
          case IU.BLENDMODE_ONEONE:
            UU = 6;
            break;
          case IU.BLENDMODE_STANDARD:
            UU = 2;
            break;
          case IU.BLENDMODE_MULTIPLY:
            UU = 4;
            break;
          case IU.BLENDMODE_SUBTRACT:
            UU = 3
        }
        this._engine.setAlphaMode(UU)
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
      addEmitRateGradient(UU, RU, gU) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, UU, RU, gU), this
      }
      removeEmitRateGradient(UU) {
        return this._removeFactorGradient(this._emitRateGradients, UU), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : EU.n.Zero()
      }
      set direction1(UU) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = UU)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : EU.n.Zero()
      }
      set direction2(UU) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = UU)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : EU.n.Zero()
      }
      set minEmitBox(UU) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = UU)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : EU.n.Zero()
      }
      set maxEmitBox(UU) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = UU)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(UU) {
        this._billboardMode !== UU && (this._billboardMode = UU, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(UU) {
        this._isBillboardBased !== UU && (this._isBillboardBased = UU, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(UU) {
        this._attachImageProcessingConfiguration(UU)
      }
      _attachImageProcessingConfiguration(UU) {
        UU !== this._imageProcessingConfiguration && (!UU && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = UU)
      }
      _reset() {}
      _addFactorGradient(UU, RU, gU, pU) {
        const EU = new tU.f(RU, gU, pU);
        UU.push(EU), UU.sort(((UU, RU) => UU.gradient < RU.gradient ? -1 : UU.gradient > RU.gradient ? 1 : 0))
      }
      _removeFactorGradient(UU, RU) {
        if (!UU) return;
        let gU = 0;
        for (const tU of UU) {
          if (tU.gradient === RU) {
            UU.splice(gU, 1);
            break
          }
          gU++
        }
      }
      _removeGradientAndTexture(UU, RU, gU) {
        if (!RU) return this;
        let tU = 0;
        for (const pU of RU) {
          if (pU.gradient === UU) {
            RU.splice(tU, 1);
            break
          }
          tU++
        }
        return gU && gU.dispose(), this
      }
      constructor(UU) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = EU.n.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new EU.n(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = IU.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new EU.l(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new EU.n(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = EU.n.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new cU.g(1, 1, 1, 1), this.color2 = new cU.g(1, 1, 1, 1), this.colorDead = new cU.g(0, 0, 0, 1), this.textureMask = new cU.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new KU.b, this.id = UU, this.name = UU
      }
      createPointEmitter(UU, RU) {
        const gU = function(UU, RU) {
          const gU = new CU;
          return gU.direction1 = UU, gU.direction2 = RU, gU
        }(UU, RU);
        return this.particleEmitterType = gU, gU
      }
      createHemisphericEmitter() {
        const UU = function() {
          return new hU(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = UU, UU
      }
      createSphereEmitter() {
        const UU = function() {
          return new QU(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = UU, UU
      }
      createDirectedSphereEmitter() {
        const UU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new EU.n(0, 1, 0),
            gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new EU.n(0, 1, 0);
          return new eU(UU, RU, gU)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new EU.n(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new EU.n(0, 1, 0));
        return this.particleEmitterType = UU, UU
      }
      createCylinderEmitter() {
        const UU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new WU.g(UU, RU, gU, tU)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = UU, UU
      }
      createDirectedCylinderEmitter() {
        const UU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new EU.n(0, 1, 0),
            pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new EU.n(0, 1, 0);
          return new WU.d(UU, RU, gU, tU, pU)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new EU.n(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new EU.n(0, 1, 0));
        return this.particleEmitterType = UU, UU
      }
      createConeEmitter() {
        const UU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new fU(UU, RU)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = UU, UU
      }
      createDirectedConeEmitter() {
        const UU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new EU.n(0, 1, 0),
            tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new EU.n(0, 1, 0);
          return new xU(UU, RU, gU, tU)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new EU.n(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new EU.n(0, 1, 0));
        return this.particleEmitterType = UU, UU
      }
      createBoxEmitter(UU, RU, gU, tU) {
        const pU = new GU.c;
        return this.particleEmitterType = pU, this.direction1 = UU, this.direction2 = RU, this.minEmitBox = gU, this.maxEmitBox = tU, pU
      }
      createMeshEmitter() {
        const UU = function() {
          return new mU(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = UU, UU
      }
    }
    IU.BLENDMODE_ONEONE = 0, IU.BLENDMODE_STANDARD = 1, IU.BLENDMODE_ADD = 2, IU.BLENDMODE_MULTIPLY = 3, IU.BLENDMODE_MULTIPLYADD = 4, IU.BLENDMODE_SUBTRACT = -1;
    class JU {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new cU.g(0, 0, 0, 0), this.currentColor2 = new cU.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = EU.n.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class wU {
      constructor(UU) {
        this.particleSystem = UU, this.position = EU.n.Zero(), this.direction = EU.n.Zero(), this.color = new cU.g(0, 0, 0, 0), this.colorStep = new cU.g(0, 0, 0, 0), this.initialColor = new cU.g(0, 0, 0, 0), this.colorDead = new cU.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new EU.l(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new JU, this.id = wU._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let UU = this.age,
          RU = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === RU ? (RU = 1, UU = this._properties.randomCellOffset) : UU += this._properties.randomCellOffset);
        const gU = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let tU;
        tU = this._properties.initialSpriteCellLoop ? (0, uU.Clamp)(UU * RU % this.lifeTime / this.lifeTime) : (0, uU.Clamp)(UU * RU / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + tU * gU | 0
      }
      _inheritParticleInfoToSubEmitter(UU) {
        if (UU.particleSystem.emitter.position) {
          const RU = UU.particleSystem.emitter;
          if (RU.position.PgU(this.position), UU.inheritDirection) {
            const UU = EU.h.xC[0];
            this.direction.normalizeToRef(UU), RU.setDirection(UU, 0, Math.PI / 2)
          }
        } else {
          UU.particleSystem.emitter.PgU(this.position)
        }
        this.direction.scaleToRef(UU.inheritedVelocityAmount / 2, EU.h.xC[0]), UU.particleSystem._inheritedVelocityOffset.PgU(EU.h.xC[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const UU of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(UU)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = wU._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(UU) {
        UU.position.PgU(this.position), this._properties.initialDirection ? UU._properties.initialDirection ? UU._properties.initialDirection.PgU(this._properties.initialDirection) : UU._properties.initialDirection = this._properties.initialDirection.clone() : UU._properties.initialDirection = null, UU.direction.PgU(this.direction), this._properties.localPosition && (UU._properties.localPosition ? UU._properties.localPosition.PgU(this._properties.localPosition) : UU._properties.localPosition = this._properties.localPosition.clone()), UU.color.PgU(this.color), UU.colorStep.PgU(this.colorStep), UU.initialColor.PgU(this.initialColor), UU.colorDead.PgU(this.colorDead), UU.lifeTime = this.lifeTime, UU.age = this.age, UU._properties.randomCellOffset = this._properties.randomCellOffset, UU.size = this.size, UU.scale.PgU(this.scale), UU.angle = this.angle, UU.angularSpeed = this.angularSpeed, UU.particleSystem = this.particleSystem, UU.cellIndex = this.cellIndex, UU.id = this.id, UU._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (UU._properties.currentColorGradient = this._properties.currentColorGradient, UU._properties.currentColor1.PgU(this._properties.currentColor1), UU._properties.currentColor2.PgU(this._properties.currentColor2)), this._properties.currentSizeGradient && (UU._properties.currentSizeGradient = this._properties.currentSizeGradient, UU._properties.currentSize1 = this._properties.currentSize1, UU._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (UU._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, UU._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, UU._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (UU._properties.currentVelocityGradient = this._properties.currentVelocityGradient, UU._properties.currentVelocity1 = this._properties.currentVelocity1, UU._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (UU._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, UU._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, UU._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (UU._properties.currentDragGradient = this._properties.currentDragGradient, UU._properties.currentDrag1 = this._properties.currentDrag1, UU._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (UU._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, UU._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, UU._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (UU.remapData && this.remapData ? UU.remapData.PgU(this.remapData) : UU.remapData = new EU.q(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (UU._properties.randomNoiseCoordinates1 && UU._properties.randomNoiseCoordinates2 ? (UU._properties.randomNoiseCoordinates1.PgU(this._properties.randomNoiseCoordinates1), UU._properties.randomNoiseCoordinates2.PgU(this._properties.randomNoiseCoordinates2)) : (UU._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), UU._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), UU.metadata = this.metadata
      }
    }
    wU._Count = 0;
    var nU = gU(40477);
    class bU {
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
      constructor(UU, RU, gU, tU) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = RU, this.nD = UU, this._scene = gU, this._host = tU, this._activeTargets = [], RU._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            mE: this._getCorrectLoopMode()
          }, this._animation.dataType === nU.e.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = EU.c.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const UU = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, UU)
        }
        if (this.nD instanceof Array) {
          let UU = 0;
          for (const RU of this.nD) this._preparePath(RU, UU), this._getOriginalValues(UU), UU++;
          this._targetIsArray = !0
        } else this._preparePath(this.nD), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const pU = RU.getEvents();
        if (pU && pU.length > 0)
          for (const EU of pU) this._events.push(EU._clone());
        this._enableBlending = UU && UU.animationPropertiesOverride ? UU.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gU = this._animation.targetPropertyPath;
        if (gU.length > 1) {
          let tU = UU;
          for (let UU = 0; UU < gU.length - 1; UU++) {
            const RU = gU[UU];
            if (tU = tU[RU], void 0 === tU) throw new Error(`Invalid property (${RU}) in property path (${gU.join(".")})`)
          }
          this._targetPath = gU[gU.length - 1], this._activeTargets[RU] = tU
        } else this._targetPath = gU[0], this._activeTargets[RU] = UU;
        if (void 0 === this._activeTargets[RU][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${gU.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.nD instanceof Array) {
            let UU = 0;
            for (const RU of this.nD) void 0 !== this._originalValue[UU] && this._setValue(RU, this._activeTargets[UU], this._originalValue[UU], -1, UU), UU++
          } else void 0 !== this._originalValue[0] && this._setValue(this.nD, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let UU = 0; UU < this._events.length; UU++) this._events[UU].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const UU = this._animation.runtimeAnimations.indexOf(this);
        UU > -1 && this._animation.runtimeAnimations.splice(UU, 1)
      }
      setValue(UU, RU) {
        if (this._targetIsArray)
          for (let gU = 0; gU < this.nD.length; gU++) {
            const tU = this.nD[gU];
            this._setValue(tU, this._activeTargets[gU], UU, RU, gU)
          } else this._setValue(this.nD, this._directTarget, UU, RU, 0)
      }
      _getOriginalValues() {
        let UU, RU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const gU = this._activeTargets[RU];
        if (nU.e.InheritOriginalValueFromActiveAnimations) {
          const UU = this._scene._activeAnimatables;
          for (let tU = 0; tU < UU.length; tU++) {
            const pU = UU[tU]._runtimeAnimations;
            for (let UU = 0; UU < pU.length; UU++) {
              const tU = pU[UU];
              if (tU !== this && tU._targetPath === this._targetPath)
                for (let UU = 0; UU < tU._activeTargets.length; UU++)
                  if (tU._activeTargets[UU] === gU && void 0 !== tU._originalValue[UU]) return void(tU._originalValue[UU] && tU._originalValue[UU].clone ? this._originalValue[RU] = tU._originalValue[UU].clone() : this._originalValue[RU] = tU._originalValue[UU])
            }
          }
        }
        UU = gU.getLocalMatrix && "_matrix" === this._targetPath ? gU.getLocalMatrix() : gU[this._targetPath], UU && UU.clone ? this._originalValue[RU] = UU.clone() : this._originalValue[RU] = UU
      }
      _registerTargetForLateAnimationBinding(UU, RU) {
        const gU = UU.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(gU), gU._lateAnimationHolders || (gU._lateAnimationHolders = {}), gU._lateAnimationHolders[UU.targetPath] || (gU._lateAnimationHolders[UU.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: RU
        }), UU.isAdditive ? (gU._lateAnimationHolders[UU.targetPath].additiveAnimations.push(UU), gU._lateAnimationHolders[UU.targetPath].totalAdditiveWeight += UU.weight) : (gU._lateAnimationHolders[UU.targetPath].animations.push(UU), gU._lateAnimationHolders[UU.targetPath].totalWeight += UU.weight)
      }
      _setValue(UU, RU, gU, tU, pU) {
        const PU = this._scene._animationWrites,
          TU = this._scene._animationWriteCount++;
        let qU = PU[TU];
        if (qU || (qU = PU[TU] = {
            runtimeAnimation: this,
            target: UU,
            weight: tU,
            additive: !1,
            blendingFactor: 1,
            ih: !1
          }), qU.runtimeAnimation = this, qU.target = UU, qU.weight = tU, qU.additive = this.isAdditive, qU.ih = !1, this._currentActiveTarget = RU, this._weight = tU, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const UU = RU[this._targetPath];
            UU.clone ? this._originalBlendValue = UU.clone() : this._originalBlendValue = UU
          }
          this._originalBlendValue.m ? nU.e.AllowMatrixDecomposeForInterpolation ? this._currentValue ? EU.c.DecomposeLerpToRef(this._originalBlendValue, gU, this._blendingFactor, this._currentValue) : this._currentValue = EU.c.DecomposeLerp(this._originalBlendValue, gU, this._blendingFactor) : this._currentValue ? EU.c.LerpToRef(this._originalBlendValue, gU, this._blendingFactor, this._currentValue) : this._currentValue = EU.c.Lerp(this._originalBlendValue, gU, this._blendingFactor) : this._currentValue = nU.e._UniversalLerp(this._originalBlendValue, gU, this._blendingFactor);
          const tU = UU && UU.animationPropertiesOverride ? UU.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          qU.blendingFactor = this._blendingFactor, this._blendingFactor += tU
        } else qU.blendingFactor = 1, this._currentValue ? this._currentValue.PgU ? this._currentValue.PgU(gU) : this._currentValue = gU : this._currentValue = gU?.clone ? gU.clone() : gU; - 1 !== tU ? this._registerTargetForLateAnimationBinding(this, this._originalValue[pU]) : this._animationState.mE === nU.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[pU], RU[this._targetPath]) : RU[this._targetPath] = this._originalValue[pU] + this._currentValue : RU[this._targetPath] = this._currentValue, UU.cRU && UU.cRU(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.nD && this.nD.animationPropertiesOverride) {
          return "MorphTarget" === this.nD.getClassName?.() && null == this.nD._animationPropertiesOverride ? this._animation.mE : this.nD.animationPropertiesOverride.mE
        }
        return this._animation.mE
      }
      goToFrame(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const gU = this._animation.getKeys();
        UU < gU[0].frame ? UU = gU[0].frame : UU > gU[gU.length - 1].frame && (UU = gU[gU.length - 1].frame);
        const tU = this._events;
        if (tU.length)
          for (let EU = 0; EU < tU.length; EU++) tU[EU].onlyOnce || (tU[EU].isDone = tU[EU].frame < UU);
        this._currentFrame = UU;
        const pU = this._animation._interpolate(UU, this._animationState);
        this.setValue(pU, RU)
      }
      _prepareForSpeedRatioChange(UU) {
        const RU = this._previousElapsedTime * (this._animation.framePerSecond * UU) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - RU
      }
      animate(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const PU = this._animation,
          TU = PU.targetPropertyPath;
        if (!TU || TU.length < 1) return this._stopped = !0, !1;
        let qU, KU = !0;
        const cU = this._events;
        let GU;
        if (this._coreRuntimeAnimation) GU = gU - RU, qU = this._coreRuntimeAnimation.currentFrame, this._currentFrame = qU, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let EU;
          (RU < this._minFrame || RU > this._maxFrame) && (RU = this._minFrame), (gU < this._minFrame || gU > this._maxFrame) && (gU = this._maxFrame), GU = gU - RU;
          let TU = UU * (PU.framePerSecond * pU) / 1e3 + this._absoluteFrameOffset,
            jU = 0,
            uU = !1;
          const CU = tU && this._animationState.mE === nU.e.ANIMATIONLOOPMODE_YOYO;
          if (CU) {
            const UU = (TU - RU) / GU,
              gU = Math.sin(UU * Math.PI);
            TU = Math.abs(gU) * GU + RU;
            const tU = gU >= 0 ? 1 : -1;
            this._yoyoDirection !== tU && (uU = !0), this._yoyoDirection = tU
          }
          if (this._previousElapsedTime = UU, this._previousAbsoluteFrame = TU, !tU && gU >= RU && (TU >= GU && pU > 0 || TU <= 0 && pU < 0)) KU = !1, jU = PU.evaluate(gU);
          else if (!tU && RU >= gU && (TU <= GU && pU < 0 || TU >= 0 && pU > 0)) KU = !1, jU = PU.evaluate(RU);
          else if (this._animationState.mE !== nU.e.ANIMATIONLOOPMODE_CYCLE) {
            const UU = gU.toString() + RU.toString();
            if (!this._offsetsCache[UU]) {
              this._animationState.repeatCount = 0, this._animationState.mE = nU.e.ANIMATIONLOOPMODE_CYCLE;
              const tU = PU._interpolate(RU, this._animationState),
                pU = PU._interpolate(gU, this._animationState);
              switch (this._animationState.mE = this._getCorrectLoopMode(), PU.dataType) {
                case nU.e.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[UU] = pU - tU;
                  break;
                case nU.e.ANIMATIONTYPE_QUATERNION:
                case nU.e.ANIMATIONTYPE_VECTOR3:
                case nU.e.ANIMATIONTYPE_VECTOR2:
                case nU.e.ANIMATIONTYPE_SIZE:
                case nU.e.ANIMATIONTYPE_COLOR3:
                case nU.e.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[UU] = pU.subtract(tU)
              }
              this._highLimitsCache[UU] = pU
            }
            jU = this._highLimitsCache[UU], EU = this._offsetsCache[UU]
          }
          if (void 0 === EU) switch (PU.dataType) {
            case nU.e.ANIMATIONTYPE_FLOAT:
              EU = 0;
              break;
            case nU.e.ANIMATIONTYPE_QUATERNION:
              EU = nU.n;
              break;
            case nU.e.ANIMATIONTYPE_VECTOR3:
              EU = nU.w;
              break;
            case nU.e.ANIMATIONTYPE_VECTOR2:
              EU = nU.u;
              break;
            case nU.e.ANIMATIONTYPE_SIZE:
              EU = nU.r;
              break;
            case nU.e.ANIMATIONTYPE_COLOR3:
              EU = nU.j;
              break;
            case nU.e.ANIMATIONTYPE_COLOR4:
              EU = nU.k
          }
          const hU = this._host ? this._host.syncRoot : null;
          let QU, eU = this._playbackFrames,
            WU = !1;
          if (hU) {
            const UU = hU.toFrame - hU.fromFrame,
              gU = hU.masterFrame,
              tU = (gU - hU.fromFrame) / UU;
            qU = RU + GU * tU;
            const pU = hU.getAnimations()[0];
            if (pU && 0 !== UU) {
              const UU = GU * tU,
                RU = pU._playbackTo - pU._playbackFrom;
              if (0 !== RU && pU._playbackFrom <= hU.fromFrame && pU._playbackTo >= hU.toFrame) {
                eU = GU * Math.round((pU._playbackFrames - (pU._currentFrame - pU._playbackFrom)) / RU) + UU
              } else WU = (gU - this._playbackSyncMasterFrame) * (pU._playbackFrames - this._playbackSyncMasterPlayed) < 0, eU = UU;
              WU = WU || pU._playbackJumped, this._playbackSyncMasterPlayed = pU._playbackFrames, this._playbackSyncMasterFrame = gU
            }
          } else qU = TU > 0 && RU > gU || TU < 0 && RU < gU ? KU && 0 !== GU ? gU + TU % GU : RU : KU && 0 !== GU ? RU + TU % GU : gU;
          if (!CU && (pU > 0 && this.currentFrame > qU || pU < 0 && this.currentFrame < qU) || CU && uU) {
            this._onLoop();
            for (let UU = 0; UU < cU.length; UU++) cU[UU].onlyOnce || (cU[UU].isDone = !1);
            this._animationState.key = pU > 0 ? 0 : PU.getKeys().length - 1
          }
          if (this._currentFrame = qU, this._animationState.repeatCount = 0 === GU ? 0 : TU / GU | 0, this._animationState.highLimitValue = jU, this._animationState.offsetValue = EU, this._playbackFrom = RU, this._playbackTo = gU, this._playbackJumped = WU, this._playbackSyncRoot = hU, hU) QU = eU;
          else if (KU) QU = CU ? qU === RU && TU === gU ? GU : qU - RU : TU;
          else {
            const UU = 0 !== GU ? Math.floor(this._playbackFrames / GU) : 0;
            QU = (qU === gU ? UU + 1 : UU) * GU
          }
          this._playbackFrames = QU, this._playbackProgress = this._animationState.mE === nU.e.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? GU : QU
        }
        const jU = PU._interpolate(qU, this._animationState);
        if (this.setValue(jU, EU), cU.length)
          for (let uU = 0; uU < cU.length; uU++)
            if (GU >= 0 && qU >= cU[uU].frame && cU[uU].frame >= RU || GU < 0 && qU <= cU[uU].frame && cU[uU].frame <= RU) {
              const UU = cU[uU];
              UU.isDone || (UU.onlyOnce && (cU.splice(uU, 1), uU--), UU.isDone = !0, UU.action(qU))
            } return KU || (this._stopped = !0), KU
      }
    }
    var oU = gU(39280);
    class ZU {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(UU) {
        this._weight = -1 !== UU ? Math.min(Math.max(UU, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(UU) {
        for (let RU = 0; RU < this._runtimeAnimations.length; RU++) {
          this._runtimeAnimations[RU]._prepareForSpeedRatioChange(UU)
        }
        this._speedRatio = UU, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          EU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          PU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          TU = arguments.length > 6 ? arguments[6] : void 0,
          qU = arguments.length > 7 ? arguments[7] : void 0,
          KU = arguments.length > 8 ? arguments[8] : void 0,
          cU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          GU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = RU, this.fromFrame = gU, this.toFrame = tU, this.loopAnimation = EU, this.onAnimationEnd = TU, this.onAnimationLoop = KU, this.isAdditive = cU, this.playOrder = GU, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.pI = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new pU.b, this.onAnimationLoopObservable = new pU.b, this._scene = UU, qU && this.appendAnimations(RU, qU), this._speedRatio = PU, UU._activeAnimatables.push(this)
      }
      syncWith(UU) {
        if (this._syncRoot = UU, UU) {
          const UU = this._scene._activeAnimatables.indexOf(this);
          UU > -1 && (this._scene._activeAnimatables.splice(UU, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(UU, RU) {
        for (let gU = 0; gU < RU.length; gU++) {
          const tU = RU[gU],
            pU = new bU(UU, tU, this._scene, this);
          pU._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(pU)
        }
      }
      getAnimationByTargetProperty(UU) {
        const RU = this._runtimeAnimations;
        for (let gU = 0; gU < RU.length; gU++)
          if (RU[gU].animation.targetProperty === UU) return RU[gU].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(UU) {
        const RU = this._runtimeAnimations;
        for (let gU = 0; gU < RU.length; gU++)
          if (RU[gU].animation.targetProperty === UU) return RU[gU];
        return null
      }
      reset() {
        const UU = this._runtimeAnimations;
        for (let RU = 0; RU < UU.length; RU++) UU[RU].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(UU) {
        const RU = this._runtimeAnimations;
        for (let gU = 0; gU < RU.length; gU++) RU[gU].animation.enableBlending = !0, RU[gU].animation.blendingSpeed = UU
      }
      disableBlending() {
        const UU = this._runtimeAnimations;
        for (let RU = 0; RU < UU.length; RU++) UU[RU].animation.enableBlending = !1
      }
      goToFrame(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = this._runtimeAnimations;
        if (gU[0]) {
          const RU = gU[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? gU[0].currentFrame;
          const tU = 0 === this.speedRatio ? 0 : (UU - this._frameToSyncFromJump) / RU * 1e3 / this.speedRatio;
          this._manualJumpDelay = -tU
        }
        for (let tU = 0; tU < gU.length; tU++) gU[tU].goToFrame(UU, RU ? this._weight : -1);
        this._goToFrame = UU
      }
      get paused() {
        return this.pI
      }
      pause() {
        this.pI || (this.pI = !0)
      }
      restart() {
        this.pI = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (UU || RU) {
          const pU = this._scene._activeAnimatables.indexOf(this);
          if (pU > -1) {
            const EU = this._runtimeAnimations;
            for (let gU = EU.length - 1; gU >= 0; gU--) {
              const tU = EU[gU];
              UU && tU.animation.name != UU || (RU && !RU(tU.target) || (tU.dispose(), EU.splice(gU, 1)))
            }
            0 == EU.length && (gU || this._scene._activeAnimatables.splice(pU, 1), tU || this._raiseOnAnimationEnd())
          }
        } else {
          const UU = this._scene._activeAnimatables.indexOf(this);
          if (UU > -1) {
            gU || this._scene._activeAnimatables.splice(UU, 1);
            const RU = this._runtimeAnimations;
            for (let UU = 0; UU < RU.length; UU++) RU[UU].dispose();
            this._runtimeAnimations.length = 0, tU || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((UU => {
          this.onAnimationEndObservable.add((() => {
            UU(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(UU) {
        if (this.pI) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = UU), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = UU, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += UU - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !ZU.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let RU = !1;
        const gU = this._runtimeAnimations;
        let tU;
        for (tU = 0; tU < gU.length; tU++) {
          const pU = gU[tU].animate(UU - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          RU = RU || pU
        }
        if (this.animationStarted = RU, !RU) {
          if (this.disposeOnEnd)
            for (tU = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(tU, 1), tU = 0; tU < gU.length; tU++) gU[tU].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return RU
      }
    }

    function aU(UU) {
      if (0 === UU.totalWeight && 0 === UU.totalAdditiveWeight) return UU.originalValue;
      let RU = 1;
      const gU = EU.h.xC[0],
        tU = EU.h.xC[1],
        pU = EU.h.Quaternion[0];
      let PU = 0;
      const TU = UU.animations[0],
        qU = UU.originalValue;
      let KU, cU = !1;
      if (UU.totalWeight < 1) KU = 1 - UU.totalWeight, qU.decompose(tU, pU, gU);
      else {
        if (PU = 1, RU = UU.totalWeight, KU = TU.weight / RU, 1 == KU) {
          if (!UU.totalAdditiveWeight) return TU.currentValue;
          cU = !0
        }
        TU.currentValue.decompose(tU, pU, gU)
      }
      if (!cU) {
        tU.scaleInPlace(KU), gU.scaleInPlace(KU), pU.scaleInPlace(KU);
        for (let TU = PU; TU < UU.animations.length; TU++) {
          const PU = UU.animations[TU];
          if (0 === PU.weight) continue;
          KU = PU.weight / RU;
          const qU = EU.h.xC[2],
            cU = EU.h.xC[3],
            GU = EU.h.Quaternion[1];
          PU.currentValue.decompose(cU, GU, qU), cU.scaleAndAddToRef(KU, tU), GU.scaleAndAddToRef(EU.d.Dot(pU, GU) > 0 ? KU : -KU, pU), qU.scaleAndAddToRef(KU, gU)
        }
        pU.normalize()
      }
      for (let jU = 0; jU < UU.additiveAnimations.length; jU++) {
        const RU = UU.additiveAnimations[jU];
        if (0 === RU.weight) continue;
        const PU = EU.h.xC[2],
          TU = EU.h.xC[3],
          qU = EU.h.Quaternion[1];
        RU.currentValue.decompose(TU, qU, PU), TU.multiplyToRef(tU, TU), EU.n.LerpToRef(tU, TU, RU.weight, tU), pU.multiplyToRef(qU, qU), EU.d.SlerpToRef(pU, qU, RU.weight, pU), PU.scaleAndAddToRef(RU.weight, gU)
      }
      const GU = TU ? TU._animationState.workValue : EU.h.Matrix[0].clone();
      return EU.c.ComposeToRef(tU, pU, gU, GU), GU
    }

    function YU(UU, RU) {
      if (0 === UU.totalWeight && 0 === UU.totalAdditiveWeight) return RU;
      const gU = UU.animations[0],
        tU = UU.originalValue;
      let pU = RU;
      if (0 === UU.totalWeight && UU.totalAdditiveWeight > 0) pU.PgU(tU);
      else if (1 === UU.animations.length) {
        if (EU.d.SlerpToRef(tU, gU.currentValue, Math.min(1, UU.totalWeight), pU), 0 === UU.totalAdditiveWeight) return pU
      } else if (UU.animations.length > 1) {
        let gU, PU, TU = 1;
        if (UU.totalWeight < 1) {
          const RU = 1 - UU.totalWeight;
          gU = [], PU = [], gU.push(tU), PU.push(RU)
        } else {
          if (2 === UU.animations.length && (EU.d.SlerpToRef(UU.animations[0].currentValue, UU.animations[1].currentValue, UU.animations[1].weight / UU.totalWeight, RU), 0 === UU.totalAdditiveWeight)) return RU;
          gU = [], PU = [], TU = UU.totalWeight
        }
        for (let RU = 0; RU < UU.animations.length; RU++) {
          const tU = UU.animations[RU];
          gU.push(tU.currentValue), PU.push(tU.weight / TU)
        }
        let qU = 0;
        for (let UU = 0; UU < gU.length;) UU ? (qU += PU[UU], EU.d.SlerpToRef(pU, gU[UU], PU[UU] / qU, pU), UU++) : (EU.d.SlerpToRef(gU[UU], gU[UU + 1], PU[UU + 1] / (PU[UU] + PU[UU + 1]), RU), pU = RU, qU = PU[UU] + PU[UU + 1], UU += 2)
      }
      for (let PU = 0; PU < UU.additiveAnimations.length; PU++) {
        const RU = UU.additiveAnimations[PU];
        0 !== RU.weight && (pU.multiplyToRef(RU.currentValue, EU.h.Quaternion[0]), EU.d.SlerpToRef(pU, EU.h.Quaternion[0], RU.weight, pU))
      }
      return pU
    }

    function BU(UU, RU) {
      RU && (RU.prototype.copyAnimationRange = function(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new nU.e(this.name, "_matrix", UU.animations[0].framePerSecond, nU.e.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const EU = UU.animations[0].getRange(RU);
        if (!EU) return !1;
        const PU = EU.from,
          TU = EU.to,
          qU = UU.animations[0].getKeys(),
          KU = UU.length,
          cU = UU.getParent(),
          GU = this.getParent(),
          jU = tU && cU && KU && this.length && KU !== this.length,
          uU = jU && GU && cU ? GU.length / cU.length : 1,
          CU = tU && !GU && pU && (1 !== pU.x || 1 !== pU.y || 1 !== pU.z),
          hU = this.animations[0].getKeys();
        let QU, eU, WU;
        for (let fU = 0, xU = qU.length; fU < xU; fU++) QU = qU[fU], QU.frame >= PU && QU.frame <= TU && (tU ? (WU = QU.value.clone(), jU ? (eU = WU.getTranslation(), WU.setTranslation(eU.scaleInPlace(uU))) : CU && pU ? (eU = WU.getTranslation(), WU.setTranslation(eU.multiplyInPlace(pU))) : WU = QU.value) : WU = QU.value, hU.push({
          frame: QU.frame + gU,
          value: WU
        }));
        return this.animations[0].createRange(RU, PU + gU, TU + gU), !0
      }), UU && (UU.prototype._animate = function(UU) {
        const RU = this._animationWrites,
          gU = this._animationWriteCount;
        let tU = 0;
        for (let EU = this._animationStepWriteCount; EU < gU; EU++) {
          const UU = RU[EU];
          UU.ih && -1 === UU.weight || (UU.ih = !0, RU[EU] = RU[tU], RU[tU] = UU, tU++)
        }
        for (let EU = tU; EU < gU; EU++) {
          const UU = RU[EU];
          UU.runtimeAnimation = null, UU.target = null
        }
        if (this._animationWriteCount = tU, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const pU = oU.b.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = pU
        }
        this.deltaTime = void 0 !== UU ? UU : this.useConstantAnimationDeltaTime ? 16 : (pU - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = pU;
        const PU = this._activeAnimatables;
        if (0 === PU.length) return;
        this._animationTime += this.deltaTime;
        const TU = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let EU = 0; EU < PU.length; EU++) {
          const UU = PU[EU];
          !UU._animate(TU) && UU.disposeOnEnd && EU--
        }! function(UU) {
          if (UU._registeredForLateAnimationBindings.length) {
            for (let RU = 0; RU < UU._registeredForLateAnimationBindings.length; RU++) {
              const gU = UU._registeredForLateAnimationBindings.data[RU];
              for (const UU in gU._lateAnimationHolders) {
                const RU = gU._lateAnimationHolders[UU],
                  tU = RU.animations[0],
                  pU = RU.originalValue;
                if (void 0 === pU || null === pU) continue;
                const PU = nU.e.AllowMatrixDecomposeForInterpolation && pU.m;
                let TU = gU[UU];
                if (PU) TU = aU(RU);
                else if (void 0 !== pU.w) TU = YU(RU, TU || EU.d.Identity());
                else {
                  let UU = 0,
                    gU = 1;
                  const EU = tU && tU._animationState.mE === nU.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (RU.totalWeight < 1) TU = EU ? pU.clone ? pU.clone() : pU : tU && pU.scale ? pU.scale(1 - RU.totalWeight) : tU ? pU * (1 - RU.totalWeight) : pU.clone ? pU.clone() : pU;
                  else if (tU) {
                    gU = RU.totalWeight;
                    const PU = tU.weight / gU;
                    TU = 1 !== PU ? tU.currentValue.scale ? tU.currentValue.scale(PU) : tU.currentValue * PU : (RU.animations.length > 1 || RU.additiveAnimations.length > 0) && tU.currentValue.clone ? tU.currentValue.clone() : tU.currentValue, EU && (TU.addToRef ? TU.addToRef(pU, TU) : TU += pU), UU = 1
                  }
                  for (let tU = UU; tU < RU.animations.length; tU++) {
                    const UU = RU.animations[tU],
                      pU = UU.weight / gU;
                    pU && (UU.currentValue.scaleAndAddToRef ? UU.currentValue.scaleAndAddToRef(pU, TU) : TU += UU.currentValue * pU)
                  }
                  for (let tU = 0; tU < RU.additiveAnimations.length; tU++) {
                    const UU = RU.additiveAnimations[tU],
                      gU = UU.weight;
                    gU && (UU.currentValue.scaleAndAddToRef ? UU.currentValue.scaleAndAddToRef(gU, TU) : TU += UU.currentValue * gU)
                  }
                }
                gU[UU] = TU
              }
              gU._lateAnimationHolders = {}
            }
            UU._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, UU.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((UU, RU) => UU.playOrder - RU.playOrder))
      }, UU.prototype.beginWeightedAnimation = function(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          pU = arguments.length > 4 ? arguments[4] : void 0,
          EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          PU = arguments.length > 6 ? arguments[6] : void 0,
          TU = arguments.length > 7 ? arguments[7] : void 0,
          qU = arguments.length > 8 ? arguments[8] : void 0,
          KU = arguments.length > 9 ? arguments[9] : void 0,
          cU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const GU = this.beginAnimation(UU, RU, gU, pU, EU, PU, TU, !1, qU, KU, cU);
        return GU.weight = tU, GU
      }, UU.prototype.beginAnimation = function(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          EU = arguments.length > 5 ? arguments[5] : void 0,
          PU = arguments.length > 6 ? arguments[6] : void 0,
          TU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qU = arguments.length > 8 ? arguments[8] : void 0,
          KU = arguments.length > 9 ? arguments[9] : void 0,
          cU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (pU < 0) {
          const UU = RU;
          RU = gU, gU = UU, pU = -pU
        }
        RU > gU && (pU = -pU), TU && this.stopAnimation(UU, void 0, qU), PU || (PU = new ZU(this, UU, RU, gU, tU, pU, EU, void 0, KU, cU));
        const GU = !qU || qU(UU);
        if (UU.animations && GU && PU.appendAnimations(UU, UU.animations), UU.getAnimatables) {
          const cU = UU.getAnimatables();
          for (let UU = 0; UU < cU.length; UU++) this.beginAnimation(cU[UU], RU, gU, tU, pU, EU, PU, TU, qU, KU)
        }
        return PU.reset(), PU
      }, UU.prototype.beginHierarchyAnimation = function(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          PU = arguments.length > 6 ? arguments[6] : void 0,
          TU = arguments.length > 7 ? arguments[7] : void 0,
          qU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          KU = arguments.length > 9 ? arguments[9] : void 0,
          cU = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const GU = UU.getDescendants(RU),
          jU = [];
        jU.push(this.beginAnimation(UU, gU, tU, pU, EU, PU, TU, qU, KU, void 0, cU));
        for (const uU of GU) jU.push(this.beginAnimation(uU, gU, tU, pU, EU, PU, TU, qU, KU, void 0, cU));
        return jU
      }, UU.prototype.beginDirectAnimation = function(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (EU < 0) {
          const UU = gU;
          gU = tU, tU = UU, EU = -EU
        }
        gU > tU && (EU = -EU);
        return new ZU(this, UU, gU, tU, pU, EU, arguments.length > 6 ? arguments[6] : void 0, RU, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, UU.prototype.beginDirectHierarchyAnimation = function(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        let KU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const cU = UU.getDescendants(RU),
          GU = [];
        GU.push(this.beginDirectAnimation(UU, gU, tU, pU, EU, PU, TU, qU, KU));
        for (const jU of cU) GU.push(this.beginDirectAnimation(jU, gU, tU, pU, EU, PU, TU, qU, KU));
        return GU
      }, UU.prototype.getAnimatableByTarget = function(UU) {
        for (let RU = 0; RU < this._activeAnimatables.length; RU++)
          if (this._activeAnimatables[RU].target === UU) return this._activeAnimatables[RU];
        return null
      }, UU.prototype.getAllAnimatablesByTarget = function(UU) {
        const RU = [];
        for (let gU = 0; gU < this._activeAnimatables.length; gU++) this._activeAnimatables[gU].target === UU && RU.push(this._activeAnimatables[gU]);
        return RU
      }, UU.prototype.stopAnimation = function(UU, RU, gU) {
        const tU = this.getAllAnimatablesByTarget(UU);
        for (const pU of tU) pU.stop(RU, gU)
      }, UU.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let UU = 0; UU < this._activeAnimatables.length; UU++) this._activeAnimatables[UU].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const UU of this.animationGroups) UU.stop()
      })
    }
    ZU.ProcessPausedAnimatables = !1;
    var VU, rU = gU(36610),
      XU = gU(39610),
      vU = gU(39256);
    class dU extends XU.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(UU) {
        (UU.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.PgU(UU), this._markAsDirtyAndDecompose())
      }
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          PU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          TU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(UU, RU.aZ(), !1), this.name = UU, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = RU, this._localMatrix = tU?.clone() ?? EU.c.Identity(), this._restMatrix = pU ?? this._localMatrix.clone(), this._bindMatrix = PU ?? this._localMatrix.clone(), this._index = TU, this._absoluteMatrix = new EU.c, this._absoluteBindMatrix = new EU.c, this._absoluteInverseBindMatrix = new EU.c, this._finalMatrix = new EU.c, RU.bones.push(this), this.setParent(gU, !1), this._updateAbsoluteBindMatrices()
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
      set parent(UU) {
        this.setParent(UU)
      }
      setParent(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== UU) {
          if (this.parent) {
            const UU = this.parent.children.indexOf(this); - 1 !== UU && this.parent.children.splice(UU, 1)
          }
          this._parentNode = UU, this.parent && this.parent.children.push(this), RU && this._updateAbsoluteBindMatrices(), this.cRU()
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
      setRestMatrix(UU) {
        this._restMatrix.PgU(UU)
      }
      setRestPose(UU) {
        this.setRestMatrix(UU)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(UU) {
        this.p_(UU)
      }
      setBindPose(UU) {
        this.setBindMatrix(UU)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const UU = EU.h.xC[0],
            RU = EU.h.Quaternion[0],
            gU = EU.h.xC[1];
          this.getRestMatrix().decompose(UU, RU, gU), this._linkedTransformNode.position.PgU(gU), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? EU.d.Identity(), this._linkedTransformNode.rotationQuaternion.PgU(RU), this._linkedTransformNode.ep.PgU(UU)
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
      linkTransformNode(UU) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = UU, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.wUU
      }
      set position(UU) {
        this._decompose(), this.wUU.PgU(UU), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(UU) {
        this.setRotation(UU)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(UU) {
        this.setRotationQuaternion(UU)
      }
      get ep() {
        return this.getScale()
      }
      set ep(UU) {
        this.setScale(UU)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = EU.n.Zero(), this._localRotation = EU.d.Zero(), this.wUU = EU.n.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.wUU))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, EU.c.ComposeToRef(this._localScaling, this._localRotation, this.wUU, this._localMatrix)) : this._needToCompose = !1)
      }
      p_(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.PgU(UU), RU && this._updateAbsoluteBindMatrices(), gU ? this._matrix = UU : this.cRU()
      }
      _updateAbsoluteBindMatrices(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (UU || (UU = this._bindMatrix), this.parent ? UU.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.PgU(UU), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), RU)
          for (let gU = 0; gU < this.children.length; gU++) this.children[gU]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      cRU() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.cRU(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.cRU(), this._needToDecompose = !0
      }
      _updatePosition(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const pU = this.getLocalMatrix();
        if (0 == RU) tU ? (pU.addAtIndex(12, UU.x), pU.addAtIndex(13, UU.y), pU.addAtIndex(14, UU.z)) : pU.setTranslationFromFloats(UU.x, UU.y, UU.z);
        else {
          const RU = dU._TmpMats[0],
            PU = dU._TmpVecs[0];
          this.parent ? (RU.PgU(this.parent.getAbsoluteMatrix()), gU && RU.multiplyToRef(gU.getWorldMatrix(), RU)) : EU.c.IdentityToRef(RU), tU && RU.setTranslationFromFloats(0, 0, 0), RU.invert(), EU.n.TransformCoordinatesToRef(UU, RU, PU), tU ? (pU.addAtIndex(12, PU.x), pU.addAtIndex(13, PU.y), pU.addAtIndex(14, PU.z)) : pU.setTranslationFromFloats(PU.x, PU.y, PU.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(UU, RU, gU, !0)
      }
      setPosition(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(UU, RU, gU, !1)
      }
      setAbsolutePosition(UU, RU) {
        this.setPosition(UU, 1, RU)
      }
      scale(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const pU = this.getLocalMatrix(),
          PU = dU._TmpMats[0];
        EU.c.ScalingToRef(UU, RU, gU, PU), PU.multiplyToRef(pU, pU), PU.invert();
        for (const EU of this.children) {
          const tU = EU.getLocalMatrix();
          tU.multiplyToRef(PU, tU), tU.multiplyAtIndex(12, UU), tU.multiplyAtIndex(13, RU), tU.multiplyAtIndex(14, gU), EU._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), tU)
          for (const EU of this.children) EU.scale(UU, RU, gU, tU)
      }
      setScale(UU) {
        this._decompose(), this._localScaling.PgU(UU), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(UU) {
        this._decompose(), UU.PgU(this._localScaling)
      }
      setYawPitchRoll(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pU = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === tU) {
          const PU = dU._TmpQuat;
          return EU.d.RotationYawPitchRollToRef(UU, RU, gU, PU), void this.setRotationQuaternion(PU, tU, pU)
        }
        const PU = dU._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(PU, pU)) return;
        const TU = dU._TmpMats[1];
        EU.c.RotationYawPitchRollToRef(UU, RU, gU, TU), PU.multiplyToRef(TU, TU), this._rotateWithMatrix(TU, tU, pU)
      }
      rotate(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 ? arguments[3] : void 0;
        const pU = dU._TmpMats[0];
        pU.setTranslationFromFloats(0, 0, 0), EU.c.RotationAxisToRef(UU, RU, pU), this._rotateWithMatrix(pU, gU, tU)
      }
      setAxisAngle(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === gU) {
          const pU = dU._TmpQuat;
          return EU.d.RotationAxisToRef(UU, RU, pU), void this.setRotationQuaternion(pU, gU, tU)
        }
        const pU = dU._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(pU, tU)) return;
        const PU = dU._TmpMats[1];
        EU.c.RotationAxisToRef(UU, RU, PU), pU.multiplyToRef(PU, PU), this._rotateWithMatrix(PU, gU, tU)
      }
      setRotation(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(UU.y, UU.x, UU.z, RU, gU)
      }
      setRotationQuaternion(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === RU) return this._decompose(), this._localRotation.PgU(UU), void this._markAsDirtyAndCompose();
        const tU = dU._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(tU, gU)) return;
        const pU = dU._TmpMats[1];
        EU.c.FromQuaternionToRef(UU, pU), tU.multiplyToRef(pU, pU), this._rotateWithMatrix(pU, RU, gU)
      }
      setRotationMatrix(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === RU) {
          const tU = dU._TmpQuat;
          return EU.d.FromRotationMatrixToRef(UU, tU), void this.setRotationQuaternion(tU, RU, gU)
        }
        const tU = dU._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(tU, gU)) return;
        const pU = dU._TmpMats[1];
        pU.PgU(UU), tU.multiplyToRef(UU, pU), this._rotateWithMatrix(pU, RU, gU)
      }
      _rotateWithMatrix(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const tU = this.getLocalMatrix(),
          pU = tU.m[12],
          EU = tU.m[13],
          PU = tU.m[14],
          TU = this.getParent(),
          qU = dU._TmpMats[3],
          KU = dU._TmpMats[4];
        TU && 1 == RU ? (gU ? (qU.PgU(gU.getWorldMatrix()), TU.getAbsoluteMatrix().multiplyToRef(qU, qU)) : qU.PgU(TU.getAbsoluteMatrix()), KU.PgU(qU), KU.invert(), tU.multiplyToRef(qU, tU), tU.multiplyToRef(UU, tU), tU.multiplyToRef(KU, tU)) : 1 == RU && gU ? (qU.PgU(gU.getWorldMatrix()), KU.PgU(qU), KU.invert(), tU.multiplyToRef(qU, tU), tU.multiplyToRef(UU, tU), tU.multiplyToRef(KU, tU)) : tU.multiplyToRef(UU, tU), tU.setTranslationFromFloats(pU, EU, PU), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(UU, RU) {
        const gU = dU._TmpMats[2];
        return UU.PgU(this.getAbsoluteMatrix()), RU ? (UU.multiplyToRef(RU.getWorldMatrix(), UU), EU.c.ScalingToRef(RU.ep.x, RU.ep.y, RU.ep.z, gU)) : EU.c.IdentityToRef(gU), UU.invert(), !isNaN(UU.m[0]) && (gU.multiplyAtIndex(0, this._scalingDeterminant), UU.multiplyToRef(gU, UU), !0)
      }
      Hx() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gU = EU.n.Zero();
        return this.getPositionToRef(UU, RU, gU), gU
      }
      getPositionToRef() {
        let UU = arguments.length > 1 ? arguments[1] : void 0,
          RU = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const UU = this.getLocalMatrix();
          RU.x = UU.m[12], RU.y = UU.m[13], RU.z = UU.m[14]
        } else {
          const gU = dU._TmpMats[0].PgU(this.getAbsoluteMatrix());
          UU && gU.multiplyToRef(UU.getWorldMatrix(), gU), RU.x = gU.m[12], RU.y = gU.m[13], RU.z = gU.m[14]
        }
      }
      getAbsolutePosition() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const RU = EU.n.Zero();
        return this.getPositionToRef(1, UU, RU), RU
      }
      getAbsolutePositionToRef(UU, RU) {
        this.getPositionToRef(1, UU, RU)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.PgU(this._localMatrix);
          const UU = this._skeleton.getPoseMatrix();
          UU && this._absoluteMatrix.multiplyToRef(UU, this._absoluteMatrix)
        }
        const UU = this.children,
          RU = UU.length;
        for (let gU = 0; gU < RU; gU++) UU[gU].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      pM(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gU = EU.n.Zero();
        return this.getDirectionToRef(UU, RU, gU), gU
      }
      getDirectionToRef(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const tU = dU._TmpMats[0].PgU(this.getAbsoluteMatrix());
        RU && tU.multiplyToRef(RU.getWorldMatrix(), tU), EU.n.TransformNormalToRef(UU, tU, gU), gU.normalize()
      }
      getRotation() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gU = EU.n.Zero();
        return this.getRotationToRef(UU, RU, gU), gU
      }
      getRotationToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const tU = dU._TmpQuat;
        this.getRotationQuaternionToRef(UU, RU, tU), tU.toEulerAnglesToRef(gU)
      }
      getRotationQuaternion() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gU = EU.d.Identity();
        return this.getRotationQuaternionToRef(UU, RU, gU), gU
      }
      getRotationQuaternionToRef() {
        let UU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          RU = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), RU.PgU(this._localRotation);
        else {
          const gU = dU._TmpMats[0],
            tU = this.getAbsoluteMatrix();
          UU ? tU.multiplyToRef(UU.getWorldMatrix(), gU) : gU.PgU(tU), gU.multiplyAtIndex(0, this._scalingDeterminant), gU.multiplyAtIndex(1, this._scalingDeterminant), gU.multiplyAtIndex(2, this._scalingDeterminant), gU.decompose(void 0, RU, void 0)
        }
      }
      getRotationMatrix() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 ? arguments[1] : void 0;
        const gU = EU.c.Identity();
        return this.getRotationMatrixToRef(UU, RU, gU), gU
      }
      getRotationMatrixToRef() {
        let UU = arguments.length > 1 ? arguments[1] : void 0,
          RU = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(RU);
        else {
          const gU = dU._TmpMats[0],
            tU = this.getAbsoluteMatrix();
          UU ? tU.multiplyToRef(UU.getWorldMatrix(), gU) : gU.PgU(tU), gU.multiplyAtIndex(0, this._scalingDeterminant), gU.multiplyAtIndex(1, this._scalingDeterminant), gU.multiplyAtIndex(2, this._scalingDeterminant), gU.getRotationMatrixToRef(RU)
        }
      }
      getAbsolutePositionFromLocal(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gU = EU.n.Zero();
        return this.getAbsolutePositionFromLocalToRef(UU, RU, gU), gU
      }
      getAbsolutePositionFromLocalToRef(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const tU = dU._TmpMats[0].PgU(this.getAbsoluteMatrix());
        RU && tU.multiplyToRef(RU.getWorldMatrix(), tU), EU.n.TransformCoordinatesToRef(UU, tU, gU)
      }
      getLocalPositionFromAbsolute(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gU = EU.n.Zero();
        return this.getLocalPositionFromAbsoluteToRef(UU, RU, gU), gU
      }
      getLocalPositionFromAbsoluteToRef(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const tU = dU._TmpMats[0].PgU(this.getAbsoluteMatrix());
        RU && tU.multiplyToRef(RU.getWorldMatrix(), tU), tU.invert(), EU.n.TransformCoordinatesToRef(UU, tU, gU)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const UU = this._skeleton.bones.indexOf(this);
        if (-1 !== UU && this._skeleton.bones.splice(UU, 1), this._parentNode && this._parentNode.children) {
          const UU = this._parentNode.children,
            RU = UU.indexOf(this); - 1 !== RU && UU.splice(RU, 1)
        }
        super.dispose()
      }
    }
    dU._TmpVecs = (0, rU.e)(2, EU.n.Zero), dU._TmpQuat = EU.d.Identity(), dU._TmpMats = (0, rU.e)(5, EU.c.Identity), (VU = dU.prototype).copyAnimationRange ?? (VU.copyAnimationRange = (0, vU.m)("Bone", "copyAnimationRange"));
    var HU = gU(39468);
    let SU = !1;
    var sU = gU(39350),
      yU = gU(39714),
      kU = gU(39720),
      FU = gU(39716),
      iU = gU(39495);

    function AU(UU, RU) {
      const gU = (0, uU.RandomRange)(0, 1);
      cU.g.LerpToRef(RU.color1, RU.color2, gU, UU.color)
    }

    function zU(UU, RU) {
      RU.colorDead.subtractToRef(UU.color, RU._colorDiff), RU._colorDiff.scaleToRef(1 / UU.lifeTime, UU.colorStep)
    }

    function MU(UU, RU) {
      UU._properties.currentColorGradient = RU._colorGradients[0], UU._properties.currentColorGradient.getColorToRef(UU.color), UU._properties.currentColor1.PgU(UU.color), RU._colorGradients.length > 1 ? RU._colorGradients[1].getColorToRef(UU._properties.currentColor2) : UU._properties.currentColor2.PgU(UU.color)
    }

    function DU(UU, RU) {
      const gU = RU._colorGradients;
      tU.j.GetCurrentGradient(RU._ratio, gU, ((RU, gU, tU) => {
        RU !== UU._properties.currentColorGradient && (UU._properties.currentColor1.PgU(UU._properties.currentColor2), gU.getColorToRef(UU._properties.currentColor2), UU._properties.currentColorGradient = RU), cU.g.LerpToRef(UU._properties.currentColor1, UU._properties.currentColor2, tU, UU.color), UU.color.a < 0 && (UU.color.a = 0)
      }))
    }

    function LU(UU, RU) {
      UU.colorStep.scaleToRef(RU._scaledUpdateSpeed, RU._scaledColorStep), UU.color.addInPlace(RU._scaledColorStep), UU.color.a < 0 && (UU.color.a = 0)
    }

    function NU(UU, RU) {
      tU.j.GetCurrentGradient(RU._ratio, RU._angularSpeedGradients, ((RU, gU, tU) => {
        RU !== UU._properties.currentAngularSpeedGradient && (UU._properties.currentAngularSpeed1 = UU._properties.currentAngularSpeed2, UU._properties.currentAngularSpeed2 = gU.getFactor(), UU._properties.currentAngularSpeedGradient = RU), UU.angularSpeed = (0, uU.Lerp)(UU._properties.currentAngularSpeed1, UU._properties.currentAngularSpeed2, tU)
      }))
    }

    function lU(UU, RU) {
      UU.angle += UU.angularSpeed * RU._scaledUpdateSpeed
    }

    function OU(UU, RU) {
      RU.particleEmitterType.startDirectionFunction(RU._emitterWorldMatrix, UU.direction, UU, RU.isLocal, RU._emitterInverseWorldMatrix)
    }

    function UR(UU, RU) {
      RU.startDirectionFunction(RU._emitterWorldMatrix, UU.direction, UU, RU.isLocal)
    }

    function RR(UU, RU) {
      UU._properties.currentVelocityGradient = RU._velocityGradients[0], UU._properties.currentVelocity1 = UU._properties.currentVelocityGradient.getFactor(), RU._velocityGradients.length > 1 ? UU._properties.currentVelocity2 = RU._velocityGradients[1].getFactor() : UU._properties.currentVelocity2 = UU._properties.currentVelocity1
    }

    function gR(UU, RU) {
      UU._properties.currentLimitVelocityGradient = RU._limitVelocityGradients[0], UU._properties.currentLimitVelocity1 = UU._properties.currentLimitVelocityGradient.getFactor(), RU._limitVelocityGradients.length > 1 ? UU._properties.currentLimitVelocity2 = RU._limitVelocityGradients[1].getFactor() : UU._properties.currentLimitVelocity2 = UU._properties.currentLimitVelocity1
    }

    function tR(UU, RU) {
      tU.j.GetCurrentGradient(RU._ratio, RU._velocityGradients, ((RU, gU, tU) => {
        RU !== UU._properties.currentVelocityGradient && (UU._properties.currentVelocity1 = UU._properties.currentVelocity2, UU._properties.currentVelocity2 = gU.getFactor(), UU._properties.currentVelocityGradient = RU), UU._properties.directionScale *= (0, uU.Lerp)(UU._properties.currentVelocity1, UU._properties.currentVelocity2, tU)
      }))
    }

    function pR(UU, RU) {
      tU.j.GetCurrentGradient(RU._ratio, RU._limitVelocityGradients, ((gU, tU, pU) => {
        gU !== UU._properties.currentLimitVelocityGradient && (UU._properties.currentLimitVelocity1 = UU._properties.currentLimitVelocity2, UU._properties.currentLimitVelocity2 = tU.getFactor(), UU._properties.currentLimitVelocityGradient = gU);
        const EU = (0, uU.Lerp)(UU._properties.currentLimitVelocity1, UU._properties.currentLimitVelocity2, pU);
        UU.direction.length() > EU && UU.direction.scaleInPlace(RU.limitVelocityDamping)
      }))
    }

    function ER(UU) {
      UU.direction.scaleToRef(UU._properties.directionScale, UU._properties.scaledDirection)
    }

    function PR(UU, RU) {
      RU.particleEmitterType.startPositionFunction(RU._emitterWorldMatrix, UU.position, UU, RU.isLocal)
    }

    function TR(UU, RU) {
      RU.startPositionFunction(RU._emitterWorldMatrix, UU.position, UU, RU.isLocal)
    }

    function qR(UU, RU) {
      UU._properties.localPosition ? UU._properties.localPosition.PgU(UU.position) : UU._properties.localPosition = UU.position.clone(), EU.n.TransformCoordinatesToRef(UU._properties.localPosition, RU._emitterWorldMatrix, UU.position)
    }

    function KR(UU, RU) {
      RU.isLocal && UU._properties.localPosition ? (UU._properties.localPosition.addInPlace(UU._properties.scaledDirection), EU.n.TransformCoordinatesToRef(UU._properties.localPosition, RU._emitterWorldMatrix, UU.position)) : UU.position.addInPlace(UU._properties.scaledDirection)
    }

    function cR(UU, RU) {
      UU._properties.currentDragGradient = RU._dragGradients[0], UU._properties.currentDrag1 = UU._properties.currentDragGradient.getFactor(), RU._dragGradients.length > 1 ? UU._properties.currentDrag2 = RU._dragGradients[1].getFactor() : UU._properties.currentDrag2 = UU._properties.currentDrag1
    }

    function GR(UU, RU) {
      tU.j.GetCurrentGradient(RU._ratio, RU._dragGradients, ((RU, gU, tU) => {
        RU !== UU._properties.currentDragGradient && (UU._properties.currentDrag1 = UU._properties.currentDrag2, UU._properties.currentDrag2 = gU.getFactor(), UU._properties.currentDragGradient = RU);
        const pU = (0, uU.Lerp)(UU._properties.currentDrag1, UU._properties.currentDrag2, tU);
        UU._properties.scaledDirection.scaleInPlace(1 - pU)
      }))
    }

    function jR(UU, RU) {
      UU._properties.randomNoiseCoordinates1 && UU._properties.randomNoiseCoordinates2 ? (UU._properties.randomNoiseCoordinates1.b_(Math.random(), Math.random(), Math.random()), UU._properties.randomNoiseCoordinates2.b_(Math.random(), Math.random(), Math.random())) : (UU._properties.randomNoiseCoordinates1 = new EU.n(Math.random(), Math.random(), Math.random()), UU._properties.randomNoiseCoordinates2 = new EU.n(Math.random(), Math.random(), Math.random()))
    }

    function uR(UU, RU) {
      const gU = RU._noiseTextureData,
        tU = RU._noiseTextureSize;
      if (gU && tU && UU._properties.randomNoiseCoordinates1 && UU._properties.randomNoiseCoordinates2) {
        const pU = RU._fetchR(UU._properties.randomNoiseCoordinates1.x, UU._properties.randomNoiseCoordinates1.y, tU.width, tU.height, gU),
          PU = RU._fetchR(UU._properties.randomNoiseCoordinates1.z, UU._properties.randomNoiseCoordinates2.x, tU.width, tU.height, gU),
          TU = RU._fetchR(UU._properties.randomNoiseCoordinates2.y, UU._properties.randomNoiseCoordinates2.z, tU.width, tU.height, gU),
          qU = EU.h.xC[0],
          KU = EU.h.xC[1];
        qU.b_((2 * pU - 1) * RU.noiseStrength.x, (2 * PU - 1) * RU.noiseStrength.y, (2 * TU - 1) * RU.noiseStrength.z), qU.scaleToRef(RU._tempScaledUpdateSpeed, KU), UU.direction.addInPlace(KU)
      }
    }

    function CR(UU, RU) {
      RU.gravity.scaleToRef(RU._tempScaledUpdateSpeed, RU._scaledGravity), UU.direction.addInPlace(RU._scaledGravity)
    }

    function hR(UU, RU) {
      UU.size = (0, uU.RandomRange)(RU.minSize, RU.maxSize), UU.scale.b_((0, uU.RandomRange)(RU.minScaleX, RU.maxScaleX), (0, uU.RandomRange)(RU.minScaleY, RU.maxScaleY))
    }

    function QR(UU, RU) {
      UU._properties.currentSizeGradient = RU._sizeGradients[0], UU._properties.currentSize1 = UU._properties.currentSizeGradient.getFactor(), UU.size = UU._properties.currentSize1, RU._sizeGradients.length > 1 ? UU._properties.currentSize2 = RU._sizeGradients[1].getFactor() : UU._properties.currentSize2 = UU._properties.currentSize1, UU.scale.b_((0, uU.RandomRange)(RU.minScaleX, RU.maxScaleX), (0, uU.RandomRange)(RU.minScaleY, RU.maxScaleY))
    }

    function eR(UU, RU) {
      const gU = RU._actualFrame / RU.targetStopDuration;
      tU.j.GetCurrentGradient(gU, RU._startSizeGradients, ((gU, tU, pU) => {
        gU !== RU._currentStartSizeGradient && (RU._currentStartSize1 = RU._currentStartSize2, RU._currentStartSize2 = tU.getFactor(), RU._currentStartSizeGradient = gU);
        const EU = (0, uU.Lerp)(RU._currentStartSize1, RU._currentStartSize2, pU);
        UU.scale.scaleInPlace(EU)
      }))
    }

    function WR(UU, RU) {
      tU.j.GetCurrentGradient(RU._ratio, RU._sizeGradients, ((RU, gU, tU) => {
        RU !== UU._properties.currentSizeGradient && (UU._properties.currentSize1 = UU._properties.currentSize2, UU._properties.currentSize2 = gU.getFactor(), UU._properties.currentSizeGradient = RU), UU.size = (0, uU.Lerp)(UU._properties.currentSize1, UU._properties.currentSize2, tU)
      }))
    }

    function fR(UU, RU) {
      UU.remapData = new EU.q(0, 1, 0, 1)
    }

    function xR(UU, RU) {
      RU._colorRemapGradients && RU._colorRemapGradients.length > 0 && tU.j.GetCurrentGradient(RU._ratio, RU._colorRemapGradients, ((RU, gU, tU) => {
        const pU = (0, uU.Lerp)(RU.factor1, gU.factor1, tU),
          EU = (0, uU.Lerp)(RU.factor2, gU.factor2, tU);
        UU.remapData.x = pU, UU.remapData.y = EU - pU
      })), RU._alphaRemapGradients && RU._alphaRemapGradients.length > 0 && tU.j.GetCurrentGradient(RU._ratio, RU._alphaRemapGradients, ((RU, gU, tU) => {
        const pU = (0, uU.Lerp)(RU.factor1, gU.factor1, tU),
          EU = (0, uU.Lerp)(RU.factor2, gU.factor2, tU);
        UU.remapData.z = pU, UU.remapData.w = EU - pU
      }))
    }

    function mR(UU, RU) {
      const gU = (0, uU.Clamp)(RU._actualFrame / RU.targetStopDuration);
      tU.j.GetCurrentGradient(gU, RU._lifeTimeGradients, ((RU, tU) => {
        const pU = RU,
          EU = tU,
          PU = pU.getFactor(),
          TU = EU.getFactor(),
          qU = (gU - pU.gradient) / (EU.gradient - pU.gradient);
        UU.lifeTime = (0, uU.Lerp)(PU, TU, qU)
      })), RU._emitPower = (0, uU.RandomRange)(RU.minEmitPower, RU.maxEmitPower)
    }

    function IR(UU, RU) {
      UU.lifeTime = (0, uU.RandomRange)(RU.minLifeTime, RU.maxLifeTime), RU._emitPower = (0, uU.RandomRange)(RU.minEmitPower, RU.maxEmitPower)
    }

    function JR(UU, RU) {
      0 === RU._emitPower ? (UU._properties.initialDirection ? UU._properties.initialDirection.PgU(UU.direction) : UU._properties.initialDirection = UU.direction.clone(), UU.direction.set(0, 0, 0)) : (UU._properties.initialDirection = null, UU.direction.scaleInPlace(RU._emitPower)), UU.direction.addInPlace(RU._inheritedVelocityOffset)
    }

    function wR(UU, RU) {
      UU.angularSpeed = (0, uU.RandomRange)(RU.minAngularSpeed, RU.maxAngularSpeed), UU.angle = (0, uU.RandomRange)(RU.minInitialRotation, RU.maxInitialRotation)
    }

    function nR(UU, RU) {
      UU._properties.currentAngularSpeedGradient = RU._angularSpeedGradients[0], UU.angularSpeed = UU._properties.currentAngularSpeedGradient.getFactor(), UU._properties.currentAngularSpeed1 = UU.angularSpeed, RU._angularSpeedGradients.length > 1 ? UU._properties.currentAngularSpeed2 = RU._angularSpeedGradients[1].getFactor() : UU._properties.currentAngularSpeed2 = UU._properties.currentAngularSpeed1, UU.angle = (0, uU.RandomRange)(RU.minInitialRotation, RU.maxInitialRotation)
    }

    function bR(UU, RU) {
      UU._properties.initialStartSpriteCellId = RU.startSpriteCellID, UU._properties.initialEndSpriteCellId = RU.endSpriteCellID, UU._properties.initialSpriteCellLoop = RU.spriteCellLoop
    }

    function oR(UU, RU) {
      UU.previousItem = RU.previousItem, UU.nextItem = RU, RU.previousItem && (RU.previousItem.nextItem = UU), RU.previousItem = UU
    }

    function ZR(UU, RU) {
      UU.previousItem = RU, UU.nextItem = RU.nextItem, RU.nextItem && (RU.nextItem.previousItem = UU), RU.nextItem = UU
    }

    function aR(UU) {
      UU.previousItem && (UU.previousItem.nextItem = UU.nextItem), UU.nextItem && (UU.nextItem.previousItem = UU.previousItem)
    }
    var YR = gU(39766);
    class BR extends IU {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(UU) {
        this._startDirectionFunction !== UU && (this._startDirectionFunction = UU, this._directionCreation.process = UU ? UR : OU)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(UU) {
        this._startPositionFunction !== UU && (this._startPositionFunction = UU, this._positionCreation.process = UU ? TR : PR)
      }
      set onDispose(UU) {
        this._onDisposeObserver && this.HZ.remove(this._onDisposeObserver), this._onDisposeObserver = this.HZ.add(UU)
      }
      get lRU() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(UU) {
        this._useRampGradients !== UU && (this._useRampGradients = UU, this._resetEffect(), UU ? (this._rampCreation = {
          process: fR,
          previousItem: null,
          nextItem: null
        }, ZR(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: xR,
          previousItem: null,
          nextItem: null
        }, ZR(this._remapGradientProcessing, this._gravityProcessing))) : (aR(this._rampCreation), aR(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(UU) {
        this._isLocal !== UU && (this._isLocal = UU, UU ? (this._isLocalCreation = {
          process: qR,
          previousItem: null,
          nextItem: null
        }, ZR(this._isLocalCreation, this._positionCreation)) : aR(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(UU) {
        this._animationSheetEnabled !== UU && (this._animationSheetEnabled = UU, UU ? (this._sheetCreation = {
          process: bR,
          previousItem: null,
          nextItem: null
        }, ZR(this._sheetCreation, this._colorDeadCreation)) : aR(this._sheetCreation), this._reset())
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
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[UU]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[UU] ?? this._customWrappers[0]
      }
      setCustomEffect(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[RU] = new yU.c(this._engine), this._customWrappers[RU].effect = UU, this._customWrappers[RU].drawContext && (this._customWrappers[RU].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new pU.b), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(UU) {
        if (this.noiseTexture !== UU) {
          if (this._noiseTexture = UU, !UU) return aR(this._noiseCreation), void aR(this._noiseProcessing);
          this._noiseCreation = {
            process: jR,
            previousItem: null,
            nextItem: null
          }, ZR(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: uR,
            previousItem: null,
            nextItem: null
          }, ZR(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          PU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          TU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          KU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        SU || (SU = !0, BU(HU.f, dU)), (0, sU.c)(), super(UU), this._emitterInverseWorldMatrix = EU.c.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new EU.n, this.HZ = new pU.b, this.onStoppedObservable = new pU.b, this.onStartedObservable = new pU.b, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new cU.g(0, 0, 0, 0), this._colorDiff = new cU.g(0, 0, 0, 0), this._scaledGravity = EU.n.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = UU => {}, this.recycleParticle = UU => {
          const RU = this._particles.pop();
          RU !== UU && RU.copyTo(UU), RU.metadata = null, this._stockParticles.push(RU)
        }, this._createParticle = () => {
          let UU;
          return 0 !== this._stockParticles.length ? (UU = this._stockParticles.pop(), UU._reset()) : UU = new wU(this), this._prepareParticle(UU), UU
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = RU, this._epsilon = TU, gU && "Scene" !== gU.getClassName() ? (this._engine = gU, this.defaultProjectionMatrix = EU.c.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = gU || qU.c.LastCreatedScene, this._engine = this._scene.WC(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.vI.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: IR,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: PR,
          previousItem: null,
          nextItem: null
        }, ZR(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: OU,
          previousItem: null,
          nextItem: null
        }, ZR(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: JR,
          previousItem: null,
          nextItem: null
        }, ZR(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: hR,
          previousItem: null,
          nextItem: null
        }, ZR(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: wR,
          previousItem: null,
          nextItem: null
        }, ZR(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: AU,
          previousItem: null,
          nextItem: null
        }, ZR(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: zU,
          previousItem: null,
          nextItem: null
        }, ZR(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, KU || (this._colorProcessing = {
          process: LU,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: lU,
          previousItem: null,
          nextItem: null
        }, ZR(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: ER,
          previousItem: null,
          nextItem: null
        }, ZR(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: KR,
          previousItem: null,
          nextItem: null
        }, ZR(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: CR,
          previousItem: null,
          nextItem: null
        }, ZR(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = PU, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new yU.c(this._engine)
        }, this._customWrappers[0].effect = tU, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new GU.c, this.updateFunction = UU => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((UU => {
            this._noiseTextureData = UU
          })));
          const RU = UU === this._particles;
          for (let gU = 0; gU < UU.length; gU++) {
            const tU = UU[gU];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const pU = tU.age;
            if (tU.age += this._tempScaledUpdateSpeed, tU.age > tU.lifeTime) {
              const UU = tU.age - pU,
                RU = tU.lifeTime - pU;
              this._tempScaledUpdateSpeed = RU * this._tempScaledUpdateSpeed / UU, tU.age = tU.lifeTime
            }
            this._ratio = tU.age / tU.lifeTime, tU._properties.directionScale = this._tempScaledUpdateSpeed;
            let EU = this._updateQueueStart;
            for (; EU;) EU.process(tU, this), EU = EU.nextItem;
            if (this._isAnimationSheetEnabled && !KU && tU.updateCellIndex(), tU._inheritParticleInfoToSubEmitters(), tU.age >= tU.lifeTime) {
              if (this._emitFromParticle(tU), tU._properties.attachedSubEmitters) {
                for (const UU of tU._properties.attachedSubEmitters) UU.particleSystem.disposeOnStop = !0, UU.particleSystem.stop();
                tU._properties.attachedSubEmitters = null
              }
              this.recycleParticle(tU), RU && gU--
            } else;
          }
        }
      }
      serialize(UU) {
        throw new Error("Method not implemented.")
      }
      clone(UU, RU) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = mR : this._lifeTimeCreation.process = IR
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: eR,
          previousItem: null,
          nextItem: null
        }, ZR(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (aR(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(UU) {
        this.targetStopDuration !== UU && (this._targetStopDuration = UU, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(UU, RU, gU) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, UU, RU, gU), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(UU) {
        return this._removeFactorGradient(this._lifeTimeGradients, UU), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(UU, RU, gU) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = QR, this._sizeGradientProcessing = {
          process: WR,
          previousItem: null,
          nextItem: null
        }, oR(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, UU, RU, gU), this
      }
      removeSizeGradient(UU) {
        return this._removeFactorGradient(this._sizeGradients, UU), 0 === this._sizeGradients?.length && (aR(this._sizeGradientProcessing), this._sizeCreation.process = hR), this
      }
      addColorRemapGradient(UU, RU, gU) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, UU, RU, gU), this
      }
      removeColorRemapGradient(UU) {
        return this._removeFactorGradient(this._colorRemapGradients, UU), this
      }
      addAlphaRemapGradient(UU, RU, gU) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, UU, RU, gU), this
      }
      removeAlphaRemapGradient(UU) {
        return this._removeFactorGradient(this._alphaRemapGradients, UU), this
      }
      addAngularSpeedGradient(UU, RU, gU) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = nR, this._angularSpeedGradientProcessing = {
          process: NU,
          previousItem: null,
          nextItem: null
        }, oR(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, UU, RU, gU), this
      }
      removeAngularSpeedGradient(UU) {
        return this._removeFactorGradient(this._angularSpeedGradients, UU), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = wR, aR(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(UU, RU, gU) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: RR,
          previousItem: null,
          nextItem: null
        }, ZR(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: tR,
          previousItem: null,
          nextItem: null
        }, oR(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, UU, RU, gU), this
      }
      removeVelocityGradient(UU) {
        return this._removeFactorGradient(this._velocityGradients, UU), 0 === this._velocityGradients?.length && (aR(this._velocityCreation), aR(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(UU, RU, gU) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: gR,
          previousItem: null,
          nextItem: null
        }, ZR(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: pR,
          previousItem: null,
          nextItem: null
        }, ZR(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, UU, RU, gU), this
      }
      removeLimitVelocityGradient(UU) {
        return this._removeFactorGradient(this._limitVelocityGradients, UU), 0 === this._limitVelocityGradients?.length && (aR(this._limitVelocityCreation), aR(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(UU, RU, gU) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: cR,
          previousItem: null,
          nextItem: null
        }, oR(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: GR,
          previousItem: null,
          nextItem: null
        }, oR(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, UU, RU, gU), this
      }
      removeDragGradient(UU) {
        return this._removeFactorGradient(this._dragGradients, UU), 0 === this._dragGradients?.length && (aR(this._dragCreation), aR(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(UU, RU, gU) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, UU, RU, gU), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(UU) {
        return this._removeFactorGradient(this._startSizeGradients, UU), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const UU = new Uint8Array(4 * this._rawTextureWidth),
          RU = cU.m.Color3[0];
        for (let gU = 0; gU < this._rawTextureWidth; gU++) {
          const pU = gU / this._rawTextureWidth;
          tU.j.GetCurrentGradient(pU, this._rampGradients, ((tU, pU, EU) => {
            cU.e.LerpToRef(tU.color, pU.color, EU, RU), UU[4 * gU] = 255 * RU.r, UU[4 * gU + 1] = 255 * RU.g, UU[4 * gU + 2] = 255 * RU.b, UU[4 * gU + 3] = 255
          }))
        }
        this._rampGradientsTexture = TU.e.CreateRGBATexture(UU, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((UU, RU) => UU.gradient < RU.gradient ? -1 : UU.gradient > RU.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(UU, RU) {
        this._rampGradients || (this._rampGradients = []);
        const gU = new tU.d(UU, RU);
        return this._rampGradients.push(gU), this._syncRampGradientTexture(), this
      }
      removeRampGradient(UU) {
        return this._removeGradientAndTexture(UU, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(UU, RU, gU) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = MU, this._colorProcessing.process = DU);
        const pU = new tU.b(UU, RU, gU);
        return this._colorGradients.push(pU), this._colorGradients.sort(((UU, RU) => UU.gradient < RU.gradient ? -1 : UU.gradient > RU.gradient ? 1 : 0)), this
      }
      removeColorGradient(UU) {
        if (!this._colorGradients) return this;
        let RU = 0;
        for (const gU of this._colorGradients) {
          if (gU.gradient === UU) {
            this._colorGradients.splice(RU, 1);
            break
          }
          RU++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = AU, this._colorProcessing.process = LU), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const UU of this._drawWrappers)
            if (UU)
              for (const RU of UU) RU?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(UU, RU, gU, tU, pU) {
        return pU[4 * (((UU = .5 * Math.abs(UU) + .5) * gU % gU | 0) + ((RU = .5 * Math.abs(RU) + .5) * tU % tU | 0) * gU)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const UU = this._engine,
          RU = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * RU), this._vertexBuffer = new PU.e(UU, this._vertexData, !0, RU);
        let gU = 0;
        const tU = this._vertexBuffer.createVertexBuffer(PU.l.PositionKind, gU, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[PU.l.PositionKind] = tU, gU += 3;
        const pU = this._vertexBuffer.createVertexBuffer(PU.l.ColorKind, gU, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[PU.l.ColorKind] = pU, gU += 4;
        const EU = this._vertexBuffer.createVertexBuffer("angle", gU, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = EU, gU += 1;
        const TU = this._vertexBuffer.createVertexBuffer("size", gU, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = TU, gU += 2, this._isAnimationSheetEnabled) {
          const UU = this._vertexBuffer.createVertexBuffer("cellIndex", gU, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = UU, gU += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const UU = this._vertexBuffer.createVertexBuffer("direction", gU, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = UU, gU += 3
        }
        if (this._useRampGradients) {
          const UU = this._vertexBuffer.createVertexBuffer("remapData", gU, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = UU, gU += 4
        }
        let qU;
        if (this._useInstancing) {
          const RU = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new PU.e(UU, RU, !1, 2), qU = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else qU = this._vertexBuffer.createVertexBuffer("offset", gU, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = qU, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const UU = [],
          RU = [];
        let gU = 0;
        for (let tU = 0; tU < this._capacity; tU++) UU.push(gU), UU.push(gU + 1), UU.push(gU + 2), UU.push(gU), UU.push(gU + 2), UU.push(gU + 3), RU.push(gU, gU + 1, gU + 1, gU + 2, gU + 2, gU + 3, gU + 3, gU, gU, gU + 3), gU += 4;
        this._indexBuffer = this._engine.createIndexBuffer(UU), this._linesIndexBuffer = this._engine.createIndexBuffer(RU)
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
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (UU) return this.startDelay = UU, void setTimeout((() => {
          this.start(0)
        }), UU);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const UU = this.noiseTexture;
          if (UU && UU.onGeneratedObservable) UU.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let RU = 0; RU < this.preWarmCycles; RU++) this.animate(!0), UU.render()
            }))
          }));
          else
            for (let RU = 0; RU < this.preWarmCycles; RU++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(UU))
      }
      _postStop(UU) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(UU, RU, gU, tU) {
        let pU = UU * this._vertexBufferSize;
        const PU = EU.h.xC[0].PgU(this._scene?.floatingOriginOffset || EU.n.ZeroReadOnly);
        if (this._vertexData[pU++] = RU.position.x + this.worldOffset.x - PU.x, this._vertexData[pU++] = RU.position.y + this.worldOffset.y - PU.y, this._vertexData[pU++] = RU.position.z + this.worldOffset.z - PU.z, this._vertexData[pU++] = RU.color.r, this._vertexData[pU++] = RU.color.g, this._vertexData[pU++] = RU.color.b, this._vertexData[pU++] = RU.color.a, this._vertexData[pU++] = RU.angle, this._vertexData[pU++] = RU.scale.x * RU.size, this._vertexData[pU++] = RU.scale.y * RU.size, this._isAnimationSheetEnabled && (this._vertexData[pU++] = RU.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[pU++] = RU.direction.x, this._vertexData[pU++] = RU.direction.y, this._vertexData[pU++] = RU.direction.z);
        else if (RU._properties.initialDirection) {
          let UU = RU._properties.initialDirection;
          this.isLocal && (EU.n.TransformNormalToRef(UU, this._emitterWorldMatrix, EU.h.xC[0]), UU = EU.h.xC[0]), 0 === UU.x && 0 === UU.z && (UU.x = .001), this._vertexData[pU++] = UU.x, this._vertexData[pU++] = UU.y, this._vertexData[pU++] = UU.z
        } else {
          let UU = RU.direction;
          this.isLocal && (EU.n.TransformNormalToRef(UU, this._emitterWorldMatrix, EU.h.xC[0]), UU = EU.h.xC[0]), 0 === UU.x && 0 === UU.z && (UU.x = .001), this._vertexData[pU++] = UU.x, this._vertexData[pU++] = UU.y, this._vertexData[pU++] = UU.z
        }
        this._useRampGradients && RU.remapData && (this._vertexData[pU++] = RU.remapData.x, this._vertexData[pU++] = RU.remapData.y, this._vertexData[pU++] = RU.remapData.z, this._vertexData[pU++] = RU.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === gU ? gU = this._epsilon : 1 === gU && (gU = 1 - this._epsilon), 0 === tU ? tU = this._epsilon : 1 === tU && (tU = 1 - this._epsilon)), this._vertexData[pU++] = gU, this._vertexData[pU] = tU)
      }
      _prepareParticle(UU) {}
      _createNewOnes(UU) {
        let RU;
        for (let gU = 0; gU < UU && this._particles.length !== this._capacity; gU++) {
          RU = this._createParticle(), this._particles.push(RU);
          let UU = this._createQueueStart;
          for (; UU;) UU.process(RU, this), UU = UU.nextItem;
          RU._inheritParticleInfoToSubEmitters()
        }
      }
      _update(UU) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const UU = this.emitter;
          this._emitterWorldMatrix = UU.getWorldMatrix()
        } else {
          const UU = this.emitter;
          this._emitterWorldMatrix = EU.c.Translation(UU.x, UU.y, UU.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(UU)
      }
      static _GetAttributeNamesOrOptions() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tU = [PU.l.PositionKind, PU.l.ColorKind, "angle", "offset", "size"];
        return UU && tU.push("cellIndex"), RU || tU.push("direction"), gU && tU.push("remapData"), tU
      }
      static _GetEffectCreationOptions() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tU = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, kU.c)(tU), UU && tU.push("particlesInfos"), RU && tU.push("logarithmicDepthConstant"), gU && (tU.push("vFogInfos"), tU.push("vFogColor")), tU
      }
      fillDefines(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, kU.h)(this, this._scene, UU), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && UU.push("#define FOG")), this._isAnimationSheetEnabled && UU.push("#define ANIMATESHEET"), this.useLogarithmicDepth && UU.push("#define LOGARITHMICDEPTH"), RU === IU.BLENDMODE_MULTIPLY && UU.push("#define BLENDMULTIPLYMODE"), this.isLocal && UU.push("#define LOCAL"), this._useRampGradients && UU.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (UU.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            UU.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            UU.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && UU.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            UU.push("#define BILLBOARDMODE_ALL")
        }
        gU && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), UU.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(UU, RU, gU) {
        RU.push(...BR._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), UU.push(...BR._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), gU.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, iU.f)(UU, this._imageProcessingConfigurationDefines), (0, iU.c)(gU, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(UU) {
        var RU;
        const gU = this._getCustomDrawWrapper(UU);
        if (gU?.effect) return gU;
        const tU = [];
        this.fillDefines(tU, UU);
        const EU = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          PU = YR.e._PrepareStringDefines(EU, tU),
          TU = PU ? YR.e.GetConfiguration(EU) : void 0;
        let qU = this._drawWrappers[EU];
        qU || (qU = this._drawWrappers[EU] = [], 0 === EU || this._renderPassObserver || (this._renderPassObserver = ((RU = this._engine)._onReleaseRenderPassObservable ?? (RU._onReleaseRenderPassObservable = new pU.b)).add((UU => {
          const RU = this._drawWrappers[UU];
          if (RU) {
            for (const UU of RU) UU?.dispose();
            delete this._drawWrappers[UU]
          }
        }))));
        let KU = qU[UU];
        KU || (KU = new yU.c(this._engine), KU.drawContext && (KU.drawContext.useInstancing = this._useInstancing), qU[UU] = KU);
        const cU = tU.join("\n");
        if (KU.defines !== cU) {
          const UU = [],
            RU = [],
            gU = [];
          this.fillUniformsAttributesAndSamplerNames(RU, UU, gU), PU && (RU.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== TU?.defines.PREPASS_LOCAL_POSITION_INDEX && RU.push("inverseEmitterWM", "geometryWorldOffset")), KU.setEffect(this._engine.createEffect("particles", {
            attributes: UU,
            uniformsNames: RU,
            samplers: gU,
            defines: cU,
            shaderLanguage: this._shaderLanguage,
            multiTarget: PU,
            indexParameters: PU ? {
              buffersCount: TU?._mrtCount ?? 0
            } : void 0
          }, this._engine), cU)
        }
        return KU
      }
      _bindGeometryRendering(UU) {
        const RU = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          gU = YR.e.GetConfiguration(RU);
        if (!gU?._defines) return;
        UU.setFloat("objectId", 0), UU.setInt("meshBlendTag", 0);
        const tU = this._scene?.activeCamera;
        if (UU.setFloat2("cameraInfo", tU?.minZ ?? 0, tU?.maxZ ?? 1), this.isLocal && void 0 !== gU.defines.PREPASS_LOCAL_POSITION_INDEX) {
          UU.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const RU = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || EU.n.ZeroReadOnly, EU.h.xC[0]);
          UU.setVector3("geometryWorldOffset", RU)
        }
      }
      animate() {
        let UU, RU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!RU && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (RU ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) UU = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const RU = this._calculateEmitRate();
            UU = RU * this._scaledUpdateSpeed | 0, this._newPartsExcess += RU * this._scaledUpdateSpeed - UU
          }
          if (this._newPartsExcess > 1 && (UU += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? UU = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(UU), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !RU) {
            let UU = 0;
            for (let RU = 0; RU < this._particles.length; RU++) {
              const gU = this._particles[RU];
              this._appendParticleVertices(UU, gU), UU += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const UU = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  RU = this._particles.length;
                RU < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, RU * UU, this._fixedCapacityHighWaterMark * UU), this._fixedCapacityHighWaterMark = RU, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const UU = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * UU), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let UU = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const RU = this._actualFrame / this.targetStopDuration;
          tU.j.GetCurrentGradient(RU, this._emitRateGradients, ((RU, gU, tU) => {
            RU !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = gU.getFactor(), this._currentEmitRateGradient = RU), UU = (0, uU.Lerp)(this._currentEmitRate1, this._currentEmitRate2, tU)
          }))
        }
        return UU
      }
      _appendParticleVertices(UU, RU) {
        this._appendParticleVertex(UU++, RU, 0, 0), this._useInstancing || (this._appendParticleVertex(UU++, RU, 1, 0), this._appendParticleVertex(UU++, RU, 1, 1), this._appendParticleVertex(UU, RU, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !BR.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([gU.e(336).then((() => gU(60563))), gU.e(330).then((() => gU(60572)))])) : await Promise.all([gU.e(319).then((() => gU(60576))), Promise.all([gU.e(312), gU.e(348)]).then((() => gU(60584)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== IU.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(IU.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(IU.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(UU) {
        const RU = this._getWrapper(UU),
          gU = RU.effect,
          tU = this._engine;
        tU.enableEffect(RU);
        const pU = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        gU.setTexture("diffuseSampler", this.particleTexture), gU.setMatrix("view", pU);
        const PU = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (gU.setMatrix("projection", PU), this._isAnimationSheetEnabled && this.particleTexture) {
          const UU = this.particleTexture.getBaseSize();
          gU.setFloat3("particlesInfos", this.spriteCellWidth / UU.width, this.spriteCellHeight / UU.height, this.spriteCellWidth / UU.width)
        }
        if (gU.setVector2("translationPivot", this.translationPivot), gU.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const UU = this._scene.activeCamera;
          gU.setVector3("eyePosition", UU.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), gU.setTexture("rampSampler", this._rampGradientsTexture));
        const TU = gU.defines;
        this._scene && ((0, kU.f)(gU, this, this._scene), this.applyFog && (0, FU.g)(this._scene, void 0, gU)), TU.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (pU.invertToRef(EU.h.Matrix[0]), gU.setMatrix("invView", EU.h.Matrix[0])), gU._multiTarget && this._bindGeometryRendering(gU), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? tU.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, gU) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, gU)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? tU.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, gU) : tU.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, gU), this.useLogarithmicDepth && this._scene && (0, FU.q)(TU, gU, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(gU), this._setEngineBasedOnBlendMode(UU), gU._multiTarget && YR.e._BindZeroAlphaDiscard(tU, gU);
        let qU = !1;
        try {
          YR.e._BindAttachmentsForEffect(tU, gU) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(gU), this._useInstancing ? this._scene?.forceWireframe ? tU.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : tU.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? tU.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : tU.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), qU = !0)
        } finally {
          YR.e._RestoreAttachments(tU)
        }
        return qU ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const UU = this._engine;
        let RU;
        return UU.setState && (UU.setState(!1), this.forceDepthWrite && UU.setDepthWrite(!0)), RU = this.blendMode === IU.BLENDMODE_MULTIPLYADD ? this._render(IU.BLENDMODE_MULTIPLY) + this._render(IU.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), RU
      }
      _onDispose() {}
      dispose() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), UU && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), UU && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(RU, gU), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const UU = this._scene.vI.indexOf(this);
          UU > -1 && this._scene.vI.splice(UU, 1), this._scene._activeParticleSystems.dispose()
        }
        this.HZ.notifyObservers(this), this.HZ.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    BR.ForceGLSL = !1;
    var VR, rR = gU(36639);
    ! function(UU) {
      UU[UU.ATTACHED = 0] = "ATTACHED", UU[UU.END = 1] = "END"
    }(VR || (VR = {}));
    class XR {
      constructor(UU) {
        if (this.particleSystem = UU, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !UU.emitter || !UU.emitter.dispose) {
          const RU = (0, rR.e)("BABYLON.AbstractMesh");
          UU.emitter = new RU("SubemitterSystemEmitter", UU.aZ()), UU._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let UU = this.particleSystem.emitter;
        if (UU) {
          if (UU instanceof EU.n) UU = UU.clone();
          else if (-1 !== UU.getClassName().indexOf("Mesh")) {
            UU = new((0, rR.e)("BABYLON.Mesh"))("", UU.aZ()), UU.isVisible = !1
          }
        } else UU = new EU.n;
        const RU = new XR(this.particleSystem.clone(this.particleSystem.name, UU));
        return RU.particleSystem.name += "Clone", RU.type = this.type, RU.inheritDirection = this.inheritDirection, RU.inheritedVelocityAmount = this.inheritedVelocityAmount, RU.particleSystem._disposeEmitterOnDispose = !0, RU.particleSystem.disposeOnStop = !0, RU
      }
      serialize() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RU = {};
        return RU.type = this.type, RU.inheritDirection = this.inheritDirection, RU.inheritedVelocityAmount = this.inheritedVelocityAmount, RU.particleSystem = this.particleSystem.serialize(UU), RU
      }
      static _ParseParticleSystem(UU, RU, gU) {
        throw (0, vU.n)("ParseParticle")
      }
      static Parse(UU, RU, gU) {
        const tU = UU.particleSystem,
          pU = new XR(XR._ParseParticleSystem(tU, RU, gU, !0));
        return pU.type = UU.type, pU.inheritDirection = UU.inheritDirection, pU.inheritedVelocityAmount = UU.inheritedVelocityAmount, pU.particleSystem._isSubEmitter = !0, pU
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var vR = gU(39272),
      dR = gU(39395);
    const HR = () => {};
    class SR {
      constructor() {
        this.particlePositionGenerator = HR, this.particleDestinationGenerator = HR, this.particleDirectionGenerator = HR
      }
      startDirectionFunction(UU, RU, gU, tU) {
        const pU = EU.h.xC[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== HR) this.particleDirectionGenerator(-1, gU, pU);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== HR) {
          this.particleDestinationGenerator(-1, gU, pU);
          const UU = EU.h.xC[1];
          pU.subtractToRef(gU.position, UU), UU.scaleToRef(1 / gU.lifeTime, pU)
        } else pU.set(0, 0, 0);
        tU ? RU.PgU(pU) : EU.n.TransformNormalToRef(pU, UU, RU)
      }
      startPositionFunction(UU, RU, gU, tU) {
        const pU = EU.h.xC[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== HR ? this.particlePositionGenerator(-1, gU, pU) : pU.set(0, 0, 0), tU ? RU.PgU(pU) : EU.n.TransformCoordinatesToRef(pU, UU, RU)
      }
      clone() {
        const UU = new SR;
        return jU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {}
      buildUniformLayout(UU) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.particlePositionGenerator = this.particlePositionGenerator, UU.particleDestinationGenerator = this.particleDestinationGenerator, UU
      }
      parse(UU) {
        UU.particlePositionGenerator && (this.particlePositionGenerator = UU.particlePositionGenerator), UU.particleDestinationGenerator && (this.particleDestinationGenerator = UU.particleDestinationGenerator)
      }
    }
    const sR = EU.n.Zero(),
      yR = EU.n.Zero(),
      kR = EU.n.Zero();
    class FR {
      constructor() {
        this.strength = 0, this.position = EU.n.Zero()
      }
      _processParticle(UU, RU) {
        this.position.subtractToRef(UU.position, sR);
        const gU = sR.lengthSquared() + 1;
        sR.normalize().scaleToRef(this.strength / gU, yR), yR.scaleToRef(RU._tempScaledUpdateSpeed, kR), UU.direction.addInPlace(kR)
      }
      serialize() {
        return {
          position: this.position.vgU(),
          strength: this.strength
        }
      }
    }
    const iR = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class AR extends BR {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = UU => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const RU = Math.floor(Math.random() * this._subEmitters.length);
          for (const gU of this._subEmitters[RU])
            if (1 === gU.type) {
              const RU = gU.clone();
              UU._inheritParticleInfoToSubEmitter(RU), RU.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(RU.particleSystem), RU.particleSystem.start()
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
      set flowMap(UU) {
        this._flowMap !== UU && (this._flowMap = UU, this._flowMapUpdate && (aR(this._flowMapUpdate), this._flowMapUpdate = null), UU && (this._flowMapUpdate = {
          process: UU => {
            const RU = this.aZ()?.getTransformMatrix();
            this._flowMap._processParticle(UU, this.flowMapStrength * this._tempScaledUpdateSpeed, RU)
          },
          previousItem: null,
          nextItem: null
        }, ZR(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(UU) {
        super.addAttractor(UU), 1 === this._attractors.length && (this._attractorUpdate = {
          process: UU => {
            for (const RU of this._attractors) RU._processParticle(UU, this)
          },
          previousItem: null,
          nextItem: null
        }, ZR(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(UU) {
        super.removeAttractor(UU), 0 === this._attractors.length && this._attractorUpdate && aR(this._attractorUpdate)
      }
      start() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(UU)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const UU of this.subEmitters) UU instanceof AR ? this._subEmitters.push([new XR(UU)]) : UU instanceof XR ? this._subEmitters.push([UU]) : UU instanceof Array && this._subEmitters.push(UU)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const UU of this.activeSubSystems) UU.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const UU = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== UU && this._rootParticleSystem.activeSubSystems.splice(UU, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(UU) {
        UU && this._stopSubEmitters()
      }
      _prepareParticle(UU) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const RU = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          UU._properties.attachedSubEmitters = [];
          for (const gU of RU)
            if (0 === gU.type) {
              const RU = gU.clone();
              UU._properties.attachedSubEmitters.push(RU), RU.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), UU && this.particles)
          for (const gU of this.particles)
            if (gU._properties.attachedSubEmitters)
              for (let UU = gU._properties.attachedSubEmitters.length - 1; UU >= 0; UU -= 1) gU._properties.attachedSubEmitters[UU].dispose();
        if (RU && this.activeSubSystems)
          for (let gU = this.activeSubSystems.length - 1; gU >= 0; gU -= 1) this.activeSubSystems[gU].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let UU = 0; UU < this._subEmitters.length; UU++)
            for (const RU of this._subEmitters[UU]) RU.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(UU, RU, gU, tU) {
        let pU;
        pU = gU instanceof vR.d ? null : gU;
        const PU = (0, rR.e)("BABYLON.Texture");
        if (PU && pU)
          if (UU.texture) RU.particleTexture = PU.Parse(UU.texture, pU, tU);
          else if (UU.textureName) {
          const gU = UU.textureSettings;
          if (RU.particleTexture = new PU(tU + UU.textureName, pU, !1, void 0 === UU.invertY || UU.invertY, gU ? gU.samplingMode : void 0), RU.particleTexture.name = UU.textureName, gU) {
            const UU = RU.particleTexture;
            for (const RU of iR) void 0 !== gU[RU] && (UU[RU] = gU[RU])
          }
        }
        if (UU.emitterId || 0 === UU.emitterId || void 0 !== UU.emitter ? (UU.emitterId || 0 === UU.emitterId) && pU ? (RU.emitter = pU.getLastMeshById(UU.emitterId), RU.emitter || (RU.emitter = EU.n.Zero())) : RU.emitter = EU.n.FromArray(UU.emitter) : RU.emitter = EU.n.Zero(), RU.isLocal = !!UU.isLocal, void 0 !== UU.renderingGroupId && (RU.renderingGroupId = UU.renderingGroupId), void 0 !== UU.isBillboardBased && (RU.isBillboardBased = UU.isBillboardBased), void 0 !== UU.billboardMode && (RU.billboardMode = UU.billboardMode), void 0 !== UU.useLogarithmicDepth && (RU.useLogarithmicDepth = UU.useLogarithmicDepth), UU.animations) {
          for (let gU = 0; gU < UU.animations.length; gU++) {
            const tU = UU.animations[gU],
              pU = (0, rR.e)("BABYLON.Animation");
            pU && RU.animations.push(pU.Parse(tU))
          }
          RU.beginAnimationOnStart = UU.beginAnimationOnStart, RU.beginAnimationFrom = UU.beginAnimationFrom, RU.beginAnimationTo = UU.beginAnimationTo, RU.beginAnimationLoop = UU.beginAnimationLoop
        }
        if (UU.autoAnimate && pU && pU.beginAnimation(RU, UU.autoAnimateFrom, UU.autoAnimateTo, UU.autoAnimateLoop, UU.autoAnimateSpeed || 1), RU.startDelay = 0 | UU.startDelay, RU.minAngularSpeed = UU.minAngularSpeed, RU.maxAngularSpeed = UU.maxAngularSpeed, RU.minSize = UU.minSize, RU.maxSize = UU.maxSize, UU.minScaleX && (RU.minScaleX = UU.minScaleX, RU.maxScaleX = UU.maxScaleX, RU.minScaleY = UU.minScaleY, RU.maxScaleY = UU.maxScaleY), void 0 !== UU.preWarmCycles && (RU.preWarmCycles = UU.preWarmCycles, RU.preWarmStepOffset = UU.preWarmStepOffset), void 0 !== UU.minInitialRotation && (RU.minInitialRotation = UU.minInitialRotation, RU.maxInitialRotation = UU.maxInitialRotation), RU.minLifeTime = UU.minLifeTime, RU.maxLifeTime = UU.maxLifeTime, RU.minEmitPower = UU.minEmitPower, RU.maxEmitPower = UU.maxEmitPower, RU.emitRate = UU.emitRate, RU.gravity = EU.n.FromArray(UU.gravity), UU.noiseStrength && (RU.noiseStrength = EU.n.FromArray(UU.noiseStrength)), RU.color1 = cU.g.FromArray(UU.color1), RU.color2 = cU.g.FromArray(UU.color2), RU.colorDead = cU.g.FromArray(UU.colorDead), RU.updateSpeed = UU.updateSpeed, RU.targetStopDuration = UU.targetStopDuration, RU.blendMode = UU.blendMode, UU.colorGradients)
          for (const EU of UU.colorGradients) RU.addColorGradient(EU.gradient, cU.g.FromArray(EU.color1), EU.color2 ? cU.g.FromArray(EU.color2) : void 0);
        if (UU.rampGradients) {
          for (const gU of UU.rampGradients) RU.addRampGradient(gU.gradient, cU.e.FromArray(gU.color));
          RU.useRampGradients = UU.useRampGradients
        }
        if (UU.colorRemapGradients)
          for (const EU of UU.colorRemapGradients) RU.addColorRemapGradient(EU.gradient, void 0 !== EU.factor1 ? EU.factor1 : EU.factor, EU.factor2);
        if (UU.alphaRemapGradients)
          for (const EU of UU.alphaRemapGradients) RU.addAlphaRemapGradient(EU.gradient, void 0 !== EU.factor1 ? EU.factor1 : EU.factor, EU.factor2);
        if (UU.sizeGradients)
          for (const EU of UU.sizeGradients) RU.addSizeGradient(EU.gradient, void 0 !== EU.factor1 ? EU.factor1 : EU.factor, EU.factor2);
        if (UU.angularSpeedGradients)
          for (const EU of UU.angularSpeedGradients) RU.addAngularSpeedGradient(EU.gradient, void 0 !== EU.factor1 ? EU.factor1 : EU.factor, EU.factor2);
        if (UU.velocityGradients)
          for (const EU of UU.velocityGradients) RU.addVelocityGradient(EU.gradient, void 0 !== EU.factor1 ? EU.factor1 : EU.factor, EU.factor2);
        if (UU.dragGradients)
          for (const EU of UU.dragGradients) RU.addDragGradient(EU.gradient, void 0 !== EU.factor1 ? EU.factor1 : EU.factor, EU.factor2);
        if (UU.emitRateGradients)
          for (const EU of UU.emitRateGradients) RU.addEmitRateGradient(EU.gradient, void 0 !== EU.factor1 ? EU.factor1 : EU.factor, EU.factor2);
        if (UU.startSizeGradients)
          for (const EU of UU.startSizeGradients) RU.addStartSizeGradient(EU.gradient, void 0 !== EU.factor1 ? EU.factor1 : EU.factor, EU.factor2);
        if (UU.lifeTimeGradients)
          for (const EU of UU.lifeTimeGradients) RU.addLifeTimeGradient(EU.gradient, void 0 !== EU.factor1 ? EU.factor1 : EU.factor, EU.factor2);
        if (UU.limitVelocityGradients) {
          for (const gU of UU.limitVelocityGradients) RU.addLimitVelocityGradient(gU.gradient, void 0 !== gU.factor1 ? gU.factor1 : gU.factor, gU.factor2);
          RU.limitVelocityDamping = UU.limitVelocityDamping
        }
        if (UU.noiseTexture && pU) {
          const gU = (0, rR.e)("BABYLON.ProceduralTexture");
          RU.noiseTexture = gU.Parse(UU.noiseTexture, pU, tU)
        }
        let TU;
        if (UU.particleEmitterType) {
          switch (UU.particleEmitterType.type) {
            case "SphereParticleEmitter":
              TU = new QU;
              break;
            case "SphereDirectedParticleEmitter":
              TU = new eU;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              TU = new fU;
              break;
            case "ConeDirectedParticleEmitter":
              TU = new xU;
              break;
            case "CylinderParticleEmitter":
              TU = new WU.g;
              break;
            case "CylinderDirectedParticleEmitter":
              TU = new WU.d;
              break;
            case "HemisphericParticleEmitter":
              TU = new hU;
              break;
            case "PointParticleEmitter":
              TU = new CU;
              break;
            case "MeshParticleEmitter":
              TU = new mU;
              break;
            case "CustomParticleEmitter":
              TU = new SR;
              break;
            default:
              TU = new GU.c
          }
          TU.parse(UU.particleEmitterType, pU)
        } else TU = new GU.c, TU.parse(UU, pU);
        RU.particleEmitterType = TU, RU.startSpriteCellID = UU.startSpriteCellID, RU.endSpriteCellID = UU.endSpriteCellID, RU.spriteCellLoop = UU.spriteCellLoop ?? !0, RU.spriteCellWidth = UU.spriteCellWidth, RU.spriteCellHeight = UU.spriteCellHeight, RU.spriteCellChangeSpeed = UU.spriteCellChangeSpeed, RU.spriteRandomStartCell = UU.spriteRandomStartCell, RU.disposeOnStop = UU.disposeOnStop ?? !1, RU.manualEmitCount = UU.manualEmitCount ?? -1
      }
      static Parse(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pU = arguments.length > 4 ? arguments[4] : void 0;
        const PU = UU.name;
        let TU, qU, KU = null,
          GU = null;
        if (RU instanceof vR.d ? TU = RU : (qU = RU, TU = qU.WC()), UU.customShader && (0, vU.e)(TU.createEffectForParticles)) {
          GU = UU.customShader;
          const RU = GU.shaderOptions.defines.length > 0 ? GU.shaderOptions.defines.join("\n") : "";
          KU = TU.createEffectForParticles(GU.shaderPath.fragmentElement, GU.shaderOptions.uniforms, GU.shaderOptions.samplers, RU)
        }
        const jU = new AR(PU, pU || UU.hG, RU, KU, UU.isAnimationSheetEnabled);
        if (jU.customShader = GU, jU._rootUrl = gU, UU.id && (jU.id = UU.id), UU.subEmitters) {
          jU.subEmitters = [];
          for (const tU of UU.subEmitters) {
            const UU = [];
            for (const pU of tU) UU.push(XR.Parse(pU, RU, gU));
            jU.subEmitters.push(UU)
          }
        }
        if (UU.attractors)
          for (const cU of UU.attractors) {
            const UU = new FR;
            UU.position = EU.n.FromArray(cU.position), UU.strength = cU.strength, jU.addAttractor(UU)
          }
        return AR._Parse(UU, jU, RU, gU), UU.textureMask && (jU.textureMask = cU.g.FromArray(UU.textureMask)), UU.worldOffset && (jU.worldOffset = EU.n.FromArray(UU.worldOffset)), UU.preventAutoStart && (jU.preventAutoStart = UU.preventAutoStart), UU.metadata && (jU.metadata = UU.metadata), tU || jU.preventAutoStart || jU.start(), jU
      }
      serialize() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RU = {};
        if (AR._Serialize(RU, this, UU), RU.textureMask = this.textureMask.vgU(), RU.customShader = this.customShader, RU.preventAutoStart = this.preventAutoStart, RU.worldOffset = this.worldOffset.vgU(), this.metadata && (RU.metadata = this.metadata), this.subEmitters) {
          RU.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const gU of this._subEmitters) {
            const tU = [];
            for (const RU of gU) RU.particleSystem.doNotSerialize || tU.push(RU.serialize(UU));
            RU.subEmitters.push(tU)
          }
        }
        if (this._attractors && this._attractors.length) {
          RU.attractors = [];
          for (const UU of this._attractors) RU.attractors.push(UU.serialize())
        }
        return RU
      }
      static _Serialize(UU, RU, gU) {
        if (UU.name = RU.name, UU.id = RU.id, UU.hG = RU.getCapacity(), UU.disposeOnStop = RU.disposeOnStop, UU.manualEmitCount = RU.manualEmitCount, RU.emitter.position) {
          const gU = RU.emitter;
          UU.emitterId = gU.id
        } else {
          const gU = RU.emitter;
          UU.emitter = gU.vgU()
        }
        if (RU.particleEmitterType && (UU.particleEmitterType = RU.particleEmitterType.serialize()), RU.particleTexture)
          if (gU) UU.texture = RU.particleTexture.serialize();
          else {
            const gU = RU.particleTexture;
            UU.textureName = RU.particleTexture.name, UU.invertY = !!gU._invertY;
            const tU = {};
            for (const UU of iR) tU[UU] = gU[UU];
            tU.samplingMode = gU.samplingMode, UU.textureSettings = tU
          } UU.isLocal = RU.isLocal, dR.b.AppendSerializedAnimations(RU, UU), UU.beginAnimationOnStart = RU.beginAnimationOnStart, UU.beginAnimationFrom = RU.beginAnimationFrom, UU.beginAnimationTo = RU.beginAnimationTo, UU.beginAnimationLoop = RU.beginAnimationLoop, UU.startDelay = RU.startDelay, UU.renderingGroupId = RU.renderingGroupId, UU.isBillboardBased = RU.isBillboardBased, UU.billboardMode = RU.billboardMode, UU.minAngularSpeed = RU.minAngularSpeed, UU.maxAngularSpeed = RU.maxAngularSpeed, UU.minSize = RU.minSize, UU.maxSize = RU.maxSize, UU.minScaleX = RU.minScaleX, UU.maxScaleX = RU.maxScaleX, UU.minScaleY = RU.minScaleY, UU.maxScaleY = RU.maxScaleY, UU.minEmitPower = RU.minEmitPower, UU.maxEmitPower = RU.maxEmitPower, UU.minLifeTime = RU.minLifeTime, UU.maxLifeTime = RU.maxLifeTime, UU.emitRate = RU.emitRate, UU.gravity = RU.gravity.vgU(), UU.noiseStrength = RU.noiseStrength.vgU(), UU.color1 = RU.color1.vgU(), UU.color2 = RU.color2.vgU(), UU.colorDead = RU.colorDead.vgU(), UU.updateSpeed = RU.updateSpeed, UU.targetStopDuration = RU.targetStopDuration, UU.blendMode = RU.blendMode, UU.preWarmCycles = RU.preWarmCycles, UU.preWarmStepOffset = RU.preWarmStepOffset, UU.minInitialRotation = RU.minInitialRotation, UU.maxInitialRotation = RU.maxInitialRotation, UU.startSpriteCellID = RU.startSpriteCellID, UU.spriteCellLoop = RU.spriteCellLoop, UU.endSpriteCellID = RU.endSpriteCellID, UU.spriteCellChangeSpeed = RU.spriteCellChangeSpeed, UU.spriteCellWidth = RU.spriteCellWidth, UU.spriteCellHeight = RU.spriteCellHeight, UU.spriteRandomStartCell = RU.spriteRandomStartCell, UU.isAnimationSheetEnabled = RU.isAnimationSheetEnabled, UU.useLogarithmicDepth = RU.useLogarithmicDepth;
        const tU = RU.getColorGradients();
        if (tU) {
          UU.colorGradients = [];
          for (const RU of tU) {
            const gU = {
              gradient: RU.gradient,
              color1: RU.color1.vgU()
            };
            RU.color2 ? gU.color2 = RU.color2.vgU() : gU.color2 = RU.color1.vgU(), UU.colorGradients.push(gU)
          }
        }
        const pU = RU.getRampGradients();
        if (pU) {
          UU.rampGradients = [];
          for (const RU of pU) {
            const gU = {
              gradient: RU.gradient,
              color: RU.color.vgU()
            };
            UU.rampGradients.push(gU)
          }
          UU.useRampGradients = RU.useRampGradients
        }
        const EU = RU.getColorRemapGradients();
        if (EU) {
          UU.colorRemapGradients = [];
          for (const RU of EU) {
            const gU = {
              gradient: RU.gradient,
              factor1: RU.factor1
            };
            void 0 !== RU.factor2 ? gU.factor2 = RU.factor2 : gU.factor2 = RU.factor1, UU.colorRemapGradients.push(gU)
          }
        }
        const PU = RU.getAlphaRemapGradients();
        if (PU) {
          UU.alphaRemapGradients = [];
          for (const RU of PU) {
            const gU = {
              gradient: RU.gradient,
              factor1: RU.factor1
            };
            void 0 !== RU.factor2 ? gU.factor2 = RU.factor2 : gU.factor2 = RU.factor1, UU.alphaRemapGradients.push(gU)
          }
        }
        const TU = RU.getSizeGradients();
        if (TU) {
          UU.sizeGradients = [];
          for (const RU of TU) {
            const gU = {
              gradient: RU.gradient,
              factor1: RU.factor1
            };
            void 0 !== RU.factor2 ? gU.factor2 = RU.factor2 : gU.factor2 = RU.factor1, UU.sizeGradients.push(gU)
          }
        }
        const qU = RU.getAngularSpeedGradients();
        if (qU) {
          UU.angularSpeedGradients = [];
          for (const RU of qU) {
            const gU = {
              gradient: RU.gradient,
              factor1: RU.factor1
            };
            void 0 !== RU.factor2 ? gU.factor2 = RU.factor2 : gU.factor2 = RU.factor1, UU.angularSpeedGradients.push(gU)
          }
        }
        const KU = RU.getVelocityGradients();
        if (KU) {
          UU.velocityGradients = [];
          for (const RU of KU) {
            const gU = {
              gradient: RU.gradient,
              factor1: RU.factor1
            };
            void 0 !== RU.factor2 ? gU.factor2 = RU.factor2 : gU.factor2 = RU.factor1, UU.velocityGradients.push(gU)
          }
        }
        const cU = RU.getDragGradients();
        if (cU) {
          UU.dragGradients = [];
          for (const RU of cU) {
            const gU = {
              gradient: RU.gradient,
              factor1: RU.factor1
            };
            void 0 !== RU.factor2 ? gU.factor2 = RU.factor2 : gU.factor2 = RU.factor1, UU.dragGradients.push(gU)
          }
        }
        const GU = RU.getEmitRateGradients();
        if (GU) {
          UU.emitRateGradients = [];
          for (const RU of GU) {
            const gU = {
              gradient: RU.gradient,
              factor1: RU.factor1
            };
            void 0 !== RU.factor2 ? gU.factor2 = RU.factor2 : gU.factor2 = RU.factor1, UU.emitRateGradients.push(gU)
          }
        }
        const jU = RU.getStartSizeGradients();
        if (jU) {
          UU.startSizeGradients = [];
          for (const RU of jU) {
            const gU = {
              gradient: RU.gradient,
              factor1: RU.factor1
            };
            void 0 !== RU.factor2 ? gU.factor2 = RU.factor2 : gU.factor2 = RU.factor1, UU.startSizeGradients.push(gU)
          }
        }
        const uU = RU.getLifeTimeGradients();
        if (uU) {
          UU.lifeTimeGradients = [];
          for (const RU of uU) {
            const gU = {
              gradient: RU.gradient,
              factor1: RU.factor1
            };
            void 0 !== RU.factor2 ? gU.factor2 = RU.factor2 : gU.factor2 = RU.factor1, UU.lifeTimeGradients.push(gU)
          }
        }
        const CU = RU.getLimitVelocityGradients();
        if (CU) {
          UU.limitVelocityGradients = [];
          for (const RU of CU) {
            const gU = {
              gradient: RU.gradient,
              factor1: RU.factor1
            };
            void 0 !== RU.factor2 ? gU.factor2 = RU.factor2 : gU.factor2 = RU.factor1, UU.limitVelocityGradients.push(gU)
          }
          UU.limitVelocityDamping = RU.limitVelocityDamping
        }
        RU.noiseTexture && (UU.noiseTexture = RU.noiseTexture.serialize())
      }
      clone(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tU = {
          ...this._customWrappers
        };
        let pU = null;
        const EU = this._engine;
        if ((0, vU.e)(EU.createEffectForParticles) && null != this.customShader) {
          pU = this.customShader;
          const UU = pU.shaderOptions.defines.length > 0 ? pU.shaderOptions.defines.join("\n") : "",
            RU = EU.createEffectForParticles(pU.shaderPath.fragmentElement, pU.shaderOptions.uniforms, pU.shaderOptions.samplers, UU);
          tU[0] ? tU[0].effect = RU : this.setCustomEffect(RU, 0)
        }
        const PU = this.serialize(gU),
          TU = !1 === gU && this.particleTexture ? this.particleTexture.clone() : null;
        TU && (PU.textureName = void 0);
        const qU = AR.Parse(PU, this._scene || this._engine, this._rootUrl);
        return qU.name = UU, qU.customShader = pU, qU._customWrappers = tU, TU && (qU.particleTexture = TU), void 0 === RU && (RU = this.emitter), this.noiseTexture && (qU.noiseTexture = this.noiseTexture.clone()), qU.emitter = RU, this.preventAutoStart || qU.start(), qU
      }
    }
    AR.BILLBOARDMODE_Y = 2, AR.BILLBOARDMODE_ALL = 7, AR.BILLBOARDMODE_STRETCHED = 8, AR.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let zR = !1;
    zR || (zR = !0, XR._ParseParticleSystem = AR.Parse)
  },
  41014: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      SkyMaterial: () => fU,
      _MaxColorValueForRenderTarget: () => WU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(39395),
      PU = gU(36593),
      TU = gU(39669),
      qU = gU(39732),
      KU = gU(40975),
      cU = gU(40533),
      GU = gU(39460),
      jU = gU(36639),
      uU = gU(39759),
      CU = gU(39740),
      hU = gU(39720),
      QU = gU(39716);
    class eU extends TU.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function WU(UU) {
      switch (UU) {
        case KU.d.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case KU.d.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let fU = (() => {
      var UU;
      let RU, TU, KU, jU, fU, xU, mU, IU, JU, wU, nU, bU, oU, ZU, aU, YU = qU.b,
        BU = [],
        VU = [],
        rU = [],
        XU = [],
        vU = [],
        dU = [],
        HU = [],
        SU = [],
        sU = [],
        yU = [],
        kU = [],
        FU = [],
        iU = [],
        AU = [],
        zU = [],
        MU = [],
        DU = [],
        LU = [],
        NU = [],
        lU = [],
        OU = [],
        UR = [],
        RR = [],
        gR = [],
        tR = [],
        pR = [],
        ER = [],
        PR = [],
        TR = [],
        qR = [];
      return UU = class extends YU {
        constructor(UU, RU) {
          super(UU, RU, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, tU.j)(this, BU, 1), this.turbidity = ((0, tU.j)(this, VU), (0, tU.j)(this, rU, 10)), this.rayleigh = ((0, tU.j)(this, XU), (0, tU.j)(this, vU, 2)), this.mieCoefficient = ((0, tU.j)(this, dU), (0, tU.j)(this, HU, .005)), this.mieDirectionalG = ((0, tU.j)(this, SU), (0, tU.j)(this, sU, .8)), this.distance = ((0, tU.j)(this, yU), (0, tU.j)(this, kU, 500)), this.inclination = ((0, tU.j)(this, FU), (0, tU.j)(this, iU, .49)), this.azimuth = ((0, tU.j)(this, AU), (0, tU.j)(this, zU, .25)), this.sunPosition = ((0, tU.j)(this, MU), (0, tU.j)(this, DU, new PU.xC(0, 100, 0))), this.useSunPosition = ((0, tU.j)(this, LU), (0, tU.j)(this, NU, !1)), this.cameraOffset = ((0, tU.j)(this, lU), (0, tU.j)(this, OU, PU.xC.Zero())), this.up = ((0, tU.j)(this, UR), (0, tU.j)(this, RR, PU.xC.Up())), this.dithering = ((0, tU.j)(this, gR), (0, tU.j)(this, tR, !1)), this.rawHdrOutput = ((0, tU.j)(this, pR), (0, tU.j)(this, ER, !1)), this.cloudiness = ((0, tU.j)(this, PR), (0, tU.j)(this, TR, 0)), this._cameraPosition = ((0, tU.j)(this, qR), PU.xC.Zero()), this._skyOrientation = new PU.Quaternion
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
        isReadyForSubMesh(RU, gU) {
          const tU = gU._drawWrapper;
          if (this.isFrozen && tU.effect && tU._wasPreviouslyReady) return !0;
          gU.materialDefines || (gU.materialDefines = new eU);
          const pU = gU.materialDefines,
            EU = this.aZ();
          if (this._isReadyForSubMesh(gU)) return !0;
          if ((0, QU.X)(RU, EU, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, pU, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, QU.K)(RU, pU, !0, !1), pU.IMAGEPROCESSINGPOSTPROCESS !== EU.imageProcessingConfiguration.applyByPostProcess && pU.markAsMiscDirty(), pU.DITHER !== this.dithering && pU.markAsMiscDirty(), pU.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && pU.markAsMiscDirty(), pU.isDirty) {
            pU.markAsProcessed(), EU.resetCachedMaterial();
            const RU = new CU.c;
            pU.FOG && RU.addFallback(1, "FOG"), pU.IMAGEPROCESSINGPOSTPROCESS = EU.imageProcessingConfiguration.applyByPostProcess, pU.DITHER = this.dithering, pU.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const tU = [cU.e.PositionKind];
            pU.VERTEXCOLOR && tU.push(cU.e.ColorKind);
            const PU = "sky",
              TU = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, hU.c)(TU);
            const qU = pU.toString();
            gU.setEffect(EU.WC().createEffect(PU, {
              attributes: tU,
              uniformsNames: TU,
              uniformBuffersNames: [],
              samplers: [],
              defines: qU,
              fallbacks: RU,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: UU._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, EU.WC()), pU, this._materialContext)
          }
          return !(!gU.effect || !gU.effect.isReady()) && (pU._renderId = EU.getRenderId(), tU._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(UU, RU, gU) {
          const tU = this.aZ(),
            pU = gU.materialDefines;
          if (!pU) return;
          const EU = gU.effect;
          if (!EU) return;
          this._activeEffect = EU, this.bindOnlyWorldMatrix(UU), this._activeEffect.setMatrix("viewProjection", tU.getTransformMatrix()), this._mustRebind(tU, EU, gU) && ((0, hU.f)(EU, this, tU), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, QU.q)(pU, EU, tU)), tU.fogEnabled && RU.applyFog && tU.fogMode !== GU.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", tU.getViewMatrix()), (0, QU.g)(tU, RU, this._activeEffect, this.rawHdrOutput);
          const TU = tU.activeCamera;
          if (TU) {
            const UU = TU.getWorldMatrix();
            this._cameraPosition.x = UU.m[12], this._cameraPosition.y = UU.m[13], this._cameraPosition.z = UU.m[14], this._activeEffect.setVector3("cameraPosition", PU.TmpVectors.xC[0].PgU(this._cameraPosition).ptU(tU.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const UU = tU.WC()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", WU(UU?.texture?.type))
          }
          if (!this.useSunPosition) {
            const UU = Math.PI * (this.inclination - .5),
              RU = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(RU) * Math.cos(UU), this.sunPosition.y = this.distance * Math.sin(-UU), this.sunPosition.z = this.distance * Math.sin(RU) * Math.cos(UU), PU.Quaternion.FromUnitVectorsToRef(PU.xC.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(RU, this._activeEffect, gU)
        }
        getAnimatables() {
          return []
        }
        dispose(UU) {
          super.dispose(UU)
        }
        clone(RU) {
          return EU.b.Clone((() => new UU(RU, this.aZ())), this)
        }
        serialize() {
          const UU = super.serialize();
          return UU.customType = "BABYLON.SkyMaterial", UU
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(RU, gU, tU) {
          return EU.b.Parse((() => new UU(RU.name, gU)), RU, gU, tU)
        }
      }, (() => {
        const gU = "function" === typeof Symbol && Symbol.metadata ? Object.create(YU[Symbol.metadata] ?? null) : void 0;
        RU = [(0, pU.K)()], TU = [(0, pU.K)()], KU = [(0, pU.K)()], jU = [(0, pU.K)()], fU = [(0, pU.K)()], xU = [(0, pU.K)()], mU = [(0, pU.K)()], IU = [(0, pU.K)()], JU = [(0, pU.I)()], wU = [(0, pU.K)()], nU = [(0, pU.I)()], bU = [(0, pU.I)()], oU = [(0, pU.K)()], ZU = [(0, pU.K)()], aU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: UU => "luminance" in UU,
            get: UU => UU.luminance,
            set: (UU, RU) => {
              UU.luminance = RU
            }
          },
          metadata: gU
        }, BU, VU), (0, tU.i)(null, null, TU, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: UU => "turbidity" in UU,
            get: UU => UU.turbidity,
            set: (UU, RU) => {
              UU.turbidity = RU
            }
          },
          metadata: gU
        }, rU, XU), (0, tU.i)(null, null, KU, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: UU => "rayleigh" in UU,
            get: UU => UU.rayleigh,
            set: (UU, RU) => {
              UU.rayleigh = RU
            }
          },
          metadata: gU
        }, vU, dU), (0, tU.i)(null, null, jU, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: UU => "mieCoefficient" in UU,
            get: UU => UU.mieCoefficient,
            set: (UU, RU) => {
              UU.mieCoefficient = RU
            }
          },
          metadata: gU
        }, HU, SU), (0, tU.i)(null, null, fU, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: UU => "mieDirectionalG" in UU,
            get: UU => UU.mieDirectionalG,
            set: (UU, RU) => {
              UU.mieDirectionalG = RU
            }
          },
          metadata: gU
        }, sU, yU), (0, tU.i)(null, null, xU, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: UU => "distance" in UU,
            get: UU => UU.distance,
            set: (UU, RU) => {
              UU.distance = RU
            }
          },
          metadata: gU
        }, kU, FU), (0, tU.i)(null, null, mU, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: UU => "inclination" in UU,
            get: UU => UU.inclination,
            set: (UU, RU) => {
              UU.inclination = RU
            }
          },
          metadata: gU
        }, iU, AU), (0, tU.i)(null, null, IU, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: UU => "azimuth" in UU,
            get: UU => UU.azimuth,
            set: (UU, RU) => {
              UU.azimuth = RU
            }
          },
          metadata: gU
        }, zU, MU), (0, tU.i)(null, null, JU, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: UU => "sunPosition" in UU,
            get: UU => UU.sunPosition,
            set: (UU, RU) => {
              UU.sunPosition = RU
            }
          },
          metadata: gU
        }, DU, LU), (0, tU.i)(null, null, wU, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: UU => "useSunPosition" in UU,
            get: UU => UU.useSunPosition,
            set: (UU, RU) => {
              UU.useSunPosition = RU
            }
          },
          metadata: gU
        }, NU, lU), (0, tU.i)(null, null, nU, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: UU => "cameraOffset" in UU,
            get: UU => UU.cameraOffset,
            set: (UU, RU) => {
              UU.cameraOffset = RU
            }
          },
          metadata: gU
        }, OU, UR), (0, tU.i)(null, null, bU, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: UU => "up" in UU,
            get: UU => UU.up,
            set: (UU, RU) => {
              UU.up = RU
            }
          },
          metadata: gU
        }, RR, gR), (0, tU.i)(null, null, oU, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: UU => "dithering" in UU,
            get: UU => UU.dithering,
            set: (UU, RU) => {
              UU.dithering = RU
            }
          },
          metadata: gU
        }, tR, pR), (0, tU.i)(null, null, ZU, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: UU => "rawHdrOutput" in UU,
            get: UU => UU.rawHdrOutput,
            set: (UU, RU) => {
              UU.rawHdrOutput = RU
            }
          },
          metadata: gU
        }, ER, PR), (0, tU.i)(null, null, aU, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: UU => "cloudiness" in UU,
            get: UU => UU.cloudiness,
            set: (UU, RU) => {
              UU.cloudiness = RU
            }
          },
          metadata: gU
        }, TR, qR), gU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gU
        })
      })(), UU._ShaderLoader = new uU.c((() => [gU.e(320).then((() => gU(60589))), gU.e(313).then((() => gU(60598)))]), (() => [gU.e(337).then((() => gU(60604))), gU.e(331).then((() => gU(60611)))])), UU
    })();
    (0, jU.g)("BABYLON.SkyMaterial", fU)
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);