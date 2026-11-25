export const id = 308;
export const ids = [308];
export const modules = {
  41627: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = ZB(40163),
      JB = ZB(41631);
    class oB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = ZB, this.tTB = [], this._maxBlockCapacity = IB || 64, this._selectionContent = new TB.c(1024), this._creationFunc = BB
      }
      update(BB, IB, ZB) {
        JB.e._CreateBlocks(BB, IB, ZB, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      jTB(BB) {
        for (let IB = 0; IB < this.blocks.length; IB++) {
          this.blocks[IB].addEntry(BB)
        }
      }
      jR(BB) {
        for (let IB = 0; IB < this.blocks.length; IB++) {
          this.blocks[IB].removeEntry(BB)
        }
      }
      select(BB, IB) {
        this._selectionContent.reset();
        for (let ZB = 0; ZB < this.blocks.length; ZB++) {
          this.blocks[ZB].select(BB, this._selectionContent, IB)
        }
        return IB ? this._selectionContent.concat(this.tTB) : this._selectionContent.concatWithNoDuplicate(this.tTB), this._selectionContent
      }
      intersects(BB, IB, ZB) {
        this._selectionContent.reset();
        for (let TB = 0; TB < this.blocks.length; TB++) {
          this.blocks[TB].intersects(BB, IB, this._selectionContent, ZB)
        }
        return ZB ? this._selectionContent.concat(this.tTB) : this._selectionContent.concatWithNoDuplicate(this.tTB), this._selectionContent
      }
      intersectsRay(BB) {
        this._selectionContent.reset();
        for (let IB = 0; IB < this.blocks.length; IB++) {
          this.blocks[IB].intersectsRay(BB, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.tTB), this._selectionContent
      }
    }
    oB.CreationFuncForMeshes = (BB, IB) => {
      const ZB = BB.qm();
      !BB.isBlocked && ZB.boundingBox.intersectsMinMax(IB.XTB, IB.mTB) && IB.entries.push(BB)
    }, oB.CreationFuncForSubMeshes = (BB, IB) => {
      BB.qm().boundingBox.intersectsMinMax(IB.XTB, IB.mTB) && IB.entries.push(BB)
    }
  },
  41631: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = ZB(37120),
      JB = ZB(40354);
    class oB {
      constructor(BB, IB, ZB, TB, JB, oB) {
        this.entries = [], this.bTB = new Array, this._capacity = ZB, this._depth = TB, this._maxDepth = JB, this._creationFunc = oB, this._minPoint = BB, this._maxPoint = IB, this.bTB.push(BB.clone()), this.bTB.push(IB.clone()), this.bTB.push(BB.clone()), this.bTB[2].x = IB.x, this.bTB.push(BB.clone()), this.bTB[3].y = IB.y, this.bTB.push(BB.clone()), this.bTB[4].z = IB.z, this.bTB.push(IB.clone()), this.bTB[5].z = BB.z, this.bTB.push(IB.clone()), this.bTB[6].x = BB.x, this.bTB.push(IB.clone()), this.bTB[7].y = BB.y
      }
      get ah() {
        return this._capacity
      }
      get XTB() {
        return this._minPoint
      }
      get mTB() {
        return this._maxPoint
      }
      addEntry(BB) {
        if (this.blocks)
          for (let IB = 0; IB < this.blocks.length; IB++) {
            this.blocks[IB].addEntry(BB)
          } else this._creationFunc(BB, this), this.entries.length > this.ah && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(BB) {
        if (this.blocks) {
          for (let IB = 0; IB < this.blocks.length; IB++) {
            this.blocks[IB].removeEntry(BB)
          }
          return
        }
        const IB = this.entries.indexOf(BB);
        IB > -1 && this.entries.splice(IB, 1)
      }
      addEntries(BB) {
        for (let IB = 0; IB < BB.length; IB++) {
          const ZB = BB[IB];
          this.addEntry(ZB)
        }
      }
      select(BB, IB, ZB) {
        if (JB.d.IsInFrustum(this.bTB, BB)) {
          if (this.blocks) {
            for (let TB = 0; TB < this.blocks.length; TB++) {
              this.blocks[TB].select(BB, IB, ZB)
            }
            return
          }
          ZB ? IB.concat(this.entries) : IB.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(BB, IB, ZB, TB) {
        if (JB.d.IntersectsSphere(this._minPoint, this._maxPoint, BB, IB)) {
          if (this.blocks) {
            for (let JB = 0; JB < this.blocks.length; JB++) {
              this.blocks[JB].intersects(BB, IB, ZB, TB)
            }
            return
          }
          TB ? ZB.concat(this.entries) : ZB.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(BB, IB) {
        if (BB.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let ZB = 0; ZB < this.blocks.length; ZB++) {
              this.blocks[ZB].intersectsRay(BB, IB)
            }
            return
          }
          IB.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        oB._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(BB, IB, ZB, JB, GB, vB, kB, cB) {
        kB.blocks = new Array;
        const nB = new TB.s((IB.x - BB.x) / 2, (IB.y - BB.y) / 2, (IB.z - BB.z) / 2);
        for (let TB = 0; TB < 2; TB++)
          for (let IB = 0; IB < 2; IB++)
            for (let hB = 0; hB < 2; hB++) {
              const zB = BB.add(nB.multiplyByFloats(TB, IB, hB)),
                FB = BB.add(nB.multiplyByFloats(TB + 1, IB + 1, hB + 1)),
                NB = new oB(zB, FB, JB, GB + 1, vB, cB);
              NB.addEntries(ZB), kB.blocks.push(NB)
            }
      }
    }
  },
  41638: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB
    });
    var TB = ZB(40148),
      JB = ZB(37120),
      oB = ZB(40488),
      GB = ZB(41584),
      vB = ZB(40215),
      kB = ZB(37147),
      cB = ZB(41627);
    class nB {
      constructor(BB) {
        this.name = vB.c.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new GB.A(JB.s.Zero(), new JB.s(1, 1, 1)), (BB = BB || kB.e.LastCreatedScene) && (this.lg = BB, this.lg.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.lg.getActiveSubMeshCandidates = BB => this.getActiveSubMeshCandidates(BB), this.lg.getCollidingSubMeshCandidates = (BB, IB) => this.getCollidingSubMeshCandidates(BB, IB), this.lg.getIntersectingSubMeshCandidates = (BB, IB) => this.getIntersectingSubMeshCandidates(BB, IB))
      }
      register() {
        this.lg.onMeshRemovedObservable.add((BB => {
          const IB = this.lg.selectionOctree;
          if (void 0 !== IB && null !== IB) {
            const ZB = IB.tTB.indexOf(BB); - 1 !== ZB && IB.tTB.splice(ZB, 1)
          }
        })), this.lg.onMeshImportedObservable.add((BB => {
          const IB = this.lg.selectionOctree;
          void 0 !== IB && null !== IB && IB.jTB(BB)
        }))
      }
      getActiveMeshCandidates() {
        return this.lg.BJB?.select(this.lg.frustumPlanes) || this.lg._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(BB) {
        if (BB._submeshesOctree && BB.useOctreeForRenderingSelection) {
          return BB._submeshesOctree.select(this.lg.frustumPlanes)
        }
        return this.lg._getDefaultSubMeshCandidates(BB)
      }
      getIntersectingSubMeshCandidates(BB, IB) {
        if (BB._submeshesOctree && BB.useOctreeForPicking) {
          GB.A.TransformToRef(IB, BB.getWorldMatrix(), this._tempRay);
          return BB._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.lg._getDefaultSubMeshCandidates(BB)
      }
      getCollidingSubMeshCandidates(BB, IB) {
        if (BB._submeshesOctree && BB.useOctreeForCollisions) {
          const ZB = IB._velocityWorldLength + Math.max(IB._radius.x, IB._radius.y, IB._radius.z);
          return BB._submeshesOctree.intersects(IB._basePointWorld, ZB)
        }
        return this.lg._getDefaultSubMeshCandidates(BB)
      }
      rebuild() {}
      dispose() {}
    }
    let hB = !1;
    hB || (hB = !0, TB.e.prototype.createOrUpdateSelectionOctree = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        ZB = this._getComponent(vB.c.NAME_OCTREE);
      ZB || (ZB = new nB(this), this.yTB(ZB)), this.BJB || (this.BJB = new cB.e(cB.e.CreationFuncForMeshes, BB, IB));
      const TB = this.getWorldExtends();
      return this.BJB.update(TB.min, TB.max, this.meshes), this.BJB
    }, Object.defineProperty(TB.e.prototype, "selectionOctree", {
      get: function() {
        return this.BJB
      },
      enumerable: !0,
      configurable: !0
    }), oB.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const ZB = this.JR();
      let TB = ZB._getComponent(vB.c.NAME_OCTREE);
      TB || (TB = new nB(ZB), ZB.yTB(TB)), this._submeshesOctree || (this._submeshesOctree = new cB.e(cB.e.CreationFuncForSubMeshes, BB, IB)), this.computeWorldMatrix(!0);
      const JB = this.qm().boundingBox;
      return this._submeshesOctree.update(JB.minimumWorld, JB.maximumWorld, this.EW), this._submeshesOctree
    })
  },
  41584: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => hB,
      c: () => aB,
      d: () => gB,
      h: () => NB,
      l: () => FB,
      o: () => iB,
      p: () => YB,
      s: () => sB,
      w: () => OB,
      z: () => wB
    });
    var TB = ZB(37129),
      JB = ZB(37120),
      oB = ZB(37131),
      GB = ZB(40343),
      vB = ZB(40185),
      kB = ZB(37147),
      cB = ZB(40239);
    const nB = {
      internalPickerForMesh: void 0
    };
    class hB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TB.d;
        this.origin = BB, this.direction = IB, this.length = ZB, this.epsilon = JB
      }
      clone() {
        return new hB(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const TB = hB._TmpVector3[0].cBB(BB.x - ZB, BB.y - ZB, BB.z - ZB),
          JB = hB._TmpVector3[1].cBB(IB.x + ZB, IB.y + ZB, IB.z + ZB);
        let oB, GB, vB, kB, cB = 0,
          nB = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < TB.x || this.origin.x > JB.x) return !1
        } else if (oB = 1 / this.direction.x, GB = (TB.x - this.origin.x) * oB, vB = (JB.x - this.origin.x) * oB, vB === -1 / 0 && (vB = 1 / 0), GB > vB && (kB = GB, GB = vB, vB = kB), cB = Math.max(GB, cB), nB = Math.min(vB, nB), cB > nB) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < TB.y || this.origin.y > JB.y) return !1
        } else if (oB = 1 / this.direction.y, GB = (TB.y - this.origin.y) * oB, vB = (JB.y - this.origin.y) * oB, vB === -1 / 0 && (vB = 1 / 0), GB > vB && (kB = GB, GB = vB, vB = kB), cB = Math.max(GB, cB), nB = Math.min(vB, nB), cB > nB) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < TB.z || this.origin.z > JB.z) return !1
        } else if (oB = 1 / this.direction.z, GB = (TB.z - this.origin.z) * oB, vB = (JB.z - this.origin.z) * oB, vB === -1 / 0 && (vB = 1 / 0), GB > vB && (kB = GB, GB = vB, vB = kB), cB = Math.max(GB, cB), nB = Math.min(vB, nB), cB > nB) return !1;
        return !0
      }
      intersectsBox(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(BB.minimum, BB.maximum, IB)
      }
      intersectsSphere(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZB = BB.center.x - this.origin.x,
          TB = BB.center.y - this.origin.y,
          JB = BB.center.z - this.origin.z,
          oB = ZB * ZB + TB * TB + JB * JB,
          GB = BB.radius + IB,
          vB = GB * GB;
        if (oB <= vB) return !0;
        const kB = ZB * this.direction.x + TB * this.direction.y + JB * this.direction.z;
        if (kB < 0) return !1;
        return oB - kB * kB <= vB
      }
      intersectsTriangle(BB, IB, ZB) {
        const TB = hB._TmpVector3[0],
          oB = hB._TmpVector3[1],
          vB = hB._TmpVector3[2],
          kB = hB._TmpVector3[3],
          cB = hB._TmpVector3[4];
        IB.subtractToRef(BB, TB), ZB.subtractToRef(BB, oB), JB.s.CrossToRef(this.direction, oB, vB);
        const nB = JB.s.Dot(TB, vB);
        if (0 === nB) return null;
        const zB = 1 / nB;
        this.origin.subtractToRef(BB, kB);
        const FB = JB.s.Dot(kB, vB) * zB;
        if (FB < -this.epsilon || FB > 1 + this.epsilon) return null;
        JB.s.CrossToRef(kB, TB, cB);
        const NB = JB.s.Dot(this.direction, cB) * zB;
        if (NB < -this.epsilon || FB + NB > 1 + this.epsilon) return null;
        const gB = JB.s.Dot(oB, cB) * zB;
        return gB > this.length || gB < 0 ? null : new GB.c(1 - FB - NB, FB, gB)
      }
      intersectsPlane(BB) {
        let IB;
        const ZB = JB.s.Dot(BB.normal, this.direction);
        if (Math.abs(ZB) < 9.99999997475243e-7) return null;
        {
          const TB = JB.s.Dot(BB.normal, this.origin);
          return IB = (-BB.d - TB) / ZB, IB < 0 ? IB < -9.99999997475243e-7 ? null : 0 : IB
        }
      }
      intersectsAxis(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (BB) {
          case "y": {
            const BB = (this.origin.y - IB) / this.direction.y;
            return BB > 0 ? null : new JB.s(this.origin.x + this.direction.x * -BB, IB, this.origin.z + this.direction.z * -BB)
          }
          case "x": {
            const BB = (this.origin.x - IB) / this.direction.x;
            return BB > 0 ? null : new JB.s(IB, this.origin.y + this.direction.y * -BB, this.origin.z + this.direction.z * -BB)
          }
          case "z": {
            const BB = (this.origin.z - IB) / this.direction.z;
            return BB > 0 ? null : new JB.s(this.origin.x + this.direction.x * -BB, this.origin.y + this.direction.y * -BB, IB)
          }
          default:
            return null
        }
      }
      yJB(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          oB = arguments.length > 4 ? arguments[4] : void 0,
          GB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const vB = JB.m.Matrix[0];
        return BB.getWorldMatrix().invertToRef(vB), this._tmpRay ? hB.TransformToRef(this, vB, this._tmpRay) : this._tmpRay = hB.Transform(this, vB), BB.intersects(this._tmpRay, IB, ZB, TB, oB, GB)
      }
      intersectsMeshes(BB, IB, ZB) {
        ZB ? ZB.length = 0 : ZB = [];
        for (let TB = 0; TB < BB.length; TB++) {
          const JB = this.yJB(BB[TB], IB);
          JB.hit && ZB.push(JB)
        }
        return ZB.sort(this._comparePickingInfo), ZB
      }
      _comparePickingInfo(BB, IB) {
        return BB.distance < IB.distance ? -1 : BB.distance > IB.distance ? 1 : 0
      }
      intersectionSegment(BB, IB, ZB) {
        const TB = this.origin,
          oB = JB.m.rN[0],
          GB = JB.m.rN[1],
          vB = JB.m.rN[2],
          kB = JB.m.rN[3];
        IB.subtractToRef(BB, oB), this.direction.scaleToRef(hB._Rayl, vB), TB.addToRef(vB, GB), BB.subtractToRef(TB, kB);
        const cB = JB.s.Dot(oB, oB),
          nB = JB.s.Dot(oB, vB),
          zB = JB.s.Dot(vB, vB),
          FB = JB.s.Dot(oB, kB),
          NB = JB.s.Dot(vB, kB),
          gB = cB * zB - nB * nB;
        let qB, yB, UB = gB,
          WB = gB;
        gB < hB._Smallnum ? (qB = 0, UB = 1, yB = NB, WB = zB) : (qB = nB * NB - zB * FB, yB = cB * NB - nB * FB, qB < 0 ? (qB = 0, yB = NB, WB = zB) : qB > UB && (qB = UB, yB = NB + nB, WB = zB)), yB < 0 ? (yB = 0, -FB < 0 ? qB = 0 : -FB > cB ? qB = UB : (qB = -FB, UB = cB)) : yB > WB && (yB = WB, -FB + nB < 0 ? qB = 0 : -FB + nB > cB ? qB = UB : (qB = -FB + nB, UB = cB));
        const dB = Math.abs(qB) < hB._Smallnum ? 0 : qB / UB,
          CB = Math.abs(yB) < hB._Smallnum ? 0 : yB / WB,
          QB = JB.m.rN[4];
        vB.scaleToRef(CB, QB);
        const sB = JB.m.rN[5];
        oB.scaleToRef(dB, sB), sB.addInPlace(kB);
        const wB = JB.m.rN[6];
        sB.subtractToRef(QB, wB);
        return CB > 0 && CB <= this.length && wB.lengthSquared() < ZB * ZB ? sB.length() : -1
      }
      update(BB, IB, ZB, TB, oB, GB, vB) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          hB._RayDistant || (hB._RayDistant = hB.Zero()), hB._RayDistant.unprojectRayToRef(BB, IB, ZB, TB, JB.b.IdentityReadOnly, GB, vB);
          const kB = JB.m.Matrix[0];
          oB.invertToRef(kB), hB.TransformToRef(hB._RayDistant, kB, this)
        } else this.unprojectRayToRef(BB, IB, ZB, TB, oB, GB, vB);
        return this
      }
      static Zero() {
        return new hB(JB.s.Zero(), JB.s.Zero())
      }
      static CreateNew(BB, IB, ZB, TB, JB, oB, GB) {
        return hB.Zero().update(BB, IB, ZB, TB, JB, oB, GB)
      }
      static CreateNewFromTo(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JB.b.IdentityReadOnly;
        const TB = new hB(new JB.s(0, 0, 0), new JB.s(0, 0, 0));
        return hB.CreateFromToToRef(BB, IB, TB, ZB)
      }
      static CreateFromToToRef(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JB.b.IdentityReadOnly;
        ZB.origin.TY(BB);
        const oB = IB.subtractToRef(BB, ZB.direction),
          GB = Math.sqrt(oB.x * oB.x + oB.y * oB.y + oB.z * oB.z);
        return ZB.length = GB, ZB.direction.normalize(), hB.TransformToRef(ZB, TB, ZB)
      }
      static Transform(BB, IB) {
        const ZB = new hB(new JB.s(0, 0, 0), new JB.s(0, 0, 0));
        return hB.TransformToRef(BB, IB, ZB), ZB
      }
      static TransformToRef(BB, IB, ZB) {
        JB.s.TransformCoordinatesToRef(BB.origin, IB, ZB.origin), JB.s.TransformNormalToRef(BB.direction, IB, ZB.direction), ZB.length = BB.length, ZB.epsilon = BB.epsilon;
        const TB = ZB.direction,
          oB = TB.length();
        if (0 !== oB && 1 !== oB) {
          const BB = 1 / oB;
          TB.x *= BB, TB.y *= BB, TB.z *= BB, ZB.length *= oB
        }
        return ZB
      }
      unprojectRayToRef(BB, IB, ZB, TB, oB, GB, vB) {
        const cB = JB.m.Matrix[0];
        oB.multiplyToRef(GB, cB), cB.multiplyToRef(vB, cB), cB.invert();
        const nB = kB.e.LastCreatedEngine,
          hB = JB.m.rN[0];
        hB.x = BB / ZB * 2 - 1, hB.y = -(IB / TB * 2 - 1), hB.z = nB?.iTB ? 1 : nB?.isNDCHalfZRange ? 0 : -1;
        const zB = JB.m.rN[1].cBB(hB.x, hB.y, 1 - 1e-8),
          FB = JB.m.rN[2],
          NB = JB.m.rN[3];
        JB.s.TransformCoordinatesToRef(hB, cB, FB), JB.s.TransformCoordinatesToRef(zB, cB, NB), this.origin.TY(FB), NB.subtractToRef(FB, this.direction), this.direction.normalize()
      }
    }

    function zB(BB, IB, ZB, TB, JB) {
      let oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const GB = hB.Zero();
      return FB(BB, IB, ZB, TB, GB, JB, oB), GB
    }

    function FB(BB, IB, ZB, TB, oB, GB) {
      let vB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        kB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const cB = BB.PN();
      if (!GB && !(GB = BB.activeCamera) && !(GB = BB.cameraToUseForPointers)) return BB;
      const nB = GB.viewport,
        hB = cB.getRenderHeight(),
        {
          x: zB,
          y: FB,
          width: NB,
          height: gB
        } = nB.toGlobal(cB.getRenderWidth(), hB),
        qB = 1 / cB.getHardwareScalingLevel();
      return IB = IB * qB - zB, ZB = ZB * qB - (hB - FB - gB), oB.update(IB, ZB, NB, gB, TB || JB.b.IdentityReadOnly, vB ? JB.b.IdentityReadOnly : GB.getViewMatrix(), GB.getProjectionMatrix(), kB), BB
    }

    function NB(BB, IB, ZB, TB) {
      const JB = hB.Zero();
      return gB(BB, IB, ZB, JB, TB), JB
    }

    function gB(BB, IB, ZB, TB, oB) {
      if (!vB.e) return BB;
      const GB = BB.PN();
      if (!oB && !(oB = BB.activeCamera) && !(oB = BB.cameraToUseForPointers)) throw new Error("Active camera not set");
      const kB = oB.viewport,
        cB = GB.getRenderHeight(),
        {
          x: nB,
          y: hB,
          width: zB,
          height: FB
        } = kB.toGlobal(GB.getRenderWidth(), cB),
        NB = JB.b.Identity(),
        gB = 1 / GB.getHardwareScalingLevel();
      return IB = IB * gB - nB, ZB = ZB * gB - (cB - hB - FB), TB.update(IB, ZB, zB, FB, NB, NB, oB.getProjectionMatrix()), BB
    }

    function qB(BB, IB, ZB, TB, JB, oB, GB, vB) {
      return yB(BB, ZB, TB, IB(TB, ZB.enableDistantPicking), JB, oB, GB, vB)
    }

    function yB(BB, IB, ZB, TB, JB, oB, GB, vB) {
      const kB = IB.intersects(TB, JB, GB, oB, ZB, vB);
      return kB && kB.hit ? !JB && null != BB && kB.distance >= BB.distance ? null : kB : null
    }

    function UB(BB, IB) {
      return "InstancedLinesMesh" === BB || "LinesMesh" === BB ? IB.intersectionThreshold : 0
    }

    function WB(BB) {
      const IB = BB.getClassName();
      if ("GreasedLineMesh" === IB) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const ZB = BB.rawBoundingInfo;
      return {
        rawBoundingInfo: ZB,
        intersectionThreshold: ZB ? UB(IB, BB) : 0
      }
    }

    function dB(BB, IB, ZB, TB, JB) {
      const oB = BB(ZB, IB.enableDistantPicking);
      return oB.intersectsSphere(TB.ZJB, JB) && oB.intersectsBox(TB.boundingBox, JB) ? oB : null
    }

    function CB(BB, IB, ZB, TB, oB, GB) {
      let kB = null;
      const cB = !!(BB.activeCameras && BB.activeCameras.length > 1 && BB.cameraToUseForPointers !== BB.activeCamera),
        hB = BB.cameraToUseForPointers || BB.activeCamera,
        zB = nB.internalPickerForMesh || qB,
        FB = zB === qB;
      for (let vB = 0; vB < BB.meshes.length; vB++) {
        const nB = BB.meshes[vB];
        if (ZB) {
          if (!ZB(nB, -1)) continue
        } else if (!nB.isEnabled() || !nB.isVisible || !nB.tg) continue;
        const NB = cB && nB.isWorldMatrixCameraDependent(),
          gB = nB.computeWorldMatrix(NB, hB);
        if (nB.hasThinInstances && nB.DIB) {
          const BB = zB(kB, IB, nB, gB, !0, !0, GB);
          if (BB) {
            if (oB) return BB;
            const {
              rawBoundingInfo: vB,
              intersectionThreshold: cB
            } = WB(nB), hB = nB._thinInstanceDataStorage.matrixData;
            if (hB) {
              const BB = JB.m.Matrix[0],
                NB = JB.m.Matrix[1],
                qB = Math.min(nB.B3, hB.length >> 4);
              for (let UB = 0; UB < qB; UB++) {
                if (ZB && !ZB(nB, UB)) continue;
                JB.b.FromArrayToRef(hB, UB << 4, BB), BB.multiplyToRef(gB, NB);
                const qB = FB && vB ? dB(IB, nB, NB, vB, cB) : null;
                if (FB && vB && !qB) continue;
                const WB = FB && qB ? yB(kB, nB, NB, qB, TB, oB, GB, !0) : zB(kB, IB, nB, NB, TB, oB, GB, !0);
                if (WB && (kB = WB, kB.thinInstanceIndex = UB, TB)) return kB
              }
            }
          }
        } else {
          const BB = zB(kB, IB, nB, gB, TB, oB, GB);
          if (BB && (kB = BB, TB)) return kB
        }
      }
      return kB || new vB.e
    }

    function QB(BB, IB, ZB, TB) {
      if (!vB.e) return null;
      const oB = [],
        GB = !!(BB.activeCameras && BB.activeCameras.length > 1 && BB.cameraToUseForPointers !== BB.activeCamera),
        kB = BB.cameraToUseForPointers || BB.activeCamera,
        cB = nB.internalPickerForMesh || qB,
        hB = cB === qB;
      for (let vB = 0; vB < BB.meshes.length; vB++) {
        const nB = BB.meshes[vB];
        if (ZB) {
          if (!ZB(nB, -1)) continue
        } else if (!nB.isEnabled() || !nB.isVisible || !nB.tg) continue;
        const zB = GB && nB.isWorldMatrixCameraDependent(),
          FB = nB.computeWorldMatrix(zB, kB);
        if (nB.hasThinInstances && nB.DIB) {
          if (cB(null, IB, nB, FB, !0, !0, TB)) {
            const {
              rawBoundingInfo: BB,
              intersectionThreshold: GB
            } = WB(nB), vB = nB._thinInstanceDataStorage.matrixData;
            if (vB) {
              const kB = JB.m.Matrix[0],
                zB = JB.m.Matrix[1],
                NB = Math.min(nB.B3, vB.length >> 4);
              for (let gB = 0; gB < NB; gB++) {
                if (ZB && !ZB(nB, gB)) continue;
                JB.b.FromArrayToRef(vB, gB << 4, kB), kB.multiplyToRef(FB, zB);
                const NB = hB && BB ? dB(IB, nB, zB, BB, GB) : null;
                if (hB && BB && !NB) continue;
                const qB = hB && NB ? yB(null, nB, zB, NB, !1, !1, TB, !0) : cB(null, IB, nB, zB, !1, !1, TB, !0);
                qB && (qB.thinInstanceIndex = gB, oB.push(qB))
              }
            }
          }
        } else {
          const BB = cB(null, IB, nB, FB, !1, !1, TB);
          BB && oB.push(BB)
        }
      }
      return oB
    }

    function sB(BB, IB, ZB, TB, oB, GB) {
      if (!vB.e) return null;
      const kB = CB(BB, (TB => (BB._tempPickingRay || (BB._tempPickingRay = hB.Zero()), FB(BB, IB, ZB, TB, BB._tempPickingRay, GB || null), BB._tempPickingRay)), TB, oB, !0);
      return kB && (kB.ray = zB(BB, IB, ZB, JB.b.Identity(), GB || null)), kB
    }

    function wB(BB, IB, ZB, TB, oB, GB, vB) {
      const kB = CB(BB, ((TB, JB) => (BB._tempPickingRay || (BB._tempPickingRay = hB.Zero()), FB(BB, IB, ZB, TB, BB._tempPickingRay, GB || null, !1, JB), BB._tempPickingRay)), TB, oB, !1, vB);
      return kB && (kB.ray = zB(BB, IB, ZB, JB.b.Identity(), GB || null)), kB
    }

    function OB(BB, IB, ZB, TB, oB) {
      const GB = CB(BB, (ZB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = JB.b.Identity()), ZB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = hB.Zero()), hB.TransformToRef(IB, BB._pickWithRayInverseMatrix, BB._cachedRayForTransform), BB._cachedRayForTransform)), ZB, TB, !1, oB);
      return GB && (GB.ray = IB), GB
    }

    function YB(BB, IB, ZB, TB, JB, oB) {
      return QB(BB, (TB => zB(BB, IB, ZB, TB, JB || null)), TB, oB)
    }

    function iB(BB, IB, ZB, TB) {
      return QB(BB, (ZB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = JB.b.Identity()), ZB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = hB.Zero()), hB.TransformToRef(IB, BB._pickWithRayInverseMatrix, BB._cachedRayForTransform), BB._cachedRayForTransform)), ZB, TB)
    }

    function pB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        TB = arguments.length > 3 ? arguments[3] : void 0,
        oB = arguments.length > 4 ? arguments[4] : void 0;
      TB || (TB = BB.getWorldMatrix()), IB.length = ZB, oB ? IB.origin.TY(oB) : IB.origin.TY(BB.position);
      const GB = JB.m.rN[2];
      GB.set(0, 0, BB._scene.useRightHandedSystem ? -1 : 1);
      const vB = JB.m.rN[3];
      return JB.s.TransformNormalToRef(GB, TB, vB), JB.s.NormalizeToRef(vB, IB.direction), IB
    }

    function aB(BB, IB) {
      IB && (IB.prototype.getForwardRay = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        return pB(this, new hB(JB.s.Zero(), JB.s.Zero(), BB), BB, IB, ZB)
      }, IB.prototype.getForwardRayToRef = function(BB) {
        return pB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), BB && (cB.d._IsPickingAvailable = !0, BB.prototype.createPickingRay = function(BB, IB, ZB, TB) {
        return zB(this, BB, IB, ZB, TB, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    hB._TmpVector3 = (0, oB.b)(6, JB.s.Zero), hB._RayDistant = hB.Zero(), hB._Smallnum = 1e-8, hB._Rayl = 1e9
  },
  41582: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB.A
    });
    var TB = ZB(40148),
      JB = ZB(40269),
      oB = ZB(41584);
    let GB = !1;
    GB || (GB = !0, (0, oB.c)(TB.e, JB.c), TB.e.prototype.createPickingRayToRef = function(BB, IB, ZB, TB, JB) {
      let GB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        vB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, oB.l)(this, BB, IB, ZB, TB, JB, GB, vB)
    }, TB.e.prototype.createPickingRayInCameraSpace = function(BB, IB, ZB) {
      return (0, oB.h)(this, BB, IB, ZB)
    }, TB.e.prototype.createPickingRayInCameraSpaceToRef = function(BB, IB, ZB, TB) {
      return (0, oB.d)(this, BB, IB, ZB, TB)
    }, TB.e.prototype.pickWithBoundingInfo = function(BB, IB, ZB, TB, JB) {
      return (0, oB.s)(this, BB, IB, ZB, TB, JB)
    }, TB.e.prototype.TF = function(BB, IB, ZB, TB, JB, GB) {
      let vB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, oB.z)(this, BB, IB, ZB, TB, JB, GB, vB)
    }, TB.e.prototype.pickWithRay = function(BB, IB, ZB, TB) {
      return (0, oB.w)(this, BB, IB, ZB, TB)
    }, TB.e.prototype.multiPick = function(BB, IB, ZB, TB, JB) {
      return (0, oB.p)(this, BB, IB, ZB, TB, JB)
    }, TB.e.prototype.multiPickWithRay = function(BB, IB, ZB) {
      return (0, oB.o)(this, BB, IB, ZB)
    })
  },
  41590: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => nB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(37120),
      GB = ZB(40310),
      vB = ZB(41597),
      kB = ZB(40272),
      cB = ZB(37170);
    let nB = (() => {
        var BB;
        let IB, ZB, kB, cB, nB, hB, zB, FB, NB = vB.d,
          gB = [],
          qB = [],
          yB = [],
          UB = [],
          WB = [],
          dB = [],
          CB = [],
          QB = [],
          sB = [],
          wB = [],
          OB = [],
          YB = [],
          iB = [];
        return BB = class extends NB {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(BB) {
            this._shadowFrustumSize = BB, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(BB) {
            this._shadowOrthoScale = BB, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(BB) {
            this._orthoLeft = BB
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(BB) {
            this._orthoRight = BB
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(BB) {
            this._orthoTop = BB
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(BB) {
            this._orthoBottom = BB
          }
          constructor(BB, IB, ZB, JB) {
            super(BB, ZB, JB), this._shadowFrustumSize = ((0, TB.l)(this, gB), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, TB.l)(this, qB, !0), this.autoCalcShadowZBounds = ((0, TB.l)(this, yB), (0, TB.l)(this, UB, !1)), this._orthoLeft = ((0, TB.l)(this, WB), (0, TB.l)(this, dB, Number.MAX_VALUE)), this._orthoRight = ((0, TB.l)(this, CB), (0, TB.l)(this, QB, Number.MIN_VALUE)), this._orthoTop = ((0, TB.l)(this, sB), (0, TB.l)(this, wB, Number.MIN_VALUE)), this._orthoBottom = ((0, TB.l)(this, OB), (0, TB.l)(this, YB, Number.MAX_VALUE)), (0, TB.l)(this, iB), this.position = IB.scale(-1), this.direction = IB
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return GB.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(BB, IB, ZB) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(BB) : this._setDefaultAutoExtendShadowProjectionMatrix(BB, IB, ZB)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(BB) {
            const IB = this.JR().activeCamera;
            oB.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : IB ? IB.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : IB ? IB.maxZ : 1e4, BB, this.JR().PN().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(BB, IB, ZB) {
            const TB = this.JR().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const BB = oB.s.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let TB = Number.MAX_VALUE,
                JB = -Number.MAX_VALUE;
              for (let GB = 0; GB < ZB.length; GB++) {
                const vB = ZB[GB];
                if (!vB) continue;
                const kB = vB.qm().boundingBox;
                for (let ZB = 0; ZB < kB.vectorsWorld.length; ZB++) oB.s.TransformCoordinatesToRef(kB.vectorsWorld[ZB], IB, BB), BB.x < this._orthoLeft && (this._orthoLeft = BB.x), BB.y < this._orthoBottom && (this._orthoBottom = BB.y), BB.x > this._orthoRight && (this._orthoRight = BB.x), BB.y > this._orthoTop && (this._orthoTop = BB.y), this.autoCalcShadowZBounds && (BB.z < TB && (TB = BB.z), BB.z > JB && (JB = BB.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = TB, this._shadowMaxZ = JB)
            }
            const JB = this._orthoRight - this._orthoLeft,
              GB = this._orthoTop - this._orthoBottom,
              vB = void 0 !== this.shadowMinZ ? this.shadowMinZ : TB?.minZ || 0,
              kB = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : TB?.maxZ || 1e4,
              cB = this.JR().PN().iTB;
            oB.b.OrthoOffCenterLHToRef(this._orthoLeft - JB * this.shadowOrthoScale, this._orthoRight + JB * this.shadowOrthoScale, this._orthoBottom - GB * this.shadowOrthoScale, this._orthoTop + GB * this.shadowOrthoScale, cB ? kB : vB, cB ? vB : kB, BB, this.JR().PN().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(BB, IB) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, IB), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, IB), this)
          }
          transferToNodeMaterialEffect(BB, IB) {
            return this.computeTransformedInformation() ? (BB.setFloat3(IB, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (BB.setFloat3(IB, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(BB) {
            const IB = this._scene.PN();
            return !IB.iTB && IB.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(BB) {
            const IB = this._scene.PN();
            return IB.iTB && IB.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(BB, IB) {
            BB["DIRLIGHT" + IB] = !0
          }
        }, (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(NB[Symbol.metadata] ?? null) : void 0;
          IB = [(0, JB.C)()], ZB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], nB = [(0, JB.C)("orthoLeft")], hB = [(0, JB.C)("orthoRight")], zB = [(0, JB.C)("orthoTop")], FB = [(0, JB.C)("orthoBottom")], (0, TB.j)(BB, null, IB, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: BB => "shadowFrustumSize" in BB,
              get: BB => BB.shadowFrustumSize
            },
            metadata: oB
          }, null, gB), (0, TB.j)(BB, null, ZB, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "shadowOrthoScale" in BB,
              get: BB => BB.shadowOrthoScale
            },
            metadata: oB
          }, null, gB), (0, TB.j)(null, null, kB, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: BB => "autoUpdateExtends" in BB,
              get: BB => BB.autoUpdateExtends,
              set: (BB, IB) => {
                BB.autoUpdateExtends = IB
              }
            },
            metadata: oB
          }, qB, yB), (0, TB.j)(null, null, cB, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: BB => "autoCalcShadowZBounds" in BB,
              get: BB => BB.autoCalcShadowZBounds,
              set: (BB, IB) => {
                BB.autoCalcShadowZBounds = IB
              }
            },
            metadata: oB
          }, UB, WB), (0, TB.j)(null, null, nB, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoLeft" in BB,
              get: BB => BB._orthoLeft,
              set: (BB, IB) => {
                BB._orthoLeft = IB
              }
            },
            metadata: oB
          }, dB, CB), (0, TB.j)(null, null, hB, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoRight" in BB,
              get: BB => BB._orthoRight,
              set: (BB, IB) => {
                BB._orthoRight = IB
              }
            },
            metadata: oB
          }, QB, sB), (0, TB.j)(null, null, zB, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoTop" in BB,
              get: BB => BB._orthoTop,
              set: (BB, IB) => {
                BB._orthoTop = IB
              }
            },
            metadata: oB
          }, wB, OB), (0, TB.j)(null, null, FB, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoBottom" in BB,
              get: BB => BB._orthoBottom,
              set: (BB, IB) => {
                BB._orthoBottom = IB
              }
            },
            metadata: oB
          }, YB, iB), oB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          })
        })(), BB
      })(),
      hB = !1;
    hB || (hB = !0, kB.e.AddNodeConstructor("Light_Type_1", ((BB, IB) => () => new nB(BB, oB.s.Zero(), IB))), (0, cB.i)("BABYLON.DirectionalLight", nB))
  },
  41607: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => tI
    });
    var TB = ZB(38754),
      JB = ZB(37153),
      oB = ZB(37120),
      GB = ZB(40188),
      vB = ZB(41610),
      kB = ZB(37147),
      cB = ZB(40333),
      nB = ZB(37311),
      hB = ZB(38756),
      zB = ZB(38714),
      FB = ZB(37158);
    class NB {
      constructor() {
        this.direction1 = new oB.s(0, 1, 0), this.direction2 = new oB.s(0, 1, 0)
      }
      startDirectionFunction(BB, IB, ZB, TB) {
        const JB = (0, FB.RandomRange)(this.direction1.x, this.direction2.x),
          GB = (0, FB.RandomRange)(this.direction1.y, this.direction2.y),
          vB = (0, FB.RandomRange)(this.direction1.z, this.direction2.z);
        TB ? IB.cBB(JB, GB, vB) : oB.s.TransformNormalFromFloatsToRef(JB, GB, vB, BB, IB)
      }
      startPositionFunction(BB, IB, ZB, TB) {
        TB ? IB.cBB(0, 0, 0) : oB.s.TransformCoordinatesFromFloatsToRef(0, 0, 0, BB, IB)
      }
      clone() {
        const BB = new NB;
        return zB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        BB.setVector3("direction1", this.direction1), BB.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(BB) {
        BB.addUniform("direction1", 3), BB.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const BB = {};
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.HTB(), BB.direction2 = this.direction2.HTB(), BB
      }
      parse(BB) {
        oB.s.FromArrayToRef(BB.direction1, 0, this.direction1), oB.s.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
    class gB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = BB, this.radiusRange = IB, this.directionRandomizer = ZB
      }
      startDirectionFunction(BB, IB, ZB, TB) {
        const JB = ZB.position.subtract(BB.getTranslation()).normalize(),
          GB = (0, FB.RandomRange)(0, this.directionRandomizer),
          vB = (0, FB.RandomRange)(0, this.directionRandomizer),
          kB = (0, FB.RandomRange)(0, this.directionRandomizer);
        JB.x += GB, JB.y += vB, JB.z += kB, JB.normalize(), TB ? IB.TY(JB) : oB.s.TransformNormalFromFloatsToRef(JB.x, JB.y, JB.z, BB, IB)
      }
      startPositionFunction(BB, IB, ZB, TB) {
        const JB = this.radius - (0, FB.RandomRange)(0, this.radius * this.radiusRange),
          GB = (0, FB.RandomRange)(0, 1),
          vB = (0, FB.RandomRange)(0, 2 * Math.PI),
          kB = Math.acos(2 * GB - 1),
          cB = JB * Math.cos(vB) * Math.sin(kB),
          nB = JB * Math.cos(kB),
          hB = JB * Math.sin(vB) * Math.sin(kB);
        TB ? IB.cBB(cB, Math.abs(nB), hB) : oB.s.TransformCoordinatesFromFloatsToRef(cB, Math.abs(nB), hB, BB, IB)
      }
      clone() {
        const BB = new gB(this.radius, this.directionRandomizer);
        return zB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        BB.setFloat("radius", this.radius), BB.setFloat("radiusRange", this.radiusRange), BB.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(BB) {
        BB.addUniform("radius", 1), BB.addUniform("radiusRange", 1), BB.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const BB = {};
        return BB.type = this.getClassName(), BB.radius = this.radius, BB.radiusRange = this.radiusRange, BB.directionRandomizer = this.directionRandomizer, BB
      }
      parse(BB) {
        this.radius = BB.radius, this.radiusRange = BB.radiusRange, this.directionRandomizer = BB.directionRandomizer
      }
    }
    class qB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = BB, this.radiusRange = IB, this.directionRandomizer = ZB
      }
      startDirectionFunction(BB, IB, ZB, TB) {
        const JB = ZB.position.subtract(BB.getTranslation()).normalize(),
          GB = (0, FB.RandomRange)(0, this.directionRandomizer),
          vB = (0, FB.RandomRange)(0, this.directionRandomizer),
          kB = (0, FB.RandomRange)(0, this.directionRandomizer);
        JB.x += GB, JB.y += vB, JB.z += kB, JB.normalize(), TB ? IB.TY(JB) : oB.s.TransformNormalFromFloatsToRef(JB.x, JB.y, JB.z, BB, IB)
      }
      startPositionFunction(BB, IB, ZB, TB) {
        const JB = this.radius - (0, FB.RandomRange)(0, this.radius * this.radiusRange),
          GB = (0, FB.RandomRange)(0, 1),
          vB = (0, FB.RandomRange)(0, 2 * Math.PI),
          kB = Math.acos(2 * GB - 1),
          cB = JB * Math.cos(vB) * Math.sin(kB),
          nB = JB * Math.cos(kB),
          hB = JB * Math.sin(vB) * Math.sin(kB);
        TB ? IB.cBB(cB, nB, hB) : oB.s.TransformCoordinatesFromFloatsToRef(cB, nB, hB, BB, IB)
      }
      clone() {
        const BB = new qB(this.radius, this.directionRandomizer);
        return zB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        BB.setFloat("radius", this.radius), BB.setFloat("radiusRange", this.radiusRange), BB.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(BB) {
        BB.addUniform("radius", 1), BB.addUniform("radiusRange", 1), BB.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const BB = {};
        return BB.type = this.getClassName(), BB.radius = this.radius, BB.radiusRange = this.radiusRange, BB.directionRandomizer = this.directionRandomizer, BB
      }
      parse(BB) {
        this.radius = BB.radius, this.radiusRange = BB.radiusRange, this.directionRandomizer = BB.directionRandomizer
      }
    }
    class yB extends qB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new oB.s(0, 1, 0),
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oB.s(0, 1, 0);
        super(BB), this.direction1 = IB, this.direction2 = ZB
      }
      startDirectionFunction(BB, IB, ZB, TB) {
        const JB = (0, FB.RandomRange)(this.direction1.x, this.direction2.x),
          GB = (0, FB.RandomRange)(this.direction1.y, this.direction2.y),
          vB = (0, FB.RandomRange)(this.direction1.z, this.direction2.z);
        TB ? IB.cBB(JB, GB, vB) : oB.s.TransformNormalFromFloatsToRef(JB, GB, vB, BB, IB)
      }
      clone() {
        const BB = new yB(this.radius, this.direction1, this.direction2);
        return zB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        BB.setFloat("radius", this.radius), BB.setFloat("radiusRange", this.radiusRange), BB.setVector3("direction1", this.direction1), BB.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(BB) {
        BB.addUniform("radius", 1), BB.addUniform("radiusRange", 1), BB.addUniform("direction1", 3), BB.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const BB = super.serialize();
        return BB.direction1 = this.direction1.HTB(), BB.direction2 = this.direction2.HTB(), BB
      }
      parse(BB) {
        super.parse(BB), oB.s.FromArrayToRef(BB.direction1, 0, this.direction1), oB.s.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
    var UB = ZB(38712);
    class WB {
      get radius() {
        return this._radius
      }
      set radius(BB) {
        this._radius = BB, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(BB) {
        this._angle = BB, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = ZB, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = IB, this.radius = BB
      }
      startDirectionFunction(BB, IB, ZB, TB) {
        const JB = ZB.position.subtract(BB.getTranslation()).normalize(),
          GB = (0, FB.RandomRange)(0, this.directionRandomizer),
          vB = (0, FB.RandomRange)(0, this.directionRandomizer),
          kB = (0, FB.RandomRange)(0, this.directionRandomizer);
        JB.x += GB, JB.y += vB, JB.z += kB, JB.normalize(), TB ? IB.TY(JB) : oB.s.TransformNormalFromFloatsToRef(JB.x, JB.y, JB.z, BB, IB)
      }
      startPositionFunction(BB, IB, ZB, TB) {
        const JB = (0, FB.RandomRange)(0, 2 * Math.PI);
        let GB;
        this.emitFromSpawnPointOnly ? GB = 1e-4 : (GB = (0, FB.RandomRange)(0, this.heightRange), GB = 1 - GB * GB);
        let vB = this._radius - (0, FB.RandomRange)(0, this._radius * this.radiusRange);
        vB *= GB;
        const kB = vB * Math.sin(JB),
          cB = vB * Math.cos(JB),
          nB = GB * this._height;
        if (TB) return IB.x = kB, IB.y = nB, void(IB.z = cB);
        oB.s.TransformCoordinatesFromFloatsToRef(kB, nB, cB, BB, IB)
      }
      clone() {
        const BB = new WB(this._radius, this._angle, this.directionRandomizer);
        return zB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        BB.setFloat2("radius", this._radius, this.radiusRange), BB.setFloat("coneAngle", this._angle), BB.setFloat2("height", this._height, this.heightRange), BB.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(BB) {
        BB.addUniform("radius", 2), BB.addUniform("coneAngle", 1), BB.addUniform("height", 2), BB.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let BB = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (BB += "\n#define CONEEMITTERSPAWNPOINT"), BB
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const BB = {};
        return BB.type = this.getClassName(), BB.radius = this._radius, BB.angle = this._angle, BB.directionRandomizer = this.directionRandomizer, BB.radiusRange = this.radiusRange, BB.heightRange = this.heightRange, BB.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, BB
      }
      parse(BB) {
        this.radius = BB.radius, this.angle = BB.angle, this.directionRandomizer = BB.directionRandomizer, this.radiusRange = void 0 !== BB.radiusRange ? BB.radiusRange : 1, this.heightRange = void 0 !== BB.heightRange ? BB.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== BB.emitFromSpawnPointOnly && BB.emitFromSpawnPointOnly
      }
    }
    class dB extends WB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oB.s(0, 1, 0),
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oB.s(0, 1, 0);
        super(BB, IB), this.direction1 = ZB, this.direction2 = TB
      }
      startDirectionFunction(BB, IB, ZB, TB) {
        const JB = (0, FB.RandomRange)(this.direction1.x, this.direction2.x),
          GB = (0, FB.RandomRange)(this.direction1.y, this.direction2.y),
          vB = (0, FB.RandomRange)(this.direction1.z, this.direction2.z);
        TB ? IB.cBB(JB, GB, vB) : oB.s.TransformNormalFromFloatsToRef(JB, GB, vB, BB, IB)
      }
      clone() {
        const BB = new dB(this.radius, this.angle, this.direction1, this.direction2);
        return zB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        super.applyToShader(BB), BB.setVector3("direction1", this.direction1), BB.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(BB) {
        super.buildUniformLayout(BB), BB.addUniform("direction1", 3), BB.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const BB = super.serialize();
        return BB.direction1 = this.direction1.HTB(), BB.direction2 = this.direction2.HTB(), BB
      }
      parse(BB) {
        super.parse(BB), oB.s.FromArrayToRef(BB.direction1, 0, this.direction1), oB.s.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
    class CB {
      get mesh() {
        return this._mesh
      }
      set mesh(BB) {
        this._mesh !== BB && (this._mesh = BB, BB ? (this._indices = BB.MTB(), this._positions = BB.getVerticesData(GB.i.PositionKind), this._normals = BB.getVerticesData(GB.i.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = oB.s.Zero(), this._mesh = null, this.direction1 = new oB.s(0, 1, 0), this.direction2 = new oB.s(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = BB
      }
      startDirectionFunction(BB, IB, ZB, TB) {
        if (this.useMeshNormalsForDirection && this._normals) return void oB.s.TransformNormalToRef(this._storedNormal, BB, IB);
        const JB = (0, FB.RandomRange)(this.direction1.x, this.direction2.x),
          GB = (0, FB.RandomRange)(this.direction1.y, this.direction2.y),
          vB = (0, FB.RandomRange)(this.direction1.z, this.direction2.z);
        TB ? IB.cBB(JB, GB, vB) : oB.s.TransformNormalFromFloatsToRef(JB, GB, vB, BB, IB)
      }
      startPositionFunction(BB, IB, ZB, TB) {
        if (!this._indices || !this._positions) return;
        const JB = 3 * (Math.random() * (this._indices.length / 3) | 0),
          GB = Math.random(),
          vB = Math.random() * (1 - GB),
          kB = 1 - GB - vB,
          cB = this._indices[JB],
          nB = this._indices[JB + 1],
          hB = this._indices[JB + 2],
          zB = oB.m.rN[0],
          FB = oB.m.rN[1],
          NB = oB.m.rN[2],
          gB = oB.m.rN[3];
        oB.s.FromArrayToRef(this._positions, 3 * cB, zB), oB.s.FromArrayToRef(this._positions, 3 * nB, FB), oB.s.FromArrayToRef(this._positions, 3 * hB, NB), gB.x = GB * zB.x + vB * FB.x + kB * NB.x, gB.y = GB * zB.y + vB * FB.y + kB * NB.y, gB.z = GB * zB.z + vB * FB.z + kB * NB.z, TB ? IB.cBB(gB.x, gB.y, gB.z) : oB.s.TransformCoordinatesFromFloatsToRef(gB.x, gB.y, gB.z, BB, IB), this.useMeshNormalsForDirection && this._normals && (oB.s.FromArrayToRef(this._normals, 3 * cB, zB), oB.s.FromArrayToRef(this._normals, 3 * nB, FB), oB.s.FromArrayToRef(this._normals, 3 * hB, NB), this._storedNormal.x = GB * zB.x + vB * FB.x + kB * NB.x, this._storedNormal.y = GB * zB.y + vB * FB.y + kB * NB.y, this._storedNormal.z = GB * zB.z + vB * FB.z + kB * NB.z)
      }
      clone() {
        const BB = new CB(this.mesh);
        return zB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        BB.setVector3("direction1", this.direction1), BB.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(BB) {
        BB.addUniform("direction1", 3), BB.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const BB = {};
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.HTB(), BB.direction2 = this.direction2.HTB(), BB.meshId = this.mesh?.id, BB.useMeshNormalsForDirection = this.useMeshNormalsForDirection, BB
      }
      parse(BB, IB) {
        oB.s.FromArrayToRef(BB.direction1, 0, this.direction1), oB.s.FromArrayToRef(BB.direction2, 0, this.direction2), BB.meshId && IB && (this.mesh = IB.getLastMeshById(BB.meshId)), this.useMeshNormalsForDirection = BB.useMeshNormalsForDirection
      }
    }
    class QB {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(BB) {
        this._targetStopDuration !== BB && (this._targetStopDuration = BB)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(BB) {
        this._noiseTexture !== BB && (this._noiseTexture = BB, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(BB) {
        this._attractors.push(BB)
      }
      removeAttractor(BB) {
        const IB = this._attractors.indexOf(BB); - 1 !== IB && this._attractors.splice(IB, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(BB) {
        this._animationSheetEnabled !== BB && (this._animationSheetEnabled = BB)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(BB) {
        this._isAnimationSheetEnabled != BB && (this._isAnimationSheetEnabled = BB, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(BB) {
        this._useLogarithmicDepth = BB && this.JR().PN().getCaps().fragmentDepthSupported
      }
      JR() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(BB) {
        switch (BB) {
          case QB.BLENDMODE_MULTIPLYADD:
            return;
          case QB.BLENDMODE_ADD:
            BB = 1;
            break;
          case QB.BLENDMODE_ONEONE:
            BB = 6;
            break;
          case QB.BLENDMODE_STANDARD:
            BB = 2;
            break;
          case QB.BLENDMODE_MULTIPLY:
            BB = 4;
            break;
          case QB.BLENDMODE_SUBTRACT:
            BB = 3
        }
        this._engine.setAlphaMode(BB)
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
      addEmitRateGradient(BB, IB, ZB) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, BB, IB, ZB), this
      }
      removeEmitRateGradient(BB) {
        return this._removeFactorGradient(this._emitRateGradients, BB), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : oB.s.Zero()
      }
      set direction1(BB) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = BB)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : oB.s.Zero()
      }
      set direction2(BB) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = BB)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : oB.s.Zero()
      }
      set minEmitBox(BB) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = BB)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : oB.s.Zero()
      }
      set maxEmitBox(BB) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = BB)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(BB) {
        this._billboardMode !== BB && (this._billboardMode = BB, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(BB) {
        this._isBillboardBased !== BB && (this._isBillboardBased = BB, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(BB) {
        this._attachImageProcessingConfiguration(BB)
      }
      _attachImageProcessingConfiguration(BB) {
        BB !== this._imageProcessingConfiguration && (!BB && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = BB)
      }
      _reset() {}
      _addFactorGradient(BB, IB, ZB, JB) {
        const oB = new TB.j(IB, ZB, JB);
        BB.push(oB), BB.sort(((BB, IB) => BB.gradient < IB.gradient ? -1 : BB.gradient > IB.gradient ? 1 : 0))
      }
      _removeFactorGradient(BB, IB) {
        if (!BB) return;
        let ZB = 0;
        for (const TB of BB) {
          if (TB.gradient === IB) {
            BB.splice(ZB, 1);
            break
          }
          ZB++
        }
      }
      _removeGradientAndTexture(BB, IB, ZB) {
        if (!IB) return this;
        let TB = 0;
        for (const JB of IB) {
          if (JB.gradient === BB) {
            IB.splice(TB, 1);
            break
          }
          TB++
        }
        return ZB && ZB.dispose(), this
      }
      constructor(BB) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = oB.s.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new oB.s(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = QB.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new oB.p(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new oB.s(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = oB.s.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new nB.g(1, 1, 1, 1), this.color2 = new nB.g(1, 1, 1, 1), this.colorDead = new nB.g(0, 0, 0, 1), this.textureMask = new nB.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new cB.b, this.id = BB, this.name = BB
      }
      createPointEmitter(BB, IB) {
        const ZB = function(BB, IB) {
          const ZB = new NB;
          return ZB.direction1 = BB, ZB.direction2 = IB, ZB
        }(BB, IB);
        return this.particleEmitterType = ZB, ZB
      }
      createHemisphericEmitter() {
        const BB = function() {
          return new gB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = BB, BB
      }
      createSphereEmitter() {
        const BB = function() {
          return new qB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = BB, BB
      }
      createDirectedSphereEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new oB.s(0, 1, 0),
            ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oB.s(0, 1, 0);
          return new yB(BB, IB, ZB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new oB.s(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oB.s(0, 1, 0));
        return this.particleEmitterType = BB, BB
      }
      createCylinderEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new UB.d(BB, IB, ZB, TB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = BB, BB
      }
      createDirectedCylinderEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oB.s(0, 1, 0),
            JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new oB.s(0, 1, 0);
          return new UB.b(BB, IB, ZB, TB, JB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oB.s(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new oB.s(0, 1, 0));
        return this.particleEmitterType = BB, BB
      }
      createConeEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new WB(BB, IB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = BB, BB
      }
      createDirectedConeEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oB.s(0, 1, 0),
            TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oB.s(0, 1, 0);
          return new dB(BB, IB, ZB, TB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oB.s(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oB.s(0, 1, 0));
        return this.particleEmitterType = BB, BB
      }
      createBoxEmitter(BB, IB, ZB, TB) {
        const JB = new hB.c;
        return this.particleEmitterType = JB, this.direction1 = BB, this.direction2 = IB, this.minEmitBox = ZB, this.maxEmitBox = TB, JB
      }
      createMeshEmitter() {
        const BB = function() {
          return new CB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = BB, BB
      }
    }
    QB.BLENDMODE_ONEONE = 0, QB.BLENDMODE_STANDARD = 1, QB.BLENDMODE_ADD = 2, QB.BLENDMODE_MULTIPLY = 3, QB.BLENDMODE_MULTIPLYADD = 4, QB.BLENDMODE_SUBTRACT = -1;
    class sB {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new nB.g(0, 0, 0, 0), this.currentColor2 = new nB.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = oB.s.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class wB {
      constructor(BB) {
        this.particleSystem = BB, this.position = oB.s.Zero(), this.direction = oB.s.Zero(), this.color = new nB.g(0, 0, 0, 0), this.colorStep = new nB.g(0, 0, 0, 0), this.initialColor = new nB.g(0, 0, 0, 0), this.colorDead = new nB.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new oB.p(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new sB, this.id = wB._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let BB = this.age,
          IB = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === IB ? (IB = 1, BB = this._properties.randomCellOffset) : BB += this._properties.randomCellOffset);
        const ZB = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let TB;
        TB = this._properties.initialSpriteCellLoop ? (0, FB.Clamp)(BB * IB % this.lifeTime / this.lifeTime) : (0, FB.Clamp)(BB * IB / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + TB * ZB | 0
      }
      _inheritParticleInfoToSubEmitter(BB) {
        if (BB.particleSystem.emitter.position) {
          const IB = BB.particleSystem.emitter;
          if (IB.position.TY(this.position), BB.inheritDirection) {
            const BB = oB.m.rN[0];
            this.direction.normalizeToRef(BB), IB.setDirection(BB, 0, Math.PI / 2)
          }
        } else {
          BB.particleSystem.emitter.TY(this.position)
        }
        this.direction.scaleToRef(BB.inheritedVelocityAmount / 2, oB.m.rN[0]), BB.particleSystem._inheritedVelocityOffset.TY(oB.m.rN[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const BB of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(BB)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = wB._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(BB) {
        BB.position.TY(this.position), this._properties.initialDirection ? BB._properties.initialDirection ? BB._properties.initialDirection.TY(this._properties.initialDirection) : BB._properties.initialDirection = this._properties.initialDirection.clone() : BB._properties.initialDirection = null, BB.direction.TY(this.direction), this._properties.localPosition && (BB._properties.localPosition ? BB._properties.localPosition.TY(this._properties.localPosition) : BB._properties.localPosition = this._properties.localPosition.clone()), BB.color.TY(this.color), BB.colorStep.TY(this.colorStep), BB.initialColor.TY(this.initialColor), BB.colorDead.TY(this.colorDead), BB.lifeTime = this.lifeTime, BB.age = this.age, BB._properties.randomCellOffset = this._properties.randomCellOffset, BB.size = this.size, BB.scale.TY(this.scale), BB.angle = this.angle, BB.angularSpeed = this.angularSpeed, BB.particleSystem = this.particleSystem, BB.cellIndex = this.cellIndex, BB.id = this.id, BB._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (BB._properties.currentColorGradient = this._properties.currentColorGradient, BB._properties.currentColor1.TY(this._properties.currentColor1), BB._properties.currentColor2.TY(this._properties.currentColor2)), this._properties.currentSizeGradient && (BB._properties.currentSizeGradient = this._properties.currentSizeGradient, BB._properties.currentSize1 = this._properties.currentSize1, BB._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (BB._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, BB._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, BB._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (BB._properties.currentVelocityGradient = this._properties.currentVelocityGradient, BB._properties.currentVelocity1 = this._properties.currentVelocity1, BB._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (BB._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, BB._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, BB._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (BB._properties.currentDragGradient = this._properties.currentDragGradient, BB._properties.currentDrag1 = this._properties.currentDrag1, BB._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (BB._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, BB._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, BB._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (BB.remapData && this.remapData ? BB.remapData.TY(this.remapData) : BB.remapData = new oB.t(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2 ? (BB._properties.randomNoiseCoordinates1.TY(this._properties.randomNoiseCoordinates1), BB._properties.randomNoiseCoordinates2.TY(this._properties.randomNoiseCoordinates2)) : (BB._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), BB._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), BB.metadata = this.metadata
      }
    }
    wB._Count = 0;
    var OB = ZB(41124);
    class YB {
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
      constructor(BB, IB, ZB, TB) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = IB, this.J7 = BB, this._scene = ZB, this._host = TB, this._activeTargets = [], IB._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            AT: this._getCorrectLoopMode()
          }, this._animation.dataType === OB.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = oB.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const BB = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, BB)
        }
        if (this.J7 instanceof Array) {
          let BB = 0;
          for (const IB of this.J7) this._preparePath(IB, BB), this._getOriginalValues(BB), BB++;
          this._targetIsArray = !0
        } else this._preparePath(this.J7), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const JB = IB.getEvents();
        if (JB && JB.length > 0)
          for (const oB of JB) this._events.push(oB._clone());
        this._enableBlending = BB && BB.animationPropertiesOverride ? BB.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZB = this._animation.targetPropertyPath;
        if (ZB.length > 1) {
          let TB = BB;
          for (let BB = 0; BB < ZB.length - 1; BB++) {
            const IB = ZB[BB];
            if (TB = TB[IB], void 0 === TB) throw new Error(`Invalid property (${IB}) in property path (${ZB.join(".")})`)
          }
          this._targetPath = ZB[ZB.length - 1], this._activeTargets[IB] = TB
        } else this._targetPath = ZB[0], this._activeTargets[IB] = BB;
        if (void 0 === this._activeTargets[IB][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${ZB.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.J7 instanceof Array) {
            let BB = 0;
            for (const IB of this.J7) void 0 !== this._originalValue[BB] && this._setValue(IB, this._activeTargets[BB], this._originalValue[BB], -1, BB), BB++
          } else void 0 !== this._originalValue[0] && this._setValue(this.J7, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let BB = 0; BB < this._events.length; BB++) this._events[BB].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const BB = this._animation.runtimeAnimations.indexOf(this);
        BB > -1 && this._animation.runtimeAnimations.splice(BB, 1)
      }
      setValue(BB, IB) {
        if (this._targetIsArray)
          for (let ZB = 0; ZB < this.J7.length; ZB++) {
            const TB = this.J7[ZB];
            this._setValue(TB, this._activeTargets[ZB], BB, IB, ZB)
          } else this._setValue(this.J7, this._directTarget, BB, IB, 0)
      }
      _getOriginalValues() {
        let BB, IB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const ZB = this._activeTargets[IB];
        if (OB.b.InheritOriginalValueFromActiveAnimations) {
          const BB = this._scene._activeAnimatables;
          for (let TB = 0; TB < BB.length; TB++) {
            const JB = BB[TB]._runtimeAnimations;
            for (let BB = 0; BB < JB.length; BB++) {
              const TB = JB[BB];
              if (TB !== this && TB._targetPath === this._targetPath)
                for (let BB = 0; BB < TB._activeTargets.length; BB++)
                  if (TB._activeTargets[BB] === ZB && void 0 !== TB._originalValue[BB]) return void(TB._originalValue[BB] && TB._originalValue[BB].clone ? this._originalValue[IB] = TB._originalValue[BB].clone() : this._originalValue[IB] = TB._originalValue[BB])
            }
          }
        }
        BB = ZB.getLocalMatrix && "_matrix" === this._targetPath ? ZB.getLocalMatrix() : ZB[this._targetPath], BB && BB.clone ? this._originalValue[IB] = BB.clone() : this._originalValue[IB] = BB
      }
      _registerTargetForLateAnimationBinding(BB, IB) {
        const ZB = BB.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(ZB), ZB._lateAnimationHolders || (ZB._lateAnimationHolders = {}), ZB._lateAnimationHolders[BB.targetPath] || (ZB._lateAnimationHolders[BB.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: IB
        }), BB.isAdditive ? (ZB._lateAnimationHolders[BB.targetPath].additiveAnimations.push(BB), ZB._lateAnimationHolders[BB.targetPath].totalAdditiveWeight += BB.weight) : (ZB._lateAnimationHolders[BB.targetPath].animations.push(BB), ZB._lateAnimationHolders[BB.targetPath].totalWeight += BB.weight)
      }
      _setValue(BB, IB, ZB, TB, JB) {
        const GB = this._scene._animationWrites,
          vB = this._scene._animationWriteCount++;
        let kB = GB[vB];
        if (kB || (kB = GB[vB] = {
            runtimeAnimation: this,
            target: BB,
            weight: TB,
            additive: !1,
            blendingFactor: 1,
            Fq: !1
          }), kB.runtimeAnimation = this, kB.target = BB, kB.weight = TB, kB.additive = this.isAdditive, kB.Fq = !1, this._currentActiveTarget = IB, this._weight = TB, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const BB = IB[this._targetPath];
            BB.clone ? this._originalBlendValue = BB.clone() : this._originalBlendValue = BB
          }
          this._originalBlendValue.m ? OB.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? oB.b.DecomposeLerpToRef(this._originalBlendValue, ZB, this._blendingFactor, this._currentValue) : this._currentValue = oB.b.DecomposeLerp(this._originalBlendValue, ZB, this._blendingFactor) : this._currentValue ? oB.b.LerpToRef(this._originalBlendValue, ZB, this._blendingFactor, this._currentValue) : this._currentValue = oB.b.Lerp(this._originalBlendValue, ZB, this._blendingFactor) : this._currentValue = OB.b._UniversalLerp(this._originalBlendValue, ZB, this._blendingFactor);
          const TB = BB && BB.animationPropertiesOverride ? BB.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          kB.blendingFactor = this._blendingFactor, this._blendingFactor += TB
        } else kB.blendingFactor = 1, this._currentValue ? this._currentValue.TY ? this._currentValue.TY(ZB) : this._currentValue = ZB : this._currentValue = ZB?.clone ? ZB.clone() : ZB; - 1 !== TB ? this._registerTargetForLateAnimationBinding(this, this._originalValue[JB]) : this._animationState.AT === OB.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[JB], IB[this._targetPath]) : IB[this._targetPath] = this._originalValue[JB] + this._currentValue : IB[this._targetPath] = this._currentValue, BB.GZB && BB.GZB(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.J7 && this.J7.animationPropertiesOverride) {
          return "MorphTarget" === this.J7.getClassName?.() && null == this.J7._animationPropertiesOverride ? this._animation.AT : this.J7.animationPropertiesOverride.AT
        }
        return this._animation.AT
      }
      goToFrame(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const ZB = this._animation.getKeys();
        BB < ZB[0].frame ? BB = ZB[0].frame : BB > ZB[ZB.length - 1].frame && (BB = ZB[ZB.length - 1].frame);
        const TB = this._events;
        if (TB.length)
          for (let oB = 0; oB < TB.length; oB++) TB[oB].onlyOnce || (TB[oB].isDone = TB[oB].frame < BB);
        this._currentFrame = BB;
        const JB = this._animation._interpolate(BB, this._animationState);
        this.setValue(JB, IB)
      }
      _prepareForSpeedRatioChange(BB) {
        const IB = this._previousElapsedTime * (this._animation.framePerSecond * BB) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - IB
      }
      animate(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const GB = this._animation,
          vB = GB.targetPropertyPath;
        if (!vB || vB.length < 1) return this._stopped = !0, !1;
        let kB, cB = !0;
        const nB = this._events;
        let hB;
        if (this._coreRuntimeAnimation) hB = ZB - IB, kB = this._coreRuntimeAnimation.currentFrame, this._currentFrame = kB, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let oB;
          (IB < this._minFrame || IB > this._maxFrame) && (IB = this._minFrame), (ZB < this._minFrame || ZB > this._maxFrame) && (ZB = this._maxFrame), hB = ZB - IB;
          let vB = BB * (GB.framePerSecond * JB) / 1e3 + this._absoluteFrameOffset,
            zB = 0,
            FB = !1;
          const NB = TB && this._animationState.AT === OB.b.ANIMATIONLOOPMODE_YOYO;
          if (NB) {
            const BB = (vB - IB) / hB,
              ZB = Math.sin(BB * Math.PI);
            vB = Math.abs(ZB) * hB + IB;
            const TB = ZB >= 0 ? 1 : -1;
            this._yoyoDirection !== TB && (FB = !0), this._yoyoDirection = TB
          }
          if (this._previousElapsedTime = BB, this._previousAbsoluteFrame = vB, !TB && ZB >= IB && (vB >= hB && JB > 0 || vB <= 0 && JB < 0)) cB = !1, zB = GB.evaluate(ZB);
          else if (!TB && IB >= ZB && (vB <= hB && JB < 0 || vB >= 0 && JB > 0)) cB = !1, zB = GB.evaluate(IB);
          else if (this._animationState.AT !== OB.b.ANIMATIONLOOPMODE_CYCLE) {
            const BB = ZB.toString() + IB.toString();
            if (!this._offsetsCache[BB]) {
              this._animationState.repeatCount = 0, this._animationState.AT = OB.b.ANIMATIONLOOPMODE_CYCLE;
              const TB = GB._interpolate(IB, this._animationState),
                JB = GB._interpolate(ZB, this._animationState);
              switch (this._animationState.AT = this._getCorrectLoopMode(), GB.dataType) {
                case OB.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[BB] = JB - TB;
                  break;
                case OB.b.ANIMATIONTYPE_QUATERNION:
                case OB.b.ANIMATIONTYPE_VECTOR3:
                case OB.b.ANIMATIONTYPE_VECTOR2:
                case OB.b.ANIMATIONTYPE_SIZE:
                case OB.b.ANIMATIONTYPE_COLOR3:
                case OB.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[BB] = JB.subtract(TB)
              }
              this._highLimitsCache[BB] = JB
            }
            zB = this._highLimitsCache[BB], oB = this._offsetsCache[BB]
          }
          if (void 0 === oB) switch (GB.dataType) {
            case OB.b.ANIMATIONTYPE_FLOAT:
              oB = 0;
              break;
            case OB.b.ANIMATIONTYPE_QUATERNION:
              oB = OB.j;
              break;
            case OB.b.ANIMATIONTYPE_VECTOR3:
              oB = OB.s;
              break;
            case OB.b.ANIMATIONTYPE_VECTOR2:
              oB = OB.p;
              break;
            case OB.b.ANIMATIONTYPE_SIZE:
              oB = OB.m;
              break;
            case OB.b.ANIMATIONTYPE_COLOR3:
              oB = OB.h;
              break;
            case OB.b.ANIMATIONTYPE_COLOR4:
              oB = OB.i
          }
          const gB = this._host ? this._host.syncRoot : null;
          let qB, yB = this._playbackFrames,
            UB = !1;
          if (gB) {
            const BB = gB.toFrame - gB.fromFrame,
              ZB = gB.masterFrame,
              TB = (ZB - gB.fromFrame) / BB;
            kB = IB + hB * TB;
            const JB = gB.getAnimations()[0];
            if (JB && 0 !== BB) {
              const BB = hB * TB,
                IB = JB._playbackTo - JB._playbackFrom;
              if (0 !== IB && JB._playbackFrom <= gB.fromFrame && JB._playbackTo >= gB.toFrame) {
                yB = hB * Math.round((JB._playbackFrames - (JB._currentFrame - JB._playbackFrom)) / IB) + BB
              } else UB = (ZB - this._playbackSyncMasterFrame) * (JB._playbackFrames - this._playbackSyncMasterPlayed) < 0, yB = BB;
              UB = UB || JB._playbackJumped, this._playbackSyncMasterPlayed = JB._playbackFrames, this._playbackSyncMasterFrame = ZB
            }
          } else kB = vB > 0 && IB > ZB || vB < 0 && IB < ZB ? cB && 0 !== hB ? ZB + vB % hB : IB : cB && 0 !== hB ? IB + vB % hB : ZB;
          if (!NB && (JB > 0 && this.currentFrame > kB || JB < 0 && this.currentFrame < kB) || NB && FB) {
            this._onLoop();
            for (let BB = 0; BB < nB.length; BB++) nB[BB].onlyOnce || (nB[BB].isDone = !1);
            this._animationState.key = JB > 0 ? 0 : GB.getKeys().length - 1
          }
          if (this._currentFrame = kB, this._animationState.repeatCount = 0 === hB ? 0 : vB / hB | 0, this._animationState.highLimitValue = zB, this._animationState.offsetValue = oB, this._playbackFrom = IB, this._playbackTo = ZB, this._playbackJumped = UB, this._playbackSyncRoot = gB, gB) qB = yB;
          else if (cB) qB = NB ? kB === IB && vB === ZB ? hB : kB - IB : vB;
          else {
            const BB = 0 !== hB ? Math.floor(this._playbackFrames / hB) : 0;
            qB = (kB === ZB ? BB + 1 : BB) * hB
          }
          this._playbackFrames = qB, this._playbackProgress = this._animationState.AT === OB.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? hB : qB
        }
        const zB = GB._interpolate(kB, this._animationState);
        if (this.setValue(zB, oB), nB.length)
          for (let FB = 0; FB < nB.length; FB++)
            if (hB >= 0 && kB >= nB[FB].frame && nB[FB].frame >= IB || hB < 0 && kB <= nB[FB].frame && nB[FB].frame <= IB) {
              const BB = nB[FB];
              BB.isDone || (BB.onlyOnce && (nB.splice(FB, 1), FB--), BB.isDone = !0, BB.action(kB))
            } return cB || (this._stopped = !0), cB
      }
    }
    var iB = ZB(39959);
    class pB {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(BB) {
        this._weight = -1 !== BB ? Math.min(Math.max(BB, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(BB) {
        for (let IB = 0; IB < this._runtimeAnimations.length; IB++) {
          this._runtimeAnimations[IB]._prepareForSpeedRatioChange(BB)
        }
        this._speedRatio = BB, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          GB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          vB = arguments.length > 6 ? arguments[6] : void 0,
          kB = arguments.length > 7 ? arguments[7] : void 0,
          cB = arguments.length > 8 ? arguments[8] : void 0,
          nB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          hB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = IB, this.fromFrame = ZB, this.toFrame = TB, this.loopAnimation = oB, this.onAnimationEnd = vB, this.onAnimationLoop = cB, this.isAdditive = nB, this.playOrder = hB, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.iW = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new JB.b, this.onAnimationLoopObservable = new JB.b, this._scene = BB, kB && this.appendAnimations(IB, kB), this._speedRatio = GB, BB._activeAnimatables.push(this)
      }
      syncWith(BB) {
        if (this._syncRoot = BB, BB) {
          const BB = this._scene._activeAnimatables.indexOf(this);
          BB > -1 && (this._scene._activeAnimatables.splice(BB, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(BB, IB) {
        for (let ZB = 0; ZB < IB.length; ZB++) {
          const TB = IB[ZB],
            JB = new YB(BB, TB, this._scene, this);
          JB._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(JB)
        }
      }
      getAnimationByTargetProperty(BB) {
        const IB = this._runtimeAnimations;
        for (let ZB = 0; ZB < IB.length; ZB++)
          if (IB[ZB].animation.targetProperty === BB) return IB[ZB].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(BB) {
        const IB = this._runtimeAnimations;
        for (let ZB = 0; ZB < IB.length; ZB++)
          if (IB[ZB].animation.targetProperty === BB) return IB[ZB];
        return null
      }
      reset() {
        const BB = this._runtimeAnimations;
        for (let IB = 0; IB < BB.length; IB++) BB[IB].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(BB) {
        const IB = this._runtimeAnimations;
        for (let ZB = 0; ZB < IB.length; ZB++) IB[ZB].animation.enableBlending = !0, IB[ZB].animation.blendingSpeed = BB
      }
      disableBlending() {
        const BB = this._runtimeAnimations;
        for (let IB = 0; IB < BB.length; IB++) BB[IB].animation.enableBlending = !1
      }
      goToFrame(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = this._runtimeAnimations;
        if (ZB[0]) {
          const IB = ZB[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? ZB[0].currentFrame;
          const TB = 0 === this.speedRatio ? 0 : (BB - this._frameToSyncFromJump) / IB * 1e3 / this.speedRatio;
          this._manualJumpDelay = -TB
        }
        for (let TB = 0; TB < ZB.length; TB++) ZB[TB].goToFrame(BB, IB ? this._weight : -1);
        this._goToFrame = BB
      }
      get paused() {
        return this.iW
      }
      pause() {
        this.iW || (this.iW = !0)
      }
      restart() {
        this.iW = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (BB || IB) {
          const JB = this._scene._activeAnimatables.indexOf(this);
          if (JB > -1) {
            const oB = this._runtimeAnimations;
            for (let ZB = oB.length - 1; ZB >= 0; ZB--) {
              const TB = oB[ZB];
              BB && TB.animation.name != BB || (IB && !IB(TB.target) || (TB.dispose(), oB.splice(ZB, 1)))
            }
            0 == oB.length && (ZB || this._scene._activeAnimatables.splice(JB, 1), TB || this._raiseOnAnimationEnd())
          }
        } else {
          const BB = this._scene._activeAnimatables.indexOf(this);
          if (BB > -1) {
            ZB || this._scene._activeAnimatables.splice(BB, 1);
            const IB = this._runtimeAnimations;
            for (let BB = 0; BB < IB.length; BB++) IB[BB].dispose();
            this._runtimeAnimations.length = 0, TB || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((BB => {
          this.onAnimationEndObservable.add((() => {
            BB(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(BB) {
        if (this.iW) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = BB), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = BB, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += BB - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !pB.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let IB = !1;
        const ZB = this._runtimeAnimations;
        let TB;
        for (TB = 0; TB < ZB.length; TB++) {
          const JB = ZB[TB].animate(BB - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          IB = IB || JB
        }
        if (this.animationStarted = IB, !IB) {
          if (this.disposeOnEnd)
            for (TB = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(TB, 1), TB = 0; TB < ZB.length; TB++) ZB[TB].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return IB
      }
    }

    function aB(BB) {
      if (0 === BB.totalWeight && 0 === BB.totalAdditiveWeight) return BB.originalValue;
      let IB = 1;
      const ZB = oB.m.rN[0],
        TB = oB.m.rN[1],
        JB = oB.m.Quaternion[0];
      let GB = 0;
      const vB = BB.animations[0],
        kB = BB.originalValue;
      let cB, nB = !1;
      if (BB.totalWeight < 1) cB = 1 - BB.totalWeight, kB.decompose(TB, JB, ZB);
      else {
        if (GB = 1, IB = BB.totalWeight, cB = vB.weight / IB, 1 == cB) {
          if (!BB.totalAdditiveWeight) return vB.currentValue;
          nB = !0
        }
        vB.currentValue.decompose(TB, JB, ZB)
      }
      if (!nB) {
        TB.scaleInPlace(cB), ZB.scaleInPlace(cB), JB.scaleInPlace(cB);
        for (let vB = GB; vB < BB.animations.length; vB++) {
          const GB = BB.animations[vB];
          if (0 === GB.weight) continue;
          cB = GB.weight / IB;
          const kB = oB.m.rN[2],
            nB = oB.m.rN[3],
            hB = oB.m.Quaternion[1];
          GB.currentValue.decompose(nB, hB, kB), nB.scaleAndAddToRef(cB, TB), hB.scaleAndAddToRef(oB.f.Dot(JB, hB) > 0 ? cB : -cB, JB), kB.scaleAndAddToRef(cB, ZB)
        }
        JB.normalize()
      }
      for (let zB = 0; zB < BB.additiveAnimations.length; zB++) {
        const IB = BB.additiveAnimations[zB];
        if (0 === IB.weight) continue;
        const GB = oB.m.rN[2],
          vB = oB.m.rN[3],
          kB = oB.m.Quaternion[1];
        IB.currentValue.decompose(vB, kB, GB), vB.multiplyToRef(TB, vB), oB.s.LerpToRef(TB, vB, IB.weight, TB), JB.multiplyToRef(kB, kB), oB.f.SlerpToRef(JB, kB, IB.weight, JB), GB.scaleAndAddToRef(IB.weight, ZB)
      }
      const hB = vB ? vB._animationState.workValue : oB.m.Matrix[0].clone();
      return oB.b.ComposeToRef(TB, JB, ZB, hB), hB
    }

    function HB(BB, IB) {
      if (0 === BB.totalWeight && 0 === BB.totalAdditiveWeight) return IB;
      const ZB = BB.animations[0],
        TB = BB.originalValue;
      let JB = IB;
      if (0 === BB.totalWeight && BB.totalAdditiveWeight > 0) JB.TY(TB);
      else if (1 === BB.animations.length) {
        if (oB.f.SlerpToRef(TB, ZB.currentValue, Math.min(1, BB.totalWeight), JB), 0 === BB.totalAdditiveWeight) return JB
      } else if (BB.animations.length > 1) {
        let ZB, GB, vB = 1;
        if (BB.totalWeight < 1) {
          const IB = 1 - BB.totalWeight;
          ZB = [], GB = [], ZB.push(TB), GB.push(IB)
        } else {
          if (2 === BB.animations.length && (oB.f.SlerpToRef(BB.animations[0].currentValue, BB.animations[1].currentValue, BB.animations[1].weight / BB.totalWeight, IB), 0 === BB.totalAdditiveWeight)) return IB;
          ZB = [], GB = [], vB = BB.totalWeight
        }
        for (let IB = 0; IB < BB.animations.length; IB++) {
          const TB = BB.animations[IB];
          ZB.push(TB.currentValue), GB.push(TB.weight / vB)
        }
        let kB = 0;
        for (let BB = 0; BB < ZB.length;) BB ? (kB += GB[BB], oB.f.SlerpToRef(JB, ZB[BB], GB[BB] / kB, JB), BB++) : (oB.f.SlerpToRef(ZB[BB], ZB[BB + 1], GB[BB + 1] / (GB[BB] + GB[BB + 1]), IB), JB = IB, kB = GB[BB] + GB[BB + 1], BB += 2)
      }
      for (let GB = 0; GB < BB.additiveAnimations.length; GB++) {
        const IB = BB.additiveAnimations[GB];
        0 !== IB.weight && (JB.multiplyToRef(IB.currentValue, oB.m.Quaternion[0]), oB.f.SlerpToRef(JB, oB.m.Quaternion[0], IB.weight, JB))
      }
      return JB
    }

    function MB(BB, IB) {
      IB && (IB.prototype.copyAnimationRange = function(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new OB.b(this.name, "_matrix", BB.animations[0].framePerSecond, OB.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const oB = BB.animations[0].getRange(IB);
        if (!oB) return !1;
        const GB = oB.from,
          vB = oB.to,
          kB = BB.animations[0].getKeys(),
          cB = BB.length,
          nB = BB.getParent(),
          hB = this.getParent(),
          zB = TB && nB && cB && this.length && cB !== this.length,
          FB = zB && hB && nB ? hB.length / nB.length : 1,
          NB = TB && !hB && JB && (1 !== JB.x || 1 !== JB.y || 1 !== JB.z),
          gB = this.animations[0].getKeys();
        let qB, yB, UB;
        for (let WB = 0, dB = kB.length; WB < dB; WB++) qB = kB[WB], qB.frame >= GB && qB.frame <= vB && (TB ? (UB = qB.value.clone(), zB ? (yB = UB.getTranslation(), UB.setTranslation(yB.scaleInPlace(FB))) : NB && JB ? (yB = UB.getTranslation(), UB.setTranslation(yB.multiplyInPlace(JB))) : UB = qB.value) : UB = qB.value, gB.push({
          frame: qB.frame + ZB,
          value: UB
        }));
        return this.animations[0].createRange(IB, GB + ZB, vB + ZB), !0
      }), BB && (BB.prototype._animate = function(BB) {
        const IB = this._animationWrites,
          ZB = this._animationWriteCount;
        let TB = 0;
        for (let oB = this._animationStepWriteCount; oB < ZB; oB++) {
          const BB = IB[oB];
          BB.Fq && -1 === BB.weight || (BB.Fq = !0, IB[oB] = IB[TB], IB[TB] = BB, TB++)
        }
        for (let oB = TB; oB < ZB; oB++) {
          const BB = IB[oB];
          BB.runtimeAnimation = null, BB.target = null
        }
        if (this._animationWriteCount = TB, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const JB = iB.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = JB
        }
        this.deltaTime = void 0 !== BB ? BB : this.useConstantAnimationDeltaTime ? 16 : (JB - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = JB;
        const GB = this._activeAnimatables;
        if (0 === GB.length) return;
        this._animationTime += this.deltaTime;
        const vB = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let oB = 0; oB < GB.length; oB++) {
          const BB = GB[oB];
          !BB._animate(vB) && BB.disposeOnEnd && oB--
        }! function(BB) {
          if (BB._registeredForLateAnimationBindings.length) {
            for (let IB = 0; IB < BB._registeredForLateAnimationBindings.length; IB++) {
              const ZB = BB._registeredForLateAnimationBindings.data[IB];
              for (const BB in ZB._lateAnimationHolders) {
                const IB = ZB._lateAnimationHolders[BB],
                  TB = IB.animations[0],
                  JB = IB.originalValue;
                if (void 0 === JB || null === JB) continue;
                const GB = OB.b.AllowMatrixDecomposeForInterpolation && JB.m;
                let vB = ZB[BB];
                if (GB) vB = aB(IB);
                else if (void 0 !== JB.w) vB = HB(IB, vB || oB.f.Identity());
                else {
                  let BB = 0,
                    ZB = 1;
                  const oB = TB && TB._animationState.AT === OB.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (IB.totalWeight < 1) vB = oB ? JB.clone ? JB.clone() : JB : TB && JB.scale ? JB.scale(1 - IB.totalWeight) : TB ? JB * (1 - IB.totalWeight) : JB.clone ? JB.clone() : JB;
                  else if (TB) {
                    ZB = IB.totalWeight;
                    const GB = TB.weight / ZB;
                    vB = 1 !== GB ? TB.currentValue.scale ? TB.currentValue.scale(GB) : TB.currentValue * GB : (IB.animations.length > 1 || IB.additiveAnimations.length > 0) && TB.currentValue.clone ? TB.currentValue.clone() : TB.currentValue, oB && (vB.addToRef ? vB.addToRef(JB, vB) : vB += JB), BB = 1
                  }
                  for (let TB = BB; TB < IB.animations.length; TB++) {
                    const BB = IB.animations[TB],
                      JB = BB.weight / ZB;
                    JB && (BB.currentValue.scaleAndAddToRef ? BB.currentValue.scaleAndAddToRef(JB, vB) : vB += BB.currentValue * JB)
                  }
                  for (let TB = 0; TB < IB.additiveAnimations.length; TB++) {
                    const BB = IB.additiveAnimations[TB],
                      ZB = BB.weight;
                    ZB && (BB.currentValue.scaleAndAddToRef ? BB.currentValue.scaleAndAddToRef(ZB, vB) : vB += BB.currentValue * ZB)
                  }
                }
                ZB[BB] = vB
              }
              ZB._lateAnimationHolders = {}
            }
            BB._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, BB.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((BB, IB) => BB.playOrder - IB.playOrder))
      }, BB.prototype.beginWeightedAnimation = function(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          JB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          GB = arguments.length > 6 ? arguments[6] : void 0,
          vB = arguments.length > 7 ? arguments[7] : void 0,
          kB = arguments.length > 8 ? arguments[8] : void 0,
          cB = arguments.length > 9 ? arguments[9] : void 0,
          nB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const hB = this.beginAnimation(BB, IB, ZB, JB, oB, GB, vB, !1, kB, cB, nB);
        return hB.weight = TB, hB
      }, BB.prototype.beginAnimation = function(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          oB = arguments.length > 5 ? arguments[5] : void 0,
          GB = arguments.length > 6 ? arguments[6] : void 0,
          vB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          kB = arguments.length > 8 ? arguments[8] : void 0,
          cB = arguments.length > 9 ? arguments[9] : void 0,
          nB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (JB < 0) {
          const BB = IB;
          IB = ZB, ZB = BB, JB = -JB
        }
        IB > ZB && (JB = -JB), vB && this.stopAnimation(BB, void 0, kB), GB || (GB = new pB(this, BB, IB, ZB, TB, JB, oB, void 0, cB, nB));
        const hB = !kB || kB(BB);
        if (BB.animations && hB && GB.appendAnimations(BB, BB.animations), BB.getAnimatables) {
          const nB = BB.getAnimatables();
          for (let BB = 0; BB < nB.length; BB++) this.beginAnimation(nB[BB], IB, ZB, TB, JB, oB, GB, vB, kB, cB)
        }
        return GB.reset(), GB
      }, BB.prototype.beginHierarchyAnimation = function(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          GB = arguments.length > 6 ? arguments[6] : void 0,
          vB = arguments.length > 7 ? arguments[7] : void 0,
          kB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          cB = arguments.length > 9 ? arguments[9] : void 0,
          nB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const hB = BB.getDescendants(IB),
          zB = [];
        zB.push(this.beginAnimation(BB, ZB, TB, JB, oB, GB, vB, kB, cB, void 0, nB));
        for (const FB of hB) zB.push(this.beginAnimation(FB, ZB, TB, JB, oB, GB, vB, kB, cB, void 0, nB));
        return zB
      }, BB.prototype.beginDirectAnimation = function(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (oB < 0) {
          const BB = ZB;
          ZB = TB, TB = BB, oB = -oB
        }
        ZB > TB && (oB = -oB);
        return new pB(this, BB, ZB, TB, JB, oB, arguments.length > 6 ? arguments[6] : void 0, IB, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, BB.prototype.beginDirectHierarchyAnimation = function(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        let cB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const nB = BB.getDescendants(IB),
          hB = [];
        hB.push(this.beginDirectAnimation(BB, ZB, TB, JB, oB, GB, vB, kB, cB));
        for (const zB of nB) hB.push(this.beginDirectAnimation(zB, ZB, TB, JB, oB, GB, vB, kB, cB));
        return hB
      }, BB.prototype.getAnimatableByTarget = function(BB) {
        for (let IB = 0; IB < this._activeAnimatables.length; IB++)
          if (this._activeAnimatables[IB].target === BB) return this._activeAnimatables[IB];
        return null
      }, BB.prototype.getAllAnimatablesByTarget = function(BB) {
        const IB = [];
        for (let ZB = 0; ZB < this._activeAnimatables.length; ZB++) this._activeAnimatables[ZB].target === BB && IB.push(this._activeAnimatables[ZB]);
        return IB
      }, BB.prototype.stopAnimation = function(BB, IB, ZB) {
        const TB = this.getAllAnimatablesByTarget(BB);
        for (const JB of TB) JB.stop(IB, ZB)
      }, BB.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let BB = 0; BB < this._activeAnimatables.length; BB++) this._activeAnimatables[BB].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const BB of this.animationGroups) BB.stop()
      })
    }
    pB.ProcessPausedAnimatables = !1;
    var jB, PB = ZB(37131),
      RB = ZB(40272),
      rB = ZB(39931);
    class mB extends RB.e {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(BB) {
        (BB.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.TY(BB), this._markAsDirtyAndDecompose())
      }
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          GB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          vB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(BB, IB.JR(), !1), this.name = BB, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = IB, this._localMatrix = TB?.clone() ?? oB.b.Identity(), this._restMatrix = JB ?? this._localMatrix.clone(), this._bindMatrix = GB ?? this._localMatrix.clone(), this._index = vB, this._absoluteMatrix = new oB.b, this._absoluteBindMatrix = new oB.b, this._absoluteInverseBindMatrix = new oB.b, this._finalMatrix = new oB.b, IB.bones.push(this), this.setParent(ZB, !1), this._updateAbsoluteBindMatrices()
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
      set parent(BB) {
        this.setParent(BB)
      }
      setParent(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== BB) {
          if (this.parent) {
            const BB = this.parent.children.indexOf(this); - 1 !== BB && this.parent.children.splice(BB, 1)
          }
          this._parentNode = BB, this.parent && this.parent.children.push(this), IB && this._updateAbsoluteBindMatrices(), this.GZB()
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
      setRestMatrix(BB) {
        this._restMatrix.TY(BB)
      }
      setRestPose(BB) {
        this.setRestMatrix(BB)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(BB) {
        this.T6(BB)
      }
      setBindPose(BB) {
        this.setBindMatrix(BB)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const BB = oB.m.rN[0],
            IB = oB.m.Quaternion[0],
            ZB = oB.m.rN[1];
          this.getRestMatrix().decompose(BB, IB, ZB), this._linkedTransformNode.position.TY(ZB), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? oB.f.Identity(), this._linkedTransformNode.rotationQuaternion.TY(IB), this._linkedTransformNode.ek.TY(BB)
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
      linkTransformNode(BB) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = BB, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.UIB
      }
      set position(BB) {
        this._decompose(), this.UIB.TY(BB), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(BB) {
        this.setRotation(BB)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(BB) {
        this.setRotationQuaternion(BB)
      }
      get ek() {
        return this.getScale()
      }
      set ek(BB) {
        this.setScale(BB)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = oB.s.Zero(), this._localRotation = oB.f.Zero(), this.UIB = oB.s.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.UIB))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, oB.b.ComposeToRef(this._localScaling, this._localRotation, this.UIB, this._localMatrix)) : this._needToCompose = !1)
      }
      T6(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.TY(BB), IB && this._updateAbsoluteBindMatrices(), ZB ? this._matrix = BB : this.GZB()
      }
      _updateAbsoluteBindMatrices(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (BB || (BB = this._bindMatrix), this.parent ? BB.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.TY(BB), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), IB)
          for (let ZB = 0; ZB < this.children.length; ZB++) this.children[ZB]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      GZB() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.GZB(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.GZB(), this._needToDecompose = !0
      }
      _updatePosition(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const JB = this.getLocalMatrix();
        if (0 == IB) TB ? (JB.addAtIndex(12, BB.x), JB.addAtIndex(13, BB.y), JB.addAtIndex(14, BB.z)) : JB.setTranslationFromFloats(BB.x, BB.y, BB.z);
        else {
          const IB = mB._TmpMats[0],
            GB = mB._TmpVecs[0];
          this.parent ? (IB.TY(this.parent.getAbsoluteMatrix()), ZB && IB.multiplyToRef(ZB.getWorldMatrix(), IB)) : oB.b.IdentityToRef(IB), TB && IB.setTranslationFromFloats(0, 0, 0), IB.invert(), oB.s.TransformCoordinatesToRef(BB, IB, GB), TB ? (JB.addAtIndex(12, GB.x), JB.addAtIndex(13, GB.y), JB.addAtIndex(14, GB.z)) : JB.setTranslationFromFloats(GB.x, GB.y, GB.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(BB, IB, ZB, !0)
      }
      setPosition(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(BB, IB, ZB, !1)
      }
      setAbsolutePosition(BB, IB) {
        this.setPosition(BB, 1, IB)
      }
      scale(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const JB = this.getLocalMatrix(),
          GB = mB._TmpMats[0];
        oB.b.ScalingToRef(BB, IB, ZB, GB), GB.multiplyToRef(JB, JB), GB.invert();
        for (const oB of this.children) {
          const TB = oB.getLocalMatrix();
          TB.multiplyToRef(GB, TB), TB.multiplyAtIndex(12, BB), TB.multiplyAtIndex(13, IB), TB.multiplyAtIndex(14, ZB), oB._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), TB)
          for (const oB of this.children) oB.scale(BB, IB, ZB, TB)
      }
      setScale(BB) {
        this._decompose(), this._localScaling.TY(BB), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(BB) {
        this._decompose(), BB.TY(this._localScaling)
      }
      setYawPitchRoll(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          JB = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === TB) {
          const GB = mB._TmpQuat;
          return oB.f.RotationYawPitchRollToRef(BB, IB, ZB, GB), void this.setRotationQuaternion(GB, TB, JB)
        }
        const GB = mB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(GB, JB)) return;
        const vB = mB._TmpMats[1];
        oB.b.RotationYawPitchRollToRef(BB, IB, ZB, vB), GB.multiplyToRef(vB, vB), this._rotateWithMatrix(vB, TB, JB)
      }
      rotate(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 ? arguments[3] : void 0;
        const JB = mB._TmpMats[0];
        JB.setTranslationFromFloats(0, 0, 0), oB.b.RotationAxisToRef(BB, IB, JB), this._rotateWithMatrix(JB, ZB, TB)
      }
      setAxisAngle(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === ZB) {
          const JB = mB._TmpQuat;
          return oB.f.RotationAxisToRef(BB, IB, JB), void this.setRotationQuaternion(JB, ZB, TB)
        }
        const JB = mB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(JB, TB)) return;
        const GB = mB._TmpMats[1];
        oB.b.RotationAxisToRef(BB, IB, GB), JB.multiplyToRef(GB, GB), this._rotateWithMatrix(GB, ZB, TB)
      }
      setRotation(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(BB.y, BB.x, BB.z, IB, ZB)
      }
      setRotationQuaternion(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === IB) return this._decompose(), this._localRotation.TY(BB), void this._markAsDirtyAndCompose();
        const TB = mB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(TB, ZB)) return;
        const JB = mB._TmpMats[1];
        oB.b.FromQuaternionToRef(BB, JB), TB.multiplyToRef(JB, JB), this._rotateWithMatrix(JB, IB, ZB)
      }
      setRotationMatrix(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === IB) {
          const TB = mB._TmpQuat;
          return oB.f.FromRotationMatrixToRef(BB, TB), void this.setRotationQuaternion(TB, IB, ZB)
        }
        const TB = mB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(TB, ZB)) return;
        const JB = mB._TmpMats[1];
        JB.TY(BB), TB.multiplyToRef(BB, JB), this._rotateWithMatrix(JB, IB, ZB)
      }
      _rotateWithMatrix(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const TB = this.getLocalMatrix(),
          JB = TB.m[12],
          oB = TB.m[13],
          GB = TB.m[14],
          vB = this.getParent(),
          kB = mB._TmpMats[3],
          cB = mB._TmpMats[4];
        vB && 1 == IB ? (ZB ? (kB.TY(ZB.getWorldMatrix()), vB.getAbsoluteMatrix().multiplyToRef(kB, kB)) : kB.TY(vB.getAbsoluteMatrix()), cB.TY(kB), cB.invert(), TB.multiplyToRef(kB, TB), TB.multiplyToRef(BB, TB), TB.multiplyToRef(cB, TB)) : 1 == IB && ZB ? (kB.TY(ZB.getWorldMatrix()), cB.TY(kB), cB.invert(), TB.multiplyToRef(kB, TB), TB.multiplyToRef(BB, TB), TB.multiplyToRef(cB, TB)) : TB.multiplyToRef(BB, TB), TB.setTranslationFromFloats(JB, oB, GB), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(BB, IB) {
        const ZB = mB._TmpMats[2];
        return BB.TY(this.getAbsoluteMatrix()), IB ? (BB.multiplyToRef(IB.getWorldMatrix(), BB), oB.b.ScalingToRef(IB.ek.x, IB.ek.y, IB.ek.z, ZB)) : oB.b.IdentityToRef(ZB), BB.invert(), !isNaN(BB.m[0]) && (ZB.multiplyAtIndex(0, this._scalingDeterminant), BB.multiplyToRef(ZB, BB), !0)
      }
      aU() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZB = oB.s.Zero();
        return this.getPositionToRef(BB, IB, ZB), ZB
      }
      getPositionToRef() {
        let BB = arguments.length > 1 ? arguments[1] : void 0,
          IB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const BB = this.getLocalMatrix();
          IB.x = BB.m[12], IB.y = BB.m[13], IB.z = BB.m[14]
        } else {
          const ZB = mB._TmpMats[0].TY(this.getAbsoluteMatrix());
          BB && ZB.multiplyToRef(BB.getWorldMatrix(), ZB), IB.x = ZB.m[12], IB.y = ZB.m[13], IB.z = ZB.m[14]
        }
      }
      getAbsolutePosition() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const IB = oB.s.Zero();
        return this.getPositionToRef(1, BB, IB), IB
      }
      getAbsolutePositionToRef(BB, IB) {
        this.getPositionToRef(1, BB, IB)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.TY(this._localMatrix);
          const BB = this._skeleton.getPoseMatrix();
          BB && this._absoluteMatrix.multiplyToRef(BB, this._absoluteMatrix)
        }
        const BB = this.children,
          IB = BB.length;
        for (let ZB = 0; ZB < IB; ZB++) BB[ZB].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      XV(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZB = oB.s.Zero();
        return this.getDirectionToRef(BB, IB, ZB), ZB
      }
      getDirectionToRef(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const TB = mB._TmpMats[0].TY(this.getAbsoluteMatrix());
        IB && TB.multiplyToRef(IB.getWorldMatrix(), TB), oB.s.TransformNormalToRef(BB, TB, ZB), ZB.normalize()
      }
      getRotation() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZB = oB.s.Zero();
        return this.getRotationToRef(BB, IB, ZB), ZB
      }
      getRotationToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const TB = mB._TmpQuat;
        this.getRotationQuaternionToRef(BB, IB, TB), TB.toEulerAnglesToRef(ZB)
      }
      getRotationQuaternion() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZB = oB.f.Identity();
        return this.getRotationQuaternionToRef(BB, IB, ZB), ZB
      }
      getRotationQuaternionToRef() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), IB.TY(this._localRotation);
        else {
          const ZB = mB._TmpMats[0],
            TB = this.getAbsoluteMatrix();
          BB ? TB.multiplyToRef(BB.getWorldMatrix(), ZB) : ZB.TY(TB), ZB.multiplyAtIndex(0, this._scalingDeterminant), ZB.multiplyAtIndex(1, this._scalingDeterminant), ZB.multiplyAtIndex(2, this._scalingDeterminant), ZB.decompose(void 0, IB, void 0)
        }
      }
      getRotationMatrix() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 ? arguments[1] : void 0;
        const ZB = oB.b.Identity();
        return this.getRotationMatrixToRef(BB, IB, ZB), ZB
      }
      getRotationMatrixToRef() {
        let BB = arguments.length > 1 ? arguments[1] : void 0,
          IB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(IB);
        else {
          const ZB = mB._TmpMats[0],
            TB = this.getAbsoluteMatrix();
          BB ? TB.multiplyToRef(BB.getWorldMatrix(), ZB) : ZB.TY(TB), ZB.multiplyAtIndex(0, this._scalingDeterminant), ZB.multiplyAtIndex(1, this._scalingDeterminant), ZB.multiplyAtIndex(2, this._scalingDeterminant), ZB.getRotationMatrixToRef(IB)
        }
      }
      getAbsolutePositionFromLocal(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZB = oB.s.Zero();
        return this.getAbsolutePositionFromLocalToRef(BB, IB, ZB), ZB
      }
      getAbsolutePositionFromLocalToRef(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const TB = mB._TmpMats[0].TY(this.getAbsoluteMatrix());
        IB && TB.multiplyToRef(IB.getWorldMatrix(), TB), oB.s.TransformCoordinatesToRef(BB, TB, ZB)
      }
      getLocalPositionFromAbsolute(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZB = oB.s.Zero();
        return this.getLocalPositionFromAbsoluteToRef(BB, IB, ZB), ZB
      }
      getLocalPositionFromAbsoluteToRef(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const TB = mB._TmpMats[0].TY(this.getAbsoluteMatrix());
        IB && TB.multiplyToRef(IB.getWorldMatrix(), TB), TB.invert(), oB.s.TransformCoordinatesToRef(BB, TB, ZB)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const BB = this._skeleton.bones.indexOf(this);
        if (-1 !== BB && this._skeleton.bones.splice(BB, 1), this._parentNode && this._parentNode.children) {
          const BB = this._parentNode.children,
            IB = BB.indexOf(this); - 1 !== IB && BB.splice(IB, 1)
        }
        super.dispose()
      }
    }
    mB._TmpVecs = (0, PB.b)(2, oB.s.Zero), mB._TmpQuat = oB.f.Identity(), mB._TmpMats = (0, PB.b)(5, oB.b.Identity), (jB = mB.prototype).copyAnimationRange ?? (jB.copyAnimationRange = (0, rB.j)("Bone", "copyAnimationRange"));
    var XB = ZB(40148);
    let LB = !1;
    var eB = ZB(40023),
      uB = ZB(40369),
      fB = ZB(40380),
      lB = ZB(40371),
      AB = ZB(40172);

    function tB(BB, IB) {
      const ZB = (0, FB.RandomRange)(0, 1);
      nB.g.LerpToRef(IB.color1, IB.color2, ZB, BB.color)
    }

    function bB(BB, IB) {
      IB.colorDead.subtractToRef(BB.color, IB._colorDiff), IB._colorDiff.scaleToRef(1 / BB.lifeTime, BB.colorStep)
    }

    function xB(BB, IB) {
      BB._properties.currentColorGradient = IB._colorGradients[0], BB._properties.currentColorGradient.getColorToRef(BB.color), BB._properties.currentColor1.TY(BB.color), IB._colorGradients.length > 1 ? IB._colorGradients[1].getColorToRef(BB._properties.currentColor2) : BB._properties.currentColor2.TY(BB.color)
    }

    function EB(BB, IB) {
      const ZB = IB._colorGradients;
      TB.n.GetCurrentGradient(IB._ratio, ZB, ((IB, ZB, TB) => {
        IB !== BB._properties.currentColorGradient && (BB._properties.currentColor1.TY(BB._properties.currentColor2), ZB.getColorToRef(BB._properties.currentColor2), BB._properties.currentColorGradient = IB), nB.g.LerpToRef(BB._properties.currentColor1, BB._properties.currentColor2, TB, BB.color), BB.color.a < 0 && (BB.color.a = 0)
      }))
    }

    function DB(BB, IB) {
      BB.colorStep.scaleToRef(IB._scaledUpdateSpeed, IB._scaledColorStep), BB.color.addInPlace(IB._scaledColorStep), BB.color.a < 0 && (BB.color.a = 0)
    }

    function KB(BB, IB) {
      TB.n.GetCurrentGradient(IB._ratio, IB._angularSpeedGradients, ((IB, ZB, TB) => {
        IB !== BB._properties.currentAngularSpeedGradient && (BB._properties.currentAngularSpeed1 = BB._properties.currentAngularSpeed2, BB._properties.currentAngularSpeed2 = ZB.getFactor(), BB._properties.currentAngularSpeedGradient = IB), BB.angularSpeed = (0, FB.Lerp)(BB._properties.currentAngularSpeed1, BB._properties.currentAngularSpeed2, TB)
      }))
    }

    function VB(BB, IB) {
      BB.angle += BB.angularSpeed * IB._scaledUpdateSpeed
    }

    function SB(BB, IB) {
      IB.particleEmitterType.startDirectionFunction(IB._emitterWorldMatrix, BB.direction, BB, IB.isLocal, IB._emitterInverseWorldMatrix)
    }

    function BI(BB, IB) {
      IB.startDirectionFunction(IB._emitterWorldMatrix, BB.direction, BB, IB.isLocal)
    }

    function II(BB, IB) {
      BB._properties.currentVelocityGradient = IB._velocityGradients[0], BB._properties.currentVelocity1 = BB._properties.currentVelocityGradient.getFactor(), IB._velocityGradients.length > 1 ? BB._properties.currentVelocity2 = IB._velocityGradients[1].getFactor() : BB._properties.currentVelocity2 = BB._properties.currentVelocity1
    }

    function ZI(BB, IB) {
      BB._properties.currentLimitVelocityGradient = IB._limitVelocityGradients[0], BB._properties.currentLimitVelocity1 = BB._properties.currentLimitVelocityGradient.getFactor(), IB._limitVelocityGradients.length > 1 ? BB._properties.currentLimitVelocity2 = IB._limitVelocityGradients[1].getFactor() : BB._properties.currentLimitVelocity2 = BB._properties.currentLimitVelocity1
    }

    function TI(BB, IB) {
      TB.n.GetCurrentGradient(IB._ratio, IB._velocityGradients, ((IB, ZB, TB) => {
        IB !== BB._properties.currentVelocityGradient && (BB._properties.currentVelocity1 = BB._properties.currentVelocity2, BB._properties.currentVelocity2 = ZB.getFactor(), BB._properties.currentVelocityGradient = IB), BB._properties.directionScale *= (0, FB.Lerp)(BB._properties.currentVelocity1, BB._properties.currentVelocity2, TB)
      }))
    }

    function JI(BB, IB) {
      TB.n.GetCurrentGradient(IB._ratio, IB._limitVelocityGradients, ((ZB, TB, JB) => {
        ZB !== BB._properties.currentLimitVelocityGradient && (BB._properties.currentLimitVelocity1 = BB._properties.currentLimitVelocity2, BB._properties.currentLimitVelocity2 = TB.getFactor(), BB._properties.currentLimitVelocityGradient = ZB);
        const oB = (0, FB.Lerp)(BB._properties.currentLimitVelocity1, BB._properties.currentLimitVelocity2, JB);
        BB.direction.length() > oB && BB.direction.scaleInPlace(IB.limitVelocityDamping)
      }))
    }

    function oI(BB) {
      BB.direction.scaleToRef(BB._properties.directionScale, BB._properties.scaledDirection)
    }

    function GI(BB, IB) {
      IB.particleEmitterType.startPositionFunction(IB._emitterWorldMatrix, BB.position, BB, IB.isLocal)
    }

    function vI(BB, IB) {
      IB.startPositionFunction(IB._emitterWorldMatrix, BB.position, BB, IB.isLocal)
    }

    function kI(BB, IB) {
      BB._properties.localPosition ? BB._properties.localPosition.TY(BB.position) : BB._properties.localPosition = BB.position.clone(), oB.s.TransformCoordinatesToRef(BB._properties.localPosition, IB._emitterWorldMatrix, BB.position)
    }

    function cI(BB, IB) {
      IB.isLocal && BB._properties.localPosition ? (BB._properties.localPosition.addInPlace(BB._properties.scaledDirection), oB.s.TransformCoordinatesToRef(BB._properties.localPosition, IB._emitterWorldMatrix, BB.position)) : BB.position.addInPlace(BB._properties.scaledDirection)
    }

    function nI(BB, IB) {
      BB._properties.currentDragGradient = IB._dragGradients[0], BB._properties.currentDrag1 = BB._properties.currentDragGradient.getFactor(), IB._dragGradients.length > 1 ? BB._properties.currentDrag2 = IB._dragGradients[1].getFactor() : BB._properties.currentDrag2 = BB._properties.currentDrag1
    }

    function hI(BB, IB) {
      TB.n.GetCurrentGradient(IB._ratio, IB._dragGradients, ((IB, ZB, TB) => {
        IB !== BB._properties.currentDragGradient && (BB._properties.currentDrag1 = BB._properties.currentDrag2, BB._properties.currentDrag2 = ZB.getFactor(), BB._properties.currentDragGradient = IB);
        const JB = (0, FB.Lerp)(BB._properties.currentDrag1, BB._properties.currentDrag2, TB);
        BB._properties.scaledDirection.scaleInPlace(1 - JB)
      }))
    }

    function zI(BB, IB) {
      BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2 ? (BB._properties.randomNoiseCoordinates1.cBB(Math.random(), Math.random(), Math.random()), BB._properties.randomNoiseCoordinates2.cBB(Math.random(), Math.random(), Math.random())) : (BB._properties.randomNoiseCoordinates1 = new oB.s(Math.random(), Math.random(), Math.random()), BB._properties.randomNoiseCoordinates2 = new oB.s(Math.random(), Math.random(), Math.random()))
    }

    function FI(BB, IB) {
      const ZB = IB._noiseTextureData,
        TB = IB._noiseTextureSize;
      if (ZB && TB && BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2) {
        const JB = IB._fetchR(BB._properties.randomNoiseCoordinates1.x, BB._properties.randomNoiseCoordinates1.y, TB.width, TB.height, ZB),
          GB = IB._fetchR(BB._properties.randomNoiseCoordinates1.z, BB._properties.randomNoiseCoordinates2.x, TB.width, TB.height, ZB),
          vB = IB._fetchR(BB._properties.randomNoiseCoordinates2.y, BB._properties.randomNoiseCoordinates2.z, TB.width, TB.height, ZB),
          kB = oB.m.rN[0],
          cB = oB.m.rN[1];
        kB.cBB((2 * JB - 1) * IB.noiseStrength.x, (2 * GB - 1) * IB.noiseStrength.y, (2 * vB - 1) * IB.noiseStrength.z), kB.scaleToRef(IB._tempScaledUpdateSpeed, cB), BB.direction.addInPlace(cB)
      }
    }

    function NI(BB, IB) {
      IB.gravity.scaleToRef(IB._tempScaledUpdateSpeed, IB._scaledGravity), BB.direction.addInPlace(IB._scaledGravity)
    }

    function gI(BB, IB) {
      BB.size = (0, FB.RandomRange)(IB.minSize, IB.maxSize), BB.scale.cBB((0, FB.RandomRange)(IB.minScaleX, IB.maxScaleX), (0, FB.RandomRange)(IB.minScaleY, IB.maxScaleY))
    }

    function qI(BB, IB) {
      BB._properties.currentSizeGradient = IB._sizeGradients[0], BB._properties.currentSize1 = BB._properties.currentSizeGradient.getFactor(), BB.size = BB._properties.currentSize1, IB._sizeGradients.length > 1 ? BB._properties.currentSize2 = IB._sizeGradients[1].getFactor() : BB._properties.currentSize2 = BB._properties.currentSize1, BB.scale.cBB((0, FB.RandomRange)(IB.minScaleX, IB.maxScaleX), (0, FB.RandomRange)(IB.minScaleY, IB.maxScaleY))
    }

    function yI(BB, IB) {
      const ZB = IB._actualFrame / IB.targetStopDuration;
      TB.n.GetCurrentGradient(ZB, IB._startSizeGradients, ((ZB, TB, JB) => {
        ZB !== IB._currentStartSizeGradient && (IB._currentStartSize1 = IB._currentStartSize2, IB._currentStartSize2 = TB.getFactor(), IB._currentStartSizeGradient = ZB);
        const oB = (0, FB.Lerp)(IB._currentStartSize1, IB._currentStartSize2, JB);
        BB.scale.scaleInPlace(oB)
      }))
    }

    function UI(BB, IB) {
      TB.n.GetCurrentGradient(IB._ratio, IB._sizeGradients, ((IB, ZB, TB) => {
        IB !== BB._properties.currentSizeGradient && (BB._properties.currentSize1 = BB._properties.currentSize2, BB._properties.currentSize2 = ZB.getFactor(), BB._properties.currentSizeGradient = IB), BB.size = (0, FB.Lerp)(BB._properties.currentSize1, BB._properties.currentSize2, TB)
      }))
    }

    function WI(BB, IB) {
      BB.remapData = new oB.t(0, 1, 0, 1)
    }

    function dI(BB, IB) {
      IB._colorRemapGradients && IB._colorRemapGradients.length > 0 && TB.n.GetCurrentGradient(IB._ratio, IB._colorRemapGradients, ((IB, ZB, TB) => {
        const JB = (0, FB.Lerp)(IB.factor1, ZB.factor1, TB),
          oB = (0, FB.Lerp)(IB.factor2, ZB.factor2, TB);
        BB.remapData.x = JB, BB.remapData.y = oB - JB
      })), IB._alphaRemapGradients && IB._alphaRemapGradients.length > 0 && TB.n.GetCurrentGradient(IB._ratio, IB._alphaRemapGradients, ((IB, ZB, TB) => {
        const JB = (0, FB.Lerp)(IB.factor1, ZB.factor1, TB),
          oB = (0, FB.Lerp)(IB.factor2, ZB.factor2, TB);
        BB.remapData.z = JB, BB.remapData.w = oB - JB
      }))
    }

    function CI(BB, IB) {
      const ZB = (0, FB.Clamp)(IB._actualFrame / IB.targetStopDuration);
      TB.n.GetCurrentGradient(ZB, IB._lifeTimeGradients, ((IB, TB) => {
        const JB = IB,
          oB = TB,
          GB = JB.getFactor(),
          vB = oB.getFactor(),
          kB = (ZB - JB.gradient) / (oB.gradient - JB.gradient);
        BB.lifeTime = (0, FB.Lerp)(GB, vB, kB)
      })), IB._emitPower = (0, FB.RandomRange)(IB.minEmitPower, IB.maxEmitPower)
    }

    function QI(BB, IB) {
      BB.lifeTime = (0, FB.RandomRange)(IB.minLifeTime, IB.maxLifeTime), IB._emitPower = (0, FB.RandomRange)(IB.minEmitPower, IB.maxEmitPower)
    }

    function sI(BB, IB) {
      0 === IB._emitPower ? (BB._properties.initialDirection ? BB._properties.initialDirection.TY(BB.direction) : BB._properties.initialDirection = BB.direction.clone(), BB.direction.set(0, 0, 0)) : (BB._properties.initialDirection = null, BB.direction.scaleInPlace(IB._emitPower)), BB.direction.addInPlace(IB._inheritedVelocityOffset)
    }

    function wI(BB, IB) {
      BB.angularSpeed = (0, FB.RandomRange)(IB.minAngularSpeed, IB.maxAngularSpeed), BB.angle = (0, FB.RandomRange)(IB.minInitialRotation, IB.maxInitialRotation)
    }

    function OI(BB, IB) {
      BB._properties.currentAngularSpeedGradient = IB._angularSpeedGradients[0], BB.angularSpeed = BB._properties.currentAngularSpeedGradient.getFactor(), BB._properties.currentAngularSpeed1 = BB.angularSpeed, IB._angularSpeedGradients.length > 1 ? BB._properties.currentAngularSpeed2 = IB._angularSpeedGradients[1].getFactor() : BB._properties.currentAngularSpeed2 = BB._properties.currentAngularSpeed1, BB.angle = (0, FB.RandomRange)(IB.minInitialRotation, IB.maxInitialRotation)
    }

    function YI(BB, IB) {
      BB._properties.initialStartSpriteCellId = IB.startSpriteCellID, BB._properties.initialEndSpriteCellId = IB.endSpriteCellID, BB._properties.initialSpriteCellLoop = IB.spriteCellLoop
    }

    function iI(BB, IB) {
      BB.previousItem = IB.previousItem, BB.nextItem = IB, IB.previousItem && (IB.previousItem.nextItem = BB), IB.previousItem = BB
    }

    function pI(BB, IB) {
      BB.previousItem = IB, BB.nextItem = IB.nextItem, IB.nextItem && (IB.nextItem.previousItem = BB), IB.nextItem = BB
    }

    function aI(BB) {
      BB.previousItem && (BB.previousItem.nextItem = BB.nextItem), BB.nextItem && (BB.nextItem.previousItem = BB.previousItem)
    }
    var HI = ZB(40431);
    class MI extends QB {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(BB) {
        this._startDirectionFunction !== BB && (this._startDirectionFunction = BB, this._directionCreation.process = BB ? BI : SB)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(BB) {
        this._startPositionFunction !== BB && (this._startPositionFunction = BB, this._positionCreation.process = BB ? vI : GI)
      }
      set onDispose(BB) {
        this._onDisposeObserver && this.oR.remove(this._onDisposeObserver), this._onDisposeObserver = this.oR.add(BB)
      }
      get mC() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(BB) {
        this._useRampGradients !== BB && (this._useRampGradients = BB, this._resetEffect(), BB ? (this._rampCreation = {
          process: WI,
          previousItem: null,
          nextItem: null
        }, pI(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: dI,
          previousItem: null,
          nextItem: null
        }, pI(this._remapGradientProcessing, this._gravityProcessing))) : (aI(this._rampCreation), aI(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(BB) {
        this._isLocal !== BB && (this._isLocal = BB, BB ? (this._isLocalCreation = {
          process: kI,
          previousItem: null,
          nextItem: null
        }, pI(this._isLocalCreation, this._positionCreation)) : aI(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(BB) {
        this._animationSheetEnabled !== BB && (this._animationSheetEnabled = BB, BB ? (this._sheetCreation = {
          process: YI,
          previousItem: null,
          nextItem: null
        }, pI(this._sheetCreation, this._colorDeadCreation)) : aI(this._sheetCreation), this._reset())
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
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[BB]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[BB] ?? this._customWrappers[0]
      }
      setCustomEffect(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[IB] = new uB.c(this._engine), this._customWrappers[IB].effect = BB, this._customWrappers[IB].drawContext && (this._customWrappers[IB].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new JB.b), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(BB) {
        if (this.noiseTexture !== BB) {
          if (this._noiseTexture = BB, !BB) return aI(this._noiseCreation), void aI(this._noiseProcessing);
          this._noiseCreation = {
            process: zI,
            previousItem: null,
            nextItem: null
          }, pI(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: FI,
            previousItem: null,
            nextItem: null
          }, pI(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          GB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          vB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          cB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        LB || (LB = !0, MB(XB.e, mB)), (0, eB.c)(), super(BB), this._emitterInverseWorldMatrix = oB.b.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new oB.s, this.oR = new JB.b, this.onStoppedObservable = new JB.b, this.onStartedObservable = new JB.b, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new nB.g(0, 0, 0, 0), this._colorDiff = new nB.g(0, 0, 0, 0), this._scaledGravity = oB.s.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = BB => {}, this.recycleParticle = BB => {
          const IB = this._particles.pop();
          IB !== BB && IB.copyTo(BB), IB.metadata = null, this._stockParticles.push(IB)
        }, this._createParticle = () => {
          let BB;
          return 0 !== this._stockParticles.length ? (BB = this._stockParticles.pop(), BB._reset()) : BB = new wB(this), this._prepareParticle(BB), BB
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = IB, this._epsilon = vB, ZB && "Scene" !== ZB.getClassName() ? (this._engine = ZB, this.defaultProjectionMatrix = oB.b.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = ZB || kB.e.LastCreatedScene, this._engine = this._scene.PN(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.DW.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: QI,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: GI,
          previousItem: null,
          nextItem: null
        }, pI(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: SB,
          previousItem: null,
          nextItem: null
        }, pI(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: sI,
          previousItem: null,
          nextItem: null
        }, pI(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: gI,
          previousItem: null,
          nextItem: null
        }, pI(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: wI,
          previousItem: null,
          nextItem: null
        }, pI(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: tB,
          previousItem: null,
          nextItem: null
        }, pI(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: bB,
          previousItem: null,
          nextItem: null
        }, pI(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, cB || (this._colorProcessing = {
          process: DB,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: VB,
          previousItem: null,
          nextItem: null
        }, pI(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: oI,
          previousItem: null,
          nextItem: null
        }, pI(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: cI,
          previousItem: null,
          nextItem: null
        }, pI(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: NI,
          previousItem: null,
          nextItem: null
        }, pI(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = GB, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new uB.c(this._engine)
        }, this._customWrappers[0].effect = TB, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new hB.c, this.updateFunction = BB => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((BB => {
            this._noiseTextureData = BB
          })));
          const IB = BB === this._particles;
          for (let ZB = 0; ZB < BB.length; ZB++) {
            const TB = BB[ZB];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const JB = TB.age;
            if (TB.age += this._tempScaledUpdateSpeed, TB.age > TB.lifeTime) {
              const BB = TB.age - JB,
                IB = TB.lifeTime - JB;
              this._tempScaledUpdateSpeed = IB * this._tempScaledUpdateSpeed / BB, TB.age = TB.lifeTime
            }
            this._ratio = TB.age / TB.lifeTime, TB._properties.directionScale = this._tempScaledUpdateSpeed;
            let oB = this._updateQueueStart;
            for (; oB;) oB.process(TB, this), oB = oB.nextItem;
            if (this._isAnimationSheetEnabled && !cB && TB.updateCellIndex(), TB._inheritParticleInfoToSubEmitters(), TB.age >= TB.lifeTime) {
              if (this._emitFromParticle(TB), TB._properties.attachedSubEmitters) {
                for (const BB of TB._properties.attachedSubEmitters) BB.particleSystem.disposeOnStop = !0, BB.particleSystem.stop();
                TB._properties.attachedSubEmitters = null
              }
              this.recycleParticle(TB), IB && ZB--
            } else;
          }
        }
      }
      serialize(BB) {
        throw new Error("Method not implemented.")
      }
      clone(BB, IB) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = CI : this._lifeTimeCreation.process = QI
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: yI,
          previousItem: null,
          nextItem: null
        }, pI(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (aI(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(BB) {
        this.targetStopDuration !== BB && (this._targetStopDuration = BB, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(BB, IB, ZB) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, BB, IB, ZB), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(BB) {
        return this._removeFactorGradient(this._lifeTimeGradients, BB), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(BB, IB, ZB) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = qI, this._sizeGradientProcessing = {
          process: UI,
          previousItem: null,
          nextItem: null
        }, iI(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, BB, IB, ZB), this
      }
      removeSizeGradient(BB) {
        return this._removeFactorGradient(this._sizeGradients, BB), 0 === this._sizeGradients?.length && (aI(this._sizeGradientProcessing), this._sizeCreation.process = gI), this
      }
      addColorRemapGradient(BB, IB, ZB) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, BB, IB, ZB), this
      }
      removeColorRemapGradient(BB) {
        return this._removeFactorGradient(this._colorRemapGradients, BB), this
      }
      addAlphaRemapGradient(BB, IB, ZB) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, BB, IB, ZB), this
      }
      removeAlphaRemapGradient(BB) {
        return this._removeFactorGradient(this._alphaRemapGradients, BB), this
      }
      addAngularSpeedGradient(BB, IB, ZB) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = OI, this._angularSpeedGradientProcessing = {
          process: KB,
          previousItem: null,
          nextItem: null
        }, iI(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, BB, IB, ZB), this
      }
      removeAngularSpeedGradient(BB) {
        return this._removeFactorGradient(this._angularSpeedGradients, BB), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = wI, aI(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(BB, IB, ZB) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: II,
          previousItem: null,
          nextItem: null
        }, pI(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: TI,
          previousItem: null,
          nextItem: null
        }, iI(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, BB, IB, ZB), this
      }
      removeVelocityGradient(BB) {
        return this._removeFactorGradient(this._velocityGradients, BB), 0 === this._velocityGradients?.length && (aI(this._velocityCreation), aI(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(BB, IB, ZB) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: ZI,
          previousItem: null,
          nextItem: null
        }, pI(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: JI,
          previousItem: null,
          nextItem: null
        }, pI(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, BB, IB, ZB), this
      }
      removeLimitVelocityGradient(BB) {
        return this._removeFactorGradient(this._limitVelocityGradients, BB), 0 === this._limitVelocityGradients?.length && (aI(this._limitVelocityCreation), aI(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(BB, IB, ZB) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: nI,
          previousItem: null,
          nextItem: null
        }, iI(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: hI,
          previousItem: null,
          nextItem: null
        }, iI(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, BB, IB, ZB), this
      }
      removeDragGradient(BB) {
        return this._removeFactorGradient(this._dragGradients, BB), 0 === this._dragGradients?.length && (aI(this._dragCreation), aI(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(BB, IB, ZB) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, BB, IB, ZB), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(BB) {
        return this._removeFactorGradient(this._startSizeGradients, BB), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const BB = new Uint8Array(4 * this._rawTextureWidth),
          IB = nB.k.Color3[0];
        for (let ZB = 0; ZB < this._rawTextureWidth; ZB++) {
          const JB = ZB / this._rawTextureWidth;
          TB.n.GetCurrentGradient(JB, this._rampGradients, ((TB, JB, oB) => {
            nB.c.LerpToRef(TB.color, JB.color, oB, IB), BB[4 * ZB] = 255 * IB.r, BB[4 * ZB + 1] = 255 * IB.g, BB[4 * ZB + 2] = 255 * IB.b, BB[4 * ZB + 3] = 255
          }))
        }
        this._rampGradientsTexture = vB.d.CreateRGBATexture(BB, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((BB, IB) => BB.gradient < IB.gradient ? -1 : BB.gradient > IB.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(BB, IB) {
        this._rampGradients || (this._rampGradients = []);
        const ZB = new TB.i(BB, IB);
        return this._rampGradients.push(ZB), this._syncRampGradientTexture(), this
      }
      removeRampGradient(BB) {
        return this._removeGradientAndTexture(BB, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(BB, IB, ZB) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = xB, this._colorProcessing.process = EB);
        const JB = new TB.e(BB, IB, ZB);
        return this._colorGradients.push(JB), this._colorGradients.sort(((BB, IB) => BB.gradient < IB.gradient ? -1 : BB.gradient > IB.gradient ? 1 : 0)), this
      }
      removeColorGradient(BB) {
        if (!this._colorGradients) return this;
        let IB = 0;
        for (const ZB of this._colorGradients) {
          if (ZB.gradient === BB) {
            this._colorGradients.splice(IB, 1);
            break
          }
          IB++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = tB, this._colorProcessing.process = DB), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const BB of this._drawWrappers)
            if (BB)
              for (const IB of BB) IB?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(BB, IB, ZB, TB, JB) {
        return JB[4 * (((BB = .5 * Math.abs(BB) + .5) * ZB % ZB | 0) + ((IB = .5 * Math.abs(IB) + .5) * TB % TB | 0) * ZB)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const BB = this._engine,
          IB = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * IB), this._vertexBuffer = new GB.e(BB, this._vertexData, !0, IB);
        let ZB = 0;
        const TB = this._vertexBuffer.createVertexBuffer(GB.i.PositionKind, ZB, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[GB.i.PositionKind] = TB, ZB += 3;
        const JB = this._vertexBuffer.createVertexBuffer(GB.i.ColorKind, ZB, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[GB.i.ColorKind] = JB, ZB += 4;
        const oB = this._vertexBuffer.createVertexBuffer("angle", ZB, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = oB, ZB += 1;
        const vB = this._vertexBuffer.createVertexBuffer("size", ZB, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = vB, ZB += 2, this._isAnimationSheetEnabled) {
          const BB = this._vertexBuffer.createVertexBuffer("cellIndex", ZB, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = BB, ZB += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const BB = this._vertexBuffer.createVertexBuffer("direction", ZB, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = BB, ZB += 3
        }
        if (this._useRampGradients) {
          const BB = this._vertexBuffer.createVertexBuffer("remapData", ZB, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = BB, ZB += 4
        }
        let kB;
        if (this._useInstancing) {
          const IB = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new GB.e(BB, IB, !1, 2), kB = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else kB = this._vertexBuffer.createVertexBuffer("offset", ZB, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = kB, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const BB = [],
          IB = [];
        let ZB = 0;
        for (let TB = 0; TB < this._capacity; TB++) BB.push(ZB), BB.push(ZB + 1), BB.push(ZB + 2), BB.push(ZB), BB.push(ZB + 2), BB.push(ZB + 3), IB.push(ZB, ZB + 1, ZB + 1, ZB + 2, ZB + 2, ZB + 3, ZB + 3, ZB, ZB, ZB + 3), ZB += 4;
        this._indexBuffer = this._engine.createIndexBuffer(BB), this._linesIndexBuffer = this._engine.createIndexBuffer(IB)
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
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (BB) return this.startDelay = BB, void setTimeout((() => {
          this.start(0)
        }), BB);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const BB = this.noiseTexture;
          if (BB && BB.onGeneratedObservable) BB.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let IB = 0; IB < this.preWarmCycles; IB++) this.animate(!0), BB.render()
            }))
          }));
          else
            for (let IB = 0; IB < this.preWarmCycles; IB++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(BB))
      }
      _postStop(BB) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(BB, IB, ZB, TB) {
        let JB = BB * this._vertexBufferSize;
        const GB = oB.m.rN[0].TY(this._scene?.floatingOriginOffset || oB.s.ZeroReadOnly);
        if (this._vertexData[JB++] = IB.position.x + this.worldOffset.x - GB.x, this._vertexData[JB++] = IB.position.y + this.worldOffset.y - GB.y, this._vertexData[JB++] = IB.position.z + this.worldOffset.z - GB.z, this._vertexData[JB++] = IB.color.r, this._vertexData[JB++] = IB.color.g, this._vertexData[JB++] = IB.color.b, this._vertexData[JB++] = IB.color.a, this._vertexData[JB++] = IB.angle, this._vertexData[JB++] = IB.scale.x * IB.size, this._vertexData[JB++] = IB.scale.y * IB.size, this._isAnimationSheetEnabled && (this._vertexData[JB++] = IB.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[JB++] = IB.direction.x, this._vertexData[JB++] = IB.direction.y, this._vertexData[JB++] = IB.direction.z);
        else if (IB._properties.initialDirection) {
          let BB = IB._properties.initialDirection;
          this.isLocal && (oB.s.TransformNormalToRef(BB, this._emitterWorldMatrix, oB.m.rN[0]), BB = oB.m.rN[0]), 0 === BB.x && 0 === BB.z && (BB.x = .001), this._vertexData[JB++] = BB.x, this._vertexData[JB++] = BB.y, this._vertexData[JB++] = BB.z
        } else {
          let BB = IB.direction;
          this.isLocal && (oB.s.TransformNormalToRef(BB, this._emitterWorldMatrix, oB.m.rN[0]), BB = oB.m.rN[0]), 0 === BB.x && 0 === BB.z && (BB.x = .001), this._vertexData[JB++] = BB.x, this._vertexData[JB++] = BB.y, this._vertexData[JB++] = BB.z
        }
        this._useRampGradients && IB.remapData && (this._vertexData[JB++] = IB.remapData.x, this._vertexData[JB++] = IB.remapData.y, this._vertexData[JB++] = IB.remapData.z, this._vertexData[JB++] = IB.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === ZB ? ZB = this._epsilon : 1 === ZB && (ZB = 1 - this._epsilon), 0 === TB ? TB = this._epsilon : 1 === TB && (TB = 1 - this._epsilon)), this._vertexData[JB++] = ZB, this._vertexData[JB] = TB)
      }
      _prepareParticle(BB) {}
      _createNewOnes(BB) {
        let IB;
        for (let ZB = 0; ZB < BB && this._particles.length !== this._capacity; ZB++) {
          IB = this._createParticle(), this._particles.push(IB);
          let BB = this._createQueueStart;
          for (; BB;) BB.process(IB, this), BB = BB.nextItem;
          IB._inheritParticleInfoToSubEmitters()
        }
      }
      _update(BB) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const BB = this.emitter;
          this._emitterWorldMatrix = BB.getWorldMatrix()
        } else {
          const BB = this.emitter;
          this._emitterWorldMatrix = oB.b.Translation(BB.x, BB.y, BB.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(BB)
      }
      static _GetAttributeNamesOrOptions() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const TB = [GB.i.PositionKind, GB.i.ColorKind, "angle", "offset", "size"];
        return BB && TB.push("cellIndex"), IB || TB.push("direction"), ZB && TB.push("remapData"), TB
      }
      static _GetEffectCreationOptions() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const TB = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, fB.c)(TB), BB && TB.push("particlesInfos"), IB && TB.push("logarithmicDepthConstant"), ZB && (TB.push("vFogInfos"), TB.push("vFogColor")), TB
      }
      fillDefines(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, fB.i)(this, this._scene, BB), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && BB.push("#define FOG")), this._isAnimationSheetEnabled && BB.push("#define ANIMATESHEET"), this.useLogarithmicDepth && BB.push("#define LOGARITHMICDEPTH"), IB === QB.BLENDMODE_MULTIPLY && BB.push("#define BLENDMULTIPLYMODE"), this.isLocal && BB.push("#define LOCAL"), this._useRampGradients && BB.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (BB.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            BB.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            BB.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && BB.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            BB.push("#define BILLBOARDMODE_ALL")
        }
        ZB && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), BB.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(BB, IB, ZB) {
        IB.push(...MI._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), BB.push(...MI._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), ZB.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, AB.e)(BB, this._imageProcessingConfigurationDefines), (0, AB.c)(ZB, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(BB) {
        var IB;
        const ZB = this._getCustomDrawWrapper(BB);
        if (ZB?.effect) return ZB;
        const TB = [];
        this.fillDefines(TB, BB);
        const oB = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          GB = HI.b._PrepareStringDefines(oB, TB),
          vB = GB ? HI.b.GetConfiguration(oB) : void 0;
        let kB = this._drawWrappers[oB];
        kB || (kB = this._drawWrappers[oB] = [], 0 === oB || this._renderPassObserver || (this._renderPassObserver = ((IB = this._engine)._onReleaseRenderPassObservable ?? (IB._onReleaseRenderPassObservable = new JB.b)).add((BB => {
          const IB = this._drawWrappers[BB];
          if (IB) {
            for (const BB of IB) BB?.dispose();
            delete this._drawWrappers[BB]
          }
        }))));
        let cB = kB[BB];
        cB || (cB = new uB.c(this._engine), cB.drawContext && (cB.drawContext.useInstancing = this._useInstancing), kB[BB] = cB);
        const nB = TB.join("\n");
        if (cB.defines !== nB) {
          const BB = [],
            IB = [],
            ZB = [];
          this.fillUniformsAttributesAndSamplerNames(IB, BB, ZB), GB && (IB.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== vB?.defines.PREPASS_LOCAL_POSITION_INDEX && IB.push("inverseEmitterWM", "geometryWorldOffset")), cB.setEffect(this._engine.createEffect("particles", {
            attributes: BB,
            uniformsNames: IB,
            samplers: ZB,
            defines: nB,
            shaderLanguage: this._shaderLanguage,
            multiTarget: GB,
            indexParameters: GB ? {
              buffersCount: vB?._mrtCount ?? 0
            } : void 0
          }, this._engine), nB)
        }
        return cB
      }
      _bindGeometryRendering(BB) {
        const IB = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          ZB = HI.b.GetConfiguration(IB);
        if (!ZB?._defines) return;
        BB.setFloat("objectId", 0), BB.setInt("meshBlendTag", 0);
        const TB = this._scene?.activeCamera;
        if (BB.setFloat2("cameraInfo", TB?.minZ ?? 0, TB?.maxZ ?? 1), this.isLocal && void 0 !== ZB.defines.PREPASS_LOCAL_POSITION_INDEX) {
          BB.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const IB = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || oB.s.ZeroReadOnly, oB.m.rN[0]);
          BB.setVector3("geometryWorldOffset", IB)
        }
      }
      animate() {
        let BB, IB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!IB && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (IB ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) BB = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const IB = this._calculateEmitRate();
            BB = IB * this._scaledUpdateSpeed | 0, this._newPartsExcess += IB * this._scaledUpdateSpeed - BB
          }
          if (this._newPartsExcess > 1 && (BB += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? BB = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(BB), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !IB) {
            let BB = 0;
            for (let IB = 0; IB < this._particles.length; IB++) {
              const ZB = this._particles[IB];
              this._appendParticleVertices(BB, ZB), BB += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const BB = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  IB = this._particles.length;
                IB < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, IB * BB, this._fixedCapacityHighWaterMark * BB), this._fixedCapacityHighWaterMark = IB, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const BB = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * BB), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let BB = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const IB = this._actualFrame / this.targetStopDuration;
          TB.n.GetCurrentGradient(IB, this._emitRateGradients, ((IB, ZB, TB) => {
            IB !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = ZB.getFactor(), this._currentEmitRateGradient = IB), BB = (0, FB.Lerp)(this._currentEmitRate1, this._currentEmitRate2, TB)
          }))
        }
        return BB
      }
      _appendParticleVertices(BB, IB) {
        this._appendParticleVertex(BB++, IB, 0, 0), this._useInstancing || (this._appendParticleVertex(BB++, IB, 1, 0), this._appendParticleVertex(BB++, IB, 1, 1), this._appendParticleVertex(BB, IB, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !MI.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ZB.e(351).then((() => ZB(61333))), ZB.e(345).then((() => ZB(61341)))])) : await Promise.all([ZB.e(334).then((() => ZB(61347))), Promise.all([ZB.e(327), ZB.e(360)]).then((() => ZB(61354)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== QB.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(QB.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(QB.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(BB) {
        const IB = this._getWrapper(BB),
          ZB = IB.effect,
          TB = this._engine;
        TB.enableEffect(IB);
        const JB = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        ZB.setTexture("diffuseSampler", this.particleTexture), ZB.setMatrix("view", JB);
        const GB = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (ZB.setMatrix("projection", GB), this._isAnimationSheetEnabled && this.particleTexture) {
          const BB = this.particleTexture.getBaseSize();
          ZB.setFloat3("particlesInfos", this.spriteCellWidth / BB.width, this.spriteCellHeight / BB.height, this.spriteCellWidth / BB.width)
        }
        if (ZB.setVector2("translationPivot", this.translationPivot), ZB.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const BB = this._scene.activeCamera;
          ZB.setVector3("eyePosition", BB.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), ZB.setTexture("rampSampler", this._rampGradientsTexture));
        const vB = ZB.defines;
        this._scene && ((0, fB.d)(ZB, this, this._scene), this.applyFog && (0, lB.h)(this._scene, void 0, ZB)), vB.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (JB.invertToRef(oB.m.Matrix[0]), ZB.setMatrix("invView", oB.m.Matrix[0])), ZB._multiTarget && this._bindGeometryRendering(ZB), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? TB.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, ZB) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, ZB)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? TB.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, ZB) : TB.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, ZB), this.useLogarithmicDepth && this._scene && (0, lB.s)(vB, ZB, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(ZB), this._setEngineBasedOnBlendMode(BB), ZB._multiTarget && HI.b._BindZeroAlphaDiscard(TB, ZB);
        let kB = !1;
        try {
          HI.b._BindAttachmentsForEffect(TB, ZB) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(ZB), this._useInstancing ? this._scene?.forceWireframe ? TB.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : TB.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? TB.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : TB.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), kB = !0)
        } finally {
          HI.b._RestoreAttachments(TB)
        }
        return kB ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const BB = this._engine;
        let IB;
        return BB.setState && (BB.setState(!1), this.forceDepthWrite && BB.setDepthWrite(!0)), IB = this.blendMode === QB.BLENDMODE_MULTIPLYADD ? this._render(QB.BLENDMODE_MULTIPLY) + this._render(QB.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), IB
      }
      _onDispose() {}
      dispose() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), BB && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), BB && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(IB, ZB), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const BB = this._scene.DW.indexOf(this);
          BB > -1 && this._scene.DW.splice(BB, 1), this._scene._activeParticleSystems.dispose()
        }
        this.oR.notifyObservers(this), this.oR.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    MI.ForceGLSL = !1;
    var jI, PI = ZB(37170);
    ! function(BB) {
      BB[BB.ATTACHED = 0] = "ATTACHED", BB[BB.END = 1] = "END"
    }(jI || (jI = {}));
    class RI {
      constructor(BB) {
        if (this.particleSystem = BB, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !BB.emitter || !BB.emitter.dispose) {
          const IB = (0, PI.e)("BABYLON.AbstractMesh");
          BB.emitter = new IB("SubemitterSystemEmitter", BB.JR()), BB._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let BB = this.particleSystem.emitter;
        if (BB) {
          if (BB instanceof oB.s) BB = BB.clone();
          else if (-1 !== BB.getClassName().indexOf("Mesh")) {
            BB = new((0, PI.e)("BABYLON.Mesh"))("", BB.JR()), BB.isVisible = !1
          }
        } else BB = new oB.s;
        const IB = new RI(this.particleSystem.clone(this.particleSystem.name, BB));
        return IB.particleSystem.name += "Clone", IB.type = this.type, IB.inheritDirection = this.inheritDirection, IB.inheritedVelocityAmount = this.inheritedVelocityAmount, IB.particleSystem._disposeEmitterOnDispose = !0, IB.particleSystem.disposeOnStop = !0, IB
      }
      serialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IB = {};
        return IB.type = this.type, IB.inheritDirection = this.inheritDirection, IB.inheritedVelocityAmount = this.inheritedVelocityAmount, IB.particleSystem = this.particleSystem.serialize(BB), IB
      }
      static _ParseParticleSystem(BB, IB, ZB) {
        throw (0, rB.m)("ParseParticle")
      }
      static Parse(BB, IB, ZB) {
        const TB = BB.particleSystem,
          JB = new RI(RI._ParseParticleSystem(TB, IB, ZB, !0));
        return JB.type = BB.type, JB.inheritDirection = BB.inheritDirection, JB.inheritedVelocityAmount = BB.inheritedVelocityAmount, JB.particleSystem._isSubEmitter = !0, JB
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var rI = ZB(39951),
      mI = ZB(40085);
    const XI = () => {};
    class LI {
      constructor() {
        this.particlePositionGenerator = XI, this.particleDestinationGenerator = XI, this.particleDirectionGenerator = XI
      }
      startDirectionFunction(BB, IB, ZB, TB) {
        const JB = oB.m.rN[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== XI) this.particleDirectionGenerator(-1, ZB, JB);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== XI) {
          this.particleDestinationGenerator(-1, ZB, JB);
          const BB = oB.m.rN[1];
          JB.subtractToRef(ZB.position, BB), BB.scaleToRef(1 / ZB.lifeTime, JB)
        } else JB.set(0, 0, 0);
        TB ? IB.TY(JB) : oB.s.TransformNormalToRef(JB, BB, IB)
      }
      startPositionFunction(BB, IB, ZB, TB) {
        const JB = oB.m.rN[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== XI ? this.particlePositionGenerator(-1, ZB, JB) : JB.set(0, 0, 0), TB ? IB.TY(JB) : oB.s.TransformCoordinatesToRef(JB, BB, IB)
      }
      clone() {
        const BB = new LI;
        return zB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {}
      buildUniformLayout(BB) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const BB = {};
        return BB.type = this.getClassName(), BB.particlePositionGenerator = this.particlePositionGenerator, BB.particleDestinationGenerator = this.particleDestinationGenerator, BB
      }
      parse(BB) {
        BB.particlePositionGenerator && (this.particlePositionGenerator = BB.particlePositionGenerator), BB.particleDestinationGenerator && (this.particleDestinationGenerator = BB.particleDestinationGenerator)
      }
    }
    const eI = oB.s.Zero(),
      uI = oB.s.Zero(),
      fI = oB.s.Zero();
    class lI {
      constructor() {
        this.strength = 0, this.position = oB.s.Zero()
      }
      _processParticle(BB, IB) {
        this.position.subtractToRef(BB.position, eI);
        const ZB = eI.lengthSquared() + 1;
        eI.normalize().scaleToRef(this.strength / ZB, uI), uI.scaleToRef(IB._tempScaledUpdateSpeed, fI), BB.direction.addInPlace(fI)
      }
      serialize() {
        return {
          position: this.position.HTB(),
          strength: this.strength
        }
      }
    }
    const AI = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class tI extends MI {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = BB => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const IB = Math.floor(Math.random() * this._subEmitters.length);
          for (const ZB of this._subEmitters[IB])
            if (1 === ZB.type) {
              const IB = ZB.clone();
              BB._inheritParticleInfoToSubEmitter(IB), IB.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(IB.particleSystem), IB.particleSystem.start()
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
      set flowMap(BB) {
        this._flowMap !== BB && (this._flowMap = BB, this._flowMapUpdate && (aI(this._flowMapUpdate), this._flowMapUpdate = null), BB && (this._flowMapUpdate = {
          process: BB => {
            const IB = this.JR()?.getTransformMatrix();
            this._flowMap._processParticle(BB, this.flowMapStrength * this._tempScaledUpdateSpeed, IB)
          },
          previousItem: null,
          nextItem: null
        }, pI(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(BB) {
        super.addAttractor(BB), 1 === this._attractors.length && (this._attractorUpdate = {
          process: BB => {
            for (const IB of this._attractors) IB._processParticle(BB, this)
          },
          previousItem: null,
          nextItem: null
        }, pI(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(BB) {
        super.removeAttractor(BB), 0 === this._attractors.length && this._attractorUpdate && aI(this._attractorUpdate)
      }
      start() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(BB)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const BB of this.subEmitters) BB instanceof tI ? this._subEmitters.push([new RI(BB)]) : BB instanceof RI ? this._subEmitters.push([BB]) : BB instanceof Array && this._subEmitters.push(BB)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const BB of this.activeSubSystems) BB.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const BB = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== BB && this._rootParticleSystem.activeSubSystems.splice(BB, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(BB) {
        BB && this._stopSubEmitters()
      }
      _prepareParticle(BB) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const IB = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          BB._properties.attachedSubEmitters = [];
          for (const ZB of IB)
            if (0 === ZB.type) {
              const IB = ZB.clone();
              BB._properties.attachedSubEmitters.push(IB), IB.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), BB && this.particles)
          for (const ZB of this.particles)
            if (ZB._properties.attachedSubEmitters)
              for (let BB = ZB._properties.attachedSubEmitters.length - 1; BB >= 0; BB -= 1) ZB._properties.attachedSubEmitters[BB].dispose();
        if (IB && this.activeSubSystems)
          for (let ZB = this.activeSubSystems.length - 1; ZB >= 0; ZB -= 1) this.activeSubSystems[ZB].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let BB = 0; BB < this._subEmitters.length; BB++)
            for (const IB of this._subEmitters[BB]) IB.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(BB, IB, ZB, TB) {
        let JB;
        JB = ZB instanceof rI.c ? null : ZB;
        const GB = (0, PI.e)("BABYLON.Texture");
        if (GB && JB)
          if (BB.texture) IB.particleTexture = GB.Parse(BB.texture, JB, TB);
          else if (BB.textureName) {
          const ZB = BB.textureSettings;
          if (IB.particleTexture = new GB(TB + BB.textureName, JB, !1, void 0 === BB.invertY || BB.invertY, ZB ? ZB.samplingMode : void 0), IB.particleTexture.name = BB.textureName, ZB) {
            const BB = IB.particleTexture;
            for (const IB of AI) void 0 !== ZB[IB] && (BB[IB] = ZB[IB])
          }
        }
        if (BB.emitterId || 0 === BB.emitterId || void 0 !== BB.emitter ? (BB.emitterId || 0 === BB.emitterId) && JB ? (IB.emitter = JB.getLastMeshById(BB.emitterId), IB.emitter || (IB.emitter = oB.s.Zero())) : IB.emitter = oB.s.FromArray(BB.emitter) : IB.emitter = oB.s.Zero(), IB.isLocal = !!BB.isLocal, void 0 !== BB.renderingGroupId && (IB.renderingGroupId = BB.renderingGroupId), void 0 !== BB.isBillboardBased && (IB.isBillboardBased = BB.isBillboardBased), void 0 !== BB.billboardMode && (IB.billboardMode = BB.billboardMode), void 0 !== BB.useLogarithmicDepth && (IB.useLogarithmicDepth = BB.useLogarithmicDepth), BB.animations) {
          for (let ZB = 0; ZB < BB.animations.length; ZB++) {
            const TB = BB.animations[ZB],
              JB = (0, PI.e)("BABYLON.Animation");
            JB && IB.animations.push(JB.Parse(TB))
          }
          IB.beginAnimationOnStart = BB.beginAnimationOnStart, IB.beginAnimationFrom = BB.beginAnimationFrom, IB.beginAnimationTo = BB.beginAnimationTo, IB.beginAnimationLoop = BB.beginAnimationLoop
        }
        if (BB.autoAnimate && JB && JB.beginAnimation(IB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), IB.startDelay = 0 | BB.startDelay, IB.minAngularSpeed = BB.minAngularSpeed, IB.maxAngularSpeed = BB.maxAngularSpeed, IB.minSize = BB.minSize, IB.maxSize = BB.maxSize, BB.minScaleX && (IB.minScaleX = BB.minScaleX, IB.maxScaleX = BB.maxScaleX, IB.minScaleY = BB.minScaleY, IB.maxScaleY = BB.maxScaleY), void 0 !== BB.preWarmCycles && (IB.preWarmCycles = BB.preWarmCycles, IB.preWarmStepOffset = BB.preWarmStepOffset), void 0 !== BB.minInitialRotation && (IB.minInitialRotation = BB.minInitialRotation, IB.maxInitialRotation = BB.maxInitialRotation), IB.minLifeTime = BB.minLifeTime, IB.maxLifeTime = BB.maxLifeTime, IB.minEmitPower = BB.minEmitPower, IB.maxEmitPower = BB.maxEmitPower, IB.emitRate = BB.emitRate, IB.gravity = oB.s.FromArray(BB.gravity), BB.noiseStrength && (IB.noiseStrength = oB.s.FromArray(BB.noiseStrength)), IB.color1 = nB.g.FromArray(BB.color1), IB.color2 = nB.g.FromArray(BB.color2), IB.colorDead = nB.g.FromArray(BB.colorDead), IB.updateSpeed = BB.updateSpeed, IB.targetStopDuration = BB.targetStopDuration, IB.blendMode = BB.blendMode, BB.colorGradients)
          for (const oB of BB.colorGradients) IB.addColorGradient(oB.gradient, nB.g.FromArray(oB.color1), oB.color2 ? nB.g.FromArray(oB.color2) : void 0);
        if (BB.rampGradients) {
          for (const ZB of BB.rampGradients) IB.addRampGradient(ZB.gradient, nB.c.FromArray(ZB.color));
          IB.useRampGradients = BB.useRampGradients
        }
        if (BB.colorRemapGradients)
          for (const oB of BB.colorRemapGradients) IB.addColorRemapGradient(oB.gradient, void 0 !== oB.factor1 ? oB.factor1 : oB.factor, oB.factor2);
        if (BB.alphaRemapGradients)
          for (const oB of BB.alphaRemapGradients) IB.addAlphaRemapGradient(oB.gradient, void 0 !== oB.factor1 ? oB.factor1 : oB.factor, oB.factor2);
        if (BB.sizeGradients)
          for (const oB of BB.sizeGradients) IB.addSizeGradient(oB.gradient, void 0 !== oB.factor1 ? oB.factor1 : oB.factor, oB.factor2);
        if (BB.angularSpeedGradients)
          for (const oB of BB.angularSpeedGradients) IB.addAngularSpeedGradient(oB.gradient, void 0 !== oB.factor1 ? oB.factor1 : oB.factor, oB.factor2);
        if (BB.velocityGradients)
          for (const oB of BB.velocityGradients) IB.addVelocityGradient(oB.gradient, void 0 !== oB.factor1 ? oB.factor1 : oB.factor, oB.factor2);
        if (BB.dragGradients)
          for (const oB of BB.dragGradients) IB.addDragGradient(oB.gradient, void 0 !== oB.factor1 ? oB.factor1 : oB.factor, oB.factor2);
        if (BB.emitRateGradients)
          for (const oB of BB.emitRateGradients) IB.addEmitRateGradient(oB.gradient, void 0 !== oB.factor1 ? oB.factor1 : oB.factor, oB.factor2);
        if (BB.startSizeGradients)
          for (const oB of BB.startSizeGradients) IB.addStartSizeGradient(oB.gradient, void 0 !== oB.factor1 ? oB.factor1 : oB.factor, oB.factor2);
        if (BB.lifeTimeGradients)
          for (const oB of BB.lifeTimeGradients) IB.addLifeTimeGradient(oB.gradient, void 0 !== oB.factor1 ? oB.factor1 : oB.factor, oB.factor2);
        if (BB.limitVelocityGradients) {
          for (const ZB of BB.limitVelocityGradients) IB.addLimitVelocityGradient(ZB.gradient, void 0 !== ZB.factor1 ? ZB.factor1 : ZB.factor, ZB.factor2);
          IB.limitVelocityDamping = BB.limitVelocityDamping
        }
        if (BB.noiseTexture && JB) {
          const ZB = (0, PI.e)("BABYLON.ProceduralTexture");
          IB.noiseTexture = ZB.Parse(BB.noiseTexture, JB, TB)
        }
        let vB;
        if (BB.particleEmitterType) {
          switch (BB.particleEmitterType.type) {
            case "SphereParticleEmitter":
              vB = new qB;
              break;
            case "SphereDirectedParticleEmitter":
              vB = new yB;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              vB = new WB;
              break;
            case "ConeDirectedParticleEmitter":
              vB = new dB;
              break;
            case "CylinderParticleEmitter":
              vB = new UB.d;
              break;
            case "CylinderDirectedParticleEmitter":
              vB = new UB.b;
              break;
            case "HemisphericParticleEmitter":
              vB = new gB;
              break;
            case "PointParticleEmitter":
              vB = new NB;
              break;
            case "MeshParticleEmitter":
              vB = new CB;
              break;
            case "CustomParticleEmitter":
              vB = new LI;
              break;
            default:
              vB = new hB.c
          }
          vB.parse(BB.particleEmitterType, JB)
        } else vB = new hB.c, vB.parse(BB, JB);
        IB.particleEmitterType = vB, IB.startSpriteCellID = BB.startSpriteCellID, IB.endSpriteCellID = BB.endSpriteCellID, IB.spriteCellLoop = BB.spriteCellLoop ?? !0, IB.spriteCellWidth = BB.spriteCellWidth, IB.spriteCellHeight = BB.spriteCellHeight, IB.spriteCellChangeSpeed = BB.spriteCellChangeSpeed, IB.spriteRandomStartCell = BB.spriteRandomStartCell, IB.disposeOnStop = BB.disposeOnStop ?? !1, IB.manualEmitCount = BB.manualEmitCount ?? -1
      }
      static Parse(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          JB = arguments.length > 4 ? arguments[4] : void 0;
        const GB = BB.name;
        let vB, kB, cB = null,
          hB = null;
        if (IB instanceof rI.c ? vB = IB : (kB = IB, vB = kB.PN()), BB.customShader && (0, rB.c)(vB.createEffectForParticles)) {
          hB = BB.customShader;
          const IB = hB.shaderOptions.defines.length > 0 ? hB.shaderOptions.defines.join("\n") : "";
          cB = vB.createEffectForParticles(hB.shaderPath.fragmentElement, hB.shaderOptions.uniforms, hB.shaderOptions.samplers, IB)
        }
        const zB = new tI(GB, JB || BB.ah, IB, cB, BB.isAnimationSheetEnabled);
        if (zB.customShader = hB, zB._rootUrl = ZB, BB.id && (zB.id = BB.id), BB.subEmitters) {
          zB.subEmitters = [];
          for (const TB of BB.subEmitters) {
            const BB = [];
            for (const JB of TB) BB.push(RI.Parse(JB, IB, ZB));
            zB.subEmitters.push(BB)
          }
        }
        if (BB.attractors)
          for (const nB of BB.attractors) {
            const BB = new lI;
            BB.position = oB.s.FromArray(nB.position), BB.strength = nB.strength, zB.addAttractor(BB)
          }
        return tI._Parse(BB, zB, IB, ZB), BB.textureMask && (zB.textureMask = nB.g.FromArray(BB.textureMask)), BB.worldOffset && (zB.worldOffset = oB.s.FromArray(BB.worldOffset)), BB.preventAutoStart && (zB.preventAutoStart = BB.preventAutoStart), BB.metadata && (zB.metadata = BB.metadata), TB || zB.preventAutoStart || zB.start(), zB
      }
      serialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IB = {};
        if (tI._Serialize(IB, this, BB), IB.textureMask = this.textureMask.HTB(), IB.customShader = this.customShader, IB.preventAutoStart = this.preventAutoStart, IB.worldOffset = this.worldOffset.HTB(), this.metadata && (IB.metadata = this.metadata), this.subEmitters) {
          IB.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const ZB of this._subEmitters) {
            const TB = [];
            for (const IB of ZB) IB.particleSystem.doNotSerialize || TB.push(IB.serialize(BB));
            IB.subEmitters.push(TB)
          }
        }
        if (this._attractors && this._attractors.length) {
          IB.attractors = [];
          for (const BB of this._attractors) IB.attractors.push(BB.serialize())
        }
        return IB
      }
      static _Serialize(BB, IB, ZB) {
        if (BB.name = IB.name, BB.id = IB.id, BB.ah = IB.getCapacity(), BB.disposeOnStop = IB.disposeOnStop, BB.manualEmitCount = IB.manualEmitCount, IB.emitter.position) {
          const ZB = IB.emitter;
          BB.emitterId = ZB.id
        } else {
          const ZB = IB.emitter;
          BB.emitter = ZB.HTB()
        }
        if (IB.particleEmitterType && (BB.particleEmitterType = IB.particleEmitterType.serialize()), IB.particleTexture)
          if (ZB) BB.texture = IB.particleTexture.serialize();
          else {
            const ZB = IB.particleTexture;
            BB.textureName = IB.particleTexture.name, BB.invertY = !!ZB._invertY;
            const TB = {};
            for (const BB of AI) TB[BB] = ZB[BB];
            TB.samplingMode = ZB.samplingMode, BB.textureSettings = TB
          } BB.isLocal = IB.isLocal, mI.b.AppendSerializedAnimations(IB, BB), BB.beginAnimationOnStart = IB.beginAnimationOnStart, BB.beginAnimationFrom = IB.beginAnimationFrom, BB.beginAnimationTo = IB.beginAnimationTo, BB.beginAnimationLoop = IB.beginAnimationLoop, BB.startDelay = IB.startDelay, BB.renderingGroupId = IB.renderingGroupId, BB.isBillboardBased = IB.isBillboardBased, BB.billboardMode = IB.billboardMode, BB.minAngularSpeed = IB.minAngularSpeed, BB.maxAngularSpeed = IB.maxAngularSpeed, BB.minSize = IB.minSize, BB.maxSize = IB.maxSize, BB.minScaleX = IB.minScaleX, BB.maxScaleX = IB.maxScaleX, BB.minScaleY = IB.minScaleY, BB.maxScaleY = IB.maxScaleY, BB.minEmitPower = IB.minEmitPower, BB.maxEmitPower = IB.maxEmitPower, BB.minLifeTime = IB.minLifeTime, BB.maxLifeTime = IB.maxLifeTime, BB.emitRate = IB.emitRate, BB.gravity = IB.gravity.HTB(), BB.noiseStrength = IB.noiseStrength.HTB(), BB.color1 = IB.color1.HTB(), BB.color2 = IB.color2.HTB(), BB.colorDead = IB.colorDead.HTB(), BB.updateSpeed = IB.updateSpeed, BB.targetStopDuration = IB.targetStopDuration, BB.blendMode = IB.blendMode, BB.preWarmCycles = IB.preWarmCycles, BB.preWarmStepOffset = IB.preWarmStepOffset, BB.minInitialRotation = IB.minInitialRotation, BB.maxInitialRotation = IB.maxInitialRotation, BB.startSpriteCellID = IB.startSpriteCellID, BB.spriteCellLoop = IB.spriteCellLoop, BB.endSpriteCellID = IB.endSpriteCellID, BB.spriteCellChangeSpeed = IB.spriteCellChangeSpeed, BB.spriteCellWidth = IB.spriteCellWidth, BB.spriteCellHeight = IB.spriteCellHeight, BB.spriteRandomStartCell = IB.spriteRandomStartCell, BB.isAnimationSheetEnabled = IB.isAnimationSheetEnabled, BB.useLogarithmicDepth = IB.useLogarithmicDepth;
        const TB = IB.getColorGradients();
        if (TB) {
          BB.colorGradients = [];
          for (const IB of TB) {
            const ZB = {
              gradient: IB.gradient,
              color1: IB.color1.HTB()
            };
            IB.color2 ? ZB.color2 = IB.color2.HTB() : ZB.color2 = IB.color1.HTB(), BB.colorGradients.push(ZB)
          }
        }
        const JB = IB.getRampGradients();
        if (JB) {
          BB.rampGradients = [];
          for (const IB of JB) {
            const ZB = {
              gradient: IB.gradient,
              color: IB.color.HTB()
            };
            BB.rampGradients.push(ZB)
          }
          BB.useRampGradients = IB.useRampGradients
        }
        const oB = IB.getColorRemapGradients();
        if (oB) {
          BB.colorRemapGradients = [];
          for (const IB of oB) {
            const ZB = {
              gradient: IB.gradient,
              factor1: IB.factor1
            };
            void 0 !== IB.factor2 ? ZB.factor2 = IB.factor2 : ZB.factor2 = IB.factor1, BB.colorRemapGradients.push(ZB)
          }
        }
        const GB = IB.getAlphaRemapGradients();
        if (GB) {
          BB.alphaRemapGradients = [];
          for (const IB of GB) {
            const ZB = {
              gradient: IB.gradient,
              factor1: IB.factor1
            };
            void 0 !== IB.factor2 ? ZB.factor2 = IB.factor2 : ZB.factor2 = IB.factor1, BB.alphaRemapGradients.push(ZB)
          }
        }
        const vB = IB.getSizeGradients();
        if (vB) {
          BB.sizeGradients = [];
          for (const IB of vB) {
            const ZB = {
              gradient: IB.gradient,
              factor1: IB.factor1
            };
            void 0 !== IB.factor2 ? ZB.factor2 = IB.factor2 : ZB.factor2 = IB.factor1, BB.sizeGradients.push(ZB)
          }
        }
        const kB = IB.getAngularSpeedGradients();
        if (kB) {
          BB.angularSpeedGradients = [];
          for (const IB of kB) {
            const ZB = {
              gradient: IB.gradient,
              factor1: IB.factor1
            };
            void 0 !== IB.factor2 ? ZB.factor2 = IB.factor2 : ZB.factor2 = IB.factor1, BB.angularSpeedGradients.push(ZB)
          }
        }
        const cB = IB.getVelocityGradients();
        if (cB) {
          BB.velocityGradients = [];
          for (const IB of cB) {
            const ZB = {
              gradient: IB.gradient,
              factor1: IB.factor1
            };
            void 0 !== IB.factor2 ? ZB.factor2 = IB.factor2 : ZB.factor2 = IB.factor1, BB.velocityGradients.push(ZB)
          }
        }
        const nB = IB.getDragGradients();
        if (nB) {
          BB.dragGradients = [];
          for (const IB of nB) {
            const ZB = {
              gradient: IB.gradient,
              factor1: IB.factor1
            };
            void 0 !== IB.factor2 ? ZB.factor2 = IB.factor2 : ZB.factor2 = IB.factor1, BB.dragGradients.push(ZB)
          }
        }
        const hB = IB.getEmitRateGradients();
        if (hB) {
          BB.emitRateGradients = [];
          for (const IB of hB) {
            const ZB = {
              gradient: IB.gradient,
              factor1: IB.factor1
            };
            void 0 !== IB.factor2 ? ZB.factor2 = IB.factor2 : ZB.factor2 = IB.factor1, BB.emitRateGradients.push(ZB)
          }
        }
        const zB = IB.getStartSizeGradients();
        if (zB) {
          BB.startSizeGradients = [];
          for (const IB of zB) {
            const ZB = {
              gradient: IB.gradient,
              factor1: IB.factor1
            };
            void 0 !== IB.factor2 ? ZB.factor2 = IB.factor2 : ZB.factor2 = IB.factor1, BB.startSizeGradients.push(ZB)
          }
        }
        const FB = IB.getLifeTimeGradients();
        if (FB) {
          BB.lifeTimeGradients = [];
          for (const IB of FB) {
            const ZB = {
              gradient: IB.gradient,
              factor1: IB.factor1
            };
            void 0 !== IB.factor2 ? ZB.factor2 = IB.factor2 : ZB.factor2 = IB.factor1, BB.lifeTimeGradients.push(ZB)
          }
        }
        const NB = IB.getLimitVelocityGradients();
        if (NB) {
          BB.limitVelocityGradients = [];
          for (const IB of NB) {
            const ZB = {
              gradient: IB.gradient,
              factor1: IB.factor1
            };
            void 0 !== IB.factor2 ? ZB.factor2 = IB.factor2 : ZB.factor2 = IB.factor1, BB.limitVelocityGradients.push(ZB)
          }
          BB.limitVelocityDamping = IB.limitVelocityDamping
        }
        IB.noiseTexture && (BB.noiseTexture = IB.noiseTexture.serialize())
      }
      clone(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const TB = {
          ...this._customWrappers
        };
        let JB = null;
        const oB = this._engine;
        if ((0, rB.c)(oB.createEffectForParticles) && null != this.customShader) {
          JB = this.customShader;
          const BB = JB.shaderOptions.defines.length > 0 ? JB.shaderOptions.defines.join("\n") : "",
            IB = oB.createEffectForParticles(JB.shaderPath.fragmentElement, JB.shaderOptions.uniforms, JB.shaderOptions.samplers, BB);
          TB[0] ? TB[0].effect = IB : this.setCustomEffect(IB, 0)
        }
        const GB = this.serialize(ZB),
          vB = !1 === ZB && this.particleTexture ? this.particleTexture.clone() : null;
        vB && (GB.textureName = void 0);
        const kB = tI.Parse(GB, this._scene || this._engine, this._rootUrl);
        return kB.name = BB, kB.customShader = JB, kB._customWrappers = TB, vB && (kB.particleTexture = vB), void 0 === IB && (IB = this.emitter), this.noiseTexture && (kB.noiseTexture = this.noiseTexture.clone()), kB.emitter = IB, this.preventAutoStart || kB.start(), kB
      }
    }
    tI.BILLBOARDMODE_Y = 2, tI.BILLBOARDMODE_ALL = 7, tI.BILLBOARDMODE_STRETCHED = 8, tI.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let bI = !1;
    bI || (bI = !0, RI._ParseParticleSystem = tI.Parse)
  },
  41655: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      SkyMaterial: () => WB,
      _MaxColorValueForRenderTarget: () => UB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(40085),
      GB = ZB(37113),
      vB = ZB(40335),
      kB = ZB(40390),
      cB = ZB(41617),
      nB = ZB(41192),
      hB = ZB(40143),
      zB = ZB(37170),
      FB = ZB(40425),
      NB = ZB(40395),
      gB = ZB(40380),
      qB = ZB(40371);
    class yB extends vB.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function UB(BB) {
      switch (BB) {
        case cB.b.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case cB.b.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let WB = (() => {
      var BB;
      let IB, vB, cB, zB, WB, dB, CB, QB, sB, wB, OB, YB, iB, pB, aB, HB = kB.b,
        MB = [],
        jB = [],
        PB = [],
        RB = [],
        rB = [],
        mB = [],
        XB = [],
        LB = [],
        eB = [],
        uB = [],
        fB = [],
        lB = [],
        AB = [],
        tB = [],
        bB = [],
        xB = [],
        EB = [],
        DB = [],
        KB = [],
        VB = [],
        SB = [],
        BI = [],
        II = [],
        ZI = [],
        TI = [],
        JI = [],
        oI = [],
        GI = [],
        vI = [],
        kI = [];
      return BB = class extends HB {
        constructor(BB, IB) {
          super(BB, IB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, TB.l)(this, MB, 1), this.turbidity = ((0, TB.l)(this, jB), (0, TB.l)(this, PB, 10)), this.rayleigh = ((0, TB.l)(this, RB), (0, TB.l)(this, rB, 2)), this.mieCoefficient = ((0, TB.l)(this, mB), (0, TB.l)(this, XB, .005)), this.mieDirectionalG = ((0, TB.l)(this, LB), (0, TB.l)(this, eB, .8)), this.distance = ((0, TB.l)(this, uB), (0, TB.l)(this, fB, 500)), this.inclination = ((0, TB.l)(this, lB), (0, TB.l)(this, AB, .49)), this.azimuth = ((0, TB.l)(this, tB), (0, TB.l)(this, bB, .25)), this.sunPosition = ((0, TB.l)(this, xB), (0, TB.l)(this, EB, new GB.rN(0, 100, 0))), this.useSunPosition = ((0, TB.l)(this, DB), (0, TB.l)(this, KB, !1)), this.cameraOffset = ((0, TB.l)(this, VB), (0, TB.l)(this, SB, GB.rN.Zero())), this.up = ((0, TB.l)(this, BI), (0, TB.l)(this, II, GB.rN.Up())), this.dithering = ((0, TB.l)(this, ZI), (0, TB.l)(this, TI, !1)), this.rawHdrOutput = ((0, TB.l)(this, JI), (0, TB.l)(this, oI, !1)), this.cloudiness = ((0, TB.l)(this, GI), (0, TB.l)(this, vI, 0)), this._cameraPosition = ((0, TB.l)(this, kI), GB.rN.Zero()), this._skyOrientation = new GB.Quaternion
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
        isReadyForSubMesh(IB, ZB) {
          const TB = ZB._drawWrapper;
          if (this.isFrozen && TB.effect && TB._wasPreviouslyReady) return !0;
          ZB.materialDefines || (ZB.materialDefines = new yB);
          const JB = ZB.materialDefines,
            oB = this.JR();
          if (this._isReadyForSubMesh(ZB)) return !0;
          if ((0, qB.eb)(IB, oB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, JB, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, qB.R)(IB, JB, !0, !1), JB.IMAGEPROCESSINGPOSTPROCESS !== oB.imageProcessingConfiguration.applyByPostProcess && JB.markAsMiscDirty(), JB.DITHER !== this.dithering && JB.markAsMiscDirty(), JB.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && JB.markAsMiscDirty(), JB.isDirty) {
            JB.markAsProcessed(), oB.resetCachedMaterial();
            const IB = new NB.e;
            JB.FOG && IB.addFallback(1, "FOG"), JB.IMAGEPROCESSINGPOSTPROCESS = oB.imageProcessingConfiguration.applyByPostProcess, JB.DITHER = this.dithering, JB.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const TB = [nB.e.PositionKind];
            JB.VERTEXCOLOR && TB.push(nB.e.ColorKind);
            const GB = "sky",
              vB = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, gB.c)(vB);
            const kB = JB.toString();
            ZB.setEffect(oB.PN().createEffect(GB, {
              attributes: TB,
              uniformsNames: vB,
              uniformBuffersNames: [],
              samplers: [],
              defines: kB,
              fallbacks: IB,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, oB.PN()), JB, this._materialContext)
          }
          return !(!ZB.effect || !ZB.effect.isReady()) && (JB._renderId = oB.getRenderId(), TB._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(BB, IB, ZB) {
          const TB = this.JR(),
            JB = ZB.materialDefines;
          if (!JB) return;
          const oB = ZB.effect;
          if (!oB) return;
          this._activeEffect = oB, this.bindOnlyWorldMatrix(BB), this._activeEffect.setMatrix("viewProjection", TB.getTransformMatrix()), this._mustRebind(TB, oB, ZB) && ((0, gB.d)(oB, this, TB), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, qB.s)(JB, oB, TB)), TB.fogEnabled && IB.applyFog && TB.fogMode !== hB.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", TB.getViewMatrix()), (0, qB.h)(TB, IB, this._activeEffect, this.rawHdrOutput);
          const vB = TB.activeCamera;
          if (vB) {
            const BB = vB.getWorldMatrix();
            this._cameraPosition.x = BB.m[12], this._cameraPosition.y = BB.m[13], this._cameraPosition.z = BB.m[14], this._activeEffect.setVector3("cameraPosition", GB.TmpVectors.rN[0].TY(this._cameraPosition).VTB(TB.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const BB = TB.PN()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", UB(BB?.texture?.type))
          }
          if (!this.useSunPosition) {
            const BB = Math.PI * (this.inclination - .5),
              IB = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(IB) * Math.cos(BB), this.sunPosition.y = this.distance * Math.sin(-BB), this.sunPosition.z = this.distance * Math.sin(IB) * Math.cos(BB), GB.Quaternion.FromUnitVectorsToRef(GB.rN.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(IB, this._activeEffect, ZB)
        }
        getAnimatables() {
          return []
        }
        dispose(BB) {
          super.dispose(BB)
        }
        clone(IB) {
          return oB.b.Clone((() => new BB(IB, this.JR())), this)
        }
        serialize() {
          const BB = super.serialize();
          return BB.customType = "BABYLON.SkyMaterial", BB
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(IB, ZB, TB) {
          return oB.b.Parse((() => new BB(IB.name, ZB)), IB, ZB, TB)
        }
      }, (() => {
        const ZB = "function" === typeof Symbol && Symbol.metadata ? Object.create(HB[Symbol.metadata] ?? null) : void 0;
        IB = [(0, JB.C)()], vB = [(0, JB.C)()], cB = [(0, JB.C)()], zB = [(0, JB.C)()], WB = [(0, JB.C)()], dB = [(0, JB.C)()], CB = [(0, JB.C)()], QB = [(0, JB.C)()], sB = [(0, JB.A)()], wB = [(0, JB.C)()], OB = [(0, JB.A)()], YB = [(0, JB.A)()], iB = [(0, JB.C)()], pB = [(0, JB.C)()], aB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: BB => "luminance" in BB,
            get: BB => BB.luminance,
            set: (BB, IB) => {
              BB.luminance = IB
            }
          },
          metadata: ZB
        }, MB, jB), (0, TB.j)(null, null, vB, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: BB => "turbidity" in BB,
            get: BB => BB.turbidity,
            set: (BB, IB) => {
              BB.turbidity = IB
            }
          },
          metadata: ZB
        }, PB, RB), (0, TB.j)(null, null, cB, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: BB => "rayleigh" in BB,
            get: BB => BB.rayleigh,
            set: (BB, IB) => {
              BB.rayleigh = IB
            }
          },
          metadata: ZB
        }, rB, mB), (0, TB.j)(null, null, zB, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: BB => "mieCoefficient" in BB,
            get: BB => BB.mieCoefficient,
            set: (BB, IB) => {
              BB.mieCoefficient = IB
            }
          },
          metadata: ZB
        }, XB, LB), (0, TB.j)(null, null, WB, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: BB => "mieDirectionalG" in BB,
            get: BB => BB.mieDirectionalG,
            set: (BB, IB) => {
              BB.mieDirectionalG = IB
            }
          },
          metadata: ZB
        }, eB, uB), (0, TB.j)(null, null, dB, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: BB => "distance" in BB,
            get: BB => BB.distance,
            set: (BB, IB) => {
              BB.distance = IB
            }
          },
          metadata: ZB
        }, fB, lB), (0, TB.j)(null, null, CB, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: BB => "inclination" in BB,
            get: BB => BB.inclination,
            set: (BB, IB) => {
              BB.inclination = IB
            }
          },
          metadata: ZB
        }, AB, tB), (0, TB.j)(null, null, QB, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: BB => "azimuth" in BB,
            get: BB => BB.azimuth,
            set: (BB, IB) => {
              BB.azimuth = IB
            }
          },
          metadata: ZB
        }, bB, xB), (0, TB.j)(null, null, sB, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: BB => "sunPosition" in BB,
            get: BB => BB.sunPosition,
            set: (BB, IB) => {
              BB.sunPosition = IB
            }
          },
          metadata: ZB
        }, EB, DB), (0, TB.j)(null, null, wB, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSunPosition" in BB,
            get: BB => BB.useSunPosition,
            set: (BB, IB) => {
              BB.useSunPosition = IB
            }
          },
          metadata: ZB
        }, KB, VB), (0, TB.j)(null, null, OB, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: BB => "cameraOffset" in BB,
            get: BB => BB.cameraOffset,
            set: (BB, IB) => {
              BB.cameraOffset = IB
            }
          },
          metadata: ZB
        }, SB, BI), (0, TB.j)(null, null, YB, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: BB => "up" in BB,
            get: BB => BB.up,
            set: (BB, IB) => {
              BB.up = IB
            }
          },
          metadata: ZB
        }, II, ZI), (0, TB.j)(null, null, iB, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: BB => "dithering" in BB,
            get: BB => BB.dithering,
            set: (BB, IB) => {
              BB.dithering = IB
            }
          },
          metadata: ZB
        }, TI, JI), (0, TB.j)(null, null, pB, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: BB => "rawHdrOutput" in BB,
            get: BB => BB.rawHdrOutput,
            set: (BB, IB) => {
              BB.rawHdrOutput = IB
            }
          },
          metadata: ZB
        }, oI, GI), (0, TB.j)(null, null, aB, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: BB => "cloudiness" in BB,
            get: BB => BB.cloudiness,
            set: (BB, IB) => {
              BB.cloudiness = IB
            }
          },
          metadata: ZB
        }, vI, kI), ZB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ZB
        })
      })(), BB._ShaderLoader = new FB.d((() => [ZB.e(335).then((() => ZB(61362))), ZB.e(328).then((() => ZB(61367)))]), (() => [ZB.e(352).then((() => ZB(61374))), ZB.e(346).then((() => ZB(61376)))])), BB
    })();
    (0, zB.i)("BABYLON.SkyMaterial", WB)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);