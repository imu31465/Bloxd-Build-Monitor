export const id = 308;
export const ids = [308];
export const modules = {
  41745: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(40215),
      zT = mT(41751);
    class MT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = mT, this.yWT = [], this._maxBlockCapacity = UT || 64, this._selectionContent = new WT.c(1024), this._creationFunc = TT
      }
      update(TT, UT, mT) {
        zT.d._CreateBlocks(TT, UT, mT, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      fWT(TT) {
        for (let UT = 0; UT < this.blocks.length; UT++) {
          this.blocks[UT].addEntry(TT)
        }
      }
      cV(TT) {
        for (let UT = 0; UT < this.blocks.length; UT++) {
          this.blocks[UT].removeEntry(TT)
        }
      }
      select(TT, UT) {
        this._selectionContent.reset();
        for (let mT = 0; mT < this.blocks.length; mT++) {
          this.blocks[mT].select(TT, this._selectionContent, UT)
        }
        return UT ? this._selectionContent.concat(this.yWT) : this._selectionContent.concatWithNoDuplicate(this.yWT), this._selectionContent
      }
      intersects(TT, UT, mT) {
        this._selectionContent.reset();
        for (let WT = 0; WT < this.blocks.length; WT++) {
          this.blocks[WT].intersects(TT, UT, this._selectionContent, mT)
        }
        return mT ? this._selectionContent.concat(this.yWT) : this._selectionContent.concatWithNoDuplicate(this.yWT), this._selectionContent
      }
      intersectsRay(TT) {
        this._selectionContent.reset();
        for (let UT = 0; UT < this.blocks.length; UT++) {
          this.blocks[UT].intersectsRay(TT, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.yWT), this._selectionContent
      }
    }
    MT.CreationFuncForMeshes = (TT, UT) => {
      const mT = TT.rV();
      !TT.isBlocked && mT.boundingBox.intersectsMinMax(UT.eWT, UT.OWT) && UT.entries.push(TT)
    }, MT.CreationFuncForSubMeshes = (TT, UT) => {
      TT.rV().boundingBox.intersectsMinMax(UT.eWT, UT.OWT) && UT.entries.push(TT)
    }
  },
  41751: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT
    });
    var WT = mT(37188),
      zT = mT(40440);
    class MT {
      constructor(TT, UT, mT, WT, zT, MT) {
        this.entries = [], this.XWT = new Array, this._capacity = mT, this._depth = WT, this._maxDepth = zT, this._creationFunc = MT, this._minPoint = TT, this._maxPoint = UT, this.XWT.push(TT.clone()), this.XWT.push(UT.clone()), this.XWT.push(TT.clone()), this.XWT[2].x = UT.x, this.XWT.push(TT.clone()), this.XWT[3].y = UT.y, this.XWT.push(TT.clone()), this.XWT[4].z = UT.z, this.XWT.push(UT.clone()), this.XWT[5].z = TT.z, this.XWT.push(UT.clone()), this.XWT[6].x = TT.x, this.XWT.push(UT.clone()), this.XWT[7].y = TT.y
      }
      get fl() {
        return this._capacity
      }
      get eWT() {
        return this._minPoint
      }
      get OWT() {
        return this._maxPoint
      }
      addEntry(TT) {
        if (this.blocks)
          for (let UT = 0; UT < this.blocks.length; UT++) {
            this.blocks[UT].addEntry(TT)
          } else this._creationFunc(TT, this), this.entries.length > this.fl && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(TT) {
        if (this.blocks) {
          for (let UT = 0; UT < this.blocks.length; UT++) {
            this.blocks[UT].removeEntry(TT)
          }
          return
        }
        const UT = this.entries.indexOf(TT);
        UT > -1 && this.entries.splice(UT, 1)
      }
      addEntries(TT) {
        for (let UT = 0; UT < TT.length; UT++) {
          const mT = TT[UT];
          this.addEntry(mT)
        }
      }
      select(TT, UT, mT) {
        if (zT.e.IsInFrustum(this.XWT, TT)) {
          if (this.blocks) {
            for (let WT = 0; WT < this.blocks.length; WT++) {
              this.blocks[WT].select(TT, UT, mT)
            }
            return
          }
          mT ? UT.concat(this.entries) : UT.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(TT, UT, mT, WT) {
        if (zT.e.IntersectsSphere(this._minPoint, this._maxPoint, TT, UT)) {
          if (this.blocks) {
            for (let zT = 0; zT < this.blocks.length; zT++) {
              this.blocks[zT].intersects(TT, UT, mT, WT)
            }
            return
          }
          WT ? mT.concat(this.entries) : mT.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(TT, UT) {
        if (TT.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let mT = 0; mT < this.blocks.length; mT++) {
              this.blocks[mT].intersectsRay(TT, UT)
            }
            return
          }
          UT.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        MT._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(TT, UT, mT, zT, gT, nT, HT, kT) {
        HT.blocks = new Array;
        const jT = new WT.p((UT.x - TT.x) / 2, (UT.y - TT.y) / 2, (UT.z - TT.z) / 2);
        for (let WT = 0; WT < 2; WT++)
          for (let UT = 0; UT < 2; UT++)
            for (let lT = 0; lT < 2; lT++) {
              const LT = TT.add(jT.multiplyByFloats(WT, UT, lT)),
                pT = TT.add(jT.multiplyByFloats(WT + 1, UT + 1, lT + 1)),
                BT = new MT(LT, pT, zT, gT + 1, nT, kT);
              BT.addEntries(mT), HT.blocks.push(BT)
            }
      }
    }
  },
  41759: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => jT
    });
    var WT = mT(40198),
      zT = mT(37188),
      MT = mT(40567),
      gT = mT(41697),
      nT = mT(40283),
      HT = mT(37216),
      kT = mT(41745);
    class jT {
      constructor(TT) {
        this.name = nT.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new gT.B(zT.p.Zero(), new zT.p(1, 1, 1)), (TT = TT || HT.c.LastCreatedScene) && (this.XZ = TT, this.XZ.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.XZ.getActiveSubMeshCandidates = TT => this.getActiveSubMeshCandidates(TT), this.XZ.getCollidingSubMeshCandidates = (TT, UT) => this.getCollidingSubMeshCandidates(TT, UT), this.XZ.getIntersectingSubMeshCandidates = (TT, UT) => this.getIntersectingSubMeshCandidates(TT, UT))
      }
      register() {
        this.XZ.onMeshRemovedObservable.add((TT => {
          const UT = this.XZ.selectionOctree;
          if (void 0 !== UT && null !== UT) {
            const mT = UT.yWT.indexOf(TT); - 1 !== mT && UT.yWT.splice(mT, 1)
          }
        })), this.XZ.onMeshImportedObservable.add((TT => {
          const UT = this.XZ.selectionOctree;
          void 0 !== UT && null !== UT && UT.fWT(TT)
        }))
      }
      getActiveMeshCandidates() {
        return this.XZ.VWT?.select(this.XZ.frustumPlanes) || this.XZ._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(TT) {
        if (TT._submeshesOctree && TT.useOctreeForRenderingSelection) {
          return TT._submeshesOctree.select(this.XZ.frustumPlanes)
        }
        return this.XZ._getDefaultSubMeshCandidates(TT)
      }
      getIntersectingSubMeshCandidates(TT, UT) {
        if (TT._submeshesOctree && TT.useOctreeForPicking) {
          gT.B.TransformToRef(UT, TT.getWorldMatrix(), this._tempRay);
          return TT._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.XZ._getDefaultSubMeshCandidates(TT)
      }
      getCollidingSubMeshCandidates(TT, UT) {
        if (TT._submeshesOctree && TT.useOctreeForCollisions) {
          const mT = UT._velocityWorldLength + Math.max(UT._radius.x, UT._radius.y, UT._radius.z);
          return TT._submeshesOctree.intersects(UT._basePointWorld, mT)
        }
        return this.XZ._getDefaultSubMeshCandidates(TT)
      }
      rebuild() {}
      dispose() {}
    }
    let lT = !1;
    lT || (lT = !0, WT.i.prototype.createOrUpdateSelectionOctree = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        mT = this._getComponent(nT.b.NAME_OCTREE);
      mT || (mT = new jT(this), this.WWT(mT)), this.VWT || (this.VWT = new kT.c(kT.c.CreationFuncForMeshes, TT, UT));
      const WT = this.getWorldExtends();
      return this.VWT.update(WT.min, WT.max, this.meshes), this.VWT
    }, Object.defineProperty(WT.i.prototype, "selectionOctree", {
      get: function() {
        return this.VWT
      },
      enumerable: !0,
      configurable: !0
    }), MT.d.prototype.createOrUpdateSubmeshesOctree = function() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const mT = this.KF();
      let WT = mT._getComponent(nT.b.NAME_OCTREE);
      WT || (WT = new jT(mT), mT.WWT(WT)), this._submeshesOctree || (this._submeshesOctree = new kT.c(kT.c.CreationFuncForSubMeshes, TT, UT)), this.computeWorldMatrix(!0);
      const zT = this.rV().boundingBox;
      return this._submeshesOctree.update(zT.minimumWorld, zT.maximumWorld, this.rY), this._submeshesOctree
    })
  },
  41697: (TT, UT, mT) => {
    mT.d(UT, {
      B: () => lT,
      c: () => tT,
      f: () => ZT,
      g: () => BT,
      i: () => pT,
      m: () => dT,
      p: () => xT,
      t: () => eT,
      x: () => JT,
      z: () => YT
    });
    var WT = mT(37196),
      zT = mT(37188),
      MT = mT(37205),
      gT = mT(40426),
      nT = mT(40251),
      HT = mT(37216),
      kT = mT(40305);
    const jT = {
      internalPickerForMesh: void 0
    };
    class lT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WT.c;
        this.origin = TT, this.direction = UT, this.length = mT, this.epsilon = zT
      }
      clone() {
        return new lT(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const WT = lT._TmpVector3[0].J9(TT.x - mT, TT.y - mT, TT.z - mT),
          zT = lT._TmpVector3[1].J9(UT.x + mT, UT.y + mT, UT.z + mT);
        let MT, gT, nT, HT, kT = 0,
          jT = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < WT.x || this.origin.x > zT.x) return !1
        } else if (MT = 1 / this.direction.x, gT = (WT.x - this.origin.x) * MT, nT = (zT.x - this.origin.x) * MT, nT === -1 / 0 && (nT = 1 / 0), gT > nT && (HT = gT, gT = nT, nT = HT), kT = Math.max(gT, kT), jT = Math.min(nT, jT), kT > jT) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < WT.y || this.origin.y > zT.y) return !1
        } else if (MT = 1 / this.direction.y, gT = (WT.y - this.origin.y) * MT, nT = (zT.y - this.origin.y) * MT, nT === -1 / 0 && (nT = 1 / 0), gT > nT && (HT = gT, gT = nT, nT = HT), kT = Math.max(gT, kT), jT = Math.min(nT, jT), kT > jT) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < WT.z || this.origin.z > zT.z) return !1
        } else if (MT = 1 / this.direction.z, gT = (WT.z - this.origin.z) * MT, nT = (zT.z - this.origin.z) * MT, nT === -1 / 0 && (nT = 1 / 0), gT > nT && (HT = gT, gT = nT, nT = HT), kT = Math.max(gT, kT), jT = Math.min(nT, jT), kT > jT) return !1;
        return !0
      }
      intersectsBox(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(TT.minimum, TT.maximum, UT)
      }
      intersectsSphere(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const mT = TT.center.x - this.origin.x,
          WT = TT.center.y - this.origin.y,
          zT = TT.center.z - this.origin.z,
          MT = mT * mT + WT * WT + zT * zT,
          gT = TT.radius + UT,
          nT = gT * gT;
        if (MT <= nT) return !0;
        const HT = mT * this.direction.x + WT * this.direction.y + zT * this.direction.z;
        if (HT < 0) return !1;
        return MT - HT * HT <= nT
      }
      intersectsTriangle(TT, UT, mT) {
        const WT = lT._TmpVector3[0],
          MT = lT._TmpVector3[1],
          nT = lT._TmpVector3[2],
          HT = lT._TmpVector3[3],
          kT = lT._TmpVector3[4];
        UT.subtractToRef(TT, WT), mT.subtractToRef(TT, MT), zT.p.CrossToRef(this.direction, MT, nT);
        const jT = zT.p.Dot(WT, nT);
        if (0 === jT) return null;
        const LT = 1 / jT;
        this.origin.subtractToRef(TT, HT);
        const pT = zT.p.Dot(HT, nT) * LT;
        if (pT < -this.epsilon || pT > 1 + this.epsilon) return null;
        zT.p.CrossToRef(HT, WT, kT);
        const BT = zT.p.Dot(this.direction, kT) * LT;
        if (BT < -this.epsilon || pT + BT > 1 + this.epsilon) return null;
        const ZT = zT.p.Dot(MT, kT) * LT;
        return ZT > this.length || ZT < 0 ? null : new gT.d(1 - pT - BT, pT, ZT)
      }
      intersectsPlane(TT) {
        let UT;
        const mT = zT.p.Dot(TT.normal, this.direction);
        if (Math.abs(mT) < 9.99999997475243e-7) return null;
        {
          const WT = zT.p.Dot(TT.normal, this.origin);
          return UT = (-TT.d - WT) / mT, UT < 0 ? UT < -9.99999997475243e-7 ? null : 0 : UT
        }
      }
      intersectsAxis(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (TT) {
          case "y": {
            const TT = (this.origin.y - UT) / this.direction.y;
            return TT > 0 ? null : new zT.p(this.origin.x + this.direction.x * -TT, UT, this.origin.z + this.direction.z * -TT)
          }
          case "x": {
            const TT = (this.origin.x - UT) / this.direction.x;
            return TT > 0 ? null : new zT.p(UT, this.origin.y + this.direction.y * -TT, this.origin.z + this.direction.z * -TT)
          }
          case "z": {
            const TT = (this.origin.z - UT) / this.direction.z;
            return TT > 0 ? null : new zT.p(this.origin.x + this.direction.x * -TT, this.origin.y + this.direction.y * -TT, UT)
          }
          default:
            return null
        }
      }
      HzT(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          MT = arguments.length > 4 ? arguments[4] : void 0,
          gT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const nT = zT.l.Matrix[0];
        return TT.getWorldMatrix().invertToRef(nT), this._tmpRay ? lT.TransformToRef(this, nT, this._tmpRay) : this._tmpRay = lT.Transform(this, nT), TT.intersects(this._tmpRay, UT, mT, WT, MT, gT)
      }
      intersectsMeshes(TT, UT, mT) {
        mT ? mT.length = 0 : mT = [];
        for (let WT = 0; WT < TT.length; WT++) {
          const zT = this.HzT(TT[WT], UT);
          zT.hit && mT.push(zT)
        }
        return mT.sort(this._comparePickingInfo), mT
      }
      _comparePickingInfo(TT, UT) {
        return TT.distance < UT.distance ? -1 : TT.distance > UT.distance ? 1 : 0
      }
      intersectionSegment(TT, UT, mT) {
        const WT = this.origin,
          MT = zT.l.JB[0],
          gT = zT.l.JB[1],
          nT = zT.l.JB[2],
          HT = zT.l.JB[3];
        UT.subtractToRef(TT, MT), this.direction.scaleToRef(lT._Rayl, nT), WT.addToRef(nT, gT), TT.subtractToRef(WT, HT);
        const kT = zT.p.Dot(MT, MT),
          jT = zT.p.Dot(MT, nT),
          LT = zT.p.Dot(nT, nT),
          pT = zT.p.Dot(MT, HT),
          BT = zT.p.Dot(nT, HT),
          ZT = kT * LT - jT * jT;
        let cT, vT, fT = ZT,
          qT = ZT;
        ZT < lT._Smallnum ? (cT = 0, fT = 1, vT = BT, qT = LT) : (cT = jT * BT - LT * pT, vT = kT * BT - jT * pT, cT < 0 ? (cT = 0, vT = BT, qT = LT) : cT > fT && (cT = fT, vT = BT + jT, qT = LT)), vT < 0 ? (vT = 0, -pT < 0 ? cT = 0 : -pT > kT ? cT = fT : (cT = -pT, fT = kT)) : vT > qT && (vT = qT, -pT + jT < 0 ? cT = 0 : -pT + jT > kT ? cT = fT : (cT = -pT + jT, fT = kT));
        const iT = Math.abs(cT) < lT._Smallnum ? 0 : cT / fT,
          bT = Math.abs(vT) < lT._Smallnum ? 0 : vT / qT,
          OT = zT.l.JB[4];
        nT.scaleToRef(bT, OT);
        const eT = zT.l.JB[5];
        MT.scaleToRef(iT, eT), eT.addInPlace(HT);
        const YT = zT.l.JB[6];
        eT.subtractToRef(OT, YT);
        return bT > 0 && bT <= this.length && YT.lengthSquared() < mT * mT ? eT.length() : -1
      }
      update(TT, UT, mT, WT, MT, gT, nT) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          lT._RayDistant || (lT._RayDistant = lT.Zero()), lT._RayDistant.unprojectRayToRef(TT, UT, mT, WT, zT.e.IdentityReadOnly, gT, nT);
          const HT = zT.l.Matrix[0];
          MT.invertToRef(HT), lT.TransformToRef(lT._RayDistant, HT, this)
        } else this.unprojectRayToRef(TT, UT, mT, WT, MT, gT, nT);
        return this
      }
      static Zero() {
        return new lT(zT.p.Zero(), zT.p.Zero())
      }
      static CreateNew(TT, UT, mT, WT, zT, MT, gT) {
        return lT.Zero().update(TT, UT, mT, WT, zT, MT, gT)
      }
      static CreateNewFromTo(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.e.IdentityReadOnly;
        const WT = new lT(new zT.p(0, 0, 0), new zT.p(0, 0, 0));
        return lT.CreateFromToToRef(TT, UT, WT, mT)
      }
      static CreateFromToToRef(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zT.e.IdentityReadOnly;
        mT.origin.Gw(TT);
        const MT = UT.subtractToRef(TT, mT.direction),
          gT = Math.sqrt(MT.x * MT.x + MT.y * MT.y + MT.z * MT.z);
        return mT.length = gT, mT.direction.normalize(), lT.TransformToRef(mT, WT, mT)
      }
      static Transform(TT, UT) {
        const mT = new lT(new zT.p(0, 0, 0), new zT.p(0, 0, 0));
        return lT.TransformToRef(TT, UT, mT), mT
      }
      static TransformToRef(TT, UT, mT) {
        zT.p.TransformCoordinatesToRef(TT.origin, UT, mT.origin), zT.p.TransformNormalToRef(TT.direction, UT, mT.direction), mT.length = TT.length, mT.epsilon = TT.epsilon;
        const WT = mT.direction,
          MT = WT.length();
        if (0 !== MT && 1 !== MT) {
          const TT = 1 / MT;
          WT.x *= TT, WT.y *= TT, WT.z *= TT, mT.length *= MT
        }
        return mT
      }
      unprojectRayToRef(TT, UT, mT, WT, MT, gT, nT) {
        const kT = zT.l.Matrix[0];
        MT.multiplyToRef(gT, kT), kT.multiplyToRef(nT, kT), kT.invert();
        const jT = HT.c.LastCreatedEngine,
          lT = zT.l.JB[0];
        lT.x = TT / mT * 2 - 1, lT.y = -(UT / WT * 2 - 1), lT.z = jT?.pWT ? 1 : jT?.isNDCHalfZRange ? 0 : -1;
        const LT = zT.l.JB[1].J9(lT.x, lT.y, 1 - 1e-8),
          pT = zT.l.JB[2],
          BT = zT.l.JB[3];
        zT.p.TransformCoordinatesToRef(lT, kT, pT), zT.p.TransformCoordinatesToRef(LT, kT, BT), this.origin.Gw(pT), BT.subtractToRef(pT, this.direction), this.direction.normalize()
      }
    }

    function LT(TT, UT, mT, WT, zT) {
      let MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const gT = lT.Zero();
      return pT(TT, UT, mT, WT, gT, zT, MT), gT
    }

    function pT(TT, UT, mT, WT, MT, gT) {
      let nT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        HT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const kT = TT.eB();
      if (!gT && !(gT = TT.activeCamera) && !(gT = TT.cameraToUseForPointers)) return TT;
      const jT = gT.viewport,
        lT = kT.getRenderHeight(),
        {
          x: LT,
          y: pT,
          width: BT,
          height: ZT
        } = jT.toGlobal(kT.getRenderWidth(), lT),
        cT = 1 / kT.getHardwareScalingLevel();
      return UT = UT * cT - LT, mT = mT * cT - (lT - pT - ZT), MT.update(UT, mT, BT, ZT, WT || zT.e.IdentityReadOnly, nT ? zT.e.IdentityReadOnly : gT.getViewMatrix(), gT.getProjectionMatrix(), HT), TT
    }

    function BT(TT, UT, mT, WT) {
      const zT = lT.Zero();
      return ZT(TT, UT, mT, zT, WT), zT
    }

    function ZT(TT, UT, mT, WT, MT) {
      if (!nT.c) return TT;
      const gT = TT.eB();
      if (!MT && !(MT = TT.activeCamera) && !(MT = TT.cameraToUseForPointers)) throw new Error("Active camera not set");
      const HT = MT.viewport,
        kT = gT.getRenderHeight(),
        {
          x: jT,
          y: lT,
          width: LT,
          height: pT
        } = HT.toGlobal(gT.getRenderWidth(), kT),
        BT = zT.e.Identity(),
        ZT = 1 / gT.getHardwareScalingLevel();
      return UT = UT * ZT - jT, mT = mT * ZT - (kT - lT - pT), WT.update(UT, mT, LT, pT, BT, BT, MT.getProjectionMatrix()), TT
    }

    function cT(TT, UT, mT, WT, zT, MT, gT, nT) {
      return vT(TT, mT, WT, UT(WT, mT.enableDistantPicking), zT, MT, gT, nT)
    }

    function vT(TT, UT, mT, WT, zT, MT, gT, nT) {
      const HT = UT.intersects(WT, zT, gT, MT, mT, nT);
      return HT && HT.hit ? !zT && null != TT && HT.distance >= TT.distance ? null : HT : null
    }

    function fT(TT, UT) {
      return "InstancedLinesMesh" === TT || "LinesMesh" === TT ? UT.intersectionThreshold : 0
    }

    function qT(TT) {
      const UT = TT.getClassName();
      if ("GreasedLineMesh" === UT) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const mT = TT.rawBoundingInfo;
      return {
        rawBoundingInfo: mT,
        intersectionThreshold: mT ? fT(UT, TT) : 0
      }
    }

    function iT(TT, UT, mT, WT, zT) {
      const MT = TT(mT, UT.enableDistantPicking);
      return MT.intersectsSphere(WT.rWT, zT) && MT.intersectsBox(WT.boundingBox, zT) ? MT : null
    }

    function bT(TT, UT, mT, WT, MT, gT) {
      let HT = null;
      const kT = !!(TT.activeCameras && TT.activeCameras.length > 1 && TT.cameraToUseForPointers !== TT.activeCamera),
        lT = TT.cameraToUseForPointers || TT.activeCamera,
        LT = jT.internalPickerForMesh || cT,
        pT = LT === cT;
      for (let nT = 0; nT < TT.meshes.length; nT++) {
        const jT = TT.meshes[nT];
        if (mT) {
          if (!mT(jT, -1)) continue
        } else if (!jT.isEnabled() || !jT.isVisible || !jT.QZ) continue;
        const BT = kT && jT.isWorldMatrixCameraDependent(),
          ZT = jT.computeWorldMatrix(BT, lT);
        if (jT.hasThinInstances && jT.sUT) {
          const TT = LT(HT, UT, jT, ZT, !0, !0, gT);
          if (TT) {
            if (MT) return TT;
            const {
              rawBoundingInfo: nT,
              intersectionThreshold: kT
            } = qT(jT), lT = jT._thinInstanceDataStorage.matrixData;
            if (lT) {
              const TT = zT.l.Matrix[0],
                BT = zT.l.Matrix[1],
                cT = Math.min(jT.i5, lT.length >> 4);
              for (let fT = 0; fT < cT; fT++) {
                if (mT && !mT(jT, fT)) continue;
                zT.e.FromArrayToRef(lT, fT << 4, TT), TT.multiplyToRef(ZT, BT);
                const cT = pT && nT ? iT(UT, jT, BT, nT, kT) : null;
                if (pT && nT && !cT) continue;
                const qT = pT && cT ? vT(HT, jT, BT, cT, WT, MT, gT, !0) : LT(HT, UT, jT, BT, WT, MT, gT, !0);
                if (qT && (HT = qT, HT.thinInstanceIndex = fT, WT)) return HT
              }
            }
          }
        } else {
          const TT = LT(HT, UT, jT, ZT, WT, MT, gT);
          if (TT && (HT = TT, WT)) return HT
        }
      }
      return HT || new nT.c
    }

    function OT(TT, UT, mT, WT) {
      if (!nT.c) return null;
      const MT = [],
        gT = !!(TT.activeCameras && TT.activeCameras.length > 1 && TT.cameraToUseForPointers !== TT.activeCamera),
        HT = TT.cameraToUseForPointers || TT.activeCamera,
        kT = jT.internalPickerForMesh || cT,
        lT = kT === cT;
      for (let nT = 0; nT < TT.meshes.length; nT++) {
        const jT = TT.meshes[nT];
        if (mT) {
          if (!mT(jT, -1)) continue
        } else if (!jT.isEnabled() || !jT.isVisible || !jT.QZ) continue;
        const LT = gT && jT.isWorldMatrixCameraDependent(),
          pT = jT.computeWorldMatrix(LT, HT);
        if (jT.hasThinInstances && jT.sUT) {
          if (kT(null, UT, jT, pT, !0, !0, WT)) {
            const {
              rawBoundingInfo: TT,
              intersectionThreshold: gT
            } = qT(jT), nT = jT._thinInstanceDataStorage.matrixData;
            if (nT) {
              const HT = zT.l.Matrix[0],
                LT = zT.l.Matrix[1],
                BT = Math.min(jT.i5, nT.length >> 4);
              for (let ZT = 0; ZT < BT; ZT++) {
                if (mT && !mT(jT, ZT)) continue;
                zT.e.FromArrayToRef(nT, ZT << 4, HT), HT.multiplyToRef(pT, LT);
                const BT = lT && TT ? iT(UT, jT, LT, TT, gT) : null;
                if (lT && TT && !BT) continue;
                const cT = lT && BT ? vT(null, jT, LT, BT, !1, !1, WT, !0) : kT(null, UT, jT, LT, !1, !1, WT, !0);
                cT && (cT.thinInstanceIndex = ZT, MT.push(cT))
              }
            }
          }
        } else {
          const TT = kT(null, UT, jT, pT, !1, !1, WT);
          TT && MT.push(TT)
        }
      }
      return MT
    }

    function eT(TT, UT, mT, WT, MT, gT) {
      if (!nT.c) return null;
      const HT = bT(TT, (WT => (TT._tempPickingRay || (TT._tempPickingRay = lT.Zero()), pT(TT, UT, mT, WT, TT._tempPickingRay, gT || null), TT._tempPickingRay)), WT, MT, !0);
      return HT && (HT.ray = LT(TT, UT, mT, zT.e.Identity(), gT || null)), HT
    }

    function YT(TT, UT, mT, WT, MT, gT, nT) {
      const HT = bT(TT, ((WT, zT) => (TT._tempPickingRay || (TT._tempPickingRay = lT.Zero()), pT(TT, UT, mT, WT, TT._tempPickingRay, gT || null, !1, zT), TT._tempPickingRay)), WT, MT, !1, nT);
      return HT && (HT.ray = LT(TT, UT, mT, zT.e.Identity(), gT || null)), HT
    }

    function JT(TT, UT, mT, WT, MT) {
      const gT = bT(TT, (mT => (TT._pickWithRayInverseMatrix || (TT._pickWithRayInverseMatrix = zT.e.Identity()), mT.invertToRef(TT._pickWithRayInverseMatrix), TT._cachedRayForTransform || (TT._cachedRayForTransform = lT.Zero()), lT.TransformToRef(UT, TT._pickWithRayInverseMatrix, TT._cachedRayForTransform), TT._cachedRayForTransform)), mT, WT, !1, MT);
      return gT && (gT.ray = UT), gT
    }

    function xT(TT, UT, mT, WT, zT, MT) {
      return OT(TT, (WT => LT(TT, UT, mT, WT, zT || null)), WT, MT)
    }

    function dT(TT, UT, mT, WT) {
      return OT(TT, (mT => (TT._pickWithRayInverseMatrix || (TT._pickWithRayInverseMatrix = zT.e.Identity()), mT.invertToRef(TT._pickWithRayInverseMatrix), TT._cachedRayForTransform || (TT._cachedRayForTransform = lT.Zero()), lT.TransformToRef(UT, TT._pickWithRayInverseMatrix, TT._cachedRayForTransform), TT._cachedRayForTransform)), mT, WT)
    }

    function wT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        WT = arguments.length > 3 ? arguments[3] : void 0,
        MT = arguments.length > 4 ? arguments[4] : void 0;
      WT || (WT = TT.getWorldMatrix()), UT.length = mT, MT ? UT.origin.Gw(MT) : UT.origin.Gw(TT.position);
      const gT = zT.l.JB[2];
      gT.set(0, 0, TT._scene.useRightHandedSystem ? -1 : 1);
      const nT = zT.l.JB[3];
      return zT.p.TransformNormalToRef(gT, WT, nT), zT.p.NormalizeToRef(nT, UT.direction), UT
    }

    function tT(TT, UT) {
      UT && (UT.prototype.getForwardRay = function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        return wT(this, new lT(zT.p.Zero(), zT.p.Zero(), TT), TT, UT, mT)
      }, UT.prototype.getForwardRayToRef = function(TT) {
        return wT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), TT && (kT.c._IsPickingAvailable = !0, TT.prototype.createPickingRay = function(TT, UT, mT, WT) {
        return LT(this, TT, UT, mT, WT, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    lT._TmpVector3 = (0, MT.c)(6, zT.p.Zero), lT._RayDistant = lT.Zero(), lT._Smallnum = 1e-8, lT._Rayl = 1e9
  },
  41693: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT.B
    });
    var WT = mT(40198),
      zT = mT(40330),
      MT = mT(41697);
    let gT = !1;
    gT || (gT = !0, (0, MT.c)(WT.i, zT.b), WT.i.prototype.createPickingRayToRef = function(TT, UT, mT, WT, zT) {
      let gT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        nT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, MT.i)(this, TT, UT, mT, WT, zT, gT, nT)
    }, WT.i.prototype.createPickingRayInCameraSpace = function(TT, UT, mT) {
      return (0, MT.g)(this, TT, UT, mT)
    }, WT.i.prototype.createPickingRayInCameraSpaceToRef = function(TT, UT, mT, WT) {
      return (0, MT.f)(this, TT, UT, mT, WT)
    }, WT.i.prototype.pickWithBoundingInfo = function(TT, UT, mT, WT, zT) {
      return (0, MT.t)(this, TT, UT, mT, WT, zT)
    }, WT.i.prototype.VL = function(TT, UT, mT, WT, zT, gT) {
      let nT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, MT.z)(this, TT, UT, mT, WT, zT, gT, nT)
    }, WT.i.prototype.pickWithRay = function(TT, UT, mT, WT) {
      return (0, MT.x)(this, TT, UT, mT, WT)
    }, WT.i.prototype.multiPick = function(TT, UT, mT, WT, zT) {
      return (0, MT.p)(this, TT, UT, mT, WT, zT)
    }, WT.i.prototype.multiPickWithRay = function(TT, UT, mT) {
      return (0, MT.m)(this, TT, UT, mT)
    })
  },
  41701: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => jT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(37188),
      gT = mT(40373),
      nT = mT(41710),
      HT = mT(40335),
      kT = mT(37239);
    let jT = (() => {
        var TT;
        let UT, mT, HT, kT, jT, lT, LT, pT, BT = nT.e,
          ZT = [],
          cT = [],
          vT = [],
          fT = [],
          qT = [],
          iT = [],
          bT = [],
          OT = [],
          eT = [],
          YT = [],
          JT = [],
          xT = [],
          dT = [];
        return TT = class extends BT {
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
          constructor(TT, UT, mT, zT) {
            super(TT, mT, zT), this._shadowFrustumSize = ((0, WT.k)(this, ZT), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, WT.k)(this, cT, !0), this.autoCalcShadowZBounds = ((0, WT.k)(this, vT), (0, WT.k)(this, fT, !1)), this._orthoLeft = ((0, WT.k)(this, qT), (0, WT.k)(this, iT, Number.MAX_VALUE)), this._orthoRight = ((0, WT.k)(this, bT), (0, WT.k)(this, OT, Number.MIN_VALUE)), this._orthoTop = ((0, WT.k)(this, eT), (0, WT.k)(this, YT, Number.MIN_VALUE)), this._orthoBottom = ((0, WT.k)(this, JT), (0, WT.k)(this, xT, Number.MAX_VALUE)), (0, WT.k)(this, dT), this.position = UT.scale(-1), this.direction = UT
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return gT.e.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(TT, UT, mT) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(TT) : this._setDefaultAutoExtendShadowProjectionMatrix(TT, UT, mT)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(TT) {
            const UT = this.KF().activeCamera;
            MT.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : UT ? UT.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : UT ? UT.maxZ : 1e4, TT, this.KF().eB().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(TT, UT, mT) {
            const WT = this.KF().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const TT = MT.p.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let WT = Number.MAX_VALUE,
                zT = -Number.MAX_VALUE;
              for (let gT = 0; gT < mT.length; gT++) {
                const nT = mT[gT];
                if (!nT) continue;
                const HT = nT.rV().boundingBox;
                for (let mT = 0; mT < HT.vectorsWorld.length; mT++) MT.p.TransformCoordinatesToRef(HT.vectorsWorld[mT], UT, TT), TT.x < this._orthoLeft && (this._orthoLeft = TT.x), TT.y < this._orthoBottom && (this._orthoBottom = TT.y), TT.x > this._orthoRight && (this._orthoRight = TT.x), TT.y > this._orthoTop && (this._orthoTop = TT.y), this.autoCalcShadowZBounds && (TT.z < WT && (WT = TT.z), TT.z > zT && (zT = TT.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = WT, this._shadowMaxZ = zT)
            }
            const zT = this._orthoRight - this._orthoLeft,
              gT = this._orthoTop - this._orthoBottom,
              nT = void 0 !== this.shadowMinZ ? this.shadowMinZ : WT?.minZ || 0,
              HT = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : WT?.maxZ || 1e4,
              kT = this.KF().eB().pWT;
            MT.e.OrthoOffCenterLHToRef(this._orthoLeft - zT * this.shadowOrthoScale, this._orthoRight + zT * this.shadowOrthoScale, this._orthoBottom - gT * this.shadowOrthoScale, this._orthoTop + gT * this.shadowOrthoScale, kT ? HT : nT, kT ? nT : HT, TT, this.KF().eB().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(TT, UT) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, UT), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, UT), this)
          }
          transferToNodeMaterialEffect(TT, UT) {
            return this.computeTransformedInformation() ? (TT.setFloat3(UT, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (TT.setFloat3(UT, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(TT) {
            const UT = this._scene.eB();
            return !UT.pWT && UT.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(TT) {
            const UT = this._scene.eB();
            return UT.pWT && UT.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(TT, UT) {
            TT["DIRLIGHT" + UT] = !0
          }
        }, (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(BT[Symbol.metadata] ?? null) : void 0;
          UT = [(0, zT.L)()], mT = [(0, zT.L)()], HT = [(0, zT.L)()], kT = [(0, zT.L)()], jT = [(0, zT.L)("orthoLeft")], lT = [(0, zT.L)("orthoRight")], LT = [(0, zT.L)("orthoTop")], pT = [(0, zT.L)("orthoBottom")], (0, WT.h)(TT, null, UT, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: TT => "shadowFrustumSize" in TT,
              get: TT => TT.shadowFrustumSize
            },
            metadata: MT
          }, null, ZT), (0, WT.h)(TT, null, mT, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "shadowOrthoScale" in TT,
              get: TT => TT.shadowOrthoScale
            },
            metadata: MT
          }, null, ZT), (0, WT.h)(null, null, HT, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: TT => "autoUpdateExtends" in TT,
              get: TT => TT.autoUpdateExtends,
              set: (TT, UT) => {
                TT.autoUpdateExtends = UT
              }
            },
            metadata: MT
          }, cT, vT), (0, WT.h)(null, null, kT, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: TT => "autoCalcShadowZBounds" in TT,
              get: TT => TT.autoCalcShadowZBounds,
              set: (TT, UT) => {
                TT.autoCalcShadowZBounds = UT
              }
            },
            metadata: MT
          }, fT, qT), (0, WT.h)(null, null, jT, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: TT => "_orthoLeft" in TT,
              get: TT => TT._orthoLeft,
              set: (TT, UT) => {
                TT._orthoLeft = UT
              }
            },
            metadata: MT
          }, iT, bT), (0, WT.h)(null, null, lT, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: TT => "_orthoRight" in TT,
              get: TT => TT._orthoRight,
              set: (TT, UT) => {
                TT._orthoRight = UT
              }
            },
            metadata: MT
          }, OT, eT), (0, WT.h)(null, null, LT, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: TT => "_orthoTop" in TT,
              get: TT => TT._orthoTop,
              set: (TT, UT) => {
                TT._orthoTop = UT
              }
            },
            metadata: MT
          }, YT, JT), (0, WT.h)(null, null, pT, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: TT => "_orthoBottom" in TT,
              get: TT => TT._orthoBottom,
              set: (TT, UT) => {
                TT._orthoBottom = UT
              }
            },
            metadata: MT
          }, xT, dT), MT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          })
        })(), TT
      })(),
      lT = !1;
    lT || (lT = !0, HT.d.AddNodeConstructor("Light_Type_1", ((TT, UT) => () => new jT(TT, MT.p.Zero(), UT))), (0, kT.h)("BABYLON.DirectionalLight", jT))
  },
  41719: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => GU
    });
    var WT = mT(38824),
      zT = mT(37219),
      MT = mT(37188),
      gT = mT(40257),
      nT = mT(41727),
      HT = mT(37216),
      kT = mT(40399),
      jT = mT(37367),
      lT = mT(38830),
      LT = mT(38793),
      pT = mT(37226);
    class BT {
      constructor() {
        this.direction1 = new MT.p(0, 1, 0), this.direction2 = new MT.p(0, 1, 0)
      }
      startDirectionFunction(TT, UT, mT, WT) {
        const zT = (0, pT.RandomRange)(this.direction1.x, this.direction2.x),
          gT = (0, pT.RandomRange)(this.direction1.y, this.direction2.y),
          nT = (0, pT.RandomRange)(this.direction1.z, this.direction2.z);
        WT ? UT.J9(zT, gT, nT) : MT.p.TransformNormalFromFloatsToRef(zT, gT, nT, TT, UT)
      }
      startPositionFunction(TT, UT, mT, WT) {
        WT ? UT.J9(0, 0, 0) : MT.p.TransformCoordinatesFromFloatsToRef(0, 0, 0, TT, UT)
      }
      clone() {
        const TT = new BT;
        return LT.c.DeepCopy(this, TT), TT
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
        return TT.type = this.getClassName(), TT.direction1 = this.direction1.cWT(), TT.direction2 = this.direction2.cWT(), TT
      }
      parse(TT) {
        MT.p.FromArrayToRef(TT.direction1, 0, this.direction1), MT.p.FromArrayToRef(TT.direction2, 0, this.direction2)
      }
    }
    class ZT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = TT, this.radiusRange = UT, this.directionRandomizer = mT
      }
      startDirectionFunction(TT, UT, mT, WT) {
        const zT = mT.position.subtract(TT.getTranslation()).normalize(),
          gT = (0, pT.RandomRange)(0, this.directionRandomizer),
          nT = (0, pT.RandomRange)(0, this.directionRandomizer),
          HT = (0, pT.RandomRange)(0, this.directionRandomizer);
        zT.x += gT, zT.y += nT, zT.z += HT, zT.normalize(), WT ? UT.Gw(zT) : MT.p.TransformNormalFromFloatsToRef(zT.x, zT.y, zT.z, TT, UT)
      }
      startPositionFunction(TT, UT, mT, WT) {
        const zT = this.radius - (0, pT.RandomRange)(0, this.radius * this.radiusRange),
          gT = (0, pT.RandomRange)(0, 1),
          nT = (0, pT.RandomRange)(0, 2 * Math.PI),
          HT = Math.acos(2 * gT - 1),
          kT = zT * Math.cos(nT) * Math.sin(HT),
          jT = zT * Math.cos(HT),
          lT = zT * Math.sin(nT) * Math.sin(HT);
        WT ? UT.J9(kT, Math.abs(jT), lT) : MT.p.TransformCoordinatesFromFloatsToRef(kT, Math.abs(jT), lT, TT, UT)
      }
      clone() {
        const TT = new ZT(this.radius, this.directionRandomizer);
        return LT.c.DeepCopy(this, TT), TT
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
    class cT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = TT, this.radiusRange = UT, this.directionRandomizer = mT
      }
      startDirectionFunction(TT, UT, mT, WT) {
        const zT = mT.position.subtract(TT.getTranslation()).normalize(),
          gT = (0, pT.RandomRange)(0, this.directionRandomizer),
          nT = (0, pT.RandomRange)(0, this.directionRandomizer),
          HT = (0, pT.RandomRange)(0, this.directionRandomizer);
        zT.x += gT, zT.y += nT, zT.z += HT, zT.normalize(), WT ? UT.Gw(zT) : MT.p.TransformNormalFromFloatsToRef(zT.x, zT.y, zT.z, TT, UT)
      }
      startPositionFunction(TT, UT, mT, WT) {
        const zT = this.radius - (0, pT.RandomRange)(0, this.radius * this.radiusRange),
          gT = (0, pT.RandomRange)(0, 1),
          nT = (0, pT.RandomRange)(0, 2 * Math.PI),
          HT = Math.acos(2 * gT - 1),
          kT = zT * Math.cos(nT) * Math.sin(HT),
          jT = zT * Math.cos(HT),
          lT = zT * Math.sin(nT) * Math.sin(HT);
        WT ? UT.J9(kT, jT, lT) : MT.p.TransformCoordinatesFromFloatsToRef(kT, jT, lT, TT, UT)
      }
      clone() {
        const TT = new cT(this.radius, this.directionRandomizer);
        return LT.c.DeepCopy(this, TT), TT
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
    class vT extends cT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new MT.p(0, 1, 0),
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new MT.p(0, 1, 0);
        super(TT), this.direction1 = UT, this.direction2 = mT
      }
      startDirectionFunction(TT, UT, mT, WT) {
        const zT = (0, pT.RandomRange)(this.direction1.x, this.direction2.x),
          gT = (0, pT.RandomRange)(this.direction1.y, this.direction2.y),
          nT = (0, pT.RandomRange)(this.direction1.z, this.direction2.z);
        WT ? UT.J9(zT, gT, nT) : MT.p.TransformNormalFromFloatsToRef(zT, gT, nT, TT, UT)
      }
      clone() {
        const TT = new vT(this.radius, this.direction1, this.direction2);
        return LT.c.DeepCopy(this, TT), TT
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
        return TT.direction1 = this.direction1.cWT(), TT.direction2 = this.direction2.cWT(), TT
      }
      parse(TT) {
        super.parse(TT), MT.p.FromArrayToRef(TT.direction1, 0, this.direction1), MT.p.FromArrayToRef(TT.direction2, 0, this.direction2)
      }
    }
    var fT = mT(38791);
    class qT {
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
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = mT, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = UT, this.radius = TT
      }
      startDirectionFunction(TT, UT, mT, WT) {
        const zT = mT.position.subtract(TT.getTranslation()).normalize(),
          gT = (0, pT.RandomRange)(0, this.directionRandomizer),
          nT = (0, pT.RandomRange)(0, this.directionRandomizer),
          HT = (0, pT.RandomRange)(0, this.directionRandomizer);
        zT.x += gT, zT.y += nT, zT.z += HT, zT.normalize(), WT ? UT.Gw(zT) : MT.p.TransformNormalFromFloatsToRef(zT.x, zT.y, zT.z, TT, UT)
      }
      startPositionFunction(TT, UT, mT, WT) {
        const zT = (0, pT.RandomRange)(0, 2 * Math.PI);
        let gT;
        this.emitFromSpawnPointOnly ? gT = 1e-4 : (gT = (0, pT.RandomRange)(0, this.heightRange), gT = 1 - gT * gT);
        let nT = this._radius - (0, pT.RandomRange)(0, this._radius * this.radiusRange);
        nT *= gT;
        const HT = nT * Math.sin(zT),
          kT = nT * Math.cos(zT),
          jT = gT * this._height;
        if (WT) return UT.x = HT, UT.y = jT, void(UT.z = kT);
        MT.p.TransformCoordinatesFromFloatsToRef(HT, jT, kT, TT, UT)
      }
      clone() {
        const TT = new qT(this._radius, this._angle, this.directionRandomizer);
        return LT.c.DeepCopy(this, TT), TT
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
    class iT extends qT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new MT.p(0, 1, 0),
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new MT.p(0, 1, 0);
        super(TT, UT), this.direction1 = mT, this.direction2 = WT
      }
      startDirectionFunction(TT, UT, mT, WT) {
        const zT = (0, pT.RandomRange)(this.direction1.x, this.direction2.x),
          gT = (0, pT.RandomRange)(this.direction1.y, this.direction2.y),
          nT = (0, pT.RandomRange)(this.direction1.z, this.direction2.z);
        WT ? UT.J9(zT, gT, nT) : MT.p.TransformNormalFromFloatsToRef(zT, gT, nT, TT, UT)
      }
      clone() {
        const TT = new iT(this.radius, this.angle, this.direction1, this.direction2);
        return LT.c.DeepCopy(this, TT), TT
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
        return TT.direction1 = this.direction1.cWT(), TT.direction2 = this.direction2.cWT(), TT
      }
      parse(TT) {
        super.parse(TT), MT.p.FromArrayToRef(TT.direction1, 0, this.direction1), MT.p.FromArrayToRef(TT.direction2, 0, this.direction2)
      }
    }
    class bT {
      get mesh() {
        return this._mesh
      }
      set mesh(TT) {
        this._mesh !== TT && (this._mesh = TT, TT ? (this._indices = TT.vWT(), this._positions = TT.getVerticesData(gT.i.PositionKind), this._normals = TT.getVerticesData(gT.i.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = MT.p.Zero(), this._mesh = null, this.direction1 = new MT.p(0, 1, 0), this.direction2 = new MT.p(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = TT
      }
      startDirectionFunction(TT, UT, mT, WT) {
        if (this.useMeshNormalsForDirection && this._normals) return void MT.p.TransformNormalToRef(this._storedNormal, TT, UT);
        const zT = (0, pT.RandomRange)(this.direction1.x, this.direction2.x),
          gT = (0, pT.RandomRange)(this.direction1.y, this.direction2.y),
          nT = (0, pT.RandomRange)(this.direction1.z, this.direction2.z);
        WT ? UT.J9(zT, gT, nT) : MT.p.TransformNormalFromFloatsToRef(zT, gT, nT, TT, UT)
      }
      startPositionFunction(TT, UT, mT, WT) {
        if (!this._indices || !this._positions) return;
        const zT = 3 * (Math.random() * (this._indices.length / 3) | 0),
          gT = Math.random(),
          nT = Math.random() * (1 - gT),
          HT = 1 - gT - nT,
          kT = this._indices[zT],
          jT = this._indices[zT + 1],
          lT = this._indices[zT + 2],
          LT = MT.l.JB[0],
          pT = MT.l.JB[1],
          BT = MT.l.JB[2],
          ZT = MT.l.JB[3];
        MT.p.FromArrayToRef(this._positions, 3 * kT, LT), MT.p.FromArrayToRef(this._positions, 3 * jT, pT), MT.p.FromArrayToRef(this._positions, 3 * lT, BT), ZT.x = gT * LT.x + nT * pT.x + HT * BT.x, ZT.y = gT * LT.y + nT * pT.y + HT * BT.y, ZT.z = gT * LT.z + nT * pT.z + HT * BT.z, WT ? UT.J9(ZT.x, ZT.y, ZT.z) : MT.p.TransformCoordinatesFromFloatsToRef(ZT.x, ZT.y, ZT.z, TT, UT), this.useMeshNormalsForDirection && this._normals && (MT.p.FromArrayToRef(this._normals, 3 * kT, LT), MT.p.FromArrayToRef(this._normals, 3 * jT, pT), MT.p.FromArrayToRef(this._normals, 3 * lT, BT), this._storedNormal.x = gT * LT.x + nT * pT.x + HT * BT.x, this._storedNormal.y = gT * LT.y + nT * pT.y + HT * BT.y, this._storedNormal.z = gT * LT.z + nT * pT.z + HT * BT.z)
      }
      clone() {
        const TT = new bT(this.mesh);
        return LT.c.DeepCopy(this, TT), TT
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
        return TT.type = this.getClassName(), TT.direction1 = this.direction1.cWT(), TT.direction2 = this.direction2.cWT(), TT.meshId = this.mesh?.id, TT.useMeshNormalsForDirection = this.useMeshNormalsForDirection, TT
      }
      parse(TT, UT) {
        MT.p.FromArrayToRef(TT.direction1, 0, this.direction1), MT.p.FromArrayToRef(TT.direction2, 0, this.direction2), TT.meshId && UT && (this.mesh = UT.getLastMeshById(TT.meshId)), this.useMeshNormalsForDirection = TT.useMeshNormalsForDirection
      }
    }
    class OT {
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
        const UT = this._attractors.indexOf(TT); - 1 !== UT && this._attractors.splice(UT, 1)
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
        this._useLogarithmicDepth = TT && this.KF().eB().getCaps().fragmentDepthSupported
      }
      KF() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(TT) {
        switch (TT) {
          case OT.BLENDMODE_MULTIPLYADD:
            return;
          case OT.BLENDMODE_ADD:
            TT = 1;
            break;
          case OT.BLENDMODE_ONEONE:
            TT = 6;
            break;
          case OT.BLENDMODE_STANDARD:
            TT = 2;
            break;
          case OT.BLENDMODE_MULTIPLY:
            TT = 4;
            break;
          case OT.BLENDMODE_SUBTRACT:
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
      addEmitRateGradient(TT, UT, mT) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, TT, UT, mT), this
      }
      removeEmitRateGradient(TT) {
        return this._removeFactorGradient(this._emitRateGradients, TT), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : MT.p.Zero()
      }
      set direction1(TT) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = TT)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : MT.p.Zero()
      }
      set direction2(TT) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = TT)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : MT.p.Zero()
      }
      set minEmitBox(TT) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = TT)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : MT.p.Zero()
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
      _addFactorGradient(TT, UT, mT, zT) {
        const MT = new WT.h(UT, mT, zT);
        TT.push(MT), TT.sort(((TT, UT) => TT.gradient < UT.gradient ? -1 : TT.gradient > UT.gradient ? 1 : 0))
      }
      _removeFactorGradient(TT, UT) {
        if (!TT) return;
        let mT = 0;
        for (const WT of TT) {
          if (WT.gradient === UT) {
            TT.splice(mT, 1);
            break
          }
          mT++
        }
      }
      _removeGradientAndTexture(TT, UT, mT) {
        if (!UT) return this;
        let WT = 0;
        for (const zT of UT) {
          if (zT.gradient === TT) {
            UT.splice(WT, 1);
            break
          }
          WT++
        }
        return mT && mT.dispose(), this
      }
      constructor(TT) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = MT.p.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new MT.p(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = OT.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new MT.o(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new MT.p(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = MT.p.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new jT.g(1, 1, 1, 1), this.color2 = new jT.g(1, 1, 1, 1), this.colorDead = new jT.g(0, 0, 0, 1), this.textureMask = new jT.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new kT.b, this.id = TT, this.name = TT
      }
      createPointEmitter(TT, UT) {
        const mT = function(TT, UT) {
          const mT = new BT;
          return mT.direction1 = TT, mT.direction2 = UT, mT
        }(TT, UT);
        return this.particleEmitterType = mT, mT
      }
      createHemisphericEmitter() {
        const TT = function() {
          return new ZT(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = TT, TT
      }
      createSphereEmitter() {
        const TT = function() {
          return new cT(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = TT, TT
      }
      createDirectedSphereEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new MT.p(0, 1, 0),
            mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new MT.p(0, 1, 0);
          return new vT(TT, UT, mT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new MT.p(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new MT.p(0, 1, 0));
        return this.particleEmitterType = TT, TT
      }
      createCylinderEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new fT.f(TT, UT, mT, WT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = TT, TT
      }
      createDirectedCylinderEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new MT.p(0, 1, 0),
            zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new MT.p(0, 1, 0);
          return new fT.d(TT, UT, mT, WT, zT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new MT.p(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new MT.p(0, 1, 0));
        return this.particleEmitterType = TT, TT
      }
      createConeEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new qT(TT, UT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = TT, TT
      }
      createDirectedConeEmitter() {
        const TT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new MT.p(0, 1, 0),
            WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new MT.p(0, 1, 0);
          return new iT(TT, UT, mT, WT)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new MT.p(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new MT.p(0, 1, 0));
        return this.particleEmitterType = TT, TT
      }
      createBoxEmitter(TT, UT, mT, WT) {
        const zT = new lT.e;
        return this.particleEmitterType = zT, this.direction1 = TT, this.direction2 = UT, this.minEmitBox = mT, this.maxEmitBox = WT, zT
      }
      createMeshEmitter() {
        const TT = function() {
          return new bT(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = TT, TT
      }
    }
    OT.BLENDMODE_ONEONE = 0, OT.BLENDMODE_STANDARD = 1, OT.BLENDMODE_ADD = 2, OT.BLENDMODE_MULTIPLY = 3, OT.BLENDMODE_MULTIPLYADD = 4, OT.BLENDMODE_SUBTRACT = -1;
    class eT {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new jT.g(0, 0, 0, 0), this.currentColor2 = new jT.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = MT.p.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class YT {
      constructor(TT) {
        this.particleSystem = TT, this.position = MT.p.Zero(), this.direction = MT.p.Zero(), this.color = new jT.g(0, 0, 0, 0), this.colorStep = new jT.g(0, 0, 0, 0), this.initialColor = new jT.g(0, 0, 0, 0), this.colorDead = new jT.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new MT.o(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new eT, this.id = YT._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let TT = this.age,
          UT = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === UT ? (UT = 1, TT = this._properties.randomCellOffset) : TT += this._properties.randomCellOffset);
        const mT = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let WT;
        WT = this._properties.initialSpriteCellLoop ? (0, pT.Clamp)(TT * UT % this.lifeTime / this.lifeTime) : (0, pT.Clamp)(TT * UT / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + WT * mT | 0
      }
      _inheritParticleInfoToSubEmitter(TT) {
        if (TT.particleSystem.emitter.position) {
          const UT = TT.particleSystem.emitter;
          if (UT.position.Gw(this.position), TT.inheritDirection) {
            const TT = MT.l.JB[0];
            this.direction.normalizeToRef(TT), UT.setDirection(TT, 0, Math.PI / 2)
          }
        } else {
          TT.particleSystem.emitter.Gw(this.position)
        }
        this.direction.scaleToRef(TT.inheritedVelocityAmount / 2, MT.l.JB[0]), TT.particleSystem._inheritedVelocityOffset.Gw(MT.l.JB[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const TT of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(TT)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = YT._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(TT) {
        TT.position.Gw(this.position), this._properties.initialDirection ? TT._properties.initialDirection ? TT._properties.initialDirection.Gw(this._properties.initialDirection) : TT._properties.initialDirection = this._properties.initialDirection.clone() : TT._properties.initialDirection = null, TT.direction.Gw(this.direction), this._properties.localPosition && (TT._properties.localPosition ? TT._properties.localPosition.Gw(this._properties.localPosition) : TT._properties.localPosition = this._properties.localPosition.clone()), TT.color.Gw(this.color), TT.colorStep.Gw(this.colorStep), TT.initialColor.Gw(this.initialColor), TT.colorDead.Gw(this.colorDead), TT.lifeTime = this.lifeTime, TT.age = this.age, TT._properties.randomCellOffset = this._properties.randomCellOffset, TT.size = this.size, TT.scale.Gw(this.scale), TT.angle = this.angle, TT.angularSpeed = this.angularSpeed, TT.particleSystem = this.particleSystem, TT.cellIndex = this.cellIndex, TT.id = this.id, TT._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (TT._properties.currentColorGradient = this._properties.currentColorGradient, TT._properties.currentColor1.Gw(this._properties.currentColor1), TT._properties.currentColor2.Gw(this._properties.currentColor2)), this._properties.currentSizeGradient && (TT._properties.currentSizeGradient = this._properties.currentSizeGradient, TT._properties.currentSize1 = this._properties.currentSize1, TT._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (TT._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, TT._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, TT._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (TT._properties.currentVelocityGradient = this._properties.currentVelocityGradient, TT._properties.currentVelocity1 = this._properties.currentVelocity1, TT._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (TT._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, TT._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, TT._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (TT._properties.currentDragGradient = this._properties.currentDragGradient, TT._properties.currentDrag1 = this._properties.currentDrag1, TT._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (TT._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, TT._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, TT._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (TT.remapData && this.remapData ? TT.remapData.Gw(this.remapData) : TT.remapData = new MT.t(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (TT._properties.randomNoiseCoordinates1 && TT._properties.randomNoiseCoordinates2 ? (TT._properties.randomNoiseCoordinates1.Gw(this._properties.randomNoiseCoordinates1), TT._properties.randomNoiseCoordinates2.Gw(this._properties.randomNoiseCoordinates2)) : (TT._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), TT._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), TT.metadata = this.metadata
      }
    }
    YT._Count = 0;
    var JT = mT(41242);
    class xT {
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
      constructor(TT, UT, mT, WT) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = UT, this.hA = TT, this._scene = mT, this._host = WT, this._activeTargets = [], UT._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            NW: this._getCorrectLoopMode()
          }, this._animation.dataType === JT.c.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = MT.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const TT = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, TT)
        }
        if (this.hA instanceof Array) {
          let TT = 0;
          for (const UT of this.hA) this._preparePath(UT, TT), this._getOriginalValues(TT), TT++;
          this._targetIsArray = !0
        } else this._preparePath(this.hA), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const zT = UT.getEvents();
        if (zT && zT.length > 0)
          for (const MT of zT) this._events.push(MT._clone());
        this._enableBlending = TT && TT.animationPropertiesOverride ? TT.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const mT = this._animation.targetPropertyPath;
        if (mT.length > 1) {
          let WT = TT;
          for (let TT = 0; TT < mT.length - 1; TT++) {
            const UT = mT[TT];
            if (WT = WT[UT], void 0 === WT) throw new Error(`Invalid property (${UT}) in property path (${mT.join(".")})`)
          }
          this._targetPath = mT[mT.length - 1], this._activeTargets[UT] = WT
        } else this._targetPath = mT[0], this._activeTargets[UT] = TT;
        if (void 0 === this._activeTargets[UT][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${mT.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.hA instanceof Array) {
            let TT = 0;
            for (const UT of this.hA) void 0 !== this._originalValue[TT] && this._setValue(UT, this._activeTargets[TT], this._originalValue[TT], -1, TT), TT++
          } else void 0 !== this._originalValue[0] && this._setValue(this.hA, this._directTarget, this._originalValue[0], -1, 0);
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
      setValue(TT, UT) {
        if (this._targetIsArray)
          for (let mT = 0; mT < this.hA.length; mT++) {
            const WT = this.hA[mT];
            this._setValue(WT, this._activeTargets[mT], TT, UT, mT)
          } else this._setValue(this.hA, this._directTarget, TT, UT, 0)
      }
      _getOriginalValues() {
        let TT, UT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const mT = this._activeTargets[UT];
        if (JT.c.InheritOriginalValueFromActiveAnimations) {
          const TT = this._scene._activeAnimatables;
          for (let WT = 0; WT < TT.length; WT++) {
            const zT = TT[WT]._runtimeAnimations;
            for (let TT = 0; TT < zT.length; TT++) {
              const WT = zT[TT];
              if (WT !== this && WT._targetPath === this._targetPath)
                for (let TT = 0; TT < WT._activeTargets.length; TT++)
                  if (WT._activeTargets[TT] === mT && void 0 !== WT._originalValue[TT]) return void(WT._originalValue[TT] && WT._originalValue[TT].clone ? this._originalValue[UT] = WT._originalValue[TT].clone() : this._originalValue[UT] = WT._originalValue[TT])
            }
          }
        }
        TT = mT.getLocalMatrix && "_matrix" === this._targetPath ? mT.getLocalMatrix() : mT[this._targetPath], TT && TT.clone ? this._originalValue[UT] = TT.clone() : this._originalValue[UT] = TT
      }
      _registerTargetForLateAnimationBinding(TT, UT) {
        const mT = TT.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(mT), mT._lateAnimationHolders || (mT._lateAnimationHolders = {}), mT._lateAnimationHolders[TT.targetPath] || (mT._lateAnimationHolders[TT.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: UT
        }), TT.isAdditive ? (mT._lateAnimationHolders[TT.targetPath].additiveAnimations.push(TT), mT._lateAnimationHolders[TT.targetPath].totalAdditiveWeight += TT.weight) : (mT._lateAnimationHolders[TT.targetPath].animations.push(TT), mT._lateAnimationHolders[TT.targetPath].totalWeight += TT.weight)
      }
      _setValue(TT, UT, mT, WT, zT) {
        const gT = this._scene._animationWrites,
          nT = this._scene._animationWriteCount++;
        let HT = gT[nT];
        if (HT || (HT = gT[nT] = {
            runtimeAnimation: this,
            target: TT,
            weight: WT,
            additive: !1,
            blendingFactor: 1,
            Uc: !1
          }), HT.runtimeAnimation = this, HT.target = TT, HT.weight = WT, HT.additive = this.isAdditive, HT.Uc = !1, this._currentActiveTarget = UT, this._weight = WT, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const TT = UT[this._targetPath];
            TT.clone ? this._originalBlendValue = TT.clone() : this._originalBlendValue = TT
          }
          this._originalBlendValue.m ? JT.c.AllowMatrixDecomposeForInterpolation ? this._currentValue ? MT.e.DecomposeLerpToRef(this._originalBlendValue, mT, this._blendingFactor, this._currentValue) : this._currentValue = MT.e.DecomposeLerp(this._originalBlendValue, mT, this._blendingFactor) : this._currentValue ? MT.e.LerpToRef(this._originalBlendValue, mT, this._blendingFactor, this._currentValue) : this._currentValue = MT.e.Lerp(this._originalBlendValue, mT, this._blendingFactor) : this._currentValue = JT.c._UniversalLerp(this._originalBlendValue, mT, this._blendingFactor);
          const WT = TT && TT.animationPropertiesOverride ? TT.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          HT.blendingFactor = this._blendingFactor, this._blendingFactor += WT
        } else HT.blendingFactor = 1, this._currentValue ? this._currentValue.Gw ? this._currentValue.Gw(mT) : this._currentValue = mT : this._currentValue = mT?.clone ? mT.clone() : mT; - 1 !== WT ? this._registerTargetForLateAnimationBinding(this, this._originalValue[zT]) : this._animationState.NW === JT.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[zT], UT[this._targetPath]) : UT[this._targetPath] = this._originalValue[zT] + this._currentValue : UT[this._targetPath] = this._currentValue, TT.NUT && TT.NUT(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.hA && this.hA.animationPropertiesOverride) {
          return "MorphTarget" === this.hA.getClassName?.() && null == this.hA._animationPropertiesOverride ? this._animation.NW : this.hA.animationPropertiesOverride.NW
        }
        return this._animation.NW
      }
      goToFrame(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const mT = this._animation.getKeys();
        TT < mT[0].frame ? TT = mT[0].frame : TT > mT[mT.length - 1].frame && (TT = mT[mT.length - 1].frame);
        const WT = this._events;
        if (WT.length)
          for (let MT = 0; MT < WT.length; MT++) WT[MT].onlyOnce || (WT[MT].isDone = WT[MT].frame < TT);
        this._currentFrame = TT;
        const zT = this._animation._interpolate(TT, this._animationState);
        this.setValue(zT, UT)
      }
      _prepareForSpeedRatioChange(TT) {
        const UT = this._previousElapsedTime * (this._animation.framePerSecond * TT) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - UT
      }
      animate(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const gT = this._animation,
          nT = gT.targetPropertyPath;
        if (!nT || nT.length < 1) return this._stopped = !0, !1;
        let HT, kT = !0;
        const jT = this._events;
        let lT;
        if (this._coreRuntimeAnimation) lT = mT - UT, HT = this._coreRuntimeAnimation.currentFrame, this._currentFrame = HT, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let MT;
          (UT < this._minFrame || UT > this._maxFrame) && (UT = this._minFrame), (mT < this._minFrame || mT > this._maxFrame) && (mT = this._maxFrame), lT = mT - UT;
          let nT = TT * (gT.framePerSecond * zT) / 1e3 + this._absoluteFrameOffset,
            LT = 0,
            pT = !1;
          const BT = WT && this._animationState.NW === JT.c.ANIMATIONLOOPMODE_YOYO;
          if (BT) {
            const TT = (nT - UT) / lT,
              mT = Math.sin(TT * Math.PI);
            nT = Math.abs(mT) * lT + UT;
            const WT = mT >= 0 ? 1 : -1;
            this._yoyoDirection !== WT && (pT = !0), this._yoyoDirection = WT
          }
          if (this._previousElapsedTime = TT, this._previousAbsoluteFrame = nT, !WT && mT >= UT && (nT >= lT && zT > 0 || nT <= 0 && zT < 0)) kT = !1, LT = gT.evaluate(mT);
          else if (!WT && UT >= mT && (nT <= lT && zT < 0 || nT >= 0 && zT > 0)) kT = !1, LT = gT.evaluate(UT);
          else if (this._animationState.NW !== JT.c.ANIMATIONLOOPMODE_CYCLE) {
            const TT = mT.toString() + UT.toString();
            if (!this._offsetsCache[TT]) {
              this._animationState.repeatCount = 0, this._animationState.NW = JT.c.ANIMATIONLOOPMODE_CYCLE;
              const WT = gT._interpolate(UT, this._animationState),
                zT = gT._interpolate(mT, this._animationState);
              switch (this._animationState.NW = this._getCorrectLoopMode(), gT.dataType) {
                case JT.c.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[TT] = zT - WT;
                  break;
                case JT.c.ANIMATIONTYPE_QUATERNION:
                case JT.c.ANIMATIONTYPE_VECTOR3:
                case JT.c.ANIMATIONTYPE_VECTOR2:
                case JT.c.ANIMATIONTYPE_SIZE:
                case JT.c.ANIMATIONTYPE_COLOR3:
                case JT.c.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[TT] = zT.subtract(WT)
              }
              this._highLimitsCache[TT] = zT
            }
            LT = this._highLimitsCache[TT], MT = this._offsetsCache[TT]
          }
          if (void 0 === MT) switch (gT.dataType) {
            case JT.c.ANIMATIONTYPE_FLOAT:
              MT = 0;
              break;
            case JT.c.ANIMATIONTYPE_QUATERNION:
              MT = JT.p;
              break;
            case JT.c.ANIMATIONTYPE_VECTOR3:
              MT = JT.v;
              break;
            case JT.c.ANIMATIONTYPE_VECTOR2:
              MT = JT.s;
              break;
            case JT.c.ANIMATIONTYPE_SIZE:
              MT = JT.r;
              break;
            case JT.c.ANIMATIONTYPE_COLOR3:
              MT = JT.k;
              break;
            case JT.c.ANIMATIONTYPE_COLOR4:
              MT = JT.n
          }
          const ZT = this._host ? this._host.syncRoot : null;
          let cT, vT = this._playbackFrames,
            fT = !1;
          if (ZT) {
            const TT = ZT.toFrame - ZT.fromFrame,
              mT = ZT.masterFrame,
              WT = (mT - ZT.fromFrame) / TT;
            HT = UT + lT * WT;
            const zT = ZT.getAnimations()[0];
            if (zT && 0 !== TT) {
              const TT = lT * WT,
                UT = zT._playbackTo - zT._playbackFrom;
              if (0 !== UT && zT._playbackFrom <= ZT.fromFrame && zT._playbackTo >= ZT.toFrame) {
                vT = lT * Math.round((zT._playbackFrames - (zT._currentFrame - zT._playbackFrom)) / UT) + TT
              } else fT = (mT - this._playbackSyncMasterFrame) * (zT._playbackFrames - this._playbackSyncMasterPlayed) < 0, vT = TT;
              fT = fT || zT._playbackJumped, this._playbackSyncMasterPlayed = zT._playbackFrames, this._playbackSyncMasterFrame = mT
            }
          } else HT = nT > 0 && UT > mT || nT < 0 && UT < mT ? kT && 0 !== lT ? mT + nT % lT : UT : kT && 0 !== lT ? UT + nT % lT : mT;
          if (!BT && (zT > 0 && this.currentFrame > HT || zT < 0 && this.currentFrame < HT) || BT && pT) {
            this._onLoop();
            for (let TT = 0; TT < jT.length; TT++) jT[TT].onlyOnce || (jT[TT].isDone = !1);
            this._animationState.key = zT > 0 ? 0 : gT.getKeys().length - 1
          }
          if (this._currentFrame = HT, this._animationState.repeatCount = 0 === lT ? 0 : nT / lT | 0, this._animationState.highLimitValue = LT, this._animationState.offsetValue = MT, this._playbackFrom = UT, this._playbackTo = mT, this._playbackJumped = fT, this._playbackSyncRoot = ZT, ZT) cT = vT;
          else if (kT) cT = BT ? HT === UT && nT === mT ? lT : HT - UT : nT;
          else {
            const TT = 0 !== lT ? Math.floor(this._playbackFrames / lT) : 0;
            cT = (HT === mT ? TT + 1 : TT) * lT
          }
          this._playbackFrames = cT, this._playbackProgress = this._animationState.NW === JT.c.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? lT : cT
        }
        const LT = gT._interpolate(HT, this._animationState);
        if (this.setValue(LT, MT), jT.length)
          for (let pT = 0; pT < jT.length; pT++)
            if (lT >= 0 && HT >= jT[pT].frame && jT[pT].frame >= UT || lT < 0 && HT <= jT[pT].frame && jT[pT].frame <= UT) {
              const TT = jT[pT];
              TT.isDone || (TT.onlyOnce && (jT.splice(pT, 1), pT--), TT.isDone = !0, TT.action(HT))
            } return kT || (this._stopped = !0), kT
      }
    }
    var dT = mT(39986);
    class wT {
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
        for (let UT = 0; UT < this._runtimeAnimations.length; UT++) {
          this._runtimeAnimations[UT]._prepareForSpeedRatioChange(TT)
        }
        this._speedRatio = TT, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          gT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          nT = arguments.length > 6 ? arguments[6] : void 0,
          HT = arguments.length > 7 ? arguments[7] : void 0,
          kT = arguments.length > 8 ? arguments[8] : void 0,
          jT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          lT = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = UT, this.fromFrame = mT, this.toFrame = WT, this.loopAnimation = MT, this.onAnimationEnd = nT, this.onAnimationLoop = kT, this.isAdditive = jT, this.playOrder = lT, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.bY = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new zT.d, this.onAnimationLoopObservable = new zT.d, this._scene = TT, HT && this.appendAnimations(UT, HT), this._speedRatio = gT, TT._activeAnimatables.push(this)
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
      appendAnimations(TT, UT) {
        for (let mT = 0; mT < UT.length; mT++) {
          const WT = UT[mT],
            zT = new xT(TT, WT, this._scene, this);
          zT._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(zT)
        }
      }
      getAnimationByTargetProperty(TT) {
        const UT = this._runtimeAnimations;
        for (let mT = 0; mT < UT.length; mT++)
          if (UT[mT].animation.targetProperty === TT) return UT[mT].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(TT) {
        const UT = this._runtimeAnimations;
        for (let mT = 0; mT < UT.length; mT++)
          if (UT[mT].animation.targetProperty === TT) return UT[mT];
        return null
      }
      reset() {
        const TT = this._runtimeAnimations;
        for (let UT = 0; UT < TT.length; UT++) TT[UT].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(TT) {
        const UT = this._runtimeAnimations;
        for (let mT = 0; mT < UT.length; mT++) UT[mT].animation.enableBlending = !0, UT[mT].animation.blendingSpeed = TT
      }
      disableBlending() {
        const TT = this._runtimeAnimations;
        for (let UT = 0; UT < TT.length; UT++) TT[UT].animation.enableBlending = !1
      }
      goToFrame(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = this._runtimeAnimations;
        if (mT[0]) {
          const UT = mT[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? mT[0].currentFrame;
          const WT = 0 === this.speedRatio ? 0 : (TT - this._frameToSyncFromJump) / UT * 1e3 / this.speedRatio;
          this._manualJumpDelay = -WT
        }
        for (let WT = 0; WT < mT.length; WT++) mT[WT].goToFrame(TT, UT ? this._weight : -1);
        this._goToFrame = TT
      }
      get paused() {
        return this.bY
      }
      pause() {
        this.bY || (this.bY = !0)
      }
      restart() {
        this.bY = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (TT || UT) {
          const zT = this._scene._activeAnimatables.indexOf(this);
          if (zT > -1) {
            const MT = this._runtimeAnimations;
            for (let mT = MT.length - 1; mT >= 0; mT--) {
              const WT = MT[mT];
              TT && WT.animation.name != TT || (UT && !UT(WT.target) || (WT.dispose(), MT.splice(mT, 1)))
            }
            0 == MT.length && (mT || this._scene._activeAnimatables.splice(zT, 1), WT || this._raiseOnAnimationEnd())
          }
        } else {
          const TT = this._scene._activeAnimatables.indexOf(this);
          if (TT > -1) {
            mT || this._scene._activeAnimatables.splice(TT, 1);
            const UT = this._runtimeAnimations;
            for (let TT = 0; TT < UT.length; TT++) UT[TT].dispose();
            this._runtimeAnimations.length = 0, WT || this._raiseOnAnimationEnd()
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
        if (this.bY) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = TT), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = TT, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += TT - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !wT.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let UT = !1;
        const mT = this._runtimeAnimations;
        let WT;
        for (WT = 0; WT < mT.length; WT++) {
          const zT = mT[WT].animate(TT - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          UT = UT || zT
        }
        if (this.animationStarted = UT, !UT) {
          if (this.disposeOnEnd)
            for (WT = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(WT, 1), WT = 0; WT < mT.length; WT++) mT[WT].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return UT
      }
    }

    function tT(TT) {
      if (0 === TT.totalWeight && 0 === TT.totalAdditiveWeight) return TT.originalValue;
      let UT = 1;
      const mT = MT.l.JB[0],
        WT = MT.l.JB[1],
        zT = MT.l.Quaternion[0];
      let gT = 0;
      const nT = TT.animations[0],
        HT = TT.originalValue;
      let kT, jT = !1;
      if (TT.totalWeight < 1) kT = 1 - TT.totalWeight, HT.decompose(WT, zT, mT);
      else {
        if (gT = 1, UT = TT.totalWeight, kT = nT.weight / UT, 1 == kT) {
          if (!TT.totalAdditiveWeight) return nT.currentValue;
          jT = !0
        }
        nT.currentValue.decompose(WT, zT, mT)
      }
      if (!jT) {
        WT.scaleInPlace(kT), mT.scaleInPlace(kT), zT.scaleInPlace(kT);
        for (let nT = gT; nT < TT.animations.length; nT++) {
          const gT = TT.animations[nT];
          if (0 === gT.weight) continue;
          kT = gT.weight / UT;
          const HT = MT.l.JB[2],
            jT = MT.l.JB[3],
            lT = MT.l.Quaternion[1];
          gT.currentValue.decompose(jT, lT, HT), jT.scaleAndAddToRef(kT, WT), lT.scaleAndAddToRef(MT.f.Dot(zT, lT) > 0 ? kT : -kT, zT), HT.scaleAndAddToRef(kT, mT)
        }
        zT.normalize()
      }
      for (let LT = 0; LT < TT.additiveAnimations.length; LT++) {
        const UT = TT.additiveAnimations[LT];
        if (0 === UT.weight) continue;
        const gT = MT.l.JB[2],
          nT = MT.l.JB[3],
          HT = MT.l.Quaternion[1];
        UT.currentValue.decompose(nT, HT, gT), nT.multiplyToRef(WT, nT), MT.p.LerpToRef(WT, nT, UT.weight, WT), zT.multiplyToRef(HT, HT), MT.f.SlerpToRef(zT, HT, UT.weight, zT), gT.scaleAndAddToRef(UT.weight, mT)
      }
      const lT = nT ? nT._animationState.workValue : MT.l.Matrix[0].clone();
      return MT.e.ComposeToRef(WT, zT, mT, lT), lT
    }

    function aT(TT, UT) {
      if (0 === TT.totalWeight && 0 === TT.totalAdditiveWeight) return UT;
      const mT = TT.animations[0],
        WT = TT.originalValue;
      let zT = UT;
      if (0 === TT.totalWeight && TT.totalAdditiveWeight > 0) zT.Gw(WT);
      else if (1 === TT.animations.length) {
        if (MT.f.SlerpToRef(WT, mT.currentValue, Math.min(1, TT.totalWeight), zT), 0 === TT.totalAdditiveWeight) return zT
      } else if (TT.animations.length > 1) {
        let mT, gT, nT = 1;
        if (TT.totalWeight < 1) {
          const UT = 1 - TT.totalWeight;
          mT = [], gT = [], mT.push(WT), gT.push(UT)
        } else {
          if (2 === TT.animations.length && (MT.f.SlerpToRef(TT.animations[0].currentValue, TT.animations[1].currentValue, TT.animations[1].weight / TT.totalWeight, UT), 0 === TT.totalAdditiveWeight)) return UT;
          mT = [], gT = [], nT = TT.totalWeight
        }
        for (let UT = 0; UT < TT.animations.length; UT++) {
          const WT = TT.animations[UT];
          mT.push(WT.currentValue), gT.push(WT.weight / nT)
        }
        let HT = 0;
        for (let TT = 0; TT < mT.length;) TT ? (HT += gT[TT], MT.f.SlerpToRef(zT, mT[TT], gT[TT] / HT, zT), TT++) : (MT.f.SlerpToRef(mT[TT], mT[TT + 1], gT[TT + 1] / (gT[TT] + gT[TT + 1]), UT), zT = UT, HT = gT[TT] + gT[TT + 1], TT += 2)
      }
      for (let gT = 0; gT < TT.additiveAnimations.length; gT++) {
        const UT = TT.additiveAnimations[gT];
        0 !== UT.weight && (zT.multiplyToRef(UT.currentValue, MT.l.Quaternion[0]), MT.f.SlerpToRef(zT, MT.l.Quaternion[0], UT.weight, zT))
      }
      return zT
    }

    function yT(TT, UT) {
      UT && (UT.prototype.copyAnimationRange = function(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new JT.c(this.name, "_matrix", TT.animations[0].framePerSecond, JT.c.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const MT = TT.animations[0].getRange(UT);
        if (!MT) return !1;
        const gT = MT.from,
          nT = MT.to,
          HT = TT.animations[0].getKeys(),
          kT = TT.length,
          jT = TT.getParent(),
          lT = this.getParent(),
          LT = WT && jT && kT && this.length && kT !== this.length,
          pT = LT && lT && jT ? lT.length / jT.length : 1,
          BT = WT && !lT && zT && (1 !== zT.x || 1 !== zT.y || 1 !== zT.z),
          ZT = this.animations[0].getKeys();
        let cT, vT, fT;
        for (let qT = 0, iT = HT.length; qT < iT; qT++) cT = HT[qT], cT.frame >= gT && cT.frame <= nT && (WT ? (fT = cT.value.clone(), LT ? (vT = fT.getTranslation(), fT.setTranslation(vT.scaleInPlace(pT))) : BT && zT ? (vT = fT.getTranslation(), fT.setTranslation(vT.multiplyInPlace(zT))) : fT = cT.value) : fT = cT.value, ZT.push({
          frame: cT.frame + mT,
          value: fT
        }));
        return this.animations[0].createRange(UT, gT + mT, nT + mT), !0
      }), TT && (TT.prototype._animate = function(TT) {
        const UT = this._animationWrites,
          mT = this._animationWriteCount;
        let WT = 0;
        for (let MT = this._animationStepWriteCount; MT < mT; MT++) {
          const TT = UT[MT];
          TT.Uc && -1 === TT.weight || (TT.Uc = !0, UT[MT] = UT[WT], UT[WT] = TT, WT++)
        }
        for (let MT = WT; MT < mT; MT++) {
          const TT = UT[MT];
          TT.runtimeAnimation = null, TT.target = null
        }
        if (this._animationWriteCount = WT, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const zT = dT.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = zT
        }
        this.deltaTime = void 0 !== TT ? TT : this.useConstantAnimationDeltaTime ? 16 : (zT - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = zT;
        const gT = this._activeAnimatables;
        if (0 === gT.length) return;
        this._animationTime += this.deltaTime;
        const nT = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let MT = 0; MT < gT.length; MT++) {
          const TT = gT[MT];
          !TT._animate(nT) && TT.disposeOnEnd && MT--
        }! function(TT) {
          if (TT._registeredForLateAnimationBindings.length) {
            for (let UT = 0; UT < TT._registeredForLateAnimationBindings.length; UT++) {
              const mT = TT._registeredForLateAnimationBindings.data[UT];
              for (const TT in mT._lateAnimationHolders) {
                const UT = mT._lateAnimationHolders[TT],
                  WT = UT.animations[0],
                  zT = UT.originalValue;
                if (void 0 === zT || null === zT) continue;
                const gT = JT.c.AllowMatrixDecomposeForInterpolation && zT.m;
                let nT = mT[TT];
                if (gT) nT = tT(UT);
                else if (void 0 !== zT.w) nT = aT(UT, nT || MT.f.Identity());
                else {
                  let TT = 0,
                    mT = 1;
                  const MT = WT && WT._animationState.NW === JT.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (UT.totalWeight < 1) nT = MT ? zT.clone ? zT.clone() : zT : WT && zT.scale ? zT.scale(1 - UT.totalWeight) : WT ? zT * (1 - UT.totalWeight) : zT.clone ? zT.clone() : zT;
                  else if (WT) {
                    mT = UT.totalWeight;
                    const gT = WT.weight / mT;
                    nT = 1 !== gT ? WT.currentValue.scale ? WT.currentValue.scale(gT) : WT.currentValue * gT : (UT.animations.length > 1 || UT.additiveAnimations.length > 0) && WT.currentValue.clone ? WT.currentValue.clone() : WT.currentValue, MT && (nT.addToRef ? nT.addToRef(zT, nT) : nT += zT), TT = 1
                  }
                  for (let WT = TT; WT < UT.animations.length; WT++) {
                    const TT = UT.animations[WT],
                      zT = TT.weight / mT;
                    zT && (TT.currentValue.scaleAndAddToRef ? TT.currentValue.scaleAndAddToRef(zT, nT) : nT += TT.currentValue * zT)
                  }
                  for (let WT = 0; WT < UT.additiveAnimations.length; WT++) {
                    const TT = UT.additiveAnimations[WT],
                      mT = TT.weight;
                    mT && (TT.currentValue.scaleAndAddToRef ? TT.currentValue.scaleAndAddToRef(mT, nT) : nT += TT.currentValue * mT)
                  }
                }
                mT[TT] = nT
              }
              mT._lateAnimationHolders = {}
            }
            TT._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, TT.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((TT, UT) => TT.playOrder - UT.playOrder))
      }, TT.prototype.beginWeightedAnimation = function(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          gT = arguments.length > 6 ? arguments[6] : void 0,
          nT = arguments.length > 7 ? arguments[7] : void 0,
          HT = arguments.length > 8 ? arguments[8] : void 0,
          kT = arguments.length > 9 ? arguments[9] : void 0,
          jT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const lT = this.beginAnimation(TT, UT, mT, zT, MT, gT, nT, !1, HT, kT, jT);
        return lT.weight = WT, lT
      }, TT.prototype.beginAnimation = function(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          MT = arguments.length > 5 ? arguments[5] : void 0,
          gT = arguments.length > 6 ? arguments[6] : void 0,
          nT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          HT = arguments.length > 8 ? arguments[8] : void 0,
          kT = arguments.length > 9 ? arguments[9] : void 0,
          jT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (zT < 0) {
          const TT = UT;
          UT = mT, mT = TT, zT = -zT
        }
        UT > mT && (zT = -zT), nT && this.stopAnimation(TT, void 0, HT), gT || (gT = new wT(this, TT, UT, mT, WT, zT, MT, void 0, kT, jT));
        const lT = !HT || HT(TT);
        if (TT.animations && lT && gT.appendAnimations(TT, TT.animations), TT.getAnimatables) {
          const jT = TT.getAnimatables();
          for (let TT = 0; TT < jT.length; TT++) this.beginAnimation(jT[TT], UT, mT, WT, zT, MT, gT, nT, HT, kT)
        }
        return gT.reset(), gT
      }, TT.prototype.beginHierarchyAnimation = function(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          gT = arguments.length > 6 ? arguments[6] : void 0,
          nT = arguments.length > 7 ? arguments[7] : void 0,
          HT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          kT = arguments.length > 9 ? arguments[9] : void 0,
          jT = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const lT = TT.getDescendants(UT),
          LT = [];
        LT.push(this.beginAnimation(TT, mT, WT, zT, MT, gT, nT, HT, kT, void 0, jT));
        for (const pT of lT) LT.push(this.beginAnimation(pT, mT, WT, zT, MT, gT, nT, HT, kT, void 0, jT));
        return LT
      }, TT.prototype.beginDirectAnimation = function(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (MT < 0) {
          const TT = mT;
          mT = WT, WT = TT, MT = -MT
        }
        mT > WT && (MT = -MT);
        return new wT(this, TT, mT, WT, zT, MT, arguments.length > 6 ? arguments[6] : void 0, UT, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, TT.prototype.beginDirectHierarchyAnimation = function(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        let kT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const jT = TT.getDescendants(UT),
          lT = [];
        lT.push(this.beginDirectAnimation(TT, mT, WT, zT, MT, gT, nT, HT, kT));
        for (const LT of jT) lT.push(this.beginDirectAnimation(LT, mT, WT, zT, MT, gT, nT, HT, kT));
        return lT
      }, TT.prototype.getAnimatableByTarget = function(TT) {
        for (let UT = 0; UT < this._activeAnimatables.length; UT++)
          if (this._activeAnimatables[UT].target === TT) return this._activeAnimatables[UT];
        return null
      }, TT.prototype.getAllAnimatablesByTarget = function(TT) {
        const UT = [];
        for (let mT = 0; mT < this._activeAnimatables.length; mT++) this._activeAnimatables[mT].target === TT && UT.push(this._activeAnimatables[mT]);
        return UT
      }, TT.prototype.stopAnimation = function(TT, UT, mT) {
        const WT = this.getAllAnimatablesByTarget(TT);
        for (const zT of WT) zT.stop(UT, mT)
      }, TT.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let TT = 0; TT < this._activeAnimatables.length; TT++) this._activeAnimatables[TT].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const TT of this.animationGroups) TT.stop()
      })
    }
    wT.ProcessPausedAnimatables = !1;
    var XT, IT = mT(37205),
      QT = mT(40335),
      sT = mT(39965);
    class FT extends QT.d {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(TT) {
        (TT.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.Gw(TT), this._markAsDirtyAndDecompose())
      }
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          gT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          nT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(TT, UT.KF(), !1), this.name = TT, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = UT, this._localMatrix = WT?.clone() ?? MT.e.Identity(), this._restMatrix = zT ?? this._localMatrix.clone(), this._bindMatrix = gT ?? this._localMatrix.clone(), this._index = nT, this._absoluteMatrix = new MT.e, this._absoluteBindMatrix = new MT.e, this._absoluteInverseBindMatrix = new MT.e, this._finalMatrix = new MT.e, UT.bones.push(this), this.setParent(mT, !1), this._updateAbsoluteBindMatrices()
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
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== TT) {
          if (this.parent) {
            const TT = this.parent.children.indexOf(this); - 1 !== TT && this.parent.children.splice(TT, 1)
          }
          this._parentNode = TT, this.parent && this.parent.children.push(this), UT && this._updateAbsoluteBindMatrices(), this.NUT()
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
        this._restMatrix.Gw(TT)
      }
      setRestPose(TT) {
        this.setRestMatrix(TT)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(TT) {
        this.R7(TT)
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
          const TT = MT.l.JB[0],
            UT = MT.l.Quaternion[0],
            mT = MT.l.JB[1];
          this.getRestMatrix().decompose(TT, UT, mT), this._linkedTransformNode.position.Gw(mT), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? MT.f.Identity(), this._linkedTransformNode.rotationQuaternion.Gw(UT), this._linkedTransformNode.gp.Gw(TT)
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
        return this._decompose(), this.zUT
      }
      set position(TT) {
        this._decompose(), this.zUT.Gw(TT), this._markAsDirtyAndCompose()
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
      get gp() {
        return this.getScale()
      }
      set gp(TT) {
        this.setScale(TT)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = MT.p.Zero(), this._localRotation = MT.f.Zero(), this.zUT = MT.p.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.zUT))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, MT.e.ComposeToRef(this._localScaling, this._localRotation, this.zUT, this._localMatrix)) : this._needToCompose = !1)
      }
      R7(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.Gw(TT), UT && this._updateAbsoluteBindMatrices(), mT ? this._matrix = TT : this.NUT()
      }
      _updateAbsoluteBindMatrices(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (TT || (TT = this._bindMatrix), this.parent ? TT.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.Gw(TT), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), UT)
          for (let mT = 0; mT < this.children.length; mT++) this.children[mT]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      NUT() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.NUT(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.NUT(), this._needToDecompose = !0
      }
      _updatePosition(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const zT = this.getLocalMatrix();
        if (0 == UT) WT ? (zT.addAtIndex(12, TT.x), zT.addAtIndex(13, TT.y), zT.addAtIndex(14, TT.z)) : zT.setTranslationFromFloats(TT.x, TT.y, TT.z);
        else {
          const UT = FT._TmpMats[0],
            gT = FT._TmpVecs[0];
          this.parent ? (UT.Gw(this.parent.getAbsoluteMatrix()), mT && UT.multiplyToRef(mT.getWorldMatrix(), UT)) : MT.e.IdentityToRef(UT), WT && UT.setTranslationFromFloats(0, 0, 0), UT.invert(), MT.p.TransformCoordinatesToRef(TT, UT, gT), WT ? (zT.addAtIndex(12, gT.x), zT.addAtIndex(13, gT.y), zT.addAtIndex(14, gT.z)) : zT.setTranslationFromFloats(gT.x, gT.y, gT.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(TT, UT, mT, !0)
      }
      setPosition(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(TT, UT, mT, !1)
      }
      setAbsolutePosition(TT, UT) {
        this.setPosition(TT, 1, UT)
      }
      scale(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const zT = this.getLocalMatrix(),
          gT = FT._TmpMats[0];
        MT.e.ScalingToRef(TT, UT, mT, gT), gT.multiplyToRef(zT, zT), gT.invert();
        for (const MT of this.children) {
          const WT = MT.getLocalMatrix();
          WT.multiplyToRef(gT, WT), WT.multiplyAtIndex(12, TT), WT.multiplyAtIndex(13, UT), WT.multiplyAtIndex(14, mT), MT._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), WT)
          for (const MT of this.children) MT.scale(TT, UT, mT, WT)
      }
      setScale(TT) {
        this._decompose(), this._localScaling.Gw(TT), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(TT) {
        this._decompose(), TT.Gw(this._localScaling)
      }
      setYawPitchRoll(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === WT) {
          const gT = FT._TmpQuat;
          return MT.f.RotationYawPitchRollToRef(TT, UT, mT, gT), void this.setRotationQuaternion(gT, WT, zT)
        }
        const gT = FT._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(gT, zT)) return;
        const nT = FT._TmpMats[1];
        MT.e.RotationYawPitchRollToRef(TT, UT, mT, nT), gT.multiplyToRef(nT, nT), this._rotateWithMatrix(nT, WT, zT)
      }
      rotate(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 ? arguments[3] : void 0;
        const zT = FT._TmpMats[0];
        zT.setTranslationFromFloats(0, 0, 0), MT.e.RotationAxisToRef(TT, UT, zT), this._rotateWithMatrix(zT, mT, WT)
      }
      setAxisAngle(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === mT) {
          const zT = FT._TmpQuat;
          return MT.f.RotationAxisToRef(TT, UT, zT), void this.setRotationQuaternion(zT, mT, WT)
        }
        const zT = FT._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(zT, WT)) return;
        const gT = FT._TmpMats[1];
        MT.e.RotationAxisToRef(TT, UT, gT), zT.multiplyToRef(gT, gT), this._rotateWithMatrix(gT, mT, WT)
      }
      setRotation(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(TT.y, TT.x, TT.z, UT, mT)
      }
      setRotationQuaternion(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === UT) return this._decompose(), this._localRotation.Gw(TT), void this._markAsDirtyAndCompose();
        const WT = FT._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(WT, mT)) return;
        const zT = FT._TmpMats[1];
        MT.e.FromQuaternionToRef(TT, zT), WT.multiplyToRef(zT, zT), this._rotateWithMatrix(zT, UT, mT)
      }
      setRotationMatrix(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === UT) {
          const WT = FT._TmpQuat;
          return MT.f.FromRotationMatrixToRef(TT, WT), void this.setRotationQuaternion(WT, UT, mT)
        }
        const WT = FT._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(WT, mT)) return;
        const zT = FT._TmpMats[1];
        zT.Gw(TT), WT.multiplyToRef(TT, zT), this._rotateWithMatrix(zT, UT, mT)
      }
      _rotateWithMatrix(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const WT = this.getLocalMatrix(),
          zT = WT.m[12],
          MT = WT.m[13],
          gT = WT.m[14],
          nT = this.getParent(),
          HT = FT._TmpMats[3],
          kT = FT._TmpMats[4];
        nT && 1 == UT ? (mT ? (HT.Gw(mT.getWorldMatrix()), nT.getAbsoluteMatrix().multiplyToRef(HT, HT)) : HT.Gw(nT.getAbsoluteMatrix()), kT.Gw(HT), kT.invert(), WT.multiplyToRef(HT, WT), WT.multiplyToRef(TT, WT), WT.multiplyToRef(kT, WT)) : 1 == UT && mT ? (HT.Gw(mT.getWorldMatrix()), kT.Gw(HT), kT.invert(), WT.multiplyToRef(HT, WT), WT.multiplyToRef(TT, WT), WT.multiplyToRef(kT, WT)) : WT.multiplyToRef(TT, WT), WT.setTranslationFromFloats(zT, MT, gT), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(TT, UT) {
        const mT = FT._TmpMats[2];
        return TT.Gw(this.getAbsoluteMatrix()), UT ? (TT.multiplyToRef(UT.getWorldMatrix(), TT), MT.e.ScalingToRef(UT.gp.x, UT.gp.y, UT.gp.z, mT)) : MT.e.IdentityToRef(mT), TT.invert(), !isNaN(TT.m[0]) && (mT.multiplyAtIndex(0, this._scalingDeterminant), TT.multiplyToRef(mT, TT), !0)
      }
      Aq() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const mT = MT.p.Zero();
        return this.getPositionToRef(TT, UT, mT), mT
      }
      getPositionToRef() {
        let TT = arguments.length > 1 ? arguments[1] : void 0,
          UT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const TT = this.getLocalMatrix();
          UT.x = TT.m[12], UT.y = TT.m[13], UT.z = TT.m[14]
        } else {
          const mT = FT._TmpMats[0].Gw(this.getAbsoluteMatrix());
          TT && mT.multiplyToRef(TT.getWorldMatrix(), mT), UT.x = mT.m[12], UT.y = mT.m[13], UT.z = mT.m[14]
        }
      }
      getAbsolutePosition() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const UT = MT.p.Zero();
        return this.getPositionToRef(1, TT, UT), UT
      }
      getAbsolutePositionToRef(TT, UT) {
        this.getPositionToRef(1, TT, UT)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.Gw(this._localMatrix);
          const TT = this._skeleton.getPoseMatrix();
          TT && this._absoluteMatrix.multiplyToRef(TT, this._absoluteMatrix)
        }
        const TT = this.children,
          UT = TT.length;
        for (let mT = 0; mT < UT; mT++) TT[mT].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      qD(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const mT = MT.p.Zero();
        return this.getDirectionToRef(TT, UT, mT), mT
      }
      getDirectionToRef(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const WT = FT._TmpMats[0].Gw(this.getAbsoluteMatrix());
        UT && WT.multiplyToRef(UT.getWorldMatrix(), WT), MT.p.TransformNormalToRef(TT, WT, mT), mT.normalize()
      }
      getRotation() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const mT = MT.p.Zero();
        return this.getRotationToRef(TT, UT, mT), mT
      }
      getRotationToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const WT = FT._TmpQuat;
        this.getRotationQuaternionToRef(TT, UT, WT), WT.toEulerAnglesToRef(mT)
      }
      getRotationQuaternion() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const mT = MT.f.Identity();
        return this.getRotationQuaternionToRef(TT, UT, mT), mT
      }
      getRotationQuaternionToRef() {
        let TT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          UT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), UT.Gw(this._localRotation);
        else {
          const mT = FT._TmpMats[0],
            WT = this.getAbsoluteMatrix();
          TT ? WT.multiplyToRef(TT.getWorldMatrix(), mT) : mT.Gw(WT), mT.multiplyAtIndex(0, this._scalingDeterminant), mT.multiplyAtIndex(1, this._scalingDeterminant), mT.multiplyAtIndex(2, this._scalingDeterminant), mT.decompose(void 0, UT, void 0)
        }
      }
      getRotationMatrix() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 ? arguments[1] : void 0;
        const mT = MT.e.Identity();
        return this.getRotationMatrixToRef(TT, UT, mT), mT
      }
      getRotationMatrixToRef() {
        let TT = arguments.length > 1 ? arguments[1] : void 0,
          UT = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(UT);
        else {
          const mT = FT._TmpMats[0],
            WT = this.getAbsoluteMatrix();
          TT ? WT.multiplyToRef(TT.getWorldMatrix(), mT) : mT.Gw(WT), mT.multiplyAtIndex(0, this._scalingDeterminant), mT.multiplyAtIndex(1, this._scalingDeterminant), mT.multiplyAtIndex(2, this._scalingDeterminant), mT.getRotationMatrixToRef(UT)
        }
      }
      getAbsolutePositionFromLocal(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const mT = MT.p.Zero();
        return this.getAbsolutePositionFromLocalToRef(TT, UT, mT), mT
      }
      getAbsolutePositionFromLocalToRef(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const WT = FT._TmpMats[0].Gw(this.getAbsoluteMatrix());
        UT && WT.multiplyToRef(UT.getWorldMatrix(), WT), MT.p.TransformCoordinatesToRef(TT, WT, mT)
      }
      getLocalPositionFromAbsolute(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const mT = MT.p.Zero();
        return this.getLocalPositionFromAbsoluteToRef(TT, UT, mT), mT
      }
      getLocalPositionFromAbsoluteToRef(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const WT = FT._TmpMats[0].Gw(this.getAbsoluteMatrix());
        UT && WT.multiplyToRef(UT.getWorldMatrix(), WT), WT.invert(), MT.p.TransformCoordinatesToRef(TT, WT, mT)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const TT = this._skeleton.bones.indexOf(this);
        if (-1 !== TT && this._skeleton.bones.splice(TT, 1), this._parentNode && this._parentNode.children) {
          const TT = this._parentNode.children,
            UT = TT.indexOf(this); - 1 !== UT && TT.splice(UT, 1)
        }
        super.dispose()
      }
    }
    FT._TmpVecs = (0, IT.c)(2, MT.p.Zero), FT._TmpQuat = MT.f.Identity(), FT._TmpMats = (0, IT.c)(5, MT.e.Identity), (XT = FT.prototype).copyAnimationRange ?? (XT.copyAnimationRange = (0, sT.j)("Bone", "copyAnimationRange"));
    var PT = mT(40198);
    let VT = !1;
    var uT = mT(40054),
      CT = mT(40449),
      rT = mT(40463),
      KT = mT(40456),
      ST = mT(40235);

    function GT(TT, UT) {
      const mT = (0, pT.RandomRange)(0, 1);
      jT.g.LerpToRef(UT.color1, UT.color2, mT, TT.color)
    }

    function NT(TT, UT) {
      UT.colorDead.subtractToRef(TT.color, UT._colorDiff), UT._colorDiff.scaleToRef(1 / TT.lifeTime, TT.colorStep)
    }

    function ET(TT, UT) {
      TT._properties.currentColorGradient = UT._colorGradients[0], TT._properties.currentColorGradient.getColorToRef(TT.color), TT._properties.currentColor1.Gw(TT.color), UT._colorGradients.length > 1 ? UT._colorGradients[1].getColorToRef(TT._properties.currentColor2) : TT._properties.currentColor2.Gw(TT.color)
    }

    function hT(TT, UT) {
      const mT = UT._colorGradients;
      WT.j.GetCurrentGradient(UT._ratio, mT, ((UT, mT, WT) => {
        UT !== TT._properties.currentColorGradient && (TT._properties.currentColor1.Gw(TT._properties.currentColor2), mT.getColorToRef(TT._properties.currentColor2), TT._properties.currentColorGradient = UT), jT.g.LerpToRef(TT._properties.currentColor1, TT._properties.currentColor2, WT, TT.color), TT.color.a < 0 && (TT.color.a = 0)
      }))
    }

    function DT(TT, UT) {
      TT.colorStep.scaleToRef(UT._scaledUpdateSpeed, UT._scaledColorStep), TT.color.addInPlace(UT._scaledColorStep), TT.color.a < 0 && (TT.color.a = 0)
    }

    function oT(TT, UT) {
      WT.j.GetCurrentGradient(UT._ratio, UT._angularSpeedGradients, ((UT, mT, WT) => {
        UT !== TT._properties.currentAngularSpeedGradient && (TT._properties.currentAngularSpeed1 = TT._properties.currentAngularSpeed2, TT._properties.currentAngularSpeed2 = mT.getFactor(), TT._properties.currentAngularSpeedGradient = UT), TT.angularSpeed = (0, pT.Lerp)(TT._properties.currentAngularSpeed1, TT._properties.currentAngularSpeed2, WT)
      }))
    }

    function AT(TT, UT) {
      TT.angle += TT.angularSpeed * UT._scaledUpdateSpeed
    }

    function RT(TT, UT) {
      UT.particleEmitterType.startDirectionFunction(UT._emitterWorldMatrix, TT.direction, TT, UT.isLocal, UT._emitterInverseWorldMatrix)
    }

    function TU(TT, UT) {
      UT.startDirectionFunction(UT._emitterWorldMatrix, TT.direction, TT, UT.isLocal)
    }

    function UU(TT, UT) {
      TT._properties.currentVelocityGradient = UT._velocityGradients[0], TT._properties.currentVelocity1 = TT._properties.currentVelocityGradient.getFactor(), UT._velocityGradients.length > 1 ? TT._properties.currentVelocity2 = UT._velocityGradients[1].getFactor() : TT._properties.currentVelocity2 = TT._properties.currentVelocity1
    }

    function mU(TT, UT) {
      TT._properties.currentLimitVelocityGradient = UT._limitVelocityGradients[0], TT._properties.currentLimitVelocity1 = TT._properties.currentLimitVelocityGradient.getFactor(), UT._limitVelocityGradients.length > 1 ? TT._properties.currentLimitVelocity2 = UT._limitVelocityGradients[1].getFactor() : TT._properties.currentLimitVelocity2 = TT._properties.currentLimitVelocity1
    }

    function WU(TT, UT) {
      WT.j.GetCurrentGradient(UT._ratio, UT._velocityGradients, ((UT, mT, WT) => {
        UT !== TT._properties.currentVelocityGradient && (TT._properties.currentVelocity1 = TT._properties.currentVelocity2, TT._properties.currentVelocity2 = mT.getFactor(), TT._properties.currentVelocityGradient = UT), TT._properties.directionScale *= (0, pT.Lerp)(TT._properties.currentVelocity1, TT._properties.currentVelocity2, WT)
      }))
    }

    function zU(TT, UT) {
      WT.j.GetCurrentGradient(UT._ratio, UT._limitVelocityGradients, ((mT, WT, zT) => {
        mT !== TT._properties.currentLimitVelocityGradient && (TT._properties.currentLimitVelocity1 = TT._properties.currentLimitVelocity2, TT._properties.currentLimitVelocity2 = WT.getFactor(), TT._properties.currentLimitVelocityGradient = mT);
        const MT = (0, pT.Lerp)(TT._properties.currentLimitVelocity1, TT._properties.currentLimitVelocity2, zT);
        TT.direction.length() > MT && TT.direction.scaleInPlace(UT.limitVelocityDamping)
      }))
    }

    function MU(TT) {
      TT.direction.scaleToRef(TT._properties.directionScale, TT._properties.scaledDirection)
    }

    function gU(TT, UT) {
      UT.particleEmitterType.startPositionFunction(UT._emitterWorldMatrix, TT.position, TT, UT.isLocal)
    }

    function nU(TT, UT) {
      UT.startPositionFunction(UT._emitterWorldMatrix, TT.position, TT, UT.isLocal)
    }

    function HU(TT, UT) {
      TT._properties.localPosition ? TT._properties.localPosition.Gw(TT.position) : TT._properties.localPosition = TT.position.clone(), MT.p.TransformCoordinatesToRef(TT._properties.localPosition, UT._emitterWorldMatrix, TT.position)
    }

    function kU(TT, UT) {
      UT.isLocal && TT._properties.localPosition ? (TT._properties.localPosition.addInPlace(TT._properties.scaledDirection), MT.p.TransformCoordinatesToRef(TT._properties.localPosition, UT._emitterWorldMatrix, TT.position)) : TT.position.addInPlace(TT._properties.scaledDirection)
    }

    function jU(TT, UT) {
      TT._properties.currentDragGradient = UT._dragGradients[0], TT._properties.currentDrag1 = TT._properties.currentDragGradient.getFactor(), UT._dragGradients.length > 1 ? TT._properties.currentDrag2 = UT._dragGradients[1].getFactor() : TT._properties.currentDrag2 = TT._properties.currentDrag1
    }

    function lU(TT, UT) {
      WT.j.GetCurrentGradient(UT._ratio, UT._dragGradients, ((UT, mT, WT) => {
        UT !== TT._properties.currentDragGradient && (TT._properties.currentDrag1 = TT._properties.currentDrag2, TT._properties.currentDrag2 = mT.getFactor(), TT._properties.currentDragGradient = UT);
        const zT = (0, pT.Lerp)(TT._properties.currentDrag1, TT._properties.currentDrag2, WT);
        TT._properties.scaledDirection.scaleInPlace(1 - zT)
      }))
    }

    function LU(TT, UT) {
      TT._properties.randomNoiseCoordinates1 && TT._properties.randomNoiseCoordinates2 ? (TT._properties.randomNoiseCoordinates1.J9(Math.random(), Math.random(), Math.random()), TT._properties.randomNoiseCoordinates2.J9(Math.random(), Math.random(), Math.random())) : (TT._properties.randomNoiseCoordinates1 = new MT.p(Math.random(), Math.random(), Math.random()), TT._properties.randomNoiseCoordinates2 = new MT.p(Math.random(), Math.random(), Math.random()))
    }

    function pU(TT, UT) {
      const mT = UT._noiseTextureData,
        WT = UT._noiseTextureSize;
      if (mT && WT && TT._properties.randomNoiseCoordinates1 && TT._properties.randomNoiseCoordinates2) {
        const zT = UT._fetchR(TT._properties.randomNoiseCoordinates1.x, TT._properties.randomNoiseCoordinates1.y, WT.width, WT.height, mT),
          gT = UT._fetchR(TT._properties.randomNoiseCoordinates1.z, TT._properties.randomNoiseCoordinates2.x, WT.width, WT.height, mT),
          nT = UT._fetchR(TT._properties.randomNoiseCoordinates2.y, TT._properties.randomNoiseCoordinates2.z, WT.width, WT.height, mT),
          HT = MT.l.JB[0],
          kT = MT.l.JB[1];
        HT.J9((2 * zT - 1) * UT.noiseStrength.x, (2 * gT - 1) * UT.noiseStrength.y, (2 * nT - 1) * UT.noiseStrength.z), HT.scaleToRef(UT._tempScaledUpdateSpeed, kT), TT.direction.addInPlace(kT)
      }
    }

    function BU(TT, UT) {
      UT.gravity.scaleToRef(UT._tempScaledUpdateSpeed, UT._scaledGravity), TT.direction.addInPlace(UT._scaledGravity)
    }

    function ZU(TT, UT) {
      TT.size = (0, pT.RandomRange)(UT.minSize, UT.maxSize), TT.scale.J9((0, pT.RandomRange)(UT.minScaleX, UT.maxScaleX), (0, pT.RandomRange)(UT.minScaleY, UT.maxScaleY))
    }

    function cU(TT, UT) {
      TT._properties.currentSizeGradient = UT._sizeGradients[0], TT._properties.currentSize1 = TT._properties.currentSizeGradient.getFactor(), TT.size = TT._properties.currentSize1, UT._sizeGradients.length > 1 ? TT._properties.currentSize2 = UT._sizeGradients[1].getFactor() : TT._properties.currentSize2 = TT._properties.currentSize1, TT.scale.J9((0, pT.RandomRange)(UT.minScaleX, UT.maxScaleX), (0, pT.RandomRange)(UT.minScaleY, UT.maxScaleY))
    }

    function vU(TT, UT) {
      const mT = UT._actualFrame / UT.targetStopDuration;
      WT.j.GetCurrentGradient(mT, UT._startSizeGradients, ((mT, WT, zT) => {
        mT !== UT._currentStartSizeGradient && (UT._currentStartSize1 = UT._currentStartSize2, UT._currentStartSize2 = WT.getFactor(), UT._currentStartSizeGradient = mT);
        const MT = (0, pT.Lerp)(UT._currentStartSize1, UT._currentStartSize2, zT);
        TT.scale.scaleInPlace(MT)
      }))
    }

    function fU(TT, UT) {
      WT.j.GetCurrentGradient(UT._ratio, UT._sizeGradients, ((UT, mT, WT) => {
        UT !== TT._properties.currentSizeGradient && (TT._properties.currentSize1 = TT._properties.currentSize2, TT._properties.currentSize2 = mT.getFactor(), TT._properties.currentSizeGradient = UT), TT.size = (0, pT.Lerp)(TT._properties.currentSize1, TT._properties.currentSize2, WT)
      }))
    }

    function qU(TT, UT) {
      TT.remapData = new MT.t(0, 1, 0, 1)
    }

    function iU(TT, UT) {
      UT._colorRemapGradients && UT._colorRemapGradients.length > 0 && WT.j.GetCurrentGradient(UT._ratio, UT._colorRemapGradients, ((UT, mT, WT) => {
        const zT = (0, pT.Lerp)(UT.factor1, mT.factor1, WT),
          MT = (0, pT.Lerp)(UT.factor2, mT.factor2, WT);
        TT.remapData.x = zT, TT.remapData.y = MT - zT
      })), UT._alphaRemapGradients && UT._alphaRemapGradients.length > 0 && WT.j.GetCurrentGradient(UT._ratio, UT._alphaRemapGradients, ((UT, mT, WT) => {
        const zT = (0, pT.Lerp)(UT.factor1, mT.factor1, WT),
          MT = (0, pT.Lerp)(UT.factor2, mT.factor2, WT);
        TT.remapData.z = zT, TT.remapData.w = MT - zT
      }))
    }

    function bU(TT, UT) {
      const mT = (0, pT.Clamp)(UT._actualFrame / UT.targetStopDuration);
      WT.j.GetCurrentGradient(mT, UT._lifeTimeGradients, ((UT, WT) => {
        const zT = UT,
          MT = WT,
          gT = zT.getFactor(),
          nT = MT.getFactor(),
          HT = (mT - zT.gradient) / (MT.gradient - zT.gradient);
        TT.lifeTime = (0, pT.Lerp)(gT, nT, HT)
      })), UT._emitPower = (0, pT.RandomRange)(UT.minEmitPower, UT.maxEmitPower)
    }

    function OU(TT, UT) {
      TT.lifeTime = (0, pT.RandomRange)(UT.minLifeTime, UT.maxLifeTime), UT._emitPower = (0, pT.RandomRange)(UT.minEmitPower, UT.maxEmitPower)
    }

    function eU(TT, UT) {
      0 === UT._emitPower ? (TT._properties.initialDirection ? TT._properties.initialDirection.Gw(TT.direction) : TT._properties.initialDirection = TT.direction.clone(), TT.direction.set(0, 0, 0)) : (TT._properties.initialDirection = null, TT.direction.scaleInPlace(UT._emitPower)), TT.direction.addInPlace(UT._inheritedVelocityOffset)
    }

    function YU(TT, UT) {
      TT.angularSpeed = (0, pT.RandomRange)(UT.minAngularSpeed, UT.maxAngularSpeed), TT.angle = (0, pT.RandomRange)(UT.minInitialRotation, UT.maxInitialRotation)
    }

    function JU(TT, UT) {
      TT._properties.currentAngularSpeedGradient = UT._angularSpeedGradients[0], TT.angularSpeed = TT._properties.currentAngularSpeedGradient.getFactor(), TT._properties.currentAngularSpeed1 = TT.angularSpeed, UT._angularSpeedGradients.length > 1 ? TT._properties.currentAngularSpeed2 = UT._angularSpeedGradients[1].getFactor() : TT._properties.currentAngularSpeed2 = TT._properties.currentAngularSpeed1, TT.angle = (0, pT.RandomRange)(UT.minInitialRotation, UT.maxInitialRotation)
    }

    function xU(TT, UT) {
      TT._properties.initialStartSpriteCellId = UT.startSpriteCellID, TT._properties.initialEndSpriteCellId = UT.endSpriteCellID, TT._properties.initialSpriteCellLoop = UT.spriteCellLoop
    }

    function dU(TT, UT) {
      TT.previousItem = UT.previousItem, TT.nextItem = UT, UT.previousItem && (UT.previousItem.nextItem = TT), UT.previousItem = TT
    }

    function wU(TT, UT) {
      TT.previousItem = UT, TT.nextItem = UT.nextItem, UT.nextItem && (UT.nextItem.previousItem = TT), UT.nextItem = TT
    }

    function tU(TT) {
      TT.previousItem && (TT.previousItem.nextItem = TT.nextItem), TT.nextItem && (TT.nextItem.previousItem = TT.previousItem)
    }
    var aU = mT(40511);
    class yU extends OT {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(TT) {
        this._startDirectionFunction !== TT && (this._startDirectionFunction = TT, this._directionCreation.process = TT ? TU : RT)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(TT) {
        this._startPositionFunction !== TT && (this._startPositionFunction = TT, this._positionCreation.process = TT ? nU : gU)
      }
      set onDispose(TT) {
        this._onDisposeObserver && this.SF.remove(this._onDisposeObserver), this._onDisposeObserver = this.SF.add(TT)
      }
      get bJ() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(TT) {
        this._useRampGradients !== TT && (this._useRampGradients = TT, this._resetEffect(), TT ? (this._rampCreation = {
          process: qU,
          previousItem: null,
          nextItem: null
        }, wU(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: iU,
          previousItem: null,
          nextItem: null
        }, wU(this._remapGradientProcessing, this._gravityProcessing))) : (tU(this._rampCreation), tU(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(TT) {
        this._isLocal !== TT && (this._isLocal = TT, TT ? (this._isLocalCreation = {
          process: HU,
          previousItem: null,
          nextItem: null
        }, wU(this._isLocalCreation, this._positionCreation)) : tU(this._isLocalCreation))
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
          process: xU,
          previousItem: null,
          nextItem: null
        }, wU(this._sheetCreation, this._colorDeadCreation)) : tU(this._sheetCreation), this._reset())
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
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[UT] = new CT.b(this._engine), this._customWrappers[UT].effect = TT, this._customWrappers[UT].drawContext && (this._customWrappers[UT].drawContext.useInstancing = this._useInstancing)
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
          if (this._noiseTexture = TT, !TT) return tU(this._noiseCreation), void tU(this._noiseProcessing);
          this._noiseCreation = {
            process: LU,
            previousItem: null,
            nextItem: null
          }, wU(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: pU,
            previousItem: null,
            nextItem: null
          }, wU(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          gT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          nT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          kT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        VT || (VT = !0, yT(PT.i, FT)), (0, uT.e)(), super(TT), this._emitterInverseWorldMatrix = MT.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new MT.p, this.SF = new zT.d, this.onStoppedObservable = new zT.d, this.onStartedObservable = new zT.d, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new jT.g(0, 0, 0, 0), this._colorDiff = new jT.g(0, 0, 0, 0), this._scaledGravity = MT.p.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = TT => {}, this.recycleParticle = TT => {
          const UT = this._particles.pop();
          UT !== TT && UT.copyTo(TT), UT.metadata = null, this._stockParticles.push(UT)
        }, this._createParticle = () => {
          let TT;
          return 0 !== this._stockParticles.length ? (TT = this._stockParticles.pop(), TT._reset()) : TT = new YT(this), this._prepareParticle(TT), TT
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = UT, this._epsilon = nT, mT && "Scene" !== mT.getClassName() ? (this._engine = mT, this.defaultProjectionMatrix = MT.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = mT || HT.c.LastCreatedScene, this._engine = this._scene.eB(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.EY.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: OU,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: gU,
          previousItem: null,
          nextItem: null
        }, wU(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: RT,
          previousItem: null,
          nextItem: null
        }, wU(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: eU,
          previousItem: null,
          nextItem: null
        }, wU(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: ZU,
          previousItem: null,
          nextItem: null
        }, wU(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: YU,
          previousItem: null,
          nextItem: null
        }, wU(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: GT,
          previousItem: null,
          nextItem: null
        }, wU(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: NT,
          previousItem: null,
          nextItem: null
        }, wU(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, kT || (this._colorProcessing = {
          process: DT,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: AT,
          previousItem: null,
          nextItem: null
        }, wU(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: MU,
          previousItem: null,
          nextItem: null
        }, wU(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: kU,
          previousItem: null,
          nextItem: null
        }, wU(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: BU,
          previousItem: null,
          nextItem: null
        }, wU(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = gT, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new CT.b(this._engine)
        }, this._customWrappers[0].effect = WT, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new lT.e, this.updateFunction = TT => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((TT => {
            this._noiseTextureData = TT
          })));
          const UT = TT === this._particles;
          for (let mT = 0; mT < TT.length; mT++) {
            const WT = TT[mT];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const zT = WT.age;
            if (WT.age += this._tempScaledUpdateSpeed, WT.age > WT.lifeTime) {
              const TT = WT.age - zT,
                UT = WT.lifeTime - zT;
              this._tempScaledUpdateSpeed = UT * this._tempScaledUpdateSpeed / TT, WT.age = WT.lifeTime
            }
            this._ratio = WT.age / WT.lifeTime, WT._properties.directionScale = this._tempScaledUpdateSpeed;
            let MT = this._updateQueueStart;
            for (; MT;) MT.process(WT, this), MT = MT.nextItem;
            if (this._isAnimationSheetEnabled && !kT && WT.updateCellIndex(), WT._inheritParticleInfoToSubEmitters(), WT.age >= WT.lifeTime) {
              if (this._emitFromParticle(WT), WT._properties.attachedSubEmitters) {
                for (const TT of WT._properties.attachedSubEmitters) TT.particleSystem.disposeOnStop = !0, TT.particleSystem.stop();
                WT._properties.attachedSubEmitters = null
              }
              this.recycleParticle(WT), UT && mT--
            } else;
          }
        }
      }
      serialize(TT) {
        throw new Error("Method not implemented.")
      }
      clone(TT, UT) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = bU : this._lifeTimeCreation.process = OU
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: vU,
          previousItem: null,
          nextItem: null
        }, wU(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (tU(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(TT) {
        this.targetStopDuration !== TT && (this._targetStopDuration = TT, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(TT, UT, mT) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, TT, UT, mT), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(TT) {
        return this._removeFactorGradient(this._lifeTimeGradients, TT), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(TT, UT, mT) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = cU, this._sizeGradientProcessing = {
          process: fU,
          previousItem: null,
          nextItem: null
        }, dU(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, TT, UT, mT), this
      }
      removeSizeGradient(TT) {
        return this._removeFactorGradient(this._sizeGradients, TT), 0 === this._sizeGradients?.length && (tU(this._sizeGradientProcessing), this._sizeCreation.process = ZU), this
      }
      addColorRemapGradient(TT, UT, mT) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, TT, UT, mT), this
      }
      removeColorRemapGradient(TT) {
        return this._removeFactorGradient(this._colorRemapGradients, TT), this
      }
      addAlphaRemapGradient(TT, UT, mT) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, TT, UT, mT), this
      }
      removeAlphaRemapGradient(TT) {
        return this._removeFactorGradient(this._alphaRemapGradients, TT), this
      }
      addAngularSpeedGradient(TT, UT, mT) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = JU, this._angularSpeedGradientProcessing = {
          process: oT,
          previousItem: null,
          nextItem: null
        }, dU(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, TT, UT, mT), this
      }
      removeAngularSpeedGradient(TT) {
        return this._removeFactorGradient(this._angularSpeedGradients, TT), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = YU, tU(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(TT, UT, mT) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: UU,
          previousItem: null,
          nextItem: null
        }, wU(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: WU,
          previousItem: null,
          nextItem: null
        }, dU(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, TT, UT, mT), this
      }
      removeVelocityGradient(TT) {
        return this._removeFactorGradient(this._velocityGradients, TT), 0 === this._velocityGradients?.length && (tU(this._velocityCreation), tU(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(TT, UT, mT) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: mU,
          previousItem: null,
          nextItem: null
        }, wU(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: zU,
          previousItem: null,
          nextItem: null
        }, wU(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, TT, UT, mT), this
      }
      removeLimitVelocityGradient(TT) {
        return this._removeFactorGradient(this._limitVelocityGradients, TT), 0 === this._limitVelocityGradients?.length && (tU(this._limitVelocityCreation), tU(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(TT, UT, mT) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: jU,
          previousItem: null,
          nextItem: null
        }, dU(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: lU,
          previousItem: null,
          nextItem: null
        }, dU(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, TT, UT, mT), this
      }
      removeDragGradient(TT) {
        return this._removeFactorGradient(this._dragGradients, TT), 0 === this._dragGradients?.length && (tU(this._dragCreation), tU(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(TT, UT, mT) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, TT, UT, mT), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(TT) {
        return this._removeFactorGradient(this._startSizeGradients, TT), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const TT = new Uint8Array(4 * this._rawTextureWidth),
          UT = jT.m.Color3[0];
        for (let mT = 0; mT < this._rawTextureWidth; mT++) {
          const zT = mT / this._rawTextureWidth;
          WT.j.GetCurrentGradient(zT, this._rampGradients, ((WT, zT, MT) => {
            jT.d.LerpToRef(WT.color, zT.color, MT, UT), TT[4 * mT] = 255 * UT.r, TT[4 * mT + 1] = 255 * UT.g, TT[4 * mT + 2] = 255 * UT.b, TT[4 * mT + 3] = 255
          }))
        }
        this._rampGradientsTexture = nT.b.CreateRGBATexture(TT, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((TT, UT) => TT.gradient < UT.gradient ? -1 : TT.gradient > UT.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(TT, UT) {
        this._rampGradients || (this._rampGradients = []);
        const mT = new WT.d(TT, UT);
        return this._rampGradients.push(mT), this._syncRampGradientTexture(), this
      }
      removeRampGradient(TT) {
        return this._removeGradientAndTexture(TT, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(TT, UT, mT) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = ET, this._colorProcessing.process = hT);
        const zT = new WT.b(TT, UT, mT);
        return this._colorGradients.push(zT), this._colorGradients.sort(((TT, UT) => TT.gradient < UT.gradient ? -1 : TT.gradient > UT.gradient ? 1 : 0)), this
      }
      removeColorGradient(TT) {
        if (!this._colorGradients) return this;
        let UT = 0;
        for (const mT of this._colorGradients) {
          if (mT.gradient === TT) {
            this._colorGradients.splice(UT, 1);
            break
          }
          UT++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = GT, this._colorProcessing.process = DT), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const TT of this._drawWrappers)
            if (TT)
              for (const UT of TT) UT?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(TT, UT, mT, WT, zT) {
        return zT[4 * (((TT = .5 * Math.abs(TT) + .5) * mT % mT | 0) + ((UT = .5 * Math.abs(UT) + .5) * WT % WT | 0) * mT)] / 255
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
          UT = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * UT), this._vertexBuffer = new gT.c(TT, this._vertexData, !0, UT);
        let mT = 0;
        const WT = this._vertexBuffer.createVertexBuffer(gT.i.PositionKind, mT, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[gT.i.PositionKind] = WT, mT += 3;
        const zT = this._vertexBuffer.createVertexBuffer(gT.i.ColorKind, mT, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[gT.i.ColorKind] = zT, mT += 4;
        const MT = this._vertexBuffer.createVertexBuffer("angle", mT, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = MT, mT += 1;
        const nT = this._vertexBuffer.createVertexBuffer("size", mT, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = nT, mT += 2, this._isAnimationSheetEnabled) {
          const TT = this._vertexBuffer.createVertexBuffer("cellIndex", mT, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = TT, mT += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const TT = this._vertexBuffer.createVertexBuffer("direction", mT, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = TT, mT += 3
        }
        if (this._useRampGradients) {
          const TT = this._vertexBuffer.createVertexBuffer("remapData", mT, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = TT, mT += 4
        }
        let HT;
        if (this._useInstancing) {
          const UT = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new gT.c(TT, UT, !1, 2), HT = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else HT = this._vertexBuffer.createVertexBuffer("offset", mT, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = HT, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const TT = [],
          UT = [];
        let mT = 0;
        for (let WT = 0; WT < this._capacity; WT++) TT.push(mT), TT.push(mT + 1), TT.push(mT + 2), TT.push(mT), TT.push(mT + 2), TT.push(mT + 3), UT.push(mT, mT + 1, mT + 1, mT + 2, mT + 2, mT + 3, mT + 3, mT, mT, mT + 3), mT += 4;
        this._indexBuffer = this._engine.createIndexBuffer(TT), this._linesIndexBuffer = this._engine.createIndexBuffer(UT)
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
              for (let UT = 0; UT < this.preWarmCycles; UT++) this.animate(!0), TT.render()
            }))
          }));
          else
            for (let UT = 0; UT < this.preWarmCycles; UT++) this.animate(!0)
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
      _appendParticleVertex(TT, UT, mT, WT) {
        let zT = TT * this._vertexBufferSize;
        const gT = MT.l.JB[0].Gw(this._scene?.floatingOriginOffset || MT.p.ZeroReadOnly);
        if (this._vertexData[zT++] = UT.position.x + this.worldOffset.x - gT.x, this._vertexData[zT++] = UT.position.y + this.worldOffset.y - gT.y, this._vertexData[zT++] = UT.position.z + this.worldOffset.z - gT.z, this._vertexData[zT++] = UT.color.r, this._vertexData[zT++] = UT.color.g, this._vertexData[zT++] = UT.color.b, this._vertexData[zT++] = UT.color.a, this._vertexData[zT++] = UT.angle, this._vertexData[zT++] = UT.scale.x * UT.size, this._vertexData[zT++] = UT.scale.y * UT.size, this._isAnimationSheetEnabled && (this._vertexData[zT++] = UT.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[zT++] = UT.direction.x, this._vertexData[zT++] = UT.direction.y, this._vertexData[zT++] = UT.direction.z);
        else if (UT._properties.initialDirection) {
          let TT = UT._properties.initialDirection;
          this.isLocal && (MT.p.TransformNormalToRef(TT, this._emitterWorldMatrix, MT.l.JB[0]), TT = MT.l.JB[0]), 0 === TT.x && 0 === TT.z && (TT.x = .001), this._vertexData[zT++] = TT.x, this._vertexData[zT++] = TT.y, this._vertexData[zT++] = TT.z
        } else {
          let TT = UT.direction;
          this.isLocal && (MT.p.TransformNormalToRef(TT, this._emitterWorldMatrix, MT.l.JB[0]), TT = MT.l.JB[0]), 0 === TT.x && 0 === TT.z && (TT.x = .001), this._vertexData[zT++] = TT.x, this._vertexData[zT++] = TT.y, this._vertexData[zT++] = TT.z
        }
        this._useRampGradients && UT.remapData && (this._vertexData[zT++] = UT.remapData.x, this._vertexData[zT++] = UT.remapData.y, this._vertexData[zT++] = UT.remapData.z, this._vertexData[zT++] = UT.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === mT ? mT = this._epsilon : 1 === mT && (mT = 1 - this._epsilon), 0 === WT ? WT = this._epsilon : 1 === WT && (WT = 1 - this._epsilon)), this._vertexData[zT++] = mT, this._vertexData[zT] = WT)
      }
      _prepareParticle(TT) {}
      _createNewOnes(TT) {
        let UT;
        for (let mT = 0; mT < TT && this._particles.length !== this._capacity; mT++) {
          UT = this._createParticle(), this._particles.push(UT);
          let TT = this._createQueueStart;
          for (; TT;) TT.process(UT, this), TT = TT.nextItem;
          UT._inheritParticleInfoToSubEmitters()
        }
      }
      _update(TT) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const TT = this.emitter;
          this._emitterWorldMatrix = TT.getWorldMatrix()
        } else {
          const TT = this.emitter;
          this._emitterWorldMatrix = MT.e.Translation(TT.x, TT.y, TT.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(TT)
      }
      static _GetAttributeNamesOrOptions() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const WT = [gT.i.PositionKind, gT.i.ColorKind, "angle", "offset", "size"];
        return TT && WT.push("cellIndex"), UT || WT.push("direction"), mT && WT.push("remapData"), WT
      }
      static _GetEffectCreationOptions() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const WT = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, rT.b)(WT), TT && WT.push("particlesInfos"), UT && WT.push("logarithmicDepthConstant"), mT && (WT.push("vFogInfos"), WT.push("vFogColor")), WT
      }
      fillDefines(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, rT.k)(this, this._scene, TT), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && TT.push("#define FOG")), this._isAnimationSheetEnabled && TT.push("#define ANIMATESHEET"), this.useLogarithmicDepth && TT.push("#define LOGARITHMICDEPTH"), UT === OT.BLENDMODE_MULTIPLY && TT.push("#define BLENDMULTIPLYMODE"), this.isLocal && TT.push("#define LOCAL"), this._useRampGradients && TT.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (TT.push("#define BILLBOARD"), this.billboardMode) {
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
        mT && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), TT.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(TT, UT, mT) {
        UT.push(...yU._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), TT.push(...yU._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), mT.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, ST.e)(TT, this._imageProcessingConfigurationDefines), (0, ST.b)(mT, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(TT) {
        var UT;
        const mT = this._getCustomDrawWrapper(TT);
        if (mT?.effect) return mT;
        const WT = [];
        this.fillDefines(WT, TT);
        const MT = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          gT = aU.c._PrepareStringDefines(MT, WT),
          nT = gT ? aU.c.GetConfiguration(MT) : void 0;
        let HT = this._drawWrappers[MT];
        HT || (HT = this._drawWrappers[MT] = [], 0 === MT || this._renderPassObserver || (this._renderPassObserver = ((UT = this._engine)._onReleaseRenderPassObservable ?? (UT._onReleaseRenderPassObservable = new zT.d)).add((TT => {
          const UT = this._drawWrappers[TT];
          if (UT) {
            for (const TT of UT) TT?.dispose();
            delete this._drawWrappers[TT]
          }
        }))));
        let kT = HT[TT];
        kT || (kT = new CT.b(this._engine), kT.drawContext && (kT.drawContext.useInstancing = this._useInstancing), HT[TT] = kT);
        const jT = WT.join("\n");
        if (kT.defines !== jT) {
          const TT = [],
            UT = [],
            mT = [];
          this.fillUniformsAttributesAndSamplerNames(UT, TT, mT), gT && (UT.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== nT?.defines.PREPASS_LOCAL_POSITION_INDEX && UT.push("inverseEmitterWM", "geometryWorldOffset")), kT.setEffect(this._engine.createEffect("particles", {
            attributes: TT,
            uniformsNames: UT,
            samplers: mT,
            defines: jT,
            shaderLanguage: this._shaderLanguage,
            multiTarget: gT,
            indexParameters: gT ? {
              buffersCount: nT?._mrtCount ?? 0
            } : void 0
          }, this._engine), jT)
        }
        return kT
      }
      _bindGeometryRendering(TT) {
        const UT = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          mT = aU.c.GetConfiguration(UT);
        if (!mT?._defines) return;
        TT.setFloat("objectId", 0), TT.setInt("meshBlendTag", 0);
        const WT = this._scene?.activeCamera;
        if (TT.setFloat2("cameraInfo", WT?.minZ ?? 0, WT?.maxZ ?? 1), this.isLocal && void 0 !== mT.defines.PREPASS_LOCAL_POSITION_INDEX) {
          TT.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const UT = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || MT.p.ZeroReadOnly, MT.l.JB[0]);
          TT.setVector3("geometryWorldOffset", UT)
        }
      }
      animate() {
        let TT, UT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!UT && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (UT ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) TT = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const UT = this._calculateEmitRate();
            TT = UT * this._scaledUpdateSpeed | 0, this._newPartsExcess += UT * this._scaledUpdateSpeed - TT
          }
          if (this._newPartsExcess > 1 && (TT += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? TT = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(TT), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !UT) {
            let TT = 0;
            for (let UT = 0; UT < this._particles.length; UT++) {
              const mT = this._particles[UT];
              this._appendParticleVertices(TT, mT), TT += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const TT = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  UT = this._particles.length;
                UT < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, UT * TT, this._fixedCapacityHighWaterMark * TT), this._fixedCapacityHighWaterMark = UT, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
          const UT = this._actualFrame / this.targetStopDuration;
          WT.j.GetCurrentGradient(UT, this._emitRateGradients, ((UT, mT, WT) => {
            UT !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = mT.getFactor(), this._currentEmitRateGradient = UT), TT = (0, pT.Lerp)(this._currentEmitRate1, this._currentEmitRate2, WT)
          }))
        }
        return TT
      }
      _appendParticleVertices(TT, UT) {
        this._appendParticleVertex(TT++, UT, 0, 0), this._useInstancing || (this._appendParticleVertex(TT++, UT, 1, 0), this._appendParticleVertex(TT++, UT, 1, 1), this._appendParticleVertex(TT, UT, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !yU.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([mT.e(351).then((() => mT(61172))), mT.e(345).then((() => mT(61181)))])) : await Promise.all([mT.e(334).then((() => mT(61187))), Promise.all([mT.e(327), mT.e(360)]).then((() => mT(61189)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== OT.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(OT.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(OT.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(TT) {
        const UT = this._getWrapper(TT),
          mT = UT.effect,
          WT = this._engine;
        WT.enableEffect(UT);
        const zT = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        mT.setTexture("diffuseSampler", this.particleTexture), mT.setMatrix("view", zT);
        const gT = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (mT.setMatrix("projection", gT), this._isAnimationSheetEnabled && this.particleTexture) {
          const TT = this.particleTexture.getBaseSize();
          mT.setFloat3("particlesInfos", this.spriteCellWidth / TT.width, this.spriteCellHeight / TT.height, this.spriteCellWidth / TT.width)
        }
        if (mT.setVector2("translationPivot", this.translationPivot), mT.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const TT = this._scene.activeCamera;
          mT.setVector3("eyePosition", TT.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), mT.setTexture("rampSampler", this._rampGradientsTexture));
        const nT = mT.defines;
        this._scene && ((0, rT.c)(mT, this, this._scene), this.applyFog && (0, KT.f)(this._scene, void 0, mT)), nT.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (zT.invertToRef(MT.l.Matrix[0]), mT.setMatrix("invView", MT.l.Matrix[0])), mT._multiTarget && this._bindGeometryRendering(mT), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? WT.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, mT) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, mT)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? WT.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, mT) : WT.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, mT), this.useLogarithmicDepth && this._scene && (0, KT.p)(nT, mT, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(mT), this._setEngineBasedOnBlendMode(TT), mT._multiTarget && aU.c._BindZeroAlphaDiscard(WT, mT);
        let HT = !1;
        try {
          aU.c._BindAttachmentsForEffect(WT, mT) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(mT), this._useInstancing ? this._scene?.forceWireframe ? WT.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : WT.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? WT.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : WT.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), HT = !0)
        } finally {
          aU.c._RestoreAttachments(WT)
        }
        return HT ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const TT = this._engine;
        let UT;
        return TT.setState && (TT.setState(!1), this.forceDepthWrite && TT.setDepthWrite(!0)), UT = this.blendMode === OT.BLENDMODE_MULTIPLYADD ? this._render(OT.BLENDMODE_MULTIPLY) + this._render(OT.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), UT
      }
      _onDispose() {}
      dispose() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), TT && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), TT && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(UT, mT), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const TT = this._scene.EY.indexOf(this);
          TT > -1 && this._scene.EY.splice(TT, 1), this._scene._activeParticleSystems.dispose()
        }
        this.SF.notifyObservers(this), this.SF.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    yU.ForceGLSL = !1;
    var XU, IU = mT(37239);
    ! function(TT) {
      TT[TT.ATTACHED = 0] = "ATTACHED", TT[TT.END = 1] = "END"
    }(XU || (XU = {}));
    class QU {
      constructor(TT) {
        if (this.particleSystem = TT, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !TT.emitter || !TT.emitter.dispose) {
          const UT = (0, IU.d)("BABYLON.AbstractMesh");
          TT.emitter = new UT("SubemitterSystemEmitter", TT.KF()), TT._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let TT = this.particleSystem.emitter;
        if (TT) {
          if (TT instanceof MT.p) TT = TT.clone();
          else if (-1 !== TT.getClassName().indexOf("Mesh")) {
            TT = new((0, IU.d)("BABYLON.Mesh"))("", TT.KF()), TT.isVisible = !1
          }
        } else TT = new MT.p;
        const UT = new QU(this.particleSystem.clone(this.particleSystem.name, TT));
        return UT.particleSystem.name += "Clone", UT.type = this.type, UT.inheritDirection = this.inheritDirection, UT.inheritedVelocityAmount = this.inheritedVelocityAmount, UT.particleSystem._disposeEmitterOnDispose = !0, UT.particleSystem.disposeOnStop = !0, UT
      }
      serialize() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const UT = {};
        return UT.type = this.type, UT.inheritDirection = this.inheritDirection, UT.inheritedVelocityAmount = this.inheritedVelocityAmount, UT.particleSystem = this.particleSystem.serialize(TT), UT
      }
      static _ParseParticleSystem(TT, UT, mT) {
        throw (0, sT.k)("ParseParticle")
      }
      static Parse(TT, UT, mT) {
        const WT = TT.particleSystem,
          zT = new QU(QU._ParseParticleSystem(WT, UT, mT, !0));
        return zT.type = TT.type, zT.inheritDirection = TT.inheritDirection, zT.inheritedVelocityAmount = TT.inheritedVelocityAmount, zT.particleSystem._isSubEmitter = !0, zT
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var sU = mT(39982),
      FU = mT(40122);
    const PU = () => {};
    class VU {
      constructor() {
        this.particlePositionGenerator = PU, this.particleDestinationGenerator = PU, this.particleDirectionGenerator = PU
      }
      startDirectionFunction(TT, UT, mT, WT) {
        const zT = MT.l.JB[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== PU) this.particleDirectionGenerator(-1, mT, zT);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== PU) {
          this.particleDestinationGenerator(-1, mT, zT);
          const TT = MT.l.JB[1];
          zT.subtractToRef(mT.position, TT), TT.scaleToRef(1 / mT.lifeTime, zT)
        } else zT.set(0, 0, 0);
        WT ? UT.Gw(zT) : MT.p.TransformNormalToRef(zT, TT, UT)
      }
      startPositionFunction(TT, UT, mT, WT) {
        const zT = MT.l.JB[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== PU ? this.particlePositionGenerator(-1, mT, zT) : zT.set(0, 0, 0), WT ? UT.Gw(zT) : MT.p.TransformCoordinatesToRef(zT, TT, UT)
      }
      clone() {
        const TT = new VU;
        return LT.c.DeepCopy(this, TT), TT
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
    const uU = MT.p.Zero(),
      CU = MT.p.Zero(),
      rU = MT.p.Zero();
    class KU {
      constructor() {
        this.strength = 0, this.position = MT.p.Zero()
      }
      _processParticle(TT, UT) {
        this.position.subtractToRef(TT.position, uU);
        const mT = uU.lengthSquared() + 1;
        uU.normalize().scaleToRef(this.strength / mT, CU), CU.scaleToRef(UT._tempScaledUpdateSpeed, rU), TT.direction.addInPlace(rU)
      }
      serialize() {
        return {
          position: this.position.cWT(),
          strength: this.strength
        }
      }
    }
    const SU = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class GU extends yU {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = TT => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const UT = Math.floor(Math.random() * this._subEmitters.length);
          for (const mT of this._subEmitters[UT])
            if (1 === mT.type) {
              const UT = mT.clone();
              TT._inheritParticleInfoToSubEmitter(UT), UT.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(UT.particleSystem), UT.particleSystem.start()
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
        this._flowMap !== TT && (this._flowMap = TT, this._flowMapUpdate && (tU(this._flowMapUpdate), this._flowMapUpdate = null), TT && (this._flowMapUpdate = {
          process: TT => {
            const UT = this.KF()?.getTransformMatrix();
            this._flowMap._processParticle(TT, this.flowMapStrength * this._tempScaledUpdateSpeed, UT)
          },
          previousItem: null,
          nextItem: null
        }, wU(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(TT) {
        super.addAttractor(TT), 1 === this._attractors.length && (this._attractorUpdate = {
          process: TT => {
            for (const UT of this._attractors) UT._processParticle(TT, this)
          },
          previousItem: null,
          nextItem: null
        }, wU(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(TT) {
        super.removeAttractor(TT), 0 === this._attractors.length && this._attractorUpdate && tU(this._attractorUpdate)
      }
      start() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(TT)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const TT of this.subEmitters) TT instanceof GU ? this._subEmitters.push([new QU(TT)]) : TT instanceof QU ? this._subEmitters.push([TT]) : TT instanceof Array && this._subEmitters.push(TT)
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
          const UT = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          TT._properties.attachedSubEmitters = [];
          for (const mT of UT)
            if (0 === mT.type) {
              const UT = mT.clone();
              TT._properties.attachedSubEmitters.push(UT), UT.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), TT && this.particles)
          for (const mT of this.particles)
            if (mT._properties.attachedSubEmitters)
              for (let TT = mT._properties.attachedSubEmitters.length - 1; TT >= 0; TT -= 1) mT._properties.attachedSubEmitters[TT].dispose();
        if (UT && this.activeSubSystems)
          for (let mT = this.activeSubSystems.length - 1; mT >= 0; mT -= 1) this.activeSubSystems[mT].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let TT = 0; TT < this._subEmitters.length; TT++)
            for (const UT of this._subEmitters[TT]) UT.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(TT, UT, mT, WT) {
        let zT;
        zT = mT instanceof sU.c ? null : mT;
        const gT = (0, IU.d)("BABYLON.Texture");
        if (gT && zT)
          if (TT.texture) UT.particleTexture = gT.Parse(TT.texture, zT, WT);
          else if (TT.textureName) {
          const mT = TT.textureSettings;
          if (UT.particleTexture = new gT(WT + TT.textureName, zT, !1, void 0 === TT.invertY || TT.invertY, mT ? mT.samplingMode : void 0), UT.particleTexture.name = TT.textureName, mT) {
            const TT = UT.particleTexture;
            for (const UT of SU) void 0 !== mT[UT] && (TT[UT] = mT[UT])
          }
        }
        if (TT.emitterId || 0 === TT.emitterId || void 0 !== TT.emitter ? (TT.emitterId || 0 === TT.emitterId) && zT ? (UT.emitter = zT.getLastMeshById(TT.emitterId), UT.emitter || (UT.emitter = MT.p.Zero())) : UT.emitter = MT.p.FromArray(TT.emitter) : UT.emitter = MT.p.Zero(), UT.isLocal = !!TT.isLocal, void 0 !== TT.renderingGroupId && (UT.renderingGroupId = TT.renderingGroupId), void 0 !== TT.isBillboardBased && (UT.isBillboardBased = TT.isBillboardBased), void 0 !== TT.billboardMode && (UT.billboardMode = TT.billboardMode), void 0 !== TT.useLogarithmicDepth && (UT.useLogarithmicDepth = TT.useLogarithmicDepth), TT.animations) {
          for (let mT = 0; mT < TT.animations.length; mT++) {
            const WT = TT.animations[mT],
              zT = (0, IU.d)("BABYLON.Animation");
            zT && UT.animations.push(zT.Parse(WT))
          }
          UT.beginAnimationOnStart = TT.beginAnimationOnStart, UT.beginAnimationFrom = TT.beginAnimationFrom, UT.beginAnimationTo = TT.beginAnimationTo, UT.beginAnimationLoop = TT.beginAnimationLoop
        }
        if (TT.autoAnimate && zT && zT.beginAnimation(UT, TT.autoAnimateFrom, TT.autoAnimateTo, TT.autoAnimateLoop, TT.autoAnimateSpeed || 1), UT.startDelay = 0 | TT.startDelay, UT.minAngularSpeed = TT.minAngularSpeed, UT.maxAngularSpeed = TT.maxAngularSpeed, UT.minSize = TT.minSize, UT.maxSize = TT.maxSize, TT.minScaleX && (UT.minScaleX = TT.minScaleX, UT.maxScaleX = TT.maxScaleX, UT.minScaleY = TT.minScaleY, UT.maxScaleY = TT.maxScaleY), void 0 !== TT.preWarmCycles && (UT.preWarmCycles = TT.preWarmCycles, UT.preWarmStepOffset = TT.preWarmStepOffset), void 0 !== TT.minInitialRotation && (UT.minInitialRotation = TT.minInitialRotation, UT.maxInitialRotation = TT.maxInitialRotation), UT.minLifeTime = TT.minLifeTime, UT.maxLifeTime = TT.maxLifeTime, UT.minEmitPower = TT.minEmitPower, UT.maxEmitPower = TT.maxEmitPower, UT.emitRate = TT.emitRate, UT.gravity = MT.p.FromArray(TT.gravity), TT.noiseStrength && (UT.noiseStrength = MT.p.FromArray(TT.noiseStrength)), UT.color1 = jT.g.FromArray(TT.color1), UT.color2 = jT.g.FromArray(TT.color2), UT.colorDead = jT.g.FromArray(TT.colorDead), UT.updateSpeed = TT.updateSpeed, UT.targetStopDuration = TT.targetStopDuration, UT.blendMode = TT.blendMode, TT.colorGradients)
          for (const MT of TT.colorGradients) UT.addColorGradient(MT.gradient, jT.g.FromArray(MT.color1), MT.color2 ? jT.g.FromArray(MT.color2) : void 0);
        if (TT.rampGradients) {
          for (const mT of TT.rampGradients) UT.addRampGradient(mT.gradient, jT.d.FromArray(mT.color));
          UT.useRampGradients = TT.useRampGradients
        }
        if (TT.colorRemapGradients)
          for (const MT of TT.colorRemapGradients) UT.addColorRemapGradient(MT.gradient, void 0 !== MT.factor1 ? MT.factor1 : MT.factor, MT.factor2);
        if (TT.alphaRemapGradients)
          for (const MT of TT.alphaRemapGradients) UT.addAlphaRemapGradient(MT.gradient, void 0 !== MT.factor1 ? MT.factor1 : MT.factor, MT.factor2);
        if (TT.sizeGradients)
          for (const MT of TT.sizeGradients) UT.addSizeGradient(MT.gradient, void 0 !== MT.factor1 ? MT.factor1 : MT.factor, MT.factor2);
        if (TT.angularSpeedGradients)
          for (const MT of TT.angularSpeedGradients) UT.addAngularSpeedGradient(MT.gradient, void 0 !== MT.factor1 ? MT.factor1 : MT.factor, MT.factor2);
        if (TT.velocityGradients)
          for (const MT of TT.velocityGradients) UT.addVelocityGradient(MT.gradient, void 0 !== MT.factor1 ? MT.factor1 : MT.factor, MT.factor2);
        if (TT.dragGradients)
          for (const MT of TT.dragGradients) UT.addDragGradient(MT.gradient, void 0 !== MT.factor1 ? MT.factor1 : MT.factor, MT.factor2);
        if (TT.emitRateGradients)
          for (const MT of TT.emitRateGradients) UT.addEmitRateGradient(MT.gradient, void 0 !== MT.factor1 ? MT.factor1 : MT.factor, MT.factor2);
        if (TT.startSizeGradients)
          for (const MT of TT.startSizeGradients) UT.addStartSizeGradient(MT.gradient, void 0 !== MT.factor1 ? MT.factor1 : MT.factor, MT.factor2);
        if (TT.lifeTimeGradients)
          for (const MT of TT.lifeTimeGradients) UT.addLifeTimeGradient(MT.gradient, void 0 !== MT.factor1 ? MT.factor1 : MT.factor, MT.factor2);
        if (TT.limitVelocityGradients) {
          for (const mT of TT.limitVelocityGradients) UT.addLimitVelocityGradient(mT.gradient, void 0 !== mT.factor1 ? mT.factor1 : mT.factor, mT.factor2);
          UT.limitVelocityDamping = TT.limitVelocityDamping
        }
        if (TT.noiseTexture && zT) {
          const mT = (0, IU.d)("BABYLON.ProceduralTexture");
          UT.noiseTexture = mT.Parse(TT.noiseTexture, zT, WT)
        }
        let nT;
        if (TT.particleEmitterType) {
          switch (TT.particleEmitterType.type) {
            case "SphereParticleEmitter":
              nT = new cT;
              break;
            case "SphereDirectedParticleEmitter":
              nT = new vT;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              nT = new qT;
              break;
            case "ConeDirectedParticleEmitter":
              nT = new iT;
              break;
            case "CylinderParticleEmitter":
              nT = new fT.f;
              break;
            case "CylinderDirectedParticleEmitter":
              nT = new fT.d;
              break;
            case "HemisphericParticleEmitter":
              nT = new ZT;
              break;
            case "PointParticleEmitter":
              nT = new BT;
              break;
            case "MeshParticleEmitter":
              nT = new bT;
              break;
            case "CustomParticleEmitter":
              nT = new VU;
              break;
            default:
              nT = new lT.e
          }
          nT.parse(TT.particleEmitterType, zT)
        } else nT = new lT.e, nT.parse(TT, zT);
        UT.particleEmitterType = nT, UT.startSpriteCellID = TT.startSpriteCellID, UT.endSpriteCellID = TT.endSpriteCellID, UT.spriteCellLoop = TT.spriteCellLoop ?? !0, UT.spriteCellWidth = TT.spriteCellWidth, UT.spriteCellHeight = TT.spriteCellHeight, UT.spriteCellChangeSpeed = TT.spriteCellChangeSpeed, UT.spriteRandomStartCell = TT.spriteRandomStartCell, UT.disposeOnStop = TT.disposeOnStop ?? !1, UT.manualEmitCount = TT.manualEmitCount ?? -1
      }
      static Parse(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          zT = arguments.length > 4 ? arguments[4] : void 0;
        const gT = TT.name;
        let nT, HT, kT = null,
          lT = null;
        if (UT instanceof sU.c ? nT = UT : (HT = UT, nT = HT.eB()), TT.customShader && (0, sT.e)(nT.createEffectForParticles)) {
          lT = TT.customShader;
          const UT = lT.shaderOptions.defines.length > 0 ? lT.shaderOptions.defines.join("\n") : "";
          kT = nT.createEffectForParticles(lT.shaderPath.fragmentElement, lT.shaderOptions.uniforms, lT.shaderOptions.samplers, UT)
        }
        const LT = new GU(gT, zT || TT.fl, UT, kT, TT.isAnimationSheetEnabled);
        if (LT.customShader = lT, LT._rootUrl = mT, TT.id && (LT.id = TT.id), TT.subEmitters) {
          LT.subEmitters = [];
          for (const WT of TT.subEmitters) {
            const TT = [];
            for (const zT of WT) TT.push(QU.Parse(zT, UT, mT));
            LT.subEmitters.push(TT)
          }
        }
        if (TT.attractors)
          for (const jT of TT.attractors) {
            const TT = new KU;
            TT.position = MT.p.FromArray(jT.position), TT.strength = jT.strength, LT.addAttractor(TT)
          }
        return GU._Parse(TT, LT, UT, mT), TT.textureMask && (LT.textureMask = jT.g.FromArray(TT.textureMask)), TT.worldOffset && (LT.worldOffset = MT.p.FromArray(TT.worldOffset)), TT.preventAutoStart && (LT.preventAutoStart = TT.preventAutoStart), TT.metadata && (LT.metadata = TT.metadata), WT || LT.preventAutoStart || LT.start(), LT
      }
      serialize() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const UT = {};
        if (GU._Serialize(UT, this, TT), UT.textureMask = this.textureMask.cWT(), UT.customShader = this.customShader, UT.preventAutoStart = this.preventAutoStart, UT.worldOffset = this.worldOffset.cWT(), this.metadata && (UT.metadata = this.metadata), this.subEmitters) {
          UT.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const mT of this._subEmitters) {
            const WT = [];
            for (const UT of mT) UT.particleSystem.doNotSerialize || WT.push(UT.serialize(TT));
            UT.subEmitters.push(WT)
          }
        }
        if (this._attractors && this._attractors.length) {
          UT.attractors = [];
          for (const TT of this._attractors) UT.attractors.push(TT.serialize())
        }
        return UT
      }
      static _Serialize(TT, UT, mT) {
        if (TT.name = UT.name, TT.id = UT.id, TT.fl = UT.getCapacity(), TT.disposeOnStop = UT.disposeOnStop, TT.manualEmitCount = UT.manualEmitCount, UT.emitter.position) {
          const mT = UT.emitter;
          TT.emitterId = mT.id
        } else {
          const mT = UT.emitter;
          TT.emitter = mT.cWT()
        }
        if (UT.particleEmitterType && (TT.particleEmitterType = UT.particleEmitterType.serialize()), UT.particleTexture)
          if (mT) TT.texture = UT.particleTexture.serialize();
          else {
            const mT = UT.particleTexture;
            TT.textureName = UT.particleTexture.name, TT.invertY = !!mT._invertY;
            const WT = {};
            for (const TT of SU) WT[TT] = mT[TT];
            WT.samplingMode = mT.samplingMode, TT.textureSettings = WT
          } TT.isLocal = UT.isLocal, FU.e.AppendSerializedAnimations(UT, TT), TT.beginAnimationOnStart = UT.beginAnimationOnStart, TT.beginAnimationFrom = UT.beginAnimationFrom, TT.beginAnimationTo = UT.beginAnimationTo, TT.beginAnimationLoop = UT.beginAnimationLoop, TT.startDelay = UT.startDelay, TT.renderingGroupId = UT.renderingGroupId, TT.isBillboardBased = UT.isBillboardBased, TT.billboardMode = UT.billboardMode, TT.minAngularSpeed = UT.minAngularSpeed, TT.maxAngularSpeed = UT.maxAngularSpeed, TT.minSize = UT.minSize, TT.maxSize = UT.maxSize, TT.minScaleX = UT.minScaleX, TT.maxScaleX = UT.maxScaleX, TT.minScaleY = UT.minScaleY, TT.maxScaleY = UT.maxScaleY, TT.minEmitPower = UT.minEmitPower, TT.maxEmitPower = UT.maxEmitPower, TT.minLifeTime = UT.minLifeTime, TT.maxLifeTime = UT.maxLifeTime, TT.emitRate = UT.emitRate, TT.gravity = UT.gravity.cWT(), TT.noiseStrength = UT.noiseStrength.cWT(), TT.color1 = UT.color1.cWT(), TT.color2 = UT.color2.cWT(), TT.colorDead = UT.colorDead.cWT(), TT.updateSpeed = UT.updateSpeed, TT.targetStopDuration = UT.targetStopDuration, TT.blendMode = UT.blendMode, TT.preWarmCycles = UT.preWarmCycles, TT.preWarmStepOffset = UT.preWarmStepOffset, TT.minInitialRotation = UT.minInitialRotation, TT.maxInitialRotation = UT.maxInitialRotation, TT.startSpriteCellID = UT.startSpriteCellID, TT.spriteCellLoop = UT.spriteCellLoop, TT.endSpriteCellID = UT.endSpriteCellID, TT.spriteCellChangeSpeed = UT.spriteCellChangeSpeed, TT.spriteCellWidth = UT.spriteCellWidth, TT.spriteCellHeight = UT.spriteCellHeight, TT.spriteRandomStartCell = UT.spriteRandomStartCell, TT.isAnimationSheetEnabled = UT.isAnimationSheetEnabled, TT.useLogarithmicDepth = UT.useLogarithmicDepth;
        const WT = UT.getColorGradients();
        if (WT) {
          TT.colorGradients = [];
          for (const UT of WT) {
            const mT = {
              gradient: UT.gradient,
              color1: UT.color1.cWT()
            };
            UT.color2 ? mT.color2 = UT.color2.cWT() : mT.color2 = UT.color1.cWT(), TT.colorGradients.push(mT)
          }
        }
        const zT = UT.getRampGradients();
        if (zT) {
          TT.rampGradients = [];
          for (const UT of zT) {
            const mT = {
              gradient: UT.gradient,
              color: UT.color.cWT()
            };
            TT.rampGradients.push(mT)
          }
          TT.useRampGradients = UT.useRampGradients
        }
        const MT = UT.getColorRemapGradients();
        if (MT) {
          TT.colorRemapGradients = [];
          for (const UT of MT) {
            const mT = {
              gradient: UT.gradient,
              factor1: UT.factor1
            };
            void 0 !== UT.factor2 ? mT.factor2 = UT.factor2 : mT.factor2 = UT.factor1, TT.colorRemapGradients.push(mT)
          }
        }
        const gT = UT.getAlphaRemapGradients();
        if (gT) {
          TT.alphaRemapGradients = [];
          for (const UT of gT) {
            const mT = {
              gradient: UT.gradient,
              factor1: UT.factor1
            };
            void 0 !== UT.factor2 ? mT.factor2 = UT.factor2 : mT.factor2 = UT.factor1, TT.alphaRemapGradients.push(mT)
          }
        }
        const nT = UT.getSizeGradients();
        if (nT) {
          TT.sizeGradients = [];
          for (const UT of nT) {
            const mT = {
              gradient: UT.gradient,
              factor1: UT.factor1
            };
            void 0 !== UT.factor2 ? mT.factor2 = UT.factor2 : mT.factor2 = UT.factor1, TT.sizeGradients.push(mT)
          }
        }
        const HT = UT.getAngularSpeedGradients();
        if (HT) {
          TT.angularSpeedGradients = [];
          for (const UT of HT) {
            const mT = {
              gradient: UT.gradient,
              factor1: UT.factor1
            };
            void 0 !== UT.factor2 ? mT.factor2 = UT.factor2 : mT.factor2 = UT.factor1, TT.angularSpeedGradients.push(mT)
          }
        }
        const kT = UT.getVelocityGradients();
        if (kT) {
          TT.velocityGradients = [];
          for (const UT of kT) {
            const mT = {
              gradient: UT.gradient,
              factor1: UT.factor1
            };
            void 0 !== UT.factor2 ? mT.factor2 = UT.factor2 : mT.factor2 = UT.factor1, TT.velocityGradients.push(mT)
          }
        }
        const jT = UT.getDragGradients();
        if (jT) {
          TT.dragGradients = [];
          for (const UT of jT) {
            const mT = {
              gradient: UT.gradient,
              factor1: UT.factor1
            };
            void 0 !== UT.factor2 ? mT.factor2 = UT.factor2 : mT.factor2 = UT.factor1, TT.dragGradients.push(mT)
          }
        }
        const lT = UT.getEmitRateGradients();
        if (lT) {
          TT.emitRateGradients = [];
          for (const UT of lT) {
            const mT = {
              gradient: UT.gradient,
              factor1: UT.factor1
            };
            void 0 !== UT.factor2 ? mT.factor2 = UT.factor2 : mT.factor2 = UT.factor1, TT.emitRateGradients.push(mT)
          }
        }
        const LT = UT.getStartSizeGradients();
        if (LT) {
          TT.startSizeGradients = [];
          for (const UT of LT) {
            const mT = {
              gradient: UT.gradient,
              factor1: UT.factor1
            };
            void 0 !== UT.factor2 ? mT.factor2 = UT.factor2 : mT.factor2 = UT.factor1, TT.startSizeGradients.push(mT)
          }
        }
        const pT = UT.getLifeTimeGradients();
        if (pT) {
          TT.lifeTimeGradients = [];
          for (const UT of pT) {
            const mT = {
              gradient: UT.gradient,
              factor1: UT.factor1
            };
            void 0 !== UT.factor2 ? mT.factor2 = UT.factor2 : mT.factor2 = UT.factor1, TT.lifeTimeGradients.push(mT)
          }
        }
        const BT = UT.getLimitVelocityGradients();
        if (BT) {
          TT.limitVelocityGradients = [];
          for (const UT of BT) {
            const mT = {
              gradient: UT.gradient,
              factor1: UT.factor1
            };
            void 0 !== UT.factor2 ? mT.factor2 = UT.factor2 : mT.factor2 = UT.factor1, TT.limitVelocityGradients.push(mT)
          }
          TT.limitVelocityDamping = UT.limitVelocityDamping
        }
        UT.noiseTexture && (TT.noiseTexture = UT.noiseTexture.serialize())
      }
      clone(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const WT = {
          ...this._customWrappers
        };
        let zT = null;
        const MT = this._engine;
        if ((0, sT.e)(MT.createEffectForParticles) && null != this.customShader) {
          zT = this.customShader;
          const TT = zT.shaderOptions.defines.length > 0 ? zT.shaderOptions.defines.join("\n") : "",
            UT = MT.createEffectForParticles(zT.shaderPath.fragmentElement, zT.shaderOptions.uniforms, zT.shaderOptions.samplers, TT);
          WT[0] ? WT[0].effect = UT : this.setCustomEffect(UT, 0)
        }
        const gT = this.serialize(mT),
          nT = !1 === mT && this.particleTexture ? this.particleTexture.clone() : null;
        nT && (gT.textureName = void 0);
        const HT = GU.Parse(gT, this._scene || this._engine, this._rootUrl);
        return HT.name = TT, HT.customShader = zT, HT._customWrappers = WT, nT && (HT.particleTexture = nT), void 0 === UT && (UT = this.emitter), this.noiseTexture && (HT.noiseTexture = this.noiseTexture.clone()), HT.emitter = UT, this.preventAutoStart || HT.start(), HT
      }
    }
    GU.BILLBOARDMODE_Y = 2, GU.BILLBOARDMODE_ALL = 7, GU.BILLBOARDMODE_STRETCHED = 8, GU.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let NU = !1;
    NU || (NU = !0, QU._ParseParticleSystem = GU.Parse)
  },
  41771: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      SkyMaterial: () => qT,
      _MaxColorValueForRenderTarget: () => fT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(40122),
      gT = mT(37185),
      nT = mT(40407),
      HT = mT(40474),
      kT = mT(41732),
      jT = mT(41309),
      lT = mT(40192),
      LT = mT(37239),
      pT = mT(40503),
      BT = mT(40479),
      ZT = mT(40463),
      cT = mT(40456);
    class vT extends nT.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function fT(TT) {
      switch (TT) {
        case kT.b.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case kT.b.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let qT = (() => {
      var TT;
      let UT, nT, kT, LT, qT, iT, bT, OT, eT, YT, JT, xT, dT, wT, tT, aT = HT.c,
        yT = [],
        XT = [],
        IT = [],
        QT = [],
        sT = [],
        FT = [],
        PT = [],
        VT = [],
        uT = [],
        CT = [],
        rT = [],
        KT = [],
        ST = [],
        GT = [],
        NT = [],
        ET = [],
        hT = [],
        DT = [],
        oT = [],
        AT = [],
        RT = [],
        TU = [],
        UU = [],
        mU = [],
        WU = [],
        zU = [],
        MU = [],
        gU = [],
        nU = [],
        HU = [];
      return TT = class extends aT {
        constructor(TT, UT) {
          super(TT, UT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, WT.k)(this, yT, 1), this.turbidity = ((0, WT.k)(this, XT), (0, WT.k)(this, IT, 10)), this.rayleigh = ((0, WT.k)(this, QT), (0, WT.k)(this, sT, 2)), this.mieCoefficient = ((0, WT.k)(this, FT), (0, WT.k)(this, PT, .005)), this.mieDirectionalG = ((0, WT.k)(this, VT), (0, WT.k)(this, uT, .8)), this.distance = ((0, WT.k)(this, CT), (0, WT.k)(this, rT, 500)), this.inclination = ((0, WT.k)(this, KT), (0, WT.k)(this, ST, .49)), this.azimuth = ((0, WT.k)(this, GT), (0, WT.k)(this, NT, .25)), this.sunPosition = ((0, WT.k)(this, ET), (0, WT.k)(this, hT, new gT.JB(0, 100, 0))), this.useSunPosition = ((0, WT.k)(this, DT), (0, WT.k)(this, oT, !1)), this.cameraOffset = ((0, WT.k)(this, AT), (0, WT.k)(this, RT, gT.JB.Zero())), this.up = ((0, WT.k)(this, TU), (0, WT.k)(this, UU, gT.JB.Up())), this.dithering = ((0, WT.k)(this, mU), (0, WT.k)(this, WU, !1)), this.rawHdrOutput = ((0, WT.k)(this, zU), (0, WT.k)(this, MU, !1)), this.cloudiness = ((0, WT.k)(this, gU), (0, WT.k)(this, nU, 0)), this._cameraPosition = ((0, WT.k)(this, HU), gT.JB.Zero()), this._skyOrientation = new gT.Quaternion
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
        isReadyForSubMesh(UT, mT) {
          const WT = mT._drawWrapper;
          if (this.isFrozen && WT.effect && WT._wasPreviouslyReady) return !0;
          mT.materialDefines || (mT.materialDefines = new vT);
          const zT = mT.materialDefines,
            MT = this.KF();
          if (this._isReadyForSubMesh(mT)) return !0;
          if ((0, cT.$)(UT, MT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, zT, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, cT.O)(UT, zT, !0, !1), zT.IMAGEPROCESSINGPOSTPROCESS !== MT.imageProcessingConfiguration.applyByPostProcess && zT.markAsMiscDirty(), zT.DITHER !== this.dithering && zT.markAsMiscDirty(), zT.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && zT.markAsMiscDirty(), zT.isDirty) {
            zT.markAsProcessed(), MT.resetCachedMaterial();
            const UT = new BT.c;
            zT.FOG && UT.addFallback(1, "FOG"), zT.IMAGEPROCESSINGPOSTPROCESS = MT.imageProcessingConfiguration.applyByPostProcess, zT.DITHER = this.dithering, zT.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const WT = [jT.i.PositionKind];
            zT.VERTEXCOLOR && WT.push(jT.i.ColorKind);
            const gT = "sky",
              nT = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, ZT.b)(nT);
            const HT = zT.toString();
            mT.setEffect(MT.eB().createEffect(gT, {
              attributes: WT,
              uniformsNames: nT,
              uniformBuffersNames: [],
              samplers: [],
              defines: HT,
              fallbacks: UT,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: TT._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, MT.eB()), zT, this._materialContext)
          }
          return !(!mT.effect || !mT.effect.isReady()) && (zT._renderId = MT.getRenderId(), WT._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(TT, UT, mT) {
          const WT = this.KF(),
            zT = mT.materialDefines;
          if (!zT) return;
          const MT = mT.effect;
          if (!MT) return;
          this._activeEffect = MT, this.bindOnlyWorldMatrix(TT), this._activeEffect.setMatrix("viewProjection", WT.getTransformMatrix()), this._mustRebind(WT, MT, mT) && ((0, ZT.c)(MT, this, WT), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, cT.p)(zT, MT, WT)), WT.fogEnabled && UT.applyFog && WT.fogMode !== lT.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", WT.getViewMatrix()), (0, cT.f)(WT, UT, this._activeEffect, this.rawHdrOutput);
          const nT = WT.activeCamera;
          if (nT) {
            const TT = nT.getWorldMatrix();
            this._cameraPosition.x = TT.m[12], this._cameraPosition.y = TT.m[13], this._cameraPosition.z = TT.m[14], this._activeEffect.setVector3("cameraPosition", gT.TmpVectors.JB[0].Gw(this._cameraPosition).FWT(WT.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const TT = WT.eB()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", fT(TT?.texture?.type))
          }
          if (!this.useSunPosition) {
            const TT = Math.PI * (this.inclination - .5),
              UT = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(UT) * Math.cos(TT), this.sunPosition.y = this.distance * Math.sin(-TT), this.sunPosition.z = this.distance * Math.sin(UT) * Math.cos(TT), gT.Quaternion.FromUnitVectorsToRef(gT.JB.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(UT, this._activeEffect, mT)
        }
        getAnimatables() {
          return []
        }
        dispose(TT) {
          super.dispose(TT)
        }
        clone(UT) {
          return MT.e.Clone((() => new TT(UT, this.KF())), this)
        }
        serialize() {
          const TT = super.serialize();
          return TT.customType = "BABYLON.SkyMaterial", TT
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(UT, mT, WT) {
          return MT.e.Parse((() => new TT(UT.name, mT)), UT, mT, WT)
        }
      }, (() => {
        const mT = "function" === typeof Symbol && Symbol.metadata ? Object.create(aT[Symbol.metadata] ?? null) : void 0;
        UT = [(0, zT.L)()], nT = [(0, zT.L)()], kT = [(0, zT.L)()], LT = [(0, zT.L)()], qT = [(0, zT.L)()], iT = [(0, zT.L)()], bT = [(0, zT.L)()], OT = [(0, zT.L)()], eT = [(0, zT.J)()], YT = [(0, zT.L)()], JT = [(0, zT.J)()], xT = [(0, zT.J)()], dT = [(0, zT.L)()], wT = [(0, zT.L)()], tT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: TT => "luminance" in TT,
            get: TT => TT.luminance,
            set: (TT, UT) => {
              TT.luminance = UT
            }
          },
          metadata: mT
        }, yT, XT), (0, WT.h)(null, null, nT, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: TT => "turbidity" in TT,
            get: TT => TT.turbidity,
            set: (TT, UT) => {
              TT.turbidity = UT
            }
          },
          metadata: mT
        }, IT, QT), (0, WT.h)(null, null, kT, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: TT => "rayleigh" in TT,
            get: TT => TT.rayleigh,
            set: (TT, UT) => {
              TT.rayleigh = UT
            }
          },
          metadata: mT
        }, sT, FT), (0, WT.h)(null, null, LT, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: TT => "mieCoefficient" in TT,
            get: TT => TT.mieCoefficient,
            set: (TT, UT) => {
              TT.mieCoefficient = UT
            }
          },
          metadata: mT
        }, PT, VT), (0, WT.h)(null, null, qT, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: TT => "mieDirectionalG" in TT,
            get: TT => TT.mieDirectionalG,
            set: (TT, UT) => {
              TT.mieDirectionalG = UT
            }
          },
          metadata: mT
        }, uT, CT), (0, WT.h)(null, null, iT, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: TT => "distance" in TT,
            get: TT => TT.distance,
            set: (TT, UT) => {
              TT.distance = UT
            }
          },
          metadata: mT
        }, rT, KT), (0, WT.h)(null, null, bT, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: TT => "inclination" in TT,
            get: TT => TT.inclination,
            set: (TT, UT) => {
              TT.inclination = UT
            }
          },
          metadata: mT
        }, ST, GT), (0, WT.h)(null, null, OT, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: TT => "azimuth" in TT,
            get: TT => TT.azimuth,
            set: (TT, UT) => {
              TT.azimuth = UT
            }
          },
          metadata: mT
        }, NT, ET), (0, WT.h)(null, null, eT, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: TT => "sunPosition" in TT,
            get: TT => TT.sunPosition,
            set: (TT, UT) => {
              TT.sunPosition = UT
            }
          },
          metadata: mT
        }, hT, DT), (0, WT.h)(null, null, YT, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSunPosition" in TT,
            get: TT => TT.useSunPosition,
            set: (TT, UT) => {
              TT.useSunPosition = UT
            }
          },
          metadata: mT
        }, oT, AT), (0, WT.h)(null, null, JT, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: TT => "cameraOffset" in TT,
            get: TT => TT.cameraOffset,
            set: (TT, UT) => {
              TT.cameraOffset = UT
            }
          },
          metadata: mT
        }, RT, TU), (0, WT.h)(null, null, xT, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: TT => "up" in TT,
            get: TT => TT.up,
            set: (TT, UT) => {
              TT.up = UT
            }
          },
          metadata: mT
        }, UU, mU), (0, WT.h)(null, null, dT, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: TT => "dithering" in TT,
            get: TT => TT.dithering,
            set: (TT, UT) => {
              TT.dithering = UT
            }
          },
          metadata: mT
        }, WU, zU), (0, WT.h)(null, null, wT, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: TT => "rawHdrOutput" in TT,
            get: TT => TT.rawHdrOutput,
            set: (TT, UT) => {
              TT.rawHdrOutput = UT
            }
          },
          metadata: mT
        }, MU, gU), (0, WT.h)(null, null, tT, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: TT => "cloudiness" in TT,
            get: TT => TT.cloudiness,
            set: (TT, UT) => {
              TT.cloudiness = UT
            }
          },
          metadata: mT
        }, nU, HU), mT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mT
        })
      })(), TT._ShaderLoader = new pT.c((() => [mT.e(335).then((() => mT(61198))), mT.e(328).then((() => mT(61203)))]), (() => [mT.e(352).then((() => mT(61205))), mT.e(346).then((() => mT(61209)))])), TT
    })();
    (0, LT.h)("BABYLON.SkyMaterial", qT)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);