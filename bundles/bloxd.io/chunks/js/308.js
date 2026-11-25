export const id = 308;
export const ids = [308];
export const modules = {
  42051: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG
    });
    var wG = ZG(40484),
      SG = ZG(42057);
    class LG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = ZG, this.gwG = [], this._maxBlockCapacity = bG || 64, this._selectionContent = new wG.c(1024), this._creationFunc = GG
      }
      update(GG, bG, ZG) {
        SG.b._CreateBlocks(GG, bG, ZG, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      FwG(GG) {
        for (let bG = 0; bG < this.blocks.length; bG++) {
          this.blocks[bG].addEntry(GG)
        }
      }
      Rl(GG) {
        for (let bG = 0; bG < this.blocks.length; bG++) {
          this.blocks[bG].removeEntry(GG)
        }
      }
      select(GG, bG) {
        this._selectionContent.reset();
        for (let ZG = 0; ZG < this.blocks.length; ZG++) {
          this.blocks[ZG].select(GG, this._selectionContent, bG)
        }
        return bG ? this._selectionContent.concat(this.gwG) : this._selectionContent.concatWithNoDuplicate(this.gwG), this._selectionContent
      }
      intersects(GG, bG, ZG) {
        this._selectionContent.reset();
        for (let wG = 0; wG < this.blocks.length; wG++) {
          this.blocks[wG].intersects(GG, bG, this._selectionContent, ZG)
        }
        return ZG ? this._selectionContent.concat(this.gwG) : this._selectionContent.concatWithNoDuplicate(this.gwG), this._selectionContent
      }
      intersectsRay(GG) {
        this._selectionContent.reset();
        for (let bG = 0; bG < this.blocks.length; bG++) {
          this.blocks[bG].intersectsRay(GG, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.gwG), this._selectionContent
      }
    }
    LG.CreationFuncForMeshes = (GG, bG) => {
      const ZG = GG.HA();
      !GG.isBlocked && ZG.boundingBox.intersectsMinMax(bG.jwG, bG.lwG) && bG.entries.push(GG)
    }, LG.CreationFuncForSubMeshes = (GG, bG) => {
      GG.HA().boundingBox.intersectsMinMax(bG.jwG, bG.lwG) && bG.entries.push(GG)
    }
  },
  42057: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(37439),
      SG = ZG(40683);
    class LG {
      constructor(GG, bG, ZG, wG, SG, LG) {
        this.entries = [], this.ewG = new Array, this._capacity = ZG, this._depth = wG, this._maxDepth = SG, this._creationFunc = LG, this._minPoint = GG, this._maxPoint = bG, this.ewG.push(GG.clone()), this.ewG.push(bG.clone()), this.ewG.push(GG.clone()), this.ewG[2].x = bG.x, this.ewG.push(GG.clone()), this.ewG[3].y = bG.y, this.ewG.push(GG.clone()), this.ewG[4].z = bG.z, this.ewG.push(bG.clone()), this.ewG[5].z = GG.z, this.ewG.push(bG.clone()), this.ewG[6].x = GG.x, this.ewG.push(bG.clone()), this.ewG[7].y = GG.y
      }
      get rp() {
        return this._capacity
      }
      get jwG() {
        return this._minPoint
      }
      get lwG() {
        return this._maxPoint
      }
      addEntry(GG) {
        if (this.blocks)
          for (let bG = 0; bG < this.blocks.length; bG++) {
            this.blocks[bG].addEntry(GG)
          } else this._creationFunc(GG, this), this.entries.length > this.rp && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(GG) {
        if (this.blocks) {
          for (let bG = 0; bG < this.blocks.length; bG++) {
            this.blocks[bG].removeEntry(GG)
          }
          return
        }
        const bG = this.entries.indexOf(GG);
        bG > -1 && this.entries.splice(bG, 1)
      }
      addEntries(GG) {
        for (let bG = 0; bG < GG.length; bG++) {
          const ZG = GG[bG];
          this.addEntry(ZG)
        }
      }
      select(GG, bG, ZG) {
        if (SG.c.IsInFrustum(this.ewG, GG)) {
          if (this.blocks) {
            for (let wG = 0; wG < this.blocks.length; wG++) {
              this.blocks[wG].select(GG, bG, ZG)
            }
            return
          }
          ZG ? bG.concat(this.entries) : bG.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(GG, bG, ZG, wG) {
        if (SG.c.IntersectsSphere(this._minPoint, this._maxPoint, GG, bG)) {
          if (this.blocks) {
            for (let SG = 0; SG < this.blocks.length; SG++) {
              this.blocks[SG].intersects(GG, bG, ZG, wG)
            }
            return
          }
          wG ? ZG.concat(this.entries) : ZG.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(GG, bG) {
        if (GG.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let ZG = 0; ZG < this.blocks.length; ZG++) {
              this.blocks[ZG].intersectsRay(GG, bG)
            }
            return
          }
          bG.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        LG._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(GG, bG, ZG, SG, yG, kG, UG, YG) {
        UG.blocks = new Array;
        const VG = new wG.p((bG.x - GG.x) / 2, (bG.y - GG.y) / 2, (bG.z - GG.z) / 2);
        for (let wG = 0; wG < 2; wG++)
          for (let bG = 0; bG < 2; bG++)
            for (let pG = 0; pG < 2; pG++) {
              const fG = GG.add(VG.multiplyByFloats(wG, bG, pG)),
                QG = GG.add(VG.multiplyByFloats(wG + 1, bG + 1, pG + 1)),
                KG = new LG(fG, QG, SG, yG + 1, kG, YG);
              KG.addEntries(ZG), UG.blocks.push(KG)
            }
      }
    }
  },
  42059: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => VG
    });
    var wG = ZG(40475),
      SG = ZG(37439),
      LG = ZG(40811),
      yG = ZG(41999),
      kG = ZG(40548),
      UG = ZG(37463),
      YG = ZG(42051);
    class VG {
      constructor(GG) {
        this.name = kG.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new yG.D(SG.p.Zero(), new SG.p(1, 1, 1)), (GG = GG || UG.c.LastCreatedScene) && (this.Ah = GG, this.Ah.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Ah.getActiveSubMeshCandidates = GG => this.getActiveSubMeshCandidates(GG), this.Ah.getCollidingSubMeshCandidates = (GG, bG) => this.getCollidingSubMeshCandidates(GG, bG), this.Ah.getIntersectingSubMeshCandidates = (GG, bG) => this.getIntersectingSubMeshCandidates(GG, bG))
      }
      register() {
        this.Ah.onMeshRemovedObservable.add((GG => {
          const bG = this.Ah.selectionOctree;
          if (void 0 !== bG && null !== bG) {
            const ZG = bG.gwG.indexOf(GG); - 1 !== ZG && bG.gwG.splice(ZG, 1)
          }
        })), this.Ah.onMeshImportedObservable.add((GG => {
          const bG = this.Ah.selectionOctree;
          void 0 !== bG && null !== bG && bG.FwG(GG)
        }))
      }
      getActiveMeshCandidates() {
        return this.Ah.NwG?.select(this.Ah.frustumPlanes) || this.Ah._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(GG) {
        if (GG._submeshesOctree && GG.useOctreeForRenderingSelection) {
          return GG._submeshesOctree.select(this.Ah.frustumPlanes)
        }
        return this.Ah._getDefaultSubMeshCandidates(GG)
      }
      getIntersectingSubMeshCandidates(GG, bG) {
        if (GG._submeshesOctree && GG.useOctreeForPicking) {
          yG.D.TransformToRef(bG, GG.getWorldMatrix(), this._tempRay);
          return GG._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Ah._getDefaultSubMeshCandidates(GG)
      }
      getCollidingSubMeshCandidates(GG, bG) {
        if (GG._submeshesOctree && GG.useOctreeForCollisions) {
          const ZG = bG._velocityWorldLength + Math.max(bG._radius.x, bG._radius.y, bG._radius.z);
          return GG._submeshesOctree.intersects(bG._basePointWorld, ZG)
        }
        return this.Ah._getDefaultSubMeshCandidates(GG)
      }
      rebuild() {}
      dispose() {}
    }
    let pG = !1;
    pG || (pG = !0, wG.f.prototype.createOrUpdateSelectionOctree = function() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        ZG = this._getComponent(kG.b.NAME_OCTREE);
      ZG || (ZG = new VG(this), this.KwG(ZG)), this.NwG || (this.NwG = new YG.e(YG.e.CreationFuncForMeshes, GG, bG));
      const wG = this.getWorldExtends();
      return this.NwG.update(wG.min, wG.max, this.meshes), this.NwG
    }, Object.defineProperty(wG.f.prototype, "selectionOctree", {
      get: function() {
        return this.NwG
      },
      enumerable: !0,
      configurable: !0
    }), LG.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const ZG = this.Dv();
      let wG = ZG._getComponent(kG.b.NAME_OCTREE);
      wG || (wG = new VG(ZG), ZG.KwG(wG)), this._submeshesOctree || (this._submeshesOctree = new YG.e(YG.e.CreationFuncForSubMeshes, GG, bG)), this.computeWorldMatrix(!0);
      const SG = this.HA().boundingBox;
      return this._submeshesOctree.update(SG.minimumWorld, SG.maximumWorld, this.aE), this._submeshesOctree
    })
  },
  41999: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => iG,
      D: () => pG,
      d: () => FG,
      h: () => hG,
      j: () => KG,
      n: () => QG,
      r: () => mG,
      u: () => WG,
      x: () => uG,
      y: () => CG
    });
    var wG = ZG(37443),
      SG = ZG(37439),
      LG = ZG(37448),
      yG = ZG(40678),
      kG = ZG(40517),
      UG = ZG(37463),
      YG = ZG(40567);
    const VG = {
      internalPickerForMesh: void 0
    };
    class pG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wG.d;
        this.origin = GG, this.direction = bG, this.length = ZG, this.epsilon = SG
      }
      clone() {
        return new pG(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const wG = pG._TmpVector3[0].fGG(GG.x - ZG, GG.y - ZG, GG.z - ZG),
          SG = pG._TmpVector3[1].fGG(bG.x + ZG, bG.y + ZG, bG.z + ZG);
        let LG, yG, kG, UG, YG = 0,
          VG = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < wG.x || this.origin.x > SG.x) return !1
        } else if (LG = 1 / this.direction.x, yG = (wG.x - this.origin.x) * LG, kG = (SG.x - this.origin.x) * LG, kG === -1 / 0 && (kG = 1 / 0), yG > kG && (UG = yG, yG = kG, kG = UG), YG = Math.max(yG, YG), VG = Math.min(kG, VG), YG > VG) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < wG.y || this.origin.y > SG.y) return !1
        } else if (LG = 1 / this.direction.y, yG = (wG.y - this.origin.y) * LG, kG = (SG.y - this.origin.y) * LG, kG === -1 / 0 && (kG = 1 / 0), yG > kG && (UG = yG, yG = kG, kG = UG), YG = Math.max(yG, YG), VG = Math.min(kG, VG), YG > VG) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < wG.z || this.origin.z > SG.z) return !1
        } else if (LG = 1 / this.direction.z, yG = (wG.z - this.origin.z) * LG, kG = (SG.z - this.origin.z) * LG, kG === -1 / 0 && (kG = 1 / 0), yG > kG && (UG = yG, yG = kG, kG = UG), YG = Math.max(yG, YG), VG = Math.min(kG, VG), YG > VG) return !1;
        return !0
      }
      intersectsBox(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(GG.minimum, GG.maximum, bG)
      }
      intersectsSphere(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZG = GG.center.x - this.origin.x,
          wG = GG.center.y - this.origin.y,
          SG = GG.center.z - this.origin.z,
          LG = ZG * ZG + wG * wG + SG * SG,
          yG = GG.radius + bG,
          kG = yG * yG;
        if (LG <= kG) return !0;
        const UG = ZG * this.direction.x + wG * this.direction.y + SG * this.direction.z;
        if (UG < 0) return !1;
        return LG - UG * UG <= kG
      }
      intersectsTriangle(GG, bG, ZG) {
        const wG = pG._TmpVector3[0],
          LG = pG._TmpVector3[1],
          kG = pG._TmpVector3[2],
          UG = pG._TmpVector3[3],
          YG = pG._TmpVector3[4];
        bG.subtractToRef(GG, wG), ZG.subtractToRef(GG, LG), SG.p.CrossToRef(this.direction, LG, kG);
        const VG = SG.p.Dot(wG, kG);
        if (0 === VG) return null;
        const fG = 1 / VG;
        this.origin.subtractToRef(GG, UG);
        const QG = SG.p.Dot(UG, kG) * fG;
        if (QG < -this.epsilon || QG > 1 + this.epsilon) return null;
        SG.p.CrossToRef(UG, wG, YG);
        const KG = SG.p.Dot(this.direction, YG) * fG;
        if (KG < -this.epsilon || QG + KG > 1 + this.epsilon) return null;
        const hG = SG.p.Dot(LG, YG) * fG;
        return hG > this.length || hG < 0 ? null : new yG.b(1 - QG - KG, QG, hG)
      }
      intersectsPlane(GG) {
        let bG;
        const ZG = SG.p.Dot(GG.normal, this.direction);
        if (Math.abs(ZG) < 9.99999997475243e-7) return null;
        {
          const wG = SG.p.Dot(GG.normal, this.origin);
          return bG = (-GG.d - wG) / ZG, bG < 0 ? bG < -9.99999997475243e-7 ? null : 0 : bG
        }
      }
      intersectsAxis(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (GG) {
          case "y": {
            const GG = (this.origin.y - bG) / this.direction.y;
            return GG > 0 ? null : new SG.p(this.origin.x + this.direction.x * -GG, bG, this.origin.z + this.direction.z * -GG)
          }
          case "x": {
            const GG = (this.origin.x - bG) / this.direction.x;
            return GG > 0 ? null : new SG.p(bG, this.origin.y + this.direction.y * -GG, this.origin.z + this.direction.z * -GG)
          }
          case "z": {
            const GG = (this.origin.z - bG) / this.direction.z;
            return GG > 0 ? null : new SG.p(this.origin.x + this.direction.x * -GG, this.origin.y + this.direction.y * -GG, bG)
          }
          default:
            return null
        }
      }
      QSG(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          LG = arguments.length > 4 ? arguments[4] : void 0,
          yG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const kG = SG.j.Matrix[0];
        return GG.getWorldMatrix().invertToRef(kG), this._tmpRay ? pG.TransformToRef(this, kG, this._tmpRay) : this._tmpRay = pG.Transform(this, kG), GG.intersects(this._tmpRay, bG, ZG, wG, LG, yG)
      }
      intersectsMeshes(GG, bG, ZG) {
        ZG ? ZG.length = 0 : ZG = [];
        for (let wG = 0; wG < GG.length; wG++) {
          const SG = this.QSG(GG[wG], bG);
          SG.hit && ZG.push(SG)
        }
        return ZG.sort(this._comparePickingInfo), ZG
      }
      _comparePickingInfo(GG, bG) {
        return GG.distance < bG.distance ? -1 : GG.distance > bG.distance ? 1 : 0
      }
      intersectionSegment(GG, bG, ZG) {
        const wG = this.origin,
          LG = SG.j.mK[0],
          yG = SG.j.mK[1],
          kG = SG.j.mK[2],
          UG = SG.j.mK[3];
        bG.subtractToRef(GG, LG), this.direction.scaleToRef(pG._Rayl, kG), wG.addToRef(kG, yG), GG.subtractToRef(wG, UG);
        const YG = SG.p.Dot(LG, LG),
          VG = SG.p.Dot(LG, kG),
          fG = SG.p.Dot(kG, kG),
          QG = SG.p.Dot(LG, UG),
          KG = SG.p.Dot(kG, UG),
          hG = YG * fG - VG * VG;
        let dG, JG, rG = hG,
          zG = hG;
        hG < pG._Smallnum ? (dG = 0, rG = 1, JG = KG, zG = fG) : (dG = VG * KG - fG * QG, JG = YG * KG - VG * QG, dG < 0 ? (dG = 0, JG = KG, zG = fG) : dG > rG && (dG = rG, JG = KG + VG, zG = fG)), JG < 0 ? (JG = 0, -QG < 0 ? dG = 0 : -QG > YG ? dG = rG : (dG = -QG, rG = YG)) : JG > zG && (JG = zG, -QG + VG < 0 ? dG = 0 : -QG + VG > YG ? dG = rG : (dG = -QG + VG, rG = YG));
        const EG = Math.abs(dG) < pG._Smallnum ? 0 : dG / rG,
          oG = Math.abs(JG) < pG._Smallnum ? 0 : JG / zG,
          XG = SG.j.mK[4];
        kG.scaleToRef(oG, XG);
        const uG = SG.j.mK[5];
        LG.scaleToRef(EG, uG), uG.addInPlace(UG);
        const iG = SG.j.mK[6];
        uG.subtractToRef(XG, iG);
        return oG > 0 && oG <= this.length && iG.lengthSquared() < ZG * ZG ? uG.length() : -1
      }
      update(GG, bG, ZG, wG, LG, yG, kG) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          pG._RayDistant || (pG._RayDistant = pG.Zero()), pG._RayDistant.unprojectRayToRef(GG, bG, ZG, wG, SG.e.IdentityReadOnly, yG, kG);
          const UG = SG.j.Matrix[0];
          LG.invertToRef(UG), pG.TransformToRef(pG._RayDistant, UG, this)
        } else this.unprojectRayToRef(GG, bG, ZG, wG, LG, yG, kG);
        return this
      }
      static Zero() {
        return new pG(SG.p.Zero(), SG.p.Zero())
      }
      static CreateNew(GG, bG, ZG, wG, SG, LG, yG) {
        return pG.Zero().update(GG, bG, ZG, wG, SG, LG, yG)
      }
      static CreateNewFromTo(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SG.e.IdentityReadOnly;
        const wG = new pG(new SG.p(0, 0, 0), new SG.p(0, 0, 0));
        return pG.CreateFromToToRef(GG, bG, wG, ZG)
      }
      static CreateFromToToRef(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SG.e.IdentityReadOnly;
        ZG.origin.oW(GG);
        const LG = bG.subtractToRef(GG, ZG.direction),
          yG = Math.sqrt(LG.x * LG.x + LG.y * LG.y + LG.z * LG.z);
        return ZG.length = yG, ZG.direction.normalize(), pG.TransformToRef(ZG, wG, ZG)
      }
      static Transform(GG, bG) {
        const ZG = new pG(new SG.p(0, 0, 0), new SG.p(0, 0, 0));
        return pG.TransformToRef(GG, bG, ZG), ZG
      }
      static TransformToRef(GG, bG, ZG) {
        SG.p.TransformCoordinatesToRef(GG.origin, bG, ZG.origin), SG.p.TransformNormalToRef(GG.direction, bG, ZG.direction), ZG.length = GG.length, ZG.epsilon = GG.epsilon;
        const wG = ZG.direction,
          LG = wG.length();
        if (0 !== LG && 1 !== LG) {
          const GG = 1 / LG;
          wG.x *= GG, wG.y *= GG, wG.z *= GG, ZG.length *= LG
        }
        return ZG
      }
      unprojectRayToRef(GG, bG, ZG, wG, LG, yG, kG) {
        const YG = SG.j.Matrix[0];
        LG.multiplyToRef(yG, YG), YG.multiplyToRef(kG, YG), YG.invert();
        const VG = UG.c.LastCreatedEngine,
          pG = SG.j.mK[0];
        pG.x = GG / ZG * 2 - 1, pG.y = -(bG / wG * 2 - 1), pG.z = VG?.iwG ? 1 : VG?.isNDCHalfZRange ? 0 : -1;
        const fG = SG.j.mK[1].fGG(pG.x, pG.y, 1 - 1e-8),
          QG = SG.j.mK[2],
          KG = SG.j.mK[3];
        SG.p.TransformCoordinatesToRef(pG, YG, QG), SG.p.TransformCoordinatesToRef(fG, YG, KG), this.origin.oW(QG), KG.subtractToRef(QG, this.direction), this.direction.normalize()
      }
    }

    function fG(GG, bG, ZG, wG, SG) {
      let LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const yG = pG.Zero();
      return QG(GG, bG, ZG, wG, yG, SG, LG), yG
    }

    function QG(GG, bG, ZG, wG, LG, yG) {
      let kG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        UG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const YG = GG.CK();
      if (!yG && !(yG = GG.activeCamera) && !(yG = GG.cameraToUseForPointers)) return GG;
      const VG = yG.viewport,
        pG = YG.getRenderHeight(),
        {
          x: fG,
          y: QG,
          width: KG,
          height: hG
        } = VG.toGlobal(YG.getRenderWidth(), pG),
        dG = 1 / YG.getHardwareScalingLevel();
      return bG = bG * dG - fG, ZG = ZG * dG - (pG - QG - hG), LG.update(bG, ZG, KG, hG, wG || SG.e.IdentityReadOnly, kG ? SG.e.IdentityReadOnly : yG.getViewMatrix(), yG.getProjectionMatrix(), UG), GG
    }

    function KG(GG, bG, ZG, wG) {
      const SG = pG.Zero();
      return hG(GG, bG, ZG, SG, wG), SG
    }

    function hG(GG, bG, ZG, wG, LG) {
      if (!kG.c) return GG;
      const yG = GG.CK();
      if (!LG && !(LG = GG.activeCamera) && !(LG = GG.cameraToUseForPointers)) throw new Error("Active camera not set");
      const UG = LG.viewport,
        YG = yG.getRenderHeight(),
        {
          x: VG,
          y: pG,
          width: fG,
          height: QG
        } = UG.toGlobal(yG.getRenderWidth(), YG),
        KG = SG.e.Identity(),
        hG = 1 / yG.getHardwareScalingLevel();
      return bG = bG * hG - VG, ZG = ZG * hG - (YG - pG - QG), wG.update(bG, ZG, fG, QG, KG, KG, LG.getProjectionMatrix()), GG
    }

    function dG(GG, bG, ZG, wG, SG, LG, yG, kG) {
      return JG(GG, ZG, wG, bG(wG, ZG.enableDistantPicking), SG, LG, yG, kG)
    }

    function JG(GG, bG, ZG, wG, SG, LG, yG, kG) {
      const UG = bG.intersects(wG, SG, yG, LG, ZG, kG);
      return UG && UG.hit ? !SG && null != GG && UG.distance >= GG.distance ? null : UG : null
    }

    function rG(GG, bG) {
      return "InstancedLinesMesh" === GG || "LinesMesh" === GG ? bG.intersectionThreshold : 0
    }

    function zG(GG) {
      const bG = GG.getClassName();
      if ("GreasedLineMesh" === bG) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const ZG = GG.rawBoundingInfo;
      return {
        rawBoundingInfo: ZG,
        intersectionThreshold: ZG ? rG(bG, GG) : 0
      }
    }

    function EG(GG, bG, ZG, wG, SG) {
      const LG = GG(ZG, bG.enableDistantPicking);
      return LG.intersectsSphere(wG.xwG, SG) && LG.intersectsBox(wG.boundingBox, SG) ? LG : null
    }

    function oG(GG, bG, ZG, wG, LG, yG) {
      let UG = null;
      const YG = !!(GG.activeCameras && GG.activeCameras.length > 1 && GG.cameraToUseForPointers !== GG.activeCamera),
        pG = GG.cameraToUseForPointers || GG.activeCamera,
        fG = VG.internalPickerForMesh || dG,
        QG = fG === dG;
      for (let kG = 0; kG < GG.meshes.length; kG++) {
        const VG = GG.meshes[kG];
        if (ZG) {
          if (!ZG(VG, -1)) continue
        } else if (!VG.isEnabled() || !VG.isVisible || !VG.qh) continue;
        const KG = YG && VG.isWorldMatrixCameraDependent(),
          hG = VG.computeWorldMatrix(KG, pG);
        if (VG.hasThinInstances && VG.tbG) {
          const GG = fG(UG, bG, VG, hG, !0, !0, yG);
          if (GG) {
            if (LG) return GG;
            const {
              rawBoundingInfo: kG,
              intersectionThreshold: YG
            } = zG(VG), pG = VG._thinInstanceDataStorage.matrixData;
            if (pG) {
              const GG = SG.j.Matrix[0],
                KG = SG.j.Matrix[1],
                dG = Math.min(VG.B5, pG.length >> 4);
              for (let rG = 0; rG < dG; rG++) {
                if (ZG && !ZG(VG, rG)) continue;
                SG.e.FromArrayToRef(pG, rG << 4, GG), GG.multiplyToRef(hG, KG);
                const dG = QG && kG ? EG(bG, VG, KG, kG, YG) : null;
                if (QG && kG && !dG) continue;
                const zG = QG && dG ? JG(UG, VG, KG, dG, wG, LG, yG, !0) : fG(UG, bG, VG, KG, wG, LG, yG, !0);
                if (zG && (UG = zG, UG.thinInstanceIndex = rG, wG)) return UG
              }
            }
          }
        } else {
          const GG = fG(UG, bG, VG, hG, wG, LG, yG);
          if (GG && (UG = GG, wG)) return UG
        }
      }
      return UG || new kG.c
    }

    function XG(GG, bG, ZG, wG) {
      if (!kG.c) return null;
      const LG = [],
        yG = !!(GG.activeCameras && GG.activeCameras.length > 1 && GG.cameraToUseForPointers !== GG.activeCamera),
        UG = GG.cameraToUseForPointers || GG.activeCamera,
        YG = VG.internalPickerForMesh || dG,
        pG = YG === dG;
      for (let kG = 0; kG < GG.meshes.length; kG++) {
        const VG = GG.meshes[kG];
        if (ZG) {
          if (!ZG(VG, -1)) continue
        } else if (!VG.isEnabled() || !VG.isVisible || !VG.qh) continue;
        const fG = yG && VG.isWorldMatrixCameraDependent(),
          QG = VG.computeWorldMatrix(fG, UG);
        if (VG.hasThinInstances && VG.tbG) {
          if (YG(null, bG, VG, QG, !0, !0, wG)) {
            const {
              rawBoundingInfo: GG,
              intersectionThreshold: yG
            } = zG(VG), kG = VG._thinInstanceDataStorage.matrixData;
            if (kG) {
              const UG = SG.j.Matrix[0],
                fG = SG.j.Matrix[1],
                KG = Math.min(VG.B5, kG.length >> 4);
              for (let hG = 0; hG < KG; hG++) {
                if (ZG && !ZG(VG, hG)) continue;
                SG.e.FromArrayToRef(kG, hG << 4, UG), UG.multiplyToRef(QG, fG);
                const KG = pG && GG ? EG(bG, VG, fG, GG, yG) : null;
                if (pG && GG && !KG) continue;
                const dG = pG && KG ? JG(null, VG, fG, KG, !1, !1, wG, !0) : YG(null, bG, VG, fG, !1, !1, wG, !0);
                dG && (dG.thinInstanceIndex = hG, LG.push(dG))
              }
            }
          }
        } else {
          const GG = YG(null, bG, VG, QG, !1, !1, wG);
          GG && LG.push(GG)
        }
      }
      return LG
    }

    function uG(GG, bG, ZG, wG, LG, yG) {
      if (!kG.c) return null;
      const UG = oG(GG, (wG => (GG._tempPickingRay || (GG._tempPickingRay = pG.Zero()), QG(GG, bG, ZG, wG, GG._tempPickingRay, yG || null), GG._tempPickingRay)), wG, LG, !0);
      return UG && (UG.ray = fG(GG, bG, ZG, SG.e.Identity(), yG || null)), UG
    }

    function iG(GG, bG, ZG, wG, LG, yG, kG) {
      const UG = oG(GG, ((wG, SG) => (GG._tempPickingRay || (GG._tempPickingRay = pG.Zero()), QG(GG, bG, ZG, wG, GG._tempPickingRay, yG || null, !1, SG), GG._tempPickingRay)), wG, LG, !1, kG);
      return UG && (UG.ray = fG(GG, bG, ZG, SG.e.Identity(), yG || null)), UG
    }

    function CG(GG, bG, ZG, wG, LG) {
      const yG = oG(GG, (ZG => (GG._pickWithRayInverseMatrix || (GG._pickWithRayInverseMatrix = SG.e.Identity()), ZG.invertToRef(GG._pickWithRayInverseMatrix), GG._cachedRayForTransform || (GG._cachedRayForTransform = pG.Zero()), pG.TransformToRef(bG, GG._pickWithRayInverseMatrix, GG._cachedRayForTransform), GG._cachedRayForTransform)), ZG, wG, !1, LG);
      return yG && (yG.ray = bG), yG
    }

    function WG(GG, bG, ZG, wG, SG, LG) {
      return XG(GG, (wG => fG(GG, bG, ZG, wG, SG || null)), wG, LG)
    }

    function mG(GG, bG, ZG, wG) {
      return XG(GG, (ZG => (GG._pickWithRayInverseMatrix || (GG._pickWithRayInverseMatrix = SG.e.Identity()), ZG.invertToRef(GG._pickWithRayInverseMatrix), GG._cachedRayForTransform || (GG._cachedRayForTransform = pG.Zero()), pG.TransformToRef(bG, GG._pickWithRayInverseMatrix, GG._cachedRayForTransform), GG._cachedRayForTransform)), ZG, wG)
    }

    function IG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        wG = arguments.length > 3 ? arguments[3] : void 0,
        LG = arguments.length > 4 ? arguments[4] : void 0;
      wG || (wG = GG.getWorldMatrix()), bG.length = ZG, LG ? bG.origin.oW(LG) : bG.origin.oW(GG.position);
      const yG = SG.j.mK[2];
      yG.set(0, 0, GG._scene.useRightHandedSystem ? -1 : 1);
      const kG = SG.j.mK[3];
      return SG.p.TransformNormalToRef(yG, wG, kG), SG.p.NormalizeToRef(kG, bG.direction), bG
    }

    function FG(GG, bG) {
      bG && (bG.prototype.getForwardRay = function() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        return IG(this, new pG(SG.p.Zero(), SG.p.Zero(), GG), GG, bG, ZG)
      }, bG.prototype.getForwardRayToRef = function(GG) {
        return IG(this, GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), GG && (YG.e._IsPickingAvailable = !0, GG.prototype.createPickingRay = function(GG, bG, ZG, wG) {
        return fG(this, GG, bG, ZG, wG, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    pG._TmpVector3 = (0, LG.d)(6, SG.p.Zero), pG._RayDistant = pG.Zero(), pG._Smallnum = 1e-8, pG._Rayl = 1e9
  },
  41995: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG.D
    });
    var wG = ZG(40475),
      SG = ZG(40592),
      LG = ZG(41999);
    let yG = !1;
    yG || (yG = !0, (0, LG.d)(wG.f, SG.d), wG.f.prototype.createPickingRayToRef = function(GG, bG, ZG, wG, SG) {
      let yG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        kG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, LG.n)(this, GG, bG, ZG, wG, SG, yG, kG)
    }, wG.f.prototype.createPickingRayInCameraSpace = function(GG, bG, ZG) {
      return (0, LG.j)(this, GG, bG, ZG)
    }, wG.f.prototype.createPickingRayInCameraSpaceToRef = function(GG, bG, ZG, wG) {
      return (0, LG.h)(this, GG, bG, ZG, wG)
    }, wG.f.prototype.pickWithBoundingInfo = function(GG, bG, ZG, wG, SG) {
      return (0, LG.x)(this, GG, bG, ZG, wG, SG)
    }, wG.f.prototype.Df = function(GG, bG, ZG, wG, SG, yG) {
      let kG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, LG.A)(this, GG, bG, ZG, wG, SG, yG, kG)
    }, wG.f.prototype.pickWithRay = function(GG, bG, ZG, wG) {
      return (0, LG.y)(this, GG, bG, ZG, wG)
    }, wG.f.prototype.multiPick = function(GG, bG, ZG, wG, SG) {
      return (0, LG.u)(this, GG, bG, ZG, wG, SG)
    }, wG.f.prototype.multiPickWithRay = function(GG, bG, ZG) {
      return (0, LG.r)(this, GG, bG, ZG)
    })
  },
  42002: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => VG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(37439),
      yG = ZG(40635),
      kG = ZG(42009),
      UG = ZG(40599),
      YG = ZG(37484);
    let VG = (() => {
        var GG;
        let bG, ZG, UG, YG, VG, pG, fG, QG, KG = kG.b,
          hG = [],
          dG = [],
          JG = [],
          rG = [],
          zG = [],
          EG = [],
          oG = [],
          XG = [],
          uG = [],
          iG = [],
          CG = [],
          WG = [],
          mG = [];
        return GG = class extends KG {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(GG) {
            this._shadowFrustumSize = GG, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(GG) {
            this._shadowOrthoScale = GG, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(GG) {
            this._orthoLeft = GG
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(GG) {
            this._orthoRight = GG
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(GG) {
            this._orthoTop = GG
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(GG) {
            this._orthoBottom = GG
          }
          constructor(GG, bG, ZG, SG) {
            super(GG, ZG, SG), this._shadowFrustumSize = ((0, wG.n)(this, hG), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, wG.n)(this, dG, !0), this.autoCalcShadowZBounds = ((0, wG.n)(this, JG), (0, wG.n)(this, rG, !1)), this._orthoLeft = ((0, wG.n)(this, zG), (0, wG.n)(this, EG, Number.MAX_VALUE)), this._orthoRight = ((0, wG.n)(this, oG), (0, wG.n)(this, XG, Number.MIN_VALUE)), this._orthoTop = ((0, wG.n)(this, uG), (0, wG.n)(this, iG, Number.MIN_VALUE)), this._orthoBottom = ((0, wG.n)(this, CG), (0, wG.n)(this, WG, Number.MAX_VALUE)), (0, wG.n)(this, mG), this.position = bG.scale(-1), this.direction = bG
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return yG.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(GG, bG, ZG) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(GG) : this._setDefaultAutoExtendShadowProjectionMatrix(GG, bG, ZG)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(GG) {
            const bG = this.Dv().activeCamera;
            LG.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : bG ? bG.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : bG ? bG.maxZ : 1e4, GG, this.Dv().CK().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(GG, bG, ZG) {
            const wG = this.Dv().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const GG = LG.p.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let wG = Number.MAX_VALUE,
                SG = -Number.MAX_VALUE;
              for (let yG = 0; yG < ZG.length; yG++) {
                const kG = ZG[yG];
                if (!kG) continue;
                const UG = kG.HA().boundingBox;
                for (let ZG = 0; ZG < UG.vectorsWorld.length; ZG++) LG.p.TransformCoordinatesToRef(UG.vectorsWorld[ZG], bG, GG), GG.x < this._orthoLeft && (this._orthoLeft = GG.x), GG.y < this._orthoBottom && (this._orthoBottom = GG.y), GG.x > this._orthoRight && (this._orthoRight = GG.x), GG.y > this._orthoTop && (this._orthoTop = GG.y), this.autoCalcShadowZBounds && (GG.z < wG && (wG = GG.z), GG.z > SG && (SG = GG.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = wG, this._shadowMaxZ = SG)
            }
            const SG = this._orthoRight - this._orthoLeft,
              yG = this._orthoTop - this._orthoBottom,
              kG = void 0 !== this.shadowMinZ ? this.shadowMinZ : wG?.minZ || 0,
              UG = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : wG?.maxZ || 1e4,
              YG = this.Dv().CK().iwG;
            LG.e.OrthoOffCenterLHToRef(this._orthoLeft - SG * this.shadowOrthoScale, this._orthoRight + SG * this.shadowOrthoScale, this._orthoBottom - yG * this.shadowOrthoScale, this._orthoTop + yG * this.shadowOrthoScale, YG ? UG : kG, YG ? kG : UG, GG, this.Dv().CK().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(GG, bG) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, bG), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, bG), this)
          }
          transferToNodeMaterialEffect(GG, bG) {
            return this.computeTransformedInformation() ? (GG.setFloat3(bG, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (GG.setFloat3(bG, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(GG) {
            const bG = this._scene.CK();
            return !bG.iwG && bG.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(GG) {
            const bG = this._scene.CK();
            return bG.iwG && bG.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(GG, bG) {
            GG["DIRLIGHT" + bG] = !0
          }
        }, (() => {
          const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(KG[Symbol.metadata] ?? null) : void 0;
          bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], UG = [(0, SG.Q)()], YG = [(0, SG.Q)()], VG = [(0, SG.Q)("orthoLeft")], pG = [(0, SG.Q)("orthoRight")], fG = [(0, SG.Q)("orthoTop")], QG = [(0, SG.Q)("orthoBottom")], (0, wG.k)(GG, null, bG, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: GG => "shadowFrustumSize" in GG,
              get: GG => GG.shadowFrustumSize
            },
            metadata: LG
          }, null, hG), (0, wG.k)(GG, null, ZG, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: GG => "shadowOrthoScale" in GG,
              get: GG => GG.shadowOrthoScale
            },
            metadata: LG
          }, null, hG), (0, wG.k)(null, null, UG, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: GG => "autoUpdateExtends" in GG,
              get: GG => GG.autoUpdateExtends,
              set: (GG, bG) => {
                GG.autoUpdateExtends = bG
              }
            },
            metadata: LG
          }, dG, JG), (0, wG.k)(null, null, YG, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: GG => "autoCalcShadowZBounds" in GG,
              get: GG => GG.autoCalcShadowZBounds,
              set: (GG, bG) => {
                GG.autoCalcShadowZBounds = bG
              }
            },
            metadata: LG
          }, rG, zG), (0, wG.k)(null, null, VG, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: GG => "_orthoLeft" in GG,
              get: GG => GG._orthoLeft,
              set: (GG, bG) => {
                GG._orthoLeft = bG
              }
            },
            metadata: LG
          }, EG, oG), (0, wG.k)(null, null, pG, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: GG => "_orthoRight" in GG,
              get: GG => GG._orthoRight,
              set: (GG, bG) => {
                GG._orthoRight = bG
              }
            },
            metadata: LG
          }, XG, uG), (0, wG.k)(null, null, fG, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: GG => "_orthoTop" in GG,
              get: GG => GG._orthoTop,
              set: (GG, bG) => {
                GG._orthoTop = bG
              }
            },
            metadata: LG
          }, iG, CG), (0, wG.k)(null, null, QG, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: GG => "_orthoBottom" in GG,
              get: GG => GG._orthoBottom,
              set: (GG, bG) => {
                GG._orthoBottom = bG
              }
            },
            metadata: LG
          }, WG, mG), LG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LG
          })
        })(), GG
      })(),
      pG = !1;
    pG || (pG = !0, UG.e.AddNodeConstructor("Light_Type_1", ((GG, bG) => () => new VG(GG, LG.p.Zero(), bG))), (0, YG.i)("BABYLON.DirectionalLight", VG))
  },
  42016: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => Tb
    });
    var wG = ZG(39116),
      SG = ZG(37465),
      LG = ZG(37439),
      yG = ZG(40524),
      kG = ZG(42025),
      UG = ZG(37463),
      YG = ZG(40658),
      VG = ZG(37621),
      pG = ZG(39119),
      fG = ZG(39086),
      QG = ZG(37471);
    class KG {
      constructor() {
        this.direction1 = new LG.p(0, 1, 0), this.direction2 = new LG.p(0, 1, 0)
      }
      startDirectionFunction(GG, bG, ZG, wG) {
        const SG = (0, QG.RandomRange)(this.direction1.x, this.direction2.x),
          yG = (0, QG.RandomRange)(this.direction1.y, this.direction2.y),
          kG = (0, QG.RandomRange)(this.direction1.z, this.direction2.z);
        wG ? bG.fGG(SG, yG, kG) : LG.p.TransformNormalFromFloatsToRef(SG, yG, kG, GG, bG)
      }
      startPositionFunction(GG, bG, ZG, wG) {
        wG ? bG.fGG(0, 0, 0) : LG.p.TransformCoordinatesFromFloatsToRef(0, 0, 0, GG, bG)
      }
      clone() {
        const GG = new KG;
        return fG.e.DeepCopy(this, GG), GG
      }
      applyToShader(GG) {
        GG.setVector3("direction1", this.direction1), GG.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(GG) {
        GG.addUniform("direction1", 3), GG.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const GG = {};
        return GG.type = this.getClassName(), GG.direction1 = this.direction1.mwG(), GG.direction2 = this.direction2.mwG(), GG
      }
      parse(GG) {
        LG.p.FromArrayToRef(GG.direction1, 0, this.direction1), LG.p.FromArrayToRef(GG.direction2, 0, this.direction2)
      }
    }
    class hG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = GG, this.radiusRange = bG, this.directionRandomizer = ZG
      }
      startDirectionFunction(GG, bG, ZG, wG) {
        const SG = ZG.position.subtract(GG.getTranslation()).normalize(),
          yG = (0, QG.RandomRange)(0, this.directionRandomizer),
          kG = (0, QG.RandomRange)(0, this.directionRandomizer),
          UG = (0, QG.RandomRange)(0, this.directionRandomizer);
        SG.x += yG, SG.y += kG, SG.z += UG, SG.normalize(), wG ? bG.oW(SG) : LG.p.TransformNormalFromFloatsToRef(SG.x, SG.y, SG.z, GG, bG)
      }
      startPositionFunction(GG, bG, ZG, wG) {
        const SG = this.radius - (0, QG.RandomRange)(0, this.radius * this.radiusRange),
          yG = (0, QG.RandomRange)(0, 1),
          kG = (0, QG.RandomRange)(0, 2 * Math.PI),
          UG = Math.acos(2 * yG - 1),
          YG = SG * Math.cos(kG) * Math.sin(UG),
          VG = SG * Math.cos(UG),
          pG = SG * Math.sin(kG) * Math.sin(UG);
        wG ? bG.fGG(YG, Math.abs(VG), pG) : LG.p.TransformCoordinatesFromFloatsToRef(YG, Math.abs(VG), pG, GG, bG)
      }
      clone() {
        const GG = new hG(this.radius, this.directionRandomizer);
        return fG.e.DeepCopy(this, GG), GG
      }
      applyToShader(GG) {
        GG.setFloat("radius", this.radius), GG.setFloat("radiusRange", this.radiusRange), GG.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(GG) {
        GG.addUniform("radius", 1), GG.addUniform("radiusRange", 1), GG.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const GG = {};
        return GG.type = this.getClassName(), GG.radius = this.radius, GG.radiusRange = this.radiusRange, GG.directionRandomizer = this.directionRandomizer, GG
      }
      parse(GG) {
        this.radius = GG.radius, this.radiusRange = GG.radiusRange, this.directionRandomizer = GG.directionRandomizer
      }
    }
    class dG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = GG, this.radiusRange = bG, this.directionRandomizer = ZG
      }
      startDirectionFunction(GG, bG, ZG, wG) {
        const SG = ZG.position.subtract(GG.getTranslation()).normalize(),
          yG = (0, QG.RandomRange)(0, this.directionRandomizer),
          kG = (0, QG.RandomRange)(0, this.directionRandomizer),
          UG = (0, QG.RandomRange)(0, this.directionRandomizer);
        SG.x += yG, SG.y += kG, SG.z += UG, SG.normalize(), wG ? bG.oW(SG) : LG.p.TransformNormalFromFloatsToRef(SG.x, SG.y, SG.z, GG, bG)
      }
      startPositionFunction(GG, bG, ZG, wG) {
        const SG = this.radius - (0, QG.RandomRange)(0, this.radius * this.radiusRange),
          yG = (0, QG.RandomRange)(0, 1),
          kG = (0, QG.RandomRange)(0, 2 * Math.PI),
          UG = Math.acos(2 * yG - 1),
          YG = SG * Math.cos(kG) * Math.sin(UG),
          VG = SG * Math.cos(UG),
          pG = SG * Math.sin(kG) * Math.sin(UG);
        wG ? bG.fGG(YG, VG, pG) : LG.p.TransformCoordinatesFromFloatsToRef(YG, VG, pG, GG, bG)
      }
      clone() {
        const GG = new dG(this.radius, this.directionRandomizer);
        return fG.e.DeepCopy(this, GG), GG
      }
      applyToShader(GG) {
        GG.setFloat("radius", this.radius), GG.setFloat("radiusRange", this.radiusRange), GG.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(GG) {
        GG.addUniform("radius", 1), GG.addUniform("radiusRange", 1), GG.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const GG = {};
        return GG.type = this.getClassName(), GG.radius = this.radius, GG.radiusRange = this.radiusRange, GG.directionRandomizer = this.directionRandomizer, GG
      }
      parse(GG) {
        this.radius = GG.radius, this.radiusRange = GG.radiusRange, this.directionRandomizer = GG.directionRandomizer
      }
    }
    class JG extends dG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new LG.p(0, 1, 0),
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new LG.p(0, 1, 0);
        super(GG), this.direction1 = bG, this.direction2 = ZG
      }
      startDirectionFunction(GG, bG, ZG, wG) {
        const SG = (0, QG.RandomRange)(this.direction1.x, this.direction2.x),
          yG = (0, QG.RandomRange)(this.direction1.y, this.direction2.y),
          kG = (0, QG.RandomRange)(this.direction1.z, this.direction2.z);
        wG ? bG.fGG(SG, yG, kG) : LG.p.TransformNormalFromFloatsToRef(SG, yG, kG, GG, bG)
      }
      clone() {
        const GG = new JG(this.radius, this.direction1, this.direction2);
        return fG.e.DeepCopy(this, GG), GG
      }
      applyToShader(GG) {
        GG.setFloat("radius", this.radius), GG.setFloat("radiusRange", this.radiusRange), GG.setVector3("direction1", this.direction1), GG.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(GG) {
        GG.addUniform("radius", 1), GG.addUniform("radiusRange", 1), GG.addUniform("direction1", 3), GG.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const GG = super.serialize();
        return GG.direction1 = this.direction1.mwG(), GG.direction2 = this.direction2.mwG(), GG
      }
      parse(GG) {
        super.parse(GG), LG.p.FromArrayToRef(GG.direction1, 0, this.direction1), LG.p.FromArrayToRef(GG.direction2, 0, this.direction2)
      }
    }
    var rG = ZG(39083);
    class zG {
      get radius() {
        return this._radius
      }
      set radius(GG) {
        this._radius = GG, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(GG) {
        this._angle = GG, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = ZG, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = bG, this.radius = GG
      }
      startDirectionFunction(GG, bG, ZG, wG) {
        const SG = ZG.position.subtract(GG.getTranslation()).normalize(),
          yG = (0, QG.RandomRange)(0, this.directionRandomizer),
          kG = (0, QG.RandomRange)(0, this.directionRandomizer),
          UG = (0, QG.RandomRange)(0, this.directionRandomizer);
        SG.x += yG, SG.y += kG, SG.z += UG, SG.normalize(), wG ? bG.oW(SG) : LG.p.TransformNormalFromFloatsToRef(SG.x, SG.y, SG.z, GG, bG)
      }
      startPositionFunction(GG, bG, ZG, wG) {
        const SG = (0, QG.RandomRange)(0, 2 * Math.PI);
        let yG;
        this.emitFromSpawnPointOnly ? yG = 1e-4 : (yG = (0, QG.RandomRange)(0, this.heightRange), yG = 1 - yG * yG);
        let kG = this._radius - (0, QG.RandomRange)(0, this._radius * this.radiusRange);
        kG *= yG;
        const UG = kG * Math.sin(SG),
          YG = kG * Math.cos(SG),
          VG = yG * this._height;
        if (wG) return bG.x = UG, bG.y = VG, void(bG.z = YG);
        LG.p.TransformCoordinatesFromFloatsToRef(UG, VG, YG, GG, bG)
      }
      clone() {
        const GG = new zG(this._radius, this._angle, this.directionRandomizer);
        return fG.e.DeepCopy(this, GG), GG
      }
      applyToShader(GG) {
        GG.setFloat2("radius", this._radius, this.radiusRange), GG.setFloat("coneAngle", this._angle), GG.setFloat2("height", this._height, this.heightRange), GG.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(GG) {
        GG.addUniform("radius", 2), GG.addUniform("coneAngle", 1), GG.addUniform("height", 2), GG.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let GG = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (GG += "\n#define CONEEMITTERSPAWNPOINT"), GG
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const GG = {};
        return GG.type = this.getClassName(), GG.radius = this._radius, GG.angle = this._angle, GG.directionRandomizer = this.directionRandomizer, GG.radiusRange = this.radiusRange, GG.heightRange = this.heightRange, GG.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, GG
      }
      parse(GG) {
        this.radius = GG.radius, this.angle = GG.angle, this.directionRandomizer = GG.directionRandomizer, this.radiusRange = void 0 !== GG.radiusRange ? GG.radiusRange : 1, this.heightRange = void 0 !== GG.heightRange ? GG.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== GG.emitFromSpawnPointOnly && GG.emitFromSpawnPointOnly
      }
    }
    class EG extends zG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new LG.p(0, 1, 0),
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LG.p(0, 1, 0);
        super(GG, bG), this.direction1 = ZG, this.direction2 = wG
      }
      startDirectionFunction(GG, bG, ZG, wG) {
        const SG = (0, QG.RandomRange)(this.direction1.x, this.direction2.x),
          yG = (0, QG.RandomRange)(this.direction1.y, this.direction2.y),
          kG = (0, QG.RandomRange)(this.direction1.z, this.direction2.z);
        wG ? bG.fGG(SG, yG, kG) : LG.p.TransformNormalFromFloatsToRef(SG, yG, kG, GG, bG)
      }
      clone() {
        const GG = new EG(this.radius, this.angle, this.direction1, this.direction2);
        return fG.e.DeepCopy(this, GG), GG
      }
      applyToShader(GG) {
        super.applyToShader(GG), GG.setVector3("direction1", this.direction1), GG.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(GG) {
        super.buildUniformLayout(GG), GG.addUniform("direction1", 3), GG.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const GG = super.serialize();
        return GG.direction1 = this.direction1.mwG(), GG.direction2 = this.direction2.mwG(), GG
      }
      parse(GG) {
        super.parse(GG), LG.p.FromArrayToRef(GG.direction1, 0, this.direction1), LG.p.FromArrayToRef(GG.direction2, 0, this.direction2)
      }
    }
    class oG {
      get mesh() {
        return this._mesh
      }
      set mesh(GG) {
        this._mesh !== GG && (this._mesh = GG, GG ? (this._indices = GG.IwG(), this._positions = GG.getVerticesData(yG.l.PositionKind), this._normals = GG.getVerticesData(yG.l.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = LG.p.Zero(), this._mesh = null, this.direction1 = new LG.p(0, 1, 0), this.direction2 = new LG.p(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = GG
      }
      startDirectionFunction(GG, bG, ZG, wG) {
        if (this.useMeshNormalsForDirection && this._normals) return void LG.p.TransformNormalToRef(this._storedNormal, GG, bG);
        const SG = (0, QG.RandomRange)(this.direction1.x, this.direction2.x),
          yG = (0, QG.RandomRange)(this.direction1.y, this.direction2.y),
          kG = (0, QG.RandomRange)(this.direction1.z, this.direction2.z);
        wG ? bG.fGG(SG, yG, kG) : LG.p.TransformNormalFromFloatsToRef(SG, yG, kG, GG, bG)
      }
      startPositionFunction(GG, bG, ZG, wG) {
        if (!this._indices || !this._positions) return;
        const SG = 3 * (Math.random() * (this._indices.length / 3) | 0),
          yG = Math.random(),
          kG = Math.random() * (1 - yG),
          UG = 1 - yG - kG,
          YG = this._indices[SG],
          VG = this._indices[SG + 1],
          pG = this._indices[SG + 2],
          fG = LG.j.mK[0],
          QG = LG.j.mK[1],
          KG = LG.j.mK[2],
          hG = LG.j.mK[3];
        LG.p.FromArrayToRef(this._positions, 3 * YG, fG), LG.p.FromArrayToRef(this._positions, 3 * VG, QG), LG.p.FromArrayToRef(this._positions, 3 * pG, KG), hG.x = yG * fG.x + kG * QG.x + UG * KG.x, hG.y = yG * fG.y + kG * QG.y + UG * KG.y, hG.z = yG * fG.z + kG * QG.z + UG * KG.z, wG ? bG.fGG(hG.x, hG.y, hG.z) : LG.p.TransformCoordinatesFromFloatsToRef(hG.x, hG.y, hG.z, GG, bG), this.useMeshNormalsForDirection && this._normals && (LG.p.FromArrayToRef(this._normals, 3 * YG, fG), LG.p.FromArrayToRef(this._normals, 3 * VG, QG), LG.p.FromArrayToRef(this._normals, 3 * pG, KG), this._storedNormal.x = yG * fG.x + kG * QG.x + UG * KG.x, this._storedNormal.y = yG * fG.y + kG * QG.y + UG * KG.y, this._storedNormal.z = yG * fG.z + kG * QG.z + UG * KG.z)
      }
      clone() {
        const GG = new oG(this.mesh);
        return fG.e.DeepCopy(this, GG), GG
      }
      applyToShader(GG) {
        GG.setVector3("direction1", this.direction1), GG.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(GG) {
        GG.addUniform("direction1", 3), GG.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const GG = {};
        return GG.type = this.getClassName(), GG.direction1 = this.direction1.mwG(), GG.direction2 = this.direction2.mwG(), GG.meshId = this.mesh?.id, GG.useMeshNormalsForDirection = this.useMeshNormalsForDirection, GG
      }
      parse(GG, bG) {
        LG.p.FromArrayToRef(GG.direction1, 0, this.direction1), LG.p.FromArrayToRef(GG.direction2, 0, this.direction2), GG.meshId && bG && (this.mesh = bG.getLastMeshById(GG.meshId)), this.useMeshNormalsForDirection = GG.useMeshNormalsForDirection
      }
    }
    class XG {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(GG) {
        this._targetStopDuration !== GG && (this._targetStopDuration = GG)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(GG) {
        this._noiseTexture !== GG && (this._noiseTexture = GG, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(GG) {
        this._attractors.push(GG)
      }
      removeAttractor(GG) {
        const bG = this._attractors.indexOf(GG); - 1 !== bG && this._attractors.splice(bG, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(GG) {
        this._animationSheetEnabled !== GG && (this._animationSheetEnabled = GG)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(GG) {
        this._isAnimationSheetEnabled != GG && (this._isAnimationSheetEnabled = GG, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(GG) {
        this._useLogarithmicDepth = GG && this.Dv().CK().getCaps().fragmentDepthSupported
      }
      Dv() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(GG) {
        switch (GG) {
          case XG.BLENDMODE_MULTIPLYADD:
            return;
          case XG.BLENDMODE_ADD:
            GG = 1;
            break;
          case XG.BLENDMODE_ONEONE:
            GG = 6;
            break;
          case XG.BLENDMODE_STANDARD:
            GG = 2;
            break;
          case XG.BLENDMODE_MULTIPLY:
            GG = 4;
            break;
          case XG.BLENDMODE_SUBTRACT:
            GG = 3
        }
        this._engine.setAlphaMode(GG)
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
      addEmitRateGradient(GG, bG, ZG) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, GG, bG, ZG), this
      }
      removeEmitRateGradient(GG) {
        return this._removeFactorGradient(this._emitRateGradients, GG), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : LG.p.Zero()
      }
      set direction1(GG) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = GG)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : LG.p.Zero()
      }
      set direction2(GG) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = GG)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : LG.p.Zero()
      }
      set minEmitBox(GG) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = GG)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : LG.p.Zero()
      }
      set maxEmitBox(GG) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = GG)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(GG) {
        this._billboardMode !== GG && (this._billboardMode = GG, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(GG) {
        this._isBillboardBased !== GG && (this._isBillboardBased = GG, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(GG) {
        this._attachImageProcessingConfiguration(GG)
      }
      _attachImageProcessingConfiguration(GG) {
        GG !== this._imageProcessingConfiguration && (!GG && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = GG)
      }
      _reset() {}
      _addFactorGradient(GG, bG, ZG, SG) {
        const LG = new wG.i(bG, ZG, SG);
        GG.push(LG), GG.sort(((GG, bG) => GG.gradient < bG.gradient ? -1 : GG.gradient > bG.gradient ? 1 : 0))
      }
      _removeFactorGradient(GG, bG) {
        if (!GG) return;
        let ZG = 0;
        for (const wG of GG) {
          if (wG.gradient === bG) {
            GG.splice(ZG, 1);
            break
          }
          ZG++
        }
      }
      _removeGradientAndTexture(GG, bG, ZG) {
        if (!bG) return this;
        let wG = 0;
        for (const SG of bG) {
          if (SG.gradient === GG) {
            bG.splice(wG, 1);
            break
          }
          wG++
        }
        return ZG && ZG.dispose(), this
      }
      constructor(GG) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = LG.p.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new LG.p(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = XG.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new LG.m(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new LG.p(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = LG.p.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new VG.d(1, 1, 1, 1), this.color2 = new VG.d(1, 1, 1, 1), this.colorDead = new VG.d(0, 0, 0, 1), this.textureMask = new VG.d(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new YG.c, this.id = GG, this.name = GG
      }
      createPointEmitter(GG, bG) {
        const ZG = function(GG, bG) {
          const ZG = new KG;
          return ZG.direction1 = GG, ZG.direction2 = bG, ZG
        }(GG, bG);
        return this.particleEmitterType = ZG, ZG
      }
      createHemisphericEmitter() {
        const GG = function() {
          return new hG(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = GG, GG
      }
      createSphereEmitter() {
        const GG = function() {
          return new dG(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = GG, GG
      }
      createDirectedSphereEmitter() {
        const GG = function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new LG.p(0, 1, 0),
            ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new LG.p(0, 1, 0);
          return new JG(GG, bG, ZG)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new LG.p(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new LG.p(0, 1, 0));
        return this.particleEmitterType = GG, GG
      }
      createCylinderEmitter() {
        const GG = function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new rG.f(GG, bG, ZG, wG)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = GG, GG
      }
      createDirectedCylinderEmitter() {
        const GG = function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LG.p(0, 1, 0),
            SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new LG.p(0, 1, 0);
          return new rG.d(GG, bG, ZG, wG, SG)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LG.p(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new LG.p(0, 1, 0));
        return this.particleEmitterType = GG, GG
      }
      createConeEmitter() {
        const GG = function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new zG(GG, bG)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = GG, GG
      }
      createDirectedConeEmitter() {
        const GG = function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new LG.p(0, 1, 0),
            wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LG.p(0, 1, 0);
          return new EG(GG, bG, ZG, wG)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new LG.p(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LG.p(0, 1, 0));
        return this.particleEmitterType = GG, GG
      }
      createBoxEmitter(GG, bG, ZG, wG) {
        const SG = new pG.c;
        return this.particleEmitterType = SG, this.direction1 = GG, this.direction2 = bG, this.minEmitBox = ZG, this.maxEmitBox = wG, SG
      }
      createMeshEmitter() {
        const GG = function() {
          return new oG(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = GG, GG
      }
    }
    XG.BLENDMODE_ONEONE = 0, XG.BLENDMODE_STANDARD = 1, XG.BLENDMODE_ADD = 2, XG.BLENDMODE_MULTIPLY = 3, XG.BLENDMODE_MULTIPLYADD = 4, XG.BLENDMODE_SUBTRACT = -1;
    class uG {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new VG.d(0, 0, 0, 0), this.currentColor2 = new VG.d(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = LG.p.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class iG {
      constructor(GG) {
        this.particleSystem = GG, this.position = LG.p.Zero(), this.direction = LG.p.Zero(), this.color = new VG.d(0, 0, 0, 0), this.colorStep = new VG.d(0, 0, 0, 0), this.initialColor = new VG.d(0, 0, 0, 0), this.colorDead = new VG.d(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new LG.m(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new uG, this.id = iG._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let GG = this.age,
          bG = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === bG ? (bG = 1, GG = this._properties.randomCellOffset) : GG += this._properties.randomCellOffset);
        const ZG = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let wG;
        wG = this._properties.initialSpriteCellLoop ? (0, QG.Clamp)(GG * bG % this.lifeTime / this.lifeTime) : (0, QG.Clamp)(GG * bG / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + wG * ZG | 0
      }
      _inheritParticleInfoToSubEmitter(GG) {
        if (GG.particleSystem.emitter.position) {
          const bG = GG.particleSystem.emitter;
          if (bG.position.oW(this.position), GG.inheritDirection) {
            const GG = LG.j.mK[0];
            this.direction.normalizeToRef(GG), bG.setDirection(GG, 0, Math.PI / 2)
          }
        } else {
          GG.particleSystem.emitter.oW(this.position)
        }
        this.direction.scaleToRef(GG.inheritedVelocityAmount / 2, LG.j.mK[0]), GG.particleSystem._inheritedVelocityOffset.oW(LG.j.mK[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const GG of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(GG)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = iG._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(GG) {
        GG.position.oW(this.position), this._properties.initialDirection ? GG._properties.initialDirection ? GG._properties.initialDirection.oW(this._properties.initialDirection) : GG._properties.initialDirection = this._properties.initialDirection.clone() : GG._properties.initialDirection = null, GG.direction.oW(this.direction), this._properties.localPosition && (GG._properties.localPosition ? GG._properties.localPosition.oW(this._properties.localPosition) : GG._properties.localPosition = this._properties.localPosition.clone()), GG.color.oW(this.color), GG.colorStep.oW(this.colorStep), GG.initialColor.oW(this.initialColor), GG.colorDead.oW(this.colorDead), GG.lifeTime = this.lifeTime, GG.age = this.age, GG._properties.randomCellOffset = this._properties.randomCellOffset, GG.size = this.size, GG.scale.oW(this.scale), GG.angle = this.angle, GG.angularSpeed = this.angularSpeed, GG.particleSystem = this.particleSystem, GG.cellIndex = this.cellIndex, GG.id = this.id, GG._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (GG._properties.currentColorGradient = this._properties.currentColorGradient, GG._properties.currentColor1.oW(this._properties.currentColor1), GG._properties.currentColor2.oW(this._properties.currentColor2)), this._properties.currentSizeGradient && (GG._properties.currentSizeGradient = this._properties.currentSizeGradient, GG._properties.currentSize1 = this._properties.currentSize1, GG._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (GG._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, GG._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, GG._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (GG._properties.currentVelocityGradient = this._properties.currentVelocityGradient, GG._properties.currentVelocity1 = this._properties.currentVelocity1, GG._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (GG._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, GG._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, GG._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (GG._properties.currentDragGradient = this._properties.currentDragGradient, GG._properties.currentDrag1 = this._properties.currentDrag1, GG._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (GG._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, GG._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, GG._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (GG.remapData && this.remapData ? GG.remapData.oW(this.remapData) : GG.remapData = new LG.t(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (GG._properties.randomNoiseCoordinates1 && GG._properties.randomNoiseCoordinates2 ? (GG._properties.randomNoiseCoordinates1.oW(this._properties.randomNoiseCoordinates1), GG._properties.randomNoiseCoordinates2.oW(this._properties.randomNoiseCoordinates2)) : (GG._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), GG._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), GG.metadata = this.metadata
      }
    }
    iG._Count = 0;
    var CG = ZG(41487);
    class WG {
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
      constructor(GG, bG, ZG, wG) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = bG, this.U1 = GG, this._scene = ZG, this._host = wG, this._activeTargets = [], bG._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Dw: this._getCorrectLoopMode()
          }, this._animation.dataType === CG.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = LG.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const GG = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, GG)
        }
        if (this.U1 instanceof Array) {
          let GG = 0;
          for (const bG of this.U1) this._preparePath(bG, GG), this._getOriginalValues(GG), GG++;
          this._targetIsArray = !0
        } else this._preparePath(this.U1), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const SG = bG.getEvents();
        if (SG && SG.length > 0)
          for (const LG of SG) this._events.push(LG._clone());
        this._enableBlending = GG && GG.animationPropertiesOverride ? GG.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZG = this._animation.targetPropertyPath;
        if (ZG.length > 1) {
          let wG = GG;
          for (let GG = 0; GG < ZG.length - 1; GG++) {
            const bG = ZG[GG];
            if (wG = wG[bG], void 0 === wG) throw new Error(`Invalid property (${bG}) in property path (${ZG.join(".")})`)
          }
          this._targetPath = ZG[ZG.length - 1], this._activeTargets[bG] = wG
        } else this._targetPath = ZG[0], this._activeTargets[bG] = GG;
        if (void 0 === this._activeTargets[bG][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${ZG.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.U1 instanceof Array) {
            let GG = 0;
            for (const bG of this.U1) void 0 !== this._originalValue[GG] && this._setValue(bG, this._activeTargets[GG], this._originalValue[GG], -1, GG), GG++
          } else void 0 !== this._originalValue[0] && this._setValue(this.U1, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let GG = 0; GG < this._events.length; GG++) this._events[GG].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const GG = this._animation.runtimeAnimations.indexOf(this);
        GG > -1 && this._animation.runtimeAnimations.splice(GG, 1)
      }
      setValue(GG, bG) {
        if (this._targetIsArray)
          for (let ZG = 0; ZG < this.U1.length; ZG++) {
            const wG = this.U1[ZG];
            this._setValue(wG, this._activeTargets[ZG], GG, bG, ZG)
          } else this._setValue(this.U1, this._directTarget, GG, bG, 0)
      }
      _getOriginalValues() {
        let GG, bG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const ZG = this._activeTargets[bG];
        if (CG.d.InheritOriginalValueFromActiveAnimations) {
          const GG = this._scene._activeAnimatables;
          for (let wG = 0; wG < GG.length; wG++) {
            const SG = GG[wG]._runtimeAnimations;
            for (let GG = 0; GG < SG.length; GG++) {
              const wG = SG[GG];
              if (wG !== this && wG._targetPath === this._targetPath)
                for (let GG = 0; GG < wG._activeTargets.length; GG++)
                  if (wG._activeTargets[GG] === ZG && void 0 !== wG._originalValue[GG]) return void(wG._originalValue[GG] && wG._originalValue[GG].clone ? this._originalValue[bG] = wG._originalValue[GG].clone() : this._originalValue[bG] = wG._originalValue[GG])
            }
          }
        }
        GG = ZG.getLocalMatrix && "_matrix" === this._targetPath ? ZG.getLocalMatrix() : ZG[this._targetPath], GG && GG.clone ? this._originalValue[bG] = GG.clone() : this._originalValue[bG] = GG
      }
      _registerTargetForLateAnimationBinding(GG, bG) {
        const ZG = GG.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(ZG), ZG._lateAnimationHolders || (ZG._lateAnimationHolders = {}), ZG._lateAnimationHolders[GG.targetPath] || (ZG._lateAnimationHolders[GG.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: bG
        }), GG.isAdditive ? (ZG._lateAnimationHolders[GG.targetPath].additiveAnimations.push(GG), ZG._lateAnimationHolders[GG.targetPath].totalAdditiveWeight += GG.weight) : (ZG._lateAnimationHolders[GG.targetPath].animations.push(GG), ZG._lateAnimationHolders[GG.targetPath].totalWeight += GG.weight)
      }
      _setValue(GG, bG, ZG, wG, SG) {
        const yG = this._scene._animationWrites,
          kG = this._scene._animationWriteCount++;
        let UG = yG[kG];
        if (UG || (UG = yG[kG] = {
            runtimeAnimation: this,
            target: GG,
            weight: wG,
            additive: !1,
            blendingFactor: 1,
            Ld: !1
          }), UG.runtimeAnimation = this, UG.target = GG, UG.weight = wG, UG.additive = this.isAdditive, UG.Ld = !1, this._currentActiveTarget = bG, this._weight = wG, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const GG = bG[this._targetPath];
            GG.clone ? this._originalBlendValue = GG.clone() : this._originalBlendValue = GG
          }
          this._originalBlendValue.m ? CG.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? LG.e.DecomposeLerpToRef(this._originalBlendValue, ZG, this._blendingFactor, this._currentValue) : this._currentValue = LG.e.DecomposeLerp(this._originalBlendValue, ZG, this._blendingFactor) : this._currentValue ? LG.e.LerpToRef(this._originalBlendValue, ZG, this._blendingFactor, this._currentValue) : this._currentValue = LG.e.Lerp(this._originalBlendValue, ZG, this._blendingFactor) : this._currentValue = CG.d._UniversalLerp(this._originalBlendValue, ZG, this._blendingFactor);
          const wG = GG && GG.animationPropertiesOverride ? GG.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          UG.blendingFactor = this._blendingFactor, this._blendingFactor += wG
        } else UG.blendingFactor = 1, this._currentValue ? this._currentValue.oW ? this._currentValue.oW(ZG) : this._currentValue = ZG : this._currentValue = ZG?.clone ? ZG.clone() : ZG; - 1 !== wG ? this._registerTargetForLateAnimationBinding(this, this._originalValue[SG]) : this._animationState.Dw === CG.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[SG], bG[this._targetPath]) : bG[this._targetPath] = this._originalValue[SG] + this._currentValue : bG[this._targetPath] = this._currentValue, GG.wZG && GG.wZG(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.U1 && this.U1.animationPropertiesOverride) {
          return "MorphTarget" === this.U1.getClassName?.() && null == this.U1._animationPropertiesOverride ? this._animation.Dw : this.U1.animationPropertiesOverride.Dw
        }
        return this._animation.Dw
      }
      goToFrame(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const ZG = this._animation.getKeys();
        GG < ZG[0].frame ? GG = ZG[0].frame : GG > ZG[ZG.length - 1].frame && (GG = ZG[ZG.length - 1].frame);
        const wG = this._events;
        if (wG.length)
          for (let LG = 0; LG < wG.length; LG++) wG[LG].onlyOnce || (wG[LG].isDone = wG[LG].frame < GG);
        this._currentFrame = GG;
        const SG = this._animation._interpolate(GG, this._animationState);
        this.setValue(SG, bG)
      }
      _prepareForSpeedRatioChange(GG) {
        const bG = this._previousElapsedTime * (this._animation.framePerSecond * GG) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - bG
      }
      animate(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const yG = this._animation,
          kG = yG.targetPropertyPath;
        if (!kG || kG.length < 1) return this._stopped = !0, !1;
        let UG, YG = !0;
        const VG = this._events;
        let pG;
        if (this._coreRuntimeAnimation) pG = ZG - bG, UG = this._coreRuntimeAnimation.currentFrame, this._currentFrame = UG, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let LG;
          (bG < this._minFrame || bG > this._maxFrame) && (bG = this._minFrame), (ZG < this._minFrame || ZG > this._maxFrame) && (ZG = this._maxFrame), pG = ZG - bG;
          let kG = GG * (yG.framePerSecond * SG) / 1e3 + this._absoluteFrameOffset,
            fG = 0,
            QG = !1;
          const KG = wG && this._animationState.Dw === CG.d.ANIMATIONLOOPMODE_YOYO;
          if (KG) {
            const GG = (kG - bG) / pG,
              ZG = Math.sin(GG * Math.PI);
            kG = Math.abs(ZG) * pG + bG;
            const wG = ZG >= 0 ? 1 : -1;
            this._yoyoDirection !== wG && (QG = !0), this._yoyoDirection = wG
          }
          if (this._previousElapsedTime = GG, this._previousAbsoluteFrame = kG, !wG && ZG >= bG && (kG >= pG && SG > 0 || kG <= 0 && SG < 0)) YG = !1, fG = yG.evaluate(ZG);
          else if (!wG && bG >= ZG && (kG <= pG && SG < 0 || kG >= 0 && SG > 0)) YG = !1, fG = yG.evaluate(bG);
          else if (this._animationState.Dw !== CG.d.ANIMATIONLOOPMODE_CYCLE) {
            const GG = ZG.toString() + bG.toString();
            if (!this._offsetsCache[GG]) {
              this._animationState.repeatCount = 0, this._animationState.Dw = CG.d.ANIMATIONLOOPMODE_CYCLE;
              const wG = yG._interpolate(bG, this._animationState),
                SG = yG._interpolate(ZG, this._animationState);
              switch (this._animationState.Dw = this._getCorrectLoopMode(), yG.dataType) {
                case CG.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[GG] = SG - wG;
                  break;
                case CG.d.ANIMATIONTYPE_QUATERNION:
                case CG.d.ANIMATIONTYPE_VECTOR3:
                case CG.d.ANIMATIONTYPE_VECTOR2:
                case CG.d.ANIMATIONTYPE_SIZE:
                case CG.d.ANIMATIONTYPE_COLOR3:
                case CG.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[GG] = SG.subtract(wG)
              }
              this._highLimitsCache[GG] = SG
            }
            fG = this._highLimitsCache[GG], LG = this._offsetsCache[GG]
          }
          if (void 0 === LG) switch (yG.dataType) {
            case CG.d.ANIMATIONTYPE_FLOAT:
              LG = 0;
              break;
            case CG.d.ANIMATIONTYPE_QUATERNION:
              LG = CG.o;
              break;
            case CG.d.ANIMATIONTYPE_VECTOR3:
              LG = CG.u;
              break;
            case CG.d.ANIMATIONTYPE_VECTOR2:
              LG = CG.s;
              break;
            case CG.d.ANIMATIONTYPE_SIZE:
              LG = CG.r;
              break;
            case CG.d.ANIMATIONTYPE_COLOR3:
              LG = CG.j;
              break;
            case CG.d.ANIMATIONTYPE_COLOR4:
              LG = CG.l
          }
          const hG = this._host ? this._host.syncRoot : null;
          let dG, JG = this._playbackFrames,
            rG = !1;
          if (hG) {
            const GG = hG.toFrame - hG.fromFrame,
              ZG = hG.masterFrame,
              wG = (ZG - hG.fromFrame) / GG;
            UG = bG + pG * wG;
            const SG = hG.getAnimations()[0];
            if (SG && 0 !== GG) {
              const GG = pG * wG,
                bG = SG._playbackTo - SG._playbackFrom;
              if (0 !== bG && SG._playbackFrom <= hG.fromFrame && SG._playbackTo >= hG.toFrame) {
                JG = pG * Math.round((SG._playbackFrames - (SG._currentFrame - SG._playbackFrom)) / bG) + GG
              } else rG = (ZG - this._playbackSyncMasterFrame) * (SG._playbackFrames - this._playbackSyncMasterPlayed) < 0, JG = GG;
              rG = rG || SG._playbackJumped, this._playbackSyncMasterPlayed = SG._playbackFrames, this._playbackSyncMasterFrame = ZG
            }
          } else UG = kG > 0 && bG > ZG || kG < 0 && bG < ZG ? YG && 0 !== pG ? ZG + kG % pG : bG : YG && 0 !== pG ? bG + kG % pG : ZG;
          if (!KG && (SG > 0 && this.currentFrame > UG || SG < 0 && this.currentFrame < UG) || KG && QG) {
            this._onLoop();
            for (let GG = 0; GG < VG.length; GG++) VG[GG].onlyOnce || (VG[GG].isDone = !1);
            this._animationState.key = SG > 0 ? 0 : yG.getKeys().length - 1
          }
          if (this._currentFrame = UG, this._animationState.repeatCount = 0 === pG ? 0 : kG / pG | 0, this._animationState.highLimitValue = fG, this._animationState.offsetValue = LG, this._playbackFrom = bG, this._playbackTo = ZG, this._playbackJumped = rG, this._playbackSyncRoot = hG, hG) dG = JG;
          else if (YG) dG = KG ? UG === bG && kG === ZG ? pG : UG - bG : kG;
          else {
            const GG = 0 !== pG ? Math.floor(this._playbackFrames / pG) : 0;
            dG = (UG === ZG ? GG + 1 : GG) * pG
          }
          this._playbackFrames = dG, this._playbackProgress = this._animationState.Dw === CG.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? pG : dG
        }
        const fG = yG._interpolate(UG, this._animationState);
        if (this.setValue(fG, LG), VG.length)
          for (let QG = 0; QG < VG.length; QG++)
            if (pG >= 0 && UG >= VG[QG].frame && VG[QG].frame >= bG || pG < 0 && UG <= VG[QG].frame && VG[QG].frame <= bG) {
              const GG = VG[QG];
              GG.isDone || (GG.onlyOnce && (VG.splice(QG, 1), QG--), GG.isDone = !0, GG.action(UG))
            } return YG || (this._stopped = !0), YG
      }
    }
    var mG = ZG(40285);
    class IG {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(GG) {
        this._weight = -1 !== GG ? Math.min(Math.max(GG, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(GG) {
        for (let bG = 0; bG < this._runtimeAnimations.length; bG++) {
          this._runtimeAnimations[bG]._prepareForSpeedRatioChange(GG)
        }
        this._speedRatio = GG, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          LG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          kG = arguments.length > 6 ? arguments[6] : void 0,
          UG = arguments.length > 7 ? arguments[7] : void 0,
          YG = arguments.length > 8 ? arguments[8] : void 0,
          VG = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          pG = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = bG, this.fromFrame = ZG, this.toFrame = wG, this.loopAnimation = LG, this.onAnimationEnd = kG, this.onAnimationLoop = YG, this.isAdditive = VG, this.playOrder = pG, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.pE = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new SG.c, this.onAnimationLoopObservable = new SG.c, this._scene = GG, UG && this.appendAnimations(bG, UG), this._speedRatio = yG, GG._activeAnimatables.push(this)
      }
      syncWith(GG) {
        if (this._syncRoot = GG, GG) {
          const GG = this._scene._activeAnimatables.indexOf(this);
          GG > -1 && (this._scene._activeAnimatables.splice(GG, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(GG, bG) {
        for (let ZG = 0; ZG < bG.length; ZG++) {
          const wG = bG[ZG],
            SG = new WG(GG, wG, this._scene, this);
          SG._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(SG)
        }
      }
      getAnimationByTargetProperty(GG) {
        const bG = this._runtimeAnimations;
        for (let ZG = 0; ZG < bG.length; ZG++)
          if (bG[ZG].animation.targetProperty === GG) return bG[ZG].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(GG) {
        const bG = this._runtimeAnimations;
        for (let ZG = 0; ZG < bG.length; ZG++)
          if (bG[ZG].animation.targetProperty === GG) return bG[ZG];
        return null
      }
      reset() {
        const GG = this._runtimeAnimations;
        for (let bG = 0; bG < GG.length; bG++) GG[bG].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(GG) {
        const bG = this._runtimeAnimations;
        for (let ZG = 0; ZG < bG.length; ZG++) bG[ZG].animation.enableBlending = !0, bG[ZG].animation.blendingSpeed = GG
      }
      disableBlending() {
        const GG = this._runtimeAnimations;
        for (let bG = 0; bG < GG.length; bG++) GG[bG].animation.enableBlending = !1
      }
      goToFrame(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = this._runtimeAnimations;
        if (ZG[0]) {
          const bG = ZG[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? ZG[0].currentFrame;
          const wG = 0 === this.speedRatio ? 0 : (GG - this._frameToSyncFromJump) / bG * 1e3 / this.speedRatio;
          this._manualJumpDelay = -wG
        }
        for (let wG = 0; wG < ZG.length; wG++) ZG[wG].goToFrame(GG, bG ? this._weight : -1);
        this._goToFrame = GG
      }
      get paused() {
        return this.pE
      }
      pause() {
        this.pE || (this.pE = !0)
      }
      restart() {
        this.pE = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (GG || bG) {
          const SG = this._scene._activeAnimatables.indexOf(this);
          if (SG > -1) {
            const LG = this._runtimeAnimations;
            for (let ZG = LG.length - 1; ZG >= 0; ZG--) {
              const wG = LG[ZG];
              GG && wG.animation.name != GG || (bG && !bG(wG.target) || (wG.dispose(), LG.splice(ZG, 1)))
            }
            0 == LG.length && (ZG || this._scene._activeAnimatables.splice(SG, 1), wG || this._raiseOnAnimationEnd())
          }
        } else {
          const GG = this._scene._activeAnimatables.indexOf(this);
          if (GG > -1) {
            ZG || this._scene._activeAnimatables.splice(GG, 1);
            const bG = this._runtimeAnimations;
            for (let GG = 0; GG < bG.length; GG++) bG[GG].dispose();
            this._runtimeAnimations.length = 0, wG || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((GG => {
          this.onAnimationEndObservable.add((() => {
            GG(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(GG) {
        if (this.pE) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = GG), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = GG, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += GG - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !IG.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let bG = !1;
        const ZG = this._runtimeAnimations;
        let wG;
        for (wG = 0; wG < ZG.length; wG++) {
          const SG = ZG[wG].animate(GG - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          bG = bG || SG
        }
        if (this.animationStarted = bG, !bG) {
          if (this.disposeOnEnd)
            for (wG = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(wG, 1), wG = 0; wG < ZG.length; wG++) ZG[wG].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return bG
      }
    }

    function FG(GG) {
      if (0 === GG.totalWeight && 0 === GG.totalAdditiveWeight) return GG.originalValue;
      let bG = 1;
      const ZG = LG.j.mK[0],
        wG = LG.j.mK[1],
        SG = LG.j.Quaternion[0];
      let yG = 0;
      const kG = GG.animations[0],
        UG = GG.originalValue;
      let YG, VG = !1;
      if (GG.totalWeight < 1) YG = 1 - GG.totalWeight, UG.decompose(wG, SG, ZG);
      else {
        if (yG = 1, bG = GG.totalWeight, YG = kG.weight / bG, 1 == YG) {
          if (!GG.totalAdditiveWeight) return kG.currentValue;
          VG = !0
        }
        kG.currentValue.decompose(wG, SG, ZG)
      }
      if (!VG) {
        wG.scaleInPlace(YG), ZG.scaleInPlace(YG), SG.scaleInPlace(YG);
        for (let kG = yG; kG < GG.animations.length; kG++) {
          const yG = GG.animations[kG];
          if (0 === yG.weight) continue;
          YG = yG.weight / bG;
          const UG = LG.j.mK[2],
            VG = LG.j.mK[3],
            pG = LG.j.Quaternion[1];
          yG.currentValue.decompose(VG, pG, UG), VG.scaleAndAddToRef(YG, wG), pG.scaleAndAddToRef(LG.g.Dot(SG, pG) > 0 ? YG : -YG, SG), UG.scaleAndAddToRef(YG, ZG)
        }
        SG.normalize()
      }
      for (let fG = 0; fG < GG.additiveAnimations.length; fG++) {
        const bG = GG.additiveAnimations[fG];
        if (0 === bG.weight) continue;
        const yG = LG.j.mK[2],
          kG = LG.j.mK[3],
          UG = LG.j.Quaternion[1];
        bG.currentValue.decompose(kG, UG, yG), kG.multiplyToRef(wG, kG), LG.p.LerpToRef(wG, kG, bG.weight, wG), SG.multiplyToRef(UG, UG), LG.g.SlerpToRef(SG, UG, bG.weight, SG), yG.scaleAndAddToRef(bG.weight, ZG)
      }
      const pG = kG ? kG._animationState.workValue : LG.j.Matrix[0].clone();
      return LG.e.ComposeToRef(wG, SG, ZG, pG), pG
    }

    function vG(GG, bG) {
      if (0 === GG.totalWeight && 0 === GG.totalAdditiveWeight) return bG;
      const ZG = GG.animations[0],
        wG = GG.originalValue;
      let SG = bG;
      if (0 === GG.totalWeight && GG.totalAdditiveWeight > 0) SG.oW(wG);
      else if (1 === GG.animations.length) {
        if (LG.g.SlerpToRef(wG, ZG.currentValue, Math.min(1, GG.totalWeight), SG), 0 === GG.totalAdditiveWeight) return SG
      } else if (GG.animations.length > 1) {
        let ZG, yG, kG = 1;
        if (GG.totalWeight < 1) {
          const bG = 1 - GG.totalWeight;
          ZG = [], yG = [], ZG.push(wG), yG.push(bG)
        } else {
          if (2 === GG.animations.length && (LG.g.SlerpToRef(GG.animations[0].currentValue, GG.animations[1].currentValue, GG.animations[1].weight / GG.totalWeight, bG), 0 === GG.totalAdditiveWeight)) return bG;
          ZG = [], yG = [], kG = GG.totalWeight
        }
        for (let bG = 0; bG < GG.animations.length; bG++) {
          const wG = GG.animations[bG];
          ZG.push(wG.currentValue), yG.push(wG.weight / kG)
        }
        let UG = 0;
        for (let GG = 0; GG < ZG.length;) GG ? (UG += yG[GG], LG.g.SlerpToRef(SG, ZG[GG], yG[GG] / UG, SG), GG++) : (LG.g.SlerpToRef(ZG[GG], ZG[GG + 1], yG[GG + 1] / (yG[GG] + yG[GG + 1]), bG), SG = bG, UG = yG[GG] + yG[GG + 1], GG += 2)
      }
      for (let yG = 0; yG < GG.additiveAnimations.length; yG++) {
        const bG = GG.additiveAnimations[yG];
        0 !== bG.weight && (SG.multiplyToRef(bG.currentValue, LG.j.Quaternion[0]), LG.g.SlerpToRef(SG, LG.j.Quaternion[0], bG.weight, SG))
      }
      return SG
    }

    function aG(GG, bG) {
      bG && (bG.prototype.copyAnimationRange = function(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new CG.d(this.name, "_matrix", GG.animations[0].framePerSecond, CG.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const LG = GG.animations[0].getRange(bG);
        if (!LG) return !1;
        const yG = LG.from,
          kG = LG.to,
          UG = GG.animations[0].getKeys(),
          YG = GG.length,
          VG = GG.getParent(),
          pG = this.getParent(),
          fG = wG && VG && YG && this.length && YG !== this.length,
          QG = fG && pG && VG ? pG.length / VG.length : 1,
          KG = wG && !pG && SG && (1 !== SG.x || 1 !== SG.y || 1 !== SG.z),
          hG = this.animations[0].getKeys();
        let dG, JG, rG;
        for (let zG = 0, EG = UG.length; zG < EG; zG++) dG = UG[zG], dG.frame >= yG && dG.frame <= kG && (wG ? (rG = dG.value.clone(), fG ? (JG = rG.getTranslation(), rG.setTranslation(JG.scaleInPlace(QG))) : KG && SG ? (JG = rG.getTranslation(), rG.setTranslation(JG.multiplyInPlace(SG))) : rG = dG.value) : rG = dG.value, hG.push({
          frame: dG.frame + ZG,
          value: rG
        }));
        return this.animations[0].createRange(bG, yG + ZG, kG + ZG), !0
      }), GG && (GG.prototype._animate = function(GG) {
        const bG = this._animationWrites,
          ZG = this._animationWriteCount;
        let wG = 0;
        for (let LG = this._animationStepWriteCount; LG < ZG; LG++) {
          const GG = bG[LG];
          GG.Ld && -1 === GG.weight || (GG.Ld = !0, bG[LG] = bG[wG], bG[wG] = GG, wG++)
        }
        for (let LG = wG; LG < ZG; LG++) {
          const GG = bG[LG];
          GG.runtimeAnimation = null, GG.target = null
        }
        if (this._animationWriteCount = wG, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const SG = mG.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = SG
        }
        this.deltaTime = void 0 !== GG ? GG : this.useConstantAnimationDeltaTime ? 16 : (SG - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = SG;
        const yG = this._activeAnimatables;
        if (0 === yG.length) return;
        this._animationTime += this.deltaTime;
        const kG = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let LG = 0; LG < yG.length; LG++) {
          const GG = yG[LG];
          !GG._animate(kG) && GG.disposeOnEnd && LG--
        }! function(GG) {
          if (GG._registeredForLateAnimationBindings.length) {
            for (let bG = 0; bG < GG._registeredForLateAnimationBindings.length; bG++) {
              const ZG = GG._registeredForLateAnimationBindings.data[bG];
              for (const GG in ZG._lateAnimationHolders) {
                const bG = ZG._lateAnimationHolders[GG],
                  wG = bG.animations[0],
                  SG = bG.originalValue;
                if (void 0 === SG || null === SG) continue;
                const yG = CG.d.AllowMatrixDecomposeForInterpolation && SG.m;
                let kG = ZG[GG];
                if (yG) kG = FG(bG);
                else if (void 0 !== SG.w) kG = vG(bG, kG || LG.g.Identity());
                else {
                  let GG = 0,
                    ZG = 1;
                  const LG = wG && wG._animationState.Dw === CG.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (bG.totalWeight < 1) kG = LG ? SG.clone ? SG.clone() : SG : wG && SG.scale ? SG.scale(1 - bG.totalWeight) : wG ? SG * (1 - bG.totalWeight) : SG.clone ? SG.clone() : SG;
                  else if (wG) {
                    ZG = bG.totalWeight;
                    const yG = wG.weight / ZG;
                    kG = 1 !== yG ? wG.currentValue.scale ? wG.currentValue.scale(yG) : wG.currentValue * yG : (bG.animations.length > 1 || bG.additiveAnimations.length > 0) && wG.currentValue.clone ? wG.currentValue.clone() : wG.currentValue, LG && (kG.addToRef ? kG.addToRef(SG, kG) : kG += SG), GG = 1
                  }
                  for (let wG = GG; wG < bG.animations.length; wG++) {
                    const GG = bG.animations[wG],
                      SG = GG.weight / ZG;
                    SG && (GG.currentValue.scaleAndAddToRef ? GG.currentValue.scaleAndAddToRef(SG, kG) : kG += GG.currentValue * SG)
                  }
                  for (let wG = 0; wG < bG.additiveAnimations.length; wG++) {
                    const GG = bG.additiveAnimations[wG],
                      ZG = GG.weight;
                    ZG && (GG.currentValue.scaleAndAddToRef ? GG.currentValue.scaleAndAddToRef(ZG, kG) : kG += GG.currentValue * ZG)
                  }
                }
                ZG[GG] = kG
              }
              ZG._lateAnimationHolders = {}
            }
            GG._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, GG.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((GG, bG) => GG.playOrder - bG.playOrder))
      }, GG.prototype.beginWeightedAnimation = function(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          SG = arguments.length > 4 ? arguments[4] : void 0,
          LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          yG = arguments.length > 6 ? arguments[6] : void 0,
          kG = arguments.length > 7 ? arguments[7] : void 0,
          UG = arguments.length > 8 ? arguments[8] : void 0,
          YG = arguments.length > 9 ? arguments[9] : void 0,
          VG = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const pG = this.beginAnimation(GG, bG, ZG, SG, LG, yG, kG, !1, UG, YG, VG);
        return pG.weight = wG, pG
      }, GG.prototype.beginAnimation = function(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          LG = arguments.length > 5 ? arguments[5] : void 0,
          yG = arguments.length > 6 ? arguments[6] : void 0,
          kG = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          UG = arguments.length > 8 ? arguments[8] : void 0,
          YG = arguments.length > 9 ? arguments[9] : void 0,
          VG = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (SG < 0) {
          const GG = bG;
          bG = ZG, ZG = GG, SG = -SG
        }
        bG > ZG && (SG = -SG), kG && this.stopAnimation(GG, void 0, UG), yG || (yG = new IG(this, GG, bG, ZG, wG, SG, LG, void 0, YG, VG));
        const pG = !UG || UG(GG);
        if (GG.animations && pG && yG.appendAnimations(GG, GG.animations), GG.getAnimatables) {
          const VG = GG.getAnimatables();
          for (let GG = 0; GG < VG.length; GG++) this.beginAnimation(VG[GG], bG, ZG, wG, SG, LG, yG, kG, UG, YG)
        }
        return yG.reset(), yG
      }, GG.prototype.beginHierarchyAnimation = function(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          yG = arguments.length > 6 ? arguments[6] : void 0,
          kG = arguments.length > 7 ? arguments[7] : void 0,
          UG = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          YG = arguments.length > 9 ? arguments[9] : void 0,
          VG = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const pG = GG.getDescendants(bG),
          fG = [];
        fG.push(this.beginAnimation(GG, ZG, wG, SG, LG, yG, kG, UG, YG, void 0, VG));
        for (const QG of pG) fG.push(this.beginAnimation(QG, ZG, wG, SG, LG, yG, kG, UG, YG, void 0, VG));
        return fG
      }, GG.prototype.beginDirectAnimation = function(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (LG < 0) {
          const GG = ZG;
          ZG = wG, wG = GG, LG = -LG
        }
        ZG > wG && (LG = -LG);
        return new IG(this, GG, ZG, wG, SG, LG, arguments.length > 6 ? arguments[6] : void 0, bG, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, GG.prototype.beginDirectHierarchyAnimation = function(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        let YG = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const VG = GG.getDescendants(bG),
          pG = [];
        pG.push(this.beginDirectAnimation(GG, ZG, wG, SG, LG, yG, kG, UG, YG));
        for (const fG of VG) pG.push(this.beginDirectAnimation(fG, ZG, wG, SG, LG, yG, kG, UG, YG));
        return pG
      }, GG.prototype.getAnimatableByTarget = function(GG) {
        for (let bG = 0; bG < this._activeAnimatables.length; bG++)
          if (this._activeAnimatables[bG].target === GG) return this._activeAnimatables[bG];
        return null
      }, GG.prototype.getAllAnimatablesByTarget = function(GG) {
        const bG = [];
        for (let ZG = 0; ZG < this._activeAnimatables.length; ZG++) this._activeAnimatables[ZG].target === GG && bG.push(this._activeAnimatables[ZG]);
        return bG
      }, GG.prototype.stopAnimation = function(GG, bG, ZG) {
        const wG = this.getAllAnimatablesByTarget(GG);
        for (const SG of wG) SG.stop(bG, ZG)
      }, GG.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let GG = 0; GG < this._activeAnimatables.length; GG++) this._activeAnimatables[GG].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const GG of this.animationGroups) GG.stop()
      })
    }
    IG.ProcessPausedAnimatables = !1;
    var cG, lG = ZG(37448),
      jG = ZG(40599),
      PG = ZG(40258);
    class MG extends jG.e {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(GG) {
        (GG.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.oW(GG), this._markAsDirtyAndDecompose())
      }
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          kG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(GG, bG.Dv(), !1), this.name = GG, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = bG, this._localMatrix = wG?.clone() ?? LG.e.Identity(), this._restMatrix = SG ?? this._localMatrix.clone(), this._bindMatrix = yG ?? this._localMatrix.clone(), this._index = kG, this._absoluteMatrix = new LG.e, this._absoluteBindMatrix = new LG.e, this._absoluteInverseBindMatrix = new LG.e, this._finalMatrix = new LG.e, bG.bones.push(this), this.setParent(ZG, !1), this._updateAbsoluteBindMatrices()
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
      set parent(GG) {
        this.setParent(GG)
      }
      setParent(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== GG) {
          if (this.parent) {
            const GG = this.parent.children.indexOf(this); - 1 !== GG && this.parent.children.splice(GG, 1)
          }
          this._parentNode = GG, this.parent && this.parent.children.push(this), bG && this._updateAbsoluteBindMatrices(), this.wZG()
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
      setRestMatrix(GG) {
        this._restMatrix.oW(GG)
      }
      setRestPose(GG) {
        this.setRestMatrix(GG)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(GG) {
        this.R6(GG)
      }
      setBindPose(GG) {
        this.setBindMatrix(GG)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const GG = LG.j.mK[0],
            bG = LG.j.Quaternion[0],
            ZG = LG.j.mK[1];
          this.getRestMatrix().decompose(GG, bG, ZG), this._linkedTransformNode.position.oW(ZG), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? LG.g.Identity(), this._linkedTransformNode.rotationQuaternion.oW(bG), this._linkedTransformNode.nY.oW(GG)
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
      linkTransformNode(GG) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = GG, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.rbG
      }
      set position(GG) {
        this._decompose(), this.rbG.oW(GG), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(GG) {
        this.setRotation(GG)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(GG) {
        this.setRotationQuaternion(GG)
      }
      get nY() {
        return this.getScale()
      }
      set nY(GG) {
        this.setScale(GG)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = LG.p.Zero(), this._localRotation = LG.g.Zero(), this.rbG = LG.p.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.rbG))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, LG.e.ComposeToRef(this._localScaling, this._localRotation, this.rbG, this._localMatrix)) : this._needToCompose = !1)
      }
      R6(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.oW(GG), bG && this._updateAbsoluteBindMatrices(), ZG ? this._matrix = GG : this.wZG()
      }
      _updateAbsoluteBindMatrices(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (GG || (GG = this._bindMatrix), this.parent ? GG.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.oW(GG), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), bG)
          for (let ZG = 0; ZG < this.children.length; ZG++) this.children[ZG]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      wZG() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.wZG(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.wZG(), this._needToDecompose = !0
      }
      _updatePosition(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const SG = this.getLocalMatrix();
        if (0 == bG) wG ? (SG.addAtIndex(12, GG.x), SG.addAtIndex(13, GG.y), SG.addAtIndex(14, GG.z)) : SG.setTranslationFromFloats(GG.x, GG.y, GG.z);
        else {
          const bG = MG._TmpMats[0],
            yG = MG._TmpVecs[0];
          this.parent ? (bG.oW(this.parent.getAbsoluteMatrix()), ZG && bG.multiplyToRef(ZG.getWorldMatrix(), bG)) : LG.e.IdentityToRef(bG), wG && bG.setTranslationFromFloats(0, 0, 0), bG.invert(), LG.p.TransformCoordinatesToRef(GG, bG, yG), wG ? (SG.addAtIndex(12, yG.x), SG.addAtIndex(13, yG.y), SG.addAtIndex(14, yG.z)) : SG.setTranslationFromFloats(yG.x, yG.y, yG.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(GG, bG, ZG, !0)
      }
      setPosition(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(GG, bG, ZG, !1)
      }
      setAbsolutePosition(GG, bG) {
        this.setPosition(GG, 1, bG)
      }
      scale(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const SG = this.getLocalMatrix(),
          yG = MG._TmpMats[0];
        LG.e.ScalingToRef(GG, bG, ZG, yG), yG.multiplyToRef(SG, SG), yG.invert();
        for (const LG of this.children) {
          const wG = LG.getLocalMatrix();
          wG.multiplyToRef(yG, wG), wG.multiplyAtIndex(12, GG), wG.multiplyAtIndex(13, bG), wG.multiplyAtIndex(14, ZG), LG._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), wG)
          for (const LG of this.children) LG.scale(GG, bG, ZG, wG)
      }
      setScale(GG) {
        this._decompose(), this._localScaling.oW(GG), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(GG) {
        this._decompose(), GG.oW(this._localScaling)
      }
      setYawPitchRoll(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SG = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === wG) {
          const yG = MG._TmpQuat;
          return LG.g.RotationYawPitchRollToRef(GG, bG, ZG, yG), void this.setRotationQuaternion(yG, wG, SG)
        }
        const yG = MG._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(yG, SG)) return;
        const kG = MG._TmpMats[1];
        LG.e.RotationYawPitchRollToRef(GG, bG, ZG, kG), yG.multiplyToRef(kG, kG), this._rotateWithMatrix(kG, wG, SG)
      }
      rotate(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 ? arguments[3] : void 0;
        const SG = MG._TmpMats[0];
        SG.setTranslationFromFloats(0, 0, 0), LG.e.RotationAxisToRef(GG, bG, SG), this._rotateWithMatrix(SG, ZG, wG)
      }
      setAxisAngle(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === ZG) {
          const SG = MG._TmpQuat;
          return LG.g.RotationAxisToRef(GG, bG, SG), void this.setRotationQuaternion(SG, ZG, wG)
        }
        const SG = MG._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(SG, wG)) return;
        const yG = MG._TmpMats[1];
        LG.e.RotationAxisToRef(GG, bG, yG), SG.multiplyToRef(yG, yG), this._rotateWithMatrix(yG, ZG, wG)
      }
      setRotation(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(GG.y, GG.x, GG.z, bG, ZG)
      }
      setRotationQuaternion(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === bG) return this._decompose(), this._localRotation.oW(GG), void this._markAsDirtyAndCompose();
        const wG = MG._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(wG, ZG)) return;
        const SG = MG._TmpMats[1];
        LG.e.FromQuaternionToRef(GG, SG), wG.multiplyToRef(SG, SG), this._rotateWithMatrix(SG, bG, ZG)
      }
      setRotationMatrix(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === bG) {
          const wG = MG._TmpQuat;
          return LG.g.FromRotationMatrixToRef(GG, wG), void this.setRotationQuaternion(wG, bG, ZG)
        }
        const wG = MG._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(wG, ZG)) return;
        const SG = MG._TmpMats[1];
        SG.oW(GG), wG.multiplyToRef(GG, SG), this._rotateWithMatrix(SG, bG, ZG)
      }
      _rotateWithMatrix(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const wG = this.getLocalMatrix(),
          SG = wG.m[12],
          LG = wG.m[13],
          yG = wG.m[14],
          kG = this.getParent(),
          UG = MG._TmpMats[3],
          YG = MG._TmpMats[4];
        kG && 1 == bG ? (ZG ? (UG.oW(ZG.getWorldMatrix()), kG.getAbsoluteMatrix().multiplyToRef(UG, UG)) : UG.oW(kG.getAbsoluteMatrix()), YG.oW(UG), YG.invert(), wG.multiplyToRef(UG, wG), wG.multiplyToRef(GG, wG), wG.multiplyToRef(YG, wG)) : 1 == bG && ZG ? (UG.oW(ZG.getWorldMatrix()), YG.oW(UG), YG.invert(), wG.multiplyToRef(UG, wG), wG.multiplyToRef(GG, wG), wG.multiplyToRef(YG, wG)) : wG.multiplyToRef(GG, wG), wG.setTranslationFromFloats(SG, LG, yG), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(GG, bG) {
        const ZG = MG._TmpMats[2];
        return GG.oW(this.getAbsoluteMatrix()), bG ? (GG.multiplyToRef(bG.getWorldMatrix(), GG), LG.e.ScalingToRef(bG.nY.x, bG.nY.y, bG.nY.z, ZG)) : LG.e.IdentityToRef(ZG), GG.invert(), !isNaN(GG.m[0]) && (ZG.multiplyAtIndex(0, this._scalingDeterminant), GG.multiplyToRef(ZG, GG), !0)
      }
      HJ() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZG = LG.p.Zero();
        return this.getPositionToRef(GG, bG, ZG), ZG
      }
      getPositionToRef() {
        let GG = arguments.length > 1 ? arguments[1] : void 0,
          bG = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const GG = this.getLocalMatrix();
          bG.x = GG.m[12], bG.y = GG.m[13], bG.z = GG.m[14]
        } else {
          const ZG = MG._TmpMats[0].oW(this.getAbsoluteMatrix());
          GG && ZG.multiplyToRef(GG.getWorldMatrix(), ZG), bG.x = ZG.m[12], bG.y = ZG.m[13], bG.z = ZG.m[14]
        }
      }
      getAbsolutePosition() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const bG = LG.p.Zero();
        return this.getPositionToRef(1, GG, bG), bG
      }
      getAbsolutePositionToRef(GG, bG) {
        this.getPositionToRef(1, GG, bG)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.oW(this._localMatrix);
          const GG = this._skeleton.getPoseMatrix();
          GG && this._absoluteMatrix.multiplyToRef(GG, this._absoluteMatrix)
        }
        const GG = this.children,
          bG = GG.length;
        for (let ZG = 0; ZG < bG; ZG++) GG[ZG].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      zB(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZG = LG.p.Zero();
        return this.getDirectionToRef(GG, bG, ZG), ZG
      }
      getDirectionToRef(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const wG = MG._TmpMats[0].oW(this.getAbsoluteMatrix());
        bG && wG.multiplyToRef(bG.getWorldMatrix(), wG), LG.p.TransformNormalToRef(GG, wG, ZG), ZG.normalize()
      }
      getRotation() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZG = LG.p.Zero();
        return this.getRotationToRef(GG, bG, ZG), ZG
      }
      getRotationToRef() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const wG = MG._TmpQuat;
        this.getRotationQuaternionToRef(GG, bG, wG), wG.toEulerAnglesToRef(ZG)
      }
      getRotationQuaternion() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZG = LG.g.Identity();
        return this.getRotationQuaternionToRef(GG, bG, ZG), ZG
      }
      getRotationQuaternionToRef() {
        let GG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bG = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), bG.oW(this._localRotation);
        else {
          const ZG = MG._TmpMats[0],
            wG = this.getAbsoluteMatrix();
          GG ? wG.multiplyToRef(GG.getWorldMatrix(), ZG) : ZG.oW(wG), ZG.multiplyAtIndex(0, this._scalingDeterminant), ZG.multiplyAtIndex(1, this._scalingDeterminant), ZG.multiplyAtIndex(2, this._scalingDeterminant), ZG.decompose(void 0, bG, void 0)
        }
      }
      getRotationMatrix() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 ? arguments[1] : void 0;
        const ZG = LG.e.Identity();
        return this.getRotationMatrixToRef(GG, bG, ZG), ZG
      }
      getRotationMatrixToRef() {
        let GG = arguments.length > 1 ? arguments[1] : void 0,
          bG = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(bG);
        else {
          const ZG = MG._TmpMats[0],
            wG = this.getAbsoluteMatrix();
          GG ? wG.multiplyToRef(GG.getWorldMatrix(), ZG) : ZG.oW(wG), ZG.multiplyAtIndex(0, this._scalingDeterminant), ZG.multiplyAtIndex(1, this._scalingDeterminant), ZG.multiplyAtIndex(2, this._scalingDeterminant), ZG.getRotationMatrixToRef(bG)
        }
      }
      getAbsolutePositionFromLocal(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZG = LG.p.Zero();
        return this.getAbsolutePositionFromLocalToRef(GG, bG, ZG), ZG
      }
      getAbsolutePositionFromLocalToRef(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const wG = MG._TmpMats[0].oW(this.getAbsoluteMatrix());
        bG && wG.multiplyToRef(bG.getWorldMatrix(), wG), LG.p.TransformCoordinatesToRef(GG, wG, ZG)
      }
      getLocalPositionFromAbsolute(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZG = LG.p.Zero();
        return this.getLocalPositionFromAbsoluteToRef(GG, bG, ZG), ZG
      }
      getLocalPositionFromAbsoluteToRef(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const wG = MG._TmpMats[0].oW(this.getAbsoluteMatrix());
        bG && wG.multiplyToRef(bG.getWorldMatrix(), wG), wG.invert(), LG.p.TransformCoordinatesToRef(GG, wG, ZG)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const GG = this._skeleton.bones.indexOf(this);
        if (-1 !== GG && this._skeleton.bones.splice(GG, 1), this._parentNode && this._parentNode.children) {
          const GG = this._parentNode.children,
            bG = GG.indexOf(this); - 1 !== bG && GG.splice(bG, 1)
        }
        super.dispose()
      }
    }
    MG._TmpVecs = (0, lG.d)(2, LG.p.Zero), MG._TmpQuat = LG.g.Identity(), MG._TmpMats = (0, lG.d)(5, LG.e.Identity), (cG = MG.prototype).copyAnimationRange ?? (cG.copyAnimationRange = (0, PG.h)("Bone", "copyAnimationRange"));
    var AG = ZG(40475);
    let sG = !1;
    var qG = ZG(40360),
      nG = ZG(40697),
      gG = ZG(40709),
      eG = ZG(40705),
      RG = ZG(40502);

    function TG(GG, bG) {
      const ZG = (0, QG.RandomRange)(0, 1);
      VG.d.LerpToRef(bG.color1, bG.color2, ZG, GG.color)
    }

    function HG(GG, bG) {
      bG.colorDead.subtractToRef(GG.color, bG._colorDiff), bG._colorDiff.scaleToRef(1 / GG.lifeTime, GG.colorStep)
    }

    function tG(GG, bG) {
      GG._properties.currentColorGradient = bG._colorGradients[0], GG._properties.currentColorGradient.getColorToRef(GG.color), GG._properties.currentColor1.oW(GG.color), bG._colorGradients.length > 1 ? bG._colorGradients[1].getColorToRef(GG._properties.currentColor2) : GG._properties.currentColor2.oW(GG.color)
    }

    function DG(GG, bG) {
      const ZG = bG._colorGradients;
      wG.m.GetCurrentGradient(bG._ratio, ZG, ((bG, ZG, wG) => {
        bG !== GG._properties.currentColorGradient && (GG._properties.currentColor1.oW(GG._properties.currentColor2), ZG.getColorToRef(GG._properties.currentColor2), GG._properties.currentColorGradient = bG), VG.d.LerpToRef(GG._properties.currentColor1, GG._properties.currentColor2, wG, GG.color), GG.color.a < 0 && (GG.color.a = 0)
      }))
    }

    function NG(GG, bG) {
      GG.colorStep.scaleToRef(bG._scaledUpdateSpeed, bG._scaledColorStep), GG.color.addInPlace(bG._scaledColorStep), GG.color.a < 0 && (GG.color.a = 0)
    }

    function OG(GG, bG) {
      wG.m.GetCurrentGradient(bG._ratio, bG._angularSpeedGradients, ((bG, ZG, wG) => {
        bG !== GG._properties.currentAngularSpeedGradient && (GG._properties.currentAngularSpeed1 = GG._properties.currentAngularSpeed2, GG._properties.currentAngularSpeed2 = ZG.getFactor(), GG._properties.currentAngularSpeedGradient = bG), GG.angularSpeed = (0, QG.Lerp)(GG._properties.currentAngularSpeed1, GG._properties.currentAngularSpeed2, wG)
      }))
    }

    function xG(GG, bG) {
      GG.angle += GG.angularSpeed * bG._scaledUpdateSpeed
    }

    function BG(GG, bG) {
      bG.particleEmitterType.startDirectionFunction(bG._emitterWorldMatrix, GG.direction, GG, bG.isLocal, bG._emitterInverseWorldMatrix)
    }

    function Gb(GG, bG) {
      bG.startDirectionFunction(bG._emitterWorldMatrix, GG.direction, GG, bG.isLocal)
    }

    function bb(GG, bG) {
      GG._properties.currentVelocityGradient = bG._velocityGradients[0], GG._properties.currentVelocity1 = GG._properties.currentVelocityGradient.getFactor(), bG._velocityGradients.length > 1 ? GG._properties.currentVelocity2 = bG._velocityGradients[1].getFactor() : GG._properties.currentVelocity2 = GG._properties.currentVelocity1
    }

    function Zb(GG, bG) {
      GG._properties.currentLimitVelocityGradient = bG._limitVelocityGradients[0], GG._properties.currentLimitVelocity1 = GG._properties.currentLimitVelocityGradient.getFactor(), bG._limitVelocityGradients.length > 1 ? GG._properties.currentLimitVelocity2 = bG._limitVelocityGradients[1].getFactor() : GG._properties.currentLimitVelocity2 = GG._properties.currentLimitVelocity1
    }

    function wb(GG, bG) {
      wG.m.GetCurrentGradient(bG._ratio, bG._velocityGradients, ((bG, ZG, wG) => {
        bG !== GG._properties.currentVelocityGradient && (GG._properties.currentVelocity1 = GG._properties.currentVelocity2, GG._properties.currentVelocity2 = ZG.getFactor(), GG._properties.currentVelocityGradient = bG), GG._properties.directionScale *= (0, QG.Lerp)(GG._properties.currentVelocity1, GG._properties.currentVelocity2, wG)
      }))
    }

    function Sb(GG, bG) {
      wG.m.GetCurrentGradient(bG._ratio, bG._limitVelocityGradients, ((ZG, wG, SG) => {
        ZG !== GG._properties.currentLimitVelocityGradient && (GG._properties.currentLimitVelocity1 = GG._properties.currentLimitVelocity2, GG._properties.currentLimitVelocity2 = wG.getFactor(), GG._properties.currentLimitVelocityGradient = ZG);
        const LG = (0, QG.Lerp)(GG._properties.currentLimitVelocity1, GG._properties.currentLimitVelocity2, SG);
        GG.direction.length() > LG && GG.direction.scaleInPlace(bG.limitVelocityDamping)
      }))
    }

    function Lb(GG) {
      GG.direction.scaleToRef(GG._properties.directionScale, GG._properties.scaledDirection)
    }

    function yb(GG, bG) {
      bG.particleEmitterType.startPositionFunction(bG._emitterWorldMatrix, GG.position, GG, bG.isLocal)
    }

    function kb(GG, bG) {
      bG.startPositionFunction(bG._emitterWorldMatrix, GG.position, GG, bG.isLocal)
    }

    function Ub(GG, bG) {
      GG._properties.localPosition ? GG._properties.localPosition.oW(GG.position) : GG._properties.localPosition = GG.position.clone(), LG.p.TransformCoordinatesToRef(GG._properties.localPosition, bG._emitterWorldMatrix, GG.position)
    }

    function Yb(GG, bG) {
      bG.isLocal && GG._properties.localPosition ? (GG._properties.localPosition.addInPlace(GG._properties.scaledDirection), LG.p.TransformCoordinatesToRef(GG._properties.localPosition, bG._emitterWorldMatrix, GG.position)) : GG.position.addInPlace(GG._properties.scaledDirection)
    }

    function Vb(GG, bG) {
      GG._properties.currentDragGradient = bG._dragGradients[0], GG._properties.currentDrag1 = GG._properties.currentDragGradient.getFactor(), bG._dragGradients.length > 1 ? GG._properties.currentDrag2 = bG._dragGradients[1].getFactor() : GG._properties.currentDrag2 = GG._properties.currentDrag1
    }

    function pb(GG, bG) {
      wG.m.GetCurrentGradient(bG._ratio, bG._dragGradients, ((bG, ZG, wG) => {
        bG !== GG._properties.currentDragGradient && (GG._properties.currentDrag1 = GG._properties.currentDrag2, GG._properties.currentDrag2 = ZG.getFactor(), GG._properties.currentDragGradient = bG);
        const SG = (0, QG.Lerp)(GG._properties.currentDrag1, GG._properties.currentDrag2, wG);
        GG._properties.scaledDirection.scaleInPlace(1 - SG)
      }))
    }

    function fb(GG, bG) {
      GG._properties.randomNoiseCoordinates1 && GG._properties.randomNoiseCoordinates2 ? (GG._properties.randomNoiseCoordinates1.fGG(Math.random(), Math.random(), Math.random()), GG._properties.randomNoiseCoordinates2.fGG(Math.random(), Math.random(), Math.random())) : (GG._properties.randomNoiseCoordinates1 = new LG.p(Math.random(), Math.random(), Math.random()), GG._properties.randomNoiseCoordinates2 = new LG.p(Math.random(), Math.random(), Math.random()))
    }

    function Qb(GG, bG) {
      const ZG = bG._noiseTextureData,
        wG = bG._noiseTextureSize;
      if (ZG && wG && GG._properties.randomNoiseCoordinates1 && GG._properties.randomNoiseCoordinates2) {
        const SG = bG._fetchR(GG._properties.randomNoiseCoordinates1.x, GG._properties.randomNoiseCoordinates1.y, wG.width, wG.height, ZG),
          yG = bG._fetchR(GG._properties.randomNoiseCoordinates1.z, GG._properties.randomNoiseCoordinates2.x, wG.width, wG.height, ZG),
          kG = bG._fetchR(GG._properties.randomNoiseCoordinates2.y, GG._properties.randomNoiseCoordinates2.z, wG.width, wG.height, ZG),
          UG = LG.j.mK[0],
          YG = LG.j.mK[1];
        UG.fGG((2 * SG - 1) * bG.noiseStrength.x, (2 * yG - 1) * bG.noiseStrength.y, (2 * kG - 1) * bG.noiseStrength.z), UG.scaleToRef(bG._tempScaledUpdateSpeed, YG), GG.direction.addInPlace(YG)
      }
    }

    function Kb(GG, bG) {
      bG.gravity.scaleToRef(bG._tempScaledUpdateSpeed, bG._scaledGravity), GG.direction.addInPlace(bG._scaledGravity)
    }

    function hb(GG, bG) {
      GG.size = (0, QG.RandomRange)(bG.minSize, bG.maxSize), GG.scale.fGG((0, QG.RandomRange)(bG.minScaleX, bG.maxScaleX), (0, QG.RandomRange)(bG.minScaleY, bG.maxScaleY))
    }

    function db(GG, bG) {
      GG._properties.currentSizeGradient = bG._sizeGradients[0], GG._properties.currentSize1 = GG._properties.currentSizeGradient.getFactor(), GG.size = GG._properties.currentSize1, bG._sizeGradients.length > 1 ? GG._properties.currentSize2 = bG._sizeGradients[1].getFactor() : GG._properties.currentSize2 = GG._properties.currentSize1, GG.scale.fGG((0, QG.RandomRange)(bG.minScaleX, bG.maxScaleX), (0, QG.RandomRange)(bG.minScaleY, bG.maxScaleY))
    }

    function Jb(GG, bG) {
      const ZG = bG._actualFrame / bG.targetStopDuration;
      wG.m.GetCurrentGradient(ZG, bG._startSizeGradients, ((ZG, wG, SG) => {
        ZG !== bG._currentStartSizeGradient && (bG._currentStartSize1 = bG._currentStartSize2, bG._currentStartSize2 = wG.getFactor(), bG._currentStartSizeGradient = ZG);
        const LG = (0, QG.Lerp)(bG._currentStartSize1, bG._currentStartSize2, SG);
        GG.scale.scaleInPlace(LG)
      }))
    }

    function rb(GG, bG) {
      wG.m.GetCurrentGradient(bG._ratio, bG._sizeGradients, ((bG, ZG, wG) => {
        bG !== GG._properties.currentSizeGradient && (GG._properties.currentSize1 = GG._properties.currentSize2, GG._properties.currentSize2 = ZG.getFactor(), GG._properties.currentSizeGradient = bG), GG.size = (0, QG.Lerp)(GG._properties.currentSize1, GG._properties.currentSize2, wG)
      }))
    }

    function zb(GG, bG) {
      GG.remapData = new LG.t(0, 1, 0, 1)
    }

    function Eb(GG, bG) {
      bG._colorRemapGradients && bG._colorRemapGradients.length > 0 && wG.m.GetCurrentGradient(bG._ratio, bG._colorRemapGradients, ((bG, ZG, wG) => {
        const SG = (0, QG.Lerp)(bG.factor1, ZG.factor1, wG),
          LG = (0, QG.Lerp)(bG.factor2, ZG.factor2, wG);
        GG.remapData.x = SG, GG.remapData.y = LG - SG
      })), bG._alphaRemapGradients && bG._alphaRemapGradients.length > 0 && wG.m.GetCurrentGradient(bG._ratio, bG._alphaRemapGradients, ((bG, ZG, wG) => {
        const SG = (0, QG.Lerp)(bG.factor1, ZG.factor1, wG),
          LG = (0, QG.Lerp)(bG.factor2, ZG.factor2, wG);
        GG.remapData.z = SG, GG.remapData.w = LG - SG
      }))
    }

    function ob(GG, bG) {
      const ZG = (0, QG.Clamp)(bG._actualFrame / bG.targetStopDuration);
      wG.m.GetCurrentGradient(ZG, bG._lifeTimeGradients, ((bG, wG) => {
        const SG = bG,
          LG = wG,
          yG = SG.getFactor(),
          kG = LG.getFactor(),
          UG = (ZG - SG.gradient) / (LG.gradient - SG.gradient);
        GG.lifeTime = (0, QG.Lerp)(yG, kG, UG)
      })), bG._emitPower = (0, QG.RandomRange)(bG.minEmitPower, bG.maxEmitPower)
    }

    function Xb(GG, bG) {
      GG.lifeTime = (0, QG.RandomRange)(bG.minLifeTime, bG.maxLifeTime), bG._emitPower = (0, QG.RandomRange)(bG.minEmitPower, bG.maxEmitPower)
    }

    function ub(GG, bG) {
      0 === bG._emitPower ? (GG._properties.initialDirection ? GG._properties.initialDirection.oW(GG.direction) : GG._properties.initialDirection = GG.direction.clone(), GG.direction.set(0, 0, 0)) : (GG._properties.initialDirection = null, GG.direction.scaleInPlace(bG._emitPower)), GG.direction.addInPlace(bG._inheritedVelocityOffset)
    }

    function ib(GG, bG) {
      GG.angularSpeed = (0, QG.RandomRange)(bG.minAngularSpeed, bG.maxAngularSpeed), GG.angle = (0, QG.RandomRange)(bG.minInitialRotation, bG.maxInitialRotation)
    }

    function Cb(GG, bG) {
      GG._properties.currentAngularSpeedGradient = bG._angularSpeedGradients[0], GG.angularSpeed = GG._properties.currentAngularSpeedGradient.getFactor(), GG._properties.currentAngularSpeed1 = GG.angularSpeed, bG._angularSpeedGradients.length > 1 ? GG._properties.currentAngularSpeed2 = bG._angularSpeedGradients[1].getFactor() : GG._properties.currentAngularSpeed2 = GG._properties.currentAngularSpeed1, GG.angle = (0, QG.RandomRange)(bG.minInitialRotation, bG.maxInitialRotation)
    }

    function Wb(GG, bG) {
      GG._properties.initialStartSpriteCellId = bG.startSpriteCellID, GG._properties.initialEndSpriteCellId = bG.endSpriteCellID, GG._properties.initialSpriteCellLoop = bG.spriteCellLoop
    }

    function mb(GG, bG) {
      GG.previousItem = bG.previousItem, GG.nextItem = bG, bG.previousItem && (bG.previousItem.nextItem = GG), bG.previousItem = GG
    }

    function Ib(GG, bG) {
      GG.previousItem = bG, GG.nextItem = bG.nextItem, bG.nextItem && (bG.nextItem.previousItem = GG), bG.nextItem = GG
    }

    function Fb(GG) {
      GG.previousItem && (GG.previousItem.nextItem = GG.nextItem), GG.nextItem && (GG.nextItem.previousItem = GG.previousItem)
    }
    var vb = ZG(40750);
    class ab extends XG {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(GG) {
        this._startDirectionFunction !== GG && (this._startDirectionFunction = GG, this._directionCreation.process = GG ? Gb : BG)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(GG) {
        this._startPositionFunction !== GG && (this._startPositionFunction = GG, this._positionCreation.process = GG ? kb : yb)
      }
      set onDispose(GG) {
        this._onDisposeObserver && this.Gl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Gl.add(GG)
      }
      get Tu() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(GG) {
        this._useRampGradients !== GG && (this._useRampGradients = GG, this._resetEffect(), GG ? (this._rampCreation = {
          process: zb,
          previousItem: null,
          nextItem: null
        }, Ib(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: Eb,
          previousItem: null,
          nextItem: null
        }, Ib(this._remapGradientProcessing, this._gravityProcessing))) : (Fb(this._rampCreation), Fb(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(GG) {
        this._isLocal !== GG && (this._isLocal = GG, GG ? (this._isLocalCreation = {
          process: Ub,
          previousItem: null,
          nextItem: null
        }, Ib(this._isLocalCreation, this._positionCreation)) : Fb(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(GG) {
        this._animationSheetEnabled !== GG && (this._animationSheetEnabled = GG, GG ? (this._sheetCreation = {
          process: Wb,
          previousItem: null,
          nextItem: null
        }, Ib(this._sheetCreation, this._colorDeadCreation)) : Fb(this._sheetCreation), this._reset())
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
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[GG]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[GG] ?? this._customWrappers[0]
      }
      setCustomEffect(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[bG] = new nG.c(this._engine), this._customWrappers[bG].effect = GG, this._customWrappers[bG].drawContext && (this._customWrappers[bG].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new SG.c), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(GG) {
        if (this.noiseTexture !== GG) {
          if (this._noiseTexture = GG, !GG) return Fb(this._noiseCreation), void Fb(this._noiseProcessing);
          this._noiseCreation = {
            process: fb,
            previousItem: null,
            nextItem: null
          }, Ib(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: Qb,
            previousItem: null,
            nextItem: null
          }, Ib(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          yG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          kG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          YG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        sG || (sG = !0, aG(AG.f, MG)), (0, qG.b)(), super(GG), this._emitterInverseWorldMatrix = LG.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new LG.p, this.Gl = new SG.c, this.onStoppedObservable = new SG.c, this.onStartedObservable = new SG.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new VG.d(0, 0, 0, 0), this._colorDiff = new VG.d(0, 0, 0, 0), this._scaledGravity = LG.p.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = GG => {}, this.recycleParticle = GG => {
          const bG = this._particles.pop();
          bG !== GG && bG.copyTo(GG), bG.metadata = null, this._stockParticles.push(bG)
        }, this._createParticle = () => {
          let GG;
          return 0 !== this._stockParticles.length ? (GG = this._stockParticles.pop(), GG._reset()) : GG = new iG(this), this._prepareParticle(GG), GG
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = bG, this._epsilon = kG, ZG && "Scene" !== ZG.getClassName() ? (this._engine = ZG, this.defaultProjectionMatrix = LG.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = ZG || UG.c.LastCreatedScene, this._engine = this._scene.CK(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.lE.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: Xb,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: yb,
          previousItem: null,
          nextItem: null
        }, Ib(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: BG,
          previousItem: null,
          nextItem: null
        }, Ib(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: ub,
          previousItem: null,
          nextItem: null
        }, Ib(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: hb,
          previousItem: null,
          nextItem: null
        }, Ib(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: ib,
          previousItem: null,
          nextItem: null
        }, Ib(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: TG,
          previousItem: null,
          nextItem: null
        }, Ib(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: HG,
          previousItem: null,
          nextItem: null
        }, Ib(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, YG || (this._colorProcessing = {
          process: NG,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: xG,
          previousItem: null,
          nextItem: null
        }, Ib(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: Lb,
          previousItem: null,
          nextItem: null
        }, Ib(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Yb,
          previousItem: null,
          nextItem: null
        }, Ib(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: Kb,
          previousItem: null,
          nextItem: null
        }, Ib(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = yG, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new nG.c(this._engine)
        }, this._customWrappers[0].effect = wG, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new pG.c, this.updateFunction = GG => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((GG => {
            this._noiseTextureData = GG
          })));
          const bG = GG === this._particles;
          for (let ZG = 0; ZG < GG.length; ZG++) {
            const wG = GG[ZG];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const SG = wG.age;
            if (wG.age += this._tempScaledUpdateSpeed, wG.age > wG.lifeTime) {
              const GG = wG.age - SG,
                bG = wG.lifeTime - SG;
              this._tempScaledUpdateSpeed = bG * this._tempScaledUpdateSpeed / GG, wG.age = wG.lifeTime
            }
            this._ratio = wG.age / wG.lifeTime, wG._properties.directionScale = this._tempScaledUpdateSpeed;
            let LG = this._updateQueueStart;
            for (; LG;) LG.process(wG, this), LG = LG.nextItem;
            if (this._isAnimationSheetEnabled && !YG && wG.updateCellIndex(), wG._inheritParticleInfoToSubEmitters(), wG.age >= wG.lifeTime) {
              if (this._emitFromParticle(wG), wG._properties.attachedSubEmitters) {
                for (const GG of wG._properties.attachedSubEmitters) GG.particleSystem.disposeOnStop = !0, GG.particleSystem.stop();
                wG._properties.attachedSubEmitters = null
              }
              this.recycleParticle(wG), bG && ZG--
            } else;
          }
        }
      }
      serialize(GG) {
        throw new Error("Method not implemented.")
      }
      clone(GG, bG) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = ob : this._lifeTimeCreation.process = Xb
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: Jb,
          previousItem: null,
          nextItem: null
        }, Ib(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Fb(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(GG) {
        this.targetStopDuration !== GG && (this._targetStopDuration = GG, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(GG, bG, ZG) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, GG, bG, ZG), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(GG) {
        return this._removeFactorGradient(this._lifeTimeGradients, GG), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(GG, bG, ZG) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = db, this._sizeGradientProcessing = {
          process: rb,
          previousItem: null,
          nextItem: null
        }, mb(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, GG, bG, ZG), this
      }
      removeSizeGradient(GG) {
        return this._removeFactorGradient(this._sizeGradients, GG), 0 === this._sizeGradients?.length && (Fb(this._sizeGradientProcessing), this._sizeCreation.process = hb), this
      }
      addColorRemapGradient(GG, bG, ZG) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, GG, bG, ZG), this
      }
      removeColorRemapGradient(GG) {
        return this._removeFactorGradient(this._colorRemapGradients, GG), this
      }
      addAlphaRemapGradient(GG, bG, ZG) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, GG, bG, ZG), this
      }
      removeAlphaRemapGradient(GG) {
        return this._removeFactorGradient(this._alphaRemapGradients, GG), this
      }
      addAngularSpeedGradient(GG, bG, ZG) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = Cb, this._angularSpeedGradientProcessing = {
          process: OG,
          previousItem: null,
          nextItem: null
        }, mb(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, GG, bG, ZG), this
      }
      removeAngularSpeedGradient(GG) {
        return this._removeFactorGradient(this._angularSpeedGradients, GG), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = ib, Fb(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(GG, bG, ZG) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: bb,
          previousItem: null,
          nextItem: null
        }, Ib(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: wb,
          previousItem: null,
          nextItem: null
        }, mb(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, GG, bG, ZG), this
      }
      removeVelocityGradient(GG) {
        return this._removeFactorGradient(this._velocityGradients, GG), 0 === this._velocityGradients?.length && (Fb(this._velocityCreation), Fb(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(GG, bG, ZG) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: Zb,
          previousItem: null,
          nextItem: null
        }, Ib(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Sb,
          previousItem: null,
          nextItem: null
        }, Ib(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, GG, bG, ZG), this
      }
      removeLimitVelocityGradient(GG) {
        return this._removeFactorGradient(this._limitVelocityGradients, GG), 0 === this._limitVelocityGradients?.length && (Fb(this._limitVelocityCreation), Fb(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(GG, bG, ZG) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: Vb,
          previousItem: null,
          nextItem: null
        }, mb(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: pb,
          previousItem: null,
          nextItem: null
        }, mb(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, GG, bG, ZG), this
      }
      removeDragGradient(GG) {
        return this._removeFactorGradient(this._dragGradients, GG), 0 === this._dragGradients?.length && (Fb(this._dragCreation), Fb(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(GG, bG, ZG) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, GG, bG, ZG), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(GG) {
        return this._removeFactorGradient(this._startSizeGradients, GG), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const GG = new Uint8Array(4 * this._rawTextureWidth),
          bG = VG.l.Color3[0];
        for (let ZG = 0; ZG < this._rawTextureWidth; ZG++) {
          const SG = ZG / this._rawTextureWidth;
          wG.m.GetCurrentGradient(SG, this._rampGradients, ((wG, SG, LG) => {
            VG.c.LerpToRef(wG.color, SG.color, LG, bG), GG[4 * ZG] = 255 * bG.r, GG[4 * ZG + 1] = 255 * bG.g, GG[4 * ZG + 2] = 255 * bG.b, GG[4 * ZG + 3] = 255
          }))
        }
        this._rampGradientsTexture = kG.e.CreateRGBATexture(GG, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((GG, bG) => GG.gradient < bG.gradient ? -1 : GG.gradient > bG.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(GG, bG) {
        this._rampGradients || (this._rampGradients = []);
        const ZG = new wG.h(GG, bG);
        return this._rampGradients.push(ZG), this._syncRampGradientTexture(), this
      }
      removeRampGradient(GG) {
        return this._removeGradientAndTexture(GG, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(GG, bG, ZG) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = tG, this._colorProcessing.process = DG);
        const SG = new wG.e(GG, bG, ZG);
        return this._colorGradients.push(SG), this._colorGradients.sort(((GG, bG) => GG.gradient < bG.gradient ? -1 : GG.gradient > bG.gradient ? 1 : 0)), this
      }
      removeColorGradient(GG) {
        if (!this._colorGradients) return this;
        let bG = 0;
        for (const ZG of this._colorGradients) {
          if (ZG.gradient === GG) {
            this._colorGradients.splice(bG, 1);
            break
          }
          bG++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = TG, this._colorProcessing.process = NG), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const GG of this._drawWrappers)
            if (GG)
              for (const bG of GG) bG?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(GG, bG, ZG, wG, SG) {
        return SG[4 * (((GG = .5 * Math.abs(GG) + .5) * ZG % ZG | 0) + ((bG = .5 * Math.abs(bG) + .5) * wG % wG | 0) * ZG)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const GG = this._engine,
          bG = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * bG), this._vertexBuffer = new yG.c(GG, this._vertexData, !0, bG);
        let ZG = 0;
        const wG = this._vertexBuffer.createVertexBuffer(yG.l.PositionKind, ZG, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[yG.l.PositionKind] = wG, ZG += 3;
        const SG = this._vertexBuffer.createVertexBuffer(yG.l.ColorKind, ZG, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[yG.l.ColorKind] = SG, ZG += 4;
        const LG = this._vertexBuffer.createVertexBuffer("angle", ZG, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = LG, ZG += 1;
        const kG = this._vertexBuffer.createVertexBuffer("size", ZG, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = kG, ZG += 2, this._isAnimationSheetEnabled) {
          const GG = this._vertexBuffer.createVertexBuffer("cellIndex", ZG, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = GG, ZG += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const GG = this._vertexBuffer.createVertexBuffer("direction", ZG, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = GG, ZG += 3
        }
        if (this._useRampGradients) {
          const GG = this._vertexBuffer.createVertexBuffer("remapData", ZG, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = GG, ZG += 4
        }
        let UG;
        if (this._useInstancing) {
          const bG = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new yG.c(GG, bG, !1, 2), UG = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else UG = this._vertexBuffer.createVertexBuffer("offset", ZG, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = UG, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const GG = [],
          bG = [];
        let ZG = 0;
        for (let wG = 0; wG < this._capacity; wG++) GG.push(ZG), GG.push(ZG + 1), GG.push(ZG + 2), GG.push(ZG), GG.push(ZG + 2), GG.push(ZG + 3), bG.push(ZG, ZG + 1, ZG + 1, ZG + 2, ZG + 2, ZG + 3, ZG + 3, ZG, ZG, ZG + 3), ZG += 4;
        this._indexBuffer = this._engine.createIndexBuffer(GG), this._linesIndexBuffer = this._engine.createIndexBuffer(bG)
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
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (GG) return this.startDelay = GG, void setTimeout((() => {
          this.start(0)
        }), GG);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const GG = this.noiseTexture;
          if (GG && GG.onGeneratedObservable) GG.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let bG = 0; bG < this.preWarmCycles; bG++) this.animate(!0), GG.render()
            }))
          }));
          else
            for (let bG = 0; bG < this.preWarmCycles; bG++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(GG))
      }
      _postStop(GG) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(GG, bG, ZG, wG) {
        let SG = GG * this._vertexBufferSize;
        const yG = LG.j.mK[0].oW(this._scene?.floatingOriginOffset || LG.p.ZeroReadOnly);
        if (this._vertexData[SG++] = bG.position.x + this.worldOffset.x - yG.x, this._vertexData[SG++] = bG.position.y + this.worldOffset.y - yG.y, this._vertexData[SG++] = bG.position.z + this.worldOffset.z - yG.z, this._vertexData[SG++] = bG.color.r, this._vertexData[SG++] = bG.color.g, this._vertexData[SG++] = bG.color.b, this._vertexData[SG++] = bG.color.a, this._vertexData[SG++] = bG.angle, this._vertexData[SG++] = bG.scale.x * bG.size, this._vertexData[SG++] = bG.scale.y * bG.size, this._isAnimationSheetEnabled && (this._vertexData[SG++] = bG.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[SG++] = bG.direction.x, this._vertexData[SG++] = bG.direction.y, this._vertexData[SG++] = bG.direction.z);
        else if (bG._properties.initialDirection) {
          let GG = bG._properties.initialDirection;
          this.isLocal && (LG.p.TransformNormalToRef(GG, this._emitterWorldMatrix, LG.j.mK[0]), GG = LG.j.mK[0]), 0 === GG.x && 0 === GG.z && (GG.x = .001), this._vertexData[SG++] = GG.x, this._vertexData[SG++] = GG.y, this._vertexData[SG++] = GG.z
        } else {
          let GG = bG.direction;
          this.isLocal && (LG.p.TransformNormalToRef(GG, this._emitterWorldMatrix, LG.j.mK[0]), GG = LG.j.mK[0]), 0 === GG.x && 0 === GG.z && (GG.x = .001), this._vertexData[SG++] = GG.x, this._vertexData[SG++] = GG.y, this._vertexData[SG++] = GG.z
        }
        this._useRampGradients && bG.remapData && (this._vertexData[SG++] = bG.remapData.x, this._vertexData[SG++] = bG.remapData.y, this._vertexData[SG++] = bG.remapData.z, this._vertexData[SG++] = bG.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === ZG ? ZG = this._epsilon : 1 === ZG && (ZG = 1 - this._epsilon), 0 === wG ? wG = this._epsilon : 1 === wG && (wG = 1 - this._epsilon)), this._vertexData[SG++] = ZG, this._vertexData[SG] = wG)
      }
      _prepareParticle(GG) {}
      _createNewOnes(GG) {
        let bG;
        for (let ZG = 0; ZG < GG && this._particles.length !== this._capacity; ZG++) {
          bG = this._createParticle(), this._particles.push(bG);
          let GG = this._createQueueStart;
          for (; GG;) GG.process(bG, this), GG = GG.nextItem;
          bG._inheritParticleInfoToSubEmitters()
        }
      }
      _update(GG) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const GG = this.emitter;
          this._emitterWorldMatrix = GG.getWorldMatrix()
        } else {
          const GG = this.emitter;
          this._emitterWorldMatrix = LG.e.Translation(GG.x, GG.y, GG.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(GG)
      }
      static _GetAttributeNamesOrOptions() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wG = [yG.l.PositionKind, yG.l.ColorKind, "angle", "offset", "size"];
        return GG && wG.push("cellIndex"), bG || wG.push("direction"), ZG && wG.push("remapData"), wG
      }
      static _GetEffectCreationOptions() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wG = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, gG.b)(wG), GG && wG.push("particlesInfos"), bG && wG.push("logarithmicDepthConstant"), ZG && (wG.push("vFogInfos"), wG.push("vFogColor")), wG
      }
      fillDefines(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, gG.k)(this, this._scene, GG), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && GG.push("#define FOG")), this._isAnimationSheetEnabled && GG.push("#define ANIMATESHEET"), this.useLogarithmicDepth && GG.push("#define LOGARITHMICDEPTH"), bG === XG.BLENDMODE_MULTIPLY && GG.push("#define BLENDMULTIPLYMODE"), this.isLocal && GG.push("#define LOCAL"), this._useRampGradients && GG.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (GG.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            GG.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            GG.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && GG.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            GG.push("#define BILLBOARDMODE_ALL")
        }
        ZG && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), GG.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(GG, bG, ZG) {
        bG.push(...ab._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), GG.push(...ab._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), ZG.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, RG.g)(GG, this._imageProcessingConfigurationDefines), (0, RG.e)(ZG, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(GG) {
        var bG;
        const ZG = this._getCustomDrawWrapper(GG);
        if (ZG?.effect) return ZG;
        const wG = [];
        this.fillDefines(wG, GG);
        const LG = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          yG = vb.e._PrepareStringDefines(LG, wG),
          kG = yG ? vb.e.GetConfiguration(LG) : void 0;
        let UG = this._drawWrappers[LG];
        UG || (UG = this._drawWrappers[LG] = [], 0 === LG || this._renderPassObserver || (this._renderPassObserver = ((bG = this._engine)._onReleaseRenderPassObservable ?? (bG._onReleaseRenderPassObservable = new SG.c)).add((GG => {
          const bG = this._drawWrappers[GG];
          if (bG) {
            for (const GG of bG) GG?.dispose();
            delete this._drawWrappers[GG]
          }
        }))));
        let YG = UG[GG];
        YG || (YG = new nG.c(this._engine), YG.drawContext && (YG.drawContext.useInstancing = this._useInstancing), UG[GG] = YG);
        const VG = wG.join("\n");
        if (YG.defines !== VG) {
          const GG = [],
            bG = [],
            ZG = [];
          this.fillUniformsAttributesAndSamplerNames(bG, GG, ZG), yG && (bG.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== kG?.defines.PREPASS_LOCAL_POSITION_INDEX && bG.push("inverseEmitterWM", "geometryWorldOffset")), YG.setEffect(this._engine.createEffect("particles", {
            attributes: GG,
            uniformsNames: bG,
            samplers: ZG,
            defines: VG,
            shaderLanguage: this._shaderLanguage,
            multiTarget: yG,
            indexParameters: yG ? {
              buffersCount: kG?._mrtCount ?? 0
            } : void 0
          }, this._engine), VG)
        }
        return YG
      }
      _bindGeometryRendering(GG) {
        const bG = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          ZG = vb.e.GetConfiguration(bG);
        if (!ZG?._defines) return;
        GG.setFloat("objectId", 0), GG.setInt("meshBlendTag", 0);
        const wG = this._scene?.activeCamera;
        if (GG.setFloat2("cameraInfo", wG?.minZ ?? 0, wG?.maxZ ?? 1), this.isLocal && void 0 !== ZG.defines.PREPASS_LOCAL_POSITION_INDEX) {
          GG.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const bG = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || LG.p.ZeroReadOnly, LG.j.mK[0]);
          GG.setVector3("geometryWorldOffset", bG)
        }
      }
      animate() {
        let GG, bG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!bG && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (bG ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) GG = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const bG = this._calculateEmitRate();
            GG = bG * this._scaledUpdateSpeed | 0, this._newPartsExcess += bG * this._scaledUpdateSpeed - GG
          }
          if (this._newPartsExcess > 1 && (GG += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? GG = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(GG), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !bG) {
            let GG = 0;
            for (let bG = 0; bG < this._particles.length; bG++) {
              const ZG = this._particles[bG];
              this._appendParticleVertices(GG, ZG), GG += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const GG = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  bG = this._particles.length;
                bG < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, bG * GG, this._fixedCapacityHighWaterMark * GG), this._fixedCapacityHighWaterMark = bG, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const GG = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * GG), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let GG = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const bG = this._actualFrame / this.targetStopDuration;
          wG.m.GetCurrentGradient(bG, this._emitRateGradients, ((bG, ZG, wG) => {
            bG !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = ZG.getFactor(), this._currentEmitRateGradient = bG), GG = (0, QG.Lerp)(this._currentEmitRate1, this._currentEmitRate2, wG)
          }))
        }
        return GG
      }
      _appendParticleVertices(GG, bG) {
        this._appendParticleVertex(GG++, bG, 0, 0), this._useInstancing || (this._appendParticleVertex(GG++, bG, 1, 0), this._appendParticleVertex(GG++, bG, 1, 1), this._appendParticleVertex(GG, bG, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !ab.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ZG.e(351).then((() => ZG(61842))), ZG.e(345).then((() => ZG(61849)))])) : await Promise.all([ZG.e(334).then((() => ZG(61857))), Promise.all([ZG.e(327), ZG.e(360)]).then((() => ZG(61860)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== XG.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(XG.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(XG.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(GG) {
        const bG = this._getWrapper(GG),
          ZG = bG.effect,
          wG = this._engine;
        wG.enableEffect(bG);
        const SG = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        ZG.setTexture("diffuseSampler", this.particleTexture), ZG.setMatrix("view", SG);
        const yG = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (ZG.setMatrix("projection", yG), this._isAnimationSheetEnabled && this.particleTexture) {
          const GG = this.particleTexture.getBaseSize();
          ZG.setFloat3("particlesInfos", this.spriteCellWidth / GG.width, this.spriteCellHeight / GG.height, this.spriteCellWidth / GG.width)
        }
        if (ZG.setVector2("translationPivot", this.translationPivot), ZG.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const GG = this._scene.activeCamera;
          ZG.setVector3("eyePosition", GG.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), ZG.setTexture("rampSampler", this._rampGradientsTexture));
        const kG = ZG.defines;
        this._scene && ((0, gG.e)(ZG, this, this._scene), this.applyFog && (0, eG.l)(this._scene, void 0, ZG)), kG.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (SG.invertToRef(LG.j.Matrix[0]), ZG.setMatrix("invView", LG.j.Matrix[0])), ZG._multiTarget && this._bindGeometryRendering(ZG), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? wG.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, ZG) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, ZG)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? wG.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, ZG) : wG.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, ZG), this.useLogarithmicDepth && this._scene && (0, eG.w)(kG, ZG, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(ZG), this._setEngineBasedOnBlendMode(GG), ZG._multiTarget && vb.e._BindZeroAlphaDiscard(wG, ZG);
        let UG = !1;
        try {
          vb.e._BindAttachmentsForEffect(wG, ZG) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(ZG), this._useInstancing ? this._scene?.forceWireframe ? wG.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : wG.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? wG.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : wG.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), UG = !0)
        } finally {
          vb.e._RestoreAttachments(wG)
        }
        return UG ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const GG = this._engine;
        let bG;
        return GG.setState && (GG.setState(!1), this.forceDepthWrite && GG.setDepthWrite(!0)), bG = this.blendMode === XG.BLENDMODE_MULTIPLYADD ? this._render(XG.BLENDMODE_MULTIPLY) + this._render(XG.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), bG
      }
      _onDispose() {}
      dispose() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), GG && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), GG && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(bG, ZG), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const GG = this._scene.lE.indexOf(this);
          GG > -1 && this._scene.lE.splice(GG, 1), this._scene._activeParticleSystems.dispose()
        }
        this.Gl.notifyObservers(this), this.Gl.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    ab.ForceGLSL = !1;
    var cb, lb = ZG(37484);
    ! function(GG) {
      GG[GG.ATTACHED = 0] = "ATTACHED", GG[GG.END = 1] = "END"
    }(cb || (cb = {}));
    class jb {
      constructor(GG) {
        if (this.particleSystem = GG, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !GG.emitter || !GG.emitter.dispose) {
          const bG = (0, lb.e)("BABYLON.AbstractMesh");
          GG.emitter = new bG("SubemitterSystemEmitter", GG.Dv()), GG._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let GG = this.particleSystem.emitter;
        if (GG) {
          if (GG instanceof LG.p) GG = GG.clone();
          else if (-1 !== GG.getClassName().indexOf("Mesh")) {
            GG = new((0, lb.e)("BABYLON.Mesh"))("", GG.Dv()), GG.isVisible = !1
          }
        } else GG = new LG.p;
        const bG = new jb(this.particleSystem.clone(this.particleSystem.name, GG));
        return bG.particleSystem.name += "Clone", bG.type = this.type, bG.inheritDirection = this.inheritDirection, bG.inheritedVelocityAmount = this.inheritedVelocityAmount, bG.particleSystem._disposeEmitterOnDispose = !0, bG.particleSystem.disposeOnStop = !0, bG
      }
      serialize() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bG = {};
        return bG.type = this.type, bG.inheritDirection = this.inheritDirection, bG.inheritedVelocityAmount = this.inheritedVelocityAmount, bG.particleSystem = this.particleSystem.serialize(GG), bG
      }
      static _ParseParticleSystem(GG, bG, ZG) {
        throw (0, PG.i)("ParseParticle")
      }
      static Parse(GG, bG, ZG) {
        const wG = GG.particleSystem,
          SG = new jb(jb._ParseParticleSystem(wG, bG, ZG, !0));
        return SG.type = GG.type, SG.inheritDirection = GG.inheritDirection, SG.inheritedVelocityAmount = GG.inheritedVelocityAmount, SG.particleSystem._isSubEmitter = !0, SG
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Pb = ZG(40280),
      Mb = ZG(40416);
    const Ab = () => {};
    class sb {
      constructor() {
        this.particlePositionGenerator = Ab, this.particleDestinationGenerator = Ab, this.particleDirectionGenerator = Ab
      }
      startDirectionFunction(GG, bG, ZG, wG) {
        const SG = LG.j.mK[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== Ab) this.particleDirectionGenerator(-1, ZG, SG);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== Ab) {
          this.particleDestinationGenerator(-1, ZG, SG);
          const GG = LG.j.mK[1];
          SG.subtractToRef(ZG.position, GG), GG.scaleToRef(1 / ZG.lifeTime, SG)
        } else SG.set(0, 0, 0);
        wG ? bG.oW(SG) : LG.p.TransformNormalToRef(SG, GG, bG)
      }
      startPositionFunction(GG, bG, ZG, wG) {
        const SG = LG.j.mK[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== Ab ? this.particlePositionGenerator(-1, ZG, SG) : SG.set(0, 0, 0), wG ? bG.oW(SG) : LG.p.TransformCoordinatesToRef(SG, GG, bG)
      }
      clone() {
        const GG = new sb;
        return fG.e.DeepCopy(this, GG), GG
      }
      applyToShader(GG) {}
      buildUniformLayout(GG) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const GG = {};
        return GG.type = this.getClassName(), GG.particlePositionGenerator = this.particlePositionGenerator, GG.particleDestinationGenerator = this.particleDestinationGenerator, GG
      }
      parse(GG) {
        GG.particlePositionGenerator && (this.particlePositionGenerator = GG.particlePositionGenerator), GG.particleDestinationGenerator && (this.particleDestinationGenerator = GG.particleDestinationGenerator)
      }
    }
    const qb = LG.p.Zero(),
      nb = LG.p.Zero(),
      gb = LG.p.Zero();
    class eb {
      constructor() {
        this.strength = 0, this.position = LG.p.Zero()
      }
      _processParticle(GG, bG) {
        this.position.subtractToRef(GG.position, qb);
        const ZG = qb.lengthSquared() + 1;
        qb.normalize().scaleToRef(this.strength / ZG, nb), nb.scaleToRef(bG._tempScaledUpdateSpeed, gb), GG.direction.addInPlace(gb)
      }
      serialize() {
        return {
          position: this.position.mwG(),
          strength: this.strength
        }
      }
    }
    const Rb = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class Tb extends ab {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = GG => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const bG = Math.floor(Math.random() * this._subEmitters.length);
          for (const ZG of this._subEmitters[bG])
            if (1 === ZG.type) {
              const bG = ZG.clone();
              GG._inheritParticleInfoToSubEmitter(bG), bG.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(bG.particleSystem), bG.particleSystem.start()
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
      set flowMap(GG) {
        this._flowMap !== GG && (this._flowMap = GG, this._flowMapUpdate && (Fb(this._flowMapUpdate), this._flowMapUpdate = null), GG && (this._flowMapUpdate = {
          process: GG => {
            const bG = this.Dv()?.getTransformMatrix();
            this._flowMap._processParticle(GG, this.flowMapStrength * this._tempScaledUpdateSpeed, bG)
          },
          previousItem: null,
          nextItem: null
        }, Ib(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(GG) {
        super.addAttractor(GG), 1 === this._attractors.length && (this._attractorUpdate = {
          process: GG => {
            for (const bG of this._attractors) bG._processParticle(GG, this)
          },
          previousItem: null,
          nextItem: null
        }, Ib(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(GG) {
        super.removeAttractor(GG), 0 === this._attractors.length && this._attractorUpdate && Fb(this._attractorUpdate)
      }
      start() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(GG)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const GG of this.subEmitters) GG instanceof Tb ? this._subEmitters.push([new jb(GG)]) : GG instanceof jb ? this._subEmitters.push([GG]) : GG instanceof Array && this._subEmitters.push(GG)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const GG of this.activeSubSystems) GG.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const GG = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== GG && this._rootParticleSystem.activeSubSystems.splice(GG, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(GG) {
        GG && this._stopSubEmitters()
      }
      _prepareParticle(GG) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const bG = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          GG._properties.attachedSubEmitters = [];
          for (const ZG of bG)
            if (0 === ZG.type) {
              const bG = ZG.clone();
              GG._properties.attachedSubEmitters.push(bG), bG.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), GG && this.particles)
          for (const ZG of this.particles)
            if (ZG._properties.attachedSubEmitters)
              for (let GG = ZG._properties.attachedSubEmitters.length - 1; GG >= 0; GG -= 1) ZG._properties.attachedSubEmitters[GG].dispose();
        if (bG && this.activeSubSystems)
          for (let ZG = this.activeSubSystems.length - 1; ZG >= 0; ZG -= 1) this.activeSubSystems[ZG].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let GG = 0; GG < this._subEmitters.length; GG++)
            for (const bG of this._subEmitters[GG]) bG.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(GG, bG, ZG, wG) {
        let SG;
        SG = ZG instanceof Pb.c ? null : ZG;
        const yG = (0, lb.e)("BABYLON.Texture");
        if (yG && SG)
          if (GG.texture) bG.particleTexture = yG.Parse(GG.texture, SG, wG);
          else if (GG.textureName) {
          const ZG = GG.textureSettings;
          if (bG.particleTexture = new yG(wG + GG.textureName, SG, !1, void 0 === GG.invertY || GG.invertY, ZG ? ZG.samplingMode : void 0), bG.particleTexture.name = GG.textureName, ZG) {
            const GG = bG.particleTexture;
            for (const bG of Rb) void 0 !== ZG[bG] && (GG[bG] = ZG[bG])
          }
        }
        if (GG.emitterId || 0 === GG.emitterId || void 0 !== GG.emitter ? (GG.emitterId || 0 === GG.emitterId) && SG ? (bG.emitter = SG.getLastMeshById(GG.emitterId), bG.emitter || (bG.emitter = LG.p.Zero())) : bG.emitter = LG.p.FromArray(GG.emitter) : bG.emitter = LG.p.Zero(), bG.isLocal = !!GG.isLocal, void 0 !== GG.renderingGroupId && (bG.renderingGroupId = GG.renderingGroupId), void 0 !== GG.isBillboardBased && (bG.isBillboardBased = GG.isBillboardBased), void 0 !== GG.billboardMode && (bG.billboardMode = GG.billboardMode), void 0 !== GG.useLogarithmicDepth && (bG.useLogarithmicDepth = GG.useLogarithmicDepth), GG.animations) {
          for (let ZG = 0; ZG < GG.animations.length; ZG++) {
            const wG = GG.animations[ZG],
              SG = (0, lb.e)("BABYLON.Animation");
            SG && bG.animations.push(SG.Parse(wG))
          }
          bG.beginAnimationOnStart = GG.beginAnimationOnStart, bG.beginAnimationFrom = GG.beginAnimationFrom, bG.beginAnimationTo = GG.beginAnimationTo, bG.beginAnimationLoop = GG.beginAnimationLoop
        }
        if (GG.autoAnimate && SG && SG.beginAnimation(bG, GG.autoAnimateFrom, GG.autoAnimateTo, GG.autoAnimateLoop, GG.autoAnimateSpeed || 1), bG.startDelay = 0 | GG.startDelay, bG.minAngularSpeed = GG.minAngularSpeed, bG.maxAngularSpeed = GG.maxAngularSpeed, bG.minSize = GG.minSize, bG.maxSize = GG.maxSize, GG.minScaleX && (bG.minScaleX = GG.minScaleX, bG.maxScaleX = GG.maxScaleX, bG.minScaleY = GG.minScaleY, bG.maxScaleY = GG.maxScaleY), void 0 !== GG.preWarmCycles && (bG.preWarmCycles = GG.preWarmCycles, bG.preWarmStepOffset = GG.preWarmStepOffset), void 0 !== GG.minInitialRotation && (bG.minInitialRotation = GG.minInitialRotation, bG.maxInitialRotation = GG.maxInitialRotation), bG.minLifeTime = GG.minLifeTime, bG.maxLifeTime = GG.maxLifeTime, bG.minEmitPower = GG.minEmitPower, bG.maxEmitPower = GG.maxEmitPower, bG.emitRate = GG.emitRate, bG.gravity = LG.p.FromArray(GG.gravity), GG.noiseStrength && (bG.noiseStrength = LG.p.FromArray(GG.noiseStrength)), bG.color1 = VG.d.FromArray(GG.color1), bG.color2 = VG.d.FromArray(GG.color2), bG.colorDead = VG.d.FromArray(GG.colorDead), bG.updateSpeed = GG.updateSpeed, bG.targetStopDuration = GG.targetStopDuration, bG.blendMode = GG.blendMode, GG.colorGradients)
          for (const LG of GG.colorGradients) bG.addColorGradient(LG.gradient, VG.d.FromArray(LG.color1), LG.color2 ? VG.d.FromArray(LG.color2) : void 0);
        if (GG.rampGradients) {
          for (const ZG of GG.rampGradients) bG.addRampGradient(ZG.gradient, VG.c.FromArray(ZG.color));
          bG.useRampGradients = GG.useRampGradients
        }
        if (GG.colorRemapGradients)
          for (const LG of GG.colorRemapGradients) bG.addColorRemapGradient(LG.gradient, void 0 !== LG.factor1 ? LG.factor1 : LG.factor, LG.factor2);
        if (GG.alphaRemapGradients)
          for (const LG of GG.alphaRemapGradients) bG.addAlphaRemapGradient(LG.gradient, void 0 !== LG.factor1 ? LG.factor1 : LG.factor, LG.factor2);
        if (GG.sizeGradients)
          for (const LG of GG.sizeGradients) bG.addSizeGradient(LG.gradient, void 0 !== LG.factor1 ? LG.factor1 : LG.factor, LG.factor2);
        if (GG.angularSpeedGradients)
          for (const LG of GG.angularSpeedGradients) bG.addAngularSpeedGradient(LG.gradient, void 0 !== LG.factor1 ? LG.factor1 : LG.factor, LG.factor2);
        if (GG.velocityGradients)
          for (const LG of GG.velocityGradients) bG.addVelocityGradient(LG.gradient, void 0 !== LG.factor1 ? LG.factor1 : LG.factor, LG.factor2);
        if (GG.dragGradients)
          for (const LG of GG.dragGradients) bG.addDragGradient(LG.gradient, void 0 !== LG.factor1 ? LG.factor1 : LG.factor, LG.factor2);
        if (GG.emitRateGradients)
          for (const LG of GG.emitRateGradients) bG.addEmitRateGradient(LG.gradient, void 0 !== LG.factor1 ? LG.factor1 : LG.factor, LG.factor2);
        if (GG.startSizeGradients)
          for (const LG of GG.startSizeGradients) bG.addStartSizeGradient(LG.gradient, void 0 !== LG.factor1 ? LG.factor1 : LG.factor, LG.factor2);
        if (GG.lifeTimeGradients)
          for (const LG of GG.lifeTimeGradients) bG.addLifeTimeGradient(LG.gradient, void 0 !== LG.factor1 ? LG.factor1 : LG.factor, LG.factor2);
        if (GG.limitVelocityGradients) {
          for (const ZG of GG.limitVelocityGradients) bG.addLimitVelocityGradient(ZG.gradient, void 0 !== ZG.factor1 ? ZG.factor1 : ZG.factor, ZG.factor2);
          bG.limitVelocityDamping = GG.limitVelocityDamping
        }
        if (GG.noiseTexture && SG) {
          const ZG = (0, lb.e)("BABYLON.ProceduralTexture");
          bG.noiseTexture = ZG.Parse(GG.noiseTexture, SG, wG)
        }
        let kG;
        if (GG.particleEmitterType) {
          switch (GG.particleEmitterType.type) {
            case "SphereParticleEmitter":
              kG = new dG;
              break;
            case "SphereDirectedParticleEmitter":
              kG = new JG;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              kG = new zG;
              break;
            case "ConeDirectedParticleEmitter":
              kG = new EG;
              break;
            case "CylinderParticleEmitter":
              kG = new rG.f;
              break;
            case "CylinderDirectedParticleEmitter":
              kG = new rG.d;
              break;
            case "HemisphericParticleEmitter":
              kG = new hG;
              break;
            case "PointParticleEmitter":
              kG = new KG;
              break;
            case "MeshParticleEmitter":
              kG = new oG;
              break;
            case "CustomParticleEmitter":
              kG = new sb;
              break;
            default:
              kG = new pG.c
          }
          kG.parse(GG.particleEmitterType, SG)
        } else kG = new pG.c, kG.parse(GG, SG);
        bG.particleEmitterType = kG, bG.startSpriteCellID = GG.startSpriteCellID, bG.endSpriteCellID = GG.endSpriteCellID, bG.spriteCellLoop = GG.spriteCellLoop ?? !0, bG.spriteCellWidth = GG.spriteCellWidth, bG.spriteCellHeight = GG.spriteCellHeight, bG.spriteCellChangeSpeed = GG.spriteCellChangeSpeed, bG.spriteRandomStartCell = GG.spriteRandomStartCell, bG.disposeOnStop = GG.disposeOnStop ?? !1, bG.manualEmitCount = GG.manualEmitCount ?? -1
      }
      static Parse(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SG = arguments.length > 4 ? arguments[4] : void 0;
        const yG = GG.name;
        let kG, UG, YG = null,
          pG = null;
        if (bG instanceof Pb.c ? kG = bG : (UG = bG, kG = UG.CK()), GG.customShader && (0, PG.b)(kG.createEffectForParticles)) {
          pG = GG.customShader;
          const bG = pG.shaderOptions.defines.length > 0 ? pG.shaderOptions.defines.join("\n") : "";
          YG = kG.createEffectForParticles(pG.shaderPath.fragmentElement, pG.shaderOptions.uniforms, pG.shaderOptions.samplers, bG)
        }
        const fG = new Tb(yG, SG || GG.rp, bG, YG, GG.isAnimationSheetEnabled);
        if (fG.customShader = pG, fG._rootUrl = ZG, GG.id && (fG.id = GG.id), GG.subEmitters) {
          fG.subEmitters = [];
          for (const wG of GG.subEmitters) {
            const GG = [];
            for (const SG of wG) GG.push(jb.Parse(SG, bG, ZG));
            fG.subEmitters.push(GG)
          }
        }
        if (GG.attractors)
          for (const VG of GG.attractors) {
            const GG = new eb;
            GG.position = LG.p.FromArray(VG.position), GG.strength = VG.strength, fG.addAttractor(GG)
          }
        return Tb._Parse(GG, fG, bG, ZG), GG.textureMask && (fG.textureMask = VG.d.FromArray(GG.textureMask)), GG.worldOffset && (fG.worldOffset = LG.p.FromArray(GG.worldOffset)), GG.preventAutoStart && (fG.preventAutoStart = GG.preventAutoStart), GG.metadata && (fG.metadata = GG.metadata), wG || fG.preventAutoStart || fG.start(), fG
      }
      serialize() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bG = {};
        if (Tb._Serialize(bG, this, GG), bG.textureMask = this.textureMask.mwG(), bG.customShader = this.customShader, bG.preventAutoStart = this.preventAutoStart, bG.worldOffset = this.worldOffset.mwG(), this.metadata && (bG.metadata = this.metadata), this.subEmitters) {
          bG.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const ZG of this._subEmitters) {
            const wG = [];
            for (const bG of ZG) bG.particleSystem.doNotSerialize || wG.push(bG.serialize(GG));
            bG.subEmitters.push(wG)
          }
        }
        if (this._attractors && this._attractors.length) {
          bG.attractors = [];
          for (const GG of this._attractors) bG.attractors.push(GG.serialize())
        }
        return bG
      }
      static _Serialize(GG, bG, ZG) {
        if (GG.name = bG.name, GG.id = bG.id, GG.rp = bG.getCapacity(), GG.disposeOnStop = bG.disposeOnStop, GG.manualEmitCount = bG.manualEmitCount, bG.emitter.position) {
          const ZG = bG.emitter;
          GG.emitterId = ZG.id
        } else {
          const ZG = bG.emitter;
          GG.emitter = ZG.mwG()
        }
        if (bG.particleEmitterType && (GG.particleEmitterType = bG.particleEmitterType.serialize()), bG.particleTexture)
          if (ZG) GG.texture = bG.particleTexture.serialize();
          else {
            const ZG = bG.particleTexture;
            GG.textureName = bG.particleTexture.name, GG.invertY = !!ZG._invertY;
            const wG = {};
            for (const GG of Rb) wG[GG] = ZG[GG];
            wG.samplingMode = ZG.samplingMode, GG.textureSettings = wG
          } GG.isLocal = bG.isLocal, Mb.b.AppendSerializedAnimations(bG, GG), GG.beginAnimationOnStart = bG.beginAnimationOnStart, GG.beginAnimationFrom = bG.beginAnimationFrom, GG.beginAnimationTo = bG.beginAnimationTo, GG.beginAnimationLoop = bG.beginAnimationLoop, GG.startDelay = bG.startDelay, GG.renderingGroupId = bG.renderingGroupId, GG.isBillboardBased = bG.isBillboardBased, GG.billboardMode = bG.billboardMode, GG.minAngularSpeed = bG.minAngularSpeed, GG.maxAngularSpeed = bG.maxAngularSpeed, GG.minSize = bG.minSize, GG.maxSize = bG.maxSize, GG.minScaleX = bG.minScaleX, GG.maxScaleX = bG.maxScaleX, GG.minScaleY = bG.minScaleY, GG.maxScaleY = bG.maxScaleY, GG.minEmitPower = bG.minEmitPower, GG.maxEmitPower = bG.maxEmitPower, GG.minLifeTime = bG.minLifeTime, GG.maxLifeTime = bG.maxLifeTime, GG.emitRate = bG.emitRate, GG.gravity = bG.gravity.mwG(), GG.noiseStrength = bG.noiseStrength.mwG(), GG.color1 = bG.color1.mwG(), GG.color2 = bG.color2.mwG(), GG.colorDead = bG.colorDead.mwG(), GG.updateSpeed = bG.updateSpeed, GG.targetStopDuration = bG.targetStopDuration, GG.blendMode = bG.blendMode, GG.preWarmCycles = bG.preWarmCycles, GG.preWarmStepOffset = bG.preWarmStepOffset, GG.minInitialRotation = bG.minInitialRotation, GG.maxInitialRotation = bG.maxInitialRotation, GG.startSpriteCellID = bG.startSpriteCellID, GG.spriteCellLoop = bG.spriteCellLoop, GG.endSpriteCellID = bG.endSpriteCellID, GG.spriteCellChangeSpeed = bG.spriteCellChangeSpeed, GG.spriteCellWidth = bG.spriteCellWidth, GG.spriteCellHeight = bG.spriteCellHeight, GG.spriteRandomStartCell = bG.spriteRandomStartCell, GG.isAnimationSheetEnabled = bG.isAnimationSheetEnabled, GG.useLogarithmicDepth = bG.useLogarithmicDepth;
        const wG = bG.getColorGradients();
        if (wG) {
          GG.colorGradients = [];
          for (const bG of wG) {
            const ZG = {
              gradient: bG.gradient,
              color1: bG.color1.mwG()
            };
            bG.color2 ? ZG.color2 = bG.color2.mwG() : ZG.color2 = bG.color1.mwG(), GG.colorGradients.push(ZG)
          }
        }
        const SG = bG.getRampGradients();
        if (SG) {
          GG.rampGradients = [];
          for (const bG of SG) {
            const ZG = {
              gradient: bG.gradient,
              color: bG.color.mwG()
            };
            GG.rampGradients.push(ZG)
          }
          GG.useRampGradients = bG.useRampGradients
        }
        const LG = bG.getColorRemapGradients();
        if (LG) {
          GG.colorRemapGradients = [];
          for (const bG of LG) {
            const ZG = {
              gradient: bG.gradient,
              factor1: bG.factor1
            };
            void 0 !== bG.factor2 ? ZG.factor2 = bG.factor2 : ZG.factor2 = bG.factor1, GG.colorRemapGradients.push(ZG)
          }
        }
        const yG = bG.getAlphaRemapGradients();
        if (yG) {
          GG.alphaRemapGradients = [];
          for (const bG of yG) {
            const ZG = {
              gradient: bG.gradient,
              factor1: bG.factor1
            };
            void 0 !== bG.factor2 ? ZG.factor2 = bG.factor2 : ZG.factor2 = bG.factor1, GG.alphaRemapGradients.push(ZG)
          }
        }
        const kG = bG.getSizeGradients();
        if (kG) {
          GG.sizeGradients = [];
          for (const bG of kG) {
            const ZG = {
              gradient: bG.gradient,
              factor1: bG.factor1
            };
            void 0 !== bG.factor2 ? ZG.factor2 = bG.factor2 : ZG.factor2 = bG.factor1, GG.sizeGradients.push(ZG)
          }
        }
        const UG = bG.getAngularSpeedGradients();
        if (UG) {
          GG.angularSpeedGradients = [];
          for (const bG of UG) {
            const ZG = {
              gradient: bG.gradient,
              factor1: bG.factor1
            };
            void 0 !== bG.factor2 ? ZG.factor2 = bG.factor2 : ZG.factor2 = bG.factor1, GG.angularSpeedGradients.push(ZG)
          }
        }
        const YG = bG.getVelocityGradients();
        if (YG) {
          GG.velocityGradients = [];
          for (const bG of YG) {
            const ZG = {
              gradient: bG.gradient,
              factor1: bG.factor1
            };
            void 0 !== bG.factor2 ? ZG.factor2 = bG.factor2 : ZG.factor2 = bG.factor1, GG.velocityGradients.push(ZG)
          }
        }
        const VG = bG.getDragGradients();
        if (VG) {
          GG.dragGradients = [];
          for (const bG of VG) {
            const ZG = {
              gradient: bG.gradient,
              factor1: bG.factor1
            };
            void 0 !== bG.factor2 ? ZG.factor2 = bG.factor2 : ZG.factor2 = bG.factor1, GG.dragGradients.push(ZG)
          }
        }
        const pG = bG.getEmitRateGradients();
        if (pG) {
          GG.emitRateGradients = [];
          for (const bG of pG) {
            const ZG = {
              gradient: bG.gradient,
              factor1: bG.factor1
            };
            void 0 !== bG.factor2 ? ZG.factor2 = bG.factor2 : ZG.factor2 = bG.factor1, GG.emitRateGradients.push(ZG)
          }
        }
        const fG = bG.getStartSizeGradients();
        if (fG) {
          GG.startSizeGradients = [];
          for (const bG of fG) {
            const ZG = {
              gradient: bG.gradient,
              factor1: bG.factor1
            };
            void 0 !== bG.factor2 ? ZG.factor2 = bG.factor2 : ZG.factor2 = bG.factor1, GG.startSizeGradients.push(ZG)
          }
        }
        const QG = bG.getLifeTimeGradients();
        if (QG) {
          GG.lifeTimeGradients = [];
          for (const bG of QG) {
            const ZG = {
              gradient: bG.gradient,
              factor1: bG.factor1
            };
            void 0 !== bG.factor2 ? ZG.factor2 = bG.factor2 : ZG.factor2 = bG.factor1, GG.lifeTimeGradients.push(ZG)
          }
        }
        const KG = bG.getLimitVelocityGradients();
        if (KG) {
          GG.limitVelocityGradients = [];
          for (const bG of KG) {
            const ZG = {
              gradient: bG.gradient,
              factor1: bG.factor1
            };
            void 0 !== bG.factor2 ? ZG.factor2 = bG.factor2 : ZG.factor2 = bG.factor1, GG.limitVelocityGradients.push(ZG)
          }
          GG.limitVelocityDamping = bG.limitVelocityDamping
        }
        bG.noiseTexture && (GG.noiseTexture = bG.noiseTexture.serialize())
      }
      clone(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wG = {
          ...this._customWrappers
        };
        let SG = null;
        const LG = this._engine;
        if ((0, PG.b)(LG.createEffectForParticles) && null != this.customShader) {
          SG = this.customShader;
          const GG = SG.shaderOptions.defines.length > 0 ? SG.shaderOptions.defines.join("\n") : "",
            bG = LG.createEffectForParticles(SG.shaderPath.fragmentElement, SG.shaderOptions.uniforms, SG.shaderOptions.samplers, GG);
          wG[0] ? wG[0].effect = bG : this.setCustomEffect(bG, 0)
        }
        const yG = this.serialize(ZG),
          kG = !1 === ZG && this.particleTexture ? this.particleTexture.clone() : null;
        kG && (yG.textureName = void 0);
        const UG = Tb.Parse(yG, this._scene || this._engine, this._rootUrl);
        return UG.name = GG, UG.customShader = SG, UG._customWrappers = wG, kG && (UG.particleTexture = kG), void 0 === bG && (bG = this.emitter), this.noiseTexture && (UG.noiseTexture = this.noiseTexture.clone()), UG.emitter = bG, this.preventAutoStart || UG.start(), UG
      }
    }
    Tb.BILLBOARDMODE_Y = 2, Tb.BILLBOARDMODE_ALL = 7, Tb.BILLBOARDMODE_STRETCHED = 8, Tb.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Hb = !1;
    Hb || (Hb = !0, jb._ParseParticleSystem = Tb.Parse)
  },
  42068: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      SkyMaterial: () => zG,
      _MaxColorValueForRenderTarget: () => rG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(40416),
      yG = ZG(37432),
      kG = ZG(40660),
      UG = ZG(40720),
      YG = ZG(42032),
      VG = ZG(41552),
      pG = ZG(40467),
      fG = ZG(37484),
      QG = ZG(40747),
      KG = ZG(40725),
      hG = ZG(40709),
      dG = ZG(40705);
    class JG extends kG.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function rG(GG) {
      switch (GG) {
        case YG.d.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case YG.d.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let zG = (() => {
      var GG;
      let bG, kG, YG, fG, zG, EG, oG, XG, uG, iG, CG, WG, mG, IG, FG, vG = UG.c,
        aG = [],
        cG = [],
        lG = [],
        jG = [],
        PG = [],
        MG = [],
        AG = [],
        sG = [],
        qG = [],
        nG = [],
        gG = [],
        eG = [],
        RG = [],
        TG = [],
        HG = [],
        tG = [],
        DG = [],
        NG = [],
        OG = [],
        xG = [],
        BG = [],
        Gb = [],
        bb = [],
        Zb = [],
        wb = [],
        Sb = [],
        Lb = [],
        yb = [],
        kb = [],
        Ub = [];
      return GG = class extends vG {
        constructor(GG, bG) {
          super(GG, bG, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, wG.n)(this, aG, 1), this.turbidity = ((0, wG.n)(this, cG), (0, wG.n)(this, lG, 10)), this.rayleigh = ((0, wG.n)(this, jG), (0, wG.n)(this, PG, 2)), this.mieCoefficient = ((0, wG.n)(this, MG), (0, wG.n)(this, AG, .005)), this.mieDirectionalG = ((0, wG.n)(this, sG), (0, wG.n)(this, qG, .8)), this.distance = ((0, wG.n)(this, nG), (0, wG.n)(this, gG, 500)), this.inclination = ((0, wG.n)(this, eG), (0, wG.n)(this, RG, .49)), this.azimuth = ((0, wG.n)(this, TG), (0, wG.n)(this, HG, .25)), this.sunPosition = ((0, wG.n)(this, tG), (0, wG.n)(this, DG, new yG.mK(0, 100, 0))), this.useSunPosition = ((0, wG.n)(this, NG), (0, wG.n)(this, OG, !1)), this.cameraOffset = ((0, wG.n)(this, xG), (0, wG.n)(this, BG, yG.mK.Zero())), this.up = ((0, wG.n)(this, Gb), (0, wG.n)(this, bb, yG.mK.Up())), this.dithering = ((0, wG.n)(this, Zb), (0, wG.n)(this, wb, !1)), this.rawHdrOutput = ((0, wG.n)(this, Sb), (0, wG.n)(this, Lb, !1)), this.cloudiness = ((0, wG.n)(this, yb), (0, wG.n)(this, kb, 0)), this._cameraPosition = ((0, wG.n)(this, Ub), yG.mK.Zero()), this._skyOrientation = new yG.Quaternion
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
        isReadyForSubMesh(bG, ZG) {
          const wG = ZG._drawWrapper;
          if (this.isFrozen && wG.effect && wG._wasPreviouslyReady) return !0;
          ZG.materialDefines || (ZG.materialDefines = new JG);
          const SG = ZG.materialDefines,
            LG = this.Dv();
          if (this._isReadyForSubMesh(ZG)) return !0;
          if ((0, dG.cb)(bG, LG, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, SG, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, dG.U)(bG, SG, !0, !1), SG.IMAGEPROCESSINGPOSTPROCESS !== LG.imageProcessingConfiguration.applyByPostProcess && SG.markAsMiscDirty(), SG.DITHER !== this.dithering && SG.markAsMiscDirty(), SG.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && SG.markAsMiscDirty(), SG.isDirty) {
            SG.markAsProcessed(), LG.resetCachedMaterial();
            const bG = new KG.e;
            SG.FOG && bG.addFallback(1, "FOG"), SG.IMAGEPROCESSINGPOSTPROCESS = LG.imageProcessingConfiguration.applyByPostProcess, SG.DITHER = this.dithering, SG.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const wG = [VG.c.PositionKind];
            SG.VERTEXCOLOR && wG.push(VG.c.ColorKind);
            const yG = "sky",
              kG = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, hG.b)(kG);
            const UG = SG.toString();
            ZG.setEffect(LG.CK().createEffect(yG, {
              attributes: wG,
              uniformsNames: kG,
              uniformBuffersNames: [],
              samplers: [],
              defines: UG,
              fallbacks: bG,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: GG._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, LG.CK()), SG, this._materialContext)
          }
          return !(!ZG.effect || !ZG.effect.isReady()) && (SG._renderId = LG.getRenderId(), wG._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(GG, bG, ZG) {
          const wG = this.Dv(),
            SG = ZG.materialDefines;
          if (!SG) return;
          const LG = ZG.effect;
          if (!LG) return;
          this._activeEffect = LG, this.bindOnlyWorldMatrix(GG), this._activeEffect.setMatrix("viewProjection", wG.getTransformMatrix()), this._mustRebind(wG, LG, ZG) && ((0, hG.e)(LG, this, wG), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, dG.w)(SG, LG, wG)), wG.fogEnabled && bG.applyFog && wG.fogMode !== pG.d.FOGMODE_NONE && this._activeEffect.setMatrix("view", wG.getViewMatrix()), (0, dG.l)(wG, bG, this._activeEffect, this.rawHdrOutput);
          const kG = wG.activeCamera;
          if (kG) {
            const GG = kG.getWorldMatrix();
            this._cameraPosition.x = GG.m[12], this._cameraPosition.y = GG.m[13], this._cameraPosition.z = GG.m[14], this._activeEffect.setVector3("cameraPosition", yG.TmpVectors.mK[0].oW(this._cameraPosition).twG(wG.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const GG = wG.CK()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", rG(GG?.texture?.type))
          }
          if (!this.useSunPosition) {
            const GG = Math.PI * (this.inclination - .5),
              bG = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(bG) * Math.cos(GG), this.sunPosition.y = this.distance * Math.sin(-GG), this.sunPosition.z = this.distance * Math.sin(bG) * Math.cos(GG), yG.Quaternion.FromUnitVectorsToRef(yG.mK.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(bG, this._activeEffect, ZG)
        }
        getAnimatables() {
          return []
        }
        dispose(GG) {
          super.dispose(GG)
        }
        clone(bG) {
          return LG.b.Clone((() => new GG(bG, this.Dv())), this)
        }
        serialize() {
          const GG = super.serialize();
          return GG.customType = "BABYLON.SkyMaterial", GG
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(bG, ZG, wG) {
          return LG.b.Parse((() => new GG(bG.name, ZG)), bG, ZG, wG)
        }
      }, (() => {
        const ZG = "function" === typeof Symbol && Symbol.metadata ? Object.create(vG[Symbol.metadata] ?? null) : void 0;
        bG = [(0, SG.Q)()], kG = [(0, SG.Q)()], YG = [(0, SG.Q)()], fG = [(0, SG.Q)()], zG = [(0, SG.Q)()], EG = [(0, SG.Q)()], oG = [(0, SG.Q)()], XG = [(0, SG.Q)()], uG = [(0, SG.M)()], iG = [(0, SG.Q)()], CG = [(0, SG.M)()], WG = [(0, SG.M)()], mG = [(0, SG.Q)()], IG = [(0, SG.Q)()], FG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: GG => "luminance" in GG,
            get: GG => GG.luminance,
            set: (GG, bG) => {
              GG.luminance = bG
            }
          },
          metadata: ZG
        }, aG, cG), (0, wG.k)(null, null, kG, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: GG => "turbidity" in GG,
            get: GG => GG.turbidity,
            set: (GG, bG) => {
              GG.turbidity = bG
            }
          },
          metadata: ZG
        }, lG, jG), (0, wG.k)(null, null, YG, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: GG => "rayleigh" in GG,
            get: GG => GG.rayleigh,
            set: (GG, bG) => {
              GG.rayleigh = bG
            }
          },
          metadata: ZG
        }, PG, MG), (0, wG.k)(null, null, fG, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: GG => "mieCoefficient" in GG,
            get: GG => GG.mieCoefficient,
            set: (GG, bG) => {
              GG.mieCoefficient = bG
            }
          },
          metadata: ZG
        }, AG, sG), (0, wG.k)(null, null, zG, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: GG => "mieDirectionalG" in GG,
            get: GG => GG.mieDirectionalG,
            set: (GG, bG) => {
              GG.mieDirectionalG = bG
            }
          },
          metadata: ZG
        }, qG, nG), (0, wG.k)(null, null, EG, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: GG => "distance" in GG,
            get: GG => GG.distance,
            set: (GG, bG) => {
              GG.distance = bG
            }
          },
          metadata: ZG
        }, gG, eG), (0, wG.k)(null, null, oG, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: GG => "inclination" in GG,
            get: GG => GG.inclination,
            set: (GG, bG) => {
              GG.inclination = bG
            }
          },
          metadata: ZG
        }, RG, TG), (0, wG.k)(null, null, XG, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: GG => "azimuth" in GG,
            get: GG => GG.azimuth,
            set: (GG, bG) => {
              GG.azimuth = bG
            }
          },
          metadata: ZG
        }, HG, tG), (0, wG.k)(null, null, uG, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: GG => "sunPosition" in GG,
            get: GG => GG.sunPosition,
            set: (GG, bG) => {
              GG.sunPosition = bG
            }
          },
          metadata: ZG
        }, DG, NG), (0, wG.k)(null, null, iG, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: GG => "useSunPosition" in GG,
            get: GG => GG.useSunPosition,
            set: (GG, bG) => {
              GG.useSunPosition = bG
            }
          },
          metadata: ZG
        }, OG, xG), (0, wG.k)(null, null, CG, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: GG => "cameraOffset" in GG,
            get: GG => GG.cameraOffset,
            set: (GG, bG) => {
              GG.cameraOffset = bG
            }
          },
          metadata: ZG
        }, BG, Gb), (0, wG.k)(null, null, WG, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: GG => "up" in GG,
            get: GG => GG.up,
            set: (GG, bG) => {
              GG.up = bG
            }
          },
          metadata: ZG
        }, bb, Zb), (0, wG.k)(null, null, mG, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: GG => "dithering" in GG,
            get: GG => GG.dithering,
            set: (GG, bG) => {
              GG.dithering = bG
            }
          },
          metadata: ZG
        }, wb, Sb), (0, wG.k)(null, null, IG, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: GG => "rawHdrOutput" in GG,
            get: GG => GG.rawHdrOutput,
            set: (GG, bG) => {
              GG.rawHdrOutput = bG
            }
          },
          metadata: ZG
        }, Lb, yb), (0, wG.k)(null, null, FG, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: GG => "cloudiness" in GG,
            get: GG => GG.cloudiness,
            set: (GG, bG) => {
              GG.cloudiness = bG
            }
          },
          metadata: ZG
        }, kb, Ub), ZG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ZG
        })
      })(), GG._ShaderLoader = new QG.c((() => [ZG.e(335).then((() => ZG(61867))), ZG.e(328).then((() => ZG(61870)))]), (() => [ZG.e(352).then((() => ZG(61873))), ZG.e(346).then((() => ZG(61881)))])), GG
    })();
    (0, fG.i)("BABYLON.SkyMaterial", zG)
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);