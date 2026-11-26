export const id = 268;
export const ids = [268];
export const modules = {
  44497: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(41353),
      YV = xV(44503);
    class UV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = xV, this.KYV = [], this._maxBlockCapacity = eV || 64, this._selectionContent = new JV.c(1024), this._creationFunc = VV
      }
      update(VV, eV, xV) {
        YV.c._CreateBlocks(VV, eV, xV, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      gYV(VV) {
        for (let eV = 0; eV < this.blocks.length; eV++) {
          this.blocks[eV].addEntry(VV)
        }
      }
      rC(VV) {
        for (let eV = 0; eV < this.blocks.length; eV++) {
          this.blocks[eV].removeEntry(VV)
        }
      }
      select(VV, eV) {
        this._selectionContent.reset();
        for (let xV = 0; xV < this.blocks.length; xV++) {
          this.blocks[xV].select(VV, this._selectionContent, eV)
        }
        return eV ? this._selectionContent.concat(this.KYV) : this._selectionContent.concatWithNoDuplicate(this.KYV), this._selectionContent
      }
      intersects(VV, eV, xV) {
        this._selectionContent.reset();
        for (let JV = 0; JV < this.blocks.length; JV++) {
          this.blocks[JV].intersects(VV, eV, this._selectionContent, xV)
        }
        return xV ? this._selectionContent.concat(this.KYV) : this._selectionContent.concatWithNoDuplicate(this.KYV), this._selectionContent
      }
      intersectsRay(VV) {
        this._selectionContent.reset();
        for (let eV = 0; eV < this.blocks.length; eV++) {
          this.blocks[eV].intersectsRay(VV, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.KYV), this._selectionContent
      }
    }
    UV.CreationFuncForMeshes = (VV, eV) => {
      const xV = VV.qL();
      !VV.isBlocked && xV.boundingBox.intersectsMinMax(eV.oYV, eV.aYV) && eV.entries.push(VV)
    }, UV.CreationFuncForSubMeshes = (VV, eV) => {
      VV.qL().boundingBox.intersectsMinMax(eV.oYV, eV.aYV) && eV.entries.push(VV)
    }
  },
  44503: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(38269),
      YV = xV(41572);
    class UV {
      constructor(VV, eV, xV, JV, YV, UV) {
        this.entries = [], this.HYV = new Array, this._capacity = xV, this._depth = JV, this._maxDepth = YV, this._creationFunc = UV, this._minPoint = VV, this._maxPoint = eV, this.HYV.push(VV.clone()), this.HYV.push(eV.clone()), this.HYV.push(VV.clone()), this.HYV[2].x = eV.x, this.HYV.push(VV.clone()), this.HYV[3].y = eV.y, this.HYV.push(VV.clone()), this.HYV[4].z = eV.z, this.HYV.push(eV.clone()), this.HYV[5].z = VV.z, this.HYV.push(eV.clone()), this.HYV[6].x = VV.x, this.HYV.push(eV.clone()), this.HYV[7].y = VV.y
      }
      get Jv() {
        return this._capacity
      }
      get oYV() {
        return this._minPoint
      }
      get aYV() {
        return this._maxPoint
      }
      addEntry(VV) {
        if (this.blocks)
          for (let eV = 0; eV < this.blocks.length; eV++) {
            this.blocks[eV].addEntry(VV)
          } else this._creationFunc(VV, this), this.entries.length > this.Jv && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(VV) {
        if (this.blocks) {
          for (let eV = 0; eV < this.blocks.length; eV++) {
            this.blocks[eV].removeEntry(VV)
          }
          return
        }
        const eV = this.entries.indexOf(VV);
        eV > -1 && this.entries.splice(eV, 1)
      }
      addEntries(VV) {
        for (let eV = 0; eV < VV.length; eV++) {
          const xV = VV[eV];
          this.addEntry(xV)
        }
      }
      select(VV, eV, xV) {
        if (YV.d.IsInFrustum(this.HYV, VV)) {
          if (this.blocks) {
            for (let JV = 0; JV < this.blocks.length; JV++) {
              this.blocks[JV].select(VV, eV, xV)
            }
            return
          }
          xV ? eV.concat(this.entries) : eV.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(VV, eV, xV, JV) {
        if (YV.d.IntersectsSphere(this._minPoint, this._maxPoint, VV, eV)) {
          if (this.blocks) {
            for (let YV = 0; YV < this.blocks.length; YV++) {
              this.blocks[YV].intersects(VV, eV, xV, JV)
            }
            return
          }
          JV ? xV.concat(this.entries) : xV.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(VV, eV) {
        if (VV.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let xV = 0; xV < this.blocks.length; xV++) {
              this.blocks[xV].intersectsRay(VV, eV)
            }
            return
          }
          eV.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        UV._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(VV, eV, xV, YV, yV, pV, QV, nV) {
        QV.blocks = new Array;
        const wV = new JV.o((eV.x - VV.x) / 2, (eV.y - VV.y) / 2, (eV.z - VV.z) / 2);
        for (let JV = 0; JV < 2; JV++)
          for (let eV = 0; eV < 2; eV++)
            for (let ZV = 0; ZV < 2; ZV++) {
              const vV = VV.add(wV.multiplyByFloats(JV, eV, ZV)),
                rV = VV.add(wV.multiplyByFloats(JV + 1, eV + 1, ZV + 1)),
                kV = new UV(vV, rV, YV, yV + 1, pV, nV);
              kV.addEntries(xV), QV.blocks.push(kV)
            }
      }
    }
  },
  44509: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV
    });
    var JV = xV(41337),
      YV = xV(38269),
      UV = xV(41692),
      yV = xV(44463),
      pV = xV(41429),
      QV = xV(38287),
      nV = xV(44497);
    class wV {
      constructor(VV) {
        this.name = pV.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new yV.x(YV.o.Zero(), new YV.o(1, 1, 1)), (VV = VV || QV.d.LastCreatedScene) && (this.yE = VV, this.yE.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.yE.getActiveSubMeshCandidates = VV => this.getActiveSubMeshCandidates(VV), this.yE.getCollidingSubMeshCandidates = (VV, eV) => this.getCollidingSubMeshCandidates(VV, eV), this.yE.getIntersectingSubMeshCandidates = (VV, eV) => this.getIntersectingSubMeshCandidates(VV, eV))
      }
      register() {
        this.yE.onMeshRemovedObservable.add((VV => {
          const eV = this.yE.selectionOctree;
          if (void 0 !== eV && null !== eV) {
            const xV = eV.KYV.indexOf(VV); - 1 !== xV && eV.KYV.splice(xV, 1)
          }
        })), this.yE.onMeshImportedObservable.add((VV => {
          const eV = this.yE.selectionOctree;
          void 0 !== eV && null !== eV && eV.gYV(VV)
        }))
      }
      getActiveMeshCandidates() {
        return this.yE.OYV?.select(this.yE.frustumPlanes) || this.yE._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(VV) {
        if (VV._submeshesOctree && VV.useOctreeForRenderingSelection) {
          return VV._submeshesOctree.select(this.yE.frustumPlanes)
        }
        return this.yE._getDefaultSubMeshCandidates(VV)
      }
      getIntersectingSubMeshCandidates(VV, eV) {
        if (VV._submeshesOctree && VV.useOctreeForPicking) {
          yV.x.TransformToRef(eV, VV.getWorldMatrix(), this._tempRay);
          return VV._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.yE._getDefaultSubMeshCandidates(VV)
      }
      getCollidingSubMeshCandidates(VV, eV) {
        if (VV._submeshesOctree && VV.useOctreeForCollisions) {
          const xV = eV._velocityWorldLength + Math.max(eV._radius.x, eV._radius.y, eV._radius.z);
          return VV._submeshesOctree.intersects(eV._basePointWorld, xV)
        }
        return this.yE._getDefaultSubMeshCandidates(VV)
      }
      rebuild() {}
      dispose() {}
    }
    let ZV = !1;
    ZV || (ZV = !0, JV.e.prototype.createOrUpdateSelectionOctree = function() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        xV = this._getComponent(pV.e.NAME_OCTREE);
      xV || (xV = new wV(this), this.jYV(xV)), this.OYV || (this.OYV = new nV.d(nV.d.CreationFuncForMeshes, VV, eV));
      const JV = this.getWorldExtends();
      return this.OYV.update(JV.min, JV.max, this.meshes), this.OYV
    }, Object.defineProperty(JV.e.prototype, "selectionOctree", {
      get: function() {
        return this.OYV
      },
      enumerable: !0,
      configurable: !0
    }), UV.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const xV = this.dD();
      let JV = xV._getComponent(pV.e.NAME_OCTREE);
      JV || (JV = new wV(xV), xV.jYV(JV)), this._submeshesOctree || (this._submeshesOctree = new nV.d(nV.d.CreationFuncForSubMeshes, VV, eV)), this.computeWorldMatrix(!0);
      const YV = this.qL().boundingBox;
      return this._submeshesOctree.update(YV.minimumWorld, YV.maximumWorld, this.hT), this._submeshesOctree
    })
  },
  44463: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => GV,
      h: () => bV,
      j: () => kV,
      k: () => rV,
      o: () => MV,
      p: () => XV,
      r: () => PV,
      s: () => NV,
      t: () => AV,
      x: () => ZV
    });
    var JV = xV(38272),
      YV = xV(38269),
      UV = xV(38278),
      yV = xV(41563),
      pV = xV(41390),
      QV = xV(38287),
      nV = xV(41450);
    const wV = {
      internalPickerForMesh: void 0
    };
    class ZV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JV.b;
        this.origin = VV, this.direction = eV, this.length = xV, this.epsilon = YV
      }
      clone() {
        return new ZV(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const JV = ZV._TmpVector3[0].FeV(VV.x - xV, VV.y - xV, VV.z - xV),
          YV = ZV._TmpVector3[1].FeV(eV.x + xV, eV.y + xV, eV.z + xV);
        let UV, yV, pV, QV, nV = 0,
          wV = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < JV.x || this.origin.x > YV.x) return !1
        } else if (UV = 1 / this.direction.x, yV = (JV.x - this.origin.x) * UV, pV = (YV.x - this.origin.x) * UV, pV === -1 / 0 && (pV = 1 / 0), yV > pV && (QV = yV, yV = pV, pV = QV), nV = Math.max(yV, nV), wV = Math.min(pV, wV), nV > wV) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < JV.y || this.origin.y > YV.y) return !1
        } else if (UV = 1 / this.direction.y, yV = (JV.y - this.origin.y) * UV, pV = (YV.y - this.origin.y) * UV, pV === -1 / 0 && (pV = 1 / 0), yV > pV && (QV = yV, yV = pV, pV = QV), nV = Math.max(yV, nV), wV = Math.min(pV, wV), nV > wV) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < JV.z || this.origin.z > YV.z) return !1
        } else if (UV = 1 / this.direction.z, yV = (JV.z - this.origin.z) * UV, pV = (YV.z - this.origin.z) * UV, pV === -1 / 0 && (pV = 1 / 0), yV > pV && (QV = yV, yV = pV, pV = QV), nV = Math.max(yV, nV), wV = Math.min(pV, wV), nV > wV) return !1;
        return !0
      }
      intersectsBox(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(VV.minimum, VV.maximum, eV)
      }
      intersectsSphere(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const xV = VV.center.x - this.origin.x,
          JV = VV.center.y - this.origin.y,
          YV = VV.center.z - this.origin.z,
          UV = xV * xV + JV * JV + YV * YV,
          yV = VV.radius + eV,
          pV = yV * yV;
        if (UV <= pV) return !0;
        const QV = xV * this.direction.x + JV * this.direction.y + YV * this.direction.z;
        if (QV < 0) return !1;
        return UV - QV * QV <= pV
      }
      intersectsTriangle(VV, eV, xV) {
        const JV = ZV._TmpVector3[0],
          UV = ZV._TmpVector3[1],
          pV = ZV._TmpVector3[2],
          QV = ZV._TmpVector3[3],
          nV = ZV._TmpVector3[4];
        eV.subtractToRef(VV, JV), xV.subtractToRef(VV, UV), YV.o.CrossToRef(this.direction, UV, pV);
        const wV = YV.o.Dot(JV, pV);
        if (0 === wV) return null;
        const vV = 1 / wV;
        this.origin.subtractToRef(VV, QV);
        const rV = YV.o.Dot(QV, pV) * vV;
        if (rV < -this.epsilon || rV > 1 + this.epsilon) return null;
        YV.o.CrossToRef(QV, JV, nV);
        const kV = YV.o.Dot(this.direction, nV) * vV;
        if (kV < -this.epsilon || rV + kV > 1 + this.epsilon) return null;
        const bV = YV.o.Dot(UV, nV) * vV;
        return bV > this.length || bV < 0 ? null : new yV.d(1 - rV - kV, rV, bV)
      }
      intersectsPlane(VV) {
        let eV;
        const xV = YV.o.Dot(VV.normal, this.direction);
        if (Math.abs(xV) < 9.99999997475243e-7) return null;
        {
          const JV = YV.o.Dot(VV.normal, this.origin);
          return eV = (-VV.d - JV) / xV, eV < 0 ? eV < -9.99999997475243e-7 ? null : 0 : eV
        }
      }
      intersectsAxis(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (VV) {
          case "y": {
            const VV = (this.origin.y - eV) / this.direction.y;
            return VV > 0 ? null : new YV.o(this.origin.x + this.direction.x * -VV, eV, this.origin.z + this.direction.z * -VV)
          }
          case "x": {
            const VV = (this.origin.x - eV) / this.direction.x;
            return VV > 0 ? null : new YV.o(eV, this.origin.y + this.direction.y * -VV, this.origin.z + this.direction.z * -VV)
          }
          case "z": {
            const VV = (this.origin.z - eV) / this.direction.z;
            return VV > 0 ? null : new YV.o(this.origin.x + this.direction.x * -VV, this.origin.y + this.direction.y * -VV, eV)
          }
          default:
            return null
        }
      }
      qUV(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          UV = arguments.length > 4 ? arguments[4] : void 0,
          yV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const pV = YV.l.Matrix[0];
        return VV.getWorldMatrix().invertToRef(pV), this._tmpRay ? ZV.TransformToRef(this, pV, this._tmpRay) : this._tmpRay = ZV.Transform(this, pV), VV.intersects(this._tmpRay, eV, xV, JV, UV, yV)
      }
      intersectsMeshes(VV, eV, xV) {
        xV ? xV.length = 0 : xV = [];
        for (let JV = 0; JV < VV.length; JV++) {
          const YV = this.qUV(VV[JV], eV);
          YV.hit && xV.push(YV)
        }
        return xV.sort(this._comparePickingInfo), xV
      }
      _comparePickingInfo(VV, eV) {
        return VV.distance < eV.distance ? -1 : VV.distance > eV.distance ? 1 : 0
      }
      intersectionSegment(VV, eV, xV) {
        const JV = this.origin,
          UV = YV.l.Ik[0],
          yV = YV.l.Ik[1],
          pV = YV.l.Ik[2],
          QV = YV.l.Ik[3];
        eV.subtractToRef(VV, UV), this.direction.scaleToRef(ZV._Rayl, pV), JV.addToRef(pV, yV), VV.subtractToRef(JV, QV);
        const nV = YV.o.Dot(UV, UV),
          wV = YV.o.Dot(UV, pV),
          vV = YV.o.Dot(pV, pV),
          rV = YV.o.Dot(UV, QV),
          kV = YV.o.Dot(pV, QV),
          bV = nV * vV - wV * wV;
        let EV, BV, jV = bV,
          qV = bV;
        bV < ZV._Smallnum ? (EV = 0, jV = 1, BV = kV, qV = vV) : (EV = wV * kV - vV * rV, BV = nV * kV - wV * rV, EV < 0 ? (EV = 0, BV = kV, qV = vV) : EV > jV && (EV = jV, BV = kV + wV, qV = vV)), BV < 0 ? (BV = 0, -rV < 0 ? EV = 0 : -rV > nV ? EV = jV : (EV = -rV, jV = nV)) : BV > qV && (BV = qV, -rV + wV < 0 ? EV = 0 : -rV + wV > nV ? EV = jV : (EV = -rV + wV, jV = nV));
        const tV = Math.abs(EV) < ZV._Smallnum ? 0 : EV / jV,
          FV = Math.abs(BV) < ZV._Smallnum ? 0 : BV / qV,
          TV = YV.l.Ik[4];
        pV.scaleToRef(FV, TV);
        const PV = YV.l.Ik[5];
        UV.scaleToRef(tV, PV), PV.addInPlace(QV);
        const AV = YV.l.Ik[6];
        PV.subtractToRef(TV, AV);
        return FV > 0 && FV <= this.length && AV.lengthSquared() < xV * xV ? PV.length() : -1
      }
      update(VV, eV, xV, JV, UV, yV, pV) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          ZV._RayDistant || (ZV._RayDistant = ZV.Zero()), ZV._RayDistant.unprojectRayToRef(VV, eV, xV, JV, YV.d.IdentityReadOnly, yV, pV);
          const QV = YV.l.Matrix[0];
          UV.invertToRef(QV), ZV.TransformToRef(ZV._RayDistant, QV, this)
        } else this.unprojectRayToRef(VV, eV, xV, JV, UV, yV, pV);
        return this
      }
      static Zero() {
        return new ZV(YV.o.Zero(), YV.o.Zero())
      }
      static CreateNew(VV, eV, xV, JV, YV, UV, yV) {
        return ZV.Zero().update(VV, eV, xV, JV, YV, UV, yV)
      }
      static CreateNewFromTo(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YV.d.IdentityReadOnly;
        const JV = new ZV(new YV.o(0, 0, 0), new YV.o(0, 0, 0));
        return ZV.CreateFromToToRef(VV, eV, JV, xV)
      }
      static CreateFromToToRef(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YV.d.IdentityReadOnly;
        xV.origin.iG(VV);
        const UV = eV.subtractToRef(VV, xV.direction),
          yV = Math.sqrt(UV.x * UV.x + UV.y * UV.y + UV.z * UV.z);
        return xV.length = yV, xV.direction.normalize(), ZV.TransformToRef(xV, JV, xV)
      }
      static Transform(VV, eV) {
        const xV = new ZV(new YV.o(0, 0, 0), new YV.o(0, 0, 0));
        return ZV.TransformToRef(VV, eV, xV), xV
      }
      static TransformToRef(VV, eV, xV) {
        YV.o.TransformCoordinatesToRef(VV.origin, eV, xV.origin), YV.o.TransformNormalToRef(VV.direction, eV, xV.direction), xV.length = VV.length, xV.epsilon = VV.epsilon;
        const JV = xV.direction,
          UV = JV.length();
        if (0 !== UV && 1 !== UV) {
          const VV = 1 / UV;
          JV.x *= VV, JV.y *= VV, JV.z *= VV, xV.length *= UV
        }
        return xV
      }
      unprojectRayToRef(VV, eV, xV, JV, UV, yV, pV) {
        const nV = YV.l.Matrix[0];
        UV.multiplyToRef(yV, nV), nV.multiplyToRef(pV, nV), nV.invert();
        const wV = QV.d.LastCreatedEngine,
          ZV = YV.l.Ik[0];
        ZV.x = VV / xV * 2 - 1, ZV.y = -(eV / JV * 2 - 1), ZV.z = wV?.zYV ? 1 : wV?.isNDCHalfZRange ? 0 : -1;
        const vV = YV.l.Ik[1].FeV(ZV.x, ZV.y, 1 - 1e-8),
          rV = YV.l.Ik[2],
          kV = YV.l.Ik[3];
        YV.o.TransformCoordinatesToRef(ZV, nV, rV), YV.o.TransformCoordinatesToRef(vV, nV, kV), this.origin.iG(rV), kV.subtractToRef(rV, this.direction), this.direction.normalize()
      }
    }

    function vV(VV, eV, xV, JV, YV) {
      let UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const yV = ZV.Zero();
      return rV(VV, eV, xV, JV, yV, YV, UV), yV
    }

    function rV(VV, eV, xV, JV, UV, yV) {
      let pV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        QV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const nV = VV.sk();
      if (!yV && !(yV = VV.activeCamera) && !(yV = VV.cameraToUseForPointers)) return VV;
      const wV = yV.viewport,
        ZV = nV.getRenderHeight(),
        {
          x: vV,
          y: rV,
          width: kV,
          height: bV
        } = wV.toGlobal(nV.getRenderWidth(), ZV),
        EV = 1 / nV.getHardwareScalingLevel();
      return eV = eV * EV - vV, xV = xV * EV - (ZV - rV - bV), UV.update(eV, xV, kV, bV, JV || YV.d.IdentityReadOnly, pV ? YV.d.IdentityReadOnly : yV.getViewMatrix(), yV.getProjectionMatrix(), QV), VV
    }

    function kV(VV, eV, xV, JV) {
      const YV = ZV.Zero();
      return bV(VV, eV, xV, YV, JV), YV
    }

    function bV(VV, eV, xV, JV, UV) {
      if (!pV.c) return VV;
      const yV = VV.sk();
      if (!UV && !(UV = VV.activeCamera) && !(UV = VV.cameraToUseForPointers)) throw new Error("Active camera not set");
      const QV = UV.viewport,
        nV = yV.getRenderHeight(),
        {
          x: wV,
          y: ZV,
          width: vV,
          height: rV
        } = QV.toGlobal(yV.getRenderWidth(), nV),
        kV = YV.d.Identity(),
        bV = 1 / yV.getHardwareScalingLevel();
      return eV = eV * bV - wV, xV = xV * bV - (nV - ZV - rV), JV.update(eV, xV, vV, rV, kV, kV, UV.getProjectionMatrix()), VV
    }

    function EV(VV, eV, xV, JV, YV, UV, yV, pV) {
      return BV(VV, xV, JV, eV(JV, xV.enableDistantPicking), YV, UV, yV, pV)
    }

    function BV(VV, eV, xV, JV, YV, UV, yV, pV) {
      const QV = eV.intersects(JV, YV, yV, UV, xV, pV);
      return QV && QV.hit ? !YV && null != VV && QV.distance >= VV.distance ? null : QV : null
    }

    function jV(VV, eV) {
      return "InstancedLinesMesh" === VV || "LinesMesh" === VV ? eV.intersectionThreshold : 0
    }

    function qV(VV) {
      const eV = VV.getClassName();
      if ("GreasedLineMesh" === eV) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const xV = VV.rawBoundingInfo;
      return {
        rawBoundingInfo: xV,
        intersectionThreshold: xV ? jV(eV, VV) : 0
      }
    }

    function tV(VV, eV, xV, JV, YV) {
      const UV = VV(xV, eV.enableDistantPicking);
      return UV.intersectsSphere(JV.xUV, YV) && UV.intersectsBox(JV.boundingBox, YV) ? UV : null
    }

    function FV(VV, eV, xV, JV, UV, yV) {
      let QV = null;
      const nV = !!(VV.activeCameras && VV.activeCameras.length > 1 && VV.cameraToUseForPointers !== VV.activeCamera),
        ZV = VV.cameraToUseForPointers || VV.activeCamera,
        vV = wV.internalPickerForMesh || EV,
        rV = vV === EV;
      for (let pV = 0; pV < VV.meshes.length; pV++) {
        const wV = VV.meshes[pV];
        if (xV) {
          if (!xV(wV, -1)) continue
        } else if (!wV.isEnabled() || !wV.isVisible || !wV.QE) continue;
        const kV = nV && wV.isWorldMatrixCameraDependent(),
          bV = wV.computeWorldMatrix(kV, ZV);
        if (wV.hasThinInstances && wV.VJV) {
          const VV = vV(QV, eV, wV, bV, !0, !0, yV);
          if (VV) {
            if (UV) return VV;
            const {
              rawBoundingInfo: pV,
              intersectionThreshold: nV
            } = qV(wV), ZV = wV._thinInstanceDataStorage.matrixData;
            if (ZV) {
              const VV = YV.l.Matrix[0],
                kV = YV.l.Matrix[1],
                EV = Math.min(wV.VeV, ZV.length >> 4);
              for (let jV = 0; jV < EV; jV++) {
                if (xV && !xV(wV, jV)) continue;
                YV.d.FromArrayToRef(ZV, jV << 4, VV), VV.multiplyToRef(bV, kV);
                const EV = rV && pV ? tV(eV, wV, kV, pV, nV) : null;
                if (rV && pV && !EV) continue;
                const qV = rV && EV ? BV(QV, wV, kV, EV, JV, UV, yV, !0) : vV(QV, eV, wV, kV, JV, UV, yV, !0);
                if (qV && (QV = qV, QV.thinInstanceIndex = jV, JV)) return QV
              }
            }
          }
        } else {
          const VV = vV(QV, eV, wV, bV, JV, UV, yV);
          if (VV && (QV = VV, JV)) return QV
        }
      }
      return QV || new pV.c
    }

    function TV(VV, eV, xV, JV) {
      if (!pV.c) return null;
      const UV = [],
        yV = !!(VV.activeCameras && VV.activeCameras.length > 1 && VV.cameraToUseForPointers !== VV.activeCamera),
        QV = VV.cameraToUseForPointers || VV.activeCamera,
        nV = wV.internalPickerForMesh || EV,
        ZV = nV === EV;
      for (let pV = 0; pV < VV.meshes.length; pV++) {
        const wV = VV.meshes[pV];
        if (xV) {
          if (!xV(wV, -1)) continue
        } else if (!wV.isEnabled() || !wV.isVisible || !wV.QE) continue;
        const vV = yV && wV.isWorldMatrixCameraDependent(),
          rV = wV.computeWorldMatrix(vV, QV);
        if (wV.hasThinInstances && wV.VJV) {
          if (nV(null, eV, wV, rV, !0, !0, JV)) {
            const {
              rawBoundingInfo: VV,
              intersectionThreshold: yV
            } = qV(wV), pV = wV._thinInstanceDataStorage.matrixData;
            if (pV) {
              const QV = YV.l.Matrix[0],
                vV = YV.l.Matrix[1],
                kV = Math.min(wV.VeV, pV.length >> 4);
              for (let bV = 0; bV < kV; bV++) {
                if (xV && !xV(wV, bV)) continue;
                YV.d.FromArrayToRef(pV, bV << 4, QV), QV.multiplyToRef(rV, vV);
                const kV = ZV && VV ? tV(eV, wV, vV, VV, yV) : null;
                if (ZV && VV && !kV) continue;
                const EV = ZV && kV ? BV(null, wV, vV, kV, !1, !1, JV, !0) : nV(null, eV, wV, vV, !1, !1, JV, !0);
                EV && (EV.thinInstanceIndex = bV, UV.push(EV))
              }
            }
          }
        } else {
          const VV = nV(null, eV, wV, rV, !1, !1, JV);
          VV && UV.push(VV)
        }
      }
      return UV
    }

    function PV(VV, eV, xV, JV, UV, yV) {
      if (!pV.c) return null;
      const QV = FV(VV, (JV => (VV._tempPickingRay || (VV._tempPickingRay = ZV.Zero()), rV(VV, eV, xV, JV, VV._tempPickingRay, yV || null), VV._tempPickingRay)), JV, UV, !0);
      return QV && (QV.ray = vV(VV, eV, xV, YV.d.Identity(), yV || null)), QV
    }

    function AV(VV, eV, xV, JV, UV, yV, pV) {
      const QV = FV(VV, ((JV, YV) => (VV._tempPickingRay || (VV._tempPickingRay = ZV.Zero()), rV(VV, eV, xV, JV, VV._tempPickingRay, yV || null, !1, YV), VV._tempPickingRay)), JV, UV, !1, pV);
      return QV && (QV.ray = vV(VV, eV, xV, YV.d.Identity(), yV || null)), QV
    }

    function NV(VV, eV, xV, JV, UV) {
      const yV = FV(VV, (xV => (VV._pickWithRayInverseMatrix || (VV._pickWithRayInverseMatrix = YV.d.Identity()), xV.invertToRef(VV._pickWithRayInverseMatrix), VV._cachedRayForTransform || (VV._cachedRayForTransform = ZV.Zero()), ZV.TransformToRef(eV, VV._pickWithRayInverseMatrix, VV._cachedRayForTransform), VV._cachedRayForTransform)), xV, JV, !1, UV);
      return yV && (yV.ray = eV), yV
    }

    function XV(VV, eV, xV, JV, YV, UV) {
      return TV(VV, (JV => vV(VV, eV, xV, JV, YV || null)), JV, UV)
    }

    function MV(VV, eV, xV, JV) {
      return TV(VV, (xV => (VV._pickWithRayInverseMatrix || (VV._pickWithRayInverseMatrix = YV.d.Identity()), xV.invertToRef(VV._pickWithRayInverseMatrix), VV._cachedRayForTransform || (VV._cachedRayForTransform = ZV.Zero()), ZV.TransformToRef(eV, VV._pickWithRayInverseMatrix, VV._cachedRayForTransform), VV._cachedRayForTransform)), xV, JV)
    }

    function zV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        JV = arguments.length > 3 ? arguments[3] : void 0,
        UV = arguments.length > 4 ? arguments[4] : void 0;
      JV || (JV = VV.getWorldMatrix()), eV.length = xV, UV ? eV.origin.iG(UV) : eV.origin.iG(VV.position);
      const yV = YV.l.Ik[2];
      yV.set(0, 0, VV._scene.useRightHandedSystem ? -1 : 1);
      const pV = YV.l.Ik[3];
      return YV.o.TransformNormalToRef(yV, JV, pV), YV.o.NormalizeToRef(pV, eV.direction), eV
    }

    function GV(VV, eV) {
      eV && (eV.prototype.getForwardRay = function() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        return zV(this, new ZV(YV.o.Zero(), YV.o.Zero(), VV), VV, eV, xV)
      }, eV.prototype.getForwardRayToRef = function(VV) {
        return zV(this, VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), VV && (nV.c._IsPickingAvailable = !0, VV.prototype.createPickingRay = function(VV, eV, xV, JV) {
        return vV(this, VV, eV, xV, JV, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    ZV._TmpVector3 = (0, UV.e)(6, YV.o.Zero), ZV._RayDistant = ZV.Zero(), ZV._Smallnum = 1e-8, ZV._Rayl = 1e9
  },
  44458: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV.x
    });
    var JV = xV(41337),
      YV = xV(41478),
      UV = xV(44463);
    let yV = !1;
    yV || (yV = !0, (0, UV.e)(JV.e, YV.c), JV.e.prototype.createPickingRayToRef = function(VV, eV, xV, JV, YV) {
      let yV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        pV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, UV.k)(this, VV, eV, xV, JV, YV, yV, pV)
    }, JV.e.prototype.createPickingRayInCameraSpace = function(VV, eV, xV) {
      return (0, UV.j)(this, VV, eV, xV)
    }, JV.e.prototype.createPickingRayInCameraSpaceToRef = function(VV, eV, xV, JV) {
      return (0, UV.h)(this, VV, eV, xV, JV)
    }, JV.e.prototype.pickWithBoundingInfo = function(VV, eV, xV, JV, YV) {
      return (0, UV.r)(this, VV, eV, xV, JV, YV)
    }, JV.e.prototype.Pr = function(VV, eV, xV, JV, YV, yV) {
      let pV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, UV.t)(this, VV, eV, xV, JV, YV, yV, pV)
    }, JV.e.prototype.pickWithRay = function(VV, eV, xV, JV) {
      return (0, UV.s)(this, VV, eV, xV, JV)
    }, JV.e.prototype.multiPick = function(VV, eV, xV, JV, YV) {
      return (0, UV.p)(this, VV, eV, xV, JV, YV)
    }, JV.e.prototype.multiPickWithRay = function(VV, eV, xV) {
      return (0, UV.o)(this, VV, eV, xV)
    })
  },
  44465: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(38269),
      yV = xV(41521),
      pV = xV(44469),
      QV = xV(41486),
      nV = xV(38318);
    let wV = (() => {
        var VV;
        let eV, xV, QV, nV, wV, ZV, vV, rV, kV = pV.b,
          bV = [],
          EV = [],
          BV = [],
          jV = [],
          qV = [],
          tV = [],
          FV = [],
          TV = [],
          PV = [],
          AV = [],
          NV = [],
          XV = [],
          MV = [];
        return VV = class extends kV {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(VV) {
            this._shadowFrustumSize = VV, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(VV) {
            this._shadowOrthoScale = VV, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(VV) {
            this._orthoLeft = VV
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(VV) {
            this._orthoRight = VV
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(VV) {
            this._orthoTop = VV
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(VV) {
            this._orthoBottom = VV
          }
          constructor(VV, eV, xV, YV) {
            super(VV, xV, YV), this._shadowFrustumSize = ((0, JV.l)(this, bV), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, JV.l)(this, EV, !0), this.autoCalcShadowZBounds = ((0, JV.l)(this, BV), (0, JV.l)(this, jV, !1)), this._orthoLeft = ((0, JV.l)(this, qV), (0, JV.l)(this, tV, Number.MAX_VALUE)), this._orthoRight = ((0, JV.l)(this, FV), (0, JV.l)(this, TV, Number.MIN_VALUE)), this._orthoTop = ((0, JV.l)(this, PV), (0, JV.l)(this, AV, Number.MIN_VALUE)), this._orthoBottom = ((0, JV.l)(this, NV), (0, JV.l)(this, XV, Number.MAX_VALUE)), (0, JV.l)(this, MV), this.position = eV.scale(-1), this.direction = eV
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return yV.d.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(VV, eV, xV) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(VV) : this._setDefaultAutoExtendShadowProjectionMatrix(VV, eV, xV)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(VV) {
            const eV = this.dD().activeCamera;
            UV.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : eV ? eV.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : eV ? eV.maxZ : 1e4, VV, this.dD().sk().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(VV, eV, xV) {
            const JV = this.dD().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const VV = UV.o.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let JV = Number.MAX_VALUE,
                YV = -Number.MAX_VALUE;
              for (let yV = 0; yV < xV.length; yV++) {
                const pV = xV[yV];
                if (!pV) continue;
                const QV = pV.qL().boundingBox;
                for (let xV = 0; xV < QV.vectorsWorld.length; xV++) UV.o.TransformCoordinatesToRef(QV.vectorsWorld[xV], eV, VV), VV.x < this._orthoLeft && (this._orthoLeft = VV.x), VV.y < this._orthoBottom && (this._orthoBottom = VV.y), VV.x > this._orthoRight && (this._orthoRight = VV.x), VV.y > this._orthoTop && (this._orthoTop = VV.y), this.autoCalcShadowZBounds && (VV.z < JV && (JV = VV.z), VV.z > YV && (YV = VV.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = JV, this._shadowMaxZ = YV)
            }
            const YV = this._orthoRight - this._orthoLeft,
              yV = this._orthoTop - this._orthoBottom,
              pV = void 0 !== this.shadowMinZ ? this.shadowMinZ : JV?.minZ || 0,
              QV = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : JV?.maxZ || 1e4,
              nV = this.dD().sk().zYV;
            UV.d.OrthoOffCenterLHToRef(this._orthoLeft - YV * this.shadowOrthoScale, this._orthoRight + YV * this.shadowOrthoScale, this._orthoBottom - yV * this.shadowOrthoScale, this._orthoTop + yV * this.shadowOrthoScale, nV ? QV : pV, nV ? pV : QV, VV, this.dD().sk().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(VV, eV) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, eV), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, eV), this)
          }
          transferToNodeMaterialEffect(VV, eV) {
            return this.computeTransformedInformation() ? (VV.setFloat3(eV, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (VV.setFloat3(eV, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(VV) {
            const eV = this._scene.sk();
            return !eV.zYV && eV.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(VV) {
            const eV = this._scene.sk();
            return eV.zYV && eV.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(VV, eV) {
            VV["DIRLIGHT" + eV] = !0
          }
        }, (() => {
          const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(kV[Symbol.metadata] ?? null) : void 0;
          eV = [(0, YV.J)()], xV = [(0, YV.J)()], QV = [(0, YV.J)()], nV = [(0, YV.J)()], wV = [(0, YV.J)("orthoLeft")], ZV = [(0, YV.J)("orthoRight")], vV = [(0, YV.J)("orthoTop")], rV = [(0, YV.J)("orthoBottom")], (0, JV.i)(VV, null, eV, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: VV => "shadowFrustumSize" in VV,
              get: VV => VV.shadowFrustumSize
            },
            metadata: UV
          }, null, bV), (0, JV.i)(VV, null, xV, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: VV => "shadowOrthoScale" in VV,
              get: VV => VV.shadowOrthoScale
            },
            metadata: UV
          }, null, bV), (0, JV.i)(null, null, QV, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: VV => "autoUpdateExtends" in VV,
              get: VV => VV.autoUpdateExtends,
              set: (VV, eV) => {
                VV.autoUpdateExtends = eV
              }
            },
            metadata: UV
          }, EV, BV), (0, JV.i)(null, null, nV, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: VV => "autoCalcShadowZBounds" in VV,
              get: VV => VV.autoCalcShadowZBounds,
              set: (VV, eV) => {
                VV.autoCalcShadowZBounds = eV
              }
            },
            metadata: UV
          }, jV, qV), (0, JV.i)(null, null, wV, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: VV => "_orthoLeft" in VV,
              get: VV => VV._orthoLeft,
              set: (VV, eV) => {
                VV._orthoLeft = eV
              }
            },
            metadata: UV
          }, tV, FV), (0, JV.i)(null, null, ZV, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: VV => "_orthoRight" in VV,
              get: VV => VV._orthoRight,
              set: (VV, eV) => {
                VV._orthoRight = eV
              }
            },
            metadata: UV
          }, TV, PV), (0, JV.i)(null, null, vV, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: VV => "_orthoTop" in VV,
              get: VV => VV._orthoTop,
              set: (VV, eV) => {
                VV._orthoTop = eV
              }
            },
            metadata: UV
          }, AV, NV), (0, JV.i)(null, null, rV, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: VV => "_orthoBottom" in VV,
              get: VV => VV._orthoBottom,
              set: (VV, eV) => {
                VV._orthoBottom = eV
              }
            },
            metadata: UV
          }, XV, MV), UV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UV
          })
        })(), VV
      })(),
      ZV = !1;
    ZV || (ZV = !0, QV.e.AddNodeConstructor("Light_Type_1", ((VV, eV) => () => new wV(VV, UV.o.Zero(), eV))), (0, nV.d)("BABYLON.DirectionalLight", wV))
  },
  39899: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      d: () => UV,
      h: () => yV,
      i: () => pV
    });
    var JV = xV(38389);
    class YV {
      constructor(VV, eV, xV) {
        this.gradient = VV, this.color1 = eV, this.color2 = xV
      }
      getColorToRef(VV) {
        this.color2 ? JV.h.LerpToRef(this.color1, this.color2, Math.random(), VV) : VV.iG(this.color1)
      }
    }
    class UV {
      constructor(VV, eV) {
        this.gradient = VV, this.color = eV
      }
    }
    class yV {
      constructor(VV, eV, xV) {
        this.gradient = VV, this.factor1 = eV, this.factor2 = xV
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class pV {
      static GetCurrentGradient(VV, eV, xV) {
        if (eV[0].gradient > VV) return void xV(eV[0], eV[0], 1);
        for (let YV = 0; YV < eV.length - 1; YV++) {
          const JV = eV[YV],
            UV = eV[YV + 1];
          if (VV >= JV.gradient && VV <= UV.gradient) {
            return void xV(JV, UV, (VV - JV.gradient) / (UV.gradient - JV.gradient))
          }
        }
        const JV = eV.length - 1;
        xV(eV[JV], eV[JV], 1)
      }
    }
  },
  39908: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV
    });
    var JV = xV(38269),
      YV = xV(38303),
      UV = xV(39867);
    class yV {
      constructor() {
        this.direction1 = new JV.o(0, 1, 0), this.direction2 = new JV.o(0, 1, 0), this.minEmitBox = new JV.o(-.5, -.5, -.5), this.maxEmitBox = new JV.o(.5, .5, .5)
      }
      startDirectionFunction(VV, eV, xV, UV) {
        const yV = (0, YV.RandomRange)(this.direction1.x, this.direction2.x),
          pV = (0, YV.RandomRange)(this.direction1.y, this.direction2.y),
          QV = (0, YV.RandomRange)(this.direction1.z, this.direction2.z);
        if (UV) return eV.x = yV, eV.y = pV, void(eV.z = QV);
        JV.o.TransformNormalFromFloatsToRef(yV, pV, QV, VV, eV)
      }
      startPositionFunction(VV, eV, xV, UV) {
        const yV = (0, YV.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          pV = (0, YV.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          QV = (0, YV.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (UV) return eV.x = yV, eV.y = pV, void(eV.z = QV);
        JV.o.TransformCoordinatesFromFloatsToRef(yV, pV, QV, VV, eV)
      }
      clone() {
        const VV = new yV;
        return UV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        VV.setVector3("direction1", this.direction1), VV.setVector3("direction2", this.direction2), VV.setVector3("minEmitBox", this.minEmitBox), VV.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(VV) {
        VV.addUniform("direction1", 3), VV.addUniform("direction2", 3), VV.addUniform("minEmitBox", 3), VV.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const VV = {};
        return VV.type = this.getClassName(), VV.direction1 = this.direction1.WYV(), VV.direction2 = this.direction2.WYV(), VV.minEmitBox = this.minEmitBox.WYV(), VV.maxEmitBox = this.maxEmitBox.WYV(), VV
      }
      parse(VV) {
        JV.o.FromArrayToRef(VV.direction1, 0, this.direction1), JV.o.FromArrayToRef(VV.direction2, 0, this.direction2), JV.o.FromArrayToRef(VV.minEmitBox, 0, this.minEmitBox), JV.o.FromArrayToRef(VV.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39861: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      f: () => yV
    });
    var JV = xV(38269),
      YV = xV(38303),
      UV = xV(39867);
    class yV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = VV, this.height = eV, this.radiusRange = xV, this.directionRandomizer = YV, this._tempVector = JV.o.Zero()
      }
      startDirectionFunction(VV, eV, xV, UV, yV) {
        xV.position.subtractToRef(VV.getTranslation(), this._tempVector), this._tempVector.normalize(), JV.o.TransformNormalToRef(this._tempVector, yV, this._tempVector);
        const pV = (0, YV.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let QV = Math.atan2(this._tempVector.x, this._tempVector.z);
        QV += (0, YV.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = pV, this._tempVector.x = Math.sin(QV), this._tempVector.z = Math.cos(QV), this._tempVector.normalize(), UV ? eV.iG(this._tempVector) : JV.o.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, VV, eV)
      }
      startPositionFunction(VV, eV, xV, UV) {
        const yV = (0, YV.RandomRange)(-this.height / 2, this.height / 2),
          pV = (0, YV.RandomRange)(0, 2 * Math.PI),
          QV = (0, YV.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          nV = Math.sqrt(QV) * this.radius,
          wV = nV * Math.cos(pV),
          ZV = nV * Math.sin(pV);
        UV ? eV.FeV(wV, yV, ZV) : JV.o.TransformCoordinatesFromFloatsToRef(wV, yV, ZV, VV, eV)
      }
      clone() {
        const VV = new yV(this.radius, this.directionRandomizer);
        return UV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        VV.setFloat("radius", this.radius), VV.setFloat("height", this.height), VV.setFloat("radiusRange", this.radiusRange), VV.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(VV) {
        VV.addUniform("radius", 1), VV.addUniform("height", 1), VV.addUniform("radiusRange", 1), VV.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const VV = {};
        return VV.type = this.getClassName(), VV.radius = this.radius, VV.height = this.height, VV.radiusRange = this.radiusRange, VV.directionRandomizer = this.directionRandomizer, VV
      }
      parse(VV) {
        this.radius = VV.radius, this.height = VV.height, this.radiusRange = VV.radiusRange, this.directionRandomizer = VV.directionRandomizer
      }
    }
    class pV extends yV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new JV.o(0, 1, 0),
          UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new JV.o(0, 1, 0);
        super(VV, eV, xV), this.direction1 = YV, this.direction2 = UV
      }
      startDirectionFunction(VV, eV, xV, UV) {
        const yV = (0, YV.RandomRange)(this.direction1.x, this.direction2.x),
          pV = (0, YV.RandomRange)(this.direction1.y, this.direction2.y),
          QV = (0, YV.RandomRange)(this.direction1.z, this.direction2.z);
        UV ? eV.FeV(yV, pV, QV) : JV.o.TransformNormalFromFloatsToRef(yV, pV, QV, VV, eV)
      }
      clone() {
        const VV = new pV(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return UV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        VV.setFloat("radius", this.radius), VV.setFloat("height", this.height), VV.setFloat("radiusRange", this.radiusRange), VV.setVector3("direction1", this.direction1), VV.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(VV) {
        VV.addUniform("radius", 1), VV.addUniform("height", 1), VV.addUniform("radiusRange", 1), VV.addUniform("direction1", 3), VV.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const VV = super.serialize();
        return VV.direction1 = this.direction1.WYV(), VV.direction2 = this.direction2.WYV(), VV
      }
      parse(VV) {
        super.parse(VV), JV.o.FromArrayToRef(VV.direction1, 0, this.direction1), JV.o.FromArrayToRef(VV.direction2, 0, this.direction2)
      }
    }
  },
  44476: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => Ke
    });
    var JV = xV(39899),
      YV = xV(38296),
      UV = xV(38269),
      yV = xV(41394),
      pV = xV(44480),
      QV = xV(38287),
      nV = xV(41535),
      wV = xV(38389),
      ZV = xV(39908),
      vV = xV(39867),
      rV = xV(38303);
    class kV {
      constructor() {
        this.direction1 = new UV.o(0, 1, 0), this.direction2 = new UV.o(0, 1, 0)
      }
      startDirectionFunction(VV, eV, xV, JV) {
        const YV = (0, rV.RandomRange)(this.direction1.x, this.direction2.x),
          yV = (0, rV.RandomRange)(this.direction1.y, this.direction2.y),
          pV = (0, rV.RandomRange)(this.direction1.z, this.direction2.z);
        JV ? eV.FeV(YV, yV, pV) : UV.o.TransformNormalFromFloatsToRef(YV, yV, pV, VV, eV)
      }
      startPositionFunction(VV, eV, xV, JV) {
        JV ? eV.FeV(0, 0, 0) : UV.o.TransformCoordinatesFromFloatsToRef(0, 0, 0, VV, eV)
      }
      clone() {
        const VV = new kV;
        return vV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        VV.setVector3("direction1", this.direction1), VV.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(VV) {
        VV.addUniform("direction1", 3), VV.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const VV = {};
        return VV.type = this.getClassName(), VV.direction1 = this.direction1.WYV(), VV.direction2 = this.direction2.WYV(), VV
      }
      parse(VV) {
        UV.o.FromArrayToRef(VV.direction1, 0, this.direction1), UV.o.FromArrayToRef(VV.direction2, 0, this.direction2)
      }
    }
    class bV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = VV, this.radiusRange = eV, this.directionRandomizer = xV
      }
      startDirectionFunction(VV, eV, xV, JV) {
        const YV = xV.position.subtract(VV.getTranslation()).normalize(),
          yV = (0, rV.RandomRange)(0, this.directionRandomizer),
          pV = (0, rV.RandomRange)(0, this.directionRandomizer),
          QV = (0, rV.RandomRange)(0, this.directionRandomizer);
        YV.x += yV, YV.y += pV, YV.z += QV, YV.normalize(), JV ? eV.iG(YV) : UV.o.TransformNormalFromFloatsToRef(YV.x, YV.y, YV.z, VV, eV)
      }
      startPositionFunction(VV, eV, xV, JV) {
        const YV = this.radius - (0, rV.RandomRange)(0, this.radius * this.radiusRange),
          yV = (0, rV.RandomRange)(0, 1),
          pV = (0, rV.RandomRange)(0, 2 * Math.PI),
          QV = Math.acos(2 * yV - 1),
          nV = YV * Math.cos(pV) * Math.sin(QV),
          wV = YV * Math.cos(QV),
          ZV = YV * Math.sin(pV) * Math.sin(QV);
        JV ? eV.FeV(nV, Math.abs(wV), ZV) : UV.o.TransformCoordinatesFromFloatsToRef(nV, Math.abs(wV), ZV, VV, eV)
      }
      clone() {
        const VV = new bV(this.radius, this.directionRandomizer);
        return vV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        VV.setFloat("radius", this.radius), VV.setFloat("radiusRange", this.radiusRange), VV.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(VV) {
        VV.addUniform("radius", 1), VV.addUniform("radiusRange", 1), VV.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const VV = {};
        return VV.type = this.getClassName(), VV.radius = this.radius, VV.radiusRange = this.radiusRange, VV.directionRandomizer = this.directionRandomizer, VV
      }
      parse(VV) {
        this.radius = VV.radius, this.radiusRange = VV.radiusRange, this.directionRandomizer = VV.directionRandomizer
      }
    }
    class EV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = VV, this.radiusRange = eV, this.directionRandomizer = xV
      }
      startDirectionFunction(VV, eV, xV, JV) {
        const YV = xV.position.subtract(VV.getTranslation()).normalize(),
          yV = (0, rV.RandomRange)(0, this.directionRandomizer),
          pV = (0, rV.RandomRange)(0, this.directionRandomizer),
          QV = (0, rV.RandomRange)(0, this.directionRandomizer);
        YV.x += yV, YV.y += pV, YV.z += QV, YV.normalize(), JV ? eV.iG(YV) : UV.o.TransformNormalFromFloatsToRef(YV.x, YV.y, YV.z, VV, eV)
      }
      startPositionFunction(VV, eV, xV, JV) {
        const YV = this.radius - (0, rV.RandomRange)(0, this.radius * this.radiusRange),
          yV = (0, rV.RandomRange)(0, 1),
          pV = (0, rV.RandomRange)(0, 2 * Math.PI),
          QV = Math.acos(2 * yV - 1),
          nV = YV * Math.cos(pV) * Math.sin(QV),
          wV = YV * Math.cos(QV),
          ZV = YV * Math.sin(pV) * Math.sin(QV);
        JV ? eV.FeV(nV, wV, ZV) : UV.o.TransformCoordinatesFromFloatsToRef(nV, wV, ZV, VV, eV)
      }
      clone() {
        const VV = new EV(this.radius, this.directionRandomizer);
        return vV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        VV.setFloat("radius", this.radius), VV.setFloat("radiusRange", this.radiusRange), VV.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(VV) {
        VV.addUniform("radius", 1), VV.addUniform("radiusRange", 1), VV.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const VV = {};
        return VV.type = this.getClassName(), VV.radius = this.radius, VV.radiusRange = this.radiusRange, VV.directionRandomizer = this.directionRandomizer, VV
      }
      parse(VV) {
        this.radius = VV.radius, this.radiusRange = VV.radiusRange, this.directionRandomizer = VV.directionRandomizer
      }
    }
    class BV extends EV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new UV.o(0, 1, 0),
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new UV.o(0, 1, 0);
        super(VV), this.direction1 = eV, this.direction2 = xV
      }
      startDirectionFunction(VV, eV, xV, JV) {
        const YV = (0, rV.RandomRange)(this.direction1.x, this.direction2.x),
          yV = (0, rV.RandomRange)(this.direction1.y, this.direction2.y),
          pV = (0, rV.RandomRange)(this.direction1.z, this.direction2.z);
        JV ? eV.FeV(YV, yV, pV) : UV.o.TransformNormalFromFloatsToRef(YV, yV, pV, VV, eV)
      }
      clone() {
        const VV = new BV(this.radius, this.direction1, this.direction2);
        return vV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        VV.setFloat("radius", this.radius), VV.setFloat("radiusRange", this.radiusRange), VV.setVector3("direction1", this.direction1), VV.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(VV) {
        VV.addUniform("radius", 1), VV.addUniform("radiusRange", 1), VV.addUniform("direction1", 3), VV.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const VV = super.serialize();
        return VV.direction1 = this.direction1.WYV(), VV.direction2 = this.direction2.WYV(), VV
      }
      parse(VV) {
        super.parse(VV), UV.o.FromArrayToRef(VV.direction1, 0, this.direction1), UV.o.FromArrayToRef(VV.direction2, 0, this.direction2)
      }
    }
    var jV = xV(39861);
    class qV {
      get radius() {
        return this._radius
      }
      set radius(VV) {
        this._radius = VV, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(VV) {
        this._angle = VV, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = xV, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = eV, this.radius = VV
      }
      startDirectionFunction(VV, eV, xV, JV) {
        const YV = xV.position.subtract(VV.getTranslation()).normalize(),
          yV = (0, rV.RandomRange)(0, this.directionRandomizer),
          pV = (0, rV.RandomRange)(0, this.directionRandomizer),
          QV = (0, rV.RandomRange)(0, this.directionRandomizer);
        YV.x += yV, YV.y += pV, YV.z += QV, YV.normalize(), JV ? eV.iG(YV) : UV.o.TransformNormalFromFloatsToRef(YV.x, YV.y, YV.z, VV, eV)
      }
      startPositionFunction(VV, eV, xV, JV) {
        const YV = (0, rV.RandomRange)(0, 2 * Math.PI);
        let yV;
        this.emitFromSpawnPointOnly ? yV = 1e-4 : (yV = (0, rV.RandomRange)(0, this.heightRange), yV = 1 - yV * yV);
        let pV = this._radius - (0, rV.RandomRange)(0, this._radius * this.radiusRange);
        pV *= yV;
        const QV = pV * Math.sin(YV),
          nV = pV * Math.cos(YV),
          wV = yV * this._height;
        if (JV) return eV.x = QV, eV.y = wV, void(eV.z = nV);
        UV.o.TransformCoordinatesFromFloatsToRef(QV, wV, nV, VV, eV)
      }
      clone() {
        const VV = new qV(this._radius, this._angle, this.directionRandomizer);
        return vV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        VV.setFloat2("radius", this._radius, this.radiusRange), VV.setFloat("coneAngle", this._angle), VV.setFloat2("height", this._height, this.heightRange), VV.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(VV) {
        VV.addUniform("radius", 2), VV.addUniform("coneAngle", 1), VV.addUniform("height", 2), VV.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let VV = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (VV += "\n#define CONEEMITTERSPAWNPOINT"), VV
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const VV = {};
        return VV.type = this.getClassName(), VV.radius = this._radius, VV.angle = this._angle, VV.directionRandomizer = this.directionRandomizer, VV.radiusRange = this.radiusRange, VV.heightRange = this.heightRange, VV.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, VV
      }
      parse(VV) {
        this.radius = VV.radius, this.angle = VV.angle, this.directionRandomizer = VV.directionRandomizer, this.radiusRange = void 0 !== VV.radiusRange ? VV.radiusRange : 1, this.heightRange = void 0 !== VV.heightRange ? VV.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== VV.emitFromSpawnPointOnly && VV.emitFromSpawnPointOnly
      }
    }
    class tV extends qV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new UV.o(0, 1, 0),
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new UV.o(0, 1, 0);
        super(VV, eV), this.direction1 = xV, this.direction2 = JV
      }
      startDirectionFunction(VV, eV, xV, JV) {
        const YV = (0, rV.RandomRange)(this.direction1.x, this.direction2.x),
          yV = (0, rV.RandomRange)(this.direction1.y, this.direction2.y),
          pV = (0, rV.RandomRange)(this.direction1.z, this.direction2.z);
        JV ? eV.FeV(YV, yV, pV) : UV.o.TransformNormalFromFloatsToRef(YV, yV, pV, VV, eV)
      }
      clone() {
        const VV = new tV(this.radius, this.angle, this.direction1, this.direction2);
        return vV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        super.applyToShader(VV), VV.setVector3("direction1", this.direction1), VV.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(VV) {
        super.buildUniformLayout(VV), VV.addUniform("direction1", 3), VV.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const VV = super.serialize();
        return VV.direction1 = this.direction1.WYV(), VV.direction2 = this.direction2.WYV(), VV
      }
      parse(VV) {
        super.parse(VV), UV.o.FromArrayToRef(VV.direction1, 0, this.direction1), UV.o.FromArrayToRef(VV.direction2, 0, this.direction2)
      }
    }
    class FV {
      get mesh() {
        return this._mesh
      }
      set mesh(VV) {
        this._mesh !== VV && (this._mesh = VV, VV ? (this._indices = VV.RYV(), this._positions = VV.getVerticesData(yV.j.PositionKind), this._normals = VV.getVerticesData(yV.j.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = UV.o.Zero(), this._mesh = null, this.direction1 = new UV.o(0, 1, 0), this.direction2 = new UV.o(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = VV
      }
      startDirectionFunction(VV, eV, xV, JV) {
        if (this.useMeshNormalsForDirection && this._normals) return void UV.o.TransformNormalToRef(this._storedNormal, VV, eV);
        const YV = (0, rV.RandomRange)(this.direction1.x, this.direction2.x),
          yV = (0, rV.RandomRange)(this.direction1.y, this.direction2.y),
          pV = (0, rV.RandomRange)(this.direction1.z, this.direction2.z);
        JV ? eV.FeV(YV, yV, pV) : UV.o.TransformNormalFromFloatsToRef(YV, yV, pV, VV, eV)
      }
      startPositionFunction(VV, eV, xV, JV) {
        if (!this._indices || !this._positions) return;
        const YV = 3 * (Math.random() * (this._indices.length / 3) | 0),
          yV = Math.random(),
          pV = Math.random() * (1 - yV),
          QV = 1 - yV - pV,
          nV = this._indices[YV],
          wV = this._indices[YV + 1],
          ZV = this._indices[YV + 2],
          vV = UV.l.Ik[0],
          rV = UV.l.Ik[1],
          kV = UV.l.Ik[2],
          bV = UV.l.Ik[3];
        UV.o.FromArrayToRef(this._positions, 3 * nV, vV), UV.o.FromArrayToRef(this._positions, 3 * wV, rV), UV.o.FromArrayToRef(this._positions, 3 * ZV, kV), bV.x = yV * vV.x + pV * rV.x + QV * kV.x, bV.y = yV * vV.y + pV * rV.y + QV * kV.y, bV.z = yV * vV.z + pV * rV.z + QV * kV.z, JV ? eV.FeV(bV.x, bV.y, bV.z) : UV.o.TransformCoordinatesFromFloatsToRef(bV.x, bV.y, bV.z, VV, eV), this.useMeshNormalsForDirection && this._normals && (UV.o.FromArrayToRef(this._normals, 3 * nV, vV), UV.o.FromArrayToRef(this._normals, 3 * wV, rV), UV.o.FromArrayToRef(this._normals, 3 * ZV, kV), this._storedNormal.x = yV * vV.x + pV * rV.x + QV * kV.x, this._storedNormal.y = yV * vV.y + pV * rV.y + QV * kV.y, this._storedNormal.z = yV * vV.z + pV * rV.z + QV * kV.z)
      }
      clone() {
        const VV = new FV(this.mesh);
        return vV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        VV.setVector3("direction1", this.direction1), VV.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(VV) {
        VV.addUniform("direction1", 3), VV.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const VV = {};
        return VV.type = this.getClassName(), VV.direction1 = this.direction1.WYV(), VV.direction2 = this.direction2.WYV(), VV.meshId = this.mesh?.id, VV.useMeshNormalsForDirection = this.useMeshNormalsForDirection, VV
      }
      parse(VV, eV) {
        UV.o.FromArrayToRef(VV.direction1, 0, this.direction1), UV.o.FromArrayToRef(VV.direction2, 0, this.direction2), VV.meshId && eV && (this.mesh = eV.getLastMeshById(VV.meshId)), this.useMeshNormalsForDirection = VV.useMeshNormalsForDirection
      }
    }
    class TV {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(VV) {
        this._targetStopDuration !== VV && (this._targetStopDuration = VV)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(VV) {
        this._noiseTexture !== VV && (this._noiseTexture = VV, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(VV) {
        this._attractors.push(VV)
      }
      removeAttractor(VV) {
        const eV = this._attractors.indexOf(VV); - 1 !== eV && this._attractors.splice(eV, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(VV) {
        this._animationSheetEnabled !== VV && (this._animationSheetEnabled = VV)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(VV) {
        this._isAnimationSheetEnabled != VV && (this._isAnimationSheetEnabled = VV, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(VV) {
        this._useLogarithmicDepth = VV && this.dD().sk().getCaps().fragmentDepthSupported
      }
      dD() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(VV) {
        switch (VV) {
          case TV.BLENDMODE_MULTIPLYADD:
            return;
          case TV.BLENDMODE_ADD:
            VV = 1;
            break;
          case TV.BLENDMODE_ONEONE:
            VV = 6;
            break;
          case TV.BLENDMODE_STANDARD:
            VV = 2;
            break;
          case TV.BLENDMODE_MULTIPLY:
            VV = 4;
            break;
          case TV.BLENDMODE_SUBTRACT:
            VV = 3
        }
        this._engine.setAlphaMode(VV)
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
      addEmitRateGradient(VV, eV, xV) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, VV, eV, xV), this
      }
      removeEmitRateGradient(VV) {
        return this._removeFactorGradient(this._emitRateGradients, VV), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : UV.o.Zero()
      }
      set direction1(VV) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = VV)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : UV.o.Zero()
      }
      set direction2(VV) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = VV)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : UV.o.Zero()
      }
      set minEmitBox(VV) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = VV)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : UV.o.Zero()
      }
      set maxEmitBox(VV) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = VV)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(VV) {
        this._billboardMode !== VV && (this._billboardMode = VV, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(VV) {
        this._isBillboardBased !== VV && (this._isBillboardBased = VV, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(VV) {
        this._attachImageProcessingConfiguration(VV)
      }
      _attachImageProcessingConfiguration(VV) {
        VV !== this._imageProcessingConfiguration && (!VV && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = VV)
      }
      _reset() {}
      _addFactorGradient(VV, eV, xV, YV) {
        const UV = new JV.h(eV, xV, YV);
        VV.push(UV), VV.sort(((VV, eV) => VV.gradient < eV.gradient ? -1 : VV.gradient > eV.gradient ? 1 : 0))
      }
      _removeFactorGradient(VV, eV) {
        if (!VV) return;
        let xV = 0;
        for (const JV of VV) {
          if (JV.gradient === eV) {
            VV.splice(xV, 1);
            break
          }
          xV++
        }
      }
      _removeGradientAndTexture(VV, eV, xV) {
        if (!eV) return this;
        let JV = 0;
        for (const YV of eV) {
          if (YV.gradient === VV) {
            eV.splice(JV, 1);
            break
          }
          JV++
        }
        return xV && xV.dispose(), this
      }
      constructor(VV) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = UV.o.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new UV.o(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = TV.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new UV.n(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new UV.o(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = UV.o.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new wV.h(1, 1, 1, 1), this.color2 = new wV.h(1, 1, 1, 1), this.colorDead = new wV.h(0, 0, 0, 1), this.textureMask = new wV.h(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new nV.c, this.id = VV, this.name = VV
      }
      createPointEmitter(VV, eV) {
        const xV = function(VV, eV) {
          const xV = new kV;
          return xV.direction1 = VV, xV.direction2 = eV, xV
        }(VV, eV);
        return this.particleEmitterType = xV, xV
      }
      createHemisphericEmitter() {
        const VV = function() {
          return new bV(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = VV, VV
      }
      createSphereEmitter() {
        const VV = function() {
          return new EV(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = VV, VV
      }
      createDirectedSphereEmitter() {
        const VV = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new UV.o(0, 1, 0),
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new UV.o(0, 1, 0);
          return new BV(VV, eV, xV)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new UV.o(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new UV.o(0, 1, 0));
        return this.particleEmitterType = VV, VV
      }
      createCylinderEmitter() {
        const VV = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new jV.f(VV, eV, xV, JV)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = VV, VV
      }
      createDirectedCylinderEmitter() {
        const VV = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new UV.o(0, 1, 0),
            YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new UV.o(0, 1, 0);
          return new jV.e(VV, eV, xV, JV, YV)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new UV.o(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new UV.o(0, 1, 0));
        return this.particleEmitterType = VV, VV
      }
      createConeEmitter() {
        const VV = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new qV(VV, eV)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = VV, VV
      }
      createDirectedConeEmitter() {
        const VV = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new UV.o(0, 1, 0),
            JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new UV.o(0, 1, 0);
          return new tV(VV, eV, xV, JV)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new UV.o(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new UV.o(0, 1, 0));
        return this.particleEmitterType = VV, VV
      }
      createBoxEmitter(VV, eV, xV, JV) {
        const YV = new ZV.d;
        return this.particleEmitterType = YV, this.direction1 = VV, this.direction2 = eV, this.minEmitBox = xV, this.maxEmitBox = JV, YV
      }
      createMeshEmitter() {
        const VV = function() {
          return new FV(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = VV, VV
      }
    }
    TV.BLENDMODE_ONEONE = 0, TV.BLENDMODE_STANDARD = 1, TV.BLENDMODE_ADD = 2, TV.BLENDMODE_MULTIPLY = 3, TV.BLENDMODE_MULTIPLYADD = 4, TV.BLENDMODE_SUBTRACT = -1;
    class PV {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new wV.h(0, 0, 0, 0), this.currentColor2 = new wV.h(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = UV.o.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class AV {
      constructor(VV) {
        this.particleSystem = VV, this.position = UV.o.Zero(), this.direction = UV.o.Zero(), this.color = new wV.h(0, 0, 0, 0), this.colorStep = new wV.h(0, 0, 0, 0), this.initialColor = new wV.h(0, 0, 0, 0), this.colorDead = new wV.h(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new UV.n(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new PV, this.id = AV._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let VV = this.age,
          eV = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === eV ? (eV = 1, VV = this._properties.randomCellOffset) : VV += this._properties.randomCellOffset);
        const xV = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let JV;
        JV = this._properties.initialSpriteCellLoop ? (0, rV.Clamp)(VV * eV % this.lifeTime / this.lifeTime) : (0, rV.Clamp)(VV * eV / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + JV * xV | 0
      }
      _inheritParticleInfoToSubEmitter(VV) {
        if (VV.particleSystem.emitter.position) {
          const eV = VV.particleSystem.emitter;
          if (eV.position.iG(this.position), VV.inheritDirection) {
            const VV = UV.l.Ik[0];
            this.direction.normalizeToRef(VV), eV.setDirection(VV, 0, Math.PI / 2)
          }
        } else {
          VV.particleSystem.emitter.iG(this.position)
        }
        this.direction.scaleToRef(VV.inheritedVelocityAmount / 2, UV.l.Ik[0]), VV.particleSystem._inheritedVelocityOffset.iG(UV.l.Ik[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const VV of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(VV)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = AV._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(VV) {
        VV.position.iG(this.position), this._properties.initialDirection ? VV._properties.initialDirection ? VV._properties.initialDirection.iG(this._properties.initialDirection) : VV._properties.initialDirection = this._properties.initialDirection.clone() : VV._properties.initialDirection = null, VV.direction.iG(this.direction), this._properties.localPosition && (VV._properties.localPosition ? VV._properties.localPosition.iG(this._properties.localPosition) : VV._properties.localPosition = this._properties.localPosition.clone()), VV.color.iG(this.color), VV.colorStep.iG(this.colorStep), VV.initialColor.iG(this.initialColor), VV.colorDead.iG(this.colorDead), VV.lifeTime = this.lifeTime, VV.age = this.age, VV._properties.randomCellOffset = this._properties.randomCellOffset, VV.size = this.size, VV.scale.iG(this.scale), VV.angle = this.angle, VV.angularSpeed = this.angularSpeed, VV.particleSystem = this.particleSystem, VV.cellIndex = this.cellIndex, VV.id = this.id, VV._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (VV._properties.currentColorGradient = this._properties.currentColorGradient, VV._properties.currentColor1.iG(this._properties.currentColor1), VV._properties.currentColor2.iG(this._properties.currentColor2)), this._properties.currentSizeGradient && (VV._properties.currentSizeGradient = this._properties.currentSizeGradient, VV._properties.currentSize1 = this._properties.currentSize1, VV._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (VV._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, VV._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, VV._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (VV._properties.currentVelocityGradient = this._properties.currentVelocityGradient, VV._properties.currentVelocity1 = this._properties.currentVelocity1, VV._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (VV._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, VV._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, VV._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (VV._properties.currentDragGradient = this._properties.currentDragGradient, VV._properties.currentDrag1 = this._properties.currentDrag1, VV._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (VV._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, VV._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, VV._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (VV.remapData && this.remapData ? VV.remapData.iG(this.remapData) : VV.remapData = new UV.q(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (VV._properties.randomNoiseCoordinates1 && VV._properties.randomNoiseCoordinates2 ? (VV._properties.randomNoiseCoordinates1.iG(this._properties.randomNoiseCoordinates1), VV._properties.randomNoiseCoordinates2.iG(this._properties.randomNoiseCoordinates2)) : (VV._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), VV._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), VV.metadata = this.metadata
      }
    }
    AV._Count = 0;
    var NV = xV(42433);
    class XV {
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
      constructor(VV, eV, xV, JV) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = eV, this.CZ = VV, this._scene = xV, this._host = JV, this._activeTargets = [], eV._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            AY: this._getCorrectLoopMode()
          }, this._animation.dataType === NV.c.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = UV.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const VV = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, VV)
        }
        if (this.CZ instanceof Array) {
          let VV = 0;
          for (const eV of this.CZ) this._preparePath(eV, VV), this._getOriginalValues(VV), VV++;
          this._targetIsArray = !0
        } else this._preparePath(this.CZ), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const YV = eV.getEvents();
        if (YV && YV.length > 0)
          for (const UV of YV) this._events.push(UV._clone());
        this._enableBlending = VV && VV.animationPropertiesOverride ? VV.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const xV = this._animation.targetPropertyPath;
        if (xV.length > 1) {
          let JV = VV;
          for (let VV = 0; VV < xV.length - 1; VV++) {
            const eV = xV[VV];
            if (JV = JV[eV], void 0 === JV) throw new Error(`Invalid property (${eV}) in property path (${xV.join(".")})`)
          }
          this._targetPath = xV[xV.length - 1], this._activeTargets[eV] = JV
        } else this._targetPath = xV[0], this._activeTargets[eV] = VV;
        if (void 0 === this._activeTargets[eV][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${xV.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.CZ instanceof Array) {
            let VV = 0;
            for (const eV of this.CZ) void 0 !== this._originalValue[VV] && this._setValue(eV, this._activeTargets[VV], this._originalValue[VV], -1, VV), VV++
          } else void 0 !== this._originalValue[0] && this._setValue(this.CZ, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let VV = 0; VV < this._events.length; VV++) this._events[VV].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const VV = this._animation.runtimeAnimations.indexOf(this);
        VV > -1 && this._animation.runtimeAnimations.splice(VV, 1)
      }
      setValue(VV, eV) {
        if (this._targetIsArray)
          for (let xV = 0; xV < this.CZ.length; xV++) {
            const JV = this.CZ[xV];
            this._setValue(JV, this._activeTargets[xV], VV, eV, xV)
          } else this._setValue(this.CZ, this._directTarget, VV, eV, 0)
      }
      _getOriginalValues() {
        let VV, eV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const xV = this._activeTargets[eV];
        if (NV.c.InheritOriginalValueFromActiveAnimations) {
          const VV = this._scene._activeAnimatables;
          for (let JV = 0; JV < VV.length; JV++) {
            const YV = VV[JV]._runtimeAnimations;
            for (let VV = 0; VV < YV.length; VV++) {
              const JV = YV[VV];
              if (JV !== this && JV._targetPath === this._targetPath)
                for (let VV = 0; VV < JV._activeTargets.length; VV++)
                  if (JV._activeTargets[VV] === xV && void 0 !== JV._originalValue[VV]) return void(JV._originalValue[VV] && JV._originalValue[VV].clone ? this._originalValue[eV] = JV._originalValue[VV].clone() : this._originalValue[eV] = JV._originalValue[VV])
            }
          }
        }
        VV = xV.getLocalMatrix && "_matrix" === this._targetPath ? xV.getLocalMatrix() : xV[this._targetPath], VV && VV.clone ? this._originalValue[eV] = VV.clone() : this._originalValue[eV] = VV
      }
      _registerTargetForLateAnimationBinding(VV, eV) {
        const xV = VV.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(xV), xV._lateAnimationHolders || (xV._lateAnimationHolders = {}), xV._lateAnimationHolders[VV.targetPath] || (xV._lateAnimationHolders[VV.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: eV
        }), VV.isAdditive ? (xV._lateAnimationHolders[VV.targetPath].additiveAnimations.push(VV), xV._lateAnimationHolders[VV.targetPath].totalAdditiveWeight += VV.weight) : (xV._lateAnimationHolders[VV.targetPath].animations.push(VV), xV._lateAnimationHolders[VV.targetPath].totalWeight += VV.weight)
      }
      _setValue(VV, eV, xV, JV, YV) {
        const yV = this._scene._animationWrites,
          pV = this._scene._animationWriteCount++;
        let QV = yV[pV];
        if (QV || (QV = yV[pV] = {
            runtimeAnimation: this,
            target: VV,
            weight: JV,
            additive: !1,
            blendingFactor: 1,
            zE: !1
          }), QV.runtimeAnimation = this, QV.target = VV, QV.weight = JV, QV.additive = this.isAdditive, QV.zE = !1, this._currentActiveTarget = eV, this._weight = JV, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const VV = eV[this._targetPath];
            VV.clone ? this._originalBlendValue = VV.clone() : this._originalBlendValue = VV
          }
          this._originalBlendValue.m ? NV.c.AllowMatrixDecomposeForInterpolation ? this._currentValue ? UV.d.DecomposeLerpToRef(this._originalBlendValue, xV, this._blendingFactor, this._currentValue) : this._currentValue = UV.d.DecomposeLerp(this._originalBlendValue, xV, this._blendingFactor) : this._currentValue ? UV.d.LerpToRef(this._originalBlendValue, xV, this._blendingFactor, this._currentValue) : this._currentValue = UV.d.Lerp(this._originalBlendValue, xV, this._blendingFactor) : this._currentValue = NV.c._UniversalLerp(this._originalBlendValue, xV, this._blendingFactor);
          const JV = VV && VV.animationPropertiesOverride ? VV.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          QV.blendingFactor = this._blendingFactor, this._blendingFactor += JV
        } else QV.blendingFactor = 1, this._currentValue ? this._currentValue.iG ? this._currentValue.iG(xV) : this._currentValue = xV : this._currentValue = xV?.clone ? xV.clone() : xV; - 1 !== JV ? this._registerTargetForLateAnimationBinding(this, this._originalValue[YV]) : this._animationState.AY === NV.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[YV], eV[this._targetPath]) : eV[this._targetPath] = this._originalValue[YV] + this._currentValue : eV[this._targetPath] = this._currentValue, VV.nJV && VV.nJV(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.CZ && this.CZ.animationPropertiesOverride) {
          return "MorphTarget" === this.CZ.getClassName?.() && null == this.CZ._animationPropertiesOverride ? this._animation.AY : this.CZ.animationPropertiesOverride.AY
        }
        return this._animation.AY
      }
      goToFrame(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const xV = this._animation.getKeys();
        VV < xV[0].frame ? VV = xV[0].frame : VV > xV[xV.length - 1].frame && (VV = xV[xV.length - 1].frame);
        const JV = this._events;
        if (JV.length)
          for (let UV = 0; UV < JV.length; UV++) JV[UV].onlyOnce || (JV[UV].isDone = JV[UV].frame < VV);
        this._currentFrame = VV;
        const YV = this._animation._interpolate(VV, this._animationState);
        this.setValue(YV, eV)
      }
      _prepareForSpeedRatioChange(VV) {
        const eV = this._previousElapsedTime * (this._animation.framePerSecond * VV) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - eV
      }
      animate(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const yV = this._animation,
          pV = yV.targetPropertyPath;
        if (!pV || pV.length < 1) return this._stopped = !0, !1;
        let QV, nV = !0;
        const wV = this._events;
        let ZV;
        if (this._coreRuntimeAnimation) ZV = xV - eV, QV = this._coreRuntimeAnimation.currentFrame, this._currentFrame = QV, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let UV;
          (eV < this._minFrame || eV > this._maxFrame) && (eV = this._minFrame), (xV < this._minFrame || xV > this._maxFrame) && (xV = this._maxFrame), ZV = xV - eV;
          let pV = VV * (yV.framePerSecond * YV) / 1e3 + this._absoluteFrameOffset,
            vV = 0,
            rV = !1;
          const kV = JV && this._animationState.AY === NV.c.ANIMATIONLOOPMODE_YOYO;
          if (kV) {
            const VV = (pV - eV) / ZV,
              xV = Math.sin(VV * Math.PI);
            pV = Math.abs(xV) * ZV + eV;
            const JV = xV >= 0 ? 1 : -1;
            this._yoyoDirection !== JV && (rV = !0), this._yoyoDirection = JV
          }
          if (this._previousElapsedTime = VV, this._previousAbsoluteFrame = pV, !JV && xV >= eV && (pV >= ZV && YV > 0 || pV <= 0 && YV < 0)) nV = !1, vV = yV.evaluate(xV);
          else if (!JV && eV >= xV && (pV <= ZV && YV < 0 || pV >= 0 && YV > 0)) nV = !1, vV = yV.evaluate(eV);
          else if (this._animationState.AY !== NV.c.ANIMATIONLOOPMODE_CYCLE) {
            const VV = xV.toString() + eV.toString();
            if (!this._offsetsCache[VV]) {
              this._animationState.repeatCount = 0, this._animationState.AY = NV.c.ANIMATIONLOOPMODE_CYCLE;
              const JV = yV._interpolate(eV, this._animationState),
                YV = yV._interpolate(xV, this._animationState);
              switch (this._animationState.AY = this._getCorrectLoopMode(), yV.dataType) {
                case NV.c.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[VV] = YV - JV;
                  break;
                case NV.c.ANIMATIONTYPE_QUATERNION:
                case NV.c.ANIMATIONTYPE_VECTOR3:
                case NV.c.ANIMATIONTYPE_VECTOR2:
                case NV.c.ANIMATIONTYPE_SIZE:
                case NV.c.ANIMATIONTYPE_COLOR3:
                case NV.c.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[VV] = YV.subtract(JV)
              }
              this._highLimitsCache[VV] = YV
            }
            vV = this._highLimitsCache[VV], UV = this._offsetsCache[VV]
          }
          if (void 0 === UV) switch (yV.dataType) {
            case NV.c.ANIMATIONTYPE_FLOAT:
              UV = 0;
              break;
            case NV.c.ANIMATIONTYPE_QUATERNION:
              UV = NV.m;
              break;
            case NV.c.ANIMATIONTYPE_VECTOR3:
              UV = NV.u;
              break;
            case NV.c.ANIMATIONTYPE_VECTOR2:
              UV = NV.q;
              break;
            case NV.c.ANIMATIONTYPE_SIZE:
              UV = NV.n;
              break;
            case NV.c.ANIMATIONTYPE_COLOR3:
              UV = NV.h;
              break;
            case NV.c.ANIMATIONTYPE_COLOR4:
              UV = NV.l
          }
          const bV = this._host ? this._host.syncRoot : null;
          let EV, BV = this._playbackFrames,
            jV = !1;
          if (bV) {
            const VV = bV.toFrame - bV.fromFrame,
              xV = bV.masterFrame,
              JV = (xV - bV.fromFrame) / VV;
            QV = eV + ZV * JV;
            const YV = bV.getAnimations()[0];
            if (YV && 0 !== VV) {
              const VV = ZV * JV,
                eV = YV._playbackTo - YV._playbackFrom;
              if (0 !== eV && YV._playbackFrom <= bV.fromFrame && YV._playbackTo >= bV.toFrame) {
                BV = ZV * Math.round((YV._playbackFrames - (YV._currentFrame - YV._playbackFrom)) / eV) + VV
              } else jV = (xV - this._playbackSyncMasterFrame) * (YV._playbackFrames - this._playbackSyncMasterPlayed) < 0, BV = VV;
              jV = jV || YV._playbackJumped, this._playbackSyncMasterPlayed = YV._playbackFrames, this._playbackSyncMasterFrame = xV
            }
          } else QV = pV > 0 && eV > xV || pV < 0 && eV < xV ? nV && 0 !== ZV ? xV + pV % ZV : eV : nV && 0 !== ZV ? eV + pV % ZV : xV;
          if (!kV && (YV > 0 && this.currentFrame > QV || YV < 0 && this.currentFrame < QV) || kV && rV) {
            this._onLoop();
            for (let VV = 0; VV < wV.length; VV++) wV[VV].onlyOnce || (wV[VV].isDone = !1);
            this._animationState.key = YV > 0 ? 0 : yV.getKeys().length - 1
          }
          if (this._currentFrame = QV, this._animationState.repeatCount = 0 === ZV ? 0 : pV / ZV | 0, this._animationState.highLimitValue = vV, this._animationState.offsetValue = UV, this._playbackFrom = eV, this._playbackTo = xV, this._playbackJumped = jV, this._playbackSyncRoot = bV, bV) EV = BV;
          else if (nV) EV = kV ? QV === eV && pV === xV ? ZV : QV - eV : pV;
          else {
            const VV = 0 !== ZV ? Math.floor(this._playbackFrames / ZV) : 0;
            EV = (QV === xV ? VV + 1 : VV) * ZV
          }
          this._playbackFrames = EV, this._playbackProgress = this._animationState.AY === NV.c.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? ZV : EV
        }
        const vV = yV._interpolate(QV, this._animationState);
        if (this.setValue(vV, UV), wV.length)
          for (let rV = 0; rV < wV.length; rV++)
            if (ZV >= 0 && QV >= wV[rV].frame && wV[rV].frame >= eV || ZV < 0 && QV <= wV[rV].frame && wV[rV].frame <= eV) {
              const VV = wV[rV];
              VV.isDone || (VV.onlyOnce && (wV.splice(rV, 1), rV--), VV.isDone = !0, VV.action(QV))
            } return nV || (this._stopped = !0), nV
      }
    }
    var MV = xV(41154);
    class zV {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(VV) {
        this._weight = -1 !== VV ? Math.min(Math.max(VV, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(VV) {
        for (let eV = 0; eV < this._runtimeAnimations.length; eV++) {
          this._runtimeAnimations[eV]._prepareForSpeedRatioChange(VV)
        }
        this._speedRatio = VV, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          UV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          yV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          pV = arguments.length > 6 ? arguments[6] : void 0,
          QV = arguments.length > 7 ? arguments[7] : void 0,
          nV = arguments.length > 8 ? arguments[8] : void 0,
          wV = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          ZV = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = eV, this.fromFrame = xV, this.toFrame = JV, this.loopAnimation = UV, this.onAnimationEnd = pV, this.onAnimationLoop = nV, this.isAdditive = wV, this.playOrder = ZV, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.DZ = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new YV.c, this.onAnimationLoopObservable = new YV.c, this._scene = VV, QV && this.appendAnimations(eV, QV), this._speedRatio = yV, VV._activeAnimatables.push(this)
      }
      syncWith(VV) {
        if (this._syncRoot = VV, VV) {
          const VV = this._scene._activeAnimatables.indexOf(this);
          VV > -1 && (this._scene._activeAnimatables.splice(VV, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(VV, eV) {
        for (let xV = 0; xV < eV.length; xV++) {
          const JV = eV[xV],
            YV = new XV(VV, JV, this._scene, this);
          YV._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(YV)
        }
      }
      getAnimationByTargetProperty(VV) {
        const eV = this._runtimeAnimations;
        for (let xV = 0; xV < eV.length; xV++)
          if (eV[xV].animation.targetProperty === VV) return eV[xV].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(VV) {
        const eV = this._runtimeAnimations;
        for (let xV = 0; xV < eV.length; xV++)
          if (eV[xV].animation.targetProperty === VV) return eV[xV];
        return null
      }
      reset() {
        const VV = this._runtimeAnimations;
        for (let eV = 0; eV < VV.length; eV++) VV[eV].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(VV) {
        const eV = this._runtimeAnimations;
        for (let xV = 0; xV < eV.length; xV++) eV[xV].animation.enableBlending = !0, eV[xV].animation.blendingSpeed = VV
      }
      disableBlending() {
        const VV = this._runtimeAnimations;
        for (let eV = 0; eV < VV.length; eV++) VV[eV].animation.enableBlending = !1
      }
      goToFrame(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = this._runtimeAnimations;
        if (xV[0]) {
          const eV = xV[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? xV[0].currentFrame;
          const JV = 0 === this.speedRatio ? 0 : (VV - this._frameToSyncFromJump) / eV * 1e3 / this.speedRatio;
          this._manualJumpDelay = -JV
        }
        for (let JV = 0; JV < xV.length; JV++) xV[JV].goToFrame(VV, eV ? this._weight : -1);
        this._goToFrame = VV
      }
      get paused() {
        return this.DZ
      }
      pause() {
        this.DZ || (this.DZ = !0)
      }
      restart() {
        this.DZ = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (VV || eV) {
          const YV = this._scene._activeAnimatables.indexOf(this);
          if (YV > -1) {
            const UV = this._runtimeAnimations;
            for (let xV = UV.length - 1; xV >= 0; xV--) {
              const JV = UV[xV];
              VV && JV.animation.name != VV || (eV && !eV(JV.target) || (JV.dispose(), UV.splice(xV, 1)))
            }
            0 == UV.length && (xV || this._scene._activeAnimatables.splice(YV, 1), JV || this._raiseOnAnimationEnd())
          }
        } else {
          const VV = this._scene._activeAnimatables.indexOf(this);
          if (VV > -1) {
            xV || this._scene._activeAnimatables.splice(VV, 1);
            const eV = this._runtimeAnimations;
            for (let VV = 0; VV < eV.length; VV++) eV[VV].dispose();
            this._runtimeAnimations.length = 0, JV || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((VV => {
          this.onAnimationEndObservable.add((() => {
            VV(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(VV) {
        if (this.DZ) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = VV), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = VV, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += VV - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !zV.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let eV = !1;
        const xV = this._runtimeAnimations;
        let JV;
        for (JV = 0; JV < xV.length; JV++) {
          const YV = xV[JV].animate(VV - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          eV = eV || YV
        }
        if (this.animationStarted = eV, !eV) {
          if (this.disposeOnEnd)
            for (JV = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(JV, 1), JV = 0; JV < xV.length; JV++) xV[JV].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return eV
      }
    }

    function GV(VV) {
      if (0 === VV.totalWeight && 0 === VV.totalAdditiveWeight) return VV.originalValue;
      let eV = 1;
      const xV = UV.l.Ik[0],
        JV = UV.l.Ik[1],
        YV = UV.l.Quaternion[0];
      let yV = 0;
      const pV = VV.animations[0],
        QV = VV.originalValue;
      let nV, wV = !1;
      if (VV.totalWeight < 1) nV = 1 - VV.totalWeight, QV.decompose(JV, YV, xV);
      else {
        if (yV = 1, eV = VV.totalWeight, nV = pV.weight / eV, 1 == nV) {
          if (!VV.totalAdditiveWeight) return pV.currentValue;
          wV = !0
        }
        pV.currentValue.decompose(JV, YV, xV)
      }
      if (!wV) {
        JV.scaleInPlace(nV), xV.scaleInPlace(nV), YV.scaleInPlace(nV);
        for (let pV = yV; pV < VV.animations.length; pV++) {
          const yV = VV.animations[pV];
          if (0 === yV.weight) continue;
          nV = yV.weight / eV;
          const QV = UV.l.Ik[2],
            wV = UV.l.Ik[3],
            ZV = UV.l.Quaternion[1];
          yV.currentValue.decompose(wV, ZV, QV), wV.scaleAndAddToRef(nV, JV), ZV.scaleAndAddToRef(UV.h.Dot(YV, ZV) > 0 ? nV : -nV, YV), QV.scaleAndAddToRef(nV, xV)
        }
        YV.normalize()
      }
      for (let vV = 0; vV < VV.additiveAnimations.length; vV++) {
        const eV = VV.additiveAnimations[vV];
        if (0 === eV.weight) continue;
        const yV = UV.l.Ik[2],
          pV = UV.l.Ik[3],
          QV = UV.l.Quaternion[1];
        eV.currentValue.decompose(pV, QV, yV), pV.multiplyToRef(JV, pV), UV.o.LerpToRef(JV, pV, eV.weight, JV), YV.multiplyToRef(QV, QV), UV.h.SlerpToRef(YV, QV, eV.weight, YV), yV.scaleAndAddToRef(eV.weight, xV)
      }
      const ZV = pV ? pV._animationState.workValue : UV.l.Matrix[0].clone();
      return UV.d.ComposeToRef(JV, YV, xV, ZV), ZV
    }

    function WV(VV, eV) {
      if (0 === VV.totalWeight && 0 === VV.totalAdditiveWeight) return eV;
      const xV = VV.animations[0],
        JV = VV.originalValue;
      let YV = eV;
      if (0 === VV.totalWeight && VV.totalAdditiveWeight > 0) YV.iG(JV);
      else if (1 === VV.animations.length) {
        if (UV.h.SlerpToRef(JV, xV.currentValue, Math.min(1, VV.totalWeight), YV), 0 === VV.totalAdditiveWeight) return YV
      } else if (VV.animations.length > 1) {
        let xV, yV, pV = 1;
        if (VV.totalWeight < 1) {
          const eV = 1 - VV.totalWeight;
          xV = [], yV = [], xV.push(JV), yV.push(eV)
        } else {
          if (2 === VV.animations.length && (UV.h.SlerpToRef(VV.animations[0].currentValue, VV.animations[1].currentValue, VV.animations[1].weight / VV.totalWeight, eV), 0 === VV.totalAdditiveWeight)) return eV;
          xV = [], yV = [], pV = VV.totalWeight
        }
        for (let eV = 0; eV < VV.animations.length; eV++) {
          const JV = VV.animations[eV];
          xV.push(JV.currentValue), yV.push(JV.weight / pV)
        }
        let QV = 0;
        for (let VV = 0; VV < xV.length;) VV ? (QV += yV[VV], UV.h.SlerpToRef(YV, xV[VV], yV[VV] / QV, YV), VV++) : (UV.h.SlerpToRef(xV[VV], xV[VV + 1], yV[VV + 1] / (yV[VV] + yV[VV + 1]), eV), YV = eV, QV = yV[VV] + yV[VV + 1], VV += 2)
      }
      for (let yV = 0; yV < VV.additiveAnimations.length; yV++) {
        const eV = VV.additiveAnimations[yV];
        0 !== eV.weight && (YV.multiplyToRef(eV.currentValue, UV.l.Quaternion[0]), UV.h.SlerpToRef(YV, UV.l.Quaternion[0], eV.weight, YV))
      }
      return YV
    }

    function RV(VV, eV) {
      eV && (eV.prototype.copyAnimationRange = function(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new NV.c(this.name, "_matrix", VV.animations[0].framePerSecond, NV.c.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const UV = VV.animations[0].getRange(eV);
        if (!UV) return !1;
        const yV = UV.from,
          pV = UV.to,
          QV = VV.animations[0].getKeys(),
          nV = VV.length,
          wV = VV.getParent(),
          ZV = this.getParent(),
          vV = JV && wV && nV && this.length && nV !== this.length,
          rV = vV && ZV && wV ? ZV.length / wV.length : 1,
          kV = JV && !ZV && YV && (1 !== YV.x || 1 !== YV.y || 1 !== YV.z),
          bV = this.animations[0].getKeys();
        let EV, BV, jV;
        for (let qV = 0, tV = QV.length; qV < tV; qV++) EV = QV[qV], EV.frame >= yV && EV.frame <= pV && (JV ? (jV = EV.value.clone(), vV ? (BV = jV.getTranslation(), jV.setTranslation(BV.scaleInPlace(rV))) : kV && YV ? (BV = jV.getTranslation(), jV.setTranslation(BV.multiplyInPlace(YV))) : jV = EV.value) : jV = EV.value, bV.push({
          frame: EV.frame + xV,
          value: jV
        }));
        return this.animations[0].createRange(eV, yV + xV, pV + xV), !0
      }), VV && (VV.prototype._animate = function(VV) {
        const eV = this._animationWrites,
          xV = this._animationWriteCount;
        let JV = 0;
        for (let UV = this._animationStepWriteCount; UV < xV; UV++) {
          const VV = eV[UV];
          VV.zE && -1 === VV.weight || (VV.zE = !0, eV[UV] = eV[JV], eV[JV] = VV, JV++)
        }
        for (let UV = JV; UV < xV; UV++) {
          const VV = eV[UV];
          VV.runtimeAnimation = null, VV.target = null
        }
        if (this._animationWriteCount = JV, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const YV = MV.b.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = YV
        }
        this.deltaTime = void 0 !== VV ? VV : this.useConstantAnimationDeltaTime ? 16 : (YV - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = YV;
        const yV = this._activeAnimatables;
        if (0 === yV.length) return;
        this._animationTime += this.deltaTime;
        const pV = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let UV = 0; UV < yV.length; UV++) {
          const VV = yV[UV];
          !VV._animate(pV) && VV.disposeOnEnd && UV--
        }! function(VV) {
          if (VV._registeredForLateAnimationBindings.length) {
            for (let eV = 0; eV < VV._registeredForLateAnimationBindings.length; eV++) {
              const xV = VV._registeredForLateAnimationBindings.data[eV];
              for (const VV in xV._lateAnimationHolders) {
                const eV = xV._lateAnimationHolders[VV],
                  JV = eV.animations[0],
                  YV = eV.originalValue;
                if (void 0 === YV || null === YV) continue;
                const yV = NV.c.AllowMatrixDecomposeForInterpolation && YV.m;
                let pV = xV[VV];
                if (yV) pV = GV(eV);
                else if (void 0 !== YV.w) pV = WV(eV, pV || UV.h.Identity());
                else {
                  let VV = 0,
                    xV = 1;
                  const UV = JV && JV._animationState.AY === NV.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (eV.totalWeight < 1) pV = UV ? YV.clone ? YV.clone() : YV : JV && YV.scale ? YV.scale(1 - eV.totalWeight) : JV ? YV * (1 - eV.totalWeight) : YV.clone ? YV.clone() : YV;
                  else if (JV) {
                    xV = eV.totalWeight;
                    const yV = JV.weight / xV;
                    pV = 1 !== yV ? JV.currentValue.scale ? JV.currentValue.scale(yV) : JV.currentValue * yV : (eV.animations.length > 1 || eV.additiveAnimations.length > 0) && JV.currentValue.clone ? JV.currentValue.clone() : JV.currentValue, UV && (pV.addToRef ? pV.addToRef(YV, pV) : pV += YV), VV = 1
                  }
                  for (let JV = VV; JV < eV.animations.length; JV++) {
                    const VV = eV.animations[JV],
                      YV = VV.weight / xV;
                    YV && (VV.currentValue.scaleAndAddToRef ? VV.currentValue.scaleAndAddToRef(YV, pV) : pV += VV.currentValue * YV)
                  }
                  for (let JV = 0; JV < eV.additiveAnimations.length; JV++) {
                    const VV = eV.additiveAnimations[JV],
                      xV = VV.weight;
                    xV && (VV.currentValue.scaleAndAddToRef ? VV.currentValue.scaleAndAddToRef(xV, pV) : pV += VV.currentValue * xV)
                  }
                }
                xV[VV] = pV
              }
              xV._lateAnimationHolders = {}
            }
            VV._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, VV.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((VV, eV) => VV.playOrder - eV.playOrder))
      }, VV.prototype.beginWeightedAnimation = function(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          YV = arguments.length > 4 ? arguments[4] : void 0,
          UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          yV = arguments.length > 6 ? arguments[6] : void 0,
          pV = arguments.length > 7 ? arguments[7] : void 0,
          QV = arguments.length > 8 ? arguments[8] : void 0,
          nV = arguments.length > 9 ? arguments[9] : void 0,
          wV = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const ZV = this.beginAnimation(VV, eV, xV, YV, UV, yV, pV, !1, QV, nV, wV);
        return ZV.weight = JV, ZV
      }, VV.prototype.beginAnimation = function(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          UV = arguments.length > 5 ? arguments[5] : void 0,
          yV = arguments.length > 6 ? arguments[6] : void 0,
          pV = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          QV = arguments.length > 8 ? arguments[8] : void 0,
          nV = arguments.length > 9 ? arguments[9] : void 0,
          wV = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (YV < 0) {
          const VV = eV;
          eV = xV, xV = VV, YV = -YV
        }
        eV > xV && (YV = -YV), pV && this.stopAnimation(VV, void 0, QV), yV || (yV = new zV(this, VV, eV, xV, JV, YV, UV, void 0, nV, wV));
        const ZV = !QV || QV(VV);
        if (VV.animations && ZV && yV.appendAnimations(VV, VV.animations), VV.getAnimatables) {
          const wV = VV.getAnimatables();
          for (let VV = 0; VV < wV.length; VV++) this.beginAnimation(wV[VV], eV, xV, JV, YV, UV, yV, pV, QV, nV)
        }
        return yV.reset(), yV
      }, VV.prototype.beginHierarchyAnimation = function(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          yV = arguments.length > 6 ? arguments[6] : void 0,
          pV = arguments.length > 7 ? arguments[7] : void 0,
          QV = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          nV = arguments.length > 9 ? arguments[9] : void 0,
          wV = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const ZV = VV.getDescendants(eV),
          vV = [];
        vV.push(this.beginAnimation(VV, xV, JV, YV, UV, yV, pV, QV, nV, void 0, wV));
        for (const rV of ZV) vV.push(this.beginAnimation(rV, xV, JV, YV, UV, yV, pV, QV, nV, void 0, wV));
        return vV
      }, VV.prototype.beginDirectAnimation = function(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (UV < 0) {
          const VV = xV;
          xV = JV, JV = VV, UV = -UV
        }
        xV > JV && (UV = -UV);
        return new zV(this, VV, xV, JV, YV, UV, arguments.length > 6 ? arguments[6] : void 0, eV, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, VV.prototype.beginDirectHierarchyAnimation = function(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        let nV = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const wV = VV.getDescendants(eV),
          ZV = [];
        ZV.push(this.beginDirectAnimation(VV, xV, JV, YV, UV, yV, pV, QV, nV));
        for (const vV of wV) ZV.push(this.beginDirectAnimation(vV, xV, JV, YV, UV, yV, pV, QV, nV));
        return ZV
      }, VV.prototype.getAnimatableByTarget = function(VV) {
        for (let eV = 0; eV < this._activeAnimatables.length; eV++)
          if (this._activeAnimatables[eV].target === VV) return this._activeAnimatables[eV];
        return null
      }, VV.prototype.getAllAnimatablesByTarget = function(VV) {
        const eV = [];
        for (let xV = 0; xV < this._activeAnimatables.length; xV++) this._activeAnimatables[xV].target === VV && eV.push(this._activeAnimatables[xV]);
        return eV
      }, VV.prototype.stopAnimation = function(VV, eV, xV) {
        const JV = this.getAllAnimatablesByTarget(VV);
        for (const YV of JV) YV.stop(eV, xV)
      }, VV.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let VV = 0; VV < this._activeAnimatables.length; VV++) this._activeAnimatables[VV].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const VV of this.animationGroups) VV.stop()
      })
    }
    zV.ProcessPausedAnimatables = !1;
    var gV, DV = xV(38278),
      iV = xV(41486),
      CV = xV(41138);
    class aV extends iV.e {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(VV) {
        (VV.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.iG(VV), this._markAsDirtyAndDecompose())
      }
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          yV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          pV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(VV, eV.dD(), !1), this.name = VV, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = eV, this._localMatrix = JV?.clone() ?? UV.d.Identity(), this._restMatrix = YV ?? this._localMatrix.clone(), this._bindMatrix = yV ?? this._localMatrix.clone(), this._index = pV, this._absoluteMatrix = new UV.d, this._absoluteBindMatrix = new UV.d, this._absoluteInverseBindMatrix = new UV.d, this._finalMatrix = new UV.d, eV.bones.push(this), this.setParent(xV, !1), this._updateAbsoluteBindMatrices()
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
      set parent(VV) {
        this.setParent(VV)
      }
      setParent(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== VV) {
          if (this.parent) {
            const VV = this.parent.children.indexOf(this); - 1 !== VV && this.parent.children.splice(VV, 1)
          }
          this._parentNode = VV, this.parent && this.parent.children.push(this), eV && this._updateAbsoluteBindMatrices(), this.nJV()
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
      setRestMatrix(VV) {
        this._restMatrix.iG(VV)
      }
      setRestPose(VV) {
        this.setRestMatrix(VV)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(VV) {
        this.peV(VV)
      }
      setBindPose(VV) {
        this.setBindMatrix(VV)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const VV = UV.l.Ik[0],
            eV = UV.l.Quaternion[0],
            xV = UV.l.Ik[1];
          this.getRestMatrix().decompose(VV, eV, xV), this._linkedTransformNode.position.iG(xV), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? UV.h.Identity(), this._linkedTransformNode.rotationQuaternion.iG(eV), this._linkedTransformNode.WZ.iG(VV)
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
      linkTransformNode(VV) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = VV, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.AxV
      }
      set position(VV) {
        this._decompose(), this.AxV.iG(VV), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(VV) {
        this.setRotation(VV)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(VV) {
        this.setRotationQuaternion(VV)
      }
      get WZ() {
        return this.getScale()
      }
      set WZ(VV) {
        this.setScale(VV)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = UV.o.Zero(), this._localRotation = UV.h.Zero(), this.AxV = UV.o.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.AxV))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, UV.d.ComposeToRef(this._localScaling, this._localRotation, this.AxV, this._localMatrix)) : this._needToCompose = !1)
      }
      peV(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.iG(VV), eV && this._updateAbsoluteBindMatrices(), xV ? this._matrix = VV : this.nJV()
      }
      _updateAbsoluteBindMatrices(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (VV || (VV = this._bindMatrix), this.parent ? VV.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.iG(VV), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), eV)
          for (let xV = 0; xV < this.children.length; xV++) this.children[xV]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      nJV() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.nJV(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.nJV(), this._needToDecompose = !0
      }
      _updatePosition(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const YV = this.getLocalMatrix();
        if (0 == eV) JV ? (YV.addAtIndex(12, VV.x), YV.addAtIndex(13, VV.y), YV.addAtIndex(14, VV.z)) : YV.setTranslationFromFloats(VV.x, VV.y, VV.z);
        else {
          const eV = aV._TmpMats[0],
            yV = aV._TmpVecs[0];
          this.parent ? (eV.iG(this.parent.getAbsoluteMatrix()), xV && eV.multiplyToRef(xV.getWorldMatrix(), eV)) : UV.d.IdentityToRef(eV), JV && eV.setTranslationFromFloats(0, 0, 0), eV.invert(), UV.o.TransformCoordinatesToRef(VV, eV, yV), JV ? (YV.addAtIndex(12, yV.x), YV.addAtIndex(13, yV.y), YV.addAtIndex(14, yV.z)) : YV.setTranslationFromFloats(yV.x, yV.y, yV.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(VV, eV, xV, !0)
      }
      setPosition(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(VV, eV, xV, !1)
      }
      setAbsolutePosition(VV, eV) {
        this.setPosition(VV, 1, eV)
      }
      scale(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const YV = this.getLocalMatrix(),
          yV = aV._TmpMats[0];
        UV.d.ScalingToRef(VV, eV, xV, yV), yV.multiplyToRef(YV, YV), yV.invert();
        for (const UV of this.children) {
          const JV = UV.getLocalMatrix();
          JV.multiplyToRef(yV, JV), JV.multiplyAtIndex(12, VV), JV.multiplyAtIndex(13, eV), JV.multiplyAtIndex(14, xV), UV._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), JV)
          for (const UV of this.children) UV.scale(VV, eV, xV, JV)
      }
      setScale(VV) {
        this._decompose(), this._localScaling.iG(VV), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(VV) {
        this._decompose(), VV.iG(this._localScaling)
      }
      setYawPitchRoll(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          YV = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === JV) {
          const yV = aV._TmpQuat;
          return UV.h.RotationYawPitchRollToRef(VV, eV, xV, yV), void this.setRotationQuaternion(yV, JV, YV)
        }
        const yV = aV._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(yV, YV)) return;
        const pV = aV._TmpMats[1];
        UV.d.RotationYawPitchRollToRef(VV, eV, xV, pV), yV.multiplyToRef(pV, pV), this._rotateWithMatrix(pV, JV, YV)
      }
      rotate(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 ? arguments[3] : void 0;
        const YV = aV._TmpMats[0];
        YV.setTranslationFromFloats(0, 0, 0), UV.d.RotationAxisToRef(VV, eV, YV), this._rotateWithMatrix(YV, xV, JV)
      }
      setAxisAngle(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === xV) {
          const YV = aV._TmpQuat;
          return UV.h.RotationAxisToRef(VV, eV, YV), void this.setRotationQuaternion(YV, xV, JV)
        }
        const YV = aV._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(YV, JV)) return;
        const yV = aV._TmpMats[1];
        UV.d.RotationAxisToRef(VV, eV, yV), YV.multiplyToRef(yV, yV), this._rotateWithMatrix(yV, xV, JV)
      }
      setRotation(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(VV.y, VV.x, VV.z, eV, xV)
      }
      setRotationQuaternion(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === eV) return this._decompose(), this._localRotation.iG(VV), void this._markAsDirtyAndCompose();
        const JV = aV._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(JV, xV)) return;
        const YV = aV._TmpMats[1];
        UV.d.FromQuaternionToRef(VV, YV), JV.multiplyToRef(YV, YV), this._rotateWithMatrix(YV, eV, xV)
      }
      setRotationMatrix(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === eV) {
          const JV = aV._TmpQuat;
          return UV.h.FromRotationMatrixToRef(VV, JV), void this.setRotationQuaternion(JV, eV, xV)
        }
        const JV = aV._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(JV, xV)) return;
        const YV = aV._TmpMats[1];
        YV.iG(VV), JV.multiplyToRef(VV, YV), this._rotateWithMatrix(YV, eV, xV)
      }
      _rotateWithMatrix(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const JV = this.getLocalMatrix(),
          YV = JV.m[12],
          UV = JV.m[13],
          yV = JV.m[14],
          pV = this.getParent(),
          QV = aV._TmpMats[3],
          nV = aV._TmpMats[4];
        pV && 1 == eV ? (xV ? (QV.iG(xV.getWorldMatrix()), pV.getAbsoluteMatrix().multiplyToRef(QV, QV)) : QV.iG(pV.getAbsoluteMatrix()), nV.iG(QV), nV.invert(), JV.multiplyToRef(QV, JV), JV.multiplyToRef(VV, JV), JV.multiplyToRef(nV, JV)) : 1 == eV && xV ? (QV.iG(xV.getWorldMatrix()), nV.iG(QV), nV.invert(), JV.multiplyToRef(QV, JV), JV.multiplyToRef(VV, JV), JV.multiplyToRef(nV, JV)) : JV.multiplyToRef(VV, JV), JV.setTranslationFromFloats(YV, UV, yV), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(VV, eV) {
        const xV = aV._TmpMats[2];
        return VV.iG(this.getAbsoluteMatrix()), eV ? (VV.multiplyToRef(eV.getWorldMatrix(), VV), UV.d.ScalingToRef(eV.WZ.x, eV.WZ.y, eV.WZ.z, xV)) : UV.d.IdentityToRef(xV), VV.invert(), !isNaN(VV.m[0]) && (xV.multiplyAtIndex(0, this._scalingDeterminant), VV.multiplyToRef(xV, VV), !0)
      }
      YF() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const xV = UV.o.Zero();
        return this.getPositionToRef(VV, eV, xV), xV
      }
      getPositionToRef() {
        let VV = arguments.length > 1 ? arguments[1] : void 0,
          eV = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const VV = this.getLocalMatrix();
          eV.x = VV.m[12], eV.y = VV.m[13], eV.z = VV.m[14]
        } else {
          const xV = aV._TmpMats[0].iG(this.getAbsoluteMatrix());
          VV && xV.multiplyToRef(VV.getWorldMatrix(), xV), eV.x = xV.m[12], eV.y = xV.m[13], eV.z = xV.m[14]
        }
      }
      getAbsolutePosition() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const eV = UV.o.Zero();
        return this.getPositionToRef(1, VV, eV), eV
      }
      getAbsolutePositionToRef(VV, eV) {
        this.getPositionToRef(1, VV, eV)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.iG(this._localMatrix);
          const VV = this._skeleton.getPoseMatrix();
          VV && this._absoluteMatrix.multiplyToRef(VV, this._absoluteMatrix)
        }
        const VV = this.children,
          eV = VV.length;
        for (let xV = 0; xV < eV; xV++) VV[xV].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      L_(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const xV = UV.o.Zero();
        return this.getDirectionToRef(VV, eV, xV), xV
      }
      getDirectionToRef(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const JV = aV._TmpMats[0].iG(this.getAbsoluteMatrix());
        eV && JV.multiplyToRef(eV.getWorldMatrix(), JV), UV.o.TransformNormalToRef(VV, JV, xV), xV.normalize()
      }
      getRotation() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const xV = UV.o.Zero();
        return this.getRotationToRef(VV, eV, xV), xV
      }
      getRotationToRef() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const JV = aV._TmpQuat;
        this.getRotationQuaternionToRef(VV, eV, JV), JV.toEulerAnglesToRef(xV)
      }
      getRotationQuaternion() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const xV = UV.h.Identity();
        return this.getRotationQuaternionToRef(VV, eV, xV), xV
      }
      getRotationQuaternionToRef() {
        let VV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          eV = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), eV.iG(this._localRotation);
        else {
          const xV = aV._TmpMats[0],
            JV = this.getAbsoluteMatrix();
          VV ? JV.multiplyToRef(VV.getWorldMatrix(), xV) : xV.iG(JV), xV.multiplyAtIndex(0, this._scalingDeterminant), xV.multiplyAtIndex(1, this._scalingDeterminant), xV.multiplyAtIndex(2, this._scalingDeterminant), xV.decompose(void 0, eV, void 0)
        }
      }
      getRotationMatrix() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 ? arguments[1] : void 0;
        const xV = UV.d.Identity();
        return this.getRotationMatrixToRef(VV, eV, xV), xV
      }
      getRotationMatrixToRef() {
        let VV = arguments.length > 1 ? arguments[1] : void 0,
          eV = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(eV);
        else {
          const xV = aV._TmpMats[0],
            JV = this.getAbsoluteMatrix();
          VV ? JV.multiplyToRef(VV.getWorldMatrix(), xV) : xV.iG(JV), xV.multiplyAtIndex(0, this._scalingDeterminant), xV.multiplyAtIndex(1, this._scalingDeterminant), xV.multiplyAtIndex(2, this._scalingDeterminant), xV.getRotationMatrixToRef(eV)
        }
      }
      getAbsolutePositionFromLocal(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const xV = UV.o.Zero();
        return this.getAbsolutePositionFromLocalToRef(VV, eV, xV), xV
      }
      getAbsolutePositionFromLocalToRef(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const JV = aV._TmpMats[0].iG(this.getAbsoluteMatrix());
        eV && JV.multiplyToRef(eV.getWorldMatrix(), JV), UV.o.TransformCoordinatesToRef(VV, JV, xV)
      }
      getLocalPositionFromAbsolute(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const xV = UV.o.Zero();
        return this.getLocalPositionFromAbsoluteToRef(VV, eV, xV), xV
      }
      getLocalPositionFromAbsoluteToRef(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const JV = aV._TmpMats[0].iG(this.getAbsoluteMatrix());
        eV && JV.multiplyToRef(eV.getWorldMatrix(), JV), JV.invert(), UV.o.TransformCoordinatesToRef(VV, JV, xV)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const VV = this._skeleton.bones.indexOf(this);
        if (-1 !== VV && this._skeleton.bones.splice(VV, 1), this._parentNode && this._parentNode.children) {
          const VV = this._parentNode.children,
            eV = VV.indexOf(this); - 1 !== eV && VV.splice(eV, 1)
        }
        super.dispose()
      }
    }
    aV._TmpVecs = (0, DV.e)(2, UV.o.Zero), aV._TmpQuat = UV.h.Identity(), aV._TmpMats = (0, DV.e)(5, UV.d.Identity), (gV = aV.prototype).copyAnimationRange ?? (gV.copyAnimationRange = (0, CV.j)("Bone", "copyAnimationRange"));
    var oV = xV(41337);
    let cV = !1;
    var hV = xV(41225),
      lV = xV(41577),
      LV = xV(41591),
      fV = xV(41583),
      mV = xV(41378);

    function KV(VV, eV) {
      const xV = (0, rV.RandomRange)(0, 1);
      wV.h.LerpToRef(eV.color1, eV.color2, xV, VV.color)
    }

    function HV(VV, eV) {
      eV.colorDead.subtractToRef(VV.color, eV._colorDiff), eV._colorDiff.scaleToRef(1 / VV.lifeTime, VV.colorStep)
    }

    function uV(VV, eV) {
      VV._properties.currentColorGradient = eV._colorGradients[0], VV._properties.currentColorGradient.getColorToRef(VV.color), VV._properties.currentColor1.iG(VV.color), eV._colorGradients.length > 1 ? eV._colorGradients[1].getColorToRef(VV._properties.currentColor2) : VV._properties.currentColor2.iG(VV.color)
    }

    function sV(VV, eV) {
      const xV = eV._colorGradients;
      JV.i.GetCurrentGradient(eV._ratio, xV, ((eV, xV, JV) => {
        eV !== VV._properties.currentColorGradient && (VV._properties.currentColor1.iG(VV._properties.currentColor2), xV.getColorToRef(VV._properties.currentColor2), VV._properties.currentColorGradient = eV), wV.h.LerpToRef(VV._properties.currentColor1, VV._properties.currentColor2, JV, VV.color), VV.color.a < 0 && (VV.color.a = 0)
      }))
    }

    function SV(VV, eV) {
      VV.colorStep.scaleToRef(eV._scaledUpdateSpeed, eV._scaledColorStep), VV.color.addInPlace(eV._scaledColorStep), VV.color.a < 0 && (VV.color.a = 0)
    }

    function IV(VV, eV) {
      JV.i.GetCurrentGradient(eV._ratio, eV._angularSpeedGradients, ((eV, xV, JV) => {
        eV !== VV._properties.currentAngularSpeedGradient && (VV._properties.currentAngularSpeed1 = VV._properties.currentAngularSpeed2, VV._properties.currentAngularSpeed2 = xV.getFactor(), VV._properties.currentAngularSpeedGradient = eV), VV.angularSpeed = (0, rV.Lerp)(VV._properties.currentAngularSpeed1, VV._properties.currentAngularSpeed2, JV)
      }))
    }

    function dV(VV, eV) {
      VV.angle += VV.angularSpeed * eV._scaledUpdateSpeed
    }

    function OV(VV, eV) {
      eV.particleEmitterType.startDirectionFunction(eV._emitterWorldMatrix, VV.direction, VV, eV.isLocal, eV._emitterInverseWorldMatrix)
    }

    function Ve(VV, eV) {
      eV.startDirectionFunction(eV._emitterWorldMatrix, VV.direction, VV, eV.isLocal)
    }

    function ee(VV, eV) {
      VV._properties.currentVelocityGradient = eV._velocityGradients[0], VV._properties.currentVelocity1 = VV._properties.currentVelocityGradient.getFactor(), eV._velocityGradients.length > 1 ? VV._properties.currentVelocity2 = eV._velocityGradients[1].getFactor() : VV._properties.currentVelocity2 = VV._properties.currentVelocity1
    }

    function xe(VV, eV) {
      VV._properties.currentLimitVelocityGradient = eV._limitVelocityGradients[0], VV._properties.currentLimitVelocity1 = VV._properties.currentLimitVelocityGradient.getFactor(), eV._limitVelocityGradients.length > 1 ? VV._properties.currentLimitVelocity2 = eV._limitVelocityGradients[1].getFactor() : VV._properties.currentLimitVelocity2 = VV._properties.currentLimitVelocity1
    }

    function Je(VV, eV) {
      JV.i.GetCurrentGradient(eV._ratio, eV._velocityGradients, ((eV, xV, JV) => {
        eV !== VV._properties.currentVelocityGradient && (VV._properties.currentVelocity1 = VV._properties.currentVelocity2, VV._properties.currentVelocity2 = xV.getFactor(), VV._properties.currentVelocityGradient = eV), VV._properties.directionScale *= (0, rV.Lerp)(VV._properties.currentVelocity1, VV._properties.currentVelocity2, JV)
      }))
    }

    function Ye(VV, eV) {
      JV.i.GetCurrentGradient(eV._ratio, eV._limitVelocityGradients, ((xV, JV, YV) => {
        xV !== VV._properties.currentLimitVelocityGradient && (VV._properties.currentLimitVelocity1 = VV._properties.currentLimitVelocity2, VV._properties.currentLimitVelocity2 = JV.getFactor(), VV._properties.currentLimitVelocityGradient = xV);
        const UV = (0, rV.Lerp)(VV._properties.currentLimitVelocity1, VV._properties.currentLimitVelocity2, YV);
        VV.direction.length() > UV && VV.direction.scaleInPlace(eV.limitVelocityDamping)
      }))
    }

    function Ue(VV) {
      VV.direction.scaleToRef(VV._properties.directionScale, VV._properties.scaledDirection)
    }

    function ye(VV, eV) {
      eV.particleEmitterType.startPositionFunction(eV._emitterWorldMatrix, VV.position, VV, eV.isLocal)
    }

    function pe(VV, eV) {
      eV.startPositionFunction(eV._emitterWorldMatrix, VV.position, VV, eV.isLocal)
    }

    function Qe(VV, eV) {
      VV._properties.localPosition ? VV._properties.localPosition.iG(VV.position) : VV._properties.localPosition = VV.position.clone(), UV.o.TransformCoordinatesToRef(VV._properties.localPosition, eV._emitterWorldMatrix, VV.position)
    }

    function ne(VV, eV) {
      eV.isLocal && VV._properties.localPosition ? (VV._properties.localPosition.addInPlace(VV._properties.scaledDirection), UV.o.TransformCoordinatesToRef(VV._properties.localPosition, eV._emitterWorldMatrix, VV.position)) : VV.position.addInPlace(VV._properties.scaledDirection)
    }

    function we(VV, eV) {
      VV._properties.currentDragGradient = eV._dragGradients[0], VV._properties.currentDrag1 = VV._properties.currentDragGradient.getFactor(), eV._dragGradients.length > 1 ? VV._properties.currentDrag2 = eV._dragGradients[1].getFactor() : VV._properties.currentDrag2 = VV._properties.currentDrag1
    }

    function Ze(VV, eV) {
      JV.i.GetCurrentGradient(eV._ratio, eV._dragGradients, ((eV, xV, JV) => {
        eV !== VV._properties.currentDragGradient && (VV._properties.currentDrag1 = VV._properties.currentDrag2, VV._properties.currentDrag2 = xV.getFactor(), VV._properties.currentDragGradient = eV);
        const YV = (0, rV.Lerp)(VV._properties.currentDrag1, VV._properties.currentDrag2, JV);
        VV._properties.scaledDirection.scaleInPlace(1 - YV)
      }))
    }

    function ve(VV, eV) {
      VV._properties.randomNoiseCoordinates1 && VV._properties.randomNoiseCoordinates2 ? (VV._properties.randomNoiseCoordinates1.FeV(Math.random(), Math.random(), Math.random()), VV._properties.randomNoiseCoordinates2.FeV(Math.random(), Math.random(), Math.random())) : (VV._properties.randomNoiseCoordinates1 = new UV.o(Math.random(), Math.random(), Math.random()), VV._properties.randomNoiseCoordinates2 = new UV.o(Math.random(), Math.random(), Math.random()))
    }

    function re(VV, eV) {
      const xV = eV._noiseTextureData,
        JV = eV._noiseTextureSize;
      if (xV && JV && VV._properties.randomNoiseCoordinates1 && VV._properties.randomNoiseCoordinates2) {
        const YV = eV._fetchR(VV._properties.randomNoiseCoordinates1.x, VV._properties.randomNoiseCoordinates1.y, JV.width, JV.height, xV),
          yV = eV._fetchR(VV._properties.randomNoiseCoordinates1.z, VV._properties.randomNoiseCoordinates2.x, JV.width, JV.height, xV),
          pV = eV._fetchR(VV._properties.randomNoiseCoordinates2.y, VV._properties.randomNoiseCoordinates2.z, JV.width, JV.height, xV),
          QV = UV.l.Ik[0],
          nV = UV.l.Ik[1];
        QV.FeV((2 * YV - 1) * eV.noiseStrength.x, (2 * yV - 1) * eV.noiseStrength.y, (2 * pV - 1) * eV.noiseStrength.z), QV.scaleToRef(eV._tempScaledUpdateSpeed, nV), VV.direction.addInPlace(nV)
      }
    }

    function ke(VV, eV) {
      eV.gravity.scaleToRef(eV._tempScaledUpdateSpeed, eV._scaledGravity), VV.direction.addInPlace(eV._scaledGravity)
    }

    function be(VV, eV) {
      VV.size = (0, rV.RandomRange)(eV.minSize, eV.maxSize), VV.scale.FeV((0, rV.RandomRange)(eV.minScaleX, eV.maxScaleX), (0, rV.RandomRange)(eV.minScaleY, eV.maxScaleY))
    }

    function Ee(VV, eV) {
      VV._properties.currentSizeGradient = eV._sizeGradients[0], VV._properties.currentSize1 = VV._properties.currentSizeGradient.getFactor(), VV.size = VV._properties.currentSize1, eV._sizeGradients.length > 1 ? VV._properties.currentSize2 = eV._sizeGradients[1].getFactor() : VV._properties.currentSize2 = VV._properties.currentSize1, VV.scale.FeV((0, rV.RandomRange)(eV.minScaleX, eV.maxScaleX), (0, rV.RandomRange)(eV.minScaleY, eV.maxScaleY))
    }

    function Be(VV, eV) {
      const xV = eV._actualFrame / eV.targetStopDuration;
      JV.i.GetCurrentGradient(xV, eV._startSizeGradients, ((xV, JV, YV) => {
        xV !== eV._currentStartSizeGradient && (eV._currentStartSize1 = eV._currentStartSize2, eV._currentStartSize2 = JV.getFactor(), eV._currentStartSizeGradient = xV);
        const UV = (0, rV.Lerp)(eV._currentStartSize1, eV._currentStartSize2, YV);
        VV.scale.scaleInPlace(UV)
      }))
    }

    function je(VV, eV) {
      JV.i.GetCurrentGradient(eV._ratio, eV._sizeGradients, ((eV, xV, JV) => {
        eV !== VV._properties.currentSizeGradient && (VV._properties.currentSize1 = VV._properties.currentSize2, VV._properties.currentSize2 = xV.getFactor(), VV._properties.currentSizeGradient = eV), VV.size = (0, rV.Lerp)(VV._properties.currentSize1, VV._properties.currentSize2, JV)
      }))
    }

    function qe(VV, eV) {
      VV.remapData = new UV.q(0, 1, 0, 1)
    }

    function te(VV, eV) {
      eV._colorRemapGradients && eV._colorRemapGradients.length > 0 && JV.i.GetCurrentGradient(eV._ratio, eV._colorRemapGradients, ((eV, xV, JV) => {
        const YV = (0, rV.Lerp)(eV.factor1, xV.factor1, JV),
          UV = (0, rV.Lerp)(eV.factor2, xV.factor2, JV);
        VV.remapData.x = YV, VV.remapData.y = UV - YV
      })), eV._alphaRemapGradients && eV._alphaRemapGradients.length > 0 && JV.i.GetCurrentGradient(eV._ratio, eV._alphaRemapGradients, ((eV, xV, JV) => {
        const YV = (0, rV.Lerp)(eV.factor1, xV.factor1, JV),
          UV = (0, rV.Lerp)(eV.factor2, xV.factor2, JV);
        VV.remapData.z = YV, VV.remapData.w = UV - YV
      }))
    }

    function Fe(VV, eV) {
      const xV = (0, rV.Clamp)(eV._actualFrame / eV.targetStopDuration);
      JV.i.GetCurrentGradient(xV, eV._lifeTimeGradients, ((eV, JV) => {
        const YV = eV,
          UV = JV,
          yV = YV.getFactor(),
          pV = UV.getFactor(),
          QV = (xV - YV.gradient) / (UV.gradient - YV.gradient);
        VV.lifeTime = (0, rV.Lerp)(yV, pV, QV)
      })), eV._emitPower = (0, rV.RandomRange)(eV.minEmitPower, eV.maxEmitPower)
    }

    function Te(VV, eV) {
      VV.lifeTime = (0, rV.RandomRange)(eV.minLifeTime, eV.maxLifeTime), eV._emitPower = (0, rV.RandomRange)(eV.minEmitPower, eV.maxEmitPower)
    }

    function Pe(VV, eV) {
      0 === eV._emitPower ? (VV._properties.initialDirection ? VV._properties.initialDirection.iG(VV.direction) : VV._properties.initialDirection = VV.direction.clone(), VV.direction.set(0, 0, 0)) : (VV._properties.initialDirection = null, VV.direction.scaleInPlace(eV._emitPower)), VV.direction.addInPlace(eV._inheritedVelocityOffset)
    }

    function Ae(VV, eV) {
      VV.angularSpeed = (0, rV.RandomRange)(eV.minAngularSpeed, eV.maxAngularSpeed), VV.angle = (0, rV.RandomRange)(eV.minInitialRotation, eV.maxInitialRotation)
    }

    function Ne(VV, eV) {
      VV._properties.currentAngularSpeedGradient = eV._angularSpeedGradients[0], VV.angularSpeed = VV._properties.currentAngularSpeedGradient.getFactor(), VV._properties.currentAngularSpeed1 = VV.angularSpeed, eV._angularSpeedGradients.length > 1 ? VV._properties.currentAngularSpeed2 = eV._angularSpeedGradients[1].getFactor() : VV._properties.currentAngularSpeed2 = VV._properties.currentAngularSpeed1, VV.angle = (0, rV.RandomRange)(eV.minInitialRotation, eV.maxInitialRotation)
    }

    function Xe(VV, eV) {
      VV._properties.initialStartSpriteCellId = eV.startSpriteCellID, VV._properties.initialEndSpriteCellId = eV.endSpriteCellID, VV._properties.initialSpriteCellLoop = eV.spriteCellLoop
    }

    function Me(VV, eV) {
      VV.previousItem = eV.previousItem, VV.nextItem = eV, eV.previousItem && (eV.previousItem.nextItem = VV), eV.previousItem = VV
    }

    function ze(VV, eV) {
      VV.previousItem = eV, VV.nextItem = eV.nextItem, eV.nextItem && (eV.nextItem.previousItem = VV), eV.nextItem = VV
    }

    function Ge(VV) {
      VV.previousItem && (VV.previousItem.nextItem = VV.nextItem), VV.nextItem && (VV.nextItem.previousItem = VV.previousItem)
    }
    var We = xV(41637);
    class Re extends TV {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(VV) {
        this._startDirectionFunction !== VV && (this._startDirectionFunction = VV, this._directionCreation.process = VV ? Ve : OV)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(VV) {
        this._startPositionFunction !== VV && (this._startPositionFunction = VV, this._positionCreation.process = VV ? pe : ye)
      }
      set onDispose(VV) {
        this._onDisposeObserver && this.eC.remove(this._onDisposeObserver), this._onDisposeObserver = this.eC.add(VV)
      }
      get iN() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(VV) {
        this._useRampGradients !== VV && (this._useRampGradients = VV, this._resetEffect(), VV ? (this._rampCreation = {
          process: qe,
          previousItem: null,
          nextItem: null
        }, ze(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: te,
          previousItem: null,
          nextItem: null
        }, ze(this._remapGradientProcessing, this._gravityProcessing))) : (Ge(this._rampCreation), Ge(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(VV) {
        this._isLocal !== VV && (this._isLocal = VV, VV ? (this._isLocalCreation = {
          process: Qe,
          previousItem: null,
          nextItem: null
        }, ze(this._isLocalCreation, this._positionCreation)) : Ge(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(VV) {
        this._animationSheetEnabled !== VV && (this._animationSheetEnabled = VV, VV ? (this._sheetCreation = {
          process: Xe,
          previousItem: null,
          nextItem: null
        }, ze(this._sheetCreation, this._colorDeadCreation)) : Ge(this._sheetCreation), this._reset())
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
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[VV]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[VV] ?? this._customWrappers[0]
      }
      setCustomEffect(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[eV] = new lV.d(this._engine), this._customWrappers[eV].effect = VV, this._customWrappers[eV].drawContext && (this._customWrappers[eV].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new YV.c), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(VV) {
        if (this.noiseTexture !== VV) {
          if (this._noiseTexture = VV, !VV) return Ge(this._noiseCreation), void Ge(this._noiseProcessing);
          this._noiseCreation = {
            process: ve,
            previousItem: null,
            nextItem: null
          }, ze(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: re,
            previousItem: null,
            nextItem: null
          }, ze(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          yV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          pV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          nV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        cV || (cV = !0, RV(oV.e, aV)), (0, hV.d)(), super(VV), this._emitterInverseWorldMatrix = UV.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new UV.o, this.eC = new YV.c, this.onStoppedObservable = new YV.c, this.onStartedObservable = new YV.c, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new wV.h(0, 0, 0, 0), this._colorDiff = new wV.h(0, 0, 0, 0), this._scaledGravity = UV.o.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = VV => {}, this.recycleParticle = VV => {
          const eV = this._particles.pop();
          eV !== VV && eV.copyTo(VV), eV.metadata = null, this._stockParticles.push(eV)
        }, this._createParticle = () => {
          let VV;
          return 0 !== this._stockParticles.length ? (VV = this._stockParticles.pop(), VV._reset()) : VV = new AV(this), this._prepareParticle(VV), VV
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = eV, this._epsilon = pV, xV && "Scene" !== xV.getClassName() ? (this._engine = xV, this.defaultProjectionMatrix = UV.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = xV || QV.d.LastCreatedScene, this._engine = this._scene.sk(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.lT.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: Te,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: ye,
          previousItem: null,
          nextItem: null
        }, ze(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: OV,
          previousItem: null,
          nextItem: null
        }, ze(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: Pe,
          previousItem: null,
          nextItem: null
        }, ze(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: be,
          previousItem: null,
          nextItem: null
        }, ze(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: Ae,
          previousItem: null,
          nextItem: null
        }, ze(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: KV,
          previousItem: null,
          nextItem: null
        }, ze(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: HV,
          previousItem: null,
          nextItem: null
        }, ze(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, nV || (this._colorProcessing = {
          process: SV,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: dV,
          previousItem: null,
          nextItem: null
        }, ze(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: Ue,
          previousItem: null,
          nextItem: null
        }, ze(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: ne,
          previousItem: null,
          nextItem: null
        }, ze(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: ke,
          previousItem: null,
          nextItem: null
        }, ze(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = yV, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new lV.d(this._engine)
        }, this._customWrappers[0].effect = JV, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new ZV.d, this.updateFunction = VV => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((VV => {
            this._noiseTextureData = VV
          })));
          const eV = VV === this._particles;
          for (let xV = 0; xV < VV.length; xV++) {
            const JV = VV[xV];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const YV = JV.age;
            if (JV.age += this._tempScaledUpdateSpeed, JV.age > JV.lifeTime) {
              const VV = JV.age - YV,
                eV = JV.lifeTime - YV;
              this._tempScaledUpdateSpeed = eV * this._tempScaledUpdateSpeed / VV, JV.age = JV.lifeTime
            }
            this._ratio = JV.age / JV.lifeTime, JV._properties.directionScale = this._tempScaledUpdateSpeed;
            let UV = this._updateQueueStart;
            for (; UV;) UV.process(JV, this), UV = UV.nextItem;
            if (this._isAnimationSheetEnabled && !nV && JV.updateCellIndex(), JV._inheritParticleInfoToSubEmitters(), JV.age >= JV.lifeTime) {
              if (this._emitFromParticle(JV), JV._properties.attachedSubEmitters) {
                for (const VV of JV._properties.attachedSubEmitters) VV.particleSystem.disposeOnStop = !0, VV.particleSystem.stop();
                JV._properties.attachedSubEmitters = null
              }
              this.recycleParticle(JV), eV && xV--
            } else;
          }
        }
      }
      serialize(VV) {
        throw new Error("Method not implemented.")
      }
      clone(VV, eV) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Fe : this._lifeTimeCreation.process = Te
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: Be,
          previousItem: null,
          nextItem: null
        }, ze(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Ge(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(VV) {
        this.targetStopDuration !== VV && (this._targetStopDuration = VV, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(VV, eV, xV) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, VV, eV, xV), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(VV) {
        return this._removeFactorGradient(this._lifeTimeGradients, VV), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(VV, eV, xV) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = Ee, this._sizeGradientProcessing = {
          process: je,
          previousItem: null,
          nextItem: null
        }, Me(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, VV, eV, xV), this
      }
      removeSizeGradient(VV) {
        return this._removeFactorGradient(this._sizeGradients, VV), 0 === this._sizeGradients?.length && (Ge(this._sizeGradientProcessing), this._sizeCreation.process = be), this
      }
      addColorRemapGradient(VV, eV, xV) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, VV, eV, xV), this
      }
      removeColorRemapGradient(VV) {
        return this._removeFactorGradient(this._colorRemapGradients, VV), this
      }
      addAlphaRemapGradient(VV, eV, xV) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, VV, eV, xV), this
      }
      removeAlphaRemapGradient(VV) {
        return this._removeFactorGradient(this._alphaRemapGradients, VV), this
      }
      addAngularSpeedGradient(VV, eV, xV) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = Ne, this._angularSpeedGradientProcessing = {
          process: IV,
          previousItem: null,
          nextItem: null
        }, Me(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, VV, eV, xV), this
      }
      removeAngularSpeedGradient(VV) {
        return this._removeFactorGradient(this._angularSpeedGradients, VV), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = Ae, Ge(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(VV, eV, xV) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: ee,
          previousItem: null,
          nextItem: null
        }, ze(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: Je,
          previousItem: null,
          nextItem: null
        }, Me(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, VV, eV, xV), this
      }
      removeVelocityGradient(VV) {
        return this._removeFactorGradient(this._velocityGradients, VV), 0 === this._velocityGradients?.length && (Ge(this._velocityCreation), Ge(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(VV, eV, xV) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: xe,
          previousItem: null,
          nextItem: null
        }, ze(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Ye,
          previousItem: null,
          nextItem: null
        }, ze(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, VV, eV, xV), this
      }
      removeLimitVelocityGradient(VV) {
        return this._removeFactorGradient(this._limitVelocityGradients, VV), 0 === this._limitVelocityGradients?.length && (Ge(this._limitVelocityCreation), Ge(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(VV, eV, xV) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: we,
          previousItem: null,
          nextItem: null
        }, Me(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Ze,
          previousItem: null,
          nextItem: null
        }, Me(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, VV, eV, xV), this
      }
      removeDragGradient(VV) {
        return this._removeFactorGradient(this._dragGradients, VV), 0 === this._dragGradients?.length && (Ge(this._dragCreation), Ge(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(VV, eV, xV) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, VV, eV, xV), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(VV) {
        return this._removeFactorGradient(this._startSizeGradients, VV), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const VV = new Uint8Array(4 * this._rawTextureWidth),
          eV = wV.k.Color3[0];
        for (let xV = 0; xV < this._rawTextureWidth; xV++) {
          const YV = xV / this._rawTextureWidth;
          JV.i.GetCurrentGradient(YV, this._rampGradients, ((JV, YV, UV) => {
            wV.d.LerpToRef(JV.color, YV.color, UV, eV), VV[4 * xV] = 255 * eV.r, VV[4 * xV + 1] = 255 * eV.g, VV[4 * xV + 2] = 255 * eV.b, VV[4 * xV + 3] = 255
          }))
        }
        this._rampGradientsTexture = pV.e.CreateRGBATexture(VV, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((VV, eV) => VV.gradient < eV.gradient ? -1 : VV.gradient > eV.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(VV, eV) {
        this._rampGradients || (this._rampGradients = []);
        const xV = new JV.d(VV, eV);
        return this._rampGradients.push(xV), this._syncRampGradientTexture(), this
      }
      removeRampGradient(VV) {
        return this._removeGradientAndTexture(VV, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(VV, eV, xV) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = uV, this._colorProcessing.process = sV);
        const YV = new JV.c(VV, eV, xV);
        return this._colorGradients.push(YV), this._colorGradients.sort(((VV, eV) => VV.gradient < eV.gradient ? -1 : VV.gradient > eV.gradient ? 1 : 0)), this
      }
      removeColorGradient(VV) {
        if (!this._colorGradients) return this;
        let eV = 0;
        for (const xV of this._colorGradients) {
          if (xV.gradient === VV) {
            this._colorGradients.splice(eV, 1);
            break
          }
          eV++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = KV, this._colorProcessing.process = SV), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const VV of this._drawWrappers)
            if (VV)
              for (const eV of VV) eV?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(VV, eV, xV, JV, YV) {
        return YV[4 * (((VV = .5 * Math.abs(VV) + .5) * xV % xV | 0) + ((eV = .5 * Math.abs(eV) + .5) * JV % JV | 0) * xV)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const VV = this._engine,
          eV = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * eV), this._vertexBuffer = new yV.d(VV, this._vertexData, !0, eV);
        let xV = 0;
        const JV = this._vertexBuffer.createVertexBuffer(yV.j.PositionKind, xV, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[yV.j.PositionKind] = JV, xV += 3;
        const YV = this._vertexBuffer.createVertexBuffer(yV.j.ColorKind, xV, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[yV.j.ColorKind] = YV, xV += 4;
        const UV = this._vertexBuffer.createVertexBuffer("angle", xV, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = UV, xV += 1;
        const pV = this._vertexBuffer.createVertexBuffer("size", xV, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = pV, xV += 2, this._isAnimationSheetEnabled) {
          const VV = this._vertexBuffer.createVertexBuffer("cellIndex", xV, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = VV, xV += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const VV = this._vertexBuffer.createVertexBuffer("direction", xV, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = VV, xV += 3
        }
        if (this._useRampGradients) {
          const VV = this._vertexBuffer.createVertexBuffer("remapData", xV, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = VV, xV += 4
        }
        let QV;
        if (this._useInstancing) {
          const eV = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new yV.d(VV, eV, !1, 2), QV = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else QV = this._vertexBuffer.createVertexBuffer("offset", xV, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = QV, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const VV = [],
          eV = [];
        let xV = 0;
        for (let JV = 0; JV < this._capacity; JV++) VV.push(xV), VV.push(xV + 1), VV.push(xV + 2), VV.push(xV), VV.push(xV + 2), VV.push(xV + 3), eV.push(xV, xV + 1, xV + 1, xV + 2, xV + 2, xV + 3, xV + 3, xV, xV, xV + 3), xV += 4;
        this._indexBuffer = this._engine.createIndexBuffer(VV), this._linesIndexBuffer = this._engine.createIndexBuffer(eV)
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
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (VV) return this.startDelay = VV, void setTimeout((() => {
          this.start(0)
        }), VV);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const VV = this.noiseTexture;
          if (VV && VV.onGeneratedObservable) VV.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let eV = 0; eV < this.preWarmCycles; eV++) this.animate(!0), VV.render()
            }))
          }));
          else
            for (let eV = 0; eV < this.preWarmCycles; eV++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(VV))
      }
      _postStop(VV) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(VV, eV, xV, JV) {
        let YV = VV * this._vertexBufferSize;
        const yV = UV.l.Ik[0].iG(this._scene?.floatingOriginOffset || UV.o.ZeroReadOnly);
        if (this._vertexData[YV++] = eV.position.x + this.worldOffset.x - yV.x, this._vertexData[YV++] = eV.position.y + this.worldOffset.y - yV.y, this._vertexData[YV++] = eV.position.z + this.worldOffset.z - yV.z, this._vertexData[YV++] = eV.color.r, this._vertexData[YV++] = eV.color.g, this._vertexData[YV++] = eV.color.b, this._vertexData[YV++] = eV.color.a, this._vertexData[YV++] = eV.angle, this._vertexData[YV++] = eV.scale.x * eV.size, this._vertexData[YV++] = eV.scale.y * eV.size, this._isAnimationSheetEnabled && (this._vertexData[YV++] = eV.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[YV++] = eV.direction.x, this._vertexData[YV++] = eV.direction.y, this._vertexData[YV++] = eV.direction.z);
        else if (eV._properties.initialDirection) {
          let VV = eV._properties.initialDirection;
          this.isLocal && (UV.o.TransformNormalToRef(VV, this._emitterWorldMatrix, UV.l.Ik[0]), VV = UV.l.Ik[0]), 0 === VV.x && 0 === VV.z && (VV.x = .001), this._vertexData[YV++] = VV.x, this._vertexData[YV++] = VV.y, this._vertexData[YV++] = VV.z
        } else {
          let VV = eV.direction;
          this.isLocal && (UV.o.TransformNormalToRef(VV, this._emitterWorldMatrix, UV.l.Ik[0]), VV = UV.l.Ik[0]), 0 === VV.x && 0 === VV.z && (VV.x = .001), this._vertexData[YV++] = VV.x, this._vertexData[YV++] = VV.y, this._vertexData[YV++] = VV.z
        }
        this._useRampGradients && eV.remapData && (this._vertexData[YV++] = eV.remapData.x, this._vertexData[YV++] = eV.remapData.y, this._vertexData[YV++] = eV.remapData.z, this._vertexData[YV++] = eV.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === xV ? xV = this._epsilon : 1 === xV && (xV = 1 - this._epsilon), 0 === JV ? JV = this._epsilon : 1 === JV && (JV = 1 - this._epsilon)), this._vertexData[YV++] = xV, this._vertexData[YV] = JV)
      }
      _prepareParticle(VV) {}
      _createNewOnes(VV) {
        let eV;
        for (let xV = 0; xV < VV && this._particles.length !== this._capacity; xV++) {
          eV = this._createParticle(), this._particles.push(eV);
          let VV = this._createQueueStart;
          for (; VV;) VV.process(eV, this), VV = VV.nextItem;
          eV._inheritParticleInfoToSubEmitters()
        }
      }
      _update(VV) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const VV = this.emitter;
          this._emitterWorldMatrix = VV.getWorldMatrix()
        } else {
          const VV = this.emitter;
          this._emitterWorldMatrix = UV.d.Translation(VV.x, VV.y, VV.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(VV)
      }
      static _GetAttributeNamesOrOptions() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = [yV.j.PositionKind, yV.j.ColorKind, "angle", "offset", "size"];
        return VV && JV.push("cellIndex"), eV || JV.push("direction"), xV && JV.push("remapData"), JV
      }
      static _GetEffectCreationOptions() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, LV.c)(JV), VV && JV.push("particlesInfos"), eV && JV.push("logarithmicDepthConstant"), xV && (JV.push("vFogInfos"), JV.push("vFogColor")), JV
      }
      fillDefines(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, LV.k)(this, this._scene, VV), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && VV.push("#define FOG")), this._isAnimationSheetEnabled && VV.push("#define ANIMATESHEET"), this.useLogarithmicDepth && VV.push("#define LOGARITHMICDEPTH"), eV === TV.BLENDMODE_MULTIPLY && VV.push("#define BLENDMULTIPLYMODE"), this.isLocal && VV.push("#define LOCAL"), this._useRampGradients && VV.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (VV.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            VV.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            VV.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && VV.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            VV.push("#define BILLBOARDMODE_ALL")
        }
        xV && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), VV.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(VV, eV, xV) {
        eV.push(...Re._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), VV.push(...Re._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), xV.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, mV.f)(VV, this._imageProcessingConfigurationDefines), (0, mV.d)(xV, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(VV) {
        var eV;
        const xV = this._getCustomDrawWrapper(VV);
        if (xV?.effect) return xV;
        const JV = [];
        this.fillDefines(JV, VV);
        const UV = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          yV = We.d._PrepareStringDefines(UV, JV),
          pV = yV ? We.d.GetConfiguration(UV) : void 0;
        let QV = this._drawWrappers[UV];
        QV || (QV = this._drawWrappers[UV] = [], 0 === UV || this._renderPassObserver || (this._renderPassObserver = ((eV = this._engine)._onReleaseRenderPassObservable ?? (eV._onReleaseRenderPassObservable = new YV.c)).add((VV => {
          const eV = this._drawWrappers[VV];
          if (eV) {
            for (const VV of eV) VV?.dispose();
            delete this._drawWrappers[VV]
          }
        }))));
        let nV = QV[VV];
        nV || (nV = new lV.d(this._engine), nV.drawContext && (nV.drawContext.useInstancing = this._useInstancing), QV[VV] = nV);
        const wV = JV.join("\n");
        if (nV.defines !== wV) {
          const VV = [],
            eV = [],
            xV = [];
          this.fillUniformsAttributesAndSamplerNames(eV, VV, xV), yV && (eV.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== pV?.defines.PREPASS_LOCAL_POSITION_INDEX && eV.push("inverseEmitterWM", "geometryWorldOffset")), nV.setEffect(this._engine.createEffect("particles", {
            attributes: VV,
            uniformsNames: eV,
            samplers: xV,
            defines: wV,
            shaderLanguage: this._shaderLanguage,
            multiTarget: yV,
            indexParameters: yV ? {
              buffersCount: pV?._mrtCount ?? 0
            } : void 0
          }, this._engine), wV)
        }
        return nV
      }
      _bindGeometryRendering(VV) {
        const eV = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          xV = We.d.GetConfiguration(eV);
        if (!xV?._defines) return;
        VV.setFloat("objectId", 0), VV.setInt("meshBlendTag", 0);
        const JV = this._scene?.activeCamera;
        if (VV.setFloat2("cameraInfo", JV?.minZ ?? 0, JV?.maxZ ?? 1), this.isLocal && void 0 !== xV.defines.PREPASS_LOCAL_POSITION_INDEX) {
          VV.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const eV = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || UV.o.ZeroReadOnly, UV.l.Ik[0]);
          VV.setVector3("geometryWorldOffset", eV)
        }
      }
      animate() {
        let VV, eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!eV && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (eV ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) VV = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const eV = this._calculateEmitRate();
            VV = eV * this._scaledUpdateSpeed | 0, this._newPartsExcess += eV * this._scaledUpdateSpeed - VV
          }
          if (this._newPartsExcess > 1 && (VV += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? VV = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(VV), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !eV) {
            let VV = 0;
            for (let eV = 0; eV < this._particles.length; eV++) {
              const xV = this._particles[eV];
              this._appendParticleVertices(VV, xV), VV += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const VV = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  eV = this._particles.length;
                eV < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, eV * VV, this._fixedCapacityHighWaterMark * VV), this._fixedCapacityHighWaterMark = eV, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const VV = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * VV), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let VV = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const eV = this._actualFrame / this.targetStopDuration;
          JV.i.GetCurrentGradient(eV, this._emitRateGradients, ((eV, xV, JV) => {
            eV !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = xV.getFactor(), this._currentEmitRateGradient = eV), VV = (0, rV.Lerp)(this._currentEmitRate1, this._currentEmitRate2, JV)
          }))
        }
        return VV
      }
      _appendParticleVertices(VV, eV) {
        this._appendParticleVertex(VV++, eV, 0, 0), this._useInstancing || (this._appendParticleVertex(VV++, eV, 1, 0), this._appendParticleVertex(VV++, eV, 1, 1), this._appendParticleVertex(VV, eV, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Re.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([xV.e(655).then((() => xV(64331))), xV.e(649).then((() => xV(64335)))])) : await Promise.all([xV.e(638).then((() => xV(64343))), Promise.all([xV.e(631), xV.e(664)]).then((() => xV(64349)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== TV.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(TV.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(TV.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(VV) {
        const eV = this._getWrapper(VV),
          xV = eV.effect,
          JV = this._engine;
        JV.enableEffect(eV);
        const YV = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        xV.setTexture("diffuseSampler", this.particleTexture), xV.setMatrix("view", YV);
        const yV = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (xV.setMatrix("projection", yV), this._isAnimationSheetEnabled && this.particleTexture) {
          const VV = this.particleTexture.getBaseSize();
          xV.setFloat3("particlesInfos", this.spriteCellWidth / VV.width, this.spriteCellHeight / VV.height, this.spriteCellWidth / VV.width)
        }
        if (xV.setVector2("translationPivot", this.translationPivot), xV.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const VV = this._scene.activeCamera;
          xV.setVector3("eyePosition", VV.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), xV.setTexture("rampSampler", this._rampGradientsTexture));
        const pV = xV.defines;
        this._scene && ((0, LV.g)(xV, this, this._scene), this.applyFog && (0, fV.g)(this._scene, void 0, xV)), pV.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (YV.invertToRef(UV.l.Matrix[0]), xV.setMatrix("invView", UV.l.Matrix[0])), xV._multiTarget && this._bindGeometryRendering(xV), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? JV.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, xV) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, xV)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? JV.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, xV) : JV.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, xV), this.useLogarithmicDepth && this._scene && (0, fV.r)(pV, xV, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(xV), this._setEngineBasedOnBlendMode(VV), xV._multiTarget && We.d._BindZeroAlphaDiscard(JV, xV);
        let QV = !1;
        try {
          We.d._BindAttachmentsForEffect(JV, xV) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(xV), this._useInstancing ? this._scene?.forceWireframe ? JV.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : JV.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? JV.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : JV.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), QV = !0)
        } finally {
          We.d._RestoreAttachments(JV)
        }
        return QV ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const VV = this._engine;
        let eV;
        return VV.setState && (VV.setState(!1), this.forceDepthWrite && VV.setDepthWrite(!0)), eV = this.blendMode === TV.BLENDMODE_MULTIPLYADD ? this._render(TV.BLENDMODE_MULTIPLY) + this._render(TV.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), eV
      }
      _onDispose() {}
      dispose() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), VV && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), VV && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(eV, xV), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const VV = this._scene.lT.indexOf(this);
          VV > -1 && this._scene.lT.splice(VV, 1), this._scene._activeParticleSystems.dispose()
        }
        this.eC.notifyObservers(this), this.eC.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Re.ForceGLSL = !1;
    var ge, De = xV(38318);
    ! function(VV) {
      VV[VV.ATTACHED = 0] = "ATTACHED", VV[VV.END = 1] = "END"
    }(ge || (ge = {}));
    class ie {
      constructor(VV) {
        if (this.particleSystem = VV, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !VV.emitter || !VV.emitter.dispose) {
          const eV = (0, De.c)("BABYLON.AbstractMesh");
          VV.emitter = new eV("SubemitterSystemEmitter", VV.dD()), VV._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let VV = this.particleSystem.emitter;
        if (VV) {
          if (VV instanceof UV.o) VV = VV.clone();
          else if (-1 !== VV.getClassName().indexOf("Mesh")) {
            VV = new((0, De.c)("BABYLON.Mesh"))("", VV.dD()), VV.isVisible = !1
          }
        } else VV = new UV.o;
        const eV = new ie(this.particleSystem.clone(this.particleSystem.name, VV));
        return eV.particleSystem.name += "Clone", eV.type = this.type, eV.inheritDirection = this.inheritDirection, eV.inheritedVelocityAmount = this.inheritedVelocityAmount, eV.particleSystem._disposeEmitterOnDispose = !0, eV.particleSystem.disposeOnStop = !0, eV
      }
      serialize() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = {};
        return eV.type = this.type, eV.inheritDirection = this.inheritDirection, eV.inheritedVelocityAmount = this.inheritedVelocityAmount, eV.particleSystem = this.particleSystem.serialize(VV), eV
      }
      static _ParseParticleSystem(VV, eV, xV) {
        throw (0, CV.n)("ParseParticle")
      }
      static Parse(VV, eV, xV) {
        const JV = VV.particleSystem,
          YV = new ie(ie._ParseParticleSystem(JV, eV, xV, !0));
        return YV.type = VV.type, YV.inheritDirection = VV.inheritDirection, YV.inheritedVelocityAmount = VV.inheritedVelocityAmount, YV.particleSystem._isSubEmitter = !0, YV
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Ce = xV(41150),
      ae = xV(41279);
    const oe = () => {};
    class ce {
      constructor() {
        this.particlePositionGenerator = oe, this.particleDestinationGenerator = oe, this.particleDirectionGenerator = oe
      }
      startDirectionFunction(VV, eV, xV, JV) {
        const YV = UV.l.Ik[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== oe) this.particleDirectionGenerator(-1, xV, YV);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== oe) {
          this.particleDestinationGenerator(-1, xV, YV);
          const VV = UV.l.Ik[1];
          YV.subtractToRef(xV.position, VV), VV.scaleToRef(1 / xV.lifeTime, YV)
        } else YV.set(0, 0, 0);
        JV ? eV.iG(YV) : UV.o.TransformNormalToRef(YV, VV, eV)
      }
      startPositionFunction(VV, eV, xV, JV) {
        const YV = UV.l.Ik[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== oe ? this.particlePositionGenerator(-1, xV, YV) : YV.set(0, 0, 0), JV ? eV.iG(YV) : UV.o.TransformCoordinatesToRef(YV, VV, eV)
      }
      clone() {
        const VV = new ce;
        return vV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {}
      buildUniformLayout(VV) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const VV = {};
        return VV.type = this.getClassName(), VV.particlePositionGenerator = this.particlePositionGenerator, VV.particleDestinationGenerator = this.particleDestinationGenerator, VV
      }
      parse(VV) {
        VV.particlePositionGenerator && (this.particlePositionGenerator = VV.particlePositionGenerator), VV.particleDestinationGenerator && (this.particleDestinationGenerator = VV.particleDestinationGenerator)
      }
    }
    const he = UV.o.Zero(),
      le = UV.o.Zero(),
      Le = UV.o.Zero();
    class fe {
      constructor() {
        this.strength = 0, this.position = UV.o.Zero()
      }
      _processParticle(VV, eV) {
        this.position.subtractToRef(VV.position, he);
        const xV = he.lengthSquared() + 1;
        he.normalize().scaleToRef(this.strength / xV, le), le.scaleToRef(eV._tempScaledUpdateSpeed, Le), VV.direction.addInPlace(Le)
      }
      serialize() {
        return {
          position: this.position.WYV(),
          strength: this.strength
        }
      }
    }
    const me = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class Ke extends Re {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = VV => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const eV = Math.floor(Math.random() * this._subEmitters.length);
          for (const xV of this._subEmitters[eV])
            if (1 === xV.type) {
              const eV = xV.clone();
              VV._inheritParticleInfoToSubEmitter(eV), eV.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(eV.particleSystem), eV.particleSystem.start()
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
      set flowMap(VV) {
        this._flowMap !== VV && (this._flowMap = VV, this._flowMapUpdate && (Ge(this._flowMapUpdate), this._flowMapUpdate = null), VV && (this._flowMapUpdate = {
          process: VV => {
            const eV = this.dD()?.getTransformMatrix();
            this._flowMap._processParticle(VV, this.flowMapStrength * this._tempScaledUpdateSpeed, eV)
          },
          previousItem: null,
          nextItem: null
        }, ze(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(VV) {
        super.addAttractor(VV), 1 === this._attractors.length && (this._attractorUpdate = {
          process: VV => {
            for (const eV of this._attractors) eV._processParticle(VV, this)
          },
          previousItem: null,
          nextItem: null
        }, ze(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(VV) {
        super.removeAttractor(VV), 0 === this._attractors.length && this._attractorUpdate && Ge(this._attractorUpdate)
      }
      start() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(VV)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const VV of this.subEmitters) VV instanceof Ke ? this._subEmitters.push([new ie(VV)]) : VV instanceof ie ? this._subEmitters.push([VV]) : VV instanceof Array && this._subEmitters.push(VV)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const VV of this.activeSubSystems) VV.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const VV = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== VV && this._rootParticleSystem.activeSubSystems.splice(VV, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(VV) {
        VV && this._stopSubEmitters()
      }
      _prepareParticle(VV) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const eV = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          VV._properties.attachedSubEmitters = [];
          for (const xV of eV)
            if (0 === xV.type) {
              const eV = xV.clone();
              VV._properties.attachedSubEmitters.push(eV), eV.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), VV && this.particles)
          for (const xV of this.particles)
            if (xV._properties.attachedSubEmitters)
              for (let VV = xV._properties.attachedSubEmitters.length - 1; VV >= 0; VV -= 1) xV._properties.attachedSubEmitters[VV].dispose();
        if (eV && this.activeSubSystems)
          for (let xV = this.activeSubSystems.length - 1; xV >= 0; xV -= 1) this.activeSubSystems[xV].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let VV = 0; VV < this._subEmitters.length; VV++)
            for (const eV of this._subEmitters[VV]) eV.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(VV, eV, xV, JV) {
        let YV;
        YV = xV instanceof Ce.d ? null : xV;
        const yV = (0, De.c)("BABYLON.Texture");
        if (yV && YV)
          if (VV.texture) eV.particleTexture = yV.Parse(VV.texture, YV, JV);
          else if (VV.textureName) {
          const xV = VV.textureSettings;
          if (eV.particleTexture = new yV(JV + VV.textureName, YV, !1, void 0 === VV.invertY || VV.invertY, xV ? xV.samplingMode : void 0), eV.particleTexture.name = VV.textureName, xV) {
            const VV = eV.particleTexture;
            for (const eV of me) void 0 !== xV[eV] && (VV[eV] = xV[eV])
          }
        }
        if (VV.emitterId || 0 === VV.emitterId || void 0 !== VV.emitter ? (VV.emitterId || 0 === VV.emitterId) && YV ? (eV.emitter = YV.getLastMeshById(VV.emitterId), eV.emitter || (eV.emitter = UV.o.Zero())) : eV.emitter = UV.o.FromArray(VV.emitter) : eV.emitter = UV.o.Zero(), eV.isLocal = !!VV.isLocal, void 0 !== VV.renderingGroupId && (eV.renderingGroupId = VV.renderingGroupId), void 0 !== VV.isBillboardBased && (eV.isBillboardBased = VV.isBillboardBased), void 0 !== VV.billboardMode && (eV.billboardMode = VV.billboardMode), void 0 !== VV.useLogarithmicDepth && (eV.useLogarithmicDepth = VV.useLogarithmicDepth), VV.animations) {
          for (let xV = 0; xV < VV.animations.length; xV++) {
            const JV = VV.animations[xV],
              YV = (0, De.c)("BABYLON.Animation");
            YV && eV.animations.push(YV.Parse(JV))
          }
          eV.beginAnimationOnStart = VV.beginAnimationOnStart, eV.beginAnimationFrom = VV.beginAnimationFrom, eV.beginAnimationTo = VV.beginAnimationTo, eV.beginAnimationLoop = VV.beginAnimationLoop
        }
        if (VV.autoAnimate && YV && YV.beginAnimation(eV, VV.autoAnimateFrom, VV.autoAnimateTo, VV.autoAnimateLoop, VV.autoAnimateSpeed || 1), eV.startDelay = 0 | VV.startDelay, eV.minAngularSpeed = VV.minAngularSpeed, eV.maxAngularSpeed = VV.maxAngularSpeed, eV.minSize = VV.minSize, eV.maxSize = VV.maxSize, VV.minScaleX && (eV.minScaleX = VV.minScaleX, eV.maxScaleX = VV.maxScaleX, eV.minScaleY = VV.minScaleY, eV.maxScaleY = VV.maxScaleY), void 0 !== VV.preWarmCycles && (eV.preWarmCycles = VV.preWarmCycles, eV.preWarmStepOffset = VV.preWarmStepOffset), void 0 !== VV.minInitialRotation && (eV.minInitialRotation = VV.minInitialRotation, eV.maxInitialRotation = VV.maxInitialRotation), eV.minLifeTime = VV.minLifeTime, eV.maxLifeTime = VV.maxLifeTime, eV.minEmitPower = VV.minEmitPower, eV.maxEmitPower = VV.maxEmitPower, eV.emitRate = VV.emitRate, eV.gravity = UV.o.FromArray(VV.gravity), VV.noiseStrength && (eV.noiseStrength = UV.o.FromArray(VV.noiseStrength)), eV.color1 = wV.h.FromArray(VV.color1), eV.color2 = wV.h.FromArray(VV.color2), eV.colorDead = wV.h.FromArray(VV.colorDead), eV.updateSpeed = VV.updateSpeed, eV.targetStopDuration = VV.targetStopDuration, eV.blendMode = VV.blendMode, VV.colorGradients)
          for (const UV of VV.colorGradients) eV.addColorGradient(UV.gradient, wV.h.FromArray(UV.color1), UV.color2 ? wV.h.FromArray(UV.color2) : void 0);
        if (VV.rampGradients) {
          for (const xV of VV.rampGradients) eV.addRampGradient(xV.gradient, wV.d.FromArray(xV.color));
          eV.useRampGradients = VV.useRampGradients
        }
        if (VV.colorRemapGradients)
          for (const UV of VV.colorRemapGradients) eV.addColorRemapGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
        if (VV.alphaRemapGradients)
          for (const UV of VV.alphaRemapGradients) eV.addAlphaRemapGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
        if (VV.sizeGradients)
          for (const UV of VV.sizeGradients) eV.addSizeGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
        if (VV.angularSpeedGradients)
          for (const UV of VV.angularSpeedGradients) eV.addAngularSpeedGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
        if (VV.velocityGradients)
          for (const UV of VV.velocityGradients) eV.addVelocityGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
        if (VV.dragGradients)
          for (const UV of VV.dragGradients) eV.addDragGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
        if (VV.emitRateGradients)
          for (const UV of VV.emitRateGradients) eV.addEmitRateGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
        if (VV.startSizeGradients)
          for (const UV of VV.startSizeGradients) eV.addStartSizeGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
        if (VV.lifeTimeGradients)
          for (const UV of VV.lifeTimeGradients) eV.addLifeTimeGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
        if (VV.limitVelocityGradients) {
          for (const xV of VV.limitVelocityGradients) eV.addLimitVelocityGradient(xV.gradient, void 0 !== xV.factor1 ? xV.factor1 : xV.factor, xV.factor2);
          eV.limitVelocityDamping = VV.limitVelocityDamping
        }
        if (VV.noiseTexture && YV) {
          const xV = (0, De.c)("BABYLON.ProceduralTexture");
          eV.noiseTexture = xV.Parse(VV.noiseTexture, YV, JV)
        }
        let pV;
        if (VV.particleEmitterType) {
          switch (VV.particleEmitterType.type) {
            case "SphereParticleEmitter":
              pV = new EV;
              break;
            case "SphereDirectedParticleEmitter":
              pV = new BV;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              pV = new qV;
              break;
            case "ConeDirectedParticleEmitter":
              pV = new tV;
              break;
            case "CylinderParticleEmitter":
              pV = new jV.f;
              break;
            case "CylinderDirectedParticleEmitter":
              pV = new jV.e;
              break;
            case "HemisphericParticleEmitter":
              pV = new bV;
              break;
            case "PointParticleEmitter":
              pV = new kV;
              break;
            case "MeshParticleEmitter":
              pV = new FV;
              break;
            case "CustomParticleEmitter":
              pV = new ce;
              break;
            default:
              pV = new ZV.d
          }
          pV.parse(VV.particleEmitterType, YV)
        } else pV = new ZV.d, pV.parse(VV, YV);
        eV.particleEmitterType = pV, eV.startSpriteCellID = VV.startSpriteCellID, eV.endSpriteCellID = VV.endSpriteCellID, eV.spriteCellLoop = VV.spriteCellLoop ?? !0, eV.spriteCellWidth = VV.spriteCellWidth, eV.spriteCellHeight = VV.spriteCellHeight, eV.spriteCellChangeSpeed = VV.spriteCellChangeSpeed, eV.spriteRandomStartCell = VV.spriteRandomStartCell, eV.disposeOnStop = VV.disposeOnStop ?? !1, eV.manualEmitCount = VV.manualEmitCount ?? -1
      }
      static Parse(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          YV = arguments.length > 4 ? arguments[4] : void 0;
        const yV = VV.name;
        let pV, QV, nV = null,
          ZV = null;
        if (eV instanceof Ce.d ? pV = eV : (QV = eV, pV = QV.sk()), VV.customShader && (0, CV.e)(pV.createEffectForParticles)) {
          ZV = VV.customShader;
          const eV = ZV.shaderOptions.defines.length > 0 ? ZV.shaderOptions.defines.join("\n") : "";
          nV = pV.createEffectForParticles(ZV.shaderPath.fragmentElement, ZV.shaderOptions.uniforms, ZV.shaderOptions.samplers, eV)
        }
        const vV = new Ke(yV, YV || VV.Jv, eV, nV, VV.isAnimationSheetEnabled);
        if (vV.customShader = ZV, vV._rootUrl = xV, VV.id && (vV.id = VV.id), VV.subEmitters) {
          vV.subEmitters = [];
          for (const JV of VV.subEmitters) {
            const VV = [];
            for (const YV of JV) VV.push(ie.Parse(YV, eV, xV));
            vV.subEmitters.push(VV)
          }
        }
        if (VV.attractors)
          for (const wV of VV.attractors) {
            const VV = new fe;
            VV.position = UV.o.FromArray(wV.position), VV.strength = wV.strength, vV.addAttractor(VV)
          }
        return Ke._Parse(VV, vV, eV, xV), VV.textureMask && (vV.textureMask = wV.h.FromArray(VV.textureMask)), VV.worldOffset && (vV.worldOffset = UV.o.FromArray(VV.worldOffset)), VV.preventAutoStart && (vV.preventAutoStart = VV.preventAutoStart), VV.metadata && (vV.metadata = VV.metadata), JV || vV.preventAutoStart || vV.start(), vV
      }
      serialize() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = {};
        if (Ke._Serialize(eV, this, VV), eV.textureMask = this.textureMask.WYV(), eV.customShader = this.customShader, eV.preventAutoStart = this.preventAutoStart, eV.worldOffset = this.worldOffset.WYV(), this.metadata && (eV.metadata = this.metadata), this.subEmitters) {
          eV.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const xV of this._subEmitters) {
            const JV = [];
            for (const eV of xV) eV.particleSystem.doNotSerialize || JV.push(eV.serialize(VV));
            eV.subEmitters.push(JV)
          }
        }
        if (this._attractors && this._attractors.length) {
          eV.attractors = [];
          for (const VV of this._attractors) eV.attractors.push(VV.serialize())
        }
        return eV
      }
      static _Serialize(VV, eV, xV) {
        if (VV.name = eV.name, VV.id = eV.id, VV.Jv = eV.getCapacity(), VV.disposeOnStop = eV.disposeOnStop, VV.manualEmitCount = eV.manualEmitCount, eV.emitter.position) {
          const xV = eV.emitter;
          VV.emitterId = xV.id
        } else {
          const xV = eV.emitter;
          VV.emitter = xV.WYV()
        }
        if (eV.particleEmitterType && (VV.particleEmitterType = eV.particleEmitterType.serialize()), eV.particleTexture)
          if (xV) VV.texture = eV.particleTexture.serialize();
          else {
            const xV = eV.particleTexture;
            VV.textureName = eV.particleTexture.name, VV.invertY = !!xV._invertY;
            const JV = {};
            for (const VV of me) JV[VV] = xV[VV];
            JV.samplingMode = xV.samplingMode, VV.textureSettings = JV
          } VV.isLocal = eV.isLocal, ae.b.AppendSerializedAnimations(eV, VV), VV.beginAnimationOnStart = eV.beginAnimationOnStart, VV.beginAnimationFrom = eV.beginAnimationFrom, VV.beginAnimationTo = eV.beginAnimationTo, VV.beginAnimationLoop = eV.beginAnimationLoop, VV.startDelay = eV.startDelay, VV.renderingGroupId = eV.renderingGroupId, VV.isBillboardBased = eV.isBillboardBased, VV.billboardMode = eV.billboardMode, VV.minAngularSpeed = eV.minAngularSpeed, VV.maxAngularSpeed = eV.maxAngularSpeed, VV.minSize = eV.minSize, VV.maxSize = eV.maxSize, VV.minScaleX = eV.minScaleX, VV.maxScaleX = eV.maxScaleX, VV.minScaleY = eV.minScaleY, VV.maxScaleY = eV.maxScaleY, VV.minEmitPower = eV.minEmitPower, VV.maxEmitPower = eV.maxEmitPower, VV.minLifeTime = eV.minLifeTime, VV.maxLifeTime = eV.maxLifeTime, VV.emitRate = eV.emitRate, VV.gravity = eV.gravity.WYV(), VV.noiseStrength = eV.noiseStrength.WYV(), VV.color1 = eV.color1.WYV(), VV.color2 = eV.color2.WYV(), VV.colorDead = eV.colorDead.WYV(), VV.updateSpeed = eV.updateSpeed, VV.targetStopDuration = eV.targetStopDuration, VV.blendMode = eV.blendMode, VV.preWarmCycles = eV.preWarmCycles, VV.preWarmStepOffset = eV.preWarmStepOffset, VV.minInitialRotation = eV.minInitialRotation, VV.maxInitialRotation = eV.maxInitialRotation, VV.startSpriteCellID = eV.startSpriteCellID, VV.spriteCellLoop = eV.spriteCellLoop, VV.endSpriteCellID = eV.endSpriteCellID, VV.spriteCellChangeSpeed = eV.spriteCellChangeSpeed, VV.spriteCellWidth = eV.spriteCellWidth, VV.spriteCellHeight = eV.spriteCellHeight, VV.spriteRandomStartCell = eV.spriteRandomStartCell, VV.isAnimationSheetEnabled = eV.isAnimationSheetEnabled, VV.useLogarithmicDepth = eV.useLogarithmicDepth;
        const JV = eV.getColorGradients();
        if (JV) {
          VV.colorGradients = [];
          for (const eV of JV) {
            const xV = {
              gradient: eV.gradient,
              color1: eV.color1.WYV()
            };
            eV.color2 ? xV.color2 = eV.color2.WYV() : xV.color2 = eV.color1.WYV(), VV.colorGradients.push(xV)
          }
        }
        const YV = eV.getRampGradients();
        if (YV) {
          VV.rampGradients = [];
          for (const eV of YV) {
            const xV = {
              gradient: eV.gradient,
              color: eV.color.WYV()
            };
            VV.rampGradients.push(xV)
          }
          VV.useRampGradients = eV.useRampGradients
        }
        const UV = eV.getColorRemapGradients();
        if (UV) {
          VV.colorRemapGradients = [];
          for (const eV of UV) {
            const xV = {
              gradient: eV.gradient,
              factor1: eV.factor1
            };
            void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.colorRemapGradients.push(xV)
          }
        }
        const yV = eV.getAlphaRemapGradients();
        if (yV) {
          VV.alphaRemapGradients = [];
          for (const eV of yV) {
            const xV = {
              gradient: eV.gradient,
              factor1: eV.factor1
            };
            void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.alphaRemapGradients.push(xV)
          }
        }
        const pV = eV.getSizeGradients();
        if (pV) {
          VV.sizeGradients = [];
          for (const eV of pV) {
            const xV = {
              gradient: eV.gradient,
              factor1: eV.factor1
            };
            void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.sizeGradients.push(xV)
          }
        }
        const QV = eV.getAngularSpeedGradients();
        if (QV) {
          VV.angularSpeedGradients = [];
          for (const eV of QV) {
            const xV = {
              gradient: eV.gradient,
              factor1: eV.factor1
            };
            void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.angularSpeedGradients.push(xV)
          }
        }
        const nV = eV.getVelocityGradients();
        if (nV) {
          VV.velocityGradients = [];
          for (const eV of nV) {
            const xV = {
              gradient: eV.gradient,
              factor1: eV.factor1
            };
            void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.velocityGradients.push(xV)
          }
        }
        const wV = eV.getDragGradients();
        if (wV) {
          VV.dragGradients = [];
          for (const eV of wV) {
            const xV = {
              gradient: eV.gradient,
              factor1: eV.factor1
            };
            void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.dragGradients.push(xV)
          }
        }
        const ZV = eV.getEmitRateGradients();
        if (ZV) {
          VV.emitRateGradients = [];
          for (const eV of ZV) {
            const xV = {
              gradient: eV.gradient,
              factor1: eV.factor1
            };
            void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.emitRateGradients.push(xV)
          }
        }
        const vV = eV.getStartSizeGradients();
        if (vV) {
          VV.startSizeGradients = [];
          for (const eV of vV) {
            const xV = {
              gradient: eV.gradient,
              factor1: eV.factor1
            };
            void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.startSizeGradients.push(xV)
          }
        }
        const rV = eV.getLifeTimeGradients();
        if (rV) {
          VV.lifeTimeGradients = [];
          for (const eV of rV) {
            const xV = {
              gradient: eV.gradient,
              factor1: eV.factor1
            };
            void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.lifeTimeGradients.push(xV)
          }
        }
        const kV = eV.getLimitVelocityGradients();
        if (kV) {
          VV.limitVelocityGradients = [];
          for (const eV of kV) {
            const xV = {
              gradient: eV.gradient,
              factor1: eV.factor1
            };
            void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.limitVelocityGradients.push(xV)
          }
          VV.limitVelocityDamping = eV.limitVelocityDamping
        }
        eV.noiseTexture && (VV.noiseTexture = eV.noiseTexture.serialize())
      }
      clone(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = {
          ...this._customWrappers
        };
        let YV = null;
        const UV = this._engine;
        if ((0, CV.e)(UV.createEffectForParticles) && null != this.customShader) {
          YV = this.customShader;
          const VV = YV.shaderOptions.defines.length > 0 ? YV.shaderOptions.defines.join("\n") : "",
            eV = UV.createEffectForParticles(YV.shaderPath.fragmentElement, YV.shaderOptions.uniforms, YV.shaderOptions.samplers, VV);
          JV[0] ? JV[0].effect = eV : this.setCustomEffect(eV, 0)
        }
        const yV = this.serialize(xV),
          pV = !1 === xV && this.particleTexture ? this.particleTexture.clone() : null;
        pV && (yV.textureName = void 0);
        const QV = Ke.Parse(yV, this._scene || this._engine, this._rootUrl);
        return QV.name = VV, QV.customShader = YV, QV._customWrappers = JV, pV && (QV.particleTexture = pV), void 0 === eV && (eV = this.emitter), this.noiseTexture && (QV.noiseTexture = this.noiseTexture.clone()), QV.emitter = eV, this.preventAutoStart || QV.start(), QV
      }
    }
    Ke.BILLBOARDMODE_Y = 2, Ke.BILLBOARDMODE_ALL = 7, Ke.BILLBOARDMODE_STRETCHED = 8, Ke.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let He = !1;
    He || (He = !0, ie._ParseParticleSystem = Ke.Parse)
  },
  44538: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      SkyMaterial: () => qV,
      _MaxColorValueForRenderTarget: () => jV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(41279),
      yV = xV(38263),
      pV = xV(41544),
      QV = xV(41606),
      nV = xV(44486),
      wV = xV(42496),
      ZV = xV(41331),
      vV = xV(38318),
      rV = xV(41635),
      kV = xV(41610),
      bV = xV(41591),
      EV = xV(41583);
    class BV extends pV.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function jV(VV) {
      switch (VV) {
        case nV.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case nV.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let qV = (() => {
      var VV;
      let eV, pV, nV, vV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV, GV, WV = QV.e,
        RV = [],
        gV = [],
        DV = [],
        iV = [],
        CV = [],
        aV = [],
        oV = [],
        cV = [],
        hV = [],
        lV = [],
        LV = [],
        fV = [],
        mV = [],
        KV = [],
        HV = [],
        uV = [],
        sV = [],
        SV = [],
        IV = [],
        dV = [],
        OV = [],
        Ve = [],
        ee = [],
        xe = [],
        Je = [],
        Ye = [],
        Ue = [],
        ye = [],
        pe = [],
        Qe = [];
      return VV = class extends WV {
        constructor(VV, eV) {
          super(VV, eV, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, JV.l)(this, RV, 1), this.turbidity = ((0, JV.l)(this, gV), (0, JV.l)(this, DV, 10)), this.rayleigh = ((0, JV.l)(this, iV), (0, JV.l)(this, CV, 2)), this.mieCoefficient = ((0, JV.l)(this, aV), (0, JV.l)(this, oV, .005)), this.mieDirectionalG = ((0, JV.l)(this, cV), (0, JV.l)(this, hV, .8)), this.distance = ((0, JV.l)(this, lV), (0, JV.l)(this, LV, 500)), this.inclination = ((0, JV.l)(this, fV), (0, JV.l)(this, mV, .49)), this.azimuth = ((0, JV.l)(this, KV), (0, JV.l)(this, HV, .25)), this.sunPosition = ((0, JV.l)(this, uV), (0, JV.l)(this, sV, new yV.Ik(0, 100, 0))), this.useSunPosition = ((0, JV.l)(this, SV), (0, JV.l)(this, IV, !1)), this.cameraOffset = ((0, JV.l)(this, dV), (0, JV.l)(this, OV, yV.Ik.Zero())), this.up = ((0, JV.l)(this, Ve), (0, JV.l)(this, ee, yV.Ik.Up())), this.dithering = ((0, JV.l)(this, xe), (0, JV.l)(this, Je, !1)), this.rawHdrOutput = ((0, JV.l)(this, Ye), (0, JV.l)(this, Ue, !1)), this.cloudiness = ((0, JV.l)(this, ye), (0, JV.l)(this, pe, 0)), this._cameraPosition = ((0, JV.l)(this, Qe), yV.Ik.Zero()), this._skyOrientation = new yV.Quaternion
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
        isReadyForSubMesh(eV, xV) {
          const JV = xV._drawWrapper;
          if (this.isFrozen && JV.effect && JV._wasPreviouslyReady) return !0;
          xV.materialDefines || (xV.materialDefines = new BV);
          const YV = xV.materialDefines,
            UV = this.dD();
          if (this._isReadyForSubMesh(xV)) return !0;
          if ((0, EV.$)(eV, UV, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, YV, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, EV.P)(eV, YV, !0, !1), YV.IMAGEPROCESSINGPOSTPROCESS !== UV.imageProcessingConfiguration.applyByPostProcess && YV.markAsMiscDirty(), YV.DITHER !== this.dithering && YV.markAsMiscDirty(), YV.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && YV.markAsMiscDirty(), YV.isDirty) {
            YV.markAsProcessed(), UV.resetCachedMaterial();
            const eV = new kV.d;
            YV.FOG && eV.addFallback(1, "FOG"), YV.IMAGEPROCESSINGPOSTPROCESS = UV.imageProcessingConfiguration.applyByPostProcess, YV.DITHER = this.dithering, YV.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const JV = [wV.c.PositionKind];
            YV.VERTEXCOLOR && JV.push(wV.c.ColorKind);
            const yV = "sky",
              pV = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, bV.c)(pV);
            const QV = YV.toString();
            xV.setEffect(UV.sk().createEffect(yV, {
              attributes: JV,
              uniformsNames: pV,
              uniformBuffersNames: [],
              samplers: [],
              defines: QV,
              fallbacks: eV,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: VV._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, UV.sk()), YV, this._materialContext)
          }
          return !(!xV.effect || !xV.effect.isReady()) && (YV._renderId = UV.getRenderId(), JV._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(VV, eV, xV) {
          const JV = this.dD(),
            YV = xV.materialDefines;
          if (!YV) return;
          const UV = xV.effect;
          if (!UV) return;
          this._activeEffect = UV, this.bindOnlyWorldMatrix(VV), this._activeEffect.setMatrix("viewProjection", JV.getTransformMatrix()), this._mustRebind(JV, UV, xV) && ((0, bV.g)(UV, this, JV), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, EV.r)(YV, UV, JV)), JV.fogEnabled && eV.applyFog && JV.fogMode !== ZV.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", JV.getViewMatrix()), (0, EV.g)(JV, eV, this._activeEffect, this.rawHdrOutput);
          const pV = JV.activeCamera;
          if (pV) {
            const VV = pV.getWorldMatrix();
            this._cameraPosition.x = VV.m[12], this._cameraPosition.y = VV.m[13], this._cameraPosition.z = VV.m[14], this._activeEffect.setVector3("cameraPosition", yV.TmpVectors.Ik[0].iG(this._cameraPosition).IYV(JV.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const VV = JV.sk()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", jV(VV?.texture?.type))
          }
          if (!this.useSunPosition) {
            const VV = Math.PI * (this.inclination - .5),
              eV = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(eV) * Math.cos(VV), this.sunPosition.y = this.distance * Math.sin(-VV), this.sunPosition.z = this.distance * Math.sin(eV) * Math.cos(VV), yV.Quaternion.FromUnitVectorsToRef(yV.Ik.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(eV, this._activeEffect, xV)
        }
        getAnimatables() {
          return []
        }
        dispose(VV) {
          super.dispose(VV)
        }
        clone(eV) {
          return UV.b.Clone((() => new VV(eV, this.dD())), this)
        }
        serialize() {
          const VV = super.serialize();
          return VV.customType = "BABYLON.SkyMaterial", VV
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(eV, xV, JV) {
          return UV.b.Parse((() => new VV(eV.name, xV)), eV, xV, JV)
        }
      }, (() => {
        const xV = "function" === typeof Symbol && Symbol.metadata ? Object.create(WV[Symbol.metadata] ?? null) : void 0;
        eV = [(0, YV.J)()], pV = [(0, YV.J)()], nV = [(0, YV.J)()], vV = [(0, YV.J)()], qV = [(0, YV.J)()], tV = [(0, YV.J)()], FV = [(0, YV.J)()], TV = [(0, YV.J)()], PV = [(0, YV.I)()], AV = [(0, YV.J)()], NV = [(0, YV.I)()], XV = [(0, YV.I)()], MV = [(0, YV.J)()], zV = [(0, YV.J)()], GV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: VV => "luminance" in VV,
            get: VV => VV.luminance,
            set: (VV, eV) => {
              VV.luminance = eV
            }
          },
          metadata: xV
        }, RV, gV), (0, JV.i)(null, null, pV, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: VV => "turbidity" in VV,
            get: VV => VV.turbidity,
            set: (VV, eV) => {
              VV.turbidity = eV
            }
          },
          metadata: xV
        }, DV, iV), (0, JV.i)(null, null, nV, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: VV => "rayleigh" in VV,
            get: VV => VV.rayleigh,
            set: (VV, eV) => {
              VV.rayleigh = eV
            }
          },
          metadata: xV
        }, CV, aV), (0, JV.i)(null, null, vV, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: VV => "mieCoefficient" in VV,
            get: VV => VV.mieCoefficient,
            set: (VV, eV) => {
              VV.mieCoefficient = eV
            }
          },
          metadata: xV
        }, oV, cV), (0, JV.i)(null, null, qV, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: VV => "mieDirectionalG" in VV,
            get: VV => VV.mieDirectionalG,
            set: (VV, eV) => {
              VV.mieDirectionalG = eV
            }
          },
          metadata: xV
        }, hV, lV), (0, JV.i)(null, null, tV, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: VV => "distance" in VV,
            get: VV => VV.distance,
            set: (VV, eV) => {
              VV.distance = eV
            }
          },
          metadata: xV
        }, LV, fV), (0, JV.i)(null, null, FV, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: VV => "inclination" in VV,
            get: VV => VV.inclination,
            set: (VV, eV) => {
              VV.inclination = eV
            }
          },
          metadata: xV
        }, mV, KV), (0, JV.i)(null, null, TV, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: VV => "azimuth" in VV,
            get: VV => VV.azimuth,
            set: (VV, eV) => {
              VV.azimuth = eV
            }
          },
          metadata: xV
        }, HV, uV), (0, JV.i)(null, null, PV, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: VV => "sunPosition" in VV,
            get: VV => VV.sunPosition,
            set: (VV, eV) => {
              VV.sunPosition = eV
            }
          },
          metadata: xV
        }, sV, SV), (0, JV.i)(null, null, AV, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: VV => "useSunPosition" in VV,
            get: VV => VV.useSunPosition,
            set: (VV, eV) => {
              VV.useSunPosition = eV
            }
          },
          metadata: xV
        }, IV, dV), (0, JV.i)(null, null, NV, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: VV => "cameraOffset" in VV,
            get: VV => VV.cameraOffset,
            set: (VV, eV) => {
              VV.cameraOffset = eV
            }
          },
          metadata: xV
        }, OV, Ve), (0, JV.i)(null, null, XV, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: VV => "up" in VV,
            get: VV => VV.up,
            set: (VV, eV) => {
              VV.up = eV
            }
          },
          metadata: xV
        }, ee, xe), (0, JV.i)(null, null, MV, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: VV => "dithering" in VV,
            get: VV => VV.dithering,
            set: (VV, eV) => {
              VV.dithering = eV
            }
          },
          metadata: xV
        }, Je, Ye), (0, JV.i)(null, null, zV, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: VV => "rawHdrOutput" in VV,
            get: VV => VV.rawHdrOutput,
            set: (VV, eV) => {
              VV.rawHdrOutput = eV
            }
          },
          metadata: xV
        }, Ue, ye), (0, JV.i)(null, null, GV, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: VV => "cloudiness" in VV,
            get: VV => VV.cloudiness,
            set: (VV, eV) => {
              VV.cloudiness = eV
            }
          },
          metadata: xV
        }, pe, Qe), xV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xV
        })
      })(), VV._ShaderLoader = new rV.b((() => [xV.e(639).then((() => xV(64357))), xV.e(632).then((() => xV(64366)))]), (() => [xV.e(656).then((() => xV(64368))), xV.e(650).then((() => xV(64370)))])), VV
    })();
    (0, vV.d)("BABYLON.SkyMaterial", qV)
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);