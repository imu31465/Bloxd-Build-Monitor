export const id = 277;
export const ids = [277];
export const modules = {
  53599: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(41626),
      tR = GR(53605);
    class uR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = GR, this.uuR = [], this._maxBlockCapacity = JR || 64, this._selectionContent = new yR.d(1024), this._creationFunc = RR
      }
      update(RR, JR, GR) {
        tR.d._CreateBlocks(RR, JR, GR, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      stR(RR) {
        for (let JR = 0; JR < this.blocks.length; JR++) {
          this.blocks[JR].addEntry(RR)
        }
      }
      vI(RR) {
        for (let JR = 0; JR < this.blocks.length; JR++) {
          this.blocks[JR].removeEntry(RR)
        }
      }
      select(RR, JR) {
        this._selectionContent.reset();
        for (let GR = 0; GR < this.blocks.length; GR++) {
          this.blocks[GR].select(RR, this._selectionContent, JR)
        }
        return JR ? this._selectionContent.concat(this.uuR) : this._selectionContent.concatWithNoDuplicate(this.uuR), this._selectionContent
      }
      intersects(RR, JR, GR) {
        this._selectionContent.reset();
        for (let yR = 0; yR < this.blocks.length; yR++) {
          this.blocks[yR].intersects(RR, JR, this._selectionContent, GR)
        }
        return GR ? this._selectionContent.concat(this.uuR) : this._selectionContent.concatWithNoDuplicate(this.uuR), this._selectionContent
      }
      intersectsRay(RR) {
        this._selectionContent.reset();
        for (let JR = 0; JR < this.blocks.length; JR++) {
          this.blocks[JR].intersectsRay(RR, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.uuR), this._selectionContent
      }
    }
    uR.CreationFuncForMeshes = (RR, JR) => {
      const GR = RR.Tm();
      !RR.isBlocked && GR.boundingBox.intersectsMinMax(JR.TtR, JR.FtR) && JR.entries.push(RR)
    }, uR.CreationFuncForSubMeshes = (RR, JR) => {
      RR.Tm().boundingBox.intersectsMinMax(JR.TtR, JR.FtR) && JR.entries.push(RR)
    }
  },
  53605: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR
    });
    var yR = GR(38204),
      tR = GR(41829);
    class uR {
      constructor(RR, JR, GR, yR, tR, uR) {
        this.entries = [], this.ZuR = new Array, this._capacity = GR, this._depth = yR, this._maxDepth = tR, this._creationFunc = uR, this._minPoint = RR, this._maxPoint = JR, this.ZuR.push(RR.clone()), this.ZuR.push(JR.clone()), this.ZuR.push(RR.clone()), this.ZuR[2].x = JR.x, this.ZuR.push(RR.clone()), this.ZuR[3].y = JR.y, this.ZuR.push(RR.clone()), this.ZuR[4].z = JR.z, this.ZuR.push(JR.clone()), this.ZuR[5].z = RR.z, this.ZuR.push(JR.clone()), this.ZuR[6].x = RR.x, this.ZuR.push(JR.clone()), this.ZuR[7].y = RR.y
      }
      get hK() {
        return this._capacity
      }
      get TtR() {
        return this._minPoint
      }
      get FtR() {
        return this._maxPoint
      }
      addEntry(RR) {
        if (this.blocks)
          for (let JR = 0; JR < this.blocks.length; JR++) {
            this.blocks[JR].addEntry(RR)
          } else this._creationFunc(RR, this), this.entries.length > this.hK && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(RR) {
        if (this.blocks) {
          for (let JR = 0; JR < this.blocks.length; JR++) {
            this.blocks[JR].removeEntry(RR)
          }
          return
        }
        const JR = this.entries.indexOf(RR);
        JR > -1 && this.entries.splice(JR, 1)
      }
      addEntries(RR) {
        for (let JR = 0; JR < RR.length; JR++) {
          const GR = RR[JR];
          this.addEntry(GR)
        }
      }
      select(RR, JR, GR) {
        if (tR.c.IsInFrustum(this.ZuR, RR)) {
          if (this.blocks) {
            for (let yR = 0; yR < this.blocks.length; yR++) {
              this.blocks[yR].select(RR, JR, GR)
            }
            return
          }
          GR ? JR.concat(this.entries) : JR.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(RR, JR, GR, yR) {
        if (tR.c.IntersectsSphere(this._minPoint, this._maxPoint, RR, JR)) {
          if (this.blocks) {
            for (let tR = 0; tR < this.blocks.length; tR++) {
              this.blocks[tR].intersects(RR, JR, GR, yR)
            }
            return
          }
          yR ? GR.concat(this.entries) : GR.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(RR, JR) {
        if (RR.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let GR = 0; GR < this.blocks.length; GR++) {
              this.blocks[GR].intersectsRay(RR, JR)
            }
            return
          }
          JR.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        uR._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(RR, JR, GR, tR, ZR, qR, iR, fR) {
        iR.blocks = new Array;
        const VR = new yR.r((JR.x - RR.x) / 2, (JR.y - RR.y) / 2, (JR.z - RR.z) / 2);
        for (let yR = 0; yR < 2; yR++)
          for (let JR = 0; JR < 2; JR++)
            for (let KR = 0; KR < 2; KR++) {
              const wR = RR.add(VR.multiplyByFloats(yR, JR, KR)),
                rR = RR.add(VR.multiplyByFloats(yR + 1, JR + 1, KR + 1)),
                eR = new uR(wR, rR, tR, ZR + 1, qR, fR);
              eR.addEntries(GR), iR.blocks.push(eR)
            }
      }
    }
  },
  53612: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => VR
    });
    var yR = GR(41612),
      tR = GR(38204),
      uR = GR(41974),
      ZR = GR(53551),
      qR = GR(41693),
      iR = GR(38224),
      fR = GR(53599);
    class VR {
      constructor(RR) {
        this.name = qR.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new ZR.z(tR.r.Zero(), new tR.r(1, 1, 1)), (RR = RR || iR.c.LastCreatedScene) && (this.tL = RR, this.tL.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.tL.getActiveSubMeshCandidates = RR => this.getActiveSubMeshCandidates(RR), this.tL.getCollidingSubMeshCandidates = (RR, JR) => this.getCollidingSubMeshCandidates(RR, JR), this.tL.getIntersectingSubMeshCandidates = (RR, JR) => this.getIntersectingSubMeshCandidates(RR, JR))
      }
      register() {
        this.tL.onMeshRemovedObservable.add((RR => {
          const JR = this.tL.selectionOctree;
          if (void 0 !== JR && null !== JR) {
            const GR = JR.uuR.indexOf(RR); - 1 !== GR && JR.uuR.splice(GR, 1)
          }
        })), this.tL.onMeshImportedObservable.add((RR => {
          const JR = this.tL.selectionOctree;
          void 0 !== JR && null !== JR && JR.stR(RR)
        }))
      }
      getActiveMeshCandidates() {
        return this.tL.wuR?.select(this.tL.frustumPlanes) || this.tL._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(RR) {
        if (RR._submeshesOctree && RR.useOctreeForRenderingSelection) {
          return RR._submeshesOctree.select(this.tL.frustumPlanes)
        }
        return this.tL._getDefaultSubMeshCandidates(RR)
      }
      getIntersectingSubMeshCandidates(RR, JR) {
        if (RR._submeshesOctree && RR.useOctreeForPicking) {
          ZR.z.TransformToRef(JR, RR.getWorldMatrix(), this._tempRay);
          return RR._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.tL._getDefaultSubMeshCandidates(RR)
      }
      getCollidingSubMeshCandidates(RR, JR) {
        if (RR._submeshesOctree && RR.useOctreeForCollisions) {
          const GR = JR._velocityWorldLength + Math.max(JR._radius.x, JR._radius.y, JR._radius.z);
          return RR._submeshesOctree.intersects(JR._basePointWorld, GR)
        }
        return this.tL._getDefaultSubMeshCandidates(RR)
      }
      rebuild() {}
      dispose() {}
    }
    let KR = !1;
    KR || (KR = !0, yR.g.prototype.createOrUpdateSelectionOctree = function() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        GR = this._getComponent(qR.d.NAME_OCTREE);
      GR || (GR = new VR(this), this.qtR(GR)), this.wuR || (this.wuR = new fR.b(fR.b.CreationFuncForMeshes, RR, JR));
      const yR = this.getWorldExtends();
      return this.wuR.update(yR.min, yR.max, this.meshes), this.wuR
    }, Object.defineProperty(yR.g.prototype, "selectionOctree", {
      get: function() {
        return this.wuR
      },
      enumerable: !0,
      configurable: !0
    }), uR.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const GR = this.jH();
      let yR = GR._getComponent(qR.d.NAME_OCTREE);
      yR || (yR = new VR(GR), GR.qtR(yR)), this._submeshesOctree || (this._submeshesOctree = new fR.b(fR.b.CreationFuncForSubMeshes, RR, JR)), this.computeWorldMatrix(!0);
      const tR = this.Tm().boundingBox;
      return this._submeshesOctree.update(tR.minimumWorld, tR.maximumWorld, this.XM), this._submeshesOctree
    })
  },
  53551: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => vR,
      g: () => aR,
      i: () => eR,
      l: () => rR,
      n: () => gR,
      p: () => pR,
      r: () => MR,
      t: () => lR,
      x: () => BR,
      z: () => KR
    });
    var yR = GR(38213),
      tR = GR(38204),
      uR = GR(38217),
      ZR = GR(41815),
      qR = GR(41659),
      iR = GR(38224),
      fR = GR(41710);
    const VR = {
      internalPickerForMesh: void 0
    };
    class KR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yR.c;
        this.origin = RR, this.direction = JR, this.length = GR, this.epsilon = tR
      }
      clone() {
        return new KR(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const yR = KR._TmpVector3[0].VJR(RR.x - GR, RR.y - GR, RR.z - GR),
          tR = KR._TmpVector3[1].VJR(JR.x + GR, JR.y + GR, JR.z + GR);
        let uR, ZR, qR, iR, fR = 0,
          VR = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < yR.x || this.origin.x > tR.x) return !1
        } else if (uR = 1 / this.direction.x, ZR = (yR.x - this.origin.x) * uR, qR = (tR.x - this.origin.x) * uR, qR === -1 / 0 && (qR = 1 / 0), ZR > qR && (iR = ZR, ZR = qR, qR = iR), fR = Math.max(ZR, fR), VR = Math.min(qR, VR), fR > VR) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < yR.y || this.origin.y > tR.y) return !1
        } else if (uR = 1 / this.direction.y, ZR = (yR.y - this.origin.y) * uR, qR = (tR.y - this.origin.y) * uR, qR === -1 / 0 && (qR = 1 / 0), ZR > qR && (iR = ZR, ZR = qR, qR = iR), fR = Math.max(ZR, fR), VR = Math.min(qR, VR), fR > VR) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < yR.z || this.origin.z > tR.z) return !1
        } else if (uR = 1 / this.direction.z, ZR = (yR.z - this.origin.z) * uR, qR = (tR.z - this.origin.z) * uR, qR === -1 / 0 && (qR = 1 / 0), ZR > qR && (iR = ZR, ZR = qR, qR = iR), fR = Math.max(ZR, fR), VR = Math.min(qR, VR), fR > VR) return !1;
        return !0
      }
      intersectsBox(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(RR.minimum, RR.maximum, JR)
      }
      intersectsSphere(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GR = RR.center.x - this.origin.x,
          yR = RR.center.y - this.origin.y,
          tR = RR.center.z - this.origin.z,
          uR = GR * GR + yR * yR + tR * tR,
          ZR = RR.radius + JR,
          qR = ZR * ZR;
        if (uR <= qR) return !0;
        const iR = GR * this.direction.x + yR * this.direction.y + tR * this.direction.z;
        if (iR < 0) return !1;
        return uR - iR * iR <= qR
      }
      intersectsTriangle(RR, JR, GR) {
        const yR = KR._TmpVector3[0],
          uR = KR._TmpVector3[1],
          qR = KR._TmpVector3[2],
          iR = KR._TmpVector3[3],
          fR = KR._TmpVector3[4];
        JR.subtractToRef(RR, yR), GR.subtractToRef(RR, uR), tR.r.CrossToRef(this.direction, uR, qR);
        const VR = tR.r.Dot(yR, qR);
        if (0 === VR) return null;
        const wR = 1 / VR;
        this.origin.subtractToRef(RR, iR);
        const rR = tR.r.Dot(iR, qR) * wR;
        if (rR < -this.epsilon || rR > 1 + this.epsilon) return null;
        tR.r.CrossToRef(iR, yR, fR);
        const eR = tR.r.Dot(this.direction, fR) * wR;
        if (eR < -this.epsilon || rR + eR > 1 + this.epsilon) return null;
        const aR = tR.r.Dot(uR, fR) * wR;
        return aR > this.length || aR < 0 ? null : new ZR.e(1 - rR - eR, rR, aR)
      }
      intersectsPlane(RR) {
        let JR;
        const GR = tR.r.Dot(RR.normal, this.direction);
        if (Math.abs(GR) < 9.99999997475243e-7) return null;
        {
          const yR = tR.r.Dot(RR.normal, this.origin);
          return JR = (-RR.d - yR) / GR, JR < 0 ? JR < -9.99999997475243e-7 ? null : 0 : JR
        }
      }
      intersectsAxis(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (RR) {
          case "y": {
            const RR = (this.origin.y - JR) / this.direction.y;
            return RR > 0 ? null : new tR.r(this.origin.x + this.direction.x * -RR, JR, this.origin.z + this.direction.z * -RR)
          }
          case "x": {
            const RR = (this.origin.x - JR) / this.direction.x;
            return RR > 0 ? null : new tR.r(JR, this.origin.y + this.direction.y * -RR, this.origin.z + this.direction.z * -RR)
          }
          case "z": {
            const RR = (this.origin.z - JR) / this.direction.z;
            return RR > 0 ? null : new tR.r(this.origin.x + this.direction.x * -RR, this.origin.y + this.direction.y * -RR, JR)
          }
          default:
            return null
        }
      }
      vuR(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          uR = arguments.length > 4 ? arguments[4] : void 0,
          ZR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const qR = tR.l.Matrix[0];
        return RR.getWorldMatrix().invertToRef(qR), this._tmpRay ? KR.TransformToRef(this, qR, this._tmpRay) : this._tmpRay = KR.Transform(this, qR), RR.intersects(this._tmpRay, JR, GR, yR, uR, ZR)
      }
      intersectsMeshes(RR, JR, GR) {
        GR ? GR.length = 0 : GR = [];
        for (let yR = 0; yR < RR.length; yR++) {
          const tR = this.vuR(RR[yR], JR);
          tR.hit && GR.push(tR)
        }
        return GR.sort(this._comparePickingInfo), GR
      }
      _comparePickingInfo(RR, JR) {
        return RR.distance < JR.distance ? -1 : RR.distance > JR.distance ? 1 : 0
      }
      intersectionSegment(RR, JR, GR) {
        const yR = this.origin,
          uR = tR.l.Fe[0],
          ZR = tR.l.Fe[1],
          qR = tR.l.Fe[2],
          iR = tR.l.Fe[3];
        JR.subtractToRef(RR, uR), this.direction.scaleToRef(KR._Rayl, qR), yR.addToRef(qR, ZR), RR.subtractToRef(yR, iR);
        const fR = tR.r.Dot(uR, uR),
          VR = tR.r.Dot(uR, qR),
          wR = tR.r.Dot(qR, qR),
          rR = tR.r.Dot(uR, iR),
          eR = tR.r.Dot(qR, iR),
          aR = fR * wR - VR * VR;
        let LR, nR, UR = aR,
          WR = aR;
        aR < KR._Smallnum ? (LR = 0, UR = 1, nR = eR, WR = wR) : (LR = VR * eR - wR * rR, nR = fR * eR - VR * rR, LR < 0 ? (LR = 0, nR = eR, WR = wR) : LR > UR && (LR = UR, nR = eR + VR, WR = wR)), nR < 0 ? (nR = 0, -rR < 0 ? LR = 0 : -rR > fR ? LR = UR : (LR = -rR, UR = fR)) : nR > WR && (nR = WR, -rR + VR < 0 ? LR = 0 : -rR + VR > fR ? LR = UR : (LR = -rR + VR, UR = fR));
        const AR = Math.abs(LR) < KR._Smallnum ? 0 : LR / UR,
          CR = Math.abs(nR) < KR._Smallnum ? 0 : nR / WR,
          XR = tR.l.Fe[4];
        qR.scaleToRef(CR, XR);
        const MR = tR.l.Fe[5];
        uR.scaleToRef(AR, MR), MR.addInPlace(iR);
        const BR = tR.l.Fe[6];
        MR.subtractToRef(XR, BR);
        return CR > 0 && CR <= this.length && BR.lengthSquared() < GR * GR ? MR.length() : -1
      }
      update(RR, JR, GR, yR, uR, ZR, qR) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          KR._RayDistant || (KR._RayDistant = KR.Zero()), KR._RayDistant.unprojectRayToRef(RR, JR, GR, yR, tR.e.IdentityReadOnly, ZR, qR);
          const iR = tR.l.Matrix[0];
          uR.invertToRef(iR), KR.TransformToRef(KR._RayDistant, iR, this)
        } else this.unprojectRayToRef(RR, JR, GR, yR, uR, ZR, qR);
        return this
      }
      static Zero() {
        return new KR(tR.r.Zero(), tR.r.Zero())
      }
      static CreateNew(RR, JR, GR, yR, tR, uR, ZR) {
        return KR.Zero().update(RR, JR, GR, yR, tR, uR, ZR)
      }
      static CreateNewFromTo(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tR.e.IdentityReadOnly;
        const yR = new KR(new tR.r(0, 0, 0), new tR.r(0, 0, 0));
        return KR.CreateFromToToRef(RR, JR, yR, GR)
      }
      static CreateFromToToRef(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tR.e.IdentityReadOnly;
        GR.origin.vN(RR);
        const uR = JR.subtractToRef(RR, GR.direction),
          ZR = Math.sqrt(uR.x * uR.x + uR.y * uR.y + uR.z * uR.z);
        return GR.length = ZR, GR.direction.normalize(), KR.TransformToRef(GR, yR, GR)
      }
      static Transform(RR, JR) {
        const GR = new KR(new tR.r(0, 0, 0), new tR.r(0, 0, 0));
        return KR.TransformToRef(RR, JR, GR), GR
      }
      static TransformToRef(RR, JR, GR) {
        tR.r.TransformCoordinatesToRef(RR.origin, JR, GR.origin), tR.r.TransformNormalToRef(RR.direction, JR, GR.direction), GR.length = RR.length, GR.epsilon = RR.epsilon;
        const yR = GR.direction,
          uR = yR.length();
        if (0 !== uR && 1 !== uR) {
          const RR = 1 / uR;
          yR.x *= RR, yR.y *= RR, yR.z *= RR, GR.length *= uR
        }
        return GR
      }
      unprojectRayToRef(RR, JR, GR, yR, uR, ZR, qR) {
        const fR = tR.l.Matrix[0];
        uR.multiplyToRef(ZR, fR), fR.multiplyToRef(qR, fR), fR.invert();
        const VR = iR.c.LastCreatedEngine,
          KR = tR.l.Fe[0];
        KR.x = RR / GR * 2 - 1, KR.y = -(JR / yR * 2 - 1), KR.z = VR?.LtR ? 1 : VR?.isNDCHalfZRange ? 0 : -1;
        const wR = tR.l.Fe[1].VJR(KR.x, KR.y, 1 - 1e-8),
          rR = tR.l.Fe[2],
          eR = tR.l.Fe[3];
        tR.r.TransformCoordinatesToRef(KR, fR, rR), tR.r.TransformCoordinatesToRef(wR, fR, eR), this.origin.vN(rR), eR.subtractToRef(rR, this.direction), this.direction.normalize()
      }
    }

    function wR(RR, JR, GR, yR, tR) {
      let uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const ZR = KR.Zero();
      return rR(RR, JR, GR, yR, ZR, tR, uR), ZR
    }

    function rR(RR, JR, GR, yR, uR, ZR) {
      let qR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        iR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const fR = RR.ke();
      if (!ZR && !(ZR = RR.activeCamera) && !(ZR = RR.cameraToUseForPointers)) return RR;
      const VR = ZR.viewport,
        KR = fR.getRenderHeight(),
        {
          x: wR,
          y: rR,
          width: eR,
          height: aR
        } = VR.toGlobal(fR.getRenderWidth(), KR),
        LR = 1 / fR.getHardwareScalingLevel();
      return JR = JR * LR - wR, GR = GR * LR - (KR - rR - aR), uR.update(JR, GR, eR, aR, yR || tR.e.IdentityReadOnly, qR ? tR.e.IdentityReadOnly : ZR.getViewMatrix(), ZR.getProjectionMatrix(), iR), RR
    }

    function eR(RR, JR, GR, yR) {
      const tR = KR.Zero();
      return aR(RR, JR, GR, tR, yR), tR
    }

    function aR(RR, JR, GR, yR, uR) {
      if (!qR.e) return RR;
      const ZR = RR.ke();
      if (!uR && !(uR = RR.activeCamera) && !(uR = RR.cameraToUseForPointers)) throw new Error("Active camera not set");
      const iR = uR.viewport,
        fR = ZR.getRenderHeight(),
        {
          x: VR,
          y: KR,
          width: wR,
          height: rR
        } = iR.toGlobal(ZR.getRenderWidth(), fR),
        eR = tR.e.Identity(),
        aR = 1 / ZR.getHardwareScalingLevel();
      return JR = JR * aR - VR, GR = GR * aR - (fR - KR - rR), yR.update(JR, GR, wR, rR, eR, eR, uR.getProjectionMatrix()), RR
    }

    function LR(RR, JR, GR, yR, tR, uR, ZR, qR) {
      return nR(RR, GR, yR, JR(yR, GR.enableDistantPicking), tR, uR, ZR, qR)
    }

    function nR(RR, JR, GR, yR, tR, uR, ZR, qR) {
      const iR = JR.intersects(yR, tR, ZR, uR, GR, qR);
      return iR && iR.hit ? !tR && null != RR && iR.distance >= RR.distance ? null : iR : null
    }

    function UR(RR, JR) {
      return "InstancedLinesMesh" === RR || "LinesMesh" === RR ? JR.intersectionThreshold : 0
    }

    function WR(RR) {
      const JR = RR.getClassName();
      if ("GreasedLineMesh" === JR) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const GR = RR.rawBoundingInfo;
      return {
        rawBoundingInfo: GR,
        intersectionThreshold: GR ? UR(JR, RR) : 0
      }
    }

    function AR(RR, JR, GR, yR, tR) {
      const uR = RR(GR, JR.enableDistantPicking);
      return uR.intersectsSphere(yR.euR, tR) && uR.intersectsBox(yR.boundingBox, tR) ? uR : null
    }

    function CR(RR, JR, GR, yR, uR, ZR) {
      let iR = null;
      const fR = !!(RR.activeCameras && RR.activeCameras.length > 1 && RR.cameraToUseForPointers !== RR.activeCamera),
        KR = RR.cameraToUseForPointers || RR.activeCamera,
        wR = VR.internalPickerForMesh || LR,
        rR = wR === LR;
      for (let qR = 0; qR < RR.meshes.length; qR++) {
        const VR = RR.meshes[qR];
        if (GR) {
          if (!GR(VR, -1)) continue
        } else if (!VR.isEnabled() || !VR.isVisible || !VR.ZL) continue;
        const eR = fR && VR.isWorldMatrixCameraDependent(),
          aR = VR.computeWorldMatrix(eR, KR);
        if (VR.hasThinInstances && VR.jGR) {
          const RR = wR(iR, JR, VR, aR, !0, !0, ZR);
          if (RR) {
            if (uR) return RR;
            const {
              rawBoundingInfo: qR,
              intersectionThreshold: fR
            } = WR(VR), KR = VR._thinInstanceDataStorage.matrixData;
            if (KR) {
              const RR = tR.l.Matrix[0],
                eR = tR.l.Matrix[1],
                LR = Math.min(VR.zRR, KR.length >> 4);
              for (let UR = 0; UR < LR; UR++) {
                if (GR && !GR(VR, UR)) continue;
                tR.e.FromArrayToRef(KR, UR << 4, RR), RR.multiplyToRef(aR, eR);
                const LR = rR && qR ? AR(JR, VR, eR, qR, fR) : null;
                if (rR && qR && !LR) continue;
                const WR = rR && LR ? nR(iR, VR, eR, LR, yR, uR, ZR, !0) : wR(iR, JR, VR, eR, yR, uR, ZR, !0);
                if (WR && (iR = WR, iR.thinInstanceIndex = UR, yR)) return iR
              }
            }
          }
        } else {
          const RR = wR(iR, JR, VR, aR, yR, uR, ZR);
          if (RR && (iR = RR, yR)) return iR
        }
      }
      return iR || new qR.e
    }

    function XR(RR, JR, GR, yR) {
      if (!qR.e) return null;
      const uR = [],
        ZR = !!(RR.activeCameras && RR.activeCameras.length > 1 && RR.cameraToUseForPointers !== RR.activeCamera),
        iR = RR.cameraToUseForPointers || RR.activeCamera,
        fR = VR.internalPickerForMesh || LR,
        KR = fR === LR;
      for (let qR = 0; qR < RR.meshes.length; qR++) {
        const VR = RR.meshes[qR];
        if (GR) {
          if (!GR(VR, -1)) continue
        } else if (!VR.isEnabled() || !VR.isVisible || !VR.ZL) continue;
        const wR = ZR && VR.isWorldMatrixCameraDependent(),
          rR = VR.computeWorldMatrix(wR, iR);
        if (VR.hasThinInstances && VR.jGR) {
          if (fR(null, JR, VR, rR, !0, !0, yR)) {
            const {
              rawBoundingInfo: RR,
              intersectionThreshold: ZR
            } = WR(VR), qR = VR._thinInstanceDataStorage.matrixData;
            if (qR) {
              const iR = tR.l.Matrix[0],
                wR = tR.l.Matrix[1],
                eR = Math.min(VR.zRR, qR.length >> 4);
              for (let aR = 0; aR < eR; aR++) {
                if (GR && !GR(VR, aR)) continue;
                tR.e.FromArrayToRef(qR, aR << 4, iR), iR.multiplyToRef(rR, wR);
                const eR = KR && RR ? AR(JR, VR, wR, RR, ZR) : null;
                if (KR && RR && !eR) continue;
                const LR = KR && eR ? nR(null, VR, wR, eR, !1, !1, yR, !0) : fR(null, JR, VR, wR, !1, !1, yR, !0);
                LR && (LR.thinInstanceIndex = aR, uR.push(LR))
              }
            }
          }
        } else {
          const RR = fR(null, JR, VR, rR, !1, !1, yR);
          RR && uR.push(RR)
        }
      }
      return uR
    }

    function MR(RR, JR, GR, yR, uR, ZR) {
      if (!qR.e) return null;
      const iR = CR(RR, (yR => (RR._tempPickingRay || (RR._tempPickingRay = KR.Zero()), rR(RR, JR, GR, yR, RR._tempPickingRay, ZR || null), RR._tempPickingRay)), yR, uR, !0);
      return iR && (iR.ray = wR(RR, JR, GR, tR.e.Identity(), ZR || null)), iR
    }

    function BR(RR, JR, GR, yR, uR, ZR, qR) {
      const iR = CR(RR, ((yR, tR) => (RR._tempPickingRay || (RR._tempPickingRay = KR.Zero()), rR(RR, JR, GR, yR, RR._tempPickingRay, ZR || null, !1, tR), RR._tempPickingRay)), yR, uR, !1, qR);
      return iR && (iR.ray = wR(RR, JR, GR, tR.e.Identity(), ZR || null)), iR
    }

    function lR(RR, JR, GR, yR, uR) {
      const ZR = CR(RR, (GR => (RR._pickWithRayInverseMatrix || (RR._pickWithRayInverseMatrix = tR.e.Identity()), GR.invertToRef(RR._pickWithRayInverseMatrix), RR._cachedRayForTransform || (RR._cachedRayForTransform = KR.Zero()), KR.TransformToRef(JR, RR._pickWithRayInverseMatrix, RR._cachedRayForTransform), RR._cachedRayForTransform)), GR, yR, !1, uR);
      return ZR && (ZR.ray = JR), ZR
    }

    function pR(RR, JR, GR, yR, tR, uR) {
      return XR(RR, (yR => wR(RR, JR, GR, yR, tR || null)), yR, uR)
    }

    function gR(RR, JR, GR, yR) {
      return XR(RR, (GR => (RR._pickWithRayInverseMatrix || (RR._pickWithRayInverseMatrix = tR.e.Identity()), GR.invertToRef(RR._pickWithRayInverseMatrix), RR._cachedRayForTransform || (RR._cachedRayForTransform = KR.Zero()), KR.TransformToRef(JR, RR._pickWithRayInverseMatrix, RR._cachedRayForTransform), RR._cachedRayForTransform)), GR, yR)
    }

    function bR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        yR = arguments.length > 3 ? arguments[3] : void 0,
        uR = arguments.length > 4 ? arguments[4] : void 0;
      yR || (yR = RR.getWorldMatrix()), JR.length = GR, uR ? JR.origin.vN(uR) : JR.origin.vN(RR.position);
      const ZR = tR.l.Fe[2];
      ZR.set(0, 0, RR._scene.useRightHandedSystem ? -1 : 1);
      const qR = tR.l.Fe[3];
      return tR.r.TransformNormalToRef(ZR, yR, qR), tR.r.NormalizeToRef(qR, JR.direction), JR
    }

    function vR(RR, JR) {
      JR && (JR.prototype.getForwardRay = function() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        return bR(this, new KR(tR.r.Zero(), tR.r.Zero(), RR), RR, JR, GR)
      }, JR.prototype.getForwardRayToRef = function(RR) {
        return bR(this, RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), RR && (fR.d._IsPickingAvailable = !0, RR.prototype.createPickingRay = function(RR, JR, GR, yR) {
        return wR(this, RR, JR, GR, yR, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    KR._TmpVector3 = (0, uR.c)(6, tR.r.Zero), KR._RayDistant = KR.Zero(), KR._Smallnum = 1e-8, KR._Rayl = 1e9
  },
  53543: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR.z
    });
    var yR = GR(41612),
      tR = GR(41732),
      uR = GR(53551);
    let ZR = !1;
    ZR || (ZR = !0, (0, uR.d)(yR.g, tR.b), yR.g.prototype.createPickingRayToRef = function(RR, JR, GR, yR, tR) {
      let ZR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        qR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, uR.l)(this, RR, JR, GR, yR, tR, ZR, qR)
    }, yR.g.prototype.createPickingRayInCameraSpace = function(RR, JR, GR) {
      return (0, uR.i)(this, RR, JR, GR)
    }, yR.g.prototype.createPickingRayInCameraSpaceToRef = function(RR, JR, GR, yR) {
      return (0, uR.g)(this, RR, JR, GR, yR)
    }, yR.g.prototype.pickWithBoundingInfo = function(RR, JR, GR, yR, tR) {
      return (0, uR.r)(this, RR, JR, GR, yR, tR)
    }, yR.g.prototype.Ur = function(RR, JR, GR, yR, tR, ZR) {
      let qR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, uR.x)(this, RR, JR, GR, yR, tR, ZR, qR)
    }, yR.g.prototype.pickWithRay = function(RR, JR, GR, yR) {
      return (0, uR.t)(this, RR, JR, GR, yR)
    }, yR.g.prototype.multiPick = function(RR, JR, GR, yR, tR) {
      return (0, uR.p)(this, RR, JR, GR, yR, tR)
    }, yR.g.prototype.multiPickWithRay = function(RR, JR, GR) {
      return (0, uR.n)(this, RR, JR, GR)
    })
  },
  53557: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => VR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(38204),
      ZR = GR(41777),
      qR = GR(53562),
      iR = GR(41741),
      fR = GR(38253);
    let VR = (() => {
        var RR;
        let JR, GR, iR, fR, VR, KR, wR, rR, eR = qR.d,
          aR = [],
          LR = [],
          nR = [],
          UR = [],
          WR = [],
          AR = [],
          CR = [],
          XR = [],
          MR = [],
          BR = [],
          lR = [],
          pR = [],
          gR = [];
        return RR = class extends eR {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(RR) {
            this._shadowFrustumSize = RR, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(RR) {
            this._shadowOrthoScale = RR, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(RR) {
            this._orthoLeft = RR
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(RR) {
            this._orthoRight = RR
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(RR) {
            this._orthoTop = RR
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(RR) {
            this._orthoBottom = RR
          }
          constructor(RR, JR, GR, tR) {
            super(RR, GR, tR), this._shadowFrustumSize = ((0, yR.m)(this, aR), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, yR.m)(this, LR, !0), this.autoCalcShadowZBounds = ((0, yR.m)(this, nR), (0, yR.m)(this, UR, !1)), this._orthoLeft = ((0, yR.m)(this, WR), (0, yR.m)(this, AR, Number.MAX_VALUE)), this._orthoRight = ((0, yR.m)(this, CR), (0, yR.m)(this, XR, Number.MIN_VALUE)), this._orthoTop = ((0, yR.m)(this, MR), (0, yR.m)(this, BR, Number.MIN_VALUE)), this._orthoBottom = ((0, yR.m)(this, lR), (0, yR.m)(this, pR, Number.MAX_VALUE)), (0, yR.m)(this, gR), this.position = JR.scale(-1), this.direction = JR
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return ZR.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(RR, JR, GR) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(RR) : this._setDefaultAutoExtendShadowProjectionMatrix(RR, JR, GR)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(RR) {
            const JR = this.jH().activeCamera;
            uR.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : JR ? JR.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : JR ? JR.maxZ : 1e4, RR, this.jH().ke().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(RR, JR, GR) {
            const yR = this.jH().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const RR = uR.r.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let yR = Number.MAX_VALUE,
                tR = -Number.MAX_VALUE;
              for (let ZR = 0; ZR < GR.length; ZR++) {
                const qR = GR[ZR];
                if (!qR) continue;
                const iR = qR.Tm().boundingBox;
                for (let GR = 0; GR < iR.vectorsWorld.length; GR++) uR.r.TransformCoordinatesToRef(iR.vectorsWorld[GR], JR, RR), RR.x < this._orthoLeft && (this._orthoLeft = RR.x), RR.y < this._orthoBottom && (this._orthoBottom = RR.y), RR.x > this._orthoRight && (this._orthoRight = RR.x), RR.y > this._orthoTop && (this._orthoTop = RR.y), this.autoCalcShadowZBounds && (RR.z < yR && (yR = RR.z), RR.z > tR && (tR = RR.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = yR, this._shadowMaxZ = tR)
            }
            const tR = this._orthoRight - this._orthoLeft,
              ZR = this._orthoTop - this._orthoBottom,
              qR = void 0 !== this.shadowMinZ ? this.shadowMinZ : yR?.minZ || 0,
              iR = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : yR?.maxZ || 1e4,
              fR = this.jH().ke().LtR;
            uR.e.OrthoOffCenterLHToRef(this._orthoLeft - tR * this.shadowOrthoScale, this._orthoRight + tR * this.shadowOrthoScale, this._orthoBottom - ZR * this.shadowOrthoScale, this._orthoTop + ZR * this.shadowOrthoScale, fR ? iR : qR, fR ? qR : iR, RR, this.jH().ke().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(RR, JR) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, JR), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, JR), this)
          }
          transferToNodeMaterialEffect(RR, JR) {
            return this.computeTransformedInformation() ? (RR.setFloat3(JR, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (RR.setFloat3(JR, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(RR) {
            const JR = this._scene.ke();
            return !JR.LtR && JR.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(RR) {
            const JR = this._scene.ke();
            return JR.LtR && JR.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(RR, JR) {
            RR["DIRLIGHT" + JR] = !0
          }
        }, (() => {
          const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(eR[Symbol.metadata] ?? null) : void 0;
          JR = [(0, tR.H)()], GR = [(0, tR.H)()], iR = [(0, tR.H)()], fR = [(0, tR.H)()], VR = [(0, tR.H)("orthoLeft")], KR = [(0, tR.H)("orthoRight")], wR = [(0, tR.H)("orthoTop")], rR = [(0, tR.H)("orthoBottom")], (0, yR.l)(RR, null, JR, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: RR => "shadowFrustumSize" in RR,
              get: RR => RR.shadowFrustumSize
            },
            metadata: uR
          }, null, aR), (0, yR.l)(RR, null, GR, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: RR => "shadowOrthoScale" in RR,
              get: RR => RR.shadowOrthoScale
            },
            metadata: uR
          }, null, aR), (0, yR.l)(null, null, iR, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: RR => "autoUpdateExtends" in RR,
              get: RR => RR.autoUpdateExtends,
              set: (RR, JR) => {
                RR.autoUpdateExtends = JR
              }
            },
            metadata: uR
          }, LR, nR), (0, yR.l)(null, null, fR, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: RR => "autoCalcShadowZBounds" in RR,
              get: RR => RR.autoCalcShadowZBounds,
              set: (RR, JR) => {
                RR.autoCalcShadowZBounds = JR
              }
            },
            metadata: uR
          }, UR, WR), (0, yR.l)(null, null, VR, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: RR => "_orthoLeft" in RR,
              get: RR => RR._orthoLeft,
              set: (RR, JR) => {
                RR._orthoLeft = JR
              }
            },
            metadata: uR
          }, AR, CR), (0, yR.l)(null, null, KR, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: RR => "_orthoRight" in RR,
              get: RR => RR._orthoRight,
              set: (RR, JR) => {
                RR._orthoRight = JR
              }
            },
            metadata: uR
          }, XR, MR), (0, yR.l)(null, null, wR, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: RR => "_orthoTop" in RR,
              get: RR => RR._orthoTop,
              set: (RR, JR) => {
                RR._orthoTop = JR
              }
            },
            metadata: uR
          }, BR, lR), (0, yR.l)(null, null, rR, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: RR => "_orthoBottom" in RR,
              get: RR => RR._orthoBottom,
              set: (RR, JR) => {
                RR._orthoBottom = JR
              }
            },
            metadata: uR
          }, pR, gR), uR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uR
          })
        })(), RR
      })(),
      KR = !1;
    KR || (KR = !0, iR.d.AddNodeConstructor("Light_Type_1", ((RR, JR) => () => new VR(RR, uR.r.Zero(), JR))), (0, fR.f)("BABYLON.DirectionalLight", VR))
  },
  39941: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      g: () => uR,
      k: () => ZR,
      m: () => qR
    });
    var yR = GR(38331);
    class tR {
      constructor(RR, JR, GR) {
        this.gradient = RR, this.color1 = JR, this.color2 = GR
      }
      getColorToRef(RR) {
        this.color2 ? yR.e.LerpToRef(this.color1, this.color2, Math.random(), RR) : RR.vN(this.color1)
      }
    }
    class uR {
      constructor(RR, JR) {
        this.gradient = RR, this.color = JR
      }
    }
    class ZR {
      constructor(RR, JR, GR) {
        this.gradient = RR, this.factor1 = JR, this.factor2 = GR
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class qR {
      static GetCurrentGradient(RR, JR, GR) {
        if (JR[0].gradient > RR) return void GR(JR[0], JR[0], 1);
        for (let tR = 0; tR < JR.length - 1; tR++) {
          const yR = JR[tR],
            uR = JR[tR + 1];
          if (RR >= yR.gradient && RR <= uR.gradient) {
            return void GR(yR, uR, (RR - yR.gradient) / (uR.gradient - yR.gradient))
          }
        }
        const yR = JR.length - 1;
        GR(JR[yR], JR[yR], 1)
      }
    }
  },
  39943: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(38204),
      tR = GR(38239),
      uR = GR(39912);
    class ZR {
      constructor() {
        this.direction1 = new yR.r(0, 1, 0), this.direction2 = new yR.r(0, 1, 0), this.minEmitBox = new yR.r(-.5, -.5, -.5), this.maxEmitBox = new yR.r(.5, .5, .5)
      }
      startDirectionFunction(RR, JR, GR, uR) {
        const ZR = (0, tR.RandomRange)(this.direction1.x, this.direction2.x),
          qR = (0, tR.RandomRange)(this.direction1.y, this.direction2.y),
          iR = (0, tR.RandomRange)(this.direction1.z, this.direction2.z);
        if (uR) return JR.x = ZR, JR.y = qR, void(JR.z = iR);
        yR.r.TransformNormalFromFloatsToRef(ZR, qR, iR, RR, JR)
      }
      startPositionFunction(RR, JR, GR, uR) {
        const ZR = (0, tR.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          qR = (0, tR.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          iR = (0, tR.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (uR) return JR.x = ZR, JR.y = qR, void(JR.z = iR);
        yR.r.TransformCoordinatesFromFloatsToRef(ZR, qR, iR, RR, JR)
      }
      clone() {
        const RR = new ZR;
        return uR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        RR.setVector3("direction1", this.direction1), RR.setVector3("direction2", this.direction2), RR.setVector3("minEmitBox", this.minEmitBox), RR.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(RR) {
        RR.addUniform("direction1", 3), RR.addUniform("direction2", 3), RR.addUniform("minEmitBox", 3), RR.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const RR = {};
        return RR.type = this.getClassName(), RR.direction1 = this.direction1.QtR(), RR.direction2 = this.direction2.QtR(), RR.minEmitBox = this.minEmitBox.QtR(), RR.maxEmitBox = this.maxEmitBox.QtR(), RR
      }
      parse(RR) {
        yR.r.FromArrayToRef(RR.direction1, 0, this.direction1), yR.r.FromArrayToRef(RR.direction2, 0, this.direction2), yR.r.FromArrayToRef(RR.minEmitBox, 0, this.minEmitBox), yR.r.FromArrayToRef(RR.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39906: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      i: () => ZR
    });
    var yR = GR(38204),
      tR = GR(38239),
      uR = GR(39912);
    class ZR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = RR, this.height = JR, this.radiusRange = GR, this.directionRandomizer = tR, this._tempVector = yR.r.Zero()
      }
      startDirectionFunction(RR, JR, GR, uR, ZR) {
        GR.position.subtractToRef(RR.getTranslation(), this._tempVector), this._tempVector.normalize(), yR.r.TransformNormalToRef(this._tempVector, ZR, this._tempVector);
        const qR = (0, tR.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let iR = Math.atan2(this._tempVector.x, this._tempVector.z);
        iR += (0, tR.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = qR, this._tempVector.x = Math.sin(iR), this._tempVector.z = Math.cos(iR), this._tempVector.normalize(), uR ? JR.vN(this._tempVector) : yR.r.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, RR, JR)
      }
      startPositionFunction(RR, JR, GR, uR) {
        const ZR = (0, tR.RandomRange)(-this.height / 2, this.height / 2),
          qR = (0, tR.RandomRange)(0, 2 * Math.PI),
          iR = (0, tR.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          fR = Math.sqrt(iR) * this.radius,
          VR = fR * Math.cos(qR),
          KR = fR * Math.sin(qR);
        uR ? JR.VJR(VR, ZR, KR) : yR.r.TransformCoordinatesFromFloatsToRef(VR, ZR, KR, RR, JR)
      }
      clone() {
        const RR = new ZR(this.radius, this.directionRandomizer);
        return uR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        RR.setFloat("radius", this.radius), RR.setFloat("height", this.height), RR.setFloat("radiusRange", this.radiusRange), RR.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(RR) {
        RR.addUniform("radius", 1), RR.addUniform("height", 1), RR.addUniform("radiusRange", 1), RR.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const RR = {};
        return RR.type = this.getClassName(), RR.radius = this.radius, RR.height = this.height, RR.radiusRange = this.radiusRange, RR.directionRandomizer = this.directionRandomizer, RR
      }
      parse(RR) {
        this.radius = RR.radius, this.height = RR.height, this.radiusRange = RR.radiusRange, this.directionRandomizer = RR.directionRandomizer
      }
    }
    class qR extends ZR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new yR.r(0, 1, 0),
          uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new yR.r(0, 1, 0);
        super(RR, JR, GR), this.direction1 = tR, this.direction2 = uR
      }
      startDirectionFunction(RR, JR, GR, uR) {
        const ZR = (0, tR.RandomRange)(this.direction1.x, this.direction2.x),
          qR = (0, tR.RandomRange)(this.direction1.y, this.direction2.y),
          iR = (0, tR.RandomRange)(this.direction1.z, this.direction2.z);
        uR ? JR.VJR(ZR, qR, iR) : yR.r.TransformNormalFromFloatsToRef(ZR, qR, iR, RR, JR)
      }
      clone() {
        const RR = new qR(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return uR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        RR.setFloat("radius", this.radius), RR.setFloat("height", this.height), RR.setFloat("radiusRange", this.radiusRange), RR.setVector3("direction1", this.direction1), RR.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(RR) {
        RR.addUniform("radius", 1), RR.addUniform("height", 1), RR.addUniform("radiusRange", 1), RR.addUniform("direction1", 3), RR.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const RR = super.serialize();
        return RR.direction1 = this.direction1.QtR(), RR.direction2 = this.direction2.QtR(), RR
      }
      parse(RR) {
        super.parse(RR), yR.r.FromArrayToRef(RR.direction1, 0, this.direction1), yR.r.FromArrayToRef(RR.direction2, 0, this.direction2)
      }
    }
  },
  53576: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => EJ
    });
    var yR = GR(39941),
      tR = GR(38233),
      uR = GR(38204),
      ZR = GR(41663),
      qR = GR(53579),
      iR = GR(38224),
      fR = GR(41797),
      VR = GR(38331),
      KR = GR(39943),
      wR = GR(39912),
      rR = GR(38239);
    class eR {
      constructor() {
        this.direction1 = new uR.r(0, 1, 0), this.direction2 = new uR.r(0, 1, 0)
      }
      startDirectionFunction(RR, JR, GR, yR) {
        const tR = (0, rR.RandomRange)(this.direction1.x, this.direction2.x),
          ZR = (0, rR.RandomRange)(this.direction1.y, this.direction2.y),
          qR = (0, rR.RandomRange)(this.direction1.z, this.direction2.z);
        yR ? JR.VJR(tR, ZR, qR) : uR.r.TransformNormalFromFloatsToRef(tR, ZR, qR, RR, JR)
      }
      startPositionFunction(RR, JR, GR, yR) {
        yR ? JR.VJR(0, 0, 0) : uR.r.TransformCoordinatesFromFloatsToRef(0, 0, 0, RR, JR)
      }
      clone() {
        const RR = new eR;
        return wR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        RR.setVector3("direction1", this.direction1), RR.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(RR) {
        RR.addUniform("direction1", 3), RR.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const RR = {};
        return RR.type = this.getClassName(), RR.direction1 = this.direction1.QtR(), RR.direction2 = this.direction2.QtR(), RR
      }
      parse(RR) {
        uR.r.FromArrayToRef(RR.direction1, 0, this.direction1), uR.r.FromArrayToRef(RR.direction2, 0, this.direction2)
      }
    }
    class aR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = RR, this.radiusRange = JR, this.directionRandomizer = GR
      }
      startDirectionFunction(RR, JR, GR, yR) {
        const tR = GR.position.subtract(RR.getTranslation()).normalize(),
          ZR = (0, rR.RandomRange)(0, this.directionRandomizer),
          qR = (0, rR.RandomRange)(0, this.directionRandomizer),
          iR = (0, rR.RandomRange)(0, this.directionRandomizer);
        tR.x += ZR, tR.y += qR, tR.z += iR, tR.normalize(), yR ? JR.vN(tR) : uR.r.TransformNormalFromFloatsToRef(tR.x, tR.y, tR.z, RR, JR)
      }
      startPositionFunction(RR, JR, GR, yR) {
        const tR = this.radius - (0, rR.RandomRange)(0, this.radius * this.radiusRange),
          ZR = (0, rR.RandomRange)(0, 1),
          qR = (0, rR.RandomRange)(0, 2 * Math.PI),
          iR = Math.acos(2 * ZR - 1),
          fR = tR * Math.cos(qR) * Math.sin(iR),
          VR = tR * Math.cos(iR),
          KR = tR * Math.sin(qR) * Math.sin(iR);
        yR ? JR.VJR(fR, Math.abs(VR), KR) : uR.r.TransformCoordinatesFromFloatsToRef(fR, Math.abs(VR), KR, RR, JR)
      }
      clone() {
        const RR = new aR(this.radius, this.directionRandomizer);
        return wR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        RR.setFloat("radius", this.radius), RR.setFloat("radiusRange", this.radiusRange), RR.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(RR) {
        RR.addUniform("radius", 1), RR.addUniform("radiusRange", 1), RR.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const RR = {};
        return RR.type = this.getClassName(), RR.radius = this.radius, RR.radiusRange = this.radiusRange, RR.directionRandomizer = this.directionRandomizer, RR
      }
      parse(RR) {
        this.radius = RR.radius, this.radiusRange = RR.radiusRange, this.directionRandomizer = RR.directionRandomizer
      }
    }
    class LR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = RR, this.radiusRange = JR, this.directionRandomizer = GR
      }
      startDirectionFunction(RR, JR, GR, yR) {
        const tR = GR.position.subtract(RR.getTranslation()).normalize(),
          ZR = (0, rR.RandomRange)(0, this.directionRandomizer),
          qR = (0, rR.RandomRange)(0, this.directionRandomizer),
          iR = (0, rR.RandomRange)(0, this.directionRandomizer);
        tR.x += ZR, tR.y += qR, tR.z += iR, tR.normalize(), yR ? JR.vN(tR) : uR.r.TransformNormalFromFloatsToRef(tR.x, tR.y, tR.z, RR, JR)
      }
      startPositionFunction(RR, JR, GR, yR) {
        const tR = this.radius - (0, rR.RandomRange)(0, this.radius * this.radiusRange),
          ZR = (0, rR.RandomRange)(0, 1),
          qR = (0, rR.RandomRange)(0, 2 * Math.PI),
          iR = Math.acos(2 * ZR - 1),
          fR = tR * Math.cos(qR) * Math.sin(iR),
          VR = tR * Math.cos(iR),
          KR = tR * Math.sin(qR) * Math.sin(iR);
        yR ? JR.VJR(fR, VR, KR) : uR.r.TransformCoordinatesFromFloatsToRef(fR, VR, KR, RR, JR)
      }
      clone() {
        const RR = new LR(this.radius, this.directionRandomizer);
        return wR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        RR.setFloat("radius", this.radius), RR.setFloat("radiusRange", this.radiusRange), RR.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(RR) {
        RR.addUniform("radius", 1), RR.addUniform("radiusRange", 1), RR.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const RR = {};
        return RR.type = this.getClassName(), RR.radius = this.radius, RR.radiusRange = this.radiusRange, RR.directionRandomizer = this.directionRandomizer, RR
      }
      parse(RR) {
        this.radius = RR.radius, this.radiusRange = RR.radiusRange, this.directionRandomizer = RR.directionRandomizer
      }
    }
    class nR extends LR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new uR.r(0, 1, 0),
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uR.r(0, 1, 0);
        super(RR), this.direction1 = JR, this.direction2 = GR
      }
      startDirectionFunction(RR, JR, GR, yR) {
        const tR = (0, rR.RandomRange)(this.direction1.x, this.direction2.x),
          ZR = (0, rR.RandomRange)(this.direction1.y, this.direction2.y),
          qR = (0, rR.RandomRange)(this.direction1.z, this.direction2.z);
        yR ? JR.VJR(tR, ZR, qR) : uR.r.TransformNormalFromFloatsToRef(tR, ZR, qR, RR, JR)
      }
      clone() {
        const RR = new nR(this.radius, this.direction1, this.direction2);
        return wR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        RR.setFloat("radius", this.radius), RR.setFloat("radiusRange", this.radiusRange), RR.setVector3("direction1", this.direction1), RR.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(RR) {
        RR.addUniform("radius", 1), RR.addUniform("radiusRange", 1), RR.addUniform("direction1", 3), RR.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const RR = super.serialize();
        return RR.direction1 = this.direction1.QtR(), RR.direction2 = this.direction2.QtR(), RR
      }
      parse(RR) {
        super.parse(RR), uR.r.FromArrayToRef(RR.direction1, 0, this.direction1), uR.r.FromArrayToRef(RR.direction2, 0, this.direction2)
      }
    }
    var UR = GR(39906);
    class WR {
      get radius() {
        return this._radius
      }
      set radius(RR) {
        this._radius = RR, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(RR) {
        this._angle = RR, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = GR, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = JR, this.radius = RR
      }
      startDirectionFunction(RR, JR, GR, yR) {
        const tR = GR.position.subtract(RR.getTranslation()).normalize(),
          ZR = (0, rR.RandomRange)(0, this.directionRandomizer),
          qR = (0, rR.RandomRange)(0, this.directionRandomizer),
          iR = (0, rR.RandomRange)(0, this.directionRandomizer);
        tR.x += ZR, tR.y += qR, tR.z += iR, tR.normalize(), yR ? JR.vN(tR) : uR.r.TransformNormalFromFloatsToRef(tR.x, tR.y, tR.z, RR, JR)
      }
      startPositionFunction(RR, JR, GR, yR) {
        const tR = (0, rR.RandomRange)(0, 2 * Math.PI);
        let ZR;
        this.emitFromSpawnPointOnly ? ZR = 1e-4 : (ZR = (0, rR.RandomRange)(0, this.heightRange), ZR = 1 - ZR * ZR);
        let qR = this._radius - (0, rR.RandomRange)(0, this._radius * this.radiusRange);
        qR *= ZR;
        const iR = qR * Math.sin(tR),
          fR = qR * Math.cos(tR),
          VR = ZR * this._height;
        if (yR) return JR.x = iR, JR.y = VR, void(JR.z = fR);
        uR.r.TransformCoordinatesFromFloatsToRef(iR, VR, fR, RR, JR)
      }
      clone() {
        const RR = new WR(this._radius, this._angle, this.directionRandomizer);
        return wR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        RR.setFloat2("radius", this._radius, this.radiusRange), RR.setFloat("coneAngle", this._angle), RR.setFloat2("height", this._height, this.heightRange), RR.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(RR) {
        RR.addUniform("radius", 2), RR.addUniform("coneAngle", 1), RR.addUniform("height", 2), RR.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let RR = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (RR += "\n#define CONEEMITTERSPAWNPOINT"), RR
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const RR = {};
        return RR.type = this.getClassName(), RR.radius = this._radius, RR.angle = this._angle, RR.directionRandomizer = this.directionRandomizer, RR.radiusRange = this.radiusRange, RR.heightRange = this.heightRange, RR.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, RR
      }
      parse(RR) {
        this.radius = RR.radius, this.angle = RR.angle, this.directionRandomizer = RR.directionRandomizer, this.radiusRange = void 0 !== RR.radiusRange ? RR.radiusRange : 1, this.heightRange = void 0 !== RR.heightRange ? RR.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== RR.emitFromSpawnPointOnly && RR.emitFromSpawnPointOnly
      }
    }
    class AR extends WR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uR.r(0, 1, 0),
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uR.r(0, 1, 0);
        super(RR, JR), this.direction1 = GR, this.direction2 = yR
      }
      startDirectionFunction(RR, JR, GR, yR) {
        const tR = (0, rR.RandomRange)(this.direction1.x, this.direction2.x),
          ZR = (0, rR.RandomRange)(this.direction1.y, this.direction2.y),
          qR = (0, rR.RandomRange)(this.direction1.z, this.direction2.z);
        yR ? JR.VJR(tR, ZR, qR) : uR.r.TransformNormalFromFloatsToRef(tR, ZR, qR, RR, JR)
      }
      clone() {
        const RR = new AR(this.radius, this.angle, this.direction1, this.direction2);
        return wR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        super.applyToShader(RR), RR.setVector3("direction1", this.direction1), RR.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(RR) {
        super.buildUniformLayout(RR), RR.addUniform("direction1", 3), RR.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const RR = super.serialize();
        return RR.direction1 = this.direction1.QtR(), RR.direction2 = this.direction2.QtR(), RR
      }
      parse(RR) {
        super.parse(RR), uR.r.FromArrayToRef(RR.direction1, 0, this.direction1), uR.r.FromArrayToRef(RR.direction2, 0, this.direction2)
      }
    }
    class CR {
      get mesh() {
        return this._mesh
      }
      set mesh(RR) {
        this._mesh !== RR && (this._mesh = RR, RR ? (this._indices = RR.NuR(), this._positions = RR.getVerticesData(ZR.l.PositionKind), this._normals = RR.getVerticesData(ZR.l.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = uR.r.Zero(), this._mesh = null, this.direction1 = new uR.r(0, 1, 0), this.direction2 = new uR.r(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = RR
      }
      startDirectionFunction(RR, JR, GR, yR) {
        if (this.useMeshNormalsForDirection && this._normals) return void uR.r.TransformNormalToRef(this._storedNormal, RR, JR);
        const tR = (0, rR.RandomRange)(this.direction1.x, this.direction2.x),
          ZR = (0, rR.RandomRange)(this.direction1.y, this.direction2.y),
          qR = (0, rR.RandomRange)(this.direction1.z, this.direction2.z);
        yR ? JR.VJR(tR, ZR, qR) : uR.r.TransformNormalFromFloatsToRef(tR, ZR, qR, RR, JR)
      }
      startPositionFunction(RR, JR, GR, yR) {
        if (!this._indices || !this._positions) return;
        const tR = 3 * (Math.random() * (this._indices.length / 3) | 0),
          ZR = Math.random(),
          qR = Math.random() * (1 - ZR),
          iR = 1 - ZR - qR,
          fR = this._indices[tR],
          VR = this._indices[tR + 1],
          KR = this._indices[tR + 2],
          wR = uR.l.Fe[0],
          rR = uR.l.Fe[1],
          eR = uR.l.Fe[2],
          aR = uR.l.Fe[3];
        uR.r.FromArrayToRef(this._positions, 3 * fR, wR), uR.r.FromArrayToRef(this._positions, 3 * VR, rR), uR.r.FromArrayToRef(this._positions, 3 * KR, eR), aR.x = ZR * wR.x + qR * rR.x + iR * eR.x, aR.y = ZR * wR.y + qR * rR.y + iR * eR.y, aR.z = ZR * wR.z + qR * rR.z + iR * eR.z, yR ? JR.VJR(aR.x, aR.y, aR.z) : uR.r.TransformCoordinatesFromFloatsToRef(aR.x, aR.y, aR.z, RR, JR), this.useMeshNormalsForDirection && this._normals && (uR.r.FromArrayToRef(this._normals, 3 * fR, wR), uR.r.FromArrayToRef(this._normals, 3 * VR, rR), uR.r.FromArrayToRef(this._normals, 3 * KR, eR), this._storedNormal.x = ZR * wR.x + qR * rR.x + iR * eR.x, this._storedNormal.y = ZR * wR.y + qR * rR.y + iR * eR.y, this._storedNormal.z = ZR * wR.z + qR * rR.z + iR * eR.z)
      }
      clone() {
        const RR = new CR(this.mesh);
        return wR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        RR.setVector3("direction1", this.direction1), RR.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(RR) {
        RR.addUniform("direction1", 3), RR.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const RR = {};
        return RR.type = this.getClassName(), RR.direction1 = this.direction1.QtR(), RR.direction2 = this.direction2.QtR(), RR.meshId = this.mesh?.id, RR.useMeshNormalsForDirection = this.useMeshNormalsForDirection, RR
      }
      parse(RR, JR) {
        uR.r.FromArrayToRef(RR.direction1, 0, this.direction1), uR.r.FromArrayToRef(RR.direction2, 0, this.direction2), RR.meshId && JR && (this.mesh = JR.getLastMeshById(RR.meshId)), this.useMeshNormalsForDirection = RR.useMeshNormalsForDirection
      }
    }
    class XR {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(RR) {
        this._targetStopDuration !== RR && (this._targetStopDuration = RR)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(RR) {
        this._noiseTexture !== RR && (this._noiseTexture = RR, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(RR) {
        this._attractors.push(RR)
      }
      removeAttractor(RR) {
        const JR = this._attractors.indexOf(RR); - 1 !== JR && this._attractors.splice(JR, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(RR) {
        this._animationSheetEnabled !== RR && (this._animationSheetEnabled = RR)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(RR) {
        this._isAnimationSheetEnabled != RR && (this._isAnimationSheetEnabled = RR, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(RR) {
        this._useLogarithmicDepth = RR && this.jH().ke().getCaps().fragmentDepthSupported
      }
      jH() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(RR) {
        switch (RR) {
          case XR.BLENDMODE_MULTIPLYADD:
            return;
          case XR.BLENDMODE_ADD:
            RR = 1;
            break;
          case XR.BLENDMODE_ONEONE:
            RR = 6;
            break;
          case XR.BLENDMODE_STANDARD:
            RR = 2;
            break;
          case XR.BLENDMODE_MULTIPLY:
            RR = 4;
            break;
          case XR.BLENDMODE_SUBTRACT:
            RR = 3
        }
        this._engine.setAlphaMode(RR)
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
      addEmitRateGradient(RR, JR, GR) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, RR, JR, GR), this
      }
      removeEmitRateGradient(RR) {
        return this._removeFactorGradient(this._emitRateGradients, RR), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : uR.r.Zero()
      }
      set direction1(RR) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = RR)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : uR.r.Zero()
      }
      set direction2(RR) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = RR)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : uR.r.Zero()
      }
      set minEmitBox(RR) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = RR)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : uR.r.Zero()
      }
      set maxEmitBox(RR) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = RR)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(RR) {
        this._billboardMode !== RR && (this._billboardMode = RR, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(RR) {
        this._isBillboardBased !== RR && (this._isBillboardBased = RR, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(RR) {
        this._attachImageProcessingConfiguration(RR)
      }
      _attachImageProcessingConfiguration(RR) {
        RR !== this._imageProcessingConfiguration && (!RR && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = RR)
      }
      _reset() {}
      _addFactorGradient(RR, JR, GR, tR) {
        const uR = new yR.k(JR, GR, tR);
        RR.push(uR), RR.sort(((RR, JR) => RR.gradient < JR.gradient ? -1 : RR.gradient > JR.gradient ? 1 : 0))
      }
      _removeFactorGradient(RR, JR) {
        if (!RR) return;
        let GR = 0;
        for (const yR of RR) {
          if (yR.gradient === JR) {
            RR.splice(GR, 1);
            break
          }
          GR++
        }
      }
      _removeGradientAndTexture(RR, JR, GR) {
        if (!JR) return this;
        let yR = 0;
        for (const tR of JR) {
          if (tR.gradient === RR) {
            JR.splice(yR, 1);
            break
          }
          yR++
        }
        return GR && GR.dispose(), this
      }
      constructor(RR) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = uR.r.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new uR.r(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = XR.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new uR.n(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new uR.r(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = uR.r.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new VR.e(1, 1, 1, 1), this.color2 = new VR.e(1, 1, 1, 1), this.colorDead = new VR.e(0, 0, 0, 1), this.textureMask = new VR.e(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new fR.b, this.id = RR, this.name = RR
      }
      createPointEmitter(RR, JR) {
        const GR = function(RR, JR) {
          const GR = new eR;
          return GR.direction1 = RR, GR.direction2 = JR, GR
        }(RR, JR);
        return this.particleEmitterType = GR, GR
      }
      createHemisphericEmitter() {
        const RR = function() {
          return new aR(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = RR, RR
      }
      createSphereEmitter() {
        const RR = function() {
          return new LR(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = RR, RR
      }
      createDirectedSphereEmitter() {
        const RR = function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new uR.r(0, 1, 0),
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uR.r(0, 1, 0);
          return new nR(RR, JR, GR)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new uR.r(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uR.r(0, 1, 0));
        return this.particleEmitterType = RR, RR
      }
      createCylinderEmitter() {
        const RR = function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new UR.i(RR, JR, GR, yR)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = RR, RR
      }
      createDirectedCylinderEmitter() {
        const RR = function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uR.r(0, 1, 0),
            tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new uR.r(0, 1, 0);
          return new UR.e(RR, JR, GR, yR, tR)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uR.r(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new uR.r(0, 1, 0));
        return this.particleEmitterType = RR, RR
      }
      createConeEmitter() {
        const RR = function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new WR(RR, JR)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = RR, RR
      }
      createDirectedConeEmitter() {
        const RR = function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uR.r(0, 1, 0),
            yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uR.r(0, 1, 0);
          return new AR(RR, JR, GR, yR)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uR.r(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uR.r(0, 1, 0));
        return this.particleEmitterType = RR, RR
      }
      createBoxEmitter(RR, JR, GR, yR) {
        const tR = new KR.b;
        return this.particleEmitterType = tR, this.direction1 = RR, this.direction2 = JR, this.minEmitBox = GR, this.maxEmitBox = yR, tR
      }
      createMeshEmitter() {
        const RR = function() {
          return new CR(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = RR, RR
      }
    }
    XR.BLENDMODE_ONEONE = 0, XR.BLENDMODE_STANDARD = 1, XR.BLENDMODE_ADD = 2, XR.BLENDMODE_MULTIPLY = 3, XR.BLENDMODE_MULTIPLYADD = 4, XR.BLENDMODE_SUBTRACT = -1;
    class MR {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new VR.e(0, 0, 0, 0), this.currentColor2 = new VR.e(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = uR.r.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class BR {
      constructor(RR) {
        this.particleSystem = RR, this.position = uR.r.Zero(), this.direction = uR.r.Zero(), this.color = new VR.e(0, 0, 0, 0), this.colorStep = new VR.e(0, 0, 0, 0), this.initialColor = new VR.e(0, 0, 0, 0), this.colorDead = new VR.e(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new uR.n(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new MR, this.id = BR._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let RR = this.age,
          JR = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === JR ? (JR = 1, RR = this._properties.randomCellOffset) : RR += this._properties.randomCellOffset);
        const GR = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let yR;
        yR = this._properties.initialSpriteCellLoop ? (0, rR.Clamp)(RR * JR % this.lifeTime / this.lifeTime) : (0, rR.Clamp)(RR * JR / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + yR * GR | 0
      }
      _inheritParticleInfoToSubEmitter(RR) {
        if (RR.particleSystem.emitter.position) {
          const JR = RR.particleSystem.emitter;
          if (JR.position.vN(this.position), RR.inheritDirection) {
            const RR = uR.l.Fe[0];
            this.direction.normalizeToRef(RR), JR.setDirection(RR, 0, Math.PI / 2)
          }
        } else {
          RR.particleSystem.emitter.vN(this.position)
        }
        this.direction.scaleToRef(RR.inheritedVelocityAmount / 2, uR.l.Fe[0]), RR.particleSystem._inheritedVelocityOffset.vN(uR.l.Fe[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const RR of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(RR)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = BR._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(RR) {
        RR.position.vN(this.position), this._properties.initialDirection ? RR._properties.initialDirection ? RR._properties.initialDirection.vN(this._properties.initialDirection) : RR._properties.initialDirection = this._properties.initialDirection.clone() : RR._properties.initialDirection = null, RR.direction.vN(this.direction), this._properties.localPosition && (RR._properties.localPosition ? RR._properties.localPosition.vN(this._properties.localPosition) : RR._properties.localPosition = this._properties.localPosition.clone()), RR.color.vN(this.color), RR.colorStep.vN(this.colorStep), RR.initialColor.vN(this.initialColor), RR.colorDead.vN(this.colorDead), RR.lifeTime = this.lifeTime, RR.age = this.age, RR._properties.randomCellOffset = this._properties.randomCellOffset, RR.size = this.size, RR.scale.vN(this.scale), RR.angle = this.angle, RR.angularSpeed = this.angularSpeed, RR.particleSystem = this.particleSystem, RR.cellIndex = this.cellIndex, RR.id = this.id, RR._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (RR._properties.currentColorGradient = this._properties.currentColorGradient, RR._properties.currentColor1.vN(this._properties.currentColor1), RR._properties.currentColor2.vN(this._properties.currentColor2)), this._properties.currentSizeGradient && (RR._properties.currentSizeGradient = this._properties.currentSizeGradient, RR._properties.currentSize1 = this._properties.currentSize1, RR._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (RR._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, RR._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, RR._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (RR._properties.currentVelocityGradient = this._properties.currentVelocityGradient, RR._properties.currentVelocity1 = this._properties.currentVelocity1, RR._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (RR._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, RR._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, RR._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (RR._properties.currentDragGradient = this._properties.currentDragGradient, RR._properties.currentDrag1 = this._properties.currentDrag1, RR._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (RR._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, RR._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, RR._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (RR.remapData && this.remapData ? RR.remapData.vN(this.remapData) : RR.remapData = new uR.s(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (RR._properties.randomNoiseCoordinates1 && RR._properties.randomNoiseCoordinates2 ? (RR._properties.randomNoiseCoordinates1.vN(this._properties.randomNoiseCoordinates1), RR._properties.randomNoiseCoordinates2.vN(this._properties.randomNoiseCoordinates2)) : (RR._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), RR._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), RR.metadata = this.metadata
      }
    }
    BR._Count = 0;
    var lR = GR(42635);
    class pR {
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
      constructor(RR, JR, GR, yR) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = JR, this.bK = RR, this._scene = GR, this._host = yR, this._activeTargets = [], JR._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            nG: this._getCorrectLoopMode()
          }, this._animation.dataType === lR.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = uR.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const RR = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, RR)
        }
        if (this.bK instanceof Array) {
          let RR = 0;
          for (const JR of this.bK) this._preparePath(JR, RR), this._getOriginalValues(RR), RR++;
          this._targetIsArray = !0
        } else this._preparePath(this.bK), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const tR = JR.getEvents();
        if (tR && tR.length > 0)
          for (const uR of tR) this._events.push(uR._clone());
        this._enableBlending = RR && RR.animationPropertiesOverride ? RR.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GR = this._animation.targetPropertyPath;
        if (GR.length > 1) {
          let yR = RR;
          for (let RR = 0; RR < GR.length - 1; RR++) {
            const JR = GR[RR];
            if (yR = yR[JR], void 0 === yR) throw new Error(`Invalid property (${JR}) in property path (${GR.join(".")})`)
          }
          this._targetPath = GR[GR.length - 1], this._activeTargets[JR] = yR
        } else this._targetPath = GR[0], this._activeTargets[JR] = RR;
        if (void 0 === this._activeTargets[JR][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${GR.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.bK instanceof Array) {
            let RR = 0;
            for (const JR of this.bK) void 0 !== this._originalValue[RR] && this._setValue(JR, this._activeTargets[RR], this._originalValue[RR], -1, RR), RR++
          } else void 0 !== this._originalValue[0] && this._setValue(this.bK, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let RR = 0; RR < this._events.length; RR++) this._events[RR].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const RR = this._animation.runtimeAnimations.indexOf(this);
        RR > -1 && this._animation.runtimeAnimations.splice(RR, 1)
      }
      setValue(RR, JR) {
        if (this._targetIsArray)
          for (let GR = 0; GR < this.bK.length; GR++) {
            const yR = this.bK[GR];
            this._setValue(yR, this._activeTargets[GR], RR, JR, GR)
          } else this._setValue(this.bK, this._directTarget, RR, JR, 0)
      }
      _getOriginalValues() {
        let RR, JR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const GR = this._activeTargets[JR];
        if (lR.d.InheritOriginalValueFromActiveAnimations) {
          const RR = this._scene._activeAnimatables;
          for (let yR = 0; yR < RR.length; yR++) {
            const tR = RR[yR]._runtimeAnimations;
            for (let RR = 0; RR < tR.length; RR++) {
              const yR = tR[RR];
              if (yR !== this && yR._targetPath === this._targetPath)
                for (let RR = 0; RR < yR._activeTargets.length; RR++)
                  if (yR._activeTargets[RR] === GR && void 0 !== yR._originalValue[RR]) return void(yR._originalValue[RR] && yR._originalValue[RR].clone ? this._originalValue[JR] = yR._originalValue[RR].clone() : this._originalValue[JR] = yR._originalValue[RR])
            }
          }
        }
        RR = GR.getLocalMatrix && "_matrix" === this._targetPath ? GR.getLocalMatrix() : GR[this._targetPath], RR && RR.clone ? this._originalValue[JR] = RR.clone() : this._originalValue[JR] = RR
      }
      _registerTargetForLateAnimationBinding(RR, JR) {
        const GR = RR.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(GR), GR._lateAnimationHolders || (GR._lateAnimationHolders = {}), GR._lateAnimationHolders[RR.targetPath] || (GR._lateAnimationHolders[RR.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: JR
        }), RR.isAdditive ? (GR._lateAnimationHolders[RR.targetPath].additiveAnimations.push(RR), GR._lateAnimationHolders[RR.targetPath].totalAdditiveWeight += RR.weight) : (GR._lateAnimationHolders[RR.targetPath].animations.push(RR), GR._lateAnimationHolders[RR.targetPath].totalWeight += RR.weight)
      }
      _setValue(RR, JR, GR, yR, tR) {
        const ZR = this._scene._animationWrites,
          qR = this._scene._animationWriteCount++;
        let iR = ZR[qR];
        if (iR || (iR = ZR[qR] = {
            runtimeAnimation: this,
            target: RR,
            weight: yR,
            additive: !1,
            blendingFactor: 1,
            lL: !1
          }), iR.runtimeAnimation = this, iR.target = RR, iR.weight = yR, iR.additive = this.isAdditive, iR.lL = !1, this._currentActiveTarget = JR, this._weight = yR, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const RR = JR[this._targetPath];
            RR.clone ? this._originalBlendValue = RR.clone() : this._originalBlendValue = RR
          }
          this._originalBlendValue.m ? lR.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? uR.e.DecomposeLerpToRef(this._originalBlendValue, GR, this._blendingFactor, this._currentValue) : this._currentValue = uR.e.DecomposeLerp(this._originalBlendValue, GR, this._blendingFactor) : this._currentValue ? uR.e.LerpToRef(this._originalBlendValue, GR, this._blendingFactor, this._currentValue) : this._currentValue = uR.e.Lerp(this._originalBlendValue, GR, this._blendingFactor) : this._currentValue = lR.d._UniversalLerp(this._originalBlendValue, GR, this._blendingFactor);
          const yR = RR && RR.animationPropertiesOverride ? RR.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          iR.blendingFactor = this._blendingFactor, this._blendingFactor += yR
        } else iR.blendingFactor = 1, this._currentValue ? this._currentValue.vN ? this._currentValue.vN(GR) : this._currentValue = GR : this._currentValue = GR?.clone ? GR.clone() : GR; - 1 !== yR ? this._registerTargetForLateAnimationBinding(this, this._originalValue[tR]) : this._animationState.nG === lR.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[tR], JR[this._targetPath]) : JR[this._targetPath] = this._originalValue[tR] + this._currentValue : JR[this._targetPath] = this._currentValue, RR.hGR && RR.hGR(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.bK && this.bK.animationPropertiesOverride) {
          return "MorphTarget" === this.bK.getClassName?.() && null == this.bK._animationPropertiesOverride ? this._animation.nG : this.bK.animationPropertiesOverride.nG
        }
        return this._animation.nG
      }
      goToFrame(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const GR = this._animation.getKeys();
        RR < GR[0].frame ? RR = GR[0].frame : RR > GR[GR.length - 1].frame && (RR = GR[GR.length - 1].frame);
        const yR = this._events;
        if (yR.length)
          for (let uR = 0; uR < yR.length; uR++) yR[uR].onlyOnce || (yR[uR].isDone = yR[uR].frame < RR);
        this._currentFrame = RR;
        const tR = this._animation._interpolate(RR, this._animationState);
        this.setValue(tR, JR)
      }
      _prepareForSpeedRatioChange(RR) {
        const JR = this._previousElapsedTime * (this._animation.framePerSecond * RR) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - JR
      }
      animate(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const ZR = this._animation,
          qR = ZR.targetPropertyPath;
        if (!qR || qR.length < 1) return this._stopped = !0, !1;
        let iR, fR = !0;
        const VR = this._events;
        let KR;
        if (this._coreRuntimeAnimation) KR = GR - JR, iR = this._coreRuntimeAnimation.currentFrame, this._currentFrame = iR, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let uR;
          (JR < this._minFrame || JR > this._maxFrame) && (JR = this._minFrame), (GR < this._minFrame || GR > this._maxFrame) && (GR = this._maxFrame), KR = GR - JR;
          let qR = RR * (ZR.framePerSecond * tR) / 1e3 + this._absoluteFrameOffset,
            wR = 0,
            rR = !1;
          const eR = yR && this._animationState.nG === lR.d.ANIMATIONLOOPMODE_YOYO;
          if (eR) {
            const RR = (qR - JR) / KR,
              GR = Math.sin(RR * Math.PI);
            qR = Math.abs(GR) * KR + JR;
            const yR = GR >= 0 ? 1 : -1;
            this._yoyoDirection !== yR && (rR = !0), this._yoyoDirection = yR
          }
          if (this._previousElapsedTime = RR, this._previousAbsoluteFrame = qR, !yR && GR >= JR && (qR >= KR && tR > 0 || qR <= 0 && tR < 0)) fR = !1, wR = ZR.evaluate(GR);
          else if (!yR && JR >= GR && (qR <= KR && tR < 0 || qR >= 0 && tR > 0)) fR = !1, wR = ZR.evaluate(JR);
          else if (this._animationState.nG !== lR.d.ANIMATIONLOOPMODE_CYCLE) {
            const RR = GR.toString() + JR.toString();
            if (!this._offsetsCache[RR]) {
              this._animationState.repeatCount = 0, this._animationState.nG = lR.d.ANIMATIONLOOPMODE_CYCLE;
              const yR = ZR._interpolate(JR, this._animationState),
                tR = ZR._interpolate(GR, this._animationState);
              switch (this._animationState.nG = this._getCorrectLoopMode(), ZR.dataType) {
                case lR.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[RR] = tR - yR;
                  break;
                case lR.d.ANIMATIONTYPE_QUATERNION:
                case lR.d.ANIMATIONTYPE_VECTOR3:
                case lR.d.ANIMATIONTYPE_VECTOR2:
                case lR.d.ANIMATIONTYPE_SIZE:
                case lR.d.ANIMATIONTYPE_COLOR3:
                case lR.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[RR] = tR.subtract(yR)
              }
              this._highLimitsCache[RR] = tR
            }
            wR = this._highLimitsCache[RR], uR = this._offsetsCache[RR]
          }
          if (void 0 === uR) switch (ZR.dataType) {
            case lR.d.ANIMATIONTYPE_FLOAT:
              uR = 0;
              break;
            case lR.d.ANIMATIONTYPE_QUATERNION:
              uR = lR.o;
              break;
            case lR.d.ANIMATIONTYPE_VECTOR3:
              uR = lR.x;
              break;
            case lR.d.ANIMATIONTYPE_VECTOR2:
              uR = lR.u;
              break;
            case lR.d.ANIMATIONTYPE_SIZE:
              uR = lR.q;
              break;
            case lR.d.ANIMATIONTYPE_COLOR3:
              uR = lR.h;
              break;
            case lR.d.ANIMATIONTYPE_COLOR4:
              uR = lR.k
          }
          const aR = this._host ? this._host.syncRoot : null;
          let LR, nR = this._playbackFrames,
            UR = !1;
          if (aR) {
            const RR = aR.toFrame - aR.fromFrame,
              GR = aR.masterFrame,
              yR = (GR - aR.fromFrame) / RR;
            iR = JR + KR * yR;
            const tR = aR.getAnimations()[0];
            if (tR && 0 !== RR) {
              const RR = KR * yR,
                JR = tR._playbackTo - tR._playbackFrom;
              if (0 !== JR && tR._playbackFrom <= aR.fromFrame && tR._playbackTo >= aR.toFrame) {
                nR = KR * Math.round((tR._playbackFrames - (tR._currentFrame - tR._playbackFrom)) / JR) + RR
              } else UR = (GR - this._playbackSyncMasterFrame) * (tR._playbackFrames - this._playbackSyncMasterPlayed) < 0, nR = RR;
              UR = UR || tR._playbackJumped, this._playbackSyncMasterPlayed = tR._playbackFrames, this._playbackSyncMasterFrame = GR
            }
          } else iR = qR > 0 && JR > GR || qR < 0 && JR < GR ? fR && 0 !== KR ? GR + qR % KR : JR : fR && 0 !== KR ? JR + qR % KR : GR;
          if (!eR && (tR > 0 && this.currentFrame > iR || tR < 0 && this.currentFrame < iR) || eR && rR) {
            this._onLoop();
            for (let RR = 0; RR < VR.length; RR++) VR[RR].onlyOnce || (VR[RR].isDone = !1);
            this._animationState.key = tR > 0 ? 0 : ZR.getKeys().length - 1
          }
          if (this._currentFrame = iR, this._animationState.repeatCount = 0 === KR ? 0 : qR / KR | 0, this._animationState.highLimitValue = wR, this._animationState.offsetValue = uR, this._playbackFrom = JR, this._playbackTo = GR, this._playbackJumped = UR, this._playbackSyncRoot = aR, aR) LR = nR;
          else if (fR) LR = eR ? iR === JR && qR === GR ? KR : iR - JR : qR;
          else {
            const RR = 0 !== KR ? Math.floor(this._playbackFrames / KR) : 0;
            LR = (iR === GR ? RR + 1 : RR) * KR
          }
          this._playbackFrames = LR, this._playbackProgress = this._animationState.nG === lR.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? KR : LR
        }
        const wR = ZR._interpolate(iR, this._animationState);
        if (this.setValue(wR, uR), VR.length)
          for (let rR = 0; rR < VR.length; rR++)
            if (KR >= 0 && iR >= VR[rR].frame && VR[rR].frame >= JR || KR < 0 && iR <= VR[rR].frame && VR[rR].frame <= JR) {
              const RR = VR[rR];
              RR.isDone || (RR.onlyOnce && (VR.splice(rR, 1), rR--), RR.isDone = !0, RR.action(iR))
            } return fR || (this._stopped = !0), fR
      }
    }
    var gR = GR(41425);
    class bR {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(RR) {
        this._weight = -1 !== RR ? Math.min(Math.max(RR, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(RR) {
        for (let JR = 0; JR < this._runtimeAnimations.length; JR++) {
          this._runtimeAnimations[JR]._prepareForSpeedRatioChange(RR)
        }
        this._speedRatio = RR, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          uR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          qR = arguments.length > 6 ? arguments[6] : void 0,
          iR = arguments.length > 7 ? arguments[7] : void 0,
          fR = arguments.length > 8 ? arguments[8] : void 0,
          VR = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          KR = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = JR, this.fromFrame = GR, this.toFrame = yR, this.loopAnimation = uR, this.onAnimationEnd = qR, this.onAnimationLoop = fR, this.isAdditive = VR, this.playOrder = KR, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.pK = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new tR.b, this.onAnimationLoopObservable = new tR.b, this._scene = RR, iR && this.appendAnimations(JR, iR), this._speedRatio = ZR, RR._activeAnimatables.push(this)
      }
      syncWith(RR) {
        if (this._syncRoot = RR, RR) {
          const RR = this._scene._activeAnimatables.indexOf(this);
          RR > -1 && (this._scene._activeAnimatables.splice(RR, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(RR, JR) {
        for (let GR = 0; GR < JR.length; GR++) {
          const yR = JR[GR],
            tR = new pR(RR, yR, this._scene, this);
          tR._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(tR)
        }
      }
      getAnimationByTargetProperty(RR) {
        const JR = this._runtimeAnimations;
        for (let GR = 0; GR < JR.length; GR++)
          if (JR[GR].animation.targetProperty === RR) return JR[GR].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(RR) {
        const JR = this._runtimeAnimations;
        for (let GR = 0; GR < JR.length; GR++)
          if (JR[GR].animation.targetProperty === RR) return JR[GR];
        return null
      }
      reset() {
        const RR = this._runtimeAnimations;
        for (let JR = 0; JR < RR.length; JR++) RR[JR].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(RR) {
        const JR = this._runtimeAnimations;
        for (let GR = 0; GR < JR.length; GR++) JR[GR].animation.enableBlending = !0, JR[GR].animation.blendingSpeed = RR
      }
      disableBlending() {
        const RR = this._runtimeAnimations;
        for (let JR = 0; JR < RR.length; JR++) RR[JR].animation.enableBlending = !1
      }
      goToFrame(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = this._runtimeAnimations;
        if (GR[0]) {
          const JR = GR[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? GR[0].currentFrame;
          const yR = 0 === this.speedRatio ? 0 : (RR - this._frameToSyncFromJump) / JR * 1e3 / this.speedRatio;
          this._manualJumpDelay = -yR
        }
        for (let yR = 0; yR < GR.length; yR++) GR[yR].goToFrame(RR, JR ? this._weight : -1);
        this._goToFrame = RR
      }
      get paused() {
        return this.pK
      }
      pause() {
        this.pK || (this.pK = !0)
      }
      restart() {
        this.pK = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (RR || JR) {
          const tR = this._scene._activeAnimatables.indexOf(this);
          if (tR > -1) {
            const uR = this._runtimeAnimations;
            for (let GR = uR.length - 1; GR >= 0; GR--) {
              const yR = uR[GR];
              RR && yR.animation.name != RR || (JR && !JR(yR.target) || (yR.dispose(), uR.splice(GR, 1)))
            }
            0 == uR.length && (GR || this._scene._activeAnimatables.splice(tR, 1), yR || this._raiseOnAnimationEnd())
          }
        } else {
          const RR = this._scene._activeAnimatables.indexOf(this);
          if (RR > -1) {
            GR || this._scene._activeAnimatables.splice(RR, 1);
            const JR = this._runtimeAnimations;
            for (let RR = 0; RR < JR.length; RR++) JR[RR].dispose();
            this._runtimeAnimations.length = 0, yR || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((RR => {
          this.onAnimationEndObservable.add((() => {
            RR(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(RR) {
        if (this.pK) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = RR), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = RR, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += RR - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !bR.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let JR = !1;
        const GR = this._runtimeAnimations;
        let yR;
        for (yR = 0; yR < GR.length; yR++) {
          const tR = GR[yR].animate(RR - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          JR = JR || tR
        }
        if (this.animationStarted = JR, !JR) {
          if (this.disposeOnEnd)
            for (yR = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(yR, 1), yR = 0; yR < GR.length; yR++) GR[yR].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return JR
      }
    }

    function vR(RR) {
      if (0 === RR.totalWeight && 0 === RR.totalAdditiveWeight) return RR.originalValue;
      let JR = 1;
      const GR = uR.l.Fe[0],
        yR = uR.l.Fe[1],
        tR = uR.l.Quaternion[0];
      let ZR = 0;
      const qR = RR.animations[0],
        iR = RR.originalValue;
      let fR, VR = !1;
      if (RR.totalWeight < 1) fR = 1 - RR.totalWeight, iR.decompose(yR, tR, GR);
      else {
        if (ZR = 1, JR = RR.totalWeight, fR = qR.weight / JR, 1 == fR) {
          if (!RR.totalAdditiveWeight) return qR.currentValue;
          VR = !0
        }
        qR.currentValue.decompose(yR, tR, GR)
      }
      if (!VR) {
        yR.scaleInPlace(fR), GR.scaleInPlace(fR), tR.scaleInPlace(fR);
        for (let qR = ZR; qR < RR.animations.length; qR++) {
          const ZR = RR.animations[qR];
          if (0 === ZR.weight) continue;
          fR = ZR.weight / JR;
          const iR = uR.l.Fe[2],
            VR = uR.l.Fe[3],
            KR = uR.l.Quaternion[1];
          ZR.currentValue.decompose(VR, KR, iR), VR.scaleAndAddToRef(fR, yR), KR.scaleAndAddToRef(uR.i.Dot(tR, KR) > 0 ? fR : -fR, tR), iR.scaleAndAddToRef(fR, GR)
        }
        tR.normalize()
      }
      for (let wR = 0; wR < RR.additiveAnimations.length; wR++) {
        const JR = RR.additiveAnimations[wR];
        if (0 === JR.weight) continue;
        const ZR = uR.l.Fe[2],
          qR = uR.l.Fe[3],
          iR = uR.l.Quaternion[1];
        JR.currentValue.decompose(qR, iR, ZR), qR.multiplyToRef(yR, qR), uR.r.LerpToRef(yR, qR, JR.weight, yR), tR.multiplyToRef(iR, iR), uR.i.SlerpToRef(tR, iR, JR.weight, tR), ZR.scaleAndAddToRef(JR.weight, GR)
      }
      const KR = qR ? qR._animationState.workValue : uR.l.Matrix[0].clone();
      return uR.e.ComposeToRef(yR, tR, GR, KR), KR
    }

    function OR(RR, JR) {
      if (0 === RR.totalWeight && 0 === RR.totalAdditiveWeight) return JR;
      const GR = RR.animations[0],
        yR = RR.originalValue;
      let tR = JR;
      if (0 === RR.totalWeight && RR.totalAdditiveWeight > 0) tR.vN(yR);
      else if (1 === RR.animations.length) {
        if (uR.i.SlerpToRef(yR, GR.currentValue, Math.min(1, RR.totalWeight), tR), 0 === RR.totalAdditiveWeight) return tR
      } else if (RR.animations.length > 1) {
        let GR, ZR, qR = 1;
        if (RR.totalWeight < 1) {
          const JR = 1 - RR.totalWeight;
          GR = [], ZR = [], GR.push(yR), ZR.push(JR)
        } else {
          if (2 === RR.animations.length && (uR.i.SlerpToRef(RR.animations[0].currentValue, RR.animations[1].currentValue, RR.animations[1].weight / RR.totalWeight, JR), 0 === RR.totalAdditiveWeight)) return JR;
          GR = [], ZR = [], qR = RR.totalWeight
        }
        for (let JR = 0; JR < RR.animations.length; JR++) {
          const yR = RR.animations[JR];
          GR.push(yR.currentValue), ZR.push(yR.weight / qR)
        }
        let iR = 0;
        for (let RR = 0; RR < GR.length;) RR ? (iR += ZR[RR], uR.i.SlerpToRef(tR, GR[RR], ZR[RR] / iR, tR), RR++) : (uR.i.SlerpToRef(GR[RR], GR[RR + 1], ZR[RR + 1] / (ZR[RR] + ZR[RR + 1]), JR), tR = JR, iR = ZR[RR] + ZR[RR + 1], RR += 2)
      }
      for (let ZR = 0; ZR < RR.additiveAnimations.length; ZR++) {
        const JR = RR.additiveAnimations[ZR];
        0 !== JR.weight && (tR.multiplyToRef(JR.currentValue, uR.l.Quaternion[0]), uR.i.SlerpToRef(tR, uR.l.Quaternion[0], JR.weight, tR))
      }
      return tR
    }

    function xR(RR, JR) {
      JR && (JR.prototype.copyAnimationRange = function(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new lR.d(this.name, "_matrix", RR.animations[0].framePerSecond, lR.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const uR = RR.animations[0].getRange(JR);
        if (!uR) return !1;
        const ZR = uR.from,
          qR = uR.to,
          iR = RR.animations[0].getKeys(),
          fR = RR.length,
          VR = RR.getParent(),
          KR = this.getParent(),
          wR = yR && VR && fR && this.length && fR !== this.length,
          rR = wR && KR && VR ? KR.length / VR.length : 1,
          eR = yR && !KR && tR && (1 !== tR.x || 1 !== tR.y || 1 !== tR.z),
          aR = this.animations[0].getKeys();
        let LR, nR, UR;
        for (let WR = 0, AR = iR.length; WR < AR; WR++) LR = iR[WR], LR.frame >= ZR && LR.frame <= qR && (yR ? (UR = LR.value.clone(), wR ? (nR = UR.getTranslation(), UR.setTranslation(nR.scaleInPlace(rR))) : eR && tR ? (nR = UR.getTranslation(), UR.setTranslation(nR.multiplyInPlace(tR))) : UR = LR.value) : UR = LR.value, aR.push({
          frame: LR.frame + GR,
          value: UR
        }));
        return this.animations[0].createRange(JR, ZR + GR, qR + GR), !0
      }), RR && (RR.prototype._animate = function(RR) {
        const JR = this._animationWrites,
          GR = this._animationWriteCount;
        let yR = 0;
        for (let uR = this._animationStepWriteCount; uR < GR; uR++) {
          const RR = JR[uR];
          RR.lL && -1 === RR.weight || (RR.lL = !0, JR[uR] = JR[yR], JR[yR] = RR, yR++)
        }
        for (let uR = yR; uR < GR; uR++) {
          const RR = JR[uR];
          RR.runtimeAnimation = null, RR.target = null
        }
        if (this._animationWriteCount = yR, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const tR = gR.b.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = tR
        }
        this.deltaTime = void 0 !== RR ? RR : this.useConstantAnimationDeltaTime ? 16 : (tR - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = tR;
        const ZR = this._activeAnimatables;
        if (0 === ZR.length) return;
        this._animationTime += this.deltaTime;
        const qR = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let uR = 0; uR < ZR.length; uR++) {
          const RR = ZR[uR];
          !RR._animate(qR) && RR.disposeOnEnd && uR--
        }! function(RR) {
          if (RR._registeredForLateAnimationBindings.length) {
            for (let JR = 0; JR < RR._registeredForLateAnimationBindings.length; JR++) {
              const GR = RR._registeredForLateAnimationBindings.data[JR];
              for (const RR in GR._lateAnimationHolders) {
                const JR = GR._lateAnimationHolders[RR],
                  yR = JR.animations[0],
                  tR = JR.originalValue;
                if (void 0 === tR || null === tR) continue;
                const ZR = lR.d.AllowMatrixDecomposeForInterpolation && tR.m;
                let qR = GR[RR];
                if (ZR) qR = vR(JR);
                else if (void 0 !== tR.w) qR = OR(JR, qR || uR.i.Identity());
                else {
                  let RR = 0,
                    GR = 1;
                  const uR = yR && yR._animationState.nG === lR.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (JR.totalWeight < 1) qR = uR ? tR.clone ? tR.clone() : tR : yR && tR.scale ? tR.scale(1 - JR.totalWeight) : yR ? tR * (1 - JR.totalWeight) : tR.clone ? tR.clone() : tR;
                  else if (yR) {
                    GR = JR.totalWeight;
                    const ZR = yR.weight / GR;
                    qR = 1 !== ZR ? yR.currentValue.scale ? yR.currentValue.scale(ZR) : yR.currentValue * ZR : (JR.animations.length > 1 || JR.additiveAnimations.length > 0) && yR.currentValue.clone ? yR.currentValue.clone() : yR.currentValue, uR && (qR.addToRef ? qR.addToRef(tR, qR) : qR += tR), RR = 1
                  }
                  for (let yR = RR; yR < JR.animations.length; yR++) {
                    const RR = JR.animations[yR],
                      tR = RR.weight / GR;
                    tR && (RR.currentValue.scaleAndAddToRef ? RR.currentValue.scaleAndAddToRef(tR, qR) : qR += RR.currentValue * tR)
                  }
                  for (let yR = 0; yR < JR.additiveAnimations.length; yR++) {
                    const RR = JR.additiveAnimations[yR],
                      GR = RR.weight;
                    GR && (RR.currentValue.scaleAndAddToRef ? RR.currentValue.scaleAndAddToRef(GR, qR) : qR += RR.currentValue * GR)
                  }
                }
                GR[RR] = qR
              }
              GR._lateAnimationHolders = {}
            }
            RR._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, RR.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((RR, JR) => RR.playOrder - JR.playOrder))
      }, RR.prototype.beginWeightedAnimation = function(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          tR = arguments.length > 4 ? arguments[4] : void 0,
          uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          ZR = arguments.length > 6 ? arguments[6] : void 0,
          qR = arguments.length > 7 ? arguments[7] : void 0,
          iR = arguments.length > 8 ? arguments[8] : void 0,
          fR = arguments.length > 9 ? arguments[9] : void 0,
          VR = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const KR = this.beginAnimation(RR, JR, GR, tR, uR, ZR, qR, !1, iR, fR, VR);
        return KR.weight = yR, KR
      }, RR.prototype.beginAnimation = function(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          uR = arguments.length > 5 ? arguments[5] : void 0,
          ZR = arguments.length > 6 ? arguments[6] : void 0,
          qR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          iR = arguments.length > 8 ? arguments[8] : void 0,
          fR = arguments.length > 9 ? arguments[9] : void 0,
          VR = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (tR < 0) {
          const RR = JR;
          JR = GR, GR = RR, tR = -tR
        }
        JR > GR && (tR = -tR), qR && this.stopAnimation(RR, void 0, iR), ZR || (ZR = new bR(this, RR, JR, GR, yR, tR, uR, void 0, fR, VR));
        const KR = !iR || iR(RR);
        if (RR.animations && KR && ZR.appendAnimations(RR, RR.animations), RR.getAnimatables) {
          const VR = RR.getAnimatables();
          for (let RR = 0; RR < VR.length; RR++) this.beginAnimation(VR[RR], JR, GR, yR, tR, uR, ZR, qR, iR, fR)
        }
        return ZR.reset(), ZR
      }, RR.prototype.beginHierarchyAnimation = function(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          ZR = arguments.length > 6 ? arguments[6] : void 0,
          qR = arguments.length > 7 ? arguments[7] : void 0,
          iR = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          fR = arguments.length > 9 ? arguments[9] : void 0,
          VR = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const KR = RR.getDescendants(JR),
          wR = [];
        wR.push(this.beginAnimation(RR, GR, yR, tR, uR, ZR, qR, iR, fR, void 0, VR));
        for (const rR of KR) wR.push(this.beginAnimation(rR, GR, yR, tR, uR, ZR, qR, iR, fR, void 0, VR));
        return wR
      }, RR.prototype.beginDirectAnimation = function(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (uR < 0) {
          const RR = GR;
          GR = yR, yR = RR, uR = -uR
        }
        GR > yR && (uR = -uR);
        return new bR(this, RR, GR, yR, tR, uR, arguments.length > 6 ? arguments[6] : void 0, JR, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, RR.prototype.beginDirectHierarchyAnimation = function(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        let fR = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const VR = RR.getDescendants(JR),
          KR = [];
        KR.push(this.beginDirectAnimation(RR, GR, yR, tR, uR, ZR, qR, iR, fR));
        for (const wR of VR) KR.push(this.beginDirectAnimation(wR, GR, yR, tR, uR, ZR, qR, iR, fR));
        return KR
      }, RR.prototype.getAnimatableByTarget = function(RR) {
        for (let JR = 0; JR < this._activeAnimatables.length; JR++)
          if (this._activeAnimatables[JR].target === RR) return this._activeAnimatables[JR];
        return null
      }, RR.prototype.getAllAnimatablesByTarget = function(RR) {
        const JR = [];
        for (let GR = 0; GR < this._activeAnimatables.length; GR++) this._activeAnimatables[GR].target === RR && JR.push(this._activeAnimatables[GR]);
        return JR
      }, RR.prototype.stopAnimation = function(RR, JR, GR) {
        const yR = this.getAllAnimatablesByTarget(RR);
        for (const tR of yR) tR.stop(JR, GR)
      }, RR.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let RR = 0; RR < this._activeAnimatables.length; RR++) this._activeAnimatables[RR].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const RR of this.animationGroups) RR.stop()
      })
    }
    bR.ProcessPausedAnimatables = !1;
    var NR, DR = GR(38217),
      HR = GR(41741),
      oR = GR(41407);
    class cR extends HR.d {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(RR) {
        (RR.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.vN(RR), this._markAsDirtyAndDecompose())
      }
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          qR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(RR, JR.jH(), !1), this.name = RR, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = JR, this._localMatrix = yR?.clone() ?? uR.e.Identity(), this._restMatrix = tR ?? this._localMatrix.clone(), this._bindMatrix = ZR ?? this._localMatrix.clone(), this._index = qR, this._absoluteMatrix = new uR.e, this._absoluteBindMatrix = new uR.e, this._absoluteInverseBindMatrix = new uR.e, this._finalMatrix = new uR.e, JR.bones.push(this), this.setParent(GR, !1), this._updateAbsoluteBindMatrices()
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
      set parent(RR) {
        this.setParent(RR)
      }
      setParent(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== RR) {
          if (this.parent) {
            const RR = this.parent.children.indexOf(this); - 1 !== RR && this.parent.children.splice(RR, 1)
          }
          this._parentNode = RR, this.parent && this.parent.children.push(this), JR && this._updateAbsoluteBindMatrices(), this.hGR()
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
      setRestMatrix(RR) {
        this._restMatrix.vN(RR)
      }
      setRestPose(RR) {
        this.setRestMatrix(RR)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(RR) {
        this.FRR(RR)
      }
      setBindPose(RR) {
        this.setBindMatrix(RR)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const RR = uR.l.Fe[0],
            JR = uR.l.Quaternion[0],
            GR = uR.l.Fe[1];
          this.getRestMatrix().decompose(RR, JR, GR), this._linkedTransformNode.position.vN(GR), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? uR.i.Identity(), this._linkedTransformNode.rotationQuaternion.vN(JR), this._linkedTransformNode.MK.vN(RR)
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
      linkTransformNode(RR) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = RR, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.rGR
      }
      set position(RR) {
        this._decompose(), this.rGR.vN(RR), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(RR) {
        this.setRotation(RR)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(RR) {
        this.setRotationQuaternion(RR)
      }
      get MK() {
        return this.getScale()
      }
      set MK(RR) {
        this.setScale(RR)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = uR.r.Zero(), this._localRotation = uR.i.Zero(), this.rGR = uR.r.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.rGR))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, uR.e.ComposeToRef(this._localScaling, this._localRotation, this.rGR, this._localMatrix)) : this._needToCompose = !1)
      }
      FRR(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.vN(RR), JR && this._updateAbsoluteBindMatrices(), GR ? this._matrix = RR : this.hGR()
      }
      _updateAbsoluteBindMatrices(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (RR || (RR = this._bindMatrix), this.parent ? RR.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.vN(RR), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), JR)
          for (let GR = 0; GR < this.children.length; GR++) this.children[GR]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      hGR() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.hGR(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.hGR(), this._needToDecompose = !0
      }
      _updatePosition(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const tR = this.getLocalMatrix();
        if (0 == JR) yR ? (tR.addAtIndex(12, RR.x), tR.addAtIndex(13, RR.y), tR.addAtIndex(14, RR.z)) : tR.setTranslationFromFloats(RR.x, RR.y, RR.z);
        else {
          const JR = cR._TmpMats[0],
            ZR = cR._TmpVecs[0];
          this.parent ? (JR.vN(this.parent.getAbsoluteMatrix()), GR && JR.multiplyToRef(GR.getWorldMatrix(), JR)) : uR.e.IdentityToRef(JR), yR && JR.setTranslationFromFloats(0, 0, 0), JR.invert(), uR.r.TransformCoordinatesToRef(RR, JR, ZR), yR ? (tR.addAtIndex(12, ZR.x), tR.addAtIndex(13, ZR.y), tR.addAtIndex(14, ZR.z)) : tR.setTranslationFromFloats(ZR.x, ZR.y, ZR.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(RR, JR, GR, !0)
      }
      setPosition(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(RR, JR, GR, !1)
      }
      setAbsolutePosition(RR, JR) {
        this.setPosition(RR, 1, JR)
      }
      scale(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const tR = this.getLocalMatrix(),
          ZR = cR._TmpMats[0];
        uR.e.ScalingToRef(RR, JR, GR, ZR), ZR.multiplyToRef(tR, tR), ZR.invert();
        for (const uR of this.children) {
          const yR = uR.getLocalMatrix();
          yR.multiplyToRef(ZR, yR), yR.multiplyAtIndex(12, RR), yR.multiplyAtIndex(13, JR), yR.multiplyAtIndex(14, GR), uR._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), yR)
          for (const uR of this.children) uR.scale(RR, JR, GR, yR)
      }
      setScale(RR) {
        this._decompose(), this._localScaling.vN(RR), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(RR) {
        this._decompose(), RR.vN(this._localScaling)
      }
      setYawPitchRoll(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tR = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === yR) {
          const ZR = cR._TmpQuat;
          return uR.i.RotationYawPitchRollToRef(RR, JR, GR, ZR), void this.setRotationQuaternion(ZR, yR, tR)
        }
        const ZR = cR._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(ZR, tR)) return;
        const qR = cR._TmpMats[1];
        uR.e.RotationYawPitchRollToRef(RR, JR, GR, qR), ZR.multiplyToRef(qR, qR), this._rotateWithMatrix(qR, yR, tR)
      }
      rotate(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 ? arguments[3] : void 0;
        const tR = cR._TmpMats[0];
        tR.setTranslationFromFloats(0, 0, 0), uR.e.RotationAxisToRef(RR, JR, tR), this._rotateWithMatrix(tR, GR, yR)
      }
      setAxisAngle(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === GR) {
          const tR = cR._TmpQuat;
          return uR.i.RotationAxisToRef(RR, JR, tR), void this.setRotationQuaternion(tR, GR, yR)
        }
        const tR = cR._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(tR, yR)) return;
        const ZR = cR._TmpMats[1];
        uR.e.RotationAxisToRef(RR, JR, ZR), tR.multiplyToRef(ZR, ZR), this._rotateWithMatrix(ZR, GR, yR)
      }
      setRotation(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(RR.y, RR.x, RR.z, JR, GR)
      }
      setRotationQuaternion(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === JR) return this._decompose(), this._localRotation.vN(RR), void this._markAsDirtyAndCompose();
        const yR = cR._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(yR, GR)) return;
        const tR = cR._TmpMats[1];
        uR.e.FromQuaternionToRef(RR, tR), yR.multiplyToRef(tR, tR), this._rotateWithMatrix(tR, JR, GR)
      }
      setRotationMatrix(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === JR) {
          const yR = cR._TmpQuat;
          return uR.i.FromRotationMatrixToRef(RR, yR), void this.setRotationQuaternion(yR, JR, GR)
        }
        const yR = cR._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(yR, GR)) return;
        const tR = cR._TmpMats[1];
        tR.vN(RR), yR.multiplyToRef(RR, tR), this._rotateWithMatrix(tR, JR, GR)
      }
      _rotateWithMatrix(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const yR = this.getLocalMatrix(),
          tR = yR.m[12],
          uR = yR.m[13],
          ZR = yR.m[14],
          qR = this.getParent(),
          iR = cR._TmpMats[3],
          fR = cR._TmpMats[4];
        qR && 1 == JR ? (GR ? (iR.vN(GR.getWorldMatrix()), qR.getAbsoluteMatrix().multiplyToRef(iR, iR)) : iR.vN(qR.getAbsoluteMatrix()), fR.vN(iR), fR.invert(), yR.multiplyToRef(iR, yR), yR.multiplyToRef(RR, yR), yR.multiplyToRef(fR, yR)) : 1 == JR && GR ? (iR.vN(GR.getWorldMatrix()), fR.vN(iR), fR.invert(), yR.multiplyToRef(iR, yR), yR.multiplyToRef(RR, yR), yR.multiplyToRef(fR, yR)) : yR.multiplyToRef(RR, yR), yR.setTranslationFromFloats(tR, uR, ZR), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(RR, JR) {
        const GR = cR._TmpMats[2];
        return RR.vN(this.getAbsoluteMatrix()), JR ? (RR.multiplyToRef(JR.getWorldMatrix(), RR), uR.e.ScalingToRef(JR.MK.x, JR.MK.y, JR.MK.z, GR)) : uR.e.IdentityToRef(GR), RR.invert(), !isNaN(RR.m[0]) && (GR.multiplyAtIndex(0, this._scalingDeterminant), RR.multiplyToRef(GR, RR), !0)
      }
      vW() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GR = uR.r.Zero();
        return this.getPositionToRef(RR, JR, GR), GR
      }
      getPositionToRef() {
        let RR = arguments.length > 1 ? arguments[1] : void 0,
          JR = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const RR = this.getLocalMatrix();
          JR.x = RR.m[12], JR.y = RR.m[13], JR.z = RR.m[14]
        } else {
          const GR = cR._TmpMats[0].vN(this.getAbsoluteMatrix());
          RR && GR.multiplyToRef(RR.getWorldMatrix(), GR), JR.x = GR.m[12], JR.y = GR.m[13], JR.z = GR.m[14]
        }
      }
      getAbsolutePosition() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const JR = uR.r.Zero();
        return this.getPositionToRef(1, RR, JR), JR
      }
      getAbsolutePositionToRef(RR, JR) {
        this.getPositionToRef(1, RR, JR)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.vN(this._localMatrix);
          const RR = this._skeleton.getPoseMatrix();
          RR && this._absoluteMatrix.multiplyToRef(RR, this._absoluteMatrix)
        }
        const RR = this.children,
          JR = RR.length;
        for (let GR = 0; GR < JR; GR++) RR[GR].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      m_(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GR = uR.r.Zero();
        return this.getDirectionToRef(RR, JR, GR), GR
      }
      getDirectionToRef(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const yR = cR._TmpMats[0].vN(this.getAbsoluteMatrix());
        JR && yR.multiplyToRef(JR.getWorldMatrix(), yR), uR.r.TransformNormalToRef(RR, yR, GR), GR.normalize()
      }
      getRotation() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GR = uR.r.Zero();
        return this.getRotationToRef(RR, JR, GR), GR
      }
      getRotationToRef() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const yR = cR._TmpQuat;
        this.getRotationQuaternionToRef(RR, JR, yR), yR.toEulerAnglesToRef(GR)
      }
      getRotationQuaternion() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GR = uR.i.Identity();
        return this.getRotationQuaternionToRef(RR, JR, GR), GR
      }
      getRotationQuaternionToRef() {
        let RR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          JR = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), JR.vN(this._localRotation);
        else {
          const GR = cR._TmpMats[0],
            yR = this.getAbsoluteMatrix();
          RR ? yR.multiplyToRef(RR.getWorldMatrix(), GR) : GR.vN(yR), GR.multiplyAtIndex(0, this._scalingDeterminant), GR.multiplyAtIndex(1, this._scalingDeterminant), GR.multiplyAtIndex(2, this._scalingDeterminant), GR.decompose(void 0, JR, void 0)
        }
      }
      getRotationMatrix() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 ? arguments[1] : void 0;
        const GR = uR.e.Identity();
        return this.getRotationMatrixToRef(RR, JR, GR), GR
      }
      getRotationMatrixToRef() {
        let RR = arguments.length > 1 ? arguments[1] : void 0,
          JR = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(JR);
        else {
          const GR = cR._TmpMats[0],
            yR = this.getAbsoluteMatrix();
          RR ? yR.multiplyToRef(RR.getWorldMatrix(), GR) : GR.vN(yR), GR.multiplyAtIndex(0, this._scalingDeterminant), GR.multiplyAtIndex(1, this._scalingDeterminant), GR.multiplyAtIndex(2, this._scalingDeterminant), GR.getRotationMatrixToRef(JR)
        }
      }
      getAbsolutePositionFromLocal(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GR = uR.r.Zero();
        return this.getAbsolutePositionFromLocalToRef(RR, JR, GR), GR
      }
      getAbsolutePositionFromLocalToRef(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const yR = cR._TmpMats[0].vN(this.getAbsoluteMatrix());
        JR && yR.multiplyToRef(JR.getWorldMatrix(), yR), uR.r.TransformCoordinatesToRef(RR, yR, GR)
      }
      getLocalPositionFromAbsolute(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GR = uR.r.Zero();
        return this.getLocalPositionFromAbsoluteToRef(RR, JR, GR), GR
      }
      getLocalPositionFromAbsoluteToRef(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const yR = cR._TmpMats[0].vN(this.getAbsoluteMatrix());
        JR && yR.multiplyToRef(JR.getWorldMatrix(), yR), yR.invert(), uR.r.TransformCoordinatesToRef(RR, yR, GR)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const RR = this._skeleton.bones.indexOf(this);
        if (-1 !== RR && this._skeleton.bones.splice(RR, 1), this._parentNode && this._parentNode.children) {
          const RR = this._parentNode.children,
            JR = RR.indexOf(this); - 1 !== JR && RR.splice(JR, 1)
        }
        super.dispose()
      }
    }
    cR._TmpVecs = (0, DR.c)(2, uR.r.Zero), cR._TmpQuat = uR.i.Identity(), cR._TmpMats = (0, DR.c)(5, uR.e.Identity), (NR = cR.prototype).copyAnimationRange ?? (NR.copyAnimationRange = (0, oR.f)("Bone", "copyAnimationRange"));
    var PR = GR(41612);
    let IR = !1;
    var mR = GR(41485),
      zR = GR(41844),
      SR = GR(41855),
      jR = GR(41852),
      dR = GR(41644);

    function ER(RR, JR) {
      const GR = (0, rR.RandomRange)(0, 1);
      VR.e.LerpToRef(JR.color1, JR.color2, GR, RR.color)
    }

    function YR(RR, JR) {
      JR.colorDead.subtractToRef(RR.color, JR._colorDiff), JR._colorDiff.scaleToRef(1 / RR.lifeTime, RR.colorStep)
    }

    function kR(RR, JR) {
      RR._properties.currentColorGradient = JR._colorGradients[0], RR._properties.currentColorGradient.getColorToRef(RR.color), RR._properties.currentColor1.vN(RR.color), JR._colorGradients.length > 1 ? JR._colorGradients[1].getColorToRef(RR._properties.currentColor2) : RR._properties.currentColor2.vN(RR.color)
    }

    function QR(RR, JR) {
      const GR = JR._colorGradients;
      yR.m.GetCurrentGradient(JR._ratio, GR, ((JR, GR, yR) => {
        JR !== RR._properties.currentColorGradient && (RR._properties.currentColor1.vN(RR._properties.currentColor2), GR.getColorToRef(RR._properties.currentColor2), RR._properties.currentColorGradient = JR), VR.e.LerpToRef(RR._properties.currentColor1, RR._properties.currentColor2, yR, RR.color), RR.color.a < 0 && (RR.color.a = 0)
      }))
    }

    function FR(RR, JR) {
      RR.colorStep.scaleToRef(JR._scaledUpdateSpeed, JR._scaledColorStep), RR.color.addInPlace(JR._scaledColorStep), RR.color.a < 0 && (RR.color.a = 0)
    }

    function TR(RR, JR) {
      yR.m.GetCurrentGradient(JR._ratio, JR._angularSpeedGradients, ((JR, GR, yR) => {
        JR !== RR._properties.currentAngularSpeedGradient && (RR._properties.currentAngularSpeed1 = RR._properties.currentAngularSpeed2, RR._properties.currentAngularSpeed2 = GR.getFactor(), RR._properties.currentAngularSpeedGradient = JR), RR.angularSpeed = (0, rR.Lerp)(RR._properties.currentAngularSpeed1, RR._properties.currentAngularSpeed2, yR)
      }))
    }

    function sR(RR, JR) {
      RR.angle += RR.angularSpeed * JR._scaledUpdateSpeed
    }

    function hR(RR, JR) {
      JR.particleEmitterType.startDirectionFunction(JR._emitterWorldMatrix, RR.direction, RR, JR.isLocal, JR._emitterInverseWorldMatrix)
    }

    function RJ(RR, JR) {
      JR.startDirectionFunction(JR._emitterWorldMatrix, RR.direction, RR, JR.isLocal)
    }

    function JJ(RR, JR) {
      RR._properties.currentVelocityGradient = JR._velocityGradients[0], RR._properties.currentVelocity1 = RR._properties.currentVelocityGradient.getFactor(), JR._velocityGradients.length > 1 ? RR._properties.currentVelocity2 = JR._velocityGradients[1].getFactor() : RR._properties.currentVelocity2 = RR._properties.currentVelocity1
    }

    function GJ(RR, JR) {
      RR._properties.currentLimitVelocityGradient = JR._limitVelocityGradients[0], RR._properties.currentLimitVelocity1 = RR._properties.currentLimitVelocityGradient.getFactor(), JR._limitVelocityGradients.length > 1 ? RR._properties.currentLimitVelocity2 = JR._limitVelocityGradients[1].getFactor() : RR._properties.currentLimitVelocity2 = RR._properties.currentLimitVelocity1
    }

    function yJ(RR, JR) {
      yR.m.GetCurrentGradient(JR._ratio, JR._velocityGradients, ((JR, GR, yR) => {
        JR !== RR._properties.currentVelocityGradient && (RR._properties.currentVelocity1 = RR._properties.currentVelocity2, RR._properties.currentVelocity2 = GR.getFactor(), RR._properties.currentVelocityGradient = JR), RR._properties.directionScale *= (0, rR.Lerp)(RR._properties.currentVelocity1, RR._properties.currentVelocity2, yR)
      }))
    }

    function tJ(RR, JR) {
      yR.m.GetCurrentGradient(JR._ratio, JR._limitVelocityGradients, ((GR, yR, tR) => {
        GR !== RR._properties.currentLimitVelocityGradient && (RR._properties.currentLimitVelocity1 = RR._properties.currentLimitVelocity2, RR._properties.currentLimitVelocity2 = yR.getFactor(), RR._properties.currentLimitVelocityGradient = GR);
        const uR = (0, rR.Lerp)(RR._properties.currentLimitVelocity1, RR._properties.currentLimitVelocity2, tR);
        RR.direction.length() > uR && RR.direction.scaleInPlace(JR.limitVelocityDamping)
      }))
    }

    function uJ(RR) {
      RR.direction.scaleToRef(RR._properties.directionScale, RR._properties.scaledDirection)
    }

    function ZJ(RR, JR) {
      JR.particleEmitterType.startPositionFunction(JR._emitterWorldMatrix, RR.position, RR, JR.isLocal)
    }

    function qJ(RR, JR) {
      JR.startPositionFunction(JR._emitterWorldMatrix, RR.position, RR, JR.isLocal)
    }

    function iJ(RR, JR) {
      RR._properties.localPosition ? RR._properties.localPosition.vN(RR.position) : RR._properties.localPosition = RR.position.clone(), uR.r.TransformCoordinatesToRef(RR._properties.localPosition, JR._emitterWorldMatrix, RR.position)
    }

    function fJ(RR, JR) {
      JR.isLocal && RR._properties.localPosition ? (RR._properties.localPosition.addInPlace(RR._properties.scaledDirection), uR.r.TransformCoordinatesToRef(RR._properties.localPosition, JR._emitterWorldMatrix, RR.position)) : RR.position.addInPlace(RR._properties.scaledDirection)
    }

    function VJ(RR, JR) {
      RR._properties.currentDragGradient = JR._dragGradients[0], RR._properties.currentDrag1 = RR._properties.currentDragGradient.getFactor(), JR._dragGradients.length > 1 ? RR._properties.currentDrag2 = JR._dragGradients[1].getFactor() : RR._properties.currentDrag2 = RR._properties.currentDrag1
    }

    function KJ(RR, JR) {
      yR.m.GetCurrentGradient(JR._ratio, JR._dragGradients, ((JR, GR, yR) => {
        JR !== RR._properties.currentDragGradient && (RR._properties.currentDrag1 = RR._properties.currentDrag2, RR._properties.currentDrag2 = GR.getFactor(), RR._properties.currentDragGradient = JR);
        const tR = (0, rR.Lerp)(RR._properties.currentDrag1, RR._properties.currentDrag2, yR);
        RR._properties.scaledDirection.scaleInPlace(1 - tR)
      }))
    }

    function wJ(RR, JR) {
      RR._properties.randomNoiseCoordinates1 && RR._properties.randomNoiseCoordinates2 ? (RR._properties.randomNoiseCoordinates1.VJR(Math.random(), Math.random(), Math.random()), RR._properties.randomNoiseCoordinates2.VJR(Math.random(), Math.random(), Math.random())) : (RR._properties.randomNoiseCoordinates1 = new uR.r(Math.random(), Math.random(), Math.random()), RR._properties.randomNoiseCoordinates2 = new uR.r(Math.random(), Math.random(), Math.random()))
    }

    function rJ(RR, JR) {
      const GR = JR._noiseTextureData,
        yR = JR._noiseTextureSize;
      if (GR && yR && RR._properties.randomNoiseCoordinates1 && RR._properties.randomNoiseCoordinates2) {
        const tR = JR._fetchR(RR._properties.randomNoiseCoordinates1.x, RR._properties.randomNoiseCoordinates1.y, yR.width, yR.height, GR),
          ZR = JR._fetchR(RR._properties.randomNoiseCoordinates1.z, RR._properties.randomNoiseCoordinates2.x, yR.width, yR.height, GR),
          qR = JR._fetchR(RR._properties.randomNoiseCoordinates2.y, RR._properties.randomNoiseCoordinates2.z, yR.width, yR.height, GR),
          iR = uR.l.Fe[0],
          fR = uR.l.Fe[1];
        iR.VJR((2 * tR - 1) * JR.noiseStrength.x, (2 * ZR - 1) * JR.noiseStrength.y, (2 * qR - 1) * JR.noiseStrength.z), iR.scaleToRef(JR._tempScaledUpdateSpeed, fR), RR.direction.addInPlace(fR)
      }
    }

    function eJ(RR, JR) {
      JR.gravity.scaleToRef(JR._tempScaledUpdateSpeed, JR._scaledGravity), RR.direction.addInPlace(JR._scaledGravity)
    }

    function aJ(RR, JR) {
      RR.size = (0, rR.RandomRange)(JR.minSize, JR.maxSize), RR.scale.VJR((0, rR.RandomRange)(JR.minScaleX, JR.maxScaleX), (0, rR.RandomRange)(JR.minScaleY, JR.maxScaleY))
    }

    function LJ(RR, JR) {
      RR._properties.currentSizeGradient = JR._sizeGradients[0], RR._properties.currentSize1 = RR._properties.currentSizeGradient.getFactor(), RR.size = RR._properties.currentSize1, JR._sizeGradients.length > 1 ? RR._properties.currentSize2 = JR._sizeGradients[1].getFactor() : RR._properties.currentSize2 = RR._properties.currentSize1, RR.scale.VJR((0, rR.RandomRange)(JR.minScaleX, JR.maxScaleX), (0, rR.RandomRange)(JR.minScaleY, JR.maxScaleY))
    }

    function nJ(RR, JR) {
      const GR = JR._actualFrame / JR.targetStopDuration;
      yR.m.GetCurrentGradient(GR, JR._startSizeGradients, ((GR, yR, tR) => {
        GR !== JR._currentStartSizeGradient && (JR._currentStartSize1 = JR._currentStartSize2, JR._currentStartSize2 = yR.getFactor(), JR._currentStartSizeGradient = GR);
        const uR = (0, rR.Lerp)(JR._currentStartSize1, JR._currentStartSize2, tR);
        RR.scale.scaleInPlace(uR)
      }))
    }

    function UJ(RR, JR) {
      yR.m.GetCurrentGradient(JR._ratio, JR._sizeGradients, ((JR, GR, yR) => {
        JR !== RR._properties.currentSizeGradient && (RR._properties.currentSize1 = RR._properties.currentSize2, RR._properties.currentSize2 = GR.getFactor(), RR._properties.currentSizeGradient = JR), RR.size = (0, rR.Lerp)(RR._properties.currentSize1, RR._properties.currentSize2, yR)
      }))
    }

    function WJ(RR, JR) {
      RR.remapData = new uR.s(0, 1, 0, 1)
    }

    function AJ(RR, JR) {
      JR._colorRemapGradients && JR._colorRemapGradients.length > 0 && yR.m.GetCurrentGradient(JR._ratio, JR._colorRemapGradients, ((JR, GR, yR) => {
        const tR = (0, rR.Lerp)(JR.factor1, GR.factor1, yR),
          uR = (0, rR.Lerp)(JR.factor2, GR.factor2, yR);
        RR.remapData.x = tR, RR.remapData.y = uR - tR
      })), JR._alphaRemapGradients && JR._alphaRemapGradients.length > 0 && yR.m.GetCurrentGradient(JR._ratio, JR._alphaRemapGradients, ((JR, GR, yR) => {
        const tR = (0, rR.Lerp)(JR.factor1, GR.factor1, yR),
          uR = (0, rR.Lerp)(JR.factor2, GR.factor2, yR);
        RR.remapData.z = tR, RR.remapData.w = uR - tR
      }))
    }

    function CJ(RR, JR) {
      const GR = (0, rR.Clamp)(JR._actualFrame / JR.targetStopDuration);
      yR.m.GetCurrentGradient(GR, JR._lifeTimeGradients, ((JR, yR) => {
        const tR = JR,
          uR = yR,
          ZR = tR.getFactor(),
          qR = uR.getFactor(),
          iR = (GR - tR.gradient) / (uR.gradient - tR.gradient);
        RR.lifeTime = (0, rR.Lerp)(ZR, qR, iR)
      })), JR._emitPower = (0, rR.RandomRange)(JR.minEmitPower, JR.maxEmitPower)
    }

    function XJ(RR, JR) {
      RR.lifeTime = (0, rR.RandomRange)(JR.minLifeTime, JR.maxLifeTime), JR._emitPower = (0, rR.RandomRange)(JR.minEmitPower, JR.maxEmitPower)
    }

    function MJ(RR, JR) {
      0 === JR._emitPower ? (RR._properties.initialDirection ? RR._properties.initialDirection.vN(RR.direction) : RR._properties.initialDirection = RR.direction.clone(), RR.direction.set(0, 0, 0)) : (RR._properties.initialDirection = null, RR.direction.scaleInPlace(JR._emitPower)), RR.direction.addInPlace(JR._inheritedVelocityOffset)
    }

    function BJ(RR, JR) {
      RR.angularSpeed = (0, rR.RandomRange)(JR.minAngularSpeed, JR.maxAngularSpeed), RR.angle = (0, rR.RandomRange)(JR.minInitialRotation, JR.maxInitialRotation)
    }

    function lJ(RR, JR) {
      RR._properties.currentAngularSpeedGradient = JR._angularSpeedGradients[0], RR.angularSpeed = RR._properties.currentAngularSpeedGradient.getFactor(), RR._properties.currentAngularSpeed1 = RR.angularSpeed, JR._angularSpeedGradients.length > 1 ? RR._properties.currentAngularSpeed2 = JR._angularSpeedGradients[1].getFactor() : RR._properties.currentAngularSpeed2 = RR._properties.currentAngularSpeed1, RR.angle = (0, rR.RandomRange)(JR.minInitialRotation, JR.maxInitialRotation)
    }

    function pJ(RR, JR) {
      RR._properties.initialStartSpriteCellId = JR.startSpriteCellID, RR._properties.initialEndSpriteCellId = JR.endSpriteCellID, RR._properties.initialSpriteCellLoop = JR.spriteCellLoop
    }

    function gJ(RR, JR) {
      RR.previousItem = JR.previousItem, RR.nextItem = JR, JR.previousItem && (JR.previousItem.nextItem = RR), JR.previousItem = RR
    }

    function bJ(RR, JR) {
      RR.previousItem = JR, RR.nextItem = JR.nextItem, JR.nextItem && (JR.nextItem.previousItem = RR), JR.nextItem = RR
    }

    function vJ(RR) {
      RR.previousItem && (RR.previousItem.nextItem = RR.nextItem), RR.nextItem && (RR.nextItem.previousItem = RR.previousItem)
    }
    var OJ = GR(41906);
    class xJ extends XR {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(RR) {
        this._startDirectionFunction !== RR && (this._startDirectionFunction = RR, this._directionCreation.process = RR ? RJ : hR)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(RR) {
        this._startPositionFunction !== RR && (this._startPositionFunction = RR, this._positionCreation.process = RR ? qJ : ZJ)
      }
      set onDispose(RR) {
        this._onDisposeObserver && this.YH.remove(this._onDisposeObserver), this._onDisposeObserver = this.YH.add(RR)
      }
      get oB() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(RR) {
        this._useRampGradients !== RR && (this._useRampGradients = RR, this._resetEffect(), RR ? (this._rampCreation = {
          process: WJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: AJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._remapGradientProcessing, this._gravityProcessing))) : (vJ(this._rampCreation), vJ(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(RR) {
        this._isLocal !== RR && (this._isLocal = RR, RR ? (this._isLocalCreation = {
          process: iJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._isLocalCreation, this._positionCreation)) : vJ(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(RR) {
        this._animationSheetEnabled !== RR && (this._animationSheetEnabled = RR, RR ? (this._sheetCreation = {
          process: pJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._sheetCreation, this._colorDeadCreation)) : vJ(this._sheetCreation), this._reset())
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
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[RR]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[RR] ?? this._customWrappers[0]
      }
      setCustomEffect(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[JR] = new zR.c(this._engine), this._customWrappers[JR].effect = RR, this._customWrappers[JR].drawContext && (this._customWrappers[JR].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new tR.b), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(RR) {
        if (this.noiseTexture !== RR) {
          if (this._noiseTexture = RR, !RR) return vJ(this._noiseCreation), void vJ(this._noiseProcessing);
          this._noiseCreation = {
            process: wJ,
            previousItem: null,
            nextItem: null
          }, bJ(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: rJ,
            previousItem: null,
            nextItem: null
          }, bJ(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ZR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          qR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          fR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        IR || (IR = !0, xR(PR.g, cR)), (0, mR.e)(), super(RR), this._emitterInverseWorldMatrix = uR.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new uR.r, this.YH = new tR.b, this.onStoppedObservable = new tR.b, this.onStartedObservable = new tR.b, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new VR.e(0, 0, 0, 0), this._colorDiff = new VR.e(0, 0, 0, 0), this._scaledGravity = uR.r.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = RR => {}, this.recycleParticle = RR => {
          const JR = this._particles.pop();
          JR !== RR && JR.copyTo(RR), JR.metadata = null, this._stockParticles.push(JR)
        }, this._createParticle = () => {
          let RR;
          return 0 !== this._stockParticles.length ? (RR = this._stockParticles.pop(), RR._reset()) : RR = new BR(this), this._prepareParticle(RR), RR
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = JR, this._epsilon = qR, GR && "Scene" !== GR.getClassName() ? (this._engine = GR, this.defaultProjectionMatrix = uR.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = GR || iR.c.LastCreatedScene, this._engine = this._scene.ke(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.pM.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: XJ,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: ZJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: hR,
          previousItem: null,
          nextItem: null
        }, bJ(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: MJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: aJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: BJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: ER,
          previousItem: null,
          nextItem: null
        }, bJ(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: YR,
          previousItem: null,
          nextItem: null
        }, bJ(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, fR || (this._colorProcessing = {
          process: FR,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: sR,
          previousItem: null,
          nextItem: null
        }, bJ(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: uJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: fJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: eJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = ZR, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new zR.c(this._engine)
        }, this._customWrappers[0].effect = yR, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new KR.b, this.updateFunction = RR => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((RR => {
            this._noiseTextureData = RR
          })));
          const JR = RR === this._particles;
          for (let GR = 0; GR < RR.length; GR++) {
            const yR = RR[GR];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const tR = yR.age;
            if (yR.age += this._tempScaledUpdateSpeed, yR.age > yR.lifeTime) {
              const RR = yR.age - tR,
                JR = yR.lifeTime - tR;
              this._tempScaledUpdateSpeed = JR * this._tempScaledUpdateSpeed / RR, yR.age = yR.lifeTime
            }
            this._ratio = yR.age / yR.lifeTime, yR._properties.directionScale = this._tempScaledUpdateSpeed;
            let uR = this._updateQueueStart;
            for (; uR;) uR.process(yR, this), uR = uR.nextItem;
            if (this._isAnimationSheetEnabled && !fR && yR.updateCellIndex(), yR._inheritParticleInfoToSubEmitters(), yR.age >= yR.lifeTime) {
              if (this._emitFromParticle(yR), yR._properties.attachedSubEmitters) {
                for (const RR of yR._properties.attachedSubEmitters) RR.particleSystem.disposeOnStop = !0, RR.particleSystem.stop();
                yR._properties.attachedSubEmitters = null
              }
              this.recycleParticle(yR), JR && GR--
            } else;
          }
        }
      }
      serialize(RR) {
        throw new Error("Method not implemented.")
      }
      clone(RR, JR) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = CJ : this._lifeTimeCreation.process = XJ
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: nJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (vJ(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(RR) {
        this.targetStopDuration !== RR && (this._targetStopDuration = RR, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(RR, JR, GR) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, RR, JR, GR), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(RR) {
        return this._removeFactorGradient(this._lifeTimeGradients, RR), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(RR, JR, GR) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = LJ, this._sizeGradientProcessing = {
          process: UJ,
          previousItem: null,
          nextItem: null
        }, gJ(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, RR, JR, GR), this
      }
      removeSizeGradient(RR) {
        return this._removeFactorGradient(this._sizeGradients, RR), 0 === this._sizeGradients?.length && (vJ(this._sizeGradientProcessing), this._sizeCreation.process = aJ), this
      }
      addColorRemapGradient(RR, JR, GR) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, RR, JR, GR), this
      }
      removeColorRemapGradient(RR) {
        return this._removeFactorGradient(this._colorRemapGradients, RR), this
      }
      addAlphaRemapGradient(RR, JR, GR) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, RR, JR, GR), this
      }
      removeAlphaRemapGradient(RR) {
        return this._removeFactorGradient(this._alphaRemapGradients, RR), this
      }
      addAngularSpeedGradient(RR, JR, GR) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = lJ, this._angularSpeedGradientProcessing = {
          process: TR,
          previousItem: null,
          nextItem: null
        }, gJ(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, RR, JR, GR), this
      }
      removeAngularSpeedGradient(RR) {
        return this._removeFactorGradient(this._angularSpeedGradients, RR), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = BJ, vJ(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(RR, JR, GR) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: JJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: yJ,
          previousItem: null,
          nextItem: null
        }, gJ(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, RR, JR, GR), this
      }
      removeVelocityGradient(RR) {
        return this._removeFactorGradient(this._velocityGradients, RR), 0 === this._velocityGradients?.length && (vJ(this._velocityCreation), vJ(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(RR, JR, GR) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: GJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: tJ,
          previousItem: null,
          nextItem: null
        }, bJ(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, RR, JR, GR), this
      }
      removeLimitVelocityGradient(RR) {
        return this._removeFactorGradient(this._limitVelocityGradients, RR), 0 === this._limitVelocityGradients?.length && (vJ(this._limitVelocityCreation), vJ(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(RR, JR, GR) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: VJ,
          previousItem: null,
          nextItem: null
        }, gJ(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: KJ,
          previousItem: null,
          nextItem: null
        }, gJ(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, RR, JR, GR), this
      }
      removeDragGradient(RR) {
        return this._removeFactorGradient(this._dragGradients, RR), 0 === this._dragGradients?.length && (vJ(this._dragCreation), vJ(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(RR, JR, GR) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, RR, JR, GR), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(RR) {
        return this._removeFactorGradient(this._startSizeGradients, RR), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const RR = new Uint8Array(4 * this._rawTextureWidth),
          JR = VR.j.Color3[0];
        for (let GR = 0; GR < this._rawTextureWidth; GR++) {
          const tR = GR / this._rawTextureWidth;
          yR.m.GetCurrentGradient(tR, this._rampGradients, ((yR, tR, uR) => {
            VR.d.LerpToRef(yR.color, tR.color, uR, JR), RR[4 * GR] = 255 * JR.r, RR[4 * GR + 1] = 255 * JR.g, RR[4 * GR + 2] = 255 * JR.b, RR[4 * GR + 3] = 255
          }))
        }
        this._rampGradientsTexture = qR.b.CreateRGBATexture(RR, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((RR, JR) => RR.gradient < JR.gradient ? -1 : RR.gradient > JR.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(RR, JR) {
        this._rampGradients || (this._rampGradients = []);
        const GR = new yR.g(RR, JR);
        return this._rampGradients.push(GR), this._syncRampGradientTexture(), this
      }
      removeRampGradient(RR) {
        return this._removeGradientAndTexture(RR, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(RR, JR, GR) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = kR, this._colorProcessing.process = QR);
        const tR = new yR.c(RR, JR, GR);
        return this._colorGradients.push(tR), this._colorGradients.sort(((RR, JR) => RR.gradient < JR.gradient ? -1 : RR.gradient > JR.gradient ? 1 : 0)), this
      }
      removeColorGradient(RR) {
        if (!this._colorGradients) return this;
        let JR = 0;
        for (const GR of this._colorGradients) {
          if (GR.gradient === RR) {
            this._colorGradients.splice(JR, 1);
            break
          }
          JR++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = ER, this._colorProcessing.process = FR), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const RR of this._drawWrappers)
            if (RR)
              for (const JR of RR) JR?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(RR, JR, GR, yR, tR) {
        return tR[4 * (((RR = .5 * Math.abs(RR) + .5) * GR % GR | 0) + ((JR = .5 * Math.abs(JR) + .5) * yR % yR | 0) * GR)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const RR = this._engine,
          JR = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * JR), this._vertexBuffer = new ZR.d(RR, this._vertexData, !0, JR);
        let GR = 0;
        const yR = this._vertexBuffer.createVertexBuffer(ZR.l.PositionKind, GR, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[ZR.l.PositionKind] = yR, GR += 3;
        const tR = this._vertexBuffer.createVertexBuffer(ZR.l.ColorKind, GR, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[ZR.l.ColorKind] = tR, GR += 4;
        const uR = this._vertexBuffer.createVertexBuffer("angle", GR, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = uR, GR += 1;
        const qR = this._vertexBuffer.createVertexBuffer("size", GR, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = qR, GR += 2, this._isAnimationSheetEnabled) {
          const RR = this._vertexBuffer.createVertexBuffer("cellIndex", GR, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = RR, GR += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const RR = this._vertexBuffer.createVertexBuffer("direction", GR, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = RR, GR += 3
        }
        if (this._useRampGradients) {
          const RR = this._vertexBuffer.createVertexBuffer("remapData", GR, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = RR, GR += 4
        }
        let iR;
        if (this._useInstancing) {
          const JR = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new ZR.d(RR, JR, !1, 2), iR = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else iR = this._vertexBuffer.createVertexBuffer("offset", GR, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = iR, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const RR = [],
          JR = [];
        let GR = 0;
        for (let yR = 0; yR < this._capacity; yR++) RR.push(GR), RR.push(GR + 1), RR.push(GR + 2), RR.push(GR), RR.push(GR + 2), RR.push(GR + 3), JR.push(GR, GR + 1, GR + 1, GR + 2, GR + 2, GR + 3, GR + 3, GR, GR, GR + 3), GR += 4;
        this._indexBuffer = this._engine.createIndexBuffer(RR), this._linesIndexBuffer = this._engine.createIndexBuffer(JR)
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
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (RR) return this.startDelay = RR, void setTimeout((() => {
          this.start(0)
        }), RR);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const RR = this.noiseTexture;
          if (RR && RR.onGeneratedObservable) RR.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let JR = 0; JR < this.preWarmCycles; JR++) this.animate(!0), RR.render()
            }))
          }));
          else
            for (let JR = 0; JR < this.preWarmCycles; JR++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(RR))
      }
      _postStop(RR) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(RR, JR, GR, yR) {
        let tR = RR * this._vertexBufferSize;
        const ZR = uR.l.Fe[0].vN(this._scene?.floatingOriginOffset || uR.r.ZeroReadOnly);
        if (this._vertexData[tR++] = JR.position.x + this.worldOffset.x - ZR.x, this._vertexData[tR++] = JR.position.y + this.worldOffset.y - ZR.y, this._vertexData[tR++] = JR.position.z + this.worldOffset.z - ZR.z, this._vertexData[tR++] = JR.color.r, this._vertexData[tR++] = JR.color.g, this._vertexData[tR++] = JR.color.b, this._vertexData[tR++] = JR.color.a, this._vertexData[tR++] = JR.angle, this._vertexData[tR++] = JR.scale.x * JR.size, this._vertexData[tR++] = JR.scale.y * JR.size, this._isAnimationSheetEnabled && (this._vertexData[tR++] = JR.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[tR++] = JR.direction.x, this._vertexData[tR++] = JR.direction.y, this._vertexData[tR++] = JR.direction.z);
        else if (JR._properties.initialDirection) {
          let RR = JR._properties.initialDirection;
          this.isLocal && (uR.r.TransformNormalToRef(RR, this._emitterWorldMatrix, uR.l.Fe[0]), RR = uR.l.Fe[0]), 0 === RR.x && 0 === RR.z && (RR.x = .001), this._vertexData[tR++] = RR.x, this._vertexData[tR++] = RR.y, this._vertexData[tR++] = RR.z
        } else {
          let RR = JR.direction;
          this.isLocal && (uR.r.TransformNormalToRef(RR, this._emitterWorldMatrix, uR.l.Fe[0]), RR = uR.l.Fe[0]), 0 === RR.x && 0 === RR.z && (RR.x = .001), this._vertexData[tR++] = RR.x, this._vertexData[tR++] = RR.y, this._vertexData[tR++] = RR.z
        }
        this._useRampGradients && JR.remapData && (this._vertexData[tR++] = JR.remapData.x, this._vertexData[tR++] = JR.remapData.y, this._vertexData[tR++] = JR.remapData.z, this._vertexData[tR++] = JR.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === GR ? GR = this._epsilon : 1 === GR && (GR = 1 - this._epsilon), 0 === yR ? yR = this._epsilon : 1 === yR && (yR = 1 - this._epsilon)), this._vertexData[tR++] = GR, this._vertexData[tR] = yR)
      }
      _prepareParticle(RR) {}
      _createNewOnes(RR) {
        let JR;
        for (let GR = 0; GR < RR && this._particles.length !== this._capacity; GR++) {
          JR = this._createParticle(), this._particles.push(JR);
          let RR = this._createQueueStart;
          for (; RR;) RR.process(JR, this), RR = RR.nextItem;
          JR._inheritParticleInfoToSubEmitters()
        }
      }
      _update(RR) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const RR = this.emitter;
          this._emitterWorldMatrix = RR.getWorldMatrix()
        } else {
          const RR = this.emitter;
          this._emitterWorldMatrix = uR.e.Translation(RR.x, RR.y, RR.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(RR)
      }
      static _GetAttributeNamesOrOptions() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = [ZR.l.PositionKind, ZR.l.ColorKind, "angle", "offset", "size"];
        return RR && yR.push("cellIndex"), JR || yR.push("direction"), GR && yR.push("remapData"), yR
      }
      static _GetEffectCreationOptions() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, SR.b)(yR), RR && yR.push("particlesInfos"), JR && yR.push("logarithmicDepthConstant"), GR && (yR.push("vFogInfos"), yR.push("vFogColor")), yR
      }
      fillDefines(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, SR.j)(this, this._scene, RR), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && RR.push("#define FOG")), this._isAnimationSheetEnabled && RR.push("#define ANIMATESHEET"), this.useLogarithmicDepth && RR.push("#define LOGARITHMICDEPTH"), JR === XR.BLENDMODE_MULTIPLY && RR.push("#define BLENDMULTIPLYMODE"), this.isLocal && RR.push("#define LOCAL"), this._useRampGradients && RR.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (RR.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            RR.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            RR.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && RR.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            RR.push("#define BILLBOARDMODE_ALL")
        }
        GR && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), RR.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(RR, JR, GR) {
        JR.push(...xJ._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), RR.push(...xJ._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), GR.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, dR.e)(RR, this._imageProcessingConfigurationDefines), (0, dR.c)(GR, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(RR) {
        var JR;
        const GR = this._getCustomDrawWrapper(RR);
        if (GR?.effect) return GR;
        const yR = [];
        this.fillDefines(yR, RR);
        const uR = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          ZR = OJ.c._PrepareStringDefines(uR, yR),
          qR = ZR ? OJ.c.GetConfiguration(uR) : void 0;
        let iR = this._drawWrappers[uR];
        iR || (iR = this._drawWrappers[uR] = [], 0 === uR || this._renderPassObserver || (this._renderPassObserver = ((JR = this._engine)._onReleaseRenderPassObservable ?? (JR._onReleaseRenderPassObservable = new tR.b)).add((RR => {
          const JR = this._drawWrappers[RR];
          if (JR) {
            for (const RR of JR) RR?.dispose();
            delete this._drawWrappers[RR]
          }
        }))));
        let fR = iR[RR];
        fR || (fR = new zR.c(this._engine), fR.drawContext && (fR.drawContext.useInstancing = this._useInstancing), iR[RR] = fR);
        const VR = yR.join("\n");
        if (fR.defines !== VR) {
          const RR = [],
            JR = [],
            GR = [];
          this.fillUniformsAttributesAndSamplerNames(JR, RR, GR), ZR && (JR.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== qR?.defines.PREPASS_LOCAL_POSITION_INDEX && JR.push("inverseEmitterWM", "geometryWorldOffset")), fR.setEffect(this._engine.createEffect("particles", {
            attributes: RR,
            uniformsNames: JR,
            samplers: GR,
            defines: VR,
            shaderLanguage: this._shaderLanguage,
            multiTarget: ZR,
            indexParameters: ZR ? {
              buffersCount: qR?._mrtCount ?? 0
            } : void 0
          }, this._engine), VR)
        }
        return fR
      }
      _bindGeometryRendering(RR) {
        const JR = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          GR = OJ.c.GetConfiguration(JR);
        if (!GR?._defines) return;
        RR.setFloat("objectId", 0), RR.setInt("meshBlendTag", 0);
        const yR = this._scene?.activeCamera;
        if (RR.setFloat2("cameraInfo", yR?.minZ ?? 0, yR?.maxZ ?? 1), this.isLocal && void 0 !== GR.defines.PREPASS_LOCAL_POSITION_INDEX) {
          RR.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const JR = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || uR.r.ZeroReadOnly, uR.l.Fe[0]);
          RR.setVector3("geometryWorldOffset", JR)
        }
      }
      animate() {
        let RR, JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!JR && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (JR ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) RR = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const JR = this._calculateEmitRate();
            RR = JR * this._scaledUpdateSpeed | 0, this._newPartsExcess += JR * this._scaledUpdateSpeed - RR
          }
          if (this._newPartsExcess > 1 && (RR += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? RR = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(RR), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !JR) {
            let RR = 0;
            for (let JR = 0; JR < this._particles.length; JR++) {
              const GR = this._particles[JR];
              this._appendParticleVertices(RR, GR), RR += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const RR = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  JR = this._particles.length;
                JR < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, JR * RR, this._fixedCapacityHighWaterMark * RR), this._fixedCapacityHighWaterMark = JR, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const RR = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * RR), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let RR = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const JR = this._actualFrame / this.targetStopDuration;
          yR.m.GetCurrentGradient(JR, this._emitRateGradients, ((JR, GR, yR) => {
            JR !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = GR.getFactor(), this._currentEmitRateGradient = JR), RR = (0, rR.Lerp)(this._currentEmitRate1, this._currentEmitRate2, yR)
          }))
        }
        return RR
      }
      _appendParticleVertices(RR, JR) {
        this._appendParticleVertex(RR++, JR, 0, 0), this._useInstancing || (this._appendParticleVertex(RR++, JR, 1, 0), this._appendParticleVertex(RR++, JR, 1, 1), this._appendParticleVertex(RR, JR, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !xJ.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([GR.e(664).then((() => GR(64161))), GR.e(658).then((() => GR(64169)))])) : await Promise.all([GR.e(647).then((() => GR(64176))), Promise.all([GR.e(640), GR.e(673)]).then((() => GR(64182)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== XR.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(XR.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(XR.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(RR) {
        const JR = this._getWrapper(RR),
          GR = JR.effect,
          yR = this._engine;
        yR.enableEffect(JR);
        const tR = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        GR.setTexture("diffuseSampler", this.particleTexture), GR.setMatrix("view", tR);
        const ZR = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (GR.setMatrix("projection", ZR), this._isAnimationSheetEnabled && this.particleTexture) {
          const RR = this.particleTexture.getBaseSize();
          GR.setFloat3("particlesInfos", this.spriteCellWidth / RR.width, this.spriteCellHeight / RR.height, this.spriteCellWidth / RR.width)
        }
        if (GR.setVector2("translationPivot", this.translationPivot), GR.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const RR = this._scene.activeCamera;
          GR.setVector3("eyePosition", RR.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), GR.setTexture("rampSampler", this._rampGradientsTexture));
        const qR = GR.defines;
        this._scene && ((0, SR.c)(GR, this, this._scene), this.applyFog && (0, jR.k)(this._scene, void 0, GR)), qR.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (tR.invertToRef(uR.l.Matrix[0]), GR.setMatrix("invView", uR.l.Matrix[0])), GR._multiTarget && this._bindGeometryRendering(GR), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? yR.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, GR) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, GR)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? yR.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, GR) : yR.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, GR), this.useLogarithmicDepth && this._scene && (0, jR.u)(qR, GR, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(GR), this._setEngineBasedOnBlendMode(RR), GR._multiTarget && OJ.c._BindZeroAlphaDiscard(yR, GR);
        let iR = !1;
        try {
          OJ.c._BindAttachmentsForEffect(yR, GR) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(GR), this._useInstancing ? this._scene?.forceWireframe ? yR.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : yR.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? yR.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : yR.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), iR = !0)
        } finally {
          OJ.c._RestoreAttachments(yR)
        }
        return iR ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const RR = this._engine;
        let JR;
        return RR.setState && (RR.setState(!1), this.forceDepthWrite && RR.setDepthWrite(!0)), JR = this.blendMode === XR.BLENDMODE_MULTIPLYADD ? this._render(XR.BLENDMODE_MULTIPLY) + this._render(XR.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), JR
      }
      _onDispose() {}
      dispose() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), RR && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), RR && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(JR, GR), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const RR = this._scene.pM.indexOf(this);
          RR > -1 && this._scene.pM.splice(RR, 1), this._scene._activeParticleSystems.dispose()
        }
        this.YH.notifyObservers(this), this.YH.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    xJ.ForceGLSL = !1;
    var NJ, DJ = GR(38253);
    ! function(RR) {
      RR[RR.ATTACHED = 0] = "ATTACHED", RR[RR.END = 1] = "END"
    }(NJ || (NJ = {}));
    class HJ {
      constructor(RR) {
        if (this.particleSystem = RR, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !RR.emitter || !RR.emitter.dispose) {
          const JR = (0, DJ.e)("BABYLON.AbstractMesh");
          RR.emitter = new JR("SubemitterSystemEmitter", RR.jH()), RR._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let RR = this.particleSystem.emitter;
        if (RR) {
          if (RR instanceof uR.r) RR = RR.clone();
          else if (-1 !== RR.getClassName().indexOf("Mesh")) {
            RR = new((0, DJ.e)("BABYLON.Mesh"))("", RR.jH()), RR.isVisible = !1
          }
        } else RR = new uR.r;
        const JR = new HJ(this.particleSystem.clone(this.particleSystem.name, RR));
        return JR.particleSystem.name += "Clone", JR.type = this.type, JR.inheritDirection = this.inheritDirection, JR.inheritedVelocityAmount = this.inheritedVelocityAmount, JR.particleSystem._disposeEmitterOnDispose = !0, JR.particleSystem.disposeOnStop = !0, JR
      }
      serialize() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = {};
        return JR.type = this.type, JR.inheritDirection = this.inheritDirection, JR.inheritedVelocityAmount = this.inheritedVelocityAmount, JR.particleSystem = this.particleSystem.serialize(RR), JR
      }
      static _ParseParticleSystem(RR, JR, GR) {
        throw (0, oR.j)("ParseParticle")
      }
      static Parse(RR, JR, GR) {
        const yR = RR.particleSystem,
          tR = new HJ(HJ._ParseParticleSystem(yR, JR, GR, !0));
        return tR.type = RR.type, tR.inheritDirection = RR.inheritDirection, tR.inheritedVelocityAmount = RR.inheritedVelocityAmount, tR.particleSystem._isSubEmitter = !0, tR
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var oJ = GR(41418),
      cJ = GR(41542);
    const PJ = () => {};
    class IJ {
      constructor() {
        this.particlePositionGenerator = PJ, this.particleDestinationGenerator = PJ, this.particleDirectionGenerator = PJ
      }
      startDirectionFunction(RR, JR, GR, yR) {
        const tR = uR.l.Fe[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== PJ) this.particleDirectionGenerator(-1, GR, tR);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== PJ) {
          this.particleDestinationGenerator(-1, GR, tR);
          const RR = uR.l.Fe[1];
          tR.subtractToRef(GR.position, RR), RR.scaleToRef(1 / GR.lifeTime, tR)
        } else tR.set(0, 0, 0);
        yR ? JR.vN(tR) : uR.r.TransformNormalToRef(tR, RR, JR)
      }
      startPositionFunction(RR, JR, GR, yR) {
        const tR = uR.l.Fe[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== PJ ? this.particlePositionGenerator(-1, GR, tR) : tR.set(0, 0, 0), yR ? JR.vN(tR) : uR.r.TransformCoordinatesToRef(tR, RR, JR)
      }
      clone() {
        const RR = new IJ;
        return wR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {}
      buildUniformLayout(RR) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const RR = {};
        return RR.type = this.getClassName(), RR.particlePositionGenerator = this.particlePositionGenerator, RR.particleDestinationGenerator = this.particleDestinationGenerator, RR
      }
      parse(RR) {
        RR.particlePositionGenerator && (this.particlePositionGenerator = RR.particlePositionGenerator), RR.particleDestinationGenerator && (this.particleDestinationGenerator = RR.particleDestinationGenerator)
      }
    }
    const mJ = uR.r.Zero(),
      zJ = uR.r.Zero(),
      SJ = uR.r.Zero();
    class jJ {
      constructor() {
        this.strength = 0, this.position = uR.r.Zero()
      }
      _processParticle(RR, JR) {
        this.position.subtractToRef(RR.position, mJ);
        const GR = mJ.lengthSquared() + 1;
        mJ.normalize().scaleToRef(this.strength / GR, zJ), zJ.scaleToRef(JR._tempScaledUpdateSpeed, SJ), RR.direction.addInPlace(SJ)
      }
      serialize() {
        return {
          position: this.position.QtR(),
          strength: this.strength
        }
      }
    }
    const dJ = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class EJ extends xJ {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = RR => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const JR = Math.floor(Math.random() * this._subEmitters.length);
          for (const GR of this._subEmitters[JR])
            if (1 === GR.type) {
              const JR = GR.clone();
              RR._inheritParticleInfoToSubEmitter(JR), JR.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(JR.particleSystem), JR.particleSystem.start()
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
      set flowMap(RR) {
        this._flowMap !== RR && (this._flowMap = RR, this._flowMapUpdate && (vJ(this._flowMapUpdate), this._flowMapUpdate = null), RR && (this._flowMapUpdate = {
          process: RR => {
            const JR = this.jH()?.getTransformMatrix();
            this._flowMap._processParticle(RR, this.flowMapStrength * this._tempScaledUpdateSpeed, JR)
          },
          previousItem: null,
          nextItem: null
        }, bJ(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(RR) {
        super.addAttractor(RR), 1 === this._attractors.length && (this._attractorUpdate = {
          process: RR => {
            for (const JR of this._attractors) JR._processParticle(RR, this)
          },
          previousItem: null,
          nextItem: null
        }, bJ(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(RR) {
        super.removeAttractor(RR), 0 === this._attractors.length && this._attractorUpdate && vJ(this._attractorUpdate)
      }
      start() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(RR)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const RR of this.subEmitters) RR instanceof EJ ? this._subEmitters.push([new HJ(RR)]) : RR instanceof HJ ? this._subEmitters.push([RR]) : RR instanceof Array && this._subEmitters.push(RR)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const RR of this.activeSubSystems) RR.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const RR = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== RR && this._rootParticleSystem.activeSubSystems.splice(RR, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(RR) {
        RR && this._stopSubEmitters()
      }
      _prepareParticle(RR) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const JR = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          RR._properties.attachedSubEmitters = [];
          for (const GR of JR)
            if (0 === GR.type) {
              const JR = GR.clone();
              RR._properties.attachedSubEmitters.push(JR), JR.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), RR && this.particles)
          for (const GR of this.particles)
            if (GR._properties.attachedSubEmitters)
              for (let RR = GR._properties.attachedSubEmitters.length - 1; RR >= 0; RR -= 1) GR._properties.attachedSubEmitters[RR].dispose();
        if (JR && this.activeSubSystems)
          for (let GR = this.activeSubSystems.length - 1; GR >= 0; GR -= 1) this.activeSubSystems[GR].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let RR = 0; RR < this._subEmitters.length; RR++)
            for (const JR of this._subEmitters[RR]) JR.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(RR, JR, GR, yR) {
        let tR;
        tR = GR instanceof oJ.c ? null : GR;
        const ZR = (0, DJ.e)("BABYLON.Texture");
        if (ZR && tR)
          if (RR.texture) JR.particleTexture = ZR.Parse(RR.texture, tR, yR);
          else if (RR.textureName) {
          const GR = RR.textureSettings;
          if (JR.particleTexture = new ZR(yR + RR.textureName, tR, !1, void 0 === RR.invertY || RR.invertY, GR ? GR.samplingMode : void 0), JR.particleTexture.name = RR.textureName, GR) {
            const RR = JR.particleTexture;
            for (const JR of dJ) void 0 !== GR[JR] && (RR[JR] = GR[JR])
          }
        }
        if (RR.emitterId || 0 === RR.emitterId || void 0 !== RR.emitter ? (RR.emitterId || 0 === RR.emitterId) && tR ? (JR.emitter = tR.getLastMeshById(RR.emitterId), JR.emitter || (JR.emitter = uR.r.Zero())) : JR.emitter = uR.r.FromArray(RR.emitter) : JR.emitter = uR.r.Zero(), JR.isLocal = !!RR.isLocal, void 0 !== RR.renderingGroupId && (JR.renderingGroupId = RR.renderingGroupId), void 0 !== RR.isBillboardBased && (JR.isBillboardBased = RR.isBillboardBased), void 0 !== RR.billboardMode && (JR.billboardMode = RR.billboardMode), void 0 !== RR.useLogarithmicDepth && (JR.useLogarithmicDepth = RR.useLogarithmicDepth), RR.animations) {
          for (let GR = 0; GR < RR.animations.length; GR++) {
            const yR = RR.animations[GR],
              tR = (0, DJ.e)("BABYLON.Animation");
            tR && JR.animations.push(tR.Parse(yR))
          }
          JR.beginAnimationOnStart = RR.beginAnimationOnStart, JR.beginAnimationFrom = RR.beginAnimationFrom, JR.beginAnimationTo = RR.beginAnimationTo, JR.beginAnimationLoop = RR.beginAnimationLoop
        }
        if (RR.autoAnimate && tR && tR.beginAnimation(JR, RR.autoAnimateFrom, RR.autoAnimateTo, RR.autoAnimateLoop, RR.autoAnimateSpeed || 1), JR.startDelay = 0 | RR.startDelay, JR.minAngularSpeed = RR.minAngularSpeed, JR.maxAngularSpeed = RR.maxAngularSpeed, JR.minSize = RR.minSize, JR.maxSize = RR.maxSize, RR.minScaleX && (JR.minScaleX = RR.minScaleX, JR.maxScaleX = RR.maxScaleX, JR.minScaleY = RR.minScaleY, JR.maxScaleY = RR.maxScaleY), void 0 !== RR.preWarmCycles && (JR.preWarmCycles = RR.preWarmCycles, JR.preWarmStepOffset = RR.preWarmStepOffset), void 0 !== RR.minInitialRotation && (JR.minInitialRotation = RR.minInitialRotation, JR.maxInitialRotation = RR.maxInitialRotation), JR.minLifeTime = RR.minLifeTime, JR.maxLifeTime = RR.maxLifeTime, JR.minEmitPower = RR.minEmitPower, JR.maxEmitPower = RR.maxEmitPower, JR.emitRate = RR.emitRate, JR.gravity = uR.r.FromArray(RR.gravity), RR.noiseStrength && (JR.noiseStrength = uR.r.FromArray(RR.noiseStrength)), JR.color1 = VR.e.FromArray(RR.color1), JR.color2 = VR.e.FromArray(RR.color2), JR.colorDead = VR.e.FromArray(RR.colorDead), JR.updateSpeed = RR.updateSpeed, JR.targetStopDuration = RR.targetStopDuration, JR.blendMode = RR.blendMode, RR.colorGradients)
          for (const uR of RR.colorGradients) JR.addColorGradient(uR.gradient, VR.e.FromArray(uR.color1), uR.color2 ? VR.e.FromArray(uR.color2) : void 0);
        if (RR.rampGradients) {
          for (const GR of RR.rampGradients) JR.addRampGradient(GR.gradient, VR.d.FromArray(GR.color));
          JR.useRampGradients = RR.useRampGradients
        }
        if (RR.colorRemapGradients)
          for (const uR of RR.colorRemapGradients) JR.addColorRemapGradient(uR.gradient, void 0 !== uR.factor1 ? uR.factor1 : uR.factor, uR.factor2);
        if (RR.alphaRemapGradients)
          for (const uR of RR.alphaRemapGradients) JR.addAlphaRemapGradient(uR.gradient, void 0 !== uR.factor1 ? uR.factor1 : uR.factor, uR.factor2);
        if (RR.sizeGradients)
          for (const uR of RR.sizeGradients) JR.addSizeGradient(uR.gradient, void 0 !== uR.factor1 ? uR.factor1 : uR.factor, uR.factor2);
        if (RR.angularSpeedGradients)
          for (const uR of RR.angularSpeedGradients) JR.addAngularSpeedGradient(uR.gradient, void 0 !== uR.factor1 ? uR.factor1 : uR.factor, uR.factor2);
        if (RR.velocityGradients)
          for (const uR of RR.velocityGradients) JR.addVelocityGradient(uR.gradient, void 0 !== uR.factor1 ? uR.factor1 : uR.factor, uR.factor2);
        if (RR.dragGradients)
          for (const uR of RR.dragGradients) JR.addDragGradient(uR.gradient, void 0 !== uR.factor1 ? uR.factor1 : uR.factor, uR.factor2);
        if (RR.emitRateGradients)
          for (const uR of RR.emitRateGradients) JR.addEmitRateGradient(uR.gradient, void 0 !== uR.factor1 ? uR.factor1 : uR.factor, uR.factor2);
        if (RR.startSizeGradients)
          for (const uR of RR.startSizeGradients) JR.addStartSizeGradient(uR.gradient, void 0 !== uR.factor1 ? uR.factor1 : uR.factor, uR.factor2);
        if (RR.lifeTimeGradients)
          for (const uR of RR.lifeTimeGradients) JR.addLifeTimeGradient(uR.gradient, void 0 !== uR.factor1 ? uR.factor1 : uR.factor, uR.factor2);
        if (RR.limitVelocityGradients) {
          for (const GR of RR.limitVelocityGradients) JR.addLimitVelocityGradient(GR.gradient, void 0 !== GR.factor1 ? GR.factor1 : GR.factor, GR.factor2);
          JR.limitVelocityDamping = RR.limitVelocityDamping
        }
        if (RR.noiseTexture && tR) {
          const GR = (0, DJ.e)("BABYLON.ProceduralTexture");
          JR.noiseTexture = GR.Parse(RR.noiseTexture, tR, yR)
        }
        let qR;
        if (RR.particleEmitterType) {
          switch (RR.particleEmitterType.type) {
            case "SphereParticleEmitter":
              qR = new LR;
              break;
            case "SphereDirectedParticleEmitter":
              qR = new nR;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              qR = new WR;
              break;
            case "ConeDirectedParticleEmitter":
              qR = new AR;
              break;
            case "CylinderParticleEmitter":
              qR = new UR.i;
              break;
            case "CylinderDirectedParticleEmitter":
              qR = new UR.e;
              break;
            case "HemisphericParticleEmitter":
              qR = new aR;
              break;
            case "PointParticleEmitter":
              qR = new eR;
              break;
            case "MeshParticleEmitter":
              qR = new CR;
              break;
            case "CustomParticleEmitter":
              qR = new IJ;
              break;
            default:
              qR = new KR.b
          }
          qR.parse(RR.particleEmitterType, tR)
        } else qR = new KR.b, qR.parse(RR, tR);
        JR.particleEmitterType = qR, JR.startSpriteCellID = RR.startSpriteCellID, JR.endSpriteCellID = RR.endSpriteCellID, JR.spriteCellLoop = RR.spriteCellLoop ?? !0, JR.spriteCellWidth = RR.spriteCellWidth, JR.spriteCellHeight = RR.spriteCellHeight, JR.spriteCellChangeSpeed = RR.spriteCellChangeSpeed, JR.spriteRandomStartCell = RR.spriteRandomStartCell, JR.disposeOnStop = RR.disposeOnStop ?? !1, JR.manualEmitCount = RR.manualEmitCount ?? -1
      }
      static Parse(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          tR = arguments.length > 4 ? arguments[4] : void 0;
        const ZR = RR.name;
        let qR, iR, fR = null,
          KR = null;
        if (JR instanceof oJ.c ? qR = JR : (iR = JR, qR = iR.ke()), RR.customShader && (0, oR.c)(qR.createEffectForParticles)) {
          KR = RR.customShader;
          const JR = KR.shaderOptions.defines.length > 0 ? KR.shaderOptions.defines.join("\n") : "";
          fR = qR.createEffectForParticles(KR.shaderPath.fragmentElement, KR.shaderOptions.uniforms, KR.shaderOptions.samplers, JR)
        }
        const wR = new EJ(ZR, tR || RR.hK, JR, fR, RR.isAnimationSheetEnabled);
        if (wR.customShader = KR, wR._rootUrl = GR, RR.id && (wR.id = RR.id), RR.subEmitters) {
          wR.subEmitters = [];
          for (const yR of RR.subEmitters) {
            const RR = [];
            for (const tR of yR) RR.push(HJ.Parse(tR, JR, GR));
            wR.subEmitters.push(RR)
          }
        }
        if (RR.attractors)
          for (const VR of RR.attractors) {
            const RR = new jJ;
            RR.position = uR.r.FromArray(VR.position), RR.strength = VR.strength, wR.addAttractor(RR)
          }
        return EJ._Parse(RR, wR, JR, GR), RR.textureMask && (wR.textureMask = VR.e.FromArray(RR.textureMask)), RR.worldOffset && (wR.worldOffset = uR.r.FromArray(RR.worldOffset)), RR.preventAutoStart && (wR.preventAutoStart = RR.preventAutoStart), RR.metadata && (wR.metadata = RR.metadata), yR || wR.preventAutoStart || wR.start(), wR
      }
      serialize() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = {};
        if (EJ._Serialize(JR, this, RR), JR.textureMask = this.textureMask.QtR(), JR.customShader = this.customShader, JR.preventAutoStart = this.preventAutoStart, JR.worldOffset = this.worldOffset.QtR(), this.metadata && (JR.metadata = this.metadata), this.subEmitters) {
          JR.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const GR of this._subEmitters) {
            const yR = [];
            for (const JR of GR) JR.particleSystem.doNotSerialize || yR.push(JR.serialize(RR));
            JR.subEmitters.push(yR)
          }
        }
        if (this._attractors && this._attractors.length) {
          JR.attractors = [];
          for (const RR of this._attractors) JR.attractors.push(RR.serialize())
        }
        return JR
      }
      static _Serialize(RR, JR, GR) {
        if (RR.name = JR.name, RR.id = JR.id, RR.hK = JR.getCapacity(), RR.disposeOnStop = JR.disposeOnStop, RR.manualEmitCount = JR.manualEmitCount, JR.emitter.position) {
          const GR = JR.emitter;
          RR.emitterId = GR.id
        } else {
          const GR = JR.emitter;
          RR.emitter = GR.QtR()
        }
        if (JR.particleEmitterType && (RR.particleEmitterType = JR.particleEmitterType.serialize()), JR.particleTexture)
          if (GR) RR.texture = JR.particleTexture.serialize();
          else {
            const GR = JR.particleTexture;
            RR.textureName = JR.particleTexture.name, RR.invertY = !!GR._invertY;
            const yR = {};
            for (const RR of dJ) yR[RR] = GR[RR];
            yR.samplingMode = GR.samplingMode, RR.textureSettings = yR
          } RR.isLocal = JR.isLocal, cJ.c.AppendSerializedAnimations(JR, RR), RR.beginAnimationOnStart = JR.beginAnimationOnStart, RR.beginAnimationFrom = JR.beginAnimationFrom, RR.beginAnimationTo = JR.beginAnimationTo, RR.beginAnimationLoop = JR.beginAnimationLoop, RR.startDelay = JR.startDelay, RR.renderingGroupId = JR.renderingGroupId, RR.isBillboardBased = JR.isBillboardBased, RR.billboardMode = JR.billboardMode, RR.minAngularSpeed = JR.minAngularSpeed, RR.maxAngularSpeed = JR.maxAngularSpeed, RR.minSize = JR.minSize, RR.maxSize = JR.maxSize, RR.minScaleX = JR.minScaleX, RR.maxScaleX = JR.maxScaleX, RR.minScaleY = JR.minScaleY, RR.maxScaleY = JR.maxScaleY, RR.minEmitPower = JR.minEmitPower, RR.maxEmitPower = JR.maxEmitPower, RR.minLifeTime = JR.minLifeTime, RR.maxLifeTime = JR.maxLifeTime, RR.emitRate = JR.emitRate, RR.gravity = JR.gravity.QtR(), RR.noiseStrength = JR.noiseStrength.QtR(), RR.color1 = JR.color1.QtR(), RR.color2 = JR.color2.QtR(), RR.colorDead = JR.colorDead.QtR(), RR.updateSpeed = JR.updateSpeed, RR.targetStopDuration = JR.targetStopDuration, RR.blendMode = JR.blendMode, RR.preWarmCycles = JR.preWarmCycles, RR.preWarmStepOffset = JR.preWarmStepOffset, RR.minInitialRotation = JR.minInitialRotation, RR.maxInitialRotation = JR.maxInitialRotation, RR.startSpriteCellID = JR.startSpriteCellID, RR.spriteCellLoop = JR.spriteCellLoop, RR.endSpriteCellID = JR.endSpriteCellID, RR.spriteCellChangeSpeed = JR.spriteCellChangeSpeed, RR.spriteCellWidth = JR.spriteCellWidth, RR.spriteCellHeight = JR.spriteCellHeight, RR.spriteRandomStartCell = JR.spriteRandomStartCell, RR.isAnimationSheetEnabled = JR.isAnimationSheetEnabled, RR.useLogarithmicDepth = JR.useLogarithmicDepth;
        const yR = JR.getColorGradients();
        if (yR) {
          RR.colorGradients = [];
          for (const JR of yR) {
            const GR = {
              gradient: JR.gradient,
              color1: JR.color1.QtR()
            };
            JR.color2 ? GR.color2 = JR.color2.QtR() : GR.color2 = JR.color1.QtR(), RR.colorGradients.push(GR)
          }
        }
        const tR = JR.getRampGradients();
        if (tR) {
          RR.rampGradients = [];
          for (const JR of tR) {
            const GR = {
              gradient: JR.gradient,
              color: JR.color.QtR()
            };
            RR.rampGradients.push(GR)
          }
          RR.useRampGradients = JR.useRampGradients
        }
        const uR = JR.getColorRemapGradients();
        if (uR) {
          RR.colorRemapGradients = [];
          for (const JR of uR) {
            const GR = {
              gradient: JR.gradient,
              factor1: JR.factor1
            };
            void 0 !== JR.factor2 ? GR.factor2 = JR.factor2 : GR.factor2 = JR.factor1, RR.colorRemapGradients.push(GR)
          }
        }
        const ZR = JR.getAlphaRemapGradients();
        if (ZR) {
          RR.alphaRemapGradients = [];
          for (const JR of ZR) {
            const GR = {
              gradient: JR.gradient,
              factor1: JR.factor1
            };
            void 0 !== JR.factor2 ? GR.factor2 = JR.factor2 : GR.factor2 = JR.factor1, RR.alphaRemapGradients.push(GR)
          }
        }
        const qR = JR.getSizeGradients();
        if (qR) {
          RR.sizeGradients = [];
          for (const JR of qR) {
            const GR = {
              gradient: JR.gradient,
              factor1: JR.factor1
            };
            void 0 !== JR.factor2 ? GR.factor2 = JR.factor2 : GR.factor2 = JR.factor1, RR.sizeGradients.push(GR)
          }
        }
        const iR = JR.getAngularSpeedGradients();
        if (iR) {
          RR.angularSpeedGradients = [];
          for (const JR of iR) {
            const GR = {
              gradient: JR.gradient,
              factor1: JR.factor1
            };
            void 0 !== JR.factor2 ? GR.factor2 = JR.factor2 : GR.factor2 = JR.factor1, RR.angularSpeedGradients.push(GR)
          }
        }
        const fR = JR.getVelocityGradients();
        if (fR) {
          RR.velocityGradients = [];
          for (const JR of fR) {
            const GR = {
              gradient: JR.gradient,
              factor1: JR.factor1
            };
            void 0 !== JR.factor2 ? GR.factor2 = JR.factor2 : GR.factor2 = JR.factor1, RR.velocityGradients.push(GR)
          }
        }
        const VR = JR.getDragGradients();
        if (VR) {
          RR.dragGradients = [];
          for (const JR of VR) {
            const GR = {
              gradient: JR.gradient,
              factor1: JR.factor1
            };
            void 0 !== JR.factor2 ? GR.factor2 = JR.factor2 : GR.factor2 = JR.factor1, RR.dragGradients.push(GR)
          }
        }
        const KR = JR.getEmitRateGradients();
        if (KR) {
          RR.emitRateGradients = [];
          for (const JR of KR) {
            const GR = {
              gradient: JR.gradient,
              factor1: JR.factor1
            };
            void 0 !== JR.factor2 ? GR.factor2 = JR.factor2 : GR.factor2 = JR.factor1, RR.emitRateGradients.push(GR)
          }
        }
        const wR = JR.getStartSizeGradients();
        if (wR) {
          RR.startSizeGradients = [];
          for (const JR of wR) {
            const GR = {
              gradient: JR.gradient,
              factor1: JR.factor1
            };
            void 0 !== JR.factor2 ? GR.factor2 = JR.factor2 : GR.factor2 = JR.factor1, RR.startSizeGradients.push(GR)
          }
        }
        const rR = JR.getLifeTimeGradients();
        if (rR) {
          RR.lifeTimeGradients = [];
          for (const JR of rR) {
            const GR = {
              gradient: JR.gradient,
              factor1: JR.factor1
            };
            void 0 !== JR.factor2 ? GR.factor2 = JR.factor2 : GR.factor2 = JR.factor1, RR.lifeTimeGradients.push(GR)
          }
        }
        const eR = JR.getLimitVelocityGradients();
        if (eR) {
          RR.limitVelocityGradients = [];
          for (const JR of eR) {
            const GR = {
              gradient: JR.gradient,
              factor1: JR.factor1
            };
            void 0 !== JR.factor2 ? GR.factor2 = JR.factor2 : GR.factor2 = JR.factor1, RR.limitVelocityGradients.push(GR)
          }
          RR.limitVelocityDamping = JR.limitVelocityDamping
        }
        JR.noiseTexture && (RR.noiseTexture = JR.noiseTexture.serialize())
      }
      clone(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = {
          ...this._customWrappers
        };
        let tR = null;
        const uR = this._engine;
        if ((0, oR.c)(uR.createEffectForParticles) && null != this.customShader) {
          tR = this.customShader;
          const RR = tR.shaderOptions.defines.length > 0 ? tR.shaderOptions.defines.join("\n") : "",
            JR = uR.createEffectForParticles(tR.shaderPath.fragmentElement, tR.shaderOptions.uniforms, tR.shaderOptions.samplers, RR);
          yR[0] ? yR[0].effect = JR : this.setCustomEffect(JR, 0)
        }
        const ZR = this.serialize(GR),
          qR = !1 === GR && this.particleTexture ? this.particleTexture.clone() : null;
        qR && (ZR.textureName = void 0);
        const iR = EJ.Parse(ZR, this._scene || this._engine, this._rootUrl);
        return iR.name = RR, iR.customShader = tR, iR._customWrappers = yR, qR && (iR.particleTexture = qR), void 0 === JR && (JR = this.emitter), this.noiseTexture && (iR.noiseTexture = this.noiseTexture.clone()), iR.emitter = JR, this.preventAutoStart || iR.start(), iR
      }
    }
    EJ.BILLBOARDMODE_Y = 2, EJ.BILLBOARDMODE_ALL = 7, EJ.BILLBOARDMODE_STRETCHED = 8, EJ.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let YJ = !1;
    YJ || (YJ = !0, HJ._ParseParticleSystem = EJ.Parse)
  },
  53641: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      SkyMaterial: () => WR,
      _MaxColorValueForRenderTarget: () => UR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(41542),
      ZR = GR(38195),
      qR = GR(41803),
      iR = GR(41869),
      fR = GR(53584),
      VR = GR(42711),
      KR = GR(41610),
      wR = GR(38253),
      rR = GR(41900),
      eR = GR(41873),
      aR = GR(41855),
      LR = GR(41852);
    class nR extends qR.b {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function UR(RR) {
      switch (RR) {
        case fR.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case fR.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let WR = (() => {
      var RR;
      let JR, qR, fR, wR, WR, AR, CR, XR, MR, BR, lR, pR, gR, bR, vR, OR = iR.d,
        xR = [],
        NR = [],
        DR = [],
        HR = [],
        oR = [],
        cR = [],
        PR = [],
        IR = [],
        mR = [],
        zR = [],
        SR = [],
        jR = [],
        dR = [],
        ER = [],
        YR = [],
        kR = [],
        QR = [],
        FR = [],
        TR = [],
        sR = [],
        hR = [],
        RJ = [],
        JJ = [],
        GJ = [],
        yJ = [],
        tJ = [],
        uJ = [],
        ZJ = [],
        qJ = [],
        iJ = [];
      return RR = class extends OR {
        constructor(RR, JR) {
          super(RR, JR, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, yR.m)(this, xR, 1), this.turbidity = ((0, yR.m)(this, NR), (0, yR.m)(this, DR, 10)), this.rayleigh = ((0, yR.m)(this, HR), (0, yR.m)(this, oR, 2)), this.mieCoefficient = ((0, yR.m)(this, cR), (0, yR.m)(this, PR, .005)), this.mieDirectionalG = ((0, yR.m)(this, IR), (0, yR.m)(this, mR, .8)), this.distance = ((0, yR.m)(this, zR), (0, yR.m)(this, SR, 500)), this.inclination = ((0, yR.m)(this, jR), (0, yR.m)(this, dR, .49)), this.azimuth = ((0, yR.m)(this, ER), (0, yR.m)(this, YR, .25)), this.sunPosition = ((0, yR.m)(this, kR), (0, yR.m)(this, QR, new ZR.Fe(0, 100, 0))), this.useSunPosition = ((0, yR.m)(this, FR), (0, yR.m)(this, TR, !1)), this.cameraOffset = ((0, yR.m)(this, sR), (0, yR.m)(this, hR, ZR.Fe.Zero())), this.up = ((0, yR.m)(this, RJ), (0, yR.m)(this, JJ, ZR.Fe.Up())), this.dithering = ((0, yR.m)(this, GJ), (0, yR.m)(this, yJ, !1)), this.rawHdrOutput = ((0, yR.m)(this, tJ), (0, yR.m)(this, uJ, !1)), this.cloudiness = ((0, yR.m)(this, ZJ), (0, yR.m)(this, qJ, 0)), this._cameraPosition = ((0, yR.m)(this, iJ), ZR.Fe.Zero()), this._skyOrientation = new ZR.Quaternion
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
        isReadyForSubMesh(JR, GR) {
          const yR = GR._drawWrapper;
          if (this.isFrozen && yR.effect && yR._wasPreviouslyReady) return !0;
          GR.materialDefines || (GR.materialDefines = new nR);
          const tR = GR.materialDefines,
            uR = this.jH();
          if (this._isReadyForSubMesh(GR)) return !0;
          if ((0, LR.eb)(JR, uR, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, tR, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, LR.X)(JR, tR, !0, !1), tR.IMAGEPROCESSINGPOSTPROCESS !== uR.imageProcessingConfiguration.applyByPostProcess && tR.markAsMiscDirty(), tR.DITHER !== this.dithering && tR.markAsMiscDirty(), tR.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && tR.markAsMiscDirty(), tR.isDirty) {
            tR.markAsProcessed(), uR.resetCachedMaterial();
            const JR = new eR.c;
            tR.FOG && JR.addFallback(1, "FOG"), tR.IMAGEPROCESSINGPOSTPROCESS = uR.imageProcessingConfiguration.applyByPostProcess, tR.DITHER = this.dithering, tR.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const yR = [VR.c.PositionKind];
            tR.VERTEXCOLOR && yR.push(VR.c.ColorKind);
            const ZR = "sky",
              qR = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, aR.b)(qR);
            const iR = tR.toString();
            GR.setEffect(uR.ke().createEffect(ZR, {
              attributes: yR,
              uniformsNames: qR,
              uniformBuffersNames: [],
              samplers: [],
              defines: iR,
              fallbacks: JR,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: RR._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, uR.ke()), tR, this._materialContext)
          }
          return !(!GR.effect || !GR.effect.isReady()) && (tR._renderId = uR.getRenderId(), yR._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(RR, JR, GR) {
          const yR = this.jH(),
            tR = GR.materialDefines;
          if (!tR) return;
          const uR = GR.effect;
          if (!uR) return;
          this._activeEffect = uR, this.bindOnlyWorldMatrix(RR), this._activeEffect.setMatrix("viewProjection", yR.getTransformMatrix()), this._mustRebind(yR, uR, GR) && ((0, aR.c)(uR, this, yR), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, LR.u)(tR, uR, yR)), yR.fogEnabled && JR.applyFog && yR.fogMode !== KR.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", yR.getViewMatrix()), (0, LR.k)(yR, JR, this._activeEffect, this.rawHdrOutput);
          const qR = yR.activeCamera;
          if (qR) {
            const RR = qR.getWorldMatrix();
            this._cameraPosition.x = RR.m[12], this._cameraPosition.y = RR.m[13], this._cameraPosition.z = RR.m[14], this._activeEffect.setVector3("cameraPosition", ZR.TmpVectors.Fe[0].vN(this._cameraPosition).VuR(yR.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const RR = yR.ke()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", UR(RR?.texture?.type))
          }
          if (!this.useSunPosition) {
            const RR = Math.PI * (this.inclination - .5),
              JR = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(JR) * Math.cos(RR), this.sunPosition.y = this.distance * Math.sin(-RR), this.sunPosition.z = this.distance * Math.sin(JR) * Math.cos(RR), ZR.Quaternion.FromUnitVectorsToRef(ZR.Fe.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(JR, this._activeEffect, GR)
        }
        getAnimatables() {
          return []
        }
        dispose(RR) {
          super.dispose(RR)
        }
        clone(JR) {
          return uR.c.Clone((() => new RR(JR, this.jH())), this)
        }
        serialize() {
          const RR = super.serialize();
          return RR.customType = "BABYLON.SkyMaterial", RR
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(JR, GR, yR) {
          return uR.c.Parse((() => new RR(JR.name, GR)), JR, GR, yR)
        }
      }, (() => {
        const GR = "function" === typeof Symbol && Symbol.metadata ? Object.create(OR[Symbol.metadata] ?? null) : void 0;
        JR = [(0, tR.H)()], qR = [(0, tR.H)()], fR = [(0, tR.H)()], wR = [(0, tR.H)()], WR = [(0, tR.H)()], AR = [(0, tR.H)()], CR = [(0, tR.H)()], XR = [(0, tR.H)()], MR = [(0, tR.G)()], BR = [(0, tR.H)()], lR = [(0, tR.G)()], pR = [(0, tR.G)()], gR = [(0, tR.H)()], bR = [(0, tR.H)()], vR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: RR => "luminance" in RR,
            get: RR => RR.luminance,
            set: (RR, JR) => {
              RR.luminance = JR
            }
          },
          metadata: GR
        }, xR, NR), (0, yR.l)(null, null, qR, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: RR => "turbidity" in RR,
            get: RR => RR.turbidity,
            set: (RR, JR) => {
              RR.turbidity = JR
            }
          },
          metadata: GR
        }, DR, HR), (0, yR.l)(null, null, fR, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: RR => "rayleigh" in RR,
            get: RR => RR.rayleigh,
            set: (RR, JR) => {
              RR.rayleigh = JR
            }
          },
          metadata: GR
        }, oR, cR), (0, yR.l)(null, null, wR, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: RR => "mieCoefficient" in RR,
            get: RR => RR.mieCoefficient,
            set: (RR, JR) => {
              RR.mieCoefficient = JR
            }
          },
          metadata: GR
        }, PR, IR), (0, yR.l)(null, null, WR, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: RR => "mieDirectionalG" in RR,
            get: RR => RR.mieDirectionalG,
            set: (RR, JR) => {
              RR.mieDirectionalG = JR
            }
          },
          metadata: GR
        }, mR, zR), (0, yR.l)(null, null, AR, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: RR => "distance" in RR,
            get: RR => RR.distance,
            set: (RR, JR) => {
              RR.distance = JR
            }
          },
          metadata: GR
        }, SR, jR), (0, yR.l)(null, null, CR, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: RR => "inclination" in RR,
            get: RR => RR.inclination,
            set: (RR, JR) => {
              RR.inclination = JR
            }
          },
          metadata: GR
        }, dR, ER), (0, yR.l)(null, null, XR, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: RR => "azimuth" in RR,
            get: RR => RR.azimuth,
            set: (RR, JR) => {
              RR.azimuth = JR
            }
          },
          metadata: GR
        }, YR, kR), (0, yR.l)(null, null, MR, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: RR => "sunPosition" in RR,
            get: RR => RR.sunPosition,
            set: (RR, JR) => {
              RR.sunPosition = JR
            }
          },
          metadata: GR
        }, QR, FR), (0, yR.l)(null, null, BR, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: RR => "useSunPosition" in RR,
            get: RR => RR.useSunPosition,
            set: (RR, JR) => {
              RR.useSunPosition = JR
            }
          },
          metadata: GR
        }, TR, sR), (0, yR.l)(null, null, lR, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: RR => "cameraOffset" in RR,
            get: RR => RR.cameraOffset,
            set: (RR, JR) => {
              RR.cameraOffset = JR
            }
          },
          metadata: GR
        }, hR, RJ), (0, yR.l)(null, null, pR, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: RR => "up" in RR,
            get: RR => RR.up,
            set: (RR, JR) => {
              RR.up = JR
            }
          },
          metadata: GR
        }, JJ, GJ), (0, yR.l)(null, null, gR, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: RR => "dithering" in RR,
            get: RR => RR.dithering,
            set: (RR, JR) => {
              RR.dithering = JR
            }
          },
          metadata: GR
        }, yJ, tJ), (0, yR.l)(null, null, bR, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: RR => "rawHdrOutput" in RR,
            get: RR => RR.rawHdrOutput,
            set: (RR, JR) => {
              RR.rawHdrOutput = JR
            }
          },
          metadata: GR
        }, uJ, ZJ), (0, yR.l)(null, null, vR, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: RR => "cloudiness" in RR,
            get: RR => RR.cloudiness,
            set: (RR, JR) => {
              RR.cloudiness = JR
            }
          },
          metadata: GR
        }, qJ, iJ), GR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: GR
        })
      })(), RR._ShaderLoader = new rR.d((() => [GR.e(648).then((() => GR(64186))), GR.e(641).then((() => GR(64193)))]), (() => [GR.e(665).then((() => GR(64195))), GR.e(659).then((() => GR(64201)))])), RR
    })();
    (0, wR.f)("BABYLON.SkyMaterial", WR)
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);