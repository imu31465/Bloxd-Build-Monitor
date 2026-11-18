export const id = 284;
export const ids = [284];
export const modules = {
  40326: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(38861),
      yB = dB(40332);
    class pB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = dB, this.ZVB = [], this._maxBlockCapacity = TB || 64, this._selectionContent = new VB.d(1024), this._creationFunc = BB
      }
      update(BB, TB, dB) {
        yB.c._CreateBlocks(BB, TB, dB, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      MVB(BB) {
        for (let TB = 0; TB < this.blocks.length; TB++) {
          this.blocks[TB].addEntry(BB)
        }
      }
      mF(BB) {
        for (let TB = 0; TB < this.blocks.length; TB++) {
          this.blocks[TB].removeEntry(BB)
        }
      }
      select(BB, TB) {
        this._selectionContent.reset();
        for (let dB = 0; dB < this.blocks.length; dB++) {
          this.blocks[dB].select(BB, this._selectionContent, TB)
        }
        return TB ? this._selectionContent.concat(this.ZVB) : this._selectionContent.concatWithNoDuplicate(this.ZVB), this._selectionContent
      }
      intersects(BB, TB, dB) {
        this._selectionContent.reset();
        for (let VB = 0; VB < this.blocks.length; VB++) {
          this.blocks[VB].intersects(BB, TB, this._selectionContent, dB)
        }
        return dB ? this._selectionContent.concat(this.ZVB) : this._selectionContent.concatWithNoDuplicate(this.ZVB), this._selectionContent
      }
      intersectsRay(BB) {
        this._selectionContent.reset();
        for (let TB = 0; TB < this.blocks.length; TB++) {
          this.blocks[TB].intersectsRay(BB, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.ZVB), this._selectionContent
      }
    }
    pB.CreationFuncForMeshes = (BB, TB) => {
      const dB = BB.IK();
      !BB.isBlocked && dB.boundingBox.intersectsMinMax(TB.rVB, TB.KVB) && TB.entries.push(BB)
    }, pB.CreationFuncForSubMeshes = (BB, TB) => {
      BB.IK().boundingBox.intersectsMinMax(TB.rVB, TB.KVB) && TB.entries.push(BB)
    }
  },
  40332: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB
    });
    var VB = dB(36126),
      yB = dB(39060);
    class pB {
      constructor(BB, TB, dB, VB, yB, pB) {
        this.entries = [], this.XVB = new Array, this._capacity = dB, this._depth = VB, this._maxDepth = yB, this._creationFunc = pB, this._minPoint = BB, this._maxPoint = TB, this.XVB.push(BB.clone()), this.XVB.push(TB.clone()), this.XVB.push(BB.clone()), this.XVB[2].x = TB.x, this.XVB.push(BB.clone()), this.XVB[3].y = TB.y, this.XVB.push(BB.clone()), this.XVB[4].z = TB.z, this.XVB.push(TB.clone()), this.XVB[5].z = BB.z, this.XVB.push(TB.clone()), this.XVB[6].x = BB.x, this.XVB.push(TB.clone()), this.XVB[7].y = BB.y
      }
      get Kk() {
        return this._capacity
      }
      get rVB() {
        return this._minPoint
      }
      get KVB() {
        return this._maxPoint
      }
      addEntry(BB) {
        if (this.blocks)
          for (let TB = 0; TB < this.blocks.length; TB++) {
            this.blocks[TB].addEntry(BB)
          } else this._creationFunc(BB, this), this.entries.length > this.Kk && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(BB) {
        if (this.blocks) {
          for (let TB = 0; TB < this.blocks.length; TB++) {
            this.blocks[TB].removeEntry(BB)
          }
          return
        }
        const TB = this.entries.indexOf(BB);
        TB > -1 && this.entries.splice(TB, 1)
      }
      addEntries(BB) {
        for (let TB = 0; TB < BB.length; TB++) {
          const dB = BB[TB];
          this.addEntry(dB)
        }
      }
      select(BB, TB, dB) {
        if (yB.d.IsInFrustum(this.XVB, BB)) {
          if (this.blocks) {
            for (let VB = 0; VB < this.blocks.length; VB++) {
              this.blocks[VB].select(BB, TB, dB)
            }
            return
          }
          dB ? TB.concat(this.entries) : TB.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(BB, TB, dB, VB) {
        if (yB.d.IntersectsSphere(this._minPoint, this._maxPoint, BB, TB)) {
          if (this.blocks) {
            for (let yB = 0; yB < this.blocks.length; yB++) {
              this.blocks[yB].intersects(BB, TB, dB, VB)
            }
            return
          }
          VB ? dB.concat(this.entries) : dB.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(BB, TB) {
        if (BB.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let dB = 0; dB < this.blocks.length; dB++) {
              this.blocks[dB].intersectsRay(BB, TB)
            }
            return
          }
          TB.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        pB._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(BB, TB, dB, yB, lB, JB, YB, gB) {
        YB.blocks = new Array;
        const oB = new VB.p((TB.x - BB.x) / 2, (TB.y - BB.y) / 2, (TB.z - BB.z) / 2);
        for (let VB = 0; VB < 2; VB++)
          for (let TB = 0; TB < 2; TB++)
            for (let kB = 0; kB < 2; kB++) {
              const LB = BB.add(oB.multiplyByFloats(VB, TB, kB)),
                OB = BB.add(oB.multiplyByFloats(VB + 1, TB + 1, kB + 1)),
                DB = new pB(LB, OB, yB, lB + 1, JB, gB);
              DB.addEntries(dB), YB.blocks.push(DB)
            }
      }
    }
  },
  40339: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => oB
    });
    var VB = dB(38843),
      yB = dB(36126),
      pB = dB(39180),
      lB = dB(40293),
      JB = dB(38927),
      YB = dB(36148),
      gB = dB(40326);
    class oB {
      constructor(BB) {
        this.name = JB.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new lB.v(yB.p.Zero(), new yB.p(1, 1, 1)), (BB = BB || YB.c.LastCreatedScene) && (this.Gu = BB, this.Gu.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Gu.getActiveSubMeshCandidates = BB => this.getActiveSubMeshCandidates(BB), this.Gu.getCollidingSubMeshCandidates = (BB, TB) => this.getCollidingSubMeshCandidates(BB, TB), this.Gu.getIntersectingSubMeshCandidates = (BB, TB) => this.getIntersectingSubMeshCandidates(BB, TB))
      }
      register() {
        this.Gu.onMeshRemovedObservable.add((BB => {
          const TB = this.Gu.selectionOctree;
          if (void 0 !== TB && null !== TB) {
            const dB = TB.ZVB.indexOf(BB); - 1 !== dB && TB.ZVB.splice(dB, 1)
          }
        })), this.Gu.onMeshImportedObservable.add((BB => {
          const TB = this.Gu.selectionOctree;
          void 0 !== TB && null !== TB && TB.MVB(BB)
        }))
      }
      getActiveMeshCandidates() {
        return this.Gu.jVB?.select(this.Gu.frustumPlanes) || this.Gu._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(BB) {
        if (BB._submeshesOctree && BB.useOctreeForRenderingSelection) {
          return BB._submeshesOctree.select(this.Gu.frustumPlanes)
        }
        return this.Gu._getDefaultSubMeshCandidates(BB)
      }
      getIntersectingSubMeshCandidates(BB, TB) {
        if (BB._submeshesOctree && BB.useOctreeForPicking) {
          lB.v.TransformToRef(TB, BB.getWorldMatrix(), this._tempRay);
          return BB._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Gu._getDefaultSubMeshCandidates(BB)
      }
      getCollidingSubMeshCandidates(BB, TB) {
        if (BB._submeshesOctree && BB.useOctreeForCollisions) {
          const dB = TB._velocityWorldLength + Math.max(TB._radius.x, TB._radius.y, TB._radius.z);
          return BB._submeshesOctree.intersects(TB._basePointWorld, dB)
        }
        return this.Gu._getDefaultSubMeshCandidates(BB)
      }
      rebuild() {}
      dispose() {}
    }
    let kB = !1;
    kB || (kB = !0, VB.g.prototype.createOrUpdateSelectionOctree = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        dB = this._getComponent(JB.b.NAME_OCTREE);
      dB || (dB = new oB(this), this.OVB(dB)), this.jVB || (this.jVB = new gB.d(gB.d.CreationFuncForMeshes, BB, TB));
      const VB = this.getWorldExtends();
      return this.jVB.update(VB.min, VB.max, this.meshes), this.jVB
    }, Object.defineProperty(VB.g.prototype, "selectionOctree", {
      get: function() {
        return this.jVB
      },
      enumerable: !0,
      configurable: !0
    }), pB.e.prototype.createOrUpdateSubmeshesOctree = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const dB = this.jU();
      let VB = dB._getComponent(JB.b.NAME_OCTREE);
      VB || (VB = new oB(dB), dB.OVB(VB)), this._submeshesOctree || (this._submeshesOctree = new gB.d(gB.d.CreationFuncForSubMeshes, BB, TB)), this.computeWorldMatrix(!0);
      const yB = this.IK().boundingBox;
      return this._submeshesOctree.update(yB.minimumWorld, yB.maximumWorld, this.oN), this._submeshesOctree
    })
  },
  40293: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => FB,
      d: () => uB,
      h: () => DB,
      i: () => OB,
      k: () => wB,
      l: () => zB,
      p: () => fB,
      q: () => MB,
      u: () => sB,
      v: () => kB
    });
    var VB = dB(36132),
      yB = dB(36126),
      pB = dB(36137),
      lB = dB(39051),
      JB = dB(38889),
      YB = dB(36148),
      gB = dB(38955);
    const oB = {
      internalPickerForMesh: void 0
    };
    class kB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VB.b;
        this.origin = BB, this.direction = TB, this.length = dB, this.epsilon = yB
      }
      clone() {
        return new kB(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const VB = kB._TmpVector3[0].YBB(BB.x - dB, BB.y - dB, BB.z - dB),
          yB = kB._TmpVector3[1].YBB(TB.x + dB, TB.y + dB, TB.z + dB);
        let pB, lB, JB, YB, gB = 0,
          oB = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < VB.x || this.origin.x > yB.x) return !1
        } else if (pB = 1 / this.direction.x, lB = (VB.x - this.origin.x) * pB, JB = (yB.x - this.origin.x) * pB, JB === -1 / 0 && (JB = 1 / 0), lB > JB && (YB = lB, lB = JB, JB = YB), gB = Math.max(lB, gB), oB = Math.min(JB, oB), gB > oB) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < VB.y || this.origin.y > yB.y) return !1
        } else if (pB = 1 / this.direction.y, lB = (VB.y - this.origin.y) * pB, JB = (yB.y - this.origin.y) * pB, JB === -1 / 0 && (JB = 1 / 0), lB > JB && (YB = lB, lB = JB, JB = YB), gB = Math.max(lB, gB), oB = Math.min(JB, oB), gB > oB) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < VB.z || this.origin.z > yB.z) return !1
        } else if (pB = 1 / this.direction.z, lB = (VB.z - this.origin.z) * pB, JB = (yB.z - this.origin.z) * pB, JB === -1 / 0 && (JB = 1 / 0), lB > JB && (YB = lB, lB = JB, JB = YB), gB = Math.max(lB, gB), oB = Math.min(JB, oB), gB > oB) return !1;
        return !0
      }
      intersectsBox(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(BB.minimum, BB.maximum, TB)
      }
      intersectsSphere(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const dB = BB.center.x - this.origin.x,
          VB = BB.center.y - this.origin.y,
          yB = BB.center.z - this.origin.z,
          pB = dB * dB + VB * VB + yB * yB,
          lB = BB.radius + TB,
          JB = lB * lB;
        if (pB <= JB) return !0;
        const YB = dB * this.direction.x + VB * this.direction.y + yB * this.direction.z;
        if (YB < 0) return !1;
        return pB - YB * YB <= JB
      }
      intersectsTriangle(BB, TB, dB) {
        const VB = kB._TmpVector3[0],
          pB = kB._TmpVector3[1],
          JB = kB._TmpVector3[2],
          YB = kB._TmpVector3[3],
          gB = kB._TmpVector3[4];
        TB.subtractToRef(BB, VB), dB.subtractToRef(BB, pB), yB.p.CrossToRef(this.direction, pB, JB);
        const oB = yB.p.Dot(VB, JB);
        if (0 === oB) return null;
        const LB = 1 / oB;
        this.origin.subtractToRef(BB, YB);
        const OB = yB.p.Dot(YB, JB) * LB;
        if (OB < -this.epsilon || OB > 1 + this.epsilon) return null;
        yB.p.CrossToRef(YB, VB, gB);
        const DB = yB.p.Dot(this.direction, gB) * LB;
        if (DB < -this.epsilon || OB + DB > 1 + this.epsilon) return null;
        const uB = yB.p.Dot(pB, gB) * LB;
        return uB > this.length || uB < 0 ? null : new lB.d(1 - OB - DB, OB, uB)
      }
      intersectsPlane(BB) {
        let TB;
        const dB = yB.p.Dot(BB.normal, this.direction);
        if (Math.abs(dB) < 9.99999997475243e-7) return null;
        {
          const VB = yB.p.Dot(BB.normal, this.origin);
          return TB = (-BB.d - VB) / dB, TB < 0 ? TB < -9.99999997475243e-7 ? null : 0 : TB
        }
      }
      intersectsAxis(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (BB) {
          case "y": {
            const BB = (this.origin.y - TB) / this.direction.y;
            return BB > 0 ? null : new yB.p(this.origin.x + this.direction.x * -BB, TB, this.origin.z + this.direction.z * -BB)
          }
          case "x": {
            const BB = (this.origin.x - TB) / this.direction.x;
            return BB > 0 ? null : new yB.p(TB, this.origin.y + this.direction.y * -BB, this.origin.z + this.direction.z * -BB)
          }
          case "z": {
            const BB = (this.origin.z - TB) / this.direction.z;
            return BB > 0 ? null : new yB.p(this.origin.x + this.direction.x * -BB, this.origin.y + this.direction.y * -BB, TB)
          }
          default:
            return null
        }
      }
      LyB(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pB = arguments.length > 4 ? arguments[4] : void 0,
          lB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const JB = yB.j.Matrix[0];
        return BB.getWorldMatrix().invertToRef(JB), this._tmpRay ? kB.TransformToRef(this, JB, this._tmpRay) : this._tmpRay = kB.Transform(this, JB), BB.intersects(this._tmpRay, TB, dB, VB, pB, lB)
      }
      intersectsMeshes(BB, TB, dB) {
        dB ? dB.length = 0 : dB = [];
        for (let VB = 0; VB < BB.length; VB++) {
          const yB = this.LyB(BB[VB], TB);
          yB.hit && dB.push(yB)
        }
        return dB.sort(this._comparePickingInfo), dB
      }
      _comparePickingInfo(BB, TB) {
        return BB.distance < TB.distance ? -1 : BB.distance > TB.distance ? 1 : 0
      }
      intersectionSegment(BB, TB, dB) {
        const VB = this.origin,
          pB = yB.j.RD[0],
          lB = yB.j.RD[1],
          JB = yB.j.RD[2],
          YB = yB.j.RD[3];
        TB.subtractToRef(BB, pB), this.direction.scaleToRef(kB._Rayl, JB), VB.addToRef(JB, lB), BB.subtractToRef(VB, YB);
        const gB = yB.p.Dot(pB, pB),
          oB = yB.p.Dot(pB, JB),
          LB = yB.p.Dot(JB, JB),
          OB = yB.p.Dot(pB, YB),
          DB = yB.p.Dot(JB, YB),
          uB = gB * LB - oB * oB;
        let HB, EB, vB = uB,
          mB = uB;
        uB < kB._Smallnum ? (HB = 0, vB = 1, EB = DB, mB = LB) : (HB = oB * DB - LB * OB, EB = gB * DB - oB * OB, HB < 0 ? (HB = 0, EB = DB, mB = LB) : HB > vB && (HB = vB, EB = DB + oB, mB = LB)), EB < 0 ? (EB = 0, -OB < 0 ? HB = 0 : -OB > gB ? HB = vB : (HB = -OB, vB = gB)) : EB > mB && (EB = mB, -OB + oB < 0 ? HB = 0 : -OB + oB > gB ? HB = vB : (HB = -OB + oB, vB = gB));
        const iB = Math.abs(HB) < kB._Smallnum ? 0 : HB / vB,
          NB = Math.abs(EB) < kB._Smallnum ? 0 : EB / mB,
          tB = yB.j.RD[4];
        JB.scaleToRef(NB, tB);
        const fB = yB.j.RD[5];
        pB.scaleToRef(iB, fB), fB.addInPlace(YB);
        const sB = yB.j.RD[6];
        fB.subtractToRef(tB, sB);
        return NB > 0 && NB <= this.length && sB.lengthSquared() < dB * dB ? fB.length() : -1
      }
      update(BB, TB, dB, VB, pB, lB, JB) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          kB._RayDistant || (kB._RayDistant = kB.Zero()), kB._RayDistant.unprojectRayToRef(BB, TB, dB, VB, yB.b.IdentityReadOnly, lB, JB);
          const YB = yB.j.Matrix[0];
          pB.invertToRef(YB), kB.TransformToRef(kB._RayDistant, YB, this)
        } else this.unprojectRayToRef(BB, TB, dB, VB, pB, lB, JB);
        return this
      }
      static Zero() {
        return new kB(yB.p.Zero(), yB.p.Zero())
      }
      static CreateNew(BB, TB, dB, VB, yB, pB, lB) {
        return kB.Zero().update(BB, TB, dB, VB, yB, pB, lB)
      }
      static CreateNewFromTo(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yB.b.IdentityReadOnly;
        const VB = new kB(new yB.p(0, 0, 0), new yB.p(0, 0, 0));
        return kB.CreateFromToToRef(BB, TB, VB, dB)
      }
      static CreateFromToToRef(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yB.b.IdentityReadOnly;
        dB.origin.bdB(BB);
        const pB = TB.subtractToRef(BB, dB.direction),
          lB = Math.sqrt(pB.x * pB.x + pB.y * pB.y + pB.z * pB.z);
        return dB.length = lB, dB.direction.normalize(), kB.TransformToRef(dB, VB, dB)
      }
      static Transform(BB, TB) {
        const dB = new kB(new yB.p(0, 0, 0), new yB.p(0, 0, 0));
        return kB.TransformToRef(BB, TB, dB), dB
      }
      static TransformToRef(BB, TB, dB) {
        yB.p.TransformCoordinatesToRef(BB.origin, TB, dB.origin), yB.p.TransformNormalToRef(BB.direction, TB, dB.direction), dB.length = BB.length, dB.epsilon = BB.epsilon;
        const VB = dB.direction,
          pB = VB.length();
        if (0 !== pB && 1 !== pB) {
          const BB = 1 / pB;
          VB.x *= BB, VB.y *= BB, VB.z *= BB, dB.length *= pB
        }
        return dB
      }
      unprojectRayToRef(BB, TB, dB, VB, pB, lB, JB) {
        const gB = yB.j.Matrix[0];
        pB.multiplyToRef(lB, gB), gB.multiplyToRef(JB, gB), gB.invert();
        const oB = YB.c.LastCreatedEngine,
          kB = yB.j.RD[0];
        kB.x = BB / dB * 2 - 1, kB.y = -(TB / VB * 2 - 1), kB.z = oB?.fVB ? 1 : oB?.isNDCHalfZRange ? 0 : -1;
        const LB = yB.j.RD[1].YBB(kB.x, kB.y, 1 - 1e-8),
          OB = yB.j.RD[2],
          DB = yB.j.RD[3];
        yB.p.TransformCoordinatesToRef(kB, gB, OB), yB.p.TransformCoordinatesToRef(LB, gB, DB), this.origin.bdB(OB), DB.subtractToRef(OB, this.direction), this.direction.normalize()
      }
    }

    function LB(BB, TB, dB, VB, yB) {
      let pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const lB = kB.Zero();
      return OB(BB, TB, dB, VB, lB, yB, pB), lB
    }

    function OB(BB, TB, dB, VB, pB, lB) {
      let JB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        YB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const gB = BB.PD();
      if (!lB && !(lB = BB.activeCamera) && !(lB = BB.cameraToUseForPointers)) return BB;
      const oB = lB.viewport,
        kB = gB.getRenderHeight(),
        {
          x: LB,
          y: OB,
          width: DB,
          height: uB
        } = oB.toGlobal(gB.getRenderWidth(), kB),
        HB = 1 / gB.getHardwareScalingLevel();
      return TB = TB * HB - LB, dB = dB * HB - (kB - OB - uB), pB.update(TB, dB, DB, uB, VB || yB.b.IdentityReadOnly, JB ? yB.b.IdentityReadOnly : lB.getViewMatrix(), lB.getProjectionMatrix(), YB), BB
    }

    function DB(BB, TB, dB, VB) {
      const yB = kB.Zero();
      return uB(BB, TB, dB, yB, VB), yB
    }

    function uB(BB, TB, dB, VB, pB) {
      if (!JB.b) return BB;
      const lB = BB.PD();
      if (!pB && !(pB = BB.activeCamera) && !(pB = BB.cameraToUseForPointers)) throw new Error("Active camera not set");
      const YB = pB.viewport,
        gB = lB.getRenderHeight(),
        {
          x: oB,
          y: kB,
          width: LB,
          height: OB
        } = YB.toGlobal(lB.getRenderWidth(), gB),
        DB = yB.b.Identity(),
        uB = 1 / lB.getHardwareScalingLevel();
      return TB = TB * uB - oB, dB = dB * uB - (gB - kB - OB), VB.update(TB, dB, LB, OB, DB, DB, pB.getProjectionMatrix()), BB
    }

    function HB(BB, TB, dB, VB, yB, pB, lB, JB) {
      return EB(BB, dB, VB, TB(VB, dB.enableDistantPicking), yB, pB, lB, JB)
    }

    function EB(BB, TB, dB, VB, yB, pB, lB, JB) {
      const YB = TB.intersects(VB, yB, lB, pB, dB, JB);
      return YB && YB.hit ? !yB && null != BB && YB.distance >= BB.distance ? null : YB : null
    }

    function vB(BB, TB) {
      return "InstancedLinesMesh" === BB || "LinesMesh" === BB ? TB.intersectionThreshold : 0
    }

    function mB(BB) {
      const TB = BB.getClassName();
      if ("GreasedLineMesh" === TB) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const dB = BB.rawBoundingInfo;
      return {
        rawBoundingInfo: dB,
        intersectionThreshold: dB ? vB(TB, BB) : 0
      }
    }

    function iB(BB, TB, dB, VB, yB) {
      const pB = BB(dB, TB.enableDistantPicking);
      return pB.intersectsSphere(VB.bVB, yB) && pB.intersectsBox(VB.boundingBox, yB) ? pB : null
    }

    function NB(BB, TB, dB, VB, pB, lB) {
      let YB = null;
      const gB = !!(BB.activeCameras && BB.activeCameras.length > 1 && BB.cameraToUseForPointers !== BB.activeCamera),
        kB = BB.cameraToUseForPointers || BB.activeCamera,
        LB = oB.internalPickerForMesh || HB,
        OB = LB === HB;
      for (let JB = 0; JB < BB.meshes.length; JB++) {
        const oB = BB.meshes[JB];
        if (dB) {
          if (!dB(oB, -1)) continue
        } else if (!oB.isEnabled() || !oB.isVisible || !oB.xu) continue;
        const DB = gB && oB.isWorldMatrixCameraDependent(),
          uB = oB.computeWorldMatrix(DB, kB);
        if (oB.hasThinInstances && oB.xTB) {
          const BB = LB(YB, TB, oB, uB, !0, !0, lB);
          if (BB) {
            if (pB) return BB;
            const {
              rawBoundingInfo: JB,
              intersectionThreshold: gB
            } = mB(oB), kB = oB._thinInstanceDataStorage.matrixData;
            if (kB) {
              const BB = yB.j.Matrix[0],
                DB = yB.j.Matrix[1],
                HB = Math.min(oB.K9, kB.length >> 4);
              for (let vB = 0; vB < HB; vB++) {
                if (dB && !dB(oB, vB)) continue;
                yB.b.FromArrayToRef(kB, vB << 4, BB), BB.multiplyToRef(uB, DB);
                const HB = OB && JB ? iB(TB, oB, DB, JB, gB) : null;
                if (OB && JB && !HB) continue;
                const mB = OB && HB ? EB(YB, oB, DB, HB, VB, pB, lB, !0) : LB(YB, TB, oB, DB, VB, pB, lB, !0);
                if (mB && (YB = mB, YB.thinInstanceIndex = vB, VB)) return YB
              }
            }
          }
        } else {
          const BB = LB(YB, TB, oB, uB, VB, pB, lB);
          if (BB && (YB = BB, VB)) return YB
        }
      }
      return YB || new JB.b
    }

    function tB(BB, TB, dB, VB) {
      if (!JB.b) return null;
      const pB = [],
        lB = !!(BB.activeCameras && BB.activeCameras.length > 1 && BB.cameraToUseForPointers !== BB.activeCamera),
        YB = BB.cameraToUseForPointers || BB.activeCamera,
        gB = oB.internalPickerForMesh || HB,
        kB = gB === HB;
      for (let JB = 0; JB < BB.meshes.length; JB++) {
        const oB = BB.meshes[JB];
        if (dB) {
          if (!dB(oB, -1)) continue
        } else if (!oB.isEnabled() || !oB.isVisible || !oB.xu) continue;
        const LB = lB && oB.isWorldMatrixCameraDependent(),
          OB = oB.computeWorldMatrix(LB, YB);
        if (oB.hasThinInstances && oB.xTB) {
          if (gB(null, TB, oB, OB, !0, !0, VB)) {
            const {
              rawBoundingInfo: BB,
              intersectionThreshold: lB
            } = mB(oB), JB = oB._thinInstanceDataStorage.matrixData;
            if (JB) {
              const YB = yB.j.Matrix[0],
                LB = yB.j.Matrix[1],
                DB = Math.min(oB.K9, JB.length >> 4);
              for (let uB = 0; uB < DB; uB++) {
                if (dB && !dB(oB, uB)) continue;
                yB.b.FromArrayToRef(JB, uB << 4, YB), YB.multiplyToRef(OB, LB);
                const DB = kB && BB ? iB(TB, oB, LB, BB, lB) : null;
                if (kB && BB && !DB) continue;
                const HB = kB && DB ? EB(null, oB, LB, DB, !1, !1, VB, !0) : gB(null, TB, oB, LB, !1, !1, VB, !0);
                HB && (HB.thinInstanceIndex = uB, pB.push(HB))
              }
            }
          }
        } else {
          const BB = gB(null, TB, oB, OB, !1, !1, VB);
          BB && pB.push(BB)
        }
      }
      return pB
    }

    function fB(BB, TB, dB, VB, pB, lB) {
      if (!JB.b) return null;
      const YB = NB(BB, (VB => (BB._tempPickingRay || (BB._tempPickingRay = kB.Zero()), OB(BB, TB, dB, VB, BB._tempPickingRay, lB || null), BB._tempPickingRay)), VB, pB, !0);
      return YB && (YB.ray = LB(BB, TB, dB, yB.b.Identity(), lB || null)), YB
    }

    function sB(BB, TB, dB, VB, pB, lB, JB) {
      const YB = NB(BB, ((VB, yB) => (BB._tempPickingRay || (BB._tempPickingRay = kB.Zero()), OB(BB, TB, dB, VB, BB._tempPickingRay, lB || null, !1, yB), BB._tempPickingRay)), VB, pB, !1, JB);
      return YB && (YB.ray = LB(BB, TB, dB, yB.b.Identity(), lB || null)), YB
    }

    function MB(BB, TB, dB, VB, pB) {
      const lB = NB(BB, (dB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = yB.b.Identity()), dB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = kB.Zero()), kB.TransformToRef(TB, BB._pickWithRayInverseMatrix, BB._cachedRayForTransform), BB._cachedRayForTransform)), dB, VB, !1, pB);
      return lB && (lB.ray = TB), lB
    }

    function zB(BB, TB, dB, VB, yB, pB) {
      return tB(BB, (VB => LB(BB, TB, dB, VB, yB || null)), VB, pB)
    }

    function wB(BB, TB, dB, VB) {
      return tB(BB, (dB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = yB.b.Identity()), dB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = kB.Zero()), kB.TransformToRef(TB, BB._pickWithRayInverseMatrix, BB._cachedRayForTransform), BB._cachedRayForTransform)), dB, VB)
    }

    function UB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        VB = arguments.length > 3 ? arguments[3] : void 0,
        pB = arguments.length > 4 ? arguments[4] : void 0;
      VB || (VB = BB.getWorldMatrix()), TB.length = dB, pB ? TB.origin.bdB(pB) : TB.origin.bdB(BB.position);
      const lB = yB.j.RD[2];
      lB.set(0, 0, BB._scene.useRightHandedSystem ? -1 : 1);
      const JB = yB.j.RD[3];
      return yB.p.TransformNormalToRef(lB, VB, JB), yB.p.NormalizeToRef(JB, TB.direction), TB
    }

    function FB(BB, TB) {
      TB && (TB.prototype.getForwardRay = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        return UB(this, new kB(yB.p.Zero(), yB.p.Zero(), BB), BB, TB, dB)
      }, TB.prototype.getForwardRayToRef = function(BB) {
        return UB(this, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), BB && (gB.c._IsPickingAvailable = !0, BB.prototype.createPickingRay = function(BB, TB, dB, VB) {
        return LB(this, BB, TB, dB, VB, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    kB._TmpVector3 = (0, pB.b)(6, yB.p.Zero), kB._RayDistant = kB.Zero(), kB._Smallnum = 1e-8, kB._Rayl = 1e9
  },
  40287: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB.v
    });
    var VB = dB(38843),
      yB = dB(38974),
      pB = dB(40293);
    let lB = !1;
    lB || (lB = !0, (0, pB.b)(VB.g, yB.b), VB.g.prototype.createPickingRayToRef = function(BB, TB, dB, VB, yB) {
      let lB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        JB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, pB.i)(this, BB, TB, dB, VB, yB, lB, JB)
    }, VB.g.prototype.createPickingRayInCameraSpace = function(BB, TB, dB) {
      return (0, pB.h)(this, BB, TB, dB)
    }, VB.g.prototype.createPickingRayInCameraSpaceToRef = function(BB, TB, dB, VB) {
      return (0, pB.d)(this, BB, TB, dB, VB)
    }, VB.g.prototype.pickWithBoundingInfo = function(BB, TB, dB, VB, yB) {
      return (0, pB.p)(this, BB, TB, dB, VB, yB)
    }, VB.g.prototype.dO = function(BB, TB, dB, VB, yB, lB) {
      let JB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, pB.u)(this, BB, TB, dB, VB, yB, lB, JB)
    }, VB.g.prototype.pickWithRay = function(BB, TB, dB, VB) {
      return (0, pB.q)(this, BB, TB, dB, VB)
    }, VB.g.prototype.multiPick = function(BB, TB, dB, VB, yB) {
      return (0, pB.l)(this, BB, TB, dB, VB, yB)
    }, VB.g.prototype.multiPickWithRay = function(BB, TB, dB) {
      return (0, pB.k)(this, BB, TB, dB)
    })
  },
  40295: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => oB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(36126),
      lB = dB(39016),
      JB = dB(40298),
      YB = dB(38980),
      gB = dB(36166);
    let oB = (() => {
        var BB;
        let TB, dB, YB, gB, oB, kB, LB, OB, DB = JB.d,
          uB = [],
          HB = [],
          EB = [],
          vB = [],
          mB = [],
          iB = [],
          NB = [],
          tB = [],
          fB = [],
          sB = [],
          MB = [],
          zB = [],
          wB = [];
        return BB = class extends DB {
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
          constructor(BB, TB, dB, yB) {
            super(BB, dB, yB), this._shadowFrustumSize = ((0, VB.h)(this, uB), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, VB.h)(this, HB, !0), this.autoCalcShadowZBounds = ((0, VB.h)(this, EB), (0, VB.h)(this, vB, !1)), this._orthoLeft = ((0, VB.h)(this, mB), (0, VB.h)(this, iB, Number.MAX_VALUE)), this._orthoRight = ((0, VB.h)(this, NB), (0, VB.h)(this, tB, Number.MIN_VALUE)), this._orthoTop = ((0, VB.h)(this, fB), (0, VB.h)(this, sB, Number.MIN_VALUE)), this._orthoBottom = ((0, VB.h)(this, MB), (0, VB.h)(this, zB, Number.MAX_VALUE)), (0, VB.h)(this, wB), this.position = TB.scale(-1), this.direction = TB
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return lB.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(BB, TB, dB) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(BB) : this._setDefaultAutoExtendShadowProjectionMatrix(BB, TB, dB)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(BB) {
            const TB = this.jU().activeCamera;
            pB.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : TB ? TB.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : TB ? TB.maxZ : 1e4, BB, this.jU().PD().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(BB, TB, dB) {
            const VB = this.jU().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const BB = pB.p.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let VB = Number.MAX_VALUE,
                yB = -Number.MAX_VALUE;
              for (let lB = 0; lB < dB.length; lB++) {
                const JB = dB[lB];
                if (!JB) continue;
                const YB = JB.IK().boundingBox;
                for (let dB = 0; dB < YB.vectorsWorld.length; dB++) pB.p.TransformCoordinatesToRef(YB.vectorsWorld[dB], TB, BB), BB.x < this._orthoLeft && (this._orthoLeft = BB.x), BB.y < this._orthoBottom && (this._orthoBottom = BB.y), BB.x > this._orthoRight && (this._orthoRight = BB.x), BB.y > this._orthoTop && (this._orthoTop = BB.y), this.autoCalcShadowZBounds && (BB.z < VB && (VB = BB.z), BB.z > yB && (yB = BB.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = VB, this._shadowMaxZ = yB)
            }
            const yB = this._orthoRight - this._orthoLeft,
              lB = this._orthoTop - this._orthoBottom,
              JB = void 0 !== this.shadowMinZ ? this.shadowMinZ : VB?.minZ || 0,
              YB = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : VB?.maxZ || 1e4,
              gB = this.jU().PD().fVB;
            pB.b.OrthoOffCenterLHToRef(this._orthoLeft - yB * this.shadowOrthoScale, this._orthoRight + yB * this.shadowOrthoScale, this._orthoBottom - lB * this.shadowOrthoScale, this._orthoTop + lB * this.shadowOrthoScale, gB ? YB : JB, gB ? JB : YB, BB, this.jU().PD().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(BB, TB) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, TB), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, TB), this)
          }
          transferToNodeMaterialEffect(BB, TB) {
            return this.computeTransformedInformation() ? (BB.setFloat3(TB, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (BB.setFloat3(TB, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(BB) {
            const TB = this._scene.PD();
            return !TB.fVB && TB.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(BB) {
            const TB = this._scene.PD();
            return TB.fVB && TB.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(BB, TB) {
            BB["DIRLIGHT" + TB] = !0
          }
        }, (() => {
          const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(DB[Symbol.metadata] ?? null) : void 0;
          TB = [(0, yB.W)()], dB = [(0, yB.W)()], YB = [(0, yB.W)()], gB = [(0, yB.W)()], oB = [(0, yB.W)("orthoLeft")], kB = [(0, yB.W)("orthoRight")], LB = [(0, yB.W)("orthoTop")], OB = [(0, yB.W)("orthoBottom")], (0, VB.g)(BB, null, TB, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: BB => "shadowFrustumSize" in BB,
              get: BB => BB.shadowFrustumSize
            },
            metadata: pB
          }, null, uB), (0, VB.g)(BB, null, dB, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "shadowOrthoScale" in BB,
              get: BB => BB.shadowOrthoScale
            },
            metadata: pB
          }, null, uB), (0, VB.g)(null, null, YB, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: BB => "autoUpdateExtends" in BB,
              get: BB => BB.autoUpdateExtends,
              set: (BB, TB) => {
                BB.autoUpdateExtends = TB
              }
            },
            metadata: pB
          }, HB, EB), (0, VB.g)(null, null, gB, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: BB => "autoCalcShadowZBounds" in BB,
              get: BB => BB.autoCalcShadowZBounds,
              set: (BB, TB) => {
                BB.autoCalcShadowZBounds = TB
              }
            },
            metadata: pB
          }, vB, mB), (0, VB.g)(null, null, oB, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoLeft" in BB,
              get: BB => BB._orthoLeft,
              set: (BB, TB) => {
                BB._orthoLeft = TB
              }
            },
            metadata: pB
          }, iB, NB), (0, VB.g)(null, null, kB, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoRight" in BB,
              get: BB => BB._orthoRight,
              set: (BB, TB) => {
                BB._orthoRight = TB
              }
            },
            metadata: pB
          }, tB, fB), (0, VB.g)(null, null, LB, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoTop" in BB,
              get: BB => BB._orthoTop,
              set: (BB, TB) => {
                BB._orthoTop = TB
              }
            },
            metadata: pB
          }, sB, MB), (0, VB.g)(null, null, OB, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: BB => "_orthoBottom" in BB,
              get: BB => BB._orthoBottom,
              set: (BB, TB) => {
                BB._orthoBottom = TB
              }
            },
            metadata: pB
          }, zB, wB), pB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pB
          })
        })(), BB
      })(),
      kB = !1;
    kB || (kB = !0, YB.e.AddNodeConstructor("Light_Type_1", ((BB, TB) => () => new oB(BB, pB.p.Zero(), TB))), (0, gB.g)("BABYLON.DirectionalLight", oB))
  },
  40308: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => GT
    });
    var VB = dB(37681),
      yB = dB(36150),
      pB = dB(36126),
      lB = dB(38897),
      JB = dB(40310),
      YB = dB(36148),
      gB = dB(39030),
      oB = dB(36183),
      kB = dB(37690),
      LB = dB(37646),
      OB = dB(36157);
    class DB {
      constructor() {
        this.direction1 = new pB.p(0, 1, 0), this.direction2 = new pB.p(0, 1, 0)
      }
      startDirectionFunction(BB, TB, dB, VB) {
        const yB = (0, OB.RandomRange)(this.direction1.x, this.direction2.x),
          lB = (0, OB.RandomRange)(this.direction1.y, this.direction2.y),
          JB = (0, OB.RandomRange)(this.direction1.z, this.direction2.z);
        VB ? TB.YBB(yB, lB, JB) : pB.p.TransformNormalFromFloatsToRef(yB, lB, JB, BB, TB)
      }
      startPositionFunction(BB, TB, dB, VB) {
        VB ? TB.YBB(0, 0, 0) : pB.p.TransformCoordinatesFromFloatsToRef(0, 0, 0, BB, TB)
      }
      clone() {
        const BB = new DB;
        return LB.b.DeepCopy(this, BB), BB
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
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.FVB(), BB.direction2 = this.direction2.FVB(), BB
      }
      parse(BB) {
        pB.p.FromArrayToRef(BB.direction1, 0, this.direction1), pB.p.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
    class uB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = BB, this.radiusRange = TB, this.directionRandomizer = dB
      }
      startDirectionFunction(BB, TB, dB, VB) {
        const yB = dB.position.subtract(BB.getTranslation()).normalize(),
          lB = (0, OB.RandomRange)(0, this.directionRandomizer),
          JB = (0, OB.RandomRange)(0, this.directionRandomizer),
          YB = (0, OB.RandomRange)(0, this.directionRandomizer);
        yB.x += lB, yB.y += JB, yB.z += YB, yB.normalize(), VB ? TB.bdB(yB) : pB.p.TransformNormalFromFloatsToRef(yB.x, yB.y, yB.z, BB, TB)
      }
      startPositionFunction(BB, TB, dB, VB) {
        const yB = this.radius - (0, OB.RandomRange)(0, this.radius * this.radiusRange),
          lB = (0, OB.RandomRange)(0, 1),
          JB = (0, OB.RandomRange)(0, 2 * Math.PI),
          YB = Math.acos(2 * lB - 1),
          gB = yB * Math.cos(JB) * Math.sin(YB),
          oB = yB * Math.cos(YB),
          kB = yB * Math.sin(JB) * Math.sin(YB);
        VB ? TB.YBB(gB, Math.abs(oB), kB) : pB.p.TransformCoordinatesFromFloatsToRef(gB, Math.abs(oB), kB, BB, TB)
      }
      clone() {
        const BB = new uB(this.radius, this.directionRandomizer);
        return LB.b.DeepCopy(this, BB), BB
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
    class HB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = BB, this.radiusRange = TB, this.directionRandomizer = dB
      }
      startDirectionFunction(BB, TB, dB, VB) {
        const yB = dB.position.subtract(BB.getTranslation()).normalize(),
          lB = (0, OB.RandomRange)(0, this.directionRandomizer),
          JB = (0, OB.RandomRange)(0, this.directionRandomizer),
          YB = (0, OB.RandomRange)(0, this.directionRandomizer);
        yB.x += lB, yB.y += JB, yB.z += YB, yB.normalize(), VB ? TB.bdB(yB) : pB.p.TransformNormalFromFloatsToRef(yB.x, yB.y, yB.z, BB, TB)
      }
      startPositionFunction(BB, TB, dB, VB) {
        const yB = this.radius - (0, OB.RandomRange)(0, this.radius * this.radiusRange),
          lB = (0, OB.RandomRange)(0, 1),
          JB = (0, OB.RandomRange)(0, 2 * Math.PI),
          YB = Math.acos(2 * lB - 1),
          gB = yB * Math.cos(JB) * Math.sin(YB),
          oB = yB * Math.cos(YB),
          kB = yB * Math.sin(JB) * Math.sin(YB);
        VB ? TB.YBB(gB, oB, kB) : pB.p.TransformCoordinatesFromFloatsToRef(gB, oB, kB, BB, TB)
      }
      clone() {
        const BB = new HB(this.radius, this.directionRandomizer);
        return LB.b.DeepCopy(this, BB), BB
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
    class EB extends HB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new pB.p(0, 1, 0),
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new pB.p(0, 1, 0);
        super(BB), this.direction1 = TB, this.direction2 = dB
      }
      startDirectionFunction(BB, TB, dB, VB) {
        const yB = (0, OB.RandomRange)(this.direction1.x, this.direction2.x),
          lB = (0, OB.RandomRange)(this.direction1.y, this.direction2.y),
          JB = (0, OB.RandomRange)(this.direction1.z, this.direction2.z);
        VB ? TB.YBB(yB, lB, JB) : pB.p.TransformNormalFromFloatsToRef(yB, lB, JB, BB, TB)
      }
      clone() {
        const BB = new EB(this.radius, this.direction1, this.direction2);
        return LB.b.DeepCopy(this, BB), BB
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
        return BB.direction1 = this.direction1.FVB(), BB.direction2 = this.direction2.FVB(), BB
      }
      parse(BB) {
        super.parse(BB), pB.p.FromArrayToRef(BB.direction1, 0, this.direction1), pB.p.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
    var vB = dB(37643);
    class mB {
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
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = dB, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = TB, this.radius = BB
      }
      startDirectionFunction(BB, TB, dB, VB) {
        const yB = dB.position.subtract(BB.getTranslation()).normalize(),
          lB = (0, OB.RandomRange)(0, this.directionRandomizer),
          JB = (0, OB.RandomRange)(0, this.directionRandomizer),
          YB = (0, OB.RandomRange)(0, this.directionRandomizer);
        yB.x += lB, yB.y += JB, yB.z += YB, yB.normalize(), VB ? TB.bdB(yB) : pB.p.TransformNormalFromFloatsToRef(yB.x, yB.y, yB.z, BB, TB)
      }
      startPositionFunction(BB, TB, dB, VB) {
        const yB = (0, OB.RandomRange)(0, 2 * Math.PI);
        let lB;
        this.emitFromSpawnPointOnly ? lB = 1e-4 : (lB = (0, OB.RandomRange)(0, this.heightRange), lB = 1 - lB * lB);
        let JB = this._radius - (0, OB.RandomRange)(0, this._radius * this.radiusRange);
        JB *= lB;
        const YB = JB * Math.sin(yB),
          gB = JB * Math.cos(yB),
          oB = lB * this._height;
        if (VB) return TB.x = YB, TB.y = oB, void(TB.z = gB);
        pB.p.TransformCoordinatesFromFloatsToRef(YB, oB, gB, BB, TB)
      }
      clone() {
        const BB = new mB(this._radius, this._angle, this.directionRandomizer);
        return LB.b.DeepCopy(this, BB), BB
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
    class iB extends mB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new pB.p(0, 1, 0),
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pB.p(0, 1, 0);
        super(BB, TB), this.direction1 = dB, this.direction2 = VB
      }
      startDirectionFunction(BB, TB, dB, VB) {
        const yB = (0, OB.RandomRange)(this.direction1.x, this.direction2.x),
          lB = (0, OB.RandomRange)(this.direction1.y, this.direction2.y),
          JB = (0, OB.RandomRange)(this.direction1.z, this.direction2.z);
        VB ? TB.YBB(yB, lB, JB) : pB.p.TransformNormalFromFloatsToRef(yB, lB, JB, BB, TB)
      }
      clone() {
        const BB = new iB(this.radius, this.angle, this.direction1, this.direction2);
        return LB.b.DeepCopy(this, BB), BB
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
        return BB.direction1 = this.direction1.FVB(), BB.direction2 = this.direction2.FVB(), BB
      }
      parse(BB) {
        super.parse(BB), pB.p.FromArrayToRef(BB.direction1, 0, this.direction1), pB.p.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
    class NB {
      get mesh() {
        return this._mesh
      }
      set mesh(BB) {
        this._mesh !== BB && (this._mesh = BB, BB ? (this._indices = BB.elB(), this._positions = BB.getVerticesData(lB.m.PositionKind), this._normals = BB.getVerticesData(lB.m.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = pB.p.Zero(), this._mesh = null, this.direction1 = new pB.p(0, 1, 0), this.direction2 = new pB.p(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = BB
      }
      startDirectionFunction(BB, TB, dB, VB) {
        if (this.useMeshNormalsForDirection && this._normals) return void pB.p.TransformNormalToRef(this._storedNormal, BB, TB);
        const yB = (0, OB.RandomRange)(this.direction1.x, this.direction2.x),
          lB = (0, OB.RandomRange)(this.direction1.y, this.direction2.y),
          JB = (0, OB.RandomRange)(this.direction1.z, this.direction2.z);
        VB ? TB.YBB(yB, lB, JB) : pB.p.TransformNormalFromFloatsToRef(yB, lB, JB, BB, TB)
      }
      startPositionFunction(BB, TB, dB, VB) {
        if (!this._indices || !this._positions) return;
        const yB = 3 * (Math.random() * (this._indices.length / 3) | 0),
          lB = Math.random(),
          JB = Math.random() * (1 - lB),
          YB = 1 - lB - JB,
          gB = this._indices[yB],
          oB = this._indices[yB + 1],
          kB = this._indices[yB + 2],
          LB = pB.j.RD[0],
          OB = pB.j.RD[1],
          DB = pB.j.RD[2],
          uB = pB.j.RD[3];
        pB.p.FromArrayToRef(this._positions, 3 * gB, LB), pB.p.FromArrayToRef(this._positions, 3 * oB, OB), pB.p.FromArrayToRef(this._positions, 3 * kB, DB), uB.x = lB * LB.x + JB * OB.x + YB * DB.x, uB.y = lB * LB.y + JB * OB.y + YB * DB.y, uB.z = lB * LB.z + JB * OB.z + YB * DB.z, VB ? TB.YBB(uB.x, uB.y, uB.z) : pB.p.TransformCoordinatesFromFloatsToRef(uB.x, uB.y, uB.z, BB, TB), this.useMeshNormalsForDirection && this._normals && (pB.p.FromArrayToRef(this._normals, 3 * gB, LB), pB.p.FromArrayToRef(this._normals, 3 * oB, OB), pB.p.FromArrayToRef(this._normals, 3 * kB, DB), this._storedNormal.x = lB * LB.x + JB * OB.x + YB * DB.x, this._storedNormal.y = lB * LB.y + JB * OB.y + YB * DB.y, this._storedNormal.z = lB * LB.z + JB * OB.z + YB * DB.z)
      }
      clone() {
        const BB = new NB(this.mesh);
        return LB.b.DeepCopy(this, BB), BB
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
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.FVB(), BB.direction2 = this.direction2.FVB(), BB.meshId = this.mesh?.id, BB.useMeshNormalsForDirection = this.useMeshNormalsForDirection, BB
      }
      parse(BB, TB) {
        pB.p.FromArrayToRef(BB.direction1, 0, this.direction1), pB.p.FromArrayToRef(BB.direction2, 0, this.direction2), BB.meshId && TB && (this.mesh = TB.getLastMeshById(BB.meshId)), this.useMeshNormalsForDirection = BB.useMeshNormalsForDirection
      }
    }
    class tB {
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
        const TB = this._attractors.indexOf(BB); - 1 !== TB && this._attractors.splice(TB, 1)
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
        this._useLogarithmicDepth = BB && this.jU().PD().getCaps().fragmentDepthSupported
      }
      jU() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(BB) {
        switch (BB) {
          case tB.BLENDMODE_MULTIPLYADD:
            return;
          case tB.BLENDMODE_ADD:
            BB = 1;
            break;
          case tB.BLENDMODE_ONEONE:
            BB = 6;
            break;
          case tB.BLENDMODE_STANDARD:
            BB = 2;
            break;
          case tB.BLENDMODE_MULTIPLY:
            BB = 4;
            break;
          case tB.BLENDMODE_SUBTRACT:
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
      addEmitRateGradient(BB, TB, dB) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, BB, TB, dB), this
      }
      removeEmitRateGradient(BB) {
        return this._removeFactorGradient(this._emitRateGradients, BB), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : pB.p.Zero()
      }
      set direction1(BB) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = BB)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : pB.p.Zero()
      }
      set direction2(BB) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = BB)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : pB.p.Zero()
      }
      set minEmitBox(BB) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = BB)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : pB.p.Zero()
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
      _addFactorGradient(BB, TB, dB, yB) {
        const pB = new VB.i(TB, dB, yB);
        BB.push(pB), BB.sort(((BB, TB) => BB.gradient < TB.gradient ? -1 : BB.gradient > TB.gradient ? 1 : 0))
      }
      _removeFactorGradient(BB, TB) {
        if (!BB) return;
        let dB = 0;
        for (const VB of BB) {
          if (VB.gradient === TB) {
            BB.splice(dB, 1);
            break
          }
          dB++
        }
      }
      _removeGradientAndTexture(BB, TB, dB) {
        if (!TB) return this;
        let VB = 0;
        for (const yB of TB) {
          if (yB.gradient === BB) {
            TB.splice(VB, 1);
            break
          }
          VB++
        }
        return dB && dB.dispose(), this
      }
      constructor(BB) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = pB.p.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new pB.p(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = tB.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new pB.l(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new pB.p(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = pB.p.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new oB.d(1, 1, 1, 1), this.color2 = new oB.d(1, 1, 1, 1), this.colorDead = new oB.d(0, 0, 0, 1), this.textureMask = new oB.d(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new gB.d, this.id = BB, this.name = BB
      }
      createPointEmitter(BB, TB) {
        const dB = function(BB, TB) {
          const dB = new DB;
          return dB.direction1 = BB, dB.direction2 = TB, dB
        }(BB, TB);
        return this.particleEmitterType = dB, dB
      }
      createHemisphericEmitter() {
        const BB = function() {
          return new uB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = BB, BB
      }
      createSphereEmitter() {
        const BB = function() {
          return new HB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = BB, BB
      }
      createDirectedSphereEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new pB.p(0, 1, 0),
            dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new pB.p(0, 1, 0);
          return new EB(BB, TB, dB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new pB.p(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new pB.p(0, 1, 0));
        return this.particleEmitterType = BB, BB
      }
      createCylinderEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new vB.g(BB, TB, dB, VB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = BB, BB
      }
      createDirectedCylinderEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pB.p(0, 1, 0),
            yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new pB.p(0, 1, 0);
          return new vB.c(BB, TB, dB, VB, yB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pB.p(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new pB.p(0, 1, 0));
        return this.particleEmitterType = BB, BB
      }
      createConeEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new mB(BB, TB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = BB, BB
      }
      createDirectedConeEmitter() {
        const BB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new pB.p(0, 1, 0),
            VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pB.p(0, 1, 0);
          return new iB(BB, TB, dB, VB)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new pB.p(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pB.p(0, 1, 0));
        return this.particleEmitterType = BB, BB
      }
      createBoxEmitter(BB, TB, dB, VB) {
        const yB = new kB.c;
        return this.particleEmitterType = yB, this.direction1 = BB, this.direction2 = TB, this.minEmitBox = dB, this.maxEmitBox = VB, yB
      }
      createMeshEmitter() {
        const BB = function() {
          return new NB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = BB, BB
      }
    }
    tB.BLENDMODE_ONEONE = 0, tB.BLENDMODE_STANDARD = 1, tB.BLENDMODE_ADD = 2, tB.BLENDMODE_MULTIPLY = 3, tB.BLENDMODE_MULTIPLYADD = 4, tB.BLENDMODE_SUBTRACT = -1;
    class fB {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new oB.d(0, 0, 0, 0), this.currentColor2 = new oB.d(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = pB.p.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class sB {
      constructor(BB) {
        this.particleSystem = BB, this.position = pB.p.Zero(), this.direction = pB.p.Zero(), this.color = new oB.d(0, 0, 0, 0), this.colorStep = new oB.d(0, 0, 0, 0), this.initialColor = new oB.d(0, 0, 0, 0), this.colorDead = new oB.d(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new pB.l(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new fB, this.id = sB._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let BB = this.age,
          TB = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === TB ? (TB = 1, BB = this._properties.randomCellOffset) : BB += this._properties.randomCellOffset);
        const dB = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let VB;
        VB = this._properties.initialSpriteCellLoop ? (0, OB.Clamp)(BB * TB % this.lifeTime / this.lifeTime) : (0, OB.Clamp)(BB * TB / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + VB * dB | 0
      }
      _inheritParticleInfoToSubEmitter(BB) {
        if (BB.particleSystem.emitter.position) {
          const TB = BB.particleSystem.emitter;
          if (TB.position.bdB(this.position), BB.inheritDirection) {
            const BB = pB.j.RD[0];
            this.direction.normalizeToRef(BB), TB.setDirection(BB, 0, Math.PI / 2)
          }
        } else {
          BB.particleSystem.emitter.bdB(this.position)
        }
        this.direction.scaleToRef(BB.inheritedVelocityAmount / 2, pB.j.RD[0]), BB.particleSystem._inheritedVelocityOffset.bdB(pB.j.RD[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const BB of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(BB)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = sB._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(BB) {
        BB.position.bdB(this.position), this._properties.initialDirection ? BB._properties.initialDirection ? BB._properties.initialDirection.bdB(this._properties.initialDirection) : BB._properties.initialDirection = this._properties.initialDirection.clone() : BB._properties.initialDirection = null, BB.direction.bdB(this.direction), this._properties.localPosition && (BB._properties.localPosition ? BB._properties.localPosition.bdB(this._properties.localPosition) : BB._properties.localPosition = this._properties.localPosition.clone()), BB.color.bdB(this.color), BB.colorStep.bdB(this.colorStep), BB.initialColor.bdB(this.initialColor), BB.colorDead.bdB(this.colorDead), BB.lifeTime = this.lifeTime, BB.age = this.age, BB._properties.randomCellOffset = this._properties.randomCellOffset, BB.size = this.size, BB.scale.bdB(this.scale), BB.angle = this.angle, BB.angularSpeed = this.angularSpeed, BB.particleSystem = this.particleSystem, BB.cellIndex = this.cellIndex, BB.id = this.id, BB._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (BB._properties.currentColorGradient = this._properties.currentColorGradient, BB._properties.currentColor1.bdB(this._properties.currentColor1), BB._properties.currentColor2.bdB(this._properties.currentColor2)), this._properties.currentSizeGradient && (BB._properties.currentSizeGradient = this._properties.currentSizeGradient, BB._properties.currentSize1 = this._properties.currentSize1, BB._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (BB._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, BB._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, BB._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (BB._properties.currentVelocityGradient = this._properties.currentVelocityGradient, BB._properties.currentVelocity1 = this._properties.currentVelocity1, BB._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (BB._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, BB._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, BB._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (BB._properties.currentDragGradient = this._properties.currentDragGradient, BB._properties.currentDrag1 = this._properties.currentDrag1, BB._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (BB._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, BB._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, BB._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (BB.remapData && this.remapData ? BB.remapData.bdB(this.remapData) : BB.remapData = new pB.r(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2 ? (BB._properties.randomNoiseCoordinates1.bdB(this._properties.randomNoiseCoordinates1), BB._properties.randomNoiseCoordinates2.bdB(this._properties.randomNoiseCoordinates2)) : (BB._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), BB._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), BB.metadata = this.metadata
      }
    }
    sB._Count = 0;
    var MB = dB(39945);
    class zB {
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
      constructor(BB, TB, dB, VB) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = TB, this.Q8 = BB, this._scene = dB, this._host = VB, this._activeTargets = [], TB._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Py: this._getCorrectLoopMode()
          }, this._animation.dataType === MB.c.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = pB.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const BB = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, BB)
        }
        if (this.Q8 instanceof Array) {
          let BB = 0;
          for (const TB of this.Q8) this._preparePath(TB, BB), this._getOriginalValues(BB), BB++;
          this._targetIsArray = !0
        } else this._preparePath(this.Q8), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const yB = TB.getEvents();
        if (yB && yB.length > 0)
          for (const pB of yB) this._events.push(pB._clone());
        this._enableBlending = BB && BB.animationPropertiesOverride ? BB.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const dB = this._animation.targetPropertyPath;
        if (dB.length > 1) {
          let VB = BB;
          for (let BB = 0; BB < dB.length - 1; BB++) {
            const TB = dB[BB];
            if (VB = VB[TB], void 0 === VB) throw new Error(`Invalid property (${TB}) in property path (${dB.join(".")})`)
          }
          this._targetPath = dB[dB.length - 1], this._activeTargets[TB] = VB
        } else this._targetPath = dB[0], this._activeTargets[TB] = BB;
        if (void 0 === this._activeTargets[TB][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${dB.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.Q8 instanceof Array) {
            let BB = 0;
            for (const TB of this.Q8) void 0 !== this._originalValue[BB] && this._setValue(TB, this._activeTargets[BB], this._originalValue[BB], -1, BB), BB++
          } else void 0 !== this._originalValue[0] && this._setValue(this.Q8, this._directTarget, this._originalValue[0], -1, 0);
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
      setValue(BB, TB) {
        if (this._targetIsArray)
          for (let dB = 0; dB < this.Q8.length; dB++) {
            const VB = this.Q8[dB];
            this._setValue(VB, this._activeTargets[dB], BB, TB, dB)
          } else this._setValue(this.Q8, this._directTarget, BB, TB, 0)
      }
      _getOriginalValues() {
        let BB, TB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const dB = this._activeTargets[TB];
        if (MB.c.InheritOriginalValueFromActiveAnimations) {
          const BB = this._scene._activeAnimatables;
          for (let VB = 0; VB < BB.length; VB++) {
            const yB = BB[VB]._runtimeAnimations;
            for (let BB = 0; BB < yB.length; BB++) {
              const VB = yB[BB];
              if (VB !== this && VB._targetPath === this._targetPath)
                for (let BB = 0; BB < VB._activeTargets.length; BB++)
                  if (VB._activeTargets[BB] === dB && void 0 !== VB._originalValue[BB]) return void(VB._originalValue[BB] && VB._originalValue[BB].clone ? this._originalValue[TB] = VB._originalValue[BB].clone() : this._originalValue[TB] = VB._originalValue[BB])
            }
          }
        }
        BB = dB.getLocalMatrix && "_matrix" === this._targetPath ? dB.getLocalMatrix() : dB[this._targetPath], BB && BB.clone ? this._originalValue[TB] = BB.clone() : this._originalValue[TB] = BB
      }
      _registerTargetForLateAnimationBinding(BB, TB) {
        const dB = BB.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(dB), dB._lateAnimationHolders || (dB._lateAnimationHolders = {}), dB._lateAnimationHolders[BB.targetPath] || (dB._lateAnimationHolders[BB.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: TB
        }), BB.isAdditive ? (dB._lateAnimationHolders[BB.targetPath].additiveAnimations.push(BB), dB._lateAnimationHolders[BB.targetPath].totalAdditiveWeight += BB.weight) : (dB._lateAnimationHolders[BB.targetPath].animations.push(BB), dB._lateAnimationHolders[BB.targetPath].totalWeight += BB.weight)
      }
      _setValue(BB, TB, dB, VB, yB) {
        const lB = this._scene._animationWrites,
          JB = this._scene._animationWriteCount++;
        let YB = lB[JB];
        if (YB || (YB = lB[JB] = {
            runtimeAnimation: this,
            target: BB,
            weight: VB,
            additive: !1,
            blendingFactor: 1,
            pH: !1
          }), YB.runtimeAnimation = this, YB.target = BB, YB.weight = VB, YB.additive = this.isAdditive, YB.pH = !1, this._currentActiveTarget = TB, this._weight = VB, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const BB = TB[this._targetPath];
            BB.clone ? this._originalBlendValue = BB.clone() : this._originalBlendValue = BB
          }
          this._originalBlendValue.m ? MB.c.AllowMatrixDecomposeForInterpolation ? this._currentValue ? pB.b.DecomposeLerpToRef(this._originalBlendValue, dB, this._blendingFactor, this._currentValue) : this._currentValue = pB.b.DecomposeLerp(this._originalBlendValue, dB, this._blendingFactor) : this._currentValue ? pB.b.LerpToRef(this._originalBlendValue, dB, this._blendingFactor, this._currentValue) : this._currentValue = pB.b.Lerp(this._originalBlendValue, dB, this._blendingFactor) : this._currentValue = MB.c._UniversalLerp(this._originalBlendValue, dB, this._blendingFactor);
          const VB = BB && BB.animationPropertiesOverride ? BB.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          YB.blendingFactor = this._blendingFactor, this._blendingFactor += VB
        } else YB.blendingFactor = 1, this._currentValue ? this._currentValue.bdB ? this._currentValue.bdB(dB) : this._currentValue = dB : this._currentValue = dB?.clone ? dB.clone() : dB; - 1 !== VB ? this._registerTargetForLateAnimationBinding(this, this._originalValue[yB]) : this._animationState.Py === MB.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[yB], TB[this._targetPath]) : TB[this._targetPath] = this._originalValue[yB] + this._currentValue : TB[this._targetPath] = this._currentValue, BB.VdB && BB.VdB(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.Q8 && this.Q8.animationPropertiesOverride) {
          return "MorphTarget" === this.Q8.getClassName?.() && null == this.Q8._animationPropertiesOverride ? this._animation.Py : this.Q8.animationPropertiesOverride.Py
        }
        return this._animation.Py
      }
      goToFrame(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const dB = this._animation.getKeys();
        BB < dB[0].frame ? BB = dB[0].frame : BB > dB[dB.length - 1].frame && (BB = dB[dB.length - 1].frame);
        const VB = this._events;
        if (VB.length)
          for (let pB = 0; pB < VB.length; pB++) VB[pB].onlyOnce || (VB[pB].isDone = VB[pB].frame < BB);
        this._currentFrame = BB;
        const yB = this._animation._interpolate(BB, this._animationState);
        this.setValue(yB, TB)
      }
      _prepareForSpeedRatioChange(BB) {
        const TB = this._previousElapsedTime * (this._animation.framePerSecond * BB) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - TB
      }
      animate(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const lB = this._animation,
          JB = lB.targetPropertyPath;
        if (!JB || JB.length < 1) return this._stopped = !0, !1;
        let YB, gB = !0;
        const oB = this._events;
        let kB;
        if (this._coreRuntimeAnimation) kB = dB - TB, YB = this._coreRuntimeAnimation.currentFrame, this._currentFrame = YB, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let pB;
          (TB < this._minFrame || TB > this._maxFrame) && (TB = this._minFrame), (dB < this._minFrame || dB > this._maxFrame) && (dB = this._maxFrame), kB = dB - TB;
          let JB = BB * (lB.framePerSecond * yB) / 1e3 + this._absoluteFrameOffset,
            LB = 0,
            OB = !1;
          const DB = VB && this._animationState.Py === MB.c.ANIMATIONLOOPMODE_YOYO;
          if (DB) {
            const BB = (JB - TB) / kB,
              dB = Math.sin(BB * Math.PI);
            JB = Math.abs(dB) * kB + TB;
            const VB = dB >= 0 ? 1 : -1;
            this._yoyoDirection !== VB && (OB = !0), this._yoyoDirection = VB
          }
          if (this._previousElapsedTime = BB, this._previousAbsoluteFrame = JB, !VB && dB >= TB && (JB >= kB && yB > 0 || JB <= 0 && yB < 0)) gB = !1, LB = lB.evaluate(dB);
          else if (!VB && TB >= dB && (JB <= kB && yB < 0 || JB >= 0 && yB > 0)) gB = !1, LB = lB.evaluate(TB);
          else if (this._animationState.Py !== MB.c.ANIMATIONLOOPMODE_CYCLE) {
            const BB = dB.toString() + TB.toString();
            if (!this._offsetsCache[BB]) {
              this._animationState.repeatCount = 0, this._animationState.Py = MB.c.ANIMATIONLOOPMODE_CYCLE;
              const VB = lB._interpolate(TB, this._animationState),
                yB = lB._interpolate(dB, this._animationState);
              switch (this._animationState.Py = this._getCorrectLoopMode(), lB.dataType) {
                case MB.c.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[BB] = yB - VB;
                  break;
                case MB.c.ANIMATIONTYPE_QUATERNION:
                case MB.c.ANIMATIONTYPE_VECTOR3:
                case MB.c.ANIMATIONTYPE_VECTOR2:
                case MB.c.ANIMATIONTYPE_SIZE:
                case MB.c.ANIMATIONTYPE_COLOR3:
                case MB.c.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[BB] = yB.subtract(VB)
              }
              this._highLimitsCache[BB] = yB
            }
            LB = this._highLimitsCache[BB], pB = this._offsetsCache[BB]
          }
          if (void 0 === pB) switch (lB.dataType) {
            case MB.c.ANIMATIONTYPE_FLOAT:
              pB = 0;
              break;
            case MB.c.ANIMATIONTYPE_QUATERNION:
              pB = MB.n;
              break;
            case MB.c.ANIMATIONTYPE_VECTOR3:
              pB = MB.t;
              break;
            case MB.c.ANIMATIONTYPE_VECTOR2:
              pB = MB.r;
              break;
            case MB.c.ANIMATIONTYPE_SIZE:
              pB = MB.o;
              break;
            case MB.c.ANIMATIONTYPE_COLOR3:
              pB = MB.j;
              break;
            case MB.c.ANIMATIONTYPE_COLOR4:
              pB = MB.l
          }
          const uB = this._host ? this._host.syncRoot : null;
          let HB, EB = this._playbackFrames,
            vB = !1;
          if (uB) {
            const BB = uB.toFrame - uB.fromFrame,
              dB = uB.masterFrame,
              VB = (dB - uB.fromFrame) / BB;
            YB = TB + kB * VB;
            const yB = uB.getAnimations()[0];
            if (yB && 0 !== BB) {
              const BB = kB * VB,
                TB = yB._playbackTo - yB._playbackFrom;
              if (0 !== TB && yB._playbackFrom <= uB.fromFrame && yB._playbackTo >= uB.toFrame) {
                EB = kB * Math.round((yB._playbackFrames - (yB._currentFrame - yB._playbackFrom)) / TB) + BB
              } else vB = (dB - this._playbackSyncMasterFrame) * (yB._playbackFrames - this._playbackSyncMasterPlayed) < 0, EB = BB;
              vB = vB || yB._playbackJumped, this._playbackSyncMasterPlayed = yB._playbackFrames, this._playbackSyncMasterFrame = dB
            }
          } else YB = JB > 0 && TB > dB || JB < 0 && TB < dB ? gB && 0 !== kB ? dB + JB % kB : TB : gB && 0 !== kB ? TB + JB % kB : dB;
          if (!DB && (yB > 0 && this.currentFrame > YB || yB < 0 && this.currentFrame < YB) || DB && OB) {
            this._onLoop();
            for (let BB = 0; BB < oB.length; BB++) oB[BB].onlyOnce || (oB[BB].isDone = !1);
            this._animationState.key = yB > 0 ? 0 : lB.getKeys().length - 1
          }
          if (this._currentFrame = YB, this._animationState.repeatCount = 0 === kB ? 0 : JB / kB | 0, this._animationState.highLimitValue = LB, this._animationState.offsetValue = pB, this._playbackFrom = TB, this._playbackTo = dB, this._playbackJumped = vB, this._playbackSyncRoot = uB, uB) HB = EB;
          else if (gB) HB = DB ? YB === TB && JB === dB ? kB : YB - TB : JB;
          else {
            const BB = 0 !== kB ? Math.floor(this._playbackFrames / kB) : 0;
            HB = (YB === dB ? BB + 1 : BB) * kB
          }
          this._playbackFrames = HB, this._playbackProgress = this._animationState.Py === MB.c.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? kB : HB
        }
        const LB = lB._interpolate(YB, this._animationState);
        if (this.setValue(LB, pB), oB.length)
          for (let OB = 0; OB < oB.length; OB++)
            if (kB >= 0 && YB >= oB[OB].frame && oB[OB].frame >= TB || kB < 0 && YB <= oB[OB].frame && oB[OB].frame <= TB) {
              const BB = oB[OB];
              BB.isDone || (BB.onlyOnce && (oB.splice(OB, 1), OB--), BB.isDone = !0, BB.action(YB))
            } return gB || (this._stopped = !0), gB
      }
    }
    var wB = dB(38657);
    class UB {
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
        for (let TB = 0; TB < this._runtimeAnimations.length; TB++) {
          this._runtimeAnimations[TB]._prepareForSpeedRatioChange(BB)
        }
        this._speedRatio = BB, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          pB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          lB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          JB = arguments.length > 6 ? arguments[6] : void 0,
          YB = arguments.length > 7 ? arguments[7] : void 0,
          gB = arguments.length > 8 ? arguments[8] : void 0,
          oB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          kB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = TB, this.fromFrame = dB, this.toFrame = VB, this.loopAnimation = pB, this.onAnimationEnd = JB, this.onAnimationLoop = gB, this.isAdditive = oB, this.playOrder = kB, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.Wm = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new yB.e, this.onAnimationLoopObservable = new yB.e, this._scene = BB, YB && this.appendAnimations(TB, YB), this._speedRatio = lB, BB._activeAnimatables.push(this)
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
      appendAnimations(BB, TB) {
        for (let dB = 0; dB < TB.length; dB++) {
          const VB = TB[dB],
            yB = new zB(BB, VB, this._scene, this);
          yB._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(yB)
        }
      }
      getAnimationByTargetProperty(BB) {
        const TB = this._runtimeAnimations;
        for (let dB = 0; dB < TB.length; dB++)
          if (TB[dB].animation.targetProperty === BB) return TB[dB].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(BB) {
        const TB = this._runtimeAnimations;
        for (let dB = 0; dB < TB.length; dB++)
          if (TB[dB].animation.targetProperty === BB) return TB[dB];
        return null
      }
      reset() {
        const BB = this._runtimeAnimations;
        for (let TB = 0; TB < BB.length; TB++) BB[TB].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(BB) {
        const TB = this._runtimeAnimations;
        for (let dB = 0; dB < TB.length; dB++) TB[dB].animation.enableBlending = !0, TB[dB].animation.blendingSpeed = BB
      }
      disableBlending() {
        const BB = this._runtimeAnimations;
        for (let TB = 0; TB < BB.length; TB++) BB[TB].animation.enableBlending = !1
      }
      goToFrame(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = this._runtimeAnimations;
        if (dB[0]) {
          const TB = dB[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? dB[0].currentFrame;
          const VB = 0 === this.speedRatio ? 0 : (BB - this._frameToSyncFromJump) / TB * 1e3 / this.speedRatio;
          this._manualJumpDelay = -VB
        }
        for (let VB = 0; VB < dB.length; VB++) dB[VB].goToFrame(BB, TB ? this._weight : -1);
        this._goToFrame = BB
      }
      get paused() {
        return this.Wm
      }
      pause() {
        this.Wm || (this.Wm = !0)
      }
      restart() {
        this.Wm = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (BB || TB) {
          const yB = this._scene._activeAnimatables.indexOf(this);
          if (yB > -1) {
            const pB = this._runtimeAnimations;
            for (let dB = pB.length - 1; dB >= 0; dB--) {
              const VB = pB[dB];
              BB && VB.animation.name != BB || (TB && !TB(VB.target) || (VB.dispose(), pB.splice(dB, 1)))
            }
            0 == pB.length && (dB || this._scene._activeAnimatables.splice(yB, 1), VB || this._raiseOnAnimationEnd())
          }
        } else {
          const BB = this._scene._activeAnimatables.indexOf(this);
          if (BB > -1) {
            dB || this._scene._activeAnimatables.splice(BB, 1);
            const TB = this._runtimeAnimations;
            for (let BB = 0; BB < TB.length; BB++) TB[BB].dispose();
            this._runtimeAnimations.length = 0, VB || this._raiseOnAnimationEnd()
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
        if (this.Wm) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = BB), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = BB, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += BB - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !UB.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let TB = !1;
        const dB = this._runtimeAnimations;
        let VB;
        for (VB = 0; VB < dB.length; VB++) {
          const yB = dB[VB].animate(BB - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          TB = TB || yB
        }
        if (this.animationStarted = TB, !TB) {
          if (this.disposeOnEnd)
            for (VB = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(VB, 1), VB = 0; VB < dB.length; VB++) dB[VB].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return TB
      }
    }

    function FB(BB) {
      if (0 === BB.totalWeight && 0 === BB.totalAdditiveWeight) return BB.originalValue;
      let TB = 1;
      const dB = pB.j.RD[0],
        VB = pB.j.RD[1],
        yB = pB.j.Quaternion[0];
      let lB = 0;
      const JB = BB.animations[0],
        YB = BB.originalValue;
      let gB, oB = !1;
      if (BB.totalWeight < 1) gB = 1 - BB.totalWeight, YB.decompose(VB, yB, dB);
      else {
        if (lB = 1, TB = BB.totalWeight, gB = JB.weight / TB, 1 == gB) {
          if (!BB.totalAdditiveWeight) return JB.currentValue;
          oB = !0
        }
        JB.currentValue.decompose(VB, yB, dB)
      }
      if (!oB) {
        VB.scaleInPlace(gB), dB.scaleInPlace(gB), yB.scaleInPlace(gB);
        for (let JB = lB; JB < BB.animations.length; JB++) {
          const lB = BB.animations[JB];
          if (0 === lB.weight) continue;
          gB = lB.weight / TB;
          const YB = pB.j.RD[2],
            oB = pB.j.RD[3],
            kB = pB.j.Quaternion[1];
          lB.currentValue.decompose(oB, kB, YB), oB.scaleAndAddToRef(gB, VB), kB.scaleAndAddToRef(pB.f.Dot(yB, kB) > 0 ? gB : -gB, yB), YB.scaleAndAddToRef(gB, dB)
        }
        yB.normalize()
      }
      for (let LB = 0; LB < BB.additiveAnimations.length; LB++) {
        const TB = BB.additiveAnimations[LB];
        if (0 === TB.weight) continue;
        const lB = pB.j.RD[2],
          JB = pB.j.RD[3],
          YB = pB.j.Quaternion[1];
        TB.currentValue.decompose(JB, YB, lB), JB.multiplyToRef(VB, JB), pB.p.LerpToRef(VB, JB, TB.weight, VB), yB.multiplyToRef(YB, YB), pB.f.SlerpToRef(yB, YB, TB.weight, yB), lB.scaleAndAddToRef(TB.weight, dB)
      }
      const kB = JB ? JB._animationState.workValue : pB.j.Matrix[0].clone();
      return pB.b.ComposeToRef(VB, yB, dB, kB), kB
    }

    function KB(BB, TB) {
      if (0 === BB.totalWeight && 0 === BB.totalAdditiveWeight) return TB;
      const dB = BB.animations[0],
        VB = BB.originalValue;
      let yB = TB;
      if (0 === BB.totalWeight && BB.totalAdditiveWeight > 0) yB.bdB(VB);
      else if (1 === BB.animations.length) {
        if (pB.f.SlerpToRef(VB, dB.currentValue, Math.min(1, BB.totalWeight), yB), 0 === BB.totalAdditiveWeight) return yB
      } else if (BB.animations.length > 1) {
        let dB, lB, JB = 1;
        if (BB.totalWeight < 1) {
          const TB = 1 - BB.totalWeight;
          dB = [], lB = [], dB.push(VB), lB.push(TB)
        } else {
          if (2 === BB.animations.length && (pB.f.SlerpToRef(BB.animations[0].currentValue, BB.animations[1].currentValue, BB.animations[1].weight / BB.totalWeight, TB), 0 === BB.totalAdditiveWeight)) return TB;
          dB = [], lB = [], JB = BB.totalWeight
        }
        for (let TB = 0; TB < BB.animations.length; TB++) {
          const VB = BB.animations[TB];
          dB.push(VB.currentValue), lB.push(VB.weight / JB)
        }
        let YB = 0;
        for (let BB = 0; BB < dB.length;) BB ? (YB += lB[BB], pB.f.SlerpToRef(yB, dB[BB], lB[BB] / YB, yB), BB++) : (pB.f.SlerpToRef(dB[BB], dB[BB + 1], lB[BB + 1] / (lB[BB] + lB[BB + 1]), TB), yB = TB, YB = lB[BB] + lB[BB + 1], BB += 2)
      }
      for (let lB = 0; lB < BB.additiveAnimations.length; lB++) {
        const TB = BB.additiveAnimations[lB];
        0 !== TB.weight && (yB.multiplyToRef(TB.currentValue, pB.j.Quaternion[0]), pB.f.SlerpToRef(yB, pB.j.Quaternion[0], TB.weight, yB))
      }
      return yB
    }

    function rB(BB, TB) {
      TB && (TB.prototype.copyAnimationRange = function(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new MB.c(this.name, "_matrix", BB.animations[0].framePerSecond, MB.c.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const pB = BB.animations[0].getRange(TB);
        if (!pB) return !1;
        const lB = pB.from,
          JB = pB.to,
          YB = BB.animations[0].getKeys(),
          gB = BB.length,
          oB = BB.getParent(),
          kB = this.getParent(),
          LB = VB && oB && gB && this.length && gB !== this.length,
          OB = LB && kB && oB ? kB.length / oB.length : 1,
          DB = VB && !kB && yB && (1 !== yB.x || 1 !== yB.y || 1 !== yB.z),
          uB = this.animations[0].getKeys();
        let HB, EB, vB;
        for (let mB = 0, iB = YB.length; mB < iB; mB++) HB = YB[mB], HB.frame >= lB && HB.frame <= JB && (VB ? (vB = HB.value.clone(), LB ? (EB = vB.getTranslation(), vB.setTranslation(EB.scaleInPlace(OB))) : DB && yB ? (EB = vB.getTranslation(), vB.setTranslation(EB.multiplyInPlace(yB))) : vB = HB.value) : vB = HB.value, uB.push({
          frame: HB.frame + dB,
          value: vB
        }));
        return this.animations[0].createRange(TB, lB + dB, JB + dB), !0
      }), BB && (BB.prototype._animate = function(BB) {
        const TB = this._animationWrites,
          dB = this._animationWriteCount;
        let VB = 0;
        for (let pB = this._animationStepWriteCount; pB < dB; pB++) {
          const BB = TB[pB];
          BB.pH && -1 === BB.weight || (BB.pH = !0, TB[pB] = TB[VB], TB[VB] = BB, VB++)
        }
        for (let pB = VB; pB < dB; pB++) {
          const BB = TB[pB];
          BB.runtimeAnimation = null, BB.target = null
        }
        if (this._animationWriteCount = VB, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const yB = wB.d.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = yB
        }
        this.deltaTime = void 0 !== BB ? BB : this.useConstantAnimationDeltaTime ? 16 : (yB - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = yB;
        const lB = this._activeAnimatables;
        if (0 === lB.length) return;
        this._animationTime += this.deltaTime;
        const JB = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let pB = 0; pB < lB.length; pB++) {
          const BB = lB[pB];
          !BB._animate(JB) && BB.disposeOnEnd && pB--
        }! function(BB) {
          if (BB._registeredForLateAnimationBindings.length) {
            for (let TB = 0; TB < BB._registeredForLateAnimationBindings.length; TB++) {
              const dB = BB._registeredForLateAnimationBindings.data[TB];
              for (const BB in dB._lateAnimationHolders) {
                const TB = dB._lateAnimationHolders[BB],
                  VB = TB.animations[0],
                  yB = TB.originalValue;
                if (void 0 === yB || null === yB) continue;
                const lB = MB.c.AllowMatrixDecomposeForInterpolation && yB.m;
                let JB = dB[BB];
                if (lB) JB = FB(TB);
                else if (void 0 !== yB.w) JB = KB(TB, JB || pB.f.Identity());
                else {
                  let BB = 0,
                    dB = 1;
                  const pB = VB && VB._animationState.Py === MB.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (TB.totalWeight < 1) JB = pB ? yB.clone ? yB.clone() : yB : VB && yB.scale ? yB.scale(1 - TB.totalWeight) : VB ? yB * (1 - TB.totalWeight) : yB.clone ? yB.clone() : yB;
                  else if (VB) {
                    dB = TB.totalWeight;
                    const lB = VB.weight / dB;
                    JB = 1 !== lB ? VB.currentValue.scale ? VB.currentValue.scale(lB) : VB.currentValue * lB : (TB.animations.length > 1 || TB.additiveAnimations.length > 0) && VB.currentValue.clone ? VB.currentValue.clone() : VB.currentValue, pB && (JB.addToRef ? JB.addToRef(yB, JB) : JB += yB), BB = 1
                  }
                  for (let VB = BB; VB < TB.animations.length; VB++) {
                    const BB = TB.animations[VB],
                      yB = BB.weight / dB;
                    yB && (BB.currentValue.scaleAndAddToRef ? BB.currentValue.scaleAndAddToRef(yB, JB) : JB += BB.currentValue * yB)
                  }
                  for (let VB = 0; VB < TB.additiveAnimations.length; VB++) {
                    const BB = TB.additiveAnimations[VB],
                      dB = BB.weight;
                    dB && (BB.currentValue.scaleAndAddToRef ? BB.currentValue.scaleAndAddToRef(dB, JB) : JB += BB.currentValue * dB)
                  }
                }
                dB[BB] = JB
              }
              dB._lateAnimationHolders = {}
            }
            BB._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, BB.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((BB, TB) => BB.playOrder - TB.playOrder))
      }, BB.prototype.beginWeightedAnimation = function(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          yB = arguments.length > 4 ? arguments[4] : void 0,
          pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          lB = arguments.length > 6 ? arguments[6] : void 0,
          JB = arguments.length > 7 ? arguments[7] : void 0,
          YB = arguments.length > 8 ? arguments[8] : void 0,
          gB = arguments.length > 9 ? arguments[9] : void 0,
          oB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const kB = this.beginAnimation(BB, TB, dB, yB, pB, lB, JB, !1, YB, gB, oB);
        return kB.weight = VB, kB
      }, BB.prototype.beginAnimation = function(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          pB = arguments.length > 5 ? arguments[5] : void 0,
          lB = arguments.length > 6 ? arguments[6] : void 0,
          JB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          YB = arguments.length > 8 ? arguments[8] : void 0,
          gB = arguments.length > 9 ? arguments[9] : void 0,
          oB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (yB < 0) {
          const BB = TB;
          TB = dB, dB = BB, yB = -yB
        }
        TB > dB && (yB = -yB), JB && this.stopAnimation(BB, void 0, YB), lB || (lB = new UB(this, BB, TB, dB, VB, yB, pB, void 0, gB, oB));
        const kB = !YB || YB(BB);
        if (BB.animations && kB && lB.appendAnimations(BB, BB.animations), BB.getAnimatables) {
          const oB = BB.getAnimatables();
          for (let BB = 0; BB < oB.length; BB++) this.beginAnimation(oB[BB], TB, dB, VB, yB, pB, lB, JB, YB, gB)
        }
        return lB.reset(), lB
      }, BB.prototype.beginHierarchyAnimation = function(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          lB = arguments.length > 6 ? arguments[6] : void 0,
          JB = arguments.length > 7 ? arguments[7] : void 0,
          YB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          gB = arguments.length > 9 ? arguments[9] : void 0,
          oB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const kB = BB.getDescendants(TB),
          LB = [];
        LB.push(this.beginAnimation(BB, dB, VB, yB, pB, lB, JB, YB, gB, void 0, oB));
        for (const OB of kB) LB.push(this.beginAnimation(OB, dB, VB, yB, pB, lB, JB, YB, gB, void 0, oB));
        return LB
      }, BB.prototype.beginDirectAnimation = function(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (pB < 0) {
          const BB = dB;
          dB = VB, VB = BB, pB = -pB
        }
        dB > VB && (pB = -pB);
        return new UB(this, BB, dB, VB, yB, pB, arguments.length > 6 ? arguments[6] : void 0, TB, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, BB.prototype.beginDirectHierarchyAnimation = function(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        let gB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const oB = BB.getDescendants(TB),
          kB = [];
        kB.push(this.beginDirectAnimation(BB, dB, VB, yB, pB, lB, JB, YB, gB));
        for (const LB of oB) kB.push(this.beginDirectAnimation(LB, dB, VB, yB, pB, lB, JB, YB, gB));
        return kB
      }, BB.prototype.getAnimatableByTarget = function(BB) {
        for (let TB = 0; TB < this._activeAnimatables.length; TB++)
          if (this._activeAnimatables[TB].target === BB) return this._activeAnimatables[TB];
        return null
      }, BB.prototype.getAllAnimatablesByTarget = function(BB) {
        const TB = [];
        for (let dB = 0; dB < this._activeAnimatables.length; dB++) this._activeAnimatables[dB].target === BB && TB.push(this._activeAnimatables[dB]);
        return TB
      }, BB.prototype.stopAnimation = function(BB, TB, dB) {
        const VB = this.getAllAnimatablesByTarget(BB);
        for (const yB of VB) yB.stop(TB, dB)
      }, BB.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let BB = 0; BB < this._activeAnimatables.length; BB++) this._activeAnimatables[BB].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const BB of this.animationGroups) BB.stop()
      })
    }
    UB.ProcessPausedAnimatables = !1;
    var IB, cB = dB(36137),
      SB = dB(38980),
      PB = dB(38629);
    class QB extends SB.e {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(BB) {
        (BB.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.bdB(BB), this._markAsDirtyAndDecompose())
      }
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          lB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          JB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(BB, TB.jU(), !1), this.name = BB, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = TB, this._localMatrix = VB?.clone() ?? pB.b.Identity(), this._restMatrix = yB ?? this._localMatrix.clone(), this._bindMatrix = lB ?? this._localMatrix.clone(), this._index = JB, this._absoluteMatrix = new pB.b, this._absoluteBindMatrix = new pB.b, this._absoluteInverseBindMatrix = new pB.b, this._finalMatrix = new pB.b, TB.bones.push(this), this.setParent(dB, !1), this._updateAbsoluteBindMatrices()
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
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== BB) {
          if (this.parent) {
            const BB = this.parent.children.indexOf(this); - 1 !== BB && this.parent.children.splice(BB, 1)
          }
          this._parentNode = BB, this.parent && this.parent.children.push(this), TB && this._updateAbsoluteBindMatrices(), this.VdB()
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
        this._restMatrix.bdB(BB)
      }
      setRestPose(BB) {
        this.setRestMatrix(BB)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(BB) {
        this.i6(BB)
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
          const BB = pB.j.RD[0],
            TB = pB.j.Quaternion[0],
            dB = pB.j.RD[1];
          this.getRestMatrix().decompose(BB, TB, dB), this._linkedTransformNode.position.bdB(dB), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? pB.f.Identity(), this._linkedTransformNode.rotationQuaternion.bdB(TB), this._linkedTransformNode.al.bdB(BB)
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
        return this._decompose(), this.HTB
      }
      set position(BB) {
        this._decompose(), this.HTB.bdB(BB), this._markAsDirtyAndCompose()
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
      get al() {
        return this.getScale()
      }
      set al(BB) {
        this.setScale(BB)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = pB.p.Zero(), this._localRotation = pB.f.Zero(), this.HTB = pB.p.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.HTB))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, pB.b.ComposeToRef(this._localScaling, this._localRotation, this.HTB, this._localMatrix)) : this._needToCompose = !1)
      }
      i6(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.bdB(BB), TB && this._updateAbsoluteBindMatrices(), dB ? this._matrix = BB : this.VdB()
      }
      _updateAbsoluteBindMatrices(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (BB || (BB = this._bindMatrix), this.parent ? BB.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.bdB(BB), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), TB)
          for (let dB = 0; dB < this.children.length; dB++) this.children[dB]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      VdB() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.VdB(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.VdB(), this._needToDecompose = !0
      }
      _updatePosition(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const yB = this.getLocalMatrix();
        if (0 == TB) VB ? (yB.addAtIndex(12, BB.x), yB.addAtIndex(13, BB.y), yB.addAtIndex(14, BB.z)) : yB.setTranslationFromFloats(BB.x, BB.y, BB.z);
        else {
          const TB = QB._TmpMats[0],
            lB = QB._TmpVecs[0];
          this.parent ? (TB.bdB(this.parent.getAbsoluteMatrix()), dB && TB.multiplyToRef(dB.getWorldMatrix(), TB)) : pB.b.IdentityToRef(TB), VB && TB.setTranslationFromFloats(0, 0, 0), TB.invert(), pB.p.TransformCoordinatesToRef(BB, TB, lB), VB ? (yB.addAtIndex(12, lB.x), yB.addAtIndex(13, lB.y), yB.addAtIndex(14, lB.z)) : yB.setTranslationFromFloats(lB.x, lB.y, lB.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(BB, TB, dB, !0)
      }
      setPosition(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(BB, TB, dB, !1)
      }
      setAbsolutePosition(BB, TB) {
        this.setPosition(BB, 1, TB)
      }
      scale(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const yB = this.getLocalMatrix(),
          lB = QB._TmpMats[0];
        pB.b.ScalingToRef(BB, TB, dB, lB), lB.multiplyToRef(yB, yB), lB.invert();
        for (const pB of this.children) {
          const VB = pB.getLocalMatrix();
          VB.multiplyToRef(lB, VB), VB.multiplyAtIndex(12, BB), VB.multiplyAtIndex(13, TB), VB.multiplyAtIndex(14, dB), pB._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), VB)
          for (const pB of this.children) pB.scale(BB, TB, dB, VB)
      }
      setScale(BB) {
        this._decompose(), this._localScaling.bdB(BB), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(BB) {
        this._decompose(), BB.bdB(this._localScaling)
      }
      setYawPitchRoll(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yB = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === VB) {
          const lB = QB._TmpQuat;
          return pB.f.RotationYawPitchRollToRef(BB, TB, dB, lB), void this.setRotationQuaternion(lB, VB, yB)
        }
        const lB = QB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(lB, yB)) return;
        const JB = QB._TmpMats[1];
        pB.b.RotationYawPitchRollToRef(BB, TB, dB, JB), lB.multiplyToRef(JB, JB), this._rotateWithMatrix(JB, VB, yB)
      }
      rotate(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 ? arguments[3] : void 0;
        const yB = QB._TmpMats[0];
        yB.setTranslationFromFloats(0, 0, 0), pB.b.RotationAxisToRef(BB, TB, yB), this._rotateWithMatrix(yB, dB, VB)
      }
      setAxisAngle(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === dB) {
          const yB = QB._TmpQuat;
          return pB.f.RotationAxisToRef(BB, TB, yB), void this.setRotationQuaternion(yB, dB, VB)
        }
        const yB = QB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(yB, VB)) return;
        const lB = QB._TmpMats[1];
        pB.b.RotationAxisToRef(BB, TB, lB), yB.multiplyToRef(lB, lB), this._rotateWithMatrix(lB, dB, VB)
      }
      setRotation(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(BB.y, BB.x, BB.z, TB, dB)
      }
      setRotationQuaternion(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === TB) return this._decompose(), this._localRotation.bdB(BB), void this._markAsDirtyAndCompose();
        const VB = QB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(VB, dB)) return;
        const yB = QB._TmpMats[1];
        pB.b.FromQuaternionToRef(BB, yB), VB.multiplyToRef(yB, yB), this._rotateWithMatrix(yB, TB, dB)
      }
      setRotationMatrix(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === TB) {
          const VB = QB._TmpQuat;
          return pB.f.FromRotationMatrixToRef(BB, VB), void this.setRotationQuaternion(VB, TB, dB)
        }
        const VB = QB._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(VB, dB)) return;
        const yB = QB._TmpMats[1];
        yB.bdB(BB), VB.multiplyToRef(BB, yB), this._rotateWithMatrix(yB, TB, dB)
      }
      _rotateWithMatrix(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const VB = this.getLocalMatrix(),
          yB = VB.m[12],
          pB = VB.m[13],
          lB = VB.m[14],
          JB = this.getParent(),
          YB = QB._TmpMats[3],
          gB = QB._TmpMats[4];
        JB && 1 == TB ? (dB ? (YB.bdB(dB.getWorldMatrix()), JB.getAbsoluteMatrix().multiplyToRef(YB, YB)) : YB.bdB(JB.getAbsoluteMatrix()), gB.bdB(YB), gB.invert(), VB.multiplyToRef(YB, VB), VB.multiplyToRef(BB, VB), VB.multiplyToRef(gB, VB)) : 1 == TB && dB ? (YB.bdB(dB.getWorldMatrix()), gB.bdB(YB), gB.invert(), VB.multiplyToRef(YB, VB), VB.multiplyToRef(BB, VB), VB.multiplyToRef(gB, VB)) : VB.multiplyToRef(BB, VB), VB.setTranslationFromFloats(yB, pB, lB), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(BB, TB) {
        const dB = QB._TmpMats[2];
        return BB.bdB(this.getAbsoluteMatrix()), TB ? (BB.multiplyToRef(TB.getWorldMatrix(), BB), pB.b.ScalingToRef(TB.al.x, TB.al.y, TB.al.z, dB)) : pB.b.IdentityToRef(dB), BB.invert(), !isNaN(BB.m[0]) && (dB.multiplyAtIndex(0, this._scalingDeterminant), BB.multiplyToRef(dB, BB), !0)
      }
      Dv() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const dB = pB.p.Zero();
        return this.getPositionToRef(BB, TB, dB), dB
      }
      getPositionToRef() {
        let BB = arguments.length > 1 ? arguments[1] : void 0,
          TB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const BB = this.getLocalMatrix();
          TB.x = BB.m[12], TB.y = BB.m[13], TB.z = BB.m[14]
        } else {
          const dB = QB._TmpMats[0].bdB(this.getAbsoluteMatrix());
          BB && dB.multiplyToRef(BB.getWorldMatrix(), dB), TB.x = dB.m[12], TB.y = dB.m[13], TB.z = dB.m[14]
        }
      }
      getAbsolutePosition() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const TB = pB.p.Zero();
        return this.getPositionToRef(1, BB, TB), TB
      }
      getAbsolutePositionToRef(BB, TB) {
        this.getPositionToRef(1, BB, TB)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.bdB(this._localMatrix);
          const BB = this._skeleton.getPoseMatrix();
          BB && this._absoluteMatrix.multiplyToRef(BB, this._absoluteMatrix)
        }
        const BB = this.children,
          TB = BB.length;
        for (let dB = 0; dB < TB; dB++) BB[dB].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      bq(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const dB = pB.p.Zero();
        return this.getDirectionToRef(BB, TB, dB), dB
      }
      getDirectionToRef(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const VB = QB._TmpMats[0].bdB(this.getAbsoluteMatrix());
        TB && VB.multiplyToRef(TB.getWorldMatrix(), VB), pB.p.TransformNormalToRef(BB, VB, dB), dB.normalize()
      }
      getRotation() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const dB = pB.p.Zero();
        return this.getRotationToRef(BB, TB, dB), dB
      }
      getRotationToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const VB = QB._TmpQuat;
        this.getRotationQuaternionToRef(BB, TB, VB), VB.toEulerAnglesToRef(dB)
      }
      getRotationQuaternion() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const dB = pB.f.Identity();
        return this.getRotationQuaternionToRef(BB, TB, dB), dB
      }
      getRotationQuaternionToRef() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          TB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), TB.bdB(this._localRotation);
        else {
          const dB = QB._TmpMats[0],
            VB = this.getAbsoluteMatrix();
          BB ? VB.multiplyToRef(BB.getWorldMatrix(), dB) : dB.bdB(VB), dB.multiplyAtIndex(0, this._scalingDeterminant), dB.multiplyAtIndex(1, this._scalingDeterminant), dB.multiplyAtIndex(2, this._scalingDeterminant), dB.decompose(void 0, TB, void 0)
        }
      }
      getRotationMatrix() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 ? arguments[1] : void 0;
        const dB = pB.b.Identity();
        return this.getRotationMatrixToRef(BB, TB, dB), dB
      }
      getRotationMatrixToRef() {
        let BB = arguments.length > 1 ? arguments[1] : void 0,
          TB = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(TB);
        else {
          const dB = QB._TmpMats[0],
            VB = this.getAbsoluteMatrix();
          BB ? VB.multiplyToRef(BB.getWorldMatrix(), dB) : dB.bdB(VB), dB.multiplyAtIndex(0, this._scalingDeterminant), dB.multiplyAtIndex(1, this._scalingDeterminant), dB.multiplyAtIndex(2, this._scalingDeterminant), dB.getRotationMatrixToRef(TB)
        }
      }
      getAbsolutePositionFromLocal(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const dB = pB.p.Zero();
        return this.getAbsolutePositionFromLocalToRef(BB, TB, dB), dB
      }
      getAbsolutePositionFromLocalToRef(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const VB = QB._TmpMats[0].bdB(this.getAbsoluteMatrix());
        TB && VB.multiplyToRef(TB.getWorldMatrix(), VB), pB.p.TransformCoordinatesToRef(BB, VB, dB)
      }
      getLocalPositionFromAbsolute(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const dB = pB.p.Zero();
        return this.getLocalPositionFromAbsoluteToRef(BB, TB, dB), dB
      }
      getLocalPositionFromAbsoluteToRef(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const VB = QB._TmpMats[0].bdB(this.getAbsoluteMatrix());
        TB && VB.multiplyToRef(TB.getWorldMatrix(), VB), VB.invert(), pB.p.TransformCoordinatesToRef(BB, VB, dB)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const BB = this._skeleton.bones.indexOf(this);
        if (-1 !== BB && this._skeleton.bones.splice(BB, 1), this._parentNode && this._parentNode.children) {
          const BB = this._parentNode.children,
            TB = BB.indexOf(this); - 1 !== TB && BB.splice(TB, 1)
        }
        super.dispose()
      }
    }
    QB._TmpVecs = (0, cB.b)(2, pB.p.Zero), QB._TmpQuat = pB.f.Identity(), QB._TmpMats = (0, cB.b)(5, pB.b.Identity), (IB = QB.prototype).copyAnimationRange ?? (IB.copyAnimationRange = (0, PB.h)("Bone", "copyAnimationRange"));
    var RB = dB(38843);
    let aB = !1;
    var ZB = dB(38720),
      XB = dB(39069),
      WB = dB(39075),
      hB = dB(39073),
      CB = dB(38871);

    function GB(BB, TB) {
      const dB = (0, OB.RandomRange)(0, 1);
      oB.d.LerpToRef(TB.color1, TB.color2, dB, BB.color)
    }

    function qB(BB, TB) {
      TB.colorDead.subtractToRef(BB.color, TB._colorDiff), TB._colorDiff.scaleToRef(1 / BB.lifeTime, BB.colorStep)
    }

    function xB(BB, TB) {
      BB._properties.currentColorGradient = TB._colorGradients[0], BB._properties.currentColorGradient.getColorToRef(BB.color), BB._properties.currentColor1.bdB(BB.color), TB._colorGradients.length > 1 ? TB._colorGradients[1].getColorToRef(BB._properties.currentColor2) : BB._properties.currentColor2.bdB(BB.color)
    }

    function jB(BB, TB) {
      const dB = TB._colorGradients;
      VB.l.GetCurrentGradient(TB._ratio, dB, ((TB, dB, VB) => {
        TB !== BB._properties.currentColorGradient && (BB._properties.currentColor1.bdB(BB._properties.currentColor2), dB.getColorToRef(BB._properties.currentColor2), BB._properties.currentColorGradient = TB), oB.d.LerpToRef(BB._properties.currentColor1, BB._properties.currentColor2, VB, BB.color), BB.color.a < 0 && (BB.color.a = 0)
      }))
    }

    function AB(BB, TB) {
      BB.colorStep.scaleToRef(TB._scaledUpdateSpeed, TB._scaledColorStep), BB.color.addInPlace(TB._scaledColorStep), BB.color.a < 0 && (BB.color.a = 0)
    }

    function bB(BB, TB) {
      VB.l.GetCurrentGradient(TB._ratio, TB._angularSpeedGradients, ((TB, dB, VB) => {
        TB !== BB._properties.currentAngularSpeedGradient && (BB._properties.currentAngularSpeed1 = BB._properties.currentAngularSpeed2, BB._properties.currentAngularSpeed2 = dB.getFactor(), BB._properties.currentAngularSpeedGradient = TB), BB.angularSpeed = (0, OB.Lerp)(BB._properties.currentAngularSpeed1, BB._properties.currentAngularSpeed2, VB)
      }))
    }

    function nB(BB, TB) {
      BB.angle += BB.angularSpeed * TB._scaledUpdateSpeed
    }

    function eB(BB, TB) {
      TB.particleEmitterType.startDirectionFunction(TB._emitterWorldMatrix, BB.direction, BB, TB.isLocal, TB._emitterInverseWorldMatrix)
    }

    function BT(BB, TB) {
      TB.startDirectionFunction(TB._emitterWorldMatrix, BB.direction, BB, TB.isLocal)
    }

    function TT(BB, TB) {
      BB._properties.currentVelocityGradient = TB._velocityGradients[0], BB._properties.currentVelocity1 = BB._properties.currentVelocityGradient.getFactor(), TB._velocityGradients.length > 1 ? BB._properties.currentVelocity2 = TB._velocityGradients[1].getFactor() : BB._properties.currentVelocity2 = BB._properties.currentVelocity1
    }

    function dT(BB, TB) {
      BB._properties.currentLimitVelocityGradient = TB._limitVelocityGradients[0], BB._properties.currentLimitVelocity1 = BB._properties.currentLimitVelocityGradient.getFactor(), TB._limitVelocityGradients.length > 1 ? BB._properties.currentLimitVelocity2 = TB._limitVelocityGradients[1].getFactor() : BB._properties.currentLimitVelocity2 = BB._properties.currentLimitVelocity1
    }

    function VT(BB, TB) {
      VB.l.GetCurrentGradient(TB._ratio, TB._velocityGradients, ((TB, dB, VB) => {
        TB !== BB._properties.currentVelocityGradient && (BB._properties.currentVelocity1 = BB._properties.currentVelocity2, BB._properties.currentVelocity2 = dB.getFactor(), BB._properties.currentVelocityGradient = TB), BB._properties.directionScale *= (0, OB.Lerp)(BB._properties.currentVelocity1, BB._properties.currentVelocity2, VB)
      }))
    }

    function yT(BB, TB) {
      VB.l.GetCurrentGradient(TB._ratio, TB._limitVelocityGradients, ((dB, VB, yB) => {
        dB !== BB._properties.currentLimitVelocityGradient && (BB._properties.currentLimitVelocity1 = BB._properties.currentLimitVelocity2, BB._properties.currentLimitVelocity2 = VB.getFactor(), BB._properties.currentLimitVelocityGradient = dB);
        const pB = (0, OB.Lerp)(BB._properties.currentLimitVelocity1, BB._properties.currentLimitVelocity2, yB);
        BB.direction.length() > pB && BB.direction.scaleInPlace(TB.limitVelocityDamping)
      }))
    }

    function pT(BB) {
      BB.direction.scaleToRef(BB._properties.directionScale, BB._properties.scaledDirection)
    }

    function lT(BB, TB) {
      TB.particleEmitterType.startPositionFunction(TB._emitterWorldMatrix, BB.position, BB, TB.isLocal)
    }

    function JT(BB, TB) {
      TB.startPositionFunction(TB._emitterWorldMatrix, BB.position, BB, TB.isLocal)
    }

    function YT(BB, TB) {
      BB._properties.localPosition ? BB._properties.localPosition.bdB(BB.position) : BB._properties.localPosition = BB.position.clone(), pB.p.TransformCoordinatesToRef(BB._properties.localPosition, TB._emitterWorldMatrix, BB.position)
    }

    function gT(BB, TB) {
      TB.isLocal && BB._properties.localPosition ? (BB._properties.localPosition.addInPlace(BB._properties.scaledDirection), pB.p.TransformCoordinatesToRef(BB._properties.localPosition, TB._emitterWorldMatrix, BB.position)) : BB.position.addInPlace(BB._properties.scaledDirection)
    }

    function oT(BB, TB) {
      BB._properties.currentDragGradient = TB._dragGradients[0], BB._properties.currentDrag1 = BB._properties.currentDragGradient.getFactor(), TB._dragGradients.length > 1 ? BB._properties.currentDrag2 = TB._dragGradients[1].getFactor() : BB._properties.currentDrag2 = BB._properties.currentDrag1
    }

    function kT(BB, TB) {
      VB.l.GetCurrentGradient(TB._ratio, TB._dragGradients, ((TB, dB, VB) => {
        TB !== BB._properties.currentDragGradient && (BB._properties.currentDrag1 = BB._properties.currentDrag2, BB._properties.currentDrag2 = dB.getFactor(), BB._properties.currentDragGradient = TB);
        const yB = (0, OB.Lerp)(BB._properties.currentDrag1, BB._properties.currentDrag2, VB);
        BB._properties.scaledDirection.scaleInPlace(1 - yB)
      }))
    }

    function LT(BB, TB) {
      BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2 ? (BB._properties.randomNoiseCoordinates1.YBB(Math.random(), Math.random(), Math.random()), BB._properties.randomNoiseCoordinates2.YBB(Math.random(), Math.random(), Math.random())) : (BB._properties.randomNoiseCoordinates1 = new pB.p(Math.random(), Math.random(), Math.random()), BB._properties.randomNoiseCoordinates2 = new pB.p(Math.random(), Math.random(), Math.random()))
    }

    function OT(BB, TB) {
      const dB = TB._noiseTextureData,
        VB = TB._noiseTextureSize;
      if (dB && VB && BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2) {
        const yB = TB._fetchR(BB._properties.randomNoiseCoordinates1.x, BB._properties.randomNoiseCoordinates1.y, VB.width, VB.height, dB),
          lB = TB._fetchR(BB._properties.randomNoiseCoordinates1.z, BB._properties.randomNoiseCoordinates2.x, VB.width, VB.height, dB),
          JB = TB._fetchR(BB._properties.randomNoiseCoordinates2.y, BB._properties.randomNoiseCoordinates2.z, VB.width, VB.height, dB),
          YB = pB.j.RD[0],
          gB = pB.j.RD[1];
        YB.YBB((2 * yB - 1) * TB.noiseStrength.x, (2 * lB - 1) * TB.noiseStrength.y, (2 * JB - 1) * TB.noiseStrength.z), YB.scaleToRef(TB._tempScaledUpdateSpeed, gB), BB.direction.addInPlace(gB)
      }
    }

    function DT(BB, TB) {
      TB.gravity.scaleToRef(TB._tempScaledUpdateSpeed, TB._scaledGravity), BB.direction.addInPlace(TB._scaledGravity)
    }

    function uT(BB, TB) {
      BB.size = (0, OB.RandomRange)(TB.minSize, TB.maxSize), BB.scale.YBB((0, OB.RandomRange)(TB.minScaleX, TB.maxScaleX), (0, OB.RandomRange)(TB.minScaleY, TB.maxScaleY))
    }

    function HT(BB, TB) {
      BB._properties.currentSizeGradient = TB._sizeGradients[0], BB._properties.currentSize1 = BB._properties.currentSizeGradient.getFactor(), BB.size = BB._properties.currentSize1, TB._sizeGradients.length > 1 ? BB._properties.currentSize2 = TB._sizeGradients[1].getFactor() : BB._properties.currentSize2 = BB._properties.currentSize1, BB.scale.YBB((0, OB.RandomRange)(TB.minScaleX, TB.maxScaleX), (0, OB.RandomRange)(TB.minScaleY, TB.maxScaleY))
    }

    function ET(BB, TB) {
      const dB = TB._actualFrame / TB.targetStopDuration;
      VB.l.GetCurrentGradient(dB, TB._startSizeGradients, ((dB, VB, yB) => {
        dB !== TB._currentStartSizeGradient && (TB._currentStartSize1 = TB._currentStartSize2, TB._currentStartSize2 = VB.getFactor(), TB._currentStartSizeGradient = dB);
        const pB = (0, OB.Lerp)(TB._currentStartSize1, TB._currentStartSize2, yB);
        BB.scale.scaleInPlace(pB)
      }))
    }

    function vT(BB, TB) {
      VB.l.GetCurrentGradient(TB._ratio, TB._sizeGradients, ((TB, dB, VB) => {
        TB !== BB._properties.currentSizeGradient && (BB._properties.currentSize1 = BB._properties.currentSize2, BB._properties.currentSize2 = dB.getFactor(), BB._properties.currentSizeGradient = TB), BB.size = (0, OB.Lerp)(BB._properties.currentSize1, BB._properties.currentSize2, VB)
      }))
    }

    function mT(BB, TB) {
      BB.remapData = new pB.r(0, 1, 0, 1)
    }

    function iT(BB, TB) {
      TB._colorRemapGradients && TB._colorRemapGradients.length > 0 && VB.l.GetCurrentGradient(TB._ratio, TB._colorRemapGradients, ((TB, dB, VB) => {
        const yB = (0, OB.Lerp)(TB.factor1, dB.factor1, VB),
          pB = (0, OB.Lerp)(TB.factor2, dB.factor2, VB);
        BB.remapData.x = yB, BB.remapData.y = pB - yB
      })), TB._alphaRemapGradients && TB._alphaRemapGradients.length > 0 && VB.l.GetCurrentGradient(TB._ratio, TB._alphaRemapGradients, ((TB, dB, VB) => {
        const yB = (0, OB.Lerp)(TB.factor1, dB.factor1, VB),
          pB = (0, OB.Lerp)(TB.factor2, dB.factor2, VB);
        BB.remapData.z = yB, BB.remapData.w = pB - yB
      }))
    }

    function NT(BB, TB) {
      const dB = (0, OB.Clamp)(TB._actualFrame / TB.targetStopDuration);
      VB.l.GetCurrentGradient(dB, TB._lifeTimeGradients, ((TB, VB) => {
        const yB = TB,
          pB = VB,
          lB = yB.getFactor(),
          JB = pB.getFactor(),
          YB = (dB - yB.gradient) / (pB.gradient - yB.gradient);
        BB.lifeTime = (0, OB.Lerp)(lB, JB, YB)
      })), TB._emitPower = (0, OB.RandomRange)(TB.minEmitPower, TB.maxEmitPower)
    }

    function tT(BB, TB) {
      BB.lifeTime = (0, OB.RandomRange)(TB.minLifeTime, TB.maxLifeTime), TB._emitPower = (0, OB.RandomRange)(TB.minEmitPower, TB.maxEmitPower)
    }

    function fT(BB, TB) {
      0 === TB._emitPower ? (BB._properties.initialDirection ? BB._properties.initialDirection.bdB(BB.direction) : BB._properties.initialDirection = BB.direction.clone(), BB.direction.set(0, 0, 0)) : (BB._properties.initialDirection = null, BB.direction.scaleInPlace(TB._emitPower)), BB.direction.addInPlace(TB._inheritedVelocityOffset)
    }

    function sT(BB, TB) {
      BB.angularSpeed = (0, OB.RandomRange)(TB.minAngularSpeed, TB.maxAngularSpeed), BB.angle = (0, OB.RandomRange)(TB.minInitialRotation, TB.maxInitialRotation)
    }

    function MT(BB, TB) {
      BB._properties.currentAngularSpeedGradient = TB._angularSpeedGradients[0], BB.angularSpeed = BB._properties.currentAngularSpeedGradient.getFactor(), BB._properties.currentAngularSpeed1 = BB.angularSpeed, TB._angularSpeedGradients.length > 1 ? BB._properties.currentAngularSpeed2 = TB._angularSpeedGradients[1].getFactor() : BB._properties.currentAngularSpeed2 = BB._properties.currentAngularSpeed1, BB.angle = (0, OB.RandomRange)(TB.minInitialRotation, TB.maxInitialRotation)
    }

    function zT(BB, TB) {
      BB._properties.initialStartSpriteCellId = TB.startSpriteCellID, BB._properties.initialEndSpriteCellId = TB.endSpriteCellID, BB._properties.initialSpriteCellLoop = TB.spriteCellLoop
    }

    function wT(BB, TB) {
      BB.previousItem = TB.previousItem, BB.nextItem = TB, TB.previousItem && (TB.previousItem.nextItem = BB), TB.previousItem = BB
    }

    function UT(BB, TB) {
      BB.previousItem = TB, BB.nextItem = TB.nextItem, TB.nextItem && (TB.nextItem.previousItem = BB), TB.nextItem = BB
    }

    function FT(BB) {
      BB.previousItem && (BB.previousItem.nextItem = BB.nextItem), BB.nextItem && (BB.nextItem.previousItem = BB.previousItem)
    }
    var KT = dB(39117);
    class rT extends tB {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(BB) {
        this._startDirectionFunction !== BB && (this._startDirectionFunction = BB, this._directionCreation.process = BB ? BT : eB)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(BB) {
        this._startPositionFunction !== BB && (this._startPositionFunction = BB, this._positionCreation.process = BB ? JT : lT)
      }
      set onDispose(BB) {
        this._onDisposeObserver && this.lF.remove(this._onDisposeObserver), this._onDisposeObserver = this.lF.add(BB)
      }
      get WdB() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(BB) {
        this._useRampGradients !== BB && (this._useRampGradients = BB, this._resetEffect(), BB ? (this._rampCreation = {
          process: mT,
          previousItem: null,
          nextItem: null
        }, UT(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: iT,
          previousItem: null,
          nextItem: null
        }, UT(this._remapGradientProcessing, this._gravityProcessing))) : (FT(this._rampCreation), FT(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(BB) {
        this._isLocal !== BB && (this._isLocal = BB, BB ? (this._isLocalCreation = {
          process: YT,
          previousItem: null,
          nextItem: null
        }, UT(this._isLocalCreation, this._positionCreation)) : FT(this._isLocalCreation))
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
          process: zT,
          previousItem: null,
          nextItem: null
        }, UT(this._sheetCreation, this._colorDeadCreation)) : FT(this._sheetCreation), this._reset())
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
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[TB] = new XB.b(this._engine), this._customWrappers[TB].effect = BB, this._customWrappers[TB].drawContext && (this._customWrappers[TB].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new yB.e), this._onBeforeDrawParticlesObservable
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
          if (this._noiseTexture = BB, !BB) return FT(this._noiseCreation), void FT(this._noiseProcessing);
          this._noiseCreation = {
            process: LT,
            previousItem: null,
            nextItem: null
          }, UT(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: OT,
            previousItem: null,
            nextItem: null
          }, UT(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          lB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          JB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          gB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        aB || (aB = !0, rB(RB.g, QB)), (0, ZB.b)(), super(BB), this._emitterInverseWorldMatrix = pB.b.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new pB.p, this.lF = new yB.e, this.onStoppedObservable = new yB.e, this.onStartedObservable = new yB.e, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new oB.d(0, 0, 0, 0), this._colorDiff = new oB.d(0, 0, 0, 0), this._scaledGravity = pB.p.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = BB => {}, this.recycleParticle = BB => {
          const TB = this._particles.pop();
          TB !== BB && TB.copyTo(BB), TB.metadata = null, this._stockParticles.push(TB)
        }, this._createParticle = () => {
          let BB;
          return 0 !== this._stockParticles.length ? (BB = this._stockParticles.pop(), BB._reset()) : BB = new sB(this), this._prepareParticle(BB), BB
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = TB, this._epsilon = JB, dB && "Scene" !== dB.getClassName() ? (this._engine = dB, this.defaultProjectionMatrix = pB.b.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = dB || YB.c.LastCreatedScene, this._engine = this._scene.PD(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.kN.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: tT,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: lT,
          previousItem: null,
          nextItem: null
        }, UT(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: eB,
          previousItem: null,
          nextItem: null
        }, UT(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: fT,
          previousItem: null,
          nextItem: null
        }, UT(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: uT,
          previousItem: null,
          nextItem: null
        }, UT(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: sT,
          previousItem: null,
          nextItem: null
        }, UT(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: GB,
          previousItem: null,
          nextItem: null
        }, UT(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: qB,
          previousItem: null,
          nextItem: null
        }, UT(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, gB || (this._colorProcessing = {
          process: AB,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: nB,
          previousItem: null,
          nextItem: null
        }, UT(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: pT,
          previousItem: null,
          nextItem: null
        }, UT(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: gT,
          previousItem: null,
          nextItem: null
        }, UT(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: DT,
          previousItem: null,
          nextItem: null
        }, UT(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = lB, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new XB.b(this._engine)
        }, this._customWrappers[0].effect = VB, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new kB.c, this.updateFunction = BB => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((BB => {
            this._noiseTextureData = BB
          })));
          const TB = BB === this._particles;
          for (let dB = 0; dB < BB.length; dB++) {
            const VB = BB[dB];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const yB = VB.age;
            if (VB.age += this._tempScaledUpdateSpeed, VB.age > VB.lifeTime) {
              const BB = VB.age - yB,
                TB = VB.lifeTime - yB;
              this._tempScaledUpdateSpeed = TB * this._tempScaledUpdateSpeed / BB, VB.age = VB.lifeTime
            }
            this._ratio = VB.age / VB.lifeTime, VB._properties.directionScale = this._tempScaledUpdateSpeed;
            let pB = this._updateQueueStart;
            for (; pB;) pB.process(VB, this), pB = pB.nextItem;
            if (this._isAnimationSheetEnabled && !gB && VB.updateCellIndex(), VB._inheritParticleInfoToSubEmitters(), VB.age >= VB.lifeTime) {
              if (this._emitFromParticle(VB), VB._properties.attachedSubEmitters) {
                for (const BB of VB._properties.attachedSubEmitters) BB.particleSystem.disposeOnStop = !0, BB.particleSystem.stop();
                VB._properties.attachedSubEmitters = null
              }
              this.recycleParticle(VB), TB && dB--
            } else;
          }
        }
      }
      serialize(BB) {
        throw new Error("Method not implemented.")
      }
      clone(BB, TB) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = NT : this._lifeTimeCreation.process = tT
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: ET,
          previousItem: null,
          nextItem: null
        }, UT(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (FT(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(BB) {
        this.targetStopDuration !== BB && (this._targetStopDuration = BB, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(BB, TB, dB) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, BB, TB, dB), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(BB) {
        return this._removeFactorGradient(this._lifeTimeGradients, BB), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(BB, TB, dB) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = HT, this._sizeGradientProcessing = {
          process: vT,
          previousItem: null,
          nextItem: null
        }, wT(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, BB, TB, dB), this
      }
      removeSizeGradient(BB) {
        return this._removeFactorGradient(this._sizeGradients, BB), 0 === this._sizeGradients?.length && (FT(this._sizeGradientProcessing), this._sizeCreation.process = uT), this
      }
      addColorRemapGradient(BB, TB, dB) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, BB, TB, dB), this
      }
      removeColorRemapGradient(BB) {
        return this._removeFactorGradient(this._colorRemapGradients, BB), this
      }
      addAlphaRemapGradient(BB, TB, dB) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, BB, TB, dB), this
      }
      removeAlphaRemapGradient(BB) {
        return this._removeFactorGradient(this._alphaRemapGradients, BB), this
      }
      addAngularSpeedGradient(BB, TB, dB) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = MT, this._angularSpeedGradientProcessing = {
          process: bB,
          previousItem: null,
          nextItem: null
        }, wT(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, BB, TB, dB), this
      }
      removeAngularSpeedGradient(BB) {
        return this._removeFactorGradient(this._angularSpeedGradients, BB), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = sT, FT(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(BB, TB, dB) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: TT,
          previousItem: null,
          nextItem: null
        }, UT(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: VT,
          previousItem: null,
          nextItem: null
        }, wT(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, BB, TB, dB), this
      }
      removeVelocityGradient(BB) {
        return this._removeFactorGradient(this._velocityGradients, BB), 0 === this._velocityGradients?.length && (FT(this._velocityCreation), FT(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(BB, TB, dB) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: dT,
          previousItem: null,
          nextItem: null
        }, UT(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: yT,
          previousItem: null,
          nextItem: null
        }, UT(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, BB, TB, dB), this
      }
      removeLimitVelocityGradient(BB) {
        return this._removeFactorGradient(this._limitVelocityGradients, BB), 0 === this._limitVelocityGradients?.length && (FT(this._limitVelocityCreation), FT(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(BB, TB, dB) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: oT,
          previousItem: null,
          nextItem: null
        }, wT(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: kT,
          previousItem: null,
          nextItem: null
        }, wT(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, BB, TB, dB), this
      }
      removeDragGradient(BB) {
        return this._removeFactorGradient(this._dragGradients, BB), 0 === this._dragGradients?.length && (FT(this._dragCreation), FT(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(BB, TB, dB) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, BB, TB, dB), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(BB) {
        return this._removeFactorGradient(this._startSizeGradients, BB), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const BB = new Uint8Array(4 * this._rawTextureWidth),
          TB = oB.h.Color3[0];
        for (let dB = 0; dB < this._rawTextureWidth; dB++) {
          const yB = dB / this._rawTextureWidth;
          VB.l.GetCurrentGradient(yB, this._rampGradients, ((VB, yB, pB) => {
            oB.c.LerpToRef(VB.color, yB.color, pB, TB), BB[4 * dB] = 255 * TB.r, BB[4 * dB + 1] = 255 * TB.g, BB[4 * dB + 2] = 255 * TB.b, BB[4 * dB + 3] = 255
          }))
        }
        this._rampGradientsTexture = JB.d.CreateRGBATexture(BB, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((BB, TB) => BB.gradient < TB.gradient ? -1 : BB.gradient > TB.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(BB, TB) {
        this._rampGradients || (this._rampGradients = []);
        const dB = new VB.f(BB, TB);
        return this._rampGradients.push(dB), this._syncRampGradientTexture(), this
      }
      removeRampGradient(BB) {
        return this._removeGradientAndTexture(BB, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(BB, TB, dB) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = xB, this._colorProcessing.process = jB);
        const yB = new VB.e(BB, TB, dB);
        return this._colorGradients.push(yB), this._colorGradients.sort(((BB, TB) => BB.gradient < TB.gradient ? -1 : BB.gradient > TB.gradient ? 1 : 0)), this
      }
      removeColorGradient(BB) {
        if (!this._colorGradients) return this;
        let TB = 0;
        for (const dB of this._colorGradients) {
          if (dB.gradient === BB) {
            this._colorGradients.splice(TB, 1);
            break
          }
          TB++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = GB, this._colorProcessing.process = AB), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const BB of this._drawWrappers)
            if (BB)
              for (const TB of BB) TB?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(BB, TB, dB, VB, yB) {
        return yB[4 * (((BB = .5 * Math.abs(BB) + .5) * dB % dB | 0) + ((TB = .5 * Math.abs(TB) + .5) * VB % VB | 0) * dB)] / 255
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
          TB = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * TB), this._vertexBuffer = new lB.d(BB, this._vertexData, !0, TB);
        let dB = 0;
        const VB = this._vertexBuffer.createVertexBuffer(lB.m.PositionKind, dB, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[lB.m.PositionKind] = VB, dB += 3;
        const yB = this._vertexBuffer.createVertexBuffer(lB.m.ColorKind, dB, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[lB.m.ColorKind] = yB, dB += 4;
        const pB = this._vertexBuffer.createVertexBuffer("angle", dB, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = pB, dB += 1;
        const JB = this._vertexBuffer.createVertexBuffer("size", dB, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = JB, dB += 2, this._isAnimationSheetEnabled) {
          const BB = this._vertexBuffer.createVertexBuffer("cellIndex", dB, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = BB, dB += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const BB = this._vertexBuffer.createVertexBuffer("direction", dB, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = BB, dB += 3
        }
        if (this._useRampGradients) {
          const BB = this._vertexBuffer.createVertexBuffer("remapData", dB, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = BB, dB += 4
        }
        let YB;
        if (this._useInstancing) {
          const TB = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new lB.d(BB, TB, !1, 2), YB = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else YB = this._vertexBuffer.createVertexBuffer("offset", dB, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = YB, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const BB = [],
          TB = [];
        let dB = 0;
        for (let VB = 0; VB < this._capacity; VB++) BB.push(dB), BB.push(dB + 1), BB.push(dB + 2), BB.push(dB), BB.push(dB + 2), BB.push(dB + 3), TB.push(dB, dB + 1, dB + 1, dB + 2, dB + 2, dB + 3, dB + 3, dB, dB, dB + 3), dB += 4;
        this._indexBuffer = this._engine.createIndexBuffer(BB), this._linesIndexBuffer = this._engine.createIndexBuffer(TB)
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
              for (let TB = 0; TB < this.preWarmCycles; TB++) this.animate(!0), BB.render()
            }))
          }));
          else
            for (let TB = 0; TB < this.preWarmCycles; TB++) this.animate(!0)
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
      _appendParticleVertex(BB, TB, dB, VB) {
        let yB = BB * this._vertexBufferSize;
        const lB = pB.j.RD[0].bdB(this._scene?.floatingOriginOffset || pB.p.ZeroReadOnly);
        if (this._vertexData[yB++] = TB.position.x + this.worldOffset.x - lB.x, this._vertexData[yB++] = TB.position.y + this.worldOffset.y - lB.y, this._vertexData[yB++] = TB.position.z + this.worldOffset.z - lB.z, this._vertexData[yB++] = TB.color.r, this._vertexData[yB++] = TB.color.g, this._vertexData[yB++] = TB.color.b, this._vertexData[yB++] = TB.color.a, this._vertexData[yB++] = TB.angle, this._vertexData[yB++] = TB.scale.x * TB.size, this._vertexData[yB++] = TB.scale.y * TB.size, this._isAnimationSheetEnabled && (this._vertexData[yB++] = TB.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[yB++] = TB.direction.x, this._vertexData[yB++] = TB.direction.y, this._vertexData[yB++] = TB.direction.z);
        else if (TB._properties.initialDirection) {
          let BB = TB._properties.initialDirection;
          this.isLocal && (pB.p.TransformNormalToRef(BB, this._emitterWorldMatrix, pB.j.RD[0]), BB = pB.j.RD[0]), 0 === BB.x && 0 === BB.z && (BB.x = .001), this._vertexData[yB++] = BB.x, this._vertexData[yB++] = BB.y, this._vertexData[yB++] = BB.z
        } else {
          let BB = TB.direction;
          this.isLocal && (pB.p.TransformNormalToRef(BB, this._emitterWorldMatrix, pB.j.RD[0]), BB = pB.j.RD[0]), 0 === BB.x && 0 === BB.z && (BB.x = .001), this._vertexData[yB++] = BB.x, this._vertexData[yB++] = BB.y, this._vertexData[yB++] = BB.z
        }
        this._useRampGradients && TB.remapData && (this._vertexData[yB++] = TB.remapData.x, this._vertexData[yB++] = TB.remapData.y, this._vertexData[yB++] = TB.remapData.z, this._vertexData[yB++] = TB.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === dB ? dB = this._epsilon : 1 === dB && (dB = 1 - this._epsilon), 0 === VB ? VB = this._epsilon : 1 === VB && (VB = 1 - this._epsilon)), this._vertexData[yB++] = dB, this._vertexData[yB] = VB)
      }
      _prepareParticle(BB) {}
      _createNewOnes(BB) {
        let TB;
        for (let dB = 0; dB < BB && this._particles.length !== this._capacity; dB++) {
          TB = this._createParticle(), this._particles.push(TB);
          let BB = this._createQueueStart;
          for (; BB;) BB.process(TB, this), BB = BB.nextItem;
          TB._inheritParticleInfoToSubEmitters()
        }
      }
      _update(BB) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const BB = this.emitter;
          this._emitterWorldMatrix = BB.getWorldMatrix()
        } else {
          const BB = this.emitter;
          this._emitterWorldMatrix = pB.b.Translation(BB.x, BB.y, BB.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(BB)
      }
      static _GetAttributeNamesOrOptions() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const VB = [lB.m.PositionKind, lB.m.ColorKind, "angle", "offset", "size"];
        return BB && VB.push("cellIndex"), TB || VB.push("direction"), dB && VB.push("remapData"), VB
      }
      static _GetEffectCreationOptions() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const VB = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, WB.c)(VB), BB && VB.push("particlesInfos"), TB && VB.push("logarithmicDepthConstant"), dB && (VB.push("vFogInfos"), VB.push("vFogColor")), VB
      }
      fillDefines(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, WB.g)(this, this._scene, BB), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && BB.push("#define FOG")), this._isAnimationSheetEnabled && BB.push("#define ANIMATESHEET"), this.useLogarithmicDepth && BB.push("#define LOGARITHMICDEPTH"), TB === tB.BLENDMODE_MULTIPLY && BB.push("#define BLENDMULTIPLYMODE"), this.isLocal && BB.push("#define LOCAL"), this._useRampGradients && BB.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (BB.push("#define BILLBOARD"), this.billboardMode) {
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
        dB && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), BB.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(BB, TB, dB) {
        TB.push(...rT._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), BB.push(...rT._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), dB.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, CB.d)(BB, this._imageProcessingConfigurationDefines), (0, CB.b)(dB, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(BB) {
        var TB;
        const dB = this._getCustomDrawWrapper(BB);
        if (dB?.effect) return dB;
        const VB = [];
        this.fillDefines(VB, BB);
        const pB = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          lB = KT.e._PrepareStringDefines(pB, VB),
          JB = lB ? KT.e.GetConfiguration(pB) : void 0;
        let YB = this._drawWrappers[pB];
        YB || (YB = this._drawWrappers[pB] = [], 0 === pB || this._renderPassObserver || (this._renderPassObserver = ((TB = this._engine)._onReleaseRenderPassObservable ?? (TB._onReleaseRenderPassObservable = new yB.e)).add((BB => {
          const TB = this._drawWrappers[BB];
          if (TB) {
            for (const BB of TB) BB?.dispose();
            delete this._drawWrappers[BB]
          }
        }))));
        let gB = YB[BB];
        gB || (gB = new XB.b(this._engine), gB.drawContext && (gB.drawContext.useInstancing = this._useInstancing), YB[BB] = gB);
        const oB = VB.join("\n");
        if (gB.defines !== oB) {
          const BB = [],
            TB = [],
            dB = [];
          this.fillUniformsAttributesAndSamplerNames(TB, BB, dB), lB && (TB.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== JB?.defines.PREPASS_LOCAL_POSITION_INDEX && TB.push("inverseEmitterWM", "geometryWorldOffset")), gB.setEffect(this._engine.createEffect("particles", {
            attributes: BB,
            uniformsNames: TB,
            samplers: dB,
            defines: oB,
            shaderLanguage: this._shaderLanguage,
            multiTarget: lB,
            indexParameters: lB ? {
              buffersCount: JB?._mrtCount ?? 0
            } : void 0
          }, this._engine), oB)
        }
        return gB
      }
      _bindGeometryRendering(BB) {
        const TB = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          dB = KT.e.GetConfiguration(TB);
        if (!dB?._defines) return;
        BB.setFloat("objectId", 0), BB.setInt("meshBlendTag", 0);
        const VB = this._scene?.activeCamera;
        if (BB.setFloat2("cameraInfo", VB?.minZ ?? 0, VB?.maxZ ?? 1), this.isLocal && void 0 !== dB.defines.PREPASS_LOCAL_POSITION_INDEX) {
          BB.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const TB = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || pB.p.ZeroReadOnly, pB.j.RD[0]);
          BB.setVector3("geometryWorldOffset", TB)
        }
      }
      animate() {
        let BB, TB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!TB && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (TB ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) BB = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const TB = this._calculateEmitRate();
            BB = TB * this._scaledUpdateSpeed | 0, this._newPartsExcess += TB * this._scaledUpdateSpeed - BB
          }
          if (this._newPartsExcess > 1 && (BB += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? BB = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(BB), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !TB) {
            let BB = 0;
            for (let TB = 0; TB < this._particles.length; TB++) {
              const dB = this._particles[TB];
              this._appendParticleVertices(BB, dB), BB += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const BB = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  TB = this._particles.length;
                TB < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, TB * BB, this._fixedCapacityHighWaterMark * BB), this._fixedCapacityHighWaterMark = TB, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
          const TB = this._actualFrame / this.targetStopDuration;
          VB.l.GetCurrentGradient(TB, this._emitRateGradients, ((TB, dB, VB) => {
            TB !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = dB.getFactor(), this._currentEmitRateGradient = TB), BB = (0, OB.Lerp)(this._currentEmitRate1, this._currentEmitRate2, VB)
          }))
        }
        return BB
      }
      _appendParticleVertices(BB, TB) {
        this._appendParticleVertex(BB++, TB, 0, 0), this._useInstancing || (this._appendParticleVertex(BB++, TB, 1, 0), this._appendParticleVertex(BB++, TB, 1, 1), this._appendParticleVertex(BB, TB, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !rT.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([dB.e(326).then((() => dB(59756))), dB.e(320).then((() => dB(59765)))])) : await Promise.all([dB.e(309).then((() => dB(59770))), Promise.all([dB.e(302), dB.e(338)]).then((() => dB(59772)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== tB.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(tB.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(tB.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(BB) {
        const TB = this._getWrapper(BB),
          dB = TB.effect,
          VB = this._engine;
        VB.enableEffect(TB);
        const yB = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        dB.setTexture("diffuseSampler", this.particleTexture), dB.setMatrix("view", yB);
        const lB = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (dB.setMatrix("projection", lB), this._isAnimationSheetEnabled && this.particleTexture) {
          const BB = this.particleTexture.getBaseSize();
          dB.setFloat3("particlesInfos", this.spriteCellWidth / BB.width, this.spriteCellHeight / BB.height, this.spriteCellWidth / BB.width)
        }
        if (dB.setVector2("translationPivot", this.translationPivot), dB.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const BB = this._scene.activeCamera;
          dB.setVector3("eyePosition", BB.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), dB.setTexture("rampSampler", this._rampGradientsTexture));
        const JB = dB.defines;
        this._scene && ((0, WB.d)(dB, this, this._scene), this.applyFog && (0, hB.h)(this._scene, void 0, dB)), JB.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (yB.invertToRef(pB.j.Matrix[0]), dB.setMatrix("invView", pB.j.Matrix[0])), dB._multiTarget && this._bindGeometryRendering(dB), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? VB.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, dB) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, dB)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? VB.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, dB) : VB.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, dB), this.useLogarithmicDepth && this._scene && (0, hB.p)(JB, dB, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(dB), this._setEngineBasedOnBlendMode(BB), dB._multiTarget && KT.e._BindZeroAlphaDiscard(VB, dB);
        let YB = !1;
        try {
          KT.e._BindAttachmentsForEffect(VB, dB) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(dB), this._useInstancing ? this._scene?.forceWireframe ? VB.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : VB.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? VB.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : VB.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), YB = !0)
        } finally {
          KT.e._RestoreAttachments(VB)
        }
        return YB ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const BB = this._engine;
        let TB;
        return BB.setState && (BB.setState(!1), this.forceDepthWrite && BB.setDepthWrite(!0)), TB = this.blendMode === tB.BLENDMODE_MULTIPLYADD ? this._render(tB.BLENDMODE_MULTIPLY) + this._render(tB.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), TB
      }
      _onDispose() {}
      dispose() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), BB && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), BB && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(TB, dB), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const BB = this._scene.kN.indexOf(this);
          BB > -1 && this._scene.kN.splice(BB, 1), this._scene._activeParticleSystems.dispose()
        }
        this.lF.notifyObservers(this), this.lF.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    rT.ForceGLSL = !1;
    var IT, cT = dB(36166);
    ! function(BB) {
      BB[BB.ATTACHED = 0] = "ATTACHED", BB[BB.END = 1] = "END"
    }(IT || (IT = {}));
    class ST {
      constructor(BB) {
        if (this.particleSystem = BB, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !BB.emitter || !BB.emitter.dispose) {
          const TB = (0, cT.e)("BABYLON.AbstractMesh");
          BB.emitter = new TB("SubemitterSystemEmitter", BB.jU()), BB._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let BB = this.particleSystem.emitter;
        if (BB) {
          if (BB instanceof pB.p) BB = BB.clone();
          else if (-1 !== BB.getClassName().indexOf("Mesh")) {
            BB = new((0, cT.e)("BABYLON.Mesh"))("", BB.jU()), BB.isVisible = !1
          }
        } else BB = new pB.p;
        const TB = new ST(this.particleSystem.clone(this.particleSystem.name, BB));
        return TB.particleSystem.name += "Clone", TB.type = this.type, TB.inheritDirection = this.inheritDirection, TB.inheritedVelocityAmount = this.inheritedVelocityAmount, TB.particleSystem._disposeEmitterOnDispose = !0, TB.particleSystem.disposeOnStop = !0, TB
      }
      serialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const TB = {};
        return TB.type = this.type, TB.inheritDirection = this.inheritDirection, TB.inheritedVelocityAmount = this.inheritedVelocityAmount, TB.particleSystem = this.particleSystem.serialize(BB), TB
      }
      static _ParseParticleSystem(BB, TB, dB) {
        throw (0, PB.i)("ParseParticle")
      }
      static Parse(BB, TB, dB) {
        const VB = BB.particleSystem,
          yB = new ST(ST._ParseParticleSystem(VB, TB, dB, !0));
        return yB.type = BB.type, yB.inheritDirection = BB.inheritDirection, yB.inheritedVelocityAmount = BB.inheritedVelocityAmount, yB.particleSystem._isSubEmitter = !0, yB
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var PT = dB(38652),
      QT = dB(38772);
    const RT = () => {};
    class aT {
      constructor() {
        this.particlePositionGenerator = RT, this.particleDestinationGenerator = RT, this.particleDirectionGenerator = RT
      }
      startDirectionFunction(BB, TB, dB, VB) {
        const yB = pB.j.RD[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== RT) this.particleDirectionGenerator(-1, dB, yB);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== RT) {
          this.particleDestinationGenerator(-1, dB, yB);
          const BB = pB.j.RD[1];
          yB.subtractToRef(dB.position, BB), BB.scaleToRef(1 / dB.lifeTime, yB)
        } else yB.set(0, 0, 0);
        VB ? TB.bdB(yB) : pB.p.TransformNormalToRef(yB, BB, TB)
      }
      startPositionFunction(BB, TB, dB, VB) {
        const yB = pB.j.RD[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== RT ? this.particlePositionGenerator(-1, dB, yB) : yB.set(0, 0, 0), VB ? TB.bdB(yB) : pB.p.TransformCoordinatesToRef(yB, BB, TB)
      }
      clone() {
        const BB = new aT;
        return LB.b.DeepCopy(this, BB), BB
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
    const ZT = pB.p.Zero(),
      XT = pB.p.Zero(),
      WT = pB.p.Zero();
    class hT {
      constructor() {
        this.strength = 0, this.position = pB.p.Zero()
      }
      _processParticle(BB, TB) {
        this.position.subtractToRef(BB.position, ZT);
        const dB = ZT.lengthSquared() + 1;
        ZT.normalize().scaleToRef(this.strength / dB, XT), XT.scaleToRef(TB._tempScaledUpdateSpeed, WT), BB.direction.addInPlace(WT)
      }
      serialize() {
        return {
          position: this.position.FVB(),
          strength: this.strength
        }
      }
    }
    const CT = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class GT extends rT {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = BB => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const TB = Math.floor(Math.random() * this._subEmitters.length);
          for (const dB of this._subEmitters[TB])
            if (1 === dB.type) {
              const TB = dB.clone();
              BB._inheritParticleInfoToSubEmitter(TB), TB.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(TB.particleSystem), TB.particleSystem.start()
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
        this._flowMap !== BB && (this._flowMap = BB, this._flowMapUpdate && (FT(this._flowMapUpdate), this._flowMapUpdate = null), BB && (this._flowMapUpdate = {
          process: BB => {
            const TB = this.jU()?.getTransformMatrix();
            this._flowMap._processParticle(BB, this.flowMapStrength * this._tempScaledUpdateSpeed, TB)
          },
          previousItem: null,
          nextItem: null
        }, UT(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(BB) {
        super.addAttractor(BB), 1 === this._attractors.length && (this._attractorUpdate = {
          process: BB => {
            for (const TB of this._attractors) TB._processParticle(BB, this)
          },
          previousItem: null,
          nextItem: null
        }, UT(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(BB) {
        super.removeAttractor(BB), 0 === this._attractors.length && this._attractorUpdate && FT(this._attractorUpdate)
      }
      start() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(BB)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const BB of this.subEmitters) BB instanceof GT ? this._subEmitters.push([new ST(BB)]) : BB instanceof ST ? this._subEmitters.push([BB]) : BB instanceof Array && this._subEmitters.push(BB)
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
          const TB = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          BB._properties.attachedSubEmitters = [];
          for (const dB of TB)
            if (0 === dB.type) {
              const TB = dB.clone();
              BB._properties.attachedSubEmitters.push(TB), TB.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), BB && this.particles)
          for (const dB of this.particles)
            if (dB._properties.attachedSubEmitters)
              for (let BB = dB._properties.attachedSubEmitters.length - 1; BB >= 0; BB -= 1) dB._properties.attachedSubEmitters[BB].dispose();
        if (TB && this.activeSubSystems)
          for (let dB = this.activeSubSystems.length - 1; dB >= 0; dB -= 1) this.activeSubSystems[dB].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let BB = 0; BB < this._subEmitters.length; BB++)
            for (const TB of this._subEmitters[BB]) TB.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(BB, TB, dB, VB) {
        let yB;
        yB = dB instanceof PT.c ? null : dB;
        const lB = (0, cT.e)("BABYLON.Texture");
        if (lB && yB)
          if (BB.texture) TB.particleTexture = lB.Parse(BB.texture, yB, VB);
          else if (BB.textureName) {
          const dB = BB.textureSettings;
          if (TB.particleTexture = new lB(VB + BB.textureName, yB, !1, void 0 === BB.invertY || BB.invertY, dB ? dB.samplingMode : void 0), TB.particleTexture.name = BB.textureName, dB) {
            const BB = TB.particleTexture;
            for (const TB of CT) void 0 !== dB[TB] && (BB[TB] = dB[TB])
          }
        }
        if (BB.emitterId || 0 === BB.emitterId || void 0 !== BB.emitter ? (BB.emitterId || 0 === BB.emitterId) && yB ? (TB.emitter = yB.getLastMeshById(BB.emitterId), TB.emitter || (TB.emitter = pB.p.Zero())) : TB.emitter = pB.p.FromArray(BB.emitter) : TB.emitter = pB.p.Zero(), TB.isLocal = !!BB.isLocal, void 0 !== BB.renderingGroupId && (TB.renderingGroupId = BB.renderingGroupId), void 0 !== BB.isBillboardBased && (TB.isBillboardBased = BB.isBillboardBased), void 0 !== BB.billboardMode && (TB.billboardMode = BB.billboardMode), void 0 !== BB.useLogarithmicDepth && (TB.useLogarithmicDepth = BB.useLogarithmicDepth), BB.animations) {
          for (let dB = 0; dB < BB.animations.length; dB++) {
            const VB = BB.animations[dB],
              yB = (0, cT.e)("BABYLON.Animation");
            yB && TB.animations.push(yB.Parse(VB))
          }
          TB.beginAnimationOnStart = BB.beginAnimationOnStart, TB.beginAnimationFrom = BB.beginAnimationFrom, TB.beginAnimationTo = BB.beginAnimationTo, TB.beginAnimationLoop = BB.beginAnimationLoop
        }
        if (BB.autoAnimate && yB && yB.beginAnimation(TB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), TB.startDelay = 0 | BB.startDelay, TB.minAngularSpeed = BB.minAngularSpeed, TB.maxAngularSpeed = BB.maxAngularSpeed, TB.minSize = BB.minSize, TB.maxSize = BB.maxSize, BB.minScaleX && (TB.minScaleX = BB.minScaleX, TB.maxScaleX = BB.maxScaleX, TB.minScaleY = BB.minScaleY, TB.maxScaleY = BB.maxScaleY), void 0 !== BB.preWarmCycles && (TB.preWarmCycles = BB.preWarmCycles, TB.preWarmStepOffset = BB.preWarmStepOffset), void 0 !== BB.minInitialRotation && (TB.minInitialRotation = BB.minInitialRotation, TB.maxInitialRotation = BB.maxInitialRotation), TB.minLifeTime = BB.minLifeTime, TB.maxLifeTime = BB.maxLifeTime, TB.minEmitPower = BB.minEmitPower, TB.maxEmitPower = BB.maxEmitPower, TB.emitRate = BB.emitRate, TB.gravity = pB.p.FromArray(BB.gravity), BB.noiseStrength && (TB.noiseStrength = pB.p.FromArray(BB.noiseStrength)), TB.color1 = oB.d.FromArray(BB.color1), TB.color2 = oB.d.FromArray(BB.color2), TB.colorDead = oB.d.FromArray(BB.colorDead), TB.updateSpeed = BB.updateSpeed, TB.targetStopDuration = BB.targetStopDuration, TB.blendMode = BB.blendMode, BB.colorGradients)
          for (const pB of BB.colorGradients) TB.addColorGradient(pB.gradient, oB.d.FromArray(pB.color1), pB.color2 ? oB.d.FromArray(pB.color2) : void 0);
        if (BB.rampGradients) {
          for (const dB of BB.rampGradients) TB.addRampGradient(dB.gradient, oB.c.FromArray(dB.color));
          TB.useRampGradients = BB.useRampGradients
        }
        if (BB.colorRemapGradients)
          for (const pB of BB.colorRemapGradients) TB.addColorRemapGradient(pB.gradient, void 0 !== pB.factor1 ? pB.factor1 : pB.factor, pB.factor2);
        if (BB.alphaRemapGradients)
          for (const pB of BB.alphaRemapGradients) TB.addAlphaRemapGradient(pB.gradient, void 0 !== pB.factor1 ? pB.factor1 : pB.factor, pB.factor2);
        if (BB.sizeGradients)
          for (const pB of BB.sizeGradients) TB.addSizeGradient(pB.gradient, void 0 !== pB.factor1 ? pB.factor1 : pB.factor, pB.factor2);
        if (BB.angularSpeedGradients)
          for (const pB of BB.angularSpeedGradients) TB.addAngularSpeedGradient(pB.gradient, void 0 !== pB.factor1 ? pB.factor1 : pB.factor, pB.factor2);
        if (BB.velocityGradients)
          for (const pB of BB.velocityGradients) TB.addVelocityGradient(pB.gradient, void 0 !== pB.factor1 ? pB.factor1 : pB.factor, pB.factor2);
        if (BB.dragGradients)
          for (const pB of BB.dragGradients) TB.addDragGradient(pB.gradient, void 0 !== pB.factor1 ? pB.factor1 : pB.factor, pB.factor2);
        if (BB.emitRateGradients)
          for (const pB of BB.emitRateGradients) TB.addEmitRateGradient(pB.gradient, void 0 !== pB.factor1 ? pB.factor1 : pB.factor, pB.factor2);
        if (BB.startSizeGradients)
          for (const pB of BB.startSizeGradients) TB.addStartSizeGradient(pB.gradient, void 0 !== pB.factor1 ? pB.factor1 : pB.factor, pB.factor2);
        if (BB.lifeTimeGradients)
          for (const pB of BB.lifeTimeGradients) TB.addLifeTimeGradient(pB.gradient, void 0 !== pB.factor1 ? pB.factor1 : pB.factor, pB.factor2);
        if (BB.limitVelocityGradients) {
          for (const dB of BB.limitVelocityGradients) TB.addLimitVelocityGradient(dB.gradient, void 0 !== dB.factor1 ? dB.factor1 : dB.factor, dB.factor2);
          TB.limitVelocityDamping = BB.limitVelocityDamping
        }
        if (BB.noiseTexture && yB) {
          const dB = (0, cT.e)("BABYLON.ProceduralTexture");
          TB.noiseTexture = dB.Parse(BB.noiseTexture, yB, VB)
        }
        let JB;
        if (BB.particleEmitterType) {
          switch (BB.particleEmitterType.type) {
            case "SphereParticleEmitter":
              JB = new HB;
              break;
            case "SphereDirectedParticleEmitter":
              JB = new EB;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              JB = new mB;
              break;
            case "ConeDirectedParticleEmitter":
              JB = new iB;
              break;
            case "CylinderParticleEmitter":
              JB = new vB.g;
              break;
            case "CylinderDirectedParticleEmitter":
              JB = new vB.c;
              break;
            case "HemisphericParticleEmitter":
              JB = new uB;
              break;
            case "PointParticleEmitter":
              JB = new DB;
              break;
            case "MeshParticleEmitter":
              JB = new NB;
              break;
            case "CustomParticleEmitter":
              JB = new aT;
              break;
            default:
              JB = new kB.c
          }
          JB.parse(BB.particleEmitterType, yB)
        } else JB = new kB.c, JB.parse(BB, yB);
        TB.particleEmitterType = JB, TB.startSpriteCellID = BB.startSpriteCellID, TB.endSpriteCellID = BB.endSpriteCellID, TB.spriteCellLoop = BB.spriteCellLoop ?? !0, TB.spriteCellWidth = BB.spriteCellWidth, TB.spriteCellHeight = BB.spriteCellHeight, TB.spriteCellChangeSpeed = BB.spriteCellChangeSpeed, TB.spriteRandomStartCell = BB.spriteRandomStartCell, TB.disposeOnStop = BB.disposeOnStop ?? !1, TB.manualEmitCount = BB.manualEmitCount ?? -1
      }
      static Parse(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          yB = arguments.length > 4 ? arguments[4] : void 0;
        const lB = BB.name;
        let JB, YB, gB = null,
          kB = null;
        if (TB instanceof PT.c ? JB = TB : (YB = TB, JB = YB.PD()), BB.customShader && (0, PB.b)(JB.createEffectForParticles)) {
          kB = BB.customShader;
          const TB = kB.shaderOptions.defines.length > 0 ? kB.shaderOptions.defines.join("\n") : "";
          gB = JB.createEffectForParticles(kB.shaderPath.fragmentElement, kB.shaderOptions.uniforms, kB.shaderOptions.samplers, TB)
        }
        const LB = new GT(lB, yB || BB.Kk, TB, gB, BB.isAnimationSheetEnabled);
        if (LB.customShader = kB, LB._rootUrl = dB, BB.id && (LB.id = BB.id), BB.subEmitters) {
          LB.subEmitters = [];
          for (const VB of BB.subEmitters) {
            const BB = [];
            for (const yB of VB) BB.push(ST.Parse(yB, TB, dB));
            LB.subEmitters.push(BB)
          }
        }
        if (BB.attractors)
          for (const oB of BB.attractors) {
            const BB = new hT;
            BB.position = pB.p.FromArray(oB.position), BB.strength = oB.strength, LB.addAttractor(BB)
          }
        return GT._Parse(BB, LB, TB, dB), BB.textureMask && (LB.textureMask = oB.d.FromArray(BB.textureMask)), BB.worldOffset && (LB.worldOffset = pB.p.FromArray(BB.worldOffset)), BB.preventAutoStart && (LB.preventAutoStart = BB.preventAutoStart), BB.metadata && (LB.metadata = BB.metadata), VB || LB.preventAutoStart || LB.start(), LB
      }
      serialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const TB = {};
        if (GT._Serialize(TB, this, BB), TB.textureMask = this.textureMask.FVB(), TB.customShader = this.customShader, TB.preventAutoStart = this.preventAutoStart, TB.worldOffset = this.worldOffset.FVB(), this.metadata && (TB.metadata = this.metadata), this.subEmitters) {
          TB.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const dB of this._subEmitters) {
            const VB = [];
            for (const TB of dB) TB.particleSystem.doNotSerialize || VB.push(TB.serialize(BB));
            TB.subEmitters.push(VB)
          }
        }
        if (this._attractors && this._attractors.length) {
          TB.attractors = [];
          for (const BB of this._attractors) TB.attractors.push(BB.serialize())
        }
        return TB
      }
      static _Serialize(BB, TB, dB) {
        if (BB.name = TB.name, BB.id = TB.id, BB.Kk = TB.getCapacity(), BB.disposeOnStop = TB.disposeOnStop, BB.manualEmitCount = TB.manualEmitCount, TB.emitter.position) {
          const dB = TB.emitter;
          BB.emitterId = dB.id
        } else {
          const dB = TB.emitter;
          BB.emitter = dB.FVB()
        }
        if (TB.particleEmitterType && (BB.particleEmitterType = TB.particleEmitterType.serialize()), TB.particleTexture)
          if (dB) BB.texture = TB.particleTexture.serialize();
          else {
            const dB = TB.particleTexture;
            BB.textureName = TB.particleTexture.name, BB.invertY = !!dB._invertY;
            const VB = {};
            for (const BB of CT) VB[BB] = dB[BB];
            VB.samplingMode = dB.samplingMode, BB.textureSettings = VB
          } BB.isLocal = TB.isLocal, QT.c.AppendSerializedAnimations(TB, BB), BB.beginAnimationOnStart = TB.beginAnimationOnStart, BB.beginAnimationFrom = TB.beginAnimationFrom, BB.beginAnimationTo = TB.beginAnimationTo, BB.beginAnimationLoop = TB.beginAnimationLoop, BB.startDelay = TB.startDelay, BB.renderingGroupId = TB.renderingGroupId, BB.isBillboardBased = TB.isBillboardBased, BB.billboardMode = TB.billboardMode, BB.minAngularSpeed = TB.minAngularSpeed, BB.maxAngularSpeed = TB.maxAngularSpeed, BB.minSize = TB.minSize, BB.maxSize = TB.maxSize, BB.minScaleX = TB.minScaleX, BB.maxScaleX = TB.maxScaleX, BB.minScaleY = TB.minScaleY, BB.maxScaleY = TB.maxScaleY, BB.minEmitPower = TB.minEmitPower, BB.maxEmitPower = TB.maxEmitPower, BB.minLifeTime = TB.minLifeTime, BB.maxLifeTime = TB.maxLifeTime, BB.emitRate = TB.emitRate, BB.gravity = TB.gravity.FVB(), BB.noiseStrength = TB.noiseStrength.FVB(), BB.color1 = TB.color1.FVB(), BB.color2 = TB.color2.FVB(), BB.colorDead = TB.colorDead.FVB(), BB.updateSpeed = TB.updateSpeed, BB.targetStopDuration = TB.targetStopDuration, BB.blendMode = TB.blendMode, BB.preWarmCycles = TB.preWarmCycles, BB.preWarmStepOffset = TB.preWarmStepOffset, BB.minInitialRotation = TB.minInitialRotation, BB.maxInitialRotation = TB.maxInitialRotation, BB.startSpriteCellID = TB.startSpriteCellID, BB.spriteCellLoop = TB.spriteCellLoop, BB.endSpriteCellID = TB.endSpriteCellID, BB.spriteCellChangeSpeed = TB.spriteCellChangeSpeed, BB.spriteCellWidth = TB.spriteCellWidth, BB.spriteCellHeight = TB.spriteCellHeight, BB.spriteRandomStartCell = TB.spriteRandomStartCell, BB.isAnimationSheetEnabled = TB.isAnimationSheetEnabled, BB.useLogarithmicDepth = TB.useLogarithmicDepth;
        const VB = TB.getColorGradients();
        if (VB) {
          BB.colorGradients = [];
          for (const TB of VB) {
            const dB = {
              gradient: TB.gradient,
              color1: TB.color1.FVB()
            };
            TB.color2 ? dB.color2 = TB.color2.FVB() : dB.color2 = TB.color1.FVB(), BB.colorGradients.push(dB)
          }
        }
        const yB = TB.getRampGradients();
        if (yB) {
          BB.rampGradients = [];
          for (const TB of yB) {
            const dB = {
              gradient: TB.gradient,
              color: TB.color.FVB()
            };
            BB.rampGradients.push(dB)
          }
          BB.useRampGradients = TB.useRampGradients
        }
        const pB = TB.getColorRemapGradients();
        if (pB) {
          BB.colorRemapGradients = [];
          for (const TB of pB) {
            const dB = {
              gradient: TB.gradient,
              factor1: TB.factor1
            };
            void 0 !== TB.factor2 ? dB.factor2 = TB.factor2 : dB.factor2 = TB.factor1, BB.colorRemapGradients.push(dB)
          }
        }
        const lB = TB.getAlphaRemapGradients();
        if (lB) {
          BB.alphaRemapGradients = [];
          for (const TB of lB) {
            const dB = {
              gradient: TB.gradient,
              factor1: TB.factor1
            };
            void 0 !== TB.factor2 ? dB.factor2 = TB.factor2 : dB.factor2 = TB.factor1, BB.alphaRemapGradients.push(dB)
          }
        }
        const JB = TB.getSizeGradients();
        if (JB) {
          BB.sizeGradients = [];
          for (const TB of JB) {
            const dB = {
              gradient: TB.gradient,
              factor1: TB.factor1
            };
            void 0 !== TB.factor2 ? dB.factor2 = TB.factor2 : dB.factor2 = TB.factor1, BB.sizeGradients.push(dB)
          }
        }
        const YB = TB.getAngularSpeedGradients();
        if (YB) {
          BB.angularSpeedGradients = [];
          for (const TB of YB) {
            const dB = {
              gradient: TB.gradient,
              factor1: TB.factor1
            };
            void 0 !== TB.factor2 ? dB.factor2 = TB.factor2 : dB.factor2 = TB.factor1, BB.angularSpeedGradients.push(dB)
          }
        }
        const gB = TB.getVelocityGradients();
        if (gB) {
          BB.velocityGradients = [];
          for (const TB of gB) {
            const dB = {
              gradient: TB.gradient,
              factor1: TB.factor1
            };
            void 0 !== TB.factor2 ? dB.factor2 = TB.factor2 : dB.factor2 = TB.factor1, BB.velocityGradients.push(dB)
          }
        }
        const oB = TB.getDragGradients();
        if (oB) {
          BB.dragGradients = [];
          for (const TB of oB) {
            const dB = {
              gradient: TB.gradient,
              factor1: TB.factor1
            };
            void 0 !== TB.factor2 ? dB.factor2 = TB.factor2 : dB.factor2 = TB.factor1, BB.dragGradients.push(dB)
          }
        }
        const kB = TB.getEmitRateGradients();
        if (kB) {
          BB.emitRateGradients = [];
          for (const TB of kB) {
            const dB = {
              gradient: TB.gradient,
              factor1: TB.factor1
            };
            void 0 !== TB.factor2 ? dB.factor2 = TB.factor2 : dB.factor2 = TB.factor1, BB.emitRateGradients.push(dB)
          }
        }
        const LB = TB.getStartSizeGradients();
        if (LB) {
          BB.startSizeGradients = [];
          for (const TB of LB) {
            const dB = {
              gradient: TB.gradient,
              factor1: TB.factor1
            };
            void 0 !== TB.factor2 ? dB.factor2 = TB.factor2 : dB.factor2 = TB.factor1, BB.startSizeGradients.push(dB)
          }
        }
        const OB = TB.getLifeTimeGradients();
        if (OB) {
          BB.lifeTimeGradients = [];
          for (const TB of OB) {
            const dB = {
              gradient: TB.gradient,
              factor1: TB.factor1
            };
            void 0 !== TB.factor2 ? dB.factor2 = TB.factor2 : dB.factor2 = TB.factor1, BB.lifeTimeGradients.push(dB)
          }
        }
        const DB = TB.getLimitVelocityGradients();
        if (DB) {
          BB.limitVelocityGradients = [];
          for (const TB of DB) {
            const dB = {
              gradient: TB.gradient,
              factor1: TB.factor1
            };
            void 0 !== TB.factor2 ? dB.factor2 = TB.factor2 : dB.factor2 = TB.factor1, BB.limitVelocityGradients.push(dB)
          }
          BB.limitVelocityDamping = TB.limitVelocityDamping
        }
        TB.noiseTexture && (BB.noiseTexture = TB.noiseTexture.serialize())
      }
      clone(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const VB = {
          ...this._customWrappers
        };
        let yB = null;
        const pB = this._engine;
        if ((0, PB.b)(pB.createEffectForParticles) && null != this.customShader) {
          yB = this.customShader;
          const BB = yB.shaderOptions.defines.length > 0 ? yB.shaderOptions.defines.join("\n") : "",
            TB = pB.createEffectForParticles(yB.shaderPath.fragmentElement, yB.shaderOptions.uniforms, yB.shaderOptions.samplers, BB);
          VB[0] ? VB[0].effect = TB : this.setCustomEffect(TB, 0)
        }
        const lB = this.serialize(dB),
          JB = !1 === dB && this.particleTexture ? this.particleTexture.clone() : null;
        JB && (lB.textureName = void 0);
        const YB = GT.Parse(lB, this._scene || this._engine, this._rootUrl);
        return YB.name = BB, YB.customShader = yB, YB._customWrappers = VB, JB && (YB.particleTexture = JB), void 0 === TB && (TB = this.emitter), this.noiseTexture && (YB.noiseTexture = this.noiseTexture.clone()), YB.emitter = TB, this.preventAutoStart || YB.start(), YB
      }
    }
    GT.BILLBOARDMODE_Y = 2, GT.BILLBOARDMODE_ALL = 7, GT.BILLBOARDMODE_STRETCHED = 8, GT.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let qT = !1;
    qT || (qT = !0, ST._ParseParticleSystem = GT.Parse)
  },
  40355: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      SkyMaterial: () => mB,
      _MaxColorValueForRenderTarget: () => vB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(38772),
      lB = dB(36119),
      JB = dB(39034),
      YB = dB(39080),
      gB = dB(40312),
      oB = dB(39994),
      kB = dB(38840),
      LB = dB(36166),
      OB = dB(39108),
      DB = dB(39088),
      uB = dB(39075),
      HB = dB(39073);
    class EB extends JB.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function vB(BB) {
      switch (BB) {
        case gB.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case gB.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let mB = (() => {
      var BB;
      let TB, JB, gB, LB, mB, iB, NB, tB, fB, sB, MB, zB, wB, UB, FB, KB = YB.c,
        rB = [],
        IB = [],
        cB = [],
        SB = [],
        PB = [],
        QB = [],
        RB = [],
        aB = [],
        ZB = [],
        XB = [],
        WB = [],
        hB = [],
        CB = [],
        GB = [],
        qB = [],
        xB = [],
        jB = [],
        AB = [],
        bB = [],
        nB = [],
        eB = [],
        BT = [],
        TT = [],
        dT = [],
        VT = [],
        yT = [],
        pT = [],
        lT = [],
        JT = [],
        YT = [];
      return BB = class extends KB {
        constructor(BB, TB) {
          super(BB, TB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, VB.h)(this, rB, 1), this.turbidity = ((0, VB.h)(this, IB), (0, VB.h)(this, cB, 10)), this.rayleigh = ((0, VB.h)(this, SB), (0, VB.h)(this, PB, 2)), this.mieCoefficient = ((0, VB.h)(this, QB), (0, VB.h)(this, RB, .005)), this.mieDirectionalG = ((0, VB.h)(this, aB), (0, VB.h)(this, ZB, .8)), this.distance = ((0, VB.h)(this, XB), (0, VB.h)(this, WB, 500)), this.inclination = ((0, VB.h)(this, hB), (0, VB.h)(this, CB, .49)), this.azimuth = ((0, VB.h)(this, GB), (0, VB.h)(this, qB, .25)), this.sunPosition = ((0, VB.h)(this, xB), (0, VB.h)(this, jB, new lB.RD(0, 100, 0))), this.useSunPosition = ((0, VB.h)(this, AB), (0, VB.h)(this, bB, !1)), this.cameraOffset = ((0, VB.h)(this, nB), (0, VB.h)(this, eB, lB.RD.Zero())), this.up = ((0, VB.h)(this, BT), (0, VB.h)(this, TT, lB.RD.Up())), this.dithering = ((0, VB.h)(this, dT), (0, VB.h)(this, VT, !1)), this.rawHdrOutput = ((0, VB.h)(this, yT), (0, VB.h)(this, pT, !1)), this.cloudiness = ((0, VB.h)(this, lT), (0, VB.h)(this, JT, 0)), this._cameraPosition = ((0, VB.h)(this, YT), lB.RD.Zero()), this._skyOrientation = new lB.Quaternion
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
        isReadyForSubMesh(TB, dB) {
          const VB = dB._drawWrapper;
          if (this.isFrozen && VB.effect && VB._wasPreviouslyReady) return !0;
          dB.materialDefines || (dB.materialDefines = new EB);
          const yB = dB.materialDefines,
            pB = this.jU();
          if (this._isReadyForSubMesh(dB)) return !0;
          if ((0, HB.W)(TB, pB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, yB, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, HB.I)(TB, yB, !0, !1), yB.IMAGEPROCESSINGPOSTPROCESS !== pB.imageProcessingConfiguration.applyByPostProcess && yB.markAsMiscDirty(), yB.DITHER !== this.dithering && yB.markAsMiscDirty(), yB.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && yB.markAsMiscDirty(), yB.isDirty) {
            yB.markAsProcessed(), pB.resetCachedMaterial();
            const TB = new DB.d;
            yB.FOG && TB.addFallback(1, "FOG"), yB.IMAGEPROCESSINGPOSTPROCESS = pB.imageProcessingConfiguration.applyByPostProcess, yB.DITHER = this.dithering, yB.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const VB = [oB.f.PositionKind];
            yB.VERTEXCOLOR && VB.push(oB.f.ColorKind);
            const lB = "sky",
              JB = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, uB.c)(JB);
            const YB = yB.toString();
            dB.setEffect(pB.PD().createEffect(lB, {
              attributes: VB,
              uniformsNames: JB,
              uniformBuffersNames: [],
              samplers: [],
              defines: YB,
              fallbacks: TB,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, pB.PD()), yB, this._materialContext)
          }
          return !(!dB.effect || !dB.effect.isReady()) && (yB._renderId = pB.getRenderId(), VB._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(BB, TB, dB) {
          const VB = this.jU(),
            yB = dB.materialDefines;
          if (!yB) return;
          const pB = dB.effect;
          if (!pB) return;
          this._activeEffect = pB, this.bindOnlyWorldMatrix(BB), this._activeEffect.setMatrix("viewProjection", VB.getTransformMatrix()), this._mustRebind(VB, pB, dB) && ((0, uB.d)(pB, this, VB), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, HB.p)(yB, pB, VB)), VB.fogEnabled && TB.applyFog && VB.fogMode !== kB.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", VB.getViewMatrix()), (0, HB.h)(VB, TB, this._activeEffect, this.rawHdrOutput);
          const JB = VB.activeCamera;
          if (JB) {
            const BB = JB.getWorldMatrix();
            this._cameraPosition.x = BB.m[12], this._cameraPosition.y = BB.m[13], this._cameraPosition.z = BB.m[14], this._activeEffect.setVector3("cameraPosition", lB.TmpVectors.RD[0].bdB(this._cameraPosition).qVB(VB.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const BB = VB.PD()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", vB(BB?.texture?.type))
          }
          if (!this.useSunPosition) {
            const BB = Math.PI * (this.inclination - .5),
              TB = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(TB) * Math.cos(BB), this.sunPosition.y = this.distance * Math.sin(-BB), this.sunPosition.z = this.distance * Math.sin(TB) * Math.cos(BB), lB.Quaternion.FromUnitVectorsToRef(lB.RD.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(TB, this._activeEffect, dB)
        }
        getAnimatables() {
          return []
        }
        dispose(BB) {
          super.dispose(BB)
        }
        clone(TB) {
          return pB.c.Clone((() => new BB(TB, this.jU())), this)
        }
        serialize() {
          const BB = super.serialize();
          return BB.customType = "BABYLON.SkyMaterial", BB
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(TB, dB, VB) {
          return pB.c.Parse((() => new BB(TB.name, dB)), TB, dB, VB)
        }
      }, (() => {
        const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(KB[Symbol.metadata] ?? null) : void 0;
        TB = [(0, yB.W)()], JB = [(0, yB.W)()], gB = [(0, yB.W)()], LB = [(0, yB.W)()], mB = [(0, yB.W)()], iB = [(0, yB.W)()], NB = [(0, yB.W)()], tB = [(0, yB.W)()], fB = [(0, yB.T)()], sB = [(0, yB.W)()], MB = [(0, yB.T)()], zB = [(0, yB.T)()], wB = [(0, yB.W)()], UB = [(0, yB.W)()], FB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: BB => "luminance" in BB,
            get: BB => BB.luminance,
            set: (BB, TB) => {
              BB.luminance = TB
            }
          },
          metadata: dB
        }, rB, IB), (0, VB.g)(null, null, JB, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: BB => "turbidity" in BB,
            get: BB => BB.turbidity,
            set: (BB, TB) => {
              BB.turbidity = TB
            }
          },
          metadata: dB
        }, cB, SB), (0, VB.g)(null, null, gB, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: BB => "rayleigh" in BB,
            get: BB => BB.rayleigh,
            set: (BB, TB) => {
              BB.rayleigh = TB
            }
          },
          metadata: dB
        }, PB, QB), (0, VB.g)(null, null, LB, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: BB => "mieCoefficient" in BB,
            get: BB => BB.mieCoefficient,
            set: (BB, TB) => {
              BB.mieCoefficient = TB
            }
          },
          metadata: dB
        }, RB, aB), (0, VB.g)(null, null, mB, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: BB => "mieDirectionalG" in BB,
            get: BB => BB.mieDirectionalG,
            set: (BB, TB) => {
              BB.mieDirectionalG = TB
            }
          },
          metadata: dB
        }, ZB, XB), (0, VB.g)(null, null, iB, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: BB => "distance" in BB,
            get: BB => BB.distance,
            set: (BB, TB) => {
              BB.distance = TB
            }
          },
          metadata: dB
        }, WB, hB), (0, VB.g)(null, null, NB, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: BB => "inclination" in BB,
            get: BB => BB.inclination,
            set: (BB, TB) => {
              BB.inclination = TB
            }
          },
          metadata: dB
        }, CB, GB), (0, VB.g)(null, null, tB, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: BB => "azimuth" in BB,
            get: BB => BB.azimuth,
            set: (BB, TB) => {
              BB.azimuth = TB
            }
          },
          metadata: dB
        }, qB, xB), (0, VB.g)(null, null, fB, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: BB => "sunPosition" in BB,
            get: BB => BB.sunPosition,
            set: (BB, TB) => {
              BB.sunPosition = TB
            }
          },
          metadata: dB
        }, jB, AB), (0, VB.g)(null, null, sB, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSunPosition" in BB,
            get: BB => BB.useSunPosition,
            set: (BB, TB) => {
              BB.useSunPosition = TB
            }
          },
          metadata: dB
        }, bB, nB), (0, VB.g)(null, null, MB, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: BB => "cameraOffset" in BB,
            get: BB => BB.cameraOffset,
            set: (BB, TB) => {
              BB.cameraOffset = TB
            }
          },
          metadata: dB
        }, eB, BT), (0, VB.g)(null, null, zB, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: BB => "up" in BB,
            get: BB => BB.up,
            set: (BB, TB) => {
              BB.up = TB
            }
          },
          metadata: dB
        }, TT, dT), (0, VB.g)(null, null, wB, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: BB => "dithering" in BB,
            get: BB => BB.dithering,
            set: (BB, TB) => {
              BB.dithering = TB
            }
          },
          metadata: dB
        }, VT, yT), (0, VB.g)(null, null, UB, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: BB => "rawHdrOutput" in BB,
            get: BB => BB.rawHdrOutput,
            set: (BB, TB) => {
              BB.rawHdrOutput = TB
            }
          },
          metadata: dB
        }, pT, lT), (0, VB.g)(null, null, FB, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: BB => "cloudiness" in BB,
            get: BB => BB.cloudiness,
            set: (BB, TB) => {
              BB.cloudiness = TB
            }
          },
          metadata: dB
        }, JT, YT), dB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: dB
        })
      })(), BB._ShaderLoader = new OB.b((() => [dB.e(310).then((() => dB(59775))), dB.e(303).then((() => dB(59779)))]), (() => [dB.e(327).then((() => dB(59786))), dB.e(321).then((() => dB(59790)))])), BB
    })();
    (0, LB.g)("BABYLON.SkyMaterial", mB)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);