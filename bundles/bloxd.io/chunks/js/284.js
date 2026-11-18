export const id = 284;
export const ids = [284];
export const modules = {
  40339: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ
    });
    var FJ = ZJ(38890),
      UJ = ZJ(40344);
    class eJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = ZJ, this.hFJ = [], this._maxBlockCapacity = cJ || 64, this._selectionContent = new FJ.b(1024), this._creationFunc = JJ
      }
      update(JJ, cJ, ZJ) {
        UJ.c._CreateBlocks(JJ, cJ, ZJ, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      BZJ(JJ) {
        for (let cJ = 0; cJ < this.blocks.length; cJ++) {
          this.blocks[cJ].addEntry(JJ)
        }
      }
      kS(JJ) {
        for (let cJ = 0; cJ < this.blocks.length; cJ++) {
          this.blocks[cJ].removeEntry(JJ)
        }
      }
      select(JJ, cJ) {
        this._selectionContent.reset();
        for (let ZJ = 0; ZJ < this.blocks.length; ZJ++) {
          this.blocks[ZJ].select(JJ, this._selectionContent, cJ)
        }
        return cJ ? this._selectionContent.concat(this.hFJ) : this._selectionContent.concatWithNoDuplicate(this.hFJ), this._selectionContent
      }
      intersects(JJ, cJ, ZJ) {
        this._selectionContent.reset();
        for (let FJ = 0; FJ < this.blocks.length; FJ++) {
          this.blocks[FJ].intersects(JJ, cJ, this._selectionContent, ZJ)
        }
        return ZJ ? this._selectionContent.concat(this.hFJ) : this._selectionContent.concatWithNoDuplicate(this.hFJ), this._selectionContent
      }
      intersectsRay(JJ) {
        this._selectionContent.reset();
        for (let cJ = 0; cJ < this.blocks.length; cJ++) {
          this.blocks[cJ].intersectsRay(JJ, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.hFJ), this._selectionContent
      }
    }
    eJ.CreationFuncForMeshes = (JJ, cJ) => {
      const ZJ = JJ.rM();
      !JJ.isBlocked && ZJ.boundingBox.intersectsMinMax(cJ.ZFJ, cJ.cFJ) && cJ.entries.push(JJ)
    }, eJ.CreationFuncForSubMeshes = (JJ, cJ) => {
      JJ.rM().boundingBox.intersectsMinMax(cJ.ZFJ, cJ.cFJ) && cJ.entries.push(JJ)
    }
  },
  40344: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(39072);
    class eJ {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.entries = [], this.DFJ = new Array, this._capacity = ZJ, this._depth = FJ, this._maxDepth = UJ, this._creationFunc = eJ, this._minPoint = JJ, this._maxPoint = cJ, this.DFJ.push(JJ.clone()), this.DFJ.push(cJ.clone()), this.DFJ.push(JJ.clone()), this.DFJ[2].x = cJ.x, this.DFJ.push(JJ.clone()), this.DFJ[3].y = cJ.y, this.DFJ.push(JJ.clone()), this.DFJ[4].z = cJ.z, this.DFJ.push(cJ.clone()), this.DFJ[5].z = JJ.z, this.DFJ.push(cJ.clone()), this.DFJ[6].x = JJ.x, this.DFJ.push(cJ.clone()), this.DFJ[7].y = JJ.y
      }
      get qh() {
        return this._capacity
      }
      get ZFJ() {
        return this._minPoint
      }
      get cFJ() {
        return this._maxPoint
      }
      addEntry(JJ) {
        if (this.blocks)
          for (let cJ = 0; cJ < this.blocks.length; cJ++) {
            this.blocks[cJ].addEntry(JJ)
          } else this._creationFunc(JJ, this), this.entries.length > this.qh && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(JJ) {
        if (this.blocks) {
          for (let cJ = 0; cJ < this.blocks.length; cJ++) {
            this.blocks[cJ].removeEntry(JJ)
          }
          return
        }
        const cJ = this.entries.indexOf(JJ);
        cJ > -1 && this.entries.splice(cJ, 1)
      }
      addEntries(JJ) {
        for (let cJ = 0; cJ < JJ.length; cJ++) {
          const ZJ = JJ[cJ];
          this.addEntry(ZJ)
        }
      }
      select(JJ, cJ, ZJ) {
        if (UJ.e.IsInFrustum(this.DFJ, JJ)) {
          if (this.blocks) {
            for (let FJ = 0; FJ < this.blocks.length; FJ++) {
              this.blocks[FJ].select(JJ, cJ, ZJ)
            }
            return
          }
          ZJ ? cJ.concat(this.entries) : cJ.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(JJ, cJ, ZJ, FJ) {
        if (UJ.e.IntersectsSphere(this._minPoint, this._maxPoint, JJ, cJ)) {
          if (this.blocks) {
            for (let UJ = 0; UJ < this.blocks.length; UJ++) {
              this.blocks[UJ].intersects(JJ, cJ, ZJ, FJ)
            }
            return
          }
          FJ ? ZJ.concat(this.entries) : ZJ.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(JJ, cJ) {
        if (JJ.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let ZJ = 0; ZJ < this.blocks.length; ZJ++) {
              this.blocks[ZJ].intersectsRay(JJ, cJ)
            }
            return
          }
          cJ.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        eJ._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(JJ, cJ, ZJ, UJ, XJ, AJ, qJ, jJ) {
        qJ.blocks = new Array;
        const YJ = new FJ.j((cJ.x - JJ.x) / 2, (cJ.y - JJ.y) / 2, (cJ.z - JJ.z) / 2);
        for (let FJ = 0; FJ < 2; FJ++)
          for (let cJ = 0; cJ < 2; cJ++)
            for (let hJ = 0; hJ < 2; hJ++) {
              const DJ = JJ.add(YJ.multiplyByFloats(FJ, cJ, hJ)),
                sJ = JJ.add(YJ.multiplyByFloats(FJ + 1, cJ + 1, hJ + 1)),
                nJ = new eJ(DJ, sJ, UJ, XJ + 1, AJ, jJ);
              nJ.addEntries(ZJ), qJ.blocks.push(nJ)
            }
      }
    }
  },
  40347: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => YJ
    });
    var FJ = ZJ(38874),
      UJ = ZJ(36174),
      eJ = ZJ(39202),
      XJ = ZJ(40294),
      AJ = ZJ(38933),
      qJ = ZJ(36192),
      jJ = ZJ(40339);
    class YJ {
      constructor(JJ) {
        this.name = AJ.c.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new XJ.y(UJ.j.Zero(), new UJ.j(1, 1, 1)), (JJ = JJ || qJ.c.LastCreatedScene) && (this.iG = JJ, this.iG.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.iG.getActiveSubMeshCandidates = JJ => this.getActiveSubMeshCandidates(JJ), this.iG.getCollidingSubMeshCandidates = (JJ, cJ) => this.getCollidingSubMeshCandidates(JJ, cJ), this.iG.getIntersectingSubMeshCandidates = (JJ, cJ) => this.getIntersectingSubMeshCandidates(JJ, cJ))
      }
      register() {
        this.iG.onMeshRemovedObservable.add((JJ => {
          const cJ = this.iG.selectionOctree;
          if (void 0 !== cJ && null !== cJ) {
            const ZJ = cJ.hFJ.indexOf(JJ); - 1 !== ZJ && cJ.hFJ.splice(ZJ, 1)
          }
        })), this.iG.onMeshImportedObservable.add((JJ => {
          const cJ = this.iG.selectionOctree;
          void 0 !== cJ && null !== cJ && cJ.BZJ(JJ)
        }))
      }
      getActiveMeshCandidates() {
        return this.iG.vFJ?.select(this.iG.frustumPlanes) || this.iG._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(JJ) {
        if (JJ._submeshesOctree && JJ.useOctreeForRenderingSelection) {
          return JJ._submeshesOctree.select(this.iG.frustumPlanes)
        }
        return this.iG._getDefaultSubMeshCandidates(JJ)
      }
      getIntersectingSubMeshCandidates(JJ, cJ) {
        if (JJ._submeshesOctree && JJ.useOctreeForPicking) {
          XJ.y.TransformToRef(cJ, JJ.getWorldMatrix(), this._tempRay);
          return JJ._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.iG._getDefaultSubMeshCandidates(JJ)
      }
      getCollidingSubMeshCandidates(JJ, cJ) {
        if (JJ._submeshesOctree && JJ.useOctreeForCollisions) {
          const ZJ = cJ._velocityWorldLength + Math.max(cJ._radius.x, cJ._radius.y, cJ._radius.z);
          return JJ._submeshesOctree.intersects(cJ._basePointWorld, ZJ)
        }
        return this.iG._getDefaultSubMeshCandidates(JJ)
      }
      rebuild() {}
      dispose() {}
    }
    let hJ = !1;
    hJ || (hJ = !0, FJ.e.prototype.createOrUpdateSelectionOctree = function() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        ZJ = this._getComponent(AJ.c.NAME_OCTREE);
      ZJ || (ZJ = new YJ(this), this.pZJ(ZJ)), this.vFJ || (this.vFJ = new jJ.e(jJ.e.CreationFuncForMeshes, JJ, cJ));
      const FJ = this.getWorldExtends();
      return this.vFJ.update(FJ.min, FJ.max, this.meshes), this.vFJ
    }, Object.defineProperty(FJ.e.prototype, "selectionOctree", {
      get: function() {
        return this.vFJ
      },
      enumerable: !0,
      configurable: !0
    }), eJ.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const ZJ = this.Qy();
      let FJ = ZJ._getComponent(AJ.c.NAME_OCTREE);
      FJ || (FJ = new YJ(ZJ), ZJ.pZJ(FJ)), this._submeshesOctree || (this._submeshesOctree = new jJ.e(jJ.e.CreationFuncForSubMeshes, JJ, cJ)), this.computeWorldMatrix(!0);
      const UJ = this.rM().boundingBox;
      return this._submeshesOctree.update(UJ.minimumWorld, UJ.maximumWorld, this.aE), this._submeshesOctree
    })
  },
  40294: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => bJ,
      h: () => GJ,
      l: () => nJ,
      m: () => sJ,
      n: () => IJ,
      o: () => SJ,
      s: () => VJ,
      t: () => yJ,
      v: () => KJ,
      y: () => hJ
    });
    var FJ = ZJ(36177),
      UJ = ZJ(36174),
      eJ = ZJ(36183),
      XJ = ZJ(39062),
      AJ = ZJ(38910),
      qJ = ZJ(36192),
      jJ = ZJ(38960);
    const YJ = {
      internalPickerForMesh: void 0
    };
    class hJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FJ.e;
        this.origin = JJ, this.direction = cJ, this.length = ZJ, this.epsilon = UJ
      }
      clone() {
        return new hJ(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const FJ = hJ._TmpVector3[0].K9(JJ.x - ZJ, JJ.y - ZJ, JJ.z - ZJ),
          UJ = hJ._TmpVector3[1].K9(cJ.x + ZJ, cJ.y + ZJ, cJ.z + ZJ);
        let eJ, XJ, AJ, qJ, jJ = 0,
          YJ = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < FJ.x || this.origin.x > UJ.x) return !1
        } else if (eJ = 1 / this.direction.x, XJ = (FJ.x - this.origin.x) * eJ, AJ = (UJ.x - this.origin.x) * eJ, AJ === -1 / 0 && (AJ = 1 / 0), XJ > AJ && (qJ = XJ, XJ = AJ, AJ = qJ), jJ = Math.max(XJ, jJ), YJ = Math.min(AJ, YJ), jJ > YJ) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < FJ.y || this.origin.y > UJ.y) return !1
        } else if (eJ = 1 / this.direction.y, XJ = (FJ.y - this.origin.y) * eJ, AJ = (UJ.y - this.origin.y) * eJ, AJ === -1 / 0 && (AJ = 1 / 0), XJ > AJ && (qJ = XJ, XJ = AJ, AJ = qJ), jJ = Math.max(XJ, jJ), YJ = Math.min(AJ, YJ), jJ > YJ) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < FJ.z || this.origin.z > UJ.z) return !1
        } else if (eJ = 1 / this.direction.z, XJ = (FJ.z - this.origin.z) * eJ, AJ = (UJ.z - this.origin.z) * eJ, AJ === -1 / 0 && (AJ = 1 / 0), XJ > AJ && (qJ = XJ, XJ = AJ, AJ = qJ), jJ = Math.max(XJ, jJ), YJ = Math.min(AJ, YJ), jJ > YJ) return !1;
        return !0
      }
      intersectsBox(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(JJ.minimum, JJ.maximum, cJ)
      }
      intersectsSphere(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZJ = JJ.center.x - this.origin.x,
          FJ = JJ.center.y - this.origin.y,
          UJ = JJ.center.z - this.origin.z,
          eJ = ZJ * ZJ + FJ * FJ + UJ * UJ,
          XJ = JJ.radius + cJ,
          AJ = XJ * XJ;
        if (eJ <= AJ) return !0;
        const qJ = ZJ * this.direction.x + FJ * this.direction.y + UJ * this.direction.z;
        if (qJ < 0) return !1;
        return eJ - qJ * qJ <= AJ
      }
      intersectsTriangle(JJ, cJ, ZJ) {
        const FJ = hJ._TmpVector3[0],
          eJ = hJ._TmpVector3[1],
          AJ = hJ._TmpVector3[2],
          qJ = hJ._TmpVector3[3],
          jJ = hJ._TmpVector3[4];
        cJ.subtractToRef(JJ, FJ), ZJ.subtractToRef(JJ, eJ), UJ.j.CrossToRef(this.direction, eJ, AJ);
        const YJ = UJ.j.Dot(FJ, AJ);
        if (0 === YJ) return null;
        const DJ = 1 / YJ;
        this.origin.subtractToRef(JJ, qJ);
        const sJ = UJ.j.Dot(qJ, AJ) * DJ;
        if (sJ < -this.epsilon || sJ > 1 + this.epsilon) return null;
        UJ.j.CrossToRef(qJ, FJ, jJ);
        const nJ = UJ.j.Dot(this.direction, jJ) * DJ;
        if (nJ < -this.epsilon || sJ + nJ > 1 + this.epsilon) return null;
        const GJ = UJ.j.Dot(eJ, jJ) * DJ;
        return GJ > this.length || GJ < 0 ? null : new XJ.b(1 - sJ - nJ, sJ, GJ)
      }
      intersectsPlane(JJ) {
        let cJ;
        const ZJ = UJ.j.Dot(JJ.normal, this.direction);
        if (Math.abs(ZJ) < 9.99999997475243e-7) return null;
        {
          const FJ = UJ.j.Dot(JJ.normal, this.origin);
          return cJ = (-JJ.d - FJ) / ZJ, cJ < 0 ? cJ < -9.99999997475243e-7 ? null : 0 : cJ
        }
      }
      intersectsAxis(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (JJ) {
          case "y": {
            const JJ = (this.origin.y - cJ) / this.direction.y;
            return JJ > 0 ? null : new UJ.j(this.origin.x + this.direction.x * -JJ, cJ, this.origin.z + this.direction.z * -JJ)
          }
          case "x": {
            const JJ = (this.origin.x - cJ) / this.direction.x;
            return JJ > 0 ? null : new UJ.j(cJ, this.origin.y + this.direction.y * -JJ, this.origin.z + this.direction.z * -JJ)
          }
          case "z": {
            const JJ = (this.origin.z - cJ) / this.direction.z;
            return JJ > 0 ? null : new UJ.j(this.origin.x + this.direction.x * -JJ, this.origin.y + this.direction.y * -JJ, cJ)
          }
          default:
            return null
        }
      }
      pFJ(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          eJ = arguments.length > 4 ? arguments[4] : void 0,
          XJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const AJ = UJ.h.Matrix[0];
        return JJ.getWorldMatrix().invertToRef(AJ), this._tmpRay ? hJ.TransformToRef(this, AJ, this._tmpRay) : this._tmpRay = hJ.Transform(this, AJ), JJ.intersects(this._tmpRay, cJ, ZJ, FJ, eJ, XJ)
      }
      intersectsMeshes(JJ, cJ, ZJ) {
        ZJ ? ZJ.length = 0 : ZJ = [];
        for (let FJ = 0; FJ < JJ.length; FJ++) {
          const UJ = this.pFJ(JJ[FJ], cJ);
          UJ.hit && ZJ.push(UJ)
        }
        return ZJ.sort(this._comparePickingInfo), ZJ
      }
      _comparePickingInfo(JJ, cJ) {
        return JJ.distance < cJ.distance ? -1 : JJ.distance > cJ.distance ? 1 : 0
      }
      intersectionSegment(JJ, cJ, ZJ) {
        const FJ = this.origin,
          eJ = UJ.h.Pn[0],
          XJ = UJ.h.Pn[1],
          AJ = UJ.h.Pn[2],
          qJ = UJ.h.Pn[3];
        cJ.subtractToRef(JJ, eJ), this.direction.scaleToRef(hJ._Rayl, AJ), FJ.addToRef(AJ, XJ), JJ.subtractToRef(FJ, qJ);
        const jJ = UJ.j.Dot(eJ, eJ),
          YJ = UJ.j.Dot(eJ, AJ),
          DJ = UJ.j.Dot(AJ, AJ),
          sJ = UJ.j.Dot(eJ, qJ),
          nJ = UJ.j.Dot(AJ, qJ),
          GJ = jJ * DJ - YJ * YJ;
        let fJ, xJ, rJ = GJ,
          vJ = GJ;
        GJ < hJ._Smallnum ? (fJ = 0, rJ = 1, xJ = nJ, vJ = DJ) : (fJ = YJ * nJ - DJ * sJ, xJ = jJ * nJ - YJ * sJ, fJ < 0 ? (fJ = 0, xJ = nJ, vJ = DJ) : fJ > rJ && (fJ = rJ, xJ = nJ + YJ, vJ = DJ)), xJ < 0 ? (xJ = 0, -sJ < 0 ? fJ = 0 : -sJ > jJ ? fJ = rJ : (fJ = -sJ, rJ = jJ)) : xJ > vJ && (xJ = vJ, -sJ + YJ < 0 ? fJ = 0 : -sJ + YJ > jJ ? fJ = rJ : (fJ = -sJ + YJ, rJ = jJ));
        const mJ = Math.abs(fJ) < hJ._Smallnum ? 0 : fJ / rJ,
          QJ = Math.abs(xJ) < hJ._Smallnum ? 0 : xJ / vJ,
          EJ = UJ.h.Pn[4];
        AJ.scaleToRef(QJ, EJ);
        const VJ = UJ.h.Pn[5];
        eJ.scaleToRef(mJ, VJ), VJ.addInPlace(qJ);
        const KJ = UJ.h.Pn[6];
        VJ.subtractToRef(EJ, KJ);
        return QJ > 0 && QJ <= this.length && KJ.lengthSquared() < ZJ * ZJ ? VJ.length() : -1
      }
      update(JJ, cJ, ZJ, FJ, eJ, XJ, AJ) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          hJ._RayDistant || (hJ._RayDistant = hJ.Zero()), hJ._RayDistant.unprojectRayToRef(JJ, cJ, ZJ, FJ, UJ.b.IdentityReadOnly, XJ, AJ);
          const qJ = UJ.h.Matrix[0];
          eJ.invertToRef(qJ), hJ.TransformToRef(hJ._RayDistant, qJ, this)
        } else this.unprojectRayToRef(JJ, cJ, ZJ, FJ, eJ, XJ, AJ);
        return this
      }
      static Zero() {
        return new hJ(UJ.j.Zero(), UJ.j.Zero())
      }
      static CreateNew(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        return hJ.Zero().update(JJ, cJ, ZJ, FJ, UJ, eJ, XJ)
      }
      static CreateNewFromTo(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UJ.b.IdentityReadOnly;
        const FJ = new hJ(new UJ.j(0, 0, 0), new UJ.j(0, 0, 0));
        return hJ.CreateFromToToRef(JJ, cJ, FJ, ZJ)
      }
      static CreateFromToToRef(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UJ.b.IdentityReadOnly;
        ZJ.origin.rZJ(JJ);
        const eJ = cJ.subtractToRef(JJ, ZJ.direction),
          XJ = Math.sqrt(eJ.x * eJ.x + eJ.y * eJ.y + eJ.z * eJ.z);
        return ZJ.length = XJ, ZJ.direction.normalize(), hJ.TransformToRef(ZJ, FJ, ZJ)
      }
      static Transform(JJ, cJ) {
        const ZJ = new hJ(new UJ.j(0, 0, 0), new UJ.j(0, 0, 0));
        return hJ.TransformToRef(JJ, cJ, ZJ), ZJ
      }
      static TransformToRef(JJ, cJ, ZJ) {
        UJ.j.TransformCoordinatesToRef(JJ.origin, cJ, ZJ.origin), UJ.j.TransformNormalToRef(JJ.direction, cJ, ZJ.direction), ZJ.length = JJ.length, ZJ.epsilon = JJ.epsilon;
        const FJ = ZJ.direction,
          eJ = FJ.length();
        if (0 !== eJ && 1 !== eJ) {
          const JJ = 1 / eJ;
          FJ.x *= JJ, FJ.y *= JJ, FJ.z *= JJ, ZJ.length *= eJ
        }
        return ZJ
      }
      unprojectRayToRef(JJ, cJ, ZJ, FJ, eJ, XJ, AJ) {
        const jJ = UJ.h.Matrix[0];
        eJ.multiplyToRef(XJ, jJ), jJ.multiplyToRef(AJ, jJ), jJ.invert();
        const YJ = qJ.c.LastCreatedEngine,
          hJ = UJ.h.Pn[0];
        hJ.x = JJ / ZJ * 2 - 1, hJ.y = -(cJ / FJ * 2 - 1), hJ.z = YJ?.LZJ ? 1 : YJ?.isNDCHalfZRange ? 0 : -1;
        const DJ = UJ.h.Pn[1].K9(hJ.x, hJ.y, 1 - 1e-8),
          sJ = UJ.h.Pn[2],
          nJ = UJ.h.Pn[3];
        UJ.j.TransformCoordinatesToRef(hJ, jJ, sJ), UJ.j.TransformCoordinatesToRef(DJ, jJ, nJ), this.origin.rZJ(sJ), nJ.subtractToRef(sJ, this.direction), this.direction.normalize()
      }
    }

    function DJ(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const XJ = hJ.Zero();
      return sJ(JJ, cJ, ZJ, FJ, XJ, UJ, eJ), XJ
    }

    function sJ(JJ, cJ, ZJ, FJ, eJ, XJ) {
      let AJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qJ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const jJ = JJ.gn();
      if (!XJ && !(XJ = JJ.activeCamera) && !(XJ = JJ.cameraToUseForPointers)) return JJ;
      const YJ = XJ.viewport,
        hJ = jJ.getRenderHeight(),
        {
          x: DJ,
          y: sJ,
          width: nJ,
          height: GJ
        } = YJ.toGlobal(jJ.getRenderWidth(), hJ),
        fJ = 1 / jJ.getHardwareScalingLevel();
      return cJ = cJ * fJ - DJ, ZJ = ZJ * fJ - (hJ - sJ - GJ), eJ.update(cJ, ZJ, nJ, GJ, FJ || UJ.b.IdentityReadOnly, AJ ? UJ.b.IdentityReadOnly : XJ.getViewMatrix(), XJ.getProjectionMatrix(), qJ), JJ
    }

    function nJ(JJ, cJ, ZJ, FJ) {
      const UJ = hJ.Zero();
      return GJ(JJ, cJ, ZJ, UJ, FJ), UJ
    }

    function GJ(JJ, cJ, ZJ, FJ, eJ) {
      if (!AJ.e) return JJ;
      const XJ = JJ.gn();
      if (!eJ && !(eJ = JJ.activeCamera) && !(eJ = JJ.cameraToUseForPointers)) throw new Error("Active camera not set");
      const qJ = eJ.viewport,
        jJ = XJ.getRenderHeight(),
        {
          x: YJ,
          y: hJ,
          width: DJ,
          height: sJ
        } = qJ.toGlobal(XJ.getRenderWidth(), jJ),
        nJ = UJ.b.Identity(),
        GJ = 1 / XJ.getHardwareScalingLevel();
      return cJ = cJ * GJ - YJ, ZJ = ZJ * GJ - (jJ - hJ - sJ), FJ.update(cJ, ZJ, DJ, sJ, nJ, nJ, eJ.getProjectionMatrix()), JJ
    }

    function fJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
      return xJ(JJ, ZJ, FJ, cJ(FJ, ZJ.enableDistantPicking), UJ, eJ, XJ, AJ)
    }

    function xJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
      const qJ = cJ.intersects(FJ, UJ, XJ, eJ, ZJ, AJ);
      return qJ && qJ.hit ? !UJ && null != JJ && qJ.distance >= JJ.distance ? null : qJ : null
    }

    function rJ(JJ, cJ) {
      return "InstancedLinesMesh" === JJ || "LinesMesh" === JJ ? cJ.intersectionThreshold : 0
    }

    function vJ(JJ) {
      const cJ = JJ.getClassName();
      if ("GreasedLineMesh" === cJ) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const ZJ = JJ.rawBoundingInfo;
      return {
        rawBoundingInfo: ZJ,
        intersectionThreshold: ZJ ? rJ(cJ, JJ) : 0
      }
    }

    function mJ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = JJ(ZJ, cJ.enableDistantPicking);
      return eJ.intersectsSphere(FJ.QFJ, UJ) && eJ.intersectsBox(FJ.boundingBox, UJ) ? eJ : null
    }

    function QJ(JJ, cJ, ZJ, FJ, eJ, XJ) {
      let qJ = null;
      const jJ = !!(JJ.activeCameras && JJ.activeCameras.length > 1 && JJ.cameraToUseForPointers !== JJ.activeCamera),
        hJ = JJ.cameraToUseForPointers || JJ.activeCamera,
        DJ = YJ.internalPickerForMesh || fJ,
        sJ = DJ === fJ;
      for (let AJ = 0; AJ < JJ.meshes.length; AJ++) {
        const YJ = JJ.meshes[AJ];
        if (ZJ) {
          if (!ZJ(YJ, -1)) continue
        } else if (!YJ.isEnabled() || !YJ.isVisible || !YJ.aG) continue;
        const nJ = jJ && YJ.isWorldMatrixCameraDependent(),
          GJ = YJ.computeWorldMatrix(nJ, hJ);
        if (YJ.hasThinInstances && YJ.fcJ) {
          const JJ = DJ(qJ, cJ, YJ, GJ, !0, !0, XJ);
          if (JJ) {
            if (eJ) return JJ;
            const {
              rawBoundingInfo: AJ,
              intersectionThreshold: jJ
            } = vJ(YJ), hJ = YJ._thinInstanceDataStorage.matrixData;
            if (hJ) {
              const JJ = UJ.h.Matrix[0],
                nJ = UJ.h.Matrix[1],
                fJ = Math.min(YJ.f6, hJ.length >> 4);
              for (let rJ = 0; rJ < fJ; rJ++) {
                if (ZJ && !ZJ(YJ, rJ)) continue;
                UJ.b.FromArrayToRef(hJ, rJ << 4, JJ), JJ.multiplyToRef(GJ, nJ);
                const fJ = sJ && AJ ? mJ(cJ, YJ, nJ, AJ, jJ) : null;
                if (sJ && AJ && !fJ) continue;
                const vJ = sJ && fJ ? xJ(qJ, YJ, nJ, fJ, FJ, eJ, XJ, !0) : DJ(qJ, cJ, YJ, nJ, FJ, eJ, XJ, !0);
                if (vJ && (qJ = vJ, qJ.thinInstanceIndex = rJ, FJ)) return qJ
              }
            }
          }
        } else {
          const JJ = DJ(qJ, cJ, YJ, GJ, FJ, eJ, XJ);
          if (JJ && (qJ = JJ, FJ)) return qJ
        }
      }
      return qJ || new AJ.e
    }

    function EJ(JJ, cJ, ZJ, FJ) {
      if (!AJ.e) return null;
      const eJ = [],
        XJ = !!(JJ.activeCameras && JJ.activeCameras.length > 1 && JJ.cameraToUseForPointers !== JJ.activeCamera),
        qJ = JJ.cameraToUseForPointers || JJ.activeCamera,
        jJ = YJ.internalPickerForMesh || fJ,
        hJ = jJ === fJ;
      for (let AJ = 0; AJ < JJ.meshes.length; AJ++) {
        const YJ = JJ.meshes[AJ];
        if (ZJ) {
          if (!ZJ(YJ, -1)) continue
        } else if (!YJ.isEnabled() || !YJ.isVisible || !YJ.aG) continue;
        const DJ = XJ && YJ.isWorldMatrixCameraDependent(),
          sJ = YJ.computeWorldMatrix(DJ, qJ);
        if (YJ.hasThinInstances && YJ.fcJ) {
          if (jJ(null, cJ, YJ, sJ, !0, !0, FJ)) {
            const {
              rawBoundingInfo: JJ,
              intersectionThreshold: XJ
            } = vJ(YJ), AJ = YJ._thinInstanceDataStorage.matrixData;
            if (AJ) {
              const qJ = UJ.h.Matrix[0],
                DJ = UJ.h.Matrix[1],
                nJ = Math.min(YJ.f6, AJ.length >> 4);
              for (let GJ = 0; GJ < nJ; GJ++) {
                if (ZJ && !ZJ(YJ, GJ)) continue;
                UJ.b.FromArrayToRef(AJ, GJ << 4, qJ), qJ.multiplyToRef(sJ, DJ);
                const nJ = hJ && JJ ? mJ(cJ, YJ, DJ, JJ, XJ) : null;
                if (hJ && JJ && !nJ) continue;
                const fJ = hJ && nJ ? xJ(null, YJ, DJ, nJ, !1, !1, FJ, !0) : jJ(null, cJ, YJ, DJ, !1, !1, FJ, !0);
                fJ && (fJ.thinInstanceIndex = GJ, eJ.push(fJ))
              }
            }
          }
        } else {
          const JJ = jJ(null, cJ, YJ, sJ, !1, !1, FJ);
          JJ && eJ.push(JJ)
        }
      }
      return eJ
    }

    function VJ(JJ, cJ, ZJ, FJ, eJ, XJ) {
      if (!AJ.e) return null;
      const qJ = QJ(JJ, (FJ => (JJ._tempPickingRay || (JJ._tempPickingRay = hJ.Zero()), sJ(JJ, cJ, ZJ, FJ, JJ._tempPickingRay, XJ || null), JJ._tempPickingRay)), FJ, eJ, !0);
      return qJ && (qJ.ray = DJ(JJ, cJ, ZJ, UJ.b.Identity(), XJ || null)), qJ
    }

    function KJ(JJ, cJ, ZJ, FJ, eJ, XJ, AJ) {
      const qJ = QJ(JJ, ((FJ, UJ) => (JJ._tempPickingRay || (JJ._tempPickingRay = hJ.Zero()), sJ(JJ, cJ, ZJ, FJ, JJ._tempPickingRay, XJ || null, !1, UJ), JJ._tempPickingRay)), FJ, eJ, !1, AJ);
      return qJ && (qJ.ray = DJ(JJ, cJ, ZJ, UJ.b.Identity(), XJ || null)), qJ
    }

    function yJ(JJ, cJ, ZJ, FJ, eJ) {
      const XJ = QJ(JJ, (ZJ => (JJ._pickWithRayInverseMatrix || (JJ._pickWithRayInverseMatrix = UJ.b.Identity()), ZJ.invertToRef(JJ._pickWithRayInverseMatrix), JJ._cachedRayForTransform || (JJ._cachedRayForTransform = hJ.Zero()), hJ.TransformToRef(cJ, JJ._pickWithRayInverseMatrix, JJ._cachedRayForTransform), JJ._cachedRayForTransform)), ZJ, FJ, !1, eJ);
      return XJ && (XJ.ray = cJ), XJ
    }

    function SJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      return EJ(JJ, (FJ => DJ(JJ, cJ, ZJ, FJ, UJ || null)), FJ, eJ)
    }

    function IJ(JJ, cJ, ZJ, FJ) {
      return EJ(JJ, (ZJ => (JJ._pickWithRayInverseMatrix || (JJ._pickWithRayInverseMatrix = UJ.b.Identity()), ZJ.invertToRef(JJ._pickWithRayInverseMatrix), JJ._cachedRayForTransform || (JJ._cachedRayForTransform = hJ.Zero()), hJ.TransformToRef(cJ, JJ._pickWithRayInverseMatrix, JJ._cachedRayForTransform), JJ._cachedRayForTransform)), ZJ, FJ)
    }

    function MJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        FJ = arguments.length > 3 ? arguments[3] : void 0,
        eJ = arguments.length > 4 ? arguments[4] : void 0;
      FJ || (FJ = JJ.getWorldMatrix()), cJ.length = ZJ, eJ ? cJ.origin.rZJ(eJ) : cJ.origin.rZJ(JJ.position);
      const XJ = UJ.h.Pn[2];
      XJ.set(0, 0, JJ._scene.useRightHandedSystem ? -1 : 1);
      const AJ = UJ.h.Pn[3];
      return UJ.j.TransformNormalToRef(XJ, FJ, AJ), UJ.j.NormalizeToRef(AJ, cJ.direction), cJ
    }

    function bJ(JJ, cJ) {
      cJ && (cJ.prototype.getForwardRay = function() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        return MJ(this, new hJ(UJ.j.Zero(), UJ.j.Zero(), JJ), JJ, cJ, ZJ)
      }, cJ.prototype.getForwardRayToRef = function(JJ) {
        return MJ(this, JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), JJ && (jJ.c._IsPickingAvailable = !0, JJ.prototype.createPickingRay = function(JJ, cJ, ZJ, FJ) {
        return DJ(this, JJ, cJ, ZJ, FJ, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    hJ._TmpVector3 = (0, eJ.e)(6, UJ.j.Zero), hJ._RayDistant = hJ.Zero(), hJ._Smallnum = 1e-8, hJ._Rayl = 1e9
  },
  40289: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ.y
    });
    var FJ = ZJ(38874),
      UJ = ZJ(38986),
      eJ = ZJ(40294);
    let XJ = !1;
    XJ || (XJ = !0, (0, eJ.d)(FJ.e, UJ.e), FJ.e.prototype.createPickingRayToRef = function(JJ, cJ, ZJ, FJ, UJ) {
      let XJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, eJ.m)(this, JJ, cJ, ZJ, FJ, UJ, XJ, AJ)
    }, FJ.e.prototype.createPickingRayInCameraSpace = function(JJ, cJ, ZJ) {
      return (0, eJ.l)(this, JJ, cJ, ZJ)
    }, FJ.e.prototype.createPickingRayInCameraSpaceToRef = function(JJ, cJ, ZJ, FJ) {
      return (0, eJ.h)(this, JJ, cJ, ZJ, FJ)
    }, FJ.e.prototype.pickWithBoundingInfo = function(JJ, cJ, ZJ, FJ, UJ) {
      return (0, eJ.s)(this, JJ, cJ, ZJ, FJ, UJ)
    }, FJ.e.prototype.PD = function(JJ, cJ, ZJ, FJ, UJ, XJ) {
      let AJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, eJ.v)(this, JJ, cJ, ZJ, FJ, UJ, XJ, AJ)
    }, FJ.e.prototype.pickWithRay = function(JJ, cJ, ZJ, FJ) {
      return (0, eJ.t)(this, JJ, cJ, ZJ, FJ)
    }, FJ.e.prototype.multiPick = function(JJ, cJ, ZJ, FJ, UJ) {
      return (0, eJ.o)(this, JJ, cJ, ZJ, FJ, UJ)
    }, FJ.e.prototype.multiPickWithRay = function(JJ, cJ, ZJ) {
      return (0, eJ.n)(this, JJ, cJ, ZJ)
    })
  },
  40302: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => YJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(36174),
      XJ = ZJ(39023),
      AJ = ZJ(40308),
      qJ = ZJ(38989),
      jJ = ZJ(36216);
    let YJ = (() => {
        var JJ;
        let cJ, ZJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ = AJ.e,
          GJ = [],
          fJ = [],
          xJ = [],
          rJ = [],
          vJ = [],
          mJ = [],
          QJ = [],
          EJ = [],
          VJ = [],
          KJ = [],
          yJ = [],
          SJ = [],
          IJ = [];
        return JJ = class extends nJ {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(JJ) {
            this._shadowFrustumSize = JJ, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(JJ) {
            this._shadowOrthoScale = JJ, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(JJ) {
            this._orthoLeft = JJ
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(JJ) {
            this._orthoRight = JJ
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(JJ) {
            this._orthoTop = JJ
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(JJ) {
            this._orthoBottom = JJ
          }
          constructor(JJ, cJ, ZJ, UJ) {
            super(JJ, ZJ, UJ), this._shadowFrustumSize = ((0, FJ.e)(this, GJ), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, FJ.e)(this, fJ, !0), this.autoCalcShadowZBounds = ((0, FJ.e)(this, xJ), (0, FJ.e)(this, rJ, !1)), this._orthoLeft = ((0, FJ.e)(this, vJ), (0, FJ.e)(this, mJ, Number.MAX_VALUE)), this._orthoRight = ((0, FJ.e)(this, QJ), (0, FJ.e)(this, EJ, Number.MIN_VALUE)), this._orthoTop = ((0, FJ.e)(this, VJ), (0, FJ.e)(this, KJ, Number.MIN_VALUE)), this._orthoBottom = ((0, FJ.e)(this, yJ), (0, FJ.e)(this, SJ, Number.MAX_VALUE)), (0, FJ.e)(this, IJ), this.position = cJ.scale(-1), this.direction = cJ
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return XJ.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(JJ, cJ, ZJ) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(JJ) : this._setDefaultAutoExtendShadowProjectionMatrix(JJ, cJ, ZJ)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(JJ) {
            const cJ = this.Qy().activeCamera;
            eJ.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : cJ ? cJ.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : cJ ? cJ.maxZ : 1e4, JJ, this.Qy().gn().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(JJ, cJ, ZJ) {
            const FJ = this.Qy().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const JJ = eJ.j.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let FJ = Number.MAX_VALUE,
                UJ = -Number.MAX_VALUE;
              for (let XJ = 0; XJ < ZJ.length; XJ++) {
                const AJ = ZJ[XJ];
                if (!AJ) continue;
                const qJ = AJ.rM().boundingBox;
                for (let ZJ = 0; ZJ < qJ.vectorsWorld.length; ZJ++) eJ.j.TransformCoordinatesToRef(qJ.vectorsWorld[ZJ], cJ, JJ), JJ.x < this._orthoLeft && (this._orthoLeft = JJ.x), JJ.y < this._orthoBottom && (this._orthoBottom = JJ.y), JJ.x > this._orthoRight && (this._orthoRight = JJ.x), JJ.y > this._orthoTop && (this._orthoTop = JJ.y), this.autoCalcShadowZBounds && (JJ.z < FJ && (FJ = JJ.z), JJ.z > UJ && (UJ = JJ.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = FJ, this._shadowMaxZ = UJ)
            }
            const UJ = this._orthoRight - this._orthoLeft,
              XJ = this._orthoTop - this._orthoBottom,
              AJ = void 0 !== this.shadowMinZ ? this.shadowMinZ : FJ?.minZ || 0,
              qJ = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : FJ?.maxZ || 1e4,
              jJ = this.Qy().gn().LZJ;
            eJ.b.OrthoOffCenterLHToRef(this._orthoLeft - UJ * this.shadowOrthoScale, this._orthoRight + UJ * this.shadowOrthoScale, this._orthoBottom - XJ * this.shadowOrthoScale, this._orthoTop + XJ * this.shadowOrthoScale, jJ ? qJ : AJ, jJ ? AJ : qJ, JJ, this.Qy().gn().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(JJ, cJ) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, cJ), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, cJ), this)
          }
          transferToNodeMaterialEffect(JJ, cJ) {
            return this.computeTransformedInformation() ? (JJ.setFloat3(cJ, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (JJ.setFloat3(cJ, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(JJ) {
            const cJ = this._scene.gn();
            return !cJ.LZJ && cJ.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(JJ) {
            const cJ = this._scene.gn();
            return cJ.LZJ && cJ.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(JJ, cJ) {
            JJ["DIRLIGHT" + cJ] = !0
          }
        }, (() => {
          const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(nJ[Symbol.metadata] ?? null) : void 0;
          cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], qJ = [(0, UJ.F)()], jJ = [(0, UJ.F)()], YJ = [(0, UJ.F)("orthoLeft")], hJ = [(0, UJ.F)("orthoRight")], DJ = [(0, UJ.F)("orthoTop")], sJ = [(0, UJ.F)("orthoBottom")], (0, FJ.d)(JJ, null, cJ, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: JJ => "shadowFrustumSize" in JJ,
              get: JJ => JJ.shadowFrustumSize
            },
            metadata: eJ
          }, null, GJ), (0, FJ.d)(JJ, null, ZJ, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: JJ => "shadowOrthoScale" in JJ,
              get: JJ => JJ.shadowOrthoScale
            },
            metadata: eJ
          }, null, GJ), (0, FJ.d)(null, null, qJ, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: JJ => "autoUpdateExtends" in JJ,
              get: JJ => JJ.autoUpdateExtends,
              set: (JJ, cJ) => {
                JJ.autoUpdateExtends = cJ
              }
            },
            metadata: eJ
          }, fJ, xJ), (0, FJ.d)(null, null, jJ, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: JJ => "autoCalcShadowZBounds" in JJ,
              get: JJ => JJ.autoCalcShadowZBounds,
              set: (JJ, cJ) => {
                JJ.autoCalcShadowZBounds = cJ
              }
            },
            metadata: eJ
          }, rJ, vJ), (0, FJ.d)(null, null, YJ, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_orthoLeft" in JJ,
              get: JJ => JJ._orthoLeft,
              set: (JJ, cJ) => {
                JJ._orthoLeft = cJ
              }
            },
            metadata: eJ
          }, mJ, QJ), (0, FJ.d)(null, null, hJ, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_orthoRight" in JJ,
              get: JJ => JJ._orthoRight,
              set: (JJ, cJ) => {
                JJ._orthoRight = cJ
              }
            },
            metadata: eJ
          }, EJ, VJ), (0, FJ.d)(null, null, DJ, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_orthoTop" in JJ,
              get: JJ => JJ._orthoTop,
              set: (JJ, cJ) => {
                JJ._orthoTop = cJ
              }
            },
            metadata: eJ
          }, KJ, yJ), (0, FJ.d)(null, null, sJ, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_orthoBottom" in JJ,
              get: JJ => JJ._orthoBottom,
              set: (JJ, cJ) => {
                JJ._orthoBottom = cJ
              }
            },
            metadata: eJ
          }, SJ, IJ), eJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eJ
          })
        })(), JJ
      })(),
      hJ = !1;
    hJ || (hJ = !0, qJ.b.AddNodeConstructor("Light_Type_1", ((JJ, cJ) => () => new YJ(JJ, eJ.j.Zero(), cJ))), (0, jJ.f)("BABYLON.DirectionalLight", YJ))
  },
  40322: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => ic
    });
    var FJ = ZJ(37683),
      UJ = ZJ(36200),
      eJ = ZJ(36174),
      XJ = ZJ(38918),
      AJ = ZJ(40325),
      qJ = ZJ(36192),
      jJ = ZJ(39037),
      YJ = ZJ(36231),
      hJ = ZJ(37686),
      DJ = ZJ(37658),
      sJ = ZJ(36207);
    class nJ {
      constructor() {
        this.direction1 = new eJ.j(0, 1, 0), this.direction2 = new eJ.j(0, 1, 0)
      }
      startDirectionFunction(JJ, cJ, ZJ, FJ) {
        const UJ = (0, sJ.RandomRange)(this.direction1.x, this.direction2.x),
          XJ = (0, sJ.RandomRange)(this.direction1.y, this.direction2.y),
          AJ = (0, sJ.RandomRange)(this.direction1.z, this.direction2.z);
        FJ ? cJ.K9(UJ, XJ, AJ) : eJ.j.TransformNormalFromFloatsToRef(UJ, XJ, AJ, JJ, cJ)
      }
      startPositionFunction(JJ, cJ, ZJ, FJ) {
        FJ ? cJ.K9(0, 0, 0) : eJ.j.TransformCoordinatesFromFloatsToRef(0, 0, 0, JJ, cJ)
      }
      clone() {
        const JJ = new nJ;
        return DJ.e.DeepCopy(this, JJ), JJ
      }
      applyToShader(JJ) {
        JJ.setVector3("direction1", this.direction1), JJ.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(JJ) {
        JJ.addUniform("direction1", 3), JJ.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const JJ = {};
        return JJ.type = this.getClassName(), JJ.direction1 = this.direction1.JFJ(), JJ.direction2 = this.direction2.JFJ(), JJ
      }
      parse(JJ) {
        eJ.j.FromArrayToRef(JJ.direction1, 0, this.direction1), eJ.j.FromArrayToRef(JJ.direction2, 0, this.direction2)
      }
    }
    class GJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = JJ, this.radiusRange = cJ, this.directionRandomizer = ZJ
      }
      startDirectionFunction(JJ, cJ, ZJ, FJ) {
        const UJ = ZJ.position.subtract(JJ.getTranslation()).normalize(),
          XJ = (0, sJ.RandomRange)(0, this.directionRandomizer),
          AJ = (0, sJ.RandomRange)(0, this.directionRandomizer),
          qJ = (0, sJ.RandomRange)(0, this.directionRandomizer);
        UJ.x += XJ, UJ.y += AJ, UJ.z += qJ, UJ.normalize(), FJ ? cJ.rZJ(UJ) : eJ.j.TransformNormalFromFloatsToRef(UJ.x, UJ.y, UJ.z, JJ, cJ)
      }
      startPositionFunction(JJ, cJ, ZJ, FJ) {
        const UJ = this.radius - (0, sJ.RandomRange)(0, this.radius * this.radiusRange),
          XJ = (0, sJ.RandomRange)(0, 1),
          AJ = (0, sJ.RandomRange)(0, 2 * Math.PI),
          qJ = Math.acos(2 * XJ - 1),
          jJ = UJ * Math.cos(AJ) * Math.sin(qJ),
          YJ = UJ * Math.cos(qJ),
          hJ = UJ * Math.sin(AJ) * Math.sin(qJ);
        FJ ? cJ.K9(jJ, Math.abs(YJ), hJ) : eJ.j.TransformCoordinatesFromFloatsToRef(jJ, Math.abs(YJ), hJ, JJ, cJ)
      }
      clone() {
        const JJ = new GJ(this.radius, this.directionRandomizer);
        return DJ.e.DeepCopy(this, JJ), JJ
      }
      applyToShader(JJ) {
        JJ.setFloat("radius", this.radius), JJ.setFloat("radiusRange", this.radiusRange), JJ.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(JJ) {
        JJ.addUniform("radius", 1), JJ.addUniform("radiusRange", 1), JJ.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const JJ = {};
        return JJ.type = this.getClassName(), JJ.radius = this.radius, JJ.radiusRange = this.radiusRange, JJ.directionRandomizer = this.directionRandomizer, JJ
      }
      parse(JJ) {
        this.radius = JJ.radius, this.radiusRange = JJ.radiusRange, this.directionRandomizer = JJ.directionRandomizer
      }
    }
    class fJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = JJ, this.radiusRange = cJ, this.directionRandomizer = ZJ
      }
      startDirectionFunction(JJ, cJ, ZJ, FJ) {
        const UJ = ZJ.position.subtract(JJ.getTranslation()).normalize(),
          XJ = (0, sJ.RandomRange)(0, this.directionRandomizer),
          AJ = (0, sJ.RandomRange)(0, this.directionRandomizer),
          qJ = (0, sJ.RandomRange)(0, this.directionRandomizer);
        UJ.x += XJ, UJ.y += AJ, UJ.z += qJ, UJ.normalize(), FJ ? cJ.rZJ(UJ) : eJ.j.TransformNormalFromFloatsToRef(UJ.x, UJ.y, UJ.z, JJ, cJ)
      }
      startPositionFunction(JJ, cJ, ZJ, FJ) {
        const UJ = this.radius - (0, sJ.RandomRange)(0, this.radius * this.radiusRange),
          XJ = (0, sJ.RandomRange)(0, 1),
          AJ = (0, sJ.RandomRange)(0, 2 * Math.PI),
          qJ = Math.acos(2 * XJ - 1),
          jJ = UJ * Math.cos(AJ) * Math.sin(qJ),
          YJ = UJ * Math.cos(qJ),
          hJ = UJ * Math.sin(AJ) * Math.sin(qJ);
        FJ ? cJ.K9(jJ, YJ, hJ) : eJ.j.TransformCoordinatesFromFloatsToRef(jJ, YJ, hJ, JJ, cJ)
      }
      clone() {
        const JJ = new fJ(this.radius, this.directionRandomizer);
        return DJ.e.DeepCopy(this, JJ), JJ
      }
      applyToShader(JJ) {
        JJ.setFloat("radius", this.radius), JJ.setFloat("radiusRange", this.radiusRange), JJ.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(JJ) {
        JJ.addUniform("radius", 1), JJ.addUniform("radiusRange", 1), JJ.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const JJ = {};
        return JJ.type = this.getClassName(), JJ.radius = this.radius, JJ.radiusRange = this.radiusRange, JJ.directionRandomizer = this.directionRandomizer, JJ
      }
      parse(JJ) {
        this.radius = JJ.radius, this.radiusRange = JJ.radiusRange, this.directionRandomizer = JJ.directionRandomizer
      }
    }
    class xJ extends fJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eJ.j(0, 1, 0),
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new eJ.j(0, 1, 0);
        super(JJ), this.direction1 = cJ, this.direction2 = ZJ
      }
      startDirectionFunction(JJ, cJ, ZJ, FJ) {
        const UJ = (0, sJ.RandomRange)(this.direction1.x, this.direction2.x),
          XJ = (0, sJ.RandomRange)(this.direction1.y, this.direction2.y),
          AJ = (0, sJ.RandomRange)(this.direction1.z, this.direction2.z);
        FJ ? cJ.K9(UJ, XJ, AJ) : eJ.j.TransformNormalFromFloatsToRef(UJ, XJ, AJ, JJ, cJ)
      }
      clone() {
        const JJ = new xJ(this.radius, this.direction1, this.direction2);
        return DJ.e.DeepCopy(this, JJ), JJ
      }
      applyToShader(JJ) {
        JJ.setFloat("radius", this.radius), JJ.setFloat("radiusRange", this.radiusRange), JJ.setVector3("direction1", this.direction1), JJ.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(JJ) {
        JJ.addUniform("radius", 1), JJ.addUniform("radiusRange", 1), JJ.addUniform("direction1", 3), JJ.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const JJ = super.serialize();
        return JJ.direction1 = this.direction1.JFJ(), JJ.direction2 = this.direction2.JFJ(), JJ
      }
      parse(JJ) {
        super.parse(JJ), eJ.j.FromArrayToRef(JJ.direction1, 0, this.direction1), eJ.j.FromArrayToRef(JJ.direction2, 0, this.direction2)
      }
    }
    var rJ = ZJ(37651);
    class vJ {
      get radius() {
        return this._radius
      }
      set radius(JJ) {
        this._radius = JJ, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(JJ) {
        this._angle = JJ, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = ZJ, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = cJ, this.radius = JJ
      }
      startDirectionFunction(JJ, cJ, ZJ, FJ) {
        const UJ = ZJ.position.subtract(JJ.getTranslation()).normalize(),
          XJ = (0, sJ.RandomRange)(0, this.directionRandomizer),
          AJ = (0, sJ.RandomRange)(0, this.directionRandomizer),
          qJ = (0, sJ.RandomRange)(0, this.directionRandomizer);
        UJ.x += XJ, UJ.y += AJ, UJ.z += qJ, UJ.normalize(), FJ ? cJ.rZJ(UJ) : eJ.j.TransformNormalFromFloatsToRef(UJ.x, UJ.y, UJ.z, JJ, cJ)
      }
      startPositionFunction(JJ, cJ, ZJ, FJ) {
        const UJ = (0, sJ.RandomRange)(0, 2 * Math.PI);
        let XJ;
        this.emitFromSpawnPointOnly ? XJ = 1e-4 : (XJ = (0, sJ.RandomRange)(0, this.heightRange), XJ = 1 - XJ * XJ);
        let AJ = this._radius - (0, sJ.RandomRange)(0, this._radius * this.radiusRange);
        AJ *= XJ;
        const qJ = AJ * Math.sin(UJ),
          jJ = AJ * Math.cos(UJ),
          YJ = XJ * this._height;
        if (FJ) return cJ.x = qJ, cJ.y = YJ, void(cJ.z = jJ);
        eJ.j.TransformCoordinatesFromFloatsToRef(qJ, YJ, jJ, JJ, cJ)
      }
      clone() {
        const JJ = new vJ(this._radius, this._angle, this.directionRandomizer);
        return DJ.e.DeepCopy(this, JJ), JJ
      }
      applyToShader(JJ) {
        JJ.setFloat2("radius", this._radius, this.radiusRange), JJ.setFloat("coneAngle", this._angle), JJ.setFloat2("height", this._height, this.heightRange), JJ.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(JJ) {
        JJ.addUniform("radius", 2), JJ.addUniform("coneAngle", 1), JJ.addUniform("height", 2), JJ.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let JJ = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (JJ += "\n#define CONEEMITTERSPAWNPOINT"), JJ
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const JJ = {};
        return JJ.type = this.getClassName(), JJ.radius = this._radius, JJ.angle = this._angle, JJ.directionRandomizer = this.directionRandomizer, JJ.radiusRange = this.radiusRange, JJ.heightRange = this.heightRange, JJ.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, JJ
      }
      parse(JJ) {
        this.radius = JJ.radius, this.angle = JJ.angle, this.directionRandomizer = JJ.directionRandomizer, this.radiusRange = void 0 !== JJ.radiusRange ? JJ.radiusRange : 1, this.heightRange = void 0 !== JJ.heightRange ? JJ.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== JJ.emitFromSpawnPointOnly && JJ.emitFromSpawnPointOnly
      }
    }
    class mJ extends vJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new eJ.j(0, 1, 0),
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new eJ.j(0, 1, 0);
        super(JJ, cJ), this.direction1 = ZJ, this.direction2 = FJ
      }
      startDirectionFunction(JJ, cJ, ZJ, FJ) {
        const UJ = (0, sJ.RandomRange)(this.direction1.x, this.direction2.x),
          XJ = (0, sJ.RandomRange)(this.direction1.y, this.direction2.y),
          AJ = (0, sJ.RandomRange)(this.direction1.z, this.direction2.z);
        FJ ? cJ.K9(UJ, XJ, AJ) : eJ.j.TransformNormalFromFloatsToRef(UJ, XJ, AJ, JJ, cJ)
      }
      clone() {
        const JJ = new mJ(this.radius, this.angle, this.direction1, this.direction2);
        return DJ.e.DeepCopy(this, JJ), JJ
      }
      applyToShader(JJ) {
        super.applyToShader(JJ), JJ.setVector3("direction1", this.direction1), JJ.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(JJ) {
        super.buildUniformLayout(JJ), JJ.addUniform("direction1", 3), JJ.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const JJ = super.serialize();
        return JJ.direction1 = this.direction1.JFJ(), JJ.direction2 = this.direction2.JFJ(), JJ
      }
      parse(JJ) {
        super.parse(JJ), eJ.j.FromArrayToRef(JJ.direction1, 0, this.direction1), eJ.j.FromArrayToRef(JJ.direction2, 0, this.direction2)
      }
    }
    class QJ {
      get mesh() {
        return this._mesh
      }
      set mesh(JJ) {
        this._mesh !== JJ && (this._mesh = JJ, JJ ? (this._indices = JJ.QXJ(), this._positions = JJ.getVerticesData(XJ.n.PositionKind), this._normals = JJ.getVerticesData(XJ.n.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = eJ.j.Zero(), this._mesh = null, this.direction1 = new eJ.j(0, 1, 0), this.direction2 = new eJ.j(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = JJ
      }
      startDirectionFunction(JJ, cJ, ZJ, FJ) {
        if (this.useMeshNormalsForDirection && this._normals) return void eJ.j.TransformNormalToRef(this._storedNormal, JJ, cJ);
        const UJ = (0, sJ.RandomRange)(this.direction1.x, this.direction2.x),
          XJ = (0, sJ.RandomRange)(this.direction1.y, this.direction2.y),
          AJ = (0, sJ.RandomRange)(this.direction1.z, this.direction2.z);
        FJ ? cJ.K9(UJ, XJ, AJ) : eJ.j.TransformNormalFromFloatsToRef(UJ, XJ, AJ, JJ, cJ)
      }
      startPositionFunction(JJ, cJ, ZJ, FJ) {
        if (!this._indices || !this._positions) return;
        const UJ = 3 * (Math.random() * (this._indices.length / 3) | 0),
          XJ = Math.random(),
          AJ = Math.random() * (1 - XJ),
          qJ = 1 - XJ - AJ,
          jJ = this._indices[UJ],
          YJ = this._indices[UJ + 1],
          hJ = this._indices[UJ + 2],
          DJ = eJ.h.Pn[0],
          sJ = eJ.h.Pn[1],
          nJ = eJ.h.Pn[2],
          GJ = eJ.h.Pn[3];
        eJ.j.FromArrayToRef(this._positions, 3 * jJ, DJ), eJ.j.FromArrayToRef(this._positions, 3 * YJ, sJ), eJ.j.FromArrayToRef(this._positions, 3 * hJ, nJ), GJ.x = XJ * DJ.x + AJ * sJ.x + qJ * nJ.x, GJ.y = XJ * DJ.y + AJ * sJ.y + qJ * nJ.y, GJ.z = XJ * DJ.z + AJ * sJ.z + qJ * nJ.z, FJ ? cJ.K9(GJ.x, GJ.y, GJ.z) : eJ.j.TransformCoordinatesFromFloatsToRef(GJ.x, GJ.y, GJ.z, JJ, cJ), this.useMeshNormalsForDirection && this._normals && (eJ.j.FromArrayToRef(this._normals, 3 * jJ, DJ), eJ.j.FromArrayToRef(this._normals, 3 * YJ, sJ), eJ.j.FromArrayToRef(this._normals, 3 * hJ, nJ), this._storedNormal.x = XJ * DJ.x + AJ * sJ.x + qJ * nJ.x, this._storedNormal.y = XJ * DJ.y + AJ * sJ.y + qJ * nJ.y, this._storedNormal.z = XJ * DJ.z + AJ * sJ.z + qJ * nJ.z)
      }
      clone() {
        const JJ = new QJ(this.mesh);
        return DJ.e.DeepCopy(this, JJ), JJ
      }
      applyToShader(JJ) {
        JJ.setVector3("direction1", this.direction1), JJ.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(JJ) {
        JJ.addUniform("direction1", 3), JJ.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const JJ = {};
        return JJ.type = this.getClassName(), JJ.direction1 = this.direction1.JFJ(), JJ.direction2 = this.direction2.JFJ(), JJ.meshId = this.mesh?.id, JJ.useMeshNormalsForDirection = this.useMeshNormalsForDirection, JJ
      }
      parse(JJ, cJ) {
        eJ.j.FromArrayToRef(JJ.direction1, 0, this.direction1), eJ.j.FromArrayToRef(JJ.direction2, 0, this.direction2), JJ.meshId && cJ && (this.mesh = cJ.getLastMeshById(JJ.meshId)), this.useMeshNormalsForDirection = JJ.useMeshNormalsForDirection
      }
    }
    class EJ {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(JJ) {
        this._targetStopDuration !== JJ && (this._targetStopDuration = JJ)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(JJ) {
        this._noiseTexture !== JJ && (this._noiseTexture = JJ, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(JJ) {
        this._attractors.push(JJ)
      }
      removeAttractor(JJ) {
        const cJ = this._attractors.indexOf(JJ); - 1 !== cJ && this._attractors.splice(cJ, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(JJ) {
        this._animationSheetEnabled !== JJ && (this._animationSheetEnabled = JJ)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(JJ) {
        this._isAnimationSheetEnabled != JJ && (this._isAnimationSheetEnabled = JJ, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(JJ) {
        this._useLogarithmicDepth = JJ && this.Qy().gn().getCaps().fragmentDepthSupported
      }
      Qy() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(JJ) {
        switch (JJ) {
          case EJ.BLENDMODE_MULTIPLYADD:
            return;
          case EJ.BLENDMODE_ADD:
            JJ = 1;
            break;
          case EJ.BLENDMODE_ONEONE:
            JJ = 6;
            break;
          case EJ.BLENDMODE_STANDARD:
            JJ = 2;
            break;
          case EJ.BLENDMODE_MULTIPLY:
            JJ = 4;
            break;
          case EJ.BLENDMODE_SUBTRACT:
            JJ = 3
        }
        this._engine.setAlphaMode(JJ)
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
      addEmitRateGradient(JJ, cJ, ZJ) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, JJ, cJ, ZJ), this
      }
      removeEmitRateGradient(JJ) {
        return this._removeFactorGradient(this._emitRateGradients, JJ), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : eJ.j.Zero()
      }
      set direction1(JJ) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = JJ)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : eJ.j.Zero()
      }
      set direction2(JJ) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = JJ)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : eJ.j.Zero()
      }
      set minEmitBox(JJ) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = JJ)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : eJ.j.Zero()
      }
      set maxEmitBox(JJ) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = JJ)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(JJ) {
        this._billboardMode !== JJ && (this._billboardMode = JJ, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(JJ) {
        this._isBillboardBased !== JJ && (this._isBillboardBased = JJ, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(JJ) {
        this._attachImageProcessingConfiguration(JJ)
      }
      _attachImageProcessingConfiguration(JJ) {
        JJ !== this._imageProcessingConfiguration && (!JJ && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = JJ)
      }
      _reset() {}
      _addFactorGradient(JJ, cJ, ZJ, UJ) {
        const eJ = new FJ.g(cJ, ZJ, UJ);
        JJ.push(eJ), JJ.sort(((JJ, cJ) => JJ.gradient < cJ.gradient ? -1 : JJ.gradient > cJ.gradient ? 1 : 0))
      }
      _removeFactorGradient(JJ, cJ) {
        if (!JJ) return;
        let ZJ = 0;
        for (const FJ of JJ) {
          if (FJ.gradient === cJ) {
            JJ.splice(ZJ, 1);
            break
          }
          ZJ++
        }
      }
      _removeGradientAndTexture(JJ, cJ, ZJ) {
        if (!cJ) return this;
        let FJ = 0;
        for (const UJ of cJ) {
          if (UJ.gradient === JJ) {
            cJ.splice(FJ, 1);
            break
          }
          FJ++
        }
        return ZJ && ZJ.dispose(), this
      }
      constructor(JJ) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = eJ.j.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new eJ.j(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = EJ.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new eJ.i(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new eJ.j(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = eJ.j.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new YJ.f(1, 1, 1, 1), this.color2 = new YJ.f(1, 1, 1, 1), this.colorDead = new YJ.f(0, 0, 0, 1), this.textureMask = new YJ.f(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new jJ.b, this.id = JJ, this.name = JJ
      }
      createPointEmitter(JJ, cJ) {
        const ZJ = function(JJ, cJ) {
          const ZJ = new nJ;
          return ZJ.direction1 = JJ, ZJ.direction2 = cJ, ZJ
        }(JJ, cJ);
        return this.particleEmitterType = ZJ, ZJ
      }
      createHemisphericEmitter() {
        const JJ = function() {
          return new GJ(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = JJ, JJ
      }
      createSphereEmitter() {
        const JJ = function() {
          return new fJ(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = JJ, JJ
      }
      createDirectedSphereEmitter() {
        const JJ = function() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eJ.j(0, 1, 0),
            ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new eJ.j(0, 1, 0);
          return new xJ(JJ, cJ, ZJ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new eJ.j(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new eJ.j(0, 1, 0));
        return this.particleEmitterType = JJ, JJ
      }
      createCylinderEmitter() {
        const JJ = function() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new rJ.e(JJ, cJ, ZJ, FJ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = JJ, JJ
      }
      createDirectedCylinderEmitter() {
        const JJ = function() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new eJ.j(0, 1, 0),
            UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new eJ.j(0, 1, 0);
          return new rJ.b(JJ, cJ, ZJ, FJ, UJ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new eJ.j(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new eJ.j(0, 1, 0));
        return this.particleEmitterType = JJ, JJ
      }
      createConeEmitter() {
        const JJ = function() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new vJ(JJ, cJ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = JJ, JJ
      }
      createDirectedConeEmitter() {
        const JJ = function() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new eJ.j(0, 1, 0),
            FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new eJ.j(0, 1, 0);
          return new mJ(JJ, cJ, ZJ, FJ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new eJ.j(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new eJ.j(0, 1, 0));
        return this.particleEmitterType = JJ, JJ
      }
      createBoxEmitter(JJ, cJ, ZJ, FJ) {
        const UJ = new hJ.c;
        return this.particleEmitterType = UJ, this.direction1 = JJ, this.direction2 = cJ, this.minEmitBox = ZJ, this.maxEmitBox = FJ, UJ
      }
      createMeshEmitter() {
        const JJ = function() {
          return new QJ(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = JJ, JJ
      }
    }
    EJ.BLENDMODE_ONEONE = 0, EJ.BLENDMODE_STANDARD = 1, EJ.BLENDMODE_ADD = 2, EJ.BLENDMODE_MULTIPLY = 3, EJ.BLENDMODE_MULTIPLYADD = 4, EJ.BLENDMODE_SUBTRACT = -1;
    class VJ {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new YJ.f(0, 0, 0, 0), this.currentColor2 = new YJ.f(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = eJ.j.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class KJ {
      constructor(JJ) {
        this.particleSystem = JJ, this.position = eJ.j.Zero(), this.direction = eJ.j.Zero(), this.color = new YJ.f(0, 0, 0, 0), this.colorStep = new YJ.f(0, 0, 0, 0), this.initialColor = new YJ.f(0, 0, 0, 0), this.colorDead = new YJ.f(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new eJ.i(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new VJ, this.id = KJ._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let JJ = this.age,
          cJ = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === cJ ? (cJ = 1, JJ = this._properties.randomCellOffset) : JJ += this._properties.randomCellOffset);
        const ZJ = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let FJ;
        FJ = this._properties.initialSpriteCellLoop ? (0, sJ.Clamp)(JJ * cJ % this.lifeTime / this.lifeTime) : (0, sJ.Clamp)(JJ * cJ / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + FJ * ZJ | 0
      }
      _inheritParticleInfoToSubEmitter(JJ) {
        if (JJ.particleSystem.emitter.position) {
          const cJ = JJ.particleSystem.emitter;
          if (cJ.position.rZJ(this.position), JJ.inheritDirection) {
            const JJ = eJ.h.Pn[0];
            this.direction.normalizeToRef(JJ), cJ.setDirection(JJ, 0, Math.PI / 2)
          }
        } else {
          JJ.particleSystem.emitter.rZJ(this.position)
        }
        this.direction.scaleToRef(JJ.inheritedVelocityAmount / 2, eJ.h.Pn[0]), JJ.particleSystem._inheritedVelocityOffset.rZJ(eJ.h.Pn[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const JJ of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(JJ)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = KJ._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(JJ) {
        JJ.position.rZJ(this.position), this._properties.initialDirection ? JJ._properties.initialDirection ? JJ._properties.initialDirection.rZJ(this._properties.initialDirection) : JJ._properties.initialDirection = this._properties.initialDirection.clone() : JJ._properties.initialDirection = null, JJ.direction.rZJ(this.direction), this._properties.localPosition && (JJ._properties.localPosition ? JJ._properties.localPosition.rZJ(this._properties.localPosition) : JJ._properties.localPosition = this._properties.localPosition.clone()), JJ.color.rZJ(this.color), JJ.colorStep.rZJ(this.colorStep), JJ.initialColor.rZJ(this.initialColor), JJ.colorDead.rZJ(this.colorDead), JJ.lifeTime = this.lifeTime, JJ.age = this.age, JJ._properties.randomCellOffset = this._properties.randomCellOffset, JJ.size = this.size, JJ.scale.rZJ(this.scale), JJ.angle = this.angle, JJ.angularSpeed = this.angularSpeed, JJ.particleSystem = this.particleSystem, JJ.cellIndex = this.cellIndex, JJ.id = this.id, JJ._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (JJ._properties.currentColorGradient = this._properties.currentColorGradient, JJ._properties.currentColor1.rZJ(this._properties.currentColor1), JJ._properties.currentColor2.rZJ(this._properties.currentColor2)), this._properties.currentSizeGradient && (JJ._properties.currentSizeGradient = this._properties.currentSizeGradient, JJ._properties.currentSize1 = this._properties.currentSize1, JJ._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (JJ._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, JJ._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, JJ._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (JJ._properties.currentVelocityGradient = this._properties.currentVelocityGradient, JJ._properties.currentVelocity1 = this._properties.currentVelocity1, JJ._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (JJ._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, JJ._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, JJ._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (JJ._properties.currentDragGradient = this._properties.currentDragGradient, JJ._properties.currentDrag1 = this._properties.currentDrag1, JJ._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (JJ._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, JJ._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, JJ._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (JJ.remapData && this.remapData ? JJ.remapData.rZJ(this.remapData) : JJ.remapData = new eJ.k(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (JJ._properties.randomNoiseCoordinates1 && JJ._properties.randomNoiseCoordinates2 ? (JJ._properties.randomNoiseCoordinates1.rZJ(this._properties.randomNoiseCoordinates1), JJ._properties.randomNoiseCoordinates2.rZJ(this._properties.randomNoiseCoordinates2)) : (JJ._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), JJ._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), JJ.metadata = this.metadata
      }
    }
    KJ._Count = 0;
    var yJ = ZJ(39958);
    class SJ {
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
      constructor(JJ, cJ, ZJ, FJ) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = cJ, this.wL = JJ, this._scene = ZJ, this._host = FJ, this._activeTargets = [], cJ._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Mc: this._getCorrectLoopMode()
          }, this._animation.dataType === yJ.c.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = eJ.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const JJ = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, JJ)
        }
        if (this.wL instanceof Array) {
          let JJ = 0;
          for (const cJ of this.wL) this._preparePath(cJ, JJ), this._getOriginalValues(JJ), JJ++;
          this._targetIsArray = !0
        } else this._preparePath(this.wL), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const UJ = cJ.getEvents();
        if (UJ && UJ.length > 0)
          for (const eJ of UJ) this._events.push(eJ._clone());
        this._enableBlending = JJ && JJ.animationPropertiesOverride ? JJ.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZJ = this._animation.targetPropertyPath;
        if (ZJ.length > 1) {
          let FJ = JJ;
          for (let JJ = 0; JJ < ZJ.length - 1; JJ++) {
            const cJ = ZJ[JJ];
            if (FJ = FJ[cJ], void 0 === FJ) throw new Error(`Invalid property (${cJ}) in property path (${ZJ.join(".")})`)
          }
          this._targetPath = ZJ[ZJ.length - 1], this._activeTargets[cJ] = FJ
        } else this._targetPath = ZJ[0], this._activeTargets[cJ] = JJ;
        if (void 0 === this._activeTargets[cJ][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${ZJ.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.wL instanceof Array) {
            let JJ = 0;
            for (const cJ of this.wL) void 0 !== this._originalValue[JJ] && this._setValue(cJ, this._activeTargets[JJ], this._originalValue[JJ], -1, JJ), JJ++
          } else void 0 !== this._originalValue[0] && this._setValue(this.wL, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let JJ = 0; JJ < this._events.length; JJ++) this._events[JJ].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const JJ = this._animation.runtimeAnimations.indexOf(this);
        JJ > -1 && this._animation.runtimeAnimations.splice(JJ, 1)
      }
      setValue(JJ, cJ) {
        if (this._targetIsArray)
          for (let ZJ = 0; ZJ < this.wL.length; ZJ++) {
            const FJ = this.wL[ZJ];
            this._setValue(FJ, this._activeTargets[ZJ], JJ, cJ, ZJ)
          } else this._setValue(this.wL, this._directTarget, JJ, cJ, 0)
      }
      _getOriginalValues() {
        let JJ, cJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const ZJ = this._activeTargets[cJ];
        if (yJ.c.InheritOriginalValueFromActiveAnimations) {
          const JJ = this._scene._activeAnimatables;
          for (let FJ = 0; FJ < JJ.length; FJ++) {
            const UJ = JJ[FJ]._runtimeAnimations;
            for (let JJ = 0; JJ < UJ.length; JJ++) {
              const FJ = UJ[JJ];
              if (FJ !== this && FJ._targetPath === this._targetPath)
                for (let JJ = 0; JJ < FJ._activeTargets.length; JJ++)
                  if (FJ._activeTargets[JJ] === ZJ && void 0 !== FJ._originalValue[JJ]) return void(FJ._originalValue[JJ] && FJ._originalValue[JJ].clone ? this._originalValue[cJ] = FJ._originalValue[JJ].clone() : this._originalValue[cJ] = FJ._originalValue[JJ])
            }
          }
        }
        JJ = ZJ.getLocalMatrix && "_matrix" === this._targetPath ? ZJ.getLocalMatrix() : ZJ[this._targetPath], JJ && JJ.clone ? this._originalValue[cJ] = JJ.clone() : this._originalValue[cJ] = JJ
      }
      _registerTargetForLateAnimationBinding(JJ, cJ) {
        const ZJ = JJ.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(ZJ), ZJ._lateAnimationHolders || (ZJ._lateAnimationHolders = {}), ZJ._lateAnimationHolders[JJ.targetPath] || (ZJ._lateAnimationHolders[JJ.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: cJ
        }), JJ.isAdditive ? (ZJ._lateAnimationHolders[JJ.targetPath].additiveAnimations.push(JJ), ZJ._lateAnimationHolders[JJ.targetPath].totalAdditiveWeight += JJ.weight) : (ZJ._lateAnimationHolders[JJ.targetPath].animations.push(JJ), ZJ._lateAnimationHolders[JJ.targetPath].totalWeight += JJ.weight)
      }
      _setValue(JJ, cJ, ZJ, FJ, UJ) {
        const XJ = this._scene._animationWrites,
          AJ = this._scene._animationWriteCount++;
        let qJ = XJ[AJ];
        if (qJ || (qJ = XJ[AJ] = {
            runtimeAnimation: this,
            target: JJ,
            weight: FJ,
            additive: !1,
            blendingFactor: 1,
            Yf: !1
          }), qJ.runtimeAnimation = this, qJ.target = JJ, qJ.weight = FJ, qJ.additive = this.isAdditive, qJ.Yf = !1, this._currentActiveTarget = cJ, this._weight = FJ, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const JJ = cJ[this._targetPath];
            JJ.clone ? this._originalBlendValue = JJ.clone() : this._originalBlendValue = JJ
          }
          this._originalBlendValue.m ? yJ.c.AllowMatrixDecomposeForInterpolation ? this._currentValue ? eJ.b.DecomposeLerpToRef(this._originalBlendValue, ZJ, this._blendingFactor, this._currentValue) : this._currentValue = eJ.b.DecomposeLerp(this._originalBlendValue, ZJ, this._blendingFactor) : this._currentValue ? eJ.b.LerpToRef(this._originalBlendValue, ZJ, this._blendingFactor, this._currentValue) : this._currentValue = eJ.b.Lerp(this._originalBlendValue, ZJ, this._blendingFactor) : this._currentValue = yJ.c._UniversalLerp(this._originalBlendValue, ZJ, this._blendingFactor);
          const FJ = JJ && JJ.animationPropertiesOverride ? JJ.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          qJ.blendingFactor = this._blendingFactor, this._blendingFactor += FJ
        } else qJ.blendingFactor = 1, this._currentValue ? this._currentValue.rZJ ? this._currentValue.rZJ(ZJ) : this._currentValue = ZJ : this._currentValue = ZJ?.clone ? ZJ.clone() : ZJ; - 1 !== FJ ? this._registerTargetForLateAnimationBinding(this, this._originalValue[UJ]) : this._animationState.Mc === yJ.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[UJ], cJ[this._targetPath]) : cJ[this._targetPath] = this._originalValue[UJ] + this._currentValue : cJ[this._targetPath] = this._currentValue, JJ.ycJ && JJ.ycJ(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.wL && this.wL.animationPropertiesOverride) {
          return "MorphTarget" === this.wL.getClassName?.() && null == this.wL._animationPropertiesOverride ? this._animation.Mc : this.wL.animationPropertiesOverride.Mc
        }
        return this._animation.Mc
      }
      goToFrame(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const ZJ = this._animation.getKeys();
        JJ < ZJ[0].frame ? JJ = ZJ[0].frame : JJ > ZJ[ZJ.length - 1].frame && (JJ = ZJ[ZJ.length - 1].frame);
        const FJ = this._events;
        if (FJ.length)
          for (let eJ = 0; eJ < FJ.length; eJ++) FJ[eJ].onlyOnce || (FJ[eJ].isDone = FJ[eJ].frame < JJ);
        this._currentFrame = JJ;
        const UJ = this._animation._interpolate(JJ, this._animationState);
        this.setValue(UJ, cJ)
      }
      _prepareForSpeedRatioChange(JJ) {
        const cJ = this._previousElapsedTime * (this._animation.framePerSecond * JJ) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - cJ
      }
      animate(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const XJ = this._animation,
          AJ = XJ.targetPropertyPath;
        if (!AJ || AJ.length < 1) return this._stopped = !0, !1;
        let qJ, jJ = !0;
        const YJ = this._events;
        let hJ;
        if (this._coreRuntimeAnimation) hJ = ZJ - cJ, qJ = this._coreRuntimeAnimation.currentFrame, this._currentFrame = qJ, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let eJ;
          (cJ < this._minFrame || cJ > this._maxFrame) && (cJ = this._minFrame), (ZJ < this._minFrame || ZJ > this._maxFrame) && (ZJ = this._maxFrame), hJ = ZJ - cJ;
          let AJ = JJ * (XJ.framePerSecond * UJ) / 1e3 + this._absoluteFrameOffset,
            DJ = 0,
            sJ = !1;
          const nJ = FJ && this._animationState.Mc === yJ.c.ANIMATIONLOOPMODE_YOYO;
          if (nJ) {
            const JJ = (AJ - cJ) / hJ,
              ZJ = Math.sin(JJ * Math.PI);
            AJ = Math.abs(ZJ) * hJ + cJ;
            const FJ = ZJ >= 0 ? 1 : -1;
            this._yoyoDirection !== FJ && (sJ = !0), this._yoyoDirection = FJ
          }
          if (this._previousElapsedTime = JJ, this._previousAbsoluteFrame = AJ, !FJ && ZJ >= cJ && (AJ >= hJ && UJ > 0 || AJ <= 0 && UJ < 0)) jJ = !1, DJ = XJ.evaluate(ZJ);
          else if (!FJ && cJ >= ZJ && (AJ <= hJ && UJ < 0 || AJ >= 0 && UJ > 0)) jJ = !1, DJ = XJ.evaluate(cJ);
          else if (this._animationState.Mc !== yJ.c.ANIMATIONLOOPMODE_CYCLE) {
            const JJ = ZJ.toString() + cJ.toString();
            if (!this._offsetsCache[JJ]) {
              this._animationState.repeatCount = 0, this._animationState.Mc = yJ.c.ANIMATIONLOOPMODE_CYCLE;
              const FJ = XJ._interpolate(cJ, this._animationState),
                UJ = XJ._interpolate(ZJ, this._animationState);
              switch (this._animationState.Mc = this._getCorrectLoopMode(), XJ.dataType) {
                case yJ.c.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[JJ] = UJ - FJ;
                  break;
                case yJ.c.ANIMATIONTYPE_QUATERNION:
                case yJ.c.ANIMATIONTYPE_VECTOR3:
                case yJ.c.ANIMATIONTYPE_VECTOR2:
                case yJ.c.ANIMATIONTYPE_SIZE:
                case yJ.c.ANIMATIONTYPE_COLOR3:
                case yJ.c.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[JJ] = UJ.subtract(FJ)
              }
              this._highLimitsCache[JJ] = UJ
            }
            DJ = this._highLimitsCache[JJ], eJ = this._offsetsCache[JJ]
          }
          if (void 0 === eJ) switch (XJ.dataType) {
            case yJ.c.ANIMATIONTYPE_FLOAT:
              eJ = 0;
              break;
            case yJ.c.ANIMATIONTYPE_QUATERNION:
              eJ = yJ.m;
              break;
            case yJ.c.ANIMATIONTYPE_VECTOR3:
              eJ = yJ.v;
              break;
            case yJ.c.ANIMATIONTYPE_VECTOR2:
              eJ = yJ.s;
              break;
            case yJ.c.ANIMATIONTYPE_SIZE:
              eJ = yJ.q;
              break;
            case yJ.c.ANIMATIONTYPE_COLOR3:
              eJ = yJ.h;
              break;
            case yJ.c.ANIMATIONTYPE_COLOR4:
              eJ = yJ.j
          }
          const GJ = this._host ? this._host.syncRoot : null;
          let fJ, xJ = this._playbackFrames,
            rJ = !1;
          if (GJ) {
            const JJ = GJ.toFrame - GJ.fromFrame,
              ZJ = GJ.masterFrame,
              FJ = (ZJ - GJ.fromFrame) / JJ;
            qJ = cJ + hJ * FJ;
            const UJ = GJ.getAnimations()[0];
            if (UJ && 0 !== JJ) {
              const JJ = hJ * FJ,
                cJ = UJ._playbackTo - UJ._playbackFrom;
              if (0 !== cJ && UJ._playbackFrom <= GJ.fromFrame && UJ._playbackTo >= GJ.toFrame) {
                xJ = hJ * Math.round((UJ._playbackFrames - (UJ._currentFrame - UJ._playbackFrom)) / cJ) + JJ
              } else rJ = (ZJ - this._playbackSyncMasterFrame) * (UJ._playbackFrames - this._playbackSyncMasterPlayed) < 0, xJ = JJ;
              rJ = rJ || UJ._playbackJumped, this._playbackSyncMasterPlayed = UJ._playbackFrames, this._playbackSyncMasterFrame = ZJ
            }
          } else qJ = AJ > 0 && cJ > ZJ || AJ < 0 && cJ < ZJ ? jJ && 0 !== hJ ? ZJ + AJ % hJ : cJ : jJ && 0 !== hJ ? cJ + AJ % hJ : ZJ;
          if (!nJ && (UJ > 0 && this.currentFrame > qJ || UJ < 0 && this.currentFrame < qJ) || nJ && sJ) {
            this._onLoop();
            for (let JJ = 0; JJ < YJ.length; JJ++) YJ[JJ].onlyOnce || (YJ[JJ].isDone = !1);
            this._animationState.key = UJ > 0 ? 0 : XJ.getKeys().length - 1
          }
          if (this._currentFrame = qJ, this._animationState.repeatCount = 0 === hJ ? 0 : AJ / hJ | 0, this._animationState.highLimitValue = DJ, this._animationState.offsetValue = eJ, this._playbackFrom = cJ, this._playbackTo = ZJ, this._playbackJumped = rJ, this._playbackSyncRoot = GJ, GJ) fJ = xJ;
          else if (jJ) fJ = nJ ? qJ === cJ && AJ === ZJ ? hJ : qJ - cJ : AJ;
          else {
            const JJ = 0 !== hJ ? Math.floor(this._playbackFrames / hJ) : 0;
            fJ = (qJ === ZJ ? JJ + 1 : JJ) * hJ
          }
          this._playbackFrames = fJ, this._playbackProgress = this._animationState.Mc === yJ.c.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? hJ : fJ
        }
        const DJ = XJ._interpolate(qJ, this._animationState);
        if (this.setValue(DJ, eJ), YJ.length)
          for (let sJ = 0; sJ < YJ.length; sJ++)
            if (hJ >= 0 && qJ >= YJ[sJ].frame && YJ[sJ].frame >= cJ || hJ < 0 && qJ <= YJ[sJ].frame && YJ[sJ].frame <= cJ) {
              const JJ = YJ[sJ];
              JJ.isDone || (JJ.onlyOnce && (YJ.splice(sJ, 1), sJ--), JJ.isDone = !0, JJ.action(qJ))
            } return jJ || (this._stopped = !0), jJ
      }
    }
    var IJ = ZJ(38700);
    class MJ {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(JJ) {
        this._weight = -1 !== JJ ? Math.min(Math.max(JJ, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(JJ) {
        for (let cJ = 0; cJ < this._runtimeAnimations.length; cJ++) {
          this._runtimeAnimations[cJ]._prepareForSpeedRatioChange(JJ)
        }
        this._speedRatio = JJ, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          eJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          XJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          AJ = arguments.length > 6 ? arguments[6] : void 0,
          qJ = arguments.length > 7 ? arguments[7] : void 0,
          jJ = arguments.length > 8 ? arguments[8] : void 0,
          YJ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          hJ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = cJ, this.fromFrame = ZJ, this.toFrame = FJ, this.loopAnimation = eJ, this.onAnimationEnd = AJ, this.onAnimationLoop = jJ, this.isAdditive = YJ, this.playOrder = hJ, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.kE = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new UJ.c, this.onAnimationLoopObservable = new UJ.c, this._scene = JJ, qJ && this.appendAnimations(cJ, qJ), this._speedRatio = XJ, JJ._activeAnimatables.push(this)
      }
      syncWith(JJ) {
        if (this._syncRoot = JJ, JJ) {
          const JJ = this._scene._activeAnimatables.indexOf(this);
          JJ > -1 && (this._scene._activeAnimatables.splice(JJ, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(JJ, cJ) {
        for (let ZJ = 0; ZJ < cJ.length; ZJ++) {
          const FJ = cJ[ZJ],
            UJ = new SJ(JJ, FJ, this._scene, this);
          UJ._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(UJ)
        }
      }
      getAnimationByTargetProperty(JJ) {
        const cJ = this._runtimeAnimations;
        for (let ZJ = 0; ZJ < cJ.length; ZJ++)
          if (cJ[ZJ].animation.targetProperty === JJ) return cJ[ZJ].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(JJ) {
        const cJ = this._runtimeAnimations;
        for (let ZJ = 0; ZJ < cJ.length; ZJ++)
          if (cJ[ZJ].animation.targetProperty === JJ) return cJ[ZJ];
        return null
      }
      reset() {
        const JJ = this._runtimeAnimations;
        for (let cJ = 0; cJ < JJ.length; cJ++) JJ[cJ].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(JJ) {
        const cJ = this._runtimeAnimations;
        for (let ZJ = 0; ZJ < cJ.length; ZJ++) cJ[ZJ].animation.enableBlending = !0, cJ[ZJ].animation.blendingSpeed = JJ
      }
      disableBlending() {
        const JJ = this._runtimeAnimations;
        for (let cJ = 0; cJ < JJ.length; cJ++) JJ[cJ].animation.enableBlending = !1
      }
      goToFrame(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = this._runtimeAnimations;
        if (ZJ[0]) {
          const cJ = ZJ[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? ZJ[0].currentFrame;
          const FJ = 0 === this.speedRatio ? 0 : (JJ - this._frameToSyncFromJump) / cJ * 1e3 / this.speedRatio;
          this._manualJumpDelay = -FJ
        }
        for (let FJ = 0; FJ < ZJ.length; FJ++) ZJ[FJ].goToFrame(JJ, cJ ? this._weight : -1);
        this._goToFrame = JJ
      }
      get paused() {
        return this.kE
      }
      pause() {
        this.kE || (this.kE = !0)
      }
      restart() {
        this.kE = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (JJ || cJ) {
          const UJ = this._scene._activeAnimatables.indexOf(this);
          if (UJ > -1) {
            const eJ = this._runtimeAnimations;
            for (let ZJ = eJ.length - 1; ZJ >= 0; ZJ--) {
              const FJ = eJ[ZJ];
              JJ && FJ.animation.name != JJ || (cJ && !cJ(FJ.target) || (FJ.dispose(), eJ.splice(ZJ, 1)))
            }
            0 == eJ.length && (ZJ || this._scene._activeAnimatables.splice(UJ, 1), FJ || this._raiseOnAnimationEnd())
          }
        } else {
          const JJ = this._scene._activeAnimatables.indexOf(this);
          if (JJ > -1) {
            ZJ || this._scene._activeAnimatables.splice(JJ, 1);
            const cJ = this._runtimeAnimations;
            for (let JJ = 0; JJ < cJ.length; JJ++) cJ[JJ].dispose();
            this._runtimeAnimations.length = 0, FJ || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((JJ => {
          this.onAnimationEndObservable.add((() => {
            JJ(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(JJ) {
        if (this.kE) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = JJ), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = JJ, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += JJ - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !MJ.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let cJ = !1;
        const ZJ = this._runtimeAnimations;
        let FJ;
        for (FJ = 0; FJ < ZJ.length; FJ++) {
          const UJ = ZJ[FJ].animate(JJ - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          cJ = cJ || UJ
        }
        if (this.animationStarted = cJ, !cJ) {
          if (this.disposeOnEnd)
            for (FJ = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(FJ, 1), FJ = 0; FJ < ZJ.length; FJ++) ZJ[FJ].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return cJ
      }
    }

    function bJ(JJ) {
      if (0 === JJ.totalWeight && 0 === JJ.totalAdditiveWeight) return JJ.originalValue;
      let cJ = 1;
      const ZJ = eJ.h.Pn[0],
        FJ = eJ.h.Pn[1],
        UJ = eJ.h.Quaternion[0];
      let XJ = 0;
      const AJ = JJ.animations[0],
        qJ = JJ.originalValue;
      let jJ, YJ = !1;
      if (JJ.totalWeight < 1) jJ = 1 - JJ.totalWeight, qJ.decompose(FJ, UJ, ZJ);
      else {
        if (XJ = 1, cJ = JJ.totalWeight, jJ = AJ.weight / cJ, 1 == jJ) {
          if (!JJ.totalAdditiveWeight) return AJ.currentValue;
          YJ = !0
        }
        AJ.currentValue.decompose(FJ, UJ, ZJ)
      }
      if (!YJ) {
        FJ.scaleInPlace(jJ), ZJ.scaleInPlace(jJ), UJ.scaleInPlace(jJ);
        for (let AJ = XJ; AJ < JJ.animations.length; AJ++) {
          const XJ = JJ.animations[AJ];
          if (0 === XJ.weight) continue;
          jJ = XJ.weight / cJ;
          const qJ = eJ.h.Pn[2],
            YJ = eJ.h.Pn[3],
            hJ = eJ.h.Quaternion[1];
          XJ.currentValue.decompose(YJ, hJ, qJ), YJ.scaleAndAddToRef(jJ, FJ), hJ.scaleAndAddToRef(eJ.e.Dot(UJ, hJ) > 0 ? jJ : -jJ, UJ), qJ.scaleAndAddToRef(jJ, ZJ)
        }
        UJ.normalize()
      }
      for (let DJ = 0; DJ < JJ.additiveAnimations.length; DJ++) {
        const cJ = JJ.additiveAnimations[DJ];
        if (0 === cJ.weight) continue;
        const XJ = eJ.h.Pn[2],
          AJ = eJ.h.Pn[3],
          qJ = eJ.h.Quaternion[1];
        cJ.currentValue.decompose(AJ, qJ, XJ), AJ.multiplyToRef(FJ, AJ), eJ.j.LerpToRef(FJ, AJ, cJ.weight, FJ), UJ.multiplyToRef(qJ, qJ), eJ.e.SlerpToRef(UJ, qJ, cJ.weight, UJ), XJ.scaleAndAddToRef(cJ.weight, ZJ)
      }
      const hJ = AJ ? AJ._animationState.workValue : eJ.h.Matrix[0].clone();
      return eJ.b.ComposeToRef(FJ, UJ, ZJ, hJ), hJ
    }

    function wJ(JJ, cJ) {
      if (0 === JJ.totalWeight && 0 === JJ.totalAdditiveWeight) return cJ;
      const ZJ = JJ.animations[0],
        FJ = JJ.originalValue;
      let UJ = cJ;
      if (0 === JJ.totalWeight && JJ.totalAdditiveWeight > 0) UJ.rZJ(FJ);
      else if (1 === JJ.animations.length) {
        if (eJ.e.SlerpToRef(FJ, ZJ.currentValue, Math.min(1, JJ.totalWeight), UJ), 0 === JJ.totalAdditiveWeight) return UJ
      } else if (JJ.animations.length > 1) {
        let ZJ, XJ, AJ = 1;
        if (JJ.totalWeight < 1) {
          const cJ = 1 - JJ.totalWeight;
          ZJ = [], XJ = [], ZJ.push(FJ), XJ.push(cJ)
        } else {
          if (2 === JJ.animations.length && (eJ.e.SlerpToRef(JJ.animations[0].currentValue, JJ.animations[1].currentValue, JJ.animations[1].weight / JJ.totalWeight, cJ), 0 === JJ.totalAdditiveWeight)) return cJ;
          ZJ = [], XJ = [], AJ = JJ.totalWeight
        }
        for (let cJ = 0; cJ < JJ.animations.length; cJ++) {
          const FJ = JJ.animations[cJ];
          ZJ.push(FJ.currentValue), XJ.push(FJ.weight / AJ)
        }
        let qJ = 0;
        for (let JJ = 0; JJ < ZJ.length;) JJ ? (qJ += XJ[JJ], eJ.e.SlerpToRef(UJ, ZJ[JJ], XJ[JJ] / qJ, UJ), JJ++) : (eJ.e.SlerpToRef(ZJ[JJ], ZJ[JJ + 1], XJ[JJ + 1] / (XJ[JJ] + XJ[JJ + 1]), cJ), UJ = cJ, qJ = XJ[JJ] + XJ[JJ + 1], JJ += 2)
      }
      for (let XJ = 0; XJ < JJ.additiveAnimations.length; XJ++) {
        const cJ = JJ.additiveAnimations[XJ];
        0 !== cJ.weight && (UJ.multiplyToRef(cJ.currentValue, eJ.h.Quaternion[0]), eJ.e.SlerpToRef(UJ, eJ.h.Quaternion[0], cJ.weight, UJ))
      }
      return UJ
    }

    function WJ(JJ, cJ) {
      cJ && (cJ.prototype.copyAnimationRange = function(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new yJ.c(this.name, "_matrix", JJ.animations[0].framePerSecond, yJ.c.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const eJ = JJ.animations[0].getRange(cJ);
        if (!eJ) return !1;
        const XJ = eJ.from,
          AJ = eJ.to,
          qJ = JJ.animations[0].getKeys(),
          jJ = JJ.length,
          YJ = JJ.getParent(),
          hJ = this.getParent(),
          DJ = FJ && YJ && jJ && this.length && jJ !== this.length,
          sJ = DJ && hJ && YJ ? hJ.length / YJ.length : 1,
          nJ = FJ && !hJ && UJ && (1 !== UJ.x || 1 !== UJ.y || 1 !== UJ.z),
          GJ = this.animations[0].getKeys();
        let fJ, xJ, rJ;
        for (let vJ = 0, mJ = qJ.length; vJ < mJ; vJ++) fJ = qJ[vJ], fJ.frame >= XJ && fJ.frame <= AJ && (FJ ? (rJ = fJ.value.clone(), DJ ? (xJ = rJ.getTranslation(), rJ.setTranslation(xJ.scaleInPlace(sJ))) : nJ && UJ ? (xJ = rJ.getTranslation(), rJ.setTranslation(xJ.multiplyInPlace(UJ))) : rJ = fJ.value) : rJ = fJ.value, GJ.push({
          frame: fJ.frame + ZJ,
          value: rJ
        }));
        return this.animations[0].createRange(cJ, XJ + ZJ, AJ + ZJ), !0
      }), JJ && (JJ.prototype._animate = function(JJ) {
        const cJ = this._animationWrites,
          ZJ = this._animationWriteCount;
        let FJ = 0;
        for (let eJ = this._animationStepWriteCount; eJ < ZJ; eJ++) {
          const JJ = cJ[eJ];
          JJ.Yf && -1 === JJ.weight || (JJ.Yf = !0, cJ[eJ] = cJ[FJ], cJ[FJ] = JJ, FJ++)
        }
        for (let eJ = FJ; eJ < ZJ; eJ++) {
          const JJ = cJ[eJ];
          JJ.runtimeAnimation = null, JJ.target = null
        }
        if (this._animationWriteCount = FJ, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const UJ = IJ.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = UJ
        }
        this.deltaTime = void 0 !== JJ ? JJ : this.useConstantAnimationDeltaTime ? 16 : (UJ - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = UJ;
        const XJ = this._activeAnimatables;
        if (0 === XJ.length) return;
        this._animationTime += this.deltaTime;
        const AJ = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let eJ = 0; eJ < XJ.length; eJ++) {
          const JJ = XJ[eJ];
          !JJ._animate(AJ) && JJ.disposeOnEnd && eJ--
        }! function(JJ) {
          if (JJ._registeredForLateAnimationBindings.length) {
            for (let cJ = 0; cJ < JJ._registeredForLateAnimationBindings.length; cJ++) {
              const ZJ = JJ._registeredForLateAnimationBindings.data[cJ];
              for (const JJ in ZJ._lateAnimationHolders) {
                const cJ = ZJ._lateAnimationHolders[JJ],
                  FJ = cJ.animations[0],
                  UJ = cJ.originalValue;
                if (void 0 === UJ || null === UJ) continue;
                const XJ = yJ.c.AllowMatrixDecomposeForInterpolation && UJ.m;
                let AJ = ZJ[JJ];
                if (XJ) AJ = bJ(cJ);
                else if (void 0 !== UJ.w) AJ = wJ(cJ, AJ || eJ.e.Identity());
                else {
                  let JJ = 0,
                    ZJ = 1;
                  const eJ = FJ && FJ._animationState.Mc === yJ.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (cJ.totalWeight < 1) AJ = eJ ? UJ.clone ? UJ.clone() : UJ : FJ && UJ.scale ? UJ.scale(1 - cJ.totalWeight) : FJ ? UJ * (1 - cJ.totalWeight) : UJ.clone ? UJ.clone() : UJ;
                  else if (FJ) {
                    ZJ = cJ.totalWeight;
                    const XJ = FJ.weight / ZJ;
                    AJ = 1 !== XJ ? FJ.currentValue.scale ? FJ.currentValue.scale(XJ) : FJ.currentValue * XJ : (cJ.animations.length > 1 || cJ.additiveAnimations.length > 0) && FJ.currentValue.clone ? FJ.currentValue.clone() : FJ.currentValue, eJ && (AJ.addToRef ? AJ.addToRef(UJ, AJ) : AJ += UJ), JJ = 1
                  }
                  for (let FJ = JJ; FJ < cJ.animations.length; FJ++) {
                    const JJ = cJ.animations[FJ],
                      UJ = JJ.weight / ZJ;
                    UJ && (JJ.currentValue.scaleAndAddToRef ? JJ.currentValue.scaleAndAddToRef(UJ, AJ) : AJ += JJ.currentValue * UJ)
                  }
                  for (let FJ = 0; FJ < cJ.additiveAnimations.length; FJ++) {
                    const JJ = cJ.additiveAnimations[FJ],
                      ZJ = JJ.weight;
                    ZJ && (JJ.currentValue.scaleAndAddToRef ? JJ.currentValue.scaleAndAddToRef(ZJ, AJ) : AJ += JJ.currentValue * ZJ)
                  }
                }
                ZJ[JJ] = AJ
              }
              ZJ._lateAnimationHolders = {}
            }
            JJ._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, JJ.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((JJ, cJ) => JJ.playOrder - cJ.playOrder))
      }, JJ.prototype.beginWeightedAnimation = function(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          UJ = arguments.length > 4 ? arguments[4] : void 0,
          eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          XJ = arguments.length > 6 ? arguments[6] : void 0,
          AJ = arguments.length > 7 ? arguments[7] : void 0,
          qJ = arguments.length > 8 ? arguments[8] : void 0,
          jJ = arguments.length > 9 ? arguments[9] : void 0,
          YJ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const hJ = this.beginAnimation(JJ, cJ, ZJ, UJ, eJ, XJ, AJ, !1, qJ, jJ, YJ);
        return hJ.weight = FJ, hJ
      }, JJ.prototype.beginAnimation = function(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          eJ = arguments.length > 5 ? arguments[5] : void 0,
          XJ = arguments.length > 6 ? arguments[6] : void 0,
          AJ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qJ = arguments.length > 8 ? arguments[8] : void 0,
          jJ = arguments.length > 9 ? arguments[9] : void 0,
          YJ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (UJ < 0) {
          const JJ = cJ;
          cJ = ZJ, ZJ = JJ, UJ = -UJ
        }
        cJ > ZJ && (UJ = -UJ), AJ && this.stopAnimation(JJ, void 0, qJ), XJ || (XJ = new MJ(this, JJ, cJ, ZJ, FJ, UJ, eJ, void 0, jJ, YJ));
        const hJ = !qJ || qJ(JJ);
        if (JJ.animations && hJ && XJ.appendAnimations(JJ, JJ.animations), JJ.getAnimatables) {
          const YJ = JJ.getAnimatables();
          for (let JJ = 0; JJ < YJ.length; JJ++) this.beginAnimation(YJ[JJ], cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ)
        }
        return XJ.reset(), XJ
      }, JJ.prototype.beginHierarchyAnimation = function(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          XJ = arguments.length > 6 ? arguments[6] : void 0,
          AJ = arguments.length > 7 ? arguments[7] : void 0,
          qJ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          jJ = arguments.length > 9 ? arguments[9] : void 0,
          YJ = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const hJ = JJ.getDescendants(cJ),
          DJ = [];
        DJ.push(this.beginAnimation(JJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, void 0, YJ));
        for (const sJ of hJ) DJ.push(this.beginAnimation(sJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, void 0, YJ));
        return DJ
      }, JJ.prototype.beginDirectAnimation = function(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (eJ < 0) {
          const JJ = ZJ;
          ZJ = FJ, FJ = JJ, eJ = -eJ
        }
        ZJ > FJ && (eJ = -eJ);
        return new MJ(this, JJ, ZJ, FJ, UJ, eJ, arguments.length > 6 ? arguments[6] : void 0, cJ, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, JJ.prototype.beginDirectHierarchyAnimation = function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        let jJ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const YJ = JJ.getDescendants(cJ),
          hJ = [];
        hJ.push(this.beginDirectAnimation(JJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ));
        for (const DJ of YJ) hJ.push(this.beginDirectAnimation(DJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ));
        return hJ
      }, JJ.prototype.getAnimatableByTarget = function(JJ) {
        for (let cJ = 0; cJ < this._activeAnimatables.length; cJ++)
          if (this._activeAnimatables[cJ].target === JJ) return this._activeAnimatables[cJ];
        return null
      }, JJ.prototype.getAllAnimatablesByTarget = function(JJ) {
        const cJ = [];
        for (let ZJ = 0; ZJ < this._activeAnimatables.length; ZJ++) this._activeAnimatables[ZJ].target === JJ && cJ.push(this._activeAnimatables[ZJ]);
        return cJ
      }, JJ.prototype.stopAnimation = function(JJ, cJ, ZJ) {
        const FJ = this.getAllAnimatablesByTarget(JJ);
        for (const UJ of FJ) UJ.stop(cJ, ZJ)
      }, JJ.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let JJ = 0; JJ < this._activeAnimatables.length; JJ++) this._activeAnimatables[JJ].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const JJ of this.animationGroups) JJ.stop()
      })
    }
    MJ.ProcessPausedAnimatables = !1;
    var gJ, HJ = ZJ(36183),
      PJ = ZJ(38989),
      kJ = ZJ(38677);
    class pJ extends PJ.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(JJ) {
        (JJ.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.rZJ(JJ), this._markAsDirtyAndDecompose())
      }
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          XJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          AJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(JJ, cJ.Qy(), !1), this.name = JJ, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = cJ, this._localMatrix = FJ?.clone() ?? eJ.b.Identity(), this._restMatrix = UJ ?? this._localMatrix.clone(), this._bindMatrix = XJ ?? this._localMatrix.clone(), this._index = AJ, this._absoluteMatrix = new eJ.b, this._absoluteBindMatrix = new eJ.b, this._absoluteInverseBindMatrix = new eJ.b, this._finalMatrix = new eJ.b, cJ.bones.push(this), this.setParent(ZJ, !1), this._updateAbsoluteBindMatrices()
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
      set parent(JJ) {
        this.setParent(JJ)
      }
      setParent(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== JJ) {
          if (this.parent) {
            const JJ = this.parent.children.indexOf(this); - 1 !== JJ && this.parent.children.splice(JJ, 1)
          }
          this._parentNode = JJ, this.parent && this.parent.children.push(this), cJ && this._updateAbsoluteBindMatrices(), this.ycJ()
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
      setRestMatrix(JJ) {
        this._restMatrix.rZJ(JJ)
      }
      setRestPose(JJ) {
        this.setRestMatrix(JJ)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(JJ) {
        this.Y5(JJ)
      }
      setBindPose(JJ) {
        this.setBindMatrix(JJ)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const JJ = eJ.h.Pn[0],
            cJ = eJ.h.Quaternion[0],
            ZJ = eJ.h.Pn[1];
          this.getRestMatrix().decompose(JJ, cJ, ZJ), this._linkedTransformNode.position.rZJ(ZJ), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? eJ.e.Identity(), this._linkedTransformNode.rotationQuaternion.rZJ(cJ), this._linkedTransformNode.GA.rZJ(JJ)
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
      linkTransformNode(JJ) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = JJ, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.NJJ
      }
      set position(JJ) {
        this._decompose(), this.NJJ.rZJ(JJ), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(JJ) {
        this.setRotation(JJ)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(JJ) {
        this.setRotationQuaternion(JJ)
      }
      get GA() {
        return this.getScale()
      }
      set GA(JJ) {
        this.setScale(JJ)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = eJ.j.Zero(), this._localRotation = eJ.e.Zero(), this.NJJ = eJ.j.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.NJJ))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, eJ.b.ComposeToRef(this._localScaling, this._localRotation, this.NJJ, this._localMatrix)) : this._needToCompose = !1)
      }
      Y5(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.rZJ(JJ), cJ && this._updateAbsoluteBindMatrices(), ZJ ? this._matrix = JJ : this.ycJ()
      }
      _updateAbsoluteBindMatrices(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (JJ || (JJ = this._bindMatrix), this.parent ? JJ.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.rZJ(JJ), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), cJ)
          for (let ZJ = 0; ZJ < this.children.length; ZJ++) this.children[ZJ]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      ycJ() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.ycJ(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.ycJ(), this._needToDecompose = !0
      }
      _updatePosition(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const UJ = this.getLocalMatrix();
        if (0 == cJ) FJ ? (UJ.addAtIndex(12, JJ.x), UJ.addAtIndex(13, JJ.y), UJ.addAtIndex(14, JJ.z)) : UJ.setTranslationFromFloats(JJ.x, JJ.y, JJ.z);
        else {
          const cJ = pJ._TmpMats[0],
            XJ = pJ._TmpVecs[0];
          this.parent ? (cJ.rZJ(this.parent.getAbsoluteMatrix()), ZJ && cJ.multiplyToRef(ZJ.getWorldMatrix(), cJ)) : eJ.b.IdentityToRef(cJ), FJ && cJ.setTranslationFromFloats(0, 0, 0), cJ.invert(), eJ.j.TransformCoordinatesToRef(JJ, cJ, XJ), FJ ? (UJ.addAtIndex(12, XJ.x), UJ.addAtIndex(13, XJ.y), UJ.addAtIndex(14, XJ.z)) : UJ.setTranslationFromFloats(XJ.x, XJ.y, XJ.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(JJ, cJ, ZJ, !0)
      }
      setPosition(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(JJ, cJ, ZJ, !1)
      }
      setAbsolutePosition(JJ, cJ) {
        this.setPosition(JJ, 1, cJ)
      }
      scale(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const UJ = this.getLocalMatrix(),
          XJ = pJ._TmpMats[0];
        eJ.b.ScalingToRef(JJ, cJ, ZJ, XJ), XJ.multiplyToRef(UJ, UJ), XJ.invert();
        for (const eJ of this.children) {
          const FJ = eJ.getLocalMatrix();
          FJ.multiplyToRef(XJ, FJ), FJ.multiplyAtIndex(12, JJ), FJ.multiplyAtIndex(13, cJ), FJ.multiplyAtIndex(14, ZJ), eJ._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), FJ)
          for (const eJ of this.children) eJ.scale(JJ, cJ, ZJ, FJ)
      }
      setScale(JJ) {
        this._decompose(), this._localScaling.rZJ(JJ), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(JJ) {
        this._decompose(), JJ.rZJ(this._localScaling)
      }
      setYawPitchRoll(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          UJ = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === FJ) {
          const XJ = pJ._TmpQuat;
          return eJ.e.RotationYawPitchRollToRef(JJ, cJ, ZJ, XJ), void this.setRotationQuaternion(XJ, FJ, UJ)
        }
        const XJ = pJ._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(XJ, UJ)) return;
        const AJ = pJ._TmpMats[1];
        eJ.b.RotationYawPitchRollToRef(JJ, cJ, ZJ, AJ), XJ.multiplyToRef(AJ, AJ), this._rotateWithMatrix(AJ, FJ, UJ)
      }
      rotate(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        const UJ = pJ._TmpMats[0];
        UJ.setTranslationFromFloats(0, 0, 0), eJ.b.RotationAxisToRef(JJ, cJ, UJ), this._rotateWithMatrix(UJ, ZJ, FJ)
      }
      setAxisAngle(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === ZJ) {
          const UJ = pJ._TmpQuat;
          return eJ.e.RotationAxisToRef(JJ, cJ, UJ), void this.setRotationQuaternion(UJ, ZJ, FJ)
        }
        const UJ = pJ._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(UJ, FJ)) return;
        const XJ = pJ._TmpMats[1];
        eJ.b.RotationAxisToRef(JJ, cJ, XJ), UJ.multiplyToRef(XJ, XJ), this._rotateWithMatrix(XJ, ZJ, FJ)
      }
      setRotation(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(JJ.y, JJ.x, JJ.z, cJ, ZJ)
      }
      setRotationQuaternion(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === cJ) return this._decompose(), this._localRotation.rZJ(JJ), void this._markAsDirtyAndCompose();
        const FJ = pJ._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(FJ, ZJ)) return;
        const UJ = pJ._TmpMats[1];
        eJ.b.FromQuaternionToRef(JJ, UJ), FJ.multiplyToRef(UJ, UJ), this._rotateWithMatrix(UJ, cJ, ZJ)
      }
      setRotationMatrix(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === cJ) {
          const FJ = pJ._TmpQuat;
          return eJ.e.FromRotationMatrixToRef(JJ, FJ), void this.setRotationQuaternion(FJ, cJ, ZJ)
        }
        const FJ = pJ._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(FJ, ZJ)) return;
        const UJ = pJ._TmpMats[1];
        UJ.rZJ(JJ), FJ.multiplyToRef(JJ, UJ), this._rotateWithMatrix(UJ, cJ, ZJ)
      }
      _rotateWithMatrix(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const FJ = this.getLocalMatrix(),
          UJ = FJ.m[12],
          eJ = FJ.m[13],
          XJ = FJ.m[14],
          AJ = this.getParent(),
          qJ = pJ._TmpMats[3],
          jJ = pJ._TmpMats[4];
        AJ && 1 == cJ ? (ZJ ? (qJ.rZJ(ZJ.getWorldMatrix()), AJ.getAbsoluteMatrix().multiplyToRef(qJ, qJ)) : qJ.rZJ(AJ.getAbsoluteMatrix()), jJ.rZJ(qJ), jJ.invert(), FJ.multiplyToRef(qJ, FJ), FJ.multiplyToRef(JJ, FJ), FJ.multiplyToRef(jJ, FJ)) : 1 == cJ && ZJ ? (qJ.rZJ(ZJ.getWorldMatrix()), jJ.rZJ(qJ), jJ.invert(), FJ.multiplyToRef(qJ, FJ), FJ.multiplyToRef(JJ, FJ), FJ.multiplyToRef(jJ, FJ)) : FJ.multiplyToRef(JJ, FJ), FJ.setTranslationFromFloats(UJ, eJ, XJ), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(JJ, cJ) {
        const ZJ = pJ._TmpMats[2];
        return JJ.rZJ(this.getAbsoluteMatrix()), cJ ? (JJ.multiplyToRef(cJ.getWorldMatrix(), JJ), eJ.b.ScalingToRef(cJ.GA.x, cJ.GA.y, cJ.GA.z, ZJ)) : eJ.b.IdentityToRef(ZJ), JJ.invert(), !isNaN(JJ.m[0]) && (ZJ.multiplyAtIndex(0, this._scalingDeterminant), JJ.multiplyToRef(ZJ, JJ), !0)
      }
      Om() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZJ = eJ.j.Zero();
        return this.getPositionToRef(JJ, cJ, ZJ), ZJ
      }
      getPositionToRef() {
        let JJ = arguments.length > 1 ? arguments[1] : void 0,
          cJ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const JJ = this.getLocalMatrix();
          cJ.x = JJ.m[12], cJ.y = JJ.m[13], cJ.z = JJ.m[14]
        } else {
          const ZJ = pJ._TmpMats[0].rZJ(this.getAbsoluteMatrix());
          JJ && ZJ.multiplyToRef(JJ.getWorldMatrix(), ZJ), cJ.x = ZJ.m[12], cJ.y = ZJ.m[13], cJ.z = ZJ.m[14]
        }
      }
      getAbsolutePosition() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const cJ = eJ.j.Zero();
        return this.getPositionToRef(1, JJ, cJ), cJ
      }
      getAbsolutePositionToRef(JJ, cJ) {
        this.getPositionToRef(1, JJ, cJ)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.rZJ(this._localMatrix);
          const JJ = this._skeleton.getPoseMatrix();
          JJ && this._absoluteMatrix.multiplyToRef(JJ, this._absoluteMatrix)
        }
        const JJ = this.children,
          cJ = JJ.length;
        for (let ZJ = 0; ZJ < cJ; ZJ++) JJ[ZJ].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      yR(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZJ = eJ.j.Zero();
        return this.getDirectionToRef(JJ, cJ, ZJ), ZJ
      }
      getDirectionToRef(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const FJ = pJ._TmpMats[0].rZJ(this.getAbsoluteMatrix());
        cJ && FJ.multiplyToRef(cJ.getWorldMatrix(), FJ), eJ.j.TransformNormalToRef(JJ, FJ, ZJ), ZJ.normalize()
      }
      getRotation() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZJ = eJ.j.Zero();
        return this.getRotationToRef(JJ, cJ, ZJ), ZJ
      }
      getRotationToRef() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const FJ = pJ._TmpQuat;
        this.getRotationQuaternionToRef(JJ, cJ, FJ), FJ.toEulerAnglesToRef(ZJ)
      }
      getRotationQuaternion() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZJ = eJ.e.Identity();
        return this.getRotationQuaternionToRef(JJ, cJ, ZJ), ZJ
      }
      getRotationQuaternionToRef() {
        let JJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cJ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), cJ.rZJ(this._localRotation);
        else {
          const ZJ = pJ._TmpMats[0],
            FJ = this.getAbsoluteMatrix();
          JJ ? FJ.multiplyToRef(JJ.getWorldMatrix(), ZJ) : ZJ.rZJ(FJ), ZJ.multiplyAtIndex(0, this._scalingDeterminant), ZJ.multiplyAtIndex(1, this._scalingDeterminant), ZJ.multiplyAtIndex(2, this._scalingDeterminant), ZJ.decompose(void 0, cJ, void 0)
        }
      }
      getRotationMatrix() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 ? arguments[1] : void 0;
        const ZJ = eJ.b.Identity();
        return this.getRotationMatrixToRef(JJ, cJ, ZJ), ZJ
      }
      getRotationMatrixToRef() {
        let JJ = arguments.length > 1 ? arguments[1] : void 0,
          cJ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(cJ);
        else {
          const ZJ = pJ._TmpMats[0],
            FJ = this.getAbsoluteMatrix();
          JJ ? FJ.multiplyToRef(JJ.getWorldMatrix(), ZJ) : ZJ.rZJ(FJ), ZJ.multiplyAtIndex(0, this._scalingDeterminant), ZJ.multiplyAtIndex(1, this._scalingDeterminant), ZJ.multiplyAtIndex(2, this._scalingDeterminant), ZJ.getRotationMatrixToRef(cJ)
        }
      }
      getAbsolutePositionFromLocal(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZJ = eJ.j.Zero();
        return this.getAbsolutePositionFromLocalToRef(JJ, cJ, ZJ), ZJ
      }
      getAbsolutePositionFromLocalToRef(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const FJ = pJ._TmpMats[0].rZJ(this.getAbsoluteMatrix());
        cJ && FJ.multiplyToRef(cJ.getWorldMatrix(), FJ), eJ.j.TransformCoordinatesToRef(JJ, FJ, ZJ)
      }
      getLocalPositionFromAbsolute(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZJ = eJ.j.Zero();
        return this.getLocalPositionFromAbsoluteToRef(JJ, cJ, ZJ), ZJ
      }
      getLocalPositionFromAbsoluteToRef(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const FJ = pJ._TmpMats[0].rZJ(this.getAbsoluteMatrix());
        cJ && FJ.multiplyToRef(cJ.getWorldMatrix(), FJ), FJ.invert(), eJ.j.TransformCoordinatesToRef(JJ, FJ, ZJ)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const JJ = this._skeleton.bones.indexOf(this);
        if (-1 !== JJ && this._skeleton.bones.splice(JJ, 1), this._parentNode && this._parentNode.children) {
          const JJ = this._parentNode.children,
            cJ = JJ.indexOf(this); - 1 !== cJ && JJ.splice(cJ, 1)
        }
        super.dispose()
      }
    }
    pJ._TmpVecs = (0, HJ.e)(2, eJ.j.Zero), pJ._TmpQuat = eJ.e.Identity(), pJ._TmpMats = (0, HJ.e)(5, eJ.b.Identity), (gJ = pJ.prototype).copyAnimationRange ?? (gJ.copyAnimationRange = (0, kJ.l)("Bone", "copyAnimationRange"));
    var dJ = ZJ(38874);
    let zJ = !1;
    var NJ = ZJ(38763),
      OJ = ZJ(39079),
      TJ = ZJ(39091),
      CJ = ZJ(39087),
      uJ = ZJ(38901);

    function iJ(JJ, cJ) {
      const ZJ = (0, sJ.RandomRange)(0, 1);
      YJ.f.LerpToRef(cJ.color1, cJ.color2, ZJ, JJ.color)
    }

    function RJ(JJ, cJ) {
      cJ.colorDead.subtractToRef(JJ.color, cJ._colorDiff), cJ._colorDiff.scaleToRef(1 / JJ.lifeTime, JJ.colorStep)
    }

    function LJ(JJ, cJ) {
      JJ._properties.currentColorGradient = cJ._colorGradients[0], JJ._properties.currentColorGradient.getColorToRef(JJ.color), JJ._properties.currentColor1.rZJ(JJ.color), cJ._colorGradients.length > 1 ? cJ._colorGradients[1].getColorToRef(JJ._properties.currentColor2) : JJ._properties.currentColor2.rZJ(JJ.color)
    }

    function aJ(JJ, cJ) {
      const ZJ = cJ._colorGradients;
      FJ.j.GetCurrentGradient(cJ._ratio, ZJ, ((cJ, ZJ, FJ) => {
        cJ !== JJ._properties.currentColorGradient && (JJ._properties.currentColor1.rZJ(JJ._properties.currentColor2), ZJ.getColorToRef(JJ._properties.currentColor2), JJ._properties.currentColorGradient = cJ), YJ.f.LerpToRef(JJ._properties.currentColor1, JJ._properties.currentColor2, FJ, JJ.color), JJ.color.a < 0 && (JJ.color.a = 0)
      }))
    }

    function BJ(JJ, cJ) {
      JJ.colorStep.scaleToRef(cJ._scaledUpdateSpeed, cJ._scaledColorStep), JJ.color.addInPlace(cJ._scaledColorStep), JJ.color.a < 0 && (JJ.color.a = 0)
    }

    function tJ(JJ, cJ) {
      FJ.j.GetCurrentGradient(cJ._ratio, cJ._angularSpeedGradients, ((cJ, ZJ, FJ) => {
        cJ !== JJ._properties.currentAngularSpeedGradient && (JJ._properties.currentAngularSpeed1 = JJ._properties.currentAngularSpeed2, JJ._properties.currentAngularSpeed2 = ZJ.getFactor(), JJ._properties.currentAngularSpeedGradient = cJ), JJ.angularSpeed = (0, sJ.Lerp)(JJ._properties.currentAngularSpeed1, JJ._properties.currentAngularSpeed2, FJ)
      }))
    }

    function oJ(JJ, cJ) {
      JJ.angle += JJ.angularSpeed * cJ._scaledUpdateSpeed
    }

    function lJ(JJ, cJ) {
      cJ.particleEmitterType.startDirectionFunction(cJ._emitterWorldMatrix, JJ.direction, JJ, cJ.isLocal, cJ._emitterInverseWorldMatrix)
    }

    function Jc(JJ, cJ) {
      cJ.startDirectionFunction(cJ._emitterWorldMatrix, JJ.direction, JJ, cJ.isLocal)
    }

    function cc(JJ, cJ) {
      JJ._properties.currentVelocityGradient = cJ._velocityGradients[0], JJ._properties.currentVelocity1 = JJ._properties.currentVelocityGradient.getFactor(), cJ._velocityGradients.length > 1 ? JJ._properties.currentVelocity2 = cJ._velocityGradients[1].getFactor() : JJ._properties.currentVelocity2 = JJ._properties.currentVelocity1
    }

    function Zc(JJ, cJ) {
      JJ._properties.currentLimitVelocityGradient = cJ._limitVelocityGradients[0], JJ._properties.currentLimitVelocity1 = JJ._properties.currentLimitVelocityGradient.getFactor(), cJ._limitVelocityGradients.length > 1 ? JJ._properties.currentLimitVelocity2 = cJ._limitVelocityGradients[1].getFactor() : JJ._properties.currentLimitVelocity2 = JJ._properties.currentLimitVelocity1
    }

    function Fc(JJ, cJ) {
      FJ.j.GetCurrentGradient(cJ._ratio, cJ._velocityGradients, ((cJ, ZJ, FJ) => {
        cJ !== JJ._properties.currentVelocityGradient && (JJ._properties.currentVelocity1 = JJ._properties.currentVelocity2, JJ._properties.currentVelocity2 = ZJ.getFactor(), JJ._properties.currentVelocityGradient = cJ), JJ._properties.directionScale *= (0, sJ.Lerp)(JJ._properties.currentVelocity1, JJ._properties.currentVelocity2, FJ)
      }))
    }

    function Uc(JJ, cJ) {
      FJ.j.GetCurrentGradient(cJ._ratio, cJ._limitVelocityGradients, ((ZJ, FJ, UJ) => {
        ZJ !== JJ._properties.currentLimitVelocityGradient && (JJ._properties.currentLimitVelocity1 = JJ._properties.currentLimitVelocity2, JJ._properties.currentLimitVelocity2 = FJ.getFactor(), JJ._properties.currentLimitVelocityGradient = ZJ);
        const eJ = (0, sJ.Lerp)(JJ._properties.currentLimitVelocity1, JJ._properties.currentLimitVelocity2, UJ);
        JJ.direction.length() > eJ && JJ.direction.scaleInPlace(cJ.limitVelocityDamping)
      }))
    }

    function ec(JJ) {
      JJ.direction.scaleToRef(JJ._properties.directionScale, JJ._properties.scaledDirection)
    }

    function Xc(JJ, cJ) {
      cJ.particleEmitterType.startPositionFunction(cJ._emitterWorldMatrix, JJ.position, JJ, cJ.isLocal)
    }

    function Ac(JJ, cJ) {
      cJ.startPositionFunction(cJ._emitterWorldMatrix, JJ.position, JJ, cJ.isLocal)
    }

    function qc(JJ, cJ) {
      JJ._properties.localPosition ? JJ._properties.localPosition.rZJ(JJ.position) : JJ._properties.localPosition = JJ.position.clone(), eJ.j.TransformCoordinatesToRef(JJ._properties.localPosition, cJ._emitterWorldMatrix, JJ.position)
    }

    function jc(JJ, cJ) {
      cJ.isLocal && JJ._properties.localPosition ? (JJ._properties.localPosition.addInPlace(JJ._properties.scaledDirection), eJ.j.TransformCoordinatesToRef(JJ._properties.localPosition, cJ._emitterWorldMatrix, JJ.position)) : JJ.position.addInPlace(JJ._properties.scaledDirection)
    }

    function Yc(JJ, cJ) {
      JJ._properties.currentDragGradient = cJ._dragGradients[0], JJ._properties.currentDrag1 = JJ._properties.currentDragGradient.getFactor(), cJ._dragGradients.length > 1 ? JJ._properties.currentDrag2 = cJ._dragGradients[1].getFactor() : JJ._properties.currentDrag2 = JJ._properties.currentDrag1
    }

    function hc(JJ, cJ) {
      FJ.j.GetCurrentGradient(cJ._ratio, cJ._dragGradients, ((cJ, ZJ, FJ) => {
        cJ !== JJ._properties.currentDragGradient && (JJ._properties.currentDrag1 = JJ._properties.currentDrag2, JJ._properties.currentDrag2 = ZJ.getFactor(), JJ._properties.currentDragGradient = cJ);
        const UJ = (0, sJ.Lerp)(JJ._properties.currentDrag1, JJ._properties.currentDrag2, FJ);
        JJ._properties.scaledDirection.scaleInPlace(1 - UJ)
      }))
    }

    function Dc(JJ, cJ) {
      JJ._properties.randomNoiseCoordinates1 && JJ._properties.randomNoiseCoordinates2 ? (JJ._properties.randomNoiseCoordinates1.K9(Math.random(), Math.random(), Math.random()), JJ._properties.randomNoiseCoordinates2.K9(Math.random(), Math.random(), Math.random())) : (JJ._properties.randomNoiseCoordinates1 = new eJ.j(Math.random(), Math.random(), Math.random()), JJ._properties.randomNoiseCoordinates2 = new eJ.j(Math.random(), Math.random(), Math.random()))
    }

    function sc(JJ, cJ) {
      const ZJ = cJ._noiseTextureData,
        FJ = cJ._noiseTextureSize;
      if (ZJ && FJ && JJ._properties.randomNoiseCoordinates1 && JJ._properties.randomNoiseCoordinates2) {
        const UJ = cJ._fetchR(JJ._properties.randomNoiseCoordinates1.x, JJ._properties.randomNoiseCoordinates1.y, FJ.width, FJ.height, ZJ),
          XJ = cJ._fetchR(JJ._properties.randomNoiseCoordinates1.z, JJ._properties.randomNoiseCoordinates2.x, FJ.width, FJ.height, ZJ),
          AJ = cJ._fetchR(JJ._properties.randomNoiseCoordinates2.y, JJ._properties.randomNoiseCoordinates2.z, FJ.width, FJ.height, ZJ),
          qJ = eJ.h.Pn[0],
          jJ = eJ.h.Pn[1];
        qJ.K9((2 * UJ - 1) * cJ.noiseStrength.x, (2 * XJ - 1) * cJ.noiseStrength.y, (2 * AJ - 1) * cJ.noiseStrength.z), qJ.scaleToRef(cJ._tempScaledUpdateSpeed, jJ), JJ.direction.addInPlace(jJ)
      }
    }

    function nc(JJ, cJ) {
      cJ.gravity.scaleToRef(cJ._tempScaledUpdateSpeed, cJ._scaledGravity), JJ.direction.addInPlace(cJ._scaledGravity)
    }

    function Gc(JJ, cJ) {
      JJ.size = (0, sJ.RandomRange)(cJ.minSize, cJ.maxSize), JJ.scale.K9((0, sJ.RandomRange)(cJ.minScaleX, cJ.maxScaleX), (0, sJ.RandomRange)(cJ.minScaleY, cJ.maxScaleY))
    }

    function fc(JJ, cJ) {
      JJ._properties.currentSizeGradient = cJ._sizeGradients[0], JJ._properties.currentSize1 = JJ._properties.currentSizeGradient.getFactor(), JJ.size = JJ._properties.currentSize1, cJ._sizeGradients.length > 1 ? JJ._properties.currentSize2 = cJ._sizeGradients[1].getFactor() : JJ._properties.currentSize2 = JJ._properties.currentSize1, JJ.scale.K9((0, sJ.RandomRange)(cJ.minScaleX, cJ.maxScaleX), (0, sJ.RandomRange)(cJ.minScaleY, cJ.maxScaleY))
    }

    function xc(JJ, cJ) {
      const ZJ = cJ._actualFrame / cJ.targetStopDuration;
      FJ.j.GetCurrentGradient(ZJ, cJ._startSizeGradients, ((ZJ, FJ, UJ) => {
        ZJ !== cJ._currentStartSizeGradient && (cJ._currentStartSize1 = cJ._currentStartSize2, cJ._currentStartSize2 = FJ.getFactor(), cJ._currentStartSizeGradient = ZJ);
        const eJ = (0, sJ.Lerp)(cJ._currentStartSize1, cJ._currentStartSize2, UJ);
        JJ.scale.scaleInPlace(eJ)
      }))
    }

    function rc(JJ, cJ) {
      FJ.j.GetCurrentGradient(cJ._ratio, cJ._sizeGradients, ((cJ, ZJ, FJ) => {
        cJ !== JJ._properties.currentSizeGradient && (JJ._properties.currentSize1 = JJ._properties.currentSize2, JJ._properties.currentSize2 = ZJ.getFactor(), JJ._properties.currentSizeGradient = cJ), JJ.size = (0, sJ.Lerp)(JJ._properties.currentSize1, JJ._properties.currentSize2, FJ)
      }))
    }

    function vc(JJ, cJ) {
      JJ.remapData = new eJ.k(0, 1, 0, 1)
    }

    function mc(JJ, cJ) {
      cJ._colorRemapGradients && cJ._colorRemapGradients.length > 0 && FJ.j.GetCurrentGradient(cJ._ratio, cJ._colorRemapGradients, ((cJ, ZJ, FJ) => {
        const UJ = (0, sJ.Lerp)(cJ.factor1, ZJ.factor1, FJ),
          eJ = (0, sJ.Lerp)(cJ.factor2, ZJ.factor2, FJ);
        JJ.remapData.x = UJ, JJ.remapData.y = eJ - UJ
      })), cJ._alphaRemapGradients && cJ._alphaRemapGradients.length > 0 && FJ.j.GetCurrentGradient(cJ._ratio, cJ._alphaRemapGradients, ((cJ, ZJ, FJ) => {
        const UJ = (0, sJ.Lerp)(cJ.factor1, ZJ.factor1, FJ),
          eJ = (0, sJ.Lerp)(cJ.factor2, ZJ.factor2, FJ);
        JJ.remapData.z = UJ, JJ.remapData.w = eJ - UJ
      }))
    }

    function Qc(JJ, cJ) {
      const ZJ = (0, sJ.Clamp)(cJ._actualFrame / cJ.targetStopDuration);
      FJ.j.GetCurrentGradient(ZJ, cJ._lifeTimeGradients, ((cJ, FJ) => {
        const UJ = cJ,
          eJ = FJ,
          XJ = UJ.getFactor(),
          AJ = eJ.getFactor(),
          qJ = (ZJ - UJ.gradient) / (eJ.gradient - UJ.gradient);
        JJ.lifeTime = (0, sJ.Lerp)(XJ, AJ, qJ)
      })), cJ._emitPower = (0, sJ.RandomRange)(cJ.minEmitPower, cJ.maxEmitPower)
    }

    function Ec(JJ, cJ) {
      JJ.lifeTime = (0, sJ.RandomRange)(cJ.minLifeTime, cJ.maxLifeTime), cJ._emitPower = (0, sJ.RandomRange)(cJ.minEmitPower, cJ.maxEmitPower)
    }

    function Vc(JJ, cJ) {
      0 === cJ._emitPower ? (JJ._properties.initialDirection ? JJ._properties.initialDirection.rZJ(JJ.direction) : JJ._properties.initialDirection = JJ.direction.clone(), JJ.direction.set(0, 0, 0)) : (JJ._properties.initialDirection = null, JJ.direction.scaleInPlace(cJ._emitPower)), JJ.direction.addInPlace(cJ._inheritedVelocityOffset)
    }

    function Kc(JJ, cJ) {
      JJ.angularSpeed = (0, sJ.RandomRange)(cJ.minAngularSpeed, cJ.maxAngularSpeed), JJ.angle = (0, sJ.RandomRange)(cJ.minInitialRotation, cJ.maxInitialRotation)
    }

    function yc(JJ, cJ) {
      JJ._properties.currentAngularSpeedGradient = cJ._angularSpeedGradients[0], JJ.angularSpeed = JJ._properties.currentAngularSpeedGradient.getFactor(), JJ._properties.currentAngularSpeed1 = JJ.angularSpeed, cJ._angularSpeedGradients.length > 1 ? JJ._properties.currentAngularSpeed2 = cJ._angularSpeedGradients[1].getFactor() : JJ._properties.currentAngularSpeed2 = JJ._properties.currentAngularSpeed1, JJ.angle = (0, sJ.RandomRange)(cJ.minInitialRotation, cJ.maxInitialRotation)
    }

    function Sc(JJ, cJ) {
      JJ._properties.initialStartSpriteCellId = cJ.startSpriteCellID, JJ._properties.initialEndSpriteCellId = cJ.endSpriteCellID, JJ._properties.initialSpriteCellLoop = cJ.spriteCellLoop
    }

    function Ic(JJ, cJ) {
      JJ.previousItem = cJ.previousItem, JJ.nextItem = cJ, cJ.previousItem && (cJ.previousItem.nextItem = JJ), cJ.previousItem = JJ
    }

    function Mc(JJ, cJ) {
      JJ.previousItem = cJ, JJ.nextItem = cJ.nextItem, cJ.nextItem && (cJ.nextItem.previousItem = JJ), cJ.nextItem = JJ
    }

    function bc(JJ) {
      JJ.previousItem && (JJ.previousItem.nextItem = JJ.nextItem), JJ.nextItem && (JJ.nextItem.previousItem = JJ.previousItem)
    }
    var wc = ZJ(39138);
    class Wc extends EJ {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(JJ) {
        this._startDirectionFunction !== JJ && (this._startDirectionFunction = JJ, this._directionCreation.process = JJ ? Jc : lJ)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(JJ) {
        this._startPositionFunction !== JJ && (this._startPositionFunction = JJ, this._positionCreation.process = JJ ? Ac : Xc)
      }
      set onDispose(JJ) {
        this._onDisposeObserver && this.Sy.remove(this._onDisposeObserver), this._onDisposeObserver = this.Sy.add(JJ)
      }
      get YZJ() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(JJ) {
        this._useRampGradients !== JJ && (this._useRampGradients = JJ, this._resetEffect(), JJ ? (this._rampCreation = {
          process: vc,
          previousItem: null,
          nextItem: null
        }, Mc(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: mc,
          previousItem: null,
          nextItem: null
        }, Mc(this._remapGradientProcessing, this._gravityProcessing))) : (bc(this._rampCreation), bc(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(JJ) {
        this._isLocal !== JJ && (this._isLocal = JJ, JJ ? (this._isLocalCreation = {
          process: qc,
          previousItem: null,
          nextItem: null
        }, Mc(this._isLocalCreation, this._positionCreation)) : bc(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(JJ) {
        this._animationSheetEnabled !== JJ && (this._animationSheetEnabled = JJ, JJ ? (this._sheetCreation = {
          process: Sc,
          previousItem: null,
          nextItem: null
        }, Mc(this._sheetCreation, this._colorDeadCreation)) : bc(this._sheetCreation), this._reset())
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
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[JJ]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[JJ] ?? this._customWrappers[0]
      }
      setCustomEffect(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[cJ] = new OJ.d(this._engine), this._customWrappers[cJ].effect = JJ, this._customWrappers[cJ].drawContext && (this._customWrappers[cJ].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new UJ.c), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(JJ) {
        if (this.noiseTexture !== JJ) {
          if (this._noiseTexture = JJ, !JJ) return bc(this._noiseCreation), void bc(this._noiseProcessing);
          this._noiseCreation = {
            process: Dc,
            previousItem: null,
            nextItem: null
          }, Mc(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: sc,
            previousItem: null,
            nextItem: null
          }, Mc(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          XJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          AJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          jJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        zJ || (zJ = !0, WJ(dJ.e, pJ)), (0, NJ.b)(), super(JJ), this._emitterInverseWorldMatrix = eJ.b.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new eJ.j, this.Sy = new UJ.c, this.onStoppedObservable = new UJ.c, this.onStartedObservable = new UJ.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new YJ.f(0, 0, 0, 0), this._colorDiff = new YJ.f(0, 0, 0, 0), this._scaledGravity = eJ.j.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = JJ => {}, this.recycleParticle = JJ => {
          const cJ = this._particles.pop();
          cJ !== JJ && cJ.copyTo(JJ), cJ.metadata = null, this._stockParticles.push(cJ)
        }, this._createParticle = () => {
          let JJ;
          return 0 !== this._stockParticles.length ? (JJ = this._stockParticles.pop(), JJ._reset()) : JJ = new KJ(this), this._prepareParticle(JJ), JJ
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = cJ, this._epsilon = AJ, ZJ && "Scene" !== ZJ.getClassName() ? (this._engine = ZJ, this.defaultProjectionMatrix = eJ.b.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = ZJ || qJ.c.LastCreatedScene, this._engine = this._scene.gn(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.lE.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: Ec,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Xc,
          previousItem: null,
          nextItem: null
        }, Mc(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: lJ,
          previousItem: null,
          nextItem: null
        }, Mc(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: Vc,
          previousItem: null,
          nextItem: null
        }, Mc(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: Gc,
          previousItem: null,
          nextItem: null
        }, Mc(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: Kc,
          previousItem: null,
          nextItem: null
        }, Mc(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: iJ,
          previousItem: null,
          nextItem: null
        }, Mc(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: RJ,
          previousItem: null,
          nextItem: null
        }, Mc(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, jJ || (this._colorProcessing = {
          process: BJ,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: oJ,
          previousItem: null,
          nextItem: null
        }, Mc(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: ec,
          previousItem: null,
          nextItem: null
        }, Mc(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: jc,
          previousItem: null,
          nextItem: null
        }, Mc(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: nc,
          previousItem: null,
          nextItem: null
        }, Mc(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = XJ, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new OJ.d(this._engine)
        }, this._customWrappers[0].effect = FJ, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new hJ.c, this.updateFunction = JJ => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((JJ => {
            this._noiseTextureData = JJ
          })));
          const cJ = JJ === this._particles;
          for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
            const FJ = JJ[ZJ];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const UJ = FJ.age;
            if (FJ.age += this._tempScaledUpdateSpeed, FJ.age > FJ.lifeTime) {
              const JJ = FJ.age - UJ,
                cJ = FJ.lifeTime - UJ;
              this._tempScaledUpdateSpeed = cJ * this._tempScaledUpdateSpeed / JJ, FJ.age = FJ.lifeTime
            }
            this._ratio = FJ.age / FJ.lifeTime, FJ._properties.directionScale = this._tempScaledUpdateSpeed;
            let eJ = this._updateQueueStart;
            for (; eJ;) eJ.process(FJ, this), eJ = eJ.nextItem;
            if (this._isAnimationSheetEnabled && !jJ && FJ.updateCellIndex(), FJ._inheritParticleInfoToSubEmitters(), FJ.age >= FJ.lifeTime) {
              if (this._emitFromParticle(FJ), FJ._properties.attachedSubEmitters) {
                for (const JJ of FJ._properties.attachedSubEmitters) JJ.particleSystem.disposeOnStop = !0, JJ.particleSystem.stop();
                FJ._properties.attachedSubEmitters = null
              }
              this.recycleParticle(FJ), cJ && ZJ--
            } else;
          }
        }
      }
      serialize(JJ) {
        throw new Error("Method not implemented.")
      }
      clone(JJ, cJ) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Qc : this._lifeTimeCreation.process = Ec
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: xc,
          previousItem: null,
          nextItem: null
        }, Mc(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (bc(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(JJ) {
        this.targetStopDuration !== JJ && (this._targetStopDuration = JJ, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(JJ, cJ, ZJ) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, JJ, cJ, ZJ), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(JJ) {
        return this._removeFactorGradient(this._lifeTimeGradients, JJ), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(JJ, cJ, ZJ) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = fc, this._sizeGradientProcessing = {
          process: rc,
          previousItem: null,
          nextItem: null
        }, Ic(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, JJ, cJ, ZJ), this
      }
      removeSizeGradient(JJ) {
        return this._removeFactorGradient(this._sizeGradients, JJ), 0 === this._sizeGradients?.length && (bc(this._sizeGradientProcessing), this._sizeCreation.process = Gc), this
      }
      addColorRemapGradient(JJ, cJ, ZJ) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, JJ, cJ, ZJ), this
      }
      removeColorRemapGradient(JJ) {
        return this._removeFactorGradient(this._colorRemapGradients, JJ), this
      }
      addAlphaRemapGradient(JJ, cJ, ZJ) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, JJ, cJ, ZJ), this
      }
      removeAlphaRemapGradient(JJ) {
        return this._removeFactorGradient(this._alphaRemapGradients, JJ), this
      }
      addAngularSpeedGradient(JJ, cJ, ZJ) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = yc, this._angularSpeedGradientProcessing = {
          process: tJ,
          previousItem: null,
          nextItem: null
        }, Ic(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, JJ, cJ, ZJ), this
      }
      removeAngularSpeedGradient(JJ) {
        return this._removeFactorGradient(this._angularSpeedGradients, JJ), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = Kc, bc(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(JJ, cJ, ZJ) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: cc,
          previousItem: null,
          nextItem: null
        }, Mc(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: Fc,
          previousItem: null,
          nextItem: null
        }, Ic(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, JJ, cJ, ZJ), this
      }
      removeVelocityGradient(JJ) {
        return this._removeFactorGradient(this._velocityGradients, JJ), 0 === this._velocityGradients?.length && (bc(this._velocityCreation), bc(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(JJ, cJ, ZJ) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: Zc,
          previousItem: null,
          nextItem: null
        }, Mc(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Uc,
          previousItem: null,
          nextItem: null
        }, Mc(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, JJ, cJ, ZJ), this
      }
      removeLimitVelocityGradient(JJ) {
        return this._removeFactorGradient(this._limitVelocityGradients, JJ), 0 === this._limitVelocityGradients?.length && (bc(this._limitVelocityCreation), bc(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(JJ, cJ, ZJ) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: Yc,
          previousItem: null,
          nextItem: null
        }, Ic(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: hc,
          previousItem: null,
          nextItem: null
        }, Ic(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, JJ, cJ, ZJ), this
      }
      removeDragGradient(JJ) {
        return this._removeFactorGradient(this._dragGradients, JJ), 0 === this._dragGradients?.length && (bc(this._dragCreation), bc(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(JJ, cJ, ZJ) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, JJ, cJ, ZJ), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(JJ) {
        return this._removeFactorGradient(this._startSizeGradients, JJ), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const JJ = new Uint8Array(4 * this._rawTextureWidth),
          cJ = YJ.h.Color3[0];
        for (let ZJ = 0; ZJ < this._rawTextureWidth; ZJ++) {
          const UJ = ZJ / this._rawTextureWidth;
          FJ.j.GetCurrentGradient(UJ, this._rampGradients, ((FJ, UJ, eJ) => {
            YJ.e.LerpToRef(FJ.color, UJ.color, eJ, cJ), JJ[4 * ZJ] = 255 * cJ.r, JJ[4 * ZJ + 1] = 255 * cJ.g, JJ[4 * ZJ + 2] = 255 * cJ.b, JJ[4 * ZJ + 3] = 255
          }))
        }
        this._rampGradientsTexture = AJ.e.CreateRGBATexture(JJ, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((JJ, cJ) => JJ.gradient < cJ.gradient ? -1 : JJ.gradient > cJ.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(JJ, cJ) {
        this._rampGradients || (this._rampGradients = []);
        const ZJ = new FJ.e(JJ, cJ);
        return this._rampGradients.push(ZJ), this._syncRampGradientTexture(), this
      }
      removeRampGradient(JJ) {
        return this._removeGradientAndTexture(JJ, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(JJ, cJ, ZJ) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = LJ, this._colorProcessing.process = aJ);
        const UJ = new FJ.b(JJ, cJ, ZJ);
        return this._colorGradients.push(UJ), this._colorGradients.sort(((JJ, cJ) => JJ.gradient < cJ.gradient ? -1 : JJ.gradient > cJ.gradient ? 1 : 0)), this
      }
      removeColorGradient(JJ) {
        if (!this._colorGradients) return this;
        let cJ = 0;
        for (const ZJ of this._colorGradients) {
          if (ZJ.gradient === JJ) {
            this._colorGradients.splice(cJ, 1);
            break
          }
          cJ++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = iJ, this._colorProcessing.process = BJ), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const JJ of this._drawWrappers)
            if (JJ)
              for (const cJ of JJ) cJ?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(JJ, cJ, ZJ, FJ, UJ) {
        return UJ[4 * (((JJ = .5 * Math.abs(JJ) + .5) * ZJ % ZJ | 0) + ((cJ = .5 * Math.abs(cJ) + .5) * FJ % FJ | 0) * ZJ)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const JJ = this._engine,
          cJ = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * cJ), this._vertexBuffer = new XJ.d(JJ, this._vertexData, !0, cJ);
        let ZJ = 0;
        const FJ = this._vertexBuffer.createVertexBuffer(XJ.n.PositionKind, ZJ, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[XJ.n.PositionKind] = FJ, ZJ += 3;
        const UJ = this._vertexBuffer.createVertexBuffer(XJ.n.ColorKind, ZJ, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[XJ.n.ColorKind] = UJ, ZJ += 4;
        const eJ = this._vertexBuffer.createVertexBuffer("angle", ZJ, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = eJ, ZJ += 1;
        const AJ = this._vertexBuffer.createVertexBuffer("size", ZJ, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = AJ, ZJ += 2, this._isAnimationSheetEnabled) {
          const JJ = this._vertexBuffer.createVertexBuffer("cellIndex", ZJ, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = JJ, ZJ += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const JJ = this._vertexBuffer.createVertexBuffer("direction", ZJ, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = JJ, ZJ += 3
        }
        if (this._useRampGradients) {
          const JJ = this._vertexBuffer.createVertexBuffer("remapData", ZJ, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = JJ, ZJ += 4
        }
        let qJ;
        if (this._useInstancing) {
          const cJ = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new XJ.d(JJ, cJ, !1, 2), qJ = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else qJ = this._vertexBuffer.createVertexBuffer("offset", ZJ, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = qJ, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const JJ = [],
          cJ = [];
        let ZJ = 0;
        for (let FJ = 0; FJ < this._capacity; FJ++) JJ.push(ZJ), JJ.push(ZJ + 1), JJ.push(ZJ + 2), JJ.push(ZJ), JJ.push(ZJ + 2), JJ.push(ZJ + 3), cJ.push(ZJ, ZJ + 1, ZJ + 1, ZJ + 2, ZJ + 2, ZJ + 3, ZJ + 3, ZJ, ZJ, ZJ + 3), ZJ += 4;
        this._indexBuffer = this._engine.createIndexBuffer(JJ), this._linesIndexBuffer = this._engine.createIndexBuffer(cJ)
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
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (JJ) return this.startDelay = JJ, void setTimeout((() => {
          this.start(0)
        }), JJ);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const JJ = this.noiseTexture;
          if (JJ && JJ.onGeneratedObservable) JJ.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let cJ = 0; cJ < this.preWarmCycles; cJ++) this.animate(!0), JJ.render()
            }))
          }));
          else
            for (let cJ = 0; cJ < this.preWarmCycles; cJ++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(JJ))
      }
      _postStop(JJ) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(JJ, cJ, ZJ, FJ) {
        let UJ = JJ * this._vertexBufferSize;
        const XJ = eJ.h.Pn[0].rZJ(this._scene?.floatingOriginOffset || eJ.j.ZeroReadOnly);
        if (this._vertexData[UJ++] = cJ.position.x + this.worldOffset.x - XJ.x, this._vertexData[UJ++] = cJ.position.y + this.worldOffset.y - XJ.y, this._vertexData[UJ++] = cJ.position.z + this.worldOffset.z - XJ.z, this._vertexData[UJ++] = cJ.color.r, this._vertexData[UJ++] = cJ.color.g, this._vertexData[UJ++] = cJ.color.b, this._vertexData[UJ++] = cJ.color.a, this._vertexData[UJ++] = cJ.angle, this._vertexData[UJ++] = cJ.scale.x * cJ.size, this._vertexData[UJ++] = cJ.scale.y * cJ.size, this._isAnimationSheetEnabled && (this._vertexData[UJ++] = cJ.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[UJ++] = cJ.direction.x, this._vertexData[UJ++] = cJ.direction.y, this._vertexData[UJ++] = cJ.direction.z);
        else if (cJ._properties.initialDirection) {
          let JJ = cJ._properties.initialDirection;
          this.isLocal && (eJ.j.TransformNormalToRef(JJ, this._emitterWorldMatrix, eJ.h.Pn[0]), JJ = eJ.h.Pn[0]), 0 === JJ.x && 0 === JJ.z && (JJ.x = .001), this._vertexData[UJ++] = JJ.x, this._vertexData[UJ++] = JJ.y, this._vertexData[UJ++] = JJ.z
        } else {
          let JJ = cJ.direction;
          this.isLocal && (eJ.j.TransformNormalToRef(JJ, this._emitterWorldMatrix, eJ.h.Pn[0]), JJ = eJ.h.Pn[0]), 0 === JJ.x && 0 === JJ.z && (JJ.x = .001), this._vertexData[UJ++] = JJ.x, this._vertexData[UJ++] = JJ.y, this._vertexData[UJ++] = JJ.z
        }
        this._useRampGradients && cJ.remapData && (this._vertexData[UJ++] = cJ.remapData.x, this._vertexData[UJ++] = cJ.remapData.y, this._vertexData[UJ++] = cJ.remapData.z, this._vertexData[UJ++] = cJ.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === ZJ ? ZJ = this._epsilon : 1 === ZJ && (ZJ = 1 - this._epsilon), 0 === FJ ? FJ = this._epsilon : 1 === FJ && (FJ = 1 - this._epsilon)), this._vertexData[UJ++] = ZJ, this._vertexData[UJ] = FJ)
      }
      _prepareParticle(JJ) {}
      _createNewOnes(JJ) {
        let cJ;
        for (let ZJ = 0; ZJ < JJ && this._particles.length !== this._capacity; ZJ++) {
          cJ = this._createParticle(), this._particles.push(cJ);
          let JJ = this._createQueueStart;
          for (; JJ;) JJ.process(cJ, this), JJ = JJ.nextItem;
          cJ._inheritParticleInfoToSubEmitters()
        }
      }
      _update(JJ) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const JJ = this.emitter;
          this._emitterWorldMatrix = JJ.getWorldMatrix()
        } else {
          const JJ = this.emitter;
          this._emitterWorldMatrix = eJ.b.Translation(JJ.x, JJ.y, JJ.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(JJ)
      }
      static _GetAttributeNamesOrOptions() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FJ = [XJ.n.PositionKind, XJ.n.ColorKind, "angle", "offset", "size"];
        return JJ && FJ.push("cellIndex"), cJ || FJ.push("direction"), ZJ && FJ.push("remapData"), FJ
      }
      static _GetEffectCreationOptions() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FJ = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, TJ.c)(FJ), JJ && FJ.push("particlesInfos"), cJ && FJ.push("logarithmicDepthConstant"), ZJ && (FJ.push("vFogInfos"), FJ.push("vFogColor")), FJ
      }
      fillDefines(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, TJ.l)(this, this._scene, JJ), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && JJ.push("#define FOG")), this._isAnimationSheetEnabled && JJ.push("#define ANIMATESHEET"), this.useLogarithmicDepth && JJ.push("#define LOGARITHMICDEPTH"), cJ === EJ.BLENDMODE_MULTIPLY && JJ.push("#define BLENDMULTIPLYMODE"), this.isLocal && JJ.push("#define LOCAL"), this._useRampGradients && JJ.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (JJ.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            JJ.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            JJ.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && JJ.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            JJ.push("#define BILLBOARDMODE_ALL")
        }
        ZJ && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), JJ.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(JJ, cJ, ZJ) {
        cJ.push(...Wc._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), JJ.push(...Wc._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), ZJ.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, uJ.i)(JJ, this._imageProcessingConfigurationDefines), (0, uJ.e)(ZJ, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(JJ) {
        var cJ;
        const ZJ = this._getCustomDrawWrapper(JJ);
        if (ZJ?.effect) return ZJ;
        const FJ = [];
        this.fillDefines(FJ, JJ);
        const eJ = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          XJ = wc.b._PrepareStringDefines(eJ, FJ),
          AJ = XJ ? wc.b.GetConfiguration(eJ) : void 0;
        let qJ = this._drawWrappers[eJ];
        qJ || (qJ = this._drawWrappers[eJ] = [], 0 === eJ || this._renderPassObserver || (this._renderPassObserver = ((cJ = this._engine)._onReleaseRenderPassObservable ?? (cJ._onReleaseRenderPassObservable = new UJ.c)).add((JJ => {
          const cJ = this._drawWrappers[JJ];
          if (cJ) {
            for (const JJ of cJ) JJ?.dispose();
            delete this._drawWrappers[JJ]
          }
        }))));
        let jJ = qJ[JJ];
        jJ || (jJ = new OJ.d(this._engine), jJ.drawContext && (jJ.drawContext.useInstancing = this._useInstancing), qJ[JJ] = jJ);
        const YJ = FJ.join("\n");
        if (jJ.defines !== YJ) {
          const JJ = [],
            cJ = [],
            ZJ = [];
          this.fillUniformsAttributesAndSamplerNames(cJ, JJ, ZJ), XJ && (cJ.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== AJ?.defines.PREPASS_LOCAL_POSITION_INDEX && cJ.push("inverseEmitterWM", "geometryWorldOffset")), jJ.setEffect(this._engine.createEffect("particles", {
            attributes: JJ,
            uniformsNames: cJ,
            samplers: ZJ,
            defines: YJ,
            shaderLanguage: this._shaderLanguage,
            multiTarget: XJ,
            indexParameters: XJ ? {
              buffersCount: AJ?._mrtCount ?? 0
            } : void 0
          }, this._engine), YJ)
        }
        return jJ
      }
      _bindGeometryRendering(JJ) {
        const cJ = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          ZJ = wc.b.GetConfiguration(cJ);
        if (!ZJ?._defines) return;
        JJ.setFloat("objectId", 0), JJ.setInt("meshBlendTag", 0);
        const FJ = this._scene?.activeCamera;
        if (JJ.setFloat2("cameraInfo", FJ?.minZ ?? 0, FJ?.maxZ ?? 1), this.isLocal && void 0 !== ZJ.defines.PREPASS_LOCAL_POSITION_INDEX) {
          JJ.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const cJ = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || eJ.j.ZeroReadOnly, eJ.h.Pn[0]);
          JJ.setVector3("geometryWorldOffset", cJ)
        }
      }
      animate() {
        let JJ, cJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!cJ && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (cJ ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) JJ = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const cJ = this._calculateEmitRate();
            JJ = cJ * this._scaledUpdateSpeed | 0, this._newPartsExcess += cJ * this._scaledUpdateSpeed - JJ
          }
          if (this._newPartsExcess > 1 && (JJ += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? JJ = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(JJ), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !cJ) {
            let JJ = 0;
            for (let cJ = 0; cJ < this._particles.length; cJ++) {
              const ZJ = this._particles[cJ];
              this._appendParticleVertices(JJ, ZJ), JJ += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const JJ = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  cJ = this._particles.length;
                cJ < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, cJ * JJ, this._fixedCapacityHighWaterMark * JJ), this._fixedCapacityHighWaterMark = cJ, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const JJ = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * JJ), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let JJ = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const cJ = this._actualFrame / this.targetStopDuration;
          FJ.j.GetCurrentGradient(cJ, this._emitRateGradients, ((cJ, ZJ, FJ) => {
            cJ !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = ZJ.getFactor(), this._currentEmitRateGradient = cJ), JJ = (0, sJ.Lerp)(this._currentEmitRate1, this._currentEmitRate2, FJ)
          }))
        }
        return JJ
      }
      _appendParticleVertices(JJ, cJ) {
        this._appendParticleVertex(JJ++, cJ, 0, 0), this._useInstancing || (this._appendParticleVertex(JJ++, cJ, 1, 0), this._appendParticleVertex(JJ++, cJ, 1, 1), this._appendParticleVertex(JJ, cJ, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Wc.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ZJ.e(326).then((() => ZJ(59429))), ZJ.e(320).then((() => ZJ(59437)))])) : await Promise.all([ZJ.e(309).then((() => ZJ(59439))), Promise.all([ZJ.e(302), ZJ.e(338)]).then((() => ZJ(59447)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== EJ.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(EJ.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(EJ.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(JJ) {
        const cJ = this._getWrapper(JJ),
          ZJ = cJ.effect,
          FJ = this._engine;
        FJ.enableEffect(cJ);
        const UJ = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        ZJ.setTexture("diffuseSampler", this.particleTexture), ZJ.setMatrix("view", UJ);
        const XJ = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (ZJ.setMatrix("projection", XJ), this._isAnimationSheetEnabled && this.particleTexture) {
          const JJ = this.particleTexture.getBaseSize();
          ZJ.setFloat3("particlesInfos", this.spriteCellWidth / JJ.width, this.spriteCellHeight / JJ.height, this.spriteCellWidth / JJ.width)
        }
        if (ZJ.setVector2("translationPivot", this.translationPivot), ZJ.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const JJ = this._scene.activeCamera;
          ZJ.setVector3("eyePosition", JJ.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), ZJ.setTexture("rampSampler", this._rampGradientsTexture));
        const AJ = ZJ.defines;
        this._scene && ((0, TJ.e)(ZJ, this, this._scene), this.applyFog && (0, CJ.h)(this._scene, void 0, ZJ)), AJ.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (UJ.invertToRef(eJ.h.Matrix[0]), ZJ.setMatrix("invView", eJ.h.Matrix[0])), ZJ._multiTarget && this._bindGeometryRendering(ZJ), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? FJ.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, ZJ) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, ZJ)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? FJ.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, ZJ) : FJ.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, ZJ), this.useLogarithmicDepth && this._scene && (0, CJ.l)(AJ, ZJ, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(ZJ), this._setEngineBasedOnBlendMode(JJ), ZJ._multiTarget && wc.b._BindZeroAlphaDiscard(FJ, ZJ);
        let qJ = !1;
        try {
          wc.b._BindAttachmentsForEffect(FJ, ZJ) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(ZJ), this._useInstancing ? this._scene?.forceWireframe ? FJ.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : FJ.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? FJ.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : FJ.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), qJ = !0)
        } finally {
          wc.b._RestoreAttachments(FJ)
        }
        return qJ ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const JJ = this._engine;
        let cJ;
        return JJ.setState && (JJ.setState(!1), this.forceDepthWrite && JJ.setDepthWrite(!0)), cJ = this.blendMode === EJ.BLENDMODE_MULTIPLYADD ? this._render(EJ.BLENDMODE_MULTIPLY) + this._render(EJ.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), cJ
      }
      _onDispose() {}
      dispose() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), JJ && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), JJ && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(cJ, ZJ), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const JJ = this._scene.lE.indexOf(this);
          JJ > -1 && this._scene.lE.splice(JJ, 1), this._scene._activeParticleSystems.dispose()
        }
        this.Sy.notifyObservers(this), this.Sy.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Wc.ForceGLSL = !1;
    var gc, Hc = ZJ(36216);
    ! function(JJ) {
      JJ[JJ.ATTACHED = 0] = "ATTACHED", JJ[JJ.END = 1] = "END"
    }(gc || (gc = {}));
    class Pc {
      constructor(JJ) {
        if (this.particleSystem = JJ, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !JJ.emitter || !JJ.emitter.dispose) {
          const cJ = (0, Hc.e)("BABYLON.AbstractMesh");
          JJ.emitter = new cJ("SubemitterSystemEmitter", JJ.Qy()), JJ._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let JJ = this.particleSystem.emitter;
        if (JJ) {
          if (JJ instanceof eJ.j) JJ = JJ.clone();
          else if (-1 !== JJ.getClassName().indexOf("Mesh")) {
            JJ = new((0, Hc.e)("BABYLON.Mesh"))("", JJ.Qy()), JJ.isVisible = !1
          }
        } else JJ = new eJ.j;
        const cJ = new Pc(this.particleSystem.clone(this.particleSystem.name, JJ));
        return cJ.particleSystem.name += "Clone", cJ.type = this.type, cJ.inheritDirection = this.inheritDirection, cJ.inheritedVelocityAmount = this.inheritedVelocityAmount, cJ.particleSystem._disposeEmitterOnDispose = !0, cJ.particleSystem.disposeOnStop = !0, cJ
      }
      serialize() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cJ = {};
        return cJ.type = this.type, cJ.inheritDirection = this.inheritDirection, cJ.inheritedVelocityAmount = this.inheritedVelocityAmount, cJ.particleSystem = this.particleSystem.serialize(JJ), cJ
      }
      static _ParseParticleSystem(JJ, cJ, ZJ) {
        throw (0, kJ.m)("ParseParticle")
      }
      static Parse(JJ, cJ, ZJ) {
        const FJ = JJ.particleSystem,
          UJ = new Pc(Pc._ParseParticleSystem(FJ, cJ, ZJ, !0));
        return UJ.type = JJ.type, UJ.inheritDirection = JJ.inheritDirection, UJ.inheritedVelocityAmount = JJ.inheritedVelocityAmount, UJ.particleSystem._isSubEmitter = !0, UJ
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var kc = ZJ(38698),
      pc = ZJ(38822);
    const dc = () => {};
    class zc {
      constructor() {
        this.particlePositionGenerator = dc, this.particleDestinationGenerator = dc, this.particleDirectionGenerator = dc
      }
      startDirectionFunction(JJ, cJ, ZJ, FJ) {
        const UJ = eJ.h.Pn[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== dc) this.particleDirectionGenerator(-1, ZJ, UJ);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== dc) {
          this.particleDestinationGenerator(-1, ZJ, UJ);
          const JJ = eJ.h.Pn[1];
          UJ.subtractToRef(ZJ.position, JJ), JJ.scaleToRef(1 / ZJ.lifeTime, UJ)
        } else UJ.set(0, 0, 0);
        FJ ? cJ.rZJ(UJ) : eJ.j.TransformNormalToRef(UJ, JJ, cJ)
      }
      startPositionFunction(JJ, cJ, ZJ, FJ) {
        const UJ = eJ.h.Pn[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== dc ? this.particlePositionGenerator(-1, ZJ, UJ) : UJ.set(0, 0, 0), FJ ? cJ.rZJ(UJ) : eJ.j.TransformCoordinatesToRef(UJ, JJ, cJ)
      }
      clone() {
        const JJ = new zc;
        return DJ.e.DeepCopy(this, JJ), JJ
      }
      applyToShader(JJ) {}
      buildUniformLayout(JJ) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const JJ = {};
        return JJ.type = this.getClassName(), JJ.particlePositionGenerator = this.particlePositionGenerator, JJ.particleDestinationGenerator = this.particleDestinationGenerator, JJ
      }
      parse(JJ) {
        JJ.particlePositionGenerator && (this.particlePositionGenerator = JJ.particlePositionGenerator), JJ.particleDestinationGenerator && (this.particleDestinationGenerator = JJ.particleDestinationGenerator)
      }
    }
    const Nc = eJ.j.Zero(),
      Oc = eJ.j.Zero(),
      Tc = eJ.j.Zero();
    class Cc {
      constructor() {
        this.strength = 0, this.position = eJ.j.Zero()
      }
      _processParticle(JJ, cJ) {
        this.position.subtractToRef(JJ.position, Nc);
        const ZJ = Nc.lengthSquared() + 1;
        Nc.normalize().scaleToRef(this.strength / ZJ, Oc), Oc.scaleToRef(cJ._tempScaledUpdateSpeed, Tc), JJ.direction.addInPlace(Tc)
      }
      serialize() {
        return {
          position: this.position.JFJ(),
          strength: this.strength
        }
      }
    }
    const uc = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class ic extends Wc {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = JJ => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const cJ = Math.floor(Math.random() * this._subEmitters.length);
          for (const ZJ of this._subEmitters[cJ])
            if (1 === ZJ.type) {
              const cJ = ZJ.clone();
              JJ._inheritParticleInfoToSubEmitter(cJ), cJ.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(cJ.particleSystem), cJ.particleSystem.start()
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
      set flowMap(JJ) {
        this._flowMap !== JJ && (this._flowMap = JJ, this._flowMapUpdate && (bc(this._flowMapUpdate), this._flowMapUpdate = null), JJ && (this._flowMapUpdate = {
          process: JJ => {
            const cJ = this.Qy()?.getTransformMatrix();
            this._flowMap._processParticle(JJ, this.flowMapStrength * this._tempScaledUpdateSpeed, cJ)
          },
          previousItem: null,
          nextItem: null
        }, Mc(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(JJ) {
        super.addAttractor(JJ), 1 === this._attractors.length && (this._attractorUpdate = {
          process: JJ => {
            for (const cJ of this._attractors) cJ._processParticle(JJ, this)
          },
          previousItem: null,
          nextItem: null
        }, Mc(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(JJ) {
        super.removeAttractor(JJ), 0 === this._attractors.length && this._attractorUpdate && bc(this._attractorUpdate)
      }
      start() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(JJ)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const JJ of this.subEmitters) JJ instanceof ic ? this._subEmitters.push([new Pc(JJ)]) : JJ instanceof Pc ? this._subEmitters.push([JJ]) : JJ instanceof Array && this._subEmitters.push(JJ)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const JJ of this.activeSubSystems) JJ.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const JJ = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== JJ && this._rootParticleSystem.activeSubSystems.splice(JJ, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(JJ) {
        JJ && this._stopSubEmitters()
      }
      _prepareParticle(JJ) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const cJ = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          JJ._properties.attachedSubEmitters = [];
          for (const ZJ of cJ)
            if (0 === ZJ.type) {
              const cJ = ZJ.clone();
              JJ._properties.attachedSubEmitters.push(cJ), cJ.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), JJ && this.particles)
          for (const ZJ of this.particles)
            if (ZJ._properties.attachedSubEmitters)
              for (let JJ = ZJ._properties.attachedSubEmitters.length - 1; JJ >= 0; JJ -= 1) ZJ._properties.attachedSubEmitters[JJ].dispose();
        if (cJ && this.activeSubSystems)
          for (let ZJ = this.activeSubSystems.length - 1; ZJ >= 0; ZJ -= 1) this.activeSubSystems[ZJ].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let JJ = 0; JJ < this._subEmitters.length; JJ++)
            for (const cJ of this._subEmitters[JJ]) cJ.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(JJ, cJ, ZJ, FJ) {
        let UJ;
        UJ = ZJ instanceof kc.e ? null : ZJ;
        const XJ = (0, Hc.e)("BABYLON.Texture");
        if (XJ && UJ)
          if (JJ.texture) cJ.particleTexture = XJ.Parse(JJ.texture, UJ, FJ);
          else if (JJ.textureName) {
          const ZJ = JJ.textureSettings;
          if (cJ.particleTexture = new XJ(FJ + JJ.textureName, UJ, !1, void 0 === JJ.invertY || JJ.invertY, ZJ ? ZJ.samplingMode : void 0), cJ.particleTexture.name = JJ.textureName, ZJ) {
            const JJ = cJ.particleTexture;
            for (const cJ of uc) void 0 !== ZJ[cJ] && (JJ[cJ] = ZJ[cJ])
          }
        }
        if (JJ.emitterId || 0 === JJ.emitterId || void 0 !== JJ.emitter ? (JJ.emitterId || 0 === JJ.emitterId) && UJ ? (cJ.emitter = UJ.getLastMeshById(JJ.emitterId), cJ.emitter || (cJ.emitter = eJ.j.Zero())) : cJ.emitter = eJ.j.FromArray(JJ.emitter) : cJ.emitter = eJ.j.Zero(), cJ.isLocal = !!JJ.isLocal, void 0 !== JJ.renderingGroupId && (cJ.renderingGroupId = JJ.renderingGroupId), void 0 !== JJ.isBillboardBased && (cJ.isBillboardBased = JJ.isBillboardBased), void 0 !== JJ.billboardMode && (cJ.billboardMode = JJ.billboardMode), void 0 !== JJ.useLogarithmicDepth && (cJ.useLogarithmicDepth = JJ.useLogarithmicDepth), JJ.animations) {
          for (let ZJ = 0; ZJ < JJ.animations.length; ZJ++) {
            const FJ = JJ.animations[ZJ],
              UJ = (0, Hc.e)("BABYLON.Animation");
            UJ && cJ.animations.push(UJ.Parse(FJ))
          }
          cJ.beginAnimationOnStart = JJ.beginAnimationOnStart, cJ.beginAnimationFrom = JJ.beginAnimationFrom, cJ.beginAnimationTo = JJ.beginAnimationTo, cJ.beginAnimationLoop = JJ.beginAnimationLoop
        }
        if (JJ.autoAnimate && UJ && UJ.beginAnimation(cJ, JJ.autoAnimateFrom, JJ.autoAnimateTo, JJ.autoAnimateLoop, JJ.autoAnimateSpeed || 1), cJ.startDelay = 0 | JJ.startDelay, cJ.minAngularSpeed = JJ.minAngularSpeed, cJ.maxAngularSpeed = JJ.maxAngularSpeed, cJ.minSize = JJ.minSize, cJ.maxSize = JJ.maxSize, JJ.minScaleX && (cJ.minScaleX = JJ.minScaleX, cJ.maxScaleX = JJ.maxScaleX, cJ.minScaleY = JJ.minScaleY, cJ.maxScaleY = JJ.maxScaleY), void 0 !== JJ.preWarmCycles && (cJ.preWarmCycles = JJ.preWarmCycles, cJ.preWarmStepOffset = JJ.preWarmStepOffset), void 0 !== JJ.minInitialRotation && (cJ.minInitialRotation = JJ.minInitialRotation, cJ.maxInitialRotation = JJ.maxInitialRotation), cJ.minLifeTime = JJ.minLifeTime, cJ.maxLifeTime = JJ.maxLifeTime, cJ.minEmitPower = JJ.minEmitPower, cJ.maxEmitPower = JJ.maxEmitPower, cJ.emitRate = JJ.emitRate, cJ.gravity = eJ.j.FromArray(JJ.gravity), JJ.noiseStrength && (cJ.noiseStrength = eJ.j.FromArray(JJ.noiseStrength)), cJ.color1 = YJ.f.FromArray(JJ.color1), cJ.color2 = YJ.f.FromArray(JJ.color2), cJ.colorDead = YJ.f.FromArray(JJ.colorDead), cJ.updateSpeed = JJ.updateSpeed, cJ.targetStopDuration = JJ.targetStopDuration, cJ.blendMode = JJ.blendMode, JJ.colorGradients)
          for (const eJ of JJ.colorGradients) cJ.addColorGradient(eJ.gradient, YJ.f.FromArray(eJ.color1), eJ.color2 ? YJ.f.FromArray(eJ.color2) : void 0);
        if (JJ.rampGradients) {
          for (const ZJ of JJ.rampGradients) cJ.addRampGradient(ZJ.gradient, YJ.e.FromArray(ZJ.color));
          cJ.useRampGradients = JJ.useRampGradients
        }
        if (JJ.colorRemapGradients)
          for (const eJ of JJ.colorRemapGradients) cJ.addColorRemapGradient(eJ.gradient, void 0 !== eJ.factor1 ? eJ.factor1 : eJ.factor, eJ.factor2);
        if (JJ.alphaRemapGradients)
          for (const eJ of JJ.alphaRemapGradients) cJ.addAlphaRemapGradient(eJ.gradient, void 0 !== eJ.factor1 ? eJ.factor1 : eJ.factor, eJ.factor2);
        if (JJ.sizeGradients)
          for (const eJ of JJ.sizeGradients) cJ.addSizeGradient(eJ.gradient, void 0 !== eJ.factor1 ? eJ.factor1 : eJ.factor, eJ.factor2);
        if (JJ.angularSpeedGradients)
          for (const eJ of JJ.angularSpeedGradients) cJ.addAngularSpeedGradient(eJ.gradient, void 0 !== eJ.factor1 ? eJ.factor1 : eJ.factor, eJ.factor2);
        if (JJ.velocityGradients)
          for (const eJ of JJ.velocityGradients) cJ.addVelocityGradient(eJ.gradient, void 0 !== eJ.factor1 ? eJ.factor1 : eJ.factor, eJ.factor2);
        if (JJ.dragGradients)
          for (const eJ of JJ.dragGradients) cJ.addDragGradient(eJ.gradient, void 0 !== eJ.factor1 ? eJ.factor1 : eJ.factor, eJ.factor2);
        if (JJ.emitRateGradients)
          for (const eJ of JJ.emitRateGradients) cJ.addEmitRateGradient(eJ.gradient, void 0 !== eJ.factor1 ? eJ.factor1 : eJ.factor, eJ.factor2);
        if (JJ.startSizeGradients)
          for (const eJ of JJ.startSizeGradients) cJ.addStartSizeGradient(eJ.gradient, void 0 !== eJ.factor1 ? eJ.factor1 : eJ.factor, eJ.factor2);
        if (JJ.lifeTimeGradients)
          for (const eJ of JJ.lifeTimeGradients) cJ.addLifeTimeGradient(eJ.gradient, void 0 !== eJ.factor1 ? eJ.factor1 : eJ.factor, eJ.factor2);
        if (JJ.limitVelocityGradients) {
          for (const ZJ of JJ.limitVelocityGradients) cJ.addLimitVelocityGradient(ZJ.gradient, void 0 !== ZJ.factor1 ? ZJ.factor1 : ZJ.factor, ZJ.factor2);
          cJ.limitVelocityDamping = JJ.limitVelocityDamping
        }
        if (JJ.noiseTexture && UJ) {
          const ZJ = (0, Hc.e)("BABYLON.ProceduralTexture");
          cJ.noiseTexture = ZJ.Parse(JJ.noiseTexture, UJ, FJ)
        }
        let AJ;
        if (JJ.particleEmitterType) {
          switch (JJ.particleEmitterType.type) {
            case "SphereParticleEmitter":
              AJ = new fJ;
              break;
            case "SphereDirectedParticleEmitter":
              AJ = new xJ;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              AJ = new vJ;
              break;
            case "ConeDirectedParticleEmitter":
              AJ = new mJ;
              break;
            case "CylinderParticleEmitter":
              AJ = new rJ.e;
              break;
            case "CylinderDirectedParticleEmitter":
              AJ = new rJ.b;
              break;
            case "HemisphericParticleEmitter":
              AJ = new GJ;
              break;
            case "PointParticleEmitter":
              AJ = new nJ;
              break;
            case "MeshParticleEmitter":
              AJ = new QJ;
              break;
            case "CustomParticleEmitter":
              AJ = new zc;
              break;
            default:
              AJ = new hJ.c
          }
          AJ.parse(JJ.particleEmitterType, UJ)
        } else AJ = new hJ.c, AJ.parse(JJ, UJ);
        cJ.particleEmitterType = AJ, cJ.startSpriteCellID = JJ.startSpriteCellID, cJ.endSpriteCellID = JJ.endSpriteCellID, cJ.spriteCellLoop = JJ.spriteCellLoop ?? !0, cJ.spriteCellWidth = JJ.spriteCellWidth, cJ.spriteCellHeight = JJ.spriteCellHeight, cJ.spriteCellChangeSpeed = JJ.spriteCellChangeSpeed, cJ.spriteRandomStartCell = JJ.spriteRandomStartCell, cJ.disposeOnStop = JJ.disposeOnStop ?? !1, cJ.manualEmitCount = JJ.manualEmitCount ?? -1
      }
      static Parse(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          UJ = arguments.length > 4 ? arguments[4] : void 0;
        const XJ = JJ.name;
        let AJ, qJ, jJ = null,
          hJ = null;
        if (cJ instanceof kc.e ? AJ = cJ : (qJ = cJ, AJ = qJ.gn()), JJ.customShader && (0, kJ.e)(AJ.createEffectForParticles)) {
          hJ = JJ.customShader;
          const cJ = hJ.shaderOptions.defines.length > 0 ? hJ.shaderOptions.defines.join("\n") : "";
          jJ = AJ.createEffectForParticles(hJ.shaderPath.fragmentElement, hJ.shaderOptions.uniforms, hJ.shaderOptions.samplers, cJ)
        }
        const DJ = new ic(XJ, UJ || JJ.qh, cJ, jJ, JJ.isAnimationSheetEnabled);
        if (DJ.customShader = hJ, DJ._rootUrl = ZJ, JJ.id && (DJ.id = JJ.id), JJ.subEmitters) {
          DJ.subEmitters = [];
          for (const FJ of JJ.subEmitters) {
            const JJ = [];
            for (const UJ of FJ) JJ.push(Pc.Parse(UJ, cJ, ZJ));
            DJ.subEmitters.push(JJ)
          }
        }
        if (JJ.attractors)
          for (const YJ of JJ.attractors) {
            const JJ = new Cc;
            JJ.position = eJ.j.FromArray(YJ.position), JJ.strength = YJ.strength, DJ.addAttractor(JJ)
          }
        return ic._Parse(JJ, DJ, cJ, ZJ), JJ.textureMask && (DJ.textureMask = YJ.f.FromArray(JJ.textureMask)), JJ.worldOffset && (DJ.worldOffset = eJ.j.FromArray(JJ.worldOffset)), JJ.preventAutoStart && (DJ.preventAutoStart = JJ.preventAutoStart), JJ.metadata && (DJ.metadata = JJ.metadata), FJ || DJ.preventAutoStart || DJ.start(), DJ
      }
      serialize() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cJ = {};
        if (ic._Serialize(cJ, this, JJ), cJ.textureMask = this.textureMask.JFJ(), cJ.customShader = this.customShader, cJ.preventAutoStart = this.preventAutoStart, cJ.worldOffset = this.worldOffset.JFJ(), this.metadata && (cJ.metadata = this.metadata), this.subEmitters) {
          cJ.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const ZJ of this._subEmitters) {
            const FJ = [];
            for (const cJ of ZJ) cJ.particleSystem.doNotSerialize || FJ.push(cJ.serialize(JJ));
            cJ.subEmitters.push(FJ)
          }
        }
        if (this._attractors && this._attractors.length) {
          cJ.attractors = [];
          for (const JJ of this._attractors) cJ.attractors.push(JJ.serialize())
        }
        return cJ
      }
      static _Serialize(JJ, cJ, ZJ) {
        if (JJ.name = cJ.name, JJ.id = cJ.id, JJ.qh = cJ.getCapacity(), JJ.disposeOnStop = cJ.disposeOnStop, JJ.manualEmitCount = cJ.manualEmitCount, cJ.emitter.position) {
          const ZJ = cJ.emitter;
          JJ.emitterId = ZJ.id
        } else {
          const ZJ = cJ.emitter;
          JJ.emitter = ZJ.JFJ()
        }
        if (cJ.particleEmitterType && (JJ.particleEmitterType = cJ.particleEmitterType.serialize()), cJ.particleTexture)
          if (ZJ) JJ.texture = cJ.particleTexture.serialize();
          else {
            const ZJ = cJ.particleTexture;
            JJ.textureName = cJ.particleTexture.name, JJ.invertY = !!ZJ._invertY;
            const FJ = {};
            for (const JJ of uc) FJ[JJ] = ZJ[JJ];
            FJ.samplingMode = ZJ.samplingMode, JJ.textureSettings = FJ
          } JJ.isLocal = cJ.isLocal, pc.c.AppendSerializedAnimations(cJ, JJ), JJ.beginAnimationOnStart = cJ.beginAnimationOnStart, JJ.beginAnimationFrom = cJ.beginAnimationFrom, JJ.beginAnimationTo = cJ.beginAnimationTo, JJ.beginAnimationLoop = cJ.beginAnimationLoop, JJ.startDelay = cJ.startDelay, JJ.renderingGroupId = cJ.renderingGroupId, JJ.isBillboardBased = cJ.isBillboardBased, JJ.billboardMode = cJ.billboardMode, JJ.minAngularSpeed = cJ.minAngularSpeed, JJ.maxAngularSpeed = cJ.maxAngularSpeed, JJ.minSize = cJ.minSize, JJ.maxSize = cJ.maxSize, JJ.minScaleX = cJ.minScaleX, JJ.maxScaleX = cJ.maxScaleX, JJ.minScaleY = cJ.minScaleY, JJ.maxScaleY = cJ.maxScaleY, JJ.minEmitPower = cJ.minEmitPower, JJ.maxEmitPower = cJ.maxEmitPower, JJ.minLifeTime = cJ.minLifeTime, JJ.maxLifeTime = cJ.maxLifeTime, JJ.emitRate = cJ.emitRate, JJ.gravity = cJ.gravity.JFJ(), JJ.noiseStrength = cJ.noiseStrength.JFJ(), JJ.color1 = cJ.color1.JFJ(), JJ.color2 = cJ.color2.JFJ(), JJ.colorDead = cJ.colorDead.JFJ(), JJ.updateSpeed = cJ.updateSpeed, JJ.targetStopDuration = cJ.targetStopDuration, JJ.blendMode = cJ.blendMode, JJ.preWarmCycles = cJ.preWarmCycles, JJ.preWarmStepOffset = cJ.preWarmStepOffset, JJ.minInitialRotation = cJ.minInitialRotation, JJ.maxInitialRotation = cJ.maxInitialRotation, JJ.startSpriteCellID = cJ.startSpriteCellID, JJ.spriteCellLoop = cJ.spriteCellLoop, JJ.endSpriteCellID = cJ.endSpriteCellID, JJ.spriteCellChangeSpeed = cJ.spriteCellChangeSpeed, JJ.spriteCellWidth = cJ.spriteCellWidth, JJ.spriteCellHeight = cJ.spriteCellHeight, JJ.spriteRandomStartCell = cJ.spriteRandomStartCell, JJ.isAnimationSheetEnabled = cJ.isAnimationSheetEnabled, JJ.useLogarithmicDepth = cJ.useLogarithmicDepth;
        const FJ = cJ.getColorGradients();
        if (FJ) {
          JJ.colorGradients = [];
          for (const cJ of FJ) {
            const ZJ = {
              gradient: cJ.gradient,
              color1: cJ.color1.JFJ()
            };
            cJ.color2 ? ZJ.color2 = cJ.color2.JFJ() : ZJ.color2 = cJ.color1.JFJ(), JJ.colorGradients.push(ZJ)
          }
        }
        const UJ = cJ.getRampGradients();
        if (UJ) {
          JJ.rampGradients = [];
          for (const cJ of UJ) {
            const ZJ = {
              gradient: cJ.gradient,
              color: cJ.color.JFJ()
            };
            JJ.rampGradients.push(ZJ)
          }
          JJ.useRampGradients = cJ.useRampGradients
        }
        const eJ = cJ.getColorRemapGradients();
        if (eJ) {
          JJ.colorRemapGradients = [];
          for (const cJ of eJ) {
            const ZJ = {
              gradient: cJ.gradient,
              factor1: cJ.factor1
            };
            void 0 !== cJ.factor2 ? ZJ.factor2 = cJ.factor2 : ZJ.factor2 = cJ.factor1, JJ.colorRemapGradients.push(ZJ)
          }
        }
        const XJ = cJ.getAlphaRemapGradients();
        if (XJ) {
          JJ.alphaRemapGradients = [];
          for (const cJ of XJ) {
            const ZJ = {
              gradient: cJ.gradient,
              factor1: cJ.factor1
            };
            void 0 !== cJ.factor2 ? ZJ.factor2 = cJ.factor2 : ZJ.factor2 = cJ.factor1, JJ.alphaRemapGradients.push(ZJ)
          }
        }
        const AJ = cJ.getSizeGradients();
        if (AJ) {
          JJ.sizeGradients = [];
          for (const cJ of AJ) {
            const ZJ = {
              gradient: cJ.gradient,
              factor1: cJ.factor1
            };
            void 0 !== cJ.factor2 ? ZJ.factor2 = cJ.factor2 : ZJ.factor2 = cJ.factor1, JJ.sizeGradients.push(ZJ)
          }
        }
        const qJ = cJ.getAngularSpeedGradients();
        if (qJ) {
          JJ.angularSpeedGradients = [];
          for (const cJ of qJ) {
            const ZJ = {
              gradient: cJ.gradient,
              factor1: cJ.factor1
            };
            void 0 !== cJ.factor2 ? ZJ.factor2 = cJ.factor2 : ZJ.factor2 = cJ.factor1, JJ.angularSpeedGradients.push(ZJ)
          }
        }
        const jJ = cJ.getVelocityGradients();
        if (jJ) {
          JJ.velocityGradients = [];
          for (const cJ of jJ) {
            const ZJ = {
              gradient: cJ.gradient,
              factor1: cJ.factor1
            };
            void 0 !== cJ.factor2 ? ZJ.factor2 = cJ.factor2 : ZJ.factor2 = cJ.factor1, JJ.velocityGradients.push(ZJ)
          }
        }
        const YJ = cJ.getDragGradients();
        if (YJ) {
          JJ.dragGradients = [];
          for (const cJ of YJ) {
            const ZJ = {
              gradient: cJ.gradient,
              factor1: cJ.factor1
            };
            void 0 !== cJ.factor2 ? ZJ.factor2 = cJ.factor2 : ZJ.factor2 = cJ.factor1, JJ.dragGradients.push(ZJ)
          }
        }
        const hJ = cJ.getEmitRateGradients();
        if (hJ) {
          JJ.emitRateGradients = [];
          for (const cJ of hJ) {
            const ZJ = {
              gradient: cJ.gradient,
              factor1: cJ.factor1
            };
            void 0 !== cJ.factor2 ? ZJ.factor2 = cJ.factor2 : ZJ.factor2 = cJ.factor1, JJ.emitRateGradients.push(ZJ)
          }
        }
        const DJ = cJ.getStartSizeGradients();
        if (DJ) {
          JJ.startSizeGradients = [];
          for (const cJ of DJ) {
            const ZJ = {
              gradient: cJ.gradient,
              factor1: cJ.factor1
            };
            void 0 !== cJ.factor2 ? ZJ.factor2 = cJ.factor2 : ZJ.factor2 = cJ.factor1, JJ.startSizeGradients.push(ZJ)
          }
        }
        const sJ = cJ.getLifeTimeGradients();
        if (sJ) {
          JJ.lifeTimeGradients = [];
          for (const cJ of sJ) {
            const ZJ = {
              gradient: cJ.gradient,
              factor1: cJ.factor1
            };
            void 0 !== cJ.factor2 ? ZJ.factor2 = cJ.factor2 : ZJ.factor2 = cJ.factor1, JJ.lifeTimeGradients.push(ZJ)
          }
        }
        const nJ = cJ.getLimitVelocityGradients();
        if (nJ) {
          JJ.limitVelocityGradients = [];
          for (const cJ of nJ) {
            const ZJ = {
              gradient: cJ.gradient,
              factor1: cJ.factor1
            };
            void 0 !== cJ.factor2 ? ZJ.factor2 = cJ.factor2 : ZJ.factor2 = cJ.factor1, JJ.limitVelocityGradients.push(ZJ)
          }
          JJ.limitVelocityDamping = cJ.limitVelocityDamping
        }
        cJ.noiseTexture && (JJ.noiseTexture = cJ.noiseTexture.serialize())
      }
      clone(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FJ = {
          ...this._customWrappers
        };
        let UJ = null;
        const eJ = this._engine;
        if ((0, kJ.e)(eJ.createEffectForParticles) && null != this.customShader) {
          UJ = this.customShader;
          const JJ = UJ.shaderOptions.defines.length > 0 ? UJ.shaderOptions.defines.join("\n") : "",
            cJ = eJ.createEffectForParticles(UJ.shaderPath.fragmentElement, UJ.shaderOptions.uniforms, UJ.shaderOptions.samplers, JJ);
          FJ[0] ? FJ[0].effect = cJ : this.setCustomEffect(cJ, 0)
        }
        const XJ = this.serialize(ZJ),
          AJ = !1 === ZJ && this.particleTexture ? this.particleTexture.clone() : null;
        AJ && (XJ.textureName = void 0);
        const qJ = ic.Parse(XJ, this._scene || this._engine, this._rootUrl);
        return qJ.name = JJ, qJ.customShader = UJ, qJ._customWrappers = FJ, AJ && (qJ.particleTexture = AJ), void 0 === cJ && (cJ = this.emitter), this.noiseTexture && (qJ.noiseTexture = this.noiseTexture.clone()), qJ.emitter = cJ, this.preventAutoStart || qJ.start(), qJ
      }
    }
    ic.BILLBOARDMODE_Y = 2, ic.BILLBOARDMODE_ALL = 7, ic.BILLBOARDMODE_STRETCHED = 8, ic.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Rc = !1;
    Rc || (Rc = !0, Pc._ParseParticleSystem = ic.Parse)
  },
  40354: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      SkyMaterial: () => vJ,
      _MaxColorValueForRenderTarget: () => rJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(38822),
      XJ = ZJ(36165),
      AJ = ZJ(39041),
      qJ = ZJ(39106),
      jJ = ZJ(40327),
      YJ = ZJ(40018),
      hJ = ZJ(38872),
      DJ = ZJ(36216),
      sJ = ZJ(39130),
      nJ = ZJ(39113),
      GJ = ZJ(39091),
      fJ = ZJ(39087);
    class xJ extends AJ.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function rJ(JJ) {
      switch (JJ) {
        case jJ.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case jJ.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let vJ = (() => {
      var JJ;
      let cJ, AJ, jJ, DJ, vJ, mJ, QJ, EJ, VJ, KJ, yJ, SJ, IJ, MJ, bJ, wJ = qJ.d,
        WJ = [],
        gJ = [],
        HJ = [],
        PJ = [],
        kJ = [],
        pJ = [],
        dJ = [],
        zJ = [],
        NJ = [],
        OJ = [],
        TJ = [],
        CJ = [],
        uJ = [],
        iJ = [],
        RJ = [],
        LJ = [],
        aJ = [],
        BJ = [],
        tJ = [],
        oJ = [],
        lJ = [],
        Jc = [],
        cc = [],
        Zc = [],
        Fc = [],
        Uc = [],
        ec = [],
        Xc = [],
        Ac = [],
        qc = [];
      return JJ = class extends wJ {
        constructor(JJ, cJ) {
          super(JJ, cJ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, FJ.e)(this, WJ, 1), this.turbidity = ((0, FJ.e)(this, gJ), (0, FJ.e)(this, HJ, 10)), this.rayleigh = ((0, FJ.e)(this, PJ), (0, FJ.e)(this, kJ, 2)), this.mieCoefficient = ((0, FJ.e)(this, pJ), (0, FJ.e)(this, dJ, .005)), this.mieDirectionalG = ((0, FJ.e)(this, zJ), (0, FJ.e)(this, NJ, .8)), this.distance = ((0, FJ.e)(this, OJ), (0, FJ.e)(this, TJ, 500)), this.inclination = ((0, FJ.e)(this, CJ), (0, FJ.e)(this, uJ, .49)), this.azimuth = ((0, FJ.e)(this, iJ), (0, FJ.e)(this, RJ, .25)), this.sunPosition = ((0, FJ.e)(this, LJ), (0, FJ.e)(this, aJ, new XJ.Pn(0, 100, 0))), this.useSunPosition = ((0, FJ.e)(this, BJ), (0, FJ.e)(this, tJ, !1)), this.cameraOffset = ((0, FJ.e)(this, oJ), (0, FJ.e)(this, lJ, XJ.Pn.Zero())), this.up = ((0, FJ.e)(this, Jc), (0, FJ.e)(this, cc, XJ.Pn.Up())), this.dithering = ((0, FJ.e)(this, Zc), (0, FJ.e)(this, Fc, !1)), this.rawHdrOutput = ((0, FJ.e)(this, Uc), (0, FJ.e)(this, ec, !1)), this.cloudiness = ((0, FJ.e)(this, Xc), (0, FJ.e)(this, Ac, 0)), this._cameraPosition = ((0, FJ.e)(this, qc), XJ.Pn.Zero()), this._skyOrientation = new XJ.Quaternion
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
        isReadyForSubMesh(cJ, ZJ) {
          const FJ = ZJ._drawWrapper;
          if (this.isFrozen && FJ.effect && FJ._wasPreviouslyReady) return !0;
          ZJ.materialDefines || (ZJ.materialDefines = new xJ);
          const UJ = ZJ.materialDefines,
            eJ = this.Qy();
          if (this._isReadyForSubMesh(ZJ)) return !0;
          if ((0, fJ.Y)(cJ, eJ, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, UJ, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, fJ.L)(cJ, UJ, !0, !1), UJ.IMAGEPROCESSINGPOSTPROCESS !== eJ.imageProcessingConfiguration.applyByPostProcess && UJ.markAsMiscDirty(), UJ.DITHER !== this.dithering && UJ.markAsMiscDirty(), UJ.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && UJ.markAsMiscDirty(), UJ.isDirty) {
            UJ.markAsProcessed(), eJ.resetCachedMaterial();
            const cJ = new nJ.b;
            UJ.FOG && cJ.addFallback(1, "FOG"), UJ.IMAGEPROCESSINGPOSTPROCESS = eJ.imageProcessingConfiguration.applyByPostProcess, UJ.DITHER = this.dithering, UJ.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const FJ = [YJ.e.PositionKind];
            UJ.VERTEXCOLOR && FJ.push(YJ.e.ColorKind);
            const XJ = "sky",
              AJ = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, GJ.c)(AJ);
            const qJ = UJ.toString();
            ZJ.setEffect(eJ.gn().createEffect(XJ, {
              attributes: FJ,
              uniformsNames: AJ,
              uniformBuffersNames: [],
              samplers: [],
              defines: qJ,
              fallbacks: cJ,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: JJ._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, eJ.gn()), UJ, this._materialContext)
          }
          return !(!ZJ.effect || !ZJ.effect.isReady()) && (UJ._renderId = eJ.getRenderId(), FJ._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(JJ, cJ, ZJ) {
          const FJ = this.Qy(),
            UJ = ZJ.materialDefines;
          if (!UJ) return;
          const eJ = ZJ.effect;
          if (!eJ) return;
          this._activeEffect = eJ, this.bindOnlyWorldMatrix(JJ), this._activeEffect.setMatrix("viewProjection", FJ.getTransformMatrix()), this._mustRebind(FJ, eJ, ZJ) && ((0, GJ.e)(eJ, this, FJ), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, fJ.l)(UJ, eJ, FJ)), FJ.fogEnabled && cJ.applyFog && FJ.fogMode !== hJ.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", FJ.getViewMatrix()), (0, fJ.h)(FJ, cJ, this._activeEffect, this.rawHdrOutput);
          const AJ = FJ.activeCamera;
          if (AJ) {
            const JJ = AJ.getWorldMatrix();
            this._cameraPosition.x = JJ.m[12], this._cameraPosition.y = JJ.m[13], this._cameraPosition.z = JJ.m[14], this._activeEffect.setVector3("cameraPosition", XJ.TmpVectors.Pn[0].rZJ(this._cameraPosition).xFJ(FJ.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const JJ = FJ.gn()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", rJ(JJ?.texture?.type))
          }
          if (!this.useSunPosition) {
            const JJ = Math.PI * (this.inclination - .5),
              cJ = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(cJ) * Math.cos(JJ), this.sunPosition.y = this.distance * Math.sin(-JJ), this.sunPosition.z = this.distance * Math.sin(cJ) * Math.cos(JJ), XJ.Quaternion.FromUnitVectorsToRef(XJ.Pn.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(cJ, this._activeEffect, ZJ)
        }
        getAnimatables() {
          return []
        }
        dispose(JJ) {
          super.dispose(JJ)
        }
        clone(cJ) {
          return eJ.c.Clone((() => new JJ(cJ, this.Qy())), this)
        }
        serialize() {
          const JJ = super.serialize();
          return JJ.customType = "BABYLON.SkyMaterial", JJ
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(cJ, ZJ, FJ) {
          return eJ.c.Parse((() => new JJ(cJ.name, ZJ)), cJ, ZJ, FJ)
        }
      }, (() => {
        const ZJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(wJ[Symbol.metadata] ?? null) : void 0;
        cJ = [(0, UJ.F)()], AJ = [(0, UJ.F)()], jJ = [(0, UJ.F)()], DJ = [(0, UJ.F)()], vJ = [(0, UJ.F)()], mJ = [(0, UJ.F)()], QJ = [(0, UJ.F)()], EJ = [(0, UJ.F)()], VJ = [(0, UJ.E)()], KJ = [(0, UJ.F)()], yJ = [(0, UJ.E)()], SJ = [(0, UJ.E)()], IJ = [(0, UJ.F)()], MJ = [(0, UJ.F)()], bJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: JJ => "luminance" in JJ,
            get: JJ => JJ.luminance,
            set: (JJ, cJ) => {
              JJ.luminance = cJ
            }
          },
          metadata: ZJ
        }, WJ, gJ), (0, FJ.d)(null, null, AJ, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: JJ => "turbidity" in JJ,
            get: JJ => JJ.turbidity,
            set: (JJ, cJ) => {
              JJ.turbidity = cJ
            }
          },
          metadata: ZJ
        }, HJ, PJ), (0, FJ.d)(null, null, jJ, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: JJ => "rayleigh" in JJ,
            get: JJ => JJ.rayleigh,
            set: (JJ, cJ) => {
              JJ.rayleigh = cJ
            }
          },
          metadata: ZJ
        }, kJ, pJ), (0, FJ.d)(null, null, DJ, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: JJ => "mieCoefficient" in JJ,
            get: JJ => JJ.mieCoefficient,
            set: (JJ, cJ) => {
              JJ.mieCoefficient = cJ
            }
          },
          metadata: ZJ
        }, dJ, zJ), (0, FJ.d)(null, null, vJ, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: JJ => "mieDirectionalG" in JJ,
            get: JJ => JJ.mieDirectionalG,
            set: (JJ, cJ) => {
              JJ.mieDirectionalG = cJ
            }
          },
          metadata: ZJ
        }, NJ, OJ), (0, FJ.d)(null, null, mJ, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: JJ => "distance" in JJ,
            get: JJ => JJ.distance,
            set: (JJ, cJ) => {
              JJ.distance = cJ
            }
          },
          metadata: ZJ
        }, TJ, CJ), (0, FJ.d)(null, null, QJ, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: JJ => "inclination" in JJ,
            get: JJ => JJ.inclination,
            set: (JJ, cJ) => {
              JJ.inclination = cJ
            }
          },
          metadata: ZJ
        }, uJ, iJ), (0, FJ.d)(null, null, EJ, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: JJ => "azimuth" in JJ,
            get: JJ => JJ.azimuth,
            set: (JJ, cJ) => {
              JJ.azimuth = cJ
            }
          },
          metadata: ZJ
        }, RJ, LJ), (0, FJ.d)(null, null, VJ, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: JJ => "sunPosition" in JJ,
            get: JJ => JJ.sunPosition,
            set: (JJ, cJ) => {
              JJ.sunPosition = cJ
            }
          },
          metadata: ZJ
        }, aJ, BJ), (0, FJ.d)(null, null, KJ, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: JJ => "useSunPosition" in JJ,
            get: JJ => JJ.useSunPosition,
            set: (JJ, cJ) => {
              JJ.useSunPosition = cJ
            }
          },
          metadata: ZJ
        }, tJ, oJ), (0, FJ.d)(null, null, yJ, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: JJ => "cameraOffset" in JJ,
            get: JJ => JJ.cameraOffset,
            set: (JJ, cJ) => {
              JJ.cameraOffset = cJ
            }
          },
          metadata: ZJ
        }, lJ, Jc), (0, FJ.d)(null, null, SJ, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: JJ => "up" in JJ,
            get: JJ => JJ.up,
            set: (JJ, cJ) => {
              JJ.up = cJ
            }
          },
          metadata: ZJ
        }, cc, Zc), (0, FJ.d)(null, null, IJ, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: JJ => "dithering" in JJ,
            get: JJ => JJ.dithering,
            set: (JJ, cJ) => {
              JJ.dithering = cJ
            }
          },
          metadata: ZJ
        }, Fc, Uc), (0, FJ.d)(null, null, MJ, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: JJ => "rawHdrOutput" in JJ,
            get: JJ => JJ.rawHdrOutput,
            set: (JJ, cJ) => {
              JJ.rawHdrOutput = cJ
            }
          },
          metadata: ZJ
        }, ec, Xc), (0, FJ.d)(null, null, bJ, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: JJ => "cloudiness" in JJ,
            get: JJ => JJ.cloudiness,
            set: (JJ, cJ) => {
              JJ.cloudiness = cJ
            }
          },
          metadata: ZJ
        }, Ac, qc), ZJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ZJ
        })
      })(), JJ._ShaderLoader = new sJ.b((() => [ZJ.e(310).then((() => ZJ(59452))), ZJ.e(303).then((() => ZJ(59456)))]), (() => [ZJ.e(327).then((() => ZJ(59463))), ZJ.e(321).then((() => ZJ(59470)))])), JJ
    })();
    (0, DJ.f)("BABYLON.SkyMaterial", vJ)
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);